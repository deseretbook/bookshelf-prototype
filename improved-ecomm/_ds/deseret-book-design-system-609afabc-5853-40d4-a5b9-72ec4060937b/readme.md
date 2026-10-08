# Deseret Book Design System

The master brand of **Deseret Book** — a heritage publisher and retailer serving a Latter-day Saint audience — expressed as tokens, components, and full-screen kits. The brand voice is trusted, steady, warm, and thoughtful, and the visual system mirrors that: warm neutrals, a wide but low-contrast color range, a serif that feels rooted without feeling dated, and layouts that read as intentional rather than busy.

## Sources

Everything here derives from one uploaded source:

- `uploads/deseret-book-brand.skill` — an Agent Skill bundle, unpacked to `uploads/extracted/`:
  - `SKILL.md` — brand overview, workflow, quick reference, hard rules
  - `references/color.md` — corporate + variable palettes, combining rules, WCAG thresholds
  - `references/typography.md` — four typefaces, weight limits, hierarchy table, typesetting, text conventions
  - `references/composition.md` — the Intentional Design Scale, layout habits, mark placement, clear space, minimum sizes
  - `assets/tokens.css` — the palette, font stacks, type scale, and role classes (`.db-eyebrow` … `.db-button`)
  - All content traces to the **2026 Deseret Book Visual Style Guide** (sections 4, 5, and composition guidance). That guide itself was not provided.

**Not provided, and therefore not represented here:** logo/emblem/monogram art, photography, illustration, product front-end code, Figma files, screenshots of deseretbook.com, or slide templates. See CAVEATS.

### Scope: master brand only
Sub-brands (Sweet Retreat), partner brands (Shadow Mountain), and individual products carry their own native identities. If the work is about something Deseret Book *makes or carries* rather than about Deseret Book itself, use that thing's system instead. When unsure, the master brand is the safe default.

### Products represented
The brand guide describes surfaces rather than named apps: web pages and landing pages, React/app UI, email and presentation templates, banners, and social graphics. This system builds two of those as kits — a **retail storefront** web surface and a **marketing email** — and flags them as brand *applications*, not recreations of live Deseret Book products.

---

## Content fundamentals

**Voice.** Trusted, steady, warm, thoughtful. Never breathless, never salesy, never cute. The reader is treated as an adult with a real interior life; the brand is the calm shopkeeper who knows the shelves.

**Person.** Speak to *you* ("Books that stay with you", "One email a week", "Send me new-release emails"). The company appears as *we* only where a promise is made ("We send one email a week."). Avoid *I*.

**Casing.** Headings take **title case** when they are not complete sentences and carry no end punctuation — "Books That Stay With You", "On the Table This Week". Headings take **sentence case** when they are complete sentences, with normal punctuation. Subheads are always sentence case, written as full sentences: "A shelf of new releases, chosen for the quiet hours." Eyebrows, labels, and buttons are ALL CAPS: "NEW THIS SEASON", "ADD TO BAG".

**Punctuation is house style, and the audience notices.**
- Smart quotes always — &ldquo;the quiet hours&rdquo;, don&rsquo;t. Straight quotes are for feet and inches only.
- Oxford comma always: "Faith, Family, and Inspiration." The one nuance: drop the serial comma when the last two items form a single category — "books, journals, and art and home decor".
- En dash for ranges (pages 12&ndash;34), no spaces. Em dash for a set-off clause **with a space on each side** — house style, unlike most editorial guides.
- Ellipsis is a single glyph &hellip; with a space before and after unless it meets a quote.
- Ampersand only in headlines, titles, and tight space — never in body copy. In a list it replaces the final comma and conjunction: "Faith, Family & Inspiration".

**Length and rhythm.** Short declaratives. Body paragraphs run two to four sentences. Copy earns its place: no filler, no stacked adjectives, no exclamation marks. Prices and dates are plain ("$24.99", "Published August 2026").

**No emoji.** The brand's tone and audience rule them out; nothing in the guide sanctions them. Icons carry the semantic weight instead.

**Example set.**
| Role | On-brand |
|---|---|
| Eyebrow | NEW THIS SEASON |
| Heading (title case) | Books That Stay With You |
| Subhead (sentence) | A shelf of new releases, chosen for the quiet hours. |
| Body | Three new titles arrived this week — one for scripture study, one for the family shelf, and one for the reader who needs a steady hour. |
| Button | SHOP NEW RELEASES |
| Violator | BESTSELLER |
| Off-brand | "Shop our AMAZING new drops!! 🔥" |

---

## Visual foundations

**The governing idea is the Intentional Design Scale.** Before any color or type choice, place the project: **Restrained** (sacred, legal, evergreen, templates hosting other content), **Measured** (internal, instructional, professional-with-warmth), **Expressive** (campaigns, seasonal, social, launches), **Bold** (statement moments). Most work is Measured or Expressive. The range decides how much of the toolkit opens — it is the one decision that shapes everything after.

