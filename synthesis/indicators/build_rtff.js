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


const H = ["#", "Indicator", "Indicative target or reference", "Source and frequency", "Related indicator"];
const C = [520, 3600, 2350, 1900, 1376];
const A = [
  ["R1", "**Referral funnel conversion:** enterprises reached, referred, assessed, approved and disbursed", "About 150 referrals for about 50 loans (1 in 3), as designed", "Referral log; quarterly", "F6-D9 A2"],
  ["R2", "**Capital deployment:** share of the ~EUR 720,000 deployable capital disbursed, by tier", "Tier 1 share above the 17.5% in the current design", "Facility records; quarterly", "F6-D9 O2"],
  ["R3", "**Timing:** days from referral to disbursement; share of working capital disbursed before the peak and of asset loans disbursed in the low season", "To set at design", "Facility records; per season", "—"],
  ["R4", "**Repayment by season:** on-time repayment in low and peak seasons; arrears over 30 and 90 days; restructured loans; write-offs", "Arrears over 30 days below 15% (stop-or-adjust threshold)", "Facility reports; monthly", "F6-D9 O5, F2"],
  ["R5", "**In-country recovery:** share of arrears recovered; cost and time of recovery", "To set; tests offshore administration", "Facility and recovery-partner records; quarterly", "—"],
  ["R6", "**Capital preservation:** net fund value against capital deployed, including foreign-exchange gains and losses", "At least EUR 708,000 net fund value by Q4 2028 (RTFF presentation)", "Fund accounts; semi-annual", "—"],
  ["R7", "**Cost efficiency:** operating cost per loan and per euro lent", "To set", "Fund accounts; annual", "—"],
  ["R8", "**Rate reductions earned:** share of borrowers reaching each verified milestone (women, youth, circular, nature steward); average rate actually paid", "To set after cohort 1 selection", "Verifier reports; semi-annual", "GM1-D5 3; F6-D9 G6"],
  ["R9", "**Social collateral performance:** repayment of social-collateral loans against others; share of defaults where the buyer or mentor link was still active", "Learning indicator; no target", "Facility and coaching records; per season", "—"],
  ["R10", "**Supplier integration:** borrowers integrated into an anchor’s supplier system", "At least 66%, as designed", "Anchor confirmation; semi-annual", "GM1-D5 10"],
  ["R11", "**Inclusion:** RTFF finance (number and value) to women- or youth-led enterprises, counted once, one youth band", "At least 60%, as designed", "Facility records; quarterly", "GM1-D5 6; F6-D9 O6"],
  ["R12", "**Mentoring:** borrowers completing the 16 hours, and follow-up coaching contacts after disbursement", "100% before the final tranche", "Coaching records; quarterly", "GM1-D5 4"],
  ["R13", "**Graduation:** RTFF borrowers obtaining a follow-on loan from a national lender or guarantee window within 12 months of repaying", "To set; key roll-out test", "Lender confirmation; annual", "F6-D9 F5"],
];
const B2 = [
  ["P1", "**Products adopted:** partner lenders offering seasonal or sales-linked repayment, and accepting orders, movable assets or group guarantees, as standard products", "At least one lender per country", "Product approvals; annual", "F6-D9 O1"],
  ["P2", "**Partner tourism portfolios:** new tourism MSME loans by partner lenders outside the RTFF, by number, value, sex and age", "Rising trend from the lender baseline", "Lender data; semi-annual", "F6-D9 O2"],
  ["P3", "**Guarantee windows in use:** tourism loans covered by ECGC, NASRIA/BOSRIA and other schemes; claims ratio; days to pay claims", "Claims paid within agreed days", "Scheme reports; semi-annual", "F6-D9 O7"],
  ["P4", "**Lender capability:** credit officers completing the lender learning track; lenders using agreed regenerative indicators in credit assessment or pricing", "To set", "Training records; lender survey; annual", "F6-D9 §5.1"],
  ["P5", "**BSO referral quality:** BSO–lender referral agreements in force; approval rate of BSO-referred applications", "Approval rate above that of non-referred applicants", "Pipeline dashboard; quarterly", "F6-D9 A2"],
  ["P6", "**BSO performance:** enterprises graduating a tier per BSO; cost per graduate; share of BSO funding paid on performance", "To set", "BSO contracts; semi-annual", "F6-D9 G4"],
  ["P7", "**Anchor repayment links:** anchors using buyer-deducted repayment or controlled accounts for RTFF borrowers", "At least two per delivery area", "Tripartite agreements; semi-annual", "F6-D9 A3, A4"],
  ["P8", "**Co-financing and recapitalisation:** capital pledged alongside or after the RTFF (TUI top-up, impact investors, SADC-DFRC, development partners)", "To set against post-pilot needs", "Commitment letters; annual", "F6-D9 O4"],
  ["P9", "**Data discipline:** partners submitting complete, disaggregated portfolio data on time", "At least 90% of reports on time", "M&E log; quarterly", "—"],
];
const K = [
  ["K1", "**Future arrangements decided:** revolving or depleting fund, host institution and governance with Partner State representation", "Decision by Q4 2028 (0 not started, 1 options agreed, 2 decision taken, 3 operational)", "KAZA Secretariat records; semi-annual", "GM1-D5 18"],
  ["K2", "**Legal routes:** Partner States with a confirmed route for national deployment (licensing, exchange control, borrower protection, tax)", "At least the cohort 1 countries before handover", "Legal reviews; semi-annual", "—"],
  ["K3", "**National deployment channels signed:** countries where a national lender or development bank agrees to originate RTFF-type loans after the pilot (for example ECGC/SMEDCO, FNB/ZANACO, CEDA/NDB, DBN/NASRIA)", "At least two countries by handover", "Agreements; semi-annual", "GM1-D5 16"],
  ["K4", "**Secretariat capacity:** a designated finance function, and hosting of the readiness diagnostic, supply MOU template, indicator set and data platform", "All four hosted by handover", "Secretariat records; at handover", "GM1-D5 18"],
  ["K5", "**Financial sustainability:** cost-recovery ratio (interest and fee income against operating and loss costs); loss-reserve cover", "To set from cohort 1 data", "Fund accounts; annual", "—"],
  ["K6", "**Operations manual and evaluation adopted:** pilot evaluation completed and an operations manual approved for national use", "Before the Gate 2 decision", "Evaluation report; one-off", "—"],
  ["K7", "**Coordination agreements:** alignment with the OKACOM CORB Fund, World Bank tourism programmes and other facilities to avoid duplication", "0–3 scale (as K1)", "Meeting records; annual", "GM1-D5 14"],
];
const SC = [
  ["S1", "**Reach through national channels:** MSMEs financed on RTFF-type terms by national partners after handover, by country, area, sex and age", "To set at handover", "Partner reports; annual", "GM1-D5 8, 16"],
  ["S2", "**Concessionality taper:** share of the national portfolio financed without first-loss or fee support", "Rising each season", "Partner and scheme data; annual", "F6-D9 F5"],
  ["S3", "**Replication:** new destinations or value chains adopting the RTFF model (for example a Zambezi Region second cohort)", "To set", "KAZA Secretariat records; annual", "GM1-D5 16"],
];
const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "RTFF Pilot, Handover and Roll-out Indicators", bold: true, size: 36, color: TEAL })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Indicators beyond the GM1-D5 baseline set for the Regenerative Tourism Finance Facility pilot, its handover to the KAZA Secretariat and post-pilot roll-out with financiers, guarantors, BSOs and anchors", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Prepared for the F6-D9 Consolidated Synthesis Report (Output 1.2) · November 2026 · Draft for validation", size: 18 })] }),
  H1("1. Purpose and scope"),
  P("The 18 GM1-D5 baseline indicators measure change at MSME, destination and KAZA level. They do not tell the program whether the RTFF itself is working as a financial instrument, whether partner institutions are ready to carry RTFF-type lending, or whether the facility can be handed over to the KAZA Secretariat and national channels after the pilot. This document proposes **32 additional indicators** in four groups for those purposes: **RTFF pilot performance** (R1–R13), **partner readiness** (P1–P9), **handover to KAZA** (K1–K7) and **post-pilot roll-out** (S1–S3)."),
  P("Targets are taken from the RTFF design or the source reports where they exist; the others are left to be set once cohort 1 is selected and partner agreements are signed. The final column links each indicator to a related GM1-D5 or F6-D9 Output 1.2 indicator, where there is one, so that definitions can be shared and no indicator is collected twice. All enterprise-level data should follow the GM1-D5 measurement rules: one record per enterprise, disaggregation by country, area, sex, age and formality, and unknown values recorded as unknown, not zero."),
  H1("2. RTFF pilot performance"),
  P("These indicators track whether the facility reaches the enterprises it was designed for, lends on terms that fit tourism cash flows, keeps its capital and creates the record that lets borrowers graduate to national lenders. Table 1 sets them out; most would be reported by the TUI Care Foundation as facility administrator."),
  ...table("RTFF pilot performance indicators (cohort 1)", H, C, A),
  H1("3. Partner readiness"),
  P("Roll-out depends on national lenders, guarantee schemes, BSOs and anchor buyers taking on what the pilot tests. Table 2 measures whether they adopt seasonal products, use guarantee windows, refer well-prepared enterprises, link repayment to buyers and share the data the program needs."),
  ...table("Partner readiness indicators: financiers, guarantors, BSOs and anchors", H, C, B2),
  H1("4. Handover to the KAZA Secretariat"),
  P("The RTFF’s future arrangements are to be designed with the KAZA Secretariat, with a decision expected by Q4 2028. Table 3 tracks the conditions for a credible handover: a decision on the fund’s form and host, legal routes and national channels in place, Secretariat capacity, cost recovery and the documentation needed to operate without the pilot team."),
  ...table("Handover readiness indicators", H, C, K),
  H1("5. Post-pilot roll-out"),
  P("After handover, success means more enterprises financed through national institutions on RTFF-type terms, with less concessional support and in more places. Table 4 sets out three indicators for that stage."),
  ...table("Post-pilot roll-out indicators", H, C, SC),
  SRC("Sources: RTFF parameters (about 150 referrals for about 50 loans; about EUR 720,000 deployable; at least 60% of financing to women- or youth-led enterprises; at least 66% supplier integration; 16 hours of mentoring; EUR 708,000 net fund value) as presented by the TUI Care Foundation and cited in F4-D7 and the GM3-D10 micro-diagnostics; stop-or-adjust threshold from F4-D7; national deployment channels from the Macro Diagnostic."),
  H1("6. Points to agree before use"),
  ...B([
    "**Data sharing with the facility administrator.** R1–R12 depend on TUI Care Foundation records; reporting content, frequency and consent should be written into the RTFF referral and co-financing protocol.",
    "**Rating scales.** K1 and K7 use a 0–3 scale; the scoring guide should be agreed with the KAZA Secretariat.",
    "**Baselines.** P2 and P3 need a lender and guarantee-scheme portfolio baseline at agreement signature; R13 and S1 need lender confirmation of follow-on loans.",
    "**Priority indicators.** R13 (graduation to national lenders), K3 (national channels signed) and K5 (cost recovery) are the most decisive for whether the RTFF can be rolled out after the pilot.",
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
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "KAZA R-NBT · RTFF Pilot, Handover and Roll-out Indicators (for F6-D9) — Draft for Validation", size: 16 })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16 })] })] }) },
    children }],
});
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("Wrote", process.argv[2]); });
