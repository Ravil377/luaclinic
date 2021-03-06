import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);

const swiperAction = '.actual-action__slider';
const swiperRecommendation = '.recommendation__slider';

const detailList = document.querySelector('.detail__tabs-list');
detailList && detailList.addEventListener('click', (e) => {
    e.target.closest('.detail__tabs-item').classList.toggle('active');
})

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

if (document.querySelector(swiperRecommendation)) {
    const RecommendationSwiper = new Swiper(swiperRecommendation, {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30
            }
        },
        navigation: {
          nextEl: '.slider-nav-recommendation__next-btn-js',
          prevEl: '.slider-nav-recommendation__prev-btn-js',
        },
    });
  }