/* Bookshelf+ sign-up dialog (DS Dialog, md) with auth, plan, and checkout steps. Plain JS, no build step. */
(function () {
  const h = React.createElement;
  const DS = () => window.DeseretBookDesignSystem_609afa || {};
  const ink = "var(--db-ink)", muted = "var(--db-ink-muted)", line = "1px solid var(--db-dove)";
  const lab = { display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: ink, minWidth: 0, flex: 1 };
  const inp = (err) => ({ height: 40, padding: "0 20px", border: "1px solid " + (err ? "var(--db-status-error)" : "var(--db-granite)"), borderRadius: "var(--db-radius-pill)", font: "inherit", fontSize: 16, color: ink, background: "#fff", boxSizing: "border-box", width: "100%", minWidth: 0 });
  const errS = { fontSize: 13, color: "var(--db-status-error)" };
  const btnPri = Object.assign({ flex: 1 }, { height: 48, padding: "0 24px", border: "1px solid var(--db-accent)", borderRadius: "var(--db-radius-pill)", background: "var(--db-accent)", color: "var(--db-accent-ink)", fontFamily: "var(--db-font-sans)", fontSize: "var(--db-text-label)", fontWeight: "var(--db-weight-sans-medium)", letterSpacing: "var(--db-tracking-label)", lineHeight: "1", textTransform: "uppercase", cursor: "pointer" });
  const btnSec = { height: 48, padding: "0 24px", border: "1px solid var(--db-charcoal)", borderRadius: "var(--db-radius-pill)", background: "transparent", color: "var(--db-black)", fontFamily: "var(--db-font-sans)", fontSize: "var(--db-text-label)", fontWeight: "var(--db-weight-sans-medium)", letterSpacing: "var(--db-tracking-label)", lineHeight: "1", textTransform: "uppercase", cursor: "pointer" };
  const row = { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, fontSize: 15, color: ink };
  const TRIAL_END = "October 20, 2026";

  function Field({ label, err, ...rest }) {
    return h("div", { style: { flex: 1, minWidth: 0 } }, h(DS().Input, Object.assign({ label: label, error: err || undefined }, rest)));
  }

  function useBspCheckout({ plan, price, onBack, onClose }) {
    const u = window.DB_USER || { name: "Sarah Johnson", email: "sarah.johnson@example.com" };
    const yearly = /year/i.test(plan || "") || /year/i.test(price || "");
    const amt = (String(price || "").match(/\$[\d.,]+/) || [""])[0];
    const per = yearly ? "year" : "month";
    const [f, setF] = React.useState({ card: "4242 4242 4242 4242", exp: "08/29", cvc: "123", cname: u.name, zip: "84101" });
    const [errs, setErrs] = React.useState({});
    const [agree, setAgree] = React.useState(false);
    const [state, setState] = React.useState("form");
    const set = (k) => (e) => setF(Object.assign({}, f, { [k]: e.target.value }));
    const submit = (e) => {
      e.preventDefault();
      const er = {};
      if (f.card.replace(/\s/g, "").length < 15) er.card = "Enter a card number.";
      if (!/^\d{2}\s?\/\s?\d{2}$/.test(f.exp.trim())) er.exp = "Use MM/YY.";
      if (!/^\d{3,4}$/.test(f.cvc.trim())) er.cvc = "Enter the security code.";
      if (!/^\d{5}$/.test(f.zip.trim())) er.zip = "Enter a five-digit ZIP code.";
      if (!agree) er.agree = "Check the box to start your free trial.";
      setErrs(er);
      if (Object.keys(er).length) return;
      setState("busy");
      setTimeout(() => {
        setState("done");
        try { localStorage.removeItem("db-bsp-status"); } catch (e) {}
        window.dispatchEvent(new CustomEvent("db-bsp-subscribed", { detail: { plan: yearly ? "yearly" : "monthly", user: u } }));
      }, 900);
    };
    const Icon = DS().Icon;

    if (state === "done") return { title: "Welcome to Bookshelf+", footer: h(DS().Button, { type: "button", size: "md", className: "bsp-su-pri", onClick: () => { onClose && onClose(); location.hash = "#/account/subscriptions"; } }, "Manage subscription"), body: h("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 } },
      h("p", { style: { margin: 0, fontSize: 16, lineHeight: 1.5, color: ink } }, "Your free trial has started. Your library is ready in the Deseret Bookshelf app."),
      h("p", { style: { margin: 0, fontSize: 14, lineHeight: 1.5, color: muted } }, "Your 14-day free trial ends " + TRIAL_END + ". Your first charge of " + amt + " is on that date, then every " + per + ". A confirmation is on its way to " + u.email + "."),
      h("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignSelf: "stretch", marginTop: 8, padding: 20, border: "1px solid var(--db-border, rgb(197,197,197))", borderRadius: "var(--db-radius-sm)", background: "var(--db-pearl, #f7f4f0)" } },
        h("p", { style: { margin: 0, fontSize: 15, lineHeight: 1.5, color: ink } }, "Bookshelf+ titles are read and heard in the Deseret Bookshelf app. Download it and sign in as " + ((u && u.email) || "your account") + " to start."),
        h("div", { style: { display: "flex", flexWrap: "wrap", gap: 12 } },
          [["apple", "Download on the", "App Store", "https://apps.apple.com/us/search?term=deseret%20bookshelf"], ["google", "Get it on", "Google Play", "https://play.google.com/store/search?q=deseret%20bookshelf&c=apps"]].map(([k, sm, lg, href]) =>
            h("a", { key: k, href, target: "_blank", rel: "noopener", style: { flex: "1 1 160px", height: 52, padding: "0 26px", borderRadius: "var(--db-radius-pill)", background: "var(--db-charcoal, #3a3633)", color: "#fff", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1.15 } },
              h("span", { style: { fontSize: 11, letterSpacing: ".04em" } }, sm),
              h("span", { style: { fontSize: 17, fontWeight: 700 } }, lg)))))) };

    const busy = state === "busy";
    return { title: "Checkout", footer: h(React.Fragment, null,
        h(DS().Button, { type: "button", variant: "secondary", size: "md", onClick: onBack, disabled: busy }, "Back"),
        h(DS().Button, { type: "submit", form: "bsp-co-form", size: "md", className: "bsp-su-pri", disabled: busy }, busy ? "Processing\u2026" : "Start free trial")),
      body: h("form", { id: "bsp-co-form", onSubmit: submit, noValidate: true, style: { display: "flex", flexDirection: "column", gap: 20 } },
      h("div", { style: { display: "flex", flexDirection: "column", gap: 10, padding: "16px 0", borderTop: line, borderBottom: line } },
        h("div", { style: row }, h("span", null, "Bookshelf+ " + plan), h("span", null, price)),
        h("div", { style: Object.assign({}, row, { fontSize: 14, color: muted }) }, h("span", null, "Account"), h("span", { style: { textAlign: "right", overflowWrap: "anywhere" } }, u.email)),
        h("div", { style: Object.assign({}, row, { fontSize: 14, color: muted }) }, h("span", null, "14-day free trial"), h("span", null, "Ends " + TRIAL_END)),
        h("div", { style: Object.assign({}, row, { fontSize: 14, color: muted }) }, h("span", null, "First charge " + TRIAL_END), h("span", null, amt)),
        h("div", { style: Object.assign({}, row, { paddingTop: 10, borderTop: line }) }, h("strong", { style: { fontWeight: 700 } }, "Due today"), h("span", { style: { fontFamily: "var(--db-font-serif)", fontSize: 20, color: "var(--db-display)" } }, "$0.00"))),
      h(Field, { label: "Card number", value: f.card, onChange: set("card"), inputMode: "numeric", autoComplete: "cc-number", err: errs.card }),
      h("div", { style: { display: "flex", gap: 12 } },
        h(Field, { label: "Expiration", value: f.exp, onChange: set("exp"), placeholder: "MM/YY", autoComplete: "cc-exp", err: errs.exp }),
        h(Field, { label: "Security code", value: f.cvc, onChange: set("cvc"), inputMode: "numeric", autoComplete: "cc-csc", err: errs.cvc })),
      h("div", { style: { display: "flex", gap: 12 } },
        h(Field, { label: "Name on card", value: f.cname, onChange: set("cname"), autoComplete: "cc-name" }),
        h(Field, { label: "Billing ZIP", value: f.zip, onChange: set("zip"), inputMode: "numeric", autoComplete: "postal-code", err: errs.zip })),
      h("p", { style: { margin: 0, fontSize: 16, lineHeight: 1.5, color: "var(--db-ink)" } }, "You won\u2019t be charged if you cancel before " + TRIAL_END + ". After that, " + amt + " every " + per + " until you cancel. Cancel anytime in My Account \u203a Subscriptions."),
      h("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
        h(DS().Checkbox, { checked: agree, onChange: (e) => { setAgree(e.target.checked); if (e.target.checked && errs.agree) setErrs(Object.assign({}, errs, { agree: undefined })); }, label: "I agree that after my free trial ends on " + TRIAL_END + ", Bookshelf+ renews automatically at " + amt + " every " + per + " until I cancel." }),
        errs.agree ? h("span", { style: errS, role: "alert" }, errs.agree) : null)) };
  }

  function BspCheckout(props) { const c = useBspCheckout(props); return h("div", null, c.body, h("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 20 } }, c.footer)); }

  function Steps({ s, V }) {
    const n = Number(V(s, "suStepNum")) || 1, total = Number(V(s, "suStepTotal")) || 1;
    return h("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 } },
      h("span", { style: { fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: muted } }, "Step " + n + " of " + total),
      h("div", { style: { display: "flex", gap: 6 }, "aria-hidden": true }, Array.from({ length: total }, (_, i) =>
        h("span", { key: i, style: { flex: 1, height: 3, borderRadius: "var(--db-radius-pill)", background: i < n ? "var(--db-teal-400)" : "var(--db-dove, #ecf0ee)" } }))));
  }

  function PlanStep({ s, V }) {
    const Icon = DS().Icon;
    const feats = ["Unlimited Listening", "Guaranteed Clean Content", "4,000+ Audiobooks & eBooks", "Exclusive Podcasts", "New Audiobooks on Release Day"];
    return h("div", { style: { display: "flex", flexDirection: "column", gap: 20 } },
      h("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: "var(--db-radius-sm)", boxShadow: "0 0 0 1px var(--hair, var(--db-dove))", background: "var(--db-pearl)", color: ink } },
        h("span", { style: { flex: "none", display: "grid", placeItems: "center", color: "var(--db-charcoal)" } }, h(Icon, { name: "redeem", size: 24 })),
        h("span", { style: { display: "flex", flexDirection: "column", gap: 2 } },
          h("span", { style: { fontSize: 15, fontWeight: 700, lineHeight: 1.3 } }, "14-day free trial"),
          h("span", { style: { fontSize: 13, lineHeight: 1.4, color: muted } }, "Included with either plan. You won\u2019t be charged until your trial ends."))),
      h("div", { role: "radiogroup", "aria-label": "Plan", style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 } },
        (V(s, "suPlans") || []).map((it, i) => {
          const q = Object.assign({}, s, { p: it }), on = !!V(q, "p.on");
          return h("button", { key: i, type: "button", role: "radio", "aria-checked": on, onClick: V(q, "p.pick"), style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, width: "100%", height: "100%", padding: 16, border: 0, boxShadow: on ? "0 0 0 2px var(--db-charcoal)" : "0 0 0 1px var(--db-granite-deep)", borderRadius: "var(--db-radius-sm)", background: on ? "var(--db-pearl)" : "#fff", cursor: "pointer", font: "inherit", textAlign: "left", color: ink, transition: "var(--db-transition)" } },
            h("span", { style: { flex: "none", width: 20, height: 20, borderRadius: "var(--db-radius-pill)", boxSizing: "border-box", boxShadow: on ? "inset 0 0 0 6px var(--db-charcoal)" : "inset 0 0 0 1px var(--db-granite-deep)", background: "#fff" } }),
            h("span", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 } },
              h("span", { style: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8 } },
                h("span", { style: { fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: ink } }, V(q, "p.name")),
                V(q, "p.badge") ? h(DS().Badge || "span", { tone: "neutral" }, V(q, "p.badge")) : null),
              h("span", { style: { fontFamily: "var(--db-font-serif)", fontSize: 22, lineHeight: 1.3, color: "var(--db-charcoal)" } }, V(q, "p.price")),
              V(q, "p.note") ? h("span", { style: { fontSize: 13, color: muted } }, V(q, "p.note")) : null));
        })),
      h("div", { style: { display: "flex", flexDirection: "column", gap: 12, padding: "18px 20px", borderRadius: "var(--db-radius-sm)", background: "var(--db-pearl)" } },
        h("span", { style: { fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: muted } }, "Every plan includes"),
        h("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 } }, feats.map((f) =>
          h("li", { key: f, style: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, lineHeight: 1.4, color: ink } }, h(Icon, { name: "check", size: 18, style: { flex: "none", marginTop: 1 } }), h("span", null, f))))));
  }

  function AuthStep({ s, V }) {
    const { SegmentedControl, Input } = DS();
    return h("div", { style: { display: "flex", flexDirection: "column", gap: 20 } },
      h(SegmentedControl, { fullWidth: true, options: [{ value: "signup", label: "Create account" }, { value: "login", label: "Sign in" }], value: V(s, "suIsSignup") ? "signup" : "login",
        onChange: (v) => { const f = (v === "signup" || (v && v.target && v.target.value === "signup")) ? V(s, "suToSignup") : V(s, "suToLogin"); f && f(); } }),
      h("form", { id: "bsp-su-auth", onSubmit: V(s, "suNext"), style: { display: "flex", flexDirection: "column", gap: 14, margin: 0 } },
        V(s, "suIsSignup") ? h(Input, { label: "Full name", type: "text", autoComplete: "name", defaultValue: "Sarah Johnson" }) : null,
        h(Input, { label: "Email", type: "email", autoComplete: "email", defaultValue: "sarah.johnson@example.com" }),
        h(Input, { label: "Password", type: "password", autoComplete: V(s, "suPwAuto"), defaultValue: "testpassword" }),
        V(s, "suIsSignup") ? h(Input, { label: "Birthday (optional)", name: "birthday", type: "date", autoComplete: "bday", max: new Date().toISOString().slice(0, 10) }) : null,
        V(s, "suIsSignup") ? h(Input, { label: "Phone number (optional)", name: "phone", type: "tel", autoComplete: "tel" }) : null,
        V(s, "suIsLogin") ? h("a", { href: "#plans", style: { alignSelf: "flex-end", fontSize: 13, color: "var(--db-charcoal)" } }, "Forgot password?") : null));
  }

  function SignupDialogInner({ s, V, open, q }) {
    const { Dialog, Button } = DS();
    const co = useBspCheckout({ plan: V(q, "suSelName"), price: V(q, "suSelPrice"), onBack: V(q, "suBack"), onClose: V(q, "suClose") });
    let title, description, body, footer;
    if (V(q, "suIsCheckout")) { title = co.title; body = co.body; footer = co.footer; }
    else if (V(q, "suIsPlan")) {
      title = "Confirm Your Plan"; description = "You can switch plans or cancel any time."; body = h(PlanStep, { s: q, V });
      footer = h(React.Fragment, null, h(Button, { type: "button", variant: "secondary", size: "md", onClick: V(q, "suBack") }, "Back"), h(Button, { type: "button", size: "md", className: "bsp-su-pri", onClick: V(q, "suNext") }, "Continue to checkout"));
    } else { title = V(q, "suAuthTitle"); body = h(AuthStep, { s: q, V }); footer = h(Button, { type: "submit", form: "bsp-su-auth", size: "md", className: "bsp-su-pri" }, V(q, "suAuthCta")); }
    return h(Dialog, { open, size: "md", title, description, onClose: V(q, "suClose"), footer }, h(Steps, { s: q, V }), body);
  }

  // One Dialog instance for the whole flow: steps swap content inside it, so the panel never closes and reopens.
  function BspSignupDialog({ s, V }) {
    const open = !!V(s, "suOpen");
    const last = React.useRef(s);
    if (open) last.current = s;
    const [run, setRun] = React.useState(0);
    React.useEffect(() => { if (open) return; const t = setTimeout(() => setRun((x) => x + 1), 320); return () => clearTimeout(t); }, [open]);
    return h(SignupDialogInner, { key: run, s, V, open, q: last.current });
  }


  /* Shared Bookshelf+ sign-up state machine. Every entry point (the Bookshelf+ pages and the account page) uses this one flow
     with the same BspSignupDialog, so future changes apply everywhere. cmp is a class component (state + setState). */
  function signupVals(cmp, TIERS) {
    const su = cmp.state.su, suMode = cmp.state.suMode || 'signup';
    const suSel = cmp.state.suPlan || TIERS[0].key;
    const suSelT = TIERS.find(t => t.key === suSel) || TIERS[0];
    const suOpenFn = (e) => { if (e && e.preventDefault) e.preventDefault(); cmp.setState.bind(cmp)({ su: window.DB_USER ? 'plan' : 'auth' }); };
    const suOrder = window.DB_USER && su !== 'auth' ? ['plan', 'checkout'] : ['auth', 'plan', 'checkout'];
    const suIdx = suOrder.indexOf(su);
    return { suOpenFn,
      suOpen: !!su,
      suStepTotal: suOrder.length,
      suBar3Show: suOrder.length > 2 ? 'block' : 'none',
      suStepNum: suIdx + 1,
      suBar2: suIdx >= 1 ? 'var(--db-accent-deep)' : 'var(--db-dove)',
      suBar3: suIdx >= 2 ? 'var(--db-accent-deep)' : 'var(--db-dove)',
      suIsAuth: su === 'auth', suIsPlan: su === 'plan', suIsCheckout: su === 'checkout',
      suIsSignup: suMode === 'signup', suIsLogin: suMode === 'login',
      suAuthTitle: suMode === 'signup' ? 'Create your account' : 'Welcome back',
      suAuthCta: suMode === 'signup' ? 'Create account' : 'Sign in',
      suPwAuto: suMode === 'signup' ? 'new-password' : 'current-password',
      suTabSignupBg: suMode === 'signup' ? 'rgb(255,255,255)' : 'transparent',
      suTabLoginBg: suMode === 'login' ? 'rgb(255,255,255)' : 'transparent',
      suTabSignupShadow: suMode === 'signup' ? '0 1px 3px rgba(43,46,48,0.16)' : 'none',
      suTabLoginShadow: suMode === 'login' ? '0 1px 3px rgba(43,46,48,0.16)' : 'none',
      suToSignup: () => cmp.setState.bind(cmp)({ suMode: 'signup' }),
      suToLogin: () => cmp.setState.bind(cmp)({ suMode: 'login' }),
      suClose: () => cmp.setState.bind(cmp)({ su: null }),
      suNext: (e) => { if (e && e.preventDefault) e.preventDefault(); const bi = document.querySelector('#bsp-su-auth input[name=birthday]'); if (bi && window.AccountMock && window.AccountMock.setBirth) window.AccountMock.setBirth(bi.value, { name: (document.querySelector('#bsp-su-auth input[autocomplete=name]') || {}).value, email: (document.querySelector('#bsp-su-auth input[type=email]') || {}).value }); cmp.setState.bind(cmp)(s => ({ su: suOrder[Math.min(suOrder.indexOf(s.su) + 1, suOrder.length - 1)] })); },
      suBack: () => cmp.setState.bind(cmp)(s => (suOrder.indexOf(s.su) <= 0 ? { su: null } : { su: suOrder[suOrder.indexOf(s.su) - 1] })),
      suPlans: TIERS.map(t => {
        const on = t.key === suSel;
        const note = t.term === 'yearly' && t.yearlyTotal ? 'Save $' + (t.monthly * 12 - t.yearlyTotal).toFixed(2).replace(/\.00$/, '') + ' vs. monthly' : '';
        return { name: t.name, badge: t.badge, price: t.price, note, on,
          border: on ? '2px solid var(--db-accent-deep)' : '1px solid var(--db-granite)',
          bg: on ? 'rgba(15,128,121,0.05)' : 'rgb(255,255,255)',
          dotBorder: on ? '6px solid var(--db-accent-deep)' : '2px solid var(--db-granite-deep)',
          pick: () => cmp.setState.bind(cmp)({ suPlan: t.key }) };
      }),
      suSelName: suSelT.name, suSelPrice: suSelT.price
    };
  }
  const Vget = (s, e) => { if (/^(['"]).*\1$/.test(e)) return e.slice(1, -1); return e.split(".").reduce((v, p) => (v == null ? v : v[p]), s); };
  /* Mountable launcher for entry points outside the Bookshelf+ pages: window.BspSignup.open() starts the flow. */
  class BspSignupLauncher extends React.Component {
    constructor(p) { super(p); this.state = {}; this.open = () => this._open && this._open(); }
    componentDidMount() { window.BspSignup.open = this.open; }
    componentWillUnmount() { if (window.BspSignup.open === this.open) window.BspSignup.open = null; }
    render() {
      const T = (window.BSP_TIERS || {})[this.props.platinum ? "general-platinum" : "general"] || [];
      const { suOpenFn, ...vals } = signupVals(this, T);
      this._open = suOpenFn;
      return h(BspSignupDialog, { s: vals, V: Vget });
    }
  }
  window.BspSignup = { vals: signupVals, Launcher: BspSignupLauncher, open: null };
  window.BspCheckout = BspCheckout;
  window.BspSignupDialog = BspSignupDialog;
})();
