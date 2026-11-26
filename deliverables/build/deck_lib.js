// Shared theme, layouts and slide helpers for the F6-D10 and F6-D11 decks (pptxgenjs, structured deck)
const path = require("path");
const fs = require("fs");
const pptxgen = require("pptxgenjs");

const SKILL = "/root/.claude/skills/synced/f68fbc17-4078-4b33-8b58-12e32bf09771_04427afc-1d7f-495b-a5a3-eeb377416e47/pptx";
const { applyTheme } = require(path.join(SKILL, "scripts/apply_theme.js"));

const ROOT = path.join(__dirname, "..", "..");
const FIG = (f) => path.join(ROOT, "synthesis", "figures", "balanced_palette", f);
const BRAND = (f) => path.join(ROOT, "synthesis", "figures", "brand", f);

// Balanced earth palette used for the F6-D9 figure option (forest, gold, terracotta)
const HEX = {
  forest: "1F3B2C", olive: "3D5A44", green: "2F7A4B", gold: "C98A2B", brown: "7B6A10",
  terra: "B8563E", terraDk: "8E3B2A", sage: "6F8B6E", cream: "F0EAD6", text: "222222",
  grey: "6B6B6B", line: "D9D2BF", paper: "FAF7EF",
};
const THEME = {
  name: "KAZA R-NBT Earth",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: HEX.text, lt1: "FFFFFF", dk2: HEX.forest, lt2: HEX.cream,
    accent1: HEX.green, accent2: HEX.gold, accent3: HEX.terra, accent4: HEX.brown,
    accent5: HEX.sage, accent6: HEX.terraDk, hlink: HEX.green, folHlink: HEX.brown,
  },
};

function newDeck({ title, subject, footer }) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "Modesta Nyirenda, MNZ Consult";
  pres.company = "GIZ KAZA R-NBT Joint Action";
  pres.title = title;
  pres.subject = subject;
  const C = pres.SchemeColor;

  pres.defineSlideMaster({
    title: "TITLE",
    background: { color: C.text2 },
    objects: [
      { rect: { x: 0, y: 6.15, w: 13.333, h: 1.35, fill: { color: C.background1 } } },
      { image: { path: BRAND("partner_logos.jpeg"), x: 2.6, y: 6.3, w: 8.13, h: 1.2 } },
      { placeholder: { options: { name: "kicker", type: "body", x: 0.8, y: 0.7, w: 11.7, h: 0.5, fontSize: 14, bold: true, color: C.accent2, fontFace: THEME.bodyFontFace, margin: 0 }, text: "" } },
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 1.35, w: 11.7, h: 2.2, fontSize: 38, bold: true, color: C.background1, fontFace: THEME.headFontFace, valign: "top", align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "sub", type: "body", x: 0.8, y: 3.75, w: 11.7, h: 1.0, fontSize: 18, color: C.background2, fontFace: THEME.bodyFontFace, valign: "top", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "meta", type: "body", x: 0.8, y: 5.0, w: 11.7, h: 0.9, fontSize: 13, color: C.background2, fontFace: THEME.bodyFontFace, valign: "top", margin: 0 }, text: "" } },
    ],
  });
  pres.defineSlideMaster({
    title: "SECTION",
    background: { color: C.text2 },
    objects: [
      { placeholder: { options: { name: "num", type: "body", x: 0.8, y: 1.9, w: 3, h: 1.2, fontSize: 60, bold: true, color: C.accent2, fontFace: THEME.headFontFace, margin: 0 }, text: "" } },
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 3.1, w: 11.5, h: 1.2, fontSize: 36, bold: true, color: C.background1, fontFace: THEME.headFontFace, valign: "top", align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "sub", type: "body", x: 0.8, y: 4.35, w: 11.5, h: 1.4, fontSize: 18, color: C.background2, fontFace: THEME.bodyFontFace, valign: "top", margin: 0 }, text: "" } },
      { text: { text: footer, options: { x: 0.8, y: 6.85, w: 9, h: 0.35, fontSize: 10, color: C.background2, fontFace: THEME.bodyFontFace, margin: 0 } } },
    ],
    slideNumber: { x: 12.3, y: 6.85, w: 0.6, h: 0.35, fontSize: 10, color: C.background2, fontFace: THEME.bodyFontFace, align: "right" },
  });
  pres.defineSlideMaster({
    title: "CONTENT",
    background: { color: C.background1 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.3, w: 12.1, h: 0.95, fontSize: 26, bold: true, color: C.text2, fontFace: THEME.headFontFace, valign: "middle", align: "left", margin: 0 }, text: "" } },
      { text: { text: footer, options: { x: 0.6, y: 7.05, w: 9.5, h: 0.3, fontSize: 9, color: "6B6B6B", fontFace: THEME.bodyFontFace, margin: 0 } } },
      { image: { path: BRAND("giz_logo.png"), x: 11.45, y: 6.98, w: 0.8, h: 0.42 } },
    ],
    slideNumber: { x: 12.35, y: 7.05, w: 0.5, h: 0.3, fontSize: 9, color: "6B6B6B", fontFace: THEME.bodyFontFace, align: "right" },
  });
  pres.defineSlideMaster({
    title: "CLOSING",
    background: { color: C.text2 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 0.8, w: 11.7, h: 1.0, fontSize: 34, bold: true, color: C.background1, fontFace: THEME.headFontFace, align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: 0.8, y: 2.0, w: 11.7, h: 3.8, fontSize: 18, color: C.background2, fontFace: THEME.bodyFontFace, valign: "top", margin: 0 }, text: "" } },
      { rect: { x: 0, y: 6.15, w: 13.333, h: 1.35, fill: { color: C.background1 } } },
      { image: { path: BRAND("partner_logos.jpeg"), x: 2.6, y: 6.3, w: 8.13, h: 1.2 } },
    ],
  });
  return { pres, C };
}

