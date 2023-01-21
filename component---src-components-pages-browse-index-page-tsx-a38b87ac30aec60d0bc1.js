"use strict";(self.webpackChunkplay_what=self.webpackChunkplay_what||[]).push([[567],{2269:function(e,t,n){var i=n(7294),l=n(1074).default.div.withConfig({displayName:"ColumnManager__StyledColumnManager",componentId:"sc-1oemihq-0"})(["display:grid;gap:16px;grid-template-columns:1fr;"," ",""],(function(e){var t=e.$tablet;return t?"\n        @media(min-width: 512px) {\n            grid-template-columns: "+t.join(" ")+"\n        }\n    ":""}),(function(e){var t=e.$desktop;return t?"\n        @media(min-width: 1024px) {\n            grid-template-columns: "+t.join(" ")+"\n        }\n    ":""}));t.Z=function(e){var t=e.children,n=e.tablet,r=e.desktop;return i.createElement(l,{$tablet:n,$desktop:r},t)}},5896:function(e,t,n){n.r(t);var i=n(1597),l=n(7294),r=n(1074),a=n(1586),o=n(9544),c=n(8500),u=n(2269),d=n(1090),s=n(1011),m=n(6291),f=n(5917),p=(0,r.default)(d.Z).withConfig({displayName:"indexpage__StyledBrowsePage",componentId:"sc-115vkqw-0"})(["a.all{display:block;font-size:140%;text-align:right;margin-top:32px;}"]);t.default=function(e){var t=(0,a.qO)();return l.createElement(p,{title:"Browse"},l.createElement(u.Z,{desktop:["1fr","1fr"]},l.createElement(s.ZP,{title:"Chords"},l.createElement(f.L,{items:[["Major Triad",(0,c.D)(o.BY.Chord,o.X.MajTriad,t)],["Minor Triad",(0,c.D)(o.BY.Chord,o.X.MinTriad,t)],["Major 7th",(0,c.D)(o.BY.Chord,o.X.Maj7,t)],["Minor 7th",(0,c.D)(o.BY.Chord,o.X.Min7,t)],["Dominant 7th",(0,c.D)(o.BY.Chord,o.X.Dom7,t)],["Half-Diminished 7th",(0,c.D)(o.BY.Chord,o.X.HalfDim7,t)]]}),l.createElement(i.rU,{to:(0,c.D)(o.BY.Chord),className:"all"},"See All Chords ",l.createElement(m.ZP,{iconId:"next",size:12}))),l.createElement(s.ZP,{title:"Scales"},l.createElement(f.L,{items:[["Major (Ionian)",(0,c.D)(o.BY.Scale,o.xl.Ionian,t)],["Natural Minor (Aeolian)",(0,c.D)(o.BY.Scale,o.xl.Aeolian,t)],["Melodic Minor",(0,c.D)(o.BY.Scale,o.xl.MelodicMinor,t)],["Harmonic Minor",(0,c.D)(o.BY.Scale,o.xl.HarmonicMinor,t)],["Major Pentatonic",(0,c.D)(o.BY.Scale,o.xl.MajorPentatonic,t)],["Minor Pentatonic",(0,c.D)(o.BY.Scale,o.xl.MinorPentatonic,t)]]}),l.createElement(i.rU,{to:(0,c.D)(o.BY.Scale),className:"all"},"See All Scales ",l.createElement(m.ZP,{iconId:"next",size:12})))))}},1011:function(e,t,n){n.d(t,{Ol:function(){return c},rg:function(){return o}});var i=n(3366),l=n(7294),r=n(1074),a=["title","subtitle","action","children","level"],o=r.default.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-c2yhvp-0"})(["background:",";width:100%;border-radius:16px;padding:16px;.header{margin-bottom:16px;display:flex;align-items:center;gap:8px;justify-content:space-between;}"],(function(e){return e.theme.surface.card})),c=function(e){var t=e.title,n=e.level,i=void 0===n?2:n,r=e.action,a=void 0===r?null:r,o="h"+i;return l.createElement("div",{className:"header"},l.createElement(o,null,t),a)};t.ZP=function(e){var t=e.title,n=e.subtitle,r=e.action,u=e.children,d=e.level,s=(0,i.Z)(e,a);return l.createElement(o,s,t&&l.createElement(c,{title:t,action:r,level:d}),n&&l.createElement(c,{title:n,level:d+1}),u)}},5735:function(e,t,n){n.d(t,{X:function(){return r},b:function(){return l}});var i=n(1074),l=(0,i.css)(["li{margin-left:8px;&:not(:first-child){margin-top:4px;}}h1,h2,h3,h4,h5,h6,h7{font-weight:bold;}section{margin-left:8px;&:not(:first-child){margin-top:24px;}}ul{&:not(:first-child){margin-top:8px;margin-left:8px;}}"]),r=(0,i.css)(["li{list-style-type:disc;margin:8px 0 8px 16px;}"])},5917:function(e,t,n){n.d(t,{L:function(){return u},a:function(){return c}});var i=n(1074),l=n(1597),r=n(7294),a=n(5735),o=function(e){var t=e.title,n=e.subtitle,i=e.level,l="h"+i,a="h"+(i+1);return r.createElement(r.Fragment,null,t&&r.createElement(l,null,t),n&&r.createElement(a,null,n))},c=function e(t){var n=t.title,i=t.subtitle,a=t.items,c=t.lists,u=t.level,s=void 0===u?1:u,m=t.prefix,f=void 0===m?"":m,p=t.styles;return r.createElement(d,{$_css:p},r.createElement(o,{title:n,subtitle:i,level:s}),r.createElement("ul",null,a&&a.length>0&&a.map((function(e){var t=e.text,n=e.link;return r.createElement("li",{key:t},n?r.createElement(l.rU,{to:""+f+n},t):t)})),c&&r.createElement("li",null,c.map((function(t){return r.createElement(e,Object.assign({},t,{key:t.title,level:s+1,prefix:f}))})))))},u=function(e){var t=e.items.map((function(e){return Array.isArray(e)?{text:e[0],link:e[1]}:{text:e}}));return r.createElement(c,{items:t,styles:a.X})},d=(0,i.default)("section").withConfig({displayName:"List___StyledSection",componentId:"sc-we9o98-0"})(["",""],(function(e){return e.$_css}))},8500:function(e,t,n){n.d(t,{D:function(){return i}});var i=function(e,t,n){return"/browse/"+e+(t?"/"+t:"")+(n?"/root/"+n:"")+"/"}}}]);
//# sourceMappingURL=component---src-components-pages-browse-index-page-tsx-a38b87ac30aec60d0bc1.js.map