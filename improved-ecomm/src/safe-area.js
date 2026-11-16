/* Safe areas (see css/pdp-plus.css). The sticky header sticks at --sa-t, under the status bar; while it is stuck it gets .is-stuck, which draws
   its own white lip above it so scrolled content never shows behind the system UI. At the top of the page (the shipping band above it) there is no lip. */
(function () {
  var raf = 0;
  function check() {
    raf = 0;
    var h = document.querySelector(".hdr");
    if (!h) return;
    var top = parseFloat(getComputedStyle(h).top) || 0;
    h.classList.toggle("is-stuck", h.getBoundingClientRect().top <= top + 0.5 && window.scrollY > 0);
  }
  function queue() { if (!raf) raf = requestAnimationFrame(check); }
  /* Anything that opens, closes, moves or re-lays-out the page re-reads the insets and the header state: scroll, resize, rotation, the visual
     viewport (browser bars, keyboard), page changes, every click or key press, dialogs and drawers opening and closing, and animations ending.
     Opening and closing animate, so a click also re-checks once the motion has settled. */
  function settle() { queue(); setTimeout(queue, 150); setTimeout(queue, 400); }
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", settle);
  addEventListener("orientationchange", settle);
  addEventListener("hashchange", settle);
  addEventListener("popstate", settle);
  addEventListener("pageshow", settle);
  document.addEventListener("visibilitychange", settle);
  document.addEventListener("click", settle, true);
  document.addEventListener("keyup", queue, true);
  document.addEventListener("transitionend", queue, true);
  document.addEventListener("animationend", queue, true);
  document.addEventListener("close", settle, true);
  document.addEventListener("cancel", settle, true);
  document.addEventListener("toggle", settle, true);
  if (window.visualViewport) { visualViewport.addEventListener("resize", settle); visualViewport.addEventListener("scroll", queue); }
  var mo = new MutationObserver(queue);
  mo.observe(document.documentElement, { childList: true, subtree: true });
  mo.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ["open", "hidden", "aria-hidden", "aria-expanded", "style"] });
  settle();
})();
