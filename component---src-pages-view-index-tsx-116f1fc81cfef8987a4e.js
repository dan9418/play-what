"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[607],{4140:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),i=n(1074),a=(n(7207),n(1597)),l=n(1586),o=n(6291),d=i.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),u=function(){var e=(0,l.V7)().path.split("/"),t=[];return e.reduce((function(e,n,i,l){var d=(e+"/"+n).replace("//","/")||"/",u=!["root","practice","test","experimental"].includes(n),c=0===i?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),s=u?a.rU:"span",m=u?d:void 0;return t.push(r.createElement("li",{key:i},i>0&&r.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),r.createElement(s,{to:m},c))),d}),"/"),r.createElement(d,null,t.slice(0,t.length-1))},c=n(4928),s=i.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),m=function(e){var t=e.title,n=e.subtitle,i=e.action,a=e.children;return r.createElement(r.Fragment,null,r.createElement(c.Z,{title:t}),r.createElement(u,null),r.createElement(s,null,r.createElement("div",{className:"header"},r.createElement("h1",null,t),n&&r.createElement("h2",null,n),i),a))}},3620:function(e,t,n){var r=n(7294),i=n(1074).default.div.withConfig({displayName:"ColHeader__StyledColHeader",componentId:"sc-1ac0yba-0"})(["h2{text-align:center;padding-bottom:8px;margin-bottom:16px;border-bottom:1px solid ",";}"],(function(e){return e.theme.utils.border}));t.Z=function(e){var t=e.title;e.subTitle;return r.createElement(i,null,r.createElement("h2",null,t))}},7699:function(e,t,n){n.d(t,{PO:function(){return h},Dj:function(){return b},HV:function(){return v},cS:function(){return E},ZP:function(){return D},Ur:function(){return y}});var r=n(1597),i=n(7294),a=n(1074),l=n(349),o=n(9544),d=n(7254),u=n(7158),c=n(759),s=function(e,t,n){return"/browse/"+e+"/"+t+(n?"/root/"+n:"")},m=n(6486),p=n(1011),w=n(3342),f=n(3620),g=a.default.div.withConfig({displayName:"NotesCol__StyledNotesCol",componentId:"sc-10poc1b-0"})([""]),E=[{id:o.BY.Chord,name:"Chords",value:o.BY.Chord,data:d.Jb},{id:o.BY.Scale,name:"Scales",value:o.BY.Scale,data:d.Qo}],b=E[0],h=E[0].data[0],v=d.WA[0],y=function(e,t,n){var r;return e===o.BY.Chord?r=new l.Z(t,{root:u.Z.fromId(n)}):e===o.BY.Scale&&(r=new c.Z(t,{root:u.Z.fromId(n)})),r},D=function(e){var t=e.modelType,n=e.modelConfig,a=e.root,l=e.setModelType,o=e.setModelConfig,u=e.setRoot,c=e.model,b=e.setModel,h=t.data;return console.log("dpb",E,t,h,n),i.createElement(g,null,i.createElement(f.Z,{title:"Notes",subTitle:"..."}),i.createElement(p.ZP,{title:"Notes"},i.createElement(r.rU,{to:s(t.id,n.modelId,a.modelId)},c.name)),i.createElement(p.ZP,{title:"Root"},i.createElement("ul",null,i.createElement("li",null,i.createElement(w.Z,{label:"Key Center"},i.createElement(m.Z,{value:a,setValue:function(e){var t=y(n.modelType,n.modelId,e.modelId);u(e),b(t)},options:d.WA,idProperty:"modelId"}))))),i.createElement(p.ZP,{title:"Intervals"},i.createElement("ul",null,i.createElement("li",null,i.createElement(w.Z,{label:"Model Type"},i.createElement(m.Z,{value:t,setValue:function(e){l(e),o(e.data[0])},options:E,idProperty:"id"}))),i.createElement("li",null,i.createElement(w.Z,{label:"Preset"},i.createElement(m.Z,{value:n,setValue:function(e){var t=y(e.modelType,e.modelId,a.modelId);o(e),b(t)},options:h,idProperty:"modelId"}))))))}},1317:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1597),i=n(7294),a=n(1074),l=n(9544),o=n(9025),d=n(8212),u=n(6471),c=n(2222),s=n(7497),m=n(4140),p=n(1011),w=n(7699),f=(0,a.default)(s.v).withConfig({displayName:"ViewPage__StyledViewPage",componentId:"sc-1lwcamy-0"})(["p{margin-top:16px;}","{.fretboard,.keyboard{margin:0;& + a{padding-top:16px;font-size:150%;font-weight:bold;display:block;text-align:right;}}margin-top:16px;.instrument{display:grid;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}gap:16px;align-items:flex-start;h4{text-transform:uppercase;}table{width:100%;border-collapse:collapse;td,th{padding:4px 0;text-align:left;}}}}"],p.rg),g=(0,w.Ur)(l.BY.Chord,l.X.MajTriad,l.iw.C),E={model:g,showFretNumbers:!1,showFretDots:!1},b=function(){return i.createElement(f,null,i.createElement(m.Z,{title:"Instruments",subtitle:"Choose an instrument preset"}),i.createElement("p",null,"More instruments and tunings coming soon!"),i.createElement(p.ZP,{title:"Guitar"},i.createElement("div",{className:"instrument"},i.createElement("div",null,i.createElement("h4",null,"Available Tunings"),i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Strings"))),i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null,i.createElement(r.rU,{to:"/view/fretboard/"},"Standard 6-String")),i.createElement("td",null,"E, A, D, G, B, E"))))),i.createElement("div",null,i.createElement(o.Z,Object.assign({},E,{tuning:d.$Z.get(d.yE.Standard).value})),i.createElement(r.rU,{to:"/view/fretboard/"},"Use Default Guitar ",">")))),i.createElement(p.ZP,{title:"Keyboard"},i.createElement("div",{className:"instrument"},i.createElement("div",null,i.createElement("h4",null,"Available Presets"),i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Key Range"))),i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null,i.createElement(r.rU,{to:"/view/keyboard/"},"Double Octave")),i.createElement("td",null,"C2-C4"))))),i.createElement("div",null,i.createElement(u.Z,{model:g,keyRange:c.ZP.keyRange}),i.createElement(r.rU,{to:"/view/keyboard/"},"Use Default Keyboard ",">")))))}},9025:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),i=n(1074),a=i.default.div.withConfig({displayName:"Fretboardstyles__StyledFretboard",componentId:"sc-ucsj4f-0"})(['display:inline-grid;width:100%;background-image:radial-gradient(ellipse,#E8DBB8 0%,#D0B27C 100%);font-size:90%;margin:16px 0;.fret{display:inline-flex;justify-content:center;align-items:center;position:relative;border-right:2px solid darkgrey;}.fret.open{border-right:3px solid grey;background-color:#D0B27C;;}.fret::before{content:"";display:block;height:0;width:0;margin-top:calc(1/2 * 100%);}.fret-string{border-top:1px solid grey;width:100%;}.fret-number{position:absolute;bottom:100%;}.fret-dots{position:absolute;top:95%;font-size:16px;white-space:nowrap;}.fret-number,.fret-dots{color:#888;}']),l=n(6627),o=i.default.div.withConfig({displayName:"FretLabel__StyledFretLabel",componentId:"sc-djhycx-0"})(["position:absolute;height:60%;aspect-ratio:1;display:flex;justify-content:center;align-items:center;border-radius:100%;background-color:",";color:",";cursor:pointer;&:hover{height:80%;}"],(function(e){var t=e.$bgColor;return t||"transparent"}),(function(e){var t=e.$fgColor;return t||""})),d=function(e){var t=e.colorMapFn(e);return r.createElement(o,{$bgColor:t,$fgColor:"white",onClick:null,className:"fret-label"},null)},u=function(e){var t=e.tuning,n=e.stringIndex,i=e.fretIndex,a=e.showFretNumbers,o=e.showFretDots,u=["fret"];0===i&&u.push("open");var c=n===t.length-1,s=0===n;return r.createElement("div",{className:u.join(" ")},r.createElement("div",{className:"fret-number"},a&&s&&i>0&&i),r.createElement("div",{className:"fret-string"}),r.createElement(d,e),r.createElement("div",{className:"fret-dots"},o&&c&&i>0&&(0,l.UQ)(i)))},c=function(e){var t=Object.assign({},l.jt,e),n=t.fretRange,i=n[0],o=n[1]-i+1,d=t.tuning.length,c={gridTemplateColumns:(0,l.Cf)(o).map((function(e){return e+"fr"})).join(" "),gridTemplateRows:"repeat("+d+", 1fr)"};return r.createElement(a,{className:"fretboard",style:c},function(e){for(var t=e.fretRange,n=e.tuning,i=t[0],a=t[1],l=[],o=0;o<n.length;o++)for(var d=i;d<=a;d++)l.push(r.createElement(u,Object.assign({key:"s"+o+"-f"+d,stringIndex:o,fretIndex:d,tuning:n},e)));return l}(t))}},8212:function(e,t,n){n.d(t,{$Z:function(){return u},P1:function(){return c},yE:function(){return r}});var r,i=n(7389),a=n(7158),l=n(9544);!function(e){e.Standard="standard",e.StandardSeven="standard-seven",e.StandardBass="standard-bass",e.Flat="flat",e.DoubleFlat="double-flat",e.DropD="drop-d",e.DADGAD="dadgad",e.Banjo="banjo",e.Violin="violin",e.OpenA="open-a",e.OpenB="open-b",e.OpenC="open-c",e.OpenD="open-d",e.OpenE="open-e",e.OpenF="open-f",e.OpenG="open-g"}(r||(r={}));var o=function(e,t,n){return{id:e,name:t,value:n}},d=function(e,t){return a.Z.getNote(e,t).pod[0]},u=new Map([[r.Standard,o(r.Standard,"Standard",[d(l.iw.E,5),d(l.iw.B,4),d(l.iw.G,4),d(l.iw.D,4),d(l.iw.A,3),d(l.iw.E,3)])],[r.Flat,o(r.Flat,"Flat",[d(l.iw.Eb,5),d(l.iw.Bb,4),d(l.iw.Gb,4),d(l.iw.Db,4),d(l.iw.Ab,3),d(l.iw.Eb,3)])],[r.DoubleFlat,o(r.DoubleFlat,"Double Flat",[d(l.iw.D,5),d(l.iw.A,4),d(l.iw.F,4),d(l.iw.C,4),d(l.iw.G,3),d(l.iw.D,3)])],[r.StandardSeven,o(r.StandardSeven,"Standard 7-String",[d(l.iw.E,5),d(l.iw.B,4),d(l.iw.G,4),d(l.iw.D,4),d(l.iw.A,3),d(l.iw.E,3),d(l.iw.B,3)])],[r.StandardBass,o(r.StandardBass,"Standard Bass",[d(l.iw.G,3),d(l.iw.D,3),d(l.iw.A,2),d(l.iw.E,2)])],[r.DropD,o(r.DropD,"Drop D",[d(l.iw.E,5),d(l.iw.B,4),d(l.iw.G,4),d(l.iw.D,4),d(l.iw.A,3),d(l.iw.D,3)])],[r.DADGAD,o(r.DADGAD,"DADGAD",[d(l.iw.D,5),d(l.iw.A,4),d(l.iw.G,4),d(l.iw.D,4),d(l.iw.A,3),d(l.iw.D,3)])],[r.Banjo,o(r.Banjo,"Banjo",[d(l.iw.G,5),d(l.iw.D,4),d(l.iw.G,4),d(l.iw.B,4),d(l.iw.D,3)])],[r.Violin,o(r.Violin,"Violin",[d(l.iw.E,5),d(l.iw.A,4),d(l.iw.D,4),d(l.iw.G,4)])],[r.OpenA,o(r.OpenA,"Open A",[d(l.iw.E,5),d(l.iw.A,4),d(l.iw.E,4),d(l.iw.Cs,4),d(l.iw.A,3),d(l.iw.E,3)])],[r.OpenB,o(r.OpenB,"Open B",[d(l.iw.Ds,5),d(l.iw.B,4),d(l.iw.Fs,4),d(l.iw.B,4),d(l.iw.Fs,3),d(l.iw.B,3)])],[r.OpenC,o(r.OpenC,"Open C",[d(l.iw.E,5),d(l.iw.C,4),d(l.iw.G,4),d(l.iw.C,4),d(l.iw.G,3),d(l.iw.C,3)])],[r.OpenD,o(r.OpenD,"Open D",[d(l.iw.D,5),d(l.iw.A,4),d(l.iw.Fs,4),d(l.iw.D,4),d(l.iw.A,3),d(l.iw.D,3)])],[r.OpenE,o(r.OpenE,"Open E",[d(l.iw.E,5),d(l.iw.B,4),d(l.iw.Gs,4),d(l.iw.E,4),d(l.iw.B,3),d(l.iw.E,3)])],[r.OpenF,o(r.OpenF,"Open F",[d(l.iw.F,5),d(l.iw.C,4),d(l.iw.F,4),d(l.iw.C,4),d(l.iw.A,3),d(l.iw.F,3)])],[r.OpenG,o(r.OpenG,"Open G",[d(l.iw.D,5),d(l.iw.B,4),d(l.iw.G,4),d(l.iw.D,4),d(l.iw.G,3),d(l.iw.D,3)])]]),c=i.Z.mapToArray(u)},6627:function(e,t,n){n.d(t,{Cf:function(){return o},UQ:function(){return d},jt:function(){return l}});var r=n(8212),i=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],a=Math.pow(.5,1/12),l={fretRange:[1,12],tuning:r.$Z.get(r.yE.Standard).value,showFretDots:!0,showFretNumbers:!0,colorMapFn:function(e){var t=e.stringIndex,n=e.fretIndex,r=e.tuning,i=e.model,a=e.voicing,l=r[t]+n,o=i.tryGetPodPairAtPitch(l),d=o[0];if(o[1])return a&&!function(e,t,n){if(!t||!t.value)return!0;var r=t.value[n],i=e.getDegree();return Array.isArray(r)?r.some((function(e){return u(i,e)})):"number"==typeof r&&u(i,r)}(d,a,t)?"#00000033":d.getColor()}},o=function(e){for(var t=[],n=1;n<=e;n++)t.push(n<=1?1:t[n-2]*a);return t},d=function(e){var t=e%12;return 0===t?"• •":i[t]?"•":""},u=function(e,t){return e+1===t}}}]);
//# sourceMappingURL=component---src-pages-view-index-tsx-116f1fc81cfef8987a4e.js.map