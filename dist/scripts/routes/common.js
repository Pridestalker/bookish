(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{34:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(25),i=n(26);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: absolute;\nbottom: -.5rem;\nleft: -.5rem;\nbackground: #6314d2;\ncolor: #fff;\nborder-radius: 50%;\nfont-size: 70%;\npadding: .3rem .5rem;\nline-height: 1;\n"]);return l=function(){return t},t}var p=i.a.span(l()),b=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,f(e).call(this,t))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;document.body.addEventListener("product-added-to-cart",(function(e){return t.props.dataRefresh()}))}},{key:"render",value:function(){return 0===this.props.cartCount?Object(o.h)(o.b,null):Object(o.h)(p,null,this.props.cartCount)}}])&&a(n.prototype,r),i&&a(n,i),e}(o.a);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=d(e).call(this,t))||"object"!==y(r)&&"function"!=typeof r?v(o):r).state={cart:[],cartCount:null},n.fetchData=n.fetchData.bind(v(n)),n}var n,i,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(i=[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;r.a.get(window.ajax_url,{searchParams:{action:"get_cart_item_count"},credentials:"same-origin"}).then((function(e){return e.ok||t.setState({cart:[],cartCount:0}),e.json()})).then((function(e){var n,o;t.setState({cart:(null===(n=e.data)||void 0===n?void 0:n.cart_items)||[],cartCount:(null===(o=e.data)||void 0===o?void 0:o.cart_items_count)||0})}))}},{key:"render",value:function(){var t=this.state.cartCount;return Object(o.h)("a",{href:this.props.href,className:"text-primary js-shopping-cart-button shopping-cart-button p-2"},Object(o.h)("span",{className:"hidden lg:inline-block mr-2"},"winkelmandje"),Object(o.h)("span",{className:"shopping-icon",key:"icon-".concat(t)},Object(o.h)("i",{className:"fad fa-shopping-bag"})),Object(o.h)(b,{dataRefresh:this.fetchData,cartCount:t}))}}])&&h(n.prototype,i),c&&h(n,c),e}(o.a),j=document.querySelector("#mini-cart-app");function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}([""]);return k=function(){return t},t}j&&Object(o.k)(Object(o.h)(O,{href:window.shopping_cart_url}),j);i.a.section(k());var T=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,S(e).call(this,t))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return Object(o.h)("section",{className:"toast"},Object(o.h)("header",null,this.props.title))}}])&&g(n.prototype,r),i&&g(n,i),e}(o.a);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function L(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: fixed;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\npointer-events: none;\n"]);return L=function(){return t},t}var D=i.a.aside(L()),R=function(t){function e(){var t,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(o=x(e).call(this))||"object"!==E(o)&&"function"!=typeof o?N(n):o).state={toastList:[]},t.findToasts=t.findToasts.bind(N(t)),t.createNewToast=t.createNewToast.bind(N(t)),t.findToasts(),t}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),n=e,(r=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,o=n.title,r=n.time,i=n.content,c=n.color,a=n.actionText,u=n.action;t.createNewToast(o,i,c,r,a,u)}))}},{key:"createNewToast",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Close",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){},a=this.state.toastList;a.push(Object(o.h)(T,{title:t,content:e,color:n,time:r,actionText:i,action:c})),console.dir("Toast added "+t),this.setState({toastList:a})}},{key:"render",value:function(){return Object(o.h)(D,null,(this.state.toastList||[]).map((function(t){return t})))}}])&&C(n.prototype,r),i&&C(n,i),e}(o.a),q=document.querySelector("#toast-container");function J(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}q&&Object(o.k)(Object(o.h)(R,null),q);var W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,"navTarget",".nav-wrapper"),M(this,"hamburger",".js-nav-opener"),this.run()}var e,n,o;return e=t,(n=[{key:"run",value:function(){var t=document.querySelector(this.hamburger),e=document.querySelector(this.navTarget);t&&e&&t.addEventListener("click",(function(){return e.classList.toggle("active")}))}}])&&J(e.prototype,n),o&&J(e,o),t}();e.default={init:function(){new W},finalize:function(){}}}}]);