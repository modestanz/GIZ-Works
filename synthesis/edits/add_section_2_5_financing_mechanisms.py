import re, html
P = 'u/word/document.xml'
s = open(P, encoding='utf8').read()
orig_len = len(s)
esc = lambda t: html.escape(t, quote=False)

def run(t, bold=False, sz=None, color=None, italic=False):
    rp = ''
    if bold: rp += '<w:b/><w:bCs/>'
    if italic: rp += '<w:i/><w:iCs/>'
    if color: rp += f'<w:color w:val="{color}"/>'
    if sz: rp += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/>'
    rp = f'<w:rPr>{rp}</w:rPr>' if rp else ''
    return f'<w:r>{rp}<w:t xml:space="preserve">{esc(t)}</w:t></w:r>'

def para(parts, ppr='<w:pPr><w:jc w:val="both"/></w:pPr>'):
    return '<w:p>' + ppr + ''.join(parts) + '</w:p>'

def body(t):
    # **bold** markup
    parts = []
    for seg in re.split(r'(\*\*[^*]+\*\*)', t):
        if not seg: continue
        parts.append(run(seg[2:-2], bold=True) if seg.startswith('**') else run(seg))
    return para(parts)

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

# ---------- 1. renumber own table references (Table N, N>=5) before inserting ----------
cnt = {'tab': 0}
def tabsub(m):
    pre, word, n = m.group(1), m.group(2), int(m.group(3))
    if n >= 5:
        cnt['tab'] += 1
        return f'{pre}{word} {n + 1}'
    return m.group(0)
# only inside w:t text; skip references to other reports (F1-F5 tables, annex tables of other reports)
def fix_text(t):
    return re.sub(r'((?<!F\d )(?<!F\d-D\d )(?<!Annex B, ))(Table) (\d+)', tabsub, t)
s = re.sub(r'(<w:t(?: [^>]*)?>)([^<]*)(</w:t>)', lambda m: m.group(1) + fix_text(m.group(2)) + m.group(3), s)

# ---------- 2. renumber sections 2.5 -> 2.6 and 2.6 -> 2.7 (headings, TOC, references) ----------
n_sec = 0
for a, b in [('2.6 Where the reports differ', '2.7 Where the reports differ'), ('2.5 What the November working sessions add', '2.6 What the November working sessions add'), ('(Section 2.6)', '(Section 2.7)')]:
    k = s.count(a); n_sec += k; s = s.replace(a, b)

