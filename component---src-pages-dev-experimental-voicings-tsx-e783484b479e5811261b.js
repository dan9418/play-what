"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[809],{6486:function(e,t,n){var a=n(7294),r=n(1074).default.select.withConfig({displayName:"DropdownInput__StyledDropdownInput",componentId:"sc-d8f7o3-0"})(["font-size:110%;min-width:128px;padding:4px 8px;cursor:pointer;border-radius:4px;option{cursor:pointer;}"]);t.Z=function(e){var t=e.value,n=e.setValue,l=e.options,o=e.idProperty,i=e.displayProperty;return a.createElement(r,{className:"dropdown-input",onChange:function(e){return n(l[e.target.selectedIndex],e.target.selectedIndex)},value:t?t[o||"id"]:""},(l||[]).map((function(e,t){return a.createElement("option",{key:t,value:e[o||"id"]},i?e[i]:e.name)})))}},7497:function(e,t,n){n.d(t,{v:function(){return a}});var a=n(1074).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1dcf9t1-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},4140:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(1074),l=(n(7207),n(1597)),o=n(1586),i=n(6291),d=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),h=function(){var e=(0,o.V7)().path.split("/"),t=[];return e.reduce((function(e,n,r,o){var d=(e+"/"+n).replace("//","/")||"/",h=!["root","test","experimental"].includes(n),_=0===r?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),c=h?l.rU:"span",p=h?d:void 0;return t.push(a.createElement("li",{key:r},r>0&&a.createElement(i.ZP,{iconId:"next",size:10,color:"grey"}),a.createElement(c,{to:p},_))),d}),"/"),a.createElement(d,null,t.slice(0,t.length-1))},_=n(4928),c=r.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";display:flex;align-items:center;justify-content:space-between;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),p=function(e){var t=e.title,n=e.subtitle,r=e.action,l=e.children;return a.createElement(a.Fragment,null,a.createElement(_.Z,{title:n?t+" - "+n:t}),a.createElement(h,null),a.createElement(c,null,a.createElement("div",{className:"header"},a.createElement("h1",null,t,r&&a.createElement("div",{className:"action"},r)),n&&a.createElement("h2",null,n)),l))}},1011:function(e,t,n){n.d(t,{Ol:function(){return d},rg:function(){return i}});var a=n(3366),r=n(7294),l=n(1074),o=["title","action","children","as"],i=l.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),d=function(e){var t=e.title,n=e.as,a=void 0===n?"h2":n,l=e.action,o=void 0===l?null:l;return r.createElement("div",{className:"header"},r.createElement(a,null,t),o)};t.ZP=function(e){var t=e.title,n=e.action,l=e.children,h=e.as,_=(0,a.Z)(e,o);return r.createElement(i,_,t&&r.createElement(d,{title:t,action:n,as:h}),l)}},3342:function(e,t,n){n.d(t,{H:function(){return i}});var a=n(3366),r=n(7294),l=n(1074),o=["label","children","y"],i=l.default.div.withConfig({displayName:"InputRow__StyledInputRow",componentId:"sc-18k0pnn-0"})(["display:flex;align-items:flex-start;flex-direction:column;width:100%;"," > label{color:",";font-weight:bold;margin:8px;white-space:nowrap;}"],(function(e){return e.$y?"":"\n        @media(min-width: 512px) {\n            align-items: center;\n            flex-direction: row;\n            justify-content: space-between;\n            //margin-bottom: 8px;\n        }\n    "}),(function(e){return e.theme.dark3}));t.Z=function(e){var t=e.label,n=e.children,l=e.y,d=void 0!==l&&l,h=(0,a.Z)(e,o);return r.createElement(i,Object.assign({$y:d},h),r.createElement("label",null,t),r.createElement("div",null,n))}},3951:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(7294),r=n(1074),l=n(349),o=n(9544),i=n(7254),d=n(7158),h=n(9025),_=n(333),c=n(6486),p=n(7497),u=n(4140),S=n(1011),s=n(3342),m=(0,r.default)(p.v).withConfig({displayName:"VoicingsPage__StyledVoicingsPage",componentId:"sc-1gvrw0-0"})(["max-width:1920px;",",","{margin-top:16px;table{width:100%;td{width:25%;}}}"],S.rg,s.H),C=[_.Gz.Chord_Triad_EShape_1,_.Gz.Chord_Seventh_EShape_1,_.Gz.Chord_Shell_A_37,_.Gz.Chord_Shell_A_73],f=[_.Gz.Chord_Triad_AShape_1,_.Gz.Chord_Seventh_AShape_1,_.Gz.Chord_Shell_A_37,_.Gz.Chord_Shell_A_73],w=[_.Gz.Chord_Triad_DShape_1,_.Gz.Chord_Seventh_DShape_1,_.Gz.Chord_Shell_D_37,_.Gz.Chord_Shell_D_73],v=function(e){var t=e.voicingIds,n=e.model,r=e.modelId,l=e.root;return a.createElement("tr",null,t.map((function(e){var t=new n(r,{root:l});return a.createElement("td",{key:r},a.createElement("h3",null,r),a.createElement(h.Z,{model:t,voicing:_.ew.get(e),fretRange:[1,14]}))})))},D=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Triad"),a.createElement("th",null,"Seventh"),a.createElement("th",null,"Drop 3-7"),a.createElement("th",null,"Drop 7-3"))),g=[{model:l.Z,modelId:o.X.Maj7},{model:l.Z,modelId:o.X.Min7},{model:l.Z,modelId:o.X.Dom7},{model:l.Z,modelId:o.X.HalfDim7}],E=function(){var e=(0,a.useState)(i.nq.get(o.iw.C)),t=e[0],n=e[1],r=new d.Z(t.value);return a.createElement(m,null,a.createElement(u.Z,{title:"Chord Voicings"}),a.createElement(s.Z,{label:"Root"},a.createElement(c.Z,{options:i.WA,value:t,setValue:function(e){n(e)}})),a.createElement(S.ZP,{title:"E Root"},a.createElement("table",null,D,a.createElement("tbody",null,g.map((function(e,t){var n=e.model,l=e.modelId;return a.createElement(v,{key:t,model:n,modelId:l,root:r,voicingIds:C})}))))),a.createElement(S.ZP,{title:"A Root"},a.createElement("table",null,D,a.createElement("tbody",null,g.map((function(e,t){var n=e.model,l=e.modelId;return a.createElement(v,{key:t,model:n,modelId:l,root:r,voicingIds:f})}))))),a.createElement(S.ZP,{title:"D Root"},a.createElement("table",null,D,a.createElement("tbody",null,g.map((function(e,t){var n=e.model,l=e.modelId;return a.createElement(v,{key:t,model:n,modelId:l,root:r,voicingIds:w})}))))))}},9025:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(7294),r=n(1074),l=r.default.div.withConfig({displayName:"Fretboardstyles__StyledFretboard",componentId:"sc-ucsj4f-0"})(['display:inline-grid;width:100%;background-image:radial-gradient(ellipse,#E8DBB8 0%,#D0B27C 100%);font-size:90%;margin:16px 0;.fret{display:inline-flex;justify-content:center;align-items:center;position:relative;border-right:2px solid darkgrey;}.fret.open{border-right:3px solid grey;background-color:#D0B27C;;}.fret::before{content:"";display:block;height:0;width:0;margin-top:calc(1/2 * 100%);}.fret-string{border-top:1px solid grey;width:100%;}.fret-number{position:absolute;bottom:100%;}.fret-dots{position:absolute;top:95%;font-size:16px;white-space:nowrap;}.fret-number,.fret-dots{color:#888;}']),o=n(6627),i=r.default.div.withConfig({displayName:"FretLabel__StyledFretLabel",componentId:"sc-djhycx-0"})(["position:absolute;height:60%;aspect-ratio:1;display:flex;justify-content:center;align-items:center;border-radius:100%;background-color:",";color:",";"],(function(e){var t=e.$bgColor;return t||"transparent"}),(function(e){var t=e.$fgColor;return t||""})),d=function(e){var t=e.colorMapFn(e);return a.createElement(i,{$bgColor:t,$fgColor:"white",onClick:null,className:"fret-label"},null)},h=function(e){var t=e.tuning,n=e.stringIndex,r=e.fretIndex,l=e.showFretNumbers,i=e.showFretDots,h=["fret"];0===r&&h.push("open");var _=n===t.length-1,c=0===n;return a.createElement("div",{className:h.join(" ")},a.createElement("div",{className:"fret-number"},l&&c&&r>0&&r),a.createElement("div",{className:"fret-string"}),a.createElement(d,e),a.createElement("div",{className:"fret-dots"},i&&_&&r>0&&(0,o.UQ)(r)))},_=function(e){var t=Object.assign({},o.jt,e),n=t.fretRange,r=n[0],i=n[1]-r+1,d=t.tuning.length,_={gridTemplateColumns:(0,o.Cf)(i).map((function(e){return e+"fr"})).join(" "),gridTemplateRows:"repeat("+d+", 1fr)"};return a.createElement(l,{className:"fretboard",style:_},function(e){for(var t=e.fretRange,n=e.tuning,r=t[0],l=t[1],o=[],i=0;i<n.length;i++)for(var d=r;d<=l;d++)o.push(a.createElement(h,Object.assign({key:"s"+i+"-f"+d,stringIndex:i,fretIndex:d,tuning:n},e)));return o}(t))}},8212:function(e,t,n){n.d(t,{$Z:function(){return h},P1:function(){return _},yE:function(){return a}});var a,r=n(7389),l=n(7158),o=n(9544);!function(e){e.Standard="standard",e.StandardSeven="standard-seven",e.StandardBass="standard-bass",e.Flat="flat",e.DoubleFlat="double-flat",e.DropD="drop-d",e.DADGAD="dadgad",e.Banjo="banjo",e.Violin="violin",e.OpenA="open-a",e.OpenB="open-b",e.OpenC="open-c",e.OpenD="open-d",e.OpenE="open-e",e.OpenF="open-f",e.OpenG="open-g"}(a||(a={}));var i=function(e,t,n){return{id:e,name:t,value:n}},d=function(e,t){return l.Z.getNote(e,t).pod[0]},h=new Map([[a.Standard,i(a.Standard,"Standard",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.E,3)])],[a.Flat,i(a.Flat,"Flat",[d(o.iw.Eb,5),d(o.iw.Bb,4),d(o.iw.Gb,4),d(o.iw.Db,4),d(o.iw.Ab,3),d(o.iw.Eb,3)])],[a.DoubleFlat,i(a.DoubleFlat,"Double Flat",[d(o.iw.D,5),d(o.iw.A,4),d(o.iw.F,4),d(o.iw.C,4),d(o.iw.G,3),d(o.iw.D,3)])],[a.StandardSeven,i(a.StandardSeven,"Standard 7-String",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.E,3),d(o.iw.B,3)])],[a.StandardBass,i(a.StandardBass,"Standard Bass",[d(o.iw.G,3),d(o.iw.D,3),d(o.iw.A,2),d(o.iw.E,2)])],[a.DropD,i(a.DropD,"Drop D",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.D,3)])],[a.DADGAD,i(a.DADGAD,"DADGAD",[d(o.iw.D,5),d(o.iw.A,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.D,3)])],[a.Banjo,i(a.Banjo,"Banjo",[d(o.iw.G,5),d(o.iw.D,4),d(o.iw.G,4),d(o.iw.B,4),d(o.iw.D,3)])],[a.Violin,i(a.Violin,"Violin",[d(o.iw.E,5),d(o.iw.A,4),d(o.iw.D,4),d(o.iw.G,4)])],[a.OpenA,i(a.OpenA,"Open A",[d(o.iw.E,5),d(o.iw.A,4),d(o.iw.E,4),d(o.iw.Cs,4),d(o.iw.A,3),d(o.iw.E,3)])],[a.OpenB,i(a.OpenB,"Open B",[d(o.iw.Ds,5),d(o.iw.B,4),d(o.iw.Fs,4),d(o.iw.B,4),d(o.iw.Fs,3),d(o.iw.B,3)])],[a.OpenC,i(a.OpenC,"Open C",[d(o.iw.E,5),d(o.iw.C,4),d(o.iw.G,4),d(o.iw.C,4),d(o.iw.G,3),d(o.iw.C,3)])],[a.OpenD,i(a.OpenD,"Open D",[d(o.iw.D,5),d(o.iw.A,4),d(o.iw.Fs,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.D,3)])],[a.OpenE,i(a.OpenE,"Open E",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.Gs,4),d(o.iw.E,4),d(o.iw.B,3),d(o.iw.E,3)])],[a.OpenF,i(a.OpenF,"Open F",[d(o.iw.F,5),d(o.iw.C,4),d(o.iw.F,4),d(o.iw.C,4),d(o.iw.A,3),d(o.iw.F,3)])],[a.OpenG,i(a.OpenG,"Open G",[d(o.iw.D,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.G,3),d(o.iw.D,3)])]]),_=r.Z.mapToArray(h)},6627:function(e,t,n){n.d(t,{Cf:function(){return i},UQ:function(){return d},jt:function(){return o}});var a=n(8212),r=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],l=Math.pow(.5,1/12),o={fretRange:[1,12],tuning:a.$Z.get(a.yE.Standard).value,showFretDots:!0,showFretNumbers:!0,colorMapFn:function(e){var t=e.stringIndex,n=e.fretIndex,a=e.tuning,r=e.model,l=e.voicing,o=a[t]+n,i=r.tryGetPodPairAtPitch(o),d=i[0];if(i[1])return l&&!function(e,t,n){if(!t||!t.value)return!0;var a=t.value[n],r=e.getDegree();return Array.isArray(a)?a.some((function(e){return h(r,e)})):"number"==typeof a&&h(r,a)}(d,l,t)?"#00000033":d.getColor()}},i=function(e){for(var t=[],n=1;n<=e;n++)t.push(n<=1?1:t[n-2]*l);return t},d=function(e){var t=e%12;return 0===t?"• •":r[t]?"•":""},h=function(e,t){return e+1===t}},333:function(e,t,n){n.d(t,{Gz:function(){return a},ew:function(){return o},rk:function(){return i}});var a,r=n(7389);!function(e){e.None="None",e.Chord_Triad_CShape_1="Chord_Triad_CShape_1",e.Chord_Triad_AShape_1="Chord_Triad_AShape_1",e.Chord_Triad_GShape_1="Chord_Triad_GShape_1",e.Chord_Triad_EShape_1="Chord_Triad_EShape_1",e.Chord_Triad_DShape_1="Chord_Triad_DShape_1",e.Chord_Sixth_CShape_1="Chord_Sixth_CShape_1",e.Chord_Sixth_AShape_1="Chord_Sixth_AShape_1",e.Chord_Sixth_GShape_1="Chord_Sixth_GShape_1",e.Chord_Sixth_EShape_1="Chord_Sixth_EShape_1",e.Chord_Sixth_DShape_1="Chord_Sixth_DShape_1",e.Chord_Seventh_CShape_1="Chord_Seventh_CShape_1",e.Chord_Seventh_AShape_1="Chord_Seventh_AShape_1",e.Chord_Seventh_GShape_1="Chord_Seventh_GShape_1",e.Chord_Seventh_EShape_1="Chord_Seventh_EShape_1",e.Chord_Seventh_DShape_1="Chord_Seventh_DShape_1",e.Chord_Shell_E_37="Chord_Shell_E_37",e.Chord_Shell_E_73="Chord_Shell_E_73",e.Chord_Shell_A_37="Chord_Shell_A_37",e.Chord_Shell_A_73="Chord_Shell_A_73",e.Chord_Shell_D_37="Chord_Shell_D_37",e.Chord_Shell_D_73="Chord_Shell_D_73",e.Scale_DoubleOctave_CShape_1="Scale_DoubleOctave_CShape_1",e.Scale_DoubleOctave_CShape_2="Scale_DoubleOctave_CShape_2",e.Scale_DoubleOctave_AShape_1="Scale_DoubleOctave_AShape_1",e.Scale_DoubleOctave_GShape_1="Scale_DoubleOctave_GShape_1",e.Scale_DoubleOctave_EShape_1="Scale_DoubleOctave_EShape_1",e.Scale_DoubleOctave_EShape_2="Scale_DoubleOctave_EShape_2",e.Scale_DoubleOctave_DShape_1="Scale_DoubleOctave_DShape_1"}(a||(a={}));var l=function(e,t,n){return{id:e,name:t,value:n}},o=new Map([[a.Chord_Triad_CShape_1,l(a.Chord_Triad_CShape_1,"C Shape Triad",[3,1,5,3,1,null])],[a.Chord_Triad_AShape_1,l(a.Chord_Triad_AShape_1,"A Shape Triad",[5,3,1,5,1,null])],[a.Chord_Triad_GShape_1,l(a.Chord_Triad_GShape_1,"G Shape Triad",[1,5,1,5,3,1])],[a.Chord_Triad_EShape_1,l(a.Chord_Triad_EShape_1,"E Shape Triad",[1,5,3,1,5,1])],[a.Chord_Triad_DShape_1,l(a.Chord_Triad_DShape_1,"D Shape Triad",[3,1,5,1,null,null])],[a.Chord_Sixth_CShape_1,l(a.Chord_Sixth_CShape_1,"C Shape 6th Chord",[3,6,5,3,1,null])],[a.Chord_Sixth_AShape_1,l(a.Chord_Sixth_AShape_1,"A Shape 6th Chord",[5,3,6,5,1,null])],[a.Chord_Sixth_GShape_1,l(a.Chord_Sixth_GShape_1,"G Shape 6th Chord",[6,5,1,5,3,1])],[a.Chord_Sixth_EShape_1,l(a.Chord_Sixth_EShape_1,"E Shape 6th Chord",[1,5,3,6,5,1])],[a.Chord_Sixth_DShape_1,l(a.Chord_Sixth_DShape_1,"D Shape 6th Chord",[3,6,5,1,null,null])],[a.Chord_Seventh_CShape_1,l(a.Chord_Seventh_CShape_1,"C Shape 7th Chord",[3,7,5,3,1,null])],[a.Chord_Seventh_AShape_1,l(a.Chord_Seventh_AShape_1,"A Shape 7th Chord",[5,3,7,5,1,null])],[a.Chord_Seventh_GShape_1,l(a.Chord_Seventh_GShape_1,"G Shape 7th Chord",[7,5,1,5,3,1])],[a.Chord_Seventh_EShape_1,l(a.Chord_Seventh_EShape_1,"E Shape 7th Chord",[1,5,3,7,5,1])],[a.Chord_Seventh_DShape_1,l(a.Chord_Seventh_DShape_1,"D Shape 7th Chord",[3,7,5,1,null,null])],[a.Chord_Shell_E_37,l(a.Chord_Shell_E_37,"Shell E 3-7",[null,null,null,7,3,1])],[a.Chord_Shell_E_73,l(a.Chord_Shell_E_73,"Shell E 7-3",[null,null,3,7,null,1])],[a.Chord_Shell_A_37,l(a.Chord_Shell_A_37,"Shell A 3-7",[null,null,7,3,1,null])],[a.Chord_Shell_A_73,l(a.Chord_Shell_A_73,"Shell A 7-3",[null,3,7,null,1,null])],[a.Chord_Shell_D_37,l(a.Chord_Shell_D_37,"Shell D 3-7",[null,7,3,1,null,null])],[a.Chord_Shell_D_73,l(a.Chord_Shell_D_73,"Shell D 7-3",[3,7,null,1,null,null])],[a.Scale_DoubleOctave_EShape_1,l(a.Scale_DoubleOctave_EShape_1,"E Shape Scale (Locrian)",[[1,2,3],[6,7],[3,4,5],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_EShape_2,l(a.Scale_DoubleOctave_EShape_2,"E Shape Scale (Ionian)",[[7,1,2],[5,6],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_DShape_1,l(a.Scale_DoubleOctave_DShape_1,"D Shape Scale (Dorian)",[[1,2,3],[5,6,7],[2,3,4],[6,7,1],[4,5],[1,2,3]])],[a.Scale_DoubleOctave_CShape_1,l(a.Scale_DoubleOctave_CShape_1,"C Shape Scale (Phrygian)",[[1,2,3],[5,6,7],[3,4],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_CShape_2,l(a.Scale_DoubleOctave_CShape_2,"C Shape Scale (Lydian)",[[7,1,2],[4,5,6],[2,3],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_AShape_1,l(a.Scale_DoubleOctave_AShape_1,"A Shape Scale (Mixolydian)",[[1,2],[5,6,7],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_GShape_1,l(a.Scale_DoubleOctave_GShape_1,"G Shape Scale (Aeolian)",[[1,2,3],[5,6,7],[2,3,4],[7,1],[4,5,6],[1,2,3]])]]),i=r.Z.mapToArray(o)}}]);
//# sourceMappingURL=component---src-pages-dev-experimental-voicings-tsx-e783484b479e5811261b.js.map