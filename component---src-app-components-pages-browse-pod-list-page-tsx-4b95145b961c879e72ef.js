"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[468],{2740:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var o=a(7294),r=a(8804),n=a(1753),i=a(2624),l=a(3794),d=a(9166),h=a(2497),s=a(930),c=a(5631),_=a(9089),p=a(8585),m=a(1883),S=a(9531),u=a(2585),C=a(3558);const v=(0,r.default)(u.ZP).withConfig({displayName:"RootInput__StyledRootInput",componentId:"sc-1bvj8rw-0"})([".spelling{display:flex;align-items:center;justify-content:center;gap:4px;}a:not(.clear){display:flex;align-items:center;justify-content:flex-start;letter-spacing:2px;padding:8px;border-radius:4px;&:hover,&.active{background-color:",";color:white;}}.clear{margin-left:8px;font-size:110%;}"],(e=>{var t,a;return null===(t=e.theme)||void 0===t||null===(a=t.action)||void 0===a?void 0:a.active})),D=e=>{let{basePath:t,rootKey:a}=e;const r=S.nq.get(a).name;return o.createElement("div",{className:"col"},o.createElement(m.rU,{activeClassName:"active",to:t+"root/"+a+"-sharp"},r+"#"),o.createElement(m.rU,{activeClassName:"active",to:t+"root/"+a},r),o.createElement(m.rU,{activeClassName:"active",to:t+"root/"+a+"-flat"},r+"b"))};var f=e=>{let{onCancel:t}=e;const a=(0,C.V)(),{pathname:r}=a.location,n=r.includes("/root/"),i=a.path.lastIndexOf("root"),l=n?r.slice(0,i):r;n&&r.slice(i+5,i+6);return o.createElement(v,{title:(n?"Edit":"Set")+" Root",action:o.createElement("div",null,t&&o.createElement(p.Z,{onClick:t,isLink:!0},"Cancel"),n&&o.createElement(m.rU,{className:"clear",to:""+l},"Clear"))},o.createElement("div",{className:"spelling"},o.createElement(D,{basePath:l,rootKey:S.iw.C}),o.createElement(D,{basePath:l,rootKey:S.iw.D}),o.createElement(D,{basePath:l,rootKey:S.iw.E}),o.createElement(D,{basePath:l,rootKey:S.iw.F}),o.createElement(D,{basePath:l,rootKey:S.iw.G}),o.createElement(D,{basePath:l,rootKey:S.iw.A}),o.createElement(D,{basePath:l,rootKey:S.iw.B})))};const g=(0,r.default)(u.ZP).withConfig({displayName:"DetailsCard__StyledDetailsCard",componentId:"sc-hd67j1-0"})(["ul{display:flex;align-items:center;justify-content:space-evenly;}li{display:flex;flex-direction:column;align-items:center;gap:8px;>:first-child{font-weight:bold;font-size:150%;}>:nth-child(2){font-weight:semibold;font-size:120%;}}"]);var w=e=>{let{podListPreset:t,rootNotePreset:a}=e;const{0:r,1:n}=(0,o.useState)(!1),i=!!a,d=t.valueIds,h="Intervals"+(i?" & Notes":"");return r?o.createElement(f,{onCancel:()=>n(!1)}):o.createElement(g,{title:h,action:o.createElement(p.Z,{onClick:()=>n(!0)},i?"Edit":"Set"," Root"),$n:d.length},o.createElement("ul",{className:"intervals"},d.map((e=>{const t=s.if.get(e),r=t.pod,n=(0,c.oY)(r),i=a&&(0,l._l)(a.pod,t.pod),d=i&&(0,_.oY)(i),h=(0,c.Dc)(r),p=i&&(0,_.Nb)(i);return o.createElement("li",{key:n},d&&o.createElement("div",{className:"note"},d),o.createElement("div",{className:"interval"},n),p&&o.createElement("div",{className:"freq"},p," Hz"),o.createElement("div",{className:"ratio"},h))}))))},E=a(598);const b=r.default.div.withConfig({displayName:"FretboardCard__StyledFretboardCard",componentId:"sc-fwvv5t-0"})([".customize{display:flex;align-items:center;}"]);var y=e=>{let{podListPreset:t,rootNotePreset:a,presetType:r}=e;if(!t||!a)return null;const n="/view/fretboard?"+new URLSearchParams({presetId:t.presetId,presetType:r,rootId:a.presetId}).toString();return o.createElement(u.ZP,{title:"Fretboard",action:o.createElement(m.rU,{to:n},"Customize")},o.createElement(b,null,o.createElement(E.ZP,{podListPreset:t,rootNotePreset:a})))},A=a(6563),P=a(2643);const x=r.default.div.withConfig({displayName:"ModeCard__StyledModeCard",componentId:"sc-vgq7z0-0"})(["ul{display:flex;justify-content:space-around;gap:4px;flex-wrap:wrap;a{padding:4px;&.active{font-weight:bold;text-decoration:underline;}}}"]);var I=e=>{let{podListPreset:t,rootNotePreset:a}=e;const r=a?a.presetId:void 0,i=t.tags.find((e=>e===n.Vp.Diatonic||e===n.Vp.Pentatonic||e===n.Vp.MelodicMode||e===n.Vp.HarmonicMode));if(!i)return null;let l="";switch(i){case n.Vp.Diatonic:l="Diatonic";break;case n.Vp.Pentatonic:l="Pentatonic";break;case n.Vp.MelodicMode:l="Melodic Minor";break;case n.Vp.HarmonicMode:l="Harmonic Minor"}const d=P.Qo.filter((e=>e.tags.includes(i)));return o.createElement(u.ZP,{title:l+" Modes"},o.createElement(x,null,o.createElement("ul",null,d.map((e=>o.createElement("li",{key:e.presetId},o.createElement(m.rU,{to:(0,A.D)(n.uZ.Scale,e.presetId,r),className:t.presetId===e.presetId?"active":""},e.name)))))))},N=a(2750);const O=r.default.ul.withConfig({displayName:"CollectionList__StyledCollectionList",componentId:"sc-1mdet4s-0"})(['display:flex;flex-wrap:wrap;gap:8px;a{padding:2px;}li{&:not(:last-child){::after{content:", ";color:',";}}}"],(e=>{var t,a;return null===(t=e.theme)||void 0===t||null===(a=t.text)||void 0===a?void 0:a.secondary}));var F=e=>{let{data:t}=e;const{rootId:a,presetType:r}=(0,C.V)().pageContext;return o.createElement(O,null,t.map((e=>{const t=(0,i.I3)(r,e.presetId);return o.createElement("li",{key:e.presetId},o.createElement(m.rU,{to:(0,A.D)(r,e.presetId,a)},t.name))})))},M=a(2430);var T=e=>{let{podListPreset:t,rootNotePreset:a,presetType:r}=e;const{pods:i,presetId:d}=t,h=(0,l.Q)(i),s=(0,l.Bn)(i),c=(0,l.em)(i),_=(0,l.a_)(i),p=i.map((e=>e[0]+1));return o.createElement(o.Fragment,null,h.length>0&&o.createElement(u.ZP,{title:"Child Chords"},o.createElement(M.Z,{data:h,rootNotePreset:a,semitones:p,presetType:r})),c.length>0&&o.createElement(u.ZP,{title:"Parent Chords"},o.createElement(M.Z,{data:c,rootNotePreset:a,semitones:p,presetType:r})),s.length>0&&o.createElement(u.ZP,{title:"Child Scales"},o.createElement(M.Z,{data:s,rootNotePreset:a,semitones:p,presetType:r})),_.length>0&&o.createElement(u.ZP,{title:"Parent Scales"},o.createElement(M.Z,{data:_,rootNotePreset:a,semitones:p,presetType:r})),r===n.uZ.Chord&&o.createElement(u.ZP,{title:"Other Chords"},o.createElement(F,{data:N.Jb.filter((e=>e.presetId!==d))})),r===n.uZ.Scale&&o.createElement(u.ZP,{title:"Other Scales"},o.createElement(F,{data:P.Qo.filter((e=>e.presetId!==d))})))},Z=a(5785),G=a(572);let j;!function(e){e.Major="major",e.Minor="minor",e.Dominant="dominant",e.HalfDiminished="half-diminished",e.Diminished="diminished",e.Augmented="augmented"}(j||(j={}));const B=new Map([[j.Major,{presetId:j.Major,name:"Major",term:{long:"Major",medium:"Maj",short:"M",minimal:"",jazz:"Δ"},triad:j.Major}],[j.Minor,{presetId:j.Minor,name:"Minor",term:{long:"Minor",medium:"Min",short:"m",minimal:"m",jazz:"-"},triad:j.Minor}],[j.Dominant,{presetId:j.Dominant,name:"Dominant",term:{long:"Dominant",medium:"Dom",short:"7",minimal:"7",jazz:"⁷"},triad:j.Major}],[j.HalfDiminished,{presetId:j.HalfDiminished,name:"Half-Diminished",term:{long:"Half-Diminished",medium:"Half-Dim",short:"ø",minimal:"ø",jazz:"ø"},triad:j.Diminished}],[j.Diminished,{presetId:j.Diminished,name:"Diminished",term:{long:"Diminished",medium:"Dim",short:"d",minimal:"d",jazz:"o"},triad:j.Diminished}],[j.Augmented,{presetId:j.Augmented,name:"Augmented",term:{long:"Augmented",medium:"Aug",short:"A",minimal:"",jazz:"+"},triad:j.Augmented}]]);G.Z.mapToArray(B);var z=a(8337);const L=function(e,t){switch(void 0===t&&(t="jazz"),e){case N.X.MajTriad:case N.X.Maj7:case N.X.Maj6:return B.get(j.Major).term[t];case N.X.MinTriad:case N.X.Min7:case N.X.Min6:return B.get(j.Minor).term[t];case N.X.Dom7:return B.get(j.Dominant).term[t];case N.X.HalfDim7:return B.get(j.HalfDiminished).term[t];case N.X.AugTriad:return B.get(j.Augmented).term[t];case N.X.DimTriad:return B.get(j.Diminished).term[t]}},V=(e,t)=>{const a=z.Z.romanize(e);switch(t){case N.X.HalfDim7:case N.X.Min7:case N.X.MinTriad:case N.X.DimTriad:return a.toLowerCase();case N.X.MajTriad:case N.X.Maj7:case N.X.Dom7:case N.X.AugTriad:default:return a}},X=(e,t)=>{const a=[];for(let r=0;r<e.length;r+=2){const o=e[z.Z.moduloSum(t,r,e.length)];a.push(o)}const o=[[0,0]];for(let r=0;r<a.length-1;r++){const e=(0,l.Tx)(a[r+1],a[0]);o.push((0,l.td)(e))}return N.Jb.find((e=>(0,l.qP)(e.pods,o)))};var k=a(2770);const H=(0,r.css)(["border-collapse:collapse;width:100%;th{&:first-child{text-align:right;}padding:4px;}td{padding:4px;text-align:center;sup{font-size:80%;}}.numeral td{font-size:160%;font-family:serif;}"]);var R=e=>{let{podListPreset:t,rootNotePreset:a,title:r="Roman Numerals"}=e;const i=((e,t)=>{const a=[];if(e.tags.includes(n.Vp.Diatonic))for(let o=0;o<e.pods.length;o++){const r=t&&(0,l.td)((0,l._l)(t.pod,e.pods[o])),n=r&&(0,_.yt)(r);a.push([n,X(e.pods,o)])}return a})(t,a);return!i.length||i.find((e=>!e||!e[1]))?null:o.createElement(u.ZP,{title:r},o.createElement(k.i,{styles:H,headerColIndicies:[0],tbody:[{className:"numeral",cols:["Numeral"].concat((0,Z.Z)(i.map(((e,t)=>{let[a,r]=e;const[n,i]=((e,t,a)=>[V(t,e),L(e,a)])(r.presetId,t+1);return{content:o.createElement(o.Fragment,null,n,o.createElement("sup",{className:"symbol"},i))}}))))},{cols:["Degree"].concat((0,Z.Z)(i.map(((e,t)=>t+1))))},{cols:["Name"].concat((0,Z.Z)(i.map(((e,t)=>{let[a,o]=e;return{link:(0,A.D)(n.uZ.Chord,o.presetId,a?a.presetId:void 0),content:(0,l.VQ)((0,l.mw)(o,a))}}))))}]}))};const U=(0,r.default)(h.Z).withConfig({displayName:"pod-listpage__StyledPodlistPage",componentId:"sc-10ntat3-0"})([""]);var K=e=>{const{presetType:t,presetId:a,rootId:r}=e.pageContext,h=(0,i.I3)(t,a),s=(0,i.I3)(n.uZ.Note,r),c=(0,l.mw)(h,s);return o.createElement(U,{title:c},o.createElement(d.Z,null,o.createElement(w,{podListPreset:h,rootNotePreset:s}),t===n.uZ.Scale&&o.createElement(R,{podListPreset:h,rootNotePreset:s}),t===n.uZ.Scale&&o.createElement(I,{podListPreset:h,rootNotePreset:s}),o.createElement(y,{podListPreset:h,rootNotePreset:s,presetType:t}),o.createElement(T,{podListPreset:h,rootNotePreset:s,presetType:t})))}},598:function(e,t,a){a.d(t,{ZP:function(){return u}});var o=a(7294),r=a(8804),n=a(8622),i=a(4733),l=a(3794),d=a(6239),h=a(5306);const s=e=>{const{stringIndex:t,fretIndex:a,tuningValue:o,podListPreset:r,rootNotePreset:n,voicingValue:i,colorSchemeFn:d}=e,h=o[t]+a,s=n.pod,c=r.pods,_=(0,l.qB)(s,c),[p,m]=(0,l.X1)(c,_,h);if(!m)return{};return{color:d(m,p)}},c=e=>{if(0===e)return"";const t=e%12;return 0===t?"• •":i.Dz[t]?"•":""};var _=a(2770);const p=r.default.div.withConfig({displayName:"Fretboard__StyledFretTable",componentId:"sc-vfftb6-0"})([""]),m=r.default.div.withConfig({displayName:"Fretboard__StyledFretFlag",componentId:"sc-vfftb6-1"})(["height:16px;width:16px;background:",";opacity:",";border-radius:100%;z-index:1;"],(e=>e.$color||"transparent"),(e=>e.$opacity||1)),S=(0,r.css)(["width:100%;border-collapse:collapse;td,th{min-width:18px;text-align:center;}tbody td{background-color:#e8dbb8;border-right:1px solid grey;&:first-child{border-left:1px solid grey;}.fret-content{min-height:32px;display:flex;align-items:center;justify-content:center;position:relative;}.fret-string{height:1px;background:#bbb;width:100%;position:absolute;margin:auto 0;}}tbody tr{&:first-child{border-top:1px solid grey;}&:last-child{border-bottom:1px solid grey;}}"]);var u=e=>{const t=(e=>{const t={...i.jt,...e},{showFretDots:a,showFretNumbers:o,fretRange:r,tuningId:l,colorSchemeId:_,voicingId:p,podListPreset:m,rootNotePreset:S}=t,[u,C]=r,v=d.$Z.get(l).value,D=h.ew.get(p).value,f=n.dB.get(_).fn,g=C-u+1,w=v.length,E=[];if(o)for(let n=0;n<g;n++)E.push(u+n);const b=[];if(a)for(let n=0;n<g;n++)b.push(c(u+n));const y=[];for(let n=0;n<w;n++){const e=[];for(let t=u;t<=C;t++)e.push(s({stringIndex:n,fretIndex:t,tuningValue:v,podListPreset:m,rootNotePreset:S,colorSchemeFn:f,voicingValue:D}));y.push(e)}return{fretNums:E,fretDots:b,strings:y}})(e),{fretNums:a,fretDots:r,strings:l}=t,u=[];for(let n=0;n<l.length;n++){const e=[];for(let t=0;t<l[n].length;t++){const{color:a,opacity:r}=l[n][t];e.push({content:o.createElement("div",{className:"fret-content"},o.createElement("div",{className:"fret-string"}),o.createElement(m,{$color:a,$opacity:r}))})}u.push({cols:e})}return o.createElement(p,null,o.createElement(_.i,{thead:a.length?[{cols:a}]:void 0,tfoot:r.length?[{cols:r}]:void 0,tbody:u,styles:S}))}},8622:function(e,t,a){a.d(t,{N5:function(){return i},Ry:function(){return p},dB:function(){return _}});var o=a(9089),r=a(3794),n=a(572);let i;!function(e){e.None="none",e.Monochrome="monochrome",e.HighlightRoot="highlight-root",e.Degree="degree",e.PitchClass="pitch-class"}(i||(i={}));const l="#6b6b7b",d=[l],h=["#dd1122",l],s=["#E6194B","#F58231","#FFE119","#3CB44B","#4363D8","#911DB4","#F032E6"],c=["#ED1C24","#F1592A","#F8981E","#FCB040","#FFF200","#8CC63F","#056839","#13A89E","#A898C8","#662D91","#92278F","#C2305E"],_=new Map([[i.Monochrome,{presetId:i.Monochrome,name:"Monochrome",defaultConfig:d,fn:function(e,t,a){return void 0===a&&(a=d),e?a[0]:void 0}}],[i.HighlightRoot,{presetId:i.HighlightRoot,name:"Highlight Root",defaultConfig:h,fn:function(e,t,a){return void 0===a&&(a=h),t?0===(0,r.YF)(t)?a[0]:a[1]:void 0}}],[i.Degree,{presetId:i.Degree,name:"Interval Degree",defaultConfig:s,fn:function(e,t,a){return void 0===a&&(a=s),t?a[(0,r.YF)(t)||0]:void 0}}],[i.PitchClass,{presetId:i.PitchClass,name:"Pitch Class",defaultConfig:c,fn:function(e,t,a){return void 0===a&&(a=c),e?a[(0,o.wE)(e)||0]:void 0}}]]),p=n.Z.mapToArray(_)},2624:function(e,t,a){a.d(t,{I3:function(){return s},h5:function(){return h}});var o=a(5785),r=a(2750),n=a(1753),i=a(930),l=a(9531),d=a(2643);[].concat((0,o.Z)(d.Qo),(0,o.Z)(r.Jb));const h=[{id:n.uZ.Chord,name:"Chords",value:n.uZ.Chord,data:r.Jb},{id:n.uZ.Scale,name:"Scales",value:n.uZ.Scale,data:d.Qo}],s=(e,t)=>{switch(e){case n.uZ.Note:return l.nq.get(t);case n.uZ.Interval:return i.if.get(t);case n.uZ.Chord:return r.uV.get(t);case n.uZ.Scale:return d.f2.get(t)}}},4733:function(e,t,a){a.d(t,{Dz:function(){return d},jt:function(){return h}});var o=a(8622),r=a(2750),n=a(6239),i=a(5306),l=a(9531);const d=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],h=(Math.pow(.5,1/12),{fretRange:[1,12],showFretDots:!0,showFretNumbers:!0,colorSchemeId:o.N5.HighlightRoot,voicingId:i.Gz.None,tuningId:n.yE.Standard,podListPreset:r.Jb[0],rootNotePreset:l.WA[0]})},6239:function(e,t,a){a.d(t,{$Z:function(){return h},P1:function(){return s},yE:function(){return i}});var o=a(9531),r=a(9089),n=a(572);let i;!function(e){e.Standard="standard",e.StandardSeven="standard-seven",e.StandardBass="standard-bass",e.Flat="flat",e.DoubleFlat="double-flat",e.DropD="drop-d",e.DADGAD="dadgad",e.Banjo="banjo",e.Violin="violin",e.OpenA="open-a",e.OpenB="open-b",e.OpenC="open-c",e.OpenD="open-d",e.OpenE="open-e",e.OpenF="open-f",e.OpenG="open-g"}(i||(i={}));const l=(e,t,a)=>({presetId:e,name:t,value:a}),d=(e,t)=>(0,r.AJ)(e,t)[0],h=new Map([[i.Standard,l(i.Standard,"Standard Guitar",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.E,3)])],[i.Flat,l(i.Flat,"Flat Gtr",[d(o.iw.Eb,5),d(o.iw.Bb,4),d(o.iw.Gb,4),d(o.iw.Db,4),d(o.iw.Ab,3),d(o.iw.Eb,3)])],[i.DoubleFlat,l(i.DoubleFlat,"Double Flat Gtr",[d(o.iw.D,5),d(o.iw.A,4),d(o.iw.F,4),d(o.iw.C,4),d(o.iw.G,3),d(o.iw.D,3)])],[i.StandardSeven,l(i.StandardSeven,"Standard 7-String Gtr",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.E,3),d(o.iw.B,3)])],[i.StandardBass,l(i.StandardBass,"Standard Bass",[d(o.iw.G,3),d(o.iw.D,3),d(o.iw.A,2),d(o.iw.E,2)])],[i.DropD,l(i.DropD,"Drop D Gtr",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.D,3)])],[i.DADGAD,l(i.DADGAD,"DADGAD",[d(o.iw.D,5),d(o.iw.A,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.D,3)])],[i.Violin,l(i.Violin,"Violin",[d(o.iw.E,5),d(o.iw.A,4),d(o.iw.D,4),d(o.iw.G,4)])],[i.OpenA,l(i.OpenA,"Open A",[d(o.iw.E,5),d(o.iw.A,4),d(o.iw.E,4),d(o.iw.Cs,4),d(o.iw.A,3),d(o.iw.E,3)])],[i.OpenB,l(i.OpenB,"Open B",[d(o.iw.Ds,5),d(o.iw.B,4),d(o.iw.Fs,4),d(o.iw.B,4),d(o.iw.Fs,3),d(o.iw.B,3)])],[i.OpenC,l(i.OpenC,"Open C",[d(o.iw.E,5),d(o.iw.C,4),d(o.iw.G,4),d(o.iw.C,4),d(o.iw.G,3),d(o.iw.C,3)])],[i.OpenD,l(i.OpenD,"Open D",[d(o.iw.D,5),d(o.iw.A,4),d(o.iw.Fs,4),d(o.iw.D,4),d(o.iw.A,3),d(o.iw.D,3)])],[i.OpenE,l(i.OpenE,"Open E",[d(o.iw.E,5),d(o.iw.B,4),d(o.iw.Gs,4),d(o.iw.E,4),d(o.iw.B,3),d(o.iw.E,3)])],[i.OpenF,l(i.OpenF,"Open F",[d(o.iw.F,5),d(o.iw.C,4),d(o.iw.F,4),d(o.iw.C,4),d(o.iw.A,3),d(o.iw.F,3)])],[i.OpenG,l(i.OpenG,"Open G",[d(o.iw.D,5),d(o.iw.B,4),d(o.iw.G,4),d(o.iw.D,4),d(o.iw.G,3),d(o.iw.D,3)])]]),s=n.Z.mapToArray(h)},5306:function(e,t,a){a.d(t,{Gz:function(){return n},ew:function(){return l},rU:function(){return h}});var o=a(5785),r=a(572);let n;!function(e){e.None="None",e.Chord_Triad_CShape_1="Chord_Triad_CShape_1",e.Chord_Triad_AShape_1="Chord_Triad_AShape_1",e.Chord_Triad_GShape_1="Chord_Triad_GShape_1",e.Chord_Triad_EShape_1="Chord_Triad_EShape_1",e.Chord_Triad_DShape_1="Chord_Triad_DShape_1",e.Chord_Sixth_CShape_1="Chord_Sixth_CShape_1",e.Chord_Sixth_AShape_1="Chord_Sixth_AShape_1",e.Chord_Sixth_GShape_1="Chord_Sixth_GShape_1",e.Chord_Sixth_EShape_1="Chord_Sixth_EShape_1",e.Chord_Sixth_DShape_1="Chord_Sixth_DShape_1",e.Chord_Seventh_CShape_1="Chord_Seventh_CShape_1",e.Chord_Seventh_AShape_1="Chord_Seventh_AShape_1",e.Chord_Seventh_GShape_1="Chord_Seventh_GShape_1",e.Chord_Seventh_EShape_1="Chord_Seventh_EShape_1",e.Chord_Seventh_DShape_1="Chord_Seventh_DShape_1",e.Chord_Shell_E_37="Chord_Shell_E_37",e.Chord_Shell_E_73="Chord_Shell_E_73",e.Chord_Shell_A_37="Chord_Shell_A_37",e.Chord_Shell_A_73="Chord_Shell_A_73",e.Chord_Shell_D_37="Chord_Shell_D_37",e.Chord_Shell_D_73="Chord_Shell_D_73",e.Scale_DoubleOctave_CShape_1="Scale_DoubleOctave_CShape_1",e.Scale_DoubleOctave_CShape_2="Scale_DoubleOctave_CShape_2",e.Scale_DoubleOctave_AShape_1="Scale_DoubleOctave_AShape_1",e.Scale_DoubleOctave_GShape_1="Scale_DoubleOctave_GShape_1",e.Scale_DoubleOctave_EShape_1="Scale_DoubleOctave_EShape_1",e.Scale_DoubleOctave_EShape_2="Scale_DoubleOctave_EShape_2",e.Scale_DoubleOctave_DShape_1="Scale_DoubleOctave_DShape_1"}(n||(n={}));const i=(e,t,a)=>({presetId:e,name:t,value:a}),l=new Map([[n.None,i(n.None,"None",[])],[n.Chord_Triad_CShape_1,i(n.Chord_Triad_CShape_1,"C Shape Triad",[3,1,5,3,1,void 0])],[n.Chord_Triad_AShape_1,i(n.Chord_Triad_AShape_1,"A Shape Triad",[5,3,1,5,1,void 0])],[n.Chord_Triad_GShape_1,i(n.Chord_Triad_GShape_1,"G Shape Triad",[1,5,1,5,3,1])],[n.Chord_Triad_EShape_1,i(n.Chord_Triad_EShape_1,"E Shape Triad",[1,5,3,1,5,1])],[n.Chord_Triad_DShape_1,i(n.Chord_Triad_DShape_1,"D Shape Triad",[3,1,5,1,void 0,void 0])],[n.Chord_Sixth_CShape_1,i(n.Chord_Sixth_CShape_1,"C Shape 6th Chord",[3,6,5,3,1,void 0])],[n.Chord_Sixth_AShape_1,i(n.Chord_Sixth_AShape_1,"A Shape 6th Chord",[5,3,6,5,1,void 0])],[n.Chord_Sixth_GShape_1,i(n.Chord_Sixth_GShape_1,"G Shape 6th Chord",[6,5,1,5,3,1])],[n.Chord_Sixth_EShape_1,i(n.Chord_Sixth_EShape_1,"E Shape 6th Chord",[1,5,3,6,5,1])],[n.Chord_Sixth_DShape_1,i(n.Chord_Sixth_DShape_1,"D Shape 6th Chord",[3,6,5,1,void 0,void 0])],[n.Chord_Seventh_CShape_1,i(n.Chord_Seventh_CShape_1,"C Shape 7th Chord",[3,7,5,3,1,void 0])],[n.Chord_Seventh_AShape_1,i(n.Chord_Seventh_AShape_1,"A Shape 7th Chord",[5,3,7,5,1,void 0])],[n.Chord_Seventh_GShape_1,i(n.Chord_Seventh_GShape_1,"G Shape 7th Chord",[7,5,1,5,3,1])],[n.Chord_Seventh_EShape_1,i(n.Chord_Seventh_EShape_1,"E Shape 7th Chord",[1,5,3,7,5,1])],[n.Chord_Seventh_DShape_1,i(n.Chord_Seventh_DShape_1,"D Shape 7th Chord",[3,7,5,1,void 0,void 0])],[n.Chord_Shell_E_37,i(n.Chord_Shell_E_37,"Shell E 3-7",[void 0,void 0,void 0,7,3,1])],[n.Chord_Shell_E_73,i(n.Chord_Shell_E_73,"Shell E 7-3",[void 0,void 0,3,7,void 0,1])],[n.Chord_Shell_A_37,i(n.Chord_Shell_A_37,"Shell A 3-7",[void 0,void 0,7,3,1,void 0])],[n.Chord_Shell_A_73,i(n.Chord_Shell_A_73,"Shell A 7-3",[void 0,3,7,void 0,1,void 0])],[n.Chord_Shell_D_37,i(n.Chord_Shell_D_37,"Shell D 3-7",[void 0,7,3,1,void 0,void 0])],[n.Chord_Shell_D_73,i(n.Chord_Shell_D_73,"Shell D 7-3",[3,7,void 0,1,void 0,void 0])],[n.Scale_DoubleOctave_EShape_1,i(n.Scale_DoubleOctave_EShape_1,"E Shape Scale (Locrian)",[[1,2,3],[6,7],[3,4,5],[7,1,2],[4,5,6],[1,2,3]])],[n.Scale_DoubleOctave_EShape_2,i(n.Scale_DoubleOctave_EShape_2,"E Shape Scale (Ionian)",[[7,1,2],[5,6],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[n.Scale_DoubleOctave_DShape_1,i(n.Scale_DoubleOctave_DShape_1,"D Shape Scale (Dorian)",[[1,2,3],[5,6,7],[2,3,4],[6,7,1],[4,5],[1,2,3]])],[n.Scale_DoubleOctave_CShape_1,i(n.Scale_DoubleOctave_CShape_1,"C Shape Scale (Phrygian)",[[1,2,3],[5,6,7],[3,4],[7,1,2],[4,5,6],[1,2,3]])],[n.Scale_DoubleOctave_CShape_2,i(n.Scale_DoubleOctave_CShape_2,"C Shape Scale (Lydian)",[[7,1,2],[4,5,6],[2,3],[6,7,1],[3,4,5],[1,2]])],[n.Scale_DoubleOctave_AShape_1,i(n.Scale_DoubleOctave_AShape_1,"A Shape Scale (Mixolydian)",[[1,2],[5,6,7],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[n.Scale_DoubleOctave_GShape_1,i(n.Scale_DoubleOctave_GShape_1,"G Shape Scale (Aeolian)",[[1,2,3],[5,6,7],[2,3,4],[7,1],[4,5,6],[1,2,3]])]]),d=r.Z.mapToArray(l),h=[{id:n.None,name:"---",value:void 0}].concat((0,o.Z)(d))}}]);
//# sourceMappingURL=component---src-app-components-pages-browse-pod-list-page-tsx-4b95145b961c879e72ef.js.map