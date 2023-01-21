"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[80],{3927:function(e,t,a){a.r(t);var r=a(7294),n=a(8525),l=a(1074),i=a(3732),c=a(6403),o=a(714),m=a(9042),d=a(1090),p=a(1011),u=(0,l.default)(d.Z).withConfig({displayName:"edit-themepage__StyledThemePage",componentId:"sc-100bfv2-0"})([".grid{margin-top:16px;display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}}.theme-btns{font-weight:bold;margin-top:16px;display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}button{width:100%;}}.row{display:flex;align-items:center;gap:16px;margin-bottom:16px;.text{display:flex;flex-direction:column;gap:4px;label{font-weight:bold;font-size:120%;}span{color:",";}}}"],(function(e){return e.theme.text.secondary})),s=l.default.input.withConfig({displayName:"edit-themepage__Swatch",componentId:"sc-100bfv2-1"})(["appearance:none;border:none;cursor:pointer;height:64px;width:64px;border:1px solid black;background-color:",";"],(function(e){return e.$color})),g=function(e){var t,a=e.type,n=e.attr,i=e.title,c=(0,o.u)(),m=(0,l.useTheme)();return t=a?m[a][n]:m[n],r.createElement("div",{className:"row"},r.createElement(s,{type:"color",$color:t,value:t,onChange:function(e){return c(e.target.value,n,a)}}),r.createElement("div",{className:"text"},r.createElement("label",null,i),r.createElement("span",null,t)))};t.default=function(){var e=(0,n.Zl)(i.XG);return r.createElement(u,{title:"Theme"},r.createElement(p.ZP,{title:"Reset Theme"},r.createElement("div",{className:"theme-btns"},r.createElement(m.Z,{onClick:function(){return e(c.Z)}},"Light"),r.createElement(m.Z,{onClick:function(){return e(c.$)}},"Dark"))),r.createElement("div",{className:"grid"},r.createElement("div",null,r.createElement(p.ZP,{title:"Brand"},r.createElement(g,{title:"Primary",type:"brand",attr:"primary"}),r.createElement(g,{title:"Secondary",type:"brand",attr:"secondary"}),r.createElement(g,{title:"Accent",type:"brand",attr:"accent"})),r.createElement(p.ZP,{title:"Action"},r.createElement(g,{title:"Active",type:"action",attr:"active"}),r.createElement(g,{title:"Interactive",type:"action",attr:"interactive"})),r.createElement(p.ZP,{title:"Status"},r.createElement(g,{title:"Positive",type:"status",attr:"positive"}),r.createElement(g,{title:"Negative",type:"status",attr:"negative"}),r.createElement(g,{title:"Warning",type:"status",attr:"warning"}),r.createElement(g,{title:"Info",type:"status",attr:"info"}),r.createElement(g,{title:"Highlight",type:"status",attr:"highlight"}))),r.createElement("div",null,r.createElement(p.ZP,{title:"Surface"},r.createElement(g,{title:"Navigation",type:"surface",attr:"nav"}),r.createElement(g,{title:"Background",type:"surface",attr:"bg"}),r.createElement(g,{title:"Card",type:"surface",attr:"card"})),r.createElement(p.ZP,{title:"Text"},r.createElement(g,{title:"Primary",type:"text",attr:"primary"}),r.createElement(g,{title:"Secondary",type:"text",attr:"secondary"}),r.createElement(g,{title:"Inverted",type:"text",attr:"inverted"})),r.createElement(p.ZP,{title:"Utility"},r.createElement(g,{title:"Border",type:"utils",attr:"border"}),r.createElement(g,{title:"Hover Dark",type:"utils",attr:"hoverDark"}),r.createElement(g,{title:"Hover Light",type:"utils",attr:"hoverLight"})))))}},1011:function(e,t,a){a.d(t,{Ol:function(){return o},rg:function(){return c}});var r=a(3366),n=a(7294),l=a(1074),i=["title","subtitle","action","children","level"],c=l.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),o=function(e){var t=e.title,a=e.level,r=void 0===a?2:a,l=e.action,i=void 0===l?null:l,c="h"+r;return n.createElement("div",{className:"header"},n.createElement(c,null,t),i)};t.ZP=function(e){var t=e.title,a=e.subtitle,l=e.action,m=e.children,d=e.level,p=(0,r.Z)(e,i);return n.createElement(c,p,t&&n.createElement(o,{title:t,action:l,level:d}),a&&n.createElement(o,{title:a,level:d+1}),m)}}}]);
//# sourceMappingURL=component---src-components-pages-dev-experimental-edit-theme-page-tsx-a3bde16e6ebdd1a8be1c.js.map