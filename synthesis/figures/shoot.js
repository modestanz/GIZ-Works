const { chromium } = require('playwright');
const figs = [['fig1_framework',1200,630],['fig2_roadmap',1200,520],['fig3_headline',1200,430],['fig4_readiness',1200,440],['fig5_destinations',1200,470],['fig6_vcmap',1200,540],['fig7_principles',1200,450],['fig8_milestones',1200,330],['fig9_stakeholders',1200,470]];
(async () => {
  const b = await chromium.launch();
  for (const [f, w, h] of figs) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await p.goto('file://' + __dirname + '/' + f + '.html');
    await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname + '/' + f + '.png', clip: { x: 0, y: 0, width: w, height: h } });
  }
  await b.close();
})();
