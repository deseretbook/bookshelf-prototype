# Project rules

## Pill padding (design-system rule)
Applies to every pill (border-radius 999px): buttons, chips, tags, inputs, search fields, toasts, badges with content. Padding scales with pill height `h`.
- Icon side: padding = (h − icon size) / 2, equal on all sides of the icon. Icon-only pills are square (width = h).
- Text side: padding = h / 2 (always larger than the top/bottom padding).
- Icon + text in one pill: use the icon rule on the icon's side and the text rule on the text's side, e.g. icon left, text right → `padding: 0 calc(h/2) 0 calc((h − icon)/2)`.
- Set height explicitly and vertical padding to 0; the height controls the vertical space.
