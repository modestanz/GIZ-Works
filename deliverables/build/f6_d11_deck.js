// F6-D11: Summary pack for the Oversight Committee (16 slides, blue-teal palette; narrative in speaker notes)
// Integrated with the Macro Diagnostic, the destination Micro Diagnostics and the Roundtables; built for an in-person decision sitting.
// Usage: node deliverables/build/f6_d11_deck.js out.pptx
const { newDeck, makeHelpers, finish, usePalette, HEX } = require("./deck_lib");
usePalette("blue");

const FOOT = "KAZA R-NBT · Output 1.2 summary pack for the Oversight Committee (F6-D11) · Draft for decision";
const { pres, C } = newDeck({ title: "Output 1.2 Summary Pack for the Oversight Committee", subject: "F6-D11 integrated presentation for decision", footer: FOOT });
const H = makeHelpers(pres, C);
const { sec, content, T } = H;
const S = pres.shapes;

// ---------------- helpers ----------------
const circle = (s, x, y, d, color, text, size = 16) => {
  s.addShape(S.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color } });
  if (text !== undefined) T(s, String(text), { x, y, w: d, h: d, fontSize: size, bold: true, color: C.background1, align: "center", valign: "middle" });
};
const box = (s, { x, y, w, h, fill, line, text, size = 14, color, bold, align = "center", valign = "middle", radius = 0.08, italic }) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: radius, fill: { color: fill }, line: { color: line || fill, width: 1.25 } });
  if (text !== undefined) T(s, text, { x: x + 0.1, y: y + 0.03, w: w - 0.2, h: h - 0.06, fontSize: size, color: color || C.text1, bold, italic, align, valign });
};
const arrow = (s, x1, y1, x2, y2, color, width = 2) => {
  const o = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(Math.abs(x2 - x1), 0.001), h: Math.max(Math.abs(y2 - y1), 0.001), line: { color, width, endArrowType: "triangle" } };
  if ((x2 < x1) !== (y2 < y1)) o.flipH = true;
  s.addShape(S.LINE, o);
};
const bullets = (items, o = {}) => items.map((t, k) => ({ text: t, options: { bullet: { indent: o.indent || 12 }, breakLine: k < items.length - 1, paraSpaceAfter: o.space ?? 6 } }));
// "Informs Decision ..." chip under the title
const chip = (s, nums, label = "Informs") => {
  const w = 1.55 + nums.length * 0.5;
  box(s, { x: 0.6, y: 1.22, w, h: 0.4, fill: "F3E3DC", line: HEX.terra, radius: 0.2 });
  T(s, label + (nums.length > 1 ? " decisions" : " decision"), { x: 0.72, y: 1.22, w: 1.45, h: 0.4, fontSize: 12, bold: true, color: HEX.terraDk, valign: "middle" });
  nums.forEach((n, i) => circle(s, 2.12 + i * 0.5, 1.26, 0.32, HEX.terra, n, 11));
};
const chartText = { catAxisLabelFontFace: "+mn-lt", valAxisLabelFontFace: "+mn-lt", dataLabelFontFace: "+mn-lt", titleFontFace: "+mn-lt", legendFontFace: "+mn-lt" };
const DEC = [
  "Intervention areas for Output 1.2",
  "One youth band (18–35) and one women-led test",
  "Grant-facility envelope and lot split",
  "First loss and guarantee fees under Activity 1.2.3",
  "Project extension to mid-2029",
  "Term-sheet talks and decision-gate criteria",
];

// ---------------- 1. Cover ----------------
sec("Opening");
let s = H.add("TITLE_CENTER");
s.addText("F6-D11 · Oversight Committee · For decision", { placeholder: "kicker" });
s.addText("From diagnosis to decisions: financing R-NBT MSMEs in KAZA", { placeholder: "title" });
s.addText("Output 1.2 recommendations, presented with the Macro Diagnostic, the destination Micro Diagnostics and the Roundtables", { placeholder: "sub" });
s.addText("Presented by Modesta Nyirenda, MNZ Consult, with the GIZ KAZA R-NBT team · [Date and venue to be confirmed] · Draft for decision", { placeholder: "meta" });
s.addNotes(
`Welcome and purpose (2 minutes). Chair opens; presenter introduces.
- F6-D11 is the summary pack that brings the Output 1.2 recommendations to the Oversight Committee, presented together with the Macro Diagnostic, the destination Micro Diagnostics and the Roundtables (SIGMA), so that the Committee can take the decisions Output 1.2 needs to move from design to agreements.
- The pack has two parts: this presentation, and a printed summary pack with one decision sheet per decision, a draft decision record and items for noting. Members should have the printed decision sheets in front of them.
- The full evidence is in the F6-D9 Consolidated Synthesis Report (draft for validation, November 2026); findings were presented for validation to GIZ and regional partners, including SADC FANR and the KAZA Secretariat (F6-D10).
- Content decisions belong to the Committee and the Partner States. The presenter explains the evidence and the recommendations and answers questions; the presenter does not take part in the decisions.`);

