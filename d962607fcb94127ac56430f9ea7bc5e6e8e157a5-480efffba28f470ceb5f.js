"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[322],{60:function(e,t,n){var r=n(7294),a=n(8525),l=n(9),i=n(7809),o=n(6181),c=n(3503),m=n(9553),d=(0,l.default)(m.rg).withConfig({displayName:"DetailsCard__StyledDetailsCard",componentId:"sc-1i0ju9h-0"})(["table{&.mobile{display:table;@media(min-width:512px){display:none;}}&.desktop{display:none;@media(min-width:512px){display:table;}th{display:none;}}margin:auto;border-collapse:collapse;td,th{padding:8px;@media(min-width:512px){padding:8px 16px;}text-align:center;}th{text-transform:uppercase;font-size:80%;}.featured{font-weight:bold;font-size:150%;@media(min-width:512px){font-size:300%;}}.interval{font-size:120%;@media(min-width:512px){font-size:200%;}}.ratio,.frequency{color:",";font-size:80%;@media(min-width:512px){font-size:100%;}}.root{color:red;}}"],(function(e){return e.theme.text.secondary})),u=function(e){var t=e.note,n=e.i;return t?r.createElement("td",{className:"note featured "+(0===n?"root":"")},t.name,r.createElement("sub",null,t.getOctave())):null},s=function(e){var t=e.interval,n=e.isFeatured;return r.createElement("td",{className:"interval "+(n?"featured":"")},t.getName())},p=function(e){var t=e.note;return t?r.createElement("td",{className:"frequency"},t.getFrequency(!0)):null},f=function(e){var t=e.interval;return r.createElement("td",{className:"ratio"},t.getRatio())};t.Z=function(e){var t=e.model,n=t.intervals,l=(0,a.sJ)(c.Ph),m=t.notes&&t.notes.map((function(e){return new o.Z([12*(l-4)+i.Z.modulo(e.pod[0],12),e.pod[1]])}));return n||m?r.createElement(d,{$n:n.length},r.createElement("table",{className:"mobile"},r.createElement("thead",null,r.createElement("tr",null,m&&r.createElement("th",null,"Note"),r.createElement("th",null,"Interval"),m&&r.createElement("th",null,"Pitch"),r.createElement("th",null,"Ratio"))),r.createElement("tbody",null,n.map((function(e,t){var n=m&&m[t];return r.createElement("tr",{key:e.id},r.createElement(u,{note:n,key:t,i:t}),r.createElement(s,{interval:e,key:t,isFeatured:!n}),r.createElement(p,{note:n,key:t}),r.createElement(f,{interval:e,key:t}))})))),r.createElement("table",{className:"desktop"},r.createElement("tbody",null,m&&r.createElement("tr",null,r.createElement("th",null,"Note"),m.map((function(e,t){return r.createElement(u,{note:e,key:t,i:t})}))),r.createElement("tr",null,r.createElement("th",null,"Interval"),n.map((function(e,t){return r.createElement(s,{interval:e,key:t,isFeatured:!m})}))),m&&r.createElement("tr",null,r.createElement("th",null,"Pitch"),m.map((function(e,t){return r.createElement(p,{note:e,key:t})}))),r.createElement("tr",null,r.createElement("th",null,"Ratio"),n.map((function(e,t){return r.createElement(f,{interval:e,key:t})})))))):null}},5004:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3433),a=n(7294),l=n(9),i=n(3659),o=n(493),c=n(1439),m=n(8436),d=n(3490),u=n(9553),s=n(8801),p=n(6481),f=n(5245),h=n(6723),E=["value","setValue"],g=l.default.div.withConfig({displayName:"NumericInput__StyledNumbericInput",componentId:"sc-1pvm4gn-0"})(["display:flex;align-items:center;justify-content:center;input,button{height:32px;padding:0;display:flex;align-items:center;justify-content:center;}button{width:32px;border:1px solid ",";svg,svg *{fill:white;}background-color:",";color:white;&:hover{background-color:",";}:first-child{border-right:none;border-radius:8px 0 0 8px;}:last-child{border-left:none;border-radius:0 8px 8px 0}}input{width:48px;cursor:pointer;border:none;font-weight:bold;text-align:center;background-color:white;&:hover{background-color:",";}border:1px solid ",";}font-size:110%;cursor:pointer;"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.status.interactive}),(function(e){return e.theme.status.active}),(function(e){return e.theme.status.highlight}),(function(e){return e.theme.utils.border})),w=function(e){var t=e.value,n=e.setValue,r=(0,f.Z)(e,E);return a.createElement(g,null,a.createElement(p.Z,{onClick:function(){var e=t-1;void 0!==r.min&&(e=Math.max(r.min,e)),n(e)}},a.createElement(h.ZP,{iconId:"minus",size:12})),a.createElement("input",Object.assign({type:"number",value:t,onChange:null},r)),a.createElement(p.Z,{onClick:function(){var e=t+1;void 0!==r.max&&(e=Math.min(r.max,e)),n(e)}},a.createElement(h.ZP,{iconId:"plus",size:12})))},b=l.default.div.withConfig({displayName:"GuitarCard__StyledGuitarCard",componentId:"sc-wqzdwr-0"})(["ul{border:1px solid ",";padding:8px;border-radius:8px;margin-bottom:16px;li{padding:8px 0;}}"],(function(e){return e.theme.utils.border})),x=[{id:m.Gz.None,name:"---",value:void 0}].concat((0,r.Z)(m.rk)),v=function(e){var t=e.model;if(!t.root||!t.intervals)return null;var n=x.filter((function(e){return!e.value||!e.value.some((function(e){return e&&!t.intervals.find((function(t){return t.pod[1]+1===e}))}))})),r=(0,a.useState)(!1),l=r[0],f=r[1],h=(0,a.useState)(n[0]),E=h[0],g=h[1],v=(0,a.useState)(o.P1[0]),y=v[0],k=v[1],C=(0,a.useState)(c.jt.fretRange),Z=C[0],N=C[1],q=Z[0],S=Z[1],I=(0,c.Aw)(t,E.id===m.Gz.None?void 0:E,y,Z);return a.createElement(u.ZP,{title:"Guitar",action:a.createElement(p.Z,{onClick:function(){return f(!l)}},l?"Done":"Edit")},a.createElement(b,null,l&&a.createElement("ul",{className:"edit"},a.createElement("li",null,a.createElement(s.Z,{label:"Tuning"},a.createElement(d.Z,{value:y,setValue:k,options:o.P1}))),y.id===o.yE.Standard&&a.createElement("li",null,a.createElement(s.Z,{label:"Voicing"},a.createElement(d.Z,{value:E,setValue:g,options:n}))),a.createElement("li",null,a.createElement(s.Z,{label:"Low Fret"},a.createElement(w,{value:q,min:0,max:S,setValue:function(e){return N([e,S])}}))),a.createElement("li",null,a.createElement(s.Z,{label:"High Fret"},a.createElement(w,{value:S,min:q,max:24,setValue:function(e){return N([q,e])}})))),a.createElement(i.Z,I)))}},2005:function(e,t,n){var r=n(5444),a=n(7294),l=n(9),i=n(4010),o=n(8891),c=n(7656),m=n(7138),d=n(9553),u=l.default.ul.withConfig({displayName:"RelatedCard__StyledCollectionList",componentId:"sc-17m6kxq-0"})(["display:flex;flex-wrap:wrap;gap:8px;a{padding:4px 8px;}"]);t.Z=function(e){var t=e.model,n=(0,i.ut)(),l=t.getSubchords(),s=t.getSubscales(),p=t.getSuperchords(),f=t.getSuperscales(),h=t.intervals.map((function(e){return e.pod[0]+1}));return a.createElement(a.Fragment,null,!1,l.length>0&&a.createElement(d.ZP,{title:"Child Chords"},a.createElement(m.Z,{data:l,semitones:h})),p.length>0&&a.createElement(d.ZP,{title:"Parent Chords"},a.createElement(m.Z,{data:p,semitones:h})),s.length>0&&a.createElement(d.ZP,{title:"Child Scales"},a.createElement(m.Z,{data:s,semitones:h})),f.length>0&&a.createElement(d.ZP,{title:"Parent Scales"},a.createElement(m.Z,{data:f,semitones:h})),t.modelId===o.ww.Chord&&a.createElement(d.ZP,{title:"Other Chords"},a.createElement(u,null,c.Jb.map((function(e){return a.createElement("li",{key:e.id},a.createElement(r.rU,{to:"/browse/chords/"+e.id+"/"+n},e.name))})))),t.modelId===o.ww.Scale&&a.createElement(d.ZP,{title:"Other Scales"},a.createElement(u,null,c.Qo.map((function(e){return a.createElement("li",{key:e.id},a.createElement(r.rU,{to:"/browse/scales/"+e.id+"/"+n},e.name))})))))}},5469:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(5444),a=n(7294),l=n(8525),i=n(9),o=n(4010),c=n(3503),m=n(2603),d=n(8801),u=n(6481),s=n(3490),p=n(8891),f=n(7656),h=i.default.div.withConfig({displayName:"RootInput__StyledRootInput",componentId:"sc-1ierq22-0"})(["margin-top:16px;display:grid;grid-template-columns:repeat(7,1fr);width:100%;@media(min-width:512px){}a{display:flex;align-items:center;justify-content:center;width:100%;padding:4px;&.main{font-size:140%;padding:8px 4px;font-weight:bold;}border-radius:4px;&:hover{background-color:",";color:white;}}"],(function(e){return e.theme.action.active})),E=function(){var e=(0,o.f8)(),t=(0,o.V7)(),n=t.path,l=t.path.lastIndexOf("root"),i=e?n.slice(0,l):n;return a.createElement(h,null,a.createElement(r.rU,{to:i+"root/"+p.iw.Cs},f.nq.get(p.iw.Cs).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Ds},f.nq.get(p.iw.Ds).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Es},f.nq.get(p.iw.Es).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Fs},f.nq.get(p.iw.Fs).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Gs},f.nq.get(p.iw.Gs).name),a.createElement(r.rU,{to:i+"root/"+p.iw.As},f.nq.get(p.iw.As).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Bs},f.nq.get(p.iw.Bs).name),a.createElement(r.rU,{to:i+"root/"+p.iw.C,className:"main"},f.nq.get(p.iw.C).name),a.createElement(r.rU,{to:i+"root/"+p.iw.D,className:"main"},f.nq.get(p.iw.D).name),a.createElement(r.rU,{to:i+"root/"+p.iw.E,className:"main"},f.nq.get(p.iw.E).name),a.createElement(r.rU,{to:i+"root/"+p.iw.F,className:"main"},f.nq.get(p.iw.F).name),a.createElement(r.rU,{to:i+"root/"+p.iw.G,className:"main"},f.nq.get(p.iw.G).name),a.createElement(r.rU,{to:i+"root/"+p.iw.A,className:"main"},f.nq.get(p.iw.A).name),a.createElement(r.rU,{to:i+"root/"+p.iw.B,className:"main"},f.nq.get(p.iw.B).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Cb},f.nq.get(p.iw.Cb).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Db},f.nq.get(p.iw.Db).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Eb},f.nq.get(p.iw.Eb).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Fb},f.nq.get(p.iw.Fb).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Gb},f.nq.get(p.iw.Gb).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Ab},f.nq.get(p.iw.Ab).name),a.createElement(r.rU,{to:i+"root/"+p.iw.Bb},f.nq.get(p.iw.Bb).name))},g=n(9553),w=i.default.div.withConfig({displayName:"RootCard__StyledRoot",componentId:"sc-19ck3k3-0"})(["margin-top:16px;display:grid;grid-template-columns:1fr;gap:16px;@media(min-width:512px){}.root{font-size:200%;font-weight:bolder;text-align:center;sub{font-size:80%;font-weight:normal;}.f{color:",";font-size:60%;margin-left:16px;font-weight:normal;}}.edit{margin-top:16px;border:1px solid ",";border-radius:8px;padding:8px;display:flex;flex-direction:column;gap:8px;align-items:flex-end;button{margin-left:auto;}}"],(function(e){return e.theme.text.secondary}),(function(e){return e.theme.utils.border})),b=(0,i.default)(g.rg).withConfig({displayName:"RootCard__StyledRootless",componentId:"sc-19ck3k3-1"})(["margin-top:16px;background-color:",";border:1px solid ",";color:",";"],m.Z.status.highlight,(function(e){return e.theme.utils.border}),m.Z.text.primary),x=[0,1,2,3,4,5,6,7,8,9].map((function(e,t){return{id:t+1,name:t+1}})),v=function(){var e=(0,o.f8)(),t=(0,o.V7)(),n=(0,l.FV)(c.Ph),i=n[0],m=n[1],p=(0,a.useState)(!1),f=p[0],h=p[1],v=t.path.includes("chord")?"chord":"scale";if(!e)return a.createElement(b,null,a.createElement(g.Ol,{title:"No Root"}),"This ",v," does not have a root. To see the notes in this ",v,", select a root below.",a.createElement(E,null));var y=a.createElement(u.Z,{onClick:function(){return h(!f)}},f?"Done":"Edit");return a.createElement(w,null,a.createElement(g.ZP,{title:"Root",action:y},a.createElement("div",{className:"root"},e.name,a.createElement("sub",null,i),a.createElement("span",{className:"f"},e.getFrequency(!0))),f&&a.createElement("div",{className:"edit"},a.createElement(E,null),a.createElement(d.Z,{label:"Octave"},a.createElement(s.Z,{options:x,value:{id:i},setValue:function(e){return m(e.id)}})),a.createElement(u.Z,{onClick:function(){var e=t.path.lastIndexOf("root"),n=-1===e?t.path:t.path.slice(0,e);(0,r.c4)(n)}},"Reset"))))}},4851:function(e,t,n){n(7915),n(7294);var r=n(9);n(6481),n(9553),n(6723),r.default.div.withConfig({displayName:"SoundCard__StyledSoundCard",componentId:"sc-1nkcj35-0"})(["display:flex;align-items:center;justify-content:center;button{padding:8px 32px;}"]);t.Z=function(){return null}},7703:function(e,t,n){n.d(t,{W:function(){return a},K:function(){return l}});var r=n(9),a=r.default.div.withConfig({displayName:"Pane__StyledDoublePane",componentId:"sc-6nr46d-0"})(["display:grid;gap:16px;grid-template-columns:1fr;@media(min-width:512px){grid-template-columns:3fr 2fr;}"]),l=r.default.div.withConfig({displayName:"Pane__StyledPane",componentId:"sc-6nr46d-1"})(["display:flex;flex-direction:column;gap:16px;margin:16px 0;"])},7138:function(e,t,n){var r=n(5444),a=n(7294),l=n(9),i=n(4010),o=n(8295),c=n(8891),m=n(9864),d=l.default.table.withConfig({displayName:"CollectionTable__StyledCollectionTable",componentId:"sc-1l0jdfk-0"})(["width:100%;margin:auto;border-collapse:collapse;white-space:nowrap;td,th{line-height:32px;&:not(:first-child){text-align:center;width:32px;height:32px;display:none;@media(min-width:512px){display:table-cell;}}&:first-child{text-align:left;padding:0 8px;}}td{&.active{background-color:",";}}thead{tr th{background-color:",";color:",";}th:first-child{border-radius:8px 0 0 8px;}th:last-child{border-radius:0 8px 8px 0;}}tbody{tr{&:hover{background-color:",";}}}a{display:block;}"],(function(e){return e.theme.surface.bg}),(function(e){return e.theme.surface.nav}),(function(e){return e.theme.text.inverted}),(function(e){return e.theme.utils.hoverDark})),u=[1,2,3,4,5,6,7,8,9,10,11];t.Z=function(e){var t=e.data,n=e.semitones,l=void 0===n?[]:n,s=(0,i.ut)(),p=(0,i.f8)();return a.createElement(d,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),u.map((function(e,t){return a.createElement("th",{key:t},e)})))),a.createElement("tbody",null,t.map((function(e){var t=new(e.modelId===c.ww.Chord?o.Z:m.Z)(e.id,{root:p});return a.createElement("tr",null,a.createElement("td",null,a.createElement(r.rU,{to:"/browse/"+t.modelId+"/"+t.id+"/"+s},t.getShortName())),u.map((function(e,n){var r=t.intervals.findIndex((function(t){return t.pod[0]+1===e})),i=l.includes(e)?"active":"";if(r<0)return a.createElement("td",{key:n,className:i});var o=p?t.notes[r]:t.intervals[r];return a.createElement("td",{key:n,className:i},o.getName())})))}))))}}}]);
//# sourceMappingURL=d962607fcb94127ac56430f9ea7bc5e6e8e157a5-480efffba28f470ceb5f.js.map