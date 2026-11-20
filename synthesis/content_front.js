// Executive summary, Chapter 1 (Introduction) and Chapter 2 (What the evidence shows)
// Source codes used in the text: F1 = F1-D4 Financial Landscape Analysis; F2 = F2-D5 Barriers and
// Opportunities Report; F3 = F3-D6 Investment Readiness and Enterprise Strengthening Assessment;
// F4 = F4-D7 Financing Mechanisms Assessment; F5 = F5-D8 Pre-Engagement Report and Synthesis;
// MD = KAZA R-NBT Macro Diagnostic Findings Report (SIGMA International, October 2026).

const execSummary = [
  { h: 1, t: "Executive Summary", numbered: false },
  { p: "This report consolidates the five finance deliverables of the KAZA Regenerative Nature-Based Tourism (R-NBT) study (F1-D4 to F5-D8), the two GM3-D10 destination micro-diagnostics and the finance segment reports of the November 2026 working sessions in Victoria Falls and Maun into one strategic framework for **Output 1.2: financial mechanisms are established in collaboration with financial institutions to support targeted MSMEs**. It gives actionable recommendations for piloting financial mechanisms under the three Output 1.2 activities: **1.2.1** dialogue platforms between MSMEs, associations, financial institutions and large tourism companies; **1.2.2** grant facilities; and **1.2.3** support to new and existing financing mechanisms. It organizes the recommendations by the priority value chains of the October 2026 Macro Diagnostic, contributes indicators and baseline data to the M&E framework, and sets out a phased implementation roadmap." },

  { h: 3, t: "Core finding" },
  { p: "Finance for R-NBT MSMEs in KAZA is a **fit, readiness and risk problem, not a capital shortage**. Banks are liquid and present in the hub towns, four Partner States run national credit guarantee schemes, and anchor lodges want to buy locally. But the finance on offer is built for land collateral, steady monthly income and formal records, while most tourism MSMEs are micro, informal or semi-formal, operate on communal or concession land and earn most of their revenue in five peak months. Of 106 surveyed MSMEs, 82 name finance as a top-three challenge, yet 54 have never applied; tourism takes only about 4% of Namibia’s guarantee scheme reach and under 10% of Zimbabwe’s. The strongest single predictor of finance is a buyer: enterprises with a buyer arrangement were three and a half times as likely to have obtained external finance (28% against 8%)." },

  { h: 3, t: "What the November working sessions added" },
  { b: [
    "**The diagnosis holds in both priority areas, with different profiles.** In Hwange–Victoria Falls–Livingstone (64 survey respondents) 81% name finance as a top-three challenge, 42% hold a written contract and 36% are women-led; in Okavango–Maun (40 respondents) 75% name finance, only 18% hold a contract, 48% are women-led, crafts are the largest activity and 62% report turnover below BWP 200,000. In both, only 20% have ever obtained finance.",
    "**Victoria Falls participants prioritized cost and structure:** about 28% at banks against 0–8% proposed, milestone tranches, seasonal repayment, association guarantees, buyer-deducted repayment and 6–12 months of coaching before lending.",
    "**Maun participants prioritized access over cost:** a route for unregistered groups (a kgosi’s letter), Setswana and paper forms, mobile-money and cash repayment linked to sales, coaching before and after the loan, and an end to unpaid consignment for crafts.",
    "**The RTFF as now presented** is a revolving loan pilot for about 50 established businesses (not start-ups), at about 8–10% (not yet set) with step-downs, over 18–24 months, on ‘social collateral’, from the first quarter of 2027; Victoria Falls–Livingstone is the strong cohort 1 candidate and a Botswana route is conditional. **The project ends in December 2028**, with an extension to mid-2029 sought.",
  ] },

  { h: 3, t: "Strategic framework" },
  { p: "The three activities are designed as one graduation pathway, not three separate projects. **Activity 1.2.1 connects** MSMEs, lenders and anchor buyers and produces the pipeline; **Activity 1.2.2 prepares and de-risks** enterprises with grants that pay for what a loan cannot (readiness, compliance, equipment, the borrower’s contribution); and **Activity 1.2.3 finances** them through adapted products of existing institutions. Enterprises enter at their readiness tier (0 pre-enterprise to 3 investment-ready) and move up as each step creates the record the next lender needs." },

  { h: 3, t: "Recommendations by activity" },
  { p: "**Activity 1.2.1: Dialogue platforms and matchmaking.**" },
  { b: [
    "Run one finance and market-linkage platform per delivery core (Livingstone–Victoria Falls with Hwange; Maun with the Delta community areas; the Zambezi Region if resourced), convened through associations, lodge impact officers and connector organizations, on a quarterly cycle timed to the tourism season. Start with a low-cost supplier directory and sector-specific buyer sessions rather than general marketplaces, which struggled in the past.",
    "Use five formats: common-understanding workshops on R-NBT and bankability; lender clinics at savings-group and conservancy meetings; women-only and youth-only sessions; quarterly deal days with one-page pipeline profiles; and anchor procurement roundtables that lead to a standard supply MOU (written orders, payment within 30 days, notice before termination).",
    "Brief MSMEs and lenders on the mechanisms that already exist (ECGC, NASRIA and BOSRIA, CEDA, NDB, the FNB Zambia scored-credit product, CEEC, MSMED grants) and turn dialogue into product co-design labs that feed Activity 1.2.3.",
    "Track every referral through a shared dashboard with coded rejection reasons, by sex, age and value chain, so that perceived risk can be replaced by measured risk.",
  ] },
  { p: "**Activity 1.2.2: Grant facility.**" },
  { b: [
    "Keep the two lots in the Output 1.2 design and calibrate them to readiness: **Lot 1** (up to EUR 10,000) for Tier 0–1 micro, start-up, group and community enterprises, with a 10–20% contribution that may be largely in kind; **Lot 2** (EUR 10,000–40,000) for Tier 2 enterprises, or Tier 1 enterprises with a buyer, with a 30–50% contribution that may be financed by a partner-lender or RTFF loan.",
    "Fund concrete, value-chain-specific improvements (cold storage and poultry housing; safety gear and e-mobility for guides; design-to-brief product lines; laundry and solar equipment; beehive fences) and compliance steps (tax clearance, licensing, certification), released in tranches against milestones and in kind where possible.",
    "Make grants conditional on training, as participants in both sessions asked; give priority to Activity 1.1.1 participants; direct at least 60% of grants by number and value to women- or youth-led enterprises; and accept recognised groups, licence-holders and a kgosi’s letter for unregistered groups, with short applications in local languages and on paper.",
    "Write a conversion clause into every Lot 2 agreement so the grant can serve as the borrower’s contribution, cash collateral or a group-guarantee seed, and contract national grant managers (BSOs or public development banks) separately from lenders.",
  ] },
  { p: "**Activity 1.2.3: Support and strengthen financing mechanisms.**" },
  { b: [
    "Sign, per intervention area, at least one lender, one guarantor and two anchors to pilot adapted products over two tourism seasons, with Lot 2 grantees as the first target group and the pilot opened to non-grantees after the first season.",
    "Of the four mechanism types named in Output 1.2, pilot **loans with improved conditions** (seasonal schedules, low-season grace, orders, invoices and movable assets as security) under guarantee windows with a 10–20% first-loss layer; **revolving funds** capitalized from community revenue and managed by MFIs; and **savings-group and community finance** linked to MFIs through a community guarantee pool. Treat **social and environmental bonds** as a later source of capital for partner banks, not a pilot instrument.",
    "Add the two instruments the evidence rates most feasible: **order-backed supply chain finance** against standard supply MOUs, and **asset and lease-to-own finance** for guides, transport, laundry and solar enterprises.",
    "Test the two de-risking routes participants proposed: **association-backed guarantees** (with ZATO, LTA, LELOGA and Africa’s Eden and an insurer, in Zimbabwe and Zambia) and **repayments deducted by buyers** from supplier invoices; offer **mobile-money and cash repayment** channels.",
    "Pilot the TUI Care Foundation RTFF as the collateral-free, buyer-linked loan for the documented EUR 1,000–30,000 gap, drawing cohort 1 from coached enterprises already supplying lodges, with four adjustments: seasonal schedules in loan agreements, a larger Tier 1 share, a loss reserve with lending in the currency of revenue, and an agreed route to national lenders and guarantee schemes after the pilot. In Botswana, if no RTFF route is confirmed, finance enterprises through CEDA, NDB, BOSRIA-backed lenders, microfinance and the Youth Development Fund.",
  ] },

  { h: 3, t: "By priority value chain" },
  { tbl: {
    caption: "Summary of recommendations by priority value chain",
    head: ["Value chain", "1.2.1 Connect", "1.2.2 Grant", "1.2.3 Finance", "Start"],
    cols: [1750, 1900, 1900, 2526, 950],
    small: true,
    rows: [
      ["Fresh produce, poultry, eggs and fish", "Anchor procurement roundtables; staged localization scorecards", "Lot 1 group grants; Lot 2 cold storage, irrigation, poultry housing", "Order-backed working capital; community guarantee pool; RTFF", "Cohort 1"],
      ["Guiding, activities and cultural experiences", "DMC and lodge listing sessions; youth sessions", "Safety gear, certification, digital bookability", "Lease-to-own with first loss; seasonal grace; forward-booking finance", "Cohort 1"],
      ["Transport, transfers and logistics", "Sub-hire contract clinics with anchors", "Tax clearance, insurance, vehicle deposit (Lot 2)", "Asset finance under ECGC cover; invoice discounting", "Cohort 1"],
      ["Crafts, décor and cultural products to brief", "Design-to-brief challenge with anchors and hotel developers", "Design and sample-order grants; showroom", "PO finance only after a first order", "Market first"],
      ["Laundry, maintenance, mechanics and solar", "Outsourcing dialogues with Okavango operators", "Equipment for Tier 1 youth entrants", "Asset finance against assigned service contracts; RTFF Tier 2", "Cohort 1 (small)"],
      ["Conservation and coexistence services, with honey", "Outcome-funder dialogue (CORB Fund, wildlife credits)", "Beehive fences, corrals, honey certification", "Results-based finance; community revolving funds", "Design now"],
      ["Second wave: building materials, processed foods, waste", "Specification and warranty clinics", "Certification and small infrastructure", "Bridging, PO and service-contract finance", "Second wave"],
    ],
  } },

  { h: 3, t: "M&E framework and baseline" },
  { p: "Output 1.2 should use one measurement system for the baseline, the grant milestones, the RTFF pricing step-downs and the results framework, built on the 18 GM1-D5 baseline indicators already proposed for the programme and recorded at intake (GM3-D11), disaggregated by sex, age (one youth band of 18–35), disability, country, intervention area, value chain and readiness tier. The report proposes 23 Output 1.2 indicators, each linked to a GM1-D5 indicator where one exists, including the share of targeted MSMEs obtaining external finance (survey reference: 21%), finance leveraged per euro of grant and first loss (target at least 1:1), portfolio at risk over 30 days by season (stop-or-adjust threshold 15%), the tourism share of national guarantee portfolios (reference: about 4% in Namibia) and days taken by anchors to pay MSME suppliers (reference: 30–90 days late). The survey (106 responses in the Macro Diagnostic, 141 in the November update) is a reference point, not a baseline: a disaggregated intake baseline, a lender portfolio baseline and an anchor procurement baseline are needed before cohort 1." },

  { h: 3, t: "Roadmap" },
  { p: "The roadmap is fitted to the current project end in December 2028. It runs in five phases: **validation and set-up** (November 2026 to January 2027, including Partner State decisions on 23–27 November 2026); **design and partnering** (February to April 2027, with RTFF cohort 1 starting in the first half of 2027 on the TUI Care Foundation’s timetable); **season one** (April 2027 to March 2028); **season two and review** (April to December 2028); and **handover** to national institutions and the KAZA Secretariat from the last quarter of 2028. Without the extension to mid-2029, the second low season would not be observed before the final review." },

  { h: 3, t: "Decisions needed now" },
  { b: [
    "Confirm the intervention areas for Output 1.2 (the programme now plans two priority areas; Output 1.2 foresees three), whether the RTFF will have a Botswana route, and the project extension to mid-2029.",
    "Adopt one youth band (18–35) and one women-led test (majority ownership or decision-making) across the grant facility, the RTFF and the M&E framework.",
    "Confirm the grant-facility envelope, the lot split and whether first loss and guarantee fees can sit under Activity 1.2.3, and mandate term-sheet talks with the shortlisted partners.",
  ] },
];

