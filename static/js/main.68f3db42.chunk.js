(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(4),i=c(0),b=c(2),r=c(1),j=function(){return Object(r.jsx)("div",{className:"navbar",children:Object(r.jsxs)("nav",{className:"navbar-brand",children:[Object(r.jsx)(s.b,{to:"/",className:function(e){return e.isActive?"navbar-item is-tab is-active":"navbar-item is-tab"},children:"Home"}),Object(r.jsx)(s.b,{to:"/tabs",className:function(e){return e.isActive?"navbar-item is-tab is-active":"navbar-item is-tab"},children:"Tabs"})]})})},d=c.p+"static/media/404.c78d6dd6.png",l=(c(15),function(){return Object(r.jsx)("div",{className:"errorPage",children:Object(r.jsxs)("div",{className:"errorPage__content",children:[Object(r.jsx)("img",{className:"errorPage__image",src:d,alt:"404 Page not found"}),Object(r.jsx)("p",{children:"404 Page Not Found"})]})})}),o=c(5),O=c(9),x=c.n(O),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.i)().tabId;return Object(i.useEffect)((function(){n(h)}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Tabs Page"}),Object(r.jsx)("div",{className:"tabs is-boxed is-centered",children:Object(r.jsx)("ul",{children:c.map((function(e){return Object(r.jsx)("li",{className:x()({"is-active":e.id===a}),children:Object(r.jsx)(s.b,{to:"/tabs/".concat(e.id),children:Object(r.jsx)("span",{children:e.title})})},e.id)}))})}),Object(r.jsx)("div",{children:a?Object(r.jsx)(b.a,{context:c}):Object(r.jsx)("p",{children:"Please select a tab"})})]})},m=function(){var e=Object(b.h)(),t=Object(b.i)().tabId,c=Object(b.g)(),n=e.find((function(e){return e.id===t})),a=e.some((function(e){return e.id===t}));return Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)("p",{children:null===n||void 0===n?void 0:n.content}):"".concat(c("/tabs"))})},v=(c(16),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:"/",element:Object(r.jsx)("h1",{children:"Home Page"})}),Object(r.jsx)(b.b,{path:"/tabs",element:Object(r.jsx)(u,{}),children:Object(r.jsx)(b.b,{path:":tabId",element:Object(r.jsx)(m,{})})}),Object(r.jsx)(b.b,{path:"*",element:Object(r.jsx)(l,{})})]})})]})});a.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.68f3db42.chunk.js.map