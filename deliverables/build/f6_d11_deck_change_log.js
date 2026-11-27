// F6-D11 Oversight Committee deck: change log (earlier 22-slide deck -> rebuilt 16-slide deck, with review revisions)
const { Paragraph, TextRun } = require("docx");
const { makeKit, buildDoc } = require("./doc_lib");
const K = makeKit();
const { P, H1, B, table, SRC } = K;

const fills = { New: "E2EFDA", Revised: "DDEBF7", Merged: "FFF2CC", Removed: "FCE4D6" };
const row = (cells, ti) => ({ cells, fills: cells.map((c, i) => (i === ti ? fills[c] : undefined)) });

const children = [
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "F6-D11 Oversight Committee Deck: Change Log", bold: true, size: 36, color: "1F4E5F" })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Rebuilt 16-slide deck against the earlier 22-slide version, with the revisions made during review", italics: true, size: 24 })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "KAZA R-NBT · Output 1.2 Access to Finance · 27 November 2026", size: 18 })] }),

  H1("1. Versions compared"),
  P("This log records how the F6-D11 deck for the Oversight Committee changed: first when it was rebuilt against the F6-D9 synthesis of 26 November 2026, and then through the revisions agreed during review. It covers the slide deck only; changes to the summary pack and other documents are listed in Section 6."),
  ...table("Versions compared", ["", "Earlier version", "Current version"], [2300, 3723, 3723], [
    ["Slides", "22, including four section dividers and a closing slide", "16, no dividers; the decision record closes the deck"],
    ["Decisions", "Seven", "Five"],
    ["Style", "Earth-tone palette; table-heavy content slides", "Blue-teal palette with terracotta accents, as F6-D10; graphical slides, narrative in speaker notes"],
    ["Built against", "F6-D9 draft for validation (November 2026)", "F6-D9 draft of 26 November 2026, as revised"],
    ["Designed for", "Presentation followed by decisions", "An in-person decision sitting: procedure, decision cards, live decision record"],
  ]),

  H1("2. Summary"),
  P("The deck was rebuilt to bring the Output 1.2 recommendations to the Committee in a form that supports decisions in the room. It now opens with the decisions and how each will be taken, presents the evidence and the proposal in ten slides, and closes with decision cards, the first 100 days and a decision record completed live. Each evidence slide is tagged with the decisions it informs. During review, the decisions were reduced from seven to five, because the RTFF corridor in Botswana has already been decided and the project extension is a decision for GIZ and the funders; the storyline was reframed around the Financial Landscape Analysis workstream; the measurement slide was reworked to show how results trigger finance decisions; and several titles were changed."),

  H1("3. Slide map"),
  P("Table 2 maps each current slide to the earlier slide or slides it replaces, and Table 3 lists the earlier slides that were removed."),
  ...table("Current slides and their earlier counterparts", ["#", "Current slide", "Earlier", "Change", "Type"], [450, 2800, 900, 4596, 1000], [
    row(["1", "From evidence to decisions: financing R-NBT MSMEs in KAZA", "1", "Light, centred cover; title and subtitle revised; marked draft for decision", "Revised"], 4),
    row(["2", "Five decisions today, in about 70 minutes", "2", "Seven decisions reduced to five; agenda with timings and slide ranges; items not for decision today noted", "Revised"], 4),
    row(["3", "How each decision will be taken", "—", "Decision procedure (present, clarify, views, decide, record); agree, amend or defer; ground rules", "New"], 4),
    row(["4", "The Financial Landscape Analysis, informed by the diagnostics", "3", "Workstream (F1-D4 to F5-D8) at the centre, Macro and Micro Diagnostics as inputs, F6-D9 and F6-D11 as outputs; four questions tied to decisions", "Revised"], 4),
    row(["5", "Finance exists, but not on terms these enterprises can use", "5, 6, 8", "Macro Diagnostic, Micro Diagnostics and the finance finding in one slide; chart comparing the two priority areas", "Merged"], 4),
    row(["6", "Participants put coaching and buyer links before money", "7", "November questionnaire findings added (17 of 19, 12 of 19, preferred rates, written contracts, Maun access)", "Revised"], 4),
    row(["7", "Where each Partner State can start", "13 (part)", "Readiness chart and area cards; Chobe–Maun corridor shown as decided", "New"], 4),
    row(["8", "One route to finance: connect, prepare, finance", "10, 11", "Framework and activity cards in one slide; platforms every four months; lender learning platform", "Merged"], 4),
    row(["9", "Risk-sharing is what moves lenders to change terms", "—", "Financing mechanisms identified (F4-D7) and first-loss figures for term sheets", "New"], 4),
    row(["10", "Two seasons of piloting, three decision points", "15", "Native roadmap with gates; extension shown as sought, not as a decision", "Revised"], 4),
    row(["11", "What we measure, and what it decides", "16, 17", "Measures linked to the finance decisions they trigger; outputs, outcomes and impact tracked; risks linked to decisions", "Merged"], 4),
    row(["12", "Partners to sustain the RTFF beyond the pilot", "—", "Strategic partners in four groups and the sequence to Q4 2028 (F6-D9 Section 7.6, Annex D)", "New"], 4),
    row(["13", "Decisions 1–3: where, for whom and with what grants", "19", "Decision cards: recommendation, alternatives, why now, agree/amend/defer; card for what is already decided", "Revised"], 4),
    row(["14", "Decisions 4–5: risk-sharing and partners", "20", "Decision cards; cards for items outside this assignment and for noting", "Revised"], 4),
    row(["15", "After the decisions: the first 100 days", "21", "From 90 to 100 days, aligned with the F6-D12 readiness pack; this sitting marked", "Revised"], 4),
    row(["16", "Decision record: read back before we close", "—", "Record completed live by the rapporteur and read back by the Chair", "New"], 4),
  ]),
  ...table("Earlier slides removed", ["Earlier slide", "Reason"], [4000, 5746], [
    ["4, 9, 14, 18: section dividers (What we know; What we propose; How it will be delivered; Decisions)", "Dividers removed to keep the deck to 16 slides; the agenda on slide 2 gives the structure"],
    ["12: By priority value chain (table)", "Detail kept in F6-D9 (Table 1 and Chapter 4) and the summary pack; too dense for the sitting"],
    ["13: First pilots and partners by area (table)", "Areas moved to slide 7; partners for term-sheet talks in the Decision 5 card and notes"],
    ["22: Thank you", "The decision record (slide 16) closes the deck"],
  ], { plainFirst: true }),

  H1("4. Revisions during review"),
  P("Table 4 lists the changes made to the rebuilt deck during review, in the order they were made. Each was reviewed as a stand-alone slide where the layout changed."),
  ...table("Revisions during review", ["#", "Slides", "Change", "Reason"], [450, 1300, 5196, 2800], [
    ["1", "2, 7, 13, 14, 16", "RTFF route in Botswana removed from the decisions; the Chobe–Maun corridor shown as already decided", "The corridor has already been decided"],
    ["2", "2, 10, 11, 14, 15, 16", "Project extension to mid-2029 removed from the decisions; shown as noted, for GIZ and the funders", "Not a decision for this assignment"],
    ["3", "4", "Storyline reworked around the Financial Landscape Analysis workstream, informed by the Macro and Micro Diagnostics", "To reflect the workstream behind the recommendations"],
    ["4", "3", "Title “How the Committee will decide, decision by decision” changed to “How each decision will be taken”", "Shorter, plainly about procedure"],
    ["5", "8", "Title “One pathway, three activities” changed to “One route to finance: connect, prepare, finance”", "Leads with the idea and names the activities"],
    ["6", "11", "Currency and exchange control split from low-season default and marked noted; tag relabelled “Measurement informs decision 2”", "Currency risk is managed through loan terms, not a Committee decision; the tag referred to the measurement panel"],
    ["7", "12", "Title “Who sustains it after the pilot: strategic partners” changed to “Partners to sustain the RTFF beyond the pilot”", "Plainer"],
    ["8", "11", "Left half reworked to show what is measured and the finance decision it triggers (Gate 1, RTFF rate step-down, grant tranches, first-loss taper, Gate 2); tag “Measurement informs decisions 2, 3, 4, 5”", "To show how measurement drives financing decisions"],
    ["9", "11", "Measurement-system line reworded: 18 programme indicators (GM1-D5), plus 23 for Output 1.2 and 32 for the RTFF, all broken down by sex, age, disability, country, value chain and readiness tier", "Clearer"],
    ["10", "11", "“Also tracked” line added (outputs, outcomes and impact, including the share obtaining finance and days for anchors to pay); title “What we measure, and what it decides”", "Restores finance measures dropped in revision 8"],
    ["11", "15", "“Diagnostic, MOU template and baseline commissioned” changed to “GIZ commissions the readiness diagnostic, supply MOU template, intake baseline and grant manual”", "Clearer; matches the F6-D12 action"],
    ["12", "1", "Cover title “From diagnosis to decisions” changed to “From evidence to decisions: financing R-NBT MSMEs in KAZA”; subtitle “Summary of Output 1.2 recommendations, presented with the Macro and Micro Diagnostics and the Roundtables, for decision by the Oversight Committee”", "Matches the evidence framing of slide 4 and the terms of reference wording"],
  ]),

  H1("5. Decisions: earlier and current numbering"),
  ...table("Decisions in the earlier and current deck", ["Earlier", "Decision", "Current"], [1100, 6246, 2400], [
    ["1", "Intervention areas for Output 1.2", "1"],
    ["2", "One youth band (18–35) and one women-led test", "2"],
    ["3", "RTFF route in Botswana", "Removed: already decided"],
    ["4", "Grant-facility envelope and lot split", "3"],
    ["5", "First loss and guarantee fees under Activity 1.2.3", "4"],
    ["6", "Project extension to mid-2029", "Removed: for GIZ and the funders"],
    ["7", "Term-sheet talks and decision-gate criteria", "5"],
  ], { plainFirst: true }),

  H1("6. Related documents and points to check"),
  P("All changes have now been carried into the related documents."),
  ...B([
    "**Already updated:** the F6-D11 summary pack (five decisions, agenda, storyline, title of the framework, risk table, measurement link to Decision 2); F6-D10 slide 15 and the facilitation guide (five decisions, framework title); the F6-D12 readiness pack and handover documentation (five decisions, corridor, extension, risk table); and F6-D9 (corridor and extension, change log rows 19–20).",
    "**Carried across once the decks were final (27 November 2026):** the F6-D11 summary pack now has the deck’s cover title, a one-page executive summary, the public institutions table, the measurement-to-decision links and tracked results (Table 7), budget implications and consultation rows on each decision sheet, and a list of acronyms; F6-D10 slide 14 is retitled “Roles and partners to sustain the RTFF beyond the pilot”; and the F6-D10 guide item C1 and validation sheet use “Measurement drives finance”.",
    "**F6-D10 slide 12** carries the measurement slide titled “Measurement drives finance”, without the “Also tracked” line, as agreed; the version with that line is available as a stand-alone file.",
    "**Slide 15 footnote** still reads “Owners are proposals for GIZ to confirm”, although the slide shows no owners (they are in F6-D12).",
    "**Chobe–Maun corridor:** the deck states that it has been decided, but not by whom or when.",
  ]),
  SRC("Sources: F6-D11 deck, earlier version (November 2026) and current version (27 November 2026); F6-D9 Consolidated Synthesis Report, draft of 26 November 2026, and its change log."),
];

buildDoc({ out: process.argv[2], header: "KAZA R-NBT · F6-D11 Oversight Committee Deck: Change Log", cover: null, children, toc: false });
