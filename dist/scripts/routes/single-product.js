(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{33:function(t,e,n){"use strict";n.r(e);var r=n(24);function o(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll;\n\toverflow-y: hidden;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n.featured-image {\n    max-height: 450px;\n    width: 100%;\n    transition: all 225ms ease-in-out;\n}\n\n.button-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;ish\n}\n\nfigure {\n    margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n\t\n\t.featured-image {\n\t\twidth: auto;\n\t}\n}\n</style>\n"]);return o=function(){return t},t}var i=Object(r.d)(o());function a(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}([""]);return a=function(){return t},t}var u={name:"",src:"#",alt:"",srcSet:{},active:!1,render:function(t){t.src,t.alt;return Object(r.d)(a())}};function c(){var t=l(['\n<button class="','" onclick="','" >\n\t<img src="','" alt="','" class="button-image">\n</button>\n\t']);return c=function(){return t},t}function s(){var t=l(["\n\t",'\n<figure>\n\t<img src="','" alt="','" class="featured-image" />\n</figure>\n<nav>\n  ',"\n</nav>\n\t"]);return s=function(){return t},t}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f={items:Object(r.a)(u),activeItem:{set:function(t,e){return t.items.filter((function(t){return t.active=t.name===e})).map((function(t){return t.name}))[0]},get:function(t){return t.items.filter((function(t){return t.active}))[0]}},render:function(t){var e=t.items,n=t.activeItem;return Object(r.d)(s(),i,n.src,n.alt,e.map((function(t){var e=t.src,n=t.alt,o=t.active,i=t.name;return Object(r.d)(c(),{active:o},function(t){return function(e){e.activeItem=t,Object(r.c)(e,"gallery-switch")}}(i),e,n).key(i)})))}};function p(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\n:host {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 3rem 0;\n}\n</style>\n"]);return p=function(){return t},t}var b=Object(r.d)(p());function d(){var t=h([""," <slot></slot>"]);return d=function(){return t},t}function y(){var t=h(["\n\t\t","\n\t"]);return y=function(){return t},t}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var m={name:"",icon:"",active:!1,render:function(t){var e=t.active;return Object(r.d)(y(),e&&Object(r.d)(d(),b))}};function v(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n<style>\nnav {\n\tdisplay:flex;\n}\n\nnav button {\n\tflex: 1 1 auto;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    font: inherit;\n    line-height: normal;\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding: .5rem;\n\tborder: 0 solid hsl(265, 83%, 45%);\n\tborder-bottom-width: 1px;\n\tcolor: hsl(265, 83%, 45%);\n\topacity: 0.5;\n\t\n\ttransition: opacity 225ms ease-in;\n}\n\nbutton:hover {\n\topacity: 0.75\n}\n\nbutton.active {\n\tborder-bottom-width: 0;\n\tborder-top-width: 1px;\n\tborder-left-width: 1px;\n\tborder-right-width: 1px;\n\topacity: 1;\n}\n</style>\n"]);return v=function(){return t},t}var O=Object(r.d)(v());function g(){var t=j(['\n          <button class="','" onclick="','">\n            ',"\n          </button>\n        "]);return g=function(){return t},t}function w(){var t=j(["\n","\n    <nav>\n      ","\n    </nav>\n\t\n\t<slot></slot>\n\t"]);return w=function(){return t},t}function j(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _={items:Object(r.a)(m),activeItem:{set:function(t,e){return t.items.filter((function(t){return t.active=t.name===e})).map((function(t){return t.name}))[0]}},render:function(t){var e=t.items;return Object(r.d)(w(),O,e.map((function(t){var e=t.name,n=t.active;return Object(r.d)(g(),{active:n},function(t){return function(e){e.activeItem=t,Object(r.c)(e,"tab-switch")}}(e),e).key(e)})))}},S=function(t,e){var n=t.target,r=n.value,o=n.dataset.attribute_name,i=e.filter((function(t){return t.attributes.hasOwnProperty(o)})).filter((function(t){return""===t.attributes[o]||t.attributes[o]===r}));1===i.length?(document.querySelector('input[name="variation_id"]').value=i[0].id,document.querySelector("button.product-add-to-cart").disabled=!1):(document.querySelector('input[name="variation_id"]').value=0,document.querySelector("button.product-add-to-cart").disabled=!0)},P=function(t,e,n){var r=e.dataset.attribute_name,o=n.filter((function(t){return t.attributes.hasOwnProperty(r)})).filter((function(e){return e.attributes[r]===t.value}));return o.length>0&&o[0].is_in_stock},x=function(){return k(window.acceptedAttributes)},k=function(t){return t.map((function(t){return{id:t.variation_id,is_active:t.variation_is_active,is_visible:t.variation_is_visible,is_in_stock:t.is_in_stock,min_qty:t.min_qty,max_qty:t.max_qty,price:t.display_price,attributes:t.attributes}}))},T=n(0),E=n(25),q=n(27),C=n(28);function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){function e(){return I(this,e),N(this,Q(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return Object(T.h)("button",{type:"submit",name:"add-to-cart",value:this.props.productID,className:"product-add-to-cart",disabled:this.props.loading},Object(T.h)(q.a,{icon:this.props.loading?C.b:C.a,spin:this.props.loading}),Object(T.h)("span",{style:{"margin-left":".5rem"}},this.props.loading?"Aan het toevoegen":"Toevoegen aan winkelmand"))}}])&&D(n.prototype,r),o&&D(n,o),e}(T.a);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var K=document.querySelector("#add-simple-product-to-cart"),F=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=H(e).call(this,t))||"object"!==R(o)&&"function"!=typeof o?W(r):o).state={productID:window.product_id,quantity:1,minQuantity:window.product_settings.qty.min,maxQuantity:window.product_settings.qty.max,loading:!1},n.addToCart=n.addToCart.bind(W(n)),n.editQuantity=n.editQuantity.bind(W(n)),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,t),n=e,(r=[{key:"addToCart",value:function(t){var e=this;t.preventDefault(),this.setState({loading:!0}),E.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){return e.setState({loading:!1})}))}},{key:"editQuantity",value:function(t){this.setState({quantity:t.target.value})}},{key:"render",value:function(){return Object(T.h)("form",{onSubmit:this.addToCart},Object(T.h)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.editQuantity}),Object(T.h)(A,{productID:this.state.productID,loading:this.state.loading}))}}])&&V(n.prototype,r),o&&V(n,o),e}(T.a);K&&Object(T.k)(Object(T.h)(F,null),K);var M=n(35);function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function X(t,e){return!e||"object"!==U(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var $=function(t){function e(){return B(this,e),X(this,Y(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return Object(T.h)(T.b,null,Object(T.h)("label",{htmlFor:this.props.selectName},this.props.selectName.replace("pa_","").split("-").join(" ")),Object(T.h)("div",{className:"inline-block relative w-64"},Object(T.h)("select",{onChange:this.props.changeHandler,id:this.props.selectName,name:this.props.selectName,className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline","data-attribute_name":"attribute_".concat(this.props.selectName)},Object(T.h)("option",{placeholder:""},"Kies een optie"),this.props.options.map((function(t,e){return Object(T.h)("option",{value:t.toLowerCase(),key:e},t)}))),Object(T.h)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},Object(T.h)(q.a,{icon:M.a}))))}}])&&G(n.prototype,r),o&&G(n,o),e}(T.a),tt=n(36);function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ot(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var at=document.querySelector("#add-variable-product-to-cart"),ut=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=rt(e).call(this,t))||"object"!==et(o)&&"function"!=typeof o?ot(r):o).state={productID:window.product_id,quantity:1,minQuantity:window.product_settings.qty.min,maxQuantity:window.product_settings.qty.max,loading:!1,variationID:!1},n.editQuantity=n.editQuantity.bind(ot(n)),n.addToCart=n.addToCart.bind(ot(n)),n.changeVariation=n.changeVariation.bind(ot(n)),n.variations=variations,n.attributes=x(),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(e,t),n=e,(r=[{key:"addToCart",value:function(t){var e=this;t.preventDefault(),this.state.variationID&&(this.setState({loading:!0}),E.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity,variation_id:this.state.variationID},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){Object(tt.b)({slug:"add_product_to_cart-".concat((new Date).getTime()),content:"Product toegevoegd aan je winkelmandje!",actionText:""}),e.setState({loading:!1})})))}},{key:"changeVariation",value:function(t){var e=t.target,n=e.value,r=e.dataset.attribute_name,o=this.attributes.filter((function(t){return t.attributes.hasOwnProperty(r)})).filter((function(t){return""===t.attributes[r]||t.attributes[r]===n}));1===o.length?this.setState({variationID:o[0].id,loading:!1}):this.setState({variationID:!1,loading:!1})}},{key:"editQuantity",value:function(t){this.setState({quantity:t.target.value})}},{key:"render",value:function(){var t=[];for(var e in this.variations)this.variations.hasOwnProperty(e)&&t.push(Object(T.h)($,{options:this.variations[e],key:e,changeHandler:this.changeVariation,selectName:e}));return Object(T.h)("form",{onSubmit:this.addToCart},Object(T.h)("input",{type:"number",name:"quantity",value:this.state.quantity,className:"w-64",onChange:this.editQuantity}),t,Object(T.h)(A,{productID:this.state.productID,loading:this.state.loading}))}}])&&nt(n.prototype,r),o&&nt(n,o),e}(T.a);at&&Object(T.k)(Object(T.h)(ut,null),at);e.default={init:function(){Object(r.b)("gallery-group",f),Object(r.b)("gallery-item",u),Object(r.b)("tab-group",_),Object(r.b)("tab-item",m)},finalize:function(){!function(){var t=document.querySelector(".js-add-to-cart"),e=document.querySelectorAll(".js-add-to-cart select[data-attribute_name]");if(0!==e.length&&t)for(var n=x(),r=e,o=0;o<r.length;o++){var i=e[o];i.addEventListener("change",(function(t){return S(t,n)}));var a=!0,u=!1,c=void 0;try{for(var s,l=i.options[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var f=s.value;f.hasAttribute("placeholder")||(P(f,i,n)||(f.disabled=!0,f.innerHTML+=" - UITVERKOCHT"))}}catch(t){u=!0,c=t}finally{try{a||null==l.return||l.return()}finally{if(u)throw c}}}}()}}},36:function(t,e,n){"use strict";var r=n(0),o=n(26);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={white:"hsl(0, 100%, 100%)",black:"hsl(0, 0%, 13%)",gray:"hsl(0, 0%, 89%)",green:"hsl(163, 67%, 48%)",red:"hsl(357, 100%, 55%)",yellow:"hsl(47, 100%, 68%)",purple:"hsl(265, 83%, 45%)"},c=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},u,{},{primary:u.purple,secondary:u.yellow});function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: absolute;\nbottom: 0;\nleft: 0;\nwidth: ",";\ntransition: width 225ms ease;\nheight: 3px;\nbackground: rgba(255, 255, 255, 0.4);\nbackdrop-filter: blur(2px);\n"]);return d=function(){return t},t}var y=o.a.div(d(),(function(t){return(t.width||0)+"%"})),h=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=f(e).call(this,t))||"object"!==s(o)&&"function"!=typeof o?p(r):o).state={time:t.time||!1,width:0},n.increaseWidth=n.increaseWidth.bind(p(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(o=[{key:"increaseWidth",value:function(t){this.setState({width:this.state.width+=t})}},{key:"render",value:function(){var t=this;if(!this.state.time)return Object(r.h)(r.b,null);var e=setInterval((function(){return t.increaseWidth(10/t.state.time)}),100/this.state.time);return this.state.width>=100&&clearInterval(e),Object(r.h)(y,{width:this.state.width})}}])&&l(n.prototype,o),i&&l(n,i),e}(r.a);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(){var t=P([""]);return j=function(){return t},t}function _(){var t=P(["\n\tflex: 1 0 60%;\n"]);return _=function(){return t},t}function S(){var t=P(["\npointer-events: all;\noverflow: hidden;\nbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\nbackground: ",";\ncolor: ",";\ndisplay: flex;\nmargin: .5rem 0;\npadding: .5rem 1rem;\nborder-radius: 4px;\nwidth: 300px;\nposition: relative;\n"]);return S=function(){return t},t}function P(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var x=o.a.section(S(),c.primary,c.white),k=o.a.main(_()),T=o.a.button(j()),E=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,g(e).call(this,t))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t=this;return Object(r.h)(x,null,Object(r.h)(k,null,this.props.content),Object(r.h)(T,{onClick:function(e){return t.props.action(t.props.slug)}},this.props.actionText),Object(r.h)(h,{time:this.props.time}))}}])&&v(n.prototype,o),i&&v(n,i),e}(r.a);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\nposition: fixed;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\npointer-events: none;\ndisplay: flex;\nalign-items: flex-end;\njustify-content: flex-end;\npadding: 1rem;\noverflow: hidden;\nflex-direction: column;\n"]);return Q=function(){return t},t}var L=o.a.aside(Q()),A=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=I(e).call(this))||"object"!==q(r)&&"function"!=typeof r?D(n):r).state={toastList:[]},t.findToasts=t.findToasts.bind(D(t)),t.createNewToast=t.createNewToast.bind(D(t)),t.removeToast=t.removeToast.bind(D(t)),t.findToasts(),t}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(e,t),n=e,(o=[{key:"findToasts",value:function(){var t=this;document.body.addEventListener("register-toast",(function(e){var n=e.detail,r=n.slug,o=n.time,i=n.content,a=n.color,u=n.actionText;t.createNewToast(r,i,a,o,u)}))}},{key:"removeToast",value:function(t){var e=this.state.toastList;this.setState({toastList:e.filter((function(e){return e.slug!==t}))})}},{key:"createNewToast",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Close",u=this.state.toastList;u.push({slug:t,item:Object(r.h)(E,{content:e,color:o,time:i,actionText:a,action:this.removeToast,slug:t})});var c=C(u),s=c.slice(0);i&&"number"==typeof i&&setTimeout((function(){n.removeToast(t)}),i),this.setState({toastList:s.slice(-5)})}},{key:"render",value:function(){return Object(r.h)(L,null,(this.state.toastList||[]).map((function(t){return t.item})))}}])&&z(n.prototype,o),i&&z(n,i),e}(r.a);function R(){var t=document.querySelector("#toast-container");t&&Object(r.k)(Object(r.h)(A,null),t)}function V(t){var e=t.slug,n=t.time,r=t.content,o=t.color,i=t.actionText;document.body.dispatchEvent(new CustomEvent("register-toast",{detail:{slug:e,time:n,content:r,color:o,actionText:i}}))}n.d(e,"a",(function(){return R})),n.d(e,"b",(function(){return V}))}}]);