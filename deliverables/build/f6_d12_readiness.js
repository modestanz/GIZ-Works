// F6-D12 (part 1): Readiness Pack for Output 1.2 handover (TOR: max 10 pages; key decisions, partner contacts,
// first 100-day actions, outstanding risks). Illustrated version: the content is held once below and drawn as
// figures (HTML rendered to PNG with Playwright) rather than tables.
// Usage: node deliverables/build/f6_d12_readiness.js out.docx
const fs = require("fs");
const path = require("path");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, SRC } = K;

const { esc, tone, pill, chip, split, W, page, makeFigures } = require("./fig_lib");
// Blue palette: the olive and forest greens are swapped for blues of similar depth; gold and terracotta stay
const BLUES = {
  "#1F3B2C": "#0F2F4F", // forest -> deep navy
  "#3D5A44": "#1D5C73", // olive -> teal-blue
  "#5E7A63": "#4E8FA0", // sage -> steel blue
  "#3D7A4F": "#2B6F9E", // ready accent
  "#1F5135": "#0F4C75", // ready text
  "#DCEBDD": "#DCEAF4", // ready tint
  "#F3F8F1": "#EEF5FA", // in-place tint
  "#DDE3DA": "#D6E0E8", // card border
  "#9AA79E": "#9AAAB8", // muted grey-green
  "#1b2620": "#1B2430", // body text
  "#5a6660": "#56636F", // muted text
};
const { render, figure } = makeFigures(path.join(__dirname, "f6d12_figs"), { recolor: BLUES, captionColor: "0F4C75" });

