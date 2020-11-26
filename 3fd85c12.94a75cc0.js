(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{144:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),b=n,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return t?a.a.createElement(m,i(i({ref:r},l),{},{components:t})):a.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},87:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(144)),c={id:"power",title:"POWER"},i={unversionedId:"references/formulas/power",id:"references/formulas/power",isDocsHomePage:!1,title:"POWER",description:"The POWER function returns the result of a number raised to a power.",source:"@site/docs/references/formulas/power.mdx",slug:"/references/formulas/power",permalink:"/performance-matrix/docs/references/formulas/power",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/power.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"MAX",permalink:"/performance-matrix/docs/references/formulas/max"},next:{title:"SQRT",permalink:"/performance-matrix/docs/references/formulas/sqrt"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],l={rightToc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"POWER")," function returns the result of a number raised to a power."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"POW (value,power)\n")),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"value")," \u2013 The base number, it can be any real number or node."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"power")," \u2013 The exponent to which the value is raised. "),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"If value = 2 and power = 5, ",Object(o.b)("inlineCode",{parentName:"p"},"POW (value, power)")," returns 32."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/POWER-function-D3F2908B-56F4-4C3F-895A-07FB519C362A"}),"POWER")))}p.isMDXComponent=!0}}]);