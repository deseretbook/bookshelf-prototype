/* @ds-bundle: {"format":4,"namespace":"DeseretBookDesignSystem_609afa","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"DB_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"TONES","sourcePath":"components/feedback/pop.js"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1ac7569c4992","components/core/Button.jsx":"f14f15e8385b","components/core/Card.jsx":"4841fbf52c9b","components/core/Divider.jsx":"a6879726fc4f","components/core/Icon.jsx":"f39502933569","components/core/IconButton.jsx":"a1cb3da439e9","components/core/Tag.jsx":"d8e7e90dd22e","components/core/pill.js":"e8e3da66fe81","components/feedback/Dialog.jsx":"7a36c31d98d8","components/feedback/Toast.jsx":"e7658a13aca5","components/feedback/Tooltip.jsx":"e707ef91e18a","components/feedback/pop.js":"bf7254fb329f","components/forms/Checkbox.jsx":"6368aa1b8d74","components/forms/Input.jsx":"dbfaa28d7bc7","components/forms/Radio.jsx":"4c5ae0bf97ba","components/forms/Select.jsx":"14d6c1a72182","components/forms/Switch.jsx":"37eef3b925b0","components/navigation/Tabs.jsx":"ca1ed508d67f","ui_kits/storefront/CollectionGrid.jsx":"18d93f638061","ui_kits/storefront/EditorialBand.jsx":"f456c630c3b0","ui_kits/storefront/Footer.jsx":"f4263037b03a","ui_kits/storefront/Header.jsx":"539782e42d29","ui_kits/storefront/Hero.jsx":"0a7f7c15e793","ui_kits/storefront/ProductDetail.jsx":"5fee91ff538c"},"inlinedExternals":[],"unexposedExports":[{"name":"ensurePopMotion","sourcePath":"components/feedback/pop.js"},{"name":"pillPadding","sourcePath":"components/core/pill.js"},{"name":"usePresence","sourcePath":"components/feedback/pop.js"}]} */

(() => {

const __ds_ns = (window.DeseretBookDesignSystem_609afa = window.DeseretBookDesignSystem_609afa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
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
    background: 'var(--db-red-500)',
    color: 'var(--db-white)'
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
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

/** A quiet panel: hairline border, 4px radius, shadow only when it must lift. */
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
      borderRadius: 'var(--db-radius-md)',
      border: bordered ? 'var(--db-border-hairline)' : '1px solid transparent',
      boxShadow: shadow,
      padding: pad,
      transition: 'var(--db-transition)',
      ...grounds[ground],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Material Symbols Rounded (Apache 2.0), loaded as a variable font in tokens/fonts.css.
   Any Material Symbols name renders by ligature ("shopping_bag", "favorite"); hyphens are accepted too.
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
    if (s) return new URL('assets/icons/', s).href;
  } catch (e) {}
  return 'assets/icons/';
})();

