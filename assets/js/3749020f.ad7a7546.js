"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7750],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4436:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p={unversionedId:"blog/concurrency/fx",id:"blog/concurrency/fx",isDocsHomePage:!1,title:"Fx",description:"fx is a complete stream processing component.",source:"@site/docs/blog/concurrency/fx.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/fx",permalink:"/docs/blog/concurrency/fx",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/concurrency/fx.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"blog",previous:{title:"logx",permalink:"/docs/blog/tool/logx"},next:{title:"Mapreduce",permalink:"/docs/blog/concurrency/mapreduce"}},m=[{value:"Overall API",id:"overall-api",children:[]},{value:"How to use?",id:"how-to-use",children:[]},{value:"Briefly analyze",id:"briefly-analyze",children:[{value:"Walk()",id:"walk",children:[]},{value:"Tail()",id:"tail",children:[]},{value:"Stream Transform Design",id:"stream-transform-design",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:m};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fx")," is a complete stream processing component.\nIt is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"MapReduce"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fx")," also has a concurrent processing function: ",(0,i.kt)("inlineCode",{parentName:"p"},"Parallel(fn, options)"),". But at the same time it is not only concurrent processing. ",(0,i.kt)("inlineCode",{parentName:"p"},"From(chan)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Map(fn)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter(fn)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Reduce(fn)"),", etc., read from the data source into a stream, process the stream data, and finally aggregate the stream data. Is it a bit like Java Lambda? If you were a Java developer before, you can understand the basic design when you see this."),(0,i.kt)("h2",{id:"overall-api"},"Overall API"),(0,i.kt)("p",null,"Let's get an overview of how ",(0,i.kt)("inlineCode",{parentName:"p"},"fx")," is constructed as a whole:\n",(0,i.kt)("img",{alt:"dc500acd526d40aabfe4f53cf5bd180a_tplv-k3u1fbpfcp-zoom-1.png",src:n(5026).Z})),(0,i.kt)("p",null,"The marked part is the most important part of the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"fx"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From APIs such as ",(0,i.kt)("inlineCode",{parentName:"li"},"From(fn)"),", a data stream ",(0,i.kt)("inlineCode",{parentName:"li"},"Stream")," is generated"),(0,i.kt)("li",{parentName:"ol"},"A collection of APIs for converting, aggregating, and evaluating ",(0,i.kt)("inlineCode",{parentName:"li"},"Stream"))),(0,i.kt)("p",null,"So list the currently supported ",(0,i.kt)("inlineCode",{parentName:"p"},"Stream API"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Distinct(fn)")),(0,i.kt)("td",{parentName:"tr",align:null},"Select a specific item type in fn and de-duplicate it")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Filter(fn, option)")),(0,i.kt)("td",{parentName:"tr",align:null},"fn specifies specific rules, and the ",(0,i.kt)("inlineCode",{parentName:"td"},"element")," that meets the rules is passed to the next ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Group(fn)")),(0,i.kt)("td",{parentName:"tr",align:null},"According to fn, the elements in ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," are divided into different groups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Head(num)")),(0,i.kt)("td",{parentName:"tr",align:null},"Take out the first num elements in ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," and generate a new ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Map(fn, option)")),(0,i.kt)("td",{parentName:"tr",align:null},"Convert each ele to another corresponding ele and pass it to the next ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Merge()")),(0,i.kt)("td",{parentName:"tr",align:null},"Combine all ",(0,i.kt)("inlineCode",{parentName:"td"},"ele")," into one ",(0,i.kt)("inlineCode",{parentName:"td"},"slice")," and generate a new ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Reverse()")),(0,i.kt)("td",{parentName:"tr",align:null},"Reverse the element in ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"),". ","[Use double pointer]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Sort(fn)")),(0,i.kt)("td",{parentName:"tr",align:null},"Sort elements in ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," according to fn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tail(num)")),(0,i.kt)("td",{parentName:"tr",align:null},"Take out the last num elements of ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," to generate a new ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"),". ","[Using a doubly linked list]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Walk(fn, option)")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply fn to every element of ",(0,i.kt)("inlineCode",{parentName:"td"},"source"),". Generate a new ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"))))),(0,i.kt)("p",null,"No longer generates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"stream"),", do the final evaluation operation:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ForAll(fn)")),(0,i.kt)("td",{parentName:"tr",align:null},"Process ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," according to fn, and no longer generate ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," ","[evaluation operation]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ForEach(fn)")),(0,i.kt)("td",{parentName:"tr",align:null},"Perform fn ","[evaluation operation]"," on all elements in ",(0,i.kt)("inlineCode",{parentName:"td"},"stream"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Parallel(fn, option)")),(0,i.kt)("td",{parentName:"tr",align:null},"Concurrently apply the given fn and the given number of workers to each ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),"[evaluation operation]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Reduce(fn)")),(0,i.kt)("td",{parentName:"tr",align:null},"Directly process ",(0,i.kt)("inlineCode",{parentName:"td"},"stream")," ","[evaluation operation]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Done()")),(0,i.kt)("td",{parentName:"tr",align:null},"Do nothing, wait for all operations to complete")))),(0,i.kt)("h2",{id:"how-to-use"},"How to use?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'result := make(map[string]string)\nfx.From(func(source chan<- interface{}) {\n  for _, item := range data {\n    source <- item\n  }\n}).Walk(func(item interface{}, pipe chan<- interface{}) {\n  each := item.(*model.ClassData)\n\n  class, err := l.rpcLogic.GetClassInfo()\n  if err != nil {\n    l.Errorf("get class %s failed: %s", each.ClassId, err.Error())\n    return\n  }\n  \n  students, err := l.rpcLogic.GetUsersInfo(class.ClassId)\n  if err != nil {\n    l.Errorf("get students %s failed: %s", each.ClassId, err.Error())\n    return\n  }\n\n  pipe <- &classObj{\n    classId: each.ClassId\n    studentIds: students\n  }\n}).ForEach(func(item interface{}) {\n    o := item.(*classObj)\n    result[o.classId] = o.studentIds\n})\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"From()")," generates ",(0,i.kt)("inlineCode",{parentName:"li"},"stream")," from a ",(0,i.kt)("inlineCode",{parentName:"li"},"slice")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Walk()")," receives and a ",(0,i.kt)("inlineCode",{parentName:"li"},"stream"),", transforms and reorganizes each ",(0,i.kt)("inlineCode",{parentName:"li"},"ele")," in the stream to generate a new ",(0,i.kt)("inlineCode",{parentName:"li"},"stream")),(0,i.kt)("li",{parentName:"ol"},"Finally, the ",(0,i.kt)("inlineCode",{parentName:"li"},"stream")," output (",(0,i.kt)("inlineCode",{parentName:"li"},"fmt.Println"),"), storage (",(0,i.kt)("inlineCode",{parentName:"li"},"map,slice"),"), and persistence (",(0,i.kt)("inlineCode",{parentName:"li"},"db operation"),") are performed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"evaluation operation"))),(0,i.kt)("h2",{id:"briefly-analyze"},"Briefly analyze"),(0,i.kt)("p",null,"The function naming in ",(0,i.kt)("inlineCode",{parentName:"p"},"fx")," is semantically. Developers only need to know what kind of conversion is required for the business logic and call the matching function."),(0,i.kt)("p",null,"So here is a brief analysis of a few more typical functions."),(0,i.kt)("h3",{id:"walk"},"Walk()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," is implemented as the bottom layer by multiple functions throughout ",(0,i.kt)("inlineCode",{parentName:"p"},"fx"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Map(), Filter()"),", etc."),(0,i.kt)("p",null,"So the essence is: ",(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," is responsible for concurrently applying the passed function to each ",(0,i.kt)("inlineCode",{parentName:"p"},"ele")," of the ",(0,i.kt)("strong",{parentName:"p"},"input stream")," and generating a new ",(0,i.kt)("inlineCode",{parentName:"p"},"stream"),"."),(0,i.kt)("p",null,"Following the source code, it is divided into two sub-functions: custom count by ",(0,i.kt)("inlineCode",{parentName:"p"},"worker"),", default count is ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Custom workers\nfunc (p Stream) walkLimited(fn WalkFunc, option *rxOptions) Stream {\n    pipe := make(chan interface{}, option.workers)\n\n    go func() {\n        var wg sync.WaitGroup\n    // channel<- If the set number of workers is reached, the channel is blocked, so as to control the number of concurrency.\n    // Simple goroutine pool\n        pool := make(chan lang.PlaceholderType, option.workers)\n\n        for {\n      // Each for loop will open a goroutine. If it reaches the number of workers, it blocks\n            pool <- lang.Placeholder\n            item, ok := <-p.source\n            if !ok {\n                <-pool\n                break\n            }\n            // Use WaitGroup to ensure the integrity of task completion\n            wg.Add(1)\n            threading.GoSafe(func() {\n                defer func() {\n                    wg.Done()\n                    <-pool\n                }()\n\n                fn(item, pipe)\n            })\n        }\n\n        wg.Wait()\n        close(pipe)\n    }()\n\n    return Range(pipe)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"buffered channel")," as a concurrent queue to limit the number of concurrent"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"waitgroup")," to ensure the completeness of the task completion")),(0,i.kt)("p",null,"Another ",(0,i.kt)("inlineCode",{parentName:"p"},"walkUnlimited()"),": also uses ",(0,i.kt)("inlineCode",{parentName:"p"},"waitgroup")," for concurrency control, because there is no custom concurrency limit, so there is no other ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," for concurrency control."),(0,i.kt)("h3",{id:"tail"},"Tail()"),(0,i.kt)("p",null,"The introduction of this is mainly because the ",(0,i.kt)("inlineCode",{parentName:"p"},"ring")," is a doubly linked list, and the simple algorithm is still very interesting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (p Stream) Tail(n int64) Stream {\n    source := make(chan interface{})\n\n    go func() {\n        ring := collection.NewRing(int(n))\n    // Sequence insertion, the order of the source is consistent with the order of the ring\n        for item := range p.source {\n            ring.Add(item)\n        }\n    // Take out all the items in the ring\n        for _, item := range ring.Take() {\n            source <- item\n        }\n        close(source)\n    }()\n\n    return Range(source)\n}\n")),(0,i.kt)("p",null,"As for why ",(0,i.kt)("inlineCode",{parentName:"p"},"Tail()")," can take out the last n of the source, this is left for everyone to fine-tune. Here is my understanding:\n",(0,i.kt)("img",{alt:"f93c621571074e44a2d403aa25e7db6f_tplv-k3u1fbpfcp-zoom-1.png",src:n(1973).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Suppose there is the following scenario,",(0,i.kt)("inlineCode",{parentName:"p"},"Tail(5)")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stream size")," \uff1a7"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ring size"),"\uff1a5")))),(0,i.kt)("p",null,"Here you can use the method of pulling apart the ring-shaped linked list, ",(0,i.kt)("strong",{parentName:"p"},"Loop-to-line"),"\uff0cAt this point, divide the symmetry axis by the full length, flip the extra elements, and the following elements are the parts needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Tail(5)"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The graph is used here for a clearer performance, but everyone should also look at the code. Algorithm to be tested"))),(0,i.kt)("h3",{id:"stream-transform-design"},"Stream Transform Design"),(0,i.kt)("p",null,"Analyzing the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"fx"),", you will find that the overall design follows a design template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (p Stream) Transform(fn func(item interface{}) interface{}) Stream {\n    // make channel\n    source := make(chan interface{})\n    // goroutine worker\n    go func() {\n        // transform\n        for item := range p.source {\n            ...\n            source <- item\n            ...\n        }\n        ...\n        // Close the input, but still can output from this stream. Prevent memory leaks\n        close(source)\n    }()\n    // channel -> stream\n    return Range(source)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channel")," as a container for streams"),(0,i.kt)("li",{parentName:"ul"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"goroutine")," to convert ",(0,i.kt)("inlineCode",{parentName:"li"},"source"),", aggregate, and send to ",(0,i.kt)("inlineCode",{parentName:"li"},"channel")),(0,i.kt)("li",{parentName:"ul"},"Processed,",(0,i.kt)("inlineCode",{parentName:"li"},"close(outputStream)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channel -> stream"))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This concludes the basic introduction of ",(0,i.kt)("inlineCode",{parentName:"p"},"fx"),". If you are interested in other API source code, you can follow the API list above to read one by one."),(0,i.kt)("p",null,"At the same time, it is also recommended that you take a look at the API of ",(0,i.kt)("inlineCode",{parentName:"p"},"java stream"),", and you can have a deeper understanding of this ",(0,i.kt)("inlineCode",{parentName:"p"},"stream call"),"."),(0,i.kt)("p",null,"At the same time, there are many useful component tools in ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero"),". Good use of tools will greatly help improve service performance and development efficiency. I hope this article can bring you some gains."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero"},"go-zero")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://colobu.com/2016/03/02/Java-Stream/"},"Java Stream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/xa98C-QUHRUK0BhWLzI3XQ"},"Stream API in Java 8"))))}d.isMDXComponent=!0},5026:function(e,t,n){t.Z=n.p+"assets/images/dc500acd526d40aabfe4f53cf5bd180a_tplv-k3u1fbpfcp-zoom-1-5a890ca41e4e08d7758d7f941448b4c9.png"},1973:function(e,t,n){t.Z=n.p+"assets/images/f93c621571074e44a2d403aa25e7db6f_tplv-k3u1fbpfcp-zoom-1-c61eee8473d6291e89b875a397440eb2.png"}}]);