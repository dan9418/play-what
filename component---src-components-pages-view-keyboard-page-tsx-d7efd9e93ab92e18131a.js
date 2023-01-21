"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[458],{5298:function(e,t,n){var o=n(3366),r=n(7294),l=n(1074),a=n(6291),i=n(9042),c=["value","setValue"],d=l.default.div.withConfig({displayName:"NumericInput__StyledNumbericInput",componentId:"sc-oxaj0c-0"})(["display:flex;align-items:center;justify-content:center;input,button{height:32px;padding:0;display:flex;align-items:center;justify-content:center;}button{width:32px;border:1px solid ",";svg,svg *{fill:white;}background-color:",";color:white;&:hover{background-color:",";}:first-child{border-right:none;border-radius:8px 0 0 8px;}:last-child{border-left:none;border-radius:0 8px 8px 0}}input{width:48px;cursor:pointer;border:none;font-weight:bold;text-align:center;background-color:white;&:hover{background-color:",";}border:1px solid ",";}font-size:110%;cursor:pointer;"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.status.interactive}),(function(e){return e.theme.status.active}),(function(e){return e.theme.status.highlight}),(function(e){return e.theme.utils.border}));t.Z=function(e){var t=e.value,n=e.setValue,l=(0,o.Z)(e,c);return r.createElement(d,null,r.createElement(i.Z,{onClick:function(){var e=t-1;void 0!==l.min&&(e=Math.max(l.min,e)),n(e)}},r.createElement(a.ZP,{iconId:"minus",size:12})),r.createElement("input",Object.assign({type:"number",value:t,onChange:null},l)),r.createElement(i.Z,{onClick:function(){var e=t+1;void 0!==l.max&&(e=Math.min(l.max,e)),n(e)}},r.createElement(a.ZP,{iconId:"plus",size:12})))}},8916:function(e,t,n){var o=n(1074),r=n(7294),l=o.default.div.withConfig({displayName:"CardSection__StyledCardSection",componentId:"sc-upjcj5-0"})(["h3{text-transform:uppercase;font-size:80%;margin-bottom:8px;color:",";}& > .content{background:",";border-radius:8px;padding:8px;}"],(function(e){return e.theme.text.secondary}),(function(e){return e.theme.surface.bg}));t.Z=function(e){var t=e.title,n=e.children;return r.createElement(l,null,r.createElement("h3",null,t),r.createElement("div",{className:"content"},n))}},2160:function(e,t,n){var o=n(1597),r=n(7294),l=n(1074),a=n(8500),i=n(8916),c=l.default.div.withConfig({displayName:"DetailsCol__StyledDetailsCol",componentId:"sc-1v7wzl4-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:1fr 1fr;}.name{font-size:140%;display:block;padding:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;}.info{display:flex;align-items:center;justify-content:center;.item{margin:8px;text-align:center;.note{font-weight:bold;font-size:120%;}.interval{color:",";}}}.notes,.instrument{min-height:128px;display:flex;align-items:center;justify-content:center;flex-direction:column;}.inst-name{font-weight:bold;font-size:140%;text-align:center;padding:8px;}.tuning{font-size:120%;text-align:center;color:",";}"],(function(e){return e.theme.text.secondary}),(function(e){return e.theme.text.secondary}));t.Z=function(e){var t=e.modelType,n=e.modelConfig,l=e.root,d=(e.setModelType,e.setModelConfig,e.setRoot,e.model),u=(e.setModel,e.instrumentName),s=e.instrumentTuning;return r.createElement(c,null,r.createElement(i.Z,{title:"Notes"},r.createElement("div",{className:"notes"},r.createElement(o.rU,{to:(0,a.D)(t.id,n.modelId,l.modelId),className:"name"},d.name),r.createElement("div",{className:"info"},d.notes&&d.notes.map((function(e,t){return r.createElement("div",{key:t,className:"item"},r.createElement("div",{className:"note"},e.name),r.createElement("div",{className:"interval"},d.intervals[t].getName()))}))))),r.createElement(i.Z,{title:"Instrument"},r.createElement("div",{className:"instrument"},r.createElement("div",{className:"inst-name"},u),r.createElement("div",{className:"tuning"},s))))}},1578:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(7294),r=n(1074),l=n(3366),a=n(9042),i=n(1011),c=n(6291),d=["setIsOpen","children"],u=r.default.div.withConfig({displayName:"Modal__StyledOverlay",componentId:"sc-hrj2s2-0"})(["opacity:0.8;background-color:black;position:fixed;top:48px;bottom:0;left:0;right:0;z-index:3000;"]),s=r.default.div.withConfig({displayName:"Modal__StyledContainer",componentId:"sc-hrj2s2-1"})(["display:flex;align-items:center;justify-content:center;position:fixed;top:48px;bottom:0;left:0;right:0;z-index:3001;& > ","{width:80%;height:80%;position:relative;padding:64px 16px;overflow:auto;resize:both;.close{position:absolute;top:16px;right:16px;background-color:transparent !important;}}"],i.rg),m=function(e){var t=e.setIsOpen,n=e.children,r=(0,l.Z)(e,d);return o.createElement(o.Fragment,null,o.createElement(u,null),o.createElement(s,null,o.createElement(i.ZP,Object.assign({},r,{draggable:"true"}),o.createElement(a.Z,{onClick:function(){return t(!1)},className:"close"},o.createElement(c.ZP,{iconId:"close"})),n)))},f=r.default.div.withConfig({displayName:"MainCol__StyledMainCol",componentId:"sc-1c78f9s-0"})(["padding:16px;.maximize{background-color:transparent !important;}"]),p=function(e){var t=e.viewer,n=e.isFullScreen,r=e.setIsFullScreen;return o.createElement(o.Fragment,null,n&&o.createElement(m,{setIsOpen:r},o.createElement("div",{className:"resize"},t)),o.createElement(f,null,t))}},1247:function(e,t,n){var o=n(7294),r=n(9042),l=n(6291),a=(0,n(1074).default)(r.Z).withConfig({displayName:"MaximizeButton__StyledMaximizeButton",componentId:"sc-1l0kgxn-0"})(["background-color:transparent !important;"]);t.Z=function(e){return o.createElement(a,e,o.createElement(l.ZP,{iconId:"maximize",size:24}))}},6513:function(e,t,n){n.d(t,{PO:function(){return v},Dj:function(){return x},HV:function(){return E},cS:function(){return b},ZP:function(){return C},Ur:function(){return k}});var o=n(7294),r=n(1074),l=n(3937),a=n(349),i=n(9544),c=n(7254),d=n(7158),u=n(759),s=n(2982),m=r.default.div.withConfig({displayName:"ColorSchemeInput__StyledColorSchemeInput",componentId:"sc-725p1a-0"})(["padding:4px 8px;display:flex;align-items:center;justify-content:flex-end;gap:4px;& > div{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:80%;color:",";}input{height:32px;width:32px;cursor:pointer;}"],(function(e){return e.theme.text.secondary})),f=function(e){var t=e.value,n=e.setValue,r=e.labelFn;return o.createElement(m,null,t.map((function(e,l){return o.createElement("div",null,o.createElement("input",{type:"color",value:e,onChange:function(e){return n([].concat((0,s.Z)(t.slice(0,l)),[e.target.value],(0,s.Z)(t.slice(l+1))))}}),o.createElement("label",null,r(l)))})))},p=n(6486),g=n(3342),y=n(8916),h=r.default.div.withConfig({displayName:"NotesCol__StyledNotesCol",componentId:"sc-10poc1b-0"})(["display:grid;gap:16px;grid-template-columns:1fr;"]),b=[{id:i.BY.Chord,name:"Chords",value:i.BY.Chord,data:c.Jb},{id:i.BY.Scale,name:"Scales",value:i.BY.Scale,data:c.Qo}],x=b[0],v=b[0].data[0],E=c.WA[0],k=function(e,t,n){var o;return e===i.BY.Chord?o=new a.Z(t,{root:d.Z.fromId(n)}):e===i.BY.Scale&&(o=new u.Z(t,{root:d.Z.fromId(n)})),o},C=function(e){var t=e.modelType,n=e.modelConfig,r=e.root,a=e.setModelType,i=e.setModelConfig,d=e.setRoot,u=(e.model,e.setModel),s=e.colorScheme,m=e.setColorScheme,x=e.colorConfig,v=e.setColorConfig,E=t.data;return o.createElement(h,null,o.createElement(y.Z,{title:"Root"},o.createElement("ul",null,o.createElement("li",null,o.createElement(g.Z,{label:"Key Center"},o.createElement(p.Z,{value:r,setValue:function(e){var t=k(n.modelType,n.modelId,e.modelId);d(e),u(t)},options:c.WA,idProperty:"modelId"}))))),o.createElement(y.Z,{title:"Intervals"},o.createElement("ul",null,o.createElement("li",null,o.createElement(g.Z,{label:"Model Type"},o.createElement(p.Z,{value:t,setValue:function(e){a(e),i(e.data[0])},options:b,idProperty:"id"}))),o.createElement("li",null,o.createElement(g.Z,{label:"Preset"},o.createElement(p.Z,{value:n,setValue:function(e){var t=k(e.modelType,e.modelId,r.modelId);i(e),u(t)},options:E,idProperty:"modelId"}))))),o.createElement(y.Z,{title:"Colors"},o.createElement("ul",null,o.createElement("li",null,o.createElement(g.Z,{label:"Color Scheme"},o.createElement(p.Z,{value:s,setValue:m,options:l.R,idProperty:"id"}))),o.createElement("li",null,o.createElement(g.Z,{label:"Color Config"},o.createElement(f,{value:x,setValue:v,labelFn:s.labelFn}))))))}},508:function(e,t,n){var o=n(7294),r=n(1074),l=n(1011),a=(0,r.default)(l.rg).withConfig({displayName:"TabCard__StyledTabCard",componentId:"sc-1608y9r-0"})(["padding:0;.content{padding:16px;}.fake-border{position:relative;width:100%;bottom:2px;border-bottom:2px solid ",";}> ul{display:flex;align-items:center;overflow:auto;button{position:relative;z-index:1000;padding:16px 16px 12px;appearance:none;border:none;cursor:pointer;background-color:",";border-bottom:2px solid transparent;border-radius:8px 8px 0 0;border-bottom:2px solid ",";@media(min-width:512px){font-size:120%;}color:",";&:hover{border-bottom:2px solid  ",";color:",";}&.active{border-color:",";font-weight:bold;color:",";}}}"],(function(e){return e.theme.surface.bg}),(function(e){return e.theme.surface.card}),(function(e){return e.theme.surface.bg}),(function(e){return e.theme.text.secondary}),(function(e){return e.theme.action.interactive}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.action.active}),(function(e){return e.theme.text.primary}));t.Z=function(e){var t=e.tabs,n=(0,o.useState)(0),r=n[0],l=n[1];return o.createElement(a,null,o.createElement("ul",null,t.map((function(e,t){return o.createElement("li",{key:e.text},o.createElement("button",{type:"button",onClick:function(){return l(t)},className:t===r?"active":""},e.text))}))),o.createElement("div",{className:"fake-border"}),o.createElement("div",{className:"content"},t[r].content))}},8729:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(7294),r=n(1074),l=n(3937),a=n(5022),i=n(2269),c=n(1090),d=n(2160),u=n(2222),s=n(5298),m=n(3342),f=n(8916),p=r.default.div.withConfig({displayName:"KeyboardCol__StyledKeyboardCol",componentId:"sc-uhgka0-0"})([""]),g=u.ZP.keyRange,y=function(e){var t=e.keyRange,n=e.setKeyRange,r=t[0],l=t[1];return o.createElement(p,null,o.createElement(f.Z,{title:"Range"},o.createElement("ul",null,o.createElement("li",null,o.createElement(m.Z,{label:"Low Key"},o.createElement(s.Z,{value:r,min:-88,max:l,setValue:function(e){return n([e,l])}}))),o.createElement("li",null,o.createElement(m.Z,{label:"High Key"},o.createElement(s.Z,{value:l,min:r,max:88,setValue:function(e){return n([r,e])}}))))))},h=n(1578),b=n(1247),x=n(6513),v=n(508),E=n(4954),k=n(1347),C=(0,r.default)(c.Z).withConfig({displayName:"keyboardpage__StyledKeyboardPage",componentId:"sc-1mc7tab-0"})([""]),w=function(){var e=(0,E.Z)(),t=e[0],n=e[1],r=e[2],c=(0,k.l)(t,n,r),u=c.modelType,s=c.setModelType,m=c.modelConfig,f=c.setModelConfig,p=c.root,w=c.setRoot,Z=c.model,I=c.setModel,S=(0,o.useState)(g),N=S[0],z=S[1],_=(0,o.useState)(!1),M=_[0],P=_[1],j=(0,o.useState)(l.R[1]),T=j[0],K=j[1],R=(0,o.useState)(T.defaultConfig),B=R[0],F=R[1],W={model:Z,keyRange:N,setKeyRange:z},O={modelType:u,setModelType:s,modelConfig:m,setModelConfig:f,root:p,setRoot:w,model:Z,setModel:I,colorScheme:T,setColorScheme:function(e){K(e),F(e.defaultConfig)},colorConfig:B,setColorConfig:F,instrumentName:"Keyboard",instrumentTuning:""},V={title:"Keyboard",isFullScreen:M,setIsFullScreen:P,viewer:o.createElement(a.Z,Object.assign({},W,O,{colorMapFn:function(e){var t=e.noteIndex,n=e.model.tryGetPodPairAtPitch(t),o=n[0],r=n[1],a=l.R.find((function(e){return e.id===T.id}));if(a)return a.fn(r,o,B)}}))};return o.createElement(C,{title:"Keyboard",action:o.createElement(b.Z,{onClick:function(){return P(!0)}})},o.createElement(i.Z,{desktop:["1fr","1fr"]},o.createElement(h.Z,V),o.createElement(v.Z,{tabs:[{text:"Summary",content:o.createElement(d.Z,O)},{text:"Notes",content:o.createElement(x.ZP,O)},{text:"Instrument",content:o.createElement(y,W)}]})))}},4954:function(e,t,n){var o=n(9339);t.Z=function(){return[(0,o.Wd)("modelType")[0],(0,o.Wd)("modelId")[0],(0,o.Wd)("rootId")[0]]}},1347:function(e,t,n){n.d(t,{l:function(){return a}});var o=n(7294),r=n(7254),l=n(6513),a=function(e,t,n){var a,i,c=(0,o.useState)((a=e,l.cS.find((function(e){return e.id&&e.id===a}))||l.Dj)),d=c[0],u=c[1],s=(0,o.useState)(function(e,t){return e.data.find((function(e){return e.modelId===t}))||l.PO}(d,t)),m=s[0],f=s[1],p=(0,o.useState)((i=n,r.WA.find((function(e){return e.modelId===i}))||l.HV)),g=p[0],y=p[1],h=(0,o.useState)((0,l.Ur)(d.id,m.modelId,g.modelId));return{modelType:d,setModelType:u,modelConfig:m,setModelConfig:f,root:g,setRoot:y,model:h[0],setModel:h[1]}}},8500:function(e,t,n){n.d(t,{D:function(){return o}});var o=function(e,t,n){return"/browse/"+e+(t?"/"+t:"")+(n?"/root/"+n:"")+"/"}},2222:function(e,t,n){var o;n.d(t,{Jz:function(){return o},fY:function(){return r}}),function(e){e.Black="black",e.White="white"}(o||(o={}));var r=[0,2,4,5,7,9,11],l={keyRange:[-12,12],colorMapFn:function(e){var t=e.noteIndex,n=e.model.tryGetPodPairAtPitch(t),o=n[0];if(n[1])return o.getColor()}};t.ZP=l},5022:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(7294),r=n(3326),l=n(2222),a=n(1074),i=a.default.div.withConfig({displayName:"Keyboardstyles__StyledKeyboard",componentId:"sc-fi5q9v-0"})(["display:inline-flex;width:100%;font-size:12px;text-align:center;font-family:sans-serif;margin:16px 0;.center{text-align:center;}.white-key-container{display:inline-block;}.black-key-container{display:inline-block;width:0px;}.keyboard-key{vertical-align:top;position:relative;display:inline-flex;justify-content:center;cursor:pointer;}.white-key{box-shadow:0 0 1px 1px black inset;border-radius:0 0 5% 5%;}.black-key{box-shadow:0 0 1px 2px #333 inset;z-index:10;border-radius:0 0 10% 10%;}.white{background-color:white;color:black;}.black{background-color:black;color:white;}.white-key .keyboard-key-label{position:absolute;height:100%;width:100%;border-radius:0 0 5% 5%;box-shadow:0 0 1px 1px black inset;padding-bottom:4px;display:flex;align-items:flex-end;justify-content:center;}.black-key .keyboard-key-label{bottom:105%;position:absolute;color:black;}"]),c=n(3937),d=4.6875,u=.625,s=2.9688,m=a.default.div.withConfig({displayName:"KeyboardKey__StyledKey",componentId:"sc-v81qzr-0"})(["background-color:",";color:",";"],(function(e){var t=e.$color;return t||"transparent"}),(function(e){var t=e.$color;return c.ZP.getFgColor(t)})),f=a.default.div.withConfig({displayName:"KeyboardKey__StyledKeyLabel",componentId:"sc-v81qzr-1"})(["color:",";"],(function(e){var t=e.$color;return c.ZP.getFgColor(t)})),p=function(e){var t=e.keyType,n=(e.noteIndex,e.scale),r=(e.hideLabel,e.model,(0,e.colorMapFn)(e)),a=function(e,t){switch(e){case l.Jz.White:return{width:t+"px",height:d*t+"px"};case l.Jz.Black:return{width:u*t+"px",height:s*t+"px",right:.5*u*t+"px"};default:return{width:"0px",height:"0px"}}}(t,n),i=["keyboard-key",t+"-key",t],c={backgroundColor:r||""},p=t===l.Jz.White?a:Object.assign({},a,c),g=t===l.Jz.White?c:{};return o.createElement(m,{className:t+"-key-container"},o.createElement("div",{className:i.join(" "),style:p},o.createElement(f,{className:"keyboard-key-label",style:g,$color:r},null)))},g=function(e){var t=Object.assign({},l.ZP,e),n=(0,o.useState)([128,128]),a=n[0],c=n[1];return(0,o.useEffect)((function(){var e=function(e){var t=document.getElementById("keyboard");c([t.clientWidth,t.clientHeight])};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),o.createElement(i,{className:"keyboard",id:"keyboard"},function(e,t){for(var n=e.keyRange,a=n[0],i=n[1],c=[],d=0,u=a;u<=i;u++)(l.fY.includes(r.Z.modulo(u,12))?l.Jz.White:l.Jz.Black)!==l.Jz.Black&&d++;for(var s=a;s<=i;s++){var m=l.fY.includes(r.Z.modulo(s,12))?l.Jz.White:l.Jz.Black;c.push(o.createElement(p,Object.assign({keyType:m,key:s,noteIndex:s,scale:t/d},e)))}return c}(t,a[0]))}}}]);
//# sourceMappingURL=component---src-components-pages-view-keyboard-page-tsx-d7efd9e93ab92e18131a.js.map