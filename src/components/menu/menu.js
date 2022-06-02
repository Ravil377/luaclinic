const menu = document.querySelector('.menu');

menu && menu.addEventListener('click', (e) => {
    const isLi = e.target.classList.contains('menu__item-title');
    
    if(isLi) {
        const ulList = e.target.querySelector('ul');
        if(!ulList.classList.contains('d-none')) {
            ulList.classList.add('d-none');    
        } else {
            const ulSubMenu = menu.querySelectorAll('.menu__list-subtitle');
            ulSubMenu.forEach(item => {
                if(!item.classList.contains('d-none')) {
                    item.classList.add('d-none');
                }
            })
            ulList.classList.remove('d-none');
        }        
    }
    
})