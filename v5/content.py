# -*- coding: utf-8 -*-
"""New and revised content for the F1-D4 Financial Landscape Analysis (V5).

Block DSL:
  ("h1", text)  ("h2", text)  ("h3", text)    headings; "#" numbers are renumbered later
  ("p", text)   body paragraph; **bold**, *italic*, [[placeholder]] (highlighted)
  ("lead", text) chapter-opening 'In brief' paragraph
  ("b", [items]) bullet list
  ("note", text) italic note paragraph
  ("tbl", key, caption, headers, rows, widths)   widths in DXA, sum 9026
Cross-references: {T:key} -> number of the table registered under key
  (existing tables are registered as old1..old39 by their V4 number).
"""

# ---------------------------------------------------------------- Executive summary
EXEC_SUMMARY_ADD = [
    ("p", "**How ready is each country?** Scored against six stated criteria (section 9.2), Zambia (4.1 out of 5) and Zimbabwe (3.9) are ready to pilot a guarantee-led mechanism now, because both combine an active credit guarantee scheme, lenders in the corridor and a deep tourism market around Victoria Falls–Mosi-oa-Tunya. Botswana (3.4) and Namibia (3.2) have strong national institutions but need adjustments: Botswana lacks a guarantee scheme and products that fit micro-operators, and in Namibia the instruments rarely reach the sparsely populated Zambezi and Kavango regions. Angola (1.4) needs a readiness-first approach."),
    ("p", "**Communities living next to protected areas.** Most enterprises run by people living adjacent to Chobe, the Okavango Delta, Bwabwata, Kafue, Hwange and Luengue-Luiana are informal, so few meet formal lending criteria. They can already reach community trusts, conservancies, cooperatives, savings groups and some government market spaces, but bank branches, agent points and reliable mobile networks thin out quickly beyond the hub towns (chapter 8). The finance design should therefore offer a formalisation pathway, with group-based entry, rather than treat registration as an entry test."),
    ("p", "**A regional opportunity.** Three KAZA states (Angola, Botswana and Namibia) also share the Cubango-Okavango River Basin, managed under OKACOM. OKACOM’s Cubango-Okavango River Basin (CORB) Fund, which received a USD 10 million GEF grant through the World Bank in May 2026, runs parallel to the proposed KAZA Conservation Trust Fund without a shared coordination mechanism. Aligning the two would let basin and tourism projects draw on both (sections 2.5 and 2.6)."),
]

EXEC_SUMMARY_METHOD_NOTE = ("Findings combine secondary research with primary data from stakeholder interviews and a roundtable, completed in October 2026. Ratings of capacity, interest and risk appetite are indicative (section 1.6 explains the scales) and should be validated through further key informant interviews, the planned MSME interviews and partner consultations before pilot selection.")

# ---------------------------------------------------------------- Chapter openers
LEADS = {
    "Regional Context": "In brief: finance for R-NBT MSMEs is governed nationally, but the same constraints recur in all five states: land that cannot be mortgaged, seasonal cash flows, informality and thin physical and digital reach beyond the hub towns. Regional lenders and guarantors can backstop national pilots, and OKACOM’s CORB Fund is a concrete collaboration opportunity for the three basin states.",
    "Angola": "In brief: Angola has national instruments (a credit guarantee fund, PRODESI credit lines and microcredit companies), but the Angolan KAZA area is remote, landmine-affected and at an early stage of tourism development, with one confirmed bank and no confirmed microfinance institution in the corridor. Finance here must start with readiness: grants, technical assistance and small asset finance.",
    "Botswana": "In brief: Botswana has the deepest tourism value chain and the most generous state finance for citizens, but no operational credit guarantee scheme and few products designed for micro-operators on concession or tribal land. The contract-backed supplier finance model pioneered by Wilderness and Stanbic is the most promising route to scale.",
    "Namibia": "In brief: Namibia has the strongest national institutional package (a tourism window at the development bank, a multi-bank credit guarantee scheme, two GCF-accredited green financiers and mature conservancies), but these instruments rarely reach the sparsely populated Zambezi and Kavango regions, where tourism accounts for only a small share of guarantees issued.",
    "Zambia": "In brief: Zambia’s guarantee scheme is the fastest-growing in the region and Livingstone offers a concentrated tourism market with lenders nearby. The binding constraints are the high cost of credit and thin finance in the Game Management Areas beyond Livingstone.",
    "Zimbabwe": "In brief: Zimbabwe combines the strongest private tourism cluster in the corridor with an active MSME credit guarantee scheme and the deepest informal savings culture. Currency uncertainty, short tenors and limited multilateral lending hold back term finance, and past tourism funds failed through poor design rather than lack of money.",
    "Cross-Country Synthesis": "In brief: on stated scoring rules, Zambia and Zimbabwe are ready to pilot now, Botswana and Namibia are ready with adjustments, and Angola needs a readiness-first approach. Across all five states the most bankable route combines a guarantee or development lender, a lender present in the corridor, an anchor buyer and business support tied to the loan.",
    "Recommendations and Pilot Options": "In brief: five mechanisms are recommended for piloting, ordered as a ladder from readiness grants and community funds for informal and micro-enterprises to guarantees and contract-backed loans for established businesses. Future project design should explicitly facilitate a formalisation pathway rather than require registration at entry.",
}

# ---------------------------------------------------------------- 1.4 Who counts as an MSME (new)
SEC_1_4 = [
    ("h2", "#.# Who Counts as an MSME: Size, Informality and the Formalisation Pathway"),
    ("p", "MSME means a micro, small or medium-sized enterprise. There is no KAZA-wide statutory definition, and KAZA is not creating one: each Partner State sets its own size bands by number of employees and annual turnover, and only Zimbabwe has a tourism-specific band (GIZ, 2026, pp. 96–97). Once converted to a common currency the bands differ widely, with medium-enterprise ceilings ranging from about USD 620,000 in Namibia to USD 10 million in Angola. This analysis therefore uses national MSME status as the primary size test and treats employee numbers and turnover as points of comparison rather than eligibility thresholds ({T:sizebands})."),
    ("tbl", "sizebands", "National MSME size bands (employees / annual turnover)",
     ["Country", "Micro", "Small", "Medium", "Medium ceiling (USD)", "Tourism-specific band"],
     [["Angola", "≤10 / ≤USD 250k", "10–100 / USD 250k–3m", "100–200 / USD 3–10m", "USD 10m", "No"],
      ["Botswana", "0–6 / ≤P200k", "6–25 / P200k–5m", "26–100 / P5–15m", "≈USD 1.12m", "No; not uniformly applied"],
      ["Namibia", "1–10 / N$0–300k", "11–30 / N$300k–3m", "31–100 / N$3–10m", "≈USD 620,000", "No; guideline only"],
      ["Zambia", "≤10 / ≤K1m", "11–50 / K1–10m", "51–100 / K10–50m", "≈USD 2.59m", "No; generic services and trade band"],
      ["Zimbabwe", "≤5 / ≤USD 30k", "≤30 / ≤USD 500k", "≤75 / ≤USD 1m", "USD 1.0m", "Yes; statutory tourism and hospitality row"]],
     [1300, 1500, 1700, 1700, 1300, 1526]),
    ("note", "Source: GIZ (2026), Tables 18 and 19, p. 96; exchange rates of 10–11 September 2026. The macro diagnostic also cites 250 employees as Botswana’s medium-enterprise ceiling in a 2013 table (p. 97), which differs from the 100 shown here and should be confirmed."),
    ("p", "**Most micro-enterprises are informal.** In all five states the majority of micro-enterprises are not registered with the company registrar (CIPA in Botswana, BIPA in Namibia, PACRA in Zambia, the Companies Registry in Zimbabwe and the one-stop business counter in Angola) or with the tax authority. Informality is the norm rather than the exception: about 60% of Angola’s economy, 84% of Botswana’s MSMEs, 74% of employment in Namibia’s Zambezi region, 96% of Zambian enterprises and 76% of Zimbabwe’s establishments are informal or unregistered (GIZ, 2026, p. 125). Informality directly limits access to finance, because almost every loan, guarantee and public grant starts from proof of registration, tax clearance and a bank account in the business’s name."),
    ("p", "This creates a mismatch in the programme itself. Programme documents promise support to MSMEs, yet every finance instrument reviewed starts from formal registration, so micro and informal enterprises, which are most of the enterprises in the corridor, are effectively outside the design. It is not the programme’s role to register businesses, and it has no mandate to do so. Its role is to **facilitate a formalisation pathway**: to help an enterprise take the next realistic step (joining a recognised group, obtaining a council licence, opening a group or business account, registering) so that grants and finance become reachable once it is formal. Routes that already exist and can be used include group lending, clustering and cooperatives, the MSME LOOP training, and government registration support programmes ([[confirm whether registration support is referenced in the programme DOA]])."),
    ("p", "Size and informality are not the same measure. Botswana’s MSMEs, for example, are 91% micro and 84% informal (GIZ, 2026, p. 34). The analysis therefore records informality as a separate attribute of an enterprise rather than assuming that every micro-enterprise is informal. Enterprises in communities adjacent to the tourism value chains, many of them informal, sit mainly in three of the segments in {T:old1} (food and agri-supply, crafts and culture, and conservation services) and are in scope where they trade with the visitor economy or can be recognised within a national MSME framework. Chapter 8 examines them in detail, and section 10.3 sets out the formalisation pathway as a recommendation for future project design."),
]

# ---------------------------------------------------------------- 1.5 Methodology (replacement of first paragraph + additions)
METHOD_P1 = ("The analysis combines **secondary research** with **primary data** from stakeholders. Secondary sources include national policies and legislation, central bank and regulator publications, development finance institution and foundation portfolios, KAZA Secretariat and SADC documents, academic and grey literature, recent press reporting (to October 2026) and official C-NRM R-NBT programme documents made available to this assignment by GIZ Botswana, including the KAZA R-NBT Macro Diagnostic Study (GIZ, 2026), whose MSME survey covers 71 enterprises. Primary data comes from key informant interviews and a stakeholder roundtable with the following groups: [[insert number of interviews per group]]")

METHOD_GROUPS = [
    "Financial institutions and guarantee schemes (commercial banks, development finance institutions, microfinance institutions and credit guarantee schemes, including NASRIA in Namibia).",
    "Government agencies responsible for tourism, MSME development and local government, including a city council participant at the stakeholder roundtable.",
    "Business support organisations, industry associations and conservation and community organisations.",
    "Tourism operators, DMCs and lodge groups acting as potential anchor buyers.",
    "MSMEs: a short round of 3–4 interviews per country is planned to add the voice of enterprises themselves (section 8.9 and Annex B).",
]

METHOD_P2 = "Institutional assessments of financial institutions use three dimensions rated High/Medium/Low, explained in section 1.6:"

METHOD_LIMITS_ADD = [
    ("p", "**Data gaps.** Gender and age disaggregation of business owners is available only from national surveys and is rarely specific to tourism; where the data do not allow disaggregation, the report says so. Informal and community-linked operators are poorly captured in published data, and the macro-diagnostic survey skews towards registered firms (GIZ, 2026, p. 125), so their financing demand needs validation. Data on informal businesses sit mainly with municipalities and councils (section 8.8)."),
]

# ---------------------------------------------------------------- 1.6 How to read ratings (new)
SEC_1_6 = [
    ("h2", "#.# How to Read the Ratings and Scores"),
    ("p", "The report uses three kinds of rating. Each is a judgement based on the evidence named in the tables, not a statistical measure, and each should be read as indicative until validated with the institutions concerned."),
    ("p", "**Access ratings** (product tables in each country chapter) describe how easily a typical R-NBT MSME in the KAZA corridor can obtain a product. **Relevance ratings** describe how well the product matches the financing needs of the value-chain segments in {T:old1}. **Institutional ratings** (partner assessment tables) describe a financial institution’s capacity, strategic interest and risk appetite. The scales are set out in {T:ratingscale}. The cross-country readiness ranking uses a separate 0–5 score with stated weights, explained in section 9.2."),
    ("tbl", "ratingscale", "What the access, relevance and institutional ratings mean",
     ["Rating", "Access (can a corridor MSME get it?)", "Relevance (does it fit MSME needs?)", "Institutional (capacity, interest, risk appetite)"],
     [["High / Very high", "Provider present in or near the corridor; eligibility within reach of a registered small business without real-estate collateral; evidence of uptake by tourism MSMEs", "Directly matches a core need of several segments (capex, seasonal working capital, assets)", "Strong balance sheet, systems and reach; stated priority for MSMEs or tourism; proven willingness to lend to collateral-light or rural borrowers"],
      ["Medium", "Available, but conditions (collateral, registration, price or distance) exclude many MSMEs; some uptake", "Matches the needs of some segments or only established firms", "Adequate capacity or interest; lends to MSMEs mainly with guarantees or collateral"],
      ["Low", "Exists nationally but rarely reaches corridor MSMEs; strict collateral or documentation; little evidence of uptake", "Marginal fit; useful for few segments", "Limited capacity, interest or appetite for this market"],
      ["Very low / None", "Not available in practice, or no provider identified", "Not relevant at MSME scale", "No appetite (e.g. no lending to informal or micro-enterprises)"]],
     [1500, 2600, 2300, 2626]),
    ("p", "Evidence for the ratings comes from provider publications, annual reports, press reports, the macro-diagnostic survey and stakeholder interviews. A range such as “Low–Medium” means the evidence points both ways, typically because access differs between hub towns and remote areas."),
]

