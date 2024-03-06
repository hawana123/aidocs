"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[9459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:12},a="Tip 12: Increase Weight",s={unversionedId:"midjourney/mj-tutorial-tips/tips-12-increase-weight",id:"midjourney/mj-tutorial-tips/tips-12-increase-weight",title:"Tip 12: Increase Weight",description:"Notice how in the Chinese figures, only the 3rd looks Chinese? That's because the low weight of \"Chinese style\" resulted in only one output. You'll encounter ignored prompt words too, like mentioning a bird but none in the image.",source:"@site/docs/midjourney/mj-tutorial-tips/tips-12-increase-weight.md",sourceDirName:"midjourney/mj-tutorial-tips",slug:"/midjourney/mj-tutorial-tips/tips-12-increase-weight",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-12-increase-weight",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"midjourney",previous:{title:"Tip 11: Add Styles - Countries",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-11-country"},next:{title:"Tip 13: Use Lighting",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-13-lighting"}},l={},p=[],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tip-12-increase-weight"},"Tip 12: Increase Weight"),(0,o.kt)("p",null,"Notice how in the Chinese figures, only the 3rd looks Chinese? That's because the low weight of \"Chinese style\" resulted in only one output. You'll encounter ignored prompt words too, like mentioning a bird but none in the image."),(0,o.kt)("p",null,"Why does this happen? Prompt words are weighted by order (see my Midjourney FAQ). In our prompt, Chinese style was last, hence the fewest results. To fix missing elements, weight is likely the issue."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"There are many ways to increase weight, the simplest is re-ordering"),". For example, putting Chinese style first (the results become small-eyed style! I generated twice, the second is better):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"product photography, Chinese Style,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting\n")),(0,o.kt)("p",null,"Simply re-ordering makes a big difference, so don't blindly follow supposed templates - experiment!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6E917EAA-BBFD-4635-AB8E-2D65E67F9FF3_2/Oy0pJCtpE5QtmqFlxePvrjeZmm5SZXvtqXhQag6J4EUz/MJ071.png",alt:"MJ071.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Second method is slider.")),(0,o.kt)("p",null,"Add :: after your prompt, then the word to adjust, :: again, and the weight value. For our example without reordering:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"product photography,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting, Chinese Style :: Chinese Style :: 0.5\n")),(0,o.kt)("p",null,"The weight seems too high, generating unrelated images (bottom left). Let's add Joan of Arc weight on top of it (bottom right):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"product photography,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting, Chinese Style :: Joan of Arc:: 0.25 style of Chinese:: 0.5\n")),(0,o.kt)("p",null,"With tuned parameters, 2 of the 4 images have stronger Chinese style:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E9CE4D80-F8C7-4853-847D-C5D4554AFD41_2/sJD7ejS8e3Q3xV8O38UyS6Uh6ZtslrBh2XQv1bodhvwz/MJ072.png",alt:"MJ072.png"})),(0,o.kt)("p",null,"Honestly this method isn't great for this case - reordering content or weights has higher ROI. Slider is better for missed prompt words, like the official example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"several sad cats watch a crying woman in a home-office environment with laptop\n")),(0,o.kt)("p",null,"The images focus on you, not the crying woman (left 4 images). Using slider (right 4 images) fixes that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"several sad cats watch a crying woman in a home-office environment with laptop:: several sad cats::0.5 crying woman::0.6 laptop::0.7\n")),(0,o.kt)("p",null,"Note slider values are 0.25, 0.5, 0.6, 0.7. You can also reduce weights with -0.7, -0.6, -0.5, -0.25:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D6451060-D2BE-47D3-A9BF-4921FC13029A_2/5Two9kXOOTkE1TETh2HI30leqOSxLrzd0mhE5ErcBpwz/MJ073.png",alt:"MJ073.png"})),(0,o.kt)("p",null,"If slider still doesn't work, there's a last resort ",(0,o.kt)("strong",{parentName:"p"},"cowbell")," which frankly goes against Midjourney best practices, but can work - in this prompt the woman doesn't look shy (left 4 images):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"A songbird sits on the shoulder of a shy blonde woman dressed in white.\n")),(0,o.kt)("p",null,"You can repeat words:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"A songbird sits on the shoulder shoulder shoulder shoulder shoulder shoulder of a shy shy shy shy shy shy shy blonde woman dressed in white.\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/41FD5011-5634-40CF-9F8F-2AF36AC425BA_2/eFAOEBOZslASMqPp8fmkIhNPBhsrWWAaod8ZzUQyHy0z/MJ074.png",alt:"MJ074.png"})))}c.isMDXComponent=!0}}]);