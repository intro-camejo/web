"use strict";(self.webpackChunkaninfo_web_catedra=self.webpackChunkaninfo_web_catedra||[]).push([[85],{6499:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(9275),i=t(3077),s=t(1042),l=t(3364),r=t(5893);function c(e){let{className:n}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(i.cI,{}),className:(0,a.Z)(n,s.k.common.unlistedBanner),children:(0,r.jsx)(i.eU,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.T$,{}),(0,r.jsx)(c,{...e})]})}},1637:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var a=t(9275),i=t(3077),s=t(1042),l=t(3364),r=t(5893);function c(e){let{className:n}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(i.ht,{}),className:(0,a.Z)(n,s.k.common.draftBanner),children:(0,r.jsx)(i.xo,{})})}var o=t(6499);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||a.unlisted)&&(0,r.jsx)(o.Z,{}),a.draft&&(0,r.jsx)(c,{})]})}},3967:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(7294);var a=t(9275),i=t(8771),s=t(1042),l=t(4126),r=t(897),c=t(6306),o=t(1637),d=t(5054);const m={mdxPageWrapper:"mdxPageWrapper_TZLa"};var u=t(5893);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:x,description:v,frontMatter:g,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:b,wrapperClassName:L,hide_table_of_contents:N}=g,k=f.image??g.image,H=!!(x||j||p);return(0,u.jsx)(i.FG,{className:(0,a.Z)(L??s.k.wrapper.mdxPages,s.k.page.mdxPage),children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.d,{title:h,description:v,keywords:b,image:k}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.Z)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.Z)("col",!N&&"col--8"),children:[(0,u.jsx)(o.Z,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.Z,{children:(0,u.jsx)(n,{})})}),H&&(0,u.jsx)(d.Z,{className:(0,a.Z)("margin-top--sm",s.k.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:j,lastUpdatedBy:p})]}),!N&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.Z,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},6306:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(9275),i=t(6025);const s={tableOfContents:"tableOfContents_IS5x",docItemContainer:"docItemContainer_kAdk"};var l=t(5893);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},6025:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7294),i=t(1217);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(3692),u=t(5893);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(f);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const x=(0,i.L)(),v=o??x.tableOfContents.minHeadingLevel,g=m??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[r,c,v,g])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:r,...f})}},3077:(e,n,t)=>{t.d(n,{T$:()=>c,cI:()=>l,eU:()=>r,ht:()=>o,xo:()=>d});t(7294);var a=t(5999),i=t(5742),s=t(5893);function l(){return(0,s.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);