**Color.** Two palettes working together. The **corporate neutrals** are the canvas: White (default ground), Pearl `#f7f4f0` (warm ground), Dove, Granite (hairlines), Sand, Clay, Charcoal `#3a3633` (the preferred dark — warmer than black, used for dark grounds, marks, and display type), and Pure Black reserved for body copy where maximum contrast helps. The **variable palette** is the paint: 8 hues × 5 values, deliberately spanning wide hue and narrow value so no color shouts over another. Rules of thumb: one neutral ground plus **one** lead variable color; expand within a hue family before adding a second hue; when hues do mix, one clearly leads. Gradients and patterns only between related hues — never warm-to-cool. WCAG 2.2 AA throughout (4.5:1 normal, 3:1 large and non-text). Max one or two grounds per piece.

**Type.** Lora (Regular 400 / Bold 700 only) for headlines and display; DM Sans (ExtraLight 200 / Regular 400 / Black 900 only) for everything else — eyebrow, subhead, body, caption, label, button. Fraunces and Josefin Sans are accent faces: one per piece, each pairs with Lora + DM Sans, **never with each other**. Heading ≈300% of body, subhead ≈200%. Leading 1.2 for display and print, 1.5 for on-screen body. Tracking 0 everywhere except eyebrows at 0.3em. Flush left by default; centered only for a formal moment; **never justified**. No faux weights, no distortion, no strokes/outlines/shadows on type, no type on a path, no opacity-as-hierarchy.

**Spacing and layout.** A 4px interface scale (4 → 128) plus the brand's **14.4pt baseline grid** for editorial and multi-page work (body 12/14.4, subhead 24/28.8, heading 36/43.2). Page max width 1240px; body measure ~68ch, lede ~46ch. White space carries weight in every range — space is a compositional tool, not leftover room. Sections breathe at 96px vertical rhythm. Structured, not rigid.

**Backgrounds.** Flat warm grounds, full stop: White, Pearl, Dove, Sand, or Charcoal. No hand-drawn illustration system, no repeating pattern or texture library, and no decorative gradients were provided — so none are invented here. Photography, when present, sits full-bleed or in a panel with a 4px radius and is left to carry the warmth. Texture and pattern *are* sanctioned at Expressive and Bold ranges, but only from real brand art once it exists.

**Imagery vibe.** Warm-cast, natural light, unhurried — matching Sand/Clay/Pearl rather than cool blue-grays. Documentary rather than staged; no heavy grain, no duotone, no black-and-white treatment defined by the guide. **No imagery was supplied**, so every image in this system is a labeled placeholder.

**Type over imagery.** Use the charcoal **protection gradient** (`--db-protect`, bottom-up, 0.72 → 0) rather than a blur or a translucent capsule. If type is not effortless to read, change the background — that is a guide rule, not a preference.

**Corner radii.** Near-square surfaces: 0 / 2px (checkboxes, badges-square) / 4px (cards, panels, media) / 8px (dialogs, large media). Fully pill (999px) is reserved for **buttons, chips, tags, and switches** — the guide's "enclosed in a shape". All single-line inputs (Input, Select) and toasts are pills. Textareas use a fixed corner radius of h / 2 with the pill's side padding, so they match at rest and keep rounded corners, not a pill, when resized.

**Pill padding rule.** Every pill (radius 999px) derives its padding from its height `h` (helper: `components/core/pill.js` → `pillPadding(h, { iconStart, iconEnd, text })`):
- Icon side: (h − icon) / 2, equal on all sides of the icon. Icon-only pills are square.
- Text side: h / 2, always larger than the top and bottom padding.
- Icon + text: each side follows its own rule, based on where the icon and the text sit.
- Height is set explicitly; vertical padding is 0.

Heights: Button 32 / 40 / 48 · Tag 28 · Input and Select 44 / 50 · Toast 52.

**Button text is one setting at every size:** DM Sans Regular (400) for every button and variant, ALL CAPS, label size (`--db-text-label`), label tracking. Size changes height, padding, and icon size only, never the type. Button icons: 18 / 20 / 24px for sm / md / lg.

**Button width.** Buttons hug their content by default. When the layout calls for it (mobile CTAs, dialog footers, form submits), set `fullWidth` to fill the container. Icon-only buttons are always square.

**Cards.** A hairline Granite border, 4px radius, flat ground (White, Pearl, Dove, Sand, or Charcoal), no shadow by default. Shadow is the exception, not the resting state. Never a colored left border.

**Borders and rules.** Granite 1px hairlines do the structural work. A charcoal 1px rule appears only where separation is deliberate; a 2px lead-color rule (~64px wide) marks a section start.

