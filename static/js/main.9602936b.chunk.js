(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(32),a=c.n(r),i=(c(80),c(81),c(9)),l=c.p+"static/media/news-logo.ad21dc9e.png",j=c(126),o=c(131),b=c(69),d=c.n(b),u=c(130),h=c(128),O=["India","Business","Sports","Worlds","Politics","Technology","Startup","Entertainment"],m=c(43),p=c(1),x=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(m.b,{to:"/",children:Object(p.jsx)("img",{src:l,alt:"News Logo"})}),Object(p.jsxs)(j.a,{open:c,className:"drawer-setup",onClose:function(){return n(!1)},children:[Object(p.jsx)("h3",{className:"category-title",children:"Categories"}),Object(p.jsx)(u.a,{className:"category-list",children:O.map((function(e,t){return Object(p.jsx)(m.b,{to:"/read/".concat(e),onClick:function(){return n(!1)},children:Object(p.jsx)(h.a,{children:e})},t)}))})]}),Object(p.jsx)("div",{class:"menu",children:Object(p.jsx)(o.a,{edge:"start",color:"inherit",onClick:function(){return n(!0)},children:Object(p.jsx)(d.a,{})})})]})})},f=c(37),g=c.n(f),v=c(52),N=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){r()}),[]);var r=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?q=All News&apiKey=5ca6bdcc309c426a9bb262ce6f1a6b81").then((function(e){return e.json()}));case 2:t=e.sent,console.log(t.articles),n(t.articles);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=0;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container",children:c.map((function(e){return Object(p.jsxs)("div",{className:"news-block",children:[Object(p.jsx)("figure",{className:"news-img",children:Object(p.jsx)("img",{src:e.urlToImage,alt:"News Thumb"})}),Object(p.jsxs)("div",{className:"news-content",children:[Object(p.jsx)("h3",{className:"news-title",children:e.title}),Object(p.jsxs)("p",{className:"post-details",children:[Object(p.jsx)("strong",{children:"short"})," by ",e.author," / ",e.publishedAt," "]}),Object(p.jsx)("div",{className:"news-description",children:e.description}),Object(p.jsx)("div",{className:"space-2"}),Object(p.jsxs)("div",{className:"news-link",children:["read more at",Object(p.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[" ",e.source.name]})]}),Object(p.jsx)("div",{className:"space-1"})]})]},a++)}))})})},w=function(e){var t=e.match,c=Object(s.useState)([]),n=Object(i.a)(c,2),r=n[0],a=n[1];console.log(t),Object(s.useEffect)((function(){l()}),[]),Object(s.useEffect)((function(){l()}),[t]);var l=function(){var e=Object(v.a)(g.a.mark((function e(){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?q=".concat(t.params.category,"&apiKey=5ca6bdcc309c426a9bb262ce6f1a6b81")).then((function(e){return e.json()}));case 2:c=e.sent,console.log(c.articles),a(c.articles);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=0;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container",children:r.map((function(e){return Object(p.jsxs)("div",{className:"news-block",children:[Object(p.jsx)("figure",{className:"news-img",children:Object(p.jsx)("img",{src:e.urlToImage,alt:"News Thumb"})}),Object(p.jsxs)("div",{className:"news-content",children:[Object(p.jsx)("h3",{className:"news-title",children:e.title}),Object(p.jsxs)("p",{className:"post-details",children:[Object(p.jsx)("strong",{children:"short"})," by ",e.author," / ",e.publishedAt," "]}),Object(p.jsx)("div",{className:"news-description",children:e.description}),Object(p.jsx)("div",{className:"space-2"}),Object(p.jsxs)("div",{className:"news-link",children:["read more at",Object(p.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[" ",e.source.name]})]}),Object(p.jsx)("div",{className:"space-1"})]})]},j++)}))})})},y=c(12);var k=function(){return Object(p.jsx)(m.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(x,{}),Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{path:"/",exact:!0,componet:N}),Object(p.jsx)(y.a,{path:"/read/:category",component:w})]}),Object(p.jsx)(N,{})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,132)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),C()}},[[96,1,2]]]);
//# sourceMappingURL=main.9602936b.chunk.js.map