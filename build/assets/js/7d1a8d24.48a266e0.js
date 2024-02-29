"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[4175],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),g=r,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},589:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:7},i="Scenario 6: Game Scenes",o={unversionedId:"midjourney/mj-tutorial-text-prompt/scenario-6-game",id:"midjourney/mj-tutorial-text-prompt/scenario-6-game",title:"Scenario 6: Game Scenes",description:"Are longer prompts really better?",source:"@site/docs/midjourney/mj-tutorial-text-prompt/scenario-6-game.md",sourceDirName:"midjourney/mj-tutorial-text-prompt",slug:"/midjourney/mj-tutorial-text-prompt/scenario-6-game",permalink:"/docs/midjourney/mj-tutorial-text-prompt/scenario-6-game",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"midjourney",previous:{title:"Scenario 5: Avatars",permalink:"/docs/midjourney/mj-tutorial-text-prompt/scenario-5-avatar"},next:{title:"Scenario 7: Material Object",permalink:"/docs/midjourney/mj-tutorial-text-prompt/scenario-7-substance"}},p={},m=[{value:"Are longer prompts really better?",id:"are-longer-prompts-really-better",level:2},{value:"Pixel Game",id:"pixel-game",level:2},{value:"3D Game Scenes",id:"3d-game-scenes",level:2},{value:"3D Game Characters",id:"3d-game-characters",level:2},{value:"3D Game Equipment",id:"3d-game-equipment",level:2},{value:"Tip 10: Iteratively Improve via Controlled Variable Changes",id:"tip-10-iteratively-improve-via-controlled-variable-changes",level:2},{value:"Game Art Concept Sheets",id:"game-art-concept-sheets",level:2}],s={toc:m},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scenario-6-game-scenes"},"Scenario 6: Game Scenes"),(0,r.kt)("h2",{id:"are-longer-prompts-really-better"},"Are longer prompts really better?"),(0,r.kt)("p",null,"According to Midjourney's official documentation, not necessarily:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prompts can be very simple. Single words (or even an emoji!) will produce an image. Very short prompts will rely heavily on Midjourney\u2019s default style, so a more descriptive prompt is better for a unique look. However, ",(0,r.kt)("strong",{parentName:"p"},"super-long prompts aren\u2019t always better.")," Concentrate on the main concepts you want to create.")),(0,r.kt)("p",null,"But you'll find that the prompts shared in the Chinese community are very long. If you look closely or use a translation tool, you'll find some interesting things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Some words are misspelled. This is because some books don't allow copying and pasting, so people use OCR on prompts, resulting in recognition errors that get propagated as people share prompts, which has become a sort of new age watermark."),(0,r.kt)("li",{parentName:"ol"},"Some words are highly repetitive, like 8k, UHD, Ultra Quality - they're all talking about the same thing, high resolution. Adding more doesn't have a compounding effect."),(0,r.kt)("li",{parentName:"ol"},"Many words you have no idea why they're needed, but everyone seems to add them. Like 8K - have you thought about whether this word is necessary or useful? In fact, these words are not officially recommended, and can even damage your images (see Midjourney's FAQ section for details).")),(0,r.kt)("p",null,"If you read through my tutorial, you'll find that many of the example prompts I provide are very short, yet generate great images."),(0,r.kt)("p",null,"Of course I'm not saying you can't write long prompts - if your desired content is complex, a longer prompt is understandable. But ask yourself if each part is truly necessary."),(0,r.kt)("h2",{id:"pixel-game"},"Pixel Game"),(0,r.kt)("p",null,"Talking about games, my favorite style is pixel art. Pixel art styles generally include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8-bit"),(0,r.kt)("li",{parentName:"ul"},"16-bit"),(0,r.kt)("li",{parentName:"ul"},"32-bit")),(0,r.kt)("p",null,"Feel free to try them out. Here's a prompt I wrote - with the latest Zelda game Skyward Sword releasing, I really liked their sky island setting, so I used Midjourney to generate a 16-bit pixel art version:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"16-bit pixel art"),(0,r.kt)("td",{parentName:"tr",align:null},"16 bit style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"island in the clouds, ancient ruins"),(0,r.kt)("td",{parentName:"tr",align:null},"Sky island, with ancient ruins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Already described in the focus, so didn't repeat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"Zelda style"),(0,r.kt)("td",{parentName:"tr",align:null},"Since it's based on Zelda, added Zelda style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("p",null,"Here's another scene with Pok\xe9mon:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"8-bit pixel art"),(0,r.kt)("td",{parentName:"tr",align:null},"Changed to more retro 8 bit style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"types of Pok\xe9mon"),(0,r.kt)("td",{parentName:"tr",align:null},"I want the AI to generate something like a Pok\xe9mon type chart")))),(0,r.kt)("p",null,"Both prompts are short, but generate fun, playable images - feel free to experiment more:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/42038F81-4724-492D-8E3E-207D4F323282_2/ZCwPyjZXmrHBUUqBbyAhsUaM1RBQPTrC2YlSymAwmMEz/MJ047.png",alt:"MJ047.png"})),(0,r.kt)("h2",{id:"3d-game-scenes"},"3D Game Scenes"),(0,r.kt)("p",null,"Due to length constraints, I can't cover all 3D game prompts - I'll just share some of my favorite styles. I'm also not a professional 3D designer, so apologies if I get anything wrong."),(0,r.kt)("p",null,"For 3D game scenes, I love the isometric pixel art miniature style, though I'm not sure if that's what it's called \ud83d\ude02. Here's a sample prompt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"isometric clean pixel art"),(0,r.kt)("td",{parentName:"tr",align:null},"I asked ChatGPT about this style name, not 100% sure it's right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"robotics lab"),(0,r.kt)("td",{parentName:"tr",align:null},"A robotics lab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Already mentioned in type, so didn't repeat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("p",null,"The images below show a Mars factory on the left, and robotics lab on the right:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F8FEDD52-A5C0-4DC1-9272-DDAD1516C1A7_2/KzXpDhwHszpx2U4irBAB2duycySJNwaAe9VFBPHWz6gz/MJ065.png",alt:"MJ065.png"})),(0,r.kt)("h2",{id:"3d-game-characters"},"3D Game Characters"),(0,r.kt)("p",null,"I won't go too deep into character descriptions, but want to share key elements for 3D prompts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("div",{style:{width:180}})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"blender 3d"),(0,r.kt)("td",{parentName:"tr",align:null},"I tested it and 3d alone also works, but for some reason doesn't look right - adding blender makes it much better. Blender is a 3D modeling software.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"Dark Vader, full body, cute"),(0,r.kt)("td",{parentName:"tr",align:null},"Full body image of Darth Vader, but I want it in a cute chibi style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"isometric"),(0,r.kt)("td",{parentName:"tr",align:null},"Isometric projection, a way to represent 3D objects in 2D - you'll see in the generated images below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"Pixar, style of artstation"),(0,r.kt)("td",{parentName:"tr",align:null},"Added Pixar style, and like how I mentioned Behance for illustrations, I added Artstation which is similar but for 3D/game art.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("p",null,"Here are the images I generated of Darth Vader and a stormtrooper - I think the stormtrooper looks pretty cute:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/63438D30-C24E-4148-886D-9C6A1D302588_2/kSt6iyB2qKSrgCxCAHXzmbbyTl2dQvZ8ap0bBCBMMosz/MJ048.png",alt:"MJ048.png"})),(0,r.kt)("h2",{id:"3d-game-equipment"},"3D Game Equipment"),(0,r.kt)("p",null,"There are so many types of game equipment I can't cover them all, so I'll just share what I'm familiar with. For rings, many fantasy games feature signet rings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"blender 3d"),(0,r.kt)("td",{parentName:"tr",align:null},"Can include or omit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"star war, signet ring"),(0,r.kt)("td",{parentName:"tr",align:null},"Star Wars signet ring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"isometric"),(0,r.kt)("td",{parentName:"tr",align:null},"Isometric projection - can include or omit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Isometric projection - can include or omit")))),(0,r.kt)("p",null,"Another common one is item collections - you would write it like:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"blender 3d, game sheet"),(0,r.kt)("td",{parentName:"tr",align:null},"Game sheet is like those info sheets showing different equipment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"lightsabers, paladin armor,"),(0,r.kt)("td",{parentName:"tr",align:null},"I want to generate a collection of lightsabers and paladin armor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Already mentioned in type, so didn't repeat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"style of Hearthstone"),(0,r.kt)("td",{parentName:"tr",align:null},"I love Hearthstone's style and am curious how a medieval style would look with sci-fi elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("p",null,"Here is the final generated image, though I'm not fully satisfied with the equipment collection - later I'll share a technique to iteratively improve generated images:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/433C0BD6-C942-4976-A8C8-63BCDA338383_2/VmIwLbFyJhOrxyQDPqOexk9moWmXulLNoyHGYbrBeHgz/MJ050.png",alt:"MJ050.png"})),(0,r.kt)("h2",{id:"tip-10-iteratively-improve-via-controlled-variable-changes"},"Tip 10: Iteratively Improve via Controlled Variable Changes"),(0,r.kt)("p",null,"Many compare AI image generation to alchemy. It's true that small mystery tweaks in prompts can greatly change the output."),(0,r.kt)("p",null,"But while the process resembles alchemy, I don't think we need to take an ancient trial-and-error approach to find the philosopher's stone. I believe the best way to use Midjourney is: ",(0,r.kt)("strong",{parentName:"p"},"iterative improvement via controlled variable changes"),"."),(0,r.kt)("p",null,"Let's take the equipment collection image as an example. My goal was for it to generate equipment, laid out piece by piece, but the lightsaber effects also looked strange. Let's methodically go through the prompt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("div",{style:{width:180}})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"blender 3d, game sheet"),(0,r.kt)("td",{parentName:"tr",align:null},"Seems off - the Hearthstone style I wanted isn't this polished 3D look. It's more of a clay render style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"lightsabers, paladin armor,"),(0,r.kt)("td",{parentName:"tr",align:null},'Possible issue - maybe I should have written "different types of lightsabers" to get more variety.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Seems fine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Seems fine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Seems fine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"style of Hearthstone"),(0,r.kt)("td",{parentName:"tr",align:null},"Doesn't have the oily medieval armor feel - but might improve if I change the clay render? Might need tweaking.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Seems fine")))),(0,r.kt)("p",null,"We've identified 3 potential issues, with the first clay render issue also related to the style issue. My suggestions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only change one variable at a time, keeping others constant."),(0,r.kt)("li",{parentName:"ol"},"Once a change meets expectations, move onto the next."),(0,r.kt)("li",{parentName:"ol"},"In my experience, tackle content first, as it can influence other variables."),(0,r.kt)("li",{parentName:"ol"},"To verify consistency, you can regenerate with the same prompt - though this costs money, so optional.")),(0,r.kt)("p",null,"Let's follow these principles and tweak our prompt. Adding \"different types\" helped, we're getting more lightsaber variety:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D9C6275A-84EE-42EC-9509-F43E60C9B66F_2/pGbPtLPgN7zTTZlDFgNVexGZ4BxTGtiE3vy0jdlY5CIz/MJ051.png",alt:"MJ051.png"})),(0,r.kt)("p",null,"Next I tried changing blender 3d to clay render (left 4 images), keeping 3d blender and adding oily (middle 4 images), and both clay render + oily (right 4 images)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/ADB20BDA-306A-43F7-90E0-DEBC3DA471CE_2/xGfjCTVHUxQI4j1CVceShaJEMymax4oa3NxxPccCI1wz/MJ052.png",alt:"MJ052.png"})),(0,r.kt)("p",null,"I feel the combination works best (right 4 images)."),(0,r.kt)("p",null,"Comparing to our original, I think the final images are improved, demonstrating how you can methodically write better prompts vs copying others."),(0,r.kt)("h2",{id:"game-art-concept-sheets"},"Game Art Concept Sheets"),(0,r.kt)("p",null,"One more potentially useful game prompt - character/scene concept art sheets:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Prompt")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Explanation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the type?"),(0,r.kt)("td",{parentName:"tr",align:null},"concept design sheet"),(0,r.kt)("td",{parentName:"tr",align:null},"Concept art sheet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the subject?"),(0,r.kt)("td",{parentName:"tr",align:null},"female paladin, character design,"),(0,r.kt)("td",{parentName:"tr",align:null},"Female paladin character design")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the background?"),(0,r.kt)("td",{parentName:"tr",align:null},"white background"),(0,r.kt)("td",{parentName:"tr",align:null},"Concept sheets are usually on white")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the composition?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Mentioned in type, so didn't repeat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What lens?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Not too important, let AI decide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What is the style?"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Let AI decide, not too familiar with game art styles and artists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("p",null,"Here is the final generated image:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/0FFAEF59-6D98-4DDD-A8B2-15DFF4C0271F_2/cXK5a350kBkbeayVgwFSlaAQoj8cQrDDlYRRIxlxrkgz/MJ056.png",alt:"MJ056.png"})))}u.isMDXComponent=!0}}]);