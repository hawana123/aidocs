"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[8799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:17},a="Tip 17: Reconstructing Prompts",s={unversionedId:"midjourney/mj-tutorial-tips/tips-17-describe",id:"midjourney/mj-tutorial-tips/tips-17-describe",title:"Tip 17: Reconstructing Prompts",description:"Simplest way is just asking the creator.",source:"@site/docs/midjourney/mj-tutorial-tips/tips-17-describe.md",sourceDirName:"midjourney/mj-tutorial-tips",slug:"/midjourney/mj-tutorial-tips/tips-17-describe",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-17-describe",draft:!1,tags:[],version:"current",lastUpdatedAt:1709801782,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"midjourney",previous:{title:"Tip 16: Change Camera & Lens",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-16-camera-lens"},next:{title:"\ud83d\ude80 Advanced",permalink:"/en/docs/category/-advanced-1"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tip-17-reconstructing-prompts"},"Tip 17: Reconstructing Prompts"),(0,i.kt)("p",null,"Simplest way is just asking the creator."),(0,i.kt)("p",null,"If you can't, Midjourney has an image-to-prompt feature. First enter /describe:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/1F561044-20D9-4FEB-BC08-B59BBFB872E1_2/Pu4U2CcTsM6jbPy40CPQxi6Cqm92cP9yvPqUDgJYtY4z/MJ092.png",alt:"MJ092.png"})),(0,i.kt)("p",null,"Click describe, then upload image and hit enter."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/0B2596AD-17E5-41D3-B34A-697FAF8DEEBD_2/vYKAgEFUwNbRALujXI1KsSUVVUJIFZUv6qxa6CRRC9kz/MJ093.png",alt:"MJ093.png"})),(0,i.kt)("p",null,"Midjourney will return possible prompts - click the 1,2,3,4 buttons under the image to directly send prompts to the bot for image generation. On the right are images generated from prompt #1 and #4. It seems decent for reverse engineering composition, subject, style of original images, but don't expect identical results:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/2FCC53CF-07B7-4251-B948-CCF8B63A0084_2/ROSf6SUiO3bhytuRc3Aeb8HcxYMqavypEXz9WMjIz5gz/MJ163.png",alt:"MJ163.png"})))}d.isMDXComponent=!0}}]);