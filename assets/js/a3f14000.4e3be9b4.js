"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[64765],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73435:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={title:"ionic ssh add",sidebar_label:"ssh add"},s=void 0,l={unversionedId:"cli/commands/ssh-add",id:"version-v6/cli/commands/ssh-add",isDocsHomePage:!1,title:"ionic ssh add",description:"Add an SSH public key to Ionic",source:"@site/versioned_docs/version-v6/cli/commands/ssh-add.md",sourceDirName:"cli/commands",slug:"/cli/commands/ssh-add",permalink:"/docs/v6/cli/commands/ssh-add",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/ssh/add.ts",tags:[],version:"v6",frontMatter:{title:"ionic ssh add",sidebar_label:"ssh add"},sidebar:"version-v6/cli",previous:{title:"signup",permalink:"/docs/v6/cli/commands/signup"},next:{title:"ssh delete",permalink:"/docs/v6/cli/commands/ssh-delete"}},d=[{value:"pubkey-path",id:"pubkey-path",children:[],level:3},{value:"Options",id:"options",children:[],level:3}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add an SSH public key to Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic ssh add [pubkey-path] [options]\n")),(0,i.kt)("h3",{id:"pubkey-path"},"pubkey-path"),(0,i.kt)("p",null,"Location of public key file to add to Ionic"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--use"),": Use the newly added key as your default SSH key for Ionic")))}p.isMDXComponent=!0}}]);