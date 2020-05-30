(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/dist/scripts/vendor"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var w;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ca(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}function da(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ia(){ia=function(){};fa.Symbol||(fa.Symbol=la)}function ma(a,b){this.a=a;ha(this,"description",{configurable:!0,writable:!0,value:b})}ma.prototype.toString=function(){return this.a};
var la=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function na(){ia();var a=fa.Symbol.iterator;a||(a=fa.Symbol.iterator=fa.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(ba(this))}});na=function(){}}
function oa(a){na();a={next:a};a[fa.Symbol.iterator]=function(){return this};return a}var pa;if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var va={Pa:!0},wa={};try{wa.__proto__=va;qa=wa.Pa;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var xa=pa;function ya(){this.l=!1;this.b=null;this.Ea=void 0;this.a=1;this.Y=0;this.c=null}
function za(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}ya.prototype.J=function(a){this.Ea=a};function Aa(a,b){a.c={Sa:b,Wa:!0};a.a=a.Y}ya.prototype.return=function(a){this.c={return:a};this.a=this.Y};function Ba(a,b){a.a=3;return{value:b}}function Ca(a){this.a=new ya;this.b=a}function Da(a,b){za(a.a);var c=a.a.b;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a.return);a.a.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.l=!1,e;var f=e.value}catch(g){return a.a.b=null,Aa(a.a,g),Fa(a)}a.a.b=null;d.call(a.a,f);return Fa(a)}function Fa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.l=!1,{value:b.value,done:!1}}catch(c){a.a.Ea=void 0,Aa(a.a,c)}a.a.l=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Wa)throw b.Sa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){za(a.a);a.a.b?b=Ea(a,a.a.b.next,b,a.a.J):(a.a.J(b),b=Fa(a));return b};this.throw=function(b){za(a.a);a.a.b?b=Ea(a,a.a.b["throw"],b,a.a.J):(Aa(a.a,b),b=Fa(a));return b};this.return=function(b){return Da(a,b)};na();this[Symbol.iterator]=function(){return this}}function Ha(a,b){b=new Ga(new Ca(b));xa&&xa(b,a.prototype);return b}Array.from||(Array.from=function(a){return[].slice.call(a)});
Object.assign||(Object.assign=function(a){for(var b=[].slice.call(arguments,1),c=0,d;c<b.length;c++)if(d=b[c])for(var e=a,f=d,g=Object.getOwnPropertyNames(f),h=0;h<g.length;h++)d=g[h],e[d]=f[d];return a});(function(){if(!function(){var f=document.createEvent("Event");f.initEvent("foo",!0,!0);f.preventDefault();return f.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(f,g){g=g||{};var h=document.createEvent("Event");
h.initEvent(f,!!g.bubbles,!!g.cancelable);return h};if(c){for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}}if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(f,g){g=g||{};var h=document.createEvent("CustomEvent");h.initCustomEvent(f,!!g.bubbles,!!g.cancelable,g.detail);return h},window.CustomEvent.prototype=window.Event.prototype;if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=
function(f,g){g=g||{};var h=document.createEvent("MouseEvent");h.initMouseEvent(f,!!g.bubbles,!!g.cancelable,g.view||window,g.detail,g.screenX,g.screenY,g.clientX,g.clientY,g.ctrlKey,g.altKey,g.shiftKey,g.metaKey,g.button,g.relatedTarget);return h};if(b)for(var e in b)window.MouseEvent[e]=b[e];window.MouseEvent.prototype=b.prototype}})();(function(){function a(){}function b(p,t){if(!p.childNodes.length)return[];switch(p.nodeType){case Node.DOCUMENT_NODE:return F.call(p,t);case Node.DOCUMENT_FRAGMENT_NODE:return C.call(p,t);default:return r.call(p,t)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function p(z,R){if(z instanceof DocumentFragment)for(var bb;bb=z.firstChild;)D.call(this,bb,R);else D.call(this,
z,R);return z}e=!0;var t=Node.prototype.cloneNode;Node.prototype.cloneNode=function(z){z=t.call(this,z);this instanceof DocumentFragment&&(z.__proto__=DocumentFragment.prototype);return z};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var D=Node.prototype.insertBefore;Node.prototype.insertBefore=p;var K=Node.prototype.appendChild;Node.prototype.appendChild=function(z){z instanceof DocumentFragment?p.call(this,z,null):K.call(this,z);return z};var aa=Node.prototype.removeChild,ja=Node.prototype.replaceChild;Node.prototype.replaceChild=function(z,R){z instanceof DocumentFragment?(p.call(this,z,R),aa.call(this,R)):ja.call(this,z,R);return R};Document.prototype.createDocumentFragment=
function(){var z=this.createElement("df");z.__proto__=DocumentFragment.prototype;return z};var ra=Document.prototype.importNode;Document.prototype.importNode=function(z,R){R=ra.call(this,z,R||!1);z instanceof DocumentFragment&&(R.__proto__=DocumentFragment.prototype);return R}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,m=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
H=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(p){this.innerHTML=p}},E=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},r=Element.prototype.querySelectorAll,F=Document.prototype.querySelectorAll,C=DocumentFragment.prototype.querySelectorAll,M=function(){if(!c){var p=document.createElement("template"),t=document.createElement("template");t.content.appendChild(document.createElement("div"));
p.content.appendChild(t);p=p.cloneNode(!0);return 0===p.content.childNodes.length||0===p.content.firstChild.content.childNodes.length||d}}();if(c){var y=document.implementation.createHTMLDocument("template"),W=!0,v=document.createElement("style");v.textContent="template{display:none;}";var sa=document.head;sa.insertBefore(v,sa.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var ea=!document.createElement("div").hasOwnProperty("innerHTML");a.U=function(p){if(!p.content&&p.namespaceURI===
document.documentElement.namespaceURI){p.content=y.createDocumentFragment();for(var t;t=p.firstChild;)l.call(p.content,t);if(ea)p.__proto__=a.prototype;else if(p.cloneNode=function(D){return a.b(this,D)},W)try{n(p),I(p)}catch(D){W=!1}a.a(p.content)}};var ta={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},n=function(p){Object.defineProperty(p,"innerHTML",{get:function(){return ua(this)},set:function(t){var D=ta[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(t)||
["",""])[1].toLowerCase()];if(D)for(var K=0;K<D.length;K++)t="<"+D[K]+">"+t+"</"+D[K]+">";y.body.innerHTML=t;for(a.a(y);this.content.firstChild;)k.call(this.content,this.content.firstChild);t=y.body;if(D)for(K=0;K<D.length;K++)t=t.lastChild;for(;t.firstChild;)l.call(this.content,t.firstChild)},configurable:!0})},I=function(p){Object.defineProperty(p,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(t){if(this.parentNode){y.body.innerHTML=t;for(t=this.ownerDocument.createDocumentFragment();y.body.firstChild;)l.call(t,
y.body.firstChild);m.call(this.parentNode,t,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};n(a.prototype);I(a.prototype);a.a=function(p){p=b(p,"template");for(var t=0,D=p.length,K;t<D&&(K=p[t]);t++)a.U(K)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var p=g.apply(this,arguments);"template"===p.localName&&a.U(p);return p};DOMParser.prototype.parseFromString=
function(){var p=q.apply(this,arguments);a.a(p);return p};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ua(this)},set:function(p){H.set.call(this,p);a.a(this)},configurable:!0,enumerable:!0});var ka=/[&\u00A0"]/g,Xb=/[&\u00A0<>]/g,cb=function(p){switch(p){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};v=function(p){for(var t={},D=0;D<p.length;D++)t[p[D]]=!0;return t};var Qa=v("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
db=v("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ua=function(p,t){"template"===p.localName&&(p=p.content);for(var D="",K=t?t(p):E.get.call(p),aa=0,ja=K.length,ra;aa<ja&&(ra=K[aa]);aa++){a:{var z=ra;var R=p;var bb=t;switch(z.nodeType){case Node.ELEMENT_NODE:for(var Yb=z.localName,eb="<"+Yb,gg=z.attributes,ud=0;R=gg[ud];ud++)eb+=" "+R.name+'="'+R.value.replace(ka,cb)+'"';eb+=">";z=Qa[Yb]?eb:eb+ua(z,bb)+"</"+Yb+">";break a;case Node.TEXT_NODE:z=z.data;z=R&&db[R.localName]?
z:z.replace(Xb,cb);break a;case Node.COMMENT_NODE:z="\x3c!--"+z.data+"--\x3e";break a;default:throw window.console.error(z),Error("not implemented");}}D+=z}return D}}if(c||M){a.b=function(p,t){var D=f.call(p,!1);this.U&&this.U(D);t&&(l.call(D.content,f.call(p.content,!0)),u(D.content,p.content));return D};var u=function(p,t){if(t.querySelectorAll&&(t=b(t,"template"),0!==t.length)){p=b(p,"template");for(var D=0,K=p.length,aa,ja;D<K;D++)ja=t[D],aa=p[D],a&&a.U&&a.U(ja),m.call(aa.parentNode,G.call(ja,
!0),aa)}},G=Node.prototype.cloneNode=function(p){if(!e&&d&&this instanceof DocumentFragment)if(p)var t=J.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?t=a.b(this,p):t=f.call(this,p);p&&u(t,this);return t},J=Document.prototype.importNode=function(p,t){t=t||!1;if("template"===p.localName)return a.b(p,t);var D=h.call(this,p,t);if(t){u(D,
p);p=b(D,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var K,aa=0;aa<p.length;aa++){K=p[aa];t=g.call(document,"script");t.textContent=K.textContent;for(var ja=K.attributes,ra=0,z;ra<ja.length;ra++)z=ja[ra],t.setAttribute(z.name,z.value);m.call(K.parentNode,t,K)}}return D}}c&&(window.HTMLTemplateElement=a)})();var Ia=setTimeout;function Ja(){}function Ka(a,b){return function(){a.apply(b,arguments)}}function x(a){if(!(this instanceof x))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.za=!1;this.C=void 0;this.W=[];La(a,this)}
function Ma(a,b){for(;3===a.I;)a=a.C;0===a.I?a.W.push(b):(a.za=!0,Na(function(){var c=1===a.I?b.Ya:b.Za;if(null===c)(1===a.I?Oa:Pa)(b.va,a.C);else{try{var d=c(a.C)}catch(e){Pa(b.va,e);return}Oa(b.va,d)}}))}function Oa(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof x){a.I=3;a.C=b;Ra(a);return}if("function"===typeof c){La(Ka(c,b),a);return}}a.I=1;a.C=b;Ra(a)}catch(d){Pa(a,d)}}
function Pa(a,b){a.I=2;a.C=b;Ra(a)}function Ra(a){2===a.I&&0===a.W.length&&Na(function(){a.za||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.C)});for(var b=0,c=a.W.length;b<c;b++)Ma(a,a.W[b]);a.W=null}function Sa(a,b,c){this.Ya="function"===typeof a?a:null;this.Za="function"===typeof b?b:null;this.va=c}function La(a,b){var c=!1;try{a(function(d){c||(c=!0,Oa(b,d))},function(d){c||(c=!0,Pa(b,d))})}catch(d){c||(c=!0,Pa(b,d))}}
x.prototype["catch"]=function(a){return this.then(null,a)};x.prototype.then=function(a,b){var c=new this.constructor(Ja);Ma(this,new Sa(a,b,c));return c};x.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Ta(a){return new x(function(b,c){function d(h,k){try{if(k&&("object"===typeof k||"function"===typeof k)){var l=k.then;if("function"===typeof l){l.call(k,function(m){d(h,m)},c);return}}e[h]=k;0===--f&&b(e)}catch(m){c(m)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ua(a){return a&&"object"===typeof a&&a.constructor===x?a:new x(function(b){b(a)})}function Va(a){return new x(function(b,c){c(a)})}function Wa(a){return new x(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Na="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Ia(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=x;x.prototype.then=x.prototype.then;x.all=Ta;x.race=Wa;x.resolve=Ua;x.reject=Va;var Xa=document.createTextNode(""),Ya=[];(new MutationObserver(function(){for(var a=Ya.length,b=0;b<a;b++)Ya[b]();Ya.splice(0,a)})).observe(Xa,{characterData:!0});Na=function(a){Ya.push(a);Xa.textContent=0<Xa.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,m=a.freeze||a,q=a.defineProperty,H=a.defineProperties,E=h(a,"getOwnPropertyNames"),r=a.prototype,F=r.hasOwnProperty,C=r.propertyIsEnumerable,M=r.toString,y=function(u,G,J){F.call(u,f)||q(u,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});u[f]["@@"+G]=J},W=function(u,G){var J=k(u);g(G).forEach(function(p){ta.call(G,
p)&&Qa(J,p,G[p])});return J},v=function(){},sa=function(u){return u!=f&&!F.call(ka,u)},ea=function(u){return u!=f&&F.call(ka,u)},ta=function(u){var G=""+u;return ea(G)?F.call(this,G)&&this[f]["@@"+G]:C.call(this,u)},n=function(u){q(r,u,{enumerable:!1,configurable:!0,get:v,set:function(G){ua(this,u,{enumerable:!1,configurable:!0,writable:!0,value:G});y(this,u,!0)}});return m(ka[u]=q(a(u),"constructor",Xb))},I=function(u){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return n("__\u0001symbol:".concat(u||
"",e,++d))},ka=k(null),Xb={value:I},cb=function(u){return ka[u]},Qa=function(u,G,J){var p=""+G;if(ea(p)){G=ua;if(J.enumerable){var t=k(J);t.enumerable=!1}else t=J;G(u,p,t);y(u,p,!!J.enumerable)}else q(u,G,J);return u},db=function(u){return g(u).filter(ea).map(cb)};E.value=Qa;q(a,"defineProperty",E);E.value=db;q(a,b,E);E.value=function(u){return g(u).filter(sa)};q(a,"getOwnPropertyNames",E);E.value=function(u,G){var J=db(G);J.length?l(G).concat(J).forEach(function(p){ta.call(G,p)&&Qa(u,p,G[p])}):H(u,
G);return u};q(a,"defineProperties",E);E.value=ta;q(r,"propertyIsEnumerable",E);E.value=I;q(c,"Symbol",E);E.value=function(u){u="__\u0001symbol:".concat("__\u0001symbol:",u,e);return u in r?ka[u]:n(u)};q(I,"for",E);E.value=function(u){if(sa(u))throw new TypeError(u+" is not a symbol");return F.call(ka,u)?u.slice(20,-e.length):void 0};q(I,"keyFor",E);E.value=function(u,G){var J=h(u,G);J&&ea(G)&&(J.enumerable=ta.call(u,G));return J};q(a,"getOwnPropertyDescriptor",E);E.value=function(u,G){return 1===
arguments.length?k(u):W(u,G)};q(a,"create",E);E.value=function(){var u=M.call(this);return"[object String]"===u&&ea(this)?"[object Symbol]":u};q(r,"toString",E);try{var ua=k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||q}catch(u){ua=function(G,J,p){var t=h(r,J);delete r[J];q(G,J,p);q(r,J,t)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var g=d.call(this),h=this[Symbol.toStringTag];return"undefined"===typeof h?g:"[object "+h+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var e=0,f=this,g={next:function(){var h=f.length<=e;return h?{done:h}:{done:h,value:f[e++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var e=String.fromCodePoint,f=this,g=0,h=f.length,k={next:function(){var l=h<=g,m=l?"":e(f.codePointAt(g));g+=m.length;return l?{done:l}:{done:l,value:m}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Za=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Za.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var $a=window.Symbol.iterator;
String.prototype[$a]&&String.prototype.codePointAt||(String.prototype[$a]=function ab(){var b,c=this;return Ha(ab,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=Ba(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});Set.prototype[$a]||(Set.prototype[$a]=function fb(){var b,c=this,d;return Ha(fb,function(e){1==e.a&&(b=[],c.forEach(function(f){b.push(f)}),d=0);if(3!=e.a)return d<b.length?e=Ba(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});
Map.prototype[$a]||(Map.prototype[$a]=function gb(){var b,c=this,d;return Ha(gb,function(e){1==e.a&&(b=[],c.forEach(function(f,g){b.push([g,f])}),d=0);if(3!=e.a)return d<b.length?e=Ba(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var hb=document.querySelector('script[src*="webcomponents-bundle"]'),ib=/wc-(.+)/,A={};if(!A.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(ib))&&(A[b[1]]=a[1]||!0)});if(hb)for(var jb=0,kb=void 0;kb=hb.attributes[jb];jb++)"src"!==kb.name&&(A[kb.name]=kb.value||!0);if(A.log&&A.log.split){var lb=A.log.split(",");A.log={};lb.forEach(function(a){A.log[a]=!0})}else A.log={}}
window.WebComponents.flags=A;var mb=A.shadydom;if(mb){window.ShadyDOM=window.ShadyDOM||{};window.ShadyDOM.force=mb;var nb=A.noPatch;window.ShadyDOM.noPatch="true"===nb?!0:nb}var ob=A.register||A.ce;ob&&window.customElements&&(window.customElements.forcePolyfill=ob);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function pb(){}pb.prototype.toJSON=function(){return{}};function B(a){a.__shady||(a.__shady=new pb);return a.__shady}function L(a){return a&&a.__shady};var N=window.ShadyDOM||{};N.Ua=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var qb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");N.B=!!(qb&&qb.configurable&&qb.get);N.sa=N.force||!N.Ua;N.D=N.noPatch||!1;N.la=N.preferPerformance;N.ua="on-demand"===N.D;N.Ia=navigator.userAgent.match("Trident");function rb(a){return(a=L(a))&&void 0!==a.firstChild}function O(a){return a instanceof ShadowRoot}function sb(a){return(a=(a=L(a))&&a.root)&&tb(a)}
var ub=Element.prototype,vb=ub.matches||ub.matchesSelector||ub.mozMatchesSelector||ub.msMatchesSelector||ub.oMatchesSelector||ub.webkitMatchesSelector,wb=document.createTextNode(""),xb=0,yb=[];(new MutationObserver(function(){for(;yb.length;)try{yb.shift()()}catch(a){throw wb.textContent=xb++,a;}})).observe(wb,{characterData:!0});function zb(a){yb.push(a);wb.textContent=xb++}var Ab=!!document.contains;function Bb(a,b){for(;b;){if(b==a)return!0;b=b.__shady_parentNode}return!1}
function Cb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(e){return a[e]};a.namedItem=function(e){if("length"!==e&&isNaN(e)&&a[e])return a[e];for(var f=ca(a),g=f.next();!g.done;g=f.next())if(g=g.value,(g.getAttribute("id")||g.getAttribute("name"))==e)return g;return null};return a}function Db(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
function Eb(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function Fb(a,b,c){c.configurable=!0;if(c.value)a[b]=c.value;else try{Object.defineProperty(a,b,c)}catch(d){}}function P(a,b,c,d){c=void 0===c?"":c;for(var e in b)d&&0<=d.indexOf(e)||Fb(a,c+e,b[e])}function Gb(a,b){for(var c in b)c in a&&Fb(a,c,b[c])}function Q(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)});return b}
function Hb(a,b){for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length;d++)e=c[d],a[e]=b[e]};var Ib=[],Jb;function Kb(a){Jb||(Jb=!0,zb(Lb));Ib.push(a)}function Lb(){Jb=!1;for(var a=!!Ib.length;Ib.length;)Ib.shift()();return a}Lb.list=Ib;function Mb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ia=new Set}function Nb(a){a.a||(a.a=!0,zb(function(){a.flush()}))}Mb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ia.forEach(function(b){b(a)})}};Mb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Ob(a,b){var c=B(a);c.Z||(c.Z=new Mb);c.Z.ia.add(b);var d=c.Z;return{Ma:b,S:d,Na:a,takeRecords:function(){return d.takeRecords()}}}function Pb(a){var b=a&&a.S;b&&(b.ia.delete(a.Ma),b.ia.size||(B(a.Na).Z=null))}
function Qb(a,b){var c=b.getRootNode();return a.map(function(d){var e=c===d.target.getRootNode();if(e&&d.addedNodes){if(e=[].slice.call(d.addedNodes).filter(function(f){return c===f.getRootNode()}),e.length)return d=Object.create(d),Object.defineProperty(d,"addedNodes",{value:e,configurable:!0}),d}else if(e)return d}).filter(function(d){return d})};var Rb=/[&\u00A0"]/g,Sb=/[&\u00A0<>]/g;function Tb(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Ub(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Vb=Ub("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Wb=Ub("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function Zb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var m="<"+k,q=h.attributes,H=0,E;E=q[H];H++)m+=" "+E.name+'="'+E.value.replace(Rb,Tb)+'"';m+=">";h=Vb[k]?m:m+Zb(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Wb[k.localName]?h:h.replace(Sb,Tb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var $b=N.B,ac={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},bc={};function cc(a){bc[a]=function(b){return b["__shady_native_"+a]}}function dc(a,b){P(a,b,"__shady_native_");for(var c in b)cc(c)}function S(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?ac[d]||(ac[d]=e.value):cc(d))}}
var ec=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),fc=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),gc=document.implementation.createHTMLDocument("inert");function hc(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b)}var ic=["firstElementChild","lastElementChild","children","childElementCount"],jc=["querySelector","querySelectorAll"];
function kc(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?S(window.EventTarget.prototype,a):(S(Node.prototype,a),S(Window.prototype,a));$b?S(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):dc(Node.prototype,{parentNode:{get:function(){ec.currentNode=this;return ec.parentNode()}},firstChild:{get:function(){ec.currentNode=this;return ec.firstChild()}},lastChild:{get:function(){ec.currentNode=
this;return ec.lastChild()}},previousSibling:{get:function(){ec.currentNode=this;return ec.previousSibling()}},nextSibling:{get:function(){ec.currentNode=this;return ec.nextSibling()}},childNodes:{get:function(){var b=[];ec.currentNode=this;for(var c=ec.firstChild();c;)b.push(c),c=ec.nextSibling();return b}},parentElement:{get:function(){fc.currentNode=this;return fc.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var b=
document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),c="",d;d=b.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(b){if("undefined"===typeof b||null===b)b="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:hc(this);(0<b.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(b),void 0);break;default:this.nodeValue=b}}}});S(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
S(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){fc.currentNode=this;return fc.firstChild()}},lastElementChild:{get:function(){fc.currentNode=this;return fc.lastChild()}},children:{get:function(){var b=[];fc.currentNode=this;for(var c=fc.firstChild();c;)b.push(c),c=fc.nextSibling();return Cb(b)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};$b?(S(Element.prototype,ic),S(Element.prototype,["previousElementSibling","nextElementSibling",
"innerHTML","className"]),S(HTMLElement.prototype,["children","innerHTML","className"])):(dc(Element.prototype,a),dc(Element.prototype,{previousElementSibling:{get:function(){fc.currentNode=this;return fc.previousSibling()}},nextElementSibling:{get:function(){fc.currentNode=this;return fc.nextSibling()}},innerHTML:{get:function(){return Zb(this,Db)},set:function(b){var c="template"===this.localName?this.content:this;hc(c);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==gc.namespaceURI?
gc.createElementNS(this.namespaceURI,d):gc.createElement(d);d.innerHTML=b;for(b="template"===this.localName?d.content:d;d=b.__shady_native_firstChild;)c.__shady_native_insertBefore(d,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(b){this.setAttribute("class",b)}}}));S(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));S(Element.prototype,jc);S(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
S(window.HTMLTemplateElement.prototype,["innerHTML"]);$b?S(DocumentFragment.prototype,ic):dc(DocumentFragment.prototype,a);S(DocumentFragment.prototype,jc);$b?(S(Document.prototype,ic),S(Document.prototype,["activeElement"])):dc(Document.prototype,a);S(Document.prototype,["importNode","getElementById"]);S(Document.prototype,jc)};var lc=Q({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),mc=Q({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
a},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),nc=Q({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
set className(a){return this.__shady_className=a}});function oc(a){for(var b in a){var c=a[b];c&&(c.enumerable=!1)}}oc(lc);oc(mc);oc(nc);var pc=N.B||!0===N.D,qc=pc?function(){}:function(a){var b=B(a);b.Ka||(b.Ka=!0,Gb(a,nc))},rc=pc?function(){}:function(a){var b=B(a);b.Ja||(b.Ja=!0,Gb(a,lc),window.customElements&&window.customElements.polyfillWrapFlushCallback&&!N.D||Gb(a,mc))};var sc="__eventWrappers"+Date.now(),tc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),uc=function(){function a(){}var b=!1,c={get capture(){b=!0;return!1}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function vc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O}else b=!!a,d=c=!1;return{Ga:e,capture:b,once:c,passive:d,Fa:uc?a:b}}
var wc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},xc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function yc(a){return a instanceof Node?a.__shady_getRootNode():a}
function zc(a,b){var c=[],d=a;for(a=yc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function Ac(a){a.__composedPath||(a.__composedPath=zc(a.target,!0));return a.__composedPath}function Bc(a,b){if(!O)return a;a=zc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=yc(d),f!==e&&(g=a.indexOf(f),e=f),!O(f)||-1<g)return d}
function Cc(a){function b(c,d){c=new a(c,d);c.__composed=d&&!!d.composed;return c}b.__proto__=a;b.prototype=a.prototype;return b}var Dc={focus:!0,blur:!0};function Ec(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function Fc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!Ec(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
function Gc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];Fc(a,d,"capture");if(a.ma)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=L(d);f=f&&f.root;if(0===c||f&&f===e)if(Fc(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ma)break}}
function Hc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,m=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===m&&f===q)return g}return-1}function Ic(a){Lb();return this.__shady_native_dispatchEvent(a)}
function Jc(a,b,c){var d=vc(c),e=d.capture,f=d.once,g=d.passive,h=d.Ga;d=d.Fa;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(xc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[sc]){if(-1<Hc(h,l,a,e,f,g))return}else b[sc]=[];h=function(m){f&&this.__shady_removeEventListener(a,b,c);m.__target||Kc(m);if(l!==this){var q=Object.getOwnPropertyDescriptor(m,"currentTarget");Object.defineProperty(m,"currentTarget",
{get:function(){return l},configurable:!0})}m.__previousCurrentTarget=m.currentTarget;if(!O(l)&&"slot"!==l.localName||-1!=m.composedPath().indexOf(l))if(m.composed||-1<m.composedPath().indexOf(l))if(Ec(m)&&m.target===m.relatedTarget)m.eventPhase===Event.BUBBLING_PHASE&&m.stopImmediatePropagation();else if(m.eventPhase===Event.CAPTURING_PHASE||m.bubbles||m.target===l||l instanceof Window){var H="function"===k?b.call(l,m):b.handleEvent&&b.handleEvent(m);l!==this&&(q?(Object.defineProperty(m,"currentTarget",
q),q=null):delete m.currentTarget);return H}};b[sc].push({node:l,type:a,capture:e,once:f,passive:g,lb:h});Dc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(h)):this.__shady_native_addEventListener(a,h,d)}}}
function Lc(a,b,c){if(b){var d=vc(c);c=d.capture;var e=d.once,f=d.passive,g=d.Ga;d=d.Fa;if(xc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[sc]}catch(l){}k&&(e=Hc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].lb,k.length||(b[sc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&Dc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1))}}
function Mc(){for(var a in Dc)window.__shady_native_addEventListener(a,function(b){b.__target||(Kc(b),Gc(b))},!0)}
var Nc=Q({get composed(){void 0===this.__composed&&(tc?this.__composed="focusin"===this.type||"focusout"===this.type||tc(this):!1!==this.isTrusted&&(this.__composed=wc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=zc(this.__target,this.composed));return this.__composedPath},get target(){return Bc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
(this.__relatedTargetComposedPath=zc(this.__relatedTarget,!0));return Bc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ma=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ma=this.__immediatePropagationStopped=!0}});
function Kc(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(N.B){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;P(c,Nc);b.__shady_patchedProto=c}a.__proto__=b.__shady_patchedProto}else P(a,Nc)}var Oc=Cc(Event),Pc=Cc(CustomEvent),Qc=Cc(MouseEvent);
function Rc(){if(!tc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var b=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(b)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}}
var Sc=Object.getOwnPropertyNames(Element.prototype).filter(function(a){return"on"===a.substring(0,2)}),Tc=Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a){return"on"===a.substring(0,2)});function Uc(a){return{set:function(b){var c=B(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b},get:function(){var b=L(this);return b&&b.N&&b.N[a]},configurable:!0}};function Vc(a,b){return{index:a,aa:[],ha:b}}
function Wc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,m=0;m<k-g&&Xc(a[--h],c[--l]);)m++;h=m}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Vc(e,0);f<d;)b.aa.push(c[f++]);return[b]}if(f==d)return[Vc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<h;m++)if(a[k+m-1]===c[g+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,H=b[l][m-1]+1;b[l][m]=q<H?q:H}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],m=b[k][g-1],q=l<m?l<h?l:h:m<h?m:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=m));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Vc(e,0));b.ha++;e++;b.aa.push(c[f]);f++;break;case 2:b||(b=Vc(e,
0));b.ha++;e++;break;case 3:b||(b=Vc(e,0)),b.aa.push(c[f]),f++}b&&k.push(b);return k}function Xc(a,b){return a===b};var Yc=Q({dispatchEvent:Ic,addEventListener:Jc,removeEventListener:Lc});var Zc=null;function $c(){Zc||(Zc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Zc||null}function ad(a,b,c){var d=$c();return d&&"class"===b?(d.setElementClass(a,c),!0):!1}function bd(a,b){var c=$c();c&&c.unscopeNode(a,b)}function cd(a,b){var c=$c();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&cd(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}
function dd(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=$c();return b?b.currentScopeForNode(a):""}function ed(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&ed(a,b)};var fd=window.document,gd=N.la,hd=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),id=hd&&hd.get;function jd(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b)}function kd(a){var b=L(a);if(b&&void 0!==b.ka)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)kd(b);if(a=L(a))a.ka=void 0}function ld(a){var b=a;if(a&&"slot"===a.localName){var c=L(a);(c=c&&c.V)&&(b=c.length?c[0]:ld(a.__shady_nextSibling))}return b}
function md(a,b,c){if(a=(a=L(a))&&a.Z){if(b)if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var d=0,e=b.childNodes.length;d<e;d++)a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c&&a.removedNodes.push(c);Nb(a)}}
var td=Q({get parentNode(){var a=L(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=L(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=L(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=L(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=L(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
get childNodes(){if(rb(this)){var a=L(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=this.__shady_native_childNodes;c.item=function(d){return c[d]};return c},get parentElement(){var a=L(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(id&&id.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;
var a=this.ownerDocument;if(Ab){if(a.__shady_native_contains(this))return!0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(O(a)?a.host:void 0);return!!(a&&a instanceof Document)},get textContent(){if(rb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!rb(this)&&N.B){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&jd(this);this.__shady_native_textContent=a}else jd(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a}},insertBefore:function(a,b){if(this.ownerDocument!==fd&&a.ownerDocument!==fd)return this.__shady_native_insertBefore(a,
b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=L(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;md(this,a);var d=[],e=(c=nd(this))?c.host.localName:dd(this),f=a.__shady_parentNode;if(f){var g=dd(a);var h=!!c||!nd(a)||
gd&&void 0!==this.__noInsertionPoint;f.__shady_removeChild(a,h)}f=!0;var k=(!gd||void 0===a.__noInsertionPoint&&void 0===this.__noInsertionPoint)&&!cd(a,e),l=c&&!a.__noInsertionPoint&&(!gd||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||dd(a)),ed(a,function(m){l&&"slot"===m.localName&&d.push(m);if(k){var q=g;$c()&&(q&&bd(m,q),(q=$c())&&q.scopeNode(m,e))}});d.length&&(od(c),c.c.push.apply(c.c,d instanceof Array?d:da(ca(d))),pd(c));rb(this)&&(qd(a,this,b),h=L(this),h.root?(f=!1,sb(this)&&
pd(h.root)):c&&"slot"===this.localName&&(f=!1,pd(c)));f?(c=O(this)?this.host:this,b?(b=ld(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);return a},appendChild:function(a){if(this!=a||!O(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==fd)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+
a);md(this,null,a);var c=nd(a),d=c&&rd(c,a),e=L(this);if(rb(this)&&(sd(a,this),sb(this))){pd(e.root);var f=!0}if($c()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=dd(a);ed(a,function(h){bd(h,g)})}kd(a);c&&((b="slot"===this.localName)&&(f=!0),(d||b)&&pd(c));f||(f=O(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==
this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c)}return b},getRootNode:function(a){if(this&&this.nodeType){var b=B(this),c=b.ka;void 0===c&&(O(this)?(c=this,b.ka=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ka=c)));return c}},
contains:function(a){return Bb(this,a)}});var wd=Q({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&vd(a);return(a=L(this))&&a.assignedSlot||null}});function xd(a,b,c){var d=[];yd(a,b,c,d);return d}function yd(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(yd(e,f,g,h),e=void 0)}if(e)break}}
var zd=Q({get firstElementChild(){var a=L(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=L(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return rb(this)?Cb(Array.prototype.filter.call(Eb(this),
function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),Ad=Q({querySelector:function(a){return xd(this,function(b){return vb.call(b,a)},function(b){return!!b})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return Cb(b.filter(function(d){return d.__shady_getRootNode()==c}))}return Cb(xd(this,function(d){return vb.call(d,
a)}))}}),Bd=N.la&&!N.D?Hb({},zd):zd;Hb(zd,Ad);var Cd=window.document;function Dd(a,b){if("slot"===b)a=a.__shady_parentNode,sb(a)&&pd(L(a).root);else if("slot"===a.localName&&"name"===b&&(b=nd(a))){if(b.a){Ed(b);var c=a.La,d=Fd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Gd(c))}}pd(b)}}
var Hd=Q({get previousElementSibling(){var a=L(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=L(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
set slot(a){this.__shady_setAttribute("slot",a)},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a)},setAttribute:function(a,b){this.ownerDocument!==Cd?this.__shady_native_setAttribute(a,b):ad(this,a,b)||(this.__shady_native_setAttribute(a,b),Dd(this,a))},removeAttribute:function(a){this.ownerDocument!==Cd?this.__shady_native_removeAttribute(a):ad(this,a,"")?""===this.getAttribute(a)&&this.__shady_native_removeAttribute(a):(this.__shady_native_removeAttribute(a),
Dd(this,a))}});N.la||Sc.forEach(function(a){Hd[a]=Uc(a)});
var Md=Q({attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!N.Ia){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;Id(b,this,a);Jd(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;od(c);c.c.push.apply(c.c,a instanceof Array?a:da(ca(a)));pd(b)}b.host.__shady_native_appendChild(b)}else b=new Kd(Ld,this,a);return this.__CE_shadowRoot=b},
get shadowRoot(){var a=L(this);return a&&a.bb||null}});Hb(Hd,Md);var Nd=document.implementation.createHTMLDocument("inert"),Od=Q({get innerHTML(){return rb(this)?Zb("template"===this.localName?this.content:this,Eb):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{jd(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==Nd.namespaceURI?Nd.createElementNS(this.namespaceURI,b):Nd.createElement(b);for(N.B?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a)}}});var Pd=Q({blur:function(){var a=L(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur()}});N.la||Tc.forEach(function(a){Pd[a]=Uc(a)});var Qd=Q({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&O(b)&&vd(b);return(b=L(this))?(a&&a.flatten?b.V:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)Jc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c)}},removeEventListener:function(a,
b,c){if("slot"!==this.localName||"slotchange"===a)Lc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c)}}});var Rd=Q({getElementById:function(a){return""===a?null:xd(this,function(b){return b.id==a},function(b){return!!b})[0]||null}});var Sd=Q({get activeElement(){var a=N.B?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!O(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=nd(a);b&&b!==this;)a=b.host,b=nd(a);return this===document?b?null:a:b===this?a:null}});var Td=window.document,Ud=Q({importNode:function(a,b){if(a.ownerDocument!==Td||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Vd=Q({dispatchEvent:Ic,addEventListener:Jc.bind(window),removeEventListener:Lc.bind(window)});var Wd={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Wd.parentElement=td.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Wd.contains=td.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Wd.children=zd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Wd.innerHTML=Od.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Wd.className=Hd.className);
var Xd={EventTarget:[Yc],Node:[td,window.EventTarget?null:Yc],Text:[wd],Comment:[wd],CDATASection:[wd],ProcessingInstruction:[wd],Element:[Hd,zd,wd,!N.B||"innerHTML"in Element.prototype?Od:null,window.HTMLSlotElement?null:Qd],HTMLElement:[Pd,Wd],HTMLSlotElement:[Qd],DocumentFragment:[Bd,Rd],Document:[Ud,Bd,Rd,Sd],Window:[Vd]},Yd=N.B?null:["innerHTML","textContent"];function Zd(a,b,c,d){b.forEach(function(e){return a&&e&&P(a,e,c,d)})}
function $d(a){var b=a?null:Yd,c;for(c in Xd)Zd(window[c]&&window[c].prototype,Xd[c],a,b)}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(a){var b=window[a],c=Object.create(b.prototype);c.__shady_protoIsPatched=!0;Zd(c,Xd.EventTarget);Zd(c,Xd.Node);Xd[a]&&Zd(c,Xd[a]);b.prototype.__shady_patchedProto=c});function ae(a){a.__shady_protoIsPatched=!0;Zd(a,Xd.EventTarget);Zd(a,Xd.Node);Zd(a,Xd.Element);Zd(a,Xd.HTMLElement);Zd(a,Xd.HTMLSlotElement);return a};var be=N.ua,ce=N.B;function de(a,b){if(be&&!a.__shady_protoIsPatched&&!O(a)){var c=Object.getPrototypeOf(a),d=c.hasOwnProperty("__shady_patchedProto")&&c.__shady_patchedProto;d||(d=Object.create(c),ae(d),c.__shady_patchedProto=d);Object.setPrototypeOf(a,d)}ce||(1===b?qc(a):2===b&&rc(a))}
function ee(a,b,c,d){de(a,1);d=d||null;var e=B(a),f=d?B(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=L(e.previousSibling))f.nextSibling=a;if(f=L(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null}
function qd(a,b,c){de(b,2);var d=B(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)ee(a,b,d,c);else ee(a,b,d,c)}
function sd(a,b){var c=B(a);b=B(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(B(a).nextSibling=d);d&&(B(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Jd(a,b){var c=B(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;de(a,2);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=B(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;de(c,1)}}};var fe=Q({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c)}});function ge(a,b){P(a,fe,b);P(a,Sd,b);P(a,Od,b);P(a,zd,b);N.D&&!b?(P(a,td,b),P(a,Rd,b)):N.B||(P(a,nc),P(a,lc),P(a,mc))};var Ld={},he=N.deferConnectionCallbacks&&"loading"===document.readyState,ie;function je(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function Kd(a,b,c){if(a!==Ld)throw new TypeError("Illegal constructor");this.a=null;Id(this,b,c)}
function Id(a,b,c){a.host=b;a.mode=c&&c.mode;Jd(a.host);b=B(a.host);b.root=a;b.bb="closed"!==a.mode?a:null;b=B(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(N.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else pd(a)}function pd(a){a.T||(a.T=!0,Kb(function(){return vd(a)}))}
function vd(a){var b;if(b=a.T){for(var c;a;)a:{a.T&&(c=a),b=a;a=b.host.__shady_getRootNode();if(O(a)&&(b=L(b.host))&&0<b.ca)break a;a=void 0}b=c}(c=b)&&c._renderSelf()}
Kd.prototype._renderSelf=function(){var a=he;he=!0;this.T=!1;if(this.a){Ed(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=L(c),e=d.assignedNodes;d.assignedNodes=[];d.V=[];if(d.Ba=e)for(d=0;d<e.length;d++){var f=L(e[d]);f.oa=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)ke(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=L(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)ke(this,
d,c);(d=(d=L(c.__shady_parentNode))&&d.root)&&(tb(d)||d.T)&&d._renderSelf();le(this,e.V,e.assignedNodes);if(d=e.Ba){for(f=0;f<d.length;f++)L(d[f]).oa=null;e.Ba=null;d.length>e.assignedNodes.length&&(e.ra=!0)}e.ra&&(e.ra=!1,me(this,c))}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=L(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=L(f).V,h=0;h<
g.length;h++)d.push(g[h]);else d.push(f);f=Db(e);g=Wc(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var m=0,q=void 0;m<l.aa.length&&(q=l.aa[m]);m++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.ha}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],m=l.index;m<l.index+l.ha;m++)q=d[m],e.__shady_native_insertBefore(q,h),f.splice(m,0,q)}}if(!N.preferPerformance&&!this.Aa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
L(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.Aa=!0;he=a;ie&&ie()};function ke(a,b,c){var d=B(b),e=d.oa;d.oa=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(B(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(B(d.assignedSlot).ra=!0)}
function le(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=L(e).assignedNodes;f&&f.length&&le(a,b,f)}else b.push(c[d])}function me(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=L(b);b.assignedSlot&&me(a,b.assignedSlot)}function od(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{}}
function Ed(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Jd(e);var f=e.__shady_parentNode;Jd(f);f=L(f);f.ca=(f.ca||0)+1;f=Fd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e)}if(c)for(var g in c)a.b[g]=Gd(a.b[g]);a.c=[]}}function Fd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.La=b}
function Gd(a){return a.sort(function(b,c){b=je(b);for(var d=je(c),e=0;e<b.length;e++){c=b[e];var f=d[e];if(c!==f)return b=Eb(c.__shady_parentNode),b.indexOf(c)-b.indexOf(f)}})}
function rd(a,b){if(a.a){Ed(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Bb(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=L(g.__shady_parentNode))&&h.ca&&h.ca--);f--;g=L(g);if(h=g.V)for(var k=0;k<h.length;k++){var l=h[k],m=l.__shady_native_parentNode;m&&m.__shady_native_removeChild(l)}g.V=[];g.assignedNodes=[];h=!0}}return h}}function tb(a){Ed(a);return!(!a.a||!a.a.length)}
(function(a){a.__proto__=DocumentFragment.prototype;ge(a,"__shady_");ge(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})})(Kd.prototype);
if(window.customElements&&window.customElements.define&&N.sa&&!N.preferPerformance){var ne=new Map;ie=function(){var a=[];ne.forEach(function(d,e){a.push([e,d])});ne.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback()}};he&&document.addEventListener("readystatechange",function(){he=!1;ie()},{once:!0});var oe=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=
function(){he?ne.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){he?this.isConnected||ne.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},pe=window.customElements.define,qe=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;pe.call(window.customElements,a,oe(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d};window.customElements.define=
qe;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:qe,configurable:!0})}function nd(a){a=a.__shady_getRootNode();if(O(a))return a};function re(a){this.node=a}w=re.prototype;w.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};w.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};w.appendChild=function(a){return this.node.__shady_appendChild(a)};w.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};w.removeChild=function(a){return this.node.__shady_removeChild(a)};w.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
w.cloneNode=function(a){return this.node.__shady_cloneNode(a)};w.getRootNode=function(a){return this.node.__shady_getRootNode(a)};w.contains=function(a){return this.node.__shady_contains(a)};w.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};w.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b)};w.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};w.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};w.removeAttribute=function(a){this.node.__shady_removeAttribute(a)};
w.attachShadow=function(a){return this.node.__shady_attachShadow(a)};w.focus=function(){this.node.__shady_native_focus()};w.blur=function(){this.node.__shady_blur()};w.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};w.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};w.querySelector=function(a){return this.node.__shady_querySelector(a)};
w.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};w.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
fa.Object.defineProperties(re.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(O(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(O(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
a}}});function se(a){Object.defineProperty(re.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b},configurable:!0})}Sc.forEach(function(a){return se(a)});Tc.forEach(function(a){return se(a)});var te=new WeakMap;function ue(a){if(O(a)||a instanceof re)return a;var b=te.get(a);b||(b=new re(a),te.set(a,b));return b};if(N.sa){var ve=N.B?function(a){return a}:function(a){rc(a);qc(a);return a},ShadyDOM={inUse:N.sa,patch:ve,isShadyRoot:O,enqueue:Kb,flush:Lb,flushInitial:function(a){!a.Aa&&a.T&&vd(a)},settings:N,filterMutations:Qb,observeChildren:Ob,unobserveChildren:Pb,deferConnectionCallbacks:N.deferConnectionCallbacks,preferPerformance:N.preferPerformance,handlesDynamicScoping:!0,wrap:N.D?ue:ve,wrapIfNeeded:!0===N.D?ue:function(a){return a},Wrapper:re,composedPath:Ac,noPatch:N.D,patchOnDemand:N.ua,nativeMethods:ac,
nativeTree:bc,patchElementProto:ae};window.ShadyDOM=ShadyDOM;kc();$d("__shady_");Object.defineProperty(document,"_activeElement",Sd.activeElement);P(Window.prototype,Vd,"__shady_");N.D?N.ua&&P(Element.prototype,Md):($d(),Rc());Mc();window.Event=Oc;window.CustomEvent=Pc;window.MouseEvent=Qc;window.ShadowRoot=Kd};/*

 Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var we=window.Document.prototype.createElement,xe=window.Document.prototype.createElementNS,ye=window.Document.prototype.importNode,ze=window.Document.prototype.prepend,Ae=window.Document.prototype.append,Be=window.DocumentFragment.prototype.prepend,Ce=window.DocumentFragment.prototype.append,De=window.Node.prototype.cloneNode,Ee=window.Node.prototype.appendChild,Fe=window.Node.prototype.insertBefore,Ge=window.Node.prototype.removeChild,He=window.Node.prototype.replaceChild,Ie=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Je=window.Element.prototype.attachShadow,Ke=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Le=window.Element.prototype.getAttribute,Me=window.Element.prototype.setAttribute,Ne=window.Element.prototype.removeAttribute,Oe=window.Element.prototype.getAttributeNS,Pe=window.Element.prototype.setAttributeNS,Qe=window.Element.prototype.removeAttributeNS,Re=window.Element.prototype.insertAdjacentElement,Se=window.Element.prototype.insertAdjacentHTML,Te=window.Element.prototype.prepend,
Ue=window.Element.prototype.append,Ve=window.Element.prototype.before,We=window.Element.prototype.after,Xe=window.Element.prototype.replaceWith,Ye=window.Element.prototype.remove,Ze=window.HTMLElement,$e=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),af=window.HTMLElement.prototype.insertAdjacentElement,bf=window.HTMLElement.prototype.insertAdjacentHTML;var cf=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return cf.add(a)});function df(a){var b=cf.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a}var ef=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function T(a){var b=a.isConnected;if(void 0!==b)return b;if(ef(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function ff(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function gf(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function hf(a,b,c){for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;void 0===c&&(c=new Set);if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)hf(d,b,c);d=gf(a,e);continue}else if("template"===f){d=gf(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)hf(e,b,c)}d=d.firstChild?d.firstChild:gf(a,d)}};function jf(){var a=!(null===kf||void 0===kf||!kf.noDocumentConstructionObserver),b=!(null===kf||void 0===kf||!kf.shadyDomFastWalk);this.X=[];this.a=[];this.R=!1;this.shadyDomFastWalk=b;this.jb=!a}function lf(a,b,c,d){var e=window.ShadyDom;if(a.shadyDomFastWalk&&e&&e.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=e.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else hf(b,c,d)}function mf(a,b){a.R=!0;a.X.push(b)}function nf(a,b){a.R=!0;a.a.push(b)}
function of(a,b){a.R&&lf(a,b,function(c){return pf(a,c)})}function pf(a,b){if(a.R&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.X.length;c++)a.X[c](b);for(c=0;c<a.a.length;c++)a.a[c](b)}}function qf(a,b){var c=[];lf(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):rf(a,d)}}function sf(a,b){var c=[];lf(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function tf(a,b,c){c=void 0===c?{}:c;var d=c.kb,e=c.upgrade||function(g){return rf(a,g)},f=[];lf(a,b,function(g){a.R&&pf(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;d&&(d.forEach(function(m){return l.add(m)}),
l.delete(k));tf(a,k,{kb:l,upgrade:e})}})}else f.push(g)},d);for(b=0;b<f.length;b++)e(f[b])}
function rf(a,b){try{var c=b.ownerDocument,d=c.__CE_registry;var e=d&&(c.defaultView||c.__CE_isImportDocument)?uf(d,b.localName):void 0;if(e&&void 0===b.__CE_state){e.constructionStack.push(b);try{try{if(new e.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=e;if(e.attributeChangedCallback&&b.hasAttributes()){var f=e.observedAttributes;
for(e=0;e<f.length;e++){var g=f[e],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}T(b)&&a.connectedCallback(b)}}catch(k){vf(k)}}jf.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){vf(c)}};jf.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){vf(c)}};
jf.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;if(f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b))try{f.attributeChangedCallback.call(a,b,c,d,e)}catch(g){vf(g)}};
function wf(a,b,c,d){var e=b.__CE_registry;if(e&&(null===d||"http://www.w3.org/1999/xhtml"===d)&&(e=uf(e,c)))try{var f=new e.constructorFunction;if(void 0===f.__CE_state||void 0===f.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==f.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(f.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==f.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==f.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(f.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(f.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return f}catch(g){return vf(g),b=null===d?we.call(b,c):xe.call(b,d,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,pf(a,b),b}b=null===d?we.call(b,c):xe.call(b,d,c);pf(a,b);return b}
function vf(a){var b=a.message,c=a.sourceURL||a.fileName||"",d=a.line||a.lineNumber||0,e=a.column||a.columnNumber||0,f=void 0;void 0===ErrorEvent.prototype.initErrorEvent?f=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:d,colno:e,error:a}):(f=document.createEvent("ErrorEvent"),f.initErrorEvent("error",!1,!0,b,c,d),f.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});void 0===f.error&&Object.defineProperty(f,"error",
{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(f);f.defaultPrevented||console.error(a)};function xf(){var a=this;this.C=void 0;this.Ca=new Promise(function(b){a.a=b})}xf.prototype.resolve=function(a){if(this.C)throw Error("Already resolved.");this.C=a;this.a(a)};function yf(a){var b=document;this.S=void 0;this.M=a;this.a=b;tf(this.M,this.a);"loading"===this.a.readyState&&(this.S=new MutationObserver(this.b.bind(this)),this.S.observe(this.a,{childList:!0,subtree:!0}))}function zf(a){a.S&&a.S.disconnect()}yf.prototype.b=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||zf(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)tf(this.M,c[d])};function U(a){this.ea=new Map;this.fa=new Map;this.xa=new Map;this.na=!1;this.qa=new Map;this.da=function(b){return b()};this.P=!1;this.ga=[];this.M=a;this.ya=a.jb?new yf(a):void 0}w=U.prototype;w.$a=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");Af(this,a);this.ea.set(a,b);this.ga.push(a);this.P||(this.P=!0,this.da(function(){return Bf(c)}))};
w.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");Af(this,a);Cf(this,a,b);this.ga.push(a);this.P||(this.P=!0,this.da(function(){return Bf(c)}))};function Af(a,b){if(!df(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(uf(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.na)throw Error("A custom element is already being defined.");}
function Cf(a,b,c){a.na=!0;var d;try{var e=c.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=function(m){var q=e[m];if(void 0!==q&&!(q instanceof Function))throw Error("The '"+m+"' callback must be a function.");return q};var g=f("connectedCallback");var h=f("disconnectedCallback");var k=f("adoptedCallback");var l=(d=f("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.na=!1}c={localName:b,
constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:d,observedAttributes:l,constructionStack:[]};a.fa.set(b,c);a.xa.set(c.constructorFunction,c);return c}w.upgrade=function(a){tf(this.M,a)};
function Bf(a){if(!1!==a.P){a.P=!1;for(var b=[],c=a.ga,d=new Map,e=0;e<c.length;e++)d.set(c[e],[]);tf(a.M,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=d.get(l);m?m.push(k):a.fa.has(l)&&b.push(k)}}});for(e=0;e<b.length;e++)rf(a.M,b[e]);for(e=0;e<c.length;e++){for(var f=c[e],g=d.get(f),h=0;h<g.length;h++)rf(a.M,g[h]);(f=a.qa.get(f))&&f.resolve(void 0)}c.length=0}}w.get=function(a){if(a=uf(this,a))return a.constructorFunction};
w.whenDefined=function(a){if(!df(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.qa.get(a);if(b)return b.Ca;b=new xf;this.qa.set(a,b);var c=this.fa.has(a)||this.ea.has(a);a=-1===this.ga.indexOf(a);c&&a&&b.resolve(void 0);return b.Ca};w.polyfillWrapFlushCallback=function(a){this.ya&&zf(this.ya);var b=this.da;this.da=function(c){return a(function(){return b(c)})}};
function uf(a,b){var c=a.fa.get(b);if(c)return c;if(c=a.ea.get(b)){a.ea.delete(b);try{return Cf(a,b,c())}catch(d){vf(d)}}}window.CustomElementRegistry=U;U.prototype.define=U.prototype.define;U.prototype.upgrade=U.prototype.upgrade;U.prototype.get=U.prototype.get;U.prototype.whenDefined=U.prototype.whenDefined;U.prototype.polyfillDefineLazy=U.prototype.$a;U.prototype.polyfillWrapFlushCallback=U.prototype.polyfillWrapFlushCallback;function Df(a,b,c){function d(e){return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&T(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}e.apply(this,g);for(g=0;g<k.length;g++)sf(a,k[g]);if(T(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&qf(a,k)}}void 0!==c.prepend&&(b.prepend=d(c.prepend));void 0!==c.append&&(b.append=d(c.append))}
;function Ef(a){Document.prototype.createElement=function(b){return wf(a,this,b,null)};Document.prototype.importNode=function(b,c){b=ye.call(this,b,!!c);this.__CE_registry?tf(a,b):of(a,b);return b};Document.prototype.createElementNS=function(b,c){return wf(a,this,c,b)};Df(a,Document.prototype,{prepend:ze,append:Ae})};function Ff(a){function b(d){return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];g=[];for(var h=[],k=0;k<f.length;k++){var l=f[k];l instanceof Element&&T(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}d.apply(this,f);for(f=0;f<h.length;f++)sf(a,h[f]);if(T(this))for(f=0;f<g.length;f++)h=g[f],h instanceof Element&&qf(a,h)}}var c=Element.prototype;void 0!==Ve&&(c.before=b(Ve));void 0!==We&&(c.after=b(We));void 0!==
Xe&&(c.replaceWith=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];f=[];for(var g=[],h=0;h<e.length;h++){var k=e[h];k instanceof Element&&T(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)f.push(k);else f.push(k)}h=T(this);Xe.apply(this,e);for(e=0;e<g.length;e++)sf(a,g[e]);if(h)for(sf(a,this),e=0;e<f.length;e++)g=f[e],g instanceof Element&&qf(a,g)});void 0!==Ye&&(c.remove=function(){var d=T(this);Ye.call(this);d&&sf(a,this)})};function Gf(a){function b(e,f){Object.defineProperty(e,"innerHTML",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(g){var h=this,k=void 0;T(this)&&(k=[],lf(a,this,function(q){q!==h&&k.push(q)}));f.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?tf(a,this):of(a,this);return g}})}function c(e,f){e.insertAdjacentElement=function(g,h){var k=T(h);g=f.call(this,g,h);k&&sf(a,h);T(g)&&qf(a,h);return g}}
function d(e,f){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)tf(a,l[k])}e.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;f.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,f.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,f.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,f.call(this,h,k),g(this.nextSibling,
l);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");}}Je&&(Element.prototype.attachShadow=function(e){e=Je.call(this,e);if(a.R&&!e.__CE_patched){e.__CE_patched=!0;for(var f=0;f<a.X.length;f++)a.X[f](e)}return this.__CE_shadowRoot=e});Ke&&Ke.get?b(Element.prototype,Ke):$e&&$e.get?b(HTMLElement.prototype,$e):nf(a,function(e){b(e,{enumerable:!0,configurable:!0,get:function(){return De.call(this,!0).innerHTML},set:function(f){var g=
"template"===this.localName,h=g?this.content:this,k=xe.call(document,this.namespaceURI,this.localName);for(k.innerHTML=f;0<h.childNodes.length;)Ge.call(h,h.childNodes[0]);for(f=g?k.content:k;0<f.childNodes.length;)Ee.call(h,f.childNodes[0])}})});Element.prototype.setAttribute=function(e,f){if(1!==this.__CE_state)return Me.call(this,e,f);var g=Le.call(this,e);Me.call(this,e,f);f=Le.call(this,e);a.attributeChangedCallback(this,e,g,f,null)};Element.prototype.setAttributeNS=function(e,f,g){if(1!==this.__CE_state)return Pe.call(this,
e,f,g);var h=Oe.call(this,e,f);Pe.call(this,e,f,g);g=Oe.call(this,e,f);a.attributeChangedCallback(this,f,h,g,e)};Element.prototype.removeAttribute=function(e){if(1!==this.__CE_state)return Ne.call(this,e);var f=Le.call(this,e);Ne.call(this,e);null!==f&&a.attributeChangedCallback(this,e,f,null,null)};Element.prototype.removeAttributeNS=function(e,f){if(1!==this.__CE_state)return Qe.call(this,e,f);var g=Oe.call(this,e,f);Qe.call(this,e,f);var h=Oe.call(this,e,f);g!==h&&a.attributeChangedCallback(this,
f,g,h,e)};af?c(HTMLElement.prototype,af):Re&&c(Element.prototype,Re);bf?d(HTMLElement.prototype,bf):Se&&d(Element.prototype,Se);Df(a,Element.prototype,{prepend:Te,append:Ue});Ff(a)};var Hf={};function If(a){function b(){var c=this.constructor;var d=document.__CE_registry.xa.get(c);if(!d)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=we.call(document,d.localName),Object.setPrototypeOf(e,c.prototype),e.__CE_state=1,e.__CE_definition=d,pf(a,e),e;var f=e.length-1,g=e[f];if(g===Hf)throw Error("Failed to construct '"+d.localName+"': This element was already constructed.");e[f]=
Hf;Object.setPrototypeOf(g,c.prototype);pf(a,g);return g}b.prototype=Ze.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b};function Jf(a){function b(c,d){Object.defineProperty(c,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,e);else{var f=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&T(this)){f=Array(h);for(var k=0;k<h;k++)f[k]=g[k]}}d.set.call(this,e);if(f)for(e=0;e<f.length;e++)sf(a,f[e])}}})}Node.prototype.insertBefore=function(c,d){if(c instanceof DocumentFragment){var e=ff(c);c=Fe.call(this,c,d);if(T(this))for(d=
0;d<e.length;d++)qf(a,e[d]);return c}e=c instanceof Element&&T(c);d=Fe.call(this,c,d);e&&sf(a,c);T(this)&&qf(a,c);return d};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var d=ff(c);c=Ee.call(this,c);if(T(this))for(var e=0;e<d.length;e++)qf(a,d[e]);return c}d=c instanceof Element&&T(c);e=Ee.call(this,c);d&&sf(a,c);T(this)&&qf(a,c);return e};Node.prototype.cloneNode=function(c){c=De.call(this,!!c);this.ownerDocument.__CE_registry?tf(a,c):of(a,c);return c};Node.prototype.removeChild=
function(c){var d=c instanceof Element&&T(c),e=Ge.call(this,c);d&&sf(a,c);return e};Node.prototype.replaceChild=function(c,d){if(c instanceof DocumentFragment){var e=ff(c);c=He.call(this,c,d);if(T(this))for(sf(a,d),d=0;d<e.length;d++)qf(a,e[d]);return c}e=c instanceof Element&&T(c);var f=He.call(this,c,d),g=T(this);g&&sf(a,d);e&&sf(a,c);g&&qf(a,c);return f};Ie&&Ie.get?b(Node.prototype,Ie):mf(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var d=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==
Node.COMMENT_NODE&&d.push(e.textContent);return d.join("")},set:function(d){for(;this.firstChild;)Ge.call(this,this.firstChild);null!=d&&""!==d&&Ee.call(this,document.createTextNode(d))}})})};var kf=window.customElements;function Kf(){var a=new jf;If(a);Ef(a);Df(a,DocumentFragment.prototype,{prepend:Be,append:Ce});Jf(a);Gf(a);a=new U(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}kf&&!kf.forcePolyfill&&"function"==typeof kf.define&&"function"==typeof kf.get||Kf();window.__CE_installPolyfill=Kf;function Lf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function Mf(a){var b=a=a.replace(Nf,"").replace(Of,""),c=new Lf;c.start=0;c.end=b.length;for(var d=c,e=0,f=b.length;e<f;e++)if("{"===b[e]){d.rules||(d.rules=[]);var g=d,h=g.rules[g.rules.length-1]||null;d=new Lf;d.start=e+1;d.parent=g;d.previous=h;g.rules.push(d)}else"}"===b[e]&&(d.end=e+1,d=d.parent||c);return Pf(c,a)}
function Pf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=Qf(c),c=c.replace(Rf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=Sf:c.match(Tf)&&(a.type=Uf,a.keyframesName=a.selector.split(Rf).pop()):a.type=0===c.indexOf("--")?Vf:Wf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)Pf(f,
b);return a}function Qf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(b,c){b=c;for(c=6-b.length;c--;)b="0"+b;return"\\"+b})}
function Xf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Xf(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Yf,"").replace(Zf,""),b=b.replace($f,"").replace(ag,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Wf=1,Uf=7,Sf=4,Vf=1E3,Nf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,Of=/@import[^;]*;/gim,Yf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Zf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,$f=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,ag=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Tf=/^@[^\s]*keyframes/,Rf=/\s+/g;var V=!(window.ShadyDOM&&window.ShadyDOM.inUse),bg;function cg(a){bg=a&&a.shimcssproperties?!1:V||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var dg;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(dg=window.ShadyCSS.cssBuild);var eg=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?bg=window.ShadyCSS.nativeCss:window.ShadyCSS?(cg(window.ShadyCSS),window.ShadyCSS=void 0):cg(window.WebComponents&&window.WebComponents.flags);var X=bg;var fg=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,hg=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ig=/(--[\w-]+)\s*([:,;)]|$)/gi,jg=/(animation\s*:)|(animation-name\s*:)/,kg=/@media\s(.*)/,lg=/\{[^}]*\}/g;var mg=new Set;function ng(a,b){if(!a)return"";"string"===typeof a&&(a=Mf(a));b&&og(a,b);return Xf(a,X)}function pg(a){!a.__cssRules&&a.textContent&&(a.__cssRules=Mf(a.textContent));return a.__cssRules||null}function qg(a){return!!a.parent&&a.parent.type===Uf}function og(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===Sf){var g=a.selector.match(kg);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Wf?b(a):c&&f===Uf?c(a):f===Vf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)og(g,b,c,d)}}
function rg(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;sg(e,c,d);return e}var tg=null;function ug(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(tg?tg.nextSibling:null)||b.firstChild);return tg=a}function sg(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);tg?a.compareDocumentPosition(tg)===Node.DOCUMENT_POSITION_PRECEDING&&(tg=a):tg=a}
function vg(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function wg(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=vg(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=wg(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function xg(a,b){V?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
var yg=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function zg(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,ba:c}}function Ag(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=vg(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function Bg(a){if(void 0!==dg)return dg;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.__cssBuild=b}}return a.__cssBuild||""}
function Cg(a){a=void 0===a?"":a;return""!==a&&X?V?"shadow"===a:"shady"===a:!1};function Dg(){}function Eg(a,b){Fg(Gg,a,function(c){Hg(c,b||"")})}function Fg(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)Fg(a,d[b],c)}
function Hg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),xg(a,b)):xg(a,(d?d+" ":"")+"style-scope "+b)}}function Ig(a,b,c){Fg(Gg,a,function(d){Hg(d,b,!0);Hg(d,c)})}function Jg(a,b){Fg(Gg,a,function(c){Hg(c,b||"",!0)})}
function Kg(a,b,c,d,e){var f=Gg;e=void 0===e?"":e;""===e&&(V||"shady"===(void 0===d?"":d)?e=ng(b,c):(a=zg(a),e=Lg(f,b,a.is,a.ba,c)+"\n\n"));return e.trim()}function Lg(a,b,c,d,e){var f=Mg(c,d);c=c?"."+c:"";return ng(b,function(g){g.c||(g.selector=g.w=Ng(a,g,a.b,c,f),g.c=!0);e&&e(g,c,f)})}function Mg(a,b){return b?"[is="+a+"]":a}
function Ng(a,b,c,d,e){var f=Ag(b.selector);if(!qg(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(k){return!!k}).join(",")}function Og(a){return a.replace(Pg,function(b,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
function Qg(a){for(var b=[],c;c=a.match(Rg);){var d=c.index,e=vg(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{wa:a,matches:b}}function Sg(a,b){var c=a.split("\ue000");return b.reduce(function(d,e,f){return d+e+c[f+1]},c[0])}
Dg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=Pg.test(a);e&&(a=a.replace(Pg,function(h,k,l){return":"+k+"("+l.replace(/\s/g,"")+")"}),a=Og(a));var f=Rg.test(a);if(f){var g=Qg(a);a=g.wa;g=g.matches}a=a.replace(Tg,":host $1");a=a.replace(Ug,function(h,k,l){d||(h=Vg(l,k,b,c),d=d||h.stop,k=h.Qa,l=h.value);return k+l});f&&(a=Sg(a,g));e&&(a=Og(a));return a=a.replace(Wg,function(h,k,l,m){return'[dir="'+l+'"] '+k+m+", "+k+'[dir="'+l+'"]'+m})};
function Vg(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=Xg(a,d):0!==e&&(a=c?Yg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Zg,function(g,h){return" > "+h}))}return{value:a,Qa:b,stop:f}}function Yg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"))}return c.join("")}
function Xg(a,b){var c=a.match($g);return(c=c&&c[2].trim()||"")?c[0].match(ah)?a.replace($g,function(d,e,f){return b+f}):c.split(ah)[0]===b?c:"should_not_match":a.replace(":host",b)}function bh(a){":root"===a.selector&&(a.selector="html")}Dg.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):Yg(a.trim(),":not(.style-scope)")};fa.Object.defineProperties(Dg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var Pg=/:(nth[-\w]+)\(([^)]+)\)/,Ug=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ah=/[[.:#*]/,Tg=/^(::slotted)/,$g=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Zg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Wg=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Rg=/:(?:matches|any|-(?:webkit|moz)-any)/,Gg=new Dg;function ch(a,b,c,d,e){this.H=a||null;this.b=b||null;this.ta=c||[];this.F=null;this.cssBuild=e||"";this.ba=d||"";this.a=this.G=this.L=null}function dh(a){return a?a.__styleInfo:null}function eh(a,b){return a.__styleInfo=b}ch.prototype.c=function(){return this.H};ch.prototype._getStyleRules=ch.prototype.c;function fh(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var gh=/:host\s*>\s*/,hh=navigator.userAgent.match("Trident");function ih(){}function jh(a){var b={},c=[],d=0;og(a,function(f){kh(f);f.index=d++;f=f.v.cssText;for(var g;g=ig.exec(f);){var h=g[1];":"!==g[2]&&(b[h]=!0)}},function(f){c.push(f)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function kh(a){if(!a.v){var b={},c={};lh(a,c)&&(b.K=c,a.rules=null);b.cssText=a.parsedCssText.replace(lg,"").replace(fg,"");a.v=b}}function lh(a,b){var c=a.v;if(c){if(c.K)return Object.assign(b,c.K),!0}else{c=a.parsedCssText;for(var d;a=fg.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function mh(a,b,c){b&&(b=0<=b.indexOf(";")?nh(a,b,c):wg(b,function(d,e,f,g){if(!e)return d+g;(e=mh(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=mh(a,c[f]||f,c)||f;return d+(e||"")+g}));return b&&b.trim()||""}
function nh(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){hg.lastIndex=0;if(f=hg.exec(e))e=mh(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=mh(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function oh(a,b){var c={},d=[];og(a,function(e){e.v||kh(e);var f=e.w||e.parsedSelector;b&&e.v.K&&f&&fh.call(b,f)&&(lh(e,c),e=e.index,f=parseInt(e/32,10),d[f]=(d[f]||0)|1<<e%32)},null,!0);return{K:c,key:d}}
function ph(a,b,c,d){b.v||kh(b);if(b.v.K){var e=zg(a);a=e.is;e=e.ba;e=a?Mg(a,e):"html";var f=b.parsedSelector;var g=!!f.match(gh)||"html"===e&&-1<f.indexOf("html");var h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.w||(b.w=Ng(Gg,b,Gg.b,a?"."+a:"",e)),c=b.w||e),g&&"html"===e&&(c=b.w||b.J),d({wa:c,Xa:h,mb:g})}}
function qh(a,b,c){var d={},e={};og(b,function(f){ph(a,f,c,function(g){fh.call(a._element||a,g.wa)&&(g.Xa?lh(f,d):lh(f,e))})},null,!0);return{cb:e,Va:d}}
function rh(a,b,c,d){var e=zg(b),f=Mg(e.is,e.ba),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=dh(b);e=h.H;h=h.cssBuild;var k=sh(e,d);return Kg(b,e,function(l){var m="";l.v||kh(l);l.v.cssText&&(m=nh(a,l.v.cssText,c));l.cssText=m;if(!V&&!qg(l)&&l.cssText){var q=m=l.cssText;null==l.Da&&(l.Da=jg.test(m));if(l.Da)if(null==l.ja){l.ja=[];for(var H in k)q=k[H],q=q(m),m!==q&&(m=q,l.ja.push(H))}else{for(H=0;H<l.ja.length;++H)q=k[l.ja[H]],m=q(m);q=m}l.cssText=q;l.w=
l.w||l.selector;m="."+d;H=Ag(l.w);q=0;for(var E=H.length,r=void 0;q<E&&(r=H[q]);q++)H[q]=r.match(g)?r.replace(f,m):m+" "+r;l.selector=H.join(",")}},h)}function sh(a,b){a=a.b;var c={};if(!V&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.l=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.w=f.w||f.selector;f.selector=f.w.replace(f.keyframesName,f.a);c[e.keyframesName]=th(e)}return c}function th(a){return function(b){return b.replace(a.l,a.a)}}
function uh(a,b){var c=vh,d=pg(a);a.textContent=ng(d,function(e){var f=e.cssText=e.parsedCssText;e.v&&e.v.cssText&&(f=f.replace(Yf,"").replace(Zf,""),e.cssText=nh(c,f,b))})}fa.Object.defineProperties(ih.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var vh=new ih;var wh={},xh=window.customElements;if(xh&&!V&&!eg){var yh=xh.define;xh.define=function(a,b,c){wh[a]||(wh[a]=ug(a));yh.call(xh,a,b,c)}};function zh(){this.cache={}}zh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({K:b,styleElement:c,G:d});100<e.length&&e.shift();this.cache[a]=e};function Ah(){}var Bh=new RegExp(Gg.a+"\\s*([^\\s]*)");function Ch(a){return(a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Bh))?a[1]:""}function Dh(a){var b=yg(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?zg(a).is:""}
function Eh(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Ch(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Bg(e)))Jg(e,g);else if(f instanceof ShadowRoot)for(f=Dh(e),f!==g&&Ig(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+Gg.a+")"),g=0;g<e.length;g++){f=e[g];
var h=Dh(f);h&&Hg(f,h)}}}}}
if(!(V||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Fh=new MutationObserver(Eh),Gh=function(a){Fh.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Gh(document);else{var Hh=function(){Gh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Hh):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Hh();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else Hh()})}Ah=function(){Eh(Fh.takeRecords())}};var Ih={};var Jh=Promise.resolve();function Kh(a){if(a=Ih[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function Lh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function Mh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,Jh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1}))};var Nh={},Oh=new zh;function Y(){this.Y={};this.c=document.documentElement;var a=new Lf;a.rules=[];this.l=eh(this.c,new ch(a));this.J=!1;this.a=this.b=null}w=Y.prototype;w.flush=function(){Ah()};w.Ta=function(a){return pg(a)};w.hb=function(a){return ng(a)};w.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
w.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!eg){V||wh[b]||(wh[b]=ug(b));a._prepared=!0;a.name=b;a.extends=c;Ih[b]=a;var d=Bg(a),e=Cg(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!V){var l=k.textContent;if(!mg.has(l)){mg.add(l);var m=document.createElement("style");m.setAttribute("shady-unscoped","");m.textContent=l;document.head.appendChild(m)}k.parentNode.removeChild(k)}}else f.push(k.textContent),
k.parentNode.removeChild(k)}f=f.join("").trim()+(Nh[b]||"");Ph(this);if(!e){if(g=!d)g=hg.test(f)||fg.test(f),hg.lastIndex=0,fg.lastIndex=0;h=Mf(f);g&&X&&this.b&&this.b.transformRules(h,b);a._styleAst=h}g=[];X||(g=jh(a._styleAst));if(!g.length||X)h=V?a.content:null,b=wh[b]||null,d=Kg(c,a._styleAst,null,d,e?f:""),d=d.length?rg(d,c.is,h,b):null,a._style=d;a.a=g}};w.ab=function(a,b){Nh[b]=a.join(" ")};
w.prepareTemplateDom=function(a,b){if(!eg){var c=Bg(a);V||"shady"===c||a._domPrepared||(a._domPrepared=!0,Eg(a.content,b))}};function Qh(a){var b=zg(a),c=b.is;b=b.ba;var d=wh[c]||null,e=Ih[c];if(e){c=e._styleAst;var f=e.a;e=Bg(e);b=new ch(c,d,f,b,e);eh(a,b);return b}}
function Rh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.a=window.ShadyCSS.CustomStyleInterface,a.a.transformCallback=function(b){a.Ha(b)},a.a.validateCallback=function(){requestAnimationFrame(function(){(a.a.enqueued||a.J)&&a.flushCustomStyles()})})}function Ph(a){if(!a.b&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){a.b=window.ShadyCSS.ApplyShim;a.b.invalidCallback=Kh;var b=!0}else b=!1;Rh(a);return b}
w.flushCustomStyles=function(){if(!eg){var a=Ph(this);if(this.a){var b=this.a.processStyles();if((a||this.a.enqueued)&&!Cg(this.l.cssBuild)){if(X){if(!this.l.cssBuild)for(a=0;a<b.length;a++){var c=this.a.getStyleForCustomStyle(b[a]);if(c&&X&&this.b){var d=pg(c);Ph(this);this.b.transformRules(d);c.textContent=ng(d)}}}else{Sh(this,b);Th(this,this.c,this.l);for(a=0;a<b.length;a++)(c=this.a.getStyleForCustomStyle(b[a]))&&uh(c,this.l.L);this.J&&this.styleDocument()}this.a.enqueued=!1}}}};
function Sh(a,b){b=b.map(function(c){return a.a.getStyleForCustomStyle(c)}).filter(function(c){return!!c});b.sort(function(c,d){c=d.compareDocumentPosition(c);return c&Node.DOCUMENT_POSITION_FOLLOWING?1:c&Node.DOCUMENT_POSITION_PRECEDING?-1:0});a.l.H.rules=b.map(function(c){return pg(c)})}
w.styleElement=function(a,b){if(eg){if(b){dh(a)||eh(a,new ch(null));var c=dh(a);c.F=c.F||{};Object.assign(c.F,b);Uh(this,a,c)}}else if(c=dh(a)||Qh(a))if(a!==this.c&&(this.J=!0),b&&(c.F=c.F||{},Object.assign(c.F,b)),X)Uh(this,a,c);else if(this.flush(),Th(this,a,c),c.ta&&c.ta.length){b=zg(a).is;var d;a:{if(d=Oh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.ta;for(var h=0;h<g.length;h++){var k=g[h];if(f.K[k]!==c.L[k]){g=!1;break b}}g=!0}if(g){d=f;break a}}d=void 0}g=d?d.styleElement:
null;e=c.G;(f=d&&d.G)||(f=this.Y[b]=(this.Y[b]||0)+1,f=b+"-"+f);c.G=f;f=c.G;h=vh;h=g?g.textContent||"":rh(h,a,c.L,f);k=dh(a);var l=k.a;l&&!V&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));V?k.a?(k.a.textContent=h,g=k.a):h&&(g=rg(h,f,a.shadowRoot,k.b)):g?g.parentNode||(hh&&-1<h.indexOf("@media")&&(g.textContent=h),sg(g,null,k.b)):h&&(g=rg(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;V||(g=c.G,k=h=a.getAttribute("class")||"",e&&(k=
h.replace(new RegExp("\\s*x-scope\\s*"+e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&xg(a,k));d||Oh.store(b,c.L,f,c.G)}};
function Uh(a,b,c){var d=zg(b).is;if(c.F){var e=c.F,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f])}e=Ih[d];if(!(!e&&b!==a.c||e&&""!==Bg(e))&&e&&e._style&&!Lh(e)){if(Lh(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)Ph(a),a.b&&a.b.transformRules(e._styleAst,d),e._style.textContent=Kg(b,c.H),Mh(e);V&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=Kg(b,c.H));c.H=e._styleAst}}
function Vh(a,b){return(b=yg(b).getRootNode().host)?dh(b)||Qh(b)?b:Vh(a,b):a.c}function Th(a,b,c){var d=Vh(a,b),e=dh(d),f=e.L;d===a.c||f||(Th(a,d,e),f=e.L);a=Object.create(f||null);d=qh(b,c.H,c.cssBuild);b=oh(e.H,b).K;Object.assign(a,d.Va,b,d.cb);b=c.F;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=vh;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=mh(g,a[d],a);c.L=a}w.styleDocument=function(a){this.styleSubtree(this.c,a)};
w.styleSubtree=function(a,b){var c=yg(a),d=c.shadowRoot,e=a===this.c;(d||e)&&this.styleElement(a,b);if(a=e?c:d)for(a=Array.from(a.querySelectorAll("*")).filter(function(f){return yg(f).shadowRoot}),b=0;b<a.length;b++)this.styleSubtree(a[b])};
w.Ha=function(a){var b=this,c=Bg(a);c!==this.l.cssBuild&&(this.l.cssBuild=c);if(!Cg(c)){var d=pg(a);og(d,function(e){if(V)bh(e);else{var f=Gg;e.selector=e.parsedSelector;bh(e);e.selector=e.w=Ng(f,e,f.c,void 0,void 0)}X&&""===c&&(Ph(b),b.b&&b.b.transformRule(e))});X?a.textContent=ng(d):this.l.H.rules.push(d)}};w.getComputedStyleValue=function(a,b){var c;X||(c=(dh(a)||dh(Vh(this,a))).L[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
w.gb=function(a,b){var c=yg(a).getRootNode(),d;b?d=("string"===typeof b?b:String(b)).split(/\s/):d=[];b=c.host&&c.host.localName;if(!b&&(c=a.getAttribute("class"))){c=c.split(/\s/);for(var e=0;e<c.length;e++)if(c[e]===Gg.a){b=c[e+1];break}}b&&d.push(Gg.a,b);X||(b=dh(a))&&b.G&&d.push(vh.a,b.G);xg(a,d.join(" "))};w.Oa=function(a){return dh(a)};w.fb=function(a,b){Hg(a,b)};w.ib=function(a,b){Hg(a,b,!0)};w.eb=function(a){return Dh(a)};w.Ra=function(a){return Ch(a)};Y.prototype.flush=Y.prototype.flush;
Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.gb;Y.prototype._styleInfoForNode=Y.prototype.Oa;Y.prototype.transformCustomStyleForDocument=Y.prototype.Ha;Y.prototype.getStyleAst=Y.prototype.Ta;Y.prototype.styleAstToString=Y.prototype.hb;
Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;Y.prototype.scopeNode=Y.prototype.fb;Y.prototype.unscopeNode=Y.prototype.ib;Y.prototype.scopeForNode=Y.prototype.eb;Y.prototype.currentScopeForNode=Y.prototype.Ra;Y.prototype.prepareAdoptedCssText=Y.prototype.ab;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return V}},nativeCss:{get:function(){return X}}});var Z=new Y,Wh,Xh;window.ShadyCSS&&(Wh=window.ShadyCSS.ApplyShim,Xh=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:X,nativeShadow:V,cssBuild:dg,disableRuntime:eg};Wh&&(window.ShadyCSS.ApplyShim=Wh);Xh&&(window.ShadyCSS.CustomStyleInterface=Xh);(function(a){function b(r){""==r&&(f.call(this),this.h=!0);return r.toLowerCase()}function c(r){var F=r.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,63,96].indexOf(F)?r:encodeURIComponent(r)}function d(r){var F=r.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,96].indexOf(F)?r:encodeURIComponent(r)}function e(r,F,C){function M(ka){ta.push(ka)}var y=F||"scheme start",W=0,v="",sa=!1,ea=!1,ta=[];a:for(;(void 0!=r[W-1]||0==W)&&!this.h;){var n=r[W];switch(y){case "scheme start":if(n&&q.test(n))v+=
n.toLowerCase(),y="scheme";else if(F){M("Invalid scheme.");break a}else{v="";y="no scheme";continue}break;case "scheme":if(n&&H.test(n))v+=n.toLowerCase();else if(":"==n){this.g=v;v="";if(F)break a;void 0!==l[this.g]&&(this.A=!0);y="file"==this.g?"relative":this.A&&C&&C.g==this.g?"relative or authority":this.A?"authority first slash":"scheme data"}else if(F){void 0!=n&&M("Code point not allowed in scheme: "+n);break a}else{v="";W=0;y="no scheme";continue}break;case "scheme data":"?"==n?(this.o="?",
y="query"):"#"==n?(this.u="#",y="fragment"):void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.pa+=c(n));break;case "no scheme":if(C&&void 0!==l[C.g]){y="relative";continue}else M("Missing scheme."),f.call(this),this.h=!0;break;case "relative or authority":if("/"==n&&"/"==r[W+1])y="authority ignore slashes";else{M("Expected /, got: "+n);y="relative";continue}break;case "relative":this.A=!0;"file"!=this.g&&(this.g=C.g);if(void 0==n){this.i=C.i;this.m=C.m;this.j=C.j.slice();this.o=C.o;this.s=C.s;this.f=C.f;
break a}else if("/"==n||"\\"==n)"\\"==n&&M("\\ is an invalid code point."),y="relative slash";else if("?"==n)this.i=C.i,this.m=C.m,this.j=C.j.slice(),this.o="?",this.s=C.s,this.f=C.f,y="query";else if("#"==n)this.i=C.i,this.m=C.m,this.j=C.j.slice(),this.o=C.o,this.u="#",this.s=C.s,this.f=C.f,y="fragment";else{y=r[W+1];var I=r[W+2];if("file"!=this.g||!q.test(n)||":"!=y&&"|"!=y||void 0!=I&&"/"!=I&&"\\"!=I&&"?"!=I&&"#"!=I)this.i=C.i,this.m=C.m,this.s=C.s,this.f=C.f,this.j=C.j.slice(),this.j.pop();y=
"relative path";continue}break;case "relative slash":if("/"==n||"\\"==n)"\\"==n&&M("\\ is an invalid code point."),y="file"==this.g?"file host":"authority ignore slashes";else{"file"!=this.g&&(this.i=C.i,this.m=C.m,this.s=C.s,this.f=C.f);y="relative path";continue}break;case "authority first slash":if("/"==n)y="authority second slash";else{M("Expected '/', got: "+n);y="authority ignore slashes";continue}break;case "authority second slash":y="authority ignore slashes";if("/"!=n){M("Expected '/', got: "+
n);continue}break;case "authority ignore slashes":if("/"!=n&&"\\"!=n){y="authority";continue}else M("Expected authority, got: "+n);break;case "authority":if("@"==n){sa&&(M("@ already seen."),v+="%40");sa=!0;for(n=0;n<v.length;n++)I=v[n],"\t"==I||"\n"==I||"\r"==I?M("Invalid whitespace in authority."):":"==I&&null===this.f?this.f="":(I=c(I),null!==this.f?this.f+=I:this.s+=I);v=""}else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){W-=v.length;v="";y="host";continue}else v+=n;break;case "file host":if(void 0==
n||"/"==n||"\\"==n||"?"==n||"#"==n){2!=v.length||!q.test(v[0])||":"!=v[1]&&"|"!=v[1]?(0!=v.length&&(this.i=b.call(this,v),v=""),y="relative path start"):y="relative path";continue}else"\t"==n||"\n"==n||"\r"==n?M("Invalid whitespace in file host."):v+=n;break;case "host":case "hostname":if(":"!=n||ea)if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){this.i=b.call(this,v);v="";y="relative path start";if(F)break a;continue}else"\t"!=n&&"\n"!=n&&"\r"!=n?("["==n?ea=!0:"]"==n&&(ea=!1),v+=n):M("Invalid code point in host/hostname: "+
n);else if(this.i=b.call(this,v),v="",y="port","hostname"==F)break a;break;case "port":if(/[0-9]/.test(n))v+=n;else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n||F){""!=v&&(v=parseInt(v,10),v!=l[this.g]&&(this.m=v+""),v="");if(F)break a;y="relative path start";continue}else"\t"==n||"\n"==n||"\r"==n?M("Invalid code point in port: "+n):(f.call(this),this.h=!0);break;case "relative path start":"\\"==n&&M("'\\' not allowed in path.");y="relative path";if("/"!=n&&"\\"!=n)continue;break;case "relative path":if(void 0!=
n&&"/"!=n&&"\\"!=n&&(F||"?"!=n&&"#"!=n))"\t"!=n&&"\n"!=n&&"\r"!=n&&(v+=c(n));else{"\\"==n&&M("\\ not allowed in relative path.");if(I=m[v.toLowerCase()])v=I;".."==v?(this.j.pop(),"/"!=n&&"\\"!=n&&this.j.push("")):"."==v&&"/"!=n&&"\\"!=n?this.j.push(""):"."!=v&&("file"==this.g&&0==this.j.length&&2==v.length&&q.test(v[0])&&"|"==v[1]&&(v=v[0]+":"),this.j.push(v));v="";"?"==n?(this.o="?",y="query"):"#"==n&&(this.u="#",y="fragment")}break;case "query":F||"#"!=n?void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.o+=
d(n)):(this.u="#",y="fragment");break;case "fragment":void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.u+=n)}W++}}function f(){this.s=this.pa=this.g="";this.f=null;this.m=this.i="";this.j=[];this.u=this.o="";this.A=this.h=!1}function g(r,F){void 0===F||F instanceof g||(F=new g(String(F)));this.a=r;f.call(this);e.call(this,this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,F)}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(r){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var m=Object.create(null);m["%2e"]=".";m[".%2e"]="..";m["%2e."]="..";m["%2e%2e"]="..";var q=/[a-zA-Z]/,H=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.h)return this.a;var r="";if(""!=this.s||null!=this.f)r=this.s+(null!=this.f?":"+this.f:"")+"@";return this.protocol+(this.A?"//"+r+this.host:"")+this.pathname+this.o+this.u},set href(r){f.call(this);e.call(this,r)},get protocol(){return this.g+
":"},set protocol(r){this.h||e.call(this,r+":","scheme start")},get host(){return this.h?"":this.m?this.i+":"+this.m:this.i},set host(r){!this.h&&this.A&&e.call(this,r,"host")},get hostname(){return this.i},set hostname(r){!this.h&&this.A&&e.call(this,r,"hostname")},get port(){return this.m},set port(r){!this.h&&this.A&&e.call(this,r,"port")},get pathname(){return this.h?"":this.A?"/"+this.j.join("/"):this.pa},set pathname(r){!this.h&&this.A&&(this.j=[],e.call(this,r,"relative path start"))},get search(){return this.h||
!this.o||"?"==this.o?"":this.o},set search(r){!this.h&&this.A&&(this.o="?","?"==r[0]&&(r=r.slice(1)),e.call(this,r,"query"))},get hash(){return this.h||!this.u||"#"==this.u?"":this.u},set hash(r){this.h||(r?(this.u="#","#"==r[0]&&(r=r.slice(1)),e.call(this,r,"fragment")):this.u="")},get origin(){var r;if(this.h||!this.g)return"";switch(this.g){case "data":case "file":case "javascript":case "mailto":return"null"}return(r=this.host)?this.g+"://"+r:""}};var E=a.URL;E&&(g.createObjectURL=function(r){return E.createObjectURL.apply(E,
arguments)},g.revokeObjectURL=function(r){E.revokeObjectURL(r)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var Yh=document.createElement("style");Yh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Zh=document.querySelector("head");Zh.insertBefore(Yh,Zh.firstChild);var $h=window.customElements,ai=!1,bi=null;$h.polyfillWrapFlushCallback&&$h.polyfillWrapFlushCallback(function(a){bi=a;ai&&a()});function ci(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);bi&&bi();ai=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",ci),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",ci);ci()})):ci();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/hybrids/esm/cache.js":
/*!*******************************************!*\
  !*** ./node_modules/hybrids/esm/cache.js ***!
  \*******************************************/
