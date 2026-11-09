# -*- coding: utf-8 -*-
"""Keep only Part D (the anonymous finance card) from the pack built by add_finance_card.py.
Usage: python3 -I extract_finance_card.py <pack_with_card.docx> <out.docx>"""
import sys, zipfile, shutil
from lxml import etree
src, out = sys.argv[1], sys.argv[2]
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
z = zipfile.ZipFile(src)
root = etree.fromstring(z.read("word/document.xml"))
body = root.find(W + "body")
text = lambda e: "".join(t.text or "" for t in e.iter(W + "t"))
kids = list(body)
start = next(i for i, k in enumerate(kids) if text(k).startswith("PART D"))
for k in kids[:start]:          # drop Parts A-C, including the page break before Part D
    if k.tag != W + "sectPr":
        body.remove(k)
tmp = out + ".tmp"
with zipfile.ZipFile(src) as zin, zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if item.filename == "word/document.xml":
            data = etree.tostring(root, xml_declaration=True, encoding="UTF-8", standalone=True)
        zout.writestr(item, data)
shutil.move(tmp, out)
print("saved", out)
