"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[815],{7497:function(e,t,n){n.d(t,{v:function(){return l}});var l=n(1074).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1dcf9t1-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},4140:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7294),a=n(1074),r=(n(7207),n(1597)),i=n(1586),o=n(6291),c=a.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),d=function(){var e=(0,i.V7)().path.split("/"),t=[];return e.reduce((function(e,n,a,i){var c=(e+"/"+n).replace("//","/")||"/",d=!["root","practice","test","experimental"].includes(n),m=0===a?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),s=d?r.rU:"span",u=d?c:void 0;return t.push(l.createElement("li",{key:a},a>0&&l.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),l.createElement(s,{to:u},m))),c}),"/"),l.createElement(c,null,t.slice(0,t.length-1))},m=n(4928),s=a.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";display:flex;align-items:center;justify-content:space-between;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),u=function(e){var t=e.title,n=e.subtitle,a=e.action,r=e.children;return l.createElement(l.Fragment,null,l.createElement(m.Z,{title:n?t+" - "+n:t}),l.createElement(d,null),l.createElement(s,null,l.createElement("div",{className:"header"},l.createElement("h1",null,t,a&&l.createElement("div",{className:"action"},a)),n&&l.createElement("h2",null,n)),r))}},4496:function(e,t,n){n.d(t,{K:function(){return r},W:function(){return a}});var l=n(1074),a=l.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-r9kss3-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),r=l.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-r9kss3-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},1011:function(e,t,n){n.d(t,{Ol:function(){return c},rg:function(){return o}});var l=n(3366),a=n(7294),r=n(1074),i=["title","action","children"],o=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),c=function(e){var t=e.title,n=e.action,l=void 0===n?null:n;return a.createElement("div",{className:"header"},a.createElement("h2",null,t),l)};t.ZP=function(e){var t=e.title,n=e.action,r=e.children,d=(0,l.Z)(e,i);return a.createElement(o,d,t&&a.createElement(c,{title:t,action:n}),r)}},6031:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(1597),a=n(7294),r=n(1074),i=n(1586),o=n(9544),c=n(7497),d=n(4140),m=n(4496),s=n(1011),u=n(6291),p=(0,r.default)(c.v).withConfig({displayName:"BrowsePage__StyledBrowsePage",componentId:"sc-1byuo1k-0"})(["width:100%;max-width:1024px;margin:auto;","{display:grid;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}margin:16px auto;a.all{display:block;font-size:140%;text-align:right;margin-top:32px;}li{list-style-type:disc;margin-left:16px;}}"],m.K),f=function(e){var t=(0,i.ut)();return a.createElement(p,null,a.createElement(d.Z,{title:"Browse",subtitle:null}),a.createElement(m.K,null,a.createElement(s.ZP,{title:"Chords"},a.createElement("ul",null,a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.MajTriad+"/"+t},"Major Triad")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.MinTriad+"/"+t},"Minor Triad")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.Maj7+"/"+t},"Major 7th")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.Min7+"/"+t},"Minor 7th")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.Dom7+"/"+t},"Dominant 7th")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/chords/"+o.X.HalfDim7+"/"+t},"Half-Diminished 7th"))),a.createElement(l.rU,{to:"/browse/chords",className:"all"},"See All Chords ",a.createElement(u.ZP,{iconId:"next",size:12}))),a.createElement(s.ZP,{title:"Scales"},a.createElement("ul",null,a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.Ionian+"/"+t},"Major (Ionian)")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.Aeolian+"/"+t},"Natural Minor (Aeolian)")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.MelodicMinor+"/"+t},"Melodic Minor")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.HarmonicMinor+"/"+t},"Harmonic Minor")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.MajorPentatonic+"/"+t},"Major Pentatonic")),a.createElement("li",null,a.createElement(l.rU,{to:"/browse/scales/"+o.xl.MinorPentatonic+"/"+t},"Minor Pentatonic"))),a.createElement(l.rU,{to:"/browse/scales",className:"all"},"See All Scales ",a.createElement(u.ZP,{iconId:"next",size:12})))))}}}]);
//# sourceMappingURL=component---src-pages-browse-tsx-206424f479b7f0fb82c8.js.map