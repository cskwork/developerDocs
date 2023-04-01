"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[12877],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Environment Setup"},s=void 0,p={unversionedId:"intro/environment",id:"version-v6/intro/environment",isDocsHomePage:!1,title:"Environment Setup",description:"Environment Setup | Node & NPM Environment for Ionic App Setup",source:"@site/versioned_docs/version-v6/intro/environment.md",sourceDirName:"intro",slug:"/intro/environment",permalink:"/docs/v6/intro/environment",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/intro/environment.md",tags:[],version:"v6",frontMatter:{title:"Environment Setup"},sidebar:"version-v6/docs",previous:{title:"Upgrading to Ionic 6",permalink:"/docs/v6/intro/upgrading-to-ionic-6"},next:{title:"CLI Installation",permalink:"/docs/v6/intro/cli"}},c=[{value:"Terminal",id:"terminal",children:[],level:2},{value:"Node &amp; npm",id:"node--npm",children:[],level:2},{value:"Git",id:"git",children:[{value:"Git GUI",id:"git-gui",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Environment Setup | Node & NPM Environment for Ionic App Setup"),(0,o.kt)("meta",{name:"description",content:"To get started with Ionic Framework, the only requirement is a\xa0Node & npm\xa0environment. Learn what environment setup is required for your Ionic apps."})),(0,o.kt)("p",null,"To get started with Ionic Framework, the only requirement is a ",(0,o.kt)("a",{parentName:"p",href:"#node--npm"},"Node & npm")," environment."),(0,o.kt)("p",null,"Of course, a code editor is also required. ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is recommended. Visual Studio Code is a free, batteries-included text editor made by Microsoft."),(0,o.kt)("h2",{id:"terminal"},"Terminal"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Much of Ionic development requires familiarity with the command line. If you're new to the command line, see ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/blog/new-to-the-command-line/"},"this Blog Post")," for a quick introduction."))),(0,o.kt)("p",null,"In general, we recommend using the built-in terminals. Many third-party terminals work well with Ionic, but may not be supported."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Windows, ",(0,o.kt)("strong",{parentName:"li"},"Command Prompt")," and ",(0,o.kt)("strong",{parentName:"li"},"PowerShell")," are supported. ",(0,o.kt)("a",{href:"https://docs.microsoft.com/en-us/windows/wsl/faq",target:"_blank"},"WSL")," is known to work with Ionic, but may not be supported."),(0,o.kt)("li",{parentName:"ul"},"For macOS, the built-in ",(0,o.kt)("strong",{parentName:"li"},"Terminal")," app is supported.")),(0,o.kt)("p",null,"Git Bash (from ",(0,o.kt)("a",{href:"https://git-scm.com",target:"_blank"},"git-scm.com"),") does not support TTY interactivity and is ",(0,o.kt)("strong",{parentName:"p"},"not supported")," by Ionic."),(0,o.kt)("h2",{id:"node--npm"},"Node & npm"),(0,o.kt)("p",null,"Almost all tooling for modern JavaScript projects is based in ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#node"},"Node.js"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"download page")," has prebuilt installation packages for all platforms. We recommend selecting the LTS version to ensure best compatibility."),(0,o.kt)("p",null,"Node is bundled with ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#npm"},"npm"),", the package manager for JavaScript."),(0,o.kt)("p",null,"To verify the installation, open a new terminal window and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ node --version\n$ npm --version\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Permission errors are common on macOS when installing global packages with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),". If you get an ",(0,o.kt)("inlineCode",{parentName:"p"},"EACCES")," error, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/developing/tips#resolving-permission-errors"},"Resolving Permission Errors"),"."))),(0,o.kt)("h2",{id:"git"},"Git"),(0,o.kt)("p",null,"Although not required, the version control system ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#git"},"Git")," is highly recommended."),(0,o.kt)("p",null,"Git is often accompanied by a Git Host, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),", in which case additional setup is required. Follow the tutorial from the Git Host's documentation to set up Git:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://help.github.com/en/articles/set-up-git"},"Set up Git")),(0,o.kt)("li",{parentName:"ul"},"GitLab: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/topics/git/how_to_install_git"},"Installing Git")),(0,o.kt)("li",{parentName:"ul"},"Bitbucket: ",(0,o.kt)("a",{parentName:"li",href:"https://www.atlassian.com/git/tutorials/install-git"},"Install Git"))),(0,o.kt)("p",null,"Otherwise, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"official installation instructions"),". The command-line utility can be downloaded from the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"download page"),"."),(0,o.kt)("p",null,"To verify the installation, open a new terminal window and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git --version\n")),(0,o.kt)("h3",{id:"git-gui"},"Git GUI"),(0,o.kt)("p",null,"Git is a command-line utility, but there are many ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads/guis/"},"GUI clients")," available. ",(0,o.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop")," is recommended, and works well with GitHub."))}d.isMDXComponent=!0}}]);