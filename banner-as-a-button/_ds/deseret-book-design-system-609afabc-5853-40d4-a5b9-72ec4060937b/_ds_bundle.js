/* @ds-bundle: {"format":4,"namespace":"DeseretBookDesignSystem_609afa","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"DB_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1ac7569c4992","components/core/Button.jsx":"6ec115ddbfee","components/core/Card.jsx":"4841fbf52c9b","components/core/Divider.jsx":"a6879726fc4f","components/core/Icon.jsx":"dd1e0a4f0710","components/core/IconButton.jsx":"052ec3d026b6","components/core/Tag.jsx":"7e12b8317228","components/feedback/Dialog.jsx":"a6b5636db1f8","components/feedback/Toast.jsx":"9a875c0bc462","components/feedback/Tooltip.jsx":"e707ef91e18a","components/forms/Checkbox.jsx":"cee1d08e5d63","components/forms/Input.jsx":"f58a7be14448","components/forms/Radio.jsx":"4c5ae0bf97ba","components/forms/Select.jsx":"f7877a1616ca","components/forms/Switch.jsx":"37eef3b925b0","components/navigation/Tabs.jsx":"10f6bfd1ec57","ui_kits/storefront/CollectionGrid.jsx":"18d93f638061","ui_kits/storefront/EditorialBand.jsx":"f456c630c3b0","ui_kits/storefront/Footer.jsx":"f4263037b03a","ui_kits/storefront/Header.jsx":"539782e42d29","ui_kits/storefront/Hero.jsx":"0a7f7c15e793","ui_kits/storefront/ProductDetail.jsx":"5fee91ff538c"},"inlinedExternals":[],"unexposedExports":[]} */

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
/* Vendored Lucide glyph bodies (lucide-static v0.487.0, ISC). Source SVGs also
   live in assets/icons/ — add a glyph by pasting its inner markup here. */
const DB_ICONS = {
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /> <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "shopping-bag": "<path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\" /> <path d=\"M3 6h18\" /> <path d=\"M16 10a4 4 0 0 1-8 0\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />",
  "truck": "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\" /> <path d=\"M15 18H9\" /> <path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\" /> <circle cx=\"17\" cy=\"18\" r=\"2\" /> <circle cx=\"7\" cy=\"18\" r=\"2\" />",
  "store": "<path d=\"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7\" /> <path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\" /> <path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4\" /> <path d=\"M2 7h20\" /> <path d=\"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7\" />",
  "rotate-ccw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /> <path d=\"M3 3v5h5\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\" /> <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\" /> <line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\" />",
  "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\" />",
  "youtube": "<path d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\" /> <path d=\"m10 15 5-3-5-3z\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  "alert-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />"
};

/** Lucide glyph rendered inline so it inherits currentColor. Substituted set — see readme ICONOGRAPHY. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const body = DB_ICONS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false"
  }, rest, {
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: body ? {
      __html: body
    } : undefined
  }));
}
Object.assign(__ds_scope, { DB_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

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
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: 'var(--db-text-caption)',
    padding: '8px 16px'
  },
  md: {
    fontSize: 'var(--db-text-label)',
    padding: '12px 24px'
  },
  lg: {
    fontSize: 'var(--db-text-body)',
    padding: '16px 32px'
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

/** The brand's enclosed-shape button: DM Sans Regular, ALL CAPS, pill. */
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest, {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 16
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 20 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};

/** A square-tapped, round icon-only control for toolbars and headers. */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const box = sizes[size];
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
    size: size === 'sm' ? 16 : size === 'lg' ? 24 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A quiet, selectable category chip: hairline outline, sentence case. */
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
      padding: '7px 12px',
      borderRadius: 'var(--db-radius-pill)',
      border: selected ? 'var(--db-border-strong)' : 'var(--db-border-hairline)',
      background: selected ? 'var(--db-charcoal)' : 'transparent',
      color: selected ? 'var(--db-white)' : 'var(--db-charcoal)',
      cursor: 'pointer',
      transition: 'var(--db-transition)',
      ...style
    }
  }), children, removable ? /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    role: "button",
    "aria-label": "Remove",
    style: {
      opacity: 0.7,
      fontSize: '0.9em',
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal dialog — charcoal scrim, white panel, 8px radius. */
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--db-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--db-space-5)',
      zIndex: 100,
      animation: `db-fade var(--db-duration-base) var(--db-ease-standard)`
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      background: 'var(--db-white)',
      borderRadius: 'var(--db-radius-lg)',
      boxShadow: 'var(--db-shadow-overlay)',
      width: '100%',
      maxWidth: width,
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
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
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
const tones = {
  neutral: {
    border: 'var(--db-hairline)',
    icon: 'info',
    color: 'var(--db-charcoal)'
  },
  success: {
    border: 'var(--db-green-400)',
    icon: 'check',
    color: 'var(--db-green-400)'
  },
  error: {
    border: 'var(--db-red-500)',
    icon: 'alert-circle',
    color: 'var(--db-red-500)'
  }
};

/** Toast — a brief confirmation on a white panel with a hairline and warm shadow. */
function Toast({
  tone = 'neutral',
  message,
  action,
  onDismiss,
  style,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--db-space-3)',
      background: 'var(--db-white)',
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--db-radius-md)',
      boxShadow: 'var(--db-shadow-md)',
      padding: '12px 12px 12px 16px',
      maxWidth: 460,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "db-body",
    style: {
      flex: 1
    }
  }, message), action, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

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

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox, 2px radius, charcoal fill when checked. */
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
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field with the brand's uppercase label and hairline box. */
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
  const boxStyle = {
    fontFamily: 'var(--db-font-sans)',
    fontSize: 'var(--db-text-body)',
    lineHeight: 'var(--db-lh-body)',
    color: 'var(--db-ink)',
    background: disabled ? 'var(--db-dove)' : 'var(--db-white)',
    border: `1px solid ${error ? 'var(--db-status-error)' : 'var(--db-hairline)'}`,
    borderRadius: 'var(--db-radius-md)',
    padding: icon ? '11px 14px 11px 42px' : '11px 14px',
    width: '100%',
    transition: 'var(--db-transition)',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined
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
      alignItems: 'center'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      color: 'var(--db-ink-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
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
/** Native select in brand dress — chevron drawn with the Lucide glyph. */
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
      borderRadius: 'var(--db-radius-md)',
      padding: '11px 40px 11px 14px',
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
      right: 14,
      color: 'var(--db-charcoal)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
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
/** Tabs — ALL CAPS DM Sans labels over a granite hairline, charcoal underline for the active tab. */
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
        fontWeight: active ? 'var(--db-weight-sans-black)' : 'var(--db-weight-sans-regular)',
        color: active ? 'var(--db-charcoal)' : 'var(--db-ink-muted)',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: '0 0 var(--db-space-3)',
        marginBottom: -1,
        borderBottom: active ? '2px solid var(--db-charcoal)' : '2px solid transparent',
        transition: 'var(--db-transition)'
      }
    }, labelText);
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

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
