// F6-D12 (part 1): Readiness Pack for Output 1.2 handover (TOR: max 10 pages; key decisions, partner contacts,
// first 100-day actions, outstanding risks)
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC } = K;

const G = "E2EFDA", A = "FFF2CC", R = "F8D7D0";
const st = (label) => ({ Ready: G, "Partly ready": A, "Not ready": R, Taken: G, Pending: A, Open: A }[label]);
const row = (cells, si) => ({ cells, fills: cells.map((_, i) => (i === si ? st(cells[i]) : undefined)) });

const children = [
  H1("1. Purpose and status"),
  P("This readiness pack hands over the Output 1.2 work on financial mechanisms for R-NBT MSMEs to GIZ, the KAZA Secretariat, the SADC Secretariat and the officers responsible for implementing Output 1.2. As the terms of reference require, it summarises the **key decisions**, the **partners and contacts**, the **first 100-day actions** and the **outstanding risks**. It is Part 1 of F6-D12; Part 2 is the handover meeting documentation."),
  P("Status is as of November 2026. The designs are complete (F6-D9), but implementation depends on validation at the second roundtable (F6-D10), on the Oversight Committee decisions (F6-D11) and on partner commitments. The consultant remains available after contract closure for reporting and handover, drawing on hours already committed. Ratings: **Ready** (can proceed now), **Partly ready** (design done, key steps outstanding), **Not ready** (depends on a decision or resources not yet in place)."),
  ...table("Readiness at a glance", ["Component", "Status", "In place", "Outstanding"], [2100, 1250, 3200, 3196], [
    row(["1.2.1 Dialogue platforms", "Partly ready", "Formats, a cycle every four months, conveners per area; supplier directory started with SIGMA", "Conveners contracted; readiness diagnostic and supply MOU template; first sessions"], 1),
    row(["1.2.2 Grant facility", "Not ready", "Lot design, scoring, contribution rules, conversion clause", "Envelope and lot split; grant manual; grant managers"], 1),
    row(["1.2.3 Financing mechanisms", "Partly ready", "Mechanisms assessed; pilots and partner shortlist per area", "Partner commitments; first-loss budget line; agreement templates"], 1),
    row(["RTFF", "Partly ready", "Design (about 50 loans, from Q1 2027); Chobe–Maun corridor decided in Botswana; four adjustments; 32 indicators", "Selection criteria; referral protocol; in-country recovery"], 1),
    row(["M&E", "Partly ready", "GM1-D5 extract; 23 Output 1.2 indicators; gate criteria", "Indicator ownership; targets; three baselines"], 1),
    row(["Governance", "Not ready", "Five decisions framed with options (F6-D11)", "Roundtable validation; Oversight Committee sitting"], 1),
  ]),

  H1("2. Key decisions"),
  P("Table 2 lists the decisions taken during the assignment and those still pending, with who decides. The five Oversight Committee decisions are set out with options in the F6-D11 decision sheets."),
  ...table("Key decisions taken and pending", ["Decision", "Status", "Who decides", "Note"], [3700, 1050, 2300, 2696], [
    { band: "Taken during the assignment (to be confirmed through validation)" },
    row(["Keep the two grant lots of the Output 1.2 design; no third lot", "Taken", "GIZ (design)", "Lot 1 up to EUR 10,000; Lot 2 EUR 10,000–40,000"], 1),
    row(["Present the RTFF as one financing option among several", "Taken", "GIZ", "Four adjustments proposed to the TUI Care Foundation"], 1),
    row(["Work through existing national institutions; no new facility", "Taken", "Synthesis (F6-D9)", "Regional level for standards, learning and the RTFF's future"], 1),
    row(["RTFF route in Botswana: the Chobe–Maun corridor", "Taken", "Already decided", "Not before the Oversight Committee"], 1),
    { band: "Pending at the Oversight Committee (F6-D11)" },
    row(["1. Intervention areas: PA1 and PA2; Zambezi Region if resourced; Angola readiness-first", "Pending", "Oversight Committee", "Calls and agreements need a confirmed geography"], 1),
    row(["2. One youth band (18–35) and one women-led test", "Pending", "Oversight Committee; TUI Care Foundation", "Before RTFF cohort 1 selection"], 1),
    row(["3. Grant-facility envelope and lot split (about 40% / 60%)", "Pending", "Oversight Committee; GIZ", "First Lot 1 window in the 2027 low season"], 1),
    row(["4. First loss and guarantee fees under Activity 1.2.3", "Pending", "Oversight Committee; GIZ", "Main design gap if not allowed"], 1),
    row(["5. Term-sheet talks and decision-gate criteria", "Pending", "Oversight Committee", "Agreements needed by May 2027"], 1),
    { band: "Other open questions" },
    row(["Project extension to mid-2029", "Pending", "GIZ; funders", "Outside this assignment; needed to observe a second low season"], 1),
    row(["TUI Care Foundation minimum entry criteria beyond formal registration", "Open", "TUI Care Foundation", "Risk of a pipeline rejected on first sight"], 1),
    row(["Ownership of the key indicators as one shared live document", "Open", "GIZ; SIGMA; TUI", "Outputs separate from impact; youth and gender lens"], 1),
    row(["Route of the studies to member states after KAZA Secretariat review", "Open", "KAZA Secretariat", "Member-state comments may come as a second round"], 1),
  ]),

  H1("3. Partners and contacts"),
  P("Table 3 lists the institutions to work with in each area and the partnership conversations that pass to GIZ, with their status and next step. No institution has yet committed to a pilot role. Named contacts and contact details are held in the stakeholder databases annexed to F1-D4 and F2-D5 and in the consultation records handed over at the meeting; they are not reproduced here."),
  ...table("Partners, status and next step", ["Partner", "Role in Output 1.2", "Status (Nov 2026)", "Next step", "Lead"], [1900, 2300, 2300, 2146, 1100], [
    { band: "Financial institutions and guarantors by area" },
    ["Zambia (PA1): FNB Zambia, ZANACO, ZCGS, MSMED, CEEC", "Risk-sharing for order-backed supply and guiding; matching grants", "Readiness 4.1; FNB would pay for risk sharing", "Term-sheet talks", "GIZ"],
    ["Zimbabwe (PA1): ECGC, SMEDCO, CBZ, Stanbic, Women's Microfinance Bank", "Tourism guarantee window with first loss; grant manager", "Readiness 3.9; currency rules", "ECGC window talks; register foreign loans", "GIZ"],
    ["Botswana (PA2): CEDA, NDB, NASRIA/BOSRIA, Stanbic, LEA, Youth Development Fund", "National lenders and guarantor alongside the RTFF; BOSRIA window; grant manager (LEA)", "Readiness 3.4; Chobe–Maun corridor decided", "Joint briefing of BOSRIA, CEDA and NDB", "GIZ"],
    ["Namibia (Zambezi Region): NASRIA, DBN, NYDF", "Women and youth guarantee tier (second cohort)", "Readiness 3.2; if resourced", "Decide resourcing", "GIZ"],
    { band: "Partnership conversations handed over" },
    ["TUI Care Foundation (RTFF)", "Collateral-free buyer-linked loans", "GIZ produces the pipeline; criteria open", "Joint meeting with GIZ and SIGMA", "GIZ"],
    ["SADC-DFRC", "Regional resource mobilisation", "Official position awaited", "Follow up; then a concrete proposal", "Consultant, then GIZ"],
    ["OKACOM (CORB Fund)", "Complementary layer in shared communities (~40% overlap)", "MoU with KAZA; synergy note prepared", "Discuss with GIZ Transboundary Water Management project", "GIZ"],
    ["ITC Green Value Chain programme", "Farmer readiness and community tourism in Maun; no lending", "Convergence note (Oct 2026)", "Confirm Maun coverage; agree division of labour", "GIZ"],
    ["CEDA, DBN, LEA, SMEDCO (capacity)", "Training of trainers, sponsored training", "Not in the facility for now", "Explore capacity-building ties", "GIZ"],
    ["KAZA Secretariat; SADC FANR", "Regional layer; RTFF future decision; policy link", "Reviewing the diagnostics", "Agree regional roles at validation", "GIZ"],
    ["SIGMA International", "Pipeline, supplier directory, indicators", "Inception phase", "Joint indicator document; intake baseline", "GIZ"],
  ]),

  H1("4. First 100 days after handover"),
  P("Table 4 sets out the first 100 days, counted from the handover meeting (day 1), assuming the second roundtable and the Oversight Committee meet within the first two months. Owners are proposals for confirmation at the handover meeting."),
  ...table("First 100-day actions", ["Days", "Action", "Owner (proposed)"], [1100, 6646, 2000], [
    { band: "Days 1–14: take over" },
    ["1", "Handover meeting; files transferred to the GIZ project folder; owners and action log agreed", "GIZ; consultant"],
    ["1–14", "TUI Care Foundation, GIZ and SIGMA meeting: minimum entry criteria and screening, pipeline split (funding only or capacity building plus funding), key indicators", "GIZ"],
    ["1–14", "Follow up SADC-DFRC's position; incorporate KAZA Secretariat feedback into F1-D4", "Consultant"],
    { band: "Days 15–30: validate" },
    ["15–30", "Second roundtable validation (F6-D10); F6-D9 revised with a change log", "GIZ; consultant"],
    ["15–30", "Prepare the Oversight Committee sitting with the F6-D11 decision sheets", "GIZ; KAZA Secretariat"],
    ["15–30", "Discuss OKACOM overlap with the GIZ Transboundary Water Management project; confirm ITC's Maun coverage", "GIZ"],
    { band: "Days 31–60: decide and open talks" },
    ["31–60", "Oversight Committee decisions recorded and communicated to partners; extension request prepared", "GIZ; KAZA Secretariat"],
    ["31–60", "Term-sheet talks with ECGC and SMEDCO, FNB Zambia and ZANACO, CEDA, NDB and BOSRIA, NASRIA and DBN, and two anchors per area", "GIZ"],
    ["31–60", "Commission the readiness diagnostic, supply MOU template, intake baseline and grant manual; agree the shared indicator document", "GIZ; SIGMA"],
    { band: "Days 61–100: prepare season one" },
    ["61–100", "First platform sessions in PA1 and PA2 (low season); supplier directory published", "Lead BSOs; SIGMA"],
    ["61–100", "Grant-manager procurement launched; competition package and Lot 1 call drafted", "GIZ"],
    ["61–100", "RTFF referral and co-financing protocol agreed; intake baselines started; commitments log reviewed monthly", "GIZ; TUI; SIGMA"],
  ]),

  H1("5. Outstanding risks"),
  P("Table 5 lists the risks most affected by the handover, with the mitigation and who watches each. The full risk register is in F6-D9 Table 20."),
  ...table("Outstanding risks", ["Risk", "Mitigation", "Owner"], [3300, 4646, 1800], [
    ["Validation and decisions delayed (Secretariat review before member states; Committee date)", "Agree the route to member states; table decisions with the F6-D11 sheets; keep design work moving", "GIZ; KAZA Secretariat"],
    ["Partner interest does not turn into commitment", "Term-sheet talks in the first 60 days; first loss and fee support; more than one candidate per role", "GIZ"],
    ["First loss and guarantee fees not allowed under 1.2.3", "Decide at the Committee; otherwise redesign around guarantee fees and grants as contribution", "GIZ"],
    ["RTFF criteria do not match the pipeline", "Agree minimum entry criteria early; use survey and coaching data to shape them", "GIZ; TUI"],
    ["Project ends before two seasons are observed", "Request the extension early; front-load cohort 1; agree handover before Q4 2028", "GIZ"],
    ["Duplication with ITC, OKACOM, World Bank programmes", "Share criteria and beneficiary lists; align contribution ratios", "GIZ"],
  ]),

  H1("6. Documents, templates and roles"),
  P("All documents are transferred at the handover meeting. Table 6 lists them, and Table 7 sets out who leads each function after handover."),
  ...table("Documents handed over", ["Document", "Version", "Use"], [5200, 2100, 2446], [
    ["F1-D4 to F5-D8 finance studies and roundtable finance segment reports", "Revised drafts, Oct–Nov 2026", "Evidence base"],
    ["F6-D9 Consolidated Synthesis Report", "Draft for validation", "Reference for all decisions"],
    ["F6-D10 validation deck and facilitation guide; F6-D11 summary pack and deck", "Nov 2026", "Roundtable; Committee"],
    ["GM1-D5 indicator extract; RTFF indicators; decision-gate criteria", "Nov 2026", "M&E and gates"],
    ["KAZA–OKACOM synergy note; ITC convergence note", "Oct–Nov 2026", "Coordination"],
  ]),
  P("Four tools still need drafting; their outlines are in F6-D9 (Sections 5.1–5.3 and Annex C):"),
  ...B([
    "**Supply MOU:** written orders, payment within 30 days (15 for micro suppliers), notice before termination, procurement targets, optional buyer-deducted repayment.",
    "**RTFF referral and co-financing protocol:** eligibility screen, one-page profile, decision deadline, coded rejection reasons, grant as borrower contribution, seasonal schedule, in-country recovery.",
    "**Grant manual:** lots, eligibility, scoring (market linkage 25%, readiness 20%, R-NBT 20%, inclusion 20%, financing plan 15%), tranches, conversion clause, safeguards.",
    "**Common readiness diagnostic:** intake fields from F6-D9 Annex C, returning a tier (0–3) and a grant-ready, guarantee-ready or loan-ready tag.",
  ]),
  ...table("Roles after handover (proposed)", ["Function", "Lead", "Support"], [4200, 2900, 2646], [
    ["Output 1.2 management, decisions and partnerships", "GIZ Output 1.2 lead", "KAZA Secretariat"],
    ["Pipeline, supplier directory, baselines", "SIGMA", "Lead BSOs"],
    ["RTFF criteria, protocol and indicators", "GIZ with the TUI Care Foundation", "SIGMA"],
    ["Platforms (1.2.1) and grant facility (1.2.2)", "Lead BSOs; grant managers", "GIZ"],
    ["Financing pilots (1.2.3)", "Partner lenders and guarantors", "GIZ (first loss, TA)"],
    ["Regional layer and RTFF future", "KAZA Secretariat", "SADC FANR; GIZ"],
    ["Post-contract reporting and handover support", "Consultant (committed hours)", "GIZ"],
  ]),
  SRC("Sources: F6-D9 and its source reports; F6-D11 decision sheets; GIZ–consultant close-out discussion (November 2026); ITC convergence note; KAZA–OKACOM synergy note."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT Output 1.2 · F6-D12 Readiness Pack — Handover Version",
  cover: {
    title: "Output 1.2 Readiness Pack",
    subtitle: "Key Decisions, Partners and Contacts, First 100-Day Actions and Outstanding Risks for the Handover of Output 1.2",
    code: "F6-D12: Readiness Pack and Handover Meeting Documentation (Part 1)",
    codeLine: "Read with Part 2, the handover meeting documentation, and the F6-D9 Consolidated Synthesis Report",
    dateLine: "November 2026",
    status: "HANDOVER VERSION",
  },
  children,
  toc: false,
});
