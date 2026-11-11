/* Footer sitemap pages (#/info/<slug>). Shared shell, helpers, and the utility pages. Feature pages live in footer-pages-feature.js. */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useMemo } = React;
  const DS = () => window.DeseretBookDesignSystem_609afa || {};
  const GROUPS = {
    "About": ["About Deseret Book", "Careers", "Terms of Use", "Privacy Policy", "Events", "Blog"],
    "Account": ["My Account", "Check Order", "Purchase an eGift Card", "Gift Card Balance", "Bookshelf Plus", "Gift a Subscription", "Redeem a Gifted Subscription", "Platinum Rewards", "Request a Catalog"],
    "Submissions & Legal": ["Product Submission Guidelines", "Manuscript Submissions", "Legal", "SMS Terms and Conditions", "Bookshelf Plus Terms of Use"],
    "Customer Service": ["Contact Us", "Questions & Support", "Shipping & Returns", "Do Not Sell My Information", "Deseret Book Store Locations"]
  };
  const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const groupOf = (label) => Object.keys(GROUPS).find((g) => GROUPS[g].indexOf(label) > -1) || "About";
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
  const stateOpts = [{ value: "", label: "Select a state" }].concat(STATES.map((s) => ({ value: s, label: s })));

  function useForm(init) {
    const [v, setV] = useState(init);
    const [e, setE] = useState({});
    const [done, setDone] = useState(null);
    const set = (k) => (ev) => {
      const val = ev && ev.target ? (ev.target.type === "checkbox" ? ev.target.checked : ev.target.value) : ev;
      setV((o) => Object.assign({}, o, { [k]: val }));
      if (e[k]) setE((o) => Object.assign({}, o, { [k]: undefined }));
    };
    const submit = (rules, ok) => (ev) => {
      ev && ev.preventDefault && ev.preventDefault();
      const errs = {};
      Object.keys(rules).forEach((k) => { const m = rules[k](v[k], v); if (m) errs[k] = m; });
      setE(errs);
      if (!Object.keys(errs).length) setDone(ok ? ok(v) || true : true);
    };
    const reset = () => { setV(init); setE({}); setDone(null); };
    return { v, e, set, submit, done, reset };
  }
  const req = (msg) => (x) => (!x || !String(x).trim() ? msg : null);
  const email = (x) => (!x || !String(x).trim() ? "Enter an email address." : !EMAIL.test(String(x).trim()) ? "Enter a valid email address, like name@example.com." : null);

  function Field(props) { const { Input } = DS(); return h(Input, props); }
  function Pick(props) { const { Select } = DS(); return h(Select, props); }
  function Row({ children }) { return h("div", { className: "fp-2" }, children); }

  function Ok({ title, children, again, onAgain }) {
    const { Icon, Button } = DS();
    return h("div", { className: "fp-ok", role: "status" },
      Icon ? h(Icon, { name: "check_circle", size: 28, filled: true, style: { color: "var(--db-status-success)" } }) : null,
      h("h2", { className: "fp-h3" }, title),
      children,
      onAgain ? h("div", null, h(Button, { variant: "secondary", size: "md", onClick: onAgain }, again || "Start over")) : null);
  }
  function Sec({ id, title, children }) { return h("section", { className: "fp-sec", id }, title ? h("h2", { className: "fp-h2" }, title) : null, children); }
  function Tbl({ head, rows, cap }) {
    return h("div", { className: "fp-tw" }, h("table", { className: "fp-tbl" },
      cap ? h("caption", null, cap) : null,
      head ? h("thead", null, h("tr", null, head.map((c, i) => h("th", { key: i, scope: "col" }, c)))) : null,
      h("tbody", null, rows.map((r, i) => h("tr", { key: i }, r.map((c, j) => j === 0 ? h("th", { key: j, scope: "row" }, c) : h("td", { key: j }, c)))))));
  }
  const Mail = (a) => h("a", { href: "mailto:" + a }, a);
  const P = (t) => h("p", null, t);
  const UL = (items) => h("ul", { className: "fp-ul" }, items.map((t, i) => h("li", { key: i }, t)));

  function Shell({ label, onGo, title, lede, side = false, toc, sel, onSel, children, aside, navGroups, crumbs, eyebrow }) {
    useEffect(() => { window.scrollTo(0, 0); }, [label]);
    const [cur, setCur] = useState(toc ? toc[0][0] : null);
    useEffect(() => {
      if (!toc || onSel) return;
      const on = () => { const lim = off() + 40; let c = toc[0][0]; toc.forEach((t) => { const el = document.getElementById(t[0]); if (el && el.getBoundingClientRect().top < lim) c = t[0]; }); if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) c = toc[toc.length - 1][0]; setCur(c); };
      const size = () => { const hd = document.querySelector(".hdr"); document.documentElement.style.setProperty("--hdr-h", (hd ? hd.getBoundingClientRect().height : 64) + "px"); on(); };
      size(); window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", size);
      return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", size); };
    }, [toc]);
    const off = () => { const hd = document.querySelector(".hdr"); const sd = document.querySelector(".fp-side"); const hh = hd ? hd.getBoundingClientRect().height : 64; const narrow = window.innerWidth < 960; return hh + (narrow && sd ? sd.getBoundingClientRect().height : 0) + 24; };
    const jump = (id) => (e) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - off(), behavior: "smooth" }); };
    const g = groupOf(label);
    return h("main", { className: "fp", "data-screen-label": label },
      h("header", { className: "fp-hd" },
        crumbs && DS().Breadcrumb ? h(DS().Breadcrumb, { className: "fp-crumbs", items: crumbs }) : null,
        h("span", { className: "fp-eb" }, eyebrow || g),
        h("h1", { className: "fp-h1" }, title || label),
        lede ? h("p", { className: "fp-lede" }, lede) : null),
      navGroups ? h("div", { className: "fp-grid fp-acp-grid" },
        h("aside", { className: "acp-side fp-acp", "aria-label": "On this page" },
          h("nav", { className: "acp-nav", "aria-label": "On this page" }, navGroups.map(([g, items]) => h("div", { key: g, className: "acp-grp", role: "group", "aria-label": g },
            h("span", { className: "db-eyebrow acp-eb" }, g),
            items.map(([id, l, ic]) => h("button", { key: id, type: "button", className: "acp-it" + (sel === id ? " on" : ""), "aria-current": sel === id ? "true" : undefined,
              onClick: () => { onSel(id); if (window.innerWidth < 1024) setTimeout(() => { const b = document.querySelector(".fp-body"); if (b) window.scrollTo({ top: b.getBoundingClientRect().top + window.scrollY - off() - 16, behavior: "smooth" }); }, 60); } },
              h("span", { className: "acp-icw" }, h(DS().Icon, { name: ic, size: 20, weight: 400, className: "acp-ic acp-ic-o" }), h(DS().Icon, { name: ic, size: 20, weight: 400, filled: true, className: "acp-ic acp-ic-f" })),
              h("span", null, l))))))),
        h("div", { className: "fp-body" }, children)) :
      h("div", { className: side || toc ? "fp-grid" : "fp-grid nos" },
        toc ? h("nav", { className: "fp-side", "aria-label": "On this page" },
          h("ul", null, toc.map((t) => h("li", { key: t[0] }, h("a", { href: "#" + t[0], "aria-current": (onSel ? sel : cur) === t[0] ? "true" : undefined, onClick: onSel ? (e) => { e.preventDefault(); onSel(t[0]); const b = document.querySelector(".fp-body"); if (b && b.getBoundingClientRect().top < off()) window.scrollTo({ top: b.getBoundingClientRect().top + window.scrollY - off(), behavior: "smooth" }); } : jump(t[0]) }, t[1]))))) : null,
        side ? h("nav", { className: "fp-side", "aria-label": g },
          h("ul", null, GROUPS[g].map((l) => h("li", { key: l }, h("a", {
            href: "#/info/" + slug(l), "aria-current": l === label ? "page" : undefined,
            onClick: (e) => { e.preventDefault(); onGo(l); }
          }, l))))) : null,
        h("div", { className: "fp-body" }, children),
        aside || null));
  }

  /* ---------- About group ---------- */
  function Careers({ onGo }) {
    const { Button } = DS();
    return h(Shell, { label: "Careers", onGo, lede: "Open positions at Deseret Book are posted through Deseret Management Corporation\u2019s careers site." },
      h(Sec, null,
        h("div", { className: "fp-acts" }, h(Button, { href: "https://deseretmanagement.wd1.myworkdayjobs.com/en-US/DeseretBook", target: "_blank", rel: "noopener", size: "md", iconAfter: "open_in_new" }, "View open positions"))),
      h(Sec, { title: "Questions" },
        h("dl", { className: "fp-dl" }, h("dt", null, "Human Resources"), h("dd", null, Mail("hrdept@deseretbook.com")))));
  }

  const TERMS = [
    ["Acceptance Through Use", "This website is operated by Deseret Book Company (\u201cOperator\u201d, \u201cCompany\u201d, \u201cwe\u201d, or \u201cus\u201d). The following terms and conditions, together with any documents they expressly incorporate by reference, including but not limited to, the Privacy Statement and all other terms, if any, posted elsewhere at the website, (collectively, \u201cTerms of Use\u201d), govern your access to and use of website, including any content, functionality, or purchase of services or items offered on or through website and all affiliated mobile apps (collectively the \u201cSite\u201d), whether as a guest or a registered user and are entered into by and between you and us."],
    ["No Use by Children", "The Site is not directed to, or intended for use by, children (defined as anyone younger than 18). Children should not use the Site or submit any information to Operator. We do not knowingly collect personal information from anyone younger than 18."],
    ["Changes to the Terms of Use", "We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Site thereafter. Your continued use of the Site following the posting of revised Terms of Use means you accept and agree to the changes."],
    ["Accessing the Site and Account Security", "If you choose, or are provided with, a username, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You may not share passwords. Your right to access the Site is an individual, non-transferrable right."],
    ["Intellectual Property", "Unless otherwise indicated, you acknowledge that all content (other than Your Content), materials, features, and functionalities (including but not limited to all information, software, text, displays, images, video, audio, the design, selection and arrangement thereof) available at the Site are owned by Operator and protected by national and international copyrights, trademarks, service marks, patents, patent registration rights, trade secrets, know-how or other intellectual property or proprietary rights and laws."],
    ["Online Purchases and Other Terms and Conditions", "All purchases at or through our Site or other transactions for the sale of goods, or services, or information formed through the Site, or resulting from visits made by you, are governed by the relevant provisions of these Terms of Use."],
    ["Risk of Loss", "All purchases of physical items from Deseret Book are made pursuant to a shipment contract. This means that the risk of loss and title for such items pass to you upon our delivery to the carrier."],
    ["Returns, Refunds and Title", "Deseret Book does not take title to returned items until the item arrives at our distribution center. At our discretion, a refund may be issued without requiring a return. In this situation, Deseret Book does not take title to the refunded item."],
    ["Pricing", "We cannot confirm the price of an item until you order. Despite our best efforts, a small number of the items in our catalog may be mispriced. If the correct price of an item sold by Deseret Book is higher than our stated price, we will, at our discretion, either contact you for instructions before shipping or cancel your order and notify you of such cancellation. Your credit card will be charged at the time of your purchase."],
    ["Choice of Law and Venue", "All matters relating to the Site and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of Utah, without giving effect to any choice or conflicts of law provision or rule (whether of the State of Utah or any other Jurisdiction)."],
    ["Contact Information", "Questions concerning these Terms of Use or the Site should be directed to permissions@deseretbook.com."]
  ];
  function Legal({ label, title, onGo, lede, meta, items, contact, note }) {
    return h(Shell, { label, title, onGo, lede },
      meta ? h("p", { className: "fp-meta" }, meta) : null,
      h("ol", { className: "fp-toc" }, items.map((s) => h("li", { key: s[0] }, h("a", { href: "#" + slug(s[0]), onClick: (e) => { e.preventDefault(); const t = document.getElementById(slug(s[0])); if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - 96); } }, s[0])))),
      items.map((s) => h(Sec, { key: s[0], id: slug(s[0]), title: s[0] }, [].concat(s[1]).map((p, i) => typeof p === "string" ? h("p", { key: i }, p) : h(React.Fragment, { key: i }, p)))),
      h("p", { className: "fp-meta" }, note || "This page shows key sections. The full text is available on request from ", Mail(contact || (label === "Privacy Policy" ? "privacy@deseretbook.com" : "permissions@deseretbook.com")), "."));
  }
  function Terms({ onGo }) {
    return h(Legal, { label: "Terms of Use", onGo, items: TERMS, lede: "Please read the Terms of Use carefully before you start to use the Site. By using this Site, you agree to be bound by all of the terms, conditions and notices contained or referenced in these Terms of Use." });
  }
  function Privacy({ onGo }) {
    return h(Legal, { label: "Privacy Policy", title: "Privacy Notice", onGo, meta: "Last Modified: 4/03/2026", lede: "This Privacy Notice describes how Deseret Book Company and its third-party service providers collect, use, and share the information collected through the websites, apps, and services we operate.", items: [
      ["Contact Information", ["If you have any questions regarding this Privacy Notice, or you want to exercise any of your privacy rights, please use the contact info below:", h("address", { className: "fp-addr" }, "55 North 300 West, Suite 300, Attn: Legal", h("br"), "Salt Lake City, UT 84101", h("br"), Mail("privacy@deseretbook.com"))]],
      ["Collection of Information from Anyone under the Age of 18", "The Products and Services are not directed to, or intended for use by, anyone under the age of 18. If you are under the age of 18, you only may use the Products and Services with permission from your parents or legal guardians. Operator does not knowingly collect Data from users under the age of 18."],
      ["Information Collected", "When you use the Products or Services, we may collect several types of information about you and/or your use of the Products or Services. The general categories of information \u2014 Data (as defined herein) \u2014 include Personally Identifiable Information or \u201cPII\u201d as well as non-personally identifiable information (\u201cnon-PII\u201d)."],
      ["Cookies", "In general, a cookie is a small amount of data sent to your browser from a web server and stored on your computer\u2019s hard drive, where it can be used to identify your computer. In most cases, you can set your browser to turn off cookies or to notify you before you receive one so that you can decide whether to accept it or not. If you block or reject our cookies, some of the features on the Products or Services may not work for you."],
      ["How Do We Protect Personal Data?", "We take information security seriously, and we use reasonable administrative, technical and physical safeguards to protect the PII we collect from unauthorized access, use or disclosure. When we use third-party service providers, we ask those providers to implement similar safeguards. However, we cannot guarantee that your information is completely secure either within the Company or on the systems of third-party service providers."],
      ["How Long Do We Keep Your Personal Data?", "We retain personal Data we collect from you when we have an ongoing legitimate business need to do so (i.e., to provide you with the Products or Services you have requested or to comply with applicable legal requirements)."],
      ["Your Privacy Rights", ["Under applicable state law, you may have the right to (1) request to know more about and access your personal information, including in a portable format, (2) request deletion of your personal information, and (3) request the correction of inaccurate personal information.", h("p", null, "To make a request, use the ", h("a", { href: "#/info/do-not-sell-my-information", onClick: (e) => { e.preventDefault(); onGo("Do Not Sell My Information"); } }, "privacy request form"), " or email ", Mail("privacy@deseretbook.com"), ".")]],
      ["Non-discrimination", "You have the right to not be discriminated against for exercising any of your rights."]
    ] });
  }

  /* ---------- Account group ---------- */
  function CheckOrder({ onGo, go, user }) {
    return h(Shell, { label: "Check Order", onGo, lede: "Enter your order number and the email used at checkout to see where your shipment is." }, h(CheckOrderBody, { go, user }));
  }
  function CheckOrderBody({ go, user, variant }) {
    const { Button, Icon } = DS();
    const f = useForm({ order: "", email: "" });
    const steps = ["Order placed", "Processing", "Shipped", "Delivered"];
    return (
      f.done ? h("div", { className: "fp-card" },
        h("div", { className: "fp-ord-h" }, h("div", null, h("span", { className: "fp-k" }, "Order"), h("strong", null, "#" + f.v.order.trim())), h("div", null, h("span", { className: "fp-k" }, "Status"), h("strong", null, "Shipped"))),
        h("ol", { className: "fp-steps" }, steps.map((s, i) => h("li", { key: s, className: i <= 2 ? "on" : "" }, Icon ? h(Icon, { name: i <= 2 ? "check_circle" : "radio_button_unchecked", size: 18, filled: i <= 2 }) : null, h("span", null, s)))),
        h("p", { className: "fp-meta" }, "Shipped by Standard delivery, typically 5\u201310 business days. Tracking details were sent to " + f.v.email.trim() + "."),
        h("div", { className: "fp-acts" }, h(Button, { variant: "secondary", size: "md", onClick: f.reset }, "Check another order"), user ? h(Button, { variant: "ghost", size: "md", onClick: () => go("#/account/orders") }, "See all my orders") : null)) :
      h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ order: (x) => !x.trim() ? "Enter your order number." : !/^[A-Za-z0-9-]{5,}$/.test(x.trim()) ? "Order numbers have at least 5 letters or numbers." : null, email }) },
        h(Field, { label: "Order number", value: f.v.order, onChange: f.set("order"), error: f.e.order, hint: "Found in your order confirmation email." }),
        h(Field, { label: "Email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" }),
        h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md", variant: variant }, "Check order")))
    );
  }

  function GiftBalance({ onGo }) {
    const { Button } = DS();
    const f = useForm({ card: "", pin: "" });
    const digits = (x) => String(x || "").replace(/\D/g, "");
    return h(Shell, { label: "Gift Card Balance", onGo, lede: "Enter the card number and PIN from the back of your card or your eGift card email." },
      f.done ? h(Ok, { title: "$25.00 remaining", again: "Check another card", onAgain: f.reset }, h("p", null, "Card ending in " + digits(f.v.card).slice(-4) + ". Use it online at checkout or in any Deseret Book store.")) :
      h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ card: (x) => digits(x).length !== 16 ? "Enter the 16-digit card number." : null, pin: (x) => !/^\d{4,8}$/.test(String(x).trim()) ? "Enter the PIN, 4 to 8 digits." : null }) },
        h(Field, { label: "Card number", inputMode: "numeric", value: f.v.card, onChange: (e) => f.set("card")(digits(e.target.value).slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ")), error: f.e.card, placeholder: "0000 0000 0000 0000" }),
        h(Row, null, h(Field, { label: "PIN", inputMode: "numeric", value: f.v.pin, onChange: f.set("pin"), error: f.e.pin, maxLength: 8 }), h("span")),
        h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Check balance")),
        h("p", { className: "fp-meta" }, "Gift Cards (egift cards or physical gift cards) are not returnable/refundable.")));
  }

  function Catalog({ onGo }) {
    const { Button, Checkbox } = DS();
    const f = useForm({ first: "", last: "", addr: "", addr2: "", city: "", state: "", zip: "", email: "", news: false });
    return h(Shell, { label: "Request a Catalog", onGo, lede: "Add your mailing address and we\u2019ll send the next Deseret Book catalog." },
      f.done ? h(Ok, { title: "Your catalog is on the way", again: "Request another", onAgain: f.reset }, h("p", null, "We\u2019ll mail the next catalog to " + f.v.first.trim() + " " + f.v.last.trim() + ", " + f.v.city.trim() + ", " + f.v.state + " " + f.v.zip.trim() + ".")) :
      h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ first: req("Enter your first name."), last: req("Enter your last name."), addr: req("Enter a street address."), city: req("Enter a city."), state: req("Select a state."), zip: (x) => !/^\d{5}(-\d{4})?$/.test(String(x).trim()) ? "Enter a 5-digit ZIP code." : null, email: (x) => x && x.trim() && !EMAIL.test(x.trim()) ? "Enter a valid email address, like name@example.com." : null }) },
        h(Row, null, h(Field, { label: "First name", value: f.v.first, onChange: f.set("first"), error: f.e.first, autoComplete: "given-name" }), h(Field, { label: "Last name", value: f.v.last, onChange: f.set("last"), error: f.e.last, autoComplete: "family-name" })),
        h(Field, { label: "Street address", value: f.v.addr, onChange: f.set("addr"), error: f.e.addr, autoComplete: "address-line1" }),
        h(Field, { label: "Apartment, suite (optional)", value: f.v.addr2, onChange: f.set("addr2"), autoComplete: "address-line2" }),
        h("div", { className: "fp-3" }, h(Field, { label: "City", value: f.v.city, onChange: f.set("city"), error: f.e.city, autoComplete: "address-level2" }), h(Pick, { label: "State", value: f.v.state, onChange: f.set("state"), options: stateOpts, error: f.e.state }), h(Field, { label: "ZIP code", inputMode: "numeric", value: f.v.zip, onChange: f.set("zip"), error: f.e.zip, autoComplete: "postal-code" })),
        f.e.state ? h("p", { className: "fp-err" }, f.e.state) : null,
        h(Field, { label: "Email (optional)", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" }),
        Checkbox ? h(Checkbox, { label: "Send me new-release emails", checked: f.v.news, onChange: f.set("news") }) : null,
        h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Request catalog"))));
  }

  /* ---------- Customer Service group ---------- */
  function Contact({ onGo, sub }) {
    const { Button } = DS();
    /* sub: "<section>" or "<section>/<topic>", e.g. "ct-message/downloads" opens the message form with that topic chosen. */
    const [subSec, subTopic] = String(sub || "").split("/");
    const topics = [{ value: "orders", label: "Online Orders & Product Inquiries" }, { value: "downloads", label: "Deseret Bookshelf, eBooks & Downloads" }, { value: "events", label: "Event Tickets" }, { value: "other", label: "Something else" }];
    const f = useForm({ name: "", email: "", order: "", topic: topics.some((t) => t.value === subTopic) ? subTopic : "orders", msg: "" });
    const [sel, setSel] = useState(/^ct-/.test(subSec) ? subSec : "ct-service");
    const toc = [["ct-service", "Customer Service"], ["ct-message", "Send Us a Message"], ["ct-corporate", "Corporate Offices"], ["ct-publishing", "Publishing & Submissions"], ["ct-permissions", "Permissions & Copyright"], ["ct-holidays", "Holiday Closures"]];
    const secs = [
      h(Sec, { key: "ct-service", id: "ct-service", title: "General Customer Service \u2014 Website & Online Orders" },
        h(Tbl, { rows: [["Email", Mail("service@deseretbook.com")], ["Toll-Free (US & Canada)", h("a", { href: "tel:18004534532" }, "1-800-453-4532")], ["International", h("a", { href: "tel:8015173369" }, "801-517-3369")]] }),
        h("p", { className: "fp-meta" }, "Customer Service Hours: Monday\u2013Friday, 9:00 a.m.\u20135:00 p.m. (MT). Closed Saturday and Sunday and holidays.")),
      h(Sec, { key: "ct-message", id: "ct-message", title: "Send Us a Message" },
        f.done ? h(Ok, { title: "Message sent", again: "Send another message", onAgain: f.reset }, h("p", null, "Thanks, " + f.v.name.trim().split(" ")[0] + ". We\u2019ll reply to " + f.v.email.trim() + ".")) :
        h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ name: req("Enter your name."), email, msg: (x) => !x.trim() ? "Enter a message." : x.trim().length < 10 ? "Add a little more detail so we can help." : null }) },
          h(Row, null, h(Field, { label: "Name", value: f.v.name, onChange: f.set("name"), error: f.e.name, autoComplete: "name" }), h(Field, { label: "Email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" })),
          h(Row, null, h(Pick, { label: "Topic", value: f.v.topic, onChange: f.set("topic"), options: topics }), h(Field, { label: "Order number (optional)", value: f.v.order, onChange: f.set("order") })),
          h(Field, { label: "Message", multiline: true, rows: 5, value: f.v.msg, onChange: f.set("msg"), error: f.e.msg }),
          h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Send message")))),
      h(Sec, { key: "ct-corporate", id: "ct-corporate", title: "Corporate Offices" },
        h(Tbl, { rows: [["Phone", h("a", { href: "tel:8015341515" }, "801-534-1515")]] }),
        h("p", { className: "fp-meta" }, "Corporate Operator Hours: Monday\u2013Friday, 9:00 a.m.\u20135:00 p.m. (MT). Closed Saturday and Sunday and holidays."),
        h(Tbl, { head: ["Department", "Email"], rows: [["Online Orders & Product Inquiries", Mail("service@deseretbook.com")], ["Deseret Bookshelf, eBooks & Downloads", Mail("downloads@deseretbook.com")], ["Event Tickets", Mail("support@deseretbook.com")], ["Human Resources", Mail("hrdept@deseretbook.com")], ["Media Inquiries", Mail("mediainquiry@deseretbook.com")], ["Wholesale Division", Mail("dbwhsale@deseretbook.com")]] })),
      h(Sec, { key: "ct-publishing", id: "ct-publishing", title: "Publishing & Submissions" },
        h(Tbl, { rows: [["Deseret Book (Books)", Mail("submissionquestions@deseretbook.com")], ["Shadow Mountain (Books)", Mail("submissionquestions@shadowmountain.com")], ["Music", Mail("music@deseretbook.com")]] })),
      h(Sec, { key: "ct-permissions", id: "ct-permissions", title: "Permissions & Copyright" },
        h(Tbl, { rows: [["Intellectual Property & Permissions", Mail("permissions@deseretbook.com")], ["Music Copyright & Sheet Music", Mail("sheetmusic@deseretbook.com")]] })),
      h(Sec, { key: "ct-holidays", id: "ct-holidays", title: "Holiday Closures" },
        P("Deseret Book Customer Service and Corporate Office are closed on the following holidays:"),
        h("ul", { className: "fp-cols" }, ["New Year\u2019s Day", "Martin Luther King Jr. Day", "Presidents\u2019 Day", "Memorial Day", "Juneteenth", "Independence Day", "Pioneer Day", "Labor Day", "Thanksgiving Day", "Christmas Day"].map((d) => h("li", { key: d }, d))),
        P("All Deseret Book locations and offices are closed on Sundays."))];
    const navGroups = [["Get Help", [["ct-service", "Customer Service", "support_agent"], ["ct-message", "Send Us a Message", "mail"], ["ct-holidays", "Holiday Closures", "event_busy"]]],
      ["Business Contacts", [["ct-corporate", "Corporate Offices", "apartment"], ["ct-publishing", "Publishing & Submissions", "menu_book"], ["ct-permissions", "Permissions & Copyright", "copyright"]]]];
    return h(Shell, { label: "Contact Us", title: "Contact Deseret Book", onGo, toc, sel, onSel: setSel, navGroups }, secs.filter((s) => s.key === sel));
  }

  /* Questions & Support mirrors the help center at support.deseretbook.com: topics (its collections), each with sections (its categories) of articles.
     Nothing is a dead end: an article opens the matching page in this project when there is one, otherwise the real article on support.deseretbook.com (new tab). */
  const SUP = "https://support.deseretbook.com/";
  const ART = {
    "Church Distribution Services at Deseret Book": "95-temple-garments-and-church-distribution", "Coupons and Promotion Codes": "90-coupons", "Payments and Billing": "65-payments-and-billing",
    "Customer Support Hours of Operation": "150-customer-support-hours-of-operation", "Submitting Product to Deseret Book": "69-submitting-product-to-deseret-book",
    "Changing Billing Information on File": "55-changing-billing-information-on-file", "How to Unsubscribe from Marketing Communications": "57-how-to-unsubscribe",
    "Downloading Digital Music Purchases": "70-downloading-digital-music", "Promotions and Discounts": "91-promotions-and-discounts", "English Scriptures": "67-english-scriptures",
    "Quantity Discounts": "34-quantity-discounts", "Order Invoice": "63-order-invoice", "Personalization/Imprinting": "202-personalization-imprinting", "Sending Gifts": "64-sending-gifts",
    "How to Apply a Gift Card to an Order": "104-how-to-apply-a-gift-card-to-an-order", "How to Apply Promotion Codes": "103-applying-promotion-codes",
    "Payment Not Going Through": "160-payment-not-going-through", "Free Shipping Offers": "231-free-shipping-offers", "Library and School Orders": "92-library-and-school-orders",
    "How to Cancel an Order": "235-how-to-cancel-an-order", "Bulk Orders for Organizations": "236-bulk-orders-for-organizations",
    "Changing Your Email Address": "56-changing-your-email-address-or-password", "Data Removal Request": "158-data-removal-request",
    "Contact Deseret Book Authors": "68-contact-deseret-book-authors", "Deseret Book Store Locations": "233-deseret-book-store-locations",
    "Copyright & Permissions Information": "58-copyright-information", "Knight & Wells Temple Dresses": "128-knight-wells-temple-dresses",
    "Statues and Figurines: Care and Cleaning": "200-statues-and-figurines-care-and-cleaning", "Locating Out of Print Books": "93-locating-out-of-print-books",
    "Curbside Pickup": "102-curb-side-pick-up", "Art Terms": "78-art-terms", "Product Reviews": "79-product-reviews", "Book Binding Information": "77-book-binding-information",
    "Emergency Preparedness Items": "99-emergency-preparedness-items", "Framed Art": "151-framed-art",
    "Contact Deseret Book": "5-contact-deseret-book", "Working at Deseret Book": "75-working-at-deseret-book", "Vendor Information": "190-vendor-information",
    "Vendor Freight Routing Instructions": "192-vendor-freight-routing-instructions",
    "Returns Information": "35-returns-information", "Order Status": "30-order-status", "Tracking My Order": "96-tracking-my-order",
    "Shipping and Handling Information": "210-shipping-and-handling-information", "Shipping Discounts": "33-shipping-discounts",
    "Cancel Order/Item(s) From Order": "159-cancel-order-item-s-from-order", "Order Online Pick Up In Store": "203-order-online-pick-up-in-store",
    "Shipping to Correctional Facilities": "31-shipping-to-correctional-facillities", "Returning Digital Content": "36-returning-digital-content", "Surcharges": "32-surcharges",
    "How to Access eBooks and Audiobooks": "13-how-to-access-ebooks-and-audiobooks", "Books Not Showing Up": "20-books-not-showing-up",
    "Installing the Deseret Bookshelf App": "18-installing-deseret-bookshelf-app", "Bookshelf Frequently Asked Questions": "213-bookshelf-plus-frequently-asked-questions",
    "Streaming vs. Downloading Audiobooks": "88-streaming-vs-downloading-audio", "Free Content on the Bookshelf App": "224-free-books-with-bookshelf-app",
    "Gift an eBook or Digital Audiobook": "161-gift-an-ebook", "Audiobook Screen Off Center and Missing Controls (iOS)": "225-audiobookmissingcontrols",
    "Guide to Creating Collections in Deseret Bookshelf": "232-guide-to-creating-collections", "Cancel Bookshelf+": "100-cancel-bookshelf-plus",
    "Bookshelf+ Audiobooks by Title": "218-bookshelf-plus-audio-books-alphabetical", "Bookshelf+ Audiobooks: Nonfiction": "221-bookshelf-plus-audio-books-non-fiction",
    "Bookshelf+ Audiobooks: Fiction": "220-bookshelf-plus-audio-books-by-category", "Bookshelf+ eBooks by Title": "229-bookshelf-plus-ebooks-by-title",
    "Bookshelf+ eBooks: Nonfiction": "228-bookshelf-plus-ebooks-non-fiction", "Bookshelf+ eBooks: Fiction": "227-bookshelf-plus-ebooks-fiction",
    "Bookshelf+ Overview": "42-bookshelf-plus-overview", "Bookshelf+ FAQs": "44-bookshelf-plus-faqs", "Subscription Terms and Conditions": "148-subscription-terms-and-conditions",
    "How to Download Bookshelf+ Titles in the Deseret Bookshelf App": "45-how-to-download-plus-titles", "Gifting a Bookshelf+ Subscription": "47-gifting-a-bookshelf-plus-subscription",
    "Audiobooks and Talks Included with Bookshelf+": "208-audio-books-included-with-bookshelf-plus", "eBooks Included with Bookshelf+": "207-ebooks-included-with-bookshelf-plus",
    "Credit Card Requirement for the Bookshelf+ Trial": "43-credit-card-requirement-for-plus", "How to Update or Add a Credit Card to a Subscription": "205-how-to-update-or-add-a-credit-card-to-a-subscription",
    "Platinum Rewards Overview": "49-platinum-rewards-overview", "Platinum Rewards FAQs": "50-platinum-rewards-faqs", "Platinum Rewards Disclaimer and Exclusions": "51-platinum-rewards-disclaimer-and-exclusions",
    "Cancel Platinum Rewards": "211-cancel-platinum-rewards", "Is Deseret Video on Roku or Apple TV?": "157-is-deseret-video-on-roku-or-apple-tv", "Cancel Deseret Video+": "212-cancel-deseret-video-plus",
    "Upcoming Events": "194-upcoming-events", "Purchase with Confidence": "198-purchase-with-confidence", "Seating": "197-seating", "Face Coverings": "196-face-coverings",
    "COVID-19": "195-covid-19", "Still Have More Questions?": "199-still-have-more-questions"
  };
  /* Articles answered by a page in this project: a footer page label, or a route. */
  const HERE = {
    "Returns Information": "#/info/shipping-and-returns/returns", "Shipping and Handling Information": "#/info/shipping-and-returns", "Surcharges": "#/info/shipping-and-returns",
    "Order Status": "Check Order", "Tracking My Order": "Check Order", "Customer Support Hours of Operation": "#/info/contact-us/ct-service", "Contact Deseret Book": "Contact Us",
    "Submitting Product to Deseret Book": "#/info/contact-us/ct-publishing", "Copyright & Permissions Information": "#/info/contact-us/ct-permissions",
    "Working at Deseret Book": "Careers", "Vendor Information": "#/info/contact-us/ct-corporate", "Deseret Book Store Locations": "#/stores", "Data Removal Request": "Do Not Sell My Information",
    "Changing Your Email Address": "#/account/account-information", "Changing Billing Information on File": "#/account/payment-methods",
    "How to Update or Add a Credit Card to a Subscription": "#/account/payment-methods", "Bookshelf+ Overview": "#/bookshelf-plus", "Cancel Bookshelf+": "#/account/subscriptions/bookshelf-plus",
    "Platinum Rewards Overview": "Platinum Rewards", "Cancel Platinum Rewards": "#/account/subscriptions/platinum-rewards", "Upcoming Events": "Events",
    "Gift an eBook or Digital Audiobook": "Purchase an eGift Card", "Time Out for Women Events and Tickets": "https://www.timeoutforwomen.com/", "A Deseret Book Presents Events": "Events",
    "Event Questions": "#/info/questions-and-support/events"
  };
  const BSP_LISTS = ["Bookshelf+ Audiobooks by Title", "Bookshelf+ Audiobooks: Nonfiction", "Bookshelf+ Audiobooks: Fiction", "Bookshelf+ eBooks by Title", "Bookshelf+ eBooks: Nonfiction", "Bookshelf+ eBooks: Fiction"];
  const BSP_SUBS = ["Bookshelf+ Overview", "Bookshelf+ FAQs", "Subscription Terms and Conditions", "How to Download Bookshelf+ Titles in the Deseret Bookshelf App", "Gifting a Bookshelf+ Subscription", "Audiobooks and Talks Included with Bookshelf+", "Credit Card Requirement for the Bookshelf+ Trial", "How to Update or Add a Credit Card to a Subscription", "eBooks Included with Bookshelf+"];
  const TOPICS = [
    { slug: "website-help", name: "Website Help", icon: "language", url: "collection/1-website-help", secs: [
      ["Order Support", ["Coupons and Promotion Codes", "Payments and Billing", "Downloading Digital Music Purchases", "Promotions and Discounts", "Quantity Discounts", "Order Invoice", "Personalization/Imprinting", "Sending Gifts", "How to Apply a Gift Card to an Order", "How to Apply Promotion Codes", "Payment Not Going Through", "Free Shipping Offers", "Library and School Orders", "How to Cancel an Order", "Bulk Orders for Organizations"]],
      ["Account Information", ["Changing Billing Information on File", "How to Unsubscribe from Marketing Communications", "Changing Your Email Address", "Data Removal Request", "Payment Not Going Through"]],
      ["Contact", ["Customer Support Hours of Operation", "Submitting Product to Deseret Book", "Contact Deseret Book Authors", "Deseret Book Store Locations"]],
      ["Misc. Information", ["Church Distribution Services at Deseret Book", "English Scriptures", "Copyright & Permissions Information", "Knight & Wells Temple Dresses", "Statues and Figurines: Care and Cleaning", "Locating Out of Print Books", "Curbside Pickup", "Art Terms", "Product Reviews", "Book Binding Information", "Emergency Preparedness Items", "Framed Art"]]] },
    { slug: "general-company-information", name: "General Company Information", icon: "domain", url: "collection/162-general-company-information", secs: [
      ["Company", ["Contact Deseret Book", "Working at Deseret Book"]],
      ["Vendor Information", ["Vendor Information", "Vendor Freight Routing Instructions"]]] },
    { slug: "bookshelf-plus-helps", name: "Bookshelf Plus Helps", icon: "auto_stories", url: "collection/214-bookshelf-plus-helps", secs: [
      ["Getting Started", ["Bookshelf+ Overview", "Bookshelf+ FAQs", "Credit Card Requirement for the Bookshelf+ Trial", "How to Download Bookshelf+ Titles in the Deseret Bookshelf App"]],
      ["What’s Included", ["Audiobooks and Talks Included with Bookshelf+", "eBooks Included with Bookshelf+"].concat(BSP_LISTS)],
      ["Your Subscription", ["Gifting a Bookshelf+ Subscription", "How to Update or Add a Credit Card to a Subscription", "Cancel Bookshelf+", "Subscription Terms and Conditions"]]] },
    { slug: "shipping-and-returns", name: "Shipping & Returns", icon: "local_shipping", url: "collection/23-shipping-returns", secs: [
      ["Shipping", ["Shipping and Handling Information", "Order Status", "Tracking My Order", "Shipping Discounts", "Surcharges", "Shipping to Correctional Facilities", "Order Online Pick Up In Store"]],
      ["Returns", ["Returns Information", "Returning Digital Content", "Cancel Order/Item(s) From Order"]]] },
    { slug: "deseret-bookshelf", name: "Deseret Bookshelf", icon: "menu_book", url: "collection/9-deseret-bookshelf", secs: [
      ["General Bookshelf Support", ["How to Access eBooks and Audiobooks", "Books Not Showing Up", "Installing the Deseret Bookshelf App", "Bookshelf Frequently Asked Questions", "Streaming vs. Downloading Audiobooks", "Free Content on the Bookshelf App", "Gift an eBook or Digital Audiobook", "Audiobook Screen Off Center and Missing Controls (iOS)", "Guide to Creating Collections in Deseret Bookshelf"]],
      ["Bookshelf Plus", ["Cancel Bookshelf+"].concat(BSP_LISTS)],
      ["Misc Bookshelf", ["Cancel Bookshelf+", "Gift an eBook or Digital Audiobook", "Guide to Creating Collections in Deseret Bookshelf"]]] },
    { slug: "subscriptions", name: "Subscriptions (Bookshelf Plus, Platinum, Video)", icon: "loyalty", url: "collection/37-subscriptions-bookshelf-plus-platinum-video", secs: [
      ["Bookshelf Plus", BSP_SUBS],
      ["Platinum Rewards", ["Platinum Rewards Overview", "Platinum Rewards FAQs", "Subscription Terms and Conditions", "Platinum Rewards Disclaimer and Exclusions", "How to Update or Add a Credit Card to a Subscription", "Cancel Platinum Rewards"]],
      ["Deseret Video", ["How to Update or Add a Credit Card to a Subscription", "Is Deseret Video on Roku or Apple TV?", "Cancel Deseret Video+"]]] },
    { slug: "time-out-for-women", name: "Time Out for Women", icon: "groups", url: "collection/106-time-out-for-women", secs: [
      ["Time Out for Women", ["Time Out for Women Events and Tickets", "A Deseret Book Presents Events", "Event Questions"]]] },
    { slug: "events", name: "Events", icon: "event", url: "collection/113-events", secs: [
      ["A Deseret Book Presents", ["Upcoming Events", "Purchase with Confidence", "Seating", "Face Coverings", "COVID-19", "Still Have More Questions?"]]] }
  ];
  const POPULAR = ["Returns Information", "Order Status", "Tracking My Order", "Shipping and Handling Information", "Shipping Discounts", "Cancel Order/Item(s) From Order", "Order Online Pick Up In Store", "Shipping to Correctional Facilities", "Returning Digital Content", "Surcharges"];
  const ALL_ARTS = Array.from(new Set(TOPICS.flatMap((t) => t.secs.flatMap((s) => s[1])).filter((a) => ART[a])));
  const SUP_HOME = "#/info/questions-and-support";

  /* One article row: an in-project page (arrow) or the live help article in a new tab (open_in_new). */
  function ArtRow({ title, go, onGo }) {
    const { Icon } = DS();
    const here = HERE[title];
    const ext = here && /^https?:/.test(here) ? here : !here && ART[title] ? SUP + "article/" + ART[title] : null;
    const inner = [h("span", { key: "t" }, title), Icon ? h(Icon, { key: "i", name: ext ? "open_in_new" : "arrow_forward", size: 14 }) : null];
    if (ext) return h("a", { href: ext, target: "_blank", rel: "noopener noreferrer", "aria-label": title + " (opens in a new tab)" }, inner);
    return h("button", { type: "button", onClick: () => (here.charAt(0) === "#" ? go(here) : onGo(here)) }, inner);
  }

  function Support({ onGo, go, sub }) {
    const { Input, Icon, Button } = DS();
    const [q, setQ] = useState("");
    const topic = TOPICS.find((t) => t.slug === sub);
    const nav = (hash) => (go ? go(hash) : (location.hash = hash));
    useEffect(() => { window.scrollTo(0, 0); setQ(""); }, [sub]);
    const help = h("div", { className: "fp-band" }, h("div", null, h("h2", { className: "fp-h3" }, "Still Need Help?"), h("p", null, "Customer service is available Monday–Friday, 9:00 a.m.–5:00 p.m. (MT).")), h(Button, { variant: "secondary", size: "md", onClick: () => onGo("Contact Us") }, "Contact us"));
    const rows = (list) => h("ul", { className: "fp-links" }, list.map((a) => h("li", { key: a }, h(ArtRow, { title: a, go: nav, onGo }))));
    if (topic) {
      const others = TOPICS.filter((t) => t !== topic);
      return h(Shell, { label: "Questions & Support", onGo, title: topic.name, eyebrow: "Questions & Support",
        crumbs: [{ label: "Questions & Support", href: SUP_HOME }, { label: topic.name }] },
        topic.secs.map((s) => h(Sec, { key: s[0], title: topic.secs.length > 1 || s[0] !== topic.name ? s[0] : null }, rows(s[1]))),
        h(Sec, { title: "Other Topics" },
          h("ul", { className: "fp-tiles" }, others.map((c) => h("li", { key: c.slug }, h("a", { className: "fp-tile", href: SUP_HOME + "/" + c.slug, onClick: (e) => { e.preventDefault(); nav(SUP_HOME + "/" + c.slug); } }, Icon ? h(Icon, { name: c.icon, size: 24 }) : null, h("span", null, c.name)))))),
        help);
    }
    const s = q.trim().toLowerCase();
    const hits = s ? ALL_ARTS.concat(Object.keys(HERE).filter((k) => !ART[k])).filter((a, i, l) => l.indexOf(a) === i && a.toLowerCase().indexOf(s) > -1) : [];
    const cols = TOPICS.filter((c) => !s || c.name.toLowerCase().indexOf(s) > -1);
    return h(Shell, { label: "Questions & Support", onGo, lede: "Answers to common questions about orders, shipping, digital books, subscriptions, and events." },
      h("div", { className: "fp-search" }, h(Input, { icon: "search", "aria-label": "Search help articles", placeholder: "Search help articles", value: q, onChange: (e) => setQ(e.target.value) })),
      cols.length ? h(Sec, { title: "Browse by Topic" },
        h("ul", { className: "fp-tiles" }, cols.map((c) => h("li", { key: c.slug }, h("a", { className: "fp-tile", href: SUP_HOME + "/" + c.slug, onClick: (e) => { e.preventDefault(); nav(SUP_HOME + "/" + c.slug); } }, Icon ? h(Icon, { name: c.icon, size: 24 }) : null, h("span", null, c.name)))))) : null,
      h(Sec, { title: s ? "Matching Articles" : "Most Popular Articles" },
        (s ? hits : POPULAR).length ? rows(s ? hits : POPULAR) :
        h("p", { className: "fp-meta" }, "No articles match “" + q.trim() + "”. Try a shorter search, or contact us.")),
      help);
  }

  function ShipReturns({ onGo, sub }) {
    const { Tabs } = DS();
    const [tab, setTab] = useState(sub === "returns" ? "ret" : "ship");
    return h(Shell, { label: "Shipping & Returns", onGo },
      Tabs ? h(Tabs, { tabs: [{ value: "ship", label: "Shipping" }, { value: "ret", label: "Returns" }], value: tab, onChange: (v) => setTab(v && v.target ? v.target.value : v) }) : null,
      tab === "ship" ? h(React.Fragment, null,
        h("p", { className: "fp-note" }, "Please note that the days listed are \u201ctypical\u201d for most of the year and may fluctuate. From November 24th through December 31st, please allow 2\u20133 business days for processing before your package ships. Personalized items may require an additional 2 days."),
        h(Sec, { title: "Rates" }, h(Tbl, { head: ["Type", "Standard", "Priority", "Express"], rows: [["United States* \u2013 Sub Total < $7", "$2.99", "$14.99", "$29.99"], ["United States* \u2013 Sub Total > $7", "$6.99", "$14.99", "$29.99"], ["Int. Canada/Mexico", "$14.99", "$29.99", "\u2013"], ["International", "$29.99", "$59.99", "\u2013"]] }),
          h("p", { className: "fp-meta" }, "*\u201cUnited States\u201d include the contiguous states as well as Alaska, Hawaii, Protectorates, and Military Installations (APO/FPO)."),
          h("h3", { className: "fp-h4" }, "Surcharge Fees"), P("Heavy or large items will incur an additional fee that will be added on to the shipping charges in checkout. This will vary based on the products weight and size.")),
        h(Sec, { title: "Typical Delivery Time (Business Days)" }, h(Tbl, { head: ["Method", "US Contiguous", "Alaska and Hawaii", "US Protectorates", "Military (APO/FPO)", "Canada & Mexico", "International Other"], rows: [["Standard", "5\u201310", "7\u201314", "15\u201324", "14\u201324", "7\u201321", "9\u201314"], ["Priority", "2\u20133", "3\u20134", "5\u20137", "7\u201315", "3\u20134", "3\u20134"], ["Express", "1\u20132", "2\u20133", "2\u20133", "\u2013", "\u2013", "\u2013"]] })),
        h(Sec, { title: "Information Regarding Shipping Estimates" }, UL([
          "Estimates are calculated in business days after the parcel leaves the Deseret Book warehouse. Business Days are Monday thru Friday and exclude holidays that shipping carriers are closed for operations.",
          "Processing time for in-stock items is typically 1\u20132 business days but can extend longer during high volume seasons.",
          "You will be notified by email when your package is shipped and will include a link for the tracking information.",
          "Some orders will come in multiple shipments."])),
        h(Sec, { title: "International Shipping Information" }, UL([
          "International orders that are over $200 (USD) should select priority shipping so that the package is insured.",
          "Food items, including food storage items, emergency preparedness food, and 72 Hour Kits that contain food items cannot be shipped internationally.",
          "Shipments outside the United States may be subject to tariffs, duties, value added taxes (VAT) and other customs fees, which are the responsibility of the customer/recipient.",
          "All pricing and invoicing are in U.S. dollars and must be paid for in U.S. Funds."]))) :
      h(React.Fragment, null,
        h("p", { className: "fp-note" }, "Returns are accepted within 30 days* of purchase on most items. Items need to be new, unused, and in resalable condition unless the return is for damaged or defective merchandise.**"),
        h(Sec, { title: "Mail Returns" },
          P("When returning items to our Customer Service Center, please indicate the reason for your return on the packing slip and include the packing slip in the carton. For your protection, we suggest sending your return via UPS, FEDEX Ground, or insured parcel post. Retain your receipt and tracking number should you need to follow up with the company that handled your return."),
          h("address", { className: "fp-addr" }, "Attention: Returns Department", h("br"), "Deseret Book Company", h("br"), "2240 West 1500 South", h("br"), "Salt Lake City UT 84104-4124"),
          P("DeseretBook.com cannot credit for shipping and handling or pay for return shipping charges unless we have made a shipping error.")),
        h(Sec, { title: "Exclusions" },
          P("Personalized items, out of print, opened CD\u2019s and DVD (except for defectives), and items purchased on clearance are not returnable. Gift Cards (egift cards or physical gift cards) are not returnable/refundable. Digital products (eBooks, audiobooks, etc.) are also not returnable."),
          P("Please note that it may take 1\u20132 billing cycles for your bank to post the credit to your statement.")),
        h(Sec, { title: "Retail Store Returns" },
          P("We gladly exchange or return any product that does not meet your satisfaction within 30 days of purchase. Proof of purchase and photo ID are required for all returns or exchanges. You will be asked to provide your name and phone number in order to process the return."),
          P("Return of Church Distribution products, purchased at retail Distribution Center locations, have a 90 day period in which to make a return. Receipt or invoice will need to be presented for a full refund. Without a receipt, refunds will be limited to the current selling price.")),
        h(Sec, { title: "Knight and Wells (Temple Dresses)" },
          P("Returns are accepted within 30 days* of purchase. Clothing items must be unworn and in resalable condition and have original tags and packaging. Contact our customer service department at service@deseretbook.com for a return label for shipments within the United States.")),
        h("div", { className: "fp-fine" },
          P("* For mail order customers 30 days from the time you receive your shipment. If mailing the merchandise back to the warehouse a 15 day grace period will be extended to cover the return shipping time. In store returns of mailed items require a Deseret Book account, packing slip, photo ID and Credit/Debit card to process the refund."),
          h("p", null, "** For defective or damaged products please contact our customer service department at ", Mail("service@deseretbook.com"), " or 1-800-453-4532 before returning the items."))));
  }

  function DoNotSell({ onGo }) {
    const { Button, Radio, Checkbox } = DS();
    const f = useForm({ type: "sale", who: "self", first: "", last: "", email: "", state: "", ok: false });
    const ref = useMemo(() => "PR-" + Math.floor(100000 + Math.random() * 899999), [f.done]);
    return h(Shell, { label: "Do Not Sell My Information", onGo, lede: "Under applicable state law, you may have the right to opt out of the processing of your personal data for the purposes of targeted advertising, the sale of personal data, or profiling that may have a legal or other significant impact." },
      f.done ? h(Ok, { title: "Request received", again: "Submit another request", onAgain: f.reset },
        h("p", null, "Reference " + ref + ". We sent a confirmation to " + f.v.email.trim() + "."),
        h("p", { className: "fp-meta" }, "We will use the information you provide to us solely for the purpose of verifying your request and locating your data, if any, within our records.")) :
      h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ first: req("Enter your first name."), last: req("Enter your last name."), email, state: req("Select your state of residence."), ok: (x) => !x ? "Confirm the information is accurate to continue." : null }) },
        h("fieldset", { className: "fp-fs" }, h("legend", null, "What would you like to do?"),
          h(Radio, { name: "dns-type", value: f.v.type, onChange: f.set("type"), options: [{ value: "sale", label: "Opt out of the sale or sharing of my personal information" }, { value: "ads", label: "Opt out of targeted advertising" }, { value: "access", label: "Access my personal information" }, { value: "delete", label: "Delete my personal information" }, { value: "correct", label: "Correct my personal information" }] })),
        h("fieldset", { className: "fp-fs" }, h("legend", null, "I am submitting this request as"),
          h(Radio, { name: "dns-who", value: f.v.who, onChange: f.set("who"), options: [{ value: "self", label: "The consumer" }, { value: "agent", label: "An authorized agent" }] }),
          f.v.who === "agent" ? h("p", { className: "fp-meta" }, "We must receive written authorization or a power of attorney, signed by the consumer, for the agent to act on their behalf.") : null),
        h(Row, null, h(Field, { label: "First name", value: f.v.first, onChange: f.set("first"), error: f.e.first, autoComplete: "given-name" }), h(Field, { label: "Last name", value: f.v.last, onChange: f.set("last"), error: f.e.last, autoComplete: "family-name" })),
        h(Row, null, h(Field, { label: "Email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" }), h(Pick, { label: "State of residence", value: f.v.state, onChange: f.set("state"), options: stateOpts })),
        f.e.state ? h("p", { className: "fp-err" }, f.e.state) : null,
        h(Checkbox, { label: "I confirm that the information above is accurate and that I am the consumer, or authorized to act for them.", checked: f.v.ok, onChange: f.set("ok") }),
        f.e.ok ? h("p", { className: "fp-err" }, f.e.ok) : null,
        h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Submit request"))));
  }


  /* ---------- Submissions & Legal group (content summarized from deseretbook.com) ---------- */
  const SUBMIT_GO = (onGo, l) => h("a", { href: "#/info/" + slug(l), onClick: (e) => { e.preventDefault(); onGo(l); } }, l);
  const EXT = (href, t) => h("a", { href, target: "_blank", rel: "noopener" }, t);

  function ProductSubmissions({ onGo }) {
    const [sel, setSel] = useState("ps-email");
    const secs = [
      h(Sec, { key: "ps-email", id: "ps-email", title: "Submit by Email" },
        P("Email is the preferred way to send a product. Include everything the buying team needs to evaluate it in one message, and send it to:"),
        h("p", null, Mail("retailbuying@deseretbook.com"))),
      h(Sec, { key: "ps-include", id: "ps-include", title: "What to Include" },
        UL(["Retail price and your cost price", "Your company’s terms and policies", "A contact person for the product", "A product description and any marketing plans", "Images of the product"]),
        h("h3", { className: "fp-h4" }, "Books"),
        P("Attach a cover image and the manuscript as a Word or PDF file."),
        h("h3", { className: "fp-h4" }, "Other products"),
        P("Attach a product image, and the dimensions if they apply.")),
      h(Sec, { key: "ps-art", id: "ps-art", title: "Art Submissions" },
        h("p", null, "Art is submitted through the Art Submission Form instead of email. The form is linked on the ", EXT("https://www.deseretbook.com/retail-product-submissions.html", "Retail Product Submission page on deseretbook.com"), ". No separate email is needed when you use the form.")),
      h(Sec, { key: "ps-samples", id: "ps-samples", title: "Physical Samples" },
        P("Samples are not kept and are not returned, so send only what you can part with. Mail them to the Retail Buying Team at the address that matches your carrier."),
        h(Tbl, { head: ["Carrier", "Address"], rows: [
          ["UPS or FedEx", h("address", { className: "fp-addr" }, "Deseret Book Company", h("br"), "Attn: Retail Buying Team", h("br"), "55 N 300 W #300", h("br"), "Salt Lake City, UT 84101")],
          ["USPS", h("address", { className: "fp-addr" }, "Attn: Retail Buying Team", h("br"), "PO Box 30178", h("br"), "Salt Lake City, UT 84130-0178")]] })),
      h(Sec, { key: "ps-review", id: "ps-review", title: "Review & Replies" },
        P("A buying committee reviews each product within 6 to 8 weeks of receiving it. The team replies only about products it selects. If you do not hear back, the product was not chosen.")),
      h(Sec, { key: "ps-faq", id: "ps-faq", title: "Good to Know" },
        UL(["The team reviews finished products only and does not give feedback on ideas or concepts.", "Meeting requests and walk-ins are not accepted before the submission process has been followed.", "Purchasing is handled by the corporate office, so please do not contact store staff about a submission.", h(React.Fragment, null, "Looking to publish a book instead? See ", SUBMIT_GO(onGo, "Manuscript Submissions"), ".")]))];
    const navGroups = [["Submit a Product", [["ps-email", "Submit by Email", "mail"], ["ps-include", "What to Include", "checklist"], ["ps-art", "Art Submissions", "palette"]]], ["After You Submit", [["ps-samples", "Physical Samples", "inventory_2"], ["ps-review", "Review & Replies", "schedule"], ["ps-faq", "Good to Know", "info"]]]];
    return h(Shell, { label: "Product Submission Guidelines", title: "Retail Product Submission Process", onGo, sel, onSel: setSel, navGroups,
      lede: "How to pitch a product for sale in Deseret Book stores and on deseretbook.com. Every submission goes to the Retail Buying Team." }, secs.filter((x) => x.key === sel));
  }

  function ManuscriptSubmissions({ onGo }) {
    const [sel, setSel] = useState("ms-what");
    const secs = [
      h(Sec, { key: "ms-what", id: "ms-what", title: "What We Publish" },
        UL(["Gospel teaching", "Inspiration", "Scripture reference", "Help and hope", "History, biography, and family or parenting books, only occasionally"])),
      h(Sec, { key: "ms-not", id: "ms-not", title: "What We Don’t Accept" },
        UL(["Family histories, memoirs, and autobiographies", "Journals, workbooks, daily devotionals, and poetry", "Health and wellness or financial advice", "Fantasy and science fiction"]),
        P("Books for the general market belong with our national imprint, Shadow Mountain. Its guidelines are on the Shadow Mountain site."),
        h("p", null, EXT("https://shadowmountain.com/submission-guidelines", "Shadow Mountain submission guidelines"))),
      h(Sec, { key: "ms-policies", id: "ms-policies", title: "Policies" },
        UL(["We do not consider previously published or self-published works.", "Please do not submit the same manuscript to both Deseret Book and Shadow Mountain.", "We do not hold in-person or phone meetings about submissions.", "We cannot give writing advice by email.", "Rights and royalties are discussed only after a manuscript is accepted."])),
      h(Sec, { key: "ms-how", id: "ms-how", title: "How to Submit" },
        P("Use the online submission portal. Manuscripts sent by email or mail are discarded."),
        h("div", { className: "fp-acts" }, h(DS().Button, { href: "https://querymanager.com/3663", target: "_blank", rel: "noopener", size: "md", iconAfter: "open_in_new" }, "Open the submission portal")),
        h("h3", { className: "fp-h4" }, "Query letter"),
        UL(["Title, genre, audience, and word count", "A synopsis and a two- to three-sentence pitch", "What makes your book different", "An outline of the contents"]),
        h("h3", { className: "fp-h4" }, "About the author"),
        P("A short bio, your contact information, and any background that is relevant to the manuscript."),
        h("h3", { className: "fp-h4" }, "Manuscript format"),
        UL(["One Word document", "12-point font, single or double spaced", "Spell-checked", "Complete source documentation and a bibliography for nonfiction"]),
        P("The portal asks for the first 50 pages, but please submit the entire manuscript.")),
      h(Sec, { key: "ms-review", id: "ms-review", title: "Review" },
        P("Reviews take up to sixteen weeks. There are three possible outcomes: acceptance, an invitation to revise and resubmit, or a decline. We do not provide detailed critiques.")),
      h(Sec, { key: "ms-contact", id: "ms-contact", title: "Questions or Withdrawals" },
        P("For questions about a submission, or to withdraw one, email:"),
        h("p", null, Mail("submissionquestions@deseretbook.com")))];
    const navGroups = [["Before You Submit", [["ms-what", "What We Publish", "menu_book"], ["ms-not", "What We Don’t Accept", "block"], ["ms-policies", "Policies", "gavel"]]], ["Submitting", [["ms-how", "How to Submit", "upload_file"], ["ms-review", "Review", "schedule"], ["ms-contact", "Questions or Withdrawals", "mail"]]]];
    return h(Shell, { label: "Manuscript Submissions", onGo, sel, onSel: setSel, navGroups,
      lede: "Deseret Book publishes values-based nonfiction for a Latter-day Saint audience. We look for manuscripts that are relevant, have a clear premise and a logical structure, and are uplifting in tone." }, secs.filter((x) => x.key === sel));
  }

  function LegalHub({ onGo }) {
    const [sel, setSel] = useState("lg-docs");
    const docs = [
      ["Terms of Use", "The rules for using deseretbook.com, including purchases, returns, pricing, and intellectual property."],
      ["Privacy Policy", "How Deseret Book collects, uses, and protects personal information, and the rights you have over it."],
      ["SMS Terms and Conditions", "What you agree to when you sign up for Deseret Book text messages, and how to opt out."],
      ["Bookshelf Plus Terms of Use", "The license, subscription, and billing terms for the Deseret Bookshelf app and Bookshelf+."]];
    const secs = [
      h(Sec, { key: "lg-docs", id: "lg-docs", title: "Policies & Terms" },
        h("ul", { className: "fp-ul fp-docs" }, docs.map(([l, d]) => h("li", { key: l }, h("strong", null, SUBMIT_GO(onGo, l)), h("br"), d)))),
      h(Sec, { key: "lg-access", id: "lg-access", title: "Accessibility" },
        P("If you have trouble using this site with a screen reader, call 1-800-453-4532."))];
    const navGroups = [["Legal", [["lg-docs", "Policies & Terms", "gavel"], ["lg-access", "Accessibility", "accessibility_new"]]]];
    return h(Shell, { label: "Legal", title: "Policies, Terms & Conditions", onGo, sel, onSel: setSel, navGroups,
      lede: "The policies and terms that apply to shopping at Deseret Book, texting with us, and using Bookshelf+." }, secs.filter((x) => x.key === sel));
  }

  const SMS = [
    ["Your Agreement", "When you opt in, you agree to receive both marketing and non-marketing text messages from Deseret Book at the number you provide. They may be sent with an automated dialing system. Agreeing to receive marketing texts is not required to buy anything."],
    ["Message Frequency and Cost", "The number of messages varies. Standard message and data rates from your carrier may apply. Deseret Book does not charge a separate fee for the program."],
    ["Opting In", "Reply YES to confirm your sign-up. Reply HELP at any time for help. Opting in applies even if your number is on a Do Not Call list."],
    ["Opting Out", "Reply STOP to end messages. Replying STOP opts you out of the program you replied to, so you may need to reply to each program separately."],
    ["Supported Carriers", "Messages are supported by major U.S. carriers. Carriers are not liable for messages that are delayed or not delivered."],
    ["If Your Number Changes", "Let us know through a Contact Us request when you change your mobile number, so messages don’t go to someone else."],
    ["Privacy", "Mobile information collected through short code campaigns is not shared outside the company."],
    ["Eligibility", "The program is for U.S. residents who are 18 or older."],
    ["Liability and Governing Law", "The program is provided as is, and Deseret Book’s liability is limited as described in the full terms. Utah law governs these terms."],
    ["Contact", ["Questions about text messaging can go to ", Mail("service@deseretbook.com"), "."]]
  ];
  function SmsTerms({ onGo }) {
    return h(Legal, { label: "SMS Terms and Conditions", onGo, items: SMS, contact: "service@deseretbook.com", meta: "Last modified June 3, 2026",
      note: "This page summarizes the SMS terms. Questions can go to ",
      lede: "These terms apply when you sign up to receive text messages from Deseret Book." });
  }

  const BSP_TERMS = [
    ["What These Terms Cover", "These terms cover the Deseret Bookshelf service for audiobooks, e-books, and podcasts, and the Bookshelf+ subscription."],
    ["Your License", "You receive a limited, revocable license to use digital content, not ownership of it. Availability can depend on the number of devices, time, region, and your subscription status. Content is not compatible with Kindle or other e-readers."],
    ["Subscriptions and Renewal", "Bookshelf+ plans renew automatically, monthly or yearly, until you cancel. Cancel any time in My Account under My Subscriptions. Partial billing periods are not refunded."],
    ["Free Trial", "New subscribers may be offered a one-month free trial. Trials are offered at Deseret Book’s discretion."],
    ["Age Requirement", "The service is not intended for anyone under 18."],
    ["Calls and Texts", "Standard rates apply to text messages. Phone calls with us may be monitored or recorded."],
    ["Warranties, Liability, and Disputes", "The service is provided as is. Liability is limited, you agree to indemnify Deseret Book as described in the full terms, and claims must be brought within one year unless the law sets a shorter period. Utah law governs, and disputes are heard in federal or Utah courts in Salt Lake City."],
    ["Contact", ["Send permission requests and questions to ", Mail("permissions@deseretbook.com"), ", and copyright complaints to ", Mail("rights@deseretbook.com"), ". Mail: PO Box 30178, Salt Lake City, UT 84130."]]
  ];
  function BspTerms({ onGo }) {
    return h(Legal, { label: "Bookshelf Plus Terms of Use", onGo, items: BSP_TERMS,
      note: "This page summarizes the Bookshelf+ terms. The full terms are available on request from ",
      lede: "These terms apply to the Deseret Bookshelf app and the Bookshelf+ subscription." });
  }


  /* ---------- Gift a Subscription / Redeem a Gifted Subscription ---------- */
  function GiftSub({ onGo }) {
    const { Button } = DS();
    const plans = [{ value: "year", label: "12 months of Bookshelf+ — $99.00" }, { value: "month", label: "1 month of Bookshelf+ — $9.99" }];
    const f = useForm({ plan: "year", rname: "", remail: "", name: "", email: "", msg: "" });
    return h(Shell, { label: "Gift a Subscription", onGo,
      lede: "Give someone unlimited access to 4,000+ audiobooks and eBooks in the Deseret Bookshelf app. The gift arrives by email, and the recipient redeems it with a code. A gift doesn’t renew." },
      h(Sec, { title: "Send a gift" },
        f.done ? h(Ok, { title: "Gift on its way", again: "Send another gift", onAgain: f.reset }, h("p", null, "We’ll email the gift to " + f.v.remail.trim() + ", and send you a receipt at " + f.v.email.trim() + ".")) :
        h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ rname: req("Enter the recipient’s name."), remail: email, name: req("Enter your name."), email }) },
          h(Pick, { label: "Gift length", value: f.v.plan, onChange: f.set("plan"), options: plans }),
          h(Row, null, h(Field, { label: "Recipient name", value: f.v.rname, onChange: f.set("rname"), error: f.e.rname }), h(Field, { label: "Recipient email", type: "email", value: f.v.remail, onChange: f.set("remail"), error: f.e.remail })),
          h(Row, null, h(Field, { label: "Your name", value: f.v.name, onChange: f.set("name"), error: f.e.name, autoComplete: "name" }), h(Field, { label: "Your email", type: "email", value: f.v.email, onChange: f.set("email"), error: f.e.email, autoComplete: "email" })),
          h(Field, { label: "Message (optional)", multiline: true, rows: 4, value: f.v.msg, onChange: f.set("msg") }),
          h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Continue to payment"), h(Button, { variant: "ghost", size: "md", onClick: () => onGo("Redeem a Gifted Subscription") }, "Redeem a gift instead")))));
  }

  function RedeemGift({ onGo }) {
    const { Button } = DS();
    const f = useForm({ code: "" });
    return h(Shell, { label: "Redeem a Gifted Subscription", onGo,
      lede: "Got a Bookshelf+ gift? Enter the code from your gift email to start your subscription. Sign in to the account you’ll use with the Deseret Bookshelf app." },
      h(Sec, { title: "Enter your gift code" },
        f.done ? h(Ok, { title: "Gift redeemed", again: "Redeem another code", onAgain: f.reset }, h("p", null, "Your Bookshelf+ gift is now on your account. Open the Deseret Bookshelf app to start listening.")) :
        h("form", { className: "fp-form", noValidate: true, onSubmit: f.submit({ code: (x) => !x || !String(x).trim() ? "Enter your gift code." : String(x).replace(/[\s-]/g, "").length < 8 ? "Gift codes are at least 8 characters. Check your gift email and try again." : null }) },
          h(Field, { label: "Gift code", value: f.v.code, onChange: f.set("code"), error: f.e.code, autoComplete: "off" }),
          h("div", { className: "fp-acts" }, h(Button, { type: "submit", size: "md" }, "Redeem gift"), h(Button, { variant: "ghost", size: "md", onClick: () => onGo("Gift a Subscription") }, "Gift a subscription instead")))));
  }

  /* Two links in the Bookshelf+ pages' sand section, after the FAQ (same card style as the About page's Store Finder / Careers links). */
  function BspGiftLinks() {
    const go = (l) => { location.hash = "#/info/" + slug(l); };
    return h("nav", { className: "fa-more bsp-gift-links", "aria-label": "Bookshelf+ gifts" },
      ["Gift a Subscription", "Redeem a Gifted Subscription"].map((l) => h("button", { key: l, type: "button", onClick: () => go(l) }, h("span", null, l), h(DS().Icon, { name: "arrow_forward", size: 20 }))));
  }
  window.BspGiftLinks = BspGiftLinks;

  const PAGES = { "Gift a Subscription": GiftSub, "Redeem a Gifted Subscription": RedeemGift, "Product Submission Guidelines": ProductSubmissions, "Manuscript Submissions": ManuscriptSubmissions, "Legal": LegalHub, "SMS Terms and Conditions": SmsTerms, "Bookshelf Plus Terms of Use": BspTerms, "Careers": Careers, "Terms of Use": Terms, "Privacy Policy": Privacy, "Check Order": CheckOrder, "Gift Card Balance": GiftBalance, "Request a Catalog": Catalog, "Contact Us": Contact, "Questions & Support": Support, "Shipping & Returns": ShipReturns, "Do Not Sell My Information": DoNotSell };
  function FooterPage(props) {
    const C = (window.FP_PAGES || {})[props.label];
    return C ? h(C, props) : null;
  }
  window.FP = { CheckOrderBody, h, DS, Shell, Sec, Tbl, Ok, Field, Pick, Row, useForm, req, email, Mail, P, UL, slug, GROUPS, groupOf };
  window.FP_PAGES = Object.assign(window.FP_PAGES || {}, PAGES);
  window.FP_SLUG = slug;
  window.FooterPage = FooterPage;
})();
