// F6-D10: High-level validation presentation (9 slides, graphical; narrative in speaker notes)
// Usage: node deliverables/build/f6_d10_deck.js out.pptx
const { newDeck, makeHelpers, finish, HEX } = require("./deck_lib");

const FOOT = "KAZA R-NBT · Output 1.2 findings for validation (F6-D10) · Draft";
const { pres, C } = newDeck({ title: "Output 1.2 Findings for Validation", subject: "F6-D10 plenary presentation for GIZ and regional partners", footer: FOOT });
const H = makeHelpers(pres, C);
const { sec, content, card, T } = H;
const S = pres.shapes;

// small helpers
const circle = (s, x, y, d, color, text, size = 16) => {
  s.addShape(S.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color } });
  if (text !== undefined) T(s, String(text), { x, y, w: d, h: d, fontSize: size, bold: true, color: C.background1, align: "center", valign: "middle" });
};
const box = (s, { x, y, w, h, fill, line, text, size = 14, color, bold, align = "center", valign = "middle", radius = 0.08 }) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: radius, fill: { color: fill }, line: { color: line || fill, width: 1.25 } });
  if (text !== undefined) T(s, text, { x: x + 0.1, y: y + 0.05, w: w - 0.2, h: h - 0.1, fontSize: size, color: color || C.text1, bold, align, valign });
};
const line = (s, x1, y1, x2, y2, color, width = 1.5, arrow) => {
  const o = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(Math.abs(x2 - x1), 0.001), h: Math.max(Math.abs(y2 - y1), 0.001), line: { color, width } };
  if ((x2 < x1) !== (y2 < y1)) o.flipH = true;
  if (arrow) o.line.endArrowType = "triangle";
  s.addShape(S.LINE, o);
};
const chartText = { catAxisLabelFontFace: "+mn-lt", valAxisLabelFontFace: "+mn-lt", dataLabelFontFace: "+mn-lt", titleFontFace: "+mn-lt", legendFontFace: "+mn-lt" };

// ---------------- 1. Title ----------------
sec("Opening");
let s = H.add("TITLE_LIGHT");
s.addText("F6-D10 · Plenary session for validation", { placeholder: "kicker" });
s.addText("Financing regenerative nature-based tourism MSMEs in KAZA", { placeholder: "title" });
s.addText("Output 1.2 findings and recommendations for validation by GIZ and regional partners, including SADC FANR and the KAZA Secretariat", { placeholder: "sub" });
s.addText("Presented by Modesta Nyirenda, MNZ Consult · [Date and venue to be confirmed] · Draft for validation", { placeholder: "meta" });
const motif = [["1.2.1", "Connect", HEX.green, 9.55, 1.15, -0.4, -0.1], ["1.2.2", "Prepare", HEX.gold, 11.0, 1.15, 0.4, -0.1], ["1.2.3", "Finance", HEX.terra, 10.27, 2.45, 0, 0.35]];
motif.forEach(([, , col, x, y]) => s.addShape(S.OVAL, { x, y, w: 2.15, h: 2.15, fill: { color: col, transparency: 12 }, line: { color: C.background1, width: 2 } }));
motif.forEach(([c, t, , x, y, dx, dy]) => T(s, [{ text: c, options: { fontSize: 13, breakLine: true } }, { text: t, options: { fontSize: 18, bold: true } }], { x: x + dx, y: y + 0.55 + dy, w: 2.15, h: 1.05, color: C.background1, align: "center", valign: "middle" }));
s.addNotes(
`Welcome and purpose (2 minutes).
- Thank GIZ and the regional partners, in particular SADC FANR and the KAZA Secretariat.
- This is a validation session, not a launch. The findings come from the F6-D9 Consolidated Synthesis Report, which draws together the five Output 1.2 finance studies (F1-D4 to F5-D8), the October 2026 Macro Diagnostic, the two GM3-D10 destination Micro Diagnostics and the November 2026 working sessions in Victoria Falls and Maun.
- Output 1.2: financial mechanisms are established in collaboration with financial institutions to support targeted MSMEs, through three activities: 1.2.1 dialogue platforms and matchmaking, 1.2.2 a grant facility and 1.2.3 support to new and existing financing mechanisms.
- Content decisions belong to the Partner States and their institutions; the role of this session is to confirm, amend or reject the findings and to agree who carries what at regional level.
- The presentation has nine slides; the detail sits in the F6-D9 report and in these notes.
How the session works:
- Three questions run through the whole presentation: is the evidence right; is the design workable through the institutions named; and who carries what, at regional, national and destination level.
- For each finding participants raise a green (agree), amber (amend) or red (reject) card. The rapporteur records responses on the validation log against items A to D (slide 9). Discussion goes first to amber and red cards: what would need to change for the card to turn green?
- Disagreements are recorded with the reason rather than resolved on the spot. Questions on budget or programme scope go to a parking lot and are answered in writing. Participants can also send written comments within two weeks.`);

