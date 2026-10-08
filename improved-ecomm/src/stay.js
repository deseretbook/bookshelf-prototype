/* Keeps the reader on the same page and scroll position when the preview reloads after an edit.
   A load with no click/keypress just before it is treated as a reload: it returns to the last page
   (file + route + scroll) visited from the same starting file. Clicked navigation is tracked normally. */
(function () {
  var KEY = "db-stay", INTENT = "db-stay-intent", RESTORE = "db-stay-y";
  var ss; try { ss = window.sessionStorage; ss.getItem(KEY); } catch (e) { return; }
  var file = decodeURIComponent(location.pathname.split("/").pop() || "");
  var read = function (k) { try { return JSON.parse(ss.getItem(k)); } catch (e) { return null; } };
  var st = read(KEY);
  var intent = +ss.getItem(INTENT) || 0; ss.removeItem(INTENT);
  var now = Date.now(), inApp = now - intent < 15000, y = 0;
  var to = read(RESTORE);
  if (to && now - to.t < 15000) {
    /* A restore redirect is in flight. Repeated host loads of the entry file re-issue it instead of resetting. */
    if (to.file !== file) { location.replace(encodeURI(to.file) + (to.hash || "")); return; }
    ss.removeItem(RESTORE);
    st = st || { entry: file };
    st.file = file; st.hash = location.hash; y = st.y = to.y || 0;
  } else if (st && inApp) {
    st.file = file; st.hash = location.hash; st.y = 0;
  } else if (st && st.entry === file && st.file && st.file !== file) {
    ss.setItem(RESTORE, JSON.stringify({ file: st.file, hash: st.hash || "", y: st.y || 0, t: now }));
    location.replace(encodeURI(st.file) + (st.hash || ""));
    return;
  } else if (st && (st.entry === file || st.file === file)) {
    if (st.hash && location.hash !== st.hash) { try { history.replaceState(null, "", st.hash); } catch (e) {} }
    y = st.y || 0;
  } else st = { entry: file, file: file, hash: location.hash, y: 0 };
  /* Several previews can share this storage; only the document the reader last loaded or touched may write. */
  var me = Math.random().toString(36).slice(2);
  st.owner = me;
  var save = function () { try { var cur = read(KEY); if (cur && cur.owner && cur.owner !== me) return; st.owner = me; ss.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  try { ss.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  var last = 0;
  var touch = function () { last = Date.now(); var cur = read(KEY); if (cur && cur.owner !== me) { st.owner = me; try { ss.setItem(KEY, JSON.stringify(st)); } catch (e) {} } };
  ["pointerdown", "keydown", "touchstart"].forEach(function (t) { window.addEventListener(t, touch, true); });
  window.addEventListener("pagehide", function () { if (Date.now() - last < 2000) ss.setItem(INTENT, String(Date.now())); save(); });
  window.addEventListener("hashchange", function () { st.hash = location.hash; st.y = 0; save(); });
  var t = null;
  window.addEventListener("scroll", function () { if (t) return; t = setTimeout(function () { t = null; st.y = Math.round(window.scrollY); save(); }, 150); }, { passive: true });

  if (y > 0) {
    var start = Date.now(), stop = false;
    var quit = function () { stop = true; };
    ["wheel", "touchstart", "keydown"].forEach(function (e) { window.addEventListener(e, quit, { once: true, passive: true }); });
    (function go() {
      if (stop) return;
      var h = document.documentElement.scrollHeight;
      if (h >= y + window.innerHeight * 0.5 && Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y);
      if (Date.now() - start < 2500) setTimeout(go, 80);
    })();
  }
})();
