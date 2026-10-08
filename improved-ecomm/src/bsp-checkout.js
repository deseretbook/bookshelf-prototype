/* Bookshelf+ sign-up checkout (step 3 of the sign-up modal). Plain JS, no build step. */
(function () {
  const h = React.createElement;
  const DS = () => window.DeseretBookDesignSystem_609afa || {};
  const ink = "var(--db-ink)", muted = "var(--db-ink-muted)", line = "1px solid rgb(226,226,226)";
  const lab = { display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: ink, minWidth: 0, flex: 1 };
  const inp = (err) => ({ height: 46, padding: "0 23px", border: "1px solid " + (err ? "rgb(178,48,36)" : "rgb(197,197,197)"), borderRadius: 999, font: "inherit", fontSize: 16, color: ink, background: "#fff", boxSizing: "border-box", width: "100%", minWidth: 0 });
  const errS = { fontSize: 13, color: "rgb(178,48,36)" };
  const btnPri = { flex: 1, height: 48, padding: "0 24px", border: 0, borderRadius: 999, background: "var(--db-accent-deep)", color: "#fff", font: "inherit", fontSize: 15, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer" };
  const btnSec = { height: 48, padding: "0 24px", border: "1px solid rgb(197,197,197)", borderRadius: 999, background: "#fff", color: ink, font: "inherit", fontSize: 15, cursor: "pointer" };
  const row = { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, fontSize: 15, color: ink };
  const TRIAL_END = "October 20, 2026";

  function Field({ label, err, ...rest }) {
    return h("label", { style: lab }, label, h("input", Object.assign({ style: inp(err) }, rest)), err ? h("span", { style: errS }, err) : null);
  }

  function BspCheckout({ plan, price, onBack, onClose }) {
    const u = window.DB_USER || { name: "Sarah Johnson", email: "sarah.johnson@example.com" };
    const yearly = /year/i.test(plan || "") || /year/i.test(price || "");
    const amt = (String(price || "").match(/\$[\d.,]+/) || [""])[0];
    const per = yearly ? "year" : "month";
    const [f, setF] = React.useState({ card: "4242 4242 4242 4242", exp: "08/29", cvc: "123", cname: u.name, zip: "84101" });
    const [errs, setErrs] = React.useState({});
    const [state, setState] = React.useState("form");
    const set = (k) => (e) => setF(Object.assign({}, f, { [k]: e.target.value }));
    const submit = (e) => {
      e.preventDefault();
      const er = {};
      if (f.card.replace(/\s/g, "").length < 15) er.card = "Enter a card number.";
      if (!/^\d{2}\s?\/\s?\d{2}$/.test(f.exp.trim())) er.exp = "Use MM/YY.";
      if (!/^\d{3,4}$/.test(f.cvc.trim())) er.cvc = "Enter the security code.";
      if (!/^\d{5}$/.test(f.zip.trim())) er.zip = "Enter a five-digit ZIP code.";
      setErrs(er);
      if (Object.keys(er).length) return;
      setState("busy");
      setTimeout(() => {
        setState("done");
        window.dispatchEvent(new CustomEvent("db-bsp-subscribed", { detail: { plan: yearly ? "yearly" : "monthly", user: u } }));
      }, 900);
    };
    const Icon = DS().Icon;

    if (state === "done") return h("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 } },
      h("span", { style: { width: 48, height: 48, borderRadius: 999, display: "grid", placeItems: "center", background: "rgba(15,128,121,0.1)", color: "var(--db-accent-deep)" } }, Icon ? h(Icon, { name: "check", size: 24 }) : null),
      h("h2", { style: { margin: 0, fontFamily: "var(--db-font-serif)", fontWeight: 400, fontSize: 30, lineHeight: 1.2, color: "var(--db-display)" } }, "Welcome to Bookshelf+"),
      h("p", { style: { margin: 0, fontSize: 16, lineHeight: 1.5, color: ink } }, "Your free trial has started. Your library is ready in the Deseret Bookshelf app."),
      h("p", { style: { margin: 0, fontSize: 14, lineHeight: 1.5, color: muted } }, "Your 14-day free trial ends " + TRIAL_END + ". Your first charge of " + amt + " is on that date, then every " + per + ". A confirmation is on its way to " + u.email + "."),
      h("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignSelf: "stretch", marginTop: 8, padding: 20, border: "1px solid var(--db-border, rgb(197,197,197))", borderRadius: 4, background: "var(--db-pearl, #f7f4f0)" } },
        h("p", { style: { margin: 0, fontSize: 15, lineHeight: 1.5, color: ink } }, "Bookshelf+ titles are read and heard in the Deseret Bookshelf app. Download it and sign in as " + ((u && u.email) || "your account") + " to start."),
        h("div", { style: { display: "flex", flexWrap: "wrap", gap: 12 } },
          [["apple", "Download on the", "App Store", "https://apps.apple.com/us/search?term=deseret%20bookshelf"], ["google", "Get it on", "Google Play", "https://play.google.com/store/search?q=deseret%20bookshelf&c=apps"]].map(([k, sm, lg, href]) =>
            h("a", { key: k, href, target: "_blank", rel: "noopener", style: { flex: "1 1 160px", height: 52, padding: "0 26px", borderRadius: 999, background: "var(--db-charcoal, #3a3633)", color: "#fff", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1.15 } },
              h("span", { style: { fontSize: 11, letterSpacing: ".04em" } }, sm),
              h("span", { style: { fontSize: 17, fontWeight: 600 } }, lg))))),
      h("button", { type: "button", onClick: () => { onClose && onClose(); location.hash = "#/account/subscriptions"; }, style: { ...btnSec, alignSelf: "flex-start" } }, "Manage subscription"));

    return h("form", { onSubmit: submit, noValidate: true, style: { display: "flex", flexDirection: "column", gap: 20 } },
      h("h2", { style: { margin: 0, fontFamily: "var(--db-font-serif)", fontWeight: 400, fontSize: 30, lineHeight: 1.2, color: "var(--db-display)" } }, "Checkout"),
      h("div", { style: { display: "flex", flexDirection: "column", gap: 10, padding: "16px 0", borderTop: line, borderBottom: line } },
        h("div", { style: row }, h("span", null, "Bookshelf+ " + plan), h("span", null, price)),
        h("div", { style: Object.assign({}, row, { fontSize: 14, color: muted }) }, h("span", null, "Account"), h("span", { style: { textAlign: "right", overflowWrap: "anywhere" } }, u.email)),
        h("div", { style: Object.assign({}, row, { fontSize: 14, color: muted }) }, h("span", null, "14-day free trial"), h("span", null, "Ends " + TRIAL_END)),
        h("div", { style: Object.assign({}, row, { fontSize: 14, color: muted }) }, h("span", null, "First charge " + TRIAL_END), h("span", null, amt)),
        h("div", { style: Object.assign({}, row, { paddingTop: 10, borderTop: line }) }, h("strong", { style: { fontWeight: 600 } }, "Due today"), h("span", { style: { fontFamily: "var(--db-font-serif)", fontSize: 20, color: "var(--db-display)" } }, "$0.00"))),
      h(Field, { label: "Card number", value: f.card, onChange: set("card"), inputMode: "numeric", autoComplete: "cc-number", err: errs.card }),
      h("div", { style: { display: "flex", gap: 12 } },
        h(Field, { label: "Expiration", value: f.exp, onChange: set("exp"), placeholder: "MM/YY", autoComplete: "cc-exp", err: errs.exp }),
        h(Field, { label: "Security code", value: f.cvc, onChange: set("cvc"), inputMode: "numeric", autoComplete: "cc-csc", err: errs.cvc })),
      h("div", { style: { display: "flex", gap: 12 } },
        h(Field, { label: "Name on card", value: f.cname, onChange: set("cname"), autoComplete: "cc-name" }),
        h(Field, { label: "Billing ZIP", value: f.zip, onChange: set("zip"), inputMode: "numeric", autoComplete: "postal-code", err: errs.zip })),
      h("p", { style: { margin: 0, fontSize: 13, lineHeight: 1.5, color: muted } }, "You won\u2019t be charged if you cancel before " + TRIAL_END + ". After that, " + amt + " every " + per + " until you cancel. Cancel anytime in My Account \u203a Subscriptions."),
      h("div", { style: { display: "flex", alignItems: "center", gap: 12 } },
        h("button", { type: "button", onClick: onBack, style: btnSec, disabled: state === "busy" }, "Back"),
        h("button", { type: "submit", style: Object.assign({}, btnPri, state === "busy" ? { opacity: 0.6, cursor: "default" } : null), disabled: state === "busy" }, state === "busy" ? "Processing\u2026" : "Start free trial")));
  }
  window.BspCheckout = BspCheckout;
})();
