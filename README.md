# GIZ Works

## KAZA Financial Landscape Analysis

`KAZA_Financial_Landscape_Analysis.docx` is a financial landscape analysis of access to finance for regenerative nature-based tourism (R-NBT) MSMEs in the five KAZA TFCA Partner States (Angola, Botswana, Namibia, Zambia, Zimbabwe).

To regenerate it, edit the content in `src/content_*.js`, then run:

```bash
node src/build.js raw.docx
python3 src/update_toc.py "$PWD/raw.docx" "$PWD/pass1.docx"
python3 src/update_toc.py "$PWD/pass1.docx" "$PWD/KAZA_Financial_Landscape_Analysis.docx"
```

`build.js` uses the `docx` npm package. `update_toc.py` uses LibreOffice to fill in the table of contents. Run it twice so the page numbers settle.

## V5 revision (29 October 2026)

`F1-D4_Financial_Landscape_Analysis_V5_DRAFT_REPORT_29OCT2026.docx` is the V4 draft (10 October 2026) revised against the Revision Instructions V3 (29 October 2026) and the BUILD IN notes. The V4 Word file is edited in place, so its formatting and edits are kept.

`v5/content.py` holds the new and revised text; `v5/build_v5.py` applies it to V4; `v5/toc_pages.py` computes TOC page numbers with LibreOffice. To rebuild:

```bash
python3 v5/build_v5.py V4.docx pass1.docx
python3 v5/toc_pages.py pass1.docx pass1.docx.info.json pages.json
python3 v5/build_v5.py V4.docx V5.docx pages.json
```

Run the commands from inside `v5/` or set `PYTHONPATH=v5` so that `content.py` is found.

## Output 1.2 Consolidated Synthesis Report (F6-D9, November 2026)

`F6-D9_Consolidated_Synthesis_Report_Output_1.2_DRAFT_Nov2026.docx` (with a PDF copy) consolidates F1-D4 to F5-D8 into a strategic framework for Output 1.2, organized by priority value chain: recommendations for Activities 1.2.1 (dialogue platforms), 1.2.2 (grant facility) and 1.2.3 (financing mechanisms), a contribution to the M&E framework (indicators and baseline data) and an implementation roadmap. Version 2 incorporates the GM3-D10 micro-diagnostics (Hwange–Victoria Falls–Livingstone; Okavango Delta–Maun) and the F5-D8 finance segment reports of the November 2026 Victoria Falls and Maun roundtables. The report follows the F4-D7 house style (Times New Roman 11pt, green table headers, teal captions, partner-logo cover; `synthesis/figures/brand/`); the body (executive summary to Chapter 7) is 27 pages and flows without forced page breaks; every table is introduced by a paragraph that cites it (`synthesis/build.js` refuses to build otherwise), and nine figures replace tables where a graphic reads better; annexes follow.

Content lives in `synthesis/content_*.js`; figures are HTML in `synthesis/figures/` rendered to PNG with `node synthesis/figures/shoot.js`. To rebuild:

```bash
node synthesis/build.js raw.docx
python3 src/update_toc.py "$PWD/raw.docx" "$PWD/pass1.docx"
python3 src/update_toc.py "$PWD/pass1.docx" "$PWD/F6-D9.docx"
```

`update_toc.py` may print a `DisposedException` after saving; the output files are still written.

## F6-D10, F6-D11 and F6-D12 (November 2026)

Files in `deliverables/` (PDF copies alongside each):

- **F6-D10** high-level validation deck (9 graphical slides, narrative in the speaker notes) and the plenary facilitation guide with validation templates (validation log, participant sheet, revision log, attendance register).
- **F6-D11** Oversight Committee deck (22 slides), integrating the Macro Diagnostic, Micro Diagnostics and Roundtables with Output 1.2, and the summary pack with seven decision sheets and a draft decision record.
- **F6-D12** readiness pack (readiness by component and country, partnerships, document register, template outlines, open decisions, roles, first 90 days) and handover meeting documentation (agenda, participants, checklist and sign-off, minutes template, action log).

Build: `node deliverables/build/<script>.js out.(pptx|docx)`. Decks use pptxgenjs (`npm install -g pptxgenjs`) with the balanced earth palette and the F6-D9 figure PNGs in `synthesis/figures/balanced_palette/`; Word documents use the F6-D9 house style via `deliverables/build/doc_lib.js`, then `src/update_toc.py` (twice) to fill the contents list.
