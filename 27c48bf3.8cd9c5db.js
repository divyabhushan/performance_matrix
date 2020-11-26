(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||c;return n?r.a.createElement(d,o(o({ref:t},u),{},{components:n})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(144)),l={id:"npv",title:"NPV"},o={unversionedId:"references/formulas/npv",id:"references/formulas/npv",isDocsHomePage:!1,title:"NPV",description:"The NPV function returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).",source:"@site/docs/references/formulas/npv.mdx",slug:"/references/formulas/npv",permalink:"/performance_matrix/docs/references/formulas/npv",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/npv.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"IRR",permalink:"/performance_matrix/docs/references/formulas/irr"},next:{title:"PMT",permalink:"/performance_matrix/docs/references/formulas/pmt"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"NPV")," function returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values)."),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"NPV (Rate, value1, [value2], ...)\n")),Object(c.b)("h2",{id:"arguments"},"Arguments"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Rate")," \u2013 The rate of discount."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The node that contains the order of cash flows for which you want to calculate the net present value."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value2,\u2026"),"  \u2013 The additional nodes that contains the order of cash flows for which you want to calculate the net present value. This is an optional argument."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Consider a project with an initial investment of $10,000 and cash inflows of $4,000 for the subsequent four years. Discount rate is 12%. The objective is to evaluate the project by calculating NPV. "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Period"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"4"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Initial Investment"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-10,000"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cash Inflows"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000")))),Object(c.b)("p",null,"To achieve this, the formula should be "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"NPV ([Discount Rate,Cash Inflows.ALL_PERIODS]) + Initial Investment\n")),Object(c.b)("p",null,"NPV is calculated to be $847.68. "),Object(c.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/NPV-function-8672CB67-2576-4D07-B67B-AC28ACF2A568"}),"NPV")))}b.isMDXComponent=!0}}]);