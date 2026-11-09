const SHIP_METHODS = [
  { id: "standard", n: "Standard", price: 6.99, eta: "Arrives in 5\u20137 business days." },
  { id: "priority", n: "Priority", price: 14.99, eta: "Arrives in 2\u20133 business days." },
  { id: "express", n: "Express", price: 29.99, eta: "Arrives in 1\u20132 business days." }
];
const shipPrice = (m, net, goal, promo) => (m === "standard" && (net >= goal || (promo && promo.ship)) ? 0 : (SHIP_METHODS.find((x) => x.id === m) || SHIP_METHODS[0]).price);
const bagMath = (cart, promo) => {
  const lines = cart.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
  const sub = lines.reduce((s, x) => s + x.p.price * x.l.q, 0);
  const disc = promo && promo.off ? sub * promo.off : 0;
  return { lines, sub, disc, net: sub - disc, count: lines.reduce((s, x) => s + x.l.q, 0) };
};
const InfoI = () => (<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="currentColor"></circle><rect x="7" y="7" width="2" height="5" rx="1" fill="#fff"></rect><circle cx="8" cy="4.6" r="1.1" fill="#fff"></circle></svg>);

function BagPage({ cart, setQty, remove, go, ship, promo, setPromo }) {
  const s = ship || {};
  const goal = s.threshold || 49;
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const { lines, sub, disc, net, count } = bagMath(cart, promo);
  const left = Math.max(0, goal - net);
  const std = shipPrice("standard", net, goal, promo);
  const pct = Math.min(100, (net / goal) * 100);
  const apply = (e) => {
    e.preventDefault();
    const k = code.trim().toUpperCase();
    if (PROMOS[k]) { setPromo(Object.assign({ code: k }, PROMOS[k])); setErr(""); setCode(""); }
    else setErr("That code isn\u2019t valid.");
  };
  if (!lines.length) return (
    <div className="empty">
      <Ico name="shopping-bag" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Your Bag Is Empty</h1>
      <p>Books, journals, and art and home decor are waiting on the shelves.</p>
      <button className="btn-gold" onClick={() => go("#/")}>START SHOPPING</button>
    </div>
  );
  return (
    <div className="bagp">
      <div className="bagp-h"><h1>Shopping Bag</h1><span>{count} {count === 1 ? "item" : "items"}</span></div>
      <div className="bagp-g">
        <div className="bagp-l">
          <div className="ship" style={{ "--ship-accent": s.accent || "var(--db-green-400)", "--ship-h": (s.height || 6) + "px" }}>
            <div className="ship-t">
              <span className="ic"><Ico name={left > 0 ? "truck" : "check"} size={14} /></span>
              {left > 0 ? <span>You&rsquo;re {money(left)} away from <strong>free shipping</strong>.</span> : <span>Your order ships <strong>free</strong>.</span>}
            </div>
            <div className="ship-bar">
              <span className="ship-track"><i style={{ width: pct + "%" }}></i></span>
              {s.goalMark ? <span className="ship-goal">{money(goal).replace(".00", "")}</span> : null}
            </div>
          </div>
          {lines.map((x, i) => (
            <div className="line" key={x.l.key || i}>
              <button className="th" onClick={() => go("#/p/" + x.p.id)}><img src={thumb(colorImg(x.p, x.l.color))} alt="" loading="lazy" decoding="async" /></button>
              <div className="info">
                <button className="t" style={{ textAlign: "left" }} onClick={() => go("#/p/" + x.p.id)}>{x.p.t}</button>
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
        </div>
        <div className="bagp-s">
          <h2>Order Summary</h2>
          <form className="promo-row" onSubmit={apply}>
            <label className="lab" htmlFor="bagp-promo">Promo code</label>
            <div className="promo-in">
              <input id="bagp-promo" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" autoComplete="off" />
              <button className="btn-out" type="submit" style={{ height: 40, padding: "0 20px" }}>APPLY</button>
            </div>
            {promo ? <span className="promo-ok">{promo.code} applied &mdash; {promo.lab}<button type="button" onClick={() => setPromo(null)}>Remove</button></span> : null}
            {err ? <span className="promo-err">{err}</span> : null}
          </form>
          <div className="totals">
            <div className="r"><span>Subtotal</span><span>{money(sub)}</span></div>
            {disc ? <div className="r"><span>Discount</span><span>&minus;{money(disc)}</span></div> : null}
            <div className="r"><span>Standard shipping</span><span>{std ? money(std) : "Free"}</span></div>
            <div className="r grand"><span>Estimated total</span><span>{money(net + std)}</span></div>
            <button className="btn-gold" style={{ height: 48, padding: "0 24px", fontSize: 16, marginTop: 8 }} onClick={() => go("#/checkout")}>CHECKOUT</button>
            <button className="btn-out" style={{ alignSelf: "center" }} onClick={() => go("#/")}>Continue shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoField({ id, label, err, half, ...rest }) {
  return (
    <div className={"co-f" + (half ? " half" : "")}>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={err ? "err" : ""} {...rest} />
      {err ? <span className="field-err">{err}</span> : null}
    </div>
  );
}

function CoSummary({ m, method, go }) {
  return (
    <div className="co-sum">
      <div className="co-sum-t"><h2>Order Summary</h2><button className="co-link" onClick={() => go("#/bag")}>Edit bag</button></div>
      <div className="co-sum-b">
          {m.lines.map((x, i) => (
            <div className="co-li" key={x.l.key || i}>
              <span className="co-th"><img src={thumb(colorImg(x.p, x.l.color))} alt="" /><i>{x.l.q}</i></span>
              <span className="co-lt">{x.p.t}{x.l.color ? <em>{x.l.color}</em> : null}</span>
              <span>{money(x.p.price * x.l.q)}</span>
            </div>
          ))}
      </div>
      <div className="co-sum-f">
        <div className="r"><span>Subtotal</span><span>{money(m.sub)}</span></div>
        {m.disc ? <div className="r"><span>Discount</span><span>&minus;{money(m.disc)}</span></div> : null}
        <div className="r"><span>Shipping</span><span>{method ? money(method) : "Free"}</span></div>
        <div className="r grand"><span>Total</span><span>{money(m.net + method)}</span></div>
      </div>
    </div>
  );
}

function Checkout({ cart, user, setUser, promo, ship, go, clear, flash }) {
  const goal = (ship && ship.threshold) || 49;
  const m = bagMath(cart, promo);
  const [step, setStep] = useState(user ? 2 : 1);
  const [tab, setTab] = useState("create");
  const [guest, setGuest] = useState(false);
  const [f, setF] = useState({ name: user ? user.name : "Sarah Johnson", email: user ? user.email : "sarah.johnson@example.com", pw: user ? "" : "password123", addr: "57 W South Temple", apt: "", city: "Salt Lake City", st: "UT", zip: "84101", phone: "(801) 555-0142", card: "4242 4242 4242 4242", exp: "08/29", cvc: "123", cname: user ? user.name : "Sarah Johnson" });
  const [errs, setErrs] = useState({});
  const [method, setMethod] = useState("standard");
  const [tip, setTip] = useState(null);
  const [gift, setGift] = useState(false);
  const [done, setDone] = useState(null);
  const set = (k) => (e) => setF(Object.assign({}, f, { [k]: e.target.value }));
  const shipCost = shipPrice(method, m.net, goal, promo);
  const email = (v) => /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v);
  const check = (rules) => {
    const e = {};
    rules.forEach(([k, ok, msg]) => { if (!ok) e[k] = msg; });
    setErrs(e);
    return !Object.keys(e).length;
  };
  const next = (n) => { setErrs({}); setStep(n); window.scrollTo(0, 0); };
  const submitAcct = (ev) => {
    ev.preventDefault();
    const rules = [["email", email(f.email), "Enter a valid email address."]];
    if (!guest && tab === "create") rules.unshift(["name", f.name.trim().length > 1, "Enter your full name."]);
    if (!guest) rules.push(["pw", f.pw.length >= 4, tab === "create" ? "Choose a password of at least four characters." : "Enter your password."]);
    if (!check(rules)) return;
    if (!guest) {
      const nm = tab === "create" ? f.name.trim() : f.email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      setUser({ name: nm, email: f.email });
      setF(Object.assign({}, f, { name: nm, pw: "" }));
      flash(tab === "create" ? "Account created" : "Signed in as " + nm);
    }
    next(2);
  };
  const submitShip = (ev) => {
    ev.preventDefault();
    if (!check([["name", f.name.trim().length > 1, "Enter the recipient\u2019s name."], ["addr", f.addr.trim().length > 3, "Enter a street address."], ["city", f.city.trim().length > 1, "Enter a city."], ["st", f.st.trim().length >= 2, "Enter a state."], ["zip", /^\d{5}(-\d{4})?$/.test(f.zip.trim()), "Enter a five-digit ZIP code."]])) return;
    next(3);
  };
  const place = (ev) => {
    ev.preventDefault();
    if (!check([["card", f.card.replace(/\s/g, "").length >= 15, "Enter a card number."], ["exp", /^\d{2}\s?\/\s?\d{2}$/.test(f.exp.trim()), "Use MM/YY."], ["cvc", /^\d{3,4}$/.test(f.cvc.trim()), "Enter the security code."]])) return;
    const ordNo = "DB" + String(Date.now()).slice(-7);
    const mth = SHIP_METHODS.find((x) => x.id === method);
    window.DBOrders && window.DBOrders.add({ no: ordNo, items: m.lines.map((x) => ({ id: x.p.id, q: x.l.q, color: x.l.color, imprint: x.l.imprint || null })), gift: gift, sub: m.net, ship: shipCost, total: m.net + shipCost, method: mth.n, eta: mth.eta, to: f.name + ", " + f.addr + (f.apt ? " " + f.apt : "") + ", " + f.city + ", " + f.st + " " + f.zip, last4: f.card.replace(/\s/g, "").slice(-4) });
    setDone({ no: ordNo, email: f.email, total: m.net + shipCost, method: SHIP_METHODS.find((x) => x.id === method), to: f.name + ", " + f.addr + (f.apt ? " " + f.apt : "") + ", " + f.city + ", " + f.st + " " + f.zip, last4: f.card.replace(/\s/g, "").slice(-4) });
    clear();
    window.scrollTo(0, 0);
  };
  if (done) return (
    <div className="co">
      <div className="co-done">
        <span className="co-ok"><Ico name="check" size={24} /></span>
        <span className="co-eb">Order {done.no}</span>
        <h1>Thank you for your order</h1>
        <p>A confirmation is on its way to {done.email}. {done.method.n} shipping: {done.method.eta.replace("Arrives", "arrives")}</p>
        <div className="co-rev" style={{ alignSelf: "stretch" }}><div><span className="co-lab">Ship to</span><span>{done.to}</span></div><div><span className="co-lab">Payment</span><span>Card ending {done.last4}</span></div></div>
        <div className="totals" style={{ alignSelf: "stretch" }}><div className="r grand"><span>Total charged</span><span>{money(done.total)}</span></div></div>
        <button className="btn-teal" onClick={() => go("#/account/orders")}>View orders</button>
        <button className="co-link" onClick={() => go("#/")}>Keep shopping</button>
      </div>
    </div>
  );
  if (!m.lines.length) return (
    <div className="empty">
      <Ico name="shopping-bag" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Your Bag Is Empty</h1>
      <p>Add something to your bag to check out.</p>
      <button className="btn-gold" onClick={() => go("#/")}>START SHOPPING</button>
    </div>
  );
  const title = step === 1 ? (user && !guest ? "You\u2019re signed in" : guest ? "Check out as a guest" : tab === "create" ? "Create your account" : "Welcome back") : step === 2 ? "Shipping" : "Payment & review";
  return (
    <div className="co co-wide">
      <div className="co-main">
      <div className="co-top">
        <button className="co-back" onClick={() => (step === 1 ? go("#/bag") : next(step - 1))}><Ico name="chevron-left" size={16} /><span>{step === 1 ? "Back to bag" : "Back"}</span></button>
        <span className="co-eb">Step {step} of 3</span>
      </div>
      <div className="co-prog" aria-hidden="true">{[1, 2, 3].map((k) => <i key={k} className={k <= step ? "on" : ""}></i>)}</div>
      <h1>{title}</h1>

      {step === 1 ? (
        <form className="co-form" onSubmit={submitAcct} noValidate>
          {user ? (
            <React.Fragment>
              <div className="co-who"><span className="acct-av">{user.name.slice(0, 1)}</span><span><strong>{user.name}</strong><span>{user.email}</span></span></div>
              <button className="btn-teal" type="button" onClick={() => next(2)}>Continue</button>
            </React.Fragment>
          ) : guest ? (
            <React.Fragment>
              <CoField id="co-gemail" label="Email" type="email" value={f.email} onChange={set("email")} autoComplete="email" err={errs.email} />
              <p className="co-note">We&rsquo;ll send your receipt and tracking here.</p>
              <button className="btn-teal" type="submit">Continue</button>
              <button className="co-link" type="button" onClick={() => { setGuest(false); setErrs({}); }}>Sign in or create an account instead</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="co-seg" role="tablist">
                <button type="button" role="tab" aria-selected={tab === "create"} className={tab === "create" ? "on" : ""} onClick={() => { setTab("create"); setErrs({}); }}>Create account</button>
                <button type="button" role="tab" aria-selected={tab === "signin"} className={tab === "signin" ? "on" : ""} onClick={() => { setTab("signin"); setErrs({}); }}>Sign in</button>
              </div>
              {tab === "create" ? <CoField id="co-name" label="Full name" value={f.name} onChange={set("name")} autoComplete="name" err={errs.name} /> : null}
              <CoField id="co-email" label="Email" type="email" value={f.email} onChange={set("email")} autoComplete="email" err={errs.email} />
              <CoField id="co-pw" label="Password" type="password" value={f.pw} onChange={set("pw")} autoComplete={tab === "create" ? "new-password" : "current-password"} err={errs.pw} />
              <button className="btn-teal" type="submit">{tab === "create" ? "Create account" : "Sign in"}</button>
              <div className="co-or"><span>or</span></div>
              <button className="btn-line" type="button" onClick={() => { setGuest(true); setErrs({}); }}>Continue as guest</button>
            </React.Fragment>
          )}
        </form>
      ) : null}

      {step === 2 ? (
        <form className="co-form" onSubmit={submitShip} noValidate>
          <CoField id="co-sname" label="Full name" value={f.name} onChange={set("name")} autoComplete="name" err={errs.name} />
          <CoField id="co-addr" label="Street address" value={f.addr} onChange={set("addr")} autoComplete="address-line1" err={errs.addr} />
          <CoField id="co-apt" label="Apartment, suite, etc. (optional)" value={f.apt} onChange={set("apt")} autoComplete="address-line2" />
          <CoField id="co-city" label="City" value={f.city} onChange={set("city")} autoComplete="address-level2" err={errs.city} />
          <div className="co-row">
            <CoField id="co-st" label="State" value={f.st} onChange={set("st")} autoComplete="address-level1" maxLength={14} err={errs.st} />
            <CoField id="co-zip" label="ZIP code" value={f.zip} onChange={set("zip")} autoComplete="postal-code" inputMode="numeric" err={errs.zip} />
          </div>
          <CoField id="co-phone" label="Phone (optional)" type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" />
          <fieldset className="co-box">
            <legend>Shipping Method:</legend>
            {SHIP_METHODS.map((x) => {
              const p = shipPrice(x.id, m.net, goal, promo);
              return (
                <div className="co-meth" key={x.id}>
                  <label className="co-rad">
                    <input type="radio" name="co-meth" checked={method === x.id} onChange={() => setMethod(x.id)} />
                    <span className="dot"></span>
                    <span>{x.n}</span>
                  </label>
                  <button type="button" className="co-i" aria-label={x.n + " delivery time"} aria-expanded={tip === x.id} onClick={() => setTip(tip === x.id ? null : x.id)}><InfoI /></button>
                  <span className="co-p">{p ? money(p) : "Free"}</span>
                  {tip === x.id ? <span className="co-tip">{x.eta}</span> : null}
                </div>
              );
            })}
            <label className="co-chk">
              <input type="checkbox" checked={gift} onChange={(e) => setGift(e.target.checked)} />
              <span className="box"><Ico name="check" size={14} /></span>
              <span>This is a Gift</span>
            </label>
          </fieldset>
          <button className="btn-teal" type="submit">Continue to payment</button>
        </form>
      ) : null}

      {step === 3 ? (
        <form className="co-form" onSubmit={place} noValidate>
          <div className="co-rev">
            <div><span className="co-lab">Contact</span><span>{f.email}</span><button type="button" className="co-link" onClick={() => next(1)}>Change</button></div>
            <div><span className="co-lab">Ship to</span><span>{f.name}, {f.addr}{f.apt ? " " + f.apt : ""}, {f.city}, {f.st} {f.zip}</span><button type="button" className="co-link" onClick={() => next(2)}>Change</button></div>
            <div><span className="co-lab">Method</span><span>{SHIP_METHODS.find((x) => x.id === method).n}{gift ? " \u00b7 Gift" : ""}</span><button type="button" className="co-link" onClick={() => next(2)}>Change</button></div>
          </div>
          <CoField id="co-card" label="Card number" value={f.card} onChange={set("card")} inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" err={errs.card} />
          <div className="co-row">
            <CoField id="co-exp" label="Expiration" value={f.exp} onChange={set("exp")} autoComplete="cc-exp" placeholder="MM/YY" err={errs.exp} />
            <CoField id="co-cvc" label="Security code" value={f.cvc} onChange={set("cvc")} inputMode="numeric" autoComplete="cc-csc" placeholder="CVC" err={errs.cvc} />
          </div>
          <CoField id="co-cname" label="Name on card" value={f.cname} onChange={set("cname")} autoComplete="cc-name" />
          <button className="btn-teal" type="submit">Place order</button>
        </form>
      ) : null}
      </div>
      <aside className="co-side"><CoSummary m={m} method={shipCost} go={go} /></aside>
    </div>
  );
}

Object.assign(window, { BagPage, Checkout, SHIP_METHODS, shipPrice });
