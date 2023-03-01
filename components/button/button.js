const buttonCards = document.getElementById('button-cards');
const cardsHidden = document.querySelectorAll('.cards__item_hidden');

buttonCards.addEventListener('click', function() {
    if (!this.classList.contains('button_open')) {
        cardsHidden.forEach(cards => cards.classList.remove('cards_hidden'));
        this.classList.add('button_open');
        this.textContent = 'Show less';
    }
    else if (this.classList.contains('button_open')) {
      console.log('close');
      cardsHidden.forEach((cards) => cards.classList.add('cards_hidden'));
      this.classList.remove('button-open');
      this.textContent = 'Load more';
    }
});