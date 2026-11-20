// Builds the Output 1.2 Consolidated Synthesis Report as a .docx
// Usage: node synthesis/build.js out.docx   (then run src/update_toc.py twice to fill the TOC)
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, TableOfContents, Footer, Header, PageNumber,
  PageBreak, ImageRun, VerticalAlign, LineRuleType, SectionType,
} = require("docx");

const { execSummary, ch1, ch2 } = require("./content_front");
const { ch3, ch4 } = require("./content_framework");
const { ch5 } = require("./content_activities");
const { ch6, ch7 } = require("./content_me_roadmap");
const { annexes, acronyms, references } = require("./content_back");

const FONT = "Calibri";
const GREEN = "1F5135";
const ACCENT = "C8A951";
const LIGHT = "E8F0EA";
const BAND = "D5E3D9";
const TABLE_W = 9026; // A4 with 1" margins

const allBlocks = [execSummary, ch1, ch2, ch3, ch4, ch5, ch6, ch7, annexes];

// ---- Pre-pass: number tables and figures, resolve {T:id} / {F:id} references ----
const tNum = {}, fNum = {};
{
  let t = 0, f = 0;
  for (const blocks of allBlocks) for (const b of blocks) {
    if (b.tbl) { t += 1; if (b.tbl.id) tNum[b.tbl.id] = t; }
    if (b.img) { f += 1; if (b.img.id) fNum[b.img.id] = f; }
  }
}
// Every table must be introduced by the paragraph directly before it, which must cite it.
for (const blocks of allBlocks) blocks.forEach((b, i) => {
  if (!b.tbl) return;
  const prev = blocks[i - 1];
  if (!b.tbl.id || !prev || !prev.p || !prev.p.includes(`{T:${b.tbl.id}}`)) {
    throw new Error("Table without an introductory paragraph citing it: " + b.tbl.caption);
  }
});
function resolve(text) {
  return text
    .replace(/\{T:([a-z0-9]+)\}/g, (_, id) => { if (!tNum[id]) throw new Error("Unknown table ref " + id); return `Table ${tNum[id]}`; })
    .replace(/\{F:([a-z0-9]+)\}/g, (_, id) => { if (!fNum[id]) throw new Error("Unknown figure ref " + id); return `Figure ${fNum[id]}`; });
}

// Parse **bold** markup into runs
function runs(text, opts = {}) {
  return resolve(text).split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((s) =>
    s.startsWith("**")
      ? new TextRun({ text: s.slice(2, -2), bold: true, ...opts })
      : new TextRun({ text: s, ...opts })
  );
}

const border = { style: BorderStyle.SINGLE, size: 4, color: "B7C4BB" };
const borders = { top: border, bottom: border, left: border, right: border };

function cell(text, width, header, size, extra = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: header ? { fill: GREEN, type: ShadingType.CLEAR, color: "auto" } : (extra.fill ? { fill: extra.fill, type: ShadingType.CLEAR, color: "auto" } : undefined),
    margins: { top: size <= 17 ? 20 : 40, bottom: size <= 17 ? 20 : 40, left: 80, right: 80 },
    columnSpan: extra.span,
    verticalAlign: VerticalAlign.TOP,
    children: [new Paragraph({
      spacing: { before: 0, after: 0, line: 240 },
      children: runs(text, { size, color: header ? "FFFFFF" : undefined, bold: header || extra.bold || undefined }),
    })],
  });
}

let tableNo = 0, figNo = 0;
function caption(label, n, text) {
  return new Paragraph({
    keepNext: true,
    spacing: { before: 160, after: 80 },
    children: [new TextRun({ text: `${label} ${n}: `, bold: true, color: GREEN, size: 20 }),
      new TextRun({ text, italics: true, size: 20 })],
  });
}

