SOURCE OF TRUTH: edit these files directly. Do not regenerate them.

app.js              The main site (catalog data, shell UI, screens, checkout, subscriptions, app/router). Edit this file directly.
                    It was originally compiled from src/catalog.js + ui.jsx + screens.jsx + checkout.jsx + subscriptions.jsx + app.jsx,
                    but has since been edited in place. The old .jsx sources are out of date and were moved to archive/stale-jsx/
                    for reference only. Rebuilding from them would erase current work.
                    src/catalog.js mirrors the catalog section of app.js; keep the two in step if you change product data.
bookshelf-pages.js  The six Bookshelf+ pages (originals in archive/bookshelf-pages/*.dc.html, also out of date). Edit directly.
                    Pages register on window.BSP_PAGES and render at #/bookshelf-plus/* and #/account/subscriptions/bookshelf-plus.

Plain-JS modules loaded alongside app.js (edit directly, no build step):
src/orders.js, src/bsp-checkout.js (Bookshelf+ sign-up dialog), src/reviews.js (PDP reviews), src/pdp-plus.js (PDP audit additions),
src/stay.js, src/book-crop.js.

CSS: css/bookshelf-pages.css (scoped to [data-bsp="<page>"]), plus css/*.css for the site.

Main Site.html loads bookshelf-pages.js before app.js.
