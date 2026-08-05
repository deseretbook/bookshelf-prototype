function Home({ go, add }) {
  const [catRef, catDots] = useRailDots();
  const [conRef, conDots] = useRailDots();
  const trending = D.trending.map((id) => D.byId(id)).filter(Boolean);
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-scrim">
          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignSelf: "stretch" }}>
            <h1 className="h-title">Bring Home<br />Reminders of Christ</h1>
            <p className="hero-sub">20% Off Art Plus Deeper Discounts on Select Art</p>
          </div>
          <button className="btn-wg" onClick={() => go("#/c/art")}>Shop Art</button>
        </div>
      </section>

      <section className="band">
        <button className="band-card" onClick={() => go("#/bookshelf-plus")} aria-label="Subscribe now to Bookshelf Plus">
          <span className="band-lab">Subscribe Now to</span>
          <span className="band-logo">
            <img src="assets/bookshelfplus.svg" alt="bookshelf+" />
          </span>
        </button>
      </section>

      <section className="sect" style={{ paddingLeft: 16 }}>
        <h2 className="sect-h" style={{ paddingLeft: 0 }}>New &amp; Trending</h2>
        <div className="rail" style={{ paddingLeft: 0, justifyContent: "flex-start" }}>
          {trending.map((p) => <ProductCard key={p.id} p={p} onOpen={(id) => go("#/p/" + id)} onAdd={add} />)}
        </div>
      </section>

      <section className="promo">
        <div className="promo-card">
          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignSelf: "stretch" }}>
            <h2 className="h-title">Mission-Ready Starts Here</h2>
            <p className="promo-sub">Essentials for Elders and Sisters</p>
          </div>
          <button className="btn-gold" onClick={() => go("#/c/missionary")}>SHOP MISSIONARY</button>
        </div>
      </section>

      <section className="sect" style={{ padding: "28px 0 0", gap: 10, overflow: "hidden" }}>
        <h2 className="sect-h">Featured Categories</h2>
        <div className="cats" ref={catRef} style={{ overflow: "scroll" }}>
          {D.featuredCats.map((c) => (
            <button className="cat" key={c.id} onClick={() => go("#/c/" + c.id)} style={{ overflow: "hidden", padding: 8, height: 120 }}>
              <span className="circ" style={{ overflow: "hidden" }}>{c.img ? <img src={c.img} alt="" /> : <span className="ph" style={{ fontSize: 10, padding: 6 }}>{c.n}</span>}</span>
              <span className="cat-n">{c.n}</span>
            </button>
          ))}
        </div>
        <Dots i={catDots.i} n={catDots.n} />
      </section>

      <section className="sect" style={{ padding: "28px 0 12px", paddingLeft: 16 }}>
        <h2 className="sect-h" style={{ width: "100%", paddingLeft: 0 }}>Featured Content</h2>
        <div className="crail" ref={conRef} style={{ paddingRight: 16 }}>
          {D.featuredContent.map((c, i) => {
            const p = D.byId(c.pid);
            return (
              <button className="ccard" key={i} onClick={() => go("#/p/" + c.pid)}>
                {p ? <img src={thumb(p.img[0])} alt="" /> : null}
                <span className="lab">{c.label}</span>
              </button>
            );
          })}
        </div>
        <Dots i={conDots.i} n={conDots.n} />
      </section>
    </React.Fragment>
  );
}

function Category({ id, go, add }) {
  const [sort, setSort] = useState("featured");
  const base = D.inCat(id);
  const items = id === "all-categories" ? D.products.slice() : base.slice();
  if (sort === "low") items.sort((a, b) => a.price - b.price);
  if (sort === "high") items.sort((a, b) => b.price - a.price);
  if (sort === "az") items.sort((a, b) => a.t.localeCompare(b.t));
  if (sort === "rating") items.sort((a, b) => b.r - a.r);
  return (
    <React.Fragment>
      <div className="crumbs">
        <button onClick={() => go("#/")}>Home</button><span>/</span><span>{D.catName(id)}</span>
      </div>
      <div className="plp-h"><h1>{D.catName(id)}</h1></div>
      <div className="plp-bar">
        <span>{items.length} {items.length === 1 ? "result" : "results"}</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by">
          <option value="featured">Best Matches</option>
          <option value="rating">Top Sellers</option>
          <option value="low">Price Low To High</option>
          <option value="high">Price High to Low</option>
          <option value="az">Product Name A &ndash; Z</option>
        </select>
      </div>
      {items.length ? (
        <div className="grid">
          {items.map((p) => <ProductCard key={p.id} p={p} onOpen={(pid) => go("#/p/" + pid)} onAdd={add} />)}
        </div>
      ) : (
        <div className="empty">
          <p>Nothing is stocked here yet in this prototype. The shelves that are stocked: scriptures, scripture totes, journal editions, and romance.</p>
          <button className="btn-out" onClick={() => go("#/c/church-resources_scriptures_scripture-essentials")}>Shop Scriptures</button>
        </div>
      )}
    </React.Fragment>
  );
}

