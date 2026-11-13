/* @ds-bundle: {"format":4,"namespace":"DeseretBookDesignSystem_609afa","components":[{"name":"Button","sourcePath":"components/actions/button/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/icon-button/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/badge/Badge.jsx"},{"name":"Card","sourcePath":"components/content/card/Card.jsx"},{"name":"Divider","sourcePath":"components/content/divider/Divider.jsx"},{"name":"DB_ICONS","sourcePath":"components/content/icon/Icon.jsx"},{"name":"Icon","sourcePath":"components/content/icon/Icon.jsx"},{"name":"Tag","sourcePath":"components/content/tag/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/dialog/Dialog.jsx"},{"name":"DIALOG_TONES","sourcePath":"components/feedback/dialog/dialog-motion.js"},{"name":"Toast","sourcePath":"components/feedback/toast/Toast.jsx"},{"name":"TOAST_TONES","sourcePath":"components/feedback/toast/toast-motion.js"},{"name":"Tooltip","sourcePath":"components/feedback/tooltip/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/checkbox/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/input/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/quantity-stepper/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/radio/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/segmented-control/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/select/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/switch/Switch.jsx"},{"name":"CarouselChevronButton","sourcePath":"components/navigation/carousel-chevron-button/CarouselChevronButton.jsx"},{"name":"Tabs","sourcePath":"components/navigation/tabs/Tabs.jsx"},{"name":"StarRating","sourcePath":"components/content/star-rating/StarRating.jsx"},{"name":"Pagination","sourcePath":"components/navigation/pagination/Pagination.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/empty-state/EmptyState.jsx"},{"name":"ProductCard","sourcePath":"components/content/product-card/ProductCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/section-heading/SectionHeading.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/breadcrumb/Breadcrumb.jsx"},{"name":"CountBadge","sourcePath":"components/content/count-badge/CountBadge.jsx"},{"name":"SubcategoryCard","sourcePath":"components/navigation/subcategory-card/SubcategoryCard.jsx"},{"name":"Price","sourcePath":"components/content/price/Price.jsx"},{"name":"formatPrice","sourcePath":"components/content/price/Price.jsx"},{"name":"ProgressTracker","sourcePath":"components/feedback/progress-tracker/ProgressTracker.jsx"},{"name":"Accordion","sourcePath":"components/content/accordion/Accordion.jsx"},{"name":"SearchFilterBar","sourcePath":"components/forms/search-filter-bar/SearchFilterBar.jsx"},{"name":"Drawer","sourcePath":"components/feedback/drawer/Drawer.jsx"}],"sourceHashes":{"components/actions/button/Button.jsx":"0b7baff3c823","components/actions/icon-button/IconButton.jsx":"1c95a6766568","components/content/badge/Badge.jsx":"22c288cdf0bb","components/content/card/Card.jsx":"af2d0aba6031","components/content/divider/Divider.jsx":"a6879726fc4f","components/content/icon/Icon.jsx":"a95858b08b5a","components/content/tag/Tag.jsx":"7b00fb5b4cd7","components/feedback/dialog/Dialog.jsx":"4e3db2dc024d","components/feedback/dialog/dialog-motion.js":"cb4b882ce9d9","components/feedback/toast/Toast.jsx":"30ef9bd730cf","components/feedback/toast/toast-motion.js":"16e6bda1131c","components/feedback/tooltip/Tooltip.jsx":"aa3c0f64dece","components/forms/checkbox/Checkbox.jsx":"d52e7117fabb","components/forms/input/Input.jsx":"3a89ab66b1e4","components/forms/quantity-stepper/QuantityStepper.jsx":"6825774578fd","components/forms/radio/Radio.jsx":"b48d3d1e8dc1","components/forms/segmented-control/SegmentedControl.jsx":"e35059cbc7c4","components/forms/select/Select.jsx":"fe947a5e8b28","components/forms/switch/Switch.jsx":"37eef3b925b0","components/navigation/carousel-chevron-button/CarouselChevronButton.jsx":"68b7c2ec31e9","components/navigation/tabs/Tabs.jsx":"898fc0a4d2a7","components/utils/pill.js":"e8e3da66fe81","ui_kits/storefront/CollectionGrid.jsx":"28aad426a30c","ui_kits/storefront/EditorialBand.jsx":"f456c630c3b0","ui_kits/storefront/Footer.jsx":"0e4de6e75b0a","ui_kits/storefront/Header.jsx":"9f4cc05df833","ui_kits/storefront/Hero.jsx":"0a7f7c15e793","ui_kits/storefront/ProductDetail.jsx":"40b66a25405a"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureDialogMotion","sourcePath":"components/feedback/dialog/dialog-motion.js"},{"name":"ensureToastMotion","sourcePath":"components/feedback/toast/toast-motion.js"},{"name":"pillPadding","sourcePath":"components/utils/pill.js"},{"name":"useDialogPresence","sourcePath":"components/feedback/dialog/dialog-motion.js"},{"name":"useToastPresence","sourcePath":"components/feedback/toast/toast-motion.js"}]} */

(() => {

const __ds_ns = (window.DeseretBookDesignSystem_609afa = window.DeseretBookDesignSystem_609afa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: {
    background: 'var(--db-accent)',
    color: 'var(--db-accent-ink)'
  },
  charcoal: {
    background: 'var(--db-charcoal)',
    color: 'var(--db-white)'
  },
  clay: {
    background: 'var(--db-clay)',
    color: 'var(--db-white)'
  },
  sand: {
    background: 'var(--db-sand)',
    color: 'var(--db-charcoal)'
  },
  red: {
    background: 'var(--db-red-600)',
    color: 'var(--db-white)'
  },
  teal: {
    background: 'var(--db-teal-600)',
    color: 'var(--db-white)'
  },
  yellow: {
    background: 'var(--db-yellow-300)',
    color: 'var(--db-charcoal)'
  },
  dove: {
    background: 'var(--db-dove)',
    color: 'var(--db-charcoal)'
  }
};

/** Violator — the small callout badge ("NEW", "BESTSELLER") from the type hierarchy. */
function Badge({
  tone = 'charcoal',
  shape = 'pill',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      fontFamily: 'var(--db-font-sans)',
      fontWeight: 'var(--db-weight-sans-black)',
      fontSize: '0.6875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      lineHeight: 1,
      display: 'inline-block',
      padding: '6px 10px',
      borderRadius: shape === 'pill' ? 'var(--db-radius-pill)' : 'var(--db-radius-sm)',
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const grounds = {
  white: {
    background: 'var(--db-white)'
  },
  pearl: {
    background: 'var(--db-pearl)'
  },
  dove: {
    background: 'var(--db-dove)'
  },
  sand: {
    background: 'var(--db-sand)'
  },
  charcoal: {
    background: 'var(--db-charcoal)',
    color: 'var(--db-white)'
  }
};

/* Each ground has its own outline color, drawn at 60% opacity. */
const rings = {
  white: 'var(--db-granite)',
  pearl: 'var(--db-sand)',
  dove: 'var(--db-granite)',
  sand: 'var(--db-clay)',
  charcoal: 'var(--db-black)'
};

/** A quiet panel: inset hairline, 4px radius, shadow only when it must lift. */
function Card({
  ground = 'white',
  bordered = true,
  elevation = 'none',
  padding = 'md',
  as = 'div',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const pad = {
    none: 0,
    sm: 'var(--db-space-4)',
    md: 'var(--db-space-5)',
    lg: 'var(--db-space-6)'
  }[padding];
  const shadow = {
    none: 'var(--db-shadow-none)',
    sm: 'var(--db-shadow-sm)',
    md: 'var(--db-shadow-md)',
    lg: 'var(--db-shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      borderRadius: 'var(--db-radius-lg)',
      boxShadow: [bordered ? '0 0 0 1px color-mix(in srgb, ' + (rings[ground] || rings.white) + ' 60%, transparent)' : null, elevation !== 'none' ? shadow : null].filter(Boolean).join(', ') || 'none',
      padding: pad,
      transition: 'var(--db-transition)',
      ...grounds[ground],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/divider/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Granite hairline rule — the brand's structural separator. */
function Divider({
  orientation = 'horizontal',
  tone = 'hairline',
  spacing = 'md',
  style,
  ...rest
}) {
  const gap = {
    none: 0,
    sm: 'var(--db-space-3)',
    md: 'var(--db-space-5)',
    lg: 'var(--db-space-7)'
  }[spacing];
  const color = tone === 'strong' ? 'var(--db-charcoal)' : 'var(--db-hairline)';
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 0,
      alignSelf: 'stretch',
      background: color,
      width: vertical ? '1px' : '100%',
      height: vertical ? 'auto' : '1px',
      minHeight: vertical ? '1em' : undefined,
      margin: vertical ? `0 ${gap}` : `${gap} 0`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/divider/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Material Symbols Rounded (Apache 2.0), loaded as a variable font in tokens/fonts.css.
   Any Material Symbols name renders by ligature ("shopping_cart", "favorite"); hyphens are accepted too.
   DB_ICONS maps the system's short names to Material names. Brand logos are not in Material Symbols,
   so the three social marks fall back to vendored SVGs in assets/icons/. */
const DB_ICONS = {
  "search": "search",
  "user": "person",
  "heart": "favorite",
  "shopping-bag": "shopping_bag",
  "cart": "shopping_cart",
  "chevron-down": "keyboard_arrow_down",
  "chevron-right": "keyboard_arrow_right",
  "chevron-left": "keyboard_arrow_left",
  "check": "check",
  "x": "close",
  "close-circle": "cancel",
  "cancel-circle": "cancel",
  "info": "info",
  "arrow-right": "arrow_forward",
  "arrow-left": "arrow_back",
  "truck": "local_shipping",
  "store": "storefront",
  "rotate-ccw": "undo",
  "mail": "mail",
  "minus": "remove",
  "plus": "add",
  "menu": "menu",
  "star": "star",
  "alert-circle": "error",
  "book": "book_2",
  "bookmark": "bookmark",
  "home": "home",
  "gift": "redeem",
  "bell": "notifications",
  "calendar": "calendar_today",
  "location": "location_on"
};
const BRAND_SVGS = {
  instagram: 'instagram',
  facebook: 'facebook-01',
  youtube: 'youtube'
};
const ICON_BASE = (() => {
  try {
    if (typeof window !== 'undefined' && window.DB_ICON_BASE) return window.DB_ICON_BASE;
    const s = typeof document !== 'undefined' && document.currentScript && document.currentScript.src;
    if (s) return new URL('../assets/icons/', s).href;
  } catch (e) {}
  return 'assets/icons/';
})();

/** Material Symbols Rounded glyph. Inherits currentColor. `filled` switches the FILL axis. */
function Icon({
  name,
  size = 20,
  filled = false,
  weight = 300,
  className,
  style,
  ...rest
}) {
  const base = {
    width: size,
    height: size,
    flex: '0 0 auto',
    display: 'inline-block',
    verticalAlign: 'middle'
  };
  if (BRAND_SVGS[name]) {
    const url = 'url("' + ICON_BASE + BRAND_SVGS[name] + '.svg")';
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true"
    }, rest, {
      style: {
        ...base,
        backgroundColor: 'currentColor',
        WebkitMask: url + ' center / contain no-repeat',
        mask: url + ' center / contain no-repeat',
        ...style
      }
    }));
  }
  const glyph = (DB_ICONS[name] || name).replace(/-/g, '_');
  const opsz = Math.min(48, Math.max(20, size));
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    className: 'db-ic' + (className ? ' ' + className : ''),
    style: {
      ...base,
      fontFamily: "'Material Symbols Rounded'",
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: 'normal',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      direction: 'ltr',
      userSelect: 'none',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFeatureSettings: "'liga'",
      fontVariationSettings: "'FILL' " + (filled ? 1 : 0) + ", 'wght' " + weight + ", 'GRAD' 0, 'opsz' " + opsz,
      ...style
    }
  }), glyph);
}
Object.assign(__ds_scope, { DB_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/icon-button/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
/* The heart's drawn shape sits high in its box; inside the round button it drops 6% of the icon size to sit in the circle's visual center. */
const HEART_DY = 0.06;

/** A square-tapped, round icon-only control for toolbars and headers.
 *  Each state owns one thing, so they never fight: hover (mouse only) washes the background, press scales it, keyboard focus draws the ring
 *  (CSS in bundle.css, .db-ib-*). Add className="db-ib-bare" where the glyph is the whole control (a filled circle on a colored ground) to skip the wash. */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  iconSize,
  filled = false,
  disabled = false,
  className,
  style,
  ...rest
}) {
  const box = sizes[size];
  const glyph = iconSize || (size === 'sm' ? 18 : size === 'lg' ? 24 : 20);
  const nudge = icon === 'heart' || icon === 'favorite' ? {
    transform: 'translateY(' + (glyph * HEART_DY).toFixed(2) + 'px)'
  } : undefined;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    "data-db-press": true
  }, rest, {
    className: 'db-ib db-ib-' + variant + (className ? ' ' + className : ''),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      transition: 'var(--db-transition)',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    filled: filled,
    size: glyph,
    style: nudge
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/icon-button/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/dialog/dialog-motion.js
try { (() => {
const CSS = `
.db-dialog{opacity:0;transform:translate3d(0,12px,0) scale(.96);transition:opacity 224ms var(--db-ease-in),transform 224ms var(--db-ease-in)}
.db-dialog.is-on{opacity:1;transform:translate3d(0,0,0) scale(1);transition:opacity 280ms var(--db-ease-standard),transform 280ms var(--db-ease-standard)}
.db-dialog-scrim{opacity:0;transition:opacity 224ms var(--db-ease-in)}
.db-dialog-scrim.is-on{opacity:1;transition:opacity 280ms var(--db-ease-standard)}
@media (prefers-reduced-motion:reduce){.db-dialog,.db-dialog.is-on{transform:none;transition:opacity 120ms var(--db-ease-standard)}}
`;

/** Dialog-only motion, injected once per document. */
function ensureDialogMotion() {
  if (typeof document === 'undefined' || document.getElementById('db-dialog-motion')) return;
  const s = document.createElement('style');
  s.id = 'db-dialog-motion';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Keeps an element mounted through its exit transition. Returns [mounted, visible]. */
function useDialogPresence(React, open, exitMs = 224) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(t);
  }, [open]);
  return [mounted, visible];
}

/** Dialog tones set the sm icon only: filled circle glyphs in brand value 400 (neutral: Charcoal). The panel is always white. */
const DIALOG_TONES = {
  neutral: {
    icon: null,
    color: 'var(--db-charcoal)'
  },
  success: {
    icon: 'check_circle',
    color: 'var(--db-teal-400)'
  },
  error: {
    icon: 'cancel',
    color: 'var(--db-red-400)'
  },
  warning: {
    icon: 'error',
    color: 'var(--db-yellow-400)'
  },
  info: {
    icon: 'info',
    color: 'var(--db-blue-400)'
  }
};
Object.assign(__ds_scope, { ensureDialogMotion, useDialogPresence, DIALOG_TONES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/dialog/dialog-motion.js", error: String((e && e.message) || e) }); }

// components/feedback/dialog/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WIDTHS = {
  sm: 400,
  md: 560,
  lg: 760
};

/**
 * Modal dialog. Independent of Toast: its own tones, motion and file.
 * - Always a white panel, Granite hairline, 16px radius (--db-radius-xl), overlay elevation, 20px padding.
 * - sm 400: compact confirmation. Optional 56px icon (weight 400) centered above a centered title,
 *   centered text, actions side by side sharing the full width, no close button (the user answers with an action). Used sparingly, so the whole panel
 *   scrolls as one if it ever overflows; the title is not pinned.
 * - md 560 (default) / lg 760: left-aligned title with no icon. Close button pinned 8px from the
 *   top and right edges. Header and footer stay put, separated from the scrolling body by Granite
 *   hairlines so content never cuts off against a bare edge.
 * - `tone` sets the sm icon: a filled circle glyph in brand value 400 (neutral: Charcoal). Ignored by md and lg.
 *   A custom `icon` should also be a filled circle glyph where one exists.
 * Motion: fade, 12px rise, scale .96 to 1 (280ms); exits in reverse (200ms). Reduced motion: fade only.
 */
function Dialog({
  open = false,
  tone = 'neutral',
  icon,
  title,
  description,
  onClose,
  footer,
  size = 'md',
  width,
  children,
  style,
  className = '',
  ...rest
}) {
  __ds_scope.ensureDialogMotion();
  const [mounted, visible] = __ds_scope.useDialogPresence(React, open);
  // Escape closes the dialog, like a click on the scrim.
  React.useEffect(() => {
    if (!open || !onClose) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!mounted) return null;
  const compact = size === 'sm';
  const t = __ds_scope.DIALOG_TONES[tone] || __ds_scope.DIALOG_TONES.neutral;
  const glyph = compact ? icon || t.icon : null;
  const showClose = !compact && onClose;
  const on = visible ? ' is-on' : '';
  const PAD = 20;
  // sm: footer buttons sit side by side and share the full width equally.
  const footerItems = compact && footer ? React.Children.toArray(footer && footer.type === React.Fragment ? footer.props.children : footer).map(el => React.isValidElement(el) ? React.cloneElement(el, {
    fullWidth: true
  }) : el) : null;
  const titleEl = title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      minWidth: 0,
      fontFamily: 'var(--db-font-serif)',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 'var(--db-lh-tight)',
      color: 'var(--db-display)',
      textWrap: 'pretty',
      textAlign: compact ? 'center' : 'left'
    }
  }, title) : null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    className: `db-dialog-scrim${on}`,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--db-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--db-space-5)',
      boxSizing: 'border-box',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, rest, {
    className: `db-dialog${on} ${className}`,
    style: {
      position: 'relative',
      background: 'var(--db-white)',
      color: 'var(--db-ink)',
      borderRadius: 'var(--db-radius-xl)',
      boxShadow: '0 0 0 1px var(--db-granite), var(--db-shadow-overlay)',
      width: '100%',
      maxWidth: width || WIDTHS[size] || WIDTHS.md,
      maxHeight: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      overflow: compact ? 'auto' : 'hidden',
      ...style
    }
  }), compact ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      padding: PAD,
      paddingBottom: description || children || footer ? 'var(--db-space-3)' : PAD
    }
  }, glyph ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'inline-grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 56,
    weight: 400,
    filled: true
  })) : null, titleEl) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      padding: PAD,
      paddingRight: showClose ? 56 : PAD,
      minHeight: 56,
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 1px 0 var(--db-granite)'
    }
  }, titleEl), showClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "cancel-circle",
    filled: true,
    label: "Close",
    size: "lg",
    iconSize: 28,
    className: "db-ib-bare",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 2,
      color: 'rgba(58, 54, 51, 0.6)'
    }
  }) : null, description || children ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: compact ? '0 0 auto' : '1 1 auto',
      minHeight: 0,
      overflowY: compact ? 'visible' : 'auto',
      padding: compact ? `0 ${PAD}px` : PAD,
      paddingBottom: compact && footer ? 0 : PAD,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-4)',
      textAlign: compact ? 'center' : 'left'
    }
  }, description ? /*#__PURE__*/React.createElement("p", {
    className: "db-body",
    style: {
      margin: 0,
      color: 'var(--db-ink-muted)',
      textWrap: 'pretty',
      textAlign: compact ? 'center' : 'left'
    }
  }, description) : null, children) : null, footer && compact ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(0, 1fr)',
      gap: 'var(--db-space-3)',
      padding: PAD
    }
  }, footerItems) : null, footer && !compact ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      gap: 'var(--db-space-3)',
      justifyContent: compact ? 'center' : 'flex-end',
      flexWrap: 'wrap',
      padding: PAD,
      position: 'relative',
      zIndex: 1,
      boxShadow: compact ? 'none' : '0 -1px 0 var(--db-granite)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/dialog/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/toast/toast-motion.js
