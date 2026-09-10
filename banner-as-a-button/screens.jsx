const GV = "#/c/books_gospel-voices";

function Home({ go, add }) {
  const [conRef, conDots] = useRailDots();
  const trending = D.trending.map((id) => D.byId(id)).filter(Boolean);
  const fineArt = D.fineArt.map((id) => D.byId(id)).filter(Boolean);
  return (
    <React.Fragment>
      {(window.AB_CONCEPT || "B") === "A" ? (
        <section className="hero art ab-a" onClick={() => go(GV)}>
          <div className="art-img" aria-hidden="true"></div>
          <div className="art-box">
            <p className="ab-offer">$5 Off Your Purchase of $50+ with Code: Conference50</p>
          </div>
        </section>
      ) : (
        <section className="hero art ab-b" onClick={() => go(GV)}>
          <div className="art-img" aria-hidden="true"></div>
          <div className="art-box">
            <h1 className="h-title">Prepare for Conference with Prophetic Insights</h1>
            <p className="hero-sub">$5 Off Your Purchase of $50+ with Code Conference50</p>
            <button className="btn-gold" onClick={() => go(GV)}>Shop Gospel Voices</button>
          </div>
        </section>
      )}

      <section className="band">
        <button className="band-card" onClick={() => go("#/bookshelf-plus")} aria-label="Subscribe now to Bookshelf Plus">
          <span className="band-lab">Subscribe now and gain unlimited access to 4,000+ audiobooks &amp; eBooks</span>
          <span className="band-logo">
            <img src={(window.__resources && window.__resources.bsplus) || "assets/bookshelfplus.svg"} alt="bookshelf+" />
          </span>
        </button>
      </section>

        <section className="sect">
        <div className="sect-top">
          <h2 className="sect-h">New &amp; Trending</h2>
          <button className="sect-all" onClick={() => go("#/c/new-trending")}>See All</button>
        </div>
        <div className="rail">
          {trending.map((p) => <ProductCard key={p.id} p={p} onOpen={(id) => go("#/p/" + id)} onAdd={add} />)}
        </div>
      </section>

      <Newsletter />

      <section className="promo">
        <div className="promo-card" onClick={() => go("#/c/art")}>
          <div className="promo-box">
            <h2 className="h-title">Bring Home Reminders of Christ</h2>
            <p className="promo-sub">20% Off Art Plus Deeper Discounts on Select Art</p>
            <button className="btn-gold" onClick={() => go("#/c/art")}>SHOP ART</button>
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="sect-top">
          <h2 className="sect-h">Fine Art</h2>
          <button className="sect-all" onClick={() => go("#/c/home_fine-art")}>See All</button>
        </div>
        <div className="rail">
          {fineArt.map((p) => <ProductCard key={p.id} p={p} onOpen={(id) => go("#/p/" + id)} onAdd={add} />)}
        </div>
      </section>

      <section className="sect sect-con">
        <div className="sect-top">
          <h2 className="sect-h">Featured Content</h2>
          <button className="sect-all" onClick={() => go("#/blog")}>See All</button>
        </div>
        <div className="crail" ref={conRef}>
          {D.featuredContent.map((c, i) => {
            const p = D.byId(c.pid);
            return (
              <article className="ccard" key={i} onClick={() => go("#/blog/" + i)}>
                <span className="ccard-img">{c.img ? <img src={thumb(c.img)} alt="" loading="lazy" decoding="async" /> : p ? <img src={thumb(p.img[0])} alt="" loading="lazy" decoding="async" /> : null}</span>
                <div className="ccard-b">
                  <span className="ccard-m">{c.date}</span>
                  <h3 className="ccard-t">{c.title}</h3>
                  <p className="ccard-x">{c.x}</p>
                  <button className="btn-out" onClick={() => go("#/blog/" + i)}>Read More</button>
                </div>
              </article>
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
      <div className="pdp-wrap">
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
      <div className="pdp-acc" style={{ marginTop: 20 }}>
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
      </div>
      {related.length ? (
        <section className="sect">
          <h2 className="sect-h">You May Also Like</h2>
          <div className="rail">{related.map((r) => <ProductCard key={r.id} p={r} onOpen={(pid) => go("#/p/" + pid)} onAdd={add} />)}</div>
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
            <button className="th" onClick={() => go("#/p/" + x.p.id)}><img src={thumb(x.p.img[0])} alt="" loading="lazy" decoding="async" /></button>
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

function FaqRow({ q, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="acc2">
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 180ms", display: "grid" }}><Ico name="chevron-down" size={16} /></span>
      </button>
      {open ? <div className="body">{children}</div> : null}
    </div>
  );
}

function BookshelfPlus({ go }) {
  const plans = [["Monthly", "$12.99/month", "Most Popular"], ["Yearly", "$129/year", "Best Value"]];
  const perks = ["Unlimited Listening", "4,000+ Audiobooks & eBooks", "Exclusive Content", "Guaranteed Clean Content", "New Audiobooks on Release Day"];
  return (
    <div className="page bsp">
      <img className="bsp-logo" src={thumb(D.bookshelfLogo)} alt="bookshelf+" />
      <h1>4000+ audiobooks &amp; eBooks in your pocket</h1>
      <p className="bsp-price">$12.99/month. Cancel anytime.</p>
      <button className="btn-gold bsp-cta" onClick={() => go("#/")}>START FREE TRIAL</button>
      <p className="bsp-fine">7 days to try bookshelf+ risk-free. One free trial per customer.</p>

      <h2 className="bsp-h">Pick Your Plan</h2>
      <div className="bsp-plans">
        {plans.map(([name, amt, tag]) => (
          <div className="bsp-plan" key={name}>
            <span className="bsp-tag">{tag}</span>
            <h3>{name}</h3>
            <p className="bsp-amt">{amt}</p>
            <button className="btn-out" onClick={() => go("#/")}>Start Now</button>
          </div>
        ))}
      </div>

      <h2 className="bsp-h">You&rsquo;ll Get Exclusive Access To:</h2>
      <ul className="bsp-perks">
        {perks.map((p) => <li key={p}><Ico name="check" size={16} /><span>{p}</span></li>)}
      </ul>

      <h2 className="bsp-h">Frequently Asked Questions</h2>
      <div className="bsp-faq">
        <FaqRow q="What is bookshelf+?">
          <p><strong>Bookshelf+ is a digital subscription that gives you unlimited access to Deseret Book&rsquo;s entire digital audiobook library</strong> &mdash; including books from gospel leaders, a full library of clean and compelling fiction, inspiring audiobooks, exclusive podcasts, and more. It&rsquo;s like having an uplifting library in your pocket, wherever you go.</p>
        </FaqRow>
        <FaqRow q="Is there a free trial?">
          <p>Yes! You get 7 days to try bookshelf+ risk-free. Just sign up, and you won&rsquo;t be charged if you cancel before the 7-day trial ends. No commitment, no fees. One free trial per customer.</p>
        </FaqRow>
        <FaqRow q="Where can I use bookshelf+?">
          <p>Anywhere, anytime. Just download the <strong>deseret bookshelf app</strong> from the App Store or Google Play and log in to access your subscription on your phone or tablet.</p>
          <p>Prefer desktop? You can also read and listen at <strong>read.deseretbook.com</strong> on any browser.</p>
        </FaqRow>
        <FaqRow q="Can I cancel anytime?">
          <p>Yes, bookshelf+ is flexible. You can cancel anytime through your account settings at DeseretBook.com.</p>
        </FaqRow>
        <FaqRow q="What happens if I cancel? Will I lose my books?">
          <p>If you cancel, you&rsquo;ll lose access to the full bookshelf+ library. However, any individual books you&rsquo;ve purchased separately (a la carte) will still be accessible through the deseret bookshelf app.</p>
        </FaqRow>
      </div>
      <p className="bsp-terms">View Bookshelf Terms and Conditions</p>
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

function BlogIndex({ go }) {
  const posts = D.featuredContent;
  return (
    <div className="blog">
      <div className="blog-mast">
        <span className="blog-kick">Deseret Book</span>
        <h1 className="blog-h">The Blog</h1>
        <p className="blog-sub">Stories, gift guides, and ideas for a life centered on Christ.</p>
      </div>
      <div className="blog-list">
        {posts.map((c, i) => {
          const p = D.byId(c.pid);
          const src = c.img || (p && p.img[0]);
          return (
            <article className="blog-item" key={i} onClick={() => go("#/blog/" + i)}>
              <span className="blog-thumb">{src ? <img src={thumb(src)} alt="" loading="lazy" decoding="async" /> : null}</span>
              <div className="blog-item-b">
                <span className="ccard-m">{c.date}</span>
                <h2 className="blog-item-t">{c.title}</h2>
                <p className="ccard-x">{c.x}</p>
                <span className="blog-more">Read More</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function BlogPost({ i, go, add }) {
  const c = D.featuredContent[Number(i)];
  if (!c) return <SimplePage title="Post not found" body={["That article isn\u2019t available."]} go={go} />;
  const p = D.byId(c.pid);
  const src = c.img || (p && p.img[0]);
  const rest = D.featuredContent.map((o, k) => ({ o, k })).filter((x) => x.k !== Number(i));
  return (
    <article className="blog">
      <button className="blog-back" onClick={() => go("#/blog")}>← The Blog</button>
      <header className="post-head">
        <span className="ccard-m">{c.date}</span>
        <h1 className="post-h">{c.title}</h1>
      </header>
      {src ? <span className="post-hero"><img src={thumb(src)} alt="" decoding="async" /></span> : null}
      <div className="post-body">
        <p className="post-lede">{c.x}</p>
        <p>This article is a mock stand-in for the Deseret Book blog, included so the prototype stays self-contained.</p>
      </div>
      {p ? (
        <section className="post-prod">
          <h2 className="sect-h">Featured in this post</h2>
          <div className="rail"><ProductCard p={p} onOpen={(id) => go("#/p/" + id)} onAdd={add} /></div>
        </section>
      ) : null}
      <section className="post-more">
        <h2 className="sect-h">More from the blog</h2>
        <div className="blog-list">
          {rest.map(({ o, k }) => (
            <article className="blog-item" key={k} onClick={() => go("#/blog/" + k)}>
              <span className="blog-thumb">{o.img ? <img src={thumb(o.img)} alt="" loading="lazy" decoding="async" /> : null}</span>
              <div className="blog-item-b">
                <span className="ccard-m">{o.date}</span>
                <h3 className="blog-item-t">{o.title}</h3>
                <span className="blog-more">Read More</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

Object.assign(window, { Home, Category, Product, Bag, Wishlist, SimplePage, BookshelfPlus, Stores, BlogIndex, BlogPost });
