// Shared helpers for illustrated Word documents: figures drawn in HTML, rendered to PNG with Playwright
// and placed in docx-js documents. Used by the F6-D12 readiness pack and handover documentation.
const fs = require("fs");
const path = require("path");
const { Paragraph, TextRun, ImageRun, AlignmentType, LineRuleType } = require("docx");

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const tone = (s) => ({ Ready: "ok", Submitted: "ok", Taken: "ok", "This pack": "ok", "Partly ready": "mid", Pending: "mid", Open: "mid", "Feedback awaited": "mid", "Feedback being incorporated": "mid", "For validation": "mid", "Not ready": "no" }[s] || "mid");
const pill = (s) => `<span class="pill ${tone(s)}">${esc(s)}</span>`;
const chip = (t, cls = "") => `<span class="chip ${cls}">${esc(t)}</span>`;
const split = (t) => { const i = t.indexOf(":"); return i < 0 ? [t, ""] : [t.slice(0, i), t.slice(i + 1).trim()]; };
const W = 820;
const CSS = `*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Carlito,Calibri,"Liberation Sans",sans-serif;color:#1b2620;background:#fff;width:${W}px}
#fig{width:${W}px;padding:4px 2px 6px}
.pill{display:inline-block;border-radius:10px;padding:1px 9px;font-size:13px;font-weight:700;white-space:nowrap}
.ok{background:#DCEBDD;color:#1F5135}.mid{background:#FBEBC8;color:#7A4E0A}.no{background:#F6D8CF;color:#8E3B2A}
.code{display:inline-block;white-space:nowrap;background:#1F3B2C;color:#fff;font-weight:700;border-radius:4px;padding:1px 7px;font-size:13.5px}
.chip{display:inline-block;border:1.3px solid #3D5A44;color:#1F3B2C;border-radius:10px;padding:0 8px;font-size:13px;font-weight:700;margin:1px 3px 1px 0;white-space:nowrap}
.chip.fill{background:#1F3B2C;color:#fff;border-color:#1F3B2C}
.muted{color:#5a6660}.small{font-size:13.5px;line-height:1.25}
.band{font-size:15px;font-weight:700;color:#fff;background:#3D5A44;border-radius:5px;padding:5px 10px;margin:8px 0 7px}
.band.gold{background:#C98A2B}.band.terra{background:#B8563E}.band.forest{background:#1F3B2C}
.card{border:1.4px solid #DDE3DA;border-radius:6px;padding:8px 10px;background:#fff}
.t{font-size:15px;font-weight:700;color:#1F3B2C;line-height:1.2}
.r{font-size:14px;line-height:1.25;margin-top:4px}
.arrow{text-align:center;color:#C98A2B;font-size:20px;line-height:1;margin:3px 0}
.num{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#B8563E;color:#fff;font-weight:700;font-size:13.5px;flex:none}
.grid{display:grid;gap:8px}.grid>*{min-width:0}.five .t{font-size:13.5px}.five .r,.five .small{font-size:12.5px}.five .pill{font-size:11.5px;padding:1px 6px;white-space:normal;text-align:center}`;
const page = (body, extra = "") => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}${extra}</style></head><body><div id="fig">${body}</div></body></html>`;


// makeFigures(dir): returns { render(FIGS), figure(name, caption) } with its own figure counter
function makeFigures(FIGDIR) {
  fs.mkdirSync(FIGDIR, { recursive: true });
  let fn = 0;
  const figure = (name, cap) => {
    fn += 1;
    const file = path.join(FIGDIR, name + ".png");
    const buf = fs.readFileSync(file);
    const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20), outW = 650;
    return [
      new Paragraph({ keepNext: true, keepLines: true, spacing: { before: 160, after: 80 }, children: [new TextRun({ text: `Figure ${fn}: `, bold: true, color: "1F5135", size: 20 }), new TextRun({ text: cap, italics: true, size: 20 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160, line: 240, lineRule: LineRuleType.AUTO }, children: [new ImageRun({ type: "png", data: buf, transformation: { width: outW, height: Math.round(outW * h / w) } })] }),
    ];
  };
  async function render(FIGS) {
    const { chromium } = require("playwright");
    const b = await chromium.launch();
    for (const [name, html] of Object.entries(FIGS)) {
      fs.writeFileSync(path.join(FIGDIR, name + ".html"), html);
      const p = await b.newPage({ viewport: { width: W + 20, height: 800 }, deviceScaleFactor: 2 });
      await p.setContent(html); await p.waitForTimeout(150);
      await (await p.$("#fig")).screenshot({ path: path.join(FIGDIR, name + ".png") });
      await p.close();
    }
    await b.close();
  }
  return { render, figure };
}

module.exports = { esc, tone, pill, chip, split, W, CSS, page, makeFigures };
