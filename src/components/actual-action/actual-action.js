import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.actual-action__slider ', {
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
      }
});