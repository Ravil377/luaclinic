import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

const swiperDoctors = '.doctors__slider';

if (document.querySelector(swiperDoctors)) {
  const doctorsSwiper = new Swiper(swiperDoctors, {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      breakpoints: {
          768: {
              spaceBetween: 30  
          },
      },
      navigation: {
        nextEl: '.slider-nav-doctors__next-btn-js',
        prevEl: '.slider-nav-doctors__prev-btn-js',
      },
  });
}