// ---------------- 2. Decisions and agenda ----------------
s = content("Six decisions today, in about 75 minutes");
T(s, "For decision", { x: 0.6, y: 1.3, w: 6.8, h: 0.4, fontSize: 17, bold: true, color: C.text2, fontFace: "Cambria" });
DEC.forEach((d, i) => {
  const y = 1.85 + i * 0.7;
  s.addShape(S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 6.8, h: 0.58, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
  circle(s, 0.7, y + 0.05, 0.48, HEX.terra, i + 1, 15);
  T(s, d, { x: 1.35, y, w: 5.95, h: 0.58, fontSize: 15.5, valign: "middle" });
});
T(s, "Already decided, for noting: the RTFF's Chobe–Maun corridor in Botswana (slide 13)", { x: 0.6, y: 6.8 - 0.05, w: 6.8, h: 0.35, fontSize: 12, italic: true, color: "4A4A4A" });
// agenda column
T(s, "How the sitting runs", { x: 8.0, y: 1.3, w: 4.7, h: 0.4, fontSize: 17, bold: true, color: C.text2, fontFace: "Cambria" });
const ag = [
  ["5", "Purpose and how we decide", "slides 1–3", HEX.sage],
  ["15", "What we know", "slides 4–7", HEX.olive],
  ["15", "What we propose", "slides 8–12", HEX.green],
  ["30", "Decisions 1–6", "slides 13–14", HEX.terra],
  ["10", "Read-back and next 100 days", "slides 15–16", HEX.forest],
];
let ay = 1.85;
ag.forEach(([m, t, sl, col]) => {
  const h = 0.5 + Number(m) * 0.028;
  s.addShape(S.RECTANGLE, { x: 8.0, y: ay, w: 0.14, h: h - 0.08, fill: { color: col }, line: { color: col } });
  T(s, [{ text: m + " min", options: { bold: true, color: col, fontSize: 15 } }], { x: 8.3, y: ay, w: 1.05, h: h - 0.08, valign: "middle" });
  T(s, [{ text: t, options: { bold: true, breakLine: true } }, { text: sl, options: { color: "6B6B6B", fontSize: 11.5 } }], { x: 9.35, y: ay, w: 3.4, h: h - 0.08, fontSize: 14, valign: "middle" });
  ay += h;
});
s.addNotes(
`What the Committee is asked to do today (3 minutes).
- Open with the decisions so that members listen for the evidence behind each. The six decisions are those the F6-D9 synthesis lists as needed now, less the RTFF route in Botswana, where the Chobe–Maun corridor has already been decided; each has a decision sheet in the printed pack (background, options, recommendation, implications, evidence and next steps).
  1. Confirm the intervention areas for Output 1.2: the programme now plans two priority areas, while Output 1.2 foresees three.
  2. Adopt one youth band (18–35) and one women-led test (majority ownership or decision-making) across the grant facility, the RTFF and the M&E framework.
  3. Confirm the grant-facility envelope and the split between Lot 1 and Lot 2.
  4. Confirm whether first-loss cover and guarantee fees can sit under Activity 1.2.3.
  5. Request the project extension to mid-2029.
  6. Mandate term-sheet talks with the shortlisted partners and endorse the decision-gate criteria.
- Items for noting, which do not need a decision today: the Chobe–Maun corridor, already decided; validation status of the reports; RTFF selection criteria, pipeline and indicators; the strategic partnerships proposed to sustain the RTFF and other mechanisms; and the handover (F6-D12).
- Proposed timing: about 75 minutes. The evidence and the proposal are kept to 30 minutes so that most of the time goes to the decisions. If time is short, the Chair may take Decisions 1, 2 and 5 first, which are the most time-critical.`);

// ---------------- 3. How we will decide ----------------
s = content("How the Committee will decide, decision by decision");
const flow = [
  ["Present", "2 min", "Presenter reads the recommendation from the decision sheet", HEX.sage],
  ["Clarify", "3 min", "Questions of clarification only", HEX.olive],
  ["Views", "1 min each", "Each Partner State and regional partner, in turn", HEX.green],
  ["Decide", "", "Chair tests for consent: agree, amend or defer", HEX.terra],
  ["Record", "", "Rapporteur reads back the wording, owner and date", HEX.forest],
];
flow.forEach(([h, t, d, col], i) => {
  const x = 0.6 + i * 2.45;
  s.addShape(S.CHEVRON, { x, y: 1.4, w: 2.55, h: 0.9, fill: { color: col }, line: { color: C.background1, width: 1 } });
  T(s, [{ text: h, options: { bold: true, fontSize: 16, breakLine: !!t } }, ...(t ? [{ text: t, options: { fontSize: 11.5 } }] : [])], { x: x + 0.4, y: 1.4, w: 1.75, h: 0.9, color: C.background1, align: "center", valign: "middle" });
  T(s, d, { x: x + 0.1, y: 2.4, w: 2.25, h: 0.85, fontSize: 13, align: "center", valign: "top" });
});
const outc = [
  ["Agree", HEX.green, "The recommendation is adopted as stated in the decision sheet"],
  ["Amend", HEX.gold, "Adopted with conditions or changes, recorded word for word"],
  ["Defer", HEX.terra, "Not yet: the Committee names what it needs, from whom and by when"],
];
T(s, "Three possible outcomes for each decision", { x: 0.6, y: 3.4, w: 8, h: 0.4, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria" });
outc.forEach(([h, col, d], i) => {
  const x = 0.6 + i * 4.1;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 3.9, w: 3.9, h: 1.45, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
  box(s, { x: x + 0.2, y: 4.08, w: 1.3, h: 0.45, fill: col, text: h, size: 15, bold: true, color: C.background1, radius: 0.22 });
  T(s, d, { x: x + 0.2, y: 4.6, w: 3.55, h: 0.7, fontSize: 13.5, valign: "top" });
});
const rules = ["Decisions belong to the Committee and the Partner States; the presenter explains but does not decide", "Budget and scope questions go to a parking lot and are answered in writing", "Every decision is read back before the sitting closes (slide 16)"];
s.addShape(S.ROUNDED_RECTANGLE, { x: 0.6, y: 5.55, w: 12.1, h: 1.3, rectRadius: 0.08, fill: { color: HEX.cream }, line: { color: HEX.line } });
T(s, "Ground rules", { x: 0.85, y: 5.65, w: 2.2, h: 0.4, fontSize: 14, bold: true, color: C.text2 });
T(s, bullets(rules, { space: 3 }), { x: 0.85, y: 6.0, w: 11.7, h: 0.82, fontSize: 13, valign: "top" });
s.addNotes(
`How the Committee will decide (3 minutes). The Chair agrees the procedure with members before the evidence is presented.
- Each decision follows the same five steps: the presenter reads the recommendation from the decision sheet (about 2 minutes); members ask questions of clarification only (about 3 minutes); each Partner State and regional partner gives its view in turn (about 1 minute each), so that every delegation is heard, not only the most vocal; the Chair then tests for consent; and the rapporteur reads back the wording, the owner and the date.
- Three possible outcomes: agree (adopted as stated); amend (adopted with conditions or changes, recorded word for word); defer (not yet, with what the Committee needs, from whom and by when). A deferral is a valid outcome and is better than an unclear agreement.
- Consent, not voting, is proposed: a decision stands if no member objects. Where a Partner State cannot agree, the Chair may record the decision for the others and the reservation of that Partner State, or defer. The Chair decides; the procedure is a proposal.
- Materials in the room: printed decision sheets for each member; the decision record on screen (slide 16) completed live by the rapporteur; a parking-lot sheet for questions on budget and programme scope, answered in writing within two weeks.
- Facilitation roles: Chair (Committee); presenter (consultant); GIZ (programme and budget questions); KAZA Secretariat (regional layer and RTFF future); rapporteur (GIZ or KAZA Secretariat).`);

// ---------------- 4. Storyline ----------------
sec("What we know");
s = content("One storyline across the workstreams");
const steps = [
  ["Macro Diagnostic", "SIGMA, Oct 2026", "Priority areas and value chains; survey of 106 MSMEs; finance interviews", HEX.sage],
  ["Regional Roundtable", "Maun, 22–24 Sep 2026", "Priorities tested with Partner States; RTFF presented; Finance Lab (113 participants)", HEX.olive],
  ["Micro Diagnostics", "GM3-D10, Nov 2026", "Hwange–Victoria Falls–Livingstone and Okavango–Maun; 141 survey responses", HEX.green],
  ["Working sessions", "Victoria Falls 10 Nov · Maun 12 Nov", "MSMEs, buyers and associations on cost, terms, access and coaching; 36 questionnaires", HEX.gold],
  ["Output 1.2 synthesis", "F6-D9, validated in F6-D10", "One framework, recommendations by activity and value chain, M&E, roadmap, partners", HEX.forest],
];
steps.forEach(([h, d, b, col], i) => {
  const x = 0.6 + i * 2.46;
  circle(s, x + 0.9, 1.45, 0.52, col, i + 1, 16);
  if (i < 4) arrow(s, x + 1.5, 1.71, x + 3.28, 1.71, HEX.line, 1.5);
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 2.15, w: 2.3, h: 3.25, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
  T(s, h, { x: x + 0.15, y: 2.25, w: 2.0, h: 0.62, fontSize: 15.5, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
  T(s, d, { x: x + 0.15, y: 2.88, w: 2.0, h: 0.5, fontSize: 11.5, bold: true, color: col, valign: "top" });
  T(s, b, { x: x + 0.15, y: 3.45, w: 2.0, h: 1.85, fontSize: 13, valign: "top" });
});
const qs = [["Where?", "Decision 1"], ["For whom?", "Decision 2"], ["With what money?", "Decisions 3, 4"], ["With whom, and when?", "Decisions 5, 6"]];
T(s, "The evidence answers four questions, each tied to today's decisions", { x: 0.6, y: 5.6, w: 12.1, h: 0.4, fontSize: 15, bold: true, color: C.text2, fontFace: "Cambria" });
qs.forEach(([q, d], i) => {
  const x = 0.6 + i * 3.06;
  box(s, { x, y: 6.1, w: 2.9, h: 0.72, fill: HEX.cream, line: HEX.line });
  T(s, [{ text: q, options: { bold: true, color: C.text2, breakLine: true } }, { text: d, options: { color: HEX.terraDk, fontSize: 12 } }], { x: x + 0.1, y: 6.1, w: 2.7, h: 0.72, fontSize: 14, align: "center", valign: "middle" });
});
s.addNotes(
`One storyline across the workstreams (2 minutes).
- Each workstream narrowed the question. The Macro Diagnostic (SIGMA, October 2026) set the priority areas and value chains and surveyed 106 MSMEs. The KAZA Regional Roundtable in Maun (22–24 September 2026, 113 participants) tested the priorities with the Partner States; the TUI Care Foundation presented the RTFF and a Finance Implementation Lab examined it. The destination Micro Diagnostics (GM3-D10) took the analysis to Hwange–Victoria Falls–Livingstone and Okavango–Maun, with 141 survey responses in the November update. The working sessions in Victoria Falls (10 November) and Maun (12 November) heard MSMEs, buyers and associations, with 36 participant questionnaires.
- The Output 1.2 finance studies (F1-D4 to F5-D8) were consolidated in the F6-D9 synthesis, which was presented for validation to GIZ and regional partners (F6-D10).
- Together the evidence answers four questions, each tied to today's decisions: where Output 1.2 will work (Decision 1); for whom, defined consistently (Decision 2); with what money (Decisions 3 and 4); and with whom and when (Decisions 5 and 6).`);

// ---------------- 5. Core finding ----------------
s = content("Finance exists, but not on terms these enterprises can use");
chip(s, [1]);
[["82 of 106", "MSMEs name finance as a top-three challenge", HEX.terra], ["54", "have never applied for a loan", HEX.gold], ["28% v 8%", "obtained finance with a buyer arrangement, against without", HEX.green], ["~4%", "tourism share of Namibia's guarantee scheme reach", HEX.forest]].forEach(([v, l, col], i) => {
  const y = 1.85 + i * 1.22;
  s.addShape(S.RECTANGLE, { x: 0.6, y, w: 0.1, h: 1.0, fill: { color: col }, line: { color: col } });
  T(s, v, { x: 0.85, y, w: 2.45, h: 1.0, fontSize: 28, bold: true, color: col, fontFace: "Cambria", valign: "middle" });
  T(s, l, { x: 3.3, y, w: 2.5, h: 1.0, fontSize: 13, valign: "middle" });
});
s.addChart(pres.charts.BAR, [
  { name: "Hwange–Victoria Falls–Livingstone (64)", labels: ["Finance a top-three challenge", "Women-led", "Hold a written contract", "Have ever obtained finance"], values: [81, 36, 42, 20] },
  { name: "Okavango–Maun (40)", labels: ["Finance a top-three challenge", "Women-led", "Hold a written contract", "Have ever obtained finance"], values: [75, 48, 18, 20] },
], {
  x: 6.15, y: 1.75, w: 6.6, h: 5.1, barDir: "bar", barGrouping: "clustered", barGapWidthPct: 45,
  chartColors: [HEX.gold, HEX.brown], showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: '0"%"', dataLabelFontSize: 12, dataLabelColor: "333333",
  catAxisOrientation: "maxMin", catAxisLabelFontSize: 12.5, catAxisLabelColor: "333333", valAxisHidden: true, valAxisMaxVal: 100, valAxisMinVal: 0,
  valGridLine: { style: "none" }, catGridLine: { style: "none" },
  showLegend: true, legendPos: "b", legendFontSize: 12, showTitle: true, title: "Two priority areas, two starting points (% of respondents)", titleFontSize: 14, titleColor: HEX.forest, ...chartText,
});
s.addNotes(
`The core finding (3 minutes). See F6-D9 Executive Summary and Sections 2.1, 2.2 and 2.6.
- Finance for R-NBT MSMEs in KAZA is a fit, readiness and risk problem, not a capital shortage. Banks in all five Partner States are liquid and present in the hub towns, each Partner State has a development lender or public MSME financier, four run national credit guarantee schemes and anchor lodges want to buy locally. But the finance on offer is built for land and building collateral, steady monthly income and formal records, while most tourism MSMEs are micro, informal or semi-formal, operate on communal or concession land and earn most of their revenue in five peak months.
- Of 106 MSMEs surveyed in the Macro Diagnostic, 82 name finance as a top-three challenge, yet 54 have never applied. Tourism takes about 4% of Namibia's guarantee scheme reach and under 10% of Zimbabwe's. The strongest single predictor of finance is a buyer: enterprises with a buyer arrangement were three and a half times as likely to have obtained external finance (28% against 8%).
- The Micro Diagnostics confirm the diagnosis in both priority areas, with different profiles. Hwange–Victoria Falls–Livingstone (64 respondents): 81% name finance as a top-three challenge, 42% hold a written contract, 36% are women-led. Okavango–Maun (40 respondents): 75% name finance, only 18% hold a contract, 48% are women-led, crafts are the largest activity and 62% report turnover below BWP 200,000. In both, only 20% have ever obtained finance. Survey responses are self-selected and indicative, not a baseline.
- Why this matters for today: the two areas need different designs (cost and structure in the corridor, access in Maun), which bears on the choice of intervention areas (Decision 1).`);

// ---------------- 6. Participants ----------------
s = content("Participants put coaching and buyer links before money");
chip(s, [2, 3]);
const pc = [
  ["Regional Roundtable, Maun (Sep)", HEX.olive, ["113", "participants, with Partner States, lenders and the TUI Care Foundation"], ["Priority areas and value chains tested with Partner States", "RTFF presented; Finance Implementation Lab", "Involve communities and traditional leaders"]],
  ["Victoria Falls (10 Nov): cost and structure", HEX.gold, ["17 of 19", "would apply for a no-collateral, order-linked loan"], ["12 of 19 want finance for equipment, vehicles or boats", "Rates of about 3–8% over two to five years, seasonal", "Only 6 of 19 sell under a written contract", "Coaching first (13 of 19)"]],
  ["Maun (12 Nov): access", HEX.brown, ["17 of 18", "external participants returned questionnaires"], ["Training alongside the loan; simple, fast applications", "Setswana and paper forms; a route for unregistered groups", "Deposits of about 50%; payment in one to two weeks", "Direct payment to producers, a women's fund, a youth share"]],
];
pc.forEach(([h, col, stat, items], i) => {
  const x = 0.6 + i * 4.1;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 1.8, w: 3.9, h: 5.05, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
  box(s, { x: x + 0.15, y: 1.95, w: 3.6, h: 0.62, fill: col, text: h, size: 13.5, bold: true, color: C.background1, radius: 0.12 });
  let y0 = 2.75;
  if (stat) {
    T(s, stat[0], { x: x + 0.2, y: y0, w: 1.35, h: 0.75, fontSize: 24, bold: true, color: col, fontFace: "Cambria", valign: "middle" });
    T(s, stat[1], { x: x + 1.55, y: y0, w: 2.2, h: 0.75, fontSize: 12, valign: "middle" });
    y0 += 0.9;
  }
  T(s, bullets(items, { space: 9 }), { x: x + 0.2, y: y0, w: 3.55, h: 6.7 - y0, fontSize: 14, valign: "top" });
});
s.addNotes(
`What participants asked for (3 minutes). See F6-D9 Section 2.6.
- Three sessions gave one consistent message: coaching and buyer links before and alongside money; delivery design decides who applies. The two November sessions differed in emphasis: cost and structure in Victoria Falls, access in Maun.
- Regional Roundtable, Maun (22–24 September 2026): priority areas and value chains were tested with Partner States; the TUI Care Foundation presented the RTFF; participants stressed involving communities and traditional leaders.
- Victoria Falls (10 November; 19 of 20 external participants returned questionnaires): 17 of 19 would apply for a loan with no collateral, linked to a buyer order and released after coaching, but demand leans to assets: 12 of 19 would use finance for equipment, vehicles or boats, so an order-linked working-capital product alone will not meet the main need. Collateral was the barrier named most (9 of 19 and all three groups); preferred terms clustered at about 3–8% over two to five years with seasonal repayment, against bank rates near 28%; only 6 of 19 sell under a written contract or letter of intent; 13 of 19 put coaching first. Groups proposed staged, ring-fenced funding, tiers from grants to blended finance to loans, and repayment through the buyer.
- Maun (12 November; 17 of 18): training alongside the loan, simple and fast applications, forms in Setswana, buyer links and written buyer specifications. Craft producers asked for deposits of about 50% and payment within one to two weeks instead of 90-day accounts. Community groups said a loan for established businesses would not reach them and proposed direct payment to producers, a women's fund and a youth share.
- No finance provider attended either session, so these are stated preferences, not tested terms.
- Why this matters for today: who counts as women-led and youth-led decides who these instruments reach (Decision 2), and the demand for coaching, grants and assets shapes the grant facility (Decision 3).`);

// ---------------- 7. Where to start ----------------
s = content("Where each Partner State can start");
chip(s, [1]);
s.addChart(pres.charts.BAR, [{ name: "Readiness", labels: ["Zambia", "Zimbabwe", "Botswana", "Namibia", "Angola"], values: [4.1, 3.9, 3.4, 3.2, 1.4] }], {
  x: 0.5, y: 1.8, w: 6.3, h: 4.4, barDir: "bar", barGapWidthPct: 35,
  chartColors: [HEX.green, HEX.green, HEX.gold, HEX.gold, HEX.terra], showValue: true, dataLabelFormatCode: "0.0", dataLabelPosition: "outEnd", dataLabelFontSize: 13, dataLabelColor: "333333", dataLabelFontBold: true,
  catAxisOrientation: "maxMin", catAxisLabelFontSize: 14, catAxisLabelColor: "333333", valAxisHidden: true, valAxisMaxVal: 5, valAxisMinVal: 0,
  valGridLine: { style: "none" }, catGridLine: { style: "none" }, showLegend: false,
  showTitle: true, title: "Partner State readiness to pilot (score 0–5)", titleFontSize: 14, titleColor: HEX.forest, ...chartText,
});
[["Ready to pilot", HEX.green], ["Ready with adjustments", HEX.gold], ["Readiness first", HEX.terra]].forEach(([t, col], i) => {
  const x = 0.75 + i * 2.05;
  s.addShape(S.RECTANGLE, { x, y: 6.35, w: 0.2, h: 0.2, fill: { color: col }, line: { color: col } });
  T(s, t, { x: x + 0.28, y: 6.27, w: 1.75, h: 0.36, fontSize: 11.5, color: "4A4A4A", valign: "middle" });
});
const areas = [
  ["PA1 Hwange–Victoria Falls–Livingstone", "Delivery core · Zambia and Zimbabwe", "Strong RTFF cohort 1 candidate; ECGC, FNB Zambia, ZANACO", HEX.green],
  ["PA2 Okavango Delta–Maun", "Delivery core · Botswana · Chobe–Maun corridor decided", "CEDA, NDB and BOSRIA as national lenders and guarantor", HEX.gold],
  ["Namibia's Zambezi Region", "Third area only if resourced", "NASRIA women and youth tier with DBN, about 2027–28", HEX.brown],
  ["Angola", "Readiness first", "Lot 1 grants, technical assistance and group savings", HEX.terra],
];
areas.forEach(([h, sub, d, col], i) => {
  const y = 1.8 + i * 1.27;
  s.addShape(S.ROUNDED_RECTANGLE, { x: 7.1, y, w: 5.65, h: 1.12, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.5 } });
  s.addShape(S.RECTANGLE, { x: 7.1, y: y + 0.08, w: 0.1, h: 0.96, fill: { color: col }, line: { color: col } });
  T(s, [{ text: h, options: { bold: true, color: C.text2, breakLine: true } }, { text: sub, options: { color: col, bold: true, fontSize: 11.5, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: 7.35, y, w: 5.3, h: 1.12, fontSize: 14, valign: "middle" });
});
s.addNotes(
`Where each Partner State can start (3 minutes). See F6-D9 Sections 2.3, 3.3, 4.8 and 7.2.
- The readiness scores (0–5) combine the depth of finance institutions, guarantee schemes, the regulatory environment and tourism demand. Zambia (4.1) and Zimbabwe (3.9) are ready to pilot; Botswana (3.4) and Namibia (3.2) are ready with adjustments; Angola (1.4) needs readiness work first.
- The programme plans coaching for about 150 MSMEs across two priority areas, while Output 1.2 foresees three intervention areas. The recommendation (Decision 1) is two delivery cores, Hwange–Victoria Falls–Livingstone (PA1) and the Okavango Delta–Maun (PA2); Namibia's Zambezi Region as a third area only if resourced, building on the NASRIA women and youth guarantee tier with DBN; and Angola on a readiness-first track.
- The RTFF treats the Victoria Falls–Livingstone corridor as the strong cohort 1 candidate. In Botswana, the Chobe–Maun corridor has already been decided, so it is not before the Committee today. CEDA, NDB and BOSRIA remain the national lenders and guarantor for term-sheet talks in PA2 (Decision 6).`);

// ---------------- 8. Framework ----------------
sec("What we propose");
s = content("One pathway, three activities");
chip(s, [3, 4]);
const tiers = [["Tier 0", "Pre-enterprise, groups"], ["Tier 1", "Emerging micro"], ["Tier 2", "Supplier-ready"], ["Tier 3", "Investment-ready"]];
tiers.forEach(([t, d], i) => {
  const x = 0.7 + i * 3.02;
  s.addShape(S.CHEVRON, { x, y: 1.8, w: 3.15, h: 0.85, fill: { color: [HEX.sage, HEX.olive, HEX.green, HEX.forest][i] }, line: { color: C.background1, width: 1 } });
  T(s, [{ text: t, options: { bold: true, fontSize: 15, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: x + 0.45, y: 1.8, w: 2.3, h: 0.85, color: C.background1, align: "center", valign: "middle" });
});
const acts = [
  ["1", "Connect", "1.2.1 Dialogue platforms and matchmaking", ["One platform per delivery core, every four months", "Deal days and a standard supply MOU with anchors", "Lender learning: tourism literacy, green assets in credit"], C.accent1],
  ["2", "Prepare", "1.2.2 Grant facility", ["Lot 1 up to EUR 10,000; Lot 2 EUR 10,000–40,000", "Conditional on training; at least 60% to women- or youth-led", "Grants become the borrower's contribution"], C.accent2],
  ["3", "Finance", "1.2.3 Financing mechanisms", ["One lender, one guarantor, two anchors per area", "Guarantee windows with first loss; order-backed and asset finance", "The RTFF as the collateral-free option"], C.accent3],
];
acts.forEach(([n, h, sub, items, col], i) => {
  const x = 0.7 + i * 4.15;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 2.9, w: 3.75, h: 2.95, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: col, width: 2 } });
  circle(s, x + 0.2, 3.08, 0.72, col, n, 22);
  T(s, h, { x: x + 1.05, y: 3.05, w: 2.6, h: 0.48, fontSize: 21, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
  T(s, sub, { x: x + 1.05, y: 3.5, w: 2.65, h: 0.32, fontSize: 11, color: "4A4A4A", italic: true });
  T(s, bullets(items), { x: x + 0.22, y: 4.0, w: 3.38, h: 1.8, fontSize: 13.5, valign: "top" });
  if (i < 2) arrow(s, x + 3.8, 4.35, x + 4.1, 4.35, HEX.gold, 2.5);
});
box(s, { x: 0.7, y: 6.05, w: 11.95, h: 0.75, fill: "F3E3DC", line: HEX.terra, text: "Underpinned by Activity 1.1.1 coaching: records, costing, compliance and supplier readiness, before and after finance", size: 14.5, color: HEX.terraDk, bold: true });
s.addNotes(
`What Output 1.2 proposes (3 minutes). See F6-D9 Chapters 3 and 5.
- The three activities are one graduation pathway, not three projects. Enterprises enter at their readiness tier (0 pre-enterprise to 3 investment-ready) and move up as each step creates the record the next lender needs. Activity 1.1.1 coaching underpins all three.
- 1.2.1 Connect: one finance and market-linkage platform per delivery core, convened through associations, lodge impact officers and connectors every four months, timed to the tourism season; a supplier directory and sector-specific buyer sessions first; lender clinics, women-only and youth-only sessions, deal days with one-page pipeline profiles, and anchor procurement roundtables leading to a standard supply MOU (written orders, payment within 30 days, notice before termination). A lender learning platform for banks, MFIs, guarantee schemes and DFIs covers tourism business literacy, regenerative practice and extended ESG, and how verified nature-positive practice can count as collateral, lower risk and better pricing.
- 1.2.2 Prepare: Lot 1 up to EUR 10,000 for Tier 0–1 (10–20% contribution, largely in kind); Lot 2 EUR 10,000–40,000 for Tier 2, or Tier 1 with a buyer (30–50%, may be loan-financed), with a conversion clause into the borrower's contribution, cash collateral or a group-guarantee seed. Conditional on training; at least 60% to women- or youth-led enterprises; national grant managers separate from lenders. Decision 3 confirms the envelope and the split.
- 1.2.3 Finance: per area, one lender, one guarantor and two anchors pilot adapted products over two seasons; Lot 2 grantees are the first target group. Decision 4 concerns the risk-sharing that makes lenders change terms.`);

// ---------------- 9. Mechanisms and first loss ----------------
s = content("Risk-sharing is what moves lenders to change terms");
chip(s, [4]);
T(s, "Financing mechanisms identified (F4-D7)", { x: 0.6, y: 1.8, w: 6.2, h: 0.4, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria" });
const mech = [
  ["Most feasible now", HEX.green, "Order-backed supply chain finance · guarantee windows with first loss · seasonal loans"],
  ["Collateral-free pilot", HEX.gold, "The TUI Care Foundation RTFF for the EUR 1,000–30,000 gap, with three adjustments"],
  ["For women and youth", HEX.brown, "Four blended models: first loss with asset finance; windows that accept orders; community guarantee funds; results-based conservation finance"],
  ["Supporting roles", HEX.sage, "Impact investment, conservation funds; bonds later, as capital for partner banks"],
];
mech.forEach(([h, col, d], i) => {
  const y = 2.3 + i * 1.12;
  box(s, { x: 0.6, y, w: 1.9, h: 0.98, fill: col, text: h, size: 13, bold: true, color: C.background1 });
  T(s, d, { x: 2.65, y, w: 4.25, h: 0.98, fontSize: 13, valign: "middle" });
});
// right panel: first-loss arithmetic
s.addShape(S.ROUNDED_RECTANGLE, { x: 7.25, y: 1.8, w: 5.5, h: 5.05, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
T(s, "First loss: the figure term sheets need", { x: 7.5, y: 1.92, w: 5.1, h: 0.42, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria" });
// layered bar: loss stack
const stack = [["Lender's residual share", 0.85, "A6BFC7"], ["National guarantee cover", 1.75, HEX.olive], ["Programme first loss 10–15%", 0.7, HEX.terra]];
let sy = 2.5;
stack.forEach(([t, h, col]) => {
  s.addShape(S.RECTANGLE, { x: 7.55, y: sy, w: 1.35, h, fill: { color: col }, line: { color: C.background1, width: 1.5 } });
  T(s, t, { x: 9.0, y: sy, w: 1.75, h, fontSize: 11.5, valign: "middle", bold: col === HEX.terra, color: col === HEX.terra ? HEX.terraDk : C.text1 });
  sy += h;
});
T(s, "↑ Losses hit this layer first", { x: 7.45, y: sy + 0.02, w: 2.6, h: 0.3, fontSize: 10.5, italic: true, color: "6B6B6B", align: "left" });
[["EUR 0.5–1.5 m", "new lending per area pilot"], ["EUR 75–225k", "first loss per pilot; 20% for women- and youth-led portfolios"], ["15% to 0", "first loss tapers over three seasons"], ["≥ 1 : 1", "finance leveraged per euro of grant and first loss"]].forEach(([v, l], i) => {
  const y = 2.5 + i * 1.03;
  T(s, v, { x: 10.75, y, w: 1.95, h: 0.45, fontSize: 17, bold: true, color: i === 1 ? HEX.terra : HEX.forest, fontFace: "Cambria", valign: "bottom" });
  T(s, l, { x: 10.75, y: y + 0.45, w: 1.95, h: 0.55, fontSize: 10.5, valign: "top", color: "333333" });
});
T(s, "Plus guarantee fees (2–5%) covered in the first cycle", { x: 7.5, y: 6.38, w: 5.1, h: 0.36, fontSize: 12, italic: true, color: HEX.terraDk });
s.addNotes(
`Financing mechanisms and risk-sharing (3 minutes). See F6-D9 Sections 2.5 and 5.3 and Table 15.
- No single instrument fills the gap. The F4-D7 financing mechanisms assessment rates order-backed supply chain finance, guarantee windows with a first-loss layer and seasonal loans as the most feasible mechanisms; the RTFF is the recommended collateral-free loan pilot for the documented EUR 1,000–30,000 gap, with three adjustments (a larger Tier 1 share; a loss reserve with lending in the currency of revenue; and a proposed route to national lenders and guarantee schemes after the pilot and handover to the KAZA Secretariat). Four blended models address collateral for women- and youth-led enterprises; impact investment, bonds and conservation funds play supporting roles, with bonds a later source of capital for partner banks rather than a pilot instrument.
- Lenders and guarantors consulted will not adapt collateral and repayment terms for tourism MSMEs without risk-sharing. The proposal: first-loss cover of 10–15% of portfolio principal losses (20% for women- and youth-led or first-cycle Tier 1 portfolios), sitting beneath national guarantee cover (ECGC, NASRIA and BOSRIA, CEDA and others, with structures such as 80/20 or 70/30 proposed by NASRIA and CEDA). On EUR 0.5–1.5 million of new lending per priority-area pilot this implies about EUR 75,000–225,000 per pilot, tapering from 15% to zero over three seasons as repayment data accumulate. Unused balances roll into the next cycle or convert to a loss reserve. Guarantee fees (2–5%, for example at ECGC) would be covered in the first cycle.
- Decision 4 asks whether Activity 1.2.3 budget lines can carry first loss and guarantee fees. If they cannot, this is the main design gap to resolve before term sheets. The leverage target is at least EUR 1 of finance per euro of grant and first loss.`);

// ---------------- 10. Roadmap ----------------
s = content("Two seasons of piloting, three decision points");
chip(s, [5, 6]);
const qx0 = 1.0, qw = 1.06; // quarter index 0 = Q4 2026 ... 10 = Q2 2029
const qx = (q) => qx0 + q * qw;
[3, 7].forEach((q) => s.addShape(S.RECTANGLE, { x: qx(q), y: 2.25, w: qw, h: 2.95, fill: { color: HEX.peak }, line: { color: HEX.peak } }));
s.addShape(S.RECTANGLE, { x: qx(9), y: 2.25, w: qw * 2, h: 2.95, fill: { color: "EFEFEF" }, line: { color: "EFEFEF" } });
[["2026", 0, 1], ["2027", 1, 4], ["2028", 5, 4], ["2029", 9, 2]].forEach(([y, q, n]) => T(s, y, { x: qx(q), y: 1.75, w: qw * n, h: 0.3, fontSize: 14, bold: true, color: C.text2, align: "center" }));
["Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2"].forEach((q, i) => T(s, q, { x: qx(i), y: 2.02, w: qw, h: 0.22, fontSize: 10, color: "6B6B6B", align: "center" }));
[["Set-up", 0, 1, HEX.grey], ["Design", 1, 1, HEX.gold], ["Season one", 2, 4, HEX.forest], ["Season two + review", 6, 3, HEX.brown], ["Handover", 8.5, 2.5, HEX.sage]].forEach(([t, q, n, col]) => box(s, { x: qx(q) + 0.03, y: 2.4, w: qw * n - 0.06, h: 0.58, fill: col, text: t, size: 13, bold: true, color: C.background1, radius: 0.05 }));
[["Committee decisions", 0.3, 3.25], ["Agreements signed", 1.7, 3.85], ["First loans; Lot 1 and Lot 2 calls", 2.4, 3.25], ["Products open to non-grantees", 6.2, 3.85]].forEach(([t, q, y]) => {
  circle(s, qx(q) - 0.11, y, 0.22, HEX.gold);
  T(s, t, { x: qx(q) + 0.18, y: y - 0.08, w: 2.6, h: 0.4, fontSize: 12, color: C.text1, valign: "middle" });
});
s.addShape(S.LINE, { x: qx(9), y: 2.25, w: 0, h: 2.95, line: { color: HEX.terraDk, width: 2, dashType: "dash" } });
T(s, "Current end Dec 2028", { x: qx(9) + 0.08, y: 4.25, w: 1.9, h: 0.3, fontSize: 11, bold: true, color: HEX.terraDk });
T(s, "Extension to mid-2029 sought", { x: qx(9) + 0.08, y: 4.55, w: 2.0, h: 0.5, fontSize: 11, color: "6B6B6B" });
circle(s, qx(10) + 0.55, 3.25, 0.4, HEX.terra, 5, 13);
[["Gate 1", "Continue, adjust or stop", 5.5, "c"], ["RTFF future", "Form, host, channels", 8.15, "r"], ["Gate 2", "Continue or hand over", 8.85, "l"]].forEach(([g, d, q, al]) => {
  const x = qx(q);
  const lx = al === "c" ? x - 1.0 : al === "r" ? x - 1.95 : x - 0.05;
  s.addShape(S.DIAMOND, { x: x - 0.2, y: 5.3, w: 0.4, h: 0.4, fill: { color: HEX.terra }, line: { color: HEX.terra } });
  T(s, [{ text: g, options: { bold: true, breakLine: true, color: HEX.terraDk } }, { text: d, options: { color: C.text1 } }], { x: lx, y: 5.78, w: 2.0, h: 0.7, fontSize: 13, align: al === "c" ? "center" : al === "r" ? "right" : "left", valign: "top" });
});
T(s, "Peak season shaded (June–October). Dates indicative. Decision 6 endorses the gate criteria.", { x: 0.6, y: 6.55, w: 9, h: 0.35, fontSize: 11, italic: true, color: "6B6B6B" });
s.addNotes(
`Roadmap and decision points (3 minutes). See F6-D9 Chapter 7 and Figure 7.
- Pilots run over two full tourism seasons so that low-season repayment is observed twice. Five phases: validation and set-up (November 2026 to January 2027, including today's decisions); design and partnering (February to April 2027: competition package and first Lot 1 window, product terms, supply MOU template, agreements signed, lender training, grant managers contracted); season one (April 2027 to March 2028: RTFF cohort 1 and pre-peak working capital for buyer-linked suppliers, Lot 1 and Lot 2 awards, low-season asset loans with grace, deal days every four months); season two and review (April to December 2028: products opened to non-grantees, second pilots, independent review); handover (Q4 2028 to mid-2029).
- RTFF cohort 1 follows the TUI Care Foundation's timetable, with finance from the first quarter of 2027.
- Three decision points: Gate 1 (Q1 2028): continue, adjust or stop each product; stop or adjust if arrears over 30 days (PAR30) exceed 15% or uptake is below half of target. RTFF future (Q4 2028): form, host, capital and national channels agreed with the KAZA Secretariat, before Gate 2 so that the handover has a destination. Gate 2 (Q4 2028): continue, adjust or hand over, on repayment by season, at least 60% to women- and youth-led enterprises, and lenders continuing with less concessional support. Decision 6 endorses these criteria, set out in the separate Output 1.2 Decision Gates document.
- The project currently ends in December 2028. Without the extension to mid-2029 (Decision 5), the second low season is not observed before the final review. Requesting it now, rather than at the planned Q2 2028 milestone, gives partners certainty when they sign agreements in early 2027.`);

// ---------------- 11. M&E and risks ----------------
s = content("Results measured once; the main risks link to today's decisions");
chip(s, [2]);
T(s, "One measurement system on GM1-D5", { x: 0.6, y: 1.8, w: 5.6, h: 0.4, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria" });
[["18", "GM1-D5 indicators"], ["23", "Output 1.2 indicators"], ["32", "RTFF pilot and handover"]].forEach(([v, l], i) => {
  const x = 0.6 + i * 1.9;
  T(s, v, { x, y: 2.25, w: 0.75, h: 0.65, fontSize: 26, bold: true, color: [HEX.forest, HEX.gold, HEX.terra][i], fontFace: "Cambria", valign: "middle" });
  T(s, l, { x: x + 0.75, y: 2.25, w: 1.1, h: 0.65, fontSize: 11, valign: "middle" });
});
[["Outputs", HEX.green, "Mechanisms established; loans, grants and sessions; supply MOUs signed"], ["Outcomes", HEX.gold, "Share obtaining finance (ref. 21%); repayment by season (PAR30 ≤ 15%); days for anchors to pay"], ["Impact", HEX.terra, "Revenue and jobs; finance leveraged per euro (≥ 1:1); lenders continuing"]].forEach(([h, col, d], i) => {
  const y = 3.1 + i * 0.95;
  box(s, { x: 0.6, y, w: 1.45, h: 0.8, fill: col, text: h, size: 14, bold: true, color: C.background1 });
  T(s, d, { x: 2.2, y, w: 4.0, h: 0.8, fontSize: 12.5, valign: "middle" });
});
box(s, { x: 0.6, y: 6.05, w: 5.6, h: 0.8, fill: HEX.cream, line: HEX.line, text: "Disaggregated by sex, age (18–35), disability, country, value chain and readiness tier", size: 12.5, color: C.text2, bold: true });
// risks
s.addShape(S.ROUNDED_RECTANGLE, { x: 6.6, y: 1.8, w: 6.15, h: 5.05, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
T(s, "Main risks and the decision that reduces each", { x: 6.85, y: 1.9, w: 5.8, h: 0.42, fontSize: 15, bold: true, color: C.text2, fontFace: "Cambria" });
const rk = [
  ["Partner interest does not turn into commitment", [4, 6]],
  ["Project ends before two seasons are observed", [5]],
  ["Thin cohort 1 pipeline of coached, buyer-linked firms", [3]],
  ["Low-season default; currency and exchange control", [4]],
  ["Inconsistent targeting across instruments", [2]],
];
rk.forEach(([t, ds], i) => {
  const y = 2.45 + i * 0.7;
  s.addShape(S.LINE, { x: 6.85, y: y + 0.64, w: 5.7, h: 0, line: { color: HEX.line, width: 0.75 } });
  T(s, t, { x: 6.85, y, w: 4.6, h: 0.6, fontSize: 13, valign: "middle" });
  ds.forEach((d, k) => circle(s, 11.75 + k * 0.45, y + 0.12, 0.38, HEX.terra, d, 12));
});
s.addNotes(
`Measurement and risks (3 minutes). See F6-D9 Chapter 6 and Section 7.4 (Table 19).
- Output 1.2 should use one measurement system for the baseline, the grant milestones, the RTFF pricing step-downs and the results framework, built on the 18 GM1-D5 baseline indicators and recorded at intake (GM3-D11). The synthesis proposes 23 Output 1.2 indicators; the RTFF adds 32 for the pilot, partner readiness, handover and roll-out. Outputs (mechanisms established, loans and grants made) are kept separate from outcomes (share obtaining finance, survey reference 21%; repayment by season, with PAR30 at 15% as the stop-or-adjust threshold; days taken by anchors to pay suppliers) and impact (revenue, jobs, finance leveraged per euro of at least 1:1, lenders continuing without concessional support).
- Every indicator is disaggregated by sex, age, disability, country, value chain and readiness tier. This only works if one youth band (18–35, with the exact year of birth recorded so results can be re-cut to national bands) and one women-led test (majority ownership or decision-making) are used across the grant facility, the RTFF and M&E: Decision 2. The programme uses 18–35; the RTFF 18–30; national youth bands run from 15 to 45.
- Three baselines are needed before cohort 1: a disaggregated MSME intake baseline, a lender portfolio baseline and an anchor procurement baseline. The survey is a reference point, not a baseline.
- The risks rated high in impact that the Committee can most influence each link to a decision: partner commitment (first loss, Decision 4; term-sheet talks, Decision 6); the timeframe (extension, Decision 5); the depth of the cohort 1 pipeline (Lot 2 grantees as a second-round pipeline, Decision 3); low-season default and currency risk (loss reserve and first loss, Decision 4); and inconsistent targeting (Decision 2).`);

// ---------------- 12. Strategic partners ----------------
s = content("Who sustains it after the pilot: strategic partners");
box(s, { x: 0.6, y: 1.22, w: 3.6, h: 0.4, fill: "F3E3DC", line: HEX.terra, radius: 0.2, text: "For noting and endorsement", size: 12, bold: true, color: HEX.terraDk });
[
  ["Anchoring and long-term capital", HEX.forest, ["KAZA Conservation Trust Fund: the RTFF as a programme account after 2028–2029", "TUI Care Foundation carries the RTFF until it is anchored", "KAZA Secretariat: regional layer; RTFF future by Q4 2028"]],
  ["Funders active in KAZA", HEX.gold, ["EU: R-NBT, Green Growth for KAZA, ITC programme", "Germany: GIZ, KfW, International Climate Initiative", "GEF and World Bank; OKACOM CORB Fund; AfDB and AGF"]],
  ["National channels", HEX.green, ["Development banks: NDB, CEDA, DBN, CEEC, SMEDCO, BDA", "Guarantee schemes: ECGC, NASRIA and BOSRIA, ZCGS, FGC", "Banks such as FNB, Stanbic, ZANACO for graduation"]],
  ["Pipeline and verification", HEX.terra, ["Anchors and their foundations back borrowers", "ITC grants de-risk RTFF loans; SADC-DFRC pipeline", "Verifiers such as GreenLoop: baselines and milestones"]],
].forEach(([h, col, items], i) => {
  const x = 0.6 + (i % 2) * 6.15, y = 1.8 + Math.floor(i / 2) * 2.12;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w: 5.95, h: 1.98, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
  box(s, { x: x + 0.2, y: y + 0.13, w: 3.6, h: 0.42, fill: col, text: h, size: 13.5, bold: true, color: C.background1, radius: 0.21 });
  T(s, bullets(items, { space: 3 }), { x: x + 0.25, y: y + 0.62, w: 5.5, h: 1.3, fontSize: 13, valign: "top" });
});
[["2027", "Co-learning agreements; one shared referral register"], ["Season two", "Co-financing from funders active in KAZA"], ["By Q4 2028", "Host and national channels agreed, before Gate 2"]].forEach(([w, t], i) => {
  const x = 0.6 + i * 4.1;
  s.addShape(S.CHEVRON, { x, y: 6.1, w: 4.0, h: 0.72, fill: { color: [HEX.sage, HEX.olive, HEX.forest][i] }, line: { color: C.background1, width: 0 } });
  T(s, [{ text: w + "  ", options: { bold: true } }, { text: t }], { x: x + 0.45, y: 6.1, w: 3.2, h: 0.72, fontSize: 11.5, color: C.background1, valign: "middle", align: "center" });
});
s.addNotes(
`Strategic partners (3 minutes). See F6-D9 Section 7.6 and Annex D (Table 23). For noting and endorsement, not a separate decision.
- The RTFF and the other mechanisms will outlast the project only if they have institutional homes, capital after the pilot and partners that keep originating, financing and verifying borrowers. None of this needs a new institution: the partners exist, and several already fund KAZA. Annex D lists eighteen possible partners with their role today, possible role and next step.
- Anchoring and long-term capital: the KAZA Conservation Trust Fund, being designed by the Sustainable Finance Coalition with the KAZA Secretariat and WWF-US, could host the RTFF after the pilot as a programme account under its catalytic nature finance window, probably after 2028–2029; GBFF funding is expected in late 2027 and the fund structure around early 2028. The TUI Care Foundation has committed to carry the facility until it is anchored.
- Funders active in KAZA can each fund one layer (readiness grants, first loss and loss reserves, counter-guarantees, recapitalisation): the EU; Germany through GIZ, KfW and the International Climate Initiative, whose 2027 call could support a joint RTFF–CTF concept; the GEF and World Bank; OKACOM's CORB Fund; the AfDB and the African Guarantee Fund. Joint KAZA–OKACOM proposals to donors could include the RTFF's recapitalisation.
- National channels are the graduation route for RTFF borrowers and the in-country partners for monitoring and recovery; SADC-DFRC has suggested aggregating KAZA MSMEs into a regional pipeline large enough to interest other DFIs. ITC's planned grants (about EUR 2 million, some 142 grants) can de-risk RTFF loans; verifiers such as GreenLoop provide baselines and milestone verification.
- Sequence: co-learning agreements and a shared referral register in 2027 (starting now with a light letter of intent on joint learning between the RTFF pilot and the Conservation Trust Fund design, with the TUI Care Foundation in the conversation); co-financing for season two; and a decision with the KAZA Secretariat on the RTFF's host and national channels by Q4 2028, before Gate 2.
- Ask of the Committee: note the partnerships and endorse the start of co-learning in 2027.`);

// ---------------- 13–14. Decision cards ----------------
const dcard = (s, x, y, w, h, n, title, rec, alt, why) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: HEX.line, width: 1.25 } });
  s.addShape(S.RECTANGLE, { x, y: y + 0.08, w: 0.1, h: h - 0.16, fill: { color: HEX.terra }, line: { color: HEX.terra } });
  circle(s, x + 0.25, y + 0.15, 0.55, HEX.terra, n, 17);
  T(s, title, { x: x + 0.95, y: y + 0.12, w: w - 1.1, h: 0.6, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
  T(s, [
    { text: "Recommended  ", options: { bold: true, color: HEX.green } }, { text: rec, options: { breakLine: true } },
    { text: "Alternatives  ", options: { bold: true, color: "6B6B6B" } }, { text: alt, options: { color: "4A4A4A", breakLine: true } },
    { text: "Why now  ", options: { bold: true, color: HEX.terraDk } }, { text: why, options: { color: "4A4A4A" } },
  ], { x: x + 0.3, y: y + 0.78, w: w - 0.45, h: h - 1.25, fontSize: 14, valign: "top", paraSpaceAfter: 5 });
  [["Agree", HEX.green], ["Amend", HEX.gold], ["Defer", HEX.terra]].forEach(([t, col], k) => {
    s.addShape(S.ROUNDED_RECTANGLE, { x: x + w - 2.95 + k * 0.97, y: y + h - 0.42, w: 0.9, h: 0.3, rectRadius: 0.15, fill: { color: C.background1 }, line: { color: col, width: 1.25 } });
    T(s, t, { x: x + w - 2.95 + k * 0.97, y: y + h - 0.42, w: 0.9, h: 0.3, fontSize: 10.5, bold: true, color: col, align: "center", valign: "middle" });
  });
};
sec("Decisions");
const infoCard = (s, title, items) => {
  const nx = 6.75, ny = 1.35 + 2.78;
  s.addShape(S.ROUNDED_RECTANGLE, { x: nx, y: ny, w: 5.95, h: 2.62, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
  T(s, title, { x: nx + 0.25, y: ny + 0.12, w: 5.5, h: 0.45, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria" });
  T(s, bullets(items, { space: 4 }), { x: nx + 0.25, y: ny + 0.6, w: 5.5, h: 1.95, fontSize: 13, valign: "top" });
};
s = content("Decisions 1–3: where, for whom and with what grants");
[
  [1, "Intervention areas", "PA1 and PA2 as delivery cores; Zambezi Region only if resourced; Angola readiness-first", "Two cores only; or three full areas from the start", "Calls and agreements need a confirmed geography"],
  [2, "Youth band and women-led test", "18–35 and a majority ownership or decision-making test across grants, the RTFF and M&E", "Each instrument keeps its own definition, mapped in reporting", "Must be fixed before cohort 1 selection"],
  [3, "Grant envelope and lot split", "About 40% of value to Lot 1 and 60% to Lot 2; 60–70% to cohort 1 chains", "A different split set by GIZ against the envelope", "First Lot 1 window in the 2027 low season"],
].forEach(([n, t, r, a, w], i) => dcard(s, 0.6 + (i % 2) * 6.15, 1.35 + Math.floor(i / 2) * 2.78, 5.95, 2.62, n, t, r, a, w));
infoCard(s, "Already decided: not for decision today", [
  "RTFF in Botswana: the Chobe–Maun corridor has been decided",
  "PA2 works with CEDA, NDB and BOSRIA as national lenders and guarantor; term-sheet talks under Decision 6",
]);
s.addNotes(
`Decisions 1–3 (about 15 minutes; about 5 minutes each). Follow the procedure on slide 3 for each: present, clarify, views, decide, record. Each decision has a sheet in the printed pack.
Decision 1, intervention areas. Background: Output 1.2 refers to three intervention areas; the programme now plans coaching for about 150 MSMEs across two priority areas. Options: A, two delivery cores only; B (recommended), PA1 and PA2 as delivery cores, Namibia's Zambezi Region as a third area only if resourced, Angola on a readiness-first track (Lot 1 grants, technical assistance and group savings); C, three full areas from the start. Implication: keeps the commitment to three areas open without spreading resources thin. Evidence: F6-D9 Sections 2.3, 3.3 and 4.8.
Decision 2, youth band and women-led test. Background: the programme uses 18–35; the RTFF 18–30; national bands run from 15 to 45; NASRIA reports youth as 40 or under. Inconsistent definitions would make the target of at least 60% to women- or youth-led enterprises impossible to compare. Recommended: 18–35 and a majority ownership or decision-making test across all instruments, recording the exact year of birth so results can be re-cut to national bands. The TUI Care Foundation would align RTFF milestones before cohort 1 selection. Evidence: F6-D9 Section 6.1.
Decision 3, grant-facility envelope and lot split. Background: the two lots in the Output 1.2 design are kept; the budget envelope was not available to the study. Recommended: about 40% of value to Lot 1 and 60% to Lot 2; 60–70% to cohort 1 chains, 15–20% to crafts and conservation, 10–20% to second-wave chains and the phased pathway; Lot 2 sized so that 30–60 grantees can enter the Activity 1.2.3 pilots. Grant managers must be contracted by April 2027. Evidence: F6-D9 Section 5.2 and Table 14.
Already decided, for noting: the RTFF route in Botswana. The Chobe–Maun corridor has been decided, so it is not before the Committee today. In PA2, CEDA, NDB and BOSRIA remain the national lenders and guarantor for term-sheet talks (Decision 6).`);

s = content("Decisions 4–6: risk-sharing, time and partners");
[
  [4, "First loss and guarantee fees", "Allow 10–15% first loss (20% for women- and youth-led), about EUR 75–225k per pilot, and first-cycle guarantee fees", "Fees only; or neither, relying on grants and the RTFF", "Lenders will not change terms without risk-sharing"],
  [5, "Extension to mid-2029", "Request it now rather than at the planned Q2 2028 milestone", "Decide in Q2 2028; or no extension, Gate 2 on one low season", "Without it the second low season is not observed"],
  [6, "Term-sheet talks and gates", "Mandate talks with shortlisted lenders, guarantors and two anchors per area; endorse the gate criteria", "Mandate talks now, criteria later; or defer both", "Agreements must be signed by May 2027"],
].forEach(([n, t, r, a, w], i) => dcard(s, 0.6 + (i % 2) * 6.15, 1.35 + Math.floor(i / 2) * 2.78, 5.95, 2.62, n, t, r, a, w));
infoCard(s, "For noting", [
  "Validation status: F6-D9 validated in F6-D10; Macro Diagnostic under KAZA Secretariat review",
  "RTFF selection criteria, pipeline split and indicators: TUI Care Foundation, GIZ and SIGMA",
  "Strategic partners: start co-learning with the KAZA Conservation Trust Fund in 2027",
  "Handover: readiness pack and first 100 days (F6-D12)",
]);
s.addNotes(
`Decisions 4–6 and items for noting (about 15 minutes).
Decision 4, first loss and guarantee fees under Activity 1.2.3. Background: lenders and guarantors consulted will not adapt collateral and repayment terms without risk-sharing. Proposed: first loss of 10–15% of portfolio principal losses (20% for women- and youth-led or first-cycle Tier 1 portfolios), beneath national guarantee cover; on EUR 0.5–1.5 million of new lending per priority-area pilot, about EUR 75,000–225,000 per pilot, tapering to zero over three seasons; guarantee fees (2–5%) covered in the first cycle. Options: A (recommended), first loss and fees as proposed; B, fees only; C, neither. If budget lines do not allow it, this is the main design gap to resolve before term sheets. Evidence: F6-D9 Sections 2.5 and 5.3; F4-D7.
Decision 5, extension to mid-2029. Background: piloting over two full seasons lets low-season repayment be observed twice; with finance from early 2027, the second low season falls after December 2028. Options: A (recommended), request now; B, decide at the Q2 2028 milestone; C, no extension, Gate 2 on one low season. Evidence: F6-D9 Section 7.1 and Table 19.
Decision 6, term-sheet talks and decision gates. Background: no institution has committed to a pilot role; agreements must be signed by May 2027 for season one. Recommended: mandate talks with ECGC and SMEDCO; FNB Zambia and ZANACO; CEDA, NDB and BOSRIA; NASRIA and DBN; and two anchors per area; and endorse the criteria for Gate 1, the RTFF future decision and Gate 2. Talks are non-binding until the Committee approves agreements. Evidence: F6-D9 Section 5.3, Table 16, Annex A (Table 20) and Section 7.1; Output 1.2 Decision Gates: Criteria.
Items for noting: validation status (F6-D9 presented for validation in F6-D10; the Macro Diagnostic is under KAZA Secretariat review before it goes to member states, so comments may come back as a second round); RTFF selection criteria, the split between enterprises needing funding only and those needing capacity building plus funding, and key indicators, to be agreed by the TUI Care Foundation, GIZ and SIGMA; strategic partnerships (slide 12); and the handover (F6-D12).`);

// ---------------- 15. Next 100 days ----------------
sec("Next steps");
s = content("After the decisions: the first 100 days");
const ph = [
  ["Days 1–14", "Take over", HEX.sage, ["Handover meeting; action log agreed", "TUI, GIZ and SIGMA: RTFF entry criteria and indicators", "Follow up SADC-DFRC's position"]],
  ["Days 15–30", "Validate", HEX.olive, ["F6-D9 revised after validation", "Committee sitting prepared with these decision sheets", "OKACOM overlap and ITC's Maun coverage confirmed"]],
  ["Days 31–60", "Decide and open talks", HEX.terra, ["Committee decisions recorded and sent to partners", "Extension request prepared", "Term-sheet talks with shortlisted partners"]],
  ["Days 61–100", "Prepare season one", HEX.forest, ["First platform sessions in PA1 and PA2", "Grant-manager procurement; Lot 1 call drafted", "RTFF referral protocol; intake baselines started"]],
];
ph.forEach(([d, h, col, items], i) => {
  const x = 0.6 + i * 3.06;
  s.addShape(S.CHEVRON, { x, y: 1.4, w: 3.1, h: 0.8, fill: { color: col }, line: { color: C.background1, width: 1 } });
  T(s, [{ text: d, options: { bold: true, fontSize: 14, breakLine: true } }, { text: h, options: { fontSize: 12 } }], { x: x + 0.35, y: 1.4, w: 2.4, h: 0.8, color: C.background1, align: "center", valign: "middle" });
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 2.4, w: 2.9, h: 3.6, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: i === 2 ? 2.25 : 1.25 } });
  T(s, bullets(items, { space: 12 }), { x: x + 0.18, y: 2.6, w: 2.6, h: 2.9, fontSize: 15, valign: "top" });
});
box(s, { x: 0.6 + 2 * 3.06 + 0.55, y: 5.55, w: 1.8, h: 0.36, fill: HEX.terra, text: "This sitting", size: 12, bold: true, color: C.background1, radius: 0.18 });
T(s, "Days counted from the handover meeting (F6-D12). Owners are proposals for GIZ to confirm.", { x: 0.6, y: 6.45, w: 12.1, h: 0.35, fontSize: 11.5, italic: true, color: "6B6B6B" });
s.addNotes(
`After the decisions: the first 100 days (3 minutes). Aligned with the F6-D12 readiness pack, which counts days from the handover meeting and assumes the second roundtable and the Committee meet within the first two months. Today's sitting falls in days 31–60.
- Days 1–14, take over: handover meeting, files transferred and action log agreed; a TUI Care Foundation, GIZ and SIGMA meeting on minimum entry criteria and screening, the pipeline split (funding only, or capacity building plus funding) and key indicators; follow-up of SADC-DFRC's position; KAZA Secretariat feedback incorporated.
- Days 15–30, validate: second roundtable validation (F6-D10) and F6-D9 revised with a change log; the Committee sitting prepared with these decision sheets; OKACOM overlap and ITC's Maun coverage confirmed.
- Days 31–60, decide and open talks: Committee decisions recorded and communicated to partners; extension request prepared; term-sheet talks with ECGC and SMEDCO, FNB Zambia and ZANACO, CEDA, NDB and BOSRIA, NASRIA and DBN, and two anchors per area; readiness diagnostic, supply MOU template, intake baseline and grant manual commissioned.
- Days 61–100, prepare season one: first platform sessions in PA1 and PA2 in the low season and the supplier directory published; grant-manager procurement launched, competition package and Lot 1 call drafted; RTFF referral and co-financing protocol agreed; intake baselines started; commitments log reviewed monthly.
- Owners are proposals for GIZ to confirm.`);

// ---------------- 16. Decision record ----------------
s = content("Decision record: read back before we close");
const hdr = (t) => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: HEX.forest }, align: "center", valign: "middle" } });
const rows = [[hdr("#"), hdr("Decision"), hdr("Agree"), hdr("Amend"), hdr("Defer"), hdr("Conditions or amendments"), hdr("Owner"), hdr("By when")]];
const short = ["Intervention areas", "Youth band and women-led test", "Grant envelope and lot split", "First loss and guarantee fees", "Extension to mid-2029", "Term-sheet talks and gates"];
short.forEach((d, i) => rows.push([
  { text: String(i + 1), options: { bold: true, align: "center", color: HEX.terraDk } },
  { text: d, options: { bold: true, color: C.text2 } },
  { text: "☐", options: { align: "center", color: HEX.green, fontSize: 16 } },
  { text: "☐", options: { align: "center", color: HEX.gold, fontSize: 16 } },
  { text: "☐", options: { align: "center", color: HEX.terra, fontSize: 16 } },
  { text: "" }, { text: "" }, { text: "" },
]));
s.addTable(rows, { x: 0.6, y: 1.35, w: 12.1, colW: [0.45, 3.0, 0.8, 0.8, 0.8, 3.95, 1.15, 1.15], rowH: [0.42, ...Array(6).fill(0.68)], fontSize: 13, valign: "middle", border: { type: "solid", color: "C7D6DC", pt: 0.75 }, fill: { color: "FFFFFF" } });
T(s, [
  { text: "Rapporteur completes the record live on screen; the Chair reads each line back. ", options: {} },
  { text: "Signed record circulated within five working days.", options: { bold: true, color: C.text2 } },
], { x: 0.6, y: 6.2, w: 12.1, h: 0.55, fontSize: 13, italic: true, color: "4A4A4A", valign: "middle" });
s.addNotes(
`Decision record and close (5 minutes).
- The rapporteur completes this record live during the sitting. Before closing, the Chair reads each line back: the decision, whether it was agreed, amended or deferred, the exact wording of any condition or amendment, the owner and the date.
- Deferred decisions need what the Committee requires, from whom and by when, so that they can be taken at the next sitting or in writing.
- The signed record is circulated within five working days and becomes the basis for the F6-D12 handover and the first 100-day actions. Questions in the parking lot are answered in writing within two weeks.
- Thank members. Close.`);

finish(pres, process.argv[2] || "F6-D11.pptx");
