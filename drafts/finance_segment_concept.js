const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, AlignmentType, Footer, PageNumber, LevelFormat } = require("docx");
const F = "Times New Roman";
const r = (t, o = {}) => new TextRun({ text: t, font: F, size: o.size || 22, bold: o.b, italics: o.i });
const runs = (t, size) => t.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map(s => s.startsWith("**") ? r(s.slice(2, -2), { b: true, size }) : r(s, { size }));
const P = (t, o = {}) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 120, line: 264 }, children: runs(t) });
const H = (t) => new Paragraph({ spacing: { before: 220, after: 100 }, keepNext: true, children: [r(t, { b: true, size: 24 })] });
const B = (t) => new Paragraph({ numbering: { reference: "b", level: 0 }, spacing: { after: 60, line: 252 }, children: runs(t) });
const bd = { style: BorderStyle.SINGLE, size: 4, color: "999999" };
const C = (t, w, head) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: { top: bd, bottom: bd, left: bd, right: bd },
  shading: head ? { fill: "E7E6E6", type: ShadingType.CLEAR, color: "auto" } : undefined, margins: { top: 50, bottom: 50, left: 90, right: 90 },
  children: t.split("\n").map(l => new Paragraph({ spacing: { after: 20 }, children: runs(head ? `**${l}**` : l, 18) })) });
const T = (cap, head, rows, w) => [
  new Paragraph({ keepNext: true, spacing: { before: 120, after: 60 }, children: [r(cap, { i: true, size: 20 })] }),
  new Table({ width: { size: w.reduce((a, b) => a + b), type: WidthType.DXA }, columnWidths: w,
    rows: [head, ...rows].map((row, i) => new TableRow({ tableHeader: i === 0, cantSplit: true, children: row.map((c, j) => C(c, w[j], i === 0)) })) }),
  new Paragraph({ spacing: { after: 60 }, children: [] })];

