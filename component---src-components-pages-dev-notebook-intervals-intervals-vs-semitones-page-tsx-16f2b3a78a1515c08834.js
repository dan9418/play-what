"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[807],{5169:function(e,t,n){n.r(t);var a=n(7294),l=n(1074),r=n(5235),c=n(6057),i=n(9117),d=n(4595),o=n(8270),s=n(2595),u=function(e){return new r.Z(e).getName()},m=[{cols:["0","1","2","3","4","5","6","7","8","9","10","11"]}],p=[{cols:["","","",u(c.dT.A2),"",u(c.dT.A3),u(c.dT.A4),"",u(c.dT.A5),"",u(c.dT.A6),""]},{cols:[u(c.dT.P1),u(c.dT.m2),u(c.dT.M2),u(c.dT.m3),u(c.dT.M3),u(c.dT.P4),"",u(c.dT.P5),u(c.dT.m6),u(c.dT.M6),u(c.dT.m7),u(c.dT.M7)]},{cols:["","",u(c.dT.d3),"",u(c.dT.d4),"",u(c.dT.d5),u(c.dT.d6),"",u(c.dT.d7),"",""]}],f=(0,l.default)(i.Z).withConfig({displayName:"intervals-vs-semitonespage__StyledPage",componentId:"sc-dznk6b-0"})([""]);t.default=function(){return a.createElement(f,{title:"Intervals vs Semitones"},a.createElement(d.ZP,null,a.createElement(o.i,{tfoot:m,tbody:p,styles:s.H})))}},4595:function(e,t,n){n.d(t,{Ol:function(){return d},rg:function(){return i}});var a=n(3366),l=n(7294),r=n(1074),c=["title","subtitle","action","children","level"],i=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),d=function(e){var t=e.title,n=e.level,a=void 0===n?2:n,r=e.action,c=void 0===r?null:r,i="h"+a;return l.createElement("div",{className:"header"},l.createElement(i,null,t),c)};t.ZP=function(e){var t=e.title,n=e.subtitle,r=e.action,o=e.children,s=e.level,u=(0,a.Z)(e,c);return l.createElement(i,u,t&&l.createElement(d,{title:t,action:r,level:s}),n&&l.createElement(d,{title:n,level:s+1}),o)}},2595:function(e,t,n){n.d(t,{H:function(){return l},R:function(){return r}});var a=n(1074),l=(0,a.css)(["width:100%;border-collapse:collapse;td,th{padding:4px;text-align:center;}"]),r=(0,a.css)(["border-collapse:collapse;width:unset !important;margin:auto;td,th{height:48px;width:48px;text-align:center;vertical-align:middle !important;}td{border:1px solid black;}"])},8270:function(e,t,n){n.d(t,{i:function(){return m}});var a=n(1082),l=n(7294),r=n(1074),c=r.default.table.withConfig({displayName:"Table__StyledTable",componentId:"sc-1xr02h9-0"})([""]),i=(0,r.default)(c).withConfig({displayName:"Table___StyledStyledTable",componentId:"sc-1xr02h9-1"})(["",""],(function(e){return e.$_css})),d=function(e){return null==e||!1===e},o=function(e){e.index;var t=e.isHeader,n=e.content,r=e.colSpan,c=e.className,i=e.link,d=t?"th":"td",o=i?a.rU:l.Fragment,s=i?{to:i}:{};return l.createElement(d,{colSpan:r,className:c},l.createElement(o,s,n||""))},s=function(e){var t=e.cols,n=e.isHeader,a=e.className,r=e.headerColIndicies,c=void 0===r?[]:r;return l.createElement("tr",{className:a},t.map((function(e,t){if(d(e))return null;var a=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("content")}(e),r=a?e:{content:e};return l.createElement(o,Object.assign({key:t,index:t,isHeader:n||c.includes(t)},r))})))},u=function(e){var t=e.Tag,n=e.rows,a=e.headerColIndicies;return l.createElement(t,null,n.map((function(e,n){return d(e)?null:l.createElement(s,Object.assign({key:n,isHeader:"tbody"!==t,headerColIndicies:a},e))})))},m=function(e){var t=e.thead,n=e.tfoot,a=e.tbody,r=e.styles,c=e.colGroups,d=e.caption,o=e.headerColIndicies,s=e.className;return l.createElement(i,{className:s,$_css:r},c&&l.createElement("colgroup",null,c.map((function(e,t){return l.createElement("col",Object.assign({key:t},e))}))),d&&l.createElement("caption",null,d),t&&l.createElement(u,{Tag:"thead",rows:t,headerColIndicies:o}),n&&l.createElement(u,{Tag:"tfoot",rows:n,headerColIndicies:o}),a&&l.createElement(u,{Tag:"tbody",rows:a,headerColIndicies:o}))}}}]);
//# sourceMappingURL=component---src-components-pages-dev-notebook-intervals-intervals-vs-semitones-page-tsx-16f2b3a78a1515c08834.js.map