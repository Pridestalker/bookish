(self["webpackChunk"] = self["webpackChunk"] || []).push([["scripts/routes/woocommerce/checkout"],{

/***/ "./assets/scripts/routes/WoocommerceCheckout.js":
/*!******************************************************!*\
  !*** ./assets/scripts/routes/WoocommerceCheckout.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Woocommerce/ */ "./assets/scripts/src/Woocommerce/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function init() {},
  finalize: function finalize() {
    _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__.Checkout.checkForDifferentShipping();
    _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__.Checkout.openLoginForm();
    _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__.Checkout.openCreateAccount();
  }
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/OpenCreateAccount.js":
/*!**********************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/OpenCreateAccount.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var button = document.querySelector('#createaccount'),
      form = document.querySelector('.create-account');

  if (!form || !button) {
    return;
  }

  button.addEventListener('click', function () {
    return form.style.display = button.checked ? '' : 'none';
  });
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js":
/*!******************************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "immediateCheckOnce": () => /* binding */ immediateCheckOnce,
/* harmony export */   "addActiveToFields": () => /* binding */ addActiveToFields,
/* harmony export */   "removeActiveFromFields": () => /* binding */ removeActiveFromFields
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var checkbox = document.getElementById('ship-to-different-address-checkbox'),
      fields = document.querySelector('.shipping_address');
  checkbox.addEventListener('input', function (e) {
    if (e.target.checked) {
      addActiveToFields(fields);
    } else {
      removeActiveFromFields(fields);
    }
  });
});
/**
 *
 * @param {HTMLInputElement} checkbox
 * @param {HTMLDivElement} fields
 */

var immediateCheckOnce = function immediateCheckOnce(checkbox, fields) {
  if (checkbox.checked) {
    addActiveToFields(fields);
  }
};
/**
 * Only adds a new class when it wasn't already added
 *
 * @param {HTMLDivElement} fields
 */

var addActiveToFields = function addActiveToFields(fields) {
  if (!fields.classList.contains('active')) fields.classList.add('active');
};
var removeActiveFromFields = function removeActiveFromFields(fields) {
  if (fields.classList.contains('active')) fields.classList.remove('active');
};

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/index.js":
/*!**********************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _checkForDifferentShipping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForDifferentShipping */ "./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js");
/* harmony import */ var _openLoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openLoginForm */ "./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js");
/* harmony import */ var _OpenCreateAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenCreateAccount */ "./assets/scripts/src/Woocommerce/Checkout/OpenCreateAccount.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkForDifferentShipping: _checkForDifferentShipping__WEBPACK_IMPORTED_MODULE_0__.default,
  openLoginForm: _openLoginForm__WEBPACK_IMPORTED_MODULE_1__.default,
  openCreateAccount: _OpenCreateAccount__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var form = document.querySelector('.woocommerce-form-login'),
      button = document.querySelector('.js-login-toggle-button');

  if (!form || !button) {
    return;
  }

  button.addEventListener('click', function () {
    return form.style.display = '';
  });
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Shop/index.js":
/*!******************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Shop/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _refreshAfterOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refreshAfterOrder */ "./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  refreshAfterOrder: _refreshAfterOrder__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var form = document.querySelector('.woocommerce-ordering'),
      select = form.querySelector('select');
  select.addEventListener('change', function () {
    form.submit();
  });
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/index.js":
/*!*************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": () => /* reexport safe */ _Checkout__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Shop": () => /* reexport safe */ _Shop__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout */ "./assets/scripts/src/Woocommerce/Checkout/index.js");
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop */ "./assets/scripts/src/Woocommerce/Shop/index.js");




/***/ })

}]);