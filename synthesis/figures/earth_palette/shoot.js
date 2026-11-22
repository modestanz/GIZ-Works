const { chromium } = require('playwright');
const figs = [['fig1_headline_earth',1200,430],['fig2_readiness_earth',1200,440],['fig3_destinations_earth',1200,470],['fig4_framework_earth',1200,630],['fig5_principles_earth',1200,450],['fig6_vcmap_earth',1200,540],['fig7_roadmap_earth',1200,520],['fig8_milestones_earth',1200,330],['fig9_stakeholders_earth',1200,470]];
(async () => {
  const b = await chromium.launch();
  for (const [f, w, h] of figs) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await p.goto('file://' + __dirname + '/' + f + '.html'); await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname + '/' + f + '.png', clip: { x: 0, y: 0, width: w, height: h } });
  }
  await b.close();
})();
