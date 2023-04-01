"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[96598],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59511:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],l={title:"Ionic CLI",sidebar_label:"Overview"},c=void 0,s={unversionedId:"cli",id:"version-v6/cli",isDocsHomePage:!1,title:"Ionic CLI",description:"Ionic CLI Framework: Command-Line Interface to Develop Apps",source:"@site/versioned_docs/version-v6/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/v6/cli",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/cli.md",tags:[],version:"v6",frontMatter:{title:"Ionic CLI",sidebar_label:"Overview"},sidebar:"version-v6/cli",next:{title:"Configuration",permalink:"/docs/v6/cli/configuration"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Help",id:"help",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Ionic CLI Framework: Command-Line Interface to Develop Apps"),(0,r.kt)("meta",{name:"description",content:"The Ionic command-line interface (CLI) is the go-to tool for developing Ionic apps. Install our framework globally with npm."})),(0,r.kt)("p",null,"The Ionic command-line interface (",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/glossary#cli"},"CLI"),") is the go-to tool for developing Ionic apps."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The Ionic CLI can be installed globally with npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli\n")),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("p",null,"The Ionic CLI ships with command documentation that is accessible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic --help\n$ ionic <command> --help\n$ ionic <command> <subcommand> --help\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be sure to run ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic <command> --help")," in your project directory."),(0,r.kt)("p",{parentName:"div"},"For some commands, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve"),", the help documentation is contextual to the type of your project, e.g. React vs Angular."))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The Ionic CLI is built with ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/glossary#typescript"},"TypeScript")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/glossary#node"},"Node.js"),". It supports Node 10.3+, but the latest Node LTS is always recommended. Follow development on the open source ",(0,r.kt)("a",{href:"https://github.com/ionic-team/ionic-cli",target:"_blank"},"GitHub repository"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"To troubleshoot issues with the Ionic CLI, the following may be useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure the latest version of the Ionic CLI is installed. Get the installed version by running ",(0,r.kt)("inlineCode",{parentName:"li"},"ionic --version"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure the latest Node LTS is installed. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/intro/environment#node-npm"},"Node & npm")," environment setup."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose")," flag prints debugging messages, which may narrow down the issue."),(0,r.kt)("li",{parentName:"ul"},"Connection issues may be due to improperly configured proxy settings. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/cli/using-a-proxy"},"Using a Proxy")," to configure request proxying."),(0,r.kt)("li",{parentName:"ul"},"The global Ionic CLI configuration directory is ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ionic")," on all platforms. It can safely be deleted and the Ionic CLI will repopulate it, but all configuration (including user sessions) will be lost. Configure this directory with ",(0,r.kt)("a",{parentName:"li",href:"/docs/cli/configuration#environment-variables"},"CLI environment variables"),".")))}d.isMDXComponent=!0}}]);