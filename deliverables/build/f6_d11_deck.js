// F6-D11: Oversight Committee summary pack (integrated with the Macro and Micro Diagnostics and the Roundtables)
// Usage: node deliverables/build/f6_d11_deck.js out.pptx
const { newDeck, makeHelpers, finish } = require("./deck_lib");

const FOOT = "KAZA R-NBT · Output 1.2 summary pack for the Oversight Committee (F6-D11) · Draft for decision";
const { pres, C } = newDeck({ title: "Output 1.2 Summary Pack for the Oversight Committee", subject: "F6-D11 integrated presentation with the Macro and Micro Diagnostics and Roundtables", footer: FOOT });
const H = makeHelpers(pres, C);
const { sec, content, card, stat, lead, fig, table, ask, T } = H;

sec("Opening");
let s = H.add("TITLE");
s.addText("F6-D11 · Oversight Committee · For decision", { placeholder: "kicker" });
s.addText("From diagnosis to decisions: financing R-NBT MSMEs in KAZA", { placeholder: "title" });
s.addText("Output 1.2 recommendations, presented with the Macro Diagnostic, the destination Micro Diagnostics and the Roundtables", { placeholder: "sub" });
s.addText("Presented by Modesta Nyirenda, MNZ Consult, with the GIZ KAZA R-NBT team · [Date and venue to be confirmed]", { placeholder: "meta" });
s.addNotes("This pack is presented jointly with the Macro and Micro Diagnostic findings (SIGMA) and the Roundtable results. Output 1.2 is the finance strand. The Committee is asked to take seven decisions at the end; everything before builds the case for them.");

s = content("What the Committee is asked to do today", "Open with the decisions so members listen for the evidence behind each. Seven decisions; three items for noting. A one-page decision sheet for each decision is in the accompanying summary pack document.");
const dec = [
  "Confirm the intervention areas for Output 1.2",
  "Adopt one youth band (18–35) and one women-led test",
  "Decide the Botswana route for the RTFF",
  "Confirm the grant-facility envelope and lot split",
  "Allow first loss and guarantee fees under Activity 1.2.3",
  "Request the project extension to mid-2029",
  "Mandate term-sheet talks and endorse the decision gates",
];
T(s, "For decision", { x: 0.6, y: 1.35, w: 7.6, h: 0.4, fontSize: 16, bold: true, color: C.accent3 });
dec.forEach((d, i) => {
  const y = 1.85 + i * 0.68;
  s.addShape(pres.shapes.OVAL, { x: 0.6, y, w: 0.5, h: 0.5, fill: { color: C.accent3 }, line: { color: C.accent3 } });
  T(s, String(i + 1), { x: 0.6, y, w: 0.5, h: 0.5, fontSize: 15, bold: true, color: C.background1, align: "center", valign: "middle" });
  T(s, d, { x: 1.3, y, w: 6.9, h: 0.5, fontSize: 17, valign: "middle" });
});
card(s, { x: 8.6, y: 1.35, w: 4.1, h: 5.45, head: "For noting", body: [
  "Validation status: the Macro Diagnostic is under KAZA Secretariat review before member states; F6-D9 is a draft for validation",
  "RTFF selection criteria, pipeline and key indicators to be agreed by TUI Care Foundation, GIZ and SIGMA",
  "Partnership leads to be carried by GIZ: SADC-DFRC, OKACOM (CORB Fund), ITC, national DFIs",
], size: 15, color: C.accent2 });

