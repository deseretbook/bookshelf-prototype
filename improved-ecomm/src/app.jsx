const CART_KEY = "db-mobile-cart", FAV_KEY = "db-mobile-fav", USER_KEY = "db-mobile-user";
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v || d; } catch (e) { return d; } };

const STATIC_PAGES = {
  "Check Order": ["Enter an order number and the email used at checkout to see where a shipment is."],
  "Purchase an eGift Card": ["eGift cards arrive by email, usually within a few minutes, in amounts from $10 to $500."],
  "Gift Card Balance": ["Enter a card number and PIN to see the remaining balance."],
  "Platinum Rewards": ["Platinum Rewards members earn on every purchase and get early access to seasonal releases."],
  "Request a Catalog": ["Catalogs mail four times a year \u2014 spring, summer, fall, and Christmas."],
  "Contact Us": ["Customer service is available Monday through Friday, 8:00 AM to 6:00 PM Mountain Time, at 1-800-453-4532."],
  "Questions & Support": ["Answers to the most common questions about orders, shipping, digital books, and returns."],
  "Shipping & Returns": ["Free shipping on orders $49+ for standard domestic US. Surcharges still apply for large items.", "Returns are accepted within 30 days of delivery. Imprinted and personalized items are non-returnable."],
  "Do Not Sell My Information": ["Submit a request to opt out of the sale or sharing of personal information."],
  "Deseret Book Store Locations": ["Deseret Book has stores across Utah, Idaho, Arizona, Nevada, and Texas."],
  "About Deseret Book": ["Deseret Book has published and sold books for Latter-day Saint readers since 1866 \u2014 resources to build faith, strengthen families, and promote personal virtues."],
  "Careers": ["Openings across retail, publishing, distribution, and technology."],
  "Terms of Use": ["The terms that govern use of this site and the purchase of physical and digital goods."],
  "Privacy Policy": ["How personal information is collected, used, and protected."],
  "Deseret Book Events": ["Author signings, firesides, and Deseret Book Presents events through the year."],
  "Deseret Book Blog": ["Reading lists, author interviews, and study helps, published weekly."],
  "Browse All Categories": ["Every shelf in one place."],
  "Facebook": ["Follow Deseret Book on Facebook for new releases and event news."],
  "Instagram": ["Follow Deseret Book on Instagram for new releases and event news."]
};

const SHIP = { shipStyle: "bar", shipAccent: "var(--db-green-400)", shipHeight: 6, shipThreshold: 49, shipGoalMark: true };

const FLOW = !!window.CHECKOUT_FLOW;

/* Bookshelf+ pages (src/build/bookshelf-pages.js) rendered inside the site shell. */
const BSP_ROUTES = { "#/bookshelf-plus": "general", "#/bookshelf-plus/v2": "general-v2", "#/bookshelf-plus/platinum": "general-platinum", "#/bookshelf-plus/fiction": "fiction", "#/bookshelf-plus/fiction-platinum": "fiction-platinum", "#/account/subscriptions/bookshelf-plus": "subscriptions" };
/* Subscription state comes from the Tweaks panel in Concept F.html (db-subs event). */
const SUBS_DEFAULT = { platinum: true, bookshelf: true, bspPlan: "monthly" };
function BookshelfPage({ k, props }) {
  const P = (window.BSP_PAGES || {})[k];
  const local = (e) => {
    const el = e.target.closest && e.target.closest("a[href^='#']");
    if (!el || e.defaultPrevented) return;
    const href = el.getAttribute("href");
    if (href.indexOf("#/") === 0) return;
    e.preventDefault();
    const t = href.length > 1 && document.getElementById(href.slice(1));
    if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - 80);
  };
  return <div className="bsp-page" data-bsp={k} onClick={local}>{P ? <P {...(props || {})} /> : null}</div>;
}

