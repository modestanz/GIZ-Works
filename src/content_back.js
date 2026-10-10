// Synthesis, recommendations, references, acronyms
const synthesis = [
  { h: 1, t: "Cross-Country Synthesis" },
  { h: 2, t: "Comparative Overview" },
  { tbl: {
    caption: "Comparative overview of finance readiness for R-NBT MSMEs across KAZA states",
    cols: [2000, 1400, 1400, 1400, 1400, 1426],
    head: ["Dimension", "Angola", "Botswana", "Namibia", "Zambia", "Zimbabwe"],
    rows: [
      ["Bank presence in KAZA hubs", "Low", "High", "High", "High", "Medium–High"],
      ["Operational credit guarantee scheme", "FGC (national)", "Not identified", "CGS", "ZCGS + BoZ pilot", "ECGC"],
      ["Tourism-specific DFI window", "No", "Partial (CEDA/NDB)", "Yes (DBN)", "Partial (CEEC)", "No (past revival fund)"],
      ["Community revenue mechanisms", "Nascent", "CBNRM Trusts", "Conservancies, CCFN, GPTF", "CRBs, Simalaha", "CAMPFIRE"],
      ["Savings group coverage", "Medium", "Medium", "Medium", "High", "High"],
      ["Green finance channel", "Weak", "Corporate precedents", "EIF (GCF)", "Bond framework, PAYGo", "IDBZ (GCF)"],
      ["Macro / currency risk", "High", "Low–Medium", "Low", "Medium", "High"],
      ["Private anchor density", "Low", "Very high", "Medium", "High", "High"],
      ["Overall finance readiness", "Emerging", "Advanced", "Advanced", "Intermediate", "Intermediate"]
    ] } },
  { h: 2, t: "Common Barriers" },
  { b: [
    "Collateral mismatch: tenure on communal, customary and concession land is not bankable; movable collateral registries are under-used.",
    "Product mismatch: amortisation schedules ignore tourism seasonality; minimum loan sizes and transaction costs are too high for micro-enterprises.",
    "Information gaps: limited records, informality and weak credit histories; banks lack sector knowledge of R-NBT.",
    "Fragmented support: BSOs, NGOs and financiers operate in silos, with weak pipelines of investment-ready MSMEs.",
    "Shock exposure: pandemics, droughts, human–wildlife conflict and currency swings increase perceived risk."
  ] },
  { h: 2, t: "Harmonisation Opportunities at KAZA Level" },
  { p: "Because access to finance is governed nationally, KAZA-level harmonisation should focus on soft infrastructure that lowers cost and risk for national financiers rather than on regulatory convergence:" },
  { b: [
    "**Common R-NBT eligibility and screening framework**: a shared definition of regenerative tourism MSMEs, environmental and social criteria and impact indicators that banks, guarantee schemes and DFIs can adopt.",
    "**KAZA MSME pipeline and data platform**: a shared registry of investment-ready MSMEs, supplier databases of large operators and anonymised repayment data to inform credit risk.",
    "**Aligned guarantee terms**: coordinated tourism windows in CGS, ZCGS, ECGC, FGC and a future Botswana facility, with a regional counter-guarantee (e.g. AGF) and common reporting.",
    "**Standard supplier-finance contract template**: building on the Wilderness–Stanbic model for use by operators and banks across states.",
    "**Univisa and border facilitation**: full Univisa adoption and simplified crossings to support multi-country itineraries and cross-border MSMEs.",
    "**Payments**: lower-cost cross-border tourism payments through SADC payment infrastructure and mobile-money interoperability."
  ] }
];

