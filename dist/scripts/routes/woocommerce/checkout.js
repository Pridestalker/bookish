(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/woocommerce/checkout"],{

/***/ "./assets/scripts/routes/WoocommerceCheckout.js":
/*!******************************************************!*\
  !*** ./assets/scripts/routes/WoocommerceCheckout.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Woocommerce/ */ "./assets/scripts/src/Woocommerce/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {},
  finalize: function finalize() {
    _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__["Checkout"].checkForDifferentShipping();
    _src_Woocommerce___WEBPACK_IMPORTED_MODULE_0__["Checkout"].openLoginForm();
  }
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js":
/*!******************************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js ***!
  \******************************************************************************/
/*! exports provided: default, immediateCheckOnce, addActiveToFields, removeActiveFromFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immediateCheckOnce", function() { return immediateCheckOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActiveToFields", function() { return addActiveToFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActiveFromFields", function() { return removeActiveFromFields; });
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkForDifferentShipping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForDifferentShipping */ "./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js");
/* harmony import */ var _openLoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openLoginForm */ "./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  checkForDifferentShipping: _checkForDifferentShipping__WEBPACK_IMPORTED_MODULE_0__["default"],
  openLoginForm: _openLoginForm__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _refreshAfterOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refreshAfterOrder */ "./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  refreshAfterOrder: _refreshAfterOrder__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
/*! exports provided: Checkout, Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout */ "./assets/scripts/src/Woocommerce/Checkout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return _Checkout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop */ "./assets/scripts/src/Woocommerce/Shop/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return _Shop__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ })

}]);