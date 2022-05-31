import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

const swiperAction = '.actual-action__slider';

if (document.querySelector(swiperAction)) {
  const actionSwiper = new Swiper(swiperAction, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
          576: {
              slidesPerView: 2,
              spaceBetween: 20  
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          }
      },
      navigation: {
        nextEl: '.slider-nav-basic__next-btn-js',
        prevEl: '.slider-nav-basic__prev-btn-js',
      },
  });
}