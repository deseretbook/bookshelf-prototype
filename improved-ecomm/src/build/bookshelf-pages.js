/* Generated from the Bookshelf+ pages (archive/bookshelf-pages/*.dc.html): each page's template and logic, unchanged, compiled to React. Rebuild with the script noted in src/build/README.md. */
(function () {
var h=React.createElement;
function F(){var a=[].slice.call(arguments);var p=a[0]&&typeof a[0]==="object"&&!Array.isArray(a[0])&&!React.isValidElement(a[0])&&("key" in a[0])?a.shift():null;return h.apply(null,[React.Fragment,p].concat(a));}
function A(v){return Array.isArray(v)?v:[];}
function T(v){return v==null?"":String(v);}
function V(s,e){e=e.trim();if(e==="true")return true;if(e==="false")return false;if(e==="null")return null;if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(/^(['"]).*\1$/.test(e))return e.slice(1,-1);var v=s;var ps=e.split(".");for(var i=0;i<ps.length;i++){if(v==null)return undefined;v=v[ps[i]];}return v;}
var SC={};function S(v){if(v&&typeof v==="object")return v;if(!v)return undefined;if(SC[v])return SC[v];var o={};String(v).split(";").forEach(function(d){var i=d.indexOf(":");if(i<0)return;var k=d.slice(0,i).trim(),val=d.slice(i+1).trim();if(!k)return;if(k.indexOf("--")!==0)k=k.replace(/-([a-z])/g,function(m,c){return c.toUpperCase();});o[k]=val;});return SC[v]=o;}
function C(n){if(n==="Icon"&&window.DBIco)return window.DBIco;var D=window.DeseretBookDesignSystem_609afa||{};return D[n]||"span";}
window.BSP_PAGES=window.BSP_PAGES||{};

/* general */
(function(){
var DCLogic=function(){};
DCLogic=class extends React.Component{render(){var v=this.renderVals?this.renderVals():{};var s=Object.assign({},this.props,v);return TPL(s);}};


const IB = "assets/img/pim/";
const I = (p) => IB + p;
const dbl = (n) => n + "/" + n;
const P = [
    { id: "6017019", t: "The Candy Shop War Complete Boxed Set", by: "Mull, Brandon", price: 15.00, r: 4.8, rc: 176, cat: "books_fiction_teen-fiction", fmt: "Paperback",
      img: [I("26/5b/21/66/66215b26b1dea3bbbe48c291/6017019_The_Candy_Shop_War_Complete_Boxed_Set.png/6017019_The_Candy_Shop_War_Complete_Boxed_Set.jpg")],
      d: "All three Candy Shop War novels in one boxed set. Clearance price, while supplies last." },
    { id: "5254477", t: "And These Words Scripture Study Journal", by: "Deseret Book", price: 6.25, r: 4.1, rc: 58, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Hardcover",
      img: [I("6a/5b/21/66/66215b6ab1dea3bbbe48c904/5254477_5254477_none_base_8d114ae9.png/5254477_5254477_none_base_8d114ae9.jpg"), I("6a/5b/21/66/66215b6ab1dea3bbbe48c902/5254477_and-these-words-lifestyle.png/5254477_and-these-words-lifestyle.jpg")],
      d: "A guided journal for daily scripture study, with prompts and room to write." },
    { id: "P3941679", t: "The Infinite Atonement", by: "Callister, Tad R.", price: 24.99, r: 5.0, rc: 91, cat: "books_gospel-voices_general-authority-books", fmt: "Hardcover",
      img: [I("71/e9/66/68/6866e971f416e9f1f400f0d4/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.png/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.jpg"), I("4e/86/c9/68/68c9864e3dbf04681524130a/3941679_FEATURE_THE-INFINITE-ATONEMENT_HARDCOVER_1.png/3941679_FEATURE_THE-INFINITE-ATONEMENT_HARDCOVER_1.jpg")],
      d: "A comprehensive, readable treatment of the Atonement of Jesus Christ." },
    { id: "6070661", t: "The Love of God (18x22 Framed Canvas Print)", by: "Deseret Book", price: 114.50, r: 3.9, rc: 24, cat: "home_fine-art", fmt: "Framed Canvas Print", size: "18\" x 22\"",
      img: [I("44/a6/cf/67/67cfa6449ab7822b03cba060/6070661_6070661_none_base_ba804e01.png/6070661_6070661_none_base_ba804e01.jpg"), I("43/a6/cf/67/67cfa6439ab7822b03cba057/6070661_6070661_none_base_f7479931.png/6070661_6070661_none_base_f7479931.jpg")],
      d: "Canvas print in a wood frame, ready to hang. Half off during clearance." },
    { id: "5255079", t: "The Old Testament, Journal Edition, Patterned Unlined", by: "Deseret Book", price: 5.00, r: 4.6, rc: 143, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Paperback",
      img: [I("26/3f/16/69/69163f26c97833c19f56bead/" + dbl("5255079_HERO_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg")), I("29/3f/16/69/69163f29b4b73250f42334e9/" + dbl("5255079_PRODGALLERY_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg"))],
      d: "Wide unlined margins for notes and sketches. No index." },
    { id: "6024672", t: "Cable Knit Blessing Blanket", by: "Deseret Book", price: 6.25, r: 4.3, rc: 67, cat: "baptism", fmt: "Knit Cotton",
      img: [I("aa/70/21/66/662170aa4d8f8419f6bef5d6/6024672_6024672_none_base_42b715b0.png/6024672_6024672_none_base_42b715b0.jpg")],
      d: "A soft cable-knit blanket for a blessing day keepsake." },
    { id: "6095538", t: "Seeking Persephone (Movie Tie-in Edition)", by: "Eden, Sarah M.", price: 18.99, r: 4.8, rc: 214, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("63/79/6b/6a/6a6b7963aecf6cfadd773d25/" + dbl("6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg")), I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg"))],
      d: "The movie tie-in edition of Sarah M. Eden\u2019s beloved Regency romance. Persephone Lancaster marries a stranger to save her family \u2014 and finds a quiet, guarded man who needs her more than he knows." },
    { id: "P5068623", t: "Seeking Persephone (The Lancaster Family, Book 1)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 17.99, r: 4.2, rc: 386, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg")), I("fe/21/d9/69/69d921fe778e76271e56f640/" + dbl("5068623_FEATURE_SEEKING-PERSEPHONE_INTERIOR1.jpg"))],
      d: "Book one of the Lancaster Family series. A marriage of convenience becomes something neither of them expected." },
    { id: "P5043081", t: "Courting Miss Lancaster (The Lancaster Family, Book 2)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 15.99, r: 3.9, rc: 241, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("97/1d/d9/69/69d91d972877f3aacd15491d/" + dbl("5043081_HERO_COURTING-MISS-LANCASTER.jpg")), I("a1/1d/d9/69/69d91da1eabe6d00111fdaf4/" + dbl("5043081_FEATURE_COURTING-MISS-LANCASTER_INTERIOR1.jpg"))],
      d: "Athena Lancaster wants a romantic suitor. Her guardian asks his closest friend to help her find one \u2014 a plan with one obvious flaw." },
    { id: "P5183500", t: "Romancing Daphne (The Lancaster Family, Book 3)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.6, rc: 178, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("07/50/27/69/69275007869d9d2aed915ea2/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.png/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.jpg")],
      d: "The quietest Lancaster sister steps into a London season she never wanted." },
    { id: "P5197705", t: "Loving Lieutenant Lancaster (The Lancaster Family, Book 4)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 16.99, r: 5, rc: 143, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("b2/23/d9/69/69d923b24ad2ea64df99c5f3/" + dbl("5197705_HERO_LOVING-LIEUTENANT-LANCASTER.jpg"))],
      d: "A soldier returns from war to a woman who remembers who he was before." },
    { id: "P5258117", t: "Charming Artemis (The Lancaster Family, Book 5)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 18.99, r: 4.4, rc: 132, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("d9/1b/d9/69/69d91bd9b9ba62fc50204cd0/" + dbl("5258117_HERO_CHARMING-ARTEMIS.jpg"))],
      d: "The last Lancaster sister and the Jonquil brother who has always exasperated her." },
    { id: "PR00001380", t: "Every Beat After", by: "Various", price: 18.99, priceHigh: 32.99, r: 3.7, rc: 27, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("c6/eb/c6/69/69c6ebc6bcb2c7b68da50814/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.png/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.jpg"), I("29/b8/ca/69/69cab829eff20acca1da5cf9/" + dbl("6087090_FEATURE_EVERY-BEAT-AFTER_PAPERBACK_INTERIOR1.jpg"))],
      d: "A new release for the reader who needs a steady hour." },
    { id: "PR00001397", t: "The Duke\u2019s Bargain", by: "Various", price: 18.99, priceHigh: 32.99, r: 4.9, rc: 31, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("4f/eb/cb/69/69cbeb4f1697b5a856e37127/PR00001397_HERO_THE-DUKES-BARGAIN.png/PR00001397_HERO_THE-DUKES-BARGAIN.jpg")],
      d: "A bargain struck in good faith, and the season that tests it." }
];
const CTA = (bg) => ({
  href: '#plans', variant: 'primary', size: 'lg',
  style: { background: bg, borderColor: bg, whiteSpace: 'nowrap', minWidth: 'min(320px, 100%)' }
});

const TIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$12.99/month', monthly: 12.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$129/year', monthly: 12.99, yearlyTotal: 129
  }
];
/* Platinum members see the Platinum price; everything else on the page stays the same. */
const PTIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$9.99/month', monthly: 9.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$99/year', monthly: 9.99, yearlyTotal: 99
  }
];

class Component extends DCLogic {
  state = { faq: null };

  renderVals() {

    const { suOpenFn, ...suBase } = window.BspSignup.vals(this, this.props.member ? PTIERS : TIERS);
    const suVals = { ...suBase,
      heroCtaProps: { ...CTA('var(--scheme-300)'), onClick: suOpenFn },
      signupCtaProps: { ...CTA('var(--db-accent-deep)'), onClick: suOpenFn }
    };
    const faq = {};
    ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'].forEach(k => {
      const isOpen = this.state.faq === k;
      faq[k + 'Open'] = isOpen;
      faq[k + 'Sign'] = isOpen ? '\u2212' : '+';
      faq[k + 'Toggle'] = () => this.setState(s => ({ faq: s.faq === k ? null : k }));
    });


    const byId = id => P.find(p => p.id === id);
    const launchIds = ['PR00001380','PR00001397','6095538','P5258117','P5197705','P5183500','P5043081','P5068623','6073624','P3941679'];
    const launches = launchIds.map(id => (window.D && window.D.byId && window.D.byId(id)) || byId(id)).filter(Boolean).map(p => ({ p: p, t: p.t, by: p.by, href: '#/p/' + p.id, coverStyle: { display: 'block', width: '100%', aspectRatio: '3 / 4', borderRadius: 'var(--db-radius-sm)', backgroundImage: 'url(' + p.img[0] + ')', backgroundSize: 'contain', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat' } }));
    return {
      ...faq,
      launches,
      ...suVals,
      tiers: (this.props.member ? PTIERS : TIERS).map(t => {
        const money = v => '$' + v.toFixed(2).replace(/\.00$/, '');
        let compare = '', save = '', annual = '';
        if (t.term === 'monthly') {
          annual = money(t.monthly * 12) + '/year total';
        } else if (t.term === 'yearly') {
          compare = money(t.monthly * 12) + '/year';
          save = 'Save ' + money(t.monthly * 12 - t.yearlyTotal);
        }
        /* Platinum members: the card's one meta line shows the regular price struck through and "Platinum price", so the card keeps its size. */
        if (this.props.member) {
          const reg = TIERS.find(x => x.key === t.key);
          compare = reg ? money(t.term === 'yearly' ? reg.yearlyTotal : reg.monthly) : '';
          /* The full sentence where the card is wide enough to keep it on one line; "Platinum price" where it isn't (css/bookshelf-pages.css). */
          const off = reg ? money(t.term === 'yearly' ? reg.yearlyTotal - t.yearlyTotal : reg.monthly - t.monthly) : '';
          save = React.createElement(React.Fragment, null,
            React.createElement('span', { className: 'bsp-plat-long' }, 'Save ' + off + (t.term === 'yearly' ? ' a year' : ' a month') + ' with Platinum'),
            React.createElement('span', { className: 'bsp-plat-short' }, 'Platinum price'));
          annual = '';
        }
        const price = t.price;
        const slash = price.indexOf('/');
        const accent = 'var(--db-accent-deep)';
        const hairline = 'var(--db-dove)';
        return {
          name: t.name,
          nameColor: accent,
          cardProps: {
            ground: 'white',
            padding: 'none',
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(18px, 3vw, 28px)'
            }
          },
          amount: slash === -1 ? price : price.slice(0, slash),
          unit: slash === -1 ? '' : price.slice(slash),
          unitSize: '16px',
          amountSize: '38px',
          rowWhite: t.term ? 'nowrap' : 'normal',
          rowMargin: t.term ? 'clamp(6px, 1.8vw, 20px) -16px 0' : 'clamp(6px, 1.8vw, 20px) 0 0',
          compare,
          save,
          annual,
          badge: t.badge,
          hasMeta: !!(compare || save || annual)
        };
      }),

    };
  }
}

function TPL(s){return F(h("div",{style:S("font-family: var(--font-text); color: var(--label-primary); background: var(--bg-primary);")},h("section",{"data-hero-banner":"",style:S("position: relative; width: 100%; padding: clamp(20px, 3vw, 44px) 20px 40px; background-color: var(--db-granite); background-image: url('assets/bookshelf/Bookshelf-General-Mobile-Hero-2.png'); background-size: cover; background-position: center; background-repeat: no-repeat;")},h("div",{style:S("display: flex; justify-content: center;")},h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: clamp(10px, 1.6vw, 22px); max-width: 900px; padding: clamp(16px, 2.4vw, 34px) clamp(20px, 3.5vw, 56px); box-sizing: border-box; background: rgba(15,128,121,0.9); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border-radius: var(--db-radius-lg); text-align: center;"),"data-hero-stack":""},h("div",{style:S("display: flex; align-items: center; justify-content: center; margin-bottom: clamp(-14px, -1.2vw, -4px);")},h("svg",{"viewBox":"0 0 768 132",style:S("display: block; width: clamp(165px, 20vw, 320px); height: auto; color: rgb(255,255,255);"),"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","role":"img","aria-hidden":"true","focusable":"false"},h("path",{"d":"M89.8203 0C120.176 6.6602e-05 145.016 24.8399 145.016 55.1992V73.2344H150.742C158.375 73.5078 165.734 76.5078 171.184 81.9609C176.637 87.4101 179.637 94.7696 179.637 102.676C179.637 110.309 176.637 117.941 171.184 123.391C165.734 128.844 158.375 131.844 150.469 131.844H136.828C132.242 131.844 128.523 128.125 128.523 123.543V55.5664C128.523 34.2774 111.105 16.8594 89.8203 16.8594C68.5273 16.8594 51.1094 34.2773 51.1094 55.5664V123.543C51.1094 128.125 47.3945 131.844 42.8086 131.844H29.168C21.2617 131.844 13.9023 128.844 8.44922 123.391C3 117.941 0 110.309 0 102.676C0 94.7695 3 87.4102 8.44922 81.9609C13.9023 76.5079 21.2617 73.5078 28.8945 73.2344H34.6172V55.1992C34.6172 24.8398 59.457 0 89.8203 0ZM28.8945 90.6836C25.625 90.6836 22.625 91.7735 20.1719 94.2266C17.9922 96.4062 16.6289 99.6758 16.6289 102.949C16.6289 106.219 17.7188 109.219 20.1719 111.672C22.3516 113.852 25.625 115.215 28.8945 115.215H32.0352C33.4609 115.215 34.6172 114.059 34.6172 112.633V93.2656C34.6172 91.8399 33.4609 90.6837 32.0352 90.6836H28.8945ZM147.602 90.6836C146.176 90.6836 145.016 91.8398 145.016 93.2656V112.633C145.016 114.059 146.176 115.215 147.602 115.215H150.742C154.012 115.215 157.285 113.852 159.465 111.672C161.918 109.219 163.008 106.219 163.008 102.949C163.008 99.6758 161.645 96.4062 159.465 94.2266C157.012 91.7735 154.012 90.6836 150.742 90.6836H147.602Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M244.535 52.1562C245.914 52.1563 247.031 53.2735 247.031 54.6562V76.6406C247.031 78.7344 249.441 79.8867 251.082 78.5898C251.922 77.9258 252.82 77.3164 253.781 76.7578C256.539 75.1641 259.949 74.3633 264.016 74.3633C269.023 74.3633 273.504 75.6133 277.461 78.1211C281.414 80.625 284.555 84.0352 286.879 88.3516C289.199 92.6719 290.359 97.625 290.359 103.211C290.359 108.656 289.199 113.555 286.879 117.91C284.555 122.262 281.434 125.676 277.516 128.141C273.598 130.605 269.133 131.844 264.125 131.844C261.438 131.844 259.027 131.516 256.887 130.863C254.746 130.211 252.855 129.285 251.227 128.086C250.758 127.742 250.305 127.387 249.875 127.016C248.488 125.82 246.34 126.453 245.84 128.215L245.695 128.719C245.395 129.793 244.41 130.535 243.293 130.535H233.203C231.824 130.535 230.703 129.418 230.703 128.039V54.6562C230.703 53.2734 231.824 52.1562 233.203 52.1562H244.535ZM260.098 88.625C257.41 88.625 255.035 89.2618 252.965 90.5312C250.898 91.8008 249.281 93.5078 248.121 95.6445C246.961 97.7891 246.383 100.309 246.383 103.211C246.383 105.973 246.961 108.457 248.121 110.668C249.281 112.883 250.898 114.59 252.965 115.785C255.035 116.984 257.41 117.582 260.098 117.582C262.711 117.582 265.051 116.965 267.117 115.73C269.187 114.5 270.801 112.809 271.961 110.668C273.125 108.527 273.703 106.043 273.703 103.211C273.703 100.383 273.125 97.8594 271.961 95.6445C270.801 93.4336 269.187 91.7109 267.117 90.4766C265.051 89.2422 262.711 88.625 260.098 88.625Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M323.781 74.3633C329.152 74.3633 333.941 75.5977 338.152 78.0664C342.359 80.5312 345.699 83.9258 348.168 88.2422C350.633 92.5625 351.867 97.5156 351.867 103.105C351.867 108.691 350.633 113.645 348.168 117.961C345.699 122.281 342.359 125.676 338.152 128.141C333.941 130.609 329.152 131.844 323.781 131.844C318.484 131.844 313.73 130.609 309.52 128.141C305.309 125.676 301.973 122.281 299.504 117.961C297.035 113.645 295.801 108.73 295.801 103.211C295.801 97.5508 297.035 92.5625 299.504 88.2422C301.973 83.9258 305.328 80.5312 309.574 78.0664C313.82 75.5977 318.555 74.3633 323.781 74.3633ZM323.891 88.5156C321.715 88.5156 319.77 89.0586 318.066 90.1484C316.359 91.2383 315 92.8711 313.984 95.0469C312.965 97.2266 312.461 99.9102 312.461 103.105C312.461 106.297 312.965 108.98 313.984 111.16C315 113.336 316.359 114.969 318.066 116.059C319.77 117.148 321.676 117.691 323.781 117.691C325.957 117.691 327.898 117.148 329.605 116.059C331.309 114.969 332.672 113.336 333.688 111.16C334.703 108.98 335.211 106.297 335.211 103.105C335.211 99.9102 334.703 97.2266 333.688 95.0469C332.672 92.8711 331.328 91.2383 329.66 90.1484C327.988 89.0586 326.066 88.5156 323.891 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M385.289 74.3633C390.656 74.3633 395.445 75.5977 399.656 78.0664C403.867 80.5312 407.203 83.9258 409.672 88.2422C412.137 92.5625 413.375 97.5156 413.375 103.105C413.375 108.691 412.137 113.645 409.672 117.961C407.203 122.281 403.867 125.676 399.656 128.141C395.445 130.609 390.656 131.844 385.289 131.844C379.988 131.844 375.234 130.609 371.027 128.141C366.816 125.676 363.477 122.281 361.012 117.961C358.543 113.645 357.309 108.73 357.309 103.211C357.309 97.5508 358.543 92.5625 361.012 88.2422C363.477 83.9258 366.836 80.5312 371.082 78.0664C375.324 75.5977 380.063 74.3633 385.289 74.3633ZM385.395 88.5156C383.219 88.5156 381.273 89.0586 379.574 90.1484C377.867 91.2383 376.504 92.8711 375.492 95.0469C374.473 97.2266 373.965 99.9102 373.965 103.105C373.965 106.297 374.473 108.98 375.492 111.16C376.504 113.336 377.867 114.969 379.574 116.059C381.273 117.148 383.18 117.691 385.289 117.691C387.465 117.691 389.406 117.148 391.113 116.059C392.816 114.969 394.176 113.336 395.195 111.16C396.211 108.98 396.719 106.297 396.719 103.105C396.719 99.9102 396.211 97.2266 395.195 95.0469C394.176 92.8711 392.832 91.2383 391.164 90.1484C389.496 89.0586 387.574 88.5156 385.395 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M499.375 74.3633C506.266 74.3633 511.676 75.8867 515.594 78.9336C518.66 81.3203 520.75 84.3516 521.859 88.0273C522.344 89.625 521.125 91.2382 519.457 91.2383H508.938C508.012 91.2383 507.215 90.6914 506.727 89.9023C506.227 89.086 505.52 88.4258 504.598 87.918C503.219 87.1563 501.477 86.7734 499.375 86.7734C496.98 86.7734 495.164 87.1719 493.93 87.9727C492.695 88.7695 492.082 89.8242 492.082 91.1289C492.082 92 492.496 92.7812 493.332 93.4688C494.164 94.1601 495.383 94.7578 496.98 95.2656C498.574 95.7734 500.535 96.2813 502.855 96.7891C507.285 97.7344 511.113 98.75 514.344 99.8359C517.57 100.926 520.094 102.504 521.91 104.574C523.723 106.641 524.594 109.633 524.52 113.555C524.594 117.109 523.668 120.266 521.746 123.027C519.82 125.785 517.082 127.941 513.527 129.504C509.969 131.062 505.723 131.844 500.789 131.844C495.637 131.844 491.191 131.027 487.453 129.395C483.715 127.762 480.773 125.527 478.637 122.699C477.145 120.727 476.102 118.578 475.508 116.254C475.102 114.668 476.301 113.117 477.938 113.117H489.426C490.437 113.117 491.316 113.746 491.727 114.672C492.008 115.301 492.359 115.891 492.789 116.438C493.551 117.418 494.602 118.18 495.945 118.723C497.285 119.27 498.793 119.543 500.465 119.543C502.273 119.543 503.746 119.305 504.871 118.832C505.996 118.363 506.848 117.727 507.43 116.93C508.008 116.133 508.301 115.297 508.301 114.426C508.301 113.047 507.883 111.996 507.047 111.266C506.215 110.543 504.996 109.945 503.402 109.473C501.805 109 499.883 108.547 497.633 108.109C495.02 107.531 492.426 106.859 489.848 106.098C487.273 105.336 484.984 104.375 482.988 103.211C480.992 102.051 479.398 100.543 478.203 98.6953C477.004 96.8438 476.402 94.5781 476.402 91.8906C476.402 88.625 477.309 85.668 479.125 83.0156C480.938 80.3711 483.551 78.2656 486.965 76.7031C490.375 75.1445 494.512 74.3633 499.375 74.3633Z"}),h("path",{"d":"M621.297 74.3633C626.812 74.3633 631.641 75.5625 635.777 77.957C639.914 80.3516 643.16 83.6016 645.52 87.6992C647.879 91.8008 649.059 96.5352 649.059 101.906C649.059 102.633 649.039 103.449 649.004 104.355C648.996 104.504 648.988 104.652 648.98 104.801C648.902 106.113 647.793 107.133 646.477 107.133H611.957C610.316 107.133 609.07 108.699 609.539 110.273C609.754 111 610.027 111.695 610.355 112.355C611.336 114.316 612.754 115.84 614.602 116.93C616.453 118.016 618.648 118.562 621.188 118.562C623.582 118.562 625.559 118.07 627.121 117.094C628.324 116.336 629.324 115.418 630.117 114.34C630.582 113.707 631.324 113.336 632.109 113.336H643.801C645.637 113.336 646.852 115.25 646.07 116.91C645.082 119.004 643.793 120.949 642.199 122.754C639.73 125.547 636.719 127.762 633.164 129.395C629.606 131.027 625.687 131.844 621.406 131.844C615.746 131.844 610.773 130.664 606.492 128.305C602.211 125.945 598.852 122.645 596.422 118.398C593.992 114.152 592.773 109.273 592.773 103.758C592.773 98.0938 593.973 93.0508 596.367 88.625C598.766 84.1992 602.102 80.7148 606.383 78.1758C610.664 75.6329 615.637 74.3633 621.297 74.3633ZM621.406 87.5352C619.086 87.5352 616.977 88.0821 615.094 89.168C613.203 90.2578 611.699 91.8906 610.574 94.0664C610.57 94.0781 610.562 94.0898 610.559 94.0977C609.723 95.7266 610.992 97.6602 612.824 97.6602H629.414C631.129 97.6601 632.352 95.9609 631.781 94.3398C631.234 92.7774 630.336 91.4336 629.082 90.3125C627.012 88.461 624.453 87.5352 621.406 87.5352Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M107.336 44.9297C108.223 44.754 109.078 45.3399 109.246 46.2266L124.461 127.805C124.625 128.684 124.051 129.527 123.172 129.699L113.824 131.527C112.938 131.699 112.082 131.117 111.914 130.23L96.7031 48.6523C96.5391 47.7734 97.1133 46.9297 97.9883 46.7578L107.336 44.9297Z"}),h("path",{"d":"M69.0664 45.1602C69.9648 45.1602 70.6914 45.8868 70.6914 46.7852V129.672C70.6914 130.57 69.9648 131.297 69.0664 131.297H60.8789C59.9805 131.297 59.2539 130.57 59.2539 129.672V46.7852C59.2539 45.8867 59.9805 45.1602 60.8789 45.1602H69.0664Z"}),h("path",{"d":"M91.6914 30.7109C92.5859 30.711 93.3164 31.4414 93.3164 32.3398V129.672C93.3164 130.57 92.5859 131.297 91.6914 131.297H77.9648C77.0703 131.297 76.3398 130.57 76.3398 129.672V32.3398C76.3398 31.4414 77.0703 30.7109 77.9648 30.7109H91.6914Z"}),h("path",{"d":"M434.277 52.1562C435.66 52.1563 436.777 53.2735 436.777 54.6562V90.4922C436.777 92.8477 439.734 93.8945 441.215 92.0664L453.773 76.5938C454.246 76.0079 454.957 75.668 455.711 75.668H468.375C470.508 75.6681 471.66 78.168 470.277 79.7891L453.609 99.3359C452.816 100.266 452.812 101.637 453.605 102.57L473.793 126.422C475.168 128.047 474.016 130.535 471.887 130.535H458.273C457.488 130.535 456.746 130.168 456.277 129.543L441.273 109.633C439.828 107.715 436.777 108.738 436.777 111.137V128.039C436.777 129.418 435.66 130.535 434.277 130.535H422.949C421.566 130.535 420.449 129.418 420.449 128.039V54.6562C420.449 53.2734 421.566 52.1562 422.949 52.1562H434.277Z"}),h("path",{"d":"M545.102 52.1562C546.48 52.1563 547.598 53.2735 547.598 54.6562V76.9805C547.598 79.082 550.035 80.2461 551.664 78.9141C552.586 78.1602 553.59 77.4765 554.676 76.8672C557.648 75.1993 561.133 74.3633 565.125 74.3633C569.769 74.3633 573.652 75.3438 576.773 77.3047C579.894 79.2617 582.254 82.1133 583.848 85.8477C585.445 89.5859 586.246 94.1055 586.246 99.4023V128.035C586.246 129.418 585.125 130.535 583.746 130.535H572.523C571.145 130.535 570.023 129.418 570.023 128.035V100.926C570.023 96.8633 569.172 93.7031 567.465 91.4531C565.758 89.2071 563.059 88.0781 559.355 88.0781C557.18 88.0781 555.18 88.625 553.371 89.7148C551.555 90.8008 550.137 92.3438 549.121 94.3398C548.105 96.3359 547.598 98.7148 547.598 101.469V128.035C547.598 129.418 546.48 130.535 545.102 130.535H533.77C532.387 130.535 531.27 129.418 531.27 128.035V54.6562C531.27 53.2734 532.387 52.1562 533.77 52.1562H545.102Z"}),h("path",{"d":"M669.418 52.1562C670.801 52.1563 671.918 53.2735 671.918 54.6562V128.039C671.918 129.418 670.801 130.535 669.418 130.535H658.086C656.707 130.535 655.59 129.418 655.59 128.039V54.6562C655.59 53.2734 656.707 52.1562 658.086 52.1562H669.418Z"}),h("path",{"d":"M707.305 52.1562C708.684 52.1563 709.801 53.2735 709.801 54.6562V63.4844C709.801 64.8632 708.684 65.9804 707.305 65.9805H705.449C703.199 65.9805 701.602 66.418 700.656 67.2891C699.715 68.1602 699.242 69.6484 699.242 71.75V73.1719C699.242 74.5508 700.363 75.668 701.742 75.668H708.066C709.445 75.668 710.566 76.7891 710.566 78.168V86.7773C710.566 88.1601 709.445 89.2773 708.066 89.2773H701.742C700.363 89.2773 699.242 90.3984 699.242 91.7773V128.039C699.242 129.418 698.125 130.535 696.746 130.535H685.414C684.031 130.535 682.914 129.418 682.914 128.039V91.7773C682.914 90.3985 681.793 89.2774 680.414 89.2773H678.227C676.848 89.2773 675.73 88.1602 675.73 86.7773V78.168C675.73 76.7891 676.848 75.668 678.227 75.668H680.414C681.793 75.6679 682.914 74.5507 682.914 73.1719V71.75C682.914 66.9609 683.746 63.1328 685.418 60.2656C687.086 57.3985 689.426 55.332 692.441 54.0586C695.449 52.793 698.914 52.1562 702.836 52.1562H707.305Z"}),h("path",{"d":"M746.742 74.3633C747.934 74.3633 748.898 75.3282 748.898 76.5195V90.4766C748.898 91.668 749.863 92.6328 751.055 92.6328H765.012C766.203 92.6329 767.168 93.6016 767.168 94.793V105.004C767.168 106.195 766.203 107.164 765.012 107.164H751.055C749.863 107.164 748.898 108.129 748.898 109.32V123.277C748.898 124.469 747.934 125.434 746.742 125.434H736.527C735.336 125.434 734.371 124.469 734.371 123.277V109.32C734.371 108.129 733.402 107.164 732.215 107.164H718.258C717.062 107.164 716.098 106.195 716.098 105.004V94.793C716.098 93.6016 717.062 92.6328 718.258 92.6328H732.215C733.402 92.6327 734.371 91.6679 734.371 90.4766V76.5195C734.371 75.3281 735.336 74.3633 736.527 74.3633H746.742Z"}))),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px, 3.8vw, 60px); line-height: 1.12; letter-spacing: -1px; color: rgb(255,255,255);")},"4000+ ",h("br",{"data-hero-br-m":"",style:S("display:none")}),"Gospel & Clean ",h("br",{"data-hero-br-d":""}),h("br",{"data-hero-br-m":"",style:S("display:none")}),"Fiction books ",h("br",{"data-hero-br-m":"",style:S("display:none")}),"on your phone"),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(14px, 1.6vw, 26px); line-height: 1.3; color: var(--db-dove);")},"Starting at "+(s.member?"$9.99":"$12.99")+"/month."),h("div",{"data-hero-cta":"","data-cta":"",style:S("display: none; justify-content: center; width: 100%; margin-top: 16px;")},h(C("Button"),Object.assign({},V(s,"heroCtaProps"),{}),"Start 14-day free trial"))))),h("section",{"id":"plans",style:S("padding: clamp(24px, 5vw, 40px) clamp(12px, 4vw, 20px) clamp(24px, 4vw, 40px); background-color: rgb(255,255,255)")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(14px, 3vw, 32px);")},(A(V(s,"tiers")).map((it,i)=>((s)=>F({key:i},h(C("Card"),Object.assign({},V(s,"t.cardProps"),{}),h("span",{style:S("display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;")},h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); line-height: 1.5; text-transform: uppercase; text-align: center; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.name")),((V(s,"t.badge"))?F(h("span",{style:S("padding: 4px 12px; border-radius: var(--db-radius-pill); background: var(--db-orange-100); color: var(--scheme-500); font-family: var(--db-font-sans); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;")},V(s,"t.badge"))):null)),h("span",{style:S("display: flex; align-items: baseline; justify-content: center; gap: 4px; margin: "+T(V(s,"t.rowMargin"))+"; white-space: "+T(V(s,"t.rowWhite"))+";")},h("span",{style:S("font-family: var(--db-font-serif); font-size: "+T(V(s,"t.amountSize"))+"; font-weight: var(--db-weight-serif-regular); line-height: 1.2; text-align: center; text-wrap: pretty; color: var(--db-display);")},V(s,"t.amount")),((V(s,"t.unit"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: "+T(V(s,"t.unitSize"))+"; white-space: nowrap; color: var(--db-ink-muted);")},V(s,"t.unit"))):null)),((V(s,"t.hasMeta"))?F(h("span",{style:S("display: flex; align-items: baseline; justify-content: center; flex-wrap: wrap; gap: 4px 10px; margin-top: var(--db-space-3);")},((V(s,"t.compare"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; text-decoration: line-through; color: var(--db-ink-muted);")},V(s,"t.compare"))):null),((V(s,"t.save"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); text-transform: uppercase; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.save"))):null),((V(s,"t.annual"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; color: var(--db-ink-muted);")},V(s,"t.annual"))):null))):null))))(Object.assign({},s,{"t":it}))))),h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: clamp(24px, 3.5vw, 36px);")},h("div",{"data-cta-teal":"",style:S("display: flex; justify-content: center; width: 100%;")},h(C("Button"),Object.assign({},V(s,"signupCtaProps"),{}),"Sign up today")),h("p",{style:S("margin: 0; text-align: center; font-family: var(--db-font-sans); font-size: 13px; line-height: 1.4; color: var(--db-ink-muted);")},"Cancel any time.")),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: clamp(32px, 5vw, 56px) 0 0;")},h("h1",{style:S("margin: 0 0 48px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.2; letter-spacing: 0; color: var(--db-display); text-wrap: balance;")},"You'll Get Exclusive Access To"),h("ul",{"data-perks-grid":"",style:S("list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 40px 32px; margin: 0; padding: 0; justify-content: center;")},h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_UnlimitedListening.jpg","alt":"Unlimited Listening",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Unlimited Listening")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_Wholesome.jpg","alt":"Guaranteed Clean Content",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Guaranteed Clean Content")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/ebooks-square-03.jpg","alt":"4,000+ Audiobooks & eBooks",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"4,000+ Audiobooks & eBooks")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_ExclusiveContent.jpg","alt":"Exclusive Podcasts",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Exclusive Podcasts")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_NewAudiobooks.jpg","alt":"New Audiobooks on Release Day",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"New Audiobooks on Release Day")))))),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: 0 20px 64px;")},h("h2",{style:S("margin: 0 0 32px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.2; color: var(--db-display); text-wrap: balance;")},"Latest Launches"),h("div",{className:"grid",style:{padding:0},"data-launch-grid":""},A(V(s,"launches")).map((it)=>h(window.ProductCard,{key:it.p.id,p:it.p,lite:true,onOpen:(id)=>{location.hash="#/p/"+id;},onAdd:(p)=>{window.__dbAdd&&window.__dbAdd(p);}})))),h("section",{style:S("background: var(--db-dove); padding: 40px 20px 64px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 56px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.2vw, 44px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"What People are Saying"),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 44px;")},h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“We’ve listened to dozens of books for the price of three hard copies.”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I’m a busy mom…This app makes reading so much easier for me!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I love the variety of books found here!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review"))))),h("section",{style:S("background: var(--db-dove); padding: 56px 20px 72px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 30px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.4vw, 46px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"Frequently Asked Questions"),h(C("Accordion"),{className:"bsp-faq",items:[{title:"What is Bookshelf+?",content:h("p",{style:S("margin: 0;")},h("strong",{style:S("color: var(--db-charcoal);")},"Bookshelf+ is a digital subscription that gives you unlimited access to Deseret Book's entire digital audiobook library—"),"including books from gospel leaders, a full library of clean and compelling fiction, inspiring audiobooks, exclusive podcasts, and more. It's like having an uplifting library in your pocket, wherever you go.")},{title:"Is there a free trial?",content:h("p",{style:S("margin: 0;")},"Yes! You get 7 days to try Bookshelf+ risk-free. Just sign up, and you won't be charged if you cancel before the 7-day trial ends. No commitment, no fees. One free trial per customer.")},{title:"Where can I use Bookshelf+?",content:h("p",{style:S("margin: 0;")},"Anywhere, anytime. Just download the ",h("strong",{style:S("color: var(--db-charcoal);")},"Deseret Bookshelf app")," from the ",h("a",{"href":"https://apps.apple.com/us/app/deseret-bookshelf-lds-books/id428709147"},"App Store")," or ",h("a",{"href":"https://play.google.com/store/apps/details?id=com.deseretdigital.bookshelf&hl=en_US"},"Google Play")," and log in to access your subscription on your phone or tablet.",h("br",{}),"Prefer desktop? You can also read and listen at ",h("strong",{},h("a",{"href":"https://read.deseretbook.com/"},"read.deseretbook.com"))," on any browser.")},{title:"Can I cancel anytime?",content:h("p",{style:S("margin: 0;")},"Yes, Bookshelf+ is flexible. You can cancel anytime through your account settings at DeseretBook.com.")},{title:"What happens if I cancel? Will I lose my books?",content:h("p",{style:S("margin: 0;")},"If you cancel, you'll lose access to the full Bookshelf+ library. However, any individual books you've purchased separately (a la carte) will still be accessible through the Deseret Bookshelf app.")}]}),h("h4",{style:S("margin: 26px 0 0; text-align: center; font-family: var(--font-text); font-size: 16px; font-weight: 400; color: var(--db-charcoal);")},"View Bookshelf ",h("a",{"href":"#plans",style:S("color: inherit; text-decoration: underline;")},"Terms and Conditions")))),h(window.BspSignupDialog,{s:s,V:V})));}
window.BSP_PAGES["general"]=Component;
window.BSP_TIERS=window.BSP_TIERS||{};window.BSP_TIERS["general"]=TIERS;
})();

