# -*- coding: utf-8 -*-
"""Add Part D (anonymous finance card, RTFF pilot scope) to the Victoria Falls facilitation pack.
Usage: python3 -I add_finance_card.py <in.docx> <out.docx>"""
import sys, zipfile, shutil
from lxml import etree
src, out = sys.argv[1], sys.argv[2]
NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
W = "{%s}" % NS
XS = "{http://www.w3.org/XML/1998/namespace}space"
z = zipfile.ZipFile(src)
root = etree.fromstring(z.read("word/document.xml"))
body = root.find(W + "body")
kids = list(body)
text = lambda e: "".join(t.text or "" for t in e.iter(W + "t"))

def el(tag, **a):
    e = etree.Element(W + tag)
    for k, v in a.items(): e.set(W + k, v)
    return e

def run(t, bold=False, br=False):
    r = el("r")
    if bold:
        rp = etree.SubElement(r, W + "rPr"); etree.SubElement(rp, W + "b")
    if br: etree.SubElement(r, W + "br")
    if t:
        x = etree.SubElement(r, W + "t"); x.text = t; x.set(XS, "preserve")
    return r

def para(style=None, parts=()):
    p = el("p")
    if style:
        pp = etree.SubElement(p, W + "pPr"); etree.SubElement(pp, W + "pStyle").set(W + "val", style)
    for prt in parts: p.append(prt)
    return p

def S(style, t): return para(style, [run(t)])
def label(lbl, t): return para(None, [run(lbl + "  ", bold=True), run(t)])
def boxes(*lines):
    """Tick-box options; each line becomes its own line in one paragraph."""
    parts = []
    for i, line in enumerate(lines):
        parts.append(run("     ".join("☐ " + o for o in line), br=i > 0))
    return para(None, parts)
def pagebreak():
    p = el("p"); r = etree.SubElement(p, W + "r"); etree.SubElement(r, W + "br").set(W + "type", "page"); return p

card = [
    pagebreak(),
    S("Kicker", "PART D  /  ANONYMOUS FINANCE CARD  1 OF 2"),
    S("Heading1", "Finance to supply the value chain"),
    S("Meta", "Hwange–Victoria Falls–Livingstone  /  MSMEs and suppliers only  /  Session 3, about ten minutes"),
    S(None, "Do not write your name. Tick what applies on both sides and drop the card in the finance box. Your answers show what finance local businesses need to supply lodges, hotels and operators, and how a buyer-linked loan of the kind proposed for the Regenerative Tourism Finance Facility (RTFF) pilot would work for you."),
    S("Small", "The RTFF is a possible pilot presented by the TUI Care Foundation; it is not confirmed. This card is not a loan application, and no decision will be made from it. Results are reported only as totals."),

    S("Heading2", "A   Your business"),
    S("Prompt", "1. What do you supply, or want to supply, to tourism buyers?"),
    boxes(["Fresh produce, poultry or eggs", "Crafts and décor", "Guiding or cultural experience"],
          ["Transport or transfers", "Laundry, maintenance or other services", "Other ____________"]),
    S("Prompt", "2. Where are you based, and is the business registered?"),
    boxes(["Victoria Falls", "Hwange", "Livingstone", "Other ____________"],
          ["Registered company", "Council licence only", "Group or cooperative", "Not registered"]),
    S("Prompt", "3. Who owns or leads the business?"),
    boxes(["A woman", "A man", "Jointly", "A group or community"]),
    para(None, [run("Owner’s year of birth (optional): ________")]),

    S("Heading2", "B   Your buyer"),
    S("Prompt", "4. Do you sell to a lodge, hotel, tour operator or DMC now?"),
    boxes(["Yes, with a written contract or letter of intent", "Yes, regular informal orders"],
          ["Occasionally", "Not yet, but a buyer is interested", "No"]),
    S("Prompt", "5. How quickly do buyers usually pay you?"),
    boxes(["On delivery", "Within 30 days", "30–60 days", "More than 60 days"]),

    S("Heading2", "C   The finance you would need to supply (or supply more)"),
    S("Prompt", "6. What would the money be for? (tick up to two)"),
    boxes(["Working capital to fill an order", "Stock or inputs", "Equipment, vehicle or boat"],
          ["Licences and compliance", "Premises or infrastructure", "Other ____________"]),
    S("Prompt", "7. How much would you need, in US dollars?"),
    boxes(["Under 1,000", "1,000–10,000", "10,000–30,000", "Over 30,000"]),
    S("Small", "As presented, RTFF Tier 1 loans are EUR 1,000–10,000 and Tier 2 loans EUR 10,000–30,000, repaid within 24 months."),
    S("Prompt", "8. When in the year do you need it, and what do you mainly earn in?"),
    para(None, [run("Month(s): ____________     "), run("☐ USD     ☐ ZiG     ☐ Kwacha     ☐ A mix")]),
    S("Prompt", "9. Could the business repay a loan within 24 months from its tourism sales?"),
    boxes(["Yes, in monthly payments", "Yes, if payments pause in the low season", "Not sure", "No"]),

    pagebreak(),
    S("Kicker", "PART D  /  ANONYMOUS FINANCE CARD  2 OF 2"),
    S("Heading1", "Finance to supply the value chain continued"),
    S("Meta", "Hwange–Victoria Falls–Livingstone  /  MSMEs and suppliers only"),
    S("Heading2", "D   Your response to a buyer-linked loan"),
    label("Imagine", "a loan with no collateral, linked to an order from a buyer, released after coaching and 16 hours of mentoring, with a lower cost if you meet agreed local or environmental results."),
    S("Prompt", "10. Would you apply?"),
    boxes(["Yes", "Maybe", "No"]),
    S("Prompt", "11. If maybe or no, why? (tick up to two)"),
    boxes(["I do not want debt", "The amount does not fit", "I have no buyer agreement", "I am not registered"],
          ["Currency risk", "I would rather have a grant", "Coaching takes too long", "Other ____________"]),
    S("Prompt", "12. Which result could your business report on to lower the loan cost?"),
    boxes(["Buying local food or inputs", "Cutting single-use plastic", "Caring for nature or wildlife"],
          ["Jobs for women or young people", "None yet"]),
    S("Prompt", "13. Have you applied for business finance before?"),
    boxes(["Never applied", "Applied and approved", "Applied and refused: main reason ____________"]),
    S("Prompt", "14. What one change would make finance work for your business?"),
    S("WriteLine", " "),
    S("WriteLine", " "),
    S("Small", "Thank you. Fold this card and drop it in the finance box, separate from your questionnaire."),
]
sect = body.find(W + "sectPr")
for e in card: sect.addprevious(e)

# Cross-references in the existing pack
for k in kids:
    t = text(k)
    if k.tag == W + "p" and t.startswith("Page 1 for the facilitation team"):
        k.append(run(" Pages 10–11 (Part D) one anonymous finance card per MSME or supplier, printed double-sided."))
    if k.tag == W + "p" and t.startswith("MNZ Consult can probe options on both sides"):
        k.addnext(S("Small", "While Sigma leads coaching and market access, MNZ Consult tallies the Part D cards by value chain: purposes, amount bands, buyer status and how many would apply to a buyer-linked loan, and why not. Report the totals at hand-back without identifying anyone."))

tmp = out + ".tmp"
with zipfile.ZipFile(src) as zin, zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if item.filename == "word/document.xml":
            data = etree.tostring(root, xml_declaration=True, encoding="UTF-8", standalone=True)
        zout.writestr(item, data)
shutil.move(tmp, out)
print("saved", out)
