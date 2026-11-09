/* Site navigation shell for the standalone Bookshelf+ pages.
   Renders the same header, mega-nav, search, drawers, toast, newsletter, and footer as the concepts (ui.jsx),
   sharing cart and sign-in through localStorage. Site links open in SITE_HREF.
   Page code talks to the shell with window events: db-shell:account, db-shell:toast {msg, tone}, db-shell:add (product). */
const { useState: useShellState, useEffect: useShellEffect } = React;
const SITE_HREF = "Concept F.html";
const SHELL_KEYS = { cart: "db-mobile-cart", user: "db-mobile-user" };
const SHELL_PAGES = { "Bookshelf Plus": "General Regular.dc.html", "Deseret Book Blog": SITE_HREF + "#/blog" };
const shellLoad = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
const shellGo = (hash) => { location.href = SITE_HREF + hash; };
const shellOpenPage = (label) => {
  if (label === "My Account") { window.dispatchEvent(new Event("db-shell:account")); return; }
  location.href = SHELL_PAGES[label] || SITE_HREF + "#/page/" + encodeURIComponent(label);
};

if (!window.__dbShellHash) {
  window.__dbShellHash = true;
  window.addEventListener("hashchange", () => { if (location.hash.indexOf("#/") === 0) location.replace(SITE_HREF + location.hash); });
}

function SiteTop() {
  const [cart, setCart] = useShellState(() => shellLoad(SHELL_KEYS.cart, []));
  const [user, setUser] = useShellState(() => shellLoad(SHELL_KEYS.user, null));
  const [menu, setMenu] = useShellState(false);
  const [search, setSearch] = useShellState(false);
  const [bag, setBag] = useShellState(false);
  const [acct, setAcct] = useShellState(false);
  const [toast, setToast] = useShellState(null);
  useShellEffect(() => { localStorage.setItem(SHELL_KEYS.cart, JSON.stringify(cart)); }, [cart]);
  useShellEffect(() => { localStorage.setItem(SHELL_KEYS.user, JSON.stringify(user)); }, [user]);
  useShellEffect(() => {
    const open = () => { setMenu(false); setSearch(false); setBag(false); setAcct(true); };
    const say = (e) => flash(e.detail.msg, e.detail.tone, e.detail.action);
    const add = (e) => {
      const p = e.detail;
      setCart((c) => {
        const k = p.id + "||";
        const i = c.findIndex((l) => l.id + "|" + (l.color || "") + "|" === k);
        if (i > -1) { const n = c.slice(); n[i] = Object.assign({}, n[i], { q: n[i].q + 1 }); return n; }
        return c.concat([{ id: p.id, q: 1, color: null, imprint: null, key: k + "-" + Date.now() }]);
      });
      flash("Added to your bag", "ok", "View bag");
    };
    window.addEventListener("db-shell:toast", say);
    window.addEventListener("db-shell:add", add);
    const sync = (e) => { if (e.key === SHELL_KEYS.cart) setCart(shellLoad(SHELL_KEYS.cart, [])); if (e.key === SHELL_KEYS.user) setUser(shellLoad(SHELL_KEYS.user, null)); };
    window.addEventListener("db-shell:account", open);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("db-shell:account", open); window.removeEventListener("storage", sync); window.removeEventListener("db-shell:toast", say); window.removeEventListener("db-shell:add", add); };
  }, []);
  const closeAll = () => { setMenu(false); setSearch(false); setBag(false); setAcct(false); };
  const only = (fn) => () => { closeAll(); fn(true); };
  const timer = React.useRef(null);
  const flash = (msg, tone, action) => { setToast({ msg, tone, action: action || null, id: Date.now() }); clearTimeout(timer.current); timer.current = setTimeout(() => setToast(null), 3200); };
  const count = cart.reduce((s, l) => s + l.q, 0);
  const ship = { style: "bar", accent: "#0f8079", height: 6, threshold: 49, goalMark: true, std: 6.99 };
  return (
    <React.Fragment>
      <Header count={count} user={user} onMenu={only(setMenu)} onSearch={only(setSearch)} onHome={() => shellGo("#/")} onBag={only(setBag)} onAccount={only(setAcct)}
        search={search} onCloseSearch={() => setSearch(false)} onOpenProduct={(id) => shellGo("#/p/" + id)} onGoCat={(id) => shellGo("#/c/" + id)} shipMin={49} />
      <div className="ovh">
        <div className={"scrim" + (menu || search || bag || acct ? " on" : "")} onClick={closeAll}></div>
        <Drawer open={menu} onClose={() => setMenu(false)} onGo={(id) => shellGo("#/c/" + id)} onAccount={() => setAcct(true)} user={user} />
        <BagDrawer open={bag} onClose={() => setBag(false)} cart={cart}
          setQty={(i, q) => setCart((c) => (q < 1 ? c.filter((_, k) => k !== i) : c.map((l, k) => (k === i ? Object.assign({}, l, { q: Math.min(20, q) }) : l))))}
          remove={(i) => setCart((c) => c.filter((_, k) => k !== i))} clear={() => setCart([])} go={shellGo} ship={ship}
          onViewBag={() => shellGo("#/bag")} onCheckout={() => shellGo("#/checkout")} />
        <Toast on={!!toast} seq={toast ? toast.id : 0} tone={toast ? toast.tone : null} msg={toast ? toast.msg : ""} action={toast ? toast.action : null} onAction={() => { setToast(null); closeAll(); setBag(true); }} />
        <AccountDrawer open={acct} onClose={() => setAcct(false)} user={user}
          onSignIn={(u) => { setUser(u); flash("Signed in as " + u.name, "ok"); }}
          onSignOut={() => { setUser(null); flash("Signed out"); }}
          onGo={(label) => { setAcct(false); shellOpenPage(label); }} onWishlist={() => shellGo("#/wishlist")} />
      </div>
    </React.Fragment>
  );
}

function SiteFooter({ newsletter }) {
  return (
    <React.Fragment>
      {newsletter === false ? null : <Newsletter />}
      <Footer onGo={shellOpenPage} onStore={() => shellGo("#/stores")} />
    </React.Fragment>
  );
}

const shellToast = (msg, tone) => window.dispatchEvent(new CustomEvent("db-shell:toast", { detail: { msg, tone } }));
const shellAdd = (p) => window.dispatchEvent(new CustomEvent("db-shell:add", { detail: p }));

Object.assign(window, { SiteTop, SiteFooter, shellGo, shellOpenPage, shellToast, shellAdd, SITE_HREF });