/* general-v2 */
(function(){
var DCLogic=function(){};
DCLogic=class extends React.Component{render(){var v=this.renderVals?this.renderVals():{};var s=Object.assign({},this.props,v);return TPL(s);}};


const IB = "assets/img/pim/";
const I = (p) => IB + p;
const dbl = (n) => n + "/" + n;
const P = [
    { id: "6017019", t: "The Candy Shop War Complete Boxed Set", by: "Mull, Brandon", price: 15.00, r: 4.8, rc: 176, cat: "books_fiction_teen-fiction", fmt: "Paperback",
      img: [I("26/5b/21/66/66215b26b1dea3bbbe48c291/6017019_The_Candy_Shop_War_Complete_Boxed_Set.png/6017019_The_Candy_Shop_War_Complete_Boxed_Set.jpg")],
      d: "All three Candy Shop War novels in one boxed set. Clearance price, while supplies last." },
    { id: "5254477", t: "And These Words Scripture Study Journal", by: "Deseret Book", price: 6.25, r: 4.1, rc: 58, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Hardcover",
      img: [I("6a/5b/21/66/66215b6ab1dea3bbbe48c904/5254477_5254477_none_base_8d114ae9.png/5254477_5254477_none_base_8d114ae9.jpg"), I("6a/5b/21/66/66215b6ab1dea3bbbe48c902/5254477_and-these-words-lifestyle.png/5254477_and-these-words-lifestyle.jpg")],
      d: "A guided journal for daily scripture study, with prompts and room to write." },
    { id: "P3941679", t: "The Infinite Atonement", by: "Callister, Tad R.", price: 24.99, r: 5.0, rc: 91, cat: "books_gospel-voices_general-authority-books", fmt: "Hardcover",
      img: [I("71/e9/66/68/6866e971f416e9f1f400f0d4/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.png/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.jpg"), I("4e/86/c9/68/68c9864e3dbf04681524130a/3941679_FEATURE_THE-INFINITE-ATONEMENT_HARDCOVER_1.png/3941679_FEATURE_THE-INFINITE-ATONEMENT_HARDCOVER_1.jpg")],
      d: "A comprehensive, readable treatment of the Atonement of Jesus Christ." },
    { id: "6070661", t: "The Love of God (18x22 Framed Canvas Print)", by: "Deseret Book", price: 114.50, r: 3.9, rc: 24, cat: "home_fine-art", fmt: "Framed Canvas Print", size: "18\" x 22\"",
      img: [I("44/a6/cf/67/67cfa6449ab7822b03cba060/6070661_6070661_none_base_ba804e01.png/6070661_6070661_none_base_ba804e01.jpg"), I("43/a6/cf/67/67cfa6439ab7822b03cba057/6070661_6070661_none_base_f7479931.png/6070661_6070661_none_base_f7479931.jpg")],
      d: "Canvas print in a wood frame, ready to hang. Half off during clearance." },
    { id: "5255079", t: "The Old Testament, Journal Edition, Patterned Unlined", by: "Deseret Book", price: 5.00, r: 4.6, rc: 143, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Paperback",
      img: [I("26/3f/16/69/69163f26c97833c19f56bead/" + dbl("5255079_HERO_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg")), I("29/3f/16/69/69163f29b4b73250f42334e9/" + dbl("5255079_PRODGALLERY_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg"))],
      d: "Wide unlined margins for notes and sketches. No index." },
    { id: "6024672", t: "Cable Knit Blessing Blanket", by: "Deseret Book", price: 6.25, r: 4.3, rc: 67, cat: "baptism", fmt: "Knit Cotton",
      img: [I("aa/70/21/66/662170aa4d8f8419f6bef5d6/6024672_6024672_none_base_42b715b0.png/6024672_6024672_none_base_42b715b0.jpg")],
      d: "A soft cable-knit blanket for a blessing day keepsake." },
    { id: "6095538", t: "Seeking Persephone (Movie Tie-in Edition)", by: "Eden, Sarah M.", price: 18.99, r: 4.8, rc: 214, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("63/79/6b/6a/6a6b7963aecf6cfadd773d25/" + dbl("6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg")), I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg"))],
      d: "The movie tie-in edition of Sarah M. Eden\u2019s beloved Regency romance. Persephone Lancaster marries a stranger to save her family \u2014 and finds a quiet, guarded man who needs her more than he knows." },
    { id: "P5068623", t: "Seeking Persephone (The Lancaster Family, Book 1)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 17.99, r: 4.2, rc: 386, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg")), I("fe/21/d9/69/69d921fe778e76271e56f640/" + dbl("5068623_FEATURE_SEEKING-PERSEPHONE_INTERIOR1.jpg"))],
      d: "Book one of the Lancaster Family series. A marriage of convenience becomes something neither of them expected." },
    { id: "P5043081", t: "Courting Miss Lancaster (The Lancaster Family, Book 2)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 15.99, r: 3.9, rc: 241, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("97/1d/d9/69/69d91d972877f3aacd15491d/" + dbl("5043081_HERO_COURTING-MISS-LANCASTER.jpg")), I("a1/1d/d9/69/69d91da1eabe6d00111fdaf4/" + dbl("5043081_FEATURE_COURTING-MISS-LANCASTER_INTERIOR1.jpg"))],
      d: "Athena Lancaster wants a romantic suitor. Her guardian asks his closest friend to help her find one \u2014 a plan with one obvious flaw." },
    { id: "P5183500", t: "Romancing Daphne (The Lancaster Family, Book 3)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.6, rc: 178, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("07/50/27/69/69275007869d9d2aed915ea2/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.png/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.jpg")],
      d: "The quietest Lancaster sister steps into a London season she never wanted." },
    { id: "P5197705", t: "Loving Lieutenant Lancaster (The Lancaster Family, Book 4)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 16.99, r: 5, rc: 143, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("b2/23/d9/69/69d923b24ad2ea64df99c5f3/" + dbl("5197705_HERO_LOVING-LIEUTENANT-LANCASTER.jpg"))],
      d: "A soldier returns from war to a woman who remembers who he was before." },
    { id: "P5258117", t: "Charming Artemis (The Lancaster Family, Book 5)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 18.99, r: 4.4, rc: 132, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("d9/1b/d9/69/69d91bd9b9ba62fc50204cd0/" + dbl("5258117_HERO_CHARMING-ARTEMIS.jpg"))],
      d: "The last Lancaster sister and the Jonquil brother who has always exasperated her." },
    { id: "PR00001380", t: "Every Beat After", by: "Various", price: 18.99, priceHigh: 32.99, r: 3.7, rc: 27, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("c6/eb/c6/69/69c6ebc6bcb2c7b68da50814/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.png/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.jpg"), I("29/b8/ca/69/69cab829eff20acca1da5cf9/" + dbl("6087090_FEATURE_EVERY-BEAT-AFTER_PAPERBACK_INTERIOR1.jpg"))],
      d: "A new release for the reader who needs a steady hour." },
    { id: "PR00001397", t: "The Duke\u2019s Bargain", by: "Various", price: 18.99, priceHigh: 32.99, r: 4.9, rc: 31, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("4f/eb/cb/69/69cbeb4f1697b5a856e37127/PR00001397_HERO_THE-DUKES-BARGAIN.png/PR00001397_HERO_THE-DUKES-BARGAIN.jpg")],
      d: "A bargain struck in good faith, and the season that tests it." }
];
const CTA = (bg) => ({
  href: '#plans', variant: 'primary', size: 'lg',
  style: { background: bg, borderColor: bg, whiteSpace: 'nowrap', minWidth: 'min(320px, 100%)' }
});

const TIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$12.99/month', monthly: 12.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$129/year', monthly: 12.99, yearlyTotal: 129
  }
];
/* Platinum members see the Platinum price; everything else on the page stays the same. */
const PTIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$9.99/month', monthly: 9.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$99/year', monthly: 9.99, yearlyTotal: 99
  }
];

class Component extends DCLogic {
  state = { faq: null };

