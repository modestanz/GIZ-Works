// F6-D11: Summary pack and decision sheets for the Oversight Committee
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, H2, H3, B, N, table, fig, SRC, field, pageBreak } = K;

// One decision sheet
const sheet = (n, title, { decision, background, options, rec, implications, evidence, next }) => [
  ...([3, 5].includes(n) ? [pageBreak()] : []),
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
  P("F6-D11 is the summary pack that brings the Output 1.2 recommendations to the Oversight Committee, presented together with the Macro Diagnostic, the destination Micro Diagnostics and the Roundtables, so that the Committee can take the decisions Output 1.2 needs to move from design to agreements. It accompanies the slide deck **F6-D11 Output 1.2 Summary Pack for the Oversight Committee** (16 slides with speaker notes) and draws on the F6-D9 Consolidated Synthesis Report (draft of 26 November 2026, presented for validation in F6-D10), to which readers are referred for evidence and detail. The pack is designed for an in-person sitting: members receive the decision sheets in print, give their views in turn and record each decision as agreed, amended or deferred before the sitting closes."),
  P("Section 2 sets out how the sitting will run. The pack then has four parts: the joint evidence from the workstreams (Section 3), what Output 1.2 proposes (Section 4), how it will be delivered, measured and sustained (Section 5) and five decision sheets (Section 6), followed by a draft decision record (Section 7). Items for noting are in Section 8."),
  ...table("Decisions requested from the Oversight Committee", ["#", "Decision", "Recommendation in brief"], [500, 3300, 5946], [
    ["1", "Intervention areas for Output 1.2", "PA1 and PA2 as delivery cores; Zambezi Region only if resourced; Angola readiness-first"],
    ["2", "Youth band and women-led test", "18–35 and a majority ownership or decision-making test, across all instruments"],
    ["3", "Grant-facility envelope and lot split", "Confirm envelope; about 40% Lot 1 and 60% Lot 2 by value"],
    ["4", "First loss and guarantee fees under Activity 1.2.3", "Allow 10–15% first loss (20% for women- and youth-led) and first-cycle guarantee fees"],
    ["5", "Term-sheet talks and decision gates", "Mandate talks with shortlisted partners; endorse the gate criteria"],
  ]),
  P("Two items are not among the decisions and are listed for noting in Section 8: the RTFF route in Botswana, where the Chobe–Maun corridor has already been decided; and the project extension to mid-2029, which is a decision for GIZ and the funders outside this assignment."),

  H1("2. How the sitting will run"),
  P("The sitting is held in person and takes about 70 minutes. The evidence and the proposal are kept to about 30 minutes so that most of the time goes to the decisions (Table 2). If time is short, the Chair may take Decisions 1, 2 and 5 first, as they are the most time-critical."),
  ...table("Proposed agenda", ["Time", "Block", "Slides", "Purpose", "Lead"], [1000, 2100, 900, 4146, 1600], [
    ["0:00–0:05", "Purpose and how we decide", "1–3", "The five decisions; the decision procedure agreed with members", "Chair; presenter"],
    ["0:05–0:20", "What we know", "4–7", "Joint evidence from the Macro and Micro Diagnostics, the Roundtables and the finance studies; where each Partner State can start", "Presenter"],
    ["0:20–0:35", "What we propose", "8–12", "One route to finance: connect, prepare, finance; risk-sharing; roadmap and gates; measurement and risks; strategic partners", "Presenter"],
    ["0:35–1:00", "Decisions 1–5", "13–14", "One decision at a time, following the procedure below (about 5 minutes each)", "Chair"],
    ["1:00–1:10", "Read-back and next steps", "15–16", "Decision record read back; first 100 days; close", "Chair; rapporteur"],
  ]),
  H3("Decision procedure"),
  P("Each decision follows the same five steps, so that every delegation is heard and the outcome is unambiguous:"),
  ...N([
    "**Present (about 2 minutes).** The presenter reads the recommendation from the decision sheet and the main reason for it.",
    "**Clarify (about 3 minutes).** Members ask questions of clarification only; GIZ answers programme and budget questions.",
    "**Views (about 1 minute each).** Each Partner State and regional partner gives its view in turn, starting with those most affected by the decision.",
    "**Decide.** The Chair tests for consent. Three outcomes are possible: **agree** (adopted as stated), **amend** (adopted with conditions or changes, recorded word for word) or **defer** (with what the Committee needs, from whom and by when).",
    "**Record.** The rapporteur enters the outcome, any conditions, the owner and the date in the decision record on screen and reads it back.",
  ]),
  P("Consent rather than voting is proposed: a decision stands if no member objects. Where a Partner State cannot agree, the Chair may record the decision with that Partner State’s reservation, or defer it. The procedure is a proposal for the Chair to confirm at the start of the sitting."),
  ...table("Roles at the sitting", ["Role", "Who (proposed)", "Responsibilities"], [1900, 2500, 5346], [
    ["Chair", "Oversight Committee chair", "Agrees the procedure; tests for consent; reads back each decision; decides on time and on deferrals"],
    ["Presenter", "Consultant (MNZ Consult)", "Presents the evidence and recommendations; answers questions on them; takes no part in the decisions"],
    ["Programme lead", "GIZ KAZA R-NBT", "Answers questions on programme scope, budget lines and contracting"],
    ["Regional lead", "KAZA Secretariat", "Responds on the regional layer, the RTFF future decision and coordination with OKACOM"],
    ["Rapporteur", "GIZ or KAZA Secretariat", "Completes the decision record live; keeps the parking lot; circulates the signed record within five working days"],
  ]),
  H3("Materials and room"),
  ...B([
    "**Printed for each member:** the decision sheets (Section 6) and the decision record (Section 7).",
    "**On screen:** the slide deck, with the decision record (slide 16) completed live by the rapporteur.",
    "**Parking lot:** a flip chart for questions on budget, programme scope or detail that cannot be settled at the sitting, answered in writing within two weeks.",
    "**Seating:** delegations seated so that each Partner State and regional partner can be called in turn; interpretation arranged where needed (Portuguese for Angola).",
  ]),

  H1("3. What we know: the joint evidence"),
  P("The Output 1.2 recommendations come from the Financial Landscape Analysis workstream of the Access to Finance assignment (F1-D4 to F5-D8, July to November 2026), informed throughout by SIGMA’s Macro Diagnostic, which set the priority areas and value chains, and the destination Micro Diagnostics, which took them to Hwange–Victoria Falls–Livingstone and Okavango–Maun. The roundtables documented in F5-D8 tested the findings with Partner States in Maun in September and with MSMEs, buyers and associations in Victoria Falls and Maun in November. Table 4 sets out what each source found and what it means for Output 1.2."),
  ...table("What each source found and what it means for Output 1.2", ["Source", "Main findings", "Implication for Output 1.2"], [2100, 4146, 3500], [
    ["Macro Diagnostic (SIGMA, Oct 2026)", "KAZA already has buyers, lenders, conservation structures and BSOs; the constraint is weak connection between them. Two priority areas and a set of priority value chains. MSME survey of 106 enterprises: 82 name finance as a top-three challenge, 54 have never applied, a buyer arrangement triples the chance of finance (28% against 8%)", "Work through existing institutions rather than create a new facility; make connection (Activity 1.2.1) the first activity; organize by value chain"],
    ["Regional Roundtable, Maun (22–24 Sep 2026)", "Priority areas and value chains tested; the TUI Care Foundation presented the RTFF; a Finance Lab examined it. Participants stressed involving communities and traditional leaders", "RTFF treated as one financing option to adapt (seasonality, Tier 1 share, currency, in-country recovery); traditional authorities as an outreach and eligibility channel"],
    ["Micro Diagnostics (GM3-D10, Nov 2026)", "PA1 Hwange–Victoria Falls–Livingstone (64 respondents): 81% name finance as a top-three challenge, 42% hold a written contract, 36% women-led; guiding and transport dominate. PA2 Okavango–Maun (40): 75% name finance, 18% hold a contract, 48% women-led, crafts the largest group, 62% with turnover below BWP 200,000. 20% have ever obtained finance in both. About 150 MSMEs to be coached to 2028", "Two delivery cores with different designs: cost and structure in PA1, access in PA2; cohort 1 drawn from coached, buyer-linked enterprises"],
    ["Destination working sessions (Victoria Falls 10 Nov; Maun 12 Nov)", "Victoria Falls (19 questionnaires): 17 of 19 would apply for a no-collateral, order-linked loan; 12 of 19 want finance for equipment, vehicles or boats; collateral the main barrier; preferred rates about 3–8% over two to five years against bank rates near 28%; only 6 of 19 sell under a written contract; 13 of 19 put coaching first. Maun (17 questionnaires): training alongside the loan, simple and fast applications, Setswana and paper forms, a route for unregistered groups, deposits of about 50% and payment within one to two weeks; community groups proposed direct payment to producers, a women’s fund and a youth share. No finance provider attended", "Pair order-linked loans with asset finance, starting from simple order forms or trial contracts; seasonal and sales-linked repayment as standard; grants conditional on training; delivery through associations, connectors and the kgotla; a group or grant route for community producers"],
    ["Output 1.2 finance studies (F1-D4 to F5-D8)", "Finance is a fit, readiness and risk problem, not a capital shortage: finance exists in every Partner State, but not on terms these enterprises can use. Capacity gaps in records, compliance and management are part of the access-to-finance barrier. Zambia (4.1) and Zimbabwe (3.9) are ready to pilot; Botswana (3.4) and Namibia (3.2) with adjustments; Angola (1.4) readiness first. Most feasible mechanisms: order-backed supply chain finance, guarantee windows with first loss and seasonal loans; the RTFF as the collateral-free pilot", "One graduation pathway across the three activities; risk-sharing with national lenders and guarantors; coaching alongside finance"],
  ]),
  ...fig("fig3_destinations_bal.png", "Finance-relevant profile of the two priority areas (November 2026 survey update; self-selected, indicative)", 600),

  H1("4. What Output 1.2 proposes"),
  P("The three Output 1.2 activities are designed as one graduation pathway along readiness tiers 0 to 3, underpinned by the Activity 1.1.1 coaching. Activity 1.2.1 connects MSMEs, lenders and anchor buyers and produces the pipeline; Activity 1.2.2 prepares and de-risks enterprises with grants that pay for what a loan cannot; Activity 1.2.3 finances them through adapted products of institutions that will remain after the project. Figure 2 shows the framework."),
  ...fig("fig4_framework_bal.png", "Output 1.2 strategic framework: three activities on one readiness pathway", 620),
  P("Table 5 summarizes the main recommendation under each activity. The RTFF is one of several financing options under Activity 1.2.3, alongside national guarantee windows, order-backed and asset finance and community finance."),
  ...table("Main recommendations by activity", ["Activity", "Recommendation"], [2200, 7546], [
    ["1.2.1 Dialogue platforms and matchmaking", "One finance and market-linkage platform per delivery core, every four months and timed to the season, convened through associations, lodge impact officers and connectors; a supplier directory and sector-specific buyer sessions first; lender clinics, women-only and youth-only sessions, deal days and anchor roundtables leading to a standard supply MOU; a lender learning platform for banks, MFIs, guarantee schemes and DFIs on tourism business literacy, regenerative practice and extended ESG, and reading verified nature-positive practice as collateral, lower risk and better pricing; one readiness diagnostic and a tracked referral pipeline"],
    ["1.2.2 Grant facility", "Lot 1 up to EUR 10,000 (10–20% contribution, largely in kind) for Tier 0–1; Lot 2 EUR 10,000–40,000 (30–50%, may be loan-financed) for Tier 2 or Tier 1 with a buyer, with a conversion clause into the borrower's contribution or collateral; conditional on training; at least 60% to women- or youth-led enterprises; grant managers separate from lenders"],
    ["1.2.3 Financing mechanisms", "Per area, one lender, one guarantor and two anchors piloting over two seasons: seasonal loans under guarantee windows with first loss; order-backed supply chain finance; asset and lease-to-own finance; community guarantee pools and revolving funds; association guarantees with buyer-deducted repayment; the RTFF as the collateral-free pilot for the EUR 1,000–30,000 gap, with three adjustments (a larger Tier 1 share; a loss reserve with lending in the currency of revenue; a route to national lenders and guarantee schemes after the pilot and handover to the KAZA Secretariat). Four blended models for women- and youth-led enterprises; bonds later, as capital for partner banks"],
  ]),

  H1("5. How it will be delivered, measured and sustained"),
  P("The roadmap runs from November 2026 to December 2028 in five phases: validation and set-up; design and partnering; season one; season two and review; and handover to national institutions and the KAZA Secretariat. Piloting over two full tourism seasons lets low-season repayment be observed twice; without the extension to mid-2029 the second low season falls after the final review (Figure 3)."),
  ...fig("fig7_roadmap_bal.png", "Indicative roadmap for Output 1.2, November 2026 to December 2028, with the extension sought to mid-2029", 640),
  P("Results are measured through one system built on the 18 GM1-D5 indicators. Output 1.2 adds 23 indicators and the RTFF 32 more for the pilot, partner readiness, handover and roll-out. Outputs (mechanisms established, loans and grants made) are reported separately from outcomes (share obtaining finance, repayment by season, payment days) and impact (revenue, jobs and lenders continuing without concessional support), all disaggregated by sex, age and disability. Three decision points structure the pilot (Table 6)."),
  ...table("Decision points in the roadmap", ["Decision point", "Timing", "What is decided", "Main test"], [1500, 1300, 3200, 3746], [
    ["Gate 1", "Q1 2028", "Continue, adjust or stop each product", "PAR30 at or below 15%; uptake at least half of target"],
    ["RTFF future", "Q4 2028", "Form, host, capital and national channels of the RTFF", "Capital preserved; legal routes and national channels in place"],
    ["Gate 2", "Q4 2028", "Continue, adjust or hand over; taper concessional support", "Repayment by season; at least 60% to women and youth; lenders continuing"],
  ]),
  P("The RTFF and the other mechanisms will outlast the project only if they have institutional homes, capital after the pilot and partners that keep originating, financing and verifying borrowers. F6-D9 Section 7.6 and Annex D propose four kinds of strategic partnership, none of which needs a new institution (Table 7). They should be formalised in sequence: co-learning agreements and a shared referral register in 2027; co-financing for season two; and a decision with the KAZA Secretariat on the RTFF’s host and national channels by Q4 2028, before Gate 2. The Committee is asked to note them and endorse the start of co-learning (Section 8)."),
  ...table("Strategic partnerships to sustain the RTFF and other mechanisms", ["Kind of partnership", "Partners", "What they bring"], [2300, 3900, 3546], [
    ["Anchoring and long-term capital", "KAZA Conservation Trust Fund (Sustainable Finance Coalition, KAZA Secretariat, WWF-US); TUI Care Foundation", "A home for the RTFF as a programme account after 2028–2029; the TUI Care Foundation carries the facility until it is anchored"],
    ["Co-financing from funders active in KAZA", "EU; Germany (GIZ, KfW, International Climate Initiative); GEF and World Bank; OKACOM CORB Fund; AfDB and African Guarantee Fund", "One layer each: readiness grants, first loss and loss reserves, counter-guarantees or recapitalisation"],
    ["National channels", "NDB, CEDA, DBN, CEEC, SMEDCO, BDA; ECGC, NASRIA and BOSRIA, ZCGS, FGC; banks such as FNB, Stanbic, ZANACO", "Graduation route for RTFF borrowers; in-country monitoring and recovery"],
    ["Pipeline, verification and coordination", "Anchors and their foundations; ITC; WWF and OKACOM programmes; SADC-DFRC; verifiers such as GreenLoop", "Borrower nomination, grants that de-risk loans, one shared referral register, a regional DFI pipeline, baselines and milestone verification"],
  ]),

  pageBreak(),
  H1("6. Decision sheets"),
  P("Each sheet sets out the decision sought, its background, the options, the recommendation, its implications, the evidence and what follows if it is agreed. Section and table references are to the F6-D9 draft of 26 November 2026."),
  ...sheet(1, "Intervention areas for Output 1.2", {
    decision: "Confirm the geography in which Output 1.2 will run platforms, grant calls and finance pilots.",
    background: "The Output 1.2 activity description refers to three intervention areas. The programme now plans coaching for about 150 MSMEs across two priority areas. Namibia's Zambezi Region has strong conservancies and a NASRIA women and youth guarantee proposal but little reach of national instruments; Angola is mostly unbanked with one anchor camp.",
    options: ["A. Two delivery cores only (PA1 and PA2).", "B. PA1 and PA2 as delivery cores; Zambezi Region as a third area only if resourced; Angola on a readiness-first track (Lot 1 grants, technical assistance and group savings).", "C. Three full intervention areas from the start."],
    rec: "Option B.",
    implications: "Keeps the Output 1.2 commitment to three areas open without spreading resources thin. Zambezi Region dialogues could start in 2027 with a second cohort in 2027–28 if resourced.",
    evidence: "F6-D9 §2.3, §3.3, §4.8 and §7.2; Macro Diagnostic; MiD1–2.",
    next: "GIZ records the geography in the Output 1.2 workplan; lead BSOs confirmed per area; Zambezi Region resourcing decided at the next Committee sitting.",
  }),
  ...sheet(2, "Youth band and women-led test", {
    decision: "Adopt one youth age band and one test of women-led status across the grant facility, the RTFF and the M&E framework.",
    background: "The programme uses 18–35; the RTFF uses 18–30; national youth bands run from 15 to 45; NASRIA reports youth as 40 or under. Women-led status is defined differently across instruments. Inconsistent definitions would make targets (at least 60% to women- or youth-led enterprises) impossible to compare.",
    options: ["A. 18–35 and a majority ownership or decision-making test, across all instruments.", "B. Leave each instrument to its own definition and map them in reporting."],
    rec: "Option A, with the exact year of birth recorded so that results can be re-cut to national bands.",
    implications: "The TUI Care Foundation would align RTFF milestones before cohort 1 selection.",
    evidence: "F6-D9 §6.1 and Table 17; RTFF design.",
    next: "GIZ informs the TUI Care Foundation and SIGMA; definitions written into the grant manual, the RTFF referral protocol and the intake baseline.",
  }),
  ...sheet(3, "Grant-facility envelope and lot split", {
    decision: "Confirm the Activity 1.2.2 envelope and its split between Lot 1 and Lot 2 and between value chains.",
    background: "The two lots in the Output 1.2 design are kept: Lot 1 up to EUR 10,000 with up to 20% contribution; Lot 2 EUR 10,000–40,000 with up to 50%. The budget envelope was not available to the study.",
    options: ["A. About 40% of value to Lot 1 and 60% to Lot 2; 60–70% to cohort 1 chains, 15–20% to crafts and conservation, 10–20% to second-wave chains and the phased pathway.", "B. A different split set by GIZ against the confirmed envelope."],
    rec: "Option A, applied to the envelope GIZ confirms; Lot 2 sized so that 30–60 grantees can enter the Activity 1.2.3 pilots.",
    implications: "The first Lot 1 window opens in the 2027 low season; grant managers must be contracted by April 2027.",
    evidence: "F6-D9 §5.2 and Table 14; WS-VF (demand for coaching, grants and assets).",
    next: "GIZ confirms the envelope; grant manual and competition package drafted; grant managers procured.",
  }),
  ...sheet(4, "First loss and guarantee fees under Activity 1.2.3", {
    decision: "Confirm that Activity 1.2.3 budget lines can finance first-loss cover and guarantee fees.",
    background: "Lenders and guarantors consulted will not adapt collateral and repayment terms for tourism MSMEs without risk-sharing. The proposed first loss is 10–15% of portfolio principal losses (20% for women- and youth-led or first-cycle Tier 1 portfolios), sitting beneath national guarantee cover. On EUR 0.5–1.5 million of new lending per priority-area pilot this implies about EUR 75,000–225,000 per pilot, tapering to zero over three seasons. Guarantee fees (2–5%, e.g. ECGC) would be covered in the first cycle.",
    options: ["A. Allow first loss and fees under 1.2.3 as proposed.", "B. Fees only, no first loss.", "C. Neither; rely on grants and the RTFF."],
    rec: "Option A. If budget lines do not allow it, this is the main design gap to resolve before term sheets.",
    implications: "Unused balances roll into the next cycle or convert to a loss reserve. Leverage target: at least EUR 1 of finance per euro of grant and first loss.",
    evidence: "F6-D9 §2.5, §5.3 and Table 15; F4-D7; F5-D8 consultations.",
    next: "GIZ confirms the budget line; first-loss agreement template drafted; figures used in term-sheet talks.",
  }),
  ...sheet(5, "Term-sheet talks and decision-gate criteria", {
    decision: "Mandate term-sheet talks with shortlisted partners and endorse the criteria for Gate 1, the RTFF future decision and Gate 2.",
    background: "No institution has committed to a pilot role. Agreements (risk-sharing, guarantee windows, RTFF referral) must be signed by May 2027 for season one. The decision-gate criteria are set out in the separate Output 1.2 Decision Gates document.",
    options: ["A. Mandate talks now and endorse the criteria.", "B. Mandate talks; endorse criteria at the next sitting.", "C. Defer both."],
    rec: "Option A. Talks with ECGC and SMEDCO; FNB Zambia and ZANACO; CEDA, NDB and BOSRIA; NASRIA and DBN; and two anchors per area.",
    implications: "Talks are non-binding until the Committee approves agreements. The gate criteria give partners clarity on when products continue, change or stop.",
    evidence: "F6-D9 §5.3, Table 16, Annex A (Table 20) and §7.1; Output 1.2 Decision Gates: Criteria.",
    next: "GIZ opens talks; commitments log reviewed monthly; agreements returned to the Committee for approval.",
  }),

  pageBreak(),
  H1("7. Draft decision record"),
  P("Completed live by the rapporteur and read back by the Chair before the sitting closes; the signed record is circulated within five working days. For a deferred decision, record what the Committee needs, from whom and by when."),
  ...table("Decision record", ["#", "Decision", "Agreed / amended / deferred", "Conditions or amendments", "Owner", "By when"], [500, 2600, 1500, 2746, 1200, 1200], [
    ["1", "Intervention areas", "", "", "", ""],
    ["2", "Youth band and women-led test", "", "", "", ""],
    ["3", "Grant-facility envelope and lot split", "", "", "", ""],
    ["4", "First loss and guarantee fees", "", "", "", ""],
    ["5", "Term-sheet talks and decision gates", "", "", "", ""],
  ], { h: 600 }),
  field("Chair:", 40), field("Date:", 20),

  H1("8. Items for noting"),
  ...B([
    "**RTFF route in Botswana: already decided.** The Chobe–Maun corridor has been decided, so the RTFF route in Botswana is not before the Committee. In PA2, CEDA, NDB and BOSRIA remain the national lenders and guarantor for term-sheet talks (Decision 5).",
    "**Project extension to mid-2029: outside this assignment.** The roadmap assumes the extension so that low-season repayment is observed twice before the final review; without it, the second low season falls after December 2028. The request is a decision for GIZ and the funders.",
    "**Validation status.** F6-D9 was presented for validation to GIZ and regional partners, including SADC FANR and the KAZA Secretariat (F6-D10); comments are reflected in a change log. The Macro Diagnostic is under review by the KAZA Secretariat before it goes to member states, so member-state comments may come back as a second round.",
    "**RTFF selection criteria, pipeline and indicators.** The TUI Care Foundation's only stated minimum is a formally registered business; GIZ produces the pipeline. A joint TUI Care Foundation, GIZ and SIGMA meeting is to settle selection criteria, the split between enterprises needing funding only and those needing capacity building plus funding, and key indicators for the project and the RTFF, separating outputs from impact with a youth and gender lens.",
    "**Strategic partnerships (for endorsement).** The partnerships in Section 5 and F6-D9 Section 7.6 and Annex D: start co-learning between the RTFF pilot and the KAZA Conservation Trust Fund design in 2027, with a light letter of intent and the TUI Care Foundation in the conversation; prepare co-financing for season two with funders active in KAZA; follow up SADC-DFRC’s official position, OKACOM (an estimated 40% of active communities overlap with KAZA; CORB Fund under the existing MoU) and ITC’s Green Value Chain programme in Botswana (division of labour in Maun).",
    "**Handover.** The readiness pack and handover documentation (F6-D12) set out what GIZ and partners take forward, the documents and templates handed over and the roles after handover.",
  ]),
  SRC("Sources: F6-D9 Consolidated Synthesis Report (draft of 26 November 2026) and the reports it synthesizes; F6-D10 validation presentation; F6-D12 readiness pack; Output 1.2 Decision Gates: Criteria; RTFF Pilot, Handover and Roll-out Indicators."),
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