/*! exports provided: getEntry, get, set, invalidate, observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntry", function() { return getEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidate", function() { return invalidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony import */ var _emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter.js */ "./node_modules/hybrids/esm/emitter.js");

var entries = new WeakMap();
function getEntry(target, key) {
  var targetMap = entries.get(target);

  if (!targetMap) {
    targetMap = new Map();
    entries.set(target, targetMap);
  }

  var entry = targetMap.get(key);

  if (!entry) {
    entry = {
      target: target,
      key: key,
      value: undefined,
      contexts: undefined,
      deps: undefined,
      state: 0,
      checksum: 0,
      observed: false
    };
    targetMap.set(key, entry);
  }

  return entry;
}

function calculateChecksum(entry) {
  var checksum = entry.state;

  if (entry.deps) {
    entry.deps.forEach(function (depEntry) {
      checksum += depEntry.state;
    });
  }

  return checksum;
}

function dispatchDeep(entry) {
  if (entry.observed) _emitter_js__WEBPACK_IMPORTED_MODULE_0__["dispatch"](entry);
  if (entry.contexts) entry.contexts.forEach(dispatchDeep);
}

function restoreDeepDeps(entry, deps) {
  if (deps) {
    deps.forEach(function (depEntry) {
      entry.deps.add(depEntry);

      if (entry.observed) {
        /* istanbul ignore if */
        if (!depEntry.contexts) depEntry.contexts = new Set();
        depEntry.contexts.add(entry);
      }

      restoreDeepDeps(entry, depEntry.deps);
    });
  }
}