  renderVals() {

    const { suOpenFn, ...suBase } = window.BspSignup.vals(this, this.props.member ? PTIERS : TIERS);
    const suVals = { ...suBase,
      heroCtaProps: { ...CTA('var(--scheme-300)'), onClick: suOpenFn },
      signupCtaProps: { ...CTA('var(--db-accent-deep)'), onClick: suOpenFn }
    };
    const faq = {};
    ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'].forEach(k => {
      const isOpen = this.state.faq === k;
      faq[k + 'Open'] = isOpen;
      faq[k + 'Sign'] = isOpen ? '\u2212' : '+';
      faq[k + 'Toggle'] = () => this.setState(s => ({ faq: s.faq === k ? null : k }));
    });


    const byId = id => P.find(p => p.id === id);
    const launchIds = ['PR00001380','PR00001397','6095538','P5258117','P5197705','P5183500','P5043081','P5068623','6073624','P3941679'];
    const launches = launchIds.map(id => (window.D && window.D.byId && window.D.byId(id)) || byId(id)).filter(Boolean).map(p => ({ p: p, t: p.t, by: p.by, href: '#/p/' + p.id, coverStyle: { display: 'block', width: '100%', aspectRatio: '3 / 4', borderRadius: 'var(--db-radius-sm)', backgroundImage: 'url(' + p.img[0] + ')', backgroundSize: 'contain', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat' } }));
    return {
      ...faq,
      launches,
      ...suVals,
      tiers: (this.props.member ? PTIERS : TIERS).map(t => {
        const money = v => '$' + v.toFixed(2).replace(/\.00$/, '');
        let compare = '', save = '', annual = '';
        if (t.term === 'monthly') {
          annual = money(t.monthly * 12) + '/year total';
        } else if (t.term === 'yearly') {
          compare = money(t.monthly * 12) + '/year';
          save = 'Save ' + money(t.monthly * 12 - t.yearlyTotal);
        }
        /* Platinum members: the card's one meta line shows the regular price struck through and "Platinum price", so the card keeps its size. */
        if (this.props.member) {
          const reg = TIERS.find(x => x.key === t.key);
          compare = reg ? money(t.term === 'yearly' ? reg.yearlyTotal : reg.monthly) : '';
          /* The full sentence where the card is wide enough to keep it on one line; "Platinum price" where it isn't (css/bookshelf-pages.css). */
          const off = reg ? money(t.term === 'yearly' ? reg.yearlyTotal - t.yearlyTotal : reg.monthly - t.monthly) : '';
          save = React.createElement(React.Fragment, null,
            React.createElement('span', { className: 'bsp-plat-long' }, 'Save ' + off + (t.term === 'yearly' ? ' a year' : ' a month') + ' with Platinum'),
            React.createElement('span', { className: 'bsp-plat-short' }, 'Platinum price'));
          annual = '';
        }
        const price = t.price;
        const slash = price.indexOf('/');
        const accent = 'var(--db-accent-deep)';
        const hairline = 'var(--db-dove)';
        return {
          name: t.name,
          nameColor: accent,
          cardProps: {
            ground: 'white',
            padding: 'none',
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(18px, 3vw, 28px)'
            }
          },
          amount: slash === -1 ? price : price.slice(0, slash),
          unit: slash === -1 ? '' : price.slice(slash),
          unitSize: '16px',
          amountSize: '38px',
          rowWhite: t.term ? 'nowrap' : 'normal',
          rowMargin: t.term ? 'clamp(6px, 1.8vw, 20px) -16px 0' : 'clamp(6px, 1.8vw, 20px) 0 0',
          compare,
          save,
          annual,
          badge: t.badge,
          hasMeta: !!(compare || save || annual)
        };
      }),

    };
  }
}

function TPL(s){return F(h("div",{style:S("font-family: var(--font-text); color: var(--label-primary); background: var(--bg-primary);")},h("section",{"data-hero-banner":"",style:S("position: relative; width: 100%; padding: clamp(20px, 3vw, 44px) 20px 40px; background-color: var(--db-granite); background-image: url('assets/bookshelf/Bookshelf-General-Mobile-Hero-2.png'); background-size: cover; background-position: center; background-repeat: no-repeat;")},h("div",{style:S("display: flex; justify-content: center;")},h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: clamp(10px, 1.6vw, 22px); max-width: 900px; padding: clamp(16px, 2.4vw, 34px) clamp(20px, 3.5vw, 56px); box-sizing: border-box; background: rgba(15,128,121,0.9); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border-radius: var(--db-radius-lg); text-align: center;"),"data-hero-stack":""},h("div",{style:S("display: flex; align-items: center; justify-content: center; margin-bottom: clamp(-14px, -1.2vw, -4px);")},h("svg",{"viewBox":"0 0 768 132",style:S("display: block; width: clamp(165px, 20vw, 320px); height: auto; color: rgb(255,255,255);"),"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","role":"img","aria-hidden":"true","focusable":"false"},h("path",{"d":"M89.8203 0C120.176 6.6602e-05 145.016 24.8399 145.016 55.1992V73.2344H150.742C158.375 73.5078 165.734 76.5078 171.184 81.9609C176.637 87.4101 179.637 94.7696 179.637 102.676C179.637 110.309 176.637 117.941 171.184 123.391C165.734 128.844 158.375 131.844 150.469 131.844H136.828C132.242 131.844 128.523 128.125 128.523 123.543V55.5664C128.523 34.2774 111.105 16.8594 89.8203 16.8594C68.5273 16.8594 51.1094 34.2773 51.1094 55.5664V123.543C51.1094 128.125 47.3945 131.844 42.8086 131.844H29.168C21.2617 131.844 13.9023 128.844 8.44922 123.391C3 117.941 0 110.309 0 102.676C0 94.7695 3 87.4102 8.44922 81.9609C13.9023 76.5079 21.2617 73.5078 28.8945 73.2344H34.6172V55.1992C34.6172 24.8398 59.457 0 89.8203 0ZM28.8945 90.6836C25.625 90.6836 22.625 91.7735 20.1719 94.2266C17.9922 96.4062 16.6289 99.6758 16.6289 102.949C16.6289 106.219 17.7188 109.219 20.1719 111.672C22.3516 113.852 25.625 115.215 28.8945 115.215H32.0352C33.4609 115.215 34.6172 114.059 34.6172 112.633V93.2656C34.6172 91.8399 33.4609 90.6837 32.0352 90.6836H28.8945ZM147.602 90.6836C146.176 90.6836 145.016 91.8398 145.016 93.2656V112.633C145.016 114.059 146.176 115.215 147.602 115.215H150.742C154.012 115.215 157.285 113.852 159.465 111.672C161.918 109.219 163.008 106.219 163.008 102.949C163.008 99.6758 161.645 96.4062 159.465 94.2266C157.012 91.7735 154.012 90.6836 150.742 90.6836H147.602Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M244.535 52.1562C245.914 52.1563 247.031 53.2735 247.031 54.6562V76.6406C247.031 78.7344 249.441 79.8867 251.082 78.5898C251.922 77.9258 252.82 77.3164 253.781 76.7578C256.539 75.1641 259.949 74.3633 264.016 74.3633C269.023 74.3633 273.504 75.6133 277.461 78.1211C281.414 80.625 284.555 84.0352 286.879 88.3516C289.199 92.6719 290.359 97.625 290.359 103.211C290.359 108.656 289.199 113.555 286.879 117.91C284.555 122.262 281.434 125.676 277.516 128.141C273.598 130.605 269.133 131.844 264.125 131.844C261.438 131.844 259.027 131.516 256.887 130.863C254.746 130.211 252.855 129.285 251.227 128.086C250.758 127.742 250.305 127.387 249.875 127.016C248.488 125.82 246.34 126.453 245.84 128.215L245.695 128.719C245.395 129.793 244.41 130.535 243.293 130.535H233.203C231.824 130.535 230.703 129.418 230.703 128.039V54.6562C230.703 53.2734 231.824 52.1562 233.203 52.1562H244.535ZM260.098 88.625C257.41 88.625 255.035 89.2618 252.965 90.5312C250.898 91.8008 249.281 93.5078 248.121 95.6445C246.961 97.7891 246.383 100.309 246.383 103.211C246.383 105.973 246.961 108.457 248.121 110.668C249.281 112.883 250.898 114.59 252.965 115.785C255.035 116.984 257.41 117.582 260.098 117.582C262.711 117.582 265.051 116.965 267.117 115.73C269.187 114.5 270.801 112.809 271.961 110.668C273.125 108.527 273.703 106.043 273.703 103.211C273.703 100.383 273.125 97.8594 271.961 95.6445C270.801 93.4336 269.187 91.7109 267.117 90.4766C265.051 89.2422 262.711 88.625 260.098 88.625Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M323.781 74.3633C329.152 74.3633 333.941 75.5977 338.152 78.0664C342.359 80.5312 345.699 83.9258 348.168 88.2422C350.633 92.5625 351.867 97.5156 351.867 103.105C351.867 108.691 350.633 113.645 348.168 117.961C345.699 122.281 342.359 125.676 338.152 128.141C333.941 130.609 329.152 131.844 323.781 131.844C318.484 131.844 313.73 130.609 309.52 128.141C305.309 125.676 301.973 122.281 299.504 117.961C297.035 113.645 295.801 108.73 295.801 103.211C295.801 97.5508 297.035 92.5625 299.504 88.2422C301.973 83.9258 305.328 80.5312 309.574 78.0664C313.82 75.5977 318.555 74.3633 323.781 74.3633ZM323.891 88.5156C321.715 88.5156 319.77 89.0586 318.066 90.1484C316.359 91.2383 315 92.8711 313.984 95.0469C312.965 97.2266 312.461 99.9102 312.461 103.105C312.461 106.297 312.965 108.98 313.984 111.16C315 113.336 316.359 114.969 318.066 116.059C319.77 117.148 321.676 117.691 323.781 117.691C325.957 117.691 327.898 117.148 329.605 116.059C331.309 114.969 332.672 113.336 333.688 111.16C334.703 108.98 335.211 106.297 335.211 103.105C335.211 99.9102 334.703 97.2266 333.688 95.0469C332.672 92.8711 331.328 91.2383 329.66 90.1484C327.988 89.0586 326.066 88.5156 323.891 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M385.289 74.3633C390.656 74.3633 395.445 75.5977 399.656 78.0664C403.867 80.5312 407.203 83.9258 409.672 88.2422C412.137 92.5625 413.375 97.5156 413.375 103.105C413.375 108.691 412.137 113.645 409.672 117.961C407.203 122.281 403.867 125.676 399.656 128.141C395.445 130.609 390.656 131.844 385.289 131.844C379.988 131.844 375.234 130.609 371.027 128.141C366.816 125.676 363.477 122.281 361.012 117.961C358.543 113.645 357.309 108.73 357.309 103.211C357.309 97.5508 358.543 92.5625 361.012 88.2422C363.477 83.9258 366.836 80.5312 371.082 78.0664C375.324 75.5977 380.063 74.3633 385.289 74.3633ZM385.395 88.5156C383.219 88.5156 381.273 89.0586 379.574 90.1484C377.867 91.2383 376.504 92.8711 375.492 95.0469C374.473 97.2266 373.965 99.9102 373.965 103.105C373.965 106.297 374.473 108.98 375.492 111.16C376.504 113.336 377.867 114.969 379.574 116.059C381.273 117.148 383.18 117.691 385.289 117.691C387.465 117.691 389.406 117.148 391.113 116.059C392.816 114.969 394.176 113.336 395.195 111.16C396.211 108.98 396.719 106.297 396.719 103.105C396.719 99.9102 396.211 97.2266 395.195 95.0469C394.176 92.8711 392.832 91.2383 391.164 90.1484C389.496 89.0586 387.574 88.5156 385.395 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M499.375 74.3633C506.266 74.3633 511.676 75.8867 515.594 78.9336C518.66 81.3203 520.75 84.3516 521.859 88.0273C522.344 89.625 521.125 91.2382 519.457 91.2383H508.938C508.012 91.2383 507.215 90.6914 506.727 89.9023C506.227 89.086 505.52 88.4258 504.598 87.918C503.219 87.1563 501.477 86.7734 499.375 86.7734C496.98 86.7734 495.164 87.1719 493.93 87.9727C492.695 88.7695 492.082 89.8242 492.082 91.1289C492.082 92 492.496 92.7812 493.332 93.4688C494.164 94.1601 495.383 94.7578 496.98 95.2656C498.574 95.7734 500.535 96.2813 502.855 96.7891C507.285 97.7344 511.113 98.75 514.344 99.8359C517.57 100.926 520.094 102.504 521.91 104.574C523.723 106.641 524.594 109.633 524.52 113.555C524.594 117.109 523.668 120.266 521.746 123.027C519.82 125.785 517.082 127.941 513.527 129.504C509.969 131.062 505.723 131.844 500.789 131.844C495.637 131.844 491.191 131.027 487.453 129.395C483.715 127.762 480.773 125.527 478.637 122.699C477.145 120.727 476.102 118.578 475.508 116.254C475.102 114.668 476.301 113.117 477.938 113.117H489.426C490.437 113.117 491.316 113.746 491.727 114.672C492.008 115.301 492.359 115.891 492.789 116.438C493.551 117.418 494.602 118.18 495.945 118.723C497.285 119.27 498.793 119.543 500.465 119.543C502.273 119.543 503.746 119.305 504.871 118.832C505.996 118.363 506.848 117.727 507.43 116.93C508.008 116.133 508.301 115.297 508.301 114.426C508.301 113.047 507.883 111.996 507.047 111.266C506.215 110.543 504.996 109.945 503.402 109.473C501.805 109 499.883 108.547 497.633 108.109C495.02 107.531 492.426 106.859 489.848 106.098C487.273 105.336 484.984 104.375 482.988 103.211C480.992 102.051 479.398 100.543 478.203 98.6953C477.004 96.8438 476.402 94.5781 476.402 91.8906C476.402 88.625 477.309 85.668 479.125 83.0156C480.938 80.3711 483.551 78.2656 486.965 76.7031C490.375 75.1445 494.512 74.3633 499.375 74.3633Z"}),h("path",{"d":"M621.297 74.3633C626.812 74.3633 631.641 75.5625 635.777 77.957C639.914 80.3516 643.16 83.6016 645.52 87.6992C647.879 91.8008 649.059 96.5352 649.059 101.906C649.059 102.633 649.039 103.449 649.004 104.355C648.996 104.504 648.988 104.652 648.98 104.801C648.902 106.113 647.793 107.133 646.477 107.133H611.957C610.316 107.133 609.07 108.699 609.539 110.273C609.754 111 610.027 111.695 610.355 112.355C611.336 114.316 612.754 115.84 614.602 116.93C616.453 118.016 618.648 118.562 621.188 118.562C623.582 118.562 625.559 118.07 627.121 117.094C628.324 116.336 629.324 115.418 630.117 114.34C630.582 113.707 631.324 113.336 632.109 113.336H643.801C645.637 113.336 646.852 115.25 646.07 116.91C645.082 119.004 643.793 120.949 642.199 122.754C639.73 125.547 636.719 127.762 633.164 129.395C629.606 131.027 625.687 131.844 621.406 131.844C615.746 131.844 610.773 130.664 606.492 128.305C602.211 125.945 598.852 122.645 596.422 118.398C593.992 114.152 592.773 109.273 592.773 103.758C592.773 98.0938 593.973 93.0508 596.367 88.625C598.766 84.1992 602.102 80.7148 606.383 78.1758C610.664 75.6329 615.637 74.3633 621.297 74.3633ZM621.406 87.5352C619.086 87.5352 616.977 88.0821 615.094 89.168C613.203 90.2578 611.699 91.8906 610.574 94.0664C610.57 94.0781 610.562 94.0898 610.559 94.0977C609.723 95.7266 610.992 97.6602 612.824 97.6602H629.414C631.129 97.6601 632.352 95.9609 631.781 94.3398C631.234 92.7774 630.336 91.4336 629.082 90.3125C627.012 88.461 624.453 87.5352 621.406 87.5352Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M107.336 44.9297C108.223 44.754 109.078 45.3399 109.246 46.2266L124.461 127.805C124.625 128.684 124.051 129.527 123.172 129.699L113.824 131.527C112.938 131.699 112.082 131.117 111.914 130.23L96.7031 48.6523C96.5391 47.7734 97.1133 46.9297 97.9883 46.7578L107.336 44.9297Z"}),h("path",{"d":"M69.0664 45.1602C69.9648 45.1602 70.6914 45.8868 70.6914 46.7852V129.672C70.6914 130.57 69.9648 131.297 69.0664 131.297H60.8789C59.9805 131.297 59.2539 130.57 59.2539 129.672V46.7852C59.2539 45.8867 59.9805 45.1602 60.8789 45.1602H69.0664Z"}),h("path",{"d":"M91.6914 30.7109C92.5859 30.711 93.3164 31.4414 93.3164 32.3398V129.672C93.3164 130.57 92.5859 131.297 91.6914 131.297H77.9648C77.0703 131.297 76.3398 130.57 76.3398 129.672V32.3398C76.3398 31.4414 77.0703 30.7109 77.9648 30.7109H91.6914Z"}),h("path",{"d":"M434.277 52.1562C435.66 52.1563 436.777 53.2735 436.777 54.6562V90.4922C436.777 92.8477 439.734 93.8945 441.215 92.0664L453.773 76.5938C454.246 76.0079 454.957 75.668 455.711 75.668H468.375C470.508 75.6681 471.66 78.168 470.277 79.7891L453.609 99.3359C452.816 100.266 452.812 101.637 453.605 102.57L473.793 126.422C475.168 128.047 474.016 130.535 471.887 130.535H458.273C457.488 130.535 456.746 130.168 456.277 129.543L441.273 109.633C439.828 107.715 436.777 108.738 436.777 111.137V128.039C436.777 129.418 435.66 130.535 434.277 130.535H422.949C421.566 130.535 420.449 129.418 420.449 128.039V54.6562C420.449 53.2734 421.566 52.1562 422.949 52.1562H434.277Z"}),h("path",{"d":"M545.102 52.1562C546.48 52.1563 547.598 53.2735 547.598 54.6562V76.9805C547.598 79.082 550.035 80.2461 551.664 78.9141C552.586 78.1602 553.59 77.4765 554.676 76.8672C557.648 75.1993 561.133 74.3633 565.125 74.3633C569.769 74.3633 573.652 75.3438 576.773 77.3047C579.894 79.2617 582.254 82.1133 583.848 85.8477C585.445 89.5859 586.246 94.1055 586.246 99.4023V128.035C586.246 129.418 585.125 130.535 583.746 130.535H572.523C571.145 130.535 570.023 129.418 570.023 128.035V100.926C570.023 96.8633 569.172 93.7031 567.465 91.4531C565.758 89.2071 563.059 88.0781 559.355 88.0781C557.18 88.0781 555.18 88.625 553.371 89.7148C551.555 90.8008 550.137 92.3438 549.121 94.3398C548.105 96.3359 547.598 98.7148 547.598 101.469V128.035C547.598 129.418 546.48 130.535 545.102 130.535H533.77C532.387 130.535 531.27 129.418 531.27 128.035V54.6562C531.27 53.2734 532.387 52.1562 533.77 52.1562H545.102Z"}),h("path",{"d":"M669.418 52.1562C670.801 52.1563 671.918 53.2735 671.918 54.6562V128.039C671.918 129.418 670.801 130.535 669.418 130.535H658.086C656.707 130.535 655.59 129.418 655.59 128.039V54.6562C655.59 53.2734 656.707 52.1562 658.086 52.1562H669.418Z"}),h("path",{"d":"M707.305 52.1562C708.684 52.1563 709.801 53.2735 709.801 54.6562V63.4844C709.801 64.8632 708.684 65.9804 707.305 65.9805H705.449C703.199 65.9805 701.602 66.418 700.656 67.2891C699.715 68.1602 699.242 69.6484 699.242 71.75V73.1719C699.242 74.5508 700.363 75.668 701.742 75.668H708.066C709.445 75.668 710.566 76.7891 710.566 78.168V86.7773C710.566 88.1601 709.445 89.2773 708.066 89.2773H701.742C700.363 89.2773 699.242 90.3984 699.242 91.7773V128.039C699.242 129.418 698.125 130.535 696.746 130.535H685.414C684.031 130.535 682.914 129.418 682.914 128.039V91.7773C682.914 90.3985 681.793 89.2774 680.414 89.2773H678.227C676.848 89.2773 675.73 88.1602 675.73 86.7773V78.168C675.73 76.7891 676.848 75.668 678.227 75.668H680.414C681.793 75.6679 682.914 74.5507 682.914 73.1719V71.75C682.914 66.9609 683.746 63.1328 685.418 60.2656C687.086 57.3985 689.426 55.332 692.441 54.0586C695.449 52.793 698.914 52.1562 702.836 52.1562H707.305Z"}),h("path",{"d":"M746.742 74.3633C747.934 74.3633 748.898 75.3282 748.898 76.5195V90.4766C748.898 91.668 749.863 92.6328 751.055 92.6328H765.012C766.203 92.6329 767.168 93.6016 767.168 94.793V105.004C767.168 106.195 766.203 107.164 765.012 107.164H751.055C749.863 107.164 748.898 108.129 748.898 109.32V123.277C748.898 124.469 747.934 125.434 746.742 125.434H736.527C735.336 125.434 734.371 124.469 734.371 123.277V109.32C734.371 108.129 733.402 107.164 732.215 107.164H718.258C717.062 107.164 716.098 106.195 716.098 105.004V94.793C716.098 93.6016 717.062 92.6328 718.258 92.6328H732.215C733.402 92.6327 734.371 91.6679 734.371 90.4766V76.5195C734.371 75.3281 735.336 74.3633 736.527 74.3633H746.742Z"}))),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px, 3.8vw, 60px); line-height: 1.12; letter-spacing: -1px; color: rgb(255,255,255);")},"4000+ ",h("br",{"data-hero-br-m":"",style:S("display:none")}),"Gospel & Clean ",h("br",{"data-hero-br-d":""}),h("br",{"data-hero-br-m":"",style:S("display:none")}),"Fiction books ",h("br",{"data-hero-br-m":"",style:S("display:none")}),"on your phone"),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(14px, 1.6vw, 26px); line-height: 1.3; color: var(--db-dove);")},"Starting at "+(s.member?"$9.99":"$12.99")+"/month."),h("div",{"data-hero-cta":"","data-cta":"",style:S("display: none; justify-content: center; width: 100%; margin-top: 16px;")},h(C("Button"),Object.assign({},V(s,"heroCtaProps"),{}),"Start 14-day free trial"))))),h("section",{"id":"plans",style:S("padding: clamp(24px, 5vw, 40px) clamp(12px, 4vw, 20px) clamp(24px, 4vw, 40px); background-color: rgb(255,255,255)")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(14px, 3vw, 32px);")},(A(V(s,"tiers")).map((it,i)=>((s)=>F({key:i},h(C("Card"),Object.assign({},V(s,"t.cardProps"),{}),h("span",{style:S("display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;")},h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); line-height: 1.5; text-transform: uppercase; text-align: center; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.name")),((V(s,"t.badge"))?F(h("span",{style:S("padding: 4px 12px; border-radius: var(--db-radius-pill); background: var(--db-orange-100); color: var(--scheme-500); font-family: var(--db-font-sans); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;")},V(s,"t.badge"))):null)),h("span",{style:S("display: flex; align-items: baseline; justify-content: center; gap: 4px; margin: "+T(V(s,"t.rowMargin"))+"; white-space: "+T(V(s,"t.rowWhite"))+";")},h("span",{style:S("font-family: var(--db-font-serif); font-size: "+T(V(s,"t.amountSize"))+"; font-weight: var(--db-weight-serif-regular); line-height: 1.2; text-align: center; text-wrap: pretty; color: var(--db-display);")},V(s,"t.amount")),((V(s,"t.unit"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: "+T(V(s,"t.unitSize"))+"; white-space: nowrap; color: var(--db-ink-muted);")},V(s,"t.unit"))):null)),((V(s,"t.hasMeta"))?F(h("span",{style:S("display: flex; align-items: baseline; justify-content: center; flex-wrap: wrap; gap: 4px 10px; margin-top: var(--db-space-3);")},((V(s,"t.compare"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; text-decoration: line-through; color: var(--db-ink-muted);")},V(s,"t.compare"))):null),((V(s,"t.save"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); text-transform: uppercase; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.save"))):null),((V(s,"t.annual"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; color: var(--db-ink-muted);")},V(s,"t.annual"))):null))):null))))(Object.assign({},s,{"t":it}))))),h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: clamp(24px, 3.5vw, 36px);")},h("div",{"data-cta-teal":"",style:S("display: flex; justify-content: center; width: 100%;")},h(C("Button"),Object.assign({},V(s,"signupCtaProps"),{}),"Sign up today")),h("p",{style:S("margin: 0; text-align: center; font-family: var(--db-font-sans); font-size: 13px; line-height: 1.4; color: var(--db-ink-muted);")},"Cancel any time.")),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: clamp(32px, 5vw, 56px) 0 0;")},h("h1",{style:S("margin: 0 0 48px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.2; letter-spacing: 0; color: var(--db-display); text-wrap: balance;")},"You'll Get Exclusive Access To"),h("ul",{"data-perks-grid":"",style:S("list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 40px 32px; margin: 0; padding: 0; justify-content: center;")},h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_UnlimitedListening.jpg","alt":"Unlimited Listening",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Unlimited Listening")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_Wholesome.jpg","alt":"Guaranteed Clean Content",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Guaranteed Clean Content")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/ebooks-square-03.jpg","alt":"4,000+ Audiobooks & eBooks",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"4,000+ Audiobooks & eBooks")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_ExclusiveContent.jpg","alt":"Exclusive Podcasts",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Exclusive Podcasts")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_NewAudiobooks.jpg","alt":"New Audiobooks on Release Day",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"New Audiobooks on Release Day")))))),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: 0 20px 64px;")},h("h2",{style:S("margin: 0 0 32px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.2; color: var(--db-display); text-wrap: balance;")},"Latest Launches"),h("div",{className:"grid",style:{padding:0},"data-launch-grid":""},A(V(s,"launches")).map((it)=>h(window.ProductCard,{key:it.p.id,p:it.p,lite:true,onOpen:(id)=>{location.hash="#/p/"+id;},onAdd:(p)=>{window.__dbAdd&&window.__dbAdd(p);}})))),h("section",{style:S("background: var(--db-dove); padding: 40px 20px 64px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 56px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.2vw, 44px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"What People are Saying"),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 44px;")},h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“We’ve listened to dozens of books for the price of three hard copies.”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I’m a busy mom…This app makes reading so much easier for me!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I love the variety of books found here!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review"))))),h("section",{style:S("background: var(--db-dove); padding: 56px 20px 72px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 30px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.4vw, 46px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"Frequently Asked Questions"),h(C("Accordion"),{className:"bsp-faq",items:[{title:"What is Bookshelf+?",content:h("p",{style:S("margin: 0;")},h("strong",{style:S("color: var(--db-charcoal);")},"Bookshelf+ is a digital subscription that gives you unlimited access to Deseret Book's entire digital audiobook library—"),"including books from gospel leaders, a full library of clean and compelling fiction, inspiring audiobooks, exclusive podcasts, and more. It's like having an uplifting library in your pocket, wherever you go.")},{title:"Is there a free trial?",content:h("p",{style:S("margin: 0;")},"Yes! You get 7 days to try Bookshelf+ risk-free. Just sign up, and you won't be charged if you cancel before the 7-day trial ends. No commitment, no fees. One free trial per customer.")},{title:"Where can I use Bookshelf+?",content:h("p",{style:S("margin: 0;")},"Anywhere, anytime. Just download the ",h("strong",{style:S("color: var(--db-charcoal);")},"Deseret Bookshelf app")," from the ",h("a",{"href":"https://apps.apple.com/us/app/deseret-bookshelf-lds-books/id428709147"},"App Store")," or ",h("a",{"href":"https://play.google.com/store/apps/details?id=com.deseretdigital.bookshelf&hl=en_US"},"Google Play")," and log in to access your subscription on your phone or tablet.",h("br",{}),"Prefer desktop? You can also read and listen at ",h("strong",{},h("a",{"href":"https://read.deseretbook.com/"},"read.deseretbook.com"))," on any browser.")},{title:"Can I cancel anytime?",content:h("p",{style:S("margin: 0;")},"Yes, Bookshelf+ is flexible. You can cancel anytime through your account settings at DeseretBook.com.")},{title:"What happens if I cancel? Will I lose my books?",content:h("p",{style:S("margin: 0;")},"If you cancel, you'll lose access to the full Bookshelf+ library. However, any individual books you've purchased separately (a la carte) will still be accessible through the Deseret Bookshelf app.")}]}),h("h4",{style:S("margin: 26px 0 0; text-align: center; font-family: var(--font-text); font-size: 16px; font-weight: 400; color: var(--db-charcoal);")},"View Bookshelf ",h("a",{"href":"#plans",style:S("color: inherit; text-decoration: underline;")},"Terms and Conditions")))),h(window.BspSignupDialog,{s:s,V:V})));}
window.BSP_PAGES["general-v2"]=Component;
})();

/* general-platinum */
(function(){
var DCLogic=function(){};
DCLogic=class extends React.Component{render(){var v=this.renderVals?this.renderVals():{};var s=Object.assign({},this.props,v);return TPL(s);}};


const IB = "assets/img/pim/";
const I = (p) => IB + p;
const dbl = (n) => n + "/" + n;
const P = [
    { id: "6017019", t: "The Candy Shop War Complete Boxed Set", by: "Mull, Brandon", price: 15.00, r: 4.8, rc: 176, cat: "books_fiction_teen-fiction", fmt: "Paperback",
      img: [I("26/5b/21/66/66215b26b1dea3bbbe48c291/6017019_The_Candy_Shop_War_Complete_Boxed_Set.png/6017019_The_Candy_Shop_War_Complete_Boxed_Set.jpg")],
      d: "All three Candy Shop War novels in one boxed set. Clearance price, while supplies last." },
    { id: "5254477", t: "And These Words Scripture Study Journal", by: "Deseret Book", price: 6.25, r: 4.1, rc: 58, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Hardcover",
      img: [I("6a/5b/21/66/66215b6ab1dea3bbbe48c904/5254477_5254477_none_base_8d114ae9.png/5254477_5254477_none_base_8d114ae9.jpg"), I("6a/5b/21/66/66215b6ab1dea3bbbe48c902/5254477_and-these-words-lifestyle.png/5254477_and-these-words-lifestyle.jpg")],
      d: "A guided journal for daily scripture study, with prompts and room to write." },
    { id: "P3941679", t: "The Infinite Atonement", by: "Callister, Tad R.", price: 24.99, r: 5.0, rc: 91, cat: "books_gospel-voices_general-authority-books", fmt: "Hardcover",
      img: [I("71/e9/66/68/6866e971f416e9f1f400f0d4/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.png/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.jpg"), I("4e/86/c9/68/68c9864e3dbf04681524130a/3941679_FEATURE_THE-INFINITE-ATONEMENT_HARDCOVER_1.png/3941679_FEATURE_THE-INFINITE-ATONEMENT_HARDCOVER_1.jpg")],
      d: "A comprehensive, readable treatment of the Atonement of Jesus Christ." },
    { id: "6070661", t: "The Love of God (18x22 Framed Canvas Print)", by: "Deseret Book", price: 114.50, r: 3.9, rc: 24, cat: "home_fine-art", fmt: "Framed Canvas Print", size: "18\" x 22\"",
      img: [I("44/a6/cf/67/67cfa6449ab7822b03cba060/6070661_6070661_none_base_ba804e01.png/6070661_6070661_none_base_ba804e01.jpg"), I("43/a6/cf/67/67cfa6439ab7822b03cba057/6070661_6070661_none_base_f7479931.png/6070661_6070661_none_base_f7479931.jpg")],
      d: "Canvas print in a wood frame, ready to hang. Half off during clearance." },
    { id: "5255079", t: "The Old Testament, Journal Edition, Patterned Unlined", by: "Deseret Book", price: 5.00, r: 4.6, rc: 143, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Paperback",
      img: [I("26/3f/16/69/69163f26c97833c19f56bead/" + dbl("5255079_HERO_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg")), I("29/3f/16/69/69163f29b4b73250f42334e9/" + dbl("5255079_PRODGALLERY_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg"))],
      d: "Wide unlined margins for notes and sketches. No index." },
    { id: "6024672", t: "Cable Knit Blessing Blanket", by: "Deseret Book", price: 6.25, r: 4.3, rc: 67, cat: "baptism", fmt: "Knit Cotton",
      img: [I("aa/70/21/66/662170aa4d8f8419f6bef5d6/6024672_6024672_none_base_42b715b0.png/6024672_6024672_none_base_42b715b0.jpg")],
      d: "A soft cable-knit blanket for a blessing day keepsake." },
    { id: "6095538", t: "Seeking Persephone (Movie Tie-in Edition)", by: "Eden, Sarah M.", price: 18.99, r: 4.8, rc: 214, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("63/79/6b/6a/6a6b7963aecf6cfadd773d25/" + dbl("6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg")), I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg"))],
      d: "The movie tie-in edition of Sarah M. Eden\u2019s beloved Regency romance. Persephone Lancaster marries a stranger to save her family \u2014 and finds a quiet, guarded man who needs her more than he knows." },
    { id: "P5068623", t: "Seeking Persephone (The Lancaster Family, Book 1)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 17.99, r: 4.2, rc: 386, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg")), I("fe/21/d9/69/69d921fe778e76271e56f640/" + dbl("5068623_FEATURE_SEEKING-PERSEPHONE_INTERIOR1.jpg"))],
      d: "Book one of the Lancaster Family series. A marriage of convenience becomes something neither of them expected." },
    { id: "P5043081", t: "Courting Miss Lancaster (The Lancaster Family, Book 2)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 15.99, r: 3.9, rc: 241, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("97/1d/d9/69/69d91d972877f3aacd15491d/" + dbl("5043081_HERO_COURTING-MISS-LANCASTER.jpg")), I("a1/1d/d9/69/69d91da1eabe6d00111fdaf4/" + dbl("5043081_FEATURE_COURTING-MISS-LANCASTER_INTERIOR1.jpg"))],
      d: "Athena Lancaster wants a romantic suitor. Her guardian asks his closest friend to help her find one \u2014 a plan with one obvious flaw." },
    { id: "P5183500", t: "Romancing Daphne (The Lancaster Family, Book 3)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.6, rc: 178, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("07/50/27/69/69275007869d9d2aed915ea2/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.png/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.jpg")],
      d: "The quietest Lancaster sister steps into a London season she never wanted." },
    { id: "P5197705", t: "Loving Lieutenant Lancaster (The Lancaster Family, Book 4)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 16.99, r: 5, rc: 143, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("b2/23/d9/69/69d923b24ad2ea64df99c5f3/" + dbl("5197705_HERO_LOVING-LIEUTENANT-LANCASTER.jpg"))],
      d: "A soldier returns from war to a woman who remembers who he was before." },
    { id: "P5258117", t: "Charming Artemis (The Lancaster Family, Book 5)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 18.99, r: 4.4, rc: 132, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("d9/1b/d9/69/69d91bd9b9ba62fc50204cd0/" + dbl("5258117_HERO_CHARMING-ARTEMIS.jpg"))],
      d: "The last Lancaster sister and the Jonquil brother who has always exasperated her." },
    { id: "PR00001380", t: "Every Beat After", by: "Various", price: 18.99, priceHigh: 32.99, r: 3.7, rc: 27, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("c6/eb/c6/69/69c6ebc6bcb2c7b68da50814/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.png/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.jpg"), I("29/b8/ca/69/69cab829eff20acca1da5cf9/" + dbl("6087090_FEATURE_EVERY-BEAT-AFTER_PAPERBACK_INTERIOR1.jpg"))],
      d: "A new release for the reader who needs a steady hour." },
    { id: "PR00001397", t: "The Duke\u2019s Bargain", by: "Various", price: 18.99, priceHigh: 32.99, r: 4.9, rc: 31, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("4f/eb/cb/69/69cbeb4f1697b5a856e37127/PR00001397_HERO_THE-DUKES-BARGAIN.png/PR00001397_HERO_THE-DUKES-BARGAIN.jpg")],
      d: "A bargain struck in good faith, and the season that tests it." }
];
const CTA = (bg) => ({
  href: '#plans', variant: 'primary', size: 'lg',
  style: { background: bg, borderColor: bg, whiteSpace: 'nowrap', minWidth: 'min(320px, 100%)' }
});

const TIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$9.99/month', monthly: 9.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$99/year', monthly: 9.99, yearlyTotal: 99
  }
];

class Component extends DCLogic {
  state = { faq: null };

