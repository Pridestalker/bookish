(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{30:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={white:"hsl(0, 100%, 100%)",black:"hsl(0, 0%, 13%)",gray:"hsl(0, 0%, 89%)",green:"hsl(163, 67%, 48%)",red:"hsl(357, 100%, 55%)",yellow:"hsl(47, 100%, 68%)",purple:"hsl(265, 83%, 45%)"},u=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,{},{primary:i.purple,secondary:i.yellow}),a=u;function c(t,e){return u.hasOwnProperty(t)?u[t]:u[e]}var l={search:{post_type:{product:"product",page:"pagina",post:"bericht"}}};var s={$t:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,r=t.split(".");return r.reduce((function(t,n){return t&&t[n]?t[n]:e}),n)},locales:{nl:l}};n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s}))},31:function(t,e,n){"use strict";var r=n(0),o=n(24),i=n(30);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: ",";\n\ttransition: width 225ms ease;\n\theight: 3px;\n\tbackground: rgba(255, 255, 255, 0.4);\n\tbackdrop-filter: blur(2px);\n"]);return f=function(){return t},t}var p=o.b.div(f(),(function(t){return(t.width||0)+"%"})),b=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=c(e).call(this,t))||"object"!==u(o)&&"function"!=typeof o?l(r):o).state={width:0},n.interval=null,n.increaseWidth=n.increaseWidth.bind(l(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),n=e,(o=[{key:"increaseWidth",value:function(t){this.setState({width:this.state.width+=t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this;return this.props.time?(this.interval=setInterval((function(){return t.increaseWidth(100/t.props.time)}),100),this.state.width>=100&&clearInterval(this.interval),Object(r.h)(p,{width:this.state.width})):Object(r.h)(r.b,null)}}])&&a(n.prototype,o),i&&a(n,i),e}(r.a);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(){var t=w([""]);return O=function(){return t},t}function g(){var t=w(["\n\tflex: 1 0 60%;\n"]);return g=function(){return t},t}function j(){var t=w(["\n\tpointer-events: all;\n\toverflow: hidden;\n\tbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\n\tbackground: ",";\n\tcolor: ",";\n\tdisplay: flex;\n\tmargin: .5rem 0;\n\tpadding: .5rem 1rem;\n\tborder-radius: 4px;\n\twidth: 300px;\n\tposition: relative;\n"]);return j=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _=o.b.section(j(),i.a.primary,i.a.white),S=o.b.main(g()),P=o.b.button(O()),k=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,d(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t,e,n=this;return Object(r.h)(_,{type:null!==(t=this.props.type)&&void 0!==t?t:"primary",color:null!==(e=this.props.color)&&void 0!==e?e:"white"},Object(r.h)(S,null,this.props.content),Object(r.h)(P,{onClick:function(t){return n.props.action(n.props.slug)}},this.props.actionText),Object(r.h)(b,{time:this.props.time}))}}])&&y(n.prototype,o),i&&y(n,i),e}(r.a);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tpointer-events: none;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tpadding: 1rem;\n\toverflow: hidden;\n\tflex-direction: column;\n"]);return A=function(){return t},t}var D=o.b.aside(A()),R=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=C(e).call(this))||"object"!==T(r)&&"function"!=typeof r?z(n):r).state={toastList:[]},t.findToasts=t.findToasts.bind(z(t)),t.createNewToast=t.createNewToast.bind(z(t)),t.removeToast=t.removeToast.bind(z(t)),t.findToasts(),t}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(e,t),n=e,(o=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,r=n.slug,o=n.time,i=n.content,u=n.color,a=n.actionText;t.createNewToast(r,i,u,o,a)}))}},{key:"removeToast",value:function(t){var e=this.state.toastList;this.setState({toastList:e.filter((function(e){return e.slug!==t}))})}},{key:"createNewToast",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Close",a=this.state.toastList;a.push({slug:t,item:Object(r.h)(k,{content:e,color:o,time:i,actionText:u,action:this.removeToast,slug:t})});var c=E(a),l=c.slice(0);i&&"number"==typeof i&&setTimeout((function(){n.removeToast(t)}),i),this.setState({toastList:l.slice(-5)})}},{key:"render",value:function(){return Object(r.h)(D,null,(this.state.toastList||[]).map((function(t){return t.item})))}}])&&x(n.prototype,o),i&&x(n,i),e}(r.a);function F(){var t=document.querySelector("#toast-container");t&&Object(r.k)(Object(r.h)(R,null),t)}function L(t){var e=t.slug,n=t.time,r=t.content,o=t.color,i=t.actionText;document.body.dispatchEvent(new CustomEvent("register-toast",{detail:{slug:e,time:n,content:r,color:o,actionText:i}}))}n.d(e,"a",(function(){return F})),n.d(e,"b",(function(){return L}))},37:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(27),i=n(24);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: absolute;\n\tbottom: -.5rem;\n\tleft: -.5rem;\n\tbackground: #6314d2;\n\tcolor: #fff;\n\tborder-radius: 50%;\n\tfont-size: 70%;\n\tpadding: .3rem .5rem;\n\tline-height: 1;\n"]);return f=function(){return t},t}var p=i.b.span(f()),b=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,l(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){if(0!==this.props.cartCount)return Object(r.h)(p,null,this.props.cartCount)}}])&&a(n.prototype,o),i&&a(n,i),e}(r.a),h=n(26),y=n(29);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=v(e).call(this,t),(n=!o||"object"!==m(o)&&"function"!=typeof o?O(r):o).state={cart:[],cartCount:0},n.fetchData=n.fetchData.bind(O(n)),document.body.addEventListener("product-added-to-cart",(function(){return n.fetchData()})),n}var n,i,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),n=e,(i=[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;o.a.get(window.ajax_url,{searchParams:{action:"get_cart_item_count"},credentials:"same-origin"}).then((function(e){return e.ok||t.setState({cart:[],cartCount:0}),e.json()})).then((function(e){var n,r;t.setState({cart:(null===(n=e.data)||void 0===n?void 0:n.cart_items)||[],cartCount:(null===(r=e.data)||void 0===r?void 0:r.cart_items_count)||0})}))}},{key:"render",value:function(){var t=this.state.cartCount;return Object(r.h)("a",{href:this.props.href,className:"text-primary js-shopping-cart-button shopping-cart-button p-2"},Object(r.h)("span",{className:"hidden lg:inline-block mr-2"},"winkelmandje"),Object(r.h)(h.a,{icon:y.c,className:"shopping-icon"}),Object(r.h)(b,{cartCount:t}))}}])&&d(n.prototype,i),u&&d(n,u),e}(r.a);function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"navTarget",".nav-wrapper"),_(this,"hamburger",".js-nav-opener"),this.run()}var e,n,r;return e=t,(n=[{key:"run",value:function(){var t=document.querySelector(this.hamburger),e=document.querySelector(this.navTarget);t&&e&&t.addEventListener("click",(function(){return e.classList.toggle("active")}))}}])&&w(e.prototype,n),r&&w(e,r),t}();var P=n(31),k=n(30);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(){var t=R(["\ndisplay: block;\n"]);return H=function(){return t},t}function A(){var t=R(["\n\n"]);return A=function(){return t},t}function D(){var t=R(["\ncursor: pointer;\nmargin-bottom: .5rem;\ntransition: background-color 225ms ease,\n\t\t\tcolor 225ms ease-in-out;\npadding: 1rem .5rem;\n\n&:hover {\n\tbackground: ",";\n\tcolor: ",";\n}\n"]);return D=function(){return t},t}function R(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var F=i.b.li(D(),k.a.primary,k.a.white),L=i.b.strong(A()),q=i.b.small(H()),N=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=x(e).call(this,t))||"object"!==T(o)&&"function"!=typeof o?C(r):o).item=t.item,n.clickHandler=n.clickHandler.bind(C(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),n=e,(o=[{key:"clickHandler",value:function(){window.location.search=new URLSearchParams({p:this.item.ID}).toString()}},{key:"render",value:function(){if("publish"===this.item.post_status)return Object(r.h)(F,{onClick:this.clickHandler},Object(r.h)(L,null,this.item.post_title),Object(r.h)(q,null,k.b.$t("search.post_type.".concat(this.item.post_type),this.item.post_type)))}}])&&E(n.prototype,o),i&&E(n,i),e}(r.a);function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Z(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: absolute;\ntop: 100%;\nleft: 0;\nright: 0;\nbackground: ",";\nbox-shadow: 0 3px 6px rgba(51,51,51, 0.2);\n"]);return Z=function(){return t},t}var $=i.b.ul(Z(),k.a.white),B=function(t){function e(){return W(this,e),J(this,M(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){if(0!==this.props.posts.length)return Object(r.h)($,null,this.props.posts.map((function(t){return Object(r.h)(N,{item:t})})))}}])&&I(n.prototype,o),i&&I(n,i),e}(r.a);function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var tt=document.querySelector("#search-form"),et=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=K(e).call(this,t))||"object"!==G(o)&&"function"!=typeof o?Q(r):o).abortControllers=[],n.searchHandler=n.searchHandler.bind(Q(n)),n.hideAutoFill=n.hideAutoFill.bind(Q(n)),n.showAutoFill=n.showAutoFill.bind(Q(n)),n.state={loading:!1,searchValue:null,searchResults:[],count:0,isVisible:!1},n}var n,i,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,t),n=e,(i=[{key:"searchHandler",value:function(t){var e=this;this.abortControllers.forEach((function(t){return t.abort()}));var n=new AbortController;this.abortControllers.push(n),this.setState({searchValue:t.target.value,loading:!0}),o.a.get(window.ajax_url,{signal:n.signal,searchParams:{action:"search_results",s:this.state.searchValue}}).then((function(t){return t.json()})).then((function(t){var n=t.data,r=n.count,o=n.posts;e.setState({searchResults:o,count:r})})).catch((function(t){e.setState({searchResults:[],count:0})})).finally((function(){return e.setState({loading:!1})}))}},{key:"hideAutoFill",value:function(){this.setState({isVisible:!1})}},{key:"showAutoFill",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){return Object(r.h)("form",{className:"search-form",action:"/",method:"GET"},Object(r.h)("input",{type:"hidden",name:"post_type",value:"product",id:"post_type"}),Object(r.h)("label",{htmlFor:"autoComplete",className:"sr-only"},"Zoeken naar..."),Object(r.h)("input",{type:"text",placeholder:"Waar ben je naar op zoek?",id:"autoComplete",name:"s",onChange:this.searchHandler,value:this.state.searchValue,autoComplete:"off",onFocus:this.showAutoFill,onBlur:this.hideAutoFill}),Object(r.h)("button",{className:"btn search-icon",type:"submit",name:"Zoeken",disabled:this.state.loading},Object(r.h)(h.a,{icon:this.state.loading?y.e:y.b,color:k.a.primary,spin:this.state.loading})),this.state.isVisible&&""!==this.state.searchValue&&Object(r.h)(B,{posts:this.state.searchResults}))}}])&&Y(n.prototype,i),u&&Y(n,u),e}(r.a);function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function it(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function at(){var t=st(["\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tleft: 1rem;\n\ttransition: all 225ms ease-in-out;\n\tcolor: ",";\n\topacity: 0.6;\n\t\n\t&.active {\n\t\tfont-size: 50%;\n\t\ttransform: none;\n\t\ttop: 0;\n\t}\n"]);return at=function(){return t},t}function ct(){var t=st(["\n\tposition: relative;\n"]);return ct=function(){return t},t}function lt(){var t=st(["\n\tcolor: ",";\n"]);return lt=function(){return t},t}function st(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var ft=i.b.input.attrs((function(t){return{type:t.type||"text"}}))(lt(),k.a.black),pt=i.b.div(ct()),bt=i.b.label.attrs((function(t){return{}}))(at(),k.a.black),ht=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=ot(e).call(this,t))||"object"!==nt(o)&&"function"!=typeof o?it(r):o).state={activated:!1},n.focusHandler=n.focusHandler.bind(it(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(e,t),n=e,(o=[{key:"focusHandler",value:function(){this.setState({activated:!0})}},{key:"render",value:function(){var t=this,e=this.props,n=e.type,o=e.label,i=e.required,u=e.target,a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;return Math.random().toString(36).substr(2,t)}();return Object(r.h)(pt,null,Object(r.h)(bt,{htmlFor:a,className:this.state.activated?"active":""},o," ",i&&Object(r.h)("span",{style:{color:"#f00"}},"*")),Object(r.h)(ft,{type:n,id:a,onFocus:this.focusHandler,required:i,onChange:function(e){return t.props.changeHandler(u,e.target.value)}}))}}])&&rt(n.prototype,o),i&&rt(n,i),e}(r.a);function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function mt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dt(t){return(dt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function vt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function gt(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nbox-shadow: 0 3px 6px rgba(51, 51, 51, .2);\nbackground: ",";\ncolor: ",";\nborder-radius: 4px;\npadding: .5rem 1rem;\n\n&[disabled] {\n\tbackground: ",";\n}\n"]);return gt=function(){return t},t}var jt=document.querySelector("#mailchimp-subscribe-app"),wt=i.b.button(gt(),k.a.white,k.a.primary,k.a.gray),_t=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=dt(e).call(this,t))||"object"!==yt(o)&&"function"!=typeof o?vt(r):o).state={first_name:null,last_name:null,email:null,loading:!1},n.submitHandler=n.submitHandler.bind(vt(n)),n.inputChange=n.inputChange.bind(vt(n)),n}var n,i,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(e,t),n=e,(i=[{key:"inputChange",value:function(t,e){this.state.hasOwnProperty(t)&&this.setState(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},t,e))}},{key:"submitHandler",value:function(t){var e=this;t.preventDefault();var n=this.state,r=n.first_name,i=n.last_name,u=n.email,a=new FormData;u||Object(P.b)({slug:"mc-no-email-".concat((new Date).getTime()),content:"Email is verplicht."}),a.set("email",u),r&&a.set("first_name",r),i&&a.set("last_name",i),this.setState({loading:!0}),o.a.post(window.rest_url+"bookish/v1/mailchimp",{body:a}).then((function(t){return t.json()})).then((function(t){Object(P.b)({slug:"mc-success-register-".concat((new Date).getTime()),content:"Je bent ingeschreven voor de nieuwsbrief!"})})).catch((function(t){return Object(P.b)({slug:"mc-email-exists-".concat((new Date).getTime()),content:"Je bent al ingeschreven voor de nieuwbrief!"})})).finally((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(r.h)("form",{onSubmit:this.submitHandler},Object(r.h)(ht,{label:"Voornaam",required:!0,target:"first_name",changeHandler:this.inputChange}),Object(r.h)(ht,{label:"Achternaam",target:"last_name",changeHandler:this.inputChange}),Object(r.h)(ht,{label:"E-mail",required:!0,type:"email",target:"email",changeHandler:this.inputChange}),Object(r.h)(wt,{type:"submit",disabled:this.state.loading},"Aanmelden"))}}])&&mt(n.prototype,i),u&&mt(n,u),e}(r.a);e.default={init:function(){Object(P.a)()},finalize:function(){var t,e;new S,(t=document.querySelectorAll(".js-submenu-opener"))&&t.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.closest(".submenu-group").querySelector(".submenu").classList.toggle("active")}))})),tt&&Object(r.k)(Object(r.h)(et,null),tt),jt&&Object(r.k)(Object(r.h)(_t,null),jt),(e=document.querySelector("#mini-cart-app"))&&Object(r.k)(Object(r.h)(j,{href:window.shopping_cart_url}),e)}}}}]);