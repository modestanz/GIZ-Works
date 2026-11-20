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

// Presentation follows the F4-D7 house style (Times New Roman, green table headers, teal captions).
const FONT = "Times New Roman";
const GREEN = "1F5135";      // figure labels (as in F4-D7)
const TEAL = "1F4E5F";       // table labels, cover title, front-matter headings
const HEAD_FILL = "117A02";  // table header rows
const ACCENT = "C8A951";
const LIGHT = "E8F0EA";
const BAND = "E2EFDA";
const TABLE_W = 9746; // A4 with 0.75" side margins
const FIG_SCALE = 1.0;
const SRC_W = 9026;   // widths in the content files are given for 9026; scaled to TABLE_W

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
    shading: header ? { fill: HEAD_FILL, type: ShadingType.CLEAR, color: "auto" } : (extra.fill ? { fill: extra.fill, type: ShadingType.CLEAR, color: "auto" } : undefined),
    margins: { top: 35, bottom: 35, left: 90, right: 90 },
    columnSpan: extra.span,
    verticalAlign: VerticalAlign.TOP,
    children: [new Paragraph({
      spacing: { before: 0, after: 0, line: 245, lineRule: LineRuleType.EXACT },
      children: runs(text, { size, font: FONT, color: header ? "FFFFFF" : undefined, bold: header || extra.bold || undefined }),
    })],
  });
}

let tableNo = 0, figNo = 0;
function caption(label, n, text) {
  return new Paragraph({
    keepNext: true, keepLines: true,
    spacing: { before: 160, after: 80 },
    children: [new TextRun({ text: `${label} ${n}: `, bold: true, color: label === "Table" ? TEAL : GREEN, size: 20 }),
      new TextRun({ text, italics: true, size: 20 })],
  });
}

function table(t) {
  tableNo += 1;
  const size = 17;
  const k = TABLE_W / SRC_W;
  const cols = t.cols.map((c) => Math.round(c * k));
  cols[cols.length - 1] += TABLE_W - cols.reduce((a, b) => a + b, 0);
  const out = [caption("Table", tableNo, t.caption)];
  const rows = [new TableRow({ tableHeader: true, children: t.head.map((h, i) => cell(h, cols[i], true, size)) })];
  t.rows.forEach((r) => {
    if (r.length === 1 && typeof r[0] === "object") {
      // section row spanning all columns
      rows.push(new TableRow({ cantSplit: false, children: [cell(r[0].t, TABLE_W, false, size, { span: cols.length, fill: BAND, bold: true })] }));
    } else {
      rows.push(new TableRow({ cantSplit: false, children: r.map((c, i) => cell(c, cols[i], false, size, i === 0 ? { bold: false } : {})) }));
    }
  });
  out.push(new Table({ width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: cols, rows }));
  out.push(new Paragraph({ spacing: { before: 0, after: 0, line: 120, lineRule: LineRuleType.EXACT }, children: [] }));
  return out;
}

function figure(f) {
  figNo += 1;
  const data = fs.readFileSync(path.join(__dirname, "figures", f.file));
  return [
    caption("Figure", figNo, f.caption),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 140, line: 240, lineRule: LineRuleType.AUTO },
      children: [new ImageRun({ type: "png", data, transformation: { width: Math.round(f.w * FIG_SCALE), height: Math.round(f.h * FIG_SCALE) } })] }),
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
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, children: [new TextRun(label === "Executive Summary" ? { text: label, color: TEAL } : label)] }));
    } else if (b.h === 2) {
      h2No += 1;
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(`${h1No}.${h2No} ${b.t}`)] }));
    } else if (b.h === 3) {
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(b.t)] }));
    } else if (b.p) {
      out.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: runs(b.p) }));
    } else if (b.b) {
      b.b.forEach((item) => out.push(new Paragraph({ style: "BulletParagraph", numbering: { reference: "bullets", level: 0 }, alignment: AlignmentType.JUSTIFIED, children: runs(item) })));
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

// ---- Title page (layout of the F4-D7 cover) ----
const brand = (f) => fs.readFileSync(path.join(__dirname, "figures", "brand", f));
const center = (children, spacing = {}) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { line: 240, lineRule: LineRuleType.AUTO, after: 100, ...spacing }, children });
const titlePage = [
  center([new TextRun({ text: "Consolidated Synthesis Report", bold: true, size: 40, color: TEAL })], { before: 1200, after: 100 }),
  center([new TextRun({ text: "Piloting Financial Mechanisms for R-NBT MSMEs under Output 1.2: Strategic Framework, Recommendations for Activities 1.2.1, 1.2.2 and 1.2.3, M&E Framework and Roadmap, Organized by Priority Value Chain", italics: true, size: 24 })], { before: 288 }),
  center([new TextRun({ text: "Kavango Zambezi Transfrontier Conservation Area: Angola · Botswana · Namibia · Zambia · Zimbabwe", italics: true, size: 24 })], { after: 1100 }),
  center([new TextRun({ text: "F6-D9: Consolidated Synthesis Report", bold: true, size: 24 })], { after: 120 }),
  center([new TextRun({ text: "Synthesizing F1-D4 Financial Landscape Analysis, F2-D5 Barriers and Opportunities Report, F3-D6 Investment Readiness and Enterprise Strengthening Assessment, F4-D7 Financing Mechanisms Assessment, F5-D8 Pre-Engagement and Roundtable Finance Segment Reports, and the GM3-D10 Micro Diagnostic Reports", italics: true, size: 18 })], { after: 500 }),
  center([new TextRun({ text: "November 2026 (Version 2: incorporates the November 2026 destination working sessions)", size: 22 })], { after: 0 }),
  center([new TextRun({ text: "DRAFT FOR VALIDATION", bold: true, size: 22 })], { after: 1300 }),
  center([new TextRun({ text: "Prepared by:", bold: true, italics: true, size: 18 })], { after: 40 }),
  center([new TextRun({ text: "Modesta Nyirenda", size: 18 })], { after: 40 }),
  center([new ImageRun({ type: "jpg", data: brand("mnz_logo.jpeg"), transformation: { width: 89, height: 48 } })], { after: 0 }),
];
const coverHeader = new Header({ children: [
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: "KAZA Regenerative Nature-Based Tourism (R-NBT)", bold: true, italics: true, size: 22 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "jpg", data: brand("partner_logos.jpeg"), transformation: { width: 602, height: 89 } })] }),
] });
const coverFooter = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "png", data: brand("giz_logo.png"), transformation: { width: 128, height: 67 } })] })] });