// ---------------- 2. Evidence base (F1-D4 Methodology and Evidence Base, Table B) ----------------
s = content("Built on six evidence streams, July to November 2026");
const groups = [
  ["Documents", HEX.gold, [["~90", "published references"], ["124", "Macro Diagnostic library sources"], ["27", "programme and KAZA documents"]]],
  ["Enterprises", HEX.green, [["106", "MSME survey responses"]]],
  ["Institutions", HEX.terra, [["20", "minuted interviews with 17 organisations"], ["66", "Macro Diagnostic engagements"]]],
  ["Roundtables", HEX.brown, [["113", "participants, Regional Roundtable, Maun"], ["~45", "in the Victoria Falls and Maun finance sessions"]]],
];
groups.forEach(([g, col, st], i) => {
  const x = 0.6 + i * 3.06, y = 1.35, w = 2.86, h = 3.45;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: C.background2 } });
  box(s, { x: x + 0.2, y: y + 0.18, w: w - 0.4, h: 0.5, fill: col, text: g, size: 16, bold: true, color: C.background1, radius: 0.25 });
  if (st.length === 1) {
    circle(s, x + (w - 1.75) / 2, y + 0.92, 1.75, col);
    T(s, st[0][0], { x: x + (w - 1.75) / 2, y: y + 0.92, w: 1.75, h: 1.75, fontSize: 40, bold: true, color: C.background1, align: "center", valign: "middle", fontFace: "Cambria" });
    T(s, st[0][1], { x: x + 0.15, y: y + 2.75, w: w - 0.3, h: 0.55, fontSize: 14, align: "center", valign: "top" });
  } else {
    const step = (h - 0.85) / st.length;
    st.forEach(([v, l], k) => {
      const yy = y + 0.85 + k * step;
      T(s, v, { x: x + 0.2, y: yy, w: w - 0.4, h: 0.55, fontSize: st.length === 3 ? 26 : 32, bold: true, color: col, align: "center", valign: "bottom", fontFace: "Cambria" });
      T(s, l, { x: x + 0.15, y: yy + 0.55, w: w - 0.3, h: step - 0.6, fontSize: 13, align: "center", valign: "top" });
    });
  }
});
// timeline of when each stream was gathered
const mx0 = 2.6, mw = 2.0, mx = (m) => mx0 + m * mw; // m = months since 1 July 2026
["Jul", "Aug", "Sep", "Oct", "Nov"].forEach((m, i) => T(s, m, { x: mx(i), y: 4.95, w: mw, h: 0.28, fontSize: 12, bold: true, color: "6B6B6B", align: "center" }));
s.addShape(S.LINE, { x: mx(0), y: 5.25, w: mw * 5, h: 0, line: { color: HEX.line, width: 1 } });
const rows = [["Desk and documents", 0, 5, HEX.gold], ["MSME survey", 1, 3.2, HEX.green], ["Interviews", 0, 5, HEX.terra]];
rows.forEach(([lab, a1, a2, col], i) => {
  const y = 5.35 + i * 0.36;
  T(s, lab, { x: 0.6, y, w: 1.9, h: 0.28, fontSize: 12, color: C.text1, valign: "middle" });
  s.addShape(S.ROUNDED_RECTANGLE, { x: mx(a1), y: y + 0.04, w: mw * (a2 - a1), h: 0.2, rectRadius: 0.1, fill: { color: col }, line: { color: col } });
});
const ry = 5.35 + 3 * 0.36;
T(s, "Roundtables", { x: 0.6, y: ry, w: 1.9, h: 0.28, fontSize: 12, color: C.text1, valign: "middle" });
[[2.73, "Maun, Sep"], [4.31, "Victoria Falls"], [4.37, ""]].forEach(([m, lab]) => {
  s.addShape(S.DIAMOND, { x: mx(m) - 0.12, y: ry + 0.02, w: 0.24, h: 0.24, fill: { color: HEX.brown }, line: { color: HEX.brown } });
});
T(s, "Regional, 22–24 Sep", { x: mx(2.73) + 0.18, y: ry, w: 1.6, h: 0.28, fontSize: 11, color: "4A4A4A", valign: "middle" });
T(s, "Destinations, 10 and 12 Nov", { x: mx(4.37) + 0.18, y: ry - 0.06, w: 1.15, h: 0.4, fontSize: 9.5, color: "4A4A4A", valign: "middle" });
T(s, "Source: F1-D4 Methodology and Evidence Base, Table B", { x: 8.6, y: 6.72, w: 4.1, h: 0.26, fontSize: 10, italic: true, color: "6B6B6B", align: "right" });
s.addNotes(
`Evidence base (3 minutes).
- The findings rest on six evidence streams gathered between July and November 2026 (F1-D4 Methodology and Evidence Base, Table B).
  A. Desk review of published sources: central bank and regulator publications, legislation and policy, DFI, guarantee-scheme and bank annual reports and product pages; around 90 references.
  B. Programme and KAZA documents: the Macro Diagnostic library of 124 sources (Findings Report V2, Regional Roundtable report GM2-D9, RTFF Finance Lab report); 20 official files (17 distinct documents) provided by GIZ, including the RTFF presentation and KAZA institutional sources; and 10 KAZA-specific public documents (KAZA Treaty and Master Integrated Development Plan, 2026 Ministerial Committee communiqué, KAZA Conservation Trust Fund, OKACOM Agreement and CORB Fund).
  C. The Macro Diagnostic MSME Enterprise Readiness survey: 106 valid responses (August to October 2026) on registration, finance sought and obtained, buyer links, savings groups and finance needs.
  D. One-on-one interviews for this analysis: 20 minuted engagements with 17 organisations (DFIs, guarantee schemes, commercial and microfinance banks, a public MSME agency, a verifier, river-basin and conservation-finance bodies and a grant programme), August to November 2026.
  E. Macro Diagnostic interviews: 66 engagements with government, operators, associations, community bodies and programme partners; their finance interviews are largely those in stream D, with four additional finance-relevant engagements.
  F. Roundtables: the KAZA Regional Roundtable in Maun with the RTFF Finance Implementation Lab (113 participants, 22–24 September) and the finance segments of the destination roundtables in Victoria Falls (about 24–27) and Maun (about 20) on 10 and 12 November.
- Key findings were cross-checked across streams and graded as triangulated, partially triangulated or desk-only. Ratings and readiness scores were assigned by the study team and are indicative; they have not yet been validated by the institutions concerned, which is one purpose of this session.
- Caveats: the survey is self-selected and leans towards registered, established enterprises; evidence depth differs between Partner States; partner interest comes from single meetings and is not yet commitment.
Facilitation prompt: Is any important source or institution missing?`);

