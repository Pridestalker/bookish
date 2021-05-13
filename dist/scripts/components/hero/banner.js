(self["webpackChunk"] = self["webpackChunk"] || []).push([["scripts/components/hero/banner"],{

/***/ "./assets/scripts/components/hero-banner/index.js":
/*!********************************************************!*\
  !*** ./assets/scripts/components/hero-banner/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/autoplay/autoplay.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/a11y/a11y.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/lazy/lazy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function init() {
    swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_1__.default, swiper__WEBPACK_IMPORTED_MODULE_2__.default, swiper__WEBPACK_IMPORTED_MODULE_3__.default]);
    document.body.querySelectorAll('[data-component="hero-banner"]').forEach(function (component) {
      var swiper = component.querySelector('.swiper-container');
      swiper.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.default(swiper, {
        a11y: true,
        autoplay: {
          pauseOnMouseEnter: true
        },
        slidesPerView: 1,
        lazy: true,
        loop: true
      });
    });
  },
  load: function load() {}
});

/***/ })

}]);