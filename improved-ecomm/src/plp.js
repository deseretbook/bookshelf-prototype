/* PLP rebuild (PLP Rebuild and Cleanup Plan, Oct 26 2026).
   One template for every category: a fixed frame (breadcrumb, H1, optional intro, [header slot], toolbar, filter rail,
   product grid, pagination, [SEO block]) plus a header slot filled from CONFIG below. Configurations:
     A Standard      : subcategory tiles generated from the category tree (children, or siblings with the current one selected on a leaf)
     B Curated tiles : a curated tile set with chosen images
     C Hero          : a hero, then optional tiles
     D Hub           : tiles and/or a hero and editorial cards in the header slot, plus 1 to 3 highlighted-product rows inside the listing
   (E Landing, no grid, is retired: every category keeps its grid.)
   A category with no CONFIG entry is configuration A. Modules never inherit: a child gets the frame and auto tiles only;
   heroes, highlights, cards and SEO copy belong to the one category that lists them.
   Loaded before app.js; app.js calls PLP.augment(D) once its data exists and routes every #/c/<id> to PLP.Page.
   Oct 29 2026: every PLP now renders only breadcrumb, H1, intro, one subcategory row and the filtered product list.
   Heroes, cards, extra headings, highlights and SEO stay in CONFIG for reference but do not render (see Page).
   Uses app.js globals at render time only (ProductCard, Ico, thumb). Wrapped in an IIFE so nothing here collides with app.js. */
