// Figures 2-4 of F6-D9 re-rendered in the colour scheme of the Financial Landscape presentation (21 Sep 2026)
const fs = require("fs"), path = require("path");
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, Header, Footer, PageNumber, LineRuleType } = require("docx");
const FONT = "Times New Roman", TEAL = "1F4E5F", W = 9746;
const img = (f) => fs.readFileSync(path.join(__dirname, f));
const p = (text, o = {}) => new Paragraph({ alignment: o.align || AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 160, before: o.before ?? 0 },
  children: [new TextRun({ text, bold: o.bold, italics: o.italics, size: o.size, color: o.color })] });
const cap = (n, t) => new Paragraph({ keepNext: true, keepLines: true, spacing: { before: 240, after: 80 },
  children: [new TextRun({ text: `Figure ${n}: `, bold: true, color: "203864", size: 20 }), new TextRun({ text: t, italics: true, size: 20 })] });
const fig = (f, w, h) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200, line: 240, lineRule: LineRuleType.AUTO },
  children: [new ImageRun({ type: "png", data: img(f), transformation: { width: w, height: h } })] });
const b = { style: BorderStyle.SINGLE, size: 4, color: "B7C4BB" }, borders = { top: b, bottom: b, left: b, right: b };
const c = (t, w, o = {}) => new TableCell({ borders, width: { size: w, type: WidthType.DXA }, margins: { top: 40, bottom: 40, left: 90, right: 90 },
  shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: t, size: 17, bold: o.bold, color: o.color })] })] });
const pal = [
  ["Navy", "203864", "Bars, tier headers, 1.2.3 Finance; the deck’s numbered markers and title boxes"],
  ["Blue", "2F5597", "Hwange–Victoria Falls–Livingstone series; 1.2.1 Connect; the deck’s secondary boxes"],
  ["Gold", "C98A2B", "Okavango Delta–Maun series; 1.2.2 Prepare; graduation arrow; the deck’s value-chain accent"],
  ["Forest green", "1F3B2C", "Reserve dark accent (start of the deck’s value-chain gradient)"],
  ["Olive", "3D5A44", "Underpinning row (Activity 1.1.1 and results finance)"],
  ["Mid blue (tint)", "5B7DB8", "Tint of the deck’s blue: ‘within another chain’ cells (Figure 6) and secondary roadmap bars (Figure 7)"],
  ["Light blue (tint)", "DAE3F3", "Tint of the deck’s blue: 1.2.1 boxes (Figure 4) and ‘second wave’ cells (Figure 6)"],
  ["Sand", "D9C9A0", "Connector lines; readiness band ‘ready to pilot’ tint family"],
  ["Cream", "F0EAD6", "Readiness bands and light grounds (with FBF3E4, EFEDE4)"],
  ["Sage", "DDE3DA", "Gridlines, borders and off-white grounds (with F7F8F6, EEF2EA)"],
  ["Coral / red", "D91D3C", "Decision gates (Figures 7 and 8); the deck’s gap highlight"],
  ["Text", "222222", "Body text (grey 6B6B6B for secondary text)"],
];
const header = new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [1500, 1000, 1100, 6146], rows: [
  new TableRow({ tableHeader: true, children: ["Colour", "Swatch", "Hex", "Use in the figures"].map((h, i) =>
    c(h, [1500, 1000, 1100, 6146][i], { fill: "117A02", bold: true, color: "FFFFFF" })) }),
  ...pal.map(([n, hex, u]) => new TableRow({ children: [c(n, 1500), c("", 1000, { fill: hex }), c("#" + hex, 1100), c(u, 6146)] })),
] });
// Sample table: F6-D9 Table 4 in the presentation table style (navy header, bold first column, navy rules, grey last column)
const { ch2 } = require("../../content_front");
const bt = ch2.find((x) => x.tbl && x.tbl.id === "barriers").tbl;
const strip = (t) => t.replace(/\*\*/g, "");
const NAVY = "203864", nb = { style: BorderStyle.SINGLE, size: 4, color: NAVY }, nbs = { top: nb, bottom: nb, left: nb, right: nb };
const tw = bt.cols.map((x) => Math.round(x * W / 9026)); tw[tw.length - 1] += W - tw.reduce((a, b) => a + b, 0);
const tc = (t, w, o = {}) => new TableCell({ borders: nbs, width: { size: w, type: WidthType.DXA }, margins: { top: 50, bottom: 50, left: 90, right: 90 },
  verticalAlign: o.v, shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  children: [new Paragraph({ alignment: o.center ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { after: 0 }, children: [new TextRun({ text: strip(t), size: 17, bold: o.bold, color: o.color })] })] });