const recs = [
  { h: 1, t: "Recommendations and Pilot Options" },
  { h: 2, t: "Candidate Pilot Mechanisms" },
  { tbl: {
    caption: "Candidate MSME-tailored financial mechanisms for piloting",
    cols: [2000, 2700, 2200, 2126],
    head: ["Mechanism", "Design features", "Best-fit countries", "Lead partners (indicative)"],
    rows: [
      ["1. Contract-backed supplier and receivables finance", "Loans to MSME suppliers secured by assignment of purchase contracts or booking receivables from anchor operators/DMCs; seasonal repayment; TA on supplier readiness", "Botswana, Zambia, Zimbabwe, Namibia", "Stanbic (BW, ZM, ZW), anchor operators (Wilderness, Gondwana, Wild Horizons), LEA/BSOs"],
      ["2. Tourism/KAZA windows in national guarantee schemes", "50–70% partial guarantees; acceptance of leasehold/JV contracts as alternative security; seasonal grace periods; regional counter-guarantee", "Namibia, Zambia, Zimbabwe, Angola; new facility in Botswana", "CGS/DBN, ZCGS, ECGC, FGC; AGF; partner banks"],
      ["3. Community revolving funds", "Capitalised from conservancy/CBO/CAMPFIRE revenues plus donor matching; managed by MFI or trust with transparent rules; linked to VSLAs", "Namibia, Zambia, Zimbabwe, Botswana", "Conservancies, CRBs, RDCs, CCFN, NGOs, MFIs"],
      ["4. Green asset finance and leasing", "Lease or loan for solar, water, efficient vehicles, boats; vendor partnerships; green credit lines with TA", "All five states", "EIF, IDBZ, bank asset-finance units, solar vendors, DFIs"],
      ["5. Readiness and grant-to-loan facility", "Grants and TA to formalise and prepare MSMEs, converting to loans or guarantees on milestones", "Angola (priority), all states for community enterprises", "KfW/GIZ, EU, foundations, INAPEM/LEA/BSOs"]
    ] } },
  { h: 2, t: "Design Principles" },
  { b: [
    "Match repayment to tourism seasonality (grace periods in the low season, balloon or revenue-linked repayments).",
    "Denominate loans in the currency of revenues where regulation allows, or provide currency risk mitigation.",
    "Use anchor operators, booking platforms and digital payments to reduce information asymmetry.",
    "Blend concessional capital only where it unlocks additional commercial lending; avoid crowding out.",
    "Embed regenerative criteria (biodiversity, community benefit, climate resilience) with simple, verifiable indicators.",
    "Learn from low-uptake facilities: simple processes, intermediation by banks, active marketing through BSOs."
  ] },
  { h: 2, t: "Next Steps" },
  { b: [
    "Validate institutional assessments through interviews with shortlisted financial institutions, guarantee schemes and anchor operators in each state.",
    "Hold national stakeholder workshops to prioritise one or two pilot mechanisms per country.",
    "Develop term sheets and risk-sharing structures with lead partners; confirm funding sources for first-loss and TA.",
    "Establish a KAZA-level learning and data platform to track pilot performance and support replication."
  ] }
];

const acronyms = [
  ["AECF", "Africa Enterprise Challenge Fund"], ["AfDB", "African Development Bank"], ["AGF", "African Guarantee Fund"],
  ["BDA", "Banco de Desenvolvimento de Angola"], ["BDC", "Botswana Development Corporation"], ["BDS", "Business Development Services"],
  ["BNA", "Banco Nacional de Angola"], ["BoZ", "Bank of Zambia"], ["BSO", "Business Support Organisation"],
  ["BTO", "Botswana Tourism Organisation"], ["CAMPFIRE", "Communal Areas Management Programme for Indigenous Resources"],
  ["CBNRM", "Community-Based Natural Resource Management"], ["CBO", "Community-Based Organisation"], ["CCFN", "Community Conservation Fund of Namibia"],
  ["CEDA", "Citizen Entrepreneurial Development Agency"], ["CEEC", "Citizens Economic Empowerment Commission"], ["CGS", "Credit Guarantee Scheme (Namibia)"],
  ["CRB", "Community Resource Board"], ["DBN", "Development Bank of Namibia"], ["DBZ", "Development Bank of Zambia"],
  ["DFI", "Development Finance Institution"], ["DMC", "Destination Management Company"], ["DNPW", "Department of National Parks and Wildlife (Zambia)"],
  ["ECGC", "Export Credit Guarantee Corporation of Zimbabwe"], ["EIF", "Environmental Investment Fund of Namibia"], ["FGC", "Fundo de Garantia de Crédito (Angola)"],
  ["GCF", "Green Climate Fund"], ["GMA", "Game Management Area"], ["GPTF", "Game Products Trust Fund"],
  ["HWC", "Human–Wildlife Conflict"], ["IDBZ", "Infrastructure Development Bank of Zimbabwe"], ["JV", "Joint Venture"],
  ["KAZA TFCA", "Kavango Zambezi Transfrontier Conservation Area"], ["LEA", "Local Enterprise Authority (Botswana)"], ["MFI", "Microfinance Institution"],
  ["MSME", "Micro, Small and Medium-sized Enterprise"], ["NASRIA", "Namibia Special Risks Insurance Association"], ["NDB", "National Development Bank (Botswana)"],
  ["PRODESI", "Programa de Apoio à Produção, Diversificação das Exportações e Substituição das Importações"], ["R-NBT", "Regenerative Nature-Based Tourism"],
  ["RBZ", "Reserve Bank of Zimbabwe"], ["RDC", "Rural District Council"], ["SMEDCO", "Small and Medium Enterprises Development Corporation"],
  ["TA", "Technical Assistance"], ["VFEX", "Victoria Falls Stock Exchange"], ["VSLA", "Village Savings and Loan Association"],
  ["ZCGS", "Zambia Credit Guarantee Scheme"], ["ZiG", "Zimbabwe Gold (currency)"], ["ZTA", "Zambia Tourism Agency / Zimbabwe Tourism Authority"]
];

