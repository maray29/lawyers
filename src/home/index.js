import 'swiper/css';

import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import createLenis from '$utils/createLenis';

function createExpertsSlider() {
  return new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    slideToClickedSlide: true,
    keyboard: true,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    autoplay: {
      delay: 3000,
    },
    speed: 500,
  });
}

window.addEventListener('DOMContentLoaded', () => {
  createExpertsSlider();
  createLenis();
});