# ---------------------------------------------------------------- 2.3 Cross-cutting constraints (narrative replacement)
SEC_2_3 = [
    ("p", "**Land and collateral.** Most KAZA MSMEs operate on communal, customary or state land (concessions, conservancies, Game Management Areas and CAMPFIRE wards) that cannot be mortgaged. Banks therefore lose their usual form of security. Movable-collateral registries now exist in Botswana, Zambia and Zimbabwe and allow vehicles, boats, equipment and receivables to secure loans, but lenders still use them little."),
    ("p", "**Seasonality and shocks.** Tourism income is concentrated in the dry season (June to October), while standard loans expect equal monthly repayments all year. COVID-19 (2020–2022) and the 2024 El Niño drought showed how quickly tourism revenue can disappear, which raises lenders’ perception of risk."),
    ("p", "**Currency.** High-end tourism earns hard currency, but most MSMEs earn local currency. Currency volatility in Angola and Zambia makes USD loans risky for MSMEs. Zimbabwe operates on dual currencies, which makes USD lending practical for businesses that earn dollars, and Victoria Falls is designated a multi-sector Special Economic Zone for tourism, conferencing and finance, which further eases monetary and currency restrictions."),
    ("p", "**Information and informality.** Limited financial records, informality and thin credit histories make it hard for lenders to judge risk. Informality is highest in rural areas next to the value chains: in Namibia, 78.9% of rural employment is informal against 41.8% in urban areas (Bank of Namibia, 2025). Alternative evidence, such as savings-group records, council licences and digital payment trails, therefore needs to be tested as a substitute for formal records."),
    ("p", "**Physical and digital reach.** Access to finance is also a question of infrastructure. Bank branches and ATMs are concentrated in the hub towns (Kasane, Maun, Katima Mulilo, Rundu, Livingstone, Victoria Falls and Menongue); outside them, MSMEs may travel long distances on poor roads to reach a branch. Agent banking and mobile money fill part of the gap, but mobile network coverage is patchy in the Okavango Delta, the Chobe Enclave, the Game Management Areas around Kafue and Sioma, Binga and most of Cuando. Where mobile data is unavailable, USSD (the basic menu-based mobile channel that works on any phone without internet) is the main digital route to payments and savings. These gaps are identified here as access constraints; closing them is a matter for governments and network operators rather than for the programme."),
    ("p", "**Distance and transaction costs.** Small loan sizes, long distances to branches and the specialised knowledge needed to understand tourism raise the cost of each loan, which pushes lenders towards larger and urban borrowers."),
    ("p", "**Withdrawal of grant funding.** The wind-down of USAID programmes in 2025 removed significant grant and technical assistance funding for community conservation and enterprise development in the region (including the Resilient Waters programme that supported the CORB Fund), increasing the importance of blended and market-based mechanisms."),
]

# ---------------------------------------------------------------- 2.4 Product terms (new)
SEC_2_4 = [
    ("h2", "#.# Financial Products and Their Indicative Terms"),
    ("p", "The country chapters rate each financial product for access and relevance. To make those ratings usable as a baseline, this section defines each product type and summarises its typical terms: price, tenor (how long the money is lent for), ticket size (the amount) and the security lenders usually require. {T:proddefs} gives the definitions and typical terms across the corridor; {T:rates} gives the interest-rate anchors in each country, against which loan prices are set. Country-specific terms follow each country’s product table."),
    ("tbl", "proddefs", "Financial product definitions and typical terms across the KAZA states",
     ["Product", "What it is and who it is for", "Typical tenor", "Typical ticket size", "Usual security (collateral)"],
     [["Term loan", "A loan for investment (building, refurbishment, equipment), repaid in instalments; for registered businesses with a track record", "1–5 years from banks; up to 7–8 years on some DFI or donor-funded lines", "USD 10,000–500,000; smaller from DFIs and empowerment funds", "Title deeds or fixed property, plus personal guarantees; partial guarantees can replace part of this"],
      ["Working capital", "Short-term finance for stock, wages and running costs (overdraft, revolving credit, short loan); for businesses with regular cash flow", "Up to 12 months, renewable", "USD 1,000–100,000", "Cash flow, debtors, personal guarantees; often fixed property for larger limits"],
      ["Micro-loan", "Small individual or group loan for traders, crafters and service providers; for micro and often informal enterprises", "3–24 months, frequent (weekly or monthly) repayments", "USD 50–5,000", "Group guarantee, household assets, savings deposit; sometimes salary deduction"],
      ["Credit guarantee", "A promise by a guarantee scheme to repay part of a bank loan if the borrower defaults; it lowers the bank’s risk so it can lend with less collateral", "Matches the underlying loan", "Matches the underlying loan, within scheme limits", "Replaces typically 50–60% of required collateral; borrower pays a guarantee fee"],
      ["Grant / matching grant", "Non-repayable funding, often requiring a co-contribution; for early-stage, community or conservation enterprises", "One-off or staged", "USD 1,000–100,000", "None; competitive selection and reporting"],
      ["Revolving fund", "A pool of money lent to members and re-lent as it is repaid (community, cooperative or programme funds)", "3–24 months", "USD 50–10,000", "Group membership and peer pressure; sometimes savings"],
      ["Leasing / asset finance", "Finance to acquire a vehicle, boat or equipment, where the asset itself is the security", "2–5 years", "USD 5,000–150,000", "The asset (registered in the lender’s name or on the collateral registry); deposit of 10–30%"],
      ["Equity", "Investment in exchange for a share of ownership; for growth-stage firms and joint ventures", "Long-term (5–10 years)", "USD 100,000 and above", "None; investor takes ownership and governance rights"],
      ["Green finance", "Loans, leases or grants for solar, water, energy efficiency or other climate and nature investments", "2–8 years", "USD 1,000 (solar PAYGo) to USD 500,000", "As for term loans or leases; PAYGo uses the device itself"]],
     [1400, 2626, 1600, 1600, 1800]),
    ("note", "Typical tenors, ticket sizes and security are indicative ranges compiled from provider information, press reports and common lending practice in the region; they vary by institution and must be validated with partner institutions before pilot design."),
    ("tbl", "rates", "Interest-rate anchors and indicative MSME loan pricing by country (latest available, September 2026)",
     ["Country", "Central bank policy rate", "Reference lending rate", "Indicative MSME bank pricing", "Indicative concessional pricing"],
     [["Angola", "BNA rate 14.75% (cut in September 2026; 18.5% at end-2025)", "Not published as a single prime rate", "High, kwanza-denominated; typically several points above the BNA rate", "Below-market rates on PRODESI and Aviso 10/2022 lines for eligible sectors"],
      ["Botswana", "Monetary Policy Rate 5.5% (raised by 200 basis points in April 2026; held in August 2026)", "Prime rate; about 7.2% before the April hike, higher since (confirm with banks)", "Prime plus a margin set by risk", "CEDA lends below commercial rates; a 3-percentage-point CEDA rate subsidy applies to tourism (Daily News, 2026)"],
      ["Namibia", "Repo rate 6.75% (August 2026)", "Prime lending rate 10.25%", "Prime plus a margin; microlender charges capped under the Microlending Act", "DBN tourism finance prime-linked; CGS cover reduces collateral, not price"],
      ["Zambia", "Policy rate 13.25% (May 2026)", "Commercial lending rates commonly above 25%", "Above 25% at banks; higher at MFIs and digital lenders", "CEEC loans concessional; EIB-funded capital goods lines with tenors up to 8 years"],
      ["Zimbabwe", "Bank policy rate 27.5% (ZiG; cut in September 2026)", "Targeted Finance Facility 12.5%, with banks’ all-inclusive lending to productive sectors capped at 22.5%", "USD loans priced well below ZiG loans but short-tenor; MFI pricing high", "SMEDCO, EmpowerBank and ZWMB lines; RBZ Targeted Finance Facility"]],
     [1200, 2000, 2000, 1900, 1926]),
    ("note", "Sources: Forbes África Lusófona (2026b); Bank of Botswana (2026); The Brief (2026e); Lusaka Times (2026); The Herald (2026); Daily News (2026). Actual MSME loan prices are rarely published; where no figure is given, pricing should be collected in validation interviews."),
]

# ---------------------------------------------------------------- 2.5 OKACOM / 2.6 CORB (new)
SEC_2_5 = [
    ("h2", "#.# OKACOM and the Cubango-Okavango River Basin: An Institutional Finding"),
    ("p", "The Permanent Okavango River Basin Water Commission (OKACOM) was established by an agreement signed by Angola, Botswana and Namibia in Windhoek in September 1994. It advises the three riparian governments on the conservation, development and use of the shared water resources of the Cubango-Okavango River Basin (CORB), which runs from the forested highlands of central Angola through north-eastern Namibia to the Okavango Delta in Botswana (OKACOM, 1994). The Delta’s water comes from a ‘water tower’ in Angola, through the Cubango and Cuito rivers, and the Delta is both a Ramsar wetland and UNESCO’s 1,000th World Heritage Site."),
    ("p", "This matters for MSME finance because OKACOM and KAZA overlap in geography, mandate and financing logic, yet have no shared coordination mechanism. Three of the five KAZA states are OKACOM members, and OKACOM’s basin strategy targets sustainable socio-economic development and improved livelihoods for the same communities that R-NBT tourism MSME work aims to reach. Water security underpins the Delta’s tourism draw, and wildlife-tourism revenue can in turn fund basin stewardship, so the two bodies cover both ends of the same value chain."),
    ("p", "Each body is building its own long-term financing instrument. OKACOM has created the CORB Fund (section 2.6). KAZA is preparing a KAZA Conservation Trust Fund through a Global Biodiversity Framework Fund project (GEF ID 12248; project grant of about USD 3.2 million with USD 6.6 million co-financing), which the KAZA Ministerial Committee has committed to capitalise (WWF-US, n.d.; KAZA TFCA Secretariat, 2026). The two funds currently run on parallel tracks. Without coordination, a community trust, MSME or financial institution in the basin portion of KAZA would face two separate application, governance and reporting processes for overlapping objectives."),
    ("tbl", "okacomkaza", "OKACOM and KAZA compared",
     ["Dimension", "OKACOM", "KAZA TFCA"],
     [["Founding instrument", "1994 OKACOM Agreement (Windhoek)", "2011 KAZA Treaty"],
      ["Member states", "Angola, Botswana, Namibia", "Angola, Botswana, Namibia, Zambia, Zimbabwe"],
      ["Core mandate", "Water resources of the Cubango-Okavango basin; basin livelihoods", "Wildlife, landscapes, conservation and the tourism economy"],
      ["Long-term financing instrument", "CORB Fund (endowment and sinking fund; GEF grant approved May 2026)", "KAZA Conservation Trust Fund (in preparation under GEF ID 12248)"],
      ["Overlap", "Basin portion of KAZA: Luengue-Luiana and Mavinga (Angola), Kavango and Bwabwata (Namibia), Okavango Delta and its community trusts (Botswana)", "Same"],
      ["Coordination mechanism with the other body", "None identified", "None identified"]],
     [2000, 3500, 3526]),
]

