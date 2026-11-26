// F6-D10: Validation presentation of Output 1.2 findings, 2nd KAZA R-NBT Roundtable (plenary)
// Usage: node deliverables/build/f6_d10_deck.js out.pptx
const { newDeck, makeHelpers, finish } = require("./deck_lib");

const FOOT = "KAZA R-NBT · Output 1.2 findings for validation (F6-D10) · 2nd Roundtable · Draft";
const { pres, C } = newDeck({ title: "Output 1.2 Findings for Validation", subject: "F6-D10 plenary presentation, 2nd KAZA R-NBT Roundtable", footer: FOOT });
const H = makeHelpers(pres, C);
const { sec, content, card, stat, lead, fig, table, ask, T } = H;

// ---------------- Opening ----------------
sec("Opening");
let s = H.add("TITLE");
s.addText("F6-D10 · 2nd KAZA R-NBT Roundtable · Plenary session", { placeholder: "kicker" });
s.addText("Financing regenerative nature-based tourism MSMEs in KAZA", { placeholder: "title" });
s.addText("Output 1.2 findings and recommendations for validation by GIZ and regional partners, including SADC FANR and the KAZA Secretariat", { placeholder: "sub" });
s.addText("Presented by Modesta Nyirenda, MNZ Consult · [Date and venue to be confirmed] · Draft for validation", { placeholder: "meta" });
s.addNotes("Welcome participants. Introduce yourself and the purpose: this is a validation session, not a launch. The findings are a draft; the room's job is to confirm, amend or reject them. Point to the validation sheet each table has received. Timing for the whole plenary is about 2 hours including discussion.");

s = content("What we ask of this plenary", "Explain the three asks and the three possible responses. Agree the ground rules: one conversation at a time, comments recorded on the validation log, disagreements recorded rather than resolved on the spot if time runs short. The rapporteur reads back the log at the end.");
lead(s, "Three questions, answered section by section. Every finding can be agreed, amended or rejected, and each response is recorded in the validation log.");
card(s, { x: 0.6, y: 2.05, w: 3.9, h: 2.6, num: 1, head: "Is the evidence right?", body: "Does the diagnosis match what you see in your country, institution or destination? What is missing or out of date?", color: C.accent1 });
card(s, { x: 4.72, y: 2.05, w: 3.9, h: 2.6, num: 2, head: "Are the recommendations workable?", body: "Can the three activities, the grant lots and the financing options be delivered through the institutions named?", color: C.accent2 });
card(s, { x: 8.84, y: 2.05, w: 3.9, h: 2.6, num: 3, head: "Who carries what?", body: "Which roles should the KAZA Secretariat, SADC FANR, Partner States, lenders and BSOs take on, and when?", color: C.accent3 });
table(s, ["Response", "Meaning", "What happens next"], [
  ["Agree", "The finding or recommendation stands as drafted", "Carried into the final F6-D9 report"],
  ["Amend", "Stands with a change stated in the room", "Change made and shown in the revision log"],
  ["Reject", "Does not stand; reason recorded", "Removed or reworked; returned to the partner for confirmation"],
], { y: 4.9, colW: [1.6, 5.2, 5.3], fontSize: 15 });

