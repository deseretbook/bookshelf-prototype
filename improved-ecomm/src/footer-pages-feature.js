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
          h("span", { className: "fp-eb" }, "About"),
          h("h1", { className: "fp-h1" }, "About Our Company"),
          P("Since 1866, Deseret Book Company has been the market leader in providing content and lifestyle products to support members of The Church of Jesus Christ of Latter-day Saints through its retail and publishing imprints. Deseret Book is committed to creating and offering resources to build faith, strengthen families, and promote personal virtues."),
          P("Deseret Book\u2019s purpose is to provide quality products that build faith, strengthen homes and families, ennoble personal virtues, and offer practical advice to religious and non-religious alike.")),
        Ph("Photo: Deseret Book store", "tall")),
      h("section", { className: "fa-hist" },
        h("div", { className: "fa-hist-h" }, h("span", { className: "fp-eb" }, "Since 1866"), h("h2", { className: "fp-h2" }, "Our History")),
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
        h("span", { className: "fp-eb" }, "Deseret Book Presents"),
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
          h("span", { className: "fp-eb" }, "Account"),
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
      h("header", { className: "fp-hd" }, h("span", { className: "fp-eb" }, "Account"), h("h1", { className: "fp-h1" }, "Purchase an eGift Card"), h("p", { className: "fp-lede" }, "Send a Deseret Book eGift card by email, in any amount from $10 to $500.")),
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

  window.FP_PAGES = Object.assign(window.FP_PAGES || {}, { "About Deseret Book": About, "Events": Events, "Platinum Rewards": Platinum, "Purchase an eGift Card": EGift });
})();
