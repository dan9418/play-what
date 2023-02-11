"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[562],{3457:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(7294),a=n(1074),o=n(9339),c=n(9117),i=n(8930),u=n(1082),l=n(1668),s=(n(935),n(2982)),d=n(6057),h=n(7318),p=n(1693),m=function(e,t,n){switch(e){case d.BY.Chord:return(n||"")+" "+t+" Chord";case d.BY.Scale:return(n||"")+" "+t+" Scale";default:return(n||"")+" "+t}},f=[{text:"Browse",to:"/browse",keywords:["all","chord","scale","browse"]},{text:"All Chords",to:(0,h.D)(d.BY.Chord),keywords:["all","chord"]},{text:"All Scales",to:(0,h.D)(d.BY.Scale),keywords:["all","scale","mode"]}],g=/\b[A-G](b|\sflat|\ssharp)*\b/gi,v=/\b[A-G]b\b/gi,b=function(e,t){var n=function(e){var t=[];return e.match(/maj|major/)&&t.push(d.Vp.Major),e.match(/min|minor/)&&t.push(d.Vp.Minor),e.match(/triad|chord/)&&t.push(d.Vp.Triad),e.match(/aug|augmented/)&&t.push(d.Vp.Augmented),e.match(/dim|diminished/)&&t.push(d.Vp.Diminished),e.match(/sus|suspended/)&&t.push(d.Vp.Suspended),e.match(/dom|dominant/)&&t.push(d.Vp.Dominant),e.match(/pent|pentatonic/)&&t.push(d.Vp.Pentatonic),e.match(/hex|hexatonic/)&&t.push(d.Vp.Hexatonic),e.match(/oct|octatonic/)&&t.push(d.Vp.Octatonic),e.match(/dia|diatonic/)&&t.push(d.Vp.Diatonic),e.match(/2|2nd|two|second/)&&t.push(d.Vp.Second),e.match(/3|3rd|three|third/)&&t.push(d.Vp.Third),e.match(/4|4th|four|fourth/)&&t.push(d.Vp.Fourth),e.match(/5|5th|five|fifth/)&&t.push(d.Vp.Fifth),e.match(/6|6th|six|sixth/)&&t.push(d.Vp.Sixth),e.match(/7|7th|seven|seventh/)&&t.push(d.Vp.Seventh),e.match(/beb|bebop/)&&t.push(d.Vp.Bebop),e.match(/blu|blues/)&&t.push(d.Vp.Blues),e.match(/mel|melodic|minor/)&&t.push(d.Vp.MelodicMode),e.match(/harm|harmonic|minor/)&&t.push(d.Vp.HarmonicMode),t}(e);return p.cI.filter((function(e){return!(t&&e.modelType!==t)})).map((function(t){return function(e,t,n){var r=0;return t.match(e.name.toLowerCase())&&(r=100),e.name.toLowerCase().match(new RegExp(t.split(" ").join("|"),"gi"))&&(r+=50),r+=n.filter((function(t){return e.tags.some((function(e){return e===t}))})).length,Object.assign({},e,{score:r})}(t,e,n)}))},y=function(e){if(!e)return f;var t=function(e){return e.trim().toLowerCase().replaceAll("#","-sharp").replaceAll(v,(function(e){return e.charAt(0)+"-flat"})).replaceAll(/[^A-Z1-9]/gi," ")}(e),n=function(e){var t=e.match(g);if(t&&t.length)return t[0].replaceAll(" ","-")}(t),r=function(e){return e.match("chord")?d.BY.Chord:e.match("scale")?d.BY.Scale:void 0}(t),a=function(e,t){return e.filter((function(e){return t||e.score})).sort((function(e,t){return t.score-e.score}))}(b(t,r),n),o=function(e,t){return e.map((function(e){var n=t?p.nq.get(t).name:void 0;return{text:m(e.modelType,e.name,n),to:(0,h.D)(e.modelType,e.modelId,t),aliases:e.aliases,modelType:e.modelType}}))}(a,n),c=function(e){for(var t=[],n=function(){var n=e[r];t.push(n),n.aliases&&n.aliases.forEach((function(e){return t.push({to:n.to,text:e+" "+(n.modelType===d.BY.Chord?" Chord":" Scale")})}))},r=0;r<e.length;r++)n();return t}(o),i=f.filter((function(e){return function(e,t){return void 0===e&&(e=""),t.some((function(t){return e.match(new RegExp(t,"gi"))}))}(t,e.keywords)}));return[].concat((0,s.Z)(c),(0,s.Z)(i))},x=n(8993),w=a.default.div.withConfig({displayName:"FilterList__StyledFilterList",componentId:"sc-8wtsdd-0"})(["border:1px solid ",";border-radius:8px;padding:8px;margin-bottom:16px;.top{display:flex;align-items:center;justify-content:space-between;}ul{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px;> li{margin:0  !important;list-style-type:none !important;}button{background-color:",";;border:1px solid ",";;color:",";padding:4px 8px;font-size:80%;:hover{background-color:",";}&.active{color:",";;background-color:",";}:disabled{color:",";background-color:",";cursor:not-allowed;}}}"],(function(e){return e.theme.action.interactive}),(function(e){return e.theme.utils.transparent}),(function(e){return e.theme.action.interactive}),(function(e){return e.theme.action.interactive}),(function(e){return e.theme.utils.hoverDark}),(function(e){return e.theme.text.inverted}),(function(e){return e.theme.action.interactive}),(function(e){return e.theme.text.inverted}),(function(e){return e.theme.text.secondary})),S=function(e){var t=e.tags,n=e.availableTags,a=e.selectedTags,o=e.setSelectedTags;return r.createElement(w,null,!1,r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e},r.createElement(x.Z,{onClick:function(){return function(e){a.includes(e)?o(a.filter((function(t){return t!==e}))):o([].concat((0,s.Z)(a),[e]))}(e)},className:a.includes(e)?"active":"",disabled:!n.includes(e)},e))}))))},E=n(4595),k=a.default.ul.withConfig({displayName:"SearchResultsCard__StyledSearchResultsList",componentId:"sc-jtbm82-0"})(["  font-size:110%;li a{padding:4px 0;display:block;&:focus,&:hover{padding:8px;background-color:",";color:white;border-radius:8px;}}"],(function(e){return e.theme.action.interactive})),C=[],V=function(e){var t=e.resultsRef,n=e.query,a=(0,r.useState)(!1),o=a[0],c=(a[1],(0,r.useState)([])),i=c[0],s=c[1],d=y(n),h=new Set;C.forEach((function(e){e.to.includes("root")||e.tags.forEach((function(e){return h.add(e)}))}));var p=l.Z.setToArray(h)||[];return r.createElement(E.ZP,{title:n?"Results":"Popular Pages",action:null},o&&r.createElement(S,{tags:p,availableTags:[],selectedTags:i,setSelectedTags:s}),r.createElement(k,null,d.map((function(e,n){return r.createElement("li",{key:e.text},r.createElement(u.rU,{id:"search-result="+n,to:e.to,ref:0===n?t:void 0,onKeyDown:function(t){if(t.preventDefault(),"Enter"===t.key&&(0,u.c4)(e.to),"ArrowDown"===t.key){var r=document.getElementById("search-result="+(n+1));r&&r.focus()}if("ArrowUp"===t.key){var a=document.getElementById("search-result="+(n-1));a&&a.focus()}}},e.text))}))))},_=((0,a.default)(x.Z).withConfig({displayName:"SearchResultsCard___StyledButtonInput",componentId:"sc-jtbm82-1"})(["color:",";background-color:transparent;text-decoration:underline;&.active{color:white;background-color:",";}"],(function(e){return e.theme.action.interactive}),(function(e){return e.theme.action.interactive})),(0,a.default)(c.Z).withConfig({displayName:"searchpage__StyledSearchPage",componentId:"sc-fipgqr-0"})([".search-bar{margin:32px auto;}"])),B=function(){var e=(0,o.Wd)("query")[0],t=(0,r.useState)(e||""),n=t[0],a=t[1],c=(0,r.useRef)(),u=(0,r.useRef)();return(0,r.useEffect)((function(){var t=(e?u:c).current;t&&t.focus()}),[]),r.createElement(_,{title:"Search"},r.createElement(i.Z,{searchRef:c,query:n,setQuery:a}),r.createElement(V,{resultsRef:u,query:n}))}},8930:function(e,t,n){n.d(t,{_:function(){return o}});var r=n(1082),a=n(7294),o=n(1074).default.form.withConfig({displayName:"SearchBar__StyledSearchBar",componentId:"sc-1je05sb-0"})(["width:100%;.search-bar{width:100%;max-width:512px;display:grid;grid-template-columns:1fr auto;input,button{padding:8px 8px;border-radius:8px;border:1px solid ",";}input{border-radius:8px 0 0 8px;border-right:none;}button{border-radius:0 8px 8px 0;cursor:pointer;color:white;font-weight:bold;background-color:",";&:hover{background-color:",";}border-left:none;padding:8px 16px;display:flex;align-items:center;justify-content:center;}}"],(function(e){return e.theme.utils.border}),(function(e){return e.theme.action.interactive}),(function(e){return e.theme.action.active}));t.Z=function(e){var t=e.searchRef,n=e.query,c=e.setQuery,i=e.placeholder,u=(0,a.useState)(""),l=u[0],s=u[1],d=void 0===n?l:n,h=void 0===c?s:c;return a.createElement(o,{role:"search",onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value,n=new URLSearchParams({query:t}),a="/search/"+(n?"?"+n.toString():"");return(0,r.c4)(a),!1}},a.createElement("div",{className:"search-bar"},a.createElement("input",{type:"search",id:"site-search",name:"query",ref:t,onChange:function(e){h(e.target.value)},value:d,placeholder:i||"Search the site..."}),a.createElement("button",{type:"submit"},"Search")))}},4595:function(e,t,n){n.d(t,{Ol:function(){return u},rg:function(){return i}});var r=n(3366),a=n(7294),o=n(1074),c=["title","subtitle","action","children","level"],i=o.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),u=function(e){var t=e.title,n=e.level,r=void 0===n?2:n,o=e.action,c=void 0===o?null:o,i="h"+r;return a.createElement("div",{className:"header"},a.createElement(i,null,t),c)};t.ZP=function(e){var t=e.title,n=e.subtitle,o=e.action,l=e.children,s=e.level,d=(0,r.Z)(e,c);return a.createElement(i,d,t&&a.createElement(u,{title:t,action:o,level:s}),n&&a.createElement(u,{title:n,level:s+1}),l)}},7318:function(e,t,n){n.d(t,{D:function(){return r}});var r=function(e,t,n){return"/browse/"+e+(t?"/"+t:"")+(n?"/root/"+n:"")+"/"}}}]);
//# sourceMappingURL=component---src-components-pages-search-page-tsx-2b0681c59b13fecf11fd.js.map