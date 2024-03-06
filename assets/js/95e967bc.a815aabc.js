"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[2069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},s="\u573a\u666f 3\uff1a\u63a8\u7406",o={unversionedId:"chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",id:"chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",title:"\u573a\u666f 3\uff1a\u63a8\u7406",description:"\u573a\u666f\u4ecb\u7ecd",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference.md",sourceDirName:"chatGPT/tutorial-basics/basic-scenarios",slug:"/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-3-inference",draft:!1,tags:[],version:"current",lastUpdatedAt:1709717218,formattedLastUpdatedAt:"2024\u5e743\u67086\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"chatGPT",previous:{title:"\u573a\u666f 2\uff1a\u57fa\u4e8e\u793a\u4f8b\u56de\u7b54",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-2-answer-questions-based-on-examples"},next:{title:"\u573a\u666f 4\uff1a\u65e0\u4e2d\u751f\u6709\u2014\u2014\u5199\u4ee3\u7801",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-4-writing-code"}},c={},l=[{value:"\u573a\u666f\u4ecb\u7ecd",id:"\u573a\u666f\u4ecb\u7ecd",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u573a\u666f-3\u63a8\u7406"},"\u573a\u666f 3\uff1a\u63a8\u7406"),(0,i.kt)("head",null,(0,i.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,i.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,i.kt)("h2",{id:"\u573a\u666f\u4ecb\u7ecd"},"\u573a\u666f\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u5728\u95ee\u7b54\u8fd9\u4e2a\u5927\u573a\u666f\u4e0b\uff0c\u8fd8\u6709\u4e00\u4e2a\u5b50\u573a\u666f\u662f\u63a8\u7406\uff0c\u8fd9\u4e2a\u573a\u666f\u975e\u5e38\u6709\u610f\u601d\uff0c\u800c\u4e14\u662f\u4e2a\u975e\u5e38\u503c\u5f97\u6df1\u6316\u7684\u573a\u666f\uff0cprompt \u5728\u6b64\u573a\u666f\u91cc\u53d1\u6325\u7684\u4f5c\u7528\u975e\u5e38\u5927\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u7528 ChatGPT API \u505a\u70b9\u4ec0\u4e48\u5c0f\u5e94\u7528\uff0c\u6211\u5efa\u8bae\u53ef\u4ee5\u4ece\u8fd9\u4e2a\u573a\u666f\u5165\u624b\uff0c\u76f8\u5bf9\u6765\u8bf4\u6ca1\u6709\u5176\u4ed6\u573a\u666f\u90a3\u4e48\u7ea2\u6d77\u3002"),(0,i.kt)("p",null,"\u4e3e\u4e2a\u6bd4\u8f83\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u6211\u5c06\u7f8e\u56fd\u5de5\u5546\u7ba1\u7406\u7855\u58eb\u7684\u5165\u5b66\u8003\u8bd5 GMAT \u7684\u4e00\u9053\u6570\u5b66\u9898\u8f93\u5165\u8fdb\u4e86 ChatGPT\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-other"},"If a real estate agent received a commission of 6 percent of the selling price of a certain house, what was the selling price of the house?\n(1) The selling price minus the real estate agent\u2019s commission was $84,600.\n(2) The selling price was 250 percent of the original purchase price of $36,000.\n\n(A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.\n(B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.\n(C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.\n(D) EACH statement ALONE is sufficient.\n(E) Statements (1) and (2) TOGETHER are NOT sufficient.\n")),(0,i.kt)("p",null,"\u8fd9\u9053\u9898\u76ee\u7684\u4e2d\u6587\u610f\u601d\u662f\u8fd9\u6837\u7684\uff08\u4f60\u4e0d\u59a8\u4e5f\u601d\u8003\u4e0b\u8fd9\u4e2a\u9898\u76ee\uff1f\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-other"},"\u5982\u679c\u4e00\u4e2a\u623f\u5730\u4ea7\u7ecf\u7eaa\u4eba\u7684\u4f63\u91d1\u662f\u67d0\u4e2a\u623f\u5b50\u7684\u552e\u4ef7\u76846\uff05\uff0c\u90a3\u4e48\u8fd9\u4e2a\u623f\u5b50\u7684\u552e\u4ef7\u662f\u591a\u5c11\uff1f\n\uff081\uff09\u552e\u4ef7\u51cf\u53bb\u623f\u5730\u4ea7\u7ecf\u7eaa\u4eba\u7684\u4f63\u91d1\u4e3a84,600\u7f8e\u5143\u3002\n\uff082\uff09\u8d2d\u4e70\u4ef7\u662f36,000\u7f8e\u5143\uff0c\u552e\u4ef7\u662f\u8d2d\u4e70\u4ef7\u7684250%\u3002\n\n\uff08A\uff09\u4ec5\u9648\u8ff0\uff081\uff09\u8db3\u4ee5\u56de\u7b54\u95ee\u9898\uff0c\u4f46\u4ec5\u9648\u8ff0\uff082\uff09\u4e0d\u80fd\u56de\u7b54\u95ee\u9898\u3002\n\uff08B\uff09\u4ec5\u9648\u8ff0\uff082\uff09\u8db3\u4ee5\u56de\u7b54\u95ee\u9898\uff0c\u4f46\u4ec5\u9648\u8ff0\uff081\uff09\u4e0d\u80fd\u56de\u7b54\u95ee\u9898\u3002\n\uff08C\uff09\u4e24\u4e2a\u9648\u8ff0\u5408\u8d77\u6765\u8db3\u4ee5\u56de\u7b54\u95ee\u9898\uff0c\u4f46\u6ca1\u6709\u4e00\u4e2a\u9648\u8ff0\u5355\u72ec\u8db3\u4ee5\u56de\u7b54\u95ee\u9898\u3002\n\uff08D\uff09\u6bcf\u4e2a\u9648\u8ff0\u5355\u72ec\u8db3\u4ee5\u56de\u7b54\u95ee\u9898\u3002\n\uff08E\uff09\u9648\u8ff0\uff081\uff09\u548c\uff082\uff09\u5408\u8d77\u6765\u4e0d\u80fd\u56de\u7b54\u95ee\u9898\u3002\n")),(0,i.kt)("p",null,"\u5b83\u7684 Output \u662f\u8fd9\u6837\u7684\uff0c\u5b83\u4f1a\u6839\u636e\u9898\u76ee\u7684\u8981\u6c42\u53bb\u63a8\u7406\u548c\u8fd0\u7b97\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-other"},"Let's assume the selling price of the house is S.\n\nAccording to the given information, the real estate agent's commission is 6% of S, which is 0.06S.\n\nSo, the amount received by the seller after paying the commission would be (S - 0.06S) = 0.94S.\n\nStatement (1) tells us that 0.94S = $84,600. Solving for S, we get S = $90,000.\n\nTherefore, statement (1) alone is sufficient to determine the selling price of the house.\n\nStatement (2) tells us that the selling price is 250% of the original purchase price, which means S = 2.5*$36,000 = $90,000.\n\nTherefore, statement (2) alone is also sufficient to determine the selling price of the house.\n\nSince both statements individually provide the same answer, we can conclude that together they are also sufficient to determine the selling price of the house.\n\nHence, the answer is (D) EACH statement ALONE is sufficient.\n")),(0,i.kt)("p",null,"\u7ffb\u8bd1\u6210\u4e2d\u6587\u662f\u8fd9\u6837\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-other"},"\u5047\u8bbe\u623f\u5b50\u7684\u552e\u4ef7\u4e3aS\u3002\n\n\u6839\u636e\u6240\u7ed9\u4fe1\u606f\uff0c\u623f\u5730\u4ea7\u7ecf\u7eaa\u4eba\u7684\u4f63\u91d1\u662fS\u76846\uff05\uff0c\u53730.06S\u3002\n\n\u56e0\u6b64\uff0c\u5728\u652f\u4ed8\u4f63\u91d1\u540e\u5356\u65b9\u6536\u5230\u7684\u91d1\u989d\u4e3a\uff08S-0.06S\uff09= 0.94S\u3002\n\n\u9648\u8ff0\uff081\uff09\u544a\u8bc9\u6211\u4eec\uff0c0.94S = 84,600\u7f8e\u5143\u3002\u89e3\u51faS\uff0c\u6211\u4eec\u5f97\u5230S = $90,000\u3002\n\n\u56e0\u6b64\uff0c\u9648\u8ff0\uff081\uff09\u5355\u72ec\u8db3\u4ee5\u786e\u5b9a\u623f\u5b50\u7684\u552e\u4ef7\u3002\n\n\u9648\u8ff0\uff082\uff09\u544a\u8bc9\u6211\u4eec\uff0c\u552e\u4ef7\u662f\u539f\u59cb\u8d2d\u4e70\u4ef7\u7684250\uff05\uff0c\u8fd9\u610f\u5473\u7740S = 2.5 * $36,000 = $90,000\u3002\n\n\u56e0\u6b64\uff0c\u9648\u8ff0\uff082\uff09\u5355\u72ec\u4e5f\u8db3\u4ee5\u786e\u5b9a\u623f\u5b50\u7684\u552e\u4ef7\u3002\n\n\u7531\u4e8e\u4e24\u4e2a\u9648\u8ff0\u5206\u522b\u63d0\u4f9b\u76f8\u540c\u7684\u7b54\u6848\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff0c\u5b83\u4eec\u5171\u540c\u8db3\u4ee5\u786e\u5b9a\u623f\u5b50\u7684\u552e\u4ef7\u3002\n\n\u56e0\u6b64\uff0c\u7b54\u6848\u662f\uff08D\uff09\u6bcf\u4e2a\u9648\u8ff0\u5355\u72ec\u8db3\u4ee5\u56de\u7b54\u95ee\u9898\u3002\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u573a\u666f\u8fd8\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u5c31\u4e0d\u5728\u8fd9\u4e3e\u66f4\u591a\u4f8b\u5b50\u4e86\uff0c\u4f60\u53ef\u4ee5\u5c06\u5404\u79cd\u9898\u76ee\u8f93\u5165\u8fdb ChatGPT \u91cc\u8bd5\u8bd5\u3002"))}f.isMDXComponent=!0}}]);