// ---------------- 3. Core finding ----------------
sec("Findings");
s = content("Finance is a fit, readiness and risk problem, not a capital shortage");
// left: stat stack
const stats = [["82 of 106", "MSMEs name finance a top-three challenge", C.accent3], ["54", "of them have never applied for a loan", C.accent2], ["~4%", "tourism share of Namibia's guarantee scheme reach", C.accent4]];
stats.forEach(([v, l, col], i) => {
  const y = 1.45 + i * 1.75;
  T(s, v, { x: 0.6, y, w: 4.2, h: 0.9, fontSize: 44, bold: true, color: col, fontFace: "Cambria", valign: "bottom" });
  T(s, l, { x: 0.6, y: y + 0.92, w: 4.2, h: 0.6, fontSize: 15, valign: "top" });
});
// right: buyer effect chart
s.addChart(pres.charts.BAR, [{ name: "Obtained external finance", labels: ["With a buyer arrangement", "Without a buyer arrangement"], values: [28, 8] }], {
  x: 5.3, y: 1.4, w: 7.4, h: 4.4, barDir: "col", chartColors: [HEX.green, HEX.sage], varyColors: true,
  showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0\"%\"", dataLabelFontSize: 22, dataLabelColor: HEX.text, dataLabelFontBold: true,
  showTitle: true, title: "A buyer is the strongest predictor of finance (% of surveyed MSMEs)", titleFontSize: 16, titleColor: HEX.forest,
  valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, catAxisLabelColor: HEX.text, catAxisLabelFontSize: 15,
  valAxisMaxVal: 35, valAxisMinVal: 0, showLegend: false, barGapWidthPct: 80, ...chartText,
});
box(s, { x: 5.3, y: 5.95, w: 7.4, h: 0.85, fill: C.background2, text: "Capacity gaps in records, compliance and management are part of the access-to-finance barrier", size: 15, color: C.text2, bold: true });
s.addNotes(
`Core finding (4 minutes).
- All five Output 1.2 studies reach the same conclusion from different directions: the problem is the fit between finance and enterprises, not the volume of capital. Banks are liquid and present in the hub towns, four Partner States run national credit guarantee schemes and anchor lodges want to buy locally.
- But finance on offer is built for land collateral, steady monthly income and formal records. Most tourism MSMEs are micro, informal or semi-formal, operate on communal or concession land and earn most of their revenue in five peak months.
- Of 106 MSMEs surveyed in the Macro Diagnostic, 82 name finance as a top-three challenge, yet 54 have never applied. Tourism takes only about 4% of Namibia's guarantee scheme reach and under 10% of Zimbabwe's.
- The strongest single predictor of finance is a buyer: enterprises with a buyer arrangement were three and a half times as likely to have obtained external finance (28% against 8%). Market links make a business bankable.
- Capacity gaps in record-keeping, compliance and management are part of the access-to-finance barrier, so coaching must come with finance, not after it.
- Five barriers recur in every country: collateral, seasonality, informality, lenders' risk perception and power imbalances with buyers (late payment, termination without notice). Women- and youth-led enterprises face each more acutely.
Facilitation prompt (item A1): Does this diagnosis hold for your country and institution? What is missing?`);

