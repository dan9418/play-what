"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[49],{7497:function(e,t,n){n.d(t,{v:function(){return a}});var a=n(1074).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1dcf9t1-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},4140:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),i=n(1074),l=(n(7207),n(1597)),r=n(1586),o=n(6291),c=i.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),d=function(){var e=(0,r.V7)().path.split("/"),t=[];return e.reduce((function(e,n,i,r){var c=(e+"/"+n).replace("//","/")||"/",d=!["root","test","experimental"].includes(n),s=0===i?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),m=d?l.rU:"span",u=d?c:void 0;return t.push(a.createElement("li",{key:i},i>0&&a.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),a.createElement(m,{to:u},s))),c}),"/"),a.createElement(c,null,t.slice(0,t.length-1))},s=n(4928),m=i.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";display:flex;align-items:center;justify-content:space-between;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),u=function(e){var t=e.title,n=e.subtitle,i=e.action,l=e.children;return a.createElement(a.Fragment,null,a.createElement(s.Z,{title:n?t+" - "+n:t}),a.createElement(d,null),a.createElement(m,null,a.createElement("div",{className:"header"},a.createElement("h1",null,t,i&&a.createElement("div",{className:"action"},i)),n&&a.createElement("h2",null,n)),l))}},4496:function(e,t,n){n.d(t,{K:function(){return l},W:function(){return i}});var a=n(1074),i=a.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-r9kss3-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),l=a.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-r9kss3-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},1011:function(e,t,n){n.d(t,{Ol:function(){return c},rg:function(){return o}});var a=n(3366),i=n(7294),l=n(1074),r=["title","action","children"],o=l.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),c=function(e){var t=e.title,n=e.action,a=void 0===n?null:n;return i.createElement("div",{className:"header"},i.createElement("h2",null,t),a)};t.ZP=function(e){var t=e.title,n=e.action,l=e.children,d=(0,a.Z)(e,r);return i.createElement(o,d,t&&i.createElement(c,{title:t,action:n}),l)}},4466:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(1597),i=n(7294),l=n(1074),r=n(7497),o=n(4140),c=n(4496),d=n(1011),s=(0,l.default)(r.v).withConfig({displayName:"AboutPage__StyledAboutPage",componentId:"sc-12uxzjr-0"})(["width:100%;max-width:1024px;margin:auto;p{margin:16px 0;}"," li a{display:block;padding:8px;}"],c.K),m=function(){return i.createElement(s,null,i.createElement(o.Z,{title:"About"}),i.createElement(c.K,null,i.createElement(d.ZP,{title:"What Is Play What?"},i.createElement("p",null,"Play What is a website for visualizing music theory concepts and exploring their relationships. The site provides an interface for inspecting the details of chords and scales and how they are played on some common instuments."),i.createElement("p",null,"The ",i.createElement(a.rU,{to:"/help"},"Help Page")," contains information on the different features offered by Play What."),i.createElement("p",null,"The ",i.createElement(a.rU,{to:"/help"},"Coming Soon Page")," includes details on potential new features and a tentative release schedule.")),i.createElement(d.ZP,{title:"About The Author"},i.createElement("p",null,"Play What is developed by Dan Bednarczyk, an engineer and multimedia artist from Pittsburgh, PA."),i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"https://danbednarczyk.com/"},"Website")),i.createElement("li",null,i.createElement("a",{href:"https://www.instagram.com/dan.bednarczyk/"},"Instagram")),i.createElement("li",null,i.createElement("a",{href:"https://danbednarczyk.bandcamp.com/"},"Bandcamp")),i.createElement("li",null,i.createElement("a",{href:"https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ"},"Spotify")),i.createElement("li",null,i.createElement("a",{href:"https://music.apple.com/us/artist/dan-bednarczyk/1590781822"},"Apple Music")))),i.createElement(d.ZP,{title:"License"},i.createElement("p",null,"The ",i.createElement("a",{href:"https://github.com/dan9418/play-what"},"code")," for Play What is public, but is currently published under a proprietary software license restricting all modifications and redistribution. There are plans to officially open-source the code in the future, but it is not yet ready for public contribution. By using Play What and/or its code repository, you hereby agree to not share the source code or any derivatives.")),i.createElement(d.ZP,{title:"Developers"},i.createElement("p",null,"Play What is developed with TypeScript, React, and Gastby and is hosted on GitHub Pages using entirely frontend technologies."),i.createElement("p",null,"The site is powered by a flexible, extensible, and efficient modeling system for musical intervals."),i.createElement("p",null,"Comprehensive documentation will be provided when this project reaches the official open source phase."),i.createElement("p",null,"The ",i.createElement(a.rU,{to:"/dev"},"Developer Panel")," includes experimental and admin features."))))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-ee89a1988f4c3d9befe2.js.map