try { (() => {
const CSS = `
.db-toast{opacity:0;transform:translate3d(0,12px,0) scale(.96);transition:opacity 224ms var(--db-ease-in),transform 224ms var(--db-ease-in)}
.db-toast.is-on{opacity:1;transform:translate3d(0,0,0) scale(1);transition:opacity 280ms var(--db-ease-standard),transform 280ms var(--db-ease-standard)}
.db-toast.is-on.is-bump{animation:db-toast-bump 300ms var(--db-ease-out)}
.db-toast-ic{animation:db-toast-ic 280ms var(--db-ease-standard) both}
@keyframes db-toast-bump{0%,100%{opacity:1;transform:translate3d(0,0,0) scale(1)}40%{opacity:1;transform:translate3d(0,-2px,0) scale(1.06)}}
@keyframes db-toast-ic{0%{opacity:0;transform:scale(.6)}100%{opacity:1;transform:scale(1)}}
@media (prefers-reduced-motion:reduce){.db-toast,.db-toast.is-on{transform:none;transition:opacity 120ms var(--db-ease-standard)}.db-toast.is-on.is-bump,.db-toast-ic{animation:none}}
`;

/** Toast-only motion, injected once per document. */
function ensureToastMotion() {
  if (typeof document === 'undefined' || document.getElementById('db-toast-motion')) return;
  const s = document.createElement('style');
  s.id = 'db-toast-motion';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Keeps an element mounted through its exit transition. Returns [mounted, visible]. */
function useToastPresence(React, open, exitMs = 224) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(t);
  }, [open]);
  return [mounted, visible];
}

/** Toast tones. The 1px border is always the shade immediately lighter than the fill; if the fill has no
 *  lighter shade, it uses the shade immediately darker. Status: fill 400, border 300. Neutral: Charcoal fill,
 *  #56504b border (--db-ink-muted). Undo: Black fill, Charcoal border. */
const st = (h, icon) => ({
  icon,
  fill: `var(--db-${h}-400)`,
  edge: `var(--db-${h}-300)`,
  on: 'var(--db-white)'
});
const TOAST_TONES = {
  neutral: {
    icon: 'info',
    fill: 'var(--db-black)',
    edge: 'var(--db-charcoal)',
    on: 'var(--db-white)',
    line: 'var(--db-granite)',
    lineIcon: 'var(--db-granite-deep)'
  },
  success: st('teal', 'check'),
  error: st('red', 'alert-circle'),
  // Warning is the exception: Yellow 200 fill with dark text (charcoal on it is 8.6:1), border one shade lighter (100).
  warning: {
    icon: 'warning',
    fill: 'var(--db-yellow-200)',
    edge: 'var(--db-yellow-100)',
    on: 'var(--db-charcoal)'
  },
  info: st('blue', 'info'),
  // Reports an action that was undone (e.g. removed from favorites). Nothing was destroyed.
  undo: {
    icon: 'undo',
    fill: 'var(--db-black)',
    edge: 'var(--db-charcoal)',
    on: 'var(--db-white)'
  }
};
Object.assign(__ds_scope, { ensureToastMotion, useToastPresence, TOAST_TONES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/toast/toast-motion.js", error: String((e && e.message) || e) }); }

// components/feedback/tooltip/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BG = 'rgba(58, 54, 51, 0.8)';
const BLUR = 'blur(12px) saturate(140%)';
const GAP = 6,
  ARROW = 7,
  PAD_Y = 6;
// Grows out of the side the trigger is on (and shrinks back into it).
const ORIGIN = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'right center',
  right: 'left center'
};

/**
 * Tooltip: translucent charcoal (80%) with a background blur, caption type, on hover or focus.
 * One line of text renders as a pill; text that wraps (max 240px) gets an 8px radius.
 * A small pointer with a rounded tip, on the edge facing the trigger, shows where it comes from.
 */
function Tooltip({
  label,
  placement = 'top',
  open,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [single, setSingle] = React.useState(true);
  const ref = React.useRef(null);
  const shown = open ?? hover;
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.4;
    setSingle(el.clientHeight - PAD_Y * 2 < lh * 1.5);
  }, [label, shown]);
  const off = GAP + ARROW;
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: `translate(-50%, -${off}px)`
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: `translate(-50%, ${off}px)`
    },
    left: {
      right: '100%',
      top: '50%',
      transform: `translate(-${off}px, -50%)`
    },
    right: {
      left: '100%',
      top: '50%',
      transform: `translate(${off}px, -50%)`
    }
  }[placement];
  // Rounded pointer: drawn pointing down, rotated per placement. Soft tip and flared base corners.
  const PW = 22,
    PH = 7,
    SHIFT = (PW - PH) / 2;
  const arrow = {
    top: {
      top: '100%',
      left: '50%',
      marginLeft: -PW / 2
    },
    bottom: {
      bottom: '100%',
      left: '50%',
      marginLeft: -PW / 2,
      transform: 'rotate(180deg)'
    },
    left: {
      left: '100%',
      top: '50%',
      transform: `translate(-${SHIFT}px, -${PH / 2}px) rotate(-90deg)`
    },
    right: {
      right: '100%',
      top: '50%',
      transform: `translate(${SHIFT}px, -${PH / 2}px) rotate(90deg)`
    }
  }[placement];
  const pointer = {
    width: PW,
    height: PH,
    clipPath: "path('M0 0 C3.4 0 5 .6 6.7 1.9 L8.8 4.4 Q11 6.6 13.2 4.4 L15.3 1.9 C17 .6 18.6 0 22 0 Z')"
  };
  const glass = {
    background: BG,
    backdropFilter: BLUR,
    WebkitBackdropFilter: BLUR
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false)
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    ref: ref,
    style: {
      position: 'absolute',
      ...pos,
      width: 'max-content',
      maxWidth: 240,
      boxSizing: 'border-box',
      ...glass,
      color: 'var(--db-white)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-caption)',
      lineHeight: 1.4,
      padding: `${PAD_Y}px ${single ? 12 : 10}px`,
      borderRadius: single ? 'var(--db-radius-pill)' : 'var(--db-radius-lg)',
      textAlign: single ? 'center' : 'left',
      textWrap: 'pretty',
      opacity: shown ? 1 : 0,
      scale: shown ? '1' : 'var(--db-tip-scale, .95)',
      transformOrigin: ORIGIN[placement],
      pointerEvents: 'none',
      transition: shown ? 'opacity var(--db-duration-tip-in) var(--db-ease-out), scale var(--db-duration-tip-in) var(--db-ease-out)' : 'opacity var(--db-duration-tip-out) var(--db-ease-in), scale var(--db-duration-tip-out) var(--db-ease-in)',
      zIndex: 20
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      ...pointer,
      ...arrow,
      ...glass
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/checkbox/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox, 6px radius (smoothed like the other radii where the browser supports it), charcoal fill when checked.
 *  Label lines are 24px; the 20px box sits 2px down so it centers on the first line, however many lines wrap. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `db-check-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--db-space-3)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-body)',
      lineHeight: '24px',
      color: 'var(--db-ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      marginTop: 2,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'calc(6px * var(--db-corner-scale, 1))',
      boxShadow: checked ? 'var(--db-ring-strong)' : 'var(--db-ring-hairline)',
      background: checked ? 'var(--db-charcoal)' : 'var(--db-white)',
      color: 'var(--db-white)',
      transition: 'var(--db-transition)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18,
    weight: 400,
    style: {
      opacity: checked ? 1 : 0,
      transform: checked ? 'scale(1)' : 'scale(0.25)',
      filter: checked ? 'blur(0)' : 'blur(4px)',
      willChange: 'transform, opacity, filter',
      transition: 'opacity var(--db-duration-base) var(--db-ease-out), transform var(--db-duration-base) var(--db-ease-out), filter var(--db-duration-base) var(--db-ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      textWrap: 'pretty'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/checkbox/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = 22,
  GAP = 8,
  LINE = 24;
/* Same height as a medium Button (40px). Pair fields only with medium buttons. */
const H = 40;

/**
 * Text field with the brand's uppercase label and hairline box.
 * Single-line fields are always pills; padding follows the pill rule
 * (icon side (h - icon) / 2, text side h / 2, height explicit, vertical padding 0).
 * Multiline (textarea) uses a fixed h / 2 corner radius and the same side padding,
 * so it matches the pill at rest but keeps rounded corners, not a pill, when resized.
 */
function Input({
  label,
  hint,
  error,
  icon,
  id,
  type = 'text',
  multiline = false,
  rows = 4,
  disabled = false,
  style,
  ...rest
}) {
  const fieldId = id || `db-input-${Math.random().toString(36).slice(2, 8)}`;
  const Field = multiline ? 'textarea' : 'input';
  const h = H;
  const iconInset = (h - ICON) / 2;
  const start = icon ? iconInset + ICON + GAP : h / 2;
  const vPad = (h - LINE) / 2;
  const boxStyle = {
    fontFamily: 'var(--db-font-sans)',
    fontSize: 'var(--db-text-body)',
    lineHeight: `${LINE}px`,
    color: 'var(--db-ink)',
    background: disabled ? 'var(--db-dove)' : 'var(--db-white)',
    border: 0,
    boxShadow: `0 0 0 1px ${error ? 'var(--db-status-error)' : 'var(--db-hairline)'}`,
    borderRadius: multiline ? h / 2 : 'var(--db-radius-pill)',
    height: multiline ? undefined : h,
    minHeight: multiline ? h : undefined,
    padding: multiline ? `${vPad}px ${h / 2}px ${vPad}px ${start}px` : `0 ${h / 2}px 0 ${start}px`,
    boxSizing: 'border-box',
    width: '100%',
    transition: 'var(--db-transition)',
    resize: multiline ? 'vertical' : undefined,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: "db-label",
    style: {
      color: 'var(--db-charcoal)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: iconInset,
      top: multiline ? iconInset : undefined,
      color: 'var(--db-ink-muted)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ICON
  })) : null, /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest, {
    "data-db-field": "",
    style: boxStyle
  }))), error ? /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      color: 'var(--db-status-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/input/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/quantity-stepper/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Heights match Button sizes so a stepper always lines up with the button it sits beside. */
const sizes = {
  sm: {
    h: 32,
    icon: 16
  },
  md: {
    h: 40,
    icon: 20
  },
  lg: {
    h: 48,
    icon: 24,
    weight: 450
  }
};

/**
 * Pill-shaped − / value / + control with a hairline outline drawn outside the box.
 * Set `size` to the size of the button it is paired with. The − and + buttons are
 * square, height × height, so the icons sit at the pill's end-cap centers.
 */
function QuantityStepper({
  value,
  defaultValue = 1,
  onChange,
  min = 1,
  max = 99,
  step = 1,
  size = 'md',
  disabled = false,
  label = 'Quantity',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const v = value ?? inner;
  const s = sizes[size] || sizes.md;
  const set = n => {
    const c = Math.min(max, Math.max(min, n));
    if (value === undefined) setInner(c);
    onChange && onChange(c);
  };
  const btn = dir => {
    const off = disabled || (dir < 0 ? v <= min : v >= max);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": dir < 0 ? 'Decrease ' + label.toLowerCase() : 'Increase ' + label.toLowerCase(),
      disabled: off,
      "data-db-press": true,
      onClick: () => set(v + dir * step),
      style: {
        width: s.h,
        height: s.h,
        flex: '0 0 auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        border: 0,
        borderRadius: '50%',
        background: 'transparent',
        color: 'var(--db-charcoal)',
        cursor: off ? 'default' : 'pointer',
        opacity: off ? 0.35 : 1,
        transition: 'var(--db-transition)'
      },
      onMouseEnter: e => {
        if (!off) e.currentTarget.style.background = 'var(--db-pearl)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: dir < 0 ? 'minus' : 'plus',
      size: s.icon,
      weight: 400,
      style: {
        display: 'block'
      }
    }));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": label
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: s.h,
      boxSizing: 'border-box',
      borderRadius: 'var(--db-radius-pill)',
      background: 'var(--db-white)',
      boxShadow: 'var(--db-ring-hairline)',
      transition: 'var(--db-transition)',
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    }
  }), btn(-1), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    "aria-label": label,
    value: v,
    disabled: disabled,
    onChange: e => {
      const n = parseInt(e.target.value.replace(/\D/g, ''), 10);
      if (!isNaN(n)) set(n);
    },
    style: {
      width: `${Math.max(2, String(max).length)}ch`,
      minWidth: 24,
      padding: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      textAlign: 'center',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-body)',
      fontWeight: s.weight || 400,
      color: 'var(--db-ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }), btn(1));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/quantity-stepper/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/radio/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio group — one choice from a short, visible list. */
function Radio({
  name,
  options = [],
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup"
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-3)',
      ...style
    }
  }), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    const selected = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--db-space-3)',
        fontFamily: 'var(--db-font-sans)',
        fontSize: 'var(--db-text-body)',
        color: 'var(--db-ink)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: selected,
      disabled: disabled,
      onChange: () => onChange && onChange(val),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: '0 0 auto',
        borderRadius: '50%',
        boxShadow: selected ? 'var(--db-ring-strong)' : 'var(--db-ring-hairline)',
        background: 'var(--db-white)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--db-transition)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--db-charcoal)',
        opacity: selected ? 1 : 0,
        transform: selected ? 'scale(1)' : 'scale(0.25)',
        filter: selected ? 'blur(0)' : 'blur(4px)',
        willChange: 'transform, opacity, filter',
        transition: 'opacity var(--db-duration-base) var(--db-ease-out), transform var(--db-duration-base) var(--db-ease-out), filter var(--db-duration-base) var(--db-ease-out)'
      }
    })), labelText);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/radio/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/select/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = 22,
  GAP = 8;
/* Same height as a medium Button (40px). Pair fields only with medium buttons. */
const H = 40;

/** Native select in brand dress, pill-shaped. Padding follows the pill rule: text side h / 2, chevron side (h - icon) / 2. */
function Select({
  label,
  hint,
  options = [],
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `db-select-${Math.random().toString(36).slice(2, 8)}`;
  const h = H;
  const iconInset = (h - ICON) / 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: "db-label",
    style: {
      color: 'var(--db-charcoal)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled
  }, rest, {
    "data-db-field": "",
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-body)',
      color: 'var(--db-ink)',
      background: disabled ? 'var(--db-dove)' : 'var(--db-white)',
      border: 0,
      boxShadow: 'var(--db-ring-hairline)',
      borderRadius: 'var(--db-radius-pill)',
      height: h,
      boxSizing: 'border-box',
      padding: `0 ${iconInset + ICON + GAP}px 0 ${h / 2}px`,
      width: '100%',
      transition: 'var(--db-transition)'
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: iconInset,
      color: 'var(--db-charcoal)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: ICON
  }))), hint ? /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/select/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/switch/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — an immediate on/off setting. Uses the lead color when on. The track gives a little on press; the knob eases
 *  in-out and stretches 12% while it travels, anchored on its trailing edge (CSS in bundle.css: .db-sw-go-on / -off). */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const prev = React.useRef(checked);
  const go = React.useRef('');
  if (prev.current !== checked) {
    go.current = checked ? ' db-sw-go-on' : ' db-sw-go-off';
    prev.current = checked;
  }
  return /*#__PURE__*/React.createElement("label", {
    className: 'db-sw' + go.current,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-body)',
      color: 'var(--db-ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "db-sw-track",
    style: {
      width: 44,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 'var(--db-radius-pill)',
      background: checked ? 'var(--db-accent)' : 'var(--db-granite)',
      display: 'inline-flex',
      alignItems: 'center',
      padding: 2,
      transition: 'var(--db-transition)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-sw-knob",
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--db-white)',
      boxShadow: 'var(--db-shadow-sm)',
      transform: checked ? 'translateX(20px)' : 'translateX(0)',
      transition: 'background-color var(--db-duration-base) var(--db-ease-standard), box-shadow var(--db-duration-base) var(--db-ease-standard), transform var(--db-duration-base) var(--db-ease-in-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/switch/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/carousel-chevron-button/CarouselChevronButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Verbatim from the Carousel Chevron Button spec (uploads/carousel-chevron-button.md). */
const CSS = `.carousel-arrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;padding:0;display:grid;place-items:center;border:0;border-radius:999px;background:rgba(239,239,239,.45);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:var(--db-charcoal);cursor:pointer;z-index:2;outline:2px solid transparent;outline-offset:2px;transition:background-color var(--db-duration-base) var(--db-ease-standard),color var(--db-duration-base) var(--db-ease-standard),opacity var(--db-duration-base) var(--db-ease-standard),outline-color var(--db-duration-base) var(--db-ease-standard),transform var(--db-duration-press) var(--db-ease-out)}
.carousel-arrow.prev{left:12px}.carousel-arrow.next{right:12px}
.carousel-arrow>*{font-size:26px;line-height:1;font-variation-settings:"FILL" 0,"wght" 400,"opsz" 24}
.carousel-arrow.prev>*{transform:translateX(-1px)}.carousel-arrow.next>*{transform:translateX(1px)}
.carousel-arrow:hover{background:rgba(239,239,239,.7)}
.carousel-arrow:active{transform:translateY(-50%) scale(.97)}
.carousel-arrow:focus-visible{outline-color:var(--db-charcoal)}
.carousel-arrow:disabled{opacity:0;pointer-events:none}
@media (hover:none){.carousel-arrow:hover{background:rgba(239,239,239,.45)}}
@media (pointer:coarse){.carousel-arrow{width:44px;height:44px}}
@media (max-width:639px){.carousel-arrow{display:none}}
@media (prefers-reduced-motion:reduce){.carousel-arrow:active{transform:translateY(-50%)}}`;
function ensureCss() {
  if (typeof document === 'undefined' || document.getElementById('db-carousel-chevron-button')) return;
  const s = document.createElement('style');
  s.id = 'db-carousel-chevron-button';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Carousel Chevron Button. An icon-only, circular button for stepping through an image gallery or a
 * carousel. It sits on top of imagery, centered vertically on the left and right edges.
 * Icon: Material Symbols Rounded `chevron_left` (previous) / `chevron_right` (next), outline.
 */
function CarouselChevronButton({
  direction = 'next',
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  ensureCss();
  const next = direction === 'next';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled
  }, rest, {
    className: `carousel-arrow ${next ? 'next' : 'prev'} ${className}`.trim()
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: "'Material Symbols Rounded'",
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      direction: 'ltr',
      fontFeatureSettings: "'liga'"
    }
  }, next ? 'chevron_right' : 'chevron_left'));
}
Object.assign(__ds_scope, { CarouselChevronButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/carousel-chevron-button/CarouselChevronButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/tabs/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tabs — ALL CAPS DM Sans labels over a granite hairline, charcoal underline for the active tab.
 *  Each tab is always as wide as its bold (active) label: a hidden bold copy sits in the same grid cell in every state, labels
 *  never wrap and tabs never shrink, so neither the row, the underline nor a tab's box moves between states. The visible label
 *  eases its weight inside that fixed box, centered, so it grows evenly from its middle.
 *  The underline is one shared element that slides (and resizes) from the old tab to the new one, ease in-out. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [box, setBox] = React.useState(null);
  const [live, setLive] = React.useState(false);
  const measure = React.useCallback(() => {
    const root = ref.current;
    const el = root && root.querySelector('[aria-selected="true"]');
    if (!el) {
      setBox(null);
      return;
    }
    const a = root.getBoundingClientRect(),
      b = el.getBoundingClientRect();
    const n = {
      x: b.left - a.left - root.clientLeft,
      w: b.width
    };
    setBox(p => p && Math.abs(p.x - n.x) < 0.01 && Math.abs(p.w - n.w) < 0.01 ? p : n);
  }, []);
  React.useLayoutEffect(measure, [value, tabs.length, measure]);
  React.useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro) {
      ro.observe(root);
      Array.prototype.forEach.call(root.children, c => ro.observe(c));
    }
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      if (ro) ro.disconnect();
    };
  }, [tabs.length, measure]);
  React.useEffect(() => {
    if (!box || live) return undefined;
    const r = requestAnimationFrame(() => setLive(true));
    return () => cancelAnimationFrame(r);
  }, [box, live]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    ref: ref
  }, rest, {
    style: {
      boxShadow: '0 1px 0 var(--db-hairline)',
      position: 'relative',
      isolation: 'isolate',
      display: 'flex',
      gap: 'var(--db-space-6)',
      ...style
    }
  }), tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const labelText = typeof t === 'string' ? t : t.label;
    const active = value === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      "aria-selected": active,
      role: "tab",
      style: {
        fontFamily: 'var(--db-font-sans)',
        fontSize: 'var(--db-text-label)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--db-tracking-label)',
        color: active ? 'var(--db-charcoal)' : 'var(--db-ink-muted)',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: '0 0 var(--db-space-3)',
        position: 'relative',
        zIndex: 1,
        transition: 'var(--db-transition)',
        display: 'inline-grid',
        justifyItems: 'center',
        flex: '0 0 auto',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        gridArea: '1 / 1',
        fontWeight: 'var(--db-weight-sans-black)',
        visibility: 'hidden',
        height: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, labelText), /*#__PURE__*/React.createElement("span", {
      style: {
        gridArea: '1 / 1',
        fontWeight: active ? 'var(--db-weight-sans-black)' : 'var(--db-weight-sans-regular)',
        transition: 'font-weight var(--db-duration-base) var(--db-ease-standard)'
      }
    }, labelText));
  }), box ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '100%',
      height: 2,
      width: box.w,
      zIndex: 1,
      pointerEvents: 'none',
      background: 'var(--db-charcoal)',
      transform: 'translateX(' + box.x + 'px)',
      transition: live ? 'transform var(--db-duration-slow) var(--db-ease-in-out), width var(--db-duration-slow) var(--db-ease-in-out)' : 'none'
    }
  }) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/content/star-rating/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 18,
  md: 20,
  lg: 24
};
const PICK_TARGET = 44;
const PICK_GLYPH = 32;

/* Rounds to the nearest half: 4.3 → 4.5, 4.2 → 4. */
const half = v => Math.max(0, Math.min(5, Math.round((Number(v) || 0) * 2) / 2));
function Star({
  fill,
  size
}) {
  // Always the filled glyph. Granite underneath; the rated part (full or the left half) in Yellow 400 on top.
  // The box trims the glyph's built-in side bearing so stars sit close together.
  const box = Math.round(size * 0.84);
  const glyph = color => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size,
    filled: true,
    style: {
      position: 'absolute',
      top: 0,
      left: (box - size) / 2,
      display: 'block',
      color
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      width: box,
      height: size,
      flex: 'none'
    }
  }, glyph('var(--db-granite)'), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: (fill > 0 ? fill : 1) * 100 + '%',
      overflow: 'hidden',
      opacity: fill > 0 ? 1 : 0,
      transition: 'opacity var(--db-duration-base) var(--db-ease-standard)'
    }
  }, glyph('var(--db-yellow-400)')));
}

/** Star rating. Display by default; pass onChange for the picker (a radio group). */
function StarRating({
  value = 0,
  size = 'md',
  count,
  onChange,
  error,
  label = 'Rating',
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(0);
  const refs = React.useRef([]);
  const errId = React.useId ? React.useId() : 'db-sr-err';
  if (!onChange) {
    const v = half(value);
    const spoken = v ? v + ' out of 5 stars' : 'No ratings yet';
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--db-space-2)',
        ...style
      }
    }), /*#__PURE__*/React.createElement("span", {
      role: "img",
      "aria-label": spoken,
      style: {
        display: 'inline-flex',
        gap: 0
      }
    }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Star, {
      key: i,
      size: px,
      fill: v >= i ? 1 : v >= i - 0.5 ? 0.5 : 0
    }))), count != null ? /*#__PURE__*/React.createElement("span", {
      className: "db-caption",
      style: {
        color: 'var(--db-ink-muted)',
        lineHeight: 1
      }
    }, "(", count, ")") : null);
  }
  const current = Math.round(Number(value) || 0);
  const shown = hover || current;
  const focusTo = n => {
    const b = refs.current[n - 1];
    if (b) b.focus();
    onChange(n);
  };
  const onKey = e => {
    const k = e.key;
    const from = current || 1;
    if (k === 'ArrowRight' || k === 'ArrowUp') {
      e.preventDefault();
      focusTo(Math.min(5, from + (current ? 1 : 0)));
    } else if (k === 'ArrowLeft' || k === 'ArrowDown') {
      e.preventDefault();
      focusTo(Math.max(1, from - 1));
    } else if (k === 'Home') {
      e.preventDefault();
      focusTo(1);
    } else if (k === 'End') {
      e.preventDefault();
      focusTo(5);
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--db-space-1)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "radiogroup",
    "aria-label": label,
    "aria-invalid": !!error || undefined,
    "aria-describedby": error ? errId : undefined,
    onMouseLeave: () => setHover(0),
    onKeyDown: onKey,
    style: {
      display: 'inline-flex',
      color: 'var(--db-charcoal)'
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    ref: el => refs.current[i - 1] = el,
    type: "button",
    role: "radio",
    "aria-checked": current === i,
    "aria-label": i + (i === 1 ? ' star' : ' stars'),
    tabIndex: (current || 1) === i ? 0 : -1,
    onClick: () => onChange(i),
    onMouseEnter: () => setHover(i),
    className: "db-star-pick",
    style: {
      width: PICK_TARGET,
      height: PICK_TARGET,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      padding: 0,
      borderRadius: '50%',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      transition: 'var(--db-transition)'
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: PICK_GLYPH,
    fill: shown >= i ? 1 : 0
  })))), error ? /*#__PURE__*/React.createElement("span", {
    id: errId,
    className: "db-caption",
    style: {
      color: 'var(--db-status-error)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/star-rating/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/navigation/pagination/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Page list with ellipses: every page when there are 7 or fewer,
   otherwise first, last, the current page and one on each side. */
function pageList(page, count) {
  if (count <= 7) return Array.from({
    length: count
  }, (_, i) => i + 1);
  const out = [1];
  const lo = Math.max(2, page - 1);
  const hi = Math.min(count - 1, page + 1);
  if (lo > 2) out.push('gap-lo');
  for (let i = lo; i <= hi; i++) out.push(i);
  if (hi < count - 1) out.push('gap-hi');
  out.push(count);
  return out;
}
const btn = {
  minWidth: 40,
  height: 40,
  padding: '0 12px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  borderRadius: 'var(--db-radius-pill)',
  background: 'transparent',
  boxShadow: '0 0 0 1px transparent',
  fontFamily: 'var(--db-font-sans)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1,
  color: 'var(--db-ink)',
  cursor: 'pointer',
  transition: 'color var(--db-duration-fast) var(--db-ease-standard), outline-color var(--db-duration-fast) var(--db-ease-standard), background-color var(--db-duration-fast) var(--db-ease-standard), box-shadow var(--db-duration-fast) var(--db-ease-standard), transform var(--db-duration-press) var(--db-ease-out)'
};

/** Page navigation for long lists: numbered pills with chevrons, ellipses for long ranges,
 *  and an optional "Showing x–y of z" line. Hidden when there is only one page. */
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  label = 'Pages',
  total,
  pageSize,
  style,
  ...rest
}) {
  if (!pageCount || pageCount <= 1) return null;
  const p = Math.min(Math.max(1, page), pageCount);
  const go = n => {
    if (n !== p && n >= 1 && n <= pageCount && onChange) onChange(n);
  };
  const showing = total != null && pageSize ? 'Showing ' + ((p - 1) * pageSize + 1) + '–' + Math.min(p * pageSize, total) + ' of ' + total : null;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      ...style
    }
  }), showing ? /*#__PURE__*/React.createElement("p", {
    className: "db-caption",
    style: {
      margin: 0,
      color: 'var(--db-ink-muted)'
    }
  }, showing) : null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": label,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--db-space-1)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-pg",
    "aria-label": "Previous page",
    disabled: p === 1,
    onClick: () => go(p - 1),
    style: {
      ...btn,
      width: 40,
      padding: 0,
      opacity: p === 1 ? 0.4 : 1,
      pointerEvents: p === 1 ? 'none' : undefined
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_left",
    size: 20
  })), pageList(p, pageCount).map(n => typeof n === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: n,
    "aria-hidden": "true",
    style: {
      minWidth: 24,
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--db-ink-muted)'
    }
  }, '…') : n === p ? /*#__PURE__*/React.createElement("span", {
    key: n,
    "aria-current": "page",
    "aria-label": 'Page ' + n,
    style: {
      ...btn,
      cursor: 'default',
      background: 'var(--db-charcoal)',
      color: 'var(--db-white)'
    }
  }, n) : /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    className: "db-pg",
    "aria-label": 'Page ' + n,
    onClick: () => go(n),
    style: btn
  }, n)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-pg",
    "aria-label": "Next page",
    disabled: p === pageCount,
    onClick: () => go(p + 1),
    style: {
      ...btn,
      width: 40,
      padding: 0,
      opacity: p === pageCount ? 0.4 : 1,
      pointerEvents: p === pageCount ? 'none' : undefined
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 20
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/pagination/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/feedback/empty-state/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shown when a list, cart or page has nothing in it. Centered by default; align="start" is the
 *  inline "no matches" version, announced to screen readers. One action at most. */
function EmptyState({
  icon,
  title,
  children,
  action,
  align = 'center',
  headingLevel = 'h2',
  className,
  style,
  ...rest
}) {
  const H = headingLevel;
  if (align === 'start') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "status",
      "aria-live": "polite"
    }, rest, {
      className: className,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--db-space-3)',
        padding: 'var(--db-space-6) 0',
        ...style
      }
    }), title ? /*#__PURE__*/React.createElement(H, {
      style: {
        margin: 0,
        fontFamily: 'var(--db-font-serif)',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: '29px',
        color: 'var(--db-display)'
      }
    }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
      className: "db-body",
      style: {
        margin: 0
      }
    }, children) : null, action || null);
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: 'db-empty' + (className ? ' ' + className : ''),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--db-space-3)',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--db-charcoal)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 40
  })) : null, title ? /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--db-font-serif)',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '29px',
      color: 'var(--db-display)',
      textWrap: 'balance'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "db-body",
    style: {
      margin: 0,
      color: 'var(--db-ink-muted)',
      maxWidth: '26ch',
      textAlign: 'center'
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--db-space-1)'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/empty-state/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/content/price/Price.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "$29.99", or "Free" at 0. */
const formatPrice = n => Number(n) === 0 ? 'Free' : '$' + Number(n).toFixed(2);

/** A price with its states: range, sale (was price, plus Save n% on the product page), member line, muted (out of stock).
 *  sm: compact lists, DM Sans 12px (14px from 1024px). md: product cards, cart and summaries, DM Sans 16px.
 *  lg: product page, Lora 20px (24px from 1024px). */
function Price({
  amount,
  high,
  was,
  member,
  memberLabel = 'Platinum',
  size = 'sm',
  muted = false,
  className,
  style,
  ...rest
}) {
  if (amount == null) return null;
  const ranged = high != null && high !== amount;
  const sale = !ranged && was != null && was > amount;
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: 'db-price db-price-' + size + (className ? ' ' + className : ''),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      columnGap: lg ? 10 : 'var(--db-space-2)',
      rowGap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-price-now",
    style: {
      color: muted ? 'var(--db-ink-muted)' : sale ? 'var(--db-charcoal)' : 'var(--db-ink)'
    }
  }, ranged ? formatPrice(amount) + ' – ' + formatPrice(high) : formatPrice(amount)), sale ? /*#__PURE__*/React.createElement("s", {
    style: {
      color: 'var(--db-ink-muted)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: lg ? 15 : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-sr"
  }, "Originally "), formatPrice(was)) : null, sale && lg ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-eyebrow)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--db-ink)',
      marginLeft: lg ? 2 : 0
    }
  }, "Save ", Math.round((1 - amount / was) * 100), "%") : null), member != null && !ranged ? /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, formatPrice(member), " for ", memberLabel, " members") : null);
}
Object.assign(__ds_scope, { Price, formatPrice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/price/Price.jsx", error: String((e && e.message) || e) }); }

// components/content/product-card/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Padding trim, as in the Improved Ecomm project: find the product inside the image by skipping white
   or near-white (bright, nearly colorless) and transparent (alpha below 24) margins, so the cover shows the product itself and
   the 4px corners sit on it, not on the file's canvas. One small canvas pass per image, cached by src.
   Images the browser won't let us read (cross-origin without CORS) keep the plain fit. */
const TRIM_KEY = 'db-pc-trim-v4';
const trimCache = (() => {
  try {
    return JSON.parse(localStorage.getItem(TRIM_KEY) || '{}');
  } catch (e) {
    return {};
  }
})();
const trimPending = {};
function analyzeTrim(src) {
  if (trimPending[src]) return trimPending[src];
  trimPending[src] = new Promise(done => {
    const im = new Image();
    let settled = false;
    const finish = v => {
      if (!settled) {
        settled = true;
        done(v);
      }
    };
    const timer = setTimeout(() => finish(null), 3000);
    im.crossOrigin = 'anonymous';
    im.onload = () => {
      clearTimeout(timer);
      try {
        const W = im.naturalWidth,
          H = im.naturalHeight,
          k = Math.min(1, 200 / Math.max(W, H));
        const w = Math.max(1, Math.round(W * k)),
          h = Math.max(1, Math.round(H * k));
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        g.drawImage(im, 0, 0, w, h);
        const d = g.getImageData(0, 0, w, h).data;
        // Background: transparent, or bright and nearly colorless (JPEG leaves off-white specks like 226,255,248).
        // A row or column holds product only when at least 2% of its pixels do, so stray specks don't block the trim.
        const rows = new Array(h).fill(0),
          cols = new Array(w).fill(0);
        let edge = 0,
          edgePad = 0;
        for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4,
            r = d[i],
            gg = d[i + 1],
            bb = d[i + 2];
          const lo = Math.min(r, gg, bb),
            hi = Math.max(r, gg, bb);
          const pad = d[i + 3] < 24 || lo >= 215 && (r + gg + bb) / 3 >= 232 && hi - lo <= 40;
          if (!pad) {
            rows[y]++;
            cols[x]++;
          }
          if (x === 0 || y === 0 || x === w - 1 || y === h - 1) {
            edge++;
            if (pad) edgePad++;
          }
        }
        // White background: most of the image's outer edge is white, near-white or transparent. A photo on a colored or
        // textured ground isn't, even when a few light strips along its edge got trimmed.
        const wbg = edge > 0 && edgePad / edge >= 0.6;
        const rowMin = Math.max(2, Math.round(w * 0.02)),
          colMin = Math.max(2, Math.round(h * 0.02));
        let x0 = 0,
          x1 = w - 1,
          y0 = 0,
          y1 = h - 1;
        while (y0 < h && rows[y0] < rowMin) y0++;
        while (y1 > y0 && rows[y1] < rowMin) y1--;
        while (x0 < w && cols[x0] < colMin) x0++;
        while (x1 > x0 && cols[x1] < colMin) x1--;
        if (y0 >= h || x0 >= w) {
          x1 = -1;
        }
        const full = {
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          r: W / H,
          wbg
        };
        if (x1 < 0) return finish(full);
        const box = {
          x: x0 / w,
          y: y0 / h,
          w: (x1 - x0 + 1) / w,
          h: (y1 - y0 + 1) / h,
          wbg
        };
        // Nothing worth trimming, or so little left that the "product" is probably detail on a white cover.
        if (box.w > 0.98 && box.h > 0.98 || box.w < 0.4 || box.h < 0.4) return finish(full);
        box.r = box.w * W / (box.h * H);
        finish(box);
      } catch (e) {
        finish(null);
      }
    };
    im.onerror = () => {
      clearTimeout(timer);
      finish(null);
    };
    im.src = src;
  }).then(v => {
    trimCache[src] = v;
    try {
      localStorage.setItem(TRIM_KEY, JSON.stringify(trimCache));
    } catch (e) {}
    return v;
  });
  return trimPending[src];
}
function useTrim(src) {
  const [box, setBox] = React.useState(() => src && src in trimCache ? trimCache[src] : undefined);
  React.useEffect(() => {
    if (!src) return undefined;
    if (src in trimCache) {
      setBox(trimCache[src]);
      return undefined;
    }
    setBox(undefined);
    let live = true;
    analyzeTrim(src).then(v => {
      if (live) setBox(v);
    });
    return () => {
      live = false;
    };
  }, [src]);
  return src && src in trimCache ? trimCache[src] : box;
}

/* Color swatches: up to 7 show; past that, 6 and a muted "+N" (the rest are on the product page). On phones (below 640px)
   the swatches grow to 32px targets, so a 192px card fits 6: up to 6 show; past that, 5 and "+N". Rows always fit 7. */
const SW_MAX = 7,
  SW_MAX_PHONE_CARD = 6;
const PHONE_MQ = '(max-width: 639px)';
function usePhone() {
  const get = () => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(PHONE_MQ).matches;
  const [on, setOn] = React.useState(get);
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia(PHONE_MQ),
      h = () => setOn(mq.matches);
    h();
    if (mq.addEventListener) mq.addEventListener('change', h);else mq.addListener(h);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', h);else mq.removeListener(h);
    };
  }, []);
  return on;
}
/** The color picker under the cover: a radio group of 24px targets with 16px dots. One tab stop; arrows move and select. */
function Swatches({
  colors,
  sel,
  onPick,
  label = 'Color',
  max = SW_MAX
}) {
  const refs = React.useRef([]);
  const shown = colors.length > max ? colors.slice(0, max - 1) : colors;
  const more = colors.length - shown.length;
  // The selected color keeps its place in the tab order even when it is one of the hidden ones (then the first dot takes focus).
  const focusI = sel < shown.length ? sel : 0;
  const move = (e, i) => {
    const n = shown.length;
    let j = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % n;else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + n) % n;else if (e.key === 'Home') j = 0;else if (e.key === 'End') j = n - 1;
    if (j === null) return;
    e.preventDefault();
    onPick(j);
    if (refs.current[j]) refs.current[j].focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "db-pc-sw",
    role: "radiogroup",
    "aria-label": label + ': ' + colors[sel].name
  }, shown.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.name + i,
    ref: el => {
      refs.current[i] = el;
    },
    type: "button",
    role: "radio",
    "aria-checked": i === sel,
    "aria-label": c.name,
    title: c.name,
    tabIndex: i === focusI ? 0 : -1,
    className: 'db-pc-swb' + (i === sel ? ' on' : ''),
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      onPick(i);
    },
    onKeyDown: e => move(e, i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-pc-dot",
    style: {
      background: c.swatch
    }
  }))), more > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "db-pc-more",
    "aria-label": more + ' more colors'
  }, "+", more) : null);
}

/* The Bookshelf PLUS symbol with the plus (assets/bookshelf-plus/bookshelf-plus-symbol-plus.svg, viewBox 206 x 132), inlined so
   the badge needs no file. Drawn in currentColor. */
const BSP_PLUS_PATHS = ['M89.8164 0C120.176 0 145.016 24.8398 145.016 55.1992V73.2344H150.742C158.375 73.5078 165.734 76.5039 171.184 81.957C176.637 87.4102 179.637 94.7695 179.637 102.676C179.637 110.305 176.637 117.938 171.184 123.391C165.734 128.844 158.375 131.84 150.469 131.84H136.824C132.242 131.84 128.523 128.125 128.523 123.539V55.5625C128.523 34.2734 111.105 16.8555 89.8164 16.8555C68.5273 16.8555 51.1094 34.2734 51.1094 55.5625V123.539C51.1094 128.125 47.3906 131.84 42.8086 131.84H29.168C21.2617 131.84 13.9023 128.844 8.44922 123.391C2.99609 117.938 0 110.305 0 102.676C0 94.7695 2.99609 87.4102 8.44922 81.957C13.9023 76.5039 21.2617 73.5078 28.8945 73.2344H34.6172V55.1992C34.6172 24.8398 59.457 0 89.8164 0ZM28.8945 90.6797C25.6211 90.6797 22.625 91.7695 20.1719 94.2227C17.9883 96.4062 16.625 99.6758 16.625 102.945C16.625 106.219 17.7188 109.215 20.1719 111.668C22.3516 113.852 25.6211 115.215 28.8945 115.215H32.0352C33.4609 115.215 34.6172 114.055 34.6172 112.629V93.2656C34.6172 91.8359 33.4609 90.6797 32.0352 90.6797H28.8945ZM147.602 90.6797C146.172 90.6797 145.016 91.8359 145.016 93.2656V112.629C145.016 114.055 146.172 115.215 147.602 115.215H150.742C154.012 115.215 157.281 113.852 159.465 111.668C161.918 109.215 163.008 106.219 163.008 102.945C163.008 99.6758 161.645 96.4062 159.465 94.2227C157.012 91.7695 154.012 90.6797 150.742 90.6797H147.602Z', 'M107.336 44.9258C108.219 44.7539 109.078 45.3359 109.246 46.2266L124.457 127.805C124.621 128.68 124.047 129.527 123.172 129.695L113.824 131.527C112.938 131.699 112.078 131.117 111.914 130.227L96.6992 48.6484C96.5352 47.7734 97.1094 46.9297 97.9883 46.7578L107.336 44.9258Z', 'M69.0625 45.1562C69.9609 45.1562 70.6914 45.8867 70.6914 46.7852V129.668C70.6914 130.566 69.9609 131.297 69.0625 131.297H60.875C59.9805 131.297 59.25 130.566 59.25 129.668V46.7852C59.25 45.8867 59.9805 45.1562 60.875 45.1562H69.0625Z', 'M91.6875 30.7109C92.5859 30.7109 93.3164 31.4375 93.3164 32.3359V129.668C93.3164 130.566 92.5859 131.297 91.6875 131.297H77.9648C77.0664 131.297 76.3398 130.566 76.3398 129.668V32.3359C76.3398 31.4375 77.0664 30.7109 77.9648 30.7109H91.6875Z', 'M184.926 22.0742C186.117 22.0742 187.086 23.0391 187.086 24.2305V38.1875C187.086 39.3789 188.051 40.3438 189.242 40.3438H203.199C204.391 40.3438 205.355 41.3086 205.355 42.5V52.7148C205.355 53.9062 204.391 54.8711 203.199 54.8711H189.242C188.051 54.8711 187.086 55.8398 187.086 57.0312V70.9883C187.086 72.1797 186.117 73.1445 184.926 73.1445H174.715C173.523 73.1445 172.555 72.1797 172.555 70.9883V57.0312C172.555 55.8398 171.59 54.8711 170.398 54.8711H156.441C155.25 54.8711 154.285 53.9062 154.285 52.7148V42.5C154.285 41.3086 155.25 40.3438 156.441 40.3438H170.398C171.59 40.3438 172.555 39.3789 172.555 38.1875V24.2305C172.555 23.0391 173.523 22.0742 174.715 22.0742H184.926Z'];
/** The Bookshelf PLUS badge: the symbol in white on an Orange 400 pill, the same 23px height as the Pre-order badge. */
function BookshelfPlusBadge() {
  return /*#__PURE__*/React.createElement("span", {
    className: "db-pc-bsp",
    role: "img",
    "aria-label": "Bookshelf PLUS",
    title: "Bookshelf PLUS"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 206 132",
    width: "20",
    height: "13",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, BSP_PLUS_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fillRule: i === 0 ? 'evenodd' : undefined,
    clipRule: i === 0 ? 'evenodd' : undefined
  }))));
}

/** A product in a rail or grid: cover, color swatches, title, rating, price and one action. The title is the only link;
 *  its click area covers the whole card, so the card is a single tab stop (plus the swatches, one more, and the action).
 *  The action follows the price at a fixed 12px, on one line with any extra control. */
function ProductCard({
  href = '#',
  onOpen,
  image,
  imageAlt = '',
  title,
  author,
  rating,
  ratingCount,
  price,
  priceHigh,
  wasPrice,
  colors,
  color,
  defaultColor,
  onColorChange,
  reserveSwatches = true,
  preorder = false,
  bookshelfPlus = false,
  outOfStock = false,
  frame = 'square',
  layout = 'card',
  action,
  extra,
  className,
  style,
  ...rest
}) {
  // Colors: the selected one sets the image (and its alt and link) when it has its own. Controlled with `color`, or on its own from `defaultColor`.
  const hasColors = Array.isArray(colors) && colors.length > 0;
  const findColor = name => hasColors && name != null ? Math.max(0, colors.findIndex(c => c.name === name)) : 0;
  const [ownSel, setOwnSel] = React.useState(() => findColor(defaultColor));
  const sel = hasColors ? Math.min(color != null ? findColor(color) : ownSel, colors.length - 1) : 0;
  const cur = hasColors ? colors[sel] : null;
  const [swapped, setSwapped] = React.useState(false);
  const pickColor = i => {
    if (!hasColors || i === sel) return;
    setSwapped(true);
    if (color == null) setOwnSel(i);
    if (onColorChange) onColorChange(colors[i].name, i);
  };
  const img = cur && cur.image || image;
  const imgAlt = cur && cur.image ? cur.imageAlt != null ? cur.imageAlt : imageAlt : imageAlt;
  const link = cur && cur.href || href;
  // Every color's image is fetched and trimmed up front, so switching shows it at once.
  const colorKey = hasColors ? colors.map(c => c.image || '').join('|') : '';
  React.useEffect(() => {
    if (!hasColors) return;
    colors.forEach(c => {
      if (c.image) {
        analyzeTrim(c.image);
        const im = new Image();
        im.src = c.image;
      }
    });
  }, [colorKey]);
  const [brokenSrc, setBrokenSrc] = React.useState(null);
  const broken = !!img && brokenSrc === img;
  const setBroken = () => setBrokenSrc(img);
  const scanned = useTrim(img && !broken ? img : null);
  // When the scan can't read the image (cross-origin without CORS), use its natural shape untrimmed,
  // so it still fills the frame bottom-left and scales up or down like every other image.
  const [nat, setNat] = React.useState(null);
  const natR = nat && nat.src === img ? nat.r : null;
  const trim = scanned || (scanned === null && natR ? {
    x: 0,
    y: 0,
    w: 1,
    h: 1,
    r: natR
  } : scanned);
  // Fill: on a card with colors, a product image whose background isn't white (a photo on a colored or textured ground) fills the
  // whole image container, cropped from the center, whether or not the trim cut anything from it. White-ground images keep the
  // trim and the bottom-left fit. Images that can't be read (cross-origin without CORS) can't be checked and keep the fit.
  const fill = hasColors && !!trim && trim.wbg === false;
  const open = onOpen ? e => {
    e.preventDefault();
    onOpen(e);
  } : undefined;
  // Image container: square by default (192 x 192) on a 192px card; frame="book" is a wider 224px card
  // with a 2:3 book frame (224 x 336).
  const frameR = frame === 'book' ? 2 / 3 : 1;
  const cardW = frame === 'book' ? 224 : 192;
  // layout="row": the horizontal variant for phone lists. A 112 x 112 image slot on the left (a book's 2:3 image sits in it
  // at 75 x 112, bottom-left, so every row's text lines up) and the text column on the right; the row fills the list's width.
  const row = layout === 'row';
  const phone = usePhone();
  // Row fit: when the row is too narrow for the price and the action side by side (or for the rating), the whole row scales down
  // (transform, origin top-left) instead of wrapping. Sizes come from offsetWidth/offsetHeight, which ignore
  // transforms in every browser, so the math is the same in Safari and Chrome. Re-fits on any size change.
  const outerRef = React.useRef(null),
    innerRef = React.useRef(null);
  const [fit, setFit] = React.useState({
    s: 1,
    w: 0,
    h: 0
  });
  const useIso = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  useIso(() => {
    if (!row) return undefined;
    const outer = outerRef.current,
      inner = innerRef.current;
    if (!outer || !inner) return undefined;
    const measure = () => {
      const W = outer.offsetWidth,
        foot = inner.querySelector('.db-pc-foot');
      let s = 1;
      if (W && foot) {
        const body = foot.parentElement,
          gap = parseFloat(getComputedStyle(foot).columnGap) || 0,
          rate = body.querySelector('.db-pc-rating');
        const sw = body.querySelector('.db-pc-sw');
        const need = Math.max(foot.children.length > 1 ? foot.children[0].offsetWidth + gap + foot.children[1].offsetWidth : 0, rate ? rate.offsetWidth : 0, sw ? sw.scrollWidth - 6 : 0);
        const fixed = inner.offsetWidth - body.offsetWidth;
        s = Math.min(1, W / (fixed + need));
      }
      s = Math.floor(s * 1000) / 1000;
      const w = s < 1 ? W / s : 0,
        h = s < 1 ? inner.offsetHeight * s : 0;
      setFit(f => Math.abs(f.s - s) < 0.001 && Math.abs(f.h - h) < 0.5 && Math.abs(f.w - w) < 0.5 ? f : {
        s,
        w,
        h
      });
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [row]);
  const fitR = row ? 1 : frameR;
  // The badges stack in a column on the image's top-left corner, 2px in from both edges (or the frame's, for the placeholder), 4px apart:
  // Pre-order on top, then Bookshelf PLUS. They aren't clipped to the image: each stays on one line and may run past a narrow image
  // across the image container (minus 2px each side); if that's still too narrow, "Pre-order" ends in an ellipsis.
  const slotW = row ? 112 : cardW;
  const hasBadges = preorder || bookshelfPlus;
  const badge = hasBadges ? /*#__PURE__*/React.createElement("span", {
    className: "db-pc-badges",
    style: {
      position: 'absolute',
      top: 2,
      left: 2,
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4,
      width: 'max-content',
      maxWidth: slotW - 4
    }
  }, preorder ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    style: {
      minWidth: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Pre-order") : null, bookshelfPlus ? /*#__PURE__*/React.createElement(BookshelfPlusBadge, null) : null) : null;
  const imgStyle = !trim ? null : fill ? {
    position: 'absolute',
    display: 'block',
    maxWidth: 'none',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  } : {
    position: 'absolute',
    display: 'block',
    maxWidth: 'none',
    left: -trim.x / trim.w * 100 + '%',
    top: -trim.y / trim.h * 100 + '%',
    width: 100 / trim.w + '%',
    height: 100 / trim.h + '%'
  };
  // The image a swatch swap replaces (with the layout it had), kept under the new one while that fades in.
  const curImg = React.useRef(null);
  const prevImg = React.useRef(null);
  const [settled, setSettled] = React.useState(null);
  React.useEffect(() => {
    if (!img || !imgStyle) return;
    const c = curImg.current;
    if (!c || c.img !== img) {
      prevImg.current = c;
      curImg.current = {
        img,
        style: imgStyle
      };
    } else c.style = imgStyle;
  });
  const lastShown = curImg.current && curImg.current.img !== img ? curImg.current : prevImg.current;
  const outgoing = swapped && lastShown && lastShown.img !== img && settled !== img ? lastShown : null;
  const cover = /*#__PURE__*/React.createElement("div", {
    className: "db-pc-cover",
    style: {
      position: 'relative',
      aspectRatio: frameR === 1 ? '1 / 1' : '2 / 3',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      ...(row ? {
        flex: 'none',
        alignSelf: 'flex-start',
        aspectRatio: 'auto',
        height: 112,
        width: 112
      } : null)
    }
  }, img && !broken && trim ? /*#__PURE__*/React.createElement("span", {
    className: "db-pc-img",
    style: {
      position: 'relative',
      display: 'block',
      ...(fill ? {
        width: '100%',
        height: '100%'
      } : {
        aspectRatio: String(trim.r),
        maxWidth: '100%',
        maxHeight: '100%',
        ...(trim.r >= fitR ? {
          width: '100%'
        } : {
          height: '100%'
        })
      })
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-pc-clip",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      borderRadius: 'var(--db-radius-sm)',
      isolation: 'isolate'
    }
  }, outgoing ? /*#__PURE__*/React.createElement("img", {
    key: 'out-' + outgoing.img,
    src: outgoing.img,
    alt: "",
    "aria-hidden": "true",
    style: outgoing.style
  }) : null, /*#__PURE__*/React.createElement("img", {
    key: img,
    src: img,
    alt: imgAlt,
    loading: "lazy",
    onError: setBroken,
    className: swapped ? 'db-pc-swap' : undefined,
    onAnimationEnd: () => setSettled(img),
    style: imgStyle
  })), badge) : img && !broken ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: imgAlt,
    loading: "lazy",
    onError: setBroken,
    onLoad: e => {
      const t = e.currentTarget;
      if (t.naturalWidth && t.naturalHeight) setNat({
        src: img,
        r: t.naturalWidth / t.naturalHeight
      });
    },
    style: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      height: 'auto',
      borderRadius: 'var(--db-radius-sm)',
      visibility: 'hidden'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "db-pc-ph",
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--db-radius-sm)',
      background: 'var(--db-pearl)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--db-space-3)',
      textAlign: 'center',
      fontFamily: 'var(--db-font-serif)',
      fontSize: 13,
      lineHeight: '17px',
      color: 'var(--db-ink-muted)'
    }
  }, title), badge), img && !broken && trim === null ? badge : null);
  const titleEl = /*#__PURE__*/React.createElement("a", {
    href: link,
    onClick: open,
    title: title,
    className: "db-pc-title",
    style: {
      fontFamily: 'var(--db-font-serif)',
      fontWeight: 400,
      color: 'var(--db-ink)',
      // Always two lines tall (2 x the whole-pixel line height, --tlh: 21px, 23px from 640px), so one-line titles keep the same height; longer titles end in an ellipsis.
      // In a row the title takes only the lines it needs, up to three; rows don't have to line up.
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: row ? 3 : 2,
      overflow: 'hidden',
      ...(row ? {
        maxHeight: 'calc(var(--tlh) * 3)',
        gridArea: 'title'
      } : {
        height: 'calc(var(--tlh) * 2)'
      })
    }
  }, title);
  const authorEl = author ? /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...(row ? {
        gridArea: 'author',
        marginTop: 'var(--db-space-2)'
      } : null)
    }
  }, author) : null;
  // Cards reserve the swatch row (24px) whether or not the product has colors, so every card in a grid is the same height.
  // reserveSwatches={false} drops it for rails where no product has colors. Author cards (books) never keep it: books don't
  // come in colors. Rows only show it when there are colors.
  const swatchEl = hasColors ? /*#__PURE__*/React.createElement(Swatches, {
    colors: colors,
    sel: sel,
    onPick: pickColor,
    max: !row && phone ? SW_MAX_PHONE_CARD : SW_MAX
  }) : !row && !author && reserveSwatches ? /*#__PURE__*/React.createElement("div", {
    className: "db-pc-sw",
    "aria-hidden": "true"
  }) : null;
  const ratingEl = rating != null ? /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    value: rating,
    size: "sm",
    count: ratingCount,
    className: "db-pc-rating"
  }) : null;
  const priceInner = outOfStock ? /*#__PURE__*/React.createElement("span", {
    className: "db-price db-price-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-price-now",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, "Out of stock")) : /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: price,
    high: priceHigh,
    was: wasPrice,
    size: "md"
  });
  const actionsEl = action || extra ? /*#__PURE__*/React.createElement("div", {
    className: "db-pc-actions",
    style: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      gap: 'var(--db-space-2)',
      marginTop: 'var(--db-space-1)',
      ...(row ? {
        marginTop: 0,
        marginLeft: 'auto'
      } : null)
    }
  }, action, extra) : null;
  if (row) {
    // Row: title and author across the top; the rating above the price in the bottom-left corner and the action in the
    // bottom-right corner, centered on the price line and level with the image's bottom edge (or 12px below the text when it runs taller). Too narrow for both: the whole row scales down.
    const scaled = fit.s < 1;
    return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
      ref: outerRef,
      className: 'db-pc db-pc-row' + (className ? ' ' + className : ''),
      style: {
        position: 'relative',
        display: 'block',
        width: '100%',
        minWidth: 0,
        ...(scaled ? {
          height: fit.h
        } : null),
        ...style
      }
    }), /*#__PURE__*/React.createElement("div", {
      ref: innerRef,
      className: "db-pc-rowin",
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        gap: 'var(--db-space-4)',
        width: scaled ? fit.w : '100%',
        padding: 'var(--db-space-5) 0',
        boxSizing: 'border-box',
        ...(scaled ? {
          transform: 'scale(' + fit.s + ')',
          transformOrigin: '0 0',
          WebkitTransformOrigin: '0 0'
        } : null)
      }
    }, cover, /*#__PURE__*/React.createElement("div", {
      className: "db-pc-body",
      style: {
        flex: '1 1 auto',
        minWidth: 0,
        minHeight: 112,
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gridTemplateRows: 'auto auto auto 1fr auto auto',
        gridTemplateAreas: '"title" "author" "swatches" "." "rating" "bottom"'
      }
    }, titleEl, authorEl, swatchEl ? /*#__PURE__*/React.createElement("div", {
      style: {
        gridArea: 'swatches',
        display: 'flex',
        marginTop: 'var(--db-space-2)'
      }
    }, swatchEl) : null, ratingEl ? /*#__PURE__*/React.createElement("div", {
      style: {
        gridArea: 'rating',
        display: 'flex',
        marginTop: 'var(--db-space-3)'
      }
    }, ratingEl) : null, /*#__PURE__*/React.createElement("div", {
      className: "db-pc-foot",
      style: {
        gridArea: 'bottom',
        alignSelf: 'end',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--db-space-2)',
        marginTop: ratingEl ? 'var(--db-space-1)' : 'var(--db-space-3)'
      }
    }, priceInner, actionsEl))));
  }
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    className: 'db-pc' + (className ? ' ' + className : ''),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-2)',
      width: cardW,
      flex: '0 0 auto',
      ...style
    }
  }), cover, swatchEl, titleEl, authorEl, ratingEl, priceInner, actionsEl);
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/product-card/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/content/section-heading/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Section title with an optional "See all" link on the same baseline. 16px of space below. */
function SectionHeading({
  title,
  href,
  onSeeAll,
  seeAllLabel = 'See all',
  headingLevel = 'h2',
  className,
  style,
  ...rest
}) {
  const H = headingLevel;
  const hasLink = href || onSeeAll;
  const click = onSeeAll ? e => {
    if (!href) e.preventDefault();
    onSeeAll(e);
  } : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: 'db-sh' + (className ? ' ' + className : ''),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--db-space-4)',
      marginBottom: 'var(--db-space-4)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(H, {
    className: "db-sh-t",
    style: {
      margin: 0,
      fontFamily: 'var(--db-font-serif)',
      fontWeight: 400,
      color: 'var(--db-display)',
      minWidth: 0
    }
  }, title), hasLink ? /*#__PURE__*/React.createElement("a", {
    className: "db-sh-all",
    href: href || '#',
    onClick: click,
    "aria-label": seeAllLabel + ' ' + title
  }, seeAllLabel) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/section-heading/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/breadcrumb/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Where the current page sits: real links separated by "/", the current page last.
 *  More than 4 levels collapse the middle into "…", which expands the full path. */
function Breadcrumb({
  items = [],
  label = 'Breadcrumb',
  className,
  style,
  ...rest
}) {
  const [full, setFull] = React.useState(false);
  if (!items.length) return null;
  const last = items.length - 1;
  const collapse = !full && items.length > 4;
  const shown = collapse ? [{
    i: 0
  }, {
    gap: true
  }, {
    i: last - 1
  }, {
    i: last
  }] : items.map((_, i) => ({
    i
  }));
  const sep = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, "/");
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": label
  }, rest, {
    className: className,
    style: style
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 6,
      margin: 0,
      padding: 0,
      listStyle: 'none',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-eyebrow)',
      lineHeight: 1.5
    }
  }, shown.map((s, k) => /*#__PURE__*/React.createElement("li", {
    key: s.gap ? 'gap' : s.i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
    /* Items revealed by "…" fade in instead of popping. */,
    className: full && items.length > 4 && s.i > 0 && s.i < last - 1 ? 'db-bc-in' : undefined
  }, k > 0 ? sep : null, s.gap ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-bc-link",
    "aria-label": "Show full path",
    onClick: () => setFull(true),
    style: {
      border: 0,
      padding: 0,
      background: 'none',
      font: 'inherit',
      cursor: 'pointer'
    }
  }, '…') : s.i === last ? /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    style: {
      color: 'var(--db-ink)'
    }
  }, items[s.i].label) : /*#__PURE__*/React.createElement("a", {
    className: "db-bc-link",
    href: items[s.i].href || '#',
    onClick: items[s.i].onClick ? e => {
      if (!items[s.i].href) e.preventDefault();
      items[s.i].onClick(e);
    } : undefined
  }, items[s.i].label)))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/breadcrumb/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/content/count-badge/CountBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fmt = (n, max) => n > max ? max + '+' : String(n);

/** A number attached to something. variant="overlay" (default) wraps its target and sits on the
 *  top-right corner, e.g. the quantity on a checkout thumbnail. variant="pill" is the header cart:
 *  an icon and the count together in a yellow pill. */
function CountBadge({
  count = 0,
  max = 99,
  variant = 'overlay',
  icon = 'shopping_cart',
  label,
  children,
  className,
  style,
  ...rest
}) {
  const n = Math.max(0, Math.floor(Number(count) || 0));
  // Pill: nothing jumps. Padding, fill, the number's width (measured) and its fade all transition,
  // in both directions and when the digit count changes. The last number stays in place while it fades out.
  const last = React.useRef(n > 0 ? n : 1);
  if (n > 0) last.current = n;
  const shown = n > 0 ? n : last.current;
  const meas = React.useRef(null);
  const [numW, setNumW] = React.useState(0);
  React.useLayoutEffect(() => {
    if (variant === 'pill' && meas.current) setNumW(Math.ceil(meas.current.getBoundingClientRect().width));
  }, [variant, shown, max]);
  if (variant === 'pill') {
    const on = n > 0;
    const numFont = {
      fontFamily: 'var(--db-font-sans)',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    };
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      className: 'db-cb-pill' + (on ? ' on' : '') + (className ? ' ' + className : ''),
      role: "img",
      "aria-label": label || (on ? 'Cart, ' + n + (n === 1 ? ' item' : ' items') : 'Cart, empty'),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        height: 26,
        padding: on ? '0 12px 0 4px' : 0,
        borderRadius: 'var(--db-radius-pill)',
        background: on ? 'var(--db-yellow-300)' : 'transparent',
        color: 'var(--db-ink)',
        ...style
      }
    }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 20,
      weight: 400,
      className: "db-cb-ic",
      style: {
        height: 26,
        fontSize: 21,
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "db-cb-numwrap",
      "aria-hidden": "true",
      style: {
        display: 'block',
        overflow: 'visible',
        width: on ? numW + 4 : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "db-cb-numfade",
      style: {
        display: 'block',
        paddingLeft: 4,
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(4px)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      key: shown,
      className: "db-cb-num",
      style: {
        display: 'block',
        ...numFont
      }
    }, fmt(shown, max)))), /*#__PURE__*/React.createElement("span", {
      ref: meas,
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        ...numFont
      }
    }, fmt(shown, max)));
  }
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": label || 'Quantity ' + n,
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--db-radius-pill)',
      background: 'var(--db-charcoal)',
      color: 'var(--db-white)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 10,
      fontWeight: 700,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(n, max)));
}
Object.assign(__ds_scope, { CountBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/count-badge/CountBadge.jsx", error: String((e && e.message) || e) }); }

// components/navigation/subcategory-card/SubcategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Links to a subcategory from a category page: a square image card with the name in a frosted Pearl pill that
 *  straddles its bottom edge, half inside and half outside. The whole card is one link. No current state. */
function SubcategoryCard({
  image,
  imageAlt = '',
  variant = 'below',
  icon,
  label,
  href = '#',
  onClick,
  className,
  style,
  ...rest
}) {
  const [broken, setBroken] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    onClick: onClick,
    title: label,
    className: 'db-sc' + (variant === 'pill' ? '' : ' db-sc-below') + (className ? ' ' + className : ''),
    style: style
  }), /*#__PURE__*/React.createElement("span", {
    className: "db-sc-img",
    "aria-hidden": imageAlt ? undefined : 'true'
  }, image && !broken ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    loading: "lazy",
    onError: () => setBroken(true)
  }) : null), variant !== 'pill' ? /*#__PURE__*/React.createElement("span", {
    className: "db-sc-cap"
  }, label) : /*#__PURE__*/React.createElement("span", {
    className: 'db-sc-tw' + (icon ? ' has-ic' : '')
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    weight: 400,
    className: "db-sc-ic"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "db-sc-t"
  }, label)));
}
Object.assign(__ds_scope, { SubcategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/subcategory-card/SubcategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/progress-tracker/ProgressTracker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shows how far something has progressed through fixed steps, e.g. an order: a 4px bar, then an icon and
 *  label on one line per step. Steps up to and including `current` are reached (teal 400, filled check). */
function ProgressTracker({
  steps = [],
  current = 0,
  label = 'Progress',
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    "aria-label": label
  }, rest, {
    className: className,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + steps.length + ', minmax(0, 1fr))',
      gap: 'var(--db-space-2)',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      ...style
    }
  }), steps.map((s, i) => {
    const reached = i <= current;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      "aria-current": i === current ? 'step' : undefined,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        alignSelf: 'stretch',
        height: 4,
        borderRadius: 'var(--db-radius-pill)',
        background: reached ? 'var(--db-teal-400)' : 'var(--db-dove)',
        transition: 'var(--db-transition)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'flex',
        flex: 'none',
        color: reached ? 'var(--db-teal-400)' : 'var(--db-ink-muted)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: reached ? 'check_circle' : 'radio_button_unchecked',
      size: 18,
      filled: reached
    })), /*#__PURE__*/React.createElement("span", {
      className: "db-caption",
      style: {
        color: reached ? 'var(--db-charcoal)' : 'var(--db-ink-muted)',
        lineHeight: '21px',
        minWidth: 0
      }
    }, s, /*#__PURE__*/React.createElement("span", {
      className: "db-sr"
    }, i < current ? ', done' : i === current ? ', current step' : ', not started'))));
  }));
}
Object.assign(__ds_scope, { ProgressTracker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/progress-tracker/ProgressTracker.jsx", error: String((e && e.message) || e) }); }

// components/content/accordion/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let uid = 0;

/** Questions or sections that open in place. One open at a time by default (single={false} for several).
 *  Always set on a white panel with a 12px radius and the white Card outline. */
function Accordion({
  items = [],
  single = true,
  defaultOpen = [],
  headingLevel = 'h3',
  className,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set([].concat(defaultOpen)));
  const id = React.useRef('db-acc-' + ++uid).current;
  const btns = React.useRef([]);
  const H = headingLevel;
  const toggle = i => setOpen(prev => {
    const next = new Set(single ? [] : prev);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  const onKey = (e, i) => {
    const n = items.length;
    const to = {
      ArrowDown: (i + 1) % n,
      ArrowUp: (i - 1 + n) % n,
      Home: 0,
      End: n - 1
    }[e.key];
    if (to != null) {
      e.preventDefault();
      btns.current[to] && btns.current[to].focus();
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: 'db-acc' + (className ? ' ' + className : ''),
    style: style
  }), items.map((it, i) => {
    const on = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "db-acc-item"
    }, /*#__PURE__*/React.createElement(H, {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      ref: el => btns.current[i] = el,
      id: id + '-b' + i,
      "aria-expanded": on,
      "aria-controls": id + '-p' + i,
      onClick: () => toggle(i),
      onKeyDown: e => onKey(e, i),
      className: "db-acc-btn"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        textAlign: 'left'
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'flex',
        color: 'var(--db-charcoal)',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--db-duration-base) var(--db-ease-in-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "keyboard_arrow_down",
      size: 20
    })))), /*#__PURE__*/React.createElement("div", {
      id: id + '-p' + i,
      role: "region",
      "aria-labelledby": id + '-b' + i,
      inert: on ? undefined : '',
      className: 'db-acc-panel' + (on ? ' on' : '')
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "db-body db-acc-body"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/accordion/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/search-filter-bar/SearchFilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Search a list, optionally narrowed by a filter. Filter on the left (220px), search on the right (up to 360px).
 *  mode="live" (default) searches as you type; mode="submit" adds a Search button and searches on submit. */
function SearchFilterBar({
  searchLabel = 'Search',
  placeholder = 'Search',
  query,
  onQueryChange,
  onSearch,
  mode = 'live',
  searchError,
  busy = false,
  inputProps,
  filterLabel = 'Filter',
  filters,
  filterValue,
  onFilterChange,
  actions,
  className,
  style,
  ...rest
}) {
  const [own, setOwn] = React.useState('');
  const q = query != null ? query : own;
  const change = e => {
    const v = e.target.value;
    if (query == null) setOwn(v);
    if (onQueryChange) onQueryChange(v);
    if (mode === 'live' && onSearch) onSearch(v);
  };
  const submit = e => {
    e.preventDefault();
    if (onSearch) onSearch(q);
  };
  const showFilter = filters && filters.length > 2;
  const fieldId = React.useRef('db-sfb-' + Math.random().toString(36).slice(2, 8)).current;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: className,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: mode === 'submit' ? 'flex-start' : 'flex-end',
      justifyContent: showFilter ? 'space-between' : 'flex-start',
      gap: '12px 16px',
      ...style
    }
  }), showFilter ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 220px',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: filterLabel,
    value: filterValue,
    onChange: e => onFilterChange && onFilterChange(e.target.value),
    options: filters.map(f => typeof f === 'string' ? f : {
      value: f.value,
      label: f.count != null ? f.label + ' (' + f.count + ')' : f.label
    })
  })) : null, mode === 'submit' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-2)',
      flex: '1 1 auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: "db-label",
    style: {
      color: 'var(--db-charcoal)'
    }
  }, searchLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: submit,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--db-space-3)',
      flex: '0 1 420px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    id: fieldId,
    type: "search",
    icon: "search",
    placeholder: placeholder,
    value: q,
    onChange: change,
    error: searchError
  }, inputProps))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "md",
    disabled: busy
  }, busy ? 'Searching\u2026' : 'Search')), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      minHeight: 40
    }
  }, actions) : null)) : /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: submit,
    style: {
      flex: '1 1 220px',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    id: fieldId,
    type: "search",
    icon: "search",
    label: searchLabel,
    placeholder: placeholder,
    value: q,
    onChange: change,
    error: searchError
  }, inputProps))), actions && mode !== 'submit' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--db-space-3)'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { SearchFilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/search-filter-bar/SearchFilterBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/drawer/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EXIT_MS = 224; // = --db-duration-out-slow
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
let uid = 0;

/** Side sheet for the menu, cart and account. Modal: Escape and the scrim close it, focus moves in,
 *  stays inside and returns on close, page scroll is locked. Width: min(360px, 92%), 420px from 640px. */
function Drawer({
  open = false,
  onClose,
  side = 'right',
  title,
  header,
  footer,
  closeLabel = 'Close',
  padded = true,
  children,
  className,
  style,
  ...rest
}) {
  const [mounted, setMounted] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  const panel = React.useRef(null);
  const back = React.useRef(null);
  const titleId = React.useRef('db-drawer-t' + ++uid).current;
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [open]);
  React.useEffect(() => {
    if (!open || !mounted) return undefined;
    back.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const p = panel.current;
    if (p) p.focus({
      preventScroll: true
    });
    const onKey = e => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        if (onClose) onClose();
        return;
      }
      if (e.key !== 'Tab' || !p) return;
      const items = Array.prototype.filter.call(p.querySelectorAll(FOCUSABLE), el => el.offsetParent !== null);
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === p)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      const b = back.current;
      if (b && typeof b.focus === 'function') b.focus({
        preventScroll: true
      });
    };
  }, [open, mounted]);
  if (!mounted) return null;
  const on = visible ? ' on' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: 'db-drawer-scrim' + on,
    onClick: onClose,
    role: "presentation"
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: panel,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1,
    onClick: e => e.stopPropagation()
  }, rest, {
    className: 'db-drawer db-drawer-' + (side === 'left' ? 'left' : 'right') + on + (className ? ' ' + className : ''),
    style: style
  }), /*#__PURE__*/React.createElement("div", {
    className: "db-drawer-h"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, header || (title ? /*#__PURE__*/React.createElement("h2", {
    id: titleId,
    style: {
      margin: 0,
      fontFamily: 'var(--db-font-serif)',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.2,
      color: 'var(--db-display)'
    }
  }, title) : null)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: closeLabel,
    variant: "ghost",
    size: "md",
    iconSize: 22,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-drawer-b",
    style: {
      padding: padded ? 'var(--db-space-4) var(--db-space-4) var(--db-space-5)' : 0
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "db-drawer-f"
  }, footer) : null));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/drawer/Drawer.jsx", error: String((e && e.message) || e) }); }


// components/utils/pill.js
try { (() => {
/**
 * Pill padding rule. Every pill (radius 999px) derives its padding from its height `h`:
 *  - icon side: (h - icon) / 2, equal on all sides of the icon
 *  - text side: h / 2 (always larger than top/bottom)
 *  - icon + text: each side follows its own rule
 *  - icon only: square, width = h
 * Height is explicit; vertical padding is always 0.
 */
function pillPadding(h, {
  iconStart = 0,
  iconEnd = 0,
  text = true
} = {}) {
  const side = icon => icon ? (h - icon) / 2 : h / 2;
  if (!text) return {
    height: h,
    width: h,
    padding: 0
  };
  return {
    height: h,
    padding: `0 ${side(iconEnd)}px 0 ${side(iconStart)}px`,
    boxSizing: 'border-box'
  };
}
Object.assign(__ds_scope, { pillPadding });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/utils/pill.js", error: String((e && e.message) || e) }); }

// components/actions/button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--db-font-sans)',
  fontWeight: 'var(--db-weight-sans-medium)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--db-tracking-label)',
  borderRadius: 'var(--db-radius-pill)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--db-space-2)',
  border: 0,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'var(--db-transition)',
  whiteSpace: 'nowrap',
  fontSize: 'var(--db-text-label)',
  lineHeight: 1
};
const sizes = {
  sm: {
    h: 32,
    icon: 18
  },
  md: {
    h: 40,
    icon: 20
  },
  lg: {
    h: 48,
    icon: 24,
    fontSize: 'calc(var(--db-text-label) + 2px)'
  }
};

/* Variant colors and the rest, hover, press and focus states live in bundle.css (.db-btn, .db-btn-<variant>),
   because inline styles can't express :hover. Every state change eases through --db-transition. */
const VARIANTS = ['primary', 'secondary', 'ghost', 'dark', 'inverse'];

/** The brand's enclosed-shape button: DM Sans Regular, ALL CAPS, pill. Padding follows the pill rule.
 * Hugs its content by default (even inside stretching flex/grid parents); `fullWidth` fills the container. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  as,
  href,
  children,
  className,
  style,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const s = sizes[size];
  const hasText = children != null && children !== false && children !== '';
  const pad = __ds_scope.pillPadding(s.h, {
    iconStart: icon ? s.icon : 0,
    iconEnd: iconAfter ? s.icon : 0,
    text: hasText
  });
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest, {
    className: 'db-btn db-btn-' + (VARIANTS.includes(variant) ? variant : 'primary') + (className ? ' ' + className : ''),
    style: {
      ...base,
      ...pad,
      ...(s.fontSize ? {
        fontSize: s.fontSize
      } : null),
      width: fullWidth ? '100%' : pad.width ?? 'fit-content',
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    style: {
      display: 'block'
    }
  }) : null, hasText && icon || hasText && iconAfter ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      textBox: 'trim-both cap alphabetic',
      WebkitTextBox: 'trim-both cap alphabetic'
    }
  }, children) : children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon,
    style: {
      display: 'block'
    }
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/tag/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = 28,
  DISMISS = 16;

/** A quiet, selectable category chip: hairline outline, sentence case. Padding follows the pill rule. */
function Tag({
  selected = false,
  removable = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-db-press": true
  }, rest, {
    style: {
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-caption)',
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--db-space-2)',
      ...__ds_scope.pillPadding(H, {
        iconEnd: removable ? DISMISS : 0
      }),
      borderRadius: 'var(--db-radius-pill)',
      border: 0,
      boxShadow: selected ? 'var(--db-ring-strong)' : 'var(--db-ring-hairline)',
      background: selected ? 'var(--db-charcoal)' : 'transparent',
      color: selected ? 'var(--db-white)' : 'var(--db-charcoal)',
      cursor: 'pointer',
      transition: 'var(--db-transition)',
      ...style
    }
  }), removable ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      textBox: 'trim-both cap alphabetic',
      WebkitTextBox: 'trim-both cap alphabetic'
    }
  }, children) : children, removable ? /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    role: "button",
    "aria-label": "Remove",
    style: {
      width: DISMISS,
      height: DISMISS,
      display: 'inline-grid',
      placeItems: 'center',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: DISMISS,
    style: {
      display: 'block'
    }
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/tag/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/toast/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = 22,
  DISMISS = 40,
  H = 52,
  LINK_H = 32;

/**
 * Toast: brief, non-blocking confirmation pill, 52px, fixed bottom-center. Independent of Dialog:
 * its own tones, motion and file.
 * - variant "solid" (default): value-400 tone fill, 1px border one shade lighter (value 300), white text and icon, overlay shadow. Warning is the exception: Yellow 200 fill, Yellow 100 border, charcoal text and icon.
 * - variant "outline": white pill, tone-colored border and icon (neutral uses light gray granite), md shadow.
 * Motion: fade, 12px rise, scale .96 to 1 (280ms in, 200ms out). Changing `seq` replays a bump.
 * Links: `link` ({ label, href } or { label, onClick }) renders a small white __ds_scope.Button with charcoal text.
 * Duration: temporary (default) has no close button and calls onDismiss after `duration` ms;
 * `persistent` stays until closed and shows the close button. The app decides which per use.
 * Padding follows the pill rule.
 */
function Toast({
  open = true,
  tone = 'success',
  variant = 'solid',
  message,
  action,
  link,
  onDismiss,
  persistent = false,
  duration = 4000,
  seq = 0,
  fixed = false,
  style,
  className = '',
  ...rest
}) {
  __ds_scope.ensureToastMotion();
  const ref = React.useRef(null);
  const wasOn = React.useRef(false);
  const [mounted, visible] = __ds_scope.useToastPresence(React, open);
  React.useEffect(() => {
    const el = ref.current,
      again = wasOn.current;
    wasOn.current = visible;
    if (!el) return;
    el.classList.remove('is-bump');
    if (visible && again) {
      void el.offsetWidth;
      el.classList.add('is-bump');
    }
  }, [seq, visible]);
  React.useEffect(() => {
    if (persistent || !visible || !onDismiss || !duration) return;
    const id = setTimeout(onDismiss, duration);
    return () => clearTimeout(id);
  }, [persistent, visible, duration, seq]);
  const closable = persistent && !!onDismiss;
  if (!mounted) return null;
  const t = __ds_scope.TOAST_TONES[tone] || __ds_scope.TOAST_TONES.neutral;
  const fill = t.fill;
  const line = t.line || fill; // outline border + icon color
  const solid = variant === 'solid';
  const toast = /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "status",
    "aria-live": "polite"
  }, rest, {
    className: `db-toast${visible ? ' is-on' : ''} ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      boxSizing: 'border-box',
      height: H,
      borderRadius: 'var(--db-radius-pill)',
      padding: `0 ${closable ? (H - DISMISS) / 2 : link || action ? (H - LINK_H) / 2 : H / 2}px 0 ${(H - ICON) / 2}px`,
      background: solid ? fill : 'var(--db-white)',
      color: solid ? t.on : 'var(--db-ink)',
      boxShadow: `0 0 0 1px ${solid ? t.edge : line}, ${solid ? 'var(--db-shadow-overlay)' : 'var(--db-shadow-md)'}`,
      fontFamily: 'var(--db-font-sans)',
      fontSize: 15,
      maxWidth: 460,
      whiteSpace: 'nowrap',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    key: seq,
    className: "db-toast-ic",
    style: {
      color: solid ? t.on : t.lineIcon || line,
      display: 'inline-grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: ICON,
    weight: 400
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), link ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    size: "sm",
    href: link.href,
    onClick: link.onClick,
    style: {
      color: 'var(--db-charcoal)',
      boxShadow: `0 0 0 1px ${solid ? t.on : 'var(--db-hairline)'}`,
      flex: '0 0 auto'
    }
  }, link.label) : null, action, closable ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "cancel-circle",
    filled: true,
    label: "Dismiss",
    size: "md",
    className: "db-ib-bare",
    onClick: onDismiss,
    style: {
      color: solid ? t.on : 'rgba(58, 54, 51, 0.6)',
      opacity: solid ? 0.75 : 1
    }
  }) : null);
  if (!fixed) return toast;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 'var(--db-space-6)',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, toast));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/toast/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/segmented-control/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 32,
    inset: 3,
    font: 'var(--db-text-caption)',
    icon: 16
  },
  md: {
    h: 40,
    inset: 4,
    font: 'var(--db-text-body-sm, 14px)',
    icon: 18
  }
};

