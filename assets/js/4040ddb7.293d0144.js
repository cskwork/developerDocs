"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[14168],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Network Capacitor Plugin API",description:"The Network API provides network and connectivity information.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/src/definitions.ts",sidebar_label:"Network"},s="@capacitor/network",c={unversionedId:"native/network",id:"version-v6/native/network",isDocsHomePage:!1,title:"Network Capacitor Plugin API",description:"The Network API provides network and connectivity information.",source:"@site/versioned_docs/version-v6/native/network.md",sourceDirName:"native",slug:"/native/network",permalink:"/docs/v6/native/network",editUrl:"https://github.com/ionic-team/capacitor-plugins/edit/main/network/README.md",tags:[],version:"v6",frontMatter:{title:"Network Capacitor Plugin API",description:"The Network API provides network and connectivity information.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/src/definitions.ts",sidebar_label:"Network"},sidebar:"version-v6/native",previous:{title:"Motion",permalink:"/docs/v6/native/motion"},next:{title:"Preferences",permalink:"/docs/v6/native/preferences"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"API",id:"api",children:[{value:"getStatus()",id:"getstatus",children:[],level:3},{value:"addListener(&#39;networkStatusChange&#39;, ...)",id:"addlistenernetworkstatuschange-",children:[],level:3},{value:"removeAllListeners()",id:"removealllisteners",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"ConnectionStatus",id:"connectionstatus",children:[],level:4},{value:"PluginListenerHandle",id:"pluginlistenerhandle",children:[],level:4}],level:3},{value:"Type Aliases",id:"type-aliases",children:[{value:"ConnectionType",id:"connectiontype",children:[],level:4},{value:"ConnectionStatusChangeListener",id:"connectionstatuschangelistener",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"capacitornetwork"},"@capacitor/network"),(0,i.kt)("p",null,"The Network API provides network and connectivity information."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @capacitor/network\nnpx cap sync\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Network } from '@capacitor/network';\n\nNetwork.addListener('networkStatusChange', status => {\n  console.log('Network status changed', status);\n});\n\nconst logCurrentNetworkStatus = async () => {\n  const status = await Network.getStatus();\n\n  console.log('Network status:', status);\n};\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("docgen-index",null,(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"getStatus()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#addlistenernetworkstatuschange"},(0,i.kt)("inlineCode",{parentName:"a"},"addListener('networkStatusChange', ...)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#removealllisteners"},(0,i.kt)("inlineCode",{parentName:"a"},"removeAllListeners()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#type-aliases"},"Type Aliases")))),(0,i.kt)("docgen-api",null,(0,i.kt)("h3",{id:"getstatus"},"getStatus()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getStatus() => Promise<ConnectionStatus>\n")),(0,i.kt)("p",null,"Query the current status of the network connection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("code",null,"Promise","<",(0,i.kt)("a",{href:"#connectionstatus"},"ConnectionStatus"),">")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addlistenernetworkstatuschange-"},"addListener('networkStatusChange', ...)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"addListener(eventName: 'networkStatusChange', listenerFunc: ConnectionStatusChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle\n")),(0,i.kt)("p",null,"Listen for changes in the network connection."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"eventName"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'networkStatusChange'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"listenerFunc"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#connectionstatuschangelistener"},"ConnectionStatusChangeListener")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("code",null,"Promise","<",(0,i.kt)("a",{href:"#pluginlistenerhandle"},"PluginListenerHandle"),">"," & ",(0,i.kt)("a",{href:"#pluginlistenerhandle"},"PluginListenerHandle"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removealllisteners"},"removeAllListeners()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"removeAllListeners() => Promise<void>\n")),(0,i.kt)("p",null,"Remove all listeners (including the network status changes) for this plugin."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"connectionstatus"},"ConnectionStatus"),(0,i.kt)("p",null,"Represents the state and type of the network connection."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prop"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"connected"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether there is an active connection or not."),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"connectionType"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#connectiontype"},"ConnectionType"))),(0,i.kt)("td",{parentName:"tr",align:null},"The type of network connection currently in use. If there is no active network connection, ",(0,i.kt)("inlineCode",{parentName:"td"},"connectionType")," will be ",(0,i.kt)("inlineCode",{parentName:"td"},"'none'"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,i.kt)("h4",{id:"pluginlistenerhandle"},"PluginListenerHandle"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prop"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"remove"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"() =",">"," Promise","<","void",">"))))),(0,i.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h4",{id:"connectiontype"},"ConnectionType"),(0,i.kt)("p",null,"The type of network connection that a device might have."),(0,i.kt)("code",null,"'wifi' | 'cellular' | 'none' | 'unknown'"),(0,i.kt)("h4",{id:"connectionstatuschangelistener"},"ConnectionStatusChangeListener"),(0,i.kt)("p",null,"Callback to receive the status change notifications."),(0,i.kt)("code",null,"(status: ",(0,i.kt)("a",{href:"#connectionstatus"},"ConnectionStatus"),"): void")))}d.isMDXComponent=!0}}]);