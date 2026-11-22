const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 470 }, deviceScaleFactor: 2 });
  await p.goto('file://' + __dirname + '/fig9_stakeholders_tbd.html'); await p.waitForTimeout(300);
  await p.screenshot({ path: __dirname + '/fig9_stakeholders_tbd.png', clip: { x: 0, y: 0, width: 1200, height: 470 } }); await b.close(); })();
