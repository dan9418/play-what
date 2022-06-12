"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[921],{6486:function(e,t,n){var a=n(7294),r=n(1074).default.select.withConfig({displayName:"DropdownInput__StyledDropdownInput",componentId:"sc-d8f7o3-0"})(["font-size:110%;min-width:128px;padding:4px 8px;cursor:pointer;border-radius:4px;option{cursor:pointer;}"]);t.Z=function(e){var t=e.value,n=e.setValue,i=e.options,l=e.idProperty,o=e.displayProperty;return a.createElement(r,{className:"dropdown-input",onChange:function(e){return n(i[e.target.selectedIndex],e.target.selectedIndex)},value:t?t[l||"id"]:""},(i||[]).map((function(e,t){return a.createElement("option",{key:t,value:e[l||"id"]},o?e[o]:e.name)})))}},4140:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(1074),i=(n(7207),n(1597)),l=n(1586),o=n(6291),h=r.default.ul.withConfig({displayName:"BreadcrumbList__StyledBreadcrumbList",componentId:"sc-113wbqc-0"})(["font-size:80%;padding:0 0 8px 0;@media(min-width:512px){font-size:110%;padding:0 0 16px 0;}display:flex;flex-wrap:wrap;align-items:center;gap:8px;white-space:nowrap;text-transform:capitalize;svg{margin-right:8px;}span{color:",";}"],(function(e){return e.theme.text.secondary})),_=function(){var e=(0,l.V7)().path.split("/"),t=[];return e.reduce((function(e,n,r,l){var h=(e+"/"+n).replace("//","/")||"/",_=!["root","practice","test","experimental"].includes(n),d=0===r?"Home":n.replaceAll("-"," ").replace(" sharp","#").replace(" flat","b"),p=_?i.rU:"span",c=_?h:void 0;return t.push(a.createElement("li",{key:r},r>0&&a.createElement(o.ZP,{iconId:"next",size:10,color:"grey"}),a.createElement(p,{to:c},d))),h}),"/"),a.createElement(h,null,t.slice(0,t.length-1))},d=n(4928),p=r.default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-obvm75-0"})(["width:100%;.header{border-bottom:1px solid ",";width:100%;margin:auto;padding-bottom:8px;@media(min-width:512px){padding-bottom:16px;}> h1{width:100%;font-size:150%;@media(min-width:512px){font-size:300%;}text-align:left;color:",";;}> h2{margin-top:4px;width:100%;text-align:left;color:",";;font-size:80%;@media(min-width:512px){font-size:100%;}}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary})),c=function(e){var t=e.title,n=e.subtitle,r=e.action,i=e.children;return a.createElement(a.Fragment,null,a.createElement(d.Z,{title:t}),a.createElement(_,null),a.createElement(p,null,a.createElement("div",{className:"header"},a.createElement("h1",null,t),n&&a.createElement("h2",null,n),r),i))}},1011:function(e,t,n){n.d(t,{Ol:function(){return h},rg:function(){return o}});var a=n(3366),r=n(7294),i=n(1074),l=["title","action","children"],o=i.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),h=function(e){var t=e.title,n=e.action,a=void 0===n?null:n;return r.createElement("div",{className:"header"},r.createElement("h2",null,t),a)};t.ZP=function(e){var t=e.title,n=e.action,i=e.children,_=(0,a.Z)(e,l);return r.createElement(o,_,t&&r.createElement(h,{title:t,action:n}),i)}},3342:function(e,t,n){n.d(t,{H:function(){return o}});var a=n(3366),r=n(7294),i=n(1074),l=["label","children","y"],o=i.default.div.withConfig({displayName:"InputRow__StyledInputRow",componentId:"sc-18k0pnn-0"})(["display:flex;align-items:flex-start;flex-direction:column;width:100%;"," > label{color:",";font-weight:bold;margin:8px;white-space:nowrap;}"],(function(e){return e.$y?"":"\n        @media(min-width: 512px) {\n            align-items: center;\n            flex-direction: row;\n            justify-content: space-between;\n            //margin-bottom: 8px;\n        }\n    "}),(function(e){return e.theme.dark3}));t.Z=function(e){var t=e.label,n=e.children,i=e.y,h=void 0!==i&&i,_=(0,a.Z)(e,l);return r.createElement(o,Object.assign({$y:h},_),r.createElement("label",null,t),r.createElement("div",null,n))}},9025:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(1074),i=r.default.div.withConfig({displayName:"Fretboardstyles__StyledFretboard",componentId:"sc-ucsj4f-0"})(['display:inline-grid;width:100%;background-image:radial-gradient(ellipse,#E8DBB8 0%,#D0B27C 100%);font-size:90%;margin:16px 0;.fret{display:inline-flex;justify-content:center;align-items:center;position:relative;border-right:2px solid darkgrey;}.fret.open{border-right:3px solid grey;background-color:#D0B27C;;}.fret::before{content:"";display:block;height:0;width:0;margin-top:calc(1/2 * 100%);}.fret-string{border-top:1px solid grey;width:100%;}.fret-number{position:absolute;bottom:100%;}.fret-dots{position:absolute;top:95%;font-size:16px;white-space:nowrap;}.fret-number,.fret-dots{color:#888;}']),l=n(6627),o=r.default.div.withConfig({displayName:"FretLabel__StyledFretLabel",componentId:"sc-djhycx-0"})(["position:absolute;height:60%;aspect-ratio:1;display:flex;justify-content:center;align-items:center;border-radius:100%;background-color:",";color:",";cursor:pointer;&:hover{height:80%;}"],(function(e){var t=e.$bgColor;return t||"transparent"}),(function(e){var t=e.$fgColor;return t||""})),h=function(e){var t=e.colorMapFn(e);return a.createElement(o,{$bgColor:t,$fgColor:"white",onClick:null,className:"fret-label"},null)},_=function(e){var t=e.tuning,n=e.stringIndex,r=e.fretIndex,i=e.showFretNumbers,o=e.showFretDots,_=["fret"];0===r&&_.push("open");var d=n===t.length-1,p=0===n;return a.createElement("div",{className:_.join(" ")},a.createElement("div",{className:"fret-number"},i&&p&&r>0&&r),a.createElement("div",{className:"fret-string"}),a.createElement(h,e),a.createElement("div",{className:"fret-dots"},o&&d&&r>0&&(0,l.UQ)(r)))},d=function(e){var t=Object.assign({},l.jt,e),n=t.fretRange,r=n[0],o=n[1]-r+1,h=t.tuning.length,d={gridTemplateColumns:(0,l.Cf)(o).map((function(e){return e+"fr"})).join(" "),gridTemplateRows:"repeat("+h+", 1fr)"};return a.createElement(i,{className:"fretboard",style:d},function(e){for(var t=e.fretRange,n=e.tuning,r=t[0],i=t[1],l=[],o=0;o<n.length;o++)for(var h=r;h<=i;h++)l.push(a.createElement(_,Object.assign({key:"s"+o+"-f"+h,stringIndex:o,fretIndex:h,tuning:n},e)));return l}(t))}},8212:function(e,t,n){n.d(t,{$Z:function(){return _},P1:function(){return d},yE:function(){return a}});var a,r=n(7389),i=n(7158),l=n(9544);!function(e){e.Standard="standard",e.StandardSeven="standard-seven",e.StandardBass="standard-bass",e.Flat="flat",e.DoubleFlat="double-flat",e.DropD="drop-d",e.DADGAD="dadgad",e.Banjo="banjo",e.Violin="violin",e.OpenA="open-a",e.OpenB="open-b",e.OpenC="open-c",e.OpenD="open-d",e.OpenE="open-e",e.OpenF="open-f",e.OpenG="open-g"}(a||(a={}));var o=function(e,t,n){return{id:e,name:t,value:n}},h=function(e,t){return i.Z.getNote(e,t).pod[0]},_=new Map([[a.Standard,o(a.Standard,"Standard",[h(l.iw.E,5),h(l.iw.B,4),h(l.iw.G,4),h(l.iw.D,4),h(l.iw.A,3),h(l.iw.E,3)])],[a.Flat,o(a.Flat,"Flat",[h(l.iw.Eb,5),h(l.iw.Bb,4),h(l.iw.Gb,4),h(l.iw.Db,4),h(l.iw.Ab,3),h(l.iw.Eb,3)])],[a.DoubleFlat,o(a.DoubleFlat,"Double Flat",[h(l.iw.D,5),h(l.iw.A,4),h(l.iw.F,4),h(l.iw.C,4),h(l.iw.G,3),h(l.iw.D,3)])],[a.StandardSeven,o(a.StandardSeven,"Standard 7-String",[h(l.iw.E,5),h(l.iw.B,4),h(l.iw.G,4),h(l.iw.D,4),h(l.iw.A,3),h(l.iw.E,3),h(l.iw.B,3)])],[a.StandardBass,o(a.StandardBass,"Standard Bass",[h(l.iw.G,3),h(l.iw.D,3),h(l.iw.A,2),h(l.iw.E,2)])],[a.DropD,o(a.DropD,"Drop D",[h(l.iw.E,5),h(l.iw.B,4),h(l.iw.G,4),h(l.iw.D,4),h(l.iw.A,3),h(l.iw.D,3)])],[a.DADGAD,o(a.DADGAD,"DADGAD",[h(l.iw.D,5),h(l.iw.A,4),h(l.iw.G,4),h(l.iw.D,4),h(l.iw.A,3),h(l.iw.D,3)])],[a.Banjo,o(a.Banjo,"Banjo",[h(l.iw.G,5),h(l.iw.D,4),h(l.iw.G,4),h(l.iw.B,4),h(l.iw.D,3)])],[a.Violin,o(a.Violin,"Violin",[h(l.iw.E,5),h(l.iw.A,4),h(l.iw.D,4),h(l.iw.G,4)])],[a.OpenA,o(a.OpenA,"Open A",[h(l.iw.E,5),h(l.iw.A,4),h(l.iw.E,4),h(l.iw.Cs,4),h(l.iw.A,3),h(l.iw.E,3)])],[a.OpenB,o(a.OpenB,"Open B",[h(l.iw.Ds,5),h(l.iw.B,4),h(l.iw.Fs,4),h(l.iw.B,4),h(l.iw.Fs,3),h(l.iw.B,3)])],[a.OpenC,o(a.OpenC,"Open C",[h(l.iw.E,5),h(l.iw.C,4),h(l.iw.G,4),h(l.iw.C,4),h(l.iw.G,3),h(l.iw.C,3)])],[a.OpenD,o(a.OpenD,"Open D",[h(l.iw.D,5),h(l.iw.A,4),h(l.iw.Fs,4),h(l.iw.D,4),h(l.iw.A,3),h(l.iw.D,3)])],[a.OpenE,o(a.OpenE,"Open E",[h(l.iw.E,5),h(l.iw.B,4),h(l.iw.Gs,4),h(l.iw.E,4),h(l.iw.B,3),h(l.iw.E,3)])],[a.OpenF,o(a.OpenF,"Open F",[h(l.iw.F,5),h(l.iw.C,4),h(l.iw.F,4),h(l.iw.C,4),h(l.iw.A,3),h(l.iw.F,3)])],[a.OpenG,o(a.OpenG,"Open G",[h(l.iw.D,5),h(l.iw.B,4),h(l.iw.G,4),h(l.iw.D,4),h(l.iw.G,3),h(l.iw.D,3)])]]),d=r.Z.mapToArray(_)},6627:function(e,t,n){n.d(t,{Cf:function(){return o},UQ:function(){return h},jt:function(){return l}});var a=n(8212),r=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],i=Math.pow(.5,1/12),l={fretRange:[1,12],tuning:a.$Z.get(a.yE.Standard).value,showFretDots:!0,showFretNumbers:!0,colorMapFn:function(e){var t=e.stringIndex,n=e.fretIndex,a=e.tuning,r=e.model,i=e.voicing,l=a[t]+n,o=r.tryGetPodPairAtPitch(l),h=o[0];if(o[1])return i&&!function(e,t,n){if(!t||!t.value)return!0;var a=t.value[n],r=e.getDegree();return Array.isArray(a)?a.some((function(e){return _(r,e)})):"number"==typeof a&&_(r,a)}(h,i,t)?"#00000033":h.getColor()}},o=function(e){for(var t=[],n=1;n<=e;n++)t.push(n<=1?1:t[n-2]*i);return t},h=function(e){var t=e%12;return 0===t?"• •":r[t]?"•":""},_=function(e,t){return e+1===t}},333:function(e,t,n){n.d(t,{Gz:function(){return a},ew:function(){return l},rk:function(){return o}});var a,r=n(7389);!function(e){e.None="None",e.Chord_Triad_CShape_1="Chord_Triad_CShape_1",e.Chord_Triad_AShape_1="Chord_Triad_AShape_1",e.Chord_Triad_GShape_1="Chord_Triad_GShape_1",e.Chord_Triad_EShape_1="Chord_Triad_EShape_1",e.Chord_Triad_DShape_1="Chord_Triad_DShape_1",e.Chord_Sixth_CShape_1="Chord_Sixth_CShape_1",e.Chord_Sixth_AShape_1="Chord_Sixth_AShape_1",e.Chord_Sixth_GShape_1="Chord_Sixth_GShape_1",e.Chord_Sixth_EShape_1="Chord_Sixth_EShape_1",e.Chord_Sixth_DShape_1="Chord_Sixth_DShape_1",e.Chord_Seventh_CShape_1="Chord_Seventh_CShape_1",e.Chord_Seventh_AShape_1="Chord_Seventh_AShape_1",e.Chord_Seventh_GShape_1="Chord_Seventh_GShape_1",e.Chord_Seventh_EShape_1="Chord_Seventh_EShape_1",e.Chord_Seventh_DShape_1="Chord_Seventh_DShape_1",e.Chord_Shell_E_37="Chord_Shell_E_37",e.Chord_Shell_E_73="Chord_Shell_E_73",e.Chord_Shell_A_37="Chord_Shell_A_37",e.Chord_Shell_A_73="Chord_Shell_A_73",e.Chord_Shell_D_37="Chord_Shell_D_37",e.Chord_Shell_D_73="Chord_Shell_D_73",e.Scale_DoubleOctave_CShape_1="Scale_DoubleOctave_CShape_1",e.Scale_DoubleOctave_CShape_2="Scale_DoubleOctave_CShape_2",e.Scale_DoubleOctave_AShape_1="Scale_DoubleOctave_AShape_1",e.Scale_DoubleOctave_GShape_1="Scale_DoubleOctave_GShape_1",e.Scale_DoubleOctave_EShape_1="Scale_DoubleOctave_EShape_1",e.Scale_DoubleOctave_EShape_2="Scale_DoubleOctave_EShape_2",e.Scale_DoubleOctave_DShape_1="Scale_DoubleOctave_DShape_1"}(a||(a={}));var i=function(e,t,n){return{id:e,name:t,value:n}},l=new Map([[a.Chord_Triad_CShape_1,i(a.Chord_Triad_CShape_1,"C Shape Triad",[3,1,5,3,1,null])],[a.Chord_Triad_AShape_1,i(a.Chord_Triad_AShape_1,"A Shape Triad",[5,3,1,5,1,null])],[a.Chord_Triad_GShape_1,i(a.Chord_Triad_GShape_1,"G Shape Triad",[1,5,1,5,3,1])],[a.Chord_Triad_EShape_1,i(a.Chord_Triad_EShape_1,"E Shape Triad",[1,5,3,1,5,1])],[a.Chord_Triad_DShape_1,i(a.Chord_Triad_DShape_1,"D Shape Triad",[3,1,5,1,null,null])],[a.Chord_Sixth_CShape_1,i(a.Chord_Sixth_CShape_1,"C Shape 6th Chord",[3,6,5,3,1,null])],[a.Chord_Sixth_AShape_1,i(a.Chord_Sixth_AShape_1,"A Shape 6th Chord",[5,3,6,5,1,null])],[a.Chord_Sixth_GShape_1,i(a.Chord_Sixth_GShape_1,"G Shape 6th Chord",[6,5,1,5,3,1])],[a.Chord_Sixth_EShape_1,i(a.Chord_Sixth_EShape_1,"E Shape 6th Chord",[1,5,3,6,5,1])],[a.Chord_Sixth_DShape_1,i(a.Chord_Sixth_DShape_1,"D Shape 6th Chord",[3,6,5,1,null,null])],[a.Chord_Seventh_CShape_1,i(a.Chord_Seventh_CShape_1,"C Shape 7th Chord",[3,7,5,3,1,null])],[a.Chord_Seventh_AShape_1,i(a.Chord_Seventh_AShape_1,"A Shape 7th Chord",[5,3,7,5,1,null])],[a.Chord_Seventh_GShape_1,i(a.Chord_Seventh_GShape_1,"G Shape 7th Chord",[7,5,1,5,3,1])],[a.Chord_Seventh_EShape_1,i(a.Chord_Seventh_EShape_1,"E Shape 7th Chord",[1,5,3,7,5,1])],[a.Chord_Seventh_DShape_1,i(a.Chord_Seventh_DShape_1,"D Shape 7th Chord",[3,7,5,1,null,null])],[a.Chord_Shell_E_37,i(a.Chord_Shell_E_37,"Shell E 3-7",[null,null,null,7,3,1])],[a.Chord_Shell_E_73,i(a.Chord_Shell_E_73,"Shell E 7-3",[null,null,3,7,null,1])],[a.Chord_Shell_A_37,i(a.Chord_Shell_A_37,"Shell A 3-7",[null,null,7,3,1,null])],[a.Chord_Shell_A_73,i(a.Chord_Shell_A_73,"Shell A 7-3",[null,3,7,null,1,null])],[a.Chord_Shell_D_37,i(a.Chord_Shell_D_37,"Shell D 3-7",[null,7,3,1,null,null])],[a.Chord_Shell_D_73,i(a.Chord_Shell_D_73,"Shell D 7-3",[3,7,null,1,null,null])],[a.Scale_DoubleOctave_EShape_1,i(a.Scale_DoubleOctave_EShape_1,"E Shape Scale (Locrian)",[[1,2,3],[6,7],[3,4,5],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_EShape_2,i(a.Scale_DoubleOctave_EShape_2,"E Shape Scale (Ionian)",[[7,1,2],[5,6],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_DShape_1,i(a.Scale_DoubleOctave_DShape_1,"D Shape Scale (Dorian)",[[1,2,3],[5,6,7],[2,3,4],[6,7,1],[4,5],[1,2,3]])],[a.Scale_DoubleOctave_CShape_1,i(a.Scale_DoubleOctave_CShape_1,"C Shape Scale (Phrygian)",[[1,2,3],[5,6,7],[3,4],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_CShape_2,i(a.Scale_DoubleOctave_CShape_2,"C Shape Scale (Lydian)",[[7,1,2],[4,5,6],[2,3],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_AShape_1,i(a.Scale_DoubleOctave_AShape_1,"A Shape Scale (Mixolydian)",[[1,2],[5,6,7],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_GShape_1,i(a.Scale_DoubleOctave_GShape_1,"G Shape Scale (Aeolian)",[[1,2,3],[5,6,7],[2,3,4],[7,1],[4,5,6],[1,2,3]])]]),o=r.Z.mapToArray(l)}}]);
//# sourceMappingURL=ac427fc3ae47813d2871a6c59d3b8f0b0d74df32-933222021769b12cbae2.js.map