(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{50:function(e,t,c){e.exports={item:"QuoteItem_item__1cpuo"}},51:function(e,t,c){e.exports={list:"QuoteList_list__1VYvh",sorting:"QuoteList_sorting__xsE8f"}},52:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__2JhTo"}},58:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(2),o=c(39),a=c(50),r=c.n(a),i=c(7),u=c(0),j=function(e){var t=e.id,c=e.author,s=e.text,o=e.genre,a=Object(n.i)(),j=!a.pathname.includes("author")&&!a.pathname.includes("genre");return Object(u.jsxs)("li",{className:r.a.item,children:[Object(u.jsxs)("figure",{style:{width:j?"70%":"100%"},children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:s})}),Object(u.jsxs)("figcaption",{children:[Object(u.jsxs)(i.b,{to:"/quotes/author/".concat(c),children:[" ",c," "]})," ,",Object(u.jsxs)(i.b,{to:"/quotes/genre/".concat(o),children:[" ",o," "]})]})]}),j&&Object(u.jsx)(i.b,{to:"/quotes/".concat(t),className:"btn",children:"View Fullscreen"})]})},l=c(51),d=c.n(l),b=function(e){var t,c,a=Object(n.h)(),r=Object(n.i)(),i="asc"===new URLSearchParams(r.search).get("sort"),l=(t=e.quotes,c=i,t.sort((function(e,t){return c?e.text<t.text?1:-1:e.text>t.text?1:-1})));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:d.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){a.push({pathname:r.pathname,search:"?sort=".concat(i?"desc":"asc")})},children:[" Sort ",i?"Asc":"Desc"," "]})}),Object(u.jsx)("ul",{className:d.a.list,children:l.map((function(e){return Object(u.jsx)(j,Object(o.a)({},e),e.id)}))})]})},h=c(52),x=c.n(h),O=function(){var e=Object(n.i)();return Object(u.jsxs)("div",{className:x.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(i.b,{to:"".concat(e.pathname,"/new"),className:"btn",children:" Add a Quote "})]})},m=c(37),p=c(38),f=c(8);t.default=function(e){var t=e.isMain,c=Object(n.j)(),o=c.authorName,a=c.genre,r=o||a,i=Object(m.a)(t?p.d:o?p.e:p.f,!0),j=i.sendRequest,l=i.status,d=i.data,h=i.error;return Object(s.useEffect)((function(){j(r)}),[j,r]),"pending"===l?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(f.a,{})}):h?Object(u.jsxs)("p",{className:"centered focused",children:[" ",h," "]}):"completed"!==l||d&&d.length?Object(u.jsx)(b,{quotes:d}):Object(u.jsx)(O,{})}}}]);
//# sourceMappingURL=5.7656859e.chunk.js.map