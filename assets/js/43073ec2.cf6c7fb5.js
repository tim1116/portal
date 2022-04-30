"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9743],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5260:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={},l={unversionedId:"advance/api-coding",id:"advance/api-coding",isDocsHomePage:!1,title:"API Coding",description:"`shell",source:"@site/docs/advance/api-coding.md",sourceDirName:"advance",slug:"/advance/api-coding",permalink:"/docs/advance/api-coding",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/api-coding.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Model Generation",permalink:"/docs/advance/model-gen"},next:{title:"Business Coding",permalink:"/docs/advance/business-coding"}},s=[{value:"Generate api service",id:"generate-api-service",children:[{value:"By goctl executable file",id:"by-goctl-executable-file",children:[]},{value:"By Intellij Plugin",id:"by-intellij-plugin",children:[]},{value:"By Keymap",id:"by-keymap",children:[]}]}],p={toc:s};function u(e){var n=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-file"},"Create file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/user.api  \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'type (\n    LoginReq {\n        Username string `json:"username"`\n        Password string `json:"password"`\n    }\n\n    LoginReply {\n        Id           int64 `json:"id"`\n        Name         string `json:"name"`\n        Gender       string `json:"gender"`\n        AccessToken  string `json:"accessToken"`\n        AccessExpire int64 `json:"accessExpire"`\n        RefreshAfter int64 `json:"refreshAfter"`\n    }\n)\n\nservice user-api {\n    @handler login\n    post /user/login (LoginReq) returns (LoginReply)\n}\n')),(0,a.kt)("h2",{id:"generate-api-service"},"Generate api service"),(0,a.kt)("h3",{id:"by-goctl-executable-file"},"By goctl executable file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd book/service/user/api\n$ goctl api go -api user.api -dir . \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Done.\n")),(0,a.kt)("h3",{id:"by-intellij-plugin"},"By Intellij Plugin"),(0,a.kt)("p",null,"Right-click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.api")," file, and then click to enter ",(0,a.kt)("inlineCode",{parentName:"p"},"New"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Go Zero"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Api Code"),", enter the target directory selection, that is, the target storage directory of the api source code, the default is the directory where user.api is located, select Click OK after finishing the list."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ApiGeneration",src:t(8372).Z}),"\n",(0,a.kt)("img",{alt:"ApiGenerationDirectorySelection",src:t(1407).Z})),(0,a.kt)("h3",{id:"by-keymap"},"By Keymap"),(0,a.kt)("p",null,"Open user.api, enter the editing area, use the shortcut key ",(0,a.kt)("inlineCode",{parentName:"p"},"Command+N")," (for macOS) or ",(0,a.kt)("inlineCode",{parentName:"p"},"alt+insert")," (for windows), select ",(0,a.kt)("inlineCode",{parentName:"p"},"Api Code"),", and also enter the directory selection pop-up window, after selecting the directory Just click OK."))}u.isMDXComponent=!0},1407:function(e,n,t){n.Z=t.p+"assets/images/goctl-api-select-dea2ee32275510236abe12ecbf44a0f0.png"},8372:function(e,n,t){n.Z=t.p+"assets/images/goctl-api-ec6985aafbeb91f4a37549a8e087dc6f.png"}}]);