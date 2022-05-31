import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

const swiperInterior = '.interior__slider';

if (document.querySelector(swiperInterior)) {
  const interiorSwiper = new Swiper(swiperInterior, {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      breakpoints: {
          576: {
              slidesPerView: 2,
              spaceBetween: 9  
          },
      },
      navigation: {
        nextEl: '.slider-nav-interior__next-btn-js',
        prevEl: '.slider-nav-interior__prev-btn-js',
      },
  });
}