const tocPage = [
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Table of Contents", bold: true, size: 28, color: TEAL })] }),
  new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-2" }),
];

const acronymPage = [
  new Paragraph({ spacing: { before: 360, after: 160 }, keepNext: true, children: [new TextRun({ text: "Acronyms and Abbreviations", bold: true, size: 28, color: TEAL })] }),
  new Table({
    width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: [1950, 7796],
    rows: [new TableRow({ tableHeader: true, children: [cell("Acronym", 1950, true, 17), cell("Meaning", 7796, true, 17)] }),
      ...acronyms.map(([a, m]) => new TableRow({ children: [cell(a, 1950, false, 17), cell(m, 7796, false, 17)] }))],
  }),
  new Paragraph({ spacing: { before: 200 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: "Source codes: F1 = F1-D4 Financial Landscape Analysis; F2 = F2-D5 Barriers and Opportunities Report; F3 = F3-D6 Investment Readiness and Enterprise Strengthening Assessment; F4 = F4-D7 Financing Mechanisms Assessment; F5 = F5-D8 Pre-Engagement Report and Synthesis; MD = Macro Diagnostic; MiD1, MiD2 = GM3-D10 Micro Diagnostic Reports for Hwange–Victoria Falls–Livingstone and Okavango Delta–Maun; RT-VF, RT-MN = F5-D8 roundtable finance segment reports for Victoria Falls and Maun (November 2026). Section references (§) point to sections of those reports.", italics: true, size: 18 })] }),
];

const body = [execSummary, ch1, ch2, ch3, ch4, ch5, ch6, ch7, annexes].flatMap(render);

const refs = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, children: [new TextRun("Annex D: References")] }),
  ...[...references].map((r) => new Paragraph({
    indent: { left: 567, hanging: 567 }, spacing: { after: 100 }, alignment: AlignmentType.LEFT,
    children: [new TextRun({ text: r, size: 20 })],
  })),
  new Paragraph({ spacing: { before: 160 }, children: [new TextRun({ text: "Further primary and secondary references are listed in the source reports F1–F5.", italics: true, size: 18 })] }),
];

const coverProps = { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 708, footer: 708 } } };
const pageProps = { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1080, bottom: 1440, left: 1080, header: 708, footer: 708 } } };
const hdr = () => new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "KAZA R-NBT Output 1.2 Consolidated Synthesis Report (F6-D9) — Draft for Validation", size: 16 })] })] });
const ftr = () => new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
  new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] });

const doc = new Document({
  creator: "Modesta Nyirenda",
  title: "Consolidated Synthesis Report – KAZA R-NBT Output 1.2",
  description: "Strategic framework, recommendations for Activities 1.2.1–1.2.3, M&E framework and roadmap for piloting financial mechanisms for R-NBT MSMEs in KAZA",
  features: { updateFields: true },
  styles: {
    default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 160, line: 259, lineRule: LineRuleType.AUTO } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "262626", font: FONT },
        paragraph: { spacing: { before: 240, after: 0 }, outlineLevel: 0, keepNext: true, keepLines: true } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "262626", font: FONT },
        paragraph: { spacing: { before: 40, after: 0 }, outlineLevel: 1, keepNext: true, keepLines: true } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, italics: true, color: "0D0D0D", font: FONT },
        paragraph: { spacing: { before: 40, after: 0 }, outlineLevel: 2, keepNext: true, keepLines: true } },
      { id: "TOC1", name: "toc 1", basedOn: "Normal", next: "Normal",
        paragraph: { spacing: { before: 0, after: 20 } } },
      { id: "TOC2", name: "toc 2", basedOn: "Normal", next: "Normal",
        paragraph: { spacing: { before: 0, after: 20 }, indent: { left: 283 } } },
      { id: "BulletParagraph", name: "Bullet Paragraph", basedOn: "Normal", quickFormat: true,
        paragraph: { indent: { left: 720 }, contextualSpacing: true } },
    ],
  },
  numbering: {
    config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }],
  },
  sections: [
    { properties: { ...coverProps, titlePage: true }, headers: { default: hdr(), first: coverHeader },
      footers: { default: ftr(), first: coverFooter }, children: [...titlePage] },
    { properties: { ...pageProps, type: SectionType.NEXT_PAGE }, headers: { default: hdr() }, footers: { default: ftr() }, children: [...tocPage, ...acronymPage, ...body, ...refs] },
  ],
});

const out = process.argv[2] || path.join(__dirname, "..", "F6-D9_Consolidated_Synthesis_Report_Output_1.2_DRAFT_Nov2026.docx");
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log("Wrote", out, "tables:", tableNo, "figures:", figNo); });
