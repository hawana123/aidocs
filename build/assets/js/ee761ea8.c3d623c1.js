"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[7724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="Scenario 5: Rewriting Content",s={unversionedId:"chatGPT/tutorial-basics/basic-scenarios/scenario-5-rewriting-content",id:"chatGPT/tutorial-basics/basic-scenarios/scenario-5-rewriting-content",title:"Scenario 5: Rewriting Content",description:"Scenario",source:"@site/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-5-rewriting-content.md",sourceDirName:"chatGPT/tutorial-basics/basic-scenarios",slug:"/chatGPT/tutorial-basics/basic-scenarios/scenario-5-rewriting-content",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-5-rewriting-content",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"chatGPT",previous:{title:"Scenario 4: Writing Code",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-4-writing-code"},next:{title:"Scenario 6: Information Explanation",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-6-information-explanation"}},l={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Tip 4: Add Roles or Characters",id:"tip-4-add-roles-or-characters",level:2},{value:"One More Thing",id:"one-more-thing",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scenario-5-rewriting-content"},"Scenario 5: Rewriting Content"),(0,a.kt)("head",null,(0,a.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,a.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,"Beyond generating content from scratch, you can also provide existing content to the AI and have it modify or enhance it. Use cases include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Translation: Convert Chinese to English, or English to Chinese. Notably, ChatGPT can also translate code, like from Python to Haskell."),(0,a.kt)("li",{parentName:"ol"},"Editing: Fix grammar, typos, etc."),(0,a.kt)("li",{parentName:"ol"},"Rewriting: Restyle text into a different tone or for different audiences.")),(0,a.kt)("p",null,"Let's focus on rewriting for this chapter. Here's an example rewriting prompt (content from Wikipedia):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Please rewrite the following sentences to make them easier to understand.\nOpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]\n")),(0,a.kt)("p",null,"The output is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"OpenAI is a research organization that focuses on artificial intelligence (AI). It has two parts: a non-profit called OpenAI Incorporated and a for-profit subsidiary called OpenAI Limited Partnership. The organization's goal is to create AI that is friendly and beneficial to humans. OpenAI uses one of the most powerful supercomputers in the world for its research. The organization was founded in San Francisco in 2015 by a group of people who pledged a total of $1 billion, including Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, and Peter Thiel. Musk resigned from the board in 2018 but still supports the organization financially. In 2019, Microsoft invested $1 billion in OpenAI LP, and in January 2023, they made a second investment reported to be $10 billion.\n")),(0,a.kt)("h2",{id:"tip-4-add-roles-or-characters"},"Tip 4: Add Roles or Characters"),(0,a.kt)("p",null,'The rewrite example above added a role to "make it easier to understand", a common optimization. Roles like "for a business audience" work too.'),(0,a.kt)("p",null,"An even better technique is specifying a role or character in the prompt to better match the desired output."),(0,a.kt)("p",null,"For the same rewrite example, I pretended to be an elementary school teacher simplifying text for 7-8 year olds:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"You are a primary school teacher who can explain complex content to a level that a 7 or 8 year old child can understand. Please rewrite the following sentences to make them easier to understand:\n")),(0,a.kt)("p",null,"The output uses simpler words and grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"OpenAI is a place where people work on making computers really smart. It's like a lab where they do research to make computers do amazing things! They want the computers to be really friendly and helpful to people. They use one of the most powerful computers in the world to do this research. A bunch of really rich and smart people gave money to start this lab. One of them is Elon Musk, but he left in 2018. Another really big company, Microsoft, gave them a lot of money too.\n")),(0,a.kt)("p",null,"You can also mimic a specific person, like having the AI rewrite as famous author David Foster Wallace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Imagine you are the famous writer David Foster Wallace, please rewrite this sentences.\n")),(0,a.kt)("p",null,"It returns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"As David Foster Wallace, I might rewrite these sentences to sound more like this:\n\nOpenAI is a lab that studies something called artificial intelligence, which is like when computers can do things that normally only humans can do. They have a big computer that's one of the most powerful in the world, and they're trying to make sure the AI they create is friendly and helpful. The lab was started in 2015 in a city called San Francisco, and a bunch of important people gave them a lot of money to do their research. One of those people was Elon Musk, who stopped working there but still gives them money, and Microsoft also gave them a lot of money recently.\n")),(0,a.kt)("p",null,"For more on using this technique and AI to improve writing, I recommend Nat Eliason's ",(0,a.kt)("a",{parentName:"p",href:"https://blog.nateliason.com/p/chatgpt-writing-coach"},"Using ChatGPT as a Writing Coach")),(0,a.kt)("h2",{id:"one-more-thing"},"One More Thing"),(0,a.kt)("p",null,"Adding roles can greatly improve the accuracy of AI responses, but writing good roles is not simple. Also in daily use, you may need prompts with multiple different roles, like a teacher for learning or a translation assistant. Switching prompts frequently in ChatGPT can be inconvenient."),(0,a.kt)("p",null,"To address this, our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thinkingjimmy/PoleStarChat"},"PoleStar Chat")," offers 100+ premade AI bots with role prompts covering education, writing, entertainment and more. You can invoke prompts quickly like using any IM app, with @mentions. For example, @ the Tarot Master bot for a daily reading, without learning prompt setup:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(7866).Z,width:"1920",height:"1143"})))}h.isMDXComponent=!0},7866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/polestarchat-bot-03d4e73f3410e856be4741e29c249da8.png"}}]);