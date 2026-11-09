/* Presentation viewports (Tweaks: Presentation > Viewport). Phone and Tablet show the site in a device frame: the same
   page loads in an iframe sized to the device's CSS viewport, so every media query and container query answers to the
   device, not the screen. Desktop is the page itself, filling the window as usual.
   - In the frame (URL ?present=1) the page runs without its own Tweaks panel: the season, banner and subscription values
     come from the page around it (window.DB_LEAVES / DB_SUBS and their db-leaves / db-subs events), so every change in
     the panel shows in the device at once. The frame's route is kept in the outer address, so Desktop opens where the
     device left off.
   - Outside the frame the stage listens for the panel's db-present event ({ viewport }). */
(function () {
  var FRAME = /[?&]present=1\b/.test(location.search);
  var DEV = {
    phone: { w: 393, h: 852, label: "Phone preview (iPhone)" },
    tablet: { w: 744, h: 1133, label: "Tablet preview (iPad mini)" }
  };

  if (FRAME) {
    window.DB_FRAME = true;
    var P = null;
    try { P = window.parent !== window ? window.parent : null; if (P) void P.location.href; } catch (e) { P = null; }
    document.documentElement.classList.add("pv-in-frame");
    if (!P) return;
    if (P.DB_LEAVES) window.DB_LEAVES = P.DB_LEAVES;
    if (P.DB_SUBS) window.DB_SUBS = P.DB_SUBS;
    ["db-leaves", "db-subs"].forEach(function (type) {
      P.addEventListener(type, function (e) {
        if (type === "db-leaves") window.DB_LEAVES = e.detail; else window.DB_SUBS = e.detail;
        window.dispatchEvent(new CustomEvent(type, { detail: e.detail }));
      });
    });
    window.addEventListener("hashchange", function () {
      try { P.history.replaceState(P.history.state, "", location.hash || "#/"); } catch (e) {}
    });
    return;
  }

  var stage = null, dev = null, screen = null, frame = null, cur = "desktop", enteredHash = null, dropTimer = 0;
  function fit() {
    if (!stage || !DEV[cur]) return;
    var d = DEV[cur], b = cur === "phone" ? 12 : 16;
    var k = Math.min(1, (innerWidth - 48) / (d.w + 2 * b), (innerHeight - 48) / (d.h + 2 * b));
    stage.style.setProperty("--pv-k", Math.max(0.2, k).toFixed(4));
  }
  function build() {
    stage = document.createElement("div");
    stage.className = "pv-stage";
    stage.setAttribute("aria-hidden", "true");
    dev = document.createElement("div");
    dev.className = "pv-dev";
    screen = document.createElement("div");
    screen.className = "pv-screen";
    /* iPhone chrome (phone only): the status bar in the top safe area with the Dynamic Island, and over the content at
       the bottom, Safari's floating controls as frosted shapes, then the home indicator in the bottom safe area. */
    screen.innerHTML =
      '<div class="pv-sb" aria-hidden="true"><span class="pv-time">9:41</span><span class="pv-island"></span>' +
      '<span class="pv-ics"><span class="pv-ic">signal_cellular_alt</span><span class="pv-ic">wifi</span><span class="pv-ic pv-batt">battery_full</span></span></div>' +
      '';
    dev.appendChild(screen);
    /* The controls and home indicator sit beside the screen (positioned over it), not inside its rounded clip: a background
       blur inside a rounded clip paints past the corners in Chromium. */
    dev.insertAdjacentHTML("beforeend", '<span class="pv-mask" aria-hidden="true"></span><div class="pv-bar" aria-hidden="true"><span class="pv-btn"></span><span class="pv-url"></span><span class="pv-btn"></span></div>' +
      '<span class="pv-home" aria-hidden="true"></span>');
    stage.appendChild(dev);
    document.body.appendChild(stage);
    addEventListener("resize", fit);
  }
  /* The device's bottom safe area for the page inside it (--sa-b, which the site uses in place of
     env(safe-area-inset-bottom), since an iframe reports 0): on the phone, everything below the top edge of Safari's
     floating controls (32px gap + 48px controls = 80px); the tablet has no system UI over the page. */
  function insets() {
    try { frame.contentDocument.documentElement.style.setProperty("--sa-b", cur === "phone" ? "80px" : "0px"); } catch (e) {}
  }
  function frameSrc() {
    var u = location.pathname + (location.search ? location.search + "&" : "?") + "present=1&tweaks=0" + (location.hash || "");
    return u;
  }
  function set(v) {
    v = DEV[v] ? v : "desktop";
    if (v === cur) return;
    var was = cur;
    cur = v;
    if (!stage) build();
    if (v === "desktop") {
      stage.classList.remove("on");
      document.documentElement.classList.remove("pv-on");
      stage.setAttribute("aria-hidden", "true");
      /* Desktop opens where the device left off. */
      if (enteredHash !== null && (location.hash || "#/") !== enteredHash) window.dispatchEvent(new HashChangeEvent("hashchange"));
      enteredHash = null;
      clearTimeout(dropTimer);
      dropTimer = setTimeout(function () { if (cur === "desktop" && frame) { frame.remove(); frame = null; } }, 400);
      return;
    }
    clearTimeout(dropTimer);
    if (was === "desktop") enteredHash = location.hash || "#/";
    stage.dataset.dev = v;
    if (!frame) {
      frame = document.createElement("iframe");
      frame.className = "pv-scr";
      frame.src = frameSrc();
      frame.addEventListener("load", insets);
      screen.appendChild(frame);
    }
    frame.title = DEV[v].label;
    insets();
    fit();
    stage.removeAttribute("aria-hidden");
    document.documentElement.classList.add("pv-on");
    requestAnimationFrame(function () { stage.classList.add("on"); });
  }
  window.addEventListener("db-present", function (e) { set(e.detail && e.detail.viewport); });
  if (window.DB_PRESENT) set(window.DB_PRESENT.viewport);
})();
