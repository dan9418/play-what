"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[891],{5929:function(e,t,n){n.d(t,{Z:function(){return P}});var a=n(7294),o=n(8804),r=n(9166),l=n(2497);const i=o.default.div.withConfig({displayName:"Card__StyledCardHeader",componentId:"sc-1cjkl41-0"})(["margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;"]),d=e=>{let{title:t,level:n=2,action:o=null}=e;const r="h"+n;return a.createElement(i,null,a.createElement(r,null,t),o)},s=o.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-1cjkl41-1"})(["background:",";width:100%;border-radius:16px;padding:16px;"],(e=>{var t,n;return null===(t=e.theme)||void 0===t||null===(n=t.surface)||void 0===n?void 0:n.card}));var c=e=>{let{title:t,subtitle:n,action:o,children:r,level:l=1,...i}=e;return a.createElement(s,i,t&&a.createElement(d,{title:t,action:o,level:l}),n&&a.createElement(d,{title:n,level:l+1}),r)},u=n(5785),m=n(930),p=n(572);let b;!function(e){e.Diminished="diminished",e.Minor="minor",e.Perfect="perfect",e.Major="major",e.Augmented="augmented"}(b||(b={}));const f=new Map([[b.Diminished,{presetId:b.Diminished,name:"Diminished",symbol:"d",down:void 0,up:b.Minor}],[b.Minor,{presetId:b.Minor,name:"Minor",symbol:"m",down:b.Diminished,up:b.Major}],[b.Perfect,{presetId:b.Perfect,name:"Perfect",symbol:"P",down:b.Diminished,up:b.Augmented}],[b.Major,{presetId:b.Major,name:"Major",symbol:"M",down:b.Minor,up:b.Augmented}],[b.Augmented,{presetId:b.Augmented,name:"Augmented",symbol:"A",down:b.Major,up:void 0}]]);p.Z.mapToArray(f);var h=n(5654),g=n(3794);const y=e=>{const t=(0,g.td)(e),[n,a]=t,o=m.g$[a];if(!o)return"?";const r=o[0],l=r,i=o[o.length-1];let d,s;1===o.length?(d=r,s=f.get(b.Perfect)):n<=l.pod[0]?(d=l,s=f.get(b.Minor)):n>=i.pod[0]&&(d=i,s=f.get(b.Major));const c=d.pod[0]-t[0];if(0===c)return""+s.symbol+(a+1);c>0?s=f.get(b.Diminished):c<0&&(s=f.get(b.Augmented));const u=Math.abs(c);let p=""+s.symbol.repeat(u)+(a+1);const y=(e=>e[0]>h.Hs[0]||e[1]>h.Hs[1])(e);return y&&(p=(0,m.U5)(p)),p};var v=n(9089),I=n(6563),S=n(7996),w=n(1883);const C=o.default.table.withConfig({displayName:"Table__StyledTable",componentId:"sc-1tfkkti-0"})([""]);var E=(0,o.default)(C).withConfig({displayName:"Table___StyledStyledTable",componentId:"sc-1tfkkti-1"})(["",""],(e=>e.$_css));const M=e=>null==e||!1===e,x=e=>{let{index:t,isHeader:n,content:o,colSpan:r,className:l,link:i}=e;const d=n?"th":"td",s=i?w.rU:a.Fragment,c=i?{to:i}:{};return a.createElement(d,{colSpan:r,className:l},a.createElement(s,c,o||""))},k=e=>{let{cols:t,isHeader:n,className:o,headerColIndicies:r=[]}=e;return a.createElement("tr",{className:o},t.map(((e,t)=>{if(M(e))return null;const o=(e=>"object"==typeof e&&null!==e&&e.hasOwnProperty("content"))(e),l=o?e:{content:e};return a.createElement(x,Object.assign({key:t,index:t,isHeader:n||r.includes(t)},l))})))},D=e=>{let{Tag:t,rows:n,headerColIndicies:o}=e;return a.createElement(t,null,n.map(((e,n)=>M(e)?null:a.createElement(k,Object.assign({key:n,isHeader:"tbody"!==t,headerColIndicies:o},e)))))},N=e=>{let{thead:t,tfoot:n,tbody:o,styles:r,colGroups:l,caption:i,headerColIndicies:d,className:s}=e;return a.createElement(E,{className:s,$_css:r},l&&a.createElement("colgroup",null,l.map(((e,t)=>a.createElement("col",Object.assign({key:t},e))))),i&&a.createElement("caption",null,i),t&&a.createElement(D,{Tag:"thead",rows:t,headerColIndicies:d}),n&&a.createElement(D,{Tag:"tfoot",rows:n,headerColIndicies:d}),o&&a.createElement(D,{Tag:"tbody",rows:o,headerColIndicies:d}))},T=[1,2,3,4,5,6,7,8,9,10,11,12],_=(0,o.css)(["width:100%;margin:auto;border-collapse:collapse;white-space:nowrap;td{&:not(:first-child){font-size:80%;}}td,th{line-height:32px;text-align:center;&:not(:first-child){width:32px;height:32px;display:none;","{display:table-cell;}}&:first-child{text-align:left;padding:0 8px;}}td{&.active{background-color:",";}}thead{text-transform:uppercase;font-size:80%;@media (max-width:","px){display:none;}tr th{background-color:",";color:",";}th:first-child{border-radius:8px 0 0 8px;}th:last-child{border-radius:0 8px 8px 0;}}a{display:block;}"],S.z.Tablet,(e=>{var t,n;return null===(t=e.theme)||void 0===t||null===(n=t.surface)||void 0===n?void 0:n.bg}),S.U.Tablet-1,(e=>{var t,n;return null===(t=e.theme)||void 0===t||null===(n=t.surface)||void 0===n?void 0:n.nav}),(e=>{var t;let{theme:n}=e;return null==n||null===(t=n.text)||void 0===t?void 0:t.inverted}));var j=e=>{let{data:t,semitones:n=[],rootNotePreset:o,presetType:r}=e;return a.createElement(N,{styles:_,thead:[{cols:["Name",{colSpan:12,content:o?"Notes":"Intervals"}]}],tbody:t.map(((e,t)=>({cols:[{link:(0,I.D)(r,e.presetId,o?o.presetId:void 0),content:(0,g.mw)(e,o)}].concat((0,u.Z)(T.map(((t,a)=>((e,t,n,a)=>{const o=e.findIndex((e=>e[0]+1===t)),r=n.includes(t)?"active":void 0;return o<0?{className:r,content:""}:{className:r,content:a?(0,v.oY)((0,g._l)(a.pod,e[o])):y(e[o])}})(e.pods,t,n,o)))))})))})};const Z=(0,o.default)(c).withConfig({displayName:"CollectionCard__StyledCollectionCard",componentId:"sc-z49j1s-0"})(["p{margin:16px 0;}"]);var F=e=>{let{description:t,data:n,presetType:o,...r}=e;return a.createElement(Z,r,t&&a.createElement("p",null,t),a.createElement(j,{presetType:o,data:n}))};const A=(0,o.default)(l.Z).withConfig({displayName:"CollectionPage__StyledCollectionPage",componentId:"sc-1yvroeq-0"})([".intro{padding:0 16px;margin-bottom:16px;}"]);var P=e=>{let{title:t,subtitle:n,intro:o,presetType:l,cards:i}=e;return a.createElement(A,{title:t,subtitle:n},a.createElement("div",null,a.createElement("p",{className:"intro"},o)),a.createElement(r.Z,null,a.createElement(r.Z,null,i.map((e=>{const{title:t,description:n,data:o}=e;return a.createElement(F,{presetType:l,title:t,description:n,data:o})})))))}},9166:function(e,t,n){var a=n(7294),o=n(8804),r=n(7996);const l=o.default.div.withConfig({displayName:"ColumnManager__StyledColumnManager",componentId:"sc-n09hx6-0"})(["display:grid;gap:16px;grid-template-columns:1fr;"," ",""],(e=>{let{$tablet:t}=e;return t?"\n        "+r.z.Tablet+" {\n            grid-template-columns: "+t.join(" ")+"\n        }\n    ":""}),(e=>{let{$desktop:t}=e;return t?"\n        "+r.z.Desktop+" {\n            grid-template-columns: "+t.join(" ")+"\n        }\n    ":""}));t.Z=e=>{let{tablet:t,desktop:n,children:o}=e;return a.createElement(l,{$tablet:t,$desktop:n},o)}},9089:function(e,t,n){n.d(t,{oY:function(){return h}});var a=n(572);let o;!function(e){e.DoubleFlat="double-flat",e.Flat="flat",e.Natural="natural",e.Sharp="sharp",e.DoubleSharp="double-sharp"}(o||(o={}));const r=new Map([[o.DoubleFlat,{presetId:o.DoubleFlat,name:"Double Flat",symbol:"bb",offset:-2}],[o.Flat,{presetId:o.Flat,name:"Flat",symbol:"b",offset:-1}],[o.Natural,{presetId:o.Natural,name:"Natural",symbol:"♮",offset:0}],[o.Sharp,{presetId:o.Sharp,name:"Sharp",symbol:"#",offset:1}],[o.DoubleSharp,{presetId:o.DoubleSharp,name:"Double Sharp",symbol:"##",offset:2}]]);a.Z.mapToArray(r);var l=n(1261),i=n(6921);let d;!function(e){e.Tonic="tonic",e.Supertonic="supertonic",e.Mediant="mediant",e.Subdominant="submediant",e.Dominant="dominant",e.Submediant="submediant",e.Subtonic="subtonic"}(d||(d={}));const s=new Map([[d.Tonic,{presetId:d.Tonic,name:"Tonic",pod:[0,0]}],[d.Supertonic,{presetId:d.Supertonic,name:"Supertonic",pod:[2,1]}],[d.Mediant,{presetId:d.Mediant,name:"Mediant",pod:[4,2]}],[d.Subdominant,{presetId:d.Subdominant,name:"Subdominant",pod:[5,3]}],[d.Dominant,{presetId:d.Dominant,name:"Dominant",pod:[7,4]}],[d.Submediant,{presetId:d.Submediant,name:"Submediant",pod:[9,5]}],[d.Subtonic,{presetId:d.Subtonic,name:"Subtonic",pod:[11,6]}]]),c=a.Z.mapToArray(s).map(((e,t)=>[i.TR+e.pod[0],l.uN+e.pod[1]]));n(9531),n(5654);var u=n(3794);n(8337);const m=e=>{const t=(e=>{const[t,n]=(0,u.td)(e);let a=t-c[n][0];return a>5&&(a-=12),a<-5&&(a+=12),a})(e);return t>0?r.get(o.Sharp).symbol.repeat(t):t<0?r.get(o.Flat).symbol.repeat(-t):""},p=e=>e[0],b=e=>(e=>{const t=(0,u.YF)(e);return l.ke[t].id})(e),f=e=>{const t=b(e),n=m(e),a=(e=>{const t=Math.floor(p(e)/12);return t+4})(e);return{spelling:t,accidental:n,octave:a}},h=function(e,t){void 0===t&&(t={});const{spelling:n,accidental:a,octave:o}=f(e);return""+n+a+(t.includeOctave?o:"")}},3794:function(e,t,n){n.d(t,{YF:function(){return d},_l:function(){return l},mw:function(){return s},td:function(){return i}});n(2750);var a=n(9089),o=n(5654),r=n(8337);n(2643);const l=(e,t)=>[e[0]+t[0],e[1]+t[1]],i=function(e,t){void 0===t&&(t=o.Hs);return[r.Z.modulo(e[0],t[0]),r.Z.modulo(e[1],t[1])]},d=e=>r.Z.modulo(e[1],o.Hs[1]),s=(e,t)=>(t?(0,a.oY)(t.pod)+" ":"")+e.name},6563:function(e,t,n){n.d(t,{D:function(){return a}});const a=(e,t,n)=>"/browse/"+e+(t?"/"+t:"")+(n?"/root/"+n:"")+"/"},8337:function(e,t){const n={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},a=(e,t)=>(e%t+t)%t;t.Z={modulo:a,moduloSum:(e,t,n)=>a(e-0+(t-0),n)+0,romanize:e=>{let t="";for(const o of Object.keys(n)){var a=Math.floor(e/n[o]);if(e-=a*n[o],t+=o.repeat(a),0===e)return t}return t}}}}]);
//# sourceMappingURL=0239f6cf0d563deb0c24e35672976e4da85e0c3d-b0c9b82827ff537b63e6.js.map