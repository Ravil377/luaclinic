const menu = document.querySelector('.menu');

menu && menu.addEventListener('click', (e) => {
    const isLi = e.target.classList.contains('menu__item-title');
    
    if(isLi) {
        const ulSubMenu = menu.querySelectorAll('.menu__list-subtitle');
        ulSubMenu.forEach(item => {
            if(!item.classList.contains('d-none')) {
                item.classList.add('d-none');
            }
        })
        const ul = e.target.querySelector('ul');
        ul.classList.remove('d-none');
    }
    
})