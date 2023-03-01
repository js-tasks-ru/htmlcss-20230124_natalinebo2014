const modalClose = document.getElementById('modal-close');
const modalOpen = document.getElementById('modal-open');
const modal = document.getElementById('modal');

modalClose.addEventListener('click', () => modal.classList.remove('modal_open'));
modalOpen.addEventListener('click', () => modal.classList.add('modal_open'));

