"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[815],{5923:function(e,t,n){n(7207);var l=n(5444),a=n(7294),r=n(9),i=n(6723),o=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-1kevxhx-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}"]);t.Z=function(e){var t=e.path.split("/");t=t.slice(0,t.length-1).filter((function(e){return!["root"].includes(e)}));var n=[];return t.reduce((function(e,t,r,o){var c=(e+"/"+t).replace("//","/");return n.push(a.createElement("li",{key:r},r>0&&a.createElement(i.ZP,{iconId:"next",size:10,color:"grey"}),a.createElement(l.rU,{to:c||"/"},0===r?"Home":t.replaceAll("-"," ")))),c}),"/"),a.createElement(o,null,n)}},7146:function(e,t,n){n.d(t,{v:function(){return l}});var l=n(9).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-176nxv8-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},8184:function(e,t,n){var l=n(7294),a=n(9).default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-391fea-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary}));t.Z=function(e){var t=e.title,n=e.subtitle,r=e.children;return l.createElement(a,null,l.createElement("div",{className:"header"},l.createElement("h1",null,t),n&&l.createElement("h2",null,n)),r)}},7703:function(e,t,n){n.d(t,{W:function(){return a},K:function(){return r}});var l=n(9),a=l.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-6nr46d-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),r=l.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-6nr46d-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},9553:function(e,t,n){n.d(t,{r:function(){return o}});var l=n(5245),a=n(7294),r=n(9),i=["title","action","children"],o=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-dwwfty-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card}));t.Z=function(e){var t=e.title,n=e.action,r=e.children,c=(0,l.Z)(e,i);return a.createElement(o,c,t&&a.createElement("div",{className:"header"},a.createElement("h2",null,t),n),r)}},6706:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(5444),a=n(7294),r=n(9),i=n(4010),o=n(8891),c=n(5923),d=n(7146),m=n(8184),s=n(7703),u=n(9553),p=n(6723),h=(0,r.default)(d.v).withConfig({displayName:"BrowsePage__StyledBrowsePage",componentId:"sc-k343db-0"})(["width:100%;max-width:1024px;margin:auto;","{display:grid;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}","{}margin:16px auto;p{margin:16px 0}h3{margin-bottom:8px;}a.all{display:block;font-size:140%;text-align:right;margin-top:32px;}li{list-style-type:disc;margin-left:16px;}}"],s.K,u.r),f=function(e){var t=(0,i.ut)();return a.createElement(h,null,a.createElement(c.Z,{path:e.path}),a.createElement(m.Z,{title:"Browse",subtitle:null}),a.createElement(s.K,null,a.createElement(u.Z,{title:"Chords"},a.createElement("p",null,"A chord is a group of notes, generally played simultaneously. Chords are the basic building blocks of harmony."),a.createElement("h3",null,"Common Chords"),a.createElement("ul",null,a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.MajTriad+"/"+t},"Major Triad")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.MinTriad+"/"+t},"Minor Triad")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.Maj7+"/"+t},"Major 7th")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.Min7+"/"+t},"Minor 7th")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.Dom7+"/"+t},"Dominant 7th")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.HalfDim7+"/"+t},"Half-Diminished 7th"))),a.createElement(l.rU,{to:"/browse/chords",className:"all"},"See All Chords ",a.createElement(p.ZP,{iconId:"next",size:12}))),a.createElement(u.Z,{title:"Scales"},a.createElement("p",null,"A scale is a group of notes, generally played sequentially. Scales are the basic building blocks of melody."),a.createElement("h3",null,"Common Scales"),a.createElement("ul",null,a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.Ionian+"/"+t},"Major (Ionian)")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.Aeolian+"/"+t},"Natural Minor (Aeolian)")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.MelodicMinor+"/"+t},"Melodic Minor")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.HarmonicMinor+"/"+t},"Harmonic Minor")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.MajorPentatonic+"/"+t},"Major Pentatonic")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.MinorPentatonic+"/"+t},"Minor Pentatonic"))),a.createElement(l.rU,{to:"/browse/scales",className:"all"},"See All Scales ",a.createElement(p.ZP,{iconId:"next",size:12})))))}}}]);
//# sourceMappingURL=component---src-pages-browse-tsx-4124811187514bf1ad0f.js.map