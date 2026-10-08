const GV = "#/c/books_gospel-voices";

function Home({ go, add }) {
  const heroMq = "(max-width:639px)";
  const [heroMobile, setHeroMobile] = useState(() => window.matchMedia(heroMq).matches);
  useEffect(() => { const m = window.matchMedia(heroMq); const h = () => setHeroMobile(m.matches); m.addEventListener("change", h); return () => m.removeEventListener("change", h); }, []);
  const [conRef, conDots] = useRailDots();
  const trending = D.trending.map((id) => D.byId(id)).filter(Boolean);
  const fineArt = D.fineArt.map((id) => D.byId(id)).filter(Boolean);
  return (
    <React.Fragment>
      {false ? (
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
            <h1 className="h-title">Remember Messages That Move You</h1>
            <p className="hero-sub">$5 Off Your Purchase of $50+ with Code Conference50</p>
            <button className="btn-gold" onClick={() => go(GV)}>Preorder Now</button>
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
        <React.Fragment>
          <div className="empty"><p>Nothing on this shelf yet. Here are some of our most popular items.</p></div>
          <div className="grid">
            {D.trending.map((x) => D.byId(x)).filter(Boolean).map((p) => <ProductCard key={p.id} p={p} onOpen={(pid) => go("#/p/" + pid)} onAdd={add} />)}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}


const PZ_STYLES = [
  { n: "Large Script Letters", max: 20, img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw311daace/images/LargeScript_Silo.jpg?sw=720&sfrm=jpg&q=80" },
  { n: "Small Script Letters", max: 16, img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw60a9f20c/images/SmallScript_Silo.jpg?sw=720&sfrm=jpg&q=80" },
  { n: "Large Block Letters", max: 20, img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dwe040f233/images/LargeBlock_Silo.jpg?sw=720&sfrm=jpg&q=80" },
  { n: "Small Block Letters", max: 16, img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw746539e2/images/SmallBlock_Silo.jpg?sw=720&sfrm=jpg&q=80" }
];
const pzReady = (z) => !!(z.on && z.style && z.name.trim() && z.name === z.confirm && z.agree);

function StyleExamples({ open, onClose, pick }) {
  const [host, setHost] = useState(null);
  useEffect(() => { const t = document.querySelector(".toast"); setHost(t ? t.parentElement : document.body); }, []);
  useEffect(() => { if (!open) return; const k = (e) => { if (e.key === "Escape") onClose(); }; window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [open]);
  if (!host) return null;
  return ReactDOM.createPortal(
    <div className={"pdlg pz-dlg" + (open ? " on" : "")} role="dialog" aria-modal="true" aria-label="Imprinting letter style examples" aria-hidden={!open} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pdlg-c">
        <button className="pdlg-x" onClick={onClose} aria-label="Close"><Ico name="xmark_circle_fill" size={24} /></button>
        <h2>Imprinting Letter Styles</h2>
        <p>Each imprint is pressed in gold foil on the lower right of the front cover.</p>
        <div className="pz-ex">
          {PZ_STYLES.map((st) => (
            <button key={st.n} className="pz-ex-i" onClick={() => { pick(st.n); onClose(); }}>
              <span className="pz-ex-img"><img src={st.img} alt={st.n + " example"} loading="lazy" /></span>
              <span className="pz-ex-n">{st.n}</span>
            </button>
          ))}
        </div>
        <div className="pz-ft"><button className="pz-btn out" onClick={onClose}>Close</button></div>
      </div>
    </div>, host);
}

function Personalize({ z, set }) {
  const [ex, setEx] = useState(false);
  const st = PZ_STYLES.find((x) => x.n === z.style);
  const max = st ? st.max : 16;
  const mismatch = z.confirm.length > 0 && z.confirm !== z.name;
  const textOk = z.name.trim() && z.name === z.confirm;
  const step = !z.style ? 1 : !textOk ? 2 : 3;
  const upd = (o) => set(Object.assign({}, z, o));
  return (
    <div className={"pz" + (z.on ? " on" : "")}>
      <label className="pz-h">
        <input type="checkbox" checked={z.on} onChange={(e) => upd({ on: e.target.checked })} />
        <span className="pz-box" aria-hidden="true"><Ico name="checkmark_alt" size={16} /></span>
        <span className="pz-ht"><b>Personalize This Product</b><span>Personalizations and imprints may take an additional business day to process.</span></span>
      </label>
      {z.on ? (
        <div className="pz-b">
          <div className={"pz-s" + (step > 1 ? " done" : "")}>
            <div className="pz-sh"><span className="pz-n">{step > 1 ? <Ico name="checkmark_alt" size={16} /> : "1"}</span><span>Choose a letter style</span><button className="pz-link" onClick={() => setEx(true)}>View Style Examples</button></div>
            <div className="pz-opts" role="radiogroup" aria-label="Letter style">
              {PZ_STYLES.map((o) => (
                <button key={o.n} role="radio" aria-checked={z.style === o.n} className={"pz-o" + (z.style === o.n ? " on" : "")} onClick={() => upd({ style: o.n, name: z.name.slice(0, o.max), confirm: z.confirm.slice(0, o.max), agree: false })}>
                  <span className="pz-o-img"><img src={o.img} alt="" loading="lazy" /></span>
                  <span className="pz-o-n">{o.n}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={"pz-s" + (step < 2 ? " dim" : "") + (step > 2 ? " done" : "")}>
            <div className="pz-sh"><span className="pz-n">{step > 2 ? <Ico name="checkmark_alt" size={16} /> : "2"}</span><span>Enter the imprint text</span></div>
            <label className="pz-f"><span className="pz-fl"><span>Name</span><span>{z.name.length}/{max}</span></span>
              <input value={z.name} maxLength={max} disabled={!z.style} placeholder="As it should appear" onChange={(e) => upd({ name: e.target.value, agree: false })} /></label>
            <label className="pz-f"><span className="pz-fl"><span>Confirm Name</span><span>{z.confirm.length}/{max}</span></span>
              <input className={mismatch ? "err" : ""} value={z.confirm} maxLength={max} disabled={!z.style} placeholder="Type it once more" onChange={(e) => upd({ confirm: e.target.value, agree: false })} onPaste={(e) => e.preventDefault()} aria-invalid={mismatch} /></label>
            {mismatch ? <span className="pz-err"><Ico name="exclamationmark_circle" size={16} />The names don&rsquo;t match yet.</span> : null}
          </div>
          <div className={"pz-s" + (step < 3 ? " dim" : "") + (pzReady(z) ? " done" : "")}>
            <div className="pz-sh"><span className="pz-n">{pzReady(z) ? <Ico name="checkmark_alt" size={16} /> : "3"}</span><span>Review and confirm</span></div>
            {step === 3 ? (
              <div className="pz-rev">
                <div className="pz-rev-t">
                  <span className="pz-rev-l">Your imprint</span>
                  <span className={"pz-rev-v" + (/Script/.test(z.style) ? " script" : " block")}>{z.name}</span>
                  <span className="pz-rev-s">{z.style}</span>
                </div>
                <label className="pz-ag">
                  <input type="checkbox" checked={z.agree} onChange={(e) => upd({ agree: e.target.checked })} />
                  <span className="pz-box" aria-hidden="true"><Ico name="checkmark_alt" size={16} /></span>
                  <span>I&rsquo;ve checked the spelling. Imprinted items are non-returnable.</span>
                </label>
              </div>
            ) : <p className="pz-hint">Finish the steps above to review your imprint.</p>}
          </div>
        </div>
      ) : null}
      <StyleExamples open={ex} onClose={() => setEx(false)} pick={(n) => upd({ style: n, agree: false })} />
    </div>
  );
}

function FaqBlock({ a }) {
  return a.map((x, i) => Array.isArray(x) ? <ul key={i}>{x.map((li, k) => { const j = li.indexOf(": "); return <li key={k}>{j > 0 ? <React.Fragment><b>{li.slice(0, j)}:</b>{li.slice(j + 1)}</React.Fragment> : li}</li>; })}</ul> : <p key={i}>{x}</p>);
}

function PdpTabs({ p, go, shipMin }) {
  const ex = D.extra(p.id);
  const desc = ex && ex.d ? ex.d : [p.d];
  const spec = [["Item no.", p.id]].concat(p.by && p.by !== "Deseret Book" ? [["Author", p.by]] : [["Brand", p.by || "Deseret Book"]]).concat(p.fmt ? [["Format", p.fmt]] : []).concat(p.size ? [["Size", p.size]] : []).concat(p.colors ? [["Colors", p.colors.map((c) => c.n).join(", ")]] : []).concat(p.personalize ? [["Personalization", "Available"]] : []).concat(p.online ? [["Availability", "Online exclusive"]] : []);
  const extraSpec = ex && ex.spec ? ex.spec : [];
  const rows = spec.map((r) => extraSpec.find((x) => x[0] === r[0]) || r).concat(extraSpec.filter((r) => !spec.some((x) => x[0] === r[0])));
  const hasDesc = desc.some(Boolean);
  const tabs = (hasDesc ? [["desc", "Description"]] : []).concat([["details", "Details"]]).concat(ex && ex.faq ? [["faq", "FAQ"]] : []).concat([["ship", "Shipping & Returns"]]);
  const [t, setT] = useState(hasDesc ? "desc" : "details");
  useEffect(() => { setT(hasDesc ? "desc" : "details"); }, [p.id]);
  const onKey = (e) => { const i = tabs.findIndex((x) => x[0] === t); const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null; if (n == null) return; e.preventDefault(); const k = tabs[(n + tabs.length) % tabs.length][0]; setT(k); const el = e.currentTarget.querySelectorAll('[role="tab"]')[tabs.findIndex((x) => x[0] === k)]; if (el) el.focus(); };
  const DSTabs = window.DeseretBookDesignSystem_609afa.Tabs;
  return (
    <div className="pdp-acc pdt">
      <DSTabs className="pdt-bar" role="tablist" aria-label="Product information" onKeyDown={onKey} tabs={tabs.map(([k, l]) => ({ value: k, label: l }))} value={t} onChange={setT} />
      <div className="pdt-p" role="tabpanel" id={"pdp-" + t} aria-label={(tabs.find((x) => x[0] === t) || [])[1]}>
        {t === "desc" ? (
          <React.Fragment>
            {p.cat.indexOf("books") === 0 ? <div className="pdt-bs"><img className="pdt-bs-mark" src="assets/bookshelfplus-symbol.svg" alt="" /><span>Read for free with bookshelf+. Unlimited access to 4,000+ audiobooks and eBooks in the Deseret Bookshelf app.</span><button className="btn-out" onClick={() => go(p.cat.indexOf("books_fiction") === 0 ? "#/bookshelf-plus/fiction" : "#/bookshelf-plus")}>Learn more</button></div> : null}
            {desc.map((x, i) => <p key={i}>{x}</p>)}
            {ex && ex.note ? <p className="pdt-note">{ex.note}</p> : null}
          </React.Fragment>
        ) : null}
        {t === "details" ? <dl className="pdt-dl">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl> : null}
        {t === "faq" ? <div className="pdt-faq">{ex.faq.map((f) => <Accordion key={f.q} title={f.q}><FaqBlock a={f.a} /></Accordion>)}</div> : null}
        {t === "ship" ? (
          <React.Fragment>
            <p>Free shipping on orders ${shipMin || 49}+ for standard domestic US. Surcharges still apply for large items.</p>
            <p>Returns are accepted within 30 days. Imprinted items are non-returnable.</p>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}

function Product({ id, go, add, fav, toggleFav, shipMin }) {
  const p0 = D.byId(id);
  const p = p0 && p0.parent ? D.byId(p0.parent) : p0;
  const fmt0 = p && p.formats ? (p0.parent ? p0.id : p.formats[0]) : null;
  const [fmtSel, setFmtSel] = useState(fmt0);
  const v = p && p.formats ? D.byId(fmtSel) || D.byId(p.formats[0]) : null;
  const [color, setColor] = useState(p && p.colors ? p.colors[0].n : null);
  const [qty, setQty] = useState(1);
  const PZ0 = { on: false, style: null, name: "", confirm: "", agree: false };
  const [pz, setPz] = useState(PZ0);
  const [galRef, gal] = useRailDots();
  const thRef = useRef(null);
  const tsx = useRef(null);
  const [thEdge, setThEdge] = useState({ l: false, r: false });
  const thCheck = () => { const el = thRef.current; if (!el) return; const l = el.scrollLeft > 2, r = el.scrollLeft + el.clientWidth < el.scrollWidth - 2; setThEdge((s) => (s.l === l && s.r === r ? s : { l, r })); };
  useEffect(() => { const el = thRef.current; if (!el) return; thCheck(); const ro = new ResizeObserver(thCheck); ro.observe(el); return () => ro.disconnect(); });
  useEffect(() => { const el = thRef.current; if (!el) return; const b = el.children[gal.i]; if (!b) return; const pad = 24; if (b.offsetLeft - pad < el.scrollLeft) el.scrollTo({ left: b.offsetLeft - pad, behavior: "smooth" }); else if (b.offsetLeft + b.offsetWidth + pad > el.scrollLeft + el.clientWidth) el.scrollTo({ left: b.offsetLeft + b.offsetWidth + pad - el.clientWidth, behavior: "smooth" }); }, [gal.i]);
  const thPage = (d) => { const el = thRef.current; if (el) el.scrollBy({ left: d * (el.clientWidth - 72), behavior: "smooth" }); };
  useEffect(() => { window.scrollTo(0, 0); setQty(1); setFmtSel(fmt0); setPz(PZ0); setColor(p && p.colors ? p.colors[0].n : null); }, [id]);
  if (!p) return <div className="empty"><p>That product isn&rsquo;t in this prototype.</p><button className="btn-out" onClick={() => go("#/")}>Back to home</button></div>;
  const chosen = p.colors ? p.colors.find((c) => c.n === color) : null;
  const images = (chosen ? (chosen.gallery || (chosen.img ? [chosen.img] : [])) : []).concat(p.img);
  const related = (() => {
    const seen = {}, out = [];
    const push = (x) => { if (out.length < 6 && x.id !== p.id && !seen[x.id]) { seen[x.id] = 1; out.push(x); } };
    const parts = p.cat.split("_");
    for (let n = parts.length; n > 0 && out.length < 6; n--) { const pre = parts.slice(0, n).join("_"); D.products.forEach((x) => { if (x.cat === pre || x.cat.indexOf(pre + "_") === 0) push(x); }); }
    D.trending.map((t) => D.byId(t)).filter(Boolean).forEach(push);
    D.products.forEach(push);
    return out;
  })();
  const isFav = fav.indexOf(p.id) > -1;
  const goImg = (i) => { const el = galRef.current; if (!el) return; const n = images.length; const k = ((i % n) + n) % n; const s = el.children[k]; const left = s ? s.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft : k * el.clientWidth; el.scrollTo({ left: Math.round(left), behavior: "smooth" }); };
  return (
    <React.Fragment>
      <div className="skipback"><button onClick={() => go("#/c/" + p.cat)} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}><Ico name="arrow-left" size={14} /> {D.catName(p.cat)}</button></div>
      <div className="pdp-wrap">
      <div className="pdp-gal-col">
      <div className="pdp-gal">
        <div className="track" ref={galRef} onTouchStart={(e) => { tsx.current = e.touches[0].clientX; }} onTouchEnd={(e) => { if (tsx.current == null || images.length < 2) return; const dx = e.changedTouches[0].clientX - tsx.current; tsx.current = null; if (dx < -40 && gal.i >= images.length - 1) goImg(0); else if (dx > 40 && gal.i === 0) goImg(images.length - 1); }}>
          {images.map((src, i) => <div key={i}><img src={thumb(src)} alt={p.t + " image " + (i + 1)}  /></div>)}
        </div>
        <Dots i={gal.i} n={gal.n} />
        {images.length > 1 ? (
          <React.Fragment>
            <button className="gal-arr prev" onClick={() => goImg(gal.i - 1)} aria-label="Previous image"><Ico name="chevron_left" size={20} /></button>
            <button className="gal-arr next" onClick={() => goImg(gal.i + 1)} aria-label="Next image"><Ico name="chevron_right" size={20} /></button>
          </React.Fragment>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className={"gal-tw" + (thEdge.l ? " l" : "") + (thEdge.r ? " r" : "")}>
          <div className="gal-thumbs" ref={thRef} onScroll={thCheck} role="tablist" aria-label="Product images">
            {images.map((src, i) => <button key={i} role="tab" aria-selected={gal.i === i} aria-label={"Image " + (i + 1)} className={"gal-th" + (gal.i === i ? " on" : "")} onClick={() => goImg(i)}><img src={thumb(src)} alt="" /></button>)}
          </div>
          <button className="gal-ta prev" onClick={() => thPage(-1)} aria-label="Scroll thumbnails left" tabIndex={thEdge.l ? 0 : -1}><Ico name="chevron_left" size={16} /></button>
          <button className="gal-ta next" onClick={() => thPage(1)} aria-label="Scroll thumbnails right" tabIndex={thEdge.r ? 0 : -1}><Ico name="chevron_right" size={16} /></button>
        </div>
      ) : null}
      </div>
      <div className="pdp">
        <h1>{p.t}</h1>
        <div className={"pdp-row" + (p.rc ? "" : " no-rate")}>
          {p.rc ? <div className="rate"><Stars r={p.r} size={13} /><span className="rate-n">{p.r}</span><span className="rate-c">{p.rc + " ratings"}</span></div> : null}
          <div className="meta">
            <span>{"no. " + p.id}</span>{p.size ? <span>{p.size}</span> : null}<span>{v ? v.fmt : p.fmt}</span>{p.online ? <span>Online exclusive</span> : null}
          </div>
        </div>
        <div className="price">{v ? money(v.price) : priceLabel(p)}</div>
        {v ? (
          <div className="fmt">
            <span className="lab">Format &mdash; {v.fmt}</span>
            <div className="fmt-opts" role="radiogroup" aria-label="Format">
              {p.formats.map((fid) => { const f = D.byId(fid); const on = f.id === v.id; return (
                <button key={f.id} role="radio" aria-checked={on} className={"fmt-o" + (on ? " on" : "")} onClick={() => setFmtSel(f.id)}><span className="fmt-n">{f.fmt}</span><span className="fmt-p">{money(f.price)}</span></button>
              ); })}
            </div>
            {v.digital ? <p className="fmt-note">Delivered instantly to the Deseret Bookshelf app. Not compatible with Kindle or other e-readers. Digital items can&rsquo;t be gifted, returned, or refunded.</p> : null}
          </div>
        ) : null}
        {p.colors ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            <span className="lab">Color &mdash; {color}</span>
            <div className="swatches">
              {p.colors.map((c) => (
                <button key={c.n} className={"sw" + (c.n === color ? " on" : "")} style={{ background: c.sw }} onClick={() => { setColor(c.n); if (galRef.current) galRef.current.scrollTo({ left: 0, behavior: "smooth" }); }} aria-label={c.n} aria-pressed={c.n === color} />
              ))}
            </div>
          </div>
        ) : null}
        {p.personalize ? <Personalize z={pz} set={setPz} /> : null}
        {pz.on && !pzReady(pz) ? <p className="pz-need">Please finish adding an imprint style and a name before adding this item to your bag.</p> : null}
        <div className="cta" style={{ marginTop: 8 }}>
          <div className="qty" role="group" aria-label="Quantity">
            <button onClick={() => setQty(Math.max(1, qty - 1))} disabled={qty === 1} aria-label="Decrease quantity"><Ico name="minus" size={16} /></button>
            <span aria-live="polite">{qty}</span>
            <button onClick={() => setQty(Math.min(20, qty + 1))} aria-label="Increase quantity"><Ico name="plus" size={16} /></button>
          </div>
          <button className="btn-gold" disabled={pz.on && !pzReady(pz)} onClick={() => { if (v) { add(v, qty, v.fmt, null); return; } add(p, qty, color, pz.on && pzReady(pz) ? { style: pz.style, text: pz.name } : null); if (pz.on) setPz(PZ0); }}>Add to Bag</button>
          <DS.IconButton icon="heart" label="Add to wishlist" variant="outline" size="lg" filled={isFav} aria-pressed={isFav} onClick={() => toggleFav(p.id)} style={{ flex: "0 0 48px", ...(isFav ? { color: "var(--db-red-300)" } : null) }} />
        </div>
      </div>
      <PdpTabs p={p} go={go} shipMin={shipMin} />
      </div>
      {related.length ? (
        <section className="sect sect-yml">
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
            <button className="th" onClick={() => go("#/p/" + x.p.id)}><img src={thumb(colorImg(x.p, x.l.color))} alt="" loading="lazy" decoding="async" /></button>
            <div className="info">
              <button className="t" style={{ textAlign: "left" }} onClick={() => go("#/p/" + x.p.id)}>{x.p.t}</button>
              {x.l.color ? <span className="c">{x.l.color}</span> : null}{x.l.imprint ? <span className="c">{"Imprint: \u201c" + x.l.imprint.text + "\u201d, " + x.l.imprint.style}</span> : null}
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
        <button className="btn-gold" style={{ height: 48, padding: "0 24px", fontSize: 16, marginTop: 8 }} onClick={() => setPlaced(true)}>CHECKOUT</button>
        <button className="btn-out" style={{ alignSelf: "center" }} onClick={() => go("#/")}>Continue shopping</button>
      </div>
    </div>
  );
}

function Wishlist({ fav, go, add, toggleFav, user, onSignIn }) {
  if (!user) return (
    <div className="empty">
      <Ico name="heart" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Sign In to See Your Wishlist</h1>
      <p>Your wishlist is saved to your account. Sign in to view it, add saved items to your bag, or remove them.</p>
      <DS.Button variant="secondary" onClick={onSignIn}>Sign in</DS.Button>
    </div>
  );
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
      <div className="plp-h"><h1>Wishlist</h1><span className="wl-n">{items.length + (items.length === 1 ? " item" : " items")}</span></div>
      <div className="wl-list">{items.map((p) => (
        <div className="line" key={p.id}>
          <button className="th" onClick={() => go("#/p/" + p.id)} aria-label={p.t}><img src={thumb(p.img[0])} alt="" loading="lazy" decoding="async" /></button>
          <div className="info">
            <button className="t" style={{ textAlign: "left" }} onClick={() => go("#/p/" + p.id)}>{p.t}</button>
            <span className="c">{priceLabel(p)}</span>
            <div className="wl-acts"><DS.Button size="sm" onClick={() => add(p)}>Add to bag</DS.Button><button className="rm" onClick={() => toggleFav(p.id)}>Remove</button></div>
          </div>
        </div>
      ))}</div>
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

Object.assign(window, { Home, Category, Product, Bag, Wishlist, SimplePage, Stores, BlogIndex, BlogPost });
