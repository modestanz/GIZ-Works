import sys, copy
import docx, docx.text.run
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

src, out = sys.argv[1], sys.argv[2]
d = docx.Document(src)
body = d.element.body

# 1. A4 portrait, 22 mm margins on every section
for s in d.sections:
    s.page_width, s.page_height = Mm(210), Mm(297)
    s.left_margin = s.right_margin = Mm(22)
    s.top_margin = s.bottom_margin = Mm(22)
sect0 = d.sections[0]
pw, ph, lm, rm = sect0.page_width, sect0.page_height, sect0.left_margin, sect0.right_margin

def fld(par, instr, placeholder=''):
    def r(): return OxmlElement('w:r')
    a = r(); fc = OxmlElement('w:fldChar'); fc.set(qn('w:fldCharType'), 'begin'); a.append(fc)
    b = r(); it = OxmlElement('w:instrText'); it.set(qn('xml:space'), 'preserve'); it.text = instr; b.append(it)
    c = r(); fc = OxmlElement('w:fldChar'); fc.set(qn('w:fldCharType'), 'separate'); c.append(fc)
    t = r(); tt = OxmlElement('w:t'); tt.text = placeholder; t.append(tt)
    e = r(); fc = OxmlElement('w:fldChar'); fc.set(qn('w:fldCharType'), 'end'); e.append(fc)
    for x in (a, b, c, t, e): par._p.append(x)

# 2. Cover block: title, subtitle, date; replace the doc-mention byline
paras = d.paragraphs
title, byline = paras[0], paras[1]
title.alignment = WD_ALIGN_PARAGRAPH.LEFT
# title out of the outline; sections become Heading 1, subsections Heading 2
title.style = d.styles['Normal']
for r in title.runs: r.font.size = Pt(22); r.bold = True; r.font.color.rgb = RGBColor(0x1F, 0x3A, 0x5F)
title.paragraph_format.space_after = Pt(10)
for p in d.paragraphs[1:]:
    if p.style.name == 'Heading 2': p.style = d.styles['Heading 1']
    elif p.style.name == 'Heading 3': p.style = d.styles['Heading 2']
for r in byline.runs: r.text = ''
byline._p.clear_content() if hasattr(byline._p, 'clear_content') else None
for el in list(byline._p):
    if el.tag != qn('w:pPr'): byline._p.remove(el)
sub = byline.add_run('Access to finance for women-, youth- and community-led tourism MSMEs in the Kavango Zambezi Transfrontier Conservation Area')
sub.font.size = Pt(12)
date_p = copy.deepcopy(byline._p); byline._p.addnext(date_p)
dp = docx.text.paragraph.Paragraph(date_p, byline._parent)
for el in list(date_p):
    if el.tag != qn('w:pPr'): date_p.remove(el)
rr = dp.add_run('Angola · Botswana · Namibia · Zambia · Zimbabwe  |  Desk review, October 2026'); rr.font.size = Pt(10.5)
rr.font.color.rgb = RGBColor(0x59, 0x59, 0x59)

# 3. Contents heading + TOC field (sections are Heading 2/3; the title is Heading 1 and stays out)
toc_head = copy.deepcopy(date_p); date_p.addnext(toc_head)
th = docx.text.paragraph.Paragraph(toc_head, byline._parent)
for el in list(toc_head):
    if el.tag != qn('w:pPr'): toc_head.remove(el)
th.paragraph_format.space_before = Pt(24)
x = th.add_run('Contents'); x.bold = True; x.font.size = Pt(14)
toc_p = copy.deepcopy(toc_head); toc_head.addnext(toc_p)
tp = docx.text.paragraph.Paragraph(toc_p, byline._parent)
for el in list(toc_p):
    if el.tag != qn('w:pPr'): toc_p.remove(el)
tp.paragraph_format.space_before = Pt(0)
fld(tp, 'TOC \\o "1-2" \\h \\z \\u', 'Right-click and choose Update Field to build the table of contents.')
brk = copy.deepcopy(toc_p); toc_p.addnext(brk)
bp = docx.text.paragraph.Paragraph(brk, byline._parent)
for el in list(brk):
    if el.tag != qn('w:pPr'): brk.remove(el)
bp.add_run().add_break(WD_BREAK.PAGE)

