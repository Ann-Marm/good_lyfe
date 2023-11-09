
/* полный слайдер - работает с ошибкой */
/*import Swiper from '../lib/swiper-bundle.min.js';*/

/* модульный слайдер с компа не работает */
/*import Swiper from '../lib/swiper-bundle.min.mjs'; */

/* модульный слайдер - работает только с его сайта */
/* import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'; */

/* на сайте подключения Свайпера раньше была другая ссылка для браузера,
хз почему сейчас не рабочая, может починят
скачала файл из старого проекта - работает */
import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

/* проверка, что Swiper работает */

new Swiper('.hero__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
/*
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
*/
        1440: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        prevEl: '.hero__arrow_prev',
        nextEl: '.hero__arrow_next'
    },
  /*  speed: 5000,
    autoplay: {
      delay: 3000,
    },*/
    
   
  
    preventClicks: true,
    a11y: false,
});


/* menu mobile */
$('.header__navigation-burger').click(function() {
    $('.header__navigation').slideToggle();
})



/* sliding */
import SwiperSliding from '../lib/swiper-bundle.esm.browser.min.js';


new SwiperSliding('.sliding__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
/*
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
*/
        1440: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

    },
    pagination: {
      el: '.swiper-pagination-sliding',
    },
    navigation: {
        prevEl: '.sliding__arrow_prev',
        nextEl: '.sliding__arrow_next'
    },
  /*  speed: 5000,
    autoplay: {
      delay: 3000,
    },*/
    
   
  
    preventClicks: true,
    a11y: false,
});



/* reviews */
/*
import SwiperReviews from '../lib/swiper-bundle.esm.browser.min.js';


new SwiperReviews('.reviews__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

    },
    pagination: {
      el: '.swiper-pagination-reviews',
    },

    
    preventClicks: true,
    a11y: false,
});

*/


let reviewsBlock = document.querySelector('.reviews__block');
let reviewsList = document.querySelector('.reviews__list');
let review = document.querySelector('.review');
let swiperPaginationReviews = document.querySelector('.swiper-pagination-reviews');

import SwiperReviews from '../lib/swiper-bundle.esm.browser.min.js';

let init = false;
let swiper_2;
function swiperCard() {
  if (window.innerWidth <= 320) {

     

    if (!init) {
      init = true; 

     reviewsBlock.classList.add('swiper');
      reviewsList.classList.add('swiper-wrapper');
      review.classList.add('swiper-slide');
      swiperPaginationReviews.classList.add('swiper-pagination-reviews-mob');

      swiper_2 = new SwiperReviews('.reviews__block', {

      slidesPerView: "auto",
      /*  slidesPerView: 1,*/
   /* spaceBetween: 5,*/
        loop: true,
       /* spaceBetween: 32,*/
        pagination: {
          el: ".swiper-pagination-reviews-mob",
        },

        preventClicks: true,
        a11y: false,
      });
    }
  } else if (init) {
    swiper_2.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
