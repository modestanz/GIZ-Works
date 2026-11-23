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



const OV = [
  ["Gate 1", "Q1 2028, end of season one (Milestone M8)", "Continue season two unchanged, continue with adjustments, or stop a product", "Program steering group with partner lenders and guarantors; TUI Care Foundation for RTFF products", "Season-one portfolio and uptake data; review note"],
  ["RTFF future", "Q4 2028 (Milestone M10)", "Form, host, capital and national channels of the RTFF after the pilot", "KAZA Secretariat with the TUI Care Foundation and GIZ; Partner State focal points", "Fund accounts; legal reviews; signed channel agreements; options paper"],
  ["Gate 2", "Q4 2028, end of season two (Milestone M10)", "Continue, adjust or hand over; schedule for withdrawing concessional support", "Program steering group with the KAZA Secretariat, on the independent review", "Independent review; pilot evaluation report"],
];
const CH = ["Criterion", "Threshold", "Basis", "Indicator"];
const CC = [3000, 2700, 2346, 1700];
const G1 = [
  ["Portfolio quality: arrears over 30 days across pilot products", "15% or below; above 15% triggers stop or adjust", "F6-D9 §7.1 (F4-D7 rule)", "R4; F6-D9 O5"],
  ["Uptake against target (loans disbursed, by product)", "At least half of target; below half triggers stop or adjust", "F6-D9 §7.1 (F4-D7 rule)", "R1, R2; F6-D9 O2"],
  ["Disbursement timing: working capital before the peak, asset loans in the low season", "Most season-one loans disbursed as scheduled", "Proposed", "R3"],
  ["Inclusion on track", "Women- and youth-led share of RTFF finance on course for at least 60%", "RTFF design", "R11; F6-D9 O6"],
  ["Partner agreements in force for season two", "Risk-sharing, guarantee window and RTFF referral agreements signed in each active area", "F6-D9 Milestone M5", "F6-D9 F1"],
  ["Data reporting", "Partners reporting complete, disaggregated portfolio data", "Proposed", "P9"],
];
const RF = [
  ["Capital preservation", "Net fund value at least EUR 708,000", "RTFF presentation (via F4-D7)", "R6"],
  ["Decision taken on future arrangements", "Fund form (revolving or depleting), host and governance decided (score 2 or higher on the 0–3 scale)", "F6-D9 Milestone M10", "K1"],
  ["Legal routes for national deployment", "Confirmed in at least the cohort 1 countries (licensing, exchange control, borrower protection, tax)", "Proposed (RTFF indicators K2)", "K2"],
  ["National channels to take over lending", "Agreements with a national lender or development bank in at least two countries", "Proposed (RTFF indicators K3)", "K3"],
  ["Cost recovery and loss cover", "Cost-recovery ratio and loss-reserve cover at levels to be set from cohort 1 data", "To set", "K5, R7"],
  ["In-country recovery", "Arrears recovery rate at a level to be set; informs whether offshore administration continues", "To set", "R5"],
  ["Recapitalisation", "Capital pledged for the post-pilot fund matches the chosen form (revolving funds need top-ups)", "Proposed", "P8"],
];
const G2 = [
  ["Repayment by season", "Low-season on-time repayment within 10 percentage points of the peak-season rate; arrears over 30 days at or below 15%", "F6-D9 indicator F2; F6-D9 §7.1", "R4; F6-D9 F2, O5"],
  ["Uptake by women and youth", "At least 60% of RTFF finance (number and value) to women- or youth-led enterprises", "RTFF design; F6-D9 executive summary", "R11; F6-D9 O6"],
  ["Lenders continuing with less concessional support", "At least one lender per area continuing products without first loss, or with reduced support", "F6-D9 indicator F5", "F6-D9 F5; S2"],
  ["Graduation to national lenders", "Share of RTFF borrowers with a follow-on national loan, at a level to be set", "To set", "R13"],
  ["Products in standard ranges", "Seasonal or sales-linked products adopted as standard by at least one lender per country", "Proposed (RTFF indicators P1)", "P1"],
  ["Guarantee windows in use", "Tourism loans covered under national schemes, with claims paid within agreed days", "Proposed (RTFF indicators P3)", "P3; F6-D9 O7"],
  ["Evaluation basis", "Whether the second low season has been observed (depends on the extension to mid-2029)", "F6-D9 §7.1, Milestone M9", "K6"],
];
const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Output 1.2 Decision Gates: Criteria", bold: true, size: 36, color: TEAL })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Gate 1, the RTFF future decision and Gate 2 in the F6-D9 implementation roadmap (Section 7, Figure 7)", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Prepared for the F6-D9 Consolidated Synthesis Report (Output 1.2) · November 2026 · Draft for validation", size: 18 })] }),
  H1("1. The three decision points"),
  P("The F6-D9 roadmap has three decision points: **Gate 1** at the end of season one, the **RTFF future** decision with the KAZA Secretariat and **Gate 2** at the end of season two, both in the fourth quarter of 2028. Only Gate 1 has numeric thresholds in the report (F4-D7’s stop-or-adjust rule). This document proposes criteria for all three, drawing on the F6-D9 indicators and the separate RTFF pilot, handover and roll-out indicators (R, P, K and S codes). Table 1 summarizes what each decision point decides, who decides and on what evidence."),
  ...table("The three decision points", ["Decision point", "Timing", "What is decided", "Who decides (proposed)", "Evidence"], [1300, 1700, 2500, 2300, 1946], OV),
  P("The **Basis** column in Tables 2–4 shows where each threshold comes from: the F6-D9 report, the RTFF design, a proposal in this document, or **to set** where the level should be agreed once cohort 1 data are available."),
  H1("2. Gate 1: end of season one"),
  P("Gate 1 decides whether the pilot products continue into season two and on what terms. If it passes, the products open to non-grantees and the second pilots start (community guarantee pools, results-based finance, community revolving funds and the second-wave value chains). Table 2 sets out the criteria."),
  ...table("Gate 1 criteria (Q1 2028)", CH, CC, G1),
  H1("3. RTFF future arrangements"),
  P("The RTFF future decision sets the facility’s form, host, capital and national channels after the pilot. It should be taken with the KAZA Secretariat by the fourth quarter of 2028, before Gate 2, so that handover can follow. Table 3 sets out the criteria."),
  ...table("RTFF future decision criteria (Q4 2028)", CH, CC, RF),
  H1("4. Gate 2: end of season two"),
  P("Gate 2 decides whether to continue, adjust or hand over, and the schedule for withdrawing first-loss, fee and price support. The F6-D9 executive summary names three tests: repayment by season, uptake by women and youth, and lender willingness to continue with less concessional support. Table 4 adds the graduation, product and guarantee criteria that show whether national institutions can carry the products."),
  ...table("Gate 2 criteria (Q4 2028)", CH, CC, G2),
  H1("5. Points to agree"),
  ...B([
    "**Who decides.** The decision-makers in Table 1 are proposals; the program’s steering arrangements and the RTFF agreement with the TUI Care Foundation should confirm them.",
    "**Thresholds marked ‘to set’.** Cost recovery, loss-reserve cover, recovery rate and graduation rate should be fixed once season-one data are available, ideally at Gate 1.",
    "**Order of decisions.** The RTFF future decision should precede Gate 2, so that the handover agreed at Gate 2 has a destination.",
    "**Timing risk.** Without the extension to mid-2029, Gate 2 is taken before the second low season is observed; the evaluation should say so and the extension decision (Milestone M9, Q2 2028) should be taken with this in mind.",
  ]),
];
const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 160, line: 259, lineRule: LineRuleType.AUTO } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", run: { size: 28, bold: true, color: "262626", font: FONT }, paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 0, keepNext: true } },
      { id: "BulletParagraph", name: "Bullet Paragraph", basedOn: "Normal", paragraph: { indent: { left: 720 }, contextualSpacing: true } },
    ] },
  numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1080, right: 1080 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "KAZA R-NBT · Output 1.2 Decision Gates: Criteria (for F6-D9) — Draft for Validation", size: 16 })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] }) },
    children }],
});
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("Wrote", process.argv[2]); });
