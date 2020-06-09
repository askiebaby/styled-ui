(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},DDPA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skeleton",function(){return n("Mm/w")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,c=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},"Mm/w":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("cxan"),r=n("HbGN"),c=n("ERkP"),i=n.n(c),o=n("ZVZ0"),l=(i.a.createElement,{}),b="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Skeleton"),Object(o.b)("p",null,"Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration."),Object(o.b)("h2",null,"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Skeleton from '@trendmicro/react-styled-ui/Skeleton';\n// or\nimport { Skeleton } from '@trendmicro/react-styled-ui';\n")),Object(o.b)("h2",null,"Usage"),Object(o.b)("h3",null,"Variants"),Object(o.b)("p",null,"This component provides 3 shape variants: ",Object(o.b)("inlineCode",{parentName:"p"},"text"),", ",Object(o.b)("inlineCode",{parentName:"p"},"rect"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"circle"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack display="inline-flex" direction="column" spacing="4x">\n  <Skeleton variant="text" />\n  <Skeleton variant="rect" width={200} height={100} />\n  <Skeleton variant="circle" width={40} height={40} />\n</Stack>\n')),Object(o.b)("h3",null,"Animations"),Object(o.b)("p",null,"The animation is disabled by default. You can change the animation effect to ",Object(o.b)("inlineCode",{parentName:"p"},"pulse")," or ",Object(o.b)("inlineCode",{parentName:"p"},"wave"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x" width={300}>\n  <Box>\n    <Skeleton />\n    <Skeleton animation="pulse" />\n    <Skeleton animation="wave" />\n  </Box>\n</Stack>\n')),Object(o.b)("h3",null,"Inferring dimensions"),Object(o.b)("p",null,"In addition to accepting ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," props, the component can also infer the dimensions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  return (\n    <Flex>\n      <Stack direction="column" spacing="4x" flex="none" width={300}>\n        <Heading variant="h1"><Skeleton /></Heading>\n        <Heading variant="h3"><Skeleton /></Heading>\n        <Text><Skeleton /></Text>\n      </Stack>\n      <Space width="8x" flex="none" />\n      <Stack direction="column" spacing="4x" flex="1">\n        <Heading variant="h1">h1</Heading>\n        <Heading variant="h3">h3</Heading>\n        <Text>body text</Text>\n      </Stack>\n    </Flex>\n  );\n}\n')),Object(o.b)("h2",null,"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Skeleton")," composes the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"variant"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'text'"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The type of content that will be rendered. One of: ",Object(o.b)("inlineCode",{parentName:"td"},"'text'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'rect'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'circle'"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"animation"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The animation effect. One of: ",Object(o.b)("inlineCode",{parentName:"td"},"'pulse'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'wave'"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"width"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number ","|"," string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"height"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number ","|"," string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Height of the skeleton. Useful when you don't want to adopt the skeleton to a text element.")))))}p.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m}));var a=n("ERkP"),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),O=p(n),u=a,j=O["".concat(i,".").concat(u)]||O[u]||d[u]||c;return n?r.a.createElement(j,o(o({ref:t},b),{},{components:n})):r.a.createElement(j,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var c=n.length,i=new Array(c);i[0]=j;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"===typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))}},[["DDPA",0,1]]]);