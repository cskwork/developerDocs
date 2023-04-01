"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[23128],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14990:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),l=["components"],r={},s="Realtime App Updates with Appflow Live Updates",p={unversionedId:"developer-resources/guides/first-app-v3/realtime-updates-ionic-deploy",id:"developer-resources/guides/first-app-v3/realtime-updates-ionic-deploy",isDocsHomePage:!1,title:"Realtime App Updates with Appflow Live Updates",description:"As you\u2019ve seen so far, building web and mobile apps is quick and easy with the Ionic Framework. However, nothing disrupts rapid iteration faster than App Store delays. Fortunately, with Appflow\u2019s Deploy feature, you can send live code changes directly to your users. Paired with seamless background updates, they are always upgraded to the latest version.",source:"@site/docs/developer-resources/guides/first-app-v3/realtime-updates-ionic-deploy.md",sourceDirName:"developer-resources/guides/first-app-v3",slug:"/developer-resources/guides/first-app-v3/realtime-updates-ionic-deploy",permalink:"/docs/developer-resources/guides/first-app-v3/realtime-updates-ionic-deploy",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developer-resources/guides/first-app-v3/realtime-updates-ionic-deploy.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Android Builds",id:"android-builds",children:[],level:2},{value:"iOS Builds",id:"ios-builds",children:[],level:2},{value:"Add the Native App to Your Local Device",id:"add-the-native-app-to-your-local-device",children:[],level:2},{value:"Deploying Changes",id:"deploying-changes",children:[],level:2},{value:"Stuck on creating local native builds?",id:"stuck-on-creating-local-native-builds",children:[],level:2}],u={toc:d};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"realtime-app-updates-with-appflow-live-updates"},"Realtime App Updates with Appflow Live Updates"),(0,i.kt)("p",null,"As you\u2019ve seen so far, building web and mobile apps is quick and easy with the Ionic Framework. However, nothing disrupts rapid iteration faster than App Store delays. Fortunately, with Appflow\u2019s Deploy feature, you can send live code changes directly to your users. Paired with seamless background updates, they are always upgraded to the latest version."),(0,i.kt)("p",null,"Setting it up is quick and easy. For reference, continue to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3"},"the part 3 folder")," on GitHub. First, install the Appflow JavaScript library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @ionic/pro@latest --save\n")),(0,i.kt)("p",null,"Then, add the Appflow plugin. Here\u2019s the command to install it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova plugin add cordova-plugin-ionic@latest --save\n--variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME\n")),(0,i.kt)("p",null,"There are two unique values to provide: your app id and channel name. Sign into Appflow, then find the App Id on your app\u2019s dashboard:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"app id location",src:a(75795).Z})),(0,i.kt)("p",null,"And we\u2019ll just use \u201cMaster\u201d as the channel name. Putting this together looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova plugin add cordova-plugin-ionic@latest --save\n--variable APP_ID=381533B9 --variable CHANNEL_NAME=Master\n")),(0,i.kt)("p",null,"After this plugin has been added, you\u2019ll notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," have been updated with your app\u2019s details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin name="cordova-plugin-ionic" spec="^5.0.6">\n    <variable name="APP_ID" value="381533B9" />\n    <variable name="CHANNEL_NAME" value="Master" />\n    <variable name="WARN_DEBUG" value="true" />\n    <variable name="UPDATE_API" value="https://api.ionicjs.com" />\n    <variable name="UPDATE_METHOD" value="background" />\n    <variable name="MAX_STORE" value="2" />\n    <variable name="MIN_BACKGROUND_DURATION" value="30" />\n</plugin>\n')),(0,i.kt)("p",null,"Next, modify ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts")," to include the initialization of Appflow on app startup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Pro } from '@ionic/pro';\n\nPro.init('YOUR_APP_ID', {\n  appVersion: 'APP_VERSION',\n});\n")),(0,i.kt)("p",null,"As an example, this would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Pro.init('381533B9', {\n  appVersion: '0.0.1',\n});\n")),(0,i.kt)("p",null,"Next, push the code up to Appflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit commit -m \u201cadding Appflow\u201d\ngit push ionic master\n")),(0,i.kt)("p",null,"Next, create a local, native build of the app."),(0,i.kt)("h2",{id:"android-builds"},"Android Builds"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developing/android"},"Android Setup instructions"),", which includes installing Java 8 and Android Studio on your machine. Then, in your Terminal run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova build android --prod\n")),(0,i.kt)("p",null,"This will generate a unsigned debug build (meaning the app can run on any Android device)."),(0,i.kt)("h2",{id:"ios-builds"},"iOS Builds"),(0,i.kt)("p",null,"iOS is ",(0,i.kt)("a",{parentName:"p",href:"/docs/developing/ios"},"a bit trickier to set up")," than Android and requires a Mac computer. Ensure XCode is updated to the latest version and set up a development team. Then, in your Terminal, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova build ios --prod\n")),(0,i.kt)("p",null,"Then, continue to ",(0,i.kt)("a",{parentName:"p",href:"/docs/deployment/app-store"},"follow the instructions here")," regarding signing certificates, etc. With a native version of your app built, let\u2019s copy it to your device of choice."),(0,i.kt)("h2",{id:"add-the-native-app-to-your-local-device"},"Add the Native App to Your Local Device"),(0,i.kt)("p",null,"Now comes the fun part: testing out the native app on your device! For iOS, the easiest way (that works for both PC and Mac) involves using iTunes. Connect your iOS device, locate your IPA file, then drag and drop the IPA file from the file system onto your device in iTunes. The app will install immediately and be ready for use:"),(0,i.kt)("div",{class:"wistia_responsive_padding",style:{padding:"62.5% 0 0 0",position:"relative"}},(0,i.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,i.kt)("iframe",{src:"https://fast.wistia.net/embed/iframe/s5v4fujv7w?videoFoam=true",title:"Wistia video player",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:!0,mozallowfullscreen:!0,webkitallowfullscreen:!0,oallowfullscreen:!0,msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,i.kt)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,i.kt)("p",null,"For Android testing, the easiest way across all OS platforms is to use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/"},"Android Studio"),", Google\u2019s official Android IDE. After downloading it, connect your Android device to your computer. On the Studio startup screen, select \u201cProfile or debug APK\u201d, then select the recently built APK file."),(0,i.kt)("p",null,"In the upper right hand corner, click the Play button. Select your connected device, then click OK:"),(0,i.kt)("div",{class:"wistia_responsive_padding",style:{padding:"62.5% 0 0 0",position:"relative"}},(0,i.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,i.kt)("iframe",{src:"https://fast.wistia.net/embed/iframe/b2ys5v4sno?videoFoam=true",title:"Wistia video player",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:!0,mozallowfullscreen:!0,webkitallowfullscreen:!0,oallowfullscreen:!0,msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,i.kt)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,i.kt)("h2",{id:"deploying-changes"},"Deploying Changes"),(0,i.kt)("p",null,"With Appflow Deploy, any JavaScript, HTML, or CSS changes can be pushed automatically to app users. Open the Photo Gallery app in your favorite code editor, then update the title of the Gallery page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ion-header>\n  <ion-toolbar>\n    <ion-title>Photo Viewer</ion-title>\n  </ion-toolbar>\n</ion-header>\n")),(0,i.kt)("p",null,"Next, push the code up to Appflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ git add .\n$ git commit -m \u201cchange name to Photo Viewer\u201d\n$ git push ionic master\n")),(0,i.kt)("p",null,"Log into the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com"},"Appflow dashboard")," and navigate to Deploy -> Builds. You\u2019ll see this newest commit begin to build immediately. Since we assigned the Appflow plugin to the Master branch (the one we always Git Push to), the Channel label will also point to this commit, effectively auto-deploying this change to all app users:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"deploy channel",src:a(26734).Z})),(0,i.kt)("p",null,"A Channel points to a specific JavaScript Build or Snapshot of your app that will be shared with devices listening to that channel for updates. You can change which Build a Channel points to whenever you\u2019d like."),(0,i.kt)("p",null,"Each time a user launches our Photo Gallery app, it will poll for updates from Appflow. If new code is available, the update is downloaded in the background. There are ",(0,i.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/deploy/api#update_method"},"a handful of ways")," to control how updates are performed, but by default they will be applied the next time the user closes then opens the app."),(0,i.kt)("p",null,"When the latest Build has been successful, close your local copy of Photo Gallery app or put it in the background for 30 seconds (the ",(0,i.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/deploy/api#min_background_duration"},"MIN_BACKGROUND_DURATION default"),"), then reopen it. The title of the Photo Gallery page should change from \u201cPhoto Gallery\u201d to \u201cPhoto Viewer.\u201d"),(0,i.kt)("p",null,"What if you deploy a change, then realize that there is a bug? Or perhaps you\u2019re just not happy with the name \u201cPhoto Viewer?\u201d No problem: Appflow Deploy makes it easy to roll back changes as well!"),(0,i.kt)("p",null,"On the Deploy Builds page, click the \u201cAssign to Channel\u201d button on the previous commit, then click \u201cDeploy.\u201d App users will be reverted to the previous version, and our \u201cPhoto Gallery\u201d name has been restored."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"deploy channel",src:a(99957).Z})),(0,i.kt)("p",null,"This was just a taste of what you can do with Appflow Live Updates! You can also set up multiple deployment channels to send targeted updates to specific groups of users. Use it to run A/B tests, or target the distribution of updates by audience, geography, or test group."),(0,i.kt)("h2",{id:"stuck-on-creating-local-native-builds"},"Stuck on creating local native builds?"),(0,i.kt)("p",null,"Building native app binaries for Android and iOS can be painful. The tooling isn\u2019t great, new OS versions often result in challenging upgrades, and creating consistent builds across your dev team can be frustrating. Fortunately, Appflow\u2019s Package feature makes this easy: simply upload your iOS certificate and Android keystore files, then we take care of the rest!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com/settings/billing"},"Start packaging your app in the cloud")," along with 10,000 Ionic Deploys per month."),(0,i.kt)("p",null,"Up next, we look at Appflow Monitoring - track your app errors in realtime."))}c.isMDXComponent=!0},75795:function(e,t,a){t.Z=a.p+"assets/images/app-id-location-ee9963426fb0def2bc103736a333a450.png"},26734:function(e,t,a){t.Z=a.p+"assets/images/deploy-channel-8ac473976b93e2d37d53993de2a1a7a0.png"},99957:function(e,t,a){t.Z=a.p+"assets/images/deploy-revertChange-dcb9c40230b3df0f8747dce8df720978.png"}}]);