// ---------------------------------------------------------------- content (unchanged from the table version)
const deliverables = [
  ["F0 Inception: workplan, method, available resources", "Inception phase", "Submitted", "Workplan, method, lessons from past programmes"],
  ["F1-D4 Financial Landscape Analysis", "Revised draft, 29 Oct 2026", "Feedback awaited", "Lenders, guarantors and support by Partner State; readiness scores"],
  ["F2-D5 Barriers and Opportunities", "Revised draft, 29 Oct 2026", "Submitted", "Barriers and root causes; lender risk views; grant facility design"],
  ["F3-D6 Investment Readiness and Enterprise Strengthening", "5 Nov 2026", "Submitted", "Readiness tiers 0–3; capacity needs; lead BSOs; baseline fields"],
  ["F4-D7 Financing Mechanisms Assessment", "Revised draft, 18 Nov 2026", "Feedback being incorporated", "Mechanism feasibility; blended models; pilot design; partner shortlist"],
  ["F5-D8 Roundtable preparation and documentation", "Draft 2; segment reports, Nov 2026", "Submitted", "Institutional evidence; roundtable and working-session findings"],
  ["F6-D9 Consolidated Synthesis Report", "26 Nov 2026, with change logs", "For validation", "Output 1.2 framework, recommendations, M&E, roadmap, partners"],
  ["F6-D10 Validation presentation and plenary", "Deck; facilitation guide", "Ready", "Materials for the second roundtable"],
  ["F6-D11 Summary pack for the Oversight Committee", "Deck; pack with decision sheets; take-away", "Ready", "Five decisions and the take-away"],
  ["F6-D12 Readiness pack and handover", "This pack; meeting documentation", "This pack", "Decisions, partners, 100 days, risks"],
];
const readiness = [
  ["1.2.1 Dialogue platforms", "Partly ready", "Formats, a cycle every four months, conveners per area; lender learning platform designed; supplier directory started with SIGMA", "Conveners contracted; readiness diagnostic and supply MOU template; first sessions"],
  ["1.2.2 Grant facility", "Not ready", "Lot design, scoring, contribution rules, conversion clause", "Envelope and lot split; grant manual; grant managers"],
  ["1.2.3 Financing mechanisms", "Partly ready", "Mechanisms assessed; pilots and partner shortlist per area", "Partner commitments; first-loss budget line; agreement templates"],
  ["RTFF", "Partly ready", "Design (about 50 loans, from Q1 2027); Chobe–Maun corridor decided in Botswana; three adjustments; 32 indicators", "Selection criteria; referral protocol; in-country recovery"],
  ["M&E", "Partly ready", "GM1-D5 extract; 23 Output 1.2 indicators; gate criteria; results linked to finance decisions (gates, RTFF step-down, grant tranches, first-loss taper)", "Indicator ownership; targets; three baselines, without which the triggers cannot work; one youth band and women-led test (Decision 2)"],
  ["Strategic partnerships", "Partly ready", "Four kinds of partnership and 18 candidates identified (F6-D9 Section 7.6, Annex D)", "Co-learning letter of intent; co-financing for season two; RTFF host by Q4 2028"],
  ["Governance", "Not ready", "Five decisions framed with options; validation and Committee materials ready (F6-D10, F6-D11)", "Roundtable validation; Oversight Committee sitting"],
];
const decisions = {
  taken: [
    ["Keep the two grant lots of the Output 1.2 design; no third lot", "Taken", "GIZ (design)", "Lot 1 up to EUR 10,000; Lot 2 EUR 10,000–40,000"],
    ["Present the RTFF as one financing option among several", "Taken", "GIZ", "Three adjustments proposed to the TUI Care Foundation"],
    ["Work through existing national institutions; no new facility", "Taken", "Synthesis (F6-D9)", "Regional level for standards, learning and the RTFF's future"],
    ["RTFF route in Botswana: the Chobe–Maun corridor", "Taken", "Already decided", "Not before the Oversight Committee"],
  ],
  pending: [
    ["Intervention areas: PA1 and PA2; Zambezi Region if resourced; Angola readiness-first", "Pending", "Oversight Committee", "Calls and agreements need a confirmed geography"],
    ["One youth band (18–35) and one women-led test", "Pending", "Oversight Committee; TUI Care Foundation", "Before RTFF cohort 1 selection"],
    ["Grant-facility envelope and lot split (about 40% / 60%)", "Pending", "Oversight Committee; GIZ", "First Lot 1 window in the 2027 low season"],
    ["First loss and guarantee fees under Activity 1.2.3", "Pending", "Oversight Committee; GIZ", "Main design gap if not allowed"],
    ["Term-sheet talks and decision-gate criteria", "Pending", "Oversight Committee", "Agreements needed by May 2027"],
  ],
  open: [
    ["Project extension to mid-2029", "Pending", "GIZ; funders", "Outside this assignment; needed to observe a second low season"],
    ["TUI Care Foundation minimum entry criteria beyond formal registration", "Open", "TUI Care Foundation", "Risk of a pipeline rejected on first sight"],
    ["Ownership of the key indicators as one shared live document", "Open", "GIZ; SIGMA; TUI", "Outputs separate from impact; youth and gender lens"],
    ["Route of the studies to member states after KAZA Secretariat review", "Open", "KAZA Secretariat", "Member-state comments may come as a second round"],
  ],
};
// partners: [name, role, status, next step, lead]
const partners = {
  fis: [
    ["Zambia (PA1): FNB Zambia, ZANACO, ZCGS, MSMED, CEEC", "Risk-sharing for order-backed supply and guiding; matching grants", "Readiness 4.1; FNB would pay for risk sharing", "Term-sheet talks", "GIZ"],
    ["Zimbabwe (PA1): ECGC, SMEDCO, CBZ, Stanbic, Women's Microfinance Bank", "Tourism guarantee window with first loss; grant manager", "Readiness 3.9; currency rules", "ECGC window talks; register foreign loans", "GIZ"],
    ["Botswana (PA2): CEDA, NDB, NASRIA/BOSRIA, Stanbic, LEA, Youth Development Fund", "National lenders and guarantor alongside the RTFF; BOSRIA window; grant manager (LEA)", "Readiness 3.4; Chobe–Maun corridor decided", "Joint briefing of BOSRIA, CEDA and NDB", "GIZ"],
    ["Namibia (Zambezi Region): NASRIA, DBN, NYDF", "Women and youth guarantee tier (second cohort)", "Readiness 3.2; if resourced", "Decide resourcing", "GIZ"],
  ],
  public: [
    ["State BSOs: SMEDCO with ZIDA (ZW); ZDA and CEEC (ZM); LEA with CEDA (BW); NIPDB (NA); INAPEM (AO)", "Lead the platforms; readiness diagnostic and intake data; grant managers; CEDA, CEEC and SMEDCO also lend", "Proposed as lead BSOs (F6-D9 Annex B); roles not yet agreed", "Confirm lead BSO and grant manager per area; explore training of trainers", "GIZ"],
    ["Tourism authorities: ZTA (ZW); BTO (BW)", "Licensing and grading, certification, links to markets", "Named as platform conveners", "Invite to platforms; discuss simpler licensing for micro operators", "GIZ; lead BSOs"],
    ["District councils: Chobe District Council; Zimbabwe's rural district councils", "Trading licences, market space, outreach to wards and villages", "Not yet engaged on Output 1.2", "Brief on the platforms and local outreach", "Lead BSOs"],
  ],
  strategic: [
    ["KAZA Conservation Trust Fund (SFC, KAZA Secretariat, WWF-US)", "Possible home for the RTFF as a programme account after 2028–2029", "Fund being designed; GBFF funding expected late 2027", "Co-learning letter of intent with the TUI Care Foundation", "GIZ"],
    ["TUI Care Foundation (RTFF)", "Collateral-free buyer-linked loans; carries the RTFF until it is anchored", "GIZ produces the pipeline; criteria open", "Joint meeting with GIZ and SIGMA", "GIZ"],
    ["Funders in KAZA (EU, KfW, IKI, GEF, World Bank, AfDB); verifiers (GreenLoop)", "Co-finance one layer each (grants, first loss, counter-guarantees, recapitalisation); verify milestones", "Not yet approached for Output 1.2", "Co-financing for season two; IKI 2027 call for a joint RTFF–CTF concept", "GIZ"],
  ],
  conversations: [
    ["SADC-DFRC", "Regional resource mobilisation", "Official position awaited", "Follow up; then a concrete proposal", "Consultant, then GIZ"],
    ["OKACOM (CORB Fund)", "Complementary layer in shared communities (~40% overlap)", "MoU with KAZA; synergy note prepared", "Discuss with GIZ Transboundary Water Management project", "GIZ"],
    ["ITC Green Value Chain programme", "Farmer readiness and community tourism in Maun; no lending", "Convergence note (Oct 2026)", "Confirm Maun coverage; agree division of labour", "GIZ"],
    ["KAZA Secretariat; SADC FANR", "Regional layer; RTFF future decision; policy link", "Reviewing the diagnostics", "Agree regional roles at validation", "GIZ"],
    ["SIGMA International", "Pipeline, supplier directory, indicators", "Inception phase", "Joint indicator document; intake baseline", "GIZ"],
  ],
};
// 100 days: phase -> [days, action, owner]
const days100 = [
  ["Days 1–14", "Take over", [
    ["1", "Handover meeting; files transferred to the GIZ project folder; owners and action log agreed", "GIZ; consultant"],
    ["1–14", "TUI Care Foundation, GIZ and SIGMA meeting: minimum entry criteria and screening, pipeline split (funding only or capacity building plus funding), key indicators", "GIZ"],
    ["1–14", "Follow up SADC-DFRC's position; incorporate KAZA Secretariat feedback into F1-D4", "Consultant"],
  ]],
  ["Days 15–30", "Validate", [
    ["15–30", "Second roundtable validation (F6-D10); F6-D9 revised with a change log", "GIZ; consultant"],
    ["15–30", "Prepare the Oversight Committee sitting with the F6-D11 deck, decision sheets and take-away", "GIZ; KAZA Secretariat"],
    ["15–30", "Discuss OKACOM overlap with the GIZ Transboundary Water Management project; confirm ITC's Maun coverage", "GIZ"],
  ]],
  ["Days 31–60", "Decide and open talks", [
    ["31–60", "Oversight Committee decisions recorded; take-away completed with the outcomes and sent to partners", "GIZ; KAZA Secretariat"],
    ["31–60", "Term-sheet talks with ECGC and SMEDCO, FNB Zambia and ZANACO, CEDA, NDB and BOSRIA, NASRIA and DBN, and two anchors per area", "GIZ"],
    ["31–60", "Commission the readiness diagnostic, supply MOU template, intake baseline and grant manual; agree the shared indicator document", "GIZ; SIGMA"],
  ]],
  ["Days 61–100", "Prepare season one", [
    ["61–100", "First platform sessions in PA1 and PA2 (low season), with tourism authorities and district councils invited; supplier directory published", "Lead BSOs; SIGMA"],
    ["61–100", "Grant-manager procurement launched; competition package and Lot 1 call drafted", "GIZ"],
    ["61–100", "RTFF referral and co-financing protocol agreed; intake baselines started; commitments log reviewed monthly", "GIZ; TUI; SIGMA"],
    ["61–100", "Co-learning letter of intent between the RTFF pilot and the KAZA Conservation Trust Fund design, with the TUI Care Foundation", "GIZ; KAZA Secretariat"],
  ]],
];
// risks: [risk, mitigation, F6-D11 decision, owner]
const risks = [
  ["Validation and decisions delayed (Secretariat review; Committee date)", "Agree the route to member states; keep design work moving", "—", "GIZ; KAZA Secretariat"],
  ["Partner interest does not turn into commitment", "Term-sheet talks in the first 60 days; first loss; several candidates per role", "4, 5", "GIZ"],
  ["First loss and guarantee fees not allowed under 1.2.3", "Redesign around guarantee fees and grants as contribution", "4", "GIZ"],
  ["Low-season default", "Seasonal schedules and grace in agreements; first-loss cover; PAR30 threshold at Gate 1", "4", "Lenders; GIZ"],
  ["Currency and exchange control", "Lend in the currency of revenue; loss reserve; register foreign loans in Zimbabwe", "Noted", "GIZ; TUI"],
  ["Thin cohort 1 pipeline, or RTFF criteria that do not match it", "Agree RTFF entry criteria early; open call through associations; Lot 2 grantees as a second round", "3", "GIZ; TUI; SIGMA"],
  ["Inconsistent targeting across instruments", "One youth band (18–35) and one women-led test across grants, the RTFF and M&E", "2", "GIZ; TUI; SIGMA"],
  ["Project ends before two seasons are observed", "Extension decided by GIZ and the funders; front-load cohort 1", "Noted", "GIZ"],
  ["The RTFF and other mechanisms have no home after the pilot", "Co-learning with the KAZA Conservation Trust Fund from 2027; host agreed by Q4 2028", "—", "GIZ; KAZA Sec.; TUI"],
  ["Duplication with ITC, OKACOM, World Bank programmes", "Share criteria and beneficiary lists; align contribution ratios", "—", "GIZ"],
];
const tools = [
  ["Supply MOU", "written orders, payment within 30 days (15 for micro suppliers), notice before termination, optional buyer-deducted repayment."],
  ["RTFF referral and co-financing protocol", "eligibility screen, one-page profile, decision deadline, coded rejection reasons, grant as borrower contribution, seasonal schedule, in-country recovery."],
  ["Grant manual", "lots, eligibility, scoring (market linkage 25%, readiness 20%, R-NBT 20%, inclusion 20%, financing plan 15%), tranches, conversion clause, safeguards."],
  ["Common readiness diagnostic", "intake fields from F6-D9 Annex C, returning a tier (0–3) and a grant-ready, guarantee-ready or loan-ready tag."],
];
const roles = [
  ["Output 1.2 management, decisions, partnerships and co-financing", "GIZ Output 1.2 lead", "KAZA Secretariat; TUI Care Foundation"],
  ["Pipeline, supplier directory, baselines", "SIGMA", "Lead BSOs"],
  ["RTFF criteria, protocol and indicators", "GIZ with the TUI Care Foundation", "SIGMA"],
  ["Platforms (1.2.1) and grant facility (1.2.2)", "Lead state BSOs; grant managers", "GIZ; tourism authorities; district councils"],
  ["Financing pilots (1.2.3)", "Partner lenders and guarantors", "GIZ (first loss, TA)"],
  ["Regional layer and RTFF future", "KAZA Secretariat", "SADC FANR; GIZ"],
  ["Post-contract reporting and handover support", "Consultant (committed hours)", "GIZ"],
];
const supportingDocs = [
  ["Change logs for F6-D9 and the F6-D11 deck; figure source files", "Nov 2026", "Version history"],
  ["GM1-D5 indicator extract; RTFF indicators; decision-gate criteria", "Nov 2026", "M&E and gates"],
  ["KAZA–OKACOM synergy note; ITC convergence note; GIZ–SFC minutes", "Oct–Nov 2026", "Coordination; partnerships"],
];