function Product({ id, go, add, fav, toggleFav, shipMin }) {
  const p = D.byId(id);
  const [color, setColor] = useState(p && p.colors ? p.colors[0].n : null);
  const [qty, setQty] = useState(1);
  const [galRef, gal] = useRailDots();
  useEffect(() => { window.scrollTo(0, 0); setQty(1); setColor(p && p.colors ? p.colors[0].n : null); }, [id]);
  if (!p) return <div className="empty"><p>That product isn&rsquo;t in this prototype.</p><button className="btn-out" onClick={() => go("#/")}>Back to home</button></div>;
  const chosen = p.colors ? p.colors.find((c) => c.n === color) : null;
  const images = (chosen && chosen.img ? [chosen.img] : []).concat(p.img);
  const related = D.products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 6);
  const isFav = fav.indexOf(p.id) > -1;
  return (
    <React.Fragment>
      <div className="skipback"><button onClick={() => go("#/c/" + p.cat)} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}><Ico name="arrow-left" size={14} /> {D.catName(p.cat)}</button></div>
      <div className="pdp-gal">
        <div className="track" ref={galRef}>
          {images.map((src, i) => <div key={i}><img src={thumb(src)} alt={p.t + " image " + (i + 1)}  /></div>)}
        </div>
        <Dots i={gal.i} n={gal.n} />
      </div>
      <div className="pdp">
        <h1>{p.t}</h1>
        <div className="meta">
          <span>no. {p.id}</span>{p.size ? <span>{p.size}</span> : null}<span>{p.fmt}</span>{p.online ? <span>Online exclusive</span> : null}
        </div>
        <div className="rate"><Stars r={p.r} size={13} /><span>{p.r} out of 5 &middot; {p.rc} ratings</span></div>
        <div className="price">{priceLabel(p)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--muted)" }}>
          <Ico name="truck" size={16} /><span>Free shipping on orders ${shipMin || 49}+</span>
        </div>
        {p.colors ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            <span className="lab">Color &mdash; {color}</span>
            <div className="swatches">
              {p.colors.map((c) => (
                <button key={c.n} className={"sw" + (c.n === color ? " on" : "")} style={{ background: c.sw }} onClick={() => setColor(c.n)} aria-label={c.n} aria-pressed={c.n === color} />
              ))}
            </div>
          </div>
        ) : null}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
          <span className="lab">Quantity</span>
          <div className="qty">
            <button onClick={() => setQty(Math.max(1, qty - 1))} disabled={qty === 1} aria-label="Decrease quantity"><Ico name="minus" size={16} /></button>
            <span>{qty}</span>
            <button onClick={() => setQty(Math.min(20, qty + 1))} aria-label="Increase quantity"><Ico name="plus" size={16} /></button>
          </div>
        </div>
        <div className="cta" style={{ marginTop: 8 }}>
          <button className="btn-gold" onClick={() => add(p, qty, color)}>ADD TO CART</button>
          <button className={"fav" + (isFav ? " on" : "")} onClick={() => toggleFav(p.id)} aria-label="Add to wishlist" aria-pressed={isFav}><Ico name="heart" size={20} /></button>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <Accordion title="Description" start={true}><p>{p.d}</p></Accordion>
        <Accordion title="Shipping &amp; Returns">
          <p>Free shipping on orders ${shipMin || 49}+ for standard domestic US. Surcharges still apply for large items.</p>
          <p>Returns are accepted within 30 days. Imprinted items are non-returnable.</p>
        </Accordion>
        <Accordion title="Read for free with bookshelf+">
          <p>Unlimited access to 4,000+ audiobooks and eBooks in the Deseret Bookshelf app.</p>
          <button className="btn-out" style={{ marginTop: 6 }} onClick={() => go("#/bookshelf-plus")}>Learn more</button>
        </Accordion>
      </div>
      {related.length ? (
        <section className="sect">
          <h2 className="sect-h">You May Also Like</h2>
          <div className="rail" style={{ paddingLeft: 16 }}>{related.map((r) => <ProductCard key={r.id} p={r} onOpen={(pid) => go("#/p/" + pid)} onAdd={add} />)}</div>
        </section>
      ) : null}
    </React.Fragment>
  );
}

