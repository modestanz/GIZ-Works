// Standalone extract: GM1-D5 baseline indicators (18), as given in the GM3-D10 micro-diagnostics
const fs = require("fs"), path = require("path");
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, Header, Footer, PageNumber, LineRuleType, HeadingLevel, LevelFormat } = require("docx");
const FONT = "Times New Roman", TEAL = "1F4E5F", HEAD = "117A02", BAND = "E2EFDA", W = 9746;
const runs = (t, o = {}) => t.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((s) => s.startsWith("**")
  ? new TextRun({ text: s.slice(2, -2), bold: true, ...o }) : new TextRun({ text: s, ...o }));
const P = (t) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: runs(t) });
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, children: [new TextRun(t)] });
const B = (items) => items.map((t) => new Paragraph({ numbering: { reference: "b", level: 0 }, style: "BulletParagraph", alignment: AlignmentType.JUSTIFIED, children: runs(t) }));
const bd = { style: BorderStyle.SINGLE, size: 4, color: "B7C4BB" }, bds = { top: bd, bottom: bd, left: bd, right: bd };
const cell = (t, w, o = {}) => new TableCell({ borders: bds, width: { size: w, type: WidthType.DXA }, columnSpan: o.span,
  margins: { top: 40, bottom: 40, left: 90, right: 90 },
  shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  children: [new Paragraph({ spacing: { after: 0, line: 245, lineRule: LineRuleType.EXACT }, children: runs(t, { size: 17, bold: o.bold, color: o.color }) })] });
let tn = 0;
const table = (cap, head, cols, rows) => {
  tn += 1;
  const k = W / cols.reduce((a, b) => a + b, 0); const c = cols.map((x) => Math.round(x * k)); c[c.length - 1] += W - c.reduce((a, b) => a + b, 0);
  return [
    new Paragraph({ keepNext: true, keepLines: true, spacing: { before: 160, after: 80 }, children: [new TextRun({ text: `Table ${tn}: `, bold: true, color: TEAL, size: 20 }), new TextRun({ text: cap, italics: true, size: 20 })] }),
    new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: c, rows: [
      new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, c[i], { fill: HEAD, bold: true, color: "FFFFFF" })) }),
      ...rows.map((r) => r.band ? new TableRow({ children: [cell(r.band, W, { span: c.length, fill: BAND, bold: true })] })
        : new TableRow({ cantSplit: true, children: r.map((v, i) => cell(v, c[i], { bold: i === 0 })) })),
    ] }),
    new Paragraph({ spacing: { after: 0, line: 120, lineRule: LineRuleType.EXACT }, children: [] }),
  ];
};
const SRC = (t) => new Paragraph({ spacing: { before: 0, after: 200 }, children: [new TextRun({ text: t, italics: true, size: 18 })] });

