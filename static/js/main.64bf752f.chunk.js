(this.webpackJsonpwiki_React=this.webpackJsonpwiki_React||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(44),r=n.n(s),l=n(9),o=(n(53),n(115)),d=n(116),j=(n(54),n(4));var b=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(o.a,{className:"Jumbo ",children:[Object(c.jsx)("h1",{children:"Welcome to the world of recipes!!!"}),Object(c.jsx)(j.b,{to:"/add",children:Object(c.jsx)(d.a,{className:"btn",variant:"primary",children:"Add Recipe"})})]})})},u=n(12),O=n(3),h=n(13),x=n.n(h),m=function(e){var t=Object(l.a)(e,1)[0],n=new FileReader;n.onloadend=function(){return x.a.insertImage(n.result)},n.readAsDataURL(t)};function f(e){var t=e.list,n=e.setList,s=Object(O.g)().id,r=t.findIndex((function(e){return e.id===+s})),o=t[r],b=i.a.useRef(),h=Object(a.useState)(o.description),f=Object(l.a)(h,2),v=f[0],p=f[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{className:"mt-3 mb-3",defaultValue:o.title,type:"text",ref:b}),Object(c.jsx)(x.a,{onInit:function(){document.querySelector(".note-editable").innerHTML=Object.values({infoData:v})},options:{height:300,dialogsInBody:!0,toolbar:[["style",["style"]],["font",["bold","underline","clear","color"]],["fontname",["fontname"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview"]]]},onImageUpload:m,onChange:function(e){p(e)}}),Object(c.jsx)(j.b,{to:"/".concat(o.id),children:Object(c.jsx)(d.a,{className:"mr-2 mt-3",variant:"primary",onClick:function(){o.title=b.current.value,o.description=v,n(Object(u.a)(t))},children:"Update"})}),Object(c.jsx)(j.b,{to:"/".concat(o.id),children:Object(c.jsx)(d.a,{className:"mt-3",variant:"warning",children:"Cancel"})})]})}var v=n(46),p=n.n(v);n(104);function g(e){var t=e.list,n=e.setList;console.log("abclist",t);var a=Object(O.g)().id,i=t.findIndex((function(e){return e.id===+a})),s=t[i];if(!s)return Object(c.jsx)(O.a,{to:"/add"});console.log("abc"+s);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"contentHeight",children:[Object(c.jsx)("h1",{children:s.title}),Object(c.jsx)("h2",{children:p()(s.description)}),Object(c.jsx)(j.b,{to:"/edit/".concat(s.id),children:Object(c.jsx)(d.a,{className:"mr-2",variant:"secondary",children:"Edit"})}),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)(d.a,{variant:"danger",onClick:function(){-1!==i&&(t.splice(i,1),n(Object(u.a)(t)))},children:"Delete"})})]})})}n(105);var N=n(47);var w=function(){return Object(c.jsxs)("div",{className:"nav ",children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsx)("div",{className:"navHeader",children:"Wiki Recipe"}),Object(c.jsxs)("div",{className:"navLinks",children:[Object(c.jsx)(j.b,{to:"/",className:"link",children:"Home"}),Object(c.jsx)(j.b,{to:"/add",className:"link",id:"logo",children:Object(c.jsx)(N.a,{})})]})]})};n(106);var y=function(e){var t=e.list;return Object(c.jsxs)("div",{className:"sidenav",children:[Object(c.jsx)("div",{className:"Recipes",children:Object(c.jsx)("h3",{children:"Recipes"})}),t.map((function(e){return Object(c.jsx)(j.b,{className:"link",to:"/".concat(e.id),children:Object(c.jsx)("div",{className:"Box",children:Object(c.jsx)("p",{children:e.title})})})}))]})},k=(n(107),function(e){var t=Object(l.a)(e,1)[0],n=new FileReader;n.onloadend=function(){return x.a.insertImage(n.result)},n.readAsDataURL(t)});var R=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),i=n[0],s=n[1],r=Object(a.useRef)(null);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container mt-2 ",children:[Object(c.jsx)("input",{type:"text",placeholder:"Add Title of Your Recipe...",className:" mb-3",ref:r}),Object(c.jsx)(x.a,{value:i,options:{height:210,dialogsInBody:!0,toolbar:[["style",["style"]],["font",["bold","underline","clear","color"]],["fontname",["fontname"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview"]]]},onImageUpload:k,onChange:function(e){s(e)}}),Object(c.jsx)(d.a,{className:"mt-3 primary",onClick:function(t){t.preventDefault();var n={};n.id=Math.floor(Date.now()/1e3),n.title=r.current.value,n.description=i,e.setList([n].concat(Object(u.a)(e.list)))},children:"Save"}),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)(d.a,{variant:"danger",className:"mt-3 ml-2",onClick:function(){},children:"Cancel"})})]})})};var I=function(){var e,t=i.a.useState((e="textData",JSON.parse(localStorage.getItem(e)||"null")||[])),n=Object(l.a)(t,2),s=n[0],r=n[1];return console.log(s),Object(a.useEffect)((function(){return function(e,t){return localStorage.setItem(e,JSON.stringify(t))}("textData",s)}),[s]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(w,{}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(y,{list:s,setList:r}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)(O.d,{children:[Object(c.jsx)(O.b,{exact:!0,path:"/add",children:Object(c.jsx)(R,{list:s,setList:r})}),Object(c.jsx)(O.b,{path:"/edit/:id",children:Object(c.jsx)(f,{list:s,setList:r})}),Object(c.jsx)(O.b,{path:"/:id",children:Object(c.jsx)(g,{list:s,setList:r})}),Object(c.jsx)(O.b,{exact:!0,path:"/",children:Object(c.jsx)(b,{})})]})})]})]})})},L=(n(108),n(109),n(110),n(111),n(112),n(10)),S=n.n(L);window.$=window.jQuery=S.a,r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(I,{})})}),document.getElementById("root"))},53:function(e,t,n){},54:function(e,t,n){},86:function(e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.64bf752f.chunk.js.map