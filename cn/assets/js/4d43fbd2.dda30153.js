"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1763],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,d=m["".concat(p,".").concat(u)]||m[u]||k[u]||l;return t?i.createElement(d,r(r({ref:n},s),{},{components:t})):i.createElement(d,r({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5319:function(e,n,t){t.r(n),t.d(n,{default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var i=t(7462),a=t(3366),l=(t(7294),t(3905)),r=["components"],o={title:"TimingWheel",authors:"kevwan"},p={unversionedId:"blog/principle/timing-wheel",id:"blog/principle/timing-wheel",isDocsHomePage:!1,title:"TimingWheel",description:"\u672c\u6587\u6765\u4ecb\u7ecd go-zero \u4e2d \u5ef6\u8fdf\u64cd\u4f5c\u3002\u5ef6\u8fdf\u64cd\u4f5c\uff0c\u53ef\u4ee5\u91c7\u7528\u4e24\u4e2a\u65b9\u6848\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/principle/timing-wheel.md",sourceDirName:"blog/principle",slug:"/blog/principle/timing-wheel",permalink:"/cn/docs/blog/principle/timing-wheel",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/principle/timing-wheel.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{title:"TimingWheel",authors:"kevwan"},sidebar:"blog",previous:{title:"\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u4e4b\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528",permalink:"/cn/docs/blog/concurrency/sharedcalls"},next:{title:"\u5feb\u901f\u6784\u5efa\u9ad8\u5e76\u53d1\u5fae\u670d\u52a1",permalink:"/cn/docs/blog/showcase/shorturl"}},c=[{value:"cache \u4e2d\u7684 timingWheel",id:"cache-\u4e2d\u7684-timingwheel",children:[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[]},{value:"Task Operation",id:"task-operation",children:[]},{value:"Execute",id:"execute",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:c};function k(e){var n=e.components,o=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6765\u4ecb\u7ecd ",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d ",(0,l.kt)("strong",{parentName:"p"},"\u5ef6\u8fdf\u64cd\u4f5c"),"\u3002",(0,l.kt)("strong",{parentName:"p"},"\u5ef6\u8fdf\u64cd\u4f5c"),"\uff0c\u53ef\u4ee5\u91c7\u7528\u4e24\u4e2a\u65b9\u6848\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Timer"),"\uff1a\u5b9a\u65f6\u5668\u7ef4\u62a4\u4e00\u4e2a\u4f18\u5148\u961f\u5217\uff0c\u5230\u65f6\u95f4\u70b9\u6267\u884c\uff0c\u7136\u540e\u628a\u9700\u8981\u6267\u884c\u7684 task \u5b58\u50a8\u5728 map \u4e2d"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"collection")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"timingWheel")," \uff0c\u7ef4\u62a4\u4e00\u4e2a\u5b58\u653e\u4efb\u52a1\u7ec4\u7684\u6570\u7ec4\uff0c\u6bcf\u4e00\u4e2a\u69fd\u90fd\u7ef4\u62a4\u4e00\u4e2a\u5b58\u50a8task\u7684\u53cc\u5411\u94fe\u8868\u3002\u5f00\u59cb\u6267\u884c\u65f6\uff0c\u8ba1\u65f6\u5668\u6bcf\u9694\u6307\u5b9a\u65f6\u95f4\u6267\u884c\u4e00\u4e2a\u69fd\u91cc\u9762\u7684tasks\u3002")),(0,l.kt)("p",null,"\u65b9\u68482\u628a\u7ef4\u62a4task\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f18\u5148\u961f\u5217 O(nlog(n))")," \u964d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u53cc\u5411\u94fe\u8868 O(1)"),"\uff0c\u800c\u6267\u884ctask\u4e5f\u53ea\u8981\u8f6e\u8be2\u4e00\u4e2a\u65f6\u95f4\u70b9\u7684tasks ",(0,l.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c\u4e0d\u9700\u8981\u50cf\u4f18\u5148\u961f\u5217\uff0c\u653e\u5165\u548c\u5220\u9664\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(nlog(n))"),"\u3002"),(0,l.kt)("h2",{id:"cache-\u4e2d\u7684-timingwheel"},"cache \u4e2d\u7684 timingWheel"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5148\u6765\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"collection")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," \u4e2d\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"timingWheel")," \u7684\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"timingWheel, err := NewTimingWheel(time.Second, slots, func(k, v interface{}) {\n  key, ok := k.(string)\n  if !ok {\n    return\n  }\n  cache.Del(key)\n})\nif err != nil {\n  return nil, err\n}\n\ncache.timingWheel = timingWheel\n")),(0,l.kt)("p",null,"\u8fd9\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," \u521d\u59cb\u5316\u4e2d\u4e5f\u540c\u65f6\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"timingWheel")," \u505akey\u7684\u8fc7\u671f\u5904\u7406\uff0c\u53c2\u6570\u4f9d\u6b21\u4ee3\u8868\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interval"),"\uff1a\u65f6\u95f4\u5212\u5206\u523b\u5ea6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"numSlots"),"\uff1a\u65f6\u95f4\u69fd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"execute"),"\uff1a\u65f6\u95f4\u70b9\u6267\u884c\u51fd\u6570")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," \u4e2d\u6267\u884c\u51fd\u6570\u5219\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u5220\u9664\u8fc7\u671fkey"),"\uff0c\u800c\u8fd9\u4e2a\u8fc7\u671f\u5219\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"timingWheel")," \u6765\u63a7\u5236\u63a8\u8fdb\u65f6\u95f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\uff0c\u5c31\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"strong"},"cache")," \u5bf9 ",(0,l.kt)("inlineCode",{parentName:"strong"},"timingWheel")," \u7684\u4f7f\u7528\u6765\u8ba4\u8bc6\u3002")),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u771f\u6b63\u505a\u521d\u59cb\u5316\nfunc newTimingWheelWithClock(interval time.Duration, numSlots int, execute Execute, ticker timex.Ticker) (\n    *TimingWheel, error) {\n    tw := &TimingWheel{\n        interval:      interval,                     // \u5355\u4e2a\u65f6\u95f4\u683c\u65f6\u95f4\u95f4\u9694\n        ticker:        ticker,                       // \u5b9a\u65f6\u5668\uff0c\u505a\u65f6\u95f4\u63a8\u52a8\uff0c\u4ee5interval\u4e3a\u5355\u4f4d\u63a8\u8fdb\n        slots:         make([]*list.List, numSlots), // \u65f6\u95f4\u8f6e\n        timers:        NewSafeMap(),                 // \u5b58\u50a8task{key, value}\u7684map [\u6267\u884cexecute\u6240\u9700\u8981\u7684\u53c2\u6570]\n        tickedPos:     numSlots - 1,                 // at previous virtual circle\n        execute:       execute,                      // \u6267\u884c\u51fd\u6570\n        numSlots:      numSlots,                     // \u521d\u59cb\u5316 slots num\n        setChannel:    make(chan timingEntry),       // \u4ee5\u4e0b\u51e0\u4e2achannel\u662f\u505atask\u4f20\u9012\u7684\n        moveChannel:   make(chan baseEntry),\n        removeChannel: make(chan interface{}),\n        drainChannel:  make(chan func(key, value interface{})),\n        stopChannel:   make(chan lang.PlaceholderType),\n    }\n    // \u628a slot \u4e2d\u5b58\u50a8\u7684 list \u5168\u90e8\u51c6\u5907\u597d\n    tw.initSlots()\n    // \u5f00\u542f\u5f02\u6b65\u534f\u7a0b\uff0c\u4f7f\u7528 channel \u6765\u505atask\u901a\u4fe1\u548c\u4f20\u9012\n    go tw.run()\n\n    return tw, nil\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"76108cc071154e2faa66eada81857fb0~tplv-k3u1fbpfcp-zoom-1.image.png",src:t(800).Z})),(0,l.kt)("p",null,"\u4ee5\u4e0a\u6bd4\u8f83\u76f4\u89c2\u5c55\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"timingWheel")," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u201c\u65f6\u95f4\u8f6e\u201d"),"\uff0c\u540e\u9762\u4f1a\u56f4\u7ed5\u8fd9\u5f20\u56fe\u89e3\u91ca\u5176\u4e2d\u63a8\u8fdb\u7684\u7ec6\u8282\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go tw.run()")," \u5f00\u4e00\u4e2a\u534f\u7a0b\u505a\u65f6\u95f4\u63a8\u52a8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (tw *TimingWheel) run() {\n    for {\n        select {\n      // \u5b9a\u65f6\u5668\u505a\u65f6\u95f4\u63a8\u52a8 -> scanAndRunTasks()\n        case <-tw.ticker.Chan():\n            tw.onTick()\n      // add task \u4f1a\u5f80 setChannel \u8f93\u5165task\n        case task := <-tw.setChannel:\n            tw.setTask(&task)\n        ...\n        }\n    }\n}\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5c31\u5f00\u59cb\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"timer")," \u6267\u884c\uff0c\u5e76\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"interval"),"\u65f6\u95f4\u6bb5\u8f6c\u52a8\uff0c\u7136\u540e\u5e95\u5c42\u4e0d\u505c\u7684\u83b7\u53d6\u6765\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"slot")," \u4e2d\u7684 \xa0",(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u7684task\uff0c\u4ea4\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," \u6267\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"3bbddc1ebb79455da91dfcf3da6bc72f~tplv-k3u1fbpfcp-zoom-1.image.png",src:t(6474).Z})),(0,l.kt)("h3",{id:"task-operation"},"Task Operation"),(0,l.kt)("p",null,"\u7d27\u63a5\u7740\u5c31\u662f\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"cache key")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (c *Cache) Set(key string, value interface{}) {\n    c.lock.Lock()\n    _, ok := c.data[key]\n    c.data[key] = value\n    c.lruCache.add(key)\n    c.lock.Unlock()\n\n    expiry := c.unstableExpiry.AroundDuration(c.expire)\n    if ok {\n        c.timingWheel.MoveTimer(key, expiry)\n    } else {\n        c.timingWheel.SetTimer(key, value, expiry)\n    }\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5148\u770b\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"data map")," \u4e2d\u6709\u6ca1\u6709\u5b58\u5728\u8fd9\u4e2akey"),(0,l.kt)("li",{parentName:"ol"},"\u5b58\u5728\uff0c\u5219\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"expire")," \xa0 -> ",(0,l.kt)("inlineCode",{parentName:"li"},"MoveTimer()")),(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u8bbe\u7f6ekey \xa0 -> \xa0 ",(0,l.kt)("inlineCode",{parentName:"li"},"SetTimer()"))),(0,l.kt)("p",null,"\u6240\u4ee5\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"timingWheel")," \u7684\u4f7f\u7528\u4e0a\u5c31\u6e05\u6670\u4e86\uff0c\u5f00\u53d1\u8005\u6839\u636e\u9700\u6c42\u53ef\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"add")," \u6216\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u8ddf\u6e90\u7801\u8fdb\u53bb\u4f1a\u53d1\u73b0\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"SetTimer() MoveTimer()")," \u90fd\u662f\u5c06task\u8f93\u9001\u5230channel\uff0c\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"run()")," \u4e2d\u5f00\u542f\u7684\u534f\u7a0b\u4e0d\u65ad\u53d6\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u7684task\u64cd\u4f5c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"SetTimer() -> setTask()"),"\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"not exist task\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"getPostion -> pushBack to list -> setPosition")),(0,l.kt)("li",{parentName:"ul"},"exist task\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"get from timers -> moveTask()"))),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"MoveTimer() -> moveTask()"))),(0,l.kt)("p",null,"\u7531\u4e0a\u9762\u7684\u8c03\u7528\u94fe\uff0c\u6709\u4e00\u4e2a\u90fd\u4f1a\u8c03\u7528\u7684\u51fd\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"moveTask()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (tw *TimingWheel) moveTask(task baseEntry) {\n    // timers: Map => \u901a\u8fc7key\u83b7\u53d6 [positionEntry\u300cpos, task\u300d]\n    val, ok := tw.timers.Get(task.key)\n    if !ok {\n        return\n    }\n\n    timer := val.(*positionEntry)\n  // {delay < interval} => \u5ef6\u8fdf\u65f6\u95f4\u6bd4\u4e00\u4e2a\u65f6\u95f4\u683c\u95f4\u9694\u8fd8\u5c0f\uff0c\u6ca1\u6709\u66f4\u5c0f\u7684\u523b\u5ea6\uff0c\u8bf4\u660e\u4efb\u52a1\u5e94\u8be5\u7acb\u5373\u6267\u884c\n    if task.delay < tw.interval {\n        threading.GoSafe(func() {\n            tw.execute(timer.item.key, timer.item.value)\n        })\n        return\n    }\n    // \u5982\u679c > interval\uff0c\u5219\u901a\u8fc7 \u5ef6\u8fdf\u65f6\u95f4delay \u8ba1\u7b97\u5176\u51fa\u65f6\u95f4\u8f6e\u4e2d\u7684 new pos, circle\n    pos, circle := tw.getPositionAndCircle(task.delay)\n    if pos >= timer.pos {\n        timer.item.circle = circle\n    // \u8bb0\u5f55\u524d\u540e\u7684\u79fb\u52a8offset\u3002\u4e3a\u4e86\u540e\u9762\u8fc7\u7a0b\u91cd\u65b0\u5165\u961f\n        timer.item.diff = pos - timer.pos\n    } else if circle > 0 {\n        // \u8f6c\u79fb\u5230\u4e0b\u4e00\u5c42\uff0c\u5c06 circle \u8f6c\u6362\u4e3a diff \u4e00\u90e8\u5206\n        circle--\n        timer.item.circle = circle\n        // \u56e0\u4e3a\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u8981\u52a0\u4e0a numSlots [\u4e5f\u5c31\u662f\u76f8\u5f53\u4e8e\u8981\u8d70\u5230\u4e0b\u4e00\u5c42]\n        timer.item.diff = tw.numSlots + pos - timer.pos\n    } else {\n        // \u5982\u679c offset \u63d0\u524d\u4e86\uff0c\u6b64\u65f6 task \u4e5f\u8fd8\u5728\u7b2c\u4e00\u5c42\n        // \u6807\u8bb0\u5220\u9664\u8001\u7684 task\uff0c\u5e76\u91cd\u65b0\u5165\u961f\uff0c\u7b49\u5f85\u88ab\u6267\u884c\n        timer.item.removed = true\n        newItem := &timingEntry{\n            baseEntry: task,\n            value:     timer.item.value,\n        }\n        tw.slots[pos].PushBack(newItem)\n        tw.setTimerPosition(pos, newItem)\n    }\n}\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u8fc7\u7a0b\u6709\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay < interval"),"\uff1a\u56e0\u4e3a < \u5355\u4e2a\u65f6\u95f4\u7cbe\u5ea6\uff0c\u8868\u793a\u8fd9\u4e2a\u4efb\u52a1\u5df2\u7ecf\u8fc7\u671f\uff0c\u9700\u8981\u9a6c\u4e0a\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u6539\u53d8\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"delay"),"\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"new >= old"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"<newPos, newCircle, diff>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"newCircle > 0"),"\uff1a\u8ba1\u7b97diff\uff0c\u5e76\u5c06 circle \u8f6c\u6362\u4e3a \u4e0b\u4e00\u5c42\uff0c\u6545diff + numslots"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u662f\u5355\u7eaf\u5ef6\u8fdf\u65f6\u95f4\u7f29\u77ed\uff0c\u5219\u5c06\u8001\u7684task\u6807\u8bb0\u5220\u9664\uff0c\u91cd\u65b0\u52a0\u5165list\uff0c\u7b49\u5f85\u4e0b\u4e00\u8f6eloop\u88abexecute")))),(0,l.kt)("h3",{id:"execute"},"Execute"),(0,l.kt)("p",null,"\u4e4b\u524d\u5728\u521d\u59cb\u5316\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"run()")," \u4e2d\u5b9a\u65f6\u5668\u7684\u4e0d\u65ad\u63a8\u8fdb\uff0c\u63a8\u8fdb\u7684\u8fc7\u7a0b\u4e3b\u8981\u5c31\u662f\u628a list\u4e2d\u7684 task \u4f20\u7ed9\u6267\u884c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"execute func"),"\u3002\u6211\u4eec\u4ece\u5b9a\u65f6\u5668\u7684\u6267\u884c\u5f00\u59cb\u770b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u5b9a\u65f6\u5668 \u300c\u6bcf\u9694 interval \u4f1a\u6267\u884c\u4e00\u6b21\u300d\nfunc (tw *TimingWheel) onTick() {\n  // \u6bcf\u6b21\u6267\u884c\u66f4\u65b0\u4e00\u4e0b\u5f53\u524d\u6267\u884c tick \u4f4d\u7f6e\n    tw.tickedPos = (tw.tickedPos + 1) % tw.numSlots\n  // \u83b7\u53d6\u6b64\u65f6 tick\u4f4d\u7f6e \u4e2d\u7684\u5b58\u50a8task\u7684\u53cc\u5411\u94fe\u8868\n    l := tw.slots[tw.tickedPos]\n    tw.scanAndRunTasks(l)\n}\n")),(0,l.kt)("p",null,"\u7d27\u63a5\u7740\u662f\u5982\u4f55\u53bb\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"execute"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (tw *TimingWheel) scanAndRunTasks(l *list.List) {\n    // \u5b58\u50a8\u76ee\u524d\u9700\u8981\u6267\u884c\u7684task{key, value}  [execute\u6240\u9700\u8981\u7684\u53c2\u6570\uff0c\u4f9d\u6b21\u4f20\u9012\u7ed9execute\u6267\u884c]\n    var tasks []timingTask\n\n    for e := l.Front(); e != nil; {\n        task := e.Value.(*timingEntry)\n    // \u6807\u8bb0\u5220\u9664\uff0c\u5728 scan \u4e2d\u505a\u771f\u6b63\u7684\u5220\u9664 \u300c\u5220\u9664map\u7684data\u300d\n        if task.removed {\n            next := e.Next()\n            l.Remove(e)\n            tw.timers.Del(task.key)\n            e = next\n            continue\n        } else if task.circle > 0 {\n            // \u5f53\u524d\u6267\u884c\u70b9\u5df2\u7ecf\u8fc7\u671f\uff0c\u4f46\u662f\u540c\u65f6\u4e0d\u5728\u7b2c\u4e00\u5c42\uff0c\u6240\u4ee5\u5f53\u524d\u5c42\u5373\u7136\u5df2\u7ecf\u5b8c\u6210\u4e86\uff0c\u5c31\u4f1a\u964d\u5230\u4e0b\u4e00\u5c42\n      // \u4f46\u662f\u5e76\u6ca1\u6709\u4fee\u6539 pos\n            task.circle--\n            e = e.Next()\n            continue\n        } else if task.diff > 0 {\n            // \u56e0\u4e3a\u4e4b\u524d\u5df2\u7ecf\u6807\u6ce8\u4e86diff\uff0c\u9700\u8981\u518d\u8fdb\u5165\u961f\u5217\n            next := e.Next()\n            l.Remove(e)\n            pos := (tw.tickedPos + task.diff) % tw.numSlots\n            tw.slots[pos].PushBack(task)\n            tw.setTimerPosition(pos, task)\n            task.diff = 0\n            e = next\n            continue\n        }\n        // \u4ee5\u4e0a\u7684\u60c5\u51b5\u90fd\u662f\u4e0d\u80fd\u6267\u884c\u7684\u60c5\u51b5\uff0c\u80fd\u591f\u6267\u884c\u7684\u4f1a\u88ab\u52a0\u5165tasks\u4e2d\n        tasks = append(tasks, timingTask{\n            key:   task.key,\n            value: task.value,\n        })\n        next := e.Next()\n        l.Remove(e)\n        tw.timers.Del(task.key)\n        e = next\n    }\n    // for range tasks\uff0c\u7136\u540e\u628a\u6bcf\u4e2a task->execute \u6267\u884c\u5373\u53ef\n    tw.runTasks(tasks)\n}\n")),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u5206\u652f\u60c5\u51b5\u5728\u6ce8\u91ca\u4e2d\u8bf4\u660e\u4e86\uff0c\u5728\u770b\u7684\u65f6\u5019\u53ef\u4ee5\u548c\u524d\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"moveTask()")," \u7ed3\u5408\u8d77\u6765\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"circle")," \u4e0b\u964d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"diff")," \u7684\u8ba1\u7b97\u662f\u5173\u8054\u4e24\u4e2a\u51fd\u6570\u7684\u91cd\u70b9\u3002"),(0,l.kt)("p",null,"\u81f3\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"diff")," \u8ba1\u7b97\u5c31\u6d89\u53ca\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"pos, circle")," \u7684\u8ba1\u7b97\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// interval: 4min, d: 60min, numSlots: 16, tickedPos = 15\n// step = 15, pos = 14, circle = 0\nfunc (tw *TimingWheel) getPositionAndCircle(d time.Duration) (pos int, circle int) {\n    steps := int(d / tw.interval)\n    pos = (tw.tickedPos + steps) % tw.numSlots\n    circle = (steps - 1) / tw.numSlots\n    return\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u8fc7\u7a0b\u53ef\u4ee5\u7b80\u5316\u6210\u4e0b\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"steps = d / interval\npos = step % numSlots - 1\ncircle = (step - 1) / numSlots\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"timingWheel")," \u9760\u5b9a\u65f6\u5668\u63a8\u52a8\uff0c\u65f6\u95f4\u524d\u8fdb\u7684\u540c\u65f6\u4f1a\u53d6\u51fa",(0,l.kt)("strong",{parentName:"p"},"\u5f53\u524d\u65f6\u95f4\u683c"),"\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"\u300c\u53cc\u5411\u94fe\u8868\u300d\u7684task\uff0c\u4f20\u9012\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," \u4e2d\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u800c\u65f6\u95f4\u5206\u9694\u4e0a\uff0c\u65f6\u95f4\u8f6e\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"circle")," \u5206\u5c42\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4e0d\u65ad\u590d\u7528\u539f\u6709\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"numSlots")," \uff0c\u56e0\u4e3a\u5b9a\u65f6\u5668\u5728\u4e0d\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"loop"),"\uff0c\u800c\u6267\u884c\u53ef\u4ee5\u628a\u4e0a\u5c42\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"slot")," \u4e0b\u964d\u5230\u4e0b\u5c42\uff0c\u5728\u4e0d\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"loop")," \u4e2d\u5c31\u53ef\u4ee5\u6267\u884c\u5230\u4e0a\u5c42\u7684task\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d\u8fd8\u6709\u5f88\u591a\u5b9e\u7528\u7684\u7ec4\u4ef6\u5de5\u5177\uff0c\u7528\u597d\u5de5\u5177\u5bf9\u4e8e\u63d0\u5347\u670d\u52a1\u6027\u80fd\u548c\u5f00\u53d1\u6548\u7387\u90fd\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u5e0c\u671b\u672c\u7bc7\u6587\u7ae0\u80fd\u7ed9\u5927\u5bb6\u5e26\u6765\u4e00\u4e9b\u6536\u83b7\u3002"))}k.isMDXComponent=!0},6474:function(e,n,t){n.Z=t.p+"assets/images/3bbddc1ebb79455da91dfcf3da6bc72f_tplv-k3u1fbpfcp-zoom-1.image-8a075627a6238a0be908a37de1e37ef0.png"},800:function(e,n,t){n.Z=t.p+"assets/images/76108cc071154e2faa66eada81857fb0_tplv-k3u1fbpfcp-zoom-1.image-22b9f74f02d8998fe526f7197ba127bc.png"}}]);