(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/common"],{

/***/ "./assets/scripts/routes/Common.js":
/*!*****************************************!*\
  !*** ./assets/scripts/routes/Common.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_mini_cart_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/mini-cart/app */ "./assets/scripts/services/mini-cart/app.js");
/* harmony import */ var _src_Common_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Common/navigation */ "./assets/scripts/src/Common/navigation.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    new _src_Common_navigation__WEBPACK_IMPORTED_MODULE_1__["default"]();
  },
  finalize: function finalize() {// Javascript that fires on all pages. after page specific JS is fires.
  }
});

/***/ }),

/***/ "./assets/scripts/services/mini-cart/app.js":
/*!**************************************************!*\
  !*** ./assets/scripts/services/mini-cart/app.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ky */ "./node_modules/ky/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MiniCart =
/*#__PURE__*/
function (_Component) {
  _inherits(MiniCart, _Component);

  function MiniCart(props) {
    var _this;

    _classCallCheck(this, MiniCart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MiniCart).call(this, props));
    _this.state = {
      cart: [],
      cartCount: null
    };
    return _this;
  }

  _createClass(MiniCart, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      ky__WEBPACK_IMPORTED_MODULE_1__["default"].get(window['ajax_url'], {
        searchParams: {
          action: 'get_cart_item_count'
        },
        credentials: 'include'
      }).then(function (res) {
        if (!res.ok) {
          _this2.setState({
            cart: [],
            cartCount: 0
          });
        }

        return res.json();
      }).then(function (res) {
        var _res$data, _res$data2;

        _this2.setState({
          cart: ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.cart_items) || [],
          cartCount: ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.cart_items_count) || 0
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cartCount = this.state.cartCount;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: this.props.href,
        className: "text-primary js-shopping-cart-button shopping-cart-button p-2"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        className: "hidden lg:inline-block mr-2"
      }, "winkelmandje"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        className: "shopping-icon",
        key: "icon-".concat(cartCount)
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
        className: "fad fa-shopping-bag"
      })), cartCount > 0 && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        className: "bulb"
      }, cartCount));
    }
  }]);

  return MiniCart;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var cartElement = document.querySelector('#mini-cart-app');

if (cartElement) {
  Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(MiniCart, {
    href: window['shopping_cart_url']
  }), cartElement);
}

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