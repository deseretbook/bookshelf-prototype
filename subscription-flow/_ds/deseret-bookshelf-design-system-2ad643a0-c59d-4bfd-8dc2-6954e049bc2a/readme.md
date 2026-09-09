# Deseret Bookshelf+ Design System

An iOS-native design system for **Deseret Bookshelf+**, a reading and audiobook app for faith-based (Latter-day Saint) literature. The system is built on Apple's iOS Human Interface foundations — SF-style typography, system colors, translucent materials, grouped lists — with a custom **teal brand** layer and three switchable brand tint modes.

> **This is a faithful extraction of the source Figma kit, not a from-memory rebuild.** Token values, type scale, radii, brand colors, and component specs are copied verbatim from the file. Where the source uses proprietary Apple assets (SF Pro fonts, SF Symbols) that cannot be shipped, the nearest freely-licensable substitute is used and flagged (see Iconography and the substitution note below).

## Source
- **Figma:** "iOS Design Systems.fig" (mounted, whole file in scope) — 90+ pages, 2,569 component families, 1,300 Figma Variables across 15 collections, ~192 SF Symbol glyphs. Brand assets (Deseret & Bookshelf+ logos, wordmarks, company avatar, reading-category illustrations) are real vectors from the file.
- No external codebase or slide template was provided.

## Brand at a glance
- **Voice:** reverent, warm, invitational, literate.
- **Primary color:** Deseret teal `rgb(12,149,139)` (`--brand`).
- **Brand tint modes:** Deseret (teal, default), Bookshelf (orange), VIP (cyan) — via `[data-brand="…"]`.
- **Type:** iOS system faces (SF Pro Display/Text) for UI; **New York**-style serif for long-form reading; DM Mono for metadata.

---

