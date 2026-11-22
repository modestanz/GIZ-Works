const { chromium } = require('playwright');
const figs = [['fig2_readiness_deck',1200,440],['fig3_destinations_deck',1200,470],['fig4_framework_deck',1200,630]];
(async () => {
  const b = await chromium.launch();
  for (const [f, w, h] of figs) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await p.goto('file://' + __dirname + '/' + f + '.html'); await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname + '/' + f + '.png', clip: { x: 0, y: 0, width: w, height: h } });
  }
  await b.close();
})();
