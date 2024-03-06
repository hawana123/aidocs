"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[2334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="Tip 1: To Do and Not To Do",s={unversionedId:"chatGPT/tutorial-tips/tip-1-to-do-and-not-to-do",id:"chatGPT/tutorial-tips/tip-1-to-do-and-not-to-do",title:"Tip 1: To Do and Not To Do",description:"The tips I provide can actually be applied to various scenarios. I explained them in a specific scenario because I believe they are more likely to be used in that scenario, and making them easier to remember. It does not mean that these tips can only be used in that specific scenario. Additionally, mixing multiple tips is also a good approach.",source:"@site/docs/chatGPT/tutorial-tips/tip-1-to-do-and-not-to-do.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-1-to-do-and-not-to-do",permalink:"/en/docs/chatGPT/tutorial-tips/tip-1-to-do-and-not-to-do",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"chatGPT",previous:{title:"\ud83d\uddd2\ufe0f Tips",permalink:"/en/docs/category/\ufe0f-tips"},next:{title:"Tip 2: Include Examples",permalink:"/en/docs/chatGPT/tutorial-tips/tip-2-include-examples"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tip-1-to-do-and-not-to-do"},"Tip 1: To Do and Not To Do"),(0,a.kt)("head",null,(0,a.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,a.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The tips I provide can actually be applied to various scenarios. I explained them in a specific scenario because I believe they are more likely to be used in that scenario, and making them easier to remember. It does not mean that these tips can only be used in that specific scenario. Additionally, mixing multiple tips is also a good approach.")),(0,a.kt)("p",null,"In the question-answer scenario, to make AI's answers more accurate, it is common to include conditions in the questions. For example, asking AI to recommend a movie to you, e.g. \"Recommend a movie to me.\" However, this prompt is too broad, and AI cannot provide a direct answer. Instead, it will ask you what type of movie you're interested in, resulting in a time-consuming conversation."),(0,a.kt)("p",null,"To be more efficient, prompts often say something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"DO NOT ASK FOR INTERESTS. DO NOT ASK FOR PERSONAL INFORMATION.\n")),(0,a.kt)("p",null,"With that, ChatGPT's latest API will just recommend a movie instead of asking you questions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},'Certainly! If you\'re in the mood for an action-packed movie, you might enjoy "John Wick" (2014), directed by Chad Stahelski and starring Keanu Reeves. The movie follows a retired hitman named John Wick who seeks vengeance against the people who wronged him. It\'s a fast-paced and stylish film with lots of thrilling action sequences and an engaging story. If you\'re looking for something that will keep you on the edge of your seat, "John Wick" is definitely worth a watch!\n')),(0,a.kt)("p",null,"But older models like Davinci-003 may still ask about your interests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Sure, I can recommend a movie based on your interests. What kind of movie would you like to watch? Do you prefer action, comedy, romance, or something else?\n")),(0,a.kt)("p",null,"So OpenAI's ",(0,a.kt)("a",{parentName:"p",href:"https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api"},"best practices "),"say:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Instead of just saying what not to do, say what to do instead."))),(0,a.kt)("p",null,'In my experience, though new models understand "Not To Do", for decisive answers it\'s more efficient to state allowed actions. Back to the movie example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Recommend a movie from the top global trending movies to me.\n")),(0,a.kt)("p",null,'Of course, this doesn\'t mean that "Not Todo" should never be used:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you've clearly constrained the task already and want to narrow it further."),(0,a.kt)("li",{parentName:"ul"},"For exploration, when you only know what not to include. Add Not To Dos to help the AI respond, then optimize later.")),(0,a.kt)("p",null,"Here are some examples of Less Effective vs Better prompts to try:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,a.kt)("th",{parentName:"tr",align:null},"Less Effective"),(0,a.kt)("th",{parentName:"tr",align:null},"Better"),(0,a.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Recommend essential English words for IELTS"),(0,a.kt)("td",{parentName:"tr",align:null},"Please suggest me some essential words for IELTS"),(0,a.kt)("td",{parentName:"tr",align:null},"Please suggest me 10 essential words for IELTS"),(0,a.kt)("td",{parentName:"tr",align:null},'The latter prompt is more specific. The former prompt may provide around 20 words. There is still room for improvement, such as adding more qualifying words like words starting with the letter "A".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Recommended places to visit in Hong Kong"),(0,a.kt)("td",{parentName:"tr",align:null},"Please recommend me some places to visit in Hong Kong. Do not recommend museums."),(0,a.kt)("td",{parentName:"tr",align:null},"Please recommend me some places to visit in Hong Kong including amusement parks."),(0,a.kt)("td",{parentName:"tr",align:null},"The latter prompt provides more accurate and efficient recommendations. However, if you want to explore more options, the former prompt can also be used.")))),(0,a.kt)("br",null),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Please suggest me some essential words for IELTS","initial-response":"1. Essential: important, necessary, required, indispensable, vital\n1. Important: critical, significant, major, key, essential\n2. Necessary: essential, required, indispensable, mandatory, needful\n3. Required: necessary, essential, mandatory, needed, called for\n4. Indispensable: essential, necessary, vital, critical, required","max-tokens":"256","box-rows":"3","model-temp":"0.7","top-p":"1"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")))}m.isMDXComponent=!0}}]);