# -*- coding: utf-8 -*-
"""Render a .docx to PDF with LibreOffice and map each H1/H2 heading to its page number."""
import json, os, subprocess, sys, tempfile
docx, info, out = sys.argv[1], sys.argv[2], sys.argv[3]
heads = json.load(open(info))["headings"]
tmp = tempfile.mkdtemp(dir=os.path.dirname(os.path.abspath(out)))
subprocess.run(["soffice", "--headless", "--convert-to", "pdf", "--outdir", tmp, docx], check=True, capture_output=True)
pdf = os.path.join(tmp, os.path.splitext(os.path.basename(docx))[0] + ".pdf")
n = int([l for l in subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout.splitlines() if l.startswith("Pages")][0].split()[-1])
pages = [subprocess.run(["pdftotext", "-f", str(i), "-l", str(i), pdf, "-"], capture_output=True, text=True).stdout for i in range(1, n + 1)]
norm = lambda s: " ".join(s.replace(" ", " ").split())
# skip front matter: start after the last page that contains the TOC title or acronym/glossary tables
start = max(i for i, t in enumerate(pages) if "Glossary of Terms" in t) + 1
res, cur = {}, start
for h in heads:
    hn = norm(h)
    for i in range(cur, n):
        lines = [norm(l) for l in pages[i].splitlines() if l.strip()]
        joined = [" ".join(lines[j:j + 3]) for j in range(len(lines))]
        if any(l == hn for l in lines) or any(j.startswith(hn) and lines[k] and hn.startswith(lines[k]) for k, j in enumerate(joined)):
            res[h] = i + 1; cur = i; break
    else:
        print("NOT FOUND:", h)
json.dump(res, open(out, "w"), indent=1, ensure_ascii=False)
os.replace(pdf, os.path.splitext(out)[0] + ".pdf")
print("pages:", n, "headings mapped:", len(res), "of", len(heads))
