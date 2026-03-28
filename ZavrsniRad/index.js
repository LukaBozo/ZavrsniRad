const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}