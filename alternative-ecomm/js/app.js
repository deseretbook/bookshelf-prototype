/* Alternative eComm: header menu and drawers. Plain JS, no libraries. */
const MENU = [
  { label: 'New', href: '#new' },
  { label: 'Books', href: '#books' },
  { label: 'Music', href: '#music' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'Sale', href: '#sale' },
];
const WIDE = matchMedia('(min-width: 960px)');
const cart = { items: [] };

/* One menu list, rendered into the header nav and the menu drawer. */
for (const ul of document.querySelectorAll('[data-menu]')) {
  ul.innerHTML = MENU.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('');
}

function route() {
  const hash = location.hash;
  const item = MENU.find(i => i.href === hash);
  for (const a of document.querySelectorAll('[data-menu] a')) {
    if (a.getAttribute('href') === hash) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  }
  document.querySelector('[data-title]').textContent = item ? item.label : 'Alternative eComm';
}
addEventListener('hashchange', route);
route();

/* Drawers: native modal dialogs. Escape, the close buttons and the backdrop close them; one open at a time. */
function openDrawer(id) {
  for (const d of document.querySelectorAll('dialog.drawer[open]')) d.close();
  document.getElementById(id).showModal();
  sync();
}
function sync() {
  for (const b of document.querySelectorAll('[data-open]')) {
    b.setAttribute('aria-expanded', String(document.getElementById(b.dataset.open).open));
  }
}
for (const b of document.querySelectorAll('[data-open]')) b.addEventListener('click', () => openDrawer(b.dataset.open));
for (const d of document.querySelectorAll('dialog.drawer')) {
  d.addEventListener('close', sync);
  d.addEventListener('click', e => {
    if (e.target === d || e.target.closest('[data-close]') || e.target.closest('a[href^="#"]')) d.close();
  });
}
/* The menu drawer only belongs to small screens. */
WIDE.addEventListener('change', e => { if (e.matches) document.getElementById('menu').close(); });

function renderCart() {
  const n = cart.items.length;
  const badge = document.querySelector('[data-count]');
  badge.textContent = n;
  badge.hidden = n === 0;
  document.querySelector('[data-open="cart"]').setAttribute('aria-label', `Cart, ${n} ${n === 1 ? 'item' : 'items'}`);
  document.getElementById('cart-title').textContent = `Cart (${n})`;
}
renderCart();
