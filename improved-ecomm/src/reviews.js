/* PDP customer reviews: overview, write-a-review dialog, sortable grid (6 per load). */
(function () {
  const h = React.createElement;
  const { useState, useMemo, useEffect, useRef } = React;
  const PER = 6;
  const SORTS = ["Most recent", "Most helpful", "Highest rated", "Lowest rated"];

  function rng(seed) {
    let s = 0;
    for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  function distribution(avg, n) {
    const target = Math.min(5, Math.max(1, avg));
    const w = [1, 2, 3, 4, 5].map((s) => Math.exp(-Math.pow(s - target, 2) / 1.6) + 0.03);
    const t = w.reduce((a, b) => a + b, 0);
    const c = w.map((x) => Math.floor((x / t) * n));
    c[Math.min(4, Math.max(0, Math.round(target) - 1))] += n - c.reduce((a, b) => a + b, 0);
    const mean = () => c.reduce((a, x, i) => a + x * (i + 1), 0) / n;
    for (let guard = 0; guard < n * 8; guard++) {
      const m = mean();
      if (Math.abs(m - target) <= 0.5 / n + 0.004) break;
      if (m < target) { let i = -1; for (let k = 0; k < 4; k++) if (c[k] > 0 && (i < 0 || c[k] >= c[i])) i = k; if (i < 0) break; c[i]--; c[i + 1]++; }
      else { let i = -1; for (let k = Math.max(1, Math.ceil(target) - 1); k <= 4; k++) if (c[k] > 0) { i = k; break; } if (i < 0) break; c[i]--; c[i - 1]++; }
    }
    return c; // index 0 = 1 star
  }

  const NAMES = ["Sarah M.", "Rebecca L.", "David K.", "Emily J.", "Hannah P.", "Michael T.", "Rachel B.", "Jared W.", "Lauren S.", "Anna C.", "Benjamin R.", "Megan H.", "Joseph D.", "Kristen A.", "Natalie G.", "Samuel F.", "Abigail N.", "Tyler E."];
  const PLACES = ["Provo, UT", "Mesa, AZ", "Boise, ID", "Salt Lake City, UT", "Rexburg, ID", "Las Vegas, NV", "St. George, UT", "Sacramento, CA", "Logan, UT", "Gilbert, AZ", "Idaho Falls, ID", "Ogden, UT"];

  const COPY = {
    scripture: {
      hi: [["Worth every penny", "The binding is sturdy and the pages turn easily. I take these to church every week and they still look new."], ["A lovely gift", "I gave these to my daughter for her baptism. The color is even prettier in person, and the imprint came out clean and even."], ["Easy to read", "The font size is comfortable for long study sessions, and the index tabs make it quick to find my place during lessons."], ["Beautiful color", "The cover feels soft and well made. It has held up through a year of daily use in my bag."]],
      mid: [["Good, with one small issue", "The scriptures themselves are lovely. The ribbon frayed after a few months, but everything else has held up well."], ["Nice, but thin pages", "The pages are thinner than I expected and some markings bleed through. Still a good set for everyday use."]],
      lo: [["Not what I expected", "The color looked different from the photos, and the cover creased within the first few weeks."], ["Imprint was off-center", "The imprint was slightly crooked. Customer service was helpful, but it took a while to sort out."]]
    },
    tote: {
      hi: [["Holds everything", "My scriptures, a manual, and a notebook all fit with room to spare. The zipper is smooth and the strap is comfortable."], ["Well made", "The stitching is neat and the material wipes clean easily. It looks nicer than the bag it replaced."], ["Perfect size", "It fits regular-size scriptures snugly without feeling bulky. I get compliments on it most Sundays."]],
      mid: [["Nice, a little small", "It works well, but it is a tight fit with a larger journal. The material feels good."], ["Good everyday tote", "The strap could be longer, but it is well made and easy to carry."]],
      lo: [["Strap broke", "The strap came loose after a couple of months of regular use."], ["Smaller than pictured", "My scriptures barely fit. I wish the dimensions had been clearer."]]
    },
    book: {
      hi: [["Couldn\u2019t put it down", "I read this in two evenings. The characters stayed with me for days afterward."], ["A favorite this year", "Warm, thoughtful, and well written. I have already passed it to my sister."], ["Beautifully written", "The pacing is steady and the ending felt earned. I would read it again."], ["Great for book club", "Our group had a long conversation about this one. Easy to recommend."]],
      mid: [["Enjoyable", "A good story with a slow middle. The last third made up for it."], ["Solid read", "Not my favorite from this author, but still worth the time."]],
      lo: [["Not for me", "I had trouble connecting with the main character and stopped partway through."], ["Slow start", "It took too long to get going, and the ending felt rushed."]]
    },
    art: {
      hi: [["Even better in person", "The colors are rich and the frame is solid. It hangs in our entry and sets the tone for the whole room."], ["Arrived safely", "Packaged carefully and ready to hang. The detail is lovely up close."], ["A peaceful piece", "Exactly what I hoped for. It is the first thing I see each morning."]],
      mid: [["Pretty, a bit smaller", "Lovely piece, though smaller than I pictured. Check the dimensions before ordering."]],
      lo: [["Frame was damaged", "The corner of the frame arrived chipped. The replacement was fine."]]
    },
    general: {
      hi: [["Very happy with it", "Good quality and arrived quickly. It was exactly as described."], ["Great purchase", "Well made and thoughtfully designed. I would buy it again."], ["Lovely gift", "I bought this as a gift and it was very well received."]],
      mid: [["Good overall", "Nice quality for the price, with a few small things I would change."]],
      lo: [["Disappointed", "It did not hold up as well as I hoped."]]
    }
  };
  const kind = (p) => /scripture-totes|bags/.test(p.cat) ? "tote" : /scripture/.test(p.cat) ? "scripture" : /^books/.test(p.cat) ? "book" : /fine-art|art/.test(p.cat) ? "art" : "general";

  function buildReviews(p) {
    const n = p.rc || 0;
    if (!n) return [];
    const r = rng(String(p.id));
    const counts = distribution(p.r || 4.5, n);
    const stars = [];
    counts.forEach((c, i) => { for (let k = 0; k < c; k++) stars.push(i + 1); });
    for (let i = stars.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [stars[i], stars[j]] = [stars[j], stars[i]]; }
    const lib = COPY[kind(p)];
    const now = new Date(2026, 9, 21).getTime();
    let t = now;
    return stars.map((s, i) => {
      t -= Math.floor((1 + r() * 9) * 86400000);
      const pool = s >= 4 ? lib.hi : s === 3 ? lib.mid : lib.lo;
      const c = pool[Math.floor(r() * pool.length)];
      return { id: p.id + "-" + i, rating: s, title: c[0], body: c[1], name: NAMES[Math.floor(r() * NAMES.length)], place: PLACES[Math.floor(r() * PLACES.length)], date: t, helpful: Math.floor(Math.pow(r(), 2.2) * 40), verified: r() > 0.2 };
    });
  }

  const fmtDate = (t) => new Date(t).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const KEY = (id) => "db-reviews-" + id;
  const loadMine = (id) => { try { return JSON.parse(localStorage.getItem(KEY(id)) || "[]"); } catch (e) { return []; } };

  /* Stars: the DS StarRating (md on review cards, lg in the summary). */
  function StarRow({ r, size = "md" }) {
    return h(window.DeseretBookDesignSystem_609afa.StarRating, { value: r, size });
  }

  /* Write-a-review picker: the DS StarRating in picker mode, with its visible label. */
  function StarPicker({ value, onChange, error }) {
    return h("div", { className: "rv-pick" },
      h("span", { className: "rv-pick-l", "aria-hidden": true }, "Your rating"),
      h(window.DeseretBookDesignSystem_609afa.StarRating, { value, onChange, error, label: "Your rating" }));
  }

  function WriteReview({ open, onClose, onSubmit, p }) {
    const { Dialog, Button, Input } = window.DeseretBookDesignSystem_609afa;
    const [f, setF] = useState({ rating: 0, title: "", body: "", name: "" });
    const [err, setErr] = useState({});
    useEffect(() => { if (open) { setF({ rating: 0, title: "", body: "", name: "" }); setErr({}); } }, [open]);
    const set = (k) => (e) => setF((x) => Object.assign({}, x, { [k]: e && e.target ? e.target.value : e }));
    const submit = () => {
      const e = {};
      if (!f.rating) e.rating = "Choose a rating.";
      if (!f.body.trim()) e.body = "Write a few words about the product.";
      if (!f.name.trim()) e.name = "Add the name to show with your review.";
      setErr(e);
      if (Object.keys(e).length) return;
      onSubmit({ id: "mine-" + Date.now(), rating: f.rating, title: f.title.trim(), body: f.body.trim(), name: f.name.trim(), place: "", date: Date.now(), helpful: 0, verified: false, mine: true });
    };
    return h(Dialog, { open, size: "md", title: "Write a Review", onClose, footer: h(React.Fragment, null, h(Button, { variant: "secondary", size: "md", onClick: onClose }, "Cancel"), h(Button, { size: "md", onClick: submit }, "Submit review")) },
      h("div", { className: "rv-form" },
        h("p", { className: "rv-form-p" }, p.t),
        h(StarPicker, { value: f.rating, onChange: set("rating"), error: err.rating }),
        h(Input, { label: "Review title", value: f.title, onChange: set("title"), placeholder: "Sum it up in a few words" }),
        h(Input, { label: "Your review", multiline: true, rows: 5, value: f.body, onChange: set("body"), error: err.body }),
        h(Input, { label: "Display name", value: f.name, onChange: set("name"), error: err.name, hint: "Shown with your review." })));
  }

  function ReviewCard({ v }) {
    const { Card } = window.DeseretBookDesignSystem_609afa;
    const [voted, setVoted] = useState(false);
    return h(Card, { padding: "md", className: "rv-card" },
      h("div", { className: "rv-card-top" }, h("div", { className: "rv-st" }, h(StarRow, { r: v.rating })), h("span", { className: "rv-date" }, fmtDate(v.date))),
      v.title ? h("h3", { className: "rv-t" }, v.title) : null,
      h("p", { className: "rv-b" }, v.body),
      h("div", { className: "rv-foot" }, h("div", { className: "rv-by" },
        h("span", { className: "rv-n" }, v.name),
        v.place ? h("span", null, v.place) : null,
        v.verified ? h("span", { className: "rv-ver" }, h(window.DBIco, { name: "check_circle", size: 14 }), "Verified buyer") : null,
        v.mine ? h("span", { className: "rv-ver" }, "Your review") : null),
      v.mine ? null : h("button", { type: "button", className: "rv-help" + (voted ? " on" : ""), "aria-pressed": voted, onClick: () => setVoted(!voted) }, "Helpful (" + (v.helpful + (voted ? 1 : 0)) + ")")));
  }

  function PdpReviews({ p }) {
    const { Button, Select, Pagination } = window.DeseretBookDesignSystem_609afa;
    const base = useMemo(() => buildReviews(p), [p.id]);
    const [mine, setMine] = useState(() => loadMine(p.id));
    const [sort, setSort] = useState(SORTS[0]);
    const [pg, setPg] = useState(1);
    const mainRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [thanks, setThanks] = useState(false);
    useEffect(() => { setMine(loadMine(p.id)); setPg(1); setSort(SORTS[0]); setThanks(false); }, [p.id]);
    const all = useMemo(() => {
      const list = mine.concat(base);
      const by = { "Most recent": (a, b) => b.date - a.date, "Most helpful": (a, b) => b.helpful - a.helpful || b.date - a.date, "Highest rated": (a, b) => b.rating - a.rating || b.date - a.date, "Lowest rated": (a, b) => a.rating - b.rating || b.date - a.date };
      return list.slice().sort(by[sort]);
    }, [base, mine, sort]);
    const total = all.length;
    const counts = [5, 4, 3, 2, 1].map((s) => all.filter((x) => x.rating === s).length);
    const avg = total ? all.reduce((t, x) => t + x.rating, 0) / total : 0;
    const add = (v) => { const next = [v].concat(mine); setMine(next); try { localStorage.setItem(KEY(p.id), JSON.stringify(next)); } catch (e) {} setOpen(false); setThanks(true); setSort(SORTS[0]); setPg(1); };
    const pages = Math.max(1, Math.ceil(total / PER));
    const cur = Math.min(pg, pages);
    const goPg = (n) => { setPg(n); const el = mainRef.current; if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 140; if (el.getBoundingClientRect().top < 140) window.scrollTo({ top: y, behavior: "smooth" }); } };

    return h("section", { className: "rv", id: "reviews", "aria-labelledby": "rv-h" },
      h("h2", { className: "rv-h", id: "rv-h" }, "Customer Reviews"),
      !total ? h("div", { className: "rv-lay" },
        h("div", { className: "rv-ov rv-ov-empty" },
          h("div", { className: "rv-empty-h" }, h(window.DBIco, { name: "chat_add_on", size: 28 }), h("h3", { className: "rv-empty-t" }, "Be the First to Review")),
          h("div", { className: "rv-cta" },
            h("p", null, "Share what you think with other customers."),
            h(Button, { variant: "secondary", size: "md", icon: "edit", onClick: () => setOpen(true) }, "Write a review"))),
        h("div", { className: "rv-main rv-main-empty" }, h("p", { className: "rv-none" }, "There are no reviews for this product yet."))) :
      h("div", { className: "rv-lay" }, h("div", { className: "rv-ov" },
        h("div", { className: "rv-sum" },
          h("span", { className: "rv-avg" }, total ? avg.toFixed(1) : "\u2013"),
          h("div", { className: "rv-sum-r" }, h(StarRow, { r: avg, size: "lg" }), h("span", { className: "rv-cnt" }, total ? "Based on " + total + (total === 1 ? " review" : " reviews") : "No reviews yet"))),
        h("ol", { className: "rv-bars", "aria-label": "Rating breakdown" },
          [5, 4, 3, 2, 1].map((s, i) => h("li", { key: s },
            h("span", { className: "rv-bl" }, s + " star"),
            h("span", { className: "rv-bt", "aria-hidden": true }, h("i", { style: { width: (total ? (counts[i] / total) * 100 : 0) + "%" } })),
            h("span", { className: "rv-bn" }, counts[i])))),
        h("div", { className: "rv-cta" },
          h("p", null, "Share what you think with other customers."),
          h(Button, { variant: "secondary", size: "md", icon: "edit", onClick: () => setOpen(true) }, "Write a review"),
          thanks ? h("p", { className: "rv-thx", role: "status" }, h(window.DBIco, { name: "check_circle", size: 16 }), "Thanks. Your review has been added.") : null)),
      h("div", { className: "rv-main", ref: mainRef },
      total ? h("div", { className: "rv-bar" },
        h("span", { className: "rv-showing" }, "Showing " + ((cur - 1) * PER + 1) + "\u2013" + Math.min(cur * PER, total) + " of " + total),
        h(Select, { label: "Sort by", options: SORTS, value: sort, onChange: (e) => { setSort(e.target.value); setPg(1); }, className: "rv-sort" })) : null,
      total ? h("div", { className: "rv-grid" }, all.slice((cur - 1) * PER, cur * PER).map((v) => h(ReviewCard, { key: v.id, v }))) : null,
      h(Pagination, { className: "db-pager", page: cur, pageCount: pages, onChange: goPg, label: "Review pages" }))),
      h(WriteReview, { open, onClose: () => setOpen(false), onSubmit: add, p }));
  }

  window.PdpReviews = PdpReviews;
  window.scrollToReviews = function (e) {
    if (e) e.preventDefault();
    const el = document.getElementById("reviews");
    if (!el) return;
    const hdr = document.querySelector("header, .hdr");
    const off = (hdr ? hdr.getBoundingClientRect().height : 100) + 16;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - off, behavior: "smooth" });
  };
})();
