"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[48813],{82238:function(e,t,n){n.d(t,{Z:function(){return z}});var o,r,a=n(15861),l=n(87757),i=n.n(l),c=n(67294),s=n(44996),u=n(79979),p="Ionic Docs Example",d=function(){var e=(0,a.Z)(i().mark((function e(t,n){var o,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="v"+n,e.next=3,Promise.all(t.map((function(e){return fetch("/docs/code/stackblitz/"+o+"/"+e)})));case 3:return r=e.sent,e.next=6,Promise.all(r.map((function(e){return e.text()})));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(t,n){var o,r,a,l,c,s,m,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(["html/index.ts",null!=n&&n.includeIonContent?"html/index.withContent.html":"html/index.html","html/variables.css","html/package.json"],n.version);case 2:a=e.sent,l=a[0],c=a[1],s=a[2],m=a[3],h={};try{h=Object.assign({},h,JSON.parse(m).dependencies)}catch(i){console.error("Failed to parse package.json contents",i)}u.Z.openProject({template:"typescript",title:null!=(o=null==n?void 0:n.title)?o:p,description:null!=(r=null==n?void 0:n.description)?r:"",files:Object.assign({"index.html":c.replace(/{{ TEMPLATE }}/g,t).replace(/{{ MODE }}/g,null==n?void 0:n.mode),"index.ts":l,"theme/variables.css":s},null==n?void 0:n.files),dependencies:h});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(i().mark((function e(t,n){var o,r,a,l,c,s,m,h,v,f,g,k,x,b,C,w;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(["angular/main.ts","angular/app.module.ts","angular/app.component.ts","angular/app.component.css",null!=n&&n.includeIonContent?"angular/app.component.withContent.html":"angular/app.component.html","angular/example.component.ts","angular/styles.css","angular/global.css","angular/variables.css","angular/angular.json","angular/tsconfig.json","angular/package.json"],n.version);case 2:a=e.sent,l=a[0],c=a[1],s=a[2],m=a[3],h=a[4],v=a[5],f=a[6],g=a[7],k=a[8],x=a[9],b=a[10],C=a[11],n.angularModuleOptions&&(n.angularModuleOptions.imports&&(c=n.angularModuleOptions.imports.join("\n")+"\n"+c),n.angularModuleOptions.declarations&&(c=c.replace("/* CUSTOM_DECLARATIONS */",n.angularModuleOptions.declarations.map((function(e){return"\n  "+e})).join(",")))),c=c.replace("{{ MODE }}",null==n?void 0:n.mode),w={};try{w=Object.assign({},w,JSON.parse(C).dependencies)}catch(i){console.error("Failed to parse package.json contents",i)}u.Z.openProject({template:"angular-cli",title:null!=(o=null==n?void 0:n.title)?o:p,description:null!=(r=null==n?void 0:n.description)?r:"",files:Object.assign({"src/main.ts":l,"src/polyfills.ts":"import 'zone.js/dist/zone';","src/app/app.module.ts":c,"src/app/app.component.ts":s,"src/app/app.component.html":h,"src/app/example.component.ts":v,"src/app/example.component.html":t,"src/app/example.component.css":"","src/app/app.component.css":m,"src/index.html":"<app-root></app-root>","src/styles.css":f,"src/global.css":g,"src/theme/variables.css":k,"angular.json":x,"tsconfig.json":b},null==n?void 0:n.files),dependencies:w});case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(t,n){var o,r,a,l,c,s,m,h,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(["react/index.tsx",null!=n&&n.includeIonContent?"react/app.withContent.tsx":"react/app.tsx","react/variables.css","react/tsconfig.json","react/package.json","react/package-lock.json","react/index.html"],n.version);case 2:a=e.sent,a[0],l=a[1],c=a[2],s=a[3],m=a[4],h=a[5],v=a[6],l=l.replace("{{ MODE }}",null==n?void 0:n.mode),u.Z.openProject({template:"node",title:null!=(o=null==n?void 0:n.title)?o:p,description:null!=(r=null==n?void 0:n.description)?r:"",files:Object.assign({"public/index.html":v,"src/App.tsx":l,"src/main.tsx":t,"src/theme/variables.css":c,"tsconfig.json":s,"package.json":m,"package-lock.json":h},null==n?void 0:n.files,{".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'})});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(i().mark((function e(t,n){var o,r,a,l,c,s,m,h,v,f,g,k,x;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(["vue/package.json","vue/package-lock.json","vue/index.html","vue/variables.css","vue/vite.config.ts","vue/main.ts",null!=n&&n.includeIonContent?"vue/App.withContent.vue":"vue/App.vue","vue/tsconfig.json","vue/tsconfig.node.json","vue/env.d.ts"],n.version);case 2:a=e.sent,l=a[0],c=a[1],s=a[2],m=a[3],h=a[4],v=a[5],f=a[6],g=a[7],k=a[8],x=a[9],v=v.replace("{{ MODE }}",null==n?void 0:n.mode),u.Z.openProject({template:"node",title:null!=(o=null==n?void 0:n.title)?o:p,description:null!=(r=null==n?void 0:n.description)?r:"",files:Object.assign({"src/App.vue":f,"src/components/Example.vue":t,"src/main.ts":v,"src/env.d.ts":x,"src/theme/variables.css":m,"index.html":s,"vite.config.ts":h,"package.json":l,"package-lock.json":c,"tsconfig.json":g,"tsconfig.node.json":k},null==n?void 0:n.files,{".stackblitzrc":'{\n        "startCommand": "yarn run dev"\n      }'})});case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();!function(e){e.JavaScript="javascript",e.Angular="angular",e.React="react",e.Vue="vue"}(o||(o={})),function(e){e.iOS="ios",e.MD="md"}(r||(r={}));var g=n(85350),k=n(30860),x=(n(18846),n(87462)),b=n(72389),C=n(89521),w=n(86010),y="tabNav_O9N7",E="tabList_SFKW",N="tabItem_J8T7",T="tabIcon_LTl1",Z="tabNavItem_1Mk5",_="tabNavItemLeft_ZRax",j="tabNavButton_1yfP";function M(e){var t,n,o,r=e.lazy,a=e.block,l=e.defaultValue,i=e.values,s=(e.groupId,e.className),u=(0,c.useState)(!1),p=u[0],d=u[1],m=(0,c.useState)(!1),h=m[0],v=m[1],f=(0,c.createRef)(),g=c.Children.map(e.children,(function(e){if((0,c.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=i?i:g.map((function(e){var t=e.props,n=t.value,o=t.label,r=t.icon;return{value:n,label:o,attributes:t.attributes,icon:r}})),b=(0,C.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var M=null===l?l:null!=(t=null!=l?l:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==M&&!k.some((function(e){return e.value===M})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+M+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=(0,c.useState)(M),S=I[0],L=I[1],D=[],O=(0,C.o5)().blockElementScrollPositionUntilNextRender,P=function(e){var t=e.currentTarget,n=D.indexOf(t),o=k[n].value;o!==S&&(O(t),L(o))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=D.indexOf(e.currentTarget)+1;n=D[o]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};(0,c.useEffect)((function(){var e,t,n;d((null==(e=f.current)?void 0:e.scrollLeft)>40),v((null==(t=f.current)?void 0:t.scrollWidth)>(null==(n=f.current)?void 0:n.offsetWidth))}),[]);var A=void 0===k.find((function(e){return e.value===S})),R=function(e){return A?e===k[0].value:e===S};return c.createElement("div",{className:(0,w.Z)("tabs-container",E)},c.createElement("div",{className:(0,w.Z)("tabs-nav",y)},c.createElement("ul",{ref:f,role:"tablist","aria-orientation":"horizontal",className:(0,w.Z)("tabs",{"tabs--block":a},s),onScroll:function(){var e,t,n;d((null==(e=f.current)?void 0:e.scrollLeft)>40),v((null==(t=f.current)?void 0:t.scrollWidth)>(null==(n=f.current)?void 0:n.offsetWidth))}},p&&c.createElement("div",{className:(0,w.Z)("tabs__nav-item",Z,_)},c.createElement("button",{className:(0,w.Z)("tabs__nav-button",j),onClick:function(){f.current.scrollTo({left:f.current.scrollLeft-150,behavior:"smooth"})}},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},c.createElement("polyline",{points:"328 112 184 256 328 400",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48px"})))),k.map((function(e){var t=e.value,n=e.label,o=e.icon,r=e.attributes,a=R(t);return c.createElement("li",(0,x.Z)({role:"tab",tabIndex:a?0:-1,"aria-selected":a,key:t,ref:function(e){return D.push(e)},onKeyDown:H,onFocus:P,onClick:P},r,{className:(0,w.Z)("tabs__item",N,null==r?void 0:r.className,{"tabs__item--active":a})}),o&&c.createElement("span",{className:(0,w.Z)("tabs__icon",T)},o),null!=n?n:t)})),h&&c.createElement("div",{className:(0,w.Z)("tabs__nav-item",Z)},c.createElement("button",{className:(0,w.Z)("tabs__nav-button",j),onClick:function(){f.current.scrollTo({left:f.current.scrollLeft+150,behavior:"smooth"})}},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},c.createElement("polyline",{points:"184 112 328 256 184 400",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48px"})))))),r?(0,c.cloneElement)(g.filter((function(e){return R(e.props.value)}))[0],{className:"margin-top--md"}):c.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,c.cloneElement)(e,{key:t,className:e.props.className+" "+(R(e.props.value)?"":"hidden")})}))))}function I(e){var t=(0,b.Z)();return c.createElement(M,(0,x.Z)({key:String(t)},e))}var S=n(58215),L=function(){return c.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M3.75 8.625L0.75 6L3.75 3.375",stroke:"#EB4700",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{d:"M8.25 8.625L11.25 6L8.25 3.375",stroke:"#EB4700",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},D=function(){return c.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.78201 5.84221V7.56845C7.05944 7.71231 7.38757 7.82017 7.76639 7.8921C8.1452 7.96403 8.54444 8 8.96417 8C9.37323 8 9.7618 7.96045 10.1299 7.88131C10.4981 7.80221 10.8209 7.67183 11.0983 7.49021C11.3758 7.30862 11.5954 7.07124 11.7572 6.77814C11.9191 6.48503 12 6.12272 12 5.69117C12 5.37828 11.9538 5.10407 11.8613 4.86852C11.7688 4.63297 11.6354 4.42348 11.4611 4.24007C11.2869 4.05666 11.0779 3.8921 10.8342 3.74645C10.5906 3.60079 10.3158 3.46324 10.0099 3.33379C9.78583 3.24028 9.58486 3.14948 9.40701 3.06138C9.22916 2.97324 9.078 2.88335 8.9535 2.79166C8.829 2.69993 8.73297 2.60283 8.6654 2.50035C8.59783 2.39783 8.56401 2.28186 8.56401 2.15238C8.56401 2.03372 8.59425 1.92672 8.65473 1.83141C8.71521 1.7361 8.80057 1.65431 8.91082 1.58597C9.0211 1.51766 9.15624 1.46459 9.3163 1.42683C9.47639 1.38907 9.6542 1.37021 9.84985 1.37021C9.99211 1.37021 10.1424 1.381 10.3007 1.40255C10.459 1.42414 10.6181 1.45741 10.7782 1.50234C10.9383 1.54731 11.0939 1.60397 11.2451 1.67228C11.3962 1.74062 11.5358 1.81972 11.6639 1.90966V0.29669C11.4042 0.196 11.1206 0.121379 10.8129 0.0728276C10.5052 0.0242758 10.1522 0 9.75382 0C9.34831 0 8.96417 0.0440687 8.60138 0.132172C8.23858 0.220276 7.91935 0.357828 7.64366 0.544828C7.368 0.731862 7.15016 0.970103 6.9901 1.25962C6.83005 1.5491 6.75 1.89524 6.75 2.29803C6.75 2.81231 6.89673 3.25107 7.19018 3.61431C7.4836 3.97752 7.9291 4.285 8.52668 4.53676C8.76143 4.63386 8.98019 4.72914 9.18293 4.82266C9.38567 4.91617 9.56086 5.01328 9.70844 5.11397C9.85606 5.21465 9.97255 5.32434 10.0579 5.44303C10.1433 5.56169 10.186 5.69655 10.186 5.84762C10.186 5.9591 10.1593 6.06248 10.1059 6.15779C10.0526 6.2531 9.97166 6.33579 9.86318 6.40593C9.75471 6.47607 9.61953 6.5309 9.4577 6.57045C9.29584 6.61003 9.10647 6.62979 8.88948 6.62979C8.51956 6.62979 8.15322 6.56417 7.79039 6.4329C7.42759 6.30165 7.09145 6.10476 6.78201 5.84221ZM3.91295 1.58903H6.10227V0.172414H0V1.58903H2.17861V7.89655H3.91295V1.58903Z",fill:"#3178C6"}))},O=function(){return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 512 512"},c.createElement("polygon",{fill:"#33475A",points:"256 144.03 200.51 47.92 121.08 47.92 256 281.61 390.92 47.92 311.49 47.92 256 144.03"}),c.createElement("polygon",{fill:"#3FB27F",points:"409.4 47.92 256 313.61 102.6 47.92 15.74 47.92 256 464.08 496.26 47.92 409.4 47.92"}))},P=function(){return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:"12",width:"12"},c.createElement("path",{d:"M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z",fill:"#3178C6"}))},H=function(){return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:"12",width:"12"},c.createElement("polygon",{points:"5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201",fill:"#1572b6"}),c.createElement("polygon",{points:"16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858",fill:"#33a9dc"}),c.createElement("polygon",{points:"16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191",fill:"#fff"}),c.createElement("polygon",{points:"16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218",fill:"#ebebeb"}),c.createElement("polygon",{points:"19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151",fill:"#fff"}),c.createElement("polygon",{points:"16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935",fill:"#ebebeb"}),c.createElement("polygon",{points:"16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191",fill:"#ebebeb"}))},A=function(){return c.createElement("div",{className:"icon__dots"},c.createElement("svg",{viewBox:"0 0 64 64"},c.createElement("circle",{transform:"translate(32,32)",r:"6"})),c.createElement("svg",{viewBox:"0 0 64 64"},c.createElement("circle",{transform:"translate(32,32)",r:"6"})),c.createElement("svg",{viewBox:"0 0 64 64"},c.createElement("circle",{transform:"translate(32,32)",r:"6"})))},R=function(e){var t=e.isSelected,n=e.handleClick,o=e.title,r=e.label,a=e.disabled,l=c.createElement("button",{title:a?void 0:o,disabled:a,className:"playground__control-button "+(t?"playground__control-button--selected":""),onClick:n,"data-text":r},r);return a?c.createElement(k.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:"Unavailable for "+r},c.createElement("div",null,l)):l},X=function(e){var t=e.language,n=e.usageTarget,r=e.setUsageTarget,a=e.disabled,l=o[t];return c.createElement(R,{isSelected:n===l,handleClick:function(){r(l)},title:"Show "+t+" code",label:t,disabled:a})};function z(e){var t,l=e.code,u=e.title,p=e.description,d=e.src,x=e.size,b=void 0===x?"small":x,C=e.mode,w=e.devicePreview,y=e.includeIonContent,E=void 0===y||y,N=e.version;if(l&&0!==Object.keys(l).length)if(void 0===C||"ios"===C||"md"===C){if(void 0!==N){var T=(0,g.Z)().isDarkTheme,Z=(0,c.useRef)(null),_=(0,c.useRef)(null),j=(0,c.useRef)(null),M=(0,c.useRef)(null),z=void 0!==C?C:r.iOS,W=B[b]||b,q=(0,c.useState)(void 0!==l[o.Angular]?o.Angular:Object.keys(l)[0]),F=q[0],U=q[1],J=(0,c.useState)(z),G=J[0],K=J[1],Y=(0,c.useState)({}),Q=Y[0],$=Y[1],ee=(0,c.useState)(!1),te=ee[0],ne=ee[1],oe=(0,c.useState)(!1),re=oe[0],ae=oe[1],le=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.current||!M.current){e.next=6;break}return e.next=3,Promise.all([V(j.current),V(M.current)]);case 3:t={darkMode:T},j.current&&j.current.contentWindow.postMessage(t),M.current&&M.current.contentWindow.postMessage(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(e,t){"ios"===t?j.current=e:M.current=e,j.current&&M.current&&le()};(0,c.useEffect)((function(){le()}),[T]),(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([V(j.current),V(M.current)]);case 2:ae(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[te]),(0,c.useEffect)((function(){n.e(92799).then(n.bind(n,92799)).then((function(e){return e.defineCustomElement()}))})),(0,c.useEffect)((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&!te&&(ne(!0),e.disconnect())}),{threshold:0});e.observe(Z.current)}));var ce=G===r.iOS,se=G===r.MD,ue=(0,s.Z)(d+"?ionic:mode="+r.iOS),pe=(0,s.Z)(d+"?ionic:mode="+r.MD),de=void 0!==(null==(t=l[F])?void 0:t.files);(0,c.useEffect)((function(){var e={};Object.keys(l).forEach((function(t){if("function"==typeof l[t])e[t]=l[t]({});else if("object"==typeof l[t]){for(var n={},o=0,r=Object.keys(l[t].files);o<r.length;o++){var a=r[o];n[""+a]=l[t].files[a]({})}e[t]=n}})),$(e)}),[]);var me=(0,c.useMemo)((function(){return Object.keys(o).sort()}),[]);return c.createElement("div",{className:"playground",ref:Z},c.createElement("div",{className:"playground__container"},c.createElement("div",{className:"playground__control-toolbar"},c.createElement("div",{className:"playground__control-group"},me.map((function(e){var t=o[e],n=void 0!==l[t];return c.createElement(X,{key:"code-block-"+e,language:e,usageTarget:F,setUsageTarget:U,disabled:!n})}))),c.createElement("div",{className:"playground__control-group"},c.createElement(R,{disabled:C&&"md"===C,isSelected:ce,handleClick:function(){return K(r.iOS)},title:"iOS mode",label:"iOS"}),c.createElement(R,{disabled:C&&"ios"===C,isSelected:se,handleClick:function(){return K(r.MD)},title:"MD mode",label:"MD"})),c.createElement("div",{className:"playground__control-group playground__control-group--end"},c.createElement(k.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:"Open in StackBlitz"},c.createElement("button",{className:"playground__icon-button playground__icon-button--primary",onClick:function(e){var t,n={title:u,description:p,includeIonContent:E,mode:ce?"ios":"md",version:N};if(de){var r=l[F];n.angularModuleOptions=r.angularModuleOptions,n.files=Object.keys(Q[F]).map((function(e){var t;return(t={})[e]=Z.current.querySelector("#"+he(F,e)+" code").outerText,t})).reduce((function(e,t){return Object.assign({},e,t)}),{})}else t=_.current.querySelector("code").outerText;switch(F){case o.Angular:h(t,n);break;case o.JavaScript:m(t,n);break;case o.React:v(t,n);break;case o.Vue:f(t,n)}}},c.createElement("svg",{"aria-hidden":"true",width:"10",height:"14",viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M5.53812 5.91743L7.52915 1L1 8.01835H4.42601L2.42601 13L9 5.91743H5.53812Z",stroke:"#73849A",strokeLinejoin:"round"})))),c.createElement(k.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:de?"For multi-file examples, use the copy buttons on the code blocks":"Copy source code"},c.createElement("button",{className:"playground__icon-button playground__icon-button--primary "+(de?"playground__icon-button--disabled":""),"aria-disabled":de,onClick:function(){de||_.current.querySelector("button").click()}},c.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},c.createElement("path",{d:"M2.06667 9V9C1.47756 9 1 8.52244 1 7.93333V3C1 1.89543 1.89543 1 3 1H7.93333C8.52244 1 9 1.47756 9 2.06667V2.06667",stroke:"current"}),c.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5",stroke:"current"})))),c.createElement(k.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:"Reset demo"},c.createElement("button",{className:"playground__icon-button",onClick:function(){j.current&&j.current.contentWindow.location.reload(),M.current&&M.current.contentWindow.location.reload()}},c.createElement("svg",{"aria-hidden":"true",width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.22215 2.96247C3.0444 2.42025 4.01109 2.13084 5 2.13084C5.63538 2.13084 6.08146 2.15202 6.39321 2.18615C6.68142 2.2177 6.92148 2.26571 7.08584 2.36392C7.17445 2.41686 7.31584 2.52988 7.35221 2.73039C7.38869 2.93151 7.29402 3.07964 7.24155 3.14415C7.18678 3.21149 7.126 3.25445 7.09468 3.275C7.07632 3.28704 7.06001 3.29656 7.04754 3.30345C7.0412 3.30696 7.03557 3.30995 7.03082 3.3124C7.02933 3.31317 7.02792 3.31389 7.0266 3.31456C7.0258 3.31496 7.02503 3.31535 7.02429 3.31572C7.02331 3.31621 7.02238 3.31667 7.0215 3.3171L7.02023 3.31773C7.01994 3.31787 7.01905 3.31831 6.81818 2.91589L7.01905 3.31831C6.79385 3.42779 6.52136 3.33637 6.41043 3.11412C6.40662 3.1065 6.40305 3.09881 6.39972 3.09108C6.36829 3.08669 6.33284 3.08224 6.29298 3.07787C6.02849 3.04892 5.61974 3.02804 5 3.02804C4.1909 3.02804 3.39996 3.26482 2.72721 3.70846C2.05447 4.15209 1.53013 4.78264 1.22049 5.52038C0.910864 6.25812 0.82985 7.0699 0.987699 7.85307C1.14555 8.63625 1.53517 9.35564 2.10729 9.92028C2.67942 10.4849 3.40835 10.8694 4.2019 11.0252C4.99546 11.181 5.81801 11.1011 6.56552 10.7955C7.31304 10.4899 7.95195 9.97241 8.40147 9.30847C8.85098 8.64452 9.09091 7.86394 9.09091 7.06542C9.09091 6.81767 9.29442 6.61682 9.54545 6.61682C9.79649 6.61682 10 6.81767 10 7.06542C10 8.04139 9.70675 8.99544 9.15735 9.80692C8.60794 10.6184 7.82705 11.2509 6.91342 11.6244C5.99979 11.9979 4.99445 12.0956 4.02455 11.9052C3.05464 11.7148 2.16373 11.2448 1.46447 10.5547C0.765206 9.86458 0.289002 8.98532 0.0960758 8.02811C-0.0968502 7.07089 0.00216639 6.07871 0.380605 5.17704C0.759043 4.27536 1.3999 3.50469 2.22215 2.96247Z",fill:"#73849A"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.67859 0.131391C4.8561 -0.0437971 5.1439 -0.0437971 5.32141 0.131391L7.59414 2.37438C7.77165 2.54957 7.77165 2.83361 7.59414 3.00879L5.32141 5.25178C5.1439 5.42697 4.8561 5.42697 4.67859 5.25178C4.50108 5.0766 4.50108 4.79256 4.67859 4.61737L6.6299 2.69159L4.67859 0.765805C4.50108 0.590616 4.50108 0.30658 4.67859 0.131391Z",fill:"#73849A"})))),c.createElement(k.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:"Report an issue"},c.createElement("a",{className:"playground__icon-button",href:"https://github.com/ionic-team/ionic-docs/issues/new/choose","aria-label":"Report an issue",target:"_blank",rel:"noreferrer"},c.createElement("svg",{"aria-hidden":"true",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},c.createElement("path",{d:"M6 0C2.68661 0 0 2.75625 0 6.15268C0 8.87143 1.71964 11.175 4.10357 11.9893C4.14107 11.9973 4.17321 12 4.20536 12C4.42768 12 4.51339 11.8366 4.51339 11.6946C4.51339 11.5473 4.50804 11.1616 4.50536 10.6473C4.28036 10.6982 4.07946 10.7196 3.9 10.7196C2.74554 10.7196 2.48304 9.82232 2.48304 9.82232C2.20982 9.1125 1.81607 8.92232 1.81607 8.92232C1.29375 8.55536 1.81339 8.54464 1.85357 8.54464H1.85625C2.45893 8.59821 2.775 9.18214 2.775 9.18214C3.075 9.70714 3.47679 9.85446 3.83571 9.85446C4.11696 9.85446 4.37143 9.76339 4.52143 9.69375C4.575 9.29732 4.73036 9.02679 4.90179 8.87143C3.57054 8.71607 2.16964 8.18839 2.16964 5.83125C2.16964 5.15893 2.40268 4.60982 2.78571 4.18125C2.72411 4.02589 2.51786 3.39911 2.84464 2.55268C2.84464 2.55268 2.8875 2.53929 2.97857 2.53929C3.19554 2.53929 3.68571 2.62232 4.49464 3.18482C4.97411 3.04821 5.48571 2.98125 5.99732 2.97857C6.50625 2.98125 7.02054 3.04821 7.5 3.18482C8.30893 2.62232 8.79911 2.53929 9.01607 2.53929C9.10714 2.53929 9.15 2.55268 9.15 2.55268C9.47679 3.39911 9.27054 4.02589 9.20893 4.18125C9.59196 4.6125 9.825 5.16161 9.825 5.83125C9.825 8.19375 8.42143 8.71339 7.08482 8.86607C7.29911 9.05625 7.49196 9.43125 7.49196 10.0045C7.49196 10.8268 7.48393 11.4911 7.48393 11.692C7.48393 11.8366 7.56696 12 7.78929 12C7.82143 12 7.85893 11.9973 7.89643 11.9893C10.283 11.175 12 8.86875 12 6.15268C12 2.75625 9.31339 0 6 0Z",fill:"#73849A"})))))),te?[c.createElement("div",{className:"playground__preview"},!re&&c.createElement("div",{className:"playground__loading"},c.createElement(A,null)),w?[c.createElement("div",{className:ce?"frame-visible":"frame-hidden","aria-hidden":ce?null:"true"},c.createElement("device-preview",{mode:"ios"},c.createElement("iframe",{height:W,ref:function(e){return ie(e,"ios")},src:ue}))),c.createElement("div",{className:se?"frame-visible":"frame-hidden","aria-hidden":se?null:"true"},c.createElement("device-preview",{mode:"md"},c.createElement("iframe",{height:W,ref:function(e){return ie(e,"md")},src:pe})))]:[c.createElement("iframe",{height:W,className:ce?"":"frame-hidden",ref:function(e){return ie(e,"ios")},src:ue,"aria-hidden":ce?null:"true"}),c.createElement("iframe",{height:W,className:se?"":"frame-hidden",ref:function(e){return ie(e,"md")},src:pe,"aria-hidden":se?null:"true"})])]:[]),c.createElement("div",{ref:_,className:"playground__code-block"},function(){if(l[F])return de?null==Q[F]?null:c.createElement(I,{className:"playground__tabs"},Object.keys(Q[F]).map((function(e){return c.createElement(S.Z,{className:"playground__tab-item",value:e,label:e,key:e,icon:ve(e)},c.createElement("div",{id:he(F,e)},Q[F][e]))}))):Q[F]}()))}console.warn('You must specify a `version` for the Playground example. For example: <Playground version="7" />')}else console.warn("Invalid mode provided: "+C+'. Accepted values are: "ios" or "md".');else console.warn("No code usage examples provided for this Playground example.");function he(e,t){var n=t;return"playground_"+e+"_"+(n=n.replace(/[^a-zA-Z0-9]/g,"_"))}function ve(e){switch(e.slice(e.lastIndexOf(".")+1)){case"ts":case"tsx":return c.createElement(D,null);case"html":return c.createElement(L,null);case"vue":return c.createElement(O,null);case"css":return c.createElement(H,null);default:return c.createElement(P,null)}}}var B={xsmall:"100px",small:"200px",medium:"400px",large:"600px",xlarge:"800px"},V=function(e){return W(e)?Promise.resolve():new Promise((function(t){e&&e.contentWindow.addEventListener("demoReady",(function(){t()}))}))},W=function(e){return!!e&&!0===e.contentWindow.demoReady}},49679:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(87462),r=n(63366),a=n(67294),l=n(86010),i=n(44996),c=n(39960),s="encapsulationPill_1PgI",u=["type"];function p(e){var t=e.type,n=(0,r.Z)(e,u),p=(0,i.Z)("reference/glossary#"+t);return a.createElement(c.default,(0,o.Z)({to:p},n,{className:(0,l.Z)(n.className,"encapsulation-pill",s)}),t)}},78879:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return V},default:function(){return U},frontMatter:function(){return B},metadata:function(){return W},toc:function(){return q}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={toc:[{value:"color",id:"color",children:[],level:3},{value:"mode",id:"mode",children:[],level:3}]};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette. Default options are: ",(0,a.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,a.kt)("inlineCode",{parentName:"td"},'"dark"'),". For more information on colors, see ",(0,a.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"color"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"danger" \uff5c "dark" \uff5c "light" \uff5c "medium" \uff5c "primary" \uff5c "secondary" \uff5c "success" \uff5c "tertiary" \uff5c "warning" \uff5c string & Record<never, never> \uff5c undefined'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"mode"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"ios" \uff5c "md"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))))}c.isMDXComponent=!0;var s=["components"],u={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}p.isMDXComponent=!0;var d=["components"],m={toc:[]};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No public methods available for this component."))}h.isMDXComponent=!0;var v=["components"],f={toc:[]};function g(e){var t=e.components,n=(0,r.Z)(e,v);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No CSS shadow parts available for this component."))}g.isMDXComponent=!0;var k=["components"],x={toc:[]};function b(e){var t=e.components,n=(0,r.Z)(e,k);return(0,a.kt)("wrapper",(0,o.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No CSS custom properties available for this component."))}b.isMDXComponent=!0;var C=["components"],w={toc:[]};function y(e){var t=e.components,n=(0,r.Z)(e,C);return(0,a.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No slots available for this component."))}y.isMDXComponent=!0;var E=n(49679),N=n(82238),T=["components"],Z={toc:[]};function _(e){var t=e.components,n=(0,r.Z)(e,T);return(0,a.kt)("wrapper",(0,o.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-text color="primary">\n  <h1>H1: The quick brown fox jumps over the lazy dog</h1>\n</ion-text>\n\n<ion-text color="secondary">\n  <h2>H2: The quick brown fox jumps over the lazy dog</h2>\n</ion-text>\n\n<ion-text color="tertiary">\n  <h3>H3: The quick brown fox jumps over the lazy dog</h3>\n</ion-text>\n\n<p>\n  <ion-text color="warning"><ion-icon name="warning"></ion-icon></ion-text>\n  I saw a werewolf with a Chinese menu in his hand.\n  Walking through the <ion-text color="success"><sub>streets</sub></ion-text> of Soho in the rain.\n  He <ion-text color="medium"><i>was</i></ion-text> looking for a place called Lee Ho Fook\'s.\n  Gonna get a <ion-text color="danger">big dish of beef chow mein.</ion-text>\n</p>\n')))}_.isMDXComponent=!0;var j=["components"],M={toc:[]};function I(e){var t=e.components,n=(0,r.Z)(e,j);return(0,a.kt)("wrapper",(0,o.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonText, IonIcon } from \'@ionic/react\';\nimport { warning } from \'ionicons/icons\';\n\nfunction Example() {\n  return (\n    <>\n      <IonText color="primary">\n        <h1>H1: The quick brown fox jumps over the lazy dog</h1>\n      </IonText>\n\n      <IonText color="secondary">\n        <h2>H2: The quick brown fox jumps over the lazy dog</h2>\n      </IonText>\n\n      <IonText color="tertiary">\n        <h3>H3: The quick brown fox jumps over the lazy dog</h3>\n      </IonText>\n\n      <p>\n        <IonText color="warning"><IonIcon icon={warning}></IonIcon></IonText>\n        I saw a werewolf with a Chinese menu in his hand.\n        Walking through the <IonText color="success"><sub>streets</sub></IonText> of Soho in the rain.\n        He <IonText color="medium"><i>was</i></IonText> looking for a place called Lee Ho Fook\'s.\n        Gonna get a <IonText color="danger">big dish of beef chow mein.</IonText>\n      </p>\n    </>\n  );\n}\nexport default Example;\n')))}I.isMDXComponent=!0;var S=["components"],L={toc:[]};function D(e){var t=e.components,n=(0,r.Z)(e,S);return(0,a.kt)("wrapper",(0,o.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-text color="primary">\n    <h1>H1: The quick brown fox jumps over the lazy dog</h1>\n  </ion-text>\n\n  <ion-text color="secondary">\n    <h2>H2: The quick brown fox jumps over the lazy dog</h2>\n  </ion-text>\n\n  <ion-text color="tertiary">\n    <h3>H3: The quick brown fox jumps over the lazy dog</h3>\n  </ion-text>\n\n  <p>\n    <ion-text color="warning"><ion-icon :icon="warning"></ion-icon></ion-text>\n    I saw a werewolf with a Chinese menu in his hand.\n    Walking through the <ion-text color="success"><sub>streets</sub></ion-text> of Soho in the rain.\n    He <ion-text color="medium"><i>was</i></ion-text> looking for a place called Lee Ho Fook\'s.\n    Gonna get a <ion-text color="danger">big dish of beef chow mein.</ion-text>\n  </p>\n</template>\n\n<script lang="ts">\n  import { IonIcon, IonText } from \'@ionic/vue\';\n  import { warning } from \'ionicons/icons\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonIcon, IonText },\n    setup() {\n      return {\n        warning,\n      };\n    },\n  });\n<\/script>\n')))}D.isMDXComponent=!0;var O=["components"],P={toc:[]};function H(e){var t=e.components,n=(0,r.Z)(e,O);return(0,a.kt)("wrapper",(0,o.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-text color="primary">\n  <h1>H1: The quick brown fox jumps over the lazy dog</h1>\n</ion-text>\n\n<ion-text color="secondary">\n  <h2>H2: The quick brown fox jumps over the lazy dog</h2>\n</ion-text>\n\n<ion-text color="tertiary">\n  <h3>H3: The quick brown fox jumps over the lazy dog</h3>\n</ion-text>\n\n<p>\n  <ion-text color="warning"><ion-icon name="warning"></ion-icon></ion-text>\n  I saw a werewolf with a Chinese menu in his hand.\n  Walking through the <ion-text color="success"><sub>streets</sub></ion-text> of Soho in the rain.\n  He <ion-text color="medium"><i>was</i></ion-text> looking for a place called Lee Ho Fook\'s.\n  Gonna get a <ion-text color="danger">big dish of beef chow mein.</ion-text>\n</p>\n')))}H.isMDXComponent=!0;var A=["components"],R={toc:[]};function X(e){var t=e.components,n=(0,r.Z)(e,A);return(0,a.kt)("wrapper",(0,o.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(N.Z,{version:"6",code:{javascript:_,react:I,vue:D,angular:H},src:"usage/v6/text/basic/demo.html",mdxType:"Playground"}))}X.isMDXComponent=!0;var z=["components"],B={title:"ion-text"},V=void 0,W={unversionedId:"api/text",id:"version-v6/api/text",isDocsHomePage:!1,title:"ion-text",description:"ion-text: Ionic App Component to Style or Change Text Color",source:"@site/versioned_docs/version-v6/api/text.md",sourceDirName:"api",slug:"/api/text",permalink:"/docs/v6/api/text",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/text.md",tags:[],version:"v6",frontMatter:{title:"ion-text"},sidebar:"version-v6/api",previous:{title:"ion-back-button",permalink:"/docs/v6/api/back-button"},next:{title:"API Index",permalink:"/docs/v6/api"}},q=[{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Theming",id:"theming",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],F={toc:q};function U(e){var t=e.components,n=(0,r.Z)(e,z);return(0,a.kt)("wrapper",(0,o.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"ion-text: Ionic App Component to Style or Change Text Color"),(0,a.kt)("meta",{name:"description",content:"ion-text is a simple app component that can be used to style the text color of any element. Learn how ion-text wraps elements in order to change the text color."})),(0,a.kt)(E.Z,{type:"shadow",mdxType:"EncapsulationPill"}),(0,a.kt)("p",null,"The text component is a simple component that can be used to style the text color of any element. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-text")," element should wrap the element in order to change the text color of that element."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)(X,{mdxType:"Basic"}),(0,a.kt)("h2",{id:"theming"},"Theming"),(0,a.kt)("p",null,"The text component can be customized by changing any of the default ",(0,a.kt)("a",{parentName:"p",href:"../../docs/theming/colors"},"colors")," Ionic provides."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(c,{mdxType:"Props"}),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)(p,{mdxType:"Events"}),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)(h,{mdxType:"Methods"}),(0,a.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,a.kt)(g,{mdxType:"Parts"}),(0,a.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,a.kt)(b,{mdxType:"CustomProps"}),(0,a.kt)("h2",{id:"slots"},"Slots"),(0,a.kt)(y,{mdxType:"Slots"}))}U.isMDXComponent=!0}}]);