const sample = new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: tw, rows: [
  new TableRow({ tableHeader: true, children: bt.head.map((h, i) => tc(h, tw[i], { fill: NAVY, bold: true, color: "FFFFFF" })) }),
  ...bt.rows.map((r) => new TableRow({ cantSplit: true, children: r.map((v, i) => tc(v, tw[i], {
    bold: i === 0, center: i === 0, v: i === 0 ? "center" : undefined, fill: i === r.length - 1 ? "EDEDED" : undefined })) })),
] });
const tcap = (n, t) => new Paragraph({ keepNext: true, spacing: { before: 200, after: 80 }, children: [new TextRun({ text: `Table ${n}: `, bold: true, color: NAVY, size: 20 }), new TextRun({ text: t, italics: true, size: 20 })] });
const F = [
  [1, "Headline evidence on MSME finance in KAZA", "fig1_headline_deck.png", 600, 215],
  [2, "Country readiness to pilot an MSME finance mechanism, with the institutions to build on", "fig2_readiness_deck.png", 600, 220],
  [3, "Finance-relevant profile of the two priority areas (updated survey, November 2026)", "fig3_destinations_deck.png", 600, 235],
  [4, "Output 1.2 strategic framework: three activities on one readiness pathway", "fig4_framework_deck.png", 600, 315],
  [5, "Design principles for Output 1.2", "fig5_principles_deck.png", 600, 225],
  [6, "Priority value chains by intervention area, typical readiness tier and pilot timing", "fig6_vcmap_deck.png", 600, 270],
  [7, "Indicative roadmap for Output 1.2, November 2026 to December 2028, with the extension sought to mid-2029", "fig7_roadmap_deck.png", 600, 260],
  [8, "Key milestones, December 2026 to December 2028", "fig8_milestones_deck.png", 600, 165],
  [9, "Stakeholder engagement plan: role, mechanism and timing", "fig9_stakeholders_deck.png", 600, 235],
];
const figBlocks = (n) => { const f = F.find((x) => x[0] === n); return [cap(f[0], f[1]), fig(f[2], f[3], f[4])]; };
const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 160, line: 259, lineRule: LineRuleType.AUTO } } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1080, right: 1080 } } },
    headers: { default: new Header({ children: [p("F6-D9 Consolidated Synthesis Report — figure colour option for consideration", { align: AlignmentType.RIGHT, size: 16, after: 0 })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] }) },
    children: [
      p("F6-D9 figures and a sample table in the Financial Landscape presentation colour scheme", { bold: true, size: 28, color: TEAL, align: AlignmentType.LEFT, after: 120 }),
      p("This note reproduces all nine figures of the F6-D9 Consolidated Synthesis Report, and one of its tables, in the colour scheme of the Financial Landscape presentation (Maun Regional Roundtable, 22–24 September 2026), for consideration. The content, data and layout are unchanged; only the colours (and, for the table, the table style) differ. The palette below was extracted from the colours applied on the presentation slides (the file’s built-in theme is the standard Office theme and is not what the slides use)."),
      p("The two-series comparison in Figure 3 uses the presentation’s blue (#2F5597) and gold (#C98A2B). The pair passes a colour-vision-deficiency separation check; because the gold is light against white, every marker also carries its value label and a different shape (circle and diamond), so the chart does not rely on colour alone."),
      new Paragraph({ keepNext: true, spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Table 1: ", bold: true, color: TEAL, size: 20 }), new TextRun({ text: "Colour scheme extracted from the Financial Landscape presentation", italics: true, size: 20 })] }),
      header,
      p("In the report, Figure 1 and Table 4 open Chapter 2. Table 2 below shows Table 4 of the report (Barriers and design implications) in the presentation’s table style: navy header row with white bold text, bold first column, navy rules and a light grey final column. The figures follow in report order.", { before: 200 }),
      ...figBlocks(1),
      tcap(2, "Barriers and design implications (F6-D9 Table 4) in the presentation table style"),
      sample,
      ...[2, 3, 4, 5, 6, 7, 8, 9].flatMap(figBlocks),
    ] }],
});
Packer.toBuffer(doc).then((buf) => { const out = process.argv[2]; fs.writeFileSync(out, buf); console.log("Wrote", out); });
