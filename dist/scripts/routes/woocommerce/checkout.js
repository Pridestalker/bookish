(self.webpackChunk=self.webpackChunk||[]).push([[436],{502:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var c=n(877);const o={init:function(){},finalize:function(){c.h.checkForDifferentShipping(),c.h.openLoginForm(),c.h.openCreateAccount()}}},877:(e,t,n)=>{"use strict";n.d(t,{h:()=>r,k:()=>i});var c=function(e){e.classList.contains("active")||e.classList.add("active")},o=function(e){e.classList.contains("active")&&e.classList.remove("active")};const r={checkForDifferentShipping:function(){var e=document.getElementById("ship-to-different-address-checkbox"),t=document.querySelector(".shipping_address");e.addEventListener("input",(function(e){e.target.checked?c(t):o(t)}))},openLoginForm:function(){var e=document.querySelector(".woocommerce-form-login"),t=document.querySelector(".js-login-toggle-button");e&&t&&t.addEventListener("click",(function(){return e.style.display=""}))},openCreateAccount:function(){var e=document.querySelector("#createaccount"),t=document.querySelector(".create-account");t&&e&&e.addEventListener("click",(function(){return t.style.display=e.checked?"":"none"}))}},i={refreshAfterOrder:function(){var e=document.querySelector(".woocommerce-ordering");e.querySelector("select").addEventListener("change",(function(){e.submit()}))}}}}]);