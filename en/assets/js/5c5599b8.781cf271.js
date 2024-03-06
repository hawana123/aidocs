"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[6786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:4},i="Tip 4: Add Roles or Characters",s={unversionedId:"chatGPT/tutorial-tips/tip-4-add-roles-or-characters",id:"chatGPT/tutorial-tips/tip-4-add-roles-or-characters",title:"Tip 4: Add Roles or Characters",description:'The rewrite example above added a role to "make it easier to understand", a common optimization. Roles like "for a business audience" work too.',source:"@site/docs/chatGPT/tutorial-tips/tip-4-add-roles-or-characters.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-4-add-roles-or-characters",permalink:"/en/docs/chatGPT/tutorial-tips/tip-4-add-roles-or-characters",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"chatGPT",previous:{title:"Tip 3: Use Primer Words to Guide Output",permalink:"/en/docs/chatGPT/tutorial-tips/tip-3-use-primer-words-to-guide-output"},next:{title:"Tip 5: Use Symbols to Separate Instructions and Text",permalink:"/en/docs/chatGPT/tutorial-tips/tip-5-use-symbols-to-separate-instructions-and-text"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tip-4-add-roles-or-characters"},"Tip 4: Add Roles or Characters"),(0,o.kt)("p",null,'The rewrite example above added a role to "make it easier to understand", a common optimization. Roles like "for a business audience" work too.'),(0,o.kt)("p",null,"An even better technique is specifying a role or character in the prompt to better match the desired output."),(0,o.kt)("p",null,"For the same rewrite example, I pretended to be an elementary school teacher simplifying text for 7-8 year olds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"You are a primary school teacher who can explain complex content to a level that a 7 or 8 year old child can understand. Please rewrite the following sentences to make them easier to understand:\n")),(0,o.kt)("p",null,"The output uses simpler words and grammar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"OpenAI is a place where people work on making computers really smart. It's like a lab where they do research to make computers do amazing things! They want the computers to be really friendly and helpful to people. They use one of the most powerful computers in the world to do this research. A bunch of really rich and smart people gave money to start this lab. One of them is Elon Musk, but he left in 2018. Another really big company, Microsoft, gave them a lot of money too.\n")),(0,o.kt)("p",null,"You can also mimic a specific person, like having the AI rewrite as famous author David Foster Wallace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Imagine you are the famous writer David Foster Wallace, please rewrite this sentences.\n")),(0,o.kt)("p",null,"It returns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"As David Foster Wallace, I might rewrite these sentences to sound more like this:\n\nOpenAI is a lab that studies something called artificial intelligence, which is like when computers can do things that normally only humans can do. They have a big computer that's one of the most powerful in the world, and they're trying to make sure the AI they create is friendly and helpful. The lab was started in 2015 in a city called San Francisco, and a bunch of important people gave them a lot of money to do their research. One of those people was Elon Musk, who stopped working there but still gives them money, and Microsoft also gave them a lot of money recently.\n")),(0,o.kt)("p",null,"For more on using this technique and AI to improve writing, I recommend Nat Eliason's ",(0,o.kt)("a",{parentName:"p",href:"https://blog.nateliason.com/p/chatgpt-writing-coach"},"Using ChatGPT as a Writing Coach")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Adding roles can greatly improve the accuracy of AI responses, but writing good roles is not simple. Also in daily use, you may need prompts with multiple different roles, like a teacher for learning or a translation assistant. Switching prompts frequently in ChatGPT can be inconvenient."),(0,o.kt)("p",null,"To address this, our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thinkingjimmy/PoleStarChat"},"PoleStar Chat")," offers 100+ premade AI bots with role prompts covering education, writing, entertainment and more. You can invoke prompts quickly like using any IM app, with @mentions. For example, @ the Tarot Master bot for a daily reading, without learning prompt setup:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(420).Z,width:"1920",height:"1143"})))}d.isMDXComponent=!0},420:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/polestarchat-bot-03d4e73f3410e856be4741e29c249da8.png"}}]);