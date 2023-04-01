"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[71410],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={},s="Virtual Scroll",c={unversionedId:"react/virtual-scroll",id:"react/virtual-scroll",isDocsHomePage:!1,title:"Virtual Scroll",description:"ion-virtual-scroll was deprecated in v6.0.0 and removed in v7.0.0. We recommend using the Virtuoso package detailed below.",source:"@site/docs/react/virtual-scroll.md",sourceDirName:"react",slug:"/react/virtual-scroll",permalink:"/docs/react/virtual-scroll",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/virtual-scroll.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Usage with Ionic Components",id:"usage-with-ionic-components",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"virtual-scroll"},"Virtual Scroll"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Looking for ",(0,i.kt)("inlineCode",{parentName:"h5"},"ion-virtual-scroll"),"?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ion-virtual-scroll")," was deprecated in v6.0.0 and removed in v7.0.0. We recommend using the Virtuoso package detailed below."))),(0,i.kt)("p",null,"One virtual scrolling solution to consider for your Ionic React app is ",(0,i.kt)("a",{parentName:"p",href:"https://virtuoso.dev/"},"Virtuoso"),". This guide will go over how to install ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtuoso")," into your Ionic React application and use it with other Ionic components."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To setup the virtual scroller, first install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-virtuoso"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-virtuoso\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"There are a few components that Virtuoso includes, but this example will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtuoso")," component. This component should be added inside of your ",(0,i.kt)("inlineCode",{parentName:"p"},"IonContent")," component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Virtuoso } from 'react-virtuoso';\nimport { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';\nconst Home: React.FC = () => (\n  <IonPage>\n    <IonContent>\n      <Virtuoso\n        style={{ height: '100%' }}\n        totalCount={100}\n        itemContent={(index) => {\n          return (\n            <div style={{ height: '56px' }}>\n              <IonItem>\n                <IonAvatar slot=\"start\">\n                  <img src=\"https://picsum.photos/seed/picsum/40/40\" />\n                </IonAvatar>\n                <IonLabel>{index}</IonLabel>\n              </IonItem>\n            </div>\n          );\n        }}\n      />\n    </IonContent>\n  </IonPage>\n);\nexport default Home;\n")),(0,i.kt)("p",null,"After adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtuoso")," component to our page, we need to define the size of the virtual scroll container. In this case, we want the container to take up the full height of the screen which we can do by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"style={{ height: '100%' }}"),"."),(0,i.kt)("p",null,"Next, we want to define the total number of items to render via the ",(0,i.kt)("inlineCode",{parentName:"p"},"totalCount")," property."),(0,i.kt)("p",null,"From there, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"itemContent")," property to pass a function that will be called to render each item in our virtual scroll content."),(0,i.kt)("p",null,"An important thing to note here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," that wraps our ",(0,i.kt)("inlineCode",{parentName:"p"},"IonItem")," component. When lazy loading Ionic components, there may be a few frames where the component is loaded but the styles have not loaded in. When this happens, the component's dimension will be ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", and Virtuoso may throw an error. This is because Virtuoso needs distinct positions for each item it renders, and it cannot determine that when a component's dimension is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("h2",{id:"usage-with-ionic-components"},"Usage with Ionic Components"),(0,i.kt)("p",null,"Ionic Framework requires that features such as collapsible large titles, ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-infinite-scroll"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-refresher"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-reorder-group")," be used within an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-content"),". To use these experiences with virtual scrolling, you must add the ",(0,i.kt)("inlineCode",{parentName:"p"},".ion-content-scroll-host")," class to the virtual scroll viewport."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<IonPage>\n  <IonContent scrollY={false}>\n    <Virtuoso className="ion-content-scroll-host">{/* Your existing content and configurations */}</Virtuoso>\n  </IonContent>\n</IonPage>\n')),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"This guide only covers a small portion of what ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtuoso")," is capable of. For more details, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://virtuoso.dev/"},"Virtuoso documentation"),"."))}d.isMDXComponent=!0}}]);