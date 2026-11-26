// F6-D9 Section 2.6: proposed additions from the November working session reports (finance findings), for review
const { Paragraph, TextRun, AlignmentType } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC, runs } = K;

const label = (t) => new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: t, bold: true, italics: true, size: 20, color: "1F4E5F" })] });
const quote = (t) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, indent: { left: 360, right: 360 }, children: runs(t, { italics: true, color: "404040" }) });

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F6-D9 Section 2.6: Proposed Additions from the November Working Session Reports", bold: true, size: 34, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Finance findings from the participant questionnaires and the Victoria Falls working session report, for review before they are placed in the report", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Based on the F6-D9 Consolidated Synthesis Report, updated draft of 26 November 2026 · KAZA R-NBT · Output 1.2", size: 18 })] }),

  H1("1. Purpose and sources"),
  P("Section 2.6 summarises what the November working sessions add, drawing on the micro-diagnostics and the finance segment reports (MiD1–2; RT-VF, RT-MN). Five further documents from the sessions are now available (Table 1). This note identifies the finance findings in them that Section 2.6 does not yet reflect and proposes how to add them, keeping the section’s structure and length in proportion."),
  ...table("Documents reviewed", ["Document", "Content", "Use in this note"], [3600, 3700, 2446], [
    ["Victoria Falls working session: participant feedback findings (SIGMA, 17 November 2026)", "19 individual questionnaires (19 of 20 external participants) and three group table sheets, 10 November 2026", "Main source: loan interest, uses of finance, terms, barriers, contracts, grants"],
    ["Maun working session: participant feedback findings (SIGMA, 20 November 2026)", "17 individual questionnaires (17 of 18 external participants) and table sheets, 12 November 2026", "Main source: what would make the loan usable, payment terms, community access"],
    ["GM3-D10 Destination focus group working session report 1: Hwange–Victoria Falls–Livingstone (20 November 2026)", "Session report, including the three group proposals on lending, coaching and market access", "Group proposals and the access-versus-repayment trade-off"],
    ["Signed attendance registers, Victoria Falls and Maun (Annex A)", "Scanned registers", "Not quoted; participant counts are taken from the feedback notes"],
  ]),
  P("Both feedback notes record that **no finance provider attended** and that the figures are participant preferences, not tested terms or commitments. The Victoria Falls respondents were all registered enterprises, mainly in tour, travel and activities; the Maun form did not ask about rates, amounts or uses of finance. The proposed text keeps these caveats."),

  H1("2. What the new reports add"),
  P("Table 2 lists the finance findings, the evidence, what each implies for Output 1.2 and whether the current F6-D9 already reflects it."),
  ...table("Finance findings from the November working session reports", ["Finding", "Evidence", "Implication for Output 1.2", "In F6-D9 now?"], [2500, 2300, 3300, 1646], [
    ["Strong stated interest in a no-collateral, order-linked loan", "17 of 19 in Victoria Falls would apply for the example loan (no collateral, linked to a buyer order, released after coaching and 16 hours of mentoring, cheaper for agreed results)", "Supports the RTFF design; stated interest, not uptake", "No"],
    ["Demand leans to assets, not working capital", "Equipment, vehicles or boats 12 of 19; working capital 6; premises 6; licences and compliance 3; trade shows 3", "An order-linked working-capital product alone will not meet the main demand; supports asset and lease-to-own finance (Model A) alongside the RTFF", "Partly (asset finance recommended in 5.3, without this evidence)"],
    ["Preferred terms well below bank rates", "Mostly 3–8%, range 0–10%, over two to five years with seasonal repayment; group proposals of 0–4% over two to three years (staged, ring-fenced), 5–8% in a tiered model and 7–8% over five years with repayment through the buyer", "Expectations need managing against the cost of funds; supports seasonal schedules and buyer-linked repayment", "Partly (exec summary cites 0–8%)"],
    ["Collateral is the barrier named most", "9 of 19 and all three groups; then cost, short repayment periods, records and compliance", "Confirms the collateral barrier at destination level", "Yes, in general terms"],
    ["Few written contracts", "6 of 19 sell under a written contract or letter of intent; 9 rely only on informal orders; “trial contracts that can grow”", "Order-linked lending needs a simple order form, letter of intent or trial contract, not only a full supply MOU", "No"],
    ["Coaching first, grants still expected", "13 of 19 put coaching first, 4 market access; grants requested by 6 respondents and two groups, including a tiered model (grants, then blended finance, then loans)", "Supports the graduation pathway and conditional grants", "Partly (coaching first is in 2.6)"],
    ["What makes the loan usable in Maun", "Training alongside the loan (6 and both groups); simple, fast applications (6); lower interest (5); buyer links (4); Setswana forms (3); seasonal grace (2); access for unregistered groups (a chief’s letter)", "Confirms the delivery-design message; adds simple, fast applications", "Mostly"],
    ["Payment terms vary by buyer", "Late or long payment named by 8 and both tables; deposits of about 50%, payment within one to two weeks and no 90-day accounts proposed; one lodge pays small suppliers in 15 days", "Supply MOU could allow deposits for craft and made-to-order supply; payment terms are a buyer practice, not a value-chain constant", "Partly (2.6 says produce and laundry terms are acceptable)"],
    ["Undocumented buyer standards", "Lodge standards often unwritten and differ by camp (4 and one table)", "Written specifications are needed before an order can back a loan", "No"],
    ["Community producers outside the loan’s target", "Community groups said a loan for established businesses would not reach them; one could not afford a loan", "Confirms the need for a group or grant route for community producers", "Yes"],
    ["Payment route matters for women and youth", "Direct payment to producers, a women’s fund and a youth share proposed instead of payment into one trust account", "Payment route can be a condition or a results-linked step-down", "No"],
  ]),

  H1("3. Proposed changes to Section 2.6"),
  P("Three changes are proposed: a correction to one sentence, one new paragraph and a short addition to the first of the four messages. Together they add about 250 words, roughly 0.4 of a page."),
  label("(a) Revise the sentence on payment terms (second paragraph)"),
  quote("Current: Maun produce and laundry suppliers called payment terms acceptable, while craft producers reported 30–90-day payment and unpaid consignment."),
  P("**Proposed:** Payment practice varies by buyer: some Maun lodges pay small suppliers within 15 days and produce and laundry suppliers called terms acceptable, while craft producers reported 30–90-day payment and unpaid consignment and asked for deposits of about 50% and payment within one to two weeks."),
  label("(b) New paragraph, to follow the second paragraph"),
  P("The participant questionnaires add finance detail that the discussions did not capture (WS-VF; WS-MN). In Victoria Falls, 17 of 19 respondents said they would apply for a loan with no collateral, linked to a buyer order and released after coaching, but demand leans to assets: 12 of 19 would use finance for equipment, vehicles or boats, against six each for working capital and premises, so an order-linked working-capital product alone will not meet the main need. Collateral was the barrier named most (9 of 19 and all three groups), preferred terms clustered at about 3–8% over two to five years with seasonal repayment, and only 6 of 19 sell under a written contract or letter of intent, so order-linked lending will need a simple order form or trial contract. In Maun, respondents asked for training alongside the loan, simple and fast applications, forms in Setswana, buyer links and written buyer specifications before an order can support a loan; community groups said a loan for established businesses would not reach them and proposed direct payment to producers, a women’s fund and a youth share rather than payment into a single trust account. No finance provider attended either session, so these are stated preferences, not tested terms."),
  label("(c) Addition to the first of the four messages"),
  quote("Current: First, finance must come with coaching and buyer links: participants in both sessions placed records, costing and compliance before money, and saw buyer links as what makes a business bankable at all."),
  P("**Proposed:** First, finance must come with coaching and buyer links: participants in both sessions placed records, costing and compliance before money (13 of 19 Victoria Falls respondents put coaching first), and saw buyer links as what makes a business bankable at all."),

  H1("4. Where else the findings apply"),
  P("The findings also support recommendations elsewhere in the report. Table 3 lists optional, minor edits; none is needed for Section 2.6 to stand."),
  ...table("Optional consistency edits elsewhere in F6-D9", ["Section", "Optional edit"], [2400, 7346], [
    ["5.1 Design requirements (Supply Chain Compact)", "Add a simple order form, letter of intent or trial contract as the entry point before a full supply MOU, and an optional deposit for craft and made-to-order supply"],
    ["5.3 Activity 1.2.3 (asset and lease-to-own finance)", "Cite the Victoria Falls evidence that equipment, vehicles and boats are the main intended use (12 of 19)"],
    ["5.3 RTFF", "Note that most stated demand is for assets, which the RTFF’s order-linked design may not cover, and refer asset needs to Model A"],
    ["6.2 Indicators (Activity 1.2.1)", "Consider orders or bookings from introductions, repeat business and on-time payment, as the working session report suggests"],
  ]),

  H1("5. Notes for insertion"),
  ...B([
    "**Source codes.** The proposed text uses WS-VF and WS-MN for the two participant feedback notes. Add them to the source-codes note after the acronyms and to Annex D: SIGMA International (2026). Victoria Falls Destination Focus Group Working Session: Participant Feedback Findings, 17 November 2026; and Maun Destination Focus Group Working Session: Participant Feedback Findings, 20 November 2026. Add the Victoria Falls working session report (GM3-D10, 20 November 2026) if it is cited.",
    "**Length.** About 250 words are added. With the reframed Section 2.1 (about 300 words) the main text grows by about 0.9 of a page; check it against the page target, and shorten the new paragraph by dropping the Maun application details (already in the executive summary) if needed.",
    "**Consistency.** The executive summary’s November bullets already cite 0–8% proposed rates; the new paragraph’s 3–8% is the questionnaire cluster and the two are compatible. The executive summary does not need to change.",
  ]),
  SRC("Sources: SIGMA International (2026), Victoria Falls and Maun working session participant feedback findings (17 and 20 November 2026); GM3-D10 Destination Focus Group Working Session Report 1 (20 November 2026); F6-D9 updated draft (26 November 2026), Section 2.6."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT · F6-D9 Section 2.6: Proposed Additions",
  cover: null,
  children,
  toc: false,
});