function table(t) {
  tableNo += 1;
  const size = t.small ? 16 : 18;
  const out = [caption("Table", tableNo, t.caption)];
  const rows = [new TableRow({ tableHeader: true, children: t.head.map((h, i) => cell(h, t.cols[i], true, size)) })];
  t.rows.forEach((r) => {
    if (r.length === 1 && typeof r[0] === "object") {
      // section row spanning all columns
      rows.push(new TableRow({ cantSplit: false, children: [cell(r[0].t, TABLE_W, false, size, { span: t.cols.length, fill: BAND, bold: true })] }));
    } else {
      rows.push(new TableRow({ cantSplit: false, children: r.map((c, i) => cell(c, t.cols[i], false, size, i === 0 ? { bold: false } : {})) }));
    }
  });
  out.push(new Table({ width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: t.cols, rows }));
  out.push(new Paragraph({ spacing: { after: 100 }, children: [] }));
  return out;
}

function figure(f) {
  figNo += 1;
  const data = fs.readFileSync(path.join(__dirname, "figures", f.file));
  return [
    caption("Figure", figNo, f.caption),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 140, line: 240, lineRule: LineRuleType.AUTO },
      children: [new ImageRun({ type: "png", data, transformation: { width: f.w, height: f.h } })] }),
  ];
}

function note(text) {
  return new Paragraph({
    spacing: { before: 160, after: 200 },
    shading: { fill: LIGHT, type: ShadingType.CLEAR, color: "auto" },
    border: { left: { style: BorderStyle.SINGLE, size: 24, color: ACCENT, space: 8 } },
    indent: { left: 200, right: 200 },
    children: runs(text, { italics: true, size: 21 }),
  });
}

let h1No = 0, h2No = 0;
function render(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.h === 1) {
      let label = b.t;
      if (b.numbered !== false) { h1No += 1; h2No = 0; label = `${h1No}. ${b.t}`; }
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, children: [new TextRun(label)] }));
    } else if (b.h === 2) {
      h2No += 1;
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(`${h1No}.${h2No} ${b.t}`)] }));
    } else if (b.h === 3) {
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(b.t)] }));
    } else if (b.p) {
      out.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: runs(b.p) }));
    } else if (b.b) {
      b.b.forEach((item) => out.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, alignment: AlignmentType.JUSTIFIED, children: runs(item) })));
    } else if (b.tbl) {
      out.push(...table(b.tbl));
    } else if (b.img) {
      out.push(...figure(b.img));
    } else if (b.note) {
      out.push(note(b.note));
    }
  }
  return out;
}

// ---- Title page ----
const titlePage = [
  new Paragraph({ spacing: { before: 1600 }, children: [new TextRun({ text: "KAZA Regenerative Nature-Based Tourism (R-NBT)", size: 24, color: GREEN, bold: true })] }),
  new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 6 } },
    spacing: { before: 200, after: 300 },
    children: [new TextRun({ text: "Consolidated Synthesis Report", bold: true, size: 56, color: GREEN, font: FONT })],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Piloting Financial Mechanisms for R-NBT MSMEs under Output 1.2: Strategic Framework, Recommendations for Activities 1.2.1, 1.2.2 and 1.2.3, M&E Framework and Roadmap, Organized by Priority Value Chain", size: 30, color: "333333" })] }),
  new Paragraph({ spacing: { after: 900 }, children: [new TextRun({ text: "Kavango Zambezi Transfrontier Conservation Area: Angola · Botswana · Namibia · Zambia · Zimbabwe", size: 22, color: GREEN, bold: true })] }),
  new Paragraph({ children: [new TextRun({ text: "F6-D9: Consolidated Synthesis Report", bold: true, size: 24 })] }),
  new Paragraph({ children: [new TextRun({ text: "Synthesizing F1-D4 Financial Landscape Analysis, F2-D5 Barriers and Opportunities Report, F3-D6 Investment Readiness and Enterprise Strengthening Assessment, F4-D7 Financing Mechanisms Assessment, F5-D8 Pre-Engagement and Roundtable Finance Segment Reports, and the GM3-D10 Micro Diagnostic Reports", size: 20, color: "555555", italics: true })] }),
  new Paragraph({ spacing: { before: 1000 }, children: [new TextRun({ text: "DRAFT FOR VALIDATION", bold: true, size: 22, color: "B03A2E" })] }),
  new Paragraph({ children: [new TextRun({ text: "November 2026 (Version 2: incorporates the November 2026 destination working sessions)", size: 22 })] }),
  new Paragraph({ spacing: { before: 400 }, children: [new TextRun({ text: "Prepared by: Modesta Nyirenda", size: 22, italics: true })] }),
  new Paragraph({ children: [new PageBreak()] }),
];

