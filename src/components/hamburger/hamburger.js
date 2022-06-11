// import enquire from 'enquire.js'
// import { overlayAdd, overlayRemove } from '../overlay/overlay'

const $hamburger = document.querySelector('[id="services"]');
const $hamburgerBtn = document.querySelector('.hamburger--js');
const header = document.querySelector('.header');
const body = document.querySelector("body");
const $menuServicesCloseBtn = document.querySelector('.menu-services__close-btn-js');
const mobilListMenu = document.querySelector('.header__mobil-menu-list-1');
const $mobilListMenuServices = document.querySelector('.header__mobil-menu-services');
const mobilMenu = document.querySelector('.header__mobil-menu');

const toggleServices = () => {
	header.classList.toggle('active');
	body.classList.toggle('fixed');
}
const openMobilMenu = () => {
	body.classList.toggle('fixed');
	mobilMenu.classList.toggle('active');
}

mobilListMenu.addEventListener('click', (e) => {
	const isList = e.target.dataset.list === 'all';
	if(isList) {
		mobilMenu.classList.toggle('list');
		e.target.classList.toggle('active');
	} 
})
$mobilListMenuServices.addEventListener('click', (e) => {
	mobilMenu.classList.add('services');
	e.target.classList.toggle('active');
	if(!$mobilListMenuServices.querySelector('.active')) {
		mobilMenu.classList.remove('services');
	}
})
$menuServicesCloseBtn.addEventListener('click', toggleServices);
$hamburger.addEventListener('click', toggleServices);
$hamburgerBtn.addEventListener('click', openMobilMenu);



window.onscroll = function() {myFunction()};
const headerSticky = document.querySelector(".header__sticky");
const sticky = 900;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headerSticky.classList.add("sticky");
  } else {
    headerSticky.classList.remove("sticky");
  }
}












// const $mainmenu = document.querySelector('.mainmenu--js')
// const $closeBtn = document.querySelector('.mainmenu--close')

// function showMenu() {
// 	$mainmenu.classList.add('is-active')
// 	$hamburger.classList.add('is-active')
// 	overlayAdd()
// }

// function hideMenu() {
// 	$mainmenu.classList.remove('is-active')
// 	$hamburger.classList.remove('is-active')
// 	overlayRemove()
// }

// const clickHandler = event => {
// 	event.preventDefault()

// 	if ($mainmenu.classList.contains('is-active')) {
// 		hideMenu()
// 	} else {
// 		showMenu()
// 	}
// }

// enquire.register('screen and (max-width: 992px)', {
// 	// deferSetup: true,
// 	match() {
// 		$hamburger.addEventListener('click', clickHandler)
// 		document.addEventListener('click', event => {
// 			if (event.target.dataset.backdrop === 'overlay') {
// 				hideMenu()
// 			}
// 		})
// 		$closeBtn.addEventListener('click', hideMenu)
// 	},
// 	unmatch() {
// 		$hamburger.removeEventListener('click', clickHandler)
// 		$closeBtn.removeEventListener('click', hideMenu)
// 	}
// })
