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
/* harmony import */ var _src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Woocommerce/Checkout */ "./assets/scripts/src/Woocommerce/Checkout/index.js");
/* harmony import */ var _services_checkout_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/checkout/app */ "./assets/scripts/services/checkout/app.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function init() {
    (0,_services_checkout_app__WEBPACK_IMPORTED_MODULE_1__.insertModalButton)();
    (0,_services_checkout_app__WEBPACK_IMPORTED_MODULE_1__.renderPostCodeModal)();
    (0,_services_checkout_app__WEBPACK_IMPORTED_MODULE_1__.addListenToAddressFillRequest)();
  },
  finalize: function finalize() {
    (0,_src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_0__.checkForDifferentShipping)();
    (0,_src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_0__.openLoginForm)();
    (0,_src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_0__.openCreateAccount)();
    (0,_src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_0__.addSelectChangeListeners)();
  }
});

/***/ }),

/***/ "./assets/scripts/services/checkout/addresFill/FillAddressOnRequest.js":
/*!*****************************************************************************!*\
  !*** ./assets/scripts/services/checkout/addresFill/FillAddressOnRequest.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenToAddressFillRequest": () => /* binding */ addListenToAddressFillRequest
/* harmony export */ });
/* harmony import */ var _elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elderbraum/simple-event-bus */ "./node_modules/@elderbraum/simple-event-bus/index.js");
/* harmony import */ var _modal_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-button */ "./assets/scripts/services/checkout/modal-button/index.js");


var addListenToAddressFillRequest = function addListenToAddressFillRequest() {
  (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__.listenEvent)(_modal_button__WEBPACK_IMPORTED_MODULE_1__.EVENTS.POSTCODE_FILLER.HAS_BEEN_FOUND, listenToAddressFillRequest);
};

var listenToAddressFillRequest = function listenToAddressFillRequest(_ref) {
  var detail = _ref.detail;
  var city = detail.city,
      number = detail.number,
      postcode = detail.postcode,
      street = detail.street,
      isShipping = detail.isShipping;
  var addressInput, postcodeInput, cityInput;

  if (isShipping) {
    addressInput = document.getElementById('shipping_address_1');
    postcodeInput = document.getElementById('shipping_postcode');
    cityInput = document.getElementById('shipping_city');
  } else {
    addressInput = document.getElementById('billing_address_1');
    postcodeInput = document.getElementById('billing_postcode');
    cityInput = document.getElementById('billing_city');
  }

  addressInput.value = "".concat(street, " ").concat(number);
  postcodeInput.value = postcode;
  postcodeInput.setAttribute('readonly', 'true');
  cityInput.value = city;
  cityInput.setAttribute('readonly', 'true');
};

/***/ }),

/***/ "./assets/scripts/services/checkout/addresFill/index.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/services/checkout/addresFill/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenToAddressFillRequest": () => /* reexport safe */ _FillAddressOnRequest__WEBPACK_IMPORTED_MODULE_0__.addListenToAddressFillRequest
/* harmony export */ });
/* harmony import */ var _FillAddressOnRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FillAddressOnRequest */ "./assets/scripts/services/checkout/addresFill/FillAddressOnRequest.js");


/***/ }),

/***/ "./assets/scripts/services/checkout/app.js":
/*!*************************************************!*\
  !*** ./assets/scripts/services/checkout/app.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertModalButton": () => /* reexport safe */ _modal_button__WEBPACK_IMPORTED_MODULE_0__.insertModalButton,
/* harmony export */   "renderPostCodeModal": () => /* reexport safe */ _modal_button__WEBPACK_IMPORTED_MODULE_0__.renderPostCodeModal,
/* harmony export */   "Modal": () => /* reexport safe */ _modal_button__WEBPACK_IMPORTED_MODULE_0__.Modal,
/* harmony export */   "addListenToAddressFillRequest": () => /* reexport safe */ _addresFill__WEBPACK_IMPORTED_MODULE_1__.addListenToAddressFillRequest
/* harmony export */ });
/* harmony import */ var _modal_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-button */ "./assets/scripts/services/checkout/modal-button/index.js");
/* harmony import */ var _addresFill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addresFill */ "./assets/scripts/services/checkout/addresFill/index.js");



