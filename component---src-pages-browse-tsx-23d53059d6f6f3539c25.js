"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[815],{5923:function(e,t,l){l(7207);var n=l(5444),a=l(7294),r=l(9),i=l(6723),o=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-1kevxhx-0"})(["font-size:110%;display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:0 0 16px 0;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}"]);t.Z=function(e){e.id,e.name;var t=e.path.split("/");t=t.slice(0,t.length-1);var l=[];return t.reduce((function(e,t,r,o){var c=(e+"/"+t).replace("//","/");return l.push(a.createElement("li",{key:r},r>0&&a.createElement(i.ZP,{iconId:"next",size:10,color:"grey"}),a.createElement(n.rU,{to:c||"/"},0===r?"Home":t.replaceAll("-"," ")))),c}),"/"),a.createElement(o,null,l)}},7146:function(e,t,l){l.d(t,{v:function(){return n}});var n=l(9).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-176nxv8-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},8184:function(e,t,l){var n=l(7294),a=l(9).default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-391fea-0"})(["width:100%;.header{border-bottom:1px solid ",";padding-bottom:16px;width:100%;margin:auto;> h1{width:100%;font-size:300%;text-align:left;color:",";;}> h2{margin-top:8px;width:100%;text-align:left;color:",";;font-size:100%;}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary}));t.Z=function(e){var t=e.title,l=e.subtitle,r=e.children;return n.createElement(a,null,n.createElement("div",{className:"header"},n.createElement("h1",null,t),n.createElement("h2",null,l)),r)}},7703:function(e,t,l){l.d(t,{W:function(){return a},K:function(){return r}});var n=l(9),a=n.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-6nr46d-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),r=n.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-6nr46d-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},9553:function(e,t,l){l.d(t,{r:function(){return o}});var n=l(5245),a=l(7294),r=l(9),i=["title","action","children"],o=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-dwwfty-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card}));t.Z=function(e){var t=e.title,l=e.action,r=e.children,c=(0,n.Z)(e,i);return a.createElement(o,c,t&&a.createElement("div",{className:"header"},a.createElement("h2",null,t),l),r)}},6706:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var n=l(5444),a=l(7294),r=l(9),i=l(8891),o=l(5923),c=l(7146),d=l(8184),m=l(7703),s=l(9553),u=l(6723),p=(0,r.default)(c.v).withConfig({displayName:"BrowsePage__StyledBrowsePage",componentId:"sc-k343db-0"})(["width:100%;max-width:1024px;margin:auto;","{display:grid;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}","{}margin:16px auto;p{margin:16px 0}h3{margin-bottom:8px;}a.all{display:block;font-size:140%;text-align:right;margin-top:32px;}li{list-style-type:disc;margin-left:16px;}}"],m.K,s.r),h=function(e){return a.createElement(p,null,a.createElement(o.Z,{id:"browse",name:"Browse",path:e.path}),a.createElement(d.Z,{title:"Browse",subtitle:null}),a.createElement(m.K,null,a.createElement(s.Z,{title:"Chords"},a.createElement("p",null,"A chord is a group of notes, generally played simultaneously. Chords are the basic building blocks of harmony."),a.createElement("h3",null,"Common Chords"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/chords/"+i.X.MajTriad},"Major Triad")),a.createElement("li",null,a.createElement(n.rU,{to:"/chords/"+i.X.MinTriad},"Minor Triad")),a.createElement("li",null,a.createElement(n.rU,{to:"/chords/"+i.X.Maj7},"Major 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/chords/"+i.X.Min7},"Minor 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/chords/"+i.X.Dom7},"Dominant 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/chords/"+i.X.HalfDim7},"Half-Diminished 7th"))),a.createElement(n.rU,{to:"/chords",className:"all"},"See All Chords ",a.createElement(u.ZP,{iconId:"next",size:12}))),a.createElement(s.Z,{title:"Scales"},a.createElement("p",null,"A scale is a group of notes, generally played sequentially. Scales are the basic building blocks of melody."),a.createElement("h3",null,"Common Scales"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/scales/"+i.xl.Ionian},"Major (Ionian)")),a.createElement("li",null,a.createElement(n.rU,{to:"/scales/"+i.xl.Aeolian},"Natural Minor (Aeolian)")),a.createElement("li",null,a.createElement(n.rU,{to:"/scales/"+i.xl.MelodicMinor},"Melodic Minor")),a.createElement("li",null,a.createElement(n.rU,{to:"/scales/"+i.xl.HarmonicMinor},"Harmonic Minor")),a.createElement("li",null,a.createElement(n.rU,{to:"/scales/"+i.xl.MajorPentatonic},"Major Pentatonic")),a.createElement("li",null,a.createElement(n.rU,{to:"/scales/"+i.xl.MinorPentatonic},"Minor Pentatonic"))),a.createElement(n.rU,{to:"/scales",className:"all"},"See All Scales ",a.createElement(u.ZP,{iconId:"next",size:12})))))}}}]);
//# sourceMappingURL=component---src-pages-browse-tsx-23d53059d6f6f3539c25.js.map