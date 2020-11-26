(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(144)),i={id:"and",title:"AND"},o={unversionedId:"references/formulas/and",id:"references/formulas/and",isDocsHomePage:!1,title:"AND",description:"An AND statement returns TRUE only if all the arguments are TRUE and returns FALSE if any of the arguments is FALSE.",source:"@site/docs/references/formulas/and.mdx",slug:"/references/formulas/and",permalink:"/performance-matrix/docs/references/formulas/and",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/and.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"IF",permalink:"/performance-matrix/docs/references/formulas/if"},next:{title:"SWITCH",permalink:"/performance-matrix/docs/references/formulas/switch"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"An ",Object(c.b)("inlineCode",{parentName:"p"},"AND")," statement returns TRUE only if ",Object(c.b)("strong",{parentName:"p"},"all")," the arguments are TRUE and returns FALSE if any of the arguments is FALSE. "),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"AND ( logical_test1, [logical_test2], ... )\n")),Object(c.b)("h2",{id:"arguments"},"Arguments"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"logical_test1")," \u2013 The first condition to be evaluated. This is a required argument."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"logical_test2, \u2026"),"  \u2013 The additional conditions to be evaluated. These are optional arguments."),Object(c.b)("h2",{id:"return-value"},"Return value"),Object(c.b)("p",null,"Either True or False."),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"AND")," function accepts multiple conditions."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Consider a scenario in which if the number of licenses is greater than 500 and usage period is greater than 24 months,\nthen the price should be $20 else $25."),Object(c.b)("p",null,"To achieve this, the formula should be"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IF(AND(Num_of_Licenses>500,Duration<24),20,25)\n")),Object(c.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-gb/article/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9"}),"AND")))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(f,o(o({ref:t},u),{},{components:n})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);