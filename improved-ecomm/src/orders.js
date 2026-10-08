/* Orders page (#/account/orders). Plain JS. Six stages, one order per stage: placed orders advance a stage each time a new one is placed; demo orders fill the rest. */
(function () {
  const h = React.createElement;
  const KEY = "db-orders";
  const STAGES = ["placed", "processing", "shipped", "delivered", "returned", "cancelled"];
  const LABEL = { placed: "Order placed", processing: "Processing", shipped: "Shipped", delivered: "Delivered", returned: "Returned", cancelled: "Cancelled" };
  const TONE = { placed: "sand", processing: "sand", shipped: "charcoal", delivered: "accent", returned: "sand", cancelled: "red" };
  const BADGE_STYLE = { placed: { background: "var(--db-dove)", color: "var(--db-charcoal)" }, processing: { background: "var(--db-dove)", color: "var(--db-charcoal)" }, returned: { background: "var(--db-dove)", color: "var(--db-charcoal)" }, delivered: { background: "var(--db-green-400)", color: "var(--db-white)" } };
  const TRACK = ["placed", "processing", "shipped", "delivered"];
  const TO = "Sarah Johnson, 57 W South Temple, Salt Lake City, UT 84101";
  const SEEDS = {
    placed: { no: "DB4417203", date: "October 6, 2026", items: [["P5244938", 1]], method: "Standard", ship: 6.99 },
    processing: { no: "DB4409158", date: "October 5, 2026", items: [["P5068623", 1], ["P5043081", 1]], method: "Standard", ship: 0 },
    shipped: { no: "DB4398820", date: "October 1, 2026", items: [["6095538", 2]], method: "Priority", ship: 14.99 },
    delivered: { no: "DB4371044", date: "September 22, 2026", items: [["P6073551", 1, "Cream", { style: "Large Script Letters", text: "Sarah Johnson" }], ["P5183500", 1], ["P5197705", 1]], method: "Standard", ship: 0, gift: true },
    returned: { no: "DB4352617", date: "September 8, 2026", items: [["P5127561", 1]], method: "Standard", ship: 6.99 },
    cancelled: { no: "DB4338902", date: "August 25, 2026", items: [["P5076966", 1]], method: "Standard", ship: 6.99 }
  };
  const NOTE = {
    placed: (o) => "We received your order. " + (o.eta || "Arrives in 5\u20137 business days."),
    processing: () => "We\u2019re preparing your order. It ships within 1\u20132 business days.",
    shipped: () => "On its way with USPS. Estimated delivery Thursday, October 8.",
    delivered: () => "Delivered October 3 to the front door.",
    returned: (o) => "Return received September 18. Refund of " + money(o.total) + " issued to Visa ending in 4242.",
    cancelled: () => "Cancelled August 25 at your request. You weren\u2019t charged."
  };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const fmtDate = (d) => d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  window.DBOrders = {
    add(o) {
      const list = [Object.assign({ date: fmtDate(new Date()) }, o)].concat(load()).slice(0, TRACK.length);
      localStorage.setItem(KEY, JSON.stringify(list));
    }
  };

  function seedOrder(stage) {
    const s = SEEDS[stage];
    const items = s.items.map(([id, q, color, imprint]) => ({ id, q, color: color || null, imprint: imprint || null })).filter((l) => D.byId(l.id));
    const sub = items.reduce((t, l) => t + D.byId(l.id).price * l.q, 0);
    return { no: s.no, date: s.date, items, sub, ship: s.ship, total: sub + s.ship, method: s.method, gift: !!s.gift, to: TO, last4: "4242" };
  }
  function allOrders() {
    const mine = load();
    return STAGES.map((st, i) => Object.assign({ stage: st, mine: i < mine.length }, i < mine.length && TRACK.indexOf(st) > -1 ? mine[i] : seedOrder(st)));
  }

  function Tracker({ stage }) {
    const at = TRACK.indexOf(stage);
    if (at < 0) return null;
    return h("ol", { className: "ord-trk", "aria-label": "Order progress" }, TRACK.map((s, i) => h("li", { key: s, className: i <= at ? "on" : "", "aria-current": i === at ? "step" : undefined }, h("i", null), h("span", null, LABEL[s]))));
  }

  function OrderRow({ o, go }) {
    const { Badge } = window.DeseretBookDesignSystem_609afa;
    const lines = o.items.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
    const n = lines.reduce((t, x) => t + x.l.q, 0);
    return h("li", null, h("button", { className: "ord-row", onClick: () => go("#/account/orders/" + o.no) },
      h("span", { className: "ord-stack n" + Math.min(lines.length, 3) }, lines.slice(0, 3).map((x, i) => h("span", { key: i, className: "ord-sq" }, h("img", { src: thumb(colorImg(x.p, x.l.color)), alt: "", loading: "lazy" })))),
      h("span", { className: "ord-id" }, h("strong", null, "Order " + o.no), h("span", null, o.date + " \u00b7 " + n + (n === 1 ? " item" : " items") + " \u00b7 " + money(o.total))),
      h(Badge, { tone: TONE[o.stage], style: BADGE_STYLE[o.stage] }, LABEL[o.stage]),
      h(Ico, { name: "chevron-right", size: 16 })));
  }

  function OrderDetail({ o, go }) {
    const { Badge, Card } = window.DeseretBookDesignSystem_609afa;
    const lines = o.items.map((l) => ({ l, p: D.byId(l.id) })).filter((x) => x.p);
    const sub = lines.reduce((t, x) => t + x.p.price * x.l.q, 0);
    const disc = Math.max(0, sub - (o.total - o.ship));
    return h("div", { className: "subs ord" },
      h("button", { className: "ord-back", onClick: () => go("#/account/orders") }, h(Ico, { name: "arrow-left", size: 14 }), h("span", null, "All orders")),
      h("div", { className: "subs-h" },
        h("span", { className: "subs-eb" }, "Placed " + o.date),
        h("div", { className: "ord-top" }, h("h1", null, "Order " + o.no), h(Badge, { tone: TONE[o.stage], style: BADGE_STYLE[o.stage] }, LABEL[o.stage])),
        h("p", null, NOTE[o.stage](o))),
      h(Tracker, { stage: o.stage }),
      h("section", { className: "subs-sec" }, h("h2", { className: "subs-lab" }, "Items"),
        h("div", { className: "ord-items" }, lines.map((x, i) => h("div", { className: "ord-it", key: i },
          h("button", { className: "ord-th lg", onClick: () => go("#/p/" + x.p.id), "aria-label": x.p.t }, h("img", { src: thumb(colorImg(x.p, x.l.color)), alt: "", loading: "lazy" })),
          h("span", { className: "ord-it-t" }, h("button", { onClick: () => go("#/p/" + x.p.id) }, x.p.t),
            h("dl", { className: "ord-opts" },
              x.l.color ? h("div", null, h("dt", null, x.p.colors ? "Color" : "Format"), h("dd", null, x.l.color)) : null,
              x.l.imprint ? h("div", null, h("dt", null, "Personalization"), h("dd", null, "\u201c" + x.l.imprint.text + "\u201d")) : null,
              x.l.imprint ? h("div", null, h("dt", null, "Letter style"), h("dd", null, x.l.imprint.style)) : null,
              h("div", null, h("dt", null, "Quantity"), h("dd", null, String(x.l.q))),
              h("div", null, h("dt", null, "Price"), h("dd", null, money(x.p.price) + " each")))),
          h("span", { className: "ord-it-p" }, money(x.p.price * x.l.q)))))),
      h("div", { className: "subs-grid" },
        h(Card, { padding: "md", className: "ord-c" }, h("h2", { className: "subs-lab" }, "Delivery"),
          h("dl", { className: "ord-dl" },
            h("div", null, h("dt", null, "Ship to"), h("dd", null, o.to)),
            h("div", null, h("dt", null, "Method"), h("dd", null, o.method)),
            o.gift ? h("div", null, h("dt", null, "Gift"), h("dd", null, "Yes")) : null)),
        h(Card, { padding: "md", className: "ord-c" }, h("h2", { className: "subs-lab" }, "Payment"),
          h("dl", { className: "ord-dl" },
            h("div", null, h("dt", null, "Card"), h("dd", null, "Visa ending in " + o.last4)),
            h("div", null, h("dt", null, "Subtotal"), h("dd", null, money(sub))),
            disc > 0.005 ? h("div", null, h("dt", null, "Discount"), h("dd", null, "\u2212" + money(disc))) : null,
            h("div", null, h("dt", null, "Shipping"), h("dd", null, o.ship ? money(o.ship) : "Free")),
            h("div", { className: "grand" }, h("dt", null, o.stage === "cancelled" ? "Total (not charged)" : o.stage === "returned" ? "Total refunded" : "Total"), h("dd", null, money(o.total)))))));
  }

  function Orders({ id, user, go, onSignIn }) {
    const { Button } = window.DeseretBookDesignSystem_609afa;
    if (!user) return h("div", { className: "empty" },
      h(Ico, { name: "user", size: 28 }),
      h("h1", { style: { fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 } }, "Sign In to See Your Orders"),
      h("p", null, "Track shipments and review past orders from your account."),
      h(Button, { variant: "secondary", onClick: onSignIn }, "Sign in"));
    const list = allOrders();
    const sel = id ? list.find((o) => o.no === id) : null;
    if (id && sel) return h(OrderDetail, { o: sel, go });
    if (id) return h("div", { className: "empty" },
      h(Ico, { name: "shopping-bag", size: 28 }),
      h("h1", { style: { fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 } }, "Order Not Found"),
      h("p", null, "This order isn\u2019t on your account."),
      h(Button, { variant: "secondary", onClick: () => go("#/account/orders") }, "All orders"));
    return h("div", { className: "subs ord" },
      h("div", { className: "subs-h" }, h("span", { className: "subs-eb" }, "My Account"), h("h1", null, "Orders")),
      h("ul", { className: "ord-list" }, list.map((x) => h(OrderRow, { key: x.no + x.stage, o: x, go }))));
  }
  window.Orders = Orders;
})();
