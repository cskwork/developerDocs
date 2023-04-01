"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[96090],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),d=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,m=u["".concat(a,".").concat(g)]||u[g]||p[g]||r;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51844:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={},a="Designer Overview",d={unversionedId:"studio/designer",id:"version-v6/studio/designer",isDocsHomePage:!1,title:"Designer Overview",description:"The Designer is the powerhouse of Studio, offering a drag-and-drop page builder for pages and components, with a code-behind editor for the template, styles, and scripts (TypeScript)",source:"@site/versioned_docs/version-v6/studio/designer.md",sourceDirName:"studio",slug:"/studio/designer",permalink:"/docs/v6/studio/designer",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/studio/designer.md",tags:[],version:"v6",frontMatter:{}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Pages and Components",id:"pages-and-components",children:[],level:2},{value:"Adding Pages and Components",id:"adding-pages-and-components",children:[],level:2},{value:"Drag &amp; Drop",id:"drag--drop",children:[{value:"Selecting Elements",id:"selecting-elements",children:[],level:3},{value:"Adding New Elements",id:"adding-new-elements",children:[],level:3},{value:"Quick Adding New Elements",id:"quick-adding-new-elements",children:[],level:3},{value:"Rearranging Existing Elements",id:"rearranging-existing-elements",children:[],level:3}],level:2},{value:"Properties Panel",id:"properties-panel",children:[],level:2},{value:"Editor View",id:"editor-view",children:[],level:2},{value:"Template Editing",id:"template-editing",children:[],level:2},{value:"Styles Editing",id:"styles-editing",children:[],level:2},{value:"Scripts Editing",id:"scripts-editing",children:[],level:2},{value:"Troubleshooting the Canvas",id:"troubleshooting-the-canvas",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"designer-overview"},"Designer Overview"),(0,r.kt)("p",null,"The Designer is the powerhouse of Studio, offering a drag-and-drop page builder for pages and components, with a code-behind editor for the template, styles, and scripts (TypeScript)"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"With the Designer, developers can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop to build pages and components"),(0,r.kt)("li",{parentName:"ul"},"Select from the entire library of Ionic elements for drag-and-drop ",(0,r.kt)("em",{parentName:"li"},"and")," code editing."),(0,r.kt)("li",{parentName:"ul"},"Switch between visual and code editing for pages and components"),(0,r.kt)("li",{parentName:"ul"},"View and work with most supported Ionic element properties, saving a trip checking the Documentation")),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Designer Mode",src:"/img/studio/2/ss-designer.png"})),(0,r.kt)("h2",{id:"pages-and-components"},"Pages and Components"),(0,r.kt)("p",null,"In the Designer, pages and components work directly off of the files powering them (TypeScript, HTML, CSS)."),(0,r.kt)("p",null,"When first loaded, the Designer index is shown. This index lsits the pages and custom components that Studio detected in the app. Components detected can be seen by switching to the components tab."),(0,r.kt)("p",null,"Studio finds pages and components by scanning your project looking for Component source files, so works on a variety of project file layouts."),(0,r.kt)("blockquote",null,(0,r.kt)("p",null,"Since the difference between pages and components is conceptual, Ionic Studio relies on convention to differentiate them. If there are pages missing, make sure each page follows the convention Ionic Studio is expecting:"),(0,r.kt)("p",null,"The files that represent each page must have the proper suffixes (e.g. ",(0,r.kt)("code",null,".page.ts"),","," ",(0,r.kt)("code",null,".page.html"),", ",(0,r.kt)("code",null,".page.scss"),"). See the"," ",(0,r.kt)("a",{href:"https://angular.io/guide/styleguide#naming"},"Angular style guide")," for additional information about naming conventions.")),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Page Index",src:"/img/studio/2/ss-designer-index.png"})),(0,r.kt)("p",null,"Switching to the component section on the Designer index reveals all the components found in the app."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Component Index",src:"/img/studio/2/ss-component-index.png"})),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#adding-pages-and-components"},"Adding Pages and Components")," to create new pages and components."),(0,r.kt)("h2",{id:"adding-pages-and-components"},"Adding Pages and Components"),(0,r.kt)("p",null,"To add pages or components to an app, click the ",(0,r.kt)("strong",{parentName:"p"},"New")," button in the top right of the page index."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"New Feature Button",src:"/img/studio/2/ss-new-feature.png"})),(0,r.kt)("p",null,"When adding a component (rather than a page), Studio will prompt for the name and a page in which to register it."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"New Component Modal",src:"/img/studio/2/ss-component-new.png"})),(0,r.kt)("p",null,"This adds the component as a ",(0,r.kt)("em",{parentName:"p"},"import")," in the NgModule of the selected page, which allows it to be used in that page."),(0,r.kt)("blockquote",null,"The same code changes are necessary to use the component in other pages. See [this FAQ](/docs/v6/studio/faq#using-a-custom-component-in-additional-pages) for details."),(0,r.kt)("h2",{id:"drag--drop"},"Drag & Drop"),(0,r.kt)("p",null,"The Designer offers a drag & drop canvas for quickly adding new elements and rearranging existing elements."),(0,r.kt)("h3",{id:"selecting-elements"},"Selecting Elements"),(0,r.kt)("p",null,"To select an element, click on it in the canvas. To select a child element, double click on its parent. Continue to double click to select deeper child elements and to edit text."),(0,r.kt)("p",null,"To enable fine-selection, which selects the deepest child under the mouse cursor, hold down the ",(0,r.kt)("kbd",null,"Ctrl")," key (or ",(0,r.kt)("kbd",null,"Command")," for macOS) and hover over an element."),(0,r.kt)("p",null,"To exit the current selection, use the ",(0,r.kt)("kbd",null,"Esc")," key."),(0,r.kt)("p",null,"To select any element under the cursor, right click and choose an element from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Select Element")," dropdown:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Selecting elements",src:"/img/studio/2/ss-select-element-menu.png"})),(0,r.kt)("p",null,"To select any element in the current document, access the element tree and click on the element to select:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Editing Templates",src:"/img/studio/2/ss-tree-select.png"})),(0,r.kt)("h3",{id:"adding-new-elements"},"Adding New Elements"),(0,r.kt)("p",null,'To add new elements to a page or component, drag and drop a new element from the Elements list, or use right click and "Quick Add" to\nadd context-specific elements easily.'),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Add Element Menu",src:"/img/studio/2/ss-new-elements.png"})),(0,r.kt)("p",null,"Elements may also be dragged into the HTML for a page or component, and will result in a new code snippet being inserted at the cursor position."),(0,r.kt)("h3",{id:"quick-adding-new-elements"},"Quick Adding New Elements"),(0,r.kt)("p",null,"Certain elements support quickly adding child elements by right-clicking and selecting an element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Quick Add")," menu. Some components that support quickly adding new elements include List, List Item, Grid, Segment Button, and more."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Quick Add Element Menu",src:"/img/studio/2/ss-quick-add-element-menu.png"})),(0,r.kt)("h3",{id:"rearranging-existing-elements"},"Rearranging Existing Elements"),(0,r.kt)("p",null,"To rearrange existing elements in the canvas, click and hold on it, then drag it into place."),(0,r.kt)("p",null,"Remember, it is also possible to drag and drop code selections in the code editor."),(0,r.kt)("h2",{id:"properties-panel"},"Properties Panel"),(0,r.kt)("p",null,"When an element is selected in the Designer canvas, the properties panel will update to reflect the selected element."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Properties Panel",src:"/img/studio/2/ss-properties-panel.png"})),(0,r.kt)("p",null,"In the properties panel, the properties that can be modified are listed."),(0,r.kt)("p",null,"For Ionic components, the properties panel contains a link to the component's documentation at the bottom."),(0,r.kt)("blockquote",null,"Unfortunately, the properties panel does not show properties for custom components in your app, but this is a feature we'll be adding!"),(0,r.kt)("h2",{id:"editor-view"},"Editor View"),(0,r.kt)("p",null,"The HTML, CSS, and JS (TypeScript) for a page or company can be edited by switching to the Editor View:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Editor View",src:"/img/studio/2/ss-editor-view.png"})),(0,r.kt)("h2",{id:"template-editing"},"Template Editing"),(0,r.kt)("p",null,"Each page or component has an HTML template that makes up its structure. Template editing makes it easy to make quick edits to the template, such as changing text or dragging in new element code snippets from the Elements list."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Editor View",src:"/img/studio/2/ss-editor-template.png"})),(0,r.kt)("h2",{id:"styles-editing"},"Styles Editing"),(0,r.kt)("p",null,"The Styles editor contains the CSS (Sass) for that page or component."),(0,r.kt)("p",null,"Any changes to the styles are reflected in the canvas when saved. The styles in this mode are only applicable to the current page or component."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Editor View",src:"/img/studio/2/ss-editor-styles.png"})),(0,r.kt)("h2",{id:"scripts-editing"},"Scripts Editing"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Scripts")," editor is for making changes to the controller, or logic, behind a page or component. This editor is used for making\nquick changes to logic for the page or component. For more complicated changes we recommend opening the project in a full-fledged code editor."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Editor View",src:"/img/studio/2/ss-editor-code.png"})),(0,r.kt)("h2",{id:"troubleshooting-the-canvas"},"Troubleshooting the Canvas"),(0,r.kt)("p",null,"If the canvas gets into an inconsistent or incorrect state, click the reload icon from the canvas utility bar to cause the canvas to reload its current contents:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Editing Scripts",src:"/img/studio/2/ss-compose-reload.png"})))}u.isMDXComponent=!0}}]);