**Elevation.** An extension — the guide defines none. Shadows are warm (charcoal-cast, never blue-black) and low: `sm` 0 1px 2px /6%, `md` 0 2px 8px /8%, `lg` 0 12px 32px /12%, `overlay` 0 24px 64px /22%. Dialog scrim is charcoal at 55%.

**Transparency and blur.** Used sparingly and only for function: the dialog scrim and the image protection gradient. No frosted-glass panels, no translucent nav, no blurred backdrops — they would undercut the flat, printed feel.

**Animation.** An extension, kept quiet: 120 / 180 / 280ms with `cubic-bezier(0.2, 0, 0, 1)`. Fades and small translations only: ≤4px for controls, ≤12px for entering overlays (toast, dialog). Toast and Dialog share one motion (`components/feedback/pop.js`): enter 280ms, opacity 0 → 1, rise 12px, scale .96 → 1; exit reverses in 200ms; the scrim fades with the dialog; a repeat toast confirmation bumps 1 → 1.03. Reduced motion: opacity only, 120ms. No bounce, no spring, no looping attention-getters; `prefers-reduced-motion` zeroes all durations.

**Hover states.** Fills deepen one value step (accent 400 → 500); outlined and ghost controls pick up a charcoal border or a subtle Dove wash; links move from teal to charcoal; product tiles lift 4px and gain the `md` shadow. Never brighten, never change hue on hover.

**Press states.** `transform: scale(0.98)` with the deepened fill held. No ripple.

**Focus states.** A 2px charcoal outline at 2px offset (white on dark grounds). Always visible — never removed.

**Disabled states.** `opacity: 0.4` and pointer events off; no gray repaint.

**Layout fixtures.** The storefront header is sticky (announcement bar + nav, hairline bottom); toasts are fixed bottom-center; dialogs center in a scrim.

**Toast and Dialog.** Same structure: shared tones (neutral / success / error), tone hairline one step lighter than the tone color, tone icon, overlay elevation, shared motion. Each keeps its own color: the toast is a solid tone ground with white text (or `outline` on white); the dialog panel always stays white with a Lora title, and shows the tone only in its hairline and title icon. Solid color grounds are for toasts only. A link inside a toast is always a small (32px) white pill Button with charcoal text, never an underlined text link. Close and dismiss buttons on toasts and dialogs use the `cancel-circle` glyph at 60% opacity: white on solid toasts, charcoal on white grounds (dialog panel, outline toast) so it stays visible. Nothing else pins to the viewport.

---

## Iconography

**Icon set: Material Symbols Rounded** (Apache 2.0), loaded from Google Fonts in `tokens/fonts.css` as a variable font: weight 300, optical size matched to the icon size, FILL 0 (outline) or 1 (filled). Use the `Icon` component with any Material name (`<Icon name="menu_book" />`, `<Icon name="favorite" filled />`). Short names (`shopping-bag`, `x`, `heart`, `alert-circle`…) resolve through `DB_ICONS`. In plain HTML: `<span style="font-family:'Material Symbols Rounded';font-size:20px;font-variation-settings:'FILL' 0,'wght' 300,'opsz' 20">search</span>`. The social marks (Instagram, Facebook, YouTube) aren't in Material Symbols and use SVGs in `assets/icons/`.

Usage rules as applied here:
- Sizes: use the size scale below, matched to the adjacent type size.
- Single color — charcoal on light grounds, white on dark, lead color only when the icon is the meaning (status).
- **Outline at rest, filled when active.** Icons in an active state use the filled version (`<Icon filled />`, `<IconButton filled />`). Decide the fill from how the icon is used, the context, and the feedback given to the user:
  - Fill when the icon reports a state the user turned on or is currently in: a wishlisted heart, a saved bookmark, the current nav item or tab, a selected rating star, an applied filter.
  - Fill as feedback the moment an action takes effect (adding to the wishlist fills the heart), and return to outline when it's undone.
  - Keep outline for icons that only trigger an action or label content: search, close, arrows, chevrons, plus and minus, menu, and icons next to text.
  - Status icons in Toast and Dialog may be filled, because they are feedback.
  - Same glyph in both states; never swap to a different icon to show it's active. Don't mix outline and filled for unrelated icons in one row.
- Icons never stand alone as the only label for a destructive or ambiguous action; pair with a `Tooltip` or visible text.
- **No emoji, ever.** No decorative Unicode glyphs as icons either; the removable-Tag dismiss uses the `close` icon at 16px.
- Brand marks are not icons: they never appear inside an icon slot, and never in multiple colors.

**Icon size scale.** Seven sizes: 14 / 16 / 18 / 20 / 22 / 24 / 28px.

