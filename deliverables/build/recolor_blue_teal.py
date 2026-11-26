import re, sys, glob, os
M = {
 "1F3B2C": "0F2F4F",  # forest -> deep navy (dk2, titles, dark panels)
 "3D5A44": "1D5C73",  # olive -> deep teal-blue
 "2F7A4B": "178A68",  # green -> teal-green (accent1)
 "C98A2B": "1F6FB2",  # gold -> blue (accent2)
 "7B6A10": "0E7C86",  # olive brown -> teal (accent4)
 "B8563E": "C8553D",  # terracotta accent (accent3)
 "6F8B6E": "4E8FA0",  # sage -> muted blue-teal (accent5)
 "F0EAD6": "EAF2F4",  # cream -> pale blue-grey (lt2, card fills)
 "F7EFD9": "E3F1EC",  # peak-season shading -> pale mint
 "D9D2BF": "C7D6DC",  # lines and borders
}
pat = re.compile(r'(val=")(' + "|".join(M) + r')(")', re.I)
n = 0
root = sys.argv[1]
for f in glob.glob(root + "/ppt/**/*.xml", recursive=True):
    s = open(f, encoding="utf8").read()
    t, k = pat.subn(lambda m: m.group(1) + M[m.group(2).upper()] + m.group(3), s)
    if k:
        open(f, "w", encoding="utf8").write(t); n += k
        print(os.path.relpath(f, root), k)
print("total", n)