/** Material Symbols Rounded glyph. Inherits currentColor. `filled` switches the FILL axis. */
function Icon({
  name,
  size = 20,
  filled = false,
  weight = 300,
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
      fontFeatureSettings: "'liga'",
      fontVariationSettings: "'FILL' " + (filled ? 1 : 0) + ", 'wght' " + weight + ", 'GRAD' 0, 'opsz' " + opsz,
      ...style
    }
  }), glyph);
}
Object.assign(__ds_scope, { DB_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
/* The heart's drawn shape sits high in its box; inside the round button it drops 6% of the icon size to sit in the circle's visual center. */
const HEART_DY = 0.06;

/** A square-tapped, round icon-only control for toolbars and headers. */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  iconSize,
  filled = false,
  disabled = false,
  style,
  ...rest
}) {
  const box = sizes[size];
  const glyph = iconSize || (size === 'sm' ? 16 : size === 'lg' ? 24 : 20);
  const skin = {
    ghost: {
      background: 'transparent',
      color: 'var(--db-charcoal)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--db-charcoal)',
      borderColor: 'var(--db-hairline)'
    },
    filled: {
      background: 'var(--db-accent)',
      color: 'var(--db-accent-ink)',
      borderColor: 'var(--db-accent)'
    },
    inverse: {
      background: 'transparent',
      color: 'var(--db-white)',
      borderColor: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest, {
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--db-radius-pill)',
      border: '1px solid transparent',
      cursor: 'pointer',
      transition: 'var(--db-transition)',
      opacity: disabled ? 0.4 : 1,
      ...skin,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    filled: filled,
    size: glyph,
    style: icon === 'heart' || icon === 'favorite' ? {
      transform: 'translateY(' + (glyph * HEART_DY).toFixed(2) + 'px)'
    } : undefined
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/pill.js
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/pill.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--db-font-sans)',
  fontWeight: 'var(--db-weight-sans-regular)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--db-tracking-label)',
  borderRadius: 'var(--db-radius-pill)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--db-space-2)',
  border: '1px solid transparent',
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
    icon: 24
  }
};
const variants = {
  primary: {
    background: 'var(--db-accent)',
    color: 'var(--db-accent-ink)',
    borderColor: 'var(--db-accent)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--db-charcoal)',
    borderColor: 'var(--db-charcoal)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--db-charcoal)',
    borderColor: 'transparent'
  },
  dark: {
    background: 'var(--db-charcoal)',
    color: 'var(--db-white)',
    borderColor: 'var(--db-charcoal)'
  },
  inverse: {
    background: 'var(--db-white)',
    color: 'var(--db-charcoal)',
    borderColor: 'var(--db-white)'
  }
};

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
    style: {
      ...base,
      ...pad,
      ...variants[variant],
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
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
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
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
      border: selected ? 'var(--db-border-strong)' : 'var(--db-border-hairline)',
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — charcoal capsule, caption type, appears on hover or focus. */
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [shown, setShown] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px, -50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShown(true),
    onMouseLeave: () => setShown(false),
    onFocus: () => setShown(true),
    onBlur: () => setShown(false)
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      background: 'var(--db-charcoal)',
      color: 'var(--db-white)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--db-radius-sm)',
      opacity: shown ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--db-duration-fast) var(--db-ease-standard)',
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/pop.js
try { (() => {
const CSS = `
.db-pop{opacity:0;transform:translate3d(0,12px,0) scale(.96);transition:opacity 200ms var(--db-ease-standard),transform 200ms var(--db-ease-standard)}
.db-pop.is-on{opacity:1;transform:translate3d(0,0,0) scale(1);transition-duration:280ms}
.db-pop.is-on.is-bump{animation:db-bump 280ms var(--db-ease-standard)}
.db-pop-ic{animation:db-pop-ic 280ms var(--db-ease-standard) both}
.db-scrim-fx{opacity:0;transition:opacity 200ms var(--db-ease-standard)}
.db-scrim-fx.is-on{opacity:1;transition-duration:280ms}
@keyframes db-bump{0%,100%{opacity:1;transform:translate3d(0,0,0) scale(1)}40%{opacity:1;transform:translate3d(0,-2px,0) scale(1.03)}}
@keyframes db-pop-ic{0%{opacity:0;transform:scale(.6)}100%{opacity:1;transform:scale(1)}}
@media (prefers-reduced-motion:reduce){.db-pop,.db-pop.is-on{transform:none;transition:opacity 120ms linear}.db-pop.is-on.is-bump,.db-pop-ic{animation:none}}
`;

/** Injects the shared pop motion (toast + dialog) once per document. */
function ensurePopMotion() {
  if (typeof document === 'undefined' || document.getElementById('db-pop-motion')) return;
  const s = document.createElement('style');
  s.id = 'db-pop-motion';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Keeps an element mounted through its exit transition. Returns [mounted, visible]. */
function usePresence(React, open, exitMs = 200) {
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

/** Status tones shared by Toast and Dialog. Solid ground = 400, hairline = one step lighter (300). */
const TONES = {
  neutral: {
    icon: 'info',
    solid: 'var(--db-charcoal)',
    line: 'var(--db-hairline)',
    accent: 'var(--db-charcoal)'
  },
  success: {
    icon: 'check',
    solid: 'var(--db-green-400)',
    line: 'var(--db-green-300)',
    accent: 'var(--db-green-400)'
  },
  error: {
    icon: 'alert-circle',
    solid: 'var(--db-red-500)',
    line: 'var(--db-red-400)',
    accent: 'var(--db-red-500)'
  }
};
Object.assign(__ds_scope, { ensurePopMotion, usePresence, TONES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/pop.js", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal dialog: charcoal scrim, white panel, 8px radius, overlay elevation.
 * Shares the Toast's settings:
 * - `tone` (neutral | success | error): tone hairline one step lighter than the tone color,
 *   plus a tone icon beside the title. Neutral keeps the Granite hairline and no icon.
 * - Motion: panel fades in, rises 12px, and scales .96 to 1 (280ms); exits in reverse (200ms).
 *   The scrim fades with it. Reduced motion: fade only.
 * The panel stays white; solid color grounds are for toasts only.
 */
function Dialog({
  open = false,
  tone = 'neutral',
  title,
  description,
  onClose,
  footer,
  width = 480,
  children,
  style,
  className = '',
  ...rest
}) {
  __ds_scope.ensurePopMotion();
  const [mounted, visible] = __ds_scope.usePresence(React, open);
  if (!mounted) return null;
  const t = __ds_scope.TONES[tone];
  const on = visible ? ' is-on' : '';
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    className: `db-scrim-fx${on}`,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--db-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--db-space-5)',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, rest, {
    className: `db-pop${on} ${className}`,
    style: {
      background: 'var(--db-white)',
      borderRadius: 'var(--db-radius-lg)',
      border: `1px solid ${t.line}`,
      boxShadow: 'var(--db-shadow-overlay)',
      width: '100%',
      maxWidth: width,
      boxSizing: 'border-box',
      padding: 'var(--db-space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-4)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--db-space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-3)',
      alignItems: 'flex-start'
    }
  }, tone !== 'neutral' ? /*#__PURE__*/React.createElement("span", {
    className: "db-pop-ic",
    style: {
      color: t.accent,
      display: 'inline-grid',
      paddingTop: 'max(0px, calc((1.625rem * var(--db-lh-tight) - 28px) / 2))'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 28
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--db-space-2)'
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--db-font-serif)',
      fontWeight: 400,
      fontSize: '1.625rem',
      lineHeight: 'var(--db-lh-tight)',
      color: 'var(--db-display)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "db-body",
    style: {
      margin: 0,
      color: 'var(--db-ink-muted)'
    }
  }, description) : null)), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "cancel-circle",
    label: "Close",
    size: "lg",
    iconSize: 28,
    onClick: onClose,
    style: {
      color: 'rgba(58, 54, 51, 0.6)',
      flex: '0 0 auto'
    }
  }) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--db-space-3)',
      justifyContent: 'flex-end'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = 18,
  DISMISS = 40,
  H = 52,
  LINK_H = 32;

