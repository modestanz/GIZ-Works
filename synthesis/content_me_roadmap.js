// Chapter 6 (M&E framework contribution) and Chapter 7 (Implementation roadmap)

const ch6 = [
  { h: 1, t: "Contribution to the M&E Framework" },
  { h: 2, t: "Principles" },
  { b: [
    "**One measurement system, built on GM1-D5.** The programme’s GM1-D5 baseline already proposes 18 indicators at MSME (1–12), destination (13–15) and KAZA (16–18) level, with targets to be set in GM3-D11 (MiD1–2). Output 1.2 should reuse those definitions for finance, inclusion and buyer links and add only what is specific to financial mechanisms, so that the intake baseline, grant milestones, RTFF step-downs and results framework can be compared (F1 §10.2; F4 §13.1).",
    "**Common measurement rules.** Baseline at intake, follow-up after coaching, at 12 months and then annually in the same season; unknown is not zero; referral, application, approval and disbursement recorded separately (GM1-D5).",
    "**Disaggregation by default.** Every enterprise-level indicator by country, intervention area, value chain, segment and readiness tier, and by sex, age (exact year of birth, reported in the 18–35 band) and disability of owners and managers, using a majority ownership or decision-making test for women-led and youth-led status. Read results by country and year, since counts per hub and quarter will be small.",
    "**Proportionate R-NBT measurement and measured risk.** A few verifiable regenerative indicators tracked as progression, not as an entry score (F5 §10); lenders report repayment by season and product, and anonymized portfolio performance is published so that perceptions of tourism risk can change.",
    "**Independent verification** of RTFF milestones and results-based payments by a verifier such as Target 8.9, GreenLoop or Travelife, and an independent review at the two go/no-go gates.",
  ] },

  { h: 2, t: "Proposed indicators" },
  { p: "{T:indicators} proposes indicators at output level and for each activity. Where an indicator matches GM1-D5, the D5 number is shown and its definition applies. Reference values describe survey samples or national data and are **not** a baseline; targets are indicative until the intake baseline and agreements are in place." },
  { tbl: {
    id: "indicators", caption: "Proposed Output 1.2 indicators, reference values and sources",
    head: ["#", "Indicator", "Reference value (source)", "Means of verification; frequency", "Indicative target"],
    cols: [850, 2550, 2250, 1926, 1450],
    small: true,
    rows: [
      [{ t: "Output 1.2: Financial mechanisms established with financial institutions", span: 5 }],
      ["O1", "Number of financial mechanisms established or adapted with partner institutions and in operation for targeted MSMEs (products, guarantee windows, funds, supply finance arrangements)", "0 tourism windows in national schemes; 1 supplier finance precedent (Wilderness–Stanbic) (F4)", "Signed agreements and product approvals; semi-annual", "At least 2 per intervention area by end of season one"],
      ["O2", "Number and value of finance transactions to targeted MSMEs through pilot mechanisms, by product and season", "0 (new pilots)", "Lender and RTFF portfolio reports; quarterly", "Set per agreement (RTFF about 50 loans in cohort 1)"],
      ["O3 (D5-8)", "Share of targeted MSMEs that obtained external finance in the last 12 months", "20% in both priority areas (MiD1–2); 28% with a buyer vs 8% without (MD survey)", "Intake and follow-up survey; annual", "Increase over intake baseline in each area"],
      ["O4", "Finance leveraged per euro of grant and first loss (commercial and development finance mobilized)", "None", "Grant and lender records; annual", "At least 1:1 by facility close (F2)"],
      ["O5", "Portfolio at risk over 30 days (PAR30), by season, product, sex and age of borrower", "NPL 18% on specialized assets at NDB; about 40% at BDA (F5)", "Lender reports; monthly or quarterly", "Below 15% (stop-or-adjust threshold)"],
      ["O6 (D5-6)", "Share of finance (number and value) to women-, youth- and community-led enterprises", "Women-led 36% (PA1) and 48% (PA2); youth-led 16% and 15% (MiD1–2); NASRIA beneficiaries 25% female-owned (F5)", "Portfolio and grant data; quarterly", "At least 60% to women- or youth-led (RTFF target)"],
      ["O7", "Tourism share of partner guarantee schemes’ KAZA portfolios", "About 4% of NASRIA reach (6 SMEs, FY2025-26); under 10% of ECGC portfolio (F5)", "Scheme reports; annual", "Rising trend; tourism window active in each scheme"],
      [{ t: "Activity 1.2.1: Dialogue platforms and matchmaking", span: 5 }],
      ["A1", "Number of dialogue, clinic and matchmaking sessions held, and participants by type, sex, age and disability", "None", "Event reports and attendance lists; quarterly", "Quarterly cycle in each active area"],
      ["A2", "Referrals from the pipeline to lenders, and approval rate, with coded rejection reasons", "15 of 28 corridor applicants refused, collateral the main reason (MiD1)", "Pipeline dashboard; quarterly", "Approval rate rising each season"],
      ["A3 (D5-10)", "Number of anchors signing the standard supply MOU or Supply Chain Compact, and MSMEs with a written agreement", "Written contract or letter of intent: 42% (PA1), 18% (PA2) of respondents (MiD1–2)", "Signed MOUs; semi-annual", "At least 2 anchors per area by season one"],
      ["A4", "Average days taken by anchors to pay MSME suppliers; share of craft sales on consignment", "30–90 days late (F4, F5); unpaid consignment reported in Maun (RT-MN)", "Supplier and anchor records; semi-annual", "30 days or less (15 for micro)"],
      ["A5", "Number of product adaptations, term sheets or MOUs agreed with financial institutions and investors", "None", "Commitments log; semi-annual", "1 lender and 1 guarantor per area by end of design"],
      [{ t: "Activity 1.2.2: Grant facility", span: 5 }],
      ["G1", "Grants awarded by lot, value chain and area, by sex, age and disability of owners, and share to Activity 1.1.1 participants", "None", "Grant management system; quarterly", "At least 60% to women- or youth-led enterprises"],
      ["G2", "Contribution mobilized by grantees (cash, in kind, loan)", "None", "Grant reports; per tranche", "As set by lot (10–50%)"],
      ["G3", "Share of grantees completing funded improvements and milestones on time", "None", "Milestone verification; per tranche", "At least 80%"],
      ["G4 (D5-5, D5-7)", "Share of grantees moving up at least one readiness tier within 12 months, including a usable sales record and a formalization step", "Notebook or no records: 25% (PA1), 38% (PA2) of respondents (MiD1–2)", "Common diagnostic at intake and follow-up; annual", "To be set after intake"],
      ["G5", "Share of Lot 2 grantees obtaining complementary finance within 12 months of award", "None", "Lender and RTFF data; annual", "At least 1 in 3 of screened grantees"],
      ["G6 (D5-3)", "Grantees meeting at least one additional R-NBT progression criterion (e.g., 40% local food, zero single-use plastic, renewable energy)", "No common checklist baseline yet", "Verifier reports; annual", "To be set after intake"],
      [{ t: "Activity 1.2.3: Financing mechanisms", span: 5 }],
      ["F1", "Partnership agreements signed, by type (MOU, risk-sharing, guarantee window, supply chain finance, fund management)", "None", "Signed agreements; semi-annual", "Full set per area before season one"],
      ["F2", "Repayment by season: on-time repayment rate in low and peak seasons", "None for tourism MSMEs", "Lender reports; quarterly", "Low-season rate within 10 points of peak"],
      ["F3 (D5-11, D5-13)", "Value of local procurement from supported MSMEs by partner anchors, and contracts won", "Not measured; about 80% of lodge décor imported in Namibia (F3)", "Anchor procurement reports; semi-annual", "To be set after anchor baseline"],
      ["F4 (D5-1, D5-2)", "Change in revenue and full-time and seasonal jobs in financed MSMEs, by sex and age", "Women hold 48% of 614 (PA1) and 70% of 411 (PA2) full-time jobs reported (MiD1–2)", "Follow-up survey; annual", "To be set after intake"],
      ["F5", "Partner lenders continuing products without first loss, or with reduced concessional support, after two seasons", "None", "Independent review; at each gate", "At least one lender per area"],
    ],
  } },

  { h: 2, t: "Baseline data" },
  { p: "Three baselines are needed before cohort 1 disbursement, collected in Phase 0 and early Phase 1 ({T:baselines}); the reference values above cannot measure change." },
  { tbl: {
    id: "baselines", caption: "Baselines to collect before cohort 1",
    head: ["Baseline", "Content", "Who collects; when", "Notes"],
    cols: [1600, 3726, 1800, 1900],
    small: true,
    rows: [
      ["MSME intake baseline (GM3-D11)", "The 18 GM1-D5 indicators plus, for every pipeline enterprise: owner and manager sex, year of birth and disability; value chain and segment; buyers and share of sales to anchors; monthly revenue; jobs by sex and age; savings-group membership; finance applied for and received, and reasons for not applying; records kept; registration, tax clearance, licences, insurance; readiness tier; R-NBT checklist status (Annex C)", "BSOs and grant managers at intake; Phase 0–1 and at each call", "Large enough to compare women- and men-led and youth- and adult-led enterprises within each priority value chain; re-analyze the 106 survey responses by women- and youth-led status at low cost (F3 Annex B)"],
      ["Lender and guarantor portfolio baseline", "Current tourism MSME lending by number, value, product, tenor and PAR, by sex and age of owner and by season; guarantee scheme tourism share and claims", "Partner lenders and schemes; at agreement signature", "A condition in risk-sharing and guarantee window agreements; anonymized"],
      ["Anchor procurement baseline", "Local procurement spend by category, number of local suppliers, share from women- and youth-led suppliers, and average payment days", "Partner anchors; at supply MOU signature", "Anchor procurement spend is not yet measured (F4 §1.5); this is the denominator for local value retained"],
    ],
  } },

  { h: 2, t: "Data system, roles and learning" },
  { p: "BSOs and grant managers record intake data with consent; the 1.2.1 dashboard and grant system hold referrals, milestones and tiers; lenders, the RTFF and anchors report under data-sharing clauses; a verifier confirms milestones and an independent reviewer evaluates at each gate. Key learning questions: do seasonal schedules, buyer links and grant-financed contributions improve repayment, do women- and youth-led enterprises repay at the same rates, and will lenders continue with less concessional support? Comparing grantees with non-grantees limits selection bias." },
];