// ---------------------------------------------------------------- figure styling
// Figure 1: deliverables as a flow
const delivCard = ([n, v, s, h]) => { const [code, ...rest] = n.split(" "); return `<div class="card"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:4px;flex-wrap:wrap"><span class="code">${esc(code)}</span>${pill(s)}</div><div class="t" style="margin-top:6px">${esc(rest.join(" "))}</div><div class="small muted" style="margin-top:3px">${esc(v)}</div><div class="r">→ ${esc(h)}</div></div>`; };
const fig1 = page(`
<div class="band forest">Inception</div><div class="grid" style="grid-template-columns:1fr 2fr">${delivCard(deliverables[0])}<div class="small muted" style="align-self:center;padding-left:6px">Statuses: ${pill("Submitted")} ${pill("Ready")} ${pill("This pack")} complete or ready; ${pill("Feedback awaited")} ${pill("Feedback being incorporated")} ${pill("For validation")} still open</div></div>
<div class="arrow">▼</div>
<div class="band">Studies of the Financial Landscape Analysis, informed by SIGMA’s Macro and Micro Diagnostics</div>
<div class="grid five" style="grid-template-columns:repeat(5,minmax(0,1fr));gap:6px">${deliverables.slice(1, 6).map(delivCard).join("")}</div>
<div class="arrow">▼ consolidated in F6-D9</div>
<div class="band gold">Synthesis, validation, Committee and handover</div>
<div class="grid" style="grid-template-columns:repeat(4,1fr)">${deliverables.slice(6).map(delivCard).join("")}</div>`);

