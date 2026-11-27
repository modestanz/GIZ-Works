// F6-D10: Validation presentation structured by TOR deliverable (16 slides, blue-teal palette; narrative in speaker notes)
// Usage: node deliverables/build/f6_d10_deck.js out.pptx
const { newDeck, makeHelpers, finish, usePalette, HEX } = require("./deck_lib");
usePalette("blue");

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

// ---------------- 1. Cover ----------------
sec("Opening");
let s = H.add("TITLE_CENTER");
s.addText("F6-D10 · Plenary session for validation", { placeholder: "kicker" });
s.addText("Financing regenerative nature-based tourism MSMEs in KAZA", { placeholder: "title" });
s.addText("Output 1.2 findings and recommendations for validation by GIZ and regional partners, including SADC FANR and the KAZA Secretariat", { placeholder: "sub" });
s.addText("Presented by Modesta Nyirenda, MNZ Consult · [Date and venue to be confirmed] · Presentation for validation", { placeholder: "meta" });
s.addNotes(
`Welcome and purpose (2 minutes).
- Thank GIZ and the regional partners, in particular SADC FANR, the political partner of the programme, and the KAZA Secretariat.
- This plenary is F6-D10 of the Access to Finance assignment: presentation and facilitation of a plenary discussion of the findings for validation. It is not a launch; content decisions belong to the Partner States and their institutions.
- The presentation follows the terms of reference: after the purpose and the evidence base, one slide per study (F0 to F5-D8) gives its main finding and recommendations; the synthesis (F6-D9) then sets out the framework, the measurement system, the roadmap and roles; the last slides show what follows (F6-D11 and F6-D12) and what we ask you to validate.
How the session works:
- Three questions run through the whole presentation: is the evidence right; are the recommendations workable through the institutions named; and who carries what, at regional, national and destination level.
- For each item participants raise a green (agree), amber (amend) or red (reject) card; the rapporteur records responses on the validation log against items A to D (slide 16). Discussion goes first to amber and red cards.
- Disagreements are recorded with the reason. Questions on budget or programme scope go to a parking lot and are answered in writing. Written comments can be sent within two weeks.`);

// ---------------- 2. Output 1.2 and the assignment ----------------
s = content("Output 1.2 and this assignment");
// left: what Output 1.2 is about
box(s, { x: 0.6, y: 1.35, w: 5.9, h: 1.05, fill: C.text2, text: "Output 1.2: financial mechanisms are established in collaboration with financial institutions to support targeted MSMEs", size: 15, bold: true, color: C.background1, radius: 0.08 });
const o12 = [
  ["1.2.1", "Connect", "Dialogue platforms and matchmaking: MSMEs, associations, lenders, large tourism companies", HEX.green],
  ["1.2.2", "Prepare", "Grant facility: Lot 1 up to EUR 10,000; Lot 2 EUR 10,000–40,000", HEX.gold],
  ["1.2.3", "Finance", "New and existing financing mechanisms, tested with financial institutions", HEX.terra],
];
o12.forEach(([c, h, d, col], i) => {
  const y = 2.6 + i * 1.12;
  circle(s, 0.6, y, 0.95, col);
  T(s, [{ text: c, options: { fontSize: 11, breakLine: true } }, { text: h, options: { fontSize: 13, bold: true } }], { x: 0.6, y: y + 0.12, w: 0.95, h: 0.7, color: C.background1, align: "center", valign: "middle" });
  T(s, d, { x: 1.7, y, w: 4.8, h: 0.95, fontSize: 14, valign: "middle" });
});
box(s, { x: 0.6, y: 6.0, w: 5.9, h: 0.7, fill: C.background2, text: "Focus: women, youth and communities near protected areas", size: 14, color: C.text2, bold: true });
// right: deliverables of the assignment
T(s, "Deliverables of this assignment", { x: 6.95, y: 1.3, w: 5.8, h: 0.4, fontSize: 16, bold: true, color: C.text2, fontFace: "Cambria" });
const dl = [
  ["F0", "Inception: workplan, method, resources", "done"],
  ["F1-D4", "Financial landscape analysis", "done"],
  ["F2-D5", "Barriers and opportunities", "done"],
  ["F3-D6", "Investment readiness assessment", "done"],
  ["F4-D7", "Financing mechanisms assessment", "done"],
  ["F5-D8", "Roundtable preparation and documentation", "done"],
  ["F6-D9", "Consolidated synthesis report", "done"],
  ["F6-D10", "Validation presentation and plenary", "today"],
  ["F6-D11", "Summary pack for the Oversight Committee", "next"],
  ["F6-D12", "Readiness pack and handover", "next"],
];
const stCol = { done: HEX.green, draft: HEX.gold, today: HEX.terra, next: "A6A6A6" };
dl.forEach(([c, t, st], i) => {
  const y = 1.8 + i * 0.46;
  const hi = st === "today";
  if (hi) s.addShape(S.ROUNDED_RECTANGLE, { x: 6.9, y: y - 0.04, w: 5.85, h: 0.44, rectRadius: 0.06, fill: { color: "F3E3DC" }, line: { color: HEX.terra, width: 1 } });
  box(s, { x: 7.0, y, w: 1.05, h: 0.36, fill: i === 0 ? HEX.sage : i < 6 ? HEX.olive : HEX.forest, text: c, size: 11.5, bold: true, color: C.background1, radius: 0.18 });
  T(s, t, { x: 8.2, y, w: 3.85, h: 0.36, fontSize: 13.5, bold: hi, color: C.text1, valign: "middle" });
  s.addShape(S.OVAL, { x: 12.35, y: y + 0.08, w: 0.2, h: 0.2, fill: { color: stCol[st] }, line: { color: stCol[st] } });
});
[["Submitted", HEX.green], ["Draft for validation", HEX.gold], ["Today", HEX.terra], ["To follow", "A6A6A6"]].forEach(([t, col], i) => {
  const x = 7.0 + i * 1.45;
  s.addShape(S.OVAL, { x, y: 6.52, w: 0.16, h: 0.16, fill: { color: col }, line: { color: col } });
  T(s, t, { x: x + 0.22, y: 6.43, w: 1.25, h: 0.34, fontSize: 10.5, color: "4A4A4A", valign: "middle" });
});
s.addNotes(
`Output 1.2 and this assignment (3 minutes).
- Output 1.2 of the KAZA Joint Action on Regenerative Nature-Based Tourism: financial mechanisms are established in collaboration with financial institutions to support targeted MSMEs, with a deliberate focus on enterprises led by women, youth and communities living near protected areas in the five KAZA Partner States.
- Three tentative activities in the Output 1.2 design:
  1.2.1 Dialogue platforms between MSMEs, private sector associations, financial institutions and large tourism companies or investors: build a common understanding of regenerative tourism and of perceived risks, promote existing mechanisms, clarify bankability criteria, explore adapted credit lines and public finance tools, and run matchmaking, including integration of MSMEs into the procurement of DMCs and lodge chains.
  1.2.2 Grant facilities: Lot 1 small grants up to EUR 10,000 with up to 20% matching; Lot 2 medium grants of EUR 10,000–40,000 with up to 50% matching (own funds or loans), administered by partner entities such as BSOs, not-for-profit organisations or public development banks. Participants in the capacity-building programme have priority.
  1.2.3 Support and strengthen new and existing financing mechanisms: partner with financial institutions, development banks and foundations to adapt and test existing products (loans with improved conditions, revolving funds, social or environmental bonds, savings groups and community finance), with Lot 2 grantees as the primary target group.
- This assignment provides the evidence and recommendations for Output 1.2: inception deliverables (workplan, methodological proposal, summary of available resources); four analytical reports (F1-D4 financial landscape, F2-D5 barriers and opportunities, F3-D6 investment readiness, F4-D7 financing mechanisms by priority value chain); roundtable preparation and documentation (F5-D8); and the synthesis phase: the F6-D9 consolidated synthesis report, this validation session (F6-D10), the summary pack for the Oversight Committee (F6-D11) and the readiness pack and handover (F6-D12).
- Today's session validates the F6-D9 findings; the results feed the Oversight Committee pack and the handover.`);

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

