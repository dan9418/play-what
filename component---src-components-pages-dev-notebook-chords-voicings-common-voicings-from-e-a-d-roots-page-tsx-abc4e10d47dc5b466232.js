"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[373],{6486:function(e,t,n){var a=n(7294),r=n(1074).default.select.withConfig({displayName:"DropdownInput__StyledDropdownInput",componentId:"sc-d8f7o3-0"})(["font-size:110%;min-width:128px;padding:4px 8px;cursor:pointer;border-radius:4px;option{cursor:pointer;}"]);t.Z=function(e){var t=e.value,n=e.setValue,l=e.options,o=e.idProperty,i=e.displayProperty;return a.createElement(r,{className:"dropdown-input",onChange:function(e){return n(l[e.target.selectedIndex],e.target.selectedIndex)},value:t?t[o||"id"]:""},(l||[]).map((function(e,t){return a.createElement("option",{key:t,value:e[o||"id"]},i?e[i]:e.name)})))}},9280:function(e,t,n){n.r(t);var a=n(7294),r=n(1074),l=n(349),o=n(9544),i=n(7254),_=n(7158),h=n(9025),d=n(333),p=n(6486),c=n(1090),u=n(1011),S=n(3342),C=(0,r.default)(c.Z).withConfig({displayName:"common-voicings-from-e-a-d-rootspage__StyledVoicingsPage",componentId:"sc-ecgbed-0"})(["table{width:100%;td{width:22%;}}","{margin-bottom:16px;}"],S.H),s=[d.Gz.Chord_Triad_EShape_1,d.Gz.Chord_Seventh_EShape_1,d.Gz.Chord_Shell_A_37,d.Gz.Chord_Shell_A_73],m=[d.Gz.Chord_Triad_AShape_1,d.Gz.Chord_Seventh_AShape_1,d.Gz.Chord_Shell_A_37,d.Gz.Chord_Shell_A_73],w=[d.Gz.Chord_Triad_DShape_1,d.Gz.Chord_Seventh_DShape_1,d.Gz.Chord_Shell_D_37,d.Gz.Chord_Shell_D_73],f=function(e){var t=e.voicingIds,n=e.model,r=e.modelId,l=e.root;return a.createElement("tr",null,t.map((function(e,t){var o=new n(r,{root:l});return a.createElement(a.Fragment,null,0===t&&a.createElement("th",null,o.getName()),a.createElement("td",{key:r},a.createElement(h.Z,{model:o,voicing:d.ew.get(e),fretRange:[1,14],showFretDots:!1,showFretNumbers:!1})))})))},v=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Model"),a.createElement("th",null,"Triad"),a.createElement("th",null,"Seventh"),a.createElement("th",null,"Drop 3-7"),a.createElement("th",null,"Drop 7-3"))),D=[{model:l.Z,modelId:o.X.Maj7},{model:l.Z,modelId:o.X.Min7},{model:l.Z,modelId:o.X.Dom7},{model:l.Z,modelId:o.X.HalfDim7}];t.default=function(){var e=(0,a.useState)(i.nq.get(o.iw.C)),t=e[0],n=e[1],r=new _.Z(t.value);return a.createElement(C,{title:"Chord Voicings",maxWidth:"1920px"},a.createElement(S.Z,{label:"Root"},a.createElement(p.Z,{options:i.WA,value:t,setValue:function(e){n(e)}})),a.createElement(u.ZP,{title:"E Root"},a.createElement("table",null,v,a.createElement("tbody",null,D.map((function(e,t){var n=e.model,l=e.modelId;return a.createElement(f,{key:t,model:n,modelId:l,root:r,voicingIds:s})}))))),a.createElement(u.ZP,{title:"A Root"},a.createElement("table",null,v,a.createElement("tbody",null,D.map((function(e,t){var n=e.model,l=e.modelId;return a.createElement(f,{key:t,model:n,modelId:l,root:r,voicingIds:m})}))))),a.createElement(u.ZP,{title:"D Root"},a.createElement("table",null,v,a.createElement("tbody",null,D.map((function(e,t){var n=e.model,l=e.modelId;return a.createElement(f,{key:t,model:n,modelId:l,root:r,voicingIds:w})}))))))}},1011:function(e,t,n){n.d(t,{Ol:function(){return _},rg:function(){return i}});var a=n(3366),r=n(7294),l=n(1074),o=["title","subtitle","action","children","level"],i=l.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),_=function(e){var t=e.title,n=e.level,a=void 0===n?2:n,l=e.action,o=void 0===l?null:l,i="h"+a;return r.createElement("div",{className:"header"},r.createElement(i,null,t),o)};t.ZP=function(e){var t=e.title,n=e.subtitle,l=e.action,h=e.children,d=e.level,p=(0,a.Z)(e,o);return r.createElement(i,p,t&&r.createElement(_,{title:t,action:l,level:d}),n&&r.createElement(_,{title:n,level:d+1}),h)}},3342:function(e,t,n){n.d(t,{H:function(){return i}});var a=n(3366),r=n(7294),l=n(1074),o=["label","children","y"],i=l.default.div.withConfig({displayName:"InputRow__StyledInputRow",componentId:"sc-18k0pnn-0"})(["display:flex;align-items:flex-start;flex-direction:column;width:100%;"," > label{color:",";font-weight:bold;margin:8px;white-space:nowrap;}"],(function(e){return e.$y?"":"\n        @media(min-width: 512px) {\n            align-items: center;\n            flex-direction: row;\n            justify-content: space-between;\n            //margin-bottom: 8px;\n        }\n    "}),(function(e){return e.theme.dark3}));t.Z=function(e){var t=e.label,n=e.children,l=e.y,_=void 0!==l&&l,h=(0,a.Z)(e,o);return r.createElement(i,Object.assign({$y:_},h),r.createElement("label",null,t),r.createElement("div",null,n))}},9025:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(1074),l=r.default.div.withConfig({displayName:"Fretboardstyles__StyledFretboard",componentId:"sc-ucsj4f-0"})(['display:inline-grid;width:100%;background-image:radial-gradient(ellipse,#E8DBB8 0%,#D0B27C 100%);font-size:90%;margin:16px 0;.fret{display:inline-flex;justify-content:center;align-items:center;position:relative;border-right:2px solid darkgrey;}.fret.open{border-right:3px solid grey;background-color:#D0B27C;;}.fret::before{content:"";display:block;height:0;width:0;margin-top:calc(1/2 * 100%);}.fret-string{border-top:1px solid grey;width:100%;}.fret-number{position:absolute;bottom:100%;}.fret-dots{position:absolute;top:95%;font-size:16px;white-space:nowrap;}.fret-number,.fret-dots{color:#888;}']),o=n(6627),i=r.default.div.withConfig({displayName:"FretLabel__StyledFretLabel",componentId:"sc-djhycx-0"})(["position:absolute;height:60%;aspect-ratio:1;display:flex;justify-content:center;align-items:center;border-radius:100%;background-color:",";color:",";"],(function(e){var t=e.$bgColor;return t||"transparent"}),(function(e){var t=e.$fgColor;return t||""})),_=function(e){var t=e.colorMapFn(e);return a.createElement(i,{$bgColor:t,$fgColor:"white",onClick:null,className:"fret-label"},null)},h=function(e){var t=e.tuning,n=e.stringIndex,r=e.fretIndex,l=e.showFretNumbers,i=e.showFretDots,h=["fret"];0===r&&h.push("open");var d=n===t.length-1,p=0===n;return a.createElement("div",{className:h.join(" ")},a.createElement("div",{className:"fret-number"},l&&p&&r>0&&r),a.createElement("div",{className:"fret-string"}),a.createElement(_,e),a.createElement("div",{className:"fret-dots"},i&&d&&r>0&&(0,o.UQ)(r)))},d=function(e){var t=Object.assign({},o.jt,e),n=t.fretRange,r=n[0],i=n[1]-r+1,_=t.tuning.length,d={gridTemplateColumns:(0,o.Cf)(i).map((function(e){return e+"fr"})).join(" "),gridTemplateRows:"repeat("+_+", 1fr)"};return a.createElement(l,{className:"fretboard",style:d},function(e){for(var t=e.fretRange,n=e.tuning,r=t[0],l=t[1],o=[],i=0;i<n.length;i++)for(var _=r;_<=l;_++)o.push(a.createElement(h,Object.assign({key:"s"+i+"-f"+_,stringIndex:i,fretIndex:_,tuning:n},e)));return o}(t))}},8212:function(e,t,n){n.d(t,{$Z:function(){return h},P1:function(){return d},yE:function(){return a}});var a,r=n(7389),l=n(7158),o=n(9544);!function(e){e.Standard="standard",e.StandardSeven="standard-seven",e.StandardBass="standard-bass",e.Flat="flat",e.DoubleFlat="double-flat",e.DropD="drop-d",e.DADGAD="dadgad",e.Banjo="banjo",e.Violin="violin",e.OpenA="open-a",e.OpenB="open-b",e.OpenC="open-c",e.OpenD="open-d",e.OpenE="open-e",e.OpenF="open-f",e.OpenG="open-g"}(a||(a={}));var i=function(e,t,n){return{id:e,name:t,value:n}},_=function(e,t){return l.Z.getNote(e,t).pod[0]},h=new Map([[a.Standard,i(a.Standard,"Standard Guitar",[_(o.iw.E,5),_(o.iw.B,4),_(o.iw.G,4),_(o.iw.D,4),_(o.iw.A,3),_(o.iw.E,3)])],[a.Flat,i(a.Flat,"Flat Gtr",[_(o.iw.Eb,5),_(o.iw.Bb,4),_(o.iw.Gb,4),_(o.iw.Db,4),_(o.iw.Ab,3),_(o.iw.Eb,3)])],[a.DoubleFlat,i(a.DoubleFlat,"Double Flat Gtr",[_(o.iw.D,5),_(o.iw.A,4),_(o.iw.F,4),_(o.iw.C,4),_(o.iw.G,3),_(o.iw.D,3)])],[a.StandardSeven,i(a.StandardSeven,"Standard 7-String Gtr",[_(o.iw.E,5),_(o.iw.B,4),_(o.iw.G,4),_(o.iw.D,4),_(o.iw.A,3),_(o.iw.E,3),_(o.iw.B,3)])],[a.StandardBass,i(a.StandardBass,"Standard Bass",[_(o.iw.G,3),_(o.iw.D,3),_(o.iw.A,2),_(o.iw.E,2)])],[a.DropD,i(a.DropD,"Drop D Gtr",[_(o.iw.E,5),_(o.iw.B,4),_(o.iw.G,4),_(o.iw.D,4),_(o.iw.A,3),_(o.iw.D,3)])],[a.DADGAD,i(a.DADGAD,"DADGAD",[_(o.iw.D,5),_(o.iw.A,4),_(o.iw.G,4),_(o.iw.D,4),_(o.iw.A,3),_(o.iw.D,3)])],[a.Violin,i(a.Violin,"Violin",[_(o.iw.E,5),_(o.iw.A,4),_(o.iw.D,4),_(o.iw.G,4)])],[a.OpenA,i(a.OpenA,"Open A",[_(o.iw.E,5),_(o.iw.A,4),_(o.iw.E,4),_(o.iw.Cs,4),_(o.iw.A,3),_(o.iw.E,3)])],[a.OpenB,i(a.OpenB,"Open B",[_(o.iw.Ds,5),_(o.iw.B,4),_(o.iw.Fs,4),_(o.iw.B,4),_(o.iw.Fs,3),_(o.iw.B,3)])],[a.OpenC,i(a.OpenC,"Open C",[_(o.iw.E,5),_(o.iw.C,4),_(o.iw.G,4),_(o.iw.C,4),_(o.iw.G,3),_(o.iw.C,3)])],[a.OpenD,i(a.OpenD,"Open D",[_(o.iw.D,5),_(o.iw.A,4),_(o.iw.Fs,4),_(o.iw.D,4),_(o.iw.A,3),_(o.iw.D,3)])],[a.OpenE,i(a.OpenE,"Open E",[_(o.iw.E,5),_(o.iw.B,4),_(o.iw.Gs,4),_(o.iw.E,4),_(o.iw.B,3),_(o.iw.E,3)])],[a.OpenF,i(a.OpenF,"Open F",[_(o.iw.F,5),_(o.iw.C,4),_(o.iw.F,4),_(o.iw.C,4),_(o.iw.A,3),_(o.iw.F,3)])],[a.OpenG,i(a.OpenG,"Open G",[_(o.iw.D,5),_(o.iw.B,4),_(o.iw.G,4),_(o.iw.D,4),_(o.iw.G,3),_(o.iw.D,3)])]]),d=r.Z.mapToArray(h)},6627:function(e,t,n){n.d(t,{Cf:function(){return _},UQ:function(){return h},id:function(){return o},jt:function(){return i}});var a=n(8212),r=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],l=Math.pow(.5,1/12),o=function(e,t,n){if(!t||!t.value)return!0;var a=t.value[n],r=e.getDegree();return Array.isArray(a)?a.some((function(e){return d(r,e)})):"number"==typeof a&&d(r,a)},i={fretRange:[1,12],tuning:a.$Z.get(a.yE.Standard).value,showFretDots:!0,showFretNumbers:!0,colorMapFn:function(e){var t=e.stringIndex,n=e.fretIndex,a=e.tuning,r=e.model,l=e.voicing,i=a[t]+n,_=r.tryGetPodPairAtPitch(i),h=_[0];if(_[1])return l&&!o(h,l,t)?"#00000033":h.getColor()}},_=function(e){for(var t=[],n=1;n<=e;n++)t.push(n<=1?1:t[n-2]*l);return t},h=function(e){var t=e%12;return 0===t?"• •":r[t]?"•":""},d=function(e,t){return e+1===t}},333:function(e,t,n){n.d(t,{Gz:function(){return a},ew:function(){return o},rk:function(){return i}});var a,r=n(7389);!function(e){e.None="None",e.Chord_Triad_CShape_1="Chord_Triad_CShape_1",e.Chord_Triad_AShape_1="Chord_Triad_AShape_1",e.Chord_Triad_GShape_1="Chord_Triad_GShape_1",e.Chord_Triad_EShape_1="Chord_Triad_EShape_1",e.Chord_Triad_DShape_1="Chord_Triad_DShape_1",e.Chord_Sixth_CShape_1="Chord_Sixth_CShape_1",e.Chord_Sixth_AShape_1="Chord_Sixth_AShape_1",e.Chord_Sixth_GShape_1="Chord_Sixth_GShape_1",e.Chord_Sixth_EShape_1="Chord_Sixth_EShape_1",e.Chord_Sixth_DShape_1="Chord_Sixth_DShape_1",e.Chord_Seventh_CShape_1="Chord_Seventh_CShape_1",e.Chord_Seventh_AShape_1="Chord_Seventh_AShape_1",e.Chord_Seventh_GShape_1="Chord_Seventh_GShape_1",e.Chord_Seventh_EShape_1="Chord_Seventh_EShape_1",e.Chord_Seventh_DShape_1="Chord_Seventh_DShape_1",e.Chord_Shell_E_37="Chord_Shell_E_37",e.Chord_Shell_E_73="Chord_Shell_E_73",e.Chord_Shell_A_37="Chord_Shell_A_37",e.Chord_Shell_A_73="Chord_Shell_A_73",e.Chord_Shell_D_37="Chord_Shell_D_37",e.Chord_Shell_D_73="Chord_Shell_D_73",e.Scale_DoubleOctave_CShape_1="Scale_DoubleOctave_CShape_1",e.Scale_DoubleOctave_CShape_2="Scale_DoubleOctave_CShape_2",e.Scale_DoubleOctave_AShape_1="Scale_DoubleOctave_AShape_1",e.Scale_DoubleOctave_GShape_1="Scale_DoubleOctave_GShape_1",e.Scale_DoubleOctave_EShape_1="Scale_DoubleOctave_EShape_1",e.Scale_DoubleOctave_EShape_2="Scale_DoubleOctave_EShape_2",e.Scale_DoubleOctave_DShape_1="Scale_DoubleOctave_DShape_1"}(a||(a={}));var l=function(e,t,n){return{id:e,name:t,value:n}},o=new Map([[a.Chord_Triad_CShape_1,l(a.Chord_Triad_CShape_1,"C Shape Triad",[3,1,5,3,1,null])],[a.Chord_Triad_AShape_1,l(a.Chord_Triad_AShape_1,"A Shape Triad",[5,3,1,5,1,null])],[a.Chord_Triad_GShape_1,l(a.Chord_Triad_GShape_1,"G Shape Triad",[1,5,1,5,3,1])],[a.Chord_Triad_EShape_1,l(a.Chord_Triad_EShape_1,"E Shape Triad",[1,5,3,1,5,1])],[a.Chord_Triad_DShape_1,l(a.Chord_Triad_DShape_1,"D Shape Triad",[3,1,5,1,null,null])],[a.Chord_Sixth_CShape_1,l(a.Chord_Sixth_CShape_1,"C Shape 6th Chord",[3,6,5,3,1,null])],[a.Chord_Sixth_AShape_1,l(a.Chord_Sixth_AShape_1,"A Shape 6th Chord",[5,3,6,5,1,null])],[a.Chord_Sixth_GShape_1,l(a.Chord_Sixth_GShape_1,"G Shape 6th Chord",[6,5,1,5,3,1])],[a.Chord_Sixth_EShape_1,l(a.Chord_Sixth_EShape_1,"E Shape 6th Chord",[1,5,3,6,5,1])],[a.Chord_Sixth_DShape_1,l(a.Chord_Sixth_DShape_1,"D Shape 6th Chord",[3,6,5,1,null,null])],[a.Chord_Seventh_CShape_1,l(a.Chord_Seventh_CShape_1,"C Shape 7th Chord",[3,7,5,3,1,null])],[a.Chord_Seventh_AShape_1,l(a.Chord_Seventh_AShape_1,"A Shape 7th Chord",[5,3,7,5,1,null])],[a.Chord_Seventh_GShape_1,l(a.Chord_Seventh_GShape_1,"G Shape 7th Chord",[7,5,1,5,3,1])],[a.Chord_Seventh_EShape_1,l(a.Chord_Seventh_EShape_1,"E Shape 7th Chord",[1,5,3,7,5,1])],[a.Chord_Seventh_DShape_1,l(a.Chord_Seventh_DShape_1,"D Shape 7th Chord",[3,7,5,1,null,null])],[a.Chord_Shell_E_37,l(a.Chord_Shell_E_37,"Shell E 3-7",[null,null,null,7,3,1])],[a.Chord_Shell_E_73,l(a.Chord_Shell_E_73,"Shell E 7-3",[null,null,3,7,null,1])],[a.Chord_Shell_A_37,l(a.Chord_Shell_A_37,"Shell A 3-7",[null,null,7,3,1,null])],[a.Chord_Shell_A_73,l(a.Chord_Shell_A_73,"Shell A 7-3",[null,3,7,null,1,null])],[a.Chord_Shell_D_37,l(a.Chord_Shell_D_37,"Shell D 3-7",[null,7,3,1,null,null])],[a.Chord_Shell_D_73,l(a.Chord_Shell_D_73,"Shell D 7-3",[3,7,null,1,null,null])],[a.Scale_DoubleOctave_EShape_1,l(a.Scale_DoubleOctave_EShape_1,"E Shape Scale (Locrian)",[[1,2,3],[6,7],[3,4,5],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_EShape_2,l(a.Scale_DoubleOctave_EShape_2,"E Shape Scale (Ionian)",[[7,1,2],[5,6],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_DShape_1,l(a.Scale_DoubleOctave_DShape_1,"D Shape Scale (Dorian)",[[1,2,3],[5,6,7],[2,3,4],[6,7,1],[4,5],[1,2,3]])],[a.Scale_DoubleOctave_CShape_1,l(a.Scale_DoubleOctave_CShape_1,"C Shape Scale (Phrygian)",[[1,2,3],[5,6,7],[3,4],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_CShape_2,l(a.Scale_DoubleOctave_CShape_2,"C Shape Scale (Lydian)",[[7,1,2],[4,5,6],[2,3],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_AShape_1,l(a.Scale_DoubleOctave_AShape_1,"A Shape Scale (Mixolydian)",[[1,2],[5,6,7],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_GShape_1,l(a.Scale_DoubleOctave_GShape_1,"G Shape Scale (Aeolian)",[[1,2,3],[5,6,7],[2,3,4],[7,1],[4,5,6],[1,2,3]])]]),i=r.Z.mapToArray(o)}}]);
//# sourceMappingURL=component---src-components-pages-dev-notebook-chords-voicings-common-voicings-from-e-a-d-roots-page-tsx-abc4e10d47dc5b466232.js.map