"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[944],{7335:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a,l=n(7294),r=n(1074),i=n(1090),c=n(2982),o=n(8164),u=n(9544),s=n(7254),d=n(7158),m=n(2405),f=n(3165),p=n(1505),h=n(8853),v=n(2058),g=s.Ou.filter((function(e){return e.value[0]<12})),b=u.Fs.filter((function(e){return Math.abs(e.value)<2})),y=r.default.div.withConfig({displayName:"AllIntervalsFromAllRoots__StyledTest",componentId:"sc-apbgxj-0"})(["height:100%;width:100%;overflow:auto;.invalid{color:",";font-weight:bold;}"],(function(e){return e.theme.status.negative})),E=[{cols:["Root"].concat((0,c.Z)(g.map((function(e){return o.Z.fromValue(e.value).getName()}))))}],w=(a=[],f.ke.forEach((function(e){var t=e.id,n=e.value,l=p.x[n].value[0];b.forEach((function(e){var r=e.symbol,i=e.value,c=""+t+r,o=[l+i,n],u=g.map((function(e){var t,n=(0,m._l)(o,e.value),a=!1;try{t=new d.Z(n)}catch(l){a=!0}return{name:t?t.name:"?",pod:n,isInvalid:a}}));a.push({name:c,pod:o,intervals:u})}))})),a).map((function(e){return{cols:[e.name].concat((0,c.Z)(e.intervals.map((function(e){return{className:e.isInvalid?"invalid":"",content:e.name}}))))}})),x=function(){return l.createElement(y,null,l.createElement(h.i,{styles:v.H,headerColIndicies:[0],thead:E,tbody:w}))},C=n(1011),I=(0,r.default)(i.Z).withConfig({displayName:"all-intervals-from-all-rootspage__StyledTestPage",componentId:"sc-tskeq0-0"})([""]),_=function(){return l.createElement(I,{title:"All Intervals From All Roots",maxWidth:"1920px"},l.createElement(C.ZP,null,l.createElement(x,null)))}},1011:function(e,t,n){n.d(t,{Ol:function(){return o},rg:function(){return c}});var a=n(3366),l=n(7294),r=n(1074),i=["title","subtitle","action","children","level"],c=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),o=function(e){var t=e.title,n=e.level,a=void 0===n?2:n,r=e.action,i=void 0===r?null:r,c="h"+a;return l.createElement("div",{className:"header"},l.createElement(c,null,t),i)};t.ZP=function(e){var t=e.title,n=e.subtitle,r=e.action,u=e.children,s=e.level,d=(0,a.Z)(e,i);return l.createElement(c,d,t&&l.createElement(o,{title:t,action:r,level:s}),n&&l.createElement(o,{title:n,level:s+1}),u)}},2058:function(e,t,n){n.d(t,{H:function(){return l},R:function(){return r}});var a=n(1074),l=(0,a.css)(["width:100%;border-collapse:collapse;td,th{padding:4px;text-align:center;}"]),r=(0,a.css)(["border-collapse:collapse;width:unset !important;margin:auto;td,th{height:48px;width:48px;text-align:center;vertical-align:middle !important;}td{border:1px solid black;}"])},8853:function(e,t,n){n.d(t,{i:function(){return m}});var a=n(1597),l=n(7294),r=n(1074),i=r.default.table.withConfig({displayName:"Table__StyledTable",componentId:"sc-1xr02h9-0"})([""]),c=(0,r.default)(i).withConfig({displayName:"Table___StyledStyledTable",componentId:"sc-1xr02h9-1"})(["",""],(function(e){return e.$_css})),o=function(e){return null==e||!1===e},u=function(e){e.index;var t=e.isHeader,n=e.content,r=e.colSpan,i=e.className,c=e.link,o=t?"th":"td",u=c?a.rU:l.Fragment,s=c?{to:c}:{};return l.createElement(o,{colSpan:r,className:i},l.createElement(u,s,n||""))},s=function(e){var t=e.cols,n=e.isHeader,a=e.className,r=e.headerColIndicies,i=void 0===r?[]:r;return l.createElement("tr",{className:a},t.map((function(e,t){if(o(e))return null;var a=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("content")}(e),r=a?e:{content:e};return l.createElement(u,Object.assign({key:t,index:t,isHeader:n||i.includes(t)},r))})))},d=function(e){var t=e.Tag,n=e.rows,a=e.headerColIndicies;return l.createElement(t,null,n.map((function(e,n){return o(e)?null:l.createElement(s,Object.assign({key:n,isHeader:"tbody"!==t,headerColIndicies:a},e))})))},m=function(e){var t=e.thead,n=e.tfoot,a=e.tbody,r=e.styles,i=e.colGroups,o=e.caption,u=e.headerColIndicies,s=e.className;return l.createElement(c,{className:s,$_css:r},i&&l.createElement("colgroup",null,i.map((function(e,t){return l.createElement("col",Object.assign({key:t},e))}))),o&&l.createElement("caption",null,o),t&&l.createElement(d,{Tag:"thead",rows:t,headerColIndicies:u}),n&&l.createElement(d,{Tag:"tfoot",rows:n,headerColIndicies:u}),a&&l.createElement(d,{Tag:"tbody",rows:a,headerColIndicies:u}))}}}]);
//# sourceMappingURL=component---src-components-pages-dev-test-all-intervals-from-all-roots-page-tsx-19de76ff39793c82d04d.js.map