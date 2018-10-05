'use strict';

const menuButton = document.querySelector('header .icon-menu');
const mobileMenu = document.querySelector('header .header-right');
const sliderButtons = document.querySelector('#construction .buttons');
const leftButton = document.querySelector('#construction .icon-arrow-left');
const rightButton = document.querySelector('#construction .icon-arrow-right');
const leftSlide = document.querySelector('#construction .left');
const rightSlide = document.querySelector('#construction .right');
const scrollToFormBtn = document.querySelector('footer .button');
const scrollToTopBtn = document.querySelector('footer .icon-arrow-up');

const hasClass = (element, className) => {
  return element.className.split(' ').indexOf(className) >= 0;
};

const toggleActiveSlide = slide => {
  if (slide === 'left') {
    leftButton.classList.remove('active');
    rightButton.classList.add('active');
    leftSlide.classList.remove('s-hidden');
    rightSlide.classList.add('s-hidden');
  } else {
    leftButton.classList.add('active');
    rightButton.classList.remove('active');
    leftSlide.classList.add('s-hidden');
    rightSlide.classList.remove('s-hidden');
  }
};

const onMobileMenuClick = () => {
  const isHidden = hasClass(mobileMenu, 'm-hidden');

  if (isHidden) {
    mobileMenu.classList.remove('m-hidden');
  } else {
    mobileMenu.classList.add('m-hidden');
  }
};

const onSliderButtonClick = ev => {
  const buttonClicked = ev.target;
  const isActive = hasClass(buttonClicked, 'active');

  if (!isActive) return;

  toggleActiveSlide(buttonClicked.dataset.toggle);
};

const scrollToSection = selector => {
  const element = document.querySelector(selector);

  element.scrollIntoView();
}

menuButton.addEventListener('click', onMobileMenuClick);
sliderButtons.addEventListener('click', onSliderButtonClick);
scrollToFormBtn.addEventListener('click', () => scrollToSection('#contact-form'));
scrollToTopBtn.addEventListener('click', () => scrollToSection('header'));
