(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/common"],{

/***/ "./assets/scripts/routes/Common.js":
/*!*****************************************!*\
  !*** ./assets/scripts/routes/Common.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Common_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Common/navigation */ "./assets/scripts/src/Common/navigation.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    new _src_Common_navigation__WEBPACK_IMPORTED_MODULE_0__["default"]();
  },
  finalize: function finalize() {// Javascript that fires on all pages. after page specific JS is fires.
  }
});

/***/ }),

/***/ "./assets/scripts/src/Common/navigation.js":
/*!*************************************************!*\
  !*** ./assets/scripts/src/Common/navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navigation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var navigation =
/*#__PURE__*/
function () {
  function navigation() {
    _classCallCheck(this, navigation);

    _defineProperty(this, "navTarget", '.nav-wrapper');

    _defineProperty(this, "hamburger", '.js-nav-opener');

    this.run();
  }

  _createClass(navigation, [{
    key: "run",
    value: function run() {
      var button = document.querySelector(this.hamburger);
      var nav = document.querySelector(this.navTarget);

      if (!button || !nav) {
        return;
      }

      button.addEventListener('click', function () {
        return nav.classList.toggle('active');
      });
    }
  }]);

  return navigation;
}();



/***/ })

}]);