// Figure 2: readiness dashboard
const fig2 = page(`
<div style="display:flex;gap:14px;margin-bottom:8px" class="small">${[["Ready", "can proceed now"], ["Partly ready", "design done, key steps outstanding"], ["Not ready", "depends on a decision or resources not yet in place"]].map(([s, d]) => `<div>${pill(s)} <span class="muted">${esc(d)}</span></div>`).join("")}</div>
<div class="grid" style="grid-template-columns:190px 1fr 1fr;gap:0 8px;margin-bottom:4px"><div></div><div class="t" style="color:#1F5135">✓ In place</div><div class="t" style="color:#7A4E0A">➜ Outstanding</div></div>
${readiness.map(([c, s, inp, out]) => `<div class="grid" style="grid-template-columns:190px 1fr 1fr;gap:8px;margin-bottom:7px">
<div class="card" style="border-left:6px solid ${{ ok: "#3D7A4F", mid: "#C98A2B", no: "#B8563E" }[tone(s)]}"><div class="t">${esc(c)}</div><div style="margin-top:5px">${pill(s)}</div></div>
<div class="card r" style="margin:0;background:#F3F8F1;border-color:#DCEBDD">${esc(inp)}</div>
<div class="card r" style="margin:0;background:#FDF7E9;border-color:#F3E3BF">${esc(out)}</div></div>`).join("")}`);

