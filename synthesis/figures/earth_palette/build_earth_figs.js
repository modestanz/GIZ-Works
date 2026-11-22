// Figures 2-4 of F6-D9 re-rendered in the colour scheme of the Financial Landscape presentation (21 Sep 2026)
const fs = require("fs"), path = require("path");
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, Header, Footer, PageNumber, LineRuleType } = require("docx");
const FONT = "Times New Roman", TEAL = "1F3B2C", W = 9746;
const img = (f) => fs.readFileSync(path.join(__dirname, f));
const p = (text, o = {}) => new Paragraph({ alignment: o.align || AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 160, before: o.before ?? 0 },
  children: [new TextRun({ text, bold: o.bold, italics: o.italics, size: o.size, color: o.color })] });
const cap = (n, t) => new Paragraph({ keepNext: true, keepLines: true, spacing: { before: 240, after: 80 },
  children: [new TextRun({ text: `Figure ${n}: `, bold: true, color: "1F3B2C", size: 20 }), new TextRun({ text: t, italics: true, size: 20 })] });
const fig = (f, w, h) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200, line: 240, lineRule: LineRuleType.AUTO },
  children: [new ImageRun({ type: "png", data: img(f), transformation: { width: w, height: h } })] });
const b = { style: BorderStyle.SINGLE, size: 4, color: "B7C4BB" }, borders = { top: b, bottom: b, left: b, right: b };
const c = (t, w, o = {}) => new TableCell({ borders, width: { size: w, type: WidthType.DXA }, margins: { top: 40, bottom: 40, left: 90, right: 90 },
  shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: t, size: 17, bold: o.bold, color: o.color })] })] });
const pal = [
  ["Forest green", "1F3B2C", "Primary: bars, tier headers, 1.2.3 Finance, table header rows, caption labels (the deck’s dark green)"],
  ["Series green", "2F7A4B", "Hwange–Victoria Falls–Livingstone series in Figure 3 (a brighter step of the forest green, for colour-blind separation)"],
  ["Olive", "3D5A44", "Secondary: 1.2.1 Connect, card accents, secondary roadmap bars (the deck’s olive)"],
  ["Gold", "C98A2B", "Okavango Delta–Maun series; 1.2.2 Prepare; grant windows; graduation arrow (the deck’s value-chain gold)"],
  ["Olive brown", "635B2C", "Underpinning row (Activity 1.1.1 and results finance); RTFF bar (from the deck’s value-chain gradient)"],
  ["Sage green (tint)", "6F8B6E", "‘Within another chain’ cells (Figure 6); lighter roadmap bars (Figure 7)"],
  ["Terracotta", "B8563E", "Decision gates (Figures 7 and 8); the deck’s warm accent"],
  ["Sand", "D9C9A0", "Connector lines and ‘ready to pilot’ band family"],
  ["Cream", "F0EAD6", "Readiness bands, grant boxes and light grounds (with FBF3E4, EFEDE4)"],
  ["Sage", "DDE3DA", "Gridlines, borders, ‘second wave’ cells and off-white grounds (with D3DECF, EEF2EA, F7F8F6)"],
  ["Text", "222222", "Body text (grey 6B6B6B for secondary text)"],
];
const header = new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [1500, 1000, 1100, 6146], rows: [
  new TableRow({ tableHeader: true, children: ["Colour", "Swatch", "Hex", "Use in the figures"].map((h, i) =>
    c(h, [1500, 1000, 1100, 6146][i], { fill: "1F3B2C", bold: true, color: "FFFFFF" })) }),
  ...pal.map(([n, hex, u]) => new TableRow({ children: [c(n, 1500), c("", 1000, { fill: hex }), c("#" + hex, 1100), c(u, 6146)] })),
] });
// Sample table: F6-D9 Table 4 in the presentation table style (navy header, bold first column, navy rules, grey last column)
const { ch2 } = require("../../content_front");
const bt = ch2.find((x) => x.tbl && x.tbl.id === "barriers").tbl;
const strip = (t) => t.replace(/\*\*/g, "");
const NAVY = "1F3B2C", nb = { style: BorderStyle.SINGLE, size: 4, color: NAVY }, nbs = { top: nb, bottom: nb, left: nb, right: nb };
const tw = bt.cols.map((x) => Math.round(x * W / 9026)); tw[tw.length - 1] += W - tw.reduce((a, b) => a + b, 0);
const tc = (t, w, o = {}) => new TableCell({ borders: nbs, width: { size: w, type: WidthType.DXA }, margins: { top: 50, bottom: 50, left: 90, right: 90 },
  verticalAlign: o.v, shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  children: [new Paragraph({ alignment: o.center ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { after: 0 }, children: [new TextRun({ text: strip(t), size: 17, bold: o.bold, color: o.color })] })] });