# ---------- 3. new section 2.5 ----------
TOCBM = '_Toc246399025'
bm_ids = [int(x) for x in re.findall(r'<w:bookmarkStart w:id="(\d+)"', s)]
BID = max(bm_ids) + 1
heading = f'<w:p><w:pPr><w:pStyle w:val="Heading2"/></w:pPr><w:bookmarkStart w:id="{BID}" w:name="{TOCBM}"/><w:r><w:t>2.5 Financing mechanisms identified</w:t></w:r><w:bookmarkEnd w:id="{BID}"/></w:p>'
p1 = body("F4 assessed 18 types of financing mechanism in four families (grant-based, debt-based, risk-sharing and alternative, including capital-market and conservation instruments) against five criteria: fit with MSME segments, reduction of the barriers, fit with the financial landscape, regulation and sustainability. It also rated each against the five barriers and the Joint Action's two cross-cutting requirements, gender and youth inclusion and regenerative outcomes. Its central finding is that **no single instrument fills the gap: the feasible response is a layered stack tied to buyers.** Grants, coaching and community finance form the base; order-backed working capital, asset finance and guarantee-backed seasonal loans the middle, with the RTFF as the first collateral-free loan product; and term, revenue-linked and conservation-linked finance the top. Enterprises graduate upward as each step creates the record the next lender needs. Table 5 summarizes the mechanisms identified, how F4 rates their feasibility and how this synthesis uses them.")
cap = '<w:p><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="160" w:after="80"/></w:pPr>' + run('Table 5: ', bold=True, sz=20, color='1F4E5F') + run('Financing mechanisms identified in F4 and their use in Output 1.2', italic=True, sz=20) + '</w:p>'
tbl = table([2150, 1250, 3000, 3346], ['Mechanism', 'Feasibility (F4)', 'Market gap addressed', 'Use in this synthesis'], [
    'Grant-based mechanisms',
    ['Matching, compliance and TA grants', 'Medium–High to High', 'Co-investment in equipment; records, tax clearance and buyer specifications', 'Lot 1 and Lot 2 (Section 5.2); TA tied to a buyer’s specification'],
    ['First-loss grants', 'High', 'Lender appetite for new, collateral-light borrowers and products', '10–15% of portfolio losses (20% for women- and youth-led or first-cycle portfolios) beneath national cover, tapering to zero'],
    'Debt-based mechanisms',
    ['Seasonal loans and grace periods', 'High', 'Repayment terms that do not fit seasonal cash flow', 'Standard in partner products; asset loans disbursed in the low season'],
    ['RTFF collateral-free loans', 'Medium–High', 'Buyer-linked Tier 1–2 loans of EUR 1,000–30,000 that no provider serves', 'Recommended reference debt pilot, with adjustments (Section 5.3)'],
    ['Revolving funds', 'Medium', 'Small repeat credit in community areas without a lender', 'Community funds managed by MFIs; no new public tourism fund'],
    ['Revenue-based finance', 'Low–Medium', 'Repayment as a share of card, platform or mobile-money receipts', 'Small later pilot only'],
    'Risk-sharing mechanisms',
    ['Portfolio and partial guarantees', 'High', 'Collateral shortfall for borrowers lenders already reach', 'Tourism windows in ECGC, NASRIA/BOSRIA and a Zambian risk-sharing partner, with first loss'],
    'Alternative mechanisms',
    ['Supply chain finance', 'High', 'Working capital tied up by 30–90-day anchor payment terms', 'Purchase-order finance and invoice discounting against the standard supply MOU'],
    ['Savings groups, VSLAs and community guarantee funds', 'Medium to Medium–High', 'Savings and very small credit for Tier 0–1 members, mostly women', 'Linked to MFIs; community guarantee pool (Model C)'],
    ['Blended structures', 'Medium–High', 'Segments too risky for commercial capital alone', 'Models A–D, below'],
    ['Impact investment, green bonds, PPPs, PES and conservation trust funds', 'Low to Medium', 'Indirect: capital for anchors, lenders and the RTFF; outcome payments', 'Supporting roles, not MSME pilot instruments'],
])
spacer = '<w:p><w:pPr><w:spacing w:after="0" w:line="120" w:lineRule="exact"/></w:pPr></w:p>'
paras = [
    "**Most feasible.** Order-backed supply chain finance against standard supply MOUs answers the binding constraint in food, crafts and services, where buyers pay 30–90 days late. Guarantee windows inside existing national schemes, with a grant-funded first-loss layer, use institutions that already exist (ECGC with 75–85% cover; NASRIA with 60% and a proposed 80/20 tier for women- and youth-led businesses; NASRIA/BOSRIA in Botswana; a Zambian lender willing to pay for cover). Low-season grace and seasonal instalments are viable now with product redesign, and repayment linked to confirmed orders or forward bookings where an anchor pays into a controlled account.",
    "**Blended models for women- and youth-led MSMEs.** Women own or lead 40% of surveyed MSMEs and youth 17%, and both lack land collateral and credit history. F4 proposes four models: (A) a first-loss grant with movable-asset and lease-to-own finance; (B) a guarantee window that accepts orders, invoices and payment trails, built on NASRIA’s 80/20 proposal; (C) a community guarantee fund seeded by grant and topped up by savings groups and community revenue; and (D) results-based finance tied to conservation outcomes. Models A to C are recommended for the first cohort; Model D is designed now and piloted in PA2.",
    "**Selection guidance.** The readiness tier decides the instrument (no debt at Tier 0); a credible buyer decides whether order-backed finance comes first; and the security available decides the model: a movable asset (Model A), an order or invoice (Model B), savings-group membership (Model C), a conservation payment stream (Model D) or none (an RTFF loan if buyer-linked, otherwise a grant).",
    "**National first, regional where it adds value.** Money is lent, guaranteed and recovered nationally; design, standards, counter-guarantees, a shared first-loss and TA pool and basin-level conservation finance (the CORB Fund) can be regional. The RTFF’s offshore administration during the pilot is the one cross-border lending route and still needs country checks on licensing, exchange control and currency risk.",
    "**Lot 2 grantees and sustainability.** Piloting debt and risk-sharing with Lot 2 grantees is feasible for a screened subset (Tier 2, or Tier 1 with a buyer), likely one in four or fewer, with the grant serving as borrower contribution, cash collateral or pool seed. Each mechanism has an institutional home that can carry it after the pilot (national guarantee schemes, partner lenders’ product lines, anchors’ procurement policies, MFI-managed community funds and the RTFF’s future arrangements with the KAZA Secretariat), and concessionality tapers on a pre-agreed schedule. Chapters 4 and 5 apply these mechanisms by value chain and by activity.",
]
section = heading + p1 + cap + tbl + spacer + ''.join(body(t) for t in paras)