// Figure 3: key decisions in three columns
const decItem = ([d, s, who, note], i, numbered, showPill) => `<div class="card" style="display:flex;gap:8px;margin-bottom:7px">${numbered ? `<span class="num">${i + 1}</span>` : ""}<div><div class="t" style="font-size:14.5px">${esc(d)}</div>${showPill ? `<div style="margin-top:3px">${pill(s)}</div>` : ""}<div class="small" style="margin-top:4px"><b>Decides:</b> ${esc(who)}</div><div class="small muted" style="margin-top:2px;font-style:italic">${esc(note)}</div></div></div>`;
const fig3 = page(`<div class="grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px">
<div><div class="band">✓ Taken during the assignment (to be confirmed through validation)</div>${decisions.taken.map((d, i) => decItem(d, i, false, false)).join("")}</div>
<div><div class="band terra">Pending at the Oversight Committee (F6-D11)</div>${decisions.pending.map((d, i) => decItem(d, i, true, false)).join("")}</div>
<div><div class="band gold">? Other open questions</div>${decisions.open.map((d, i) => decItem(d, i, false, true)).join("")}</div></div>`);

// Figures 4a and 4b: partners as grouped cards
const pCard = ([n, role, status, next, lead], opts = {}) => {
  const [title, sub] = split(n);
  const m = /Readiness (\d\.\d); ?(.*)/.exec(status);
  const statusHtml = m && opts.score ? `<div style="display:flex;align-items:center;gap:8px;margin-top:5px"><span style="font-size:26px;font-weight:700;color:#1F3B2C;line-height:1">${m[1]}</span><span class="small muted">readiness<br>score</span><span class="small" style="margin-left:4px">${esc(m[2])}</span></div>` : `<div class="small" style="margin-top:5px"><span style="color:#C98A2B">●</span> ${esc(status)}</div>`;
  return `<div class="card"><div class="t">${esc(title)}</div>${sub ? `<div class="small muted" style="margin-top:2px">${esc(sub)}</div>` : ""}<div class="r">${esc(role)}</div>${statusHtml}<div class="small" style="margin-top:4px"><b>Next:</b> ${esc(next)}</div><div style="margin-top:5px">${lead.split("; ").map((l) => chip(l, "fill")).join("")}</div></div>`;
};
const fig4a = page(`<div class="band forest">Financial institutions and guarantors by area</div>
<div class="grid" style="grid-template-columns:1fr 1fr">${partners.fis.map((p) => pCard(p, { score: true })).join("")}</div>
<div class="band">Public institutions: state BSOs, tourism authorities and district councils</div>
<div class="grid" style="grid-template-columns:1fr 1fr 1fr">${partners.public.map((p) => pCard(p)).join("")}</div>`);
const fig4b = page(`<div class="band gold">Strategic partners for sustainability (F6-D9 Annex D)</div>
<div class="grid" style="grid-template-columns:1fr 1fr 1fr">${partners.strategic.map((p) => pCard(p)).join("")}</div>
<div class="band terra">Partnership conversations handed over</div>
<div class="grid" style="grid-template-columns:1fr 1fr 1fr">${partners.conversations.map((p) => pCard(p)).join("")}</div>`);

