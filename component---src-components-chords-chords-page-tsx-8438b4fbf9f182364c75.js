"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[609],{2727:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(9),i=(r(7207),r(5444)),l=r(4010),o=r(6723),s=a.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-1kevxhx-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),u=function(){var e=(0,l.V7)().path.split("/"),t=[];return e.reduce((function(e,r,a,l){var s=(e+"/"+r).replace("//","/")||"/",u=!["root"].includes(r),c=0===a?"Home":r.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),d=u?i.rU:"span",m=u?s:void 0;return t.push(n.createElement("li",{key:a},a>0&&n.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),n.createElement(d,{to:m},c))),s}),"/"),n.createElement(s,null,t.slice(0,t.length-1))},c=r(1029),d=a.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-391fea-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),m=function(e){var t=e.title,r=e.subtitle,a=e.children;return n.createElement(n.Fragment,null,n.createElement(c.Z,{title:t}),n.createElement(u,null),n.createElement(d,null,n.createElement("div",{className:"header"},n.createElement("h1",null,t),r&&n.createElement("h2",null,r)),a))}},7703:function(e,t,r){r.d(t,{W:function(){return a},K:function(){return i}});var n=r(9),a=n.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-6nr46d-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),i=n.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-6nr46d-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},9553:function(e,t,r){r.d(t,{r:function(){return o}});var n=r(5245),a=r(7294),i=r(9),l=["title","action","children"],o=i.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-dwwfty-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card}));t.Z=function(e){var t=e.title,r=e.action,i=e.children,s=(0,n.Z)(e,l);return a.createElement(o,s,t&&a.createElement("div",{className:"header"},a.createElement("h2",null,t),r),i)}},6230:function(e,t,r){r.r(t);var n=r(5444),a=r(7294),i=r(9),l=r(4010),o=r(8891),s=r(7656),u=r(3779),c=r(7146),d=r(2727),m=r(7703),h=r(9553),f=(0,i.default)(c.v).withConfig({displayName:"ChordsPage__StyledChordsPage",componentId:"sc-vrly6s-0"})(["width:100%;max-width:1024px;margin:auto;.intro{padding:0 16px;}h3,p{margin:16px 0;}","{li{list-style-type:disc;margin-left:16px;}}"],m.K);t.default=function(e){var t=(0,l.ut)();return a.createElement(f,null,a.createElement(d.Z,{title:"Chords",subtitle:"The foundation of harmony"}),a.createElement("div",null,a.createElement("p",{className:"intro"},"A chord is a collection of musical notes, usually played simultaneously. Chords are defined by their first note (the ",a.createElement("em",null,"root"),") and its relationship to the following notes (",a.createElement("em",null,"intervals"),")."),!1),a.createElement(m.W,null,a.createElement(m.K,null,a.createElement(u.Z,{title:"All Chords",data:s.Jb})),a.createElement(m.K,null,a.createElement(h.Z,{title:"Triads",id:"triad"},a.createElement("p",null,"A triad is the most basic type of chord. It consists of 3 intervals (a root, a third, and a fifth). The specific thirds and fifths used determine the type (or ",a.createElement("em",null,"quality"),") of the triad."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.MajTriad+"/"+t},"Major Triad")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.MinTriad+"/"+t},"Minor Triad")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.AugTriad+"/"+t},"Augmented Triad")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.DimTriad+"/"+t},"Diminished Triad")))),a.createElement(h.Z,{title:"Seventh Chords",id:"seventh"},a.createElement("p",null,"A seventh chord is a triad with an additional seventh interval stacked on top."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Maj7+"/"+t},"Major 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Min7+"/"+t},"Minor 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Dom7+"/"+t},"Dominant 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.MinMaj7+"/"+t},"Minor-Major 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Dim7+"/"+t},"Diminished 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.HalfDim7+"/"+t},"Half-Diminished 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Aug7+"/"+t},"Augmented 7th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.AugMaj7+"/"+t},"Augmented Major 7th")))),a.createElement(h.Z,{title:"Sixth Chords",id:"sixth"},a.createElement("p",null,"A sixth chord is a triad with an additional sixth interval stacked on top. They are similar in function to seventh chords."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Maj6+"/"+t},"Major 6th")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Min6+"/"+t},"Minor 6th")))),a.createElement(h.Z,{title:"Suspended Chords",id:"suspended"},a.createElement("p",null,"A suspended chord is a like a triad, except it sustitutes a second or fourth interval in place of the third."),a.createElement("h3",null,"Examples"),a.createElement("ul",null,a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Sus2+"/"+t},"Suspended 2nd")),a.createElement("li",null,a.createElement(n.rU,{to:"/browse/chords/"+o.X.Sus4+"/"+t},"Suspended 4th")))))))}},3779:function(e,t,r){var n=r(7294),a=r(9553),i=r(7138);t.Z=function(e){var t=e.title,r=e.data;return n.createElement(a.Z,{title:t},n.createElement(i.Z,{data:r}))}},7138:function(e,t,r){var n=r(5444),a=r(7294),i=r(9),l=r(4010),o=r(8295),s=r(8891),u=r(9864),c=i.default.table.withConfig({displayName:"CollectionTable__StyledCollectionTable",componentId:"sc-1l0jdfk-0"})(["width:100%;margin:auto;border-collapse:collapse;white-space:nowrap;td,th{line-height:32px;&:not(:first-child){text-align:center;width:32px;height:32px;display:none;@media(min-width:512px){display:table-cell;}}&:first-child{text-align:left;padding:0 8px;}}td{&.active{background-color:",";}}thead{tr th{background-color:",";color:",";}th:first-child{border-radius:8px 0 0 8px;}th:last-child{border-radius:0 8px 8px 0;}}tbody{tr{&:hover{background-color:",";}}}a{display:block;}"],(function(e){return e.theme.surface.bg}),(function(e){return e.theme.surface.nav}),(function(e){return e.theme.text.inverted}),(function(e){return e.theme.utils.hoverDark})),d=[1,2,3,4,5,6,7,8,9,10,11];t.Z=function(e){var t=e.data,r=e.semitones,i=void 0===r?[]:r,m=(0,l.ut)(),h=(0,l.f8)();return a.createElement(c,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),d.map((function(e,t){return a.createElement("th",{key:t},e)})))),a.createElement("tbody",null,t.map((function(e){var t=new(e.modelId===s.ww.Chord?o.Z:u.Z)(e.id,{root:h});return a.createElement("tr",null,a.createElement("td",null,a.createElement(n.rU,{to:"/browse/"+t.modelId+"/"+t.id+"/"+m},t.getShortName())),d.map((function(e,r){var n=t.intervals.findIndex((function(t){return t.pod[0]+1===e})),l=i.includes(e)?"active":"";if(n<0)return a.createElement("td",{key:r,className:l});var o=h?t.notes[n]:t.intervals[n];return a.createElement("td",{key:r,className:l},o.getName())})))}))))}},8295:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(4578),a=r(7915),i=r(8891),l=r(7656),o=r(4160),s=r(6343),u=function(e){function t(t,r){var n;return void 0===r&&(r=void 0),(n=e.call(this,l.uV,t,r)||this).modelId=i.ww.Chord,n}return(0,n.Z)(t,e),t.prototype.getNumeral=function(e){return function(e,t){switch(e){case 1:switch(t){case i.X.MajTriad:case i.X.Maj7:return"I";case i.X.MinTriad:case i.X.Min7:return"i";case i.X.Dom7:return"I⁷";case i.X.HalfDim7:return"i ̽";case i.X.AugTriad:return"I+";case i.X.DimTriad:return"i°"}case 2:switch(t){case i.X.MajTriad:case i.X.Maj7:return"II";case i.X.MinTriad:case i.X.Min7:return"ii";case i.X.Dom7:return"II⁷";case i.X.HalfDim7:return"ii ̽";case i.X.AugTriad:return"II+";case i.X.DimTriad:return"ii°"}case 3:switch(t){case i.X.MajTriad:case i.X.Maj7:return"III";case i.X.MinTriad:case i.X.Min7:return"iiii";case i.X.Dom7:return"III⁷";case i.X.HalfDim7:return"iii ̽";case i.X.AugTriad:return"III+";case i.X.DimTriad:return"iii°"}case 4:switch(t){case i.X.MajTriad:case i.X.Maj7:return"IV";case i.X.MinTriad:case i.X.Min7:return"iv";case i.X.Dom7:return"IV⁷";case i.X.HalfDim7:return"iv ̽";case i.X.AugTriad:return"IV+";case i.X.DimTriad:return"iv°"}case 5:switch(t){case i.X.MajTriad:case i.X.Maj7:return"V";case i.X.MinTriad:case i.X.Min7:return"v";case i.X.Dom7:return"V⁷";case i.X.HalfDim7:return"v ̽";case i.X.AugTriad:return"V+";case i.X.DimTriad:return"v°"}case 6:switch(t){case i.X.MajTriad:case i.X.Maj7:return"VI";case i.X.MinTriad:case i.X.Min7:return"vi";case i.X.Dom7:return"VI⁷";case i.X.HalfDim7:return"vi ̽";case i.X.AugTriad:return"VI+";case i.X.DimTriad:return"vi°"}case 7:switch(t){case i.X.MajTriad:case i.X.Maj7:return"VII";case i.X.MinTriad:case i.X.Min7:return"vii";case i.X.Dom7:return"VII⁷";case i.X.HalfDim7:return"vii ̽";case i.X.AugTriad:return"VII+";case i.X.DimTriad:return"vii°"}}}(e,this.id)},t}(s.Z);u.fromValue=function(e){return a.Z.fromValue(l.Jb,u,e,o.qP,o.Od)}},7416:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4578),a=(r(2416),r(3069)),i=r(7915),l=r(8891),o=r(7656),s=r(6436),u=r(4160),c=function(e){function t(t){return e.call(this,o.if.get(t))||this}(0,n.Z)(t,e);var r=t.prototype;return r.getColor=function(){return this.equals(new t(l.dT.P1))?"red":"#333"},r.getName=function(){var e=(0,u.td)(this.pod),t=e[0],r=e[1],n=o.g$[r];if(!n)return"?";var a=n[0],i=a,s=n[n.length-1],c=null,d=null;1===n.length?(c=a,d=l.dC.perfect):t<=i.value[0]?(c=i,d=l.dC.min):t>=s.value[0]&&(c=s,d=l.dC.maj);var m=c.value[0]-e[0];if(this.offset=m,0===m)return""+d.symbol+(r+1);m>0?d=l.dC.dim:m<0&&(d=l.dC.aug);var h=Math.abs(m);return""+d.symbol.repeat(h)+(r+1)},r.getRatio=function(){var e=this.pod[0],t=a.Z.getFrequency(0);return"1:"+(a.Z.getFrequency(e)/t).toFixed(2)},r.isInSuperset=function(e){return!(e.length<=1)&&(0,u.Cw)(e,[this.pod])},r.getSupersets=function(){var e=this,t=[],r=o.Jb.filter((function(t){return e.isInSuperset(t.value)}));r.length&&t.push({modelName:"Chords",values:r});var n=o.Qo.filter((function(t){return e.isInSuperset(t.value)}));return n.length&&t.push({modelName:"Scales",values:n}),t},t}(s.Z);c.fromValue=function(e){return i.Z.fromValue(o.Ou,c,e,u.pR,u.td)}},6343:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(4578),a=r(7416),i=r(7915),l=r(7656),o=r(6181),s=r(4160),u=function(e){function t(t,r,n){var i;(i=e.call(this)||this).getName=function(){return(i.root?i.root.name+" ":"")+i.name},i.getShortName=function(){return(0,s.VQ)(i.name)};var l=t.get(r);if(!l)throw new Error("Unknown presetId: "+r);return i.modelId=l.modelId,i.id=l.id,i.name=l.name,i.tags=l.tags,i.aliases=l.aliases,i.podList=l.value,i.intervals=l.value.map((function(e){return a.Z.fromValue(e)})),n&&n.root&&i.applyRoot(n.root),i}(0,n.Z)(t,e);var r=t.prototype;return r.equals=function(e){return(0,s.qP)(this.podList,e.podList)},r.applyRoot=function(e){var t,r;try{t=(r=this.intervals.map((function(t){return(0,s._l)(t.pod,e.pod)}))).map((function(e){return new o.Z(e)}))}catch(n){throw console.error(n),new Error("Unable to apply root")}return this.root=e,this.notes=t,this.notePods=r,this.name=this.getName(),this},r.getIntervalListString=function(){return this.intervals.map((function(e){return e.getName()})).join(", ")},r.isInSuperset=function(e){return!(e.length<=this.podList.length)&&(0,s.Cw)(e,this.podList)},r.containsSubset=function(e){return!(e.length>=this.podList.length)&&(0,s.Cw)(this.podList,e)},r.getSubchords=function(){var e=this;return l.Jb.filter((function(t){return e.containsSubset(t.value)}))},r.getSuperchords=function(){var e=this;return l.Jb.filter((function(t){return e.isInSuperset(t.value)}))},r.getSubscales=function(){var e=this;return l.Qo.filter((function(t){return e.containsSubset(t.value)}))},r.getSuperscales=function(){var e=this;return l.Qo.filter((function(t){return e.isInSuperset(t.value)}))},r.getPreview=function(){return this.getIntervalListString()},r.tryGetPodPairAtPitch=function(e){var t=(0,s.f6)(this.notePods,e,!1);return null==t?[void 0,void 0]:[this.intervals[t],this.notes[t]]},t}(i.Z)},9864:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(3433),a=r(4578),i=r(7416),l=r(3686),o=r(7809),s=r(8295),u=r(7915),c=r(8891),d=r(7656),m=r(4160),h=function(e){function t(t,r){var n;return void 0===r&&(r=void 0),(n=e.call(this,d.f2,t,r)||this).modelId=c.ww.Scale,n}(0,a.Z)(t,e);var r=t.prototype;return r.getMode=function(e){var r=(0,n.Z)(this.podList);r=l.Z.rotate(r,e);for(var a=this.podList.length-e;a<r.length;a++){var o=r[a];r[a]=[o[0]+12,o[1]+7]}for(var s=[[0,0]],u=[new i.Z(c.dT.P1)],d=0;d<r.length-1;d++){var h=(0,m.Tx)(r[d+1],r[0]);s.push(h);var f=i.Z.fromValue(h);u.push(f)}return t.fromValue(s)},r.getAllModes=function(){var e=[];if(this.tags.includes(c.Vp.Diatonic)||this.tags.includes(c.Vp.Pentatonic)||this.tags.includes(c.Vp.MelodicMode)||this.tags.includes(c.Vp.HarmonicMode))for(var t=0;t<this.podList.length;t++)e.push(this.getMode(t));return e},r.getNumeral=function(e){for(var t=[],r=0;r<this.podList.length;r+=2){var n=o.Z.moduloSum(e,r,this.podList.length),a=this.intervals[n];t.push(a)}for(var i=[[0,0]],l=0;l<t.length-1;l++){var u=(0,m.Tx)(t[l+1].pod,t[0].pod);i.push(u)}var c=s.Z.fromValue(i);return this.root&&c.applyRoot(this.notes[e]),c},r.getAllNumerals=function(){var e=[];if(this.tags.includes(c.Vp.Diatonic))for(var t=0;t<this.podList.length;t++)e.push(this.getNumeral(t));return e},t}(r(6343).Z);h.fromValue=function(e){return u.Z.fromValue(d.Qo,h,e,m.qP,m.Od)}}}]);
//# sourceMappingURL=component---src-components-chords-chords-page-tsx-8438b4fbf9f182364c75.js.map