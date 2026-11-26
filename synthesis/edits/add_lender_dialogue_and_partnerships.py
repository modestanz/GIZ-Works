import re, html
P = 'u/word/document.xml'
s = open(P, encoding='utf8').read()
esc = lambda t: html.escape(t, quote=False)
log = []

def run(t, bold=False, sz=None, color=None, italic=False):
    rp = ''
    if bold: rp += '<w:b/><w:bCs/>'
    if italic: rp += '<w:i/><w:iCs/>'
    if color: rp += f'<w:color w:val="{color}"/>'
    if sz: rp += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/>'
    return f'<w:r>{"<w:rPr>"+rp+"</w:rPr>" if rp else ""}<w:t xml:space="preserve">{esc(t)}</w:t></w:r>'
def md(t, **k):
    return ''.join(run(x[2:-2], bold=True, **k) if x.startswith('**') else run(x, **k) for x in re.split(r'(\*\*[^*]+\*\*)', t) if x)
JUST = '<w:pPr><w:jc w:val="both"/></w:pPr>'
BUL = '<w:pPr><w:pStyle w:val="BulletParagraph"/><w:numPr><w:ilvl w:val="0"/><w:numId w:val="38"/></w:numPr><w:jc w:val="both"/></w:pPr>'
body = lambda t: f'<w:p>{JUST}{md(t)}</w:p>'
bullet = lambda t: f'<w:p>{BUL}{md(t)}</w:p>'
bm_ids = [int(x) for x in re.findall(r'<w:bookmarkStart w:id="(\d+)"', s)]
nextbm = [max(bm_ids) + 1]
def heading(style, text, bmname=None):
    if bmname:
        i = nextbm[0]; nextbm[0] += 1
        return f'<w:p><w:pPr><w:pStyle w:val="{style}"/></w:pPr><w:bookmarkStart w:id="{i}" w:name="{bmname}"/><w:r><w:t xml:space="preserve">{esc(text)}</w:t></w:r><w:bookmarkEnd w:id="{i}"/></w:p>'
    return f'<w:p><w:pPr><w:pStyle w:val="{style}"/></w:pPr><w:r><w:t xml:space="preserve">{esc(text)}</w:t></w:r></w:p>'