s = content("Where the evidence comes from", "Stress that the synthesis does not add new fieldwork: it brings together nine documents produced between September and November 2026. Say which were validated and which are still pre-validation (the micro-diagnostics). The survey is self-selected, so the numbers describe respondents, not a baseline.");
lead(s, "One synthesis (F6-D9) of five finance studies, the Macro Diagnostic, two destination micro-diagnostics and two November roundtables.");
stat(s, { x: 0.6, y: 1.95, w: 2.9, value: "106", label: "MSMEs in the Macro Diagnostic survey; 141 in the November update", color: C.accent1 });
stat(s, { x: 3.65, y: 1.95, w: 2.9, value: "5", label: "Partner States covered: Angola, Botswana, Namibia, Zambia, Zimbabwe", color: C.accent2 });
stat(s, { x: 6.7, y: 1.95, w: 2.9, value: "12", label: "Institutional consultations with lenders, guarantors and funders (F5-D8)", color: C.accent3 });
stat(s, { x: 9.75, y: 1.95, w: 2.9, value: "2", label: "Destination working sessions: Victoria Falls (10 Nov) and Maun (12 Nov 2026)", color: C.accent4 });
table(s, ["Strand", "Documents", "What it adds"], [
  ["Finance studies", "F1-D4 landscape · F2-D5 barriers · F3-D6 readiness · F4-D7 mechanisms · F5-D8 consultations", "Supply, demand, mechanisms and partner signals by country"],
  ["Diagnostics", "Macro Diagnostic (Oct 2026) · GM3-D10 micro-diagnostics for PA1 and PA2", "Priority areas, value chains, MSME survey, RTFF parameters"],
  ["Roundtables", "Regional Roundtable, Maun (22–24 Sep) · Victoria Falls and Maun sessions (Nov)", "What MSMEs, buyers and associations asked for"],
], { y: 4.35, colW: [1.9, 6.1, 4.1], fontSize: 15 });

// ---------------- A. Evidence ----------------
sec("A. What the evidence shows");
s = H.add("SECTION");
s.addText("A", { placeholder: "num" });
s.addText("What the evidence shows", { placeholder: "title" });
s.addText("The core diagnosis, the barriers, country starting points and the two priority areas", { placeholder: "sub" });

s = content("Finance is a fit, readiness and risk problem, not a capital shortage", "Key message of the whole study. Banks are liquid and present in the hub towns; four Partner States run national guarantee schemes; anchors want to buy locally. The finance on offer is built for land collateral, steady income and formal records. Capacity gaps (record-keeping, compliance, management) are part of the access-to-finance barrier, not a separate problem. Ask: does this match your experience?");
stat(s, { x: 0.6, y: 1.5, w: 2.9, value: "82 of 106", label: "MSMEs name finance as a top-three challenge", color: C.accent3 });
stat(s, { x: 3.65, y: 1.5, w: 2.9, value: "54", label: "of them have never applied for a loan", color: C.accent2 });
stat(s, { x: 6.7, y: 1.5, w: 2.9, value: "28% v 8%", label: "obtained finance with a buyer arrangement, against without one", color: C.accent1 });
stat(s, { x: 9.75, y: 1.5, w: 2.9, value: "~4%", label: "tourism share of Namibia's guarantee scheme reach (under 10% in Zimbabwe)", color: C.accent4 });
card(s, { x: 0.6, y: 3.75, w: 7.6, h: 2.95, head: "What this means", body: [
  "Most tourism MSMEs are micro, informal or semi-formal, on communal or concession land, and earn most of their revenue in five peak months.",
  "Capacity gaps in record-keeping, compliance and management are part of the finance barrier: coaching comes with finance, not after it.",
  "A buyer is the strongest single predictor of finance; market links make a business bankable.",
], size: 16 });
ask(s, { x: 8.45, y: 3.75, w: 4.25, h: 2.95, label: "For validation", text: "Does the diagnosis hold for your country and institution? Is anything missing, for example by sector, gender or age group?" });

s = content("Five barriers, and what each implies for design", "Walk through the five rows quickly. Women- and youth-led enterprises face every barrier more acutely. These implications drive the design of all three activities.");
table(s, ["Barrier", "How it shows up in KAZA", "Design implication for Output 1.2"], [
  ["Collateral", "Communal, concession and CAMPFIRE land cannot be mortgaged; specialized assets have no resale market; women's land rights often secondary", "Accept orders, invoices, movable assets, savings records and group guarantees; share risk through guarantee windows and first loss"],
  ["Seasonality", "60–75% of revenue in the peak months; cancellable bookings; low-season cash gaps", "Seasonal schedules and low-season grace as standard; asset loans disbursed in the low season"],
  ["Informality and capacity", "No tax clearance (up to 30% withholding in Zimbabwe); few records; scored credit needs registration and account history", "Formalization as a milestone, not a gate; fund tax clearance and licensing; coaching before and after the loan"],
  ["Risk perception", "Lenders lack tourism knowledge; past tourism funds failed on design", "First-loss and guarantee cover; screened pipeline; lender learning track; seasonal repayment data"],
  ["Power imbalances", "Anchors set terms, pay 30–90 days late and drop suppliers after one failure", "Standard supply MOU: written orders, payment within 30 days, notice before termination"],
], { y: 1.45, colW: [2.0, 5.0, 5.1], fontSize: 17 });