  renderVals() {

    const { suOpenFn, ...suBase } = window.BspSignup.vals(this, TIERS);
    const suVals = { ...suBase,
      heroCtaProps: { ...CTA('var(--scheme-300)'), onClick: suOpenFn },
      signupCtaProps: { ...CTA('var(--db-accent-deep)'), onClick: suOpenFn }
    };
    const faq = {};
    ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'].forEach(k => {
      const isOpen = this.state.faq === k;
      faq[k + 'Open'] = isOpen;
      faq[k + 'Sign'] = isOpen ? '\u2212' : '+';
      faq[k + 'Toggle'] = () => this.setState(s => ({ faq: s.faq === k ? null : k }));
    });


    const byId = id => P.find(p => p.id === id);
    const launchIds = ['PR00001380','PR00001397','6095538','P5258117','P5197705','P5183500','P5043081','P5068623','6073624','P3941679'];
    const launches = launchIds.map(id => (window.D && window.D.byId && window.D.byId(id)) || byId(id)).filter(Boolean).map(p => ({ p: p, t: p.t, by: p.by, href: '#/p/' + p.id, coverStyle: { display: 'block', width: '100%', aspectRatio: '3 / 4', borderRadius: 'var(--db-radius-sm)', backgroundImage: 'url(' + p.img[0] + ')', backgroundSize: 'contain', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat' } }));
    return {
      ...faq,
      launches,
      ...suVals,
      tiers: TIERS.map(t => {
        const money = v => '$' + v.toFixed(2).replace(/\.00$/, '');
        let compare = '', save = '', annual = '';
        if (t.term === 'monthly') {
          annual = money(t.monthly * 12) + '/year total';
        } else if (t.term === 'yearly') {
          compare = money(t.monthly * 12) + '/year';
          save = 'Save ' + money(t.monthly * 12 - t.yearlyTotal);
        }
        const price = t.price;
        const slash = price.indexOf('/');
        const accent = 'var(--db-accent-deep)';
        const hairline = 'var(--db-dove)';
        return {
          name: t.name,
          nameColor: accent,
          cardProps: {
            ground: 'white',
            padding: 'none',
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(18px, 3vw, 28px)'
            }
          },
          amount: slash === -1 ? price : price.slice(0, slash),
          unit: slash === -1 ? '' : price.slice(slash),
          unitSize: '16px',
          amountSize: '38px',
          rowWhite: t.term ? 'nowrap' : 'normal',
          rowMargin: t.term ? 'clamp(6px, 1.8vw, 20px) -16px 0' : 'clamp(6px, 1.8vw, 20px) 0 0',
          compare,
          save,
          annual,
          badge: t.badge,
          hasMeta: !!(compare || save || annual)
        };
      }),

    };
  }
}

function TPL(s){return F(h("div",{style:S("font-family: var(--font-text); color: var(--label-primary); background: var(--bg-primary);")},h("section",{"data-hero-banner":"",style:S("position: relative; width: 100%; padding: clamp(20px, 3vw, 44px) 20px 40px; background-color: var(--db-granite); background-image: url('assets/bookshelf/Bookshelf-General-Mobile-Hero-2.png'); background-size: cover; background-position: center; background-repeat: no-repeat;")},h("div",{style:S("display: flex; justify-content: center;")},h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: clamp(10px, 1.6vw, 22px); max-width: 900px; padding: clamp(16px, 2.4vw, 34px) clamp(20px, 3.5vw, 56px); box-sizing: border-box; background: rgba(15,128,121,0.9); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border-radius: var(--db-radius-lg); text-align: center;"),"data-hero-stack":""},h("div",{style:S("display: flex; align-items: center; justify-content: center; margin-bottom: clamp(-14px, -1.2vw, -4px);")},h("svg",{"viewBox":"0 0 768 132",style:S("display: block; width: clamp(165px, 20vw, 320px); height: auto; color: rgb(255,255,255);"),"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","role":"img","aria-hidden":"true","focusable":"false"},h("path",{"d":"M89.8203 0C120.176 6.6602e-05 145.016 24.8399 145.016 55.1992V73.2344H150.742C158.375 73.5078 165.734 76.5078 171.184 81.9609C176.637 87.4101 179.637 94.7696 179.637 102.676C179.637 110.309 176.637 117.941 171.184 123.391C165.734 128.844 158.375 131.844 150.469 131.844H136.828C132.242 131.844 128.523 128.125 128.523 123.543V55.5664C128.523 34.2774 111.105 16.8594 89.8203 16.8594C68.5273 16.8594 51.1094 34.2773 51.1094 55.5664V123.543C51.1094 128.125 47.3945 131.844 42.8086 131.844H29.168C21.2617 131.844 13.9023 128.844 8.44922 123.391C3 117.941 0 110.309 0 102.676C0 94.7695 3 87.4102 8.44922 81.9609C13.9023 76.5079 21.2617 73.5078 28.8945 73.2344H34.6172V55.1992C34.6172 24.8398 59.457 0 89.8203 0ZM28.8945 90.6836C25.625 90.6836 22.625 91.7735 20.1719 94.2266C17.9922 96.4062 16.6289 99.6758 16.6289 102.949C16.6289 106.219 17.7188 109.219 20.1719 111.672C22.3516 113.852 25.625 115.215 28.8945 115.215H32.0352C33.4609 115.215 34.6172 114.059 34.6172 112.633V93.2656C34.6172 91.8399 33.4609 90.6837 32.0352 90.6836H28.8945ZM147.602 90.6836C146.176 90.6836 145.016 91.8398 145.016 93.2656V112.633C145.016 114.059 146.176 115.215 147.602 115.215H150.742C154.012 115.215 157.285 113.852 159.465 111.672C161.918 109.219 163.008 106.219 163.008 102.949C163.008 99.6758 161.645 96.4062 159.465 94.2266C157.012 91.7735 154.012 90.6836 150.742 90.6836H147.602Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M244.535 52.1562C245.914 52.1563 247.031 53.2735 247.031 54.6562V76.6406C247.031 78.7344 249.441 79.8867 251.082 78.5898C251.922 77.9258 252.82 77.3164 253.781 76.7578C256.539 75.1641 259.949 74.3633 264.016 74.3633C269.023 74.3633 273.504 75.6133 277.461 78.1211C281.414 80.625 284.555 84.0352 286.879 88.3516C289.199 92.6719 290.359 97.625 290.359 103.211C290.359 108.656 289.199 113.555 286.879 117.91C284.555 122.262 281.434 125.676 277.516 128.141C273.598 130.605 269.133 131.844 264.125 131.844C261.438 131.844 259.027 131.516 256.887 130.863C254.746 130.211 252.855 129.285 251.227 128.086C250.758 127.742 250.305 127.387 249.875 127.016C248.488 125.82 246.34 126.453 245.84 128.215L245.695 128.719C245.395 129.793 244.41 130.535 243.293 130.535H233.203C231.824 130.535 230.703 129.418 230.703 128.039V54.6562C230.703 53.2734 231.824 52.1562 233.203 52.1562H244.535ZM260.098 88.625C257.41 88.625 255.035 89.2618 252.965 90.5312C250.898 91.8008 249.281 93.5078 248.121 95.6445C246.961 97.7891 246.383 100.309 246.383 103.211C246.383 105.973 246.961 108.457 248.121 110.668C249.281 112.883 250.898 114.59 252.965 115.785C255.035 116.984 257.41 117.582 260.098 117.582C262.711 117.582 265.051 116.965 267.117 115.73C269.187 114.5 270.801 112.809 271.961 110.668C273.125 108.527 273.703 106.043 273.703 103.211C273.703 100.383 273.125 97.8594 271.961 95.6445C270.801 93.4336 269.187 91.7109 267.117 90.4766C265.051 89.2422 262.711 88.625 260.098 88.625Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M323.781 74.3633C329.152 74.3633 333.941 75.5977 338.152 78.0664C342.359 80.5312 345.699 83.9258 348.168 88.2422C350.633 92.5625 351.867 97.5156 351.867 103.105C351.867 108.691 350.633 113.645 348.168 117.961C345.699 122.281 342.359 125.676 338.152 128.141C333.941 130.609 329.152 131.844 323.781 131.844C318.484 131.844 313.73 130.609 309.52 128.141C305.309 125.676 301.973 122.281 299.504 117.961C297.035 113.645 295.801 108.73 295.801 103.211C295.801 97.5508 297.035 92.5625 299.504 88.2422C301.973 83.9258 305.328 80.5312 309.574 78.0664C313.82 75.5977 318.555 74.3633 323.781 74.3633ZM323.891 88.5156C321.715 88.5156 319.77 89.0586 318.066 90.1484C316.359 91.2383 315 92.8711 313.984 95.0469C312.965 97.2266 312.461 99.9102 312.461 103.105C312.461 106.297 312.965 108.98 313.984 111.16C315 113.336 316.359 114.969 318.066 116.059C319.77 117.148 321.676 117.691 323.781 117.691C325.957 117.691 327.898 117.148 329.605 116.059C331.309 114.969 332.672 113.336 333.688 111.16C334.703 108.98 335.211 106.297 335.211 103.105C335.211 99.9102 334.703 97.2266 333.688 95.0469C332.672 92.8711 331.328 91.2383 329.66 90.1484C327.988 89.0586 326.066 88.5156 323.891 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M385.289 74.3633C390.656 74.3633 395.445 75.5977 399.656 78.0664C403.867 80.5312 407.203 83.9258 409.672 88.2422C412.137 92.5625 413.375 97.5156 413.375 103.105C413.375 108.691 412.137 113.645 409.672 117.961C407.203 122.281 403.867 125.676 399.656 128.141C395.445 130.609 390.656 131.844 385.289 131.844C379.988 131.844 375.234 130.609 371.027 128.141C366.816 125.676 363.477 122.281 361.012 117.961C358.543 113.645 357.309 108.73 357.309 103.211C357.309 97.5508 358.543 92.5625 361.012 88.2422C363.477 83.9258 366.836 80.5312 371.082 78.0664C375.324 75.5977 380.063 74.3633 385.289 74.3633ZM385.395 88.5156C383.219 88.5156 381.273 89.0586 379.574 90.1484C377.867 91.2383 376.504 92.8711 375.492 95.0469C374.473 97.2266 373.965 99.9102 373.965 103.105C373.965 106.297 374.473 108.98 375.492 111.16C376.504 113.336 377.867 114.969 379.574 116.059C381.273 117.148 383.18 117.691 385.289 117.691C387.465 117.691 389.406 117.148 391.113 116.059C392.816 114.969 394.176 113.336 395.195 111.16C396.211 108.98 396.719 106.297 396.719 103.105C396.719 99.9102 396.211 97.2266 395.195 95.0469C394.176 92.8711 392.832 91.2383 391.164 90.1484C389.496 89.0586 387.574 88.5156 385.395 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M499.375 74.3633C506.266 74.3633 511.676 75.8867 515.594 78.9336C518.66 81.3203 520.75 84.3516 521.859 88.0273C522.344 89.625 521.125 91.2382 519.457 91.2383H508.938C508.012 91.2383 507.215 90.6914 506.727 89.9023C506.227 89.086 505.52 88.4258 504.598 87.918C503.219 87.1563 501.477 86.7734 499.375 86.7734C496.98 86.7734 495.164 87.1719 493.93 87.9727C492.695 88.7695 492.082 89.8242 492.082 91.1289C492.082 92 492.496 92.7812 493.332 93.4688C494.164 94.1601 495.383 94.7578 496.98 95.2656C498.574 95.7734 500.535 96.2813 502.855 96.7891C507.285 97.7344 511.113 98.75 514.344 99.8359C517.57 100.926 520.094 102.504 521.91 104.574C523.723 106.641 524.594 109.633 524.52 113.555C524.594 117.109 523.668 120.266 521.746 123.027C519.82 125.785 517.082 127.941 513.527 129.504C509.969 131.062 505.723 131.844 500.789 131.844C495.637 131.844 491.191 131.027 487.453 129.395C483.715 127.762 480.773 125.527 478.637 122.699C477.145 120.727 476.102 118.578 475.508 116.254C475.102 114.668 476.301 113.117 477.938 113.117H489.426C490.437 113.117 491.316 113.746 491.727 114.672C492.008 115.301 492.359 115.891 492.789 116.438C493.551 117.418 494.602 118.18 495.945 118.723C497.285 119.27 498.793 119.543 500.465 119.543C502.273 119.543 503.746 119.305 504.871 118.832C505.996 118.363 506.848 117.727 507.43 116.93C508.008 116.133 508.301 115.297 508.301 114.426C508.301 113.047 507.883 111.996 507.047 111.266C506.215 110.543 504.996 109.945 503.402 109.473C501.805 109 499.883 108.547 497.633 108.109C495.02 107.531 492.426 106.859 489.848 106.098C487.273 105.336 484.984 104.375 482.988 103.211C480.992 102.051 479.398 100.543 478.203 98.6953C477.004 96.8438 476.402 94.5781 476.402 91.8906C476.402 88.625 477.309 85.668 479.125 83.0156C480.938 80.3711 483.551 78.2656 486.965 76.7031C490.375 75.1445 494.512 74.3633 499.375 74.3633Z"}),h("path",{"d":"M621.297 74.3633C626.812 74.3633 631.641 75.5625 635.777 77.957C639.914 80.3516 643.16 83.6016 645.52 87.6992C647.879 91.8008 649.059 96.5352 649.059 101.906C649.059 102.633 649.039 103.449 649.004 104.355C648.996 104.504 648.988 104.652 648.98 104.801C648.902 106.113 647.793 107.133 646.477 107.133H611.957C610.316 107.133 609.07 108.699 609.539 110.273C609.754 111 610.027 111.695 610.355 112.355C611.336 114.316 612.754 115.84 614.602 116.93C616.453 118.016 618.648 118.562 621.188 118.562C623.582 118.562 625.559 118.07 627.121 117.094C628.324 116.336 629.324 115.418 630.117 114.34C630.582 113.707 631.324 113.336 632.109 113.336H643.801C645.637 113.336 646.852 115.25 646.07 116.91C645.082 119.004 643.793 120.949 642.199 122.754C639.73 125.547 636.719 127.762 633.164 129.395C629.606 131.027 625.687 131.844 621.406 131.844C615.746 131.844 610.773 130.664 606.492 128.305C602.211 125.945 598.852 122.645 596.422 118.398C593.992 114.152 592.773 109.273 592.773 103.758C592.773 98.0938 593.973 93.0508 596.367 88.625C598.766 84.1992 602.102 80.7148 606.383 78.1758C610.664 75.6329 615.637 74.3633 621.297 74.3633ZM621.406 87.5352C619.086 87.5352 616.977 88.0821 615.094 89.168C613.203 90.2578 611.699 91.8906 610.574 94.0664C610.57 94.0781 610.562 94.0898 610.559 94.0977C609.723 95.7266 610.992 97.6602 612.824 97.6602H629.414C631.129 97.6601 632.352 95.9609 631.781 94.3398C631.234 92.7774 630.336 91.4336 629.082 90.3125C627.012 88.461 624.453 87.5352 621.406 87.5352Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M107.336 44.9297C108.223 44.754 109.078 45.3399 109.246 46.2266L124.461 127.805C124.625 128.684 124.051 129.527 123.172 129.699L113.824 131.527C112.938 131.699 112.082 131.117 111.914 130.23L96.7031 48.6523C96.5391 47.7734 97.1133 46.9297 97.9883 46.7578L107.336 44.9297Z"}),h("path",{"d":"M69.0664 45.1602C69.9648 45.1602 70.6914 45.8868 70.6914 46.7852V129.672C70.6914 130.57 69.9648 131.297 69.0664 131.297H60.8789C59.9805 131.297 59.2539 130.57 59.2539 129.672V46.7852C59.2539 45.8867 59.9805 45.1602 60.8789 45.1602H69.0664Z"}),h("path",{"d":"M91.6914 30.7109C92.5859 30.711 93.3164 31.4414 93.3164 32.3398V129.672C93.3164 130.57 92.5859 131.297 91.6914 131.297H77.9648C77.0703 131.297 76.3398 130.57 76.3398 129.672V32.3398C76.3398 31.4414 77.0703 30.7109 77.9648 30.7109H91.6914Z"}),h("path",{"d":"M434.277 52.1562C435.66 52.1563 436.777 53.2735 436.777 54.6562V90.4922C436.777 92.8477 439.734 93.8945 441.215 92.0664L453.773 76.5938C454.246 76.0079 454.957 75.668 455.711 75.668H468.375C470.508 75.6681 471.66 78.168 470.277 79.7891L453.609 99.3359C452.816 100.266 452.812 101.637 453.605 102.57L473.793 126.422C475.168 128.047 474.016 130.535 471.887 130.535H458.273C457.488 130.535 456.746 130.168 456.277 129.543L441.273 109.633C439.828 107.715 436.777 108.738 436.777 111.137V128.039C436.777 129.418 435.66 130.535 434.277 130.535H422.949C421.566 130.535 420.449 129.418 420.449 128.039V54.6562C420.449 53.2734 421.566 52.1562 422.949 52.1562H434.277Z"}),h("path",{"d":"M545.102 52.1562C546.48 52.1563 547.598 53.2735 547.598 54.6562V76.9805C547.598 79.082 550.035 80.2461 551.664 78.9141C552.586 78.1602 553.59 77.4765 554.676 76.8672C557.648 75.1993 561.133 74.3633 565.125 74.3633C569.769 74.3633 573.652 75.3438 576.773 77.3047C579.894 79.2617 582.254 82.1133 583.848 85.8477C585.445 89.5859 586.246 94.1055 586.246 99.4023V128.035C586.246 129.418 585.125 130.535 583.746 130.535H572.523C571.145 130.535 570.023 129.418 570.023 128.035V100.926C570.023 96.8633 569.172 93.7031 567.465 91.4531C565.758 89.2071 563.059 88.0781 559.355 88.0781C557.18 88.0781 555.18 88.625 553.371 89.7148C551.555 90.8008 550.137 92.3438 549.121 94.3398C548.105 96.3359 547.598 98.7148 547.598 101.469V128.035C547.598 129.418 546.48 130.535 545.102 130.535H533.77C532.387 130.535 531.27 129.418 531.27 128.035V54.6562C531.27 53.2734 532.387 52.1562 533.77 52.1562H545.102Z"}),h("path",{"d":"M669.418 52.1562C670.801 52.1563 671.918 53.2735 671.918 54.6562V128.039C671.918 129.418 670.801 130.535 669.418 130.535H658.086C656.707 130.535 655.59 129.418 655.59 128.039V54.6562C655.59 53.2734 656.707 52.1562 658.086 52.1562H669.418Z"}),h("path",{"d":"M707.305 52.1562C708.684 52.1563 709.801 53.2735 709.801 54.6562V63.4844C709.801 64.8632 708.684 65.9804 707.305 65.9805H705.449C703.199 65.9805 701.602 66.418 700.656 67.2891C699.715 68.1602 699.242 69.6484 699.242 71.75V73.1719C699.242 74.5508 700.363 75.668 701.742 75.668H708.066C709.445 75.668 710.566 76.7891 710.566 78.168V86.7773C710.566 88.1601 709.445 89.2773 708.066 89.2773H701.742C700.363 89.2773 699.242 90.3984 699.242 91.7773V128.039C699.242 129.418 698.125 130.535 696.746 130.535H685.414C684.031 130.535 682.914 129.418 682.914 128.039V91.7773C682.914 90.3985 681.793 89.2774 680.414 89.2773H678.227C676.848 89.2773 675.73 88.1602 675.73 86.7773V78.168C675.73 76.7891 676.848 75.668 678.227 75.668H680.414C681.793 75.6679 682.914 74.5507 682.914 73.1719V71.75C682.914 66.9609 683.746 63.1328 685.418 60.2656C687.086 57.3985 689.426 55.332 692.441 54.0586C695.449 52.793 698.914 52.1562 702.836 52.1562H707.305Z"}),h("path",{"d":"M746.742 74.3633C747.934 74.3633 748.898 75.3282 748.898 76.5195V90.4766C748.898 91.668 749.863 92.6328 751.055 92.6328H765.012C766.203 92.6329 767.168 93.6016 767.168 94.793V105.004C767.168 106.195 766.203 107.164 765.012 107.164H751.055C749.863 107.164 748.898 108.129 748.898 109.32V123.277C748.898 124.469 747.934 125.434 746.742 125.434H736.527C735.336 125.434 734.371 124.469 734.371 123.277V109.32C734.371 108.129 733.402 107.164 732.215 107.164H718.258C717.062 107.164 716.098 106.195 716.098 105.004V94.793C716.098 93.6016 717.062 92.6328 718.258 92.6328H732.215C733.402 92.6327 734.371 91.6679 734.371 90.4766V76.5195C734.371 75.3281 735.336 74.3633 736.527 74.3633H746.742Z"}))),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px, 3.8vw, 60px); line-height: 1.12; letter-spacing: -1px; color: rgb(255,255,255);")},"4000+ ",h("br",{"data-hero-br-m":"",style:S("display:none")}),"Gospel & Clean ",h("br",{"data-hero-br-d":""}),h("br",{"data-hero-br-m":"",style:S("display:none")}),"Fiction books ",h("br",{"data-hero-br-m":"",style:S("display:none")}),"on your phone"),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(14px, 1.6vw, 26px); line-height: 1.3; color: var(--db-dove);")},"Starting at $9.99/month."),h("div",{"data-hero-cta":"","data-cta":"",style:S("display: none; justify-content: center; width: 100%; margin-top: 16px;")},h(C("Button"),Object.assign({},V(s,"heroCtaProps"),{}),"Start 14-day free trial"))))),h("section",{"id":"plans",style:S("padding: clamp(24px, 5vw, 40px) clamp(12px, 4vw, 20px) clamp(24px, 4vw, 40px); background-color: rgb(255,255,255)")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(14px, 3vw, 32px);")},(A(V(s,"tiers")).map((it,i)=>((s)=>F({key:i},h(C("Card"),Object.assign({},V(s,"t.cardProps"),{}),h("span",{style:S("display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;")},h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); line-height: 1.5; text-transform: uppercase; text-align: center; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.name")),((V(s,"t.badge"))?F(h("span",{style:S("padding: 4px 12px; border-radius: var(--db-radius-pill); background: var(--db-orange-100); color: var(--scheme-500); font-family: var(--db-font-sans); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;")},V(s,"t.badge"))):null)),h("span",{style:S("display: flex; align-items: baseline; justify-content: center; gap: 4px; margin: "+T(V(s,"t.rowMargin"))+"; white-space: "+T(V(s,"t.rowWhite"))+";")},h("span",{style:S("font-family: var(--db-font-serif); font-size: "+T(V(s,"t.amountSize"))+"; font-weight: var(--db-weight-serif-regular); line-height: 1.2; text-align: center; text-wrap: pretty; color: var(--db-display);")},V(s,"t.amount")),((V(s,"t.unit"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: "+T(V(s,"t.unitSize"))+"; white-space: nowrap; color: var(--db-ink-muted);")},V(s,"t.unit"))):null)),((V(s,"t.hasMeta"))?F(h("span",{style:S("display: flex; align-items: baseline; justify-content: center; flex-wrap: wrap; gap: 4px 10px; margin-top: var(--db-space-3);")},((V(s,"t.compare"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; text-decoration: line-through; color: var(--db-ink-muted);")},V(s,"t.compare"))):null),((V(s,"t.save"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); text-transform: uppercase; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.save"))):null),((V(s,"t.annual"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; color: var(--db-ink-muted);")},V(s,"t.annual"))):null))):null))))(Object.assign({},s,{"t":it}))))),h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: clamp(24px, 3.5vw, 36px);")},h("div",{"data-cta-teal":"",style:S("display: flex; justify-content: center; width: 100%;")},h(C("Button"),Object.assign({},V(s,"signupCtaProps"),{}),"Sign up today")),h("p",{style:S("margin: 0; text-align: center; font-family: var(--db-font-sans); font-size: 13px; line-height: 1.4; color: var(--db-ink-muted);")},"Cancel any time.")),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: clamp(32px, 5vw, 56px) 0 0;")},h("h1",{style:S("margin: 0 0 48px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.2; letter-spacing: 0; color: var(--db-display); text-wrap: balance;")},"You'll Get Exclusive Access To"),h("ul",{"data-perks-grid":"",style:S("list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 40px 32px; margin: 0; padding: 0; justify-content: center;")},h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_UnlimitedListening.jpg","alt":"Unlimited Listening",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Unlimited Listening")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_Wholesome.jpg","alt":"Guaranteed Clean Content",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Guaranteed Clean Content")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/ebooks-square-03.jpg","alt":"4,000+ Audiobooks & eBooks",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"4,000+ Audiobooks & eBooks")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_ExclusiveContent.jpg","alt":"Exclusive Podcasts",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Exclusive Podcasts")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_NewAudiobooks.jpg","alt":"New Audiobooks on Release Day",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"New Audiobooks on Release Day")))))),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: 0 20px 64px;")},h("h2",{style:S("margin: 0 0 32px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.2; color: var(--db-display); text-wrap: balance;")},"Latest Launches"),h("div",{className:"grid",style:{padding:0},"data-launch-grid":""},A(V(s,"launches")).map((it)=>h(window.ProductCard,{key:it.p.id,p:it.p,lite:true,onOpen:(id)=>{location.hash="#/p/"+id;},onAdd:(p)=>{window.__dbAdd&&window.__dbAdd(p);}})))),h("section",{style:S("background: var(--db-dove); padding: 40px 20px 64px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 56px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.2vw, 44px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"What People are Saying"),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 44px;")},h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“We’ve listened to dozens of books for the price of three hard copies.”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I’m a busy mom…This app makes reading so much easier for me!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I love the variety of books found here!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review"))))),h("section",{style:S("background: var(--db-dove); padding: 56px 20px 72px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 30px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.4vw, 46px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"Frequently Asked Questions"),h(C("Accordion"),{className:"bsp-faq",items:[{title:"What is Bookshelf+?",content:h("p",{style:S("margin: 0;")},h("strong",{style:S("color: var(--db-charcoal);")},"Bookshelf+ is a digital subscription that gives you unlimited access to Deseret Book's entire digital audiobook library—"),"including books from gospel leaders, a full library of clean and compelling fiction, inspiring audiobooks, exclusive podcasts, and more. It's like having an uplifting library in your pocket, wherever you go.")},{title:"Is there a free trial?",content:h("p",{style:S("margin: 0;")},"Yes! You get 7 days to try Bookshelf+ risk-free. Just sign up, and you won't be charged if you cancel before the 7-day trial ends. No commitment, no fees. One free trial per customer.")},{title:"Where can I use Bookshelf+?",content:h("p",{style:S("margin: 0;")},"Anywhere, anytime. Just download the ",h("strong",{style:S("color: var(--db-charcoal);")},"Deseret Bookshelf app")," from the ",h("a",{"href":"https://apps.apple.com/us/app/deseret-bookshelf-lds-books/id428709147"},"App Store")," or ",h("a",{"href":"https://play.google.com/store/apps/details?id=com.deseretdigital.bookshelf&hl=en_US"},"Google Play")," and log in to access your subscription on your phone or tablet.",h("br",{}),"Prefer desktop? You can also read and listen at ",h("strong",{},h("a",{"href":"https://read.deseretbook.com/"},"read.deseretbook.com"))," on any browser.")},{title:"Can I cancel anytime?",content:h("p",{style:S("margin: 0;")},"Yes, Bookshelf+ is flexible. You can cancel anytime through your account settings at DeseretBook.com.")},{title:"What happens if I cancel? Will I lose my books?",content:h("p",{style:S("margin: 0;")},"If you cancel, you'll lose access to the full Bookshelf+ library. However, any individual books you've purchased separately (a la carte) will still be accessible through the Deseret Bookshelf app.")}]}),h("h4",{style:S("margin: 26px 0 0; text-align: center; font-family: var(--font-text); font-size: 16px; font-weight: 400; color: var(--db-charcoal);")},"View Bookshelf ",h("a",{"href":"#plans",style:S("color: inherit; text-decoration: underline;")},"Terms and Conditions")))),h(window.BspSignupDialog,{s:s,V:V})));}
window.BSP_PAGES["general-platinum"]=Component;
window.BSP_TIERS=window.BSP_TIERS||{};window.BSP_TIERS["general-platinum"]=TIERS;
})();

/* fiction */
(function(){
var DCLogic=function(){};
DCLogic=class extends React.Component{render(){var v=this.renderVals?this.renderVals():{};var s=Object.assign({},this.props,v);return TPL(s);}};


const IB = "assets/img/pim/";
const I = (p) => IB + p;
const dbl = (n) => n + "/" + n;
const PDP = (id) => "#/p/" + id;
const CAT = (c) => "#/c/" + c;
const GENRE_SHELVES = [
  { n: 'Romance', cat: CAT('books_fiction_romance'), books: [
    { t: 'Every Beat After', href: PDP('PR00001380'), img: I("c6/eb/c6/69/69c6ebc6bcb2c7b68da50814/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.png/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.jpg") },
    { t: 'Seeking Persephone (Movie Tie-in Edition)', href: PDP('6095538'), img: I("63/79/6b/6a/6a6b7963aecf6cfadd773d25/" + dbl("6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg")) },
    { t: "The Duke's Bargain", href: PDP('PR00001397'), img: I("4f/eb/cb/69/69cbeb4f1697b5a856e37127/PR00001397_HERO_THE-DUKES-BARGAIN.png/PR00001397_HERO_THE-DUKES-BARGAIN.jpg") }
  ] },
  { n: 'Regency', cat: CAT('books_fiction_historical-fiction'), books: [
    { t: 'Courting Miss Lancaster', href: PDP('P5043081'), img: I("97/1d/d9/69/69d91d972877f3aacd15491d/" + dbl("5043081_HERO_COURTING-MISS-LANCASTER.jpg")) },
    { t: 'Romancing Daphne', href: PDP('P5183500'), img: I("07/50/27/69/69275007869d9d2aed915ea2/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.png/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.jpg") },
    { t: 'Charming Artemis', href: PDP('P5258117'), img: I("d9/1b/d9/69/69d91bd9b9ba62fc50204cd0/" + dbl("5258117_HERO_CHARMING-ARTEMIS.jpg")) }
  ] },
  { n: 'Teen Fiction', cat: CAT('books_fiction_teen-fiction'), books: [
    { t: "Wendy's Ever After", href: PDP('6073624'), img: I("10/71/3f/68/683f7110096dff25dda260d2/" + dbl("6073624_HERO_WENDYS-EVER-AFTER_HARDBACK.jpg")) },
    { t: 'Casters and Crowns', href: PDP('P6054216'), img: I("b3/e6/07/67/6707e6b3450e244009863e4e/P6054216_CASTERS_AND_CROWNS.png/P6054216_CASTERS_AND_CROWNS.jpg") },
    { t: 'The Art of Us', href: PDP('6054221'), img: I("e4/a3/cf/67/67cfa3e49ab7822b03cb64b1/P6054221_P6054221_none_base_319fd634.png/P6054221_P6054221_none_base_319fd634.jpg") }
  ] }
];
const SLIDES = GENRE_SHELVES.length;
const CTA = (bg) => ({
  href: '#plans', variant: 'primary', size: 'lg',
  style: { background: bg, borderColor: bg, whiteSpace: 'nowrap', minWidth: 'min(320px, 100%)' }
});

const TIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$12.99/month', monthly: 12.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$129/year', monthly: 12.99, yearlyTotal: 129
  }
];
/* Platinum members see the Platinum price; everything else on the page stays the same. */
const PTIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$9.99/month', monthly: 9.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$99/year', monthly: 9.99, yearlyTotal: 99
  }
];

