// F6-D11 slide 11 option for review: measurement drives the finance decisions; risks link to today's decisions.
// One slide, same theme as the F6-D11 deck. Usage: node deliverables/build/f6_d11_slide11_option.js out.pptx
const { newDeck, makeHelpers, finish, usePalette, HEX } = require("./deck_lib");
usePalette("blue");

const FOOT = "KAZA R-NBT · Output 1.2 summary pack for the Oversight Committee (F6-D11) · Draft for decision";
const { pres, C } = newDeck({ title: "F6-D11 slide 11 option: measurement and risks", subject: "Option for review", footer: FOOT });
const H = makeHelpers(pres, C);
const { sec, content, T } = H;
const S = pres.shapes;

const circle = (s, x, y, d, color, text, size = 14) => {
  s.addShape(S.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color } });
  if (text !== undefined) T(s, String(text), { x, y, w: d, h: d, fontSize: size, bold: true, color: C.background1, align: "center", valign: "middle" });
};
const box = (s, { x, y, w, h, fill, line, text, size = 14, color, bold, align = "center", valign = "middle", radius = 0.08 }) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: radius, fill: { color: fill }, line: { color: line || fill, width: 1.25 } });
  if (text !== undefined) T(s, text, { x: x + 0.1, y: y + 0.03, w: w - 0.2, h: h - 0.06, fontSize: size, color: color || C.text1, bold, align, valign });
};
const arrow = (s, x1, y1, x2, y2, color, width = 2) => {
  s.addShape(S.LINE, { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(Math.abs(x2 - x1), 0.001), h: Math.max(Math.abs(y2 - y1), 0.001), line: { color, width, endArrowType: "triangle" } });
};
const chip = (s, nums, label, lw) => {
  const w = lw + 0.1 + nums.length * 0.5;
  box(s, { x: 0.6, y: 1.22, w, h: 0.4, fill: "F3E3DC", line: HEX.terra, radius: 0.2 });
  T(s, label, { x: 0.72, y: 1.22, w: lw, h: 0.4, fontSize: 12, bold: true, color: HEX.terraDk, valign: "middle" });
  nums.forEach((n, i) => circle(s, 0.67 + lw + i * 0.5, 1.26, 0.32, HEX.terra, n, 11));
};

sec("What we propose");
const s = content("Measurement drives finance");
chip(s, [2, 3, 4, 5], "Measurement informs decisions", 2.75);

// ---- left: measure -> finance decision ----
T(s, [
  { text: "One measurement system: ", options: { bold: true, color: C.text2 } },
  { text: "18 programme indicators (GM1-D5), plus 23 for Output 1.2 and 32 for the RTFF, all broken down by sex, age (18–35), disability, country, value chain and readiness tier" },
], { x: 0.6, y: 1.7, w: 5.2, h: 0.7, fontSize: 11, valign: "middle" });
circle(s, 5.88, 1.91, 0.36, HEX.terra, 2, 11.5);
T(s, [
  { text: "Also tracked: ", options: { bold: true, color: C.text2 } },
  { text: "outputs (loans and grants by product, season, sex and age; mechanisms and supply MOUs) · outcomes (share obtaining finance, ref. 21%; days for anchors to pay) · impact (revenue and jobs)" },
], { x: 0.6, y: 2.4, w: 5.75, h: 0.6, fontSize: 11, valign: "middle", color: "333333" });
T(s, "We measure", { x: 0.6, y: 3.05, w: 2.35, h: 0.3, fontSize: 12, bold: true, color: "6B6B6B" });
T(s, "It decides", { x: 3.35, y: 3.05, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: "6B6B6B" });
const md = [
  ["Repayment by season (PAR30) and uptake", "Gate 1: stop or adjust if PAR30 > 15% or uptake < half of target", 5],
  ["Verified R-NBT and local-sourcing milestones", "RTFF interest rate steps down for agreed results", null],
  ["Grant milestones met", "Grant tranches released in stages", 3],
  ["Repayment data over three seasons", "First-loss cover tapers from 15% to zero", 4],
  ["Leverage of at least 1:1; lenders continuing", "Gate 2: continue, adjust or hand over; concessional support tapers", 5],
];
md.forEach(([m, d, n], i) => {
  const y = 3.38 + i * 0.7;
  box(s, { x: 0.6, y, w: 2.35, h: 0.6, fill: HEX.cream, line: HEX.line, text: m, size: 11, color: C.text2, bold: true });
  arrow(s, 2.98, y + 0.3, 3.3, y + 0.3, HEX.gold, 2);
  s.addShape(S.ROUNDED_RECTANGLE, { x: 3.35, y, w: 2.95, h: 0.6, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: HEX.olive, width: 1.25 } });
  T(s, d, { x: 3.45, y, w: n ? 2.35 : 2.75, h: 0.6, fontSize: 11, valign: "middle" });
  if (n) circle(s, 5.88, y + 0.12, 0.36, HEX.terra, n, 11.5);
});