/** Pill-shaped segmented control. One option is always active, shown as a dark (charcoal) pill on a light track.
 *  The pill is one shared element that slides (and resizes) to the chosen option, ease in-out. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const ref = React.useRef(null);
  const [box, setBox] = React.useState(null);
  const [live, setLive] = React.useState(false);
  // Measured from the real rects. The press scale is on the content inside each button, so the button's own box never moves and one measurement is exact.
  const measure = React.useCallback(() => {
    const root = ref.current;
    const el = root && root.querySelector('[aria-checked="true"]');
    if (!el) {
      setBox(null);
      return;
    }
    const a = root.getBoundingClientRect(),
      r = el.getBoundingClientRect();
    const n = {
      x: r.left - a.left - root.clientLeft,
      w: r.width
    };
    setBox(p => p && Math.abs(p.x - n.x) < 0.01 && Math.abs(p.w - n.w) < 0.01 ? p : n);
  }, []);
  React.useLayoutEffect(measure, [value, options.length, fullWidth, size, measure]);
  React.useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro) {
      ro.observe(root);
      Array.prototype.forEach.call(root.children, c => ro.observe(c));
    }
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      if (ro) ro.disconnect();
    };
  }, [options.length, measure]);
  React.useEffect(() => {
    if (!box || live) return undefined;
    const r = requestAnimationFrame(() => setLive(true));
    return () => cancelAnimationFrame(r);
  }, [box, live]);
  const items = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const segH = s.h - s.inset * 2;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    ref: ref
  }, rest, {
    style: {
      position: 'relative',
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      gap: 2,
      padding: s.inset,
      height: s.h,
      boxSizing: 'border-box',
      borderRadius: 'var(--db-radius-pill)',
      background: 'var(--db-dove)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), box ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: s.inset,
      left: 0,
      width: box.w,
      height: segH,
      pointerEvents: 'none',
      borderRadius: 'var(--db-radius-pill)',
      background: 'var(--db-charcoal)',
      transform: 'translateX(' + box.x + 'px)',
      transition: live ? 'transform var(--db-duration-slow) var(--db-ease-in-out), width var(--db-duration-slow) var(--db-ease-in-out)' : 'none'
    }
  }) : null, items.map(it => {
    const active = it.value === value;
    const iconOnly = it.icon && !it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      role: "radio",
      "aria-checked": active,
      "aria-label": iconOnly ? it.ariaLabel || it.value : undefined,
      disabled: disabled || it.disabled,
      "data-db-press-in": true,
      onClick: () => !active && onChange && onChange(it.value),
      style: {
        ...__ds_scope.pillPadding(segH, {
          iconStart: it.icon && it.label ? s.icon : 0,
          text: !iconOnly
        }),
        flex: fullWidth ? '1 1 0' : '0 0 auto',
        minWidth: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--db-space-2)',
        border: 0,
        borderRadius: 'var(--db-radius-pill)',
        margin: 0,
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
        color: active ? 'var(--db-white)' : 'var(--db-charcoal)',
        fontFamily: 'var(--db-font-sans)',
        fontSize: s.font,
        fontWeight: 500,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        cursor: disabled || it.disabled ? 'default' : 'pointer',
        /* The label turns white and dark at the pace the pill travels, so it never goes white before the pill is under it. */
        transition: 'color var(--db-duration-slow) var(--db-ease-in-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "db-press-in",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--db-space-2)',
        transition: 'transform var(--db-duration-press) var(--db-ease-out)'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: s.icon,
      filled: active,
      style: {
        display: 'block',
        transition: 'font-variation-settings var(--db-duration-slow) var(--db-ease-in-out)'
      }
    }) : null, it.label ? /*#__PURE__*/React.createElement("span", null, it.label) : null));
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/segmented-control/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CollectionGrid.jsx
try { (() => {
const DB_PRODUCTS = [{
  id: 1,
  title: 'The Quiet Hours',
  author: 'Emily Whitmore',
  price: '$24.99',
  badge: 'New',
  ground: 'var(--db-sand)'
}, {
  id: 2,
  title: 'Every Needful Thing',
  author: 'Daniel R. Hale',
  price: '$18.99',
  badge: 'Bestseller',
  ground: 'var(--db-teal-300)'
}, {
  id: 3,
  title: 'A Year of Small Faith',
  author: 'Marisa Chen',
  price: '$21.99',
  ground: 'var(--db-clay)'
}, {
  id: 4,
  title: 'Letters to My Sons',
  author: 'Peter Alvarez',
  price: '$16.99',
  badge: 'Signed',
  ground: 'var(--db-dove)'
}, {
  id: 5,
  title: 'Come, Follow Me Companion',
  author: 'Deseret Book',
  price: '$12.99',
  ground: 'var(--db-purple-300)'
}, {
  id: 6,
  title: 'Held',
  author: 'Sarah Lindsey',
  price: '$19.99',
  ground: 'var(--db-yellow-300)'
}];
function ProductTile({
  product,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(product),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textAlign: 'left',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Book cover",
    ground: product.ground,
    style: {
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--db-shadow-md)' : 'var(--db-shadow-none)',
      transition: 'var(--db-transition)'
    }
  }), product.badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: {
      New: 'teal',
      Bestseller: 'yellow',
      Signed: 'dove',
      Preorder: 'sand'
    }[product.badge] || 'charcoal'
  }, product.badge)) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--db-font-serif)',
      fontSize: 18,
      lineHeight: 1.25,
      color: 'var(--db-display)'
    }
  }, product.title), /*#__PURE__*/React.createElement("div", {
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)',
      marginTop: 2
    }
  }, product.author)), /*#__PURE__*/React.createElement("div", {
    className: "db-body",
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, product.price));
}
function CollectionGrid({
  onOpen
}) {
  const [tab, setTab] = React.useState('New releases');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--db-max-width)',
      margin: '0 auto',
      padding: 'var(--db-space-9) var(--db-space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--db-space-6)',
      marginBottom: 'var(--db-space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "db-eyebrow",
    style: {
      color: 'var(--db-clay)'
    }
  }, "Featured"), /*#__PURE__*/React.createElement("h2", {
    className: "db-heading",
    style: {
      margin: '10px 0 0',
      fontSize: '2.25rem'
    }
  }, "On the Table This Week")), /*#__PURE__*/React.createElement(Select, {
    options: ['Newest', 'Bestselling', 'Price, low to high'],
    style: {
      width: 220
    }
  })), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['New releases', 'Scripture study', 'Youth', 'Music'],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 'var(--db-space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 'var(--db-space-5)'
    }
  }, DB_PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.id,
    product: p,
    onOpen: onOpen
  }))));
}
Object.assign(window, {
  CollectionGrid,
  ProductTile,
  DB_PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CollectionGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/EditorialBand.jsx
try { (() => {
function EditorialBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "db-on-dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--db-max-width)',
      margin: '0 auto',
      padding: 'var(--db-space-9) var(--db-space-6)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--db-space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Author portrait",
    ratio: "4 / 5",
    ground: "#4a4541"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-eyebrow",
    style: {
      color: 'var(--db-sand)'
    }
  }, "In conversation"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--db-font-serif)',
      fontSize: '2.25rem',
      lineHeight: 1.2,
      color: 'var(--db-white)',
      maxWidth: '26ch'
    }
  }, "\u201CI wrote it for the reader who needs one steady hour a week.\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "db-body",
    style: {
      margin: 0,
      color: '#cfc9c3',
      maxWidth: '46ch'
    }
  }, "Emily Whitmore on writing The Quiet Hours, keeping a Sabbath practice, and the long road to a first draft."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconAfter: "arrow-right"
  }, "Read the interview"))));
}
Object.assign(window, {
  EditorialBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/EditorialBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Footer.jsx
try { (() => {
function Footer() {
  const cols = [['Shop', ['Books', 'Scriptures', 'Music', 'Home & gifts', 'Deals']], ['Company', ['About Deseret Book', 'Store locations', 'Careers', 'Our authors']], ['Help', ['Order status', 'Shipping', 'Returns', 'Contact us']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--db-pearl)',
      boxShadow: '0 -1px 0 var(--db-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--db-max-width)',
      margin: '0 auto',
      padding: 'var(--db-space-8) var(--db-space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 'var(--db-space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--db-font-serif)',
      fontSize: 22,
      color: 'var(--db-charcoal)'
    }
  }, "Deseret Book"), /*#__PURE__*/React.createElement("p", {
    className: "db-caption",
    style: {
      margin: 0,
      color: 'var(--db-ink-muted)',
      maxWidth: '32ch'
    }
  }, "One email a week \u2014 new releases, author conversations, and quiet reading."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-2)',
      width: '100%',
      maxWidth: 340,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    placeholder: "you@example.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Sign up"))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-label",
    style: {
      color: 'var(--db-charcoal)'
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--db-space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, "\xA9 2026 Deseret Book Company. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-2)'
    }
  }, ['instagram', 'facebook', 'youtube'].map(i => /*#__PURE__*/React.createElement(IconButton, {
    key: i,
    icon: i,
    label: i,
    size: "sm"
  }))))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