# insert before the body heading "2.6 What the November working sessions add" (the Heading2 paragraph, not the TOC entry)
hpos = [m.start() for m in re.finditer(re.escape('2.6 What the November working sessions add'), s)]
target = None
for h in hpos:
    pstart = s.rfind('<w:p ', 0, h); pstart2 = s.rfind('<w:p>', 0, h); pstart = max(pstart, pstart2)
    if 'w:val="Heading2"' in s[pstart:h]:
        target = pstart
assert target is not None, hpos
s = s[:target] + section + s[target:]

# ---------- 4. TOC entry: copy the 2.4 entry ----------
i = s.find('2.4 The market gap and the RTFF')
ps = max(s.rfind('<w:p ', 0, i), s.rfind('<w:p>', 0, i)); pe = s.find('</w:p>', i) + 6
toc24 = s[ps:pe]
assert 'TOC2' in toc24, toc24[:200]
old_anchor = re.search(r'w:anchor="(_Toc\d+)"', toc24).group(1)
new = toc24.replace(old_anchor, TOCBM).replace('2.4 The market gap and the RTFF', '2.5 Financing mechanisms identified')
new = re.sub(r' w14:paraId="[0-9A-F]+"', '', new); new = re.sub(r' w14:textId="[0-9A-F]+"', '', new)
s = s[:pe] + new + s[pe:]

# ---------- 5. executive summary paragraph after the core finding ----------
k = s.find('fit, readiness and risk problem, not a capital shortage')
assert k > 0 and s.count('fit, readiness and risk problem, not a capital shortage') == 1
ps = max(s.rfind('<w:p ', 0, k), s.rfind('<w:p>', 0, k)); pe = s.find('</w:p>', k) + 6
assert 'Core finding' in s[ps - 400:ps]
es = '<w:p><w:pPr><w:pStyle w:val="Heading3"/></w:pPr><w:r><w:t>Financing mechanisms identified</w:t></w:r></w:p>' + body("No single instrument fills this gap. Order-backed supply chain finance, guarantee windows with a first-loss layer and seasonal loans are the most feasible mechanisms; the RTFF is the recommended collateral-free loan pilot; four blended models (first loss with asset finance, guarantee windows that accept orders, community guarantee funds and results-based conservation finance) address collateral for women- and youth-led enterprises; and impact investment, bonds and conservation funds play supporting roles (Section 2.5).")
s = s[:pe] + es + s[pe:]

open(P, 'w', encoding='utf8').write(s)
print('table refs renumbered:', cnt['tab'], '| section refs:', n_sec, '| bookmark id', BID, '| grew', len(s) - orig_len)

# settings: ask Word to refresh fields (TOC page numbers) on open
st = open('u/word/settings.xml', encoding='utf8').read()
if 'w:updateFields' not in st:
    st = re.sub(r'(<w:settings[^>]*>)', r'\1<w:updateFields w:val="true"/>', st, 1)
    open('u/word/settings.xml', 'w', encoding='utf8').write(st)
