(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/single-product"],{

/***/ "./assets/scripts/routes/SingleProduct.js":
/*!************************************************!*\
  !*** ./assets/scripts/routes/SingleProduct.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Elements_Product_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Elements/Product/gallery */ "./assets/scripts/src/Elements/Product/gallery.js");
/* harmony import */ var _src_Elements_Product_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Elements/Product/tabs */ "./assets/scripts/src/Elements/Product/tabs.js");
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
/* harmony import */ var _src_Woocommerce_Single_variableProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Woocommerce/Single/variableProduct */ "./assets/scripts/src/Woocommerce/Single/variableProduct.js");
/* harmony import */ var _services_simple_add_to_cart_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/simple-add-to-cart/app */ "./assets/scripts/services/simple-add-to-cart/app.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    // Javascript that fires on all pages.
    Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('gallery-group', _src_Elements_Product_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryGroup"]);
    Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('gallery-item', _src_Elements_Product_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryItem"]);
    Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('tab-group', _src_Elements_Product_tabs__WEBPACK_IMPORTED_MODULE_1__["TabGroup"]);
    Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('tab-item', _src_Elements_Product_tabs__WEBPACK_IMPORTED_MODULE_1__["TabItem"]);
  },
  finalize: function finalize() {
    Object(_src_Woocommerce_Single_variableProduct__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});

/***/ }),

/***/ "./assets/scripts/services/simple-add-to-cart/app.js":
/*!***********************************************************!*\
  !*** ./assets/scripts/services/simple-add-to-cart/app.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var formElement = document.querySelector('#add-product-to-cart');

var AddToCart =
/*#__PURE__*/
function (_Component) {
  _inherits(AddToCart, _Component);

  function AddToCart(props) {
    var _this;

    _classCallCheck(this, AddToCart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddToCart).call(this, props));
    _this.state = {
      productID: null,
      quantity: null,
      minQuantity: null,
      maxQuantity: null
    };
    return _this;
  }

  _createClass(AddToCart, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        productID: window['product_id'],
        quantity: 1,
        minQuantity: window['product_settings'].qty.min,
        maxQuantity: window['product_settings'].qty.max
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        type: "number",
        name: "quantity",
        value: this.state.quantity
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
        type: "submit",
        name: "add-to-cart",
        value: this.state.productID,
        className: "product-add-to-cart"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
        className: "fad fa-plus-hexagon"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "Toevoegen aan winkelmand")));
    }
  }]);

  return AddToCart;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