s = content("One storyline across the workstreams", "Each strand narrowed the question. The Macro Diagnostic set the priority areas and value chains; the Regional Roundtable tested them; the Micro Diagnostics went to destination level; the November sessions heard MSMEs and buyers; F6-D9 turns it into Output 1.2 recommendations.");
const steps = [
  ["Macro Diagnostic", "Oct 2026", "Priority areas, value chains, MSME survey (106), finance interviews, RTFF parameters", C.accent1],
  ["Regional Roundtable", "Maun, 22–24 Sep 2026", "Priorities tested with Partner States; RTFF presented; Finance Lab", C.accent5],
  ["Micro Diagnostics", "GM3-D10, 5 Nov 2026", "Hwange–Victoria Falls–Livingstone and Okavango–Maun: delivery cores, 141 survey responses", C.accent2],
  ["Destination Roundtables", "Victoria Falls 10 Nov · Maun 12 Nov", "What MSMEs, buyers and associations asked for on cost, terms, access and coaching", C.accent4],
  ["Output 1.2 synthesis", "F6-D9, Nov 2026", "Framework, recommendations by activity and value chain, M&E and roadmap", C.accent3],
];
steps.forEach(([h, d, b, col], i) => {
  const x = 0.6 + i * 2.46;
  s.addShape(pres.shapes.OVAL, { x: x + 0.9, y: 1.55, w: 0.5, h: 0.5, fill: { color: col }, line: { color: col } });
  T(s, String(i + 1), { x: x + 0.9, y: 1.55, w: 0.5, h: 0.5, fontSize: 15, bold: true, color: C.background1, align: "center", valign: "middle" });
  if (i < 4) s.addShape(pres.shapes.LINE, { x: x + 1.5, y: 1.8, w: 2.26, h: 0, line: { color: C.accent2, width: 1.5, endArrowType: "triangle" } });
  card(s, { x, y: 2.3, w: 2.3, h: 3.4, head: h, body: b, size: 14, headSize: 15, color: col });
  T(s, d, { x: x + 0.2, y: 5.25, w: 1.95, h: 0.4, fontSize: 12, bold: true, color: col });
});
ask(s, { x: 0.6, y: 5.95, w: 12.1, h: 0.95, label: "Decisions", text: "Today: the seven decisions on slides 19–20, which let Output 1.2 move from design to agreements and the first calls in early 2027.", color: C.accent3 });

// A
sec("A. What we know");
s = H.add("SECTION");
s.addText("A", { placeholder: "num" });
s.addText("What we know", { placeholder: "title" });
s.addText("Macro Diagnostic, Micro Diagnostics and Roundtables: the joint evidence", { placeholder: "sub" });

s = content("Macro Diagnostic: KAZA has the parts, but they do not connect", "The Macro Diagnostic's central message, which the finance studies confirm: KAZA does not mainly need another finance institution. Buyers, lenders, conservation structures and BSOs exist; the constraint is the weak connection between them. That is why Activity 1.2.1 comes first.");
card(s, { x: 0.6, y: 1.45, w: 3.9, h: 3.0, num: 1, head: "Two priority areas", body: "PA1 Hwange–Victoria Falls–Livingstone; PA2 Okavango Delta–Maun. Namibia's Zambezi Region on a phased pathway; Angola readiness-first.", size: 15 });
card(s, { x: 4.72, y: 1.45, w: 3.9, h: 3.0, num: 2, head: "Priority value chains", body: "Fresh produce and food; guiding and experiences; transport; crafts to brief; laundry and services; conservation and coexistence services.", size: 15, color: C.accent2 });
card(s, { x: 8.84, y: 1.45, w: 3.9, h: 3.0, num: 3, head: "Not another facility", body: "Every Partner State has lenders, a guarantee or development institution and business support to build on; tourism is a marginal user of all of them.", size: 15, color: C.accent3 });
stat(s, { x: 0.6, y: 4.6, w: 3.9, value: "106", label: "MSMEs surveyed in the Macro Diagnostic; self-selected, leaning to registered firms", color: C.accent1 });
stat(s, { x: 4.72, y: 4.6, w: 3.9, value: "~150", label: "MSMEs to be coached across the two priority areas to the end of 2028", color: C.accent2 });
stat(s, { x: 8.84, y: 4.6, w: 3.9, value: "5", label: "Partner States: Angola, Botswana, Namibia, Zambia, Zimbabwe", color: C.accent3 });

