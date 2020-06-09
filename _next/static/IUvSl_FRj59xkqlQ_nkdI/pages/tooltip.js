(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"+wNj":function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,"a",(function(){return a}))},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("+wNj");function r(t,e){if(null==t)return{};var n,r,o=Object(a.a)(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},Km8e:function(t,e,n){"use strict";var a=Object.assign.bind(Object);t.exports=a,t.exports.default=t.exports},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return u}));var a=n("ERkP"),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=r.a.createContext({}),p=function(t){var e=r.a.useContext(c),n=e;return t&&(n="function"===typeof t?t(e):b(b({},e),t)),n},d=function(t){var e=p(t.components);return r.a.createElement(c.Provider,{value:e},t.children)},O="mdxType",j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),O=a,m=d["".concat(l,".").concat(O)]||d[O]||j[O]||o;return n?r.a.createElement(m,b(b({ref:e},c),{},{components:n})):r.a.createElement(m,b({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"===typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var b={};for(var i in e)hasOwnProperty.call(e,i)&&(b[i]=e[i]);b.originalType=t,b[O]="string"===typeof t?t:a,l[1]=b;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},jR2x:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),b=n("ZVZ0"),i=(l.a.createElement,{}),c="wrapper";function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(b.b)(c,Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"Tooltip"),Object(b.b)("p",null,"A tooltip is a brief, informative message that appears when a user interacts\nwith an element. Tooltips are usually initiated in one of two ways: through a\nmouse-hover gesture or through a keyboard-hover gesture."),Object(b.b)("p",null,"The Tooltip component follows the\n",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip"}),"WAI-ARIA")," Tooltip Pattern."),Object(b.b)("h2",null,"Import"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Tooltip from '@trendmicro/react-styled-ui/Tooltip';\n// or\nimport { Tooltip } from '@trendmicro/react-styled-ui';\n")),Object(b.b)("h2",null,"Usage"),Object(b.b)("p",null,"If the ",Object(b.b)("inlineCode",{parentName:"p"},"children")," of Tooltip is a string, we wrap with in a ",Object(b.b)("inlineCode",{parentName:"p"},"span")," with\n",Object(b.b)("inlineCode",{parentName:"p"},"tabIndex")," set to ",Object(b.b)("inlineCode",{parentName:"p"},"0"),", to ensure it meets the accessibility requirements."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Tooltip label="Hey, I\'m here!">Hover me</Tooltip>\n')),Object(b.b)("h3",null,"With an icon"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Tooltip label="Show calendar" placement="left">\n  <TMIcon cursor="pointer" name="calendar" />\n</Tooltip>\n')),Object(b.b)("h3",null,"Hide the arrow"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Tooltip hideArrow label="Search places" placement="top">\n  <TMIcon cursor="pointer" name="search-o" />\n</Tooltip>\n')),Object(b.b)("h3",null,"Tooltip with focusable content"),Object(b.b)("p",null,"If the children of the tooltip is a focusable element, the tooltip will show\nwhen you focus or hover on the element, and will hide when you blur or move\ncursor out of the element."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Tooltip label="Search places" placement="top">\n  <Button>Button</Button>\n</Tooltip>\n')),Object(b.b)("h2",null,"Placement"),Object(b.b)("p",null,"Using the ",Object(b.b)("inlineCode",{parentName:"p"},"placement")," prop you can adjust where your tooltip will be displayed."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="2rem">\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Tooltip label="Top" placement="top">\n      <Button minWidth="32x">Top</Button>\n    </Tooltip>\n    <Tooltip label="Top start" placement="top-start">\n      <Button minWidth="32x">Top-Start</Button>\n    </Tooltip>\n    <Tooltip label="Top end" placement="top-end">\n      <Button minWidth="32x">Top-End</Button>\n    </Tooltip>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Tooltip label="Right" placement="right">\n      <Button minWidth="32x">Right</Button>\n    </Tooltip>\n    <Tooltip label="Right start" placement="right-start">\n      <Button minWidth="32x">Right-Start</Button>\n    </Tooltip>\n    <Tooltip label="Right end" placement="right-end">\n      <Button minWidth="32x">Right-End</Button>\n    </Tooltip>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Tooltip label="Bottom" placement="bottom">\n      <Button minWidth="32x">Bottom</Button>\n    </Tooltip>\n    <Tooltip label="Bottom start" placement="bottom-start">\n      <Button minWidth="32x">Bottom-Start</Button>\n    </Tooltip>\n    <Tooltip label="Bottom end" placement="bottom-end">\n      <Button minWidth="32x">Bottom-End</Button>\n    </Tooltip>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Tooltip label="Left" placement="left">\n      <Button minWidth="32x">Left</Button>\n    </Tooltip>\n    <Tooltip label="Left start" placement="left-start">\n      <Button minWidth="32x">Left-Start</Button>\n    </Tooltip>\n    <Tooltip label="Left end" placement="left-end">\n      <Button minWidth="32x">Left-End</Button>\n    </Tooltip>\n  </Stack>\n</Stack>\n')),Object(b.b)("h2",null,"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isOpen"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the tooltip is shown.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"defaultIsOpen"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the tooltip is initially shown.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"label"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The label of the tooltip.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"aria-label"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An alternate label for screen readers.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"placement"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PopperJS.Placement"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'bottom'"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Position the tooltip relative to the trigger element as well as surrounding elements. One of: ",Object(b.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'auto-start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'auto-end'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'top'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'bottom'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'right'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'top-start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'top-end'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'bottom-start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'bottom-end'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'right-start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'right-end'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'left-start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'left-end'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"children"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ReactNode"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The ",Object(b.b)("inlineCode",{parentName:"td"},"ReactNode")," to be used as the trigger of the tooltip.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"hideArrow"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true")," hide the arrow tip on the tooltip.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"showDelay"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The delay in milliseconds for the tooltip to show.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"hideDelay"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The delay in milliseconds for the tooltip to hide.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"closeOnClick"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true")," hide the tooltip, when the trigger is clicked.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"shouldWrapChildren"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the tooltip will wrap the children in a ",Object(b.b)("inlineCode",{parentName:"td"},"span")," with ",Object(b.b)("inlineCode",{parentName:"td"},"tabIndex=0"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onOpen"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A callback called when the tooltip shows.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onClose"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A callback called when the tooltip hides.")))))}p.isMDXComponent=!0},oOAI:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tooltip",function(){return n("jR2x")}])}},[["oOAI",0,1]]]);