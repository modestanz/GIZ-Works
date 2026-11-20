// Chapter 3 (Strategic framework) and Chapter 4 (Recommendations by priority value chain)

const ch3 = [
  { h: 1, t: "Strategic Framework" },
  { h: 2, t: "One pathway, three activities" },
  { p: "The framework links the three Output 1.2 activities into a single graduation pathway along the readiness tiers used in F3 and F4 ({F:framework}). Each activity has a distinct job, and each step is designed to create the evidence the next provider of finance needs:" },
  { b: [
    "**Activity 1.2.1 connects.** It brings MSMEs, BSOs, lenders, guarantors and anchor buyers into a standing dialogue in each intervention area; it explains existing mechanisms, sets out bankability criteria and produces a screened pipeline, supply MOUs and co-designed product terms.",
    "**Activity 1.2.2 prepares and de-risks.** Lot 1 moves Tier 0–1 enterprises up the ladder (equipment, compliance, product upgrades, group assets). Lot 2 equips Tier 2 enterprises and, through its conversion clause, becomes the borrower’s contribution or cash collateral that unlocks a loan.",
    "**Activity 1.2.3 finances.** It works through existing lenders, guarantee schemes, MFIs, anchors and the RTFF to test adapted products: seasonal loans with flexible security, order-backed and asset finance, community guarantee pools and revolving funds, and results-based finance where an outcome payer exists.",
    "**Activity 1.1.1 underpins all three.** Capacity building (SME Loop coaching, bookkeeping, supplier readiness) feeds Lot 1 and Lot 2 and prepares enterprises to meet lenders’ requests.",
  ] },
  { img: { id: "framework", file: "fig1_framework.png", w: 600, h: 315, caption: "Output 1.2 strategic framework: three activities on one readiness pathway" } },

  { h: 2, t: "Guiding principles" },
  { tbl: {
    caption: "Design principles for Output 1.2",
    head: ["Principle", "What it means in practice", "Source"],
    cols: [2200, 5526, 1300],
    small: true,
    rows: [
      ["1. Finance follows the buyer", "Start where an order, contract or booking exists; make standard supply MOUs and prompt payment part of the financing architecture", "F3, F4, F5"],
      ["2. Build on existing institutions", "Deliver through national lenders, guarantee schemes, MFIs and BSOs already active in each market; do not create parallel facilities", "MD, F1, F2"],
      ["3. Right capital at the right stage", "Grants and savings for Tier 0–1; order-backed, asset and guaranteed finance for Tier 2; term and revenue-linked finance for Tier 3", "F2, F3, F4"],
      ["4. Repayment follows the season", "Seasonal schedules, low-season grace and order-linked repayment are standard features, not exceptions", "F3, F4, F5"],
      ["5. Minimum concessionality, tapering", "First loss, fee and price support only where it unlocks lending that would not otherwise happen, falling on a pre-agreed schedule", "F4 (OECD, DFI Working Group)"],
      ["6. Lend nationally, standardize regionally", "Money is lent, guaranteed and recovered under national law; templates, criteria, indicators and a first-loss pool can be regional", "F4 §5"],
      ["7. Inclusion by design", "Women-, youth- and community-led enterprises are priorities without rigid thresholds; one youth band (18–35); collateral substitutes they actually hold", "F2, F3, F4"],
      ["8. Formalization as a milestone", "Registration and tax clearance are supported when a buyer or lender requires them, not demanded at entry", "MD, F1, F3"],
      ["9. One measurement system", "Baseline, grant milestones, RTFF step-downs and results framework use the same disaggregated indicators", "F1, F4"],
    ],
  } },

  { h: 2, t: "Intervention areas and priority value chains" },
  { p: "Output 1.2 is to be piloted in three intervention areas. Following the Macro Diagnostic and F4, this report uses **Priority area 1 (PA1)**, Hwange–Victoria Falls–Livingstone, run as twin national pilots in Zimbabwe and Zambia; **Priority area 2 (PA2)**, the Okavango Delta–Maun with the Khwai, Mababe and Sankuyo community areas and a Kasane/Chobe link; and **Namibia’s Zambezi Region** as the third area, prepared in 2027 for a second cohort. Angola’s Cubango–Okavango headwaters follow a readiness-first track of grants and technical assistance. {T:vcmap} shows where each priority value chain sits." },
  { tbl: {
    id: "vcmap", caption: "Priority value chains by intervention area, readiness and constraint",
    head: ["Value chain", "PA1", "PA2", "Zambezi (NA) / Angola", "Typical tier", "Binding constraint", "Pilot timing"],
    cols: [1700, 900, 900, 1300, 750, 2276, 1200],
    small: true,
    rows: [
      ["Fresh produce, poultry, eggs and fish", "Lead", "Lead", "NA lead; AO first pilot", "0–1 (aggregators 2)", "Season-proof supply, volume, cold chain, working capital to buyer spec", "Cohort 1"],
      ["Guiding, activities and cultural experiences", "Lead", "Within crafts; mokoro", "NA lead; AO lead", "1–2", "Equipment, certification, visibility; cancellable bookings", "Cohort 1"],
      ["Transport, transfers and logistics", "Lead", "Second wave", "NA second wave; AO lead", "1–2", "Vehicles; tax clearance and insurance; USD assets vs local-currency loans", "Cohort 1"],
      ["Crafts, décor and cultural products to brief", "Lead", "Lead", "NA lead (décor)", "0–1", "Design to buyer brief; oversupply of generic curios; first contract", "Market first"],
      ["Laundry, cleaning, maintenance, mechanics and solar", "Second wave", "Lead", "Not named", "1–2", "Equipment, insurance, contract terms; MSME base unmeasured", "Cohort 1 (small)"],
      ["Conservation and coexistence services, with honey", "Not named", "Lead", "NA lead (honey); AO second wave", "1–2", "Capacity; no link yet between outcome payments and finance", "Design now, pilot small"],
      ["Building materials and thatch", "Second wave", "Not named", "Not named", "1–2", "Specification, warranties, bridging finance", "Second wave"],
      ["Processed foods, beverages and dry goods", "Not named", "Second wave", "Within honey and NTFPs", "1–2", "Food safety and certification costs", "Second wave"],
      ["Waste, recycling and circular goods", "Second wave", "Second wave", "NA lead (waste-to-craft)", "0–1", "Collection logistics, small infrastructure, offtake", "Second wave"],
    ],
  } },
  { p: "Accommodation is treated as context, not a supply value chain: the Macro Diagnostic does not prioritize it, MSME participation is thin and Botswana reserves guesthouses for citizens (F3 §2.1). Community lodges and campsites can still access Lot 2 and community revolving funds as community enterprises." },
];

