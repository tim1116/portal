"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[5069],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8312:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c={unversionedId:"advance/business-dev",id:"advance/business-dev",isDocsHomePage:!1,title:"Business Developing",description:"Demo project download",source:"@site/docs/advance/business-dev.md",sourceDirName:"advance",slug:"/advance/business-dev",permalink:"/docs/advance/business-dev",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/business-dev.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Index",permalink:"/docs/advance/advance"},next:{title:"Directory Structure",permalink:"/docs/advance/service-design"}},l=[{value:"Demo project download",id:"demo-project-download",children:[]},{value:"Demonstration project description",id:"demonstration-project-description",children:[{value:"Scenes",id:"scenes",children:[]},{value:"Expected achievement",id:"expected-achievement",children:[]},{value:"System analysis",id:"system-analysis",children:[]}]}],d={toc:l};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"demo-project-download"},"Demo project download"),(0,o.kt)("p",null,"Before officially entering the follow-up document description, you can pay attention to the source code here, and we will perform a progressive demonstration of the function based on this source code.\nInstead of starting from 0 completely, if you come from the ",(0,o.kt)("a",{parentName:"p",href:"../quick-start/quick-start"},"Quick Start")," chapter, this source code structure is not a problem for you."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(4534).Z},"Click Here")," to download Demo project"),(0,o.kt)("h2",{id:"demonstration-project-description"},"Demonstration project description"),(0,o.kt)("h3",{id:"scenes"},"Scenes"),(0,o.kt)("p",null,'The programmer Xiao Ming needs to borrow a copy of "Journey to the West". When there is no online library management system, he goes to the front desk of the library to consult with the librarian every day.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Xiao Ming: Hello, do you still have the book "Journey to the West" today?'),(0,o.kt)("li",{parentName:"ul"},"Administrator: No more, let's check again tomorrow.")),(0,o.kt)("p",null,"One day later, Xiao Ming came to the library again and asked:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Xiao Ming: Hello, do you still have the book "Journey to the West" today?'),(0,o.kt)("li",{parentName:"ul"},"Administrator: No, you can check again in two days.")),(0,o.kt)("p",null,"After many repetitions in this way, Xiao Ming was also in vain and wasted a lot of time on the way back and forth, so he finally couldn't stand the backward library management system.\nHe decided to build a book review system by himself."),(0,o.kt)("h3",{id:"expected-achievement"},"Expected achievement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User login:\nRely on existing student system data to log in"),(0,o.kt)("li",{parentName:"ul"},"Book search:\nSearch for books based on book keywords and query the remaining number of books.")),(0,o.kt)("h3",{id:"system-analysis"},"System analysis"),(0,o.kt)("h4",{id:"service-design"},"Service design"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"api: provides user login protocol"),(0,o.kt)("li",{parentName:"ul"},"rpc: for search service to access user data"))),(0,o.kt)("li",{parentName:"ul"},"search",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"api: provide book query agreement")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Although this tiny book borrowing query system is small, it does not fit the business scenario in practice, but only the above two functions have already met our demonstration of the go-zero api/rpc scenario.\nIn order to satisfy the richer go-zero function demonstration in the future, business insertion, that is, related function descriptions, will be carried out in the document. Here only one scene is used for introduction."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please create the sql statement in the user into the db by yourself, see ",(0,o.kt)("a",{parentName:"p",href:"../prepare/prepare"},"prepare")," for more preparation work"),(0,o.kt)("p",{parentName:"div"},"Add some preset user data to the database for later use. For the sake of space, the demonstration project does not demonstrate the operation of inserting data in detail."))),(0,o.kt)("h1",{id:"reference-preset-data"},"Reference preset data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `user` (number,name,password,gender)values ('666','xiaoming','123456','male');\n")))}p.isMDXComponent=!0}}]);