"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[271],{4140:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(1074),i=(n(7207),n(1597)),l=n(1586),c=n(6291),o=a.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),m=function(){var e=(0,l.V7)().path.split("/"),t=[];return e.reduce((function(e,n,a,l){var o=(e+"/"+n).replace("//","/")||"/",m=!["root","practice","test","experimental"].includes(n),d=0===a?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),p=m?i.rU:"span",u=m?o:void 0;return t.push(r.createElement("li",{key:a},a>0&&r.createElement(c.ZP,{iconId:"next",size:10,color:"grey"}),r.createElement(p,{to:u},d))),o}),"/"),r.createElement(o,null,t.slice(0,t.length-1))},d=n(4928),p=a.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),u=function(e){var t=e.title,n=e.subtitle,a=e.action,i=e.children;return r.createElement(r.Fragment,null,r.createElement(d.Z,{title:t}),r.createElement(m,null),r.createElement(p,null,r.createElement("div",{className:"header"},r.createElement("h1",null,t),n&&r.createElement("h2",null,n),a),i))}},1011:function(e,t,n){n.d(t,{Ol:function(){return o},rg:function(){return c}});var r=n(3366),a=n(7294),i=n(1074),l=["title","action","children"],c=i.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),o=function(e){var t=e.title,n=e.action,r=void 0===n?null:n;return a.createElement("div",{className:"header"},a.createElement("h2",null,t),r)};t.ZP=function(e){var t=e.title,n=e.action,i=e.children,m=(0,r.Z)(e,l);return a.createElement(c,m,t&&a.createElement(o,{title:t,action:n}),i)}},9465:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(7294),a=n(8525),i=n(1074),l=n(3732),c=n(6403),o=n(714),m=n(9042),d=n(7497),p=n(4140),u=n(1011),s=(0,i.default)(d.v).withConfig({displayName:"ThemePage__StyledThemePage",componentId:"sc-ifebfl-0"})(["max-width:1024px;.grid{margin-top:16px;display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}}.theme-btns{font-weight:bold;margin-top:16px;display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}button{width:100%;}}","{margin:16px 0;}.row{display:flex;align-items:center;gap:16px;margin-bottom:16px;.text{display:flex;flex-direction:column;gap:4px;label{font-weight:bold;font-size:120%;}li{list-style-type:disc;margin-left:16px;font-style:italic;}span{color:",";}}}"],u.rg,(function(e){return e.theme.text.secondary})),f=i.default.input.withConfig({displayName:"ThemePage__Swatch",componentId:"sc-ifebfl-1"})(["appearance:none;border:none;cursor:pointer;height:64px;width:64px;border:1px solid black;background-color:",";"],(function(e){return e.$color})),h=function(e){var t,n=e.type,a=e.attr,l=e.title,c=(0,o.u)(),m=(0,i.useTheme)();return t=n?m[n][a]:m[a],r.createElement("div",{className:"row"},r.createElement(f,{type:"color",$color:t,value:t,onChange:function(e){return c(e.target.value,a,n)}}),r.createElement("div",{className:"text"},r.createElement("label",null,l),r.createElement("span",null,t)))},g=function(){var e=(0,a.Zl)(l.XG);return r.createElement(s,null,r.createElement(p.Z,{title:"Theme"}),r.createElement(u.ZP,{title:"Reset Theme"},r.createElement("div",{className:"theme-btns"},r.createElement(m.Z,{onClick:function(){return e(c.Z)}},"Light"),r.createElement(m.Z,{onClick:function(){return e(c.$)}},"Dark"))),r.createElement("div",{className:"grid"},r.createElement("div",null,r.createElement(u.ZP,{title:"Brand"},r.createElement(h,{title:"Primary",type:"brand",attr:"primary"}),r.createElement(h,{title:"Secondary",type:"brand",attr:"secondary"}),r.createElement(h,{title:"Accent",type:"brand",attr:"accent"})),r.createElement(u.ZP,{title:"Action"},r.createElement(h,{title:"Active",type:"action",attr:"active"}),r.createElement(h,{title:"Interactive",type:"action",attr:"interactive"})),r.createElement(u.ZP,{title:"Status"},r.createElement(h,{title:"Positive",type:"status",attr:"positive"}),r.createElement(h,{title:"Negative",type:"status",attr:"negative"}),r.createElement(h,{title:"Warning",type:"status",attr:"warning"}),r.createElement(h,{title:"Info",type:"status",attr:"info"}),r.createElement(h,{title:"Highlight",type:"status",attr:"highlight"}))),r.createElement("div",null,r.createElement(u.ZP,{title:"Surface"},r.createElement(h,{title:"Navigation",type:"surface",attr:"nav"}),r.createElement(h,{title:"Background",type:"surface",attr:"bg"}),r.createElement(h,{title:"Card",type:"surface",attr:"card"})),r.createElement(u.ZP,{title:"Text"},r.createElement(h,{title:"Primary",type:"text",attr:"primary"}),r.createElement(h,{title:"Secondary",type:"text",attr:"secondary"}),r.createElement(h,{title:"Inverted",type:"text",attr:"inverted"})),r.createElement(u.ZP,{title:"Utility"},r.createElement(h,{title:"Border",type:"utils",attr:"border"}),r.createElement(h,{title:"Hover Dark",type:"utils",attr:"hoverDark"}),r.createElement(h,{title:"Hover Light",type:"utils",attr:"hoverLight"})))))}}}]);
//# sourceMappingURL=component---src-pages-dev-experimental-theme-tsx-7aa99edb2676bd925ad0.js.map