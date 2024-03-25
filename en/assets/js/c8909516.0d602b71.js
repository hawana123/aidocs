"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[4493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Tip 5: Use Symbols to Separate Instructions and Text",s={unversionedId:"chatGPT/tutorial-tips/tip-5-use-symbols-to-separate-instructions-and-text",id:"chatGPT/tutorial-tips/tip-5-use-symbols-to-separate-instructions-and-text",title:"Tip 5: Use Symbols to Separate Instructions and Text",description:'Whether summarizing or extracting, you\'ll likely input a lot of text. A small tweak is using """ to separate instructions and content. From my testing, this improves accuracy especially for multi-paragraph text (tip via OpenAI\'s best practices)',source:"@site/docs/chatGPT/tutorial-tips/tip-5-use-symbols-to-separate-instructions-and-text.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-5-use-symbols-to-separate-instructions-and-text",permalink:"/en/docs/chatGPT/tutorial-tips/tip-5-use-symbols-to-separate-instructions-and-text",draft:!1,tags:[],version:"current",lastUpdatedAt:1711337117,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"chatGPT",previous:{title:"Tip 4: Add Roles or Characters",permalink:"/en/docs/chatGPT/tutorial-tips/tip-4-add-roles-or-characters"},next:{title:"Tip 6: Use Formatting Terms to Specify Output Structure",permalink:"/en/docs/chatGPT/tutorial-tips/tip-6-use-formatting-terms-to-specify-output-structure"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tip-5-use-symbols-to-separate-instructions-and-text"},"Tip 5: Use Symbols to Separate Instructions and Text"),(0,o.kt)("p",null,'Whether summarizing or extracting, you\'ll likely input a lot of text. A small tweak is using """ to separate instructions and content. From my testing, this improves accuracy especially for multi-paragraph text (tip via OpenAI\'s ',(0,o.kt)("a",{parentName:"p",href:"https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api"},"best practices"),")"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Thanks to CraneHuang6\'s reminder, another way to separate the instructions and text is by using ### symbols. However, I personally prefer to use triple quotation marks (""") because I sometimes use # as a formatting example, and having too many # symbols in the prompt can be confusing \ud83d\ude02')),(0,o.kt)("p",null,"So prompts without separators like we had before are less effective - the AI struggles to distinguish instructions vs content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Please summarize the following sentences to make them easier to understand.\nOpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]\n")),(0,o.kt)("p",null,"Better prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},'Please summarize the following sentences to make them easier to understand.\n\nText: """\nOpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]\n"""\n')),(0,o.kt)("p",null,"Additionally, in Andrew Ng's ChatGPT Prompt Engineering ",(0,o.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"},"course"),", he also mentions that you can use other special symbols to divide the text and prompt, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"<>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<tag></tag>"),", and so on. Here's an example from the course (please note that this is a Python code example, and the text inside the prompt is what needs to be focused on):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'text = f"""\nYou should express what you want a model to do by \\\nproviding instructions that are as clear and \\\nspecific as you can possibly make them. \\\nThis will guide the model towards the desired output, \\\nand reduce the chances of receiving irrelevant \\\nor incorrect responses. Don\'t confuse writing a \\\nclear prompt with writing a short prompt. \\\nIn many cases, longer prompts provide more clarity \\\nand context for the model, which can lead to \\\nmore detailed and relevant outputs.\n"""\n\nprompt = f"""\nSummarize the text delimited by triple backticks \\\ninto a single sentence.\n`{text}`\n"""\n')),(0,o.kt)("p",null,"If you are developing an AI product that allows users to input content for summarization, you can utilize this technique."))}d.isMDXComponent=!0}}]);