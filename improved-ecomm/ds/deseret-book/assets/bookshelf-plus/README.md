# Bookshelf PLUS

The sub-brand's logo in six variants. Every file is a single-color SVG whose fill is `currentColor`, so it takes whatever color you give it.

| File | Variant | viewBox |
| --- | --- | --- |
| `bookshelf-plus-horizontal.svg` | Symbol beside the wordmark | 768 × 132 |
| `bookshelf-plus-vertical.svg` | Symbol above the wordmark | 408 × 219 |
| `bookshelf-plus-vertical-compact.svg` | Symbol above a small wordmark | 202 × 192 |
| `bookshelf-plus-wordmark.svg` | Wordmark only | 408 × 61 |
| `bookshelf-plus-symbol.svg` | Symbol only | 180 × 132 |
| `bookshelf-plus-symbol-plus.svg` | Symbol with the plus | 206 × 132 |

**Coloring.** Inline the SVG and set `color` on it or its parent (`color: var(--db-orange-400)`); the paths follow. Or use the file as a CSS mask and set the color with `background-color`, the way the system draws the social icons:

```css
.bsp-logo { aspect-ratio: 768 / 132; height: 32px; background-color: var(--db-orange-400);
  mask: url(assets/bookshelf-plus/bookshelf-plus-horizontal.svg) center / contain no-repeat; }
```

Loaded as a plain `<img>`, `currentColor` has nothing to inherit and the logo draws black.

- Use them only for Bookshelf PLUS. The usual color is Orange 400 (`db-orange-400`) on the `db-bsp-ground` or white, and white on dark grounds.
- Use one color per logo; don't outline, stretch or rearrange the parts.
- Give a logo that names the brand `alt="Bookshelf PLUS"` (or `aria-label` when inlined); a symbol next to a title that already says it is decorative (`alt=""`, `aria-hidden="true"`).
