"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[3498],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),o=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=o(n),s=a,g=d["".concat(u,".").concat(s)]||d[s]||k[s]||l;return n?r.createElement(g,p(p({ref:e},m),{},{components:n})):r.createElement(g,p({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6886:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},p="Midjourney Prompt \u9ad8\u7ea7\u53c2\u6570",i={unversionedId:"midjourney/mj-tutorial-extras/midjourney-extras-parameters",id:"midjourney/mj-tutorial-extras/midjourney-extras-parameters",title:"Midjourney Prompt \u9ad8\u7ea7\u53c2\u6570",description:"Quality",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/midjourney/mj-tutorial-extras/midjourney-extras-parameters.md",sourceDirName:"midjourney/mj-tutorial-extras",slug:"/midjourney/mj-tutorial-extras/midjourney-extras-parameters",permalink:"/docs/midjourney/mj-tutorial-extras/midjourney-extras-parameters",draft:!1,tags:[],version:"current",lastUpdatedAt:1712031792,formattedLastUpdatedAt:"2024\u5e744\u67082\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"midjourney",previous:{title:"\ud83d\ude80 Advanced",permalink:"/docs/category/-advanced-1"},next:{title:"Midjourney \u5404\u7248\u672c\u5dee\u5f02",permalink:"/docs/midjourney/mj-tutorial-extras/differences-between-versions"}},u={},o=[{value:"Quality",id:"quality",level:2},{value:"Seed",id:"seed",level:2},{value:"Image Weight",id:"image-weight",level:2},{value:"Stop",id:"stop",level:2},{value:"Style",id:"style",level:2},{value:"Uplight",id:"uplight",level:2},{value:"Upbeta",id:"upbeta",level:2},{value:"Video",id:"video",level:2}],m={toc:o},d="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"midjourney-prompt-\u9ad8\u7ea7\u53c2\u6570"},"Midjourney Prompt \u9ad8\u7ea7\u53c2\u6570"),(0,a.kt)("h2",{id:"quality"},"Quality"),(0,a.kt)("p",null,"\u56fe\u7247\u8d28\u91cf\u662f\u53e6\u4e00\u4e2a\u6211\u6bd4\u8f83\u5e38\u7528\u7684\u5c5e\u6027\uff0c\u9996\u5148\u9700\u8981\u6ce8\u610f\u8fd9\u4e2a\u53c2\u6570\u5e76\u4e0d\u5f71\u54cd\u5206\u8fa8\u7387\uff0c\u5e76\u4e0d\u6539\u53d8\u5206\u8fa8\u7387\uff0c\u5e76\u4e0d\u6539\u53d8\u5206\u8fa8\u7387\uff08\u91cd\u8981\u7684\u4e8b\u60c5\u8981\u8bf4\u4e09\u904d\uff09\u3002"),(0,a.kt)("p",null,"\u5b83\u6539\u53d8\u7684\u66f4\u591a\u7684\u662f\u56fe\u7247\u7684\u7ec6\u8282\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u4e0b\u65b9\u7b2c\u4e00\u5f20\u56fe\u662f 0.25 \uff0c\u4f60\u4f1a\u53d1\u73b0\u6700\u53f3\u8fb9\u7684\u56fe\u7ec6\u8282\u6bd4\u7b2c\u4e00\u5f20\u56fe\u591a\u5f88\u591a\u5f88\u591a\u3002"),(0,a.kt)("p",null,"\u4f46\u4f4e Quality \u4e5f\u4e0d\u662f\u6ca1\u6709\u597d\u5904\uff0c\u5b83\u7684\u597d\u5904\u662f\u751f\u6210\u56fe\u7247\u7684\u65f6\u95f4\u4f1a\u66f4\u5feb\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f60\u53ef\u4ee5\u82b1\u66f4\u5c11\u7684 GPU \u65f6\u95f4\uff0c\u6211\u4e00\u822c\u4f1a\u7528\u8fd9\u4e2a\u53c2\u6570\u505a\u4e00\u4e9b\u63a2\u7d22\u6027\u751f\u6210\u56fe\uff0c\u5927\u65b9\u5411\u6ca1\u95ee\u9898\uff0c\u518d\u8ba9\u6a21\u578b\u4e30\u5bcc\u7ec6\u8282\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A021D1BD-049B-411E-92AE-83B5A5EEF86C_2/pII20DRpt5ZI4ukp3g6NZZVr0aHO64xKepAPyex33Rgz/MJ61.png",alt:"MJ61.png"})),(0,a.kt)("p",null,"\u9664\u4e86\u5728 prompt \u91cc\u8f93\u5165\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u8bbe\u7f6e\u91cc\uff0c\u8c03\u6574\u9ed8\u8ba4\u7684\u7248\u672c\uff0c\u76f8\u5173\u6559\u7a0b\u8bf7\u67e5\u9605 Midjourney \u57fa\u7840\u8bbe\u7f6e\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u8c03\u7528\u65b9\u6cd5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u4f7f\u7528\u6848\u4f8b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V4")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V3")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"niji")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u5173\u952e\u8bcd\u540e\u52a0\u7a7a\u683c\u5e26\u4e0a\u53c2\u6570\uff1a",(0,a.kt)("ul",null,(0,a.kt)("li",null,"--q \u6216\u8005 \u2014q"),(0,a.kt)("li",null,"--quality \u6216\u8005\u2014quality"))),(0,a.kt)("td",{parentName:"tr",align:null},"woodcut birch forest --q .25"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u9ed8\u8ba4\u4e3a 1"),(0,a.kt)("li",null,"\u4ec5\u652f\u6301 .25\uff0c.5 \uff0c1 \u548c 2\uff0c\u5982\u679c\u8f93\u5165\u5927\u4e8e 2 \u4f1a\u88ab\u964d\u7ea7\u5230 2"))),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("h2",{id:"seed"},"Seed"),(0,a.kt)("p",null,"\u4f60\u5728\u4f7f\u7528 Midjourney \u7684\u65f6\u5019\uff0c\u5e94\u8be5\u4f1a\u53d1\u73b0\uff0c\u5373\u4f7f\u7528\u76f8\u540c\u7684 prompt\uff0c\u6bcf\u6b21\u751f\u6210\u7684\u56fe\u7247\u90fd\u4f1a\u4e0d\u4e00\u6837\u3002\u5176\u5b9e Midjourney \u4f1a\u4e3a\u6bcf\u4e2a\u751f\u6210\u7684\u56fe\u7247\u6253\u4e0a\u4e00\u4e2a seed \u7f16\u53f7\uff0c\u4f60\u53ef\u4ee5\u5728 prompt \u91cc\u52a0\u5165\u8fd9\u4e2a seed \u53c2\u6570\uff0c\u8fd9\u6837\u6bcf\u6b21\u751f\u6210\u7684\u56fe\u7247\u5c31\u4e00\u6837\u4e86\uff0c\u4ee5\u4e0b\u662f\u5b98\u65b9\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E0261A5A-AAA7-4836-B8FB-CACD9E70449F_2/AYWYIqo2hRdREXyboPmPwwdNayCkNi8HC8pMLIB19rYz/MJ026.png",alt:"MJ026.png"})),(0,a.kt)("p",null,"\u8c03\u7528\u65b9\u6cd5\u5f88\u7b80\u5355\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u8c03\u7528\u65b9\u6cd5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u4f7f\u7528\u6848\u4f8b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V4")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V3")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"niji")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u5173\u952e\u8bcd\u540e\u52a0\u7a7a\u683c\u5e26\u4e0a\u53c2\u6570\uff1a",(0,a.kt)("ul",null,(0,a.kt)("li",null,"--seed \u6216\u8005 \u2014seed"),(0,a.kt)("li",null,"--sameseed \u6216\u8005\u2014sameseed"))),(0,a.kt)("td",{parentName:"tr",align:null},"woodcut birch forest --seed 123"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u8f93\u5165\u5b8c\u5168\u4e00\u6837\u7684\u6587\u5b57 prompt\uff0c\u5e76\u4e14\u52a0\u4e0a seed \u53c2\u6570\uff0c\u624d\u80fd\u751f\u6210\u4e00\u6837\u7684\u56fe\u3002"),(0,a.kt)("li",null,"V1\u30012\u30013 \u8fd8\u6709 test\u3001testp \u7248\u672c\u5373\u4f7f\u52a0\u4e86\u8fd9\u4e2a seed \u4e5f\u6ca1\u6cd5\u751f\u6210\u4e00\u6a21\u4e00\u6837\u7684\u56fe\uff0c\u53ea\u80fd\u751f\u6210\u8fd1\u4f3c\u7684\u56fe\u3002"))),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 \u4f46\u53ea\u80fd\u751f\u6210\u8fd1\u4f3c\u56fe"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("p",null,"\u90a3\u5982\u4f55\u83b7\u5f97\u8fd9\u4e2a seed\uff1f"),(0,a.kt)("p",null,"\u627e\u5230\u4f60\u60f3\u8981\u83b7\u5f97 seed \u7684\u56fe\u7247\uff0c\u7136\u540e\u5728\u5176\u6d88\u606f\u53f3\u4e0a\u89d2\u6709\u4e2a emoji \u6309\u94ae\uff0c\u70b9\u51fb\u540e\u4f1a\u51fa\u73b0\u4e00\u4e2a emoji \u83dc\u5355\uff0c\u7136\u540e\u5728 emoji \u83dc\u5355\u91cc\u8f93\u5165 envelope \uff0c\u6700\u540e\u70b9\u51fb \u2709\ufe0f emoji \uff0c\u7136\u540e\u5728\u56fe\u7247\u4e0b\u65b9\u5c31\u4f1a\u51fa\u73b0\u4e00\u4e2a envelope \u7684 emoji\uff0c\u6700\u540e\u4f60\u4f1a\u6536\u5230 Midjourney Bot \u7684\u79c1\u4fe1\u63a8\u9001\uff0c\u8be5\u6d88\u606f\u4e0a\u9762\u5c31\u4f1a\u6709 Seed \u53f7\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/0ECFAB84-AF4C-4341-B60A-5084DCD4D04E_2/lUQZFixPHuw6sb9OpQnxPLdnZPGWEsKkrXxeegLVNrEz/AnimatedImage.gif",alt:"AnimatedImage.gif"})),(0,a.kt)("h2",{id:"image-weight"},"Image Weight"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u7ffb\u8bd1\u6210\u4e2d\u6587\u662f\u300c\u56fe\u7247\u6743\u91cd\u300d\u7684\u610f\u601d\u3002"),(0,a.kt)("p",null,"\u5f53\u4f60\u540c\u65f6\u7528 img prompt \u548c\u6587\u5b57 prompt \u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u5230\u5e95\u66f4\u50cf\u56fe\u7247\u8fd8\u662f\u66f4\u50cf\u6587\u5b57\uff0c\u5f53\u8fd9\u4e2a\u53c2\u6570\u8d8a\u5927\uff0cAI \u751f\u6210\u7684\u56fe\u7247\u5c31\u8d8a\u50cf\u539f\u56fe\uff0c\u8d8a\u5c0f\uff0c\u5c31\u8d8a\u50cf\u6587\u5b57\u63cf\u8ff0\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f Midjourney \u7684\u5b98\u65b9\u6848\u4f8b\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u6570\u503c\u8d8a\u5927\uff0c\u5c31\u8d8a\u50cf\u539f\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A2A360FB-E94A-47E5-9FEB-AE2FB49FAD8D_2/MsiDjcQZLvZxF6qsdfobkel5NkZIzew28GyfzFx2nREz/MJ141.jpeg",alt:"MJ141.jpeg"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u8c03\u7528\u65b9\u6cd5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u4f7f\u7528\u6848\u4f8b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V4")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V3")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"niji")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u5173\u952e\u8bcd\u540e\u52a0\u7a7a\u683c\u5e26\u4e0a\u53c2\u6570\uff1a",(0,a.kt)("ul",null,(0,a.kt)("li",null,"--iw \u6216\u8005 \u2014iw"))),(0,a.kt)("td",{parentName:"tr",align:null},"flowers.jpg birthday cake --iw .5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u53c2\u6570\u5728\u4e0d\u540c\u7248\u672c\u6709\u4e0d\u540c\u7684\u9ed8\u8ba4\u503c\uff08\u5c31\u662f\u5373\u4f7f\u4f60\u4e0d\u8f93\u5165\u8fd9\u4e2a\u53c2\u6570\uff0cAI \u4e5f\u4f1a\u81ea\u5df1\u52a0\u8fd9\u4e2a\u53c2\u6570\u8fdb\u53bb\uff09\u548c\u533a\u95f4"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 \u9ed8\u8ba4\u4e3a 1\uff0c\u533a\u95f4\u662f 0.5-2"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705 \u9ed8\u8ba4\u4e3a 0.25\uff0c\u533a\u95f4\u662f -10000-10000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"stop"},"Stop"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u53c2\u6570\u8ddf ChatGPT \u91cc\u7684 stop \u7c7b\u4f3c\uff0c\u5c31\u662f\u5f3a\u5236\u6682\u505c\u6a21\u578b\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u8c03\u7528\u65b9\u6cd5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u4f7f\u7528\u6848\u4f8b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V4")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"V3")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"niji")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u5173\u952e\u8bcd\u540e\u52a0\u7a7a\u683c\u5e26\u4e0a\u53c2\u6570\uff1a",(0,a.kt)("ul",null,(0,a.kt)("li",null,"--stop \u6216\u8005 \u2014stop"))),(0,a.kt)("td",{parentName:"tr",align:null},"splatter art painting of acorns --stop 90"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u9ed8\u8ba4\u503c\u662f 100"),(0,a.kt)("li",null,"\u4f60\u53ef\u4ee5\u8f93\u5165 10 \u5230 100"))),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("h2",{id:"style"},"Style"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u53c2\u6570\u4e3b\u8981\u662f\u7528\u4e8e\u5207\u6362 V4 \u6a21\u578b\u4e2d\u7684\u5206\u652f\u6a21\u578b\u3002"),(0,a.kt)("p",null,"\u6211\u4e2a\u8ba4\u4e3a\u89c9\u7684\u8fd9\u4e2a\u4e0d\u662f\u5f88\u597d\u7528\uff0c\u4e14\u56e0\u4e3a V5 \u5df2\u7ecf\u63a8\u51fa\uff0c\u5927\u5bb6\u90fd\u5728\u7528 V5 \u4e86\uff0c\u6240\u4ee5\u672a\u6765\u6211\u8ba4\u4e3a\u4f1a\u6dd8\u6c70\uff08\u8fd9\u4e2a\u6211\u731c\u6d4b\u5176\u5b9e\u662f V5 \u7684\u5176\u4ed6\u5206\u652f\u7248\u672c\uff0c\u65e9\u653e\u51fa\u662f\u4e3a\u4e86\u6536\u96c6\u6570\u636e\uff09\u3002\u6240\u4ee5\u5c31\u4e0d\u505a\u4ecb\u7ecd\u4e86\u3002"),(0,a.kt)("h2",{id:"uplight"},"Uplight"),(0,a.kt)("p",null,"\u5f53 Midjourney Bot \u56fe\u7247\u751f\u6210\u5b8c\u6210\u540e\uff0c\u56fe\u7247\u4e0b\u65b9\u90fd\u4f1a\u6709\u4e00\u6392 U \u6309\u94ae\uff0c\u8fd9\u4e9b\u6309\u94ae\u505a\u7684\u4e8b\u60c5\u5c31\u662f\u8fd9\u4e2a Uplight \u53c2\u6570\u505a\u7684\u4e8b\u60c5\uff0c\u4e00\u822c\u4eba\u90fd\u4f1a\u901a\u8fc7\u70b9\u51fb\u6309\u94ae\u6765\u4f7f\u7528\uff0c\u6bd4\u8f83\u5c11\u5728 prompt \u91cc\u6dfb\u52a0\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\u73b0\u5728 V5 \u7248\u672c\uff0cU \u6309\u94ae\u5df2\u7ecf\u4e0d\u4f1a\u5f71\u54cd\u5206\u8fa8\u7387\u4e86\uff0c\u53ea\u662f\u505a\u4e3a\u4e00\u4e2a\u88c1\u5207\u56fe\u7247\u7684\u529f\u80fd\u3002\u6240\u4ee5\u8fd9\u4e2a\u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u6211\u8ba4\u4e3a\u8981\u88ab\u6dd8\u6c70\u7684\u53c2\u6570\u3002\u5927\u5bb6\u4e0d\u5fc5\u5173\u5fc3\u3002"),(0,a.kt)("h2",{id:"upbeta"},"Upbeta"),(0,a.kt)("p",null,"\u53e6\u4e00\u4e2a\u6211\u8ba4\u4e3a\u4f1a\u88ab\u6dd8\u6c70\u7684\u6309\u94ae\u3002"),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("p",null,"\u6211\u89c9\u5f97\u8fd9\u4e2a\u53c2\u6570\u5f88\u6709\u610f\u601d\uff0c\u8fd9\u5176\u5b9e\u662f\u4e2a\u7c7b\u4f3c\u5f55 gif \u7684\u53c2\u6570\u3002\u5728 prompt \u91cc\u52a0\u5165\u8fd9\u4e2a\u53c2\u6570\uff0c\u5347\u6210\u56fe\u7247\u7684\u540c\u65f6\uff0c\u8fd8\u4f1a\u8bb0\u5f55\u5347\u6210\u7684\u8fc7\u7a0b\uff0c\u4f46\u53ef\u60dc\u8fd9\u4e2a\u53c2\u6570\u53ea\u652f\u6301\u5230 V3\uff0c\u4f30\u8ba1\u5b98\u65b9\u672a\u6765\u4e5f\u4f1a\u653e\u5f03\u5427\uff0c\u4e3b\u8981\u662f\u6ca1\u5565\u7528\uff0c\u5c31\u662f\u597d\u73a9\u3002"))}k.isMDXComponent=!0}}]);