SEC_2_6 = [
    ("h2", "#.# The CORB Fund: A Collaboration Opportunity"),
    ("p", "The Cubango-Okavango River Basin Fund is an independent hybrid fund originated by OKACOM to improve livelihoods, strengthen ecosystem resilience and share benefits equitably among Angola, Botswana and Namibia. Its design combines a **sinking vehicle**, which is spent down within about five years to fund immediate basin management and projects, with an **endowment vehicle**, which is invested permanently so that its annual income funds projects in the long term (OKACOM, n.d.). Its planned interventions overlap closely with the needs of R-NBT MSMEs and adjacent communities: small-scale solar, water and energy security, fishing and beekeeping management, community-based natural resource management and “enhanced protected areas and linked eco-tourism”."),
    ("tbl", "corb", "CORB Fund at a glance",
     ["Feature", "Detail"],
     [["Originator and riparian states", "OKACOM; Angola, Botswana and Namibia"],
      ["Structure", "Hybrid fund: sinking vehicle (target over USD 20 million) and endowment vehicle (target over USD 250 million), according to the factsheet"],
      ["Capitalisation plan", "Phase 1 demonstration (two years; seed and fully capitalise the sinking vehicle, including USD 500,000 sought from each riparian state); Phase 2 fundraising (two to three years; endowment from high-net-worth individuals, foundations and impact investors); Phase 3 investment (in perpetuity)"],
      ["Planned annual project spending", "USD 1–2 million in years 1–2; USD 3 million in years 3–5; USD 10 million from year 5"],
      ["Livelihood interventions", "Potable water and sanitation; small- and utility-scale solar PV; conservation agriculture; efficient cookstoves; lighting"],
      ["Ecosystem interventions", "Sustainable forest management; sediment reduction; fire management; fishing and beekeeping management; enhanced protected areas and linked eco-tourism"],
      ["Preparation co-funding secured", "USD 900,000: riparian states (USD 50,000 in kind), OKACOM (USD 250,000), UK Aid CRIDF (USD 250,000), The Nature Conservancy (USD 200,000), USAID Resilient Waters (USD 150,000)"],
      ["Latest status", "World Bank approved a USD 10 million GEF Trust Fund grant in May 2026 to capitalise and operationalise the fund, including USD 4 million of seed capital for the endowment and a USD 20 million capitalisation goal through matching contributions (World Bank, 2026). Legal registration status to be confirmed"]],
     [2400, 6626]),
    ("note", "The factsheet targets predate the May 2026 World Bank approval, which sets a USD 20 million capitalisation goal; the two should be reconciled with OKACOM. CRIDF and the USAID Resilient Waters programme have since closed."),
    ("p", "**The collaboration opportunity.** OKACOM’s mandate covers the basin’s water security; KAZA’s covers the landscape’s wildlife and tourism economy. Aligning the CORB Fund and the KAZA Conservation Trust Fund, even informally and well short of a merger, would let a single project in the basin portion of KAZA draw blended capital from both mechanisms instead of running two applications through two governance processes. Three practical steps would achieve this:"),
    ("b", ["**Harmonised investment criteria** between the CORB Fund and the KAZA Conservation Trust Fund, including a shared definition of eligible community and R-NBT enterprises.",
           "**Shared monitoring**, so that basin-health data from OKACOM and tourism-revenue data from KAZA inform the same funding decisions.",
           "**A joint stakeholder platform**, so that tourism MSMEs, community trusts and financial institutions dealing with one body know what the other offers."]),
    ("p", "For this analysis, the CORB Fund is most relevant as a grant and first-loss layer for community enterprises in Angola, Namibia and Botswana (pilot mechanisms 3 and 5 in {T:old39}), and as a source of solar, water and livelihood investments that lower operating costs for small tourism enterprises."),
]

# ---------------------------------------------------------------- Country product-terms tables (after each x.4 table)
TERMS = {
"Angola": ("termsAO", "Indicative terms and basis of access ratings – Angola", [
    ["Term loans", "Kwanza loans several points above the BNA rate (14.75%); below-market rates on Aviso 10/2022 lines for eligible sectors", "1–5 years; longer on public lines", "Not published for the corridor", "Fixed property; INAPEM certification and tax compliance for public lines", "Low: one confirmed bank in Cuando Cubango/Menongue; real-estate collateral; little tourism lending outside Luanda and Benguela"],
    ["Working capital", "As term loans or higher", "Up to 12 months", "Not published", "Fixed property or salary domiciliation", "Low: costly and short; no seasonal structures found"],
    ["Micro-loans", "High; not published by provider", "3–12 months", "Small; FGC microcredit line guaranteed 6,401 loans in 2024", "Group guarantee; FGC guarantee through microcredit companies", "Medium nationally, but no confirmed microfinance provider in the corridor"],
    ["Guarantees (FGC)", "Guarantee fee not published", "As underlying loan", "Kz 250m line for one microcredit partner (2026)", "Replaces part of collateral; cover ratio not published", "Low–Medium: national scheme active, but tourism and KAZA provinces not targeted"],
    ["Grants", "Not applicable", "One-off", "Varies by donor", "None", "Low: fragmented donor and NGO funding"],
    ["Revolving funds", "Kixikila: no interest; FADA: concessional", "Rotating cycles", "Small", "Membership", "Very low: none tourism-specific"],
    ["Leasing / asset finance", "Not published", "2–5 years", "Not published", "The asset; deposit", "Low: available mainly in Luanda"],
    ["Equity", "Not applicable", "Long-term", "Large projects only", "Ownership", "Very low"],
    ["Green finance", "Not available as a product", "–", "–", "–", "Very low: no dedicated green SME line found"]]),
"Botswana": ("termsBW", "Indicative terms and basis of access ratings – Botswana", [
    ["Term loans", "Banks: prime plus margin (MoPR 5.5%); CEDA below commercial rates with a 3-point subsidy for tourism", "Banks 1–5 years; CEDA longer for fixed assets", "CEDA business loans from about P150,000 upward (reported)", "Fixed property; lease rights only where the lender accepts them; citizen status for CEDA", "Medium: CEDA reachable by citizens but liquidity-constrained; banks require collateral that concession land cannot provide"],
    ["Working capital", "Prime plus margin; microlenders much higher", "Up to 12 months", "Varies", "Cash flow, debtors, personal guarantees", "Medium: available to established firms; seasonal repayment rarely offered"],
    ["Contract / supplier finance", "Commercial; secured on purchase contracts", "Linked to the contract cycle", "Linked to contract value", "Assignment of procurement contract with an anchor operator", "Medium: only for suppliers nominated by Wilderness under the Stanbic model"],
    ["Micro-loans (CEDA Mabogo Dinku, Letshego)", "CEDA concessional; private microlenders high", "Up to 5 years (CEDA); shorter elsewhere", "Mabogo Dinku up to about P150,000 (reported)", "Citizen status; business plan; LEA support", "Medium: suited to crafts, small services and food supply"],
    ["Chema Chema Fund", "Grant and soft loan", "Short", "Small", "Light; LEA capacity building", "Medium–High: designed for informal, women and youth entrepreneurs"],
    ["Guarantees", "Not available", "–", "–", "–", "Low: no operational national scheme"],
    ["Grants (NEF, YDF)", "Not applicable; YDF is part grant, part loan", "One-off", "Varies", "None; youth or CBO status", "Medium"],
    ["Leasing / asset finance", "Prime-linked", "2–5 years", "Game-drive vehicles, boats, solar", "The asset plus deposit", "Medium–High for formal operators; NDB reports 18% non-performing loans on specialised assets such as boats (GIZ, 2026, p. 69)"],
    ["Equity / green finance", "Not applicable / corporate", "Long-term", "Large", "Ownership / as loans", "Low for MSMEs"]]),
"Namibia": ("termsNA", "Indicative terms and basis of access ratings – Namibia", [
    ["Term loans / SME loans (DBN, banks)", "Prime-linked (prime 10.25%)", "Up to 5 years at banks; longer at DBN for fixed assets", "DBN SME finance; size not published for tourism", "Fixed property; leaseholds rarely accepted; CGS covers 60%", "Low–Medium: DBN reports low loan off-take in Zambezi; no access for informal and micro-enterprises"],
    ["Working capital", "Prime plus margin; microlenders capped by the Microlending Act", "Up to 12 months", "Varies", "Cash flow, guarantees", "Medium: established firms only"],
    ["Guarantees (CGS)", "Guarantee fee not published", "As underlying loan", "About N$145m disbursed to 153 SMEs by April 2026", "60% collateral cover", "Medium: seven lenders; tourism about 4% of guarantees (NASRIA interview)"],
    ["Micro-loans", "Capped finance charges", "Short (months)", "Small", "Salary deduction or group", "Medium: much lending is consumer credit"],
    ["Grants (EIF, GPTF, CCFN)", "Not applicable", "One-off or staged", "EIF small grants; CCFN conservancy grants", "None; registered entity or conservancy", "Medium: important for conservancy enterprises"],
    ["Revolving funds", "Varies", "Short", "Small", "Membership", "Low–Medium: scope to structure conservancy income"],
    ["Leasing / asset finance", "Prime-linked", "2–5 years", "Vehicles, boats, solar", "The asset plus deposit", "Medium–High for formal firms"],
    ["Equity", "Not applicable", "Long-term", "Larger projects via unlisted investment managers", "Ownership", "Low"],
    ["Green finance (EIF, DBN, Bank Windhoek)", "Concessional to market", "2–8 years", "Varies", "As loans", "Medium: two GCF-accredited channels"]]),
"Zambia": ("termsZM", "Indicative terms and basis of access ratings – Zambia", [
    ["Term loans", "Commercial rates commonly above 25% (policy rate 13.25%)", "1–5 years; up to 8 years on EIB-funded capital goods lines", "Varies", "Fixed property; customary land rarely accepted", "Low–Medium: high cost; DBZ ceased operations in 2023"],
    ["Working capital", "Above bank term rates; digital nano-loans higher", "Days to 12 months", "Nano-loans to larger overdrafts", "Cash flow; mobile-money history for digital loans", "Medium: available but costly"],
    ["Guarantees (ZCGS, BoZ SBGI)", "Guarantee fee not published", "As underlying loan", "19,819 SMEs and farmers supported with K1.6bn of loans by August 2025", "Partial cover (for example K50m guarantee on a K100m FNB facility)", "Medium: expanding; no tourism window yet"],
    ["Micro-loans", "High (MFI pricing)", "3–24 months", "Small", "Group guarantee", "Medium: suited to crafts, food and small services"],
    ["Grants", "Not applicable", "One-off", "World Bank community matching grants; AECF", "Co-contribution", "Medium: competitive"],
    ["Revolving funds (CEEC, CRB, NGO)", "Concessional", "Short to medium", "Varies", "Light", "Low–Medium: repayment discipline weak in some funds"],
    ["Leasing / asset finance", "Commercial; CEEC vehicle loans concessional", "2–8 years", "Vehicles, boats", "The asset; collateral registry at PACRA", "Medium"],
    ["Equity", "Not applicable", "Long-term", "Growth-stage", "Ownership", "Low"],
    ["Green finance", "PAYGo solar instalments; bank green lines", "Months to years", "From small solar kits", "The device", "Low–Medium: PAYGo widely available"]]),
"Zimbabwe": ("termsZW", "Indicative terms and basis of access ratings – Zimbabwe", [
    ["Term loans", "USD loans short-tenor; ZiG lending to productive sectors capped at 22.5% under the Targeted Finance Facility", "Mostly under 2 years", "Varies", "Fixed property; communal land under RDCs not accepted", "Low: tenors too short for capex"],
    ["Working capital", "Commercial USD rates", "Up to 12 months", "Varies", "Cash flow, debtors", "Medium: common but costly; seasonal structures rare"],
    ["Guarantees (ECGC)", "Fee and cover ratio not published", "As underlying loan", "Target of about USD 60m for 200 SMEs (2023)", "Partial collateral replacement", "Low–Medium: all-sector; tourism uptake unknown"],
    ["Micro-loans (MFIs, ZWMB, EmpowerBank)", "High (often priced monthly)", "Months", "Small", "Group or asset", "Medium: women and youth targeting"],
    ["Grants", "Not applicable", "One-off", "Varies", "None", "Low–Medium: important given limits on multilateral lending"],
    ["Revolving funds", "Concessional (Tourism Revival Fund)", "Short", "USD 15m fund; low uptake", "Bank intermediation", "Low: redesign needed"],
    ["Leasing / asset finance", "Commercial USD", "2–4 years", "Vehicles and boats", "The asset; RBZ collateral registry", "Medium"],
    ["Equity", "Not applicable", "Long-term", "Larger firms (VFEX)", "Ownership", "Very low"],
    ["Green finance", "PAYGo; IDBZ lines", "Varies", "Varies", "As loans", "Low–Medium"]]),
}
TERMS_HEAD = ["Product", "Indicative pricing", "Tenor", "Ticket size", "Collateral norm", "Basis of access rating"]
TERMS_W = [1300, 1800, 1100, 1300, 1500, 2026]

# ---------------------------------------------------------------- Regulatory build-in bullets (x.5 Key Frameworks)
REG_ADD = {
"Angola": "Recent rules relevant to account opening and data: simplified savings accounts with minimal know-your-customer (KYC) documentation; Law 5/20 on anti-money laundering, which requires enhanced checks on foreign-currency transfers such as safari deposits; Personal Data Protection Law 22/11, which restricts transfers of guest data abroad; and the BNA Financial System Innovation Laboratory (sandbox).",
"Botswana": "Recent reforms: the Banking Act 2023 (in force from 15 August 2025) replaced the 1995 Act; the Credit Information Act 2021 requires micro-lenders to report to credit bureaus; the Data Protection Act governs guest data; agency banking through rural shops is permitted; and Botswana is connected to SADC regional payment systems.",
"Namibia": "Recent reforms: the Financial Institutions and Markets Act (FIMA) and the NAMFISA Act took effect on 1 May 2026, consolidating non-bank financial regulation, including leasing, insurance and pensions, with plain-language and conduct requirements (the pension preservation rule was put on hold); account-opening requirements are relaxed for low-income clients; a dedicated data protection law is being developed.",
"Zambia": "Recent reforms: the Banking and Financial Services Act No. 9 of 2026 replaced the 2017 Act and repealed the Money-lenders Act, bringing all lenders under Bank of Zambia supervision and making unlicensed lending illegal; bank accounts follow three KYC tiers; and the Data Protection Act No. 3 of 2021 governs guest data.",
"Zimbabwe": "Recent rules: low-KYC accounts and widespread agency banking under the National Financial Inclusion Strategy; the Cyber and Data Protection Act [Chapter 12:07], enforced by POTRAZ; and the Money Laundering and Proceeds of Crime Act, which requires documentation of foreign guest payments.",
}
INFORMAL_BARRIER = {
"Angola": "Most micro-enterprises in the corridor are informal (about 92% of self-employed businesses nationally), so they cannot meet the registration and certification requirements of public credit lines.",
"Botswana": "Most MSMEs are informal (84%) and micro (91%), so few can meet CIPA registration, tax and collateral requirements; commercial banks rate their appetite for micro and informal borrowers Medium to Low.",
"Zambia": "About 96% of enterprises are not registered with PACRA, which excludes them from bank, guarantee-backed and most CEEC products.",
}