s = content("Country starting points: every state has institutions to build on", "Scores are from F1-D4 on six weighted criteria for each KAZA corridor. Zambia and Zimbabwe are ready to pilot now; Botswana and Namibia need adjustments; Angola needs readiness work first. Ask country delegations to correct institutions or scores.");
fig(s, "fig2_readiness_bal.png", { x: 0.6, y: 1.4, maxW: 12.1, maxH: 4.6, alt: "Country readiness scores and institutions to build on" });
ask(s, { x: 0.6, y: 6.05, w: 12.1, h: 0.85, label: "For validation", text: "Are the readiness bands and the institutions named right for your country? Which have changed since October?" });

s = content("Two priority areas, two different starting points", "PA1 is an established corridor, transport- and guiding-heavy; PA2 is smaller, more informal, women- and craft-heavy. The same share (20%) has obtained finance in both. Note the November survey is self-selected and leans to registered firms.");
fig(s, "fig3_destinations_bal.png", { x: 0.6, y: 1.35, maxW: 12.1, maxH: 3.9, alt: "Finance-relevant profile of the two priority areas" });
card(s, { x: 0.6, y: 5.3, w: 5.95, h: 1.6, head: "Victoria Falls asked for cost and structure", body: "Rates near 28% at banks against 0–8% proposed; milestone tranches; seasonal repayment; association guarantees; buyer-deducted repayment; 6–12 months of coaching before lending.", size: 14, headSize: 14, fill: C.background2 });
card(s, { x: 6.75, y: 5.3, w: 5.95, h: 1.6, head: "Maun asked for access", body: "A route for unregistered groups (a kgosi's letter); Setswana and paper forms; mobile-money and cash repayment; coaching before and after the loan; an end to unpaid consignment.", size: 14, headSize: 14, fill: C.background2 });

s = content("The market gap, and the options to fill it", "The RTFF is presented as one of several options, not the only one. The gap is buyer-linked Tier 1-2 enterprises needing EUR 1,000-30,000, repaid over one or two seasons, without land collateral. Several instruments can serve it, through national institutions that stay after the pilot.");
lead(s, "No provider serves buyer-linked Tier 1–2 MSMEs needing EUR 1,000–30,000 over one or two seasons without land collateral. Several instruments can fill it; the RTFF is one of them.");
const opts = [
  ["Guarantee windows", "Tourism windows in ECGC, NASRIA/BOSRIA and Zambian risk-sharing, with 10–20% first loss beneath national cover", C.accent1],
  ["Order-backed finance", "Working capital and invoice discounting against a standard supply MOU, anchors paying into a controlled account", C.accent2],
  ["Asset and lease-to-own", "Vehicles, boats, laundry and solar equipment, with seasonal grace and re-leasing of repossessed assets", C.accent4],
  ["Community and group finance", "Savings groups linked to MFIs, a community guarantee pool and revolving funds from conservancy revenue", C.accent5],
  ["RTFF (TUI Care Foundation)", "Collateral-free, buyer-linked loans for about 50 established businesses, about 8–10% (not yet set), 18–24 months, from Q1 2027", C.accent3],
];
opts.forEach(([h, b, col], i) => card(s, { x: 0.6 + i * 2.46, y: 2.15, w: 2.3, h: 3.25, num: i + 1, head: h, body: b, color: col, size: 14, headSize: 13 }));
ask(s, { x: 0.6, y: 5.6, w: 12.1, h: 1.3, label: "For validation", text: "Is the gap described correctly? Which options can your institutions carry, and on what conditions? Should Botswana be served through an RTFF route (Route A) or through national channels (Route B: CEDA, NDB, BOSRIA-backed lenders, microfinance, Youth Development Fund)?" });

