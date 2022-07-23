"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[309],{7497:function(e,t,l){l.d(t,{v:function(){return n}});var n=l(1074).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1dcf9t1-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},4140:function(e,t,l){l.d(t,{Z:function(){return s}});var n=l(7294),r=l(1074),a=(l(7207),l(1597)),i=l(1586),c=l(6291),u=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),o=function(){var e=(0,i.V7)().path.split("/"),t=[];return e.reduce((function(e,l,r,i){var u=(e+"/"+l).replace("//","/")||"/",o=!["root","test","experimental"].includes(l),m=0===r?"Home":l.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),d=o?a.rU:"span",s=o?u:void 0;return t.push(n.createElement("li",{key:r},r>0&&n.createElement(c.ZP,{iconId:"next",size:10,color:"grey"}),n.createElement(d,{to:s},m))),u}),"/"),n.createElement(u,null,t.slice(0,t.length-1))},m=l(4928),d=r.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";display:flex;align-items:center;justify-content:space-between;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),s=function(e){var t=e.title,l=e.subtitle,r=e.action,a=e.children;return n.createElement(n.Fragment,null,n.createElement(m.Z,{title:l?t+" - "+l:t}),n.createElement(o,null),n.createElement(d,null,n.createElement("div",{className:"header"},n.createElement("h1",null,t,r&&n.createElement("div",{className:"action"},r)),l&&n.createElement("h2",null,l)),a))}},1011:function(e,t,l){l.d(t,{Ol:function(){return u},rg:function(){return c}});var n=l(3366),r=l(7294),a=l(1074),i=["title","action","children"],c=a.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),u=function(e){var t=e.title,l=e.action,n=void 0===l?null:l;return r.createElement("div",{className:"header"},r.createElement("h2",null,t),n)};t.ZP=function(e){var t=e.title,l=e.action,a=e.children,o=(0,n.Z)(e,i);return r.createElement(c,o,t&&r.createElement(u,{title:t,action:l}),a)}},4022:function(e,t,l){l.r(t),l.d(t,{default:function(){return o}});var n=l(7294),r=l(1074),a=l(7497),i=l(4140),c=l(1011),u=(0,r.default)(a.v).withConfig({displayName:"ComingSoonPage__StyledComingSoonPage",componentId:"sc-1vi5uc4-0"})(["table{border-collapse:collapse;width:100%;td,th{padding:8px;text-align:left;vertical-align:top;}th{border-bottom:1px solid ",";}tr:not(:last-child){td{border-bottom:1px solid ",";}}}","{margin-top:16px;li{margin-bottom:8px;list-style-type:disc;margin-left:16px;}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.utils.border}),c.rg),o=function(){return n.createElement(u,null,n.createElement(i.Z,{title:"Coming Soon",subtitle:"Potential Features"}),n.createElement(c.ZP,{title:"Release Schedule"},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Release"),n.createElement("th",null,"Version"),n.createElement("th",null,"Date"),n.createElement("th",null,"Features"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"Public User Beta"),n.createElement("td",null,"0.1.0"),n.createElement("td",null,"8/5/22"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,"New home page"),n.createElement("li",null,"Customizable note labels"),n.createElement("li",null,"Customizable note colors"),n.createElement("li",null,"Better extended chords experience"),n.createElement("li",null,"Feedback / feature request form"),n.createElement("li",null,"Basic documentation")))),n.createElement("tr",null,n.createElement("td",null,"Official Launch"),n.createElement("td",null,"1.0.0"),n.createElement("td",null,"2023"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,"Finalized Name"),n.createElement("li",null,"Fresh Logo"),n.createElement("li",null,"Sharing Features"),n.createElement("li",null,"Chord Progressions"),n.createElement("li",null,"Cadences"),n.createElement("li",null,"More tunings/voicings"),n.createElement("li",null,"Open Source License"),n.createElement("li",null,"Code Documentation"),n.createElement("li",null,"Bug Fixes")))),n.createElement("tr",null,n.createElement("td",null,"Future Versions"),n.createElement("td",null,"X.0.0"),n.createElement("td",null,"TBD"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,"Build-Your-Own Practice Materials"),n.createElement("li",null,"Grand Staff Viewer"),n.createElement("li",null,"Chord Inversions"),n.createElement("li",null,"Rhythm Features"),n.createElement("li",null,"Sound Features"),n.createElement("li",null,"Ear Training"),n.createElement("li",null,"User Accounts"),n.createElement("li",null,"...and more!"))))))),n.createElement(c.ZP,{title:"Request A Feature"},n.createElement("p",null,"A form for submitting feature requests, bugs, and general feedback will be provided soon.")))}}}]);
//# sourceMappingURL=component---src-pages-coming-soon-tsx-4850d3e44c80d1241af4.js.map