// F6-D11 summary pack: draft one-page executive summary, for review before it is placed at the front of the pack
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, H3, B, table } = K;

const children = [
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Executive summary", bold: true, size: 32, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "From evidence to decisions: financing R-NBT MSMEs in KAZA · Oversight Committee · For decision", italics: true, size: 20, color: "404040" })] }),
  P("This pack brings the Output 1.2 recommendations on financing regenerative nature-based tourism (R-NBT) MSMEs to the Oversight Committee, with the Macro and Micro Diagnostics and the Roundtables. **The Committee is asked to take five decisions** that move Output 1.2 from design to agreements in early 2027; detail is in F6-D9."),
  H3("What the evidence shows"),
  ...B([
    "**Finance exists, but not on terms these enterprises can use.** Of 106 MSMEs surveyed, 82 name finance as a top-three challenge, yet 54 have never applied; a buyer raises the chance of obtaining finance from 8% to 28%.",
    "**Two priority areas, two starting points.** Hwange–Victoria Falls–Livingstone needs better cost and structure; Okavango–Maun, more informal and 48% women-led, needs access first. Only 20% in each have obtained finance.",
    "**Coaching and buyer links come before money.** Participants asked for training alongside loans, and most want finance for equipment, vehicles or boats; only 6 of 19 sell under a written contract.",
    "**Lenders will not change terms without risk-sharing.** Order-backed supply chain finance, guarantee windows with first loss and seasonal loans are most feasible; the RTFF is the collateral-free pilot.",
  ]),
  H3("What Output 1.2 proposes"),
  P("**One route to finance: connect, prepare, finance.** Platforms every four months link MSMEs, lenders and anchor buyers; grants (Lot 1 up to EUR 10,000; Lot 2 EUR 10,000–40,000) prepare enterprises; in each area one lender, one guarantor and two anchors pilot adapted products over two seasons. Results trigger finance decisions at two gates in 2028, and partners such as the KAZA Conservation Trust Fund would sustain the RTFF after the pilot."),
  P("**Public institutions are partners in financing and empowering MSMEs:**"),
  ...B([
    "**State business support organisations**, SMEDCO with ZIDA (Zimbabwe), ZDA and CEEC (Zambia), LEA with CEDA (Botswana), NIPDB (Namibia) and INAPEM (Angola), lead the platforms, apply the readiness diagnostic and manage the grants, separately from lending; CEDA, CEEC and SMEDCO also lend to grant graduates.",
    "**National tourism authorities**, such as ZTA (Zimbabwe) and BTO (Botswana), license and grade operators, certify practice and link MSMEs to markets; simpler licensing for micro operators eases access to finance.",
    "**District councils** that support micro enterprises, such as the Chobe District Council and Zimbabwe’s rural district councils, provide trading licences, market space and outreach to wards and villages.",
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
  P("**Next steps:** decision record within five working days; term-sheet talks and tools commissioned within 60 days; first platform sessions in the low season (F6-D12)."),
];

buildDoc({ out: process.argv[2], header: "KAZA R-NBT Output 1.2 · F6-D11 Summary Pack · Executive summary (draft for review)", cover: null, children, toc: false });
