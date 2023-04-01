"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[19114],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(87462),a=t(67294),o=t(72389),l=t(79443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(89521),c=t(86010),s="tabItem_1uMI";function p(e){var n,t,r,o=e.lazy,l=e.block,p=e.defaultValue,f=e.values,m=e.groupId,d=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),k=h.tabGroupChoices,x=h.setTabGroupChoices,O=(0,a.useState)(y),w=O[0],T=O[1],E=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=k[m];null!=N&&N!==w&&b.some((function(e){return e.value===N}))&&T(N)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),r=b[t].value;r!==w&&(P(n),T(r),null!=m&&x(m,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},d)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":w===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:C,onClick:C},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function f(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},89838:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return f},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=t(26396),i=t(58215),u=["components"],c={},s=void 0,p={unversionedId:"developing/config/per-platform-fallback/index",id:"version-v6/developing/config/per-platform-fallback/index",isDocsHomePage:!1,title:"index",description:"<Tabs",source:"@site/versioned_docs/version-v6/developing/config/per-platform-fallback/index.md",sourceDirName:"developing/config/per-platform-fallback",slug:"/developing/config/per-platform-fallback/index",permalink:"/docs/v6/developing/config/per-platform-fallback/index",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/developing/config/per-platform-fallback/index.md",tags:[],version:"v6",frontMatter:{}},f=[],m={toc:f};function d(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{groupId:"per-platform-fallback-config",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { isPlatform, IonicModule } from '@ionic/angular';\n\nconst getConfig = () => {\n  if (isPlatform('hybrid')) {\n    return {\n      tabButtonLayout: 'label-hide'\n    }\n  }\n\n  return {\n    tabButtonLayout: 'icon-top'\n  };\n}\n@NgModule({\n  ...\n  imports: [\n    IonicModule.forRoot(getConfig())\n  ],\n  ...\n});\n"))),(0,o.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { isPlatform, setupIonicReact } from '@ionic/react';\n\nconst getConfig = () => {\n  if (isPlatform('hybrid')) {\n    return {\n      tabButtonLayout: 'label-hide'\n    }\n  }\n  \n  return {\n    tabButtonLayout: 'icon-top'\n  };\n};\n\nsetupIonicReact(getConfig());\n\n"))),(0,o.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},"import { IonicVue, isPlatform } from '@ionic/vue';\n\nconst getConfig = () => {\n  if (isPlatform('hybrid')) {\n    return {\n      tabButtonLayout: 'label-hide'\n    }\n  }\n  \n  return {\n    tabButtonLayout: 'icon-top'\n  };\n};\n\ncreateApp(App).use(IonicVue, getConfig());\n")))))}d.isMDXComponent=!0}}]);