const tocPage = [
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Table of Contents", bold: true, size: 32, color: GREEN })] }),
  new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-2" }),
];

const acronymPage = [
  new Paragraph({ spacing: { before: 360, after: 160 }, keepNext: true, children: [new TextRun({ text: "Acronyms and Abbreviations", bold: true, size: 32, color: GREEN })] }),
  new Table({
    width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: [1800, 7226],
    rows: [new TableRow({ tableHeader: true, children: [cell("Acronym", 1800, true, 18), cell("Meaning", 7226, true, 18)] }),
      ...acronyms.map(([a, m]) => new TableRow({ children: [cell(`**${a}**`, 1800, false, 16), cell(m, 7226, false, 16)] }))],
  }),
  new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Source codes: F1 = F1-D4 Financial Landscape Analysis; F2 = F2-D5 Barriers and Opportunities Report; F3 = F3-D6 Investment Readiness and Enterprise Strengthening Assessment; F4 = F4-D7 Financing Mechanisms Assessment; F5 = F5-D8 Pre-Engagement Report and Synthesis; MD = Macro Diagnostic; MiD1, MiD2 = GM3-D10 Micro Diagnostic Reports for Hwange–Victoria Falls–Livingstone and Okavango Delta–Maun; RT-VF, RT-MN = F5-D8 roundtable finance segment reports for Victoria Falls and Maun (November 2026). Section references (§) point to sections of those reports.", italics: true, size: 19, color: "444444" })] }),
];

const body = [execSummary, ch1, ch2, ch3, ch4, ch5, ch6, ch7, annexes].flatMap(render);

const refs = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, children: [new TextRun("Annex D: References")] }),
  ...[...references].map((r) => new Paragraph({
    indent: { left: 567, hanging: 567 }, spacing: { after: 100 },
    children: [new TextRun({ text: r, size: 20 })],
  })),
  new Paragraph({ spacing: { before: 160 }, children: [new TextRun({ text: "Further primary and secondary references are listed in the source reports F1–F5.", italics: true, size: 19, color: "555555" })] }),
];

const pageProps = { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } };
const hdr = () => new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "KAZA R-NBT Output 1.2 Consolidated Synthesis Report (F6-D9) — Draft for Validation", size: 16, color: "777777" })] })] });
const ftr = () => new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
  new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 18, color: "555555" })] })] });

const doc = new Document({
  creator: "Modesta Nyirenda",
  title: "Consolidated Synthesis Report – KAZA R-NBT Output 1.2",
  description: "Strategic framework, recommendations for Activities 1.2.1–1.2.3, M&E framework and roadmap for piloting financial mechanisms for R-NBT MSMEs in KAZA",
  features: { updateFields: true },
  styles: {
    default: { document: { run: { font: FONT, size: 20 }, paragraph: { spacing: { after: 90, line: 250, lineRule: LineRuleType.AUTO } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: GREEN, font: FONT },
        paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0, keepNext: true,
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 4 } } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 25, bold: true, color: GREEN, font: FONT },
        paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 1, keepNext: true } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, color: "3D6B50", font: FONT },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2, keepNext: true } },
    ],
  },
  numbering: {
    config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] }],
  },
  sections: [
    { properties: { ...pageProps, titlePage: true }, headers: { default: hdr(), first: new Header({ children: [] }) },
      footers: { default: ftr(), first: new Footer({ children: [] }) }, children: [...titlePage, ...tocPage, ...acronymPage] },
    { properties: { ...pageProps, type: SectionType.CONTINUOUS }, headers: { default: hdr() }, footers: { default: ftr() }, children: [...body, ...refs] },
  ],
});

const out = process.argv[2] || path.join(__dirname, "..", "F6-D9_Consolidated_Synthesis_Report_Output_1.2_DRAFT_Nov2026.docx");
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log("Wrote", out, "tables:", tableNo, "figures:", figNo); });