function Header({
  onHome,
  cartCount
}) {
  const nav = ['Books', 'Scriptures', 'Music', 'Home & Gifts', 'Deals'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--db-white)',
      boxShadow: '0 1px 0 var(--db-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--db-charcoal)',
      color: 'var(--db-white)',
      textAlign: 'center',
      padding: '9px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-caption",
    style: {
      letterSpacing: '0.04em'
    }
  }, "Free shipping on orders over $35 \xA0\xB7\xA0 Members save every day")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--db-max-width)',
      margin: '0 auto',
      padding: '18px var(--db-space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--db-space-6)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--db-font-serif)',
      fontSize: 26,
      color: 'var(--db-charcoal)',
      whiteSpace: 'nowrap'
    }
  }, "Deseret Book"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-5)',
      flex: 1
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    className: "db-label",
    style: {
      color: 'var(--db-charcoal)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--db-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Search"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Account"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "user",
    label: "Account"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Wishlist"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Wishlist"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "cart",
    label: "Cart"
  }), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      borderRadius: 'var(--db-radius-pill)',
      background: 'var(--db-accent)',
      color: 'var(--db-white)',
      fontSize: 10,
      fontWeight: 900,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, cartCount) : null))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Hero.jsx
try { (() => {
function Placeholder({
  label,
  ratio = '3 / 4',
  ground = 'var(--db-sand)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: ground,
      borderRadius: 'var(--db-radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--db-font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--db-charcoal)',
      opacity: 0.5
    }
  }, label));
}
function Hero({
  onShop
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--db-pearl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--db-max-width)',
      margin: '0 auto',
      padding: 'var(--db-space-9) var(--db-space-6)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--db-space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-eyebrow",
    style: {
      color: 'var(--db-accent-deep)'
    }
  }, "New this season"), /*#__PURE__*/React.createElement("h1", {
    className: "db-heading",
    style: {
      margin: 0,
      fontSize: 'var(--db-text-display)',
      maxWidth: '18ch'
    }
  }, "Books That Stay With You"), /*#__PURE__*/React.createElement("p", {
    className: "db-subhead",
    style: {
      margin: 0,
      color: 'var(--db-charcoal)',
      maxWidth: 'var(--db-measure-lede)'
    }
  }, "A shelf of new releases chosen for the quiet hours \u2014 faith, family, and inspiration."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-3)',
      marginTop: 'var(--db-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onShop,
    iconAfter: "arrow-right"
  }, "Shop new releases"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Browse collections"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Hero photography",
    ratio: "4 / 3",
    ground: "var(--db-granite)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -24,
      bottom: -28,
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Featured cover",
    ground: "var(--db-clay)",
    style: {
      boxShadow: 'var(--db-shadow-lg)'
    }
  })))));
}
Object.assign(window, {
  Hero,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
function ProductDetail({
  product,
  onBack,
  onAdd
}) {
  const [fmt, setFmt] = React.useState('Hardcover');
  const [tab, setTab] = React.useState('Overview');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--db-max-width)',
      margin: '0 auto',
      padding: 'var(--db-space-7) var(--db-space-6) var(--db-space-9)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginBottom: 'var(--db-space-5)',
      paddingLeft: 0
    }
  }, "Back to books"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--db-space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-4)'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Book cover",
    ground: product.ground
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--db-space-3)'
    }
  }, ['Spread', 'Back', 'Detail'].map(l => /*#__PURE__*/React.createElement(Placeholder, {
    key: l,
    label: l,
    ratio: "1 / 1",
    ground: "var(--db-dove)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-4)',
      alignItems: 'flex-start'
    }
  }, product.badge ? /*#__PURE__*/React.createElement(Badge, {
    tone: "charcoal"
  }, product.badge) : null, /*#__PURE__*/React.createElement("h1", {
    className: "db-heading",
    style: {
      margin: 0,
      fontSize: '2.75rem'
    }
  }, product.title), /*#__PURE__*/React.createElement("div", {
    className: "db-body",
    style: {
      color: 'var(--db-ink-muted)'
    }
  }, "By ", product.author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--db-font-sans)',
      fontWeight: 200,
      fontSize: 30,
      color: 'var(--db-charcoal)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, product.price), /*#__PURE__*/React.createElement(Divider, {
    spacing: "sm",
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-label",
    style: {
      color: 'var(--db-charcoal)'
    }
  }, "Format"), /*#__PURE__*/React.createElement(Radio, {
    name: "format",
    options: ['Hardcover', 'eBook', 'Audiobook'],
    value: fmt,
    onChange: setFmt
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-3)',
      alignItems: 'center',
      marginTop: 'var(--db-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "cart",
    onClick: () => onAdd(product)
  }, "Add to cart"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Add to wishlist"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Add to wishlist",
    variant: "outline",
    size: "lg"
  }))), /*#__PURE__*/React.createElement(Card, {
    ground: "pearl",
    padding: "md",
    bordered: false,
    style: {
      marginTop: 'var(--db-space-4)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-5)',
      flexWrap: 'wrap'
    }
  }, [['truck', 'Free shipping over $35'], ['store', 'Pickup in store'], ['rotate-ccw', '30-day returns']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--db-charcoal)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "db-caption"
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 'var(--db-space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Overview', 'Details', 'Reviews'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    className: "db-body",
    style: {
      maxWidth: 'var(--db-measure-body)',
      marginTop: 'var(--db-space-4)'
    }
  }, tab === 'Overview' && 'A quiet, unhurried book about keeping faith through ordinary weeks — written in short chapters meant to be read one at a time.', tab === 'Details' && '248 pages · Hardcover · Published August 2026 · ISBN 978-1-XXXXX-XXX-X', tab === 'Reviews' && '“The kind of book you finish and immediately hand to someone else.” — Reader review')))));
}
Object.assign(window, {
  ProductDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.DB_ICONS = __ds_scope.DB_ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DIALOG_TONES = __ds_scope.DIALOG_TONES;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.TOAST_TONES = __ds_scope.TOAST_TONES;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CarouselChevronButton = __ds_scope.CarouselChevronButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CountBadge = __ds_scope.CountBadge;

__ds_ns.SubcategoryCard = __ds_scope.SubcategoryCard;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.formatPrice = __ds_scope.formatPrice;

__ds_ns.ProgressTracker = __ds_scope.ProgressTracker;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.SearchFilterBar = __ds_scope.SearchFilterBar;

__ds_ns.Drawer = __ds_scope.Drawer;


})();