# ---------------------------------------------------------------- What this means (country closes)
CLOSES = {
"Angola": [
    ("h2", "#.# What This Means for MSME Finance"),
    ("p", "Angola has the instruments but not yet the market or the reach. The national credit guarantee fund is active and has grown quickly through microcredit companies, and PRODESI lines offer below-market rates, but in the Angolan Okavango there is one confirmed bank, no confirmed microfinance institution, and a tourism economy only now taking shape around new investments such as Luiana Plains Safaris and the planned Mavinga airport. Most enterprises are informal and save through kixikila rather than in banks, so they cannot meet the registration and certification requirements of public credit lines. Those excluded are, in effect, almost all micro-enterprises in the corridor, and Angola has no survey data on owners’ gender and age in tourism; INAPEM’s EMPODERA ELA programme for women is a target rather than a result (GIZ, 2026, p. 29)."),
    ("p", "For finance design, this means a readiness-first approach: grants and technical assistance that move enterprises along a formalisation pathway; a tourism sub-window in the FGC microcredit line with seasonal repayment; and small asset finance for boats, transport and solar. Because Angola is also an OKACOM member, the CORB Fund is a natural co-funder for community livelihood and solar investments in the headwaters."),
],
"Botswana": [
    ("h2", "#.# What This Means for MSME Finance"),
    ("p", "Botswana’s problem is product fit, not institutions. Citizens can reach CEDA, LEA, the Youth Development Fund and the Chema Chema Fund, and the tourism market is the deepest in KAZA, but concession and tribal-land leases are not bankable, there is no credit guarantee scheme, and repayment schedules ignore seasonality. CEDA, the most important lender to citizen tourism businesses, faces liquidity pressure and governance scrutiny. Those most excluded are informal micro-operators such as polers, crafters and caterers in the Okavango and Chobe Enclave villages. Women own 47% of MSMEs, but 96% of women-owned firms are micro and earn on average four times less (FinScope 2024, in GIZ, 2026, p. 34), more women are entering mokoro operations and need small start-up loans, and Women’s Finance House is winding down."),
    ("p", "For finance design, this means building on what works: scaling the Wilderness–Stanbic contract-backed supplier finance to other anchor operators and banks, creating a guarantee facility (for example with the African Guarantee Fund) and a CEDA tourism window with seasonal repayment, and a graduation path from Chema Chema to CEDA. Botswana’s Okavango Delta trusts are also within the CORB basin, which opens a route to CORB Fund co-financing for community enterprises."),
],
"Namibia": [
    ("h2", "#.# What This Means for MSME Finance"),
    ("p", "Namibia has the best national toolkit but a weak base in its KAZA corridor. The development bank, the national guarantee scheme, two GCF-accredited green financiers and the Community Conservation Fund all exist, yet the Zambezi and Kavango regions hold only about 484,000 people, bank branches cluster in Katima Mulilo and Rundu, the development bank reports low loan off-take in Zambezi, and tourism accounts for only about 4% of guarantees. Informal micro-enterprises, which account for 74% of employment in Zambezi, cannot reach the development bank at all. Women and young people dominate informal trade (most stationed traders in Rundu are women, and over 95% of informal enterprises are youth-owned in one survey), while only 22% of conservancy staff are women and tourism was 6 of the 159 SMEs backed by NASRIA in 2025–26 (GIZ, 2026, pp. 71, 120)."),
    ("p", "For finance design, this means taking the national instruments to the corridor: a tourism and KAZA window in the guarantee scheme that accepts conservancy leaseholds and joint-venture contracts as alternative security, digital group savings accounts (such as FNB weSave) as the entry rung for community groups, conservancy-based revolving funds, and EIF green asset finance. The CORB Fund and the newly capitalised community conservation funding (Namibia for Life) can provide grant and first-loss layers."),
],
"Zambia": [
    ("h2", "#.# What This Means for MSME Finance"),
    ("p", "Zambia is ready to pilot. Its credit guarantee scheme is expanding fast, Livingstone concentrates tourism demand and lenders in one place, savings groups are widespread, and the World Bank tourism project brings community matching grants. What is missing is affordable credit (commercial rates commonly above 25%) and any finance reach into the Game Management Areas around Kafue and Sioma, where enterprises operate on customary land. Those excluded are the 96% of enterprises not registered with PACRA. Women own 72.2% of micro-establishments and 60.9% of the MSME base, and 37.4% of MSMEs are owned by people under 35 (GIZ, 2026, p. 46), so a design that requires registration and collateral would exclude most women and young operators."),
    ("p", "For finance design, this means a ring-fenced tourism window in the guarantee scheme with seasonal repayment, delivered through partner banks in Livingstone and linked to business support (for example Prospero’s supplier-development model with lodges as anchors), combined with graduation from savings groups to microfinance and mobile-money savings in Simalaha and Sioma."),
],
"Zimbabwe": [
    ("h2", "#.# What This Means for MSME Finance"),
    ("p", "Zimbabwe is ready to pilot, provided the design learns from past failures. Victoria Falls and Hwange offer a deep tourism market and many anchor buyers, the national MSME guarantee scheme names tourism as a target sector, and mukando is the main financial system for small businesses, mostly in US dollars. What is missing is long-tenor credit, published data on guarantee volumes and claims, and a facility that operators trust: the Tourism Revival Fund was barely used because of currency and process concerns. Those excluded are informal operators, who make up 76% of establishments; 60% of MSME owners are women (96% of women-owned firms are micro or smaller) and 37% are aged 18–35 (FinScope 2022, in GIZ, 2026, p. 52)."),
    ("p", "For finance design, this means USD-denominated, contract-backed loans guaranteed by ECGC through Victoria Falls banks, anchored by large operators, alongside group lending with asset leasing modelled on the Zimbabwe Women’s Microfinance Bank and links between savings groups, microfinance institutions and the Hwange Conservation and Wildlife Fund. The November 2025 merger of 11 local-authority licences into one unitary business licence is an opportunity to make the council licence a starter-tier credential."),
],
}