class Component extends DCLogic {
  state = { faq: null, slide: 0, dir: 1 };

  componentDidMount() {
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    this._reducedMotion = !!(mq && mq.matches);
    if (!this._reducedMotion) this.startAuto();
  }
  componentWillUnmount() { clearInterval(this._t); }
  startAuto() {
    clearInterval(this._t);
    if (this._reducedMotion) return;
    this._t = setInterval(() => this.setState(s => ({ slide: (s.slide + 1) % SLIDES, dir: 1 })), 7000);
  }
  stopAuto() { clearInterval(this._t); }
  go(d) { this.setState(s => ({ slide: (s.slide + SLIDES + d) % SLIDES, dir: d })); this.startAuto(); }

  renderVals() {

    const { suOpenFn, ...suBase } = window.BspSignup.vals(this, this.props.member ? PTIERS : TIERS);
    const suVals = { ...suBase,
      heroCtaProps: { ...CTA('var(--scheme-300)'), onClick: suOpenFn },
      signupCtaProps: { ...CTA('var(--db-accent-deep)'), onClick: suOpenFn }
    };
    const faq = {};
    ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'].forEach(k => {
      const isOpen = this.state.faq === k;
      faq[k + 'Open'] = isOpen;
      faq[k + 'Sign'] = isOpen ? '\u2212' : '+';
      faq[k + 'Toggle'] = () => this.setState(s => ({ faq: s.faq === k ? null : k }));
    });


    const cur = this.state.slide;
    // Carousel motion. Every state of an element uses the SAME transform-function
    // list (same functions, same order), so browsers interpolate each 3D value
    // separately instead of falling back to matrix interpolation, which is what
    // squashed the books mid-transition. Opacity lives only on leaf layers
    // (cover face + spine/page pseudo-elements via --o) because opacity < 1 on a
    // preserve-3d parent flattens its children in every engine.
    const EASE = 'cubic-bezier(.33,.02,.18,1)';
    const POP = 'cubic-bezier(.4,.05,.2,1)';
    const TURN = 1.05;
    const hv = !!this.state.shelfHover;
    const rm = !!this._reducedMotion;
    const tr = (spec) => rm ? 'none' : spec;
    const T = (x, y, z, ry, rz, sc) =>
      'translateX(' + x + '%) translateY(' + y + '%) translateZ(' + z + 'px) rotateY(' + ry + 'deg) rotate(' + rz + 'deg) scale(' + sc + ')';
    const fadeIn = { o: 1, d: '.6s', dl: '.15s' }, fadeOut = { o: 0, d: '.55s', dl: '.12s' };
    const SLOTS = [
      { key: 'left',  y: 24,  yHover: 38,  ySpin: 78,  z: -20, zHover: -6, tilt: -7, origin: 'left center',  delay: 0 },
      { key: 'mid',   y: -7,  yHover: -14, ySpin: 72,  z: 44,  zHover: 60, tilt: 0,  origin: 'left center',  delay: 0.09, mid: true },
      { key: 'right', y: -24, yHover: -38, ySpin: -78, z: -20, zHover: -6, tilt: 7,  origin: 'right center', delay: 0.18 }
    ];
    const slides = GENRE_SHELVES.map((sh, i) => {
      const on = i === cur;
      const ahead = ((i - cur + SLIDES) % SLIDES) === 1;
      const behind = ((cur - i + SLIDES) % SLIDES) === 1;
      const s = on ? 0 : (ahead ? 1 : behind ? -1 : (this.state.dir || 1));
      const d = s || 1;
      const f = on ? fadeIn : fadeOut;
      const g = {
        href: sh.cat, label: sh.n,
        style: {
          position: 'absolute', inset: 0, display: 'flex', textDecoration: 'none', color: 'inherit',
          alignItems: 'center', justifyContent: 'center', gap: 'clamp(8px, 2.2%, 22px)',
          transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          transform: on ? T(0, 0, hv ? 40 : 0, 0, 0, hv ? 1.07 : 1) : T(s * 26, 0, -300, -s * 46, 0, 1),
          visibility: on ? 'visible' : 'hidden',
          transition: tr(on
            ? 'transform ' + (hv ? '.7s ' + EASE : TURN + 's ' + POP) + ', visibility 0s linear 0s'
            : 'transform ' + TURN + 's ' + EASE + ', visibility 0s linear ' + TURN + 's'),
          pointerEvents: on ? 'auto' : 'none'
        }
      };
      SLOTS.forEach((sl, n) => {
        const side = sl.mid ? 0 : 6;
        const rest = T(0, side, hv ? sl.zHover : sl.z, hv ? sl.yHover : sl.y, hv ? sl.tilt : 0, 1);
        // off pose travels with the slide: fans further open toward the motion and sinks in Z
        const spin = sl.mid ? T(d * -8, 0, -90, sl.ySpin * d, 0, 1) : T(d * -14, side, -130, sl.ySpin * d, 0, 1);
        const delay = on && !hv ? sl.delay : 0;
        const dur = hv ? (sl.mid ? '.62s' : '.9s') : TURN + 's';
        g[sl.key] = {
          href: sh.books[n].href, label: sh.books[n].t,
          wrap: {
            position: 'relative', height: sl.mid ? '80%' : '58%', aspectRatio: '2 / 3', flex: 'none', zIndex: sl.mid ? 2 : 1,
            transform: on ? rest : spin, transformOrigin: sl.origin,
            transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d',
            transition: tr('transform ' + dur + ' ' + EASE + ' ' + delay + 's'),
            '--o': f.o, '--od': rm ? '0s' : f.d, '--odl': rm ? '0s' : f.dl
          },
          style: {
            display: 'block', width: '100%', height: '100%', borderRadius: 'var(--db-radius-sm)',
            backgroundImage: 'url(' + sh.books[n].img + ')', backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: sl.mid
              ? '0 24px 44px rgba(43,46,48,0.34), 0 2px 6px rgba(43,46,48,0.22)'
              : '0 14px 30px rgba(43,46,48,0.26), 0 2px 5px rgba(43,46,48,0.18)',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            opacity: f.o,
            transition: tr('box-shadow .8s ease, opacity ' + f.d + ' ease ' + f.dl)
          }
        };
      });
      return g;
    });
    return {
      ...faq,
      slides,
      prevSlide: () => this.go(-1),
      nextSlide: () => this.go(1),
      pauseAuto: () => { this.stopAuto(); this.setState({ shelfHover: true }); },
      resumeAuto: () => { this.startAuto(); this.setState({ shelfHover: false }); },
      slideName: GENRE_SHELVES[cur].n,
      ...suVals,
      tiers: (this.props.member ? PTIERS : TIERS).map(t => {
        const money = v => '$' + v.toFixed(2).replace(/\.00$/, '');
        let compare = '', save = '', annual = '';
        if (t.term === 'monthly') {
          annual = money(t.monthly * 12) + '/year total';
        } else if (t.term === 'yearly') {
          compare = money(t.monthly * 12) + '/year';
          save = 'Save ' + money(t.monthly * 12 - t.yearlyTotal);
        }
        /* Platinum members: the card's one meta line shows the regular price struck through and "Platinum price", so the card keeps its size. */
        if (this.props.member) {
          const reg = TIERS.find(x => x.key === t.key);
          compare = reg ? money(t.term === 'yearly' ? reg.yearlyTotal : reg.monthly) : '';
          /* The full sentence where the card is wide enough to keep it on one line; "Platinum price" where it isn't (css/bookshelf-pages.css). */
          const off = reg ? money(t.term === 'yearly' ? reg.yearlyTotal - t.yearlyTotal : reg.monthly - t.monthly) : '';
          save = React.createElement(React.Fragment, null,
            React.createElement('span', { className: 'bsp-plat-long' }, 'Save ' + off + (t.term === 'yearly' ? ' a year' : ' a month') + ' with Platinum'),
            React.createElement('span', { className: 'bsp-plat-short' }, 'Platinum price'));
          annual = '';
        }
        const price = t.price;
        const slash = price.indexOf('/');
        const accent = 'var(--db-accent-deep)';
        const hairline = 'var(--db-dove)';
        return {
          name: t.name,
          nameColor: accent,
          cardProps: {
            ground: 'white',
            padding: 'none',
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(18px, 3vw, 28px)'
            }
          },
          amount: slash === -1 ? price : price.slice(0, slash),
          unit: slash === -1 ? '' : price.slice(slash),
          unitSize: '16px',
          amountSize: '38px',
          rowWhite: t.term ? 'nowrap' : 'normal',
          rowMargin: t.term ? 'clamp(6px, 1.8vw, 20px) -16px 0' : 'clamp(6px, 1.8vw, 20px) 0 0',
          compare,
          save,
          annual,
          badge: t.badge,
          hasMeta: !!(compare || save || annual)
        };
      }),

    };
  }
}

function TPL(s){return F(h("div",{style:S("font-family: var(--font-text); color: var(--label-primary); background: var(--bg-primary);")},h("section",{"data-hero-banner":"",style:S("position: relative; width: 100%; padding: clamp(20px, 3vw, 44px) 20px 40px; background-color: var(--db-granite); background-image: url('assets/bookshelf/DB_2026_FictionLandingPage-22.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;")},h("div",{style:S("display: flex; justify-content: center;")},h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: clamp(10px, 1.6vw, 22px); max-width: 900px; padding: clamp(16px, 2.4vw, 34px) clamp(20px, 3.5vw, 56px); box-sizing: border-box; background: rgba(15,128,121,0.9); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border-radius: var(--db-radius-lg); text-align: center;"),"data-hero-stack":""},h("div",{style:S("display: flex; align-items: center; justify-content: center; margin-bottom: clamp(-14px, -1.2vw, -4px);")},h("svg",{"viewBox":"0 0 768 132",style:S("display: block; width: clamp(165px, 20vw, 320px); height: auto; color: rgb(255,255,255);"),"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","role":"img","aria-hidden":"true","focusable":"false"},h("path",{"d":"M89.8203 0C120.176 6.6602e-05 145.016 24.8399 145.016 55.1992V73.2344H150.742C158.375 73.5078 165.734 76.5078 171.184 81.9609C176.637 87.4101 179.637 94.7696 179.637 102.676C179.637 110.309 176.637 117.941 171.184 123.391C165.734 128.844 158.375 131.844 150.469 131.844H136.828C132.242 131.844 128.523 128.125 128.523 123.543V55.5664C128.523 34.2774 111.105 16.8594 89.8203 16.8594C68.5273 16.8594 51.1094 34.2773 51.1094 55.5664V123.543C51.1094 128.125 47.3945 131.844 42.8086 131.844H29.168C21.2617 131.844 13.9023 128.844 8.44922 123.391C3 117.941 0 110.309 0 102.676C0 94.7695 3 87.4102 8.44922 81.9609C13.9023 76.5079 21.2617 73.5078 28.8945 73.2344H34.6172V55.1992C34.6172 24.8398 59.457 0 89.8203 0ZM28.8945 90.6836C25.625 90.6836 22.625 91.7735 20.1719 94.2266C17.9922 96.4062 16.6289 99.6758 16.6289 102.949C16.6289 106.219 17.7188 109.219 20.1719 111.672C22.3516 113.852 25.625 115.215 28.8945 115.215H32.0352C33.4609 115.215 34.6172 114.059 34.6172 112.633V93.2656C34.6172 91.8399 33.4609 90.6837 32.0352 90.6836H28.8945ZM147.602 90.6836C146.176 90.6836 145.016 91.8398 145.016 93.2656V112.633C145.016 114.059 146.176 115.215 147.602 115.215H150.742C154.012 115.215 157.285 113.852 159.465 111.672C161.918 109.219 163.008 106.219 163.008 102.949C163.008 99.6758 161.645 96.4062 159.465 94.2266C157.012 91.7735 154.012 90.6836 150.742 90.6836H147.602Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M244.535 52.1562C245.914 52.1563 247.031 53.2735 247.031 54.6562V76.6406C247.031 78.7344 249.441 79.8867 251.082 78.5898C251.922 77.9258 252.82 77.3164 253.781 76.7578C256.539 75.1641 259.949 74.3633 264.016 74.3633C269.023 74.3633 273.504 75.6133 277.461 78.1211C281.414 80.625 284.555 84.0352 286.879 88.3516C289.199 92.6719 290.359 97.625 290.359 103.211C290.359 108.656 289.199 113.555 286.879 117.91C284.555 122.262 281.434 125.676 277.516 128.141C273.598 130.605 269.133 131.844 264.125 131.844C261.438 131.844 259.027 131.516 256.887 130.863C254.746 130.211 252.855 129.285 251.227 128.086C250.758 127.742 250.305 127.387 249.875 127.016C248.488 125.82 246.34 126.453 245.84 128.215L245.695 128.719C245.395 129.793 244.41 130.535 243.293 130.535H233.203C231.824 130.535 230.703 129.418 230.703 128.039V54.6562C230.703 53.2734 231.824 52.1562 233.203 52.1562H244.535ZM260.098 88.625C257.41 88.625 255.035 89.2618 252.965 90.5312C250.898 91.8008 249.281 93.5078 248.121 95.6445C246.961 97.7891 246.383 100.309 246.383 103.211C246.383 105.973 246.961 108.457 248.121 110.668C249.281 112.883 250.898 114.59 252.965 115.785C255.035 116.984 257.41 117.582 260.098 117.582C262.711 117.582 265.051 116.965 267.117 115.73C269.187 114.5 270.801 112.809 271.961 110.668C273.125 108.527 273.703 106.043 273.703 103.211C273.703 100.383 273.125 97.8594 271.961 95.6445C270.801 93.4336 269.187 91.7109 267.117 90.4766C265.051 89.2422 262.711 88.625 260.098 88.625Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M323.781 74.3633C329.152 74.3633 333.941 75.5977 338.152 78.0664C342.359 80.5312 345.699 83.9258 348.168 88.2422C350.633 92.5625 351.867 97.5156 351.867 103.105C351.867 108.691 350.633 113.645 348.168 117.961C345.699 122.281 342.359 125.676 338.152 128.141C333.941 130.609 329.152 131.844 323.781 131.844C318.484 131.844 313.73 130.609 309.52 128.141C305.309 125.676 301.973 122.281 299.504 117.961C297.035 113.645 295.801 108.73 295.801 103.211C295.801 97.5508 297.035 92.5625 299.504 88.2422C301.973 83.9258 305.328 80.5312 309.574 78.0664C313.82 75.5977 318.555 74.3633 323.781 74.3633ZM323.891 88.5156C321.715 88.5156 319.77 89.0586 318.066 90.1484C316.359 91.2383 315 92.8711 313.984 95.0469C312.965 97.2266 312.461 99.9102 312.461 103.105C312.461 106.297 312.965 108.98 313.984 111.16C315 113.336 316.359 114.969 318.066 116.059C319.77 117.148 321.676 117.691 323.781 117.691C325.957 117.691 327.898 117.148 329.605 116.059C331.309 114.969 332.672 113.336 333.688 111.16C334.703 108.98 335.211 106.297 335.211 103.105C335.211 99.9102 334.703 97.2266 333.688 95.0469C332.672 92.8711 331.328 91.2383 329.66 90.1484C327.988 89.0586 326.066 88.5156 323.891 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M385.289 74.3633C390.656 74.3633 395.445 75.5977 399.656 78.0664C403.867 80.5312 407.203 83.9258 409.672 88.2422C412.137 92.5625 413.375 97.5156 413.375 103.105C413.375 108.691 412.137 113.645 409.672 117.961C407.203 122.281 403.867 125.676 399.656 128.141C395.445 130.609 390.656 131.844 385.289 131.844C379.988 131.844 375.234 130.609 371.027 128.141C366.816 125.676 363.477 122.281 361.012 117.961C358.543 113.645 357.309 108.73 357.309 103.211C357.309 97.5508 358.543 92.5625 361.012 88.2422C363.477 83.9258 366.836 80.5312 371.082 78.0664C375.324 75.5977 380.063 74.3633 385.289 74.3633ZM385.395 88.5156C383.219 88.5156 381.273 89.0586 379.574 90.1484C377.867 91.2383 376.504 92.8711 375.492 95.0469C374.473 97.2266 373.965 99.9102 373.965 103.105C373.965 106.297 374.473 108.98 375.492 111.16C376.504 113.336 377.867 114.969 379.574 116.059C381.273 117.148 383.18 117.691 385.289 117.691C387.465 117.691 389.406 117.148 391.113 116.059C392.816 114.969 394.176 113.336 395.195 111.16C396.211 108.98 396.719 106.297 396.719 103.105C396.719 99.9102 396.211 97.2266 395.195 95.0469C394.176 92.8711 392.832 91.2383 391.164 90.1484C389.496 89.0586 387.574 88.5156 385.395 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M499.375 74.3633C506.266 74.3633 511.676 75.8867 515.594 78.9336C518.66 81.3203 520.75 84.3516 521.859 88.0273C522.344 89.625 521.125 91.2382 519.457 91.2383H508.938C508.012 91.2383 507.215 90.6914 506.727 89.9023C506.227 89.086 505.52 88.4258 504.598 87.918C503.219 87.1563 501.477 86.7734 499.375 86.7734C496.98 86.7734 495.164 87.1719 493.93 87.9727C492.695 88.7695 492.082 89.8242 492.082 91.1289C492.082 92 492.496 92.7812 493.332 93.4688C494.164 94.1601 495.383 94.7578 496.98 95.2656C498.574 95.7734 500.535 96.2813 502.855 96.7891C507.285 97.7344 511.113 98.75 514.344 99.8359C517.57 100.926 520.094 102.504 521.91 104.574C523.723 106.641 524.594 109.633 524.52 113.555C524.594 117.109 523.668 120.266 521.746 123.027C519.82 125.785 517.082 127.941 513.527 129.504C509.969 131.062 505.723 131.844 500.789 131.844C495.637 131.844 491.191 131.027 487.453 129.395C483.715 127.762 480.773 125.527 478.637 122.699C477.145 120.727 476.102 118.578 475.508 116.254C475.102 114.668 476.301 113.117 477.938 113.117H489.426C490.437 113.117 491.316 113.746 491.727 114.672C492.008 115.301 492.359 115.891 492.789 116.438C493.551 117.418 494.602 118.18 495.945 118.723C497.285 119.27 498.793 119.543 500.465 119.543C502.273 119.543 503.746 119.305 504.871 118.832C505.996 118.363 506.848 117.727 507.43 116.93C508.008 116.133 508.301 115.297 508.301 114.426C508.301 113.047 507.883 111.996 507.047 111.266C506.215 110.543 504.996 109.945 503.402 109.473C501.805 109 499.883 108.547 497.633 108.109C495.02 107.531 492.426 106.859 489.848 106.098C487.273 105.336 484.984 104.375 482.988 103.211C480.992 102.051 479.398 100.543 478.203 98.6953C477.004 96.8438 476.402 94.5781 476.402 91.8906C476.402 88.625 477.309 85.668 479.125 83.0156C480.938 80.3711 483.551 78.2656 486.965 76.7031C490.375 75.1445 494.512 74.3633 499.375 74.3633Z"}),h("path",{"d":"M621.297 74.3633C626.812 74.3633 631.641 75.5625 635.777 77.957C639.914 80.3516 643.16 83.6016 645.52 87.6992C647.879 91.8008 649.059 96.5352 649.059 101.906C649.059 102.633 649.039 103.449 649.004 104.355C648.996 104.504 648.988 104.652 648.98 104.801C648.902 106.113 647.793 107.133 646.477 107.133H611.957C610.316 107.133 609.07 108.699 609.539 110.273C609.754 111 610.027 111.695 610.355 112.355C611.336 114.316 612.754 115.84 614.602 116.93C616.453 118.016 618.648 118.562 621.188 118.562C623.582 118.562 625.559 118.07 627.121 117.094C628.324 116.336 629.324 115.418 630.117 114.34C630.582 113.707 631.324 113.336 632.109 113.336H643.801C645.637 113.336 646.852 115.25 646.07 116.91C645.082 119.004 643.793 120.949 642.199 122.754C639.73 125.547 636.719 127.762 633.164 129.395C629.606 131.027 625.687 131.844 621.406 131.844C615.746 131.844 610.773 130.664 606.492 128.305C602.211 125.945 598.852 122.645 596.422 118.398C593.992 114.152 592.773 109.273 592.773 103.758C592.773 98.0938 593.973 93.0508 596.367 88.625C598.766 84.1992 602.102 80.7148 606.383 78.1758C610.664 75.6329 615.637 74.3633 621.297 74.3633ZM621.406 87.5352C619.086 87.5352 616.977 88.0821 615.094 89.168C613.203 90.2578 611.699 91.8906 610.574 94.0664C610.57 94.0781 610.562 94.0898 610.559 94.0977C609.723 95.7266 610.992 97.6602 612.824 97.6602H629.414C631.129 97.6601 632.352 95.9609 631.781 94.3398C631.234 92.7774 630.336 91.4336 629.082 90.3125C627.012 88.461 624.453 87.5352 621.406 87.5352Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M107.336 44.9297C108.223 44.754 109.078 45.3399 109.246 46.2266L124.461 127.805C124.625 128.684 124.051 129.527 123.172 129.699L113.824 131.527C112.938 131.699 112.082 131.117 111.914 130.23L96.7031 48.6523C96.5391 47.7734 97.1133 46.9297 97.9883 46.7578L107.336 44.9297Z"}),h("path",{"d":"M69.0664 45.1602C69.9648 45.1602 70.6914 45.8868 70.6914 46.7852V129.672C70.6914 130.57 69.9648 131.297 69.0664 131.297H60.8789C59.9805 131.297 59.2539 130.57 59.2539 129.672V46.7852C59.2539 45.8867 59.9805 45.1602 60.8789 45.1602H69.0664Z"}),h("path",{"d":"M91.6914 30.7109C92.5859 30.711 93.3164 31.4414 93.3164 32.3398V129.672C93.3164 130.57 92.5859 131.297 91.6914 131.297H77.9648C77.0703 131.297 76.3398 130.57 76.3398 129.672V32.3398C76.3398 31.4414 77.0703 30.7109 77.9648 30.7109H91.6914Z"}),h("path",{"d":"M434.277 52.1562C435.66 52.1563 436.777 53.2735 436.777 54.6562V90.4922C436.777 92.8477 439.734 93.8945 441.215 92.0664L453.773 76.5938C454.246 76.0079 454.957 75.668 455.711 75.668H468.375C470.508 75.6681 471.66 78.168 470.277 79.7891L453.609 99.3359C452.816 100.266 452.812 101.637 453.605 102.57L473.793 126.422C475.168 128.047 474.016 130.535 471.887 130.535H458.273C457.488 130.535 456.746 130.168 456.277 129.543L441.273 109.633C439.828 107.715 436.777 108.738 436.777 111.137V128.039C436.777 129.418 435.66 130.535 434.277 130.535H422.949C421.566 130.535 420.449 129.418 420.449 128.039V54.6562C420.449 53.2734 421.566 52.1562 422.949 52.1562H434.277Z"}),h("path",{"d":"M545.102 52.1562C546.48 52.1563 547.598 53.2735 547.598 54.6562V76.9805C547.598 79.082 550.035 80.2461 551.664 78.9141C552.586 78.1602 553.59 77.4765 554.676 76.8672C557.648 75.1993 561.133 74.3633 565.125 74.3633C569.769 74.3633 573.652 75.3438 576.773 77.3047C579.894 79.2617 582.254 82.1133 583.848 85.8477C585.445 89.5859 586.246 94.1055 586.246 99.4023V128.035C586.246 129.418 585.125 130.535 583.746 130.535H572.523C571.145 130.535 570.023 129.418 570.023 128.035V100.926C570.023 96.8633 569.172 93.7031 567.465 91.4531C565.758 89.2071 563.059 88.0781 559.355 88.0781C557.18 88.0781 555.18 88.625 553.371 89.7148C551.555 90.8008 550.137 92.3438 549.121 94.3398C548.105 96.3359 547.598 98.7148 547.598 101.469V128.035C547.598 129.418 546.48 130.535 545.102 130.535H533.77C532.387 130.535 531.27 129.418 531.27 128.035V54.6562C531.27 53.2734 532.387 52.1562 533.77 52.1562H545.102Z"}),h("path",{"d":"M669.418 52.1562C670.801 52.1563 671.918 53.2735 671.918 54.6562V128.039C671.918 129.418 670.801 130.535 669.418 130.535H658.086C656.707 130.535 655.59 129.418 655.59 128.039V54.6562C655.59 53.2734 656.707 52.1562 658.086 52.1562H669.418Z"}),h("path",{"d":"M707.305 52.1562C708.684 52.1563 709.801 53.2735 709.801 54.6562V63.4844C709.801 64.8632 708.684 65.9804 707.305 65.9805H705.449C703.199 65.9805 701.602 66.418 700.656 67.2891C699.715 68.1602 699.242 69.6484 699.242 71.75V73.1719C699.242 74.5508 700.363 75.668 701.742 75.668H708.066C709.445 75.668 710.566 76.7891 710.566 78.168V86.7773C710.566 88.1601 709.445 89.2773 708.066 89.2773H701.742C700.363 89.2773 699.242 90.3984 699.242 91.7773V128.039C699.242 129.418 698.125 130.535 696.746 130.535H685.414C684.031 130.535 682.914 129.418 682.914 128.039V91.7773C682.914 90.3985 681.793 89.2774 680.414 89.2773H678.227C676.848 89.2773 675.73 88.1602 675.73 86.7773V78.168C675.73 76.7891 676.848 75.668 678.227 75.668H680.414C681.793 75.6679 682.914 74.5507 682.914 73.1719V71.75C682.914 66.9609 683.746 63.1328 685.418 60.2656C687.086 57.3985 689.426 55.332 692.441 54.0586C695.449 52.793 698.914 52.1562 702.836 52.1562H707.305Z"}),h("path",{"d":"M746.742 74.3633C747.934 74.3633 748.898 75.3282 748.898 76.5195V90.4766C748.898 91.668 749.863 92.6328 751.055 92.6328H765.012C766.203 92.6329 767.168 93.6016 767.168 94.793V105.004C767.168 106.195 766.203 107.164 765.012 107.164H751.055C749.863 107.164 748.898 108.129 748.898 109.32V123.277C748.898 124.469 747.934 125.434 746.742 125.434H736.527C735.336 125.434 734.371 124.469 734.371 123.277V109.32C734.371 108.129 733.402 107.164 732.215 107.164H718.258C717.062 107.164 716.098 106.195 716.098 105.004V94.793C716.098 93.6016 717.062 92.6328 718.258 92.6328H732.215C733.402 92.6327 734.371 91.6679 734.371 90.4766V76.5195C734.371 75.3281 735.336 74.3633 736.527 74.3633H746.742Z"}))),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px, 3.8vw, 60px); line-height: 1.12; letter-spacing: -1px; color: rgb(255,255,255);")},"Thousands of Stories. ",h("br",{}),"Zero Surprises."),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(14px, 1.6vw, 26px); line-height: 1.3; color: var(--db-dove);")},"Your clean fiction library-romance, mystery, fantasy, & more. ",h("br",{}),"All in one app."),h("div",{"data-hero-cta":"","data-cta":"",style:S("display: none; justify-content: center; width: 100%; margin-top: 16px;")},h(C("Button"),Object.assign({},V(s,"heroCtaProps"),{}),"Start 14-day free trial"))))),h("section",{"id":"plans",style:S("padding: clamp(24px, 5vw, 40px) clamp(12px, 4vw, 20px) clamp(24px, 4vw, 40px); background-color: rgb(255,255,255)")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("div",{style:S("max-width: 760px; margin: 0 auto clamp(24px, 3.5vw, 36px); text-align: center; display: flex; flex-direction: column; gap: 12px;")},h("h2",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(26px, 3.2vw, 42px); line-height: 1.18; letter-spacing: -0.4px; color: var(--db-display); text-wrap: balance;")},"Tired of getting 3 chapters in...",h("br",{})," and wishing you hadn't?"),h("p",{style:S("margin: 0; font-family: var(--db-font-sans); font-size: clamp(15px, 1.2vw, 18px); line-height: 1.55; color: var(--db-ink-muted); text-wrap: pretty;")},"Every Bookshelf+ title is hand-curated so you never have to worry about inappropriate content.")),h("div",{style:S("margin-bottom: clamp(32px, 5vw, 56px); display: flex; flex-direction: column; align-items: center; gap: 4px;")},h("div",{"onMouseEnter":V(s,"pauseAuto"),"onMouseLeave":V(s,"resumeAuto"),style:S("position: relative; width: min(100%, 640px); aspect-ratio: 16 / 9; border-radius: var(--db-radius-sm); perspective: 1200px; perspective-origin: 50% 50%; background: radial-gradient(ellipse 62% 70% at 50% 54%, rgba(174,230,252,0.62) 0%, rgba(174,230,252,0.30) 45%, rgba(174,230,252,0) 78%);")},(A(V(s,"slides")).map((it,i)=>((s)=>F({key:i},h("div",{"role":"group","aria-label":V(s,"g.label"),style:S(V(s,"g.style"))},h("div",{style:S(V(s,"g.left.wrap")),className:"bspx-43 bspx-44"},h("a",{"href":V(s,"g.left.href"),"aria-label":V(s,"g.left.label"),style:S(V(s,"g.left.style"))})),h("div",{style:S(V(s,"g.mid.wrap")),className:"bspx-45 bspx-46"},h("a",{"href":V(s,"g.mid.href"),"aria-label":V(s,"g.mid.label"),style:S(V(s,"g.mid.style"))})),h("div",{style:S(V(s,"g.right.wrap")),className:"bspx-47 bspx-48"},h("a",{"href":V(s,"g.right.href"),"aria-label":V(s,"g.right.label"),style:S(V(s,"g.right.style"))})))))(Object.assign({},s,{"g":it})))),h(C("CarouselChevronButton"),{"direction":"prev","label":"Previous genre","onClick":V(s,"prevSlide")}),h(C("CarouselChevronButton"),{"direction":"next","label":"Next genre","onClick":V(s,"nextSlide")})),h("span",{style:S("position: relative; z-index: 5; margin-top: -26px; width: min(50%, 320px); padding: 10px 20px; box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; gap: 12px; border-radius: var(--db-radius-pill); background: rgba(233,224,209,0.3); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); font-family: var(--db-font-serif); font-size: 21px; line-height: 1.4; color: var(--db-ink); text-align: center; min-height: 28px;")},h("span",{"aria-hidden":"true",style:S("flex: none; font-family: var(--db-font-sans); font-size: 24px; line-height: 1; color: rgb(201,178,140); opacity: 0.35; mix-blend-mode: overlay;")},"✻"),h("span",{style:S("flex: 1; min-width: 0;")},V(s,"slideName")),h("span",{"aria-hidden":"true",style:S("flex: none; font-family: var(--db-font-sans); font-size: 24px; line-height: 1; color: rgb(201,178,140); opacity: 0.35; mix-blend-mode: overlay;")},"✻"))),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(14px, 3vw, 32px);")},(A(V(s,"tiers")).map((it,i)=>((s)=>F({key:i},h(C("Card"),Object.assign({},V(s,"t.cardProps"),{}),h("span",{style:S("display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;")},h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); line-height: 1.5; text-transform: uppercase; text-align: center; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.name")),((V(s,"t.badge"))?F(h("span",{style:S("padding: 4px 12px; border-radius: var(--db-radius-pill); background: var(--db-orange-100); color: var(--scheme-500); font-family: var(--db-font-sans); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;")},V(s,"t.badge"))):null)),h("span",{style:S("display: flex; align-items: baseline; justify-content: center; gap: 4px; margin: "+T(V(s,"t.rowMargin"))+"; white-space: "+T(V(s,"t.rowWhite"))+";")},h("span",{style:S("font-family: var(--db-font-serif); font-size: "+T(V(s,"t.amountSize"))+"; font-weight: var(--db-weight-serif-regular); line-height: 1.2; text-align: center; text-wrap: pretty; color: var(--db-display);")},V(s,"t.amount")),((V(s,"t.unit"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: "+T(V(s,"t.unitSize"))+"; white-space: nowrap; color: var(--db-ink-muted);")},V(s,"t.unit"))):null)),((V(s,"t.hasMeta"))?F(h("span",{style:S("display: flex; align-items: baseline; justify-content: center; flex-wrap: wrap; gap: 4px 10px; margin-top: var(--db-space-3);")},((V(s,"t.compare"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; text-decoration: line-through; color: var(--db-ink-muted);")},V(s,"t.compare"))):null),((V(s,"t.save"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); text-transform: uppercase; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.save"))):null),((V(s,"t.annual"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; color: var(--db-ink-muted);")},V(s,"t.annual"))):null))):null))))(Object.assign({},s,{"t":it}))))),h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: clamp(24px, 3.5vw, 36px);")},h("div",{"data-cta-teal":"",style:S("display: flex; justify-content: center; width: 100%;")},h(C("Button"),Object.assign({},V(s,"signupCtaProps"),{}),"Sign up today")),h("p",{style:S("margin: 0; text-align: center; font-family: var(--db-font-sans); font-size: 13px; line-height: 1.4; color: var(--db-ink-muted);")},"Cancel any time.")),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: clamp(32px, 5vw, 56px) 0 0;")},h("h1",{style:S("margin: 0 0 48px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.2; letter-spacing: 0; color: var(--db-display); text-wrap: balance;")},"You'll Get Exclusive Access To"),h("ul",{"data-perks-grid":"",style:S("list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 40px 32px; margin: 0; padding: 0; justify-content: center;")},h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_UnlimitedListening.jpg","alt":"Unlimited Listening",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Unlimited Listening")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_Wholesome.jpg","alt":"Guaranteed Clean Content",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Guaranteed Clean Content")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/ebooks-square-03.jpg","alt":"4,000+ Audiobooks & eBooks",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"4,000+ Audiobooks & eBooks")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_ExclusiveContent.jpg","alt":"Exclusive Podcasts",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Exclusive Podcasts")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_NewAudiobooks.jpg","alt":"New Audiobooks on Release Day",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"New Audiobooks on Release Day")))))),h("section",{style:S("background: var(--db-dove); padding: 40px 20px 64px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 56px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.2vw, 44px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"What People are Saying"),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 44px;")},h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“We’ve listened to dozens of books for the price of three hard copies.”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I’m a busy mom…This app makes reading so much easier for me!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I love the variety of books found here!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review"))))),h("section",{style:S("background: var(--db-dove); padding: 56px 20px 72px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 30px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.4vw, 46px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"Frequently Asked Questions"),h(C("Accordion"),{className:"bsp-faq",items:[{title:"What is Bookshelf+?",content:h("p",{style:S("margin: 0;")},h("strong",{style:S("color: var(--db-charcoal);")},"Bookshelf+ is a digital subscription that gives you unlimited access to Deseret Book's entire digital audiobook library—"),"including books from gospel leaders, a full library of clean and compelling fiction, inspiring audiobooks, exclusive podcasts, and more. It's like having an uplifting library in your pocket, wherever you go.")},{title:"Is there a free trial?",content:h("p",{style:S("margin: 0;")},"Yes! You get 7 days to try Bookshelf+ risk-free. Just sign up, and you won't be charged if you cancel before the 7-day trial ends. No commitment, no fees. One free trial per customer.")},{title:"Where can I use Bookshelf+?",content:h("p",{style:S("margin: 0;")},"Anywhere, anytime. Just download the ",h("strong",{style:S("color: var(--db-charcoal);")},"Deseret Bookshelf app")," from the ",h("a",{"href":"https://apps.apple.com/us/app/deseret-bookshelf-lds-books/id428709147"},"App Store")," or ",h("a",{"href":"https://play.google.com/store/apps/details?id=com.deseretdigital.bookshelf&hl=en_US"},"Google Play")," and log in to access your subscription on your phone or tablet.",h("br",{}),"Prefer desktop? You can also read and listen at ",h("strong",{},h("a",{"href":"https://read.deseretbook.com/"},"read.deseretbook.com"))," on any browser.")},{title:"Can I cancel anytime?",content:h("p",{style:S("margin: 0;")},"Yes, Bookshelf+ is flexible. You can cancel anytime through your account settings at DeseretBook.com.")},{title:"What happens if I cancel? Will I lose my books?",content:h("p",{style:S("margin: 0;")},"If you cancel, you'll lose access to the full Bookshelf+ library. However, any individual books you've purchased separately (a la carte) will still be accessible through the Deseret Bookshelf app.")}]}),h("h4",{style:S("margin: 26px 0 0; text-align: center; font-family: var(--font-text); font-size: 16px; font-weight: 400; color: var(--db-charcoal);")},"View Bookshelf ",h("a",{"href":"#plans",style:S("color: inherit; text-decoration: underline;")},"Terms and Conditions")))),h(window.BspSignupDialog,{s:s,V:V})));}
window.BSP_PAGES["fiction"]=Component;
})();

