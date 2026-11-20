const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [f, w, h] of [['fig1_framework', 1200, 630], ['fig2_roadmap', 1200, 520]]) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await p.goto('file://' + __dirname + '/' + f + '.html');
    await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname + '/' + f + '.png', clip: { x: 0, y: 0, width: w, height: h } });
  }
  await b.close();
})();
