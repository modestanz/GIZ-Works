// Builds the KAZA MSME Investment Readiness Assessment as a .docx
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, TableOfContents, Footer, Header, PageNumber,
  PageBreak, TabStopType,
} = require("docx");

const { acronyms, front } = require("./ira_front");
const enabling = require("./ira_enabling");
const { back, references } = require("./ira_back");

// Usage: node build_ira.js [out.docx] [--narrative]
// --narrative replaces every table with its prose version (the `narr` blocks in the content files).
const args = process.argv.slice(2);
const NARRATIVE = args.includes("--narrative");
const outArg = args.find((a) => !a.startsWith("--"));

const FONT = "Calibri";
const GREEN = "1F5135";
const ACCENT = "C8A951";
const LIGHT = "E8F0EA";
const TABLE_W = 9026; // A4 with 1" margins

// Parse **bold** and *italic* markup into runs
function runs(text, opts = {}) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).filter(Boolean).map((s) => {
    if (s.startsWith("**")) return new TextRun({ text: s.slice(2, -2), bold: true, ...opts });
    if (s.startsWith("*") && s.endsWith("*") && s.length > 2) return new TextRun({ text: s.slice(1, -1), italics: true, ...opts });
    return new TextRun({ text: s, ...opts });
  });
}

const border = { style: BorderStyle.SINGLE, size: 4, color: "B7C4BB" };
const borders = { top: border, bottom: border, left: border, right: border };

function cell(text, width, header) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: header ? { fill: GREEN, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({
      spacing: { before: 0, after: 0, line: 252 },
      children: runs(text, { size: 18, color: header ? "FFFFFF" : undefined, bold: header || undefined }),
    })],
  });
}

let tableNo = 0;
function table(t) {
  tableNo += 1;
  const sum = t.cols.reduce((a, b) => a + b, 0);
  if (sum !== TABLE_W) throw new Error(`Column widths of "${t.caption}" sum to ${sum}, not ${TABLE_W}`);
  const out = [new Paragraph({
    keepNext: true,
    spacing: { before: 160, after: 80 },
    children: [new TextRun({ text: `Table ${tableNo}: `, bold: true, color: GREEN, size: 20 }),
      new TextRun({ text: t.caption, italics: true, size: 20 })],
  })];
  const rows = [new TableRow({ tableHeader: true, children: t.head.map((h, i) => cell(h, t.cols[i], true)) })];
  t.rows.forEach((r) => rows.push(new TableRow({
    cantSplit: true,
    children: r.map((c, i) => cell(c, t.cols[i], false)),
  })));
  out.push(new Table({ width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: t.cols, rows }));
  out.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  return out;
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
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun(label)] }));
    } else if (b.h === 2) {
      h2No += 1;
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(`${h1No}.${h2No} ${b.t}`)] }));
    } else if (b.h === 3) {
      out.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(b.t)] }));
    } else if (b.p) {
      out.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: runs(b.p) }));
    } else if (b.b) {
      b.b.forEach((item) => out.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: runs(item) })));
    } else if (b.tbl) {
      if (NARRATIVE) {
        if (!b.narr) throw new Error(`Table "${b.tbl.caption}" has no narrative version`);
        out.push(...render(b.narr));
      } else {
        out.push(...table(b.tbl));
      }
    } else if (b.note) {
      out.push(note(b.note));
    }
  }
  return out;
}

// ---- Title page ----
const titlePage = [
  new Paragraph({ spacing: { before: 2200 }, children: [] }),
  new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 6 } },
    spacing: { after: 300 },
    children: [new TextRun({ text: "MSME Investment Readiness Assessment", bold: true, size: 56, color: GREEN, font: FONT })],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Priority Value Chains for Regenerative Nature-Based Tourism (R-NBT) in the Kavango Zambezi Transfrontier Conservation Area (KAZA TFCA)", size: 30, color: "333333" })] }),
  new Paragraph({ spacing: { after: 1200 }, children: [new TextRun({ text: "Angola · Botswana · Namibia · Zambia · Zimbabwe", size: 26, color: GREEN, bold: true })] }),
  new Paragraph({ children: [new TextRun({ text: "MSME business models, financial practices, record-keeping and informality by gender, age and value chain node; capacity gaps and capacity-building needs of MSMEs, BSOs and financial institutions; enabling environment, market access and business support organisations in the five Partner States; readiness for financial products; recommended interventions and financing pathways", size: 20, color: "555555", italics: true })] }),
  new Paragraph({ spacing: { before: 1600 }, children: [new TextRun({ text: NARRATIVE ? "Draft for Discussion (Version 4, narrative edition)" : "Draft for Discussion (Version 3)", bold: true, size: 22 })] }),
  new Paragraph({ children: [new TextRun({ text: "October 2026", size: 22 })] }),
  new Paragraph({ children: [new PageBreak()] }),
];

