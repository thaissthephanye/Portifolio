const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

function closeMenu() {
  navLinks.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
  } else {
    navLinks.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
  }
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 680) closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();