// ---------------- deliverable slide helper ----------------
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

// ---------------- 4. F0 ----------------
sec("Studies F0 to F5");
dslide("F0 · Inception and review of available resources", "Past programmes show that design, not money, decides success", [
  "Build on institutions that already exist; do not create a new facility",
  "Lend in the currency of revenue and time repayment to the tourism season",
  "Start with supplier directories and targeted buyer sessions, not open marketplaces",
], (s) => {
  const cols = [
    ["What worked", HEX.green, [["Savings groups to MFIs", "VSLA-to-MFI graduation in Zambia"], ["Anchor-linked supplier finance", "Wilderness–Stanbic precedent in Botswana"], ["Season-timed repayment", "FNB Zambia, NDB, SMEDCO"]]],
    ["What did not", HEX.terra, [["Local-currency tourism fund", "Zimbabwe's revolving fund failed on design"], ["Open MSME marketplaces", "Struggled to fill a room; virtual version failed"], ["Grant-reliant business models", "Dependency; follow-on loans treated as grants"]]],
  ];
  cols.forEach(([h, col, items], i) => {
    const x = 0.6 + i * 3.7;
    s.addShape(S.ROUNDED_RECTANGLE, { x, y: 1.75, w: 3.5, h: 5.1, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: col, width: 1.75 } });
    box(s, { x: x + 0.2, y: 1.95, w: 3.1, h: 0.5, fill: col, text: h, size: 15, bold: true, color: C.background1, radius: 0.25 });
    items.forEach(([a, b], k) => {
      const y = 2.75 + k * 1.33;
      T(s, [{ text: a, options: { bold: true, fontSize: 15, breakLine: true, color: C.text2 } }, { text: b, options: { fontSize: 13, color: "4A4A4A" } }], { x: x + 0.25, y, w: 3.0, h: 1.15, valign: "top" });
    });
  });
},
`F0: Inception, workplan and review of available resources (2 minutes).
- The inception phase agreed the workplan, the coordination points with the Macro and Micro Diagnostics and Roundtables, and the method (F0-D1, F0-D2), and reviewed existing studies and programmes (F0-D3), including documented experience with MSME and tourism finance in the five Partner States. A working MSME definition was checked against each Partner State's national thresholds (F1-D4, MSME definitions table).
- Main finding: past programmes in KAZA show that design, not the amount of money, decides success.
  What worked: savings groups graduating to microfinance institutions (VSLA-to-MFI graduation in Zambia); supplier finance linked to an anchor buyer (the Wilderness–Stanbic precedent); repayment timed to the season (FNB Zambia's customer-proposed seasonal holidays, NDB's quarterly peak repayments, SMEDCO's season-timed repayment).
  What did not: Zimbabwe's tourism revolving fund, which failed on design (local-currency lending); open MSME marketplaces, which struggled to fill a room, and a virtual version that failed; grant-reliant business models, where stakeholders warned of dependency and of follow-on loans being treated as grants.
- Recommendations: build on institutions that already exist rather than creating a new facility; lend in the currency of revenue and time repayment to the tourism season; start matchmaking with low-cost supplier directories and targeted buyer sessions rather than open marketplaces.
Facilitation prompt (item A1): Are there other programmes, successes or failures we should learn from?`);

// ---------------- 5. F1-D4 ----------------
dslide("F1-D4 · Financial landscape analysis", "Finance exists in every Partner State, but not on terms MSMEs can use", [
  "Work through national lenders, guarantee schemes and development banks",
  "Open tourism windows in ECGC, NASRIA/BOSRIA and a Zambian risk-sharing scheme",
  "Finance nationally; keep the regional level for standards, learning and the RTFF's future",
], (s) => {
  s.addChart(pres.charts.BAR, [{ name: "Readiness score (0–5)", labels: ["Zambia", "Zimbabwe", "Botswana", "Namibia", "Angola"], values: [4.1, 3.9, 3.4, 3.2, 1.4] }], {
    x: 0.5, y: 1.7, w: 7.3, h: 3.75, barDir: "bar", chartColors: [HEX.green, HEX.green, HEX.gold, HEX.gold, HEX.terra], varyColors: true,
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0.0", dataLabelFontSize: 14, dataLabelColor: "222222", dataLabelFontBold: true,
    showTitle: true, title: "Partner State readiness to pilot (score 0–5)", titleFontSize: 14, titleColor: HEX.forest,
    catAxisOrientation: "maxMin", valAxisHidden: true, valAxisMaxVal: 5, valAxisMinVal: 0, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    catAxisLabelColor: "222222", catAxisLabelFontSize: 14, showLegend: false, barGapWidthPct: 45, ...chartText,
  });
  [["Ready to pilot", HEX.green], ["Ready with adjustments", HEX.gold], ["Readiness first", HEX.terra]].forEach(([t, col], i) => {
    s.addShape(S.RECTANGLE, { x: 0.8 + i * 2.25, y: 5.53, w: 0.18, h: 0.18, fill: { color: col }, line: { color: col } });
    T(s, t, { x: 1.04 + i * 2.25, y: 5.45, w: 2.0, h: 0.34, fontSize: 11, color: "4A4A4A", valign: "middle" });
  });
  [["~4%", "tourism share of Namibia's guarantee scheme reach"], ["<10%", "tourism share of Zimbabwe's ECGC portfolio"]].forEach(([v, l], i) => {
    const x = 0.6 + i * 3.65;
    T(s, v, { x, y: 5.95, w: 1.35, h: 0.8, fontSize: 30, bold: true, color: HEX.terra, fontFace: "Cambria", valign: "middle" });
    T(s, l, { x: x + 1.4, y: 5.95, w: 2.1, h: 0.8, fontSize: 12.5, valign: "middle" });
  });
},
`F1-D4: Financial landscape analysis (3 minutes). See F6-D9 Sections 2.1 and 2.3.
- The landscape: finance is not absent from KAZA; it is misaligned with the profile of R-NBT MSMEs. Commercial banks in all five Partner States are liquid and have branches in the hub towns (Kasane, Maun, Katima Mulilo, Rundu, Livingstone, Victoria Falls and, to a lesser extent, Menongue). Each Partner State has a development lender or public MSME financier (CEDA and NDB, DBN, CEEC, SMEDCO, BDA), and four run national credit guarantee schemes (NASRIA, ZCGS, ECGC, FGC), with BOSRIA operating in Botswana since 2026. Microfinance, savings groups and community funds serve smaller borrowers; anchor lodges and DMCs buy from MSMEs; regional and international funders work through national institutions. Grant funding has thinned since the 2025 wind-down of USAID programmes.
- Finance is available, but not on terms these enterprises can use: products are designed for formal collateral, steady monthly income and salaried borrowers, while most R-NBT MSMEs operate on land that cannot be mortgaged, earn most of their revenue in the dry season, often in a currency other than that of their costs, and have few records. Reach thins quickly beyond the hub towns.
- The landscape analysis mapped financial actors, products, guarantee schemes, regulation, BSOs and potential anchor partners across the five Partner States, and scored each state's KAZA corridor on six weighted criteria (guarantee or development lender; lenders present; market depth and anchors; community finance; business support linked to finance; macroeconomic stability).
- Main finding: KAZA does not mainly need another finance institution. Every state has institutions that can carry a pilot, but tourism is a marginal user of all of them: it takes about 4% of Namibia's guarantee scheme reach and under 10% of Zimbabwe's ECGC portfolio.
- Readiness: Zambia (4.1: FNB Zambia scored credit, ZANACO, ZCGS, MSMED grants) and Zimbabwe (3.9: ECGC guarantee with 75–85% cover, SMEDCO, Women's Microfinance Bank) are ready to pilot; Botswana (3.4: CEDA, NDB, BOSRIA since 2026) and Namibia (3.2: NASRIA women and youth proposal, DBN For Her, NYDF) need adjustments; Angola (1.4) needs readiness work first.
- Regional versus national, as the terms of reference ask: access to finance is governed nationally (licensing, exchange control, collateral law), so lending, guarantees and recovery should be national. Regional added value lies in common standards (readiness diagnostic, supply MOU, indicators), peer learning and the future arrangements of the RTFF.
- Recommendations: work through national lenders, guarantee schemes and development banks; open tourism windows in ECGC, NASRIA/BOSRIA and a Zambian risk-sharing scheme; finance nationally and keep the regional level for standards, learning and the RTFF's future.
Facilitation prompt (item A2): Is the landscape right, and are the readiness bands and institutions right for your Partner State?`);