s = content("Micro Diagnostics: two destinations, two starting points", "Same share has obtained finance (20%), but Maun enterprises are less likely to hold a contract or keep records and more likely to be women-led. Value-chain mix differs: guiding and transport dominate the corridor; crafts are the largest group in Maun.");
fig(s, "fig3_destinations_bal.png", { x: 0.6, y: 1.35, maxW: 12.1, maxH: 4.3, alt: "Finance-relevant profile of the two priority areas" });
T(s, [
  { text: "PA1 corridor: ", options: { bold: true, color: C.accent1 } }, { text: "guiding (43 of 64) and transport (30) dominate; only 3 in crafts.   ", options: {} },
  { text: "PA2 Maun: ", options: { bold: true, color: C.accent2 } }, { text: "crafts (20 of 40), conservation and community (11), food (9), laundry and services (8).", options: {} },
], { x: 0.6, y: 5.85, w: 12.1, h: 0.9, fontSize: 15, valign: "top" });

s = content("Roundtables: what participants asked for", "Three sessions, one consistent message: coaching and buyer links before and alongside money; delivery design decides who applies. The two November sessions differed in emphasis: cost in Victoria Falls, access in Maun.");
card(s, { x: 0.6, y: 1.45, w: 3.9, h: 5.35, num: 1, head: "Regional Roundtable, Maun (Sep)", body: [
  "Priority areas and value chains tested with Partner States",
  "RTFF presented by the TUI Care Foundation; Finance Lab",
  "Prioritisation worked, but would have counted more with government decision-makers in the room",
  "Communities and traditional leaders must be involved",
], size: 16 });
card(s, { x: 4.72, y: 1.45, w: 3.9, h: 5.35, num: 2, head: "Victoria Falls (10 Nov)", body: [
  "Cost and structure: about 28% at banks against 0–8% proposed",
  "Milestone tranches; seasonal repayment",
  "Association guarantees; repayment deducted by buyers",
  "6–12 months of coaching before lending",
], size: 16, color: C.accent2 });
card(s, { x: 8.84, y: 1.45, w: 3.9, h: 5.35, num: 3, head: "Maun (12 Nov)", body: [
  "Access: a route for unregistered groups (a kgosi's letter)",
  "Setswana and paper forms; mobile-money and cash repayment",
  "Coaching before and after the loan",
  "An end to unpaid consignment for crafts",
], size: 16, color: C.accent3 });

s = content("The finance finding: fit, readiness and risk, not a capital shortage", "Banks are liquid, four Partner States run guarantee schemes and anchors want to buy locally. The finance on offer does not fit micro, seasonal enterprises on communal land. Capacity gaps (records, compliance, management) are part of the access-to-finance barrier.");
stat(s, { x: 0.6, y: 1.5, w: 2.9, value: "82 of 106", label: "MSMEs name finance as a top-three challenge", color: C.accent3 });
stat(s, { x: 3.65, y: 1.5, w: 2.9, value: "54", label: "have never applied for a loan", color: C.accent2 });
stat(s, { x: 6.7, y: 1.5, w: 2.9, value: "28% v 8%", label: "obtained finance with a buyer, against without", color: C.accent1 });
stat(s, { x: 9.75, y: 1.5, w: 2.9, value: "~4%", label: "tourism share of Namibia's guarantee scheme reach", color: C.accent4 });
table(s, ["Barrier", "What Output 1.2 does about it"], [
  ["Collateral", "Orders, invoices, movable assets and group guarantees as security; guarantee windows and first loss"],
  ["Seasonality", "Seasonal schedules and low-season grace as standard"],
  ["Informality and capacity", "Formalization as a milestone; coaching before and after the loan; grants for compliance"],
  ["Risk perception", "Screened pipeline, lender learning track, repayment data by season"],
  ["Power imbalances", "Standard supply MOU: written orders, payment within 30 days, notice before termination"],
], { y: 3.6, colW: [2.8, 9.3], fontSize: 15 });

// B
sec("B. What we propose");
s = H.add("SECTION");
s.addText("B", { placeholder: "num" });
s.addText("What we propose", { placeholder: "title" });
s.addText("One pathway, three activities, organized by priority value chain", { placeholder: "sub" });

s = content("One pathway, three activities", "1.2.1 connects and produces the pipeline; 1.2.2 prepares and de-risks with grants that pay for what a loan cannot; 1.2.3 finances through institutions that stay after the project. Activity 1.1.1 coaching underpins all three.");
fig(s, "fig4_framework_bal.png", { x: 0.6, y: 1.3, maxW: 12.1, maxH: 5.6, alt: "Output 1.2 strategic framework" });

