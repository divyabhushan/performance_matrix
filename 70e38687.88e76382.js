(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),i=(t(0),t(144)),s={id:"current_series_id",title:"CURRENT_SERIES_ID"},o={unversionedId:"references/formulas/current_series_id",id:"references/formulas/current_series_id",isDocsHomePage:!1,title:"CURRENT_SERIES_ID",description:"Syntax",source:"@site/docs/references/formulas/current_series_id.mdx",slug:"/references/formulas/current_series_id",permalink:"/performance-matrix/docs/references/formulas/current_series_id",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/references/formulas/current_series_id.mdx",version:"current",sidebar:"functionSideBar",previous:{title:"CURRENT_SERIES",permalink:"/performance-matrix/docs/references/formulas/current_series"},next:{title:"CURRENT_PERIOD_INDEX",permalink:"/performance-matrix/docs/references/formulas/current_period_index"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:c};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"CURRENT_SERIES_ID == 'series'? value1:value2\n")),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"series")," - Refers to the series label ie, Forecast, Budget etc."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The value that should be assigned to the series mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Forecast."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value2")," \u2013 The value that should be assigned to the series other than the one mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Comparison."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Consider a scenario where you want to assign 100 as the monthly Forecast value and 85 as the monthly Budget value."),Object(i.b)("p",null,"This can be achieved by using the formula "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"CURRENT_SERIES_ID == 'Forecast'? 100:85.\n")))}l.isMDXComponent=!0},144:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.a.createElement(f,o(o({ref:r},u),{},{components:t})):a.a.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);