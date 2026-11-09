/* Account page sections with mock data: Account Information, Addresses, Payment methods (#/account/<section>).
   Plain JS. Edits persist in localStorage (db-acct-mock) so they survive moving between sections. */
(function () {
  const h = React.createElement;
  const DS = () => window.DeseretBookDesignSystem_609afa || {};
  const KEY = "db-acct-mock";
  const STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

  const splitName = (n) => { const w = String(n || "Sarah Johnson").trim().split(/\s+/); return { first: w[0] || "", last: w.length > 1 ? w.slice(1).join(" ") : "" }; };
  function seed(user) {
    const nm = splitName(user && user.name);
    return {
      info: { first: nm.first, last: nm.last, email: (user && user.email) || "sarah.johnson@example.com", phone: "(801) 555-0142", birth: "1988-04-17" },
      pwChanged: "March 3, 2026",
      prefs: { news: true, releases: true, bsp: false, plat: true, orders: true, freq: "Weekly" },
      addresses: [
        { id: "a1", first: nm.first, last: nm.last, line1: "57 W South Temple", line2: "Apt 1204", city: "Salt Lake City", state: "UT", zip: "84101", phone: "(801) 555-0142", ship: true, bill: true },
        { id: "a2", first: "Ruth", last: "Johnson", line1: "1820 N 900 E", line2: "", city: "Provo", state: "UT", zip: "84604", phone: "(801) 555-0187", ship: false, bill: false }
      ],
      cards: [
        { id: "c1", brand: "Visa", last4: "4242", exp: "08/29", name: nm.first + " " + nm.last, addr: "a1", def: true },
        { id: "c2", brand: "Mastercard", last4: "5454", exp: "11/27", name: nm.first + " " + nm.last, addr: "a1", def: false }
      ],
      gift: { last4: "7731", balance: 25 }
    };
  }
  function useAcct(user) {
    const [d, setD] = React.useState(() => {
      try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.info) return s; } catch (e) {}
      return seed(user);
    });
    const save = (fn) => setD((prev) => { const next = fn(prev); try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (e) {} return next; });
    return [d, save];
  }
  const fmtBirth = (iso) => { if (!iso) return "Not added"; const [y, m, dd] = iso.split("-").map(Number); return new Date(y, m - 1, dd).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); };
  const addrLines = (a) => [a.first + " " + a.last, a.line1 + (a.line2 ? ", " + a.line2 : ""), a.city + ", " + a.state + " " + a.zip, a.phone];

  /* Shared pieces */
  function Page({ title, action, intro, children }) {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return h("main", { className: "am" },
      h("div", { className: "am-stack", "data-screen-label": title },
        h("div", { className: "am-head" }, h("h1", null, title), action || null),
        intro ? h("p", { className: "am-intro" }, intro) : null,
        children));
  }
  function Section({ title, action, children }) {
    return h("section", { className: "am-sec" },
      h("div", { className: "am-sec-h" }, h("h2", null, title), action || null),
      children);
  }
  function Rows({ rows }) {
    return h("dl", { className: "am-dl" }, rows.map(([k, v]) => h("div", { key: k }, h("dt", null, k), h("dd", null, v))));
  }
  function Saved({ show }) { return show ? h("span", { className: "am-saved", role: "status" }, "Changes saved") : null; }
  function useSaved() {
    const [s, set] = React.useState(false);
    React.useEffect(() => { if (!s) return; const t = setTimeout(() => set(false), 2600); return () => clearTimeout(t); }, [s]);
    return [s, () => set(true)];
  }
  const Field = (p) => h("div", { className: "am-f" + (p.wide ? " am-f-wide" : "") }, h(DS().Input, Object.assign({}, p, { wide: undefined })));
  function Actions({ onCancel, saveLabel }) {
    const { Button } = DS();
    return h("div", { className: "am-acts" },
      h(Button, { type: "submit", size: "md" }, saveLabel || "Save changes"),
      h(Button, { type: "button", variant: "secondary", size: "md", onClick: onCancel }, "Cancel"));
  }
  function Confirm({ open, title, text, yes, onYes, onClose }) {
    const { Dialog, Button } = DS();
    return h(Dialog, { open, size: "sm", tone: "warning", title, description: text, onClose,
      footer: h(React.Fragment, null,
        h(Button, { variant: "secondary", size: "md", onClick: onClose }, "Keep it"),
        h(Button, { size: "md", onClick: () => { onYes(); onClose(); } }, yes)) });
  }

  /* Account Information */
  function AccountInfo({ user }) {
    const { Button, Card } = DS();
    const [d, save] = useAcct(user);
    const [edit, setEdit] = React.useState(false);
    const [f, setF] = React.useState(d.info);
    const [pw, setPw] = React.useState(null);
    const [pwErr, setPwErr] = React.useState({});
    const [saved1, flash1] = useSaved();
    const [saved2, flash2] = useSaved();
    const set = (k) => (e) => setF(Object.assign({}, f, { [k]: e.target.value }));
    const i = d.info;
    const submitInfo = (e) => { e.preventDefault(); save((p) => Object.assign({}, p, { info: f })); setEdit(false); flash1(); };
    const submitPw = (e) => {
      e.preventDefault();
      const er = {};
      if (!pw.cur) er.cur = "Enter your current password.";
      if ((pw.next || "").length < 8) er.next = "Use at least 8 characters.";
      if (pw.next !== pw.conf) er.conf = "Passwords don’t match.";
      setPwErr(er);
      if (Object.keys(er).length) return;
      const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      save((p) => Object.assign({}, p, { pwChanged: today })); setPw(null); flash2();
    };

    return h(Page, { title: "Account Information" },
      h(Section, { title: "Personal details", action: edit ? null : h(Button, { variant: "secondary", size: "sm", onClick: () => { setF(d.info); setEdit(true); } }, "Edit") },
        edit ? h("form", { className: "am-form", onSubmit: submitInfo },
            h("div", { className: "am-grid" },
              h(Field, { label: "First name", value: f.first, onChange: set("first"), autoComplete: "given-name", required: true }),
              h(Field, { label: "Last name", value: f.last, onChange: set("last"), autoComplete: "family-name", required: true }),
              h(Field, { label: "Email", type: "email", value: f.email, onChange: set("email"), autoComplete: "email", required: true }),
              h(Field, { label: "Phone", type: "tel", value: f.phone, onChange: set("phone"), autoComplete: "tel", hint: "Optional. Used only for order questions." }),
              h(Field, { label: "Birthdate", type: "date", value: f.birth, onChange: set("birth"), autoComplete: "bday", hint: "Optional. We’ll send a little something on your birthday." })),
            h(Actions, { onCancel: () => setEdit(false) }))
          : h(React.Fragment, null,
            h(Rows, { rows: [["First name", i.first], ["Last name", i.last || "Not added"], ["Email", i.email], ["Phone", i.phone || "Not added"], ["Birthdate", fmtBirth(i.birth)]] }),
            h(Saved, { show: saved1 }))),
      h(Section, { title: "Password", action: pw ? null : h(Button, { variant: "secondary", size: "sm", onClick: () => { setPwErr({}); setPw({ cur: "", next: "", conf: "" }); } }, "Change password") },
        pw ? h("form", { className: "am-form", onSubmit: submitPw, noValidate: true },
            h("div", { className: "am-grid am-grid-1" },
              h(Field, { label: "Current password", type: "password", value: pw.cur, onChange: (e) => setPw(Object.assign({}, pw, { cur: e.target.value })), autoComplete: "current-password", error: pwErr.cur }),
              h(Field, { label: "New password", type: "password", value: pw.next, onChange: (e) => setPw(Object.assign({}, pw, { next: e.target.value })), autoComplete: "new-password", hint: pwErr.next ? undefined : "At least 8 characters, with a number or symbol.", error: pwErr.next }),
              h(Field, { label: "Confirm new password", type: "password", value: pw.conf, onChange: (e) => setPw(Object.assign({}, pw, { conf: e.target.value })), autoComplete: "new-password", error: pwErr.conf })),
            h(Actions, { onCancel: () => setPw(null), saveLabel: "Update password" }))
          : h(React.Fragment, null,
            h(Rows, { rows: [["Password", "••••••••••"], ["Last changed", d.pwChanged]] }),
            h(Saved, { show: saved2 }))));
  }

  /* Addresses */
  const blankAddr = (d) => ({ id: "", first: d.info.first, last: d.info.last, line1: "", line2: "", city: "", state: "UT", zip: "", phone: d.info.phone, ship: false, bill: false });
  function Addresses({ user }) {
    const { Button, Card, Badge, Dialog, Select, Checkbox, Icon } = DS();
    const [d, save] = useAcct(user);
    const [form, setForm] = React.useState(null);
    const [del, setDel] = React.useState(null);
    const set = (k) => (e) => setForm(Object.assign({}, form, { [k]: e.target.value }));
    const setDefault = (id, kind) => save((p) => Object.assign({}, p, { addresses: p.addresses.map((a) => Object.assign({}, a, { [kind]: a.id === id })) }));
    const submit = (e) => {
      e.preventDefault();
      save((p) => {
        let list = form.id ? p.addresses.map((a) => (a.id === form.id ? form : a)) : p.addresses.concat([Object.assign({}, form, { id: "a" + Date.now() })]);
        const id = form.id || list[list.length - 1].id;
        ["ship", "bill"].forEach((k) => { if (form[k]) list = list.map((a) => Object.assign({}, a, { [k]: a.id === id })); });
        return Object.assign({}, p, { addresses: list });
      });
      setForm(null);
    };
    const remove = (id) => save((p) => {
      const was = p.addresses.find((a) => a.id === id) || {};
      let list = p.addresses.filter((a) => a.id !== id);
      if (list.length) ["ship", "bill"].forEach((k) => { if (was[k]) list = list.map((a, ix) => Object.assign({}, a, { [k]: ix === 0 })); });
      return Object.assign({}, p, { addresses: list, cards: p.cards.map((c) => (c.addr === id ? Object.assign({}, c, { addr: list[0] ? list[0].id : "" }) : c)) });
    });
    const addBtn = h(Button, { variant: "secondary", size: "sm", icon: "add", onClick: () => setForm(blankAddr(d)) }, "Add address");
    return h(Page, { title: "Addresses", action: addBtn },
      d.addresses.length ? h("div", { className: "am-cards am-cards-list" }, d.addresses.map((a) =>
        h(Card, { key: a.id, ground: "white", bordered: true, padding: "md", className: "am-card" },
          h("div", { className: "am-card-in" },
            (a.ship || a.bill) ? h("div", { className: "am-badges" },
              a.ship ? h(Badge, { tone: "teal" }, "Default shipping") : null,
              a.bill ? h(Badge, { tone: "dove" }, "Default billing") : null) : null,
            h("address", { className: "am-addr" }, addrLines(a).map((l, ix) => h("span", { key: ix, className: ix === 0 ? "am-name" : undefined }, l))),
            h("div", { className: "am-links" },
              h("button", { type: "button", onClick: () => setForm(a) }, "Edit"),
              h("button", { type: "button", onClick: () => setDel(a) }, "Remove"),
              !a.ship ? h("button", { type: "button", onClick: () => setDefault(a.id, "ship") }, "Set as default shipping") : null,
              !a.bill ? h("button", { type: "button", onClick: () => setDefault(a.id, "bill") }, "Set as default billing") : null))))) :
        h(Card, { ground: "pearl", bordered: true, padding: "md" }, h("p", { className: "am-empty" }, "You don’t have any saved addresses yet.")),
      h(Dialog, { open: !!form, size: "md", title: form && form.id ? "Edit Address" : "Add Address", onClose: () => setForm(null) },
        form ? h("form", { className: "am-form", onSubmit: submit },
          h("div", { className: "am-grid" },
            h(Field, { label: "First name", value: form.first, onChange: set("first"), autoComplete: "given-name", required: true }),
            h(Field, { label: "Last name", value: form.last, onChange: set("last"), autoComplete: "family-name", required: true }),
            h(Field, { wide: true, label: "Street address", value: form.line1, onChange: set("line1"), autoComplete: "address-line1", required: true }),
            h(Field, { wide: true, label: "Apartment, suite, etc. (optional)", value: form.line2, onChange: set("line2"), autoComplete: "address-line2" }),
            h(Field, { label: "City", value: form.city, onChange: set("city"), autoComplete: "address-level2", required: true }),
            h("div", { className: "am-f am-split" },
              h(Select, { label: "State", value: form.state, onChange: set("state"), options: STATES }),
              h(DS().Input, { label: "ZIP code", value: form.zip, onChange: set("zip"), inputMode: "numeric", autoComplete: "postal-code", required: true })),
            h(Field, { wide: true, label: "Phone", type: "tel", value: form.phone, onChange: set("phone"), autoComplete: "tel", hint: "For delivery questions only." })),
          h("div", { className: "am-checks" },
            h(Checkbox, { label: "Use as my default shipping address", checked: !!form.ship, onChange: (e) => setForm(Object.assign({}, form, { ship: e.target.checked })) }),
            h(Checkbox, { label: "Use as my default billing address", checked: !!form.bill, onChange: (e) => setForm(Object.assign({}, form, { bill: e.target.checked })) })),
          h(Actions, { onCancel: () => setForm(null), saveLabel: form.id ? "Save address" : "Add address" })) : null),
      h(Confirm, { open: !!del, title: "Remove This Address?", text: del ? addrLines(del).slice(0, 3).join(", ") : "", yes: "Remove", onYes: () => remove(del.id), onClose: () => setDel(null) }));
  }

  /* Payment methods */
  const brandOf = (num) => { const n = String(num).replace(/\D/g, ""); return /^4/.test(n) ? "Visa" : /^(5[1-5]|2[2-7])/.test(n) ? "Mastercard" : /^3[47]/.test(n) ? "American Express" : /^6/.test(n) ? "Discover" : "Card"; };
  const expired = (exp) => { const [m, y] = String(exp).split("/").map(Number); if (!m || !y) return false; const now = new Date(); return 2000 + y < now.getFullYear() || (2000 + y === now.getFullYear() && m < now.getMonth() + 1); };
  function Payment({ user }) {
    const { Button, Card, Badge, Dialog, Select, Checkbox, Icon } = DS();
    const [d, save] = useAcct(user);
    const [form, setForm] = React.useState(null);
    const [err, setErr] = React.useState({});
    const [del, setDel] = React.useState(null);
    const set = (k) => (e) => setForm(Object.assign({}, form, { [k]: e.target.value }));
    const addrById = (id) => d.addresses.find((a) => a.id === id);
    const setDefault = (id) => save((p) => Object.assign({}, p, { cards: p.cards.map((c) => Object.assign({}, c, { def: c.id === id })) }));
    const submit = (e) => {
      e.preventDefault();
      const er = {};
      if (!form.id && String(form.num).replace(/\D/g, "").length < 15) er.num = "Enter a valid card number.";
      if (!/^\d{2}\/\d{2}$/.test(form.exp)) er.exp = "Use MM/YY.";
      else if (expired(form.exp)) er.exp = "This card has expired.";
      if (!form.id && !/^\d{3,4}$/.test(form.cvc)) er.cvc = "3 or 4 digits.";
      if (!form.name.trim()) er.name = "Enter the name on the card.";
      setErr(er);
      if (Object.keys(er).length) return;
      save((p) => {
        const card = form.id ? Object.assign({}, p.cards.find((c) => c.id === form.id), { exp: form.exp, name: form.name, addr: form.addr, def: form.def })
          : { id: "c" + Date.now(), brand: brandOf(form.num), last4: String(form.num).replace(/\D/g, "").slice(-4), exp: form.exp, name: form.name, addr: form.addr, def: form.def || !p.cards.length };
        let list = form.id ? p.cards.map((c) => (c.id === form.id ? card : c)) : p.cards.concat([card]);
        if (card.def) list = list.map((c) => Object.assign({}, c, { def: c.id === card.id }));
        return Object.assign({}, p, { cards: list });
      });
      setForm(null);
    };
    const remove = (id) => save((p) => { let list = p.cards.filter((c) => c.id !== id); if (list.length && !list.some((c) => c.def)) list = list.map((c, ix) => Object.assign({}, c, { def: ix === 0 })); return Object.assign({}, p, { cards: list }); });
    const open = (c) => { setErr({}); setForm(c ? Object.assign({}, c) : { id: "", num: "", exp: "", cvc: "", name: d.info.first + " " + d.info.last, addr: (d.addresses.find((a) => a.bill) || d.addresses[0] || {}).id || "", def: false }); };
    const addrOpts = d.addresses.map((a) => ({ value: a.id, label: a.line1 + ", " + a.city + ", " + a.state }));
    return h(Page, { title: "Payment Methods", action: h(Button, { variant: "secondary", size: "sm", icon: "add", onClick: () => open(null) }, "Add card") },
      d.cards.length ? h("div", { className: "am-cards am-cards-list" }, d.cards.map((c) => {
        const a = addrById(c.addr); const exp = expired(c.exp);
        return h(Card, { key: c.id, ground: "white", bordered: true, padding: "md", className: "am-card" },
          h("div", { className: "am-card-in" },
            h("div", { className: "am-cc" },
              h("span", { className: "am-cc-ico", "aria-hidden": "true" }, Icon ? h(Icon, { name: "credit_card", size: 24 }) : null),
              h("div", { className: "am-cc-t" }, h("strong", null, c.brand + " ending in " + c.last4), h("span", { className: exp ? "am-exp" : undefined }, (exp ? "Expired " : "Expires ") + c.exp)),
              c.def ? h(Badge, { tone: "teal" }, "Default") : null),
            h("dl", { className: "am-mini" },
              h("div", null, h("dt", null, "Name on card"), h("dd", null, c.name)),
              h("div", null, h("dt", null, "Billing address"), h("dd", null, a ? a.line1 + ", " + a.city + ", " + a.state + " " + a.zip : "None selected"))),
            h("div", { className: "am-links" },
              h("button", { type: "button", onClick: () => open(c) }, "Edit"),
              h("button", { type: "button", onClick: () => setDel(c) }, "Remove"),
              !c.def ? h("button", { type: "button", onClick: () => setDefault(c.id) }, "Set as default") : null)));
      })) : h(Card, { ground: "pearl", bordered: true, padding: "md" }, h("p", { className: "am-empty" }, "You don’t have any saved cards yet.")),
      h(Section, { title: "Gift cards" },
        h(Card, { ground: "pearl", bordered: true, padding: "md" },
          h("div", { className: "am-gift" },
            h("div", { className: "am-cc" },
              h("span", { className: "am-cc-ico", "aria-hidden": "true" }, Icon ? h(Icon, { name: "redeem", size: 24 }) : null),
              h("div", { className: "am-cc-t" }, h("strong", null, "Gift card ending in " + d.gift.last4), h("span", null, "Applied automatically at checkout"))),
            h("span", { className: "am-bal" }, "$" + d.gift.balance.toFixed(2))))),
      h(Dialog, { open: !!form, size: "md", title: form && form.id ? "Edit Card" : "Add Card", onClose: () => setForm(null) },
        form ? h("form", { className: "am-form", onSubmit: submit, noValidate: true },
          h("div", { className: "am-grid" },
            form.id ? h("div", { className: "am-f am-f-wide am-cc am-cc-static" },
                h("span", { className: "am-cc-ico", "aria-hidden": "true" }, Icon ? h(Icon, { name: "credit_card", size: 24 }) : null),
                h("div", { className: "am-cc-t" }, h("strong", null, form.brand + " ending in " + form.last4), h("span", null, "To change the number, add a new card.")))
              : h(Field, { wide: true, label: "Card number", value: form.num, onChange: set("num"), inputMode: "numeric", autoComplete: "cc-number", error: err.num }),
            h(Field, { wide: true, label: "Name on card", value: form.name, onChange: set("name"), autoComplete: "cc-name", error: err.name }),
            h(Field, { label: "Expiration", value: form.exp, onChange: set("exp"), placeholder: "MM/YY", autoComplete: "cc-exp", error: err.exp }),
            form.id ? null : h(Field, { label: "Security code", value: form.cvc, onChange: set("cvc"), inputMode: "numeric", autoComplete: "cc-csc", error: err.cvc }),
            addrOpts.length ? h("div", { className: "am-f am-f-wide" }, h(Select, { label: "Billing address", value: form.addr, onChange: set("addr"), options: addrOpts })) : null),
          h("div", { className: "am-checks" },
            h(Checkbox, { label: "Use as my default payment method", checked: !!form.def, onChange: (e) => setForm(Object.assign({}, form, { def: e.target.checked })) })),
          h(Actions, { onCancel: () => setForm(null), saveLabel: form.id ? "Save card" : "Add card" })) : null),
      h(Confirm, { open: !!del, title: "Remove This Card?", text: del ? del.brand + " ending in " + del.last4 + " will be removed from your account." : "", yes: "Remove", onYes: () => remove(del.id), onClose: () => setDel(null) }));
  }

  /* A new account's optional birthday (from any create-account form) becomes the Birthdate in Account Information: blank shows "Not added". */
  function setBirth(birth, user) {
    let st = null;
    try { st = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
    if (!(st && st.info)) st = seed(user);
    st.info.birth = birth || "";
    if (user && user.name) { const nm = splitName(user.name); st.info.first = nm.first; st.info.last = nm.last; }
    if (user && user.email) st.info.email = user.email;
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }
  window.AccountMock = { info: AccountInfo, addresses: Addresses, payment: Payment, setBirth };
})();