// ---------------- 6. F2-D5 ----------------
dslide("F2-D5 · Barriers and opportunities", "Finance is a fit, readiness and risk problem, not a capital shortage", [
  "Adapt debt to the season: seasonal schedules, low-season grace, repayment from confirmed orders",
  "Accept orders, invoices, movable assets and group guarantees as collateral",
  "Use dialogue platforms and a supply MOU to address late payment; set grant contributions by lot",
], (s) => {
  const bars = [["Collateral", HEX.forest], ["Seasonality", HEX.olive], ["Informality", HEX.brown], ["Risk\nperception", HEX.gold], ["Power\nimbalance", HEX.terra]];
  bars.forEach(([t, col], i) => {
    const x = 0.6 + i * 1.46;
    circle(s, x + 0.12, 1.75, 1.15, col);
    T(s, t, { x: x + 0.12, y: 1.75, w: 1.15, h: 1.15, fontSize: 11.5, bold: true, color: C.background1, align: "center", valign: "middle" });
  });
  T(s, "Five barriers, each felt more acutely by women- and youth-led enterprises", { x: 0.6, y: 2.98, w: 7.3, h: 0.35, fontSize: 12.5, italic: true, color: "4A4A4A", align: "center" });
  s.addChart(pres.charts.BAR, [{ name: "Obtained external finance", labels: ["With a buyer", "Without a buyer"], values: [28, 8] }], {
    x: 0.5, y: 3.4, w: 4.2, h: 3.45, barDir: "col", chartColors: [HEX.green, HEX.sage], varyColors: true,
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0\"%\"", dataLabelFontSize: 18, dataLabelColor: "222222", dataLabelFontBold: true,
    showTitle: true, title: "Obtained external finance (% of MSMEs)", titleFontSize: 13, titleColor: HEX.forest,
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, catAxisLabelColor: "222222", catAxisLabelFontSize: 13,
    valAxisMaxVal: 35, valAxisMinVal: 0, showLegend: false, barGapWidthPct: 70, ...chartText,
  });
  [["82 of 106", "name finance a top-three challenge"], ["54", "have never applied for a loan"]].forEach(([v, l], i) => {
    const y = 3.65 + i * 1.55;
    T(s, v, { x: 4.9, y, w: 3.0, h: 0.75, fontSize: 32, bold: true, color: i ? HEX.gold : HEX.terra, fontFace: "Cambria", valign: "bottom" });
    T(s, l, { x: 4.9, y: y + 0.75, w: 3.0, h: 0.6, fontSize: 13, valign: "top" });
  });
},
`F2-D5: Barriers and opportunities (3 minutes).
- The barriers study examined the financing needs of MSMEs by type, size and growth stage, with a deliberate focus on women, youth and communities adjacent to protected areas, and how financial institutions view risk.
- Main finding: finance for R-NBT MSMEs is a fit, readiness and risk problem, not a capital shortage. Of 106 MSMEs surveyed, 82 name finance as a top-three challenge, yet 54 have never applied. A buyer is the strongest predictor of finance: 28% of enterprises with a buyer arrangement obtained external finance, against 8% without.
- Five barriers recur in every country and value chain, and women- and youth-led enterprises face each more acutely: collateral (communal and concession land cannot be mortgaged; women's land rights are often secondary); seasonality (60–75% of revenue in the peak months); informality (no tax clearance, few records); lenders' risk perception (little sector knowledge, past failed funds); and power imbalances with buyers (orders without contracts, payment 30–90 days late, termination without notice).
- Recommendations, as the terms of reference ask: at least three seasonality adaptations of existing debt products (seasonal repayment schedules, low-season grace periods, repayment linked to confirmed orders or forward bookings, with revenue-based repayment where records allow); alternative collateral (orders and invoices, movable assets such as vehicles and equipment, group and community guarantees, savings records); dialogue platforms with a standard supply MOU (written orders, payment within 30 days, notice before termination); and grant contributions set by lot: 10–20% for Lot 1, largely in kind, and 30–50% for Lot 2, which may be loan-financed.
Facilitation prompt (item A3): Does this diagnosis hold for your country, and for women- and youth-led enterprises?`);

// ---------------- 7. F3-D6 ----------------
dslide("F3-D6 · Investment readiness and enterprise strengthening", "Most MSMEs are at Tiers 0–1: capacity is part of the finance gap", [
  "A tiered pathway: coaching, bookkeeping and supplier readiness before and after finance",
  "Make formalization a milestone, not an entry gate; fund tax clearance and licensing",
  "Pay BSOs on results and train credit officers in seasonal cash-flow lending",
], (s) => {
  const tiers = [["Tier 0", "Pre-enterprise"], ["Tier 1", "Emerging micro"], ["Tier 2", "Supplier-ready"], ["Tier 3", "Investment-ready"]];
  tiers.forEach(([t, d], i) => {
    const x = 0.6 + i * 1.8;
    s.addShape(S.CHEVRON, { x, y: 1.75, w: 1.95, h: 0.85, fill: { color: [HEX.sage, HEX.olive, HEX.green, HEX.forest][i] }, line: { color: C.background1, width: 1 } });
    T(s, [{ text: t, options: { bold: true, fontSize: 13, breakLine: true } }, { text: d, options: { fontSize: 10 } }], { x: x + 0.35, y: 1.77, w: 1.3, h: 0.8, color: C.background1, align: "center", valign: "middle" });
  });
  T(s, "Most surveyed MSMEs sit at Tiers 0–1", { x: 0.6, y: 2.65, w: 3.6, h: 0.3, fontSize: 12, italic: true, color: HEX.terraDk });
  s.addChart(pres.charts.BAR, [
    { name: "PA1 Hwange–Victoria Falls–Livingstone", labels: ["Notebook or no records", "Written contract", "Women-led", "Youth-led"], values: [25, 42, 36, 16] },
    { name: "PA2 Okavango Delta–Maun", labels: ["Notebook or no records", "Written contract", "Women-led", "Youth-led"], values: [38, 18, 48, 15] },
  ], {
    x: 0.5, y: 3.0, w: 7.4, h: 3.85, barDir: "col", chartColors: [HEX.gold, HEX.green],
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0\"%\"", dataLabelFontSize: 12, dataLabelColor: "222222",
    showTitle: true, title: "Readiness profile of the two priority areas (% of respondents)", titleFontSize: 13, titleColor: HEX.forest,
    valAxisHidden: true, valAxisMaxVal: 55, valAxisMinVal: 0, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    catAxisLabelColor: "222222", catAxisLabelFontSize: 12, showLegend: true, legendPos: "b", legendFontSize: 11, legendColor: "222222", barGapWidthPct: 60, ...chartText,
  });
},
`F3-D6: Investment readiness and enterprise strengthening (3 minutes).
- The readiness assessment looked at business models, financial practices, record-keeping and informality in the priority value chains, by gender, age and value-chain node, and at the capacity needs of MSMEs, BSOs and financial institutions.
- Main finding: most surveyed MSMEs sit at readiness Tiers 0–1 (pre-enterprise and emerging micro). Capacity gaps in record-keeping, compliance and management are part of the access-to-finance barrier, not a separate problem. In Okavango–Maun 38% keep a notebook or no records and only 18% hold a written contract; in the Victoria Falls–Livingstone corridor the figures are 25% and 42%. Women lead 36% (PA1) and 48% (PA2) of respondents' enterprises; youth about 15–16%.
- Readiness tiers used throughout: Tier 0 pre-enterprise and groups; Tier 1 emerging micro; Tier 2 supplier-ready; Tier 3 investment-ready. Each step should create the record the next lender needs.
- Recommendations, aligned with Output 1.1: a tiered pathway with SME Loop coaching, bookkeeping and supplier readiness, before and after finance, with women-only and youth-only sessions and group models; formalization as a milestone rather than an entry gate, with grants for tax clearance and licensing; performance-based contracts for BSOs (paid per enterprise graduating a tier or obtaining and repaying finance); and training for credit officers in seasonal cash-flow lending, reading orders and contracts, and disaggregated portfolio reporting.
- Scalable women- and youth-led models with investment potential include producer groups supplying lodges with fresh produce and eggs, youth service enterprises (laundry, maintenance, solar) on service contracts, women entering guiding and mokoro operations with asset finance, and women-led honey and beehive-fence enterprises linked to conservancies.
Facilitation prompt (item A4): Do the readiness profiles match your experience? What capacity support is missing?`);

