"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[6238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=s,d=h["".concat(i,".").concat(u)]||h[u]||f[u]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:4},o="Self-Consistency",l={unversionedId:"chatGPT/tutorial-extras/Self-Consistency",id:"chatGPT/tutorial-extras/Self-Consistency",title:"Self-Consistency",description:"Self-consistency is a supplementary technique in Chain of Thought that allows the model to generate multiple chains of thought and select the most frequent answer as the final result.",source:"@site/docs/chatGPT/tutorial-extras/Self-Consistency.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/Self-Consistency",permalink:"/docs/chatGPT/tutorial-extras/Self-Consistency",draft:!1,tags:[],version:"current",lastUpdatedAt:1711337117,formattedLastUpdatedAt:"2024\u5e743\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"chatGPT",previous:{title:"Few-Shot Prompting",permalink:"/docs/chatGPT/tutorial-extras/few-shot-prompting"},next:{title:"PAL Models",permalink:"/docs/chatGPT/tutorial-extras/pal-models"}},i={},p=[],c={toc:p},h="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"self-consistency"},"Self-Consistency"),(0,s.kt)("head",null,(0,s.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,s.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,s.kt)("p",null,"Self-consistency is a supplementary technique in Chain of Thought that allows the model to generate multiple chains of thought and select the most frequent answer as the final result."),(0,s.kt)("p",null,"According to ",(0,s.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2203.11171.pdf"},"2022")," research by Xuezhi Wang et al.,when we optimize the model using only one chain of logic, there is still a possibility of the model making errors. To address this, XueZhi Wang et al. proposed a new method that involves running the model multiple times and selecting the most frequent answer as the final result:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"SelfConsistency001.png",src:n(576).Z,width:"1946",height:"882"})),(0,s.kt)("p",null,"In my experience so far, ChatGPT seems highly self-consistent - I haven't seen cases of multiple differing answers yet. From my research, self-consistency appears more useful for evaluating model quality - good models tend to be more self-consistent."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"For this example, consider the following multi-step reasoning problem:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Consider a multi-step reasoning problem like the following:\n\nQuestion: If a store has 10 apples and 8 oranges, and it sells 6 apples and 4 oranges, how many fruits are left in the store?\n\nInstead of directly answering the question, the chain-of-thought prompting would require the language model to produce a series of short sentences that mimic a human's reasoning process:\n\nThe store has 10 apples.\nThe store has 8 oranges.\n6 apples are sold.\n4 oranges are sold.\nThere are 10 - 6 = 4 apples left.\nThere are 8 - 4 = 4 oranges left.\nThe store now has 4 apples + 4 oranges = 8 fruits.\n\n")),(0,s.kt)("p",null,"Using self-consistency, the language model generates multiple reasoning paths:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Reasoning Path A:\n\nThe store has 10 apples.\nThe store has 8 oranges.\n6 apples are sold.\n4 oranges are sold.\nThere are 10 - 6 = 4 apples left.\nThere are 8 - 4 = 4 oranges left.\nThe store now has 4 apples + 4 oranges = 8 fruits.\nReasoning Path B:\n\nThe store initially has 10 apples and 8 oranges.\nIt sells 6 apples, so there are 10 - 6 = 4 apples left.\nIt sells 4 oranges, so there are 8 - 4 = 4 oranges left.\nThe store now has 4 apples + 4 oranges = 8 fruits.\n")),(0,s.kt)("p",null,"Self-consistency selects the most consistent answer from multiple inference paths. Here, inference paths A and B both yield the same conclusion (8 fruits). This approach increases the model's confidence in the final answer."))}f.isMDXComponent=!0},576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SelfConsistency001-ae4a23fdbe90d35f633b1af73f721887.png"}}]);