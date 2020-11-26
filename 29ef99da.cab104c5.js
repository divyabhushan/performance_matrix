(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?a.a.createElement(b,i(i({ref:r},l),{},{components:t})):a.a.createElement(b,i({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(144)),c={id:"range",title:"RANGE"},i={unversionedId:"references/formulas/range",id:"references/formulas/range",isDocsHomePage:!1,title:"RANGE",description:"The RANGE function refers to the values of a node between the specified start and end periods.",source:"@site/docs/references/formulas/range.mdx",slug:"/references/formulas/range",permalink:"/performance_matrix/docs/references/formulas/range",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/range.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"RATE",permalink:"/performance_matrix/docs/references/formulas/rate"},next:{title:"LASTNPERIODS",permalink:"/performance_matrix/docs/references/formulas/lastnperiods"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RANGE")," function refers to the values of a node between the specified start and end periods."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Range (start_index,end_index)\n")),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"start_index")," \u2013 The starting periods\u2019 index."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"end_index")," \u2013 The ending periods\u2019 index."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a scenario where the salesperson gets a bonus of 20% if the total sales for the first quarter is greater than the target."),Object(o.b)("p",null,"To achieve this, the formula should be "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"IF (Total Sales.Range(1,3)>Target, Total Sales*0.2,0).\n")))}u.isMDXComponent=!0}}]);