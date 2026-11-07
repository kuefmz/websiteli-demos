const menu = document.querySelector('.menu');
const nav = document.querySelector('#navegacion');
const compact = window.matchMedia('(max-width: 859px)');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}

menu.hidden = false;
document.querySelector('.nav').classList.add('enhanced');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'false';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (compact.matches && link) {
    closeMenu();
    const target = document.querySelector(link.hash);
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
compact.addEventListener('change', closeMenu);

const comparison = document.querySelector('.comparison');
const range = document.querySelector('#revelar');
function updateComparison() {
  comparison.style.setProperty('--split', range.value + '%');
  range.setAttribute('aria-valuetext', range.value + ' % antes, ' + (100 - range.value) + ' % después');
}
comparison.classList.add('interactive');
document.querySelector('.range-control').hidden = false;
range.addEventListener('input', updateComparison);
updateComparison();
