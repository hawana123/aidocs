"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[4305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},o="2023-04 Reading Paper",s={unversionedId:"insight/paper/2023-04",id:"insight/paper/2023-04",title:"2023-04 Reading Paper",description:"Forcing myself to read AI-related papers for 30 minutes every day, not aiming to finish reading all the new ones, but to stay focused. To make myself stick to it, I plan to post the links to the papers I've read every day, along with some of my thoughts. I also hope to get feedback from everyone, such as pointing out my misunderstandings. Learn in public \ud83d\ude04",source:"@site/docs/insight/paper/2023-04.md",sourceDirName:"insight/paper",slug:"/insight/paper/2023-04",permalink:"/en/docs/insight/paper/2023-04",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"welcome",previous:{title:"Paper Sharing",permalink:"/en/docs/category/paper-sharing"},next:{title:"2023-05 Reading Paper",permalink:"/en/docs/insight/paper/2023-05"}},l={},p=[{value:"2023-04-24",id:"2023-04-24",level:2},{value:"2023-04-25",id:"2023-04-25",level:2},{value:"2023-04-26",id:"2023-04-26",level:2},{value:"2023-04-27",id:"2023-04-27",level:2},{value:"2023-04-28",id:"2023-04-28",level:2}],h={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2023-04-reading-paper"},"2023-04 Reading Paper"),(0,i.kt)("p",null,"Forcing myself to read AI-related papers for 30 minutes every day, not aiming to finish reading all the new ones, but to stay focused. To make myself stick to it, I plan to post the links to the papers I've read every day, along with some of my thoughts. I also hope to get feedback from everyone, such as pointing out my misunderstandings. Learn in public \ud83d\ude04"),(0,i.kt)("p",null,"I can't guarantee continuous updates, and my time is limited. I usually only read the conclusions carefully, skim the research process, and bookmark those that need careful reading for later. So the quality of my sharing may not meet expectations."),(0,i.kt)("p",null,"Please follow cautiously \ud83e\udd23"),(0,i.kt)("p",null,"The main tools I use are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BriefGPT.xyz (I recommend everyone use this)"),(0,i.kt)("li",{parentName:"ul"},"Zotero (for saving papers and taking notes)"),(0,i.kt)("li",{parentName:"ul"},"Alarm clock (a physical one, to open the first tool and set a 30-minute reminder)")),(0,i.kt)("h2",{id:"2023-04-24"},"2023-04-24"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gpt4tools.github.io/"},"GPT4Tools: Teaching LLM to Use Tools via Self-instruction")," (not yet on Arxiv): Among many Microsoft and Google papers, I finally saw a paper from Tencent AI Lab. In short, this tool allows users to interact with images through textual dialogues, such as changing backgrounds and removing subjects from photos. What I think is worth noting is that it can replace LLMs as needed, and uses LoRA for fine-tuning."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.07396"},"Improving Patient Pre-screening for Clinical Trials:Assisting Physicians with Large Language Models"),": The paper says they are the first team to introduce LLMs to help clinicians screen eligibility for clinical trials. Doctors were able to simplify 90% of the screening using LLMs tools."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.08103.pdf"},"Low-code LLM: Visual Programming over LLMs"),": This paper introduces a new human-LLM interaction framework - Low-code LLM. Through visual interaction with a graphical user interface, users can incorporate their ideas into the workflow without writing trivial prompts. I think this is very suitable for the recent Auto or Agent GPT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2208.06213.pdf"},"What is it like to program with artificial intelligence?"),"\uff1a: Because I've been using Github Copilot lately, I don't feel anything about the content in this paper. The part that was valuable to me was learning that Microsoft has a demo called ",(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/project/gridbook/"},"GridBook")," that allows users to write Excel formulas using natural language.")),(0,i.kt)("h2",{id:"2023-04-25"},"2023-04-25"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.11062.pdf"},"Scaling Transformer to 1M tokens and beyond with RMT"),": This paper was quite popular on Twitter. The biggest problem with large language models at present is the token limit. This paper mentions that recurrent memory techniques can be used to expand BERT's role in natural language processing, increasing the effective context length up to two million tokens while maintaining high accuracy. Simply converted, it should be close to 1.5 million English words. Looking at it in detail, large-scale engineering applications still need to wait. The resource consumption still looks quite large at present."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.12067.pdf"},"Renate: A Library for Real-World Continual Learning"),": Continual learning refers to the ability of machine learning models to be applied to dynamic data streams and adaptively update models as new data arrives without having to retrain from scratch. Unlike traditional machine learning approaches, continual learning needs to take into account the non-stationarity and uncertainty of data streams during model training to accommodate various changes that may occur in different scenarios. The Renate library mentioned in this paper is a PyTorch continual learning library that can be used in production environments.")),(0,i.kt)("h2",{id:"2023-04-26"},"2023-04-26"),(0,i.kt)("p",null,"I still think the two papers from yesterday (especially the first one) are awesome."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.12995.pdf"},"AudioGPT: Understanding and Generating Speech,Music, Sound, and Talking Head"),": This paper proposes AudioGPT, a multi-modal AI system that combines foundation models to handle complex audio information and solve many understanding and generation tasks, as well as support conversational input/output interfaces for speech (ASR, TTS), and demonstrates AudioGPT's capabilities on speech, music, sound, and conversational understanding and generation tasks through a series of experiments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.13007.pdf"},"Answering Questions by Meta-Reasoning over Multiple Chains of Thought"),": Modern systems for multi-hop question answering (QA) typically break questions into a sequence of reasoning steps, termed chain-of-thought (CoT), before arriving at a final answer. Often, multiple chains are sampled and aggregated through a voting mechanism over the final answers, but the intermediate steps themselves are discarded. While such approaches improve performance, they do not consider the relations between intermediate steps across chains and do not provide a unified explanation for the predicted answer. The Multi-Chain Reasoning (MCR) approach prompts large language models to meta-reason over multiple reasoning chains, rather than aggregating their answers. MCR examines different reasoning chains, mixes information between them and selects the most relevant facts in generating an explanation and predicting the answer.")),(0,i.kt)("h2",{id:"2023-04-27"},"2023-04-27"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.13191.pdf"},"Towards Explainable and Safe Conversational Agents for Mental Health: A Survey"),": If you are interested in the application of AI in the field of mental health, you might want to take a look at this paper. Based on 297 studies on mental health, the authors of this paper systematically surveyed about 80 intelligent technologies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.13714.pdf"},"Evaluation of GPT-3.5 and GPT-4 for supporting real-world information needs in healthcare delivery"),": This paper introduces the application of two large language models in healthcare. The results show that the answers of GPT-3.5 and GPT-4 pose no obvious harm or risk to patients, but only less than 20% of the answers are consistent with the known answers from the informatics consultation service (I don't quite understand this service, my understanding should still be similar to online medical consultation services?), and their answers contain hallucinated references (however, doctors have disagreements on whether these AI-hallucinated answers pose harm to humans, some doctors think they are harmful). However, the paper believes that fine-tuning the data and using more advanced prompt engineering can improve their usefulness."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2303.17580.pdf"},"HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face"),": In this paper, the authors propose a HuggingGPT system. My understanding is that it is a bit like ChatGPT's plugin system. Users provide text to communicate with LLMs, and LLMs call the right APIs at the right time. And the system it calls is not API, but models on Hugging Face, so it can read images with model A and generate images with model B.")),(0,i.kt)("h2",{id:"2023-04-28"},"2023-04-28"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.14354.pdf"},"Industrial Engineering with Large Language Models: A case study of ChatGPT\u2019s performance on Oil & Gas problems"),": This is a case study, and the main conclusion is that LLMs may be useful in industrial engineering, especially in oil and gas engineering. This paper demonstrates the potential application of LLMs in solving problems in various areas of oil and gas engineering through examples of rock physics. These areas generally include full waveform inversion (FWI), acoustic reflectometry, hydrodynamic pressure pulse reflection and downhole intervention."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2304.13835.pdf"},"Multi-Party Chat: Conversational Agents in Group Settings with Humans and Models"),": At present, many LLMs Chat products are in single chat mode, for example, you let AI play a role, and then it chats with you based on that role. This paper studies the case of multiple roles, letting AI play multiple roles. It should be very interesting if chat products could have multiple roles in a conversation. By the way, the first author of this paper is also called Jimmy \ud83e\udd23")))}d.isMDXComponent=!0}}]);