# ---------------------------------------------------------------- New chapter 8
CH8 = [
    ("h1", "#. MSMEs and Communities Living Adjacent to Protected Areas"),
    ("lead", "In brief: the people living next to Chobe, the Okavango Delta, Bwabwata, Kafue, Hwange and Luengue-Luiana are the intended beneficiaries of regenerative tourism, but most of their enterprises are informal and few meet formal lending criteria. Community trusts, conservancies, cooperatives and savings groups reach them; bank branches, agent points and reliable networks mostly do not. The finance design should meet them through groups and a formalisation pathway, starting with the local authority licence they are most likely to hold."),
    ("h2", "#.# Who These Communities Are"),
    ("p", "This chapter concerns communities living adjacent to protected areas in the KAZA corridor: villages and settlements next to or inside national parks, game reserves, Wildlife Management Areas, Game Management Areas, conservancies and CAMPFIRE wards. Many residents are descendants of people who have lived on and used this land for generations, and they include, to some extent, indigenous peoples such as San communities in parts of all five states. The report does not profile each group; it shows where these communities are already catered for by finance and support, and where the gaps are."),
    ("p", "They matter to regenerative tourism for a simple reason: people from the land should benefit from the land. Communities next to protected areas carry most of the costs of living with wildlife, from crop losses to restricted access to resources, and regenerative tourism is only regenerative if they also share in the value it creates, as owners, suppliers and workers, not only as recipients of levies. The macro diagnostic separates community benefit from community enterprise ownership: revenue shares, levies and wages do not by themselves create local suppliers or owners (GIZ, 2026, p. 133)."),
    ("p", "Following the macro diagnostic’s operational definition, an enterprise is in scope if it “operates within, adjacent to, supplies into or derives a meaningful commercial relationship from” the KAZA tourism and nature-based economy, with formalisation treated as progressive (GIZ, 2026, pp. 135–136). Conservancies, community trusts and other CBNRM structures remain ecosystem actors unless they run a separately identifiable trading entity; in this report they act as channels and sources of capital, so finance reaches communities through cooperatives, producer groups and community-owned enterprises."),
    ("h2", "#.# Most Enterprises Are Informal"),
    ("p", "Most enterprises in these communities are informal, so few will meet formal lending criteria. National figures put informality above 60% in every Partner State, and rural areas next to the value chains are more informal still ({T:informality}). The macro diagnostic’s own MSME survey skews towards registered companies (15 of 19 respondents in Zimbabwe and 18 of 24 in Botswana), so it is unlikely to describe the least visible operators (GIZ, 2026, p. 125). Some operators are informal not by choice but because it is the only trade they know; others value flexibility; and many are kept out by the time and cost of registration, which 70% of informal firms in Zimbabwe cite (GIZ, 2026, p. 125; Bank of Namibia, 2025). Informal operators are not resistant to formal practice: 71% of informal owners in Botswana and Zimbabwe say they would formalise if assisted or if it were free and better explained."),
    ("tbl", "informality", "Informality evidence by Partner State",
     ["Area", "Informality figures", "What this report records", "Scope and caveat"],
     [["Angola", "About 60% of the economy informal; 92% of self-employed businesses informal (GIZ, 2026, p. 28; AFI, 2026)", "One confirmed bank and no confirmed MFI in Cuando Cubango/Menongue; kixikila widespread; 76% of Angolans save nothing", "Economy-wide; no tourism cut"],
      ["Botswana", "84% of MSMEs informal; 91% micro; 71% would formalise if assisted (FinScope 2024, in GIZ, 2026, p. 34)", "Bank appetite for micro and informal borrowers Medium/Low; Chema Chema Fund targets informal, women and youth entrepreneurs", "National survey; Chobe District holds 0.4% of MSMEs"],
      ["Namibia (Zambezi, Kavango)", "Informal employment: Zambezi 74.4%, Kavango West 69.9%, Kavango East 65.3%; rural 78.9% vs urban 41.8%; accommodation and food 68.6% (Bank of Namibia, 2025)", "DBN gives no access to informal and micro-enterprises; stokvels could pool joint-venture wages", "Employment-based, 2018 labour force survey"],
      ["Zambia", "1,553,892 MSMEs: 98.8% micro, 95.6% unregistered with PACRA; 823 licensed tourism enterprises (GIZ, 2026, pp. 43, 46)", "Chilimba and VSLAs widely used; savings-group coverage High", "Registration status, not informality as such"],
      ["Zimbabwe", "84% informal (94% not registered); 76.1% of establishments informal (ZIMSTAT 2025); 71% would formalise if free and better explained (FinMark Trust, 2022; GIZ, 2026, pp. 52, 125)", "37% of business owners use mukando against 1% with bank credit", "National; no accommodation and food cut"],
      ["Sesheke–Katima Mulilo crossing", "3,422 informal cross-border traders counted at Katima Mulilo (1,459 female), 28.1% of Namibia’s informal cross-border trade", "Cross-border MSMEs appear only under Univisa and payments", "One crossing; trade in goods"]],
     [1500, 3000, 2600, 1926]),
    ("p", "Evidence on what helps is limited and not KAZA-specific, but consistent. A randomised study in Benin found that information alone barely changed registration, that added support services raised it by up to 16 percentage points, and that formalised firms did not gain significantly higher profits or credit access (Benhassine et al., n.d.). A quasi-experimental study in rural Zambia associated savings-group membership with 15–38% higher weekly household spending (Mwansakilwa et al., 2017). ILO Recommendation 204 asks governments to simplify registration and tax regimes for micro and small units and to widen inclusive financial services (ILO, 2015a). The lesson is to offer formalisation support where it unlocks a specific buyer contract, grant or loan."),
    ("h2", "#.# Support These Communities Can Already Reach"),
    ("p", "Communities adjacent to protected areas are not without support. Five types of institution already reach them, unevenly ({T:supportmap}): community trusts and conservancies that hold tourism rights and earn lease and joint-venture income; cooperatives, producer groups and savings groups; tourism operators that rent concessions from conservation trusts and buy locally; rural development and empowerment initiatives; and government market spaces and craft centres where informal traders sell to visitors. Benefit flows are common but poorly measured: in the macro-diagnostic survey, 33 of 71 MSMEs work with a community group or share revenue and 47 buy from local suppliers, but only 14 track community revenue share (GIZ, 2026, p. 63)."),
    ("tbl", "supportmap", "Support available to communities adjacent to protected areas",
     ["Country", "Community trusts and conservancies", "Cooperatives and groups", "Operators renting from trusts / local buyers", "Rural development initiatives and market spaces", "Main gaps"],
     [["Angola", "No statutory CBNRM framework; benefits arranged contract by contract", "Kixikila; agricultural cooperatives (FADA)", "Luiana Plains Safaris; expedition operators", "PRODESI; INAPEM (EMPODERA ELA); HALO Trust employment", "No community tourism rights; very thin support"],
      ["Botswana", "CBNRM Community Trusts (e.g. Okavango Kopano Mokoro, Khwai, Mababe, Sankuyo, Chobe Enclave)", "Motshelo; SACCOS; craft groups", "Wilderness, Desert & Delta and others in trust concessions", "LEA, Chema Chema Fund, YDF; council market stalls in Maun and Kasane", "Trust governance varies; micro-operators outside trusts"],
      ["Namibia", "Communal conservancies and community forests; CCFN; GPTF", "Stokvels; women’s craft cooperatives", "Joint-venture lodges (e.g. Nambwa, Namushasha)", "DBN SME Centre; regional councils; craft centres", "Weak bank reach; conservancy benefits uneven"],
      ["Zambia", "Community Resource Boards; Simalaha Community Conservancy; chiefdom initiatives (e.g. Mukuni)", "VSLAs; chilimba", "Livingstone and Kafue lodges", "CEEC; Constituency Development Fund; Livingstone markets", "Revenue to CRBs delayed; GMAs remote"],
      ["Zimbabwe", "CAMPFIRE through RDCs (e.g. Ngamo: 60% community, 36% RDC, 4% CAMPFIRE Association)", "ISALs; mukando; women’s groups", "Imvelo and other Hwange operators", "SMEDCO, EmpowerBank, ZWMB; Victoria Falls curio markets", "Revenue recentralised by local authorities; council rents high"]],
     [1100, 1900, 1400, 1500, 1700, 1426]),
    ("p", "The Zimbabwean examples show both sides. Ngamo’s CAMPFIRE arrangement has a defined sharing rule and about 90% local staff, but a counter-study found revenue “recentralised by the local authority” and jobs skewed towards menial and seasonal work (GIZ, 2026, p. 54). Informal curio traders at Victoria Falls report harassment by municipal police, stalls far from tourists and high council rents, and a qualitative study recommended associations and cooperatives to gain bargaining power and cheaper finance (African Journal of Hospitality, Tourism and Leisure, 2017)."),
    ("h2", "#.# Access to Finance in Practice"),
    ("p", "For a community operator, access to finance starts with a business bank account, and that is where most stop. To open a business account, banks typically ask for a registration certificate from the company registrar, the national identity documents of the owners, proof of address, a tax number and often a trading licence from the council. An informal operator has none of these except an identity document and, perhaps, a council licence or trader permit. Without a business account there is no transaction record, without a record there is no credit history, and without a credit history there is no loan."),
    ("p", "There are lower rungs. All five states now allow simplified or tiered accounts for individuals with minimal documentation (simplified savings accounts in Angola, three KYC tiers in Zambia, low-KYC accounts in Zimbabwe and relaxed requirements for low-income clients in Botswana and Namibia), and mobile-money wallets can be opened with a national identity document. Group accounts are a further route: a savings group, cooperative or trust can open an account as an entity, and FNB Namibia’s weSave product offers fee-free digital group savings accounts for 3 to 90 members. These accounts give groups a transaction record that can later support a group or individual loan. In practice, a starter tier for finance could accept a council licence or trader permit plus a letter from a recognised group, with milestones towards registration, following the tiered approach in FATF guidance on simplified due diligence (GSMA, n.d.)."),
    ("h2", "#.# Financing Infrastructure Available to These Communities"),
    ("p", "{T:infra} summarises the physical and digital infrastructure that supports finance for communities adjacent to protected areas. The pattern is the same in every state: services exist in the hub towns and thin out sharply in the villages where most community enterprises operate. Where the table records a gap, the infrastructure is absent or unreliable, not merely under-used. Closing these gaps is a matter for governments, regulators and network operators; the programme’s role is to design finance that works within them, for example through USSD-based payments and group accounts."),
    ("tbl", "infra", "Financing infrastructure for communities adjacent to protected areas (qualitative assessment)",
     ["Country", "Bank branches and ATMs", "Agent banking points", "Mobile money and USSD", "Network coverage", "Community accounts, savings groups and revolving funds"],
     [["Angola (Cuando, Cubango)", "Menongue only (one confirmed bank in the corridor); absent in Mavinga, Rivungo, Dirico", "Limited; few agents outside Menongue", "Unitel Money, Afrimoney, Multicaixa Express; limited in rural Cuando", "Sparse; absent across much of Luengue-Luiana and Mavinga", "Kixikila widespread; no community revolving funds; no community tourism accounts"],
      ["Botswana (Chobe, Ngamiland)", "Kasane and Maun; absent in Delta and Enclave villages", "Permitted through shops and fuel stations; thin in remote villages", "Orange Money, MyZaka, Smega, all with USSD", "Good in towns; patchy in the Delta, Khwai and the Chobe Enclave", "Trust bank accounts; motshelo; SACCOS; no structured community revolving fund identified"],
      ["Namibia (Zambezi, Kavango)", "Katima Mulilo and Rundu; few elsewhere", "Limited", "Bank e-wallets (FNB eWallet, EasyWallet) and MTC mobile money, usable by USSD", "Along the B8 corridor; patchy in conservancies away from the road", "Conservancy accounts; stokvels; FNB weSave group accounts; conservancy funds"],
      ["Zambia (Southern, Western)", "Livingstone, Kazungula, Sesheke, Mongu, Mumbwa; absent in most GMAs", "Mobile-money agents widespread in towns", "MTN MoMo, Airtel Money, Zamtel Kwacha with USSD", "Patchy in GMAs around Kafue and Sioma", "CRB accounts; very high VSLA coverage; CEEC funds"],
      ["Zimbabwe (Matabeleland North)", "Victoria Falls and Hwange; absent in most of Binga and Tsholotsho", "Widespread agents in towns", "EcoCash (dominant), OneMoney, InnBucks with USSD", "Patchy in Binga, Tsholotsho and around Hwange NP", "RDC and ward CAMPFIRE accounts; ISALs and mukando; Hwange Conservation and Wildlife Fund"]],
     [1300, 1600, 1300, 1600, 1500, 1726]),
    ("note", "Data gap: no corridor-level mapping of bank branches, agent points or network coverage was found. The table is based on provider information, the country chapters and stakeholder input, and should be validated, for example with national access-point surveys and network operators’ coverage maps."),
    ("h2", "#.# Who Regulates Micro Enterprises: Councils, Licences and Finance"),
    ("p", "In the micro segment, the regulator an operator meets first is usually the municipality, town council or district council, not the company registrar. Councils issue trading licences and trader permits, allocate market stalls and collect rents. For finance, the consequence is that the bodies that regulate micro-operators are not the bodies that hold the data lenders use. {T:tracks} sets out the three regulatory tracks that apply to a micro tourism operator, and {T:whoregulates} shows the picture in each state."),
    ("tbl", "tracks", "Three regulatory tracks that apply to a micro tourism operator",
     ["Track", "Who administers it", "What it asks of the operator", "Why it matters for finance"],
     [["1. Local trading", "Municipality, town, district or rural district council", "Trading licence or trader permit, market stall and rent, zoning, health and environmental approvals", "Often the only record a micro-operator holds, but local, paper-based and uneven; lenders seldom use it"],
      ["2. Tourism regulation", "Tourism regulators (e.g. NTB, Zambia Tourism Agency, ZTA) plus park and environment bodies", "Registration, grading and levies; in Zimbabwe ZTA, ZimParks, RDC, EMA and council licences overlap", "Namibia: registration and grading costs high relative to micro-enterprise turnover. Zambia: 823 licensed tourism enterprises against 40,933 accommodation and food establishments (GIZ, 2026, pp. 43, 72)"],
      ["3. Registry and tax", "Company and business-name registries (e.g. CIPA, BIPA, PACRA) and tax authorities", "Registration, tax clearance and VAT registration", "The gateway for finance. Suppliers without tax clearance can face a 30% withholding tax at source; food suppliers around Hwange face a VAT registration constraint (GIZ, 2026, pp. 74–75, 84)"]],
     [1500, 2200, 2400, 2926]),
    ("tbl", "whoregulates", "Who regulates micro enterprises in each Partner State",
     ["Country", "Role of the municipality or council", "Registry and national requirements", "Source and caveat"],
     [["Angola", "Municipal administrations issue commercial licences and collect fees, but licensing rules are set nationally; the 2025 fee for a shop under 199 m² is Kz 148,398; low-risk activities are exempt", "Registration, INAPEM certification and tax compliance are prerequisites for public credit lines", "Expansão (2021, 2025b)"],
      ["Botswana", "Trade licences decentralised to district councils; Kasane, Maun and Chobe councils issue trading licences", "Application needs a registration certificate, annual returns, proof of premises, zoning and environmental-health reports and an Omang", "Government of Botswana (n.d.); the council licence sits at the end of a registry document chain"],
      ["Namibia", "Informal enterprises register mainly through municipal licences or permits; councils keep trader registers and collect market rents of N$40–400 a month; zoning does not accommodate informal trade", "Most micro-enterprises are not registered with authorities or councils; fewer than 1% with the Social Security Commission", "Bank of Namibia (2025); economy-wide"],
      ["Zambia", "Livingstone City Council issues trade licences; the Business Regulatory Act 2014 sets up PACRA-led service centres in local-authority premises", "“Business” is defined by registration under the Companies Act or Business Names Act; 95.6% of enterprises are unregistered", "Republic of Zambia (2014); enforcement varies by council"],
      ["Zimbabwe", "City councils and RDCs license and levy; a November 2025 reform merged 11 local-authority licences into one unitary business licence, capped small-business fees at USD 500 and halved hotel and lodge fees", "RBZ credit and collateral registries; local-authority rollout of reforms at 31% by September 2026", "allAfrica (2025), a press report; GIZ (2026, p. 50)"]],
     [1200, 3000, 2600, 2226]),
    ("p", "Four implications follow. First, a council licence is weak evidence for a lender, because finance runs through registration, tax and credit records. Second, the pipeline is hard to see: no Partner State has a tourism-specific MSME census, so council trader registers are the nearest thing to a list. Third, compliance costs arrive as lump sums, which is why Namibian groups use stokvels to pool money for NTB registration fees. Fourth, a starter tier could accept a council licence or trader permit plus a group letter, with milestones towards registration. The risks are local capture of revenue, enforcement that varies with local politics (Africa Portal, 2019) and uneven council capacity. Whether a council licence satisfies the entry rules of the national guarantee schemes (ZCGS, CGS, ECGC and FGC) was not established and should be confirmed with the scheme administrators."),
    ("h2", "#.# Women and Young People"),
    ("p", "Women and young people make up much of the micro and informal segment, so a design based on registry documents would miss most of them. {T:genderage} brings together the available evidence. Most figures are national or MSME-wide rather than tourism-specific; where the data do not allow disaggregation, the table says so, and this is recorded as a data gap."),
    ("tbl", "genderage", "Women and young people among micro-operators, by Partner State",
     ["Area", "Women", "Young people", "Scope and caveat"],
     [["Zambia", "72.2% of micro-establishments female-owned against 30.1% of regular ones (2025 census); 60.9% of the MSME base female-owned; 40.2% of 72,108 accommodation and food workers are women", "37.4% of MSMEs owned by under-35s; about 51% of accommodation and food workers aged 19–34; 53.5% informally employed", "Only labour force figures are tourism-related; no tourism-MSME ownership split (GIZ, 2026, p. 46)"],
      ["Zimbabwe", "60% of MSME owners are women; 96% of women-owned firms are micro or smaller", "37% of owners aged 18–35; 82% earn USD 200 a month or less", "National MSME survey (FinScope 2022, in GIZ, 2026, p. 52); no tourism cut"],
      ["Botswana", "47% of MSMEs female-owned; 96% of these are micro and earn on average four times less; more women entering mokoro operations", "YDF grant–loan packages; Chema Chema Fund targets youth", "National data (FinScope 2024, in GIZ, 2026, pp. 34, 69)"],
      ["Namibia", "Informality most prevalent among adult women; most stationed traders in Rundu are women; only 22% of conservancy staff are women", "Over 95% of informal enterprises youth-owned (UNDP 2021 survey); of 159 NASRIA-backed SMEs in 2025–26, 25% female-owned, 28% youth-owned; tourism 6 SMEs", "Regional, mostly non-tourism; youth bands differ (Bank of Namibia, 2025; GIZ, 2026, pp. 71, 120)"],
      ["Angola", "INAPEM’s EMPODERA ELA aims to formalise 2,000 informal women and capitalise 400 women-led start-ups", "No statutory youth band; 15–35 used for reporting", "A programme target, not a result (GIZ, 2026, p. 29); data gap"],
      ["KAZA MSME survey", "29 of 71 respondents woman-owned or led; women are 62% of full-time and 69% of part-time or seasonal employees", "Youth-owned enterprises a smaller category", "Survey skews formal (GIZ, 2026, pp. 62, 120)"],
      ["Africa and tourism context", "74% of women’s non-agricultural employment in Sub-Saharan Africa is informal against 61% of men’s; women are 54% of tourism workers and earn 14.7% less", "At least 80% of young workers informal in eight survey countries", "Continental or global (ILO, 2015b; UNWTO and UN Women, 2019)"]],
     [1300, 3000, 2600, 2126]),
    ("p", "Three design points follow. Institutions built for women are fragile: Zimbabwe Women’s Microfinance Bank reports liquidity constraints and Women’s Finance House in Botswana is winding down. Ownership tests, such as Namibia’s 51% rule, are hard to evidence for home-based operators, and ownership does not establish control (GIZ, 2026, p. 120). Young entrants have no trading history or collateral and often work seasonally, so a trader permit and a group letter may be all they can show. Pilots should record owners’ sex and year of birth at intake (not an age band, since bands differ by country), with consent, so that results can be reported for women and youth."),
    ("h2", "#.# Data Gaps"),
    ("p", "Nobody can currently say how many informal tourism businesses exist in the KAZA corridor. In all five states, data on the informal sector sit mostly with municipalities and city councils, in records such as hawkers’ licences and trader permits, and these records have not been digitised or included in capacity building. An informal-sector database is reported to be held by LEA in Botswana, but it was not accessible for this study, and its contents are not reported here. The roundtable input of a city council participant confirmed the central role of councils and the need to include them as stakeholders in tourism and enterprise planning. Ministries responsible for local government should consider digitising council registrations, as has been done for company registrars, so that informal enterprises become visible to programmes and lenders."),
    ("h2", "#.# The MSME Voice"),
    ("p", "Most of the evidence in this report comes from financial institutions, agencies and published sources describing the problems MSMEs face; the enterprises themselves have not yet spoken. A short round of 3–4 individual interviews per country (about 30 minutes each, 3–4 questions on funding history, demand for finance and what keeps them from it) is planned with MSMEs the programme team already works with, including community groups reached directly or through partners such as UNDP rather than through government officials. Owners’ gender and age will be recorded. The interview guide is at Annex B."),
    ("note", "[[MSME interview findings to be inserted here once the interviews are complete: summarise by country and by owners’ gender and age, and weave the main points into chapters 3–7 and 9.]]"),
    ("h2", "#.# What This Means for Finance Design"),
    ("p", "For communities living adjacent to protected areas, the finance ladder has to start lower than banks and guarantees. The entry rungs are pilot mechanism 5 (a readiness and grant-to-loan facility) and mechanism 3 (community revolving funds linked to savings groups) in {T:old39}, ahead of the loans and guarantees in mechanisms 1 and 2. Informal and community-linked enterprises should be named as a target group within the value-chain segments, with a starter tier that accepts a recognised group (a cooperative, savings group or the trading arm of a community body) before individual registration, and with explicit access conditions for women and youth."),
    ("p", "Formalisation support should be linked to a specific commercial step, such as a buyer contract, a grant or a loan, and use simplified compliance routes. Any loan should be tied to an identified buyer (GIZ, 2026, p. 147) and monitored for over-indebtedness (GIZ, 2026, p. 65). One simple indicator set should apply across the pilots: community revenue shared, local suppliers used, local jobs, and the share of operators who are informal or group-recognised, disaggregated by owners’ gender and age. Finally, the segment should be validated through short focus groups with savings-group, cooperative and informal-trader leaders in each hub before products are designed."),
]