s = content("What each activity will do", "One sentence per element; full detail in F6-D9 Chapter 5.");
card(s, { x: 0.6, y: 1.45, w: 3.9, h: 5.4, num: 1, head: "1.2.1 Connect", body: [
  "One finance and market-linkage platform per delivery core, quarterly, timed to the season",
  "Lender clinics, women-only and youth-only sessions, deal days, anchor roundtables and a standard supply MOU",
  "A learning track for banks, MFIs, guarantee schemes and DFIs on tourism, extended ESG and nature-positive practice",
], size: 16 });
card(s, { x: 4.72, y: 1.45, w: 3.9, h: 5.4, num: 2, head: "1.2.2 Prepare", body: [
  "Lot 1 up to EUR 10,000 (10–20% contribution, largely in kind) for Tier 0–1",
  "Lot 2 EUR 10,000–40,000 (30–50%, may be a loan), with a conversion clause into the borrower's contribution",
  "Conditional on training; at least 60% to women- or youth-led enterprises",
], size: 16, color: C.accent2 });
card(s, { x: 8.84, y: 1.45, w: 3.9, h: 5.4, num: 3, head: "1.2.3 Finance", body: [
  "Per area: one lender, one guarantor and two anchors piloting adapted products over two seasons",
  "Guarantee windows with first loss; order-backed and asset finance; community guarantee pools",
  "The RTFF as one option, with seasonal schedules, a larger Tier 1 share, a loss reserve and in-country recovery",
], size: 16, color: C.accent3 });
s.addNotes("Emphasise that the RTFF is one option among several.");

s = content("By priority value chain", "Cohort 1 chains start in season one. Crafts are market-first: no debt before a buyer contract. Conservation and coexistence services need an outcome payer, so design starts now.");
table(s, ["Value chain", "Connect (1.2.1)", "Grant (1.2.2)", "Finance (1.2.3)", "Start"], [
  ["Fresh produce, poultry, eggs, fish", "Anchor procurement roundtables", "Group grants; cold storage, poultry housing", "Order-backed working capital; community guarantee pool; RTFF", "Cohort 1"],
  ["Guiding and experiences", "DMC and lodge listing; youth sessions", "Safety gear, certification, bookability", "Lease-to-own with first loss; seasonal grace", "Cohort 1"],
  ["Transport and logistics", "Sub-hire contract clinics", "Tax clearance, insurance, vehicle deposit", "Asset finance under guarantee cover", "Cohort 1"],
  ["Crafts and décor to brief", "Design-to-brief challenge", "Design and sample-order grants", "PO finance after a first order", "Market first"],
  ["Laundry, maintenance, solar", "Outsourcing dialogues", "Equipment for youth entrants", "Asset finance against service contracts", "Cohort 1 (small)"],
  ["Conservation and coexistence", "Outcome-funder dialogue", "Beehive fences, corrals, certification", "Results-based finance; revolving funds", "Design now"],
], { y: 1.45, colW: [2.5, 2.5, 2.6, 3.2, 1.3], fontSize: 15 });

s = content("First pilots and partners by area", "Partners are shortlisted from consultations; none has yet committed. Decision 7 mandates term-sheet talks with them.");
table(s, ["Area", "First pilot (season one)", "Candidate partners"], [
  ["PA1 Zimbabwe: Victoria Falls–Hwange", "Anchor-supplier and youth services packages under an ECGC tourism window with first loss; RTFF cohort 1 candidate", "ECGC, SMEDCO, CBZ, Stanbic, Women's Microfinance Bank, lodges"],
  ["PA1 Zambia: Livingstone–Kalomo", "Risk-sharing with FNB Zambia and ZANACO for order-backed produce supply and guiding; MSMED matching grants", "FNB Zambia, ZANACO, ZCGS, MSMED, CEEC, hotels and DMCs"],
  ["PA2 Botswana: Okavango–Maun", "Anchor-supplier package (food, laundry), craft materials finance, BOSRIA window; women's mokoro asset loans", "CEDA, NDB, NASRIA/BOSRIA, Stanbic, Youth Development Fund, LEA, operators"],
  ["Zambezi Region (phased)", "NASRIA 80/20 women and youth tier with DBN For Her and NYDF, about 2027–28", "NASRIA, DBN, NYDF, CCFN, conservancies"],
  ["Angola (readiness)", "Grant-funded supply pilot for the safari camp, poultry first", "BDA, FGC, INAPEM, ANAGERO"],
], { y: 1.45, colW: [2.8, 5.3, 4.0], fontSize: 17 });

