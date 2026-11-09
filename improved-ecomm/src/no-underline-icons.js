/* Icons are never underlined. Material Symbols glyphs are text, so an underline on any ancestor (link, hover state)
   would run under the icon at a different size and weight. Underlines don't propagate into atomic inline boxes or
   floated boxes, so each icon becomes one: inside a flex or grid parent it gets float:left, which has no layout effect
   on flex and grid items; in normal flow it becomes inline-block / inline-flex. Applies to every icon, including the design system's. */
(function () {
  var SEL = 'span[style*="Material Symbols"]';
  function fix(el) {
    var p = el.parentElement; if (!p) return;
    var pd = getComputedStyle(p).display;
    if (/flex|grid/.test(pd)) { if (el.style.float !== "left") el.style.float = "left"; return; }
    if (el.style.float) el.style.float = "";
    var d = getComputedStyle(el).display;
    if (d === "flex") el.style.display = "inline-flex";
    else if (d === "block") el.style.display = "inline-block";
    else if (d === "grid") el.style.display = "inline-grid";
    else if (d === "inline") el.style.display = "inline-block";
  }
  function scan(root) {
    if (root.nodeType !== 1) return;
    if (root.matches && root.matches(SEL)) fix(root);
    var list = root.querySelectorAll ? root.querySelectorAll(SEL) : [];
    for (var i = 0; i < list.length; i++) fix(list[i]);
  }
  var queued = [], raf = 0;
  function flush() { raf = 0; var q = queued; queued = []; for (var i = 0; i < q.length; i++) if (q[i].isConnected) scan(q[i]); }
  function start() {
    scan(document.body);
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) {
        var m = ms[i];
        if (m.type === "childList") { for (var j = 0; j < m.addedNodes.length; j++) queued.push(m.addedNodes[j].nodeType === 1 ? m.addedNodes[j] : m.target); }
        else if (m.target.parentElement) queued.push(m.target.parentElement);
      }
      if (!raf) raf = requestAnimationFrame(flush);
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
