"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[8696],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return n?o.createElement(f,s(s({ref:e},c),{},{components:n})):o.createElement(f,s({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3499:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},s="\u6280\u5de7 7\uff1aZero-Shot Chain of Thought",i={unversionedId:"chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",id:"chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",title:"\u6280\u5de7 7\uff1aZero-Shot Chain of Thought",description:"\u57fa\u4e8e\u4e0a\u8ff0\u7684\u7b2c\u4e09\u70b9\u7f3a\u70b9\uff0c\u7814\u7a76\u4eba\u5458\u5c31\u627e\u5230\u4e86\u4e00\u4e2a\u53eb Chain of Thought \u7684\u6280\u5de7\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",permalink:"/zh-Hans/docs/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"2023\u5e748\u670810\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"chatGPT",previous:{title:"\u6280\u5de7 6\uff1a\u901a\u8fc7\u683c\u5f0f\u8bcd\u9610\u8ff0\u9700\u8981\u8f93\u51fa\u7684\u683c\u5f0f",permalink:"/zh-Hans/docs/chatGPT/tutorial-tips/tip-6-use-formatting-terms-to-specify-output-structure"},next:{title:"\u6280\u5de7 8\uff1aFew-Shot Chain of Thought",permalink:"/zh-Hans/docs/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought"}},l={},u=[],c={toc:u},p="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6280\u5de7-7zero-shot-chain-of-thought"},"\u6280\u5de7 7\uff1aZero-Shot Chain of Thought"),(0,r.kt)("head",null,(0,r.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,r.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,r.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u7684\u7b2c\u4e09\u70b9\u7f3a\u70b9\uff0c\u7814\u7a76\u4eba\u5458\u5c31\u627e\u5230\u4e86\u4e00\u4e2a\u53eb Chain of Thought \u7684\u6280\u5de7\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6280\u5de7\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u95ee\u9898\u7684\u7ed3\u5c3e\u91cc\u653e\u4e00\u53e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Let\u2018s think step by step")," \uff08\u8ba9\u6211\u4eec\u4e00\u6b65\u6b65\u5730\u601d\u8003\uff09\uff0c\u6a21\u578b\u8f93\u51fa\u7684\u7b54\u6848\u4f1a\u66f4\u52a0\u51c6\u786e\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6280\u5de7\u6765\u81ea\u4e8e Kojima \u7b49\u4eba 2022 \u5e74\u7684\u8bba\u6587 ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2205.11916"},"Large Language Models are Zero-Shot Reasoners"),"\u3002\u5728\u8bba\u6587\u91cc\u63d0\u5230\uff0c\u5f53\u6211\u4eec\u5411\u6a21\u578b\u63d0\u4e00\u4e2a\u903b\u8f91\u63a8\u7406\u95ee\u9898\u65f6\uff0c\u6a21\u578b\u8fd4\u56de\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u7b54\u6848\uff0c\u4f46\u5982\u679c\u6211\u4eec\u5728\u95ee\u9898\u6700\u540e\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Let\u2018s think step by step")," \u8fd9\u53e5\u8bdd\u4e4b\u540e\uff0c\u6a21\u578b\u5c31\u751f\u6210\u4e86\u6b63\u786e\u7684\u7b54\u6848\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ZeroShotChainOfThought001.png",src:n(7329).Z,width:"1898",height:"376"})),(0,r.kt)("p",null,"\u8bba\u6587\u91cc\u6709\u8bb2\u5230\u539f\u56e0\uff0c\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u53bb\u770b\u770b\uff0c\u6211\u7b80\u5355\u89e3\u91ca\u4e0b\u4e3a\u4ec0\u4e48\uff08\ud83c\udd98 \u5982\u679c\u4f60\u6709\u66f4\u597d\u7684\u89e3\u91ca\uff0c\u4e0d\u59a8\u53cd\u9988\u7ed9\u6211\uff09\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u5404\u4f4d\u8981\u6e05\u695a\u50cf ChatGPT \u8fd9\u7c7b\u4ea7\u54c1\uff0c\u5b83\u662f\u4e00\u4e2a\u7edf\u8ba1\u8bed\u8a00\u6a21\u578b\uff0c\u672c\u8d28\u4e0a\u662f\u57fa\u4e8e\u8fc7\u53bb\u770b\u5230\u8fc7\u7684\u6240\u6709\u6570\u636e\uff0c\u7528\u7edf\u8ba1\u5b66\u610f\u4e49\u4e0a\u7684\u9884\u6d4b\u7ed3\u679c\u8fdb\u884c\u4e0b\u4e00\u6b65\u7684\u8f93\u51fa\uff08\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u4f60\u5728\u4f7f\u7528 ChatGPT \u7684\u65f6\u5019\uff0c\u5b83\u7684\u7b54\u6848\u662f\u4e00\u4e2a\u5b57\u4e00\u4e2a\u5b57\u5730\u5410\u51fa\u6765\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u7ed9\u4f60\u7684\u539f\u56e0\uff0c\u56e0\u4e3a\u7b54\u6848\u662f\u4e00\u4e2a\u5b57\u4e00\u4e2a\u5b57\u7b97\u51fa\u6765\u7684\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u5b83\u62ff\u5230\u7684\u6570\u636e\u91cc\u6709\u903b\u8f91\uff0c\u5b83\u5c31\u4f1a\u901a\u8fc7\u7edf\u8ba1\u5b66\u7684\u65b9\u6cd5\u5c06\u8fd9\u4e9b\u903b\u8f91\u627e\u51fa\u6765\uff0c\u5e76\u5c06\u8fd9\u4e9b\u903b\u8f91\u5448\u73b0\u7ed9\u4f60\uff0c\u8ba9\u4f60\u611f\u89c9\u5230\u5b83\u7684\u56de\u7b54\u5f88\u6709\u903b\u8f91\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u8ba1\u7b97\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6a21\u578b\u4f1a\u8fdb\u884c\u5f88\u591a\u5047\u8bbe\u8fd0\u7b97\uff08\u4e0d\u8fc7\u6682\u65f6\u4e0d\u77e5\u9053\u5b83\u662f\u600e\u4e48\u7b97\u7684\uff09\u3002\u6bd4\u5982\u89e3\u51b3\u67d0\u4e2a\u95ee\u9898\u662f\u4ece A \u5230 B \u518d\u5230 C\uff0c\u4e2d\u95f4\u6709\u5f88\u591a\u5047\u8bbe\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b83\u7b2c\u4e00\u6b21\u7b97\u51fa\u6765\u7684\u7b54\u6848\u9519\u8bef\u7684\u539f\u56e0\uff0c\u53ea\u662f\u56e0\u4e3a\u5b83\u5728\u4e2d\u95f4\u8df3\u8fc7\u4e86\u4e00\u4e9b\u6b65\u9aa4\uff08B\uff09\u3002\u800c\u8ba9\u6a21\u578b\u4e00\u6b65\u6b65\u5730\u601d\u8003\uff0c\u5219\u6709\u52a9\u4e8e\u5176\u6309\u7167\u5b8c\u6574\u7684\u903b\u8f91\u94fe\uff08A > B > C\uff09\u53bb\u8fd0\u7b97\uff0c\u800c\u4e0d\u4f1a\u8df3\u8fc7\u67d0\u4e9b\u5047\u8bbe\uff0c\u6700\u540e\u7b97\u51fa\u6b63\u786e\u7684\u7b54\u6848\u3002")),(0,r.kt)("p",null,"\u6309\u7167\u8bba\u6587\u91cc\u7684\u89e3\u91ca\uff0c\u96f6\u6837\u672c\u601d\u7ef4\u94fe\u6d89\u53ca\u4e24\u4e2a\u8865\u5168\u7ed3\u679c\uff0c\u5de6\u4fa7\u6c14\u6ce1\u8868\u793a\u57fa\u4e8e\u63d0\u793a\u8f93\u51fa\u7684\u7b2c\u4e00\u6b21\u7684\u7ed3\u679c\uff0c\u53f3\u4fa7\u6c14\u6ce1\u8868\u793a\u5176\u6536\u5230\u4e86\u7b2c\u4e00\u6b21\u7ed3\u679c\u540e\uff0c\u5c06\u6700\u5f00\u59cb\u7684\u63d0\u793a\u4e00\u8d77\u62ff\u53bb\u8fd0\u7b97\uff0c\u6700\u540e\u5f97\u51fa\u4e86\u6b63\u786e\u7684\u7b54\u6848\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ZeroShotChainOfThought002.png",src:n(6145).Z,width:"1978",height:"738"})),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6280\u5de7\uff0c\u7528\u4e8e\u89e3\u590d\u6742\u95ee\u9898\u6709\u7528\u5916\uff0c\u8fd8\u9002\u5408\u751f\u6210\u4e00\u4e9b\u8fde\u8d2f\u4e3b\u9898\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u5199\u957f\u7bc7\u6587\u7ae0\u3001\u7535\u5f71\u5267\u672c\u7b49\u3002"),(0,r.kt)("p",null,"\u4f46\u9700\u8981\u6ce8\u610f\u5176\u7f3a\u70b9\uff0c\u8fde\u8d2f\u4e0d\u4ee3\u8868\u5b83\u5c31\u4e00\u5b9a\u4e0d\u4f1a\u7b97\u9519\uff0c\u5982\u679c\u5176\u4e2d\u67d0\u4e00\u6b65\u9aa4\u7b97\u9519\u4e86\uff0c\u9519\u8bef\u4f1a\u56e0\u4e3a\u903b\u8f91\u94fe\uff0c\u9010\u6b65\u5c06\u9519\u8bef\u79ef\u7d2f\uff0c\u5bfc\u81f4\u751f\u6210\u7684\u6587\u672c\u53ef\u80fd\u51fa\u73b0\u4e0e\u9884\u671f\u4e0d\u7b26\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u6839\u636e Wei \u7b49\u4eba\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2201.11903.pdf"},"2022 \u5e74\u7684\u8bba\u6587"),"\u8868\u660e\uff0c\u8fd8\u6709\u5b83\u4ec5\u5728\u5927\u4e8e\u7b49\u4e8e 100B \u53c2\u6570\u7684\u6a21\u578b\u4e2d\u4f7f\u7528\u624d\u4f1a\u6709\u6548\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5c0f\u6837\u672c\u6a21\u578b\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u4f1a\u751f\u6548\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"2023-04-12 \u66f4\u65b0\uff08\u611f\u8c22",(0,r.kt)("a",{parentName:"p",href:"https://github.com/qq-740943515"},"qq-740943515"),"\u5206\u4eab\uff09\uff1a\n\u6839\u636e Yongchao Zhou \u7b49\u4eba\u7684",(0,r.kt)("a",{parentName:"p",href:"https://sites.google.com/view/automatic-prompt-engineer"},"\u6700\u65b0\u8bba\u6587"),"\uff0c\u66f4\u597d\u7684 prompt \u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Let's work this out in a step by step way to be sure we have the right answer.\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728\u5434\u6069\u8fbe\u7684 ChatGPT Prompt Engineering ",(0,r.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"},"\u8bfe\u7a0b"),"\u4e2d\uff0c\u6709\u63d0\u5230\u4e00\u4e2a\u8fd9\u4e2a\u6280\u5de7\u7684\u53e6\u4e00\u79cd\u7528\u6cd5\uff0c\u4e0d\u4ec5\u4ec5\u53ea\u662f\u8ba9 AI \u6309\u6b65\u9aa4\u884c\u4e8b\uff0c\u8fd8\u4f1a\u544a\u77e5 AI \u6bcf\u4e00\u6b65\u8981\u505a\u4ec0\u4e48\u3002\u6bd4\u5982\u8fd9\u4e2a\u6848\u4f8b\uff08\u6ce8\u610f\u8fd9\u4e2a\u662f python \u4ee3\u7801\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'prompt_2 = f"""\nYour task is to perform the following actions:\n1 - Summarize the following text delimited by\n  <> with 1 sentence.\n2 - Translate the summary into French.\n3 - List each name in the French summary.\n4 - Output a json object that contains the\n  following keys: french_summary, num_names.\n\nUse the following format:\nText: <text to summarize>\nSummary: <summary>\nTranslation: <summary translation>\nNames: <list of names in Italian summary>\nOutput JSON: <json with summary and num_names>\n\nText: <{text}>\n"""\n')),(0,r.kt)("p",null,"\u7b80\u5355\u89e3\u91ca\u4e0b\u8fd9\u4e2a\u4ee3\u7801\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f00\u5934\u662f\u8ba9 AI \u6309\u7167 1 \uff5e 4 \u6b65\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u518d\u8ba9 AI \u6839\u636e\u7279\u5b9a\u683c\u5f0f\u8f93\u51fa\u5185\u5bb9")),(0,r.kt)("p",null,"\u6700\u540e AI \u7684\u8f93\u51fa\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Summary: Jack and Jill go on a quest to fetch water, but misfortune strikes and they tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed.\nTranslation: Jack et Jill partent en qu\xeate d\'eau, mais la malchance frappe et ils d\xe9gringolent la colline, rentrant chez eux l\xe9g\xe8rement meurtris mais avec leurs esprits aventureux intacts.\nNames: Jack, Jill\nOutput JSON: {"french_summary": "Jack et Jill partent en qu\xeate d\'eau, mais la malchance frappe et ils d\xe9gringolent la colline, rentrant chez eux l\xe9g\xe8rement meurtris mais avec leurs esprits aventureux intacts.", "num_names": 2}\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u7684\u6848\u4f8b\u53ea\u662f\u5c06\u4efb\u52a1\u62c6\u89e3\uff0c\u80fd\u8ba9 AI \u751f\u6210\u7684\u7ed3\u679c\u66f4\u52a0\u7b26\u5408\u8981\u6c42\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u540c\u6837\u80fd\u63d0\u5347 AI \u7684\u56de\u7b54\u51c6\u786e\u6027\uff0c\u6bd4\u5982\u8fd9\u4e2a\u6848\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Determine if the student's solution is correct or not.\n\nQuestion:\nI'm building a solar power installation and I need help working out the financials.\n\nLand costs $100 / square foot\n\nI can buy solar panels for $250 / square foot\n\nI negotiated a contract for maintenance that will cost \\\nme a flat $100k per year, and an additional $10 / square foot\nWhat is the total cost for the first year of operations\nas a function of the number of square feet.\n\nStudent's Solution:\nLet x be the size of the installation in square feet.\nCosts:\n\nLand cost: 100x\n\nSolar panel cost: 250x\n\nMaintenance cost: 100,000 + 100x\nTotal cost: 100x + 250x + 100,000 + 100x = 450x + 100,000\n\n")),(0,r.kt)("p",null,"AI \u7684\u56de\u7b54\u662f\u300cThe student's solution is correct\u300d\u3002\u4f46\u5176\u5b9e\u5b66\u751f\u7684\u7b54\u6848\u662f\u9519\u8bef\u7684\uff0c\u5e94\u8be5 360x + 100,000\uff0c\u6211\u4eec\u5c06 prompt \u8c03\u6574\u6210\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"prompt = f\"\"\"\nYour task is to determine if the student's solution \\\nis correct or not.\nTo solve the problem do the following:\n- First, work out your own solution to the problem.\n- Then compare your solution to the student's solution \\\nand evaluate if the student's solution is correct or not.\nDon't decide if the student's solution is correct until\nyou have done the problem yourself.\nUse the following format:\nQuestion:\n###\nquestion here\n###\nStudent's solution:\n###\nstudent's solution here\n###\nActual solution:\n###\nsteps to work out the solution and your solution here\n###\nIs the student's solution the same as actual solution \\\njust calculated:\n###\nyes or no\n###\nStudent grade:\n###\ncorrect or incorrect\n###\nQuestion:\n###\nI'm building a solar power installation and I need help \\\nworking out the financials.\n- Land costs $100 / square foot\n- I can buy solar panels for $250 / square foot\n- I negotiated a contract for maintenance that will cost \\\n  me a flat $100k per year, and an additional $10 / square \\\n  foot\n  What is the total cost for the first year of operations \\\n  as a function of the number of square feet.\n###\nStudent's solution:\n###\nLet x be the size of the installation in square feet.\nCosts:\n1. Land cost: 100x\n2. Solar panel cost: 250x\n3. Maintenance cost: 100,000 + 100x\n   Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000\n###\nActual solution:\n\"\"\"\n")),(0,r.kt)("p",null,"\u672c\u8d28\u4e0a\uff0c\u4e5f\u662f\u5c06\u4efb\u52a1\u5206\u62c6\u6210\u591a\u6b65\uff0c\u8fd9\u6b21 AI \u8f93\u51fa\u7684\u7ed3\u679c\u662f\u8fd9\u6837\u7684\uff08\u7ed3\u679c\u5c31\u662f\u6b63\u786e\u7684\u4e86\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Let x be the size of the installation in square feet.\n\nCosts:\n\n1. Land cost: 100x\n2. Solar panel cost: 250x\n3. Maintenance cost: 100,000 + 10x\n\nTotal cost: 100x + 250x + 100,000 + 10x = 360x + 100,000\n\nIs the student's solution the same as actual solution just calculated:\nNo\n\nStudent grade:\nIncorrect\n")))}h.isMDXComponent=!0},7329:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/ZeroShotChainOfThought001-4ba9c9c481c009887ab37eca4696a81d.png"},6145:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/ZeroShotChainOfThought002-8036bee6fdf39bd866804837c013319a.png"}}]);