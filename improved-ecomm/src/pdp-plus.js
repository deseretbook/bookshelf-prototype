/* PDP additions from the 2026 PDP audit: availability states, sold-out variants, price states,
   size masters (tiles or dropdown), static format label, richer details, promotion slot, series sets. */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = React;
  const DSX = () => window.DeseretBookDesignSystem_609afa;
  const Ico = (p) => h(window.DBIco, p);
  const money = (n) => "$" + Number(n).toFixed(2);
  const priceText = (n) => (n === 0 ? "Free" : money(n));
  const img = (src) => (typeof thumb === "function" ? thumb(src) : src);
  const byName = (s) => { const m = /^([^,]+),\s*(.+)$/.exec(s || ""); return m ? m[2] + " " + m[1] : s || ""; };

  const SERIES = {
    "the-lancaster-family-sarah-eden": { t: "The Lancaster Family Series", by: "Eden, Sarah M.", books: ["P5068623", "P5043081", "P5183500", "P5197705", "P5258117"],
      d: "Sarah M. Eden\u2019s Regency romance series follows the Lancaster siblings through marriages of convenience, London seasons, and the people who see them clearly. Read them in order for the full family story." }
  };
  const seriesOf = (id) => Object.keys(SERIES).find((k) => SERIES[k].books.indexOf(id) > -1);

  function augment(D) {
    if (D.__pdpx) return;
    D.__pdpx = true;
    const orig = D.byId;
    const EXV = {};
    const get = (id) => orig(id);
    D.byId = (id) => orig(id) || EXV[id];
    const mk = (b, o) => { const v = Object.assign({}, b, o); delete v.formats; delete v.sizeOpts; delete v.priceHigh; EXV[v.id] = v; return v; };

    // Series sets: each book becomes a format master (Paperback, eBook, Audiobook).
    Object.keys(SERIES).forEach((slug) => SERIES[slug].books.forEach((id, i) => {
      const b = get(id); if (!b) return;
      const pb = b.priceHigh || b.price, eb = b.price;
      b.formats = [mk(b, { id: id + "-PB", fmt: "Paperback", price: pb, parent: id }), mk(b, { id: id + "-EB", fmt: "eBook", price: eb, digital: true, parent: id }), mk(b, { id: id + "-AB", fmt: "Audiobook (Digital)", price: +(pb + 2).toFixed(2), digital: true, parent: id })].map((v) => v.id);
      b.seriesSlug = slug; b.seriesN = i + 1;
    }));
    if (EXV["P5197705-PB"]) EXV["P5197705-PB"].soldOut = true;

    // Free digital format (Church curriculum style).
    const pmg = get("P6053751");
    if (pmg) pmg.formats = [mk(pmg, { id: "P6053751-PB", fmt: "Paperback", price: 6.35, parent: pmg.id }), mk(pmg, { id: "P6053751-HC", fmt: "Hardcover", price: 10.2, parent: pmg.id }), mk(pmg, { id: "P6053751-EB", fmt: "eBook", price: 0, digital: true, parent: pmg.id })].map((v) => v.id);

    // Size masters.
    const APPAREL = ["XSmall", "Small", "Medium", "Large", "XLarge", "1XL", "2XL", "3XL"];
    const sizeMaster = (id, names, label, per) => {
      const b = get(id); if (!b) return;
      b.sizeOpts = names.map((n, i) => mk(b, Object.assign({ id: id + "-S" + i, sz: n, parent: id }, per ? per(n, i, b) : null)).id);
      b.sizeLabel = label || "Size";
    };
    sizeMaster("P6073269", APPAREL, "Size", (n) => (n === "XSmall" || n === "3XL" ? { soldOut: true } : null));
    sizeMaster("PR00002075", APPAREL, "Size", (n) => (n === "XSmall" || n === "Small" ? { price: 17.5, was: 54.99, clearance: true } : null));
    const jane = get("PR00002075"); if (jane) { jane.price = 17.5; jane.priceHigh = 54.99; }
    const shoes = []; for (let s = 7; s <= 13; s += 0.5) shoes.push(String(s));
    sizeMaster("PR00001589", shoes, "Shoe size", (n) => (n === "7" || n === "13" ? { soldOut: true } : null));
    const pants = []; for (let w = 28; w <= 42; w += 2) [30, 32, 34].forEach((l) => pants.push(w + "x" + l));
    sizeMaster("P6058665", pants, "Waist x inseam");
    sizeMaster("P6000078", ["6 inch", "8 inch"], "Size", (n, i, b) => (i ? { price: +(b.price * 1.4).toFixed(2) } : null));
    const cc = get("P6000078"); if (cc) cc.priceHigh = +(cc.price * 1.4).toFixed(2);

    // Availability.
    const set = (id, o) => { const b = get(id); if (b) Object.assign(b, o); };
    // Pre-order: any product (or format/size variant) with a `release` date ("YYYY-MM-DD") is a pre-order.
    D.products.forEach((p) => { if (p.release) p.avail = "pre"; });
    Object.keys(EXV).forEach((k) => { const v = EXV[k]; if (v.release) v.avail = "pre"; });
    set("P3753740", { avail: "back", availNote: "Ships by November 18, 2026." });
    set("P6000078", { avail: "special", availNote: "Made to order. Ships in 2\u20133 weeks." });
    set("PR00001434", { avail: "out" });

    // Sold-out color.
    const quad = get("P6074927");
    if (quad && quad.colors) { const c = quad.colors.find((x) => x.n === "Dusty Rose"); if (c) c.soldOut = true; }

    // Price states.
    const love = get("6070661"); if (love) Object.assign(love, { was: 229, clearance: true });
    const marble = get("P3753740"); if (marble) marble.was = +(marble.price / 0.8).toFixed(2);

    // Details.
    D.products.forEach((p) => {
      const det = [];
      const m = /\(([^()]+?),?\s+Book\s+(\d+)\)/.exec(p.full || "");
      if (m) { det.push(["Series", m[1]]); det.push(["Series number", m[2]]); }
      if (p.cat.indexOf("books") === 0) {
        const pg = /(\d{2,4}) pages/.exec(p.d || ""); if (pg) det.push(["Pages", pg[1]]);
        if (p.by === "Eden, Sarah M." || /Shadow Mountain/.test(p.d || "")) det.push(["Publisher", "Shadow Mountain"]);
        det.push(["Language", "English"]);
      }
      if (p.cat === "home_fine-art" || (D.fineArt || []).indexOf(p.id) > -1) {
        if (p.by && p.by !== "Deseret Book") det.push(["Artist", byName(p.by)]);
        if (p.fmt) det.push(["Material", p.fmt]);
        const s = /(\d+)\D+(\d+)/.exec(p.size || "");
        if (s) { det.push(["Image size", s[1] + "\u2033 x " + s[2] + "\u2033"]); if (/Framed/.test(p.fmt || "")) det.push(["Framed size", (+s[1] + 3) + "\u2033 x " + (+s[2] + 3) + "\u2033"]); }
      }
      if (det.length) p.det = det;
    });
  }

  const isAvail = (x) => x && !x.soldOut;
  const firstAvail = (ids, D) => { const D_ = D || window.DB_DATA; const f = (ids || []).find((id) => isAvail(D_.byId(id))); return f || (ids ? ids[0] : null); };
  const hasDigital = (p) => !!(p.formats && p.formats.some((id) => { const v = window.DB_DATA.byId(id); return v && v.digital; }));
  const availOf = (p, item) => (item && item.soldOut ? "out" : (item && item.avail) || p.avail || "in");
  const ctaLabel = (state) => ({ pre: "Pre-order", back: "Back order", special: "Special order" })[state] || "Add to Cart";

  // Pre-order helpers, shared by the PLP card, PDP, bag, checkout and orders.
  const releaseOf = (p, item) => (item && item.release) || (p && p.release) || null;
  const isPre = (p, item) => !!releaseOf(p, item);
  const fmtRelease = (iso) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ""); return m ? new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : iso; };
  const releaseText = (p, item) => { const r = releaseOf(p, item); return r ? "Releases " + fmtRelease(r) : null; };
  function PreBadge({ style }) {
    const B = DSX() && DSX().Badge;
    return B ? h(B, { tone: "accent", className: "pre-badge", style }, "Pre-order") : h("span", { className: "pre-badge" }, "Pre-order");
  }
  function PreorderInfo({ p, item }) {
    if (!isPre(p, item)) return null;
    return h("div", { className: "pre-pdp", role: "status" },
      h(PreBadge, null),
      h("p", { className: "pre-pdp-d" }, releaseText(p, item)),
      h("p", { className: "pre-pdp-n" }, "You won’t be charged until it ships."));
  }
  // Short line for bag and checkout rows.
  const preLine = (p, item) => (isPre(p, item) ? "Pre-order. " + releaseText(p, item) + "." : null);

  function Price({ p, item, imprint }) {
    const x = item || p;
    const ranged = !item && p.priceHigh && p.priceHigh !== p.price;
    const was = x.was;
    return h("div", { className: "pdpx-price" },
      h(DSX().Price, { className: "pdpx-amt", size: "lg", amount: ranged ? p.price : x.price, high: ranged ? p.priceHigh : undefined, was: ranged ? undefined : was }),
      imprint ? h("span", { className: "pdpx-imp" }, "+ " + money(window.IMPRINT_FEE || 12.99) + " imprint") : null,
      x.clearance && !ranged ? h("p", { className: "pdpx-clr" }, "Clearance. Final sale, so this item can\u2019t be returned.") : null,
      ranged && p.sizeOpts ? h("p", { className: "pdpx-clr" }, "Price depends on the size you choose.") : null);
  }

  function SizeSelect({ p, value, onChange, av }) {
    const D = window.DB_DATA;
    const opts = p.sizeOpts.map((id) => D.byId(id));
    const label = p.sizeLabel || "Size";
    const wrap = useRef(null);
    useEffect(() => {
      if (!wrap.current) return;
      wrap.current.querySelectorAll("option").forEach((o) => { const v = D.byId(o.value); o.disabled = false; });
    });
    const cur = value ? D.byId(value) : null;
    if (opts.length <= 4) {
      return h("div", { className: "fmt" },
        h("div", { className: "fmt-hd" }, h("span", { className: "lab" }, label + " \u2014 ", cur ? cur.sz : "Select"), av),
        h("div", { className: "fmt-opts", role: "radiogroup", "aria-label": label }, opts.map((o) => {
          const on = o.id === value;
          return h("button", { key: o.id, type: "button", role: "radio", "aria-checked": on, className: "fmt-o" + (on ? " on" : "") + (o.soldOut ? " out" : ""), onClick: () => onChange(o.id) },
            h("span", { className: "fmt-n" }, o.sz), h("span", { className: "fmt-p" }, o.soldOut ? "Sold out" : priceText(o.price)));
        })));
    }
    const priced = opts.some((o) => o.price !== opts[0].price);
    return h("div", { className: "fmt pdpx-sel", ref: wrap },
      h("div", { className: "fmt-hd" }, h("label", { className: "lab", htmlFor: "pdpx-sz-" + p.id }, "Select " + label.toLowerCase()), av),
      h(DSX().Select, { id: "pdpx-sz-" + p.id, value: value || "", onChange: (e) => onChange(e.target.value || null),
        options: [{ value: "", label: "Select a " + label.toLowerCase() }].concat(opts.map((o) => ({ value: o.id, label: o.sz + (o.soldOut ? " \u2013 Sold out" : priced ? " \u2013 " + priceText(o.price) : "") }))) }));
  }

  function StaticFormat({ p, av }) {
    if (p.formats || p.sizeOpts || p.sizes || p.colors || !p.fmt) return null;
    return h("div", { className: "fmt" }, h("div", { className: "fmt-hd" }, h("span", { className: "lab" }, "Format \u2014 ", p.fmt), av));
  }

  const AV = {
    in: ["check_circle", "In stock", "ok"],
    pre: ["event", "Pre-order", "info"],
    back: ["schedule", "Back order", "warn"],
    special: ["local_shipping", "Special order", "info"],
    out: ["block", "This item is currently not available.", "out"],
    select: ["info", null, "info"]
  };
  function Avail({ state, note, selectLabel, digital }) {
    if (digital && state === "in") return null;
    if (state === "pre") return null; // PreorderInfo (badge, release date, charge note) sits under the price instead.
    const a = AV[state] || AV.in;
    const text = state === "select" ? "Select a " + (selectLabel || "size").toLowerCase() + " for availability" : state === "out" ? "Not available" : a[1];
    return h(React.Fragment, null,
      h("span", { className: "pdpx-av " + a[2], role: "status" }, " \u2014 " + text),
      note && state !== "out" && state !== "select" ? h("span", { className: "pdpx-av-note" }, note) : null);
  }

  function Notify({ p }) {
    const { Input, Button } = DSX();
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");
    const [done, setDone] = useState(false);
    useEffect(() => { setDone(false); setEmail(""); setErr(""); }, [p.id]);
    if (done) return h("p", { className: "pdpx-ntf-ok", role: "status" }, Ico({ name: "check_circle", size: 16 }), "We\u2019ll email " + email + " when it\u2019s back in stock.");
    const submit = (e) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) { setErr("Enter a valid email address."); return; } setErr(""); setDone(true); };
    return h("form", { className: "pdpx-ntf", onSubmit: submit, noValidate: true },
      h("p", { className: "pdpx-ntf-p" }, "Get an email when this item is back in stock."),
      h("div", { className: "pdpx-ntf-r" },
        h(Input, { label: "Email address", type: "email", value: email, onChange: (e) => setEmail(e.target.value), error: err || undefined, style: { flex: 1 } }),
        h(Button, { type: "submit", size: "md" }, "Notify me")));
  }

  function promoFor(p) {
    if (p.cat === "home_fine-art" || /^art/.test(p.cat)) return "Get 20% off art. The discount is applied in your cart.";
    if (p.by === "Eden, Sarah M.") return "Buy one, get one 50% off Sarah M. Eden books.";
    if (/scripture-essentials|simulated-leather/.test(p.cat)) return "Save up to 20% with everyday bulk discounts.";
    return null;
  }
  function Promo({ p }) {
    const t = promoFor(p);
    return t ? h("p", { className: "pdpx-promo" }, Ico({ name: "sell", size: 16 }), t) : null;
  }

  function SeriesLink({ p, go }) {
    const slug = p.seriesSlug || seriesOf(p.id);
    if (!slug) return null;
    const s = SERIES[slug];
    return h("p", { className: "pdpx-ser" }, "Book " + (p.seriesN || s.books.indexOf(p.id) + 1) + " of " + s.t.replace(/ Series$/, "") + ". ",
      h("a", { href: "#/series/" + slug, onClick: (e) => { e.preventDefault(); go("#/series/" + slug); } }, "Shop the series"));
  }

  const EDITION = { P6074927: ["2013 Edition"] };
  function metaBits(p, go) {
    const out = [];
    const ser = (p.det || []).find((r) => r[0] === "Series"), num = (p.det || []).find((r) => r[0] === "Series number");
    if (ser) {
      const label = "Book " + (num ? num[1] : "") + " of " + ser[1];
      const slug = p.seriesSlug || seriesOf(p.id);
      out.push(slug ? h("span", { key: "ser" }, h("a", { className: "pdpx-ml", href: "#/series/" + slug, onClick: (e) => { e.preventDefault(); go("#/series/" + slug); } }, label)) : h("span", { key: "ser" }, label));
    }
    (EDITION[p.id] || p.subtitle || []).concat(p.keyDet || []).filter((t) => t !== p.size).forEach((t, i) => out.push(h("span", { key: "ed" + i }, t)));
    return out;
  }

  function SeriesRow({ b, n, sel, setSel, add, go }) {
    const D = window.DB_DATA;
    const { Button } = DSX();
    const v = D.byId(sel) || D.byId(b.formats[0]);
    const st = availOf(b, v);
    return h("li", { className: "ser-row" },
      h("button", { className: "ser-cv", onClick: () => go("#/p/" + b.id), "aria-label": b.t }, h("img", { src: img(b.img[0]), alt: "", loading: "lazy" })),
      h("div", { className: "ser-i" },
        h("span", { className: "ser-n" }, "BOOK " + n),
        h("button", { className: "ser-t", onClick: () => go("#/p/" + b.id) }, b.t),
        b.rc ? h("div", { className: "ser-r" }, window.DBStars ? h(window.DBStars, { r: b.r, size: "sm" }) : null, h("span", null, b.r + " (" + b.rc + ")")) : null,
        h("div", { className: "fmt-hd" }, h("span", { className: "lab" }, "Format \u2014 ", v.fmt), h(Avail, { state: st, note: v.availNote || b.availNote, digital: !!v.digital })),
        h("div", { className: "fmt-opts", role: "radiogroup", "aria-label": "Format for " + b.t }, b.formats.map((id) => {
          const f = D.byId(id), on = f.id === v.id;
          return h("button", { key: id, type: "button", role: "radio", "aria-checked": on, className: "fmt-o" + (on ? " on" : "") + (f.soldOut ? " out" : ""), onClick: () => setSel(id) },
            h("span", { className: "fmt-n" }, f.fmt), h("span", { className: "fmt-p" }, f.soldOut ? "Sold out" : priceText(f.price)));
        }))),
      h("div", { className: "ser-buy" },
        h("span", { className: "ser-p" }, priceText(v.price)),
        h(Button, { size: "md", variant: "secondary", disabled: st === "out", onClick: () => add(v, 1, v.fmt, null) }, ctaLabel(st))));
  }

  function SeriesPage({ slug, go, add }) {
    const D = window.DB_DATA;
    const s = SERIES[slug];
    const books = s ? s.books.map((id) => D.byId(id)).filter(Boolean) : [];
    const [sel, setSel] = useState(() => Object.fromEntries(books.map((b) => [b.id, firstAvail(b.formats)])));
    useEffect(() => { window.scrollTo(0, 0); }, [slug]);
    if (!s) return h(DSX().EmptyState, null, "That series isn\u2019t in this prototype.");
    const { Button } = DSX();
    const picks = books.map((b) => D.byId(sel[b.id])).filter((v) => v && !v.soldOut);
    const total = picks.reduce((t, v) => t + v.price, 0);
    return h("div", { className: "ser" },
      h("div", { className: "skipback" }, h("button", { onClick: () => go("#/c/books_fiction_romance"), style: { display: "flex", alignItems: "center", gap: 6, fontSize: 12 } }, Ico({ name: "arrow-left", size: 14 }), " Romance")),
      h("header", { className: "ser-h" },
        h("span", { className: "ser-eb" }, "BOOK SERIES"),
        h("h1", null, s.t),
        h("p", { className: "ser-by" }, "By " + byName(s.by) + " \u00b7 " + books.length + " books"),
        h("p", { className: "ser-d" }, s.d),
        h(Promo, { p: books[0] })),
      h("section", { className: "ser-ord", "aria-labelledby": "ser-ord-h" },
        h("h2", { className: "ser-lab", id: "ser-ord-h" }, "Reading Order"),
        h("ol", null, books.map((b) => h("li", { key: b.id }, h("a", { href: "#/p/" + b.id, onClick: (e) => { e.preventDefault(); go("#/p/" + b.id); } }, b.t))))),
      h("section", { "aria-labelledby": "ser-list-h" },
        h("h2", { className: "ser-lab", id: "ser-list-h" }, "This set contains " + books.length + " books"),
        h("ol", { className: "ser-list" }, books.map((b, i) => h(SeriesRow, { key: b.id, b, n: i + 1, sel: sel[b.id], setSel: (id) => setSel((x) => Object.assign({}, x, { [b.id]: id })), add, go })))),
      h("div", { className: "ser-all" },
        h("div", null, h("strong", null, "All " + picks.length + " books"), h("span", null, " in your selected formats \u00b7 " + money(total))),
        h(Button, { size: "lg", onClick: () => picks.forEach((v) => add(v, 1, v.fmt, null)) }, "Add all to cart")));
  }

  // Fills its box with the product, trimming white or transparent margins detected by book-crop.js.
  function FillImg({ src, alt }) {
    const crop = window.useBookCrop ? window.useBookCrop(src, true) : null;
    const box = useRef(null);
    const [nat, setNat] = useState(null);
    const [dim, setDim] = useState(null);
    useEffect(() => { const el = box.current; if (!el) return; const m = () => setDim({ w: el.clientWidth, h: el.clientHeight }); m(); const ro = new ResizeObserver(m); ro.observe(el); return () => ro.disconnect(); }, []);
    let st = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
    if (crop && nat && dim && dim.w && dim.h) {
      const cw = crop.w * nat.w, ch = crop.h * nat.h, s = Math.max(dim.w / cw, dim.h / ch);
      st = { position: "absolute", maxWidth: "none", maxHeight: "none", width: nat.w * s, height: nat.h * s, left: (dim.w - cw * s) / 2 - crop.x * nat.w * s, top: (dim.h - ch * s) / 2 - crop.y * nat.h * s };
    }
    return h("span", { ref: box, className: "fill-img" }, h("img", { src, alt: alt || "", loading: "lazy", decoding: "async", style: st, onLoad: (e) => setNat({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight }) }));
  }

  // Bag line image, the ProductCard's image specs: the product trimmed of its white or transparent margins, kept at its own
  // shape inside the container, filling its width (or height) and sitting bottom-left, with the DS small radius, no ground or border.
  function CardImg({ src, alt }) {
    const crop = window.useBookCrop ? window.useBookCrop(src, true) : null;
    const box = useRef(null);
    const [nat, setNat] = useState(null);
    const [dim, setDim] = useState(null);
    useEffect(() => { const el = box.current && box.current.parentElement; if (!el) return; const m = () => setDim({ w: el.clientWidth, h: el.clientHeight }); m(); const ro = new ResizeObserver(m); ro.observe(el); return () => ro.disconnect(); }, []);
    const c = crop || { x: 0, y: 0, w: 1, h: 1 };
    const r = nat ? (c.w * nat.w) / (c.h * nat.h) : 0;
    const fitR = dim && dim.h ? dim.w / dim.h : 1;
    return h("span", { ref: box, className: "db-pc-img", style: { position: "relative", display: "block", overflow: "hidden", borderRadius: "var(--db-radius-sm)", maxWidth: "100%", maxHeight: "100%", aspectRatio: r ? String(r) : "auto", visibility: r ? "visible" : "hidden", ...(r >= fitR ? { width: "100%" } : { height: "100%" }) } },
      h("img", { src, alt: alt || "", loading: "lazy", decoding: "async", onLoad: (e) => setNat({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight }),
        style: r ? { position: "absolute", display: "block", maxWidth: "none", left: (-c.x / c.w * 100) + "%", top: (-c.y / c.h * 100) + "%", width: (100 / c.w) + "%", height: (100 / c.h) + "%" } : { display: "block", width: 1, height: 1 } }));
  }

  window.PDPX = { FillImg, CardImg, augment, firstAvail, hasDigital, availOf, ctaLabel, releaseOf, isPre, fmtRelease, releaseText, PreBadge, PreorderInfo, preLine, Price, SizeSelect, StaticFormat, Avail, Notify, Promo, SeriesLink, SeriesPage, metaBits, SERIES };
})();
