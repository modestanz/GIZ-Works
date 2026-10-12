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

`KAZA_MSME_Financial_Barriers_and_Opportunities_Report.docx` is a Word export of that doc (A4, with Annex A in landscape). If the doc changes, export it again.

It covers gender- and age-disaggregated barriers, alternative collateral, seasonal debt products, supply chain finance, matching contributions and the design of the grant facility.

`annex/KAZA_Stakeholder_Contact_Database.csv` holds Annex A, the stakeholder contact database: 69 institutions, each with its role, hub and suggested contact point. Named contacts are not included and should be added once confirmed.
