(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/single-product"],{

/***/ "./assets/scripts/routes/SingleProduct.js":
/*!************************************************!*\
  !*** ./assets/scripts/routes/SingleProduct.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Elements_Product_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Elements/Product/tabs */ "./assets/scripts/src/Elements/Product/tabs.js");
/* harmony import */ var _src_Elements_Product_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Elements/Product/gallery */ "./assets/scripts/src/Elements/Product/gallery.js");
/* harmony import */ var _src_VariableProductSelector_VariableProductSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/VariableProductSelector/VariableProductSelector */ "./assets/scripts/src/VariableProductSelector/VariableProductSelector.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {// Javascript that fires on all pages.
  },
  finalize: function finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    new _src_VariableProductSelector_VariableProductSelector__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
});

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
  var data = _taggedTemplateLiteral(["\n<style>\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll\n}\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n.featured-image {\n    max-height: 450px;\n    width: 100%;\n    transition: all 225ms ease-in-out;\n}\n\n.button-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;ish\n}\n\nfigure {\n    margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t}\n\t\n\t.featured-image {\n\t\twidth: auto;\n\t}\n}\n</style>\n"]);

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_gallery_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery/gallery-group */ "./assets/scripts/src/Elements/Product/Gallery/gallery-group.js");
/* harmony import */ var _Gallery_gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery/gallery-item */ "./assets/scripts/src/Elements/Product/Gallery/gallery-item.js");
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");



Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('gallery-group', _Gallery_gallery_group__WEBPACK_IMPORTED_MODULE_0__["default"]);
Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('gallery-item', _Gallery_gallery_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/tabs.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/tabs.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_tab_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs/tab-group */ "./assets/scripts/src/Elements/Product/Tabs/tab-group.js");
/* harmony import */ var _Tabs_tab_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/tab-item */ "./assets/scripts/src/Elements/Product/Tabs/tab-item.js");
/* harmony import */ var hybrids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hybrids */ "./node_modules/hybrids/esm/index.js");



Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('tab-group', _Tabs_tab_group__WEBPACK_IMPORTED_MODULE_0__["default"]);
Object(hybrids__WEBPACK_IMPORTED_MODULE_2__["define"])('tab-item', _Tabs_tab_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./assets/scripts/src/VariableProductSelector/VariableProductSelector.js":
/*!*******************************************************************************!*\
  !*** ./assets/scripts/src/VariableProductSelector/VariableProductSelector.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VariableProductSelector =
/*#__PURE__*/
function () {
  function VariableProductSelector() {
    _classCallCheck(this, VariableProductSelector);

    _defineProperty(this, "attributeList", []);

    _defineProperty(this, "elements", {
      form: null,
      selects: []
    });

    this.attributeList = this.splitAttributes(window.acceptedAttributes);
    this.elements.form = document.querySelector(VariableProductSelector.formSelector);

    if (!this.elements.form) {
      return;
    }

    this.elements.selects = document.querySelectorAll(VariableProductSelector.selectSelector);

    if (this.elements.selects.length === 0) {
      return;
    }

    this.run();
  }

  _createClass(VariableProductSelector, [{
    key: "run",
    value: function run() {
      var _this = this;

      for (var i = 0; i < this.elements.selects.length; i++) {
        this.elements.selects[i].addEventListener('change', function (e) {
          return _this.selectEvent(e);
        });
      }
    }
  }, {
    key: "selectEvent",
    value: function selectEvent(e) {
      var _e$target = e.target,
          value = _e$target.value,
          dataset = _e$target.dataset;
      var attribute_name = dataset.attribute_name;
      var possibilities = this.attributeList.filter(function (attribute) {
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
    }
    /**
     *
     * @param {any[]} data
     */

  }, {
    key: "splitAttributes",
    value: function splitAttributes(data) {
      return data.map(function (attribute) {
        return {
          id: attribute.variation_id,
          is_active: attribute.variation_is_active,
          is_visible: attribute.variation_is_visible,
          min_qty: attribute.min_qty,
          max_qty: attribute.max_qty,
          price: attribute.display_price,
          attributes: attribute.attributes
        };
      });
    }
  }]);

  return VariableProductSelector;
}();

_defineProperty(VariableProductSelector, "formSelector", '.js-add-to-cart');

_defineProperty(VariableProductSelector, "selectSelector", 'select[data-attribute_name]');

/* harmony default export */ __webpack_exports__["default"] = (VariableProductSelector);

/***/ })

}]);