# ---------------------------------------------------------------- Synthesis: scoring rules (new 9.2)
SCORING = [
    ("h2", "#.# Readiness Ranking: Scoring Rules and Results"),
    ("p", "The readiness ranking answers one question: how ready is each country to pilot an MSME-tailored financial mechanism in its KAZA corridor now? It scores each country from 0 to 5 on six criteria that reflect the building blocks of a bankable route to R-NBT MSMEs, weights them, and adds them up. {T:scoring} shows the criteria, weights and scores; {T:scale} explains what each score point means."),
    ("tbl", "scale", "What each readiness score point means",
     ["Score", "Meaning"],
     [["0", "Absent: no instrument, provider or market of this kind"],
      ["1", "Nascent or very weak: exists in name or on a very small scale"],
      ["2", "Present nationally but not reaching corridor MSMEs"],
      ["3", "Functioning in the corridor, with major gaps"],
      ["4", "Functioning in the corridor, with minor gaps"],
      ["5", "Strong and proven for tourism MSMEs in the corridor"]],
     [1200, 7826]),
    ("tbl", "scoring", "Readiness ranking: criteria, weights and scores",
     ["Criterion (evidence used)", "Weight", "Angola", "Botswana", "Namibia", "Zambia", "Zimbabwe"],
     [["1. Guarantee or development lender that reaches tourism MSMEs (scheme reach, partner lenders, tourism uptake)", "20%", "2", "1", "3", "5", "4"],
      ["2. Lenders present in the KAZA corridor (branches, MFIs, agents in hub towns)", "20%", "1", "4", "2", "4", "4"],
      ["3. Tourism market depth and anchor buyers in the corridor (visitor volumes, lodge groups, DMCs)", "20%", "1", "5", "3", "4", "5"],
      ["4. Community and informal finance base (savings groups, community trusts, revenue-sharing)", "15%", "2", "3", "4", "5", "5"],
      ["5. Business support linked to finance (BDS tied to lending, supplier development)", "15%", "1", "4", "3", "3", "3"],
      ["6. Macroeconomic and currency stability (inflation, policy rates, currency regime)", "10%", "1", "3", "5", "3", "1"],
      ["**Weighted score (out of 5)**", "100%", "**1.4**", "**3.4**", "**3.2**", "**4.1**", "**3.9**"],
      ["**Readiness band**", "", "Emerging", "Ready with adjustments", "Ready with adjustments", "Ready to pilot", "Ready to pilot"]],
     [2726, 800, 1000, 1100, 1100, 1100, 1200]),
    ("note", "Bands: 3.75 and above = ready to pilot now; 2.50–3.74 = ready with adjustments; below 2.50 = emerging (readiness first). Scores are the author’s judgement on the evidence in chapters 3–8 and should be validated with stakeholders."),
    ("p", "In plain terms: Zambia and Zimbabwe score highest because the Victoria Falls–Mosi-oa-Tunya hub brings together an active guarantee scheme, lenders a short distance away and a tourism market large enough to generate MSME revenue; Zimbabwe’s lower macroeconomic score is offset by its strong market and informal savings base. Botswana and Namibia have stronger national institutions but score lower on the criteria that matter in the corridor: Botswana has no guarantee scheme, and Namibia’s instruments rarely reach the sparsely populated Zambezi and Kavango regions. Angola scores lowest on every corridor criterion. A higher score does not mean finance is easy to obtain; it means a pilot has the building blocks to start."),
]

# ---------------------------------------------------------------- Common barriers (narrative replacement)
BARRIERS = [
    ("p", "The same six barriers appear in every country, although their weight differs."),
    ("p", "**Collateral and product design.** Tenure on communal, customary and concession land is not bankable, and movable-collateral registries are under-used. Loans are designed for borrowers with steady monthly income, so amortisation schedules ignore tourism seasonality, and minimum loan sizes and transaction costs are too high for micro-enterprises."),
    ("p", "**Information.** Limited records, informality and weak credit histories make MSMEs hard to assess, and lenders lack knowledge of the R-NBT sector. Shock exposure (pandemics, droughts, human–wildlife conflict and currency swings) raises the perceived risk further."),
    ("p", "**Informality.** Most micro-enterprises in the KAZA corridor are informal and unregistered, but size and informality are not the same measure: Botswana’s MSMEs, for example, are 91% micro and 84% informal (GIZ, 2026, p. 34). Registration time and cost, lump-sum compliance fees and tax penalties keep many operators out (GIZ, 2026, pp. 125–126), and most programmes and interventions are not designed for informal operators. Informal operators are commonly managed through municipalities, which have historically been excluded from tourism development planning, so municipalities should be engaged in programme design."),
    ("p", "**Physical and digital reach.** Branches, agents and reliable mobile networks are concentrated in hub towns, leaving communities adjacent to protected areas dependent on cash, savings groups and USSD where networks allow (section 8.5)."),
    ("p", "**Fragmented support.** Business support organisations, NGOs and financiers operate in silos, with weak pipelines of investment-ready MSMEs and no shared data on informal enterprises (section 8.8)."),
]

# ---------------------------------------------------------------- Harmonisation edits
HARM_ELIGIBILITY = "**Common R-NBT eligibility and screening framework:** a shared definition of regenerative tourism MSMEs, covering enterprises operating within, adjacent to or supplying into the KAZA tourism and nature-based economy, with environmental and social criteria and impact indicators that banks, guarantee schemes and DFIs can adopt."
HARM_DEFINITION = "**Common definition of tourism MSME:** a shared definition by size, with informality recorded as a separate attribute. Most micro-enterprises, typically with one owner and limited governance structure, are informal and need different programming, including a starter tier that accepts a recognised group. Formalisation is treated as progressive and tied to the enterprise’s next commercial step, not as an eligibility test (GIZ, 2026, p. 126)."
HARM_ADD = [
    "**KAZA–OKACOM alignment:** harmonised investment criteria, shared monitoring and a joint stakeholder platform between the CORB Fund and the KAZA Conservation Trust Fund for the basin states (section 2.6).",
    "**Council registration data:** support to ministries responsible for local government to digitise council trader registers and licences, so that informal enterprises become visible to programmes and lenders (section 8.8).",
]

# ---------------------------------------------------------------- Recommendations
DESIGN_ADD = [
    "Use group-based entry for informal and micro-enterprises: accept a recognised group (cooperative, savings group, trading arm of a community body) and a council licence or trader permit at the starter tier.",
    "Tie formalisation support to a specific commercial step (a buyer contract, grant or loan) rather than offering it in the abstract.",
    "Track one indicator set across pilots: community revenue shared, local suppliers used, local jobs and the share of operators informal or group-recognised, disaggregated by owners’ gender and age.",
]

SEC_10_3 = [
    ("h2", "#.# Facilitating a Formalisation Pathway: A Recommendation for Future Project Design"),
    ("p", "The findings show that the current project design does not fit micro-enterprises well: programme documents promise support to MSMEs, but every instrument starts from formal registration, while most micro-enterprises in all five states are informal. Future project design should therefore recognise informality explicitly and facilitate a formalisation pathway, without taking on the registration of businesses, which is outside the programme’s mandate."),
    ("p", "In practice, the pathway has four steps. An enterprise first joins or is recognised through a group (a savings group, cooperative, cluster or the trading arm of a community trust), which gives it access to group accounts, community revolving funds and readiness grants. It then obtains the local credential it can realistically get, usually a council trading licence or trader permit, which can serve as the starter-tier credential. Third, with support from existing routes such as the MSME LOOP training, LEA and its equivalents, and government registration support programmes, it registers with the company registrar and tax authority when a specific contract, grant or loan makes registration worth the cost. Finally, once formal, it becomes eligible for guarantee-backed loans, contract-backed supplier finance and asset finance. The programme’s role at each step is to connect enterprises to these existing routes and to design finance that rewards progress along the pathway."),
]

NEXT_STEPS_FIX = "Validate the financing demands of tourism MSMEs operating in the KAZA corridor, including informal and community-linked operators, through short focus groups with savings-group, cooperative and informal-trader leaders in each hub."
NEXT_STEPS_ADD = [
    "Review the existing MSME survey, agree 3–4 questions and the sample with the programme team, and interview 3–4 MSMEs per country (Annex B), recording owners’ gender and age; weave the results into chapters 3–9.",
    "Test the findings at the planned finance-stakeholder session in Gaborone (CEDA, NDB, LEA and others) and feed the results into the report.",
    "Confirm with ZCGS, CGS, ECGC and FGC whether a council licence or group recognition can satisfy their entry rules for a starter tier.",
    "Engage OKACOM and the KAZA Secretariat on aligning the CORB Fund and the KAZA Conservation Trust Fund.",
]