function App() {
  const t = SHIP;
  const [bagPromo, setBagPromo] = useState(null);
  const ROUTE_KEY = "db-route:" + location.pathname;
  const [route, setRoute] = useState(() => { if (location.hash) return location.hash; const r = sessionStorage.getItem(ROUTE_KEY); if (r && r !== "#/") { try { history.replaceState(null, "", r); } catch (e) {} return r; } return "#/"; });
  useEffect(() => { sessionStorage.setItem(ROUTE_KEY, route); }, [route]);
  const [cart, setCart] = useState(() => load(CART_KEY, []));
  const [fav, setFav] = useState(() => load(FAV_KEY, []));
  const [menu, setMenu] = useState(false);
  const [bag, setBag] = useState(false);
  const [acct, setAcct] = useState(false);
  const [user, setUser] = useState(() => load(USER_KEY, null));
  const [search, setSearch] = useState(false);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState(null);
  const timer = useRef(null);
  const pendingFav = useRef(null);
  const [subs, setSubs] = useState(() => Object.assign({}, SUBS_DEFAULT, window.DB_SUBS || {}));
  useEffect(() => { const h = (e) => setSubs(Object.assign({}, SUBS_DEFAULT, e.detail)); window.addEventListener("db-subs", h); return () => window.removeEventListener("db-subs", h); }, []);

  useEffect(() => {
    const h = () => { setRoute(location.hash || "#/"); setMenu(false); setSearch(false); setBag(false); setAcct(false); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(FAV_KEY, JSON.stringify(fav)); }, [fav]);
  useEffect(() => { localStorage.setItem(USER_KEY, JSON.stringify(user)); window.DB_USER = user; }, [user]);
  useEffect(() => { const h = (e) => { const d = e.detail || {}; setSubs((s) => Object.assign({}, s, { bookshelf: true, bspPlan: d.plan || s.bspPlan })); setUser((u) => u || d.user || null); }; window.addEventListener("db-bsp-subscribed", h); return () => window.removeEventListener("db-bsp-subscribed", h); }, []);

  const go = (hash) => { if (location.hash === hash) { setMenu(false); setSearch(false); window.scrollTo(0, 0); } else location.hash = hash; };
  const flash = (msg, action, tone) => {
    setToast({ msg, action, tone, id: Date.now() });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  };
  const add = (p, q, color, imprint) => {
    const qty = q || 1;
    const lk = (id, col, im) => id + "|" + (col || "") + "|" + (im ? im.style + ":" + im.text : "");
    setCart((c) => {
      const k = lk(p.id, color, imprint);
      const i = c.findIndex((l) => lk(l.id, l.color, l.imprint) === k);
      if (i > -1) { const n = c.slice(); n[i] = Object.assign({}, n[i], { q: n[i].q + qty }); return n; }
      return c.concat([{ id: p.id, q: qty, color: color || null, imprint: imprint || null, key: k + "-" + Date.now() }]);
    });
    flash((qty > 1 ? qty + " \u00d7 " : "") + "Added to your bag", "View bag", "ok");
  };
  const setQty = (i, q) => setCart((c) => (q < 1 ? c.filter((_, k) => k !== i) : c.map((l, k) => (k === i ? Object.assign({}, l, { q: Math.min(20, q) }) : l))));
  const remove = (i) => setCart((c) => c.filter((_, k) => k !== i));
  const toggleFav = (id) => {
    if (!user) { pendingFav.current = id; setMenu(false); setSearch(false); setBag(false); setAcct(true); flash("Sign in to save items to your wishlist"); return; }
    setFav((f) => {
      const on = f.indexOf(id) > -1;
      flash(on ? "Removed from wishlist" : "Saved to your wishlist", null, on ? null : "ok");
      return on ? f.filter((x) => x !== id) : f.concat([id]);
    });
  };
  const openPage = (label) => {
    if (label === "My Account") { setMenu(false); setSearch(false); setBag(false); setAcct(true); return; }
    if (label === "Bookshelf Plus") { setAcct(false); go("#/bookshelf-plus"); return; }
    if (label === "Orders") { setAcct(false); go("#/account/orders"); return; }
    if (label === "Subscriptions") { setAcct(false); go("#/account/subscriptions"); return; }
    if (label === "Deseret Book Blog") { setMenu(false); setSearch(false); setBag(false); setAcct(false); go("#/blog"); return; }
    setPage(label); go("#/page");
  };
  const count = cart.reduce((s, l) => s + l.q, 0);

  let body;
  const isHome = !(route.indexOf("#/c/") === 0 || route.indexOf("#/p/") === 0 || route.indexOf("#/blog") === 0 || route.indexOf("#/page/") === 0 || route.indexOf("#/bookshelf-plus") === 0 || route.indexOf("#/account") === 0 || ["#/wishlist", "#/stores", "#/page", "#/bag", "#/checkout"].indexOf(route) >= 0);
  const shipCfg = { style: t.shipStyle, accent: t.shipAccent, height: t.shipHeight, threshold: t.shipThreshold, goalMark: t.shipGoalMark, std: FLOW ? 6.99 : 5.99 };
  if (route.indexOf("#/c/") === 0) body = <Category id={route.slice(4)} go={go} add={add} />;
  else if (route.indexOf("#/p/") === 0) body = <Product id={route.slice(4)} go={go} add={add} fav={user ? fav : []} toggleFav={toggleFav} shipMin={t.shipThreshold} />;
  else if (route.indexOf("#/blog/") === 0) body = <BlogPost i={route.slice(7)} go={go} add={add} />;
  else if (route === "#/blog") body = <BlogIndex go={go} />;
  else if (route === "#/wishlist") body = <Wishlist fav={fav} go={go} add={add} toggleFav={toggleFav} user={user} onSignIn={() => setAcct(true)} />;
  else if (FLOW && route === "#/bag") body = <BagPage cart={cart} setQty={setQty} remove={remove} go={go} ship={shipCfg} promo={bagPromo} setPromo={setBagPromo} />;
  else if (FLOW && route === "#/checkout") body = <Checkout cart={cart} user={user} setUser={setUser} promo={bagPromo} ship={shipCfg} go={go} clear={() => { setCart([]); setBagPromo(null); }} flash={flash} />;
  else if (route === "#/stores") body = <Stores go={go} />;
  else if (route.indexOf("#/account/orders") === 0) body = <Orders key={route} id={decodeURIComponent(route.slice(17))} user={user} go={go} onSignIn={() => setAcct(true)} />;
  else if (route === "#/account/subscriptions") body = <Subscriptions user={user} subs={subs} go={go} onSignIn={() => setAcct(true)} onGo={openPage} onJoinPlatinum={() => { setSubs((s) => Object.assign({}, s, { platinum: true })); flash("Welcome to Platinum Rewards", null, "ok"); }} onLeavePlatinum={() => { setSubs((s) => Object.assign({}, s, { platinum: false })); flash("You\u2019ve left Platinum Rewards"); }} />;
  else if (BSP_ROUTES[route]) body = <BookshelfPage key={route} k={BSP_ROUTES[route]} props={route === "#/account/subscriptions/bookshelf-plus" ? { platinum: subs.platinum, plan: subs.bspPlan, startScreen: "details", onExit: () => go("#/account/subscriptions") } : null} />;
  else if (route.indexOf("#/page/") === 0) { const pl = decodeURIComponent(route.slice(7)); body = <SimplePage title={pl} body={(STATIC_PAGES[pl] || ["More detail lives on deseretbook.com."]).map((s) => s.split("$49").join("$" + t.shipThreshold))} go={go} />; }
  else if (route === "#/page") body = <SimplePage title={page || "Deseret Book"} body={(STATIC_PAGES[page] || ["More detail lives on deseretbook.com."]).map((s) => s.split("$49").join("$" + t.shipThreshold))} go={go} />;
  else body = <Home go={go} add={add} />;

  return (
    <div className="phone">
      <Header noAnn={route.indexOf("#/bookshelf-plus") === 0 || route.indexOf("#/account") === 0 || route === "#/wishlist" || !!BSP_ROUTES[route] || (route === "#/page" && ["Addresses", "Payment methods", "Email preferences", "Platinum Rewards"].indexOf(page) > -1)} count={count} user={user} onMenu={() => { setSearch(false); setBag(false); setAcct(false); setMenu(true); }} onSearch={() => { setMenu(false); setBag(false); setAcct(false); setSearch(true); }} onHome={() => go("#/")} onBag={() => { setMenu(false); setSearch(false); setAcct(false); setBag(true); }} onAccount={() => { setMenu(false); setSearch(false); setBag(false); setAcct(true); }} search={search} onCloseSearch={() => setSearch(false)} onOpenProduct={(id) => go("#/p/" + id)} onGoCat={(id) => go("#/c/" + id)} shipMin={t.shipThreshold} />
      <main>{body}</main>
      {route.indexOf("#/p/") === 0 ? <Newsletter /> : null}
      <Footer onGo={openPage} onStore={() => go("#/stores")} />
      <div className="ovh">
        <div className={"scrim" + (menu || search || bag || acct ? " on" : "")} onClick={() => { setMenu(false); setSearch(false); setBag(false); setAcct(false); }}></div>
        <Drawer open={menu} onClose={() => setMenu(false)} onGo={(id) => go("#/c/" + id)} onAccount={() => setAcct(true)} user={user} />
        <BagDrawer open={bag} onClose={() => setBag(false)} cart={cart} setQty={setQty} remove={remove} clear={() => setCart([])} go={go}
          ship={shipCfg}
          onViewBag={FLOW ? (p) => { setBagPromo(p); setBag(false); go("#/bag"); } : null}
          onCheckout={FLOW ? (p) => { setBagPromo(p); setBag(false); go("#/checkout"); } : null} />
        <Toast on={!!toast} seq={toast ? toast.id : 0} tone={toast ? toast.tone : null} msg={toast ? toast.msg : ""} action={toast ? toast.action : null} onAction={() => { setToast(null); setBag(true); }} />
        <AccountDrawer open={acct} onClose={() => setAcct(false)} user={user} subs={subs}
          onSignIn={(u) => { setUser(u); const pf = pendingFav.current; pendingFav.current = null; if (pf) { setFav((f) => (f.indexOf(pf) > -1 ? f : f.concat([pf]))); setAcct(false); flash("Signed in as " + u.name + ". Saved to your wishlist", null, "ok"); } else flash("Signed in as " + u.name, null, "ok"); }}
          onSignOut={() => { setUser(null); flash("Signed out"); }}
          onGo={openPage} onWishlist={() => go("#/wishlist")} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
