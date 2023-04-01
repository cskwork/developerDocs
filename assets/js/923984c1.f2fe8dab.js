"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[59043],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],l={title:"ionic config set",sidebar_label:"config set"},c=void 0,p={unversionedId:"cli/commands/config-set",id:"cli/commands/config-set",isDocsHomePage:!1,title:"ionic config set",description:"ionic config set: App Command to Write Configuration Values",source:"@site/docs/cli/commands/config-set.md",sourceDirName:"cli/commands",slug:"/cli/commands/config-set",permalink:"/docs/cli/commands/config-set",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/config/set.ts",tags:[],version:"current",frontMatter:{title:"ionic config set",sidebar_label:"config set"},sidebar:"cli",previous:{title:"config get",permalink:"/docs/cli/commands/config-get"},next:{title:"config unset",permalink:"/docs/cli/commands/config-unset"}},s=[{value:"property",id:"property",children:[],level:3},{value:"value",id:"value",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Advanced Options",id:"advanced-options",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"ionic config set: App Command to Write Configuration Values"),(0,r.kt)("meta",{name:"description",content:"ionic config sets config values on Ionic apps. This command writes configuration values to the project's ./ionic.config.json file. Read to learn more."})),(0,r.kt)("p",null,"Set config values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config set [property] [value] [options]\n")),(0,r.kt)("p",null,"This command writes configuration values to the project's ",(0,r.kt)("strong",{parentName:"p"},"./ionic.config.json")," file. It can also operate on the global CLI configuration (",(0,r.kt)("strong",{parentName:"p"},"~/.ionic/config.json"),") using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,r.kt)("p",null,"For nested properties, separate nest levels with dots. For example, the property name ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.cordova")," will look in the ",(0,r.kt)("strong",{parentName:"p"},"integrations")," object for the ",(0,r.kt)("strong",{parentName:"p"},"cordova")," property."),(0,r.kt)("p",null,"For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--root")," option."),(0,r.kt)("p",null,"This command will attempt to coerce ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," into a suitable JSON type. If it is JSON-parsable, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"123"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", etc., then it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--json"),", which will error with non-JSON values."),(0,r.kt)("p",null,"By default, if ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--force"),"."),(0,r.kt)("h3",{id:"property"},"property"),(0,r.kt)("p",null,"The property name you wish to set"),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"The new value of the given property"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--global"),": Use global CLI config (or ",(0,r.kt)("inlineCode",{parentName:"li"},"-g"),")\n")),(0,r.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--json"),": Always interpret ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," as JSON\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--force"),": Always overwrite existing values\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--root"),": Operate on root of ",(0,r.kt)("strong",{parentName:"li"},"./ionic.config.json"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic config set name newAppName\n$ ionic config set name "\\"newAppName\\"" --json\n$ ionic config set -g interactive false\n')))}m.isMDXComponent=!0}}]);