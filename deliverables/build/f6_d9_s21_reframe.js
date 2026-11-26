// F6-D9 Section 2.1: proposed reframing to open Chapter 2 with the financial landscape (for review)
const { Paragraph, TextRun, AlignmentType } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC, runs } = K;

const label = (t) => new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: t, bold: true, italics: true, size: 20, color: "1F4E5F" })] });
const h2 = (t) => new Paragraph({ keepNext: true, spacing: { before: 120, after: 40 }, children: [new TextRun({ text: t, bold: true, size: 24, color: "262626" })] });
const quote = (t) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, indent: { left: 360, right: 360 }, children: runs(t, { italics: true, color: "404040" }) });
const figcap = (n, t) => new Paragraph({ spacing: { before: 160, after: 160 }, children: [new TextRun({ text: `Figure ${n}: `, bold: true, color: "1F5135", size: 20 }), new TextRun({ text: t, italics: true, size: 20 })] });

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F6-D9 Section 2.1: Proposed Reframing", bold: true, size: 36, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Opening Chapter 2 with the financial landscape, for review before it is placed in the report", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Based on the F6-D9 Consolidated Synthesis Report, updated draft of 26 November 2026 · KAZA R-NBT · Output 1.2", size: 18 })] }),

  H1("1. Purpose"),
  P("Section 2.1 currently states the core diagnosis in one paragraph and introduces Figure 1. This proposal reframes it to speak first to the **financial landscape** mapped in F1-D4 (who supplies finance in KAZA, how it reaches R-NBT MSMEs and why it does not fit them) and then to the diagnosis that all five reports share. It keeps the integrity and the logic of the chapter: the landscape and diagnosis (2.1) lead to the barriers behind the misfit (2.2), the institutions each country can build on (2.3), the gap no provider serves (2.4), the mechanisms that can fill it (2.5), what the November sessions add (2.6) and how the reports’ differences are resolved (2.7)."),
  P("The reframed section keeps the existing convergence paragraph and the introduction to Figure 1 unchanged, uses the report’s source codes and does not add a table or figure, so table and figure numbering is unaffected."),

  H1("2. Current text"),
  label("2.1 The core diagnosis (updated draft of 26 November 2026)"),
  quote("All five reports reach the same conclusion from different directions: the problem is the fit between finance and enterprises, not the volume of capital (F1, F2, F4, F5). Lenders and guarantors described the constraint in almost identical terms: collateral, track record and documentation, compounded by booking-based revenue that has no harvest-like settlement point (F5 §3). The demand-side evidence is consistent with this: Figure 1 brings together the figures that recur across the reports."),
  quote("[Figure 1: Headline evidence on MSME finance in KAZA]"),

  H1("3. Proposed text"),
  label("To replace Section 2.1 in full; Figure 1 stays in place"),
  h2("2.1 The financial landscape and the core diagnosis"),
  P("Finance is not absent from the KAZA landscape; it is misaligned with the profile of R-NBT MSMEs (F1). Commercial banks in all five Partner States are liquid and have branches in the hub towns of Kasane, Maun, Katima Mulilo, Rundu, Livingstone and Victoria Falls, and to a lesser extent Menongue. Each state has a development lender or public MSME financier (CEDA and NDB in Botswana, DBN in Namibia, CEEC in Zambia, SMEDCO in Zimbabwe and BDA in Angola), and four run national credit guarantee schemes (NASRIA in Namibia, ZCGS in Zambia, ECGC in Zimbabwe and FGC in Angola), with the NASRIA subsidiary BOSRIA operating in Botswana since 2026. Microfinance institutions, savings groups and community funds capitalized from conservancy, trust and CAMPFIRE revenue serve smaller borrowers; anchor lodges and DMCs buy from MSMEs and in one case already finance their suppliers through a bank; and regional and international funders (the African Guarantee Fund, the AfDB, the World Bank, the IFC and the EU) work through national institutions (F1 §2.2; F4 §11). Grant funding has thinned since the wind-down of USAID programmes in 2025, which raises the importance of blended and market-based mechanisms (F1 §2.3)."),
  P("What the landscape lacks is fit. Its products are designed for formal collateral, steady monthly income and salaried borrowers, traders and farmers, while most R-NBT MSMEs operate on communal or concession land that cannot be mortgaged, earn most of their revenue in the dry season, often in a currency other than that of their costs, and have few records or credit histories (F1 §2.3). Reach thins quickly beyond the hub towns, where branches, agents and mobile networks are sparse, so small loans to remote borrowers cost more to originate and monitor (F1 §2.3, §8). Tourism is therefore a marginal user of every channel, taking about 4% of Namibia’s guarantee scheme reach and under 10% of Zimbabwe’s (F5), and the unmet demand is concentrated in small-ticket working capital and asset finance repaid over one or two seasons (F1; F4 §2.5)."),
  P("All five reports reach the same conclusion from different directions: the problem is the fit between finance and enterprises, not the volume of capital (F1, F2, F4, F5). Lenders and guarantors described the constraint in almost identical terms: collateral, track record and documentation, compounded by booking-based revenue that has no harvest-like settlement point (F5 §3). The demand-side evidence is consistent with this: Figure 1 brings together the figures that recur across the reports. Sections 2.2 to 2.5 then set out the barriers behind this misfit, the institutions each country can build on, the gap that no provider serves and the mechanisms that can fill it."),
  figcap(1, "Headline evidence on MSME finance in KAZA (existing figure, unchanged)"),

  H1("4. What changes and why"),
  ...table("Changes from the current Section 2.1", ["Element", "Change", "Reason"], [1900, 3900, 3946], [
    ["Title", "“The core diagnosis” becomes “The financial landscape and the core diagnosis”", "The section now opens with the landscape that F1-D4 mapped and that the diagnosis rests on"],
    ["New first paragraph", "Summarises who supplies finance in KAZA: banks, development lenders, guarantee schemes, microfinance and savings groups, community funds, anchors and DMCs, and regional and international funders; notes the thinning of grant funding", "Gives readers the supply side before the diagnosis, as F1-D4 does; Chapter 2 previously opened with the conclusion alone"],
    ["New second paragraph", "Explains the misfit between products and R-NBT MSMEs (collateral, seasonality, currency, records, reach) and tourism’s marginal share of every channel", "Turns the landscape into the diagnosis; leaves the detailed barrier analysis to 2.2 and the gap definition to 2.4"],
    ["Third paragraph", "Existing text kept word for word, with one closing sentence added that previews Sections 2.2 to 2.5", "Keeps the established diagnosis and Figure 1, and makes the chapter’s logic explicit"],
    ["Figure 1", "Unchanged", "No renumbering of figures or tables is needed"],
  ]),
  ...B([
    "**No duplication with later sections.** Country scores and the institutions to build on stay in 2.3 (Figure 2), the five barriers in 2.2 (Table 4), the gap and the RTFF in 2.4 and the mechanisms in 2.5. Section 2.1 names institutions only to show that the landscape exists.",
    "**Consistency with the executive summary.** The executive summary’s core finding already states that banks are liquid and present in the hub towns, that four Partner States run national guarantee schemes and that tourism takes about 4% of Namibia’s scheme reach; the reframed 2.1 now supports it in the body of the report.",
    "**Length.** The section grows by about 300 words, roughly half a page. The main text is 27 pages in the current rendering; check that it stays within the page target after insertion, and if needed shorten the first paragraph by dropping the list of regional funders.",
    "**Source check.** BOSRIA is described as operating since 2026, in line with F4 and F5; F1-D4 (29 October) describes Botswana as lacking an operational guarantee scheme, a difference the synthesis previously recorded in its reconciliation table.",
  ]),
  SRC("Sources: F6-D9 updated draft (26 November 2026), Sections 2.1–2.5; F1-D4 Financial Landscape Analysis (29 October 2026), Executive Summary and Sections 2.2, 2.3 and 8; F4-D7 Financing Mechanisms Assessment (18 November 2026), Sections 2.5 and 11; F5-D8 Pre-Engagement Report."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT · F6-D9 Section 2.1: Proposed Reframing",
  cover: null,
  children,
  toc: false,
});
