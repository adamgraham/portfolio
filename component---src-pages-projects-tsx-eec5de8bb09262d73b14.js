"use strict";(self.webpackChunk_adamgraham_portfolio=self.webpackChunk_adamgraham_portfolio||[]).push([[789],{2761:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var a=t(5043),l=t(6942),i=t.n(l),c=t(8007),r=t(6540),n=t(1885),o=t(3815),d=t(4848);const h=["React","iOS","Unity","VR/AR","3D","2D"];function p(e){let{data:s,location:t}=e;const l=(0,r.useMemo)((()=>{const e=new URLSearchParams(null==t?void 0:t.search);return e.has("filter")?e.get("filter"):null}),[t]),p=(0,r.useMemo)((()=>l?s.json.categories.map((e=>{const s=e.projects.map((e=>({...e,hidden:!e.tags.includes(l)})));return{title:e.title,projects:s,empty:s.every((e=>e.hidden))}})):s.json.categories),[s,l]);return(0,d.jsx)(n.YW,{id:"projects",location:t,metadata:{url:o.wW,title:"Adam Graham • Projects"},children:(0,d.jsxs)("article",{className:"projects-list container-lg",children:[(0,d.jsxs)("section",{className:"projects-list__header",children:[(0,d.jsx)("h1",{className:"display-4",children:"Projects"}),(0,d.jsx)("div",{className:"projects-list__filters",children:h.map((e=>(0,d.jsx)("button",{onClick:()=>{l===e?(0,c.navigate)(`${t.pathname}${t.hash}`,{replace:!0}):(0,c.navigate)(`${t.pathname}${t.hash}?filter=${e}`,{replace:!0})},children:(0,d.jsx)(a.Ex,{className:i()({"badge--selected":l===e}),pill:!0,children:e})},e)))})]}),p.map((e=>(0,d.jsxs)("section",{className:i()("projects-list__category",{"projects-list__category--empty":e.empty}),children:[(0,d.jsx)("h2",{className:"h6",children:e.title}),(0,d.jsx)("ul",{children:e.projects.map((e=>(0,d.jsx)("li",{className:i()("projects-list__item",{"projects-list__item--hidden":e.hidden}),children:(0,d.jsxs)(a.N_,{as:e.link?c.Link:"a",external:Boolean(e.externalLink&&!e.link),target:"_blank",to:e.link||e.externalLink,unstyled:!0,children:[(0,d.jsxs)("div",{className:"projects-list__text",children:[(0,d.jsx)("span",{className:"projects-list__title",children:e.title}),(0,d.jsx)("span",{className:"projects-list__description",children:e.description})]}),(0,d.jsx)("hr",{className:"projects-list__line"}),(0,d.jsx)("div",{className:"projects-list__date",children:e.date})]},e.title)},e.title)))})]},e.title)))]})})}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-eec5de8bb09262d73b14.js.map