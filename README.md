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