# ---------------------------------------------------------------- Glossary
GLOSSARY = [
    ("Access rating", "How easily a typical R-NBT MSME in the KAZA corridor can obtain a financial product (see section 1.6)."),
    ("Adjacent communities", "Communities living next to or within protected areas, Wildlife or Game Management Areas, conservancies and CAMPFIRE wards in the KAZA corridor."),
    ("Agent banking", "Basic banking services (deposits, withdrawals, payments) offered through shops, fuel stations or other agents on behalf of a bank or mobile-money provider."),
    ("Amortisation", "Repayment of a loan in instalments over its life."),
    ("Anchor buyer / anchor operator", "A large lodge, hotel group or DMC whose purchases from local suppliers provide the contracts on which supplier finance can be based."),
    ("Asset finance / leasing", "Finance to acquire a vehicle, boat or equipment in which the asset itself serves as security; in a lease the lender owns the asset until it is paid for."),
    ("Blended finance", "The combination of concessional or grant funding with commercial finance to make investments viable that commercial lenders would not finance alone."),
    ("CBNRM", "Community-based natural resource management: arrangements that give communities rights over, and benefits from, wildlife and natural resources on their land."),
    ("Collateral", "An asset that a borrower pledges to a lender and loses if the loan is not repaid."),
    ("Communal or customary land", "Land held by communities under traditional authority, which individuals cannot usually sell or mortgage."),
    ("Concession", "A right granted by the state or a community to operate tourism in a defined area for a set period."),
    ("Conservancy / community trust", "A legally registered community body that holds rights over wildlife and tourism in its area and can enter joint ventures with private operators."),
    ("Contract-backed (supplier) finance", "A loan to a supplier secured by its purchase contract with a buyer, such as a lodge; the buyer’s payments repay the loan."),
    ("Credit guarantee", "A promise by a guarantee scheme to repay part of a loan if the borrower defaults, which allows the bank to lend with less collateral."),
    ("Endowment fund", "A fund whose capital is invested permanently so that only the investment income is spent."),
    ("First-loss capital", "Funding that absorbs the first losses on a loan portfolio, protecting other lenders and encouraging them to lend."),
    ("Formalisation pathway", "The sequence of steps by which an informal enterprise becomes recognised, licensed and registered, with each step unlocking new finance or markets."),
    ("Informal enterprise", "A business that is not registered with the company registrar or tax authority; it may still hold a council licence or trader permit."),
    ("KYC (know your customer)", "The identity and address checks a financial institution must carry out before opening an account; tiered KYC allows simpler checks for small accounts."),
    ("Matching grant", "A grant that requires the recipient to contribute a share of the investment."),
    ("Microfinance", "Small loans, savings and other services for micro-enterprises and low-income households, often using group guarantees instead of collateral."),
    ("Movable-collateral registry", "A public register that allows movable assets (vehicles, equipment, receivables) to be used as loan security."),
    ("Prime / policy rate", "The central bank’s policy rate is the benchmark for interest rates; the prime rate is the rate banks charge their lowest-risk borrowers, and MSME loans are usually priced at prime plus a margin."),
    ("Readiness score", "The 0–5 weighted score used to rank countries’ readiness to pilot MSME finance mechanisms (section 9.2)."),
    ("Regenerative nature-based tourism (R-NBT)", "Tourism and its supply chains that actively restore ecosystems and strengthen host communities and local economies, rather than only limiting harm."),
    ("Revolving fund", "A pool of money that is lent out and re-lent as repayments come in."),
    ("Savings group (VSLA, ROSCA)", "A self-managed group whose members save regularly and lend to each other; known locally as kixikila (Angola), motshelo (Botswana), stokvel (Namibia), chilimba (Zambia) and mukando (Zimbabwe)."),
    ("Seasonal repayment", "A repayment schedule that requires larger payments in the high tourism season and smaller or no payments in the low season."),
    ("Sinking fund", "A fund intended to be spent down over a set period."),
    ("Tenor", "The length of time over which a loan is repaid."),
    ("Ticket size", "The amount of a loan, grant or investment."),
    ("USSD", "Unstructured Supplementary Service Data: a menu-based mobile channel that works on any phone without internet, widely used for mobile money."),
    ("Working capital", "Short-term finance for stock, wages and running costs."),
]

# ---------------------------------------------------------------- Acronyms to add
ACRONYMS_ADD = [
    ("AML/CFT", "Anti-Money Laundering and Countering the Financing of Terrorism"),
    ("BIPA", "Business and Intellectual Property Authority (Namibia)"),
    ("CIPA", "Companies and Intellectual Property Authority (Botswana)"),
    ("CORB", "Cubango-Okavango River Basin"),
    ("CRIDF", "Climate Resilient Infrastructure Development Facility"),
    ("CTF", "Conservation Trust Fund"),
    ("FATF", "Financial Action Task Force"),
    ("FIMA", "Financial Institutions and Markets Act (Namibia)"),
    ("GBFF", "Global Biodiversity Framework Fund"),
    ("GEF", "Global Environment Facility"),
    ("ILO", "International Labour Organization"),
    ("INAPEM", "Instituto Nacional de Apoio às Micro, Pequenas e Médias Empresas (Angola)"),
    ("KYC", "Know Your Customer"),
    ("MoPR", "Monetary Policy Rate (Botswana)"),
    ("NAMFISA", "Namibia Financial Institutions Supervisory Authority"),
    ("NBFIRA", "Non-Bank Financial Institutions Regulatory Authority (Botswana)"),
    ("NTB", "Namibia Tourism Board"),
    ("OKACOM", "Permanent Okavango River Basin Water Commission"),
    ("PACRA", "Patents and Companies Registration Agency (Zambia)"),
    ("PAYGo", "Pay-As-You-Go (solar)"),
    ("POTRAZ", "Postal and Telecommunications Regulatory Authority of Zimbabwe"),
    ("SACCOS", "Savings and Credit Cooperative Societies"),
    ("TFF", "Targeted Finance Facility (Zimbabwe)"),
    ("TNC", "The Nature Conservancy"),
    ("UNDP", "United Nations Development Programme"),
    ("USSD", "Unstructured Supplementary Service Data"),
    ("YDF", "Youth Development Fund (Botswana)"),
    ("ZWMB", "Zimbabwe Women’s Microfinance Bank"),
]

# ---------------------------------------------------------------- References to add (author-date, V4 style)
REFS_ADD = [
    "AFI (2026) Angola GIF case study. Kuala Lumpur: Alliance for Financial Inclusion. Available at: https://afi-global.org/wp-content/uploads/2026/07/Angola-GIF-Case-Study.pdf (Accessed: 16 October 2026).",
    "Africa Portal (2019) ‘Informal traders in Africa’s cities: coopted, coerced or just neglected?’, 11 October. Available at: https://africaportal.org/?p=11544 (Accessed: 28 October 2026).",
    "Africa Legal (2026) ‘Zambia’s new Banking and Financial Services Act ushers in sweeping financial sector reforms’. Available at: https://www.africa-legal.com/local-insights/zambias-new-banking-and-financial-services-act-ushers-in-sweeping-financial-sector-reforms/127282 (Accessed: 29 October 2026).",
    "African Journal of Hospitality, Tourism and Leisure (2017) ‘Victoria Falls curio sector analysis: insights through the lens of a dollarized economy’, January (DOAJ record; authors not listed). Available at: https://doaj.org/article/8f5d58cc5c474cd0b220227a756416f6 (Accessed: 28 October 2026).",
    "allAfrica (2025) ‘Zimbabwe: Reprieve for retailers and wholesalers as Government cuts, consolidates licence fees’, New Zimbabwe, 2 November. Available at: https://allafrica.com/stories/202511030163.html (Accessed: 28 October 2026).",
    "Bank of Botswana (2026) Monetary Policy Committee statements, April–August 2026. Gaborone: Bank of Botswana. Available at: https://www.bankofbotswana.bw/latest-news (Accessed: 29 October 2026).",
    "Bank of Namibia (2025) Diagnostic of Informality in Namibia. Windhoek: Bank of Namibia. Available at: https://www.bon.com.na/getattachment/a52d3c52-b4a5-44a3-8405-e4471b789959/.aspx (Accessed: 28 October 2026).",
    "Benhassine, N., McKenzie, D., Pouliquen, V. and Santini, M. (n.d.) Enhancing the Benefits of Formalization: Experimental Evidence from the Introduction of the Entreprenant Status in Benin. PEDL Research Note, ERG project 2437. Available at: https://assets.publishing.service.gov.uk/media/58a6c52e40f0b67ec800000e/PEDL_Research_Note_Enhancing_the_Benefits_of_Formalization.pdf (Accessed: 28 October 2026).",
    "Expansão (2021) ‘Presidente chama para si a competência de licenciamento da actividade comercial’, 22 October. Available at: https://expansao.co.ao/angola/detalhe/presidente-chama-para-si-a-competencia-de-licenciamento-da-actividade-comercial-57486.html (Accessed: 28 October 2026).",
    "Expansão (2025b) ‘Licenciamento comercial para pequenas lojas passa a custar 148,4 mil kwanzas’, 29 January. Available at: https://expansao.co.ao/angola/detalhe/licenciamento-comercial-para-pequenas-lojas-passa-a-custar-1484-mil-kwanzas-63809.html (Accessed: 28 October 2026).",
    "Forbes África Lusófona (2026b) ‘Banco Nacional de Angola anuncia redução da taxa de juro para 14,75%’, September. Available at: https://forbesafricalusofona.com/?p=176392 (Accessed: 29 October 2026).",
    "GEF (n.d.) A Conservation Trust Fund for the Kavango Zambezi Transfrontier Conservation Area (KAZA), GEF ID 12248. Washington, DC: Global Environment Facility. Available at: https://www.thegef.org/projects-operations/projects/12248 (Accessed: 29 October 2026).",
    "GIZ (2026) KAZA R-NBT Macro Diagnostic Study: Findings Report (draft). Prepared by SIGMA International, September 2026.",
    "Government of Botswana (n.d.) Trade licence application. Available at: https://www.gov.bw/trade/trade-license-application (Accessed: 28 October 2026).",
    "GSMA (n.d.) New guidance from FATF on AML/CFT and financial inclusion (summary). Available at: https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/programme/mobile-money/new-guidance-from-fatf-on-amlcft-and-financial-inclusion/ (Accessed: 28 October 2026).",
    "ILO (2015a) Transition from the Informal to the Formal Economy Recommendation, 2015 (No. 204). Geneva: International Labour Organization. Available at: https://www.sacp.org.za/sites/default/files/documents/ILO-R204.pdf (Accessed: 28 October 2026).",
    "ILO (2015b) ‘Five facts about the informal economy in Africa’, 18 June. Available at: https://www.ilo.org/africa/whats-new/WCMS_377286/lang--en/index.htm (Accessed: 28 October 2026).",
    "ILO (2018) Women and men in the informal economy: a statistical picture, 3rd edn (news release, 30 April). Available at: https://www.ilo.org/resource/news/more-60-cent-worlds-employed-population-are-informal-economy (Accessed: 28 October 2026).",
    "KAZA TFCA Secretariat (2026) Joint Communiqué of the KAZA Ministerial Committee Meeting. Kasane: KAZA Secretariat. Available at: https://kavangozambezi.org/wp-content/uploads/2026/06/Joint-Communique-KAZA-Ministerial-Committee-Meeting-revised-FINAL-2026.pdf (Accessed: 29 October 2026).",
    "LEX Africa (2025) ‘Botswana’s new Banking Act 2023’, 28 November. Available at: https://lexafrica.com/2025/11/botswanas-new-banking-act-2023/ (Accessed: 29 October 2026).",
    "Lusaka Times (2026) ‘BoZ cuts Monetary Policy Rate to 13.25%’, 13 May. Available at: https://www.lusakatimes.com/2026/05/13/boz-cuts-monetary-policy-rate-to-13-25/ (Accessed: 29 October 2026).",
    "Mwansakilwa, C., Tembo, G., Zulu, M.M. and Wamulume, M. (2017) ‘Village savings and loan associations and household welfare: evidence from Eastern and Western Zambia’, African Journal of Agricultural and Resource Economics, 12(1), pp. 85–97. Available at: https://ideas.repec.org/a/ags/afjare/258601.html (Accessed: 28 October 2026).",
    "OKACOM (1994) Agreement between the Governments of the Republic of Angola, the Republic of Botswana and the Republic of Namibia on the Establishment of a Permanent Okavango River Basin Water Commission (OKACOM). Windhoek. Available at: https://faolex.fao.org/docs/pdf/mul17435.pdf (Accessed: 29 October 2026).",
    "OKACOM (n.d.) Cubango-Okavango River Basin Fund: factsheet. Maun: Permanent Okavango River Basin Water Commission, with TNC, CRIDF and the USAID Resilient Waters Program.",
    "Republic of Zambia (2014) Business Regulatory Act, 2014 (Act No. 3 of 2014). Lusaka: Government Printer. Available at: https://commons.laws.africa/akn/zm/act/2014/3/media/publication/zm-act-2014-3-publication-document.pdf (Accessed: 28 October 2026).",
    "Republic of Zambia (2021) Data Protection Act No. 3 of 2021. Lusaka: Government Printer.",
    "Republic of Zambia (2026) Banking and Financial Services Act No. 9 of 2026. Lusaka: Government Printer.",
    "The Brief (2026d) ‘FIMA takes effect as pension preservation rule is put on hold’, The Brief (Namibia), May. Available at: https://thebrief.com.na/2026/05/fima-takes-effect-as-pension-preservation-rule-is-put-on-hold/ (Accessed: 29 October 2026).",
    "The Brief (2026e) ‘Bank of Namibia hikes repo rate to 6.75%’, The Brief (Namibia), June. Available at: https://thebrief.com.na/2026/06/bank-of-namibia-hikes-repo-rate-to-6-75/ (Accessed: 29 October 2026).",
    "The Herald (2026) ‘RBZ cuts policy rate to 27,5pc’, The Herald (Zimbabwe), September. Available at: https://www.heraldonline.co.zw/rbz-cuts-policy-rate-to-275pc/ (Accessed: 29 October 2026).",
    "UNWTO and UN Women (2019) Global Report on Women in Tourism, 2nd edn (announcement, 6 November). Available at: https://www.unwomen.org/en/news/stories/2019/11/announcer-second-edition-of-global-report-on-women-in-tourism (Accessed: 28 October 2026).",
    "World Bank (2026) ‘World Bank Group approves new grant to unlock sustainable finance for the Cubango-Okavango River Basin’, press release, 7 May. Available at: https://www.worldbank.org/en/news/press-release/2026/05/07/world-bank-group-approves-new-grant-to-unlock-sustainable-finance-for-the-cubango-okavango-river-basin (Accessed: 29 October 2026).",
    "WWF-US (n.d.) A Conservation Trust Fund for the Kavango Zambezi Transfrontier Conservation Area (KAZA): PIF, GEF ID 12248. Washington, DC: World Wildlife Fund. Available at: https://www.worldwildlife.org/our-work/funds/wwf-gef/projects/a-conservation-trust-fund-for-the-kavango-zambezi-transfrontier-conservation-area-kaza/ (Accessed: 29 October 2026).",
    "Government of Zimbabwe (2021) Cyber and Data Protection Act [Chapter 12:07]. Harare: Government Printer.",
    "Government of the Republic of Namibia (2021) Financial Institutions and Markets Act, 2021 (Act No. 2 of 2021) and NAMFISA Act, 2021 (Act No. 3 of 2021). Windhoek: Government Gazette.",
]
# Older-format duplicates in V4 to remove (anchored versions are kept)
REFS_REMOVE_PREFIX = [
    "The Brief (2026). Credit guarantee scheme disburses",
    "NewsDay (2023). ECGC rolls out",
    "Zambia Monitor (2025). Government outlines MSME empowerment",
]

