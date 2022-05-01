"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[815],{4140:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7294),r=n(1074),a=(n(7207),n(1597)),i=n(1586),o=n(6291),c=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),m=function(){var e=(0,i.V7)().path.split("/"),t=[];return e.reduce((function(e,n,r,i){var c=(e+"/"+n).replace("//","/")||"/",m=!["root","practice","test","experimental"].includes(n),s=0===r?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),d=m?a.rU:"span",u=m?c:void 0;return t.push(l.createElement("li",{key:r},r>0&&l.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),l.createElement(d,{to:u},s))),c}),"/"),l.createElement(c,null,t.slice(0,t.length-1))},s=n(4928),d=r.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),u=function(e){var t=e.title,n=e.subtitle,r=e.action,a=e.children;return l.createElement(l.Fragment,null,l.createElement(s.Z,{title:t}),l.createElement(m,null),l.createElement(d,null,l.createElement("div",{className:"header"},l.createElement("h1",null,t),n&&l.createElement("h2",null,n),r),a))}},4496:function(e,t,n){n.d(t,{K:function(){return a},W:function(){return r}});var l=n(1074),r=l.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-r9kss3-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),a=l.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-r9kss3-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},1011:function(e,t,n){n.d(t,{Ol:function(){return c},rg:function(){return o}});var l=n(3366),r=n(7294),a=n(1074),i=["title","action","children"],o=a.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),c=function(e){var t=e.title,n=e.action,l=void 0===n?null:n;return r.createElement("div",{className:"header"},r.createElement("h2",null,t),l)};t.ZP=function(e){var t=e.title,n=e.action,a=e.children,m=(0,l.Z)(e,i);return r.createElement(o,m,t&&r.createElement(c,{title:t,action:n}),a)}},6031:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var l=n(1597),r=n(7294),a=n(1074),i=n(1586),o=n(9544),c=n(7497),m=n(4140),s=n(4496),d=n(1011),u=n(6291),p=(0,a.default)(c.v).withConfig({displayName:"BrowsePage__StyledBrowsePage",componentId:"sc-1byuo1k-0"})(["width:100%;max-width:1024px;margin:auto;","{display:grid;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}","{}margin:16px auto;p{margin:16px 0}h3{margin-bottom:8px;}a.all{display:block;font-size:140%;text-align:right;margin-top:32px;}li{list-style-type:disc;margin-left:16px;}}"],s.K,d.rg),h=function(e){var t=(0,i.ut)();return r.createElement(p,null,r.createElement(m.Z,{title:"Browse",subtitle:null}),r.createElement(s.K,null,r.createElement(d.ZP,{title:"Chords"},r.createElement("p",null,"A chord is a group of notes, generally played simultaneously. Chords are the basic building blocks of harmony."),r.createElement("h3",null,"Common Chords"),r.createElement("ul",null,r.createElement("li",null,r.createElement(l.rU,{to:"/browse/chords/"+o.X.MajTriad+"/"+t},"Major Triad")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/chords/"+o.X.MinTriad+"/"+t},"Minor Triad")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/chords/"+o.X.Maj7+"/"+t},"Major 7th")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/chords/"+o.X.Min7+"/"+t},"Minor 7th")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/chords/"+o.X.Dom7+"/"+t},"Dominant 7th")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/chords/"+o.X.HalfDim7+"/"+t},"Half-Diminished 7th"))),r.createElement(l.rU,{to:"/browse/chords",className:"all"},"See All Chords ",r.createElement(u.ZP,{iconId:"next",size:12}))),r.createElement(d.ZP,{title:"Scales"},r.createElement("p",null,"A scale is a group of notes, generally played sequentially. Scales are the basic building blocks of melody."),r.createElement("h3",null,"Common Scales"),r.createElement("ul",null,r.createElement("li",null,r.createElement(l.rU,{to:"/browse/scales/"+o.xl.Ionian+"/"+t},"Major (Ionian)")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/scales/"+o.xl.Aeolian+"/"+t},"Natural Minor (Aeolian)")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/scales/"+o.xl.MelodicMinor+"/"+t},"Melodic Minor")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/scales/"+o.xl.HarmonicMinor+"/"+t},"Harmonic Minor")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/scales/"+o.xl.MajorPentatonic+"/"+t},"Major Pentatonic")),r.createElement("li",null,r.createElement(l.rU,{to:"/browse/scales/"+o.xl.MinorPentatonic+"/"+t},"Minor Pentatonic"))),r.createElement(l.rU,{to:"/browse/scales",className:"all"},"See All Scales ",r.createElement(u.ZP,{iconId:"next",size:12})))))}}}]);
//# sourceMappingURL=component---src-pages-browse-tsx-34a45a4b8ee4d2accfe4.js.map