s = content("Plenary check A: the evidence", "Facilitator: 20 minutes. Take the questions in order. Rapporteur records each response against the finding number on the validation log (A1-A5). Close by reading back what was agreed, amended or rejected.");
table(s, ["#", "Finding to validate", "Agree / amend / reject"], [
  ["A1", "Finance is a fit, readiness and risk problem; capacity gaps are part of the access-to-finance barrier", ""],
  ["A2", "The five barriers and their design implications", ""],
  ["A3", "Country readiness bands and the institutions to build on", ""],
  ["A4", "The two priority areas need different delivery: cost and structure in PA1, access in PA2", ""],
  ["A5", "The EUR 1,000–30,000 gap, served by several options including the RTFF", ""],
], { y: 1.45, colW: [0.7, 8.6, 2.8], fontSize: 18 });
ask(s, { x: 0.6, y: 5.0, w: 12.1, h: 1.7, label: "Questions for the room", text: "1. What in the evidence is wrong, missing or out of date?   2. Do the findings hold for women-, youth- and community-led enterprises?   3. What would a lender, guarantor or anchor in your country add?" , color: C.accent2 });

// ---------------- B. Recommendations ----------------
sec("B. Framework and recommendations");
s = H.add("SECTION");
s.addText("B", { placeholder: "num" });
s.addText("Framework and recommendations", { placeholder: "title" });
s.addText("One pathway, three activities, organized by priority value chain", { placeholder: "sub" });

s = content("One pathway, three activities", "Three activities designed as one graduation pathway, not three projects. 1.2.1 connects and produces the pipeline; 1.2.2 prepares and de-risks; 1.2.3 finances through institutions that stay. Activity 1.1.1 capacity building underpins all three. Enterprises enter at their readiness tier and move up as each step creates the record the next lender needs.");
fig(s, "fig4_framework_bal.png", { x: 0.6, y: 1.3, maxW: 12.1, maxH: 5.6, alt: "Output 1.2 strategic framework: three activities on one readiness pathway" });

s = content("Activity 1.2.1: dialogue platforms and matchmaking", "A standing function with a pipeline output, not one-off events. Directory and targeted buyer sessions before large events (past marketplaces struggled). The lender learning track was added after the November sessions: lenders said they do not understand a guide, a booking or a season.");
card(s, { x: 0.6, y: 1.45, w: 5.95, h: 2.55, num: 1, head: "Structure", body: [
  "One platform per delivery core: Livingstone–Victoria Falls with Hwange; Maun with the Delta community areas; Zambezi Region if resourced",
  "Convened through associations, lodge impact officers and connectors, on a quarterly cycle timed to the season",
], size: 16 });
card(s, { x: 6.75, y: 1.45, w: 5.95, h: 2.55, num: 2, head: "Formats", body: [
  "Common-understanding workshops; lender clinics; women-only and youth-only sessions",
  "Quarterly deal days with one-page pipeline profiles; anchor roundtables leading to a standard supply MOU",
], size: 16, color: C.accent2 });
card(s, { x: 0.6, y: 4.2, w: 5.95, h: 2.65, num: 3, head: "Lender learning track", body: [
  "Tourism literacy, extended ESG and regenerative practice for banks, MFIs, guarantee schemes and DFIs",
  "How verified nature-positive practice can count positively in credit assessment, pricing and collateral",
], size: 16, color: C.accent3 });
card(s, { x: 6.75, y: 4.2, w: 5.95, h: 2.65, num: 4, head: "Pipeline and accountability", body: [
  "One readiness diagnostic; every referral tracked with coded rejection reasons by sex, age and value chain",
  "Success: one lender, one guarantor and two anchors ready to sign per area; three referrals per loan target",
], size: 16, color: C.accent4 });

