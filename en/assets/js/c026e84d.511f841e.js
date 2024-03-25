"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[4296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Differences between Midjourney Versions",s={unversionedId:"midjourney/mj-tutorial-extras/differences-between-versions",id:"midjourney/mj-tutorial-extras/differences-between-versions",title:"Differences between Midjourney Versions",description:"V1\u3001V2\u3001V3\u3001V4\u3001V5",source:"@site/docs/midjourney/mj-tutorial-extras/differences-between-versions.md",sourceDirName:"midjourney/mj-tutorial-extras",slug:"/midjourney/mj-tutorial-extras/differences-between-versions",permalink:"/en/docs/midjourney/mj-tutorial-extras/differences-between-versions",draft:!1,tags:[],version:"current",lastUpdatedAt:1711337117,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"midjourney",previous:{title:"Midjourney Prompt Advanced Parameters",permalink:"/en/docs/midjourney/mj-tutorial-extras/midjourney-extras-parameters"},next:{title:"Midjourney Official FAQ",permalink:"/en/docs/midjourney/mj-tutorial-extras/midjourney-official-faq"}},l={},c=[{value:"V1\u3001V2\u3001V3\u3001V4\u3001V5",id:"v1v2v3v4v5",level:2},{value:"Niji",id:"niji",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"differences-between-midjourney-versions"},"Differences between Midjourney Versions"),(0,o.kt)("h2",{id:"v1v2v3v4v5"},"V1\u3001V2\u3001V3\u3001V4\u3001V5"),(0,o.kt)("p",null,"Let's take a look at the differences between each version using the same prompt. I will be using the prompt from the official examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"vibrant California poppies\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F1CE2054-8474-4061-B300-F6A374BC33ED_2/vzfFBFRCbogB3goVBDWjWMrxBWJsfr46HDOAHUFjaiIz/MJ017.png",alt:"MJ017.png"})),(0,o.kt)("p",null,"From the image above, you can see the evolution of Midjourney:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Increasingly detailed and realistic generated content. V1 and V2 are essentially doodles. In V2, the handling of foreground and background in the fourth image is quite rough. In V3, the background and perspective become more reasonable, and by V4, it is in a usable state."),(0,o.kt)("li",{parentName:"ol"},"Higher resolution. V1 to V3 images are 256 x 256, while in V5, the default resolution for a single image is already 1024 x 1024."),(0,o.kt)("li",{parentName:"ol"},'More parameters, the prompt is more important. This is more evident in the V5 version. Previous versions may not have had a good understanding of certain words, such as the material word "marble." However, in V5, the language comprehension has improved.'),(0,o.kt)("li",{parentName:"ol"},'Artistic style words have become more important. This conclusion has not received official confirmation yet, and many people even consider V5 to be a more "general" version. In my opinion, V5 has raised the benchmark where fewer descriptive words are needed to generate a "viewable" image. However, it has become more difficult to generate an image that matches your expectations perfectly. You need to understand more about the prompt.')),(0,o.kt)("p",null,"Now, let's take a look at the differences across versions using a more complex prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"21years chinese girl, in school, beauty, long black hair, sun light\uff0cinsane detail, smooth light, real photography fujifilm superia, full HD, taken on a Canon EOS R5 F1.2 ISO100 35MM\n")),(0,o.kt)("p",null,"Observe the generated results. The difference is significant. Midjourney took about one year to evolve from V1 to V5. If we consider only the research and development time, it would be less than a year. It is truly remarkable:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/875E873B-DE77-4AA7-A6AC-0B5D25D634E2_2/UYfBO2fcgLOmy8rLQMF1rJ9GPvA6dZNGrZty3puyBUkz/MJ018.png",alt:"MJ018.png"})),(0,o.kt)("h2",{id:"niji"},"Niji"),(0,o.kt)("p",null,"Lastly, let me introduce a special version of Midjourney called Niji. This version was actually developed in collaboration with ",(0,o.kt)("a",{parentName:"p",href:"https://spellbrush.com/"},"Spellbrush"),' . "Niji" means "rainbow" or "2D" in Japanese.'),(0,o.kt)("p",null,'Niji performs well in generating anime-style images. For example, given the prompt "fancy peacock", the left image is from the V5 model, while the right image is from the Niji V5 model, which leans more towards a cartoon style:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E3A4971C-22A4-48D8-B68F-236586444BD8_2/xRM3yfR8IH6jd2C8F3ws0QSyARF5xMc8nIdEydcytSkz/MJ127.png",alt:"MJ127.png"})))}u.isMDXComponent=!0}}]);