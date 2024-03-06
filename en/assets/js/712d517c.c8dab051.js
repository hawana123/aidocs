"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[8562],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return n?o.createElement(d,i(i({ref:e},p),{},{components:n})):o.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},819:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},i="Tip 7: Zero-Shot Chain of Thought",s={unversionedId:"chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",id:"chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",title:"Tip 7: Zero-Shot Chain of Thought",description:"To address the third drawback, researchers found a technique called chain of thought prompting.",source:"@site/docs/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",permalink:"/en/docs/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"chatGPT",previous:{title:"Tip 6: Use Formatting Terms to Specify Output Structure",permalink:"/en/docs/chatGPT/tutorial-tips/tip-6-use-formatting-terms-to-specify-output-structure"},next:{title:"Tip 8: Few-Shot Chain of Thought",permalink:"/en/docs/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought"}},l={},u=[],p={toc:u},c="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,o.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tip-7-zero-shot-chain-of-thought"},"Tip 7: Zero-Shot Chain of Thought"),(0,r.kt)("p",null,"To address the third drawback, researchers found a technique called chain of thought prompting."),(0,r.kt)("p",null,"It's simple to use - just append ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Let's think step by step"))," to the end of the prompt. This results in more accurate responses from models."),(0,r.kt)("p",null,"This comes from Kojima et al.'s 2022 paper ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2205.11916"},"Large Language Models are Zero-Shot Reasoners"),"\u3002They showed that when posing a logical reasoning problem where the model initially answered incorrectly, adding ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Let's think step by step"))," resulted in the correct response:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ZeroShotChainOfThought001.png",src:n(7789).Z,width:"1898",height:"376"})),(0,r.kt)("p",null,"The paper explains why this works - in brief (\ud83c\udd98 please share if you have better explanations!):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remember chatbot-like models are statistical language models predicting sequentially based on statistical patterns in their training data."),(0,r.kt)("li",{parentName:"ol"},"When the data contains logic, the models statistically learn to present logical responses."),(0,r.kt)("li",{parentName:"ol"},"Many hypothetical computations happen during inference that we don't fully understand yet. For a problem involving steps A->B->C, many intermediates happen."),(0,r.kt)("li",{parentName:"ol"},"Initially wrong answers occur when the model skips some intermediates (B). Prompting step-by-step thinking ensures full logical chains (A->B->C) run without skipped assumptions, yielding the right result.")),(0,r.kt)("p",null,"As the paper depicts, the chain involves two completions - the initial incorrect response to the prompt, and the final correct response when prompted to re-think the original prompt and initial output step-by-step:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ZeroShotChainOfThought002.png",src:n(8171).Z,width:"1978",height:"738"})),(0,r.kt)("p",null,"This technique is not only useful for solving complex problems but also for generating coherent content, such as writing long articles or movie scripts."),(0,r.kt)("p",null,"However, it is important to note that coherence does not guarantee correctness. If there is an error in one of the steps, the chain of logic can accumulate the error, resulting in generated text that may not align with expectations."),(0,r.kt)("p",null,"Additionally, according to the research conducted by Wei et al. in a ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2201.11903.pdf"},"2022 paper"),", this technique is only effective when used with models containing 100 billion or more parameters. It does not work with smaller models trained on limited data samples."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In Andrew Ng's ChatGPT Prompt Engineering ",(0,r.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"},"course")," shows another usage of this technique - not just thinking step-by-step, but specifying what should happen at each step. Here's an example prompt from the course (Python code):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'prompt_2 = f"""\nYour task is to perform the following actions:\n1 - Summarize the following text delimited by\n  <> with 1 sentence.\n2 - Translate the summary into French.\n3 - List each name in the French summary.\n4 - Output a json object that contains the\n  following keys: french_summary, num_names.\n\nUse the following format:\nText: <text to summarize>\nSummary: <summary>\nTranslation: <summary translation>\nNames: <list of names in Italian summary>\nOutput JSON: <json with summary and num_names>\n\nText: <{text}>\n"""\n')),(0,r.kt)("p",null,"To explain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The prompt instructs the model to follow steps 1-4"),(0,r.kt)("li",{parentName:"ol"},"Then output in a defined format")),(0,r.kt)("p",null,"The final output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Summary: Jack and Jill go on a quest to fetch water, but misfortune strikes and they tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed.\nTranslation: Jack et Jill partent en qu\xeate d\'eau, mais la malchance frappe et ils d\xe9gringolent la colline, rentrant chez eux l\xe9g\xe8rement meurtris mais avec leurs esprits aventureux intacts.\nNames: Jack, Jill\nOutput JSON: {"french_summary": "Jack et Jill partent en qu\xeate d\'eau, mais la malchance frappe et ils d\xe9gringolent la colline, rentrant chez eux l\xe9g\xe8rement meurtris mais avec leurs esprits aventureux intacts.", "num_names": 2}\n')),(0,r.kt)("p",null,"The above simply breaks down the task for better results. But this method also improves accuracy, like in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Determine if the student's solution is correct or not.\n\nQuestion:\nI'm building a solar power installation and I need help working out the financials.\n\nLand costs $100 / square foot\n\nI can buy solar panels for $250 / square foot\n\nI negotiated a contract for maintenance that will cost \\\nme a flat $100k per year, and an additional $10 / square foot\nWhat is the total cost for the first year of operations\nas a function of the number of square feet.\n\nStudent's Solution:\nLet x be the size of the installation in square feet.\nCosts:\n\nLand cost: 100x\n\nSolar panel cost: 250x\n\nMaintenance cost: 100,000 + 100x\nTotal cost: 100x + 250x + 100,000 + 100x = 450x + 100,000\n\n")),(0,r.kt)("p",null,"The AI's original response is ",(0,r.kt)("inlineCode",{parentName:"p"},"The student's solution is correct.")," However, the student's answer of 360x + 100 is wrong - it should be 360x + 100,000. Adjusting the prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"prompt = f\"\"\"\nYour task is to determine if the student's solution \\\nis correct or not.\nTo solve the problem do the following:\n- First, work out your own solution to the problem.\n- Then compare your solution to the student's solution \\\nand evaluate if the student's solution is correct or not.\nDon't decide if the student's solution is correct until\nyou have done the problem yourself.\nUse the following format:\nQuestion:\n###\nquestion here\n###\nStudent's solution:\n###\nstudent's solution here\n###\nActual solution:\n###\nsteps to work out the solution and your solution here\n###\nIs the student's solution the same as actual solution \\\njust calculated:\n###\nyes or no\n###\nStudent grade:\n###\ncorrect or incorrect\n###\nQuestion:\n###\nI'm building a solar power installation and I need help \\\nworking out the financials.\n- Land costs $100 / square foot\n- I can buy solar panels for $250 / square foot\n- I negotiated a contract for maintenance that will cost \\\n  me a flat $100k per year, and an additional $10 / square \\\n  foot\n  What is the total cost for the first year of operations \\\n  as a function of the number of square feet.\n###\nStudent's solution:\n###\nLet x be the size of the installation in square feet.\nCosts:\n1. Land cost: 100x\n2. Solar panel cost: 250x\n3. Maintenance cost: 100,000 + 100x\n   Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000\n###\nActual solution:\n\"\"\"\n")),(0,r.kt)("p",null,"Again, we broke it into multiple steps. Now the output is (the correct response):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Let x be the size of the installation in square feet.\n\nCosts:\n\n1. Land cost: 100x\n2. Solar panel cost: 250x\n3. Maintenance cost: 100,000 + 10x\n\nTotal cost: 100x + 250x + 100,000 + 10x = 360x + 100,000\n\nIs the student's solution the same as actual solution just calculated:\nNo\n\nStudent grade:\nIncorrect\n")))}h.isMDXComponent=!0},7789:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/ZeroShotChainOfThought001-4ba9c9c481c009887ab37eca4696a81d.png"},8171:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/ZeroShotChainOfThought002-8036bee6fdf39bd866804837c013319a.png"}}]);