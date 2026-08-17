const DS = window.DeseretBookDesignSystem_609afa || {};
const { Icon } = DS;
const { useState, useEffect, useRef, useCallback } = React;
const D = window.DB_DATA;

const money = (n) => "$" + n.toFixed(2);
const priceLabel = (p) => (p.priceHigh ? money(p.price) + " \u2013 " + money(p.priceHigh) : money(p.price));
/* One canonical transform per asset so every request hits the same cached response. */
const RES = (u) => { if (!u) return u; const ids = window.__urlIds; const id = ids && ids[u]; return (id && window.__resources && window.__resources[id]) || u; };
window.RES = RES;
const thumb = (url) => RES(url) || "";
/* The CDN ignores resize params, so every surface shares one canonical URL per asset: one fetch, one decode, cached thereafter. */

function Ico({ name, size = 20, sw = 1.75 }) {
  if (Icon) return <Icon name={name} size={size} strokeWidth={sw} />;
  return <span style={{ width: size, height: size, display: "inline-block" }} />;
}

function StatusBar() {
  return (
    <div className="statusbar">
      <span>9:41</span>
      <div className="notch"></div>
      <div className="sb-r">
        <div className="sbar">{[4, 6, 8, 11].map((h, i) => <i key={i} style={{ height: h }} />)}</div>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true"><path d="M8 9.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm0-3.6c1.2 0 2.3.45 3.1 1.2l-1.2 1.25A2.7 2.7 0 0 0 8 7.7c-.75 0-1.44.28-1.9.75L4.9 7.2A4.5 4.5 0 0 1 8 6Zm0-3.5c2.1 0 4 .8 5.45 2.15l-1.2 1.25A6.2 6.2 0 0 0 8 4.25c-1.7 0-3.2.62-4.25 1.65L2.55 4.65A7.7 7.7 0 0 1 8 2.5Z" fill="#000" /></svg>
        <div className="sbat"><span></span></div>
      </div>
    </div>
  );
}

function Stars({ r, size = 11 }) {
  return (
    <div className="stars" aria-label={r + " out of 5"}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(r) ? "" : "off"}><Ico name="star" size={size} sw={1} /></span>
      ))}
    </div>
  );
}

/* Cover renders the image directly; the title-text fallback is only for a broken asset. */
function Cover({ p }) {
  const [bad, setBad] = useState(false);
  const src = thumb(p.img[0]);
  if (bad || !src) return <span className="ph">{p.t}</span>;
  return <img src={src} alt={p.t} loading="lazy" decoding="async" draggable={false} onError={() => setBad(true)} />;
}

function ProductCardBase({ p, onOpen, onAdd }) {
  return (
    <div className="pcard">
      <button className="cover" onClick={() => onOpen(p.id)} aria-label={p.t}><Cover p={p} /></button>
      <button className="p-t" onClick={() => onOpen(p.id)} style={{ textAlign: "left" }}>{p.t}</button>
      <div className="p-rate"><Stars r={p.r} /><span className="p-rc">({p.rc})</span></div>
      <div className="p-p">{priceLabel(p)}</div>
      <button className="btn-out" style={{ width: 90 }} onClick={() => onAdd(p)}>Add to Cart</button>
    </div>
  );
}
const ProductCard = React.memo(ProductCardBase);

/* Horizontal rail that reports its page index to a dot indicator */
function useRailDots() {
  const ref = useRef(null);
  const [state, setState] = useState({ i: 0, n: 1 });
  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const n = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    const i = Math.min(n - 1, Math.round(el.scrollLeft / el.clientWidth));
    /* Only commit real changes: scroll fires dozens of times per swipe and every setState re-rendered the rail. */
    setState((s) => (s.i === i && s.n === n ? s : { i, n }));
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => { el.removeEventListener("scroll", measure); window.removeEventListener("resize", measure); };
  }, [measure]);
  return [ref, state];
}

function Dots({ i, n }) {
  if (n < 2) return null;
  return <div className="dots">{Array.from({ length: n }).map((_, k) => <i key={k} className={k === i ? "on" : ""} />)}</div>;
}

function Wordmark() {
  return (
    <React.Fragment>
      <img className="wm-e" src={(window.__resources && window.__resources.emblem) || "assets/emblem.svg"} alt="" />
      <img className="wm-w" src={(window.__resources && window.__resources.wordmark) || "assets/wordmark.svg"} alt="Deseret Book" />
    </React.Fragment>
  );
}