if (formElement) {
  Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(AddToCart, null), formElement);
}

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Gallery/gallery-group.js":
/*!**********************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Gallery/gallery-group.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./assets/scripts/src/Elements/Product/Gallery/style.js");
/* harmony import */ var _gallery_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-item */ "./assets/scripts/src/Elements/Product/Gallery/gallery-item.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<button class=\"", "\" onclick=\"", "\" >\n\t<img src=\"", "\" alt=\"", "\" class=\"button-image\">\n</button>\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", "\n<figure>\n\t<img src=\"", "\" alt=\"", "\" class=\"featured-image\" />\n</figure>\n<nav>\n  ", "\n</nav>\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function activate(name) {
  return function (host) {
    host.activeItem = name;
    Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(host, 'gallery-switch');
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  items: Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["children"])(_gallery_item__WEBPACK_IMPORTED_MODULE_2__["default"]),
  activeItem: {
    set: function set(_ref, name) {
      var items = _ref.items;
      return items.filter(function (item) {
        return item.active = item.name === name;
      }).map(function (_ref2) {
        var name = _ref2.name;
        return name;
      })[0];
    },
    get: function get(_ref3) {
      var items = _ref3.items;
      return items.filter(function (item) {
        return item.active;
      })[0];
    }
  },
  render: function render(_ref4) {
    var items = _ref4.items,
        activeItem = _ref4.activeItem;
    return Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), _style__WEBPACK_IMPORTED_MODULE_1__["default"], activeItem.src, activeItem.alt, items.map(function (_ref5) {
      var src = _ref5.src,
          alt = _ref5.alt,
          active = _ref5.active,
          name = _ref5.name;
      return Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), {
        active: active
      }, activate(name), src, alt).key(name);
    }));
  }
});

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Gallery/gallery-item.js":
/*!*********************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Gallery/gallery-item.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: '',
  src: '#',
  alt: '',
  srcSet: {},
  active: false,
  render: function render(_ref) {
    var src = _ref.src,
        alt = _ref.alt;
    return Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
  }
});

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Gallery/style.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Gallery/style.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n<style>\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll;\n\toverflow-y: hidden;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n.featured-image {\n    max-height: 450px;\n    width: 100%;\n    transition: all 225ms ease-in-out;\n}\n\n.button-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;ish\n}\n\nfigure {\n    margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n\t\n\t.featured-image {\n\t\twidth: auto;\n\t}\n}\n</style>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject()));

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/button-style.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/button-style.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n<style>\nnav {\n\tdisplay:flex;\n}\n\nnav button {\n\tflex: 1 1 auto;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    font: inherit;\n    line-height: normal;\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding: .5rem;\n\tborder: 0 solid hsl(265, 83%, 45%);\n\tborder-bottom-width: 1px;\n\tcolor: hsl(265, 83%, 45%);\n\topacity: 0.5;\n\t\n\ttransition: opacity 225ms ease-in;\n}\n\nbutton:hover {\n\topacity: 0.75\n}\n\nbutton.active {\n\tborder-bottom-width: 0;\n\tborder-top-width: 1px;\n\tborder-left-width: 1px;\n\tborder-right-width: 1px;\n\topacity: 1;\n}\n</style>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject()));

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/item-style.js":
/*!****************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/item-style.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n<style>\n:host {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 3rem 0;\n}\n</style>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject()));

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/tab-group.js":
/*!***************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/tab-group.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
/* harmony import */ var _tab_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-item */ "./assets/scripts/src/Elements/Product/Tabs/tab-item.js");
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-style */ "./assets/scripts/src/Elements/Product/Tabs/button-style.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          <button class=\"", "\" onclick=\"", "\">\n            ", "\n          </button>\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n    <nav>\n      ", "\n    </nav>\n\t\n\t<slot></slot>\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function activate(name) {
  return function (host) {
    host.activeItem = name;
    Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(host, 'tab-switch');
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  items: Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["children"])(_tab_item__WEBPACK_IMPORTED_MODULE_1__["default"]),
  activeItem: {
    set: function set(_ref, name) {
      var items = _ref.items;
      return items.filter(function (item) {
        return item.active = item.name === name;
      }).map(function (_ref2) {
        var name = _ref2.name;
        return name;
      })[0];
    }
  },
  render: function render(_ref3) {
    var items = _ref3.items;
    return Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), _button_style__WEBPACK_IMPORTED_MODULE_2__["default"], items.map(function (_ref4) {
      var name = _ref4.name,
          active = _ref4.active;
      return Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), {
        active: active
      }, activate(name), name).key(name);
    }));
  }
});

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/tab-item.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/tab-item.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");
/* harmony import */ var _item_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-style */ "./assets/scripts/src/Elements/Product/Tabs/item-style.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["", " <slot></slot>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t", "\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: '',
  icon: '',
  active: false,
  render: function render(_ref) {
    var active = _ref.active;
    return Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), active && Object(hybrids__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), _item_style__WEBPACK_IMPORTED_MODULE_1__["default"]));
  }
});

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/gallery.js":
/*!********************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/gallery.js ***!
  \********************************************************/