// C
sec("C. How it will be delivered");
s = H.add("SECTION");
s.addText("C", { placeholder: "num" });
s.addText("How it will be delivered", { placeholder: "title" });
s.addText("Roadmap, measurement and risks", { placeholder: "sub" });

s = content("Roadmap: November 2026 to December 2028", "Two full tourism seasons so low-season repayment is observed twice. The extension to mid-2029 (Decision 6) is what allows the second low season to be observed before the final review.");
fig(s, "fig7_roadmap_bal.png", { x: 0.6, y: 1.3, maxW: 12.1, maxH: 5.6, alt: "Indicative roadmap for Output 1.2" });

s = content("Measuring results: outputs, outcomes and impact", "One measurement system built on the 18 GM1-D5 indicators. Output 1.2 adds 23 indicators; the RTFF adds 32 for the pilot, partner readiness, handover and roll-out. Outputs are kept separate from impact, with a youth and gender lens.");
card(s, { x: 0.6, y: 1.45, w: 3.9, h: 2.7, num: 1, head: "Outputs", body: ["Mechanisms established with partners", "Loans, grants and sessions, by sex and age", "Supply MOUs signed"], size: 15 });
card(s, { x: 4.72, y: 1.45, w: 3.9, h: 2.7, num: 2, head: "Outcomes", body: ["Share obtaining finance (ref. 20%)", "Repayment by season (PAR30 below 15%)", "Days for anchors to pay suppliers"], size: 15, color: C.accent2 });
card(s, { x: 8.84, y: 1.45, w: 3.9, h: 2.7, num: 3, head: "Impact", body: ["Revenue and jobs, by sex and age", "Finance leveraged per euro (at least 1:1)", "Lenders continuing with less support"], size: 15, color: C.accent3 });
table(s, ["Decision point", "Timing", "Test"], [
  ["Gate 1", "Q1 2028", "Stop or adjust a product if PAR30 exceeds 15% or uptake is below half of target"],
  ["RTFF future", "Q4 2028", "Form, host, capital and national channels agreed with the KAZA Secretariat"],
  ["Gate 2", "Q4 2028", "Continue, adjust or hand over: repayment by season, 60% women and youth, lenders continuing"],
], { y: 4.4, colW: [2.0, 1.6, 8.5], fontSize: 15 });

s = content("Main risks", "The risks the Committee can most influence are partner commitment, the timeframe and the Botswana route; each links to a decision.");
table(s, ["Risk", "Mitigation", "Linked decision"], [
  ["Partner interest does not turn into commitment", "Term-sheet talks now; first loss and fee support; more than one candidate per role", "5, 7"],
  ["Project ends before two seasons are observed", "Extension to mid-2029; front-load cohort 1; agree handover before Q4 2028", "6"],
  ["No Botswana RTFF route and Route B not resourced", "Map national alternatives now; resource Route B early", "3"],
  ["Thin cohort 1 pipeline of coached, buyer-linked firms", "Open call through associations and connectors; Lot 2 grantees as a second round", "4"],
  ["Low-season default; currency and exchange control", "Seasonal schedules and grace; lend in the currency of revenue; loss reserve", "5"],
  ["Inconsistent targeting across instruments", "One youth band and one women-led test across grants, RTFF and M&E", "2"],
], { y: 1.45, colW: [4.2, 6.3, 1.6], fontSize: 17 });

// D
sec("D. Decisions");
s = H.add("SECTION");
s.addText("D", { placeholder: "num" });
s.addText("Decisions", { placeholder: "title" });
s.addText("Seven decisions that move Output 1.2 from design to agreements", { placeholder: "sub" });

