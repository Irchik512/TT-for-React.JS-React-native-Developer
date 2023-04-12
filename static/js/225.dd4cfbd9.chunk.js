"use strict";(self.webpackChunkTT_for_React_JS_React_native_Developer=self.webpackChunkTT_for_React_JS_React_native_Developer||[]).push([[225],{269:function(n,t,e){e.d(t,{II:function(){return d},__:function(){return f},l0:function(){return l},zx:function(){return p}});var r,i,o,u,a=e(168),c=e(444),l=c.ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  border: 2px solid gray;\n  margin 0 auto;\n  padding: 15px;\n"]))),f=c.ZP.label(i||(i=(0,a.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),d=c.ZP.input(o||(o=(0,a.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 30px;\n  max-width: 350px;\n  margin: 0 auto;\n"]))),p=c.ZP.button(u||(u=(0,a.Z)(["\n  font-family: inherit;\n  display: block;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  margin: ",";\n  max-width: 100%;\n  overflow: hidden;\n  width: fit-content;\n   {\n    background-color: ",";\n  }\n"])),(function(n){return"submit"===n.type?"0 auto":"0"}),(function(n){return"submit"===n.type?"#ff8100ba":"#009688"}))},497:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(184);function i(n){var t=n.children;return(0,r.jsx)("p",{children:t})}},814:function(n,t,e){e.d(t,{Z:function(){return p}});var r,i,o,u=e(168),a=e(444),c=a.ZP.section(r||(r=(0,u.Z)(["\n  width: 100%;\n  font-family: sans-serif;\n"]))),l=a.ZP.div(i||(i=(0,u.Z)(["\n  box-sizing: border-box;\n  padding: 0 20px;\n  width: 100%;\n  text-align: center;\n"]))),f=a.ZP.h2(o||(o=(0,u.Z)(["\n  font-size: 35px;\n"]))),d=e(184);function p(n){var t=n.title,e=n.children;return(0,d.jsx)(c,{children:(0,d.jsxs)(l,{children:[t&&(0,d.jsx)(f,{children:t}),e]})})}},693:function(n,t,e){e.d(t,{w1:function(){return p},Rj:function(){return s}});var r=e(152),i=e(942),o="NOT_FOUND";var u=function(n,t){return n===t};function a(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,i=void 0===r?u:r,a=e.maxSize,c=void 0===a?1:a,l=e.resultEqualityCheck,f=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(i),d=1===c?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:o},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(f):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var i=e[r];return r>0&&(e.splice(r,1),e.unshift(i)),i.value}return o}return{get:r,put:function(t,i){r(t)===o&&(e.unshift({key:t,value:i}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(c,f);function p(){var t=d.get(arguments);if(t===o){if(t=n.apply(null,arguments),l){var e=d.getEntries(),r=e.find((function(n){return l(n.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return p.clearCache=function(){return d.clear()},p}function c(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function l(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o,u=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=a,d=f.memoizeOptions,p=void 0===d?e:d,s=Array.isArray(p)?p:[p],x=c(r),h=n.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(s)),v=n((function(){for(var n=[],t=x.length,e=0;e<t;e++)n.push(x[e].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:h,dependencies:x,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return i}var f=l(a),d=function(n,t){return Object.values(n).reduce((function(n,e){var r=Math.floor(Math.random()*(n.length+1));return(n.length<t||r<t)&&(n.splice(r,0,e),n.length>t&&n.pop()),n}),[])},p=function(n){return n.dictinary},s=f([p],(function(n){var t=d(n,10);return t.map((function(n){var e=d(t,3).map((function(n){return(0,i.Z)({},n.translation,!1)}));return e.push((0,i.Z)({},n.translation,!0)),(0,r.Z)((0,r.Z)({},n),{},{answers:e})}))}))},225:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r=e(814),i=e(269),o=e(184);function u(n){var t=n.wordToLearn,e=n.translation;return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:e}),(0,o.jsx)(i.zx,{type:"button",children:"Delete"})]})}var a,c,l=e(434),f=e(168),d=e(444),p=d.ZP.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 15px 0;\n  width: 100%;\n  font-family: sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  flex-direction: column;\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 40px) / 2);\n    justify-content: space-around;\n    flex-direction: row;\n  } ;\n"]))),s=d.ZP.li(c||(c=(0,f.Z)(["\n  box-sizing: border-box;\n  width: 360px;\n  text-align: start;\n  border-radius: 4px;\n  box-shadow: 0px 0px 1px 1px rgb(0 0 0 / 15%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  >p { margin: 0;}\n \n  @media screen and (max-width: 424px) {\n    flex-direction: column;\n    width: 280px;\n  };\n\n  @media screen and (min-width: 1024px) {\n    width: 380px;\n  };\n"]))),x=e(693);function h(){var n=(0,l.v9)(x.w1);return(0,o.jsx)(p,{children:n.map((function(n){return(0,o.jsx)(s,{children:(0,o.jsx)(u,{wordToLearn:n.wordToLearn,translation:n.translation})},n.id)}))})}var v=e(497);function y(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.Z,{title:"Dictionary",children:[(0,o.jsx)(v.Z,{children:"There is no word to lern yet."}),(0,o.jsx)(h,{})]})})}}}]);
//# sourceMappingURL=225.dd4cfbd9.chunk.js.map