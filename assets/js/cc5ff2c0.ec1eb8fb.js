"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[88840],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),o=t(67294),i=t(72389),r=t(79443);var l=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),c=t(86010),p="tabItem_1uMI";function u(e){var n,t,a,i=e.lazy,r=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,o.useState)(k),I=N[0],x=N[1],C=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==I&&f.some((function(e){return e.value===T}))&&x(T)}var A=function(e){var n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==I&&(j(n),x(a),null!=m&&w(m,a))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;t=C[o]||C[C.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},h)},f.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":I===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:M,onFocus:A,onClick:A},null!=t?t:n)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function d(e){var n=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},19424:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(26396),l=t(58215),s=["components"],c={title:"Migration Guide",sidebar_label:"Migration"},p=void 0,u={unversionedId:"reference/migration",id:"version-v6/reference/migration",isDocsHomePage:!1,title:"Migration Guide",description:"App Migration Guide: Documentation to Migrate Ionic 4.x to 5.x",source:"@site/versioned_docs/version-v6/reference/migration.md",sourceDirName:"reference",slug:"/reference/migration",permalink:"/docs/v6/reference/migration",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/reference/migration.md",tags:[],version:"v6",frontMatter:{title:"Migration Guide",sidebar_label:"Migration"},sidebar:"version-v6/docs",previous:{title:"Browser Support",permalink:"/docs/v6/reference/browser-support"}},d=[{value:"Migrating from Ionic 5.x to Ionic 6.x",id:"migrating-from-ionic-5x-to-ionic-6x",children:[],level:2},{value:"Migrating from Ionic 4.x to Ionic 5.x",id:"migrating-from-ionic-4x-to-ionic-5x",children:[{value:"API and CSS Updates",id:"api-and-css-updates",children:[],level:3},{value:"Packages and Dependencies",id:"packages-and-dependencies",children:[],level:3}],level:2},{value:"Migrating from Ionic 3.0 to Ionic 4.0",id:"migrating-from-ionic-30-to-ionic-40",children:[],level:2},{value:"Changes in Package Name",id:"changes-in-package-name",children:[],level:2},{value:"Project structure",id:"project-structure",children:[],level:2},{value:"RxJS Changes",id:"rxjs-changes",children:[],level:2},{value:"Lifecycle Events",id:"lifecycle-events",children:[],level:2},{value:"Overlay Components",id:"overlay-components",children:[],level:2},{value:"Navigation",id:"navigation",children:[],level:2},{value:"Lazy Loading",id:"lazy-loading",children:[],level:2},{value:"Markup Changes",id:"markup-changes",children:[],level:2},{value:"Migrating from Ionic 1.0 to Ionic 4.0",id:"migrating-from-ionic-10-to-ionic-40",children:[{value:"Ionic 1.0 to Ionic 4.0: What\u2019s Involved?",id:"ionic-10-to-ionic-40-whats-involved",children:[],level:3},{value:"Suggested Strategy",id:"suggested-strategy",children:[],level:3},{value:"Moving From AngularJS to Angular",id:"moving-from-angularjs-to-angular",children:[],level:3},{value:"Ionic Changes",id:"ionic-changes",children:[],level:3},{value:"Need Assistance?",id:"need-assistance",children:[],level:3}],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"App Migration Guide: Documentation to Migrate Ionic 4.x to 5.x"),(0,i.kt)("meta",{name:"description",content:"The Ionic Migration Guide provides documentation for how to migrate an app from 4.x to 5.x. Read to learn more about what updates this process requires."})),(0,i.kt)("h2",{id:"migrating-from-ionic-5x-to-ionic-6x"},"Migrating from Ionic 5.x to Ionic 6.x"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"../intro/upgrading-to-ionic-6"},"Ionic 6 Migration Guide"),"."),(0,i.kt)("h2",{id:"migrating-from-ionic-4x-to-ionic-5x"},"Migrating from Ionic 4.x to Ionic 5.x"),(0,i.kt)("p",null,"Migrating an app from 4.x to 5.x requires a few updates to the API properties, CSS utilities, and the installed package dependencies."),(0,i.kt)("h3",{id:"api-and-css-updates"},"API and CSS Updates"),(0,i.kt)("p",null,"For a complete list of breaking changes from 4.x to 5.x, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic/blob/main/BREAKING.md#version-5x"},"the breaking changes document")," in the Ionic core repo."),(0,i.kt)("h3",{id:"packages-and-dependencies"},"Packages and Dependencies"),(0,i.kt)("p",null,"For Angular based projects, you can simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save\n")),(0,i.kt)("p",null,"For React projects, you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @ionic/react@latest @ionic/react-router@latest ionicons@latest\n")),(0,i.kt)("p",null,"For Stencil / vanilla JS projects, you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ionic/core@latest --save\n")),(0,i.kt)("p",null,"If you would like a fresh project starter, a new project base can be created from the CLI and an existing app can be migrated over manually."),(0,i.kt)("h2",{id:"migrating-from-ionic-30-to-ionic-40"},"Migrating from Ionic 3.0 to Ionic 4.0"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For a ",(0,i.kt)("strong",{parentName:"p"},"complete list of breaking changes")," from Ionic 3 to Ionic 4, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic/blob/main/angular/BREAKING.md"},"the breaking changes document")," in the Ionic core repo."))),(0,i.kt)("p",null,"We suggest the following general process when migrating an existing application from Ionic 3 to 4:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate a new project using the ",(0,i.kt)("inlineCode",{parentName:"li"},"blank")," starter (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/v6/developing/starting"},"Starting an App"),")"),(0,i.kt)("li",{parentName:"ol"},"Copy any Angular services from ",(0,i.kt)("inlineCode",{parentName:"li"},"src/providers")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"src/app/services"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Services should include ",(0,i.kt)("inlineCode",{parentName:"li"},"{ providedIn: 'root' }")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Injectable()")," decorator. For details, please see Angular ",(0,i.kt)("a",{parentName:"li",href:"https://angular.io/guide/providers"},"provider docs"),"."))),(0,i.kt)("li",{parentName:"ol"},"Copy the app's other root-level items (pipes, components, etc) keeping in mind that the directory structure changes from ",(0,i.kt)("inlineCode",{parentName:"li"},"src/components")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"src/app/components"),", etc."),(0,i.kt)("li",{parentName:"ol"},"Copy global Sass styling from ",(0,i.kt)("inlineCode",{parentName:"li"},"src/app/app.scss")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"src/global.scss")),(0,i.kt)("li",{parentName:"ol"},"Copy the rest of the application, page by page or feature by feature, keeping the following items in mind:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Emulated Shadow DOM is turned on by default"),(0,i.kt)("li",{parentName:"ul"},"Page/component Sass should no longer be wrapped in the page/component tag and should use Angular's ",(0,i.kt)("a",{parentName:"li",href:"https://angular.io/api/core/Component#styleUrls"},(0,i.kt)("inlineCode",{parentName:"a"},"styleUrls"))," option of the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Component")," decorator"),(0,i.kt)("li",{parentName:"ul"},"RxJS has been updated from v5 to v6 (see ",(0,i.kt)("a",{parentName:"li",href:"#rxjs-changes"},"RxJS Changes"),")"),(0,i.kt)("li",{parentName:"ul"},"Certain lifecycle hooks should be replaced by Angular's hooks (see ",(0,i.kt)("a",{parentName:"li",href:"#lifecycle-events"},"Lifecycle Events"),")"),(0,i.kt)("li",{parentName:"ul"},"Markup changes may be required (migration tool available, see ",(0,i.kt)("a",{parentName:"li",href:"#markup-changes"},"Markup Changes"),")")))),(0,i.kt)("p",null,"In many cases, using the Ionic CLI to generate a new object and then copying the code also works very well. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic g service weather")," will create a shell ",(0,i.kt)("inlineCode",{parentName:"p"},"Weather")," service and test. The code can then be copied from the older project with minor modifications as needed. This helps to ensure the proper structure is followed. This also generates shells for unit tests."),(0,i.kt)("h2",{id:"changes-in-package-name"},"Changes in Package Name"),(0,i.kt)("p",null,"In Ionic 4, the package name is ",(0,i.kt)("inlineCode",{parentName:"p"},"@ionic/angular"),". Uninstall Ionic 3 and install Ionic 4 using the new package name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm uninstall ionic-angular\n$ npm install @ionic/angular\n")),(0,i.kt)("p",null,"While migrating an app, update the imports from ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic-angular")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"@ionic/angular"),"."),(0,i.kt)("h2",{id:"project-structure"},"Project structure"),(0,i.kt)("p",null,"One of the major changes between an Ionic 3 app and an Ionic 4 app is the overall project layout and structure. In v3, Ionic apps had a custom convention for how an app should be set up and what that folder structure should look like. In v4, this has been changed to follow the recommended setup of each supported framework."),(0,i.kt)("p",null,"For example, if an app is using Angular, that project structure will be exactly what an Angular CLI app would be. This change, while not too difficult to accommodate, helps to keep common patterns and documentation consistent."),(0,i.kt)(r.Z,{defaultValue:"v4",values:[{value:"v4",label:"Ionic 4"},{value:"v3",label:"Ionic 3"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v4",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u251c\u2500\u2500 app/\n\u2502\xa0\xa0 \u251c\u2500\u2500 about/\n\u2502\xa0\xa0 \u251c\u2500\u2500 home/\n\u2502\xa0\xa0 \u251c\u2500\u2500 app-routing.module.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.component.html\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.component.spec.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.component.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 app.module.ts\n\u251c\u2500\u2500 assets/\n\u251c\u2500\u2500 environments/\n\u251c\u2500\u2500 theme/\n\u251c\u2500\u2500 global.scss\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 karma.conf.js\n\u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 polyfills.ts\n\u251c\u2500\u2500 test.ts\n\u251c\u2500\u2500 tsconfig.app.json\n\u2514\u2500\u2500 tsconfig.spec.json\n.gitignore\nangular.json\nionic.config.json\npackage.json\ntsconfig.json\ntslint.json\n"))),(0,i.kt)(l.Z,{value:"v3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u251c\u2500\u2500 app/\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.component.html\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.html\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.module.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.scss\n\u2502\xa0\xa0 \u2514\u2500\u2500 main.ts\n\u251c\u2500\u2500 assets/\n\u251c\u2500\u2500 pages/\n\u2502\xa0\xa0 \u251c\u2500\u2500 about/\n\u2502\xa0\xa0 \u251c\u2500\u2500 home/\n\u251c\u2500\u2500 theme/\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 manifest.json\n\u2514\u2500\u2500 service-worker.js\n.gitignore\nionic.config.json\npackage.json\ntsconfig.json\ntslint.json\n")))),(0,i.kt)("p",null,"The above comparison is an example of a v4 app's project structure. For developers with experience in a vanilla Angular project, this should feel really familiar."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," directory that acts as the home for the app. This includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),", any assets, environment configuration, and any app-specific config files."),(0,i.kt)("p",null,'While migrating an app to take advantage of this new layout, it is suggested that a new project "base" is made with the CLI. Then, with the new project layout, migrate the features of the app piece by piece. Pages/components/etc. should be moved into the ',(0,i.kt)("inlineCode",{parentName:"p"},"src/app/")," folder."),(0,i.kt)("p",null,"Ensure your Ionic configuration file has the appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),". The project type for v3 is ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic-angular"),". The project type for v4 is ",(0,i.kt)("inlineCode",{parentName:"p"},"angular"),". If this value is incorrect, the CLI may invoke the incorrect build scripts."),(0,i.kt)("p",null,"See the following ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic.config.json")," as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "type": "angular"\n}\n')),(0,i.kt)("h2",{id:"rxjs-changes"},"RxJS Changes"),(0,i.kt)("p",null,"Between V3 and V4, RxJS was updated to version 6. This changes many of the import paths of operators and core RxJS functions. Please see the ",(0,i.kt)("a",{href:"https://github.com/ReactiveX/rxjs/blob/6.x/docs_app/content/guide/v6/migration.md",target:"_blank"},"RxJS Migration Guide")," for details."),(0,i.kt)("h2",{id:"lifecycle-events"},"Lifecycle Events"),(0,i.kt)("p",null,"With V4, we're now able to utilize the typical events provided by ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/lifecycle-hooks"},"Angular"),". But for certain cases, you might want to have access to the events fired when a component has finished animating during its route change. In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewWillEnter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewDidEnter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewWillLeave"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewDidLeave")," have been ported over from V3. Use these events to coordinate actions with Ionic's own animations system."),(0,i.kt)("p",null,"Older events like ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewDidLoad"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewCanLeave"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ionViewCanEnter")," have been removed, and the proper Angular alternatives should be used."),(0,i.kt)("p",null,"For more details, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/api/router-outlet"},"router-outlet docs")),(0,i.kt)("h2",{id:"overlay-components"},"Overlay Components"),(0,i.kt)("p",null,"In prior versions of Ionic, overlay components such as Loading, Toast, or Alert were created synchronously. In Ionic v4, these components are all created asynchronously. As a result of this, the API is now promise-based."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// v3\nshowAlert() {\n  const alert = this.alertCtrl.create({\n    message: "Hello There",\n    subHeader: "I\'m a subheader"\n  });\n\n  alert.present();\n}\n')),(0,i.kt)("p",null,"In v4, promises are used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'showAlert() {\n  this.alertCtrl.create({\n    message: "Hello There",\n    subHeader: "I\'m a subheader"\n  }).then(alert => alert.present());\n}\n\n// Or using async/await\n\nasync showAlert() {\n  const alert = await this.alertCtrl.create({\n    message: "Hello There",\n    subHeader: "I\'m a subheader"\n  });\n\n  await alert.present();\n}\n')),(0,i.kt)("h2",{id:"navigation"},"Navigation"),(0,i.kt)("p",null,"In V4, navigation received the most changes. Now, instead of using Ionic's own ",(0,i.kt)("inlineCode",{parentName:"p"},"NavController"),", we integrate with the official Angular Router. This not only provides a consistent routing experience across apps, but is much more dependable. The Angular team has an ",(0,i.kt)("a",{href:"http://angular.io/guide/router",target:"_blank"},"excellent guide")," on their docs site that covers the Router in great detail."),(0,i.kt)("p",null,"To provide the platform-specific animations that users are used to, we have created ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router-outlet")," for Angular Apps. This behaves in a similar manner to Angular's ",(0,i.kt)("inlineCode",{parentName:"p"},"router-outlet")," but provides a stack-based navigation (tabs) and animations."),(0,i.kt)("p",null,"For a detailed explanation in navigation works in a V4 project, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/angular/navigation"},"Angular navigation guide"),"."),(0,i.kt)("h2",{id:"lazy-loading"},"Lazy Loading"),(0,i.kt)("p",null,"Since Navigation has changed, the mechanism for lazy loading has also changed in V4."),(0,i.kt)("p",null,"In v3, a typical lazy loading setup worked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// home.page.ts\n@IonicPage({\n  segment: 'home'\n})\n@Component({ ... })\nexport class HomePage {}\n\n// home.module.ts\n@NgModule({\n  declarations: [HomePage],\n  imports: [IonicPageModule.forChild(HomePage)]\n})\nexport class HomePageModule {}\n")),(0,i.kt)("p",null,"However, in v4, lazy loading is done via the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadChildren")," method of the Angular router:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// home.module.ts\n@NgModule({\n  imports: [IonicModule, RouterModule.forChild([{ path: '', component: HomePage }])],\n  declarations: [HomePage],\n})\nexport class HomePageModule {}\n\n// app.module.ts\n@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot(),\n    RouterModule.forRoot([\n      { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },\n      { path: '', redirectTo: 'home', pathMatch: 'full' },\n    ]),\n  ],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n")),(0,i.kt)("p",null,"For a detailed explanation of lazy loading in V4 project, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/angular/navigation#lazy-loading-routes"},"Angular navigation guide"),"."),(0,i.kt)("h2",{id:"markup-changes"},"Markup Changes"),(0,i.kt)("p",null,"Since v4 moved to Custom Elements, there's been a significant change to the markup for each component. These changes have all been made to follow the Custom Elements spec, and have been documented in a ",(0,i.kt)("a",{href:"https://github.com/ionic-team/ionic/blob/main/angular/BREAKING.md#breaking-changes",target:"_blank"},"dedicated file on GitHub"),"."),(0,i.kt)("p",null,"To help with these markup changes, we've released a TSLint-based ",(0,i.kt)("a",{href:"https://github.com/ionic-team/v4-migration-tslint",target:"_blank"},"Migration Tool"),", which detects issues and can even fix some of them automatically."),(0,i.kt)("h2",{id:"migrating-from-ionic-10-to-ionic-40"},"Migrating from Ionic 1.0 to Ionic 4.0"),(0,i.kt)("h3",{id:"ionic-10-to-ionic-40-whats-involved"},"Ionic 1.0 to Ionic 4.0: What\u2019s Involved?"),(0,i.kt)("p",null,"Migrating from Ionic 1 to Ionic 4.0 involves moving from AngularJS (aka Angular 1) to Angular 7+. There are many architectural differences between these versions, so some of the app code will have to be rewritten. The amount of work involved depends on the complexity and size of your app."),(0,i.kt)("p",null,"One upside is that for the most part, the Ionic UI components you know and love from V1 haven\u2019t changed much."),(0,i.kt)("p",null,"Here are some considerations to review before beginning the upgrade:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"App complexity"),": Naturally, the larger and more complex the app is, the longer it will take to migrate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Framework support"),": In 2019, Ionic will release full support for React. You can also use Ionic Framework components ",(0,i.kt)("a",{parentName:"li",href:"/docs/v6/intro/cdn"},"without a framework"),". Since these are not production-ready yet, we recommend sticking with Angular or waiting until the other framework support is available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Budget and team makeup"),": The length of a migration project will vary based on the size of your team, the complexity of the app, and the amount of time allotted to make the transition.")),(0,i.kt)("h3",{id:"suggested-strategy"},"Suggested Strategy"),(0,i.kt)("p",null,"Once your development team has identified a good time frame for beginning the migration, Ionic recommends feature-freezing the Ionic 1 application and getting the code in order: Fix any major bugs, eliminate tech debt, and reorganize as you see fit. Then, identify which features to migrate over and which to abandon."),(0,i.kt)("p",null,"Once the Ionic 1 app is stable, create a new Ionic 4.0 project. The majority of the dev team\u2019s attention should be given to the new project; only bugs should be fixed in the Ionic 1 app to ensure that the transition happens as quickly and smoothly as possible."),(0,i.kt)("p",null,"Once the team is comfortable that the Ionic 4.0 app has become stable and has fulfilled a core set of features, you can then shut down the Ionic 1 app."),(0,i.kt)("h3",{id:"moving-from-angularjs-to-angular"},"Moving From AngularJS to Angular"),(0,i.kt)("p",null,"Please reference official ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/upgrade"},"Angular upgrade guide")," information."),(0,i.kt)("h3",{id:"ionic-changes"},"Ionic Changes"),(0,i.kt)("p",null,"Our Ionic 3.0 to Ionic 4.0 migration sections above may prove to be a useful reference. Generate a new Ionic 4.0 project using the blank starter (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/developing/starting"},"Starting an App"),"). Spend time getting familiar with Ionic 4.0 components. Happy building!"),(0,i.kt)("h3",{id:"need-assistance"},"Need Assistance?"),(0,i.kt)("p",null,"If your team would like assistance with the migration, please ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/enterprise-engine"},"reach out to us"),"! Ionic offers Advisory Services, which includes Ionic 4.0 training, architecture reviews, and migration assistance."))}h.isMDXComponent=!0}}]);