// F4-D7 Financing Mechanisms Assessment: change matrix (revised draft of 18 November 2026)
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC } = K;

const G = "E2EFDA", A = "FFF2CC";
const row = (cells) => ({ cells, fills: cells.map((c, i) => (i === 4 ? (c.startsWith("Addressed") ? G : A) : undefined)) });

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F4-D7 Financing Mechanisms Assessment: Change Matrix", bold: true, size: 36, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Revised draft of 18 November 2026, against the draft of 23 October 2026 and the review comments received", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "KAZA R-NBT · Output 1.2 Access to Finance · November 2026", size: 18 })] }),

  H1("1. Purpose"),
  P("This matrix records how the revised F4-D7 Financing Mechanisms Assessment (revised draft of 18 November 2026) responds to the comments received on the draft of 23 October 2026. It covers the four review points and the note on length in the GIZ review, the instruction on Macro Diagnostic page references, and the request in the GIZ catch-up of 18 November to present the RTFF as one option among several. For each comment it gives the change made, where to find it in the revised report and its status: **Addressed** or **Partly addressed**."),

  H1("2. Change matrix"),
  P("Table 1 sets out each comment and the response. Section, table and figure numbers refer to the revised report."),
  ...table("Comments and changes made", ["#", "Comment (summary)", "Change made", "Location in revised report", "Status"], [450, 2300, 4300, 1596, 1100], [
    { band: "GIZ review of F4-D7" },
    row(["1", "Frame the RTFF as a recommendation for a market gap rather than a given; build the case for it, show why existing mechanisms do not fill the gap and how the RTFF complements them.",
      "Section 2.5 retitled “The Market Gap and the Case for the KAZA RTFF”; its introduction now says the RTFF is tested, not assumed.\nNew subsection “The market gap”: five features (ticket, security, cash flow, readiness, inclusion and environment) with survey evidence and the international “missing middle” literature.\nNew subsection on why existing mechanisms do not fill the gap: Table 7 tests eight provider types; Figure 2 maps the gap by readiness tier and ticket size.\nNew subsections on how the RTFF is designed for the gap (Table 8) and how it complements existing mechanisms (Table 9).\n“Implications” replaced by a Recommendation: pilot the RTFF for the defined gap, with four design adjustments and a re-test after two seasons.\nExecutive summary bullet rewritten; Table 1 row now reads “Recommended pilot instrument”.",
      "Executive summary; Table 1; Section 2.5; Tables 7–9; Figure 2", "Addressed"]),
    row(["2", "Barrier coverage matrix (former Table 21) covers five barriers but not women, youth or environmental protection; add columns for gender and youth inclusion, environmental or regenerative outcomes and the market gap each mechanism addresses.",
      "Section 3.5 retitled “Barrier and Cross-Cutting Coverage”, with a new introduction.\nFormer Table 21 replaced by Table 24 (landscape page) with three new columns (gender and youth inclusion; environment and regenerative outcomes; market gap addressed) and four new rows; the RTFF row is highlighted.\nNew paragraph “Reading the matrix” linking the ratings to the case for the RTFF.\nSections 1.1, 1.4 and 2.2 updated to refer to the cross-cutting requirements.",
      "Sections 1.1, 1.4, 2.2 and 3.5; Table 24", "Addressed"]),
    row(["3", "Impact investment, green bonds, PPPs and PES or conservation trust funds are under-assessed.",
      "New subsection in Section 3.4, “Capital-market and conservation-finance instruments”, with a sourced assessment of each:\nImpact investment: the ACCT Fund, ticket sizes, role for anchors, Tier 3 enterprises and later RTFF capital.\nGreen and sustainability bonds: issuances in Namibia, Zambia and Botswana, none found in Zimbabwe or Angola; route through partner banks.\nPPPs and concession joint ventures: ZimParks–IFAW in Hwange, Zambia’s PPP Act 2023, Zimbabwe’s 2026 PPP guidelines, community joint ventures in Namibia and Botswana.\nPES and conservation trust funds: CCFN and Wildlife Credits, Namibia for Life, the planned KAZA Conservation Trust Fund, Green Growth for KAZA, the CORB Fund, and a caution from Kariba REDD+.\nNew Table 23; four rows added to Tables 24, 25 and 57; executive summary paragraph on their supporting roles; 22 new references.",
      "Executive summary; Section 3.4; Tables 23–25 and 57; References", "Addressed"]),
    row(["4", "Use a chart or visual for the readiness tiers and similar concepts rather than describing them in words only.",
      "Four figures added, each with an introductory sentence and a source note:\nFigure 1: readiness tier ladder, with each tier’s profile, typical ticket and the finance it can carry.\nFigure 2: market gap map, where the RTFF sits by readiness tier and ticket size.\nFigure 3: layered risk structure, the order in which grant, guarantee and lender absorb losses.\nFigure 4: graduation pathway through the eight financing packages.",
      "Sections 2.3, 2.5 and 3.4; Chapter 9", "Addressed"]),
    row(["5", "The report is lengthy, partly because country cases differ; prioritise what goes into the summary.",
      "The report was not shortened: the changes above added content (from 61 to 70 pages and from 54 to 57 tables). Prioritisation is handled by the executive summary, which leads with the most feasible mechanisms, and by the consolidated synthesis, which condenses the assessment into one section and one table (F6-D9 Section 2.5 and Table 5).",
      "Executive summary; F6-D9 Section 2.5", "Partly addressed: consider a shorter main text with country detail moved to annexes"]),
    { band: "GIZ instruction on Macro Diagnostic page references" },
    row(["6", "Remove inline Macro Diagnostic page numbers from the narrative.",
      "All 55 inline MD page numbers in paragraphs and lists, including the executive summary, now read “(MD)”; mixed citations keep their other sources, for example “(MD; FLA)”. Tables and figures keep MD page numbers, including in source notes. Section 1.3 explains the convention. No content changed: the diagnostic cited is the same October 2026 edition.",
      "Throughout; Section 1.3", "Addressed"]),
    { band: "GIZ catch-up, 18 November 2026" },
    row(["7", "Present the TUI Care Foundation facility (RTFF) as one solution among several options, not the only one.",
      "The RTFF is positioned as the recommended instrument for one defined segment and “not as the program’s general MSME finance solution”. Section 2.5 lists what it does not cover (pre-finance and community enterprises, small infrastructure, tickets above EUR 30,000, tenors beyond 24 months, enterprises outside its corridor) and assigns other mechanisms to those needs; Table 9 sets out how it complements them. The executive summary lists order-backed supply chain finance and guarantee windows before the RTFF.",
      "Executive summary; Section 2.5; Table 9", "Addressed"]),
  ]),

  H1("3. Table renumbering"),
  P("The report grew from 54 to 57 tables. Table 2 maps the old numbers to the new; every in-text table reference was updated, and references to the Macro Diagnostic’s own tables (MD Table N) are unchanged."),
  ...table("Table numbers in the draft of 23 October and the revised draft", ["Draft of 23 October", "Revised draft of 18 November"], [4873, 4873], [
    ["Tables 1–6", "Tables 1–6 (unchanged)"],
    ["Table 7", "Table 8"],
    ["Tables 8–20", "Tables 10–22"],
    ["Table 21", "Table 24 (replaced)"],
    ["Tables 22–54", "Tables 25–57"],
    ["—", "Tables 7, 9 and 23 (new)"],
  ], { plainFirst: true }),

  H1("4. Other changes"),
  ...B([
    "**Contents page:** the two retitled headings (Sections 2.5 and 3.5) and the page numbers are updated, and the file asks Word to update fields when it opens.",
    "**Cross-references:** all in-text references to tables, figures and sections were checked after renumbering.",
    "**Carried into the synthesis:** the revised assessment is summarised in the new F6-D9 Section 2.5, “Financing mechanisms identified”, and in the F6-D10 validation slides (slides 8 and 9).",
  ]),
  SRC("Sources: F4-D7 Financing Mechanisms Assessment, draft of 23 October 2026 and revised draft of 18 November 2026; F4-D7 change log (19 November 2026); GIZ review comments on F2-D5 to F4-D7; GIZ catch-up notes, 18 November 2026."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT · F4-D7 Financing Mechanisms Assessment: Change Matrix",
  cover: null,
  children,
  toc: false,
});