var contextStack = new Set();
function get(target, key, getter) {
  var entry = getEntry(target, key);

  if (contextStack.size && contextStack.has(entry)) {
    throw Error("Circular get invocation is forbidden: '".concat(key, "'"));
  }

  contextStack.forEach(function (context) {
    if (!context.deps) context.deps = new Set();
    context.deps.add(entry);

    if (context.observed) {
      if (!entry.contexts) entry.contexts = new Set();
      entry.contexts.add(context);
    }
  });

  if (entry.checksum && entry.checksum === calculateChecksum(entry)) {
    return entry.value;
  }

  try {
    contextStack.add(entry);

    if (entry.observed && entry.deps && entry.deps.size) {
      entry.deps.forEach(function (depEntry) {
        /* istanbul ignore else */
        if (depEntry.contexts) depEntry.contexts.delete(entry);
      });
    }

    entry.deps = undefined;
    var nextValue = getter(target, entry.value);

    if (entry.deps) {
      entry.deps.forEach(function (depEntry) {
        restoreDeepDeps(entry, depEntry.deps);
      });
    }

    if (nextValue !== entry.value) {
      entry.state += 1;
      entry.value = nextValue;
      dispatchDeep(entry);
    }

    entry.checksum = calculateChecksum(entry);
    contextStack.delete(entry);
  } catch (e) {
    entry.checksum = 0;
    contextStack.delete(entry);
    contextStack.forEach(function (context) {
      context.deps.delete(entry);
      if (context.observed) entry.contexts.delete(context);
    });
    throw e;
  }

  return entry.value;
}
function set(target, key, setter, value, force) {
  if (contextStack.size && !force) {
    throw Error("Setting property in chain of get calls is forbidden: '".concat(key, "'"));
  }

  var entry = getEntry(target, key);
  var newValue = setter(target, value, entry.value);

  if (newValue !== entry.value) {
    entry.checksum = 0;
    entry.state += 1;
    entry.value = newValue;
    dispatchDeep(entry);
  }
}
function invalidate(target, key, clearValue) {
  if (contextStack.size) {
    throw Error("Invalidating property in chain of get calls is forbidden: '".concat(key, "'"));
  }

  var entry = getEntry(target, key);
  entry.checksum = 0;
  entry.state += 1;
  dispatchDeep(entry);

  if (clearValue) {
    entry.value = undefined;
  }
}
function observe(target, key, getter, fn) {
  var entry = getEntry(target, key);
  entry.observed = true;
  var lastValue;
  var unsubscribe = _emitter_js__WEBPACK_IMPORTED_MODULE_0__["subscribe"](entry, function () {
    var value = get(target, key, getter);

    if (value !== lastValue) {
      fn(target, value, lastValue);
      lastValue = value;
    }
  });

  if (entry.deps) {
    entry.deps.forEach(function (depEntry) {
      /* istanbul ignore else */
      if (!depEntry.contexts) depEntry.contexts = new Set();
      depEntry.contexts.add(entry);
    });
  }

  return function unobserve() {
    unsubscribe();
    entry.observed = false;

    if (entry.deps && entry.deps.size) {
      entry.deps.forEach(function (depEntry) {
        /* istanbul ignore else */
        if (depEntry.contexts) depEntry.contexts.delete(entry);
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJlbWl0dGVyIiwiZW50cmllcyIsIldlYWtNYXAiLCJnZXRFbnRyeSIsInRhcmdldCIsImtleSIsInRhcmdldE1hcCIsImdldCIsIk1hcCIsInNldCIsImVudHJ5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb250ZXh0cyIsImRlcHMiLCJzdGF0ZSIsImNoZWNrc3VtIiwib2JzZXJ2ZWQiLCJjYWxjdWxhdGVDaGVja3N1bSIsImZvckVhY2giLCJkZXBFbnRyeSIsImRpc3BhdGNoRGVlcCIsImRpc3BhdGNoIiwicmVzdG9yZURlZXBEZXBzIiwiYWRkIiwiU2V0IiwiY29udGV4dFN0YWNrIiwiZ2V0dGVyIiwic2l6ZSIsImhhcyIsIkVycm9yIiwiY29udGV4dCIsImRlbGV0ZSIsIm5leHRWYWx1ZSIsImUiLCJzZXR0ZXIiLCJmb3JjZSIsIm5ld1ZhbHVlIiwiaW52YWxpZGF0ZSIsImNsZWFyVmFsdWUiLCJvYnNlcnZlIiwiZm4iLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInVub2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxPQUFaLE1BQXlCLGNBQXpCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQSxPQUFPLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxHQUExQixFQUErQjtBQUNwQyxNQUFJQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sR0FBUixDQUFZSCxNQUFaLENBQWhCOztBQUNBLE1BQUksQ0FBQ0UsU0FBTCxFQUFnQjtBQUNkQSxJQUFBQSxTQUFTLEdBQUcsSUFBSUUsR0FBSixFQUFaO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsR0FBUixDQUFZTCxNQUFaLEVBQW9CRSxTQUFwQjtBQUNEOztBQUVELE1BQUlJLEtBQUssR0FBR0osU0FBUyxDQUFDQyxHQUFWLENBQWNGLEdBQWQsQ0FBWjs7QUFFQSxNQUFJLENBQUNLLEtB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LEVBQVNPLEtBQVQsRUFBZ0IrQixTQUFoQixDQUFGO0FBQ0FBLE1BQUFBLFNBQVMsR0FBRy9CLEtBQVo7QUFDRDtBQUNGLEdBTm1CLENBQXBCOztBQVFBLE1BQUlELEtBQUssQ0FBQ0ksSUFBVixFQUFnQjtBQUNkSixJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV0ssT0FBWCxDQUFtQixVQUFBQyxRQUFRLEVBQUk7QUFDN0I7QUFDQSxVQUFJLENBQUNBLFFBQVEsQ0FBQ1AsUUFBZCxFQUF3Qk8sUUFBUSxDQUFDUCxRQUFULEdBQW9CLElBQUlZLEdBQUosRUFBcEI7QUFDeEJMLE1BQUFBLFFBQVEsQ0FBQ1AsUUFBVCxDQUFrQlcsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0QsS0FKRDtBQUtEOztBQUVELFNBQU8sU0FBU21DLFNBQVQsR0FBcUI7QUFDMUJGLElBQUFBLFdBQVc7QUFDWGpDLElBQUFBLEtBQUssQ0FBQ08sUUFBTixHQUFpQixLQUFqQjs7QUFDQSxRQUFJUCxLQUFLLENBQUNJLElBQU4sSUFBY0osS0FBSyxDQUFDSSxJQUFOLENBQVdjLElBQTdCLEVBQW1DO0FBQ2pDbEIsTUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdLLE9BQVgsQ0FBbUIsVUFBQUMsUUFBUSxFQUFJO0FBQzdCO0FBQ0EsWUFBSUEsUUFBUSxDQUFDUCxRQUFiLEVBQXVCTyxRQUFRLENBQUNQLFFBQVQsQ0FBa0JtQixNQUFsQixDQUF5QnRCLEtBQXpCO0FBQ3hCLE9BSEQ7QUFJRDtBQUNGLEdBVEQ7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVtaXR0ZXIgZnJvbSBcIi4vZW1pdHRlci5qc1wiO1xuXG5jb25zdCBlbnRyaWVzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyeSh0YXJnZXQsIGtleSkge1xuICBsZXQgdGFyZ2V0TWFwID0gZW50cmllcy5nZXQodGFyZ2V0KTtcbiAgaWYgKCF0YXJnZXRNYXApIHtcbiAgICB0YXJnZXRNYXAgPSBuZXcgTWFwKCk7XG4gICAgZW50cmllcy5zZXQodGFyZ2V0LCB0YXJnZXRNYXApO1xuICB9XG5cbiAgbGV0IGVudHJ5ID0gdGFyZ2V0TWFwLmdldChrZXkpO1xuXG4gIGlmICghZW50cnkpIHtcbiAgICBlbnRyeSA9IHtcbiAgICAgIHRhcmdldCxcbiAgICAgIGtleSxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBjb250ZXh0czogdW5kZWZpbmVkLFxuICAgICAgZGVwczogdW5kZWZpbmVkLFxuICAgICAgc3RhdGU6IDAsXG4gICAgICBjaGVja3N1bTogMCxcbiAgICAgIG9ic2VydmVkOiBmYWxzZSxcbiAgICB9O1xuICAgIHRhcmdldE1hcC5zZXQoa2V5LCBlbnRyeSk7XG4gIH1cblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KSB7XG4gIGxldCBjaGVja3N1bSA9IGVudHJ5LnN0YXRlO1xuICBpZiAoZW50cnkuZGVwcykge1xuICAgIGVudHJ5LmRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICBjaGVja3N1bSArPSBkZXBFbnRyeS5zdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hEZWVwKGVudHJ5KSB7XG4gIGlmIChlbnRyeS5vYnNlcnZlZCkgZW1pdHRlci5kaXNwYXRjaChlbnRyeSk7XG4gIGlmIChlbnRyeS5jb250ZXh0cykgZW50cnkuY29udGV4dHMuZm9yRWFjaChkaXNwYXRjaERlZXApO1xufVxuXG5mdW5jdGlvbiByZXN0b3JlRGVlcERlcHMoZW50cnksIGRlcHMpIHtcbiAgaWYgKGRlcHMpIHtcbiAgICBkZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgZW50cnkuZGVwcy5hZGQoZGVwRW50cnkpO1xuXG4gICAgICBpZiAoZW50cnkub2JzZXJ2ZWQpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgICBkZXBFbnRyeS5jb250ZXh0cy5hZGQoZW50cnkpO1xuICAgICAgfVxuXG4gICAgICByZXN0b3JlRGVlcERlcHMoZW50cnksIGRlcEVudHJ5LmRlcHMpO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGNvbnRleHRTdGFjayA9IG5ldyBTZXQoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXksIGdldHRlcikge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcblxuICBpZiAoY29udGV4dFN0YWNrLnNpemUgJiYgY29udGV4dFN0YWNrLmhhcyhlbnRyeSkpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2lyY3VsYXIgZ2V0IGludm9jYXRpb24gaXMgZm9yYmlkZGVuOiAnJHtrZXl9J2ApO1xuICB9XG5cbiAgY29udGV4dFN0YWNrLmZvckVhY2goY29udGV4dCA9PiB7XG4gICAgaWYgKCFjb250ZXh0LmRlcHMpIGNvbnRleHQuZGVwcyA9IG5ldyBTZXQoKTtcbiAgICBjb250ZXh0LmRlcHMuYWRkKGVudHJ5KTtcblxuICAgIGlmIChjb250ZXh0Lm9ic2VydmVkKSB7XG4gICAgICBpZiAoIWVudHJ5LmNvbnRleHRzKSBlbnRyeS5jb250ZXh0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGVudHJ5LmNvbnRleHRzLmFkZChjb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChlbnRyeS5jaGVja3N1bSAmJiBlbnRyeS5jaGVja3N1bSA9PT0gY2FsY3VsYXRlQ2hlY2tzdW0oZW50cnkpKSB7XG4gICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb250ZXh0U3RhY2suYWRkKGVudHJ5KTtcblxuICAgIGlmIChlbnRyeS5vYnNlcnZlZCAmJiBlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW50cnkuZGVwcyA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXR0ZXIodGFyZ2V0LCBlbnRyeS52YWx1ZSk7XG5cbiAgICBpZiAoZW50cnkuZGVwcykge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgcmVzdG9yZURlZXBEZXBzKGVudHJ5LCBkZXBFbnRyeS5kZXBzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChuZXh0VmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgICBlbnRyeS5zdGF0ZSArPSAxO1xuICAgICAgZW50cnkudmFsdWUgPSBuZXh0VmFsdWU7XG5cbiAgICAgIGRpc3BhdGNoRGVlcChlbnRyeSk7XG4gICAgfVxuXG4gICAgZW50cnkuY2hlY2tzdW0gPSBjYWxjdWxhdGVDaGVja3N1bShlbnRyeSk7XG4gICAgY29udGV4dFN0YWNrLmRlbGV0ZShlbnRyeSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlbnRyeS5jaGVja3N1bSA9IDA7XG5cbiAgICBjb250ZXh0U3RhY2suZGVsZXRlKGVudHJ5KTtcbiAgICBjb250ZXh0U3RhY2suZm9yRWFjaChjb250ZXh0ID0+IHtcbiAgICAgIGNvbnRleHQuZGVwcy5kZWxldGUoZW50cnkpO1xuICAgICAgaWYgKGNvbnRleHQub2JzZXJ2ZWQpIGVudHJ5LmNvbnRleHRzLmRlbGV0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gZW50cnkudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQodGFyZ2V0LCBrZXksIHNldHRlciwgdmFsdWUsIGZvcmNlKSB7XG4gIGlmIChjb250ZXh0U3RhY2suc2l6ZSAmJiAhZm9yY2UpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBTZXR0aW5nIHByb3BlcnR5IGluIGNoYWluIG9mIGdldCBjYWxscyBpcyBmb3JiaWRkZW46ICcke2tleX0nYCxcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gc2V0dGVyKHRhcmdldCwgdmFsdWUsIGVudHJ5LnZhbHVlKTtcblxuICBpZiAobmV3VmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgZW50cnkuY2hlY2tzdW0gPSAwO1xuICAgIGVudHJ5LnN0YXRlICs9IDE7XG4gICAgZW50cnkudmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgIGRpc3BhdGNoRGVlcChlbnRyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGUodGFyZ2V0LCBrZXksIGNsZWFyVmFsdWUpIHtcbiAgaWYgKGNvbnRleHRTdGFjay5zaXplKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgSW52YWxpZGF0aW5nIHByb3BlcnR5IGluIGNoYWluIG9mIGdldCBjYWxscyBpcyBmb3JiaWRkZW46ICcke2tleX0nYCxcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG5cbiAgZW50cnkuY2hlY2tzdW0gPSAwO1xuICBlbnRyeS5zdGF0ZSArPSAxO1xuXG4gIGRpc3BhdGNoRGVlcChlbnRyeSk7XG5cbiAgaWYgKGNsZWFyVmFsdWUpIHtcbiAgICBlbnRyeS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh0YXJnZXQsIGtleSwgZ2V0dGVyLCBmbikge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgZW50cnkub2JzZXJ2ZWQgPSB0cnVlO1xuXG4gIGxldCBsYXN0VmFsdWU7XG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZW1pdHRlci5zdWJzY3JpYmUoZW50cnksICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyKTtcbiAgICBpZiAodmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgZm4odGFyZ2V0LCB2YWx1ZSwgbGFzdFZhbHVlKTtcbiAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVudHJ5LmRlcHMpIHtcbiAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgZGVwRW50cnkuY29udGV4dHMuYWRkKGVudHJ5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgICBlbnRyeS5vYnNlcnZlZCA9IGZhbHNlO1xuICAgIGlmIChlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/children.js":
/*!**********************************************!*\
  !*** ./node_modules/hybrids/esm/children.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return children; });
function walk(node, fn, options) {
  var items = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  Array.from(node.children).forEach(function (child) {
    var hybrids = child.constructor.hybrids;

    if (hybrids && fn(hybrids)) {
      items.push(child);

      if (options.deep && options.nested) {
        walk(child, fn, options, items);
      }
    } else if (options.deep) {
      walk(child, fn, options, items);
    }
  });
  return items;
}

function children(hybridsOrFn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    deep: false,
    nested: false
  };
  var fn = typeof hybridsOrFn === "function" ? hybridsOrFn : function (hybrids) {
    return hybrids === hybridsOrFn;
  };
  return {
    get: function get(host) {
      return walk(host, fn, options);
    },
    connect: function connect(host, key, invalidate) {
      var observer = new MutationObserver(invalidate);
      observer.observe(host, {
        childList: true,
        subtree: !!options.deep
      });
      return function () {
        observer.disconnect();
      };
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGlsZHJlbi5qcyJdLCJuYW1lcyI6WyJ3YWxrIiwibm9kZSIsImZuIiwib3B0aW9ucyIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoeWJyaWRzIiwiY29uc3RydWN0b3IiLCJwdXNoIiwiZGVlcCIsIm5lc3RlZCIsImh5YnJpZHNPckZuIiwiZ2V0IiwiaG9zdCIsImNvbm5lY3QiLCJrZXkiLCJpbnZhbGlkYXRlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0JDLEVBQXBCLEVBQXdCQyxPQUF4QixFQUE2QztBQUFBLE1BQVpDLEtBQVksdUVBQUosRUFBSTtBQUMzQ0MsRUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdMLElBQUksQ0FBQ00sUUFBaEIsRUFBMEJDLE9BQTFCLENBQWtDLFVBQUFDLEtBQUssRUFBSTtBQUN6QyxRQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkQsT0FBbEM7O0FBQ0EsUUFBSUEsT0FBTyxJQUFJUixFQUFFLENBQUNRLE9BQUQsQ0FBakIsRUFBNEI7QUFDMUJOLE1BQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXSCxLQUFYOztBQUNBLFVBQUlOLE9BQU8sQ0FBQ1UsSUFBUixJQUFnQlYsT0FBTyxDQUFDVyxNQUE1QixFQUFvQztBQUNsQ2QsUUFBQUEsSUFBSSxDQUFDUyxLQUFELEVBQVFQLEVBQVIsRUFBWUMsT0FBWixFQUFxQkMsS0FBckIsQ0FBSjtBQUNEO0FBQ0YsS0FMRCxNQUtPLElBQUlELE9BQU8sQ0FBQ1UsSUFBWixFQUFrQjtBQUN2QmIsTUFBQUEsSUFBSSxDQUFDUyxLQUFELEVBQVFQLEVBQVIsRUFBWUMsT0FBWixFQUFxQkMsS0FBckIsQ0FBSjtBQUNEO0FBQ0YsR0FWRDtBQVlBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFlLFNBQVNHLFFBQVQsQ0FDYlEsV0FEYSxFQUdiO0FBQUEsTUFEQVosT0FDQSx1RUFEVTtBQUFFVSxJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxJQUFBQSxNQUFNLEVBQUU7QUFBdkIsR0FDVjtBQUNBLE1BQU1aLEVBQUUsR0FDTixPQUFPYSxXQUFQLEtBQXVCLFVBQXZCLEdBQ0lBLFdBREosR0FFSSxVQUFBTCxPQUFPO0FBQUEsV0FBSUEsT0FBTyxLQUFLSyxXQUFoQjtBQUFBLEdBSGI7QUFJQSxTQUFPO0FBQ0xDLElBQUFBLEdBREssZUFDREMsSUFEQyxFQUNLO0FBQ1IsYUFBT2pCLElBQUksQ0FBQ2lCLElBQUQsRUFBT2YsRUFBUCxFQUFXQyxPQUFYLENBQVg7QUFDRCxLQUhJO0FBSUxlLElBQUFBLE9BSkssbUJBSUdELElBSkgsRUFJU0UsR0FKVCxFQUljQyxVQUpkLEVBSTBCO0FBQzdCLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixDQUFxQkYsVUFBckIsQ0FBakI7QUFFQUMsTUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCTixJQUFqQixFQUF1QjtBQUNyQk8sUUFBQUEsU0FBUyxFQUFFLElBRFU7QUFFckJDLFFBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUN0QixPQUFPLENBQUNVO0FBRkUsT0FBdkI7QUFLQSxhQUFPLFlBQU07QUFDWFEsUUFBQUEsUUFBUSxDQUFDSyxVQUFUO0FBQ0QsT0FGRDtBQUdEO0FBZkksR0FBUDtBQWlCRCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdhbGsobm9kZSwgZm4sIG9wdGlvbnMsIGl0ZW1zID0gW10pIHtcbiAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBjb25zdCBoeWJyaWRzID0gY2hpbGQuY29uc3RydWN0b3IuaHlicmlkcztcbiAgICBpZiAoaHlicmlkcyAmJiBmbihoeWJyaWRzKSkge1xuICAgICAgaXRlbXMucHVzaChjaGlsZCk7XG4gICAgICBpZiAob3B0aW9ucy5kZWVwICYmIG9wdGlvbnMubmVzdGVkKSB7XG4gICAgICAgIHdhbGsoY2hpbGQsIGZuLCBvcHRpb25zLCBpdGVtcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRlZXApIHtcbiAgICAgIHdhbGsoY2hpbGQsIGZuLCBvcHRpb25zLCBpdGVtcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoaWxkcmVuKFxuICBoeWJyaWRzT3JGbixcbiAgb3B0aW9ucyA9IHsgZGVlcDogZmFsc2UsIG5lc3RlZDogZmFsc2UgfSxcbikge1xuICBjb25zdCBmbiA9XG4gICAgdHlwZW9mIGh5YnJpZHNPckZuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gaHlicmlkc09yRm5cbiAgICAgIDogaHlicmlkcyA9PiBoeWJyaWRzID09PSBoeWJyaWRzT3JGbjtcbiAgcmV0dXJuIHtcbiAgICBnZXQoaG9zdCkge1xuICAgICAgcmV0dXJuIHdhbGsoaG9zdCwgZm4sIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY29ubmVjdChob3N0LCBrZXksIGludmFsaWRhdGUpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaW52YWxpZGF0ZSk7XG5cbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaG9zdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6ICEhb3B0aW9ucy5kZWVwLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/define.js":
/*!********************************************!*\
  !*** ./node_modules/hybrids/esm/define.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return define; });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/hybrids/esm/property.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./node_modules/hybrids/esm/render.js");
/* harmony import */ var _cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.js */ "./node_modules/hybrids/esm/cache.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/* istanbul ignore next */

try {
  "development";
} catch (e) {
  var process = {
    env: {
      NODE_ENV: 'production'
    }
  };
} // eslint-disable-line


var defaultMethod = function defaultMethod(host, value) {
  return value;
};

var callbacksMap = new WeakMap();
var propsMap = new WeakMap();

function compile(Hybrid, descriptors) {
  Hybrid.hybrids = descriptors;
  var callbacks = [];
  var props = Object.keys(descriptors);
  callbacksMap.set(Hybrid, callbacks);
  propsMap.set(Hybrid, props);
  props.forEach(function (key) {
    var desc = descriptors[key];

    var type = _typeof(desc);

    var config;

    if (type === "function") {
      config = key === "render" ? Object(_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])(desc) : {
        get: desc
      };
    } else if (type !== "object" || desc === null || Array.isArray(desc)) {
      config = Object(_property_js__WEBPACK_IMPORTED_MODULE_0__["default"])(desc);
    } else {
      config = {
        get: desc.get || defaultMethod,
        set: desc.set || !desc.get && defaultMethod || undefined,
        connect: desc.connect,
        observe: desc.observe
      };
    }

    Object.defineProperty(Hybrid.prototype, key, {
      get: function get() {
        return _cache_js__WEBPACK_IMPORTED_MODULE_2__["get"](this, key, config.get);
      },
      set: config.set && function set(newValue) {
        _cache_js__WEBPACK_IMPORTED_MODULE_2__["set"](this, key, config.set, newValue);
      },
      enumerable: true,
      configurable: "development" !== "production"
    });

    if (config.observe) {
      callbacks.unshift(function (host) {
        return _cache_js__WEBPACK_IMPORTED_MODULE_2__["observe"](host, key, config.get, config.observe);
      });
    }

    if (config.connect) {
      callbacks.push(function (host) {
        return config.connect(host, key, function () {
          _cache_js__WEBPACK_IMPORTED_MODULE_2__["invalidate"](host, key);
        });
      });
    }
  });
}

var update;
/* istanbul ignore else */

if (true) {
  var walkInShadow = function walkInShadow(node, fn) {
    fn(node);
    Array.from(node.children).forEach(function (el) {
      return walkInShadow(el, fn);
    });

    if (node.shadowRoot) {
      Array.from(node.shadowRoot.children).forEach(function (el) {
        return walkInShadow(el, fn);
      });
    }
  };

  var updateQueue = new Map();

  update = function update(Hybrid, lastHybrids) {
    if (!updateQueue.size) {
      _utils_js__WEBPACK_IMPORTED_MODULE_3__["deferred"].then(function () {
        walkInShadow(document.body, function (node) {
          if (updateQueue.has(node.constructor)) {
            var hybrids = updateQueue.get(node.constructor);
            node.disconnectedCallback();
            Object.keys(node.constructor.hybrids).forEach(function (key) {
              _cache_js__WEBPACK_IMPORTED_MODULE_2__["invalidate"](node, key, node.constructor.hybrids[key] !== hybrids[key]);
            });
            node.connectedCallback();
          }
        });
        updateQueue.clear();
      });
    }

    updateQueue.set(Hybrid, lastHybrids);
  };
}

var disconnects = new WeakMap();

function defineElement(tagName, hybridsOrConstructor) {
  var type = _typeof(hybridsOrConstructor);

  if (type !== "object" && type !== "function") {
    throw TypeError("Second argument must be an object or a function: ".concat(type));
  }

  var CustomElement = window.customElements.get(tagName);

  if (type === "function") {
    if (CustomElement !== hybridsOrConstructor) {
      return window.customElements.define(tagName, hybridsOrConstructor);
    }

    return CustomElement;
  }

  if (CustomElement) {
    if (CustomElement.hybrids === hybridsOrConstructor) {
      return CustomElement;
    }

    if ( true && CustomElement.hybrids) {
      Object.keys(CustomElement.hybrids).forEach(function (key) {
        delete CustomElement.prototype[key];
      });
      var lastHybrids = CustomElement.hybrids;
      compile(CustomElement, hybridsOrConstructor);
      update(CustomElement, lastHybrids);
      return CustomElement;
    }

    throw Error("Element '".concat(tagName, "' already defined"));
  }

  var Hybrid = /*#__PURE__*/function (_HTMLElement) {
    _inherits(Hybrid, _HTMLElement);

    var _super = _createSuper(Hybrid);

    _createClass(Hybrid, null, [{
      key: "name",
      get: function get() {
        return tagName;
      }
    }]);

    function Hybrid() {
      var _this;

      _classCallCheck(this, Hybrid);

      _this = _super.call(this);
      var props = propsMap.get(Hybrid);

      for (var index = 0; index < props.length; index += 1) {
        var key = props[index];

        if (Object.prototype.hasOwnProperty.call(_assertThisInitialized(_this), key)) {
          var value = _this[key];
          delete _this[key];
          _this[key] = value;
        }
      }

      return _this;
    }

    _createClass(Hybrid, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var callbacks = callbacksMap.get(Hybrid);
        var list = [];

        for (var index = 0; index < callbacks.length; index += 1) {
          var cb = callbacks[index](this);
          if (cb) list.push(cb);
        }

        disconnects.set(this, list);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var list = disconnects.get(this);

        for (var index = 0; index < list.length; index += 1) {
          list[index]();
        }
      }
    }]);

    return Hybrid;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  compile(Hybrid, hybridsOrConstructor);
  customElements.define(tagName, Hybrid);
  return Hybrid;
}

function defineMap(elements) {
  return Object.keys(elements).reduce(function (acc, key) {
    var tagName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pascalToDash"])(key);
    acc[key] = defineElement(tagName, elements[key]);
    return acc;
  }, {});
}

function define() {
  if (_typeof(arguments.length <= 0 ? undefined : arguments[0]) === "object") {
    return defineMap(arguments.length <= 0 ? undefined : arguments[0]);
  }

  return defineElement.apply(void 0, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbmUuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJyZW5kZXIiLCJjYWNoZSIsInBhc2NhbFRvRGFzaCIsImRlZmVycmVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsImRlZmF1bHRNZXRob2QiLCJob3N0IiwidmFsdWUiLCJjYWxsYmFja3NNYXAiLCJXZWFrTWFwIiwicHJvcHNNYXAiLCJjb21waWxlIiwiSHlicmlkIiwiZGVzY3JpcHRvcnMiLCJoeWJyaWRzIiwiY2FsbGJhY2tzIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwic2V0IiwiZm9yRWFjaCIsImtleSIsImRlc2MiLCJ0eXBlIiwiY29uZmlnIiwiZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIm9ic2VydmUiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsIm5ld1ZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInVuc2hpZnQiLCJwdXNoIiwiaW52YWxpZGF0ZSIsInVwZGF0ZSIsIndhbGtJblNoYWRvdyIsIm5vZGUiLCJmbiIsImZyb20iLCJjaGlsZHJlbiIsImVsIiwic2hhZG93Um9vdCIsInVwZGF0ZVF1ZXVlIiwiTWFwIiwibGFzdEh5YnJpZHMiLCJzaXplIiwidGhlbiIsImRvY3VtZW50IiwiYm9keSIsImhhcyIsImNvbnN0cnVjdG9yIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImNsZWFyIiwiZGlzY29ubmVjdHMiLCJkZWZpbmVFbGVtZW50IiwidGFnTmFtZSIsImh5YnJpZHNPckNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiQ3VzdG9tRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRXJyb3IiLCJpbmRleCIsImxlbmd0aCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImxpc3QiLCJjYiIsIkhUTUxFbGVtZW50IiwiZGVmaW5l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LENBQUgsR0FBV3VDLGFBQWEsQ0FBQ0MsT0FBRCxFQUFVZ0IsUUFBUSxDQUFDeEQsR0FBRCxDQUFsQixDQUF4QjtBQUVBLFdBQU8wRCxHQUFQO0FBQ0QsR0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1EOztBQUVELGVBQWUsU0FBU1osTUFBVCxHQUF5QjtBQUN0QyxNQUFJLDhEQUFtQixRQUF2QixFQUFpQztBQUMvQixXQUFPUyxTQUFTLGtEQUFoQjtBQUNEOztBQUVELFNBQU9oQixhQUFhLE1BQWIsbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSBcIi4vY2FjaGUuanNcIjtcbmltcG9ydCB7IHBhc2NhbFRvRGFzaCwgZGVmZXJyZWQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudHJ5IHsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSBjYXRjaChlKSB7IHZhciBwcm9jZXNzID0geyBlbnY6IHsgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyB9IH07IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jb25zdCBkZWZhdWx0TWV0aG9kID0gKGhvc3QsIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgY2FsbGJhY2tzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb3BzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gY29tcGlsZShIeWJyaWQsIGRlc2NyaXB0b3JzKSB7XG4gIEh5YnJpZC5oeWJyaWRzID0gZGVzY3JpcHRvcnM7XG5cbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoZGVzY3JpcHRvcnMpO1xuXG4gIGNhbGxiYWNrc01hcC5zZXQoSHlicmlkLCBjYWxsYmFja3MpO1xuICBwcm9wc01hcC5zZXQoSHlicmlkLCBwcm9wcyk7XG5cbiAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgZGVzYztcblxuICAgIGxldCBjb25maWc7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcgPSBrZXkgPT09IFwicmVuZGVyXCIgPyByZW5kZXIoZGVzYykgOiB7IGdldDogZGVzYyB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJvYmplY3RcIiB8fCBkZXNjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGVzYykpIHtcbiAgICAgIGNvbmZpZyA9IHByb3BlcnR5KGRlc2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIGdldDogZGVzYy5nZXQgfHwgZGVmYXVsdE1ldGhvZCxcbiAgICAgICAgc2V0OiBkZXNjLnNldCB8fCAoIWRlc2MuZ2V0ICYmIGRlZmF1bHRNZXRob2QpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29ubmVjdDogZGVzYy5jb25uZWN0LFxuICAgICAgICBvYnNlcnZlOiBkZXNjLm9ic2VydmUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIeWJyaWQucHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRoaXMsIGtleSwgY29uZmlnLmdldCk7XG4gICAgICB9LFxuICAgICAgc2V0OlxuICAgICAgICBjb25maWcuc2V0ICYmXG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgIGNhY2hlLnNldCh0aGlzLCBrZXksIGNvbmZpZy5zZXQsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub2JzZXJ2ZSkge1xuICAgICAgY2FsbGJhY2tzLnVuc2hpZnQoaG9zdCA9PlxuICAgICAgICBjYWNoZS5vYnNlcnZlKGhvc3QsIGtleSwgY29uZmlnLmdldCwgY29uZmlnLm9ic2VydmUpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNvbm5lY3QpIHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKGhvc3QgPT5cbiAgICAgICAgY29uZmlnLmNvbm5lY3QoaG9zdCwga2V5LCAoKSA9PiB7XG4gICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShob3N0LCBrZXkpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IHVwZGF0ZTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGNvbnN0IHdhbGtJblNoYWRvdyA9IChub2RlLCBmbikgPT4ge1xuICAgIGZuKG5vZGUpO1xuXG4gICAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcblxuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIEFycmF5LmZyb20obm9kZS5zaGFkb3dSb290LmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUXVldWUgPSBuZXcgTWFwKCk7XG4gIHVwZGF0ZSA9IChIeWJyaWQsIGxhc3RIeWJyaWRzKSA9PiB7XG4gICAgaWYgKCF1cGRhdGVRdWV1ZS5zaXplKSB7XG4gICAgICBkZWZlcnJlZC50aGVuKCgpID0+IHtcbiAgICAgICAgd2Fsa0luU2hhZG93KGRvY3VtZW50LmJvZHksIG5vZGUgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVRdWV1ZS5oYXMobm9kZS5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGh5YnJpZHMgPSB1cGRhdGVRdWV1ZS5nZXQobm9kZS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICBub2RlLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vZGUuY29uc3RydWN0b3IuaHlicmlkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIG5vZGUuY29uc3RydWN0b3IuaHlicmlkc1trZXldICE9PSBoeWJyaWRzW2tleV0sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbm9kZS5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVF1ZXVlLmNsZWFyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlUXVldWUuc2V0KEh5YnJpZCwgbGFzdEh5YnJpZHMpO1xuICB9O1xufVxuXG5jb25zdCBkaXNjb25uZWN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGRlZmluZUVsZW1lbnQodGFnTmFtZSwgaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBoeWJyaWRzT3JDb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbjogJHt0eXBlfWApO1xuICB9XG5cbiAgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSk7XG5cbiAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmIChDdXN0b21FbGVtZW50ICE9PSBoeWJyaWRzT3JDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgaHlicmlkc09yQ29uc3RydWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgfVxuXG4gIGlmIChDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKEN1c3RvbUVsZW1lbnQuaHlicmlkcyA9PT0gaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBDdXN0b21FbGVtZW50O1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIEN1c3RvbUVsZW1lbnQuaHlicmlkcykge1xuICAgICAgT2JqZWN0LmtleXMoQ3VzdG9tRWxlbWVudC5oeWJyaWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGRlbGV0ZSBDdXN0b21FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxhc3RIeWJyaWRzID0gQ3VzdG9tRWxlbWVudC5oeWJyaWRzO1xuXG4gICAgICBjb21waWxlKEN1c3RvbUVsZW1lbnQsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgICAgIHVwZGF0ZShDdXN0b21FbGVtZW50LCBsYXN0SHlicmlkcyk7XG5cbiAgICAgIHJldHVybiBDdXN0b21FbGVtZW50O1xuICAgIH1cblxuICAgIHRocm93IEVycm9yKGBFbGVtZW50ICcke3RhZ05hbWV9JyBhbHJlYWR5IGRlZmluZWRgKTtcbiAgfVxuXG4gIGNsYXNzIEh5YnJpZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gdGFnTmFtZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGNvbnN0IHByb3BzID0gcHJvcHNNYXAuZ2V0KEh5YnJpZCk7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9wcy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcbiAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSBjYWxsYmFja3NNYXAuZ2V0KEh5YnJpZCk7XG4gICAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWxsYmFja3MubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNiID0gY2FsbGJhY2tzW2luZGV4XSh0aGlzKTtcbiAgICAgICAgaWYgKGNiKSBsaXN0LnB1c2goY2IpO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0cy5zZXQodGhpcywgbGlzdCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBsaXN0ID0gZGlzY29ubmVjdHMuZ2V0KHRoaXMpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGxpc3RbaW5kZXhdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZShIeWJyaWQsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEh5YnJpZCk7XG5cbiAgcmV0dXJuIEh5YnJpZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lTWFwKGVsZW1lbnRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhlbGVtZW50cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBwYXNjYWxUb0Rhc2goa2V5KTtcbiAgICBhY2Nba2V5XSA9IGRlZmluZUVsZW1lbnQodGFnTmFtZSwgZWxlbWVudHNba2V5XSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZSguLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBkZWZpbmVNYXAoYXJnc1swXSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lRWxlbWVudCguLi5hcmdzKTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/hybrids/esm/emitter.js ***!
  \*********************************************/
/*! exports provided: dispatch, subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
var callbacks = new WeakMap();
var queue = new Set();

function execute() {
  try {
    queue.forEach(function (target) {
      try {
        callbacks.get(target)();
        queue.delete(target);
      } catch (e) {
        queue.delete(target);
        throw e;
      }
    });
  } catch (e) {
    if (queue.size) execute();
    throw e;
  }
}

function dispatch(target) {
  if (!queue.size) {
    requestAnimationFrame(execute);
  }

  queue.add(target);
}
function subscribe(target, cb) {
  callbacks.set(target, cb);
  dispatch(target);
  return function unsubscribe() {
    queue.delete(target);
    callbacks.delete(target);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbWl0dGVyLmpzIl0sIm5hbWVzIjpbImNhbGxiYWNrcyIsIldlYWtNYXAiLCJxdWV1ZSIsIlNldCIsImV4ZWN1dGUiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZ2V0IiwiZGVsZXRlIiwiZSIsInNpemUiLCJkaXNwYXRjaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZCIsInN1YnNjcmliZSIsImNiIiwic2V0IiwidW5zdWJzY3JpYmUiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxPQUFKLEVBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLEdBQUosRUFBZDs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLE1BQUk7QUFDRkYsSUFBQUEsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFVBQUk7QUFDRk4sUUFBQUEsU0FBUyxDQUFDTyxHQUFWLENBQWNELE1BQWQ7QUFDQUosUUFBQUEsS0FBSyxDQUFDTSxNQUFOLENBQWFGLE1BQWI7QUFDRCxPQUhELENBR0UsT0FBT0csQ0FBUCxFQUFVO0FBQ1ZQLFFBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0EsY0FBTUcsQ0FBTjtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBVkQsQ0FVRSxPQUFPQSxDQUFQLEVBQVU7QUFDVixRQUFJUCxLQUFLLENBQUNRLElBQVYsRUFBZ0JOLE9BQU87QUFDdkIsVUFBTUssQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsT0FBTyxTQUFTRSxRQUFULENBQWtCTCxNQUFsQixFQUEwQjtBQUMvQixNQUFJLENBQUNKLEtBQUssQ0FBQ1EsSUFBWCxFQUFpQjtBQUNmRSxJQUFBQSxxQkFBcUIsQ0FBQ1IsT0FBRCxDQUFyQjtBQUNEOztBQUNERixFQUFBQSxLQUFLLENBQUNXLEdBQU4sQ0FBVVAsTUFBVjtBQUNEO0FBRUQsT0FBTyxTQUFTUSxTQUFULENBQW1CUixNQUFuQixFQUEyQlMsRUFBM0IsRUFBK0I7QUFDcENmLEVBQUFBLFNBQVMsQ0FBQ2dCLEdBQVYsQ0FBY1YsTUFBZCxFQUFzQlMsRUFBdEI7QUFDQUosRUFBQUEsUUFBUSxDQUFDTCxNQUFELENBQVI7QUFFQSxTQUFPLFNBQVNXLFdBQVQsR0FBdUI7QUFDNUJmLElBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0FOLElBQUFBLFNBQVMsQ0FBQ1EsTUFBVixDQUFpQkYsTUFBakI7QUFDRCxHQUhEO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcXVldWUgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gIHRyeSB7XG4gICAgcXVldWUuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2tzLmdldCh0YXJnZXQpKCk7XG4gICAgICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBxdWV1ZS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChxdWV1ZS5zaXplKSBleGVjdXRlKCk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2godGFyZ2V0KSB7XG4gIGlmICghcXVldWUuc2l6ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjdXRlKTtcbiAgfVxuICBxdWV1ZS5hZGQodGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSh0YXJnZXQsIGNiKSB7XG4gIGNhbGxiYWNrcy5zZXQodGFyZ2V0LCBjYik7XG4gIGRpc3BhdGNoKHRhcmdldCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgIGNhbGxiYWNrcy5kZWxldGUodGFyZ2V0KTtcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/hybrids/esm/index.js ***!
  \*******************************************/
/*! exports provided: define, property, parent, children, render, dispatch, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/hybrids/esm/define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "define", function() { return _define_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "./node_modules/hybrids/esm/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _property_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent.js */ "./node_modules/hybrids/esm/parent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return _parent_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _children_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./children.js */ "./node_modules/hybrids/esm/children.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "children", function() { return _children_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.js */ "./node_modules/hybrids/esm/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_5__["dispatch"]; });

/* harmony import */ var _template_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/index.js */ "./node_modules/hybrids/esm/template/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _template_index_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _template_index_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });








//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiZGVmaW5lIiwicHJvcGVydHkiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInJlbmRlciIsImRpc3BhdGNoIiwiaHRtbCIsInN2ZyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsT0FBTyxJQUFJQyxNQUFwQixRQUFrQyxhQUFsQztBQUNBLFNBQVNELE9BQU8sSUFBSUUsUUFBcEIsUUFBb0MsZUFBcEM7QUFDQSxTQUFTRixPQUFPLElBQUlHLE1BQXBCLFFBQWtDLGFBQWxDO0FBQ0EsU0FBU0gsT0FBTyxJQUFJSSxRQUFwQixRQUFvQyxlQUFwQztBQUNBLFNBQVNKLE9BQU8sSUFBSUssTUFBcEIsUUFBa0MsYUFBbEM7QUFFQSxTQUFTQyxRQUFULFFBQXlCLFlBQXpCO0FBRUEsU0FBU0MsSUFBVCxFQUFlQyxHQUFmLFFBQTBCLHFCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmaW5lIH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3BlcnR5IH0gZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyZW50IH0gZnJvbSBcIi4vcGFyZW50LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoaWxkcmVuIH0gZnJvbSBcIi4vY2hpbGRyZW4uanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmV4cG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuZXhwb3J0IHsgaHRtbCwgc3ZnIH0gZnJvbSBcIi4vdGVtcGxhdGUvaW5kZXguanNcIjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/parent.js":
/*!********************************************!*\
  !*** ./node_modules/hybrids/esm/parent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parent; });
function walk(node, fn) {
  var parentElement = node.parentElement || node.parentNode.host;

  while (parentElement) {
    var hybrids = parentElement.constructor.hybrids;

    if (hybrids && fn(hybrids)) {
      return parentElement;
    }

    parentElement = parentElement.parentElement || parentElement.parentNode && parentElement.parentNode.host;
  }

  return parentElement || null;
}

function parent(hybridsOrFn) {
  var fn = typeof hybridsOrFn === "function" ? hybridsOrFn : function (hybrids) {
    return hybrids === hybridsOrFn;
  };
  return {
    get: function get(host) {
      return walk(host, fn);
    },
    connect: function connect(host, key, invalidate) {
      var target = host[key];

      if (target) {
        return invalidate;
      }

      return false;
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJlbnQuanMiXSwibmFtZXMiOlsid2FsayIsIm5vZGUiLCJmbiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaG9zdCIsImh5YnJpZHMiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImh5YnJpZHNPckZuIiwiZ2V0IiwiY29ubmVjdCIsImtleSIsImludmFsaWRhdGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDdEIsTUFBSUMsYUFBYSxHQUFHRixJQUFJLENBQUNFLGFBQUwsSUFBc0JGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsSUFBMUQ7O0FBRUEsU0FBT0YsYUFBUCxFQUFzQjtBQUNwQixRQUFNRyxPQUFPLEdBQUdILGFBQWEsQ0FBQ0ksV0FBZCxDQUEwQkQsT0FBMUM7O0FBRUEsUUFBSUEsT0FBTyxJQUFJSixFQUFFLENBQUNJLE9BQUQsQ0FBakIsRUFBNEI7QUFDMUIsYUFBT0gsYUFBUDtBQUNEOztBQUVEQSxJQUFBQSxhQUFhLEdBQ1hBLGFBQWEsQ0FBQ0EsYUFBZCxJQUNDQSxhQUFhLENBQUNDLFVBQWQsSUFBNEJELGFBQWEsQ0FBQ0MsVUFBZCxDQUF5QkMsSUFGeEQ7QUFHRDs7QUFFRCxTQUFPRixhQUFhLElBQUksSUFBeEI7QUFDRDs7QUFFRCxlQUFlLFNBQVNLLE1BQVQsQ0FBZ0JDLFdBQWhCLEVBQTZCO0FBQzFDLE1BQU1QLEVBQUUsR0FDTixPQUFPTyxXQUFQLEtBQXVCLFVBQXZCLEdBQ0lBLFdBREosR0FFSSxVQUFBSCxPQUFPO0FBQUEsV0FBSUEsT0FBTyxLQUFLRyxXQUFoQjtBQUFBLEdBSGI7QUFJQSxTQUFPO0FBQ0xDLElBQUFBLEdBQUcsRUFBRSxhQUFBTCxJQUFJO0FBQUEsYUFBSUwsSUFBSSxDQUFDSyxJQUFELEVBQU9ILEVBQVAsQ0FBUjtBQUFBLEtBREo7QUFFTFMsSUFBQUEsT0FGSyxtQkFFR04sSUFGSCxFQUVTTyxHQUZULEVBRWNDLFVBRmQsRUFFMEI7QUFDN0IsVUFBTUMsTUFBTSxHQUFHVCxJQUFJLENBQUNPLEdBQUQsQ0FBbkI7O0FBQ0EsVUFBSUUsTUFBSixFQUFZO0FBQ1YsZUFBT0QsVUFBUDtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBUkksR0FBUDtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2Fsayhub2RlLCBmbikge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudCB8fCBub2RlLnBhcmVudE5vZGUuaG9zdDtcblxuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGh5YnJpZHMgPSBwYXJlbnRFbGVtZW50LmNvbnN0cnVjdG9yLmh5YnJpZHM7XG5cbiAgICBpZiAoaHlicmlkcyAmJiBmbihoeWJyaWRzKSkge1xuICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50RWxlbWVudCA9XG4gICAgICBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgfHxcbiAgICAgIChwYXJlbnRFbGVtZW50LnBhcmVudE5vZGUgJiYgcGFyZW50RWxlbWVudC5wYXJlbnROb2RlLmhvc3QpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyZW50KGh5YnJpZHNPckZuKSB7XG4gIGNvbnN0IGZuID1cbiAgICB0eXBlb2YgaHlicmlkc09yRm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBoeWJyaWRzT3JGblxuICAgICAgOiBoeWJyaWRzID0+IGh5YnJpZHMgPT09IGh5YnJpZHNPckZuO1xuICByZXR1cm4ge1xuICAgIGdldDogaG9zdCA9PiB3YWxrKGhvc3QsIGZuKSxcbiAgICBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gaG9zdFtrZXldO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/property.js":
/*!**********************************************!*\
  !*** ./node_modules/hybrids/esm/property.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return property; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var defaultTransform = function defaultTransform(v) {
  return v;
};

var objectTransform = function objectTransform(value) {
  if (_typeof(value) !== "object") {
    throw TypeError("Assigned value must be an object: ".concat(_typeof(value)));
  }

  return value && Object.freeze(value);
};

function property(value, connect) {
  var type = _typeof(value);

  var transform = defaultTransform;

  switch (type) {
    case "string":
      transform = String;
      break;

    case "number":
      transform = Number;
      break;

    case "boolean":
      transform = Boolean;
      break;

    case "function":
      transform = value;
      value = transform();
      break;

    case "object":
      if (value) Object.freeze(value);
      transform = objectTransform;
      break;

    default:
      break;
  }

  return {
    get: function get(host) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
      return val;
    },
    set: function set(host, val, oldValue) {
      return transform(val, oldValue);
    },
    connect: type !== "object" && type !== "undefined" ? function (host, key, invalidate) {
      if (host[key] === value) {
        var attrName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(key);

        if (host.hasAttribute(attrName)) {
          var attrValue = host.getAttribute(attrName);
          host[key] = attrValue === "" && transform === Boolean ? true : attrValue;
        }
      }

      return connect && connect(host, key, invalidate);
    } : connect
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaCIsImRlZmF1bHRUcmFuc2Zvcm0iLCJ2Iiwib2JqZWN0VHJhbnNmb3JtIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJmcmVlemUiLCJwcm9wZXJ0eSIsImNvbm5lY3QiLCJ0eXBlIiwidHJhbnNmb3JtIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImdldCIsImhvc3QiLCJ2YWwiLCJzZXQiLCJvbGRWYWx1ZSIsImtleSIsImludmFsaWRhdGUiLCJhdHRyTmFtZSIsImhhc0F0dHJpYnV0ZSIsImF0dHJWYWx1ZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULFFBQTRCLFlBQTVCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixNQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTUMsU0FBUyxxREFBNkNELEtBQTdDLEdBQWY7QUFDRDs7QUFDRCxTQUFPQSxLQUFLLElBQUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkLENBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxlQUFlLFNBQVNJLFFBQVQsQ0FBa0JKLEtBQWxCLEVBQXlCSyxPQUF6QixFQUFrQztBQUMvQyxNQUFNQyxJQUFJLFdBQVVOLEtBQVYsQ0FBVjs7QUFDQSxNQUFJTyxTQUFTLEdBQUdWLGdCQUFoQjs7QUFFQSxVQUFRUyxJQUFSO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLE1BQUFBLFNBQVMsR0FBR0MsTUFBWjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFRCxNQUFBQSxTQUFTLEdBQUdFLE1BQVo7QUFDQTs7QUFDRixTQUFLLFNBQUw7QUFDRUYsTUFBQUEsU0FBUyxHQUFHRyxPQUFaO0FBQ0E7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VILE1BQUFBLFNBQVMsR0FBR1AsS0FBWjtBQUNBQSxNQUFBQSxLQUFLLEdBQUdPLFNBQVMsRUFBakI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJUCxLQUFKLEVBQVdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkO0FBQ1hPLE1BQUFBLFNBQVMsR0FBR1IsZUFBWjtBQUNBOztBQUNGO0FBQ0U7QUFuQko7O0FBc0JBLFNBQU87QUFDTFksSUFBQUEsR0FBRyxFQUFFLGFBQUNDLElBQUQ7QUFBQSxVQUFPQyxHQUFQLHVFQUFhYixLQUFiO0FBQUEsYUFBdUJhLEdBQXZCO0FBQUEsS0FEQTtBQUVMQyxJQUFBQSxHQUFHLEVBQUUsYUFBQ0YsSUFBRCxFQUFPQyxHQUFQLEVBQVlFLFFBQVo7QUFBQSxhQUF5QlIsU0FBUyxDQUFDTSxHQUFELEVBQU1FLFFBQU4sQ0FBbEM7QUFBQSxLQUZBO0FBR0xWLElBQUFBLE9BQU8sRUFDTEMsSUFBSSxLQUFLLFFBQVQsSUFBcUJBLElBQUksS0FBSyxXQUE5QixHQUNJLFVBQUNNLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLEVBQTJCO0FBQ3pCLFVBQUlMLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEtBQWNoQixLQUFsQixFQUF5QjtBQUN2QixZQUFNa0IsUUFBUSxHQUFHdEIsV0FBVyxDQUFDb0IsR0FBRCxDQUE1Qjs7QUFFQSxZQUFJSixJQUFJLENBQUNPLFlBQUwsQ0FBa0JELFFBQWxCLENBQUosRUFBaUM7QUFDL0IsY0FBTUUsU0FBUyxHQUFHUixJQUFJLENBQUNTLFlBQUwsQ0FBa0JILFFBQWxCLENBQWxCO0FBQ0FOLFVBQUFBLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEdBQ0VJLFNBQVMsS0FBSyxFQUFkLElBQW9CYixTQUFTLEtBQUtHLE9BQWxDLEdBQTRDLElBQTVDLEdBQW1EVSxTQURyRDtBQUVEO0FBQ0Y7O0FBRUQsYUFBT2YsT0FBTyxJQUFJQSxPQUFPLENBQUNPLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLENBQXpCO0FBQ0QsS0FiTCxHQWNJWjtBQWxCRCxHQUFQO0FBb0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5jb25zdCBkZWZhdWx0VHJhbnNmb3JtID0gdiA9PiB2O1xuXG5jb25zdCBvYmplY3RUcmFuc2Zvcm0gPSB2YWx1ZSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYEFzc2lnbmVkIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0OiAke3R5cGVvZiB2YWx1ZX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWUgJiYgT2JqZWN0LmZyZWV6ZSh2YWx1ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eSh2YWx1ZSwgY29ubmVjdCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZXQgdHJhbnNmb3JtID0gZGVmYXVsdFRyYW5zZm9ybTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBTdHJpbmc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBOdW1iZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgdHJhbnNmb3JtID0gQm9vbGVhbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgdHJhbnNmb3JtID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYgKHZhbHVlKSBPYmplY3QuZnJlZXplKHZhbHVlKTtcbiAgICAgIHRyYW5zZm9ybSA9IG9iamVjdFRyYW5zZm9ybTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoaG9zdCwgdmFsID0gdmFsdWUpID0+IHZhbCxcbiAgICBzZXQ6IChob3N0LCB2YWwsIG9sZFZhbHVlKSA9PiB0cmFuc2Zvcm0odmFsLCBvbGRWYWx1ZSksXG4gICAgY29ubmVjdDpcbiAgICAgIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IChob3N0LCBrZXksIGludmFsaWRhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChob3N0W2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gY2FtZWxUb0Rhc2goa2V5KTtcblxuICAgICAgICAgICAgICBpZiAoaG9zdC5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIGhvc3Rba2V5XSA9XG4gICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IFwiXCIgJiYgdHJhbnNmb3JtID09PSBCb29sZWFuID8gdHJ1ZSA6IGF0dHJWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdCAmJiBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICA6IGNvbm5lY3QsXG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/render.js":
/*!********************************************!*\
  !*** ./node_modules/hybrids/esm/render.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function render(fn) {
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof fn !== "function") {
    throw TypeError("The first argument must be a function: ".concat(_typeof(fn)));
  }

  var options = _objectSpread({
    shadowRoot: true
  }, customOptions);

  var shadowRootInit = {
    mode: "open"
  };

  if (_typeof(options.shadowRoot) === "object") {
    Object.assign(shadowRootInit, options.shadowRoot);
  }

  return {
    get: function get(host) {
      var update = fn(host);
      var target = host;

      if (options.shadowRoot) {
        if (!host.shadowRoot) host.attachShadow(shadowRootInit);
        target = host.shadowRoot;
      }

      return function flush() {
        update(host, target);
        return target;
      };
    },
    observe: function observe(host, flush) {
      flush();
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwiZm4iLCJjdXN0b21PcHRpb25zIiwiVHlwZUVycm9yIiwib3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJzaGFkb3dSb290SW5pdCIsIm1vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJob3N0IiwidXBkYXRlIiwidGFyZ2V0IiwiYXR0YWNoU2hhZG93IiwiZmx1c2giLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGVBQWUsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBd0M7QUFBQSxNQUFwQkMsYUFBb0IsdUVBQUosRUFBSTs7QUFDckQsTUFBSSxPQUFPRCxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsVUFBTUUsU0FBUywwREFBa0RGLEVBQWxELEdBQWY7QUFDRDs7QUFFRCxNQUFNRyxPQUFPO0FBQUtDLElBQUFBLFVBQVUsRUFBRTtBQUFqQixLQUEwQkgsYUFBMUIsQ0FBYjs7QUFDQSxNQUFNSSxjQUFjLEdBQUc7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkI7O0FBRUEsTUFBSSxRQUFPSCxPQUFPLENBQUNDLFVBQWYsTUFBOEIsUUFBbEMsRUFBNEM7QUFDMUNHLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCRixPQUFPLENBQUNDLFVBQXRDO0FBQ0Q7O0FBRUQsU0FBTztBQUNMSyxJQUFBQSxHQURLLGVBQ0RDLElBREMsRUFDSztBQUNSLFVBQU1DLE1BQU0sR0FBR1gsRUFBRSxDQUFDVSxJQUFELENBQWpCO0FBQ0EsVUFBSUUsTUFBTSxHQUFHRixJQUFiOztBQUVBLFVBQUlQLE9BQU8sQ0FBQ0MsVUFBWixFQUF3QjtBQUN0QixZQUFJLENBQUNNLElBQUksQ0FBQ04sVUFBVixFQUFzQk0sSUFBSSxDQUFDRyxZQUFMLENBQWtCUixjQUFsQjtBQUN0Qk8sUUFBQUEsTUFBTSxHQUFHRixJQUFJLENBQUNOLFVBQWQ7QUFDRDs7QUFFRCxhQUFPLFNBQVNVLEtBQVQsR0FBaUI7QUFDdEJILFFBQUFBLE1BQU0sQ0FBQ0QsSUFBRCxFQUFPRSxNQUFQLENBQU47QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FIRDtBQUlELEtBZEk7QUFlTEcsSUFBQUEsT0FmSyxtQkFlR0wsSUFmSCxFQWVTSSxLQWZULEVBZWdCO0FBQ25CQSxNQUFBQSxLQUFLO0FBQ047QUFqQkksR0FBUDtBQW1CRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihmbiwgY3VzdG9tT3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0geyBzaGFkb3dSb290OiB0cnVlLCAuLi5jdXN0b21PcHRpb25zIH07XG4gIGNvbnN0IHNoYWRvd1Jvb3RJbml0ID0geyBtb2RlOiBcIm9wZW5cIiB9O1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5zaGFkb3dSb290ID09PSBcIm9iamVjdFwiKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzaGFkb3dSb290SW5pdCwgb3B0aW9ucy5zaGFkb3dSb290KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0KGhvc3QpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGZuKGhvc3QpO1xuICAgICAgbGV0IHRhcmdldCA9IGhvc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgaWYgKCFob3N0LnNoYWRvd1Jvb3QpIGhvc3QuYXR0YWNoU2hhZG93KHNoYWRvd1Jvb3RJbml0KTtcbiAgICAgICAgdGFyZ2V0ID0gaG9zdC5zaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIHVwZGF0ZShob3N0LCB0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9ic2VydmUoaG9zdCwgZmx1c2gpIHtcbiAgICAgIGZsdXNoKCk7XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/core.js":
/*!***************************************************!*\
  !*** ./node_modules/hybrids/esm/template/core.js ***!
  \***************************************************/
/*! exports provided: getPlaceholder, createInternalWalker, compileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceholder", function() { return getPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInternalWalker", function() { return createInternalWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileTemplate", function() { return compileTemplate; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/hybrids/esm/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/hybrids/esm/template/utils.js");
/* harmony import */ var _resolvers_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/value.js */ "./node_modules/hybrids/esm/template/resolvers/value.js");
/* harmony import */ var _resolvers_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/property.js */ "./node_modules/hybrids/esm/template/resolvers/property.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/* istanbul ignore next */

try {
  "development";
} catch (e) {
  var process = {
    env: {
      NODE_ENV: 'production'
    }
  };
} // eslint-disable-line


var TIMESTAMP = Date.now();
var getPlaceholder = function getPlaceholder() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return "{{h-".concat(TIMESTAMP, "-").concat(id, "}}");
};
var PLACEHOLDER_REGEXP_TEXT = getPlaceholder("(\\d+)");
var PLACEHOLDER_REGEXP_EQUAL = new RegExp("^".concat(PLACEHOLDER_REGEXP_TEXT, "$"));
var PLACEHOLDER_REGEXP_ALL = new RegExp(PLACEHOLDER_REGEXP_TEXT, "g");
var ATTR_PREFIX = "--".concat(TIMESTAMP, "--");
var ATTR_REGEXP = new RegExp(ATTR_PREFIX, "g");
var preparedTemplates = new WeakMap();
/* istanbul ignore next */

function applyShadyCSS(template, tagName) {
  if (!tagName) return template;
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["shadyCSS"])(function (shady) {
    var map = preparedTemplates.get(template);

    if (!map) {
      map = new Map();
      preparedTemplates.set(template, map);
    }

    var clone = map.get(tagName);

    if (!clone) {
      clone = document.createElement("template");
      clone.content.appendChild(template.content.cloneNode(true));
      map.set(tagName, clone);
      var styles = clone.content.querySelectorAll("style");
      Array.from(styles).forEach(function (style) {
        var count = style.childNodes.length + 1;

        for (var i = 0; i < count; i += 1) {
          style.parentNode.insertBefore(document.createTextNode(getPlaceholder()), style);
        }
      });
      shady.prepareTemplate(clone, tagName.toLowerCase());
    }

    return clone;
  }, template);
}

function createSignature(parts, styles) {
  var signature = parts.reduce(function (acc, part, index) {
    if (index === 0) {
      return part;
    }

    if (parts.slice(index).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)) {
      return "".concat(acc, "<!--").concat(getPlaceholder(index - 1), "-->").concat(part);
    }

    return acc + getPlaceholder(index - 1) + part;
  }, "");

  if (styles) {
    signature += "<style>\n".concat(styles.join("\n/*------*/\n"), "\n</style>");
  }
  /* istanbul ignore if */


  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) {
    return signature.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g, function (match) {
      return "".concat(ATTR_PREFIX).concat(match);
    });
  }

  return signature;
}