/* fiction-platinum */
(function(){
var DCLogic=function(){};
DCLogic=class extends React.Component{render(){var v=this.renderVals?this.renderVals():{};var s=Object.assign({},this.props,v);return TPL(s);}};


const IB = "assets/img/pim/";
const I = (p) => IB + p;
const dbl = (n) => n + "/" + n;
const PDP = (id) => "#/p/" + id;
const CAT = (c) => "#/c/" + c;
const GENRE_SHELVES = [
  { n: 'Romance', cat: CAT('books_fiction_romance'), books: [
    { t: 'Every Beat After', href: PDP('PR00001380'), img: I("c6/eb/c6/69/69c6ebc6bcb2c7b68da50814/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.png/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.jpg") },
    { t: 'Seeking Persephone (Movie Tie-in Edition)', href: PDP('6095538'), img: I("63/79/6b/6a/6a6b7963aecf6cfadd773d25/" + dbl("6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg")) },
    { t: "The Duke's Bargain", href: PDP('PR00001397'), img: I("4f/eb/cb/69/69cbeb4f1697b5a856e37127/PR00001397_HERO_THE-DUKES-BARGAIN.png/PR00001397_HERO_THE-DUKES-BARGAIN.jpg") }
  ] },
  { n: 'Regency', cat: CAT('books_fiction_historical-fiction'), books: [
    { t: 'Courting Miss Lancaster', href: PDP('P5043081'), img: I("97/1d/d9/69/69d91d972877f3aacd15491d/" + dbl("5043081_HERO_COURTING-MISS-LANCASTER.jpg")) },
    { t: 'Romancing Daphne', href: PDP('P5183500'), img: I("07/50/27/69/69275007869d9d2aed915ea2/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.png/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.jpg") },
    { t: 'Charming Artemis', href: PDP('P5258117'), img: I("d9/1b/d9/69/69d91bd9b9ba62fc50204cd0/" + dbl("5258117_HERO_CHARMING-ARTEMIS.jpg")) }
  ] },
  { n: 'Teen Fiction', cat: CAT('books_fiction_teen-fiction'), books: [
    { t: "Wendy's Ever After", href: PDP('6073624'), img: I("10/71/3f/68/683f7110096dff25dda260d2/" + dbl("6073624_HERO_WENDYS-EVER-AFTER_HARDBACK.jpg")) },
    { t: 'Casters and Crowns', href: PDP('P6054216'), img: I("b3/e6/07/67/6707e6b3450e244009863e4e/P6054216_CASTERS_AND_CROWNS.png/P6054216_CASTERS_AND_CROWNS.jpg") },
    { t: 'The Art of Us', href: PDP('6054221'), img: I("e4/a3/cf/67/67cfa3e49ab7822b03cb64b1/P6054221_P6054221_none_base_319fd634.png/P6054221_P6054221_none_base_319fd634.jpg") }
  ] }
];
const SLIDES = GENRE_SHELVES.length;
const CTA = (bg) => ({
  href: '#plans', variant: 'primary', size: 'lg',
  style: { background: bg, borderColor: bg, whiteSpace: 'nowrap', minWidth: 'min(320px, 100%)' }
});

const TIERS = [
  {
    key: 'monthly', name: 'Monthly', badge: '', term: 'monthly',
    price: '$9.99/month', monthly: 9.99
  },
  {
    key: 'yearly', name: 'Yearly', badge: 'Best Value', term: 'yearly',
    price: '$99/year', monthly: 9.99, yearlyTotal: 99
  }
];

class Component extends DCLogic {
  state = { faq: null, slide: 0, dir: 1 };

  componentDidMount() {
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    this._reducedMotion = !!(mq && mq.matches);
    if (!this._reducedMotion) this.startAuto();
  }
  componentWillUnmount() { clearInterval(this._t); }
  startAuto() {
    clearInterval(this._t);
    if (this._reducedMotion) return;
    this._t = setInterval(() => this.setState(s => ({ slide: (s.slide + 1) % SLIDES, dir: 1 })), 7000);
  }
  stopAuto() { clearInterval(this._t); }
  go(d) { this.setState(s => ({ slide: (s.slide + SLIDES + d) % SLIDES, dir: d })); this.startAuto(); }

  renderVals() {

    const { suOpenFn, ...suBase } = window.BspSignup.vals(this, TIERS);
    const suVals = { ...suBase,
      heroCtaProps: { ...CTA('var(--scheme-300)'), onClick: suOpenFn },
      signupCtaProps: { ...CTA('var(--db-accent-deep)'), onClick: suOpenFn }
    };
    const faq = {};
    ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'].forEach(k => {
      const isOpen = this.state.faq === k;
      faq[k + 'Open'] = isOpen;
      faq[k + 'Sign'] = isOpen ? '\u2212' : '+';
      faq[k + 'Toggle'] = () => this.setState(s => ({ faq: s.faq === k ? null : k }));
    });


    const cur = this.state.slide;
    // Carousel motion. Every state of an element uses the SAME transform-function
    // list (same functions, same order), so browsers interpolate each 3D value
    // separately instead of falling back to matrix interpolation, which is what
    // squashed the books mid-transition. Opacity lives only on leaf layers
    // (cover face + spine/page pseudo-elements via --o) because opacity < 1 on a
    // preserve-3d parent flattens its children in every engine.
    const EASE = 'cubic-bezier(.33,.02,.18,1)';
    const POP = 'cubic-bezier(.4,.05,.2,1)';
    const TURN = 1.05;
    const hv = !!this.state.shelfHover;
    const rm = !!this._reducedMotion;
    const tr = (spec) => rm ? 'none' : spec;
    const T = (x, y, z, ry, rz, sc) =>
      'translateX(' + x + '%) translateY(' + y + '%) translateZ(' + z + 'px) rotateY(' + ry + 'deg) rotate(' + rz + 'deg) scale(' + sc + ')';
    const fadeIn = { o: 1, d: '.6s', dl: '.15s' }, fadeOut = { o: 0, d: '.55s', dl: '.12s' };
    const SLOTS = [
      { key: 'left',  y: 24,  yHover: 38,  ySpin: 78,  z: -20, zHover: -6, tilt: -7, origin: 'left center',  delay: 0 },
      { key: 'mid',   y: -7,  yHover: -14, ySpin: 72,  z: 44,  zHover: 60, tilt: 0,  origin: 'left center',  delay: 0.09, mid: true },
      { key: 'right', y: -24, yHover: -38, ySpin: -78, z: -20, zHover: -6, tilt: 7,  origin: 'right center', delay: 0.18 }
    ];
    const slides = GENRE_SHELVES.map((sh, i) => {
      const on = i === cur;
      const ahead = ((i - cur + SLIDES) % SLIDES) === 1;
      const behind = ((cur - i + SLIDES) % SLIDES) === 1;
      const s = on ? 0 : (ahead ? 1 : behind ? -1 : (this.state.dir || 1));
      const d = s || 1;
      const f = on ? fadeIn : fadeOut;
      const g = {
        href: sh.cat, label: sh.n,
        style: {
          position: 'absolute', inset: 0, display: 'flex', textDecoration: 'none', color: 'inherit',
          alignItems: 'center', justifyContent: 'center', gap: 'clamp(8px, 2.2%, 22px)',
          transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          transform: on ? T(0, 0, hv ? 40 : 0, 0, 0, hv ? 1.07 : 1) : T(s * 26, 0, -300, -s * 46, 0, 1),
          visibility: on ? 'visible' : 'hidden',
          transition: tr(on
            ? 'transform ' + (hv ? '.7s ' + EASE : TURN + 's ' + POP) + ', visibility 0s linear 0s'
            : 'transform ' + TURN + 's ' + EASE + ', visibility 0s linear ' + TURN + 's'),
          pointerEvents: on ? 'auto' : 'none'
        }
      };
      SLOTS.forEach((sl, n) => {
        const side = sl.mid ? 0 : 6;
        const rest = T(0, side, hv ? sl.zHover : sl.z, hv ? sl.yHover : sl.y, hv ? sl.tilt : 0, 1);
        // off pose travels with the slide: fans further open toward the motion and sinks in Z
        const spin = sl.mid ? T(d * -8, 0, -90, sl.ySpin * d, 0, 1) : T(d * -14, side, -130, sl.ySpin * d, 0, 1);
        const delay = on && !hv ? sl.delay : 0;
        const dur = hv ? (sl.mid ? '.62s' : '.9s') : TURN + 's';
        g[sl.key] = {
          href: sh.books[n].href, label: sh.books[n].t,
          wrap: {
            position: 'relative', height: sl.mid ? '80%' : '58%', aspectRatio: '2 / 3', flex: 'none', zIndex: sl.mid ? 2 : 1,
            transform: on ? rest : spin, transformOrigin: sl.origin,
            transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d',
            transition: tr('transform ' + dur + ' ' + EASE + ' ' + delay + 's'),
            '--o': f.o, '--od': rm ? '0s' : f.d, '--odl': rm ? '0s' : f.dl
          },
          style: {
            display: 'block', width: '100%', height: '100%', borderRadius: 'var(--db-radius-sm)',
            backgroundImage: 'url(' + sh.books[n].img + ')', backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: sl.mid
              ? '0 24px 44px rgba(43,46,48,0.34), 0 2px 6px rgba(43,46,48,0.22)'
              : '0 14px 30px rgba(43,46,48,0.26), 0 2px 5px rgba(43,46,48,0.18)',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            opacity: f.o,
            transition: tr('box-shadow .8s ease, opacity ' + f.d + ' ease ' + f.dl)
          }
        };
      });
      return g;
    });
    return {
      ...faq,
      slides,
      prevSlide: () => this.go(-1),
      nextSlide: () => this.go(1),
      pauseAuto: () => { this.stopAuto(); this.setState({ shelfHover: true }); },
      resumeAuto: () => { this.startAuto(); this.setState({ shelfHover: false }); },
      slideName: GENRE_SHELVES[cur].n,
      ...suVals,
      tiers: TIERS.map(t => {
        const money = v => '$' + v.toFixed(2).replace(/\.00$/, '');
        let compare = '', save = '', annual = '';
        if (t.term === 'monthly') {
          annual = money(t.monthly * 12) + '/year total';
        } else if (t.term === 'yearly') {
          compare = money(t.monthly * 12) + '/year';
          save = 'Save ' + money(t.monthly * 12 - t.yearlyTotal);
        }
        const price = t.price;
        const slash = price.indexOf('/');
        const accent = 'var(--db-accent-deep)';
        const hairline = 'var(--db-dove)';
        return {
          name: t.name,
          nameColor: accent,
          cardProps: {
            ground: 'white',
            padding: 'none',
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(18px, 3vw, 28px)'
            }
          },
          amount: slash === -1 ? price : price.slice(0, slash),
          unit: slash === -1 ? '' : price.slice(slash),
          unitSize: '16px',
          amountSize: '38px',
          rowWhite: t.term ? 'nowrap' : 'normal',
          rowMargin: t.term ? 'clamp(6px, 1.8vw, 20px) -16px 0' : 'clamp(6px, 1.8vw, 20px) 0 0',
          compare,
          save,
          annual,
          badge: t.badge,
          hasMeta: !!(compare || save || annual)
        };
      }),

    };
  }
}

