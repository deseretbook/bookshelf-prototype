/* Footer sitemap feature pages: About, Events, Platinum Rewards, Purchase an eGift Card. Uses helpers from footer-pages.js (window.FP). */
(function () {
  const { h, DS, Shell, Sec, Ok, Field, Row, useForm, req, email, P } = window.FP;
  const { useState, useEffect } = React;
  const Pic = (src, alt, cls) => h("img", { className: "toh-img" + (cls ? " " + cls : ""), src, alt, loading: "lazy", decoding: "async" });
  const Ph = (label, cls) => h("div", { className: "fp-ph" + (cls ? " " + cls : ""), role: "img", "aria-label": label }, h("span", null, label));
  const top = () => { window.scrollTo(0, 0); };
  const lnk = (onGo, label, text) => h("a", { href: "#", onClick: (e) => { e.preventDefault(); onGo(label); } }, text || label);

  function About({ onGo, go }) {
    const { Button } = DS();
    useEffect(top, []);
    const T = [["1866", "George Q. Cannon and Sons Company opens at No. 6 South Main Street"], ["1901", "Becomes the Deseret News Bookstore"], ["1919", "Merges with the Deseret Sunday School Union bookstore as Deseret Book Company"], ["1999", "Bookcraft, Inc. joins and the publishing divisions combine"], ["2004", "Excel Entertainment Group joins the Deseret Book family"]];
    return h("main", { className: "fp fx-about", "data-screen-label": "About Deseret Book" },
      h("section", { className: "fa-hero" },
        h("div", { className: "fa-hero-t" },
          h("span", { className: "db-eyebrow fp-eb" }, "About"),
          h("h1", { className: "fp-h1" }, "About Our Company"),
          P("Since 1866, Deseret Book Company has been the market leader in providing content and lifestyle products to support members of The Church of Jesus Christ of Latter-day Saints through its retail and publishing imprints. Deseret Book is committed to creating and offering resources to build faith, strengthen families, and promote personal virtues."),
          P("Deseret Book\u2019s purpose is to provide quality products that build faith, strengthen homes and families, ennoble personal virtues, and offer practical advice to religious and non-religious alike.")),
        Ph("Photo: Deseret Book store", "tall")),
      h("section", { className: "fa-hist" },
        h("div", { className: "fa-hist-h" }, h("span", { className: "db-eyebrow fp-eb" }, "Since 1866"), h("h2", { className: "fp-h2" }, "Our History")),
        h("ol", { className: "fa-tl" }, T.map((t) => h("li", { key: t[0] }, h("span", { className: "fa-y" }, t[0]), h("span", null, t[1])))),
        h("div", { className: "fa-hist-b" },
          Ph("Archive photo: company history"),
          h("div", null,
            P("The company had its beginnings in 1866 when Elder George Q. Cannon, a member of the Quorum of the Twelve Apostles of The Church of Jesus Christ of Latter-day Saints, founded George Q. Cannon and Sons Company, which engaged in publishing and retail book sales. The business was located at No. 6 South Main Street in Salt Lake City. It remained at this location until 1901, when, on the death of Elder Cannon, it was purchased by the Deseret News and became the Deseret News Bookstore."),
            P("On October 1, 1919, the Deseret News Bookstore merged with the Deseret Sunday School Union bookstore and became Deseret Book Company, the name by which the organization is known today. In April of 1999, Deseret Management Corporation acquired Bookcraft, Inc., an independently owned publisher of LDS books and materials, and the publishing divisions of the two companies were combined. In late 2004, Excel Entertainment Group also joined the Deseret Book family, vastly expanding our ability to produce quality LDS music and media choices.")))),
      h("section", { className: "fa-mis" },
        h("h2", { className: "fp-h2" }, "Our Mission"),
        h("ul", { className: "fa-mis-g" }, [["People", "We are committed to giving excellent service to our customers, authors, and our owner. We value people and their accomplishments, and therefore commit to reward their efforts as members of the Deseret Book team."], ["Product", "We are committed to providing on a timely basis quality products, quality service, and fair prices."], ["Progress", "We are committed to expanding our line of products and services to meet the growing needs of our customers."], ["Position", "We are committed to maintaining a high level of professionalism and leadership in the bookselling industry and in the community."]].map((m) => h("li", { key: m[0] }, h("h3", { className: "fp-h3" }, m[0]), h("p", null, m[1]))))),
      h("section", { className: "fa-q" }, h("blockquote", null, "\u201cWe cultivate stories worth telling, questions worth exploring, and beauty worth sharing to improve the lives of all Latter-day Saints at every step of their journey.\u201d")),
      h("nav", { className: "fa-more", "aria-label": "More from Deseret Book" },
        [["Store Finder", () => go("#/stores")], ["Careers", () => onGo("Careers")], ["FAQs", () => onGo("Questions & Support")]].map((l) => h("button", { key: l[0], type: "button", onClick: l[1] }, h("span", null, l[0]), h(DS().Icon, { name: "arrow_forward", size: 20 })))));
  }

  const PAST = [["2023", ["A Deseret Book Christmas Concert", "A Deseret Book Pioneer Day Concert", "A Victorian Rendezvous with the Dread Penny Society", "Questions Worth Exploring: A New Speaker Series", "Abide with Me: Nathan Pacheco Album Release Concert", "Exploring Grace with Emily Belle Freeman"]], ["2022", ["A Pioneer Day Concert", "A Deseret Book Christmas Concert"]], ["2021", ["The Sessions Virtual Concert Series", "Once I Was Engaged Premiere", "First Light: Scenes from the Restoration", "His Name Is Green Flake", "Witnesses Q&A Event", "A Deseret Book Christmas Concert"]], ["2020", ["A Deseret Book Christmas Concert"]], ["2018", ["Jane and Emma Film Screening"]]];
  function Events({ onGo }) {
    const { Button } = DS();
    useEffect(top, []);
    const f = useForm({ first: "", last: "", email: "", zip: "" });
    return h("main", { className: "fp fx-ev", "data-screen-label": "Events" },
      h("section", { className: "fe-hero" },
        h("span", { className: "db-eyebrow fp-eb" }, "Deseret Book Presents"),
        h("h1", { className: "fp-h1" }, "Deseret Book brings your favorite Latter-day Saint speakers and performers to stage."),
        h("p", { className: "fp-lede" }, "Come explore gospel insights and delight in powerful music at an upcoming event."),
        Ph("Photo: Deseret Book Presents event on stage", "wide")),
      h("section", { className: "fe-up" },
        h("div", null, h("h2", { className: "fp-h2" }, "Upcoming Events"), P("More events coming soon! Be sure to follow Deseret Book on social media or sign up below for email reminders to stay up-to-date on new events.")),
        h("ul", { className: "fe-cards" },
          h("li", null, Ph("Photo: Time Out for Women"), h("div", { className: "fe-card-b" }, h("h3", { className: "fp-h3" }, "Time Out for Women"), h(Button, { variant: "secondary", size: "sm", href: "https://www.tofw.com", target: "_blank", rel: "noopener", iconAfter: "open_in_new" }, "See dates"))),
          h("li", null, Ph("Photo: in-store event"), h("div", { className: "fe-card-b" }, h("h3", { className: "fp-h3" }, "Events at Deseret Book Stores"), h(Button, { variant: "secondary", size: "sm", href: "https://www.deseretbook.com/events.html", target: "_blank", rel: "noopener", iconAfter: "open_in_new" }, "Check out upcoming events"))))),
      h("section", { className: "fe-dig" },
        h("h2", { className: "fp-h2" }, "Digital Events"),
        h("ul", { className: "fp-links" }, ["A Pioneer Day Concert 2024", "Questions Worth Exploring", "Time Out for Women: Glorious Light Tour", "Exploring Grace"].map((t) => h("li", { key: t }, h("a", { href: "https://www.deseretbookpresents.com/digital-events", target: "_blank", rel: "noopener" }, h("span", null, t), h(DS().Icon, { name: "play_circle", size: 20 }))))),
        h("p", { className: "fp-meta" }, "More digital event products are on the way. Check back often for new releases.")),
      h("section", { className: "fe-past" },
        h("h2", { className: "fp-h2" }, "Past Events"),
        h("dl", { className: "fe-years" }, PAST.map((y) => h("div", { key: y[0] }, h("dt", null, y[0]), h("dd", null, h("ul", null, y[1].map((t) => h("li", { key: t }, t)))))))),
      h("section", { className: "fe-join", id: "events-email" },
        h("div", null, h("h2", { className: "fp-h2" }, "Join the Deseret Book Presents Email List"), P("Get reminders when new events are announced.")),
        f.done ? h(Ok, { title: "You\u2019re on the list", again: "Add another email", onAgain: f.reset }, h("p", null, "We\u2019ll send event news to " + f.v.email.trim() + ".")) :
        h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ first: req("Enter your first name."), last: req("Enter your last name."), email, zip: (x) => !/^\d{5}$/.test(String(x).trim()) ? "Enter a 5-digit ZIP code." : null }) },
          h(Row, null, h(Field, { label: "First name", value: f.v.first, onChange: f.set("first"), error: f.e.first, autoComplete: "given-name" }), h(Field, { label: "Last name", value: f.v.last, onChange: f.set("last"), error: f.e.last, autoComplete: "family-name" })),
          h(Row, null, h(Field, { label: "Email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" }), h(Field, { label: "ZIP code", inputMode: "numeric", value: f.v.zip, onChange: f.set("zip"), error: f.e.zip, autoComplete: "postal-code" })),
          h("p", { className: "fp-meta" }, "By submitting, you agree to the ", lnk(onGo, "Terms of Use", "terms and conditions"), "."),
          h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Sign up")))));
  }

  function Platinum({ go }) {
    const { Button, Icon } = DS();
    useEffect(top, []);
    const join = () => go("#/account/subscriptions/platinum-rewards");
    const B = [["percent", "10% Back In Points", "Earn 10% back in points on most purchases, including your first purchase. Get 100 points for $10.00 spent. Some exclusions apply, see our FAQs for details."], ["redeem", "Choose Your Rewards", "Redeem your points for free products or discounts. Save and redeem points for free products or money off your purchases."], ["sell", "Exclusive Offers", "Platinum members receive exclusive discounts and offers throughout the year."]];
    return h("main", { className: "fp fx-pl", "data-screen-label": "Platinum Rewards" },
      h("section", { className: "fpl-hero" },
        h("div", { className: "fpl-hero-t" },
          h("span", { className: "db-eyebrow fp-eb" }, "Account"),
          h("h1", { className: "fp-h1" }, "Platinum Rewards"),
          h("p", { className: "fp-lede" }, "Get points on purchases and exclusive discounts, including a discount on a Bookshelf+ subscription and more. Start your membership today!"),
          h("div", { className: "fp-acts" }, h(Button, { size: "lg", onClick: join }, "Start now"), h("span", { className: "fp-meta" }, "$25 per year. Cancel anytime."))),
        Ph("Image: Platinum Rewards membership", "sq")),
      h("section", { className: "fpl-ben" },
        h("h2", { className: "fp-h2" }, "Sign Up and Take Advantage of These Great Benefits"),
        h("ul", { className: "fpl-g3" }, B.map((b) => h("li", { key: b[1] }, h("span", { className: "fpl-ic" }, Icon ? h(Icon, { name: b[0], size: 24 }) : null), h("h3", { className: "fp-h3" }, b[1]), h("p", null, b[2]))))),
      h("section", { className: "fpl-inc" },
        h("h2", { className: "fp-h2" }, "Also Included"),
        h("ul", { className: "fpl-g2" },
          h("li", null, h("h3", { className: "fp-h3" }, "Discount on Bookshelf+"), P("Save when you subscribe to Bookshelf+. Learn more about discounts when you bundle Platinum with Bookshelf+ and other Deseret Book subscription services."), h(Button, { variant: "secondary", size: "md", onClick: () => go("#/bookshelf-plus") }, "Explore Bookshelf+")),
          h("li", null, h("h3", { className: "fp-h3" }, "LDS Living Magazine"), P("Receive a one-year subscription to LDS Living magazine. Depending on your membership join date, expect your first magazine to arrive within 30\u201345 days."), h(Button, { variant: "secondary", size: "md", href: "https://www.deseretbook.com/subscription/?pn=LDS-Living", target: "_blank", rel: "noopener", iconAfter: "open_in_new" }, "Learn more")))),
      h("section", { className: "fpl-cta" },
        h("h2", { className: "fp-h2" }, "Ready to Get Started?"),
        P("$25 per year annual subscription. Cancel anytime."),
        h(Button, { size: "lg", onClick: join }, "Sign up now")));
  }

  const AMTS = [10, 25, 50, 100];
  function EGift({ onGo, flash }) {
    const { Button } = DS();
    useEffect(top, []);
    const f = useForm({ from: "", to: "", toEmail: "", toEmail2: "", msg: "", amt: 25, other: "" });
    const amount = f.v.amt === "other" ? Number(String(f.v.other).replace(/[^0-9.]/g, "")) || 0 : f.v.amt;
    const money = (n) => "$" + (Math.round(n * 100) / 100).toFixed(2);
    const rules = { from: req("Enter your name."), to: req("Enter your friend\u2019s name."), toEmail: email, toEmail2: (x, v) => !x || !x.trim() ? "Confirm your friend\u2019s email." : x.trim().toLowerCase() !== v.toEmail.trim().toLowerCase() ? "The emails don\u2019t match." : null, other: (x, v) => v.amt === "other" && !(amount >= 10 && amount <= 500) ? "Enter an amount from $10 to $500." : null };
    const ok = () => { flash && flash("eGift card added to your cart"); };
    return h("main", { className: "fp fx-eg", "data-screen-label": "Purchase an eGift Card" },
      h("header", { className: "fp-hd" }, h("span", { className: "db-eyebrow fp-eb" }, "Account"), h("h1", { className: "fp-h1" }, "Purchase an eGift Card"), h("p", { className: "fp-lede" }, "Send a Deseret Book eGift card by email, in any amount from $10 to $500.")),
      h("div", { className: "feg-grid" },
        h("div", { className: "feg-prev" },
          h("div", { className: "feg-card", "aria-hidden": "true" },
            h("span", { className: "feg-wm" }, "Deseret Book"),
            h("span", { className: "feg-amt" }, amount ? money(amount) : "$0.00"),
            h("span", { className: "feg-to" }, "For " + (f.v.to.trim() || "your friend") + (f.v.from.trim() ? ", from " + f.v.from.trim() : ""))),
          f.v.msg.trim() ? h("p", { className: "feg-msg" }, "\u201c" + f.v.msg.trim() + "\u201d") : null,
          h("p", { className: "fp-meta" }, "Gift Cards (egift cards or physical gift cards) are not returnable/refundable.")),
        f.done ? h(Ok, { title: "Added to your cart", again: "Send another eGift card", onAgain: f.reset }, h("p", null, money(amount) + " eGift card for " + f.v.to.trim() + ". It will be emailed to " + f.v.toEmail.trim() + " after checkout.")) :
        h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit(rules, ok) },
          h("fieldset", { className: "fp-fs" }, h("legend", null, "Amount"),
            h("div", { className: "feg-amts", role: "radiogroup", "aria-label": "Amount" },
              AMTS.map((a) => h(Button, { key: a, variant: f.v.amt === a ? "dark" : "secondary", size: "md", role: "radio", "aria-checked": f.v.amt === a, onClick: () => f.set("amt")(a) }, "$" + a)),
              h(Button, { variant: f.v.amt === "other" ? "dark" : "secondary", size: "md", role: "radio", "aria-checked": f.v.amt === "other", onClick: () => f.set("amt")("other") }, "Other")),
            f.v.amt === "other" ? h(Row, null, h(Field, { label: "Amount ($10\u2013$500)", inputMode: "decimal", value: f.v.other, onChange: f.set("other"), error: f.e.other }), h("span")) : null),
          h(Field, { label: "Your name", value: f.v.from, onChange: f.set("from"), error: f.e.from, autoComplete: "name" }),
          h(Field, { label: "Friend\u2019s name", value: f.v.to, onChange: f.set("to"), error: f.e.to }),
          h(Row, null, h(Field, { label: "Friend\u2019s email", type: "email", value: f.v.toEmail, onChange: f.set("toEmail"), error: f.e.toEmail }), h(Field, { label: "Confirm friend\u2019s email", type: "email", value: f.v.toEmail2, onChange: f.set("toEmail2"), error: f.e.toEmail2 })),
          h(Field, { label: "Message (optional)", multiline: true, rows: 4, maxLength: 200, value: f.v.msg, onChange: f.set("msg"), hint: f.v.msg.length + "/200" }),
          h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Add to cart \u00b7 " + (amount ? money(amount) : "$0.00"))))));
  }


  /* ---------- Temple Open House (DBD-43): the online version of the flagship "Look Again" experience ---------- */
  function TempleOpenHouse({ onGo, go }) {
    const { Button, Icon, Card, Tag } = DS();
    useEffect(top, []);
    const D = window.DB_DATA || { inCat: () => [], featuredContent: [] };
    const cat = (id, a, b) => { try { return D.inCat(id).slice(a, b); } catch (e) { return []; } };
    const th = (u) => (typeof thumb === "function" ? thumb(u) : u);
    const f = useForm({ email: "" });
    const art = cat("art_savior-art", 0, 4), know = cat("books_gospel-voices", 0, 4), live = cat("books_gospel-voices", 4, 8);
    const posts = D.featuredContent || [];
    /* Book covers come as squares with white side margins: clip the image to the cover's own edges so the small corner radius lands on the cover, not the margins. */
    const coverClip = (el) => {
      if (!el) return;
      const fit = () => { try {
        const S = 500, c = document.createElement("canvas"); c.width = S; c.height = S;
        const x = c.getContext("2d", { willReadFrequently: true }); x.drawImage(el, 0, 0, S, S);
        const d = x.getImageData(0, 0, S, S).data, col = new Array(S).fill(0), row = new Array(S).fill(0);
        for (let y = 0; y < S; y++) for (let i = 0; i < S; i++) { const k = (y * S + i) * 4; if (d[k + 3] > 20 && (d[k] < 240 || d[k + 1] < 240 || d[k + 2] < 240)) { col[i]++; row[y]++; } }
        /* Two readings of each edge: loose (a few cover pixels on the line) and firm (15% of the line). Firm ignores shadows, JPEG fringe and specks; loose is for light covers whose edge lines are mostly pale. Use firm unless loose sits clearly further out (more than 2%), then shave 2px (of 500) of anti-aliased fringe. */
        const idx = (a, n, rev) => { if (rev) { for (let i = a.length - 1; i >= 0; i--) if (a[i] >= n) return i; return -1; } return a.findIndex((v) => v >= n); };
        const pick = (a, rev) => { const f = idx(a, S * 0.15, rev), lo = idx(a, 3, rev); return (rev ? lo - f : f - lo) > S * 0.02 ? lo : f; };
        const SH = 2, l = pick(col, false) + SH, r = pick(col, true) - SH, t = pick(row, false) + SH, b = pick(row, true) - SH;
        if (l < SH || r < 0 || t < SH || b < 0 || r <= l || b <= t) return;
        const pc = (n) => (Math.round(n * 1000) / 10) + "%";
        el.style.clipPath = "inset(" + pc(t / S) + " " + pc((S - 1 - r) / S) + " " + pc((S - 1 - b) / S) + " " + pc(l / S) + " round var(--db-radius-sm))";
        if (el.parentElement && el.parentElement.classList.contains("toh-cv")) el.style.transform = "translate(" + (-Math.round(l / S * 1000) / 10) + "%," + (Math.round((S - 1 - b) / S * 1000) / 10) + "%)";   /* the cover's left edge sits on the text edge */
      } catch (e) {} };
      if (el.complete && el.naturalWidth) fit(); else el.addEventListener("load", fit, { once: true });
    };
    const tile = (p, books) => h("li", { key: p.id }, h("a", { className: "toh-pt", href: "#/p/" + p.id, onClick: (e) => { e.preventDefault(); go("#/p/" + p.id); } },
      h("span", { className: "toh-pi" }, p.img && p.img[0] ? (() => { const im = h("img", { src: th(p.img[0]), alt: "", loading: "lazy", decoding: "async", ref: books ? coverClip : undefined }); return books ? h("span", { className: "toh-cv" }, im) : im; })() : null),
      h("span", { className: "toh-pn" }, p.t),
      h("span", { className: "toh-pg" }, h("span", { className: "ul-t" }, "View details"), h(Icon, { name: "arrow_forward", size: 18 }))));
    const prods = (list, cls) => list.length ? h("ul", { className: "toh-pl" + (cls ? " " + cls : ""), "aria-label": "Featured products" }, list.map((p) => tile(p, cls === "toh-books"))) : null;
    const railImgs = { 0: ["storefront", "wall", "still-a"], 1: ["still-c", "still-d", "still-b"], 2: ["world-sees-him", "still-e", "still-f"] };
    const rail = (label, off) => posts.length ? h("ul", { className: "toh-rail", "aria-label": label }, posts.map((_, i) => posts[(i + off) % posts.length]).map((a, i) => h("li", { key: i },
      h("a", { className: "toh-art", href: a.url, target: "_blank", rel: "noopener" },
        h("span", { className: "toh-ai" }, a.img ? h("img", { src: railImgs[off] && railImgs[off][i % 3] ? "assets/img/toh/" + railImgs[off][i % 3] + ".jpg" : a.img, alt: "", loading: "lazy", decoding: "async" }) : null),
        h("span", { className: "toh-ad" }, a.date),
        h("span", { className: "toh-at" }, a.title))))) : null;
    const hd = (eb, t, sub) => h("div", { className: "toh-hd" }, h("span", { className: "db-eyebrow fp-eb" }, eb), h("h2", { className: "fp-h2" }, t), sub ? h("p", { className: "toh-sub" }, sub) : null);
    const pillar = (n, t, sub) => h("div", { className: "toh-hd toh-pillar" }, h("span", { className: "toh-n", "aria-hidden": "true" }, n), h("h2", { className: "fp-h2" }, t), h("p", { className: "toh-sub" }, sub));
    const ext = (href, t) => h("a", { href, target: "_blank", rel: "noopener" }, h("span", { className: "ul-t" }, t));
    /* A sticky note is a real 3D object: fourteen strips, each hinged to the one above, each carrying its slice of the text. At rest they lie flat and read as one note; on hover they turn a little more
       than the strip above, so the whole note bows toward you from the tape down (css/footer-pages.css). The real text stays for screen readers and for the flat state. */
    // Each note is a static top (one element, never curls) plus thin hinged strips only where the paper can bend: 14 elements instead of 36.
    const NSTRIP = 28, NBASE = 14, NSHINE = 22;
    const noteStrips = () => { let el = null; for (let k = NSTRIP - 1; k >= NBASE; k--) el = h("i", { className: k >= NSHINE ? "s sh" : "s", style: { "--j": k }, "aria-hidden": "true" }, el); return h("i", { className: "s b", style: { "--j": 0 }, "aria-hidden": "true" }, el); };
    // The breeze only runs on notes that are on screen (the rest stay paused), so it costs nothing while you read elsewhere on the page.
    const wallRef = (el) => {
      if (wallRef.io) { wallRef.io.disconnect(); wallRef.io = null; }
      if (!el) return;
      const lis = el.querySelectorAll("li");
      if (!("IntersectionObserver" in window)) { lis.forEach((l) => l.classList.add("live")); return; }
      const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("live", e.isIntersecting)), { rootMargin: "60px" });
      lis.forEach((l) => io.observe(l));
      wallRef.io = io;
    };
    const artists = [["Greg Olsen", "greg-olsen"], ["Kate Lee", "kate-lee"], ["Robert Boyd", "robert-boyd"], ["Simon Dewey", "simon-dewey"], ["Yongsung Kim", "yongsung-kim"]];
    /* Sample sticky notes from the "How do you see Him?" wall: [text, color]. Colors: 0 navy, 1 pink, 2 yellow, 3 orange, 4 cream. */
    const notes = [["Kind", 1], ["Present in the ordinary", 4], ["Love", 2], ["Hope", 3], ["A friend", 0], ["Always with me", 0], ["Faithful always", 4], ["He makes all things new", 0], ["Jesus is Love", 1], ["My Savior", 3], ["Peace", 1], ["A good Father", 4], ["Gentle and strong", 2], ["He knows my name", 4], ["Light in the darkness", 1], ["Grace", 4], ["You are enough", 0], ["My refuge", 2], ["Real", 0], ["The Way", 2], ["He sees me.", 0], ["He listens", 2], ["My King", 1], ["For everyone", 1], ["Patient with me", 1], ["Love without limits", 1], ["Healer", 4], ["Hope", 3], ["Mercy", 4], ["A better story", 2]];
    /* The art wall: framed art from the store hung like a salon wall (trimmed product photos in assets/img/wall, true proportions): [id, width, height].
       The hang is worked out for the width of the wall: many seeded trials of sizes and order are packed into the space, and the tightest hang wins,
       so it always fits closely but never looks gridded. Each piece links to its product page; Shop appears on hover or focus. */
    const WALL = [["6087324", 711, 843], ["6081210", 900, 614], ["6053281", 899, 900], ["6096538", 536, 891], ["6070661", 880, 700], ["6027923", 900, 759], ["6086439", 900, 675], ["6027513", 760, 900], ["6097141", 651, 849], ["6075171", 621, 623], ["6096539", 532, 890], ["5098123", 506, 848], ["6097136", 727, 862], ["5161060", 779, 900], ["6097139", 650, 848], ["5166285", 674, 900]];
    const rng = (a) => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let x = Math.imul(a ^ a >>> 15, 1 | a); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; };
    const hangCache = {};
    const hang = (items, W) => {
      const key = W + ":" + items.length; if (hangCache[key]) return hangCache[key];
      const cols = W >= 1024 ? 5.2 : W >= 640 ? 3.8 : 2.1, gap = W >= 1024 ? 18 : W >= 640 ? 14 : 10, U = 6, N = Math.floor(W / U), bw = (W - gap * (cols - 1)) / cols;
      const SC = [0.6, 0.72, 0.84, 0.96, 1.08, 1.22, 1.4], R = rng(W * 31 + items.length);
      let best = null;
      for (let tr = 0; tr < 900; tr++) {
        const ps = items.map((it, i) => { const asp = it.w / it.h, sc = SC[Math.floor(R() * SC.length)], w = Math.min(W * (W < 640 ? 0.55 : 0.46), Math.round(bw * sc * Math.sqrt(asp))), im = Math.round(w / asp), cap = Math.ceil(it.cl * 7 / w) * 16 + (it.by ? 15 : 0) + 10; return { i, w, asp, cap, cl: it.cl, by: it.by, h: im + cap, im, wu: Math.ceil((w + gap) / U), k: (im + cap) * (0.55 + R() * 0.9) }; });
        ps.sort((x, y) => y.k - x.k);
        const sky = new Array(N).fill(0); let area = 0;
        for (const p of ps) {
          let by = 1e9, bx = 0; const wu = Math.min(p.wu, N);
          for (let x = 0; x + wu <= N; x++) { let m = 0; for (let j = x; j < x + wu; j++) if (sky[j] > m) m = sky[j]; const y = m + x * 0.015; if (y < by) { by = y; bx = x; } }
          let m = 0; for (let j = bx; j < bx + wu; j++) if (sky[j] > m) m = sky[j];
          p.x = bx * U; p.y = m; for (let j = bx; j < bx + wu; j++) sky[j] = m + p.h + gap; area += p.w * p.h;
        }
        const H = Math.max(...sky) - gap, right = Math.max(...ps.map((p) => p.x + p.w)), rag = sky.reduce((s, v) => s + (H + gap - v), 0) / N / H;
        const score = (1 - area / (right * H)) + rag * 0.6 + Math.abs(right - W) / W * 0.8;
        if (!best || score < best.score) best = { score, ps, H, right };
      }
      /* Settle: any piece that has room beside or below it grows until it nearly touches its neighbours, so no gap is left that a frame could fill. */
      const P = best.ps, hit = (a, b) => a.x < b.x + b.w + gap && b.x < a.x + a.w + gap && a.y < b.y + b.h + gap && b.y < a.y + a.h + gap;
      const free = (q, p) => q.x >= 0 && q.y >= 0 && q.x + q.w <= W && !P.some((o) => o !== p && hit(q, o));
      for (let round = 0; round < 4; round++) {
        for (let pass = 0; pass < 30; pass++) { let moved = false;           // gravity: slide each piece up, then left, until it rests on a neighbour
          for (const p of [...P].sort((a, b) => a.y - b.y || a.x - b.x)) {
            for (let s = 24; s >= 1; s = s >> 1) { while (free({ x: p.x, y: p.y - s, w: p.w, h: p.h }, p)) { p.y -= s; moved = true; } while (free({ x: p.x - s, y: p.y, w: p.w, h: p.h }, p)) { p.x -= s; moved = true; } } }
          if (!moved) break; }
        let grew = false;
        for (let pass = 0; pass < 40; pass++) { let g = false;                 // growth: any piece with room beside or below it swells until it nearly touches its neighbours
          for (const p of P) { const w2 = Math.round(p.w * 1.03) + 1, im2 = Math.round(w2 / p.asp), cap2 = Math.ceil(p.cl * 7 / w2) * 16 + (p.by ? 15 : 0) + 10, q = { x: p.x, y: p.y, w: w2, h: im2 + cap2 };
            if (q.w > W * (W < 640 ? 0.58 : 0.5) || !free(q, p)) continue;
            p.w = w2; p.im = im2; p.h = im2 + cap2; g = true; grew = true; }
          if (!g) break; }
        if (!grew && round) break; }
      best.H = Math.max(...P.map((p) => p.y + p.h)); best.right = Math.max(...P.map((p) => p.x + p.w));
      const off = Math.max(0, Math.floor((W - best.right) / 2)), J = rng(W + 7);
      best.ps.forEach((p) => { p.x += off + Math.round((J() - 0.5) * 6); p.y += Math.round((J() - 0.5) * 6); if (p.x < 0) p.x = 0; if (p.x + p.w > W) p.x = W - p.w; if (p.y < 0) p.y = 0; });
      return hangCache[key] = best;
    };
    const wallArt = (ul) => {
      if (!ul) return;
      const items = WALL.map(([id, w, ht]) => ({ w, h: ht, cl: 20, by: false })), lis = ul.children;
      const D0 = window.DB_DATA; WALL.forEach(([id], i) => { const p = D0 && D0.byId(id); if (p) { items[i].cl = p.t.replace(/\s*\([^)]*\)\s*$/, "").length; items[i].by = !!(p.by && !/^(Deseret Book|Various)$/i.test(p.by)); } });
      const run = () => { const W = Math.round(ul.clientWidth); if (!W || ul.dataset.w === String(W)) return; ul.dataset.w = W; const r = hang(items, W);
        r.ps.forEach((p) => { const li = lis[p.i]; if (!li) return; li.style.left = p.x + "px"; li.style.top = p.y + "px"; li.style.width = p.w + "px"; });
        ul.style.height = Math.ceil(r.H + 8) + "px"; ul.classList.add("is-hung"); };
      run();
      if (wallArt.ro) wallArt.ro.disconnect();
      if (window.ResizeObserver) { let tm; wallArt.ro = new ResizeObserver(() => { clearTimeout(tm); tm = setTimeout(run, 120); }); wallArt.ro.observe(ul); }
    };
    const artWall = () => {
      const pieces = WALL.map(([id, w, ht]) => { const p = D.byId(id); return p ? { p, w, ht } : null; }).filter(Boolean);
      if (!pieces.length) return null;
      const ini = (n) => n.split(" ").map((w) => w[0]).join("");
      const meet = h("div", { className: "tx-meet" },
        h("div", { className: "tx-bh" }, h("span", { className: "db-eyebrow fp-eb" }, "Meet the artists"), h("h2", { className: "fp-h2" }, "Five artists from the gallery")),
        h("ul", { className: "tx-artists" }, artists.map(([n, sl], i) => h("li", { key: sl },
          h("a", { href: "#/c/featured-authors-artists_" + sl, onClick: (e) => { e.preventDefault(); go("#/c/featured-authors-artists_" + sl); } },
            h("span", { className: "tx-av", role: "img", "aria-label": "Placeholder profile photo of " + n }, ini(n)),
            h("span", { className: "toh-an" }, n))))));
      return h("section", { className: "toh-gw-sec", "aria-label": "Art from the store" },
        h("ul", { className: "toh-gw", ref: wallArt }, pieces.map(({ p, w, ht }) => {
          const name = p.t.replace(/\s*\([^)]*\)\s*$/, ""), by = p.by && !/^(Deseret Book|Various)$/i.test(p.by) ? p.by.replace(/^([^,]+),\s*(.+)$/, "$2 $1") : "";
          return h("li", { key: p.id, className: "toh-gp" },
            h("a", { href: "#/p/" + p.id, onClick: (e) => { e.preventDefault(); go("#/p/" + p.id); } },
              h("span", { className: "toh-gf" }, h("img", { src: "assets/img/wall/" + p.id + ".jpg", width: w, height: ht, alt: name + (by ? ", " + by : ""), loading: "lazy", decoding: "async" })),
              h("span", { className: "toh-gc" },
                h("span", { className: "toh-gl" },
                  h("span", { className: "toh-gn" }, name),
                  by ? h("span", { className: "toh-gb" }, by) : null),
                h("span", { className: "toh-gs" }, h("span", { className: "ul-t" }, "Shop")))));
        })),
        meet);
    };
    /* ---- Bolder layout: mixed-width splits, big imagery and video. Imagery that does not exist yet is mocked and labelled so Ecomm can request the photography. ---- */
    const Mock = (label, cls, kids) => h("div", { className: "tx-mock " + (cls || ""), role: "img", "aria-label": "Placeholder image: " + label }, kids || null, h("span", { className: "tx-chip" }, "Mock · " + label));
    const vidRef = (el) => {
      if (!el) return;
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.muted = true;
      if (reduce) { el.removeAttribute("autoplay"); el.pause(); return; }
      if (el._io) return;
      if (!("IntersectionObserver" in window)) { el.play().catch(() => {}); return; }
      el._io = new IntersectionObserver((es) => es.forEach((e) => { if (el.dataset.live === "1") return; if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); }), { threshold: 0.15 });
      el._io.observe(el);
    };
    const Vid = (name, poster, label) => h("video", { className: "tx-v", ref: vidRef, muted: true, loop: true, playsInline: true, autoPlay: true, preload: "metadata", poster, "aria-label": label },
      h("source", { src: "assets/video/" + name + ".webm", type: "video/webm" }), h("source", { src: "assets/video/" + name + ".mp4", type: "video/mp4" }));
    const watch = (e) => { const box = e.currentTarget.closest(".tx-player"), v = box && box.querySelector("video"); if (!v) return; v.dataset.live = "1"; v.muted = false; v.controls = true; v.currentTime = 0; v.play().catch(() => {}); box.classList.add("is-on"); };
    const Player = (name, poster, label, title, len, cls) => h("div", { className: "tx-player" + (cls ? " " + cls : "") }, h("div", { className: "tx-pv" }, Vid(name, poster, label)),
      h("button", { type: "button", className: "tx-play", onClick: watch, "aria-label": "Play " + title }, h("span", { className: "tx-play-i" }, h("span", { className: "tx-tri", "aria-hidden": "true" })), h("span", { className: "tx-play-t" }, h("b", null, title), h("small", null, "Watch · " + len))),
      h("span", { className: "tx-chip" }, "Mock video"));
    const head = (n, t, sub, cls) => h("div", { className: "tx-head " + (cls || "") }, h("span", { className: "tx-n", "aria-hidden": "true" }, n), h("div", null, h("h2", { className: "fp-h2" }, t), h("p", { className: "tx-sub" }, sub)));
    const arts3 = (label, off) => posts.length ? h("ul", { className: "tx-arts", "aria-label": label }, [0, 1, 2].map((i) => posts[(i + off) % posts.length]).map((a, i) => h("li", { key: i, className: "tx-a" + i },
      h("a", { className: "toh-art", href: a.url, target: "_blank", rel: "noopener" },
        h("span", { className: "tx-ai" }, a.img ? h("img", { src: a.img, alt: "", loading: "lazy", decoding: "async" }) : null),
        h("span", { className: "toh-ad" }, a.date),
        h("span", { className: "toh-at" }, a.title))))) : null;
    const shelf = (list, cls) => list.length ? h("ul", { className: "toh-pl tx-shelf" + (cls ? " " + cls : ""), "aria-label": "Featured products" }, list.map((p) => tile(p, cls && cls.indexOf("toh-books") >= 0))) : null;
    const rays = h("span", { className: "tx-rays", "aria-hidden": "true" });
    const TSQ = [["Tabernacle Dome presentations", "A Christ-centered show of light, music and imagery in the Salt Lake Tabernacle.", "auto_awesome"], ["Joseph Smith Memorial Building", "Experiences for children and families about the life and mission of Jesus Christ.", "family_restroom"], ["Music and performances", "Free live music in venues across Temple Square.", "music_note"], ["Church History Museum", "Family-friendly exhibits and art, including the Extraordinary Women exhibit.", "museum"], ["Temple Square Visitors’ Center", "Displays on Jesus Christ and the temple experience. Reservations are recommended.", "info"], ["The Temple Square app", "Maps, schedules and tickets on site.", "smartphone"]];
    const VOICES = [["Steve Young", "a"], ["Sharon Eubank", "b"], ["Camille Fronk Olson", "c"], ["Thomas Griffith", "d"]];
    const CATS = [["temple-worship_temple-clothing", "Clothing"], ["temple-worship_temple-bags", "Bags"], ["temple-worship_temple-accessories", "Accessories"], ["books_gospel-voices_temple-books", "Books"]];
    return h("main", { className: "fp fx-toh", "data-screen-label": "Temple Open House" },
      h("section", { className: "tx-hero" },
        h("div", { className: "tx-hero-bg", "aria-hidden": "true" }, Vid("hero-reel", "assets/img/toh/world-sees-him.jpg", "")),
        h("div", { className: "tx-hero-t" },
          h("span", { className: "db-eyebrow fp-eb" }, "Salt Lake Temple Open House · April 5 – October 1, 2027"),
          h("h1", { className: "fp-h1" }, h("span", { className: "toh-ln" }, "See Him. Know Him."), " ", h("span", { className: "toh-ln" }, "Live Like Him.")),
          h("p", { className: "fp-lede" }, "Let this moment draw you closer to Christ. Explore the art and stories from our flagship store experience, wherever you are."),
          h("div", { className: "fp-acts" }, h(Button, { size: "md", onClick: () => { const el = document.getElementById("toh-see"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, "Experience now"))),
        h("span", { className: "tx-chip tx-chip-br" }, "Mock video · hero reel")),
      artWall(),
      h("section", { className: "tx-tie" },
        h("div", { className: "tx-tie-l" }, h("span", { className: "db-eyebrow fp-eb" }, "The celebration"), h("h2", { className: "fp-h2" }, "The Salt Lake Temple Celebration"), P("The Salt Lake Temple reopens after years of renovation, and all of Temple Square is part of the celebration. From April 5 to October 1, 2027, there are events, exhibits and experiences on the Square and online, all inviting people to come closer to Jesus Christ.")),
        h("aside", { className: "tx-tie-r" }, h("span", { className: "tx-date" }, "Apr 5 – Oct 1"), h("span", { className: "tx-year" }, "2027"), h("p", null, "On Temple Square and online."), h(Button, { variant: "secondary", size: "md", href: "https://www.templesquare.org/eng/home", target: "_blank", rel: "noopener", iconAfter: "open_in_new" }, "Visit templesquare.org"))),

      h("section", { className: "tx-sec tx-p1", id: "toh-see" },
        h("div", { className: "tx-split tx-split-73" },
          h("figure", { className: "tx-fig" }, Pic("assets/img/toh/world-sees-him.jpg", "The How the World Sees Him gallery in the Deseret Book flagship store, with a family looking at framed Christ art"), h("figcaption", null, "How the World Sees Him, in our flagship gallery")),
          h("div", { className: "tx-side" }, head("1", "See Him", "Art that keeps Christ visible. Each piece shows the Savior as many people see Him."),
            h("div", { className: "tx-note" }, h("h3", { className: "fp-h4" }, "How the World Sees Him"), P("A look at the inclusive Christ art in our flagship gallery, with prints ($12) and postcards ($3) you can take home.")))),
        arts3("See Him articles", 0)),

      h("section", { className: "toh-sec" },
        hd("How do you see Him?", "From the wall at our flagship store", "A curated set of sample notes. The final set comes from Content."),
        h("ul", { className: "toh-wall", ref: wallRef }, notes.map((n, i) => h("li", { key: i, className: "w" + n[1] }, h("span", { className: "tx" }, n[0]), noteStrips())))),

      h("section", { className: "tx-sec tx-guide" },
        h("div", { className: "tx-split tx-split-37" },
          h(Card, { className: "toh-dl tx-dl", bordered: false, padding: "none" }, h("div", null, h("h3", { className: "fp-h4" }, "Family Discussion Guide"), P("A free download with questions to talk about together as you look at the art.")), h(Button, { variant: "secondary", size: "md", icon: "download", onClick: () => {} }, "Download the guide")),
          Mock("Family around the art, flagship store", "tx-m-fam", [rays, ...["6097136:fa", "6053281:fb", "6096539:fc", "6075171:fd"].map((s) => { const [id, k] = s.split(":"); return h("img", { key: id, className: "tx-fr tx-" + k, src: "assets/img/wall/" + id + ".jpg", alt: "", loading: "lazy", decoding: "async" }); }), h("span", { className: "tx-bench", "aria-hidden": "true" })]))),

      h("section", { className: "tx-sec tx-dark tx-p2" },
        h("div", { className: "tx-split tx-split-46" },
          h("div", { className: "tx-side" }, head("2", "Know Him", "Learning that deepens understanding.")),
          h("figure", { className: "toh-quote tx-quote" }, h("blockquote", null, "Quote from President D. Todd Christofferson, to be supplied by Content."), h("figcaption", null, "President D. Todd Christofferson"))),
        h("div", { className: "tx-split tx-split-64" },
          Mock("Books on the table, morning light", "tx-m-book", know.slice(0, 3).map((p, i) => p.img && p.img[0] ? h("img", { key: p.id, className: "tx-bk tx-bk" + i, src: th(p.img[0]), alt: "", loading: "lazy", decoding: "async", ref: coverClip }) : null)),
          h("div", { className: "tx-stack" }, arts3("Know Him articles", 1))),
        shelf(know, "toh-books")),

      h("section", { className: "tx-sec tx-p3" },
        head("3", "Live Like Him", "Everyday faith."),
        Player("conv-reel", "assets/img/toh/conversations.jpg", "DB Conversations trailer, a preview loop", "DB Conversations", "2:14", "tx-player-w"),
        h("div", { className: "tx-split tx-split-37 tx-conv" },
          h("div", { className: "tx-note" }, h("h3", { className: "fp-h4" }, "DB Conversations"), P("Real conversations about what faith looks like in ordinary days.")),
          h("ul", { className: "tx-pl", "aria-label": "More conversations" }, [["still-a", "Steve Young", "12 min"], ["still-c", "Sharon Eubank", "9 min"], ["still-f", "Camille Fronk Olson", "14 min"]].map(([im, n, len]) => h("li", { key: n }, h("a", { href: "#", onClick: (e) => e.preventDefault() }, h("span", { className: "tx-pt" }, h("img", { src: "assets/img/toh/" + im + ".jpg", alt: "", loading: "lazy", decoding: "async" }), h("i", null, h("span", { className: "tx-tri tx-tri-s", "aria-hidden": "true" }))), h("span", { className: "tx-pn" }, n, h("small", null, "Sample title · " + len))))))),
        h("h3", { className: "fp-h3 tx-vh" }, "What does it look like for you?"),
        h("ul", { className: "tx-voices" }, VOICES.map(([n, k], i) => h("li", { key: n, className: "tx-v" + i },
          Mock("Portrait: " + n, "tx-m-por tx-por-" + k, h("span", { className: "tx-ini", "aria-hidden": "true" }, n.split(" ").map((w) => w[0]).slice(0, 2).join(""))),
          h("span", { className: "toh-vn" }, n), h("span", { className: "toh-vq" }, "Short reflection to come")))),
        arts3("Live Like Him articles", 2),
        shelf(live, "toh-books")),

      h("section", { className: "toh-sec toh-sec-alt toh-prod tx-yel" },
        hd("Temple Collection", "Carry the moment with you"),
        h("ul", { className: "toh-pl", "aria-label": "Temple collection categories" }, CATS.map(([id, n]) => h("li", { key: id }, h("a", { className: "toh-pt", href: "#/c/" + id, onClick: (e) => { e.preventDefault(); go("#/c/" + id); } },
          h("span", { className: "toh-pi" }, h("img", { src: "assets/img/cat/" + id + ".jpg", alt: "", loading: "lazy", decoding: "async" })),
          h("span", { className: "toh-pn" }, n),
          h("span", { className: "toh-pg" }, h("span", { className: "ul-t" }, "Shop temple " + n.toLowerCase()), h(Icon, { name: "arrow_forward", size: 18 })))))),
        h("div", { className: "fp-acts" }, h(Button, { size: "md", onClick: () => go("#/c/temple-worship") }, "Shop all temple products"))),

      h("section", { className: "toh-sec tx-yel" },
        hd("Experience It In Person", "Visit the flagship store across from Temple Square"),
        Pic("assets/img/toh/storefront.jpg", "The Deseret Book flagship store window display for the Look again campaign", "toh-img-store"),
        h("div", { className: "toh-inp" },
          h("ul", { className: "toh-chips" }, ["Gallery", "Speaker series", "Conversations", "Children’s story time", "Live artist demos"].map((x) => h("li", { key: x }, h(Tag, { style: { background: "var(--toh-y-soft)", boxShadow: "none", cursor: "default" } }, x)))),
          h("div", { className: "toh-store" },
            h("h3", { className: "fp-h4" }, "Deseret Book Salt Lake Downtown"),
            h("address", { className: "fp-addr" }, "45 W South Temple", h("br"), "Salt Lake City, UT 84101"),
            P("Across from Temple Square, with a window display, the “How the World Sees Him” gallery and the “How do you see Him?” wall."),
            h("div", { className: "fp-acts" }, h(Button, { variant: "secondary", size: "md", onClick: () => go("#/stores") }, "Store hours and directions"))))),

      h("section", { className: "tx-sec tx-sq" },
        h("div", { className: "tx-bh" }, h("span", { className: "db-eyebrow fp-eb" }, "Temple Square"), h("h2", { className: "fp-h2" }, "More to see during the celebration")),
        h("ul", { className: "tx-sqg" }, TSQ.map(([ti, d, ic], i) => h("li", { key: ti, className: "tx-s" + i }, i === 0 ? Mock("Tabernacle Dome presentation still", "tx-m-dome", rays) : i === 1 ? Mock("Families at the Joseph Smith Memorial Building", "tx-m-jsmb", rays) : h("span", { className: "tx-si", "aria-hidden": "true" }, h(Icon, { name: ic, size: 28 })), h("div", { className: "tx-st" }, h("h3", { className: "fp-h4" }, ti), P(d))))),
        P(h(React.Fragment, null, "Tickets, dates and visit planning are managed by The Church of Jesus Christ of Latter-day Saints at ", ext("https://www.templesquare.org/eng/home", "templesquare.org"), "."))),

      h("section", { className: "tx-sec tx-end" },
        h("div", { className: "tx-split tx-split-55" },
          h("div", { className: "tx-new" }, h("span", { className: "db-eyebrow fp-eb" }, "New to Deseret Book?"), h("h2", { className: "fp-h2" }, "Faith-building books, art and gifts since 1866"),
            P("Deseret Book offers books, scriptures, music, art and gifts that help people build faith, strengthen homes and families, and live like Christ. You can shop online, find a store near you, or join Bookshelf+ for unlimited audiobooks and eBooks."),
            h("div", { className: "fp-acts" }, h(Button, { variant: "secondary", size: "md", onClick: () => onGo("About Deseret Book") }, "About Deseret Book"), h(Button, { variant: "ghost", size: "md", onClick: () => go("#/bookshelf-plus") }, "Explore Bookshelf+"))),
          h("div", { className: "tx-mail" }, h("span", { className: "db-eyebrow fp-eb" }, "Stay in the loop"), h("h2", { className: "fp-h3" }, "Get updates from the Look Again experience"),
            f.done ? h(Ok, { title: "You’re on the list", again: "Use another email", onAgain: f.reset }, h("p", null, "We’ll send updates to " + f.v.email.trim() + ".")) :
            h("form", { className: "fp-form toh-form", noValidate: true, onSubmit: f.submit({ email }) },
              h(Field, { label: "Email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" }),
              h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Sign up")))))));
  }

  window.FP_PAGES = Object.assign(window.FP_PAGES || {}, { "Temple Open House": TempleOpenHouse, "About Deseret Book": About, "Events": Events, "Platinum Rewards": Platinum, "Purchase an eGift Card": EGift });
})();