/**
 * Toast: brief confirmation, fixed bottom-center.
 * - variant "solid" (default): tone-filled pill, white text and icon, hairline one step lighter
 *   than the ground, overlay elevation. The add-to-bag confirmation uses tone="success".
 * - variant "outline": white panel, tone hairline, md shadow.
 * Motion: enters by fading in, rising 12px, and scaling .96 to 1 (280ms); exits in reverse (200ms).
 * Changing `seq` while open replays a small bump and the icon pop. Reduced motion: fade only.
 * Links: pass `link` ({ label, href } or { label, onClick }) and it renders as a small white Button
 *   with charcoal text (hairline added on the outline variant so it stays visible on white).
 * Padding follows the pill rule: icon side (h - icon) / 2, text side h / 2, dismiss side (h - 40) / 2,
 *   link side (h - 32) / 2 when the link is the last element.
 */
function Toast({
  open = true,
  tone = 'success',
  variant = 'solid',
  message,
  action,
  link,
  onDismiss,
  seq = 0,
  fixed = false,
  style,
  className = '',
  ...rest
}) {
  __ds_scope.ensurePopMotion();
  const ref = React.useRef(null);
  const wasOn = React.useRef(false);
  const [mounted, visible] = __ds_scope.usePresence(React, open);
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
  if (!mounted) return null;
  const t = __ds_scope.TONES[tone];
  const solid = variant === 'solid';
  const toast = /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "status",
    "aria-live": "polite"
  }, rest, {
    className: `db-pop${visible ? ' is-on' : ''} ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      boxSizing: 'border-box',
      height: H,
      borderRadius: 'var(--db-radius-pill)',
      padding: `0 ${onDismiss ? (H - DISMISS) / 2 : link || action ? (H - LINK_H) / 2 : H / 2}px 0 ${(H - ICON) / 2}px`,
      background: solid ? t.solid : 'var(--db-white)',
      color: solid ? 'var(--db-white)' : 'var(--db-ink)',
      border: `1px solid ${t.line}`,
      boxShadow: solid ? 'var(--db-shadow-overlay)' : 'var(--db-shadow-md)',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 15,
      maxWidth: 460,
      whiteSpace: 'nowrap',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    key: seq,
    className: "db-pop-ic",
    style: {
      color: solid ? 'var(--db-white)' : t.accent,
      display: 'inline-grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: ICON
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
      borderColor: solid ? 'var(--db-white)' : 'var(--db-hairline)',
      flex: '0 0 auto'
    }
  }, link.label) : null, action, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "cancel-circle",
    label: "Dismiss",
    size: "md",
    onClick: onDismiss,
    style: {
      color: solid ? 'rgba(255, 255, 255, 0.6)' : 'rgba(58, 54, 51, 0.6)'
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox, 2px radius, charcoal fill when checked.
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
      borderRadius: 'var(--db-radius-sm)',
      border: checked ? '1px solid var(--db-charcoal)' : 'var(--db-border-hairline)',
      background: checked ? 'var(--db-charcoal)' : 'var(--db-white)',
      color: 'var(--db-white)',
      transition: 'var(--db-transition)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      textWrap: 'pretty'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = 22,
  GAP = 8,
  LINE = 24;
const sizes = {
  md: 44,
  lg: 50
};

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
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const fieldId = id || `db-input-${Math.random().toString(36).slice(2, 8)}`;
  const Field = multiline ? 'textarea' : 'input';
  const h = sizes[size] || sizes.md;
  const iconInset = (h - ICON) / 2;
  const start = icon ? iconInset + ICON + GAP : h / 2;
  const vPad = (h - LINE) / 2;
  const boxStyle = {
    fontFamily: 'var(--db-font-sans)',
    fontSize: 'var(--db-text-body)',
    lineHeight: `${LINE}px`,
    color: 'var(--db-ink)',
    background: disabled ? 'var(--db-dove)' : 'var(--db-white)',
    border: `1px solid ${error ? 'var(--db-status-error)' : 'var(--db-hairline)'}`,
    borderRadius: multiline ? h / 2 : 'var(--db-radius-pill)',
    height: multiline ? undefined : h,
    minHeight: multiline ? h : undefined,
    padding: multiline ? `${vPad}px ${h / 2}px ${vPad}px ${start}px` : `0 ${h / 2}px 0 ${start}px`,
    boxSizing: 'border-box',
    width: '100%',
    transition: 'var(--db-transition)',
    outline: 'none',
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
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
        borderRadius: 'var(--db-radius-pill)',
        border: selected ? '1px solid var(--db-charcoal)' : 'var(--db-border-hairline)',
        background: 'var(--db-white)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--db-transition)'
      }
    }, selected ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 'var(--db-radius-pill)',
        background: 'var(--db-charcoal)'
      }
    }) : null), labelText);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = 22,
  GAP = 8;
const sizes = {
  md: 44,
  lg: 50
};

/** Native select in brand dress, pill-shaped. Padding follows the pill rule: text side h / 2, chevron side (h - icon) / 2. */
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `db-select-${Math.random().toString(36).slice(2, 8)}`;
  const h = sizes[size] || sizes.md;
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
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--db-font-sans)',
      fontSize: 'var(--db-text-body)',
      color: 'var(--db-ink)',
      background: disabled ? 'var(--db-dove)' : 'var(--db-white)',
      border: 'var(--db-border-hairline)',
      borderRadius: 'var(--db-radius-pill)',
      height: h,
      boxSizing: 'border-box',
      padding: `0 ${iconInset + ICON + GAP}px 0 ${h / 2}px`,
      width: '100%',
      transition: 'var(--db-transition)',
      outline: 'none'
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — an immediate on/off setting. Uses the lead color when on. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
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
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--db-radius-pill)',
      background: 'var(--db-white)',
      boxShadow: 'var(--db-shadow-sm)',
      transform: checked ? 'translateX(20px)' : 'translateX(0)',
      transition: 'var(--db-transition)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tabs — ALL CAPS DM Sans labels over a granite hairline, charcoal underline for the active tab.
 *  Each tab reserves the width of its bold label (hidden stacked copy), so switching tabs never shifts the row. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderBottom: 'var(--db-border-hairline)',
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
        marginBottom: -1,
        position: 'relative',
        zIndex: 1,
        borderBottom: active ? '2px solid var(--db-charcoal)' : '2px solid transparent',
        transition: 'var(--db-transition)',
        display: 'inline-grid',
        justifyItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        gridArea: '1 / 1',
        fontWeight: 'var(--db-weight-sans-black)',
        visibility: 'hidden',
        height: 0,
        overflow: 'hidden'
      }
    }, labelText), /*#__PURE__*/React.createElement("span", {
      style: {
        gridArea: '1 / 1',
        fontWeight: active ? 'var(--db-weight-sans-black)' : 'var(--db-weight-sans-regular)'
      }
    }, labelText));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

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
  ground: 'var(--db-teal-200)'
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
  ground: 'var(--db-purple-200)'
}, {
  id: 6,
  title: 'Held',
  author: 'Sarah Lindsey',
  price: '$19.99',
  ground: 'var(--db-yellow-200)'
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
    tone: product.badge === 'Bestseller' ? 'accent' : 'charcoal'
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
      borderTop: 'var(--db-border-hairline)'
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
  }), /*#__PURE__*/React.createElement(Button, null, "Sign up"))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
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
  bagCount
}) {
  const nav = ['Books', 'Scriptures', 'Music', 'Home & Gifts', 'Deals'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--db-white)',
      borderBottom: 'var(--db-border-hairline)'
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
    icon: "shopping-bag",
    label: "Bag"
  }), bagCount > 0 ? /*#__PURE__*/React.createElement("span", {
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
  }, bagCount) : null))));
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
    icon: "shopping-bag",
    onClick: () => onAdd(product)
  }, "Add to bag"), /*#__PURE__*/React.createElement(Tooltip, {
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

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.DB_ICONS = __ds_scope.DB_ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.TONES = __ds_scope.TONES;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