(function () {
  const h = (...a) => React.createElement(...a);
  const DSX = () => window.DeseretBookDesignSystem_609afa || {};
  let D = null;

  /* ---------- Configuration ---------------------------------------------------------------------------------------
     Module types: tiles | hero | cards | heading | directory go in the header slot; highlight goes inside the listing
     (no carousels on PLPs; this replaces the plan's Product carousel module). SEO text lives on the category (seo: [...]).
     Hero and card images are product images ({ pid, i }) or paths; a card with no image shows the missing-image fallback.
     Subcategory tiles are DS SubcategoryCards: an optional img per tile (or img on the tree node), otherwise the Pearl area. */
  const LIFESTYLE = { pid: "5254477", i: 1 };
  const CONFIG = {
    /* noTiles: the page shows no subcategory row at all (its children still exist for the filters and nav). */
    "books_gospel-voices": { noTiles: true },
    "books_nonfiction": { noTiles: true },
    "church-resources": { noTiles: true },
    christmas: {
      config: "B",
      modules: [{ type: "tiles", source: "curated", items: [
        { id: "christmas_nativities" },
        { id: "christmas_christmas-ornaments" },
        { id: "christmas_christmas-cards" },
        { id: "christmas_christmas-books" }] }],
      seo: { title: "Christmas at Deseret Book", text: [
        "Christmas is a season for remembering the Savior’s birth and for gathering the people you love. Our Christmas collection brings together nativities for the mantel, ornaments for the tree, cards for family and friends, and books to read aloud on long December evenings.",
        "Look for nativity sets in resin, wood, and porcelain, picture books and novels set during the holidays, and small gifts that fit in a stocking. Many families add a new piece to their nativity each year, so a single figure can make a thoughtful gift on its own.",
        "Shop early for the best selection. Popular nativities and holiday titles can sell out before Christmas, and items shipping to another address can include a gift message at checkout."] }
    },
    christmas_nativities: {
      config: "C",
      modules: [
        { type: "hero", kind: "image", height: "medium", ends: "2026-12-31", eyebrow: "Christmas", title: "Nativities for Every Home",
          text: "Figurines and sets that keep the story of the Savior’s birth at the center of the season.",
          cta: { label: "Shop Nativities", to: "#results" }, img: { desktop: { pid: "4304303" }, mobile: { pid: "4304303" } } },
        { type: "tiles", source: "auto" }],
      seo: { title: "Nativity Sets and Figurines", text: [
        "A nativity is often the first decoration out of the box and the last one put away. Our nativities range from simple three-piece sets for a small shelf to larger collections that grow with added shepherds, wise men, and animals.",
        "Choose resin figurines that stand up to small hands, or pieces carved in a quieter style for a formal display. Many sets are sold as a Holy Family with companion pieces available separately, so you can build a scene over several Christmases."] }
    },
    clearance: {
      config: "C",
      /* Full-width sale banner under the title (the one PLP module besides tiles that renders on the lean template). */
      banner: { motif: "leaves", eyebrow: "Fall Clearance Sale", title: "Save up to 50%", text: "Final markdowns on books, art, and gifts.\nLimited quantities, while supplies last." },
      modules: [{ type: "hero", kind: "promo", height: "short", align: "center", title: "Final Markdowns", text: "Limited quantities at clearance prices, while supplies last." }],
      seo: { text: ["Clearance prices are available while supplies last, and quantities vary by item."] }
    },
    books: {
      config: "D",
      modules: [
        { type: "tiles", source: "auto" },
        { type: "highlight", title: "Bestsellers", source: { kind: "recommendation", cat: "books", sort: "top" }, see: "books" }]
    },
    books_fiction: {
      config: "A",
      seo: { title: "Fiction", text: [
        "Find your next favorite story in romance, historical fiction, mystery and suspense, and teen fiction. Our fiction shelves lean toward clean, uplifting reads that you can recommend to a friend or hand to a teenager without a second look.",
        "Series readers can start at book one or pick up where they left off, and new releases from returning authors arrive throughout the year. Many titles are also available as an eBook or an audiobook."] }
    },
    art: {
      config: "D",
      /* Fine Art lists its featured artists in place of subcategories, in deseretbook.com's order (the first tiles
         module is the only one that renders on a lean PLP). */
      modules: [
        { type: "tiles", source: "curated", label: "Featured artists", items: [
          { id: "featured-authors-artists_greg-olsen" },
          { id: "featured-authors-artists_simon-dewey" },
          { id: "featured-authors-artists_kate-lee" },
          { id: "featured-authors-artists_yongsung-kim" },
          { id: "featured-authors-artists_robert-boyd" }] },
        { type: "highlight", title: "Savior Art", source: { kind: "category", cat: "art_savior-art", sort: "order" }, see: "art_savior-art" },
        { type: "highlight", title: "Temple Art", source: { kind: "category", cat: "art_temple-art", sort: "order" }, see: "art_temple-art" },
        { type: "heading", title: "Featured Artists" },
        { type: "tiles", source: "curated", label: "Featured artists", items: [
          { id: "featured-authors-artists_greg-olsen" },
          { id: "featured-authors-artists_kate-lee" }] }]
    },
    "art_savior-art": {
      seo: { title: "Art of the Savior", text: [
        "Art of the Savior invites the Spirit into a home and keeps Him at the center of family life. Our collection includes framed canvas prints, framed art, and smaller pieces sized for a desk or a nightstand.",
        "Most pieces arrive framed and ready to hang. Check each listing for the finished size, and allow extra room on the wall for larger canvases."] }
    },
    "church-resources_scriptures": {
      config: "D",
      modules: [
        { type: "hero", kind: "hotspots", height: "medium", eyebrow: "Scripture study", title: "Make Room for Your Study",
          text: "Pair a journal edition with your scriptures and keep your notes, questions, and impressions in one place.",
          cta: { label: "Shop Journal Editions", to: "church-resources_scriptures_scripture-journal-editions" },
          img: { desktop: LIFESTYLE, mobile: LIFESTYLE }, alt: "A scripture study journal resting on an open set of scriptures",
          spots: [{ x: 43, y: 48, pid: "5254477" }, { x: 80, y: 74, pid: "P6074927" }] },
        /* Essentials is left out of the cards (it stays in the menu and filters). */
        { type: "tiles", source: "curated", items: [
          { id: "church-resources_scriptures_genuine-leather-scriptures" },
          { id: "church-resources_scriptures_simulated-leather-scriptures" },
          { id: "church-resources_scriptures_bible-translations" },
          { id: "church-resources_scriptures_scripture-journal-editions" },
          { id: "church-resources_scriptures_scripture-totes" }] },
        { type: "highlight", title: "Best-Selling Scriptures", source: { kind: "category", cat: "church-resources_scriptures_scripture-essentials", sort: "top" }, see: "church-resources_scriptures_scripture-essentials" },
        { type: "highlight", title: "Journal Editions", source: { kind: "category", cat: "church-resources_scriptures_scripture-journal-editions", sort: "order" }, see: "church-resources_scriptures_scripture-journal-editions" },
        { type: "heading", title: "Make Them Yours", subtitle: "Ways to personalize, carry, and care for your scriptures." },
        { type: "cards", items: [
          { label: "Personalized Imprinting", text: "Add a name to the cover in one of four lettering styles.", cta: "Personalize", to: "#/p/P6074927", img: { pid: "P6074927" } },
          { label: "Scripture Totes", text: "Carry your scriptures and lesson materials together.", cta: "Shop Totes", to: "church-resources_scriptures_scripture-totes", img: { pid: "P6073551" } },
          { label: "Pocket-Size Sets", text: "A smaller set for travel and for the days you carry little.", cta: "Shop Pocket Sets", to: "#/p/5130963", img: { pid: "5130963" } }] }]
    },
    "church-resources_scriptures_scripture-journal-editions": {
      seo: { title: "Journal Editions", text: [
        "Journal editions set the text of the scriptures beside wide margins, so there is room to write what you learn as you study. Choose lined or unlined pages, and a cover that fits the way you study, from hardcover florals to simple paperbacks.",
        "Many readers keep one journal edition per book of scripture and return to their notes each time that book comes up in Come, Follow Me."] }
    },
    "church-resources_scriptures_scripture-totes": {
      seo: { title: "Scripture Totes", text: [
        "A scripture tote keeps your scriptures, lesson manual, and a pen together on the way to church. Sizes are made to fit regular or large scriptures, and many totes add an inside pocket for a phone or a few notes.",
        "Choose a vegan leather tote for a polished look, or a backpack style for missionaries and youth who carry more."] }
    },
    "temple-worship_temple-clothing": {
      seo: { title: "Clothing", text: [
        "Temple clothing is designed to be simple, modest, and comfortable for the time you spend in the temple. Our dresses, skirts, blouses, pants, and shoes are made in white fabrics that wash and wear well.",
        "Check each listing for sizing and care details. Many pieces come in extended sizes, and a white clothing bag keeps everything together in a temple bag."] }
    },
    missionary: {
      config: "B",
      modules: [{ type: "tiles", source: "curated", items: [
        { id: "missionary_bags" },
        { id: "missionary_journals" },
        { id: "missionary_books" },
        { id: "missionary_accessories" },
        { id: "missionary_jewelry" }] }]
    },
    "games-puzzles": {
      config: "B",
      modules: [{ type: "tiles", source: "curated", items: [
        { id: "games-puzzles_games" },
        { id: "games-puzzles_puzzles" }] }]
    },
    "featured-authors-artists_greg-olsen": {
      config: "D",
      modules: [{ type: "cards", items: [
        { label: "Framed Art", cta: "Shop Framed Art", to: "art_wall-art" },
        { label: "Prints", cta: "Shop Prints", to: "church-resources_prints" },
        { label: "Holiday", cta: "Shop Christmas", to: "christmas" },
        { label: "Gifts & Accessories", cta: "Shop Gifts", to: "art_decor" }] }]
    },
    "featured-authors-artists_kate-lee": {
      config: "D",
      modules: [
        { type: "hero", kind: "image", height: "short", eyebrow: "Featured artist", title: "Kate Lee", text: "Framed prints by Kate Lee, ready to hang.",
          img: { desktop: { pid: "6053323" }, mobile: { pid: "6053323" } } },
        { type: "highlight", title: "More Fine Art", source: { kind: "category", cat: "art", sort: "top", exclude: "featured-authors-artists_kate-lee" }, see: "art" }]
    },
    "all-categories": { config: "A", modules: [{ type: "directory" }] }
  };

  /* Categories that exist only in the tree (not in the main nav). */
  const EXTRA_ROOTS = [{ id: "featured-authors-artists", n: "Featured Authors & Artists", icon: "draw", sub: [
    { id: "featured-authors-artists_greg-olsen", n: "Greg Olsen", icon: "palette" },
    { id: "featured-authors-artists_kate-lee", n: "Kate Lee", icon: "palette" },
    { id: "featured-authors-artists_simon-dewey", n: "Simon Dewey", icon: "palette" },
    { id: "featured-authors-artists_yongsung-kim", n: "Yongsung Kim", icon: "palette" },
    { id: "featured-authors-artists_robert-boyd", n: "Robert Boyd", icon: "palette" }] }];
  /* One URL per category: old and duplicate addresses resolve to the canonical category (301s on the live site). */
  const REDIRECTS = { scriptures: "church-resources_scriptures", "home_fine-art": "art" };
  /* Merchandising assignments: products that also belong to categories added in the rebuild. */
  const ALSO = {
    "4304303": ["christmas_nativities"], "4304321": ["christmas_nativities"], P6027265: ["christmas_christmas-books"],
    "6058448": ["christmas"], "6053323": ["featured-authors-artists_kate-lee"], "6087324": ["featured-authors-artists_yongsung-kim"]
  };
  /* Clean facet values: one label per format, no near-duplicates. Product data keeps its own format text. */
  const FMT_CLEAN = {
    Softcover: "Paperback", "Faux-Leather": "Vegan Leather", "Knit Cotton": "Cotton", "Card Game": "Game",
    "100 Piece Puzzle": "Puzzle", "500 Piece Puzzle": "Puzzle", "1000 Piece Puzzle": "Puzzle", "Tray Puzzle": "Puzzle",
    "Framed Giclee Canvas": "Framed Canvas Print", Marble: "Marble Resin", "Cultured Marble Resin": "Marble Resin",
    "5x7 Print": "Print", "Print Pack": "Print"
  };
  const PRICES = [["u10", "Under $10", 0, 10], ["10-25", "$10 to $25", 10, 25], ["25-50", "$25 to $50", 25, 50], ["50-100", "$50 to $100", 50, 100], ["100", "$100 and up", 100, Infinity]];
  const PER = 24;

  /* ---------- Data: tree, names, assignments ---------- */
  let TREE = [], PARENT = {}, NODE = {}, EXTRA_NAMES = {};
  function augment(data) {
    D = data;
    const skip = { "all-categories": 1 };
    const aliasTargets = [];
    const copy = (list) => list.filter((n) => !n.alias && !skip[n.id]).map((n) => ({ id: n.id, n: n.n, icon: n.icon || "", sub: n.sub ? copy(n.sub) : null }));
    TREE = copy(D.nav).concat(copy(EXTRA_ROOTS));
    (function walk(list, parent) { list.forEach((n) => { NODE[n.id] = n; if (parent) PARENT[n.id] = parent; if (n.sub) walk(n.sub, n.id); }); })(TREE, null);
    EXTRA_ROOTS.forEach(function w(n) { EXTRA_NAMES[n.id] = n.n; (n.sub || []).forEach(w); });
    /* A nav shortcut opens the same mega menu as the category it points at. */
    D.nav.forEach((n) => { if (n.alias) { const t = findNav(D.nav, n.id); if (t && t.sub) n.sub = t.sub; } });
    const base = D.catName;
    D.catName = (id) => EXTRA_NAMES[id] || (NODE[id] ? base(id) : DIR_NAMES[id] || base(id));
    D.products.forEach((p) => {
      if (p.cat === "games-puzzles") p.cat = /Puzzle|Crossword/i.test(p.fmt + " " + p.t) ? "games-puzzles_puzzles" : "games-puzzles_games";
      if (p.cat === "home_fine-art") p.also = (p.also || []).concat("art");
      if (ALSO[p.id]) p.also = (p.also || []).concat(ALSO[p.id]);
    });
    D.plp = { tree: TREE, parentOf, childrenOf, trail, canon, config: cfgOf, facetFmt };
  }
  function findNav(list, id) { for (const n of list) { if (n.id === id && !n.alias) return n; if (n.sub) { const f = findNav(n.sub, id); if (f) return f; } } return null; }
  const parentOf = (id) => PARENT[id] || null;
  const childrenOf = (id) => (NODE[id] && NODE[id].sub) || [];
  const trail = (id) => { const t = []; let p = PARENT[id]; while (p) { t.unshift(p); p = PARENT[p]; } return t; };
  const canon = (id) => REDIRECTS[id] || id;
  const cfgOf = (id) => { const c = CONFIG[id] || {}; return { config: c.config || "A", intro: c.intro || "", modules: c.modules || [{ type: "tiles", source: "auto" }], seo: c.seo || null, noTiles: !!c.noTiles, banner: c.banner || null }; };
  const facetFmt = (p) => FMT_CLEAN[p.fmt] || p.fmt || "";
  const inTree = (p, id) => [p.cat].concat(p.also || []).some((c) => c === id || c.indexOf(id + "_") === 0);
  const imgSrc = (r) => { if (!r) return ""; if (typeof r === "string") return thumb(r); const p = D.byId(r.pid); return p && p.img ? thumb(p.img[r.i || 0] || p.img[0]) : ""; };
  const expired = (m) => !!(m.ends && Date.now() > new Date(m.ends + "T23:59:59").getTime());
  const goCat = (go, id) => (e) => { if (e) e.preventDefault(); go("#/c/" + id); };
  const toResults = () => { const el = document.getElementById("plp-results"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" }); };
  const follow = (go, to) => { if (to === "#results") return toResults(); go(to.indexOf("#/") === 0 ? to : "#/c/" + to); };

  /* Subcategory card images, taken from the subcategory tiles on deseretbook.com's own category pages (Oct 2026),
     cropped to the DS square card image. Scriptures' subcategory tiles live on the live site's Scripture Essentials page; Essentials
     itself uses the homepage's Featured Categories "Scriptures" tile, which links there. A category with no tile image on the live site keeps the DS Pearl area. */
  const CAT_IMG = "assets/img/cat/";
  const SUBCAT_IMG = {
    "books_fiction": CAT_IMG + "books_fiction.jpg",
    "books_fiction_historical-fiction": CAT_IMG + "books_fiction_historical-fiction.jpg",
    "books_fiction_mystery-and-suspense": CAT_IMG + "books_fiction_mystery-and-suspense.jpg",
    "books_fiction_romance": CAT_IMG + "books_fiction_romance.jpg",
    "books_fiction_teen-fiction": CAT_IMG + "books_fiction_teen-fiction.jpg",
    "books_gospel-voices": CAT_IMG + "books_gospel-voices.jpg",
    "books_childrens-books": CAT_IMG + "books_childrens-books.jpg",
    "books_gospel-voices_temple-books": CAT_IMG + "books_gospel-voices_temple-books.jpg",
    "books_nonfiction": CAT_IMG + "books_nonfiction.jpg",
    "christmas_christmas-books": CAT_IMG + "christmas_christmas-books.jpg",
    "christmas_christmas-cards": CAT_IMG + "christmas_christmas-cards.jpg",
    "christmas_christmas-ornaments": CAT_IMG + "christmas_christmas-ornaments.jpg",
    "christmas_nativities": CAT_IMG + "christmas_nativities.jpg",
    "church-resources_scriptures_genuine-leather-scriptures": CAT_IMG + "church-resources_scriptures_genuine-leather-scriptures.jpg",
    "church-resources_scriptures_scripture-essentials": CAT_IMG + "church-resources_scriptures_scripture-essentials.jpg",
    "church-resources_scriptures_scripture-journal-editions": CAT_IMG + "church-resources_scriptures_scripture-journal-editions.jpg",
    "church-resources_scriptures_scripture-totes": CAT_IMG + "church-resources_scriptures_scripture-totes.jpg",
    "church-resources_scriptures_simulated-leather-scriptures": CAT_IMG + "church-resources_scriptures_simulated-leather-scriptures.jpg",
    "church-resources_scriptures_bible-translations": CAT_IMG + "church-resources_scriptures_bible-translations.jpg",
    "featured-authors-artists_greg-olsen": CAT_IMG + "featured-authors-artists_greg-olsen.jpg",
    "featured-authors-artists_kate-lee": CAT_IMG + "featured-authors-artists_kate-lee.jpg",
    "featured-authors-artists_robert-boyd": CAT_IMG + "featured-authors-artists_robert-boyd.jpg",
    "featured-authors-artists_simon-dewey": CAT_IMG + "featured-authors-artists_simon-dewey.jpg",
    "featured-authors-artists_yongsung-kim": CAT_IMG + "featured-authors-artists_yongsung-kim.jpg",
    "games-puzzles_games": CAT_IMG + "games-puzzles_games.jpg",
    "games-puzzles_puzzles": CAT_IMG + "games-puzzles_puzzles.jpg",
    "missionary_accessories": CAT_IMG + "missionary_accessories.jpg",
    "missionary_bags": CAT_IMG + "missionary_bags.jpg",
    "missionary_books": CAT_IMG + "missionary_books.jpg",
    "missionary_jewelry": CAT_IMG + "missionary_jewelry.jpg",
    "missionary_journals": CAT_IMG + "missionary_journals.jpg",
    "temple-worship_temple-accessories": CAT_IMG + "temple-worship_temple-accessories.jpg",
    "temple-worship_temple-bags": CAT_IMG + "temple-worship_temple-bags.jpg",
    "temple-worship_temple-clothing": CAT_IMG + "temple-worship_temple-clothing.jpg"
  };
  /* ---------- Module: Subcategory tiles ----------
     The DS SubcategoryCard: a square image card with the subcategory's icon and name in a frosted Pearl pill on its bottom edge, the whole card one link.
     The icon is the category's icon from the tree (the same table the DS README lists), else the DS fallback `category`.
     No current state, so the page you are on is never listed. auto: the children of the category; a
     category with no children shows none. curated: the listed ids, hidden on the pages of those ids. Image: the tile's img, else the category's img in the
     tree (NAV / EXTRA_ROOTS), else SUBCAT_IMG; a full photograph, never a product shot on white. No image: the DS Pearl area alone. */
  function Tiles({ m, id, go }) {
    /* Cards only ever lead down: a category shows its own children. Inside a subcategory with no children of its own
       (or one listed in a curated set, e.g. a featured artist) no cards show, never its siblings. */
    let items;
    if (m.source === "curated") {
      if ((m.items || []).some((t) => t.id === id)) return null;
      items = (m.items || []).map((t) => ({ id: t.id, img: t.img }));
    } else items = childrenOf(id).map((k) => ({ id: k.id }));
    if (!items.length) return null;
    return h("nav", { className: "plp-tiles", "aria-label": m.label || "Shop " + D.catName(id) }, h(TilesRow, { items, go }));
  }
  /* Full titles, always: the row's pills all scale down together (one size for the row, so the tiles match) until the
     longest title fits, never below 12px type (scale .75). When even that is too long, the tiles widen together:
     on phones and tablets the scrolling row's cards get wider, on desktop the grid drops columns. Re-measured on resize. */
  /* Banner copy: each \n starts a new line (a block span), and each line balances its own wrap so no word is left alone. */
  /* "on" stays with the word after it (a no-break space), so a narrow line breaks before "on", never after it */
  const bannerLines = (s) => String(s || "").split("\n").map((l, i) => h("span", { key: i, className: "plp-banner-l" }, l.replace(/ on /g, " on\u00a0")));
  /* Banner motif "leaves": flat leaves (two drawings: a maple leaf and a sprig) drifting down behind the copy toward the bottom-left corner, in three depths.
     Far leaves are pale and slow; middle ones are crisp; near ones are very large and soft, drifting in and out of focus.
     Each leaf: a track that falls on a diagonal (eased, looping off-screen), a spin (Z rotation, turning while it falls when set), a turn (X and Y, likewise, drawn in 3D every frame),
     and the leaf, whose blur eases between two values (or holds one value when "all out of focus" is on).
     Curl, in real 3D, in up to three directions at once (across, along and diagonally): each leaf is a polygon mesh (columns x rows, set in Tweaks). Across its
     width every column turns a little further from the midrib; along its length every row turns a little further from the
     middle; each half has its own amount and direction, so a leaf can be cupped, saddled, rolled or curled at the edges.
     The mesh is tilted and turned, put in perspective and drawn once into a canvas: every polygon a flat color, a little
     deeper the more it faces away from the light, which reads as smooth shading. The animation then only moves, turns and
     blurs that picture, so a dense mesh costs nothing per frame. Positions come from a seed; negative delays start the fall
     mid-way so the banner is never empty. Every value is a Tweaks control (Main Site.html, "Seasonal banner"), set separately for each season.
     Reduced motion: everything pauses where it is. Decorative, hidden from assistive tech. */
  /* The two leaf drawings (leaf1.svg: a maple leaf; leaf2.svg: a rounded lobed leaf), each in its own viewBox, stem down.
     Every leaf picks one; the drawing is scaled to fit the leaf box. */
  const LEAF_SHAPES = [
    { w: 216, h: 236, d: "M111.104 0C111.477 0.321311 114.357 7.41548 114.95 8.64707C118.976 17.0047 125.221 23.4011 129.136 31.7777C131.01 35.7872 132.365 40.2514 134.6 43.9713C137.298 41.9703 140.334 40.3733 142.913 38.1922C143.853 37.3974 144.814 36.6898 145.863 36.0471C146.945 55.0885 144.72 73.2181 137.569 90.9964C139.717 89.2528 140.762 87.7568 142.607 85.824C144.594 83.7419 146.857 81.4584 148.985 79.5496C154.145 74.8903 159.53 70.4853 165.119 66.3505C167.903 64.3119 170.84 62.5017 173.727 60.3783C173.397 63.6313 172.598 68.8683 175.13 71.3408C178.496 72.7051 196.366 67.0365 200.877 65.9305C203.544 65.2764 207.379 64.3767 210.134 63.6814C208.769 67.4335 207.051 70.9638 205.756 74.7419C203.832 80.3593 201.494 85.764 199.636 91.4153C198.182 95.8347 196.078 99.3609 195.807 104.124C195.965 104.439 196.482 105.552 196.648 105.722C198.441 107.563 206.198 108.253 208.797 108.658C207.153 109.799 205.455 111.65 203.936 112.97C193.968 121.645 183.23 129.519 171.092 134.888C170.131 135.313 168.748 136.23 167.833 136.8C180.101 137.418 196.12 147.021 207.267 151.697C210.049 152.864 213.003 153.523 215.932 154.24C212.09 155.67 205.15 157.412 202.003 159.233C189.471 166.483 177.953 173.179 163.357 175.294C161.183 175.608 152.958 175.477 152.047 177.336C151.496 180.442 158.226 193.066 160.088 196.153C154.763 195.281 151.868 194.239 146.889 192.883C134.567 189.528 122.715 183.592 113.938 174.136C112.118 172.174 110.26 169.508 108.663 167.29C108.241 178.37 108.073 190.993 108.1 202.123C108.137 207.515 108.24 212.906 108.408 218.293C108.521 222.401 109.019 228.69 108.373 232.7C108.162 234.012 106.849 235.011 105.675 235.612C101.106 236.378 98.4442 234.368 98.9014 229.581C99.4587 223.749 100.862 218.128 101.495 212.292C103.098 197.209 104.169 182.074 104.707 166.915C104.189 167.711 103.51 168.765 102.876 169.467C89.7584 183.981 70.7152 189.572 51.8894 191.376C54.5169 185.677 58.1994 180.794 60.1325 174.987C60.6524 173.398 59.158 172.569 57.827 172.382C48.4185 171.055 39.3286 168.712 30.8094 164.384C21.4412 159.624 10.4474 149.541 0 147.867C2.5319 147.096 5.73973 146.71 8.06184 145.889C21.0534 141.296 34.2694 133.875 48.1237 132.39C45.9857 131.476 43.5365 129.862 41.4555 128.713C31.756 123.355 23.1452 116.092 15.3938 108.224C13.3069 106.105 11.2949 104.036 9.12344 102.013L9.25653 101.974C13.3586 100.825 20.1519 100.741 22.311 97.9286C23.118 93.8097 11.5871 62.0952 9.71244 56.0023L24.7416 60.9574C30.4498 62.8784 36.6676 65.4454 42.6253 66.1831C46.3842 66.6484 45.6467 57.3222 45.6392 54.9807C55.2564 61.015 74.8384 79.3359 80.5296 88.7752C75.9821 73.2301 73.4734 59.0362 74.2457 42.8252C74.4038 39.5049 74.7344 35.3733 74.6044 32.1301C76.5712 33.8855 83.5189 40.6261 85.9966 40.3085C86.7087 39.8613 87.5078 38.0331 87.7883 37.2186C91.3813 26.7891 98.7931 19.8461 105.093 11.1871C107.606 7.7329 108.593 3.63157 111.104 0Z" },
    { w: 132, h: 222, d: "M26.4046 64.5387C28.3582 65.6897 31.9666 67.8624 34.2609 67.047C40.326 64.8917 35.4473 58.3901 33.5819 55.1076C29.2725 47.5241 22.9717 38.3998 26.681 29.3868C27.3876 27.695 29.4254 26.1135 31.0902 25.6125C38.8338 22.7481 45.9717 34.5492 51.2148 24.8158C54.9037 18.3239 53.9484 3.17288 62.3411 0.477642C70.6595 -1.63961 73.9323 3.58733 75.8736 10.1363C77.349 15.1135 79.1668 31.7944 86.8367 28.5129C92.6321 26.0334 101.881 21.6205 105.005 31.4079C106.935 37.4547 103.369 45.5554 100.32 50.5468C98.2062 54.3266 93.7667 60.1373 94.4891 64.5636C94.9008 67.0867 97.9877 67.7311 100.184 66.991C107.643 64.4767 115.962 53.9998 124.524 58.5937C127.05 59.9469 128.912 62.2749 129.678 65.0366C132.629 75.3733 122.926 85.8867 116.049 92.258C113.539 94.5526 110.958 96.77 108.311 98.9069C103.676 102.647 98.393 106.184 94.8344 111.02C92.3091 114.383 92.73 118.381 97.8928 116.496C103.916 114.296 109.439 111.15 115.442 108.825C121.357 106.535 128.623 105.899 130.871 113.441C131.08 114.641 131.18 115.548 131.043 116.771C130.022 122.805 126.298 126.991 121.409 130.448C120.076 131.373 118.722 132.266 117.348 133.127C116.989 133.335 115.686 134.054 115.427 134.263C107.504 138.698 97.3658 142.874 91.0273 149.474C89.2105 151.366 89.8304 152.635 91.7209 154.043C96.5504 154.167 109.361 148.359 110.164 158.169C110.521 162.533 104.918 166.742 101.609 169.071C91.2106 176.389 79.983 182.976 70.4667 191.492C66.9196 194.671 67.0069 196.087 66.974 200.557C66.96 203.93 66.9874 207.306 67.0563 210.68C67.09 212.822 67.8439 222.188 63.8658 221.936C58.9073 221.621 60.8554 213.781 61.1274 210.729C61.3088 208.696 61.7273 206.146 61.8227 204.042C61.8767 201.009 62.4768 197.701 61.4887 194.813C60.8305 193.142 57.8107 190.682 56.3763 189.453C51.2016 185.048 45.7913 180.929 40.1695 177.111C37.9016 175.553 35.9824 174.291 33.3339 172.47C28.459 169.12 14.529 160.999 21.6391 153.733C24.9003 150.399 33.4782 153.377 37.4108 153.713C38.3515 153.792 39.709 153.786 40.5206 153.03C40.9296 152.648 41.1604 152.112 41.1571 151.552C41.1003 146.236 19.3827 136.566 15.0696 133.721C11.477 131.693 8.90292 129.456 5.85785 126.709C1.38874 122.679 -2.74215 114.206 2.3416 109.112C6.71418 104.73 14.5251 108.212 19.3768 110.374C21.9888 111.563 24.593 112.769 27.1893 113.992C29.6385 115.131 37.8007 118.971 37.5178 113.671C37.2543 108.739 26.1067 100.943 22.6995 98.1273C19.9393 95.8561 17.2617 93.4861 14.6721 91.0223C8.08589 84.6432 -4.23886 70.1034 4.33422 60.0938C6.3646 57.7231 9.6163 57.4859 12.5706 57.4938L14.8693 57.902C19.438 59.7955 22.2698 61.8346 26.4046 64.5387Z" },
    /* Season shapes: the two snowflakes (2: snowflake1.svg; 6: snowflake2.svg, with its open center), and, drawn in code,
       a notched petal (3), a five-petal blossom (4) and a dot (5). */
    { w: 764, h: 878, d: "M733.484 575.883C731.656 571.262 726.887 568.512 721.976 569.242L661.617 578.184L603.707 544.742L695.765 520.082C706.144 517.305 712.305 506.633 709.523 496.254C706.746 485.875 696.074 479.715 685.695 482.492L556.047 517.234L440.746 450.664H475.125C479.957 450.664 484.625 452.293 488.406 455.293L526.594 485.594C528.726 487.273 531.676 487.453 533.984 486.043L601.957 444.504C606.074 441.992 606.074 435.992 601.945 433.484L533.984 391.945C531.676 390.523 528.715 390.703 526.594 392.395L488.406 422.684C484.625 425.684 479.945 427.312 475.125 427.312H440.746L556.047 360.742L685.695 395.484C687.387 395.934 689.074 396.152 690.746 396.152C699.336 396.152 707.195 390.422 709.523 381.723C712.305 371.344 706.144 360.684 695.765 357.895L603.707 333.234L661.605 299.805L721.976 308.734C726.894 309.465 731.656 306.715 733.484 302.094L762.476 228.773C765.004 222.375 760.906 215.285 754.105 214.273L676.105 202.703C671.183 201.984 666.426 204.734 664.594 209.352L642.164 266.094L584.246 299.535L608.914 207.473C611.695 197.094 605.535 186.422 595.156 183.645C584.773 180.852 574.117 187.012 571.324 197.395L536.594 327.043L421.297 393.613L438.484 363.844C440.894 359.664 444.644 356.422 449.125 354.652L494.465 336.734C496.984 335.734 498.617 333.262 498.547 330.555L496.566 250.922C496.445 246.094 491.254 243.102 487.004 245.414L417.054 283.504C414.664 284.805 413.344 287.453 413.746 290.133L420.894 338.352C421.594 343.125 420.664 347.992 418.265 352.164L401.066 381.934V248.805L495.976 153.895C503.574 146.293 503.574 133.973 495.976 126.375C488.375 118.773 476.066 118.773 468.465 126.375L401.066 193.773V126.902L438.996 79.0938C442.086 75.2031 442.086 69.7031 438.996 65.8125L389.984 4.04297C385.707 -1.34766 377.523 -1.34766 373.246 4.04297L324.234 65.8125C321.144 69.7031 321.144 75.2031 324.226 79.0938L362.156 126.902V193.773L294.765 126.375C287.164 118.773 274.844 118.773 267.246 126.375C259.644 133.973 259.644 146.293 267.246 153.895L362.156 248.805V381.934L344.965 352.164C342.554 347.984 341.625 343.125 342.336 338.352L349.476 290.125C349.875 287.445 348.554 284.793 346.176 283.504L276.226 245.402C271.976 243.094 266.785 246.094 266.676 250.922L264.676 330.555C264.605 333.262 266.246 335.734 268.765 336.734L314.094 354.652C318.586 356.434 322.336 359.664 324.746 363.832L341.933 393.613L226.637 327.043L191.894 197.395C189.117 187.012 178.445 180.852 168.066 183.633C157.683 186.422 151.523 197.082 154.304 207.465L178.976 299.535L121.074 266.094L98.6248 209.344C96.8045 204.734 92.035 201.984 87.1248 202.703L9.1248 214.262C2.3162 215.273 -1.77364 222.363 0.753702 228.762L29.7459 302.094C31.5662 306.715 36.3357 309.465 41.2459 308.734L101.605 299.793L159.515 333.234L67.4568 357.895C57.074 360.672 50.9139 371.344 53.6951 381.723C56.0232 390.422 63.8865 396.152 72.4842 396.152C74.1443 396.152 75.8435 395.934 77.5232 395.484L207.176 360.742L322.476 427.312H288.094C283.273 427.312 278.594 425.684 274.816 422.684L236.625 392.383C234.504 390.703 231.547 390.523 229.234 391.934L161.273 433.473C157.144 435.984 157.144 441.984 161.273 444.504L229.234 486.035C231.554 487.453 234.504 487.273 236.637 485.582L274.824 455.293C278.594 452.293 283.273 450.664 288.094 450.664H322.476L207.176 517.234L77.5232 482.492C67.1443 479.715 56.4764 485.875 53.6951 496.254C50.9139 506.633 57.074 517.293 67.4568 520.082L159.515 544.742L101.617 578.184L41.2459 569.242C36.3357 568.512 31.5662 571.262 29.7459 575.883L0.753702 649.203C-1.77364 655.602 2.3162 662.695 9.1248 663.703L87.1248 675.273C92.035 676.004 96.8045 673.242 98.6248 668.625L121.066 611.883L178.976 578.453L154.304 670.512C151.523 680.895 157.683 691.555 168.066 694.344C169.754 694.793 171.445 695.004 173.117 695.004C181.707 695.004 189.566 689.273 191.894 680.582L226.637 550.934L341.933 484.363L324.746 514.133C322.324 518.312 318.574 521.555 314.094 523.324L268.765 541.242C266.234 542.242 264.605 544.715 264.676 547.422L266.664 627.055C266.785 631.883 271.976 634.875 276.215 632.562L346.164 594.473C348.554 593.172 349.875 590.523 349.476 587.844L342.336 539.625C341.625 534.852 342.554 529.984 344.965 525.812L362.156 496.035V629.172L267.246 724.082C259.644 731.684 259.644 744.004 267.246 751.602C274.844 759.203 287.164 759.203 294.765 751.602L362.156 684.203V751.074L324.226 798.883C321.144 802.773 321.144 808.273 324.226 812.164L373.234 873.934C377.515 879.324 385.695 879.324 389.976 873.934L438.996 812.164C442.086 808.273 442.086 802.773 438.996 798.883L401.066 751.074V684.215L468.465 751.602C472.265 755.402 477.246 757.305 482.215 757.305C487.195 757.305 492.176 755.402 495.976 751.602C503.574 744.004 503.574 731.684 495.976 724.082L401.066 629.172V496.043L418.254 525.812C420.676 529.992 421.594 534.852 420.887 539.625L413.746 587.852C413.344 590.535 414.664 593.184 417.054 594.473L487.004 632.574C491.246 634.883 496.433 631.883 496.554 627.055L498.547 547.422C498.617 544.715 496.984 542.242 494.457 541.242L449.125 523.324C444.644 521.543 440.887 518.312 438.476 514.145L421.285 484.363L536.586 550.934L571.324 680.582C573.656 689.273 581.515 695.004 590.117 695.004C591.773 695.004 593.476 694.793 595.156 694.344C605.535 691.555 611.695 680.895 608.914 670.512L584.246 578.445L642.156 611.883L664.594 668.633C666.426 673.242 671.183 675.992 676.105 675.273L754.094 663.715C760.906 662.703 764.996 655.613 762.465 649.215L733.484 575.883Z" },
    { w: 100, h: 100, d: "M50 98C22 74 12 46 26 20C33 8 44 6 50 18C56 6 67 8 74 20C88 46 78 74 50 98Z" },
    { w: 100, h: 100, d: (() => { let d = ""; for (let k = 0; k < 5; k++) { const a = k * 2 * Math.PI / 5 - Math.PI / 2, x = 50 + Math.cos(a) * 24, y = 50 + Math.sin(a) * 24, r = 22;
      d += "M" + (x - r).toFixed(2) + " " + y.toFixed(2) + "a" + r + " " + r + " 0 1 0 " + 2 * r + " 0a" + r + " " + r + " 0 1 0 " + -2 * r + " 0Z"; } return d + "M38 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0Z"; })() },
    { w: 100, h: 100, d: "M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0Z" },
    { w: 757, h: 868, d: "M378.346 507.144C337.979 507.144 305.135 474.292 305.135 433.933C305.135 393.565 337.979 360.714 378.346 360.714C418.717 360.714 451.561 393.565 451.561 433.933C451.561 474.292 418.717 507.144 378.346 507.144ZM710.244 603.085L681.682 586.593L703.25 580.812C713.384 578.096 719.399 567.678 716.684 557.543L716.446 556.658C713.731 546.521 703.312 540.506 693.176 543.222L634.022 559.073L602.873 541.093L663.456 524.862C673.593 522.146 679.608 511.727 676.892 501.591L676.655 500.706C673.938 490.57 663.52 484.556 653.385 487.271L555.217 513.573L495.381 479.034L537.833 449.534C548.709 441.976 548.709 425.889 537.834 418.33L495.381 388.823L555.213 354.284L653.385 380.586C663.521 383.302 673.938 377.287 676.654 367.152L676.892 366.267C679.608 356.131 673.593 345.712 663.456 342.996L602.873 326.765L634.022 308.784L693.176 324.636C703.312 327.352 713.731 321.336 716.446 311.2L716.684 310.315C719.399 300.179 713.384 289.762 703.25 287.046L681.682 281.265L710.244 264.773L726.246 267.144C734.98 268.439 743.455 263.546 746.701 255.336L755.353 233.454C759.853 222.072 752.575 209.467 740.468 207.673L717.189 204.224C708.456 202.93 699.983 207.822 696.736 216.031L690.787 231.073L662.225 247.566L668.003 225.996C670.719 215.86 664.703 205.442 654.568 202.727L653.686 202.49C643.551 199.775 633.132 205.79 630.417 215.925L614.565 275.085L583.416 293.065L599.65 232.49C602.366 222.353 596.351 211.934 586.214 209.219L585.33 208.982C575.195 206.267 564.777 212.282 562.061 222.417L535.76 320.573L475.924 355.124L471.601 303.616C470.493 290.419 456.562 282.375 444.578 288.013L397.803 310.023V240.933L469.673 169.069C477.093 161.65 477.094 149.621 469.676 142.2L469.027 141.552C461.608 134.13 449.576 134.129 442.155 141.55L397.803 185.905V149.933L441.108 106.63C448.529 99.2101 448.529 87.1789 441.108 79.7589L440.464 79.1149C433.044 71.6962 421.015 71.6962 413.595 79.115L397.803 94.9053V61.9249L407.862 49.2418C413.348 42.3251 413.347 32.541 407.86 25.6253L393.233 7.19036C385.626 -2.39649 371.073 -2.39684 363.466 7.18963L348.835 25.6264C343.348 32.5415 343.347 42.3252 348.832 49.2421L358.889 61.9249V94.9053L343.104 79.1186C335.685 71.6981 323.655 71.6973 316.234 79.1167L315.591 79.7598C308.17 87.1795 308.17 99.21 315.589 106.63L358.889 149.933V185.905L314.544 141.552C307.124 134.13 295.091 134.13 287.671 141.553L287.023 142.201C279.605 149.621 279.606 161.65 287.025 169.069L358.889 240.933V310.023L312.118 288.014C300.134 282.375 286.202 290.419 285.094 303.617L280.772 355.124L220.94 320.585L194.635 222.411C191.919 212.273 181.498 206.258 171.361 208.977L170.475 209.215C160.341 211.933 154.328 222.35 157.044 232.484L173.279 293.065L142.131 275.085L126.279 215.925C123.563 205.79 113.145 199.775 103.009 202.49L102.128 202.727C91.992 205.442 85.9767 215.86 88.6922 225.996L94.4708 247.566L65.9122 231.073L59.9603 216.029C56.7129 207.82 48.2399 202.93 39.5079 204.224L16.2293 207.673C4.12288 209.467 -3.15461 222.071 1.34467 233.453L9.99487 255.334C13.2409 263.546 21.7159 268.439 30.4501 267.144L46.4512 264.773L75.0137 281.265L53.4476 287.045C43.3121 289.762 37.2978 300.18 40.0141 310.316L40.2516 311.202C42.968 321.337 53.3864 327.352 63.522 324.636L122.674 308.784L153.822 326.765L93.2391 342.996C83.1026 345.712 77.0872 356.131 79.8037 366.267L80.041 367.152C82.7572 377.287 93.175 383.302 103.31 380.586L201.482 354.284L261.315 388.823L218.864 418.33C207.989 425.889 207.989 441.976 218.865 449.534L261.315 479.034L201.482 513.573L103.31 487.271C93.1749 484.556 82.7572 490.57 80.041 500.705L79.8037 501.591C77.0872 511.727 83.1026 522.146 93.2391 524.862L153.822 541.093L122.674 559.073L63.5197 543.222C53.3835 540.506 42.9646 546.521 40.2491 556.658L40.0119 557.543C37.2967 567.678 43.311 578.096 53.4458 580.812L75.0137 586.593L46.4552 603.085L30.4489 600.713C21.7152 599.419 13.2408 604.311 9.99449 612.522L1.34267 634.404C-3.15747 645.786 4.12011 658.391 16.2271 660.185L39.5062 663.634C48.239 664.928 56.7126 660.036 59.9593 651.827L65.9083 636.784L94.4708 620.292L88.6922 641.862C85.9767 651.997 91.992 662.415 102.128 665.131L103.009 665.367C113.145 668.083 123.563 662.068 126.279 651.932L142.131 592.773L173.279 574.792L157.044 635.375C154.329 645.51 160.342 655.928 170.477 658.645L171.361 658.883C181.498 661.6 191.919 655.585 194.635 645.447L220.936 547.273L280.772 512.733L285.094 564.241C286.202 577.439 300.134 585.483 312.118 579.844L358.889 557.835V626.925L287.023 698.791C279.603 706.211 279.603 718.241 287.023 725.661L287.671 726.309C295.092 733.729 307.123 733.729 314.543 726.307L358.889 681.952V717.925L315.589 761.227C308.17 768.648 308.17 780.678 315.591 788.098L316.234 788.741C323.655 796.16 335.685 796.159 343.104 788.739L358.889 772.952V805.933L348.831 818.616C343.346 825.533 343.348 835.316 348.834 842.231L363.463 860.667C371.069 870.254 385.623 870.254 393.23 860.668L407.859 842.232C413.347 835.317 413.348 825.532 407.862 818.615L397.803 805.933V772.952L413.591 788.741C421.011 796.16 433.04 796.161 440.46 788.742L441.104 788.098C448.525 780.678 448.525 768.648 441.105 761.227L397.803 717.925V681.952L442.152 726.307C449.572 733.729 461.604 733.729 469.024 726.307L469.67 725.661C477.09 718.241 477.089 706.211 469.67 698.792L397.803 626.925V557.835L444.578 579.844C456.562 585.483 470.493 577.439 471.601 564.241L475.924 512.733L535.756 547.273L562.06 645.448C564.777 655.585 575.197 661.6 585.333 658.883L586.219 658.645C596.353 655.928 602.367 645.51 599.651 635.375L583.416 574.792L614.565 592.773L630.417 651.932C633.132 662.068 643.551 668.083 653.686 665.367L654.568 665.131C664.703 662.415 670.719 651.997 668.003 641.862L662.225 620.292L690.783 636.784L696.736 651.831C699.983 660.038 708.455 664.929 717.186 663.636L740.466 660.19C752.574 658.398 759.853 645.792 755.353 634.41L746.701 612.523C743.455 604.312 734.98 599.419 726.246 600.713L710.244 603.085Z" },
    /* Spring (petal.svg and leaf.svg): a petal (7) and a leaf (8). */
    { w: 64, h: 79, d: "M22.1269 0.070854C25.9411 -0.542778 29.4634 2.9566 31.6331 5.65048C34.5575 2.4731 37.3427 -0.425872 42.0211 0.158534C47.911 0.818273 52.8367 4.77154 56.4017 9.23716C68.267 24.0999 63.6629 46.163 53.0261 60.3467C52.1377 61.5313 51.3663 62.9723 50.4312 64.1128C47.7613 67.3693 44.7096 70.569 41.4492 73.2111C39.2377 75.2191 35.0265 77.9523 32.026 78.3153C28.8767 78.6961 23.9109 74.6713 21.4616 72.6948C16.7011 68.8535 10.3736 61.3237 7.21192 56.0723C4.11025 50.9208 0.740503 41.3636 0.200567 35.2523C-0.66149 25.4962 1.16542 16.2803 7.43465 8.49654C10.8165 4.29787 16.6822 0.565438 22.1269 0.070854Z" },
    { w: 61, h: 72, d: "M0.721842 0.790694C0.57698 0.470178 0.953292 0.186181 1.2236 0.411233C2.3305 1.33281 3.42559 2.27226 4.53112 3.19272C4.72641 3.35529 4.92241 3.52931 5.0958 3.71486C5.09879 3.71806 5.10243 3.72056 5.10649 3.72219C5.12523 3.72973 5.1451 3.71748 5.14217 3.69749C5.07607 3.24578 3.73626 1.01242 3.34463 0.176038C3.26693 0.0100998 3.36679 -0.0574919 3.51005 0.0567449C3.81168 0.297276 4.24408 0.687182 4.38161 0.807072L7.21469 3.29001C7.36435 3.42184 7.57041 3.61007 7.78777 3.80578C8.03963 4.03256 8.38109 3.78734 8.26523 3.46885C8.07225 2.93832 7.87264 2.3641 7.69536 1.83102C7.58919 1.51175 7.95606 1.2722 8.20542 1.49809C8.63303 1.88546 9.06183 2.28461 9.46931 2.65449L11.8281 4.80435C12.0793 5.0333 12.4953 4.78362 12.4241 4.45129C12.3178 3.9556 12.2215 3.45244 12.1166 2.96219C12.0486 2.64491 12.418 2.409 12.6636 2.62099C12.9168 2.83946 13.1658 3.06299 13.4039 3.28199C14.4696 4.26245 15.5934 5.20557 16.6748 6.17767C16.9265 6.40395 17.351 6.15941 17.2889 5.82669C17.205 5.37662 17.1281 4.91477 17.0456 4.46233C16.9872 4.14206 17.3708 3.91559 17.6142 4.13173C19.0627 5.41769 20.5081 6.81728 21.9508 8.06255C22.1742 8.25539 22.5111 8.08433 22.4862 7.79024C22.4428 7.27673 22.3908 6.7504 22.3559 6.24079C22.3348 5.93285 22.712 5.77243 22.9343 5.98656C23.059 6.10676 23.1845 6.22686 23.3097 6.34985C24.5644 7.58189 25.8783 8.77699 27.1351 10.012C27.3503 10.2235 27.7148 10.072 27.7108 9.77028C27.7049 9.32695 27.6964 8.88158 27.692 8.44087C27.689 8.14302 28.0443 7.99445 28.255 8.20501C29.6345 9.58382 30.9706 11.0173 32.359 12.3857C32.3686 12.3952 32.3783 12.4047 32.3879 12.4143C32.5926 12.6182 32.925 12.4888 32.9364 12.2001C32.9509 11.8322 32.9681 11.4416 32.9918 11.0752C33.0104 10.7863 33.3589 10.6701 33.5535 10.8844C34.8005 12.2577 36.0352 13.6695 37.2696 15.0582C37.4675 15.2808 37.8394 15.1564 37.8714 14.8603C37.8934 14.6565 37.9176 14.4512 37.9429 14.2471C37.9808 13.9409 38.3812 13.8426 38.566 14.0897C39.5771 15.4428 40.8113 16.8463 41.8335 18.2141C42.0084 18.448 42.3913 18.3762 42.4722 18.0956C42.5542 17.8115 42.6471 17.5076 42.7372 17.2262C42.8256 16.9503 43.1935 16.9187 43.3338 17.1721C44.1644 18.673 45.0587 20.3116 45.8284 21.8187C45.9405 22.0381 46.2412 22.0689 46.3948 21.8764C46.551 21.6806 46.7158 21.4765 46.8774 21.2856C47.0391 21.0945 47.34 21.1541 47.4277 21.3886C47.808 22.4058 48.2416 23.5327 48.622 24.5985C48.7429 24.9372 49.2396 24.8872 49.2819 24.5301C49.2981 24.3934 49.3146 24.2565 49.3317 24.1201C49.3767 23.7628 49.8559 23.7417 49.9565 24.0876C50.3434 25.4174 50.8009 26.777 51.1568 28.0744C51.2518 28.4205 51.3745 28.8007 51.4903 29.1813C51.5882 29.5034 52.1003 29.5455 52.2425 29.2403C52.4748 28.7423 52.7354 28.212 52.9846 27.7119C53.1383 27.4035 53.6013 27.4973 53.6224 27.8413C53.6821 28.8137 53.736 29.7865 53.7839 30.7595C53.8204 31.4131 53.9071 32.4301 53.8973 33.0783C53.8969 33.1013 53.8988 33.1239 53.9029 33.1465L53.9105 33.1876C53.9237 33.259 53.9603 33.3236 54.0104 33.376C54.0265 33.3929 54.0418 33.4095 54.0564 33.4258C54.2004 33.5871 54.4411 33.5734 54.5579 33.3914L54.881 32.8879C55.0531 32.6198 55.4519 32.7186 55.4642 33.0369C55.4663 33.0918 55.4682 33.1462 55.4698 33.1999C55.5153 34.7094 55.6081 36.2325 55.6474 37.7459C55.6552 38.0462 56.0064 38.1788 56.1934 37.9436C56.3982 37.6861 56.6061 37.41 56.8161 37.1454C57.0048 36.9077 57.3507 37.0421 57.3353 37.3451C57.2977 38.0836 57.2226 38.9243 57.1768 39.5351C57.1233 40.2449 57.0835 41.0947 57.0195 41.8729C56.9943 42.1793 57.3428 42.3569 57.558 42.1374C57.797 41.8936 58.0501 41.6246 58.3011 41.3639C58.528 41.1281 58.8951 41.3301 58.8279 41.6504C58.5401 43.023 58.2449 44.3941 57.9424 45.7635C57.8727 46.0788 58.246 46.3076 58.4993 46.1073C58.6551 45.9842 58.812 45.8623 58.97 45.7419C59.2175 45.553 59.5398 45.7727 59.4464 46.0698C59.3633 46.3338 59.2771 46.5972 59.2025 46.8514C58.9145 47.8342 58.5866 48.8201 58.289 49.8055C58.2017 50.0948 58.5113 50.3375 58.7735 50.1873L59.1207 49.9885C59.3953 49.8313 59.7026 50.0989 59.5765 50.3891C59.4599 50.6575 59.3416 50.924 59.2409 51.1599C58.9139 51.9348 58.5803 52.7071 58.2403 53.4766C58.1162 53.7575 58.401 54.049 58.6854 53.9332C59.188 53.7285 59.6925 53.5282 60.1947 53.323C60.498 53.1991 60.7438 53.5041 60.5352 53.7567C60.4111 53.9069 60.2897 54.0501 60.1864 54.1745L58.4625 56.2433C58.0962 56.6789 57.688 57.1132 57.371 57.586C56.8712 58.3318 56.6825 59.3596 56.3609 60.1963C55.8239 61.5946 54.6086 63.5793 53.368 64.9735C52.8085 65.6023 52.6933 66.5688 53.1996 67.2413C53.8173 68.0618 54.4484 68.9156 55.065 69.6808C55.2861 69.9551 55.2649 70.3498 54.9875 70.5671C54.6802 70.8078 54.2152 70.7328 53.9774 70.4232C53.7529 70.1309 53.5072 69.823 53.3669 69.6396L52.2278 68.149C51.6808 67.4333 50.6128 67.3327 49.8206 67.7613C48.1708 68.6537 45.8732 69.3558 44.4386 69.5391C43.5129 69.6577 42.5024 69.5737 41.602 69.8063C40.9997 69.9621 40.4184 70.2715 39.8537 70.5302C39.2416 70.8145 38.6274 71.0938 38.0108 71.3684C37.7395 71.4892 37.4554 71.2241 37.5541 70.944C37.6284 70.7333 37.7026 70.5224 37.7777 70.3122C37.8786 70.0299 37.5914 69.7584 37.3167 69.8782C36.4863 70.2402 35.6538 70.5978 34.8195 70.9509C34.5883 71.0488 34.3362 70.8687 34.3563 70.6185C34.3943 70.1445 34.4381 69.673 34.4709 69.1972C34.4865 68.9699 34.2743 68.7966 34.0538 68.8536L30.0964 69.8749C29.8236 69.9454 29.5966 69.6734 29.7281 69.4242C29.994 68.9202 30.2984 68.4155 30.5658 67.9041C30.6811 67.6837 30.5152 67.4275 30.2665 67.4304C28.8858 67.4463 27.4712 67.4343 26.0826 67.4372C25.8049 67.4378 25.6627 67.1368 25.8544 66.9358C26.0936 66.6849 26.3808 66.3998 26.6361 66.1516C26.8417 65.9517 26.7251 65.6012 26.4398 65.5725C25.6698 65.4952 24.8811 65.4354 24.1227 65.3641C23.5164 65.3073 22.8725 65.239 22.2451 65.1879C21.9488 65.1637 21.8157 64.7962 22.0344 64.5948C22.3065 64.3443 22.6068 64.0734 22.8852 63.8361C23.1106 63.644 23.0217 63.2502 22.732 63.1883C21.3002 62.8824 19.8369 62.5438 18.4077 62.217C18.1162 62.1503 18.0472 61.7641 18.2972 61.6002C18.6275 61.3836 18.9659 61.1624 19.2962 60.9546C19.5317 60.8065 19.5055 60.4512 19.2465 60.3494C17.8594 59.8041 16.4185 59.3342 15.0361 58.7898C14.7438 58.6747 14.4437 58.5604 14.1413 58.4496C13.8186 58.3314 13.8481 57.8666 14.186 57.8039C14.6193 57.7235 15.0579 57.6442 15.4833 57.5573C15.793 57.494 15.8393 57.0767 15.5601 56.9284C14.9333 56.5955 14.2896 56.2248 13.6996 55.9026C12.8471 55.4371 11.9715 54.9695 11.1166 54.491C10.8386 54.3354 10.9179 53.9322 11.2348 53.8991C11.5829 53.8628 11.9478 53.8303 12.2928 53.8032C12.536 53.7841 12.6217 53.4409 12.4211 53.302C11.435 52.6175 10.3974 51.9755 9.4179 51.2784C9.25892 51.1653 9.23182 50.9407 9.35868 50.7924C9.56536 50.5509 9.77527 50.3121 9.98835 50.0761C10.1158 49.935 10.1039 49.7166 9.9606 49.5916L7.67529 47.5994C7.34575 47.3102 6.92155 46.9214 6.53885 46.6002C6.35728 46.4477 6.37138 46.1577 6.57387 46.0345C6.8987 45.8367 7.22876 45.6406 7.55501 45.4453C7.72886 45.3413 7.77251 45.1078 7.65821 44.9405C7.59174 44.8432 7.52734 44.745 7.46825 44.6535C6.48594 43.1311 5.43555 41.627 4.45793 40.0957C4.28791 39.8294 4.54624 39.505 4.84363 39.6117C4.93101 39.6431 5.0183 39.6747 5.1055 39.7066C5.39653 39.8129 5.66139 39.5119 5.50297 39.2456C5.45319 39.1619 5.40339 39.0798 5.35435 39.0003C4.44868 37.532 3.63063 35.9631 2.73559 34.4767C2.57341 34.2073 2.82611 33.8852 3.11921 33.999C3.33067 34.081 3.54359 34.1688 3.75185 34.2593C4.04104 34.385 4.33461 34.0968 4.18987 33.8166C4.01853 33.485 3.83803 33.1519 3.68379 32.8551L2.06131 29.744C1.88531 29.4075 1.64132 28.9624 1.43255 28.5408C1.30101 28.2752 1.56096 28.0186 1.83117 28.1405C2.11224 28.2672 2.39356 28.3971 2.67401 28.5277C2.97841 28.6694 3.31864 28.3068 3.17096 28.0053C2.9207 27.4943 2.66654 26.9445 2.5011 26.6037L0.711996 22.8993C0.571643 22.6087 0.878481 22.3084 1.16406 22.4587C1.50231 22.6368 1.83873 22.8183 2.17328 23.0032C2.45047 23.1564 2.79232 22.8364 2.66766 22.5453C1.90421 20.7624 1.02565 18.9924 0.252696 17.2058C0.12323 16.9066 0.448267 16.6326 0.720547 16.812C1.08614 17.0528 1.44978 17.2976 1.81433 17.5343C1.85803 17.5627 1.90214 17.5921 1.94656 17.6222C2.21671 17.8049 2.51414 17.5465 2.38143 17.2486C1.77759 15.893 1.20905 14.5145 0.59061 13.1682C0.404679 12.7634 0.209032 12.333 0.0285634 11.9046C-0.0891044 11.6254 0.178853 11.3967 0.429661 11.5668C0.592106 11.677 0.745494 11.7844 0.861052 11.8636L1.75469 12.4812C2.03434 12.6745 2.38961 12.3811 2.2509 12.0708C1.58106 10.5721 0.888794 9.08171 0.229585 7.57922C0.217068 7.55069 0.204545 7.52221 0.192024 7.49376C0.0538278 7.17978 0.402657 6.92389 0.664817 7.14515C1.03404 7.45676 1.40691 7.77739 1.77062 8.09781C2.03714 8.33261 2.41941 8.06662 2.2762 7.74158C2.10594 7.35514 1.93362 6.97257 1.79508 6.65152L0.414913 3.4518C0.272578 3.12182 0.631539 2.87475 0.87299 3.14092C1.10866 3.40072 1.34632 3.67268 1.58202 3.94342C1.83111 4.22956 2.2174 3.97053 2.05374 3.62828C1.60386 2.68744 1.14637 1.72999 0.721842 0.790694Z" }
  ];
  const LEAF_LAYERS = [
    { n: 4, s: [130, 180], d: [18, 24], o: 0.55, b: [0, 2.5], soft: 0.5, c: ["--db-yellow-300", "--db-orange-300", "--db-red-400", "--db-yellow-200"] },
    { n: 3, s: [220, 290], d: [13, 17], o: 0.9, b: [0, 0.8], soft: 0.8, c: ["--db-yellow-300", "--db-orange-400", "--db-red-400", "--db-yellow-400"] },
    { n: 2, s: [380, 480], d: [10, 13], o: 0.85, edge: true, b: [12, 1.5], soft: 1.4, c: ["--db-orange-400", "--db-red-500", "--db-yellow-400", "--db-orange-500"] }
  ];
  /* Single-family palettes (far, middle, near): lighter shades far away, deeper ones close up. */
  const LEAF_PALETTES = {
    yellows: [["--db-yellow-200", "--db-yellow-300"], ["--db-yellow-300", "--db-yellow-400"], ["--db-yellow-400", "--db-yellow-500"]],
    oranges: [["--db-orange-200", "--db-orange-300"], ["--db-orange-300", "--db-orange-400"], ["--db-orange-400", "--db-orange-500"]],
    reds: [["--db-red-400"], ["--db-red-400", "--db-red-500"], ["--db-red-400", "--db-red-500"]]
  };
  /* Seasonal variants of the Clearance banner (Tweaks: Season). toRight drifts the motif left to right instead (start
     points mirrored); gentle stretches the fall time. Each sets the motif's shapes, its colors (per depth: far,
     middle, near; "all" plus single-family choices), the shade its bends darken toward, which way it moves (dir 1 falls,
     -1 rises) and the banner copy. Fall keeps the leaves it was built with. Background colors live in plp.css
     ([data-season]). */
  const SEASONS = {
    fall: { shapes: [0, 1], dir: 1, even: true, vol: true, dark: "--db-yellow-700", front: true, frontLayer: 1, frontScale: 1.2, curlAnim: true, palettes: Object.assign({ all: LEAF_LAYERS.map((L) => L.c) }, LEAF_PALETTES),
      copy: { eyebrow: "Fall Clearance Sale", text: "Final markdowns on books, art, and gifts.\nLimited quantities, while supplies last." } },
    /* Winter's ground is light (Granite to Blue 100), so its flakes are blues with a little white far away. */
    winter: { shapes: [2, 6], dir: 1, dark: "--db-blue-600", glass: true, thick: 0.025, flat: true, front: true, frontLayer: 1, frontScale: 0.6, grad: ["--db-white", "--db-dove", "--db-blue-100"],
      palettes: { all: [["--db-white", "--db-blue-200"], ["--db-blue-200", "--db-blue-300"], ["--db-blue-300", "--db-blue-400"]],
        whites: [["--db-white"], ["--db-white"], ["--db-white"]], blues: [["--db-blue-200", "--db-blue-300"], ["--db-blue-300", "--db-blue-400"], ["--db-blue-400", "--db-blue-500"]] },
      copy: { eyebrow: "Winter Clearance Sale", text: "Year-end markdowns on books, art, and gifts.\nLimited quantities, while supplies last." } },
    /* Petals twice as often as leaves; leaves are smaller (leafScale) and green (leafColors: a light and a medium green, leafDark for shading). */
    spring: { shapes: [7, 7, 7, 8, 8], leafShape: 8, leafScale: 0.6, curlAnim: true, leafColors: ["--db-green-200", "--db-green-400"], leafDark: "--db-green-600", dir: 1, toRight: true, gentle: 1.5, dark: "--db-red-600", front: true, frontLayer: 1, frontScale: 1.2,
      palettes: { all: [["--db-white", "--db-red-100"], ["--db-white", "--db-red-100", "--db-red-200"], ["--db-red-300", "--db-red-200", "--db-red-600"]],
        pinks: [["--db-pink-100", "--db-pink-200"], ["--db-pink-200", "--db-pink-300"], ["--db-pink-300", "--db-pink-400"]], whites: [["--db-white"], ["--db-white"], ["--db-white"]] },
      copy: { eyebrow: "Spring Clearance Sale", text: "Fresh markdowns on books, art, and gifts.\nLimited quantities, while supplies last." } },
    /* Summer: no falling motif; a sunrise. The sun sits at the bottom middle and sends out soft haloes (SunMotif). */
    summer: { motif: "sun", shapes: [5], dir: -1, dark: "--db-yellow-400",
      palettes: { all: [["--db-yellow-100", "--db-green-100"], ["--db-yellow-100", "--db-yellow-200"], ["--db-yellow-100", "--db-yellow-200"]],
        yellows: [["--db-yellow-100"], ["--db-yellow-100", "--db-yellow-200"], ["--db-yellow-200"]], greens: [["--db-green-100"], ["--db-green-100", "--db-green-200"], ["--db-green-200"]] },
      copy: { eyebrow: "Summer Clearance Sale", text: "Sunny markdowns on books, art, and gifts.\nLimited quantities, while supplies last." } }
  };
  /* Every parameter the Tweaks panel exposes  /* Every parameter the Tweaks panel exposes (Main Site.html, "Fall leaves" section). The panel sends changes as a
     db-leaves event; window.DB_LEAVES holds the current values. Percentages scale the built-in values above. */
  const LEAF_DEFAULTS = { season: "fall", leafOn: true, leafFar: 4, leafMid: 3, leafNear: 2, leafSize: 100, leafPhone: 50, leafSpeed: 100, leafDrift: 38, leafSway: 0, leafThick: 0, leafShadow: 65, leafFront1: 2, leafFront2: 76,
    leafCurl: 100, leafCurl2: 100, leafCurl3: 0, leafCurlDir: "mixed", leafRotX: 30, leafRotXVar: 15, leafRotY: 0, leafRotYVar: 35, leafRotZ: -15, leafRotZVar: 45, leafSpinX: 0, leafSpinY: 0, leafSpinZ: 0,
    leafCols: 40, leafRows: 40, leafBlur: 100, leafFocus: 100, leafSoft: false, leafSoftAmt: 8, leafOpacity: 100, leafPalette: "all",
    leafClear: true, leafSeed: 1, leafGlint: 0,
    sunOn: true, sunSize: 100, sunHalos: 4, sunSpeed: 100, sunGlow: 100, sunRays: 35, sunSky: 160, sunBlur: 8, sunRayCount: 24,
    /* Summer's sky gradient (Tweaks: Sky gradient): up to 8 stops, each a DS color token (sunG<n>C), its strength over white
       (sunG<n>M, %) and its position from the sun outward (sunG<n>P, %). sunGN is how many are in use. */
    sunGN: 6, sunG1C: "white", sunG1M: 100, sunG1P: 0, sunG2C: "white", sunG2M: 100, sunG2P: 34, sunG3C: "yellow-200", sunG3M: 50, sunG3P: 48,
    sunG4C: "orange-200", sunG4M: 80, sunG4P: 64, sunG5C: "orange-300", sunG5M: 50, sunG5P: 76, sunG6C: "purple-300", sunG6M: 50, sunG6P: 94,
    sunG7C: "purple-400", sunG7M: 100, sunG7P: 100, sunG8C: "purple-500", sunG8M: 100, sunG8P: 100,
    /* Background shape (Tweaks: Seasonal banner > Background, or Sky in summer): bgS scales the radial gradient (%), bgR is its
       roundness (0% = stretched to the banner's proportions, as built; 100% = a circle; more = taller than wide), bgY is its
       center from the top (%; unset = the season's built-in center). Each season's colors (bgG ground, bgO its opacity, bgN
       stops of bg<n>C/M/P) arrive from the panel; without them the built-in gradients in plp.css show. */
    bgS: 100, bgR: 0 };
  /* The sky's color stops as a CSS list (sorted by position), for --sky-stops in plp.css. */
  function skyStops(P) {
    const n = Math.max(2, Math.min(8, P.sunGN | 0 || 0));
    const list = [];
    for (let i = 1; i <= n; i++) {
      const c = String(P["sunG" + i + "C"] || "white").replace(/[^a-z0-9-]/g, ""), m = Math.max(0, Math.min(100, +P["sunG" + i + "M"] || 0)), pos = Math.max(0, Math.min(100, +P["sunG" + i + "P"] || 0));
      list.push({ pos, css: (m >= 100 ? "var(--db-" + c + ")" : "color-mix(in srgb,var(--db-" + c + ") " + m + "%,white)") + " " + pos + "%" });
    }
    return list.sort((a, b) => a.pos - b.pos).map((x) => x.css).join(",");
  }
  window.DB_SKY_STOPS = skyStops;
  /* Spring's background stops as a CSS list (sorted by position), each blended over the ground color, for --bg-stops in plp.css. */
  const tok = (c, d) => String(c || d).replace(/[^a-z0-9-]/g, "");
  const bgGround = (P) => { const o = P.bgO == null ? 100 : Math.max(0, Math.min(100, +P.bgO)), c = "var(--db-" + tok(P.bgG, "white") + ")";
    return o >= 100 ? c : "color-mix(in srgb," + c + " " + o + "%,transparent)"; };
  /* Built-in shape per season: the radii (% of the banner's width and height) and the center height. */
  const BG_SHAPE = { fall: [150, 115, 135], winter: [150, 115, 135], spring: [150, 115, 85], summer: [150, 160, 118] };
  /* The radii as CSS lengths: scaled, and from stretched (each radius a % of its own side) toward a circle (the height
     radius taken toward the width radius), which needs the banner's size in px. */
  function bgRadii(P, season, size) {
    const B = BG_SHAPE[season] || BG_SHAPE.fall, sc = Math.max(10, +P.bgS || 100) / 100, r = Math.max(0, +P.bgR || 0) / 100;
    const ryPct = season === "summer" ? (+P.sunSky || 160) : B[1];
    if (!r || !size || !size.w || !size.h) return [(B[0] * sc).toFixed(1) + "%", (ryPct * sc).toFixed(1) + "%"];
    const rx = B[0] / 100 * size.w * sc, ry0 = ryPct / 100 * size.h * sc;
    return [rx.toFixed(1) + "px", (ry0 + (rx - ry0) * r).toFixed(1) + "px"];
  }
  function bgStops(P) {
    const n = Math.max(2, Math.min(8, P.bgN | 0 || 0)), g = bgGround(P);
    const list = [];
    for (let i = 1; i <= n; i++) {
      const c = tok(P["bg" + i + "C"], "white"), m = Math.max(0, Math.min(100, +P["bg" + i + "M"] || 0)), pos = Math.max(0, Math.min(100, +P["bg" + i + "P"] || 0));
      list.push({ pos, css: (m >= 100 ? "var(--db-" + c + ")" : m <= 0 ? g : "color-mix(in srgb,var(--db-" + c + ") " + m + "%," + g + ")") + " " + pos + "%" });
    }
    return list.sort((a, b) => a.pos - b.pos).map((x) => x.css).join(",");
  }
  window.DB_BG_STOPS = bgStops;
  window.DB_LEAF_DEFAULTS = LEAF_DEFAULTS;
  /* A curl along one axis: k = degrees per step at the reference detail (10 steps a side; scaled so a denser mesh keeps the
     same total bend). */
  const leafCurl = (r, P, amt) => {
    const k = [0, 3, 6, 10, 15][Math.floor(r() * 5)] * amt / 100;
    const flip = r() < 0.5;
    const sign = P.leafCurlDir === "toward" ? 1 : P.leafCurlDir === "away" ? -1 : flip ? -1 : 1;
    r(); /* (a draw kept so every Layout seed keeps its arrangement) */
    return { k: k * sign };
  };
  const curlStep = (c, i, n) => i === 0 ? 0 : c.k * (10 / n);
  /* One side's profile: positions of the n+1 grid lines out from the center (distance a, depth z), each step w long. */
  function curlProfile(c, n, w) {
    const a = [0], z = [0];
    let th = 0;
    for (let i = 0; i < n; i++) { th += curlStep(c, i, n) * Math.PI / 180; a.push(a[i] + w * Math.cos(th)); z.push(z[i] + w * Math.sin(th)); }
    return { a, z };
  }
  const hexRgb = (v) => { const m = /#([0-9a-f]{6})/i.exec(v || ""); const n = m ? parseInt(m[1], 16) : 0xc18630; return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
  /* The leaf shape as a texture: filled white; with an outline (winter), its edges stroked in the outline color, so the
     renderers find the outline where the texture is no longer white. */
  const leafTexture = (() => { const cache = {}; return (shape, deg, outline) => {
    const key = shape + ":" + deg + ":" + (outline || "");
    if (cache[key]) return cache[key];
    const TS = 512, t = document.createElement("canvas"); t.width = t.height = TS;
    const x = t.getContext("2d"), S = LEAF_SHAPES[shape] || LEAF_SHAPES[0], k = (TS * 2 / 3) / Math.max(S.w, S.h);
    /* The leaf box is the middle two thirds of the texture (the mesh covers 1.5x the leaf); the drawing is centered in it. */
    x.translate(TS / 2, TS / 2); x.rotate(deg * Math.PI / 180); x.scale(k, k); x.translate(-S.w / 2, -S.h / 2);
    const path = new Path2D(S.d);
    x.fillStyle = "#fff"; x.fill(path);
    if (outline) { x.strokeStyle = outline; x.lineWidth = 3 / k; x.lineJoin = "round"; x.lineCap = "round"; x.stroke(path); }
    return (cache[key] = t);
  }; })();
  /* Draws one leaf: mesh (cols x rows over a box 1.5x the leaf, centered on it), bent, turned (Z: bend axis, then yaw, then
     tilt, the CSS order), perspective 3x the leaf, each triangle filled in its shaded flat color, cut to the leaf shape mapped through the same triangles. */
  function drawLeaf(cv, L, px) {
    const CS = Math.max(64, Math.min(1024, Math.round(px * 1.5 * (window.devicePixelRatio || 1))));
    if (cv.width !== CS) { cv.width = CS; cv.height = CS; }
    const g = cv.getContext("2d");
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, CS, CS);
    const tex = leafTexture(L.shape, -L.ax, L.outline), TS = tex.width;
    /* Two layers so overlapping triangles never tint each other: the colors (opaque triangles) and the leaf shape (the
       texture mapped through each triangle), joined at the end. */
    const mk = drawLeaf.mask || (drawLeaf.mask = document.createElement("canvas"));
    mk.width = CS; mk.height = CS;
    const M = mk.getContext("2d");
    const n = L.cols, m = L.rows, w = 0.75 / n, hgt = 0.75 / m;
    const pr = curlProfile(L.cR, n, w), pl = curlProfile(L.cL, n, w), pd = curlProfile(L.vD, m, hgt), pu = curlProfile(L.vU, m, hgt);
    /* Diagonal curl: a third bend across the leaf's diagonal (corner to corner, either way), added as depth from the
       diagonal line through the center outward; same step size as the columns, long enough to reach the far corners. */
    const nD = Math.ceil(1.1 / w) + 1, pg = curlProfile({ k: L.cD.k * nD / n }, nD, w);
    const zD = (t) => { const q = Math.min(nD - 1e-6, Math.abs(t) / w), q0 = Math.floor(q); return pg.z[q0] + (pg.z[q0 + 1] - pg.z[q0]) * (q - q0); };
    const rad = Math.PI / 180, ca = Math.cos(L.ax * rad), sa = Math.sin(L.ax * rad), cy = Math.cos(L.yaw * rad), sy = Math.sin(L.yaw * rad), ct = Math.cos(L.tilt * rad), st = Math.sin(L.tilt * rad);
    const P = [], S = [], T = [];
    for (let j = -m; j <= m; j++) {
      for (let i = -n; i <= n; i++) {
        const hx = i >= 0 ? pr : pl, hy = j >= 0 ? pd : pu;
        let x = (i >= 0 ? 1 : -1) * hx.a[Math.abs(i)], y = (j >= 0 ? 1 : -1) * hy.a[Math.abs(j)], z = hx.z[Math.abs(i)] + hy.z[Math.abs(j)] + (L.cD.k ? zD((i * w + L.cD.dir * j * hgt) / Math.SQRT2) : 0);
        let x1 = x * ca - y * sa, y1 = x * sa + y * ca; x = x1; y = y1;
        x1 = x * cy + z * sy; let z1 = -x * sy + z * cy; x = x1; z = z1;
        y1 = y * ct - z * st; z1 = y * st + z * ct; y = y1; z = z1;
        const k = 3 / (3 - z), sc = CS / 1.5;
        P.push([x, y, z]); S.push([CS / 2 + x * k * sc, CS / 2 + y * k * sc]);
        T.push([(0.5 + i * 0.5 / n) * TS, (0.5 + j * 0.5 / m) * TS]);
      }
    }
    const base = hexRgb(L.color), dark = hexRgb(L.dark), Lx = -0.35, Ly = -0.45, Lz = 0.82;
    const W = 2 * n + 1;
    const tri = (a, b, c) => {
      const pa = P[a], pb = P[b], pc = P[c];
      const ux = pb[0] - pa[0], uy = pb[1] - pa[1], uz = pb[2] - pa[2], vx = pc[0] - pa[0], vy = pc[1] - pa[1], vz = pc[2] - pa[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const nl = Math.hypot(nx, ny, nz) || 1;
      const I = Math.abs((nx * Lx + ny * Ly + nz * Lz) / nl), f = Math.max(0, Math.min(0.42, (0.82 - I) * 0.7));
      const col = "rgb(" + base.map((v, q) => Math.round(v + (dark[q] - v) * f)).join(",") + ")";
      const [x0, y0] = S[a], [x1, y1] = S[b], [x2, y2] = S[c], [u0, v0] = T[a], [u1, v1] = T[b], [u2, v2] = T[c];
      const det = u0 * (v1 - v2) + u1 * (v2 - v0) + u2 * (v0 - v1);
      if (Math.abs(det) < 1e-6) return;
      /* Grow the triangle a little from its center so neighbors overlap: no hairline seams. */
      const mx = (x0 + x1 + x2) / 3, my = (y0 + y1 + y2) / 3, gr = (x, y) => { const dx = x - mx, dy = y - my, l = Math.hypot(dx, dy) || 1; return [x + dx / l * 1.5, y + dy / l * 1.5]; };
      const A = gr(x0, y0), B = gr(x1, y1), C = gr(x2, y2);
      g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.lineTo(C[0], C[1]); g.closePath(); g.fillStyle = col; g.fill();
      M.save(); M.beginPath(); M.moveTo(A[0], A[1]); M.lineTo(B[0], B[1]); M.lineTo(C[0], C[1]); M.closePath(); M.clip();
      const ta = (x0 * (v1 - v2) + x1 * (v2 - v0) + x2 * (v0 - v1)) / det, tb = (y0 * (v1 - v2) + y1 * (v2 - v0) + y2 * (v0 - v1)) / det;
      const tc = (x0 * (u2 - u1) + x1 * (u0 - u2) + x2 * (u1 - u0)) / det, td = (y0 * (u2 - u1) + y1 * (u0 - u2) + y2 * (u1 - u0)) / det;
      const te = (x0 * (u1 * v2 - u2 * v1) + x1 * (u2 * v0 - u0 * v2) + x2 * (u0 * v1 - u1 * v0)) / det, tf = (y0 * (u1 * v2 - u2 * v1) + y1 * (u2 * v0 - u0 * v2) + y2 * (u0 * v1 - u1 * v0)) / det;
      M.setTransform(ta, tb, tc, td, te, tf); M.drawImage(tex, 0, 0);
      M.restore();
    };
    /* Painter's order: farthest triangles first, so where a curl folds over itself the near side covers the far side. */
    const list = [];
    for (let j = 0; j < 2 * m; j++) for (let i = 0; i < 2 * n; i++) {
      const a = j * W + i, b = a + 1, c = a + W, d = c + 1;
      list.push([a, b, d, P[a][2] + P[b][2] + P[d][2]], [a, d, c, P[a][2] + P[d][2] + P[c][2]]);
    }
    list.sort((p, q) => p[3] - q[3]).forEach((t) => tri(t[0], t[1], t[2]));
    g.globalCompositeOperation = "destination-in"; g.drawImage(mk, 0, 0);
    /* The outline (winter): the mapped texture is white inside and the outline color at the edges, so multiplying it in tints only the edges. */
    if (L.outline) { g.globalCompositeOperation = "multiply"; g.drawImage(mk, 0, 0); }
    g.globalCompositeOperation = "source-over";
  }
  /* ---- 3D renderer (WebGL). The curled mesh is real geometry turned every frame, so the curl, its shading and its folds
     stay 3D while a leaf rotates. Each leaf canvas draws itself with WebGL, so the fall, spin and blur stay plain CSS on the page. Leaves that don't turn on X or Y are
     drawn once. Without WebGL, drawLeaf above draws a still picture instead. ---- */
  function leafGeometry(L, sg) {
    const n = L.mesh || L.cols, m = L.mesh || L.rows, w = 0.75 / n, hgt = 0.75 / m, W = 2 * n + 1, H = 2 * m + 1;
    const pr = curlProfile(L.cR, n, w), pl = curlProfile(L.cL, n, w), pd = curlProfile(L.vD, m, hgt), pu = curlProfile(L.vU, m, hgt);
    const nD = Math.ceil(1.1 / w) + 1, pg = curlProfile({ k: L.cD.k * nD / n }, nD, w);
    const zD = (t) => { const q = Math.min(nD - 1e-6, Math.abs(t) / w), q0 = Math.floor(q); return pg.z[q0] + (pg.z[q0 + 1] - pg.z[q0]) * (q - q0); };
    const pos = new Float32Array(W * H * 3), uv = new Float32Array(W * H * 2), nrm = new Float32Array(W * H * 3);
    let v = 0;
    for (let j = -m; j <= m; j++) for (let i = -n; i <= n; i++, v++) {
      const hx = i >= 0 ? pr : pl, hy = j >= 0 ? pd : pu;
      pos[v * 3] = (i >= 0 ? 1 : -1) * hx.a[Math.abs(i)];
      pos[v * 3 + 1] = (j >= 0 ? 1 : -1) * hy.a[Math.abs(j)];
      pos[v * 3 + 2] = hx.z[Math.abs(i)] + hy.z[Math.abs(j)] + (L.cD.k ? zD((i * w + L.cD.dir * j * hgt) / Math.SQRT2) : 0);
      uv[v * 2] = 0.5 + i * 0.5 / n; uv[v * 2 + 1] = 0.5 + j * 0.5 / m;
      /* Glass: half the blade's height on this face (the other face mirrors it). */
      if (L.glass || L.vol) { const B = leafBlade(L.shape, -L.ax), tx = Math.min(B.TS - 1, Math.round(uv[v * 2] * (B.TS - 1))), ty = Math.min(B.TS - 1, Math.round(uv[v * 2 + 1] * (B.TS - 1))); pos[v * 3 + 2] += B.h[ty * B.TS + tx] * L.thick / 2 * (L.vol ? (sg || 1) : 1); }
    }
    /* Vertex normals from the neighbors on each side (one-sided at the edges). */
    const P = (c, r, k) => pos[(r * W + c) * 3 + k];
    for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) {
      const c0 = Math.max(0, c - 1), c1 = Math.min(W - 1, c + 1), r0 = Math.max(0, r - 1), r1 = Math.min(H - 1, r + 1);
      const ax = P(c1, r, 0) - P(c0, r, 0), ay = P(c1, r, 1) - P(c0, r, 1), az = P(c1, r, 2) - P(c0, r, 2);
      const bx = P(c, r1, 0) - P(c, r0, 0), by = P(c, r1, 1) - P(c, r0, 1), bz = P(c, r1, 2) - P(c, r0, 2);
      const o = (r * W + c) * 3;
      nrm[o] = ay * bz - az * by; nrm[o + 1] = az * bx - ax * bz; nrm[o + 2] = ax * by - ay * bx;
    }
    const idx = new Uint16Array((W - 1) * (H - 1) * 6);
    let q = 0;
    for (let r = 0; r < H - 1; r++) for (let c = 0; c < W - 1; c++) {
      const a = r * W + c, b = a + 1, d = a + W, e = d + 1;
      idx[q++] = a; idx[q++] = b; idx[q++] = e; idx[q++] = a; idx[q++] = e; idx[q++] = d;
    }
    return { pos, uv, nrm, idx };
  }
  /* Glass (winter; its shade, Blue 600, is used at 40% over Blue 100 so the glass stays light): the shape as a blade. A distance-to-edge map of the texture (two-pass chamfer) gives a height that
     rises from nothing at every edge to the full thickness about 22 texels in (arm centers and the hub), so the flake is
     thickest along its middle and sharp as a blade at its edges. Packed as one RGBA texture: the height's slope (R, G: the
     facet normals that catch the light), the height (B) and the shape (A); h is kept for the mesh. */
  const leafBlade = (() => { const cache = {}; return (shape, deg) => {
    const key = shape + ":" + deg;
    if (cache[key]) return cache[key];
    const src = leafTexture(shape, deg), TS = src.width, N = TS * TS;
    const al = src.getContext("2d").getImageData(0, 0, TS, TS).data, d = new Float32Array(N), BIG = 1e6;
    for (let i = 0; i < N; i++) d[i] = al[i * 4 + 3] > 127 ? BIG : 0;
    const R2 = Math.SQRT2;
    for (let y = 0; y < TS; y++) for (let x = 0; x < TS; x++) { const i = y * TS + x; if (!d[i]) continue; let v = d[i];
      if (x > 0) v = Math.min(v, d[i - 1] + 1); if (y > 0) { v = Math.min(v, d[i - TS] + 1); if (x > 0) v = Math.min(v, d[i - TS - 1] + R2); if (x < TS - 1) v = Math.min(v, d[i - TS + 1] + R2); } d[i] = v; }
    for (let y = TS - 1; y >= 0; y--) for (let x = TS - 1; x >= 0; x--) { const i = y * TS + x; if (!d[i]) continue; let v = d[i];
      if (x < TS - 1) v = Math.min(v, d[i + 1] + 1); if (y < TS - 1) { v = Math.min(v, d[i + TS] + 1); if (x < TS - 1) v = Math.min(v, d[i + TS + 1] + R2); if (x > 0) v = Math.min(v, d[i + TS - 1] + R2); } d[i] = v; }
    const DP = 22, h = new Float32Array(N), out = new Uint8Array(N * 4);
    for (let i = 0; i < N; i++) h[i] = d[i] ? Math.min(1, d[i] / DP) : 0;
    /* The slopes come from a softened copy (box blur, radius 2, twice each way), so the facets shade smoothly, not in steps. */
    let sm = h.slice(), tmp = new Float32Array(N);
    const box = (A, Bf, dx, dy) => { for (let y = 0; y < TS; y++) for (let x = 0; x < TS; x++) { let t = 0; for (let k = -2; k <= 2; k++) { const xx = Math.min(TS - 1, Math.max(0, x + k * dx)), yy = Math.min(TS - 1, Math.max(0, y + k * dy)); t += A[yy * TS + xx]; } Bf[y * TS + x] = t / 5; } };
    for (let k = 0; k < 2; k++) { box(sm, tmp, 1, 0); box(tmp, sm, 0, 1); }
    for (let y = 0; y < TS; y++) for (let x = 0; x < TS; x++) {
      const i = y * TS + x, gx = (sm[y * TS + Math.min(TS - 1, x + 1)] - sm[y * TS + Math.max(0, x - 1)]) * DP / 2, gy = (sm[Math.min(TS - 1, y + 1) * TS + x] - sm[Math.max(0, y - 1) * TS + x]) * DP / 2;
      out[i * 4] = Math.round(127.5 + 127 * Math.max(-1, Math.min(1, gx))); out[i * 4 + 1] = Math.round(127.5 + 127 * Math.max(-1, Math.min(1, gy)));
      out[i * 4 + 2] = Math.round(h[i] * 255); out[i * 4 + 3] = al[i * 4 + 3];
    }
    return (cache[key] = { TS, h, data: out });
  }; })();
  /* Volume (winter): the shape's edge as a thin wall, so a flat flake keeps its silhouette when it turns edge-on. The
     outline is sampled from the SVG path (each subpath on its own) into the mesh's local units (the same mapping as the
     texture, turned by -ax), then each pair of points becomes a quad from -th/2 to +th/2, its normal facing outward. */
  const leafWalls = (() => { const cache = {}; return (shape, ax, th) => {
    const key = shape + ":" + ax + ":" + th;
    if (cache[key]) return cache[key];
    const S = LEAF_SHAPES[shape] || LEAF_SHAPES[0], M = Math.max(S.w, S.h), a = ax * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
    const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const subs = S.d.match(/[Mm][^Mm]*/g) || [];
    let pos = [], nrm = [], idx = [];
    let start = null;
    subs.forEach((sd, si) => {
      /* relative moveto after the first subpath: resolve against where the previous subpath started */
      let d = sd;
      if (sd[0] === "m" && si > 0 && start) { const m = /^m\s*(-?[\d.]+)[\s,]*(-?[\d.]+)/.exec(sd); if (m) d = "M" + (start[0] + +m[1]) + " " + (start[1] + +m[2]) + sd.slice(m[0].length); }
      el.setAttribute("d", d);
      let len = 0; try { len = el.getTotalLength(); } catch (e) { return; }
      if (!len) return;
      const n = Math.max(12, Math.min(900, Math.round(len / (M / 260))));
      const pts = [];
      for (let i = 0; i <= n; i++) { const q = el.getPointAtLength(len * i / n); if (i === 0) start = [q.x, q.y]; const x = (q.x - S.w / 2) / M, y = (q.y - S.h / 2) / M; pts.push([x * ca + y * sa, -x * sa + y * ca]); }
      for (let i = 0; i < n; i++) {
        const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], l = Math.hypot(dx, dy);
        if (l < 1e-6) continue;
        const b = pos.length / 3, nx = dy / l, ny = -dx / l;
        pos.push(p0[0], p0[1], -th / 2, p1[0], p1[1], -th / 2, p1[0], p1[1], th / 2, p0[0], p0[1], th / 2);
        for (let k = 0; k < 4; k++) nrm.push(nx, ny, 0);
        idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
      }
    });
    if (pos.length / 3 > 65000) { pos = []; nrm = []; idx = []; }
    return (cache[key] = { pos: new Float32Array(pos), nrm: new Float32Array(nrm), uv: new Float32Array(pos.length / 3 * 2).fill(0.5), idx: new Uint16Array(idx) });
  }; })();
  /* The motifs' own clock (curl timing): it stops while the banner's animations are off (Tweaks: Animations), so the
     leaves pick up exactly where they froze when they're turned back on. */
  const leafClock = (() => {
    let off = 0, at = null;
    return {
      now: () => ((at == null ? performance.now() : at) - off) / 1000,
      get still() { return at != null; },
      set(still) { if (still && at == null) at = performance.now(); else if (!still && at != null) { off += performance.now() - at; at = null; } }
    };
  })();
  const LeafGL = (() => {
    const VS = "attribute vec3 p;attribute vec3 nr;attribute vec2 t;uniform mat3 R;uniform vec3 L;uniform float Zo;uniform float Zs;uniform float Cv;uniform vec4 Kc;uniform float Kg;uniform float Gd;varying vec2 vt;varying float vi;varying vec3 vn;varying vec3 vX;varying vec3 vY;varying vec3 vZ;" +
      "vec2 arc(float s,float k){if(abs(k)<1e-4)return vec2(s,0.5*k*s*s);return vec2(sin(k*s)/k,(1.0-cos(k*s))/k);}" +
      "vec3 cp(vec2 f){vec2 ax=arc(abs(f.x),f.x>=0.0?Kc.x:Kc.y);vec2 ay=arc(abs(f.y),f.y>=0.0?Kc.z:Kc.w);float zd=arc(abs(f.x+Gd*f.y)*0.70710678,Kg).y;return vec3(sign(f.x)*ax.x,sign(f.y)*ay.x,ax.y+ay.y+zd);}" +
      "void main(){vec3 pp=p;vec3 nn=nr;if(Cv>0.5){vec2 f=(t-0.5)*1.5;const float e=0.01;pp=cp(f);nn=cross(cp(f+vec2(e,0.0))-cp(f-vec2(e,0.0)),cp(f+vec2(0.0,e))-cp(f-vec2(0.0,e)));}" +
      "vec3 q=R*(vec3(pp.xy,pp.z*Zs)+vec3(0.0,0.0,Zo));vX=R*vec3(1.0,0.0,0.0);vY=R*vec3(0.0,1.0,0.0);vZ=R*vec3(0.0,0.0,Zs);vec3 n=normalize(R*nn);vn=n;vi=abs(dot(n,L));vt=t;float w=(3.0-q.z)/3.0;gl_Position=vec4(q.x/0.75,-q.y/0.75,(-q.z/3.0)*w,w);}";
    /* Color. Flat (M 0): the leaf color, deeper where it faces away from the light. Gradient (M 1, winter): a three-stop
       gradient (C1 > C2 > C3) across the shape along G (each flake its own direction and spread), lightly shaded, plus the
       glimmer: where the surface faces the sun's reflection (the half-vector H between the light and the eye), it flashes
       to white (strength Gl, sharpness 20, so the flash is broad and bright). The gradient is soft: shallow, with eased stops. */
    const FS = "precision mediump float;uniform sampler2D T;uniform vec3 B;uniform vec3 D;uniform float M;uniform vec3 C1;uniform vec3 C2;uniform vec3 C3;uniform vec2 G;uniform float Gl;uniform float Fl;uniform float Af;uniform vec3 H;uniform vec3 O;uniform float Ok;uniform float Wl;varying vec2 vt;varying float vi;varying vec3 vn;varying vec3 vX;varying vec3 vY;varying vec3 vZ;" +
      "float hs(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}" +
      "void main(){if(M>1.5){vec4 tx=texture2D(T,vt);float a=tx.a;if(a<0.004)discard;" +
      "vec2 g=(tx.rg*255.0-127.5)/127.0;vec3 n=normalize(vX*(-g.x*0.9)+vY*(-g.y*0.9)+vZ);if(n.z<0.0)n=-n;" +
      "float fr=pow(1.0-n.z,2.5);float rim=1.0-smoothstep(0.0,0.3,tx.b);" +
      "vec3 r=reflect(vec3(0.0,0.0,-1.0),n);float sk=clamp(0.5-r.y*0.8,0.0,1.0);vec3 Dl=mix(C3,D,0.4);vec3 env=mix(mix(mix(Dl,C3,0.35),C3,smoothstep(0.0,0.45,sk)),C1,smoothstep(0.35,0.85,sk));env=mix(env,mix(C3,Dl,0.55),rim*0.6);" +
      "float sp=pow(max(dot(n,H),0.0),50.0)*(1.0+Gl)+pow(max(dot(n,H),0.0),8.0)*0.45;" +
      "vec2 cc=floor(vt*140.0);float hh=hs(cc);vec3 jn=normalize(n+vec3(hs(cc+1.7)-0.5,hs(cc+5.3)-0.5,0.0)*0.9);float gt=step(0.82,hh)*pow(max(dot(jn,H),0.0),300.0)*2.2;" +
      "float ab=max(clamp(0.38+0.45*fr+0.45*rim,0.0,0.92),Af);float s=clamp(sp+gt,0.0,1.0)*Fl;" +
      "gl_FragColor=vec4(env*ab*(1.0-s)+vec3(s),ab+s*(1.0-ab))*a;return;}" +
      "if(Wl>0.5){float fw=clamp((0.82-vi)*0.7,0.0,0.42);gl_FragColor=vec4(mix(mix(C2,C3,0.5),D,fw*0.6),1.0);return;}vec4 tx=texture2D(T,vt);float a=tx.a;if(a<0.004)discard;float f=clamp((0.82-vi)*0.7,0.0,0.42);vec3 c;" +
      "if(M>0.5){float g=smoothstep(0.0,1.0,clamp(dot(vt-0.5,G)+0.5,0.0,1.0));vec3 b=mix(mix(C1,C2,smoothstep(0.0,0.6,g)),C3,smoothstep(0.4,1.0,g));c=mix(b,D,f*0.35);c=mix(c,O,Ok*clamp((1.0-tx.r)/max(0.05,1.0-O.r),0.0,1.0));" +
      "float s=pow(abs(dot(normalize(vn),H)),20.0);c=mix(c,vec3(1.0),clamp(s*Gl*1.6,0.0,1.0));}else{c=mix(B,D,f);}" +
      "gl_FragColor=vec4(c*a,a);}";
    const LIGHT = (() => { const l = Math.hypot(-0.35, -0.45, 0.82), L = [-0.35 / l, -0.45 / l, 0.82 / l], h = [L[0], L[1], L[2] + 1], k = Math.hypot(h[0], h[1], h[2]); return { L, H: [h[0] / k, h[1] / k, h[2] / k] }; })();
    /* Each leaf canvas gets its own WebGL context (drawing straight into it, nothing copied), up to MAX at once. Past that,
       leaves share one more context: it draws each of them in turn into its own (unseen) canvas and the result is copied
       into the leaf's canvas, so every leaf stays 3D however many there are. Browsers cap live contexts at about 16, so
       MAX + 1 stays under it. Without WebGL at all, a leaf falls back to the still picture. */
    const MAX = 12;
    let count = 0, shared;
    function makeGL(cv) {
      const gl = cv.getContext("webgl", { antialias: false, premultipliedAlpha: true, alpha: true, powerPreference: "high-performance" });
      if (!gl) return null;
      const sh = (type, src) => { const x = gl.createShader(type); gl.shaderSource(x, src); gl.compileShader(x); return x; };
      const prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
      gl.useProgram(prog);
      const loc = { p: gl.getAttribLocation(prog, "p"), nr: gl.getAttribLocation(prog, "nr"), t: gl.getAttribLocation(prog, "t"),
        R: gl.getUniformLocation(prog, "R"), L: gl.getUniformLocation(prog, "L"), B: gl.getUniformLocation(prog, "B"), D: gl.getUniformLocation(prog, "D"), T: gl.getUniformLocation(prog, "T") };
      ["M", "C1", "C2", "C3", "G", "Gl", "Fl", "Af", "H", "O", "Ok", "Zo", "Wl", "Zs", "Cv", "Kc", "Kg", "Gd"].forEach((k) => { loc[k] = gl.getUniformLocation(prog, k); });
      gl.uniform3f(loc.L, LIGHT.L[0], LIGHT.L[1], LIGHT.L[2]); gl.uniform3f(loc.H, LIGHT.H[0], LIGHT.H[1], LIGHT.H[2]);
      gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL);
      const G = { gl, loc, cv, res: new Map(), cur: null, lost: false };
      cv.addEventListener("webglcontextlost", () => { G.lost = true; });
      return G;
    }
    /* The context a leaf canvas draws with: its own, or (past MAX) the shared one. */
    function setup(cv) {
      if (cv._lg !== undefined) return cv._lg && cv._lg.lost ? null : cv._lg;
      cv._lg = null;
      try {
        if (count < MAX) { const G = makeGL(cv); if (G) { count++; G.own = true; cv._lg = G; return G; } }
        if (shared === undefined) shared = makeGL(document.createElement("canvas"));
        if (shared && !shared.lost) cv._lg = shared;
      } catch (e) { cv._lg = null; }
      return cv._lg;
    }
    const freeRes = (G, L) => {
      const r = G.res.get(L);
      if (!r) return;
      r.bufs.forEach((b) => { if (b) [b.p, b.nr, b.t, b.i].forEach((x) => G.gl.deleteBuffer(x)); });
      G.gl.deleteTexture(r.tex);
      G.res.delete(L);
      if (G.cur === L) G.cur = null;
    };
    function release(cv) {
      if (!cv || !cv._lg) return;
      const G = cv._lg;
      if (G.own) {
        const ext = G.gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
        count--;
      } else if (cv._spec) freeRes(G, cv._spec);
      cv._lg = undefined; cv._spec = null;
    }
    /* A leaf's mesh and texture, uploaded once per leaf (spec) and kept while it is in use. */
    function resFor(G, L) {
      let r = G.res.get(L);
      if (r) return r;
      const gl = G.gl, g = leafGeometry(L);
      const mk = (data, target) => { const x = gl.createBuffer(); gl.bindBuffer(target, x); gl.bufferData(target, data, gl.STATIC_DRAW); return x; };
      const set = (g) => ({ p: mk(g.pos, gl.ARRAY_BUFFER), nr: mk(g.nrm, gl.ARRAY_BUFFER), t: mk(g.uv, gl.ARRAY_BUFFER), i: mk(g.idx, gl.ELEMENT_ARRAY_BUFFER), n: g.idx.length });
      const face = set(g), back = L.vol ? set(leafGeometry(L, -1)) : null, wall = L.thick && !L.glass && !L.vol ? set(leafWalls(L.shape, L.ax, L.thick)) : null;
      const tex = gl.createTexture(); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
      if (L.glass) { const B = leafBlade(L.shape, -L.ax); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, B.TS, B.TS, 0, gl.RGBA, gl.UNSIGNED_BYTE, B.data); }
      else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, leafTexture(L.shape, -L.ax, L.outline));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      r = { face, back, wall, tex, bufs: [face, back, wall] };
      G.res.set(L, r);
      return r;
    }
    /* Makes leaf L current on G: its texture and its colors (set again whenever the shared context switches leaves). */
    function load(G, L, cv) {
      if (cv._spec && cv._spec !== L) freeRes(G, cv._spec);
      cv._spec = L;
      const r = resFor(G, L);
      if (G.cur === L) return r;
      const gl = G.gl;
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, r.tex); gl.uniform1i(G.loc.T, 0);
      const B = hexRgb(L.color), D = hexRgb(L.dark);
      gl.uniform3f(G.loc.B, B[0] / 255, B[1] / 255, B[2] / 255); gl.uniform3f(G.loc.D, D[0] / 255, D[1] / 255, D[2] / 255);
      const grad = L.grad;
      gl.uniform1f(G.loc.M, L.glass ? 2 : grad ? 1 : 0);
      if (grad) {
        [G.loc.C1, G.loc.C2, G.loc.C3].forEach((u, i) => { const c = hexRgb(grad[i]); gl.uniform3f(u, c[0] / 255, c[1] / 255, c[2] / 255); });
        gl.uniform2f(G.loc.G, L.gd[0], L.gd[1]);
      }
      gl.uniform1f(G.loc.Gl, L.glint || 0);
      /* Front flakes (winter) are nearly opaque glass, so they hide the copy as they pass instead of reading as behind it. */
      gl.uniform1f(G.loc.Af, L.solid || 0);
      const O = hexRgb(L.outline); gl.uniform3f(G.loc.O, O[0] / 255, O[1] / 255, O[2] / 255); gl.uniform1f(G.loc.Ok, L.outline ? 1 : 0);
      G.cur = L;
      return r;
    }
    /* Draws leaf L turned to (tilt, yaw). Returns false when this canvas can't use WebGL. */
    function draw(cv, L, px, tilt, yaw) {
      const G = setup(cv);
      if (!G) return false;
      /* Resolution: enough for a soft, often blurred leaf without redrawing more pixels than needed every frame. */
      const gl = G.gl, CS = Math.max(64, Math.min(640, Math.round(px * 1.5 * Math.min(1.5, window.devicePixelRatio || 1))));
      if (G.cv.width !== CS) { G.cv.width = CS; G.cv.height = CS; }
      if (!G.own && cv.width !== CS) { cv.width = CS; cv.height = CS; }
      const res = load(G, L, cv);
      G.face = res.face; G.back = res.back; G.wall = res.wall;
      const rad = Math.PI / 180, ca = Math.cos(L.ax * rad), sa = Math.sin(L.ax * rad), cy = Math.cos(yaw * rad), sy = Math.sin(yaw * rad), ct = Math.cos(tilt * rad), st = Math.sin(tilt * rad);
      /* Flash gate: the flake's highlight only shows while the whole flake faces the sun's reflection within a narrow angle
         (the same facing d as the halo below), so the glimmer is a brief flash as it turns through. */
      const dF = Math.abs(sy * LIGHT.H[0] - cy * st * LIGHT.H[1] + cy * ct * LIGHT.H[2]);
      /* Glimmer curve over the flake's turn through the reflection angle: a very soft rise (wide, low exponent), a sharp spike of brightness
         near the end of the rise, then a quicker but still smooth fade, so the peak sits late in the flash. Rising or falling is read from
         how d changed since the last frame. */
      let gI = 1;
      if (L.glint) {
        const rising = dF >= (cv._gd == null ? dF : cv._gd); cv._gd = dF;
        gI = Math.min(1, 0.3 * Math.pow(dF, rising ? 6 : 16) + Math.pow(dF, 160));
      }
      gl.uniform1f(G.loc.Fl, gI);
      /* R = Rx(tilt) . Ry(yaw) . Rz(bend axis), column-major. */
      gl.uniformMatrix3fv(G.loc.R, false, new Float32Array([ca * cy, sa * ct + ca * sy * st, sa * st - ca * sy * ct, -sa * cy, ca * ct - sa * sy * st, ca * st + sa * sy * ct, sy, -cy * st, cy * ct]));
      /* Animated curls: the mesh is bent in the vertex shader (circular arcs, the same bend per step as curlProfile), each
         curl eased between flat and its amount (0.5 - 0.5 cos) over its own period. */
      if (L.curlT) {
        const now = leafClock.now(), K = Math.PI / 180 * 10 / 0.75, f = (j) => 0.5 - 0.5 * Math.cos(now * 2 * Math.PI / L.curlT[j][0] + L.curlT[j][1]);
        gl.uniform1f(G.loc.Cv, 1);
        gl.uniform4f(G.loc.Kc, L.cR.k * K * f(0), L.cL.k * K * f(1), L.vD.k * K * f(2), L.vU.k * K * f(3));
        gl.uniform1f(G.loc.Kg, L.cD.k * K * f(4)); gl.uniform1f(G.loc.Gd, L.cD.dir || 1);
      } else gl.uniform1f(G.loc.Cv, 0);
      gl.viewport(0, 0, CS, CS); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      const use = (b) => { [["p", 3], ["nr", 3], ["t", 2]].forEach(([k, n]) => { gl.bindBuffer(gl.ARRAY_BUFFER, b[k]); gl.enableVertexAttribArray(G.loc[k]); gl.vertexAttribPointer(G.loc[k], n, gl.FLOAT, false, 0, 0); }); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b.i); };
      use(G.face); gl.uniform1f(G.loc.Wl, 0);
      /* With volume: the face drawn at the front and the back of the flake's thickness, then its edge wall between them. */
      const th = L.thick || 0;
      if (L.glass) {
        /* Glass: see-through, so blended; the far face first, then the near one over it. */
        gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.uniform1f(G.loc.Zo, 0);
        (cy * ct > 0 ? [-1, 1] : [1, -1]).forEach((z) => { gl.uniform1f(G.loc.Zs, z); gl.drawElements(gl.TRIANGLES, G.face.n, gl.UNSIGNED_SHORT, 0); });
      } else {
        gl.disable(gl.BLEND); gl.uniform1f(G.loc.Zs, 1);
        if (G.back) { gl.uniform1f(G.loc.Zo, 0); gl.drawElements(gl.TRIANGLES, G.face.n, gl.UNSIGNED_SHORT, 0); use(G.back); gl.drawElements(gl.TRIANGLES, G.back.n, gl.UNSIGNED_SHORT, 0); use(G.face); }
        else (th ? [-th / 2, th / 2] : [0]).forEach((z) => { gl.uniform1f(G.loc.Zo, z); gl.drawElements(gl.TRIANGLES, G.face.n, gl.UNSIGNED_SHORT, 0); });
      }
      if (G.wall && G.wall.n) { use(G.wall); gl.uniform1f(G.loc.Zo, 0); gl.uniform1f(G.loc.Wl, 1); gl.drawElements(gl.TRIANGLES, G.wall.n, gl.UNSIGNED_SHORT, 0); }
      /* Shared context: copy the finished frame into the leaf's own canvas. */
      if (!G.own) { const c2 = cv.getContext("2d"); if (c2) { c2.clearRect(0, 0, CS, CS); c2.drawImage(G.cv, 0, 0); } }
      /* Shadow layer: a copy of the finished frame (taken now: an own WebGL canvas is cleared once the page has composited it). */
      if (cv._shd) cv._shd.forEach((sc) => { const c3 = sc.getContext("2d"); if (c3) { if (sc.width !== cv.width || sc.height !== cv.height) { sc.width = cv.width; sc.height = cv.height; } c3.clearRect(0, 0, sc.width, sc.height); c3.drawImage(cv, 0, 0); } });
      /* Glimmer halo: how squarely the flake (its face normal, the matrix's third column) faces the sun's reflection sets the
         opacity of a soft white glow around it, so the flash also blooms past the flake's edges. */
      const glow = cv.nextSibling;
      if (glow && L.glint) {
        glow.style.opacity = (gI * Math.min(1, L.glint * 1.6)).toFixed(3);
      }
      return true;
    }
    return { draw, release };
  })();
  /* The fall's easing (CSS cubic-bezier(.35,.05,.65,.95)), so the X and Y turn keeps step with the fall and the spin. */
  const fallEase = (() => {
    const x1 = 0.35, y1 = 0.05, x2 = 0.65, y2 = 0.95, B = (a, b, t) => 3 * a * t * (1 - t) * (1 - t) + 3 * b * t * t * (1 - t) + t * t * t;
    return (x) => { let lo = 0, hi = 1, t = x; for (let k = 0; k < 24; k++) { t = (lo + hi) / 2; if (B(x1, x2, t) < x) lo = t; else hi = t; } return B(y1, y2, t); };
  })();
  /* One animation loop for every leaf that turns on X or Y: reads where its fall is (the CSS animation's progress) and
     redraws it turned that far. Skipped while the page is hidden or the leaf is off screen. */
  const fallProgress = (cv) => {
    const leaf = cv.closest(".plp-leaf");
    const a = leaf && leaf.getAnimations ? leaf.getAnimations().find((x) => x.animationName === "plp-leaf-fall" || /^plp-leaf-rare/.test(x.animationName)) : null;
    const pg = a && a.effect ? a.effect.getComputedTiming().progress : null;
    /* the rare flake (front) falls in the first 60% of its cycle, then waits */
    return pg == null ? 0 : fallEase(/^plp-leaf-rare/.test(a.animationName) ? Math.min(1, pg / (a.animationName === "plp-leaf-rare20" ? 0.2 : a.animationName === "plp-leaf-rare50" ? 0.5 : 0.6)) : pg);
  };
  const leafLoop = (() => {
    const live = new Set();
    let raf = 0;
    const tick = () => {
      raf = 0;
      if (!live.size) return;
      if (!document.hidden && !leafClock.still) live.forEach((it) => {
        /* Only leaves that can be seen are redrawn: the leaf picture must overlap the banner, which is on screen. A leaf
           spends most of its fall above or below the banner, so this keeps the per-frame work small. */
        const box = it.cv.closest(".plp-leaves");
        if (!box) return;
        const B = box.getBoundingClientRect(), r = it.cv.getBoundingClientRect();
        if (B.bottom < 0 || B.top > innerHeight || r.bottom < B.top || r.top > B.bottom || r.right < B.left || r.left > B.right) { it.last = undefined; return; }
        const e = fallProgress(it.cv);
        if (!it.spec.curlT && it.last !== undefined && Math.abs(e - it.last) < 0.0005) return;
        it.last = e;
        LeafGL.draw(it.cv, it.spec, it.px, it.spec.tilt + it.spec.rx * e, it.spec.yaw + it.spec.ry * e);
      });
      raf = requestAnimationFrame(tick);
    };
    return {
      add(it) { live.add(it); if (!raf) raf = requestAnimationFrame(tick); },
      remove(it) { live.delete(it); }
    };
  })();
  function LeafCanvas({ spec, px, reg, k }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const cv = ref.current;
      if (!cv) return;
      cv._shd = (reg && reg["s" + k]) || null; /* the shadow layers' canvases, if any (ShadowCanvas) */
      /* First frame already at the leaf's place in its fall, so a turning leaf never jumps once the loop takes over. */
      const e0 = spec.rx || spec.ry ? fallProgress(cv) : 0;
      if (!LeafGL.draw(cv, spec, px, spec.tilt + (spec.rx || 0) * e0, spec.yaw + (spec.ry || 0) * e0)) { if (!cv._lg) drawLeaf(cv, spec, px); return; }
      if (!spec.rx && !spec.ry && !spec.curlT) return;
      const it = { cv, spec, px };
      leafLoop.add(it);
      return () => leafLoop.remove(it);
    }, [spec, px]);
    /* Gives the canvas's WebGL context back when the leaf goes (the canvas is captured now: by cleanup time the ref is
       already empty, which used to leak a context per leaf until new leaves fell back to the flat still picture). */
    React.useEffect(() => { const cv = ref.current; return () => LeafGL.release(cv); }, []);
    return h(React.Fragment, null, h("canvas", { ref, className: "plp-leaf-cv" }), spec.glint ? h("span", { className: "plp-glint" }) : null);
  }
  /* The shadow of a piece: a copy of its picture (LeafGL.draw copies each frame it draws into the canvas registered as cv._shd, right after drawing, while the WebGL buffer is still valid), drawn black and blurred by CSS, in the shadow layer under the pieces. */
  function ShadowCanvas({ reg, k }) {
    const ref = React.useRef(null);
    React.useEffect(() => { const cv = ref.current; reg["s" + k] = (reg["s" + k] || []).concat(cv); return () => { reg["s" + k] = (reg["s" + k] || []).filter((x) => x !== cv); }; }, [reg, k]);
    return h("canvas", { ref, className: "plp-leaf-cv" });
  }
  /* Leaf settings. When the page has a Tweaks panel (window.DB_LEAVES_WAIT, set early in Main Site.html), the leaves wait
     for its saved values instead of starting on the built-in ones and then jumping to new places when the panel loads
     (it loads late, after Babel). If the panel never answers, the built-in values start after 4 seconds. */
  function useLeafParams() {
    const wait = !!window.DB_LEAVES_WAIT && !window.DB_LEAVES;
    const [P, setP] = React.useState(() => wait ? null : Object.assign({}, LEAF_DEFAULTS, window.DB_LEAVES || {}));
    React.useEffect(() => {
      const on = (e) => setP(Object.assign({}, LEAF_DEFAULTS, e.detail || {}));
      window.addEventListener("db-leaves", on);
      const t = setTimeout(() => setP((p) => p || Object.assign({}, LEAF_DEFAULTS, window.DB_LEAVES || {})), 4000);
      if (window.DB_LEAVES) setP((p) => p || Object.assign({}, LEAF_DEFAULTS, window.DB_LEAVES));
      return () => { window.removeEventListener("db-leaves", on); clearTimeout(t); };
    }, []);
    return P;
  }
  function FallingLeaves({ P0, S }) {
    const P = P0 || LEAF_DEFAULTS;
    const leaves = React.useMemo(() => {
      let seed = (20261102 + (P.leafSeed - 1) * 7919) >>> 0;
      const r = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
      const lerp = (a, b) => a + (b - a) * r();
      const css = getComputedStyle(document.documentElement), tok = (v) => css.getPropertyValue(v).trim();
      const counts = [P.leafFar, P.leafMid, P.leafNear], size = P.leafSize / 100, speed = Math.max(0.1, P.leafSpeed / 100);
      const blur = P.leafBlur / 100, focus = Math.max(0.1, P.leafFocus / 100), op = P.leafOpacity / 100;
      const cols = Math.max(1, Math.round(P.leafCols / 2)), rows = Math.max(1, Math.round(P.leafRows / 2));
      const out = [];
      LEAF_LAYERS.forEach((L, li) => {
        const n = counts[li], pal = (S.palettes[P.leafPalette] || S.palettes.all)[li];
        for (let i = 0; i < n; i++) {
          const gi = counts.slice(0, li).reduce((a, b) => a + b, 0) + i; /* winter: flake index across all layers, so the golden-ratio spread covers the whole banner */
          r(); /* one fall time per layer (the draw kept for the seeds), so the even spacing below holds as they loop */
          /* Even (fall): every layer shares the middle layer's fall time, so the spacing set below holds forever instead of
             the layers drifting into clumps and gaps (the bigger near leaves still cross faster: they travel further). */
          const d = ((S.even ? LEAF_LAYERS[1] : L).d.reduce((a, b) => a + b) / 2) / speed * (S.gentle || 1), f = lerp(5, 9) / focus;
          /* Start x runs past the right edge (the diagonal carries leaves left as they fall). With "keep off the copy",
             near leaves start far enough out that their diagonal clears the text. */
          const x = L.edge && P.leafClear ? (i % 2 ? 114 + r() * 12 : 12 + r() * 12) : (S.glass || S.toRight || S.even)
            /* Winter and spring: flakes take their slots in a golden-ratio order (any handful, and the phone's share, still spans the banner), over a
               range shifted right by half the drift so the fall's midpoint, not its start, is centered. */
            ? P.leafDrift * 0.5 - 6 + ((((gi + 0.5) * 0.618034) % 1) + (r() - 0.5) * 0.25 / Math.max(1, counts.reduce((a, b) => a + b, 0))) * 112
            : 8 + (i + r() * 0.8) / n * 112;
          /* Rotation: each axis is a base angle plus a random spread either way (X tilts the leaf back, Y turns it
             sideways, Z spins it flat in the banner). */
          const rot = (base, spread) => base + lerp(-spread, spread);
          const b0 = P.leafSoft ? P.leafSoftAmt * L.soft : L.b[0] * blur, b1 = P.leafSoft ? P.leafSoftAmt * L.soft : L.b[1] * blur;
          /* Start points spread evenly through the fall: each leaf of a layer gets its own slice of the cycle (with a little
             jitter), and each layer is offset from the others, so leaves arrive steadily instead of in clumps. */
          const jr = r(), s = lerp(L.s[0], L.s[1]) * size, d0 = -(((i + 0.35 * jr) / Math.max(1, n) + li * 0.382) % 1) * d, fd0 = -r() * f;
          const spec = { cols, rows, shape: S.shapes[Math.floor(r() * S.shapes.length)], color: tok(pal[Math.floor(r() * pal.length)]), dark: tok(S.dark),
            ax: Math.round(r() * 180), tilt: rot(P.leafRotX, P.leafRotXVar), yaw: rot(P.leafRotY, P.leafRotYVar),
            cR: leafCurl(r, P, S.flat ? 0 : P.leafCurl), cL: leafCurl(r, P, S.flat ? 0 : P.leafCurl), vD: leafCurl(r, P, S.flat ? 0 : P.leafCurl2), vU: leafCurl(r, P, S.flat ? 0 : P.leafCurl2) };
          /* The diagonal curl draws from its own seeded sequence, so adding it never reshuffles a saved Layout seed. */
          let s2 = (P.leafSeed * 7919 + li * 101 + i * 13 + 99991) >>> 0;
          const r2 = () => { s2 = (s2 * 1664525 + 1013904223) >>> 0; return s2 / 4294967296; };
          spec.cD = Object.assign(leafCurl(r2, P, S.flat ? 0 : P.leafCurl3), { dir: r2() < 0.5 ? -1 : 1 });
          /* Rotation while falling: each axis turns by its amount over one fall (each leaf a little more or less, either
             way), from the same separate sequence. */
          const spin = (amt) => amt * (0.7 + r2() * 0.6) * (r2() < 0.5 ? -1 : 1);
          const rx = spin(P.leafSpinX), ry = spin(P.leafSpinY), rz = spin(P.leafSpinZ);
          spec.rx = rx; spec.ry = ry;
          /* Seasons with a gradient (winter): each flake gets its own gradient direction and spread; glimmer strength. */
          if (S.grad) { const ga = r2() * Math.PI * 2, gs = 0.55 + r2() * 0.45; spec.grad = S.grad.map(tok); spec.gd = [Math.cos(ga) * gs, Math.sin(ga) * gs]; }
          spec.glint = (P.leafGlint || 0) / 100;
          if (S.outline) spec.outline = tok(S.outline);
          if (S.thick) spec.thick = S.thick;
          if (S.vol && P.leafThick) { spec.thick = P.leafThick / 100 * 0.15; spec.vol = true; }
          if (S.glass) { spec.glass = true; spec.mesh = 64; }
          /* Animated curls (fall): each curl (across right/left, along down/up, diagonal) eases between flat and the leaf's own
             amount from the sliders, each on its own period (8 to 14 s) and phase, drawn last so seeds keep their layout. */
          if (S.curlAnim) spec.curlT = Array.from({ length: 5 }, () => [8 + r2() * 6, r2() * Math.PI * 2]);
          /* Spring leaves: green (light or medium, from the separate sequence, drawn last) and smaller than the petals. */
          const isLeaf = S.leafShape != null && spec.shape === S.leafShape, sp = isLeaf ? s * S.leafScale : s;
          if (isLeaf) { spec.color = tok(S.leafColors[Math.floor(r2() * S.leafColors.length)]); spec.dark = tok(S.leafDark); }
          out.push({ key: li + "-" + i, layer: li, phone: (S.glass || S.toRight || S.even) ? (gi * 0.618034 + 0.3) % 1 < 0.6 : i < Math.ceil(n * 0.6), pos: ((i + 0.5) / Math.max(1, n) + li * 0.382) % 1, jr, d, spec, px: sp, style: {
            "--x": (S.toRight ? 100 - x : x).toFixed(1) + "%", "--s": sp.toFixed(1) + "px", "--swd": (3.4 + ((gi * 0.7548776662) % 1) * 3).toFixed(2) + "s", "--swl": (-(((gi * 0.5698402909) % 1)) * 4).toFixed(2) + "s", "--o": Math.min(1, L.o * op).toFixed(2),
            "--d": d.toFixed(2) + "s", "--dl": d0.toFixed(2) + "s",
            "--r0": (() => { r(); r(); const z = Math.round(rot(P.leafRotZ, P.leafRotZVar)); r(); r(); return z; })() + "deg", /* spare draws keep each seed's layout */
            "--rz": rz.toFixed(1) + "deg",
            "--b0": b0.toFixed(2) + "px", "--b1": b1.toFixed(2) + "px", "--fd": f.toFixed(2) + "s", "--fdl": fd0.toFixed(2) + "s" } });
        }
      });
      /* Even (fall): every leaf crosses the middle of the banner halfway through its fall, so with one shared fall time the
         crossings are spread evenly through the cycle: all leaves, every layer mixed in turn, one slot each (a little jitter
         from the leaf's own draw). The phone set (fewer leaves) is picked evenly from that order, so phones stay even too. */
      if (S.even && out.length) {
        const N = out.length, order = out.slice().sort((a, b) => a.pos - b.pos || a.layer - b.layer);
        const np = out.filter((l) => l.phone).length;
        order.forEach((l, k) => {
          l.style["--dl"] = (-((k + 0.5 + (l.jr - 0.5) * 0.3) / N) * l.d).toFixed(2) + "s";
          l.phone = Math.floor((k + 1) * np / N) > Math.floor(k * np / N);
        });
      }
      /* Winter: the phone set is picked evenly from the flakes in order of their start x, so the few that show still spread across the banner. */
      if ((S.glass || S.toRight || S.even)) {
        const N = out.length, np = out.filter((l) => l.phone).length;
        out.slice().sort((a, b) => parseFloat(a.style["--x"]) - parseFloat(b.style["--x"])).forEach((l, k) => { l.phone = Math.floor((k + 1) * np / N) > Math.floor(k * np / N); });
      }
      /* One flake, leaf or petal in front of the copy (winter, fall, spring): now and then a single one falls across the text, in the near colors. It falls in the
         first 60% of a long cycle and waits below the banner for the rest (plp-leaf-rare), from its own seeded sequence. */
      /* Winter sends up to three at random times (each its own seeded sequence and cycle length, so they drift in and out of step); the others send one. */
      let cyc0 = 0, side0 = true;
      for (let fi = 0; fi < (S.front ? (S.glass ? 3 : S.even ? 2 : 1) : 0); fi++) {
        let s3 = (P.leafSeed * 104729 + 777 + fi * 5113) >>> 0;
        const r3 = () => { s3 = (s3 * 1664525 + 1013904223) >>> 0; return s3 / 4294967296; };
        const L = LEAF_LAYERS[1], d = (L.d[0] + r3() * (L.d[1] - L.d[0])) / speed * (S.gentle || 1), cyc = S.even ? 2 * ((LEAF_LAYERS[1].d[0] + LEAF_LAYERS[1].d[1]) / 2) / speed * (S.gentle || 1) /* fall: exactly two of the other leaves' falls, so what crosses the copy repeats in step */ : d / (S.glass ? 0.2 : 0.6), LN = LEAF_LAYERS[S.glass && !fi ? 2 : S.frontLayer == null ? 2 : S.frontLayer] /* winter: the first is a big near flake */, sz = (LN.s[0] + r3() * (LN.s[1] - LN.s[0])) * (S.glass && !fi ? 0.7 : S.frontScale || 1) * size;
        /* the size of its layer (frontLayer: winter near, fall and spring middle) times frontScale (winter 80%, fall and spring 120%), and the same depth-of-field blur and focus shift as the near flakes (or the "All out of focus" blur) */
        /* every season: every front flake gets the same steady blur, straight from the general blur setting ("All out of focus" amount, else the
           middle layer's blur), with no depth-of-field focus shift and no per-layer depth factor */
        const fbm = P.leafSoft ? P.leafSoftAmt : (LEAF_LAYERS[1].b[0] + LEAF_LAYERS[1].b[1]) / 2 * blur,
          fb0 = fbm, fb1 = fbm, ff = (5 + r3() * 4) / focus;
        const spin = (amt) => amt * (0.7 + r3() * 0.6) * (r3() < 0.5 ? -1 : 1);
        const css2 = getComputedStyle(document.documentElement), tk = (v) => css2.getPropertyValue(v).trim();
        let spCn = S.flat ? S.palettes.all[1][0] : null;
        const spec = { cols, rows, shape: S.shapes[Math.floor(r3() * S.shapes.length)], color: tk(S.flat ? S.palettes.all[1][0] : (() => { const pn = (S.palettes[P.leafPalette] || S.palettes.all)[2]; return (spCn = pn[Math.floor(r3() * pn.length)]); })()), dark: tk(S.dark), ax: Math.round(r3() * 180),
          tilt: P.leafRotX + (r3() * 2 - 1) * P.leafRotXVar, yaw: P.leafRotY + (r3() * 2 - 1) * P.leafRotYVar,
          cR: { k: 0 }, cL: { k: 0 }, vD: { k: 0 }, vU: { k: 0 }, cD: { k: 0, dir: 1 } };
        spec.cn = spCn;
        /* curls like the other leaves (none for the flat snowflakes, whose sequence stays as it was) */
        if (!S.flat) { spec.cR = leafCurl(r3, P, P.leafCurl); spec.cL = leafCurl(r3, P, P.leafCurl); spec.vD = leafCurl(r3, P, P.leafCurl2); spec.vU = leafCurl(r3, P, P.leafCurl2); spec.cD = Object.assign(leafCurl(r3, P, P.leafCurl3), { dir: r3() < 0.5 ? -1 : 1 }); }
        const rz = spin(P.leafSpinZ); spec.rx = spin(P.leafSpinX); spec.ry = spin(P.leafSpinY);
        if (S.grad) { const ga = r3() * Math.PI * 2; spec.grad = S.grad.map(tk); spec.gd = [Math.cos(ga) * 0.8, Math.sin(ga) * 0.8]; }
        spec.glint = (P.leafGlint || 0) / 100;
        if (S.thick) spec.thick = S.thick;
        if (S.vol && P.leafThick) { spec.thick = P.leafThick / 100 * 0.15; spec.vol = true; }
        if (S.glass) { spec.glass = true; spec.mesh = 64; spec.solid = 0.9; }
        if (S.curlAnim) spec.curlT = Array.from({ length: 5 }, () => [8 + r3() * 6, r3() * Math.PI * 2]);
        const fLeaf = S.leafShape != null && spec.shape === S.leafShape, fsz = fLeaf ? sz * S.leafScale : sz;
        if (fLeaf) { spec.color = tk(S.leafColors[Math.floor(r3() * S.leafColors.length)]); spec.dark = tk(S.leafDark); }
        out.push({ key: "front" + (fi || ""), layer: "f", front: true, phone: true, spec, px: fsz, style: {
          "--x": ((x) => S.toRight ? 100 - x : x)(S.flat ? (r3(), 50 + P.leafDrift * 0.75 + (r3() - 0.5) * 20) /* winter: starts right of center so the leftward drift carries it across the copy */ : ((fi ? (r3(), !side0) : (side0 = r3() < 0.5)) ? 34 : 58) + r3() * 8 + P.leafDrift * 0.55).toFixed(1) + "%", /* off center: across one end of the copy (leaves: allowing for the drift, so they cross it halfway down) */ "--s": fsz.toFixed(1) + "px", "--swd": (3.4 + (((fi + 50) * 0.7548776662) % 1) * 3).toFixed(2) + "s", "--swl": (-(((fi + 50) * 0.5698402909) % 1) * 4).toFixed(2) + "s", "--o": Math.min(1, 0.95 * op).toFixed(2),
          "--d": (fi ? cyc0 : (cyc0 = cyc)).toFixed(2) + "s", "--dl": (fi ? (r3(), S.even ? (r3(), P.leafFront1 / 100 * cyc0) : (fi / 3 + (r3() - 0.5) * 0.08) * cyc0) : S.even ? (r3(), P.leafFront2 / 100 * cyc0) : 3 - r3() * 2).toFixed(2) + "s" /* winter: one shared cycle, the three spaced a third of it apart (a little jitter) */, "--r0": Math.round(P.leafRotZ + (r3() * 2 - 1) * P.leafRotZVar) + "deg", "--rz": rz.toFixed(1) + "deg",
          "--b0": fb0.toFixed(2) + "px", "--b1": fb1.toFixed(2) + "px", "--fd": ff.toFixed(2) + "s", "--fdl": (-r3() * ff).toFixed(2) + "s" } });
      }
      /* Fall: the second front leaf (Leaf 1 in the Tweaks timeline, the early one) is always Yellow 300. */
      if (S.even) {
        const f1 = out.find((l) => l.key === "front1");
        if (f1) { f1.spec.color = getComputedStyle(document.documentElement).getPropertyValue("--db-yellow-300").trim(); f1.spec.cn = "--db-yellow-300"; }
      }
      return out;
    }, [S, P.leafSeed, P.leafFar, P.leafMid, P.leafNear, P.leafSize, P.leafSpeed, P.leafCurl, P.leafCurl2, P.leafCurl3, P.leafCurlDir,
      P.leafRotX, P.leafRotXVar, P.leafRotY, P.leafRotYVar, P.leafRotZ, P.leafRotZVar, P.leafSpinX, P.leafSpinY, P.leafSpinZ, P.leafGlint, P.leafCols, P.leafRows, P.leafBlur, P.leafFocus, P.leafSoft, P.leafSoftAmt, P.leafOpacity, P.leafPalette, P.leafClear, P.leafThick, P.leafFront1, P.leafFront2, P.leafShadow > 0]);
    /* Fall timing, one clear rule: the leaves are placed so that the stretches they spend over the banner follow one another around the loop (the same
       number on screen at all times, no empty stretches). Everything is computed here from the banner's size, the leaf sizes, the drift and the fall's easing
       (a leaf's center runs from 1.2 sizes above the banner to 1.2 sizes below it), then handed to the CSS animation as plain start delays: nothing is
       measured or patched in the page afterwards, so every slider takes effect as soon as it changes. */
    const backRef = React.useRef(null), reg = React.useRef({}).current;
    const [dim, setDim] = React.useState(null);
    React.useLayoutEffect(() => {
      const bk = backRef.current, banner = bk && bk.parentElement;
      if (!banner) return;
      const run = () => setDim((o) => (o && o[0] === banner.clientWidth && o[1] === banner.clientHeight ? o : [banner.clientWidth, banner.clientHeight]));
      run();
      const ro = typeof ResizeObserver === "function" ? new ResizeObserver(run) : null;
      if (ro) ro.observe(banner);
      return () => { if (ro) ro.disconnect(); };
    }, [P0, P.leafOn]);
    const placed = React.useMemo(() => {
      if (!S.even || !dim || !dim[0] || !dim[1]) return leaves;
      const W = dim[0], H = dim[1], dp = S.toRight ? -P.leafDrift : P.leafDrift;
      const D = (leaves.find((l) => !l.front) || {}).d;
      if (!D) return leaves;
      const mod = (v) => ((v % D) + D) % D, ps = [];
      leaves.forEach((l, i) => {
        if (l.front || (W < 640 && !l.phone)) return;
        const sz = l.px, x0 = parseFloat(l.style["--x"]) / 100 * W, mg = sz * 0.35, d0 = parseFloat(l.style["--dl"]);
        let u1 = null, u2 = null;
        for (let k = 0; k <= 240; k++) {
          const u = k / 240, e = fallEase(u), cx = x0 - dp / 100 * W * e, cy = e * (H + 2.4 * sz) - 1.2 * sz;
          if (cx > -mg && cx < W + mg && cy > -mg && cy < H + mg) { if (u1 == null) u1 = u; u2 = u; }
        }
        if (u1 != null) ps.push({ i, d0, w: u2 - u1, cur: mod(d0 + (u1 + u2) / 2 * D) });
      });
      if (!ps.length) return leaves;
      ps.sort((a, b) => a.cur - b.cur);
      const tw = ps.reduce((a, c) => a + c.w, 0) || 1, out = leaves.slice();
      let acc = 0;
      ps.forEach((c) => {
        const tgt = (acc + c.w / 2) / tw * D; acc += c.w;
        out[c.i] = Object.assign({}, leaves[c.i], { style: Object.assign({}, leaves[c.i].style, { "--dl": (c.d0 + tgt - c.cur).toFixed(2) + "s" }) });
      });
      return out;
    }, [leaves, S, dim, P.leafDrift]);
    /* The two front leaves' real colors go to the Tweaks timeline (Leaf 1 is the early one, Leaf 2 the late one), so each lane matches its leaf. */
    React.useEffect(() => {
      const f = leaves.filter((l) => l.front), c = [(f[1] || {}).spec, (f[0] || {}).spec].map((x) => x && x.color);
      if (S.even && c[0] && c[1]) { window.DB_FRONT_COLORS = c; window.dispatchEvent(new CustomEvent("db-front-colors", { detail: c })); }
    }, [leaves, S]);
    if (!P0 || !P.leafOn) return null;
    const leaf = (l, sh) => h("span", { key: l.key, className: "plp-leaf l" + l.layer + (l.phone ? "" : " wide") + (l.front ? " rare" + (S.glass ? " r20" : S.even ? " r50" : "") : ""), style: sh ? Object.assign({}, l.style, { "--b0": "calc(var(--sz) * .2)", "--b1": "calc(var(--sz) * .2)" }) : l.style },
      h("span", { className: "plp-leaf-spin" }, h("span", { className: "plp-leaf-focus" },
        sh ? h(ShadowCanvas, { reg, k: l.key }) : h(LeafCanvas, { spec: l.spec, px: l.px, reg, k: l.key }))));
    const box = (cls, list, bref, sh) => h("div", { ref: bref, className: "plp-leaves" + cls + (S.dir < 0 ? " rise" : ""), "aria-hidden": true, style: { "--dp": S.toRight ? -P.leafDrift : P.leafDrift, "--sw": P.leafSway || 0, "--shd": (P.leafShadow || 0) / 100, "--pz": P.leafPhone / 100 } }, list.map((l) => leaf(l, sh)));
    const back = placed.filter((l) => !l.front), front = placed.filter((l) => l.front), sh = (P.leafShadow || 0) > 0;
    return h(React.Fragment, null, sh ? box(" shd", back, null, true) : null, sh ? box(" shd shd2", back, null, true) : null, box("", back, backRef), front.length && sh ? box(" front shd", front, null, true) : null, front.length && sh ? box(" front shd shd2", front, null, true) : null, front.length ? box(" front", front) : null);
  }
  /* Summer sunrise: a bright, warm sun half below the bottom edge, in the middle, inside a large soft glow that breathes,
     very faint rays turning slowly, and haloes of light that keep rising out of it, widening and fading (each one a soft
     ring, the next one starting as the last one fades). Transform and opacity only; all values from Tweaks (summer). */
  /* Rays: two layers of uneven beams (each beam its own width, gap and brightness, from a fixed seed) turning slowly in
     opposite directions at different speeds, so they cross, part and never repeat the same pattern. */
  function sunRayLayer(count, seed, alpha) {
    let x = seed >>> 0;
    const r = () => { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; };
    const stops = [];
    let a = 0;
    for (let i = 0; i < count && a < 360; i++) {
      const gap = (360 / count) * (0.35 + r() * 1.3), w = 1.5 + r() * 9 * (r() < 0.25 ? 1.8 : 1), o = (0.25 + r() * 0.75) * alpha;
      const s0 = a + gap, s1 = Math.min(360, s0 + w);
      if (s0 >= 360) break;
      const c = i % 2 ? "251,216,114" : "255,235,189"; /* alternating Yellow 200 and Yellow 100 */
      stops.push("rgba(" + c + ",0) " + s0.toFixed(1) + "deg", "rgba(" + c + "," + o.toFixed(2) + ") " + ((s0 + s1) / 2).toFixed(1) + "deg", "rgba(" + c + ",0) " + s1.toFixed(1) + "deg");
      a = s1;
    }
    return "conic-gradient(from " + Math.round(r() * 360) + "deg,rgba(255,255,255,0) 0deg," + stops.join(",") + ",rgba(255,255,255,0) 360deg)";
  }
  function SunMotif({ P0 }) {
    const P = P0 || LEAF_DEFAULTS;
    const rc = Math.max(4, Math.round(P.sunRayCount || 24));
    const rays = React.useMemo(() => [sunRayLayer(rc, 7919, 0.6), sunRayLayer(Math.round(rc * 0.7), 104729, 0.45)], [rc]);
    if (!P0 || !P.sunOn) return null;
    const n = Math.max(0, Math.round(P.sunHalos)), d = 9 / Math.max(0.1, P.sunSpeed / 100);
    const vars = { "--sun-s": P.sunSize / 100, "--sun-g": P.sunGlow / 100, "--sun-r": P.sunRays / 100, "--halo-d": d.toFixed(2) + "s", "--sun-blur": (P.sunBlur || 0) + "px" };
    /* One halo in front of the copy: now and then (once every two halo lifetimes) a single crescent grows out over the
       text, above it, under the same blur (plp-sun.front in plp.css). */
    const front = n ? h("div", { className: "plp-sun front", "aria-hidden": true, style: Object.assign({ "--halo-dl": "4s", "--halo-rot": "-60deg" }, vars) }, h("span", { className: "plp-sun-halo rare" })) : null;
    return h(React.Fragment, null, h("div", { className: "plp-sun", "aria-hidden": true, style: vars },
      h("span", { className: "plp-sun-glow" }),
      h("span", { className: "plp-sun-rays", style: { backgroundImage: rays[0] } }),
      h("span", { className: "plp-sun-rays b", style: { backgroundImage: rays[1] } }),
      Array.from({ length: n }, (_, i) => h("span", { key: i, className: "plp-sun-halo", style: { "--halo-dl": (-i * d / n).toFixed(2) + "s", "--halo-rot": [-70, 55, -35, 80, -55, 30, 65, -45][i % 8] + "deg" } })),
      h("span", { className: "plp-sun-core" })), front);
  }
  /* The Clearance banner with its seasonal variant (Tweaks: Season): copy, colors (data-season in plp.css) and motif.
     Until the Tweaks panel's saved values arrive, the copy waits invisibly so it never switches season in view. */
  function SeasonBanner({ banner }) {
    const P0 = useLeafParams(), P = P0 || LEAF_DEFAULTS;
    const season = SEASONS[P.season] ? P.season : "fall", S = SEASONS[season];
    /* Tweaks: Animations off freezes the motif where it is (CSS pauses the falls, spins, focus shifts and haloes; the
       leaf clock stops the curls and glimmer). */
    const still = P.motion === false;
    React.useEffect(() => { leafClock.set(still); }, [still]);
    const copy = Object.assign({}, banner, banner.motif ? S.copy : {});
    /* Summer: the sky gradient's height (Tweaks: Sky gradient height) scales the sky up the banner; its stops come from the Tweaks gradient editor. */
    /* The banner's size, for the background's roundness (bgRadii). */
    const ref = React.useRef(null), [size, setSize] = React.useState(null);
    React.useLayoutEffect(() => {
      const el = ref.current;
      if (!el || typeof ResizeObserver === "undefined") return;
      const ro = new ResizeObserver(() => setSize((s0) => { const w = el.offsetWidth, hh = el.offsetHeight; return s0 && s0.w === w && s0.h === hh ? s0 : { w, h: hh }; }));
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    /* The background (Tweaks: Background, or Sky in summer): its shape (scale, roundness, center) for every season; summer's
       stops come from the sky editor, the others' from the background editor once the panel has sent them. */
    let sky = null;
    if (banner.motif) {
      const R = bgRadii(P, season, size), y = P.bgY != null ? +P.bgY : (BG_SHAPE[season] || BG_SHAPE.fall)[2];
      sky = { "--bg-rx": R[0], "--bg-ry": R[1], "--bg-y": y + "%" };
      if (S.motif === "sun") Object.assign(sky, { "--sky-h": (P.sunSky || 160) + "%", "--sky-stops": skyStops(P) });
      else if (P.bgN != null) Object.assign(sky, { "--bg-g": bgGround(P), "--bg-stops": bgStops(P) });
    }
    return h("section", { ref, className: "plp-banner" + (banner.motif ? " has-motif" : "") + (banner.motif && !P0 ? " is-pending" : "") + (still ? " is-still" : ""), "data-season": banner.motif ? season : null, "aria-label": copy.eyebrow, style: sky },
      banner.motif ? (S.motif === "sun" ? h(SunMotif, { P0 }) : h(FallingLeaves, { P0, S })) : null,
      h("div", { className: "plp-banner-in" },
        h("span", { className: "db-eyebrow plp-banner-eb" }, copy.eyebrow),
        h("p", { className: "plp-banner-t" }, bannerLines(copy.title)),
        h("p", { className: "plp-banner-x" }, bannerLines(copy.text))));
  }
  /* Temple Open House hero background (#/info/temple-open-house): the summer sunrise (SunMotif) and sky on settings of its own
     (Tweaks: Temple, keys "temple_...", sent as a db-temple event under the plain sun.../bg... names), separate from the seasonal
     banner. Until the panel's values arrive the layer waits invisibly (4s at most), so it never shows the defaults first. */
  const TILE_MIN_S = 0.75;
  function TilesRow({ items, go }) {
    const ref = React.useRef(null);
    React.useLayoutEffect(() => {
      const ul = ref.current;
      if (!ul) return;
      let raf = 0, lastW = -1;
      const fit = () => {
        const W = ul.clientWidth;
        if (W === lastW) return;
        lastW = W;
        ul.style.removeProperty("--sc-s"); ul.style.removeProperty("--sc-min"); ul.style.removeProperty("--sc-cols");
        const cards = [...ul.querySelectorAll(".db-sc")];
        if (!cards.length) return;
        const tileW = cards[0].offsetWidth;
        let need = 0;
        cards.forEach((c) => { const tw = c.querySelector(".db-sc-tw"), t = c.querySelector(".db-sc-t"); if (tw && t) need = Math.max(need, t.scrollWidth + 2 + (tw.offsetWidth - t.clientWidth)); });
        if (!need || need <= tileW) return;
        const s = Math.max(TILE_MIN_S, tileW / need);
        ul.style.setProperty("--sc-s", s.toFixed(4));
        if (s > TILE_MIN_S) return;
        const minW = Math.ceil(need * TILE_MIN_S) + 1;
        ul.style.setProperty("--sc-min", minW + "px");
        if (getComputedStyle(ul).display === "grid") {
          const gap = parseFloat(getComputedStyle(ul).columnGap) || 0, inner = W - 4;
          ul.style.setProperty("--sc-cols", Math.max(1, Math.floor((inner + gap) / (minW + gap))));
        }
      };
      fit();
      const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); });
      ro.observe(ul);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { lastW = -1; fit(); });
      return () => { ro.disconnect(); cancelAnimationFrame(raf); };
    }, [items.map((t) => t.id).join()]);
    const SubcategoryCard = DSX().SubcategoryCard;
    return h("ul", { className: "plp-tiles-row", ref }, items.map((t) => h("li", { key: t.id },
      h(SubcategoryCard, { image: imgSrc(t.img || (NODE[t.id] && NODE[t.id].img) || SUBCAT_IMG[t.id]) || undefined, icon: (NODE[t.id] && NODE[t.id].icon) || "category", label: D.catName(t.id), href: "#/c/" + t.id, onClick: goCat(go, t.id) }))));
  }

  /* ---------- Module: Hero ----------
     kind image (copy + image + optional CTA), promo (banner, no image) or hotspots (shoppable image). Height short or medium.
     Per-breakpoint image through <picture>. The same module shows on every device. Hidden after its end date. */
  function Hero({ m, go }) {
    const [open, setOpen] = React.useState(-1);
    React.useEffect(() => {
      if (open < 0) return;
      const k = (e) => { if (e.key === "Escape") setOpen(-1); };
      const away = (e) => { if (!e.target.closest || !e.target.closest(".plp-hs-dot, .plp-hs-pop")) setOpen(-1); };
      window.addEventListener("keydown", k); document.addEventListener("pointerdown", away, true);
      return () => { window.removeEventListener("keydown", k); document.removeEventListener("pointerdown", away, true); };
    }, [open]);
    if (expired(m)) return null;
    const { Button } = DSX();
    const copy = h("div", { className: "plp-hero-copy" },
      m.eyebrow ? h("span", { className: "db-eyebrow plp-hero-eb" }, m.eyebrow) : null,
      h("h2", { className: "plp-hero-t" }, m.title),
      m.text ? h("p", { className: "plp-hero-x" }, m.text) : null,
      m.cta && Button ? h(Button, { variant: m.kind === "promo" ? "inverse" : "primary", size: "md", onClick: () => follow(go, m.cta.to) }, m.cta.label) : null);
    const cls = "plp-hero is-" + m.kind + " h-" + (m.height || "medium") + " a-" + (m.align || "left");
    if (m.kind === "promo") return h("section", { className: cls + " db-on-dark" }, copy);
    const pic = h("picture", null,
      m.img.mobile ? h("source", { media: "(max-width: 639px)", srcSet: imgSrc(m.img.mobile) }) : null,
      h("img", { src: imgSrc(m.img.desktop), alt: m.alt || "", decoding: "async" }));
    const spots = m.kind === "hotspots" ? (m.spots || []).map((s, i) => {
      const p = D.byId(s.pid); if (!p) return null;
      return h(React.Fragment, { key: i },
        h("button", { type: "button", className: "plp-hs-dot" + (open === i ? " on" : ""), style: { left: s.x + "%", top: s.y + "%" }, "aria-label": (open === i ? "Hide " : "Show ") + p.t, "aria-expanded": open === i, onClick: () => setOpen(open === i ? -1 : i) }, h("span", null)),
        open === i ? h("div", { className: "plp-hs-pop" + (s.x > 55 ? " to-l" : "") + (s.y > 55 ? " to-t" : ""), style: { left: s.x + "%", top: s.y + "%" }, role: "dialog", "aria-label": p.t },
          h("span", { className: "plp-hs-th" }, h("img", { src: thumb(p.img[0]), alt: "" })),
          h("span", { className: "plp-hs-b" }, h("span", { className: "plp-hs-n" }, p.t), h("span", { className: "plp-hs-p" }, p.priceHigh ? "$" + p.price.toFixed(2) + " – $" + p.priceHigh.toFixed(2) : "$" + p.price.toFixed(2)),
            h("a", { className: "plp-hs-go", href: "#/p/" + p.id, onClick: (e) => { e.preventDefault(); go("#/p/" + p.id); } }, h("span", { className: "ul-t" }, "View details"), h(Ico, { name: "arrow-right", size: 14 })))) : null);
    }) : null;
    return h("section", { className: cls }, copy, h("div", { className: "plp-hero-media" }, pic, spots));
  }

  /* ---------- Module: Highlighted products (type "highlight") ----------
     No carousels on PLPs. A highlight is a static one-row section INSIDE the listing (beside the rail from 1024px,
     under the toolbar below 1024px), above the regular grid: same ProductCard, same columns and gaps as the grid,
     at most one row (4 rendered; CSS hides the cards past the current column count), fewer sit left at card width.
     Shown only on page 1 with no filters and the default sort. Products are not removed from the grid below, so the
     count, sort and pagination stay true to the category. Empty sections hide. Recommendation sources resolve after a
     short delay and show a static row of skeleton cards meanwhile. "See All" shows only when it leads elsewhere. */
  const HL_MAX = 4;
  function hlItems(m) {
    let items = D.inCat(m.source.cat).slice();
    if (m.source.exclude) items = items.filter((p) => !inTree(p, m.source.exclude));
    if (m.source.sort === "top") items.sort((a, b) => (b.rc || 0) - (a.rc || 0));
    return items.slice(0, HL_MAX);
  }
  function Highlight({ m, id, go, add, k }) {
    const rec = m.source.kind === "recommendation";
    const [ready, setReady] = React.useState(!rec);
    React.useEffect(() => { if (!rec) return; const t = setTimeout(() => setReady(true), 450); return () => clearTimeout(t); }, [rec]);
    const items = hlItems(m);
    if (ready && !items.length) return null;
    return h("section", { className: "plp-hl", "aria-label": m.title },
      h(DSX().SectionHeading, { title: m.title, href: m.see && m.see !== id ? "#/c/" + m.see : undefined }),
      !ready ? h("div", { className: "plp-grid plp-hl-grid", "aria-busy": true, "aria-label": "Loading " + m.title }, [0, 1, 2, 3].map((n) => h("div", { className: "plp-skel", key: n }, h("span", { className: "plp-skel-c" }), h("span", { className: "plp-skel-l" }), h("span", { className: "plp-skel-l s" }))))
        : h("div", { className: "plp-grid plp-hl-grid" }, items.map((p) => h(ProductCard, { key: p.id, p: p, onOpen: (pid) => go("#/p/" + pid), onAdd: add, trim: true }))));
  }

  /* ---------- Module: Editorial cards (2 to 4) ---------- */
  function Cards({ m, go }) {
    const items = (m.items || []).slice(0, 4);
    if (items.length < 2) return null;
    return h("section", { className: "plp-ed n" + items.length }, items.map((c, i) => {
      const src = imgSrc(c.img);
      return h("a", { key: i, className: "plp-ed-c", href: c.to.indexOf("#/") === 0 ? c.to : "#/c/" + c.to, onClick: (e) => { e.preventDefault(); follow(go, c.to); } },
        h("span", { className: "plp-ed-img" + (src ? "" : " is-empty") }, src ? h("img", { src: src, alt: "", loading: "lazy", decoding: "async" }) : null, h("span", { className: "plp-ed-ph", "aria-hidden": true }, h(Ico, { name: "image", size: 28 }))),
        h("span", { className: "plp-ed-b" }, h("span", { className: "plp-ed-t" }, c.label), c.text ? h("span", { className: "plp-ed-x" }, c.text) : null,
          h("span", { className: "plp-ed-cta" }, h("span", { className: "ul-t" }, c.cta || "Shop now"), h(Ico, { name: "arrow-right", size: 14 }))));
    }));
  }

  /* ---------- Module: Section heading ---------- */
  function Heading({ m }) {
    return h("div", { className: "plp-sh" }, h("h2", { className: "plp-sh-t" }, m.title), m.subtitle ? h("p", { className: "plp-sh-x" }, m.subtitle) : null);
  }

  /* ---------- Browse All: a directory generated from the category tree ---------- */
  /* Browse All: every link on deseretbook.com/allcategories.html, in its sections, groups and order (Oct 2026).
     Each link carries the site's category id. DIR_ALIAS points ids this prototype already has under another id at that page;
     an id with no page here opens an empty category page under its own name (DIR_NAMES). On the site, "Teen Fiction" points at
     Family Name Holders by mistake; here it opens Teen Fiction. */
  const DIRECTORY = [
    ["Apparel & Accessories", null, [
      ["Accessories", null, [["Belts", "gifts_clothing_belts"], ["Coins/Medallion", "gifts_jewelry_coins-and-medallions"], ["Family Name Holders", "temple-worship_temple-accessories_family-name-holders"], ["Handkerchiefs", "temple-worship_temple-accessories_handkerchiefs"], ["Keychains", "gifts_jewelry_keychains"], ["Oil Vials", "gifts_jewelry_oil-vials"], ["Pins", "gifts_jewelry_pins"], ["Recommend Holders", "temple-worship_temple-accessories_temple-recommend-holders"]]],
      ["Clothing", "gifts_clothing", [["Baby Clothing", "gifts_gifts-by-occasion_baby_clothing"], ["Socks", "gifts_clothing_socks"], ["Temple Clothing", "temple-worship_temple-clothing"], ["Ties", "gifts_clothing_ties"], ["Trek Clothing", "gifts_clothing_trek-clothing"], ["T-Shirts", "gifts_clothing_t-shirts"]]],
      ["Bags", null, [["Missionary Bags", "missionary_bags"], ["Scripture Totes", "church-resources_scriptures_scripture-totes"], ["Temple Bags", "temple-worship_temple-bags"]]],
      ["Jewelry", "gifts_jewelry", [["Bracelets", "gifts_jewelry_bracelets"], ["Earrings", "gifts_jewelry_earrings"], ["Necklaces", "gifts_jewelry_necklaces"], ["Rings", "gifts_jewelry_rings"], ["Tie Bars", "gifts_jewelry_tie-bars"], ["CTR Rings", "gifts_jewelry_ctr-rings"]]]]],
    ["Books", "books", [
      ["Fiction", "books_fiction", [["Historical Fiction", "books_fiction_historical-fiction"], ["Mystery & Suspense", "books_fiction_mystery-and-suspense"], ["Teen Fiction", "books_fiction_teen-fiction"], ["Romance", "books_fiction_romance"], ["Fantasy", "books_fiction_fantasy"]]],
      ["Non-Fiction", "books_nonfiction", [["History", "books_nonfiction_history"], ["Self-Improvement", "books_nonfiction_self-improvement"], ["Biography", "books_nonfiction_biography"], ["Personal/Family History", "books_nonfiction_personal-and-family-history"], ["Family & Parenting", "books_nonfiction_family-and-parenting"], ["Missionary Books", "missionary_books"], ["Church History", "books_nonfiction_history_church-history"]]],
      ["Gospel Voices", "books_gospel-voices", [["Foreign Language", "books_gospel-voices_foreign-language"], ["General Authority Books", "books_gospel-voices_general-authority-books"], ["Inspiration", "books_gospel-voices_inspiration"], ["Teen Inspiration", "books_gospel-voices_teen-inspiration"], ["Remembrance", "books_gospel-voices_remembrance-books"], ["Temple Books", "books_gospel-voices_temple-books"], ["BYU Maxwell Institute", "books_gospel-voices_byu-maxwell-institute"]]],
      ["Children's Books", "inspire-your-child_children-s-books", null],
      ["Cookbooks", "home_kitchen_cookbooks", null],
      ["Magazines", "books_magazines", null]]],
    ["Church Distribution", "church-resources_church-distribution", [
      ["Church Curriculum", "church-resources_church-distribution_church-curriculum", null],
      ["Distribution Prints", "church-resources_church-distribution_prints", null],
      ["Distribution Scriptures", "church-resources_church-distribution_distribution-scriptures", null]]],
    ["Church Resources", "church-resources", [
      ["Scriptures", "scriptures-landing", null], ["Journal Editions", "church-resources_journal-editions", null],
      ["General Conference Resources", "church-resources_teaching-helps_general-conference-resources", null], ["Foreign Language Scriptures", "church-resources_scriptures_foreign-language-scriptures", null],
      ["Teaching Helps", "church-resources_teaching-helps", null], ["Youth Theme", "church-resources_teaching-helps_youth-theme", null],
      ["Come Follow Me Study", "church-resources_scriptures_come-follow-me", null], ["Let's Talk Book Collection", "books_gospel-voices_let-s-talk-book-collection", null],
      ["Don't Miss This", "church-resources_scriptures_don-t-miss-this", null]]],
    ["Entertainment", "family-entertainment", [
      ["Games & Puzzles", "family-entertainment_games-and-puzzles", null], ["Podcasts", "podcasts", null], ["Movies", "family-entertainment_movies", null],
      ["Music", "family-entertainment_music", null], ["Sheet Music", "family-entertainment_music_sheet-music", null], ["Songbooks", "family-entertainment_music_songbooks", null],
      ["Toys & Activities", "inspire-your-child_toys-and-activities", null]]],
    ["Home", "home", [
      ["Art", "home_fine-art", [["Wall Art", "home_fine-art_wall-art"], ["Temple Art", "home_fine-art_temple-art"], ["Figurines", "home_fine-art_figurines"], ["Statues", "home_fine-art_sculptures"], ["Pottery", "home_fine-art_pottery"], ["Fine Art", "home_fine-art"], ["Savior Art", "home_fine-art_savior-art"]]],
      ["Decor", "home_home-decor", [["Ornaments", "christmas_christmas-ornaments"], ["Nativities", "christmas_nativities"], ["Welcome Mats", "home_home-decor_welcome-mats"], ["Tabletop Decor", "home_home-decor_table-top-decor"], ["Latter-Day Home", "home_home-decor_latter-day-home"], ["Home Decor", "home_home-decor"]]],
      ["Kitchen", "home_kitchen", [["Kitchen Accessories", "home_kitchen_accessories"], ["Recipe Keepers", "home_kitchen_recipe-keepers"], ["Cookbooks", "home_kitchen_cookbooks"], ["Emergency Preparedness", "home_kitchen_emergency-preparedness"], ["Food", "home_kitchen_food"]]]]],
    ["Stationery & Papergoods", "gifts_stationery", [
      ["Calendars", "gifts_stationery_calendars", null], ["Cards", "gifts_stationery_greeting-cards", null], ["Journals & Notebooks", "journals", null],
      ["Markers & Pens", "gifts_stationery_accessories", null], ["Memory Books", "gifts_stationery_memory-books", null],
      ["Prints & Bookmarks", "gifts_stationery_prints-and-bookmarks", null], ["Stickers", "gifts_stationery_stickers", null]]],
    ["Clearance", "clearance", []]
  ];
  const DIR_ALIAS = {
    "inspire-your-child_children-s-books": "books_childrens-books", "scriptures-landing": "church-resources_scriptures",
    "church-resources_journal-editions": "church-resources_scriptures_scripture-journal-editions", "family-entertainment_games-and-puzzles": "games-puzzles",
    "home_fine-art": "art", "home_fine-art_wall-art": "art_wall-art", "home_fine-art_temple-art": "art_temple-art", "home_fine-art_sculptures": "art_statues",
    "home_fine-art_savior-art": "art_savior-art", "home_home-decor": "art_decor"
  };
  const DIR_NAMES = {};
  DIRECTORY.forEach(([sn, sid, groups]) => { if (sid) DIR_NAMES[sid] = sn; groups.forEach(([gn, gid, items]) => { if (gid && !DIR_NAMES[gid]) DIR_NAMES[gid] = gn; (items || []).forEach(([n, id]) => { if (!DIR_NAMES[id]) DIR_NAMES[id] = n; }); }); });
  const dirTo = (id) => DIR_ALIAS[id] || REDIRECTS[id] || id;
  function Directory({ go }) {
    const link = (label, id) => { const to = dirTo(id); return h("a", { href: "#/c/" + to, onClick: goCat(go, to) }, label); };
    return h("nav", { className: "plp-dir", "aria-label": "All categories" }, DIRECTORY.map(([sn, sid, groups]) => h("section", { className: "plp-dir-s", key: sn },
      h("h2", { className: "plp-dir-h" }, sid ? link(sn, sid) : sn),
      groups.length ? h("ul", { className: "plp-dir-gs" }, groups.map(([gn, gid, items]) => h("li", { key: gn, className: items ? "plp-dir-g" : undefined },
        items ? h("h3", { className: "plp-dir-gh" }, gid ? link(gn, gid) : gn) : link(gn, gid),
        items ? h("ul", null, items.map(([n, id]) => h("li", { key: n + id }, link(n, id)))) : null))) : null)));
  }

  /* ---------- SEO block: below the grid, collapsed after about 3 lines ---------- */
  function Seo({ seo }) {
    const [more, setMore] = React.useState(false);
    const [clip, setClip] = React.useState(true);
    const ref = React.useRef(null);
    React.useEffect(() => { const el = ref.current; if (el) setClip(el.scrollHeight > el.clientHeight + 4); }, []);
    if (!seo || !seo.text || !seo.text.length) return null;
    const { Button } = DSX();
    return h("section", { className: "plp-seo" },
      seo.title ? h("h2", { className: "plp-seo-t" }, seo.title) : null,
      h("div", { className: "plp-seo-b" + (more ? " open" : "") + (clip && !more ? " clipped" : ""), ref: ref, id: "plp-seo-b" }, seo.text.map((t, i) => h("p", { key: i }, t))),
      clip || more ? h(Button, { variant: "ghost", size: "sm", iconAfter: more ? "expand_less" : "expand_more", "aria-expanded": more, "aria-controls": "plp-seo-b", className: "plp-seo-more", onClick: () => setMore(!more) }, more ? "Read less" : "Read more") : null);
  }

  /* ---------- Filters ---------- */
  function facetsFor(id, items) {
    const kids = id === "search" ? TREE.filter((n) => !n.alias) : childrenOf(id);
    const out = [];
    if (kids.length) {
      const vals = kids.map((k) => ({ v: k.id, l: D.catName(k.id), n: items.filter((p) => inTree(p, k.id)).length })).filter((x) => x.n);
      if (vals.length > 1) out.push({ k: "cat", l: "Category", vals });
    }
    const fm = {};
    items.forEach((p) => { const f = facetFmt(p); if (f) fm[f] = (fm[f] || 0) + 1; });
    const fv = Object.keys(fm).sort().map((f) => ({ v: f, l: f, n: fm[f] }));
    if (fv.length > 1) out.push({ k: "fmt", l: "Format", vals: fv });
    const pv = PRICES.map((r) => ({ v: r[0], l: r[1], n: items.filter((p) => p.price >= r[2] && p.price < r[3]).length })).filter((x) => x.n);
    if (pv.length > 1) out.push({ k: "price", l: "Price", vals: pv });
    return out;
  }
  const passes = (p, f) => (!f.cat.length || f.cat.some((c) => inTree(p, c))) && (!f.fmt.length || f.fmt.indexOf(facetFmt(p)) > -1) &&
    (!f.price.length || f.price.some((v) => { const r = PRICES.find((x) => x[0] === v); return p.price >= r[2] && p.price < r[3]; }));
  /* Filters never scroll inside themselves and are never sticky: a facet with more than FACET_CAP values shows the
     first FACET_SHOW, then a Show more / Show less link; shorter facets show every value. */
  const FACET_SHOW = 6, FACET_CAP = 8;
  function FacetGroup({ g, sel, toggle }) {
    const { Checkbox } = DSX();
    const [all, setAll] = React.useState(false);
    const [open, setOpen] = React.useState(() => sel.length > 0);
    const { Icon } = DSX();
    const long = g.vals.length > FACET_CAP;
    const vals = all || !long ? g.vals : g.vals.slice(0, FACET_SHOW);
    const lid = "plp-fg-" + g.k;
    return h("div", { className: "plp-fg" + (open ? "" : " is-closed"), role: "group", "aria-labelledby": lid },
      h("h3", { className: "plp-fg-l", id: lid },
        h("button", { type: "button", className: "plp-fg-t", "aria-expanded": open, "aria-controls": lid + "-b", onClick: () => setOpen(!open) },
          h("span", null, g.l), Icon ? h(Icon, { name: "expand_more", size: 20, className: "plp-fg-chev" }) : null)),
      h("div", { className: "plp-fg-b", id: lid + "-b" }, h("div", { className: "plp-fg-bi" },
        h("div", { className: "plp-fg-v", id: lid + "-v" }, vals.map((x) => h(Checkbox, { key: x.v, checked: sel.indexOf(x.v) > -1, onChange: () => toggle(g.k, x.v), label: h("span", { className: "plp-fv" }, x.l, h("span", { className: "plp-fv-n" }, "(" + x.n + ")")) }))),
        long ? h("button", { type: "button", className: "plp-fg-more", "aria-expanded": all, "aria-controls": lid + "-v", onClick: () => setAll(!all) }, h("span", { className: "ul-t" }, all ? "Show less" : "Show more (" + (g.vals.length - FACET_SHOW) + ")")) : null)));
  }

  /* True below 1024px (phones and tablets, where the toolbar row shows), kept in sync with the viewport. */
  function usePhone() {
    const q = "(max-width: 1023px)";
    const [m, setM] = React.useState(() => window.matchMedia(q).matches);
    React.useEffect(() => { const mq = window.matchMedia(q); const on = () => setM(mq.matches); on(); mq.addEventListener("change", on); return () => mq.removeEventListener("change", on); }, []);
    return m;
  }

  /* ---------- The template ---------- */
  /* Search results (#/search/<q>) reuse this template with id "search": title "Results for ...", no subcategory row,
     the matches from window.DBSearch in relevance order ("Best Matches"), and a Category filter over the top-level categories. */
  function Page({ id: rawId, go, add, search }) {
    const isSearch = rawId === "search";
    const id = isSearch ? "search" : canon(rawId);
    React.useEffect(() => { if (!isSearch && id !== rawId) history.replaceState(null, "", "#/c/" + id); }, [id, rawId]);
    const [sort, setSort] = React.useState("featured");
    const [f, setF] = React.useState({ cat: [], fmt: [], price: [] });
    const [pg, setPg] = React.useState(1);
    const [sheet, setSheet] = React.useState(false);
    React.useEffect(() => { setPg(1); }, [sort, f]);
    /* Below 1024px (phones and tablets): grid or list view (DS SegmentedControl in the toolbar). The choice is remembered on this device; from 1024px it is always the grid. */
    const [view, setViewS] = React.useState(() => { try { return localStorage.getItem("db-plp-view") === "list" ? "list" : "grid"; } catch (e) { return "grid"; } });
    const setView = (v) => { setViewS(v); try { localStorage.setItem("db-plp-view", v); } catch (e) {} };
    const phone = usePhone();
    const { Select, Button, Tag, Dialog, SegmentedControl } = DSX();
    const cfg = cfgOf(id);
    const all = isSearch ? (window.DBSearch ? window.DBSearch(search || "") : []) : id === "all-categories" ? D.products.slice() : D.inCat(id).slice();
    const facets = facetsFor(id, all);
    let items = all.filter((p) => passes(p, f));
    if (sort === "low") items.sort((a, b) => a.price - b.price);
    if (sort === "high") items.sort((a, b) => b.price - a.price);
    if (sort === "az") items.sort((a, b) => a.t.localeCompare(b.t));
    if (sort === "rating") items.sort((a, b) => (b.rc || 0) - (a.rc || 0));
    const pages = Math.max(1, Math.ceil(items.length / PER));
    const page = Math.min(pg, pages);
    const list = items.slice((page - 1) * PER, page * PER);
    const toggle = (k, v) => setF((o) => Object.assign({}, o, { [k]: o[k].indexOf(v) > -1 ? o[k].filter((x) => x !== v) : o[k].concat(v) }));
    const clear = () => setF({ cat: [], fmt: [], price: [] });
    const active = [].concat(f.cat.map((v) => ["cat", v, D.catName(v)]), f.fmt.map((v) => ["fmt", v, v]), f.price.map((v) => ["price", v, PRICES.find((x) => x[0] === v)[1]]));
    const crumbs = trail(id);
    /* Every PLP is the same lean template: title and intro, one row of subcategories, then the filtered product list.
       Only the first tiles module (or the directory on All Categories) renders; heroes, editorial cards, extra headings,
       highlighted-product rows and SEO copy stay in CONFIG but are not shown. */
    const sub = cfg.modules.find((m) => m.type === "tiles" || m.type === "directory") || { type: "tiles", source: "auto" };
    const mods = isSearch || cfg.noTiles ? null : sub.type === "directory" ? h(Directory, { go }) : h(Tiles, { m: sub, id, go });
    const title = isSearch ? "Results for \u201c" + (search || "") + "\u201d" : D.catName(id);
    const rail = facets.length ? facets.map((g) => h(FacetGroup, { key: g.k, g, sel: f[g.k], toggle })) : null;
    /* Count and sort: in the rail from 1024px (the toolbar row is hidden there), in the toolbar row below 1024px.
       Both copies share state; CSS shows one at a time, so only the visible count is announced. */
    const SORTS = [{ value: "featured", label: isSearch ? "Best Matches" : "Featured" }, { value: "rating", label: "Top Sellers" }, { value: "low", label: "Price Low to High" }, { value: "high", label: "Price High to Low" }, { value: "az", label: "Product Name A to Z" }];
    const sortSel = (extra) => Select ? h(Select, Object.assign({ value: sort, onChange: (e) => setSort(e.target.value), options: SORTS }, extra)) : null;
    const countTxt = items.length + " " + (items.length === 1 ? "result" : "results");
    const card = (p) => h(ProductCard, { key: p.id, p: p, onOpen: (pid) => go("#/p/" + pid), onAdd: add, trim: true });
    return h("div", { className: "plp", "data-plp-config": cfg.config, "data-plp-cat": id },
      h(DSX().Breadcrumb, { className: "crumbs", items: [{ label: "Home", href: "#/" }].concat(isSearch ? [] : crumbs.map((c) => ({ label: D.catName(c), href: "#/c/" + c })), [{ label: isSearch ? "Search" : D.catName(id) }]).map((it) => it.href ? Object.assign({}, it, { onClick: (e) => { e.preventDefault(); go(it.href); } }) : it) }),
      h("div", { className: "plp-h" }, h("h1", null, title), !isSearch && cfg.intro ? h("p", { className: "plp-intro" }, cfg.intro) : null),
      cfg.banner && !isSearch ? h(SeasonBanner, { banner: cfg.banner }) : null,
      h("div", { className: "plp-slot" }, mods),
      all.length ? h("div", { className: "plp-body" + (rail ? " has-rail" : ""), id: "plp-results" },
        rail ? h("aside", { className: "plp-rail", "aria-label": "Sort and filter" },
          h("div", { className: "plp-rail-top" },
            h("h2", { className: "plp-rail-h" }, "Filter"),
            h("span", { className: "plp-rail-count", role: "status" }, countTxt)),
          h("div", { className: "plp-rail-sort" }, sortSel({ label: "Sort by", id: "plp-sort-rail" })),
          rail) : null,
        h("div", { className: "plp-main" },
          h("div", { className: "plp-bar" },
            rail && Button ? h(Button, { className: "plp-fbtn", variant: "secondary", size: "md", icon: "tune", onClick: () => setSheet(true) }, "Filter" + (active.length ? " (" + active.length + ")" : "")) : null,
            h("span", { className: "plp-count", role: "status" }, countTxt),
            h("div", { className: "plp-sortw" }, sortSel({ "aria-label": "Sort by" })),
            SegmentedControl ? h(SegmentedControl, { className: "plp-view", size: "md", "aria-label": "Product view", value: view, onChange: setView,
              options: [{ value: "grid", icon: "grid_view", ariaLabel: "Grid view" }, { value: "list", icon: "view_list", ariaLabel: "List view" }] }) : null),
          active.length && Tag ? h("div", { className: "plp-active" }, active.map((a) => h(Tag, { key: a[0] + a[1], removable: true, onRemove: () => toggle(a[0], a[1]) }, a[2])),
            h("button", { type: "button", className: "plp-clear", onClick: clear }, h("span", { className: "ul-t" }, "Clear all"))) : null,
          list.length ? (phone && view === "list"
            ? h("ul", { className: "db-pc-list plp-list", "aria-label": "Products" }, list.map((p) => h("li", { key: p.id }, h(ProductCard, { p: p, onOpen: (pid) => go("#/p/" + pid), onAdd: add, layout: "row" }))))
            : h("div", { className: "plp-grid" }, list.map(card)))
            : h(DSX().EmptyState, { className: "plp-none", align: "start", action: Button ? h(Button, { variant: "secondary", size: "sm", onClick: clear }, "Clear all filters") : null }, "No products match these filters."),
          window.DBPager ? h(window.DBPager, { page, pages, onGo: setPg, label: (isSearch ? "Search results" : D.catName(id)) + " pages", anchor: "#plp-results" }) : null))
        : h(React.Fragment, null,
          h(DSX().EmptyState, { id: "plp-results" }, isSearch ? "No results for \u201c" + (search || "") + "\u201d. Try a title, an author, or a category. Here are some of our most popular items." : "Nothing on this shelf yet. Here are some of our most popular items."),
          h("div", { className: "plp-grid plp-grid-full" }, D.trending.map((x) => D.byId(x)).filter(Boolean).map(card))),
      rail && Dialog ? h(Dialog, { open: sheet, onClose: () => setSheet(false), size: "md", title: "Filter",
        footer: h(React.Fragment, null, Button ? h(Button, { variant: "secondary", size: "md", onClick: clear, disabled: !active.length }, "Clear all") : null,
          Button ? h(Button, { variant: "primary", size: "md", onClick: () => setSheet(false) }, "Show " + items.length + (items.length === 1 ? " result" : " results")) : null) },
        h("div", { className: "plp-sheet" }, rail)) : null);
  }

  window.PLP = { augment, Page, CONFIG, Tiles, Hero, Highlight, Cards, Heading, Seo };
})();
