import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

const swiperfeedback1 = '.feedback__slider1';

if (document.querySelector(swiperfeedback1)) {
  const feedback1Swiper = new Swiper(swiperfeedback1, {
      slidesPerView: 1,
      spaceBetween: 3,
      freeMode: true,
      breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 3
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 3
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 3
        },
      },
      navigation: {
        nextEl: '.slider-nav-feedback__next-btn-js',
        prevEl: '.slider-nav-feedback__prev-btn-js',
      },
  });
}