// ---------------- 8. F4-D7 (a): the layered stack ----------------
dslide("F4-D7 · Financing mechanisms assessment", "No single instrument fills the gap: a layered stack tied to buyers", [
  "Pilot first what is most feasible: order-backed finance, guarantee windows with first loss, seasonal loans",
  "Use the RTFF as the reference collateral-free pilot; grants and national guarantees carry what it cannot",
  "Lend nationally; keep standards, a shared first-loss and TA pool and the CORB Fund regional",
], (s) => {
  const layers = [
    ["Top · Tier 3", "Term, revenue-linked and conservation-linked finance", HEX.forest, 4.3],
    ["Middle · Tiers 1–2", "Order-backed working capital · asset and lease finance · guarantee-backed seasonal loans · RTFF", HEX.gold, 5.55],
    ["Base · Tiers 0–1", "Grants · coaching · savings groups and community finance", HEX.green, 6.8],
  ];
  layers.forEach(([h, d, col, w], i) => {
    const y = 1.85 + i * 1.32, x = 1.05 + (6.8 - w) / 2;
    s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h: 1.18, rectRadius: 0.06, fill: { color: col }, line: { color: col } });
    T(s, [{ text: h, options: { bold: true, fontSize: 13, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: x + 0.15, y: y + 0.05, w: w - 0.3, h: 1.08, color: C.background1, align: "center", valign: "middle" });
  });
  s.addShape(S.UP_ARROW, { x: 0.5, y: 1.9, w: 0.42, h: 3.55, fill: { color: HEX.terra }, line: { color: HEX.terra } });
  T(s, "Graduation", { x: 0.2, y: 5.5, w: 0.8, h: 0.3, fontSize: 9.5, bold: true, color: HEX.terraDk, align: "center" });
  box(s, { x: 0.9, y: 5.95, w: 6.9, h: 0.85, fill: C.background2, line: HEX.terra, text: "The gap: EUR 1,000–30,000 for buyer-linked Tier 1–2 MSMEs, repaid over 1–2 seasons, with no land collateral", size: 13, color: C.text2, bold: true });
},
`F4-D7: Financing mechanisms assessment, part 1 (3 minutes). See F6-D9 Section 2.5.
- F4 assessed 18 types of financing mechanism in four families (grant-based, debt-based, risk-sharing and alternative, including capital-market and conservation instruments) against five criteria: fit with MSME segments, reduction of the barriers, fit with the financial landscape, regulation and sustainability. It also rated each against the five barriers and the Joint Action's two cross-cutting requirements: gender and youth inclusion, and regenerative outcomes.
- Main finding: no single instrument fills the gap. There is one segment no current provider serves on usable terms: buyer-linked Tier 1–2 tourism MSMEs needing EUR 1,000–30,000 of working capital or a small asset, repaid over one or two seasons, without land collateral. The feasible response is a layered stack tied to buyers: grants, coaching and community finance at the base; order-backed working capital, asset finance and guarantee-backed seasonal loans in the middle, with the RTFF as the first collateral-free loan product; and term, revenue-linked and conservation-linked finance at the top. Enterprises graduate upward as each step creates the record the next lender needs.
- The RTFF (TUI Care Foundation) is the recommended reference debt pilot for the gap: collateral-free loans of EUR 1,000–30,000 for about 50 buyer-linked MSMEs; as presented in November about 8–10% (not yet set) with step-downs over 18–24 months, from Q1 2027. It is complemented by the grants it cannot replace and by national guarantees that can carry its borrowers after the pilot. Adjustments: a larger Tier 1 share, a loss reserve with lending in the currency of revenue, and a route to national lenders and guarantee schemes after the pilot and handover to the KAZA Secretariat.
- National first: money is lent, guaranteed and recovered nationally (licensing, exchange control, collateral law, five currencies). Design, standards, counter-guarantees, a shared first-loss and TA pool and basin-level conservation finance (the OKACOM CORB Fund) can be regional. The RTFF's offshore administration is the one cross-border lending route and still needs country checks.
Facilitation prompt (item A5): Is the stack right, and which layer can your institution carry?`);

