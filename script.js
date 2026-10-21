const menu = document.getElementById('mmenu');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');

function setMenuOpen(open) {
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  if (open) closeButton.focus();
  else menuButton.focus();
}

menuButton.addEventListener('click', () => setMenuOpen(true));
closeButton.addEventListener('click', () => setMenuOpen(false));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) setMenuOpen(false);
});

document.querySelectorAll('.planos-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.planos-tab').forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    document.querySelectorAll('.plan-pane').forEach(pane => {
      const selected = pane.id === tab.dataset.target;
      pane.classList.toggle('active', selected);
      pane.hidden = !selected;
    });
  });
});
