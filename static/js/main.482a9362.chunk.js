(this["webpackJsonpstraw-hats"]=this["webpackJsonpstraw-hats"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(4),s=n.n(i),j=(n(10),n(3)),o=(n(11),function(e){var t=e.props,n=e.loading;return Object(c.jsx)("div",{children:n?Object(c.jsx)("h1",{children:"Loading..."}):Object(c.jsx)("div",{className:"gallery",children:t.map((function(e){return Object(c.jsx)("a",{className:"link",href:e.wiki,target:"_blank",rel:"noreferrer",children:Object(c.jsxs)("figure",{className:"card",children:[Object(c.jsx)("img",{className:"image",src:"https://anime-characters-api.herokuapp.com/images/".concat(e.nameQuery,".jpg"),alt:e.nameQuery}),Object(c.jsxs)("figcaption",{children:[Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("p",{children:e.role})]})]})},e.id)}))})})});var h=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!0),s=Object(j.a)(i,2),h=s[0],u=s[1];return Object(a.useEffect)((function(){fetch("https://anime-characters-api.herokuapp.com/api/v0/onepiece").then((function(e){return e.json()})).then((function(e){r(e)})),u(!1)}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Straw Hat Pirates"}),Object(c.jsx)(o,{props:n,loading:h})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.482a9362.chunk.js.map