/***/ }),

/***/ "./assets/scripts/services/checkout/modal-button/Modal.js":
/*!****************************************************************!*\
  !*** ./assets/scripts/services/checkout/modal-button/Modal.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => /* binding */ Modal,
/* harmony export */   "renderPostCodeModal": () => /* binding */ renderPostCodeModal
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elderbraum/simple-event-bus */ "./node_modules/@elderbraum/simple-event-bus/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./assets/scripts/services/checkout/modal-button/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme */ "./assets/scripts/theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ky */ "./node_modules/ky/index.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n\n    background: #ffffff;\n    box-shadow: 0 3px 6px rgba(51, 51, 51, 0.4);\n    padding: 1.5rem 1rem;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div(_templateObject());
var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.resetData = _this.resetData.bind(_assertThisInitialized(_this));
    _this.getUserAddress = _this.getUserAddress.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      number: null,
      postcode: null,
      loading: false,
      isShipping: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_2__.listenEvent)(___WEBPACK_IMPORTED_MODULE_3__.EVENTS.POSTCODE_FILLER.OPEN, function (_ref) {
        var detail = _ref.detail;
        return _this2.setState({
          isOpen: true,
          isShipping: detail.isShipping
        });
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "resetData",
    value: function resetData() {
      this.setState({
        postcode: null,
        number: null
      });
    }
  }, {
    key: "getUserAddress",
    value: function () {
      var _getUserAddress = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this$state, postcode, number, isShipping, res, body;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _this$state = this.state, postcode = _this$state.postcode, number = _this$state.number, isShipping = _this$state.isShipping;

                if (!(!postcode || !number || postcode.length !== 6)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return ky__WEBPACK_IMPORTED_MODULE_6__.default.get('/wp-admin/admin-ajax.php', {
                  searchParams: {
                    action: 'get_user_shipping_address',
                    number: number,
                    postcode: postcode
                  }
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                body = _context.sent;
                (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_2__.fireEvent)(___WEBPACK_IMPORTED_MODULE_3__.EVENTS.POSTCODE_FILLER.HAS_BEEN_FOUND, _objectSpread(_objectSpread({}, body.data), {}, {
                  number: number,
                  postcode: postcode,
                  isShipping: isShipping
                }));
                this.setState({
                  loading: false
                });
                this.closeModal();
                this.resetData();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserAddress() {
        return _getUserAddress.apply(this, arguments);
      }

      return getUserAddress;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isOpen = this.state.isOpen;

      if (!isOpen) {
        return '';
      }

      var _this$state2 = this.state,
          postcode = _this$state2.postcode,
          number = _this$state2.number,
          loading = _this$state2.loading;
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
        theme: _theme__WEBPACK_IMPORTED_MODULE_4__.defaultTheme
      }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
        open: isOpen,
        onClose: this.closeModal
      }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(ModalBody, null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
        label: "Postcode",
        value: postcode,
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return _this3.setState({
            postcode: target.value.replace(/\s/g, '')
          });
        },
        required: true,
        variant: 'outlined',
        style: {
          marginBottom: '.5rem'
        }
      }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
        label: "Huisnummer",
        variant: 'outlined',
        value: number,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return _this3.setState({
            number: target.value
          });
        },
        required: true,
        style: {
          marginBottom: '.5rem'
        },
        helperText: 'Voer jouw huisnummer in, zonder toevoeging'
      }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
        onClick: this.getUserAddress,
        disabled: loading,
        variant: 'contained',
        color: 'primary'
      }, "Zoeken"), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
        onClick: this.closeModal,
        disabled: loading
      }, "Sluiten"))));
    }
  }]);

  return Modal;
}(preact__WEBPACK_IMPORTED_MODULE_1__.Component);
var renderPostCodeModal = function renderPostCodeModal() {
  (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(Modal, null), document.body);
};

