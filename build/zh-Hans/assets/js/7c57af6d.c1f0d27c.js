"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[1390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},s="PAL Models",l={unversionedId:"chatGPT/tutorial-extras/pal-models",id:"chatGPT/tutorial-extras/pal-models",title:"PAL Models",description:"PAL Models\uff0c\u5168\u79f0\u4e3a Program-Aided Language Models\u3002\u9700\u8981\u5404\u4f4d\u6ce8\u610f\uff0c\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u771f\u7684\u975e\u5e38\u9ad8\u7ea7\uff0c\u751a\u81f3\u6211\u89c9\u5f97\u6709\u70b9 Hack\uff0c\u800c\u4e14\u7ecf\u8fc7\u6211\u7684\u591a\u6b21\u6d4b\u8bd5\uff0c\u6211\u89c9\u5f97\u4ee5 ChatGPT \u76ee\u524d\u7684\u80fd\u529b\uff0c\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/chatGPT/tutorial-extras/pal-models.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/pal-models",permalink:"/zh-Hans/docs/chatGPT/tutorial-extras/pal-models",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"2023\u5e748\u670810\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"chatGPT",previous:{title:"Self-Consistency",permalink:"/zh-Hans/docs/chatGPT/tutorial-extras/Self-Consistency"},next:{title:"OpenAI Playground \u4f7f\u7528\u65b9\u6cd5",permalink:"/zh-Hans/docs/chatGPT/tutorial-extras/openai-playground"}},i={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pal-models"},"PAL Models"),(0,a.kt)("p",null,"PAL Models\uff0c\u5168\u79f0\u4e3a Program-Aided Language Models\u3002\u9700\u8981\u5404\u4f4d\u6ce8\u610f\uff0c\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u771f\u7684\u975e\u5e38\u9ad8\u7ea7\uff0c\u751a\u81f3\u6211\u89c9\u5f97\u6709\u70b9 Hack\uff0c\u800c\u4e14\u7ecf\u8fc7\u6211\u7684\u591a\u6b21\u6d4b\u8bd5\uff0c\u6211\u89c9\u5f97\u4ee5 ChatGPT \u76ee\u524d\u7684\u80fd\u529b\uff0c\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4f46\u6211\u5728\u5f88\u591a PE \u7684\u6559\u7a0b\u91cc\u90fd\u6709\u770b\u5230\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u6240\u4ee5\u6211\u8fd9\u91cc\u5c31\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u6765\u81ea\u4e8e 2022 \u5e74\uff0cLuyu Gao ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2211.10435.pdf"},"\u7b49\u4eba\u7684\u7814\u7a76"),"\uff0c\u6839\u636e\u4ed6\u4eec\u7684\u7814\u7a76\uff0c\u5728 LLM \u6a21\u578b\u4e2d\uff0c\u5373\u4f7f\u4f7f\u7528\u4e86\u524d\u9762\u63d0\u5230\u7684 Chain of Thought \u7684\u65b9\u6cd5\uff0c\u4e5f\u672a\u5fc5\u80fd\u62ff\u5230\u7b54\u6848\uff0c\u8bba\u6587\u4e2d\u4f7f\u7528\u7684 prompt \u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Q: Roger has 5 tennis balls. He buys 2 more cans of\ntennis balls. Each can has 3 tennis balls. How many\ntennis balls does he have now?\nA: Roger started with 5 tennis balls. 2 cans of 3 tennis\nballs each is 6 tennis balls. 5 + 6 = 11. The answer is 11.\n\nQ: The bakers at the Beverly Hills Bakery baked 200\nloaves of bread on Monday morning. They sold 93 loaves\nin the morning and 39 loaves in the afternoon. A grocery\nstore returned 6 unsold loaves. How many loaves of\nbread did they have left?\n")),(0,a.kt)("p",null,"\u8bba\u6587\u91cc\u63d0\u5230\uff0c\u5f53\u5e74\u4ed6\u4eec\u7684\u6a21\u578b\u7684 Output \u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"A: The bakers started with 200 loaves. They sold 93 in\nthe morning and 39 in the afternoon. So they sold 93 +\n39 = 132 loaves. The grocery store returned 6 loaves. So\nthey had 200 - 132 - 6 = 62 loaves left. \nThe answer is 62.\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u73b0\u5728\u5c06\u8fd9\u4e2a prompt \u8f93\u5165\u5230\u6700\u65b0\u7684 ChatGPT \u7b54\u6848\u5df2\u7ecf\u662f\u6b63\u786e\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"A: The bakers baked 200 loaves of bread. They sold 93 + 39 = 132 loaves. After the grocery store returned 6 unsold loaves, the bakery had 200 - 132 + 6 = 74 loaves of bread left. The answer is 74.\n")),(0,a.kt)("p",null,"\u5f53\u5e74 Luyu Gao \u7684\u89e3\u51b3\u65b9\u6cd5\u662f\u5728 prompt \u91cc\u5f15\u5165\u4ee3\u7801\uff0c\u5e76\u5f15\u5bfc\u6a21\u578b\u4f7f\u7528\u4ee3\u7801\u6765\u8fd0\u7b97\u548c\u601d\u8003\uff0c\u6700\u540e\u7b54\u6848\u5c31\u662f\u6b63\u786e\u7684\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PAL001.png",src:r(5178).Z,width:"1378",height:"978"})))}d.isMDXComponent=!0},5178:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/PAL001-a4da9f4a3d1e1cecc513e61aa23ce8bd.png"}}]);