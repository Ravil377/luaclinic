const allBtn = document.querySelector('.basic-services__list-all-btn');
allBtn && allBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.closest('.basic-services__list-cards').classList.remove('basic-services__list-cards');
    e.target.closest('.card_allbtn').remove();
})