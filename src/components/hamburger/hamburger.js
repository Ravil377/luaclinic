// import enquire from 'enquire.js'
// import { overlayAdd, overlayRemove } from '../overlay/overlay'

const hamburgers = document.querySelectorAll('[id="services"]');
const hamburgerBtns = document.querySelectorAll('.hamburger--js');
const header = document.querySelector('.header');
const body = document.querySelector("body");
const $menuServicesCloseBtn = document.querySelector('.menu-services__close-btn-js');
const mobilListMenu = document.querySelector('.header__mobil-menu-list-1');
const $mobilListMenuServices = document.querySelector('.header__mobil-menu-services');
const mobilMenu = document.querySelector('.header__mobil-menu');
const searchBtns = document.querySelectorAll('.search-btn-js');
const search = document.querySelector('.header__search-js');
const searchCloseBtn = document.querySelector('.search-close-btn-js');


searchCloseBtn && searchCloseBtn.addEventListener('click', () => search.classList.remove('active'));
searchBtns && searchBtns.forEach(btn => btn.addEventListener('click', () => search.classList.add('active')));

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
	if(e.target.href) {
		openMobilMenu();
		mobilMenu.classList.remove('services');
		e.target.classList.remove('active');
	}
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
hamburgers.forEach(item => item.addEventListener('click', toggleServices));

hamburgerBtns.forEach(item => item.addEventListener('click', openMobilMenu));



window.onscroll = function() {myFunction()};
const headerSticky = document.querySelector(".header__sticky");
const menuMobil = document.querySelector('.detail__menu-mobil');
const sticky = 900;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headerSticky.classList.add("sticky");
	menuMobil && menuMobil.classList.add('detail__menu-mobil_sticky');
  } else {
    headerSticky.classList.remove("sticky");
	menuMobil && menuMobil.classList.remove('detail__menu-mobil_sticky');
  }
}