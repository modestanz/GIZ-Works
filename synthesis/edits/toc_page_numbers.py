import re, subprocess, html, sys, shutil
mode = sys.argv[1]  # 'word' or 'pdf'
s = open('u/word/document.xml', encoding='utf8').read()
def pages(pdf):
    out = {}
    n = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout).group(1))
    for pg in range(3, n + 1):
        for l in subprocess.run(['pdftotext', '-f', str(pg), '-l', str(pg), pdf, '-'], capture_output=True, text=True).stdout.splitlines():
            out.setdefault(l.strip(), pg)
    return out
new = pages('out.pdf'); old = pages('in.pdf')
renum = {'2.6 What the November working sessions add': '2.5 What the November working sessions add', '2.7 Where the reports differ': '2.6 Where the reports differ'}
def oldtitle(t):
    for a, b in renum.items():
        if t.startswith(a): return b + t[len(a):]
    return t
def fix(m):
    p = m.group(0)
    ts = re.findall(r'(<w:t[^>]*>)([^<]*)(</w:t>)', p)
    if len(ts) < 2: return p
    title = html.unescape(ts[0][1]).strip(); num = ts[-1][1]
    if not num.strip().isdigit(): return p
    n_new = new.get(title)
    if n_new is None: return p
    if mode == 'pdf':
        val = n_new
    else:
        n_old = old.get(oldtitle(title))
        if n_old is None:  # the new section: same offset as the 2.4 entry
            return p.replace(f'>{num}</w:t>', f'>{prev[0]}</w:t>') if prev[0] else p
        val = int(num) + (n_new - n_old)
    prev[0] = val
    i = p.rfind(f'>{num}</w:t>')
    return p[:i] + f'>{val}</w:t>' + p[i + len(num) + 7:]
prev = [None]
s = re.sub(r'<w:p[ >](?:(?!</w:p>).)*?w:val="TOC\d"(?:(?!</w:p>).)*?</w:p>', fix, s, flags=re.S)
open('u/word/document.xml', 'w', encoding='utf8').write(s)
print('ok', mode)
