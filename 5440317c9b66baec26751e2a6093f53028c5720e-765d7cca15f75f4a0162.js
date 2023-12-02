"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[493],{598:function(e,o,t){t.d(o,{ZP:function(){return s}});var a=t(7294),r=t(8804),i=t(8622),h=t(4733),n=t(3794),_=t(6239),d=t(5306);const l=e=>{const{stringIndex:o,fretIndex:t,tuningValue:a,podListPreset:r,rootNotePreset:i,voicingValue:h,colorSchemeFn:_}=e,d=a[o]+t,l=i.pod,S=r.pods,c=(0,n.qB)(l,S),[p,u]=(0,n.X1)(S,c,d);if(!u)return{};return{color:_(u,p)}},S=e=>{if(0===e)return"";const o=e%12;return 0===o?"• •":h.Dz[o]?"•":""};var c=t(2770);const p=r.default.div.withConfig({displayName:"Fretboard__StyledFretTable",componentId:"sc-vfftb6-0"})([""]),u=r.default.div.withConfig({displayName:"Fretboard__StyledFretFlag",componentId:"sc-vfftb6-1"})(["height:16px;width:16px;background:",";opacity:",";border-radius:100%;z-index:1;"],(e=>e.$color||"transparent"),(e=>e.$opacity||1)),C=(0,r.css)(["width:100%;border-collapse:collapse;td,th{min-width:18px;text-align:center;}tbody td{background-color:#e8dbb8;border-right:1px solid grey;&:first-child{border-left:1px solid grey;}.fret-content{min-height:32px;display:flex;align-items:center;justify-content:center;position:relative;}.fret-string{height:1px;background:#bbb;width:100%;position:absolute;margin:auto 0;}}tbody tr{&:first-child{border-top:1px solid grey;}&:last-child{border-bottom:1px solid grey;}}"]);var s=e=>{const o=(e=>{const o={...h.jt,...e},{showFretDots:t,showFretNumbers:a,fretRange:r,tuningId:n,colorSchemeId:c,voicingId:p,podListPreset:u,rootNotePreset:C}=o,[s,v]=r,D=_.$Z.get(n).value,w=d.ew.get(p).value,b=i.dB.get(c).fn,f=v-s+1,g=D.length,E=[];if(a)for(let i=0;i<f;i++)E.push(s+i);const A=[];if(t)for(let i=0;i<f;i++)A.push(S(s+i));const O=[];for(let i=0;i<g;i++){const e=[];for(let o=s;o<=v;o++)e.push(l({stringIndex:i,fretIndex:o,tuningValue:D,podListPreset:u,rootNotePreset:C,colorSchemeFn:b,voicingValue:w}));O.push(e)}return{fretNums:E,fretDots:A,strings:O}})(e),{fretNums:t,fretDots:r,strings:n}=o,s=[];for(let i=0;i<n.length;i++){const e=[];for(let o=0;o<n[i].length;o++){const{color:t,opacity:r}=n[i][o];e.push({content:a.createElement("div",{className:"fret-content"},a.createElement("div",{className:"fret-string"}),a.createElement(u,{$color:t,$opacity:r}))})}s.push({cols:e})}return a.createElement(p,null,a.createElement(c.i,{thead:t.length?[{cols:t}]:void 0,tfoot:r.length?[{cols:r}]:void 0,tbody:s,styles:C}))}},8585:function(e,o,t){var a=t(7294);const r=t(8804).default.button.withConfig({displayName:"ButtonInput__StyledButton",componentId:"sc-1qhzyuq-0"})(["cursor:pointer;border:none;border-radius:4px;font-size:110%;padding:8px 16px;color:",";background-color:",";&:hover{background-color:",";}&.link{padding:4px 8px;background-color:transparent;color:",";&:hover{background-color:rgba(0,0,0,0.1);}}"],(e=>{var o;let{theme:t}=e;return null==t||null===(o=t.text)||void 0===o?void 0:o.inverted}),(e=>{var o,t;let{$isActive:a,theme:r}=e;return a?null==r||null===(o=r.action)||void 0===o?void 0:o.active:null==r||null===(t=r.action)||void 0===t?void 0:t.interactive}),(e=>{var o,t;let{$isActive:a,theme:r}=e;return a?null==r||null===(o=r.action)||void 0===o?void 0:o.active:null==r||null===(t=r.action)||void 0===t?void 0:t.active}),(e=>{var o;let{theme:t}=e;return null==t||null===(o=t.action)||void 0===o?void 0:o.interactive}));o.Z=e=>{const{disabled:o,onClick:t,children:i,isActive:h,hoverable:n,className:_,isLink:d}=e,l=o||!1,S=t||(()=>null);return a.createElement(r,{type:"button",disabled:l,onClick:S,$isActive:h,className:_+" "+(d?"link":"")},i)}},8622:function(e,o,t){t.d(o,{N5:function(){return h},Ry:function(){return p},dB:function(){return c}});var a=t(9089),r=t(3794),i=t(572);let h;!function(e){e.None="none",e.Monochrome="monochrome",e.HighlightRoot="highlight-root",e.Degree="degree",e.PitchClass="pitch-class"}(h||(h={}));const n="#6b6b7b",_=[n],d=["#dd1122",n],l=["#E6194B","#F58231","#FFE119","#3CB44B","#4363D8","#911DB4","#F032E6"],S=["#ED1C24","#F1592A","#F8981E","#FCB040","#FFF200","#8CC63F","#056839","#13A89E","#A898C8","#662D91","#92278F","#C2305E"],c=new Map([[h.Monochrome,{presetId:h.Monochrome,name:"Monochrome",defaultConfig:_,fn:function(e,o,t){return void 0===t&&(t=_),e?t[0]:void 0}}],[h.HighlightRoot,{presetId:h.HighlightRoot,name:"Highlight Root",defaultConfig:d,fn:function(e,o,t){return void 0===t&&(t=d),o?0===(0,r.YF)(o)?t[0]:t[1]:void 0}}],[h.Degree,{presetId:h.Degree,name:"Interval Degree",defaultConfig:l,fn:function(e,o,t){return void 0===t&&(t=l),o?t[(0,r.YF)(o)||0]:void 0}}],[h.PitchClass,{presetId:h.PitchClass,name:"Pitch Class",defaultConfig:S,fn:function(e,o,t){return void 0===t&&(t=S),e?t[(0,a.wE)(e)||0]:void 0}}]]),p=i.Z.mapToArray(c)},2624:function(e,o,t){t.d(o,{I3:function(){return l},h5:function(){return d}});var a=t(5785),r=t(2750),i=t(1753),h=t(930),n=t(9531),_=t(2643);[].concat((0,a.Z)(_.Qo),(0,a.Z)(r.Jb));const d=[{id:i.uZ.Chord,name:"Chords",value:i.uZ.Chord,data:r.Jb},{id:i.uZ.Scale,name:"Scales",value:i.uZ.Scale,data:_.Qo}],l=(e,o)=>{switch(e){case i.uZ.Note:return n.nq.get(o);case i.uZ.Interval:return h.if.get(o);case i.uZ.Chord:return r.uV.get(o);case i.uZ.Scale:return _.f2.get(o)}}},4733:function(e,o,t){t.d(o,{Dz:function(){return _},jt:function(){return d}});var a=t(8622),r=t(2750),i=t(6239),h=t(5306),n=t(9531);const _=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],d=(Math.pow(.5,1/12),{fretRange:[1,12],showFretDots:!0,showFretNumbers:!0,colorSchemeId:a.N5.HighlightRoot,voicingId:h.Gz.None,tuningId:i.yE.Standard,podListPreset:r.Jb[0],rootNotePreset:n.WA[0]})},6239:function(e,o,t){t.d(o,{$Z:function(){return d},P1:function(){return l},yE:function(){return h}});var a=t(9531),r=t(9089),i=t(572);let h;!function(e){e.Standard="standard",e.StandardSeven="standard-seven",e.StandardBass="standard-bass",e.Flat="flat",e.DoubleFlat="double-flat",e.DropD="drop-d",e.DADGAD="dadgad",e.Banjo="banjo",e.Violin="violin",e.OpenA="open-a",e.OpenB="open-b",e.OpenC="open-c",e.OpenD="open-d",e.OpenE="open-e",e.OpenF="open-f",e.OpenG="open-g"}(h||(h={}));const n=(e,o,t)=>({presetId:e,name:o,value:t}),_=(e,o)=>(0,r.AJ)(e,o)[0],d=new Map([[h.Standard,n(h.Standard,"Standard Guitar",[_(a.iw.E,5),_(a.iw.B,4),_(a.iw.G,4),_(a.iw.D,4),_(a.iw.A,3),_(a.iw.E,3)])],[h.Flat,n(h.Flat,"Flat Gtr",[_(a.iw.Eb,5),_(a.iw.Bb,4),_(a.iw.Gb,4),_(a.iw.Db,4),_(a.iw.Ab,3),_(a.iw.Eb,3)])],[h.DoubleFlat,n(h.DoubleFlat,"Double Flat Gtr",[_(a.iw.D,5),_(a.iw.A,4),_(a.iw.F,4),_(a.iw.C,4),_(a.iw.G,3),_(a.iw.D,3)])],[h.StandardSeven,n(h.StandardSeven,"Standard 7-String Gtr",[_(a.iw.E,5),_(a.iw.B,4),_(a.iw.G,4),_(a.iw.D,4),_(a.iw.A,3),_(a.iw.E,3),_(a.iw.B,3)])],[h.StandardBass,n(h.StandardBass,"Standard Bass",[_(a.iw.G,3),_(a.iw.D,3),_(a.iw.A,2),_(a.iw.E,2)])],[h.DropD,n(h.DropD,"Drop D Gtr",[_(a.iw.E,5),_(a.iw.B,4),_(a.iw.G,4),_(a.iw.D,4),_(a.iw.A,3),_(a.iw.D,3)])],[h.DADGAD,n(h.DADGAD,"DADGAD",[_(a.iw.D,5),_(a.iw.A,4),_(a.iw.G,4),_(a.iw.D,4),_(a.iw.A,3),_(a.iw.D,3)])],[h.Violin,n(h.Violin,"Violin",[_(a.iw.E,5),_(a.iw.A,4),_(a.iw.D,4),_(a.iw.G,4)])],[h.OpenA,n(h.OpenA,"Open A",[_(a.iw.E,5),_(a.iw.A,4),_(a.iw.E,4),_(a.iw.Cs,4),_(a.iw.A,3),_(a.iw.E,3)])],[h.OpenB,n(h.OpenB,"Open B",[_(a.iw.Ds,5),_(a.iw.B,4),_(a.iw.Fs,4),_(a.iw.B,4),_(a.iw.Fs,3),_(a.iw.B,3)])],[h.OpenC,n(h.OpenC,"Open C",[_(a.iw.E,5),_(a.iw.C,4),_(a.iw.G,4),_(a.iw.C,4),_(a.iw.G,3),_(a.iw.C,3)])],[h.OpenD,n(h.OpenD,"Open D",[_(a.iw.D,5),_(a.iw.A,4),_(a.iw.Fs,4),_(a.iw.D,4),_(a.iw.A,3),_(a.iw.D,3)])],[h.OpenE,n(h.OpenE,"Open E",[_(a.iw.E,5),_(a.iw.B,4),_(a.iw.Gs,4),_(a.iw.E,4),_(a.iw.B,3),_(a.iw.E,3)])],[h.OpenF,n(h.OpenF,"Open F",[_(a.iw.F,5),_(a.iw.C,4),_(a.iw.F,4),_(a.iw.C,4),_(a.iw.A,3),_(a.iw.F,3)])],[h.OpenG,n(h.OpenG,"Open G",[_(a.iw.D,5),_(a.iw.B,4),_(a.iw.G,4),_(a.iw.D,4),_(a.iw.G,3),_(a.iw.D,3)])]]),l=i.Z.mapToArray(d)},5306:function(e,o,t){t.d(o,{Gz:function(){return i},ew:function(){return n},rU:function(){return d}});var a=t(5785),r=t(572);let i;!function(e){e.None="None",e.Chord_Triad_CShape_1="Chord_Triad_CShape_1",e.Chord_Triad_AShape_1="Chord_Triad_AShape_1",e.Chord_Triad_GShape_1="Chord_Triad_GShape_1",e.Chord_Triad_EShape_1="Chord_Triad_EShape_1",e.Chord_Triad_DShape_1="Chord_Triad_DShape_1",e.Chord_Sixth_CShape_1="Chord_Sixth_CShape_1",e.Chord_Sixth_AShape_1="Chord_Sixth_AShape_1",e.Chord_Sixth_GShape_1="Chord_Sixth_GShape_1",e.Chord_Sixth_EShape_1="Chord_Sixth_EShape_1",e.Chord_Sixth_DShape_1="Chord_Sixth_DShape_1",e.Chord_Seventh_CShape_1="Chord_Seventh_CShape_1",e.Chord_Seventh_AShape_1="Chord_Seventh_AShape_1",e.Chord_Seventh_GShape_1="Chord_Seventh_GShape_1",e.Chord_Seventh_EShape_1="Chord_Seventh_EShape_1",e.Chord_Seventh_DShape_1="Chord_Seventh_DShape_1",e.Chord_Shell_E_37="Chord_Shell_E_37",e.Chord_Shell_E_73="Chord_Shell_E_73",e.Chord_Shell_A_37="Chord_Shell_A_37",e.Chord_Shell_A_73="Chord_Shell_A_73",e.Chord_Shell_D_37="Chord_Shell_D_37",e.Chord_Shell_D_73="Chord_Shell_D_73",e.Scale_DoubleOctave_CShape_1="Scale_DoubleOctave_CShape_1",e.Scale_DoubleOctave_CShape_2="Scale_DoubleOctave_CShape_2",e.Scale_DoubleOctave_AShape_1="Scale_DoubleOctave_AShape_1",e.Scale_DoubleOctave_GShape_1="Scale_DoubleOctave_GShape_1",e.Scale_DoubleOctave_EShape_1="Scale_DoubleOctave_EShape_1",e.Scale_DoubleOctave_EShape_2="Scale_DoubleOctave_EShape_2",e.Scale_DoubleOctave_DShape_1="Scale_DoubleOctave_DShape_1"}(i||(i={}));const h=(e,o,t)=>({presetId:e,name:o,value:t}),n=new Map([[i.None,h(i.None,"None",[])],[i.Chord_Triad_CShape_1,h(i.Chord_Triad_CShape_1,"C Shape Triad",[3,1,5,3,1,void 0])],[i.Chord_Triad_AShape_1,h(i.Chord_Triad_AShape_1,"A Shape Triad",[5,3,1,5,1,void 0])],[i.Chord_Triad_GShape_1,h(i.Chord_Triad_GShape_1,"G Shape Triad",[1,5,1,5,3,1])],[i.Chord_Triad_EShape_1,h(i.Chord_Triad_EShape_1,"E Shape Triad",[1,5,3,1,5,1])],[i.Chord_Triad_DShape_1,h(i.Chord_Triad_DShape_1,"D Shape Triad",[3,1,5,1,void 0,void 0])],[i.Chord_Sixth_CShape_1,h(i.Chord_Sixth_CShape_1,"C Shape 6th Chord",[3,6,5,3,1,void 0])],[i.Chord_Sixth_AShape_1,h(i.Chord_Sixth_AShape_1,"A Shape 6th Chord",[5,3,6,5,1,void 0])],[i.Chord_Sixth_GShape_1,h(i.Chord_Sixth_GShape_1,"G Shape 6th Chord",[6,5,1,5,3,1])],[i.Chord_Sixth_EShape_1,h(i.Chord_Sixth_EShape_1,"E Shape 6th Chord",[1,5,3,6,5,1])],[i.Chord_Sixth_DShape_1,h(i.Chord_Sixth_DShape_1,"D Shape 6th Chord",[3,6,5,1,void 0,void 0])],[i.Chord_Seventh_CShape_1,h(i.Chord_Seventh_CShape_1,"C Shape 7th Chord",[3,7,5,3,1,void 0])],[i.Chord_Seventh_AShape_1,h(i.Chord_Seventh_AShape_1,"A Shape 7th Chord",[5,3,7,5,1,void 0])],[i.Chord_Seventh_GShape_1,h(i.Chord_Seventh_GShape_1,"G Shape 7th Chord",[7,5,1,5,3,1])],[i.Chord_Seventh_EShape_1,h(i.Chord_Seventh_EShape_1,"E Shape 7th Chord",[1,5,3,7,5,1])],[i.Chord_Seventh_DShape_1,h(i.Chord_Seventh_DShape_1,"D Shape 7th Chord",[3,7,5,1,void 0,void 0])],[i.Chord_Shell_E_37,h(i.Chord_Shell_E_37,"Shell E 3-7",[void 0,void 0,void 0,7,3,1])],[i.Chord_Shell_E_73,h(i.Chord_Shell_E_73,"Shell E 7-3",[void 0,void 0,3,7,void 0,1])],[i.Chord_Shell_A_37,h(i.Chord_Shell_A_37,"Shell A 3-7",[void 0,void 0,7,3,1,void 0])],[i.Chord_Shell_A_73,h(i.Chord_Shell_A_73,"Shell A 7-3",[void 0,3,7,void 0,1,void 0])],[i.Chord_Shell_D_37,h(i.Chord_Shell_D_37,"Shell D 3-7",[void 0,7,3,1,void 0,void 0])],[i.Chord_Shell_D_73,h(i.Chord_Shell_D_73,"Shell D 7-3",[3,7,void 0,1,void 0,void 0])],[i.Scale_DoubleOctave_EShape_1,h(i.Scale_DoubleOctave_EShape_1,"E Shape Scale (Locrian)",[[1,2,3],[6,7],[3,4,5],[7,1,2],[4,5,6],[1,2,3]])],[i.Scale_DoubleOctave_EShape_2,h(i.Scale_DoubleOctave_EShape_2,"E Shape Scale (Ionian)",[[7,1,2],[5,6],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[i.Scale_DoubleOctave_DShape_1,h(i.Scale_DoubleOctave_DShape_1,"D Shape Scale (Dorian)",[[1,2,3],[5,6,7],[2,3,4],[6,7,1],[4,5],[1,2,3]])],[i.Scale_DoubleOctave_CShape_1,h(i.Scale_DoubleOctave_CShape_1,"C Shape Scale (Phrygian)",[[1,2,3],[5,6,7],[3,4],[7,1,2],[4,5,6],[1,2,3]])],[i.Scale_DoubleOctave_CShape_2,h(i.Scale_DoubleOctave_CShape_2,"C Shape Scale (Lydian)",[[7,1,2],[4,5,6],[2,3],[6,7,1],[3,4,5],[1,2]])],[i.Scale_DoubleOctave_AShape_1,h(i.Scale_DoubleOctave_AShape_1,"A Shape Scale (Mixolydian)",[[1,2],[5,6,7],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[i.Scale_DoubleOctave_GShape_1,h(i.Scale_DoubleOctave_GShape_1,"G Shape Scale (Aeolian)",[[1,2,3],[5,6,7],[2,3,4],[7,1],[4,5,6],[1,2,3]])]]),_=r.Z.mapToArray(n),d=[{id:i.None,name:"---",value:void 0}].concat((0,a.Z)(_))}}]);
//# sourceMappingURL=5440317c9b66baec26751e2a6093f53028c5720e-765d7cca15f75f4a0162.js.map