"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[559],{3779:function(e,t,l){var n=l(7294),a=l(6700),r=l(7138);t.Z=function(e){var t=e.title,l=e.data;return n.createElement(a.ZP,{title:t},n.createElement(r.Z,{data:l}))}},7138:function(e,t,l){var n=l(5444),a=l(7294),r=l(9),i=l(4010),o=l(8295),c=l(8891),s=l(9864),m=r.default.table.withConfig({displayName:"CollectionTable__StyledCollectionTable",componentId:"sc-1l0jdfk-0"})(["width:100%;margin:auto;border-collapse:collapse;white-space:nowrap;td{&:not(:first-child){font-size:80%;}}td,th{line-height:32px;text-align:center;&:not(:first-child){width:32px;height:32px;display:none;@media(min-width:512px){display:table-cell;}}&:first-child{text-align:left;padding:0 8px;}}td{&.active{background-color:",";}}thead{text-transform:uppercase;font-size:80%;@media(max-width:511px){display:none;}tr th{background-color:",";color:",";}th:first-child{border-radius:8px 0 0 8px;}th:last-child{border-radius:0 8px 8px 0;}}a{display:block;}"],(function(e){return e.theme.surface.bg}),(function(e){return e.theme.surface.nav}),(function(e){return e.theme.text.inverted})),d=[1,2,3,4,5,6,7,8,9,10,11,12];t.Z=function(e){var t=e.data,l=e.semitones,r=void 0===l?[]:l,u=(0,i.ut)(),p=(0,i.f8)();return a.createElement(m,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",{colSpan:12},p?"Notes":"Intervals"))),a.createElement("tbody",null,t.map((function(e,t){var l=new(e.modelType===c.BY.Chord?o.Z:s.Z)(e.modelId,{root:p});return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement(n.rU,{to:"/browse/"+l.modelType+"/"+l.modelId+"/"+u},l.getShortName())),d.map((function(e,t){var n=l.intervals.findIndex((function(t){return t.pod[0]+1===e})),i=r.includes(e)?"active":"";if(n<0)return a.createElement("td",{key:t,className:i});var o=p?l.notes[n]:l.intervals[n];return a.createElement("td",{key:t,className:i},o.getName())})))}))))}},5377:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(7294),a=l(9),r=(l(7207),l(5444)),i=l(4010),o=l(4528),c=a.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),s=function(){var e=(0,i.V7)().path.split("/"),t=[];return e.reduce((function(e,l,a,i){var c=(e+"/"+l).replace("//","/")||"/",s=!["root","practice","test","experimental"].includes(l),m=0===a?"Home":l.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),d=s?r.rU:"span",u=s?c:void 0;return t.push(n.createElement("li",{key:a},a>0&&n.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),n.createElement(d,{to:u},m))),c}),"/"),n.createElement(c,null,t.slice(0,t.length-1))},m=l(1774),d=a.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),u=function(e){var t=e.title,l=e.subtitle,a=e.action,r=e.children;return n.createElement(n.Fragment,null,n.createElement(m.Z,{title:t}),n.createElement(s,null),n.createElement(d,null,n.createElement("div",{className:"header"},n.createElement("h1",null,t),l&&n.createElement("h2",null,l),a),r))}},7199:function(e,t,l){l.d(t,{W:function(){return a},K:function(){return r}});var n=l(9),a=n.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-r9kss3-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),r=n.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-r9kss3-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},7395:function(e,t,l){l.r(t);var n=l(5444),a=l(7294),r=l(9),i=l(4010),o=l(8891),c=l(7656),s=l(3779),m=l(1244),d=l(5377),u=l(7199),p=l(6700),E=(0,r.default)(m.v).withConfig({displayName:"ScalesPage__StyledScalesPage",componentId:"sc-1ivk3rf-0"})(["width:100%;max-width:1024px;margin:auto;.intro{padding:0 16px;}h3,p{margin:16px 0;}","{li{list-style-type:disc;margin-left:16px;}}"],u.K);t.default=function(e){var t=(0,i.ut)();return a.createElement(E,null,a.createElement(d.Z,{title:"Scales",subtitle:"The foundation of melody"}),a.createElement("div",null,a.createElement("p",{className:"intro"},"A scale is a collection of musical notes, which are generally played sequentially and ordered by pitch. Scales are defined by their first note (the ",a.createElement("em",null,"root"),") and its relationship to the following notes (",a.createElement("em",null,"intervals"),")."),a.createElement("p",{className:"intro"},"In their most common form, scales contain seven notes spanning a single octave. These seven ",a.createElement("em",null,"degrees")," are lettered A-G."),a.createElement("h2",null,"Modes"),a.createElement("p",{className:"intro"},"A ",a.createElement("em",null,"mode")," is simply a rotation of any given scale.")),a.createElement(u.W,null,a.createElement(u.K,null,a.createElement(s.Z,{title:"All Scales",data:c.Qo})),a.createElement(u.K,null,a.createElement(p.ZP,{title:"Common Scales",id:"common"},a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Ionian+"/"+t},"Major (Ionian)")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Aeolian+"/"+t},"Natural Minor (Aeolian)")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MelodicMinor+"/"+t},"Melodic Minor")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.HarmonicMinor+"/"+t},"Harmonic Minor")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MajorPentatonic+"/"+t},"Major Pentatonic")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MinorPentatonic+"/"+t},"Minor Pentatonic")))),a.createElement(p.ZP,{title:"Diatonic Modes",id:"diatonic"},a.createElement("p",null,"Diatonic scales are by far the most common type in Western music. They are defined by a specific sequence of seven intervals containing five whole-steps and two half-steps. The most common form of the diatonic scale is the Major scale (AKA the Ionian mode), which follows the pattern W-W-W-H-W-W-H."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Ionian+"/"+t},"Ionian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Dorian+"/"+t},"Dorian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Phrygian+"/"+t},"Phrygian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Lydian+"/"+t},"Lydian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Mixolydian+"/"+t},"Mixolydian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Aeolian+"/"+t},"Aeolian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Locrian+"/"+t},"Locrian")))),a.createElement(p.ZP,{title:"Harmonic Minor Modes",id:"harmonic"},a.createElement("p",null,"The Harmonic Minor scale is a slight variation of the Natural Minor scale (which itself is just a mode of the Diatonic scale). The only difference is that the seventh degree is raised a half-step, creating a Major 7th interval instead of a Minor 7th. This slight variation to the diatonic scale creates seven more unique modes."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Ionian+"/"+t},"Harmonic Minor")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Locrian6+"/"+t},"Locrian 6")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.IonianSharp5+"/"+t},"Ionian #5")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.DorianSharp4+"/"+t},"Dorian #4")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.PhrygianDominant+"/"+t},"Phrygian Dominant")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.LydianSharp2+"/"+t},"Lydian #2")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.SuperLocrianDoubleFlat7+"/"+t},"Super Locrian bb7")))),a.createElement(p.ZP,{title:"Melodic Minor Modes",id:"melodic"},a.createElement("p",null,"The Melodic Minor scale is formed by making one additional change to the Harmonic Minor scale. We simply raise the sixth degree by a half-step, creating a Major 6th interval instead of a Major 7th. This variation also creates seven unique modes."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MelodicMinor+"/"+t},"Melodic Minor")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.DorianFlat2+"/"+t},"Dorian b2")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.LydianSharp5+"/"+t},"Lydian #5")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.LydianDominiant+"/"+t},"Lydian Dominant")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MixolydianFlatSix+"/"+t},"Mixolydian b6")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.AeolianFlat5+"/"+t},"Aeolian b5")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.SuperLocrian+"/"+t},"Super Locrian (Altered)")))),a.createElement(p.ZP,{title:"Pentatonic Modes",id:"pentatonic"},a.createElement("p",null,"Pentatonic scales contain only five notes and are often a subset of diatonic scales. For example, the Major Pentatonic scale is the same as a Major Diatonic scale without the 4th and 7th degrees."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MajorPentatonic+"/"+t},"Major Pentatonic")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Egyptian+"/"+t},"Egyptian")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.ManGong+"/"+t},"Man Gong")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.Ritusen+"/"+t},"Ritusen")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MinorPentatonic+"/"+t},"Minor Pentatonic")))),a.createElement(p.ZP,{title:"Blues Scales",id:"blues"},a.createElement("p",null,'Blues scales are pentatonic scales with an extra "blue" note.'),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MajorBlues+"/"+t},"Major Blues")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MinorBlues+"/"+t},"Minor Blues")))),a.createElement(p.ZP,{title:"Bebop Scales",id:"bebop"},a.createElement("p",null,"Bebop scales are diatonic scales with an extra chomatic passing note."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.MajorBebop+"/"+t},"Major Bebop")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/scales/"+o.xl.DominantBebop+"/"+t},"Dominant Bebop")))))))}},6700:function(e,t,l){l.d(t,{rg:function(){return o},Ol:function(){return c}});var n=l(5245),a=l(7294),r=l(9),i=["title","action","children"],o=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),c=function(e){var t=e.title,l=e.action,n=void 0===l?null:l;return a.createElement("div",{className:"header"},a.createElement("h2",null,t),n)};t.ZP=function(e){var t=e.title,l=e.action,r=e.children,s=(0,n.Z)(e,i);return a.createElement(o,s,t&&a.createElement(c,{title:t,action:l}),r)}}}]);
//# sourceMappingURL=component---src-components-pages-scales-page-tsx-7dec1d36251de3462a66.js.map