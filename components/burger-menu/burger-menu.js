const menu = document.getElementById('header-nav');
const menuOpen = document.getElementById('burger-menu-open');
const headerLinks = document.querySelectorAll('.header__link');
const burgerCheckbox = document.getElementById('burger-checkbox');
const BODY = document.body;

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (burgerCheckbox.checked) {
            menu.removeAttribute('data-open', '');
            BODY.classList.remove('hidden');
        }
        else {
            menu.setAttribute('data-open', '');
            BODY.classList.add('hidden');
        }
    });

    headerLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            menu.removeAttribute('data-open');
            burgerCheckbox.checked = false;
            BODY.classList.remove('hidden');
        });
    });
}
