"use strict";(self.webpackChunkTT_for_React_JS_React_native_Developer=self.webpackChunkTT_for_React_JS_React_native_Developer||[]).push([[182],{269:function(n,t,e){e.d(t,{II:function(){return s},__:function(){return l},l0:function(){return c},zx:function(){return f}});var r,i,a,o,u=e(168),d=e(444),c=d.ZP.form(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  border: 2px solid gray;\n  margin 0 auto;\n  padding: 15px;\n"]))),l=d.ZP.label(i||(i=(0,u.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),s=d.ZP.input(a||(a=(0,u.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 30px;\n  max-width: 350px;\n  margin: 0 auto;\n"]))),f=d.ZP.button(o||(o=(0,u.Z)(["\n  font-family: inherit;\n  display: block;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  margin: ",";\n  max-width: 100%;\n  overflow: hidden;\n  width: fit-content;\n   {\n    background-color: ",";\n  }\n"])),(function(n){return"submit"===n.type?"0 auto":"0"}),(function(n){return"submit"===n.type?"#ff8100ba":"#009688"}))},814:function(n,t,e){e.d(t,{Z:function(){return f}});var r,i,a,o=e(168),u=e(444),d=u.ZP.section(r||(r=(0,o.Z)(["\n  width: 100%;\n  font-family: sans-serif;\n"]))),c=u.ZP.div(i||(i=(0,o.Z)(["\n  box-sizing: border-box;\n  padding: 0 20px;\n  width: 100%;\n  text-align: center;\n"]))),l=u.ZP.h2(a||(a=(0,o.Z)(["\n  font-size: 35px;\n"]))),s=e(184);function f(n){var t=n.title,e=n.children;return(0,s.jsx)(d,{children:(0,s.jsxs)(c,{children:[t&&(0,s.jsx)(l,{children:t}),e]})})}},182:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(439),i=e(791),a=e(434),o=e(413),u=e(269),d=e(184);function c(){var n=(0,i.useState)(""),t=(0,r.Z)(n,2),e=t[0],c=t[1],l=(0,i.useState)(""),s=(0,r.Z)(l,2),f=s[0],x=s[1],p=(0,a.I0)(),h=function(n){var t=n.currentTarget,e=t.name,r=t.value;switch(e){case"newWord":c(r);break;case"translation":x(r);break;default:return}};return(0,d.jsxs)(u.l0,{onSubmit:function(n){n.preventDefault();var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(),r={id:t,wordToLearn:e,translation:f};p((0,o.cd)(r)),console.log(r),c(""),x("")},children:[(0,d.jsxs)(u.__,{children:["newWord",(0,d.jsx)(u.II,{type:"text",name:"newWord",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"newWord may contain only letters",onChange:h,required:!0})]}),(0,d.jsxs)(u.__,{children:["translation",(0,d.jsx)(u.II,{type:"text",name:"translation",value:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Translation contain only letters",onInput:h,required:!0})]}),(0,d.jsx)(u.zx,{type:"submit",children:"Add word"})]})}var l=e(814);function s(){return(0,d.jsxs)(l.Z,{children:[(0,d.jsx)("h2",{children:"Add new word"}),(0,d.jsx)(c,{})]})}}}]);
//# sourceMappingURL=182.f1b5f82a.chunk.js.map