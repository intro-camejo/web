"use strict";(self.webpackChunkaninfo_web_catedra=self.webpackChunkaninfo_web_catedra||[]).push([[3608],{82:(e,a,r)=>{r.r(a),r.d(a,{default:()=>m});r(7294);var t=r(3692),n=r(5999),s=r(8771),i=r(757),c=r(4126),l=r(2757),o=r(5893);function d(e){let{year:a,posts:r}=e;const n=(0,i.P)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{as:"h3",id:a,children:a}),(0,o.jsx)("ul",{children:r.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(t.Z,{to:e.metadata.permalink,children:[(a=e.metadata.date,n.format(new Date(a)))," - ",e.metadata.title]})},e.metadata.date);var a}))})]})}function h(e){let{years:a}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},a)))})})})}function m(e){let{archive:a}=e;const r=(0,n.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,n.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const a=e.reduce(((e,a)=>{const r=a.metadata.date.split("-")[0],t=e.get(r)??[];return e.set(r,[a,...t])}),new Map);return Array.from(a,(e=>{let[a,r]=e;return{year:a,posts:r}}))}(a.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{title:r,description:t}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.Z,{as:"h1",className:"hero__title",children:r}),(0,o.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},757:(e,a,r)=>{r.d(a,{P:()=>n});var t=r(2263);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:a}}=(0,t.Z)(),r=function(){const{i18n:{currentLocale:e,localeConfigs:a}}=(0,t.Z)();return a[e].calendar}();return new Intl.DateTimeFormat(a,{calendar:r,...e})}}}]);