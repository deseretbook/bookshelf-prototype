/* Images load ahead of the reader. Lazy images (ours and the DS components') switch to eager once they come
   within two screens of the viewport, so they are ready before they scroll into view. When one image in a
   horizontal carousel gets close, the whole carousel loads, since its off-screen cards never cross the viewport. */
(function () {
  if (!("IntersectionObserver" in window)) {
    var all = function () { document.querySelectorAll('img[loading="lazy"]').forEach(function (im) { im.loading = "eager"; }); };
    new MutationObserver(all).observe(document.documentElement, { childList: true, subtree: true });
    all();
    return;
  }
  var seen = new WeakSet();
  function eager(im) { if (im.loading === "lazy") im.loading = "eager"; io.unobserve(im); }
  function scroller(el) {
    for (var p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      var ox = getComputedStyle(p).overflowX;
      if ((ox === "auto" || ox === "scroll" || ox === "hidden") && p.scrollWidth > p.clientWidth + 1) return p;
    }
    return null;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      eager(e.target);
      var sc = scroller(e.target);
      if (sc) sc.querySelectorAll('img[loading="lazy"]').forEach(eager);
    });
  }, { rootMargin: "200% 0px 200% 0px" });
  function scan(root) {
    var list = root.querySelectorAll ? root.querySelectorAll('img[loading="lazy"]') : [];
    if (root.tagName === "IMG" && root.loading === "lazy") list = [root];
    for (var i = 0; i < list.length; i++) if (!seen.has(list[i])) { seen.add(list[i]); io.observe(list[i]); }
  }
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === "attributes") { scan(m.target); return; }
      m.addedNodes.forEach(function (n) { if (n.nodeType === 1) scan(n); });
    });
  }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["loading"] });
  scan(document);
})();