const sample = new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: tw, rows: [
  new TableRow({ tableHeader: true, children: bt.head.map((h, i) => tc(h, tw[i], { fill: NAVY, bold: true, color: "FFFFFF" })) }),
  ...bt.rows.map((r) => new TableRow({ cantSplit: true, children: r.map((v, i) => tc(v, tw[i], {
    bold: i === 0, center: i === 0, v: i === 0 ? "center" : undefined, fill: i === r.length - 1 ? "EFEDE4" : undefined })) })),
] });
const tcap = (n, t) => new Paragraph({ keepNext: true, spacing: { before: 200, after: 80 }, children: [new TextRun({ text: `Table ${n}: `, bold: true, color: NAVY, size: 20 }), new TextRun({ text: t, italics: true, size: 20 })] });
const F = [
  [1, "Headline evidence on MSME finance in KAZA", "fig1_headline_earth.png", 600, 215],
  [2, "Country readiness to pilot an MSME finance mechanism, with the institutions to build on", "fig2_readiness_earth.png", 600, 220],
  [3, "Finance-relevant profile of the two priority areas (updated survey, November 2026)", "fig3_destinations_earth.png", 600, 235],
  [4, "Output 1.2 strategic framework: three activities on one readiness pathway", "fig4_framework_earth.png", 600, 315],
  [5, "Design principles for Output 1.2", "fig5_principles_earth.png", 600, 225],
  [6, "Priority value chains by intervention area, typical readiness tier and pilot timing", "fig6_vcmap_earth.png", 600, 270],
  [7, "Indicative roadmap for Output 1.2, November 2026 to December 2028, with the extension sought to mid-2029", "fig7_roadmap_earth.png", 600, 260],
  [8, "Key milestones, December 2026 to December 2028", "fig8_milestones_earth.png", 600, 165],
  [9, "Stakeholder engagement plan: role, mechanism and timing", "fig9_stakeholders_earth.png", 600, 235],
];
const figBlocks = (n) => { const f = F.find((x) => x[0] === n); return [cap(f[0], f[1]), fig(f[2], f[3], f[4])]; };
const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 160, line: 259, lineRule: LineRuleType.AUTO } } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1080, right: 1080 } } },
    headers: { default: new Header({ children: [p("F6-D9 Consolidated Synthesis Report — earth-tone colour option for consideration", { align: AlignmentType.RIGHT, size: 16, after: 0 })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] }) },
    children: [
      p("F6-D9 figures and a sample table in the earth tones of the Financial Landscape presentation", { bold: true, size: 28, color: TEAL, align: AlignmentType.LEFT, after: 120 }),
      p("This note reproduces all nine figures of the F6-D9 Consolidated Synthesis Report, and one of its tables, in the colour scheme of the Financial Landscape presentation (Maun Regional Roundtable, 22–24 September 2026), for consideration. The content, data and layout are unchanged; only the colours (and, for the table, the table style) differ. The palette below uses the earth tones applied on the presentation slides (forest green, olive, the value-chain browns and golds, sand, cream, sage and terracotta) and leaves out the deck’s blues, so that the figures read as a landscape and tourism programme rather than a marine one."),
      p("The two-series comparison in Figure 3 uses a forest green (#2F7A4B) and the presentation’s gold (#C98A2B). The pair passes a colour-vision-deficiency separation check; because the gold is light against white, every marker also carries its value label and a different shape (circle and diamond), so the chart does not rely on colour alone."),
      new Paragraph({ keepNext: true, spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Table 1: ", bold: true, color: TEAL, size: 20 }), new TextRun({ text: "Earth-tone colour scheme drawn from the Financial Landscape presentation", italics: true, size: 20 })] }),
      header,
      p("In the report, Figure 1 and Table 4 open Chapter 2. Table 2 below shows Table 4 of the report (Barriers and design implications) in the presentation’s table layout, recoloured in earth tones: forest-green header row with white bold text, bold first column, forest-green rules and a cream final column. The figures follow in report order.", { before: 200 }),
      ...figBlocks(1),
      tcap(2, "Barriers and design implications (F6-D9 Table 4) in the earth-tone table style"),
      sample,
      ...[2, 3, 4, 5, 6, 7, 8, 9].flatMap(figBlocks),
    ] }],
});
Packer.toBuffer(doc).then((buf) => { const out = process.argv[2]; fs.writeFileSync(out, buf); console.log("Wrote", out); });