// ---------------- 9. F4-D7 (b): feasibility and blended models ----------------
s = content("Most feasible: supply chain finance, guarantee windows, seasonal loans");
box(s, { x: 0.6, y: 1.2, w: 5.6, h: 0.4, fill: C.text2, text: "F4-D7 · Feasibility, blended models and selection", size: 12.5, bold: true, color: C.background1, radius: 0.2, align: "left" });
{
  const mech = [
    ["Supply chain finance", 3], ["Guarantee windows", 3], ["Seasonal loans and grace", 3], ["First-loss grants", 3], ["TA grants", 3],
    ["Matching grants", 2.5], ["RTFF collateral-free loans", 2.5], ["Blended structures", 2.5], ["Savings groups and VSLAs", 2.5],
    ["Revolving funds", 2], ["Community guarantee funds", 2], ["PPPs and concession JVs", 2], ["PES and conservation trust funds", 2],
    ["Revenue-based finance", 1.5], ["Impact investment", 1.5], ["Green and sustainability bonds", 1],
  ];
  const col = (v) => (v >= 3 ? HEX.green : v >= 2.5 ? HEX.brown : v >= 2 ? HEX.gold : v >= 1.5 ? HEX.sage : HEX.terra);
  s.addChart(pres.charts.BAR, [{ name: "Overall feasibility", labels: mech.map((m) => m[0]), values: mech.map((m) => m[1]) }], {
    x: 0.45, y: 1.7, w: 5.9, h: 4.75, barDir: "bar", chartColors: mech.map((m) => col(m[1])), varyColors: true,
    showValue: false, showTitle: true, title: "Overall feasibility of mechanisms (F4)", titleFontSize: 13, titleColor: HEX.forest,
    catAxisOrientation: "maxMin", valAxisHidden: true, valAxisMaxVal: 3, valAxisMinVal: 0, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    catAxisLabelColor: "222222", catAxisLabelFontSize: 10.5, showLegend: false, barGapWidthPct: 35, ...chartText,
  });
  [["High", HEX.green], ["Medium–High", HEX.brown], ["Medium", HEX.gold], ["Low–Medium", HEX.sage], ["Low", HEX.terra]].forEach(([t, c], i) => {
    s.addShape(S.RECTANGLE, { x: 0.7 + i * 1.12, y: 6.56, w: 0.16, h: 0.16, fill: { color: c }, line: { color: c } });
    T(s, t, { x: 0.9 + i * 1.12, y: 6.48, w: 0.95, h: 0.32, fontSize: 9.5, color: "4A4A4A", valign: "middle" });
  });
}
T(s, "Four blended models for women- and youth-led MSMEs", { x: 6.55, y: 1.68, w: 6.2, h: 0.35, fontSize: 14, bold: true, color: C.text2, fontFace: "Cambria" });
[["A", "First loss + asset and lease finance", "Youth guides, transport, laundry, solar; women's equipment", HEX.green],
 ["B", "Guarantee window accepting orders and invoices", "Women- and youth-led suppliers; NASRIA 80/20 tier", HEX.gold],
 ["C", "Community guarantee fund", "Women's savings groups and cooperatives moving into supply", HEX.brown],
 ["D", "Results-based conservation finance", "Conservancies, coexistence services, honey (PA2 first)", HEX.terra]].forEach(([k, h, d, c], i) => {
  const x = 6.55 + (i % 2) * 3.13, y = 2.1 + Math.floor(i / 2) * 1.62;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w: 3.0, h: 1.5, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: c, width: 1.5 } });
  circle(s, x + 0.12, y + 0.14, 0.5, c, k, 15);
  T(s, h, { x: x + 0.7, y: y + 0.08, w: 2.22, h: 0.62, fontSize: 12.5, bold: true, color: C.text2, valign: "middle" });
  T(s, d, { x: x + 0.15, y: y + 0.74, w: 2.75, h: 0.7, fontSize: 11.5, color: "4A4A4A", valign: "top" });
});
T(s, "A–C for the first cohort; D designed now, piloted in PA2", { x: 6.55, y: 5.36, w: 6.2, h: 0.3, fontSize: 11.5, italic: true, color: HEX.terraDk });
const selSteps = [["Tier", "No debt at Tier 0"], ["Buyer", "Order-backed finance first"], ["Security", "Asset, order, savings or outcome"], ["Model", "A, B, C, D, or RTFF if none"]];
selSteps.forEach(([h, d], i) => {
  const x = 6.55 + i * 1.57;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 5.75, w: 1.38, h: 1.05, rectRadius: 0.08, fill: { color: [HEX.sage, HEX.olive, HEX.brown, HEX.forest][i] }, line: { color: C.background1 } });
  T(s, [{ text: h, options: { bold: true, fontSize: 12.5, breakLine: true } }, { text: d, options: { fontSize: 10 } }], { x: x + 0.05, y: 5.78, w: 1.28, h: 1.0, color: C.background1, align: "center", valign: "middle" });
  if (i < 3) line(s, x + 1.39, 6.27, x + 1.56, 6.27, HEX.terra, 2, true);
});
s.addNotes(
`F4-D7: Financing mechanisms assessment, part 2 (3 minutes). See F6-D9 Section 2.5 and Table 5.
- Feasibility (F4 overall rating on segment fit, barrier reduction, landscape, regulation and sustainability). High: supply chain finance (purchase-order finance, invoice discounting and approved-supplier finance against standard supply MOUs, answering 30–90-day late payment); guarantee windows inside existing national schemes with a grant-funded first-loss layer (ECGC with 75–85% cover; NASRIA with 60% and a proposed 80/20 tier for women- and youth-led businesses; NASRIA/BOSRIA in Botswana; a Zambian lender willing to pay for cover); seasonal loans with low-season grace; first-loss and TA grants. Medium–High: matching grants, RTFF collateral-free loans, blended structures, savings groups. Medium: revolving funds, community guarantee funds, PPPs and concession joint ventures, PES and conservation trust funds. Low–Medium: revenue-based finance (a small later pilot) and impact investment (anchors and Tier 3, later RTFF capital). Low: green and sustainability bonds (long-term funding for partner banks only).
- Blended models for women- and youth-led MSMEs (women own or lead 40% of surveyed MSMEs and youth 17%; both lack land collateral and credit history): (A) first-loss grant with movable-asset and lease-to-own finance; (B) a guarantee window that accepts orders, invoices and payment trails, built on NASRIA's 80/20 proposal; (C) a community guarantee fund seeded by grant and topped up by savings groups and community revenue; (D) results-based finance tied to conservation outcomes. A to C are recommended for the first cohort; D is designed now and piloted in PA2.
- Selection guidance: the readiness tier decides the instrument (no debt at Tier 0); a credible buyer decides whether order-backed finance comes first; the security available decides the model (a movable asset: A; an order or invoice: B; savings-group membership: C; a conservation payment stream: D; none: an RTFF loan if buyer-linked, otherwise a grant).
- Lot 2 grantees: piloting debt and risk-sharing with them is feasible for a screened subset (Tier 2, or Tier 1 with a buyer), likely one in four or fewer, with the grant as borrower contribution, cash collateral or pool seed.
- Sustainability: each mechanism has an institutional home after the pilot (national guarantee schemes, partner lenders' product lines, anchors' procurement policies, MFI-managed community funds, the RTFF's future arrangements with the KAZA Secretariat), and concessionality tapers on a pre-agreed schedule.
Facilitation prompt (item A5): Which mechanisms and models can your institutions carry, and on what conditions?`);

