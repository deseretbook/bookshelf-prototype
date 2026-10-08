Generated files. Rebuild after editing any of their sources.

app.js              = src/catalog.js + src/ui.jsx + src/screens.jsx + src/checkout.jsx + src/subscriptions.jsx + src/app.jsx.
                      JSX compiled with @babel/standalone 7.29.0 (presets ["react"]), concatenated in one shared top-level scope.
bookshelf-pages.js  = the six Bookshelf+ pages (originals kept in archive/bookshelf-pages/*.dc.html). Each page's template is
                      compiled to React.createElement calls and its logic class is kept as written; they register on
                      window.BSP_PAGES and Concept F renders them at #/bookshelf-plus/* and #/account/subscriptions/bookshelf-plus (opened from the Subscriptions overview, src/subscriptions.jsx).
css/bookshelf-pages.css  the pages' own styles, scoped to [data-bsp="<page>"], plus their hover/focus/::before/::after styles.
css/bsp-fonts.css        DM Sans with the 500/600/700 weights the page content uses, as family "DM Sans BSP" (scoped to [data-bsp]).

Concept F loads bookshelf-pages.js before app.js.