function getPropertyName(string) {
  return string.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
}

function replaceComments(fragment) {
  var iterator = document.createNodeIterator(fragment, NodeFilter.SHOW_COMMENT, null, false);
  var node; // eslint-disable-next-line no-cond-assign

  while (node = iterator.nextNode()) {
    if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
      node.parentNode.insertBefore(document.createTextNode(node.textContent), node);
      node.parentNode.removeChild(node);
    }
  }
}

function createInternalWalker(context) {
  var node;
  return {
    get currentNode() {
      return node;
    },

    nextNode: function nextNode() {
      if (node === undefined) {
        node = context.childNodes[0];
      } else if (node.childNodes.length) {
        node = node.childNodes[0];
      } else if (node.nextSibling) {
        node = node.nextSibling;
      } else {
        var parentNode = node.parentNode;
        node = parentNode.nextSibling;

        while (!node && parentNode !== context) {
          parentNode = parentNode.parentNode;
          node = parentNode.nextSibling;
        }
      }

      return !!node;
    }
  };
}

function createExternalWalker(context) {
  return document.createTreeWalker(context, // eslint-disable-next-line no-bitwise
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
}
/* istanbul ignore next */


var createWalker = _typeof(window.ShadyDOM) === "object" && window.ShadyDOM.inUse ? createInternalWalker : createExternalWalker;
var container = document.createElement("div");
var styleSheetsMap = new Map();
function compileTemplate(rawParts, isSVG, styles) {
  var template = document.createElement("template");
  var parts = [];
  var signature = createSignature(rawParts, styles);
  if (isSVG) signature = "<svg>".concat(signature, "</svg>");
  /* istanbul ignore if */

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) {
    template.innerHTML = signature;
  } else {
    container.innerHTML = "<template>".concat(signature, "</template>");
    template.content.appendChild(container.children[0].content);
  }

  if (isSVG) {
    var svgRoot = template.content.firstChild;
    template.content.removeChild(svgRoot);
    Array.from(svgRoot.childNodes).forEach(function (node) {
      return template.content.appendChild(node);
    });
  }

  replaceComments(template.content);
  var compileWalker = createWalker(template.content);
  var compileIndex = 0;

  var _loop = function _loop() {
    var node = compileWalker.currentNode;

    if (node.nodeType === Node.TEXT_NODE) {
      var text = node.textContent;

      if (!text.match(PLACEHOLDER_REGEXP_EQUAL)) {
        var results = text.match(PLACEHOLDER_REGEXP_ALL);

        if (results) {
          var currentNode = node;
          results.reduce(function (acc, placeholder) {
            var _acc$pop$split = acc.pop().split(placeholder),
                _acc$pop$split2 = _slicedToArray(_acc$pop$split, 2),
                before = _acc$pop$split2[0],
                next = _acc$pop$split2[1];

            if (before) acc.push(before);
            acc.push(placeholder);
            if (next) acc.push(next);
            return acc;
          }, [text]).forEach(function (part, index) {
            if (index === 0) {
              currentNode.textContent = part;
            } else {
              currentNode = currentNode.parentNode.insertBefore(document.createTextNode(part), currentNode.nextSibling);
            }
          });
        }
      }

      var equal = node.textContent.match(PLACEHOLDER_REGEXP_EQUAL);

      if (equal) {
        /* istanbul ignore else */
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) node.textContent = "";
        parts[equal[1]] = [compileIndex, _resolvers_value_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
      }
    } else {
      /* istanbul ignore else */
      // eslint-disable-next-line no-lonely-if
      if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.attributes).forEach(function (attr) {
          var value = attr.value.trim();
          /* istanbul ignore next */

          var name = _utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"] ? attr.name.replace(ATTR_PREFIX, "") : attr.name;
          var equal = value.match(PLACEHOLDER_REGEXP_EQUAL);

          if (equal) {
            var propertyName = getPropertyName(rawParts[equal[1]]);
            parts[equal[1]] = [compileIndex, Object(_resolvers_property_js__WEBPACK_IMPORTED_MODULE_3__["default"])(name, propertyName, isSVG)];
            node.removeAttribute(attr.name);
          } else {
            var _results = value.match(PLACEHOLDER_REGEXP_ALL);

            if (_results) {
              var partialName = "attr__".concat(name);

              _results.forEach(function (placeholder, index) {
                var _placeholder$match = placeholder.match(PLACEHOLDER_REGEXP_EQUAL),
                    _placeholder$match2 = _slicedToArray(_placeholder$match, 2),
                    id = _placeholder$match2[1];

                parts[id] = [compileIndex, function (host, target, attrValue) {
                  var data = _utils_js__WEBPACK_IMPORTED_MODULE_1__["dataMap"].get(target, {});
                  data[partialName] = (data[partialName] || value).replace(placeholder, attrValue == null ? "" : attrValue);

                  if (_results.length === 1 || index + 1 === _results.length) {
                    target.setAttribute(name, data[partialName]);
                    data[partialName] = undefined;
                  }
                }];
              });

              attr.value = "";
              /* istanbul ignore next */

              if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"] && name !== attr.name) {
                node.removeAttribute(attr.name);
                node.setAttribute(name, "");
              }
            }
          }
        });
      }
    }

    compileIndex += 1;
  };

  while (compileWalker.nextNode()) {
    _loop();
  }

  return function updateTemplateInstance(host, target, args, styleSheets) {
    var data = _utils_js__WEBPACK_IMPORTED_MODULE_1__["dataMap"].get(target, {
      type: "function"
    });

    if (template !== data.template) {
      if (data.template || target.nodeType === Node.ELEMENT_NODE) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["removeTemplate"])(target);
      }

      data.prevArgs = null;
      var fragment = document.importNode(applyShadyCSS(template, host.tagName).content, true);
      var renderWalker = createWalker(fragment);
      var clonedParts = parts.slice(0);
      var renderIndex = 0;
      var currentPart = clonedParts.shift();
      var markers = [];
      data.template = template;
      data.markers = markers;

      while (renderWalker.nextNode()) {
        var node = renderWalker.currentNode;

        if (node.nodeType === Node.TEXT_NODE) {
          /* istanbul ignore next */
          if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
            node.textContent = "";
          } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["IS_IE"]) {
            node.textContent = node.textContent.replace(ATTR_REGEXP, "");
          }
        } else if ( true && node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.indexOf("-") > -1 && !customElements.get(node.tagName.toLowerCase())) {
            throw Error("Missing '".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(node), "' element definition in '").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(host), "'"));
          }
        }

        while (currentPart && currentPart[0] === renderIndex) {
          markers.push([node, currentPart[1]]);
          currentPart = clonedParts.shift();
        }

        renderIndex += 1;
      }

      if (target.nodeType === Node.TEXT_NODE) {
        data.startNode = fragment.childNodes[0];
        data.endNode = fragment.childNodes[fragment.childNodes.length - 1];
        var previousChild = target;
        var child = fragment.childNodes[0];

        while (child) {
          target.parentNode.insertBefore(child, previousChild.nextSibling);
          previousChild = child;
          child = fragment.childNodes[0];
        }
      } else {
        target.appendChild(fragment);
      }
    }

    var adoptedStyleSheets = target.adoptedStyleSheets;

    if (styleSheets) {
      var isEqual = false;
      styleSheets = styleSheets.map(function (style) {
        if (style instanceof CSSStyleSheet) return style;
        var styleSheet = styleSheetsMap.get(style);

        if (!styleSheet) {
          styleSheet = new CSSStyleSheet();
          styleSheet.replaceSync(style);
          styleSheetsMap.set(style, styleSheet);
        }

        return styleSheet;
      });

      if (styleSheets.length === adoptedStyleSheets.length) {
        isEqual = true;

        for (var i = 0; i < styleSheets.length; i += 1) {
          if (styleSheets[i] !== adoptedStyleSheets[i]) {
            isEqual = false;
            break;
          }
        }
      }

      if (!isEqual) target.adoptedStyleSheets = styleSheets;
    } else if (adoptedStyleSheets && adoptedStyleSheets.length) {
      target.adoptedStyleSheets = [];
    }

    var prevArgs = data.prevArgs;
    data.prevArgs = args;

    for (var index = 0; index < data.markers.length; index += 1) {
      var _data$markers$index = _slicedToArray(data.markers[index], 2),
          _node = _data$markers$index[0],
          marker = _data$markers$index[1];

      if (!prevArgs || prevArgs[index] !== args[index]) {
        marker(host, _node, args[index], prevArgs ? prevArgs[index] : undefined);
      }
    }

    if (target.nodeType !== Node.TEXT_NODE) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["shadyCSS"])(function (shady) {
        if (host.shadowRoot) {
          if (prevArgs) {
            shady.styleSubtree(host);
          } else {
            shady.styleElement(host);
          }
        }
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9jb3JlLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeUVsZW1lbnQiLCJzaGFkeUNTUyIsIklTX0lFIiwiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZVZhbHVlIiwicmVzb2x2ZVByb3BlcnR5IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsIlRJTUVTVEFNUCIsIkRhdGUiLCJub3ciLCJnZXRQbGFjZWhvbGRlciIsImlkIiwiUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQiLCJQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwiLCJSZWdFeHAiLCJQTEFDRUhPTERFUl9SRUdFWFBfQUxMIiwiQVRUUl9QUkVGSVgiLCJBVFRSX1JFR0VYUCIsInByZXBhcmVkVGVtcGxhdGVzIiwiV2Vha01hcCIsImFwcGx5U2hhZHlDU1MiLCJ0ZW1wbGF0ZSIsInRhZ05hbWUiLCJzaGFkeSIsIm1hcCIsImdldCIsIk1hcCIsInNldCIsImNsb25lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwic3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJzdHlsZSIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJwcmVwYXJlVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVNpZ25hdHVyZSIsInBhcnRzIiwic2lnbmF0dXJlIiwicmVkdWNlIiwiYWNjIiwicGFydCIsImluZGV4Iiwic2xpY2UiLCJqb2luIiwibWF0Y2giLCJyZXBsYWNlIiwiZ2V0UHJvcGVydHlOYW1lIiwic3RyaW5nIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlQ29tbWVudHMiLCJmcmFnbWVudCIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfQ09NTUVOVCIsIm5vZGUiLCJuZXh0Tm9kZSIsInRlc3QiLCJ0ZXh0Q29udGVudCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlSW50ZXJuYWxXYWxrZXIiLCJjb250ZXh0IiwiY3VycmVudE5vZGUiLCJ1bmRlZmluZWQiLCJuZXh0U2libGluZyIsImNyZWF0ZUV4dGVybmFsV2Fsa2VyIiwiY3JlYXRlVHJlZVdhbGtlciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfVEVYVCIsImNyZWF0ZVdhbGtlciIsIndpbmRvdyIsIlNoYWR5RE9NIiwiaW5Vc2UiLCJjb250YWluZXIiLCJzdHlsZVNoZWV0c01hcCIsImNvbXBpbGVUZW1wbGF0ZSIsInJhd1BhcnRzIiwiaXNTVkciLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsInN2Z1Jvb3QiLCJmaXJzdENoaWxkIiwiY29tcGlsZVdhbGtlciIsImNvbXBpbGVJbmRleCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsInRleHQiLCJyZXN1bHRzIiwicGxhY2Vob2xkZXIiLCJiZWZvcmUiLCJuZXh0IiwicHVzaCIsImVxdWFsIiwiRUxFTUVOVF9OT0RFIiwiYXR0cmlidXRlcyIsImF0dHIiLCJ2YWx1ZSIsInRyaW0iLCJuYW1lIiwicHJvcGVydHlOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwicGFydGlhbE5hbWUiLCJob3N0IiwidGFyZ2V0IiwiYXR0clZhbHVlIiwiZGF0YSIsInNldEF0dHJpYnV0ZSIsInVwZGF0ZVRlbXBsYXRlSW5zdGFuY2UiLCJhcmdzIiwic3R5bGVTaGVldHMiLCJ0eXBlIiwicHJldkFyZ3MiLCJpbXBvcnROb2RlIiwicmVuZGVyV2Fsa2VyIiwiY2xvbmVkUGFydHMiLCJyZW5kZXJJbmRleCIsImN1cnJlbnRQYXJ0Iiwic2hpZnQiLCJtYXJrZXJzIiwiaW5kZXhPZiIsImN1c3RvbUVsZW1lbnRzIiwiRXJyb3IiLCJzdGFydE5vZGUiLCJlbmROb2RlIiwicHJldmlvdXNDaGlsZCIsImNoaWxkIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwiaXNFcXVhbCIsIkNTU1N0eWxlU2hlZXQiLCJzdHlsZVNoZWV0IiwicmVwbGFjZVN5bmMiLCJtYXJrZXIiLCJzaGFkb3dSb290Iiwic3R5bGVTdWJ0cmVlIiwic3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGdCQUFULEVBQTJCQyxRQUEzQixFQUFxQ0MsS0FBckMsUUFBa0QsYUFBbEQ7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxjQUFsQixRQUF3QyxZQUF4QztBQUVBLE9BQU9DLFlBQVAsTUFBeUIsc0JBQXpCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0Qix5QkFBNUI7QUFFQTs7QUFDQSxJQUFJO0FBQUVDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBQXNCLENBQTVCLENBQTZCLE9BQU1DLENBQU4sRUFBUztBQUFFLE1BQUlILE9BQU8sR0FBRztBQUFFQyxJQUFBQSxHQUFHLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBUCxHQUFkO0FBQW9ELEMsQ0FBQzs7O0FBRTdGLElBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWxCO0FBRUEsT0FBTyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFBQ0MsRUFBRCx1RUFBTSxDQUFOO0FBQUEsdUJBQW1CSixTQUFuQixjQUFnQ0ksRUFBaEM7QUFBQSxDQUF2QjtBQUVQLElBQU1DLHVCQUF1QixHQUFHRixjQUFjLENBQUMsUUFBRCxDQUE5QztBQUNBLElBQU1HLHdCQUF3QixHQUFHLElBQUlDLE1BQUosWUFBZUYsdUJBQWYsT0FBakM7QUFDQSxJQUFNRyxzQkFBc0IsR0FBRyxJQUFJRCxNQUFKLENBQVdGLHVCQUFYLEVBQW9DLEdBQXBDLENBQS9CO0FBRUEsSUFBTUksV0FBVyxlQUFRVCxTQUFSLE9BQWpCO0FBQ0EsSUFBTVUsV0FBVyxHQUFHLElBQUlILE1BQUosQ0FBV0UsV0FBWCxFQUF3QixHQUF4QixDQUFwQjtBQUVBLElBQU1FLGlC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QUssQ0FBQytILFlBQU4sQ0FBbUJoQyxJQUFuQjtBQUNEO0FBQ0Y7QUFDRixPQVJPLENBQVI7QUFTRDtBQUNGLEdBaklEO0FBa0lEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5naWZ5RWxlbWVudCwgc2hhZHlDU1MsIElTX0lFIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBkYXRhTWFwLCByZW1vdmVUZW1wbGF0ZSB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbmltcG9ydCByZXNvbHZlVmFsdWUgZnJvbSBcIi4vcmVzb2x2ZXJzL3ZhbHVlLmpzXCI7XG5pbXBvcnQgcmVzb2x2ZVByb3BlcnR5IGZyb20gXCIuL3Jlc29sdmVycy9wcm9wZXJ0eS5qc1wiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudHJ5IHsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSBjYXRjaChlKSB7IHZhciBwcm9jZXNzID0geyBlbnY6IHsgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyB9IH07IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jb25zdCBUSU1FU1RBTVAgPSBEYXRlLm5vdygpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxhY2Vob2xkZXIgPSAoaWQgPSAwKSA9PiBge3toLSR7VElNRVNUQU1QfS0ke2lkfX19YDtcblxuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQgPSBnZXRQbGFjZWhvbGRlcihcIihcXFxcZCspXCIpO1xuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMID0gbmV3IFJlZ0V4cChgXiR7UExBQ0VIT0xERVJfUkVHRVhQX1RFWFR9JGApO1xuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX0FMTCA9IG5ldyBSZWdFeHAoUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQsIFwiZ1wiKTtcblxuY29uc3QgQVRUUl9QUkVGSVggPSBgLS0ke1RJTUVTVEFNUH0tLWA7XG5jb25zdCBBVFRSX1JFR0VYUCA9IG5ldyBSZWdFeHAoQVRUUl9QUkVGSVgsIFwiZ1wiKTtcblxuY29uc3QgcHJlcGFyZWRUZW1wbGF0ZXMgPSBuZXcgV2Vha01hcCgpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gYXBwbHlTaGFkeUNTUyh0ZW1wbGF0ZSwgdGFnTmFtZSkge1xuICBpZiAoIXRhZ05hbWUpIHJldHVybiB0ZW1wbGF0ZTtcblxuICByZXR1cm4gc2hhZHlDU1Moc2hhZHkgPT4ge1xuICAgIGxldCBtYXAgPSBwcmVwYXJlZFRlbXBsYXRlcy5nZXQodGVtcGxhdGUpO1xuICAgIGlmICghbWFwKSB7XG4gICAgICBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICBwcmVwYXJlZFRlbXBsYXRlcy5zZXQodGVtcGxhdGUsIG1hcCk7XG4gICAgfVxuXG4gICAgbGV0IGNsb25lID0gbWFwLmdldCh0YWdOYW1lKTtcblxuICAgIGlmICghY2xvbmUpIHtcbiAgICAgIGNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgICAgY2xvbmUuY29udGVudC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICAgIG1hcC5zZXQodGFnTmFtZSwgY2xvbmUpO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSBjbG9uZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKTtcblxuICAgICAgQXJyYXkuZnJvbShzdHlsZXMpLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHN0eWxlLmNoaWxkTm9kZXMubGVuZ3RoICsgMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgc3R5bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnZXRQbGFjZWhvbGRlcigpKSxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzaGFkeS5wcmVwYXJlVGVtcGxhdGUoY2xvbmUsIHRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbiAgfSwgdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmUocGFydHMsIHN0eWxlcykge1xuICBsZXQgc2lnbmF0dXJlID0gcGFydHMucmVkdWNlKChhY2MsIHBhcnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gcGFydDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXJ0c1xuICAgICAgICAuc2xpY2UoaW5kZXgpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgIC5tYXRjaCgvXlxccyo8XFwvXFxzKih0YWJsZXx0cnx0aGVhZHx0Ym9keXx0Zm9vdHxjb2xncm91cCk+LylcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHthY2N9PCEtLSR7Z2V0UGxhY2Vob2xkZXIoaW5kZXggLSAxKX0tLT4ke3BhcnR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjYyArIGdldFBsYWNlaG9sZGVyKGluZGV4IC0gMSkgKyBwYXJ0O1xuICB9LCBcIlwiKTtcblxuICBpZiAoc3R5bGVzKSB7XG4gICAgc2lnbmF0dXJlICs9IGA8c3R5bGU+XFxuJHtzdHlsZXMuam9pbihcIlxcbi8qLS0tLS0tKi9cXG5cIil9XFxuPC9zdHlsZT5gO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChJU19JRSkge1xuICAgIHJldHVybiBzaWduYXR1cmUucmVwbGFjZShcbiAgICAgIC9zdHlsZVxccyo9XFxzKihbXCJdW15cIl0rW1wiXXxbJ11bXiddK1snXXxbXlxcc1wiJzw+L10rKS9nLFxuICAgICAgbWF0Y2ggPT4gYCR7QVRUUl9QUkVGSVh9JHttYXRjaH1gLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICAucmVwbGFjZSgvXFxzKj1cXHMqWydcIl0qJC9nLCBcIlwiKVxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLnBvcCgpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ29tbWVudHMoZnJhZ21lbnQpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoXG4gICAgZnJhZ21lbnQsXG4gICAgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXG4gICAgbnVsbCxcbiAgICBmYWxzZSxcbiAgKTtcbiAgbGV0IG5vZGU7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuICB3aGlsZSAoKG5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgIGlmIChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwudGVzdChub2RlLnRleHRDb250ZW50KSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS50ZXh0Q29udGVudCksXG4gICAgICAgIG5vZGUsXG4gICAgICApO1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW50ZXJuYWxXYWxrZXIoY29udGV4dCkge1xuICBsZXQgbm9kZTtcblxuICByZXR1cm4ge1xuICAgIGdldCBjdXJyZW50Tm9kZSgpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG4gICAgbmV4dE5vZGUoKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUgPSBjb250ZXh0LmNoaWxkTm9kZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5uZXh0U2libGluZykge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBub2RlID0gcGFyZW50Tm9kZS5uZXh0U2libGluZztcblxuICAgICAgICB3aGlsZSAoIW5vZGUgJiYgcGFyZW50Tm9kZSAhPT0gY29udGV4dCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgbm9kZSA9IHBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICEhbm9kZTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFeHRlcm5hbFdhbGtlcihjb250ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIGNvbnRleHQsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgIG51bGwsXG4gICAgZmFsc2UsXG4gICk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBjcmVhdGVXYWxrZXIgPVxuICB0eXBlb2Ygd2luZG93LlNoYWR5RE9NID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5TaGFkeURPTS5pblVzZVxuICAgID8gY3JlYXRlSW50ZXJuYWxXYWxrZXJcbiAgICA6IGNyZWF0ZUV4dGVybmFsV2Fsa2VyO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgc3R5bGVTaGVldHNNYXAgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUocmF3UGFydHMsIGlzU1ZHLCBzdHlsZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIGNvbnN0IHBhcnRzID0gW107XG5cbiAgbGV0IHNpZ25hdHVyZSA9IGNyZWF0ZVNpZ25hdHVyZShyYXdQYXJ0cywgc3R5bGVzKTtcbiAgaWYgKGlzU1ZHKSBzaWduYXR1cmUgPSBgPHN2Zz4ke3NpZ25hdHVyZX08L3N2Zz5gO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoSVNfSUUpIHtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzaWduYXR1cmU7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8dGVtcGxhdGU+JHtzaWduYXR1cmV9PC90ZW1wbGF0ZT5gO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyLmNoaWxkcmVuWzBdLmNvbnRlbnQpO1xuICB9XG5cbiAgaWYgKGlzU1ZHKSB7XG4gICAgY29uc3Qgc3ZnUm9vdCA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LnJlbW92ZUNoaWxkKHN2Z1Jvb3QpO1xuICAgIEFycmF5LmZyb20oc3ZnUm9vdC5jaGlsZE5vZGVzKS5mb3JFYWNoKG5vZGUgPT5cbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSksXG4gICAgKTtcbiAgfVxuXG4gIHJlcGxhY2VDb21tZW50cyh0ZW1wbGF0ZS5jb250ZW50KTtcblxuICBjb25zdCBjb21waWxlV2Fsa2VyID0gY3JlYXRlV2Fsa2VyKHRlbXBsYXRlLmNvbnRlbnQpO1xuICBsZXQgY29tcGlsZUluZGV4ID0gMDtcblxuICB3aGlsZSAoY29tcGlsZVdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNvbXBpbGVXYWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHRDb250ZW50O1xuXG4gICAgICBpZiAoIXRleHQubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMKSkge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGV4dC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfQUxMKTtcbiAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgIHJlc3VsdHNcbiAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgIChhY2MsIHBsYWNlaG9sZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2JlZm9yZSwgbmV4dF0gPSBhY2MucG9wKCkuc3BsaXQocGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmUpIGFjYy5wdXNoKGJlZm9yZSk7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2gocGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0KSBhY2MucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbdGV4dF0sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFydCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBwYXJ0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXJ0KSxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLm5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVxdWFsID0gbm9kZS50ZXh0Q29udGVudC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpO1xuICAgICAgaWYgKGVxdWFsKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICghSVNfSUUpIG5vZGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwYXJ0c1tlcXVhbFsxXV0gPSBbY29tcGlsZUluZGV4LCByZXNvbHZlVmFsdWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZWx5LWlmXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgQXJyYXkuZnJvbShub2RlLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBJU19JRSA/IGF0dHIubmFtZS5yZXBsYWNlKEFUVFJfUFJFRklYLCBcIlwiKSA6IGF0dHIubmFtZTtcbiAgICAgICAgICBjb25zdCBlcXVhbCA9IHZhbHVlLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICAgICAgaWYgKGVxdWFsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBnZXRQcm9wZXJ0eU5hbWUocmF3UGFydHNbZXF1YWxbMV1dKTtcbiAgICAgICAgICAgIHBhcnRzW2VxdWFsWzFdXSA9IFtcbiAgICAgICAgICAgICAgY29tcGlsZUluZGV4LFxuICAgICAgICAgICAgICByZXNvbHZlUHJvcGVydHkobmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHZhbHVlLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydGlhbE5hbWUgPSBgYXR0cl9fJHtuYW1lfWA7XG5cbiAgICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChwbGFjZWhvbGRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbLCBpZF0gPSBwbGFjZWhvbGRlci5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpO1xuICAgICAgICAgICAgICAgIHBhcnRzW2lkXSA9IFtcbiAgICAgICAgICAgICAgICAgIGNvbXBpbGVJbmRleCxcbiAgICAgICAgICAgICAgICAgIChob3N0LCB0YXJnZXQsIGF0dHJWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcGFydGlhbE5hbWVdID0gKGRhdGFbcGFydGlhbE5hbWVdIHx8IHZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJWYWx1ZSA9PSBudWxsID8gXCJcIiA6IGF0dHJWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEgfHwgaW5kZXggKyAxID09PSByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUobmFtZSwgZGF0YVtwYXJ0aWFsTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGFbcGFydGlhbE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGF0dHIudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgIGlmIChJU19JRSAmJiBuYW1lICE9PSBhdHRyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIFwiXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlSW5kZXggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVUZW1wbGF0ZUluc3RhbmNlKGhvc3QsIHRhcmdldCwgYXJncywgc3R5bGVTaGVldHMpIHtcbiAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7IHR5cGU6IFwiZnVuY3Rpb25cIiB9KTtcblxuICAgIGlmICh0ZW1wbGF0ZSAhPT0gZGF0YS50ZW1wbGF0ZSkge1xuICAgICAgaWYgKGRhdGEudGVtcGxhdGUgfHwgdGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnByZXZBcmdzID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgICAgICBhcHBseVNoYWR5Q1NTKHRlbXBsYXRlLCBob3N0LnRhZ05hbWUpLmNvbnRlbnQsXG4gICAgICAgIHRydWUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCByZW5kZXJXYWxrZXIgPSBjcmVhdGVXYWxrZXIoZnJhZ21lbnQpO1xuICAgICAgY29uc3QgY2xvbmVkUGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcblxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMDtcbiAgICAgIGxldCBjdXJyZW50UGFydCA9IGNsb25lZFBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBbXTtcblxuICAgICAgZGF0YS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgZGF0YS5tYXJrZXJzID0gbWFya2VycztcblxuICAgICAgd2hpbGUgKHJlbmRlcldhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZW5kZXJXYWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpZiAoUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMLnRlc3Qobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoSVNfSUUpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoQVRUUl9SRUdFWFAsIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBub2RlLnRhZ05hbWUuaW5kZXhPZihcIi1cIikgPiAtMSAmJlxuICAgICAgICAgICAgIWN1c3RvbUVsZW1lbnRzLmdldChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICBgTWlzc2luZyAnJHtzdHJpbmdpZnlFbGVtZW50KFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICl9JyBlbGVtZW50IGRlZmluaXRpb24gaW4gJyR7c3RyaW5naWZ5RWxlbWVudChob3N0KX0nYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRQYXJ0ICYmIGN1cnJlbnRQYXJ0WzBdID09PSByZW5kZXJJbmRleCkge1xuICAgICAgICAgIG1hcmtlcnMucHVzaChbbm9kZSwgY3VycmVudFBhcnRbMV1dKTtcbiAgICAgICAgICBjdXJyZW50UGFydCA9IGNsb25lZFBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJJbmRleCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICBkYXRhLnN0YXJ0Tm9kZSA9IGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGRhdGEuZW5kTm9kZSA9IGZyYWdtZW50LmNoaWxkTm9kZXNbZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgcHJldmlvdXNDaGlsZCA9IHRhcmdldDtcblxuICAgICAgICBsZXQgY2hpbGQgPSBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGQsIHByZXZpb3VzQ2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgIHByZXZpb3VzQ2hpbGQgPSBjaGlsZDtcbiAgICAgICAgICBjaGlsZCA9IGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRvcHRlZFN0eWxlU2hlZXRzID0gdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cztcbiAgICBpZiAoc3R5bGVTaGVldHMpIHtcbiAgICAgIGxldCBpc0VxdWFsID0gZmFsc2U7XG5cbiAgICAgIHN0eWxlU2hlZXRzID0gc3R5bGVTaGVldHMubWFwKHN0eWxlID0+IHtcbiAgICAgICAgaWYgKHN0eWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCkgcmV0dXJuIHN0eWxlO1xuXG4gICAgICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGVTaGVldHNNYXAuZ2V0KHN0eWxlKTtcbiAgICAgICAgaWYgKCFzdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc3R5bGVTaGVldC5yZXBsYWNlU3luYyhzdHlsZSk7XG4gICAgICAgICAgc3R5bGVTaGVldHNNYXAuc2V0KHN0eWxlLCBzdHlsZVNoZWV0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVTaGVldDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3R5bGVTaGVldHMubGVuZ3RoID09PSBhZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoKSB7XG4gICAgICAgIGlzRXF1YWwgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlU2hlZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHN0eWxlU2hlZXRzW2ldICE9PSBhZG9wdGVkU3R5bGVTaGVldHNbaV0pIHtcbiAgICAgICAgICAgIGlzRXF1YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRXF1YWwpIHRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZVNoZWV0cztcbiAgICB9IGVsc2UgaWYgKGFkb3B0ZWRTdHlsZVNoZWV0cyAmJiBhZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoKSB7XG4gICAgICB0YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcHJldkFyZ3MgPSBkYXRhLnByZXZBcmdzO1xuICAgIGRhdGEucHJldkFyZ3MgPSBhcmdzO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubWFya2Vycy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IFtub2RlLCBtYXJrZXJdID0gZGF0YS5tYXJrZXJzW2luZGV4XTtcbiAgICAgIGlmICghcHJldkFyZ3MgfHwgcHJldkFyZ3NbaW5kZXhdICE9PSBhcmdzW2luZGV4XSkge1xuICAgICAgICBtYXJrZXIoaG9zdCwgbm9kZSwgYXJnc1tpbmRleF0sIHByZXZBcmdzID8gcHJldkFyZ3NbaW5kZXhdIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgc2hhZHlDU1Moc2hhZHkgPT4ge1xuICAgICAgICBpZiAoaG9zdC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgaWYgKHByZXZBcmdzKSB7XG4gICAgICAgICAgICBzaGFkeS5zdHlsZVN1YnRyZWUoaG9zdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYWR5LnN0eWxlRWxlbWVudChob3N0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/helpers.js":
/*!******************************************************!*\
  !*** ./node_modules/hybrids/esm/template/helpers.js ***!
  \******************************************************/
/*! exports provided: set, resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
var setCache = new Map();
function set(propertyName, value) {
  if (!propertyName) throw Error("Target property name missing: ".concat(propertyName));

  if (arguments.length === 2) {
    return function (host) {
      host[propertyName] = value;
    };
  }

  var fn = setCache.get(propertyName);

  if (!fn) {
    fn = function fn(host, _ref) {
      var target = _ref.target;
      host[propertyName] = target.value;
    };

    setCache.set(propertyName, fn);
  }

  return fn;
}
var promiseMap = new WeakMap();
function resolve(promise, placeholder) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  return function (host, target) {
    var timeout;

    if (placeholder) {
      timeout = setTimeout(function () {
        timeout = undefined;
        requestAnimationFrame(function () {
          placeholder(host, target);
        });
      }, delay);
    }

    promiseMap.set(target, promise);
    promise.then(function (template) {
      if (timeout) clearTimeout(timeout);

      if (promiseMap.get(target) === promise) {
        template(host, target);
        promiseMap.set(target, null);
      }
    });
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNldENhY2hlIiwiTWFwIiwic2V0IiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImhvc3QiLCJmbiIsImdldCIsInRhcmdldCIsInByb21pc2VNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZSIsInByb21pc2UiLCJwbGFjZWhvbGRlciIsImRlbGF5IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwidGVtcGxhdGUiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxHQUFKLEVBQWpCO0FBQ0EsT0FBTyxTQUFTQyxHQUFULENBQWFDLFlBQWIsRUFBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDLE1BQUksQ0FBQ0QsWUFBTCxFQUNFLE1BQU1FLEtBQUsseUNBQWtDRixZQUFsQyxFQUFYOztBQUVGLE1BQUlHLFNBQVMsQ0FBQ0MsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUFPLFVBQUFDLElBQUksRUFBSTtBQUNiQSxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQkMsS0FBckI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsTUFBSUssRUFBRSxHQUFHVCxRQUFRLENBQUNVLEdBQVQsQ0FBYVAsWUFBYixDQUFUOztBQUVBLE1BQUksQ0FBQ00sRUFBTCxFQUFTO0FBQ1BBLElBQUFBLEVBQUUsR0FBRyxZQUFDRCxJQUFELFFBQXNCO0FBQUEsVUFBYkcsTUFBYSxRQUFiQSxNQUFhO0FBQ3pCSCxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQlEsTUFBTSxDQUFDUCxLQUE1QjtBQUNELEtBRkQ7O0FBR0FKLElBQUFBLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhQyxZQUFiLEVBQTJCTSxFQUEzQjtBQUNEOztBQUVELFNBQU9BLEVBQVA7QUFDRDtBQUVELElBQU1HLFVBQVUsR0FBRyxJQUFJQyxPQUFKLEVBQW5CO0FBQ0EsT0FBTyxTQUFTQyxPQUFULENBQWlCQyxPQUFqQixFQUEwQkMsV0FBMUIsRUFBb0Q7QUFBQSxNQUFiQyxLQUFhLHVFQUFMLEdBQUs7QUFDekQsU0FBTyxVQUFDVCxJQUFELEVBQU9HLE1BQVAsRUFBa0I7QUFDdkIsUUFBSU8sT0FBSjs7QUFFQSxRQUFJRixXQUFKLEVBQWlCO0FBQ2ZFLE1BQUFBLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDekJELFFBQUFBLE9BQU8sR0FBR0UsU0FBVjtBQUVBQyxRQUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0FBQzFCTCxVQUFBQSxXQUFXLENBQUNSLElBQUQsRUFBT0csTUFBUCxDQUFYO0FBQ0QsU0FGb0IsQ0FBckI7QUFHRCxPQU5tQixFQU1qQk0sS0FOaUIsQ0FBcEI7QUFPRDs7QUFFREwsSUFBQUEsVUFBVSxDQUFDVixHQUFYLENBQWVTLE1BQWYsRUFBdUJJLE9BQXZCO0FBRUFBLElBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLFVBQUFDLFFBQVEsRUFBSTtBQUN2QixVQUFJTCxPQUFKLEVBQWFNLFlBQVksQ0FBQ04sT0FBRCxDQUFaOztBQUViLFVBQUlOLFVBQVUsQ0FBQ0YsR0FBWCxDQUFlQyxNQUFmLE1BQTJCSSxPQUEvQixFQUF3QztBQUN0Q1EsUUFBQUEsUUFBUSxDQUFDZixJQUFELEVBQU9HLE1BQVAsQ0FBUjtBQUNBQyxRQUFBQSxVQUFVLENBQUNWLEdBQVgsQ0FBZVMsTUFBZixFQUF1QixJQUF2QjtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBdkJEO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2V0Q2FjaGUgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gc2V0KHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgdGhyb3cgRXJyb3IoYFRhcmdldCBwcm9wZXJ0eSBuYW1lIG1pc3Npbmc6ICR7cHJvcGVydHlOYW1lfWApO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIGhvc3QgPT4ge1xuICAgICAgaG9zdFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGxldCBmbiA9IHNldENhY2hlLmdldChwcm9wZXJ0eU5hbWUpO1xuXG4gIGlmICghZm4pIHtcbiAgICBmbiA9IChob3N0LCB7IHRhcmdldCB9KSA9PiB7XG4gICAgICBob3N0W3Byb3BlcnR5TmFtZV0gPSB0YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBzZXRDYWNoZS5zZXQocHJvcGVydHlOYW1lLCBmbik7XG4gIH1cblxuICByZXR1cm4gZm47XG59XG5cbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgcGxhY2Vob2xkZXIsIGRlbGF5ID0gMjAwKSB7XG4gIHJldHVybiAoaG9zdCwgdGFyZ2V0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHBsYWNlaG9sZGVyKGhvc3QsIHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHByb21pc2VNYXAuc2V0KHRhcmdldCwgcHJvbWlzZSk7XG5cbiAgICBwcm9taXNlLnRoZW4odGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKHByb21pc2VNYXAuZ2V0KHRhcmdldCkgPT09IHByb21pc2UpIHtcbiAgICAgICAgdGVtcGxhdGUoaG9zdCwgdGFyZ2V0KTtcbiAgICAgICAgcHJvbWlzZU1hcC5zZXQodGFyZ2V0LCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hybrids/esm/template/index.js ***!
  \****************************************************/
/*! exports provided: html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../define.js */ "./node_modules/hybrids/esm/define.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./node_modules/hybrids/esm/template/core.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/hybrids/esm/template/helpers.js");



var PLACEHOLDER = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["getPlaceholder"])();
var SVG_PLACEHOLDER = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["getPlaceholder"])("svg");
var STYLE_IMPORT_REGEXP = /@import/;
var templatesMap = new Map();
var stylesMap = new WeakMap();
var methods = {
  define: function define(elements) {
    Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elements);
    return this;
  },
  key: function key(id) {
    this.id = id;
    return this;
  },
  style: function style() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    stylesMap.set(this, styles.filter(function (style) {
      return style;
    }));
    return this;
  }
};