const ch1 = [
  { h: 1, t: "Introduction" },
  { h: 2, t: "Purpose and scope" },
  { p: "The KAZA Joint Action on Regenerative Nature-Based Tourism, funded by the European Union and Germany, supports MSMEs led by women, youth and communities living near protected areas in the five KAZA Partner States: Angola, Botswana, Namibia, Zambia and Zimbabwe. Output 1.2 seeks to establish financial mechanisms, in collaboration with financial institutions, that support these enterprises. This report answers three questions set for the consolidated synthesis:" },
  { b: [
    "What strategic framework, organized by priority value chain, should guide the piloting of financial mechanisms under Activities 1.2.1, 1.2.2 and 1.2.3, and what should each activity do?",
    "Which indicators and baseline data should Output 1.2 contribute to the M&E framework?",
    "How should implementation be phased, sequenced and governed, with which milestones, risks and stakeholder engagement?",
  ] },
  { p: "The report does not repeat the analysis in the five source reports. It draws their findings together, resolves the points on which they differ, and turns them into recommendations that can be acted on. Detailed evidence, tables and references remain in the source reports, which are cited throughout by their codes (F1 to F5)." },

  { h: 2, t: "Output 1.2 and its three activities" },
  { tbl: {
    caption: "Output 1.2 activities as designed",
    head: ["Activity", "Purpose", "Indicative key activities", "Deliverables"],
    cols: [1600, 2300, 2826, 2300],
    small: true,
    rows: [
      ["1.2.1 Dialogue platforms between MSMEs, private sector associations, financial institutions and large tourism companies or investors", "Close the disconnect between NBT MSMEs and financial institutions that lack tailored products or have low risk appetite", "Common understanding of R-NBT; perspectives on finance and risk; promotion of existing mechanisms; bankability criteria; adaptation of existing credit lines; matchmaking; engagement of DMCs and lodge chains on procurement, mentoring and shared infrastructure", "Dialogue and matchmaking event reports with agendas and participant lists; summary note on engagement outcomes of financial institutions and investors"],
      ["1.2.2 Set-up of grant facilities", "Accelerate market readiness and stimulate regenerative product innovation; indirectly enable lenders to offer better terms to grantees", "Lot 1 small grants up to EUR 10,000 (seed stage, matching up to 20%); Lot 2 medium grants of EUR 10,000–40,000 (finance-ready MSMEs, matching up to 50%); eligibility and criteria; third-party implementers; call for proposals; pilot the facility", "Competition design package and call; list of awarded MSMEs and agreements; technical guidance and user protocols; summary report on outcomes and lessons"],
      ["1.2.3 Support and strengthen new or existing financing mechanisms", "Adapt and test existing financing solutions with NBT MSMEs, primarily Lot 2 grantees, in three intervention areas", "Partnerships with lenders, development banks and foundations from 1.2.1; loans with improved conditions; revolving funds; social or environmental bonds; savings groups and community finance; MSME support through Activity 1.1.1", "Partnership agreements; pilot evaluation report with lessons and recommendations for scale-up"],
    ],
  } },

  { h: 2, t: "Evidence base and method" },
  { p: "The synthesis draws on the five finance deliverables completed between October and November 2026, the October 2026 Macro Diagnostic (MD) that they all reference, and four documents from the November 2026 destination working sessions: the two GM3-D10 micro-diagnostics and the finance segment reports of the Victoria Falls (10 November) and Maun (12 November) roundtables. {T:sources} summarizes what each contributes. The method was to (i) extract findings, recommendations and data points from each report; (ii) map them against the activities and indicative key activities of Output 1.2; (iii) organize them by the Macro Diagnostic’s priority value chains and priority areas; (iv) reconcile conflicting figures and positions (Section 2.6); and (v) derive recommendations, indicators and a roadmap. Where reports disagree, the more recent and more directly evidenced source is followed and the choice is recorded." },
  { tbl: {
    id: "sources", caption: "Source reports and their contribution",
    head: ["Code", "Report", "Main contribution to this synthesis"],
    cols: [700, 3100, 5226],
    small: true,
    rows: [
      ["F1", "F1-D4 Financial Landscape Analysis (revised draft, 29 Oct 2026)", "Supply side: actors, products, guarantee schemes and revolving funds by country; country readiness scores; five candidate pilot mechanisms; RTFF design steps"],
      ["F2", "F2-D5 Barriers and Opportunities Report (revised draft, 29 Oct 2026)", "Barriers and root causes; lender risk views; matchmaking function and dialogue topics; financing needs and matching capacity; recommendations by actor; three-window grant facility design"],
      ["F3", "F3-D6 Investment Readiness and Enterprise Strengthening Assessment (5 Nov 2026)", "Demand side: readiness tiers 0–3; priority value chains and segments; financial practices and informality; capacity needs of MSMEs, BSOs and lenders; lead BSOs; disaggregated baseline fields"],
      ["F4", "F4-D7 Financing Mechanisms Assessment (revised draft, 18 Nov 2026)", "Feasibility of grant, debt, risk-sharing and alternative mechanisms; blended models A–D; mechanism fit by priority value chain; Lot 2 pilot design; partner shortlist; agreements; phased pilot; sustainability"],
      ["F5", "F5-D8 Pre-Engagement Report and Synthesis (Draft 2)", "Primary institutional evidence from 12 consultations: guarantee terms, lending products, seasonality precedents, anchor-buyer finance, late payment, ESG verification and open RTFF design questions"],
      ["MD", "KAZA R-NBT Macro Diagnostic Findings Report (SIGMA International, Oct 2026), cited through F1–F5", "Priority areas and value chains, MSME survey of 106 enterprises, finance interviews, RTFF parameters and Finance Lab"],
      ["MiD1, MiD2", "GM3-D10 Micro Diagnostic Reports: (1) Hwange–Victoria Falls–Livingstone and (2) Okavango Delta–Maun (5 Nov 2026, pre-validation)", "Destination value chains and delivery cores; updated survey (141 responses: 64 in the corridor, 40 in Okavango–Maun); finance channels; support model and cohort tracks; RTFF keys; GM1-D5 baseline indicators"],
      ["RT-VF, RT-MN", "F5-D8 Roundtable Finance Segment Reports: Victoria Falls (10 Nov, reported 15 Nov 2026) and Maun (12 Nov, reported 16 Nov 2026)", "What MSMEs, buyers and associations said about loan cost, terms, security, coaching, market access and the RTFF as presented in November"],
    ],
  } },

  { h: 2, t: "Limitations" },
  { b: [
    "**Working view of value chains and areas.** The priority areas and value chains were tested at the destination working sessions of 10–12 November 2026 and remain subject to Partner State decisions at the KAZA structure meetings of 23–27 November 2026. The roundtable reports reflect what was said aloud in the recordings; completed table sheets, questionnaires and anonymous finance cards were not among the sources.",
    "**Intervention areas and timeframe.** Output 1.2 refers to three intervention areas; the programme now plans coaching for about 150 MSMEs across two priority areas to the end of 2028. This report treats Namibia’s Zambezi Region as a possible third area if resourced, with Angola on a readiness-first track (Section 3.3). The project currently ends in December 2028; an extension to mid-2029 is being sought.",
    "**Survey is not a baseline.** The MSME survey (106 responses in the Macro Diagnostic; 141 in the November update, 64 of them in the corridor and 40 in Okavango–Maun) is self-selected and leans towards registered, established enterprises; Hwange, community and informal enterprises are under-represented.",
    "**Interest is not commitment.** Partner signals come from single meetings; no institution has committed to a pilot role or allocation.",
    "**Indicative parameters.** Coverage ratios, matching ratios, first-loss shares and portfolio sizes are proposals for negotiation, grounded in existing scheme terms where known. Budget envelopes for the grant facility and Activity 1.2.3 were not available.",
  ] },
];

