/* Alternative eComm: header shell. One menu (inline from 1024px, a left drawer below) and one cart (always a right drawer). Built with the Deseret Book Design System components; no build step. */
(function () {
  var h = React.createElement;
  var DS = window.DeseretBookDesignSystem_609afa;
  var Drawer = DS.Drawer, IconButton = DS.IconButton, CountBadge = DS.CountBadge, EmptyState = DS.EmptyState, Button = DS.Button;

  var MENU = [
    { label: 'Books', href: '#books' },
    { label: 'Scriptures', href: '#scriptures' },
    { label: 'Music', href: '#music' },
    { label: 'Art & Gifts', href: '#art-gifts' },
    { label: 'Kids', href: '#kids' },
    { label: 'Deals', href: '#deals' }
  ];
  var WIDE = window.matchMedia('(min-width: 1024px)');

  function useHash() {
    var s = React.useState(location.hash || '#'); var hash = s[0], set = s[1];
    React.useEffect(function () {
      function on() { set(location.hash || '#'); }
      window.addEventListener('hashchange', on);
      return function () { window.removeEventListener('hashchange', on); };
    }, []);
    return hash;
  }

  function Wordmark(p) {
    return h('a', { className: 'wm', href: '#', 'aria-label': 'Deseret Book home', onClick: p.onClick },
      h('img', { className: 'wm-e', src: 'assets/emblem.svg', alt: '', width: 28, height: 28 }),
      h('img', { className: 'wm-w', src: 'assets/wordmark.svg', alt: '', width: 127, height: 14 }));
  }

  function App() {
    var hash = useHash();
    var m = React.useState(false), menuOpen = m[0], setMenu = m[1];
    var c = React.useState(false), cartOpen = c[0], setCart = c[1];
    var items = [];
    var count = items.length;

    /* The menu drawer only exists below 1024px: close it if the window grows past that. */
    React.useEffect(function () {
      function on(e) { if (e.matches) setMenu(false); }
      WIDE.addEventListener('change', on);
      return function () { WIDE.removeEventListener('change', on); };
    }, []);
    /* Only one drawer open at a time. */
    function openMenu() { setCart(false); setMenu(true); }
    function openCart() { setMenu(false); setCart(true); }

    function current(item) { return hash === item.href ? 'page' : undefined; }
    var page = MENU.filter(function (i) { return current(i); })[0];

    return h(React.Fragment, null,
      h('header', { className: 'hdr' },
        h('div', { className: 'hdr-in' },
          h('span', { className: 'hdr-burger' },
            h(IconButton, { icon: 'menu', label: 'Menu', size: 'md', iconSize: 24, onClick: openMenu, 'aria-haspopup': 'dialog', 'aria-expanded': menuOpen })),
          h(Wordmark),
          h('nav', { className: 'nav', 'aria-label': 'Main' },
            h('ul', null, MENU.map(function (i) {
              return h('li', { key: i.href }, h('a', { href: i.href, 'aria-current': current(i) }, i.label));
            }))),
          h('button', { type: 'button', className: 'hdr-cart cart-btn', onClick: openCart, 'aria-haspopup': 'dialog', 'aria-expanded': cartOpen, 'aria-label': 'Cart, ' + count + (count === 1 ? ' item' : ' items') },
            h(CountBadge, { variant: 'pill', count: count, 'aria-hidden': true })))),

      h('main', { className: 'main', id: 'main' },
        h('h1', null, page ? page.label : 'Alternative eComm'),
        h('p', null, 'A new Deseret Book store, built from scratch. The menu sits in the header from 1024px and opens as a drawer on smaller screens; the cart always opens as a drawer.')),

      h(Drawer, { open: menuOpen, onClose: function () { setMenu(false); }, side: 'left', header: h(Wordmark, { onClick: function () { setMenu(false); } }), 'aria-label': 'Menu', closeLabel: 'Close menu', padded: false },
        h('nav', { 'aria-label': 'Main' },
          h('ul', { className: 'mnav' }, MENU.map(function (i) {
            return h('li', { key: i.href }, h('a', { href: i.href, 'aria-current': current(i), onClick: function () { setMenu(false); } }, i.label));
          })))),

      h(Drawer, { open: cartOpen, onClose: function () { setCart(false); }, side: 'right', title: 'Cart (' + count + ')', closeLabel: 'Close cart' },
        h(EmptyState, { icon: 'shopping_cart', title: 'Your Cart Is Empty', action: h(Button, { variant: 'primary', size: 'md', onClick: function () { setCart(false); } }, 'Start Shopping') },
          'Add books, music and gifts, and they will show up here.')));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
