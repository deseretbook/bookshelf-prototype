/* Head-on book covers: find the cover rectangle inside the product image (trimming white or transparent padding),
   so the card can crop to the book's real proportions. Mockups, angled shots and covers that blend into the
   background fail the edge test and keep the original image. Results are cached per image. */
(function () {
  var KEY = "db-bkcrop-v4", cache = {};
  try { cache = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  var pending = {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch (e) {} }
  function analyze(src) {
    if (pending[src]) return pending[src];
    pending[src] = new Promise(function (res) {
      var im = new Image();
      im.crossOrigin = "anonymous";
      im.onload = function () {
        try {
          var W = im.naturalWidth, H = im.naturalHeight, s = Math.min(1, 200 / Math.max(W, H));
          var w = Math.max(1, Math.round(W * s)), h = Math.max(1, Math.round(H * s));
          var c = document.createElement("canvas"); c.width = w; c.height = h;
          var x = c.getContext("2d"); x.drawImage(im, 0, 0, w, h);
          var d = x.getImageData(0, 0, w, h).data;
          var bg = function (xx, yy) { var i = (yy * w + xx) * 4; return d[i + 3] < 24 || (d[i] > 242 && d[i + 1] > 242 && d[i + 2] > 242); };
          var x0 = w, y0 = h, x1 = -1, y1 = -1, xx, yy;
          for (yy = 0; yy < h; yy++) for (xx = 0; xx < w; xx++) if (!bg(xx, yy)) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
          if (x1 < 0) return res(null);
          var bw = x1 - x0 + 1, bh = y1 - y0 + 1, r = (bw * W / w) / (bh * H / h);
          var box = { x: x0 / w, y: y0 / h, w: bw / w, h: bh / h, r: r, ok: false };
          if (bw < 20 || bh < 20 || r < 0.6 || r > 0.95) return res(box);
          var line = function (ax, ay, bx, by) { var n = 0, t = 0, k, steps = Math.max(Math.abs(bx - ax), Math.abs(by - ay)); for (k = 0; k <= steps; k++) { t++; if (!bg(Math.round(ax + (bx - ax) * k / steps), Math.round(ay + (by - ay) * k / steps))) n++; } return n / t; };
          var i = 2, ok = line(x0 + i, y0 + i, x1 - i, y0 + i) > 0.92 && line(x0 + i, y1 - i, x1 - i, y1 - i) > 0.92 && line(x0 + i, y0 + i, x0 + i, y1 - i) > 0.92 && line(x1 - i, y0 + i, x1 - i, y1 - i) > 0.92;
          box.ok = ok || bh >= h - 2 || bw >= w - 2; res(box);
        } catch (e) { res(null); }
      };
      im.onerror = function () { res(null); };
      im.src = src;
    }).then(function (v) { cache[src] = v; save(); return v; });
    return pending[src];
  }
  var SCRIPTURE = ["church-resources_scriptures", "church-resources_scriptures_scripture-journal-editions", "church-resources_scriptures_genuine-leather-scriptures"];
  function isBook(p) { return !!p && (p.cat.indexOf("books") === 0 || p.cat === "missionary_books" || SCRIPTURE.indexOf(p.cat) > -1); }
  function useBookCrop(src, p) {
    var book = !!p;
    var st = React.useState(book && src in cache ? cache[src] : undefined), crop = st[0], set = st[1];
    React.useEffect(function () {
      if (!book || !src) return;
      if (src in cache) { set(cache[src]); return; }
      var live = true; analyze(src).then(function (v) { if (live) set(v); });
      return function () { live = false; };
    }, [src, book]);
    return crop && (crop.ok || (crop.r > 0.3 && crop.r < 3)) ? crop : null;
  }
  /* Thumbnail fill: zoom an image so its content (trimmed of white or transparent padding) covers a square frame. */
  function ThumbFill(props) {
    var src = props.src;
    var st = React.useState(src in cache ? cache[src] : undefined), box = st[0], set = st[1];
    React.useEffect(function () {
      if (!src) return;
      if (src in cache) { set(cache[src]); return; }
      var live = true; analyze(src).then(function (v) { if (live) set(v); });
      return function () { live = false; };
    }, [src]);
    var style = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
    if (box && box.w > 0 && box.h > 0 && (box.w < 0.98 || box.h < 0.98)) {
      var s = Math.max(1 / box.w, 1 / box.h), cx = (box.x + box.w / 2) * 100, cy = (box.y + box.h / 2) * 100;
      style.transform = "scale(" + s.toFixed(3) + ")";
      style.transformOrigin = cx.toFixed(1) + "% " + cy.toFixed(1) + "%";
      style.objectPosition = cx.toFixed(1) + "% " + cy.toFixed(1) + "%";
    }
    return React.createElement("img", { src: src, alt: props.alt || "", style: style, draggable: false });
  }
  window.ThumbFill = ThumbFill;
  window.useBookCrop = useBookCrop;
  window.isBookProduct = isBook;
  window.bookBox = function (src) { return cache[src] || null; };
})();
