(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{47:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return p}));var c={white:"hsl(0, 100%, 100%)",black:"hsl(0, 0%, 13%)",gray:"hsl(0, 0%, 89%)",green:"hsl(163, 67%, 48%)",red:"hsl(357, 100%, 55%)",yellow:"hsl(47, 100%, 68%)",purple:"hsl(265, 83%, 45%)"},u={primary:c.purple,secondary:c.yellow},a=o(o({},c),u),f=a;function s(t,e){return a.hasOwnProperty(t)?a[t]:a[e]}var l={search:{post_type:{product:"product",page:"pagina",post:"bericht"}}};var p={$t:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,r=t.split(".");return r.reduce((function(t,n){return t&&t[n]?t[n]:e}),n)},locales:{nl:l}}},48:function(t,e,n){"use strict";n.d(e,"a",(function(){return V})),n.d(e,"b",(function(){return J}));var r=n(0),o=n(38),i=n(47);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: ",";\n\ttransition: width 225ms ease;\n\theight: 3px;\n\tbackground: rgba(255, 255, 255, 0.4);\n\tbackdrop-filter: blur(2px);\n"]);return b=function(){return t},t}var d=o.b.div(b(),(function(t){return(t.width||0)+"%"})),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(c,t);var e,n,o,i=f(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this,t)).state={width:0},e.interval=null,e.increaseWidth=e.increaseWidth.bind(l(e)),e}return e=c,(n=[{key:"increaseWidth",value:function(t){this.setState({width:this.state.width+=t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this;return this.props.time?(this.interval=setInterval((function(){return t.increaseWidth(100/t.props.time)}),100),this.state.width>=100&&clearInterval(this.interval),Object(r.h)(d,{width:this.state.width})):Object(r.h)(r.b,null)}}])&&u(e.prototype,n),o&&u(e,o),c}(r.a);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(){var t=x([""]);return w=function(){return t},t}function _(){var t=x(["\n\tflex: 1 0 60%;\n"]);return _=function(){return t},t}function S(){var t=x(["\n\tpointer-events: all;\n\toverflow: hidden;\n\tbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\n\tbackground: ",";\n\tcolor: ",";\n\tdisplay: flex;\n\tmargin: .5rem 0;\n\tpadding: .5rem 1rem;\n\tborder-radius: 4px;\n\twidth: 300px;\n\tposition: relative;\n"]);return S=function(){return t},t}function x(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var P=o.b.section(S(),i.a.primary,i.a.white),k=o.b.main(_()),R=o.b.button(w()),T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(c,t);var e,n,o,i=g(c);function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,t)}return e=c,(n=[{key:"render",value:function(){var t,e,n=this;return Object(r.h)(P,{type:null!==(t=this.props.type)&&void 0!==t?t:"primary",color:null!==(e=this.props.color)&&void 0!==e?e:"white"},Object(r.h)(k,null,this.props.content),Object(r.h)(R,{onClick:function(t){return n.props.action(n.props.slug)}},this.props.actionText),Object(r.h)(y,{time:this.props.time}))}}])&&v(e.prototype,n),o&&v(e,o),c}(r.a);function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(t,e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Q(t);if(e){var o=Q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}function H(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?N(t):e}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tpointer-events: none;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tpadding: 1rem;\n\toverflow: hidden;\n\tflex-direction: column;\n"]);return A=function(){return t},t}var L=o.b.aside(A()),W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(c,t);var e,n,o,i=I(c);function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this)).state={toastList:[]},t.findToasts=t.findToasts.bind(N(t)),t.createNewToast=t.createNewToast.bind(N(t)),t.removeToast=t.removeToast.bind(N(t)),t.findToasts(),t}return e=c,(n=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,r=n.slug,o=n.time,i=n.content,c=n.color,u=n.actionText;t.createNewToast(r,i,c,o,u)}))}},{key:"removeToast",value:function(t){var e=this.state.toastList;this.setState({toastList:e.filter((function(e){return e.slug!==t}))})}},{key:"createNewToast",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Close",u=this.state.toastList;u.push({slug:t,item:Object(r.h)(T,{content:e,color:o,time:i,actionText:c,action:this.removeToast,slug:t})});var a=E(u),f=a.slice(0);i&&"number"==typeof i&&setTimeout((function(){n.removeToast(t)}),i),this.setState({toastList:f.slice(-5)})}},{key:"render",value:function(){return Object(r.h)(L,null,(this.state.toastList||[]).map((function(t){return t.item})))}}])&&C(e.prototype,n),o&&C(e,o),c}(r.a);function V(){var t=document.querySelector("#toast-container");t&&Object(r.k)(Object(r.h)(W,null),t)}function J(t){var e=t.slug,n=t.time,r=t.content,o=t.color,i=t.actionText;document.body.dispatchEvent(new CustomEvent("register-toast",{detail:{slug:e,time:n,content:r,color:o,actionText:i}}))}},53:function(t,e,n){"use strict";n.r(e);var r=n(39);function o(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll;\n\toverflow-y: hidden;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n.featured-image {\n    max-height: 450px;\n    width: 100%;\n    transition: all 225ms ease-in-out;\n}\n\n.button-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\nfigure {\n    margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n\t\n\t.featured-image {\n\t\twidth: auto;\n\t}\n}\n</style>\n"]);return o=function(){return t},t}var i=Object(r.d)(o());function c(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}([""]);return c=function(){return t},t}var u={name:"",src:"#",alt:"",srcSet:{},active:!1,render:function(t){t.src,t.alt;return Object(r.d)(c())}};function a(){var t=s(['\n<button class="','" onclick="','" >\n\t<img src="','" alt="','" loading="lazy" class="button-image">\n</button>\n\t']);return a=function(){return t},t}function f(){var t=s(["\n\t",'\n<figure>\n\t<img src="','" loading="lazy" alt="','" class="featured-image" />\n</figure>\n<nav>\n  ',"\n</nav>\n\t"]);return f=function(){return t},t}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var l={items:Object(r.a)(u),activeItem:{set:function(t,e){return t.items.filter((function(t){return t.active=t.name===e})).map((function(t){return t.name}))[0]},get:function(t){return t.items.filter((function(t){return t.active}))[0]}},render:function(t){var e=t.items,n=t.activeItem;return Object(r.d)(f(),i,n.src,n.alt,e.map((function(t){var e=t.src,n=t.alt,o=t.active,i=t.name;return Object(r.d)(a(),{active:o},function(t){return function(e){e.activeItem=t,Object(r.c)(e,"gallery-switch")}}(i),e,n).key(i)})))}};function p(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\n:host {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 3rem 0;\n}\n</style>\n"]);return p=function(){return t},t}var b=Object(r.d)(p());function d(){var t=h([""," <slot></slot>"]);return d=function(){return t},t}function y(){var t=h(["\n\t\t","\n\t"]);return y=function(){return t},t}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var v={name:"",icon:"",active:!1,render:function(t){var e=t.active;return Object(r.d)(y(),e&&Object(r.d)(d(),b))}};function m(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\nnav {\n\tdisplay:flex;\n}\n\nnav button {\n\tflex: 1 1 auto;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    font: inherit;\n    line-height: normal;\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding: .5rem;\n\tborder: 0 solid hsl(265, 83%, 45%);\n\tborder-bottom-width: 1px;\n\tcolor: hsl(265, 83%, 45%);\n\topacity: 0.5;\n\t\n\ttransition: opacity 225ms ease-in;\n}\n\nbutton:hover {\n\topacity: 0.75\n}\n\nbutton.active {\n\tborder-bottom-width: 0;\n\tborder-top-width: 1px;\n\tborder-left-width: 1px;\n\tborder-right-width: 1px;\n\topacity: 1;\n}\n</style>\n"]);return m=function(){return t},t}var g=Object(r.d)(m());function O(){var t=w(['\n          <button class="','" onclick="','">\n            ',"\n          </button>\n        "]);return O=function(){return t},t}function j(){var t=w(["\n","\n    <nav>\n      ","\n    </nav>\n\t\n\t<slot></slot>\n\t"]);return j=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _={items:Object(r.a)(v),activeItem:{set:function(t,e){return t.items.filter((function(t){return t.active=t.name===e})).map((function(t){return t.name}))[0]}},render:function(t){var e=t.items;return Object(r.d)(j(),g,e.map((function(t){var e=t.name,n=t.active;return Object(r.d)(O(),{active:n},function(t){return function(e){e.activeItem=t,Object(r.c)(e,"tab-switch")}}(e),e).key(e)})))}},S=n(0),x=n(41),P=n(48),k=n(40),R=n(42);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?z(t):e}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var H=document.querySelector("#add-simple-product-to-cart"),N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(i,t);var e,n,r,o=q(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).state={productID:window.product_id,quantity:1,minQuantity:Number(window.product_settings.qty.min),maxQuantity:Number(window.product_settings.qty.max),loading:!1},e.addToCart=e.addToCart.bind(z(e)),e.editQuantity=e.editQuantity.bind(z(e)),e.increaseHandler=e.increaseHandler.bind(z(e)),e.reduceHandler=e.reduceHandler.bind(z(e)),e}return e=i,(n=[{key:"addToCart",value:function(t){var e=this;t.preventDefault(),this.setState({loading:!0}),x.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){Object(P.b)({slug:"add_product_to_cart-".concat((new Date).getTime()),content:"Product toegevoegd aan je winkelmandje!",actionText:Object(S.h)(k.a,{icon:R.d})}),e.setState({loading:!1})}))}},{key:"editQuantity",value:function(t){this.setState({quantity:t})}},{key:"reduceHandler",value:function(){var t=this.state,e=t.minQuantity,n=t.quantity;this.state.quantity>e&&this.setState({quantity:n-1})}},{key:"increaseHandler",value:function(){var t=this.state,e=t.maxQuantity,n=t.quantity;this.state.quantity<e?this.setState({quantity:n+1}):Object(P.b)({content:"Maar ".concat(e," beschikbaar"),slug:"max_availability-".concat((new Date).getTime()),time:1500})}},{key:"render",value:function(){return Object(S.h)("form",{onSubmit:this.addToCart},Object(S.h)(X,{changeHandler:this.editQuantity,reduceHandler:this.reduceHandler,increaseHandler:this.increaseHandler,quantity:this.state.quantity}),Object(S.h)(st,{productID:this.state.productID,loading:this.state.loading}))}}])&&D(e.prototype,n),r&&D(e,r),i}(S.a);var Q=n(38);function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=U(t);if(e){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(){var t=K(["\n\tline-height: 0;\n\tpadding: 0 1rem;\n\tborder: 1px solid #ffdc5c;\n\tbackground: #ffdc5c;\n\t\n\t","\n\t","\n"]);return $=function(){return t},t}function F(){var t=K(["\n\tmargin-bottom: 0 !important;\n\tbox-shadow: none !important;\n\tborder-radius: 0 !important;\n\ttext-align: center !important;\n\twidth: auto !important;\n"]);return F=function(){return t},t}function K(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var B=Q.b.input(F()),G=Q.b.button($(),(function(t){return t.left&&"border-top-left-radius: 4px; border-bottom-left-radius: 4px;"}),(function(t){return t.right&&"border-top-right-radius: 4px; border-bottom-right-radius: 4px;"})),X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(i,t);var e,n,r,o=J(i);function i(){return L(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){var t=this;return Object(S.h)("div",{style:{display:"flex"}},Object(S.h)(G,{type:"button",onClick:this.props.reduceHandler,left:!0,right:!1},Object(S.h)(k.a,{icon:R.b})),Object(S.h)(B,{type:"number",name:"quantity",value:this.props.quantity,onChange:function(e){return t.props.changeHandler(e.target.value)}}),Object(S.h)(G,{type:"button",onClick:this.props.increaseHandler,left:!1,right:!0},Object(S.h)(k.a,{icon:R.c})))}}])&&W(e.prototype,n),r&&W(e,r),i}(S.a),Y=n(43),Z=n(47);function tt(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tborder: 1px solid ",";\n\tbackground: ",";\n\tcolor: ",";\n\tpadding: .5rem;\n\tmargin: 1rem 0;\n\tdisplay: block;\n\tborder-radius: ",";\n"]);return tt=function(){return t},t}var et=Q.b.button(tt(),(function(t){return Object(Z.c)(t.theme.background,t.defaults.background)}),(function(t){return Object(Z.c)(t.theme.background,t.defaults.background)}),(function(t){return Object(Z.c)(t.theme.color,t.defaults.color)}),(function(t){var e;return null!==(e=t.theme.borderRadius)&&void 0!==e?e:t.defaults.borderRadius}));function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=at(t);if(e){var o=at(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ut(this,n)}}function ut(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}et.defaultProps={theme:{background:"primary",color:"white",borderRadius:"4px"},defaults:{background:"primary",color:"white",borderRadius:"4px"}};var ft={background:"green"},st=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(i,t);var e,n,r,o=ct(i);function i(){return rt(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){return Object(S.h)(Q.a,{theme:ft},Object(S.h)(et,{type:"submit",disabled:this.props.loading},Object(S.h)(k.a,{icon:this.props.loading?Y.d:Y.a,spin:this.props.loading}),Object(S.h)("span",{style:{"margin-left":".5rem"}},this.props.loading?"Aan het toevoegen":"Toevoegen aan winkelmand")))}}])&&ot(e.prototype,n),r&&ot(e,r),i}(S.a);function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function pt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dt(t,e){return(dt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=vt(t);if(e){var o=vt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ht(this,n)}}function ht(t,e){return!e||"object"!==lt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function vt(t){return(vt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&dt(t,e)}(i,t);var e,n,r,o=yt(i);function i(){return pt(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){return Object(S.h)(S.b,null,Object(S.h)("label",{htmlFor:this.props.selectName},this.props.selectName.replace("pa_","").split("-").join(" ")),Object(S.h)("div",{className:"inline-block relative w-64"},Object(S.h)("select",{onChange:this.props.changeHandler,id:this.props.selectName,name:this.props.selectName,className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline","data-attribute_name":"attribute_".concat(this.props.selectName)},Object(S.h)("option",{placeholder:""},"Kies een optie"),this.props.options.map((function(t,e){return Object(S.h)("option",{value:t.toLowerCase(),key:e},t)}))),Object(S.h)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},Object(S.h)(k.a,{icon:R.a}))))}}])&&bt(e.prototype,n),r&&bt(e,r),i}(S.a),gt=function(t){return t.map((function(t){return{id:t.variation_id,is_active:t.variation_is_active,is_visible:t.variation_is_visible,is_in_stock:t.is_in_stock,min_qty:t.min_qty,max_qty:t.max_qty,price:t.display_price,attributes:t.attributes}}))};function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function jt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wt(t,e){return(wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Pt(t);if(e){var o=Pt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return St(this,n)}}function St(t,e){return!e||"object"!==Ot(e)&&"function"!=typeof e?xt(t):e}function xt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Pt(t){return(Pt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var kt=document.querySelector("#add-variable-product-to-cart"),Rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wt(t,e)}(i,t);var e,n,r,o=_t(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).state={productID:window.product_id,quantity:1,minQuantity:window.product_settings.qty.min,maxQuantity:window.product_settings.qty.max,loading:!1,variationID:!1},e.editQuantity=e.editQuantity.bind(xt(e)),e.addToCart=e.addToCart.bind(xt(e)),e.changeVariation=e.changeVariation.bind(xt(e)),e.variations=variations,e.attributes=gt(window.acceptedAttributes),e}return e=i,(n=[{key:"addToCart",value:function(t){var e=this;t.preventDefault(),this.state.variationID&&(this.setState({loading:!0}),x.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity,variation_id:this.state.variationID},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){Object(P.b)({slug:"add_product_to_cart-".concat((new Date).getTime()),content:"Product toegevoegd aan je winkelmandje!",actionText:Object(S.h)(k.a,{icon:R.d})}),e.setState({loading:!1})})))}},{key:"changeVariation",value:function(t){var e=t.target,n=e.value,r=e.dataset.attribute_name,o=this.attributes.filter((function(t){return t.attributes.hasOwnProperty(r)})).filter((function(t){return""===t.attributes[r]||t.attributes[r]===n}));1===o.length?this.setState({variationID:o[0].id,loading:!1}):this.setState({variationID:!1,loading:!1})}},{key:"editQuantity",value:function(t){this.setState({quantity:t})}},{key:"reduceHandler",value:function(){var t=this.state,e=t.minQuantity,n=t.quantity;this.state.quantity>e&&this.setState({quantity:n-1})}},{key:"increaseHandler",value:function(){this.setState({quantity:quantity+1})}},{key:"render",value:function(){var t=this,e=[];for(var n in this.variations)this.variations.hasOwnProperty(n)&&e.push(Object(S.h)(mt,{options:this.variations[n],key:n,changeHandler:this.changeVariation,selectName:n}));return Object(S.h)("form",{onSubmit:this.addToCart},Object(S.h)("input",{type:"number",name:"quantity",value:this.state.quantity,className:"w-64",onChange:function(e){return t.editQuantity(e.target.value)}}),e,Object(S.h)(st,{productID:this.state.productID,loading:this.state.loading}))}}])&&jt(e.prototype,n),r&&jt(e,r),i}(S.a);function Tt(t){return(Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qt(t,e){return(qt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=It(t);if(e){var o=It(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return zt(this,n)}}function zt(t,e){return!e||"object"!==Tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function It(t){return(It=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Ht=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qt(t,e)}(i,t);var e,n,r,o=Ct(i);function i(){return Dt(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){return Object(S.h)("span",null,this.props.children)}}])&&Et(e.prototype,n),r&&Et(e,r),i}(S.a);e.default={init:function(){Object(r.b)("gallery-group",l),Object(r.b)("gallery-item",u),Object(r.b)("tab-group",_),Object(r.b)("tab-item",v)},finalize:function(){var t;kt&&Object(S.k)(Object(S.h)(Rt,null),kt),H&&Object(S.k)(Object(S.h)(N,null),H),0!==(t=document.querySelectorAll(".pre-product-price")).length&&t.forEach((function(t){return Object(S.k)(Ht,t)}))}}}}]);