s = content("Activity 1.2.2: a grant facility that pays for what a loan cannot", "Lots and maximum contributions are kept as in the Output 1.2 design. The conversion clause is what links grants to debt. A third 'scale' window is not recommended: those enterprises belong under guaranteed lending.");
table(s, ["", "Lot 1", "Lot 2"], [
  ["Ticket", "Up to EUR 10,000", "EUR 10,000–40,000"],
  ["Who", "Tier 0–1 micro, start-up, group and community enterprises; licence-holders", "Tier 2, or Tier 1 with a buyer"],
  ["Contribution", "10–20%, largely in kind", "30–50%, may be financed by a partner-lender or RTFF loan"],
  ["Pays for", "Equipment, compliance (tax clearance, licences), design to brief, group assets", "Cold storage, poultry housing, vehicles, laundry and solar equipment, certification"],
  ["Link to finance", "Creates records and readiness for the next step", "Conversion clause: grant becomes the borrower's contribution, cash collateral or group-guarantee seed"],
], { y: 1.45, w: 7.7, colW: [1.6, 3.0, 3.1], fontSize: 16 });
card(s, { x: 8.5, y: 1.45, w: 4.2, h: 5.4, head: "Design rules", body: [
  "Conditional on training; priority for Activity 1.1.1 participants",
  "At least 60% of grants by number and value to women- or youth-led enterprises",
  "Short applications in local languages and on paper; a kgosi's letter accepted for unregistered groups",
  "Tranches against milestones, in kind where possible",
  "Grant managers (BSOs or development banks) contracted separately from lenders",
], size: 16, color: C.accent2 });

s = content("Activity 1.2.3: adapted products through institutions that stay", "Of the four mechanism types in the Output 1.2 design, three are piloted; bonds are a later source of capital for partner banks. Three instruments are added from the evidence. The RTFF sits in this portfolio as one option, with four adjustments requested.");
table(s, ["Mechanism", "Recommendation"], [
  ["Loans with improved conditions", "Pilot: seasonal schedules, low-season grace, orders and movable assets as security, under guarantee windows with 10–20% first loss"],
  ["Revolving funds", "Pilot community revolving funds managed by MFIs; lend in the currency of revenue"],
  ["Savings groups and community finance", "Pilot a community guarantee pool linked to MFIs, graduating to individual loans"],
  ["Social or environmental bonds", "Do not pilot; a later funding source for partner banks' green asset lines"],
  [{ text: "Added: order-backed supply chain finance", bold: true }, "Pilot against standard supply MOUs, anchors paying into a controlled account"],
  [{ text: "Added: association guarantees, buyer-deducted repayment", bold: true }, "Pilot in PA1 with ZATO, LTA, LELOGA or Africa's Eden and an insurer"],
  [{ text: "Added: asset and lease-to-own finance", bold: true }, "Pilot with 15–20% first loss, re-leasing and seasonal grace"],
], { y: 1.45, w: 7.9, colW: [3.0, 4.9], fontSize: 15 });
card(s, { x: 8.7, y: 1.45, w: 4.0, h: 5.4, head: "The RTFF: four adjustments", body: [
  "Seasonal and sales-linked schedules written into loan agreements",
  "A larger Tier 1 share (82.5% of capital now sits in Tier 2)",
  "A loss reserve and lending in the currency of revenue",
  "A national partner for in-country recovery, and a route to national lenders after the pilot",
], size: 15, color: C.accent3 });

