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
  "Instagram": ["Follow Deseret Book on Instagram for new releases and event news."],
  "Bookshelf Plus": ["Unlimited access to 4,000+ audiobooks and eBooks in the Deseret Bookshelf app."]
};

const SHIP = { shipStyle: "bar", shipAccent: "#0f8079", shipHeight: 6, shipThreshold: 49, shipGoalMark: true };

function App() {
  const t = SHIP;
  const [route, setRoute] = useState(location.hash || "#/");
  const [cart, setCart] = useState(() => load(CART_KEY, []));
  const [fav, setFav] = useState(() => load(FAV_KEY, []));
  const [menu, setMenu] = useState(false);
  const [bag, setBag] = useState(false);
  const [acct, setAcct] = useState(false);
  const [user, setUser] = useState(() => load(USER_KEY, null));
  const [promo, setPromo] = useState(false);
  const [search, setSearch] = useState(false);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    const h = () => { setRoute(location.hash || "#/"); setMenu(false); setSearch(false); setBag(false); setAcct(false); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(FAV_KEY, JSON.stringify(fav)); }, [fav]);
  useEffect(() => { localStorage.setItem(USER_KEY, JSON.stringify(user)); }, [user]);
  const closePromo = () => setPromo(false);

  const go = (hash) => { if (location.hash === hash) { setMenu(false); setSearch(false); window.scrollTo(0, 0); } else location.hash = hash; };
  const flash = (msg, action) => {
    setToast({ msg, action });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  };
  const add = (p, q, color) => {
    const qty = q || 1;
    setCart((c) => {
      const k = p.id + "|" + (color || "");
      const i = c.findIndex((l) => (l.id + "|" + (l.color || "")) === k);
      if (i > -1) { const n = c.slice(); n[i] = Object.assign({}, n[i], { q: n[i].q + qty }); return n; }
      return c.concat([{ id: p.id, q: qty, color: color || null, key: k + "-" + Date.now() }]);
    });
    flash((qty > 1 ? qty + " \u00d7 " : "") + "Added to your bag", "View bag");
  };
  const setQty = (i, q) => setCart((c) => (q < 1 ? c.filter((_, k) => k !== i) : c.map((l, k) => (k === i ? Object.assign({}, l, { q: Math.min(20, q) }) : l))));
  const remove = (i) => setCart((c) => c.filter((_, k) => k !== i));
  const toggleFav = (id) => setFav((f) => {
    const on = f.indexOf(id) > -1;
    flash(on ? "Removed from wishlist" : "Saved to your wishlist");
    return on ? f.filter((x) => x !== id) : f.concat([id]);
  });
  const openPage = (label) => {
    if (label === "My Account") { setMenu(false); setSearch(false); setBag(false); setAcct(true); return; }
    if (label === "Deseret Book Blog") { setMenu(false); setSearch(false); setBag(false); setAcct(false); go("#/blog"); return; }
    setPage(label); go("#/page");
  };
  const count = cart.reduce((s, l) => s + l.q, 0);

  let body;
  const isHome = !(route.indexOf("#/c/") === 0 || route.indexOf("#/p/") === 0 || route.indexOf("#/blog") === 0 || ["#/wishlist", "#/stores", "#/bookshelf-plus", "#/page"].indexOf(route) >= 0);
  if (route.indexOf("#/c/") === 0) body = <Category id={route.slice(4)} go={go} add={add} />;
  else if (route.indexOf("#/p/") === 0) body = <Product id={route.slice(4)} go={go} add={add} fav={fav} toggleFav={toggleFav} shipMin={t.shipThreshold} />;
  else if (route.indexOf("#/blog/") === 0) body = <BlogPost i={route.slice(7)} go={go} add={add} />;
  else if (route === "#/blog") body = <BlogIndex go={go} />;
  else if (route === "#/wishlist") body = <Wishlist fav={fav} go={go} add={add} toggleFav={toggleFav} />;
  else if (route === "#/stores") body = <Stores go={go} />;
  else if (route === "#/bookshelf-plus") body = <BookshelfPlus go={go} />;
  else if (route === "#/page") body = <SimplePage title={page || "Deseret Book"} body={(STATIC_PAGES[page] || ["More detail lives on deseretbook.com."]).map((s) => s.split("$49").join("$" + t.shipThreshold))} go={go} />;
  else body = <Home go={go} add={add} />;

  return (
    <div className="phone">
      <Header count={count} onMenu={() => { setSearch(false); setBag(false); setAcct(false); setMenu(true); }} onSearch={() => { setMenu(false); setBag(false); setAcct(false); setSearch(true); }} onHome={() => go("#/")} onBag={() => { setMenu(false); setSearch(false); setAcct(false); setBag(true); }} onAccount={() => { setMenu(false); setSearch(false); setBag(false); setAcct(true); }} search={search} onCloseSearch={() => setSearch(false)} onOpenProduct={(id) => go("#/p/" + id)} onGoCat={(id) => go("#/c/" + id)} shipMin={t.shipThreshold} />
      <main>{body}</main>
      {route === "#/page" || route === "#/bookshelf-plus" || isHome ? null : <Newsletter />}
      <Footer onGo={openPage} onStore={() => go("#/stores")} />
      <div className="ovh">
        <div className={"scrim" + (menu || search || bag || acct ? " on" : "")} onClick={() => { setMenu(false); setSearch(false); setBag(false); setAcct(false); }}></div>
        <Drawer open={menu} onClose={() => setMenu(false)} onGo={(id) => go("#/c/" + id)} onAccount={() => setAcct(true)} user={user} />
        <BagDrawer open={bag} onClose={() => setBag(false)} cart={cart} setQty={setQty} remove={remove} clear={() => setCart([])} go={go}
          ship={{ style: t.shipStyle, accent: t.shipAccent, height: t.shipHeight, threshold: t.shipThreshold, goalMark: t.shipGoalMark }} />
        <Toast on={!!toast} msg={toast ? toast.msg : ""} action={toast ? toast.action : null} onAction={() => { setToast(null); setBag(true); }} />
        <AccountDrawer open={acct} onClose={() => setAcct(false)} user={user}
          onSignIn={(u) => { setUser(u); flash("Signed in as " + u.name); }}
          onSignOut={() => { setUser(null); flash("Signed out"); }}
          onGo={openPage} onWishlist={() => go("#/wishlist")} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
