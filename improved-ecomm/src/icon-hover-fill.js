/* Icons are outline at rest and fade to the filled glyph on hover (and keyboard focus) of whatever interactive element holds them: a button, a link, a tab, a row. Same crossfade as the Contact Us navigation: the filled glyph is stacked over the outline (an ::after in css/site.css) and its opacity eases in with the DS duration and easing. The script only names the glyph and flips on/off; every icon keeps its own weight and size. */
(function () {
  var FILL0 = /(['"])FILL\1\s*0/;
  var HOST = 'a[href],button,[role=button],[role=tab],[role=link],[role=menuitem],[role=option],summary,label[for]';
  function hostOf(el) { return el && el.closest ? el.closest(HOST) : null; }
  function icons(h) {
    var l = h.querySelectorAll ? [].slice.call(h.querySelectorAll('.db-ic')) : [];
    if (h.classList && h.classList.contains('db-ic')) l.push(h);
    return l;
  }
  function paint(h, on) {
    if (!h || h.disabled || h.getAttribute('aria-disabled') === 'true') return;
    icons(h).forEach(function (i) {
      if (i.closest('.acp-icw')) return; /* the account nav stacks its own outline and filled pair */
      if (on && !i.hasAttribute('data-hf-g')) {
        var v = i.style.fontVariationSettings;
        if (!FILL0.test(v)) return; /* already filled */
        i.setAttribute('data-hf-g', i.textContent.trim());
        i.style.setProperty('--hf-fv', v.replace(FILL0, '"FILL" 1'));
        void getComputedStyle(i, '::after').opacity; /* let the stacked glyph exist at opacity 0 first, so its first hover fades too */
      }
      if (i.hasAttribute('data-hf-g')) { if (on) i.setAttribute('data-hf-on', ''); else i.removeAttribute('data-hf-on'); }
    });
  }
  document.addEventListener('mouseover', function (e) {
    var h = hostOf(e.target); if (!h) return;
    if (e.relatedTarget && h.contains(e.relatedTarget)) return;
    paint(h, true);
  }, true);
  document.addEventListener('mouseout', function (e) {
    var h = hostOf(e.target); if (!h) return;
    if (e.relatedTarget && h.contains(e.relatedTarget)) return;
    if (h === document.activeElement && h.matches(':focus-visible')) return;
    paint(h, false);
  }, true);
  document.addEventListener('focusin', function (e) { var h = hostOf(e.target); if (h && e.target.matches && e.target.matches(':focus-visible')) paint(h, true); });
  document.addEventListener('focusout', function (e) { var h = hostOf(e.target); if (h && !h.matches(':hover')) paint(h, false); });
})();
