/* Phone preview only (see css/pdp-plus.css). The sticky header sticks at --sa-t, under the status bar; while it is stuck it gets .is-stuck, which draws
   its own white lip above it so scrolled content never shows behind the system UI. At the top of the page (the shipping band above it) there is no lip. */
(function () {
  var raf = 0;
  function check() {
    raf = 0;
    if (!document.documentElement.classList.contains("pv-in-frame")) return; /* phone preview only (the class is set by src/presentation.js, which loads later) */
    var h = document.querySelector(".hdr");
    if (!h) return;
    var top = parseFloat(getComputedStyle(h).top) || 0;
    h.classList.toggle("is-stuck", h.getBoundingClientRect().top <= top + 0.5 && window.scrollY > 0);
  }
  function queue() { if (!raf) raf = requestAnimationFrame(check); }
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
  addEventListener("hashchange", queue);
  new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
  queue();
})();
