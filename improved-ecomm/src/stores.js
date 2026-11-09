/* Find My Store (#/stores): all Deseret Book locations, searchable by ZIP code or the user's location.
   Names and addresses copied from deseretbook.com/all-store-locations.html (Mesa Temple's two address lines joined).
   Coordinates are approximate city centroids, used only for distance sorting. */
(function () {
  const h = React.createElement;
  const { useState, useMemo } = React;
  const S = [
    ["American Fork", "468 N 990 W # 82", "American Fork, UT 84003", 40.385, -111.81],
    ["Bellevue", "3080 148th Ave SE #108", "Bellevue, WA 98007", 47.58, -122.14],
    ["Boise", "7147 Overland Rd", "Boise, ID 83709", 43.59, -116.28],
    ["Bountiful", "135 N 545 W", "West Bountiful, UT 84087", 40.89, -111.90],
    ["Cedar City", "596 S Main St.", "Cedar City, UT 84720", 37.66, -113.06],
    ["Clinton", "1978 N 2000 W", "Clinton, UT 84015", 41.14, -112.06],
    ["Columbia", "9700 A Caughman Rd.", "Columbia, South Carolina 29209", 33.95, -80.92, "Nephi\u2019s Books: An Independent Deseret Book"],
    ["Costa Mesa", "2200 Harbor BLVD STE B-110", "Costa Mesa, CA 92627", 33.65, -117.92],
    ["Cottonwood Heights", "6972 S Park Centre Drive", "Cottonwood Heights, UT 84141", 40.62, -111.86],
    ["Denver", "2010 E Country Line Rd #A", "Littleton, CO 80126", 39.56, -104.96],
    ["Draper", "107 E 12300 S", "Draper, UT 84020", 40.53, -111.89],
    ["Gilbert", "2894 S San Tan Village Pky Ste 103", "Gilbert, AZ 85295", 33.30, -111.74],
    ["Idaho Falls", "750 Pioneer Road", "Idaho Falls, ID 83402", 43.51, -112.02],
    ["Kennewick", "8901 W Tucannon, Ste 130", "Kennewick, Washington 99336", 46.21, -119.25, "Fountain Books: An Independent Deseret Book"],
    ["Lake Oswego", "14990 SW Bangy Road", "Lake Oswego, OR 97035", 45.41, -122.76],
    ["Las Vegas", "5750 Centennial Center Blvd.", "Las Vegas, NV 89149", 36.27, -115.27],
    ["Layton", "754 N Main", "Layton, UT 84041", 41.07, -111.97],
    ["Logan", "1309 N Main #150", "Logan, UT 84341", 41.75, -111.83],
    ["Mesa Temple", "455 East Main Street, Suite 101", "Mesa, AZ 85203", 33.415, -111.82],
    ["Ogden Temple", "339 E 2250 S #100", "Ogden, UT 84401", 41.22, -111.97],
    ["Orem", "230 E University Parkway", "Orem, UT 84058", 40.28, -111.69],
    ["Phoenix", "2919 W. Agua Fria FWY Ste 101", "Phoenix, AZ 85027", 33.68, -112.12],
    ["Pocatello", "4233 Yellowstone Ave #102", "Chubbuck, ID 83202", 42.91, -112.47],
    ["Rexburg", "180 W 2nd S", "Rexburg, ID 83440", 43.82, -111.79],
    ["Riverton", "3651 W Market Center DR Ste 100", "Riverton, UT 84065", 40.52, -111.98],
    ["Sacramento", "11765 Fair Oaks Blvd.", "Fair Oaks, CA 95628", 38.66, -121.27],
    ["Salt Lake Downtown", "45 W South Temple", "Salt Lake City, UT 84101", 40.77, -111.89],
    ["Saratoga Springs", "903 N Redwood Rd Ste 120", "Saratoga Springs, UT 84045", 40.36, -111.90],
    ["Spanish Fork", "1141 N Chappel Dr", "Spanish Fork, UT 84660", 40.13, -111.64],
    ["St George", "245 Red Cliff Dr. #18", "St George, UT 84770", 37.08, -113.55],
    ["Sugarhouse", "2274 S 1300 E #G6", "Salt Lake City, UT 84106", 40.72, -111.85],
    ["Taylorsville DB Overflow", "5794 S Redwood Rd", "Taylorsville, UT 84123", 40.64, -111.94],
    ["Twin Falls", "1434 Pole Line Rd East", "Twin Falls, ID 83301", 42.58, -114.45],
    ["Valley Fair", "3513 S 2700 W #400", "West Valley City, UT 84119", 40.70, -111.95],
    ["Vernal", "1797 W 1000 S", "Vernal, Utah 84078", 40.44, -109.55, "Basin Books & Gifts: An Independent Deseret Book"],
    ["West Jordan", "7742 S Campus View Dr #120", "West Jordan, UT 84084", 40.61, -111.94]
  ];
  /* ZIP lookup is local: src/zip-data.js is injected on the first search, then parsed into a map. */
  let zipMap = null, zipLoad = null;
  const loadZips = () => zipMap ? Promise.resolve(zipMap) : zipLoad || (zipLoad = new Promise((res, rej) => {
    const done = () => { zipMap = {}; String(window.DB_ZIPS || "").split("\n").forEach((l) => { const f = l.split("|"); if (f.length === 5) zipMap[f[0]] = f; }); window.DB_ZIPS = null; res(zipMap); };
    if (window.DB_ZIPS) return done();
    const s = document.createElement("script"); s.src = "src/zip-data.js"; s.onload = done; s.onerror = () => { zipLoad = null; rej(); }; document.head.appendChild(s);
  }));
  const miles = (a, b, c, d) => { const r = Math.PI / 180, x = Math.sin((c - a) * r / 2), y = Math.sin((d - b) * r / 2); return 7918 * Math.asin(Math.sqrt(x * x + Math.cos(a * r) * Math.cos(c * r) * y * y)); };

  function StoreFinder({ go, onGo }) {
    const FP = window.FP; const { Shell } = FP; const { Input, Button, Icon } = FP.DS();
    const [zip, setZip] = useState("");
    const [err, setErr] = useState("");
    const [geoErr, setGeoErr] = useState("");
    const [busy, setBusy] = useState("");
    const [at, setAt] = useState(null);
    const list = useMemo(() => {
      const l = S.map((s) => ({ s, d: at ? miles(at.lat, at.lng, s[3], s[4]) : null }));
      return at ? l.sort((a, b) => a.d - b.d) : l;
    }, [at]);
    const byZip = (q) => {
      const z = String(q != null ? q : zip).trim();
      if (!/^\d{5}$/.test(z)) { setErr("Enter a 5-digit ZIP code."); return; }
      setErr(""); setGeoErr(""); setBusy("zip");
      loadZips().then((m) => {
        const p = m[z]; if (!p) throw 0; setAt({ lat: +p[1], lng: +p[2], label: z + " (" + p[3] + ", " + p[4] + ")" });
      }).catch(() => setErr("We couldn\u2019t find that ZIP code. Check it and try again.")).finally(() => setBusy(""));
    };
    const byGeo = () => {
      if (!navigator.geolocation) { setGeoErr("Your browser doesn\u2019t share location. Search by ZIP code instead."); return; }
      setErr(""); setGeoErr(""); setBusy("geo");
      navigator.geolocation.getCurrentPosition((p) => { setBusy(""); setZip(""); setAt({ lat: p.coords.latitude, lng: p.coords.longitude, label: "your location" }); },
        () => { setBusy(""); setGeoErr("We couldn\u2019t get your location. Allow location access, or search by ZIP code."); }, { timeout: 10000 });
    };
    const clear = () => { setAt(null); setZip(""); setErr(""); setGeoErr(""); };
    return h(Shell, { label: "Deseret Book Store Locations", title: "Find My Store", onGo: onGo || (() => {}), lede: "The store locator finds the closest store near you." },
      h(FP.DS().SearchFilterBar, { className: "fs-find", mode: "submit", searchLabel: "ZIP code", placeholder: "ZIP code", query: zip,
        onQueryChange: (v) => { setZip(v.replace(/\D/g, "")); if (err) setErr(""); }, onSearch: byZip, busy: busy === "zip", searchError: err || undefined,
        inputProps: { inputMode: "numeric", maxLength: 5 },
        actions: h(Button, { variant: "ghost", size: "md", icon: "my_location", onClick: byGeo, disabled: busy === "geo" }, busy === "geo" ? "Locating\u2026" : "Use my location") }),
      geoErr ? h("p", { className: "fp-err", role: "alert" }, geoErr) : null,
      h("div", { className: "fs-sum" },
        h("p", null, at ? "Stores nearest " + at.label : S.length + " stores"),
        at ? h(Button, { variant: "ghost", size: "sm", onClick: clear }, "Show all stores") : null),
      h("ul", { className: "fs-list" }, list.map(({ s, d }) => h("li", { key: s[0] },
        h("span", { className: "fs-ic" }, Icon ? h(Icon, { name: "storefront", size: 24 }) : null),
        h("h2", { className: "fp-h3 fs-n" }, s[0]),
        h("div", { className: "fs-t" },
          s[5] ? h("p", { className: "fs-ind" }, s[5]) : null,
          h("p", null, s[1]), h("p", null, s[2])),
        d != null ? h("span", { className: "fs-mi" }, (d < 10 ? d.toFixed(1) : Math.round(d).toLocaleString()) + " mi") : h("span"),
        h(Button, { variant: "secondary", size: "sm", href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Deseret Book " + s[1] + " " + s[2]), target: "_blank", rel: "noopener", iconAfter: "open_in_new" }, "Directions")))),
      h("p", { className: "fp-meta" }, "All Deseret Book locations and offices are closed on Sundays."));
  }
  window.StoreFinder = StoreFinder;
})();
