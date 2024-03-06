"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[8311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Scenario 2: Answer questions based on examples",s={unversionedId:"chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples",id:"chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples",title:"Scenario 2: Answer questions based on examples",description:"Scenario",source:"@site/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples.md",sourceDirName:"chatGPT/tutorial-basics/basic-scenarios",slug:"/chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"chatGPT",previous:{title:"Scenario 1: Question-Answer",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-1-ask-questions"},next:{title:"Scenario 3: Inference",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference"}},l={},c=[{value:"Scenario",id:"scenario",level:2},{value:"<strong>Tip 2: Include Examples</strong>",id:"tip-2-include-examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scenario-2-answer-questions-based-on-examples"},"Scenario 2: Answer questions based on examples"),(0,r.kt)("head",null,(0,r.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,r.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"For example, when naming a pet in English, there are often certain naming styles or preferences to consider. In such cases, you can include examples within the prompt to provide a clearer understanding. Let's take a look at an example."),(0,r.kt)("p",null,"Prompt without examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Suggest three names for a horse that is a superhero.\n")),(0,r.kt)("p",null,'The output provided is as follows. The first name seems okay, the second name "Captain Canter" gives a heroic feeling, but "Canter" implies that the horse runs slowly, which does not seem appropriate. Overall, the names suggested are ordinary and not cool enough.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Thunder Hooves, Captain Canter, Mighty Gallop\n")),(0,r.kt)("h2",{id:"tip-2-include-examples"},(0,r.kt)("strong",{parentName:"h2"},"Tip 2: Include Examples")),(0,r.kt)("p",null,"If you find it challenging to explain a problem or provide instructions with just text, you can include examples within the prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Suggest three names for an animal that is a superhero.\n\nAnimal: Cat\nNames: Captain Sharpclaw, Agent Fluffball, The Incredible Feline\nAnimal: Dog\nNames: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot\nAnimal: Horse\nNames:\n")),(0,r.kt)("p",null,"By providing examples, the output becomes cooler and closer to the naming style desired:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Gallop Guardian, Equine Avenger, The Mighty Stallion\n")),(0,r.kt)("p",null,"Here are some examples to try yourself:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Less Effective"),(0,r.kt)("th",{parentName:"tr",align:null},"Better"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product naming"),(0,r.kt)("td",{parentName:"tr",align:null},"Product description: A pair of shoes that can fit any foot size.",(0,r.kt)("br",null),"Seed words: adaptable, fit, omni-fit.",(0,r.kt)("br",null),"Product names:"),(0,r.kt)("td",{parentName:"tr",align:null},"Product description: A home milkshake maker",(0,r.kt)("br",null),"Seed words: fast, healthy, compact.",(0,r.kt)("br",null),"Product names: HomeShaker, Fit Shaker, QuickShake, Shake Maker",(0,r.kt)("br",null),"Product description: A pair of shoes that can fit any foot size.",(0,r.kt)("br",null),"Seed words: adaptable, fit, omni-fit.",(0,r.kt)("br",null),"Product names:"),(0,r.kt)("td",{parentName:"tr",align:null},"You can run this example below to see what answer AI gives without any examples.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Converting movie titles into emojis"),(0,r.kt)("td",{parentName:"tr",align:null},"Convert Star Wars into emoji"),(0,r.kt)("td",{parentName:"tr",align:null},"Convert movie titles into emoji. ",(0,r.kt)("br",null),"Back to the Future: \ud83d\udc68\ud83d\udc74\ud83d\ude97\ud83d\udd52",(0,r.kt)("br",null),"Batman: \ud83e\udd35\ud83e\udd87",(0,r.kt)("br",null),"Transformers: \ud83d\ude97\ud83e\udd16",(0,r.kt)("br",null),"Star Wars:"),(0,r.kt)("td",{parentName:"tr",align:null},"You can run this example below to see what answer AI gives without any examples.")))),(0,r.kt)("br",null),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Convert Star Wars into emoji","initial-response":"\ud83c\udf1f\u2694\ufe0f\ud83d\udc7d\ud83d\udca5\ud83d\udc68\u200d\ud83d\ude80\ud83d\udc69\u200d\ud83d\ude80\ud83d\ude80","max-tokens":"256","box-rows":"3","model-temp":"0.7","top-p":"1"},(0,r.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"\ud83d\udd34",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When using this tip, you may find that the model does not always provide the correct answer, even with the provided examples. In such cases, you will need to employ more advanced techniques. I will discuss how to optimize the prompt to achieve more accurate results in the advanced section.")))}m.isMDXComponent=!0}}]);