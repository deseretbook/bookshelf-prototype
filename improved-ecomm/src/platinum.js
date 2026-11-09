/* Platinum Rewards membership management (#/account/subscriptions/platinum-rewards). Mirrors the Bookshelf+ subscription details page. */
(function () {
  const h = React.createElement;
  const DS = () => window.DeseretBookDesignSystem_609afa || {};
  const ROW = { display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 16px", padding: "16px 0", boxShadow: "0 1px 0 var(--db-granite)" };
  const DT = { fontSize: "var(--db-text-caption)", color: "var(--db-ink-muted)" };
  const DD = { margin: 0, fontSize: "var(--db-text-body)", textAlign: "right" };
  const BENEFITS = ["Earn rewards on every purchase", "Early access to seasonal releases", "Platinum member price on Bookshelf+"];

  function PlatinumManage({ user, subs, go, onLeave, onJoin, onSignIn }) {
    const { Button, Badge, Card, Dialog, Icon } = DS();
    const [leave, setLeave] = React.useState(false);
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    if (!user) return h(window.DeseretBookDesignSystem_609afa.EmptyState, { icon: "person", title: "Sign In to Manage Platinum Rewards", headingLevel: "h1", action: h(Button, { variant: "secondary", onClick: onSignIn }, "Sign in") }, "Sign in to manage your Platinum Rewards membership.");
    const member = !!(subs && subs.platinum);
    const row = (k, v) => h("div", { key: k, style: ROW }, h("dt", { style: DT }, k), h("dd", { style: DD }, v));
    return h("main", { style: { width: "100%", maxWidth: 760, margin: "0 auto", padding: "clamp(32px, 6vw, 64px) 20px 96px", boxSizing: "border-box" } },
      h("div", { "data-screen-label": "Platinum Rewards Details", style: { display: "flex", flexDirection: "column", gap: 32 } },
        h("div", { style: { alignSelf: "flex-start", marginLeft: -12 } }, h(Button, { variant: "ghost", size: "sm", icon: "arrow_back", onClick: () => go("#/account/subscriptions") }, "My Subscriptions")),
        h("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 } },
          h("h1", { style: { margin: 0, fontFamily: "var(--db-font-serif)", fontWeight: 400, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.2, color: "var(--db-display)" } }, "Platinum Rewards"),
          member ? h(Badge, { tone: "charcoal" }, "Member") : h(Badge, { tone: "dove" }, "Not a member")),
        member ? h(React.Fragment, null,
          h("dl", { style: { margin: 0, display: "flex", flexDirection: "column", boxShadow: "0 -1px 0 var(--db-granite)" } },
            row("Tier", "Platinum"),
            row("Cost", "Free"),
            row("Points balance", "1,240 points"),
            row("Renews", "March 3, 2027"),
            row("Member since", "March 3, 2025")),
          h(Card, { ground: "pearl", bordered: true, padding: "md" },
            h("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
              h("span", { className: "db-eyebrow", style: { color: "var(--db-ink-muted)" } }, "Your benefits"),
              h("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 } }, BENEFITS.map((b) =>
                h("li", { key: b, style: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: "var(--db-text-body)", lineHeight: 1.4 } }, Icon ? h(Icon, { name: "check", size: 18, style: { flex: "none", marginTop: 1 } }) : null, h("span", null, b)))),
              subs.bookshelf ? h("p", { style: { margin: 0, fontSize: "var(--db-text-caption)", color: "var(--db-ink-muted)" } }, "Your Platinum price is applied to Bookshelf+ automatically.") : null)),
          h("div", { style: { alignSelf: "flex-start" } }, h(Button, { variant: "secondary", size: "sm", onClick: () => setLeave(true) }, "Leave program"))) :
        h(Card, { ground: "pearl", bordered: true, padding: "md" },
          h("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 24px" } },
            h("p", { style: { margin: 0, flex: "1 1 300px", fontSize: "var(--db-text-body)", lineHeight: 1.5 } }, "You\u2019re not a Platinum Rewards member. It\u2019s free to join, and membership starts the moment you sign up."),
            h(Button, { variant: "secondary", size: "md", onClick: onJoin }, "Join Platinum"))),
        h(Dialog, { open: leave, size: "sm", tone: "warning", title: "Leave Platinum Rewards?",
          description: "You\u2019ll lose your 1,240 points" + (subs && subs.bookshelf ? " and the Platinum price on Bookshelf+" : "") + ". You can join again any time.",
          onClose: () => setLeave(false),
          footer: h(React.Fragment, null,
            h(Button, { variant: "secondary", size: "md", onClick: () => setLeave(false) }, "Stay a member"),
            h(Button, { size: "md", onClick: () => { setLeave(false); onLeave && onLeave(); go("#/account/subscriptions"); } }, "Leave program")) })));
  }
  window.PlatinumManage = PlatinumManage;
})();
