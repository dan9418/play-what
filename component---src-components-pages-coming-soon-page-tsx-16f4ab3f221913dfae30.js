"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[688],{8955:function(e,t,n){var r=n(7294),l=n(1074).default.div.withConfig({displayName:"ColumnManager__StyledColumnManager",componentId:"sc-1oemihq-0"})(["display:grid;gap:16px;grid-template-columns:1fr;"," ",""],(function(e){var t=e.$tablet;return t?"\n        @media(min-width: 512px) {\n            grid-template-columns: "+t.join(" ")+"\n        }\n    ":""}),(function(e){var t=e.$desktop;return t?"\n        @media(min-width: 1024px) {\n            grid-template-columns: "+t.join(" ")+"\n        }\n    ":""}));t.Z=function(e){var t=e.children,n=e.tablet,a=e.desktop;return r.createElement(l,{$tablet:n,$desktop:a},t)}},6998:function(e,t,n){n.r(t);var r=n(7294),l=n(1074),a=n(8246),i=n(8955),o=n(9117),c=n(4595),s=n(5488),u=n(8270),d=(0,l.default)(o.Z).withConfig({displayName:"coming-soonpage__StyledComingSoonPage",componentId:"sc-10toohx-0"})([""]),m=(0,l.css)(["border-collapse:collapse;width:100%;td,th{padding:8px;text-align:left;vertical-align:top;}th{border-bottom:1px solid ",";}tr:not(:last-child){td{border-bottom:1px solid ",";}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.utils.border}));t.default=function(){return r.createElement(d,{title:"Coming Soon",subtitle:"Potential Features"},r.createElement(i.Z,null,r.createElement(c.ZP,{title:"Release Schedule"},r.createElement(u.i,{styles:m,thead:[{cols:["Release","Version","Date"]}],tbody:[{cols:["Public User Beta","0.1.0","8/5/22"]},{cols:["Official Launch","1.0.0","2023"]},{cols:[{colSpan:3,content:r.createElement(s.L,{items:["Possible name change","Fresh logo","Sharing features","Chord progressions","Cadences","More tunings/voicings","Open source license","Technical documentation","Bug fixes"]})}]},{cols:["Future Versions","X.0.0","TBD"]},{cols:[{colSpan:3,content:r.createElement(s.L,{items:["Build-your-own practice materials","Grand staff viewer","Chord inversions","Rhythm support","Sound support","Ear training","User accounts","...and more!"]})}]}]})),r.createElement(c.ZP,{title:"Request A Feature"},r.createElement("p",null,r.createElement("a",{target:"_blank",href:a.o},"Use this form")," ","to submit a feature request or provide feedback."))))}},4595:function(e,t,n){n.d(t,{Ol:function(){return c},rg:function(){return o}});var r=n(3366),l=n(7294),a=n(1074),i=["title","subtitle","action","children","level"],o=a.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),c=function(e){var t=e.title,n=e.level,r=void 0===n?2:n,a=e.action,i=void 0===a?null:a,o="h"+r;return l.createElement("div",{className:"header"},l.createElement(o,null,t),i)};t.ZP=function(e){var t=e.title,n=e.subtitle,a=e.action,s=e.children,u=e.level,d=(0,r.Z)(e,i);return l.createElement(o,d,t&&l.createElement(c,{title:t,action:a,level:u}),n&&l.createElement(c,{title:n,level:u+1}),s)}},5315:function(e,t,n){n.d(t,{X:function(){return a},b:function(){return l}});var r=n(1074),l=(0,r.css)(["li{margin-left:8px;&:not(:first-child){margin-top:4px;}}h1,h2,h3,h4,h5,h6,h7{font-weight:bold;}section{margin-left:8px;&:not(:first-child){margin-top:24px;}}ul{&:not(:first-child){margin-top:8px;margin-left:8px;}}"]),a=(0,r.css)(["li{list-style-type:disc;margin:8px 0 8px 16px;}"])},5488:function(e,t,n){n.d(t,{L:function(){return s},a:function(){return c}});var r=n(1074),l=n(1082),a=n(7294),i=n(5315),o=function(e){var t=e.title,n=e.subtitle,r=e.level,l="h"+r,i="h"+(r+1);return a.createElement(a.Fragment,null,t&&a.createElement(l,null,t),n&&a.createElement(i,null,n))},c=function e(t){var n=t.title,r=t.subtitle,i=t.items,c=t.lists,s=t.level,d=void 0===s?1:s,m=t.prefix,p=void 0===m?"":m,f=t.styles;return a.createElement(u,{$_css:f},a.createElement(o,{title:n,subtitle:r,level:d}),a.createElement("ul",null,i&&i.length>0&&i.map((function(e){var t=e.text,n=e.link;return a.createElement("li",{key:t},n?a.createElement(l.rU,{to:""+p+n},t):t)})),c&&a.createElement("li",null,c.map((function(t){return a.createElement(e,Object.assign({},t,{key:t.title,level:d+1,prefix:p}))})))))},s=function(e){var t=e.items.map((function(e){return Array.isArray(e)?{text:e[0],link:e[1]}:{text:e}}));return a.createElement(c,{items:t,styles:i.X})},u=(0,r.default)("section").withConfig({displayName:"List___StyledSection",componentId:"sc-we9o98-0"})(["",""],(function(e){return e.$_css}))},8270:function(e,t,n){n.d(t,{i:function(){return m}});var r=n(1082),l=n(7294),a=n(1074),i=a.default.table.withConfig({displayName:"Table__StyledTable",componentId:"sc-1xr02h9-0"})([""]),o=(0,a.default)(i).withConfig({displayName:"Table___StyledStyledTable",componentId:"sc-1xr02h9-1"})(["",""],(function(e){return e.$_css})),c=function(e){return null==e||!1===e},s=function(e){e.index;var t=e.isHeader,n=e.content,a=e.colSpan,i=e.className,o=e.link,c=t?"th":"td",s=o?r.rU:l.Fragment,u=o?{to:o}:{};return l.createElement(c,{colSpan:a,className:i},l.createElement(s,u,n||""))},u=function(e){var t=e.cols,n=e.isHeader,r=e.className,a=e.headerColIndicies,i=void 0===a?[]:a;return l.createElement("tr",{className:r},t.map((function(e,t){if(c(e))return null;var r=function(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("content")}(e),a=r?e:{content:e};return l.createElement(s,Object.assign({key:t,index:t,isHeader:n||i.includes(t)},a))})))},d=function(e){var t=e.Tag,n=e.rows,r=e.headerColIndicies;return l.createElement(t,null,n.map((function(e,n){return c(e)?null:l.createElement(u,Object.assign({key:n,isHeader:"tbody"!==t,headerColIndicies:r},e))})))},m=function(e){var t=e.thead,n=e.tfoot,r=e.tbody,a=e.styles,i=e.colGroups,c=e.caption,s=e.headerColIndicies,u=e.className;return l.createElement(o,{className:u,$_css:a},i&&l.createElement("colgroup",null,i.map((function(e,t){return l.createElement("col",Object.assign({key:t},e))}))),c&&l.createElement("caption",null,c),t&&l.createElement(d,{Tag:"thead",rows:t,headerColIndicies:s}),n&&l.createElement(d,{Tag:"tfoot",rows:n,headerColIndicies:s}),r&&l.createElement(d,{Tag:"tbody",rows:r,headerColIndicies:s}))}}}]);
//# sourceMappingURL=component---src-components-pages-coming-soon-page-tsx-16f4ab3f221913dfae30.js.map