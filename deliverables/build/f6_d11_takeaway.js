// F6-D11 summary pack: take-away version for members and partners (synthesis of the Output 1.2 recommendations)
// Follows the storyline of the F6-D11 deck. Usage: node deliverables/build/f6_d11_takeaway.js out.docx
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, H2, B, table, fig, SRC } = K;

const children = [
  // 1. At a glance
  H1("1. At a glance"),
  P("This take-away summarises the recommendations of the **Financial Landscape Analysis** workstream (studies F1-D4 to F5-D8) for Output 1.2 of the KAZA Regenerative Nature-Based Tourism (R-NBT) programme: **financial mechanisms are established in collaboration with financial institutions to support targeted MSMEs**, with a focus on enterprises led by women, youth and communities near protected areas. It accompanies the presentation to the Oversight Committee (F6-D11), where the Committee is asked to take five decisions that move Output 1.2 from design to agreements in early 2027. Full evidence and detail are in the F6-D9 Consolidated Synthesis Report."),
  ...B([
    "**Finance exists, but not on terms these enterprises can use (F1-D4):** every Partner State has lenders and guarantee schemes to build on, but tourism barely uses them.",
    "**Five barriers block access (F2-D5),** and most enterprises are not yet ready for debt (F3-D6); a buyer raises the chance of finance from 8% to 28%.",
    "**Lenders will not change terms without risk-sharing (F4-D7),** and participants put coaching and buyer links before money (F5-D8).",
    "**One route to finance: connect, prepare, finance.** Dialogue platforms, grants and adapted finance from institutions that stay, piloted over two tourism seasons, with results that trigger finance decisions.",
    "**Public institutions and strategic partners carry it forward:** state business support organisations, tourism authorities and district councils locally; the KAZA Conservation Trust Fund and funders active in KAZA after the pilot.",
  ]),

  // 2. How the evidence was built
  H1("2. How the evidence was built"),
  P("The recommendations come from the **Financial Landscape Analysis** workstream of the Access to Finance assignment (July to November 2026), informed throughout by SIGMA’s **Macro Diagnostic** (priority areas and value chains; survey of 106 MSMEs) and the destination **Micro Diagnostics** (Hwange–Victoria Falls–Livingstone and Okavango–Maun; 141 survey responses). Each study built on the last (Table 1); the findings were consolidated in F6-D9 and presented for validation to GIZ and regional partners, including SADC FANR and the KAZA Secretariat (F6-D10)."),
  ...table("The Financial Landscape Analysis workstream", ["Study", "What it established"], [2200, 7546], [
    ["F1-D4 Financial landscape", "Who lends, guarantees and supports MSMEs in each Partner State, and how ready each is to pilot"],
    ["F2-D5 Barriers and opportunities", "Five barriers: collateral, seasonality, informality and capacity, risk perception, power imbalances in supply chains"],
    ["F3-D6 Investment readiness", "Readiness tiers 0–3: who is ready for which kind of finance; most enterprises are at Tiers 0–1"],
    ["F4-D7 Financing mechanisms", "Which mechanisms fit each priority value chain, and the blended models for women- and youth-led enterprises"],
    ["F5-D8 Roundtables", "Findings tested with Partner States (Maun, September 2026) and with MSMEs, buyers and associations (Victoria Falls and Maun, November 2026)"],
  ]),

  // 3. What the evidence shows
  H1("3. What the Financial Landscape Analysis found"),
  H2("The landscape: finance is misaligned, not absent (F1-D4)"),
  P("Banks in all five Partner States are liquid and present in the hub towns, each Partner State has a development lender or public MSME financier, and four run national credit guarantee schemes. But the finance on offer is built for land collateral, steady monthly income and formal records, while most R-NBT MSMEs are micro or informal, operate on communal or concession land and earn most of their revenue in five peak months. Tourism takes about 4% of Namibia’s guarantee scheme reach and under 10% of Zimbabwe’s."),
  H2("Where each Partner State can start (F1-D4)"),
  P("Zambia (4.1) and Zimbabwe (3.9) are ready to pilot; Botswana (3.4) and Namibia (3.2) are ready with adjustments; Angola (1.4) needs readiness work first. Output 1.2 is therefore proposed to work through two delivery cores, Hwange–Victoria Falls–Livingstone and Okavango–Maun, with Namibia’s Zambezi Region as a third area if resourced and Angola on a readiness-first track. In Botswana, the RTFF’s Chobe–Maun corridor has been decided."),
  ...fig("fig2_readiness_bal.png", "Partner State readiness to pilot an MSME finance mechanism, with the institutions to build on", 600),
  H2("Barriers and readiness (F2-D5, F3-D6)"),
  P("Five barriers block access: collateral, since most enterprises operate on communal or concession land; seasonality, with most revenue in five peak months; informality and capacity; lenders’ perception of risk; and power imbalances in supply chains, such as unwritten orders and late payment. A buyer arrangement raises the chance of obtaining finance from 8% to 28%. Most enterprises are at readiness Tiers 0–1, so gaps in records, compliance and management are part of the finance gap: grants and coaching come before debt for them, and finance first for buyer-linked Tier 2 suppliers."),
  ...fig("fig3_destinations_bal.png", "Finance-relevant profile of the two priority areas, from the Micro Diagnostics survey (November 2026; self-selected, indicative)", 600),
  H2("What lenders need (F4-D7)"),
  P("Lenders and guarantors consulted will not adapt collateral and repayment terms without risk-sharing. The most feasible mechanisms are **order-backed supply chain finance, guarantee windows with a first-loss layer and seasonal loans**; the TUI Care Foundation’s **RTFF** is the collateral-free pilot for the EUR 1,000–30,000 gap; four blended models address collateral for women- and youth-led enterprises."),

  H2("What participants asked for (F5-D8)"),
  ...B([
    "**Victoria Falls (cost and structure):** 17 of 19 respondents would apply for a no-collateral, order-linked loan; 12 of 19 want finance mainly for equipment, vehicles or boats; preferred rates of about 3–8% over two to five years, against bank rates near 28%; only 6 of 19 sell under a written contract; 13 of 19 put coaching first.",
    "**Maun (access):** training alongside the loan; simple, fast applications in Setswana and on paper; a route for unregistered groups; deposits of about 50% and payment within one to two weeks; direct payment to producers, a women’s fund and a youth share.",
  ]),
  // 4. What Output 1.2 proposes
  H1("4. What Output 1.2 proposes: one route to finance"),
  P("The three Output 1.2 activities are one route to finance, not three projects. Enterprises enter at their readiness tier and move up as each step creates the record the next lender needs, supported throughout by Activity 1.1.1 coaching."),
  ...fig("fig4_framework_bal.png", "Output 1.2 strategic framework: connect, prepare, finance on one readiness pathway", 620),
  ...table("The three activities", ["Activity", "What it does"], [2200, 7546], [
    ["1.2.1 Connect: dialogue platforms and matchmaking", "One platform per delivery core every four months, timed to the season; supplier directory and buyer sessions first; lender clinics, women-only and youth-only sessions, deal days and a standard supply MOU with anchors; a lender learning platform on tourism business literacy, regenerative practice and reading nature-positive practice in credit terms"],
    ["1.2.2 Prepare: grant facility", "Lot 1 up to EUR 10,000 for Tier 0–1 (10–20% contribution, largely in kind); Lot 2 EUR 10,000–40,000 for Tier 2 or Tier 1 with a buyer (30–50%, may be loan-financed), convertible into the borrower’s contribution; conditional on training; at least 60% to women- or youth-led enterprises"],
    ["1.2.3 Finance: financing mechanisms", "Per area, one lender, one guarantor and two anchors pilot adapted products over two seasons: guarantee windows with first loss, order-backed and asset finance, community finance and the RTFF with three adjustments (a larger Tier 1 share; a loss reserve and lending in the currency of revenue; a route to national lenders after the pilot)"],
  ]),
  H2("Public institutions as partners in financing and empowering MSMEs"),
  ...table("Public institutions and their roles", ["Partner", "Examples", "Role"], [2300, 3500, 3946], [
    ["State business support organisations", "SMEDCO with ZIDA (Zimbabwe); ZDA and CEEC (Zambia); LEA with CEDA (Botswana); NIPDB (Namibia); INAPEM (Angola)", "Lead the platforms with associations, apply the readiness diagnostic and manage the grants, separately from lending; CEDA, CEEC and SMEDCO also lend to grant graduates"],
    ["National tourism authorities", "ZTA (Zimbabwe); BTO (Botswana)", "License and grade operators, certify practice and link MSMEs to markets; simpler licensing for micro operators eases access to finance"],
    ["District councils", "Chobe District Council; Zimbabwe’s rural district councils", "Support micro enterprises locally through trading licences, market space and outreach to wards and villages"],
  ]),
  H2("Risk-sharing: the figure term sheets need"),
  P("First-loss cover of **10–15% of portfolio losses** (20% for women- and youth-led or first-cycle portfolios) would sit beneath national guarantee cover. On EUR 0.5–1.5 million of new lending per area pilot, this is about **EUR 75,000–225,000 per pilot**, tapering from 15% to zero over three seasons; guarantee fees (2–5%) would be covered in the first cycle. The target is at least **EUR 1 of finance for every euro** of grant and first loss."),

  // 5. Delivery
  H1("5. How it will be delivered and measured"),
  P("Piloting runs over two full tourism seasons so that low-season repayment is observed twice: set-up and design to April 2027, season one to March 2028, season two and review to December 2028, then handover to national institutions and the KAZA Secretariat. The project ends in December 2028; an extension to mid-2029 is being sought by GIZ and the funders."),
  ...fig("fig7_roadmap_bal.png", "Indicative roadmap for Output 1.2, November 2026 to December 2028, with the extension sought to mid-2029", 640),
  H2("What we measure, and what it decides"),
  P("One measurement system covers 18 programme indicators (GM1-D5), plus 23 for Output 1.2 and 32 for the RTFF, all broken down by sex, age (18–35), disability, country, value chain and readiness tier. The results are not only reported; they trigger finance decisions (Table 4). Alongside them, the system tracks outputs (loans and grants; mechanisms and supply MOUs), outcomes (share obtaining finance, survey reference 21%; days for anchors to pay) and impact (revenue and jobs)."),
  ...table("What we measure and what it decides", ["We measure", "It decides"], [4000, 5746], [
    ["Repayment by season (PAR30) and uptake", "Gate 1 (Q1 2028): stop or adjust a product if PAR30 exceeds 15% or uptake is below half of target"],
    ["Verified R-NBT and local-sourcing milestones", "The RTFF interest rate steps down for agreed results"],
    ["Grant milestones", "Grant tranches are released in stages"],
    ["Repayment data over three seasons", "First-loss cover tapers from 15% to zero"],
    ["Leverage of at least 1:1; lenders continuing", "Gate 2 (Q4 2028): continue, adjust or hand over, with concessional support tapering"],
  ], { plainFirst: true }),
  H2("Main risks"),
  ...table("Main risks and how they are managed", ["Risk", "How it is managed"], [3600, 6146], [
    ["Partner interest does not turn into commitment", "Term-sheet talks now; first loss and fee support; more than one candidate per role"],
    ["Low-season default", "Seasonal schedules and grace in agreements; first-loss cover; PAR30 threshold at Gate 1"],
    ["Thin pipeline of coached, buyer-linked enterprises", "Open call through associations and connectors; Lot 2 grantees as a second-round pipeline"],
    ["Inconsistent targeting across instruments", "One youth band and one women-led test across grants, the RTFF and M&E"],
    ["Currency and exchange control", "Lending in the currency of revenue; a loss reserve; registering foreign loans in Zimbabwe"],
    ["Project ends before two seasons are observed", "Extension sought by GIZ and the funders; cohort 1 front-loaded"],
  ]),

  // 6. Partners
  H1("6. Partners to sustain the RTFF beyond the pilot"),
  P("The RTFF and the other mechanisms will outlast the project only if they have institutional homes, capital after the pilot and partners that keep originating, financing and verifying borrowers. None of this needs a new institution; F6-D9 Annex D lists eighteen possible partners."),
  ...table("Strategic partners", ["Kind of partner", "Partners", "What they bring"], [2300, 3800, 3646], [
    ["Anchoring and long-term capital", "KAZA Conservation Trust Fund (Sustainable Finance Coalition, KAZA Secretariat, WWF-US); TUI Care Foundation; KAZA Secretariat", "A home for the RTFF after 2028–2029; the TUI Care Foundation carries it until then"],
    ["Funders active in KAZA", "EU; Germany (GIZ, KfW, International Climate Initiative); GEF and World Bank; OKACOM CORB Fund; AfDB and African Guarantee Fund", "One layer each: readiness grants, first loss, counter-guarantees or recapitalisation"],
    ["National channels", "Development banks and guarantee schemes; banks such as FNB, Stanbic and ZANACO", "Graduation route for RTFF borrowers; in-country monitoring and recovery"],
    ["Pipeline and verification", "Anchors and their foundations; ITC; WWF and OKACOM programmes; SADC-DFRC; verifiers such as GreenLoop", "Borrower nomination, grants that de-risk loans, one referral register, milestone verification"],
  ]),
  P("Sequence: co-learning agreements and one referral register in 2027; co-financing for season two; the RTFF’s host and national channels agreed with the KAZA Secretariat by Q4 2028, before Gate 2."),

  // 7. Decisions
  H1("7. Decisions for the Oversight Committee", { newPage: true }),
  P("The Committee is asked to take five decisions. The last column is for recording the outcome of the sitting."),
  ...table("Decisions sought", ["#", "Decision", "Recommendation", "Outcome"], [450, 2300, 5196, 1800], [
    ["1", "Intervention areas", "PA1 and PA2 as delivery cores; Zambezi Region only if resourced; Angola readiness-first", ""],
    ["2", "Youth band and women-led test", "18–35 and a majority ownership or decision-making test across grants, the RTFF and M&E", ""],
    ["3", "Grant envelope and lot split", "About 40% of value to Lot 1 and 60% to Lot 2; 60–70% to cohort 1 value chains", ""],
    ["4", "First loss and guarantee fees", "Allow 10–15% first loss (20% for women- and youth-led) and first-cycle guarantee fees under Activity 1.2.3", ""],
    ["5", "Term-sheet talks and gates", "Mandate talks with shortlisted lenders, guarantors and two anchors per area; endorse the Gate 1, RTFF future and Gate 2 criteria", ""],
  ], { h: 520 }),
  P("**Not for decision:** the RTFF’s Chobe–Maun corridor in Botswana (already decided) and the project extension to mid-2029 (a decision for GIZ and the funders)."),

  // 8. Next steps
  H1("8. What happens next: the first 100 days"),
  ...table("First 100 days after handover", ["Days", "Actions"], [1600, 8146], [
    ["1–14: take over", "Handover meeting and action log; TUI Care Foundation, GIZ and SIGMA agree RTFF entry criteria and indicators; SADC-DFRC position followed up"],
    ["15–30: validate", "F6-D9 revised after validation; Committee sitting prepared; OKACOM overlap and ITC’s Maun coverage confirmed"],
    ["31–60: decide and open talks", "Committee decisions recorded and sent to partners; term-sheet talks with shortlisted partners; GIZ commissions the readiness diagnostic, supply MOU template, intake baseline and grant manual"],
    ["61–100: prepare season one", "First platform sessions in PA1 and PA2; grant-manager procurement and the Lot 1 call; RTFF referral protocol; intake baselines started; co-learning with the KAZA Conservation Trust Fund"],
  ], { plainFirst: true }),

  // Annex
  H1("Acronyms and further reading", { newPage: true }),
  ...table("Acronyms", ["Acronym", "Meaning"], [1800, 7946], [
    ["BSO", "Business support organisation"],
    ["BTO; ZTA", "Botswana Tourism Organisation; Zimbabwe Tourism Authority"],
    ["CEDA; CEEC; LEA", "Citizen Entrepreneurial Development Agency (Botswana); Citizens Economic Empowerment Commission (Zambia); Local Enterprise Authority (Botswana)"],
    ["DMC", "Destination management company"],
    ["GM1-D5", "Programme baseline indicators (SIGMA)"],
    ["INAPEM; NIPDB", "Institute for Support to Micro, Small and Medium Enterprises (Angola); Namibia Investment Promotion and Development Board"],
    ["MOU", "Memorandum of understanding (here, a standard supply agreement between anchor buyers and MSME suppliers)"],
    ["MSME", "Micro, small and medium enterprise"],
    ["PA1; PA2", "Priority area 1, Hwange–Victoria Falls–Livingstone; priority area 2, Okavango–Maun"],
    ["PAR30", "Portfolio at risk over 30 days: share of loans with repayments more than 30 days late"],
    ["R-NBT", "Regenerative nature-based tourism"],
    ["RTFF", "Regenerative Tourism Finance Facility (TUI Care Foundation)"],
    ["SMEDCO; ZDA; ZIDA", "Small and Medium Enterprises Development Corporation (Zimbabwe); Zambia Development Agency; Zimbabwe Investment and Development Agency"],
  ], { plainFirst: true }),
  P("**Further reading:** F6-D9 Consolidated Synthesis Report (full evidence and recommendations); F6-D11 decision sheets (options and implications for each decision); F6-D12 readiness pack (key decisions, partners, first 100 days, risks); and the studies F1-D4 to F5-D8."),
  SRC("Sources: F6-D9 Consolidated Synthesis Report (draft of 26 November 2026) and the studies it synthesises; F6-D11 Oversight Committee deck; F6-D12 readiness pack."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT Output 1.2 · F6-D11 Summary Pack — Take-away",
  cover: {
    title: "From Evidence to Decisions: Financing R-NBT MSMEs in KAZA",
    subtitle: "Summary of Output 1.2 Recommendations, Presented with the Macro and Micro Diagnostics and the Roundtables, for the Oversight Committee",
    code: "F6-D11: Summary Pack (Take-away)",
    codeLine: "To be read with the F6-D11 presentation and the F6-D9 Consolidated Synthesis Report",
    dateLine: "November 2026",
    status: "TAKE-AWAY · DRAFT",
  },
  children,
});
