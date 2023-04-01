"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[76511],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),h=i,f=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return o?n.createElement(f,r(r({ref:t},u),{},{components:o})):n.createElement(f,r({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},93965:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=o(87462),i=o(63366),a=(o(67294),o(3905)),r=["components"],l={sidebar_label:"Distribute"},p="Build and Deploy your App",s={unversionedId:"react/your-first-app/distribute",id:"version-v6/react/your-first-app/distribute",isDocsHomePage:!1,title:"Build and Deploy your App",description:"Now that you have built your first app, you are going to want to get it distributed so everyone can start using it. The mechanics of building and deploying your application can be quite cumbersome. That is where Appflow comes into play. Appflow allows you to effectively generate web and native builds, push out live app updates, publish your app to the app stores, and automate the whole process. The entire Quickstart guide can be found here.",source:"@site/versioned_docs/version-v6/react/your-first-app/8-distribute.md",sourceDirName:"react/your-first-app",slug:"/react/your-first-app/distribute",permalink:"/docs/v6/react/your-first-app/distribute",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/react/your-first-app/8-distribute.md",tags:[],version:"v6",sidebarPosition:8,frontMatter:{sidebar_label:"Distribute"},sidebar:"version-v6/docs",previous:{title:"Live Reload",permalink:"/docs/v6/react/your-first-app/live-reload"},next:{title:"Lifecycle",permalink:"/docs/v6/react/lifecycle"}},u=[{value:"Connect Your Repo",id:"connect-your-repo",children:[],level:2},{value:"Install the Appflow SDK",id:"install-the-appflow-sdk",children:[],level:2},{value:"Push a Commit",id:"push-a-commit",children:[],level:2},{value:"Deploy a Live Update",id:"deploy-a-live-update",children:[],level:2},{value:"Build a Native Binary",id:"build-a-native-binary",children:[],level:2},{value:"Create an Automation",id:"create-an-automation",children:[],level:2},{value:"Create an Environment",id:"create-an-environment",children:[],level:2},{value:"Create a Native Configuration",id:"create-a-native-configuration",children:[],level:2},{value:"What\u2019s Next?",id:"whats-next",children:[],level:2}],c={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-and-deploy-your-app"},"Build and Deploy your App"),(0,a.kt)("p",null,"Now that you have built your first app, you are going to want to get it distributed so everyone can start using it. The mechanics of building and deploying your application can be quite cumbersome. That is where ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/"},"Appflow")," comes into play. Appflow allows you to effectively generate web and native builds, push out live app updates, publish your app to the app stores, and automate the whole process. The entire Quickstart guide can be found ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart"},"here"),"."),(0,a.kt)("p",null,"Below we will run through an overview of the steps."),(0,a.kt)("h2",{id:"connect-your-repo"},"Connect Your Repo"),(0,a.kt)("p",null,"Appflow works directly with Git version control and uses your existing code base as the source of truth for Deploy and Package builds. You will first need to integrate with your hosting service, such as GitHub or Bitbucket, or you can push your code directly to Appflow. Once this is completed, Appflow will have access to your code."),(0,a.kt)("p",null,"For more on connecting your code repository to Appflow, checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/connect"},"Connect your Repo")," section inside the Appflow docs."),(0,a.kt)("h2",{id:"install-the-appflow-sdk"},"Install the Appflow SDK"),(0,a.kt)("p",null,"The Appflow SDK (also known as Ionic Deploy plugin) will allow you to take advantage of arguably two of the best Appflow features: deploying live updates to your app and bypassing the app stores. Ionic Appflow's Live Update feature is shipped with Appflow SDK and features the capabilities of detecting and syncing the updates for your app that you have pushed to your identified channels within the dashboard."),(0,a.kt)("p",null,'To get the Appflow SDK plugin added to your project, you can follow the install instructions within the Appflow Dashboard by clicking on "Install Instructions" inside of the ',(0,a.kt)("inlineCode",{parentName:"p"},"Deploy > Destinations")," section. Alternatively, you can install the plugin manually by excuting the following command in your app's root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'ionic deploy add  \\\n    --app-id="YOUR_APP_ID" \\\n    --channel-name="YOUR_CHANNEL_NAME" \\\n    --update-method="background|auto|none" \\\n')),(0,a.kt)("p",null,"For prerequisite and additional instructions on installing the Appflow SDK, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/installation"},"Install the Appflow SDK")," section inside the Appflow docs."),(0,a.kt)("h2",{id:"push-a-commit"},"Push a Commit"),(0,a.kt)("p",null,"In order for Appflow to access the latest and greatest changes to your code, you will need to push a commit via the version control integration of your choosing. For those that use GitHub or Bitbucket, this would look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git add . # stage any changes\ngit commit -m "added appflow sdk" #  commit staged changes\ngit push origin main # push the changes from the main branch to your git host\n')),(0,a.kt)("p",null,"After the push is made, you will then see your commit under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Commits")," tab of the Appflow Dashboard. For more on this, take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/push"},"Push a Commit")," section inside the Appflow docs."),(0,a.kt)("h2",{id:"deploy-a-live-update"},"Deploy a Live Update"),(0,a.kt)("p",null,"With the Appflow SDK installed and your commit pushed up to the Dashboard, you are ready to deploy a live update to a device. The Live Update feature uses the installed Appflow SDK with your native application to listen to a particular Deploy Channel Destination. When a live update is assigned to a Channel Distination, that update will be deployed to user devices running binaries that are configured to listen to that specific Channel Destination."),(0,a.kt)("p",null,"To get the live update deployed, a Web build will need to be created. This can be done through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Start build")," icon from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Commits")," tab or by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"New build")," button in the top right corner of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Build > Builds")," tab. After selecting the correct commit to deploy, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," target platform and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Latest")," build stack. Depending on your Appflow plan, you will then be able to include custom environments, if any are configured. Finally, you can enable ",(0,a.kt)("inlineCode",{parentName:"p"},"Live Update")," and pick the Channel to automatically assign the build to once it successfully completes."),(0,a.kt)("p",null,"Upon completion of the Web Build, additional versioning options are available to you. After completing this section and you have a successful Deploy build, you can then assign it to the same Channel you configured the Appflow SDK to listen to when you installed it by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy live updates")," button in the build detail page. The same can be done by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy live updates")," icon on the build in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Build > Builds")," tab and select the Channel from the dropdown."),(0,a.kt)("p",null,"To receive this live update, you will need to run the app on a device or an emulator. The quickest and easiest way to do this is through the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run [ios | android] [options]\n")),(0,a.kt)("p",null,"Assuming the app is configured correctly to listen to the channel you deployed too, the app should immediately update on startup if you have chosen the auto update method during setup. If the background update method was chosen, be sure to stay in the app for about 30 seconds to ensure the update was downloaded. Then, close the application, reopen it, and you will see the updates applied!"),(0,a.kt)("p",null,"To dive into more details on the steps to deploy a live update, as well as additional information such as disabling deploy for development, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/deploy"},"Deploy a Live Update")," section inside the Appflow docs."),(0,a.kt)("h2",{id:"build-a-native-binary"},"Build a Native Binary"),(0,a.kt)("p",null,"Next up is a native binary for your app build and deploy process. This is done via the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/intro"},"Ionic Package")," service. First things first, you will need to create a ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/builds"},"Package build"),". This can be done by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Start build")," icon from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Commits")," tab or by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"New build")," button in the top right from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Build > Builds")," tab. Then you will select the proper commit for your build and fill in all of the several required fields and any optional fields that you want to specify. After filling in all of the information and the build begins, you can check out it's progress and review the logs if you encounter any errors."),(0,a.kt)("p",null,"Given a successful Package build, and iOS binary (",(0,a.kt)("inlineCode",{parentName:"p"},".ipa")," or IPA) or and Android binary (",(0,a.kt)("inlineCode",{parentName:"p"},".apk")," or APK) file becomes available to you. The file can subsequently be downloaded so you can install it on a device by clicking the file name in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Artifacts")," section in the right of the build detail page or clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Download IPA/APK")," icon on the build in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Build > Builds")," tab."),(0,a.kt)("p",null,"Further information regarding building native binaries can be found inside of the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/package"},"Build a Native Binary")," section inside the Appflow docs."),(0,a.kt)("h2",{id:"create-an-automation"},"Create an Automation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/automation/intro"},"Automations")," enable you and your team to utilize the full CI/CD powers of Appflow. You can create automations that trigger ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/builds"},"Package builds")," and ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/deploy/builds"},"Deploy builds")," every time your team commits new code to a given branch. The automations can also be configured to use different environments and native configurations for building different versions of your app for development, staging, QA and production."),(0,a.kt)("p",null,"For more information, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/automation"},"Create an Automation")," section within the Appflow docs. There you will see details on creating a single automation. However, you can create multiple automations for different branches or workflows and customize them to fit your needs. An important note is that the ability to create an automation is available for those on our ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/pricing"},"Basic plans")," and above."),(0,a.kt)("h2",{id:"create-an-environment"},"Create an Environment"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/builds"},"Package builds")," and ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/deploy/builds"},"Deploy builds")," can be futher customized via ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/automation/environments"},"Environments"),". This powerful feature allows you to create different configurations based on the environment variables passed in at build time. When combined with the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/automation/intro"},"Automation")," feature, development teams can easily configure development, staging, and production build configurations, allowing them to embrace DevOps best practices and ship better quality updates faster than ever."),(0,a.kt)("p",null,"Creating an Environment is available for those on our ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/pricing"},"Basic plans")," and above. More information on this can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/environment"},"Create an Environment")," section within the Appflow docs."),(0,a.kt)("h2",{id:"create-a-native-configuration"},"Create a Native Configuration"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/native-configs"},"Native Configurations")," allow you to easily modify common configuration values that can change between different environments (development, production, staging, etc.) so you do not need to use extra logic or manually commit them to version control. Native configurations can be attached to any ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/intro"},"Package build")," or ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/automation/intro"},"Automation"),"."),(0,a.kt)("p",null,"Native configs can be used to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overwrite the unique bundle identifier or ",(0,a.kt)("a",{parentName:"li",href:"https://cordova.apache.org/docs/en/latest/config_ref/#widget"},"id attribute")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"config.xml")),(0,a.kt)("li",{parentName:"ul"},"Overwrite the App Name as it will appear on the home screen of a device"),(0,a.kt)("li",{parentName:"ul"},"Overwrite the ",(0,a.kt)("a",{parentName:"li",href:"https://ionic.io/docs/appflow/deploy/api#plugin-variables"},"Appflow SDK (Deploy Plugin) variables and preferences"))),(0,a.kt)("p",null,"For access to the ability to create a Native Configuration, you will need to be on our ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/pricing"},"Basic plans")," and above. Additional details of this feature can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/quickstart/native-config"},"Create a Native Configuration")," section within the Appflow docs."),(0,a.kt)("h2",{id:"whats-next"},"What\u2019s Next?"),(0,a.kt)("p",null,"Congratulations! You developed a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android. Not only that, you have also then built the app and deployed it to you users devices!"),(0,a.kt)("p",null,"There are many paths to follow from here. Try adding another ",(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/components"},"Ionic UI component")," to the app, or more ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis"},"native functionality"),". The sky\u2019s the limit. Once you have added another feature run the the build and deploy process again through Appflow to get it out to your users."),(0,a.kt)("p",null,"Happy app building! \ud83d\udc99"))}d.isMDXComponent=!0}}]);