const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, AlignmentType, Footer, PageNumber, LevelFormat, PageBreak } = require("docx");
const F = "Times New Roman";
const r = (t, o = {}) => new TextRun({ text: t, font: F, size: o.size || 22, bold: o.b, italics: o.i });
const runs = (t, size) => t.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map(s => s.startsWith("**") ? r(s.slice(2, -2), { b: true, size }) : r(s, { size }));
const P = (t, o = {}) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 120, line: 264 }, children: runs(t) });
const H = (t, pb) => new Paragraph({ pageBreakBefore: !!pb, spacing: { before: 220, after: 100 }, keepNext: true, children: [r(t, { b: true, size: 24 })] });
const H3 = (t) => new Paragraph({ spacing: { before: 140, after: 60 }, keepNext: true, children: [r(t, { b: true, i: true, size: 22 })] });
const B = (t) => new Paragraph({ numbering: { reference: "b", level: 0 }, spacing: { after: 60, line: 252 }, children: runs(t) });
const bd = { style: BorderStyle.SINGLE, size: 4, color: "999999" };
const C = (t, w, head, sz = 18) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: { top: bd, bottom: bd, left: bd, right: bd },
  shading: head ? { fill: "E7E6E6", type: ShadingType.CLEAR, color: "auto" } : undefined, margins: { top: 50, bottom: 50, left: 90, right: 90 },
  children: t.split("\n").map(l => new Paragraph({ spacing: { after: 20 }, children: runs(head ? `**${l}**` : l, sz) })) });
const T = (cap, head, rows, w, sz) => [
  ...(cap ? [new Paragraph({ keepNext: true, spacing: { before: 120, after: 60 }, children: [r(cap, { i: true, size: 20 })] })] : []),
  new Table({ width: { size: w.reduce((a, b) => a + b), type: WidthType.DXA }, columnWidths: w,
    rows: [head, ...rows].map((row, i) => new TableRow({ tableHeader: i === 0, cantSplit: true, children: row.map((c, j) => C(c, w[j], i === 0 && head.length > 0 && head[0] !== null, sz)) })) }),
  new Paragraph({ spacing: { after: 60 }, children: [] })];
const W = 9380;