const ch2 = [
  { h: 1, t: "What the Evidence Shows" },
  { h: 2, t: "The core diagnosis" },
  { p: "All five reports reach the same conclusion from different directions: the problem is the fit between finance and enterprises, not the volume of capital (F1, F2, F4, F5). Lenders and guarantors described the constraint in almost identical terms: collateral, track record and documentation, compounded by booking-based revenue that has no harvest-like settlement point (F5 §3). The demand-side evidence is consistent with this ({T:headline})." },
  { tbl: {
    id: "headline", caption: "Headline evidence on MSME finance in KAZA",
    head: ["Finding", "Evidence", "Source"],
    cols: [2600, 5126, 1300],
    small: true,
    rows: [
      ["Finance is the most cited constraint, but many never apply", "82 of 106 surveyed MSMEs name finance as a top-three challenge; 46 sought outside finance (22 succeeded, 24 refused); 54 never tried; 6 did not know funding existed", "MD via F3, F4"],
      ["A buyer is the strongest predictor of finance", "28% of enterprises with a buyer arrangement obtained outside finance, against 8% of those without; 32 of 106 hold a written contract or letter of intent", "MD via F4"],
      ["Existing schemes barely reach tourism", "Tourism is about 4% of NASRIA guarantee reach (6 SMEs in FY2025-26) and under 10% of the ECGC portfolio; under 1% of bank lending in Zimbabwe", "F5, F4"],
      ["Credit is scarce and expensive", "MSME credit access of 2.2% in Zambia; commercial rates of about 43.5% in Zimbabwe; Angola’s policy rate 19.5%; scored credit in Zambia above 20% a year", "F4, F5"],
      ["Seasonality breaks standard loans", "In an illustrative guiding enterprise, a standard 24-month loan takes about 11% of peak-month revenue but 48% of low-season revenue", "F3 §8.1"],
      ["Specialized assets are hard to lend against", "18% non-performing loans on boats and specialized assets at NDB Botswana; about 40% NPL at BDA Angola", "F5"],
      ["Buyers pay late", "Public bodies and large operators pay 30–90 days late; suppliers finance their buyers", "F4, F5 §8"],
      ["Records and formality are thin", "27 of 106 keep records in a notebook and 8 keep none; business planning scores 3.9 of 5; informality ranges from 47% (Botswana MSMEs) to 95.6% (Zambia, unregistered)", "F3 §4"],
      ["Women and youth are present but under-served", "40% of surveyed MSMEs women-owned or -led and 17% youth; women hold 58% of full-time jobs; NASRIA beneficiaries 25% female-owned and 28% fully youth-owned", "MD via F3; F5"],
    ],
  } },

  { h: 2, t: "Five barriers and what they imply for design" },
  { p: "Five barriers recur across all countries and value chains and reinforce one another (F2 §4; F4 §2.2). Women- and youth-led enterprises face each more acutely: women’s firms sit in low-asset segments on communal land, and young founders have neither assets nor credit history." },
  { tbl: {
    caption: "Barriers and design implications",
    head: ["Barrier", "How it shows up", "Design implication for Output 1.2"],
    cols: [1500, 3600, 3926],
    small: true,
    rows: [
      ["Collateral", "Communal, concession and CAMPFIRE land cannot be mortgaged; specialized assets have no resale market; women’s land rights are often secondary", "Accept orders, invoices, movable assets, savings records and group guarantees as security; re-lease repossessed assets; share risk through guarantee windows and first loss"],
      ["Seasonality", "60–75% of revenue in the peak months; cancellable bookings; low-season cash gaps", "Seasonal schedules and low-season grace as standard; disburse asset loans in the low season; order-linked repayment where an anchor pays into a controlled account"],
      ["Informality", "Up to 30% withholding tax without tax clearance in Zimbabwe; scored credit needs registration and seven months of account history", "Treat formalization as a milestone, not a gate; fund tax clearance and licensing; let recognised groups and licence-holders enter"],
      ["Risk perception", "Lenders lack sector knowledge; past tourism funds failed on design (Zimbabwe’s local-currency revolving fund)", "First-loss and guarantee cover; BSO-screened pipeline; lender training; build seasonal repayment data"],
      ["Power imbalances", "Anchors set price and terms and drop suppliers after one failure; late payment; standard procurement favors imports", "Standard supply MOU with payment terms and notice; prompt-payment commitments; aggregation; supplier feedback loops"],
    ],
  } },

  { h: 2, t: "What already exists to build on" },
  { p: "The Macro Diagnostic’s message that KAZA does not mainly need another finance facility or institution (F2 §2.1) is borne out by the landscape: each state has institutions that can carry a pilot, although tourism is a marginal user of all of them. F1’s readiness scores rank how ready each state’s KAZA corridor is to pilot a tailored mechanism now." },
  { tbl: {
    caption: "Country starting points for Output 1.2",
    head: ["Country (area)", "Readiness (F1, of 5)", "Strongest vehicles to build on", "Main constraint"],
    cols: [1700, 1100, 3726, 2500],
    small: true,
    rows: [
      ["Zambia (PA1: Livingstone, Kalomo)", "4.1 ready to pilot", "FNB Zambia collateral-free scored credit (would pay for risk sharing); ZCGS partial guarantees; ZANACO loan pilot; MSMED grants; CEEC; dense savings groups", "Cost of credit; local incorporation needed for leasing and factoring"],
      ["Zimbabwe (PA1: Victoria Falls, Hwange)", "3.9 ready to pilot", "ECGC credit guarantee (75–85% by tenor; about 13–14 banks and 21–34 MFIs); SMEDCO; Women’s Microfinance Bank; strongest anchor cluster", "Currency and exchange-control rules; high rates; past fund design failures"],
      ["Botswana (PA2: Okavango–Maun; Kasane)", "3.4 ready with adjustments", "CEDA; NDB; LEA; NASRIA/BOSRIA subsidiary (60%, from March 2026); Wilderness–Stanbic supplier finance; Agora Microfinance", "BOSRIA not yet known to lenders; citizen reservation; seasonality-linked NPLs"],
      ["Namibia (phased: Zambezi Region)", "3.2 ready with adjustments", "NASRIA guarantee (60%, proposing 80/20 for women and youth); DBN and DBN For Her; NYDF; conservancy JV income; wildlife credits", "Instruments rarely reach the Zambezi Region; no tourism-specific funder"],
      ["Angola (phased: Cubango–Okavango)", "1.4 emerging", "BDA microfinance; FGC; banks in Menongue and Calai; OKACOM CORB Fund", "Mostly unbanked; kwanza volatility; one anchor camp; no survey data"],
    ],
  } },

  { h: 2, t: "The market gap and the RTFF" },
  { p: "F4 defines a structural gap that no current provider serves on usable terms: **buyer-linked Tier 1–2 tourism MSMEs needing EUR 1,000–30,000 of working capital or a small asset, repaid over one or two seasons, with no land or fixed collateral.** Banks and development lenders require collateral, savings groups and microfinance lend below the ticket, impact funds lend far above it, and grants create no repayment record (F4 §2.5)." },
  { p: "The Regenerative Tourism Finance Facility (RTFF) proposed by the TUI Care Foundation with EU–German Cooperation is designed for this gap: collateral-free loans of EUR 1,000–10,000 (Tier 1) and EUR 10,000–30,000 (Tier 2) over 12–24 months, priced at 8% and stepping down to 2% against women’s leadership, youth employment, circular and nature milestones, for about 50 buyer-linked MSMEs from about 150 referrals, with about EUR 720,000 deployable. Consultations and the Finance Lab raised open issues that Output 1.2 must address: offshore administration and in-country loan recovery, which every lender consulted stressed (F5 §14); currency risk; the 82.5% share of capital allocated to Tier 2 while most enterprises are micro; exclusion of licence- and permit-holders; and fund sustainability after cohort 1 (F1 §10.2; F4 Table 8)." },

  { h: 2, t: "What the November working sessions add" },
  { p: "The micro-diagnostics and the Victoria Falls and Maun working sessions tested the evidence at destination level. They confirm the core diagnosis but show two different starting points: an established, transport- and guiding-heavy corridor around Victoria Falls and Livingstone, and a smaller, more informal, women- and craft-heavy base around Maun ({T:destinations})." },
  { tbl: {
    id: "destinations",
    caption: "Finance-relevant profile of the two priority areas (updated survey and November working sessions)",
    head: ["Indicator or finding", "Hwange–Victoria Falls–Livingstone", "Okavango Delta–Maun"],
    cols: [2600, 3213, 3213],
    small: true,
    rows: [
      ["Survey respondents (Nov 2026 export)", "64, mostly Livingstone and Victoria Falls; 1 in Hwange", "40 (Maun and Boro, Panhandle, district, Boteti)"],
      ["Finance in top three challenges; never applied; obtained finance", "81%; 47%; 20% (15 of 28 applicants refused, mostly for collateral)", "75%; 60%; 20% (18% refused)"],
      ["Written contract or letter of intent", "42%; a further 36% informal; roundtable estimate that 68% of suppliers have no contract", "18%; a further 22% informal; 55% would like an agreement"],
      ["Women-led; youth-led; women’s share of full-time jobs", "36%; 16%; 48% of 614", "48%; 15%; 70% of 411"],
      ["Records in a notebook or none", "25% (over 85% without proper records, roundtable estimate)", "38%; 62% report turnover below BWP 200,000"],
      ["Largest value-chain groups", "Guiding and activities 43; transport 30; food 15; crafts only 3", "Crafts and cultural 20; conservation and community 11; food 9; laundry and services 8; guiding 8"],
      ["Payment terms", "Little discussed; buyers avoid contracts with small suppliers", "Produce and laundry: terms acceptable. Crafts: 30–90 days, unpaid consignment"],
      ["What participants asked of finance", "Below-bank pricing (0–8% against about 28%), milestone tranches, seasonal repayment, leases as security, association guarantees, buyer-deducted repayment, 6–12 months of coaching first, trade-show finance", "Access before price: routes for unregistered groups (kgosi’s letter), Setswana and paper forms, mobile money and cash, repayment linked to sales, coaching before and after the loan, money for materials"],
      ["RTFF status", "Strong cohort 1 candidate; legal and foreign-exchange route to confirm", "Conditional: Route A (Botswana RTFF phase) or Route B (coaching and market access with referral to national lenders)"],
    ],
  } },
  { p: "Four messages matter most for Output 1.2. First, **finance must come with coaching and buyer links**: participants in both sessions placed records, costing and compliance before money, and saw buyer links as what makes a business bankable at all. Second, **delivery design decides reach**: language, paper forms, cash channels and trusted intermediaries determine whether micro and community enterprises apply. Third, **the RTFF is now explicitly for established, trading businesses**, which leaves micro, start-up and unregistered enterprises to the grant facility, community funds and microfinance. Fourth, **one design will not fit all countries**: a Botswana participant doubted that peer guarantees would work there, while associations in Zimbabwe already bond their members (RT-VF)." },

  { h: 2, t: "Where the reports differ and how this synthesis resolves them" },
  { tbl: {
    caption: "Reconciliation of differences across the source reports",
    head: ["Issue", "What the reports say", "Position taken in this synthesis"],
    cols: [1700, 3826, 3500],
    small: true,
    rows: [
      ["Grant sizes and matching", "Output 1.2: Lot 1 up to EUR 10,000 (match up to 20%), Lot 2 EUR 10,000–40,000 (up to 50%). F2: three windows of USD 2,000–150,000. F4: matching rising from 10% to 50% with readiness", "Keep the two Output 1.2 lots. Within them, set contributions by segment as in F4 and F2 (10–20% for Lot 1, 30–50% for Lot 2, in-kind and loan-financed contributions allowed). F2’s Window C (scale) is served by Activity 1.2.3, not by grants"],
      ["Guarantee cover in Botswana", "F1 treats Botswana as lacking a guarantee scheme; F4 and F5 report the NASRIA/BOSRIA subsidiary operating since March 2026, unknown to a national DFI", "BOSRIA exists but has no traction; brief BOSRIA, CEDA and NDB jointly and build on BOSRIA rather than design a new scheme (F2 §8)"],
      ["Youth band", "Program 18–35; RTFF 18–30; national bands 15–45; NASRIA reports youth as 40 or under", "Adopt 18–35 for eligibility, targets and M&E; align RTFF milestones before cohort 1 selection"],
      ["RTFF Tier 1 ticket", "F5: EUR 5,000–10,000 (31 August presentation); F4 and MD: EUR 1,000–10,000", "Use the later MD figure, EUR 1,000–10,000"],
      ["ECGC partner network", "F1: 13 banks and 21 MFIs (2021); F4 and F5: about 13–14 banks and 34 MFIs", "Cite as about 13–14 banks and 21–34 MFIs pending ECGC confirmation"],
      ["Grant-then-credit sequencing", "RTFF design sequences capacity building before credit; MD and F2 caution that this should not be a universal requirement", "Grants and coaching precede debt for Tier 0–1; Tier 2 enterprises with a buyer may go straight to finance"],
      ["Intervention areas", "Output 1.2: three intervention areas. MD: two priority areas and a phased pathway. MiD1–2: about 150 MSMEs across two priority areas", "PA1 and PA2 as the delivery cores; Namibia’s Zambezi Region as a third area only if resourced; Angola on a readiness-first track (to be confirmed 23–27 November 2026)"],
      ["RTFF pricing and terms", "September: 8% stepping down to 2%, 12–24 months. November (Maun): preferential rate of about 8–10%, not yet set, 18–24 months, social collateral", "Treat pricing and tenor as open; recommend seasonal schedules and a rate well below bank rates, with step-downs for verified milestones"],
      ["Commercial interest rates in Zimbabwe", "F4: about 43.5%. RT-VF: about 28% quoted, prime above 16%", "Report the range (about 28–44%) and confirm with partner lenders"],
      ["Grants or loans", "Project team (both sessions): the RTFF is loan-based to avoid grant dependency. Output 1.2 includes a grant facility (1.2.2); participants asked for conditional grants tied to training", "Keep the two distinct: RTFF loans for established businesses; Lot 1 and Lot 2 grants, conditional on training, for readiness, compliance and the borrower’s contribution"],
      ["Project timeframe", "Project to December 2028; extension to mid-2029 sought (RT-VF). F4 phasing ran to 2029", "Fit the roadmap to December 2028, with the second low season and full review dependent on the extension"],
    ],
  } },
];

module.exports = { execSummary, ch1, ch2 };
