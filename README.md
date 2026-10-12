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

## Tourism MSME Financial Barriers and Opportunities Report

The follow-on report is a living Claude Doc: https://claude.ai/code/artifact/5f53edc0-bfca-42f6-8f54-3de8ce96dcc3

`KAZA_MSME_Financial_Barriers_and_Opportunities_Report.docx` (with a `.pdf` copy) is the Word version of that doc. It is A4, with a cover block, a contents page and a list of tables (both with page numbers), numbered table captions, page-numbered footers and Annex A in landscape. To rebuild it after the doc changes, export the doc to `.docx`, then run:

```bash
python3 src/build_barriers_word.py export.docx stage1.docx
python3 src/update_toc.py "$PWD/stage1.docx" "$PWD/pass1.docx"
python3 src/update_toc.py "$PWD/pass1.docx" "$PWD/KAZA_MSME_Financial_Barriers_and_Opportunities_Report.docx"
```

`update_toc.py` fills in the contents and list-of-tables page numbers and also writes the PDF. Run it twice so the page numbers settle. Table captions come from the doc's bold `Table N: title` lines, which the build script turns into Word caption fields.

It covers gender- and age-disaggregated barriers, alternative collateral, seasonal debt products, supply chain finance, matching contributions and the design of the grant facility.

`annex/KAZA_Stakeholder_Contact_Database.csv` holds Annex A, the stakeholder contact database: 69 institutions, each with its role, hub and suggested contact point. Named contacts are not included and should be added once confirmed.