const body = [
  new Paragraph({ spacing: { after: 60 }, children: [r("GIZ R-NBT KAZA | Micro diagnostic working sessions (GM-3 and GM-4)", { i: true, size: 20 })] }),
  new Paragraph({ spacing: { after: 60 }, children: [r("Finance Segment: Practical Delivery Concept (Version 2)", { b: true, size: 32 })] }),
  new Paragraph({ spacing: { after: 200 }, children: [r("Victoria Falls (10 November 2026) and Maun (12 November 2026) | MNZ Consult, 6 November 2026 | Draft for discussion with GIZ and Sigma", { size: 20 })] }),

  H("1. Purpose: from survey findings to confirmed needs"),
  P("The September Regional Roundtable agreed that finance should follow capability and credible buyer demand. The micro diagnostic reports (GM3-D10) confirm that finance is the constraint MSMEs name first (81% in Hwange–Victoria Falls–Livingstone, 75% in Okavango–Maun), but they rest on a self-selected online survey and on what institutions said about MSMEs. They do not yet show **why** most MSMEs never apply, **how much** finance is needed, **for what**, **when in the season**, and **which buyer demand** would repay it."),
  P("The finance segment is therefore designed as a practical validation exercise. In about two hours it should confirm, with the MSMEs and buyers in the room, the finance needs of each value chain by purpose and amount, the demand behind them, and the access barriers MSMEs actually meet, and leave with a referral-ready list of enterprises and one or two finance priority actions. It makes no lending or RTFF decisions."),

  H("2. Evidence gaps the session will close"),
  ...T("Table 1: Gaps in the current evidence and how the session addresses them", ["Gap", "What the reports say now", "What we will capture", "Tool"], [
    ["Why MSMEs do not apply", "47% (VF–Livingstone) and 60% (Maun) never applied; reasons not recorded", "Reasons for not applying; where people tried; what happened", "Feedback card; journey line"],
    ["Why applications fail", "15 of 28 refused in the corridor, mainly collateral; Maun 18% turned down", "Step at which applications stop; documents and security asked for", "Journey line; financier response"],
    ["Size, purpose and timing of need", "Need described as working capital, assets and grants; “from BWP 10,000” in Maun", "Purpose, amount band and month needed, by value chain", "Feedback card; needs board"],
    ["Demand behind the need", "Anchor procurement “not measured”; 42% (VF) and 18% (Maun) hold a written agreement", "What buyers would buy locally, indicative volumes, specifications and payment days", "Buyer demand check"],
    ["Repayment and currency", "Payments reported at 30–90 days; RTFF in EUR against local income", "Source and currency of repayment; low and high season", "Feedback card; buyer demand check"],
    ["Micro, informal and community needs", "Community and Hwange enterprises under-represented; foundational share understated", "Needs and routes below loan size; group and community options", "Feedback card (group option); needs board"],
    ["Physical and digital access", "Not covered at destination level", "Distance to branch or agent; mobile money use; network", "Feedback card"],
    ["Gender and age", "Women-led 36% (VF) and 48% (Maun); youth thin; age bands differ", "Owner’s sex and year of birth on every card, with consent", "Feedback card"],
  ], [1700, 2650, 3030, 2000]),

  H("3. The practical tools"),
  P("Four simple tools do the work. Printable versions of Tools 1 and 4 and the needs-board layout are in the appendices."),
  H3("Tool 1. MSME finance feedback card (individual, about 10 minutes)"),
  P("A one-page card each MSME fills in privately, with help from a facilitator or the interpreter where needed. It records the value chain, registration status, finance history (applied or not, where, outcome, and why not), the current need (purpose, amount band, month needed, how it would be repaid and in which currency), the security the enterprise could offer, how it reaches a bank or agent, and the owner’s sex and year of birth. A consent box allows follow-up and referral. Cards are private because businesses may not admit a need for funds in front of competitors."),
  H3("Tool 2. Finance journey line (group, about 15 minutes)"),
  P("A strip on the wall shows the steps from “I know about it” to “I repaid”: know, decide to apply, gather documents, submit, assessed, approved, disbursed, repay. MSMEs place a sticky note where they stopped or got stuck and write why. Financiers present respond to the three most common sticking points. This turns “finance is the main constraint” into specific, fixable barriers."),
  H3("Tool 3. Needs board by value chain and purpose (built live, validated in plenary)"),
  P("While the journey line runs, a note-taker transfers the cards onto a wall matrix: value chains down the side (Appendix C lists those proposed in each report) and purposes across the top (working capital for orders, stock or inputs, equipment or vehicle, premises or infrastructure, compliance and licences, start-up). Each cell shows the number of cards, the amount range and the months needed. The group then checks it: is this right, what is missing, which needs are urgent?"),
  H3("Tool 4. Buyer demand check (anchors and MSMEs together, about 20 minutes)"),
  P("For each value chain with a finance need, anchor buyers complete a short sheet: what they buy now and from where, what they would buy locally if quality and reliability were met, indicative monthly volume by season, specifications, usual payment days, and whether they would issue a trial order or letter of intent. This links each finance need to the demand that would repay it, and starts the procurement mapping both reports list as a gap."),

  H("4. Running order"),
  P("The draft agenda gives Session 3 (Support for MSMEs) 70 minutes for coaching, market access and finance. The recommended approach splits the finance segment across the day, keeping the 15:00 finish and leaving community enterprises in Session 4’s community group:"),
  ...T("Table 2: Running order (about 110 minutes)", ["Part and time", "Activity", "Output"], [
    ["Part 1: Session 3\n(about 45 min)", "**Framing (5 min):** three findings for the destination; what the day will and will not decide.\n**Feedback card (12 min):** Tool 1, individual.\n**Journey line (15 min):** Tool 2; financiers respond.\n**Read-back (10 min):** first view of the needs board; corrections.", "Completed cards; ranked access barriers; draft needs board"],
    ["Part 2: Session 4 parallel finance group\n(50 min)", "**Needs board check (10 min):** confirm needs by value chain and purpose; flag urgent ones.\n**Buyer demand check (20 min):** Tool 4 for the two or three value chains with the clearest needs.\n**Matching (15 min):** each confirmed need against the channel cards (national lenders, guarantees, microfinance, grants, community funds, RTFF as presented) and the destination’s RTFF questions.\n**Below-loan routes (5 min):** savings groups, group lending, community funds, formalisation steps.", "Confirmed needs with demand evidence; need-to-channel match; RTFF answers"],
    ["Part 3: Session 5\n(5–10 min)", "**Finance priorities:** dot vote on the confirmed gaps; agree one or two actions with a lead.", "Finance action(s) in the session record"],
  ], [2000, 5380, 2000]),
  P("**Alternative:** a single two-hour block in Session 3 (11:20–13:20), with lunch at 13:20. It is more continuous but compresses Sessions 4 and 5, which matters in Maun for the community trust delegates travelling back to Khwai, Mababe and Sankuyo."),

  H("5. Destination focus"),
  ...T("Table 3: What differs between the two sessions", ["", "Victoria Falls–Livingstone (10 November)", "Maun (12 November)"], [
    ["Value chains on the needs board", "Fresh produce, poultry and eggs; guiding, activities and culture; transport and transfers; crafts to brief; services", "Fresh produce, poultry and fish; laundry and recurring services; crafts and culture to brief; coexistence services and honey; transport and ground services"],
    ["Amount bands on the card", "USD: under 500; 500–2,000; 2,000–10,000; 10,000–30,000; over 30,000", "BWP: under 10,000; 10,000–50,000; 50,000–150,000; 150,000–400,000; over 400,000"],
    ["Questions to settle", "Share of small loans for micro enterprises; repayment matched to season; currency of income (USD, ZiG, kwacha); which anchors give trial orders", "Route A or B; citizen-reserved activities and borrower eligibility; very small tickets (62% turn over less than BWP 200,000); trust trading arms"],
    ["Channel cards", "ECGC guarantees; SMEDCO; women’s microfinance; Zanaco asset finance; CEEC and MSMED; scored bank credit; RTFF as presented", "CEDA; NDB; guarantee subsidiary (60% cover); microfinance; Youth Development Fund; community funds and OKACOM’s CORB Fund; LEA (referral); RTFF as presented"],
    ["Financiers to invite (gap in the register)", "SMEDCO is registered; add ECGC or a partner bank, and Zanaco or ZCGS", "None registered: CEDA and LEA in person; NDB, a microfinance lender and the guarantee subsidiary in person or online"],
    ["Buyers for the demand check", "Wild Horizons; White Rose Lodge and the Lodges and Guesthouses Association; Victoria Falls Liquorama", "Wilderness; Natural Selection; Travel for Impact"],
    ["Language", "English", "Setswana interpreter; cards available in Setswana"],
  ], [1900, 3740, 3740]),

  H("6. Outputs and where they go"),
  B("**Needs table** by value chain and purpose (counts, amount ranges, timing), disaggregated by sex, age group and formality."),
  B("**Access barrier ranking** from the journey line, with financiers’ responses."),
  B("**Demand evidence** per value chain: buyer, product, indicative volume, payment days, trial order or letter of intent (yes, maybe, no)."),
  B("**Need-to-channel match**, including needs no channel currently serves."),
  B("**Referral-ready list** of consenting enterprises (pipeline for coaching, market access and finance), held securely and not circulated."),
  P("These feed Annex C of each GM3-D10 report and the GM3-D11 baseline (indicators on finance, inclusion and anchor procurement) by 18 November, and the F1-D4 Financial Landscape Analysis (product tables, community chapter and MSME voice)."),

  H("7. Preparation, roles and follow-up"),
  B("**By 8 November:** confirm financier invitations and any TUI Care Foundation online input; print cards (and Setswana versions), channel cards, the journey strip, needs board and buyer sheets; send the feedback card in advance to registered MSMEs so they can bring figures."),
  B("**Roles on the day:** MNZ Consult leads; a Sigma co-facilitator runs the buyer demand check; one note-taker builds the needs board live; the interpreter supports the community table in Maun."),
  B("**After the session:** one-to-one meetings with absent financiers; 3–4 individual MSME interviews per country (the F1-D4 interview guide), including an informal or community enterprise; follow-up calls to buyers who said “maybe” to a trial order."),

  H("8. Risks"),
  ...T("Table 4: Risks and mitigation", ["Risk", "Mitigation"], [
    ["MSMEs expect funding on the day", "State the limits at the start; RTFF described as presented and not committed"],
    ["Figures on cards are rough or missing", "Amount bands rather than exact figures; send the card in advance; verify in follow-up interviews"],
    ["Few financiers present", "Invitations now; online inputs; MNZ Consult presents channel cards; one-to-one follow-ups"],
    ["Buyers unwilling to state volumes", "Ask for ranges by season; record “maybe”; follow up privately"],
    ["Micro and community enterprises left out", "Group option on the card; interpreter; below-loan routes discussed explicitly"],
    ["Personal data", "Consent box; cards kept by MNZ Consult; only aggregated results reported"],
  ], [3400, 5980]),

  // Appendices
  H("Appendix A: MSME Finance Feedback Card", true),
  P("One per enterprise; private. Tick all that apply unless stated."),
  ...T(null, ["Question", "Answer"], [
    ["1. Business and value chain", "Name (optional): ____________  Location: ____________\n☐ Food (produce, poultry, eggs, fish)  ☐ Guiding, activities, culture  ☐ Transport  ☐ Crafts  ☐ Laundry or services  ☐ Coexistence or honey  ☐ Other: ______"],
    ["2. Registration", "☐ Registered company  ☐ Council licence only  ☐ Group or cooperative  ☐ Not registered"],
    ["3. Have you applied for finance in the last 3 years?", "☐ Yes  ☐ No\nIf yes, where: ☐ Bank  ☐ Development finance (e.g. CEDA, SMEDCO, CEEC)  ☐ Microfinance  ☐ Savings group  ☐ Grant  ☐ Family or friends\nOutcome: ☐ Approved  ☐ Refused  ☐ Withdrew  ☐ Still waiting"],
    ["4. If refused or not applied: why?", "☐ No collateral  ☐ Not registered or no tax clearance  ☐ No records  ☐ Too expensive  ☐ Did not know where  ☐ Too far or too slow  ☐ Fear of debt  ☐ Did not need it  ☐ Other: ______"],
    ["5. What do you need finance for now?", "☐ Working capital to fill orders  ☐ Stock or inputs  ☐ Equipment, vehicle or boat  ☐ Premises or infrastructure  ☐ Licences and compliance  ☐ Starting the business  ☐ None now"],
    ["6. How much? (one band)", "☐ Band 1  ☐ Band 2  ☐ Band 3  ☐ Band 4  ☐ Band 5  (bands printed for each country)"],
    ["7. When do you need it?", "Month(s): ____________   ☐ Before high season  ☐ Any time"],
    ["8. How would you repay?", "From: ☐ Sales to a lodge or operator (name optional: ______)  ☐ Visitor sales  ☐ Other income\nYou earn mostly in: ☐ USD  ☐ Local currency  ☐ Both\nIs there a written order or agreement? ☐ Yes  ☐ Informal  ☐ No"],
    ["9. What security could you offer?", "☐ Vehicle or equipment  ☐ Purchase order or contract  ☐ Savings  ☐ Group guarantee  ☐ Guarantor  ☐ Property  ☐ None"],
    ["10. Access", "Nearest bank or agent: ☐ Under 5 km  ☐ 5–30 km  ☐ Over 30 km\nUse mobile money for business: ☐ Yes  ☐ No   Network where you work: ☐ Good  ☐ Patchy  ☐ None"],
    ["11. Owner", "Sex: ☐ Female  ☐ Male  ☐ Prefer not to say   Year of birth: ______   Business owned by: ☐ One person  ☐ Group or community"],
    ["12. Consent", "☐ I agree to be contacted for follow-up and possible referral. Phone or e-mail: ____________"],
  ], [2600, 6780], 17),

  H("Appendix B: Buyer Demand Check Sheet"),
  P("One per buyer and value chain; indicative and not a commitment."),
  ...T(null, ["Item", "Buyer response"], [
    ["Buyer and value chain", "Organisation: ____________   Value chain: ____________"],
    ["What do you buy now, and from where?", "Products: ____________   Source: ☐ Local  ☐ Elsewhere in country  ☐ South Africa or abroad"],
    ["What would you buy locally if quality and reliability were met?", "____________"],
    ["Indicative volume per month", "High season: ________   Low season: ________"],
    ["Key specifications", "Quality, packaging, food safety, delivery frequency: ____________"],
    ["Usual payment terms", "☐ Cash on delivery  ☐ Under 30 days  ☐ 30–60 days  ☐ 60–90 days  ☐ Over 90 days"],
    ["Would you issue a trial order or letter of intent?", "☐ Yes  ☐ Maybe  ☐ No   Conditions: ____________"],
    ["Contact for follow-up (with consent)", "____________"],
  ], [3400, 5980], 17),

  H("Appendix C: Needs Board Layout", true),
  P("Wall matrix built from the feedback cards. In each cell write the number of cards, the amount range and the months needed; mark urgent needs and any matching buyer demand from Appendix B."),
  ...T(null, ["Value chain", "Working capital for orders", "Stock or inputs", "Equipment, vehicle or boat", "Premises or infrastructure", "Licences and compliance", "Start-up"], [
    ["Food (produce, poultry, eggs or fish)", "", "", "", "", "", ""],
    ["Guiding, activities and culture", "", "", "", "", "", ""],
    ["Transport and transfers", "", "", "", "", "", ""],
    ["Crafts to brief", "", "", "", "", "", ""],
    ["Laundry and services", "", "", "", "", "", ""],
    ["Coexistence services and honey (Maun)", "", "", "", "", "", ""],
  ], [2180, 1200, 1200, 1200, 1200, 1200, 1200], 17),
];

const doc = new Document({
  styles: { default: { document: { run: { font: F, size: 22 } } } },
  numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1200, right: 1260, bottom: 1200, left: 1260 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], font: F, size: 18 })] })] }) },
    children: body }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync("Finance_Segment_Delivery_Concept_Mini_Roundtables_Nov2026_v2.docx", b); console.log("ok"); });
