// F6-D11 slide 4 option for review: the storyline centred on the Financial Landscape Analysis workstream,
// informed by the Macro and Micro Diagnostics. One slide, same theme as the F6-D11 deck.
// Usage: node deliverables/build/f6_d11_slide4_option.js out.pptx
const { newDeck, makeHelpers, finish, usePalette, HEX } = require("./deck_lib");
usePalette("blue");

const FOOT = "KAZA R-NBT · Output 1.2 summary pack for the Oversight Committee (F6-D11) · Draft for decision";
const { pres, C } = newDeck({ title: "F6-D11 slide 4 option: storyline", subject: "Option for review", footer: FOOT });
const H = makeHelpers(pres, C);
const { sec, content, T } = H;
const S = pres.shapes;

const circle = (s, x, y, d, color, text, size = 14) => {
  s.addShape(S.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color } });
  if (text !== undefined) T(s, String(text), { x, y, w: d, h: d, fontSize: size, bold: true, color: C.background1, align: "center", valign: "middle" });
};
const box = (s, { x, y, w, h, fill, line, text, size = 14, color, bold, align = "center", valign = "middle", radius = 0.08 }) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: radius, fill: { color: fill }, line: { color: line || fill, width: 1.25 } });
  if (text !== undefined) T(s, text, { x: x + 0.08, y: y + 0.03, w: w - 0.16, h: h - 0.06, fontSize: size, color: color || C.text1, bold, align, valign });
};
const arrow = (s, x1, y1, x2, y2, color, width = 2.25) => {
  const o = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(Math.abs(x2 - x1), 0.001), h: Math.max(Math.abs(y2 - y1), 0.001), line: { color, width, endArrowType: "triangle" } };
  if ((x2 < x1) !== (y2 < y1)) o.flipH = true;
  s.addShape(S.LINE, o);
};

sec("What we know");
const s = content("The Financial Landscape Analysis, informed by the diagnostics");

// ---- left: inputs ----
T(s, "Informed by (SIGMA)", { x: 0.6, y: 1.3, w: 3.0, h: 0.38, fontSize: 14, bold: true, color: "4A4A4A" });
const inputs = [
  ["Macro Diagnostic", "Oct 2026", ["Priority areas and value chains", "Survey of 106 MSMEs", "Finance interviews"], HEX.sage],
  ["Micro Diagnostics", "GM3-D10, Nov 2026", ["Hwange–Victoria Falls–Livingstone and Okavango–Maun", "141 survey responses"], HEX.olive],
];
inputs.forEach(([h, d, items, col], i) => {
  const y = 1.75 + i * 2.2;
  s.addShape(S.ROUNDED_RECTANGLE, { x: 0.6, y, w: 3.0, h: 2.0, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: col, width: 1.75 } });
  box(s, { x: 0.75, y: y + 0.13, w: 2.7, h: 0.45, fill: col, text: h, size: 14, bold: true, color: C.background1, radius: 0.2 });
  T(s, d, { x: 0.8, y: y + 0.62, w: 2.6, h: 0.3, fontSize: 11.5, bold: true, color: col });
  T(s, items.map((t, k) => ({ text: t, options: { bullet: { indent: 10 }, breakLine: k < items.length - 1, paraSpaceAfter: 3 } })), { x: 0.8, y: y + 0.92, w: 2.7, h: 1.02, fontSize: 12, valign: "top" });
  arrow(s, 3.62, y + 1.0, 4.0, y + 1.0, col, 2.5);
});

// ---- centre: the workstream ----
const wx = 4.05, wy = 1.3, ww = 6.0, wh = 4.75;
s.addShape(S.ROUNDED_RECTANGLE, { x: wx, y: wy, w: ww, h: wh, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: HEX.forest, width: 2.25 } });
box(s, { x: wx, y: wy, w: ww, h: 0.62, fill: HEX.forest, radius: 0.08 });
T(s, [{ text: "Financial Landscape Analysis workstream", options: { bold: true, fontSize: 16, breakLine: true } }, { text: "Output 1.2 Access to Finance · July to November 2026", options: { fontSize: 11.5 } }], { x: wx + 0.2, y: wy, w: ww - 0.4, h: 0.62, color: C.background1, valign: "middle" });
const ws = [
  ["F1-D4", "Financial landscape", "Who lends, guarantees and supports in each Partner State; readiness to pilot", HEX.green],
  ["F2-D5", "Barriers and opportunities", "Collateral, seasonality, informality, risk perception, power imbalances", HEX.gold],
  ["F3-D6", "Investment readiness", "Readiness tiers 0–3: who is ready for which kind of finance", HEX.brown],
  ["F4-D7", "Financing mechanisms", "What fits each value chain: guarantees with first loss, order-backed and asset finance, the RTFF", HEX.terra],
  ["F5-D8", "Roundtables", "Tested with Partner States (Maun, Sep) and with MSMEs and buyers (Victoria Falls and Maun, Nov)", HEX.olive],
];
ws.forEach(([c, h, d, col], i) => {
  const y = wy + 0.78 + i * 0.79;
  box(s, { x: wx + 0.2, y: y + 0.12, w: 0.95, h: 0.42, fill: col, text: c, size: 12, bold: true, color: C.background1, radius: 0.21 });
  T(s, [{ text: h, options: { bold: true, color: C.text2, breakLine: true } }, { text: d, options: { fontSize: 11.5, color: "333333" } }], { x: wx + 1.3, y, w: ww - 1.45, h: 0.72, fontSize: 13.5, valign: "middle" });
  if (i < ws.length - 1) s.addShape(S.LINE, { x: wx + 1.3, y: y + 0.76, w: ww - 1.5, h: 0, line: { color: HEX.line, width: 0.75 } });
});

