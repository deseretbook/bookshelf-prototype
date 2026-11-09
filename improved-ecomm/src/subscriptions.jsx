/* Subscriptions overview (#/account/subscriptions). Bookshelf+ "Manage" opens the existing flow at #/account/subscriptions/bookshelf-plus. */
const SUB_RENEW = "October 28, 2026";
const SUB_PRICES = { reg: { m: 12.99, y: 129 }, plat: { m: 9.99, y: 99 } };
const SUB_POINTS = "1,240";
const BSP_BENEFITS = ["Unlimited listening and reading across 4,000+ audiobooks and eBooks", "Exclusive podcasts", "New audiobooks on release day"];
const PLAT_BENEFITS = ["Earn rewards on every purchase", "Early access to seasonal releases", "Platinum member price on Bookshelf+"];
const subMoney = (n) => "$" + n.toFixed(2).replace(/\.00$/, "");

function SubBenefits({ items }) {
  return <ul className="sub-ben">{items.map((b) => <li key={b}><Ico name="check" size={16} /><span>{b}</span></li>)}</ul>;
}
function SubRow({ k, v }) {
  return <div className="sub-row"><dt>{k}</dt><dd>{v}</dd></div>;
}
function BspLogo() {
  return <img className="sub-logo" src={(window.__resources && window.__resources.bsplus) || "assets/bookshelfplus.svg"} alt="Bookshelf+" />;
}

function Subscriptions({ user, subs, go, onSignIn, onGo, onJoinPlatinum, onLeavePlatinum }) {
  const [leave, setLeave] = useState(false);
  const { Button, Badge, Card, Dialog } = DS;
  if (!user) return (
    <div className="empty">
      <Ico name="user" size={28} />
      <h1 style={{ fontFamily: "Lora,Georgia,serif", fontWeight: 500, fontSize: 24, margin: 0 }}>Sign In to See Your Subscriptions</h1>
      <p>Your Bookshelf+ plan and Platinum Rewards membership are managed from your account.</p>
      <Button variant="secondary" onClick={onSignIn}>Sign in</Button>
    </div>
  );
  const tier = subs.platinum ? SUB_PRICES.plat : SUB_PRICES.reg;
  const yearly = subs.bspPlan === "yearly";
  const price = yearly ? subMoney(tier.y) + "/year" : subMoney(tier.m) + "/month";
  const any = subs.bookshelf || subs.platinum;
  const all = subs.bookshelf && subs.platinum;

  const bsp = (
    <Card key="bsp" padding="md" className="sub-c">
      <div className="sub-top"><BspLogo /><Badge tone="accent">Active</Badge></div>
      <dl className="sub-dl">
        <SubRow k="Plan" v={(yearly ? "Yearly" : "Monthly") + " \u00b7 " + price} />
        <SubRow k="Next renewal" v={SUB_RENEW} />
        <SubRow k="Billed to" v="Visa ending in 4242" />
      </dl>
      {subs.platinum ? <p className="sub-note">Platinum member price, applied automatically</p> : null}
      <div className="sub-acts"><Button variant="secondary" size="sm" onClick={() => go("#/account/subscriptions/bookshelf-plus")}>Manage</Button><Button variant="ghost" size="sm" onClick={() => go("#/bookshelf-plus")}>Open library</Button></div>
    </Card>
  );
  const plat = (
    <Card key="plat" padding="md" className="sub-c">
      <div className="sub-top"><h3>Platinum Rewards</h3><Badge tone="charcoal">Member</Badge></div>
      <div className="sub-pts"><strong>{SUB_POINTS}</strong><span>points</span></div>
      <dl className="sub-dl"><SubRow k="Tier" v="Platinum" /><SubRow k="Cost" v="Free" /></dl>
      <SubBenefits items={PLAT_BENEFITS} />
      <div className="sub-acts"><Button variant="secondary" size="sm" onClick={() => onGo("Platinum Rewards")}>View rewards</Button><Button variant="ghost" size="sm" onClick={() => setLeave(true)}>Leave program</Button></div>
    </Card>
  );
  const bspPromo = (
    <Card key="bsp-p" ground="pearl" bordered={false} padding="md" className="sub-c">
      <BspLogo />
      <h3>Your digital library and audiobooks</h3>
      <SubBenefits items={BSP_BENEFITS} />
      <p className="sub-note">Try it free for 14 days. Cancel before the trial ends and you won&rsquo;t be charged.</p>
      <div className="sub-acts"><Button size="sm" onClick={() => go("#/bookshelf-plus")}>Start free trial</Button></div>
    </Card>
  );
  const platPromo = (
    <Card key="plat-p" ground="pearl" bordered={false} padding="md" className="sub-c">
      <h3>Platinum Rewards</h3>
      <p className="sub-lede">Free to join. Membership starts the moment you sign up.</p>
      <SubBenefits items={PLAT_BENEFITS} />
      <div className="sub-acts"><Button size="sm" onClick={onJoinPlatinum}>Join free</Button></div>
    </Card>
  );

  return (
    <div className="subs">
      <div className="subs-h">
        <span className="subs-eb">My Account</span>
        <h1>Subscriptions</h1>
        {!any ? <p>You don&rsquo;t have any subscriptions yet. Both are available with your account.</p> : null}
      </div>
      {any ? (
        <section className="subs-sec">
          <h2 className="subs-lab">Your subscriptions</h2>
          <div className="subs-grid">{[subs.bookshelf ? bsp : null, subs.platinum ? plat : null]}</div>
        </section>
      ) : null}
      {!all ? (
        <section className="subs-sec">
          <h2 className="subs-lab">{any ? "Also available" : "Available to you"}</h2>
          <div className="subs-grid">{[!subs.bookshelf ? bspPromo : null, !subs.platinum ? platPromo : null]}</div>
        </section>
      ) : null}
      <Dialog open={leave} title="Leave Platinum Rewards?" description={"You\u2019ll lose your " + SUB_POINTS + " points" + (subs.bookshelf ? " and the Platinum price on Bookshelf+" : "") + ". You can join again any time."} onClose={() => setLeave(false)}
        footer={<React.Fragment><Button variant="ghost" onClick={() => setLeave(false)}>Stay a member</Button><Button variant="secondary" onClick={() => { setLeave(false); onLeavePlatinum(); }}>Leave program</Button></React.Fragment>} />
    </div>
  );
}
