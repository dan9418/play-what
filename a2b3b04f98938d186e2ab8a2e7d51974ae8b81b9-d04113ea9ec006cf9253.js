"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[790],{3490:function(e,t,r){var a=r(7294),n=r(9).default.select.withConfig({displayName:"DropdownInput__StyledDropdownInput",componentId:"sc-1wxzw5b-0"})(["font-size:110%;min-width:128px;padding:4px 8px;cursor:pointer;border-radius:4px;option{cursor:pointer;}"]);t.Z=function(e){var t=e.value,r=e.setValue,i=e.options,o=e.idProperty,u=e.displayProperty;return a.createElement(n,{className:"dropdown-input",onChange:function(e){return r(i[e.target.selectedIndex],e.target.selectedIndex)},value:t?t[o||"id"]:""},(i||[]).map((function(e,t){return a.createElement("option",{key:t,value:e[o||"id"]},u?e[u]:e.name)})))}},7146:function(e,t,r){r.d(t,{v:function(){return a}});var a=r(9).default.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-176nxv8-0"})(["width:100%;max-width:1024px;min-height:calc(100vh - 96px);margin:auto;padding:16px;"])},8184:function(e,t,r){var a=r(7294),n=r(9).default.div.withConfig({displayName:"PageTitle__StyledPageTitle",componentId:"sc-391fea-0"})(["width:100%;.header{border-bottom:1px solid ",";padding-bottom:16px;width:100%;margin:auto;> h1{width:100%;font-size:300%;text-align:left;color:",";;}> h2{margin-top:8px;width:100%;text-align:left;color:",";;font-size:100%;}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.text.secondary}));t.Z=function(e){var t=e.title,r=e.subtitle,i=e.children;return a.createElement(n,null,a.createElement("div",{className:"header"},a.createElement("h1",null,t),a.createElement("h2",null,r)),i)}},9553:function(e,t,r){r.d(t,{r:function(){return u}});var a=r(5245),n=r(7294),i=r(9),o=["title","action","children"],u=i.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-dwwfty-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;}"],(function(e){return e.theme.surface.card}));t.Z=function(e){var t=e.title,r=e.action,i=e.children,c=(0,a.Z)(e,o);return n.createElement(u,c,t&&n.createElement("div",{className:"header"},n.createElement("h2",null,t),r),i)}},8801:function(e,t,r){r.d(t,{H:function(){return u}});var a=r(5245),n=r(7294),i=r(9),o=["label","children","y"],u=i.default.div.withConfig({displayName:"InputRow__StyledInputRow",componentId:"sc-hx4keg-0"})(["display:flex;align-items:flex-start;flex-direction:column;"," label{color:",";font-weight:bold;margin:4px;}"],(function(e){return e.$y?"":"\n        @media(min-width: 512px) {\n            align-items: center;\n            flex-direction: row;\n            justify-content: space-between;\n            margin-bottom: 8px;\n        }\n    "}),(function(e){return e.theme.dark3}));t.Z=function(e){var t=e.label,r=e.children,i=e.y,c=void 0!==i&&i,h=(0,a.Z)(e,o);return n.createElement(u,Object.assign({$y:c},h),n.createElement("label",null,t),n.createElement("div",{className:"octave"},r))}},8295:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(4578),n=r(7915),i=r(8891),o=r(7656),u=r(4160),c=r(6343),h=function(e){function t(t,r){return void 0===r&&(r=void 0),e.call(this,o.uV,t,r)||this}return(0,a.Z)(t,e),t.prototype.getNumeral=function(e){return function(e,t){switch(e){case 1:switch(t){case i.X.MajTriad:case i.X.Maj7:return"I";case i.X.MinTriad:case i.X.Min7:return"i";case i.X.Dom7:return"I⁷";case i.X.HalfDim7:return"i ̽";case i.X.AugTriad:return"I+";case i.X.DimTriad:return"i°"}case 2:switch(t){case i.X.MajTriad:case i.X.Maj7:return"II";case i.X.MinTriad:case i.X.Min7:return"ii";case i.X.Dom7:return"II⁷";case i.X.HalfDim7:return"ii ̽";case i.X.AugTriad:return"II+";case i.X.DimTriad:return"ii°"}case 3:switch(t){case i.X.MajTriad:case i.X.Maj7:return"III";case i.X.MinTriad:case i.X.Min7:return"iiii";case i.X.Dom7:return"III⁷";case i.X.HalfDim7:return"iii ̽";case i.X.AugTriad:return"III+";case i.X.DimTriad:return"iii°"}case 4:switch(t){case i.X.MajTriad:case i.X.Maj7:return"IV";case i.X.MinTriad:case i.X.Min7:return"iv";case i.X.Dom7:return"IV⁷";case i.X.HalfDim7:return"iv ̽";case i.X.AugTriad:return"IV+";case i.X.DimTriad:return"iv°"}case 5:switch(t){case i.X.MajTriad:case i.X.Maj7:return"V";case i.X.MinTriad:case i.X.Min7:return"v";case i.X.Dom7:return"V⁷";case i.X.HalfDim7:return"v ̽";case i.X.AugTriad:return"V+";case i.X.DimTriad:return"v°"}case 6:switch(t){case i.X.MajTriad:case i.X.Maj7:return"VI";case i.X.MinTriad:case i.X.Min7:return"vi";case i.X.Dom7:return"VI⁷";case i.X.HalfDim7:return"vi ̽";case i.X.AugTriad:return"VI+";case i.X.DimTriad:return"vi°"}case 7:switch(t){case i.X.MajTriad:case i.X.Maj7:return"VII";case i.X.MinTriad:case i.X.Min7:return"vii";case i.X.Dom7:return"VII⁷";case i.X.HalfDim7:return"vii ̽";case i.X.AugTriad:return"VII+";case i.X.DimTriad:return"vii°"}}}(e,this.id)},t}(c.Z);h.fromValue=function(e){return n.Z.fromValue(o.Jb,h,e,u.qP,u.Od)}},7416:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(4578),n=(r(2416),r(3069)),i=r(7915),o=r(8891),u=r(7656),c=r(6436),h=r(4160),d=function(e){function t(t){var r;return(r=e.call(this,u.if.get(t))||this).getName=function(){var e=(0,h.td)(r.pod),t=e[0],a=e[1],n=u.g$[a];if(!n)return"?";var i=n[0],c=i,d=n[n.length-1],l=null,s=null;1===n.length?(l=i,s=o.dC.perfect):t<=c.value[0]?(l=c,s=o.dC.min):t>=d.value[0]&&(l=d,s=o.dC.maj);var _=l.value[0]-e[0];if(0===_)return""+s.symbol+(a+1);_>0?s=o.dC.dim:_<0&&(s=o.dC.aug);var p=Math.abs(_);return""+s.symbol.repeat(p)+(a+1)},r.getRatio=function(){var e=r.pod[0],t=n.Z.getFrequency(0);return"1:"+(n.Z.getFrequency(e)/t).toFixed(2)},r}(0,a.Z)(t,e);var r=t.prototype;return r.getColor=function(){return this.equals(new t(o.dT.P1))?"red":"#333"},r.isInSuperset=function(e){return!(e.length<=1)&&(0,h.Cw)(e,[this.pod])},r.getSupersets=function(){var e=this,t=[],r=u.Jb.filter((function(t){return e.isInSuperset(t.value)}));r.length&&t.push({modelName:"Chords",values:r});var a=u.Qo.filter((function(t){return e.isInSuperset(t.value)}));return a.length&&t.push({modelName:"Scales",values:a}),t},t}(c.Z);d.fromValue=function(e){return i.Z.fromValue(u.Ou,d,e,h.pR,h.td)}},6343:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(4578),n=r(7416),i=r(7915),o=r(7656),u=r(9111),c=r(4160),h=function(e){function t(t,r,a){var i;(i=e.call(this)||this).getName=function(){return(i.root?i.root.name+" ":"")+i.name},i.getShortName=function(){return i.name.replace("Major","Maj").replace("Minor","Min").replace("Augmented","Aug").replace("Diminished","Dim").replace("Suspended","Sus").replace("Dominant","Dom").replace("st","").replace("nd","").replace("rd","").replace("th","").replace("Pentatonic","Pent")};var o=t.get(r);if(!o)throw new Error("Unknown presetId: "+r);return i.modelId=o.modelId,i.id=o.id,i.name=o.name,i.tags=o.tags,i.podList=o.value,i.intervals=o.value.map((function(e){return n.Z.fromValue(e)})),a&&a.root&&i.applyRoot(a.root),i}(0,a.Z)(t,e);var r=t.prototype;return r.equals=function(e){return(0,c.qP)(this.podList,e.podList)},r.applyRoot=function(e){var t,r;try{t=(r=this.intervals.map((function(t){return(0,c._l)(t.pod,e.pod)}))).map((function(e){return new u.Z(e)}))}catch(a){throw console.error(a),new Error("Unable to apply root")}return this.root=e,this.notes=t,this.notePods=r,this.name=this.getName(),this},r.getIntervalListString=function(){return this.intervals.map((function(e){return e.getName()})).join(", ")},r.isInSuperset=function(e){return!(e.length<=this.podList.length)&&(0,c.Cw)(e,this.podList)},r.containsSubset=function(e){return!(e.length>=this.podList.length)&&(0,c.Cw)(this.podList,e)},r.getSubchords=function(){var e=this;return o.Jb.filter((function(t){return e.containsSubset(t.value)}))},r.getSuperchords=function(){var e=this;return o.Jb.filter((function(t){return e.isInSuperset(t.value)}))},r.getSubscales=function(){var e=this;return o.Qo.filter((function(t){return e.containsSubset(t.value)}))},r.getSuperscales=function(){var e=this;return o.Qo.filter((function(t){return e.isInSuperset(t.value)}))},r.getPreview=function(){return this.getIntervalListString()},r.tryGetPodPairAtPitch=function(e){var t=(0,c.f6)(this.notePods,e,!1);return null==t?[void 0,void 0]:[this.intervals[t],this.notes[t]]},t}(i.Z)},3659:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(7294),n=r(9),i=n.default.div.withConfig({displayName:"Fretboardstyles__StyledFretboard",componentId:"sc-ucsj4f-0"})(['display:inline-grid;width:100%;background-image:radial-gradient(ellipse,#E8DBB8 0%,#D0B27C 100%);font-size:90%;margin:16px 0;.fret{display:inline-flex;justify-content:center;align-items:center;position:relative;border-right:2px solid darkgrey;}.fret.open{border-right:3px solid grey;background-color:#D0B27C;;}.fret::before{content:"";display:block;height:0;width:0;margin-top:calc(1/2 * 100%);}.fret-string{border-top:1px solid grey;width:100%;}.fret-number{position:absolute;bottom:100%;}.fret-dots{position:absolute;top:95%;font-size:16px;white-space:nowrap;}.fret-number,.fret-dots{color:#888;}.fret-label{position:absolute;width:90%;height:90%;display:flex;justify-content:center;align-items:center;border-radius:100%;}.fret-label:hover{width:100%;height:100%;cursor:pointer;}']),o=r(1439),u=n.default.div.withConfig({displayName:"FretLabel__StyledFretLabel",componentId:"sc-djhycx-0"})(["position:absolute;width:16px;height:16px;display:flex;justify-content:center;align-items:center;border-radius:100%;background-color:",";color:",";cursor:pointer;&:hover{width:24px;height:24px;}"],(function(e){var t=e.$bgColor;return t||"transparent"}),(function(e){var t=e.$fgColor;return t||""})),c=function(e){var t=e.color;e.freq;return a.createElement(u,{$bgColor:t,$fgColor:"white",onClick:null},null)},h=function(e){var t=e.tuning,r=e.stringIndex,n=e.fretIndex,i=e.showFretNumbers,u=e.showFretDots,h=e.getFretLabelProps,d=["fret"];0===n&&d.push("open");var l=r===t.length-1,s=0===r,_=h?h(r,n,t):{};return a.createElement("div",{className:d.join(" ")},a.createElement("div",{className:"fret-number"},i&&s&&n>0&&n),a.createElement("div",{className:"fret-string"}),a.createElement(c,_),a.createElement("div",{className:"fret-dots"},u&&l&&n>0&&(0,o.UQ)(n)))},d=function(e){var t=Object.assign({},o.jt,e),r=t.fretRange,n=r[0],u=r[1]-n+1,c=t.tuning.length,d={gridTemplateColumns:(0,o.Cf)(u).map((function(e){return e+"fr"})).join(" "),gridTemplateRows:"repeat("+c+", 1fr)"};return a.createElement(i,{className:"fretboard",style:d},function(e){for(var t=e.fretRange,r=e.tuning,n=t[0],i=t[1],o=[],u=0;u<r.length;u++)for(var c=n;c<=i;c++)o.push(a.createElement(h,Object.assign({key:"s"+u+"-f"+c,stringIndex:u,fretIndex:c,tuning:r},e)));return o}(t))}},493:function(e,t,r){r.d(t,{yE:function(){return a},$Z:function(){return o},P1:function(){return u}});var a,n=r(3686);!function(e){e.Standard="standard",e.StandardBass="standard-bass",e.DropD="drop-d"}(a||(a={}));var i=function(e,t,r){return{id:e,name:t,value:r}},o=new Map([[a.Standard,i(a.Standard,"Standard",[16,11,7,2,-3,-8])],[a.StandardBass,i(a.StandardBass,"Standard Bass",[7,2,-3,-8])],[a.DropD,i(a.DropD,"Drop D",[16,11,7,2,-3,-10])]]),u=n.Z.mapToArray(o)},1439:function(e,t,r){r.d(t,{jt:function(){return o},Cf:function(){return u},UQ:function(){return c},Aw:function(){return l}});var a=r(493),n=[!0,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1],i=Math.pow(.5,1/12),o={fretRange:[0,12],tuning:a.$Z.get(a.yE.Standard).value,showFretDots:!0,showFretNumbers:!0},u=function(e){for(var t=[],r=1;r<=e;r++)t.push(r<=1?1:t[r-2]*i);return t},c=function(e){var t=e%12;return 0===t?"• •":n[t]?"•":""},h=function(e,t){return e+1===t},d=function(e,t,r,a,n){var i=a[t]+r,o=e.tryGetPodPairAtPitch(i),u=o[0],c=o[1];return c&&function(e,t,r){if(!t)return!0;var a=t.value[r],n=e.getDegree();return Array.isArray(a)?a.some((function(e){return h(n,e)})):"number"==typeof a&&h(n,a)}(u,n,t)?{color:u.getColor(),freq:c.getFrequency()}:{}},l=function(e,t,r){var a;return e&&e.root&&(a=function(r,a,n){return d(e,r,a,n,t)}),Object.assign({},o,{tuning:r?r.value:o.tuning,getFretLabelProps:a})}},8436:function(e,t,r){r.d(t,{Gz:function(){return a},ew:function(){return o},rk:function(){return u}});var a,n=r(3686);!function(e){e.None="None",e.Chord_Triad_CShape_1="Chord_Triad_CShape_1",e.Chord_Triad_AShape_1="Chord_Triad_AShape_1",e.Chord_Triad_GShape_1="Chord_Triad_GShape_1",e.Chord_Triad_EShape_1="Chord_Triad_EShape_1",e.Chord_Triad_DShape_1="Chord_Triad_DShape_1",e.Chord_Sixth_CShape_1="Chord_Sixth_CShape_1",e.Chord_Sixth_AShape_1="Chord_Sixth_AShape_1",e.Chord_Sixth_GShape_1="Chord_Sixth_GShape_1",e.Chord_Sixth_EShape_1="Chord_Sixth_EShape_1",e.Chord_Sixth_DShape_1="Chord_Sixth_DShape_1",e.Chord_Seventh_CShape_1="Chord_Seventh_CShape_1",e.Chord_Seventh_AShape_1="Chord_Seventh_AShape_1",e.Chord_Seventh_GShape_1="Chord_Seventh_GShape_1",e.Chord_Seventh_EShape_1="Chord_Seventh_EShape_1",e.Chord_Seventh_DShape_1="Chord_Seventh_DShape_1",e.Scale_DoubleOctave_CShape_1="Scale_DoubleOctave_CShape_1",e.Scale_DoubleOctave_CShape_2="Scale_DoubleOctave_CShape_2",e.Scale_DoubleOctave_AShape_1="Scale_DoubleOctave_AShape_1",e.Scale_DoubleOctave_GShape_1="Scale_DoubleOctave_GShape_1",e.Scale_DoubleOctave_EShape_1="Scale_DoubleOctave_EShape_1",e.Scale_DoubleOctave_EShape_2="Scale_DoubleOctave_EShape_2",e.Scale_DoubleOctave_DShape_1="Scale_DoubleOctave_DShape_1"}(a||(a={}));var i=function(e,t,r){return{id:e,name:t,value:r}},o=new Map([[a.Chord_Triad_CShape_1,i(a.Chord_Triad_CShape_1,"C Shape Triad",[3,1,5,3,1,null])],[a.Chord_Triad_AShape_1,i(a.Chord_Triad_AShape_1,"A Shape Triad",[5,3,1,5,1,null])],[a.Chord_Triad_GShape_1,i(a.Chord_Triad_GShape_1,"G Shape Triad",[1,5,1,5,3,1])],[a.Chord_Triad_EShape_1,i(a.Chord_Triad_EShape_1,"E Shape Triad",[1,5,3,1,5,1])],[a.Chord_Triad_DShape_1,i(a.Chord_Triad_DShape_1,"D Shape Triad",[3,1,5,1,null,null])],[a.Chord_Sixth_CShape_1,i(a.Chord_Sixth_CShape_1,"C Shape 6th Chord",[3,6,5,3,1,null])],[a.Chord_Sixth_AShape_1,i(a.Chord_Sixth_AShape_1,"A Shape 6th Chord",[5,3,6,5,1,null])],[a.Chord_Sixth_GShape_1,i(a.Chord_Sixth_GShape_1,"G Shape 6th Chord",[6,5,1,5,3,1])],[a.Chord_Sixth_EShape_1,i(a.Chord_Sixth_EShape_1,"E Shape 6th Chord",[1,5,3,6,5,1])],[a.Chord_Sixth_DShape_1,i(a.Chord_Sixth_DShape_1,"D Shape 6th Chord",[3,6,5,1,null,null])],[a.Chord_Seventh_CShape_1,i(a.Chord_Seventh_CShape_1,"C Shape 7th Chord",[3,7,5,3,1,null])],[a.Chord_Seventh_AShape_1,i(a.Chord_Seventh_AShape_1,"A Shape 7th Chord",[5,3,7,5,1,null])],[a.Chord_Seventh_GShape_1,i(a.Chord_Seventh_GShape_1,"G Shape 7th Chord",[7,5,1,5,3,1])],[a.Chord_Seventh_EShape_1,i(a.Chord_Seventh_EShape_1,"E Shape 7th Chord",[1,5,3,7,5,1])],[a.Chord_Seventh_DShape_1,i(a.Chord_Seventh_DShape_1,"D Shape 7th Chord",[3,7,5,1,null,null])],[a.Scale_DoubleOctave_EShape_1,i(a.Scale_DoubleOctave_EShape_1,"E Shape Scale (Locrian)",[[1,2,3],[6,7],[3,4,5],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_EShape_2,i(a.Scale_DoubleOctave_EShape_2,"E Shape Scale (Ionian)",[[7,1,2],[5,6],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_DShape_1,i(a.Scale_DoubleOctave_DShape_1,"D Shape Scale (Dorian)",[[1,2,3],[5,6,7],[2,3,4],[6,7,1],[4,5],[1,2,3]])],[a.Scale_DoubleOctave_CShape_1,i(a.Scale_DoubleOctave_CShape_1,"C Shape Scale (Phrygian)",[[1,2,3],[5,6,7],[3,4],[7,1,2],[4,5,6],[1,2,3]])],[a.Scale_DoubleOctave_CShape_2,i(a.Scale_DoubleOctave_CShape_2,"C Shape Scale (Lydian)",[[7,1,2],[4,5,6],[2,3],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_AShape_1,i(a.Scale_DoubleOctave_AShape_1,"A Shape Scale (Mixolydian)",[[1,2],[5,6,7],[2,3,4],[6,7,1],[3,4,5],[1,2]])],[a.Scale_DoubleOctave_GShape_1,i(a.Scale_DoubleOctave_GShape_1,"G Shape Scale (Aeolian)",[[1,2,3],[5,6,7],[2,3,4],[7,1],[4,5,6],[1,2,3]])]]),u=n.Z.mapToArray(o)}}]);
//# sourceMappingURL=a2b3b04f98938d186e2ab8a2e7d51974ae8b81b9-d04113ea9ec006cf9253.js.map