(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{46:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={white:"hsl(0, 100%, 100%)",black:"hsl(0, 0%, 13%)",gray:"hsl(0, 0%, 89%)",green:"hsl(163, 67%, 48%)",red:"hsl(357, 100%, 55%)",yellow:"hsl(47, 100%, 68%)",purple:"hsl(265, 83%, 45%)"},a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,{},{primary:i.purple,secondary:i.yellow}),u=a;function c(t,e){return a.hasOwnProperty(t)?a[t]:a[e]}var s={search:{post_type:{product:"product",page:"pagina",post:"bericht"}}};var l={$t:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r=t.split(".");return r.reduce((function(t,n){return t&&t[n]?t[n]:e}),n)},locales:{nl:s}};n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l}))},47:function(t,e,n){"use strict";var r=n(0),o=n(38),i=n(46);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: ",";\n\ttransition: width 225ms ease;\n\theight: 3px;\n\tbackground: rgba(255, 255, 255, 0.4);\n\tbackdrop-filter: blur(2px);\n"]);return f=function(){return t},t}var p=o.b.div(f(),(function(t){return(t.width||0)+"%"})),b=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=c(e).call(this,t))||"object"!==a(o)&&"function"!=typeof o?s(r):o).state={width:0},n.interval=null,n.increaseWidth=n.increaseWidth.bind(s(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(o=[{key:"increaseWidth",value:function(t){this.setState({width:this.state.width+=t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this;return this.props.time?(this.interval=setInterval((function(){return t.increaseWidth(100/t.props.time)}),100),this.state.width>=100&&clearInterval(this.interval),Object(r.h)(p,{width:this.state.width})):Object(r.h)(r.b,null)}}])&&u(n.prototype,o),i&&u(n,i),e}(r.a);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(){var t=w([""]);return O=function(){return t},t}function g(){var t=w(["\n\tflex: 1 0 60%;\n"]);return g=function(){return t},t}function j(){var t=w(["\n\tpointer-events: all;\n\toverflow: hidden;\n\tbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\n\tbackground: ",";\n\tcolor: ",";\n\tdisplay: flex;\n\tmargin: .5rem 0;\n\tpadding: .5rem 1rem;\n\tborder-radius: 4px;\n\twidth: 300px;\n\tposition: relative;\n"]);return j=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _=o.b.section(j(),i.a.primary,i.a.white),k=o.b.main(g()),x=o.b.button(O()),S=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,m(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t,e,n=this;return Object(r.h)(_,{type:null!==(t=this.props.type)&&void 0!==t?t:"primary",color:null!==(e=this.props.color)&&void 0!==e?e:"white"},Object(r.h)(k,null,this.props.content),Object(r.h)(x,{onClick:function(t){return n.props.action(n.props.slug)}},this.props.actionText),Object(r.h)(b,{time:this.props.time}))}}])&&y(n.prototype,o),i&&y(n,i),e}(r.a);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tpointer-events: none;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tpadding: 1rem;\n\toverflow: hidden;\n\tflex-direction: column;\n"]);return D=function(){return t},t}var I=o.b.aside(D()),H=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=E(e).call(this))||"object"!==P(r)&&"function"!=typeof r?C(n):r).state={toastList:[]},t.findToasts=t.findToasts.bind(C(t)),t.createNewToast=t.createNewToast.bind(C(t)),t.removeToast=t.removeToast.bind(C(t)),t.findToasts(),t}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),n=e,(o=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,r=n.slug,o=n.time,i=n.content,a=n.color,u=n.actionText;t.createNewToast(r,i,a,o,u)}))}},{key:"removeToast",value:function(t){var e=this.state.toastList;this.setState({toastList:e.filter((function(e){return e.slug!==t}))})}},{key:"createNewToast",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Close",u=this.state.toastList;u.push({slug:t,item:Object(r.h)(S,{content:e,color:o,time:i,actionText:a,action:this.removeToast,slug:t})});var c=T(u),s=c.slice(0);i&&"number"==typeof i&&setTimeout((function(){n.removeToast(t)}),i),this.setState({toastList:s.slice(-5)})}},{key:"render",value:function(){return Object(r.h)(I,null,(this.state.toastList||[]).map((function(t){return t.item})))}}])&&q(n.prototype,o),i&&q(n,i),e}(r.a);function N(){var t=document.querySelector("#toast-container");t&&Object(r.k)(Object(r.h)(H,null),t)}function Q(t){var e=t.slug,n=t.time,r=t.content,o=t.color,i=t.actionText;document.body.dispatchEvent(new CustomEvent("register-toast",{detail:{slug:e,time:n,content:r,color:o,actionText:i}}))}n.d(e,"a",(function(){return N})),n.d(e,"b",(function(){return Q}))},53:function(t,e,n){"use strict";n.r(e);var r=n(39);function o(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll;\n\toverflow-y: hidden;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n.featured-image {\n    max-height: 450px;\n    width: 100%;\n    transition: all 225ms ease-in-out;\n}\n\n.button-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;ish\n}\n\nfigure {\n    margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n\t\n\t.featured-image {\n\t\twidth: auto;\n\t}\n}\n</style>\n"]);return o=function(){return t},t}var i=Object(r.d)(o());function a(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}([""]);return a=function(){return t},t}var u={name:"",src:"#",alt:"",srcSet:{},active:!1,render:function(t){t.src,t.alt;return Object(r.d)(a())}};function c(){var t=l(['\n<button class="','" onclick="','" >\n\t<img src="','" alt="','" class="button-image">\n</button>\n\t']);return c=function(){return t},t}function s(){var t=l(["\n\t",'\n<figure>\n\t<img src="','" alt="','" class="featured-image" />\n</figure>\n<nav>\n  ',"\n</nav>\n\t"]);return s=function(){return t},t}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f={items:Object(r.a)(u),activeItem:{set:function(t,e){return t.items.filter((function(t){return t.active=t.name===e})).map((function(t){return t.name}))[0]},get:function(t){return t.items.filter((function(t){return t.active}))[0]}},render:function(t){var e=t.items,n=t.activeItem;return Object(r.d)(s(),i,n.src,n.alt,e.map((function(t){var e=t.src,n=t.alt,o=t.active,i=t.name;return Object(r.d)(c(),{active:o},function(t){return function(e){e.activeItem=t,Object(r.c)(e,"gallery-switch")}}(i),e,n).key(i)})))}};function p(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\n:host {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 3rem 0;\n}\n</style>\n"]);return p=function(){return t},t}var b=Object(r.d)(p());function d(){var t=h([""," <slot></slot>"]);return d=function(){return t},t}function y(){var t=h(["\n\t\t","\n\t"]);return y=function(){return t},t}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var m={name:"",icon:"",active:!1,render:function(t){var e=t.active;return Object(r.d)(y(),e&&Object(r.d)(d(),b))}};function v(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\nnav {\n\tdisplay:flex;\n}\n\nnav button {\n\tflex: 1 1 auto;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    font: inherit;\n    line-height: normal;\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding: .5rem;\n\tborder: 0 solid hsl(265, 83%, 45%);\n\tborder-bottom-width: 1px;\n\tcolor: hsl(265, 83%, 45%);\n\topacity: 0.5;\n\t\n\ttransition: opacity 225ms ease-in;\n}\n\nbutton:hover {\n\topacity: 0.75\n}\n\nbutton.active {\n\tborder-bottom-width: 0;\n\tborder-top-width: 1px;\n\tborder-left-width: 1px;\n\tborder-right-width: 1px;\n\topacity: 1;\n}\n</style>\n"]);return v=function(){return t},t}var O=Object(r.d)(v());function g(){var t=w(['\n          <button class="','" onclick="','">\n            ',"\n          </button>\n        "]);return g=function(){return t},t}function j(){var t=w(["\n","\n    <nav>\n      ","\n    </nav>\n\t\n\t<slot></slot>\n\t"]);return j=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _={items:Object(r.a)(m),activeItem:{set:function(t,e){return t.items.filter((function(t){return t.active=t.name===e})).map((function(t){return t.name}))[0]}},render:function(t){var e=t.items;return Object(r.d)(j(),O,e.map((function(t){var e=t.name,n=t.active;return Object(r.d)(g(),{active:n},function(t){return function(e){e.activeItem=t,Object(r.c)(e,"tab-switch")}}(e),e).key(e)})))}},k=n(0),x=n(41),S=n(47),P=n(40),T=n(42);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var I=document.querySelector("#add-simple-product-to-cart"),H=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=C(e).call(this,t))||"object"!==q(o)&&"function"!=typeof o?z(r):o).state={productID:window.product_id,quantity:1,minQuantity:Number(window.product_settings.qty.min),maxQuantity:Number(window.product_settings.qty.max),loading:!1},n.addToCart=n.addToCart.bind(z(n)),n.editQuantity=n.editQuantity.bind(z(n)),n.increaseHandler=n.increaseHandler.bind(z(n)),n.reduceHandler=n.reduceHandler.bind(z(n)),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,t),n=e,(r=[{key:"addToCart",value:function(t){var e=this;t.preventDefault(),this.setState({loading:!0}),x.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){Object(S.b)({slug:"add_product_to_cart-".concat((new Date).getTime()),content:"Product toegevoegd aan je winkelmandje!",actionText:Object(k.h)(P.a,{icon:T.d})}),e.setState({loading:!1})}))}},{key:"editQuantity",value:function(t){this.setState({quantity:t})}},{key:"reduceHandler",value:function(){var t=this.state,e=t.minQuantity,n=t.quantity;this.state.quantity>e&&this.setState({quantity:n-1})}},{key:"increaseHandler",value:function(){var t=this.state,e=t.maxQuantity,n=t.quantity;this.state.quantity<e?this.setState({quantity:n+1}):Object(S.b)({content:"Maar ".concat(e," beschikbaar"),slug:"max_availability-".concat((new Date).getTime()),time:1500})}},{key:"render",value:function(){return Object(k.h)("form",{onSubmit:this.addToCart},Object(k.h)($,{changeHandler:this.editQuantity,reduceHandler:this.reduceHandler,increaseHandler:this.increaseHandler,quantity:this.state.quantity}),Object(k.h)(at,{productID:this.state.productID,loading:this.state.loading}))}}])&&E(n.prototype,r),o&&E(n,o),e}(k.a);var N=n(38);function Q(t){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e){return!e||"object"!==Q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(){var t=K(["\n\tline-height: 0;\n\tpadding: 0 1rem;\n\tborder: 1px solid #ffdc5c;\n\tbackground: #ffdc5c;\n\t\n\t","\n\t","\n"]);return J=function(){return t},t}function F(){var t=K(["\n\tmargin-bottom: 0 !important;\n\tbox-shadow: none !important;\n\tborder-radius: 0 !important;\n\ttext-align: center !important;\n\twidth: auto !important;\n"]);return F=function(){return t},t}function K(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var M=N.b.input(F()),U=N.b.button(J(),(function(t){return t.left&&"border-top-left-radius: 4px; border-bottom-left-radius: 4px;"}),(function(t){return t.right&&"border-top-right-radius: 4px; border-bottom-right-radius: 4px;"})),$=function(t){function e(){return R(this,e),A(this,W(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){var t=this;return Object(k.h)("div",{style:{display:"flex"}},Object(k.h)(U,{type:"button",onClick:this.props.reduceHandler,left:!0,right:!1},Object(k.h)(P.a,{icon:T.b})),Object(k.h)(M,{type:"number",name:"quantity",value:this.props.quantity,onChange:function(e){return t.props.changeHandler(e.target.value)}}),Object(k.h)(U,{type:"button",onClick:this.props.increaseHandler,left:!1,right:!0},Object(k.h)(P.a,{icon:T.c})))}}])&&L(n.prototype,r),o&&L(n,o),e}(k.a),B=n(43),G=n(46);function X(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tborder: 1px solid ",";\n\tbackground: ",";\n\tcolor: ",";\n\tpadding: .5rem;\n\tmargin: 1rem 0;\n\tdisplay: block;\n\tborder-radius: ",";\n"]);return X=function(){return t},t}var Y=N.b.button(X(),(function(t){return Object(G.c)(t.theme.background,t.defaults.background)}),(function(t){return Object(G.c)(t.theme.background,t.defaults.background)}),(function(t){return Object(G.c)(t.theme.color,t.defaults.color)}),(function(t){var e;return null!==(e=t.theme.borderRadius)&&void 0!==e?e:t.defaults.borderRadius}));function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nt(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Y.defaultProps={theme:{background:"primary",color:"white",borderRadius:"4px"},defaults:{background:"primary",color:"white",borderRadius:"4px"}};var it={background:"green"},at=function(t){function e(){return tt(this,e),nt(this,rt(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return Object(k.h)(N.a,{theme:it},Object(k.h)(Y,{type:"submit",disabled:this.props.loading},Object(k.h)(P.a,{icon:this.props.loading?B.d:B.a,spin:this.props.loading}),Object(k.h)("span",{style:{"margin-left":".5rem"}},this.props.loading?"Aan het toevoegen":"Toevoegen aan winkelmand")))}}])&&et(n.prototype,r),o&&et(n,o),e}(k.a);function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function st(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function lt(t,e){return!e||"object"!==ut(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var bt=function(t){function e(){return ct(this,e),lt(this,ft(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return Object(k.h)(k.b,null,Object(k.h)("label",{htmlFor:this.props.selectName},this.props.selectName.replace("pa_","").split("-").join(" ")),Object(k.h)("div",{className:"inline-block relative w-64"},Object(k.h)("select",{onChange:this.props.changeHandler,id:this.props.selectName,name:this.props.selectName,className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline","data-attribute_name":"attribute_".concat(this.props.selectName)},Object(k.h)("option",{placeholder:""},"Kies een optie"),this.props.options.map((function(t,e){return Object(k.h)("option",{value:t.toLowerCase(),key:e},t)}))),Object(k.h)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},Object(k.h)(P.a,{icon:T.a}))))}}])&&st(n.prototype,r),o&&st(n,o),e}(k.a),dt=function(t){return t.map((function(t){return{id:t.variation_id,is_active:t.variation_is_active,is_visible:t.variation_is_visible,is_in_stock:t.is_in_stock,min_qty:t.min_qty,max_qty:t.max_qty,price:t.display_price,attributes:t.attributes}}))};function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ht(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mt(t){return(mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function vt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var gt=document.querySelector("#add-variable-product-to-cart"),jt=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=mt(e).call(this,t))||"object"!==yt(o)&&"function"!=typeof o?vt(r):o).state={productID:window.product_id,quantity:1,minQuantity:window.product_settings.qty.min,maxQuantity:window.product_settings.qty.max,loading:!1,variationID:!1},n.editQuantity=n.editQuantity.bind(vt(n)),n.addToCart=n.addToCart.bind(vt(n)),n.changeVariation=n.changeVariation.bind(vt(n)),n.variations=variations,n.attributes=dt(window.acceptedAttributes),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(e,t),n=e,(r=[{key:"addToCart",value:function(t){var e=this;t.preventDefault(),this.state.variationID&&(this.setState({loading:!0}),x.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity,variation_id:this.state.variationID},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){Object(S.b)({slug:"add_product_to_cart-".concat((new Date).getTime()),content:"Product toegevoegd aan je winkelmandje!",actionText:Object(k.h)(P.a,{icon:T.d})}),e.setState({loading:!1})})))}},{key:"changeVariation",value:function(t){var e=t.target,n=e.value,r=e.dataset.attribute_name,o=this.attributes.filter((function(t){return t.attributes.hasOwnProperty(r)})).filter((function(t){return""===t.attributes[r]||t.attributes[r]===n}));1===o.length?this.setState({variationID:o[0].id,loading:!1}):this.setState({variationID:!1,loading:!1})}},{key:"editQuantity",value:function(t){this.setState({quantity:t})}},{key:"reduceHandler",value:function(){var t=this.state,e=t.minQuantity,n=t.quantity;this.state.quantity>e&&this.setState({quantity:n-1})}},{key:"increaseHandler",value:function(){this.setState({quantity:quantity+1})}},{key:"render",value:function(){var t=this,e=[];for(var n in this.variations)this.variations.hasOwnProperty(n)&&e.push(Object(k.h)(bt,{options:this.variations[n],key:n,changeHandler:this.changeVariation,selectName:n}));return Object(k.h)("form",{onSubmit:this.addToCart},Object(k.h)("input",{type:"number",name:"quantity",value:this.state.quantity,className:"w-64",onChange:function(e){return t.editQuantity(e.target.value)}}),e,Object(k.h)(at,{productID:this.state.productID,loading:this.state.loading}))}}])&&ht(n.prototype,r),o&&ht(n,o),e}(k.a);e.default={init:function(){Object(r.b)("gallery-group",f),Object(r.b)("gallery-item",u),Object(r.b)("tab-group",_),Object(r.b)("tab-item",m)},finalize:function(){gt&&Object(k.k)(Object(k.h)(jt,null),gt),I&&Object(k.k)(Object(k.h)(H,null),I)}}}}]);