const body = [
  new Paragraph({ spacing: { after: 60 }, children: [r("GIZ R-NBT KAZA | Micro diagnostic working sessions (GM-3 and GM-4)", { i: true, size: 20 })] }),
  new Paragraph({ spacing: { after: 60 }, children: [r("Finance Segment: Delivery Concept", { b: true, size: 32 })] }),
  new Paragraph({ spacing: { after: 200 }, children: [r("Victoria Falls (10 November 2026) and Maun (12 November 2026) | MNZ Consult, 6 November 2026 | Draft for discussion with GIZ and Sigma", { size: 20 })] }),

  H("1. Why this segment, and what it should achieve"),
  P("The September Regional Roundtable in Maun (22–24 September 2026) converged on three principles: build capability before and alongside finance, connect support to credible buyer demand, and use existing structures. Its Finance Lab introduced the Regenerative Tourism Finance Facility (RTFF). The two micro diagnostic reports (GM3-D10, 5 November 2026) now show what this means locally: finance is the constraint MSMEs name first, but most have never applied, and the problem is “the wrong type of finance, not the amount”."),
  ...T("Table 1: What the micro diagnostics say about finance", ["", "Hwange–Victoria Falls–Livingstone (n=64)", "Okavango Delta–Maun (n=40)"], [
    ["Finance in top three challenges", "81%", "75%"],
    ["Never applied for finance", "47%; of 28 who applied, 15 were refused, mostly for lack of collateral", "60%; 20% obtained finance, 18% were turned down"],
    ["Written contract or letter of intent with a buyer", "42%", "18%"],
    ["Signal for buyer-linked finance", "24% of those with a buyer arrangement obtained finance, against 7% without", "62% report turnover below BWP 200,000, pointing to small tickets"],
    ["Main gaps", "Working capital against orders, asset finance (transport, food supply), small compliance grants", "Small start-up and working capital loans (from BWP 10,000), guide equipment, concession upfront costs"],
    ["Open RTFF questions", "Corridor is the candidate for cohort 1; currency and exchange control; Tier 1 share (82.5% of capital is in Tier 2)", "Route A (Botswana RTFF phase) or Route B (support plus referral); citizen reservations; small-ticket fit"],
  ], [2400, 3500, 3480]),
  P("**Objective.** In about two hours, validate the finance findings with the people they describe and leave with: (1) finance needs by value chain (purpose, amount, timing, currency, what security is available); (2) a fit rating of each local finance channel; (3) answers on the RTFF keys most relevant to each destination; and (4) one or two finance priority actions, with a lead, to carry into Session 5."),
  P("**What the segment will not do.** It makes no lending, funding or RTFF selection decisions; financiers decide, and expressions of interest are not commitments. This should be said at the start, because MSMEs will come expecting money."),

  H("2. Design principles"),
  B("**MSMEs speak first.** Financiers and anchors respond; the September evidence came mostly from institutions."),
  B("**Finance is one pillar, not the centre.** Every finance discussion is tied to a buyer, an order or a purpose."),
  B("**Fit for a small room.** The attendance registers list about nine local organisations per destination, so plan for one facilitated table of 10–15, not three tables of 25."),
  B("**Private before public.** Businesses may not admit a need for funds in front of competitors, so needs are captured on individual cards first and discussed as patterns."),
  B("**Include the micro and informal route.** Many participants (crafters, cooperatives, new operators) will not pass a lender’s gate; groups, savings groups, community funds and a formalisation pathway are discussed explicitly."),
  B("**Record sex and age** on every needs card (year of birth, with consent), so findings can be disaggregated as the F1-D4 review requires."),

  H("3. Fitting two hours into a one-day agenda"),
  P("The draft agenda gives Session 3 (Support for MSMEs) 70 minutes for coaching, market access and finance together. Two ways to reach about two hours for finance:"),
  ...T("Table 2: Delivery options", ["Option", "How it works", "Assessment"], [
    ["A. Split across the day (recommended)", "Part 1 in Session 3 (about 45 of its 70 minutes, after 25 minutes on coaching and market access). Part 2 as a parallel finance group in Session 4 (13:10–14:00) for financiers, anchors and trading or market-ready MSMEs, while community enterprises join the community group. Part 3: the finance action enters Session 5 (5–10 minutes).", "About 105 minutes; keeps the agreed agenda and end time; community enterprises are not pulled away from Session 4"],
    ["B. One dedicated block", "Session 3 runs 11:20–13:20 (40 minutes on coaching and market access, 80 on finance); lunch moves to 13:20–14:00; Sessions 4 and 5 shortened.", "More continuous, but squeezes community and priority sessions and the long-distance delegates’ return travel in Maun"],
  ], [2000, 4880, 2500]),

  H("4. Running order (Option A)"),
  ...T("Table 3: Finance segment running order", ["Part and time", "Activity", "Method and output"], [
    ["Part 1\n(Session 3, about 45 min)", "**Framing (5 min).** Three findings from Table 1 for this destination; what the day will and will not decide.", "MNZ Consult; one slide"],
    ["", "**Needs cards (15 min).** Each MSME fills an individual card: purpose, amount, when in the season, currency, what security they could offer, whether they have applied and what happened; sex and year of birth.", "Private cards; facilitator clusters them by value chain on the wall"],
    ["", "**Channel fit (25 min).** One A4 card per channel from Section 6.2 of the report (ticket size, tenor, collateral, who it is for). Participants place green, amber or red dots for “fits my need” and write the barrier. Financiers present stand by their card and respond.", "Channel-fit matrix by value chain"],
    ["Part 2\n(Session 4 slot, 50 min)", "**Buyer-linked finance (20 min).** Anchors and MSMEs work through one real order: what a trial order with payment terms (currently 30–90 days) would need in working capital or asset finance, and what an anchor could confirm in writing.", "One worked example per destination"],
    ["", "**RTFF keys (20 min).** Short TUI Care Foundation input online if available (5 min), then the destination’s priority keys (Table 4).", "Answers or open questions per key"],
    ["", "**Micro and community route (10 min).** What works below Tier 1: savings groups, group lending, community funds, grants, and the formalisation steps that unlock them.", "Short list of routes and gaps"],
    ["Part 3\n(Session 5, 5–10 min)", "**Finance priority.** Dot vote on the gaps; agree one or two actions with a lead and partners.", "Finance action(s) in the session record"],
  ], [1700, 4900, 2780]),
  ...T("Table 4: Destination-specific focus", ["", "Victoria Falls–Livingstone (10 November)", "Maun (12 November)"], [
    ["RTFF keys to test", "Tier 1 share for micro enterprises; repayment matched to season; EUR loans against USD, ZiG or kwacha income; which anchors give trial orders", "Route A or B; citizen reservations and borrower eligibility; small tickets below Tier 1; trust trading arms"],
    ["Channel cards", "ECGC guarantees; SMEDCO; women’s microfinance and group lending; Zanaco asset finance; CEEC and MSMED grants; scored bank credit; RTFF", "CEDA; NDB; regional guarantee subsidiary (60% cover); microfinance; Youth Development Fund; community funds and OKACOM’s CORB Fund; LEA (referral); RTFF"],
    ["Financiers to invite (gap)", "SMEDCO is registered; add ECGC or a partner bank, and Zanaco or ZCGS from Livingstone, in person or online", "None registered: invite CEDA and LEA in person; NDB, a microfinance lender and the guarantee subsidiary in person or online"],
    ["Participants to draw on", "Booma Women Cooperative, Africa Travel Tours, Clamuso, Nawali, House of Zulu (MSMEs); Wild Horizons, White Rose Lodge and the Lodges and Guesthouses Association (buyers)", "Veggie World Express, Beyond Innovations Logistics, Kalahari Breeze, Save Africa Safaris, Okavango Camel Rides, Aardvark Studios (MSMEs); Wilderness, Natural Selection, Travel for Impact (buyers)"],
    ["Language and access", "English", "Setswana interpreter at the community table; one-page channel summary in Setswana"],
  ], [1700, 3840, 3840]),

  H("5. Before and after the day"),
  B("**By 8 November:** confirm financier invitations and the TUI Care Foundation online slot; print channel cards, needs cards and dots; prepare a one-page finance handout per destination."),
  B("**Follow-up meetings (Maun, 13 November; Victoria Falls, equivalent slot):** one-to-one meetings with financiers who could not attend (CEDA, NDB, LEA, ECGC, SMEDCO) and 3–4 individual MSME interviews per country using the F1-D4 interview guide (Annex B), recording sex and age. This also delivers the “MSME voice” the F1-D4 review asked for."),
  B("**By 18 November:** finance results written into Annex C of each GM3-D10 report and the revised baseline (GM3-D11), and fed into the F1-D4 Financial Landscape Analysis."),

  H("6. Risks and how to manage them"),
  ...T("Table 5: Risks", ["Risk", "Mitigation"], [
    ["MSMEs expect funding on the day", "State the limits at the start; describe the RTFF as presented and not committed"],
    ["Few or no financiers in the room", "Invite now; online inputs; MNZ Consult presents channel cards; one-to-one follow-ups"],
    ["Reluctance to discuss finance in front of competitors", "Private needs cards; individual interviews afterwards"],
    ["Micro and community enterprises left out of a loan-focused discussion", "Dedicated micro and community route; interpreter in Maun; group-based options"],
    ["Time overrun", "Option A with a timekeeper; park detailed product questions for follow-up meetings"],
  ], [3600, 5780]),
];

const doc = new Document({
  styles: { default: { document: { run: { font: F, size: 22 } } } },
  numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1200, right: 1260, bottom: 1200, left: 1260 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], font: F, size: 18 })] })] }) },
    children: body }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync("Finance_Segment_Delivery_Concept_Mini_Roundtables_Nov2026.docx", b); console.log("ok"); });
