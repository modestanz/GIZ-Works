// Shared Word helpers in the F6-D9 / F4-D7 house style (Times New Roman, green table headers, teal labels)
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, Header, Footer, PageNumber, LineRuleType, HeadingLevel, LevelFormat,
  TableOfContents, SectionType, HeightRule, PageBreak,
} = require("docx");

const FONT = "Times New Roman", TEAL = "1F4E5F", HEAD = "117A02", BAND = "E2EFDA", W = 9746;
const BRAND = (f) => fs.readFileSync(path.join(__dirname, "..", "..", "synthesis", "figures", "brand", f));
const FIGP = (f) => path.join(__dirname, "..", "..", "synthesis", "figures", "balanced_palette", f);

const runs = (t, o = {}) => String(t).split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((s) => s.startsWith("**")
  ? new TextRun({ text: s.slice(2, -2), bold: true, ...o }) : new TextRun({ text: s, ...o }));

function makeKit() {
  let tn = 0, fn = 0;
  const P = (t, o = {}) => new Paragraph({ alignment: o.align || AlignmentType.JUSTIFIED, keepNext: o.keepNext, spacing: o.spacing, children: runs(t, o.run || {}) });
  const H1 = (t, o = {}) => new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, pageBreakBefore: !!o.newPage, children: [new TextRun(t)] });
  const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, children: [new TextRun(t)] });
  const H3 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_3, keepNext: true, children: [new TextRun(t)] });
  const B = (items) => items.map((t) => new Paragraph({ numbering: { reference: "b", level: 0 }, style: "BulletParagraph", alignment: AlignmentType.JUSTIFIED, children: runs(t) }));
  const N = (items, ref = "n") => items.map((t) => new Paragraph({ numbering: { reference: ref, level: 0 }, style: "BulletParagraph", alignment: AlignmentType.JUSTIFIED, children: runs(t) }));
  const bd = { style: BorderStyle.SINGLE, size: 4, color: "B7C4BB" }, bds = { top: bd, bottom: bd, left: bd, right: bd };
  const cell = (t, w, o = {}) => new TableCell({ borders: bds, width: { size: w, type: WidthType.DXA }, columnSpan: o.span,
    margins: { top: 40, bottom: 40, left: 90, right: 90 },
    shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
    children: String(t).split("\n").map((line) => new Paragraph({ spacing: { after: 0, line: 245, lineRule: LineRuleType.EXACT }, children: runs(line, { size: 18, bold: o.bold, color: o.color }) })) });
  // rows: arrays of strings, {band: "text"}, or {cells: [...], fill: "hex"}; opts.h = min row height (twips) for blank forms
  const table = (cap, head, cols, rows, opts = {}) => {
    if (cap) tn += 1;
    const k = W / cols.reduce((a, b) => a + b, 0); const c = cols.map((x) => Math.round(x * k)); c[c.length - 1] += W - c.reduce((a, b) => a + b, 0);
    const out = [];
    if (cap) out.push(new Paragraph({ keepNext: true, keepLines: true, spacing: { before: 160, after: 80 }, children: [new TextRun({ text: `Table ${tn}: `, bold: true, color: TEAL, size: 20 }), new TextRun({ text: cap, italics: true, size: 20 })] }));
    out.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: c, rows: [
      new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, c[i], { fill: HEAD, bold: true, color: "FFFFFF" })) }),
      ...rows.map((r) => {
        if (r.band) return new TableRow({ children: [cell(r.band, W, { span: c.length, fill: BAND, bold: true })] });
        const vals = r.cells || r;
        return new TableRow({ cantSplit: true, height: opts.h ? { value: opts.h, rule: HeightRule.ATLEAST } : undefined,
          children: vals.map((v, i) => cell(v, c[i], { bold: i === 0 && !opts.plainFirst, fill: (r.cells && r.fills && r.fills[i]) || (r.cells && r.fill) || undefined })) });
      }),
    ] }));
    out.push(new Paragraph({ spacing: { after: 0, line: 120, lineRule: LineRuleType.EXACT }, children: [] }));
    return out;
  };
  const tableNo = () => tn + 1; // number the next table will take
  const fig = (file, cap, widthPx = 640) => {
    fn += 1;
    const dim = require("child_process").execSync(`python3 -c "from PIL import Image;im=Image.open('${FIGP(file)}');print(im.size[0],im.size[1])"`).toString().trim().split(" ").map(Number);
    return [
      new Paragraph({ keepNext: true, keepLines: true, spacing: { before: 160, after: 80 }, children: [new TextRun({ text: `Figure ${fn}: `, bold: true, color: "1F5135", size: 20 }), new TextRun({ text: cap, italics: true, size: 20 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160, line: 240, lineRule: LineRuleType.AUTO }, children: [new ImageRun({ type: "png", data: fs.readFileSync(FIGP(file)), transformation: { width: widthPx, height: Math.round(widthPx * dim[1] / dim[0]) } })] }),
    ];
  };
  const figNo = () => fn + 1;
  const SRC = (t) => new Paragraph({ spacing: { before: 0, after: 200 }, children: [new TextRun({ text: t, italics: true, size: 18 })] });
  const pageBreak = () => new Paragraph({ children: [new PageBreak()] });
  // Signature or field lines for forms
  const field = (label, width = 60) => new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: label + " ", bold: true }), new TextRun({ text: "_".repeat(width) })] });
  return { P, H1, H2, H3, B, N, table, tableNo, fig, figNo, SRC, pageBreak, field, runs };
}

