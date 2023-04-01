"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[10537],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76083:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={sidebar_label:"Performance",title:"React Performance"},s=void 0,p={unversionedId:"react/performance",id:"version-v6/react/performance",isDocsHomePage:!1,title:"React Performance",description:"React Performance Testing - Using Loops with Ionic App Components",source:"@site/versioned_docs/version-v6/react/performance.md",sourceDirName:"react",slug:"/react/performance",permalink:"/docs/v6/react/performance",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/react/performance.md",tags:[],version:"v6",frontMatter:{sidebar_label:"Performance",title:"React Performance"},sidebar:"version-v6/docs",previous:{title:"Testing",permalink:"/docs/v6/react/testing"},next:{title:"Overview",permalink:"/docs/v6/vue/overview"}},l=[{value:"Loops with Ionic Components",id:"loops-with-ionic-components",children:[],level:2}],m={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"React Performance Testing - Using Loops with Ionic App Components"),(0,a.kt)("meta",{name:"description",content:"React performance testing for Ionic apps. When using loops with Ionic components, we recommend using React's key attribute. Read to learn more."})),(0,a.kt)("h2",{id:"loops-with-ionic-components"},"Loops with Ionic Components"),(0,a.kt)("p",null,"When using loops with Ionic components, we recommend using React's ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," attribute. This allows React to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether."),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," you can provide a stable identity for each loop element so React can track insertions and deletions within the iterator. Below is an example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MyComponent.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport { IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';\n\nexport const MyComponent: React.FC = () => {\n  const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }, ...]);\n\n  return (\n    <IonPage>\n      <IonContent>\n        {items.map(item => {\n          return (\n            <IonItem key={item.id}>\n              <IonLabel>{item.value}</IonLabel>\n            </IonItem>\n          )\n        })}\n      </IonContent>\n    </IonPage>\n  )\n}\n")),(0,a.kt)("p",null,"In this example, we have an array of objects called ",(0,a.kt)("inlineCode",{parentName:"p"},"items"),". Each object contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," attribute, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"item.id")," for each object. This ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is used to provide a stable identity for each loop element."),(0,a.kt)("p",null,"For more information on how React renders lists using ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," see: ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"https://reactjs.org/docs/lists-and-keys.html")))}u.isMDXComponent=!0}}]);