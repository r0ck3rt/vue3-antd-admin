(window.webpackJsonp=window.webpackJsonp||[]).push([["SuspenseWithError"],{fe52:function(e,r,t){"use strict";t.r(r);var n=t("7a23"),o=Object(n.defineComponent)({name:"SuspenseWithError",setup:function(){var e=Object(n.ref)(null);return Object(n.onErrorCaptured)((function(r){return e.value="(⊙o⊙)…出了点问题。",!0})),{error:e}}});o.render=function(e,r,t,o,c,u){return e.error?Object(n.renderSlot)(e.$slots,"error",{key:0},(function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.error),1)]})):(Object(n.openBlock)(),Object(n.createBlock)(n.Suspense,{key:1},{default:Object(n.withCtx)((function(){return[Object(n.renderSlot)(e.$slots,"default")]})),fallback:Object(n.withCtx)((function(){return[Object(n.renderSlot)(e.$slots,"fallback")]})),_:3}))},r.default=o}}]);