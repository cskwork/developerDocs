"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[9484],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],d={title:"Android Development",sidebar_label:"Developing for Android"},l=void 0,s={unversionedId:"developing/android",id:"version-v6/developing/android",isDocsHomePage:!1,title:"Android Development",description:"Android App Development Guide: Build Ionic Apps in Android Studio",source:"@site/versioned_docs/version-v6/developing/android.md",sourceDirName:"developing",slug:"/developing/android",permalink:"/docs/v6/developing/android",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/developing/android.md",tags:[],version:"v6",frontMatter:{title:"Android Development",sidebar_label:"Developing for Android"},sidebar:"version-v6/docs",previous:{title:"Developing for iOS",permalink:"/docs/v6/developing/ios"},next:{title:"Development Tips",permalink:"/docs/v6/developing/tips"}},p=[{value:"Android Studio",id:"android-studio",children:[{value:"Installing Android Studio",id:"installing-android-studio",children:[],level:3},{value:"Installing the Android SDK",id:"installing-the-android-sdk",children:[],level:3},{value:"Configuring Command Line Tools",id:"configuring-command-line-tools",children:[],level:3},{value:"Creating an Android Virtual Device",id:"creating-an-android-virtual-device",children:[],level:3},{value:"Set up an Android Device",id:"set-up-an-android-device",children:[],level:3}],level:2},{value:"Cordova Setup",id:"cordova-setup",children:[{value:"Java",id:"java",children:[],level:3},{value:"Gradle",id:"gradle",children:[],level:3}],level:2},{value:"Project Setup",id:"project-setup",children:[],level:2},{value:"Running with Capacitor",id:"running-with-capacitor",children:[{value:"Live reload",id:"live-reload",children:[],level:3}],level:2},{value:"Running with Cordova",id:"running-with-cordova",children:[],level:2},{value:"Debugging Android Apps",id:"debugging-android-apps",children:[{value:"Using Chrome DevTools",id:"using-chrome-devtools",children:[],level:3},{value:"Viewing Native Logs",id:"viewing-native-logs",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,d=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Android App Development Guide: Build Ionic Apps in Android Studio"),(0,i.kt)("meta",{name:"description",content:"This development guide covers how to run and debug Ionic apps on Android emulators and devices. Learn how to install Android Studio to get started building."})),(0,i.kt)("p",null,"This guide covers how to run and debug Ionic apps on Android emulators and devices using ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#capacitor"},"Capacitor")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#cordova"},"Cordova"),". Android apps can be developed on Windows, macOS, and Linux."),(0,i.kt)("h2",{id:"android-studio"},"Android Studio"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/"},"Android Studio")," is the IDE for creating native Android apps. It includes the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#android-sdk"},"Android SDK"),", which will need to be configured for use in the command line."),(0,i.kt)("p",null,"Android Studio is also used to ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/developing/android#creating-an-android-virtual-device"},"create Android virtual devices"),", which are required for the Android emulator. Ionic apps can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/developing/android#set-up-an-android-device"},"launched to a device"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We don't recommend using Android Studio for ",(0,i.kt)("em",{parentName:"p"},"developing")," Ionic apps. Instead, it should only really be used to build and run your apps for the native Android platform and to manage the Android SDK and virtual devices."))),(0,i.kt)("h3",{id:"installing-android-studio"},"Installing Android Studio"),(0,i.kt)("p",null,"Download Android Studio from the ",(0,i.kt)("a",{href:"https://developer.android.com/studio/",target:"_blank"},"Android website"),". More detailed installation instructions can be found in the ",(0,i.kt)("a",{href:"https://developer.android.com/studio/install",target:"_blank"},"User Guide"),"."),(0,i.kt)("h3",{id:"installing-the-android-sdk"},"Installing the Android SDK"),(0,i.kt)("p",null,"Once installed, open Android Studio. The IDE should detect that the Android SDK needs to be installed. In the ",(0,i.kt)("strong",{parentName:"p"},"SDK Components Setup")," screen, finish installing the SDK. Keep note of the ",(0,i.kt)("strong",{parentName:"p"},"Android SDK Location"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android Studio SDK Setup",src:n(29753).Z})),(0,i.kt)("p",null,"By default, the latest stable SDK Platform is installed, which includes a collection of packages required to target that version of Android."),(0,i.kt)("p",null,"To install system images and other minor SDK platform packages, you may need to ensure ",(0,i.kt)("strong",{parentName:"p"},"Show Package Details")," is checked at the bottom of the SDK Manager.\n",(0,i.kt)("img",{alt:"Android Studio SDK Manager",src:n(26457).Z})),(0,i.kt)("p",null,"For future reference, the Android SDK can be managed with Android Studio in the ",(0,i.kt)("strong",{parentName:"p"},"Configure")," ","\xbb"," ",(0,i.kt)("strong",{parentName:"p"},"SDK Manager")," menu of the Android Studio welcome screen or ",(0,i.kt)("strong",{parentName:"p"},"Tools")," ","\xbb"," ",(0,i.kt)("strong",{parentName:"p"},"SDK Manager")," inside Android projects."),(0,i.kt)("h3",{id:"configuring-command-line-tools"},"Configuring Command Line Tools"),(0,i.kt)("p",null,"The Android SDK ships with ",(0,i.kt)("a",{href:"https://developer.android.com/studio/command-line/",target:"_blank"},"useful command-line tools"),". Before they can be used, some environment variables must be set. The following instructions are for macOS and Linux. For Windows, check the documentation on setting and persisting environment variables in terminal sessions."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),", or similar shell startup scripts, make the following modifications:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ANDROID_SDK_ROOT")," environment variable. This path should be the ",(0,i.kt)("strong",{parentName:"p"},"Android SDK Location")," used in the previous section."),(0,i.kt)("p",{parentName:"li"},"For Mac:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ export ANDROID_SDK_ROOT=$HOME/Android/sdk\n")),(0,i.kt)("p",{parentName:"li"},"For Linux/Windows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ export ANDROID_SDK_ROOT=$HOME/Android/Sdk\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Android SDK command-line directories to ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),". Each directory corresponds to the category of ",(0,i.kt)("a",{href:"https://developer.android.com/studio/command-line/",target:"_blank"},"command-line tool"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ # avdmanager, sdkmanager\n$ export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin\n$ # adb, logcat\n$ export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools\n$ # emulator\n$ export PATH=$PATH:$ANDROID_SDK_ROOT/emulator\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"apksigner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zipalign"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$ANDROID_SDK_ROOT/build-tools&lt;version>")," must also be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"."))))),(0,i.kt)("h3",{id:"creating-an-android-virtual-device"},"Creating an Android Virtual Device"),(0,i.kt)("p",null,"Android Virtual Devices (AVDs) are blueprints that the Android emulator uses to run the Android OS. The following documentation is a quick way to get the Android emulator set up. For more detailed instructions and information, see ",(0,i.kt)("a",{href:"https://developer.android.com/studio/run/managing-avds",target:"_blank"},"the Android documentation"),"."),(0,i.kt)("p",null,"AVDs are managed with the AVD Manager. In the Android Studio welcome screen, click ",(0,i.kt)("strong",{parentName:"p"},"Configure")," ","\xbb"," ",(0,i.kt)("strong",{parentName:"p"},"AVD Manager"),". The AVD Manager can also be opened inside Android projects in the ",(0,i.kt)("strong",{parentName:"p"},"Tools")," ","\xbb"," ",(0,i.kt)("strong",{parentName:"p"},"AVD Manager")," menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AVD Setup",src:n(49344).Z})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Create Virtual Device")," and select a suitable device definition. If unsure, choose ",(0,i.kt)("strong",{parentName:"p"},"Pixel 2"),". Then, select a suitable system image. If unsure, choose ",(0,i.kt)("strong",{parentName:"p"},"Pie")," (API 28) with Google Play services. See ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Android_version_history",target:"_blank"},"Android version history")," for information on Android versions."),(0,i.kt)("p",null,"Once the AVD is created, launch the AVD into the Android emulator. Keeping the emulator running is the best way to ensure detection while developing Ionic apps for Android."),(0,i.kt)("figure",{className:"device"},(0,i.kt)("img",{alt:"Android Emulator Booting",src:"/docs/img/installation/android-emulator-booting.png"})),(0,i.kt)("h3",{id:"set-up-an-android-device"},"Set up an Android Device"),(0,i.kt)("p",null,"Actual Android hardware can also be used for Ionic app development. But first, the device must be set up for development. The following documentation is a quick way to set up Android devices for development. For more detailed instructions and information, see ",(0,i.kt)("a",{href:"https://developer.android.com/studio/run/device",target:"_blank"},"the Android documentation"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable USB debugging on the device. Open ",(0,i.kt)("strong",{parentName:"li"},"Settings"),", navigate to ",(0,i.kt)("strong",{parentName:"li"},"Developer options"),", and enable ",(0,i.kt)("strong",{parentName:"li"},"USB debugging"),". The ",(0,i.kt)("strong",{parentName:"li"},"Developer options")," menu may need to be enabled first. See ",(0,i.kt)("a",{href:"https://developer.android.com/studio/debug/dev-options",target:"_blank"},"the Android documentation")," for instructions."),(0,i.kt)("li",{parentName:"ol"},"Ensure the device has permission to connect to the computer. For macOS, no additional setup is required. For Windows, ",(0,i.kt)("a",{href:"https://developer.android.com/studio/run/oem-usb",target:"_blank"},"install the OEM USB drivers"),".")),(0,i.kt)("p",null,"Verify the connection works by connecting the device to the computer with a USB cable and using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adb devices\n")),(0,i.kt)("p",null,"The device should be listed. See the full ",(0,i.kt)("a",{href:"https://developer.android.com/studio/command-line/adb",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"adb")," documentation")," for troubleshooting and detailed information."),(0,i.kt)("h2",{id:"cordova-setup"},"Cordova Setup"),(0,i.kt)("p",null,"Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor."),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"Native Android apps are compiled with the ",(0,i.kt)("a",{href:"https://java.com/en/",target:"_blank"},"Java")," programming language. Download JDK8 from the ",(0,i.kt)("a",{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank"},"download page"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unfortunately, Cordova is not compatible with the latest version of Java."))),(0,i.kt)("h3",{id:"gradle"},"Gradle"),(0,i.kt)("a",{href:"https://gradle.org/",target:"_blank"},"Gradle")," is the build tool used in Android apps and must be installed separately. See the ",(0,i.kt)("a",{href:"https://gradle.org/install/",target:"_blank"},"install page")," for details.",(0,i.kt)("h2",{id:"project-setup"},"Project Setup"),(0,i.kt)("p",null,"Before apps can be deployed to Android simulators and devices, the native project must be configured."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Generate the native project, if it does not already exist.")),(0,i.kt)("p",{parentName:"li"},"For Capacitor, run the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor add android\n")),(0,i.kt)("p",{parentName:"li"},"For Cordova, run the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare android\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Set the ",(0,i.kt)("a",{parentName:"strong",href:"/docs/v6/reference/glossary#package-id"},"Package ID"),".")),(0,i.kt)("p",{parentName:"li"},"For Capacitor, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"capacitor.config.json")," file and modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," property."),(0,i.kt)("p",{parentName:"li"},"For Cordova, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file and modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute of the root element, ",(0,i.kt)("inlineCode",{parentName:"p"},"<widget>"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/latest/config_ref/#widget"},"the Cordova documentation")," for more information."))),(0,i.kt)("h2",{id:"running-with-capacitor"},"Running with Capacitor"),(0,i.kt)("p",null,"Capacitor uses Android Studio to build and run apps to simulators and devices."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Develop the Ionic app and sync it to the native project.")),(0,i.kt)("p",{parentName:"li"},"With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor copy android\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In Android Studio, click the Run button and then select the target simulator or device.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android Studio Run Button Area",src:n(82515).Z})),(0,i.kt)("h3",{id:"live-reload"},"Live reload"),(0,i.kt)("p",null,"To start a live-reload server run the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic capacitor run android -l --external\n")),(0,i.kt)("p",null,"When running on a device make sure the device and your development machine are connected to the same network."),(0,i.kt)("h2",{id:"running-with-cordova"},"Running with Cordova"),(0,i.kt)("p",null,"The Ionic CLI can build, copy, and deploy Ionic apps to Android simulators and devices with a single command. It can also spin up a development server, like the one used in ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic serve"),", to provide ",(0,i.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#livereload"},"live-reload")," functionality."),(0,i.kt)("p",null,"Run the following to start a long-running CLI process that boots up a live-reload server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run android -l\n")),(0,i.kt)("p",null,"Now, when changes are made to the app's source files, web assets are rebuilt and the changes are reflected on the simulator or device without having to deploy again."),(0,i.kt)("h2",{id:"debugging-android-apps"},"Debugging Android Apps"),(0,i.kt)("p",null,"Once an app is running on an Android device or emulator, it can be debugged with Chrome DevTools."),(0,i.kt)("h3",{id:"using-chrome-devtools"},"Using Chrome DevTools"),(0,i.kt)("p",null,"Chrome has web developer tool support for Android simulators and devices. Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome://inspect")," in Chrome while the simulator is running or a device is connected to the computer and ",(0,i.kt)("strong",{parentName:"p"},"Inspect")," the app that needs to be debugged."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure your application is running on the device or simulator, or it will not show up in the list."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android Chrome DevTools",src:n(1448).Z})),(0,i.kt)("h3",{id:"viewing-native-logs"},"Viewing Native Logs"),(0,i.kt)("p",null,"If running with Android Studio, native logs can be found in ",(0,i.kt)("strong",{parentName:"p"},"Logcat"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("strong",{parentName:"p"},"Logcat")," window is hidden, you can enable it in ",(0,i.kt)("strong",{parentName:"p"},"View")," ","\xbb"," ",(0,i.kt)("strong",{parentName:"p"},"Tool Windows")," ","\xbb"," ",(0,i.kt)("strong",{parentName:"p"},"Logcat"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android Studio Logcat",src:n(68399).Z})),(0,i.kt)("p",null,"You can also access ",(0,i.kt)("strong",{parentName:"p"},"Logcat")," with ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"ADB"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adb logcat\n")))}m.isMDXComponent=!0},49344:function(e,t,n){t.Z=n.p+"assets/images/android-studio-avd-setup-4c91ba253fb88a347c0e59b5b58755e1.png"},29753:function(e,t,n){t.Z=n.p+"assets/images/android-studio-sdk-setup-0fdb4c18eb7d64f4228dd0ea0d869101.png"},26457:function(e,t,n){t.Z=n.p+"assets/images/android-studio-sdk-3cba0b818ab9b1d7053b9f1b84d4cfc0.png"},1448:function(e,t,n){t.Z=n.p+"assets/images/android-chrome-devtools-b3da213af2eb0b7abac6cea4db8e66b6.png"},68399:function(e,t,n){t.Z=n.p+"assets/images/android-studio-logcat-8f5e5426c233904fd910c9ea30c91dd9.png"},82515:function(e,t,n){t.Z=n.p+"assets/images/android-studio-run-button-area-926d604dfc0b40f8c93ae9a1864249fc.png"}}]);