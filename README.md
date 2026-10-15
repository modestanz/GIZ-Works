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

## KAZA MSME Investment Readiness Assessment

`KAZA_MSME_Investment_Readiness_Assessment.docx` assesses the investment readiness of R-NBT MSMEs in the KAZA priority value chains: business models, financial practices and informality; capacity gaps of MSMEs, BSOs and financial institutions; the enabling environment (including Doing Business 2020 country data, market access and the main BSOs in each Partner State); readiness for financial products; and recommended interventions.

To regenerate it, edit the content in `src/ira_*.js`, then run:

```bash
node src/build_ira.js raw.docx
python3 src/update_toc.py "$PWD/raw.docx" "$PWD/pass1.docx"
python3 src/update_toc.py "$PWD/pass1.docx" "$PWD/KAZA_MSME_Investment_Readiness_Assessment.docx"
```