s = content("Recommendations by priority value chain", "Summary of Table 1 in F6-D9. Cohort 1 chains start in season one; crafts are market-first (no debt before a buyer contract); conservation services need an outcome payer, so design starts now.");
table(s, ["Value chain", "1.2.1 Connect", "1.2.2 Grant", "1.2.3 Finance", "Start"], [
  ["Fresh produce, poultry, eggs, fish", "Anchor procurement roundtables", "Group grants; cold storage, poultry housing", "Order-backed working capital; community guarantee pool; RTFF", "Cohort 1"],
  ["Guiding, activities, cultural experiences", "DMC and lodge listing sessions; youth sessions", "Safety gear, certification, digital bookability", "Lease-to-own with first loss; seasonal grace", "Cohort 1"],
  ["Transport, transfers, logistics", "Sub-hire contract clinics", "Tax clearance, insurance, vehicle deposit", "Asset finance under guarantee cover; invoice discounting", "Cohort 1"],
  ["Crafts and décor to brief", "Design-to-brief challenge with anchors", "Design and sample-order grants", "PO finance only after a first order", "Market first"],
  ["Laundry, maintenance, solar", "Outsourcing dialogues with operators", "Equipment for youth entrants", "Asset finance against service contracts", "Cohort 1 (small)"],
  ["Conservation and coexistence, honey", "Outcome-funder dialogue (CORB Fund, wildlife credits)", "Beehive fences, corrals, certification", "Results-based finance; revolving funds", "Design now"],
], { y: 1.45, colW: [2.5, 2.6, 2.5, 3.2, 1.3], fontSize: 15 });

s = content("Plenary check B: the recommendations", "Facilitator: 30 minutes. This is the core of the session. Invite lenders and guarantors to respond first on 1.2.3, then BSOs and associations on 1.2.1 and 1.2.2. Record conditions attached to any 'agree'.");
table(s, ["#", "Recommendation to validate", "Agree / amend / reject"], [
  ["B1", "Three activities on one readiness pathway, underpinned by Activity 1.1.1 coaching", ""],
  ["B2", "1.2.1: one platform per delivery core, quarterly, with a lender learning track", ""],
  ["B3", "1.2.2: Lot 1 and Lot 2 as designed, conditional on training, 60% to women- or youth-led", ""],
  ["B4", "1.2.3: three Output 1.2 mechanisms piloted, bonds deferred, three instruments added", ""],
  ["B5", "RTFF as one option, with four adjustments; Botswana route to be decided", ""],
  ["B6", "Value-chain sequencing: cohort 1, market first, design now, second wave", ""],
], { y: 1.45, colW: [0.7, 8.6, 2.8], fontSize: 18 });
ask(s, { x: 0.6, y: 5.25, w: 12.1, h: 1.6, label: "Questions for the room", text: "1. Which institution in your country could carry each mechanism, and what would it need?   2. Are grant contributions and lot sizes right for women, youth and community groups?   3. What would stop an anchor signing a supply MOU with 30-day payment?", color: C.accent2 });

// ---------------- C. M&E and roadmap ----------------
sec("C. Measurement and roadmap");
s = H.add("SECTION");
s.addText("C", { placeholder: "num" });
s.addText("Measurement and roadmap", { placeholder: "title" });
s.addText("One measurement system, two seasons of piloting, three decision points", { placeholder: "sub" });

s = content("One measurement system, built on GM1-D5", "Indicators reuse the 18 GM1-D5 definitions and add only what is specific to finance. Separate outputs (e.g. MSMEs financed) from outcomes and impact (growth, jobs, repayment, lenders continuing), with a gender and youth lens and proportionate environmental measures. Carbon footprint is not realistic yet.");
card(s, { x: 0.6, y: 1.45, w: 3.9, h: 2.4, num: 1, head: "Outputs", body: ["Mechanisms established (O1)", "Finance transactions by product and season (O2)", "Sessions, referrals, grants awarded"], size: 16 });
card(s, { x: 4.72, y: 1.45, w: 3.9, h: 2.4, num: 2, head: "Outcomes", body: ["Share obtaining finance (ref. 20%)", "PAR30 by season (threshold 15%)", "Days for anchors to pay suppliers"], size: 16, color: C.accent2 });
card(s, { x: 8.84, y: 1.45, w: 3.9, h: 2.4, num: 3, head: "Impact and sustainability", body: ["Revenue and jobs by sex and age", "Finance leveraged per euro (at least 1:1)", "Lenders continuing with less support"], size: 16, color: C.accent3 });
table(s, ["Measurement rule", "What it means in practice"], [
  ["Disaggregation by default", "Country, area, value chain, readiness tier; sex, age (one youth band, 18–35) and disability of owners and managers"],
  ["Baseline at intake", "Three baselines before cohort 1: MSME intake (GM3-D11), lender portfolios, anchor procurement"],
  ["Unknown is not zero", "Referral, application, approval and disbursement recorded separately"],
  ["Independent verification", "RTFF milestones and results payments verified; independent review at each gate"],
], { y: 4.05, colW: [2.8, 9.3], fontSize: 15 });

