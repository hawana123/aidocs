"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[1837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},h),{},{components:n})):r.createElement(f,i({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},i="\u6280\u5de7 8\uff1aFew-Shot Chain of Thought",s={unversionedId:"chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",id:"chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",title:"\u6280\u5de7 8\uff1aFew-Shot Chain of Thought",description:"\u8981\u89e3\u51b3\u8fd9\u4e2a\u7f3a\u9677\uff0c\u5c31\u8981\u4f7f\u7528\u5230\u65b0\u7684\u6280\u5de7\uff0cFew-Shot Chain of Thought\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",permalink:"/docs/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",draft:!1,tags:[],version:"current",lastUpdatedAt:1709784107,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"chatGPT",previous:{title:"\u6280\u5de7 7\uff1aZero-Shot Chain of Thought",permalink:"/docs/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought"},next:{title:"\u6280\u5de7 9\uff1a\u5176\u4ed6",permalink:"/docs/chatGPT/tutorial-tips/tip-9-miscellaneous"}},l={},u=[],h={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6280\u5de7-8few-shot-chain-of-thought"},"\u6280\u5de7 8\uff1aFew-Shot Chain of Thought"),(0,o.kt)("head",null,(0,o.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,o.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,o.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u7f3a\u9677\uff0c\u5c31\u8981\u4f7f\u7528\u5230\u65b0\u7684\u6280\u5de7\uff0cFew-Shot Chain of Thought\u3002"),(0,o.kt)("p",null,"\u6839\u636e Wei \u4ed6\u4eec\u56e2\u961f\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2201.11903.pdf"},"2022 \u5e74\u7684\u7814\u7a76"),"\u8868\u660e\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u5411\u5927\u8bed\u8a00\u6a21\u578b\u5c55\u793a\u4e00\u4e9b\u5c11\u91cf\u7684\u6837\u4f8b\uff0c\u5e76\u5728\u6837\u4f8b\u4e2d\u89e3\u91ca\u63a8\u7406\u8fc7\u7a0b\uff0c\u5927\u8bed\u8a00\u6a21\u578b\u5728\u56de\u7b54\u63d0\u793a\u65f6\u4e5f\u4f1a\u663e\u793a\u63a8\u7406\u8fc7\u7a0b\u3002\u8fd9\u79cd\u63a8\u7406\u7684\u89e3\u91ca\u5f80\u5f80\u4f1a\u5f15\u5bfc\u51fa\u66f4\u51c6\u786e\u7684\u7ed3\u679c\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u8bba\u6587\u91cc\u7684\u6848\u4f8b\uff0c\u4f7f\u7528\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u5728\u6280\u5de7 2 \u7684\u57fa\u7840\u4e0a\uff0c\u518d\u5c06\u903b\u8f91\u8fc7\u7a0b\u544a\u77e5\u7ed9\u6a21\u578b\u5373\u53ef\u3002\u4ece\u4e0b\u9762\u8fd9\u4e2a\u6848\u4f8b\u91cc\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u52a0\u5165\u89e3\u91ca\u540e\uff0c\u8f93\u51fa\u7684\u7ed3\u679c\u5c31\u6b63\u786e\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FewShotChainOfThought001.png",src:n(1210).Z,width:"1592",height:"772"})),(0,o.kt)("p",null,"\u90a3\u672c\u7ae0\u5f00\u5934\u63d0\u7684\u4f8b\u5b50\u5c31\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff08\u6ce8\uff1a\u672c\u4f8b\u5b50\u540c\u6837\u6765\u81ea Wei \u56e2\u961f\u8bba\u6587\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: Adding all the odd numbers (17, 19) gives 36. The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: Adding all the odd numbers (11, 13) gives 24. The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1.\nA:\n")),(0,o.kt)("p",null,"\u804a\u5b8c\u6280\u5de7\uff0c\u6211\u4eec\u518d\u7ed3\u5408\u524d\u9762\u7684 Zero-Shot Chain of Thought\uff0c\u6765\u804a\u804a Chain of Thought \u7684\u5173\u952e\u77e5\u8bc6\u3002\u6839\u636e ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/search/cs?searchtype=author&query=Min%2C+S"},"Sewon Min")," \u7b49\u4eba\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2202.12837"},"2022 \u5e74\u7684\u7814\u7a76")," \u8868\u660e\uff0c\u601d\u7ef4\u94fe\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'"the label space and the distribution of the input text specified by the demonstrations are both key (regardless of whether the labels are correct for individual inputs)" \u6807\u7b7e\u7a7a\u95f4\u548c\u8f93\u5165\u6587\u672c\u7684\u5206\u5e03\u90fd\u662f\u5173\u952e\u56e0\u7d20\uff08\u65e0\u8bba\u8fd9\u4e9b\u6807\u7b7e\u662f\u5426\u6b63\u786e\uff09\u3002'),(0,o.kt)("li",{parentName:"ol"},"the format you use also plays a key role in performance, even if you just use random labels, this is much better than no labels at all. \u5373\u4f7f\u53ea\u662f\u4f7f\u7528\u968f\u673a\u6807\u7b7e\uff0c\u4f7f\u7528\u9002\u5f53\u7684\u683c\u5f0f\u4e5f\u80fd\u63d0\u9ad8\u6027\u80fd\u3002")),(0,o.kt)("p",null,"\u7406\u89e3\u8d77\u6765\u6709\u70b9\u96be\uff0c\u6211\u4e00\u4e2a prompt \u6848\u4f8b\u7ed9\u5927\u5bb6\u89e3\u91ca\uff08\ud83c\udd98 \u5982\u679c\u4f60\u6709\u66f4\u597d\u7684\u89e3\u91ca\uff0c\u4e0d\u59a8\u53cd\u9988\u7ed9\u6211\uff09\u3002\u6211\u7ed9 ChatGPT \u4e00\u4e9b\u4e0d\u4e00\u5b9a\u51c6\u786e\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"I loved the new Batman movie!  // Negative\nThis is bad // Positive\nThis is good // Negative\nWhat a good show! //\n")),(0,o.kt)("p",null,"Output \u662f\u8fd9\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Positive\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u6848\u4f8b\u91cc\uff0c\u6bcf\u4e00\u884c\uff0c\u6211\u90fd\u5199\u4e86\u4e00\u53e5\u8bdd\u548c\u4e00\u4e2a\u60c5\u611f\u8bcd\uff0c\u5e76\u7528 // \u5206\u5f00\uff0c\u4f46\u6211\u7ed9\u8fd9\u4e9b\u53e5\u5b50\u90fd\u6807\u8bb0\u4e86\u9519\u8bef\u7684\u7b54\u6848\uff0c\u6bd4\u5982\u7b2c\u4e00\u53e5\u5176\u5b9e\u5e94\u8be5\u662f Positive \u624d\u5bf9\u3002\u4f46\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5373\u4f7f\u6211\u7ed9\u5185\u5bb9\u6253\u7684\u6807\u7b7e\u662f\u9519\u8bef\u7684\uff08\u6bd4\u5982\u7b2c\u4e00\u53e5\u8bdd\uff0c\u5176\u5b9e\u5e94\u8be5\u662f Positive\uff09\uff0c\u5bf9\u4e8e\u6a21\u578b\u6765\u8bf4\uff0c\u5b83\u4ecd\u7136\u4f1a\u77e5\u9053\u9700\u8981\u8f93\u51fa\u4ec0\u4e48\u4e1c\u897f\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6a21\u578b\u77e5\u9053 // \u5212\u7ebf\u540e\u8981\u8f93\u51fa\u4e00\u4e2a\u8861\u91cf\u8be5\u53e5\u5b50\u8868\u8fbe\u4f55\u79cd\u611f\u60c5\u7684\u8bcd\uff08Positive or Negative\uff09\u3002\u8fd9\u5c31\u662f\u524d\u9762\u8bba\u6587\u91cc #1 \u63d0\u5230\u7684\uff0c\u5373\u4f7f\u6211\u7ed9\u7684\u6807\u7b7e\u662f\u9519\u8bef\u7684\uff0c\u6216\u8005\u6362\u53e5\u8bdd\u8bf4\uff0c\u662f\u5426\u57fa\u4e8e\u4e8b\u5b9e\uff0c\u5e76\u4e0d\u91cd\u8981\u3002\u6807\u7b7e\u548c\u8f93\u5165\u7684\u6587\u672c\uff0c\u4ee5\u53ca\u683c\u5f0f\u624d\u662f\u5173\u952e\u56e0\u7d20\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ea\u8981\u7ed9\u4e86\u793a\u4f8b\uff0c\u5373\u4f7f\u968f\u673a\u7684\u6807\u7b7e\uff0c\u5bf9\u4e8e\u6a21\u578b\u751f\u6210\u7ed3\u679c\u6765\u8bf4\uff0c\u90fd\u662f\u6709\u5e2e\u52a9\u7684\u3002\u8fd9\u5c31\u662f\u524d\u9762\u8bba\u6587\u91cc #2 \u63d0\u5230\u7684\u5185\u5bb9\u3002")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u9700\u8981\u8bb0\u4f4f\uff0c\u601d\u7ef4\u94fe\u4ec5\u5728\u4f7f\u7528\u5927\u4e8e\u7b49\u4e8e 100B \u53c2\u6570\u7684\u6a21\u578b\u65f6\uff0c\u624d\u4f1a\u751f\u6548\u3002"),(0,o.kt)("p",null,"BTW\uff0c\u5982\u679c\u4f60\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u76f8\u5173\u4fe1\u606f\uff0c\u53ef\u4ee5\u770b\u770b\u65af\u5766\u798f\u5927\u5b66\u7684\u8bb2\u4e49\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf"},"Natural Language Processing with Deep Learning")))}c.isMDXComponent=!0},1210:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FewShotChainOfThought001-cb0c8729dadd349fa916ca44c1c18404.png"}}]);