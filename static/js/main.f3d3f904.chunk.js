(this["webpackJsonpinventory-ui-v2-adddb"]=this["webpackJsonpinventory-ui-v2-adddb"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(18),a=n.n(i),o=(n(24),n(25),n(0));var s=function(){return Object(o.jsxs)("div",{className:"navbar",id:"myNavBar",children:[Object(o.jsx)("a",{href:"#home",className:"active",children:"Home"}),Object(o.jsx)("a",{href:"#about",children:"About"})]})},u=(n(27),function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{children:"Inventory App"})})}),j=n(19),d=n(5);var l=function(e){return Object(o.jsx)("div",{onClick:function(){e.onChecked(e.id)},children:Object(o.jsx)("li",{children:e.text})})};n(28);var b=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(d.a)(i,2),s=a[0],u=a[1];function b(e){u((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){var t=e.target.value;r(t)},type:"text",placeholder:"Add Item",value:n}),Object(o.jsx)("button",{onClick:function(){u((function(e){return[].concat(Object(j.a)(e),[n])})),r("")},children:Object(o.jsx)("span",{children:"Add Item"})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:s.map((function(e,t){return Object(o.jsx)(l,{id:t,text:e,onChecked:b},t)}))})})]})},h=n(3),f=n.n(h),O=n(7),p=n(8),v=n.n(p);function x(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.get("https://inventoryv2api.herokuapp.com/getData").then((function(e){r(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function a(e){r((function(t){return t.filter((function(t,n){return console.log("deleting items",t),t.id!==e}))}))}var s=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.get("https://inventoryv2api.herokuapp.com/deleteAll").then((function(e){r>0?r(e.data):(a(),console.log("deleteItems function called",a())),console.log(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.get("https://inventoryv2api.herokuapp.com/deleteOne").then((function(e){a(),console.log("Only deleting one")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"fetch-button",onClick:i,children:"Get Items"}),Object(o.jsx)("button",{className:"fetch-button",onClick:s,children:"Delete All Items"})]}),Object(o.jsx)("div",{children:n.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{name:e.name,onClick:u,children:"X"}),Object(o.jsx)("span",{children:e.name})]})}))})]})}n(48);var m=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("p",{children:["Created by ","".concat("Tessa"," ").concat("Seiders")]}),Object(o.jsxs)("p",{children:["Copyright ",(new Date).getFullYear()]})]})};var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)(u,{}),Object(o.jsx)(b,{}),Object(o.jsx)(x,{}),Object(o.jsx)(m,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),k()}},[[49,1,2]]]);
//# sourceMappingURL=main.f3d3f904.chunk.js.map