function Bag({ cart, setQty, remove, go }) {
  const [placed, setPlaced] = useState(false);
  const lines = cart.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
  const sub = lines.reduce((s, x) => s + x.p.price * x.l.q, 0);
  const left = Math.max(0, 49 - sub);
  const ship = sub >= 49 || sub === 0 ? 0 : 5.99;
  if (placed) return (
    <div className="empty">
      <Ico name="check" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Order Placed</h1>
      <p>Thank you. A confirmation is on its way to your email, and your order will ship within two business days.</p>
      <button className="btn-gold" onClick={() => go("#/")}>KEEP SHOPPING</button>
    </div>
  );
  if (!lines.length) return (
    <div className="empty">
      <Ico name="shopping-bag" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Your Bag Is Empty</h1>
      <p>Books, journals, and art and home decor are waiting on the shelves.</p>
      <button className="btn-gold" onClick={() => go("#/")}>START SHOPPING</button>
    </div>
  );
  return (
    <div className="bag">
      <h1>Shopping Bag</h1>
      <div className="ship">
        {left > 0 ? <span>Add {money(left)} for free shipping.</span> : <span>Your order ships free.</span>}
        <span className="track"><i style={{ width: Math.min(100, (sub / 49) * 100) + "%" }} /></span>
      </div>
      <div>
        {lines.map((x, i) => (
          <div className="line" key={x.l.key || i}>
            <button className="th" onClick={() => go("#/p/" + x.p.id)}><img src={thumb(x.p.img[0])} alt="" /></button>
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
      <div className="totals">
        <div className="r"><span>Subtotal</span><span>{money(sub)}</span></div>
        <div className="r"><span>Shipping</span><span>{ship ? money(ship) : "Free"}</span></div>
        <div className="r grand"><span>Total</span><span>{money(sub + ship)}</span></div>
        <button className="btn-gold" style={{ height: 48, marginTop: 8 }} onClick={() => setPlaced(true)}>CHECKOUT</button>
        <button className="btn-out" style={{ alignSelf: "center", textTransform: "none", fontSize: 11 }} onClick={() => go("#/")}>Continue shopping</button>
      </div>
    </div>
  );
}

function Wishlist({ fav, go, add, toggleFav }) {
  const items = fav.map((id) => D.byId(id)).filter(Boolean);
  if (!items.length) return (
    <div className="empty">
      <Ico name="heart" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Your Wishlist Is Empty</h1>
      <p>Tap the heart on any product to save it for later.</p>
      <button className="btn-out" onClick={() => go("#/")}>Browse the shelves</button>
    </div>
  );
  return (
    <React.Fragment>
      <div className="plp-h"><h1>Wishlist</h1></div>
      <div className="grid">{items.map((p) => <ProductCard key={p.id} p={p} onOpen={(id) => go("#/p/" + id)} onAdd={add} />)}</div>
    </React.Fragment>
  );
}

function SimplePage({ title, body, go, links }) {
  return (
    <div className="page">
      <h1>{title}</h1>
      {body.map((t, i) => <p key={i}>{t}</p>)}
      {links ? (
        <div className="card-list">
          {links.map((l) => <button key={l} onClick={() => go("#/")}>{l}<Ico name="arrow-right" size={14} /></button>)}
        </div>
      ) : null}
    </div>
  );
}

function BookshelfPlus({ go }) {
  return (
    <div className="page">
      <img src={D.bookshelfLogo} alt="bookshelf+" style={{ height: 44, width: "auto" }} />
      <h1>Read Free With bookshelf+</h1>
      <p>Unlimited access to 4,000+ audiobooks and eBooks in the Deseret Bookshelf app. One subscription covers the whole household shelf.</p>
      <button className="btn-gold" style={{ alignSelf: "flex-start" }} onClick={() => go("#/")}>TRY IT FREE FOR 7 DAYS</button>
      <p style={{ fontSize: 11, color: "var(--muted)" }}>Digital items cannot be gifted, returned, nor refunded.</p>
    </div>
  );
}

function Stores({ go }) {
  const list = [
    ["Deseret Book \u2014 City Creek", "50 S Main St, Salt Lake City, UT", "Open until 9:00 PM"],
    ["Deseret Book \u2014 Fort Union", "1110 E Fort Union Blvd, Midvale, UT", "Open until 8:00 PM"],
    ["Deseret Book \u2014 University Mall", "1200 Towne Centre Blvd, Orem, UT", "Open until 8:00 PM"],
    ["Deseret Book \u2014 Layton Hills", "1201 N Hill Field Rd, Layton, UT", "Closes at 7:00 PM"]
  ];
  return (
    <div className="page">
      <h1>Find My Store</h1>
      <p>The store locator finds the closest store near you. Hours shown are for today.</p>
      <div className="card-list">
        {list.map((s) => (
          <button key={s[0]} onClick={() => go("#/")}>
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontWeight: 500 }}>{s[0]}</span>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{s[1]}</span>
              <span style={{ fontSize: 11, color: "var(--teal)" }}>{s[2]}</span>
            </span>
            <Ico name="store" size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Home, Category, Product, Bag, Wishlist, SimplePage, BookshelfPlus, Stores });
