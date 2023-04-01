"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[88249],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97022:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"ionic login",sidebar_label:"login"},c=void 0,s={unversionedId:"cli/commands/login",id:"version-v6/cli/commands/login",isDocsHomePage:!1,title:"ionic login",description:"Ionic Secure App Login: Authenticate and Retrieve a User Token",source:"@site/versioned_docs/version-v6/cli/commands/login.md",sourceDirName:"cli/commands",slug:"/cli/commands/login",permalink:"/docs/v6/cli/commands/login",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/login.ts",tags:[],version:"v6",frontMatter:{title:"ionic login",sidebar_label:"login"},sidebar:"version-v6/cli",previous:{title:"link",permalink:"/docs/v6/cli/commands/link"},next:{title:"logout",permalink:"/docs/v6/cli/commands/logout"}},u=[{value:"email",id:"email",children:[],level:3},{value:"password",id:"password",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Ionic Secure App Login: Authenticate and Retrieve a User Token"),(0,i.kt)("meta",{name:"description",content:"For a secure login, authenticate with Ionic and retrieve a user token \u2014 stored in the CLI config. Learn the most secure way to log in to Ionic Framework apps."})),(0,i.kt)("p",null,"Log in to Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic login [email] [password]\n")),(0,i.kt)("p",null,"Authenticate with Ionic and retrieve a user token, which is stored in the CLI config. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic login")," will open a browser where you can submit your credentials."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"IONIC_TOKEN")," environment variable is set, the CLI will automatically authenticate you. Use the Dashboard to generate a Personal Access Token."),(0,i.kt)("p",null,"If you need to create an Ionic account, use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic signup")," or the Ionic ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/signup"},"Website"),"."),(0,i.kt)("p",null,"If you are having issues logging in, please get in touch with our ",(0,i.kt)("a",{parentName:"p",href:"https://ion.link/support-request"},"Support"),"."),(0,i.kt)("h3",{id:"email"},"email"),(0,i.kt)("p",null,"Your email address (deprecated)"),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"Your password (deprecated)"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic login \n")))}d.isMDXComponent=!0}}]);