// ---- right: risks (unchanged from the current slide) ----
s.addShape(S.ROUNDED_RECTANGLE, { x: 6.6, y: 1.8, w: 6.15, h: 5.05, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
T(s, "Main risks and the decision that reduces each", { x: 6.85, y: 1.9, w: 5.8, h: 0.42, fontSize: 15, bold: true, color: C.text2, fontFace: "Cambria" });
const rk = [
  ["Partner interest does not turn into commitment", [4, 5]],
  ["Project ends before two seasons are observed (extension sought by GIZ)", []],
  ["Thin cohort 1 pipeline of coached, buyer-linked firms", [3]],
  ["Low-season default", [4]],
  ["Currency and exchange control", []],
  ["Inconsistent targeting across instruments", [2]],
];
rk.forEach(([t, ds], i) => {
  const y = 2.45 + i * 0.7;
  s.addShape(S.LINE, { x: 6.85, y: y + 0.64, w: 5.7, h: 0, line: { color: HEX.line, width: 0.75 } });
  T(s, t, { x: 6.85, y, w: 4.6, h: 0.6, fontSize: 13, valign: "middle" });
  if (!ds.length) T(s, "Noted", { x: 11.6, y, w: 1.0, h: 0.6, fontSize: 11.5, italic: true, color: "6B6B6B", align: "center", valign: "middle" });
  ds.forEach((d, k) => circle(s, 11.75 + k * 0.45, y + 0.12, 0.38, HEX.terra, d, 12));
});

s.addNotes(
`Measurement and risks (3 minutes). See F6-D9 Chapter 6, Sections 5.2, 5.3 and 7.1, and Table 19.
- Output 1.2 uses one measurement system for the baseline, the grant milestones, the RTFF pricing step-downs and the results framework, built on the 18 GM1-D5 indicators and recorded at intake (GM3-D11). The synthesis adds 23 Output 1.2 indicators and the RTFF 32 for the pilot, partner readiness, handover and roll-out. Every indicator is disaggregated by sex, age, disability, country, value chain and readiness tier, which only works with one youth band (18–35) and one women-led test across instruments (Decision 2). Alongside these triggers, the system tracks outputs (loans and grants by product, season, sex and age; mechanisms established with partner institutions; supply MOUs signed), outcomes (share of targeted MSMEs obtaining external finance, survey reference 21%; days taken by anchors to pay suppliers) and impact (revenue and jobs), kept separate from one another.
- The point for the Committee is that these numbers are not only reported; they trigger finance decisions:
  - Repayment by season and uptake decide Gate 1 (Q1 2028): a product is stopped or adjusted if arrears over 30 days (PAR30) exceed 15% or uptake is below half of target. Decision 5 endorses these criteria.
  - Verified milestones (formalisation, local sourcing, R-NBT practice) step the RTFF interest rate down for agreed results; verification is independent.
  - Grant milestones release grant tranches in stages (Decision 3 sets the facility).
  - Repayment data over three seasons let first-loss cover taper from 15% to zero (Decision 4).
  - Finance leveraged per euro of grant and first loss (target at least 1:1), with repayment by season, at least 60% to women- and youth-led enterprises and lenders continuing, decide Gate 2 (Q4 2028): continue, adjust or hand over, with concessional support tapering (Decision 5).
- Three baselines are needed before cohort 1 so that these triggers can work: a disaggregated MSME intake baseline, a lender portfolio baseline and an anchor procurement baseline.
- Risks: the risks the Committee can most influence each link to a decision: partner commitment (first loss, Decision 4; term-sheet talks, Decision 5); the depth of the cohort 1 pipeline (Decision 3); low-season default (first loss, Decision 4); and inconsistent targeting (Decision 2). Two are noted rather than linked: the timeframe (the extension, for GIZ and the funders) and currency and exchange control, managed through the loan terms (lending in the currency of revenue, a loss reserve, registering foreign loans with the Reserve Bank of Zimbabwe).`);

finish(pres, process.argv[2] || "slide11_option.pptx");