const ch7 = [
  { h: 1, t: "Implementation Roadmap" },
  { h: 2, t: "Phased approach" },
  { p: "F4 recommends piloting over two full tourism seasons so that low-season performance is observed twice (F4 §12.2). The project currently ends in December 2028, with an extension to mid-2029 being sought (RT-VF), so the roadmap is fitted to December 2028 and the second low season can only be observed with the extension. RTFF cohort 1 follows the TUI Care Foundation’s timetable, with finance from the first quarter of 2027 (RT-MN). {F:roadmap} sets out the phases; dates are indicative and assume Partner State decisions on 23–27 November 2026." },
  { img: { id: "roadmap", file: "fig2_roadmap.png", w: 580, h: 251, caption: "Indicative roadmap for Output 1.2, November 2026 to December 2028, with the extension sought to mid-2029" } },
  { p: "The phases and their decision points are:" },
  { b: [
    "**0. Validation and set-up (November 2026 to January 2027):** Partner State decisions on areas, value chains and criteria; Output 1.2 envelopes and lot split; youth band and ownership test; term-sheet talks with shortlisted partners; platforms launched; common diagnostic and baselines started. Decision: confirmed areas, chains and partners.",
    "**1. Design and partnering (February to April 2027):** competition design package and the first Lot 1 window; product terms, supply MOU template and agreements; lender staff training; grant managers contracted. Decision: agreements signed and calls open.",
    "**2. Season one (April 2027 to March 2028):** RTFF cohort 1 and pre-peak working capital for buyer-linked suppliers; Lot 1 and Lot 2 awards; low-season asset loans with grace; Lot 2 referrals; quarterly deal days; Model D design. **Gate 1 (Q1 2028):** stop or adjust if PAR30 exceeds 15% or uptake is below half of target.",
    "**3. Season two and review (April to December 2028):** products opened to non-grantees; second pilots; RTFF future arrangements agreed with the KAZA Secretariat; independent review. **Gate 2 (Q4 2028):** continue, adjust or hand over.",
    "**4. Handover (Q4 2028 to mid-2029, extension sought):** products move into lenders’ standard ranges, guarantee windows become standing products, first loss tapers and templates pass to the KAZA Secretariat; with the extension, the second low season is observed and the evaluation completed.",
  ] },

  { h: 2, t: "Sequencing logic" },
  { b: [
    "**Activity 1.2.1 starts first** and runs throughout: the pipeline, supply MOUs and lender terms it produces are the inputs to both other activities.",
    "**Grants before debt for Tiers 0–1; finance first for Tier 2 with a buyer.** Lot 1 opens in the first low season; Lot 2 is aligned with lender pre-screening so that the financing plan is tested before award.",
    "**Strongest institutions and demand first.** RTFF cohort 1 and order-backed and asset finance with guarantee cover in PA1 and PA2 in season one; group, community and results-based instruments in season two, once buyers and payment records exist (F4 §12.3).",
    "**Follow the season.** Working capital before the peak; asset loans in the low season with three to six months of grace; deal days in the pre-season.",
    "**Areas in order of readiness.** PA1 (Zambia 4.1, Zimbabwe 3.9) first, as the strong RTFF cohort 1 candidate; PA2 (Botswana 3.4) in season one through national channels, with the RTFF only if a Botswana route is confirmed; the Zambezi Region (Namibia 3.2) only if resourced; Angola (1.4) on grants and technical assistance only.",
    "**Coaching first, but not for everyone.** Participants proposed 6–12 months of coaching before lending, so cohort 1 should come from enterprises already coached or supplying lodges; others enter through Lot 1 and coaching.",
  ] },

  { h: 2, t: "Milestones" },
  { p: "Ten milestones mark progress from the Partner State decisions to the final review. {F:milestones} places them on a timeline and gives the evidence that will show each has been reached; the two decision gates are marked in red." },
  { img: { id: "milestones", file: "fig8_milestones.png", w: 580, h: 160, caption: "Key milestones, December 2026 to December 2028" } },

  { h: 2, t: "Risks and mitigation" },
  { p: "{T:risks} rates the main implementation risks by likelihood and impact and sets out the mitigation for each. The risks rated high in impact concern partner commitment, low-season repayment, currency and exchange control, in-country recovery for the RTFF, over-indebtedness, the project timeframe and the depth of the cohort 1 pipeline." },
  { tbl: {
    id: "risks", caption: "Main implementation risks",
    head: ["Risk", "L", "I", "Mitigation"],
    cols: [3000, 450, 450, 5126],
    small: true,
    rows: [
      ["Partner interest does not turn into commitment", "M", "H", "Term-sheet talks in Phase 0; offer first loss and fee support; more than one candidate per role; commitments log reviewed monthly"],
      ["Readiness mismatch: most grantees at Tiers 0–1, unsuited to debt", "H", "M", "Offer debt only to Tier 2 or buyer-linked grantees; Lot 1 and coaching for others; voluntary participation"],
      ["Grant dependency and moral hazard; follow-on loans treated as grants", "M", "H", "Separate grantor and lender roles and branding; conversion clauses; repayment incentives rather than forgiveness"],
      ["Low-season default and seasonal arrears", "M", "H", "Seasonal schedules and grace written into agreements; disburse assets in the low season; PAR30 stop-or-adjust threshold"],
      ["Currency and exchange-control risk (Zimbabwe registration of foreign loans and surrender rule; RTFF offshore lending)", "M", "H", "Lend in the currency of revenue; register contracts with the Reserve Bank of Zimbabwe; loss reserve; partial cover for devaluation-driven default"],
      ["In-country recovery capacity for the RTFF", "M", "H", "Partner with a national institution for monitoring and recovery; route to national lenders after two seasons"],
      ["Anchor turnover, late payment or shift back to imports", "M", "M", "Standard supply MOU with payment terms and notice; several anchors per pilot; payment days tracked"],
      ["Elite capture or weak governance in community funds", "M", "M", "Published rules, audits, women and youth board seats; MFI fund management"],
      ["Over-regulation, greenwashing or duplication with parallel programs (World Bank, ITC, CORB Fund, BURS rebate)", "M", "M", "Progressive checklist and independent verification; coordination through national finance working groups and the regional forum"],
      ["Over-indebtedness, especially of women borrowers, or a tourism shock (pandemic, climate, security)", "L", "H", "Affordability checks against low-season cash flow; group and short-cycle products; pre-agreed deferral protocol as used during COVID-19"],
      ["Project ends (December 2028) before two full seasons are observed", "M", "H", "Seek the extension to mid-2029; front-load cohort 1; agree handover to national institutions and the KAZA Secretariat before Q4 2028"],
      ["No Botswana RTFF route and Route B not resourced", "H", "M", "Map national alternatives now (CEDA, NDB, BOSRIA-backed lenders, microfinance, Youth Development Fund); decide Route B resources early"],
      ["Thin cohort 1 pipeline of established, coached, buyer-linked enterprises", "M", "H", "Targeted open call through associations, impact officers and connectors; waiting list; Lot 2 grantees as a second-round pipeline"],
    ],
  } },
  { p: "L = likelihood; I = impact (H high, M medium, L low)." },

  { h: 2, t: "Stakeholder engagement" },
  { p: "Output 1.2 depends on institutions it does not control: Partner States, lenders, guarantors, anchors, BSOs and funders. {F:stakeholders} sets out the role of each stakeholder group, the mechanism through which it would be engaged and when." },
  { img: { id: "stakeholders", file: "fig9_stakeholders.png", w: 560, h: 219, caption: "Stakeholder engagement plan: role, mechanism and timing" } },

  { h: 2, t: "Immediate next steps" },
  { b: [
    "Present this synthesis alongside the Partner State decisions of 23–27 November 2026; record decisions on areas, value chains, the youth band and the ownership test; request the extension to mid-2029.",
    "Agree with the TUI Care Foundation and the KAZA Secretariat whether the RTFF will have a Botswana route, and, before cohort 1 selection, the referral protocol, seasonal and sales-linked schedules, mobile-money and cash repayment, the Tier 1 share and in-country recovery.",
    "Confirm the Output 1.2 envelopes, the lot split and whether first loss and guarantee fees can be financed under Activity 1.2.3; open term-sheet talks with ECGC and SMEDCO, FNB Zambia and ZANACO, CEDA, NDB and NASRIA/BOSRIA, NASRIA and DBN, and two anchors per area.",
    "Commission the readiness diagnostic, supply MOU template and intake baseline instrument; follow up the November sessions and schedule the first platform sessions for the 2026–27 low season.",
  ] },
];

module.exports = { ch6, ch7 };
