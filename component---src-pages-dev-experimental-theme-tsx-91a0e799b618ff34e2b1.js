"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[271],{7497:function(e,t,n){n.d(t,{v:function(){return a}});var a=n(1074).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1dcf9t1-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},4140:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(1074),i=(n(7207),n(1597)),l=n(1586),c=n(6291),o=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),m=function(){var e=(0,l.V7)().path.split("/"),t=[];return e.reduce((function(e,n,r,l){var o=(e+"/"+n).replace("//","/")||"/",m=!["root","test","experimental"].includes(n),d=0===r?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),p=m?i.rU:"span",s=m?o:void 0;return t.push(a.createElement("li",{key:r},r>0&&a.createElement(c.ZP,{iconId:"next",size:10,color:"grey"}),a.createElement(p,{to:s},d))),o}),"/"),a.createElement(o,null,t.slice(0,t.length-1))},d=n(4928),p=r.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";display:flex;align-items:center;justify-content:space-between;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),s=function(e){var t=e.title,n=e.subtitle,r=e.action,i=e.children;return a.createElement(a.Fragment,null,a.createElement(d.Z,{title:n?t+" - "+n:t}),a.createElement(m,null),a.createElement(p,null,a.createElement("div",{className:"header"},a.createElement("h1",null,t,r&&a.createElement("div",{className:"action"},r)),n&&a.createElement("h2",null,n)),i))}},1011:function(e,t,n){n.d(t,{Ol:function(){return o},rg:function(){return c}});var a=n(3366),r=n(7294),i=n(1074),l=["title","action","children","as"],c=i.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),o=function(e){var t=e.title,n=e.as,a=void 0===n?"h2":n,i=e.action,l=void 0===i?null:i;return r.createElement("div",{className:"header"},r.createElement(a,null,t),l)};t.ZP=function(e){var t=e.title,n=e.action,i=e.children,m=e.as,d=(0,a.Z)(e,l);return r.createElement(c,d,t&&r.createElement(o,{title:t,action:n,as:m}),i)}},9465:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(7294),r=n(8525),i=n(1074),l=n(3732),c=n(6403),o=n(714),m=n(9042),d=n(7497),p=n(4140),s=n(1011),u=(0,i.default)(d.v).withConfig({displayName:"ThemePage__StyledThemePage",componentId:"sc-ifebfl-0"})(["max-width:1024px;.grid{margin-top:16px;display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}}.theme-btns{font-weight:bold;margin-top:16px;display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}button{width:100%;}}","{margin:16px 0;}.row{display:flex;align-items:center;gap:16px;margin-bottom:16px;.text{display:flex;flex-direction:column;gap:4px;label{font-weight:bold;font-size:120%;}li{list-style-type:disc;margin-left:16px;font-style:italic;}span{color:",";}}}"],s.rg,(function(e){return e.theme.text.secondary})),f=i.default.input.withConfig({displayName:"ThemePage__Swatch",componentId:"sc-ifebfl-1"})(["appearance:none;border:none;cursor:pointer;height:64px;width:64px;border:1px solid black;background-color:",";"],(function(e){return e.$color})),h=function(e){var t,n=e.type,r=e.attr,l=e.title,c=(0,o.u)(),m=(0,i.useTheme)();return t=n?m[n][r]:m[r],a.createElement("div",{className:"row"},a.createElement(f,{type:"color",$color:t,value:t,onChange:function(e){return c(e.target.value,r,n)}}),a.createElement("div",{className:"text"},a.createElement("label",null,l),a.createElement("span",null,t)))},g=function(){var e=(0,r.Zl)(l.XG);return a.createElement(u,null,a.createElement(p.Z,{title:"Theme"}),a.createElement(s.ZP,{title:"Reset Theme"},a.createElement("div",{className:"theme-btns"},a.createElement(m.Z,{onClick:function(){return e(c.Z)}},"Light"),a.createElement(m.Z,{onClick:function(){return e(c.$)}},"Dark"))),a.createElement("div",{className:"grid"},a.createElement("div",null,a.createElement(s.ZP,{title:"Brand"},a.createElement(h,{title:"Primary",type:"brand",attr:"primary"}),a.createElement(h,{title:"Secondary",type:"brand",attr:"secondary"}),a.createElement(h,{title:"Accent",type:"brand",attr:"accent"})),a.createElement(s.ZP,{title:"Action"},a.createElement(h,{title:"Active",type:"action",attr:"active"}),a.createElement(h,{title:"Interactive",type:"action",attr:"interactive"})),a.createElement(s.ZP,{title:"Status"},a.createElement(h,{title:"Positive",type:"status",attr:"positive"}),a.createElement(h,{title:"Negative",type:"status",attr:"negative"}),a.createElement(h,{title:"Warning",type:"status",attr:"warning"}),a.createElement(h,{title:"Info",type:"status",attr:"info"}),a.createElement(h,{title:"Highlight",type:"status",attr:"highlight"}))),a.createElement("div",null,a.createElement(s.ZP,{title:"Surface"},a.createElement(h,{title:"Navigation",type:"surface",attr:"nav"}),a.createElement(h,{title:"Background",type:"surface",attr:"bg"}),a.createElement(h,{title:"Card",type:"surface",attr:"card"})),a.createElement(s.ZP,{title:"Text"},a.createElement(h,{title:"Primary",type:"text",attr:"primary"}),a.createElement(h,{title:"Secondary",type:"text",attr:"secondary"}),a.createElement(h,{title:"Inverted",type:"text",attr:"inverted"})),a.createElement(s.ZP,{title:"Utility"},a.createElement(h,{title:"Border",type:"utils",attr:"border"}),a.createElement(h,{title:"Hover Dark",type:"utils",attr:"hoverDark"}),a.createElement(h,{title:"Hover Light",type:"utils",attr:"hoverLight"})))))}}}]);
//# sourceMappingURL=component---src-pages-dev-experimental-theme-tsx-91a0e799b618ff34e2b1.js.map