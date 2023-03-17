const burger = document.getElementById('burger');
const menuOpen = document.getElementById('menu-open-button');
const burgerList = document.querySelector('.burger__list');
const burgerLinks = document.querySelectorAll('.burger__link');
const menuClose = document.getElementById('burger-menu-close');
//const burgerCheckbox = document.getElementById('burger-checkbox');
const BODY = document.body;

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
      burger.setAttribute('data-open', '');
      BODY.classList.add('hidden');
    });

    burgerList.addEventListener('click', function(event) {
      if (event.target.classList.contains('burger__link')) {
        burger.removeAttribute('data-open');
        BODY.classList.remove('hidden');
      }
    });
  }

if (menuClose) {
  menuClose.addEventListener('click', function () {
    burger.removeAttribute('data-open', '');
    BODY.classList.remove('hidden');
  });
}





