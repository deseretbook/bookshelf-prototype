/* Safe areas: nothing to run. The system areas are painted by CSS alone (see css/pdp-plus.css): the page reads the device's insets through env() (the
   Tweaks phone preview sets --sa-t / --sa-b inline), keeps controls inside them, and never puts an opaque surface in them. */
(function () {
  var h = document.querySelector(".hdr");
  if (h) h.classList.remove("is-stuck");
})();

/* Frost refresh: Safari keeps the old paint of the see-through frost layers (html::before / ::after, css/pdp-plus.css) when a route change turns them on or off,
   so on every navigation (the hash changes) the layers are dropped for a frame and drawn again, once now and once after the new page has rendered. */
(function () {
  var root = document.documentElement, busy = 0;
  function refresh() {
    root.classList.add("frost-refresh");
    void root.offsetHeight;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { root.classList.remove("frost-refresh"); });
    });
  }
  function onNav() {
    refresh();
    clearTimeout(busy);
    busy = setTimeout(refresh, 350);
  }
  window.addEventListener("hashchange", onNav);
  window.addEventListener("popstate", onNav);
  window.addEventListener("pageshow", refresh);
})();
