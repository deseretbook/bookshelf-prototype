/* Orders page (#/account/orders). Plain JS. Six stages, one order per stage: placed orders advance a stage each time a new one is placed; demo orders fill the rest. */
(function () {
  const h = React.createElement;
  const KEY = "db-orders";
  const STAGES = ["placed", "processing", "shipped", "delivered", "returned", "cancelled"];
  const LABEL = { placed: "Order placed", processing: "Processing", shipped: "Shipped", delivered: "Delivered", return_started: "Return started", returned: "Returned", cancelled: "Cancelled" };
  const TONE = { placed: "dove", processing: "dove", shipped: "charcoal", delivered: "accent", return_started: "dove", returned: "dove", cancelled: "red" };
  /* What each stage allows: placed and processing orders can be cancelled; shipped and delivered orders can be returned. */
  const CAN_CANCEL = ["placed", "processing"];
  const CAN_RETURN = ["shipped", "delivered"];
  /* Cancellations and returns made in the demo live in memory only, so a reload resets every order to its demo stage. */
  const OVR = {};
  const today = () => new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const BADGE_STYLE = { delivered: { background: "var(--db-status-success-soft)", color: "var(--db-status-success)", borderColor: "var(--db-status-success)" }, cancelled: { background: "var(--db-status-error-soft)", color: "var(--db-status-error)", borderColor: "var(--db-status-error)" } };
  const TRACK = ["placed", "processing", "shipped", "delivered"];
  const TO = "Sarah Johnson, 57 W South Temple, Salt Lake City, UT 84101";
  const SEEDS = {
    placed: { no: "DB4417203", date: "October 6, 2026", items: [["P5244938", 1], ["PR00001543", 1]], method: "Standard", ship: 6.99 },
    processing: { no: "DB4409158", date: "October 5, 2026", items: [["P5068623", 1], ["P5043081", 1], ["PR00001380", 1]], method: "Standard", ship: 0 },
    shipped: { no: "DB4398820", date: "October 1, 2026", items: [["6095538", 2]], method: "Priority", ship: 14.99 },
    delivered: { no: "DB4371044", date: "September 22, 2026", items: [["P6073551", 1, "Cream", { style: "Large Script Letters", text: "Sarah Johnson" }], ["P5183500", 1], ["P5197705", 1], ["P5244938", 1], ["P5068623", 2]], method: "Standard", ship: 0, gift: true },
    returned: { no: "DB4352617", date: "September 8, 2026", items: [["P5127561", 1]], method: "Standard", ship: 6.99 },
    cancelled: { no: "DB4338902", date: "August 25, 2026", items: [["P5076966", 1]], method: "Standard", ship: 6.99 }
  };
  const NOTE = {
    placed: (o) => "We received your order. " + (o.eta || "Arrives in 5\u20137 business days.") + (hasPre(o) ? " Pre-order items ship on their release date." : ""),
    processing: (o) => "We\u2019re preparing your order. It ships within 1\u20132 business days." + (hasPre(o) ? " Pre-order items ship on their release date." : ""),
    shipped: () => "On its way with USPS. Estimated delivery Thursday, October 8.",
    delivered: () => "Delivered October 3 to the front door.",
    return_started: (o) => "Return started " + o.retDate + ". Drop " + (o.retQty === 1 ? "the item" : "the items") + " off at any USPS location with the prepaid label we emailed you. Your refund of " + money(o.refund) + " goes to Visa ending in " + (o.last4 || "4242") + " within 5\u20137 business days of us receiving " + (o.retQty === 1 ? "it." : "them."),
    returned: (o) => "Return received September 18. Refund of " + money(o.total) + " issued to Visa ending in 4242.",
    cancelled: (o) => "Cancelled " + (o.cancelDate || "August 25") + " at your request. You weren\u2019t charged."
  };
  /* Pre-order lines: a line is a pre-order when it was ordered with a release date (checkout stores it) or its product has one. Shown while the order is still open. */
  const OPEN = ["placed", "processing"];
  const lineRelease = (l) => l.release || (window.PDPX && window.PDPX.releaseOf(D.byId(l.id))) || null;
  const preOf = (o, l) => (OPEN.indexOf(o.stage) > -1 ? lineRelease(l) : null);
  const hasPre = (o) => o.items.some((l) => preOf(o, l));
  const fmtRel = (r) => (window.PDPX ? window.PDPX.fmtRelease(r) : r);
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const fmtDate = (d) => d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  window.DBOrders = {
    add(o) {
      const list = [Object.assign({ date: fmtDate(new Date()) }, o)].concat(load()).slice(0, TRACK.length);
      localStorage.setItem(KEY, JSON.stringify(list));
    }
  };

  const FEE = window.IMPRINT_FEE || 12.99;
  function seedOrder(stage) {
    const s = SEEDS[stage];
    const items = s.items.map(([id, q, color, imprint]) => ({ id, q, color: color || null, imprint: imprint || null })).filter((l) => D.byId(l.id));
    const sub = items.reduce((t, l) => t + (D.byId(l.id).price + (l.imprint ? FEE : 0)) * l.q, 0);
    return { no: s.no, date: s.date, items, sub, ship: s.ship, total: sub + s.ship, method: s.method, gift: !!s.gift, to: TO, last4: "4242" };
  }
  /* Older order history (demo), so the Orders list has enough rows to show pagination. */
  const HISTORY = [
    { stage: "delivered", no: "DB4321577", date: "August 12, 2026", items: [["P5258117", 1], ["P5197705", 1]], method: "Standard", ship: 0 },
    { stage: "delivered", no: "DB4307340", date: "July 28, 2026", items: [["P5226193", 1]], method: "Standard", ship: 6.99 },
    { stage: "returned", no: "DB4289916", date: "July 9, 2026", items: [["P6001424", 1]], method: "Standard", ship: 6.99 },
    { stage: "delivered", no: "DB4270452", date: "June 21, 2026", items: [["PR00001397", 1], ["P5043081", 1], ["P5183500", 1]], method: "Priority", ship: 14.99 },
    { stage: "cancelled", no: "DB4251083", date: "May 30, 2026", items: [["P5068623", 1]], method: "Standard", ship: 6.99 },
    { stage: "delivered", no: "DB4236619", date: "May 4, 2026", items: [["6095538", 1]], method: "Standard", ship: 6.99 }
  ];
  function histOrder(s) {
    const items = s.items.map(([id, q]) => ({ id, q, color: null, imprint: null })).filter((l) => D.byId(l.id));
    const sub = items.reduce((t, l) => t + D.byId(l.id).price * l.q, 0);
    return { stage: s.stage, mine: false, no: s.no, date: s.date, items, sub, ship: s.ship, total: sub + s.ship, method: s.method, gift: false, to: TO, last4: "4242" };
  }
  function allOrders() {
    const mine = load();
    return STAGES.map((st, i) => Object.assign({ stage: st, mine: i < mine.length }, i < mine.length && TRACK.indexOf(st) > -1 ? mine[i] : seedOrder(st))).concat(HISTORY.map(histOrder).filter((x) => x.items.length)).map((o) => OVR[o.no] ? Object.assign({}, o, OVR[o.no]) : o);
  }

  function Tracker({ stage }) {
    const at = TRACK.indexOf(stage);
    if (at < 0) return null;
    return h(window.DeseretBookDesignSystem_609afa.ProgressTracker, { className: "ord-progress", label: "Order progress", steps: TRACK.map((s) => LABEL[s]), current: at });
  }

  function OrderCard({ o, go }) {
    const { Badge } = window.DeseretBookDesignSystem_609afa;
    const lines = o.items.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
    const qty = lines.reduce((t, x) => t + x.l.q, 0);
    const shown = lines.slice(0, 3), more = lines.length - shown.length;
    return h("button", { className: "ord-card", onClick: () => go("#/account/orders/" + o.no), "aria-label": "Order " + o.no + ", " + LABEL[o.stage] },
      h("span", { className: "ord-card-top" },
        h("span", { className: "ord-stack", "aria-hidden": true },
          more > 0 ? h("span", { className: "ord-st ord-more", style: { zIndex: 4 } }, "+" + more) : null,
          shown.map((x, i) => h("span", { className: "ord-st", key: i, style: { zIndex: 3 - i } }, h("img", { src: thumb(colorImg(x.p, x.l.color)), alt: "", loading: "lazy", decoding: "async" })))),
        h("span", { className: "ord-card-h" },
          h("span", { className: "ord-card-no" }, "Order " + o.no),
          h("span", { className: "ord-card-d" }, o.date)),
        h(Badge, { tone: TONE[o.stage], style: BADGE_STYLE[o.stage] }, LABEL[o.stage])),
      h("dl", { className: "ord-sum" },
        h("div", null, h("dt", null, "Total"), h("dd", null, money(o.total))),
        h("div", null, h("dt", null, "Items"), h("dd", null, qty + (qty === 1 ? " item" : " items"))),
        h("div", null, h("dt", null, "Payment"), h("dd", null, "Visa ending in " + (o.last4 || "4242")))));
  }

  const baseTitle = (t) => String(t).replace(/\s*\([^)]*\)/g, "").split(",")[0].trim();

  /* Cancel: a short confirm. */
  function CancelDialog({ o, open, onClose, onDone }) {
    const { Dialog, Button } = window.DeseretBookDesignSystem_609afa;
    return h(Dialog, { open, size: "sm", tone: "warning", title: "Cancel This Order?", onClose,
      description: "Order " + o.no + " won\u2019t ship and you won\u2019t be charged " + money(o.total) + ". This can\u2019t be undone.",
      footer: h(React.Fragment, null,
        h(Button, { variant: "secondary", size: "md", onClick: onClose }, "Keep order"),
        h(Button, { size: "md", onClick: () => { OVR[o.no] = { stage: "cancelled", cancelDate: today() }; onClose(); onDone(); } }, "Cancel order")) });
  }
  /* Return: pick the items (and how many), give a reason, see the refund. Personalized items can't be returned. */
  const REASONS = ["Changed my mind", "Ordered by mistake", "Received as a duplicate gift", "Arrived damaged", "Wrong item sent", "Not as described", "Other"];
  function ReturnDialog({ o, open, onClose, onDone }) {
    const { Dialog, Button, Checkbox, QuantityStepper, Select } = window.DeseretBookDesignSystem_609afa;
    const lines = o.items.map((l, i) => ({ l, i, p: D.byId(l.id) })).filter((x) => x.p);
    const [pick, setPick] = React.useState({});
    const [reason, setReason] = React.useState("");
    const [err, setErr] = React.useState("");
    React.useEffect(() => { if (open) { setPick({}); setReason(""); setErr(""); } }, [open]);
    const qty = Object.values(pick).reduce((t, n) => t + n, 0);
    const refund = lines.reduce((t, x) => t + (pick[x.i] ? x.p.price * pick[x.i] : 0), 0);
    const submit = () => {
      if (!qty) { setErr("Choose at least one item to return."); return; }
      if (!reason) { setErr("Choose a reason for the return."); return; }
      OVR[o.no] = { stage: "return_started", retDate: today(), retQty: qty, refund, ret: Object.assign({}, pick), reason };
      onClose(); onDone();
    };
    return h(Dialog, { open, size: "md", title: "Return Items", onClose,
      description: o.stage === "shipped" ? "Your order is still on its way. Start the return now and send it back once it arrives." : "Returns are free within 30 days of delivery.",
      footer: h(React.Fragment, null,
        h(Button, { variant: "secondary", size: "md", onClick: onClose }, "Keep order"),
        h(Button, { size: "md", onClick: submit }, qty ? "Return " + qty + (qty === 1 ? " item" : " items") : "Start return")) },
      h("div", { className: "ord-ret" },
        h("ul", { className: "ord-ret-list" }, lines.map((x) => {
          const locked = !!x.l.imprint;
          const on = !!pick[x.i];
          return h("li", { key: x.i, className: "ord-ret-it" + (locked ? " off" : "") },
            h("span", { className: "ord-th" }, h("img", { src: thumb(colorImg(x.p, x.l.color)), alt: "" })),
            h("span", { className: "ord-ret-t" },
              h(Checkbox, { label: baseTitle(x.p.t), checked: on, disabled: locked, onChange: (e) => { setErr(""); setPick((p) => { const n = Object.assign({}, p); if (e.target.checked) n[x.i] = x.l.q; else delete n[x.i]; return n; }); } }),
              h("span", { className: "ord-ret-m" }, locked ? "Personalized items can\u2019t be returned." : money(x.p.price) + " each" + (x.l.color ? " \u00b7 " + x.l.color : ""))),
            on && x.l.q > 1 ? h(QuantityStepper, { size: "sm", label: "Quantity to return", min: 1, max: x.l.q, value: pick[x.i], onChange: (n) => setPick((p) => Object.assign({}, p, { [x.i]: n })) }) : null);
        })),
        h(Select, { label: "Reason for return", value: reason, onChange: (e) => { setErr(""); setReason(e.target.value); }, options: [{ value: "", label: "Choose a reason" }].concat(REASONS) }),
        h("dl", { className: "ord-dl ord-ret-sum" },
          h("div", null, h("dt", null, "Return shipping"), h("dd", null, "Free, prepaid label")),
          h("div", { className: "grand" }, h("dt", null, "Estimated refund"), h("dd", null, money(refund)))),
        err ? h("p", { className: "ord-ret-err", role: "alert" }, err) : null));
  }

  function OrderDetail({ o, go, onChange }) {
    const { Badge, Card, Button } = window.DeseretBookDesignSystem_609afa;
    const [dlg, setDlg] = React.useState(null);
    const lines = o.items.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
    const merch = lines.reduce((t, x) => t + x.p.price * x.l.q, 0);
    const fees = lines.reduce((t, x) => t + (x.l.imprint ? FEE * x.l.q : 0), 0);
    const disc = Math.max(0, merch + fees - (o.total - o.ship));
    return h("div", { className: "subs ord" },
      h(window.DeseretBookDesignSystem_609afa.Button, { className: "ord-back", variant: "ghost", size: "sm", icon: "arrow_back", onClick: () => go("#/account/orders"), style: { alignSelf: "flex-start", marginLeft: -12 } }, "All orders"),
      h("div", { className: "subs-h" },
        h("span", { className: "subs-eb" }, "Placed " + o.date),
        h("div", { className: "ord-top" }, h("h1", null, "Order " + o.no), h(Badge, { tone: TONE[o.stage], style: BADGE_STYLE[o.stage] }, LABEL[o.stage])),
        h("p", null, NOTE[o.stage](o)),
        CAN_CANCEL.indexOf(o.stage) > -1 || CAN_RETURN.indexOf(o.stage) > -1 ? h("div", { className: "ord-acts" },
          CAN_CANCEL.indexOf(o.stage) > -1 ? h(Button, { variant: "secondary", size: "md", onClick: () => setDlg("cancel") }, "Cancel order") : null,
          CAN_RETURN.indexOf(o.stage) > -1 ? h(Button, { variant: "secondary", size: "md", onClick: () => setDlg("return") }, "Return items") : null) : null),
      h(Tracker, { stage: o.stage }),
      CAN_CANCEL.indexOf(o.stage) > -1 ? h(CancelDialog, { o, open: dlg === "cancel", onClose: () => setDlg(null), onDone: onChange }) : null,
      CAN_RETURN.indexOf(o.stage) > -1 ? h(ReturnDialog, { o, open: dlg === "return", onClose: () => setDlg(null), onDone: onChange }) : null,
      h("section", { className: "subs-sec" }, h("h2", { className: "subs-lab" }, "Items"),
        h("div", { className: "ord-items" }, lines.map((x, i) => h("div", { className: "ord-it", key: i },
          h("button", { className: "ord-th lg", onClick: () => go("#/p/" + x.p.id), "aria-label": x.p.t }, h("img", { src: thumb(colorImg(x.p, x.l.color)), alt: "", loading: "lazy" })),
          h("span", { className: "ord-it-t" }, h("button", { onClick: () => go("#/p/" + x.p.id), title: x.p.full || x.p.t }, baseTitle(x.p.t)),
            preOf(o, x.l) && window.PDPX ? h(window.PDPX.PreBadge, { style: { alignSelf: "flex-start" } }) : null,
            h("dl", { className: "ord-opts" },
              preOf(o, x.l) ? h("div", null, h("dt", null, "Release date"), h("dd", null, fmtRel(preOf(o, x.l)))) : null,
              preOf(o, x.l) ? h("div", null, h("dt", null, "Shipping"), h("dd", null, "Ships on release")) : null,
              x.l.color ? h("div", null, h("dt", null, x.p.colors ? "Color" : "Format"), h("dd", null, x.l.color)) : null,
              x.l.imprint ? h("div", null, h("dt", null, "Personalization"), h("dd", null, "\u201c" + x.l.imprint.text + "\u201d")) : null,
              x.l.imprint ? h("div", null, h("dt", null, "Letter style"), h("dd", null, x.l.imprint.style)) : null,
              h("div", null, h("dt", null, "Quantity"), h("dd", null, String(x.l.q))),
              o.ret && o.ret[i] ? h("div", null, h("dt", null, "Returning"), h("dd", null, o.ret[i] === x.l.q ? (x.l.q === 1 ? "Yes" : "All " + x.l.q) : o.ret[i] + " of " + x.l.q)) : null,
              h("div", null, h("dt", null, "Price"), h("dd", null, money(x.p.price) + " each")),
              x.l.imprint ? h("div", null, h("dt", null, "Imprint fee"), h("dd", null, money(FEE) + " each")) : null)),
          h("span", { className: "ord-it-p" }, money((x.p.price + (x.l.imprint ? FEE : 0)) * x.l.q)))))),
      h("div", { className: "subs-grid" },
        h(Card, { padding: "md", className: "ord-c" }, h("h2", { className: "subs-lab" }, "Delivery"),
          h("dl", { className: "ord-dl" },
            h("div", null, h("dt", null, "Ship to"), h("dd", null, o.to)),
            h("div", null, h("dt", null, "Method"), h("dd", null, o.method)),
            o.gift ? h("div", null, h("dt", null, "Gift"), h("dd", null, "Yes")) : null)),
        h(Card, { padding: "md", className: "ord-c" }, h("h2", { className: "subs-lab" }, "Payment"),
          h("dl", { className: "ord-dl" },
            h("div", null, h("dt", null, "Card"), h("dd", null, "Visa ending in " + o.last4)),
            h("div", null, h("dt", null, "Subtotal"), h("dd", null, money(merch))),
            fees > 0 ? h("div", null, h("dt", null, "Imprinting"), h("dd", null, money(fees))) : null,
            disc > 0.005 ? h("div", null, h("dt", null, "Discount"), h("dd", null, "\u2212" + money(disc))) : null,
            h("div", null, h("dt", null, "Shipping"), h("dd", null, o.ship ? money(o.ship) : "Free")),
            h("div", { className: "grand" }, h("dt", null, o.stage === "cancelled" ? "Total (not charged)" : o.stage === "returned" ? "Total refunded" : "Total"), h("dd", null, money(o.total))),
            o.stage === "return_started" ? h("div", null, h("dt", null, "Refund (pending)"), h("dd", null, money(o.refund))) : null))));
  }

  /* Search and filter bar shared by the Orders and Wishlist lists (window.DBListBar): the DS SearchFilterBar, live mode. */
  function ListBar({ q, setQ, label, filters, filter, setFilter }) {
    const { SearchFilterBar } = window.DeseretBookDesignSystem_609afa;
    return h(SearchFilterBar, { className: "list-bar", searchLabel: label, query: q, onQueryChange: setQ,
      filters: (filters || []).map((f) => ({ value: f.id, label: f.label, count: f.n })), filterValue: filter, onFilterChange: setFilter });
  }
  /* "No matches" after a search or filter: the DS EmptyState, start layout. */
  function NoMatch({ q, onClear, noun }) {
    const { Button, EmptyState } = window.DeseretBookDesignSystem_609afa;
    return h(EmptyState, { align: "start", action: h(Button, { variant: "secondary", size: "sm", onClick: onClear }, q.trim() ? "Clear search" : "Show all") },
      q.trim() ? "No " + noun + " match \u201c" + q.trim() + "\u201d." : "No " + noun + " match this filter.");
  }
  /* Shared pager for every list (account lists, PLP, reviews): the DS Pagination (window.DBPager). Scrolls back to the list top if it is above the viewport. */
  function Pager({ page, pages, onGo, label, anchor }) {
    if (pages <= 1) return null;
    const goPg = (n) => { onGo(n); const el = document.querySelector(anchor || ".acp-main"); if (el && el.getBoundingClientRect().top < 0) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" }); };
    return h(window.DeseretBookDesignSystem_609afa.Pagination, { className: "db-pager", page, pageCount: pages, onChange: goPg, label: label || "Pages" });
  }
  window.DBPager = Pager;
  window.DBListBar = ListBar;
  window.DBNoMatch = NoMatch;
  const ORD_PER = 6;
  const ORD_FILTERS = [["all", "All", () => true], ["progress", "In progress", (o) => ["placed", "processing", "shipped"].indexOf(o.stage) > -1], ["delivered", "Delivered", (o) => o.stage === "delivered"], ["returned", "Returned", (o) => o.stage === "returned" || o.stage === "return_started"], ["cancelled", "Cancelled", (o) => o.stage === "cancelled"]];
  const ordText = (o) => [o.no, LABEL[o.stage], o.date].concat(o.items.map((l) => { const p = D.byId(l.id); return p ? [p.t, p.by].filter(Boolean).join(" ") : ""; })).join(" ").toLowerCase();

  function Orders({ id, user, go, onSignIn }) {
    const { Button } = window.DeseretBookDesignSystem_609afa;
    const [q, setQ] = React.useState("");
    const [filter, setFilter] = React.useState("all");
    const [pg, setPg] = React.useState(1);
    const [, bump] = React.useState(0);
    React.useEffect(() => { setPg(1); }, [q, filter]);
    const { EmptyState } = window.DeseretBookDesignSystem_609afa;
    if (!user) return h(EmptyState, { icon: "person", title: "Sign In to See Your Orders", headingLevel: "h1",
      action: h(Button, { variant: "secondary", onClick: onSignIn }, "Sign in") }, "Track shipments and review past orders from your account.");
    const list = allOrders();
    const sel = id ? list.find((o) => o.no === id) : null;
    if (id && sel) return h(OrderDetail, { key: sel.no + sel.stage, o: sel, go, onChange: () => { bump((n) => n + 1); window.scrollTo({ top: 0, behavior: "smooth" }); } });
    if (id) return h(EmptyState, { icon: "shopping_cart", title: "Order Not Found", headingLevel: "h1",
      action: h(Button, { variant: "secondary", onClick: () => go("#/account/orders") }, "All orders") }, "This order isn\u2019t on your account.");
    const term = q.trim().toLowerCase();
    const hit = list.filter((o) => !term || ordText(o).indexOf(term) > -1).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    const filters = ORD_FILTERS.map(([id, label, fn]) => ({ id, label, fn, n: hit.filter(fn).length })).filter((f) => f.id === "all" || f.n || f.id === filter);
    const cur = ORD_FILTERS.find((f) => f[0] === filter) || ORD_FILTERS[0];
    const matched = hit.filter(cur[2]);
    const pages = Math.max(1, Math.ceil(matched.length / ORD_PER));
    const page = Math.min(pg, pages);
    const shown = matched.slice((page - 1) * ORD_PER, page * ORD_PER);
    return h("div", { className: "subs ord ord-index" },
      h("div", { className: "subs-h" }, h("span", { className: "subs-eb" }, "My Account"), h("h1", null, "Orders")),
      h(ListBar, { q, setQ, label: "Search orders", filters, filter, setFilter }),
      shown.length ? h("div", { className: "ord-grid ord-rows" }, shown.map((o) => h(OrderCard, { key: o.no + o.stage, o, go }))) : h(NoMatch, { q, noun: "orders", onClear: () => { setQ(""); setFilter("all"); } }),
      h(Pager, { page, pages, onGo: setPg, label: "Order pages", anchor: ".acp-main" }));
  }
  window.Orders = Orders;
})();
