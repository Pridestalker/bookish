(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{34:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(25),i=n(26);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: absolute;\nbottom: -.5rem;\nleft: -.5rem;\nbackground: #6314d2;\ncolor: #fff;\nborder-radius: 50%;\nfont-size: 70%;\npadding: .3rem .5rem;\nline-height: 1;\n"]);return s=function(){return t},t}var p=i.a.span(s()),b=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,f(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){var t=this;document.body.addEventListener("product-added-to-cart",(function(e){return t.props.dataRefresh()}))}},{key:"render",value:function(){return 0===this.props.cartCount?Object(r.h)(r.b,null):Object(r.h)(p,null,this.props.cartCount)}}])&&a(n.prototype,o),i&&a(n,i),e}(r.a);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=d(e).call(this,t))||"object"!==y(o)&&"function"!=typeof o?m(r):o).state={cart:[],cartCount:null},n.fetchData=n.fetchData.bind(m(n)),n}var n,i,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),n=e,(i=[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;o.a.get(window.ajax_url,{searchParams:{action:"get_cart_item_count"},credentials:"same-origin"}).then((function(e){return e.ok||t.setState({cart:[],cartCount:0}),e.json()})).then((function(e){var n,r;t.setState({cart:(null===(n=e.data)||void 0===n?void 0:n.cart_items)||[],cartCount:(null===(r=e.data)||void 0===r?void 0:r.cart_items_count)||0})}))}},{key:"render",value:function(){var t=this.state.cartCount;return Object(r.h)("a",{href:this.props.href,className:"text-primary js-shopping-cart-button shopping-cart-button p-2"},Object(r.h)("span",{className:"hidden lg:inline-block mr-2"},"winkelmandje"),Object(r.h)("span",{className:"shopping-icon",key:"icon-".concat(t)},Object(r.h)("i",{className:"fad fa-shopping-bag"})),Object(r.h)(b,{dataRefresh:this.fetchData,cartCount:t}))}}])&&h(n.prototype,i),c&&h(n,c),e}(r.a),j=document.querySelector("#mini-cart-app");function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}j&&Object(r.k)(Object(r.h)(O,{href:window.shopping_cart_url}),j);var _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"navTarget",".nav-wrapper"),g(this,"hamburger",".js-nav-opener"),this.run()}var e,n,r;return e=t,(n=[{key:"run",value:function(){var t=document.querySelector(this.hamburger),e=document.querySelector(this.navTarget);t&&e&&t.addEventListener("click",(function(){return e.classList.toggle("active")}))}}])&&w(e.prototype,n),r&&w(e,r),t}();function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k={white:"hsl(0, 100%, 100%)",black:"hsl(0, 0%, 13%)",gray:"hsl(0, 0%, 89%)",green:"hsl(163, 67%, 48%)",red:"hsl(357, 100%, 55%)",yellow:"hsl(47, 100%, 68%)",purple:"hsl(265, 83%, 45%)"},T=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},k,{},{primary:k.purple,secondary:k.yellow});function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function L(){var t=R(["\n\tflex: 1 0 60%;\n"]);return L=function(){return t},t}function N(){var t=R(["\npointer-events: all;\noverflow: hidden;\nbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\nbackground: ",";\ncolor: ",";\ndisplay: flex;\nmargin: .5rem 0;\npadding: .5rem 1rem;\nborder-radius: 4px;\nwidth: 300px;\n"]);return N=function(){return t},t}function R(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var M=i.a.section(N(),T.primary,T.white),q=i.a.main(L()),A=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=C(e).call(this,t))||"object"!==x(o)&&"function"!=typeof o?D(r):o).closeMe=n.closeMe.bind(D(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),n=e,(o=[{key:"closeMe",value:function(){}},{key:"render",value:function(){return Object(r.h)(M,null,Object(r.h)(q,null,this.props.content),Object(r.h)("button",null,this.props.actionText))}}])&&E(n.prototype,o),i&&E(n,i),e}(r.a);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: fixed;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\npointer-events: none;\ndisplay: flex;\nalign-items: flex-end;\njustify-content: flex-end;\npadding: 1rem;\noverflow: hidden;\nflex-direction: column-reverse;\n"]);return H=function(){return t},t}var K=i.a.aside(H()),Q=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=B(e).call(this))||"object"!==J(r)&&"function"!=typeof r?F(n):r).state={toastList:[]},t.findToasts=t.findToasts.bind(F(t)),t.createNewToast=t.createNewToast.bind(F(t)),t.findToasts(),t}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(e,t),n=e,(o=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,r=n.time,o=n.content,i=n.color,c=n.actionText,a=n.action;t.createNewToast(o,i,r,c,a)}))}},{key:"createNewToast",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"primary",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Close",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},c=this.state.toastList;c.push(Object(r.h)(A,{content:t,color:e,time:n,actionText:o,action:i}));var a=I(c),u=a.slice(0);this.setState({toastList:u.slice(-5)})}},{key:"render",value:function(){return Object(r.h)(K,null,(this.state.toastList||[]).map((function(t){return t})))}}])&&W(n.prototype,o),i&&W(n,i),e}(r.a);e.default={init:function(){var t;new _,(t=document.querySelector("#toast-container"))&&Object(r.k)(Object(r.h)(Q,null),t)},finalize:function(){}}}}]);