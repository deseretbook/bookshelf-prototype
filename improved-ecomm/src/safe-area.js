/* Safe areas: nothing to run. The system areas are painted by CSS alone (see css/pdp-plus.css): the page reads the device's insets through env() (the
   Tweaks phone preview sets --sa-t / --sa-b inline), keeps controls inside them, and never puts an opaque surface in them. */
(function () {
  var h = document.querySelector(".hdr");
  if (h) h.classList.remove("is-stuck");
})();

/* Frost refresh: Safari keeps the old paint of the see-through frost layers (html::before / ::after, css/pdp-plus.css) after a page that turns them off (the product
   page, which has the sticky buy bar) is left. An auto trigger watches the page and, the moment the buy bar goes away (and on every route change), forces the layers
   to come back: they are dropped, drawn again, and their backdrop filter is nudged so the browser builds a fresh layer. It repeats a few times while the new page renders. */
(function () {
  var root = document.documentElement, timers = [], hadBar = false;
  function pass() {
    root.classList.remove("frost-nudge");
    root.classList.add("frost-refresh");
    void root.offsetHeight;
    requestAnimationFrame(function () {
      root.classList.remove("frost-refresh");
      root.classList.add("frost-nudge");
      void root.offsetHeight;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { root.classList.remove("frost-nudge"); });
      });
    });
  }
  function force() {
    timers.forEach(clearTimeout);
    timers = [0, 120, 350, 800, 1600].map(function (ms) { return setTimeout(pass, ms); });
  }
  function hasBar() { return !!document.querySelector(".pdp>.cta"); }
  function check() {
    var now = hasBar();
    if (hadBar && !now) force();
    hadBar = now;
  }
  var pending = 0;
  new MutationObserver(function () {
    if (pending) return;
    pending = requestAnimationFrame(function () { pending = 0; check(); });
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", force);
  window.addEventListener("popstate", force);
  window.addEventListener("pageshow", force);
  hadBar = hasBar();
})();