function create(parts, args, isSVG) {
  var createTemplate = function createTemplate(host) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : host;
    var styles = stylesMap.get(createTemplate);
    var hasAdoptedStyleSheets;
    var id = parts.join(PLACEHOLDER);

    if (styles) {
      var joinedStyles = styles.join(PLACEHOLDER);
      hasAdoptedStyleSheets = !!target.adoptedStyleSheets && !STYLE_IMPORT_REGEXP.test(joinedStyles);
      if (!hasAdoptedStyleSheets) id += joinedStyles;
    }

    if (isSVG) id += SVG_PLACEHOLDER;
    var render = templatesMap.get(id);

    if (!render) {
      render = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["compileTemplate"])(parts, isSVG, !hasAdoptedStyleSheets && styles);
      templatesMap.set(id, render);
    }

    render(host, target, args, hasAdoptedStyleSheets && styles);
  };

  return Object.assign(createTemplate, methods);
}

function html(parts) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return create(parts, args);
}
function svg(parts) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return create(parts, args, true);
}
Object.assign(html, _helpers_js__WEBPACK_IMPORTED_MODULE_2__);
Object.assign(svg, _helpers_js__WEBPACK_IMPORTED_MODULE_2__);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZpbmVFbGVtZW50cyIsImNvbXBpbGVUZW1wbGF0ZSIsImdldFBsYWNlaG9sZGVyIiwiaGVscGVycyIsIlBMQUNFSE9MREVSIiwiU1ZHX1BMQUNFSE9MREVSIiwiU1RZTEVfSU1QT1JUX1JFR0VYUCIsInRlbXBsYXRlc01hcCIsIk1hcCIsInN0eWxlc01hcCIsIldlYWtNYXAiLCJtZXRob2RzIiwiZGVmaW5lIiwiZWxlbWVudHMiLCJrZXkiLCJpZCIsInN0eWxlIiwic3R5bGVzIiwic2V0IiwiZmlsdGVyIiwiY3JlYXRlIiwicGFydHMiLCJhcmdzIiwiaXNTVkciLCJjcmVhdGVUZW1wbGF0ZSIsImhvc3QiLCJ0YXJnZXQiLCJnZXQiLCJoYXNBZG9wdGVkU3R5bGVTaGVldHMiLCJqb2luIiwiam9pbmVkU3R5bGVzIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwidGVzdCIsInJlbmRlciIsIk9iamVjdCIsImFzc2lnbiIsImh0bWwiLCJzdmciXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGNBQVAsTUFBMkIsY0FBM0I7QUFFQSxTQUFTQyxlQUFULEVBQTBCQyxjQUExQixRQUFnRCxXQUFoRDtBQUNBLE9BQU8sS0FBS0MsT0FBWixNQUF5QixjQUF6QjtBQUVBLElBQU1DLFdBQVcsR0FBR0YsY0FBYyxFQUFsQztBQUNBLElBQU1HLGVBQWUsR0FBR0gsY0FBYyxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUE1QjtBQUVBLElBQU1DLFlBQVksR0FBRyxJQUFJQyxHQUFKLEVBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlDLE9BQUosRUFBbEI7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsTUFEYyxrQkFDUEMsUUFETyxFQUNHO0FBQ2ZiLElBQUFBLGNBQWMsQ0FBQ2EsUUFBRCxDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FKYTtBQUtkQyxFQUFBQSxHQUxjLGVBS1ZDLEVBTFUsRUFLTjtBQUNOLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBUmE7QUFTZEMsRUFBQUEsS0FUYyxtQkFTRztBQUFBLHNDQUFSQyxNQUFRO0FBQVJBLE1BQUFBLE1BQVE7QUFBQTs7QUFDZlIsSUFBQUEsU0FBUyxDQUFDUyxHQUFWLENBQ0UsSUFERixFQUVFRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFBSCxLQUFLO0FBQUEsYUFBSUEsS0FBSjtBQUFBLEtBQW5CLENBRkY7QUFJQSxXQUFPLElBQVA7QUFDRDtBQWZhLENBQWhCOztBQWtCQSxTQUFTSSxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUF5QjtBQUFBLFFBQWxCQyxNQUFrQix1RUFBVEQsSUFBUztBQUM5QyxRQUFNUixNQUFNLEdBQUdSLFNBQVMsQ0FBQ2tCLEdBQVYsQ0FBY0gsY0FBZCxDQUFmO0FBQ0EsUUFBSUkscUJBQUo7QUFDQSxRQUFJYixFQUFFLEdBQUdNLEtBQUssQ0FBQ1EsSUFBTixDQUFXekIsV0FBWCxDQUFUOztBQUVBLFFBQUlhLE1BQUosRUFBWTtBQUNWLFVBQU1hLFlBQVksR0FBR2IsTUFBTSxDQUFDWSxJQUFQLENBQVl6QixXQUFaLENBQXJCO0FBQ0F3QixNQUFBQSxxQkFBcUIsR0FDbkIsQ0FBQyxDQUFDRixNQUFNLENBQUNLLGtCQUFULElBQStCLENBQUN6QixtQkFBbUIsQ0FBQzBCLElBQXBCLENBQXlCRixZQUF6QixDQURsQztBQUVBLFVBQUksQ0FBQ0YscUJBQUwsRUFBNEJiLEVBQUUsSUFBSWUsWUFBTjtBQUM3Qjs7QUFFRCxRQUFJUCxLQUFKLEVBQVdSLEVBQUUsSUFBSVYsZUFBTjtBQUVYLFFBQUk0QixNQUFNLEdBQUcxQixZQUFZLENBQUNvQixHQUFiLENBQWlCWixFQUFqQixDQUFiOztBQUNBLFFBQUksQ0FBQ2tCLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUdoQyxlQUFlLENBQUNvQixLQUFELEVBQVFFLEtBQVIsRUFBZSxDQUFDSyxxQkFBRCxJQUEwQlgsTUFBekMsQ0FBeEI7QUFDQVYsTUFBQUEsWUFBWSxDQUFDVyxHQUFiLENBQWlCSCxFQUFqQixFQUFxQmtCLE1BQXJCO0FBQ0Q7O0FBRURBLElBQUFBLE1BQU0sQ0FBQ1IsSUFBRCxFQUFPQyxNQUFQLEVBQWVKLElBQWYsRUFBcUJNLHFCQUFxQixJQUFJWCxNQUE5QyxDQUFOO0FBQ0QsR0FyQkQ7O0FBdUJBLFNBQU9pQixNQUFNLENBQUNDLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEOztBQUVELE9BQU8sU0FBU3lCLElBQVQsQ0FBY2YsS0FBZCxFQUE4QjtBQUFBLHFDQUFOQyxJQUFNO0FBQU5BLElBQUFBLElBQU07QUFBQTs7QUFDbkMsU0FBT0YsTUFBTSxDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBYjtBQUNEO0FBRUQsT0FBTyxTQUFTZSxHQUFULENBQWFoQixLQUFiLEVBQTZCO0FBQUEscUNBQU5DLElBQU07QUFBTkEsSUFBQUEsSUFBTTtBQUFBOztBQUNsQyxTQUFPRixNQUFNLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFjLElBQWQsQ0FBYjtBQUNEO0FBRURZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLEVBQW9CakMsT0FBcEI7QUFDQStCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLEVBQW1CbEMsT0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVmaW5lRWxlbWVudHMgZnJvbSBcIi4uL2RlZmluZS5qc1wiO1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGdldFBsYWNlaG9sZGVyIH0gZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzLmpzXCI7XG5cbmNvbnN0IFBMQUNFSE9MREVSID0gZ2V0UGxhY2Vob2xkZXIoKTtcbmNvbnN0IFNWR19QTEFDRUhPTERFUiA9IGdldFBsYWNlaG9sZGVyKFwic3ZnXCIpO1xuY29uc3QgU1RZTEVfSU1QT1JUX1JFR0VYUCA9IC9AaW1wb3J0LztcblxuY29uc3QgdGVtcGxhdGVzTWFwID0gbmV3IE1hcCgpO1xuY29uc3Qgc3R5bGVzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgZGVmaW5lKGVsZW1lbnRzKSB7XG4gICAgZGVmaW5lRWxlbWVudHMoZWxlbWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBrZXkoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHN0eWxlKC4uLnN0eWxlcykge1xuICAgIHN0eWxlc01hcC5zZXQoXG4gICAgICB0aGlzLFxuICAgICAgc3R5bGVzLmZpbHRlcihzdHlsZSA9PiBzdHlsZSksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZShwYXJ0cywgYXJncywgaXNTVkcpIHtcbiAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoaG9zdCwgdGFyZ2V0ID0gaG9zdCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc01hcC5nZXQoY3JlYXRlVGVtcGxhdGUpO1xuICAgIGxldCBoYXNBZG9wdGVkU3R5bGVTaGVldHM7XG4gICAgbGV0IGlkID0gcGFydHMuam9pbihQTEFDRUhPTERFUik7XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBjb25zdCBqb2luZWRTdHlsZXMgPSBzdHlsZXMuam9pbihQTEFDRUhPTERFUik7XG4gICAgICBoYXNBZG9wdGVkU3R5bGVTaGVldHMgPVxuICAgICAgICAhIXRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIVNUWUxFX0lNUE9SVF9SRUdFWFAudGVzdChqb2luZWRTdHlsZXMpO1xuICAgICAgaWYgKCFoYXNBZG9wdGVkU3R5bGVTaGVldHMpIGlkICs9IGpvaW5lZFN0eWxlcztcbiAgICB9XG5cbiAgICBpZiAoaXNTVkcpIGlkICs9IFNWR19QTEFDRUhPTERFUjtcblxuICAgIGxldCByZW5kZXIgPSB0ZW1wbGF0ZXNNYXAuZ2V0KGlkKTtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgcmVuZGVyID0gY29tcGlsZVRlbXBsYXRlKHBhcnRzLCBpc1NWRywgIWhhc0Fkb3B0ZWRTdHlsZVNoZWV0cyAmJiBzdHlsZXMpO1xuICAgICAgdGVtcGxhdGVzTWFwLnNldChpZCwgcmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoaG9zdCwgdGFyZ2V0LCBhcmdzLCBoYXNBZG9wdGVkU3R5bGVTaGVldHMgJiYgc3R5bGVzKTtcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjcmVhdGVUZW1wbGF0ZSwgbWV0aG9kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ZnKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MsIHRydWUpO1xufVxuXG5PYmplY3QuYXNzaWduKGh0bWwsIGhlbHBlcnMpO1xuT2JqZWN0LmFzc2lnbihzdmcsIGhlbHBlcnMpO1xuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/array.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/array.js ***!
  \**************************************************************/
