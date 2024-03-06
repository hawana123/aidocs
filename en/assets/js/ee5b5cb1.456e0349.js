"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[7608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},s="Scenario 3: Inference",o={unversionedId:"chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",id:"chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",title:"Scenario 3: Inference",description:"Scenario",source:"@site/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference.md",sourceDirName:"chatGPT/tutorial-basics/basic-scenarios",slug:"/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"chatGPT",previous:{title:"Scenario 2: Answer questions based on examples",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples"},next:{title:"Scenario 4: Writing Code",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-4-writing-code"}},c={},l=[{value:"Scenario",id:"scenario",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scenario-3-inference"},"Scenario 3: Inference"),(0,i.kt)("head",null,(0,i.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,i.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,i.kt)("h2",{id:"scenario"},"Scenario"),(0,i.kt)("p",null,"Within the broad question answering scenario, inference is an interesting sub-scenario with lots of potential that prompts can really unlock."),(0,i.kt)("p",null,"If you want to build a small ChatGPT API app, I suggest starting here - less competition than other areas."),(0,i.kt)("p",null,"Here's a simple example - I entered a GMAT math question into ChatGPT:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-other"},"If a real estate agent received a commission of 6 percent of the selling price of a certain house, what was the selling price of the house?\n(1) The selling price minus the real estate agent\u2019s commission was $84,600.\n(2) The selling price was 250 percent of the original purchase price of $36,000.\n\n(A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.\n(B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.\n(C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.\n(D) EACH statement ALONE is sufficient.\n(E) Statements (1) and (2) TOGETHER are NOT sufficient.\n")),(0,i.kt)("p",null,"Its output is such that it will reason and operate according to the requirements of the question:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-other"},"Let's assume the selling price of the house is S.\n\nAccording to the given information, the real estate agent's commission is 6% of S, which is 0.06S.\n\nSo, the amount received by the seller after paying the commission would be (S - 0.06S) = 0.94S.\n\nStatement (1) tells us that 0.94S = $84,600. Solving for S, we get S = $90,000.\n\nTherefore, statement (1) alone is sufficient to determine the selling price of the house.\n\nStatement (2) tells us that the selling price is 250% of the original purchase price, which means S = 2.5*$36,000 = $90,000.\n\nTherefore, statement (2) alone is also sufficient to determine the selling price of the house.\n\nSince both statements individually provide the same answer, we can conclude that together they are also sufficient to determine the selling price of the house.\n\nHence, the answer is (D) EACH statement ALONE is sufficient.\n")),(0,i.kt)("p",null,"This scenario is fairly simple, so I won't give more examples here; you can try entering various topics into ChatGPT."))}f.isMDXComponent=!0}}]);