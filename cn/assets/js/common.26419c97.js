(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8592],{895:function(e,t,r){"use strict";r.d(t,{H6:function(){return _},Hk:function(){return u},Iz:function(){return g},_k:function(){return c},dK:function(){return i},qo:function(){return m},rx:function(){return s},vc:function(){return l.a}});var n=r(1336),a=r.n(n),o=r(813),l=r.n(o);r(892)(a()),r(4212).w(a()),r(4182)(a());var i=["en","zh"],c=!1,s="f88fdf02",m=8,u=50,_=!1,g={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},9685:function(e){e.exports={githubOrgUrl:"https://github.com/zeromicro",domain:"doc.go-zero.dev",baseUrl:"/",organizationName:"anqiansong",projectName:"website",discord:"discord",getImageUrl:function(e){switch(e){case"\u5fae\u4fe1\u7fa4":return"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/wechat.jpg";case"discord":return"/img/footer/discord.png";default:return""}}}},769:function(e,t,r){var n=r(9685);e.exports={copyright:"Copyright \xa9 "+(new Date).getFullYear()+" zeromicro",demoUrl:"/docs/introduction",title:"go-zero",description:"go-zero \u662f\u4e00\u4e2a\u96c6\u6210\u4e86\u5404\u79cd\u5de5\u7a0b\u5b9e\u8df5\u7684 web \u548c rpc \u6846\u67b6\u3002\u901a\u8fc7\u5f39\u6027\u8bbe\u8ba1\u4fdd\u969c\u4e86\u5927\u5e76\u53d1\u670d\u52a1\u7aef\u7684\u7a33\u5b9a\u6027\uff0c\u7ecf\u53d7\u4e86\u5145\u5206\u7684\u5b9e\u6218\u68c0\u9a8c\u3002",oldDocUrl:"https://go-zero.dev/cn",githubOrgUrl:n.githubOrgUrl,githubUrl:n.githubOrgUrl+"/go-zero",zeroApiUrl:n.githubOrgUrl+"/zero-api",goQueueUrl:n.githubOrgUrl+"/go-queue",awesomeZeroUrl:n.githubOrgUrl+"/awesome-zero",zeroExamplesUrl:n.githubOrgUrl+"/zero-examples",oneLiner:"",discordUrl:"https://discord.gg/4JQvC5A4Fe",videosUrl:"https://space.bilibili.com/389552232/channel/seriesdetail?sid=2122723",cncfUrl:"https://landscape.cncf.io/?selected=go-zero",roadMapUrl:"https://github.com/zeromicro/go-zero/blob/master/ROADMAP.md"}},5789:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7462),a=r(6010),o=r(7294),l="button_f7Ff",i="button--plain_WPGr",c="button--primary_--SO",s="button--icon_q89D",m="button--secondary_x3vq",u="button--tertiary_vtfp",_="button--small_1ubn",g="button--xsmall_fwzy",f="button--xxsmall_FHEV",d="button--uppercase_ESEN",h=function(e){var t,r=e.children,h=e.className,b=e.href,p=e.icon,E=e.newTab,v=e.onClick,N=e.size,k=e.to,w=e.type,Z=e.uppercase,z=e.variant,y=(0,a.Z)(h,l,((t={})[s]=null!=p,t[c]="primary"===z,t[m]="secondary"===z,t[_]="small"===N,t[u]="tertiary"===z,t[i]="plain"===z,t[d]=Z,t[g]="xsmall"===N,t[f]="xxsmall"===N,t));return null!=b?o.createElement("a",(0,n.Z)({className:y,href:b,onClick:v},E?{rel:"noopener noreferrer",target:"_blank"}:{}),p,r):null!=k?o.createElement("a",{className:y,href:k,onClick:v},p,r):o.createElement("button",{className:y,onClick:v,type:null!=w?w:"button"},p,r)};h.defaultProps={newTab:!0,size:"normal",uppercase:!0,variant:"primary"};var b=h},552:function(e,t,r){"use strict";r.d(t,{Z:function(){return ie}});var n=r(6010),a=r(7294),o=r(9105),l=r(2263),i=r(4996),c=r(7462),s=r(3366),m=r(769),u=r.n(m),_=r(9685),g=r(5789),f={altFooter:!1,isBlogPost:!1},d=(0,a.createContext)(f),h=function(e){var t=e.children,r=e.value;return a.createElement(d.Provider,{value:null!=r?r:f},t)},b=function(){return(0,a.useContext)(d)},p=r(9178),E="footer_rm3y",v="footer--alt_BPBa",N="footer__inner_OWoZ",k="footer__column_+a5z",w="footer__column--left_4bpB",Z="footer__column--right_FGdI",z="footer__logo_ayM4",y="footer__tagline_b1u+",C="footer__github_okz3",U="footer__links_5pu0",x="footer__title_ulcL",I="footer__link_l-+N",O="footer__img_4fbU",D="footer__bottom_rXtt",S="footer__items_3d9P",F="footer__item_K578",T="footer__copyright_9e29",q=r(4973),B=["to","href","label"],L=function(e){var t=e.to,r=e.href,o=e.label,l=(0,s.Z)(e,B),m=(0,i.Z)(null!=r?r:"",{forcePrependBaseUrl:void 0}),u=(0,i.Z)(null!=t?t:""),g="",f="";if("image//:"===r){if(""===(g=(0,_.getImageUrl)(o)))return a.createElement("span",null)}else if("image//:"===t&&""===(f=(0,_.getImageUrl)(o)))return a.createElement("span",null);return"-"===o?a.createElement("span",null):""!==f?a.createElement("img",{alt:o,width:80,src:f,className:(0,n.Z)(O)}):""!==g?a.createElement("img",{alt:o,width:80,src:g,className:(0,n.Z)(O)}):a.createElement("a",(0,c.Z)({className:I},null!=r?{href:m,rel:"noopener noreferrer",target:"_blank"}:{href:u},l),o)},P=function(){var e,t=(0,l.default)().siteConfig,r=b(),o=t.themeConfig.footer.links;return a.createElement("footer",{className:(0,n.Z)(E,p.Z.section,(e={},e[v]=r.altFooter,e))},a.createElement("div",{className:(0,n.Z)(N,p.Z["section--inner"])},a.createElement("div",{className:(0,n.Z)(k,w)},a.createElement("div",null,a.createElement("img",{alt:"go-zero logo",className:z,height:27,src:(0,i.Z)("/img/footer/go-zero.svg"),title:"go-zero",width:108}),a.createElement("img",{alt:"stars",height:27,src:"https://img.shields.io/github/stars/zeromicro/go-zero?style=social",className:z}),a.createElement("img",{alt:"forks",height:27,src:"https://img.shields.io/github/forks/zeromicro/go-zero?style=social",className:z})),a.createElement("p",{className:y},a.createElement(q.Z,null,"go-zero is a web and rpc framework that with lots of engineering practices builtin")),a.createElement(g.Z,{className:C,href:u().githubUrl,icon:a.createElement("img",{alt:"GitHub logo",height:22,src:(0,i.Z)("/img/github.svg"),title:"GitHub",width:22}),size:"xsmall",uppercase:!1,variant:"secondary"},"Star us on GitHub")),a.createElement("div",{className:(0,n.Z)(k,Z)},o.map((function(e,t){var r;return a.createElement("div",{key:t,className:U},a.createElement("ul",{className:S},null!=e.title&&a.createElement("li",{className:x},e.title),null==(r=e.items)?void 0:r.map((function(e){var t;return a.createElement("li",{className:F,key:null!=(t=e.href)?t:e.to},a.createElement(L,e))}))))})))),a.createElement("div",{className:D},a.createElement("p",{className:T},u().copyright,a.createElement("ul",null,a.createElement("li",{className:F},a.createElement("a",{className:I,href:"https://github.com/zeromicro/go-zero/blob/master/LICENSE"},"License"))))))},M=r(7557),j=r(9189),A=r(1839),G=r(3783),H="star_fork_layout_ROo5",W="star__fork_dBtt",K="brand_AtiA",Q="brand_logo_MqNk",R="brand_name_O39n",J="inner_Y8Z6",V="navbar_wBc8",X="themeToggleInSidebar_qGRI",Y="themeToggleInHeading_b3Mq",$=r(5602),ee=r(6700),te=r(5350),re="right";var ne=function(){var e=(0,l.default)().siteConfig.themeConfig.navbar.items,t=(0,a.useState)(!1),r=t[0],o=t[1];(0,A.Z)(r);var s,m,u,_,g,f=(0,a.useCallback)((function(){o(!0)}),[]),d=(0,a.useCallback)((function(){o(!1)}),[]),h=(0,G.Z)(),b=(s=(0,ee.LU)().colorMode.disableSwitch,m=(0,te.Z)(),u=m.isDarkTheme,_=m.setLightTheme,g=m.setDarkTheme,{isDarkTheme:u,toggle:(0,a.useCallback)((function(e){return e.target.checked?g():_()}),[_,g]),disabled:s});(0,a.useEffect)((function(){h===G.D.desktop&&o(!1)}),[h]);var p=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:re)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:re)}))}}(e),E=p.leftItems,v=p.rightItems;return a.createElement("nav",{className:(0,n.Z)("navbar",V,"navbar--light","navbar--fixed-top",{"navbar-sidebar--show":r})},a.createElement("div",{className:(0,n.Z)("navbar__inner",J)},a.createElement("div",{className:"navbar__items"},a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:f,onKeyDown:f},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.createElement("a",{className:K,href:(0,i.Z)("/")},a.createElement("img",{alt:"logo",height:30,src:(0,i.Z)("img/navbar/logo.svg"),className:(0,n.Z)(Q)}),a.createElement("a",{className:(0,n.Z)("navbar__brand",R)},"go-zero")),E.map((function(e,t){return a.createElement($.Z,(0,c.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},v.map((function(e,t){return a.createElement($.Z,(0,c.Z)({},e,{key:t}))})),a.createElement("a",{href:"https://github.com/zeromicro/go-zero",className:"navbar__items navbar__items--right"},a.createElement("img",{alt:"forks",height:30,src:(0,i.Z)("img/navbar/github.svg"),className:W}),a.createElement("div",{className:H},a.createElement("img",{alt:"stars",height:20,src:"https://img.shields.io/github/stars/zeromicro/go-zero?style=social",className:W}),a.createElement("img",{alt:"forks",height:20,src:"https://img.shields.io/github/forks/zeromicro/go-zero?style=social",className:W}))),!b.disabled&&a.createElement(j.Z,{className:Y,checked:b.isDarkTheme,onChange:b.toggle}))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:d}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement("a",{className:(0,n.Z)("navbar__brand",K),href:(0,i.Z)("/"),onClick:d},"go-zero"),!b.disabled&&a.createElement(j.Z,{className:X,checked:b.isDarkTheme,onChange:b.toggle})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},e.map((function(e,t){return a.createElement($.Z,(0,c.Z)({mobile:!0},e,"search"!==e.type&&{onClick:d},{key:t}))})))))))},ae="wrapper_DIJ0",oe="flex_Tu1-",le=function(e){var t,r=e.altFooter,c=e.canonical,s=e.children,m=e.description,u=e.flex,_=e.image,g=e.keywords,f=e.noFooter,d=e.permalink,b=e.title,p=e.replaceTitle,E=void 0!==p&&p,v=e.wrapperClassName,N=(0,l.default)().siteConfig,k=N.title,w=N.themeConfig.image,Z=N.url,z=E?b:null!=b?b+" | "+k:k,y=null!=_?_:w,C=(0,i.Z)(y,{absolute:!0}),U=null==(null==m?void 0:m.match(/^Blog/g))&&"blog-wrapper"===v;return a.createElement(h,{value:{altFooter:r,isBlogPost:U}},a.createElement(M.Z,null,a.createElement(o.Z,null,a.createElement("title",null,z),null!=d&&a.createElement("link",{rel:"canonical",href:""+Z+d+"/"}),null==d&&null!=c&&a.createElement("link",{rel:"canonical",href:""+Z+c+"/"}),a.createElement("meta",{property:"og:image",content:C}),null!=d&&a.createElement("meta",{property:"og:url",content:""+Z+d+"/"}),null==d&&null!=c&&a.createElement("meta",{property:"og:url",content:""+Z+c+"/"}),a.createElement("meta",{property:"og:title",content:z}),a.createElement("meta",{name:"twitter:image",content:C}),null!=m&&a.createElement("meta",{name:"description",content:m}),null!=m&&a.createElement("meta",{name:"twitter:description",content:m}),null!=m&&a.createElement("meta",{property:"og:description",content:m}),a.createElement("meta",{name:"twitter:title",content:z}),a.createElement("meta",{name:"twitter:image:alt",content:'Image for "'+String(z)+'"'}),null!=g&&g.length>0&&a.createElement("meta",{name:"keywords",content:g instanceof Array?g.join(","):g})),a.createElement(ne,null),a.createElement("div",{className:(0,n.Z)(ae,v,(t={},t[oe]=u,t))},s),!0!==f&&a.createElement(P,null)))};le.defaultProps={altFooter:!1,flex:!1};var ie=le},9096:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7294),a=r(552),o={wrapper:"wrapper_gpSL",message:"message_Rqvl"},l=function(){return n.createElement(a.Z,{flex:!0,title:"Page not found"},n.createElement("div",{className:o.wrapper},n.createElement("h1",{className:o.title},"404"),n.createElement("p",{className:o.message},"We could not find what you were looking for.")))}},6439:function(e,t,r){"use strict";t.Z=r.p+"assets/files/book-3d0b9e679f9e502cb07685b701c450cf.zip"},9178:function(e,t){"use strict";t.Z={section:"section_bQ6r","section--inner":"section--inner_6-fB","section--accent":"section--accent_GhZ8","section--flex-wrap":"section--flex-wrap_05Su","section--slim":"section--slim_hu0z","section--slim--accent":"section--slim--accent_+OP3","section--center":"section--center_0sLU","section--column":"section--column_ZlID","section--odd":"section--odd_8zop","section--showcase":"section--showcase_TV-2",section__title:"section__title_W17F",section__title__em:"section__title__em_wlLN","section__title--accent":"section__title--accent_Fux3","section__title--wide":"section__title--wide_i09D",section__subtitle:"section__subtitle_V-qQ","section__subtitle--narrow":"section__subtitle--narrow_HAbD","section__subtitle--accent":"section__subtitle--accent_6eNO",section__header:"section__header_IOqa",section__header__left:"section__header__left_ykLe",section__illustration:"section__illustration_7Yaq",section__footer:"section__footer_4BzJ","section__footer--console":"section__footer--console_ppbG","section__footer--feature-cards":"section__footer--feature-cards_pv8X","section__footer--feature-tabs":"section__footer--feature-tabs_54g6","section__title--jumbotron":"section__title--jumbotron_jmXI","section__subtitle--jumbotron":"section__subtitle--jumbotron_KstL"}},2748:function(e,t,r){"use strict";t.Z=r.p+"assets/images/redis-cache-05-f1847d60569f085c07e97d9d3e7482e4.png"}}]);