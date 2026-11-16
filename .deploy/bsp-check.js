// Bookshelf+ check: hero content visible on the main and fiction pages, and the fiction book carousel advancing.
const pw = require('/opt/npm-tools/node_modules/playwright');
const sites = process.argv.slice(2).map(s => s.split('='));
const HERO = `(() => {
  const sec = document.querySelector('.bsp-page section'); if (!sec) return { ok: false, why: 'no hero section' };
  const vis = e => { if (!e) return false; const r = e.getBoundingClientRect(); if (r.width < 2 || r.height < 2 || r.top > innerHeight || r.bottom < 0) return false;
    for (let n = e; n && n.nodeType === 1; n = n.parentElement) { const s = getComputedStyle(n); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity < 0.05) return false; } return true; };
  const h1 = sec.querySelector('h1'), cta = [...sec.querySelectorAll('a,button')].find(e => /free trial/i.test(e.textContent));
  const art = [...sec.querySelectorAll('*')].concat([sec]).some(e => { const bg = getComputedStyle(e).backgroundImage; return (bg && bg !== 'none' && vis(e)) || (e.tagName === 'IMG' && e.complete && e.naturalWidth > 0 && vis(e)); });
  const logo = [...sec.querySelectorAll('img,svg')].some(e => vis(e) && e.getBoundingClientRect().width > 40);
  const r = { headline: vis(h1) ? h1.textContent.trim().slice(0, 30) : false, cta: vis(cta), art, logo };
  r.ok = !!(r.headline && r.cta && r.art && r.logo); return r; })()`;
const LABEL = `(() => { const s = document.querySelector('#plans'); return s ? (s.innerText.match(/\\b(Regency|Romance|Mystery|Fantasy|Historical|Suspense|Teen|Adventure|Western|Contemporary|Inspirational)\\b/) || [''])[0] : null; })()`;
(async () => {
  let bad = 0;
  for (const [en, eng] of [['chromium', pw.chromium], ['webkit', pw.webkit]]) {
    const b = await eng.launch();
    for (const [dn, dev] of [['iphone', en === 'webkit' ? pw.devices['iPhone 15'] : { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }], ['desktop', { viewport: { width: 1440, height: 900 } }]]) {
      for (const [tag, url] of sites) {
        const ctx = await b.newContext(dev), pg = await ctx.newPage(), errs = [];
        pg.on('pageerror', e => errs.push(String(e).slice(0, 120)));
        await pg.goto(url + '#/bookshelf-plus'); await pg.waitForTimeout(3000);
        const main = await pg.evaluate(HERO);
        await pg.goto(url + '#/bookshelf-plus/fiction'); await pg.waitForTimeout(3000);
        const fic = await pg.evaluate(HERO);
        await pg.evaluate(() => document.querySelector('#plans') && document.querySelector('#plans').scrollIntoView());
        const seen = new Set(); for (let i = 0; i < 9; i++) { seen.add(await pg.evaluate(LABEL)); await pg.waitForTimeout(2000); }
        const anim = [...seen].filter(Boolean);
        const ok = main.ok && fic.ok && anim.length >= 2 && !errs.length; if (!ok) bad++;
        console.log(`${ok ? 'OK ' : 'BAD'} ${en}/${dn}/${tag}  main:${JSON.stringify(main)}  fiction:${JSON.stringify(fic)}  carousel:${anim.join('>')}${errs.length ? '  errors:' + errs.join(';') : ''}`);
        await ctx.close();
      }
    }
    await b.close();
  }
  process.exit(bad ? 1 : 0);
})();
