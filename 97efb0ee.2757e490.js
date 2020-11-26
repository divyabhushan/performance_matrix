(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(144)),l={id:"irr",title:"IRR"},o={unversionedId:"references/formulas/irr",id:"references/formulas/irr",isDocsHomePage:!1,title:"IRR",description:"The IRR function returns the internal rate of return for a series of cash flows. Node references also accepted as arguments.",source:"@site/docs/references/formulas/irr.mdx",slug:"/references/formulas/irr",permalink:"/performance_matrix/docs/references/formulas/irr",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/irr.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"LOG",permalink:"/performance_matrix/docs/references/formulas/log"},next:{title:"NPV",permalink:"/performance_matrix/docs/references/formulas/npv"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"IRR")," function returns the internal rate of return for a series of cash flows. Node references also accepted as arguments."),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IRR (value1,[value2],\u2026, [Guess])\n")),Object(c.b)("h2",{id:"arguments"},"Arguments"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The node that contains the order of cash flows for which you want to calculate the internal rate of return."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value2,\u2026"),"  \u2013 The additional nodes that contains the order of cash flows for which you want to calculate the internal rate of return. This is an optional argument."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Guess")," \u2013 A value that you guess is close to the actual IRR value. This is an optional argument."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Consider a project with an initial investment of $10,000 and cash inflows of $4,000 for the subsequent four years. The objective is to evaluate the project by calculating IRR. "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Period"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"3"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"4"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Investment"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-10,000"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cash Inflows"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4,000"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4,000"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4,000"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4,000")))),Object(c.b)("p",null,"To achieve this, the formula should be"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IRR ([Initial Investment,Cash Inflows.ALL_PERIODS])\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"IRR")," is calculated to be 14.76%"),Object(c.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/IRR-function-64925EAA-9988-495B-B290-3AD0C163C1BC"}),"IRR")))}b.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||c;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);