function Header({ count, onMenu, onSearch, onHome, onBag, onAccount, search, onCloseSearch, onOpenProduct, shipMin, onGoCat }) {
  return (
    <React.Fragment>
      <div className="ann">FREE SHIPPING on orders of ${shipMin || 49} or more. Exclusions apply.</div>
      <header className={"hdr" + (search ? " srch-on" : "")}>
        <div className="hdr-bar">
          <div className="hdr-in">
            <div className="hdr-ico hdr-burger">
              <button className="iconbtn" onClick={onMenu} aria-label="Open menu"><Ico name="menu" size={22} /></button>
            </div>
            <button className="wordmark" onClick={onHome} aria-label="Deseret Book home"><Wordmark /></button>
            <div className="hdr-ico hdr-acts" style={{ justifyContent: "flex-end" }}>
              <button className="iconbtn" onClick={onAccount} aria-label="Account"><Ico name="user" size={20} /><span className="ico-lab">Account</span></button>
              <button className="iconbtn" onClick={onBag} aria-label={"Bag, " + count + " items"}>
                <Ico name="shopping-bag" size={20} />
                <span className="badge">{count}</span>
                <span className="ico-lab">Bag</span>
              </button>
            </div>
          </div>
          <div className="hdr-srch">
            <HeaderSearch open={search} onOpen={onSearch} onClose={onCloseSearch} onOpenProduct={onOpenProduct} />
          </div>
        </div>
        <NavBar onGo={onGoCat} disabled={!!search} />
      </header>
    </React.Fragment>
  );
}