const tocPage = [
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Table of Contents", bold: true, size: 32, color: GREEN })] }),
  new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-2" }),
];

const acronymTitle = new Paragraph({ pageBreakBefore: true, spacing: { after: 240 }, children: [new TextRun({ text: "Acronyms and Abbreviations", bold: true, size: 32, color: GREEN })] });
const acronymPage = NARRATIVE ? [
  acronymTitle,
  ...acronyms.map(([a, m]) => new Paragraph({
    indent: { left: 1700, hanging: 1700 }, spacing: { after: 60 },
    children: [new TextRun({ text: a, bold: true }), new TextRun({ text: "\t" + m })],
    tabStops: [{ type: TabStopType.LEFT, position: 1700 }],
  })),
] : [
  acronymTitle,
  new Table({
    width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: [2000, 7026],
    rows: [new TableRow({ tableHeader: true, children: [cell("Acronym", 2000, true), cell("Meaning", 7026, true)] }),
      ...acronyms.map(([a, m]) => new TableRow({ children: [cell(`**${a}**`, 2000), cell(m, 7026)] }))],
  }),
];

const body = [...render(front), ...render(enabling), ...render(back)];

const refs = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun("References")] }),
  new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: "Each web source below was checked in October 2026 to confirm that it exists at the address given and contains the information attributed to it. Figures reported by companies, agencies and the press are attributed to those sources in the text. Unpublished project documents are marked as such.", italics: true, size: 20, color: "555555" })] }),
  ...[...references].sort((a, b) => a.localeCompare(b)).map((r) => new Paragraph({
    indent: { left: 567, hanging: 567 }, spacing: { after: 100 },
    children: [new TextRun({ text: r, size: 20 })],
  })),
];

const pageProps = { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } };
const hdr = () => new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "KAZA MSME Investment Readiness Assessment — R-NBT", size: 16, color: "777777" })] })] });
const ftr = () => new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
  new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 18, color: "555555" })] })] });

const doc = new Document({
  creator: "KAZA R-NBT Finance Study",
  title: "MSME Investment Readiness Assessment – KAZA R-NBT Priority Value Chains",
  description: "Investment readiness of R-NBT MSMEs in the KAZA priority value chains, capacity gaps, enabling environment and recommended interventions",
  features: { updateFields: true },
  styles: {
    default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 120, line: 276 } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 34, bold: true, color: GREEN, font: FONT },
        paragraph: { spacing: { before: 0, after: 240 }, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 4 } } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: GREEN, font: FONT },
        paragraph: { spacing: { before: 320, after: 140 }, outlineLevel: 1, keepNext: true } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, color: "3D6B50", font: FONT },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2, keepNext: true } },
    ],
  },
  numbering: {
    config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] }],
  },
  sections: [
    { properties: { ...pageProps, titlePage: true }, headers: { default: hdr(), first: new Header({ children: [] }) },
      footers: { default: ftr(), first: new Footer({ children: [] }) }, children: [...titlePage, ...tocPage] },
    { properties: pageProps, headers: { default: hdr() }, footers: { default: ftr() }, children: [...acronymPage, ...body, ...refs] },
  ],
});

const out = outArg || path.join(__dirname, "..", NARRATIVE
  ? "KAZA_MSME_Investment_Readiness_Assessment_Narrative.docx"
  : "KAZA_MSME_Investment_Readiness_Assessment.docx");
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log("Wrote", out, NARRATIVE ? "(narrative edition)" : "tables: " + tableNo); });