// ---------------- 4. Countries and areas ----------------
s = content("Where to start: every state has institutions to build on");
s.addChart(pres.charts.BAR, [{ name: "Readiness score (0–5)", labels: ["Zambia", "Zimbabwe", "Botswana", "Namibia", "Angola"], values: [4.1, 3.9, 3.4, 3.2, 1.4] }], {
  x: 0.5, y: 1.35, w: 5.9, h: 4.9, barDir: "bar", chartColors: [HEX.green, HEX.green, HEX.gold, HEX.gold, HEX.terra], varyColors: true,
  showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0.0", dataLabelFontSize: 15, dataLabelColor: HEX.text, dataLabelFontBold: true,
  showTitle: true, title: "Country readiness to pilot (F1-D4 score, 0–5)", titleFontSize: 15, titleColor: HEX.forest,
  catAxisOrientation: "maxMin", valAxisHidden: true, valAxisMaxVal: 5, valAxisMinVal: 0, valGridLine: { style: "none" }, catGridLine: { style: "none" },
  catAxisLabelColor: HEX.text, catAxisLabelFontSize: 15, showLegend: false, barGapWidthPct: 45, ...chartText,
});
[["Ready to pilot", C.accent1], ["Ready with adjustments", C.accent2], ["Readiness first", C.accent3]].forEach(([t, col], i) => {
  s.addShape(S.RECTANGLE, { x: 0.8 + i * 1.95, y: 6.38, w: 0.2, h: 0.2, fill: { color: col }, line: { color: col } });
  T(s, t, { x: 1.05 + i * 1.95, y: 6.3, w: 1.75, h: 0.36, fontSize: 11, color: "4A4A4A", valign: "middle" });
});
s.addChart(pres.charts.BAR, [
  { name: "PA1 Hwange–Victoria Falls–Livingstone", labels: ["Obtained finance", "Written contract", "Women-led", "Notebook or no records"], values: [20, 42, 36, 25] },
  { name: "PA2 Okavango Delta–Maun", labels: ["Obtained finance", "Written contract", "Women-led", "Notebook or no records"], values: [20, 18, 48, 38] },
], {
  x: 6.7, y: 1.35, w: 6.1, h: 5.3, barDir: "col", chartColors: [HEX.green, HEX.gold],
  showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0\"%\"", dataLabelFontSize: 13, dataLabelColor: HEX.text,
  showTitle: true, title: "Two priority areas, two starting points (% of respondents)", titleFontSize: 15, titleColor: HEX.forest,
  valAxisHidden: true, valAxisMaxVal: 55, valAxisMinVal: 0, valGridLine: { style: "none" }, catGridLine: { style: "none" },
  catAxisLabelColor: HEX.text, catAxisLabelFontSize: 13, showLegend: true, legendPos: "b", legendFontSize: 12, legendColor: HEX.text, barGapWidthPct: 60, ...chartText,
});
s.addNotes(
`Country and destination starting points (4 minutes).
- KAZA does not mainly need another finance institution. Each Partner State has institutions that can carry a pilot, although tourism is a marginal user of all of them.
- The F1-D4 readiness scores rate each state's KAZA corridor on six weighted criteria. Zambia (4.1: FNB Zambia scored credit, ZANACO, ZCGS, MSMED grants) and Zimbabwe (3.9: the ECGC guarantee with 75–85% cover, SMEDCO, Women's Microfinance Bank) are ready to pilot now. Botswana (3.4: CEDA, NDB, BOSRIA since 2026, Wilderness–Stanbic supplier finance) and Namibia (3.2: NASRIA's women and youth proposal, DBN For Her, NYDF) need adjustments. Angola (1.4: mostly unbanked, one anchor camp) needs readiness work first.
- The two priority areas start from different places. In Hwange–Victoria Falls–Livingstone (64 respondents) the base is established, guiding- and transport-heavy, and 42% hold a written contract. In Okavango–Maun (40 respondents) it is smaller and more informal: 48% women-led, crafts the largest group, only 18% with a contract and more relying on a notebook or no records. In both, only 20% have ever obtained finance.
- The November sessions confirmed this: Victoria Falls asked for lower cost and better structure (bank rates near 28%, seasonal repayment, association guarantees, buyer-deducted repayment); Maun asked for access (a route for unregistered groups through a kgosi's letter, Setswana and paper forms, cash and mobile-money repayment, an end to unpaid consignment).
- Delivery cores: PA1 and PA2; Namibia's Zambezi Region as a third area only if resourced; Angola on a readiness-first track.
- Survey caveat: responses are self-selected and lean towards registered firms; they describe respondents, not a baseline.
Facilitation prompts (items A2–A4): Are the readiness bands and institutions right for your country? Do the two area profiles match what you see?`);

