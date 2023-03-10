const menu = document.getElementById('header-nav');
const menuOpen = document.getElementById('menu-open');
const headerMenu = document.getElementById('header-menu');
const headerLinks = document.querySelectorAll('.header__link');
const menuClose = document.getElementById('menu-close');
const BODY = document.body;

if (menuOpen) {
  menuOpen.addEventListener('click', function () {
    menu.setAttribute('data-open', '');
    BODY.classList.add('hidden');
  });

  headerMenu.addEventListener('click', function (event) {
    if (event.target.classList.contains('header__link')) {
      menu.removeAttribute('data-open');
      BODY.classList.remove('hidden');
    }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function () {
    menu.removeAttribute('data-open', '');
    BODY.classList.remove('hidden');
  });
}