/*! exports provided: GalleryItem, GalleryGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_gallery_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery/gallery-group */ "./assets/scripts/src/Elements/Product/Gallery/gallery-group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryGroup", function() { return _Gallery_gallery_group__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Gallery_gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery/gallery-item */ "./assets/scripts/src/Elements/Product/Gallery/gallery-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryItem", function() { return _Gallery_gallery_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./assets/scripts/src/Elements/Product/tabs.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/tabs.js ***!
  \*****************************************************/
/*! exports provided: TabItem, TabGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_tab_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs/tab-group */ "./assets/scripts/src/Elements/Product/Tabs/tab-group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabGroup", function() { return _Tabs_tab_group__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Tabs_tab_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/tab-item */ "./assets/scripts/src/Elements/Product/Tabs/tab-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabItem", function() { return _Tabs_tab_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Single/helpers/Variable.js":
/*!*******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Single/helpers/Variable.js ***!
  \*******************************************************************/
/*! exports provided: selectEvent, isValidOption, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEvent", function() { return selectEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidOption", function() { return isValidOption; });
/**
 * @param {Event} e
 * @param {any} attributesMemo
 */
var selectEvent = function selectEvent(e, attributesMemo) {
  var _e$target = e.target,
      value = _e$target.value,
      dataset = _e$target.dataset;
  var attribute_name = dataset.attribute_name;
  var possibilities = attributesMemo.filter(function (attribute) {
    return attribute.attributes.hasOwnProperty(attribute_name);
  }).filter(function (attribute) {
    return attribute.attributes[attribute_name] === '' ? true : attribute.attributes[attribute_name] === value;
  });

  if (possibilities.length === 1) {
    document.querySelector('input[name="variation_id"]').value = possibilities[0].id;
    document.querySelector('button.product-add-to-cart').disabled = false;
  } else {
    document.querySelector('input[name="variation_id"]').value = 0;
    document.querySelector('button.product-add-to-cart').disabled = true;
  }
};
/**
 *
 * @param {HTMLOptionElement} option
 * @param {HTMLSelectElement} select
 * @param {any} attributesMemo
 */

var isValidOption = function isValidOption(option, select, attributesMemo) {
  var attribute_name = select.dataset.attribute_name;
  var attributes = attributesMemo.filter(function (attribute) {
    return attribute.attributes.hasOwnProperty(attribute_name);
  }).filter(function (attribute) {
    return attribute.attributes[attribute_name] === option.value;
  });
  return attributes.length > 0 && attributes[0].is_in_stock;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  selectEvent: selectEvent,
  isValidOption: isValidOption
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Single/helpers/getWindowAttributes.js":
/*!******************************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Single/helpers/getWindowAttributes.js ***!
  \******************************************************************************/
/*! exports provided: default, splitWindowAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitWindowAttributes", function() { return splitWindowAttributes; });
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return splitWindowAttributes(window.acceptedAttributes);
});
/**
 * @param {any[]} data
 */

var splitWindowAttributes = function splitWindowAttributes(data) {
  return data.map(function (attribute) {
    return {
      id: attribute.variation_id,
      is_active: attribute.variation_is_active,
      is_visible: attribute.variation_is_visible,
      is_in_stock: attribute.is_in_stock,
      min_qty: attribute.min_qty,
      max_qty: attribute.max_qty,
      price: attribute.display_price,
      attributes: attribute.attributes
    };
  });
};

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Single/variableProduct.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Single/variableProduct.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_Variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Variable */ "./assets/scripts/src/Woocommerce/Single/helpers/Variable.js");
/* harmony import */ var _helpers_getWindowAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getWindowAttributes */ "./assets/scripts/src/Woocommerce/Single/helpers/getWindowAttributes.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var form = document.querySelector('.js-add-to-cart'),

  /**
   * @type {NodeListOf<HTMLSelectElement>}
   */
  selects = document.querySelectorAll('.js-add-to-cart select[data-attribute_name]');

  if (selects.length === 0 || !form) {
    return;
  }

  var attributes = Object(_helpers_getWindowAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  /**
   */

  var elements = {
    form: null,
    selects: selects
  };
  /**
   * Shitload of loops. Mb reduce this?
   */

  for (var i = 0; i < elements.selects.length; i++) {
    /**
     * @type {HTMLSelectElement} select
     */
    var select = selects[i];
    select.addEventListener('change', function (e) {
      return _helpers_Variable__WEBPACK_IMPORTED_MODULE_0__["default"].selectEvent(e, attributes);
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = select.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var option = _step.value;

        if (option.hasAttribute('placeholder')) {
          continue;
        }

        if (!_helpers_Variable__WEBPACK_IMPORTED_MODULE_0__["default"].isValidOption(option, select, attributes)) {
          option.disabled = true;
          option.innerHTML += ' - UITVERKOCHT';
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});

/***/ })

}]);