/*! exports provided: arrayMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMap", function() { return arrayMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveArray; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/hybrids/esm/template/utils.js");

var arrayMap = new WeakMap();

function movePlaceholder(target, previousSibling) {
  var data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(target);
  var startNode = data.startNode;
  var endNode = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getTemplateEnd"])(data.endNode);
  previousSibling.parentNode.insertBefore(target, previousSibling.nextSibling);
  var prevNode = target;
  var node = startNode;

  while (node) {
    var nextNode = node.nextSibling;
    prevNode.parentNode.insertBefore(node, prevNode.nextSibling);
    prevNode = node;
    node = nextNode !== endNode.nextSibling && nextNode;
  }
}

function resolveArray(host, target, value, resolveValue) {
  var lastEntries = arrayMap.get(target);
  var entries = value.map(function (item, index) {
    return {
      id: Object.prototype.hasOwnProperty.call(item, "id") ? item.id : index,
      value: item,
      placeholder: null,
      available: true
    };
  });
  arrayMap.set(target, entries);

  if (lastEntries) {
    var ids = new Set();
    entries.forEach(function (entry) {
      return ids.add(entry.id);
    });
    lastEntries = lastEntries.filter(function (entry) {
      if (!ids.has(entry.id)) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTemplate"])(entry.placeholder);
        entry.placeholder.parentNode.removeChild(entry.placeholder);
        return false;
      }

      return true;
    });
  }

  var previousSibling = target;
  var lastIndex = value.length - 1;
  var data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(target);

  for (var index = 0; index < entries.length; index += 1) {
    var entry = entries[index];
    var matchedEntry = void 0;

    if (lastEntries) {
      for (var i = 0; i < lastEntries.length; i += 1) {
        if (lastEntries[i].available && lastEntries[i].id === entry.id) {
          matchedEntry = lastEntries[i];
          break;
        }
      }
    }

    var placeholder = void 0;

    if (matchedEntry) {
      matchedEntry.available = false;
      placeholder = matchedEntry.placeholder;

      if (placeholder.previousSibling !== previousSibling) {
        movePlaceholder(placeholder, previousSibling);
      }

      if (matchedEntry.value !== entry.value) {
        resolveValue(host, placeholder, entry.value);
      }
    } else {
      placeholder = document.createTextNode("");
      previousSibling.parentNode.insertBefore(placeholder, previousSibling.nextSibling);
      resolveValue(host, placeholder, entry.value);
    }

    previousSibling = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getTemplateEnd"])(_utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(placeholder).endNode || placeholder);
    if (index === 0) data.startNode = placeholder;
    if (index === lastIndex) data.endNode = previousSibling;
    entry.placeholder = placeholder;
  }

  if (lastEntries) {
    lastEntries.forEach(function (entry) {
      if (entry.available) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTemplate"])(entry.placeholder);
        entry.placeholder.parentNode.removeChild(entry.placeholder);
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvYXJyYXkuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwiZ2V0VGVtcGxhdGVFbmQiLCJhcnJheU1hcCIsIldlYWtNYXAiLCJtb3ZlUGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJwcmV2aW91c1NpYmxpbmciLCJkYXRhIiwiZ2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInByZXZOb2RlIiwibm9kZSIsIm5leHROb2RlIiwicmVzb2x2ZUFycmF5IiwiaG9zdCIsInZhbHVlIiwicmVzb2x2ZVZhbHVlIiwibGFzdEVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGFjZWhvbGRlciIsImF2YWlsYWJsZSIsInNldCIsImlkcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImFkZCIsImZpbHRlciIsImhhcyIsInJlbW92ZUNoaWxkIiwibGFzdEluZGV4IiwibGVuZ3RoIiwibWF0Y2hlZEVudHJ5IiwiaSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLEVBQWtDQyxjQUFsQyxRQUF3RCxhQUF4RDtBQUVBLE9BQU8sSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7O0FBRVAsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLGVBQWpDLEVBQWtEO0FBQ2hELE1BQU1DLElBQUksR0FBR1IsT0FBTyxDQUFDUyxHQUFSLENBQVlILE1BQVosQ0FBYjtBQUNBLE1BQU1JLFNBQVMsR0FBR0YsSUFBSSxDQUFDRSxTQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBR1QsY0FBYyxDQUFDTSxJQUFJLENBQUNHLE9BQU4sQ0FBOUI7QUFFQUosRUFBQUEsZUFBZSxDQUFDSyxVQUFoQixDQUEyQkMsWUFBM0IsQ0FBd0NQLE1BQXhDLEVBQWdEQyxlQUFlLENBQUNPLFdBQWhFO0FBRUEsTUFBSUMsUUFBUSxHQUFHVCxNQUFmO0FBQ0EsTUFBSVUsSUFBSSxHQUFHTixTQUFYOztBQUNBLFNBQU9NLElBQVAsRUFBYTtBQUNYLFFBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRixXQUF0QjtBQUNBQyxJQUFBQSxRQUFRLENBQUNILFVBQVQsQ0FBb0JDLFlBQXBCLENBQWlDRyxJQUFqQyxFQUF1Q0QsUUFBUSxDQUFDRCxXQUFoRDtBQUNBQyxJQUFBQSxRQUFRLEdBQUdDLElBQVg7QUFDQUEsSUFBQUEsSUFBSSxHQUFHQyxRQUFRLEtBQUtOLE9BQU8sQ0FBQ0csV0FBckIsSUFBb0NHLFFBQTNDO0FBQ0Q7QUFDRjs7QUFFRCxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCYixNQUE1QixFQUFvQ2MsS0FBcEMsRUFBMkNDLFlBQTNDLEVBQXlEO0FBQ3RFLE1BQUlDLFdBQVcsR0FBR25CLFFBQVEsQ0FBQ00sR0FBVCxDQUFhSCxNQUFiLENBQWxCO0FBQ0EsTUFBTWlCLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FBa0I7QUFDMUNDLE1BQUFBLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNOLElBQXJDLEVBQTJDLElBQTNDLElBQW1EQSxJQUFJLENBQUNFLEVBQXhELEdBQTZERCxLQUR2QjtBQUUxQ04sTUFBQUEsS0FBSyxFQUFFSyxJQUZtQztBQUcxQ08sTUFBQUEsV0FBVyxFQUFFLElBSDZCO0FBSTFDQyxNQUFBQSxTQUFTLEVBQUU7QUFKK0IsS0FBbEI7QUFBQSxHQUFWLENBQWhCO0FBT0E5QixFQUFBQSxRQUFRLENBQUMrQixHQUFULENBQWE1QixNQUFiLEVBQXFCaUIsT0FBckI7O0FBRUEsTUFBSUQsV0FBSixFQUFpQjtBQUNmLFFBQU1hLEdBQUcsR0FBRyxJQUFJQyxHQUFKLEVBQVo7QUFDQWIsSUFBQUEsT0FBTyxDQUFDYyxPQUFSLENBQWdCLFVBQUFDLEtBQUs7QUFBQSxhQUFJSCxHQUFHLENBQUNJLEdBQUosQ0FBUUQsS0FBSyxDQUFDWCxFQUFkLENBQUo7QUFBQSxLQUFyQjtBQUVBTCxJQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ2tCLE1BQVosQ0FBbUIsVUFBQUYsS0FBSyxFQUFJO0FBQ3hDLFVBQUksQ0FBQ0gsR0FBRyxDQUFDTSxHQUFKLENBQVFILEtBQUssQ0FBQ1gsRUFBZCxDQUFMLEVBQXdCO0FBQ3RCMUIsUUFBQUEsY0FBYyxDQUFDcUMsS0FBSyxDQUFDTixXQUFQLENBQWQ7QUFDQU0sUUFBQUEsS0FBSyxDQUFDTixXQUFOLENBQWtCcEIsVUFBbEIsQ0FBNkI4QixXQUE3QixDQUF5Q0osS0FBSyxDQUFDTixXQUEvQztBQUNBLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNELEtBUmEsQ0FBZDtBQVNEOztBQUVELE1BQUl6QixlQUFlLEdBQUdELE1BQXRCO0FBQ0EsTUFBTXFDLFNBQVMsR0FBR3ZCLEtBQUssQ0FBQ3dCLE1BQU4sR0FBZSxDQUFqQztBQUNBLE1BQU1wQyxJQUFJLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSCxNQUFaLENBQWI7O0FBRUEsT0FBSyxJQUFJb0IsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILE9BQU8sQ0FBQ3FCLE1BQXBDLEVBQTRDbEIsS0FBSyxJQUFJLENBQXJELEVBQXdEO0FBQ3RELFFBQU1ZLEtBQUssR0FBR2YsT0FBTyxDQUFDRyxLQUFELENBQXJCO0FBQ0EsUUFBSW1CLFlBQVksU0FBaEI7O0FBQ0EsUUFBSXZCLFdBQUosRUFBaUI7QUFDZixXQUFLLElBQUl3QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeEIsV0FBVyxDQUFDc0IsTUFBaEMsRUFBd0NFLENBQUMsSUFBSSxDQUE3QyxFQUFnRDtBQUM5QyxZQUFJeEIsV0FBVyxDQUFDd0IsQ0FBRCxDQUFYLENBQWViLFNBQWYsSUFBNEJYLFdBQVcsQ0FBQ3dCLENBQUQsQ0FBWCxDQUFlbkIsRUFBZixLQUFzQlcsS0FBSyxDQUFDWCxFQUE1RCxFQUFnRTtBQUM5RGtCLFVBQUFBLFlBQVksR0FBR3ZCLFdBQVcsQ0FBQ3dCLENBQUQsQ0FBMUI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJZCxXQUFXLFNBQWY7O0FBQ0EsUUFBSWEsWUFBSixFQUFrQjtBQUNoQkEsTUFBQUEsWUFBWSxDQUFDWixTQUFiLEdBQXlCLEtBQXpCO0FBQ0FELE1BQUFBLFdBQVcsR0FBR2EsWUFBWSxDQUFDYixXQUEzQjs7QUFFQSxVQUFJQSxXQUFXLENBQUN6QixlQUFaLEtBQWdDQSxlQUFwQyxFQUFxRDtBQUNuREYsUUFBQUEsZUFBZSxDQUFDMkIsV0FBRCxFQUFjekIsZUFBZCxDQUFmO0FBQ0Q7O0FBQ0QsVUFBSXNDLFlBQVksQ0FBQ3pCLEtBQWIsS0FBdUJrQixLQUFLLENBQUNsQixLQUFqQyxFQUF3QztBQUN0Q0MsUUFBQUEsWUFBWSxDQUFDRixJQUFELEVBQU9hLFdBQVAsRUFBb0JNLEtBQUssQ0FBQ2xCLEtBQTFCLENBQVo7QUFDRDtBQUNGLEtBVkQsTUFVTztBQUNMWSxNQUFBQSxXQUFXLEdBQUdlLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixFQUF4QixDQUFkO0FBQ0F6QyxNQUFBQSxlQUFlLENBQUNLLFVBQWhCLENBQTJCQyxZQUEzQixDQUNFbUIsV0FERixFQUVFekIsZUFBZSxDQUFDTyxXQUZsQjtBQUlBTyxNQUFBQSxZQUFZLENBQUNGLElBQUQsRUFBT2EsV0FBUCxFQUFvQk0sS0FBSyxDQUFDbEIsS0FBMUIsQ0FBWjtBQUNEOztBQUVEYixJQUFBQSxlQUFlLEdBQUdMLGNBQWMsQ0FDOUJGLE9BQU8sQ0FBQ1MsR0FBUixDQUFZdUIsV0FBWixFQUF5QnJCLE9BQXpCLElBQW9DcUIsV0FETixDQUFoQztBQUlBLFFBQUlOLEtBQUssS0FBSyxDQUFkLEVBQWlCbEIsSUFBSSxDQUFDRSxTQUFMLEdBQWlCc0IsV0FBakI7QUFDakIsUUFBSU4sS0FBSyxLQUFLaUIsU0FBZCxFQUF5Qm5DLElBQUksQ0FBQ0csT0FBTCxHQUFlSixlQUFmO0FBRXpCK0IsSUFBQUEsS0FBSyxDQUFDTixXQUFOLEdBQW9CQSxXQUFwQjtBQUNEOztBQUVELE1BQUlWLFdBQUosRUFBaUI7QUFDZkEsSUFBQUEsV0FBVyxDQUFDZSxPQUFaLENBQW9CLFVBQUFDLEtBQUssRUFBSTtBQUMzQixVQUFJQSxLQUFLLENBQUNMLFNBQVYsRUFBcUI7QUFDbkJoQyxRQUFBQSxjQUFjLENBQUNxQyxLQUFLLENBQUNOLFdBQVAsQ0FBZDtBQUNBTSxRQUFBQSxLQUFLLENBQUNOLFdBQU4sQ0FBa0JwQixVQUFsQixDQUE2QjhCLFdBQTdCLENBQXlDSixLQUFLLENBQUNOLFdBQS9DO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlLCBnZXRUZW1wbGF0ZUVuZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuXG5leHBvcnQgY29uc3QgYXJyYXlNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBtb3ZlUGxhY2Vob2xkZXIodGFyZ2V0LCBwcmV2aW91c1NpYmxpbmcpIHtcbiAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICBjb25zdCBlbmROb2RlID0gZ2V0VGVtcGxhdGVFbmQoZGF0YS5lbmROb2RlKTtcblxuICBwcmV2aW91c1NpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0LCBwcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcpO1xuXG4gIGxldCBwcmV2Tm9kZSA9IHRhcmdldDtcbiAgbGV0IG5vZGUgPSBzdGFydE5vZGU7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIHByZXZOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHByZXZOb2RlLm5leHRTaWJsaW5nKTtcbiAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgbm9kZSA9IG5leHROb2RlICE9PSBlbmROb2RlLm5leHRTaWJsaW5nICYmIG5leHROb2RlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlLCByZXNvbHZlVmFsdWUpIHtcbiAgbGV0IGxhc3RFbnRyaWVzID0gYXJyYXlNYXAuZ2V0KHRhcmdldCk7XG4gIGNvbnN0IGVudHJpZXMgPSB2YWx1ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgIGlkOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaXRlbSwgXCJpZFwiKSA/IGl0ZW0uaWQgOiBpbmRleCxcbiAgICB2YWx1ZTogaXRlbSxcbiAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICBhdmFpbGFibGU6IHRydWUsXG4gIH0pKTtcblxuICBhcnJheU1hcC5zZXQodGFyZ2V0LCBlbnRyaWVzKTtcblxuICBpZiAobGFzdEVudHJpZXMpIHtcbiAgICBjb25zdCBpZHMgPSBuZXcgU2V0KCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IGlkcy5hZGQoZW50cnkuaWQpKTtcblxuICAgIGxhc3RFbnRyaWVzID0gbGFzdEVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IHtcbiAgICAgIGlmICghaWRzLmhhcyhlbnRyeS5pZCkpIHtcbiAgICAgICAgcmVtb3ZlVGVtcGxhdGUoZW50cnkucGxhY2Vob2xkZXIpO1xuICAgICAgICBlbnRyeS5wbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQ7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHZhbHVlLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbnRyaWVzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgbGV0IG1hdGNoZWRFbnRyeTtcbiAgICBpZiAobGFzdEVudHJpZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGxhc3RFbnRyaWVzW2ldLmF2YWlsYWJsZSAmJiBsYXN0RW50cmllc1tpXS5pZCA9PT0gZW50cnkuaWQpIHtcbiAgICAgICAgICBtYXRjaGVkRW50cnkgPSBsYXN0RW50cmllc1tpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwbGFjZWhvbGRlcjtcbiAgICBpZiAobWF0Y2hlZEVudHJ5KSB7XG4gICAgICBtYXRjaGVkRW50cnkuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICBwbGFjZWhvbGRlciA9IG1hdGNoZWRFbnRyeS5wbGFjZWhvbGRlcjtcblxuICAgICAgaWYgKHBsYWNlaG9sZGVyLnByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIG1vdmVQbGFjZWhvbGRlcihwbGFjZWhvbGRlciwgcHJldmlvdXNTaWJsaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaGVkRW50cnkudmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBwbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgICAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBwbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU2libGluZyA9IGdldFRlbXBsYXRlRW5kKFxuICAgICAgZGF0YU1hcC5nZXQocGxhY2Vob2xkZXIpLmVuZE5vZGUgfHwgcGxhY2Vob2xkZXIsXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkgZGF0YS5zdGFydE5vZGUgPSBwbGFjZWhvbGRlcjtcbiAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkgZGF0YS5lbmROb2RlID0gcHJldmlvdXNTaWJsaW5nO1xuXG4gICAgZW50cnkucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChsYXN0RW50cmllcykge1xuICAgIGxhc3RFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmF2YWlsYWJsZSkge1xuICAgICAgICByZW1vdmVUZW1wbGF0ZShlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICAgIGVudHJ5LnBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZW50cnkucGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/class.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/class.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveClassList; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function normalizeValue(value) {
  var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (Array.isArray(value)) {
    value.forEach(function (className) {
      return set.add(className);
    });
  } else if (value !== null && _typeof(value) === "object") {
    Object.keys(value).forEach(function (key) {
      return value[key] && set.add(key);
    });
  } else {
    set.add(value);
  }

  return set;
}

var classMap = new WeakMap();
function resolveClassList(host, target, value) {
  var previousList = classMap.get(target) || new Set();
  var list = normalizeValue(value);
  classMap.set(target, list);
  list.forEach(function (className) {
    target.classList.add(className);
    previousList.delete(className);
  });
  previousList.forEach(function (className) {
    target.classList.remove(className);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvY2xhc3MuanMiXSwibmFtZXMiOlsibm9ybWFsaXplVmFsdWUiLCJ2YWx1ZSIsInNldCIsIlNldCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY2xhc3NNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZUNsYXNzTGlzdCIsImhvc3QiLCJ0YXJnZXQiLCJwcmV2aW91c0xpc3QiLCJnZXQiLCJsaXN0IiwiY2xhc3NMaXN0IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWdEO0FBQUEsTUFBakJDLEdBQWlCLHVFQUFYLElBQUlDLEdBQUosRUFBVzs7QUFDOUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsSUFBQUEsS0FBSyxDQUFDSyxPQUFOLENBQWMsVUFBQUMsU0FBUztBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sR0FBSixDQUFRRCxTQUFSLENBQUo7QUFBQSxLQUF2QjtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQXZDLEVBQWlEO0FBQ3REUSxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVQsS0FBWixFQUFtQkssT0FBbkIsQ0FBMkIsVUFBQUssR0FBRztBQUFBLGFBQUlWLEtBQUssQ0FBQ1UsR0FBRCxDQUFMLElBQWNULEdBQUcsQ0FBQ00sR0FBSixDQUFRRyxHQUFSLENBQWxCO0FBQUEsS0FBOUI7QUFDRCxHQUZNLE1BRUE7QUFDTFQsSUFBQUEsR0FBRyxDQUFDTSxHQUFKLENBQVFQLEtBQVI7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsSUFBTVUsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ0MsTUFBaEMsRUFBd0NmLEtBQXhDLEVBQStDO0FBQzVELE1BQU1nQixZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sR0FBVCxDQUFhRixNQUFiLEtBQXdCLElBQUliLEdBQUosRUFBN0M7QUFDQSxNQUFNZ0IsSUFBSSxHQUFHbkIsY0FBYyxDQUFDQyxLQUFELENBQTNCO0FBRUFXLEVBQUFBLFFBQVEsQ0FBQ1YsR0FBVCxDQUFhYyxNQUFiLEVBQXFCRyxJQUFyQjtBQUVBQSxFQUFBQSxJQUFJLENBQUNiLE9BQUwsQ0FBYSxVQUFBQyxTQUFTLEVBQUk7QUFDeEJTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlosR0FBakIsQ0FBcUJELFNBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0ksTUFBYixDQUFvQmQsU0FBcEI7QUFDRCxHQUhEO0FBS0FVLEVBQUFBLFlBQVksQ0FBQ1gsT0FBYixDQUFxQixVQUFBQyxTQUFTLEVBQUk7QUFDaENTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0JmLFNBQXhCO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUsIHNldCA9IG5ldyBTZXQoKSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBzZXQuYWRkKGNsYXNzTmFtZSkpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB2YWx1ZVtrZXldICYmIHNldC5hZGQoa2V5KSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0LmFkZCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG5jb25zdCBjbGFzc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVDbGFzc0xpc3QoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkge1xuICBjb25zdCBwcmV2aW91c0xpc3QgPSBjbGFzc01hcC5nZXQodGFyZ2V0KSB8fCBuZXcgU2V0KCk7XG4gIGNvbnN0IGxpc3QgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgY2xhc3NNYXAuc2V0KHRhcmdldCwgbGlzdCk7XG5cbiAgbGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwcmV2aW91c0xpc3QuZGVsZXRlKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIHByZXZpb3VzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/event.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/event.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveEventListener; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var targets = new WeakMap();
function resolveEventListener(eventType) {
  return function (host, target, value, lastValue) {
    if (lastValue) {
      var eventMap = targets.get(target);

      if (eventMap) {
        target.removeEventListener(eventType, eventMap.get(lastValue), lastValue.options !== undefined ? lastValue.options : false);
      }
    }

    if (value) {
      if (typeof value !== "function") {
        throw Error("Event listener must be a function: ".concat(_typeof(value)));
      }

      var _eventMap = targets.get(target);

      if (!_eventMap) {
        _eventMap = new WeakMap();
        targets.set(target, _eventMap);
      }

      var callback = value.bind(null, host);

      _eventMap.set(value, callback);

      target.addEventListener(eventType, callback, value.options !== undefined ? value.options : false);
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvZXZlbnQuanMiXSwibmFtZXMiOlsidGFyZ2V0cyIsIldlYWtNYXAiLCJyZXNvbHZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhvc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsImV2ZW50TWFwIiwiZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJFcnJvciIsInNldCIsImNhbGxiYWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFFQSxlQUFlLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5QztBQUN0RCxTQUFPLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCQyxTQUF0QixFQUFvQztBQUN6QyxRQUFJQSxTQUFKLEVBQWU7QUFDYixVQUFNQyxRQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWpCOztBQUNBLFVBQUlHLFFBQUosRUFBYztBQUNaSCxRQUFBQSxNQUFNLENBQUNLLG1CQUFQLENBQ0VQLFNBREYsRUFFRUssUUFBUSxDQUFDQyxHQUFULENBQWFGLFNBQWIsQ0FGRixFQUdFQSxTQUFTLENBQUNJLE9BQVYsS0FBc0JDLFNBQXRCLEdBQWtDTCxTQUFTLENBQUNJLE9BQTVDLEdBQXNELEtBSHhEO0FBS0Q7QUFDRjs7QUFFRCxRQUFJTCxLQUFKLEVBQVc7QUFDVCxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsY0FBTU8sS0FBSyxzREFBOENQLEtBQTlDLEdBQVg7QUFDRDs7QUFFRCxVQUFJRSxTQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWY7O0FBQ0EsVUFBSSxDQUFDRyxTQUFMLEVBQWU7QUFDYkEsUUFBQUEsU0FBUSxHQUFHLElBQUlQLE9BQUosRUFBWDtBQUNBRCxRQUFBQSxPQUFPLENBQUNjLEdBQVIsQ0FBWVQsTUFBWixFQUFvQkcsU0FBcEI7QUFDRDs7QUFFRCxVQUFNTyxRQUFRLEdBQUdULEtBQUssQ0FBQ1UsSUFBTixDQUFXLElBQVgsRUFBaUJaLElBQWpCLENBQWpCOztBQUNBSSxNQUFBQSxTQUFRLENBQUNNLEdBQVQsQ0FBYVIsS0FBYixFQUFvQlMsUUFBcEI7O0FBRUFWLE1BQUFBLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FDRWQsU0FERixFQUVFWSxRQUZGLEVBR0VULEtBQUssQ0FBQ0ssT0FBTixLQUFrQkMsU0FBbEIsR0FBOEJOLEtBQUssQ0FBQ0ssT0FBcEMsR0FBOEMsS0FIaEQ7QUFLRDtBQUNGLEdBaENEO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGhvc3QsIHRhcmdldCwgdmFsdWUsIGxhc3RWYWx1ZSkgPT4ge1xuICAgIGlmIChsYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwID0gdGFyZ2V0cy5nZXQodGFyZ2V0KTtcbiAgICAgIGlmIChldmVudE1hcCkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgZXZlbnRNYXAuZ2V0KGxhc3RWYWx1ZSksXG4gICAgICAgICAgbGFzdFZhbHVlLm9wdGlvbnMgIT09IHVuZGVmaW5lZCA/IGxhc3RWYWx1ZS5vcHRpb25zIDogZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYEV2ZW50IGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgdmFsdWV9YCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE1hcCA9IHRhcmdldHMuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIWV2ZW50TWFwKSB7XG4gICAgICAgIGV2ZW50TWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGFyZ2V0cy5zZXQodGFyZ2V0LCBldmVudE1hcCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUuYmluZChudWxsLCBob3N0KTtcbiAgICAgIGV2ZW50TWFwLnNldCh2YWx1ZSwgY2FsbGJhY2spO1xuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgdmFsdWUub3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gdmFsdWUub3B0aW9ucyA6IGZhbHNlLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/property.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveProperty; });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/hybrids/esm/template/resolvers/event.js");
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class.js */ "./node_modules/hybrids/esm/template/resolvers/class.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.js */ "./node_modules/hybrids/esm/template/resolvers/style.js");