s = content("Roadmap: November 2026 to December 2028, extension sought to mid-2029", "Five phases. Two full tourism seasons are needed so low-season repayment is observed twice. Without the extension to mid-2029, the second low season falls after the final review.");
fig(s, "fig7_roadmap_bal.png", { x: 0.6, y: 1.3, maxW: 12.1, maxH: 5.6, alt: "Indicative roadmap for Output 1.2" });

s = content("Three decision points", "Gate 1 has the F4-D7 stop-or-adjust thresholds. The RTFF future decision should come before Gate 2 so the handover has a destination. Criteria are in the separate Decision Gates document.");
card(s, { x: 0.6, y: 1.45, w: 3.9, h: 3.6, num: 1, head: "Gate 1 · Q1 2028", body: ["Continue, adjust or stop each product after season one", "Stop or adjust if PAR30 exceeds 15% or uptake is below half of target", "Decided by the programme steering group with partners"], size: 16, color: C.accent1 });
card(s, { x: 4.72, y: 1.45, w: 3.9, h: 3.6, num: 2, head: "RTFF future · Q4 2028", body: ["Form, host, capital and national channels after the pilot", "Taken with the KAZA Secretariat, TUI Care Foundation and GIZ", "Tests: capital preserved, legal routes, national channels"], size: 16, color: C.accent3 });
card(s, { x: 8.84, y: 1.45, w: 3.9, h: 3.6, num: 3, head: "Gate 2 · Q4 2028", body: ["Continue, adjust or hand over; taper concessional support", "Tests: repayment by season, 60% women and youth, lenders continuing", "On an independent review"], size: 16, color: C.accent4 });
ask(s, { x: 0.6, y: 5.3, w: 12.1, h: 1.55, label: "For validation", text: "Are the thresholds right? Who should sit at each gate? Should the KAZA Secretariat and SADC FANR receive the gate reviews for regional learning?" });

s = content("Main risks and how the design responds", "Seven of the thirteen risks in F6-D9 rated high impact; these are the ones partners can help with most.");
table(s, ["Risk", "L", "I", "Mitigation"], [
  ["Partner interest does not turn into commitment", "M", "H", "Term-sheet talks now; first loss and fee support; more than one candidate per role"],
  ["Low-season default and seasonal arrears", "M", "H", "Seasonal schedules and grace in agreements; PAR30 stop-or-adjust threshold"],
  ["Currency and exchange control (Zimbabwe; offshore RTFF lending)", "M", "H", "Lend in the currency of revenue; register contracts; loss reserve"],
  ["In-country recovery capacity for the RTFF", "M", "H", "National partner for monitoring and recovery; route to national lenders"],
  ["Project ends before two seasons are observed", "M", "H", "Seek the extension; front-load cohort 1; agree handover before Q4 2028"],
  ["No Botswana RTFF route and Route B not resourced", "H", "M", "Map national alternatives now; decide Route B resources early"],
  ["Thin cohort 1 pipeline of coached, buyer-linked firms", "M", "H", "Open call through associations and connectors; Lot 2 grantees as second round"],
], { y: 1.45, colW: [4.3, 0.5, 0.5, 6.8], fontSize: 17 });
T(s, "L = likelihood; I = impact (H high, M medium, L low)", { x: 0.6, y: 6.6, w: 8, h: 0.3, fontSize: 10, italic: true, color: "6B6B6B" });

