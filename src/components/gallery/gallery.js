import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

const swiperGallery = '.gallery__slider';

if (document.querySelector(swiperGallery)) {
  const gallerySwiper = new Swiper(swiperGallery, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.slider-nav-gallery__next-btn-js',
        prevEl: '.slider-nav-gallery__prev-btn-js',
      },
  });
}