"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[5499],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45318:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={title:"Taking Photos with the Camera",sidebar_label:"Taking Photos"},p=void 0,c={unversionedId:"angular/your-first-app/taking-photos",id:"angular/your-first-app/taking-photos",isDocsHomePage:!1,title:"Taking Photos with the Camera",description:"Build Camera API for iOS, Android & Web | Ionic Capacitor Camera",source:"@site/docs/angular/your-first-app/2-taking-photos.md",sourceDirName:"angular/your-first-app",slug:"/angular/your-first-app/taking-photos",permalink:"/docs/angular/your-first-app/taking-photos",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/angular/your-first-app/2-taking-photos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Taking Photos with the Camera",sidebar_label:"Taking Photos"}},s=[{value:"Photo Service",id:"photo-service",children:[],level:2},{value:"Displaying Photos",id:"displaying-photos",children:[],level:2}],h={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Build Camera API for iOS, Android & Web | Ionic Capacitor Camera"),(0,r.kt)("meta",{name:"description",content:"Add the ability to take photos with your device's camera using the Ionic Capacitor Camera API for mobile iOS, Android, and the web. Learn how here."})),(0,r.kt)("p",null,"Now for the fun part - adding the ability to take photos with the device\u2019s camera using the Capacitor ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/camera"},"Camera API"),". We\u2019ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android)."),(0,r.kt)("h2",{id:"photo-service"},"Photo Service"),(0,r.kt)("p",null,"All Capacitor logic (Camera usage and other native features) will be encapsulated in a service class. Create ",(0,r.kt)("inlineCode",{parentName:"p"},"PhotoService")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic generate")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic g service services/photo\n")),(0,r.kt)("p",null,"Open the new ",(0,r.kt)("inlineCode",{parentName:"p"},"services/photo.service.ts")," file, and let\u2019s add the logic that will power the camera functionality. First, import Capacitor dependencies and get references to the Camera, Filesystem, and Storage plugins:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';\nimport { Filesystem, Directory } from '@capacitor/filesystem';\nimport { Preferences } from '@capacitor/preferences';\n")),(0,r.kt)("p",null,"Next, define a new class method, ",(0,r.kt)("inlineCode",{parentName:"p"},"addNewToGallery"),", that will contain the core logic to take a device photo and save it to the filesystem. Let\u2019s start by opening the device camera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"public async addNewToGallery() {\n  // Take a photo\n  const capturedPhoto = await Camera.getPhoto({\n    resultType: CameraResultType.Uri,\n    source: CameraSource.Camera,\n    quality: 100\n  });\n}\n")),(0,r.kt)("p",null,"Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.getPhoto()")," - that will open up the device's camera and allow us to take photos."),(0,r.kt)("p",null,"Next, open up ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.ts")," and import the PhotoService class and add a method that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"addNewToGallery")," method on the imported service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PhotoService } from '../services/photo.service';\n\nconstructor(public photoService: PhotoService) { }\n\naddPhotoToGallery() {\n  this.photoService.addNewToGallery();\n}\n")),(0,r.kt)("p",null,"Then, open ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.html")," and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"addPhotoToGallery()")," function when the FAB is tapped/clicked:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <ion-fab vertical="bottom" horizontal="center" slot="fixed">\n    <ion-fab-button (click)="addPhotoToGallery()">\n      <ion-icon name="camera"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n')),(0,r.kt)("p",null,"Save the file, and if it's not running already, restart the development server in your browser by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve"),". On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Camera API on the web",src:a(80465).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Your selfie is probably much better than mine)")),(0,r.kt)("p",null,"After taking a photo, it disappears right away. We need to display it within our app and save it for future access."),(0,r.kt)("h2",{id:"displaying-photos"},"Displaying Photos"),(0,r.kt)("p",null,"Outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PhotoService")," class definition (the very bottom of the file), create a new interface, ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPhoto"),", to hold our photo metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface UserPhoto {\n  filepath: string;\n  webviewPath: string;\n}\n")),(0,r.kt)("p",null,"Back at the top of the file, define an array of Photos, which will contain a reference to each photo captured with the Camera."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export class PhotoService {\n  public photos: UserPhoto[] = [];\n\n  // other code\n}\n")),(0,r.kt)("p",null,"Over in the ",(0,r.kt)("inlineCode",{parentName:"p"},"addNewToGallery")," function, add the newly captured photo to the beginning of the Photos array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'  const capturedPhoto = await Camera.getPhoto({\n    resultType: CameraResultType.Uri,\n    source: CameraSource.Camera,\n    quality: 100\n  });\n\n  this.photos.unshift({\n    filepath: "soon...",\n    webviewPath: capturedPhoto.webPath\n  });\n}\n')),(0,r.kt)("p",null,"Next, move over to ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.html")," so we can display the image on the screen. Add a ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/grid"},"Grid component")," so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PhotoServices"),"'s Photos array, adding an Image component (",(0,r.kt)("inlineCode",{parentName:"p"},"<ion-img>"),") for each. Point the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," (source) at the photo\u2019s path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">\n        <ion-img [src]="photo.webviewPath"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \x3c!-- ion-fab markup  --\x3e\n</ion-content>\n')),(0,r.kt)("p",null,"Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!"),(0,r.kt)("p",null,"Up next, we\u2019ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time."))}d.isMDXComponent=!0},80465:function(e,t,a){t.Z=a.p+"assets/images/camera-web-a07837d32fc6a75dd68d0d86345901c9.png"}}]);