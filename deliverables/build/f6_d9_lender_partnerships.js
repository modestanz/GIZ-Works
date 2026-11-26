// F6-D9: proposed additions on lender dialogue (Section 5.1) and strategic partnerships (new 7.6 and Annex D), for review
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC } = K;

const label = (t) => new Paragraph({ spacing: { before: 160, after: 80 }, children: [new TextRun({ text: t, bold: true, italics: true, size: 20, color: "1F4E5F" })] });
const h2 = (t) => new Paragraph({ keepNext: true, spacing: { before: 120, after: 40 }, children: [new TextRun({ text: t, bold: true, size: 24, color: "262626" })] });
const h3 = (t) => new Paragraph({ keepNext: true, spacing: { before: 80, after: 20 }, children: [new TextRun({ text: t, bold: true, italics: true, size: 22, color: "0D0D0D" })] });

const partners = [
  { band: "Anchoring and long-term capital" },
  ["KAZA Secretariat", "Treaty secretariat; the SFC’s long-term strategic partner for KAZA finance", "Hosts the regional layer; co-decides the RTFF’s future arrangements by Q4 2028; a finance task force with Partner State representatives has been proposed", "Task force under consideration (SFC minutes)"],
  ["KAZA Conservation Trust Fund (Sustainable Finance Coalition, KAZA Secretariat, WWF-US)", "In design: implementation task team since July 2026; GBFF funding expected late 2027; fund structure around early 2028", "Programme account for the RTFF under the catalytic nature finance window, probably after 2028–2029; co-learning with the RTFF pilot now", "SFC consulting internally; feedback loop agreed on 26 November 2026"],
  ["TUI Care Foundation and TUI Group (Target 8.9)", "RTFF fiduciary and administrator for the pilot; reported to match GIZ’s contribution of about €800,000, including €150,000 recently committed by TUI Group (figures as transcribed)", "Carries the facility until it is anchored; transfers it to the CTF or national channels; private-sector voice in the CTF’s governance", "To join the next GIZ–SFC conversation"],
  ["SADC FANR and SADC-DFRC", "Political partner of the programme (FANR); secretariat to the region’s DFIs (DFRC)", "Links pilots to regional policy; aggregates KAZA MSMEs into a regional investment pipeline; brings DFIs in as in-country delivery partners", "DFRC’s official position awaited"],
  { band: "Funders active in KAZA" },
  ["European Union", "Co-funds R-NBT, the Green Growth for KAZA project (SFC, KAZA Secretariat, WWF) and the ITC Green Value Chain programme in Botswana", "Co-financing of readiness grants and first loss; convening one joint space for EU-funded projects in KAZA", "Joint space raised by GIZ with the EU Delegation"],
  ["Germany: BMZ through GIZ (C-NRM, R-NBT), the International Climate Initiative (IKI) and KfW", "Co-funds R-NBT; IKI call for 2027; KfW is a long-standing funder of KAZA (current programmes to confirm)", "A joint RTFF–CTF concept under IKI; recapitalisation or a loss reserve after the pilot", "Joint IKI concept to be explored with the SFC and the TUI Care Foundation"],
  ["GEF and World Bank", "USD 10 million GEF grant to the CORB Fund through the World Bank (May 2026); GEF support to the KAZA CTF; GREAT-TDP in Zambia (USD 100 million, community matching grants); a KAZA tourism programme in design", "Matching-grant co-financing; aligned grant terms; capital for the CTF window that would host the RTFF", "Coordinate with the KAZA programme design"],
  ["OKACOM (CORB Fund)", "Basin commission for Angola, Botswana and Namibia; MoU with KAZA due for review", "Readiness grants and community infrastructure; outcome payments behind the RTFF’s nature-steward rate; later a loss reserve; one referral register in the overlap zone", "MoU review as the vehicle (OKACOM note)"],
  ["African Development Bank (AFAWA) and African Guarantee Fund", "Regional guarantor; women’s finance risk-sharing", "Counter-guarantees behind national tourism windows; a women’s tier", "Not yet engaged"],
  ["IFC and impact investors (for example the ACCT Fund)", "Blended finance and supplier development; growth capital", "Risk-sharing with banks; later capital for the RTFF; finance for anchors and Tier 3 enterprises", "Not yet engaged"],
  ["WWF and Peace Parks Foundation", "WWF’s KAZA programme and Bankable Nature Solutions pipeline; Peace Parks is a founding KAZA partner and bridges KAZA and OKACOM", "Pipeline and bankability lessons; shared referral register; community delivery", "Connect with the WWF pipeline"],
  { band: "National finance institutions" },
  ["Development banks and agencies: NDB, CEDA and LEA (Botswana); DBN (Namibia); CEEC (Zambia); SMEDCO (Zimbabwe); BDA (Angola)", "BDA, NDB, LEA and SMEDCO expressed interest at the SADC-DFRC consultation; NDB prioritises SME and tourism capacity building to 2029", "Graduation channels for RTFF borrowers; in-country monitoring and recovery; co-delivery; SMEDCO’s training-linked lending as a model", "Individual follow-up"],
  ["Guarantee schemes: ECGC, NASRIA and BOSRIA, ZCGS, FGC", "National credit guarantee schemes", "Tourism windows with first loss; cover for graduated RTFF borrowers", "Term-sheet talks"],
  ["Commercial banks: FNB, Stanbic, ZANACO and others", "Present in the hub towns; FNB Zambia scored credit; Wilderness–Stanbic supplier finance", "Graduation of RTFF borrowers; supplier finance against anchor contracts", "Through national finance working groups"],
  ["Conservation funds: CCFN (Namibia), NEF (Botswana)", "Community conservation funding", "Capital for community revolving funds; first loss; results-based finance (Model D)", "Not yet engaged"],
  { band: "Pipeline, verification and markets" },
  ["ITC Green Value Chain programme (EU-funded, Botswana)", "Draft grant facility of about €2 million, some 142 grants of €10,000–35,000, to de-risk CEDA and NDB lending", "Matched grants to de-risk RTFF loans; referrals in shared areas; GIZ on ITC’s technical committee", "Meeting with ITC’s grant office (ITC minutes)"],
  ["Anchor operators and their foundations (for example Chobe Holdings and Chobe Impact, Natural Selection, African Bush Camps, Wilderness)", "Buyers; foundations funding incubation of informal operators", "Nominate and back borrowers; offtake; repayment deducted from supplier payments; on-time payment", "Through supply MOUs"],
  ["Verifiers: GreenLoop (Botswana), Target 8.9 ESG audit, Travelife; BTO certification", "ESG due diligence (GreenLoop for BDC); Botswana Sustainability Week; advice to BURS on a green taxonomy", "Baselines and milestone verification; lender learning sessions; alignment with the tax-rebate taxonomy", "Short pilot contract proposed by GreenLoop"],
];

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F6-D9: Proposed Additions on Lender Dialogue and Strategic Partnerships", bold: true, size: 34, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "A lender learning platform for Section 5.1, a new Section 7.6 on strategic partnerships and a new Annex D listing possible collaborators and KAZA funders", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "For review before insertion · KAZA R-NBT · Output 1.2 · November 2026", size: 18 })] }),

  H1("1. Purpose"),
  P("The edited synthesis report is silent on dialogue with lenders about regenerative practice, how it can be read in credit terms and tourism business literacy, and it lacks a section on the strategic partnerships that would sustain the RTFF and the other mechanisms after the pilot. This note proposes text for both, drawing on the source reports and on five further records: the GIZ–Sustainable Finance Coalition meeting on the RTFF and the KAZA Conservation Trust Fund (26 November 2026), the SADC-DFRC consultation with DFIs (31 August 2026), the GreenLoop interview (11 September 2026), the GIZ–ITC technical meeting (27 October 2026) and the KAZA–OKACOM synergy note (November 2026)."),
  P("The text is written to fit the updated draft of 26 November 2026. It proposes three insertions: (A) a subsection in Section 5.1, (B) a new Section 7.6, with the current 7.6 Immediate next steps becoming 7.7, and (C) a new Annex D, with the references becoming Annex E. Section 5 gives the insertion notes."),

  H1("2. Addition A: lender learning platform (Section 5.1)"),
  label("To insert in Section 5.1 after the table of formats (Table 14) and before “Design requirements”"),
  h3("Lender learning platform: tourism literacy, regenerative practice and credit"),
  P("Alongside the MSME-facing formats, each platform should run a learning track for the credit officers, risk managers and product teams of partner banks, MFIs, guarantee schemes and DFIs. The consultations show why. Lenders find tourism hard to read: unlike agriculture, it has no harvest-like point at which a loan can be repaid in one sum, specialised assets such as boats have no resale market outside the region, and NDB reports arrears of about 18% in the Okavango, linked largely to seasonality (F5). Lenders rarely understand regenerative criteria and tend to treat conservation features as a cost rather than a sign of resilience (F3), and participants in both November sessions said lenders do not understand how a guide, a booking or a tourism season works (RT-VF, RT-MN). The market is moving at the same time: EU rules against greenwashing are pushing tour operators to support their supply chains down to micro-enterprises (SFC minutes), Botswana is preparing a green taxonomy with tax rebates for disclosed sustainable practice (F5), and the RTFF prices social and climate covenants instead of asking for collateral. The track should cover three subjects:"),
  ...B([
    "**Tourism business literacy:** seasonal cash flows and forward bookings; how lodges, DMCs and tour operators contract and pay; concession, lease and community land arrangements; and how orders, booking records and payment trails can show repayment capacity.",
    "**Regenerative practice and extended ESG:** what regenerative practices are and how they are verified, from certification aligned with the Global Sustainable Tourism Council (GSTC) standards to the progressive checklist; quantitative but proportionate verification, for which GreenLoop’s ESG due diligence for the Botswana Development Corporation is a local precedent (F5); and avoiding over-regulation of micro enterprises.",
    "**Reading nature-positive practice in credit terms:** as **collateral**, green equipment (solar systems, electric vehicles, boats) can secure a loan where movable-collateral registries operate (Botswana, Zambia and Zimbabwe), and results-based payments (wildlife credits, CORB Fund outcome payments) and anchor receivables can be assigned to the lender; as **lower risk**, lower energy and water costs, fewer outages and access to premium and anchor markets strengthen cash flow and resilience; and as **pricing**, verified milestones can earn rate step-downs, as the RTFF’s covenants do, or better guarantee cover.",
  ]),
  P("Delivery should be short and practical: half-day clinics for credit officers in the hub towns, timed to the low season; joint sessions with verifiers such as GreenLoop and Target 8.9; peer exchange among DFIs convened by SADC-DFRC, building on SMEDCO’s practice of pairing loans with mandatory borrower training (F5); and sessions at existing platforms such as Botswana’s Sustainability Week and the annual R-NBT Finance Forum. The track should produce a short list of verifiable indicators that lenders can reflect in credit assessment, pricing, the treatment of green assets as collateral and guarantee terms, aligned with emerging national taxonomies, and a short guidance note on lending to seasonal, buyer-linked tourism enterprises. Progress can be tracked through the share of partner credit officers completing the track and of lenders using agreed regenerative indicators in credit decisions."),

  H1("3. Addition B: strategic partnerships (new Section 7.6)"),
  label("To insert after Section 7.5 Stakeholder engagement; the current 7.6 Immediate next steps becomes 7.7"),
  h2("7.6 Strategic partnerships for sustainability"),
  P("The RTFF and the other mechanisms will outlast the project only if they have institutional homes, capital after the pilot and partners that keep originating, financing and verifying borrowers. None of this needs a new institution: the partners exist, and several already fund KAZA. Four kinds of partnership matter; Annex D lists the possible collaborators, what each brings and the next step."),
  ...B([
    "**Anchoring and long-term capital.** The KAZA Conservation Trust Fund, being designed by the Sustainable Finance Coalition with the KAZA Secretariat and WWF-US, could host the RTFF after the pilot as a programme account under its catalytic nature finance window, probably after 2028–2029; GBFF funding is expected in late 2027 and the fund structure around early 2028 (SFC minutes). The TUI Care Foundation has committed to carry the facility until it is anchored. Co-learning between the RTFF pilot and the fund’s design should start now, with the TUI Care Foundation in the conversation and a light letter of intent on joint learning.",
    "**Co-financing from funders active in KAZA.** The EU (co-funder of R-NBT, Green Growth for KAZA and the ITC Green Value Chain programme), Germany (through GIZ, KfW and the International Climate Initiative, whose 2027 call could support a joint RTFF–CTF concept), the GEF and World Bank (the CORB Fund and Zambia’s tourism programme) and the African Development Bank and African Guarantee Fund (counter-guarantees and women’s finance) can each fund one layer: readiness grants, first loss and loss reserves, counter-guarantees or recapitalisation. Joint KAZA–OKACOM proposals to donors could include the RTFF’s recapitalisation rather than seeking it separately.",
    "**National channels.** Development banks and guarantee schemes (NDB, CEDA, DBN, SMEDCO, ECGC, NASRIA and BOSRIA, ZCGS, BDA and FGC) and commercial banks such as FNB, Stanbic and ZANACO are the graduation route for RTFF borrowers and the in-country partners for monitoring and recovery. SADC-DFRC has suggested aggregating KAZA MSMEs into a regional pipeline large enough to interest other DFIs, with DFIs as in-country delivery partners (F5).",
    "**Pipeline, verification and coordination.** Anchor operators and their foundations nominate and back borrowers; ITC’s planned grants (about €2 million, some 142 grants) can de-risk RTFF loans as they are meant to de-risk CEDA and NDB lending (ITC minutes); WWF’s Bankable Nature Solutions pipeline and OKACOM’s community programmes can feed one shared referral register; and verifiers such as GreenLoop can provide baselines and milestone verification. A single joint space for EU-funded projects in KAZA, which GIZ has raised with the EU Delegation, would reduce duplication and stakeholder confusion (SFC minutes).",
  ]),
  P("These partnerships should be formalised in sequence: co-learning agreements and a shared referral register in 2027; co-financing for season two; and a decision with the KAZA Secretariat on the RTFF’s host and national channels by the fourth quarter of 2028, before Gate 2."),

  H1("4. Addition C: possible strategic partners (new Annex D)"),
  label("To insert as Annex D; the references become Annex E. The annex is outside the page limit."),
  h2("Annex D: Strategic Partners and Funders"),
  P("Possible collaborators for the sustainability of the RTFF and the other Output 1.2 mechanisms, including funders active in KAZA. Statuses are as of November 2026; no partner has committed to a role beyond those stated. Table D1 lists them by type of partnership."),
  ...table("Possible strategic partners and funders", ["Partner", "Role in KAZA today", "Possible role for the RTFF and other mechanisms", "Status and next step"], [2300, 2650, 3050, 1746], partners),

  H1("5. Insertion notes"),
  ...B([
    "**Numbering.** Addition A adds no table. Addition B renumbers 7.6 Immediate next steps to 7.7. Addition C adds an annex table after Table 23; number it Table 24 or use the annex numbering shown (Table D1). Update the contents list.",
    "**Executive summary.** The executive summary already recommends the lender learning track under Activity 1.2.1. Consider one sentence under the roadmap: “Anchor the RTFF and the other mechanisms through partnerships with the KAZA Conservation Trust Fund, funders active in KAZA and national institutions (Section 7.6; Annex D).”",
    "**Sources to add to the references.** GIZ and Sustainable Finance Coalition (2026), meeting minutes on the RTFF and the KAZA Conservation Trust Fund, 26 November 2026 (cited as SFC minutes); GIZ and ITC (2026), technical meeting minutes, 27 October 2026 (ITC minutes); KAZA–OKACOM synergy note, November 2026 (OKACOM note). The SADC-DFRC consultation (31 August 2026) and the GreenLoop interview (11 September 2026) are F5-D8 interview records and are cited as F5.",
    "**Length.** Additions A and B add about 1.3 pages to the main text; Annex D is outside the page limit. If the main text must stay below its target, shorten Addition A’s first paragraph to its first and last sentences, and move the co-financing paragraph of Addition B into Annex D.",
    "**To confirm.** The TUI contribution figures are as transcribed in the SFC minutes; KfW’s current KAZA programmes were not part of the consultations; ITC’s grant framework, ceilings and currency were awaiting approval in October 2026.",
  ]),
  SRC("Sources: GIZ–SFC meeting minutes (26 November 2026); SADC-DFRC regional DFI consultation minutes (31 August 2026); GreenLoop interview minutes (11 September 2026); GIZ–ITC technical meeting minutes (27 October 2026); KAZA–OKACOM synergy note (November 2026); F1-D4, F3-D6, F4-D7, F5-D8; F6-D9 updated draft (26 November 2026)."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT · F6-D9: Proposed Additions on Lender Dialogue and Strategic Partnerships",
  cover: null,
  children,
  toc: false,
});
