const tabsScroller = document.querySelector('.tabs__scroller');
const tabsLabels = document.querySelectorAll('.tabs__label');

tabsScroller.addEventListener('click', function(event) {
    if (event.target.classList.contains('tabs__label')) {
        tabsLabels.forEach((label) =>
          label.classList.remove('tabs__label_active'),
        );
        
        event.target.classList.add('tabs__label_active');
    }
});