/***/ }),

/***/ "./assets/scripts/services/checkout/modal-button/ModalButton.js":
/*!**********************************************************************!*\
  !*** ./assets/scripts/services/checkout/modal-button/ModalButton.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => /* binding */ Button
/* harmony export */ });
/* harmony import */ var _elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elderbraum/simple-event-bus */ "./node_modules/@elderbraum/simple-event-bus/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./assets/scripts/services/checkout/modal-button/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme */ "./assets/scripts/theme.js");






var Button = function Button(props) {
  function handleButtonClick() {
    (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__.fireEvent)(___WEBPACK_IMPORTED_MODULE_2__.EVENTS.POSTCODE_FILLER.OPEN, {
      isShipping: props.isShipping
    });
  }

  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
    theme: _theme__WEBPACK_IMPORTED_MODULE_4__.defaultTheme
  }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    color: 'primary',
    style: {
      display: 'block'
    },
    id: props.isShipping ? 'autofill_from_postcode_shipping' : 'autofill_from_postcode_billing',
    onClick: handleButtonClick
  }, "Adres laten invoeren"));
};
Button.propTypes = {
  isShipping: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};

/***/ }),

/***/ "./assets/scripts/services/checkout/modal-button/events.js":
/*!*****************************************************************!*\
  !*** ./assets/scripts/services/checkout/modal-button/events.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENTS": () => /* binding */ EVENTS
/* harmony export */ });
var _this = undefined;

var EVENTS = {
  POSTCODE_FILLER: {
    START: function START() {
      return _this.OPEN;
    },
    END: function END() {
      return _this.CLOSE;
    },
    CLOSE: 'close-postcode-filler',
    OPEN: 'open-postcode-filler',
    HAS_BEEN_FILLED: 'postcode-filler-on-fill',
    HAS_BEEN_FOUND: 'postcode-found'
  }
};

/***/ }),

/***/ "./assets/scripts/services/checkout/modal-button/index.js":
/*!****************************************************************!*\
  !*** ./assets/scripts/services/checkout/modal-button/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => /* reexport safe */ _ModalButton__WEBPACK_IMPORTED_MODULE_0__.Button,
/* harmony export */   "insertModalButton": () => /* reexport safe */ _render__WEBPACK_IMPORTED_MODULE_1__.insertModalButton,
/* harmony export */   "renderPostCodeModal": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_2__.renderPostCodeModal,
/* harmony export */   "Modal": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_2__.Modal,
/* harmony export */   "EVENTS": () => /* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_3__.EVENTS
/* harmony export */ });
/* harmony import */ var _ModalButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalButton */ "./assets/scripts/services/checkout/modal-button/ModalButton.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./assets/scripts/services/checkout/modal-button/render.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./assets/scripts/services/checkout/modal-button/Modal.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./assets/scripts/services/checkout/modal-button/events.js");





/***/ }),

/***/ "./assets/scripts/services/checkout/modal-button/render.js":
/*!*****************************************************************!*\
  !*** ./assets/scripts/services/checkout/modal-button/render.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertModalButton": () => /* binding */ insertModalButton
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./assets/scripts/services/checkout/modal-button/index.js");
/* harmony import */ var _src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/Woocommerce/Checkout */ "./assets/scripts/src/Woocommerce/Checkout/index.js");
/* harmony import */ var _elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elderbraum/simple-event-bus */ "./node_modules/@elderbraum/simple-event-bus/index.js");




