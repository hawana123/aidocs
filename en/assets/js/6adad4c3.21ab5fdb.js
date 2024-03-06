"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},o="Tip 3: Using Image2Image",s={unversionedId:"midjourney/mj-tutorial-tips/tips-3-img2img",id:"midjourney/mj-tutorial-tips/tips-3-img2img",title:"Tip 3: Using Image2Image",description:"For stock photos, there is a very powerful technique. At first I didn't want to teach this because it has a big impact on stock photo sites \ud83d\ude02",source:"@site/docs/midjourney/mj-tutorial-tips/tips-3-img2img.md",sourceDirName:"midjourney/mj-tutorial-tips",slug:"/midjourney/mj-tutorial-tips/tips-3-img2img",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-3-img2img",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"midjourney",previous:{title:"Tip 2: Experimenting",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-2-experiment"},next:{title:"Tip 4: Adding Style - Art Movements",permalink:"/en/docs/midjourney/mj-tutorial-tips/tips-4-art-movement"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tip-3-using-image2image"},"Tip 3: Using Image2Image"),(0,r.kt)("p",null,"For stock photos, there is a very powerful technique. At first I didn't want to teach this because it has a big impact on stock photo sites \ud83d\ude02"),(0,r.kt)("p",null,"But in the spirit of tool neutrality, and since this technique can be useful in many cases (like generating avatars), I think it's still worth sharing."),(0,r.kt)("p",null,"When using stock photos, you may encounter these issues:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The photo has copyright and can't be used commercially, or requires payment."),(0,r.kt)("li",{parentName:"ol"},"Some photos have been used by many people, so they are easily recognizable as stock photos."),(0,r.kt)("li",{parentName:"ol"},"The content generally meets the needs, but details don't match - for example the two Asian men shaking hands could be changed to a man and woman, with one person being African American.")),(0,r.kt)("p",null,"The best way to address these issues is to have the AI modify the original photo. You can do this using the Image2Image (or Blend) feature:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Later I saw a similar tutorial in a book, and realized people call this technique "priming". International users seem to call it Image2Image or img2img.')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send the stock photo you want to modify to the Midjourney bot. I'll use the handshake photo as an example."),(0,r.kt)("li",{parentName:"ol"},"Right click to copy the image URL, then paste it into the text box."),(0,r.kt)("li",{parentName:"ol"},"Add a space after the URL."),(0,r.kt)("li",{parentName:"ol"},"Then describe the changes you want, like changing one hand to African American and one to Asian female:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"one Afican-American hand and one Asian woman hand\n")),(0,r.kt)("p",null,"Here is the result. In the prompt I didn't mention anything about suits or the background. I just said I wanted one African American hand and one Asian female hand:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/B9BD4D78-6C58-4A4A-8433-9D562A949CBB_2/xb58eLg0qFxYh6JyyMs4HpXvI1oFxcWfDDXi70zpY1Az/MJ162.png",alt:"MJ162.png"})),(0,r.kt)("p",null,"Aside from the 6 fingers issue, this is a very efficient technique right? Note that I've found the blend feature (which I'll cover later) works better for merging two images rather than image + text, so you'll need some patience and experimentation."))}u.isMDXComponent=!0}}]);