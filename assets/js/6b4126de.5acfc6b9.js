"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[43366],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48500:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"ionic generate",sidebar_label:"generate"},l=void 0,p={unversionedId:"cli/commands/generate",id:"version-v6/cli/commands/generate",isDocsHomePage:!1,title:"ionic generate",description:"Ionic Generate: Create Pages, Components, & Angular Features",source:"@site/versioned_docs/version-v6/cli/commands/generate.md",sourceDirName:"cli/commands",slug:"/cli/commands/generate",permalink:"/docs/v6/cli/commands/generate",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/generate.ts",tags:[],version:"v6",frontMatter:{title:"ionic generate",sidebar_label:"generate"},sidebar:"version-v6/cli",previous:{title:"enterprise register",permalink:"/docs/v6/cli/commands/enterprise-register"},next:{title:"git remote",permalink:"/docs/v6/cli/commands/git-remote"}},s=[{value:"type",id:"type",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Ionic Generate: Create Pages, Components, & Angular Features"),(0,i.kt)("meta",{name:"description",content:"Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate pages, components, directives, services, and more."})),(0,i.kt)("p",null,"Create Pages, Components, & Angular Features"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic generate [type] [name]\n")),(0,i.kt)("p",null,"Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate features such as ",(0,i.kt)("inlineCode",{parentName:"p"},"pages"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"components"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"directives"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),", and more."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a full list of available types, use ",(0,i.kt)("inlineCode",{parentName:"li"},"npx ng g --help")),(0,i.kt)("li",{parentName:"ul"},"For a list of options for a types, use ",(0,i.kt)("inlineCode",{parentName:"li"},"npx ng g <type> --help"))),(0,i.kt)("p",null,"You can specify a path to nest your feature within any number of subdirectories. For example, specify a name of ",(0,i.kt)("inlineCode",{parentName:"p"},'"pages/New Page"')," to generate page files at ",(0,i.kt)("strong",{parentName:"p"},"src/app/pages/new-page/"),"."),(0,i.kt)("p",null,"To test a generator before file modifications are made, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry-run")," option."),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"The type of feature (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"directive"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),")"),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"The name/path of the feature being generated"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic generate \n$ ionic generate page\n$ ionic generate page contact\n$ ionic generate component contact/form\n$ ionic generate component login-form --change-detection=OnPush\n$ ionic generate directive ripple --skip-import\n$ ionic generate service api/user\n")))}m.isMDXComponent=!0}}]);