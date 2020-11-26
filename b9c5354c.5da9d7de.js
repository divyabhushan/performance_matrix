(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(144)),c={id:"rate",title:"RATE"},i={unversionedId:"references/formulas/rate",id:"references/formulas/rate",isDocsHomePage:!1,title:"RATE",description:"The RATE function returns the interest rate per period of a loan or an investment.",source:"@site/docs/references/formulas/rate.mdx",slug:"/references/formulas/rate",permalink:"/performance_matrix/docs/references/formulas/rate",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/rate.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"CUMPRINC",permalink:"/performance_matrix/docs/references/formulas/cumprinc"},next:{title:"RANGE",permalink:"/performance_matrix/docs/references/formulas/range"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RATE")," function returns the interest rate per period of a loan or an investment."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"RATE (Nper, PMT, PV, [FV], [Type], [Guess])\n")),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Nper")," \u2013 The total number of periods."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PMT")," \u2013 The payment made each period."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PV")," \u2013 The present value - the total amount that a series of future payments is worth now. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FV")," \u2013 The future value or a cash balance you want to attain after the last payment is made. This is an optional argument."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Type")," \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Guess")," \u2013 Estimate of what the rate will be. This is an optional argument."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a series of $2000 payments made at the end of each year for 6 years. The objective is to calculate the interest rate where the present value is $10,000.  "),Object(o.b)("p",null,"To calculate the present value, the formula should be "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"RATE (Number of Periods, PMT, Present Value,0)\n")),Object(o.b)("p",null,"The interest rate is calculated to be 5.47%."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/RATE-function-9F665657-4A7E-4BB7-A030-83FC59E748CE"}),"RATE")))}p.isMDXComponent=!0},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);