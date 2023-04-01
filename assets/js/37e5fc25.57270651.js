"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[61301],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98806:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],u={},l="Routing and Navigation",s={unversionedId:"studio/guides/routing-and-navigation",id:"studio/guides/routing-and-navigation",isDocsHomePage:!1,title:"Routing and Navigation",description:"A key part of developing Ionic apps is setting up routing and ensuring fluid navigation between pages.",source:"@site/docs/studio/guides/routing-and-navigation.md",sourceDirName:"studio/guides",slug:"/studio/guides/routing-and-navigation",permalink:"/docs/studio/guides/routing-and-navigation",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/studio/guides/routing-and-navigation.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Quick Tips",id:"quick-tips",children:[{value:"Adding a New Page",id:"adding-a-new-page",children:[],level:3},{value:"Using a Page in Multiple Places",id:"using-a-page-in-multiple-places",children:[],level:3},{value:"Using RouterLink",id:"using-routerlink",children:[],level:3}],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"routing-and-navigation"},"Routing and Navigation"),(0,r.kt)("p",null,"A key part of developing Ionic apps is setting up routing and ensuring fluid navigation between pages."),(0,r.kt)("p",null,"The Ionic Framework docs have a ",(0,r.kt)("a",{parentName:"p",href:"/docs/angular/navigation"},"great primer")," on Angular routing and navigation."),(0,r.kt)("h2",{id:"quick-tips"},"Quick Tips"),(0,r.kt)("p",null,"The following tips assume you already know the basics about Angular routing."),(0,r.kt)("h3",{id:"adding-a-new-page"},"Adding a New Page"),(0,r.kt)("p",null,"When you add a new Page in Ionic Studio, it is automatically added to the routing configuration inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"app-routing.module.ts"),"."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Page added to App Routing Module",src:"/img/studio/ss-page-routing-module.png"})),(0,r.kt)("p",null,'If you\'d like to change where this page is "located", you might want to move the Route into a different routing or module file.'),(0,r.kt)("h3",{id:"using-a-page-in-multiple-places"},"Using a Page in Multiple Places"),(0,r.kt)("p",null,"You can use the same page in multiple places by ensuring that a route exists for it from those locations. For instance, if you'd like the \"Detail\" Page to be accessible inside of Tab1 of your application as well as Tab2, you'd want a ",(0,r.kt)("inlineCode",{parentName:"p"},"/detail")," declaration in the router for both Tab1 and Tab2."),(0,r.kt)("h3",{id:"using-routerlink"},"Using RouterLink"),(0,r.kt)("p",null,"You should be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[routerLink]=\"['/tabs','tab1']\"")," style of navigation when trying to make a button or list-item (or other component) link to a different page."),(0,r.kt)("p",null,"If this throws an error, you need to ensure that RouterModule is included in your pages module."))}p.isMDXComponent=!0}}]);