"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[9745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23770:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"ionic integrations list",sidebar_label:"integrations list"},l=void 0,s={unversionedId:"cli/commands/integrations-list",id:"cli/commands/integrations-list",isDocsHomePage:!1,title:"ionic integrations list",description:"List available and active integrations in your app",source:"@site/docs/cli/commands/integrations-list.md",sourceDirName:"cli/commands",slug:"/cli/commands/integrations-list",permalink:"/docs/cli/commands/integrations-list",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/integrations/list.ts",tags:[],version:"current",frontMatter:{title:"ionic integrations list",sidebar_label:"integrations list"},sidebar:"cli",previous:{title:"integrations enable",permalink:"/docs/cli/commands/integrations-enable"},next:{title:"link",permalink:"/docs/cli/commands/link"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"List available and active integrations in your app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic integrations list\n")),(0,o.kt)("p",null,"This command will print the status of integrations in Ionic projects. Integrations can be ",(0,o.kt)("strong",{parentName:"p"},"enabled")," (added and enabled), ",(0,o.kt)("strong",{parentName:"p"},"disabled")," (added but disabled), and ",(0,o.kt)("strong",{parentName:"p"},"not added")," (never added to the project)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To enable or add integrations, see ",(0,o.kt)("inlineCode",{parentName:"li"},"ionic integrations enable --help")),(0,o.kt)("li",{parentName:"ul"},"To disable integrations, see ",(0,o.kt)("inlineCode",{parentName:"li"},"ionic integrations disable --help"))))}d.isMDXComponent=!0}}]);