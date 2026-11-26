// F6-D9 Consolidated Synthesis Report: change log (draft of 23 November 2026 -> updated draft of 26 November 2026)
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, table, SRC } = K;

const fills = { Addition: "E2EFDA", Renumbering: "EDEDED" };
const row = (cells) => ({ cells, fills: cells.map((c, i) => (i === 3 ? fills[c] : undefined)) });

const oldNew = [
  ["Table 5", "Table 6", "Reconciliation of differences across the source reports (Section 2.7)"],
  ["Table 6", "Table 7", "Fresh produce, poultry, eggs and fish: recommendations by activity"],
  ["Table 7", "Table 8", "Guiding, activities and cultural experiences: recommendations by activity"],
  ["Table 8", "Table 9", "Transport, transfers and logistics: recommendations by activity"],
  ["Table 9", "Table 10", "Crafts, décor and cultural products: recommendations by activity"],
  ["Table 10", "Table 11", "Laundry, maintenance and solar: recommendations by activity"],
  ["Table 11", "Table 12", "Conservation and coexistence services: recommendations by activity"],
  ["Table 12", "Table 13", "Second-wave value chains: recommendations by activity"],
  ["Table 13", "Table 14", "Activity 1.2.1 formats mapped to the Output 1.2 key activities"],
  ["Table 14", "Table 15", "Recommended design of Lot 1 and Lot 2"],
  ["Table 15", "Table 16", "Mechanism types named in Output 1.2: assessment and recommendation"],
  ["Table 16", "Table 17", "Recommended first pilots and partners by intervention area"],
  ["Table 17", "Table 18", "Proposed Output 1.2 indicators, reference values and sources"],
  ["Table 18", "Table 19", "Baselines to collect before cohort 1"],
  ["Table 19", "Table 20", "Main implementation risks"],
  ["Table 20", "Table 21", "Financial institutions and guarantors shortlisted for pilots (Annex A)"],
  ["Table 21", "Table 22", "Conveners, BSOs and anchors by intervention area (Annex B)"],
  ["Table 22", "Table 23", "Proposed intake baseline fields (Annex C)"],
];

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F6-D9 Consolidated Synthesis Report: Change Log", bold: true, size: 36, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Updated draft of 26 November 2026, against the draft of 23 November 2026", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "KAZA R-NBT · Output 1.2 Access to Finance · November 2026", size: 18 })] }),

  H1("1. Versions compared"),
  P("This log records the changes between the two versions of the F6-D9 Consolidated Synthesis Report listed in Table 1. The two files were compared paragraph by paragraph, including every table. Neither file contains tracked changes or comments."),
  ...table("Versions compared", ["Version", "Last saved", "Pages (total)", "Main text (excluding annexes)"], [2900, 2300, 1900, 2646], [
    ["Previous draft", "23 November 2026 (revision 5)", "33", "26 pages (pages 4–29)"],
    ["Updated draft", "26 November 2026 (revision 6)", "34", "27 pages (pages 4–30)"],
  ]),
  P("Page counts are from a PDF rendering of each file and may differ by a page in Word. The main text remains within the 30-page limit, excluding annexes, set in the terms of reference."),

  H1("2. Summary"),
  P("The update integrates the findings and recommendations of the revised F4-D7 Financing Mechanisms Assessment (18 November 2026), which the previous draft did not summarise in its own section. It adds a new **Section 2.5, Financing mechanisms identified**, with a new table, and a short summary in the executive summary. The later sections of Chapter 2 and Tables 5–22 are renumbered, and every cross-reference is updated. **No other text was changed:** apart from the additions and renumbering in Table 2, the comparison found no differences."),

  H1("3. Change log"),
  P("Table 2 lists each change, its location in the updated draft and its type."),
  ...table("Changes in the updated draft", ["#", "Location", "Change", "Type"], [450, 1900, 6046, 1350], [
    row(["1", "Executive summary, after “Core finding”", "New subsection “Financing mechanisms identified” (one paragraph): no single instrument fills the gap; order-backed supply chain finance, guarantee windows with a first-loss layer and seasonal loans are the most feasible mechanisms; the RTFF is the recommended collateral-free loan pilot; four blended models address collateral for women- and youth-led enterprises; impact investment, bonds and conservation funds play supporting roles (Section 2.5).", "Addition"]),
    row(["2", "Section 2.5 (new), heading and introduction", "New section “2.5 Financing mechanisms identified” after Section 2.4. The introduction explains that F4 assessed 18 types of mechanism in four families against five criteria, the five barriers and the two cross-cutting requirements, and that its central finding is a layered stack tied to buyers: grants, coaching and community finance at the base; order-backed, asset and guarantee-backed seasonal finance in the middle, with the RTFF as the first collateral-free loan product; term, revenue-linked and conservation-linked finance at the top.", "Addition"]),
    row(["3", "Section 2.5, new Table 5", "New table “Financing mechanisms identified in F4 and their use in Output 1.2”: eleven mechanism types in five groups (grant-based, debt-based, risk-sharing, alternative, capital-market and conservation instruments), each with its F4 feasibility rating, the market gap it addresses and how the synthesis uses it.", "Addition"]),
    row(["4", "Section 2.5, five paragraphs", "Five paragraphs with bold lead-ins:\nMost feasible: supply chain finance, guarantee windows with first loss in existing national schemes, and seasonal loan design.\nBlended models for women- and youth-led MSMEs: Models A to D; A to C for the first cohort, D designed now and piloted in PA2.\nSelection guidance: tier, buyer and available security decide the instrument and model.\nNational first, regional where it strengthens: national lending, guarantee and recovery; regional standards, pooled first loss and TA, and basin-level conservation finance.\nLot 2 grantees and sustainability: a screened subset can borrow; each mechanism has an institutional home after the pilot.", "Addition"]),
    row(["5", "Chapter 2 headings", "“2.5 What the November working sessions add” becomes 2.6; “2.6 Where the reports differ and how this synthesis resolves them” becomes 2.7.", "Renumbering"]),
    row(["6", "Section 1.3", "Cross-reference “(Section 2.6)” becomes “(Section 2.7)”.", "Renumbering"]),
    row(["7", "Tables 6–23", "Former Tables 5–22 renumbered 6–23 (Table 3); captions and all in-text references updated. References to tables in other reports are unchanged (F4 Table 8, F4 Tables 49–50, F4 Table 51, F3 Table 19, F3 Annex B, Table 21).", "Renumbering"]),
    row(["8", "Contents", "New entry for Section 2.5; entries for 2.6 and 2.7 renumbered; page numbers updated.", "Renumbering"]),
  ]),

  H1("4. Table numbering"),
  P("Table 3 maps each table number in the previous draft to its number in the updated draft. Tables 1–4 and all figures are unchanged; Table 5 is the new table in Section 2.5."),
  ...table("Table numbers in the previous and updated drafts", ["Previous draft", "Updated draft", "Title"], [1600, 1600, 6546], [
    ["Tables 1–4", "Tables 1–4", "Unchanged"],
    ["—", "Table 5 (new)", "Financing mechanisms identified in F4 and their use in Output 1.2"],
    ...oldNew,
  ], { plainFirst: true }),
  SRC("Sources: F6-D9 Consolidated Synthesis Report, draft of 23 November 2026 and updated draft of 26 November 2026; F4-D7 Financing Mechanisms Assessment, revised draft of 18 November 2026."),
];

buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT · F6-D9 Consolidated Synthesis Report: Change Log",
  cover: null,
  children,
  toc: false,
});
