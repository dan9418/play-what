"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[167],{3779:function(e,t,r){var n=r(7294),i=r(6700),a=r(7138);t.Z=function(e){var t=e.title,r=e.data;return n.createElement(i.ZP,{title:t},n.createElement(a.Z,{data:r}))}},7138:function(e,t,r){var n=r(5444),i=r(7294),a=r(9),l=r(4010),o=r(8295),s=r(8891),u=r(9864),c=a.default.table.withConfig({displayName:"CollectionTable__StyledCollectionTable",componentId:"sc-1l0jdfk-0"})(["width:100%;margin:auto;border-collapse:collapse;white-space:nowrap;td,th{line-height:32px;&:not(:first-child){text-align:center;width:32px;height:32px;display:none;@media(min-width:512px){display:table-cell;}}&:first-child{text-align:left;padding:0 8px;}}td{&.active{background-color:",";}}thead{tr th{background-color:",";color:",";}th:first-child{border-radius:8px 0 0 8px;}th:last-child{border-radius:0 8px 8px 0;}}tbody{tr{&:hover{background-color:",";}}}a{display:block;}"],(function(e){return e.theme.surface.bg}),(function(e){return e.theme.surface.nav}),(function(e){return e.theme.text.inverted}),(function(e){return e.theme.utils.hoverDark})),d=[1,2,3,4,5,6,7,8,9,10,11];t.Z=function(e){var t=e.data,r=e.semitones,a=void 0===r?[]:r,m=(0,l.ut)(),h=(0,l.f8)();return i.createElement(c,null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),d.map((function(e,t){return i.createElement("th",{key:t},e)})))),i.createElement("tbody",null,t.map((function(e){var t=new(e.modelId===s.ww.Chord?o.Z:u.Z)(e.id,{root:h});return i.createElement("tr",null,i.createElement("td",null,i.createElement(n.rU,{to:"/browse/"+t.modelId+"/"+t.id+"/"+m},t.getShortName())),d.map((function(e,r){var n=t.intervals.findIndex((function(t){return t.pod[0]+1===e})),l=a.includes(e)?"active":"";if(n<0)return i.createElement("td",{key:r,className:l});var o=h?t.notes[n]:t.intervals[n];return i.createElement("td",{key:r,className:l},o.getName())})))}))))}},5377:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),i=r(9),a=(r(7207),r(5444)),l=r(4010),o=r(4528),s=i.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),u=function(){var e=(0,l.V7)().path.split("/"),t=[];return e.reduce((function(e,r,i,l){var s=(e+"/"+r).replace("//","/")||"/",u=!["root","practice","test","experimental"].includes(r),c=0===i?"Home":r.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),d=u?a.rU:"span",m=u?s:void 0;return t.push(n.createElement("li",{key:i},i>0&&n.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),n.createElement(d,{to:m},c))),s}),"/"),n.createElement(s,null,t.slice(0,t.length-1))},c=r(1774),d=i.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),m=function(e){var t=e.title,r=e.subtitle,i=e.children;return n.createElement(n.Fragment,null,n.createElement(c.Z,{title:t}),n.createElement(u,null),n.createElement(d,null,n.createElement("div",{className:"header"},n.createElement("h1",null,t),r&&n.createElement("h2",null,r)),i))}},7199:function(e,t,r){r.d(t,{W:function(){return i},K:function(){return a}});var n=r(9),i=n.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-r9kss3-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),a=n.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-r9kss3-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},2483:function(e,t,r){r.r(t);var n=r(5444),i=r(7294),a=r(9),l=r(4010),o=r(8891),s=r(7656),u=r(3779),c=r(1244),d=r(5377),m=r(7199),h=r(6700),f=(0,a.default)(c.v).withConfig({displayName:"ChordsPage__StyledChordsPage",componentId:"sc-8pq1dp-0"})(["width:100%;max-width:1024px;margin:auto;.intro{padding:0 16px;}h3,p{margin:16px 0;}","{li{list-style-type:disc;margin-left:16px;}}"],m.K);t.default=function(e){var t=(0,l.ut)();return i.createElement(f,null,i.createElement(d.Z,{title:"Chords",subtitle:"The foundation of harmony"}),i.createElement("div",null,i.createElement("p",{className:"intro"},"A chord is a collection of musical notes, usually played simultaneously. Chords are defined by their first note (the ",i.createElement("em",null,"root"),") and its relationship to the following notes (",i.createElement("em",null,"intervals"),")."),!1),i.createElement(m.W,null,i.createElement(m.K,null,i.createElement(u.Z,{title:"All Chords",data:s.Jb})),i.createElement(m.K,null,i.createElement(h.ZP,{title:"Triads",id:"triad"},i.createElement("p",null,"A triad is the most basic type of chord. It consists of 3 intervals (a root, a third, and a fifth). The specific thirds and fifths used determine the type (or ",i.createElement("em",null,"quality"),") of the triad."),i.createElement("h3",null,"Examples"),i.createElement("ul",null,i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.MajTriad+"/"+t},"Major Triad")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.MinTriad+"/"+t},"Minor Triad")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.AugTriad+"/"+t},"Augmented Triad")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.DimTriad+"/"+t},"Diminished Triad")))),i.createElement(h.ZP,{title:"Seventh Chords",id:"seventh"},i.createElement("p",null,"A seventh chord is a triad with an additional seventh interval stacked on top."),i.createElement("h3",null,"Examples"),i.createElement("ul",null,i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Maj7+"/"+t},"Major 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Min7+"/"+t},"Minor 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Dom7+"/"+t},"Dominant 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.MinMaj7+"/"+t},"Minor-Major 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Dim7+"/"+t},"Diminished 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.HalfDim7+"/"+t},"Half-Diminished 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Aug7+"/"+t},"Augmented 7th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.AugMaj7+"/"+t},"Augmented Major 7th")))),i.createElement(h.ZP,{title:"Sixth Chords",id:"sixth"},i.createElement("p",null,"A sixth chord is a triad with an additional sixth interval stacked on top. They are similar in function to seventh chords."),i.createElement("h3",null,"Examples"),i.createElement("ul",null,i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Maj6+"/"+t},"Major 6th")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Min6+"/"+t},"Minor 6th")))),i.createElement(h.ZP,{title:"Suspended Chords",id:"suspended"},i.createElement("p",null,"A suspended chord is a like a triad, except it sustitutes a second or fourth interval in place of the third."),i.createElement("h3",null,"Examples"),i.createElement("ul",null,i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Sus2+"/"+t},"Suspended 2nd")),i.createElement("li",null,i.createElement(n.rU,{to:"/browse/chords/"+o.X.Sus4+"/"+t},"Suspended 4th")))))))}},6700:function(e,t,r){r.d(t,{rg:function(){return o},Ol:function(){return s}});var n=r(5245),i=r(7294),a=r(9),l=["title","action","children"],o=a.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),s=function(e){var t=e.title,r=e.action,n=void 0===r?null:r;return i.createElement("div",{className:"header"},i.createElement("h2",null,t),n)};t.ZP=function(e){var t=e.title,r=e.action,a=e.children,u=(0,n.Z)(e,l);return i.createElement(o,u,t&&i.createElement(s,{title:t,action:r}),a)}},8295:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(4578),i=r(7915),a=r(8891),l=r(7656),o=r(4160),s=r(6343),u=function(e){function t(t,r){var n;return void 0===r&&(r=void 0),(n=e.call(this,l.uV,t,r)||this).modelId=a.ww.Chord,n}return(0,n.Z)(t,e),t.prototype.getNumeral=function(e){return function(e,t){switch(e){case 1:switch(t){case a.X.MajTriad:case a.X.Maj7:return"I";case a.X.MinTriad:case a.X.Min7:return"i";case a.X.Dom7:return"I⁷";case a.X.HalfDim7:return"i ̽";case a.X.AugTriad:return"I+";case a.X.DimTriad:return"i°"}case 2:switch(t){case a.X.MajTriad:case a.X.Maj7:return"II";case a.X.MinTriad:case a.X.Min7:return"ii";case a.X.Dom7:return"II⁷";case a.X.HalfDim7:return"ii ̽";case a.X.AugTriad:return"II+";case a.X.DimTriad:return"ii°"}case 3:switch(t){case a.X.MajTriad:case a.X.Maj7:return"III";case a.X.MinTriad:case a.X.Min7:return"iiii";case a.X.Dom7:return"III⁷";case a.X.HalfDim7:return"iii ̽";case a.X.AugTriad:return"III+";case a.X.DimTriad:return"iii°"}case 4:switch(t){case a.X.MajTriad:case a.X.Maj7:return"IV";case a.X.MinTriad:case a.X.Min7:return"iv";case a.X.Dom7:return"IV⁷";case a.X.HalfDim7:return"iv ̽";case a.X.AugTriad:return"IV+";case a.X.DimTriad:return"iv°"}case 5:switch(t){case a.X.MajTriad:case a.X.Maj7:return"V";case a.X.MinTriad:case a.X.Min7:return"v";case a.X.Dom7:return"V⁷";case a.X.HalfDim7:return"v ̽";case a.X.AugTriad:return"V+";case a.X.DimTriad:return"v°"}case 6:switch(t){case a.X.MajTriad:case a.X.Maj7:return"VI";case a.X.MinTriad:case a.X.Min7:return"vi";case a.X.Dom7:return"VI⁷";case a.X.HalfDim7:return"vi ̽";case a.X.AugTriad:return"VI+";case a.X.DimTriad:return"vi°"}case 7:switch(t){case a.X.MajTriad:case a.X.Maj7:return"VII";case a.X.MinTriad:case a.X.Min7:return"vii";case a.X.Dom7:return"VII⁷";case a.X.HalfDim7:return"vii ̽";case a.X.AugTriad:return"VII+";case a.X.DimTriad:return"vii°"}}}(e,this.id)},t}(s.Z);u.fromValue=function(e){return i.Z.fromValue(l.Jb,u,e,o.qP,o.Od)}},7416:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4578),i=(r(2416),r(3069)),a=r(7915),l=r(8891),o=r(7656),s=r(6436),u=r(4160),c=function(e){function t(t){return e.call(this,o.if.get(t))||this}(0,n.Z)(t,e);var r=t.prototype;return r.getColor=function(){return this.equals(new t(l.dT.P1))?"red":"#333"},r.getName=function(){var e=(0,u.td)(this.pod),t=e[0],r=e[1],n=o.g$[r];if(!n)return"?";var i=n[0],a=i,s=n[n.length-1],c=null,d=null;1===n.length?(c=i,d=l.dC.perfect):t<=a.value[0]?(c=a,d=l.dC.min):t>=s.value[0]&&(c=s,d=l.dC.maj);var m=c.value[0]-e[0];if(this.offset=m,0===m)return""+d.symbol+(r+1);m>0?d=l.dC.dim:m<0&&(d=l.dC.aug);var h=Math.abs(m);return""+d.symbol.repeat(h)+(r+1)},r.getRatio=function(){var e=this.pod[0],t=i.Z.getFrequency(0);return"1:"+(i.Z.getFrequency(e)/t).toFixed(2)},r.isInSuperset=function(e){return!(e.length<=1)&&(0,u.Cw)(e,[this.pod])},r.getSupersets=function(){var e=this,t=[],r=o.Jb.filter((function(t){return e.isInSuperset(t.value)}));r.length&&t.push({modelName:"Chords",values:r});var n=o.Qo.filter((function(t){return e.isInSuperset(t.value)}));return n.length&&t.push({modelName:"Scales",values:n}),t},t}(s.Z);c.fromValue=function(e){return a.Z.fromValue(o.Ou,c,e,u.pR,u.td)}},6343:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(4578),i=r(7416),a=r(7915),l=r(7656),o=r(6181),s=r(4160),u=function(e){function t(t,r,n){var a;(a=e.call(this)||this).getName=function(){return(a.root?a.root.name+" ":"")+a.name},a.getShortName=function(){return(0,s.VQ)(a.name)};var l=t.get(r);if(!l)throw new Error("Unknown presetId: "+r);return a.modelId=l.modelId,a.id=l.id,a.name=l.name,a.tags=l.tags,a.aliases=l.aliases,a.podList=l.value,a.intervals=l.value.map((function(e){return i.Z.fromValue(e)})),n&&n.root&&a.applyRoot(n.root),a}(0,n.Z)(t,e);var r=t.prototype;return r.equals=function(e){return(0,s.qP)(this.podList,e.podList)},r.applyRoot=function(e){var t,r;try{t=(r=this.intervals.map((function(t){return(0,s._l)(t.pod,e.pod)}))).map((function(e){return new o.Z(e)}))}catch(n){throw console.error(n),new Error("Unable to apply root")}return this.root=e,this.notes=t,this.notePods=r,this.name=this.getName(),this},r.getIntervalListString=function(){return this.intervals.map((function(e){return e.getName()})).join(", ")},r.isInSuperset=function(e){return!(e.length<=this.podList.length)&&(0,s.Cw)(e,this.podList)},r.containsSubset=function(e){return!(e.length>=this.podList.length)&&(0,s.Cw)(this.podList,e)},r.getSubchords=function(){var e=this;return l.Jb.filter((function(t){return e.containsSubset(t.value)}))},r.getSuperchords=function(){var e=this;return l.Jb.filter((function(t){return e.isInSuperset(t.value)}))},r.getSubscales=function(){var e=this;return l.Qo.filter((function(t){return e.containsSubset(t.value)}))},r.getSuperscales=function(){var e=this;return l.Qo.filter((function(t){return e.isInSuperset(t.value)}))},r.getPreview=function(){return this.getIntervalListString()},r.tryGetPodPairAtPitch=function(e){var t=(0,s.f6)(this.notePods,e,!1);return null==t?[void 0,void 0]:[this.intervals[t],this.notes[t]]},t}(a.Z)},9864:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(3433),i=r(4578),a=r(7416),l=r(3686),o=r(7809),s=r(8295),u=r(7915),c=r(8891),d=r(7656),m=r(4160),h=function(e){function t(t,r){var n;return void 0===r&&(r=void 0),(n=e.call(this,d.f2,t,r)||this).modelId=c.ww.Scale,n}(0,i.Z)(t,e);var r=t.prototype;return r.getMode=function(e){var r=(0,n.Z)(this.podList);r=l.Z.rotate(r,e);for(var i=this.podList.length-e;i<r.length;i++){var o=r[i];r[i]=[o[0]+12,o[1]+7]}for(var s=[[0,0]],u=[new a.Z(c.dT.P1)],d=0;d<r.length-1;d++){var h=(0,m.Tx)(r[d+1],r[0]);s.push(h);var f=a.Z.fromValue(h);u.push(f)}return t.fromValue(s)},r.getAllModes=function(){var e=[];if(this.tags.includes(c.Vp.Diatonic)||this.tags.includes(c.Vp.Pentatonic)||this.tags.includes(c.Vp.MelodicMode)||this.tags.includes(c.Vp.HarmonicMode))for(var t=0;t<this.podList.length;t++)e.push(this.getMode(t));return e},r.getNumeral=function(e){for(var t=[],r=0;r<this.podList.length;r+=2){var n=o.Z.moduloSum(e,r,this.podList.length),i=this.intervals[n];t.push(i)}for(var a=[[0,0]],l=0;l<t.length-1;l++){var u=(0,m.Tx)(t[l+1].pod,t[0].pod);a.push(u)}var c=s.Z.fromValue(a);return this.root&&c.applyRoot(this.notes[e]),c},r.getAllNumerals=function(){var e=[];if(this.tags.includes(c.Vp.Diatonic))for(var t=0;t<this.podList.length;t++)e.push(this.getNumeral(t));return e},t}(r(6343).Z);h.fromValue=function(e){return u.Z.fromValue(d.Qo,h,e,m.qP,m.Od)}}}]);
//# sourceMappingURL=component---src-components-pages-chords-page-tsx-f0499416f47104aa5989.js.map