function TPL(s){return F(h("div",{style:S("font-family: var(--font-text); color: var(--label-primary); background: var(--bg-primary);")},h("section",{"data-hero-banner":"",style:S("position: relative; width: 100%; padding: clamp(20px, 3vw, 44px) 20px 40px; background-color: var(--db-granite); background-image: url('assets/bookshelf/DB_2026_FictionLandingPage-22.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;")},h("div",{style:S("display: flex; justify-content: center;")},h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: clamp(10px, 1.6vw, 22px); max-width: 900px; padding: clamp(16px, 2.4vw, 34px) clamp(20px, 3.5vw, 56px); box-sizing: border-box; background: rgba(15,128,121,0.9); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border-radius: var(--db-radius-lg); text-align: center;"),"data-hero-stack":""},h("div",{style:S("display: flex; align-items: center; justify-content: center; margin-bottom: clamp(-14px, -1.2vw, -4px);")},h("svg",{"viewBox":"0 0 768 132",style:S("display: block; width: clamp(165px, 20vw, 320px); height: auto; color: rgb(255,255,255);"),"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","role":"img","aria-hidden":"true","focusable":"false"},h("path",{"d":"M89.8203 0C120.176 6.6602e-05 145.016 24.8399 145.016 55.1992V73.2344H150.742C158.375 73.5078 165.734 76.5078 171.184 81.9609C176.637 87.4101 179.637 94.7696 179.637 102.676C179.637 110.309 176.637 117.941 171.184 123.391C165.734 128.844 158.375 131.844 150.469 131.844H136.828C132.242 131.844 128.523 128.125 128.523 123.543V55.5664C128.523 34.2774 111.105 16.8594 89.8203 16.8594C68.5273 16.8594 51.1094 34.2773 51.1094 55.5664V123.543C51.1094 128.125 47.3945 131.844 42.8086 131.844H29.168C21.2617 131.844 13.9023 128.844 8.44922 123.391C3 117.941 0 110.309 0 102.676C0 94.7695 3 87.4102 8.44922 81.9609C13.9023 76.5079 21.2617 73.5078 28.8945 73.2344H34.6172V55.1992C34.6172 24.8398 59.457 0 89.8203 0ZM28.8945 90.6836C25.625 90.6836 22.625 91.7735 20.1719 94.2266C17.9922 96.4062 16.6289 99.6758 16.6289 102.949C16.6289 106.219 17.7188 109.219 20.1719 111.672C22.3516 113.852 25.625 115.215 28.8945 115.215H32.0352C33.4609 115.215 34.6172 114.059 34.6172 112.633V93.2656C34.6172 91.8399 33.4609 90.6837 32.0352 90.6836H28.8945ZM147.602 90.6836C146.176 90.6836 145.016 91.8398 145.016 93.2656V112.633C145.016 114.059 146.176 115.215 147.602 115.215H150.742C154.012 115.215 157.285 113.852 159.465 111.672C161.918 109.219 163.008 106.219 163.008 102.949C163.008 99.6758 161.645 96.4062 159.465 94.2266C157.012 91.7735 154.012 90.6836 150.742 90.6836H147.602Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M244.535 52.1562C245.914 52.1563 247.031 53.2735 247.031 54.6562V76.6406C247.031 78.7344 249.441 79.8867 251.082 78.5898C251.922 77.9258 252.82 77.3164 253.781 76.7578C256.539 75.1641 259.949 74.3633 264.016 74.3633C269.023 74.3633 273.504 75.6133 277.461 78.1211C281.414 80.625 284.555 84.0352 286.879 88.3516C289.199 92.6719 290.359 97.625 290.359 103.211C290.359 108.656 289.199 113.555 286.879 117.91C284.555 122.262 281.434 125.676 277.516 128.141C273.598 130.605 269.133 131.844 264.125 131.844C261.438 131.844 259.027 131.516 256.887 130.863C254.746 130.211 252.855 129.285 251.227 128.086C250.758 127.742 250.305 127.387 249.875 127.016C248.488 125.82 246.34 126.453 245.84 128.215L245.695 128.719C245.395 129.793 244.41 130.535 243.293 130.535H233.203C231.824 130.535 230.703 129.418 230.703 128.039V54.6562C230.703 53.2734 231.824 52.1562 233.203 52.1562H244.535ZM260.098 88.625C257.41 88.625 255.035 89.2618 252.965 90.5312C250.898 91.8008 249.281 93.5078 248.121 95.6445C246.961 97.7891 246.383 100.309 246.383 103.211C246.383 105.973 246.961 108.457 248.121 110.668C249.281 112.883 250.898 114.59 252.965 115.785C255.035 116.984 257.41 117.582 260.098 117.582C262.711 117.582 265.051 116.965 267.117 115.73C269.187 114.5 270.801 112.809 271.961 110.668C273.125 108.527 273.703 106.043 273.703 103.211C273.703 100.383 273.125 97.8594 271.961 95.6445C270.801 93.4336 269.187 91.7109 267.117 90.4766C265.051 89.2422 262.711 88.625 260.098 88.625Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M323.781 74.3633C329.152 74.3633 333.941 75.5977 338.152 78.0664C342.359 80.5312 345.699 83.9258 348.168 88.2422C350.633 92.5625 351.867 97.5156 351.867 103.105C351.867 108.691 350.633 113.645 348.168 117.961C345.699 122.281 342.359 125.676 338.152 128.141C333.941 130.609 329.152 131.844 323.781 131.844C318.484 131.844 313.73 130.609 309.52 128.141C305.309 125.676 301.973 122.281 299.504 117.961C297.035 113.645 295.801 108.73 295.801 103.211C295.801 97.5508 297.035 92.5625 299.504 88.2422C301.973 83.9258 305.328 80.5312 309.574 78.0664C313.82 75.5977 318.555 74.3633 323.781 74.3633ZM323.891 88.5156C321.715 88.5156 319.77 89.0586 318.066 90.1484C316.359 91.2383 315 92.8711 313.984 95.0469C312.965 97.2266 312.461 99.9102 312.461 103.105C312.461 106.297 312.965 108.98 313.984 111.16C315 113.336 316.359 114.969 318.066 116.059C319.77 117.148 321.676 117.691 323.781 117.691C325.957 117.691 327.898 117.148 329.605 116.059C331.309 114.969 332.672 113.336 333.688 111.16C334.703 108.98 335.211 106.297 335.211 103.105C335.211 99.9102 334.703 97.2266 333.688 95.0469C332.672 92.8711 331.328 91.2383 329.66 90.1484C327.988 89.0586 326.066 88.5156 323.891 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M385.289 74.3633C390.656 74.3633 395.445 75.5977 399.656 78.0664C403.867 80.5312 407.203 83.9258 409.672 88.2422C412.137 92.5625 413.375 97.5156 413.375 103.105C413.375 108.691 412.137 113.645 409.672 117.961C407.203 122.281 403.867 125.676 399.656 128.141C395.445 130.609 390.656 131.844 385.289 131.844C379.988 131.844 375.234 130.609 371.027 128.141C366.816 125.676 363.477 122.281 361.012 117.961C358.543 113.645 357.309 108.73 357.309 103.211C357.309 97.5508 358.543 92.5625 361.012 88.2422C363.477 83.9258 366.836 80.5312 371.082 78.0664C375.324 75.5977 380.063 74.3633 385.289 74.3633ZM385.395 88.5156C383.219 88.5156 381.273 89.0586 379.574 90.1484C377.867 91.2383 376.504 92.8711 375.492 95.0469C374.473 97.2266 373.965 99.9102 373.965 103.105C373.965 106.297 374.473 108.98 375.492 111.16C376.504 113.336 377.867 114.969 379.574 116.059C381.273 117.148 383.18 117.691 385.289 117.691C387.465 117.691 389.406 117.148 391.113 116.059C392.816 114.969 394.176 113.336 395.195 111.16C396.211 108.98 396.719 106.297 396.719 103.105C396.719 99.9102 396.211 97.2266 395.195 95.0469C394.176 92.8711 392.832 91.2383 391.164 90.1484C389.496 89.0586 387.574 88.5156 385.395 88.5156Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M499.375 74.3633C506.266 74.3633 511.676 75.8867 515.594 78.9336C518.66 81.3203 520.75 84.3516 521.859 88.0273C522.344 89.625 521.125 91.2382 519.457 91.2383H508.938C508.012 91.2383 507.215 90.6914 506.727 89.9023C506.227 89.086 505.52 88.4258 504.598 87.918C503.219 87.1563 501.477 86.7734 499.375 86.7734C496.98 86.7734 495.164 87.1719 493.93 87.9727C492.695 88.7695 492.082 89.8242 492.082 91.1289C492.082 92 492.496 92.7812 493.332 93.4688C494.164 94.1601 495.383 94.7578 496.98 95.2656C498.574 95.7734 500.535 96.2813 502.855 96.7891C507.285 97.7344 511.113 98.75 514.344 99.8359C517.57 100.926 520.094 102.504 521.91 104.574C523.723 106.641 524.594 109.633 524.52 113.555C524.594 117.109 523.668 120.266 521.746 123.027C519.82 125.785 517.082 127.941 513.527 129.504C509.969 131.062 505.723 131.844 500.789 131.844C495.637 131.844 491.191 131.027 487.453 129.395C483.715 127.762 480.773 125.527 478.637 122.699C477.145 120.727 476.102 118.578 475.508 116.254C475.102 114.668 476.301 113.117 477.938 113.117H489.426C490.437 113.117 491.316 113.746 491.727 114.672C492.008 115.301 492.359 115.891 492.789 116.438C493.551 117.418 494.602 118.18 495.945 118.723C497.285 119.27 498.793 119.543 500.465 119.543C502.273 119.543 503.746 119.305 504.871 118.832C505.996 118.363 506.848 117.727 507.43 116.93C508.008 116.133 508.301 115.297 508.301 114.426C508.301 113.047 507.883 111.996 507.047 111.266C506.215 110.543 504.996 109.945 503.402 109.473C501.805 109 499.883 108.547 497.633 108.109C495.02 107.531 492.426 106.859 489.848 106.098C487.273 105.336 484.984 104.375 482.988 103.211C480.992 102.051 479.398 100.543 478.203 98.6953C477.004 96.8438 476.402 94.5781 476.402 91.8906C476.402 88.625 477.309 85.668 479.125 83.0156C480.938 80.3711 483.551 78.2656 486.965 76.7031C490.375 75.1445 494.512 74.3633 499.375 74.3633Z"}),h("path",{"d":"M621.297 74.3633C626.812 74.3633 631.641 75.5625 635.777 77.957C639.914 80.3516 643.16 83.6016 645.52 87.6992C647.879 91.8008 649.059 96.5352 649.059 101.906C649.059 102.633 649.039 103.449 649.004 104.355C648.996 104.504 648.988 104.652 648.98 104.801C648.902 106.113 647.793 107.133 646.477 107.133H611.957C610.316 107.133 609.07 108.699 609.539 110.273C609.754 111 610.027 111.695 610.355 112.355C611.336 114.316 612.754 115.84 614.602 116.93C616.453 118.016 618.648 118.562 621.188 118.562C623.582 118.562 625.559 118.07 627.121 117.094C628.324 116.336 629.324 115.418 630.117 114.34C630.582 113.707 631.324 113.336 632.109 113.336H643.801C645.637 113.336 646.852 115.25 646.07 116.91C645.082 119.004 643.793 120.949 642.199 122.754C639.73 125.547 636.719 127.762 633.164 129.395C629.606 131.027 625.687 131.844 621.406 131.844C615.746 131.844 610.773 130.664 606.492 128.305C602.211 125.945 598.852 122.645 596.422 118.398C593.992 114.152 592.773 109.273 592.773 103.758C592.773 98.0938 593.973 93.0508 596.367 88.625C598.766 84.1992 602.102 80.7148 606.383 78.1758C610.664 75.6329 615.637 74.3633 621.297 74.3633ZM621.406 87.5352C619.086 87.5352 616.977 88.0821 615.094 89.168C613.203 90.2578 611.699 91.8906 610.574 94.0664C610.57 94.0781 610.562 94.0898 610.559 94.0977C609.723 95.7266 610.992 97.6602 612.824 97.6602H629.414C631.129 97.6601 632.352 95.9609 631.781 94.3398C631.234 92.7774 630.336 91.4336 629.082 90.3125C627.012 88.461 624.453 87.5352 621.406 87.5352Z","fillRule":"evenodd","clipRule":"evenodd"}),h("path",{"d":"M107.336 44.9297C108.223 44.754 109.078 45.3399 109.246 46.2266L124.461 127.805C124.625 128.684 124.051 129.527 123.172 129.699L113.824 131.527C112.938 131.699 112.082 131.117 111.914 130.23L96.7031 48.6523C96.5391 47.7734 97.1133 46.9297 97.9883 46.7578L107.336 44.9297Z"}),h("path",{"d":"M69.0664 45.1602C69.9648 45.1602 70.6914 45.8868 70.6914 46.7852V129.672C70.6914 130.57 69.9648 131.297 69.0664 131.297H60.8789C59.9805 131.297 59.2539 130.57 59.2539 129.672V46.7852C59.2539 45.8867 59.9805 45.1602 60.8789 45.1602H69.0664Z"}),h("path",{"d":"M91.6914 30.7109C92.5859 30.711 93.3164 31.4414 93.3164 32.3398V129.672C93.3164 130.57 92.5859 131.297 91.6914 131.297H77.9648C77.0703 131.297 76.3398 130.57 76.3398 129.672V32.3398C76.3398 31.4414 77.0703 30.7109 77.9648 30.7109H91.6914Z"}),h("path",{"d":"M434.277 52.1562C435.66 52.1563 436.777 53.2735 436.777 54.6562V90.4922C436.777 92.8477 439.734 93.8945 441.215 92.0664L453.773 76.5938C454.246 76.0079 454.957 75.668 455.711 75.668H468.375C470.508 75.6681 471.66 78.168 470.277 79.7891L453.609 99.3359C452.816 100.266 452.812 101.637 453.605 102.57L473.793 126.422C475.168 128.047 474.016 130.535 471.887 130.535H458.273C457.488 130.535 456.746 130.168 456.277 129.543L441.273 109.633C439.828 107.715 436.777 108.738 436.777 111.137V128.039C436.777 129.418 435.66 130.535 434.277 130.535H422.949C421.566 130.535 420.449 129.418 420.449 128.039V54.6562C420.449 53.2734 421.566 52.1562 422.949 52.1562H434.277Z"}),h("path",{"d":"M545.102 52.1562C546.48 52.1563 547.598 53.2735 547.598 54.6562V76.9805C547.598 79.082 550.035 80.2461 551.664 78.9141C552.586 78.1602 553.59 77.4765 554.676 76.8672C557.648 75.1993 561.133 74.3633 565.125 74.3633C569.769 74.3633 573.652 75.3438 576.773 77.3047C579.894 79.2617 582.254 82.1133 583.848 85.8477C585.445 89.5859 586.246 94.1055 586.246 99.4023V128.035C586.246 129.418 585.125 130.535 583.746 130.535H572.523C571.145 130.535 570.023 129.418 570.023 128.035V100.926C570.023 96.8633 569.172 93.7031 567.465 91.4531C565.758 89.2071 563.059 88.0781 559.355 88.0781C557.18 88.0781 555.18 88.625 553.371 89.7148C551.555 90.8008 550.137 92.3438 549.121 94.3398C548.105 96.3359 547.598 98.7148 547.598 101.469V128.035C547.598 129.418 546.48 130.535 545.102 130.535H533.77C532.387 130.535 531.27 129.418 531.27 128.035V54.6562C531.27 53.2734 532.387 52.1562 533.77 52.1562H545.102Z"}),h("path",{"d":"M669.418 52.1562C670.801 52.1563 671.918 53.2735 671.918 54.6562V128.039C671.918 129.418 670.801 130.535 669.418 130.535H658.086C656.707 130.535 655.59 129.418 655.59 128.039V54.6562C655.59 53.2734 656.707 52.1562 658.086 52.1562H669.418Z"}),h("path",{"d":"M707.305 52.1562C708.684 52.1563 709.801 53.2735 709.801 54.6562V63.4844C709.801 64.8632 708.684 65.9804 707.305 65.9805H705.449C703.199 65.9805 701.602 66.418 700.656 67.2891C699.715 68.1602 699.242 69.6484 699.242 71.75V73.1719C699.242 74.5508 700.363 75.668 701.742 75.668H708.066C709.445 75.668 710.566 76.7891 710.566 78.168V86.7773C710.566 88.1601 709.445 89.2773 708.066 89.2773H701.742C700.363 89.2773 699.242 90.3984 699.242 91.7773V128.039C699.242 129.418 698.125 130.535 696.746 130.535H685.414C684.031 130.535 682.914 129.418 682.914 128.039V91.7773C682.914 90.3985 681.793 89.2774 680.414 89.2773H678.227C676.848 89.2773 675.73 88.1602 675.73 86.7773V78.168C675.73 76.7891 676.848 75.668 678.227 75.668H680.414C681.793 75.6679 682.914 74.5507 682.914 73.1719V71.75C682.914 66.9609 683.746 63.1328 685.418 60.2656C687.086 57.3985 689.426 55.332 692.441 54.0586C695.449 52.793 698.914 52.1562 702.836 52.1562H707.305Z"}),h("path",{"d":"M746.742 74.3633C747.934 74.3633 748.898 75.3282 748.898 76.5195V90.4766C748.898 91.668 749.863 92.6328 751.055 92.6328H765.012C766.203 92.6329 767.168 93.6016 767.168 94.793V105.004C767.168 106.195 766.203 107.164 765.012 107.164H751.055C749.863 107.164 748.898 108.129 748.898 109.32V123.277C748.898 124.469 747.934 125.434 746.742 125.434H736.527C735.336 125.434 734.371 124.469 734.371 123.277V109.32C734.371 108.129 733.402 107.164 732.215 107.164H718.258C717.062 107.164 716.098 106.195 716.098 105.004V94.793C716.098 93.6016 717.062 92.6328 718.258 92.6328H732.215C733.402 92.6327 734.371 91.6679 734.371 90.4766V76.5195C734.371 75.3281 735.336 74.3633 736.527 74.3633H746.742Z"}))),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px, 3.8vw, 60px); line-height: 1.12; letter-spacing: -1px; color: rgb(255,255,255);")},"Thousands of Stories. ",h("br",{}),"Zero Surprises."),h("h1",{style:S("margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: clamp(14px, 1.6vw, 26px); line-height: 1.3; color: var(--db-dove);")},"Your clean fiction library-romance, mystery, fantasy, & more. ",h("br",{}),"All in one app."),h("div",{"data-hero-cta":"","data-cta":"",style:S("display: none; justify-content: center; width: 100%; margin-top: 16px;")},h(C("Button"),Object.assign({},V(s,"heroCtaProps"),{}),"Start 14-day free trial"))))),h("section",{"id":"plans",style:S("padding: clamp(24px, 5vw, 40px) clamp(12px, 4vw, 20px) clamp(24px, 4vw, 40px); background-color: rgb(255,255,255)")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("div",{style:S("max-width: 760px; margin: 0 auto clamp(24px, 3.5vw, 36px); text-align: center; display: flex; flex-direction: column; gap: 12px;")},h("h2",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(26px, 3.2vw, 42px); line-height: 1.18; letter-spacing: -0.4px; color: var(--db-display); text-wrap: balance;")},"Tired of getting 3 chapters in...",h("br",{})," and wishing you hadn't?"),h("p",{style:S("margin: 0; font-family: var(--db-font-sans); font-size: clamp(15px, 1.2vw, 18px); line-height: 1.55; color: var(--db-ink-muted); text-wrap: pretty;")},"Every Bookshelf+ title is hand-curated so you never have to worry about inappropriate content.")),h("div",{style:S("margin-bottom: clamp(32px, 5vw, 56px); display: flex; flex-direction: column; align-items: center; gap: 4px;")},h("div",{"onMouseEnter":V(s,"pauseAuto"),"onMouseLeave":V(s,"resumeAuto"),style:S("position: relative; width: min(100%, 640px); aspect-ratio: 16 / 9; border-radius: var(--db-radius-sm); perspective: 1200px; perspective-origin: 50% 50%; background: radial-gradient(ellipse 62% 70% at 50% 54%, rgba(174,230,252,0.62) 0%, rgba(174,230,252,0.30) 45%, rgba(174,230,252,0) 78%);")},(A(V(s,"slides")).map((it,i)=>((s)=>F({key:i},h("div",{"role":"group","aria-label":V(s,"g.label"),style:S(V(s,"g.style"))},h("div",{style:S(V(s,"g.left.wrap")),className:"bspx-63 bspx-64"},h("a",{"href":V(s,"g.left.href"),"aria-label":V(s,"g.left.label"),style:S(V(s,"g.left.style"))})),h("div",{style:S(V(s,"g.mid.wrap")),className:"bspx-65 bspx-66"},h("a",{"href":V(s,"g.mid.href"),"aria-label":V(s,"g.mid.label"),style:S(V(s,"g.mid.style"))})),h("div",{style:S(V(s,"g.right.wrap")),className:"bspx-67 bspx-68"},h("a",{"href":V(s,"g.right.href"),"aria-label":V(s,"g.right.label"),style:S(V(s,"g.right.style"))})))))(Object.assign({},s,{"g":it})))),h(C("CarouselChevronButton"),{"direction":"prev","label":"Previous genre","onClick":V(s,"prevSlide")}),h(C("CarouselChevronButton"),{"direction":"next","label":"Next genre","onClick":V(s,"nextSlide")})),h("span",{style:S("position: relative; z-index: 5; margin-top: -26px; width: min(50%, 320px); padding: 10px 20px; box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; gap: 12px; border-radius: var(--db-radius-pill); background: rgba(233,224,209,0.3); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); font-family: var(--db-font-serif); font-size: 21px; line-height: 1.4; color: var(--db-ink); text-align: center; min-height: 28px;")},h("span",{"aria-hidden":"true",style:S("flex: none; font-family: var(--db-font-sans); font-size: 24px; line-height: 1; color: rgb(201,178,140); opacity: 0.35; mix-blend-mode: overlay;")},"✻"),h("span",{style:S("flex: 1; min-width: 0;")},V(s,"slideName")),h("span",{"aria-hidden":"true",style:S("flex: none; font-family: var(--db-font-sans); font-size: 24px; line-height: 1; color: rgb(201,178,140); opacity: 0.35; mix-blend-mode: overlay;")},"✻"))),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(14px, 3vw, 32px);")},(A(V(s,"tiers")).map((it,i)=>((s)=>F({key:i},h(C("Card"),Object.assign({},V(s,"t.cardProps"),{}),h("span",{style:S("display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;")},h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); line-height: 1.5; text-transform: uppercase; text-align: center; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.name")),((V(s,"t.badge"))?F(h("span",{style:S("padding: 4px 12px; border-radius: var(--db-radius-pill); background: var(--db-orange-100); color: var(--scheme-500); font-family: var(--db-font-sans); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;")},V(s,"t.badge"))):null)),h("span",{style:S("display: flex; align-items: baseline; justify-content: center; gap: 4px; margin: "+T(V(s,"t.rowMargin"))+"; white-space: "+T(V(s,"t.rowWhite"))+";")},h("span",{style:S("font-family: var(--db-font-serif); font-size: "+T(V(s,"t.amountSize"))+"; font-weight: var(--db-weight-serif-regular); line-height: 1.2; text-align: center; text-wrap: pretty; color: var(--db-display);")},V(s,"t.amount")),((V(s,"t.unit"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: "+T(V(s,"t.unitSize"))+"; white-space: nowrap; color: var(--db-ink-muted);")},V(s,"t.unit"))):null)),((V(s,"t.hasMeta"))?F(h("span",{style:S("display: flex; align-items: baseline; justify-content: center; flex-wrap: wrap; gap: 4px 10px; margin-top: var(--db-space-3);")},((V(s,"t.compare"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; text-decoration: line-through; color: var(--db-ink-muted);")},V(s,"t.compare"))):null),((V(s,"t.save"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: var(--db-text-label); font-weight: var(--db-weight-sans-regular); letter-spacing: var(--db-tracking-label); text-transform: uppercase; color: "+T(V(s,"t.nameColor"))+";")},V(s,"t.save"))):null),((V(s,"t.annual"))?F(h("span",{style:S("font-family: var(--db-font-sans); font-size: 15px; color: var(--db-ink-muted);")},V(s,"t.annual"))):null))):null))))(Object.assign({},s,{"t":it}))))),h("div",{style:S("display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: clamp(24px, 3.5vw, 36px);")},h("div",{"data-cta-teal":"",style:S("display: flex; justify-content: center; width: 100%;")},h(C("Button"),Object.assign({},V(s,"signupCtaProps"),{}),"Sign up today")),h("p",{style:S("margin: 0; text-align: center; font-family: var(--db-font-sans); font-size: 13px; line-height: 1.4; color: var(--db-ink-muted);")},"Cancel any time.")),h("section",{style:S("max-width: 1280px; margin: 0 auto; padding: clamp(32px, 5vw, 56px) 0 0;")},h("h1",{style:S("margin: 0 0 48px; text-align: center; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.2; letter-spacing: 0; color: var(--db-display); text-wrap: balance;")},"You'll Get Exclusive Access To"),h("ul",{"data-perks-grid":"",style:S("list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 40px 32px; margin: 0; padding: 0; justify-content: center;")},h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_UnlimitedListening.jpg","alt":"Unlimited Listening",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Unlimited Listening")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_Wholesome.jpg","alt":"Guaranteed Clean Content",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Guaranteed Clean Content")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/ebooks-square-03.jpg","alt":"4,000+ Audiobooks & eBooks",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"4,000+ Audiobooks & eBooks")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_ExclusiveContent.jpg","alt":"Exclusive Podcasts",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"Exclusive Podcasts")),h("li",{style:S("display: flex; flex-direction: column; align-items: center; gap: 16px;")},h("img",{"src":"assets/img/dw/DB_2025_4Across_BookshelfPLUSNew_NewAudiobooks.jpg","alt":"New Audiobooks on Release Day",style:S("display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--db-hairline); border-radius: var(--db-radius-sm);")}),h("span",{style:S("font-family: var(--db-font-sans); font-size: 17px; font-weight: 400; line-height: 1.5; color: var(--db-ink); text-align: center; text-wrap: pretty;")},"New Audiobooks on Release Day")))))),h("section",{style:S("background: var(--db-dove); padding: 40px 20px 64px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 56px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.2vw, 44px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"What People are Saying"),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 44px;")},h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“We’ve listened to dozens of books for the price of three hard copies.”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I’m a busy mom…This app makes reading so much easier for me!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review")),h("div",{style:S("position: relative; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 320px; margin-top: 40px; padding: 76px 26px 26px; background: rgb(255,255,255); border: 1px solid rgb(16,122,118); border-radius: var(--db-radius-lg);")},h("span",{style:S("position: absolute; top: -40px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; box-sizing: border-box; border-radius: var(--db-radius-pill); background: var(--db-dove); border: 1px solid rgb(16,122,118); font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgb(0,122,118); padding-top: 34px;")},"”"),h("p",{style:S("margin: 0; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(20px, 1.9vw, 27px); line-height: 1.35; color: rgb(0,122,118);")},"“I love the variety of books found here!”"),h("span",{style:S("margin-top: 28px; font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--db-ink-muted);")},"—Customer Review"))))),h("section",{style:S("background: var(--db-dove); padding: 56px 20px 72px;")},h("div",{style:S("max-width: 1180px; margin: 0 auto;")},h("h2",{style:S("margin: 0 0 30px; text-align: center; font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px, 3.4vw, 46px); letter-spacing: -0.4px; color: var(--db-charcoal);")},"Frequently Asked Questions"),h(C("Accordion"),{className:"bsp-faq",items:[{title:"What is Bookshelf+?",content:h("p",{style:S("margin: 0;")},h("strong",{style:S("color: var(--db-charcoal);")},"Bookshelf+ is a digital subscription that gives you unlimited access to Deseret Book's entire digital audiobook library—"),"including books from gospel leaders, a full library of clean and compelling fiction, inspiring audiobooks, exclusive podcasts, and more. It's like having an uplifting library in your pocket, wherever you go.")},{title:"Is there a free trial?",content:h("p",{style:S("margin: 0;")},"Yes! You get 7 days to try Bookshelf+ risk-free. Just sign up, and you won't be charged if you cancel before the 7-day trial ends. No commitment, no fees. One free trial per customer.")},{title:"Where can I use Bookshelf+?",content:h("p",{style:S("margin: 0;")},"Anywhere, anytime. Just download the ",h("strong",{style:S("color: var(--db-charcoal);")},"Deseret Bookshelf app")," from the ",h("a",{"href":"https://apps.apple.com/us/app/deseret-bookshelf-lds-books/id428709147"},"App Store")," or ",h("a",{"href":"https://play.google.com/store/apps/details?id=com.deseretdigital.bookshelf&hl=en_US"},"Google Play")," and log in to access your subscription on your phone or tablet.",h("br",{}),"Prefer desktop? You can also read and listen at ",h("strong",{},h("a",{"href":"https://read.deseretbook.com/"},"read.deseretbook.com"))," on any browser.")},{title:"Can I cancel anytime?",content:h("p",{style:S("margin: 0;")},"Yes, Bookshelf+ is flexible. You can cancel anytime through your account settings at DeseretBook.com.")},{title:"What happens if I cancel? Will I lose my books?",content:h("p",{style:S("margin: 0;")},"If you cancel, you'll lose access to the full Bookshelf+ library. However, any individual books you've purchased separately (a la carte) will still be accessible through the Deseret Bookshelf app.")}]}),h("h4",{style:S("margin: 26px 0 0; text-align: center; font-family: var(--font-text); font-size: 16px; font-weight: 400; color: var(--db-charcoal);")},"View Bookshelf ",h("a",{"href":"#plans",style:S("color: inherit; text-decoration: underline;")},"Terms and Conditions")))),h(window.BspSignupDialog,{s:s,V:V})));}
window.BSP_PAGES["fiction-platinum"]=Component;
})();

