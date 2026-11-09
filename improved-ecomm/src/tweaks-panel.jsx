// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakLevel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

/* One surface for the button and the panel: black at 80%, 10px blur, 16px corners, a black outline, no shadows. */
const __TWK_GLASS = `
  .twk-glass{background:rgba(0,0,0,.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
    border:1px solid #000;border-radius:16px;box-shadow:none}
  .twk-panel.twk-glass{box-sizing:border-box;display:block;transform-origin:bottom left;
    transition:width 260ms var(--db-ease-standard,cubic-bezier(.2,0,0,1)),height 260ms var(--db-ease-standard,cubic-bezier(.2,0,0,1)),border-radius 260ms var(--db-ease-standard,cubic-bezier(.2,0,0,1))}
  .twk-inner{display:flex;flex-direction:column;width:278px;max-height:calc(100vh - 34px)}
  @media (prefers-reduced-motion:reduce){.twk-panel.twk-glass{transition:none}}
`;

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;left:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left;
    color:#29261b;
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight: 700;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:var(--db-radius-md);cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:var(--db-radius-sm);
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight: 400}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight: 700;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:var(--db-radius-md);
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}


  .twk-tl{position:relative;display:flex;flex-direction:column;gap:6px;user-select:none;touch-action:none}
  .twk-tl-ax{position:relative;height:14px;font-size:9px;color:rgba(41,38,27,.45);font-variant-numeric:tabular-nums}
  .twk-tl-ax span{position:absolute;top:0;transform:translateX(-50%)}
  .twk-tl-ax span:first-child{transform:none}.twk-tl-ax span:last-child{transform:translateX(-100%)}
  .twk-tl-lane{position:relative;height:22px;border-radius:var(--db-radius-sm);background:rgba(0,0,0,.06);overflow:hidden;
    background-image:linear-gradient(to right,rgba(0,0,0,.14) 1px,transparent 1px);background-size:25% 100%}
  .twk-tl-seg{position:absolute;top:3px;bottom:3px;border-radius:var(--db-radius-sm);background:var(--c);opacity:.35;cursor:grab}
  .twk-tl-seg.on{opacity:1;cursor:grab;z-index:1}
  .twk-tl-seg i{position:absolute;top:0;bottom:0;background:var(--c);opacity:.0}
  .twk-tl-seg.txt{opacity:.95;z-index:2}
  .twk-tl-lane:active .twk-tl-seg{cursor:grabbing}
  .twk-tl-note{font-size:10px;line-height:1.4;color:rgba(41,38,27,.55)}
  .twk-tl-key{display:flex;align-items:center;gap:6px;font-size:11px;color:rgba(41,38,27,.72)}
  .twk-tl-key b{width:8px;height:8px;border-radius:50%;background:var(--c);display:inline-block}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:var(--db-radius-pill);background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:var(--db-radius-pill);background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:var(--db-radius-pill);
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:var(--db-radius-md);
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:var(--db-radius-md);
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button.twk-seg-ico{display:flex;align-items:center;justify-content:center;min-height:28px;padding:4px}
  .twk-seg-ico .twk-ico{transition:font-variation-settings .15s}
  .twk-seg-ico[aria-checked="true"] .twk-ico{font-variation-settings:'FILL' 1,'wght' 300,'opsz' 20}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight: 400;min-height:22px;
    border-radius:var(--db-radius-md);cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:var(--db-radius-pill);
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:var(--db-radius-pill);
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:var(--db-radius-md);background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight: 400;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:var(--db-radius-md);
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight: 400;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:var(--db-radius-md);padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:var(--db-radius-md)}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:var(--db-radius-md)}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:var(--db-radius-md);overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}

  /* Dark mode: Charcoal ground (--db-ground-dark), white ink, Teal accent */
  .twk-panel{color:var(--db-white,#fff);color-scheme:dark}
  .twk-x{color:rgba(255,255,255,.6)}
  .twk-x:hover{background:rgba(255,255,255,.1);color:#fff}
  .twk-body{scrollbar-color:rgba(255,255,255,.2) transparent}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,.2)}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.32)}
  .twk-tl-ax{color:rgba(255,255,255,.5)}
  .twk-tl-lane{background-color:rgba(255,255,255,.08);background-image:linear-gradient(to right,rgba(255,255,255,.18) 1px,transparent 1px)}
  .twk-tl-note{color:rgba(255,255,255,.55)}
  .twk-tl-key{color:rgba(255,255,255,.82);align-items:flex-start}
  .twk-tl-key b{margin-top:4px;flex:none}
  .twk-lbl{color:rgba(255,255,255,.82)}
  .twk-val{color:rgba(255,255,255,.55)}
  .twk-sect{color:rgba(255,255,255,.5)}
  .twk-field,.twk-num{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07)}
  .twk-field:focus{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.11)}
  select.twk-field{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(255,255,255,.7)' d='M0 0h10L5 6z'/></svg>")}
  select.twk-field option{background:#3a3633;color:#fff}
  .twk-slider{background:rgba(255,255,255,.18)}
  .twk-slider::-webkit-slider-thumb{border:0;box-shadow:0 1px 3px rgba(0,0,0,.45)}
  .twk-slider::-moz-range-thumb{border:0;box-shadow:0 1px 3px rgba(0,0,0,.45)}
  .twk-seg{background:rgba(255,255,255,.08)}
  .twk-seg-thumb{background:rgba(255,255,255,.2);box-shadow:0 1px 2px rgba(0,0,0,.3)}
  .twk-toggle{background:rgba(255,255,255,.2)}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-num-lbl{color:rgba(255,255,255,.65)}
  .twk-num-unit{color:rgba(255,255,255,.5)}
  .twk-btn{background:var(--db-white,#fff);color:var(--db-charcoal,#3a3633)}
  .twk-btn:hover{background:var(--db-dove,#efefef)}
  .twk-btn.secondary{background:rgba(255,255,255,.1);color:inherit}
  .twk-btn.secondary:hover{background:rgba(255,255,255,.16)}
  .twk-swatch{border:1px solid rgba(255,255,255,.18)}
  .twk-chip{box-shadow:0 0 0 1px rgba(255,255,255,.14)}
  .twk-chip:hover{box-shadow:0 0 0 1px rgba(255,255,255,.28),0 4px 10px rgba(0,0,0,.3)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 2px var(--db-white,#fff),0 2px 6px rgba(0,0,0,.3)}
  .twk-panel :focus-visible{outline:2px solid var(--db-white,#fff);outline-offset:2px}

  /* Levels: a menu of rows that open nested pages */
  .twk-ico{font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:18px;line-height:1;
    letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;
    font-variation-settings:'FILL' 0,'wght' 300,'opsz' 20;flex-shrink:0}
  .twk-hd-l{display:flex;align-items:center;gap:4px;min-width:0}
  .twk-hd-l b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .twk-back{appearance:none;border:0;background:transparent;color:inherit;width:24px;height:24px;margin-left:-6px;
    display:flex;align-items:center;justify-content:center;border-radius:var(--db-radius-pill);cursor:pointer;
    transition:background-color var(--db-duration-fast,150ms) var(--db-ease-standard,cubic-bezier(.2,0,0,1))}
  .twk-back:hover{background:rgba(255,255,255,.1)}
  .twk-crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:2px;padding:0 14px 8px;margin-top:-4px;
    font-size:10.5px;color:rgba(255,255,255,.5)}
  .twk-crumbs button{appearance:none;border:0;background:transparent;color:inherit;font:inherit;padding:0;cursor:pointer;
    text-decoration:underline;text-decoration-color:transparent;text-underline-offset:2px;
    transition:color var(--db-duration-fast,150ms) var(--db-ease-standard,cubic-bezier(.2,0,0,1)),text-decoration-color var(--db-duration-fast,150ms) var(--db-ease-standard,cubic-bezier(.2,0,0,1))}
  .twk-crumbs button:hover{color:#fff;text-decoration-color:currentColor}
  .twk-crumbs .twk-ico{font-size:12px}
  .twk-crumbs span[aria-current]{color:rgba(255,255,255,.82)}
  .twk-lvl{display:flex;flex-direction:column;gap:10px}
  .twk-lvl[hidden]{display:none}
  .twk-lvl.in{animation:twk-in var(--db-duration-base,200ms) var(--db-ease-out,cubic-bezier(0,0,0,1)) both}
  .twk-lvl.out{animation-name:twk-back}
  @keyframes twk-in{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}
  @keyframes twk-back{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:none}}
  @media (prefers-reduced-motion:reduce){.twk-lvl.in{animation-duration:1ms}}
  .twk-nav{appearance:none;display:flex;align-items:center;gap:8px;width:100%;min-height:40px;padding:0 6px 0 12px;
    border:1px solid rgba(255,255,255,.12);border-radius:var(--db-radius-md,4px);background:rgba(255,255,255,.05);
    color:inherit;font:inherit;text-align:left;cursor:pointer;
    transition:background-color var(--db-duration-fast,150ms) var(--db-ease-standard,cubic-bezier(.2,0,0,1)),border-color var(--db-duration-fast,150ms) var(--db-ease-standard,cubic-bezier(.2,0,0,1))}
  .twk-nav:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.22)}
  .twk-nav>span:first-child{flex:1;min-width:0;font-weight:500}
  .twk-nav-sum{color:rgba(255,255,255,.55);max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    font-variant-numeric:tabular-nums}
  .twk-nav+.twk-nav{margin-top:-4px}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
// Standalone (not inside the editor): the panel gets its own launcher and
// values persist to localStorage instead of the host.
// ── TwkStore: every panel adjustment, saved and never lost ─────────────────
// One record holds the tweak values, the open level, whether the panel is open, where it was dragged and how far each
// level was scrolled. Every change is written to this browser at once (localStorage) and, on a published artifact,
// to the viewer's own private record in the artifact's database (db: data/users/<id>/tweaks), so it follows them to
// any browser or device. On load the newer of the two wins (by its save time); a pending database write is flushed
// when the tab is hidden or closed.
// Project values: every value change made by someone who can edit the artifact is also written to one shared record
// (db: project/tweaks), every season and every key at once, and every view of the page adopts it when it is newer than
// its own values (by `vts`, the time the values last changed), live. Claude bakes that record into TWEAK_DEFAULTS.
const TwkStore = (() => {
  const KEY = 'db-tweaks-state:' + location.pathname;
  const LEGACY_VALUES = 'db-tweaks:' + location.pathname, LEGACY_PATH = 'db-tweaks-level:' + location.pathname;
  const readLocal = () => {
    try {
      const v = JSON.parse(localStorage.getItem(KEY));
      if (v && typeof v === 'object') return v;
    } catch (e) {}
    // first run after this change: adopt the values and level saved by the earlier version
    const st = { ts: 0 };
    try { const v = JSON.parse(localStorage.getItem(LEGACY_VALUES)); if (v && typeof v === 'object') st.values = v; } catch (e) {}
    try { const p = JSON.parse(localStorage.getItem(LEGACY_PATH)); if (Array.isArray(p)) st.path = p; } catch (e) {}
    return st;
  };
  let state = readLocal();
  const subs = new Set();
  const writeLocal = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };
  let ref = null, timer = 0, writing = null, dirty = false;
  let shared = null, sTimer = 0, sWriting = null, sDirty = false;
  const pushShared = () => {
    sTimer = 0;
    if (!shared || !sDirty) return;
    if (sWriting) { sTimer = setTimeout(pushShared, 250); return; }
    sDirty = false;
    const body = { values: JSON.parse(JSON.stringify(state.values || {})), vts: state.vts || Date.now() };
    sWriting = shared.set(body).catch((e) => {
      if (e && e.code === 'unavailable') { sDirty = true; sTimer = setTimeout(pushShared, 1000 + Math.random() * 1000); }
      else shared = null; // not allowed to write the project record here: keep the private record only
    }).finally(() => { sWriting = null; });
  };
  const scheduleShared = (ms) => { sDirty = true; if (sTimer) clearTimeout(sTimer); sTimer = setTimeout(pushShared, ms); };
  const push = () => {
    timer = 0;
    if (!ref || !dirty) return;
    if (writing) { timer = setTimeout(push, 250); return; }
    dirty = false;
    const body = JSON.parse(JSON.stringify(state));
    writing = ref.set(body).catch((e) => {
      if (e && e.code === 'unavailable') { dirty = true; timer = setTimeout(push, 1000 + Math.random() * 1000); }
      else if (e && (e.code === 'invalid_argument' || e.code === 'revoked' || e.code === 'not_granted')) ref = null; // can't save here: keep localStorage only
    }).finally(() => { writing = null; });
  };
  const schedule = (ms) => { dirty = true; if (timer) clearTimeout(timer); timer = setTimeout(push, ms); };
  const flush = () => { if (timer) { clearTimeout(timer); timer = 0; } if (dirty) push(); if (sTimer) { clearTimeout(sTimer); sTimer = 0; } if (sDirty) pushShared(); };
  addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  addEventListener('pagehide', flush);
  // Connect to the artifact's database when the page runs as a published artifact.
  (async () => {
    try {
      if (window.DB_FRAME || !window.claude || typeof window.claude.use !== 'function') return; // a presentation frame takes its values from the page around it
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      const r = db.doc('data/users/' + id + '/tweaks');
      const snap = await r.get();
      const remote = snap.exists ? snap.data() : null;
      ref = r;
      if (remote && (+remote.ts || 0) > (+state.ts || 0)) {
        state = JSON.parse(JSON.stringify(remote));
        writeLocal();
        subs.forEach((fn) => fn(state));
      } else if (!remote || (+state.ts || 0) > (+remote.ts || 0)) {
        if (state.values || state.path || state.pos || state.posL || state.open != null) schedule(0);
      }
      // The project record: adopt it when newer; editors publish their values to it.
      const canEdit = await user.canEdit().catch(() => false);
      const sr = db.doc('project/tweaks');
      let first = true;
      sr.onSnapshot((snap) => {
        const p = snap.exists ? snap.data() : null;
        if (p && p.values && (+p.vts || 0) > (+state.vts || 0)) {
          state = Object.assign({}, state, { values: JSON.parse(JSON.stringify(p.values)), vts: +p.vts });
          writeLocal();
          subs.forEach((fn) => fn(state));
        } else if (first && canEdit && state.values && (!p || (+state.vts || 0) > (+p.vts || 0))) {
          shared = sr; scheduleShared(0);
        }
        if (canEdit) shared = sr;
        first = false;
      }, () => {});
    } catch (e) {}
  })();
  return {
    get: () => state,
    save(patch) {
      const now = Date.now();
      state = Object.assign({}, state, patch, { ts: now }, patch.values ? { vts: now } : null);
      writeLocal();
      schedule(400);
      if (patch.values && shared) scheduleShared(400);
    },
    // fn(state) runs when a newer saved record arrives from the database
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
  };
})();

const TWK_STANDALONE = (() => { try { return window.parent === window; } catch (e) { return false; } })();
const TWK_KEY = 'db-tweaks:' + location.pathname;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(() => ({ ...defaults, ...(TwkStore.get().values || {}) }));
  React.useEffect(() => TwkStore.subscribe((st) => setValues({ ...defaults, ...(st.values || {}) })), []);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => {
      const next = { ...prev, ...edits };
      TwkStore.save({ values: next });
      return next;
    });
    if (!TWK_STANDALONE) window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
// ── Levels ──────────────────────────────────────────────────────────────────
// <TweakLevel id label summary>…</TweakLevel> shows as a row on its parent page and
// opens as its own page (back button + breadcrumb). Levels nest. Only the open
// page is visible; the rest stay mounted but hidden, so effects keep running.
const TwkNavCtx = React.createContext(null);
const TWK_PATH_KEY = 'db-tweaks-level:' + location.pathname;
const twkSame = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
const twkStarts = (a, pre) => pre.length <= a.length && pre.every((x, i) => x === a[i]);

function TweakLevel({ id, label, summary, children }) {
  const ctx = React.useContext(TwkNavCtx);
  if (!ctx) return <>{children}</>;
  const mine = ctx.ids.concat(id);
  const cur = ctx.current;
  if (twkSame(cur, ctx.ids)) {
    return (
      <button type="button" className="twk-nav" onClick={() => ctx.go({ id, label })}>
        <span>{label}</span>
        {summary != null && summary !== '' && <span className="twk-nav-sum">{summary}</span>}
        <span className="twk-ico" aria-hidden="true">chevron_right</span>
      </button>
    );
  }
  if (!twkStarts(cur, mine)) return null;
  const inner = <TwkNavCtx.Provider value={{ ...ctx, ids: mine }}>{children}</TwkNavCtx.Provider>;
  if (cur.length === mine.length) return ctx.target ? ReactDOM.createPortal(inner, ctx.target) : null;
  return inner;
}

function TweaksPanel({ title = 'Tweaks', children }) {
  const saved = TwkStore.get();
  const [open, setOpenRaw] = React.useState(() => TWK_STANDALONE && !!saved.open);
  const leaveT = React.useRef(0), closing = React.useRef(false), innerRef = React.useRef(null);
  const pillBox = React.useRef({ w: 112, h: 40 });
  // The panel grows out of the button and shrinks back into it, and its height follows its content (levels, toggles).
  const setOpen = (v) => {
    TwkStore.save({ open: !!v });
    clearTimeout(leaveT.current);
    if (v) { closing.current = false; setOpenRaw(true); return; }
    const p = dragRef.current;
    if (!p) { setOpenRaw(false); return; }
    closing.current = true;
    p.style.width = pillBox.current.w + 'px';
    p.style.height = pillBox.current.h + 'px';
    p.style.borderRadius = (pillBox.current.h / 2) + 'px';
    leaveT.current = setTimeout(() => { setOpenRaw(false); closing.current = false; }, 270);
  };
  const [path, setPath] = React.useState(() => Array.isArray(saved.path) ? saved.path : []);
  const [dir, setDir] = React.useState('in');
  const [target, setTarget] = React.useState(null);
  const ids = path.map((p) => p.id);
  const atRoot = ids.length === 0;
  React.useEffect(() => { if (path !== saved0.current) TwkStore.save({ path }); }, [path]);
  const saved0 = React.useRef(path);
  // A newer record from the database (another browser or device): take its level, open state and position.
  React.useEffect(() => TwkStore.subscribe((st) => {
    if (Array.isArray(st.path)) { saved0.current = st.path; setPath(st.path); }
    if (TWK_STANDALONE && st.open != null) setOpenRaw(!!st.open);
    if (st.posL) { offsetRef.current = { x: +st.posL.x || 16, y: +st.posL.y || 16 }; clampToViewport(); }
  }), []);
  // A saved level that no longer exists (e.g. a season without it) falls back a level.
  React.useEffect(() => {
    if (open && !atRoot && target && target.childNodes.length === 0) setPath((p) => p.slice(0, -1));
  });
  const go = (lvl) => { setDir('in'); setPath((p) => p.concat(lvl)); };
  const goTo = (n) => { setDir('out'); setPath((p) => p.slice(0, n)); };
  const nav = { ids: [], current: ids, go, target };
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef(saved.posL ? { x: +saved.posL.x || 16, y: +saved.posL.y || 16 } : { x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxLeft = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxLeft, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.left = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useLayoutEffect(() => {
    const p = dragRef.current, i = innerRef.current;
    if (!open || !p || !i) return;
    const h = () => i.offsetHeight + 2;
    p.style.transition = 'none';
    p.style.width = pillBox.current.w + 'px';
    p.style.height = pillBox.current.h + 'px';
    p.style.borderRadius = (pillBox.current.h / 2) + 'px';
    void p.offsetWidth;
    p.style.transition = '';
    p.style.borderRadius = '';
    p.style.width = '280px';
    p.style.height = h() + 'px';
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => { if (!closing.current) p.style.height = h() + 'px'; });
    ro.observe(i);
    return () => ro.disconnect();
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    if (!TWK_STANDALONE) window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    if (!TWK_STANDALONE) window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startLeft = r.left;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startLeft + (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      TwkStore.save({ posL: { x: Math.round(offsetRef.current.x), y: Math.round(offsetRef.current.y) } });
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  // Scroll position, remembered per level and restored when that level (or the panel) opens again.
  const bodyRef = React.useRef(null), scrollT = React.useRef(0);
  const levelKey = ids.join('/') || '_root';
  React.useLayoutEffect(() => {
    const b = bodyRef.current;
    if (!b) return;
    const y = ((TwkStore.get().scroll || {})[levelKey]) || 0;
    b.scrollTop = y;
    requestAnimationFrame(() => { if (bodyRef.current) bodyRef.current.scrollTop = y; });
  }, [levelKey, open]);
  const onBodyScroll = () => {
    clearTimeout(scrollT.current);
    scrollT.current = setTimeout(() => {
      const b = bodyRef.current;
      if (b) TwkStore.save({ scroll: Object.assign({}, TwkStore.get().scroll, { [levelKey]: Math.round(b.scrollTop) }) });
    }, 250);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);

  if (true) { /* deploy: panel never opens */
    return null; /* deploy: no Tweaks panel */
    return (
      <><style>{__TWK_GLASS}</style>
      <button type="button" className="twk-glass" aria-label={'Open ' + title} onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); pillBox.current = { w: Math.round(r.width), h: Math.round(r.height) }; setOpen(true); }}
        style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 2147483646, height: 40, borderRadius: 999, padding: '0 20px 0 10px', display: 'flex', alignItems: 'center', gap: 6, color: '#fff', font: "400 12px/1 'DM Sans', sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer' }}>
        <span aria-hidden="true" style={{ fontFamily: "'Material Symbols Rounded'", fontSize: 20, lineHeight: 1, fontVariationSettings: "'FILL' 0,'wght' 300,'opsz' 20" }}>tune</span>
        {title}
      </button></>
    );
  }
  return (
    <>
      <style>{__TWK_GLASS}</style>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel twk-glass" data-omelette-chrome=""
           style={{ left: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-inner" ref={innerRef}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <div className="twk-hd-l">
            {!atRoot && <button type="button" className="twk-back" aria-label={'Back to ' + (path.length > 1 ? path[path.length - 2].label : title)}
                    onMouseDown={(e) => e.stopPropagation()} onClick={() => goTo(path.length - 1)}>
              <span className="twk-ico" aria-hidden="true">arrow_back</span></button>}
            <b>{atRoot ? title : path[path.length - 1].label}</b>
          </div>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        {!atRoot && (
          <nav className="twk-crumbs" aria-label="Tweaks levels">
            <button type="button" onClick={() => goTo(0)}>{title}</button>
            {path.map((p, i) => (
              <React.Fragment key={i}>
                <span className="twk-ico" aria-hidden="true">chevron_right</span>
                {i === path.length - 1 ? <span aria-current="page">{p.label}</span>
                  : <button type="button" onClick={() => goTo(i + 1)}>{p.label}</button>}
              </React.Fragment>
            ))}
          </nav>
        )}
        <div className="twk-body" ref={bodyRef} onScroll={onBodyScroll}>
          <TwkNavCtx.Provider value={nav}>
            <div className={'twk-lvl' + (atRoot ? ' in' + (dir === 'out' ? ' out' : '') : '')} hidden={!atRoot}>{children}</div>
          </TwkNavCtx.Provider>
          {!atRoot && <div className={'twk-lvl in' + (dir === 'out' ? ' out' : '')} key={ids.join('/')} ref={setTarget} />}
        </div>
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  // Icon segments (every option has an `icon`, a Material Symbols name) always fit: the label becomes the button's accessible name.
  const iconic = options.length > 0 && options.every((o) => typeof o === 'object' && o.icon);
  const fitsAsSegments = iconic || maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}
                  aria-label={iconic ? String(o.label) : undefined} title={iconic ? String(o.label) : undefined}
                  className={iconic ? 'twk-seg-ico' : undefined}>
            {iconic ? <span className="twk-ico" aria-hidden="true">{o.icon}</span> : o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

// Timeline of one whole cycle (0 to 100%): each lane is a leaf that falls for `span`% of it, starting at its value. Drag a lane to move when it falls.
// The darker part of a lane is when the leaf is over the text (`over` = [from, to] as fractions of the fall); lanes wrap past the end back to 0.
function TweakTimeline({ label, lanes, span = 50, over = [0.325, 0.675], onChange }) {
  const mod = (v) => ((v % 100) + 100) % 100;
  const drag = React.useRef(null);
  const segs = (start, a, b) => { const o = []; let x = start + a, e = start + b; x = mod(x); e = x + (b - a); if (e <= 100) o.push([x, e]); else { o.push([x, 100]); o.push([0, e - 100]); } return o; };
  const down = (k, e) => {
    const lane = e.currentTarget.closest('.twk-tl-lane'), r = lane.getBoundingClientRect();
    drag.current = { k, x0: e.clientX, v0: lanes.find((l) => l.key === k).value, w: r.width };
    lane.setPointerCapture(e.pointerId);
  };
  const move = (e) => { const d = drag.current; if (!d) return; onChange(d.k, Math.round(mod(d.v0 + (e.clientX - d.x0) / d.w * 100))); };
  const up = () => { drag.current = null; };
  const fmt = (v) => Math.round(mod(v)) + '%';
  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>{label}</span></div>
      <div className="twk-tl">
        <div className="twk-tl-ax">{[0, 25, 50, 75, 100].map((p) => <span key={p} style={{ left: p + '%' }}>{p}%</span>)}</div>
        {lanes.map((l) => (
          <div key={l.key} className="twk-tl-lane" style={{ '--c': l.color }} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
            {segs(l.value, 0, span).map((g, i) => <div key={'f' + i} className="twk-tl-seg" style={{ left: g[0] + '%', width: g[1] - g[0] + '%' }} onPointerDown={(e) => down(l.key, e)} />)}
            {segs(l.value, span * over[0], span * over[1]).map((g, i) => <div key={'t' + i} className="twk-tl-seg txt" style={{ left: g[0] + '%', width: g[1] - g[0] + '%' }} onPointerDown={(e) => down(l.key, e)} />)}
          </div>
        ))}
        {lanes.map((l) => (
          <div key={l.key} className="twk-tl-key" style={{ '--c': l.color }}><b />{l.label}: starts at {fmt(l.value)}, over the text {fmt(l.value + span * over[0])} to {fmt(l.value + span * over[1])}</div>
        ))}
        <div className="twk-tl-note">The cycle repeats from 100% back to 0%. Pale = falling, solid = crossing the text. Drag a lane to move it.</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakLevel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton, TweakTimeline,
});
