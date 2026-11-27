// F6-D10 slide 12 option for review: "Measurement drives finance", in the F6-D10 by-deliverable format
// (deliverable bar, finding as title, three recommendations). One slide. Usage: node deliverables/build/f6_d10_slide12_option.js out.pptx
const { newDeck, makeHelpers, finish, usePalette, HEX } = require("./deck_lib");
usePalette("blue");

const FOOT = "KAZA R-NBT · Output 1.2 findings for validation (F6-D10) · Draft";
const { pres, C } = newDeck({ title: "F6-D10 slide 12 option: measurement drives finance", subject: "Option for review", footer: FOOT });
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
// same deliverable-slide frame as the F6-D10 deck
const dslide = (code, finding, recs, draw, notes) => {
  const s = content(finding);
  box(s, { x: 0.6, y: 1.2, w: 5.6, h: 0.4, fill: C.text2, text: code, size: 12.5, bold: true, color: C.background1, radius: 0.2, align: "left" });
  s.addShape(S.ROUNDED_RECTANGLE, { x: 8.05, y: 1.75, w: 4.7, h: 5.1, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
  T(s, "Recommendations", { x: 8.3, y: 1.9, w: 4.2, h: 0.45, fontSize: 17, bold: true, color: C.text2, fontFace: "Cambria" });
  const rc = [HEX.green, HEX.gold, HEX.terra];
  recs.forEach((r, i) => {
    const y = 2.55 + i * 1.42;
    circle(s, 8.3, y, 0.48, rc[i], i + 1, 14);
    T(s, r, { x: 8.92, y: y - 0.04, w: 3.68, h: 1.32, fontSize: 14.5, valign: "top" });
  });
  draw(s);
  s.addNotes(notes);
  return s;
};

sec("Synthesis F6-D9");
dslide("F6-D9 · Contribution to the M&E framework", "Measurement drives finance", [
  "Collect three baselines before cohort 1: MSME intake, lender portfolios, anchor procurement",
  "Use one youth band (18–35) and one women-led test across grants, the RTFF and M&E",
  "Verify milestones independently and review results at each gate before money moves",
], (s) => {
  T(s, [
    { text: "One system on GM1-D5: ", options: { bold: true, color: C.text2 } },
    { text: "18 programme, 23 Output 1.2 and 32 RTFF indicators, disaggregated by sex, age (18–35), disability, country, value chain and tier" },
  ], { x: 0.6, y: 1.75, w: 7.25, h: 0.6, fontSize: 12, valign: "middle" });
  T(s, "We measure", { x: 0.6, y: 2.4, w: 2.9, h: 0.3, fontSize: 12, bold: true, color: "6B6B6B" });
  T(s, "It decides", { x: 4.0, y: 2.4, w: 3.8, h: 0.3, fontSize: 12, bold: true, color: "6B6B6B" });
  const md = [
    ["Repayment by season (PAR30) and uptake", "Gate 1 (Q1 2028): stop or adjust a product if PAR30 > 15% or uptake < half of target"],
    ["Verified R-NBT and local-sourcing milestones", "RTFF interest rate steps down for agreed results"],
    ["Grant milestones met", "Grant tranches released in stages"],
    ["Repayment data over three seasons", "First-loss cover tapers from 15% to zero"],
    ["Leverage of at least 1:1; lenders continuing", "Gate 2 (Q4 2028): continue, adjust or hand over; concessional support tapers"],
  ];
  md.forEach(([m, d], i) => {
    const y = 2.75 + i * 0.82;
    box(s, { x: 0.6, y, w: 2.9, h: 0.7, fill: HEX.cream, line: HEX.line, text: m, size: 12, color: C.text2, bold: true });
    arrow(s, 3.55, y + 0.35, 3.95, y + 0.35, HEX.gold, 2);
    s.addShape(S.ROUNDED_RECTANGLE, { x: 4.0, y, w: 3.85, h: 0.7, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: HEX.olive, width: 1.25 } });
    T(s, d, { x: 4.12, y, w: 3.65, h: 0.7, fontSize: 12, valign: "middle" });
  });
},
`F6-D9: Contribution to the M&E framework (3 minutes). See F6-D9 Chapter 6 and Sections 5.2, 5.3 and 7.1.
- One measurement system: Output 1.2 reuses the 18 GM1-D5 programme indicators (MSME, destination and KAZA level, targets to be set in GM3-D11) and adds 23 Output 1.2 indicators; a further 32 indicators track the RTFF pilot, partner readiness, handover to the KAZA Secretariat and post-pilot roll-out. Outputs are kept separate from outcomes and impact. Every enterprise-level indicator is disaggregated by country, area, value chain and readiness tier, and by sex, age (one youth band of 18–35) and disability, with a majority ownership or decision-making test for women- and youth-led status. The survey figures (for example 21% obtaining finance) are references, not a baseline.
- Main finding: the numbers are not only reported; they trigger finance decisions.
  - Repayment by season and uptake decide Gate 1 (Q1 2028): a product is stopped or adjusted if arrears over 30 days (PAR30) exceed 15% or uptake is below half of target.
  - Verified milestones (formalisation, local sourcing, R-NBT practice) step the RTFF interest rate down for agreed results.
  - Grant milestones release grant tranches in stages.
  - Repayment data over three seasons let first-loss cover taper from 15% to zero.
  - Finance leveraged per euro of grant and first loss (target at least 1:1), with repayment by season, at least 60% to women- and youth-led enterprises and lenders continuing, decide Gate 2 (Q4 2028): continue, adjust or hand over, with concessional support tapering.
- Recommendations: collect three baselines before cohort 1 disbursement (MSME intake, lender and guarantor portfolios, anchor procurement), so that the triggers have something to compare against; adopt one youth band and one women-led test across grants, the RTFF and M&E; verify milestones and results payments independently and review results at each decision gate before money moves.
- The gate criteria and the related decisions go to the Oversight Committee in F6-D11.
Facilitation prompt (item C1): Can partners report the data asked of them, and are these the right triggers for moving money?`);

finish(pres, process.argv[2] || "slide12_option.pptx");