/* Desktop-only category bar with a hover mega panel. Hidden below 1024px. */
function NavBar({ onGo, disabled }) {
  const [open, setOpen] = useState(null);
  const go = (id) => { setOpen(null); onGo(id); };
  useEffect(() => { if (disabled) setOpen(null); }, [disabled]);
  return (
    <nav className="dnav" onMouseLeave={() => setOpen(null)} aria-label="Shop categories">
      <div className="dnav-in">
        {D.nav.map((n) => {
          const has = n.sub && n.sub.length;
          return (
            <div className="dnav-i" key={n.id} onMouseEnter={() => setOpen(has && !disabled ? n.id : null)}>
              <button className={"dnav-b" + (open === n.id ? " on" : "")} onClick={() => go(n.id)} aria-expanded={open === n.id}>{n.n}</button>
              {has && open === n.id && !disabled ? (
                <div className="dmega">
                  <div className="dmega-in">
                    {n.sub.map((s) => (
                      <div className="dcol" key={s.id}>
                        <button className="dcol-h" onClick={() => go(s.id)}>{s.n}</button>
                        {(s.sub || []).map((x) => <button className="dcol-l" key={x.id} onClick={() => go(x.id)}>{x.n}</button>)}
                      </div>
                    ))}
                    <button className="dmega-all" onClick={() => go(n.id)}>Shop all {n.n}<Ico name="arrow-right" size={14} /></button>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function NavNode({ node, depth, onGo }) {
  const [open, setOpen] = useState(false);
  const has = node.sub && node.sub.length;
  return (
    <React.Fragment>
      <button className={"nav-row" + (depth ? " l" + (depth + 1) : "")} onClick={() => (has ? setOpen(!open) : onGo(node.id))}>
        <span>{node.n}</span>
        {has ? <span style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 180ms", display: "grid" }}><Ico name="chevron-down" size={16} /></span>
          : <Ico name="arrow-right" size={14} />}
      </button>
      {has && open ? node.sub.map((s) => <NavNode key={s.id} node={s} depth={depth + 1} onGo={onGo} />) : null}
      {has && open && depth === 0 ? <button className="nav-row l2" onClick={() => onGo(node.id)}><span>Shop all {node.n}</span><Ico name="arrow-right" size={14} /></button> : null}
    </React.Fragment>
  );
}

function Drawer({ open, onClose, onGo, onAccount, user }) {
  return (
    <nav className={"drawer" + (open ? " on" : "")} aria-hidden={!open}>
      <div className="drawer-h">
        <span className="wordmark"><Wordmark /></span>
        <button className="iconbtn" onClick={onClose} aria-label="Close menu"><Ico name="x" size={22} /></button>
      </div>
      <div className="drawer-b">
        {D.nav.map((n) => <NavNode key={n.id} node={n} depth={0} onGo={onGo} />)}
        <div className="nav-foot">
          <button style={{ fontSize: 13, color: "var(--teal)", textAlign: "left" }} onClick={() => { onClose(); onAccount(); }}>{user ? "My Account" : "Sign In"}</button>
          <a href="#/wishlist" onClick={onClose}>Wishlist</a>
          <a href="#/stores" onClick={onClose}>Find My Store</a>
        </div>
      </div>
    </nav>
  );
}

function HeaderSearch({ open, onOpen, onClose, onOpenProduct }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const wrapRef = useRef(null);
  useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); if (!open) setQ(""); }, [open]);
  useEffect(() => {
    if (!open) return;
    const away = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        if (inputRef.current) inputRef.current.blur();
        onClose();
      }
    };
    document.addEventListener("pointerdown", away, true);
    return () => document.removeEventListener("pointerdown", away, true);
  }, [open, onClose]);
  const term = q.trim().toLowerCase();
  const hits = term.length < 2 ? [] : D.products.filter((p) =>
    (p.t + " " + p.by + " " + D.catName(p.cat)).toLowerCase().indexOf(term) > -1).slice(0, 12);
  const suggestions = ["Scriptures", "Sarah M. Eden", "Scripture totes", "Journal edition", "Quad combination"];
  return (
    <div className="srch" ref={wrapRef} style={{ marginBottom: 4 }}>
      <div className="srch-row">
        {open ? (
          <div className="srch-f open">
            <Ico name="search" size={16} />
            <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search books, scriptures, gifts" aria-label="Search" />
          </div>
        ) : (
          <button className="srch-f" onClick={onOpen}>
            <span>Search</span>
            <Ico name="search" size={16} />
          </button>
        )}
        {open ? <button className="srch-cancel" onClick={onClose}>Cancel</button> : null}
      </div>
      <div className={"srch-panel" + (open ? " on" : "")} aria-hidden={!open}>
        {term.length < 2 ? (
          <div style={{ padding: "16px" }}>
            <div className="lab" style={{ marginBottom: 12 }}>Popular searches</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {suggestions.map((s) => <button key={s} className="btn-out" onClick={() => setQ(s)} style={{ textTransform: "none", fontSize: 11 }}>{s}</button>)}
            </div>
          </div>
        ) : hits.length ? hits.map((p) => (
          <button key={p.id} className="srow" onClick={() => { onOpenProduct(p.id); onClose(); }}>
            <span className="th"><img src={thumb(p.img[0])} alt="" loading="lazy" decoding="async" /></span>
            <span>
              <span className="t">{p.t}</span>
              <span className="p">{priceLabel(p)}</span>
            </span>
          </button>
        )) : (
          <div className="empty"><p>No results for &ldquo;{q}&rdquo;. Try a title, an author, or a category.</p></div>
        )}
      </div>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const [ask, setAsk] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [nameErr, setNameErr] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) { setErr("Enter a valid email address."); return; }
    setErr(""); setAsk(true);
  };
  const finish = (e) => {
    e.preventDefault();
    if (!first.trim() || !last.trim()) { setNameErr("Enter your first and last name."); return; }
    setNameErr(""); setAsk(false); setDone(true);
  };
  return (
    <section className="band news-band">
      <div className="band-card news-card">
        <span className="band-lab news-lab">
          <span className="news-h">Inspiration Made Easy</span>
          <span className="news-p">Sign up for discounts, news and limited-time offers</span>
        </span>
        {done ? <span className="news-ok">You&rsquo;re on the list. We send one email a week.</span> : (
          <div className="news-field">
            <form className="news-form" onSubmit={submit} noValidate>
              <input type="email" className={err ? "err" : ""} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" aria-label="Email address" aria-invalid={err ? true : undefined} />
              <button className="sub" type="submit">SUBSCRIBE</button>
            </form>
            {err ? <span className="field-err">{err}</span> : null}
          </div>
        )}
      </div>
      <div className={"pdlg news-dlg" + (ask ? " on" : "")} role="dialog" aria-modal="true" aria-label="Complete your subscription" aria-hidden={!ask}>
        <div className="pdlg-c">
          <button className="pdlg-x" onClick={() => setAsk(false)} aria-label="Close">
            <Ico name="x" size={18} />
          </button>
          <span className="pdlg-eyebrow">Almost There</span>
          <h2>Complete Your Subscription</h2>
          <p>Tell us your name so we can address our emails to you.</p>
          <form onSubmit={finish} noValidate>
            <input type="text" className={nameErr && !first.trim() ? "err" : ""} value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First name" aria-label="First name" autoComplete="given-name" />
            <input type="text" className={nameErr && !last.trim() ? "err" : ""} value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last name" aria-label="Last name" autoComplete="family-name" />
            {nameErr ? <span className="field-err">{nameErr}</span> : null}
            <button className="btn-gold" type="submit" style={{ height: 48 }}>COMPLETE SUBSCRIPTION</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FootAcc({ title, items, onGo }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="acc">
      <button className="acc-h" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 180ms", display: "grid" }}><Ico name="chevron-down" size={16} /></span>
      </button>
      <div className={"acc-b" + (open ? " on" : "")}>{items.map((it) => <a key={it} href="#/page" onClick={(e) => { e.preventDefault(); onGo(it); }}>{it}</a>)}</div>
    </div>
  );
}

function Footer({ onGo, onStore }) {
  return (
    <footer className="ftr">
      <button className="btn-white" style={{ width: 143 }} onClick={onStore}>FIND MY STORE</button>
      {Object.keys(D.footer).map((k) => <FootAcc key={k} title={k} items={D.footer[k]} onGo={onGo} />)}
      <div className="social">
        <a href="#/page" onClick={(e) => { e.preventDefault(); onGo("Facebook"); }} aria-label="Facebook" style={{ color: "#fff" }}><Ico name="facebook" size={18} /></a>
        <a href="#/page" onClick={(e) => { e.preventDefault(); onGo("Instagram"); }} aria-label="Instagram" style={{ color: "#fff" }}><Ico name="instagram" size={18} /></a>
      </div>
      <div className="rule"></div>
      <div className="legal">
        <span>&copy; 1996&ndash;2025 Deseret Book Company. All Rights Reserved.</span>
        <span>Product Submission Guidelines&nbsp;&nbsp; |&nbsp;&nbsp; Manuscript Submissions&nbsp;&nbsp; |&nbsp;&nbsp; Legal</span>
      </div>
    </footer>
  );
}

const PROMOS = { SHELF10: { off: 0.1, lab: "10% off" }, FREESHIP: { ship: true, lab: "Free shipping" } };

function BagDrawer({ open, onClose, cart, setQty, remove, clear, go, ship }) {
  const s = ship || {};
  const goal = s.threshold || 49;
  const [code, setCode] = useState("");
  const [promo, setPromo] = useState(null);
  const [err, setErr] = useState("");
  const [placed, setPlaced] = useState(false);
  useEffect(() => { if (open) setPlaced(false); }, [open]);
  const lines = cart.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
  const sub = lines.reduce((s, x) => s + x.p.price * x.l.q, 0);
  const disc = promo && promo.off ? sub * promo.off : 0;
  const net = sub - disc;
  const left = Math.max(0, goal - net);
  const ok = net === 0 || net >= goal || (promo && promo.ship);
  const shipCost = ok ? 0 : 5.99;
  const pct = Math.min(100, (net / goal) * 100);
  const apply = (e) => {
    e.preventDefault();
    const k = code.trim().toUpperCase();
    if (PROMOS[k]) { setPromo(Object.assign({ code: k }, PROMOS[k])); setErr(""); setCode(""); }
    else { setPromo(null); setErr("That code isn\u2019t valid."); }
  };
  return (
    <aside className={"bagd" + (open ? " on" : "")} aria-hidden={!open} aria-label="Shopping bag">
      <div className="bagd-h">
        <h2>Shopping Bag{lines.length ? " (" + lines.reduce((s, x) => s + x.l.q, 0) + ")" : ""}</h2>
        <button className="iconbtn" onClick={onClose} aria-label="Close bag"><Ico name="x" size={22} /></button>
      </div>
      {placed ? (
        <div className="bagd-b">
          <div className="empty">
            <Ico name="check" size={28} />
            <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Order Placed</h1>
            <p>Thank you. A confirmation is on its way to your email, and your order will ship within two business days.</p>
            <button className="btn-gold" onClick={onClose}>KEEP SHOPPING</button>
          </div>
        </div>
      ) : !lines.length ? (
        <div className="bagd-b">
          <div className="empty">
            <Ico name="shopping-bag" size={28} />
            <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Your Bag Is Empty</h1>
            <p>Books, journals, and art and home decor are waiting on the shelves.</p>
            <button className="btn-gold" onClick={onClose}>START SHOPPING</button>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="bagd-b">
            <div className="ship" style={{ "--ship-accent": s.accent || "#0f8079", "--ship-h": (s.height || 6) + "px" }}>
              <div className="ship-t">
                <span className="ic"><Ico name={left > 0 ? "truck" : "check"} size={14} /></span>
                {left > 0
                  ? <span>You&rsquo;re {money(left)} away from <strong>free shipping</strong>.</span>
                  : <span>Your order ships <strong>free</strong>.</span>}
              </div>
              <div className="ship-bar">
                {s.style === "segments" ? (
                  <span className="ship-seg">{[0, 1, 2, 3, 4].map((k) => <i key={k} className={pct >= (k + 1) * 20 - 10 ? "on" : ""} />)}</span>
                ) : (
                  <span className="ship-track"><i style={{ width: pct + "%" }} /></span>
                )}
                {s.goalMark ? <span className="ship-goal">{money(goal).replace(".00", "")}</span> : null}
              </div>
            </div>
            {lines.map((x, i) => (
              <div className="line" key={x.l.key || i}>
                <button className="th" onClick={() => { onClose(); go("#/p/" + x.p.id); }}><img src={thumb(x.p.img[0])} alt="" loading="lazy" decoding="async" /></button>
                <div className="info">
                  <button className="t" style={{ textAlign: "left" }} onClick={() => { onClose(); go("#/p/" + x.p.id); }}>{x.p.t}</button>
                  {x.l.color ? <span className="c">{x.l.color}</span> : null}
                  <span className="c">{money(x.p.price)} each</span>
                  <div className="r">
                    <div className="qty">
                      <button onClick={() => setQty(i, x.l.q - 1)} aria-label="Decrease"><Ico name="minus" size={14} /></button>
                      <span>{x.l.q}</span>
                      <button onClick={() => setQty(i, x.l.q + 1)} aria-label="Increase"><Ico name="plus" size={14} /></button>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{money(x.p.price * x.l.q)}</span>
                  </div>
                  <button className="rm" onClick={() => remove(i)}>Remove</button>
                </div>
              </div>
            ))}
            <form className="promo-row" onSubmit={apply}>
              <label className="lab" htmlFor="promo">Promo code</label>
              <div className="promo-in">
                <input id="promo" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" autoComplete="off" />
                <button className="btn-out" type="submit" style={{ height: 40 }}>APPLY</button>
              </div>
              {promo ? <span className="promo-ok">{promo.code} applied &mdash; {promo.lab}<button type="button" onClick={() => setPromo(null)}>Remove</button></span> : null}
              {err ? <span className="promo-err">{err}</span> : null}
            </form>
          </div>
          <div className="bagd-f">
            <div className="r"><span>Subtotal</span><span>{money(sub)}</span></div>
            {disc ? <div className="r"><span>Discount</span><span>&minus;{money(disc)}</span></div> : null}
            <div className="r"><span>Shipping</span><span>{shipCost ? money(shipCost) : "Free"}</span></div>
            <div className="r grand"><span>Total</span><span>{money(net + shipCost)}</span></div>
            <button className="btn-gold" style={{ height: 48, marginTop: 4 }} onClick={() => { setPlaced(true); setPromo(null); setCode(""); setErr(""); clear(); }}>CHECKOUT</button>
          </div>
        </React.Fragment>
      )}
    </aside>
  );
}

const ACCT_LINKS = ["Orders", "Addresses", "Payment methods", "Email preferences", "Bookshelf Plus", "Platinum Rewards"];

function AccountDrawer({ open, onClose, user, onSignIn, onSignOut, onGo, onWishlist }) {
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  useEffect(() => { if (!open) { setMode("signin"); setErr(""); setPw(""); } }, [open]);
  const create = mode === "create";
  const submit = (e) => {
    e.preventDefault();
    if (create && name.trim().length < 2) { setErr("Enter your name."); return; }
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) { setErr("Enter a valid email address."); return; }
    if (pw.length < 4) { setErr(create ? "Choose a password of at least four characters." : "Enter your password."); return; }
    setErr(""); setPw("");
    onSignIn({ name: create ? name.trim() : email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), email: email });
  };
  return (
    <aside className={"acctd" + (open ? " on" : "")} aria-hidden={!open} aria-label="My account">
      <div className="bagd-h">
        <h2>{user ? "My Account" : create ? "Create Account" : "Sign In"}</h2>
        <button className="iconbtn" onClick={onClose} aria-label="Close account"><Ico name="x" size={22} /></button>
      </div>
      <div className="bagd-b">
        {user ? (
          <React.Fragment>
            <div className="acct-id">
              <span className="acct-av">{user.name.slice(0, 1)}</span>
              <span className="acct-meta">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
                <span className="acct-tier">PLATINUM REWARDS &middot; 1,240 points</span>
              </span>
            </div>
            <div className="card-list" style={{ marginTop: 4 }}>
              {ACCT_LINKS.map((l) => (
                <button key={l} onClick={() => { onClose(); onGo(l); }}>
                  <span>{l}</span><Ico name="arrow-right" size={14} />
                </button>
              ))}
              <button onClick={() => { onClose(); onWishlist(); }}><span>Wishlist</span><Ico name="arrow-right" size={14} /></button>
            </div>
            <button className="btn-out" style={{ alignSelf: "flex-start", marginTop: 20, textTransform: "none", fontSize: 11 }} onClick={onSignOut}>Sign out</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="acct-lede">{create ? "Create an account to track orders, save addresses, and keep a wishlist." : "Sign in to see your orders, saved addresses, and Bookshelf Plus library."}</p>
            <form className="acct-form" onSubmit={submit} noValidate>
              {create ? (
                <React.Fragment>
                  <label className="lab" htmlFor="acct-name">Full name</label>
                  <input id="acct-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="First and last name" autoComplete="name" />
                </React.Fragment>
              ) : null}
              <label className="lab" htmlFor="acct-email">Email address</label>
              <input id="acct-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
              <label className="lab" htmlFor="acct-pw">Password</label>
              <input id="acct-pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" autoComplete={create ? "new-password" : "current-password"} />
              {err ? <span className="promo-err">{err}</span> : null}
              <button className="btn-gold" type="submit" style={{ height: 48, marginTop: 4 }}>{create ? "CREATE ACCOUNT" : "SIGN IN"}</button>
            </form>
            <div className="acct-alt">
              <button onClick={() => { setErr(""); setMode(create ? "signin" : "create"); }}>{create ? "Already have an account? Sign in" : "Create an account"}</button>
              {create ? null : <button onClick={() => { onClose(); onGo("Contact Us"); }}>Forgot password?</button>}
            </div>
          </React.Fragment>
        )}
      </div>
    </aside>
  );
}

function PromoDialog({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const [ask, setAsk] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [nameErr, setNameErr] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) { setErr("Enter a valid email address."); return; }
    setErr(""); setAsk(true);
  };
  const finish = (e) => {
    e.preventDefault();
    if (!first.trim() || !last.trim()) { setNameErr("Enter your first and last name."); return; }
    setNameErr(""); setAsk(false); setDone(true);
  };
  return (
    <div className={"pdlg" + (open ? " on" : "")} role="dialog" aria-modal="true" aria-label="Save 15% offer" aria-hidden={!open}>
      <div className="pdlg-c">
        <button className="pdlg-x" onClick={onClose} aria-label="Close offer"><Ico name="x" size={18} /></button>
        {done ? (
          <React.Fragment>
            <span className="pdlg-eyebrow">Code Sent</span>
            <h2>Check Your Inbox</h2>
            <p>Your 15% code is on its way. It works on your first order and stays good for 30 days.</p>
            <button className="btn-gold" style={{ height: 48 }} onClick={onClose}>START SHOPPING</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="pdlg-eyebrow">New Here</span>
            <h2>Take 15% Off Your First Order</h2>
            <p>Sign up for email and we&rsquo;ll send your code right away. We will send you discounts, news and limited-time offers.</p>
            <form onSubmit={submit} noValidate>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" aria-label="Email address" />
              {err ? <span className="promo-err">{err}</span> : null}
              <button className="btn-gold" type="submit" style={{ height: 48 }}>GET MY 15% OFF</button>
            </form>
            <button className="pdlg-no" onClick={onClose}>No thanks</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Toast({ msg, action, onAction, on }) {
  return (
    <div className={"toast" + (on ? " on" : "")} role="status">
      <span>{msg}</span>
      {action ? <button className="toast-a" onClick={onAction}>{action}</button> : null}
    </div>
  );
}

function Accordion({ title, children, start }) {
  const [open, setOpen] = useState(!!start);
  return (
    <div className="acc2">
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 180ms", display: "grid" }}><Ico name="chevron-down" size={16} /></span>
      </button>
      {open ? <div className="body">{children}</div> : null}
    </div>
  );
}

Object.assign(window, {
  DS, Ico, StatusBar, Stars, Cover, ProductCard, useRailDots, Dots, Wordmark, Header, NavBar, Drawer,
  HeaderSearch, Newsletter, Footer, Toast, BagDrawer, AccountDrawer, PromoDialog, Accordion, money, priceLabel, thumb, D
});
