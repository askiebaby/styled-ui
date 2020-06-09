(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+wNj":function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(n,"a",(function(){return t}))},HbGN:function(e,n,r){"use strict";r.d(n,"a",(function(){return o}));var t=r("+wNj");function o(e,n){if(null==e)return{};var r,o,a=Object(t.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},Km8e:function(e,n,r){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},ZVZ0:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r("ERkP"),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"===typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=t,f=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(f,i(i({ref:n},p),{},{components:r})):o.a.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"===typeof e||t){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[b]="string"===typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},cxan:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}r.d(n,"a",(function(){return t}))},dgNP:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color-modes",function(){return r("u+42")}])},"u+42":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return u}));var t=r("cxan"),o=r("HbGN"),a=r("ERkP"),c=r.n(a),i=r("ZVZ0"),l=(c.a.createElement,{}),p="wrapper";function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Color Modes"),Object(i.b)("p",null,"To enable color modes, wrap your application in a ",Object(i.b)("inlineCode",{parentName:"p"},"ColorModeProvider")," and specify the value prop with a color mode: ",Object(i.b)("inlineCode",{parentName:"p"},"dark")," or ",Object(i.b)("inlineCode",{parentName:"p"},"light"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx",metastring:"disabled",disabled:!0}),"import React from 'react';\nimport { ThemeProvider, ColorModeProvider } from '@trendmicro/react-styled-ui';\nimport App from './App';\n\nfunction Example({ children }) {\n  return (\n    <ThemeProvider>\n      <ColorModeProvider value=\"dark\">\n        <App />\n      </ColorModeProvider>\n    </ThemeProvider>\n  );\n}\n")),Object(i.b)("p",null,"Then you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"useColorMode")," Hook to get current color mode or change the color mode."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx",metastring:"disabled",disabled:!0}),"// App.jsx\nimport React from 'react';\nimport { Button, useColorMode } from '@trendmicro/react-styled-ui';\n\nconst App = () => {\n  const { colorMode, toggleColorMode } = useColorMode();\n  return (\n    <Button onClick={toggleColorMode}>\n      Toggle Color Mode\n    </Button>\n  );\n};\n")),Object(i.b)("p",null,"To force a specific color mode, wrap your component in ",Object(i.b)("inlineCode",{parentName:"p"},"LightMode")," or ",Object(i.b)("inlineCode",{parentName:"p"},"DarkMode"),", it will override global color mode."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'<Flex>\n  <LightMode bg="white" color="black:primary" px="4x" py="2x">\n    <Button variant="outline">\n      Light Mode\n    </Button>\n  </LightMode>\n  <DarkMode bg="gray:100" color="white:primary" px="4x" py="2x">\n    <Button variant="outline">\n      Dark Mode\n    </Button>\n  </DarkMode>\n</Flex>\n')))}u.isMDXComponent=!0}},[["dgNP",0,1]]]);