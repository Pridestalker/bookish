(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{33:function(t,n,e){"use strict";e.r(n);var r=e(24);function o(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n<style>\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll;\n\toverflow-y: hidden;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n.featured-image {\n    max-height: 450px;\n    width: 100%;\n    transition: all 225ms ease-in-out;\n}\n\n.button-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;ish\n}\n\nfigure {\n    margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n\t\n\t.featured-image {\n\t\twidth: auto;\n\t}\n}\n</style>\n"]);return o=function(){return t},t}var i=Object(r.d)(o());function a(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}([""]);return a=function(){return t},t}var u={name:"",src:"#",alt:"",srcSet:{},active:!1,render:function(t){t.src,t.alt;return Object(r.d)(a())}};function c(){var t=s(['\n<button class="','" onclick="','" >\n\t<img src="','" alt="','" class="button-image">\n</button>\n\t']);return c=function(){return t},t}function f(){var t=s(["\n\t",'\n<figure>\n\t<img src="','" alt="','" class="featured-image" />\n</figure>\n<nav>\n  ',"\n</nav>\n\t"]);return f=function(){return t},t}function s(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var l={items:Object(r.a)(u),activeItem:{set:function(t,n){return t.items.filter((function(t){return t.active=t.name===n})).map((function(t){return t.name}))[0]},get:function(t){return t.items.filter((function(t){return t.active}))[0]}},render:function(t){var n=t.items,e=t.activeItem;return Object(r.d)(f(),i,e.src,e.alt,n.map((function(t){var n=t.src,e=t.alt,o=t.active,i=t.name;return Object(r.d)(c(),{active:o},function(t){return function(n){n.activeItem=t,Object(r.c)(n,"gallery-switch")}}(i),n,e).key(i)})))}};function p(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n<style>\n:host {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 3rem 0;\n}\n</style>\n"]);return p=function(){return t},t}var d=Object(r.d)(p());function b(){var t=h([""," <slot></slot>"]);return b=function(){return t},t}function y(){var t=h(["\n\t\t","\n\t"]);return y=function(){return t},t}function h(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var m={name:"",icon:"",active:!1,render:function(t){var n=t.active;return Object(r.d)(y(),n&&Object(r.d)(b(),d))}};function v(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n<style>\nnav {\n\tdisplay:flex;\n}\n\nnav button {\n\tflex: 1 1 auto;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    font: inherit;\n    line-height: normal;\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding: .5rem;\n\tborder: 0 solid hsl(265, 83%, 45%);\n\tborder-bottom-width: 1px;\n\tcolor: hsl(265, 83%, 45%);\n\topacity: 0.5;\n\t\n\ttransition: opacity 225ms ease-in;\n}\n\nbutton:hover {\n\topacity: 0.75\n}\n\nbutton.active {\n\tborder-bottom-width: 0;\n\tborder-top-width: 1px;\n\tborder-left-width: 1px;\n\tborder-right-width: 1px;\n\topacity: 1;\n}\n</style>\n"]);return v=function(){return t},t}var O=Object(r.d)(v());function g(){var t=j(['\n          <button class="','" onclick="','">\n            ',"\n          </button>\n        "]);return g=function(){return t},t}function w(){var t=j(["\n","\n    <nav>\n      ","\n    </nav>\n\t\n\t<slot></slot>\n\t"]);return w=function(){return t},t}function j(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var _={items:Object(r.a)(m),activeItem:{set:function(t,n){return t.items.filter((function(t){return t.active=t.name===n})).map((function(t){return t.name}))[0]}},render:function(t){var n=t.items;return Object(r.d)(w(),O,n.map((function(t){var n=t.name,e=t.active;return Object(r.d)(g(),{active:e},function(t){return function(n){n.activeItem=t,Object(r.c)(n,"tab-switch")}}(n),n).key(n)})))}},S=function(t,n){var e=t.target,r=e.value,o=e.dataset.attribute_name,i=n.filter((function(t){return t.attributes.hasOwnProperty(o)})).filter((function(t){return""===t.attributes[o]||t.attributes[o]===r}));1===i.length?(document.querySelector('input[name="variation_id"]').value=i[0].id,document.querySelector("button.product-add-to-cart").disabled=!1):(document.querySelector('input[name="variation_id"]').value=0,document.querySelector("button.product-add-to-cart").disabled=!0)},k=function(t,n,e){var r=n.dataset.attribute_name,o=e.filter((function(t){return t.attributes.hasOwnProperty(r)})).filter((function(n){return n.attributes[r]===t.value}));return o.length>0&&o[0].is_in_stock},x=function(t){return t.map((function(t){return{id:t.variation_id,is_active:t.variation_is_active,is_visible:t.variation_is_visible,is_in_stock:t.is_in_stock,min_qty:t.min_qty,max_qty:t.max_qty,price:t.display_price,attributes:t.attributes}}))},P=function(){var t=document.querySelector(".js-add-to-cart"),n=document.querySelectorAll(".js-add-to-cart select[data-attribute_name]");if(0!==n.length&&t)for(var e=x(window.acceptedAttributes),r=n,o=0;o<r.length;o++){var i=n[o];i.addEventListener("change",(function(t){return S(t,e)}));var a=!0,u=!1,c=void 0;try{for(var f,s=i.options[Symbol.iterator]();!(a=(f=s.next()).done);a=!0){var l=f.value;l.hasAttribute("placeholder")||(k(l,i,e)||(l.disabled=!0,l.innerHTML+=" - UITVERKOCHT"))}}catch(t){u=!0,c=t}finally{try{a||null==s.return||s.return()}finally{if(u)throw c}}}},q=e(0),z=e(25),T=e(27),C=e(28);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function D(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,n){return!n||"object"!==E(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,n){return(R=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var H=function(t){function n(){return I(this,n),Q(this,A(n).apply(this,arguments))}var e,r,o;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&R(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){return Object(q.h)("button",{type:"submit",name:"add-to-cart",value:this.props.productID,className:"product-add-to-cart",disabled:this.props.loading},Object(q.h)(T.a,{icon:this.props.loading?C.b:C.a,spin:this.props.loading}),Object(q.h)("span",{style:{"margin-left":".5rem"}},this.props.loading?"Aan het toevoegen":"Toevoegen aan winkelmand"))}}])&&D(e.prototype,r),o&&D(e,o),n}(q.a);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t,n){return(N=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var U=document.querySelector("#add-simple-product-to-cart"),V=function(t){function n(t){var e,r,o;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(e=!(o=K(n).call(this,t))||"object"!==J(o)&&"function"!=typeof o?M(r):o).state={productID:window.product_id,quantity:1,minQuantity:window.product_settings.qty.min,maxQuantity:window.product_settings.qty.max,loading:!1},e.addToCart=e.addToCart.bind(M(e)),e.editQuantity=e.editQuantity.bind(M(e)),e}var e,r,o;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&N(t,n)}(n,t),e=n,(r=[{key:"addToCart",value:function(t){var n=this;t.preventDefault(),this.setState({loading:!0}),z.a.post(window.ajax_url,{searchParams:{action:"add_product_to_cart"},json:{action:"add_product_to_cart",product_id:this.state.productID,qty:this.state.quantity},credentials:"same-origin"}).then((function(t){return t.json()})).then((function(t){return document.body.dispatchEvent(new CustomEvent("product-added-to-cart",{detail:(null==t?void 0:t.data)||[]}))})).finally((function(){return n.setState({loading:!1})}))}},{key:"editQuantity",value:function(t){this.setState({quantity:t.target.value})}},{key:"render",value:function(){return Object(q.h)("form",{onSubmit:this.addToCart},Object(q.h)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.editQuantity}),Object(q.h)(H,{productID:this.state.productID,loading:this.state.loading}))}}])&&L(e.prototype,r),o&&L(e,o),n}(q.a);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function G(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,n){return!n||"object"!==B(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,n){return(Y=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}U&&Object(q.k)(Object(q.h)(V,null),U);var Z=function(t){function n(){return F(this,n),W(this,X(n).apply(this,arguments))}var e,r,o;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Y(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){return Object(q.h)("select",{onChange:this.props.changeHandler},this.props.options.map((function(t,n){return Object(q.h)("option",{value:t.lowercase(),key:n},t)})))}}])&&G(e.prototype,r),o&&G(e,o),n}(q.a);function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t,n){return(rt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var ot=document.querySelector("#add-variable-product-to-cart"),it=function(t){function n(t){var e,r,o;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(e=!(o=nt(n).call(this,t))||"object"!==$(o)&&"function"!=typeof o?et(r):o).state={productID:window.product_id,quantity:1,minQuantity:window.product_settings.qty.min,maxQuantity:window.product_settings.qty.max,loading:!1,variationID:!1},e.editQuantity=e.editQuantity.bind(et(e)),e.variation=variations,console.dir(acceptedAttributes),console.dir(e.variations),e}var e,r,o;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&rt(t,n)}(n,t),e=n,(r=[{key:"addToCart",value:function(t){this.state.variationID}},{key:"editQuantity",value:function(t){this.setState({quantity:t.target.value})}},{key:"render",value:function(){return Object(q.h)("form",{onSubmit:function(t){return t.preventDefault()}},Object(q.h)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.editQuantity}),this.variations.map((function(t,n){return Object(q.h)(Z,{options:t})})),Object(q.h)(H,{productID:this.state.productID,loading:this.state.loading}))}}])&&tt(e.prototype,r),o&&tt(e,o),n}(q.a);ot&&Object(q.k)(Object(q.h)(it,null),ot);n.default={init:function(){Object(r.b)("gallery-group",l),Object(r.b)("gallery-item",u),Object(r.b)("tab-group",_),Object(r.b)("tab-item",m)},finalize:function(){P()}}}}]);