// ---------- slide helpers (all colours from the scheme) ----------
function makeHelpers(pres, C) {
  let section = null;
  let n = 0;
  const T = (slide, text, opts) => slide.addText(text, { isTextBox: true, fontFace: THEME.bodyFontFace, color: C.text1, margin: 0, ...opts });

  const add = (master) => { n += 1; return pres.addSlide({ masterName: master, sectionTitle: section }); };
  const sec = (title) => { section = title; pres.addSection({ title }); };

  const content = (title, notes) => {
    const s = add("CONTENT");
    s.addText(title, { placeholder: "title" });
    if (notes) s.addNotes(notes);
    return s;
  };

  // Rounded card with a numbered circle (the deck's motif)
  const card = (s, { x, y, w, h, num, head, body, color = C.accent1, fill = C.background2, size = 14, headSize = 16, name }) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: fill }, objectName: name ? name + " card" : undefined });
    let tx = x + 0.2;
    if (num !== undefined) {
      s.addShape(pres.shapes.OVAL, { x: x + 0.18, y: y + 0.18, w: 0.5, h: 0.5, fill: { color }, line: { color } });
      T(s, String(num), { x: x + 0.18, y: y + 0.18, w: 0.5, h: 0.5, fontSize: 15, bold: true, color: C.background1, align: "center", valign: "middle" });
      tx = x + 0.82;
    }
    if (head) T(s, head, { x: tx, y: y + 0.14, w: x + w - tx - 0.15, h: 0.6, fontSize: headSize, bold: true, color: C.text2, valign: "middle", fontFace: THEME.headFontFace });
    if (body) {
      const items = Array.isArray(body) ? body : [body];
      const bodyY = y + (head ? 0.82 : 0.2);
      T(s, items.map((t, i) => ({ text: t, options: { bullet: Array.isArray(body) ? { indent: 14 } : false, breakLine: i < items.length - 1, paraSpaceAfter: 4 } })),
        { x: x + 0.2, y: bodyY, w: w - 0.4, h: h - (bodyY - y) - 0.12, fontSize: size, valign: "top" });
    }
  };

  // Large stat callout
  const stat = (s, { x, y, w, value, label, color = C.accent1 }) => {
    T(s, value, { x, y, w, h: 0.95, fontSize: 44, bold: true, color, fontFace: THEME.headFontFace, valign: "bottom" });
    T(s, label, { x, y: y + 1.0, w, h: 0.95, fontSize: 13, color: C.text1, valign: "top" });
  };

  // Lead sentence under the title
  const lead = (s, text, opts = {}) => T(s, text, { x: 0.6, y: 1.25, w: 12.1, h: 0.6, fontSize: 16, italic: true, color: "4A4A4A", valign: "top", ...opts });

  // Figure image with fixed aspect, centred in a box
  const fig = (s, file, { x, y, maxW, maxH, alt }) => {
    const sizeOf = require("child_process").execSync(`python3 -c "from PIL import Image;im=Image.open('${FIG(file)}');print(im.size[0],im.size[1])"`).toString().trim().split(" ").map(Number);
    const r = sizeOf[0] / sizeOf[1];
    let w = maxW, h = maxW / r;
    if (h > maxH) { h = maxH; w = maxH * r; }
    s.addImage({ path: FIG(file), x: x + (maxW - w) / 2, y, w, h, altText: alt });
    return { w, h };
  };

  // Simple styled table
  const table = (s, head, rows, { x = 0.6, y = 1.9, w = 12.1, colW, fontSize = 14, headFill = C.text2, rowH } = {}) => {
    const hdr = head.map((t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: headFill }, fontSize, fontFace: THEME.bodyFontFace, valign: "middle" } }));
    const body = rows.map((r, ri) => r.map((t, ci) => {
      const o = typeof t === "object" && t !== null && !Array.isArray(t) ? t : { text: t };
      return { text: o.text, options: { fontSize, fontFace: THEME.bodyFontFace, color: C.text1, bold: ci === 0 || o.bold, valign: "top",
        fill: { color: o.fill || (ri % 2 ? C.background1 : C.background2) } } };
    }));
    s.addTable([hdr, ...body], { x, y, w, colW, border: { type: "solid", pt: 0.75, color: "D9D2BF" }, margin: [3, 5, 3, 5], rowH, autoPage: false });
  };

  // "For validation" or "Decision" callout box
  const ask = (s, { x, y, w, h, label, text, color = C.accent3 }) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: C.background1 }, line: { color, width: 1.5 } });
    T(s, label, { x: x + 0.2, y: y + 0.1, w: w - 0.4, h: 0.35, fontSize: 12, bold: true, color });
    T(s, text, { x: x + 0.2, y: y + 0.45, w: w - 0.4, h: h - 0.55, fontSize: 13, valign: "top" });
  };

  return { add, sec, content, card, stat, lead, fig, table, ask, T, count: () => n };
}

async function finish(pres, out) {
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME);
  console.log("Wrote", out);
}

module.exports = { newDeck, makeHelpers, finish, HEX, THEME, FIG, BRAND, ROOT };
