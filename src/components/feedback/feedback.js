import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiperFeedback = '.feedback__slider';

if (document.querySelector(swiperFeedback)) {
  const feedbackSwiper = new Swiper(swiperFeedback, {
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
      },
      navigation: {
        nextEl: '.slider-nav-feedback__next-btn-js',
        prevEl: '.slider-nav-feedback__prev-btn-js',
      },
  });
}