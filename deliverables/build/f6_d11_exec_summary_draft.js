// F6-D11 summary pack: draft one-page executive summary, for review before it is placed at the front of the pack
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, H3, B, table } = K;

const children = [
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Executive summary", bold: true, size: 32, color: "1F4E5F" })] }),
  P("This pack summarises the Output 1.2 recommendations of the **Financial Landscape Analysis** workstream (studies F1-D4 to F5-D8, consolidated in F6-D9) on financing regenerative nature-based tourism (R-NBT) MSMEs, for presentation to the Oversight Committee alongside the Macro and Micro Diagnostics and the Roundtables. **The Committee is asked to take five decisions** that move Output 1.2 from design to agreements in early 2027."),
  H3("What the Financial Landscape Analysis found"),
  ...B([
    "**Finance exists, but not on terms these enterprises can use (F1-D4).** Banks are liquid, every Partner State has a development lender and four run guarantee schemes, yet tourism takes about 4% of Namibia’s guarantee reach; Zambia and Zimbabwe are ready to pilot.",
    "**Five barriers block access (F2-D5):** collateral, seasonality, informality, risk perception and power imbalances in supply chains; a buyer raises the chance of finance from 8% to 28%.",
    "**Most enterprises are not yet ready for debt (F3-D6):** most sit at readiness Tiers 0–1, so coaching, records and compliance are part of the finance gap.",
    "**Lenders will not change terms without risk-sharing (F4-D7).** Order-backed supply chain finance, guarantee windows with first loss and seasonal loans are most feasible; the RTFF is the collateral-free pilot.",
    "**Coaching and buyer links come before money (F5-D8).** Victoria Falls asked for better cost and structure, Maun for access; most want finance for equipment, vehicles or boats.",
  ]),
  H3("What Output 1.2 proposes"),
  P("**One route to finance: connect, prepare, finance.** Platforms every four months link MSMEs, lenders and buyers; two grant lots prepare enterprises; in each area one lender, one guarantor and two anchors pilot adapted products over two seasons, with results triggering finance decisions at two gates in 2028; the KAZA Conservation Trust Fund could host the RTFF after the pilot."),
  P("**Public institutions are partners in financing and empowering MSMEs:**"),
  ...B([
    "**State business support organisations** (SMEDCO with ZIDA, ZDA and CEEC, LEA with CEDA, NIPDB, INAPEM) lead the platforms, apply the readiness diagnostic and manage the grants, separately from lending; CEDA, CEEC and SMEDCO also lend.",
    "**National tourism authorities**, such as ZTA (Zimbabwe) and BTO (Botswana), license and grade operators, certify practice and link MSMEs to markets; simpler licensing for micro operators eases access to finance.",
    "**District councils** such as the Chobe District Council and Zimbabwe’s rural district councils support micro enterprises with trading licences, market space and local outreach.",
  ]),
  H3("Decisions sought"),
  ...table(null, ["#", "Decision", "Recommendation"], [450, 3300, 5996], [
    ["1", "Intervention areas", "PA1 and PA2 as cores; Zambezi Region if resourced; Angola readiness-first"],
    ["2", "Youth band and women-led test", "18–35 and one women-led test across grants, the RTFF and M&E"],
    ["3", "Grant envelope and lot split", "About 40% of value to Lot 1 and 60% to Lot 2"],
    ["4", "First loss and guarantee fees", "10–15% first loss (20% for women and youth); first-cycle guarantee fees"],
    ["5", "Term-sheet talks and gates", "Mandate talks with lenders, guarantors and anchors; endorse gate criteria"],
  ]),
  P("**Not for decision today:** the RTFF’s Chobe–Maun corridor (already decided) and the extension to mid-2029 (for GIZ and the funders)."),
  P("**Next steps:** decision record within five working days; term-sheet talks and tools within 60 days; first platform sessions in the low season (F6-D12)."),
];

// the pack reuses everything after the title line
module.exports = { esBody: children.slice(1) };
if (require.main === module) buildDoc({ out: process.argv[2], header: "KAZA R-NBT Output 1.2 · F6-D11 Summary Pack · Executive summary (draft for review)", cover: null, children, toc: false });