## CONTENT FUNDAMENTALS
How Bookshelf+ writes copy (drawn from the file's real UI strings and brand-doc text):

- **Tone:** dignified but friendly, never casual-flippant and never emoji. It speaks the way a thoughtful librarian would — inviting, unhurried, respectful of the material.
- **Person:** addresses the reader as **you** ("Continue where you left off", "Titles you download will appear here"). App speaks about itself in third person by product name ("Deseret Bookshelf+").
- **Casing:** **Title Case** for navigation, buttons, and section headers ("Continue Reading", "New in Bookshelf+", "Reading Goals"). Sentence case for body, descriptions, and helper text.
- **Buttons/CTAs:** short verb-first — "Read Now", "Start Reading", "See All", "Sample", "Download".
- **Labels:** concrete and content-oriented — "Chapter 12 · The Breadth of the Atonement", "18 min left", "62%".
- **Brand naming:** the file distinguishes the *logo* (mark + wordmark, for reinforcement surfaces), the *brand mark* (icon alone, for everyday UI), and the *wordmark* (text). "Most app interfaces should use the logo icon; the wordmark is for brand-reinforcement surfaces."
- **No emoji, no exclamation-heavy hype, no slang.** Numbers and status are stated plainly.

## VISUAL FOUNDATIONS
- **Color:** iOS system palette (labels as opacity-based grays on black/white; translucent fills; opaque + non-opaque separators) plus the teal brand ramp. Semantic status uses iOS system green/orange/red/blue. Max one or two brand colors on screen; color is used sparingly against generous neutral space. Imagery/covers skew rich and saturated (jewel teals, indigos, warm browns) against a light `rgb(242,242,247)` grouped background.
- **Type:** SF Pro Display for titles/large text, SF Pro Text for body/UI, at the exact iOS scale (Large Title 34/41 → Caption 2 11/13). Long-form reading switches to a **serif** (New York) on a warm sepia page. Metadata (timers, page counts, percentages) uses **DM Mono**.
- **Spacing:** 4-pt base scale (2/4/8/12/16/20/24/32/40/48). Screen gutters are 16px; cards pad 16px; list rows are 44px minimum height.
- **Corner radii:** buttons are **pill** (fully rounded) by default with a 12px "rounded rectangle" alternative; cards use 16px (`--radius-xl`); sheets use 20px (`--radius-2xl`); control fills use 8px.
- **Cards:** elevated white (`--bg-elevated`) surfaces, 16px radius, soft ambient shadow (`--shadow-sm/md`) — **no** colored left-border accents, **no** heavy gradients as decoration. A hairline `inset` border variant exists for flat contexts.
- **Backgrounds:** solid iOS system backgrounds (light: white / `rgb(242,242,247)`). No repeating patterns or textures except the reader's sepia page. The Discover hero and category tiles use restrained brand-family gradients/solids only.
- **Materials / blur:** navigation bars, tab bars, toolbars, menus, alerts and banners use the iOS **translucent blur material** (`backdrop-filter: saturate(180%) blur(20-30px)` over an 80% surface). This is the system's signature depth cue — used for chrome that floats over content, not for content itself.
- **Elevation:** four shadow tiers — `--shadow-sm` (cards), `--shadow-md` (floating cards/banners), `--shadow-lg` (modals), `--shadow-menu` (menus/popovers, darkest).
- **Borders:** hairlines are 0.5px in `--separator-nonopaque` (list dividers) or `--separator-opaque`. Selected controls use a 2px brand border.
- **Motion:** iOS spring-like easing `--ease-ios` cubic-bezier(0.32,0.72,0,1) for positional moves (segmented thumb, toggle knob, sheet slide); standard ease for color/opacity. Durations 150/250/400ms. No bounce beyond the spring curve, no gratuitous animation.
- **Hover / press:** iOS is touch-first — press states shrink slightly (`scale(0.92–0.97)`) and/or reduce opacity; disabled drops to 0.4 opacity. There is no color-darkening hover convention (hover isn't a primary input); web recreations may add a subtle `filter` darken.
- **Transparency & blur:** used for floating chrome and overlays; content surfaces stay opaque. Dimmed scrims behind modals are `rgba(0,0,0,0.2–0.32)`.
- **Imagery vibe:** warm, reverent, human; book covers are rich and saturated; photography (where used) is warm-toned, not cold or high-contrast b&w.

## ICONOGRAPHY
- The source uses **Apple SF Symbols** (a proprietary variable icon font, ~192 glyphs in the kit) plus **country flags** and **social/platform brand icons**.
- **SF Symbols cannot be extracted or shipped** (they are font glyphs with no vector geometry in the file, and are Apple-proprietary). **Substitution:** the `Icon` component renders the same vocabulary via **Material Symbols Rounded** (Google, freely licensable, loaded from Google Fonts) — the closest widely-available rounded single-weight system icon set. `Icon` maps SF Symbol names (`heart`, `chevron.right`, `book.fill`) onto Material ligatures; unknown names fall through as Material ligatures. **Flag:** if you need pixel-exact SF Symbols, run on Apple hardware with the real font, or license SF Symbols directly.
- Icons are line-style by default with a `fill` variant (used for active tab items, filled hearts/bookmarks). Weight and optical size track the glyph size. Icons inherit `currentColor`.
- **No emoji** are used anywhere in the brand. Unicode is not used as iconography.
- Real brand vector assets copied from the file live as components: `LogoDeseretBrandMark`, `LogoDeseretDarkMode`, `LogoBookshelfBrandmarkLight`, `LogoBookshelfLogoDark`, `AvatarCompanyIcon`, and `Illustration` (reading-category art).

---

## Components
Reusable primitives (namespace `window.DeseretBookshelfDesignSystem_2ad643`):

- **Icons** — `Icon`
- **Buttons** — `Button`, `IconButton`
- **Forms & Controls** — `SegmentedControl`, `Toggle`, `Checkbox`, `Slider`, `Stepper`, `TextField`, `SearchField`
- **Data Display** — `Tag`, `Badge`, `Avatar`, `Card`, `ListRow`, `ProgressBar`, `ActivityIndicator`, `PageControl`, `ProgressRing`, `Rating`, `Disclosure`, `SectionHeader`, `Gauge`, `SwipeAction`
- **Navigation** — `NavigationBar`, `TabBar`, `Toolbar`, `Sidebar`
- **Overlays & Feedback** — `Alert`, `ActionSheet`, `Sheet`, `Menu`, `Popover`, `Toast`, `Tooltip`, `Banner`, `EmptyState`, `PopupButton`, `ActivityView`, `Callout`
- **Pickers** — `Picker`, `DatePicker`, `ColorPicker`
- **Media** — `MiniPlayer`
- **System** — `StatusBar`, `Widget`, `Keyboard`, `FaceIDPrompt`, `NumericKeypad`
- **Brand assets** — `LogoDeseretBrandMark`, `LogoDeseretDarkMode`, `LogoBookshelfBrandmarkLight`, `LogoBookshelfLogoDark`, `AvatarCompanyIcon`, `Illustration`

### Scope & consolidation
The source is the full Apple iOS UI kit (2,569 Figma "component families") re-skinned for Deseret Bookshelf+. The vast majority of those families are **internal `_`-prefixed helper sub-parts and per-mode / per-size / per-platform variant duplicates** of the same public control (e.g. dark/light/iPad/iPhone copies of one keyboard key, hundreds of country-flag and social-icon variants, dozens of "_Swatch base" instances). This system implements the **complete public iOS control inventory** (57 components — buttons, forms, pickers, lists, navigation & sidebar, overlays, system chrome incl. widget/keyboard/Face ID, icons) — every category the kit exposes to designers (buttons, forms, lists, navigation, overlays, feedback, system chrome, icons) — as clean, token-driven, parameterized React components, plus the real brand assets. Deliberately **not** reproduced 1:1: internal `_helper` sub-components, keyboard/accessory-bar internals, product bezels, per-country flags, and third-party social-brand icons (available from their own brands' guidelines). See the coverage counts at the top of this handoff.

### Intentional additions
- `Icon` — a wrapper over the substituted Material Symbols set (the source's icons are a font, not components), giving a single typed API for the SF Symbol vocabulary.

## Foundations (Design System tab)
Specimen cards live in `guidelines/`: Colors (brand ramp, system accents, labels & separators, backgrounds & status), Brand (tint modes, logos), Type (display, titles, body/text, serif & mono), Spacing (scale, radius & elevation).

## Tokens
- `styles.css` (root) — the single entry point; a list of `@import`s only.
- `tokens/fig-tokens.css` — all 1,300 Figma Variables, every theme mode (Light/Dark/Deseret/Bookshelf/VIP/High-Contrast/…), extracted verbatim.
- `tokens/semantic.css` — clean semantic aliases the components consume (brand ramp, iOS labels/fills/backgrounds/separators, system accents, radii, spacing, shadows, motion) + `[data-brand]` tint modes + `[data-theme="dark"]`.
- `tokens/typography.css` — the iOS text scale as tokens + `.ds-*` classes.
- `tokens/fonts.css` — font-family tokens + Google Fonts substitutes.
- `tokens/icons.css` — Material Symbols import + base class.

## UI kits
- `ui_kits/bookshelf-app/` — interactive iOS reading & audiobook app (Library, Discover, Reader, Player, Account). See its README.

## ⚠️ Font substitution (needs your input)
The design uses Apple system faces — **SF Pro Display**, **SF Pro Text**, **SF Compact**, and **New York** (serif) — which are proprietary and not bundled. The font tokens keep those exact family names first in the stack, so on **Apple devices the real faces render**; elsewhere the closest Google Fonts stand in (**Inter** for SF Pro, **Newsreader** for New York, **DM Mono** is the file's actual mono). **If you can provide licensed `.woff2` files for SF Pro Display/Text and New York, upload them and I'll wire real `@font-face` rules.**

## Index / manifest (root)
- `styles.css` — global CSS entry point (imports only)
- `tokens/` — token + font + icon CSS
- `components/` — `icons/`, `buttons/`, `forms/`, `display/`, `navigation/`, `overlays/`, `system/` (each: `<Name>.jsx` + `.d.ts` + `.prompt.md`, one `@dsCard` card per dir)
- `assets/logos/`, `assets/illustrations/` — real brand vectors (as components)
- `guidelines/` — foundation specimen cards
- `ui_kits/bookshelf-app/` — the app UI kit
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent-Skill entry point
