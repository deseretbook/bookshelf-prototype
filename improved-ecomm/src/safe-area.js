/* Safe areas: nothing to run. The system areas are painted by CSS alone (see css/pdp-plus.css): the page reads the device's insets through env() (the
   Tweaks phone preview sets --sa-t / --sa-b inline), keeps controls inside them, and never puts an opaque surface in them. */
(function () {
  var h = document.querySelector(".hdr");
  if (h) h.classList.remove("is-stuck");
})();
