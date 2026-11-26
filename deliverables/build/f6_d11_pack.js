// F6-D11: Summary pack and decision sheets for the Oversight Committee
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, H2, H3, B, N, table, fig, SRC, field, pageBreak } = K;

// One decision sheet
const sheet = (n, title, { decision, background, options, rec, implications, evidence, next }) => [
  H2(`Decision ${n}: ${title}`),
  ...table(null, ["Element", "Content"], [2000, 7746], [
    ["Decision sought", decision],
    ["Background", background],
    ["Options", options.join("\n")],
    ["Recommendation", rec],
    ["Implications", implications],
    ["Evidence", evidence],
    ["Next steps if agreed", next],
  ]),
];

const children = [
  H1("1. Purpose of this pack"),
  P("F6-D11 is the summary pack that brings the Output 1.2 recommendations to the Oversight Committee, presented together with the Macro Diagnostic, the destination Micro Diagnostics and the Roundtables, so that the Committee can take the decisions Output 1.2 needs to move from design to agreements. It accompanies the slide deck **F6-D11 Output 1.2 Summary Pack for the Oversight Committee** (22 slides with speaker notes) and draws on the F6-D9 Consolidated Synthesis Report, to which readers are referred for evidence and detail."),
  P("The pack has four parts: the joint evidence from the four workstreams (Section 2), what Output 1.2 proposes (Section 3), how it will be delivered and measured (Section 4) and seven decision sheets (Section 5), followed by a draft decision record (Section 6). Items for noting are in Section 7."),
  ...table("Decisions requested from the Oversight Committee", ["#", "Decision", "Recommendation in brief"], [500, 3300, 5946], [
    ["1", "Intervention areas for Output 1.2", "PA1 and PA2 as delivery cores; Zambezi Region only if resourced; Angola readiness-first"],
    ["2", "Youth band and women-led test", "18–35 and a majority ownership or decision-making test, across all instruments"],
    ["3", "Botswana route for the RTFF", "Confirm Route A by Q1 2027; resource Route B (national lenders) now in any case"],
    ["4", "Grant-facility envelope and lot split", "Confirm envelope; about 40% Lot 1 and 60% Lot 2 by value"],
    ["5", "First loss and guarantee fees under Activity 1.2.3", "Allow 10–15% first loss (20% for women- and youth-led) and first-cycle guarantee fees"],
    ["6", "Project extension to mid-2029", "Request it now"],
    ["7", "Term-sheet talks and decision gates", "Mandate talks with shortlisted partners; endorse the gate criteria"],
  ]),

  H1("2. What we know: the joint evidence"),
  P("Four workstreams have produced evidence since September 2026. Each narrowed the question: the Macro Diagnostic set the priority areas and value chains; the Regional Roundtable tested them with Partner States; the Micro Diagnostics took them to destination level; and the November working sessions heard MSMEs, buyers and associations. Table 2 sets out what each found and what it means for Output 1.2."),
  ...table("What each workstream found and what it means for Output 1.2", ["Workstream", "Main findings", "Implication for Output 1.2"], [2100, 4146, 3500], [
    ["Macro Diagnostic (SIGMA, Oct 2026)", "KAZA already has buyers, lenders, conservation structures and BSOs; the constraint is weak connection between them. Two priority areas and a set of priority value chains. MSME survey of 106 enterprises: 82 name finance as a top-three challenge, 54 have never applied, a buyer arrangement triples the chance of finance (28% against 8%)", "Work through existing institutions rather than create a new facility; make connection (Activity 1.2.1) the first activity; organize by value chain"],
    ["Regional Roundtable, Maun (22–24 Sep 2026)", "Priority areas and value chains tested; the TUI Care Foundation presented the RTFF; a Finance Lab examined it. Participants stressed involving communities and traditional leaders", "RTFF treated as one financing option to adapt (seasonality, Tier 1 share, currency, in-country recovery); traditional authorities as an outreach and eligibility channel"],
    ["Micro Diagnostics (GM3-D10, 5 Nov 2026)", "PA1 Hwange–Victoria Falls–Livingstone: established, guiding- and transport-heavy, 42% hold a contract. PA2 Okavango–Maun: smaller, more informal, 48% women-led, crafts the largest group, 18% hold a contract. 20% have obtained finance in both. About 150 MSMEs to be coached to 2028", "Two delivery cores with different designs: cost and structure in PA1, access in PA2; cohort 1 drawn from coached, buyer-linked enterprises"],
    ["Destination Roundtables (Victoria Falls 10 Nov; Maun 12 Nov)", "Victoria Falls: bank rates near 28%, milestone tranches, seasonal repayment, association guarantees, buyer-deducted repayment, coaching first. Maun: a route for unregistered groups, local language and paper forms, cash and mobile-money repayment, an end to unpaid consignment", "Seasonal and sales-linked repayment as standard; grants conditional on training; delivery through associations, connectors and the kgotla"],
    ["Output 1.2 finance studies (F1-D4 to F5-D8)", "Finance is a fit, readiness and risk problem, not a capital shortage. Capacity gaps in records, compliance and management are part of the access-to-finance barrier. Every state has institutions to build on; Zambia and Zimbabwe are ready to pilot", "One graduation pathway across the three activities; risk-sharing with national lenders and guarantors; coaching alongside finance"],
  ]),
  ...fig("fig3_destinations_bal.png", "Finance-relevant profile of the two priority areas (November 2026 survey update; self-selected, indicative)", 600),

  H1("3. What Output 1.2 proposes"),
  P("The three Output 1.2 activities are designed as one graduation pathway along readiness tiers 0 to 3, underpinned by the Activity 1.1.1 coaching. Activity 1.2.1 connects MSMEs, lenders and anchor buyers and produces the pipeline; Activity 1.2.2 prepares and de-risks enterprises with grants that pay for what a loan cannot; Activity 1.2.3 finances them through adapted products of institutions that will remain after the project. Figure 2 shows the framework."),
  ...fig("fig4_framework_bal.png", "Output 1.2 strategic framework: three activities on one readiness pathway", 620),
  P("Table 3 summarizes the main recommendation under each activity. The RTFF is one of several financing options under Activity 1.2.3, alongside national guarantee windows, order-backed and asset finance and community finance."),
  ...table("Main recommendations by activity", ["Activity", "Recommendation"], [2200, 7546], [
    ["1.2.1 Dialogue platforms and matchmaking", "One finance and market-linkage platform per delivery core, quarterly and timed to the season, convened through associations and connectors; lender clinics, women-only and youth-only sessions, deal days and anchor roundtables leading to a standard supply MOU; a learning track for lenders on tourism literacy, extended ESG and nature-positive practice; one readiness diagnostic and a tracked referral pipeline"],
    ["1.2.2 Grant facility", "Lot 1 up to EUR 10,000 (10–20% contribution, largely in kind) for Tier 0–1; Lot 2 EUR 10,000–40,000 (30–50%, may be loan-financed) for Tier 2 or Tier 1 with a buyer, with a conversion clause into the borrower's contribution or collateral; conditional on training; at least 60% to women- or youth-led enterprises; grant managers separate from lenders"],
    ["1.2.3 Financing mechanisms", "Per area, one lender, one guarantor and two anchors piloting over two seasons: seasonal loans under guarantee windows with first loss; order-backed supply chain finance; asset and lease-to-own finance; community guarantee pools and revolving funds; association guarantees with buyer-deducted repayment; the RTFF with seasonal schedules, a larger Tier 1 share, a loss reserve and in-country recovery. Bonds deferred"],
  ]),

  H1("4. How it will be delivered and measured"),
  P("The roadmap runs from November 2026 to December 2028 in five phases: validation and set-up; design and partnering; season one; season two and review; and handover to national institutions and the KAZA Secretariat. Piloting over two full tourism seasons lets low-season repayment be observed twice; without the extension to mid-2029 the second low season falls after the final review (Figure 3)."),
  ...fig("fig7_roadmap_bal.png", "Indicative roadmap for Output 1.2, November 2026 to December 2028, with the extension sought to mid-2029", 640),
  P("Results are measured through one system built on the 18 GM1-D5 indicators. Output 1.2 adds 23 indicators and the RTFF 32 more for the pilot, partner readiness, handover and roll-out. Outputs (mechanisms established, loans and grants made) are reported separately from outcomes (share obtaining finance, repayment by season, payment days) and impact (revenue, jobs and lenders continuing without concessional support), all disaggregated by sex, age and disability. Three decision points structure the pilot (Table 4)."),
  ...table("Decision points in the roadmap", ["Decision point", "Timing", "What is decided", "Main test"], [1500, 1300, 3200, 3746], [
    ["Gate 1", "Q1 2028", "Continue, adjust or stop each product", "PAR30 at or below 15%; uptake at least half of target"],
    ["RTFF future", "Q4 2028", "Form, host, capital and national channels of the RTFF", "Capital preserved; legal routes and national channels in place"],
    ["Gate 2", "Q4 2028", "Continue, adjust or hand over; taper concessional support", "Repayment by season; at least 60% to women and youth; lenders continuing"],
  ]),

  pageBreak(),
  H1("5. Decision sheets"),
  P("Each sheet sets out the decision sought, its background, the options, the recommendation, its implications, the evidence and what follows if it is agreed."),
  ...sheet(1, "Intervention areas for Output 1.2", {
    decision: "Confirm the geography in which Output 1.2 will run platforms, grant calls and finance pilots.",
    background: "The Output 1.2 activity description refers to three intervention areas. The programme now plans coaching for about 150 MSMEs across two priority areas. Namibia's Zambezi Region has strong conservancies and a NASRIA women and youth guarantee proposal but little reach of national instruments; Angola is mostly unbanked with one anchor camp.",
    options: ["A. Two delivery cores only (PA1 and PA2).", "B. PA1 and PA2 as delivery cores; Zambezi Region as a third area only if resourced; Angola on a readiness-first track (Lot 1 grants, technical assistance and group savings).", "C. Three full intervention areas from the start."],
    rec: "Option B.",
    implications: "Keeps the Output 1.2 commitment to three areas open without spreading resources thin. Zambezi Region dialogues could start in 2027 with a second cohort in 2027–28 if resourced.",
    evidence: "F6-D9 §3.3 and §4.8; Macro Diagnostic; MiD1–2.",
    next: "GIZ records the geography in the Output 1.2 workplan; lead BSOs confirmed per area; Zambezi Region resourcing decided at the next Committee sitting.",
  }),
  ...sheet(2, "Youth band and women-led test", {
    decision: "Adopt one youth age band and one test of women-led status across the grant facility, the RTFF and the M&E framework.",
    background: "The programme uses 18–35; the RTFF uses 18–30; national youth bands run from 15 to 45; NASRIA reports youth as 40 or under. Women-led status is defined differently across instruments. Inconsistent definitions would make targets (at least 60% to women- or youth-led enterprises) impossible to compare.",
    options: ["A. 18–35 and a majority ownership or decision-making test, across all instruments.", "B. Leave each instrument to its own definition and map them in reporting."],
    rec: "Option A, with the exact year of birth recorded so that results can be re-cut to national bands.",
    implications: "The TUI Care Foundation would align RTFF milestones before cohort 1 selection.",
    evidence: "F6-D9 Table 5 and §6.1; RTFF design.",
    next: "GIZ informs the TUI Care Foundation and SIGMA; definitions written into the grant manual, the RTFF referral protocol and the intake baseline.",
  }),
  ...sheet(3, "Botswana route for the RTFF", {
    decision: "Decide how Okavango–Maun (PA2) enterprises will be financed in season one.",
    background: "The RTFF treats the Victoria Falls–Livingstone corridor as the strong cohort 1 candidate. In Botswana it is conditional on Route A, an RTFF Botswana phase, which depends on the TUI Care Foundation's arrangements (licensing, exchange control, in-country administration). Failing that, Route B offers coaching and market access with referral to national lenders.",
    options: ["A. Wait for Route A before starting finance in PA2.", "B. Route B only: CEDA, NDB, BOSRIA-backed lenders, microfinance and the Youth Development Fund.", "C. Resource Route B now and add Route A if the TUI Care Foundation confirms it by Q1 2027."],
    rec: "Option C.",
    implications: "PA2 can start season one regardless of the RTFF; BOSRIA, CEDA and NDB would be briefed jointly, building on BOSRIA rather than designing a new scheme.",
    evidence: "F6-D9 §2.5, §5.3 and Table 19; MiD2; RT-MN.",
    next: "GIZ and the KAZA Secretariat write to the TUI Care Foundation; term-sheet talks with CEDA, NDB and BOSRIA (Decision 7).",
  }),
  ...sheet(4, "Grant-facility envelope and lot split", {
    decision: "Confirm the Activity 1.2.2 envelope and its split between Lot 1 and Lot 2 and between value chains.",
    background: "The two lots in the Output 1.2 design are kept: Lot 1 up to EUR 10,000 with up to 20% contribution; Lot 2 EUR 10,000–40,000 with up to 50%. The budget envelope was not available to the study.",
    options: ["A. About 40% of value to Lot 1 and 60% to Lot 2; 60–70% to cohort 1 chains, 15–20% to crafts and conservation, 10–20% to second-wave chains and the phased pathway.", "B. A different split set by GIZ against the confirmed envelope."],
    rec: "Option A, applied to the envelope GIZ confirms; Lot 2 sized so that 30–60 grantees can enter the Activity 1.2.3 pilots.",
    implications: "The first Lot 1 window opens in the 2027 low season; grant managers must be contracted by April 2027.",
    evidence: "F6-D9 §5.2 and Table 14.",
    next: "GIZ confirms the envelope; grant manual and competition package drafted; grant managers procured.",
  }),
  ...sheet(5, "First loss and guarantee fees under Activity 1.2.3", {
    decision: "Confirm that Activity 1.2.3 budget lines can finance first-loss cover and guarantee fees.",
    background: "Lenders and guarantors consulted will not adapt collateral and repayment terms for tourism MSMEs without risk-sharing. The proposed first loss is 10–15% of portfolio principal losses (20% for women- and youth-led or first-cycle Tier 1 portfolios), sitting beneath national guarantee cover. On EUR 0.5–1.5 million of new lending per priority-area pilot this implies about EUR 75,000–225,000 per pilot, tapering to zero over three seasons. Guarantee fees (2–5%, e.g. ECGC) would be covered in the first cycle.",
    options: ["A. Allow first loss and fees under 1.2.3 as proposed.", "B. Fees only, no first loss.", "C. Neither; rely on grants and the RTFF."],
    rec: "Option A. If budget lines do not allow it, this is the main design gap to resolve before term sheets.",
    implications: "Unused balances roll into the next cycle or convert to a loss reserve. Leverage target: at least EUR 1 of finance per euro of grant and first loss.",
    evidence: "F6-D9 §5.3; F4-D7; F5-D8 consultations.",
    next: "GIZ confirms the budget line; first-loss agreement template drafted; figures used in term-sheet talks.",
  }),
  ...sheet(6, "Project extension to mid-2029", {
    decision: "Request the extension of the project from December 2028 to mid-2029.",
    background: "Piloting over two full tourism seasons lets low-season repayment be observed twice. With finance from Q1–Q2 2027, the second low season falls after December 2028. The roadmap places the extension decision at Milestone M9 (Q2 2028).",
    options: ["A. Request the extension now.", "B. Decide at Milestone M9 in Q2 2028.", "C. No extension; Gate 2 taken on one full low season."],
    rec: "Option A.",
    implications: "Allows Gate 2 and the evaluation to rest on two low seasons and gives time for an orderly handover to national institutions and the KAZA Secretariat.",
    evidence: "F6-D9 §7.1 and Table 19; RT-VF.",
    next: "GIZ prepares the request to the funders; roadmap updated once the response is known.",
  }),
  ...sheet(7, "Term-sheet talks and decision-gate criteria", {
    decision: "Mandate term-sheet talks with shortlisted partners and endorse the criteria for Gate 1, the RTFF future decision and Gate 2.",
    background: "No institution has committed to a pilot role. Agreements (risk-sharing, guarantee windows, RTFF referral) must be signed by May 2027 for season one. The decision-gate criteria are set out in the separate Output 1.2 Decision Gates document.",
    options: ["A. Mandate talks now and endorse the criteria.", "B. Mandate talks; endorse criteria at the next sitting.", "C. Defer both."],
    rec: "Option A. Talks with ECGC and SMEDCO; FNB Zambia and ZANACO; CEDA, NDB and BOSRIA; NASRIA and DBN; and two anchors per area.",
    implications: "Talks are non-binding until the Committee approves agreements. The gate criteria give partners clarity on when products continue, change or stop.",
    evidence: "F6-D9 §5.3, Annex A and §7.1; Output 1.2 Decision Gates: Criteria.",
    next: "GIZ opens talks; commitments log reviewed monthly; agreements returned to the Committee for approval.",
  }),

  pageBreak(),
  H1("6. Draft decision record"),
  P("For completion by the Committee secretariat at the sitting."),
  ...table("Decision record", ["#", "Decision", "Agreed / amended / deferred", "Conditions or amendments", "Owner", "By when"], [500, 2600, 1500, 2746, 1200, 1200], [
    ["1", "Intervention areas", "", "", "", ""],
    ["2", "Youth band and women-led test", "", "", "", ""],
    ["3", "RTFF Botswana route", "", "", "", ""],
    ["4", "Grant-facility envelope and lot split", "", "", "", ""],
    ["5", "First loss and guarantee fees", "", "", "", ""],
    ["6", "Extension to mid-2029", "", "", "", ""],
    ["7", "Term-sheet talks and decision gates", "", "", "", ""],
  ], { h: 600 }),
  field("Chair:", 40), field("Date:", 20),

  H1("7. Items for noting"),
  ...B([
    "**Validation status.** The Macro Diagnostic is under review by the KAZA Secretariat before it goes to member states, so member-state comments may come back as a second round. F6-D9 is a draft for validation at the second roundtable (F6-D10).",
    "**RTFF selection criteria, pipeline and indicators.** The TUI Care Foundation's only stated minimum is a formally registered business; GIZ produces the pipeline. A joint TUI Care Foundation, GIZ and SIGMA meeting is to settle selection criteria, the split between enterprises needing funding only and those needing capacity building plus funding, and key indicators for the project and the RTFF, separating outputs from impact with a youth and gender lens.",
    "**Partnerships to be carried by GIZ.** SADC-DFRC (official position on collaboration awaited); OKACOM, where an estimated 40% of active communities overlap with KAZA and the CORB Fund can be a complementary layer under the existing MoU; ITC's Green Value Chain programme in Botswana (division of labour in Maun); and national DFIs and agencies (CEDA, DBN, LEA, SMEDCO) through capacity-building ties that do not disturb the market.",
    "**Handover.** The readiness pack and handover documentation (F6-D12) set out what GIZ and partners take forward, the documents and templates handed over and the roles after handover.",
  ]),
  SRC("Sources: F6-D9 Consolidated Synthesis Report (draft for validation, November 2026) and the reports it synthesizes; Output 1.2 Decision Gates: Criteria; RTFF Pilot, Handover and Roll-out Indicators."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT Output 1.2 · F6-D11 Summary Pack for the Oversight Committee — Draft for Decision",
  cover: {
    title: "Output 1.2 Summary Pack",
    subtitle: "Recommendations for Financing R-NBT MSMEs, Integrated with the Macro Diagnostic, the Destination Micro Diagnostics and the Roundtables, with Decision Sheets for the Oversight Committee",
    code: "F6-D11: Summary Pack for the Oversight Committee",
    codeLine: "To be used with the slide deck ‘F6-D11 Output 1.2 Summary Pack for the Oversight Committee’ and the F6-D9 Consolidated Synthesis Report",
    dateLine: "November 2026 · Committee date to be confirmed",
    status: "DRAFT FOR DECISION",
  },
  children,
});