// ---------------- 10. F5-D8 ----------------
dslide("F5-D8 · Roundtable finance segments and working sessions", "Participants put coaching and buyer links before money", [
  "Convene platforms through associations, connectors and traditional authorities",
  "Pair order-linked loans with asset finance, starting from simple order forms or trial contracts",
  "Design for access: local languages, paper forms, deposits and prompt payment by buyers",
], (s) => {
  [["17 of 19", "Victoria Falls respondents would apply for a no-collateral, order-linked loan"], ["12 of 19", "want finance mainly for equipment, vehicles or boats"]].forEach(([v, l], i) => {
    const x = 0.6 + i * 3.7;
    T(s, v, { x, y: 1.75, w: 1.55, h: 0.85, fontSize: 28, bold: true, color: i ? HEX.gold : HEX.green, fontFace: "Cambria", valign: "middle" });
    T(s, l, { x: x + 1.6, y: 1.75, w: 1.95, h: 0.85, fontSize: 11.5, valign: "middle" });
  });
  const cols = [
    ["Victoria Falls: cost and structure", HEX.forest, ["Collateral the main barrier (9 of 19, all groups)", "Rates of about 3–8% over two to five years, seasonal repayment", "Only 6 of 19 sell under a written contract", "Coaching first (13 of 19); grants still expected"]],
    ["Maun: access", HEX.brown, ["Training alongside the loan; simple, fast applications", "Setswana and paper forms; a route for unregistered groups", "Deposits of about 50%; payment within one to two weeks", "Direct payment to producers, a women's fund, a youth share"]],
  ];
  cols.forEach(([h, col, items], i) => {
    const x = 0.6 + i * 3.7;
    s.addShape(S.ROUNDED_RECTANGLE, { x, y: 2.8, w: 3.5, h: 4.05, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: col, width: 1.75 } });
    box(s, { x: x + 0.15, y: 2.95, w: 3.2, h: 0.6, fill: col, text: h, size: 13.5, bold: true, color: C.background1, radius: 0.12 });
    T(s, items.map((t, k) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: k < items.length - 1, paraSpaceAfter: 12 } })), { x: x + 0.2, y: 3.75, w: 3.15, h: 3.0, fontSize: 14, valign: "top" });
  });
},
`F5-D8: Roundtable finance segments and the November working sessions (3 minutes). See F6-D9 Section 2.6.
- The assignment designed and facilitated the access-to-finance segments of the roundtables: the KAZA Regional Roundtable in Maun with the RTFF Finance Implementation Lab (113 participants, 22–24 September 2026), and the finance segments of the destination working sessions in Victoria Falls (10 November) and Maun (12 November). Participant questionnaires were returned by 19 of 20 external participants in Victoria Falls and 17 of 18 in Maun (WS-VF; WS-MN).
- Main finding: participants in both destinations put records, costing, compliance and buyer links before money (13 of 19 Victoria Falls respondents put coaching first), and saw buyer links as what makes a business bankable. Delivery design decides reach.
- Victoria Falls: 17 of 19 respondents said they would apply for a loan with no collateral, linked to a buyer order and released after coaching, but demand leans to assets: 12 of 19 would use finance for equipment, vehicles or boats, against six each for working capital and premises, so an order-linked working-capital product alone will not meet the main need. Collateral was the barrier named most (9 of 19 and all three groups); preferred terms clustered at about 3–8% over two to five years with seasonal repayment, against bank rates near 28%; only 6 of 19 sell under a written contract or letter of intent, so order-linked lending needs a simple order form or trial contract. Groups proposed staged, ring-fenced funding, tiers from grants to blended finance to loans, and repayment through the buyer.
- Maun: respondents asked for training alongside the loan, simple and fast applications, forms in Setswana, buyer links and written buyer specifications; payment practice varies by buyer, and craft producers asked for deposits of about 50% and payment within one to two weeks instead of 90-day accounts. Community groups said a loan for established businesses would not reach them and proposed direct payment to producers, a women's fund and a youth share rather than payment into a single trust account.
- No finance provider attended either session, so these are stated preferences, not tested terms.
- Recommendations, feeding Activities 1.2.1 and 1.2.3: convene the platforms through associations, connectors and traditional authorities; pair order-linked loans with asset and lease finance (Model A), starting from simple order forms or trial contracts; design for access (local languages, paper forms, cash and mobile-money repayment, deposits and prompt payment by buyers); test association guarantees and buyer-deducted repayment in PA1.
Facilitation prompt (item A6): Does this reflect what your constituencies said?`);