# 4. Wide tables: fixed widths sized to content, smaller font, repeating header rows
def set_widths(tbl, total):
    n = len(tbl.columns); rows = tbl.rows
    word = [0]*n; tot = [0]*n
    for r in rows:
        for i, c in enumerate(r.cells[:n]):
            ws = [len(w) for w in c.text.split()] or [0]
            word[i] = max(word[i], min(max(ws), 18)); tot[i] += min(len(c.text), 90)
    lens = [max(word[i] + 2, (tot[i] / len(rows)) ** 0.85) for i in range(n)]
    w = [int(total * l / sum(lens)) for l in lens]
    tblPr = tbl._tbl.tblPr
    lay = OxmlElement('w:tblLayout'); lay.set(qn('w:type'), 'fixed'); tblPr.append(lay)
    tw = tblPr.find(qn('w:tblW'))
    if tw is not None: tw.set(qn('w:type'), 'dxa'); tw.set(qn('w:w'), str(int(total / 635)))
    grid = tbl._tbl.find(qn('w:tblGrid'))
    if grid is not None:
        for gc, wi in zip(grid.findall(qn('w:gridCol')), w): gc.set(qn('w:w'), str(int(wi / 635)))
    for r in rows:
        for c, wi in zip(r.cells[:n], w): c.width = wi

def small(tbl, size):
    for r in tbl.rows:
        for c in r.cells:
            for r_el in c._tc.iter(qn('w:r')):
                docx.text.run.Run(r_el, c).font.size = Pt(size)

paras = {p.text.strip(): p for p in d.paragraphs}
annexA = paras['Annex A. Stakeholder contact database']._p
annexB = paras['Annex B. Sources']._p
def in_annex(el):
    e = annexA
    while e is not None and e is not annexB:
        if e is el: return True
        e = e.getnext()
    return False
portrait_text, land_text = pw - lm - rm, ph - lm - rm
for t in d.tables:
    n = len(t.columns)
    if in_annex(t._tbl): small(t, 8); set_widths(t, land_text)
    elif n >= 6: small(t, 8.5); set_widths(t, portrait_text)
    elif n >= 4: small(t, 9.5); set_widths(t, portrait_text)
    else: set_widths(t, portrait_text)
    for c in t.rows[0].cells:
        tcPr = c._tc.get_or_add_tcPr(); shd = OxmlElement('w:shd')
        shd.set(qn('w:val'), 'clear'); shd.set(qn('w:color'), 'auto'); shd.set(qn('w:fill'), 'E7ECF2'); tcPr.append(shd)
        for r_el in c._tc.iter(qn('w:r')): docx.text.run.Run(r_el, c).bold = True
    nxt = t._tbl.getnext()
    if nxt is not None and nxt.tag == qn('w:p'):
        docx.text.paragraph.Paragraph(nxt, t._parent).paragraph_format.space_before = Pt(10)
    trPr = t.rows[0]._tr.get_or_add_trPr()
    h = OxmlElement('w:tblHeader'); h.set(qn('w:val'), 'true'); trPr.append(h)
    # keep the narrative paragraph above on the same page as the table start
    prev = t._tbl.getprevious()
    if prev is not None and prev.tag == qn('w:p'):
        docx.text.paragraph.Paragraph(prev, t._parent).paragraph_format.keep_with_next = True

# 5. Footer: "Page X of Y" plus short title, on the final section (others link to previous)
def footer(section):
    f = section.footer; f.is_linked_to_previous = False
    p = f.paragraphs[0] if f.paragraphs else f.add_paragraph()
    for el in list(p._p):
        if el.tag != qn('w:pPr'): p._p.remove(el)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    a = p.add_run('KAZA Tourism MSME Financial Barriers & Opportunities Report  ·  Page '); a.font.size = Pt(8.5)
    fld(p, 'PAGE', '1'); b = p.add_run(' of '); b.font.size = Pt(8.5); fld(p, 'NUMPAGES', '1')
    for r_el in p._p.iter(qn('w:r')): docx.text.run.Run(r_el, p).font.size = Pt(8.5)
footer(d.sections[0])

# 6. Landscape section for Annex A (sectPr in a paragraph ends the section before it)
def sect_break(before_el, landscape):
    p = OxmlElement('w:p'); pPr = OxmlElement('w:pPr')
    sp = copy.deepcopy(body.find(qn('w:sectPr')))
    pg = sp.find(qn('w:pgSz'))
    if landscape:
        pg.set(qn('w:w'), str(int(ph / 635))); pg.set(qn('w:h'), str(int(pw / 635))); pg.set(qn('w:orient'), 'landscape')
    pPr.append(sp); p.append(pPr); before_el.addprevious(p)
sect_break(annexA, landscape=False)
sect_break(annexB, landscape=True)

d.settings.element.append(OxmlElement('w:updateFields'))
d.settings.element[-1].set(qn('w:val'), 'true')
d.save(out)
print('built', len(d.tables), 'tables')
