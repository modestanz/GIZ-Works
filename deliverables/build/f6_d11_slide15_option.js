// F6-D11 slide 15 option for review (stand-alone). Built from for the Oversight Committee (16 slides, blue-teal palette; narrative in speaker notes)
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
const chip = (s, nums, label = "Informs", lw = 1.45) => {
  const w = lw + 0.1 + nums.length * 0.5;
  box(s, { x: 0.6, y: 1.22, w, h: 0.4, fill: "F3E3DC", line: HEX.terra, radius: 0.2 });
  T(s, label + (nums.length > 1 ? " decisions" : " decision"), { x: 0.72, y: 1.22, w: lw, h: 0.4, fontSize: 12, bold: true, color: HEX.terraDk, valign: "middle" });
  nums.forEach((n, i) => circle(s, 0.67 + lw + i * 0.5, 1.26, 0.32, HEX.terra, n, 11));
};
const chartText = { catAxisLabelFontFace: "+mn-lt", valAxisLabelFontFace: "+mn-lt", dataLabelFontFace: "+mn-lt", titleFontFace: "+mn-lt", legendFontFace: "+mn-lt" };
const DEC = [
  "Intervention areas for Output 1.2",
  "One youth band (18–35) and one women-led test",
  "Grant-facility envelope and lot split",
  "First loss and guarantee fees under Activity 1.2.3",
  "Term-sheet talks and decision-gate criteria",
];

// ---------------- 15. Next 100 days ----------------
sec("Next steps");
let s = content("After the decisions: the first 100 days");
const ph = [
  ["Days 1–14", "Take over", HEX.sage, ["Handover meeting; action log agreed", "TUI, GIZ and SIGMA: RTFF entry criteria and indicators", "Follow up SADC-DFRC's position"]],
  ["Days 15–30", "Validate", HEX.olive, ["F6-D9 revised after validation", "Committee sitting prepared with these decision sheets", "OKACOM overlap and ITC's Maun coverage confirmed"]],
  ["Days 31–60", "Decide and open talks", HEX.terra, ["Committee decisions recorded and sent to partners", "Term-sheet talks with shortlisted partners", "GIZ commissions the readiness diagnostic, supply MOU template, intake baseline and grant manual"]],
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
- Days 31–60, decide and open talks: Committee decisions recorded and communicated to partners; term-sheet talks with ECGC and SMEDCO, FNB Zambia and ZANACO, CEDA, NDB and BOSRIA, NASRIA and DBN, and two anchors per area; readiness diagnostic, supply MOU template, intake baseline and grant manual commissioned.
- Days 61–100, prepare season one: first platform sessions in PA1 and PA2 in the low season and the supplier directory published; grant-manager procurement launched, competition package and Lot 1 call drafted; RTFF referral and co-financing protocol agreed; intake baselines started; commitments log reviewed monthly.
- Owners are proposals for GIZ to confirm.`);


finish(pres, process.argv[2] || "slide15_option.pptx");