// Figure 5: 100 days timeline
const phaseCol = ["#5E7A63", "#3D5A44", "#B8563E", "#1F3B2C"];
const fig5 = page(`<div class="grid" style="grid-template-columns:repeat(4,1fr);gap:8px">
${days100.map(([d, h], i) => `<div style="background:${phaseCol[i]};color:#fff;clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,${i ? "8% 50%" : "0 50%"});padding:7px 10px 7px ${i ? 22 : 12}px"><div style="font-size:16px;font-weight:700">${esc(d)}</div><div style="font-size:14px">${esc(h)}</div></div>`).join("")}
${days100.map(([, , acts], i) => `<div>${acts.map(([dd, a, o]) => `<div class="card" style="margin-bottom:7px;border-top:4px solid ${phaseCol[i]}">${dd === "1" ? `<div class="small" style="font-weight:700;color:${phaseCol[i]};margin-bottom:2px">Day 1</div>` : ""}<div class="r" style="margin-top:0">${esc(a)}</div><div style="margin-top:6px">${o.split("; ").map((x) => chip(x)).join("")}</div></div>`).join("")}</div>`).join("")}</div>`);

// Figure 6: risks grouped by how they are handled
const rCard = ([r, mit, dec, own]) => `<div class="card" style="margin-bottom:7px;display:flex;gap:10px"><div style="flex:1"><div class="t" style="font-size:14.5px">${esc(r)}</div><div class="r">${esc(mit)}</div><div style="margin-top:5px">${own.split("; ").map((x) => chip(x)).join("")}</div></div><div style="flex:none;display:flex;gap:4px;align-items:flex-start">${dec === "—" ? "" : dec === "Noted" ? `<span class="pill mid">Noted</span>` : dec.split(", ").map((d) => `<span class="num">${d}</span>`).join("")}</div></div>`;
const byDec = risks.filter((r) => /\d/.test(r[2])), noted = risks.filter((r) => r[2] === "Noted"), other = risks.filter((r) => r[2] === "—");
const fig6 = page(`<div class="grid" style="grid-template-columns:1fr 1fr;gap:12px">
<div><div class="band terra">Reduced by an F6-D11 decision (numbered)</div>${byDec.map(rCard).join("")}</div>
<div><div class="band gold">Noted: not for the Committee</div>${noted.map(rCard).join("")}<div class="band">Managed outside the Committee’s decisions</div>${other.map(rCard).join("")}</div></div>`);

