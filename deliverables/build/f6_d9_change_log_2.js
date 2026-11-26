// F6-D9 change log: author's draft of 26 Nov 2026 (20:20) -> updated draft with lender dialogue and strategic partnerships
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC } = K;

const fills = { Addition: "E2EFDA", Correction: "FCE4D6", Renumbering: "EDEDED", Consistency: "DDEBF7" };
const row = (cells) => ({ cells, fills: cells.map((c, i) => (i === 3 ? fills[c] : undefined)) });
const mapRows = [];
for (let n = 7; n <= 23; n++) mapRows.push([`Table ${n}`, `Table ${n - 1}`]);

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F6-D9 Consolidated Synthesis Report: Change Log", bold: true, size: 36, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Lender dialogue, strategic partnerships and corrections: updated draft against the author’s draft of 26 November 2026", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "KAZA R-NBT · Output 1.2 Access to Finance · November 2026", size: 18 })] }),

  H1("1. Versions compared"),
  P("This log records the changes between the author’s draft of 26 November 2026 (saved 20:20) and the updated draft. The two files were compared paragraph by paragraph, including every table. All other text is unchanged. Changes 13–17 were made afterwards, on the author’s reviewed draft (SEC_DRAFT, 26 November 2026), to align the platform cycle in the body with the executive summary and to refresh the contents page; the author’s own edit to Annex D in that draft (the Sustainable Finance Coalition row now names WWF-US and the KAZA Conservation Trust Fund) is retained."),
  ...table("Versions compared", ["Version", "Pages (total)", "Main text (excluding annexes)", "Annexes"], [2900, 1700, 3046, 2100], [
    ["Author’s draft, 26 November 2026", "35", "28 pages (pages 4–31)", "A–D"],
    ["Updated draft", "39", "29 pages (pages 5–33)", "A–E"],
    ["Author’s reviewed draft (SEC_DRAFT) with changes 13–17", "39", "29 pages (pages 5–33), unchanged", "A–E"],
  ]),
  P("Page counts are from a PDF rendering and may differ by a page in Word. The main text is within the 30-page limit in the terms of reference but one page above the earlier target of fewer than 28 pages (Section 5)."),

  H1("2. Summary"),
  P("The update adds what the draft was missing: **dialogue with lenders** on tourism business literacy, regenerative practice and how nature-positive practice can be read in credit terms (new subsection in Section 5.1), and **strategic partnerships** to sustain the RTFF and the other mechanisms after the pilot (new Section 7.6 and new Annex D listing possible collaborators, including funders active in KAZA). It draws on the GIZ–Sustainable Finance Coalition meeting (26 November 2026), the SADC-DFRC DFI consultation, the GreenLoop interview, the GIZ–ITC meeting and the KAZA–OKACOM synergy note. It also corrects four slips left by earlier edits and adds the new sources to the source codes and references."),

  H1("3. Change log"),
  P("Table 2 lists each change, its location in the updated draft and its type."),
  ...table("Changes in the updated draft", ["#", "Location", "Change", "Type"], [450, 1950, 5996, 1350], [
    row(["1", "Section 5.1, before “Design requirements”", "New subsection “Lender learning platform: tourism literacy, regenerative practice and credit”: why lenders need it (no harvest-like repayment point in tourism, specialised assets, NDB arrears of about 18% in the Okavango, EU anti-greenwashing rules, Botswana’s green taxonomy); three subjects (tourism business literacy; regenerative practice and extended ESG; reading nature-positive practice as collateral, lower risk and pricing); delivery (clinics for credit officers, verifiers, DFI peer exchange through SADC-DFRC, existing platforms) and outputs (verifiable indicators and a lender guidance note).", "Addition"]),
    row(["2", "Section 7.6 (new)", "New section “7.6 Strategic partnerships for sustainability”: four kinds of partnership (anchoring and long-term capital through the KAZA Conservation Trust Fund and the TUI Care Foundation; co-financing from funders active in KAZA; national channels; pipeline, verification and coordination) and the sequence for formalising them up to Gate 2.", "Addition"]),
    row(["3", "Annex D (new)", "New annex “Strategic Partners and Funders” with Table 23: eighteen possible partners in four groups (anchoring and long-term capital; funders active in KAZA; national finance institutions; pipeline, verification and markets), each with its role in KAZA today, possible role for the RTFF and other mechanisms, and status.", "Addition"]),
    row(["4", "Executive summary, Roadmap", "Closing sentence added: partnerships with the KAZA Conservation Trust Fund, funders active in KAZA and national institutions should anchor the RTFF and the other mechanisms after the pilot (Section 7.6; Annex D).", "Addition"]),
    row(["5", "Source codes note (after the acronyms)", "Codes added for sources already or newly cited: WS-VF and WS-MN (participant feedback findings, used in Section 2.6), SFC minutes, ITC minutes and OKACOM note.", "Addition"]),
    row(["6", "Annex E (References)", "Five references added: the two participant feedback findings (17 and 20 November 2026), the GIZ–ITC minutes (27 October 2026), the GIZ–SFC minutes (26 November 2026) and the KAZA–OKACOM synergy note (November 2026).", "Addition"]),
    row(["7", "Tables 6–22", "Section 2.7 and its reconciliation table were deleted in the author’s draft, leaving a gap in the numbering (Table 5 followed by Table 7). Former Tables 7–23 are renumbered 6–22, with captions and all in-text references updated (Table 3); references to tables in other reports are unchanged.", "Renumbering"]),
    row(["8", "Section 1.3", "Reference “(Section 2.7)” removed, as Section 2.7 no longer exists.", "Correction"]),
    row(["9", "Section 3.2", "“Figure 5 Partner States what each means” corrected to “Figure 5 states what each means” (a replacement of “states” by “Partner States” had changed the verb).", "Correction"]),
    row(["10", "Table 3 (source reports), MiD row", "“64 in the KAZA component, 40 in Okavango–Maun” corrected to “64 in Hwange–Victoria Falls–Livingstone, 40 in Okavango–Maun”: the 64 respondents are those of the first priority area.", "Correction"]),
    row(["11", "Section 7.7 and Annex E", "“7.6 Immediate next steps” becomes 7.7; “Annex D: References” becomes Annex E.", "Renumbering"]),
    row(["12", "Contents", "New entries for Section 7.6 and Annex D; renumbered entries for 7.7 and Annex E; page numbers updated. Word is set to update fields when the file opens.", "Renumbering"]),
    row(["13", "Section 5.1, Structure", "“A quarterly cycle timed to the season” becomes “A cycle every four months, timed to the season”. The cycle has three sessions a year (low season, pre-season deal day, peak season), so it runs every four months, as the executive summary already says.", "Consistency"]),
    row(["14", "Section 5.1, Table 13 (formats)", "Format “Quarterly deal days” renamed “Deal days every four months”.", "Consistency"]),
    row(["15", "Section 6.2, Table 17 (indicator A1, target)", "Target “Quarterly cycle in each active area” becomes “A cycle every four months in each active area”. Reporting frequencies (“quarterly” for event reports, portfolio and grant data) are unchanged: they are reporting periods, not the platform cycle.", "Consistency"]),
    row(["16", "Section 7.1, Season one", "“quarterly deal days” becomes “deal days every four months”.", "Consistency"]),
    row(["17", "Contents", "The contents page in the reviewed draft still listed the deleted Section 2.7 and older titles and page numbers. The 2.7 entry is removed, entries now match the headings in the body (for example “2.3 Where Each Partner State Can Start”) and page numbers are updated; Word is set to update fields when the file opens.", "Consistency"]),
  ]),

  H1("4. Table numbering"),
  P("Table 3 maps the table numbers in the author’s draft to the updated draft. Tables 1–5 are unchanged; Table 23 is the new table in Annex D."),
  ...table("Table numbers in the author’s draft and the updated draft", ["Author’s draft", "Updated draft"], [4873, 4873], [
    ["Tables 1–5", "Tables 1–5 (unchanged)"],
    ...mapRows,
    ["—", "Table 23 (new, Annex D)"],
  ], { plainFirst: true }),

  H1("5. Points to check"),
  ...B([
    "**Length.** The main text is now about 29 pages (28 in the author’s draft), within the 30-page limit but above the earlier target of fewer than 28. To return below 28: shorten the first paragraph of the lender learning platform to its first and last sentences, and move the co-financing paragraph of Section 7.6 into Annex D, which together save about half a page; or remove the executive summary’s November bullets, which repeat Section 2.6.",
    "**To confirm with partners.** TUI contribution figures are as transcribed in the SFC minutes; KfW’s current KAZA programmes were not part of the consultations; ITC’s grant framework, ceilings and currency were awaiting approval in October 2026; SADC-DFRC’s official position is awaited.",
    "**Wording carried from earlier edits.** Some passages now use “Partner State” where the meaning is a country in general (for example “three Partner States” in Section 4.2); these read correctly and were left as edited.",
  ]),
  SRC("Sources: F6-D9 author’s draft of 26 November 2026 and the updated draft; GIZ–SFC meeting minutes (26 November 2026); SADC-DFRC DFI consultation minutes (31 August 2026); GreenLoop interview minutes (11 September 2026); GIZ–ITC technical meeting minutes (27 October 2026); KAZA–OKACOM synergy note (November 2026)."),
];

buildDoc({ out: process.argv[2], header: "KAZA R-NBT · F6-D9 Consolidated Synthesis Report: Change Log", cover: null, children, toc: false });
