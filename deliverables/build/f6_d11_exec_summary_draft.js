// F6-D11 summary pack: draft one-page executive summary, for review before it is placed at the front of the pack
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, H3, B, table } = K;

const children = [
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Executive summary", bold: true, size: 32, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "From evidence to decisions: financing R-NBT MSMEs in KAZA · Oversight Committee · For decision", italics: true, size: 20, color: "404040" })] }),
  P("This pack brings the Output 1.2 recommendations on financing regenerative nature-based tourism (R-NBT) MSMEs to the Oversight Committee, together with the Macro and Micro Diagnostics and the Roundtables. **The Committee is asked to take five decisions** that move Output 1.2 from design to agreements in early 2027. The evidence and detail are in the F6-D9 Consolidated Synthesis Report."),
  H3("What the evidence shows"),
  ...B([
    "**Finance exists, but not on terms these enterprises can use.** Of 106 MSMEs surveyed, 82 name finance as a top-three challenge, yet 54 have never applied. Enterprises with a buyer were three and a half times as likely to obtain finance (28% against 8%).",
    "**Two priority areas, two starting points.** Hwange–Victoria Falls–Livingstone needs finance on better cost and structure; Okavango–Maun, smaller and more informal (48% women-led), needs access first. Only 20% in each have ever obtained finance.",
    "**Coaching and buyer links come before money.** Participants asked for training alongside loans, and most want finance for equipment, vehicles or boats; only 6 of 19 sell under a written contract.",
    "**Lenders will not change terms without risk-sharing.** The most feasible mechanisms are order-backed supply chain finance, guarantee windows with first loss and seasonal loans, with the RTFF as the collateral-free pilot.",
  ]),
  H3("What Output 1.2 proposes"),
  P("**One route to finance: connect, prepare, finance.** Dialogue platforms every four months link MSMEs, lenders and anchor buyers; grants (Lot 1 up to EUR 10,000; Lot 2 EUR 10,000–40,000) prepare enterprises; and, in each area, one lender, one guarantor and two anchors pilot adapted products over two tourism seasons. Measured results trigger finance decisions at two gates (Q1 and Q4 2028), and partners such as the KAZA Conservation Trust Fund are proposed to sustain the RTFF after the pilot."),
  H3("Decisions sought"),
  ...table(null, ["#", "Decision", "Recommendation"], [450, 3300, 5996], [
    ["1", "Intervention areas", "PA1 and PA2 as delivery cores; Zambezi Region only if resourced; Angola readiness-first"],
    ["2", "Youth band and women-led test", "18–35 and a majority ownership or decision-making test across grants, the RTFF and M&E"],
    ["3", "Grant envelope and lot split", "About 40% of value to Lot 1 and 60% to Lot 2"],
    ["4", "First loss and guarantee fees", "Allow 10–15% first loss (20% for women- and youth-led) and first-cycle guarantee fees under Activity 1.2.3"],
    ["5", "Term-sheet talks and gates", "Mandate talks with shortlisted lenders, guarantors and anchors; endorse the gate criteria"],
  ]),
  P("**Not for decision today:** the RTFF’s Chobe–Maun corridor in Botswana (already decided) and the project extension to mid-2029 (for GIZ and the funders)."),
  P("**Next steps:** the signed decision record is circulated within five working days; term-sheet talks open and the readiness diagnostic, supply MOU template, intake baseline and grant manual are commissioned within 60 days; the first platform sessions follow in the low season (F6-D12)."),
];

buildDoc({ out: process.argv[2], header: "KAZA R-NBT Output 1.2 · F6-D11 Summary Pack · Executive summary (draft for review)", cover: null, children, toc: false });
