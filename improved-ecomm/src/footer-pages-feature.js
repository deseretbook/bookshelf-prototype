/* Footer sitemap feature pages: About, Events, Platinum Rewards, Purchase an eGift Card. Uses helpers from footer-pages.js (window.FP). */
(function () {
  const { h, DS, Shell, Sec, Ok, Field, Row, useForm, req, email, P } = window.FP;
  const { useState, useEffect } = React;
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
    const tile = (p) => h("li", { key: p.id }, h("a", { className: "toh-pt", href: "#/p/" + p.id, onClick: (e) => { e.preventDefault(); go("#/p/" + p.id); } },
      h("span", { className: "toh-pi" }, p.img && p.img[0] ? h("img", { src: th(p.img[0]), alt: "", loading: "lazy", decoding: "async" }) : null),
      h("span", { className: "toh-pn" }, p.t),
      h("span", { className: "toh-pg" }, h("span", { className: "ul-t" }, "View details"), h(Icon, { name: "arrow_forward", size: 18 }))));
    const prods = (list, cls) => list.length ? h("ul", { className: "toh-pl" + (cls ? " " + cls : ""), "aria-label": "Featured products" }, list.map(tile)) : null;
    const rail = (label, off) => posts.length ? h("ul", { className: "toh-rail", "aria-label": label }, posts.map((_, i) => posts[(i + off) % posts.length]).map((a, i) => h("li", { key: i },
      h("a", { className: "toh-art", href: a.url, target: "_blank", rel: "noopener" },
        h("span", { className: "toh-ai" }, a.img ? h("img", { src: a.img, alt: "", loading: "lazy", decoding: "async" }) : null),
        h("span", { className: "toh-ad" }, a.date),
        h("span", { className: "toh-at" }, a.title))))) : null;
    const hd = (eb, t, sub) => h("div", { className: "toh-hd" }, h("span", { className: "db-eyebrow fp-eb" }, eb), h("h2", { className: "fp-h2" }, t), sub ? h("p", { className: "toh-sub" }, sub) : null);
    const pillar = (n, t, sub) => h("div", { className: "toh-hd toh-pillar" }, h("span", { className: "toh-n", "aria-hidden": "true" }, n), h("h2", { className: "fp-h2" }, t), h("p", { className: "toh-sub" }, sub));
    const ext = (href, t) => h("a", { href, target: "_blank", rel: "noopener" }, h("span", { className: "ul-t" }, t));
    const artists = [["Greg Olsen", "greg-olsen"], ["Kate Lee", "kate-lee"], ["Robert Boyd", "robert-boyd"], ["Simon Dewey", "simon-dewey"], ["Yongsung Kim", "yongsung-kim"]];
    const notes = ["In the quiet", "Looking back at me", "Walking beside me", "Right where I am", "In the small things", "Close enough to touch"];
    return h("main", { className: "fp fx-toh", "data-screen-label": "Temple Open House" },
      h("section", { className: "toh-hero" },
        
        h("div", { className: "toh-hero-t" },
          h("span", { className: "db-eyebrow fp-eb" }, "Salt Lake Temple Open House · April 5 – October 1, 2027"),
          h("h1", { className: "fp-h1" }, h("span", { className: "toh-ln" }, "See Him. Know Him."), " ", h("span", { className: "toh-ln" }, "Live Like Him.")),
          h("p", { className: "fp-lede" }, "Let this moment draw you closer to Christ. Explore the art and stories from our flagship store experience, wherever you are."),
          h("div", { className: "fp-acts" }, h(Button, { size: "md", onClick: () => { const el = document.getElementById("toh-see"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, "Experience now")))),
      h("section", { className: "toh-hang-sec" },
        h("ul", { className: "toh-hang", "aria-label": "Featured artists" }, artists.map(([n, sl]) => h("li", { key: sl }, h("a", { href: "#/c/featured-authors-artists_" + sl, onClick: (e) => { e.preventDefault(); go("#/c/featured-authors-artists_" + sl); } },
          h("span", { className: "toh-hi" }, h("img", { src: "assets/img/cat/featured-authors-artists_" + sl + ".jpg", alt: "", loading: "lazy", decoding: "async" })), h("span", { className: "toh-an" }, n)))))),
      h("section", { className: "toh-tie" },
        h("div", null, h("h2", { className: "fp-h3" }, "The Salt Lake Temple Celebration"), P("The Salt Lake Temple reopens after years of renovation, and all of Temple Square is part of the celebration. From April 5 to October 1, 2027, there are events, exhibits and experiences on the Square and online, all inviting people to come closer to Jesus Christ.")),
        h("div", { className: "fp-acts" }, h(Button, { variant: "secondary", size: "md", href: "https://www.templesquare.org/eng/home", target: "_blank", rel: "noopener", iconAfter: "open_in_new" }, "Visit templesquare.org"))),

      h("section", { className: "toh-sec", id: "toh-see" },
        pillar("1", "See Him", "Art that keeps Christ visible. Each piece shows the Savior as many people see Him."),
        h("div", { className: "toh-lead" }, Ph("Video: How the World Sees Him", "wide"), h("div", null, h("h3", { className: "fp-h4" }, "How the World Sees Him"), P("A look at the inclusive Christ art in our flagship gallery, with prints ($12) and postcards ($3) you can take home."))),
        rail("See Him articles", 0),
        h(Card, { className: "toh-dl", bordered: false, padding: "none", style: { background: "var(--toh-y-soft)", padding: "clamp(24px,3vw,40px)" } }, h("span", { className: "toh-dl-i" }, h(Icon, { name: "download", size: 24 })), h("div", null, h("h3", { className: "fp-h4" }, "Family Discussion Guide"), P("A free download with questions to talk about together as you look at the art.")), h(Button, { variant: "secondary", size: "md", onClick: () => {} }, "Download the guide")),
        prods(art)),

      h("section", { className: "toh-sec toh-sec-alt" },
        pillar("2", "Know Him", "Learning that deepens understanding."),
        h("figure", { className: "toh-quote" }, h("blockquote", null, "Quote from President D. Todd Christofferson, to be supplied by Content."), h("figcaption", null, "President D. Todd Christofferson")),
        rail("Know Him articles", 1),
        prods(know)),

      h("section", { className: "toh-sec" },
        pillar("3", "Live Like Him", "Everyday faith."),
        h("div", { className: "toh-lead" }, Ph("Video: DB Conversations", "wide"), h("div", null, h("h3", { className: "fp-h4" }, "DB Conversations"), P("Real conversations about what faith looks like in ordinary days."))),
        h("h3", { className: "fp-h3 toh-vh" }, "What does it look like for you?"),
        h("ul", { className: "toh-voices" }, ["Steve Young", "Sharon Eubank", "Camille Fronk Olson", "Thomas Griffith"].map((n) => h("li", { key: n }, Ph("Portrait: " + n, "toh-vp"), h("span", { className: "toh-vn" }, n), h("span", { className: "toh-vq" }, "Short reflection to come")))),
        rail("Live Like Him articles", 2),
        prods(live)),

      h("section", { className: "toh-sec toh-sec-alt toh-prod" },
        hd("Temple Collection", "Carry the moment with you"),
        h("ul", { className: "toh-pl", "aria-label": "Temple collection categories" }, [["temple-worship_temple-clothing", "Clothing"], ["temple-worship_temple-bags", "Bags"], ["temple-worship_temple-accessories", "Accessories"], ["books_gospel-voices_temple-books", "Books"]].map(([id, n]) => h("li", { key: id }, h("a", { className: "toh-pt", href: "#/c/" + id, onClick: (e) => { e.preventDefault(); go("#/c/" + id); } },
          h("span", { className: "toh-pi" }, h("img", { src: "assets/img/cat/" + id + ".jpg", alt: "", loading: "lazy", decoding: "async" })),
          h("span", { className: "toh-pn" }, n),
          h("span", { className: "toh-pg" }, h("span", { className: "ul-t" }, "Shop temple " + n.toLowerCase()), h(Icon, { name: "arrow_forward", size: 18 })))))),
        h("div", { className: "fp-acts" }, h(Button, { size: "md", onClick: () => go("#/c/temple-worship") }, "Shop all temple products"))),

      h("section", { className: "toh-sec" },
        hd("Experience It In Person", "Visit the flagship store across from Temple Square"),
        h("div", { className: "toh-inp" },
          h("ul", { className: "toh-chips" }, ["Gallery", "Speaker series", "Conversations", "Children’s story time", "Live artist demos"].map((x) => h("li", { key: x }, h(Tag, { style: { background: "var(--toh-y-soft)", boxShadow: "none", cursor: "default" } }, x)))),
          h("div", { className: "toh-store" },
            h("h3", { className: "fp-h4" }, "Deseret Book Salt Lake Downtown"),
            h("address", { className: "fp-addr" }, "45 W South Temple", h("br"), "Salt Lake City, UT 84101"),
            P("Across from Temple Square, with a window display, the “How the World Sees Him” gallery and the “How do you see Him?” wall."),
            h("div", { className: "fp-acts" }, h(Button, { variant: "secondary", size: "md", onClick: () => go("#/stores") }, "Store hours and directions"))))),

      h("section", { className: "toh-sec toh-sec-alt" },
        hd("Meet the artists", "Five artists from the How the World Sees Him gallery"),
        h("ul", { className: "toh-artists" }, artists.map(([n, sl]) => h("li", { key: sl }, h("a", { href: "#/c/featured-authors-artists_" + sl, onClick: (e) => { e.preventDefault(); go("#/c/featured-authors-artists_" + sl); } },
          h("span", { className: "toh-ap" }, h("img", { src: "assets/img/cat/featured-authors-artists_" + sl + ".jpg", alt: "", loading: "lazy", decoding: "async" })), h("span", { className: "toh-an" }, n)))))),

      h("section", { className: "toh-sec" },
        hd("How do you see Him?", "From the wall at our flagship store", "A curated set of sample notes. The final set comes from Content."),
        h("ul", { className: "toh-wall" }, notes.map((n, i) => h("li", { key: n, className: "w" + (i % 3) }, n)))),

      h("section", { className: "toh-sec toh-sec-alt" },
        hd("Temple Square", "More to see during the celebration"),
        h("ul", { className: "toh-ts" }, [
          ["Tabernacle Dome presentations", "A Christ-centered show of light, music and imagery in the Salt Lake Tabernacle."],
          ["Joseph Smith Memorial Building", "Experiences for children and families about the life and mission of Jesus Christ."],
          ["Music and performances", "Free live music in venues across Temple Square."],
          ["Church History Museum", "Family-friendly exhibits and art, including the Extraordinary Women exhibit."],
          ["Temple Square Visitors’ Center", "Displays on Jesus Christ and the temple experience. Reservations are recommended."],
          ["The Temple Square app", "Maps, schedules and tickets on site."]].map(([t, d]) => h("li", { key: t }, h("h3", { className: "fp-h4" }, t), P(d)))),
        P(h(React.Fragment, null, "Tickets, dates and visit planning are managed by The Church of Jesus Christ of Latter-day Saints at ", ext("https://www.templesquare.org/eng/home", "templesquare.org"), "."))),

      h("section", { className: "toh-sec toh-new" },
        hd("New to Deseret Book?", "Faith-building books, art and gifts since 1866", null),
        P("Deseret Book offers books, scriptures, music, art and gifts that help people build faith, strengthen homes and families, and live like Christ. You can shop online, find a store near you, or join Bookshelf+ for unlimited audiobooks and eBooks."),
        h("div", { className: "fp-acts" }, h(Button, { variant: "secondary", size: "md", onClick: () => onGo("About Deseret Book") }, "About Deseret Book"), h(Button, { variant: "ghost", size: "md", onClick: () => go("#/bookshelf-plus") }, "Explore Bookshelf+"))),

      h("section", { className: "toh-sec toh-mail" },
        hd("Stay in the loop", "Get updates from the Look Again experience"),
        f.done ? h(Ok, { title: "You’re on the list", again: "Use another email", onAgain: f.reset }, h("p", null, "We’ll send updates to " + f.v.email.trim() + ".")) :
        h("form", { className: "fp-form toh-form", noValidate: true, onSubmit: f.submit({ email }) },
          h(Field, { label: "Email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" }),
          h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Sign up")))));
  }

  window.FP_PAGES = Object.assign(window.FP_PAGES || {}, { "Temple Open House": TempleOpenHouse, "About Deseret Book": About, "Events": Events, "Platinum Rewards": Platinum, "Purchase an eGift Card": EGift });
})();