sec("Synthesis F6-D9");
// ---------------- 5. Framework ----------------
s = content("F6-D9 · One route to finance: connect, prepare, finance");
const tiers = [["Tier 0", "Pre-enterprise, groups"], ["Tier 1", "Emerging micro"], ["Tier 2", "Supplier-ready"], ["Tier 3", "Investment-ready"]];
tiers.forEach(([t, d], i) => {
  const x = 0.7 + i * 3.02;
  s.addShape(S.CHEVRON, { x, y: 1.4, w: 3.15, h: 0.95, fill: { color: [HEX.sage, HEX.olive, HEX.green, HEX.forest][i] }, line: { color: C.background1, width: 1 } });
  T(s, [{ text: t, options: { bold: true, fontSize: 15, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: x + 0.45, y: 1.42, w: 2.3, h: 0.9, color: C.background1, align: "center", valign: "middle" });
});
const acts = [
  ["1", "Connect", "1.2.1 Dialogue platforms and matchmaking", ["One platform per delivery core, every four months", "Supply MOUs with anchors", "Lender learning: tourism literacy, green assets in credit"], C.accent1],
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
- Activity 1.2.1 connects. One finance and market-linkage platform per delivery core (Livingstone–Victoria Falls with Hwange; Maun with the Delta community areas; the Zambezi Region if resourced), convened through associations, lodge impact officers and connectors every four months, timed to the season. Formats: common-understanding workshops, lender clinics, women-only and youth-only sessions, deal days, and anchor procurement roundtables leading to a standard supply MOU (written orders, payment within 30 days, notice before termination). A learning track for banks, MFIs, guarantee schemes and DFIs covers tourism literacy, extended ESG and how verified nature-positive practice can count positively in credit assessment. Output: a screened pipeline with coded rejection reasons.
- Activity 1.2.2 prepares and de-risks. Lot 1 (up to EUR 10,000, 10–20% contribution, largely in kind) for Tier 0–1 micro, start-up, group and community enterprises; Lot 2 (EUR 10,000–40,000, 30–50% contribution, which may be loan-financed) for Tier 2, or Tier 1 with a buyer. A conversion clause lets a Lot 2 grant serve as the borrower's contribution or cash collateral. Grants are conditional on training, and at least 60% go to women- or youth-led enterprises.
- Activity 1.2.3 finances through institutions that will remain after the project: per area at least one lender, one guarantor and two anchors piloting adapted products over two tourism seasons.
- Lender learning platform (F6-D9 Section 5.1): a learning track for credit officers, risk managers and product teams of partner banks, MFIs, guarantee schemes and DFIs. Lenders find tourism hard to read (no harvest-like repayment point, specialised assets with no resale market, NDB arrears of about 18% in the Okavango), while EU anti-greenwashing rules and Botswana's green taxonomy are moving the market. Three subjects: tourism business literacy; regenerative practice and extended ESG; and reading nature-positive practice in credit terms: as collateral (green equipment under movable-collateral registries; assignable results-based payments and anchor receivables), as lower risk (lower costs, fewer outages, premium markets) and as pricing (rate step-downs or better guarantee cover for verified milestones). Delivered through clinics for credit officers, sessions with verifiers such as GreenLoop and Target 8.9, DFI peer exchange through SADC-DFRC and existing platforms such as Botswana's Sustainability Week.
- Activity 1.1.1 capacity building underpins all three.
Facilitation prompt (items B1–B4): Is one pathway the right organising idea? Are the lot sizes and contribution rules right for women, youth and community groups?`);

// ---------------- 11. F6-D9 M&E ----------------
dslide("F6-D9 · Contribution to the M&E framework", "One measurement system, built on GM1-D5", [
  "Collect three baselines before cohort 1: MSME intake, lender portfolios, anchor procurement",
  "Use one youth band (18–35) and one women-led test across grants, the RTFF and M&E",
  "Verify RTFF milestones independently and review results at each decision gate",
], (s) => {
  [["18", "GM1-D5 programme indicators"], ["23", "Output 1.2 indicators"], ["32", "RTFF pilot and handover indicators"]].forEach(([v, l], i) => {
    const x = 0.6 + i * 2.47;
    T(s, v, { x, y: 1.75, w: 0.9, h: 0.75, fontSize: 30, bold: true, color: [HEX.forest, HEX.gold, HEX.terra][i], fontFace: "Cambria", valign: "middle" });
    T(s, l, { x: x + 0.9, y: 1.75, w: 1.5, h: 0.75, fontSize: 11.5, valign: "middle" });
  });
  const lv = [
    ["Outputs", HEX.green, ["Mechanisms established", "Loans and grants, by sex and age", "Supply MOUs signed"]],
    ["Outcomes", HEX.gold, ["Share obtaining finance (ref. 20%)", "Repayment by season (PAR30 ≤ 15%)", "Days for anchors to pay"]],
    ["Impact", HEX.terra, ["Revenue and jobs", "Finance per euro (≥ 1:1)", "Lenders continuing"]],
  ];
  lv.forEach(([h, col, items], i) => {
    const x = 0.6 + i * 2.47;
    s.addShape(S.ROUNDED_RECTANGLE, { x, y: 2.75, w: 2.3, h: 3.05, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
    box(s, { x: x + 0.15, y: 2.9, w: 2.0, h: 0.45, fill: col, text: h, size: 14, bold: true, color: C.background1, radius: 0.22 });
    T(s, items.map((t, k) => ({ text: t, options: { bullet: { indent: 10 }, breakLine: k < items.length - 1, paraSpaceAfter: 6 } })), { x: x + 0.12, y: 3.5, w: 2.1, h: 2.2, fontSize: 12.5, valign: "top" });
    if (i < 2) line(s, x + 2.32, 4.25, x + 2.45, 4.25, HEX.gold, 2, true);
  });
  const ch = ["Sex", "Age 18–35", "Disability", "Country", "Value chain", "Readiness tier"];
  T(s, "Disaggregated by", { x: 0.6, y: 6.0, w: 1.6, h: 0.35, fontSize: 12, color: "4A4A4A", valign: "middle" });
  ch.forEach((t, i) => box(s, { x: 2.15 + (i % 3) * 1.9, y: 6.0 + Math.floor(i / 3) * 0.45, w: 1.8, h: 0.36, fill: HEX.cream, line: HEX.line, text: t, size: 11.5, color: C.text2, radius: 0.18 }));
},
`F6-D9: Contribution to the M&E framework (3 minutes).
- One measurement system: Output 1.2 reuses the 18 GM1-D5 programme indicators (MSME, destination and KAZA level, targets to be set in GM3-D11) and adds 23 Output 1.2 indicators; a further 32 indicators track the RTFF pilot, partner readiness, handover to the KAZA Secretariat and post-pilot roll-out.
- Outputs are separated from outcomes and impact. Outputs: mechanisms established with partner institutions; finance transactions and grants by product, season, sex and age; anchors signing the supply MOU. Outcomes: share of targeted MSMEs obtaining external finance (survey reference 20%); repayment by season, with a stop-or-adjust threshold of PAR30 above 15%; days taken by anchors to pay MSME suppliers (reference 30–90 days late). Impact: revenue and full-time and seasonal jobs by sex and age; finance leveraged per euro of grant and first loss (target at least 1:1); lenders continuing products with less concessional support.
- Every enterprise-level indicator is disaggregated by country, area, value chain and readiness tier, and by sex, age (exact year of birth, reported in one youth band of 18–35) and disability of owners and managers, with a majority ownership or decision-making test for women- and youth-led status. Unknown is recorded as unknown, not zero. The survey figures are references, not a baseline.
- Recommendations: collect three baselines before cohort 1 disbursement (MSME intake, lender and guarantor portfolios, anchor procurement); adopt one youth band and one women-led test across grants, the RTFF and M&E; verify RTFF milestones and results payments independently and review results at each decision gate.
Facilitation prompt (item C1): Can partners report the data asked of them, and under what consent?`);

// ---------------- 7. Roadmap ----------------
s = content("F6-D9 · Two seasons of piloting, three decision points");
const qx0 = 1.0, qw = 1.06; // quarter index 0 = Q4 2026 ... 10 = Q2 2029
const qx = (q) => qx0 + q * qw;
// peak seasons (Q3 2027 = 3, Q3 2028 = 7)
[3, 7].forEach((q) => s.addShape(S.RECTANGLE, { x: qx(q), y: 1.75, w: qw, h: 3.35, fill: { color: HEX.peak }, line: { color: HEX.peak } }));
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
Facilitation prompt (items C2–C3): Is the timing realistic? Are the gate thresholds right, and should regional partners receive the gate reviews?`);

// ---------------- 14. Roles and strategic partners ----------------
s = content("F6-D9 · Who sustains it: roles and strategic partners");
[
  ["Anchoring and long-term capital", HEX.forest, ["KAZA Conservation Trust Fund: the RTFF as a programme account after 2028–2029", "TUI Care Foundation carries the RTFF until it is anchored", "KAZA Secretariat: regional layer; RTFF future decision by Q4 2028", "SADC FANR and SADC-DFRC: policy link; regional DFI pipeline"]],
  ["Funders active in KAZA", HEX.gold, ["EU: R-NBT, Green Growth for KAZA, ITC programme", "Germany: GIZ, KfW and the International Climate Initiative", "GEF and World Bank: CORB Fund; Zambia tourism programme", "OKACOM CORB Fund; AfDB and African Guarantee Fund"]],
  ["National channels", HEX.green, ["Development banks: NDB, CEDA, DBN, CEEC, SMEDCO, BDA", "Guarantee schemes: ECGC, NASRIA and BOSRIA, ZCGS, FGC", "Banks such as FNB, Stanbic, ZANACO: graduation of RTFF borrowers"]],
  ["Pipeline and verification", HEX.terra, ["Anchors and their foundations nominate and back borrowers", "ITC grants de-risk RTFF loans", "WWF and OKACOM pipelines feed one referral register", "Verifiers such as GreenLoop: baselines and milestones"]],
].forEach(([h, col, items], i) => {
  const x = 0.6 + (i % 2) * 6.15, y = 1.35 + Math.floor(i / 2) * 2.3;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w: 5.95, h: 2.15, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
  box(s, { x: x + 0.2, y: y + 0.15, w: 3.6, h: 0.45, fill: col, text: h, size: 14, bold: true, color: C.background1, radius: 0.22 });
  T(s, items.map((t, k) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: k < items.length - 1, paraSpaceAfter: 4 } })), { x: x + 0.25, y: y + 0.68, w: 5.5, h: 1.4, fontSize: 13.5, valign: "top" });
});
[["2027", "Co-learning agreements; one shared referral register"], ["Season two", "Co-financing from funders active in KAZA"], ["By Q4 2028", "Host and national channels agreed, before Gate 2"]].forEach(([w, t], i) => {
  const x = 0.6 + i * 4.1;
  s.addShape(S.CHEVRON, { x, y: 6.0, w: 4.0, h: 0.72, fill: { color: [HEX.sage, HEX.olive, HEX.forest][i] }, line: { color: C.background1, width: 0 } });
  T(s, [{ text: w + "  ", options: { bold: true } }, { text: t }], { x: x + 0.45, y: 6.0, w: 3.2, h: 0.72, fontSize: 11.5, color: C.background1, valign: "middle", align: "center" });
});
s.addNotes(
`Roles and strategic partners (5 minutes, with responses from the KAZA Secretariat and SADC FANR). See F6-D9 Sections 7.5 and 7.6 and Annex D.
- The RTFF and the other mechanisms will outlast the project only if they have institutional homes, capital after the pilot and partners that keep originating, financing and verifying borrowers. None of this needs a new institution: the partners exist, and several already fund KAZA. Annex D of the synthesis lists eighteen possible partners with their current role, possible role and next step.
- Anchoring and long-term capital: the KAZA Conservation Trust Fund, being designed by the Sustainable Finance Coalition with the KAZA Secretariat and WWF-US, could host the RTFF after the pilot as a programme account under its catalytic nature finance window, probably after 2028–2029; GBFF funding is expected in late 2027 and the fund structure around early 2028. The TUI Care Foundation has committed to carry the facility until it is anchored. Co-learning should start now, with a light letter of intent on joint learning.
- Proposed role of the KAZA Secretariat: host the regional layer (R-NBT Finance Forum, common readiness diagnostic, supply MOU template, indicator set); co-decide the RTFF's future arrangements by Q4 2028; coordinate with OKACOM under the existing MoU; consider a finance task force with Partner State representatives. Proposed role of SADC FANR: link Output 1.2 to the SADC TFCA programme; with SADC-DFRC, aggregate KAZA MSMEs into a regional investment pipeline and bring DFIs in as in-country delivery partners; receive gate reviews and the pilot evaluation for replication.
- Funders active in KAZA can each fund one layer (readiness grants, first loss and loss reserves, counter-guarantees, recapitalisation): the EU (R-NBT, Green Growth for KAZA, the ITC Green Value Chain programme); Germany (GIZ, KfW, and the International Climate Initiative, whose 2027 call could support a joint RTFF–CTF concept); the GEF and World Bank (the CORB Fund and Zambia's tourism programme); OKACOM's CORB Fund; the AfDB and African Guarantee Fund. Joint KAZA–OKACOM proposals could include the RTFF's recapitalisation.
- National channels: development banks and guarantee schemes and commercial banks such as FNB, Stanbic and ZANACO are the graduation route for RTFF borrowers and the in-country partners for monitoring and recovery.
- Pipeline and verification: anchors and their foundations nominate and back borrowers; ITC's planned grants (about €2 million, some 142 grants) can de-risk RTFF loans; WWF's Bankable Nature Solutions pipeline and OKACOM's community programmes can feed one shared referral register; verifiers such as GreenLoop provide baselines and milestone verification. A single joint space for EU-funded projects in KAZA would reduce duplication.
- Destination level: lead BSOs and associations convene the platforms; anchors sign supply MOUs; MSMEs receive coaching, grants and finance.
- These are proposals for discussion. Invite the KAZA Secretariat and SADC FANR to respond first (3 minutes each).
Facilitation prompts (items D1–D2): Can you accept these roles in principle, and what would you need? Which partners are missing, and who should convene the partnerships?`);