// ---------------- D. Regional roles ----------------
sec("D. Regional roles and next steps");
s = content("Proposed regional roles, for discussion", "Present these as proposals. The KAZA Secretariat hosts the regional layer and the RTFF future decision; SADC FANR anchors regional policy alignment and learning across SADC member states. Ask both to say what they can take on and what they need.");
card(s, { x: 0.6, y: 1.45, w: 5.95, h: 4.0, num: 1, head: "KAZA Secretariat", body: [
  "Host the regional layer: annual R-NBT Finance Forum, common readiness diagnostic, supply MOU template and indicator set",
  "Co-decide the RTFF's future arrangements by Q4 2028, and receive the handover of templates",
  "Coordinate with OKACOM under the existing MoU: shared pipeline, CORB Fund as a complementary layer, common indicators",
  "Take studies to Partner State structures for decisions on areas, value chains and criteria",
], size: 16 });
card(s, { x: 6.75, y: 1.45, w: 5.95, h: 4.0, num: 2, head: "SADC FANR", body: [
  "Link Output 1.2 to the SADC TFCA and tourism programmes so pilots inform regional policy",
  "Convene peer learning between national guarantee schemes and development banks on tourism windows",
  "Connect regional finance partners, for example the SADC-DFRC, for resource mobilisation",
  "Receive gate reviews and the pilot evaluation for regional replication",
], size: 16, color: C.accent2 });
ask(s, { x: 0.6, y: 5.65, w: 12.1, h: 1.2, label: "For validation", text: "D1. Do the KAZA Secretariat and SADC FANR accept these roles in principle?   D2. What other regional bodies or programmes (ITC, World Bank, CORB Fund) must be aligned to avoid duplication?" });

s = content("What happens after this session", "Close the plenary: rapporteur reads back the validation log; facilitator confirms the deadline for written comments and who will receive the revised report.");
const steps = [
  ["Read-back", "Rapporteur reads the validation log; the room confirms what was agreed, amended or rejected", "Today"],
  ["Written comments", "Partners send further comments on the validation sheet", "Within 2 weeks"],
  ["Revision", "F6-D9 revised with a log of every change and its source", "2 weeks after comments"],
  ["Oversight Committee", "Summary pack and decisions (F6-D11) presented with the diagnostics and roundtables", "Next sitting"],
  ["Handover", "Readiness pack and handover meeting with GIZ and partners (F6-D12)", "After validation"],
];
steps.forEach(([h, b, w], i) => {
  const x = 0.6 + i * 2.46;
  card(s, { x, y: 1.5, w: 2.3, h: 3.9, num: i + 1, head: h, body: b, size: 14, headSize: 14, color: [C.accent1, C.accent2, C.accent4, C.accent3, C.accent5][i] });
  T(s, w, { x: x + 0.2, y: 5.0, w: 1.9, h: 0.35, fontSize: 12, bold: true, color: C.accent3 });
});
T(s, "Dates are indicative and depend on the date of the roundtable.", { x: 0.6, y: 5.7, w: 12, h: 0.35, fontSize: 12, italic: true, color: "6B6B6B" });

s = H.add("CLOSING");
s.addText("Thank you", { placeholder: "title" });
s.addText([
  { text: "Validation log and written comments to the GIZ Output 1.2 team", options: { breakLine: true } },
  { text: "Full report: F6-D9 Consolidated Synthesis Report (draft for validation)", options: { breakLine: true } },
  { text: "Supporting documents: Decision gates criteria · RTFF pilot and handover indicators · GM1-D5 indicator extract", options: {} },
], { placeholder: "body" });

finish(pres, process.argv[2] || "F6-D10.pptx");
