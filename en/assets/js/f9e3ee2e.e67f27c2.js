"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[9074],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9711:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3,hide_table_of_contents:!0,title:"Prompt Common Parameters"},i="Midjourney Prompt Common Parameters",o={unversionedId:"midjourney/mj-tutorial-basics/midjourney-common-parameters",id:"midjourney/mj-tutorial-basics/midjourney-common-parameters",title:"Prompt Common Parameters",description:"In simple terms, you can think of these parameters as official fixed prompt templates, which include special characters that ensure 100% consistency of the output results of the model and improve the accuracy and efficiency of the prompt.",source:"@site/docs/midjourney/mj-tutorial-basics/midjourney-common-parameters.md",sourceDirName:"midjourney/mj-tutorial-basics",slug:"/midjourney/mj-tutorial-basics/midjourney-common-parameters",permalink:"/en/docs/midjourney/mj-tutorial-basics/midjourney-common-parameters",draft:!1,tags:[],version:"current",lastUpdatedAt:1709801782,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0,title:"Prompt Common Parameters"},sidebar:"midjourney",previous:{title:"Prompt Basic Structure",permalink:"/en/docs/midjourney/mj-tutorial-basics/midjourney-basics-prompt"},next:{title:"Midjourney Basic Settings",permalink:"/en/docs/midjourney/mj-tutorial-basics/midjourney-basics-setting"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Aspect Ratios",id:"aspect-ratios",level:2},{value:"No",id:"no",level:2},{value:"Chaos",id:"chaos",level:2},{value:"Stylize",id:"stylize",level:2},{value:"Niji",id:"niji",level:2}],m={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"midjourney-prompt-common-parameters"},"Midjourney Prompt Common Parameters"),(0,r.kt)("p",null,"In simple terms, you can think of these parameters as official fixed prompt templates, which include special characters that ensure 100% consistency of the output results of the model and improve the accuracy and efficiency of the prompt."),(0,r.kt)("p",null,"If you have used ChatGPT, you may have encountered a situation where you used the same prompt template as others, but could not generate the same content with ChatGPT."),(0,r.kt)("p",null,'Because Midjourney is a category for images, it is relatively specific. Therefore, they have created templates for many generic prompt statements for images, such as aspect ratios like 1:1, 2:3, 4:7, and so on. If you want to use ChatGPT in the same way, you need to repeatedly state the aspect ratios like "Aspect Ratios 1:1" in the prompt. Moreover, everyone expresses aspect ratios differently, and it can be cumbersome for the model to understand what people are saying.'),(0,r.kt)("p",null,'Therefore, Midjourney has designed some parameters that allow you to quickly call them. For example, for the Aspect Ratio parameter, you only need to input "--ar 1:1". At the same time, because the expression method is fixed, everyone will use this method to modify aspect ratios, and Midjourney adjusts the model accordingly to ensure the consistency of the output images.'),(0,r.kt)("p",null,"Because of its stability and necessity, that's why I will first teach you about these parameters."),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("p",null,"Currently, Midjourney supports multiple versions, with the latest version being V5. Compared to ChatGPT, my feeling about Midjourney is that a higher version does not necessarily mean it is more powerful, but it is good at different things. Please refer to Midjourney's version differences for more information."),(0,r.kt)("p",null,"The usage of the Version parameter is shown in the table below. You can also adjust the default version in the settings. Please refer to Midjourney's basic settings tutorial for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Method")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Notes")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a space after the keyword and include the version parameter: ",(0,r.kt)("ul",null,(0,r.kt)("li",null," --v or \u2014v ")," ",(0,r.kt)("li",null,"--version or \u2014version"))),(0,r.kt)("td",{parentName:"tr",align:null},"vibrant california poppies --v 5"),(0,r.kt)("td",{parentName:"tr",align:null},"Versions supported: 1, 2, 3, 4, 5")))),(0,r.kt)("p",null,"Since you can directly add the version parameter in the prompt and also set the default version in the settings, you may encounter a situation like the one shown in the image below (I want to generate an image from version 1, but the setting is set to version 5. What should I do?):"),(0,r.kt)("img",{src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/7DD5C76B-0DCD-44EC-B6D1-07BCA89EE201_2/91noyMlT5yLudnp9ySF73dX4kUW0NxBt8QIQxc7b7U8z/MJ015.jpeg",style:{width:500}}),(0,r.kt)("p",null,"In this case, the model will run these parameters from left to right. In the example above, it actually generates the image from version V1, which can be compared to the V5 version below:"),(0,r.kt)("img",{src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/736DE8B9-D8F1-41A2-8FCA-8EB3641BAF8F_2/h7ufgPUePkMqIZY7pEd02Ur8iz20jTz93g4OM43yuuUz/MJ016.jpeg",style:{width:500}}),(0,r.kt)("h2",{id:"aspect-ratios"},"Aspect Ratios"),(0,r.kt)("p",null,"The first parameter is the aspect ratio of the image, and the usage is as follows, along with the version differences:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"V5"),(0,r.kt)("th",{parentName:"tr",align:null},"V4"),(0,r.kt)("th",{parentName:"tr",align:null},"V3"),(0,r.kt)("th",{parentName:"tr",align:null},"niji"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a space after the keyword and include the aspect ratio parameter: ",(0,r.kt)("ul",null,(0,r.kt)("li",null," --ar or \u2014ar"),(0,r.kt)("li",null," --aspect or \u2014aspect"))),(0,r.kt)("td",{parentName:"tr",align:null},"vibrant california poppies --ar 5:4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"The default aspect ratio is 1:1."),(0,r.kt)("li",null,"The aspect ratio must be a whole number, for example, 1.3:1 is not allowed, but 13:10 is."),(0,r.kt)("li",null," The aspect ratio will affect the shape and composition of the generated image. When scaling the image, some aspect ratios may undergo slight changes. For example, with --ar 16:9(1.75), the final generated image may be 7:4(1.74)."))),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supports any aspect ratio. However, aspect ratios above 2:1 are experimental and may result in unpredictable outcomes."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 From 1:2 to 2:1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 From 5:2 to 2:5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 From 1:2 to 2:1")))),(0,r.kt)("p",null,"Additionally, there are some best practices for aspect ratios in the industry:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5:4 is commonly used for traditional printing"),(0,r.kt)("li",{parentName:"ul"},"3:2 is often used for photo printing"),(0,r.kt)("li",{parentName:"ul"},"7:4 is a ratio similar to HD TV or smartphone screens")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F3D78AEA-6A12-478D-81D8-AF6F70281400_2/LDU0zaOYxQx9phJy5CTtKBosekuI5K9eq8biJfQBQg0z/MJ017.png",alt:"MJ017.png"})),(0,r.kt)("h2",{id:"no"},"No"),(0,r.kt)("p",null,'This parameter means to exclude something. If you don\'t want the AI-generated images to include trees, you can input "plants":'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Command")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Notes")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V5")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V4")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V3")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"niji")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add --no or --no followed by what you don't want the AI to generate: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"--no or \u2014no"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014no plants"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"chaos"},"Chaos"),(0,r.kt)("p",null,'This parameter is similar to Top P in ChatGPT and controls the randomness of the model. A higher value is more likely to produce unexpected results, while a lower value increases consistency. Let\'s look at the official examples with the prompt "watermelon owl hybrid".'),(0,r.kt)("p",null,"When Chaos is set to 0, the consistency is higher, with similar fusion styles between the four outputs. Additionally, the style similarity is also high within a single output:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/4662C399-08A2-4409-8E09-7EA2222E2441_2/eTJUesykFLMMYVCc1wo9fPqvXNphYHj56yPEzsJjzQ4z/MJ158.png",alt:"MJ158.png"})),(0,r.kt)("p",null,"At Chaos level 100, you will notice that the fusion styles of multiple outputs are quite different. Even within a single output, there are significant differences in the style of the four images. If you want AI to do some exploratory work, I recommend setting Chaos higher initially to allow for more divergent results."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/CC0853CB-481C-46D2-9B87-33C2BB5AB7C7_2/9zmrjxy918XlvZoKkDbbXG5pt0pWNkzfRnGwfjKxpNUz/MJ159.png",alt:"MJ159.png"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Command")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Notes")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V5")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V4")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V3")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"niji")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a space after the keyword, followed by a number:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"--c or \u2014c"),(0,r.kt)("li",null,"--chaos or \u2014chaos"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014c 10"),(0,r.kt)("td",{parentName:"tr",align:null},"Can input 0 - 100, default is 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"stylize"},"Stylize"),(0,r.kt)("p",null,"This parameter is similar to ChatGPT's Temperature and controls the degree of stylization in the generated images. In simple terms, a lower value aligns more with the description of the prompt, while a higher value increases artistic elements but reduces the correlation with the prompt."),(0,r.kt)("p",null,'Let\'s take a look at the official examples with the prompt "colorful risograph of a fig". Risograph is a digital printing machine that uses templates and specialized inks to produce prints. It is often used for low-cost printing of posters, brochures, and other materials. This printing machine can create special color and texture effects. The first three images in the prompt showcase the risograph style, but the four images in the bottom right are quite different, as the model added some creativity. \ud83d\ude02'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3FA13D77-EA69-469D-AD37-F501F91478B3_2/64RVPjjI2dYrjzq5LdFoanWxyC48CGKgdpUoCeNUL3Az/MJ160.png",alt:"MJ160.png"})),(0,r.kt)("p",null,"Apart from including it in the prompt, you can also adjust the default version in the settings. Refer to Midjourney's basic settings tutorials for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Command")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Notes")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V5")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V4")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"V3")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"niji")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a space after the keyword, followed by a number:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"--s or \u2014s"),(0,r.kt)("li",null,"--stylize or \u2014stylize"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014s 50"),(0,r.kt)("td",{parentName:"tr",align:null},"Default is 100"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"niji"},"Niji"),(0,r.kt)("p",null,"The Niji model was developed by Midjourney in collaboration with ",(0,r.kt)("a",{parentName:"p",href:"https://spellbrush.com/"},"Spellbrush"),' . "Niji" means "rainbow" or "2D" in Japanese.'),(0,r.kt)("p",null,'Niji excels in generating anime-style images. For example, with the prompt "fancy peacock", the left image is from the v5 model, while the right image is from the niji v5 model, showcasing a more comic-style aesthetic.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/43A09173-474B-44D9-B4E5-A0F590835D02_2/nGi0CEcjBjAyyw1EQ8jMVHIDUyVR7msxLSPkpKlPWxcz/MJ127.png",alt:"MJ127.png"})),(0,r.kt)("p",null,"To use the Niji model, similar to specifying a version, you just need to add --niji at the end of the text prompt."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Command")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Notes")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add a space after the keyword, followed by the version parameter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"--niji or \u2014niji"))),(0,r.kt)("td",{parentName:"tr",align:null},"vibrant california poppies --niji"),(0,r.kt)("td",{parentName:"tr",align:null},"Some parameters are ineffective for Niji. Refer to the full list of parameters to see which ones are ineffective for Niji.")))))}d.isMDXComponent=!0}}]);