var insertModalButton = function insertModalButton() {
  var target = document.getElementById('billing_address_1_field');
  var shippingTarget = document.getElementById('shipping_address_1_field');

  if (!target) {
    return;
  }

  (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(___WEBPACK_IMPORTED_MODULE_1__.Button, {
    isShipping: false
  }), target);

  if (shippingTarget) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(___WEBPACK_IMPORTED_MODULE_1__.Button, {
      isShipping: true
    }), shippingTarget);
  }

  var billingButton = document.getElementById('autofill_from_postcode_billing');
  hideFieldIfNotNL(billingButton, document.getElementById('billing_country').value);
  (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_3__.listenEvent)(_src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CHANGE_COUNTRY.BILLING, function (_ref) {
    var detail = _ref.detail;
    hideFieldIfNotNL(billingButton, detail);
  });

  if (shippingTarget) {
    var shippingButton = document.getElementById('autofill_from_postcode_shipping');
    hideFieldIfNotNL(shippingButton, document.getElementById('shipping_country').value);
    (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_3__.listenEvent)(_src_Woocommerce_Checkout__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CHANGE_COUNTRY.SHIPPING, function (_ref2) {
      var detail = _ref2.detail;
      hideFieldIfNotNL(shippingButton, detail);
    });
  }
};

var hideFieldIfNotNL = function hideFieldIfNotNL(field, country) {
  if (country === 'NL') {
    field.style.display = '';
  } else {
    field.style.display = 'none';
  }
};

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
/* harmony export */   "checkForDifferentShipping": () => /* reexport safe */ _checkForDifferentShipping__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "openLoginForm": () => /* reexport safe */ _openLoginForm__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "openCreateAccount": () => /* reexport safe */ _OpenCreateAccount__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "addSelectChangeListeners": () => /* reexport safe */ _listenToCountryChanges__WEBPACK_IMPORTED_MODULE_3__.addSelectChangeListeners,
/* harmony export */   "EVENTS": () => /* reexport safe */ _listenToCountryChanges__WEBPACK_IMPORTED_MODULE_3__.EVENTS
/* harmony export */ });
/* harmony import */ var _checkForDifferentShipping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForDifferentShipping */ "./assets/scripts/src/Woocommerce/Checkout/checkForDifferentShipping.js");
/* harmony import */ var _openLoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openLoginForm */ "./assets/scripts/src/Woocommerce/Checkout/openLoginForm.js");
/* harmony import */ var _OpenCreateAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenCreateAccount */ "./assets/scripts/src/Woocommerce/Checkout/OpenCreateAccount.js");
/* harmony import */ var _listenToCountryChanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listenToCountryChanges */ "./assets/scripts/src/Woocommerce/Checkout/listenToCountryChanges.js");





/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Checkout/listenToCountryChanges.js":
/*!***************************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Checkout/listenToCountryChanges.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENTS": () => /* binding */ EVENTS,
/* harmony export */   "addSelectChangeListeners": () => /* binding */ addSelectChangeListeners
/* harmony export */ });
/* harmony import */ var _elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elderbraum/simple-event-bus */ "./node_modules/@elderbraum/simple-event-bus/index.js");

var EVENTS = {
  CHANGE_COUNTRY: {
    BILLING: 'checkout-change-billing-country',
    SHIPPING: 'checkout-change-shipping-country'
  }
};
var addSelectChangeListeners = function addSelectChangeListeners() {
  var billingSelect = document.getElementById('billing_country');
  var shippingSelect = document.getElementById('shipping_country');

  if (billingSelect) {
    billingSelect.addEventListener('input', function (e) {
      (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__.fireEvent)(EVENTS.CHANGE_COUNTRY.BILLING, e.target.value);
    });
  }

  if (shippingSelect) {
    shippingSelect.addEventListener('input', function (e) {
      (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_0__.fireEvent)(EVENTS.CHANGE_COUNTRY.SHIPPING, e.target.value);
    });
  }
};

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

/***/ "./assets/scripts/theme.js":
/*!*********************************!*\
  !*** ./assets/scripts/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => /* reexport safe */ _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "defaultTheme": () => /* binding */ defaultTheme
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");


var defaultTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  palette: {
    primary: {
      main: 'hsl(265, 83%, 45%)'
    },
    secondary: {
      main: 'hsl(47, 100%, 68%)'
    },
    error: {
      main: 'hsl(357, 100%, 55%)'
    },
    success: {
      main: 'hsl(122, 67%, 48%)'
    }
  }
});

/***/ })

}]);