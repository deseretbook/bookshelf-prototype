/* PromoBand: project-local. The Deseret Book Design System removed its PromoBand component, so the project keeps
   the last DS version here (now drawing the DS Bookshelf PLUS SVGs) for the Bookshelf+ band on home and the panels on the PDP and
   in the account drawer. Exposed as window.DBPromoBand. Brand files come from the synced copy in ds/deseret-book/assets/bookshelf-plus/. */
(function () {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The Bookshelf PLUS logo and symbol are the DS currentColor SVGs, drawn as CSS masks tinted Orange 400 (css/promo-band.css). */

/** Promotes a membership or sub-brand. tone: bookshelf (Bookshelf PLUS skin) or dove (Platinum and other promos).
 *  layout: band (the whole strip is one link) or panel (mark, title, text and one action). */
function PromoBand({
  tone = 'bookshelf',
  layout = 'panel',
  label,
  title,
  children,
  subline,
  action,
  mark,
  logo,
  href,
  onClick,
  className,
  style,
  ...rest
}) {
  const bsp = tone === 'bookshelf';
  const logoEl = logo !== undefined ? logo : bsp ? /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Bookshelf PLUS",
    className: "db-pb-logo"
  }) : null;
  const markEl = mark !== undefined ? mark : bsp ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "db-pb-mark"
  }) : null;
  const cls = 'db-pb db-pb-' + (bsp ? 'bookshelf' : 'dove') + ' db-pb-' + layout + (className ? ' ' + className : '');
  if (layout === 'band') {
    const Tag = href ? 'a' : 'button';
    return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
      href: href,
      type: href ? undefined : 'button',
      onClick: onClick,
      className: cls,
      style: style
    }), /*#__PURE__*/React.createElement("span", {
      className: "db-pb-txt"
    }, label ? /*#__PURE__*/React.createElement("span", {
      className: "db-pb-label"
    }, label) : null, subline ? /*#__PURE__*/React.createElement("span", {
      className: "db-pb-sub"
    }, subline) : null), logoEl);
  }
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    onClick: onClick,
    className: cls,
    style: style
  }), markEl ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex'
    }
  }, markEl) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-1)'
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "db-pb-title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "db-pb-text"
  }, children) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, action) : null);
}
window.DBPromoBand = PromoBand;
})();