const ind = [
  { band: "MSME level (indicators 1–12)" },
  ["1", "MSMEs with increased sales over 12 months", "48% report growth in jobs and income", "40% report growth in jobs and income", "Intake record; comparable pre-support sales period; sales record"],
  ["2", "Paid jobs, of which women and youth", "614 full-time and 382 part-time jobs; 48% of full-time jobs held by women", "411 full-time (288 held by women, 70%) and 135 part-time (89 women)", "Intake; staff list"],
  ["3", "Improved regenerative or community result", "73% report hiring locally; 34% report reducing waste", "62% report reducing waste; 60% supporting conservation", "One agreed measure per enterprise"],
  ["4", "Training and coaching cycle completed", "Not applicable before support", "Not applicable before support", "Attendance records"],
  ["5", "Usable sales record", "19% notebook; 6% none", "28% notebook; 10% none", "Sighted by the coach at intake"],
  ["6", "Women- and youth-led share of MSMEs and finance", "36% woman-led; 16% youth-led", "48% women-owned or led; 15% youth-owned or led", "Declaration with consent"],
  ["7", "Formalisation step completed", "2% informal; 11% sole traders (informal enterprises under-represented)", "12% informal (informal enterprises likely under-represented)", "Certificates"],
  ["8", "Finance after preparation or referral", "20% obtained finance before", "20% obtained finance before", "Referral log; lender confirmation"],
  ["9", "RTFF borrower module", "Not applicable unless the RTFF is confirmed", "Not applicable unless an RTFF route is confirmed", "Facility records"],
  ["10", "Active tourism buyer; written contract", "98% supplied a tourism business; 42% hold a written contract or letter of intent", "82% supplied a tourism business; 18% hold a written contract or letter of intent", "Buyer list; invoices"],
  ["11", "Value of anchor purchases from the supported MSME (MSME level; aggregated for destination reporting)", "Not measured", "Not measured", "MSME sales records by buyer; anchor confirmation and procurement mapping"],
  ["12", "Community cash benefits", "25% of 48 track their community revenue share", "33% of 36 track community revenue", "Community enterprise, trust and cooperative records"],
  { band: "Priority destination level (indicators 13–15)" },
  ["13", "Local share of anchor procurement by value chain", "Not measured", "Not measured", "Anchor procurement mapping"],
  ["14", "Destination coordination status (0–3)", "To be set after the working session", "To be set after the working session", "Meeting records"],
  ["15", "Destination context: arrivals, stay and spend", "Park visits and arrivals available; Hwange data missing", "Partly national data only", "Tourism authorities and parks (in Botswana: BTO, DWNP, Statistics Botswana)"],
  { band: "KAZA level (indicators 16–18)" },
  ["16", "Reach across Partner States", "Two Partner States in the delivery core; Botswana link optional", "One Partner State; Kasane link optional", "Programme records"],
  ["17", "Cross-border market links", "Not measured", "Not measured", "Invoices; DMC confirmation"],
  ["18", "Common R-NBT framework in use (0–3)", "To assess", "To assess", "KAZA Secretariat records"],
];
const treat = [
  ["Sales and jobs (1–2)", "Comparable pre-support sales period in the original currency (BWP in Botswana), with 12 months measured from intake; paid jobs defined, with season, women and youth, and retained and new jobs recorded"],
  ["Practice and community benefit (3, 12)", "Agreed quantitative measures; community cash amounts and recipients recorded separately from wages and supplier payments"],
  ["Capability (4–7)", "Training completion is an output; usable records assessed directly; sole-trader, cooperative or trust status is not necessarily informal"],
  ["Finance (8–9)", "Referral, application, approval and disbursement recorded separately; original terms and currency kept; RTFF module only where relevant"],
  ["Buyer links (10–13)", "Contracts, letters of intent, trial transactions and repeat orders recorded separately; indicator 11 at MSME level and aggregated; local procurement numerator and denominator defined"],
  ["Destination and KAZA (14–18)", "Agreed coordination and adoption rubric; visitor context reported separately; real cross-border business links counted, not visa participation"],
];
const gaps = [
  ["Anchor procurement and local value capture not measured", "Both", "Procurement mapping by category with willing anchors", "11, 13"],
  ["Indicator definitions not yet validated", "Both", "Working sessions test which indicators enterprises can report", "All"],
  ["Weak links between buyers, MSMEs, finance and support", "Both", "Coordination arrangement built on existing bodies; coordination status 0–3", "14"],
  ["Youth employment and disability not collected", "Both", "Collect at intake with consent", "2, 6"],
  ["Hwange and community enterprises under-represented", "PA1", "Targeted outreach once support is approved", "6, 7, 12"],
  ["Hwange destination data missing", "PA1", "Request park and tourism authority data", "15"],
  ["Supplier reliability reported as the binding constraint", "PA1", "Coaching to specification; buyer feedback route", "10, 11"],
  ["Community tourism areas under-represented", "PA2", "Targeted outreach through trusts once support is approved; node coverage tracked separately", "6, 12"],
  ["Weak records limit buyers and lenders", "PA2", "Record-keeping in coaching; sales record checked by the coach", "5, 8"],
  ["Destination spend data partly national", "PA2", "Request local tourism and park data", "15"],
];
const link = [
  ["1, 2", "F4: change in revenue and full-time and seasonal jobs in financed MSMEs, by sex and age"],
  ["3", "G6: grantees meeting at least one additional R-NBT progression criterion"],
  ["5, 7", "G4: grantees moving up at least one readiness tier, including a usable sales record and a formalization step"],
  ["6", "O6: share of finance (number and value) to women-, youth- and community-led enterprises"],
  ["8", "O3: share of targeted MSMEs that obtained external finance in the last 12 months"],
  ["9", "Suggested: records RTFF loans counted under O2 (finance transactions) and F2 (repayment by season)"],
  ["10", "A3: anchors signing the standard supply MOU, and MSMEs with a written agreement"],
  ["11, 13", "F3: value of local procurement from supported MSMEs by partner anchors, and contracts won"],
];

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "GM1-D5 Baseline Indicators", bold: true, size: 36, color: TEAL })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Eighteen indicators at MSME, destination and KAZA level, with survey context for the two priority areas", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Extract prepared for the F6-D9 Consolidated Synthesis Report (Output 1.2) · November 2026 · Draft for validation", size: 18 })] }),
  H1("1. About the indicators"),
  P("The program’s GM1-D5 baseline proposes **18 indicators at three levels**: MSME (indicators 1–12), priority destination (13–15) and KAZA (16–18). Targets are to be set in the destination baselines (GM3-D11). This extract brings the indicators together as they are given in Annex D and Section 13 of the two GM3-D10 Micro Diagnostic Reports (5 November 2026): Hwange–Victoria Falls–Livingstone (PA1) and Okavango Delta–Maun (PA2). Indicator names are the short forms used in those reports; the full GM1-D5 definitions should be used for data collection."),
  P("The survey figures are **descriptive context, not a baseline**. They come from the November 2026 export of the R-NBT MSME survey (64 respondents in the corridor, 40 in Okavango–Maun), which is self-selected and leans towards registered, established enterprises. The baseline for supported enterprises is recorded at intake. An unknown value is recorded as unknown, not zero, and finance obtained before the program is not program disbursement."),
  H1("2. The 18 indicators"),
  P("Table 1 lists each indicator by level, with the survey context available in each priority area and the proposed source for the baseline. Seven indicators (11, 13, 14, 15 in part, 17 and 18, and 9 until the RTFF route is confirmed) have no measured value yet; the procurement-based indicators 11 and 13 depend on anchor procurement mapping, which has not been done."),
  ...table("GM1-D5 indicators, survey context and baseline source", ["#", "Indicator (GM1-D5, short form)", "Survey context: Hwange–Victoria Falls–Livingstone (n=64)", "Survey context: Okavango Delta–Maun (n=40)", "Proposed source for baseline"], [450, 2300, 2300, 2300, 1676], ind),
  SRC("Sources: GM3-D10 Micro Diagnostic Reports 1 and 2, Annex D and Section 13 (citing GM1-D5 pp. 3–8); R-NBT MSME survey, November 2026 export."),
  H1("3. Baseline treatment by indicator group"),
  P("The micro-diagnostics propose how each group of indicators should be treated when the baseline is recorded, so that values are comparable across enterprises and areas. Table 2 sets these out."),
  ...table("Proposed baseline treatment by indicator group", ["Indicators", "Proposed baseline treatment"], [2400, 7346], treat),
  H1("4. Measurement rules"),
  ...B([
    "One record per enterprise.",
    "Baseline at intake; follow-up at the end of coaching and at 12 months, then annually in the same season.",
    "Missing values recorded as unknown, not zero.",
    "Evidence proportionate to the indicator and verified on a risk-based sample.",
    "Results disaggregated by country, node, support pillar, sex, age, formality and community enterprise.",
    "Indicator 11 is recorded at MSME level and aggregated for destination reporting; context indicators (15) are reported, not attributed to the program.",
  ]),
  H1("5. Remaining gaps and proposed actions"),
  P("Both micro-diagnostics identify gaps that must be closed before the baseline can be completed. Table 3 combines them, showing which priority area each applies to and which indicators it affects."),
  ...table("Remaining gaps and proposed actions", ["Gap", "Area", "Proposed action", "Indicators"], [3000, 800, 4546, 1400], gaps),
  H1("6. Link to the F6-D9 Output 1.2 indicators"),
  P("The F6-D9 Consolidated Synthesis Report recommends that Output 1.2 reuse GM1-D5 definitions wherever its indicators overlap, and add only what is specific to financial mechanisms. Table 4 shows where each GM1-D5 indicator feeds an Output 1.2 indicator; the link for indicator 9 is a suggestion not yet in F6-D9."),
  ...table("GM1-D5 indicators and the F6-D9 Output 1.2 indicators they feed", ["GM1-D5 indicator", "F6-D9 Output 1.2 indicator"], [1700, 8046], link),
];

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 160, line: 259, lineRule: LineRuleType.AUTO } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", run: { size: 28, bold: true, color: "262626", font: FONT }, paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 0, keepNext: true } },
      { id: "BulletParagraph", name: "Bullet Paragraph", basedOn: "Normal", paragraph: { indent: { left: 720 }, contextualSpacing: true } },
    ] },
  numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1080, right: 1080 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "KAZA R-NBT · GM1-D5 Baseline Indicators (extract for F6-D9) — Draft for Validation", size: 16 })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] }) },
    children }],
});
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("Wrote", process.argv[2]); });
