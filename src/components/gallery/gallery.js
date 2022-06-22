import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

// const swiperGallery = '.gallery__slider';
const gallerySliders = document.querySelectorAll('.gallery__slider-js');
var gallerySwiper = {};
const moreBtns = document.querySelectorAll('.gallery-button-js');
moreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const slid = e.target.closest('.gallery__slider-js');
    slid.querySelector('.gallery__category-list_mobil').classList.remove('gallery__category-list_mobil');
    e.target.closest('.gallery-button-js').remove();
  })
})




const sliderInit = () => {
  gallerySliders.forEach((gallerySlider, idx) => {
    let sliderClass = `.gallery__slider${idx}`;
    gallerySwiper[idx] = new Swiper(sliderClass, {
      slidesPerView: 'auto',
      freemode: true,
      spaceBetween: 10,
      navigation: {
        nextEl: `.slider-nav-gallery${idx}__next-btn-js`,
        prevEl: `.slider-nav-gallery${idx}__prev-btn-js`,
      },
    });
  })
}

const resizeHandlerSlider = () => {
  if (document.body.clientWidth < 992) {
    for (var key in gallerySwiper) {
      gallerySwiper[key].destroy();
    }
  } else {
      sliderInit();
  }
}

sliderInit();
resizeHandlerSlider();
window.addEventListener('resize', resizeHandlerSlider);