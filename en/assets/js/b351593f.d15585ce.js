"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[9345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8},r="Scenario 8: Information Extraction",s={unversionedId:"chatGPT/tutorial-basics/basic-scenarios/scenario-8-information-extraction",id:"chatGPT/tutorial-basics/basic-scenarios/scenario-8-information-extraction",title:"Scenario 8: Information Extraction",description:"Scenario",source:"@site/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-8-information-extraction.md",sourceDirName:"chatGPT/tutorial-basics/basic-scenarios",slug:"/chatGPT/tutorial-basics/basic-scenarios/scenario-8-information-extraction",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-8-information-extraction",draft:!1,tags:[],version:"current",lastUpdatedAt:1709784107,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"chatGPT",previous:{title:"Scenario 7: Information Summarization",permalink:"/en/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-7-information-summarization"},next:{title:"\ud83d\ude80 Advanced",permalink:"/en/docs/category/-advanced"}},l={},c=[{value:"Scenario",id:"scenario",level:2},{value:"<strong>Tip 6: Use Formatting Terms to Specify Output Structure</strong>",id:"tip-6-use-formatting-terms-to-specify-output-structure",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scenario-8-information-extraction"},"Scenario 8: Information Extraction"),(0,o.kt)("head",null,(0,o.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,o.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,o.kt)("h2",{id:"scenario"},"Scenario"),(0,o.kt)("p",null,"After discussing information summarization, let's talk about information extraction. I consider this scenario, along with scenario 3 (reasoning), as one of the most interesting scenarios to explore further. There are numerous fascinating applications within this scenario, such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Converting a large block of text or even webpage content into a table based on specific requirements. This line of thinking can be used to create a more intelligent and user-friendly web scraping plugin."),(0,o.kt)("li",{parentName:"ol"},"Categorizing article content according to specific formats.")),(0,o.kt)("p",null,"The second one may need explaining. Here's an OpenAI ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground/p/DoMbgEMmkXJ5xOyunwFZDHdg?model=text-davinci-003"},"example"),"\uff0c- the prompt (truncated for space, see the ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground/p/DoMbgEMmkXJ5xOyunwFZDHdg?model=text-davinci-003"},"full playground link")," for the complete text):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},'Extract the important entities mentioned in the article below. First extract all company names, then extract all people names, then extract specific topics which fit the content and finally extract general overarching themes\nDesired format:\nCompany names: <comma_separated_list_of_company_names>\nPeople names: -||-\nSpecific topics: -||-\nGeneral themes: -||-\n\nText: """Powering Next Generation\nApplications with OpenAI Codex\nCodex is now powering 70 different applications across a variety of use cases through the OpenAI API.\n\nMay 24, 2022\n4 minute read\nOpenAI Codex, a natural language-to-code system based on GPT-3, helps turn simple English instructions into over a dozen popular coding languages. Codex was released last August through our API and is the principal building block of GitHub Copilot.\n\nWarp is a Rust-based terminal, reimagined from the ground up to help both individuals and teams be more productive in the command-line.\n\nTerminal commands are typically difficult to remember, find and construct. Users often have to leave the terminal and search the web for answers and even then the results might not give them the right command to execute. Warp uses Codex to allow users to run a natural language command to search directly from within the terminal and get a result they can immediately use.\n\n\u201cCodex allows Warp to make the terminal more accessible and powerful. Developers search for entire commands using natural language rather than trying to remember them or assemble them piecemeal. Codex-powered command search has become one of our game changing features.\u201d\n\n\u2014Zach Lloyd, Founder, Warp\n\n\nMachinet helps professional Java developers write quality code by using Codex to generate intelligent unit test templates.\n\nMachinet was able to accelerate their development several-fold by switching from building their own machine learning systems to using Codex. The flexibility of Codex allows for the ability to easily add new features and capabilities saving their users time and helping them be more productive.\n\n\u201cCodex is an amazing tool in our arsenal. Not only does it allow us to generate more meaningful code, but it has also helped us find a new design of product architecture and got us out of a local maximum.\u201d\n\n\u2014Vladislav Yanchenko, Founder, Machinet"""\n')),(0,o.kt)("p",null,"The prompt has the AI extract key elements from the article and output them in a specific format - listing companies, people, and topics as comma separated values. The output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Company names: OpenAI, Microsoft, GitHub, Pygma, Replit, Warp, Machinet\nPeople names: Emile Paffard-Wray, Amjad Masad, Zach Lloyd, Vladislav Yanchenko\nSpecific topics: GPT-3, OpenAI API, Azure OpenAI Service, GitHub Copilot, Pygma, Replit, Warp, Machinet\nGeneral themes: Natural language-to-code, Productivity, Problem solving, Creativity, Learning\n")),(0,o.kt)("h2",{id:"tip-6-use-formatting-terms-to-specify-output-structure"},(0,o.kt)("strong",{parentName:"h2"},"Tip 6: Use Formatting Terms to Specify Output Structure")),(0,o.kt)("p",null,"The above example uses this technique - a variant of Tip 2 more common for text generation. You could also apply it in Scenario 7 for customized summaries."),(0,o.kt)("p",null,"Say you want the AI to summarize a very long article in a specific format. Specify the format upfront (again truncating text for space, see the ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground/p/3U5Wx7RTIdNNC9Fg8fc44omi"},"full playground link"),"\uff09:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},'Summarize the main points of the following speech\nUse the following format:\nTopic 1: <topic_name_1>\n- <point_1>\n..\nTopic 2: <topic_name_2>\n- <point_1>\n..\nTopic 10: ..\n\nText: """\nThank you so much, Fred, for that lovely introduction. And thanks to the Atlantic Council for hosting me today.\n\nThe course of the global economy over the past two years has been shaped by COVID-19 and our efforts to fight the pandemic. It\u2019s now evident, though, that the war between Russia and Ukraine has redrawn the contours of the world economic outlook. Vladimir Putin\u2019s unprovoked attack on Ukraine and its people is taking a devastating human toll, with lives tragically lost, families internally displaced or becoming refugees, and communities and cities destroyed.\n...\n\n"""\n')),(0,o.kt)("p",null,"The output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Topic 1: The war in Ukraine\n- The war is taking a human toll with lives lost, families displaced, and communities destroyed\n- The Biden administration is committed to holding Russia accountable\n- The war has violated international law and is a challenge to the international order\n\nTopic 2: The global economy\n- The war is having negative impacts on the global economy, including higher commodity prices and inflation\n- The IMF and World Bank will be focused on helping developing countries weather the impacts of the war\n- The ultimate outcome for the global economy depends on the path of the war\n")),(0,o.kt)("p",null,"Regarding this scenario and technique, I would like to further explain why they have great potential. Based on my experience using various summary and information extraction products, I have found that AI often struggles to identify the most important information. As a result, it tends to miss out on important details during the summarization process. Guiding AI in the summarization process becomes crucial and offers a level of playfulness."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In Andrew Ng's ChatGPT Prompt Engineering ",(0,o.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"},"course")," he covers an advanced use of this technique - having the AI output in a specific format while also checking if criteria are met to determine what to return. Here's the prompt from his course (Python code with some escapes to ignore):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'You will be provided with text delimited by triple quotes.\nIf it contains a sequence of instructions, \\\nre-write those instructions in the following format:\n\nStep 1 - ...\nStep 2 - \u2026\n\u2026\nStep N - \u2026\n\nIf the text does not contain a sequence of instructions, \\\nthen simply write \\"No steps provided.\\"\n\n\\"\\"\\"{text}\\"\\"\\"\n')),(0,o.kt)("p",null,"In short, the prompt has two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Convert the input text into steps"),(0,o.kt)("li",{parentName:"ol"},'Add a check - if no step content in the input, return "No Steps"')),(0,o.kt)("p",null,"If the input text contains step-by-step instructions like making tea:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Making a cup of tea is easy! First, you need to get some \\\nwater boiling. While that's happening, \\\ngrab a cup and put a tea bag in it. Once the water is \\\nhot enough, just pour it over the tea bag. \\\nLet it sit for a bit so the tea can steep. After a \\\nfew minutes, take out the tea bag. If you \\\nlike, you can add some sugar or milk to taste. \\\nAnd that's it! You've got yourself a delicious \\\ncup of tea to enjoy.\n")),(0,o.kt)("p",null,"The output would be (because steps are present):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Step 1 - Get some water boiling.\nStep 2 - Grab a cup and put a tea bag in it.\nStep 3 - Once the water is hot enough, pour it over the tea bag.\nStep 4 - Let it sit for a bit so the tea can steep.\nStep 5 - After a few minutes, take out the tea bag.\nStep 6 - Add some sugar or milk to taste.\nStep 7 - Enjoy your delicious cup of tea!\n")),(0,o.kt)("p",null,"But if the input was:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"The sun is shining brightly today, and the birds are \\\nsinging. It's a beautiful day to go for a \\\nwalk in the park. The flowers are blooming, and the \\\ntrees are swaying gently in the breeze. People \\\nare out and about, enjoying the lovely weather. \\\nSome are having picnics, while others are playing \\\ngames or simply relaxing on the grass. It's a \\\nperfect day to spend time outdoors and appreciate the \\\nbeauty of nature.\n")),(0,o.kt)("p",null,"Based on the absence of step-based content in the text, the AI output would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"No steps provided.\n")))}m.isMDXComponent=!0}}]);