function resolveProperty(attrName, propertyName, isSVG) {
  if (propertyName.substr(0, 2) === "on") {
    var eventType = propertyName.substr(2);
    return Object(_event_js__WEBPACK_IMPORTED_MODULE_0__["default"])(eventType);
  }

  switch (attrName) {
    case "class":
      return _class_js__WEBPACK_IMPORTED_MODULE_1__["default"];

    case "style":
      return _style_js__WEBPACK_IMPORTED_MODULE_2__["default"];

    default:
      return function (host, target, value) {
        if (!isSVG && !(target instanceof SVGElement) && propertyName in target) {
          if (target[propertyName] !== value) {
            target[propertyName] = value;
          }
        } else if (value === false || value === undefined || value === null) {
          target.removeAttribute(attrName);
        } else {
          var attrValue = value === true ? "" : String(value);
          target.setAttribute(attrName, attrValue);
        }
      };
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvcHJvcGVydHkuanMiXSwibmFtZXMiOlsicmVzb2x2ZUV2ZW50TGlzdGVuZXIiLCJyZXNvbHZlQ2xhc3NMaXN0IiwicmVzb2x2ZVN0eWxlTGlzdCIsInJlc29sdmVQcm9wZXJ0eSIsImF0dHJOYW1lIiwicHJvcGVydHlOYW1lIiwiaXNTVkciLCJzdWJzdHIiLCJldmVudFR5cGUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJTVkdFbGVtZW50IiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiYXR0clZhbHVlIiwiU3RyaW5nIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxvQkFBUCxNQUFpQyxZQUFqQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLFlBQTdCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsWUFBN0I7QUFFQSxlQUFlLFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxZQUFuQyxFQUFpREMsS0FBakQsRUFBd0Q7QUFDckUsTUFBSUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3RDLFFBQU1DLFNBQVMsR0FBR0gsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLENBQWxCO0FBQ0EsV0FBT1Asb0JBQW9CLENBQUNRLFNBQUQsQ0FBM0I7QUFDRDs7QUFFRCxVQUFRSixRQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsYUFBT0gsZ0JBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBT0MsZ0JBQVA7O0FBQ0Y7QUFDRSxhQUFPLFVBQUNPLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQzlCLFlBQ0UsQ0FBQ0wsS0FBRCxJQUNBLEVBQUVJLE1BQU0sWUFBWUUsVUFBcEIsQ0FEQSxJQUVBUCxZQUFZLElBQUlLLE1BSGxCLEVBSUU7QUFDQSxjQUFJQSxNQUFNLENBQUNMLFlBQUQsQ0FBTixLQUF5Qk0sS0FBN0IsRUFBb0M7QUFDbENELFlBQUFBLE1BQU0sQ0FBQ0wsWUFBRCxDQUFOLEdBQXVCTSxLQUF2QjtBQUNEO0FBQ0YsU0FSRCxNQVFPLElBQUlBLEtBQUssS0FBSyxLQUFWLElBQW1CQSxLQUFLLEtBQUtFLFNBQTdCLElBQTBDRixLQUFLLEtBQUssSUFBeEQsRUFBOEQ7QUFDbkVELFVBQUFBLE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QlYsUUFBdkI7QUFDRCxTQUZNLE1BRUE7QUFDTCxjQUFNVyxTQUFTLEdBQUdKLEtBQUssS0FBSyxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCSyxNQUFNLENBQUNMLEtBQUQsQ0FBOUM7QUFDQUQsVUFBQUEsTUFBTSxDQUFDTyxZQUFQLENBQW9CYixRQUFwQixFQUE4QlcsU0FBOUI7QUFDRDtBQUNGLE9BZkQ7QUFOSjtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXNvbHZlRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHJlc29sdmVDbGFzc0xpc3QgZnJvbSBcIi4vY2xhc3MuanNcIjtcbmltcG9ydCByZXNvbHZlU3R5bGVMaXN0IGZyb20gXCIuL3N0eWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVQcm9wZXJ0eShhdHRyTmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRykge1xuICBpZiAocHJvcGVydHlOYW1lLnN1YnN0cigwLCAyKSA9PT0gXCJvblwiKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gcHJvcGVydHlOYW1lLnN1YnN0cigyKTtcbiAgICByZXR1cm4gcmVzb2x2ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAoYXR0ck5hbWUpIHtcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICAgIHJldHVybiByZXNvbHZlQ2xhc3NMaXN0O1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZUxpc3Q7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzU1ZHICYmXG4gICAgICAgICAgISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJlxuICAgICAgICAgIHByb3BlcnR5TmFtZSBpbiB0YXJnZXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eU5hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IFwiXCIgOiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/style.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/style.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveStyle; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/hybrids/esm/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var styleMap = new WeakMap();
function resolveStyle(host, target, value) {
  if (value === null || _typeof(value) !== "object") {
    throw TypeError("Style value must be an object in ".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["stringifyElement"])(target), ":"), value);
  }

  var previousMap = styleMap.get(target) || new Map();
  var nextMap = Object.keys(value).reduce(function (map, key) {
    var dashKey = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(key);
    var styleValue = value[key];

    if (!styleValue && styleValue !== 0) {
      target.style.removeProperty(dashKey);
    } else {
      target.style.setProperty(dashKey, styleValue);
    }

    map.set(dashKey, styleValue);
    previousMap.delete(dashKey);
    return map;
  }, new Map());
  previousMap.forEach(function (styleValue, key) {
    target.style[key] = "";
  });
  styleMap.set(target, nextMap);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvc3R5bGUuanMiXSwibmFtZXMiOlsiY2FtZWxUb0Rhc2giLCJzdHJpbmdpZnlFbGVtZW50Iiwic3R5bGVNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZVN0eWxlIiwiaG9zdCIsInRhcmdldCIsInZhbHVlIiwiVHlwZUVycm9yIiwicHJldmlvdXNNYXAiLCJnZXQiLCJNYXAiLCJuZXh0TWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm1hcCIsImtleSIsImRhc2hLZXkiLCJzdHlsZVZhbHVlIiwic3R5bGUiLCJyZW1vdmVQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwic2V0IiwiZGVsZXRlIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULEVBQXNCQyxnQkFBdEIsUUFBOEMsZ0JBQTlDO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBSUEsS0FBSyxLQUFLLElBQVYsSUFBa0IsUUFBT0EsS0FBUCxNQUFpQixRQUF2QyxFQUFpRDtBQUMvQyxVQUFNQyxTQUFTLDRDQUN1QlAsZ0JBQWdCLENBQUNLLE1BQUQsQ0FEdkMsUUFFYkMsS0FGYSxDQUFmO0FBSUQ7O0FBRUQsTUFBTUUsV0FBVyxHQUFHUCxRQUFRLENBQUNRLEdBQVQsQ0FBYUosTUFBYixLQUF3QixJQUFJSyxHQUFKLEVBQTVDO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBWixFQUFtQlEsTUFBbkIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEQsUUFBTUMsT0FBTyxHQUFHbEIsV0FBVyxDQUFDaUIsR0FBRCxDQUEzQjtBQUNBLFFBQU1FLFVBQVUsR0FBR1osS0FBSyxDQUFDVSxHQUFELENBQXhCOztBQUVBLFFBQUksQ0FBQ0UsVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkNiLE1BQUFBLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhQyxjQUFiLENBQTRCSCxPQUE1QjtBQUNELEtBRkQsTUFFTztBQUNMWixNQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUUsV0FBYixDQUF5QkosT0FBekIsRUFBa0NDLFVBQWxDO0FBQ0Q7O0FBRURILElBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTCxPQUFSLEVBQWlCQyxVQUFqQjtBQUNBVixJQUFBQSxXQUFXLENBQUNlLE1BQVosQ0FBbUJOLE9BQW5CO0FBRUEsV0FBT0YsR0FBUDtBQUNELEdBZGUsRUFjYixJQUFJTCxHQUFKLEVBZGEsQ0FBaEI7QUFnQkFGLEVBQUFBLFdBQVcsQ0FBQ2dCLE9BQVosQ0FBb0IsVUFBQ04sVUFBRCxFQUFhRixHQUFiLEVBQXFCO0FBQ3ZDWCxJQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUgsR0FBYixJQUFvQixFQUFwQjtBQUNELEdBRkQ7QUFJQWYsRUFBQUEsUUFBUSxDQUFDcUIsR0FBVCxDQUFhakIsTUFBYixFQUFxQk0sT0FBckI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoLCBzdHJpbmdpZnlFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzLmpzXCI7XG5cbmNvbnN0IHN0eWxlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIGBTdHlsZSB2YWx1ZSBtdXN0IGJlIGFuIG9iamVjdCBpbiAke3N0cmluZ2lmeUVsZW1lbnQodGFyZ2V0KX06YCxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c01hcCA9IHN0eWxlTWFwLmdldCh0YXJnZXQpIHx8IG5ldyBNYXAoKTtcblxuICBjb25zdCBuZXh0TWFwID0gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcbiAgICBjb25zdCBkYXNoS2V5ID0gY2FtZWxUb0Rhc2goa2V5KTtcbiAgICBjb25zdCBzdHlsZVZhbHVlID0gdmFsdWVba2V5XTtcblxuICAgIGlmICghc3R5bGVWYWx1ZSAmJiBzdHlsZVZhbHVlICE9PSAwKSB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShkYXNoS2V5LCBzdHlsZVZhbHVlKTtcbiAgICB9XG5cbiAgICBtYXAuc2V0KGRhc2hLZXksIHN0eWxlVmFsdWUpO1xuICAgIHByZXZpb3VzTWFwLmRlbGV0ZShkYXNoS2V5KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH0sIG5ldyBNYXAoKSk7XG5cbiAgcHJldmlvdXNNYXAuZm9yRWFjaCgoc3R5bGVWYWx1ZSwga2V5KSA9PiB7XG4gICAgdGFyZ2V0LnN0eWxlW2tleV0gPSBcIlwiO1xuICB9KTtcblxuICBzdHlsZU1hcC5zZXQodGFyZ2V0LCBuZXh0TWFwKTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/resolvers/value.js":
/*!**************************************************************!*\
  !*** ./node_modules/hybrids/esm/template/resolvers/value.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveValue; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/hybrids/esm/template/utils.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/hybrids/esm/template/resolvers/array.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function resolveValue(host, target, value) {
  var type = Array.isArray(value) ? "array" : _typeof(value);
  var data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].get(target, {});

  if (data.type !== type) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTemplate"])(target);
    if (type === "array") _array_js__WEBPACK_IMPORTED_MODULE_1__["arrayMap"].delete(target);
    data = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dataMap"].set(target, {
      type: type
    });

    if (target.textContent !== "") {
      target.textContent = "";
    }
  }

  switch (type) {
    case "function":
      value(host, target);
      break;

    case "array":
      Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(host, target, value, resolveValue);
      break;

    default:
      target.textContent = type === "number" || value ? value : "";
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvdmFsdWUuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZUFycmF5IiwiYXJyYXlNYXAiLCJyZXNvbHZlVmFsdWUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImdldCIsImRlbGV0ZSIsInNldCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLFFBQXdDLGFBQXhDO0FBQ0EsT0FBT0MsWUFBUCxJQUF1QkMsUUFBdkIsUUFBdUMsWUFBdkM7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsS0FBZCxJQUF1QixPQUF2QixXQUF3Q0EsS0FBeEMsQ0FBYjtBQUNBLE1BQUlJLElBQUksR0FBR1gsT0FBTyxDQUFDWSxHQUFSLENBQVlOLE1BQVosRUFBb0IsRUFBcEIsQ0FBWDs7QUFFQSxNQUFJSyxJQUFJLENBQUNILElBQUwsS0FBY0EsSUFBbEIsRUFBd0I7QUFDdEJQLElBQUFBLGNBQWMsQ0FBQ0ssTUFBRCxDQUFkO0FBQ0EsUUFBSUUsSUFBSSxLQUFLLE9BQWIsRUFBc0JMLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQlAsTUFBaEI7QUFFdEJLLElBQUFBLElBQUksR0FBR1gsT0FBTyxDQUFDYyxHQUFSLENBQVlSLE1BQVosRUFBb0I7QUFBRUUsTUFBQUEsSUFBSSxFQUFKQTtBQUFGLEtBQXBCLENBQVA7O0FBRUEsUUFBSUYsTUFBTSxDQUFDUyxXQUFQLEtBQXVCLEVBQTNCLEVBQStCO0FBQzdCVCxNQUFBQSxNQUFNLENBQUNTLFdBQVAsR0FBcUIsRUFBckI7QUFDRDtBQUNGOztBQUVELFVBQVFQLElBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRUQsTUFBQUEsS0FBSyxDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBTDtBQUNBOztBQUNGLFNBQUssT0FBTDtBQUNFSixNQUFBQSxZQUFZLENBQUNHLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCSCxZQUF0QixDQUFaO0FBQ0E7O0FBQ0Y7QUFDRUUsTUFBQUEsTUFBTSxDQUFDUyxXQUFQLEdBQXFCUCxJQUFJLEtBQUssUUFBVCxJQUFxQkQsS0FBckIsR0FBNkJBLEtBQTdCLEdBQXFDLEVBQTFEO0FBUko7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgcmVzb2x2ZUFycmF5LCB7IGFycmF5TWFwIH0gZnJvbSBcIi4vYXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gXCJhcnJheVwiIDogdHlwZW9mIHZhbHVlO1xuICBsZXQgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCwge30pO1xuXG4gIGlmIChkYXRhLnR5cGUgIT09IHR5cGUpIHtcbiAgICByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpO1xuICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpIGFycmF5TWFwLmRlbGV0ZSh0YXJnZXQpO1xuXG4gICAgZGF0YSA9IGRhdGFNYXAuc2V0KHRhcmdldCwgeyB0eXBlIH0pO1xuXG4gICAgaWYgKHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIHZhbHVlKGhvc3QsIHRhcmdldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlLCByZXNvbHZlVmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgdmFsdWUgPyB2YWx1ZSA6IFwiXCI7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/hybrids/esm/template/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/hybrids/esm/template/utils.js ***!
  \****************************************************/
/*! exports provided: dataMap, getTemplateEnd, removeTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataMap", function() { return dataMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateEnd", function() { return getTemplateEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTemplate", function() { return removeTemplate; });
var map = new WeakMap();
var dataMap = {
  get: function get(key, defaultValue) {
    var value = map.get(key);
    if (value) return value;

    if (defaultValue) {
      map.set(key, defaultValue);
    }

    return defaultValue;
  },
  set: function set(key, value) {
    map.set(key, value);
    return value;
  }
};
function getTemplateEnd(node) {
  var data; // eslint-disable-next-line no-cond-assign

  while (node && (data = dataMap.get(node)) && data.endNode) {
    node = data.endNode;
  }

  return node;
}
function removeTemplate(target) {
  if (target.nodeType !== Node.TEXT_NODE) {
    var child = target.childNodes[0];

    while (child) {
      target.removeChild(child);
      child = target.childNodes[0];
    }
  } else {
    var data = dataMap.get(target);

    if (data.startNode) {
      var endNode = getTemplateEnd(data.endNode);
      var node = data.startNode;
      var lastNextSibling = endNode.nextSibling;

      while (node) {
        var nextSibling = node.nextSibling;
        node.parentNode.removeChild(node);
        node = nextSibling !== lastNextSibling && nextSibling;
      }
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXAiLCJXZWFrTWFwIiwiZGF0YU1hcCIsImdldCIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0IiwiZ2V0VGVtcGxhdGVFbmQiLCJub2RlIiwiZGF0YSIsImVuZE5vZGUiLCJyZW1vdmVUZW1wbGF0ZSIsInRhcmdldCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsImNoaWxkIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwic3RhcnROb2RlIiwibGFzdE5leHRTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBQ0EsT0FBTyxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLEdBRHFCLGVBQ2pCQyxHQURpQixFQUNaQyxZQURZLEVBQ0U7QUFDckIsUUFBTUMsS0FBSyxHQUFHTixHQUFHLENBQUNHLEdBQUosQ0FBUUMsR0FBUixDQUFkO0FBQ0EsUUFBSUUsS0FBSixFQUFXLE9BQU9BLEtBQVA7O0FBRVgsUUFBSUQsWUFBSixFQUFrQjtBQUNoQkwsTUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFILEdBQVIsRUFBYUMsWUFBYjtBQUNEOztBQUVELFdBQU9BLFlBQVA7QUFDRCxHQVZvQjtBQVdyQkUsRUFBQUEsR0FYcUIsZUFXakJILEdBWGlCLEVBV1pFLEtBWFksRUFXTDtBQUNkTixJQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUUgsR0FBUixFQUFhRSxLQUFiO0FBQ0EsV0FBT0EsS0FBUDtBQUNEO0FBZG9CLENBQWhCO0FBaUJQLE9BQU8sU0FBU0UsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDbkMsTUFBSUMsSUFBSixDQURtQyxDQUVuQzs7QUFDQSxTQUFPRCxJQUFJLEtBQUtDLElBQUksR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlNLElBQVosQ0FBWixDQUFKLElBQXNDQyxJQUFJLENBQUNDLE9BQWxELEVBQTJEO0FBQ3pERixJQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsT0FBWjtBQUNEOztBQUVELFNBQU9GLElBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0csY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsTUFBSUEsTUFBTSxDQUFDQyxRQUFQLEtBQW9CQyxJQUFJLENBQUNDLFNBQTdCLEVBQXdDO0FBQ3RDLFFBQUlDLEtBQUssR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLENBQWxCLENBQVo7O0FBQ0EsV0FBT0QsS0FBUCxFQUFjO0FBQ1pKLE1BQUFBLE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkYsS0FBbkI7QUFDQUEsTUFBQUEsS0FBSyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBUjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0wsUUFBTVIsSUFBSSxHQUFHUixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsTUFBWixDQUFiOztBQUVBLFFBQUlILElBQUksQ0FBQ1UsU0FBVCxFQUFvQjtBQUNsQixVQUFNVCxPQUFPLEdBQUdILGNBQWMsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFOLENBQTlCO0FBRUEsVUFBSUYsSUFBSSxHQUFHQyxJQUFJLENBQUNVLFNBQWhCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHVixPQUFPLENBQUNXLFdBQWhDOztBQUVBLGFBQU9iLElBQVAsRUFBYTtBQUNYLFlBQU1hLFdBQVcsR0FBR2IsSUFBSSxDQUFDYSxXQUF6QjtBQUNBYixRQUFBQSxJQUFJLENBQUNjLFVBQUwsQ0FBZ0JKLFdBQWhCLENBQTRCVixJQUE1QjtBQUNBQSxRQUFBQSxJQUFJLEdBQUdhLFdBQVcsS0FBS0QsZUFBaEIsSUFBbUNDLFdBQTFDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IGRhdGFNYXAgPSB7XG4gIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgbWFwLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSxcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUVuZChub2RlKSB7XG4gIGxldCBkYXRhO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKG5vZGUgJiYgKGRhdGEgPSBkYXRhTWFwLmdldChub2RlKSkgJiYgZGF0YS5lbmROb2RlKSB7XG4gICAgbm9kZSA9IGRhdGEuZW5kTm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbMF07XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1swXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG5cbiAgICBpZiAoZGF0YS5zdGFydE5vZGUpIHtcbiAgICAgIGNvbnN0IGVuZE5vZGUgPSBnZXRUZW1wbGF0ZUVuZChkYXRhLmVuZE5vZGUpO1xuXG4gICAgICBsZXQgbm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICAgICAgY29uc3QgbGFzdE5leHRTaWJsaW5nID0gZW5kTm9kZS5uZXh0U2libGluZztcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZyAhPT0gbGFzdE5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/hybrids/esm/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/hybrids/esm/utils.js ***!
  \*******************************************/
/*! exports provided: camelToDash, pascalToDash, dispatch, shadyCSS, stringifyElement, IS_IE, deferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDash", function() { return camelToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalToDash", function() { return pascalToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadyCSS", function() { return shadyCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyElement", function() { return stringifyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IE", function() { return IS_IE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferred", function() { return deferred; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var camelToDashMap = new Map();
function camelToDash(str) {
  var result = camelToDashMap.get(str);

  if (result === undefined) {
    result = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    camelToDashMap.set(str, result);
  }

  return result;
}
function pascalToDash(str) {
  return camelToDash(str.replace(/((?!([A-Z]{2}|^))[A-Z])/g, "-$1"));
}
function dispatch(host, eventType) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return host.dispatchEvent(new CustomEvent(eventType, _objectSpread({
    bubbles: false
  }, options)));
}
function shadyCSS(fn, fallback) {
  var shady = window.ShadyCSS;
  /* istanbul ignore next */

  if (shady && !shady.nativeShadow) {
    return fn(shady);
  }

  return fallback;
}
function stringifyElement(target) {
  return "<".concat(String(target.tagName).toLowerCase(), ">");
}
var IS_IE = ("ActiveXObject" in window);
var deferred = Promise.resolve();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaE1hcCIsIk1hcCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVzdWx0IiwiZ2V0IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2V0IiwicGFzY2FsVG9EYXNoIiwiZGlzcGF0Y2giLCJob3N0IiwiZXZlbnRUeXBlIiwib3B0aW9ucyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJzaGFkeUNTUyIsImZuIiwiZmFsbGJhY2siLCJzaGFkeSIsIndpbmRvdyIsIlNoYWR5Q1NTIiwibmF0aXZlU2hhZG93Iiwic3RyaW5naWZ5RWxlbWVudCIsInRhcmdldCIsIlN0cmluZyIsInRhZ05hbWUiLCJJU19JRSIsImRlZmVycmVkIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGNBQWMsR0FBRyxJQUFJQyxHQUFKLEVBQXZCO0FBQ0EsT0FBTyxTQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUMvQixNQUFJQyxNQUFNLEdBQUdKLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQkYsR0FBbkIsQ0FBYjs7QUFDQSxNQUFJQyxNQUFNLEtBQUtFLFNBQWYsRUFBMEI7QUFDeEJGLElBQUFBLE1BQU0sR0FBR0QsR0FBRyxDQUFDSSxPQUFKLENBQVksaUJBQVosRUFBK0IsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQVQ7QUFDQVIsSUFBQUEsY0FBYyxDQUFDUyxHQUFmLENBQW1CTixHQUFuQixFQUF3QkMsTUFBeEI7QUFDRDs7QUFDRCxTQUFPQSxNQUFQO0FBQ0Q7QUFFRCxPQUFPLFNBQVNNLFlBQVQsQ0FBc0JQLEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU9ELFdBQVcsQ0FBQ0MsR0FBRyxDQUFDSSxPQUFKLENBQVksMEJBQVosRUFBd0MsS0FBeEMsQ0FBRCxDQUFsQjtBQUNEO0FBRUQsT0FBTyxTQUFTSSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsU0FBeEIsRUFBaUQ7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDdEQsU0FBT0YsSUFBSSxDQUFDRyxhQUFMLENBQ0wsSUFBSUMsV0FBSixDQUFnQkgsU0FBaEI7QUFBNkJJLElBQUFBLE9BQU8sRUFBRTtBQUF0QyxLQUFnREgsT0FBaEQsRUFESyxDQUFQO0FBR0Q7QUFFRCxPQUFPLFNBQVNJLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxRQUF0QixFQUFnQztBQUNyQyxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBckI7QUFFQTs7QUFDQSxNQUFJRixLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDRyxZQUFwQixFQUFrQztBQUNoQyxXQUFPTCxFQUFFLENBQUNFLEtBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU9ELFFBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0ssZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ3ZDLG9CQUFXQyxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsT0FBUixDQUFOLENBQXVCcEIsV0FBdkIsRUFBWDtBQUNEO0FBRUQsT0FBTyxJQUFNcUIsS0FBSyxJQUFHLG1CQUFtQlAsTUFBdEIsQ0FBWDtBQUNQLE9BQU8sSUFBTVEsUUFBUSxHQUFHQyxPQUFPLENBQUNDLE9BQVIsRUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW1lbFRvRGFzaE1hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaChzdHIpIHtcbiAgbGV0IHJlc3VsdCA9IGNhbWVsVG9EYXNoTWFwLmdldChzdHIpO1xuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXN1bHQgPSBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNhbWVsVG9EYXNoTWFwLnNldChzdHIsIHJlc3VsdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbFRvRGFzaChzdHIpIHtcbiAgcmV0dXJuIGNhbWVsVG9EYXNoKHN0ci5yZXBsYWNlKC8oKD8hKFtBLVpdezJ9fF4pKVtBLVpdKS9nLCBcIi0kMVwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChob3N0LCBldmVudFR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gaG9zdC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHsgYnViYmxlczogZmFsc2UsIC4uLm9wdGlvbnMgfSksXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkeUNTUyhmbiwgZmFsbGJhY2spIHtcbiAgY29uc3Qgc2hhZHkgPSB3aW5kb3cuU2hhZHlDU1M7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHNoYWR5ICYmICFzaGFkeS5uYXRpdmVTaGFkb3cpIHtcbiAgICByZXR1cm4gZm4oc2hhZHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RWxlbWVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIGA8JHtTdHJpbmcodGFyZ2V0LnRhZ05hbWUpLnRvTG93ZXJDYXNlKCl9PmA7XG59XG5cbmV4cG9ydCBjb25zdCBJU19JRSA9IFwiQWN0aXZlWE9iamVjdFwiIGluIHdpbmRvdztcbmV4cG9ydCBjb25zdCBkZWZlcnJlZCA9IFByb21pc2UucmVzb2x2ZSgpO1xuIl19

