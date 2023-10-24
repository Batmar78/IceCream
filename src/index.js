import Sliderm from 'sliderm';
import 'sliderm/src/assets/scss/index.scss';

const sliderm = new Sliderm('.your-class-name', {
  arrow: false,
  pagination: true,
  grouping: false,
  loop: true,
  preview: false,
  columns: 1,
  duration: 1000,
  spacing: 10,
  align: 'center',
});

sliderm.on('slide.start', () => {
  console.log('Just starting to slide!');
});

sliderm.on('slide.end', () => {
  console.log('The slider is stopped.');
});

const mobMenu = (() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuNav = document.querySelector('.js-menu-nav');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuNav.addEventListener('click', toggleMenu);

  
  // Закриваємо мобільне меню на більш широких екранах
  // у випадку зміни орієнтації пристрою.
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const refs = {
    openModalBuyNowBtn: document.querySelector("[data-modalbuynow-open]"),
    openModalBuyNowBtnTab: document.querySelector("[data-buynow-open]"),
    closeModalBuyNowBtn: document.querySelector("[data-modalbuynow-close]"),
    modalBuyNow: document.querySelector("[data-modalbuynow]"),
    submitBuyNow: document.querySelector("[data-modalbuynow-submit]"),
  };

  refs.openModalBuyNowBtn.addEventListener("click", toggleModalBuyNow);
  refs.openModalBuyNowBtnTab.addEventListener("click", toggleModalBuyNow);
  refs.closeModalBuyNowBtn.addEventListener("click", toggleModalBuyNow);
  refs.submitBuyNow.addEventListener("click", onSubmitBuyNow);

  function toggleModalBuyNow() {
    refs.modalBuyNow.classList.toggle("is-hidden");
  }

  function onSubmitBuyNow(e) {
    e.preventDefault();
    refs.modalBuyNow.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalProductsBtn: document.querySelector("[data-modalproducts-open]"),
    closeModalProductsBtn: document.querySelector("[data-modalproducts-close]"),
    modalProducts: document.querySelector("[data-modalproducts]"),
    submitProducts: document.querySelector("[data-modalproducts-submit]"),
  };

  refs.openModalProductsBtn.addEventListener("click", toggleModalProducts);
  refs.closeModalProductsBtn.addEventListener("click", toggleModalProducts);
  refs.submitProducts.addEventListener("click", onSubmitProducts);

  function toggleModalProducts() {
    refs.modalProducts.classList.toggle("is-hidden");
  }

  function onSubmitProducts(e) {
    e.preventDefault();
    refs.modalProducts.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalReadMoreBtn: document.querySelector("[data-modalreadmore-open]"),
    closeModalReadMoreBtn: document.querySelector("[data-modalreadmore-close]"),
    modalReadMore: document.querySelector("[data-modalreadmore]"),
  };

  refs.openModalReadMoreBtn.addEventListener("click", toggleModalReadMore);
  refs.closeModalReadMoreBtn.addEventListener("click", toggleModalReadMore);

  function toggleModalReadMore() {
    refs.modalReadMore.classList.toggle("is-hidden");
  }

})();

(() => {
  const refs = {
    openModalLocationBtn: document.querySelector("[data-modallocation-open]"),
    closeModalLocationBtn: document.querySelector("[data-modallocation-close]"),
    modalLocation: document.querySelector("[data-modallocation]"),
  };

  refs.openModalLocationBtn.addEventListener("click", toggleModalLocation);
  refs.closeModalLocationBtn.addEventListener("click", toggleModalLocation);

  function toggleModalLocation() {
    refs.modalLocation.classList.toggle("is-hidden");
  }

})();

(() => {
  const refs = {
    openModalFranchiseBtn: document.querySelector("[data-modalfranchise-open]"),
    closeModalFranchiseBtn: document.querySelector("[data-modalfranchise-close"),
    modalFranchise: document.querySelector("[data-modalfranchise]"),
    submitFranchise: document.querySelector("[data-modalfranchise-submit]"),
  };

  refs.openModalFranchiseBtn.addEventListener("click", toggleModalFranchise);
  refs.closeModalFranchiseBtn.addEventListener("click", toggleModalFranchise);
  refs.submitFranchise.addEventListener("click", onSubmitFranchise);

  function toggleModalFranchise() {
    refs.modalFranchise.classList.toggle("is-hidden");
  }

  function onSubmitFranchise(e) {
    e.preventDefault();
    refs.modalFranchise.classList.toggle("is-hidden");
  }
})();