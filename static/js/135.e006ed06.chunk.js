"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{209:function(e,r,s){s.d(r,{c:function(){return a}});var t=s(243),n="9964dddb79a4e585f42d3b6de3c6326e",i="https://api.themoviedb.org/3",a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.Z.get("".concat(e),{baseURL:i,params:{api_key:n,query:r}})}},135:function(e,r,s){s.r(r),s.d(r,{default:function(){return x}});var t=s(861),n=s(439),i=s(757),a=s.n(i),c=s(791),l=s(87),o=s(689),d="MovieDetails_container__Ys+c9",h="MovieDetails_link__U+v+7",u="MovieDetails_filmDetails__KrjEG",v="MovieDetails_description__33mrB",m=s(209),j=s(184),x=function(){var e,r,s=(0,c.useState)({genres:[]}),i=(0,n.Z)(s,2),x=i[0],f=i[1],p=(0,o.UO)().filmId,_=null!==(e=null===(r=(0,o.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){(0,t.Z)(a().mark((function e(){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.c)("/movie/".concat(p));case 3:r=e.sent,s=r.data,f(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[p]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)(l.rU,{className:h,to:_,children:"Go back"}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(x.poster_path),alt:""}),(0,j.jsxs)("div",{className:v,children:[(0,j.jsxs)("h2",{children:[x.original_title," (",new Date(x.release_date).getFullYear(),")"]}),(0,j.jsxs)("p",{children:["User score: ",Math.round(10*x.vote_average),"%"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:x.overview}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:x.genres.map((function(e){return e.name})).join(" ")})]})]})]}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("h4",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"cast",state:{from:_},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"reviews",state:{from:_},children:"Reviews"})})]})]}),(0,j.jsx)(c.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:(0,j.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=135.e006ed06.chunk.js.map