// Helper to build a value-chain recommendation table
function vc(caption, rows) {
  return { tbl: { caption, head: ["Activity", "Recommendation", "Where and with whom"], cols: [1300, 4826, 2900], small: true, rows } };
}

const ch4 = [
  { h: 1, t: "Recommendations by Priority Value Chain" },
  { p: "This chapter applies the framework to each priority value chain. For each lead chain it states why the chain matters, its finance profile and the recommended action under each Output 1.2 activity, with a pilot target for the first cohort. Second-wave chains and the phased pathway follow in Sections 4.7 and 4.8. Pilot sizes are indicative and should be confirmed in term-sheet talks." },

  { h: 2, t: "Fresh produce, poultry, eggs and fish" },
  { p: "**Why it matters.** Food is the largest and most regular category of lodge procurement and the first lead chain in every area. Anchors in Hwange and Namibia still bring produce and eggs from distant towns because no local supplier has delivered through both seasons; the RTFF’s circular step-down (at least 40% local food) gives anchors a direct reason to buy locally. **Finance profile.** Women-majority producers, groups and cooperatives at Tiers 0–1, with some Tier 2 aggregators; needs are seasonal working capital, inputs, irrigation, poultry housing and cold chain (F3 §2.1; F4 §6.1)." },
  vc("Fresh produce, poultry, eggs and fish: recommendations by activity", [
    ["1.2.1", "Anchor procurement roundtables that agree staged localization scorecards and a standard supply MOU (volumes, specifications, payment within 30 days, notice before termination). Lender clinics at producer-group and savings-group meetings.", "PA1: Hwange and Victoria Falls lodges, Livingstone hotels sourcing from Kalomo; PA2: Okavango operators and Maun hotels; HATAB, Africa’s Eden, Livingstone Tourism Association"],
    ["1.2.2", "Lot 1 group grants (savings groups, cooperatives) for inputs, drip kits and poultry starter units, 10% contribution mostly in kind. Lot 2 for shared cold storage, irrigation and poultry housing for aggregators with a buyer letter, 30% contribution.", "Align ratios with MSMED and GREAT-TDP grants in Zambia"],
    ["1.2.3", "Order-backed working capital against supply MOUs (RTFF or partner bank); community guarantee pool (Model C) for women’s groups, seeded by grant and topped up by 5% of each loan; national guarantee cover beyond the pool.", "Stanbic and Wilderness model (BW); CBZ or Stanbic with ECGC cover (ZW); FNB Zambia and ZANACO (ZM); Women’s Microfinance Bank, Agora, VisionFund"],
    ["Pilot target", "An anchor-supplier package for 15–25 producer groups and aggregators per priority area in cohort 1. Angola: grant-funded poultry supply to the safari camp after its purchasing is measured; no debt in the first season.", "PA1 and PA2; Angola readiness track"],
  ]),

  { h: 2, t: "Guiding, activities and cultural experiences" },
  { p: "**Why it matters.** The most common activity among surveyed MSMEs (43 offer guiding, 31 cultural experiences), concentrated along the Livingstone–Victoria Falls–Kazungula–Chobe corridor and often youth-led. A DMC calls guiding the weakest part of the value chain across three states; equipment finance for guides is a named gap in Botswana, and women entering mokoro operations need small start-up loans. **Finance profile.** Tiers 1–2, acutely seasonal and dependent on specialized assets (boats, engines, vehicles) that are hard to resell (F3; F4 §6.2; F5)." },
  vc("Guiding, activities and cultural experiences: recommendations by activity", [
    ["1.2.1", "DMC and lodge listing sessions (DMCs list a supplier after two or three successful bookings); youth-only sessions on pricing, net rates and bookability; dialogue with DMCs on compliance costs imposed on small operators.", "Victoria Falls and Livingstone DMCs; Maun mokoro polers’ trusts; guide associations"],
    ["1.2.2", "Lot 1 for safety gear, first-aid and licensing, mokoro kits, bicycles and e-bikes, digital booking set-up; Lot 2 for boats, engines or vehicle deposits where a lease or loan completes the purchase. Priority to new products (cultural tours, birding, citizen-science safaris).", "Youth-led and women-led operators in PA1 and PA2"],
    ["1.2.3", "Youth services package: lease-to-own asset finance (Model A) with a 15–20% first-loss layer and 80–85% guarantee cover, low-season grace and peak-season instalments; forward-booking finance against confirmed DMC bookings paid into a controlled account; RTFF Tier 1 for working capital.", "SMEDCO and EmpowerBank with ECGC (ZW); a Zambian partner bank (ZM); CEDA and NDB with BOSRIA (BW)"],
    ["Pilot target", "Twin national pilots for 20–30 guides and activity operators in Victoria Falls and Livingstone; small start-up asset loans for women mokoro operators in PA2.", "PA1 (ZW, ZM); PA2 (BW)"],
  ]),

  { h: 2, t: "Transport, transfers and logistics" },
  { p: "**Why it matters.** Anchors sub-hire transfers and deliveries, and ownership rules make the segment structurally an MSME space (Botswana bars foreign equity in tourist transfer companies). Vehicles are the largest investment a tourism MSME makes. **Finance profile.** Tiers 1–3, asset-heavy, highest market linkage; tax clearance and insurance decide whether operators can be paid at all (30% withholding without clearance in Zimbabwe). Zambia’s and Zimbabwe’s movable-property laws give lenders collateral registries (F4 §6.3)." },
  vc("Transport, transfers and logistics: recommendations by activity", [
    ["1.2.1", "Sub-hire contract clinics with anchors and DMCs on payment terms, insurance requirements and invoice confirmation; briefings on ECGC and BOSRIA cover for asset loans.", "Victoria Falls and Hwange operators; Botswana transfer operators"],
    ["1.2.2", "Lot 1 for tax clearance, licensing, insurance and booking systems; Lot 2 as the deposit on a vehicle or boat financed by a partner lender, or for efficient and electric vehicles.", "Operators with sub-hire contracts"],
    ["1.2.3", "Asset finance and leasing with first loss and ECGC 80–85% cover for one- to five-year tenors; USD lending to USD earners; invoice discounting on sub-hire contracts; RTFF Tier 2 for deposits. Defer cross-border fleet finance.", "Bank asset-finance units (CBZ, Stanbic); SMEDCO; Livingstone bank partner"],
    ["Pilot target", "Asset finance for 10–15 transfer and delivery operators in Victoria Falls and Hwange, preceded by tax-clearance and insurance support.", "PA1 (ZW), then ZM"],
  ]),

  { h: 2, t: "Crafts, décor and cultural products to brief" },
  { p: "**Why it matters.** About 80% of lodge décor in Namibia’s Kavango and Zambezi regions is imported, while generic curios are oversupplied (the most bought item is a fridge magnet) and a Maun craft hub linking over 100 artisans holds export certifications but no committed buyers. Incomes rise when products are developed with buyers to an agreed specification, not when volume rises. **Finance profile.** Tiers 0–1, likely women-majority; debt before a buyer contract adds volume to an oversupplied market (F3 §2.1; F4 §6.4)." },
  vc("Crafts, décor and cultural products: recommendations by activity", [
    ["1.2.1", "Design-to-brief challenge convened with three to five anchors or hotel developers per area; buyer brokerage for the Maun hub; corporate-gifting buyers; showroom with a hotel partner.", "PA1 (Victoria Falls, Livingstone); PA2 (Maun); Namibia décor and furnishings"],
    ["1.2.2", "Lot 1 grants for product development and sample orders to a buyer’s brief; Lot 2 for workshop equipment, certification and online presence where a buyer has placed an order.", "Craft hubs, design collectives, cooperatives"],
    ["1.2.3", "Purchase-order finance to the hub or cooperative as aggregator once a confirmed order exists (RTFF Tier 1 or partner bank); savings groups for materials. No loans to individual artisans without orders.", "RTFF; Agora; Women’s Microfinance Bank"],
    ["Pilot target", "One design-to-brief challenge per priority area, followed by PO finance for the hubs that win orders.", "PA1 and PA2; Namibia later"],
  ]),

  { h: 2, t: "Laundry, cleaning, maintenance, mechanics and solar" },
  { p: "**Why it matters.** A newly named chain that leads in PA2: lodges outsource laundry and maintenance where it lowers cost, and solar installation is a growing source of skilled youth employment. A recurring service contract is an unusually strong basis for lending because receivables can be assigned to a lender with the equipment financed. **Finance profile.** Tiers 1–2, youth-led service enterprises; the survey did not capture these services, so the MSME base must be measured at intake (F4 §6.5)." },
  vc("Laundry, maintenance and solar: recommendations by activity", [
    ["1.2.1", "Outsourcing dialogues with Okavango operators willing to contract out laundry and maintenance; standard service MOU with payment terms; technical-certification providers.", "Maun and Kasane operators; HATAB; LEA"],
    ["1.2.2", "Lot 1 for tools and starter equipment for Tier 0–1 youth entering the trade; Lot 2 for commercial laundry machines, solar installation kits and insurance where a service contract exists.", "Youth-led enterprises in PA2, then PA1"],
    ["1.2.3", "Lease-to-own asset finance against an assigned service contract; RTFF Tier 2 loans of EUR 10,000–30,000; invoice discounting where anchors pay late; BOSRIA or ECGC cover at 75–80%.", "CEDA, Stanbic or Agora (BW); ECGC partner bank (ZW)"],
    ["Pilot target", "Service-contract asset finance for 10–15 laundry and maintenance enterprises with two or three Okavango operators.", "PA2"],
  ]),

  { h: 2, t: "Conservation and coexistence services, with honey" },
  { p: "**Why it matters.** These enterprises produce public goods (protected wildlife, retained habitat, reduced human–wildlife conflict) that lenders cannot price. Namibia’s wildlife credits pay conservancies for verified sightings, and a women-led community trust funds beehives that protect crops and returns 12% of sales to its conservancy. **Finance profile.** Conservancies, trusts and cooperatives at Tiers 1–2; the binding constraint is capacity rather than capital, and commercial debt without an outcome stream is not appropriate (F4 §6.6)." },
  vc("Conservation and coexistence services: recommendations by activity", [
    ["1.2.1", "Outcome-funder dialogue linking the OKACOM CORB Fund, wildlife-credit schemes, operator foundations and verifiers with enterprises; coordination with the KAZA–OKACOM MOU.", "PA2 community areas; Zambezi conservancies; CORB Fund; WWF Namibia; GreenLoop"],
    ["1.2.2", "Lot 1 and Lot 2 grants for beehive fences, predator-proof corrals, monitoring equipment, honey certification and new products such as wildlife-monitoring tourism.", "Women’s honey groups; community trusts"],
    ["1.2.3", "Results-based finance (Model D): verified outcome payments paid into the loan account to service instalments or retire 20–30% of principal; MFI-managed community revolving funds capitalized from trust or conservancy revenue; RTFF at the 2% nature-steward floor.", "CORB Fund; CCFN; NEF; MFIs; an independent verifier"],
    ["Pilot target", "Design in the first season; two or three Model D pilots with one outcome funder each, lending from the second season.", "PA2 and Zambezi Region"],
  ]),

  { h: 2, t: "Second-wave value chains" },
  { p: "Second-wave chains are held back by specification, warranties or equipment more than by finance. They enter through dialogue, grants and bridging finance against confirmed work, and move into the Activity 1.2.3 pilots once cohort 1 has created buyers and payment records (F4 §7)." },
  { tbl: {
    caption: "Second-wave value chains: recommendations by activity",
    head: ["Value chain", "1.2.1 Connect", "1.2.2 Grant", "1.2.3 Finance"],
    cols: [1700, 2300, 2300, 2726],
    small: true,
    rows: [
      ["Building materials and thatch (PA1)", "Specification, warranty and quotation clinics with lodge builders; women thatch harvesters’ groups", "Tools, certification of materials; group grants for harvest and transport", "Contract-backed bridging and invoice discounting; ECGC and SMEDCO performance-style guarantees; Model C for harvesters"],
      ["Processed foods, beverages and dry goods (PA2; Namibia, Angola NTFPs)", "Buyer and export dialogues for honey, marula, baobab and peanut butter", "Matched certification and food-safety grants (20–30% contribution); packaging", "RTFF Tier 1–2 for processing equipment; PO and pre-shipment finance with confirmed buyers"],
      ["Waste, recycling and circular goods (PA1, PA2; Namibia waste-to-craft)", "Plastics-compliance dialogues with anchors and councils on waste-service contracts", "Collection points, balers, sorting sheds; waste-to-craft product lines (youth track)", "Service-contract finance; asset finance once a contract exists; per-tonne results payments later"],
    ],
  } },

  { h: 2, t: "Phased pathway: Namibia’s Zambezi Region and Angola" },
  { p: "**Namibia’s Zambezi Region** has the most developed community-based natural resource management system and the most developed guarantee scheme proposal for women and youth, but its instruments rarely reach the region. Output 1.2 should run Activity 1.2.1 dialogues from 2027 and prepare a second cohort for about 2027–28: a NASRIA 80/20 women and youth guarantee tier with DBN For Her and NYDF; conservancy revolving funds; Model D with wildlife credits; and PO finance for décor and furnishings. **Angola’s** Cubango–Okavango headwaters are mostly unbanked, with one anchor camp; Output 1.2 should limit itself to Lot 1 grants, technical assistance and group savings, starting with poultry, eggs and produce for the safari camp, and link enterprises to BDA microfinance and the CORB Fund once a pipeline exists (F4 §7.4)." },
];

module.exports = { ch3, ch4 };