// ---------------- 14. F6-D11 and F6-D12 ----------------
sec("Next steps");
s = content("Next: decisions and handover");
const dcard = (x, w, code, h, col) => {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 1.35, w, h: 5.5, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: col, width: 1.75 } });
  box(s, { x: x + 0.2, y: 1.55, w: w - 0.4, h: 0.5, fill: col, text: code, size: 14, bold: true, color: C.background1, radius: 0.25 });
  T(s, h, { x: x + 0.25, y: 2.15, w: w - 0.5, h: 0.4, fontSize: 15, bold: true, color: C.text2, fontFace: "Cambria" });
};
dcard(0.6, 6.4, "F6-D11 · Summary pack for the Oversight Committee", "Five decisions to move from design to agreements", HEX.forest);
const decs = ["Intervention areas for Output 1.2", "One youth band (18–35) and one women-led test", "Grant-facility envelope and lot split", "First loss and guarantee fees under 1.2.3", "Term-sheet talks and decision-gate criteria"];
decs.forEach((d, i) => {
  const y = 2.7 + i * 0.58;
  circle(s, 0.85, y, 0.42, HEX.terra, i + 1, 12);
  T(s, d, { x: 1.4, y, w: 5.4, h: 0.42, fontSize: 14, valign: "middle" });
});
dcard(7.2, 5.55, "F6-D12 · Readiness pack and handover", "Readiness pack (max 10 pages)", HEX.brown);
const rp = [["Key decisions", "taken and pending"], ["Partner contacts", "lenders, guarantors, BSOs, anchors"], ["First 100-day actions", "owners and dates"], ["Outstanding risks", "and how to manage them"]];
rp.forEach(([a, b], i) => {
  const y = 2.7 + i * 0.68;
  circle(s, 7.45, y + 0.04, 0.4, HEX.gold, i + 1, 12);
  T(s, [{ text: a + " ", options: { bold: true } }, { text: b, options: { color: "4A4A4A" } }], { x: 8.0, y, w: 4.6, h: 0.5, fontSize: 14, valign: "middle" });
});
box(s, { x: 7.45, y: 5.6, w: 5.05, h: 1.0, fill: C.background1, line: HEX.line, text: "Handover meeting with GIZ, the KAZA Secretariat, the SADC Secretariat and the officers implementing Output 1.2", size: 13, color: C.text2, bold: true });
s.addNotes(
`Next steps: F6-D11 and F6-D12 (3 minutes).
- After validation, the synthesis goes to the Oversight Committee in an integrated presentation with the Macro and Micro Diagnostics and Roundtables (F6-D11), to support decisions on implementation and resources. Five decisions are proposed. Two items are not among them: the RTFF route in Botswana, where the Chobe–Maun corridor has already been decided; and the project extension to mid-2029, a decision for GIZ and the funders outside this assignment:
  1. confirm the intervention areas for Output 1.2 (PA1 and PA2 as delivery cores; the Zambezi Region only if resourced; Angola on a readiness-first track);
  2. adopt one youth band (18–35) and one women-led test across the grant facility, the RTFF and the M&E framework;
  3. confirm the grant-facility envelope and lot split (about 40% Lot 1 and 60% Lot 2 by value);
  4. allow first-loss cover and guarantee fees under Activity 1.2.3;
  5. mandate term-sheet talks with shortlisted partners and endorse the decision-gate criteria.
- Once the synthesis is approved, the handover (F6-D12): a readiness pack of no more than 10 pages, summarising key decisions, partner contacts, the first 100-day actions and outstanding risks, and a handover meeting with GIZ, the KAZA Secretariat, the SADC Secretariat and the officers responsible for implementing Output 1.2.
Facilitation prompt (item D2): Is anything missing from the decisions the Committee should take?`);

sec("Validation");
// ---------------- 9. Validation and next steps ----------------
s = content("For validation today, and what happens next");
const items = [
  ["A", "Studies", "Main finding and recommendations of F0 to F5-D8", C.accent1],
  ["B", "Synthesis", "One route to finance: connect, prepare, finance", C.accent2],
  ["C", "M&E, roadmap", "Measurement system, two seasons, gate thresholds", C.accent4],
  ["D", "Roles, partners", "Regional roles, strategic partners, decisions and handover", C.accent3],
];
items.forEach(([k, h, d, col], i) => {
  const x = 0.6 + i * 3.06;
  s.addShape(S.ROUNDED_RECTANGLE, { x, y: 1.45, w: 2.86, h: 2.75, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: col, width: 1.5 } });
  circle(s, x + 0.2, 1.7, 0.85, col, k, 26);
  T(s, h, { x: x + 1.2, y: 1.7, w: 1.6, h: 0.85, fontSize: 18, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
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
- The validation log follows the structure of this presentation:
  A Studies: A1 F0 lessons from past programmes; A2 F1-D4 landscape and country readiness; A3 F2-D5 barriers and seasonality and collateral adaptations; A4 F3-D6 readiness tiers and capacity building; A5 F4-D7 financing options, blended models and the RTFF; A6 F5-D8 roundtable and working-session messages.
  B Synthesis: B1 one pathway, three activities; B2 Activity 1.2.1 platforms and lender learning track; B3 Activity 1.2.2 grant lots and rules; B4 Activity 1.2.3 mechanisms and partners.
  C M&E and roadmap: C1 measurement system; C2 roadmap, timing and the extension; C3 gate thresholds.
  D Roles, partners and next steps: D1 roles of the KAZA Secretariat and SADC FANR and the strategic partnerships to sustain the RTFF and other mechanisms; D2 decisions for the Oversight Committee and alignment with other programmes.
- Next steps: the rapporteur reads back the log today; partners send written comments within two weeks; F6-D9 is revised with a log showing every change and its source; the Oversight Committee decides (F6-D11); the readiness pack and handover follow (F6-D12).
- Close: thank participants; confirm the deadline and address for written comments.`);

finish(pres, process.argv[2] || "F6-D10.pptx");