- **14px: small inline icons next to text.** Plus and minus buttons in the bag drawer, bag page and checkout. Arrow-right on rows: "Shop all" links, menu-drawer rows, account links, the card list. Arrow-left on the product page "back to category" link. Truck and check icons in the free-shipping bar. Gift checkbox tick in checkout.
- **16px: inline icons in controls and accordions.** Chevron-down on accordions (menu drawer, footer, filters). Chevron-left in the checkout "Back" button. Thumbnail scroll arrows on the product page gallery. Plus and minus buttons on the product page. Personalization checkbox ticks and step checks, plus the error icon. Store icon in the store picker. Arrow-right on the Bookshelf Plus row in the account drawer.
- **18px: social icons and the wishlist heart.** Facebook and Instagram icons in the footer. Wishlist heart button on the product page.
- **20px: header actions and search.** Account and bag icons in the header. Search icon, both open and closed. Product page gallery arrows (previous/next).
- **22px: header and drawer buttons.** Menu (hamburger) button. Close button on the menu, bag and account drawers.
- **24px: dialogs and confirmation.** Close button on the personalization and "Almost There" dialogs. Check icon on the order confirmation in checkout.
- **28px: empty states.** Bag, wishlist and "order placed" empty-state icons.

The star rating uses 13px. It's a separate star component, not the icon component.

Design-system components on the same scale: Button icons 18 / 20 / 24 (sm / md / lg), Input and Select icons 22, Tag dismiss 16, Dialog status and close icons 28.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front matter, for use in Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (Google Fonts for Lora, DM Sans, Fraunces, Josefin Sans) · `colors.css` (corporate + variable palettes, semantic aliases, `.db-on-dark` scope) · `typography.css` · `spacing.css` · `surfaces.css` (radii, borders, shadows, scrim, protection gradient) · `motion.css` · `roles.css` (the `.db-*` role classes plus link defaults).

**`components/`** — 16 primitives, each with `.jsx`, `.d.ts`, and `.prompt.md`:
- `core/` — **Button**, **IconButton**, **Icon**, **Card**, **Badge** (the guide's *violator*), **Tag**, **Divider**
- `forms/` — **Input** (incl. multiline), **Select**, **Checkbox**, **Radio**, **Switch**
- `navigation/` — **Tabs**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**

*Intentional additions.* The brand guide defines no component inventory, so this is the standard primitive set sized to the brand's needs. Two entries are deliberate additions worth naming: **Icon**, a wrapper for the substituted Lucide set (the guide has no icons at all), and **Divider**, which promotes the guide's Granite hairline into a component because rules do so much of the structural work here. **Badge** is not an invention — it implements the *Violator* role from the guide's type hierarchy.

**`guidelines/`** — 21 specimen cards feeding the Design System tab, grouped **Colors** (corporate neutrals, warm ramp, cool ramp, semantic aliases, accessible pairings), **Type** (Lora, DM Sans weights, hierarchy in use, caps roles, accent faces, don'ts), **Spacing** (scale, baseline grid, space in use, radii, elevation), **Brand** (type-set wordmark, Intentional Design Scale, hairlines, type over imagery, motion and states).

**`ui_kits/`**
- `storefront/` — interactive retail web surface: header, hero, collection grid with tabs, dark editorial band, product detail, footer. Click a cover → product page → add to bag → dialog → toast. Marked as a **starting point**.
- `email/` — Restrained 600px table-based marketing email, send-ready.

**`assets/`** — `icons/` holds SVGs for the three social marks. No logo files were provided; see `assets/README.md` — the wordmark is set in Lora until real art arrives.

**`uploads/extracted/`** — the unpacked source brand skill, kept for reference.

---

## CAVEATS

1. **No logo or brand-mark art.** Nothing was drawn or reconstructed. "Deseret Book" is set in Lora Regular charcoal wherever a mark belongs. Please supply `logo.svg`, `wordmark.svg`, `emblem.svg`, and `monogram.svg`.
2. **Icons: Material Symbols Rounded**, loaded from Google Fonts. Only the three social marks use vendored SVGs.
3. **No photography, illustration, pattern, or texture.** All imagery is a labeled placeholder; nothing was generated. The Expressive and Bold ranges of the scale can't be shown honestly without real brand art.
4. **Fonts load from Google Fonts.** All four brand faces are officially there, so no substitution was needed and no binaries are vendored. If you self-host, replace `tokens/fonts.css` with local `@font-face` rules.
5. **The UI kits are brand applications, not product recreations.** No deseretbook.com code, Figma file, or screenshots were provided, so nav taxonomy, product-card anatomy, and merchandising modules are inferred from the brand rules alone.
6. **No slide template** was provided, so no sample deck was built. Say the word and one gets made (the guide treats presentation templates as Restrained).
7. **Extensions clearly marked:** elevation/shadow, motion, radii, status colors, and interaction states are not in the style guide — they were authored to match its restraint and are flagged in `tokens/surfaces.css`, `tokens/motion.css`, and above.
