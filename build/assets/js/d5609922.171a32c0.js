"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[8661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="Using OpenAI Playground",s={unversionedId:"chatGPT/tutorial-extras/openai-playground",id:"chatGPT/tutorial-extras/openai-playground",title:"Using OpenAI Playground",description:"If you want to have a better understanding of OpenAI's API and often encounter unavailability of ChatGPT, I recommend using OpenAI Playground. It is more stable.",source:"@site/docs/chatGPT/tutorial-extras/openai-playground.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/openai-playground",permalink:"/docs/chatGPT/tutorial-extras/openai-playground",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"chatGPT",previous:{title:"PAL Models",permalink:"/docs/chatGPT/tutorial-extras/pal-models"},next:{title:"\ud83d\uddd2\ufe0f Tips",permalink:"/docs/category/\ufe0f-tips"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-openai-playground"},"Using OpenAI Playground"),(0,r.kt)("head",null,(0,r.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,r.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,r.kt)("p",null,"If you want to have a better understanding of OpenAI's API and often encounter unavailability of ChatGPT, I recommend using OpenAI Playground. It is more stable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"However, please note that using the Playground will consume your free credits.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenAIPlayground001.png",src:n(2513).Z,width:"3492",height:"2706"})),(0,r.kt)("p",null,"You will see the following parameters on the right side of the interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Mode\uff1a")," Recently, a fourth Chat mode has been added, but it is generally sufficient to use the Complete mode. Of course, you can use other modes that can assist you in writing prompts through a GUI."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Model\uff1a")," Here, you can switch between models. Different models excel at different things, so selecting the right model based on the context can save you a lot of costs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ada: This is the cheapest model with the fastest computation speed. It is recommended for tasks like text analysis, simple classification, and address correction."),(0,r.kt)("li",{parentName:"ul"},"Babbage: This model can handle more complex scenarios than Ada. It is slightly more expensive but still relatively fast. It is suitable for tasks like classification and semantic search."),(0,r.kt)("li",{parentName:"ul"},'Curie: According to the official explanation, this model is "similarly powerful to Davinci but cheaper." However, in practice, this model is particularly good at text-related tasks, such as writing articles, language translation, and summarization.'),(0,r.kt)("li",{parentName:"ul"},"Davinci: This is the most powerful model in the GPT-3 series, capable of delivering higher quality and longer answers. Each request can handle 4000 tokens. It is suitable for complex scenarios with intentions, causal relationships, creative generation, search, and summarization."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Temperature\uff1a")," This primarily controls the randomness of the generated results. In short, the lower the temperature, the more deterministic the results, but they may also be more mundane or uninteresting. If you want to get some unexpected answers, try increasing this parameter. However, if your scenario is fact-based, such as data extraction or FAQ, it is best to set this parameter to 0."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Maximum length:")," Set the maximum length of generated content in a single response."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stop Sequence:")," This option sets a specific string sequence that, if found in the generated text, prompts the model to stop generating more text."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Top P:")," This option is used for nucleus sampling and controls the probability distribution of the generated text, affecting its diversity and determinism. If you want accurate answers, you can set a lower value. If you want more varied replies, you can set it higher."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Presence Penalty:")," This option controls whether the model avoids using specific words or phrases while generating text. It can be useful for generating sensitive topics or specific scenarios."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Best of:")," This option allows you to generate multiple texts and select the best one as the output. The default is 1, which means it only generates one output."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Injection start text: ")," This option allows you to add custom text at the beginning of the input, thereby influencing the model's generated result."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Injection restart text: ")," This option allows you to add custom text at a specific position in the middle, affecting the model's continued generation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Show probabilities: ")," This option allows you to view the probabilities of each word generated by the model. When enabled, you will see a string of numbers following each generated word, indicating the probability assigned by the model to that word.")),(0,r.kt)("p",null,"Once you have configured the parameters, you can enter the prompt on the left and test it out."))}d.isMDXComponent=!0},2513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OpenAIPlayground001-79a563ed94c43f83b4b0a5a6a0e2c37b.png"}}]);