BORD = '<w:tcBorders><w:top w:val="single" w:sz="4" w:space="0" w:color="B7C4BB"/><w:left w:val="single" w:sz="4" w:space="0" w:color="B7C4BB"/><w:bottom w:val="single" w:sz="4" w:space="0" w:color="B7C4BB"/><w:right w:val="single" w:sz="4" w:space="0" w:color="B7C4BB"/></w:tcBorders>'
CP = '<w:pPr><w:spacing w:after="0" w:line="245" w:lineRule="exact"/></w:pPr>'
def cell(t, w, fill=None, bold=False, color=None, span=None):
    tcpr = f'<w:tcW w:w="{w}" w:type="dxa"/>' + (f'<w:gridSpan w:val="{span}"/>' if span else '') + BORD + (f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>' if fill else '')
    return f'<w:tc><w:tcPr>{tcpr}</w:tcPr><w:p>{CP}{run(t, bold=bold, sz=17, color=color)}</w:p></w:tc>'
def table(cols, head, rows):
    W = sum(cols)
    x = f'<w:tbl><w:tblPr><w:tblW w:w="{W}" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="35" w:type="dxa"/><w:left w:w="90" w:type="dxa"/><w:bottom w:w="35" w:type="dxa"/><w:right w:w="90" w:type="dxa"/></w:tblCellMar><w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1" w:lastColumn="0" w:noHBand="0" w:noVBand="1"/></w:tblPr><w:tblGrid>' + ''.join(f'<w:gridCol w:w="{c}"/>' for c in cols) + '</w:tblGrid>'
    x += '<w:tr><w:trPr><w:tblHeader/></w:trPr>' + ''.join(cell(h, cols[i], fill='117A02', bold=True, color='FFFFFF') for i, h in enumerate(head)) + '</w:tr>'
    for r in rows:
        if isinstance(r, str):
            x += '<w:tr><w:trPr><w:cantSplit/></w:trPr>' + cell(r, W, fill='E2EFDA', bold=True, span=len(cols)) + '</w:tr>'
        else:
            x += '<w:tr><w:trPr><w:cantSplit/></w:trPr>' + ''.join(cell(v, cols[i], bold=(i == 0)) for i, v in enumerate(r)) + '</w:tr>'
    return x + '</w:tbl>'
caption = lambda n, t: '<w:p><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="160" w:after="80"/></w:pPr>' + run(f'Table {n}: ', bold=True, sz=20, color='1F4E5F') + run(t, italic=True, sz=20) + '</w:p>'
SPACER = '<w:p><w:pPr><w:spacing w:after="0" w:line="120" w:lineRule="exact"/></w:pPr></w:p>'
def once(a, b, what):
    global s
    n = s.count(a); assert n == 1, (what, n); s = s.replace(a, b); log.append(what)

# ---------- 1. fixes to slips ----------
once('Figure 5 Partner States what each means', 'Figure 5 states what each means', 'fix: Figure 5 sentence')
once('64 in the KAZA component, 40 in Okavango–Maun', '64 in Hwange–Victoria Falls–Livingstone, 40 in Okavango–Maun', 'fix: survey split in Table 3')
once(' (Section 2.7)', '', 'fix: dead reference to Section 2.7')
# table renumbering: own tables 7-23 -> 6-22 (references to tables in other reports untouched)
cnt = [0]
def tabsub(m):
    n = int(m.group(3))
    if n >= 7: cnt[0] += 1; return f'{m.group(1)}{m.group(2)} {n - 1}'
    return m.group(0)
s = re.sub(r'(<w:t(?: [^>]*)?>)([^<]*)(</w:t>)', lambda m: m.group(1) + re.sub(r'((?<!F\d )(?<!F\d-D\d )(?<!Annex B, ))(Table) (\d+)', tabsub, m.group(2)) + m.group(3), s)
log.append(f'renumber: {cnt[0]} table references')

# ---------- 2. source codes and executive summary ----------
once('(November 2026). Section references (§)', '(November 2026); WS-VF, WS-MN = SIGMA participant feedback findings from the Victoria Falls and Maun working sessions (17 and 20 November 2026); SFC minutes, ITC minutes = GIZ meeting minutes with the Sustainable Finance Coalition (26 November 2026) and the International Trade Centre (27 October 2026); OKACOM note = KAZA–OKACOM synergy note (November 2026). Section references (§)', 'source codes note')
es_end = 'Without the extension to mid-2029, the second low season would not be observed before the final review.'
assert s.count(es_end) == 1
once(es_end, es_end + ' Partnerships with the KAZA Conservation Trust Fund, funders active in KAZA and national institutions should anchor the RTFF and the other mechanisms after the pilot (Section 7.6; Annex D).', 'executive summary roadmap sentence')

# ---------- 3. lender learning platform in 5.1 ----------
lender = heading('Heading3', 'Lender learning platform: tourism literacy, regenerative practice and credit') + ''.join([
  body("Alongside the MSME-facing formats, each platform should run a learning track for the credit officers, risk managers and product teams of partner banks, MFIs, guarantee schemes and DFIs. The consultations show why. Lenders find tourism hard to read: unlike agriculture, it has no harvest-like point at which a loan can be repaid in one sum, specialised assets such as boats have no resale market outside the region, and NDB reports arrears of about 18% in the Okavango, linked largely to seasonality (F5). Lenders rarely understand regenerative criteria and tend to treat conservation features as a cost rather than a sign of resilience (F3), and participants in both November sessions said lenders do not understand how a guide, a booking or a tourism season works (RT-VF, RT-MN). The market is moving at the same time: EU rules against greenwashing are pushing tour operators to support their supply chains down to micro-enterprises (SFC minutes), Botswana is preparing a green taxonomy with tax rebates for disclosed sustainable practice (F5), and the RTFF prices social and climate covenants instead of asking for collateral. The track should cover three subjects:"),
  bullet("**Tourism business literacy:** seasonal cash flows and forward bookings; how lodges, DMCs and tour operators contract and pay; concession, lease and community land arrangements; and how orders, booking records and payment trails can show repayment capacity."),
  bullet("**Regenerative practice and extended ESG:** what regenerative practices are and how they are verified, from certification aligned with the Global Sustainable Tourism Council (GSTC) standards to the progressive checklist; quantitative but proportionate verification, for which GreenLoop’s ESG due diligence for the Botswana Development Corporation is a local precedent (F5); and avoiding over-regulation of micro enterprises."),
  bullet("**Reading nature-positive practice in credit terms:** as collateral, green equipment (solar systems, electric vehicles, boats) can secure a loan where movable-collateral registries operate (Botswana, Zambia and Zimbabwe), and results-based payments (wildlife credits, CORB Fund outcome payments) and anchor receivables can be assigned to the lender; as lower risk, lower energy and water costs, fewer outages and access to premium and anchor markets strengthen cash flow and resilience; and as pricing, verified milestones can earn rate step-downs, as the RTFF’s covenants do, or better guarantee cover."),
  body("Delivery should be short and practical: half-day clinics for credit officers in the hub towns, timed to the low season; joint sessions with verifiers such as GreenLoop and Target 8.9; peer exchange among DFIs convened by SADC-DFRC, building on SMEDCO’s practice of pairing loans with mandatory borrower training (F5); and sessions at existing platforms such as Botswana’s Sustainability Week and the annual R-NBT Finance Forum. The track should produce a short list of verifiable indicators that lenders can reflect in credit assessment, pricing, the treatment of green assets as collateral and guarantee terms, aligned with emerging national taxonomies, and a short guidance note on lending to seasonal, buyer-linked tourism enterprises. Progress can be tracked through the share of partner credit officers completing the track and of lenders using agreed regenerative indicators in credit decisions."),
])
i = s.find('<w:t>Design requirements</w:t>'); assert i > 0 and s.count('<w:t>Design requirements</w:t>') == 1
ps = max(s.rfind('<w:p ', 0, i), s.rfind('<w:p>', 0, i)); s = s[:ps] + lender + s[ps:]; log.append('insert: lender learning platform in 5.1')

# ---------- 4. new 7.6 and renumber next steps ----------
sec76 = heading('Heading2', '7.6 Strategic partnerships for sustainability', '_Toc246699761') + ''.join([
  body("The RTFF and the other mechanisms will outlast the project only if they have institutional homes, capital after the pilot and partners that keep originating, financing and verifying borrowers. None of this needs a new institution: the partners exist, and several already fund KAZA. Four kinds of partnership matter; Annex D lists the possible collaborators, what each brings and the next step (Table 23)."),
  bullet("**Anchoring and long-term capital.** The KAZA Conservation Trust Fund, being designed by the Sustainable Finance Coalition with the KAZA Secretariat and WWF-US, could host the RTFF after the pilot as a programme account under its catalytic nature finance window, probably after 2028–2029; GBFF funding is expected in late 2027 and the fund structure around early 2028 (SFC minutes). The TUI Care Foundation has committed to carry the facility until it is anchored. Co-learning between the RTFF pilot and the fund’s design should start now, with the TUI Care Foundation in the conversation and a light letter of intent on joint learning."),
  bullet("**Co-financing from funders active in KAZA.** The EU (co-funder of R-NBT, Green Growth for KAZA and the ITC Green Value Chain programme), Germany (through GIZ, KfW and the International Climate Initiative, whose 2027 call could support a joint RTFF–CTF concept), the GEF and World Bank (the CORB Fund and Zambia’s tourism programme) and the African Development Bank and African Guarantee Fund (counter-guarantees and women’s finance) can each fund one layer: readiness grants, first loss and loss reserves, counter-guarantees or recapitalisation. Joint KAZA–OKACOM proposals to donors could include the RTFF’s recapitalisation rather than seeking it separately (OKACOM note)."),
  bullet("**National channels.** Development banks and guarantee schemes (NDB, CEDA, DBN, SMEDCO, ECGC, NASRIA and BOSRIA, ZCGS, BDA and FGC) and commercial banks such as FNB, Stanbic and ZANACO are the graduation route for RTFF borrowers and the in-country partners for monitoring and recovery. SADC-DFRC has suggested aggregating KAZA MSMEs into a regional pipeline large enough to interest other DFIs, with DFIs as in-country delivery partners (F5)."),
  bullet("**Pipeline, verification and coordination.** Anchor operators and their foundations nominate and back borrowers; ITC’s planned grants (about €2 million, some 142 grants) can de-risk RTFF loans as they are meant to de-risk CEDA and NDB lending (ITC minutes); WWF’s Bankable Nature Solutions pipeline and OKACOM’s community programmes can feed one shared referral register; and verifiers such as GreenLoop can provide baselines and milestone verification. A single joint space for EU-funded projects in KAZA, which GIZ has raised with the EU Delegation, would reduce duplication and stakeholder confusion (SFC minutes)."),
  body("These partnerships should be formalised in sequence: co-learning agreements and a shared referral register in 2027; co-financing for season two; and a decision with the KAZA Secretariat on the RTFF’s host and national channels by the fourth quarter of 2028, before Gate 2."),
])
hits = [m.start() for m in re.finditer(re.escape('7.6 Immediate next steps'), s)]
assert len(hits) == 2
bodyh = None
for h in hits:
    ps = max(s.rfind('<w:p ', 0, h), s.rfind('<w:p>', 0, h))
    if 'w:val="Heading2"' in s[ps:h]: bodyh = ps
assert bodyh
s = s[:bodyh] + sec76 + s[bodyh:]
s = s.replace('7.6 Immediate next steps', '7.7 Immediate next steps'); log.append('insert: Section 7.6; next steps renumbered 7.7')

# ---------- 5. new Annex D; references become Annex E ----------
partners = [
  "Anchoring and long-term capital",
  ["KAZA Secretariat", "Treaty secretariat; the SFC’s long-term strategic partner for KAZA finance", "Hosts the regional layer; co-decides the RTFF’s future arrangements by Q4 2028; a finance task force with Partner State representatives has been proposed", "Task force under consideration (SFC minutes)"],
  ["KAZA Conservation Trust Fund (Sustainable Finance Coalition, KAZA Secretariat, WWF-US)", "In design: implementation task team since July 2026; GBFF funding expected late 2027; fund structure around early 2028", "Programme account for the RTFF under the catalytic nature finance window, probably after 2028–2029; co-learning with the RTFF pilot now", "SFC consulting internally; feedback loop agreed on 26 November 2026"],
  ["TUI Care Foundation and TUI Group (Target 8.9)", "RTFF fiduciary and administrator for the pilot; reported to match GIZ’s contribution of about €800,000, including €150,000 recently committed by TUI Group", "Carries the facility until it is anchored; transfers it to the CTF or national channels; private-sector voice in the CTF’s governance", "To join the next GIZ–SFC conversation"],
  ["SADC FANR and SADC-DFRC", "Political partner of the programme (FANR); secretariat to the region’s DFIs (DFRC)", "Links pilots to regional policy; aggregates KAZA MSMEs into a regional investment pipeline; brings DFIs in as in-country delivery partners", "DFRC’s official position awaited"],
  "Funders active in KAZA",
  ["European Union", "Co-funds R-NBT, the Green Growth for KAZA project (SFC, KAZA Secretariat, WWF) and the ITC Green Value Chain programme in Botswana", "Co-financing of readiness grants and first loss; convening one joint space for EU-funded projects in KAZA", "Joint space raised by GIZ with the EU Delegation"],
  ["Germany: BMZ through GIZ (C-NRM, R-NBT), the International Climate Initiative (IKI) and KfW", "Co-funds R-NBT; IKI call for 2027; KfW is a long-standing funder of KAZA (current programmes to confirm)", "A joint RTFF–CTF concept under IKI; recapitalisation or a loss reserve after the pilot", "Joint IKI concept to be explored with the SFC and the TUI Care Foundation"],
  ["GEF and World Bank", "USD 10 million GEF grant to the CORB Fund through the World Bank (May 2026); GEF support to the KAZA CTF; GREAT-TDP in Zambia (USD 100 million, community matching grants); a KAZA tourism programme in design", "Matching-grant co-financing; aligned grant terms; capital for the CTF window that would host the RTFF", "Coordinate with the KAZA programme design"],
  ["OKACOM (CORB Fund)", "Basin commission for Angola, Botswana and Namibia; MoU with KAZA due for review", "Readiness grants and community infrastructure; outcome payments behind the RTFF’s nature-steward rate; later a loss reserve; one referral register in the overlap zone", "MoU review as the vehicle (OKACOM note)"],
  ["African Development Bank (AFAWA) and African Guarantee Fund", "Regional guarantor; women’s finance risk-sharing", "Counter-guarantees behind national tourism windows; a women’s tier", "Not yet engaged"],
  ["IFC and impact investors (for example the ACCT Fund)", "Blended finance and supplier development; growth capital", "Risk-sharing with banks; later capital for the RTFF; finance for anchors and Tier 3 enterprises", "Not yet engaged"],
  ["WWF and Peace Parks Foundation", "WWF’s KAZA programme and Bankable Nature Solutions pipeline; Peace Parks is a founding KAZA partner and bridges KAZA and OKACOM", "Pipeline and bankability lessons; shared referral register; community delivery", "Connect with the WWF pipeline"],
  "National finance institutions",
  ["Development banks and agencies: NDB, CEDA and LEA (Botswana); DBN (Namibia); CEEC (Zambia); SMEDCO (Zimbabwe); BDA (Angola)", "BDA, NDB, LEA and SMEDCO expressed interest at the SADC-DFRC consultation; NDB prioritises SME and tourism capacity building to 2029", "Graduation channels for RTFF borrowers; in-country monitoring and recovery; co-delivery; SMEDCO’s training-linked lending as a model", "Individual follow-up"],
  ["Guarantee schemes: ECGC, NASRIA and BOSRIA, ZCGS, FGC", "National credit guarantee schemes", "Tourism windows with first loss; cover for graduated RTFF borrowers", "Term-sheet talks"],
  ["Commercial banks: FNB, Stanbic, ZANACO and others", "Present in the hub towns; FNB Zambia scored credit; Wilderness–Stanbic supplier finance", "Graduation of RTFF borrowers; supplier finance against anchor contracts", "Through national finance working groups"],
  ["Conservation funds: CCFN (Namibia), NEF (Botswana)", "Community conservation funding", "Capital for community revolving funds; first loss; results-based finance (Model D)", "Not yet engaged"],
  "Pipeline, verification and markets",
  ["ITC Green Value Chain programme (EU-funded, Botswana)", "Draft grant facility of about €2 million, some 142 grants of €10,000–35,000, to de-risk CEDA and NDB lending", "Matched grants to de-risk RTFF loans; referrals in shared areas; GIZ on ITC’s technical committee", "Meeting with ITC’s grant office (ITC minutes)"],
  ["Anchor operators and their foundations (for example Chobe Holdings and Chobe Impact, Natural Selection, African Bush Camps, Wilderness)", "Buyers; foundations funding incubation of informal operators", "Nominate and back borrowers; offtake; repayment deducted from supplier payments; on-time payment", "Through supply MOUs"],
  ["Verifiers: GreenLoop (Botswana), Target 8.9 ESG audit, Travelife; BTO certification", "ESG due diligence (GreenLoop for BDC); Botswana Sustainability Week; advice to BURS on a green taxonomy", "Baselines and milestone verification; lender learning sessions; alignment with the tax-rebate taxonomy", "Short pilot contract proposed by GreenLoop"],
]
annexD = heading('Heading1', 'Annex D: Strategic Partners and Funders', '_Toc246699762') + body("Possible collaborators for the sustainability of the RTFF and the other Output 1.2 mechanisms, including funders active in KAZA, drawn from the source reports, the consultations and the meetings listed in Annex E. Statuses are as of November 2026; no partner has committed to a role beyond those stated. Table 23 lists them by type of partnership.") + caption(23, 'Possible strategic partners and funders') + table([2300, 2650, 3050, 1746], ['Partner', 'Role in KAZA today', 'Possible role for the RTFF and other mechanisms', 'Status and next step'], partners) + SPACER
hits = [m.start() for m in re.finditer(re.escape('Annex D: References'), s)]
assert len(hits) == 2
bodyh = None
for h in hits:
    ps = max(s.rfind('<w:p ', 0, h), s.rfind('<w:p>', 0, h))
    if 'w:val="Heading1"' in s[ps:h]: bodyh = ps
s = s[:bodyh] + annexD + s[bodyh:]
s = s.replace('Annex D: References', 'Annex E: References'); log.append('insert: Annex D and Table 23; references renamed Annex E')

# ---------- 6. references ----------
i = s.find('OECD (2018). OECD DAC Blended Finance'); assert i > 0
ps = max(s.rfind('<w:p ', 0, i), s.rfind('<w:p>', 0, i))
refp = lambda t: '<w:p><w:pPr><w:spacing w:after="100"/><w:ind w:left="567" w:hanging="567"/></w:pPr>' + run(t, sz=20) + '</w:p>'
refs = [
  "SIGMA International (2026). Victoria Falls Destination Focus Group Working Session: Participant Feedback Findings, 17 November 2026. Prepared for GIZ.",
  "SIGMA International (2026). Maun Destination Focus Group Working Session: Participant Feedback Findings, 20 November 2026. Prepared for GIZ.",
  "GIZ and International Trade Centre (2026). Technical meeting minutes: R-NBT and the ITC Green Value Chain programme, 27 October 2026.",
  "GIZ and Sustainable Finance Coalition (2026). Meeting minutes: the Regenerative Tourism Finance Facility and the KAZA Conservation Trust Fund, 26 November 2026.",
  "MNZ Consult (2026). KAZA–OKACOM synergy and coordination opportunities. Note, November 2026. Prepared for GIZ.",
]
s = s[:ps] + ''.join(refp(t) for t in refs) + s[ps:]; log.append('insert: five references')

# ---------- 7. contents entries ----------
def toc_par(title):
    i = s.find('>' + title + '<')
    ps = max(s.rfind('<w:p ', 0, i), s.rfind('<w:p>', 0, i)); pe = s.find('</w:p>', i) + 6
    assert 'TOC' in s[ps:pe], title
    return ps, pe, s[ps:pe]
def clone(src, title, anchor):
    old = re.search(r'w:anchor="(_Toc\d+)"', src).group(1)
    oldt = re.search(r'<w:t[^>]*>([^<]*)</w:t>', src).group(1)
    n = src.replace(old, anchor).replace('>' + oldt + '<', '>' + esc(title) + '<')
    n = re.sub(r' w14:paraId="[0-9A-F]+"', '', n); return re.sub(r' w14:textId="[0-9A-F]+"', '', n)
ps, pe, p = toc_par('7.7 Immediate next steps')
s = s[:ps] + clone(p, '7.6 Strategic partnerships for sustainability', '_Toc246699761') + s[ps:]
ps, pe, p = toc_par('Annex E: References')
s = s[:ps] + clone(p, 'Annex D: Strategic Partners and Funders', '_Toc246699762') + s[ps:]
log.append('contents: two new entries; renamed entries')

open(P, 'w', encoding='utf8').write(s)
st = open('u/word/settings.xml', encoding='utf8').read()
if 'w:updateFields' not in st:
    for tag in ['<w:hdrShapeDefaults', '<w:footnotePr', '<w:endnotePr', '<w:compat']:
        k = st.find(tag)
        if k > 0: st = st[:k] + '<w:updateFields w:val="true"/>' + st[k:]; break
    open('u/word/settings.xml', 'w', encoding='utf8').write(st); log.append('settings: update fields on open')
print('\n'.join(log))