const references = [
  "ANGOP (2021). PRODESI disponibiliza para Cuando Cubango Kz 900 milhões. Agência Angola Press. https://angop.ao/en/noticias/economia/prodesi-disponibiliza-para-cuando-cubango-kz-900-milhoes",
  "Bank of Botswana (2025). Annual Report 2024. Gaborone: Bank of Botswana. https://www.bankofbotswana.bw",
  "Bank of Namibia (2025). Annual Report 2024 and Financial Stability Report. Windhoek: Bank of Namibia. https://www.bon.com.na",
  "Bank of Zambia (2024). National Financial Inclusion Strategy II (2024–2028). Lusaka: Bank of Zambia / Ministry of Finance and National Planning. https://www.boz.zm",
  "Banco Nacional de Angola (2022). Aviso n.º 10/2022 sobre a concessão de crédito ao sector real da economia. Luanda: BNA. https://www.bna.ao",
  "Daily News Botswana (2025). Wilderness, Stanbic sign MoU on supplier financing model. Botswana Press Agency. https://dailynews.gov.bw/news-detail/87299",
  "Development Bank of Namibia (2020). The Minister of Finance has launched the Credit Guarantee Scheme. https://www.dbn.com.na/2020/08/27/the-minister-of-finance-has-launched-the-credit-guarantee-scheme/",
  "Development Bank of Namibia (2022). Finance for Tourism and Hospitality (information sheet). https://www.dbn.com.na/wp-content/uploads/2026/02/2022-04-Tourism-info-sheet.pdf",
  "Forbes África Lusófona (2024). FGC lança linha de garantia “Diversifica Mais” para facilitar o acesso ao financiamento bancário. https://forbesafricalusofona.com/?p=108769",
  "Forbes África Lusófona (2023). Aprovadas garantias de crédito de 27,7 mil milhões de kwanzas. https://forbesafricalusofona.com/?p=14758",
  "Government of the Republic of Botswana (2007). Community Based Natural Resource Management Policy. Gaborone: Government Printer.",
  "Government of the Republic of Botswana (2009). Tourism Act, No. 22 of 2009. Gaborone: Government Printer.",
  "Government of the Republic of Namibia (1996). Nature Conservation Amendment Act, No. 5 of 1996. Windhoek: Government Gazette.",
  "Government of the Republic of Zambia (2015). Tourism and Hospitality Act, No. 13 of 2015; Zambia Wildlife Act, No. 14 of 2015. Lusaka: Government Printer.",
  "Government of the Republic of Zambia (2016). Movable Property (Security Interest) Act, No. 3 of 2016. Lusaka: Government Printer.",
  "Government of Zimbabwe (2019). Zimbabwe Investment and Development Agency Act [Chapter 14:37]. Harare: Government Printer.",
  "KAZA TFCA Secretariat (2011). Treaty between the Governments of the Republic of Angola, the Republic of Botswana, the Republic of Namibia, the Republic of Zambia and the Republic of Zimbabwe on the Establishment of the Kavango Zambezi Transfrontier Conservation Area. Kasane: KAZA Secretariat. https://www.kavangozambezi.org",
  "KAZA TFCA Secretariat (2015). Master Integrated Development Plan 2015–2020. Kasane: KAZA Secretariat.",
  "Lindsey, P., Allan, J., Brehony, P. et al. (2020). Conserving Africa’s wildlife and wildlands through the COVID-19 crisis and beyond. Nature Ecology & Evolution, 4, 1300–1310.",
  "Mmegi (2026). Wilderness, LEA herald new era for citizen participation in tourism. https://www.mmegi.bw/ampArticle/123339",
  "NACSO (various years). The State of Community Conservation in Namibia: Annual Report. Windhoek: Namibian Association of CBNRM Support Organisations. https://www.nacso.org.na",
  "NewsDay (2023). ECGC rolls out US$60m credit guarantees. https://www.newsday.co.zw/theindependent/amp/business-digest/article/200016067/ecgc-rolls-out-us60m-credit-guarantees",
  "NewsDay / The Independent (2022). Tourism seeks revolving fund facility to bolster recovery. https://newsday.co.zw/business/article/200004029/tourism-seeks-revolving-fund-facility-to-bolster-recovery",
  "One Love Zambia (n.d.). CEEC commended for extending empowerment loans to the tourism sector. https://onelovezambia.com/?p=6219",
  "Parliament of Botswana (2026). Committee of Supply Speech, Ministry of Trade and Entrepreneurship, 16 February 2026. https://www.parliament.gov.bw",
  "Republikein (2020). Credit guarantee scheme for SMEs. https://www.republikein.com.na/nuus/credit-guarantee-scheme-for-smes2020-08-20",
  "SADC Secretariat (2020). SADC Tourism Programme 2020–2030. Gaborone: SADC.",
  "Standard Bank Group (2024). Stanbic Bank Botswana leads first nature conservation financing in Africa. https://corporateandinvestment.standardbank.com/cib/global/deals/stanbic-bank-botswana-leads-first-nature-conservation-financing-in-africa",
  "The Brief (2026). Credit guarantee scheme disburses N$145m to 153 SMEs. https://thebrief.com.na/2026/04/credit-guarantee-scheme-disburses-n145m-to-153-smes/",
  "The Herald (n.d.). Low uptake for tourism fund. https://www.heraldonline.co.zw/low-uptake-for-tourism-fund/",
  "The Patriot on Sunday (2025). SMMEs upbeat, grateful to LEA. https://thepatriot.co.bw/smmes-upbeat-grateful-to-lea",
  "Travel Daily News (2025). Zambia receives $100m boost for green, resilient and transformational tourism development. https://www.traveldailynews.com/organizations/zambia-receives-100m-boost-for-green-resilient-and-transformational-tourism-development/",
  "Business Standard (2024). Southern African countries launch Schengen-style visa: all you need to know. https://www.business-standard.com/finance/personal-finance/southern-african-countries-launch-schengen-style-visa-all-you-need-to-know-124060400922_1.html",
  "Business Times Zimbabwe (n.d.). Cabinet approves revolving fund for tourism sector. https://businesstimes.co.zw/cabinet-approves-revolving-fund-for-tourism-sector/",
  "Ver Angola (2023). Conselho da República aprova alteração administrativa para 20 províncias e 325 municípios. https://www.verangola.net/va/pt/122023/Politica/38315/",
  "Ver Angola (2025). Cuando: a nova província que nasce com uma mão-cheia de promessas. https://www.verangola.net/va/pt/092025/Sociedade/45789/",
  "World Bank (2021). Banking on Protected Areas: Promoting Sustainable Protected Area Tourism to Benefit Local Economies. Washington, DC: World Bank.",
  "World Bank (2025). The Global Findex Database 2025. Washington, DC: World Bank. https://www.worldbank.org/globalfindex",
  "Zambia Monitor (2025). ZCGS, FNB Zambia sign K100 million partnership for MSMEs. https://www.zambiamonitor.com/?p=69748",
  "Zambia Monitor (2025). ZCGS partners First Alliance Bank on SME guarantees. https://www.zambiamonitor.com/?p=67514",
  "Zambia Monitor (2025). Government outlines MSME empowerment and 2026 tourism allocation. https://www.zambiamonitor.com/?p=71605",
  "Bank of Zambia & National Advisory Board for Impact Investment (2025). Call for Expressions of Interest: Small Business Growth Initiative (pilot credit guarantee scheme). https://regalert.today/document/876f97e0-06eb-448f-9fb6-7502f337a9ae"
];

module.exports = { synthesis, recs, acronyms, references };
