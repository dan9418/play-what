"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[738],{1685:function(e,t,n){n.r(t);var l=n(7294),a=n(1074),r=n(1090),c=n(1011),o=n(8853),i=n(2058),s=[{cols:["#","Harmonics","Interval","Min"]}],d=[{cols:["1","1, 2, 4, 8, 16","P1",1]},{cols:["2","17","m2",17]},{cols:["3","9, 8","M2",9]},{cols:["4","19","m3",19]},{cols:["5","5, 10, 20","M3",5]},{cols:["6","21","P4",21]},{cols:["7","11, 22","TT",11]},{cols:["8","23","TT*",23]},{cols:["9","3, 6, 12, 24","P5",3]},{cols:["10","25","m6",25]},{cols:["11","13, 26","m6*",13]},{cols:["12","27","M6",27]},{cols:["13","7, 14, 28","m7",7]},{cols:["14","29","m7*",29]},{cols:["15","15, 30","M7",15]},{cols:["16","31","M7*",31]}],u=(0,a.default)(r.Z).withConfig({displayName:"intervals-vs-harmonicspage__StyledPage",componentId:"sc-1liqh3k-0"})([""]);t.default=function(){return l.createElement(u,{title:"Intervals vs Harmonics"},l.createElement(c.ZP,null,l.createElement(o.i,{thead:s,tbody:d,styles:i.H})))}},1011:function(e,t,n){n.d(t,{Ol:function(){return i},rg:function(){return o}});var l=n(3366),a=n(7294),r=n(1074),c=["title","subtitle","action","children","level"],o=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),i=function(e){var t=e.title,n=e.level,l=void 0===n?2:n,r=e.action,c=void 0===r?null:r,o="h"+l;return a.createElement("div",{className:"header"},a.createElement(o,null,t),c)};t.ZP=function(e){var t=e.title,n=e.subtitle,r=e.action,s=e.children,d=e.level,u=(0,l.Z)(e,c);return a.createElement(o,u,t&&a.createElement(i,{title:t,action:r,level:d}),n&&a.createElement(i,{title:n,level:d+1}),s)}},2058:function(e,t,n){n.d(t,{H:function(){return a},R:function(){return r}});var l=n(1074),a=(0,l.css)(["width:100%;border-collapse:collapse;td,th{padding:4px;text-align:center;}"]),r=(0,l.css)(["border-collapse:collapse;width:unset !important;margin:auto;td,th{height:48px;width:48px;text-align:center;vertical-align:middle !important;}td{border:1px solid black;}"])},8853:function(e,t,n){n.d(t,{i:function(){return m}});var l=n(1597),a=n(7294),r=n(1074),c=r.default.table.withConfig({displayName:"Table__StyledTable",componentId:"sc-1xr02h9-0"})([""]),o=(0,r.default)(c).withConfig({displayName:"Table___StyledStyledTable",componentId:"sc-1xr02h9-1"})(["",""],(function(e){return e.$_css})),i=function(e){return null==e||!1===e},s=function(e){e.index;var t=e.isHeader,n=e.content,r=e.colSpan,c=e.className,o=e.link,i=t?"th":"td",s=o?l.rU:a.Fragment,d=o?{to:o}:{};return a.createElement(i,{colSpan:r,className:c},a.createElement(s,d,n||""))},d=function(e){var t=e.cols,n=e.isHeader,l=e.className,r=e.headerColIndicies,c=void 0===r?[]:r;return a.createElement("tr",{className:l},t.map((function(e,t){if(i(e))return null;var l=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("content")}(e),r=l?e:{content:e};return a.createElement(s,Object.assign({key:t,index:t,isHeader:n||c.includes(t)},r))})))},u=function(e){var t=e.Tag,n=e.rows,l=e.headerColIndicies;return a.createElement(t,null,n.map((function(e,n){return i(e)?null:a.createElement(d,Object.assign({key:n,isHeader:"tbody"!==t,headerColIndicies:l},e))})))},m=function(e){var t=e.thead,n=e.tfoot,l=e.tbody,r=e.styles,c=e.colGroups,i=e.caption,s=e.headerColIndicies,d=e.className;return a.createElement(o,{className:d,$_css:r},c&&a.createElement("colgroup",null,c.map((function(e,t){return a.createElement("col",Object.assign({key:t},e))}))),i&&a.createElement("caption",null,i),t&&a.createElement(u,{Tag:"thead",rows:t,headerColIndicies:s}),n&&a.createElement(u,{Tag:"tfoot",rows:n,headerColIndicies:s}),l&&a.createElement(u,{Tag:"tbody",rows:l,headerColIndicies:s}))}}}]);
//# sourceMappingURL=component---src-components-pages-dev-notebook-intervals-intervals-vs-harmonics-page-tsx-83c977d9517a9b5c0b8d.js.map