"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[428],{8236:function(e,t,n){n.r(t);var l=n(7294),a=n(1074),r=n(1090),c=n(1011),i=n(8853),o=n(2058),s=(0,a.default)(r.Z).withConfig({displayName:"possible-extensions-for-chordspage__StyledExtensionsPage",componentId:"sc-lvfp5g-0"})([""]),d=[{cols:["","b9","9","#9","11","#11","b13","13","b5","#5"]}],u=[{cols:["Dom","X","X","X","","X","X","X","X","X"]},{cols:["min","","X","","X","","","X","",""]},{cols:["Maj","?","X","","X","X","","X","","X"]},{cols:["M6","?","?","X","X","X","","","",""]},{cols:["m6","","?","","","","","","",""]},{cols:["m/M","","X","","","","","","",""]}];t.default=function(){return l.createElement(s,{title:"Possible Extensions For Chords"},l.createElement(c.ZP,{title:""},l.createElement(i.i,{headerColIndicies:[0],thead:d,tbody:u,styles:o.H})))}},1011:function(e,t,n){n.d(t,{Ol:function(){return o},rg:function(){return i}});var l=n(3366),a=n(7294),r=n(1074),c=["title","subtitle","action","children","level"],i=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),o=function(e){var t=e.title,n=e.level,l=void 0===n?2:n,r=e.action,c=void 0===r?null:r,i="h"+l;return a.createElement("div",{className:"header"},a.createElement(i,null,t),c)};t.ZP=function(e){var t=e.title,n=e.subtitle,r=e.action,s=e.children,d=e.level,u=(0,l.Z)(e,c);return a.createElement(i,u,t&&a.createElement(o,{title:t,action:r,level:d}),n&&a.createElement(o,{title:n,level:d+1}),s)}},2058:function(e,t,n){n.d(t,{H:function(){return a},R:function(){return r}});var l=n(1074),a=(0,l.css)(["width:100%;border-collapse:collapse;td,th{padding:4px;text-align:center;}"]),r=(0,l.css)(["border-collapse:collapse;width:unset !important;margin:auto;td,th{height:48px;width:48px;text-align:center;vertical-align:middle !important;}td{border:1px solid black;}"])},8853:function(e,t,n){n.d(t,{i:function(){return m}});var l=n(1597),a=n(7294),r=n(1074),c=r.default.table.withConfig({displayName:"Table__StyledTable",componentId:"sc-1xr02h9-0"})([""]),i=(0,r.default)(c).withConfig({displayName:"Table___StyledStyledTable",componentId:"sc-1xr02h9-1"})(["",""],(function(e){return e.$_css})),o=function(e){return null==e||!1===e},s=function(e){e.index;var t=e.isHeader,n=e.content,r=e.colSpan,c=e.className,i=e.link,o=t?"th":"td",s=i?l.rU:a.Fragment,d=i?{to:i}:{};return a.createElement(o,{colSpan:r,className:c},a.createElement(s,d,n||""))},d=function(e){var t=e.cols,n=e.isHeader,l=e.className,r=e.headerColIndicies,c=void 0===r?[]:r;return a.createElement("tr",{className:l},t.map((function(e,t){if(o(e))return null;var l=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("content")}(e),r=l?e:{content:e};return a.createElement(s,Object.assign({key:t,index:t,isHeader:n||c.includes(t)},r))})))},u=function(e){var t=e.Tag,n=e.rows,l=e.headerColIndicies;return a.createElement(t,null,n.map((function(e,n){return o(e)?null:a.createElement(d,Object.assign({key:n,isHeader:"tbody"!==t,headerColIndicies:l},e))})))},m=function(e){var t=e.thead,n=e.tfoot,l=e.tbody,r=e.styles,c=e.colGroups,o=e.caption,s=e.headerColIndicies,d=e.className;return a.createElement(i,{className:d,$_css:r},c&&a.createElement("colgroup",null,c.map((function(e,t){return a.createElement("col",Object.assign({key:t},e))}))),o&&a.createElement("caption",null,o),t&&a.createElement(u,{Tag:"thead",rows:t,headerColIndicies:s}),n&&a.createElement(u,{Tag:"tfoot",rows:n,headerColIndicies:s}),l&&a.createElement(u,{Tag:"tbody",rows:l,headerColIndicies:s}))}}}]);
//# sourceMappingURL=component---src-components-pages-dev-notebook-chords-extensions-possible-extensions-for-chords-page-tsx-8d31f23aaf75a0fbf4e8.js.map