# ---------------------------------------------------------------- Annex B
ANNEX_B = [
    ("h1", "Annex B: MSME Interview Guide"),
    ("p", "This guide supports the short round of MSME interviews requested in the review of 27 October 2026, to add the voice of enterprises to the analysis without repeating the earlier survey."),
    ("h2", "Sample and approach"),
    ("b", ["3–4 MSMEs per country, sampled from enterprises the programme team already works with, to avoid duplicated effort and so that no enterprise can later say it was never consulted.",
           "Include at least one informal or community-linked operator (for example a savings group, cooperative or craft group) and, where possible, women- and youth-owned enterprises.",
           "Individual interviews of about 30 minutes, because businesses may not admit a need for funds in front of competitors.",
           "Reach community groups directly or through partners such as UNDP, not only through government officials, so that members speak for themselves.",
           "Botswana, Zimbabwe and Zambia are expected to be easy to arrange; Namibia is uncertain; Angola will need Portuguese interpretation. If the approach does not work, agree an alternative with the reviewer."]),
    ("h2", "Questions"),
    ("b", ["Have you ever applied for or received finance for your business (loan, grant, savings-group loan, credit from a supplier)? From whom, and what happened?",
           "Do you currently want finance? For what, how much, and when in the year would you need it?",
           "What keeps you from getting finance today? (Prompt: registration, bank account, collateral, cost, distance, network coverage, not knowing where to go.)",
           "What would make it easier: a different product, a group or cooperative route, support from a lodge or buyer, or help with registration?"]),
    ("h2", "Record for each interview"),
    ("tbl", "interviewlog", "MSME interview record",
     ["Field", "Content"],
     [["Country and location", "District, town or village"],
      ["Value-chain segment", "As in {T:old1}"],
      ["Registration status", "Registered / council licence only / group-recognised / none"],
      ["Owner’s sex and year of birth", "Recorded with consent; year of birth rather than an age band"],
      ["Funding history, demand and barriers", "Summary of answers to questions 1–4"],
      ["Consent", "Consent to use anonymised quotes; no personal contact details in the shared report"]],
     [2800, 6226]),
]

# ---------------------------------------------------------------- Country barriers and enablers as narrative
# Replaces the V4 bullet lists under the "Barriers" and "Enablers" headings in each x.5 section.
NARRATIVE = {
"Angola": {
"Barriers": [
    "**Cost and currency.** High policy and lending rates, together with repeated kwanza depreciation, make long-term local-currency loans expensive and USD loans risky for businesses that earn in kwanza. Even where an MSME qualifies, the price of credit undermines the case for borrowing to invest in a tourism market that is still emerging.",
    "**Formality and land.** Formal registration, tax compliance and INAPEM certification are prerequisites for public credit lines, but they are costly and slow to obtain in remote provinces. Most micro-enterprises in the corridor are informal (about 92% of self-employed businesses nationally), so they cannot meet these requirements at all. Rural land rights are largely customary or state-held, and surface-right titles (direitos de superfície) take a long time to obtain, which leaves enterprises with little to offer as security.",
    "**Access and institutions.** Limited road and air connectivity, landmine contamination and seasonal access restrict how quickly a tourism market, and therefore MSME revenue, can develop. The administrative transition to the new Cuando and Cubango provinces creates temporary uncertainty about which authority is responsible for land, licensing and investment. Language is a further barrier: most KAZA tourism, finance and marketing materials are in English, which limits Angolan operators’ access to regional programmes and buyers.",
],
"Enablers": [
    "Angola’s strongest enabler is political commitment. Economic diversification and MSME development are national priorities backed by dedicated instruments: PRODESI, the FGC, which now runs a nationwide credit guarantee scheme for MSMEs, and the development bank BDA. The BNA has widened its special credit regime to include tourism and restaurants, which brings tourism businesses into lines previously reserved for production sectors. The licensing in February 2022 of the first private credit bureau, the Bureau Central Privada de Informação de Crédito, gives lenders a better basis for judging small borrowers.",
    "The tourism case is also improving. Visa liberalisation and the designation of the Okavango Tourism Development Pole signal government intent, and the presidential order of 2023 for an airport at Mavinga would transform access to the eastern parks. Demining progress and the new provincial administrations open space for investment planning, while the growth of digital payments through Multicaixa Express and mobile money offers a way to reach operators that bank branches do not.",
],
},
"Botswana": {
"Barriers": [
    "**Security and collateral.** Concessions and tribal-land leases are not readily accepted as bankable collateral, and their tenures may be shorter than the life of a loan. Many lenders therefore still require fixed property that enterprises on communal land cannot provide. Botswana also has no operational national credit guarantee scheme for MSMEs to fill the gap.",
    "**Who can get in.** Most MSMEs are informal (84%) and micro (91%), so few can meet CIPA registration, tax and collateral requirements, and commercial banks rate their appetite for micro and informal borrowers as Medium to Low. The high capital requirements of upmarket tourism products crowd out citizen entrants, and small citizen operators face high licensing and compliance costs relative to their turnover.",
    "**Public finance under strain.** Public financiers face liquidity constraints and delays because of the fiscal stress caused by the downturn in diamond revenue. Governance concerns about CEDA lending, including requests in Parliament for a forensic audit report (Parliament of Botswana, 2025), have further stalled lending from the institution most important to citizen tourism businesses.",
    "**Market linkages and shocks.** Lodge procurement is concentrated in suppliers based in Gaborone or South Africa, which limits the contracts available to local MSMEs. Human–wildlife conflict and drought affect rural livelihoods and the viability of enterprises in the corridor.",
],
"Enablers": [
    "Botswana starts from a stable base. Its macroeconomic and banking sectors are stable relative to the region, with the Pula pegged to a basket of currencies, and its citizen-empowerment mandate is backed by dedicated institutions (CEDA, LEA and the Youth Development Fund). The Economic Inclusion Act 2021 adds a points-based procurement preference for youth, women and people with disabilities, which can help citizen MSMEs win contracts.",
    "Several reforms make lending easier. The Movable Property (Security Interests) Act of 2022 widens the range of assets that can secure a loan (its commencement should be confirmed), and SADC payment rails now include a Botswana corridor through TCIB and First Capital Bank (March 2026), which lowers the cost of cross-border payments.",
    "Botswana also has institutions that connect communities and businesses to the tourism market: mature CBNRM structures with revenue-generating Community Trusts, private-sector leadership on supplier development and conservation finance (the Wilderness–Stanbic and Wilderness–LEA arrangements), and the KAZA Secretariat in Kasane, together with a commitment to adopt the Univisa.",
],
},
"Namibia": {
"Barriers": [
    "**Land and governance.** Communal land cannot be held in freehold, and leaseholds are slow to register and rarely accepted as collateral. In some areas conservancy governance and benefit distribution are weak, and joint-venture agreements vary in quality, which makes community income a less reliable basis for finance.",
    "**Distance and a thin market.** The Zambezi and Kavango regions are far from decision centres in Windhoek, and branch-level credit authority is limited. The population is sparse and local participation in tourism is limited, so the market for MSME finance is small. Microlending is costly, and financial literacy is low among rural MSMEs; in the areas where the five countries meet, language barriers further limit people’s awareness of financial products.",
    "**Formality and costs.** Most micro-enterprises are informal and not registered with the authorities or councils, and NTB registration and grading costs are high relative to their turnover. Policy uncertainty about the proposed empowerment legislation (NEEEF) affects investors’ decisions, while human–wildlife conflict and climate shocks such as the 2024 drought add to the risk lenders perceive.",
],
"Enablers": [
    "Namibia’s enablers are institutional. It has an operational national Credit Guarantee Scheme with seven participating lenders, a development bank tourism window that explicitly recognises conservancy partnerships, and national green-finance infrastructure in which both the EIF and DBN are accredited to the Green Climate Fund. Its mature CBNRM system and NACSO’s data on conservancy returns can support credit and impact assessment.",
    "Monetary stability is a further advantage. Membership of the Common Monetary Area and the Namibian dollar’s peg to the rand reduce currency risk compared with Angola, Zambia and Zimbabwe, which makes longer-term lending easier to price.",
],
},
"Zambia": {
"Barriers": [
    "**Cost of credit.** High interest rates and short tenors are the binding constraint, and kwacha volatility affects tourism businesses whose revenue is in US dollars but whose costs are in kwacha. Energy insecurity after the 2024 drought, with load-shedding, raised operating costs and squeezed the margins from which loans are repaid.",
    "**Land and concessions.** MSMEs in Game Management Areas operate on customary land with limited title, and concessions are allocated through DNPW processes oriented to larger investors. Customary tenure and GMA arrangements therefore limit both collateral and investor security.",
    "**Formality and compliance.** About 96% of enterprises are not registered with PACRA, which excludes them from bank, guarantee-backed and most CEEC products. Those that are formal face multiple licences and fees (tourism licences, DNPW concession fees and council levies), which raise compliance costs.",
    "**Community and public funds.** Revenue-sharing to Community Resource Boards has historically been delayed, weakening the finance available to community enterprises, and weak repayment discipline in some public empowerment funds erodes the capital that should revolve to new borrowers.",
],
"Enablers": [
    "Zambia has the building blocks of a guarantee-led approach. Its credit guarantee infrastructure is active and expanding (ZCGS and the Bank of Zambia’s Small Business Growth Initiative pilot), and its functioning movable-collateral registry allows equipment and receivables to secure loans.",
    "The tourism market is also strong. Livingstone is a mature destination with good connections through the Kazungula one-stop border post, the KAZA Univisa with Zimbabwe and visa waivers for many source markets. Large-scale World Bank tourism investment and growing budget allocations support the sector; for example, the Livingstone Town Centre Development Programme, launched in September 2025 with World Bank support, aims to make Livingstone a 24-hour tourism hub. Very high savings-group penetration in rural areas provides a base for reaching community enterprises.",
],
},
"Zimbabwe": {
"Barriers": [
    "**Currency and cost.** Currency instability and changing exchange-control rules undermine long-term planning and make local-currency facilities unattractive. Real interest rates are high and tenors very short, because the banking system has little long-term funding, and sovereign arrears limit concessional lending by multilateral development banks.",
    "**Compliance and collateral.** Small operators face multiple overlapping licences, levies and fees (from ZTA, ZimParks, Rural District Councils, EMA and councils), which raise compliance costs. Communal land under RDC authority cannot be used as collateral, and the high informality of tourism operators and SMEs means that many cannot meet lenders’ requirements in the first place.",
    "**Operating environment.** Electricity shortages remain a challenge and raise operating costs, which reduces the cash flow available to repay loans.",
],
"Enablers": [
    "Zimbabwe’s main enabler is its market. Victoria Falls and Hwange host a strong, internationally connected tourism private sector, the Victoria Falls Special Economic Zone and the USD-denominated VFEX offer dollar instruments, and the KAZA Univisa is operational with Zambia.",
    "The financial infrastructure is also in place. An operational MSME credit guarantee scheme (ECGC) can reduce collateral requirements, and the RBZ movable-collateral registry allows movable assets to secure loans. Reforms announced in May 2026 aim to cut banking costs to support MSME formalisation, and long CAMPFIRE experience with community revenue-sharing provides a channel to community enterprises.",
],
},
}