// ---------------- 5. Framework ----------------
sec("Recommendations");
s = content("One pathway, three activities");
const tiers = [["Tier 0", "Pre-enterprise, groups"], ["Tier 1", "Emerging micro"], ["Tier 2", "Supplier-ready"], ["Tier 3", "Investment-ready"]];
tiers.forEach(([t, d], i) => {
  const x = 0.7 + i * 3.02;
  s.addShape(S.CHEVRON, { x, y: 1.4, w: 3.15, h: 0.95, fill: { color: [HEX.sage, HEX.olive, HEX.green, HEX.forest][i] }, line: { color: C.background1, width: 1 } });
  T(s, [{ text: t, options: { bold: true, fontSize: 15, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: x + 0.45, y: 1.42, w: 2.3, h: 0.9, color: C.background1, align: "center", valign: "middle" });
});
const acts = [
  ["1", "Connect", "1.2.1 Dialogue platforms and matchmaking", ["One platform per delivery core, quarterly", "Supply MOUs with anchors", "Lender learning track"], C.accent1],
  ["2", "Prepare", "1.2.2 Grant facility", ["Lot 1 up to EUR 10,000", "Lot 2 EUR 10,000–40,000", "Grants become the borrower's contribution"], C.accent2],
  ["3", "Finance", "1.2.3 Financing mechanisms", ["Adapted products of lenders that stay", "Risk-sharing with guarantors", "Several options, including the RTFF"], C.accent3],
];
acts.forEach(([n, h, sub, items, col], i) => {
  const x = 0.7 + i * 4.15;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 2.65, w: 3.75, h: 3.0, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: col, width: 2 } });
  circle(s, x + 0.2, 2.85, 0.75, col, n, 22);
  T(s, h, { x: x + 1.1, y: 2.82, w: 2.5, h: 0.5, fontSize: 22, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
  T(s, sub, { x: x + 1.1, y: 3.3, w: 2.55, h: 0.35, fontSize: 11.5, color: "4A4A4A", italic: true });
  T(s, items.map((t, k) => ({ text: t, options: { bullet: { indent: 14 }, breakLine: k < items.length - 1, paraSpaceAfter: 6 } })), { x: x + 0.25, y: 3.85, w: 3.3, h: 1.7, fontSize: 14.5, valign: "top" });
  if (i < 2) line(s, x + 3.8, 4.15, x + 4.1, 4.15, HEX.gold, 2.5, true);
});
box(s, { x: 0.7, y: 5.85, w: 11.95, h: 0.8, fill: "F3E3DC", line: HEX.terra, text: "Underpinned by Activity 1.1.1 coaching: records, costing, compliance and supplier readiness, before and after finance", size: 15, color: HEX.terraDk, bold: true });
s.addNotes(
`Strategic framework (4 minutes).
- The three Output 1.2 activities are designed as one graduation pathway, not three separate projects. Enterprises enter at their readiness tier (0 pre-enterprise to 3 investment-ready) and move up as each step creates the record the next lender needs; concessionality falls as they move.
- Activity 1.2.1 connects. One finance and market-linkage platform per delivery core (Livingstone–Victoria Falls with Hwange; Maun with the Delta community areas; the Zambezi Region if resourced), convened through associations, lodge impact officers and connectors on a quarterly cycle timed to the season. Formats: common-understanding workshops, lender clinics, women-only and youth-only sessions, deal days, and anchor procurement roundtables leading to a standard supply MOU (written orders, payment within 30 days, notice before termination). A learning track for banks, MFIs, guarantee schemes and DFIs covers tourism literacy, extended ESG and how verified nature-positive practice can count positively in credit assessment. Output: a screened pipeline with coded rejection reasons.
- Activity 1.2.2 prepares and de-risks. Lot 1 (up to EUR 10,000, 10–20% contribution, largely in kind) for Tier 0–1 micro, start-up, group and community enterprises; Lot 2 (EUR 10,000–40,000, 30–50% contribution, which may be loan-financed) for Tier 2, or Tier 1 with a buyer. A conversion clause lets a Lot 2 grant serve as the borrower's contribution or cash collateral. Grants are conditional on training, and at least 60% go to women- or youth-led enterprises.
- Activity 1.2.3 finances through institutions that will remain after the project: per area at least one lender, one guarantor and two anchors piloting adapted products over two tourism seasons.
- Activity 1.1.1 capacity building underpins all three.
Facilitation prompt (items B1–B3): Is one pathway the right organising idea? Are the lot sizes and contribution rules right for women, youth and community groups?`);

// ---------------- 6. Financing options ----------------
s = content("Several ways to fill one financing gap");
const cx = 6.67, cy = 4.15;
const sats = [
  ["Guarantee windows with first loss", "ECGC, NASRIA/BOSRIA, Zambian risk-sharing", -90, C.accent1],
  ["Order-backed supply finance", "Against standard supply MOUs", -18, C.accent2],
  ["Asset and lease-to-own", "Vehicles, boats, laundry, solar", 54, C.accent4],
  ["Community and group finance", "Savings groups, guarantee pools, revolving funds", 126, C.accent5],
  ["RTFF (TUI Care Foundation)", "Collateral-free, buyer-linked loans", 198, C.accent3],
];
const pts = sats.map(([, , a]) => [cx + 3.95 * Math.cos(a * Math.PI / 180), cy + 2.0 * Math.sin(a * Math.PI / 180)]);
pts.forEach(([px, py]) => line(s, cx, cy, px, py, HEX.line, 2));
circle(s, cx - 1.25, cy - 1.25, 2.5, C.text2);
T(s, [{ text: "The gap", options: { bold: true, fontSize: 17, breakLine: true, color: HEX.gold } }, { text: "EUR 1,000–30,000", options: { bold: true, fontSize: 16, breakLine: true } }, { text: "repaid over 1–2 seasons, no land collateral", options: { fontSize: 12.5 } }],
  { x: cx - 1.1, y: cy - 1.0, w: 2.2, h: 2.0, color: C.background1, align: "center", valign: "middle" });
sats.forEach(([h, d, , col], i) => {
  const [px, py] = pts[i];
  s.addShape(S.ROUNDED_RECTANGLE, { x: px - 1.65, y: py - 0.58, w: 3.3, h: 1.16, rectRadius: 0.12, fill: { color: C.background1 }, line: { color: col, width: 2 } });
  T(s, [{ text: h, options: { bold: true, fontSize: 15, breakLine: true, color: C.text2 } }, { text: d, options: { fontSize: 12.5, color: "4A4A4A" } }], { x: px - 1.58, y: py - 0.55, w: 3.16, h: 1.1, align: "center", valign: "middle" });
});
T(s, "Delivered through national lenders, guarantors, MFIs and anchors that stay after the pilot", { x: 0.6, y: 6.55, w: 12.1, h: 0.4, fontSize: 13, italic: true, color: "4A4A4A", align: "center" });
s.addNotes(
`Financing options (5 minutes).
- The financing studies define a structural gap that no current provider serves on usable terms: buyer-linked Tier 1–2 tourism MSMEs needing EUR 1,000–30,000 of working capital or a small asset, repaid over one or two seasons, without land or fixed collateral. Banks require collateral, savings groups and microfinance lend below the ticket, impact funds lend far above it, and grants create no repayment record.
- Several instruments can fill it, and Output 1.2 should test a small number through institutions that will own them after the pilot:
  1. Guarantee windows with first loss: tourism windows in ECGC, NASRIA/BOSRIA and a Zambian risk-sharing partner, with seasonal schedules, low-season grace and orders, invoices and movable assets as security. First loss of 10–15% of portfolio losses (20% for women- and youth-led or first-cycle portfolios), about EUR 75,000–225,000 per area pilot, tapering to zero over three seasons.
  2. Order-backed supply chain finance against standard supply MOUs, with anchors paying into a controlled account; it answers late payment directly.
  3. Asset and lease-to-own finance for guides, transport, laundry and solar enterprises, with seasonal grace and re-leasing of repossessed assets.
  4. Community and group finance: savings groups linked to MFIs, a community guarantee pool and community revolving funds; plus association guarantees with buyer-deducted repayment, proposed in Victoria Falls.
  5. The RTFF of the TUI Care Foundation: as presented in November, a revolving loan pilot for about 50 established businesses, at about 8–10% (not yet set) with step-downs, over 18–24 months, on social collateral, from the first quarter of 2027. It is one option among several. Four adjustments are proposed: seasonal and sales-linked schedules in loan agreements; a larger Tier 1 share; a loss reserve and lending in the currency of revenue; and a national partner for in-country recovery with a route to national lenders after the pilot. In Botswana an RTFF route is conditional; if none is confirmed, enterprises are financed through CEDA, NDB, BOSRIA-backed lenders, microfinance and the Youth Development Fund.
- Social and environmental bonds are not recommended as a pilot instrument; they are a later funding source for partner banks.
Facilitation prompts (items B4–B5): Which of these can your institutions carry, and on what conditions? Is the Botswana route right?`);

// ---------------- 7. Roadmap ----------------
sec("Roadmap and roles");
s = content("Two seasons of piloting, three decision points");
const qx0 = 1.0, qw = 1.06; // quarter index 0 = Q4 2026 ... 10 = Q2 2029
const qx = (q) => qx0 + q * qw;
// peak seasons (Q3 2027 = 3, Q3 2028 = 7)
[3, 7].forEach((q) => s.addShape(S.RECTANGLE, { x: qx(q), y: 1.75, w: qw, h: 3.35, fill: { color: "F7EFD9" }, line: { color: "F7EFD9" } }));
// extension zone after Dec 2028 (q >= 9)
s.addShape(S.RECTANGLE, { x: qx(9), y: 1.75, w: qw * 2, h: 3.35, fill: { color: "EFEFEF" }, line: { color: "EFEFEF" } });
// year and quarter labels
[["2026", 0, 1], ["2027", 1, 4], ["2028", 5, 4], ["2029", 9, 2]].forEach(([y, q, n]) => T(s, y, { x: qx(q), y: 1.3, w: qw * n, h: 0.3, fontSize: 14, bold: true, color: C.text2, align: "center" }));
["Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2"].forEach((q, i) => T(s, q, { x: qx(i), y: 1.55, w: qw, h: 0.22, fontSize: 10, color: "6B6B6B", align: "center" }));
// phases
const phases = [["Set-up", 0, 1, HEX.grey], ["Design", 1, 1, HEX.gold], ["Season one", 2, 4, HEX.forest], ["Season two + review", 6, 3, HEX.brown], ["Handover", 8.5, 2.5, HEX.sage]];
phases.forEach(([t, q, n, col]) => box(s, { x: qx(q) + 0.03, y: 1.95, w: qw * n - 0.06, h: 0.6, fill: col, text: t, size: 13, bold: true, color: C.background1, radius: 0.05 }));
// milestones
const ms = [["Partner State decisions", 0.3, 2.9], ["Agreements signed", 1.7, 3.55], ["First loans; Lot 1 and Lot 2 calls", 2.4, 2.9], ["Products open to non-grantees", 6.2, 3.55]];
ms.forEach(([t, q, y]) => {
  circle(s, qx(q) - 0.11, y, 0.22, HEX.gold);
  T(s, t, { x: qx(q) + 0.18, y: y - 0.08, w: 2.6, h: 0.4, fontSize: 12, color: C.text1, valign: "middle" });
});
// current project end line
s.addShape(S.LINE, { x: qx(9), y: 1.75, w: 0, h: 3.35, line: { color: HEX.terraDk, width: 2, dashType: "dash" } });
T(s, "Current end Dec 2028", { x: qx(9) + 0.08, y: 4.15, w: 1.9, h: 0.3, fontSize: 11, bold: true, color: HEX.terraDk });
T(s, "Extension to mid-2029 sought", { x: qx(9) + 0.08, y: 4.45, w: 2.0, h: 0.5, fontSize: 11, color: "6B6B6B" });
// gates
const gates = [["Gate 1", "Continue, adjust or stop", 5.5, "c"], ["RTFF future", "Form, host, channels", 8.15, "r"], ["Gate 2", "Continue or hand over", 8.85, "l"]];
gates.forEach(([g, d, q, al], i) => {
  const x = qx(q);
  const lx = al === "c" ? x - 1.0 : al === "r" ? x - 1.95 : x - 0.05;
  s.addShape(S.DIAMOND, { x: x - 0.2, y: 5.2, w: 0.4, h: 0.4, fill: { color: HEX.terra }, line: { color: HEX.terra } });
  T(s, [{ text: g, options: { bold: true, breakLine: true, color: HEX.terraDk } }, { text: d, options: { color: C.text1 } }], { x: lx, y: 5.68, w: 2.0, h: 0.7, fontSize: 13, align: al === "c" ? "center" : al === "r" ? "right" : "left", valign: "top" });
});
T(s, "Peak season shaded (June–October). Dates indicative.", { x: 0.6, y: 6.55, w: 8, h: 0.35, fontSize: 11, italic: true, color: "6B6B6B" });
s.addNotes(
`Roadmap and decision points (4 minutes).
- Piloting runs over two full tourism seasons so that low-season repayment is observed twice. The roadmap is fitted to the current project end in December 2028; the extension to mid-2029 being sought is what allows the second low season to be observed before the final review.
- Five phases: 0 validation and set-up (November 2026 to January 2027, including Partner State decisions on areas, value chains and criteria); 1 design and partnering (February to April 2027: agreements, product terms, supply MOU template, first Lot 1 window, grant managers); 2 season one (April 2027 to March 2028: RTFF cohort 1 on the TUI Care Foundation's timetable, pre-peak working capital, Lot 1 and Lot 2 awards, low-season asset loans); 3 season two and review (April to December 2028: products opened to non-grantees, second pilots such as community guarantee pools and results-based finance); 4 handover to national institutions and the KAZA Secretariat from Q4 2028.
- Sequencing: Activity 1.2.1 starts first and runs throughout; grants before debt for Tiers 0–1, finance first for Tier 2 with a buyer; strongest institutions and areas first (PA1, then PA2 through national channels).
- Three decision points:
  Gate 1 (Q1 2028): continue, adjust or stop each product; stop or adjust if arrears over 30 days (PAR30) exceed 15% or uptake is below half of target.
  RTFF future (Q4 2028): form, host, capital and national channels of the RTFF, decided with the KAZA Secretariat, the TUI Care Foundation and GIZ, before Gate 2 so that handover has a destination.
  Gate 2 (Q4 2028): continue, adjust or hand over, on three tests: repayment by season, at least 60% of finance to women- and youth-led enterprises, and lenders willing to continue with less concessional support.
- Measurement: one system built on the 18 GM1-D5 indicators, with 23 Output 1.2 indicators, separating outputs from outcomes and impact and disaggregated by sex, age (one youth band, 18–35) and disability.
Facilitation prompt (items C1–C3): Is the timing realistic? Are the gate thresholds right, and should regional partners receive the gate reviews?`);

// ---------------- 8. Roles ----------------
s = content("Who carries what: proposed roles, for discussion");
const layers = [
  ["Regional", HEX.forest, [["KAZA Secretariat", "Regional R-NBT Finance Forum · common diagnostic, supply MOU and indicators · RTFF future decision · OKACOM coordination"], ["SADC FANR", "Link to the SADC TFCA programme · peer learning for guarantee schemes and DFIs · regional finance partners, e.g. SADC-DFRC"]]],
  ["National", HEX.gold, [["Partner States and institutions", "Guarantee schemes and development banks: tourism windows · lenders: seasonal products, first-loss agreements · grant managers"]]],
  ["Destination", HEX.green, [["Platforms in PA1 and PA2", "BSOs, associations and connectors convene · anchors sign supply MOUs · MSMEs: coaching, grants, finance"]]],
];
layers.forEach(([lab, col, items], i) => {
  const y = 1.45 + i * 1.75;
  box(s, { x: 0.6, y, w: 1.9, h: 1.55, fill: col, text: lab, size: 17, bold: true, color: C.background1 });
  const w = (10.1 - (items.length - 1) * 0.2) / items.length;
  items.forEach(([h, d], k) => {
    const x = 2.7 + k * (w + 0.2);
    s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h: 1.55, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.background2 } });
    T(s, [{ text: h, options: { bold: true, fontSize: 17, breakLine: true, color: C.text2 } }, { text: d, options: { fontSize: 15 } }], { x: x + 0.2, y: y + 0.1, w: w - 0.4, h: 1.35, valign: "middle" });
  });
});
s.addNotes(
`Roles (5 minutes, with responses from the KAZA Secretariat and SADC FANR).
- Output 1.2 works at three levels. Money is lent, guaranteed and recovered nationally; enterprises are reached at destination level; standards, learning and the future of the RTFF sit at regional level. Evidence flows up from the pilots; standards and policy flow down.
- Proposed role of the KAZA Secretariat: host the regional layer (an annual R-NBT Finance Forum, the common readiness diagnostic, the standard supply MOU template and the indicator set); co-decide the RTFF's future arrangements by Q4 2028 and receive the handover of templates; coordinate with OKACOM under the existing MoU, where an estimated 40% of active communities overlap and the CORB Fund can be a complementary layer; take the studies to Partner State structures for decisions.
- Proposed role of SADC FANR: link Output 1.2 to the SADC TFCA programme so that pilots inform regional policy; convene peer learning between national guarantee schemes and development banks on tourism windows; connect regional finance partners such as the SADC-DFRC for resource mobilisation; receive gate reviews and the pilot evaluation for replication.
- National level: Partner States confirm areas and criteria; guarantee schemes and development banks open tourism windows; lenders adapt products and own credit decisions and collection; grant managers (BSOs or development banks) run the grant facility under one manual.
- Destination level: lead BSOs and associations convene the platforms; anchors sign supply MOUs; MSMEs receive coaching, grants and finance.
- These roles are proposals for discussion. Invite the KAZA Secretariat and SADC FANR to respond first (3 minutes each).
Facilitation prompts (items D1–D2): Can you accept these roles in principle, and what would you need? Which other regional programmes (ITC, World Bank, CORB Fund) must be aligned to avoid duplication?`);

