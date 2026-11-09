# Icons

The three social marks: `instagram.svg`, `facebook-01.svg` and `youtube.svg`, the official Instagram glyph, Facebook "f" logo and YouTube icon in single-color form (drawn from Meta's and YouTube's brand resources; see `LICENSE.md`). Everything else is an icon from Material Symbols Rounded through the `Icon` component.

- Use them for the brand's social links only, at 18px in the footer, through `<Icon name="instagram" />` (and `facebook`, `youtube`).
- Their ink is `currentColor`: through `Icon` they take the text color, charcoal (`db-charcoal`) on light grounds and white (`db-white`) on dark. Shown as a plain `<img>` they render black.
- Never redraw, stretch, outline or recolor them beyond a single ink; each owner's brand guidelines govern their use.
- The bundle finds this folder on its own. Only if you host the icons elsewhere, set `window.DB_ICON_BASE` to their URL before loading `components/bundle.js`.