/***/ }),

/***/ "./node_modules/ky/index.js":
/*!**********************************!*\
  !*** ./node_modules/ky/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*! MIT License © Sindre Sorhus */

const globals = {};

const getGlobal = property => {
	/* istanbul ignore next */
	if (typeof self !== 'undefined' && self && property in self) {
		return self;
	}

	/* istanbul ignore next */
	if (typeof window !== 'undefined' && window && property in window) {
		return window;
	}

	if (typeof global !== 'undefined' && global && property in global) {
		return global;
	}

	/* istanbul ignore next */
	if (typeof globalThis !== 'undefined' && globalThis) {
		return globalThis;
	}
};

const globalProperties = [
	'Headers',
	'Request',
	'Response',
	'ReadableStream',
	'fetch',
	'AbortController',
	'FormData'
];

for (const property of globalProperties) {
	Object.defineProperty(globals, property, {
		get() {
			const globalObject = getGlobal(property);
			const value = globalObject && globalObject[property];
			return typeof value === 'function' ? value.bind(globalObject) : value;
		}
	});
}

const isObject = value => value !== null && typeof value === 'object';
const supportsAbortController = typeof globals.AbortController === 'function';
const supportsStreams = typeof globals.ReadableStream === 'function';
const supportsFormData = typeof globals.FormData === 'function';

const mergeHeaders = (source1, source2) => {
	const result = new globals.Headers(source1);
	const isHeadersInstance = source2 instanceof globals.Headers;
	const source = new globals.Headers(source2);

	for (const [key, value] of source) {
		if ((isHeadersInstance && value === 'undefined') || value === undefined) {
			result.delete(key);
		} else {
			result.set(key, value);
		}
	}

	return result;
};

const deepMerge = (...sources) => {
	let returnValue = {};
	let headers = {};

	for (const source of sources) {
		if (Array.isArray(source)) {
			if (!(Array.isArray(returnValue))) {
				returnValue = [];
			}

			returnValue = [...returnValue, ...source];
		} else if (isObject(source)) {
			for (let [key, value] of Object.entries(source)) {
				if (isObject(value) && Reflect.has(returnValue, key)) {
					value = deepMerge(returnValue[key], value);
				}

				returnValue = {...returnValue, [key]: value};
			}

			if (isObject(source.headers)) {
				headers = mergeHeaders(headers, source.headers);
			}
		}

		returnValue.headers = headers;
	}

	return returnValue;
};

const requestMethods = [
	'get',
	'post',
	'put',
	'patch',
	'head',
	'delete'
];

const responseTypes = {
	json: 'application/json',
	text: 'text/*',
	formData: 'multipart/form-data',
	arrayBuffer: '*/*',
	blob: '*/*'
};

const retryMethods = [
	'get',
	'put',
	'head',
	'delete',
	'options',
	'trace'
];

const retryStatusCodes = [
	408,
	413,
	429,
	500,
	502,
	503,
	504
];

const retryAfterStatusCodes = [
	413,
	429,
	503
];

const stop = Symbol('stop');

class HTTPError extends Error {
	constructor(response) {
		// Set the message to the status text, such as Unauthorized,
		// with some fallbacks. This message should never be undefined.
		super(
			response.statusText ||
			String(
				(response.status === 0 || response.status) ?
					response.status : 'Unknown response error'
			)
		);
		this.name = 'HTTPError';
		this.response = response;
	}
}

class TimeoutError extends Error {
	constructor() {
		super('Request timed out');
		this.name = 'TimeoutError';
	}
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// `Promise.race()` workaround (#91)
const timeout = (promise, ms, abortController) =>
	new Promise((resolve, reject) => {
		const timeoutID = setTimeout(() => {
			if (abortController) {
				abortController.abort();
			}

			reject(new TimeoutError());
		}, ms);

		/* eslint-disable promise/prefer-await-to-then */
		promise
			.then(resolve)
			.catch(reject)
			.then(() => {
				clearTimeout(timeoutID);
			});
		/* eslint-enable promise/prefer-await-to-then */
	});

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;

const defaultRetryOptions = {
	limit: 2,
	methods: retryMethods,
	statusCodes: retryStatusCodes,
	afterStatusCodes: retryAfterStatusCodes
};

const normalizeRetryOptions = (retry = {}) => {
	if (typeof retry === 'number') {
		return {
			...defaultRetryOptions,
			limit: retry
		};
	}

	if (retry.methods && !Array.isArray(retry.methods)) {
		throw new Error('retry.methods must be an array');
	}

	if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
		throw new Error('retry.statusCodes must be an array');
	}

	return {
		...defaultRetryOptions,
		...retry,
		afterStatusCodes: retryAfterStatusCodes
	};
};

// The maximum value of a 32bit int (see issue #117)
const maxSafeTimeout = 2147483647;

class Ky {
	constructor(input, options = {}) {
		this._retryCount = 0;
		this._input = input;
		this._options = {
			// TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
			credentials: this._input.credentials || 'same-origin',
			...options,
			headers: mergeHeaders(this._input.headers, options.headers),
			hooks: deepMerge({
				beforeRequest: [],
				beforeRetry: [],
				afterResponse: []
			}, options.hooks),
			method: normalizeRequestMethod(options.method || this._input.method),
			prefixUrl: String(options.prefixUrl || ''),
			retry: normalizeRetryOptions(options.retry),
			throwHttpErrors: options.throwHttpErrors !== false,
			timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout
		};

		if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
			throw new TypeError('`input` must be a string, URL, or Request');
		}

		if (this._options.prefixUrl && typeof this._input === 'string') {
			if (this._input.startsWith('/')) {
				throw new Error('`input` must not begin with a slash when using `prefixUrl`');
			}

			if (!this._options.prefixUrl.endsWith('/')) {
				this._options.prefixUrl += '/';
			}

			this._input = this._options.prefixUrl + this._input;
		}

		if (supportsAbortController) {
			this.abortController = new globals.AbortController();
			if (this._options.signal) {
				this._options.signal.addEventListener('abort', () => {
					this.abortController.abort();
				});
			}

			this._options.signal = this.abortController.signal;
		}

		this.request = new globals.Request(this._input, this._options);

		if (this._options.searchParams) {
			const url = new URL(this.request.url);
			url.search = new URLSearchParams(this._options.searchParams);

			// To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
			if (((supportsFormData && this._options.body instanceof globals.FormData) || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
				this.request.headers.delete('content-type');
			}

			this.request = new globals.Request(new globals.Request(url, this.request), this._options);
		}

		if (this._options.json !== undefined) {
			this._options.body = JSON.stringify(this._options.json);
			this.request.headers.set('content-type', 'application/json');
			this.request = new globals.Request(this.request, {body: this._options.body});
		}

		const fn = async () => {
			if (this._options.timeout > maxSafeTimeout) {
				throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
			}

			await delay(1);
			let response = await this._fetch();

			for (const hook of this._options.hooks.afterResponse) {
				// eslint-disable-next-line no-await-in-loop
				const modifiedResponse = await hook(
					this.request,
					this._options,
					response.clone()
				);

				if (modifiedResponse instanceof globals.Response) {
					response = modifiedResponse;
				}
			}

			if (!response.ok && this._options.throwHttpErrors) {
				throw new HTTPError(response);
			}

			// If `onDownloadProgress` is passed, it uses the stream API internally
			/* istanbul ignore next */
			if (this._options.onDownloadProgress) {
				if (typeof this._options.onDownloadProgress !== 'function') {
					throw new TypeError('The `onDownloadProgress` option must be a function');
				}

				if (!supportsStreams) {
					throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
				}

				return this._stream(response.clone(), this._options.onDownloadProgress);
			}

			return response;
		};

		const isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());
		const result = isRetriableMethod ? this._retry(fn) : fn();

		for (const [type, mimeType] of Object.entries(responseTypes)) {
			result[type] = async () => {
				this.request.headers.set('accept', this.request.headers.get('accept') || mimeType);
				const response = (await result).clone();
				return (type === 'json' && response.status === 204) ? '' : response[type]();
			};
		}

		return result;
	}

	_calculateRetryDelay(error) {
		this._retryCount++;

		if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
			if (error instanceof HTTPError) {
				if (!this._options.retry.statusCodes.includes(error.response.status)) {
					return 0;
				}

				const retryAfter = error.response.headers.get('Retry-After');
				if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
					let after = Number(retryAfter);
					if (Number.isNaN(after)) {
						after = Date.parse(retryAfter) - Date.now();
					} else {
						after *= 1000;
					}

					if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
						return 0;
					}

					return after;
				}

				if (error.response.status === 413) {
					return 0;
				}
			}

			const BACKOFF_FACTOR = 0.3;
			return BACKOFF_FACTOR * (2 ** (this._retryCount - 1)) * 1000;
		}

		return 0;
	}

	async _retry(fn) {
		try {
			return await fn();
		} catch (error) {
			const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
			if (ms !== 0 && this._retryCount > 0) {
				await delay(ms);

				for (const hook of this._options.hooks.beforeRetry) {
					// eslint-disable-next-line no-await-in-loop
					const hookResult = await hook({
						request: this.request,
						options: this._options,
						error,
						response: error.response.clone(),
						retryCount: this._retryCount
					});

					// If `stop` is returned from the hook, the retry process is stopped
					if (hookResult === stop) {
						return;
					}
				}

				return this._retry(fn);
			}

			if (this._options.throwHttpErrors) {
				throw error;
			}
		}
	}

	async _fetch() {
		for (const hook of this._options.hooks.beforeRequest) {
			// eslint-disable-next-line no-await-in-loop
			const result = await hook(this.request, this._options);

			if (result instanceof Request) {
				this.request = result;
				break;
			}

			if (result instanceof Response) {
				return result;
			}
		}

		if (this._options.timeout === false) {
			return globals.fetch(this.request.clone());
		}

		return timeout(globals.fetch(this.request.clone()), this._options.timeout, this.abortController);
	}

	/* istanbul ignore next */
	_stream(response, onDownloadProgress) {
		const totalBytes = Number(response.headers.get('content-length')) || 0;
		let transferredBytes = 0;

		return new globals.Response(
			new globals.ReadableStream({
				start(controller) {
					const reader = response.body.getReader();

					if (onDownloadProgress) {
						onDownloadProgress({percent: 0, transferredBytes: 0, totalBytes}, new Uint8Array());
					}

					async function read() {
						const {done, value} = await reader.read();
						if (done) {
							controller.close();
							return;
						}

						if (onDownloadProgress) {
							transferredBytes += value.byteLength;
							const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
							onDownloadProgress({percent, transferredBytes, totalBytes}, value);
						}

						controller.enqueue(value);
						read();
					}

					read();
				}
			})
		);
	}
}

const validateAndMerge = (...sources) => {
	for (const source of sources) {
		if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
			throw new TypeError('The `options` argument must be an object');
		}
	}

	return deepMerge({}, ...sources);
};

const createInstance = defaults => {
	const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));

	for (const method of requestMethods) {
		ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {method}));
	}

	ky.HTTPError = HTTPError;
	ky.TimeoutError = TimeoutError;
	ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));
	ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));
	ky.stop = stop;

	return ky;
};

/* harmony default export */ __webpack_exports__["default"] = (createInstance());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r,f,e={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return y(n,o,l&&l.key,l&&l.ref,null)}function y(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),n.vnode&&n.vnode(r),r}function p(){return{}}function d(n){return n.children}function m(n,l){this.props=n,this.context=l}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?w(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function g(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_)}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=z(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?w(o):r),T(u,o),t!=r&&k(o)))})}function b(n,l,u,i,t,o,r,f,a,s){var h,p,m,k,g,_,b,x,A,P=i&&i.__k||c,C=P.length;for(a==e&&(a=null!=r?r[0]:C?w(i,0):null),u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?y(null,k,null,null,k):Array.isArray(k)?y(d,{children:k},null,null,null):null!=k.__e||null!=k.__c?y(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(m=P[h])||m&&k.key==m.key&&k.type===m.type)P[h]=void 0;else for(p=0;p<C;p++){if((m=P[p])&&k.key==m.key&&k.type===m.type){P[p]=void 0;break}m=null}if(g=z(n,k,m=m||e,t,o,r,f,a,s),(p=k.ref)&&m.ref!=p&&(x||(x=[]),m.ref&&x.push(m.ref,null,k),x.push(p,k.__c||g,k)),null!=g){if(null==b&&(b=g),A=void 0,void 0!==k.__d)A=k.__d,k.__d=void 0;else if(r==m||g!=a||null==g.parentNode){n:if(null==a||a.parentNode!==n)n.appendChild(g),A=null;else{for(_=a,p=0;(_=_.nextSibling)&&p<C;p+=2)if(_==g)break n;n.insertBefore(g,a),A=a}"option"==u.type&&(n.value="")}a=void 0!==A?A:g.nextSibling,"function"==typeof u.type&&(u.__d=a)}else a&&m.__e==a&&a.parentNode!=n&&(a=w(m))}if(u.__e=b,null!=r&&"function"!=typeof u.type)for(h=r.length;h--;)null!=r[h]&&v(r[h]);for(h=C;h--;)null!=P[h]&&D(P[h],P[h]);if(x)for(h=0;h<x.length;h++)j(x[h],x[++h],x[++h])}function x(n){return null==n||"boolean"==typeof n?[]:Array.isArray(n)?c.concat.apply([],n.map(x)):[n]}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===a.test(l)?u+"px":null==u?"":u}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(e in i)u&&e in u||P(o,e,"");if(u)for(c in u)i&&u[c]===i[c]||P(o,c,u[c])}else"o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function z(l,u,i,t,o,r,f,e,c){var a,v,h,y,p,w,k,g,_,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,_=(a=P.contextType)&&t[a.__c],x=a?_?_.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,p=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,p,w)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,p)),A=null!=a&&a.type==d&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,n.__e(l,u,i)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,i,t,o,r,f){var a,s,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(a=0;a<o.length;a++)if(null!=(s=o[a])&&((null===l.type?3===s.nodeType:s.localName===l.type)||n==s)){n=s,o[a]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,f=!1}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else{if(null!=o&&(o=c.slice.call(n.childNodes)),v=(p=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""))}A(n,d,p,t,f),h?l.__k=[]:(a=l.props.children,b(n,Array.isArray(a)?a:[a],l,u,i,"foreignObject"!==l.type&&t,o,r,e,f)),f||("value"in d&&void 0!==(a=d.value)&&a!==n.value&&C(n,"value",a,p.value,!1),"checked"in d&&void 0!==(a=d.checked)&&a!==n.checked&&C(n,"checked",a,p.checked,!1))}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o)}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],z(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?c.slice.call(u.childNodes):null,f,i||e,t),T(f,l)}function I(n,l){H(n,l,r)}function L(n,l){var u,i;for(i in l=s(s({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),u={},l)"key"!==i&&"ref"!==i&&(u[i]=l[i]);return y(n.type,u,l.key||n.key,l.ref||n.ref,null)}function M(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(n){t.props.value!==n.value&&i.some(function(l){l.context=n.value,g(l)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u.Provider.__=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this))},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);