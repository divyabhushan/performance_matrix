(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=u(n),O=r,f=s["".concat(l,".").concat(O)]||s[O]||p[O]||c;return n?a.a.createElement(f,i(i({ref:t},b),{},{components:n})):a.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},147:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(10),l=n(149),i=n(11),o=Object(r.createContext)({collectLink:function(){}}),b=n(148),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,s,p=e.isNavLink,O=e.to,f=e.href,d=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(b.b)().withBaseUrl,g=Object(r.useContext)(o),N=O||f,y=Object(l.a)(N),w=null==N?void 0:N.replace("pathname://",""),x=void 0!==w?function(e){return e.startsWith("/")}(n=w)?h(n):n:void 0,E=Object(r.useRef)(!1),k=p?c.e:c.c,C=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&y&&window.docusaurus.prefetch(x),function(){C&&s&&s.disconnect()}}),[x,C,y]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,T=!x||!y||P;return x&&y&&!P&&!m&&g.collectLink(x),T?a.a.createElement("a",Object.assign({href:x},N&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(k,Object.assign({},v,{onMouseEnter:function(){E.current||(window.docusaurus.preload(x),E.current=!0)},innerRef:function(e){var t,n;C&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(x)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:j,activeClassName:d}))}},148:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(22),a=n(149);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,l=c.forcePrependBaseUrl,i=void 0!==l&&l,o=c.absolute,b=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+u:u}(c,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},149:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(144)),l=n(148),i=n(147),o={id:"if",title:"IF"},b={unversionedId:"references/formulas/if",id:"references/formulas/if",isDocsHomePage:!1,title:"IF",description:"An IF statement returns a value depending on whether the condition that is being evaluated is TRUE or FALSE.",source:"@site/docs/references/formulas/if.mdx",slug:"/references/formulas/if",permalink:"/performance-matrix/docs/references/formulas/if",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/if.mdx",version:"current",sidebar:"functionSideBar",next:{title:"AND",permalink:"/performance-matrix/docs/references/formulas/and"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"An ",Object(c.b)("inlineCode",{parentName:"p"},"IF")," statement returns a value depending on whether the condition that is being evaluated is TRUE or FALSE. "),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IF( logical_test, value_if_true, value_if_false )\n")),Object(c.b)("h2",{id:"arguments"},"Arguments"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"logical_test")," \u2013 The condition to be evaluated."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value_if_true")," \u2013 The value to be returned if the condition is met."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value_if_false")," \u2013 The value to be returned if the condition is not met."),Object(c.b)("h2",{id:"return-value"},"Return Value"),Object(c.b)("p",null,"Either value_if_true or value_if_false."),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Returns Blank when the formula is misspelled."),Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"IF")," function returns Error in any of the following cases :",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"value_if_false argument is missing"),Object(c.b)("li",{parentName:"ul"},"The argument value_if_true or value_if_false are not of numeric data type"),Object(c.b)("li",{parentName:"ul"},"Not using appropriate ",Object(c.b)(i.a,{to:Object(l.a)("docs/resources/formula-list#other-operators"),mdxType:"Link"},"operator")," in logical_test")))),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Consider the Revenue and Cost of Goods Sold nodes to follow the trend as shown below"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Jan"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Feb"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mar"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Apr"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"May"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Jun"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Revenue"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"100"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"124"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"137"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"23"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"45")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cost of Goods Sold"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25")))),Object(c.b)("div",{style:{textAlign:"justify"}},Object(c.b)("p",null,"Now, a new node Gross Profit Margin can computed using the ",Object(c.b)("inlineCode",{parentName:"p"},"IF")," function.\nGross Profit Margin is calculated as (Revenue-Cost of Goods Sold)/Revenue.\nIn case, Revenue has period value of 0, Gross Profit Margin should return 0.")),Object(c.b)("p",null,"To achieve this, the formula should be "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IF(Revenue==0,0,(Revenue-Cost of Goods Sold)/Revenue)\n")),Object(c.b)("p",null,"The result of the above formula is shown below"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Jan"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Feb"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mar"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Apr"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"May"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Jun"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Gross Profit Margin"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"75%"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"80%"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"82%"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(9%)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"44%")))),Object(c.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-gb/article/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2"}),"IF")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Tip")," ",Object(c.b)("br",null)," Use ",Object(c.b)(i.a,{to:Object(l.a)("docs/references/formulas/switch"),mdxType:"Link"},"SWITCH")," function instead of nesting multiple IF functions")))}p.isMDXComponent=!0}}]);