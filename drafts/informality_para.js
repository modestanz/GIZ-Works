const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, AlignmentType, HeadingLevel } = require("docx");
const F = "Times New Roman";
const run = (t, o = {}) => new TextRun({ text: t, font: F, size: o.size || 24, bold: o.b, italics: o.i, highlight: o.hl });
const para = (runs, o = {}) => new Paragraph({ alignment: o.jc || AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 160, line: 276 }, indent: o.indent, children: runs });
const border = { style: BorderStyle.SINGLE, size: 4, color: "999999" };
const cell = (t, w, head) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: { top: border, bottom: border, left: border, right: border },
  shading: head ? { fill: "E7E6E6", type: ShadingType.CLEAR, color: "auto" } : undefined, margins: { top: 60, bottom: 60, left: 100, right: 100 },
  children: [new Paragraph({ children: [run(t, { size: 18, b: head })] })] });
const W = [1300, 2200, 2700, 2826];
const rows = [
  ["Country", "Original wording", "Revised wording", "Source and status"],
  ["Angola", "About 60% of the economy informal", "About four in five employed people work informally", "INE, Inquérito ao Emprego em Angola (2026). The 60% was a quote from an association president, not a statistic."],
  ["Botswana", "84% of MSMEs informal", "Only about one in five MSMEs fully registered", "FinScope MSME Survey Botswana 2024 (Ministry of Finance / FinMark Trust). The 19% registered figure is to be confirmed in the pocket guide; 84% was not found."],
  ["Namibia", "74% of employment in the Zambezi region informal", "57.7% of employment informal nationally; 68.6% in accommodation and food services", "Bank of Namibia, National Diagnostic of Informality (2025). The Zambezi figure could not be traced and is dropped until confirmed."],
  ["Zambia", "96% of enterprises informal or unregistered", "95.6% of MSMEs operate in the informal sector", "ZamStats, 2022 MSME Finance Survey. The source says 'informal sector', not 'unregistered with PACRA'."],
  ["Zimbabwe", "76% of establishments informal", "76.1% of establishments informal (unchanged)", "ZIMSTAT, Economic Census 2024–25. Confirmed; informal means not registered with the Registrar of Companies, Registrar of Cooperatives, ZIMRA or NSSA."],
];
const refs = [
  "Bank of Namibia (2025) National Diagnostic of Informality in Namibia. Windhoek: Bank of Namibia, Ministry of Industries, Mines and Energy, Ministry of Justice and Labour Relations and United Nations Namibia, November.",
  "CEDA (n.d.) Loan application checklist: services. Gaborone: Citizen Entrepreneurial Development Agency. Available at: https://www.ceda.co.bw/sites/default/files/CEDA_SERVICES_CHECKLIST.pdf (Accessed: 29 October 2026).",
  "FinMark Trust (2024) FinScope Micro, Small and Medium Enterprises (MSME) Survey Botswana 2024: Pocket Guide. Johannesburg: FinMark Trust, for the Ministry of Finance, Botswana. Available at: https://finmark.org.za/Publications/2024_Pocket_Guide_FinScope_Botswana_MSME.pdf (Accessed: 29 October 2026).",
  "INE (2026) Anuário do Inquérito sobre o Emprego em Angola (IEA). Luanda: Instituto Nacional de Estatística, April. Available at: https://www.ine.gov.ao/publicacoes/detalhes/NTM0NjU= (Accessed: 29 October 2026).",
  "NASRIA (2025) Annual Report 2024–2025. Windhoek: Namibia Special Risks Insurance Association. Available at: https://www.nasria.com.na/storage/2026/06/Nasria-Annual-report-2024-2025.pdf (Accessed: 29 October 2026).",
  "ZamStats (2025) Zambia – 2022 Micro, Small and Medium Enterprise Finance Survey. Lusaka: Zambia Statistics Agency. Available at: https://nada.zamstats.gov.zm/index.php/catalog/31 (Accessed: 29 October 2026).",
  "ZIMSTAT (2025) Report of the 2024–2025 Economic Census (preliminary). Harare: Zimbabwe National Statistics Agency, July. Available at: https://www.zimstat.co.zw/wp-content/uploads/production/EconomicCensus/EC2025_PRESENTATION.pdf (Accessed: 29 October 2026).",
];
const H = (t, s = 28) => new Paragraph({ spacing: { before: 240, after: 160 }, children: [run(t, { b: true, size: s })] });
const doc = new Document({
  styles: { default: { document: { run: { font: F, size: 24 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1080, bottom: 1440, left: 1080 } } },
    children: [
      para([run("Draft revision for section 1.4 of the F1-D4 Financial Landscape Analysis (V5): informality paragraph with official sources. For review; not yet applied to the report.", { i: true, size: 20 })]),
      H("1.4 Who Counts as an MSME: Size, Informality and the Formalisation Pathway", 24),
      para([run("Most micro-enterprises are informal. ", { b: true }),
        run("In all five states the majority of micro-enterprises are not registered with the company registrar (CIPA in Botswana, BIPA in Namibia, PACRA in Zambia, the Companies Registry in Zimbabwe and the Guichê Único da Empresa (GUE) in Angola) or with the tax authority. Informality is the norm rather than the exception: about four in five employed Angolans work informally (INE, 2026); "),
        run("only about one in five Botswana MSMEs is fully registered", { hl: "yellow" }),
        run(" (FinMark Trust, 2024); 57.7% of Namibian employment is informal, rising to 68.6% in accommodation and food services (Bank of Namibia, 2025); 95.6% of Zambian MSMEs operate in the informal sector (ZamStats, 2025); and 76.1% of Zimbabwe’s establishments are informal, with only 16.2% registered with the Registrar of Companies (ZIMSTAT, 2025). Informality directly limits access to finance, because almost every loan, guarantee and public grant starts from proof of registration, tax clearance and a bank account in the business’s name: CEDA in Botswana, for example, requires a certificate of incorporation and company documents with every loan application (CEDA, n.d.), and Namibia’s Credit Guarantee Scheme requires proof of registration and a bankable business plan (NASRIA, 2025).")]),
      para([run("Highlighted text: confirm the 19% fully registered figure in the FinScope Botswana 2024 pocket guide before use.", { i: true, size: 20 })]),
      H("What changed and why"),
      new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: W, rows: rows.map((r, i) => new TableRow({ tableHeader: i === 0, children: r.map((c, j) => cell(c, W[j], i === 0)) })) }),
      H("References"),
      ...refs.map(r => new Paragraph({ spacing: { after: 100 }, indent: { left: 567, hanging: 567 }, children: [run(r, { size: 20 })] })),
    ] }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync("Informality_Paragraph_Revision_Draft.docx", b); console.log("ok"); });
