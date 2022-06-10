const questionLists = document.querySelectorAll('.question__list-js');
questionLists.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.closest('.question__item').classList.toggle('active');
    })
})
