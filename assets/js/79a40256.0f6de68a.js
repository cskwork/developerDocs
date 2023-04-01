"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[61155],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),r=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),u=t(86010),d="tabItem_1uMI";function p(e){var n,t,a,o=e.lazy,i=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),f=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(y),T=N[0],x=N[1],I=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=f[m];null!=C&&C!==T&&b.some((function(e){return e.value===C}))&&x(C)}var O=function(e){var n=e.currentTarget,t=I.indexOf(n),a=b[t].value;a!==T&&(E(n),x(a),null!=m&&w(m,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},b.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":T===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:O,onClick:O},null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},55820:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=function(e){var n=(0,a.useState)(e?"loading":"idle"),t=n[0],r=n[1];return(0,a.useEffect)((function(){if(e){var n=document.querySelector('script[src="'+e+'"]');if(n)r(n.getAttribute("data-status"));else{(n=document.createElement("script")).src=e,n.async=!0,n.setAttribute("data-status","loading"),document.body.appendChild(n);var t=function(e){n.setAttribute("data-status","load"===e.type?"ready":"error")};n.addEventListener("load",t),n.addEventListener("error",t)}var a=function(e){r("load"===e.type?"ready":"error")};return n.addEventListener("load",a),n.addEventListener("error",a),function(){n&&(n.removeEventListener("load",a),n.removeEventListener("error",a))}}r("idle")}),[e]),t};var o=function(e){return r("https://static.codepen.io/assets/embed/ei.js"),a.createElement("div",{className:"codepen","data-height":e.height,"data-theme-id":e.theme,"data-default-tab":e.defaultTab,"data-user":e.user,"data-slug-hash":e.slug,"data-preview":e.preview?"true":"false","data-pen-title":e.penTitle,"no-prerender":"true"})}},34401:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return v}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(55820),l=t(26396),s=t(58215),u=["components"],d={title:"Keyboard"},p=void 0,c={unversionedId:"developing/keyboard",id:"version-v6/developing/keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard",source:"@site/versioned_docs/version-v6/developing/keyboard.md",sourceDirName:"developing",slug:"/developing/keyboard",permalink:"/docs/v6/developing/keyboard",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/developing/keyboard.md",tags:[],version:"v6",frontMatter:{title:"Keyboard"},sidebar:"version-v6/docs",previous:{title:"Hardware Back Button",permalink:"/docs/v6/developing/hardware-back-button"},next:{title:"Config",permalink:"/docs/v6/developing/config"}},m=[{value:"inputmode",id:"inputmode",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"enterkeyhint",id:"enterkeyhint",children:[{value:"Usage",id:"usage-1",children:[],level:3}],level:2},{value:"Dark Mode",id:"dark-mode",children:[],level:2},{value:"Hiding the Accessory Bar",id:"hiding-the-accessory-bar",children:[],level:2},{value:"Keyboard Lifecycle Events",id:"keyboard-lifecycle-events",children:[{value:"Usage",id:"usage-2",children:[],level:3}],level:2}],h={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard"),(0,o.kt)("meta",{name:"description",content:"Accounting for an on-screen keyboard is a common developer roadblock. This guide introduces the tools available for managing on-screen keyboards in mobile apps."})),(0,o.kt)("p",null,"Customizing and accounting for the presence of an on-screen keyboard are two common roadblocks developers face when building mobile apps and PWAs. This guide will provide an introduction to the various tools available for managing the on-screen keyboard in your application."),(0,o.kt)("h2",{id:"inputmode"},"inputmode"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode")," attribute allows developers to specify what type of data might be entered into an input. This will prompt the browser to show a keyboard that includes buttons relevant to what the user may enter. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},'inputmode="email"')," will display a keyboard with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," key as well as other optimizations for entering emails."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode")," is a global attribute, it can be used on Ionic components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-textarea")," in addition to regular input elements."),(0,o.kt)("p",null,"Inputs that ",(0,o.kt)("em",{parentName:"p"},"require")," a certain data type should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute instead. For example, inputs that require an email should use ",(0,o.kt)("inlineCode",{parentName:"p"},'type="email"')," rather than specifying an ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode.")," This is because the data that will be entered is always going to be in the form of an email. On the other hand, if the input accepts an email or a username, using ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode=\u201demail\u201d")," is appropriate because the data being entered is not always going to be an email address."),(0,o.kt)("p",null,"For a list of accepted values, see the ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode",target:"_blank",rel:"noreferrer"},"inputmode Documentation"),"."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"javascript",groupId:"framework",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Username or Email</IonLabel>\n  <IonInput inputmode="email"></IonInput>\n</IonItem>\n\n<IonItem>\n  <IonLabel>Enter a number</IonLabel>\n  <IonTextarea inputmode="numeric"></IonTextarea>\n</IonItem>\n'))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n')))),(0,o.kt)(i.Z,{user:"ionic",slug:"abvJVVv",height:"400",mdxType:"Codepen"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inputmode")," attribute is supported on devices running Chrome 66+ and iOS Safari 12.2+: ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/#search=inputmode"},"https://caniuse.com/#search=inputmode")))),(0,o.kt)("h2",{id:"enterkeyhint"},"enterkeyhint"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint"),' attribute allows developers to specify what type of action label or icon should be shown for the "Enter" key. Using ',(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," lets the user know what will happen when they tap the \u201cEnter\u201d key. The value that should be specified here depends on the context of what the user is doing. For example, if the user is typing into a searchbox, developers should ensure that the input has ",(0,o.kt)("inlineCode",{parentName:"p"},'enterkeyhint="search"'),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," is a global attribute, it can be used on Ionic components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-textarea")," in addition to regular input elements."),(0,o.kt)("p",null,"For a list of accepted values, see the ",(0,o.kt)("a",{href:"https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute",target:"_blank",rel:"noreferrer"},"enterkeyhint Standard"),"."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)(l.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Enter search query</IonLabel>\n  <IonInput enterkeyhint="search" type="search"></IonInput>\n</IonItem>\n'))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n')))),(0,o.kt)(i.Z,{user:"ionic",slug:"GRpWyRB",height:"350",mdxType:"Codepen"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+."))),(0,o.kt)("h2",{id:"dark-mode"},"Dark Mode"),(0,o.kt)("p",null,"By default the keyboard theme is determined by the OS. For example, if dark mode is enabled on iOS, the keyboard in your app will appear with a dark theme even if your application does not have a dark theme in its CSS."),(0,o.kt)("p",null,"When running an app in a mobile web browser or as a PWA there is no way to force the keyboard to appear with a certain theme."),(0,o.kt)("p",null,"When running an app in Capacitor or Cordova, it is possible to force the keyboard to appear with a certain theme. For more information regarding this configuration, see the ",(0,o.kt)("a",{href:"https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-",target:"_blank"},"Capacitor Keyboard Documentation"),"."),(0,o.kt)("h2",{id:"hiding-the-accessory-bar"},"Hiding the Accessory Bar"),(0,o.kt)("p",null,"When running any kind of web based application, iOS will show an accessory bar above the keyboard. This allows users to move to the next or previous inputs as well as close the keyboard."),(0,o.kt)("p",null,"When running an app in a mobile web browser or as a PWA there is no way to hide the accessory bar."),(0,o.kt)("p",null,"When running an app in Capacitor or Cordova, it is possible to hide the accessory bar. For more information regarding this configuration, see the ",(0,o.kt)("a",{href:"https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-",target:"_blank"},"Capacitor Keyboard Documentation"),"."),(0,o.kt)("h2",{id:"keyboard-lifecycle-events"},"Keyboard Lifecycle Events"),(0,o.kt)("p",null,"Detecting the presence of an on-screen keyboard is useful for adjusting the positioning of an input that would otherwise be hidden by the keyboard. For Capacitor and Cordova apps, developers typically rely on native keyboard plugins to listen for the keyboard lifecycle events. For apps running in a mobile browser or as a PWA, developers can use the ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API",rel:"noreferrer",target:"_blank"},"Visual Viewport API")," where supported. Ionic Framework wraps both of these approaches and emits ",(0,o.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidShow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidHide")," events on the ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),". The event payload for ",(0,o.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidShow")," contains an approximation of the keyboard height in pixels."),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)(l.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.addEventListener('ionKeyboardDidShow', ev => {\n  const { keyboardHeight } = ev;\n  // Do something with the keyboard height such as translating an input above the keyboard.\n});\n\nwindow.addEventListener('ionKeyboardDidHide', () => {\n  // Move input back to original location\n});\n"))),(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Platform } from '@ionic/angular';\n\n...\n\nconstructor(private platform: Platform) {\n  this.platform.keyboardDidShow.subscribe(ev => {\n    const { keyboardHeight } = ev;\n    // Do something with the keyboard height such as translating an input above the keyboard.\n  });\n\n  this.platform.keyboardDidHide.subscribe(() => {\n    // Move input back to original location\n  });\n}\n"))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useKeyboardState } from '@ionic/react-hooks/keyboard';\n\n...\n\nconst { isOpen, keyboardHeight } = useKeyboardState();\n\n// Do something with the keyboard height such as translating an input above the keyboard\n"))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useKeyboard } from '@ionic/vue';\nimport { watch } from 'vue';\n\n...\n\nconst { isOpen, keyboardHeight } = useKeyboard();\n\nwatch(keyboardHeight, () => {\n  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);\n});\n\n\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For apps running in a mobile web browser or as a PWA, Keyboard Lifecycle Events are only supported on Chrome 62+ and iOS Safari 13.0+."))))}v.isMDXComponent=!0}}]);