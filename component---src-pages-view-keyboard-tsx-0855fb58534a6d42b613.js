"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[721],{5298:function(e,t,n){var o=n(3366),r=n(7294),l=n(1074),a=n(6291),i=n(9042),c=["value","setValue"],d=l.default.div.withConfig({displayName:"NumericInput__StyledNumbericInput",componentId:"sc-oxaj0c-0"})(["display:flex;align-items:center;justify-content:center;input,button{height:32px;padding:0;display:flex;align-items:center;justify-content:center;}button{width:32px;border:1px solid ",";svg,svg *{fill:white;}background-color:",";color:white;&:hover{background-color:",";}:first-child{border-right:none;border-radius:8px 0 0 8px;}:last-child{border-left:none;border-radius:0 8px 8px 0}}input{width:48px;cursor:pointer;border:none;font-weight:bold;text-align:center;background-color:white;&:hover{background-color:",";}border:1px solid ",";}font-size:110%;cursor:pointer;"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.status.interactive}),(function(e){return e.theme.status.active}),(function(e){return e.theme.status.highlight}),(function(e){return e.theme.utils.border}));t.Z=function(e){var t=e.value,n=e.setValue,l=(0,o.Z)(e,c);return r.createElement(d,null,r.createElement(i.Z,{onClick:function(){var e=t-1;void 0!==l.min&&(e=Math.max(l.min,e)),n(e)}},r.createElement(a.ZP,{iconId:"minus",size:12})),r.createElement("input",Object.assign({type:"number",value:t,onChange:null},l)),r.createElement(i.Z,{onClick:function(){var e=t+1;void 0!==l.max&&(e=Math.min(l.max,e)),n(e)}},r.createElement(a.ZP,{iconId:"plus",size:12})))}},3744:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(1597),r=n(7294),l=n(1074),a=function(e,t,n){return"/browse/"+e+"/"+t+(n?"/root/"+n:"")},i=l.default.div.withConfig({displayName:"DetailsCol__StyledDetailsCol",componentId:"sc-1v7wzl4-0"})(["display:grid;grid-template-columns:1fr 1fr;gap:16px;.name{font-size:140%;display:block;padding:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;}.info{display:flex;align-items:center;justify-content:center;.item{margin:8px;text-align:center;.note{font-weight:bold;font-size:120%;}.interval{color:",";}}}.instrument{.inst-name{font-weight:bold;font-size:140%;text-align:center;padding:8px;}.tuning{font-size:120%;text-align:center;color:",";}}"],(function(e){return e.theme.text.secondary}),(function(e){return e.theme.text.secondary})),c=function(e){var t=e.modelType,n=e.modelConfig,l=e.root,c=(e.setModelType,e.setModelConfig,e.setRoot,e.model),d=(e.setModel,e.instrumentName),u=e.instrumentTuning;return r.createElement(i,null,r.createElement("div",{className:"notes"},r.createElement("h3",null,"Notes"),r.createElement(o.rU,{to:a(t.id,n.modelId,l.modelId),className:"name"},c.name),r.createElement("div",{className:"info"},c.notes&&c.notes.map((function(e,t){return r.createElement("div",{key:t,className:"item"},r.createElement("div",{className:"note"},e.name),r.createElement("div",{className:"interval"},c.intervals[t].getName()))})))),r.createElement("div",{className:"instrument"},r.createElement("h3",null,"Instrument"),r.createElement("div",{className:"inst-name"},d),r.createElement("div",{className:"tuning"},u)))}},1578:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(7294),r=n(1074),l=n(3366),a=n(9042),i=n(1011),c=n(6291),d=["setIsOpen","children"],u=r.default.div.withConfig({displayName:"Modal__StyledOverlay",componentId:"sc-hrj2s2-0"})(["opacity:0.8;background-color:black;position:fixed;top:48px;bottom:0;left:0;right:0;z-index:3000;"]),m=r.default.div.withConfig({displayName:"Modal__StyledContainer",componentId:"sc-hrj2s2-1"})(["display:flex;align-items:center;justify-content:center;position:fixed;top:48px;bottom:0;left:0;right:0;z-index:300100000000000;& > ","{width:80%;height:80%;position:relative;padding:64px 16px;overflow:auto;resize:both;.close{position:absolute;top:16px;right:16px;background-color:transparent !important;}}"],i.rg),s=function(e){var t=e.setIsOpen,n=e.children,r=(0,l.Z)(e,d);return o.createElement(o.Fragment,null,o.createElement(u,null),o.createElement(m,null,o.createElement(i.ZP,Object.assign({},r,{draggable:"true"}),o.createElement(a.Z,{onClick:function(){return t(!1)},className:"close"},o.createElement(c.ZP,{iconId:"close"})),n)))},p=r.default.div.withConfig({displayName:"MainCol__StyledMainCol",componentId:"sc-1c78f9s-0"})(["padding:16px;.maximize{background-color:transparent !important;}"]),f=function(e){var t=e.viewer,n=e.isFullScreen,r=e.setIsFullScreen;return o.createElement(o.Fragment,null,n&&o.createElement(s,{setIsOpen:r},o.createElement("div",{className:"resize"},t)),o.createElement(p,null,t))}},9699:function(e,t,n){n.d(t,{Dj:function(){return g},HV:function(){return h},PO:function(){return v},Ur:function(){return y},cS:function(){return f}});var o=n(7294),r=n(1074),l=n(349),a=n(9544),i=n(7254),c=n(7158),d=n(759),u=n(6486),m=n(1011),s=n(3342),p=r.default.div.withConfig({displayName:"NotesCol__StyledNotesCol",componentId:"sc-10poc1b-0"})([".header:not(:first-child){margin-top:16px;}"]),f=[{id:a.BY.Chord,name:"Chords",value:a.BY.Chord,data:i.Jb},{id:a.BY.Scale,name:"Scales",value:a.BY.Scale,data:i.Qo}],g=f[0],v=f[0].data[0],h=i.WA[0],y=function(e,t,n){var o;return e===a.BY.Chord?o=new l.Z(t,{root:c.Z.fromId(n)}):e===a.BY.Scale&&(o=new d.Z(t,{root:c.Z.fromId(n)})),o};t.ZP=function(e){var t=e.modelType,n=e.modelConfig,r=e.root,l=e.setModelType,a=e.setModelConfig,c=e.setRoot,d=(e.model,e.setModel),g=t.data;return o.createElement(p,null,o.createElement(m.Ol,{title:"Root"}),o.createElement("ul",null,o.createElement("li",null,o.createElement(s.Z,{label:"Key Center"},o.createElement(u.Z,{value:r,setValue:function(e){var t=y(n.modelType,n.modelId,e.modelId);c(e),d(t)},options:i.WA,idProperty:"modelId"})))),o.createElement(m.Ol,{title:"Intervals"}),o.createElement("ul",null,o.createElement("li",null,o.createElement(s.Z,{label:"Model Type"},o.createElement(u.Z,{value:t,setValue:function(e){l(e),a(e.data[0])},options:f,idProperty:"id"}))),o.createElement("li",null,o.createElement(s.Z,{label:"Preset"},o.createElement(u.Z,{value:n,setValue:function(e){var t=y(e.modelType,e.modelId,r.modelId);a(e),d(t)},options:g,idProperty:"modelId"})))))}},508:function(e,t,n){var o=n(7294),r=n(1074),l=n(1011),a=(0,r.default)(l.rg).withConfig({displayName:"TabCard__StyledTabCard",componentId:"sc-1608y9r-0"})(["padding:0;min-height:256px;.content{padding:16px;}.fake-border{position:relative;width:100%;bottom:2px;border-bottom:2px solid #EEE;margin-bottom:8px;}> ul{display:flex;align-items:center;overflow:auto;button{position:relative;z-index:100000000;padding:16px 16px 12px;appearance:none;border:none;cursor:pointer;background-color:",";border-bottom:2px solid transparent;border-radius:8px 8px 0 0;border-bottom:2px solid #EEE;font-size:120%;color:",";&:hover{border-bottom:2px solid  ",";color:",";}&.active{border-color:",";font-weight:bold;color:",";}}}"],(function(e){return e.theme.surface.card}),(function(e){return e.theme.text.secondary}),(function(e){return e.theme.action.interactive}),(function(e){return e.theme.text.primary}),(function(e){return e.theme.action.active}),(function(e){return e.theme.text.primary}));t.Z=function(e){var t=e.tabs,n=(0,o.useState)(0),r=n[0],l=n[1];return o.createElement(a,null,o.createElement("ul",null,t.map((function(e,t){return o.createElement("li",{key:e.text},o.createElement("button",{type:"button",onClick:function(){return l(t)},className:t===r?"active":""},e.text))}))),o.createElement("div",{className:"fake-border"}),o.createElement("div",{className:"content"},t[r].content))}},4954:function(e,t,n){var o=n(9339);t.Z=function(){return[(0,o.Wd)("modelType")[0],(0,o.Wd)("modelId")[0],(0,o.Wd)("rootId")[0]]}},1347:function(e,t,n){n.d(t,{l:function(){return a}});var o=n(7294),r=n(7254),l=n(9699),a=function(e,t,n){var a,i,c=(0,o.useState)((a=e,l.cS.find((function(e){return e.id&&e.id===a}))||l.Dj)),d=c[0],u=c[1],m=(0,o.useState)(function(e,t){return e.data.find((function(e){return e.modelId===t}))||l.PO}(d,t)),s=m[0],p=m[1],f=(0,o.useState)((i=n,r.WA.find((function(e){return e.modelId===i}))||l.HV)),g=f[0],v=f[1],h=(0,o.useState)((0,l.Ur)(d.id,s.modelId,g.modelId));return{modelType:d,setModelType:u,modelConfig:s,setModelConfig:p,root:g,setRoot:v,model:h[0],setModel:h[1]}}},7469:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=n(7294),r=n(1074),l=n(6471),a=n(2269),i=n(4140),c=n(1011),d=n(3744),u=n(2222),m=n(5298),s=n(3342),p=r.default.div.withConfig({displayName:"KeyboardCol__StyledKeyboardCol",componentId:"sc-uhgka0-0"})([""]),f=u.ZP.keyRange,g=function(e){var t=e.keyRange,n=e.setKeyRange,r=t[0],l=t[1];return o.createElement(p,null,o.createElement(c.ZP,{title:"Range"},o.createElement("ul",null,o.createElement("li",null,o.createElement(s.Z,{label:"Low Key"},o.createElement(m.Z,{value:r,min:-88,max:l,setValue:function(e){return n([e,l])}}))),o.createElement("li",null,o.createElement(s.Z,{label:"High Key"},o.createElement(m.Z,{value:l,min:r,max:88,setValue:function(e){return n([r,e])}}))))))},v=n(1578),h=n(9699),y=n(508),b=n(4954),E=n(1347),x=r.default.div.withConfig({displayName:"KeyboardPage__StyledKeyboardPage",componentId:"sc-1kjdnv0-0"})(["min-height:95vh;padding:16px;","{& > div > ",":not(:last-child){margin-bottom:16px;}}","{margin-top:16px;}"],a.O,c.rg,a.O),C=function(){var e=(0,b.Z)(),t=e[0],n=e[1],r=e[2],c=(0,E.l)(t,n,r),u=c.modelType,m=c.setModelType,s=c.modelConfig,p=c.setModelConfig,C=c.root,Z=c.setRoot,I=c.model,w=c.setModel,N=(0,o.useState)(f),k={model:I,keyRange:N[0],setKeyRange:N[1]},S={modelType:u,setModelType:m,modelConfig:s,setModelConfig:p,root:C,setRoot:Z,model:I,setModel:w},M={title:"Keyboard",viewer:o.createElement(l.Z,Object.assign({},k,S))};return o.createElement(x,null,o.createElement(i.Z,{title:"Keyboard"}),o.createElement(a.Z,{desktop:["1fr","1fr"]},o.createElement(v.Z,M),o.createElement(y.Z,{tabs:[{text:"Summary",content:o.createElement(d.Z,S)},{text:"Instrument",content:o.createElement(g,k)},{text:"Notes",content:o.createElement(h.ZP,S)}]})))}}}]);
//# sourceMappingURL=component---src-pages-view-keyboard-tsx-0855fb58534a6d42b613.js.map