// ---------------- 9. Validation and next steps ----------------
sec("Validation");
s = content("For validation today, and what happens next");
const items = [
  ["A", "Evidence", "Diagnosis, barriers, country and area starting points", C.accent1],
  ["B", "Design", "Pathway, grant lots, financing options, Botswana route", C.accent2],
  ["C", "Roadmap", "Two seasons, gate thresholds, the extension", C.accent4],
  ["D", "Roles", "KAZA Secretariat, SADC FANR, national and destination", C.accent3],
];
items.forEach(([k, h, d, col], i) => {
  const x = 0.6 + i * 3.06;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 1.45, w: 2.86, h: 2.75, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: col, width: 1.5 } });
  circle(s, x + 0.2, 1.7, 0.85, col, k, 26);
  T(s, h, { x: x + 1.2, y: 1.7, w: 1.6, h: 0.85, fontSize: 21, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
  T(s, d, { x: x + 0.22, y: 2.75, w: 2.45, h: 1.35, fontSize: 16, valign: "top" });
});
const steps = [["Today", "Read-back of the validation log"], ["Within 2 weeks", "Written comments from partners"], ["Then", "F6-D9 revised with a change log"], ["Next sitting", "Oversight Committee decisions (F6-D11)"], ["After", "Handover to GIZ and partners (F6-D12)"]];
T(s, "What happens next", { x: 0.6, y: 4.5, w: 6, h: 0.4, fontSize: 17, bold: true, color: C.text2, fontFace: "Cambria" });
T(s, "Each item recorded as", { x: 6.2, y: 4.5, w: 2.3, h: 0.4, fontSize: 13, color: "4A4A4A", align: "right", valign: "middle" });
[["Agree", C.accent1], ["Amend", C.accent2], ["Reject", C.accent3]].forEach(([t, col], i) => box(s, { x: 8.65 + i * 1.37, y: 4.5, w: 1.25, h: 0.42, fill: col, text: t, size: 13, bold: true, color: C.background1, radius: 0.2 }));
line(s, 1.15, 5.3, 12.2, 5.3, HEX.gold, 2.5, true);
steps.forEach(([w, t], i) => {
  const x = 0.6 + i * 2.46;
  circle(s, x + 0.92, 5.02, 0.56, [HEX.green, HEX.gold, HEX.brown, HEX.terra, HEX.sage][i], i + 1, 16);
  T(s, w, { x, y: 5.7, w: 2.4, h: 0.38, fontSize: 15, bold: true, color: C.text2, align: "center" });
  T(s, t, { x, y: 6.08, w: 2.4, h: 0.8, fontSize: 14, align: "center", valign: "top" });
});
s.addNotes(
`Validation and close (plenary checks, then read-back).
- The validation log has four groups of items, matching the sections of this presentation:
  A Evidence: A1 core diagnosis; A2 the five barriers; A3 country readiness and institutions; A4 the two priority areas; A5 the financing gap.
  B Design: B1 one pathway; B2 platforms and the lender learning track; B3 grant lots and rules; B4 the financing options; B5 the RTFF and its Botswana route; B6 value-chain sequencing (cohort 1 chains: fresh produce, guiding, transport, laundry and services; crafts market-first; conservation and coexistence services design-now).
  C Roadmap: C1 measurement system; C2 timing and the extension; C3 gate thresholds.
  D Roles: D1 KAZA Secretariat and SADC FANR roles; D2 alignment with other programmes.
- Next steps: the rapporteur reads back the log today; partners send written comments within two weeks; F6-D9 is revised with a log showing every change and its source; decisions on areas, the youth band and women-led test, the Botswana route, the grant envelope, first loss, the extension and term-sheet talks go to the Oversight Committee (F6-D11); the readiness pack and handover follow (F6-D12).
- Dates are indicative and depend on the date of this roundtable.
- Close: thank participants; confirm the deadline and address for written comments.`);

finish(pres, process.argv[2] || "F6-D10.pptx");