s = content("Decisions 1–4", "Each decision has a one-page sheet in the summary pack with background, options, implications and next steps.");
table(s, ["#", "Decision", "Recommendation", "Why now"], [
  ["1", "Intervention areas", "PA1 and PA2 as delivery cores; Zambezi Region as a third area only if resourced; Angola on a readiness-first track", "Output 1.2 foresees three areas; the programme plans two. Calls and agreements need a confirmed geography"],
  ["2", "Youth band and women-led test", "One youth band of 18–35 and a majority ownership or decision-making test, across grants, the RTFF and M&E", "RTFF uses 18–30; national bands run to 45. Must be fixed before cohort 1 selection"],
  ["3", "RTFF Botswana route", "Ask the TUI Care Foundation and the KAZA Secretariat to confirm Route A by Q1 2027; resource Route B (national lenders) now in any case", "PA2 cannot start season one without a finance route"],
  ["4", "Grant-facility envelope and lot split", "Confirm the envelope; about 40% of value to Lot 1 and 60% to Lot 2; 60–70% to cohort 1 chains", "The first Lot 1 window is planned for the 2027 low season"],
], { y: 1.45, colW: [0.5, 2.3, 5.2, 4.1], fontSize: 17 });

s = content("Decisions 5–7", "Decision 5 is the main design gap: without first loss, lenders have little reason to change terms.");
table(s, ["#", "Decision", "Recommendation", "Why now"], [
  ["5", "First loss and guarantee fees under 1.2.3", "Allow first loss of 10–15% (20% for women- and youth-led or first-cycle portfolios), about EUR 75,000–225,000 per area pilot, tapering to zero over three seasons; cover guarantee fees (2–5%) in the first cycle", "Lenders and guarantors will not adapt products without risk-sharing; term sheets need a figure"],
  ["6", "Project extension to mid-2029", "Request the extension now rather than at the planned Q2 2028 milestone", "Without it, the second low season is not observed before the final review"],
  ["7", "Term-sheet talks and decision gates", "Mandate talks with ECGC and SMEDCO, FNB Zambia and ZANACO, CEDA, NDB and BOSRIA, NASRIA and DBN, and two anchors per area; endorse the Gate 1, RTFF future and Gate 2 criteria", "Agreements must be signed by May 2027 for season one"],
], { y: 1.45, colW: [0.5, 2.3, 5.5, 3.8], fontSize: 17 });

s = content("After the decisions: the next 90 days", "Who does what once the Committee has decided. Owners are proposals for GIZ to confirm.");
const nx = [
  ["Record decisions", "Decisions on areas, youth band, women-led test and the Botswana route recorded and communicated to partners", "GIZ; KAZA Secretariat"],
  ["Open talks", "Term-sheet talks with shortlisted lenders, guarantors and two anchors per area", "GIZ Output 1.2"],
  ["Agree RTFF terms", "Selection criteria, referral protocol, seasonal schedules and key indicators with TUI Care Foundation and SIGMA", "GIZ; TUI; SIGMA"],
  ["Commission tools", "Readiness diagnostic, supply MOU template, intake baseline and grant manual", "GIZ; SIGMA"],
  ["Launch platforms", "First platform sessions in PA1 and PA2 for the 2026–27 low season", "Lead BSOs"],
];
nx.forEach(([h, b, o], i) => {
  const x = 0.6 + i * 2.46;
  card(s, { x, y: 1.5, w: 2.3, h: 4.5, num: i + 1, head: h, body: b, size: 14, headSize: 15, color: [C.accent1, C.accent2, C.accent3, C.accent4, C.accent5][i] });
  T(s, o, { x: x + 0.2, y: 5.4, w: 1.95, h: 0.5, fontSize: 12, bold: true, color: C.accent3 });
});

s = H.add("CLOSING");
s.addText("Thank you", { placeholder: "title" });
s.addText([
  { text: "Summary pack and decision sheets: F6-D11 (accompanying document)", options: { breakLine: true } },
  { text: "Full report: F6-D9 Consolidated Synthesis Report (draft for validation)", options: { breakLine: true } },
  { text: "Readiness pack and handover documentation: F6-D12", options: {} },
], { placeholder: "body" });

finish(pres, process.argv[2] || "F6-D11.pptx");
