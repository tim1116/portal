"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[849],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),f=n,d=g["".concat(c,".").concat(f)]||g[f]||s[f]||a;return t?o.createElement(d,i(i({ref:r},u),{},{components:t})):o.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5750:function(e,r,t){t.r(r),t.d(r,{default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],l={},c={unversionedId:"faq/error",id:"faq/error",isDocsHomePage:!1,title:"Error",description:"Error reporting on Windows",source:"@site/docs/faq/error.md",sourceDirName:"faq",slug:"/faq/error",permalink:"/docs/faq/error",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/faq/error.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Trouble Shooting",permalink:"/docs/faq/troubleshooting"}},p=[{value:"Error reporting on Windows",id:"error-reporting-on-windows",children:[]},{value:"grpc error",id:"grpc-error",children:[]},{value:"protoc-gen-go installation failed",id:"protoc-gen-go-installation-failed",children:[]},{value:"api service failed to start",id:"api-service-failed-to-start",children:[]},{value:"command not found: goctl",id:"command-not-found-goctl",children:[]}],u={toc:p};function s(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"error-reporting-on-windows"},"Error reporting on Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"A required privilege is not held by the client.\n")),(0,a.kt)("p",null,'Solution: "Run as administrator" goctl will work.'),(0,a.kt)("h2",{id:"grpc-error"},"grpc error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'protoc-gen-go: unable to determine Go import path for "greet.proto"\n\nPlease specify either:\n\u2022 a "go_package" option in the .proto source file, or\n\u2022 a "M" argument on the command line.\n\nSee https://developers.google.com/protocol-buffers/docs/reference/go-generated#package for more information.\n\n--go_out: protoc-gen-go: Plugin failed with status code 1.\n')),(0,a.kt)("p",null,"Solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get -u github.com/golang/protobuf/protoc-gen-go@v1.3.2\n")),(0,a.kt)("h2",{id:"protoc-gen-go-installation-failed"},"protoc-gen-go installation failed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ go get github.com/golang/protobuf/protoc-gen-go: module github.com/golang/protobuf/protoc-gen-go: Get "https://proxy.golang.org/github.com/golang/protobuf/protoc-gen-go/@v/list": dial tcp 216.58.200.49:443: i/o timeout\n')),(0,a.kt)("p",null,"Please make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"GOPROXY")," has been set, see ",(0,a.kt)("a",{parentName:"p",href:"../prepare/gomod-config"},"Go Module Configuration")," for GOPROXY setting"),(0,a.kt)("h2",{id:"api-service-failed-to-start"},"api service failed to start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"error: config file etc/user-api.yaml, error: type mismatch for field xx\n")),(0,a.kt)("p",null,"Please confirm whether the configuration items in the ",(0,a.kt)("inlineCode",{parentName:"p"},"user-api.yaml")," configuration file have been configured. If there are values, check whether the yaml configuration file conforms to the yaml format."),(0,a.kt)("h2",{id:"command-not-found-goctl"},"command not found: goctl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"command not found: goctl\n")),(0,a.kt)("p",null,"Please make sure that goctl has been installed or whether goctl has been added to the environment variable"))}s.isMDXComponent=!0}}]);