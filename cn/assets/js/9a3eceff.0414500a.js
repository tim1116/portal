"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7580],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(t),k=i,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||r;return t?a.createElement(u,l(l({ref:n},c),{},{components:t})):a.createElement(u,l({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7944:function(e,n,t){t.r(n),t.d(n,{default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return o}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],s={},p={unversionedId:"deployment/service-deployment",id:"deployment/service-deployment",isDocsHomePage:!1,title:"\u670d\u52a1\u90e8\u7f72",description:"\u672c\u8282\u901a\u8fc7jenkins\u6765\u8fdb\u884c\u7b80\u5355\u7684\u670d\u52a1\u90e8\u7f72\u5230k8s\u6f14\u793a\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/deployment/service-deployment.md",sourceDirName:"deployment",slug:"/deployment/service-deployment",permalink:"/cn/docs/deployment/service-deployment",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/deployment/service-deployment.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u65e5\u5fd7\u6536\u96c6",permalink:"/cn/docs/deployment/log-collection"},next:{title:"\u670d\u52a1\u76d1\u63a7",permalink:"/cn/docs/deployment/service-monitor"}},o=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u670d\u52a1\u90e8\u7f72",id:"\u670d\u52a1\u90e8\u7f72",children:[{value:"1\u3001gitlab\u4ee3\u7801\u4ed3\u5e93\u76f8\u5173\u51c6\u5907",id:"1gitlab\u4ee3\u7801\u4ed3\u5e93\u76f8\u5173\u51c6\u5907",children:[]},{value:"2\u3001jenkins",id:"2jenkins",children:[]},{value:"port.sh\u53c2\u8003\u5185\u5bb9\u5982\u4e0b",id:"portsh\u53c2\u8003\u5185\u5bb9\u5982\u4e0b",children:[]}]},{value:"\u67e5\u770bpipeline",id:"\u67e5\u770bpipeline",children:[]},{value:"\u67e5\u770bk8s\u670d\u52a1",id:"\u67e5\u770bk8s\u670d\u52a1",children:[]}],c={toc:o};function d(e){var n=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u901a\u8fc7jenkins\u6765\u8fdb\u884c\u7b80\u5355\u7684\u670d\u52a1\u90e8\u7f72\u5230k8s\u6f14\u793a\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"k8s\u96c6\u7fa4\u5b89\u88c5"),(0,r.kt)("li",{parentName:"ul"},"gitlab\u73af\u5883\u5b89\u88c5"),(0,r.kt)("li",{parentName:"ul"},"jenkins\u73af\u5883\u5b89\u88c5"),(0,r.kt)("li",{parentName:"ul"},"redis&mysql&nginx&etcd\u5b89\u88c5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../prepare/goctl-install"},"goctl\u5b89\u88c5"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"goctl\u786e\u4fddk8s\u6bcf\u4e2anode\u8282\u70b9\u4e0a\u90fd\u6709"),(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u73af\u5883\u5b89\u88c5\u8bf7\u81ea\u884cgoogle\uff0c\u8fd9\u91cc\u4e0d\u505a\u7bc7\u5e45\u4ecb\u7ecd\u3002"))),(0,r.kt)("h2",{id:"\u670d\u52a1\u90e8\u7f72"},"\u670d\u52a1\u90e8\u7f72"),(0,r.kt)("h3",{id:"1gitlab\u4ee3\u7801\u4ed3\u5e93\u76f8\u5173\u51c6\u5907"},"1\u3001gitlab\u4ee3\u7801\u4ed3\u5e93\u76f8\u5173\u51c6\u5907"),(0,r.kt)("h4",{id:"11\u6dfb\u52a0ssh-key"},"1.1\u3001\u6dfb\u52a0SSH Key"),(0,r.kt)("p",null,"\u8fdb\u5165gitlab\uff0c\u70b9\u51fb\u7528\u6237\u4e2d\u5fc3\uff0c\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),"\uff0c\u5728\u5de6\u4fa7\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Keys"),"tab\n",(0,r.kt)("img",{alt:"ssh key",src:t(1788).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u5728jenkins\u6240\u5728\u673a\u5668\u4e0a\u67e5\u770b\u516c\u94a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat ~/.ssh/id_rsa.pub\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2\u3001\u5982\u679c\u6ca1\u6709\uff0c\u5219\u9700\u8981\u751f\u6210\uff0c\u5982\u679c\u5b58\u5728\uff0c\u8bf7\u8df3\u8f6c\u5230\u7b2c3\u6b65")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t rsa -b 2048 -C "email@example.com"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"',(0,r.kt)("a",{parentName:"p",href:"mailto:email@example.com"},"email@example.com"),'" \u53ef\u4ee5\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u90ae\u7bb1'),(0,r.kt)("p",{parentName:"blockquote"},"\u5b8c\u6210\u751f\u6210\u540e\uff0c\u91cd\u590d\u7b2c\u4e00\u6b65\u64cd\u4f5c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3\u3001\u5c06\u516c\u94a5\u6dfb\u52a0\u5230gitlab\u4e2d")),(0,r.kt)("h4",{id:"12\u4e0a\u4f20\u4ee3\u7801\u5230gitlab\u4ed3\u5e93"},"1.2\u3001\u4e0a\u4f20\u4ee3\u7801\u5230gitlab\u4ed3\u5e93"),(0,r.kt)("p",null,"\u65b0\u5efa\u5de5\u7a0b",(0,r.kt)("inlineCode",{parentName:"p"},"go-zero-demo"),"\u5e76\u4e0a\u4f20\u4ee3\u7801\uff0c\u8fd9\u91cc\u4e0d\u505a\u7ec6\u8282\u63cf\u8ff0\u3002"),(0,r.kt)("h3",{id:"2jenkins"},"2\u3001jenkins"),(0,r.kt)("h4",{id:"21\u6dfb\u52a0\u51ed\u636e"},"2.1\u3001\u6dfb\u52a0\u51ed\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770bjenkins\u6240\u5728\u673a\u5668\u7684\u79c1\u94a5\uff0c\u4e0e\u524d\u9762gitlab\u516c\u94a5\u5bf9\u5e94")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat id_rsa\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u5165jenkins\uff0c\u4f9d\u6b21\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins"),"-> ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Credentials"),"\n",(0,r.kt)("img",{alt:"credentials",src:t(1302).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"\u5168\u5c40\u51ed\u636e"),"\u9875\u9762\uff0c\u6dfb\u52a0\u51ed\u636e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Username"),"\u662f\u4e00\u4e2a\u6807\u8bc6\uff0c\u540e\u9762\u6dfb\u52a0pipeline\u4f60\u77e5\u9053\u8fd9\u4e2a\u6807\u8bc6\u662f\u4ee3\u8868gitlab\u7684\u51ed\u636e\u5c31\u884c\uff0cPrivate Key`\u5373\u4e0a\u9762\u83b7\u53d6\u7684\u79c1\u94a5\n",(0,r.kt)("img",{alt:"jenkins-add-credentials",src:t(1546).Z})))),(0,r.kt)("h4",{id:"22-\u6dfb\u52a0\u5168\u5c40\u53d8\u91cf"},"2.2\u3001 \u6dfb\u52a0\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("p",null,"\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Configure System"),"\uff0c\u6ed1\u52a8\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u5168\u5c40\u5c5e\u6027"),"\u6761\u76ee\uff0c\u6dfb\u52a0docker\u79c1\u6709\u4ed3\u5e93\u76f8\u5173\u4fe1\u606f\uff0c\u5982\u56fe\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"docker\u7528\u6237\u540d"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"docker\u7528\u6237\u5bc6\u7801"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"docker\u79c1\u6709\u4ed3\u5e93\u5730\u5740"),"\n",(0,r.kt)("img",{alt:"docker_server",src:t(5370).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"docker_user")," \u4fee\u6539\u4e3a\u4f60\u7684docker\u7528\u6237\u540d"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"docker_pass")," \u4fee\u6539\u4e3a\u4f60\u7684docker\u7528\u6237\u5bc6\u7801"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"docker_server")," \u4fee\u6539\u4e3a\u4f60\u7684docker\u670d\u52a1\u5668\u5730\u5740"),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u6211\u4f7f\u7528\u7684\u79c1\u6709\u4ed3\u5e93\uff0c\u5982\u679c\u6ca1\u6709\u4e91\u5382\u5546\u63d0\u4f9b\u7684\u79c1\u6709\u4ed3\u5e93\u4f7f\u7528\uff0c\u53ef\u4ee5\u81ea\u884c\u642d\u5efa\u4e00\u4e2a\u79c1\u6709\u4ed3\u5e93\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d58\u8ff0\u4e86\uff0c\u5927\u5bb6\u81ea\u884cgoogle\u3002"))),(0,r.kt)("h4",{id:"23\u914d\u7f6egit"},"2.3\u3001\u914d\u7f6egit"),(0,r.kt)("p",null,"\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Global Tool Configureation"),"\uff0c\u627e\u5230Git\u6761\u76ee\uff0c\u586b\u5199jenkins\u6240\u5728\u673a\u5668git\u53ef\u6267\u884c\u6587\u4ef6\u6240\u5728path\uff0c\u5982\u679c\u6ca1\u6709\u7684\u8bdd\uff0c\u9700\u8981\u5728jenkins\u63d2\u4ef6\u7ba1\u7406\u4e2d\u4e0b\u8f7dGit\u63d2\u4ef6\u3002\n",(0,r.kt)("img",{alt:"jenkins-git",src:t(3563).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jenkins-configure",src:t(7792).Z})),(0,r.kt)("h4",{id:"24-\u6dfb\u52a0\u4e00\u4e2apipeline"},"2.4\u3001 \u6dfb\u52a0\u4e00\u4e2aPipeline"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"pipeline\u7528\u4e8e\u6784\u5efa\u9879\u76ee\uff0c\u4ecegitlab\u62c9\u53d6\u4ee3\u7801->\u751f\u6210Dockerfile->\u90e8\u7f72\u5230k8s\u5747\u5728\u8fd9\u4e2a\u6b65\u9aa4\u53bb\u505a\uff0c\u8fd9\u91cc\u662f\u6f14\u793a\u73af\u5883\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u90e8\u7f72\u6d41\u7a0b\u987a\u5229\uff0c\n\u9700\u8981\u5c06jenkins\u5b89\u88c5\u5728\u548ck8s\u96c6\u7fa4\u7684\u5176\u4e2d\u8fc7\u4e00\u4e2a\u8282\u70b9\u6240\u5728\u673a\u5668\u4e0a\uff0c\u6211\u8fd9\u91cc\u5b89\u88c5\u5728master\u4e0a\u7684\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u51ed\u636eid \u8fdb\u5165\u51ed\u636e\u9875\u9762\uff0c\u627e\u5230Username\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab"),"\u7684\u51ed\u636eid\n",(0,r.kt)("img",{alt:"jenkins-credentials-id",src:t(4992).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u5165jenkins\u9996\u9875\uff0c\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u65b0\u5efaItem"),"\uff0c\u540d\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\n",(0,r.kt)("img",{alt:"jenkins-add-item",src:t(4830).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u9879\u76eegit\u5730\u5740\n",(0,r.kt)("img",{alt:"gitlab-git-url",src:t(8179).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u670d\u52a1\u7c7b\u578bChoice Parameter,\u5728General\u4e2d\u52fe\u9009",(0,r.kt)("inlineCode",{parentName:"p"},"This project is parameterized\n"),",\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u6dfb\u52a0\u53c2\u6570"),"\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Choice Parameter"),"\uff0c\u6309\u7167\u56fe\u4e2d\u6dfb\u52a0\u9009\u62e9\u7684\u503c\u5e38\u91cf(api\u3001rpc)\u53ca\u63a5\u6536\u503c\u7684\u53d8\u91cf(type)\uff0c\u540e\u7eed\u5728Pipeline script\u4e2d\u4f1a\u7528\u5230\u3002\n",(0,r.kt)("img",{alt:"jenkins-choice-parameter",src:t(2675).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\u914d\u7f6e\u9875\u9762\uff0c\u5411\u4e0b\u6ed1\u52a8\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Pipeline script"),",\u586b\u5199\u811a\u672c\u5185\u5bb9"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"pipeline {\n  agent any\n  parameters {\n      gitParameter name: 'branch', \n      type: 'PT_BRANCH',\n      branchFilter: 'origin/(.*)',\n      defaultValue: 'master',\n      selectedValue: 'DEFAULT',\n      sortMode: 'ASCENDING_SMART',\n      description: '\u9009\u62e9\u9700\u8981\u6784\u5efa\u7684\u5206\u652f'\n  }\n\n  stages {\n      stage('\u670d\u52a1\u4fe1\u606f')    {\n          steps {\n              sh 'echo \u5206\u652f\uff1a$branch'\n              sh 'echo \u6784\u5efa\u670d\u52a1\u7c7b\u578b\uff1a${JOB_NAME}-$type'\n          }\n      }\n\n\n      stage('check out') {\n          steps {\n              checkout([$class: 'GitSCM', \n              branches: [[name: '$branch']],\n              doGenerateSubmoduleConfigurations: false, \n              extensions: [], \n              submoduleCfg: [],\n              userRemoteConfigs: [[credentialsId: '${credentialsId}', url: '${gitUrl}']]])\n          }   \n      }\n\n      stage('\u83b7\u53d6commit_id') {\n          steps {\n              echo '\u83b7\u53d6commit_id'\n              git credentialsId: '${credentialsId}', url: '${gitUrl}'\n              script {\n                  env.commit_id = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()\n              }\n          }\n      }\n\n\n      stage('goctl\u7248\u672c\u68c0\u6d4b') {\n          steps{\n              sh '/usr/local/bin/goctl -v'\n          }\n      }\n\n      stage('Dockerfile Build') {\n          steps{\n                 sh '/usr/local/bin/goctl docker -go service/${JOB_NAME}/${type}/${JOB_NAME}.go'\n                 script{\n                     env.image = sh(returnStdout: true, script: 'echo ${JOB_NAME}-${type}:${commit_id}').trim()\n                 }\n                 sh 'echo \u955c\u50cf\u540d\u79f0\uff1a${image}'\n                 sh 'docker build -t ${image} .'\n          }\n      }\n\n      stage('\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93') {\n          steps{\n              sh '/root/dockerlogin.sh'\n              sh 'docker tag  ${image} ${dockerServer}/${image}'\n              sh 'docker push ${dockerServer}/${image}'\n          }\n      }\n\n      stage('\u90e8\u7f72\u5230k8s') {\n          steps{\n              script{\n                  env.deployYaml = sh(returnStdout: true, script: 'echo ${JOB_NAME}-${type}-deploy.yaml').trim()\n                  env.port=sh(returnStdout: true, script: '/root/port.sh ${JOB_NAME}-${type}').trim()\n              }\n\n              sh 'echo ${port}'\n\n              sh 'rm -f ${deployYaml}'\n              sh '/usr/local/bin/goctl kube deploy -secret dockersecret -replicas 2 -nodePort 3${port} -requestCpu 200 -requestMem 50 -limitCpu 300 -limitMem 100 -name ${JOB_NAME}-${type} -namespace hey-go-zero -image ${dockerServer}/${image} -o ${deployYaml} -port ${port}'\n              sh '/usr/bin/kubectl apply -f ${deployYaml}'\n          }\n      }\n      \n      stage('Clean') {\n          steps{\n              sh 'docker rmi -f ${image}'\n              sh 'docker rmi -f ${dockerServer}/${image}'\n              cleanWs notFailBuild: true\n          }\n      }\n  }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"${credentialsId} \u8981\u66ff\u6362\u4e3a\u4f60\u7684\u5177\u4f53\u51ed\u636e\u503c, \u5373 ","[\u6dfb\u52a0\u51ed\u636e]"," \u6a21\u5757\u4e2d\u7684\u4e00\u4e32\u5b57\u7b26\u4e32, ${gitUrl} \u9700\u8981\u66ff\u6362\u4e3a\u4f60\u4ee3\u7801\u7684git\u4ed3\u5e93\u5730\u5740\uff0c\u5176\u4ed6\u7684 ${..} \u5f62\u5f0f\u7684\u53d8\u91cf\u65e0\u9700\u4fee\u6539, \u4fdd\u6301\u539f\u6837\u5373\u53ef."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"user-pipepine-script",src:t(6597).Z})),(0,r.kt)("h3",{id:"portsh\u53c2\u8003\u5185\u5bb9\u5982\u4e0b"},"port.sh\u53c2\u8003\u5185\u5bb9\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'case $1 in\n"user-api") echo 1000\n;;\n"user-rpc") echo 1001\n;;\n"course-api") echo 1002\n;;\n"course-rpc") echo 1003\n;;\n"selection-api") echo 1004\nesac\n')),(0,r.kt)("p",null,"\u5176\u4e2ddockerlogin.sh\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\ndocker login --username=$docker-user --password=$docker-pass $docker-server\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$docker-user: docker\u767b\u5f55\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"$docker-pass: docker\u767b\u5f55\u7528\u6237\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"$docker-server: docker\u79c1\u6709\u5730\u5740")),(0,r.kt)("h2",{id:"\u67e5\u770bpipeline"},"\u67e5\u770bpipeline"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build with parameters",src:t(1097).Z}),"\n",(0,r.kt)("img",{alt:"build with parameters",src:t(9106).Z})),(0,r.kt)("h2",{id:"\u67e5\u770bk8s\u670d\u52a1"},"\u67e5\u770bk8s\u670d\u52a1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s01",src:t(9653).Z})))}d.isMDXComponent=!0},5370:function(e,n,t){n.Z=t.p+"assets/images/docker_env-041478b5f3401eaa8984c63a0b0eb39d.png"},8179:function(e,n,t){n.Z=t.p+"assets/images/gitlab-git-url-f1da68812c259d6a79ae1d6d56dbcb2e.png"},1546:function(e,n,t){n.Z=t.p+"assets/images/jenkins-add-credentials-6571e3a1892342babe2aff11383cd4cf.png"},1097:function(e,n,t){n.Z=t.p+"assets/images/jenkins-build-with-parameters-8bce03ffd4bf1d31f548efe18b250129.png"},2675:function(e,n,t){n.Z=t.p+"assets/images/jenkins-choice-74208d911d8e87e8b3c334623f622b76.png"},7792:function(e,n,t){n.Z=t.p+"assets/images/jenkins-configure-67327d264092ef27617d7f04d1d4383a.png"},4992:function(e,n,t){n.Z=t.p+"assets/images/jenkins-credentials-id-375cada8d4e2bc0b9595ea1075115037.png"},1302:function(e,n,t){n.Z=t.p+"assets/images/jenkins-credentials-67c5d02d364de9ce359864a183f9dbb2.png"},3563:function(e,n,t){n.Z=t.p+"assets/images/jenkins-git-2704493865e8f639ed334c1db8ce48a9.png"},4830:function(e,n,t){n.Z=t.p+"assets/images/jenkins-new-item-c75773b46b1a19c8497bfa7e2ec44052.png"},9653:function(e,n,t){n.Z=t.p+"assets/images/k8s-01-620cb74196adbc0824b838c576d402ae.png"},9106:function(e,n,t){n.Z=t.p+"assets/images/pipeline-d580a601a6778ca75b488df27d2c8aed.png"},1788:function(e,n,t){n.Z=t.p+"assets/images/ssh-add-key-1fc91c396e8e927e4345207f6cfb1869.png"},6597:function(e,n,t){n.Z=t.p+"assets/images/user-pipeline-script-91472316747be2a8ca7fb809569909f5.png"}}]);