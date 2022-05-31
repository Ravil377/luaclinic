import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.feedback__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20  
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
});