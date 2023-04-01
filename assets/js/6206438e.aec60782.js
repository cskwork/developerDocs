"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[78931],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47758:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(67294),o=r(86010),a=r(39960),i=r(44996),c="card_3DNo";var s=function(e){var t,r=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,p=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,r){return n.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})}))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return r?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,o.Z)(c,"docs-card")},p)):s?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,o.Z)(c,"docs-card"),href:e.href,target:"_blank"},p)):n.createElement("docs-card",{class:d},n.createElement(a.default,{to:e.href,className:(0,o.Z)(c,"docs-card")},p))}},53445:function(e,t,r){var n=r(67294);t.Z=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},19303:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(47758),c=r(53445),s=["components"],l={title:"Next Steps"},u=void 0,p={unversionedId:"intro/next",id:"intro/next",isDocsHomePage:!1,title:"Next Steps",description:"Next Steps for Starting an App: Choose Your JavaScript Framework",source:"@site/docs/intro/next.md",sourceDirName:"intro",slug:"/intro/next",permalink:"/docs/intro/next",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/intro/next.md",tags:[],version:"current",frontMatter:{title:"Next Steps"}},d=[{value:"Build Your First App",id:"build-your-first-app",children:[],level:2}],m={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Next Steps for Starting an App: Choose Your JavaScript Framework"),(0,a.kt)("meta",{name:"description",content:"In order to build an Ionic app, you first need to choose the JavaScript framework you plan to use. Learn more about next steps for starting an app with Ionic."})),(0,a.kt)("h2",{id:"build-your-first-app"},"Build Your First App"),(0,a.kt)("p",null,"Pick the JavaScript framework you plan to use while building your Ionic app:"),(0,a.kt)(c.Z,{mdxType:"DocsCards"},(0,a.kt)(i.Z,{header:"Start with Angular",href:"../angular/your-first-app",icon:"/icons/logo-angular-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with Angular.")),(0,a.kt)(i.Z,{header:"Start with React",href:"../react/your-first-app",icon:"/icons/logo-react-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with React.")),(0,a.kt)(i.Z,{header:"Start with Vue",href:"../vue/your-first-app",icon:"/icons/logo-vue-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with Vue."))))}f.isMDXComponent=!0}}]);