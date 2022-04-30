"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4274],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(k,l(l({ref:t},p),{},{components:n})):i.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8937:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],r={},s={unversionedId:"blog/principle/timing-wheel",id:"blog/principle/timing-wheel",isDocsHomePage:!1,title:"TimingWheel",description:"This article introduces the delayed operation in go-zero. Delayed operation, two options can be used:",source:"@site/docs/blog/principle/timing-wheel.md",sourceDirName:"blog/principle",slug:"/blog/principle/timing-wheel",permalink:"/docs/blog/principle/timing-wheel",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/principle/timing-wheel.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"blog",previous:{title:"SharedCalls",permalink:"/docs/blog/concurrency/sharedcalls"},next:{title:"Rapid development of microservices",permalink:"/docs/blog/showcase/shorturl"}},c=[{value:"timingWheel in cache",id:"timingwheel-in-cache",children:[{value:"Initialization",id:"initialization",children:[]},{value:"Task Operation",id:"task-operation",children:[]},{value:"Execute",id:"execute",children:[]}]},{value:"Summary",id:"summary",children:[]}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article introduces the ",(0,o.kt)("strong",{parentName:"p"},"delayed operation")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero"),". ",(0,o.kt)("strong",{parentName:"p"},"Delayed operation"),", two options can be used:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Timer"),": The timer maintains a priority queue, executes it at the time, and then stores the tasks that need to be executed in the map"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"timingWheel")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"collection")," maintains an array for storing task groups, and each slot maintains a doubly linked list of tasks. When the execution starts, the timer executes the tasks in a slot every specified time.")),(0,o.kt)("p",null,"Scheme 2 reduces the maintenance task from the ",(0,o.kt)("inlineCode",{parentName:"p"},"priority queue O(nlog(n))")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"doubly linked list O(1)"),", and the execution of the task only needs to poll the tasks ",(0,o.kt)("inlineCode",{parentName:"p"},"O(N)")," at a time point. Priority queue, put and delete elements ",(0,o.kt)("inlineCode",{parentName:"p"},"O(nlog(n))"),"."),(0,o.kt)("h2",{id:"timingwheel-in-cache"},"timingWheel in cache"),(0,o.kt)("p",null,"First, let's first talk about the use of TimingWheel in the cache of collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"timingWheel, err := NewTimingWheel(time.Second, slots, func(k, v interface{}) {\n  key, ok := k.(string)\n  if !ok {\n    return\n  }\n  cache.Del(key)\n})\nif err != nil {\n  return nil, err\n}\n\ncache.timingWheel = timingWheel\n")),(0,o.kt)("p",null,"This is the initialization of ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," and the initialization of ",(0,o.kt)("inlineCode",{parentName:"p"},"timingWheel")," at the same time for key expiration processing. The parameters in turn represent:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interval"),": Time division scale"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numSlots"),": time slots"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"execute"),": execute a function at a point in time")),(0,o.kt)("p",null,"The function executed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," is to ",(0,o.kt)("strong",{parentName:"p"},"delete the expired key"),", and this expiration is controlled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"timingWheel")," to advance the time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next, let's learn about it through the use of timingWheel by cache. ")),(0,o.kt)("h3",{id:"initialization"},"Initialization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func newTimingWheelWithClock(interval time.Duration, numSlots int, execute Execute, ticker timex.Ticker) (\n    *TimingWheel, error) {\n    tw := &TimingWheel{\n        interval:      interval,                     // Single time grid time interval\n        ticker:        ticker,                       // Timer, do time push, advance by interval\n        slots:         make([]*list.List, numSlots), // Time wheel\n        timers:        NewSafeMap(),                 // Store the map of task{key, value} [parameters needed to execute execute]\n        tickedPos:     numSlots - 1,                 // at previous virtual circle\n        execute:       execute,                      // Execution function\n        numSlots:      numSlots,                     // Initialize slots num\n        setChannel:    make(chan timingEntry),       // The following channels are used for task delivery\n        moveChannel:   make(chan baseEntry),\n        removeChannel: make(chan interface{}),\n        drainChannel:  make(chan func(key, value interface{})),\n        stopChannel:   make(chan lang.PlaceholderType),\n    }\n    // Prepare all the lists stored in the slot\n    tw.initSlots()\n    // Open asynchronous coroutine, use channel for task communication and delivery\n    go tw.run()\n\n    return tw, nil\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"76108cc071154e2faa66eada81857fb0~tplv-k3u1fbpfcp-zoom-1.image.png",src:n(4831).Z})),(0,o.kt)("p",null,"The above is a more intuitive display of the ",(0,o.kt)("strong",{parentName:"p"},'"time wheel"')," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"timingWheel"),", and the details of the advancement will be explained later around this picture."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"go tw.run()")," opens a coroutine for time promotion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (tw *TimingWheel) run() {\n    for {\n        select {\n      // Timer do time push -> scanAndRunTasks()\n        case <-tw.ticker.Chan():\n            tw.onTick()\n      // add task will enter task into setChannel\n        case task := <-tw.setChannel:\n            tw.setTask(&task)\n        ...\n        }\n    }\n}\n")),(0,o.kt)("p",null,"It can be seen that the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," execution is started at the time of initialization, and it is rotated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"internal")," time period, and then the bottom layer keeps getting the tasks from the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," and handing them over to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," for execution."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3bbddc1ebb79455da91dfcf3da6bc72f~tplv-k3u1fbpfcp-zoom-1.image.png",src:n(7587).Z})),(0,o.kt)("h3",{id:"task-operation"},"Task Operation"),(0,o.kt)("p",null,"The next step is to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache key"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (c *Cache) Set(key string, value interface{}) {\n    c.lock.Lock()\n    _, ok := c.data[key]\n    c.data[key] = value\n    c.lruCache.add(key)\n    c.lock.Unlock()\n\n    expiry := c.unstableExpiry.AroundDuration(c.expire)\n    if ok {\n        c.timingWheel.MoveTimer(key, expiry)\n    } else {\n        c.timingWheel.SetTimer(key, value, expiry)\n    }\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First look at whether this key exists in the ",(0,o.kt)("inlineCode",{parentName:"li"},"data map")),(0,o.kt)("li",{parentName:"ol"},"If it exists, update ",(0,o.kt)("inlineCode",{parentName:"li"},"expire")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MoveTimer()")),(0,o.kt)("li",{parentName:"ol"},"Set the key for the first time -> ",(0,o.kt)("inlineCode",{parentName:"li"},"SetTimer()"))),(0,o.kt)("p",null,"So the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"timingWheel")," is clear. Developers can ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," according to their needs."),(0,o.kt)("p",null,"At the same time, when we follow the source code, we will find that: ",(0,o.kt)("inlineCode",{parentName:"p"},"SetTimer() MoveTimer()")," all transports tasks to channel, and the coroutine opened in ",(0,o.kt)("inlineCode",{parentName:"p"},"run()")," continuously takes out the task operations of ",(0,o.kt)("inlineCode",{parentName:"p"},"channel"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"SetTimer() -> setTask()"),"\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"not exist task\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"getPostion -> pushBack to list -> setPosition")),(0,o.kt)("li",{parentName:"ul"},"exist task\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"get from timers -> moveTask()"))),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"MoveTimer() -> moveTask()"))),(0,o.kt)("p",null,"From the above call chain, there is a function that will be called: ",(0,o.kt)("inlineCode",{parentName:"p"},"moveTask()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (tw *TimingWheel) moveTask(task baseEntry) {\n    // timers: Map => Get [positionEntry\u300cpos, task\u300d] by key\n    val, ok := tw.timers.Get(task.key)\n    if !ok {\n        return\n    }\n\n    timer := val.(*positionEntry)\n  // {delay <interval} => The delay time is less than a time grid interval, and there is no smaller scale, indicating that the task should be executed immediately\n    if task.delay < tw.interval {\n        threading.GoSafe(func() {\n            tw.execute(timer.item.key, timer.item.value)\n        })\n        return\n    }\n    // If> interval, the new pos, circle in the time wheel is calculated by the delay time delay\n    pos, circle := tw.getPositionAndCircle(task.delay)\n    if pos >= timer.pos {\n        timer.item.circle = circle\n    // Move offset before and after recording. To re-enter the team for later process\n        timer.item.diff = pos - timer.pos\n    } else if circle > 0 {\n        // Move to the next layer and convert circle to part of diff\n        circle--\n        timer.item.circle = circle\n        // Because it is an array, add numSlots [that is equivalent to going to the next level]\n        timer.item.diff = tw.numSlots + pos - timer.pos\n    } else {\n        // If the offset is advanced, the task is still in the first layer at this time\n        // Mark to delete the old task, and re-enter the team, waiting to be executed\n        timer.item.removed = true\n        newItem := &timingEntry{\n            baseEntry: task,\n            value:     timer.item.value,\n        }\n        tw.slots[pos].PushBack(newItem)\n        tw.setTimerPosition(pos, newItem)\n    }\n}\n")),(0,o.kt)("p",null,"The above process has the following situations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay <internal"),": Because <single time precision, it means that this task has expired and needs to be executed immediately"),(0,o.kt)("li",{parentName:"ul"},"For changed ",(0,o.kt)("inlineCode",{parentName:"li"},"delay"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new >= old"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"<newPos, newCircle, diff>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newCircle> 0"),": Calculate diff and convert circle to the next layer, so diff + numslots"),(0,o.kt)("li",{parentName:"ul"},"If only the delay time is shortened, delete the old task mark, re-add it to the list, and wait for the next loop to be executed")))),(0,o.kt)("h3",{id:"execute"},"Execute"),(0,o.kt)("p",null,"In the previous initialization, the timer in ",(0,o.kt)("inlineCode",{parentName:"p"},"run()")," kept advancing, and the process of advancing was mainly to pass the tasks in the list to the executed ",(0,o.kt)("inlineCode",{parentName:"p"},"execute func"),". Let's start with the execution of the timer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Timer "It will be executed every internal"\nfunc (tw *TimingWheel) onTick() {\n  // Update the current execution tick position every time it is executed\n    tw.tickedPos = (tw.tickedPos + 1) % tw.numSlots\n  // Get the doubly linked list of stored tasks in the tick position at this time\n    l := tw.slots[tw.tickedPos]\n    tw.scanAndRunTasks(l)\n}\n')),(0,o.kt)("p",null,"Next is how to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"execute"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (tw *TimingWheel) scanAndRunTasks(l *list.List) {\n    // Store the task{key, value} that needs to be executed at present [parameters required by execute, which are passed to execute in turn]\n    var tasks []timingTask\n\n    for e := l.Front(); e != nil; {\n        task := e.Value.(*timingEntry)\n    // Mark the deletion, do the real deletion in scan "Delete the map data"\n        if task.removed {\n            next := e.Next()\n            l.Remove(e)\n            tw.timers.Del(task.key)\n            e = next\n            continue\n        } else if task.circle > 0 {\n            // The current execution point has expired, but it is not at the first level at the same time, so now that the current level has been completed, it will drop to the next level\n            // But did not modify pos\n            task.circle--\n            e = e.Next()\n            continue\n        } else if task.diff > 0 {\n            // Because the diff has been marked before, you need to enter the queue again\n            next := e.Next()\n            l.Remove(e)\n            pos := (tw.tickedPos + task.diff) % tw.numSlots\n            tw.slots[pos].PushBack(task)\n            tw.setTimerPosition(pos, task)\n            task.diff = 0\n            e = next\n            continue\n        }\n        // The above cases are all cases that cannot be executed, and those that can be executed will be added to tasks\n        tasks = append(tasks, timingTask{\n            key:   task.key,\n            value: task.value,\n        })\n        next := e.Next()\n        l.Remove(e)\n        tw.timers.Del(task.key)\n        e = next\n    }\n    // for range tasks, and then execute each task->execute\n    tw.runTasks(tasks)\n}\n')),(0,o.kt)("p",null,"The specific branching situation is explained in the comments. When you look at it, it can be combined with the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"moveTask()"),", where the ",(0,o.kt)("inlineCode",{parentName:"p"},"circle")," drops, and the calculation of ",(0,o.kt)("inlineCode",{parentName:"p"},"diff")," is the key to linking the two functions."),(0,o.kt)("p",null,"As for the calculation of ",(0,o.kt)("inlineCode",{parentName:"p"},"diff"),", the calculation of ",(0,o.kt)("inlineCode",{parentName:"p"},"pos, circle")," is involved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// interval: 4min, d: 60min, numSlots: 16, tickedPos = 15\n// step = 15, pos = 14, circle = 0\nfunc (tw *TimingWheel) getPositionAndCircle(d time.Duration) (pos int, circle int) {\n    steps := int(d / tw.interval)\n    pos = (tw.tickedPos + steps) % tw.numSlots\n    circle = (steps - 1) / tw.numSlots\n    return\n}\n")),(0,o.kt)("p",null,"The above process can be simplified to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"steps = d / interval\npos = step % numSlots - 1\ncircle = (step - 1) / numSlots\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"timingWheel")," is driven by the timer. As the time advances, the tasks of the ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),' "doubly linked list" in the ',(0,o.kt)("strong",{parentName:"p"},"current time grid")," will be taken out and passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," for execution."),(0,o.kt)("p",null,"In terms of time separation, the time wheel has ",(0,o.kt)("inlineCode",{parentName:"p"},"circle")," layers, so that the original ",(0,o.kt)("inlineCode",{parentName:"p"},"numSlots")," can be reused continuously, because the timer is constantly ",(0,o.kt)("inlineCode",{parentName:"p"},"loop"),", and execution can drop the upper layer ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," to the lower layer. You can execute the task up to the upper level continuously in the ",(0,o.kt)("inlineCode",{parentName:"p"},"loop"),"."),(0,o.kt)("p",null,"There are many useful component tools in ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero"),". Good use of tools is of great help to improve service performance and development efficiency. I hope this article can bring you some gains."))}m.isMDXComponent=!0},7587:function(e,t,n){t.Z=n.p+"assets/images/3bbddc1ebb79455da91dfcf3da6bc72f_tplv-k3u1fbpfcp-zoom-1.image-8a075627a6238a0be908a37de1e37ef0.png"},4831:function(e,t,n){t.Z=n.p+"assets/images/76108cc071154e2faa66eada81857fb0_tplv-k3u1fbpfcp-zoom-1.image-22b9f74f02d8998fe526f7197ba127bc.png"}}]);