// ---- right: synthesis and decisions ----
arrow(s, 10.1, 2.75, 10.45, 2.75, HEX.forest, 2.5);
const outs = [
  ["F6-D9 Synthesis", "Validated in F6-D10", "One framework for Output 1.2: three activities, value chains, M&E, roadmap, partners", HEX.forest, 1.75],
  ["F6-D11 Today", "Oversight Committee", "Five decisions that move Output 1.2 from design to agreements", HEX.terra, 4.0],
];
outs.forEach(([h, d, b, col, y]) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x: 10.5, y, w: 2.25, h: 2.05, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: col, width: 1.75 } });
  box(s, { x: 10.6, y: y + 0.12, w: 2.05, h: 0.45, fill: col, text: h, size: 13, bold: true, color: C.background1, radius: 0.2 });
  T(s, d, { x: 10.62, y: y + 0.62, w: 2.05, h: 0.32, fontSize: 11, bold: true, color: col });
  T(s, b, { x: 10.62, y: y + 0.95, w: 2.05, h: 1.05, fontSize: 11.5, valign: "top" });
});
arrow(s, 11.62, 3.82, 11.62, 3.98, HEX.terra, 2.5);

// ---- bottom: four questions tied to decisions ----
const qs = [["Where?", "Decision 1"], ["For whom?", "Decision 2"], ["With what money?", "Decisions 3, 4"], ["With which partners?", "Decision 5"]];
T(s, "The evidence answers four questions", { x: 0.6, y: 6.17, w: 3.3, h: 0.62, fontSize: 13.5, bold: true, color: C.text2, valign: "middle" });
qs.forEach(([q, d], i) => {
  const x = 3.95 + i * 2.2;
  box(s, { x, y: 6.17, w: 2.1, h: 0.62, fill: HEX.cream, line: HEX.line });
  T(s, [{ text: q, options: { bold: true, color: C.text2, breakLine: true } }, { text: d, options: { color: HEX.terraDk, fontSize: 11 } }], { x: x + 0.05, y: 6.17, w: 2.0, h: 0.62, fontSize: 12.5, align: "center", valign: "middle" });
});

s.addNotes(
`One storyline (2 minutes).
- The Output 1.2 recommendations come from the Financial Landscape Analysis workstream of the Access to Finance assignment (July to November 2026), which was informed throughout by SIGMA's Macro and Micro Diagnostics.
- Informed by: the Macro Diagnostic (October 2026) set the priority areas and value chains, surveyed 106 MSMEs and held finance interviews; the destination Micro Diagnostics (GM3-D10, November 2026) took the analysis to Hwange–Victoria Falls–Livingstone and Okavango–Maun, with 141 survey responses in the November update.
- The workstream built the finance case step by step. F1-D4 mapped who lends, guarantees and supports MSMEs in each Partner State and how ready each is to pilot: finance exists in every Partner State, but not on terms these enterprises can use. F2-D5 set out five barriers (collateral, seasonality, informality and capacity, risk perception, power imbalances) and the opportunities to address them. F3-D6 assessed investment readiness and placed enterprises on tiers 0 to 3. F4-D7 assessed which financing mechanisms fit each priority value chain: guarantee windows with first loss, order-backed and asset finance, community finance and the RTFF. F5-D8 prepared and documented the roundtables: the KAZA Regional Roundtable in Maun (22–24 September 2026, 113 participants) with the Partner States, and the finance segments of the working sessions with MSMEs, buyers and associations in Victoria Falls (10 November) and Maun (12 November).
- F6-D9 consolidates the workstream into one framework for Output 1.2, which was presented for validation to GIZ and regional partners, including SADC FANR and the KAZA Secretariat (F6-D10). Today, F6-D11 brings it to the Committee for five decisions.
- The evidence answers four questions, each tied to today's decisions: where Output 1.2 will work (Decision 1); for whom, defined consistently (Decision 2); with what money (Decisions 3 and 4); and with which partners (Decision 5).`);

finish(pres, process.argv[2] || "slide4_option.pptx");
