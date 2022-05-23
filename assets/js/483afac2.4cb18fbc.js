"use strict";(self.webpackChunkopinions=self.webpackChunkopinions||[]).push([[62],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||a;return n?l.createElement(d,i(i({ref:t},c),{},{components:n})):l.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],o={slug:"keep-your-application-code-simple",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b",authors:["michiharu"],tags:["dev","simple","kiss"]},p=void 0,u={permalink:"/opinions/blog/keep-your-application-code-simple",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-23-keep-your-application-code-simple/index.md",source:"@site/blog/2022-05-23-keep-your-application-code-simple/index.md",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b",description:"\u30b7\u30f3\u30d7\u30eb\u3055\u306b\u3064\u3044\u3066\u8a9e\u308b\u3068\u304d\u306b\u50d5\u306e\u8a9e\u308b\u3053\u3068\u3001\u3068\u3044\u3046\u30c6\u30fc\u30de\u3067\u3044\u304f\u3064\u304b\u306e\u8a18\u4e8b\u3092\u66f8\u304d\u307e\u3057\u305f\u3002",date:"2022-05-23T00:00:00.000Z",formattedDate:"May 23, 2022",tags:[{label:"dev",permalink:"/opinions/blog/tags/dev"},{label:"simple",permalink:"/opinions/blog/tags/simple"},{label:"kiss",permalink:"/opinions/blog/tags/kiss"}],readingTime:7.38,truncated:!1,authors:[{name:"Fulkagawa Michiharu",title:"Web developer",url:"https://github.com/michiharu",imageURL:"https://github.com/michiharu.png",key:"michiharu"}],frontMatter:{slug:"keep-your-application-code-simple",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b",authors:["michiharu"],tags:["dev","simple","kiss"]},nextItem:{title:"\u72b6\u614b > \u7d50\u5408 > \u8907\u96d1\u6027 > \u30b3\u30fc\u30c9\u91cf",permalink:"/opinions/blog/stateless-is-the-most-important"}},c={authorsImageUrls:[void 0]},s=[{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b",level:2},{value:"\u30ec\u30a4\u30e4\u30fc\u306e\u7d71\u5408\u3067\u30b3\u30fc\u30c9\u3092\u524a\u308b",id:"\u30ec\u30a4\u30e4\u30fc\u306e\u7d71\u5408\u3067\u30b3\u30fc\u30c9\u3092\u524a\u308b",level:3},{value:"Next, Nuxt, Remix",id:"next-nuxt-remix",level:4},{value:"Blitz.js = Next + Prisma",id:"blitzjs--next--prisma",level:4},{value:"GraphQL(Apollo, Hasura, AppSync)",id:"graphqlapollo-hasura-appsync",level:4},{value:"Rails\u306e\u601d\u60f3\u306b\u5b66\u3076\u30b7\u30f3\u30d7\u30eb",id:"rails\u306e\u601d\u60f3\u306b\u5b66\u3076\u30b7\u30f3\u30d7\u30eb",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],m={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30b7\u30f3\u30d7\u30eb\u3055\u306b\u3064\u3044\u3066\u8a9e\u308b\u3068\u304d\u306b\u50d5\u306e\u8a9e\u308b\u3053\u3068\u3001\u3068\u3044\u3046\u30c6\u30fc\u30de\u3067\u3044\u304f\u3064\u304b\u306e\u8a18\u4e8b\u3092\u66f8\u304d\u307e\u3057\u305f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UNIX\u54f2\u5b66\u306b\u5b66\u3076\u30b7\u30f3\u30d7\u30eb"),(0,a.kt)("li",{parentName:"ul"},"Less is More"),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u614b > \u7d50\u5408 > \u8907\u96d1\u6027 > \u30b3\u30fc\u30c9\u91cf"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b")),(0,a.kt)("li",{parentName:"ul"},"N\u5bfeN\u3088\u308a1\u5bfe1"),(0,a.kt)("li",{parentName:"ul"},"\u5171\u901a\u5316\u306e\u6761\u4ef6")),(0,a.kt)("p",null,"\u4eca\u56de\u306f4\u56de\u76ee\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u3046\u30e1\u30ea\u30c3\u30c8\u306b\u3064\u3044\u3066\u8003\u3048\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b"),(0,a.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u63a1\u7528\u306b\u306f2\u3064\u306e\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308b\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5bfe\u8c61\uff08\u30b3\u30fc\u30c9\u3001\u30c6\u30b9\u30c8\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\uff09\u306e\u524a\u6e1b"),(0,a.kt)("li",{parentName:"ul"},"\u3069\u3053\u306b\u4f55\u3092\u66f8\u304f\u3079\u304d\u304b\u3068\u3044\u3046\u898f\u7d04\u3092\u793a\u3057\u3066\u304f\u308c\u308b")),(0,a.kt)("p",null,"\u79c1\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u898b\u65b9\u3068\u3057\u3066\u306f\u300c\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3059\u308b\u300d\u3068\u3044\u3046\u3054\u304f\u5f53\u305f\u308a\u524d\u306e\u6a5f\u80fd\u306e\u5b9f\u73fe\u306b8~9\u5272\u7a0b\u5ea6\u306e\u30b3\u30fc\u30c9\u304c\u66f8\u304b\u308c\u3066\u304a\u308a\u3001\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u30ed\u30b8\u30c3\u30af\u306f2\u5272\u306b\u3082\u6e80\u305f\u306a\u3044\u3001\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u3057\u3066\u591a\u304f\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u304c\u3088\u308a\u30b9\u30c8\u30ec\u30b9\u306a\u304f\u5c11\u306a\u3044\u30b3\u30fc\u30c9\u3067\u305d\u308c\u3089\u306e\u30b3\u30fc\u30c9\u304c\u524a\u6e1b\u3067\u304d\u308b\u3088\u3046\u306b\u8a66\u884c\u932f\u8aa4\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u305f\u3063\u305f2\u5272\u306e\u30ed\u30b8\u30c3\u30af\u3082\u304d\u3061\u3093\u3068\u8a2d\u8a08\u3092\u6c7a\u3081\u3066\u66f8\u304b\u306a\u3044\u3068\u3069\u3093\u3069\u3093\u6563\u3089\u3070\u3063\u3066\u66f8\u304b\u308c\u3060\u3093\u3060\u3093\u3068\u82e6\u52b4\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306f\u300c\u305d\u306e\u30b3\u30fc\u30c9\u306f\u3053\u3053\u306b\u66f8\u3044\u3066\u304f\u3060\u3055\u3044\u306d\u300d\u3068\u3044\u3046\u898f\u7d04\u3092\u6301\u3063\u3066\u304a\u308a\u3001\n\u305d\u306e\u898f\u7d04\u306b\u7e1b\u3089\u308c\u306a\u304c\u3089\u958b\u767a\u3059\u308b\u3053\u3068\u3067\u300c\u3053\u306e\u624b\u306e\u554f\u984c\u306f\u3042\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u3044\u3066\u3042\u308b\u306f\u305a\u300d\u3068\u3044\u3046\u3053\u3068\u304c\u4e88\u60f3\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306e\u3067\n\u8aad\u307f\u3084\u3059\u3044\u30b3\u30fc\u30c9\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30ec\u30a4\u30e4\u30fc\u306e\u7d71\u5408\u3067\u30b3\u30fc\u30c9\u3092\u524a\u308b"},"\u30ec\u30a4\u30e4\u30fc\u306e\u7d71\u5408\u3067\u30b3\u30fc\u30c9\u3092\u524a\u308b"),(0,a.kt)("p",null,"\u3044\u308d\u3044\u308d\u306a\u30ec\u30a4\u30e4\u30fc\u306e\u767b\u5834\u3059\u308bAWS\u3092\u5229\u7528\u3057\u305fSPA\u69cb\u6210\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u307f\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8(React, Vue, Svelte)"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5c64"),(0,a.kt)("li",{parentName:"ul"},"DTO\u5c64"),(0,a.kt)("li",{parentName:"ul"},"DB(RDB, NoSQL)")),(0,a.kt)("p",null,"\u5e73\u51e1\u306a\u69cb\u6210\u3092\u610f\u8b58\u3057\u307e\u3057\u305f\u304c\u3001\n\u4ee5\u4e0b\u3067\u7d39\u4ecb\u3059\u308b\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u305f\u3061\u306f\u3053\u308c\u3089\u306e\u5c64\u3092\u7d71\u5408\u3057\u3066\u958b\u767a\u52b9\u7387\u3092\u4e0a\u3052\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h4",{id:"next-nuxt-remix"},"Next, Nuxt, Remix"),(0,a.kt)("p",null,"\u3053\u308c\u3089\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306f\u30d5\u30ed\u30f3\u30c8\u304b\u3089\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u3067\u3092\n\u3072\u3068\u3064\u306eReact(\u3042\u308b\u3044\u306fVue)\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u8a18\u8ff0\u51fa\u6765\u308b\u3088\u3046\u306b\u3057\u305f\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,a.kt)("p",null,"API\u3092\u8a2d\u8a08\u3057\u3066\u300c\u3053\u3063\u3061\u304b\u3089\u3053\u308c\u3092\u9001\u3063\u3066\u3001\u3053\u3063\u3061\u3067\u53d7\u3051\u53d6\u3063\u3066\u300d\u3068\u3044\u3046\u3053\u3068\u3092\u8003\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u3061\u306a\u307f\u306b\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3001SSR\u3068\u3044\u3046\u3068\u3061\u3087\u3063\u3068\u304b\u3063\u3053\u3044\u3044\u3067\u3059\u304c\u3001\u6614\u306eWEB\u30a2\u30d7\u30ea\u306e\u69cb\u6210\u306f\u5168\u90e8SSR\u3067\u3057\u305f\u3002\n\u305f\u3060\u3057\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5fd7\u5411\u3068\u3044\u3063\u305f\u8003\u3048\u65b9\u306b\u3088\u3063\u3066\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u8a18\u8ff0\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u304c\u6d17\u7df4\u3055\u308c\u307e\u3057\u305f\u3057\u3001\n\u30d5\u30ed\u30f3\u30c8\u30fb\u30b5\u30fc\u30d0\u30fc\u9023\u643a\u306b\u3088\u3063\u3066\u8868\u793a\u901f\u5ea6\u306f\u6700\u9069\u5316\u3055\u308c\u3001\u30cf\u30a4\u30c9\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066SPA\u3068\u5909\u308f\u3089\u306a\u3044\u66f8\u304d\u65b9\u3067\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,a.kt)("h4",{id:"blitzjs--next--prisma"},"Blitz.js = Next + Prisma"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201cZero-API\u201d data layer lets you import server code directly into your React components\ninstead of having to manually add API endpoints and do client-side fetching and caching.")),(0,a.kt)("p",null,"Next\u3092\u30d9\u30fc\u30b9\u306b\u3001Prisma\u3068\u3044\u3046ORM\u3092\u6d3b\u7528\u3057\u3066\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u306b\u3064\u3044\u3066\u306e\u30ec\u30a4\u30e4\u30fc\u3082\u53d6\u308a\u9664\u3044\u3066\u3057\u307e\u304a\u3046\u3068\u3044\u3046\u3001\n\u304b\u306a\u308a\u91ce\u5fc3\u7684\u306a\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u307e\u3067\u306f\u30d5\u30ed\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5c64\u3092\u7d71\u5408\u3059\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u5217\u6319\u3057\u307e\u3057\u305f\u3002\n\u305d\u306e\u305f\u3081\u4f7f\u7528\u8a00\u8a9e\u306fTypeScript\u4e00\u629e\u3067\u3059\u306d\u3002"),(0,a.kt)("h4",{id:"graphqlapollo-hasura-appsync"},"GraphQL(Apollo, Hasura, AppSync)"),(0,a.kt)("p",null,"Graphql\u306fSchema\u5b9a\u7fa9\u3092\u30d9\u30fc\u30b9\u306bDB\u306e\u30c6\u30fc\u30d6\u30eb\u3068\u305d\u3053\u3078\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306aAPI\u3092\u307e\u3068\u3081\u3066\u6e96\u5099\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u81ea\u52d5\u3067\u6e96\u5099\u3055\u308c\u308bAPI\u306f\u5358\u7d14\u306a\u3082\u306e\u306b\u9650\u308a\u307e\u3059\u304c\u3001\u30ab\u30b9\u30bf\u30e0\u306a\u51e6\u7406\u3092\u5b9f\u65bd\u3059\u308b\u305f\u3081\u306eAPI\u3082\u3082\u3061\u308d\u3093\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"GraphQL\u306b\u3064\u3044\u3066\u306f\u696d\u52d9\u3067\u3082\u4f7f\u7528\u3057\u305f\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u78ba\u304b\u306b\u304b\u306a\u308a\u7ba1\u7406\u304c\u5fc5\u8981\u306a\u30b3\u30fc\u30c9\u304c\u6e1b\u308a\u3001\n\u30c6\u30fc\u30d6\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306a\u3069\u3082\u30c7\u30a3\u30ec\u30af\u30c6\u30a3\u30d6\u306b\u3088\u3063\u3066\u5ba3\u8a00\u7684\u306b\u8a18\u8ff0\u51fa\u6765\u308b\u305f\u3081\u3001\u53ef\u8aad\u6027\u306b\u512a\u308c\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"rails\u306e\u601d\u60f3\u306b\u5b66\u3076\u30b7\u30f3\u30d7\u30eb"},"Rails\u306e\u601d\u60f3\u306b\u5b66\u3076\u30b7\u30f3\u30d7\u30eb"),(0,a.kt)("p",null,"Rails\u306f\u6210\u719f\u3057\u3066\u3044\u308bWEB\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u3072\u3068\u3064\u3067\u3059\u304c\u3001\nWEB\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b\u3088\u308b\u958b\u767a\u306b\u306f\u591a\u304f\u306e\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://postd.cc/rails-doctrine/#omakase"},"Rails\u306e\u57fa\u672c\u7406\u5ff5 : Rails\u306e\u751f\u307f\u306e\u89aa\u304c\u63b2\u3052\u308b8\u3064\u306e\u539f\u5247")),(0,a.kt)("p",null,"\u4eca\u56de\u306f\u300c\u30b7\u30f3\u30d7\u30eb\u300d\u3068\u3044\u3046\u6587\u8108\u3067\u7d39\u4ecb\u3059\u308b\u306b\u3042\u305f\u308a\u3001\u4ee5\u4e0b\u3092\u30d4\u30c3\u30af\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rails\u306e\u751f\u7523\u6027\u306b\u95a2\u3059\u308b\u521d\u671f\u306e\u30e2\u30c3\u30c8\u30fc\u306f\u3001\u201d\u541b\u306f\u7f8e\u3057\u3044\u552f\u4e00\u7121\u4e8c\u306e\u96ea\u306e\u7d50\u6676\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u306a\u3044\u201d\u3067\u3057\u305f\u3002\n\u3053\u308c\u306f\u3001\u7121\u99c4\u306a\u500b\u4eba\u30d7\u30ec\u30fc\u3092\u3084\u3081\u308c\u3070\u3001\u5e73\u51e1\u306a\u6c7a\u65ad\u3067\u82e6\u52b4\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u91cd\u8981\u306a\u5834\u9762\u3067\u4ed5\u4e8b\u306e\u30b9\u30d4\u30fc\u30c9\u304c\u5897\u3059\u3001\n\u3068\u3044\u3046\u3053\u3068\u3092\u8a00\u3063\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u30e1\u30cb\u30e5\u30fc\u306f\u201d\u304a\u307e\u304b\u305b\u201d\u3067\n\u30ec\u30b9\u30c8\u30e9\u30f3\u306b\u884c\u3063\u3066\u3069\u308c\u304c\u304a\u3044\u3057\u3044\u306e\u304b\u5206\u304b\u3089\u306a\u3044\u6642\u3063\u3066\u3042\u308a\u307e\u3059\u3088\u306d\u3002\n\u4f55\u304c\u201d\u3044\u3044\u6599\u7406\u201d\u306a\u306e\u304b\u7406\u89e3\u3059\u3089\u3057\u3066\u3044\u306a\u304f\u3066\u3082\u3001\n\u305d\u306e\u30ec\u30b9\u30c8\u30e9\u30f3\u306e\u30b7\u30a7\u30d5\u306b\u9078\u3093\u3067\u3082\u3089\u3048\u3070\u304a\u3044\u3057\u3044\u3082\u306e\u3092\u98df\u3079\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u308c\u304c\u201d\u304a\u307e\u304b\u305b\u201d\u3067\u3059\u3002\n\u304a\u3057\u3057\u3044\u3082\u306e\u3092\u9078\u3076\u306e\u306b\u3001\u6599\u7406\u306e\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u306b\u306a\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3057\u3001\n\u904b\u306b\u4efb\u305b\u3066\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u6599\u7406\u3092\u9078\u3076\u5fc5\u8981\u3082\u306a\u3044\u306e\u3067\u3059\u3002")),(0,a.kt)("p",null,'Rails\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u306e\u3067\u3059\u304b\u3089\u3001\u305d\u308c\u3089\u306f"\u304a\u307e\u304b\u305b"\u3067\u3042\u308b\u308f\u3051\u3067\u3059\u306d\u3002'),(0,a.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4f55\u304b\u826f\u3044\u304b\u3092\u6559\u3048\u3066\u304f\u308c\u308b\u3001\u4f55\u304b\u96e3\u3057\u3044\u554f\u984c\u306b\u3076\u3064\u304b\u3063\u305f\u306e\u306a\u3089\u3001\u305d\u306e\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u4ed6\u306e\u3082\u306e\u306b\u4ea4\u63db\u51fa\u6765\u308b\u3002\n\u305d\u3046\u3044\u3063\u305f\u5b58\u5728\u306f\u3042\u308a\u304c\u305f\u3044\u3082\u306e\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,a.kt)("p",null,"\u4e0d\u904b\u306b\u3082\u4fe1\u983c\u3067\u304d\u308b\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u304c\u7121\u3044\u74b0\u5883\u306b\u304a\u3044\u3066\u3082\u3001\n\u3053\u306e\u601d\u60f3\u304c\u30c1\u30fc\u30e0\u3067\u5171\u6709\u51fa\u6765\u3066\u3044\u308b\u306e\u306a\u3089\u3001\u300c\u65b9\u91dd\u3092\u6c7a\u3081\u3066\u304b\u3089\u9032\u3080\uff08\u500b\u4eba\u30d7\u30ec\u30fc\u306f\u3057\u306a\u3044\uff09\u300d\u3053\u3068\u3067\u3001\n\u30b7\u30f3\u30d7\u30eb\u3055\u3092\u4fdd\u3064\u3053\u3068\u304c\u51fa\u6765\u308b\u306f\u305a\u3067\u3059\u3002"))}k.isMDXComponent=!0}}]);