// Figure 7: four tools to draft
const fig7 = page(`<div class="grid" style="grid-template-columns:1fr 1fr;gap:9px">${tools.map(([t, d], i) => `<div class="card" style="display:flex;gap:10px;border-left:6px solid ${["#3D5A44", "#C98A2B", "#B8563E", "#1F3B2C"][i]}"><span class="num" style="background:${["#3D5A44", "#C98A2B", "#B8563E", "#1F3B2C"][i]}">${i + 1}</span><div><div class="t">${esc(t)}</div><div class="r">${esc(d.charAt(0).toUpperCase() + d.slice(1))}</div></div></div>`).join("")}</div>`);

// Figure 8: roles after handover
const fig8 = page(`<div class="grid" style="grid-template-columns:300px 24px 210px 24px 1fr;gap:6px 0;align-items:center">
<div class="small muted"><b>Function</b></div><div></div><div class="small muted"><b>Lead</b></div><div></div><div class="small muted"><b>Support</b></div>
${roles.map(([f, l, s]) => `<div class="card t" style="font-size:14.5px">${esc(f)}</div><div class="arrow" style="margin:0">➜</div><div>${chip(l, "fill")}</div><div class="arrow" style="margin:0;color:#9AA79E">＋</div><div>${s.split("; ").map((x) => chip(x)).join("")}</div>`).join("")}</div>`);

const FIGS = { fig1, fig2, fig3, fig4a, fig4b, fig5, fig6, fig7, fig8 };

// ---------------------------------------------------------------- render and assemble
async function main() {
  await render(FIGS);
  const children = [
    H1("1. Purpose and status"),
    P("This readiness pack hands over the work of the Financial Landscape Analysis workstream on Output 1.2 financial mechanisms for R-NBT MSMEs to GIZ, the KAZA Secretariat, the SADC Secretariat and the officers responsible for implementing Output 1.2. As the terms of reference require, it summarises the **key decisions**, the **partners and contacts**, the **first 100-day actions** and the **outstanding risks**. It is Part 1 of F6-D12; Part 2 is the handover meeting documentation. The workstream’s studies (F1-D4 to F5-D8) were informed by SIGMA’s Macro and Micro Diagnostics and consolidated in F6-D9; Figure 1 shows every deliverable and its status."),
    P("Status is as of 27 November 2026. The designs are complete (F6-D9, with change logs), and the materials for validation (F6-D10 deck and facilitation guide) and for the Oversight Committee (F6-D11 deck, summary pack with decision sheets, and take-away) are ready. Implementation depends on validation at the second roundtable, on the Committee’s five decisions and on partner commitments. The consultant remains available after contract closure for reporting and handover, drawing on hours already committed. Figure 2 rates each component: **Ready** (can proceed now), **Partly ready** (design done, key steps outstanding), **Not ready** (depends on a decision or resources not yet in place)."),
    ...figure("fig1", "Financial Landscape Analysis deliverables"),
    ...figure("fig2", "Readiness at a glance"),

    H1("2. Key decisions"),
    P("Figure 3 shows the decisions taken during the assignment and those still pending, with who decides. The five Oversight Committee decisions are set out with options in the F6-D11 decision sheets."),
    ...figure("fig3", "Key decisions taken and pending"),

    H1("3. Partners and contacts"),
    P("Figures 4 and 5 show the institutions to work with in each area, the strategic partners proposed to sustain the RTFF and the other mechanisms (F6-D9 Section 7.6 and Annex D) and the partnership conversations that pass to GIZ, with their status, next step and lead. No institution has yet committed to a pilot role. Named contacts and contact details are held in the stakeholder databases annexed to F1-D4 and F2-D5 and in the consultation records handed over at the meeting; they are not reproduced here."),
    ...figure("fig4a", "Partners, status and next step: financial institutions by area and public institutions"),
    ...figure("fig4b", "Partners, status and next step: strategic partners and partnership conversations"),

    H1("4. First 100 days after handover"),
    P("Figure 6 sets out the first 100 days, counted from the handover meeting (day 1), assuming the second roundtable and the Oversight Committee meet within the first two months. Owners are proposals for confirmation at the handover meeting."),
    ...figure("fig5", "First 100-day actions and proposed owners"),

    H1("5. Outstanding risks"),
    P("Figure 7 shows the risks most affected by the handover, with the mitigation, the F6-D11 decision that reduces each (noted: not for the Committee) and the owner. The full register is in F6-D9 Table 19."),
    ...figure("fig6", "Outstanding risks"),

    H1("6. Documents, templates and roles"),
    P("The deliverables in Figure 1 and the supporting documents below are transferred at the handover meeting; Figure 9 sets out who leads each function after handover. Supporting documents handed over:"),
    ...B(supportingDocs.map(([d, v, u]) => `**${d}** (${v}): ${u.charAt(0).toLowerCase() + u.slice(1)}.`)),
    P("Four tools still need drafting; their outlines are in F6-D9 (Sections 5.1–5.3 and Annex C):"),
    ...figure("fig7", "Four tools still to draft"),
    ...figure("fig8", "Roles after handover (proposed)"),
    SRC("Sources: F6-D9 and its sources; F6-D10; F6-D11; GIZ–consultant close-out discussion; ITC, OKACOM and SFC notes (Oct–Nov 2026)."),
  ];

  await buildDoc({
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
}
main().catch((e) => { console.error(e); process.exit(1); });