// cover: { title, subtitle, code, codeLine, dateLine, status }
function buildDoc({ out, header, cover, children, toc = true, docTitle }) {
  const center = (kids, spacing = {}) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { line: 240, lineRule: LineRuleType.AUTO, after: 100, ...spacing }, children: kids });
  const titlePage = [
    center([new TextRun({ text: cover.title, bold: true, size: 40, color: TEAL })], { before: 1200, after: 100 }),
    center([new TextRun({ text: cover.subtitle, italics: true, size: 24 })], { before: 288 }),
    center([new TextRun({ text: "Kavango Zambezi Transfrontier Conservation Area: Angola · Botswana · Namibia · Zambia · Zimbabwe", italics: true, size: 24 })], { after: 1100 }),
    center([new TextRun({ text: cover.code, bold: true, size: 24 })], { after: 120 }),
    center([new TextRun({ text: cover.codeLine, italics: true, size: 18 })], { after: 500 }),
    center([new TextRun({ text: cover.dateLine, size: 22 })], { after: 0 }),
    center([new TextRun({ text: cover.status || "DRAFT FOR VALIDATION", bold: true, size: 22 })], { after: 1300 }),
    center([new TextRun({ text: "Prepared by:", bold: true, italics: true, size: 18 })], { after: 40 }),
    center([new TextRun({ text: "Modesta Nyirenda", size: 18 })], { after: 40 }),
    center([new ImageRun({ type: "jpg", data: BRAND("mnz_logo.jpeg"), transformation: { width: 89, height: 48 } })], { after: 0 }),
  ];
  const coverHeader = new Header({ children: [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: "KAZA Regenerative Nature-Based Tourism (R-NBT)", bold: true, italics: true, size: 22 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "jpg", data: BRAND("partner_logos.jpeg"), transformation: { width: 602, height: 89 } })] }),
  ] });
  const coverFooter = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "png", data: BRAND("giz_logo.png"), transformation: { width: 128, height: 67 } })] })] });
  const hdr = () => new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: header, size: 16 })] })] });
  const ftr = () => new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] });
  const tocPage = toc ? [
    new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Contents", bold: true, size: 28, color: TEAL })] }),
    new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }),
    new Paragraph({ children: [new PageBreak()] }),
  ] : [];
  const coverProps = { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 708, footer: 708 } } };
  const pageProps = { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1080, bottom: 1440, left: 1080, header: 708, footer: 708 } } };
  const doc = new Document({
    creator: "Modesta Nyirenda", title: docTitle || cover.title, features: { updateFields: toc },
    styles: {
      default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 160, line: 259, lineRule: LineRuleType.AUTO } } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 28, bold: true, color: "262626", font: FONT }, paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 0, keepNext: true, keepLines: true } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, color: "262626", font: FONT }, paragraph: { spacing: { before: 120, after: 40 }, outlineLevel: 1, keepNext: true, keepLines: true } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 22, bold: true, italics: true, color: "0D0D0D", font: FONT }, paragraph: { spacing: { before: 80, after: 20 }, outlineLevel: 2, keepNext: true, keepLines: true } },
        { id: "TOC1", name: "toc 1", basedOn: "Normal", next: "Normal", paragraph: { spacing: { before: 0, after: 20 } } },
        { id: "TOC2", name: "toc 2", basedOn: "Normal", next: "Normal", paragraph: { spacing: { before: 0, after: 20 }, indent: { left: 283 } } },
        { id: "BulletParagraph", name: "Bullet Paragraph", basedOn: "Normal", quickFormat: true, paragraph: { indent: { left: 720 }, contextualSpacing: true } },
      ],
    },
    numbering: { config: [
      { reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      ...["n", "n2", "n3", "n4", "n5", "n6", "n7", "n8"].map((reference) => ({ reference, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] })),
    ] },
    sections: [
      { properties: { ...coverProps, titlePage: true }, headers: { default: hdr(), first: coverHeader }, footers: { default: ftr(), first: coverFooter }, children: titlePage },
      { properties: { ...pageProps, type: SectionType.NEXT_PAGE }, headers: { default: hdr() }, footers: { default: ftr() }, children: [...tocPage, ...children] },
    ],
  });
  return Packer.toBuffer(doc).then((b) => { fs.writeFileSync(out, b); console.log("Wrote", out); });
}

module.exports = { makeKit, buildDoc };
