"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var i=n(861),r=n(439),a=n(757),s=n.n(a),l=n(689),c=n(87),f="MovieDetails_button__uXZxd",u="MovieDetails_movie__9X7I7",o="MovieDetails_additionalInfo__4J0eA",v="MovieDetails_paragraph__1+o0a",d="MovieDetails_list__dbNMP",b="MovieDetails_listItem__b-dWX",h=n(688),m=n(791),A=n(691),x=n(686),N=n.n(x),j=n(184),E=function(){var e=(0,m.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],x=(0,l.UO)().movieId,E=(0,m.useState)(x),g=(0,r.Z)(E,1)[0],w=(0,m.useState)(!0),p=(0,r.Z)(w,2),X=p[0],C=p[1],G=(0,l.TH)(),U=(0,l.s0)();(0,m.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Wg)(g);case 3:t=e.sent,a(t.data),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),N().Notify.failure("Something went wrong :( Try again later..."),U(G.state.from);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,7,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[G.state.from,g,U]);return(0,j.jsxs)(j.Fragment,{children:[!0===X&&(0,j.jsx)(A.ko,{width:"100%"}),!1===X&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{className:f,type:"button",onClick:function(){U(G.state.from)},children:"Go back"}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("img",{loading:"lazy",src:null!==n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"data:image/png;base64,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",alt:void 0===n.title?n.name:n.title}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[void 0===n.title?n.name:n.title," ",""!==n.release_date&&"(".concat(n.release_date,")")]}),(0,j.jsx)("p",{children:"User score: ".concat(Math.round(10*n.vote_average),"%")}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:n.overview}),(0,j.jsx)("h4",{children:"Genres"}),(0,j.jsx)("p",{children:function(e){if(void 0!==e){var t=[];return e.forEach((function(e){t.push(e.name)})),t.join(", ")}}(n.genres)})]})]}),(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("p",{className:v,children:"Additional information"}),(0,j.jsxs)("ul",{className:d,children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.rU,{className:b,to:"cast",state:{from:G.state.from},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.rU,{className:b,to:"reviews",state:{from:G.state.from},children:"Reviews"})})]})]}),(0,j.jsx)(l.j3,{})]})]})}}}]);
//# sourceMappingURL=135.e6683ee3.chunk.js.map