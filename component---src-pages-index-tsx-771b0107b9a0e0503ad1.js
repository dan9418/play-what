"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[691],{7275:function(e,t,n){var r=n(5444),a=n(7294),i=n(9).default.form.withConfig({displayName:"SearchBar__StyledSearchBar",componentId:"sc-1je05sb-0"})(["width:100%;.search-bar{width:100%;max-width:512px;display:grid;grid-template-columns:1fr auto;input,button{padding:8px 8px;border-radius:8px;border:1px solid ",";}input{border-radius:8px 0 0 8px;border-right:none;}button{border-radius:0 8px 8px 0;cursor:pointer;color:white;font-weight:bold;background-color:",";border-left:none;padding:8px 16px;display:flex;align-items:center;justify-content:center;}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.action.interactive}));t.Z=function(e){var t=e.searchRef,n=e.query,o=e.setQuery,l=e.placeholder,c=(0,a.useState)(""),s=c[0],d=c[1],m=void 0===n?s:n,u=void 0===o?d:o;return a.createElement(i,{role:"search",onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value,n=new URLSearchParams({query:t}),a="/search/"+(n?"?"+n.toString():"");return(0,r.c4)(a),!1}},a.createElement("div",{className:"search-bar"},a.createElement("input",{type:"search",id:"site-search",name:"query",ref:t,onChange:function(e){u(e.target.value)},value:m,placeholder:l||"Search the site..."}),a.createElement("button",{type:"submit"},"Search")))}},7633:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5444),a=n(7294),i=n(9),o=n(8891),l=n(7656),c=n(7275),s=n(1244),d=n(1774),m=n(2603),u=(0,i.default)(s.v).withConfig({displayName:"IndexPage__StyledHomePage",componentId:"sc-1czghky-0"})(["display:flex;flex-direction:column;align-items:center;h1{font-weight:300;margin:32px auto;font-size:200%;@media(min-width:512px){font-size:360%;}@media(min-width:1024px){font-size:500%;}.play{color:",";}.what{color:",";font-style:italic;}.q{color:",";}}.intro{max-width:768px;color:",";text-align:center;line-height:120%;margin-top:32px;margin-top:32px;font-size:120%;@media(min-width:512px){font-size:140%;}@media(min-width:1024px){font-size:160%;}}.disclaimer{font-style:italic;color:",";text-align:center;margin-top:16px;margin-top:32px;font-size:80%;@media(min-width:512px){font-size:100%;}@media(min-width:1024px){font-size:120%;}}h3{margin-top:64px;font-style:italic;color:",";}.search-bar{margin:8px auto 32px;}.or{font-size:120%;color:",";text-align:center;margin-bottom:32px;}> a{border-radius:8px;cursor:pointer;color:white;font-weight:bold;background-color:",";padding:8px 16px;display:flex;align-items:center;justify-content:center;width:100%;max-width:512px;&:hover{color:white;}}"],m.Z.brand.secondary,m.Z.brand.primary,m.Z.brand.secondary,(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary}),(function(e){return e.theme.surface.nav}),(function(e){return e.theme.text.secondary}),(function(e){return e.theme.action.interactive})),p=function(){var e=(0,a.useState)("Search the site"),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=setInterval((function(){var e=l.WA[Math.floor(Math.random()*l.WA.length)],t=l.cI[Math.floor(Math.random()*l.cI.length)],r=e.name+" "+t.name+" "+(0,o.Tl)(t.modelId);n(r)}),2e3);return function(){return clearInterval(e)}}),[]),a.createElement(u,null,a.createElement(d.Z,null),a.createElement("h1",null,a.createElement("span",{className:"play"},"play"," "),a.createElement("span",{className:"what"},"what"," "),a.createElement("span",{className:"q"},"?")),a.createElement("p",{className:"intro"},"A toolkit for exploring and visualizing musical concepts"),a.createElement("p",{className:"disclaimer"},"This site is under active development and is slated for a formal Beta release in Q1 2022"),a.createElement("h3",null,"What will you play today?"),a.createElement(c.Z,{placeholder:t}),a.createElement("div",{className:"or"},"~ or ~"),a.createElement(r.rU,{to:"/browse"},"Browse Chords & Scales"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-771b0107b9a0e0503ad1.js.map