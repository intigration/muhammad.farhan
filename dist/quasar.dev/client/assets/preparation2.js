import{c as l}from"./_examples_frameless-electron-window.js";import{D as u,a as i}from"./DocPage.js";import{D as r}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as h}from"./index.js";import{b as m,d as g,w as s,h as e,f as n,i as o,e as a}from"./vendor.js";const k=e("p",null,"Before we dive in to the actual development, we need to do some preparation work.",-1),_=e("li",null,[e("p",null,[o("Make sure that after you install the Android SDK you then accept its licenses. Open the terminal and go to the folder where the SDK was installed, in tools/bin and call "),e("code",{class:"doc-token"},"sdkmanager --licenses"),o(".")])],-1),v=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("The environmental variable "),e("code",{class:"doc-token"},"ANDROID_HOME"),o(" has been deprecated and replaced with "),e("code",{class:"doc-token"},"ANDROID_SDK_ROOT"),o(". Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.")])],-1),D=e("ul",null,[e("li",null,"Add Android installation to your path:")],-1),f=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token builtin class-name"},"export"),o(),e("span",{class:"token assign-left variable"},"ANDROID_HOME"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},[o('"'),e("span",{class:"token environment constant"},"$HOME"),o('/Android/Sdk"')]),o(`
`),e("span",{class:"token builtin class-name"},"export"),o(),e("span",{class:"token assign-left variable"},"ANDROID_SDK_ROOT"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},[o('"'),e("span",{class:"token environment constant"},"$HOME"),o('/Android/Sdk"')]),o(`
`),e("span",{class:"token assign-left variable"},[e("span",{class:"token environment constant"},"PATH")]),e("span",{class:"token operator"},"="),e("span",{class:"token environment constant"},"$PATH"),e("span",{class:"token builtin class-name"},":"),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),o("/tools"),e("span",{class:"token punctuation"},";"),o(),e("span",{class:"token assign-left variable"},[e("span",{class:"token environment constant"},"PATH")]),e("span",{class:"token operator"},"="),e("span",{class:"token environment constant"},"$PATH"),e("span",{class:"token builtin class-name"},":"),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),o("/platform-tools")])],-1),A=e("blockquote",{class:"doc-note"},[e("p",null,[o("Please note that sometimes the "),e("code",{class:"doc-token"},"/Android/Sdk"),o(" folder is added inside "),e("code",{class:"doc-token"},"/Library/"),o(" inside your user folder. Check your user folder and if the "),e("code",{class:"doc-token"},"/Android/"),o(" folder is only inside "),e("code",{class:"doc-token"},"/Library/"),o(" do: "),e("code",{class:"doc-token"},'export ANDROID_SDK_ROOT="$HOME/Library/Android/Sdk"'),o(" or "),e("code",{class:"doc-token"},'export ANDROID_HOME="$HOME/Library/Android/Sdk"'),o(" instead.")])],-1),S=e("pre",{class:"doc-code"},[e("code",null,[o("setx ANDROID_HOME "),e("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),o(`
setx ANDROID_SDK_ROOT `),e("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),o(`
setx path `),e("span",{class:"token string"},[o('"%path%;%ANDROID_SDK_ROOT%'),e("span",{class:"token entity",title:"\\t"},"\\t"),o('ools;%ANDROID_SDK_ROOT%\\platform-tools"')])])],-1),O=e("ul",null,[e("li",null,[e("p",null,"Start Android studio (check the executable in the folder that you installed it in). Next step is to install the individual SDKs:")]),e("li",null,[e("p",null,"Open the “Configure” menu at the bottom of the window:"),e("p",null,[e("img",{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png",alt:"",title:"SDK manager",class:"doc-img"})])]),e("li",null,[e("p",null,"Select the desired SDKs and click on “Apply” to install the SDKs."),e("p",null,[e("img",{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png",alt:"",title:"SDK selection",class:"doc-img"})])])],-1),b=e("code",{class:"doc-token"},"sudo gem install cocoapods",-1),y=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"terminal warning"),e("p",null,"[warn] Skipping pod install because CocoaPods is not installed,")],-1),w=e("div",{class:"doc-note doc-note--danger"},[e("p",{class:"doc-note__title"},"Xcode Error"),e("p",null,"/path-to/your-project/src-capacitor/ios/App/Pods/Target Support Files/Pods-App/Pods-App.debug.xcconfig:1:1 unable to open configuration settings file")],-1),R=e("p",null,[o("In order to develop/build a Mobile app, we need to add the Capacitor mode to our Quasar project. This will use the Capacitor CLI to generate a Capacitor project in "),e("code",{class:"doc-token"},"/src-capacitor"),o(" folder.")],-1),I=e("pre",{class:"doc-code"},[e("code",null,[o("$ quasar mode "),e("span",{class:"token function"},"add"),o(" capacitor")])],-1),x=e("p",null,"To start a dev server with HMR, run the command below:",-1),C=e("pre",{class:"doc-code"},[e("code",null,[o("$ quasar dev "),e("span",{class:"token parameter variable"},"-m"),o(" capacitor "),e("span",{class:"token parameter variable"},"-T"),o(),e("span",{class:"token punctuation"},"["),o("android"),e("span",{class:"token operator"},"|"),o("ios"),e("span",{class:"token punctuation"},"]")])],-1),N=e("p",null,"Once the dev server is ready, your IDE will open (Android Studio or Xcode) and from there you can manually select the emulator (or multiple ones simultaneously!) and install the dev app on it/them. You can also run the dev app on a connected mobile/tablet device.",-1),T=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. "),e("strong",null,"DO NOT UPGRADE GRADLE"),o(" as it will break the Capacitor project. Same goes for any other requested upgrades.")]),e("img",{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle upgrade",class:"q-my-md rounded-borders",style:{"max-width":"350px"}}),e("p",null,"If you encounter any IDE errors then click on File > Invalidate caches and restart."),e("img",{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade",class:"q-mt-md rounded-borders",style:{"max-width":"350px"}})],-1),K={__name:"preparation",setup($){const p=[{id:"step-1-installation",title:"2. Step 1: Installation"},{id:"android-setup",title:"2.1. Android setup",sub:!0},{id:"ios-setup",title:"2.2. iOS setup",sub:!0},{id:"step-2-add-capacitor-quasar-mode",title:"3. Step 2: Add Capacitor Quasar Mode"},{id:"step-3-start-developing",title:"4. Step 3: Start Developing"}];return(E,t)=>(m(),g(u,{title:"Preparation for Capacitor App",desc:"(@quasar/app-vite) What you need to do before developing a Quasar hybrid mobile app with Capacitor.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-capacitor-apps/preparation",toc:p},{default:s(()=>[k,e("h2",{id:"step-1-installation",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=d=>n(l)("step-1-installation"))},"Step 1: Installation"),e("h3",{id:"android-setup",class:"doc-heading doc-h3",onClick:t[1]||(t[1]=d=>n(l)("android-setup"))},"Android setup"),e("ul",null,[e("li",null,[e("p",null,[o("You will need to install Android Studio and the Android platform SDK on your machine. You can "),a(i,{to:"https://developer.android.com/studio/index.html"},{default:s(()=>[o("download the Android Studio here")]),_:1}),o(" and follow these "),a(i,{to:"https://developer.android.com/studio/install.html"},{default:s(()=>[o("installation steps")]),_:1}),o(" afterwards.")])]),_]),v,D,e("h4",{id:"unix-macos-linux-",class:"doc-heading doc-h4",onClick:t[2]||(t[2]=d=>n(l)("unix-macos-linux-"))},"Unix (macOS, linux)"),a(n(r),null,{default:s(()=>[f,a(c,{lang:"bash"})]),_:1}),A,e("h4",{id:"windows",class:"doc-heading doc-h4",onClick:t[3]||(t[3]=d=>n(l)("windows"))},"Windows"),a(n(r),null,{default:s(()=>[S,a(c,{lang:"bash"})]),_:1}),O,e("h3",{id:"ios-setup",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=d=>n(l)("ios-setup"))},"iOS setup"),e("p",null,[o("You will need a macOS with "),a(i,{to:"https://developer.apple.com/xcode/"},{default:s(()=>[o("Xcode")]),_:1}),o(" installed. After you’ve installed it, open Xcode in order to get the license prompt. Accept the license, then you can close it.")]),e("h4",{id:"cocoapods",class:"doc-heading doc-h4",onClick:t[5]||(t[5]=d=>n(l)("cocoapods"))},"CocoaPods"),e("p",null,[o("If you haven’t installed "),a(i,{to:"https://cocoapods.org/"},{default:s(()=>[o("CocoaPods")]),_:1}),o(", please install it by using the command: "),b,o(". Otherwise, you may encounter errors during development or building, such as:")]),y,w,e("h2",{id:"step-2-add-capacitor-quasar-mode",class:"doc-heading doc-h2",onClick:t[6]||(t[6]=d=>n(l)("step-2-add-capacitor-quasar-mode"))},"Step 2: Add Capacitor Quasar Mode"),R,a(n(r),null,{default:s(()=>[I,a(c,{lang:"bash"})]),_:1}),e("h2",{id:"step-3-start-developing",class:"doc-heading doc-h2",onClick:t[7]||(t[7]=d=>n(l)("step-3-start-developing"))},"Step 3: Start Developing"),x,a(n(r),null,{default:s(()=>[C,a(c,{lang:"bash"})]),_:1}),N,T]),_:1}))}},B=h(K,[["__file","preparation.md"]]);export{B as default};