/* subscriptions */
(function(){
var DCLogic=function(){};
DCLogic=class extends React.Component{render(){var v=this.renderVals?this.renderVals():{};var s=Object.assign({},this.props,v);return TPL(s);}};

const PRICES = { reg: { m: 12.99, y: 129 }, plat: { m: 9.99, y: 99 } };
const RENEW = 'October 28, 2026', TRIAL_END = 'October 14, 2026', GIFT_END = 'January 5, 2027';
const RESUME = { 1: 'November 28, 2026', 2: 'December 28, 2026', 3: 'January 28, 2027' };
/* Follow-up for "I can't find enough to read or listen to": what they'd like to see more of (optional, several allowed). */
const CONTENT_KINDS = ['Scripture study and doctrine', 'Talks and devotionals', 'Church history and biographies', 'Family and self-improvement', 'Fiction', 'Romance', 'Mystery and suspense', 'Fantasy and science fiction', 'Children\u2019s and teen books', 'Podcasts'];
/* Reasons are worded in the customer's own voice; each one gets the follow-up that answers it (see offerFor and reasonList). */
const R_PRICE = 'It\u2019s too expensive', R_USE = 'I\u2019m not using it enough', R_CONTENT = 'I can\u2019t find enough to read or listen to',
  FEATURE_REASON = 'It\u2019s missing a feature I want', R_TECH = 'The app isn\u2019t working properly', R_SWITCH = 'I\u2019m switching to another service', R_OTHER = 'Something else';
/* Services offered under "I'm switching to another service" (optional, one choice). */
const SWITCH_TO = ['Audible', 'Kindle Unlimited', 'Spotify', 'Libby', 'Everand', 'Apple Books', 'Chirp', 'Another service'];
const REASONS = [R_PRICE, R_USE, R_CONTENT, FEATURE_REASON, R_TECH, R_SWITCH, R_OTHER];
/* Reasons for leaving show in a new random order each time the cancel flow opens (so the first option isn't favored);
   "Something else" always stays last. */
const shuffledReasons = () => {
  const r = REASONS.filter(x => x !== R_OTHER);
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r.concat(R_OTHER);
};
/* An accepted retention discount is remembered here (it is a one-time offer per account), so the account page's
   subscription details show it and the cancel flow never offers it again. */
const DISCOUNT_KEY = 'db-bsp-discount';
const money = n => '$' + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, '');
const short = d => d.replace('October', 'Oct').replace('November', 'Nov').replace('December', 'Dec').replace('January', 'Jan');

class Component extends DCLogic {
  constructor(props) { super(props); this.state = this.initial(); }
  initial() {
    const p = this.props || {};
    let saved = null; try { saved = JSON.parse(localStorage.getItem('db-bsp-status') || 'null'); } catch (e) {}
    let disc = false; try { disc = localStorage.getItem(DISCOUNT_KEY) === '1'; } catch (e) {}
    return { screen: p.startScreen ?? 'subs', platinum: p.platinum ?? true, plan: p.plan ?? 'monthly', status: p.startState ?? (saved && saved.status) ?? 'active',
      scenario: p.scenario ?? 'standard', reason: '', otherText: '', featureText: '', switchTo: '', wantKinds: [], wantText: '', pauseMonths: (saved && saved.pauseMonths) || 1, discount: disc, promoOpen: false,
      reasonOrder: shuffledReasons(),
      toast: '', toastOpen: false, toastSeq: 0 };
  }
  componentDidUpdate(prev, prevState) {
    const st = this.state;
    if (prevState && (prevState.status !== st.status || prevState.pauseMonths !== st.pauseMonths || prevState.scenario !== st.scenario)) {
      const endDate = st.scenario === 'trial' ? TRIAL_END : st.scenario === 'gift' ? GIFT_END : RENEW;
      try { if (st.status === 'active') localStorage.removeItem('db-bsp-status'); else localStorage.setItem('db-bsp-status', JSON.stringify({ status: st.status, endDate, resume: RESUME[st.pauseMonths], pauseMonths: st.pauseMonths, from: RENEW })); } catch (e) {}
    }
    if (prevState && prevState.discount !== st.discount) { try { if (st.discount) localStorage.setItem(DISCOUNT_KEY, '1'); else localStorage.removeItem(DISCOUNT_KEY); } catch (e) {} }
    if (['platinum', 'plan', 'startState', 'scenario'].some(k => prev[k] !== this.props[k])) this.setState(this.initial());
  }
  /* flowOnly: the standalone cancel flow (#/bookshelf-plus/cancel). Leaving the flow (back to details) saves state and returns via onExit.
     onStartCancel: set by the account page so "Cancel subscription" opens that standalone flow instead of continuing inline. */
  go(screen, extra) {
    const p = this.props || {};
    if (p.flowOnly && (screen === 'details' || screen === 'subs')) { this._leaving = true; this.setState({ ...(extra || {}) }, () => p.onExit && p.onExit()); return; }
    this.setState({ screen, ...(extra || {}) }); window.scrollTo(0, 0);
  }
  flash(toast) {
    if (this._leaving && this.props.onFlash) { this.props.onFlash(toast); return; }
    this.setState(s => ({ toast, toastOpen: true, toastSeq: s.toastSeq + 1 }));
  }
  offerFor(reason) {
    const s = this.state;
    if (s.status === 'paused') return reason === R_TECH ? 'support' : null;
    if (s.scenario === 'trial') return reason === R_TECH ? 'support' : null;
    switch (reason) {
      case R_USE: return 'pause';
      case R_PRICE: return s.discount ? null : 'discount';
      case R_TECH: return 'support';
      /* No offer: switching asks which service, content shows what's new, the rest ask for a few words. */
      default: return null;
    }
  }
  reactivate(priceText) {
    this.go('details', { status: 'active' });
    const trial = this.state.scenario === 'trial';
    this.flash(trial ? 'Your free trial continues. First charge ' + priceText + ' on ' + TRIAL_END + '.' : 'Bookshelf+ is active again. Next renewal ' + RENEW + ' at ' + priceText + '.');
  }

  renderVals() {
    const s = this.state;
    const tier = s.platinum ? PRICES.plat : PRICES.reg;
    const monthly = s.plan === 'monthly';
    const trial = s.scenario === 'trial', gift = s.scenario === 'gift';
    const scheduled = s.status === 'scheduled', paused = s.status === 'paused';
    const endDate = trial ? TRIAL_END : gift ? GIFT_END : RENEW;
    const priceText = monthly ? money(tier.m) + '/month' : money(tier.y) + '/year';
    const regPriceText = monthly ? money(PRICES.reg.m) + '/month' : money(PRICES.reg.y) + '/year';
    const half = monthly ? money(tier.m * 0.75) + '/month' : money(tier.y * 0.75) + '/year';
    const resume = RESUME[s.pauseMonths];
    const nav = screen => e => { if (e && e.preventDefault) e.preventDefault(); this.go(screen); };

    let statusLabel = 'Active', statusTone = 'accent';
    if (scheduled) { statusLabel = 'Ends ' + short(endDate); statusTone = 'yellow'; }
    else if (paused) { statusLabel = 'Pauses ' + short(RENEW); statusTone = 'clay'; }
    else if (trial) { statusLabel = 'Free trial'; }
    else if (gift) { statusLabel = 'Gift'; statusTone = 'sand'; }

    let listLine = 'Renews ' + RENEW;
    if (scheduled) listLine = 'Access until ' + endDate + '. No further charges.';
    else if (paused) listLine = 'Paused from ' + RENEW + '. Billing resumes ' + resume + '.';
    else if (trial) listLine = 'Free trial ends ' + TRIAL_END + '. First charge of ' + priceText + ' on that date.';
    else if (gift) listLine = 'Access until ' + GIFT_END + '. Doesn\u2019t renew.';

    let dateLabel = 'Next renewal', dateValue = RENEW;
    if (scheduled) { dateLabel = 'Access until'; dateValue = endDate; }
    else if (paused) { dateLabel = 'Billing resumes'; dateValue = resume; }
    else if (trial) { dateLabel = 'Trial ends'; dateValue = TRIAL_END; }
    else if (gift) { dateLabel = 'Access until'; dateValue = GIFT_END; }

    const priceNotes = [];
    if (s.platinum) priceNotes.push('Platinum member price, applied automatically');
    /* Accepted retention discount: its own row in the details list (shown while the subscription is active). */
    const discountLine = s.discount && !gift && !scheduled
      ? '25% off: ' + (monthly ? half + ' for your next 2 months, then ' + priceText : half + ' for your next year, then ' + priceText) : '';

    let notice = null;
    if (scheduled) notice = { text: 'Your subscription ends on ' + endDate + '. You have full access until then and won\u2019t be charged again.', cta: 'Keep Bookshelf+', action: () => this.reactivate(priceText) };
    else if (paused) notice = { text: 'Bookshelf+ pauses on ' + RENEW + '. You won\u2019t be charged while it\u2019s paused. Billing and access resume on ' + resume + '.', cta: 'Don\u2019t pause', action: () => { this.setState({ status: 'active' }); this.flash('Pause removed. Next renewal ' + RENEW + '.'); } };
    else if (trial) notice = { text: 'You\u2019re in your 14-day free trial. Cancel before ' + TRIAL_END + ' and you won\u2019t be charged.' };

    const offerKind = this.offerFor(s.reason);
    const offers = {
      yearly: { badge: s.platinum ? 'Your Platinum price' : 'Yearly plan', title: 'Save ' + money(tier.m * 12 - tier.y) + ' a year with the yearly plan.',
        body: 'Switch to yearly for ' + money(tier.y) + '/year instead of ' + money(tier.m * 12) + ' for 12 monthly payments. The yearly plan starts ' + RENEW + ', when your current month ends.', accept: 'Switch to yearly',
        done: 'You\u2019re staying. Your yearly plan starts ' + RENEW + ' at ' + money(tier.y) + '/year.' },
      monthly: { badge: s.platinum ? 'Your Platinum price' : '', title: 'Pay monthly instead.',
        body: 'Switch to ' + money(tier.m) + '/month when your current year ends on ' + RENEW + '. You can cancel any month after that.', accept: 'Switch to monthly',
        done: 'You\u2019ll move to ' + money(tier.m) + '/month on ' + RENEW + '.' },
      pause: { title: 'Take a break instead.', isPause: true,
        body: 'Pause for 1, 2 or 3 months. You won\u2019t be charged, and your library, downloads and listening progress stay right where you left them.',
        note: 'The pause starts ' + RENEW + '. Billing and access resume ' + resume + '.', accept: 'Pause my membership',
        done: 'Bookshelf+ will pause on ' + RENEW + ' and resume ' + resume + '.' },
      discount: { badge: 'Offer for you', title: 'Stay for 25% off.',
        body: monthly ? 'Get your next 2 months for ' + half + ', then ' + money(tier.m) + '/month after that.' : 'Renew for ' + half + ' instead of ' + money(tier.y) + '/year.',
        note: 'This is a one-time offer: it can be used once per account and won\u2019t be offered again, even if you cancel later.',
        accept: 'Accept offer', done: 'Offer applied. ' + (monthly ? 'Your next 2 months are ' + half + '.' : 'Your next year is ' + half + '.') },
      support: { title: 'Talk to someone now.', body: 'Most playback, download and sign-in problems take just a few minutes to fix. Our support team can walk you through it.',
        accept: 'Contact support', done: 'This would open Deseret Book support.', stay: true }
    };
    const offer = offers[offerKind] || { title: '', body: '', accept: '' };
    /* Reason rows: each reason carries its own follow-up (an offer, a question or a text box), shown inside its row when it's selected. */
    const reasonRows = (s.reasonOrder || []).map(r => { const k = this.offerFor(r); return { r, sel: s.reason === r, offer: offers[k] || null }; });

    return {
      platinum: s.platinum, plan: s.plan, scenario: s.scenario,
      onPlat: e => this.setState({ platinum: !!(e && e.target ? e.target.checked : !s.platinum) }),
      planOptions: [{ value: 'monthly', label: 'Monthly plan' }, { value: 'yearly', label: 'Yearly plan' }],
      onPlan: e => this.setState({ plan: e.target.value }),
      scenarioOptions: [{ value: 'standard', label: 'Billed on deseretbook.com' }, { value: 'trial', label: 'In free trial' }, { value: 'gift', label: 'Gift (doesn\u2019t renew)' }],
      onScenario: e => this.go('subs', { scenario: e.target.value, status: 'active', discount: false }),
      reset: () => { this.setState(this.initial()); window.scrollTo(0, 0); },
      noop: e => e.preventDefault(),

      isSubs: s.screen === 'subs', isDetails: s.screen === 'details', isReason: s.screen === 'reason',
      isOffer: s.screen === 'offer', isConfirm: s.screen === 'confirm', isDone: s.screen === 'done',
      goSubs: this.props.onExit ? (e => { if (e && e.preventDefault) e.preventDefault(); this.props.onExit(); }) : nav('subs'), goDetails: nav('details'), goReason: nav('reason'), goConfirm: nav('confirm'),
      startCancel: () => (this.props.onStartCancel ? this.props.onStartCancel() : this.go('reason', { reason: '', otherText: '', featureText: '', switchTo: '', wantKinds: [], wantText: '', reasonOrder: shuffledReasons() })),
      backFromConfirm: () => this.go(offerKind ? 'offer' : 'reason'),

      planName: gift ? 'Gift' : monthly ? 'Monthly' : 'Yearly',
      statusLabel, statusTone, listLine, dateLabel, dateValue, endDate, notice,
      showPriceLine: !gift, priceText, regPriceText, priceNote: priceNotes.join(' · '), discountLine,
      billedThrough: gift ? 'Gift subscription' : 'Visa ending in 4242',
      giftInfo: gift,
      giftRenew: () => this.flash('This would open plan selection, starting ' + GIFT_END + '.'),
      canCancel: !gift && !scheduled,
      showPromo: !s.platinum && !gift && !scheduled && !trial,
      promoOpen: s.promoOpen,
      promoIcon: s.promoOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
      togglePromo: () => this.setState({ promoOpen: !s.promoOpen }),

      reasonOptions: s.reasonOrder, reasonRows,
      reason: s.reason,
      pickReason: v => { const label = v && v.target ? v.target.value : v; this.setState({ reason: label }); },
      noReason: !s.reason,
      isOther: s.reason === R_OTHER, otherText: s.otherText,
      onOtherText: e => this.setState({ otherText: e.target.value }),
      featureReason: FEATURE_REASON, isFeature: s.reason === FEATURE_REASON, featureText: s.featureText || '', onFeatureText: e => this.setState({ featureText: e.target.value }),
      isContent: s.reason === R_CONTENT,
      reasonIds: { content: R_CONTENT, other: R_OTHER, sw: R_SWITCH },
      switchOptions: SWITCH_TO.map(x => ({ value: x, label: x })), switchTo: s.switchTo || '', pickSwitch: v => this.setState({ switchTo: v && v.target ? v.target.value : v }),
      contentKinds: CONTENT_KINDS.map(k => ({ k, on: (s.wantKinds || []).indexOf(k) > -1, toggle: () => this.setState(st => { const w = st.wantKinds || []; return { wantKinds: w.indexOf(k) > -1 ? w.filter(x => x !== k) : w.concat(k) }; }) })),
      wantText: s.wantText || '', onWantText: e => this.setState({ wantText: e.target.value }),
      continueReason: () => this.go(this.offerFor(s.reason) ? 'offer' : 'confirm'),
      skipReason: () => this.go('confirm', { reason: '' }),

      offer, hasOffer: !!offerKind,
      pauseOptions: [{ value: '1', label: '1 month' }, { value: '2', label: '2 months' }, { value: '3', label: '3 months' }],
      pauseValue: String(s.pauseMonths),
      pickPause: v => this.setState({ pauseMonths: Number(v && v.target ? v.target.value : v) }),
      acceptOffer: () => {
        /* Technical issues: open Contact Us on the message form with the Deseret Bookshelf topic chosen. */
        if (offerKind === 'support') { location.hash = '#/info/contact-us/ct-message/downloads'; return; }
        if (offer.stay) { this.flash(offer.done); return; }
        const patch = offerKind === 'yearly' ? { plan: 'yearly' } : offerKind === 'monthly' ? { plan: 'monthly' } : offerKind === 'pause' ? { status: 'paused' } : { discount: true };
        this.go('details', patch); this.flash(offer.done);
      },

      confirmText: trial
        ? 'You\u2019re in your free trial, so you won\u2019t be charged. You\u2019ll keep full access until ' + endDate + ', when your trial ends.'
        : 'Billing stops at the end of your current period. You\u2019ll keep full access until ' + endDate + ', and you won\u2019t be charged again.',
      keepList: ['Unlimited listening and reading across 4,000+ audiobooks and eBooks', 'Exclusive podcasts', 'New audiobooks on release day'],
      afterList: ['Bookshelf+ titles are no longer available to listen to or read', 'Books you purchased stay in your library', 'You can subscribe again any time'],
      showRefund: !trial,
      /* Demo: confirming a cancellation resets the flow, so an accepted discount never carries into the next run. */
      confirmCancel: () => this.go('done', { status: 'scheduled', discount: false, reason: '', otherText: '', featureText: '', switchTo: '', wantKinds: [], wantText: '', pauseMonths: 1 }),
      doneText: 'You\u2019ll have access to Bookshelf+ until ' + endDate + '. ' + (trial ? 'Your trial won\u2019t convert to a paid plan, and you won\u2019t be charged.' : 'You won\u2019t be charged again.'),
      reactivate: () => this.reactivate(priceText),
      toast: s.toast, toastOpen: s.toastOpen, toastSeq: s.toastSeq,
      hideToast: () => this.setState({ toastOpen: false })
    };
  }
}

/* Cancel flow, reasons for leaving: one full-width row per reason (a radio group). A row is white, turns Pearl when selected
   and opens to show that reason's follow-up: its offer, the content question, or a text box. Closed rows keep their
   follow-up mounted (inert, collapsed to 0 height) so opening and closing ease instead of jumping. */
function reasonList(s) {
  const rows = A(V(s, "reasonRows"));
  const pick = V(s, "pickReason");
  const title = (t) => h("h3", { style: S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: 24px; line-height: 1.25; color: var(--db-display); text-wrap: balance;") }, t);
  const body = (t) => h("p", { style: S("margin: 0; font-size: var(--db-text-body); line-height: 1.5; text-wrap: pretty;") }, t);
  const box = (label, ph, val, on) => h(C("Input"), { multiline: true, rows: 3, label, placeholder: ph, value: V(s, val), onChange: V(s, on), style: { maxWidth: "480px" } });
  const panel = (row) => {
    const o = row.offer;
    if (o) return [
      o.badge ? h("div", { key: "b", style: S("align-self: flex-start;") }, h(C("Badge"), { tone: "accent" }, o.badge)) : null,
      h(React.Fragment, { key: "t" }, title(o.title)), h(React.Fragment, { key: "p" }, body(o.body)),
      o.isPause ? h(C("Radio"), { key: "r", name: "pause", options: V(s, "pauseOptions"), value: V(s, "pauseValue"), onChange: V(s, "pickPause") }) : null,
      o.note ? h("span", { key: "n", style: S("font-size: var(--db-text-caption); line-height: 1.5; color: var(--db-ink-muted);") }, o.note) : null,
      h("div", { key: "a", style: S("align-self: flex-start;") }, h(C("Button"), { variant: "secondary", size: "md", onClick: V(s, "acceptOffer") }, o.accept))];
    const ids = V(s, "reasonIds") || {};
    if (row.r === ids.content) return [
      h(React.Fragment, { key: "t" }, title("What would you like to see more of?")),
      h(React.Fragment, { key: "p" }, body("Choose any that apply. Your answers help us decide what to add to Bookshelf+ next.")),
      h("div", { key: "c", "data-want": "", role: "group", "aria-label": "Content you’d like to see", style: S("display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr)); gap: 12px 24px;") },
        A(V(s, "contentKinds")).map((it) => h(C("Checkbox"), { key: it.k, label: it.k, checked: it.on, onChange: it.toggle }))),
      h(React.Fragment, { key: "i" }, box("Anything specific? (optional)", "Titles, authors or series you’d like to see", "wantText", "onWantText"))];
    if (V(s, "featureReason") === row.r) return [
      h(React.Fragment, { key: "t" }, title("What would make Bookshelf+ better?")),
      h(React.Fragment, { key: "p" }, body("Tell us what Bookshelf+ is missing. Your answer goes straight to the team that builds it.")),
      h(React.Fragment, { key: "i" }, box("Your answer (optional)", "For example, sleep timer, offline podcasts, family sharing", "featureText", "onFeatureText"))];
    if (row.r === ids.sw) return [
      h(React.Fragment, { key: "t" }, title("Where are you headed?")),
      h(React.Fragment, { key: "p" }, body("Optional. It helps us understand what we\u2019re missing.")),
      h(C("Radio"), { key: "r", name: "switch-to", options: V(s, "switchOptions"), value: V(s, "switchTo"), onChange: V(s, "pickSwitch") })];
    if (row.r === ids.other) return [
      h(React.Fragment, { key: "t" }, title("Tell us more")),
      h(React.Fragment, { key: "p" }, body("What could we do better? Your answer helps us improve Bookshelf+.")),
      h(React.Fragment, { key: "i" }, box("Your answer (optional)", "What made you decide to cancel?", "otherText", "onOtherText"))];
    return null;
  };
  const onKey = (e) => {
    const i = rows.findIndex((r) => r.sel), n = rows.length;
    const d = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!d || !e.target.matches(".bsp-rsn-hd")) return;
    e.preventDefault();
    const j = ((i < 0 ? (d > 0 ? -1 : 0) : i) + d + n) % n;
    pick(rows[j].r);
    const g = e.currentTarget; setTimeout(() => { const b = g.querySelectorAll(".bsp-rsn-hd")[j]; if (b) b.focus(); }, 0);
  };
  const anySel = rows.some((r) => r.sel);
  return h("div", { role: "radiogroup", "aria-label": "Main reason for leaving", className: "bsp-rsns", onKeyDown: onKey },
    rows.map((row, i) => {
      const p = panel(row), id = "bsp-rsn-" + i;
      return h("div", { key: row.r, className: "bsp-rsn" + (row.sel ? " on" : "") },
        h("button", { type: "button", role: "radio", "aria-checked": row.sel, "aria-controls": p ? id : undefined, tabIndex: row.sel || (!anySel && i === 0) ? 0 : -1, className: "bsp-rsn-hd", onClick: () => pick(row.r) },
          h("span", { className: "bsp-rsn-dot", "aria-hidden": "true" }), h("span", null, row.r)),
        p ? h("div", { id, className: "bsp-rsn-x", inert: row.sel ? undefined : "" }, h("div", { className: "bsp-rsn-in" }, h("div", { className: "bsp-rsn-pn" }, p))) : null);
    }));
}
function TPL(s){return F(h("div",{style:S("min-height: 100vh; display: flex; flex-direction: column; font-family: var(--db-font-sans); font-weight: 400; color: var(--db-ink); background: var(--db-white);")},h("main",{style:S("flex: 1; width: 100%; max-width: 760px; margin: 0 auto; padding: clamp(32px, 6vw, 64px) 20px 96px;")},((V(s,"isSubs"))?F(h("div",{"data-screen-label":"My Subscriptions",style:S("display: flex; flex-direction: column; gap: 40px;")},h("div",{style:S("display: flex; flex-direction: column; gap: 12px;")},h("span",{style:S("font-size: var(--db-text-eyebrow); letter-spacing: var(--db-tracking-eyebrow); text-transform: uppercase; color: var(--db-ink-muted);")},"My Account"),h("h1",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(32px, 5vw, 48px); line-height: 1.2; color: var(--db-display);")},"My Subscriptions")),h("section",{style:S("display: flex; flex-direction: column; gap: 12px;")},h("h2",{style:S("margin: 0; font-size: var(--db-text-eyebrow); font-weight: 400; letter-spacing: var(--db-tracking-eyebrow); text-transform: uppercase; color: var(--db-ink-muted);")},"Reading and Listening"),h(C("Card"),Object.assign({},{"ground":"white","bordered":V(s,"true"),"padding":"lg"}),h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;")},h("div",{style:S("display: flex; flex-direction: column; gap: 8px; min-width: 0; flex: 1 1 280px;")},h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; gap: 12px;")},h("span",{style:S("font-family: var(--db-font-serif); font-size: 24px; line-height: 1.2; color: var(--db-display);")},"Bookshelf+ "+T(V(s,"planName"))),h("span",{style:{display:"inline-flex","--db-accent":"var(--db-teal-500, #1d8574)","--db-accent-ink":"#fff"}},h(C("Badge"),Object.assign({},{"tone":V(s,"statusTone")}),V(s,"statusLabel")))),((V(s,"showPriceLine"))?F(h("span",{style:S("font-size: var(--db-text-body);")},V(s,"priceText"),((V(s,"platinum"))?F(h("span",{style:S("color: var(--db-ink-muted);")}," · Platinum member price")):null))):null),h("span",{style:S("font-size: var(--db-text-caption); line-height: 1.5; color: var(--db-ink-muted);")},V(s,"listLine"))),h(C("Button"),Object.assign({},{"variant":"secondary","size":"md","onClick":V(s,"goDetails")}),"Manage")))),((V(s,"platinum"))?F(h("section",{style:S("display: flex; flex-direction: column; gap: 12px;")},h("h2",{style:S("margin: 0; font-size: var(--db-text-eyebrow); font-weight: 400; letter-spacing: var(--db-tracking-eyebrow); text-transform: uppercase; color: var(--db-ink-muted);")},"Membership"),h(C("Card"),Object.assign({},{"ground":"pearl","bordered":V(s,"true"),"padding":"lg"}),h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;")},h("div",{style:S("display: flex; flex-direction: column; gap: 6px; flex: 1 1 280px;")},h("span",{style:S("font-family: var(--db-font-serif); font-size: 20px; line-height: 1.2; color: var(--db-display);")},"Platinum Rewards"),h("span",{style:S("font-size: var(--db-text-caption); line-height: 1.5; color: var(--db-ink-muted);")},"Renews March 3, 2027. Your Platinum price is applied to Bookshelf+ automatically.")),h("a",{"href":"#","onClick":V(s,"noop"),style:S("font-size: var(--db-text-caption);")},"View membership"))))):null))):null),((V(s,"isDetails"))?F(h("div",{"data-screen-label":"Subscription Details",style:S("display: flex; flex-direction: column; gap: 32px;")},h("div",{style:S("align-self: flex-start; margin-left: -12px;")},h(C("Button"),Object.assign({},{"variant":"ghost","size":"sm","icon":"arrow_back","onClick":V(s,"goSubs")}),"My Subscriptions")),h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; gap: 16px;")},h("h1",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(32px, 5vw, 48px); line-height: 1.2; color: var(--db-display);")},"Bookshelf+"),h("span",{style:{display:"inline-flex","--db-accent":"var(--db-teal-500, #1d8574)","--db-accent-ink":"#fff"}},h(C("Badge"),Object.assign({},{"tone":V(s,"statusTone")}),V(s,"statusLabel")))),((V(s,"notice"))?F(h(C("Card"),Object.assign({},{"ground":"pearl","bordered":V(s,"true"),"padding":"md"}),h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 24px;")},h("p",{style:S("margin: 0; flex: 1 1 300px; font-size: var(--db-text-body); line-height: 1.5; text-wrap: pretty;")},V(s,"notice.text")),((V(s,"notice.cta"))?F(h(C("Button"),Object.assign({},{"variant":"primary","size":"md","onClick":V(s,"notice.action")}),V(s,"notice.cta"))):null)))):null),h("dl",{style:S("margin: 0; display: flex; flex-direction: column; border-top: 1px solid var(--db-granite);")},h("div",{style:S("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 16px 0; border-bottom: 1px solid var(--db-granite);")},h("dt",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},"Plan"),h("dd",{style:S("margin: 0; font-size: var(--db-text-body);")},V(s,"planName"))),((V(s,"showPriceLine"))?F(h("div",{style:S("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 16px 0; border-bottom: 1px solid var(--db-granite);")},h("dt",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},"Price"),h("dd",{style:S("margin: 0; display: flex; flex-direction: column; align-items: flex-end; gap: 4px; text-align: right;")},h("span",{style:S("display: flex; align-items: baseline; gap: 8px;")},((V(s,"platinum"))?F(h("span",{style:S("font-size: var(--db-text-caption); text-decoration: line-through; color: var(--db-ink-muted);")},V(s,"regPriceText"))):null),h("span",{style:S("font-family: var(--db-font-serif); font-size: 20px; color: var(--db-display);")},V(s,"priceText"))),((V(s,"priceNote"))?F(h("span",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},V(s,"priceNote"))):null)))):null),((V(s,"discountLine"))?F(h("div",{style:S("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 16px 0; border-bottom: 1px solid var(--db-granite);")},h("dt",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},"Discount"),h("dd",{style:S("margin: 0; font-size: var(--db-text-body); color: var(--db-teal-600); text-align: right;")},V(s,"discountLine")))):null),h("div",{style:S("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 16px 0; border-bottom: 1px solid var(--db-granite);")},h("dt",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},V(s,"dateLabel")),h("dd",{style:S("margin: 0; font-size: var(--db-text-body);")},V(s,"dateValue"))),h("div",{style:S("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 16px 0; border-bottom: 1px solid var(--db-granite);")},h("dt",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},"Billed through"),h("dd",{style:S("margin: 0; font-size: var(--db-text-body);")},V(s,"billedThrough"))),h("div",{style:S("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 16px 0; border-bottom: 1px solid var(--db-granite);")},h("dt",{style:S("font-size: var(--db-text-caption); color: var(--db-ink-muted);")},"Member since"),h("dd",{style:S("margin: 0; font-size: var(--db-text-body);")},"January 12, 2025"))),((V(s,"canCancel"))?F(h("div",{style:S("align-self: flex-start;")},h(C("Button"),Object.assign({},{"variant":"secondary","size":"sm","onClick":V(s,"startCancel")}),"Cancel subscription"))):null),((V(s,"giftInfo"))?F(h(C("Card"),Object.assign({},{"ground":"pearl","bordered":V(s,"true"),"padding":"md"}),h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 24px;")},h("p",{style:S("margin: 0; flex: 1 1 300px; font-size: var(--db-text-body); line-height: 1.5; text-wrap: pretty;")},"This is a gift subscription and it won’t renew, so there’s nothing to cancel. You have access until January 5, 2027."),h(C("Button"),Object.assign({},{"variant":"secondary","size":"md","onClick":V(s,"giftRenew")}),"Continue after it ends")))):null),((V(s,"showPromo"))?F(h("div",{style:S("display: flex; flex-direction: column; gap: 12px;")},h("div",{style:S("align-self: flex-start; margin-left: -12px;")},h(C("Button"),Object.assign({},{"variant":"ghost","size":"sm","iconAfter":V(s,"promoIcon"),"onClick":V(s,"togglePromo")}),"Have a promo code?")),((V(s,"promoOpen"))?F(h("div",{style:S("display: flex; flex-wrap: wrap; align-items: flex-start; gap: 12px;")},h("div",{style:S("flex: 1 1 260px;")},h(C("Input"),Object.assign({},{"label":"Promo code","size":"md","hint":"Use a code from a Deseret Book email or gift offer. It applies to your next renewal. Platinum Rewards discounts are applied automatically and don’t need a code."}))),h("div",{style:S("padding-top: 26px;")},h(C("Button"),Object.assign({},{"variant":"secondary","size":"md"}),"Apply")))):null))):null))):null),((V(s,"isReason"))?F(h("div",{"data-screen-label":"Cancel Bookshelf+",style:S("display: flex; flex-direction: column; gap: 32px;")},h("div",{style:S("align-self: flex-start; margin-left: -12px;")},h(C("Button"),Object.assign({},{"variant":"ghost","size":"sm","icon":"arrow_back","onClick":V(s,"goDetails")}),"Subscription details")),h("div",{style:S("display: flex; flex-direction: column; gap: 16px;")},h("h1",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(32px, 5vw, 48px); line-height: 1.2; color: var(--db-display);")},"Cancel Bookshelf+?"),h("p",{style:S("margin: 0; max-width: 46ch; font-size: var(--db-text-body-lg); line-height: 1.5; text-wrap: pretty;")},V(s,"confirmText"))),h("div",{style:S("display: grid; grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr)); gap: 16px;")},h(C("Card"),Object.assign({},{"ground":"white","bordered":V(s,"true"),"padding":"md"}),h("div",{style:S("display: flex; flex-direction: column; gap: 16px;")},h("h2",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: 20px; line-height: 1.2; color: var(--db-display);")},"Until "+T(V(s,"endDate"))),h("ul",{style:S("list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px;")},(A(V(s,"keepList")).map((it,i)=>((s)=>F({key:i},h("li",{style:S("display: flex; gap: 10px; font-size: var(--db-text-body); line-height: 1.5;")},h("span",{style:S("flex: none; display: flex; padding-top: 2px; color: var(--db-accent-deep);")},h(C("Icon"),Object.assign({},{"name":"check","size":V(s,"20")}))),h("span",{},V(s,"k")))))(Object.assign({},s,{"k":it}))))))),h(C("Card"),Object.assign({},{"ground":"white","bordered":V(s,"true"),"padding":"md"}),h("div",{style:S("display: flex; flex-direction: column; gap: 16px;")},h("h2",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: 20px; line-height: 1.2; color: var(--db-display);")},"After "+T(V(s,"endDate"))),h("ul",{style:S("list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px;")},(A(V(s,"afterList")).map((it,i)=>((s)=>F({key:i},h("li",{style:S("display: flex; gap: 10px; font-size: var(--db-text-body); line-height: 1.5;")},h("span",{style:S("flex: none; display: flex; padding-top: 2px; color: var(--db-charcoal);")},h(C("Icon"),Object.assign({},{"name":"arrow_forward","size":V(s,"20")}))),h("span",{},V(s,"a")))))(Object.assign({},s,{"a":it})))))))),h("section",{style:S("display: flex; flex-direction: column; gap: 16px;")},h("div",{style:S("display: flex; flex-direction: column; gap: 4px;")},h("h2",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: 24px; line-height: 1.2; color: var(--db-display);")},"What’s the main reason you’re leaving?"),h("p",{style:S("margin: 0; font-size: var(--db-text-body); line-height: 1.5; color: var(--db-ink-muted);")},"Optional. You can cancel without answering.")),reasonList(s)),h("div",{style:S("display: flex; flex-wrap: wrap; gap: 12px;")},h("div",{style:S("flex: 1 1 220px;")},h(C("Button"),Object.assign({},{"variant":"primary","size":"lg","fullWidth":V(s,"true"),"onClick":V(s,"confirmCancel")}),"Cancel subscription")),h("div",{style:S("flex: 1 1 220px;")},h(C("Button"),Object.assign({},{"variant":"secondary","size":"lg","fullWidth":V(s,"true"),"onClick":V(s,"goDetails")}),"Keep Bookshelf+"))),((V(s,"showRefund"))?F(h("p",{style:S("margin: 0; font-size: var(--db-text-caption); line-height: 1.5; color: var(--db-ink-muted);")},"Just renewed and looking for a refund? Read the ",h("a",{"href":"#","onClick":V(s,"noop")},"refund policy")," or ",h("a",{"href":"#","onClick":V(s,"noop")},"contact support"),".")):null))):null),((V(s,"isDone"))?F(h("div",{"data-screen-label":"Cancellation Confirmed",style:S("display: flex; flex-direction: column; align-items: flex-start; gap: 20px;")},h("span",{style:S("width: 48px; height: 48px; border-radius: var(--db-radius-pill); background: var(--db-accent-deep); color: var(--db-white); display: grid; place-items: center;")},h(C("Icon"),Object.assign({},{"name":"check","size":V(s,"24")}))),h("h1",{style:S("margin: 0; font-family: var(--db-font-serif); font-weight: 400; font-size: clamp(32px, 5vw, 48px); line-height: 1.2; color: var(--db-display); text-wrap: balance;")},"Your cancellation is scheduled."),h("p",{style:S("margin: 0; max-width: 46ch; font-size: var(--db-text-body-lg); line-height: 1.5; text-wrap: pretty;")},V(s,"doneText")),h("p",{style:S("margin: 0; font-size: var(--db-text-body); line-height: 1.5; color: var(--db-ink-muted);")},"We sent a confirmation to sarah.johnson@example.com."),h("div",{style:S("display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px; margin-top: 8px;")},h(C("Button"),Object.assign({},{"variant":"primary","size":"lg","onClick":V(s,"reactivate")}),"Undo, keep Bookshelf+"),h(C("Button"),Object.assign({},{"variant":"ghost","size":"lg","onClick":V(s,"goSubs")}),"Go to My Subscriptions")))):null)),h(C("Toast"),Object.assign({},{"open":V(s,"toastOpen"),"message":V(s,"toast"),"tone":"success","fixed":V(s,"true"),"seq":V(s,"toastSeq"),"onDismiss":V(s,"hideToast")}))));}
window.BSP_PAGES["subscriptions"]=Component;
})();

})();
