"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[53],{7497:function(e,t,n){n.d(t,{v:function(){return l}});var l=n(1074).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1dcf9t1-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},4140:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(1074),r=(n(7207),n(1597)),i=n(1586),o=n(6291),c=a.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),u=function(){var e=(0,i.V7)().path.split("/"),t=[];return e.reduce((function(e,n,a,i){var c=(e+"/"+n).replace("//","/")||"/",u=!["root","practice","test","experimental"].includes(n),d=0===a?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),m=u?r.rU:"span",s=u?c:void 0;return t.push(l.createElement("li",{key:a},a>0&&l.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),l.createElement(m,{to:s},d))),c}),"/"),l.createElement(c,null,t.slice(0,t.length-1))},d=n(4928),m=a.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";display:flex;align-items:center;justify-content:space-between;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),s=function(e){var t=e.title,n=e.subtitle,a=e.action,r=e.children;return l.createElement(l.Fragment,null,l.createElement(d.Z,{title:n?t+" - "+n:t}),l.createElement(u,null),l.createElement(m,null,l.createElement("div",{className:"header"},l.createElement("h1",null,t,a&&l.createElement("div",{className:"action"},a)),n&&l.createElement("h2",null,n)),r))}},7704:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var l=n(7294),a=n(1074),r=n(7497),i=n(4140),o=n(8164),c=n(9544),u=n(7254),d=n(7158),m=n(2405),s=n(3165),p=n(1505),f=u.Ou.filter((function(e){return e.value[0]<12})),h=c.Fs.filter((function(e){return Math.abs(e.value)<2})),g=!1,v=a.default.div.withConfig({displayName:"AllIntervalsFromAllRoots__StyledTest",componentId:"sc-apbgxj-0"})(["height:100%;width:100%;overflow:auto;table{border-collapse:collapse;margin:16px auto;td,th{border:1px solid ",";height:40px;width:44px;display:inline-flex;align-items:center;justify-content:center;}th{text-align:left;white-space:nowrap;}th{background-color:",";}td{background-color:white;}.pod{color:",";font-size:80%;}.invalid{color:",";font-weight:bold;}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.utils.hoverDark}),(function(e){return e.theme.text.secondary}),(function(e){return e.theme.status.negative})),x=function(){var e=function(){var e=[];return s.ke.forEach((function(t){var n=t.id,l=t.value,a=p.x[l].value[0];h.forEach((function(t){var r=t.symbol,i=t.value,o=""+n+r,c=[a+i,l],u=f.map((function(e){var t,n=(0,m._l)(c,e.value),l=!1;try{t=new d.Z(n)}catch(a){l=!0}return{name:t?t.name:"?",pod:n,isInvalid:l}}));e.push({name:o,pod:c,intervals:u})}))})),e}();return l.createElement(v,null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Root"),f.map((function(e){return l.createElement("th",{colSpan:1,key:e.modelId},o.Z.fromValue(e.value).getName())})))),l.createElement("tbody",null,e.map((function(e){return l.createElement("tr",{key:e.name},l.createElement("th",null,e.name),g,e.intervals.map((function(e){return l.createElement(l.Fragment,null,l.createElement("td",{key:e.modelId+"n",className:e.isInvalid?"invalid":""},e.name),g)})))})))))},w=(0,a.default)(r.v).withConfig({displayName:"AllIntervalsFromAllRootsPage__StyledTestPage",componentId:"sc-b2hfyl-0"})([""]),y=function(){return l.createElement(w,null,l.createElement(i.Z,{title:"All Intervals From All Roots",subtitle:"Test"}),l.createElement(x,null))}}}]);
//# sourceMappingURL=component---src-pages-dev-test-all-intervals-from-all-roots-tsx-6f7d4574677fd93529c7.js.map