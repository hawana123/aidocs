"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[8914],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(o,".").concat(c)]||m[c]||g[c]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[m]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9620:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:16},i="Tip 16: Change Camera & Lens",s={unversionedId:"midjourney/mj-tutorial-tips/tips-16-camera-lens",id:"midjourney/mj-tutorial-tips/tips-16-camera-lens",title:"Tip 16: Change Camera & Lens",description:"Covered lighting the past few chapters - now let's look at cameras and lenses.",source:"@site/docs/midjourney/mj-tutorial-tips/tips-16-camera-lens.md",sourceDirName:"midjourney/mj-tutorial-tips",slug:"/midjourney/mj-tutorial-tips/tips-16-camera-lens",permalink:"/docs/midjourney/mj-tutorial-tips/tips-16-camera-lens",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"midjourney",previous:{title:"Tip 15: How to Generate More Diverse People",permalink:"/docs/midjourney/mj-tutorial-tips/tips-15-human-diversity"},next:{title:"Tip 17: Reconstructing Prompts",permalink:"/docs/midjourney/mj-tutorial-tips/tips-17-describe"}},o={},p=[],d={toc:p},m="wrapper";function g(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tip-16-change-camera--lens"},"Tip 16: Change Camera & Lens"),(0,r.kt)("p",null,"Covered lighting the past few chapters - now let's look at cameras and lenses."),(0,r.kt)("p",null,"You may have used phone apps that emulate old cameras vs just letting you tweak settings like white balance. Though under the hood they also just modify parameters, the experience can be neat."),(0,r.kt)("p",null,"You can get similar effects in Midjourney by specifying camera or lens types. From my tests, Midjourney supports:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cameras: GoPro, Polaroid"),(0,r.kt)("li",{parentName:"ol"},"Film: 8mm, 16mm, 35mm"),(0,r.kt)("li",{parentName:"ol"},"Lenses: 15mm lens"),(0,r.kt)("li",{parentName:"ol"},"Camera settings: long exposure, double exposure"),(0,r.kt)("li",{parentName:"ol"},"Depth of field & focus: deep vs shallow focus, vanishing point")),(0,r.kt)("p",null,"I really like the double exposure and long exposure looks:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/CD2D42A5-D707-43D1-9D24-248CED2CC709_2/RLyz77QLtc9ctokKwDFr4Cul1TF4QVVRBQu5mlY3mtcz/MJ102.png",alt:"MJ102.png"})),(0,r.kt)("p",null,"But choose suitable cameras/lenses for your scene - drone view, for example, won't work well for closeups:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("div",{style:{width:180}},(0,r.kt)("strong",{parentName:"th"},"Photo"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Use Cases")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ100",src:a(7655).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},"GoPro"),(0,r.kt)("td",{parentName:"tr",align:null},"Action camera perspective"),(0,r.kt)("td",{parentName:"tr",align:null},"Selfies, action shots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ101",src:a(6930).Z,width:"1726",height:"1728"})),(0,r.kt)("td",{parentName:"tr",align:null},"Drone"),(0,r.kt)("td",{parentName:"tr",align:null},"Drone view from above"),(0,r.kt)("td",{parentName:"tr",align:null},"Aerial, skyline shots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ124",src:a(7441).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Polaroid"),(0,r.kt)("td",{parentName:"tr",align:null},"Instant camera"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ122",src:a(9396).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Black and white film"),(0,r.kt)("td",{parentName:"tr",align:null},"Monochrome photo"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ123",src:a(7583).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Kodachrome"),(0,r.kt)("td",{parentName:"tr",align:null},"Kodak's vivid, high-contrast, archival color slide film"),(0,r.kt)("td",{parentName:"tr",align:null},"Vivid, punchy colors with great longevity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ097",src:a(5604).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Shot on 8mm"),(0,r.kt)("td",{parentName:"tr",align:null},"Portable, easy to use film format with lower resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"Everyday life, family, travel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ098",src:a(1801).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Shot on 16mm"),(0,r.kt)("td",{parentName:"tr",align:null},"16mm and 35mm mainly used for movies, documentaries, commercials"),(0,r.kt)("td",{parentName:"tr",align:null},"Movies, documentaries, commercials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ099",src:a(5589).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Shot on 35mm"),(0,r.kt)("td",{parentName:"tr",align:null},"16mm and 35mm mainly used for movies, documentaries, commercials"),(0,r.kt)("td",{parentName:"tr",align:null},"Movies, documentaries, commercials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ105",src:a(1524).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Microscopic"),(0,r.kt)("td",{parentName:"tr",align:null},"Magnified view"),(0,r.kt)("td",{parentName:"tr",align:null},"Enlarging small objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ106",src:a(3431).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Fisheye Lens"),(0,r.kt)("td",{parentName:"tr",align:null},"Extreme wide angle 100-180\xb0 for distorted, exaggerated perspective"),(0,r.kt)("td",{parentName:"tr",align:null},"Capturing whole scenes up close")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ103",src:a(1437).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Wide Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Fit more into frame"),(0,r.kt)("td",{parentName:"tr",align:null},"Landscapes, fitting more content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ104",src:a(2883).Z,width:"1724",height:"1726"})),(0,r.kt)("td",{parentName:"tr",align:null},"Ultra-Wide Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Even wider field of view than wide angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Landscapes, fitting more content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ107",src:a(9442).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Panorama"),(0,r.kt)("td",{parentName:"tr",align:null},"Wraparound wide format"),(0,r.kt)("td",{parentName:"tr",align:null},"Landscapes, fitting more content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ109",src:a(7303).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Short Exposure"),(0,r.kt)("td",{parentName:"tr",align:null},"Freezing motion of fast moving subjects"),(0,r.kt)("td",{parentName:"tr",align:null},"Sports, vehicles, performances needing frozen motion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ108",src:a(9154).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Long Exposure"),(0,r.kt)("td",{parentName:"tr",align:null},"Light trails for motion, mystical moods"),(0,r.kt)("td",{parentName:"tr",align:null},"Light streaks, night scenes, star trails")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ110",src:a(271).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Double Exposure"),(0,r.kt)("td",{parentName:"tr",align:null},"Overlapping exposures for dense, distorted, hand-drawn effects"),(0,r.kt)("td",{parentName:"tr",align:null},"Portraits, landscapes - unique environments and moods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ118",src:a(9099).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"f2.8"),(0,r.kt)("td",{parentName:"tr",align:null},"Large apertures let in more light for brighter images. f2.8 has high light transmission suitable for low light."),(0,r.kt)("td",{parentName:"tr",align:null},"Can create shallow depth of field to blur background and foreground, ideal for portraits or product shots.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ117",src:a(7248).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Depth of Field"),(0,r.kt)("td",{parentName:"tr",align:null},"Range of sharpness - how much is in focus."),(0,r.kt)("td",{parentName:"tr",align:null},"Used to describe how much of a photo is sharp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ113",src:a(1192).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Soft Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"Deliberately softening focus for gentle, dreamy aesthetic via specialized lens filters."),(0,r.kt)("td",{parentName:"tr",align:null},"More about evoking emotion vs deep/shallow focus. Gives a soft, almost blurred complexion to create a romantic look.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ116",src:a(4658).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Deep Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to deep depth of field."),(0,r.kt)("td",{parentName:"tr",align:null},"Keeping entire scene sharp by using small aperture. Needs small focal lengths or farther shooting distance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ114",src:a(3091).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Shallow Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"Artistically isolates subject, popular for portraits."),(0,r.kt)("td",{parentName:"tr",align:null},"Blurs background by using large aperture to keep only a plane/subject in focus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ111",src:a(4583).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Vanishing Point"),(0,r.kt)("td",{parentName:"tr",align:null},"A point infinity used in perspective drawing - parallel lines converge towards it."),(0,r.kt)("td",{parentName:"tr",align:null},"Helps create realism and depth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"MJ112",src:a(5363).Z,width:"1734",height:"1734"})),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage Point"),(0,r.kt)("td",{parentName:"tr",align:null},"Perspective from a high point looking down diagonally."),(0,r.kt)("td",{parentName:"tr",align:null},"Landscapes, fitting more content")))))}g.isMDXComponent=!0},5604:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ097-f72841d31c8fc7aec08aff71c7565bc4.png"},1801:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ098-85af40a6e0284277c00892221d17c9aa.png"},5589:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ099-99e65bf64e210485098cd47049efe3cc.png"},7655:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ100-220123a22489daf4a319dd763d76e0e8.png"},6930:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ101-d930bedcbc9c8b30e871837c6f381607.jpeg"},1437:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ103-b6a132ccc15f1b1fbcc1e851490a60d0.png"},2883:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ104-83e51e8d1636a4e1d9ba99a57dfeb11c.jpeg"},1524:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ105-6c93078c43e91803f08180d1dabeeaa4.png"},3431:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ106-8f3a45509d1b1700f470fcc1b662571c.png"},9442:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ107-5ccb70352707639379fd0337a527cc58.png"},9154:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ108-aa4d648bf161faf175f65fab8801015e.png"},7303:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ109-a0a11a7d0b8fc7ac8e731e76eca4b5b7.png"},271:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ110-68fe989c4f13eed3fde54eb70156f9ce.png"},4583:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ111-b6b1bc3aa087841998e51335b4368df6.png"},5363:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ112-9e66f794b9386efe4b6504fc2fba5e7d.png"},1192:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ113-c4123e70aa0b1ef4dbf33a2388c9865e.png"},3091:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ114-fe0d5749495d3c47a8824ba95b4361a8.png"},4658:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ116-f9bebb277e8391a5a9ae6d650b71cd61.png"},7248:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ117-92b46cd7dd8ea44b22c5c44dedff8b9f.png"},9099:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ118-bb6a4ad5019e44e4114970b0f70f5901.png"},9396:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ122-934a46b7a1d4d6c7db1e38144458c674.png"},7583:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ123-274f23ac6777b8f9c4df5512406c76ad.png"},7441:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MJ124-02eef6084f33668076536b060e9b57bf.png"}}]);