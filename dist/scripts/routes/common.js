(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{34:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(25);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: absolute;\nbottom: -.5rem;\nleft: -.5rem;\nbackground: #6314d2;\ncolor: #fff;\nborder-radius: 50%;\nfont-size: 70%;\npadding: .3rem .5rem;\nline-height: 1;\n"]);return s=function(){return t},t}var l=n(26).a.span(s()),p=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,a(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){var t=this;document.body.addEventListener("product-added-to-cart",(function(e){return t.props.dataRefresh()}))}},{key:"render",value:function(){return 0===this.props.cartCount?Object(r.h)(r.b,null):Object(r.h)(l,null,this.props.cartCount)}}])&&c(n.prototype,o),i&&c(n,i),e}(r.a);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=h(e).call(this,t))||"object"!==b(o)&&"function"!=typeof o?d(r):o).state={cart:[],cartCount:null},n.fetchData=n.fetchData.bind(d(n)),n}var n,i,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(i=[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;o.a.get(window.ajax_url,{searchParams:{action:"get_cart_item_count"},credentials:"same-origin"}).then((function(e){return e.ok||t.setState({cart:[],cartCount:0}),e.json()})).then((function(e){var n,r;t.setState({cart:(null===(n=e.data)||void 0===n?void 0:n.cart_items)||[],cartCount:(null===(r=e.data)||void 0===r?void 0:r.cart_items_count)||0})}))}},{key:"render",value:function(){var t=this.state.cartCount;return Object(r.h)("a",{href:this.props.href,className:"text-primary js-shopping-cart-button shopping-cart-button p-2"},Object(r.h)("span",{className:"hidden lg:inline-block mr-2"},"winkelmandje"),Object(r.h)("span",{className:"shopping-icon",key:"icon-".concat(t)},Object(r.h)("i",{className:"fad fa-shopping-bag"})),Object(r.h)(p,{dataRefresh:this.fetchData,cartCount:t}))}}])&&y(n.prototype,i),c&&y(n,c),e}(r.a),O=document.querySelector("#mini-cart-app");function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}O&&Object(r.k)(Object(r.h)(v,{href:window.shopping_cart_url}),O);var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,"navTarget",".nav-wrapper"),j(this,"hamburger",".js-nav-opener"),this.run()}var e,n,r;return e=t,(n=[{key:"run",value:function(){var t=document.querySelector(this.hamburger),e=document.querySelector(this.navTarget);t&&e&&t.addEventListener("click",(function(){return e.classList.toggle("active")}))}}])&&w(e.prototype,n),r&&w(e,r),t}(),_=n(36);e.default={init:function(){new g,Object(_.a)()},finalize:function(){}}},36:function(t,e,n){"use strict";var r=n(0),o=n(26);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={white:"hsl(0, 100%, 100%)",black:"hsl(0, 0%, 13%)",gray:"hsl(0, 0%, 89%)",green:"hsl(163, 67%, 48%)",red:"hsl(357, 100%, 55%)",yellow:"hsl(47, 100%, 68%)",purple:"hsl(265, 83%, 45%)"},a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},u,{},{primary:u.purple,secondary:u.yellow});function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: absolute;\nbottom: 0;\nleft: 0;\nwidth: ",";\ntransition: width 225ms ease;\nheight: 3px;\nbackground: rgba(255, 255, 255, 0.4);\nbackdrop-filter: blur(2px);\n"]);return y=function(){return t},t}var h=o.a.div(y(),(function(t){return(t.width||0)+"%"})),d=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=l(e).call(this,t))||"object"!==f(o)&&"function"!=typeof o?p(r):o).state={time:t.time||!1,width:0},n.increaseWidth=n.increaseWidth.bind(p(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(o=[{key:"increaseWidth",value:function(t){this.setState({width:this.state.width+=t})}},{key:"render",value:function(){var t=this;if(!this.state.time)return Object(r.h)(r.b,null);var e=setInterval((function(){return t.increaseWidth(100/t.state.time)}),100/this.state.time);return this.state.width>=100&&clearInterval(e),Object(r.h)(h,{width:this.state.width})}}])&&s(n.prototype,o),i&&s(n,i),e}(r.a);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(){var t=P([""]);return g=function(){return t},t}function _(){var t=P(["\n\tflex: 1 0 60%;\n"]);return _=function(){return t},t}function S(){var t=P(["\npointer-events: all;\noverflow: hidden;\nbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\nbackground: ",";\ncolor: ",";\ndisplay: flex;\nmargin: .5rem 0;\npadding: .5rem 1rem;\nborder-radius: 4px;\nwidth: 300px;\nposition: relative;\n"]);return S=function(){return t},t}function P(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var k=o.a.section(S(),a.primary,a.white),T=o.a.main(_()),x=o.a.button(g()),E=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,w(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t=this;return Object(r.h)(k,null,Object(r.h)(T,null,this.props.content),Object(r.h)(x,{onClick:function(e){return t.props.action(t.props.slug)}},this.props.actionText),Object(r.h)(d,{time:this.props.time}))}}])&&v(n.prototype,o),i&&v(n,i),e}(r.a);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: fixed;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\npointer-events: none;\ndisplay: flex;\nalign-items: flex-end;\njustify-content: flex-end;\npadding: 1rem;\noverflow: hidden;\nflex-direction: column;\n"]);return W=function(){return t},t}var q=o.a.aside(W()),A=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=L(e).call(this))||"object"!==C(r)&&"function"!=typeof r?N(n):r).state={toastList:[]},t.findToasts=t.findToasts.bind(N(t)),t.createNewToast=t.createNewToast.bind(N(t)),t.removeToast=t.removeToast.bind(N(t)),t.findToasts(),t}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,t),n=e,(o=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,r=n.slug,o=n.time,i=n.content,c=n.color,u=n.actionText;t.createNewToast(r,i,c,o,u)}))}},{key:"removeToast",value:function(t){var e=this.state.toastList;this.setState({toastList:e.filter((function(e){return e.slug!==t}))})}},{key:"createNewToast",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Close",u=this.state.toastList;u.push({slug:t,item:Object(r.h)(E,{content:e,color:o,time:i,actionText:c,action:this.removeToast,slug:t})});var a=z(u),f=a.slice(0);i&&"number"==typeof i&&setTimeout((function(){n.removeToast(t)}),i),this.setState({toastList:f.slice(-5)})}},{key:"render",value:function(){return Object(r.h)(q,null,(this.state.toastList||[]).map((function(t){return t.item})))}}])&&D(n.prototype,o),i&&D(n,i),e}(r.a);function I(){var t=document.querySelector("#toast-container");t&&Object(r.k)(Object(r.h)(A,null),t)}function J(t){var e=t.slug,n=t.time,r=t.content,o=t.color,i=t.actionText;document.body.dispatchEvent(new CustomEvent("register-toast",{detail:{slug:e,time:n,content:r,color:o,actionText:i}}))}n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return J}))}}]);