import{mergeProps as R,withCtx as l,createTextVNode as a,unref as i,createVNode as e,useSSRContext as y}from"vue";import{ssrRenderComponent as d,ssrRenderStyle as A}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as w,a as m}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as x}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"preparation",__ssrInlineRender:!0,setup(D){const g=[{id:"step-1-installation",title:"2. Step 1: Installation"},{id:"android-setup",title:"2.1. Android setup",sub:!0},{id:"ios-setup",title:"2.2. iOS setup",sub:!0},{id:"step-2-add-capacitor-quasar-mode",title:"3. Step 2: Add Capacitor Quasar Mode"},{id:"step-3-start-developing",title:"4. Step 3: Start Developing"}];return($,S,f,b)=>{S(d(w,R({title:"Preparation for Capacitor App",desc:"(@quasar/app-webpack) What you need to do before developing a Quasar hybrid mobile app with Capacitor.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-capacitor-apps/preparation",toc:g},b),{default:l((C,s,u,n)=>{if(s)s(`<p${n}>Before we dive in to the actual development, we need to do some preparation work.</p><h2 id="step-1-installation" class="doc-heading doc-h2"${n}>Step 1: Installation</h2><h3 id="android-setup" class="doc-heading doc-h3"${n}>Android setup</h3><ul${n}><li${n}><p${n}>You will need to install Android Studio and the Android platform SDK on your machine. You can `),s(d(m,{to:"https://developer.android.com/studio/index.html"},{default:l((r,o,p,t)=>{if(o)o("download the Android Studio here");else return[a("download the Android Studio here")]}),_:1},u,n)),s(" and follow these "),s(d(m,{to:"https://developer.android.com/studio/install.html"},{default:l((r,o,p,t)=>{if(o)o("installation steps");else return[a("installation steps")]}),_:1},u,n)),s(` afterwards.</p></li><li${n}><p${n}>Make sure that after you install the Android SDK you then accept its licenses. Open the terminal and go to the folder where the SDK was installed, in tools/bin and call <code class="doc-token"${n}>sdkmanager --licenses</code>.</p></li></ul><div class="doc-note doc-note--warning"${n}><p class="doc-note__title"${n}>WARNING</p><p${n}>The environmental variable <code class="doc-token"${n}>ANDROID_HOME</code> has been deprecated and replaced with <code class="doc-token"${n}>ANDROID_SDK_ROOT</code>. Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.</p></div><ul${n}><li${n}>Add Android installation to your path:</li></ul><h4 id="unix-macos-linux-" class="doc-heading doc-h4"${n}>Unix (macOS, linux)</h4>`),s(d(i(k),null,{default:l((r,o,p,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token builtin class-name"${t}>export</span> <span class="token assign-left variable"${t}>ANDROID_HOME</span><span class="token operator"${t}>=</span><span class="token string"${t}>&quot;<span class="token environment constant"${t}>$HOME</span>/Android/Sdk&quot;</span>
<span class="token builtin class-name"${t}>export</span> <span class="token assign-left variable"${t}>ANDROID_SDK_ROOT</span><span class="token operator"${t}>=</span><span class="token string"${t}>&quot;<span class="token environment constant"${t}>$HOME</span>/Android/Sdk&quot;</span>
<span class="token assign-left variable"${t}><span class="token environment constant"${t}>PATH</span></span><span class="token operator"${t}>=</span><span class="token environment constant"${t}>$PATH</span><span class="token builtin class-name"${t}>:</span><span class="token variable"${t}>$ANDROID_SDK_ROOT</span>/tools<span class="token punctuation"${t}>;</span> <span class="token assign-left variable"${t}><span class="token environment constant"${t}>PATH</span></span><span class="token operator"${t}>=</span><span class="token environment constant"${t}>$PATH</span><span class="token builtin class-name"${t}>:</span><span class="token variable"${t}>$ANDROID_SDK_ROOT</span>/platform-tools</code></pre>`),o(d(c,{lang:"bash"},null,p,t));else return[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"ANDROID_HOME"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},[a('"'),e("span",{class:"token environment constant"},"$HOME"),a('/Android/Sdk"')]),a(`
`),e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"ANDROID_SDK_ROOT"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},[a('"'),e("span",{class:"token environment constant"},"$HOME"),a('/Android/Sdk"')]),a(`
`),e("span",{class:"token assign-left variable"},[e("span",{class:"token environment constant"},"PATH")]),e("span",{class:"token operator"},"="),e("span",{class:"token environment constant"},"$PATH"),e("span",{class:"token builtin class-name"},":"),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),a("/tools"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token assign-left variable"},[e("span",{class:"token environment constant"},"PATH")]),e("span",{class:"token operator"},"="),e("span",{class:"token environment constant"},"$PATH"),e("span",{class:"token builtin class-name"},":"),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),a("/platform-tools")])]),e(c,{lang:"bash"})]}),_:1},u,n)),s(`<blockquote class="doc-note"${n}><p${n}>Please note that sometimes the <code class="doc-token"${n}>/Android/Sdk</code> folder is added inside <code class="doc-token"${n}>/Library/</code> inside your user folder. Check your user folder and if the <code class="doc-token"${n}>/Android/</code> folder is only inside <code class="doc-token"${n}>/Library/</code> do: <code class="doc-token"${n}>export ANDROID_SDK_ROOT=&quot;$HOME/Library/Android/Sdk&quot;</code> or <code class="doc-token"${n}>export ANDROID_HOME=&quot;$HOME/Library/Android/Sdk&quot;</code> instead.</p></blockquote><h4 id="windows" class="doc-heading doc-h4"${n}>Windows</h4>`),s(d(i(k),null,{default:l((r,o,p,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}>setx ANDROID_HOME <span class="token string"${t}>&quot;%USERPROFILE%\\AppData\\Local\\Android\\Sdk&quot;</span>
setx ANDROID_SDK_ROOT <span class="token string"${t}>&quot;%USERPROFILE%\\AppData\\Local\\Android\\Sdk&quot;</span>
setx path <span class="token string"${t}>&quot;%path%;%ANDROID_SDK_ROOT%<span class="token entity" title="\\t"${t}>\\t</span>ools;%ANDROID_SDK_ROOT%\\platform-tools&quot;</span></code></pre>`),o(d(c,{lang:"bash"},null,p,t));else return[e("pre",{class:"doc-code"},[e("code",null,[a("setx ANDROID_HOME "),e("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),a(`
setx ANDROID_SDK_ROOT `),e("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),a(`
setx path `),e("span",{class:"token string"},[a('"%path%;%ANDROID_SDK_ROOT%'),e("span",{class:"token entity",title:"\\t"},"\\t"),a('ools;%ANDROID_SDK_ROOT%\\platform-tools"')])])]),e(c,{lang:"bash"})]}),_:1},u,n)),s(`<ul${n}><li${n}><p${n}>Start Android studio (check the executable in the folder that you installed it in). Next step is to install the individual SDKs:</p></li><li${n}><p${n}>Open the “Configure” menu at the bottom of the window:</p><p${n}><img src="https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png" alt="" title="SDK manager" class="doc-img"${n}></p></li><li${n}><p${n}>Select the desired SDKs and click on “Apply” to install the SDKs.</p><p${n}><img src="https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png" alt="" title="SDK selection" class="doc-img"${n}></p></li></ul><h3 id="ios-setup" class="doc-heading doc-h3"${n}>iOS setup</h3><p${n}>You will need a macOS with `),s(d(m,{to:"https://developer.apple.com/xcode/"},{default:l((r,o,p,t)=>{if(o)o("Xcode");else return[a("Xcode")]}),_:1},u,n)),s(` installed. After you’ve installed it, open Xcode in order to get the license prompt. Accept the license, then you can close it.</p><h4 id="cocoapods" class="doc-heading doc-h4"${n}>CocoaPods</h4><p${n}>If you haven’t installed `),s(d(m,{to:"https://cocoapods.org/"},{default:l((r,o,p,t)=>{if(o)o("CocoaPods");else return[a("CocoaPods")]}),_:1},u,n)),s(`, please install it by using the command: <code class="doc-token"${n}>sudo gem install cocoapods</code>. Otherwise, you may encounter errors during development or building, such as:</p><div class="doc-note doc-note--warning"${n}><p class="doc-note__title"${n}>terminal warning</p><p${n}>[warn] Skipping pod install because CocoaPods is not installed,</p></div><div class="doc-note doc-note--danger"${n}><p class="doc-note__title"${n}>Xcode Error</p><p${n}>/path-to/your-project/src-capacitor/ios/App/Pods/Target Support Files/Pods-App/Pods-App.debug.xcconfig:1:1 unable to open configuration settings file</p></div><h2 id="step-2-add-capacitor-quasar-mode" class="doc-heading doc-h2"${n}>Step 2: Add Capacitor Quasar Mode</h2><p${n}>In order to develop/build a Mobile app, we need to add the Capacitor mode to our Quasar project. This will use the Capacitor CLI to generate a Capacitor project in <code class="doc-token"${n}>/src-capacitor</code> folder.</p>`),s(d(i(k),null,{default:l((r,o,p,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}>$ quasar mode <span class="token function"${t}>add</span> capacitor</code></pre>`),o(d(c,{lang:"bash"},null,p,t));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ quasar mode "),e("span",{class:"token function"},"add"),a(" capacitor")])]),e(c,{lang:"bash"})]}),_:1},u,n)),s(`<h2 id="step-3-start-developing" class="doc-heading doc-h2"${n}>Step 3: Start Developing</h2><p${n}>To start a dev server with HMR, run the command below:</p>`),s(d(i(k),null,{default:l((r,o,p,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}>$ quasar dev <span class="token parameter variable"${t}>-m</span> capacitor <span class="token parameter variable"${t}>-T</span> <span class="token punctuation"${t}>[</span>android<span class="token operator"${t}>|</span>ios<span class="token punctuation"${t}>]</span></code></pre>`),o(d(c,{lang:"bash"},null,p,t));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ quasar dev "),e("span",{class:"token parameter variable"},"-m"),a(" capacitor "),e("span",{class:"token parameter variable"},"-T"),a(),e("span",{class:"token punctuation"},"["),a("android"),e("span",{class:"token operator"},"|"),a("ios"),e("span",{class:"token punctuation"},"]")])]),e(c,{lang:"bash"})]}),_:1},u,n)),s(`<p${n}>Once the dev server is ready, your IDE will open (Android Studio or Xcode) and from there you can manually select the emulator (or multiple ones simultaneously!) and install the dev app on it/them. You can also run the dev app on a connected mobile/tablet device.</p><div class="doc-note doc-note--warning"${n}><p class="doc-note__title"${n}>WARNING</p><p${n}>In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. <strong${n}>DO NOT UPGRADE GRADLE</strong> as it will break the Capacitor project. Same goes for any other requested upgrades.</p><img src="https://cdn.quasar.dev/img/gradle-upgrade-notice.png" alt="Gradle upgrade" class="q-my-md rounded-borders" style="${A({"max-width":"350px"})}"${n}><p${n}>If you encounter any IDE errors then click on File &gt; Invalidate caches and restart.</p><img src="https://cdn.quasar.dev/img/gradle-invalidate-cache.png" alt="Gradle upgrade" class="q-mt-md rounded-borders" style="${A({"max-width":"350px"})}"${n}></div>`);else return[e("p",null,"Before we dive in to the actual development, we need to do some preparation work."),e("h2",{id:"step-1-installation",class:"doc-heading doc-h2",onClick:r=>i(h)("step-1-installation")},"Step 1: Installation",8,["onClick"]),e("h3",{id:"android-setup",class:"doc-heading doc-h3",onClick:r=>i(h)("android-setup")},"Android setup",8,["onClick"]),e("ul",null,[e("li",null,[e("p",null,[a("You will need to install Android Studio and the Android platform SDK on your machine. You can "),e(m,{to:"https://developer.android.com/studio/index.html"},{default:l(()=>[a("download the Android Studio here")]),_:1}),a(" and follow these "),e(m,{to:"https://developer.android.com/studio/install.html"},{default:l(()=>[a("installation steps")]),_:1}),a(" afterwards.")])]),e("li",null,[e("p",null,[a("Make sure that after you install the Android SDK you then accept its licenses. Open the terminal and go to the folder where the SDK was installed, in tools/bin and call "),e("code",{class:"doc-token"},"sdkmanager --licenses"),a(".")])])]),e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[a("The environmental variable "),e("code",{class:"doc-token"},"ANDROID_HOME"),a(" has been deprecated and replaced with "),e("code",{class:"doc-token"},"ANDROID_SDK_ROOT"),a(". Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.")])]),e("ul",null,[e("li",null,"Add Android installation to your path:")]),e("h4",{id:"unix-macos-linux-",class:"doc-heading doc-h4",onClick:r=>i(h)("unix-macos-linux-")},"Unix (macOS, linux)",8,["onClick"]),e(i(k),null,{default:l(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"ANDROID_HOME"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},[a('"'),e("span",{class:"token environment constant"},"$HOME"),a('/Android/Sdk"')]),a(`
`),e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"ANDROID_SDK_ROOT"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},[a('"'),e("span",{class:"token environment constant"},"$HOME"),a('/Android/Sdk"')]),a(`
`),e("span",{class:"token assign-left variable"},[e("span",{class:"token environment constant"},"PATH")]),e("span",{class:"token operator"},"="),e("span",{class:"token environment constant"},"$PATH"),e("span",{class:"token builtin class-name"},":"),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),a("/tools"),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token assign-left variable"},[e("span",{class:"token environment constant"},"PATH")]),e("span",{class:"token operator"},"="),e("span",{class:"token environment constant"},"$PATH"),e("span",{class:"token builtin class-name"},":"),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT"),a("/platform-tools")])]),e(c,{lang:"bash"})]),_:1}),e("blockquote",{class:"doc-note"},[e("p",null,[a("Please note that sometimes the "),e("code",{class:"doc-token"},"/Android/Sdk"),a(" folder is added inside "),e("code",{class:"doc-token"},"/Library/"),a(" inside your user folder. Check your user folder and if the "),e("code",{class:"doc-token"},"/Android/"),a(" folder is only inside "),e("code",{class:"doc-token"},"/Library/"),a(" do: "),e("code",{class:"doc-token"},'export ANDROID_SDK_ROOT="$HOME/Library/Android/Sdk"'),a(" or "),e("code",{class:"doc-token"},'export ANDROID_HOME="$HOME/Library/Android/Sdk"'),a(" instead.")])]),e("h4",{id:"windows",class:"doc-heading doc-h4",onClick:r=>i(h)("windows")},"Windows",8,["onClick"]),e(i(k),null,{default:l(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("setx ANDROID_HOME "),e("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),a(`
setx ANDROID_SDK_ROOT `),e("span",{class:"token string"},'"%USERPROFILE%\\AppData\\Local\\Android\\Sdk"'),a(`
setx path `),e("span",{class:"token string"},[a('"%path%;%ANDROID_SDK_ROOT%'),e("span",{class:"token entity",title:"\\t"},"\\t"),a('ools;%ANDROID_SDK_ROOT%\\platform-tools"')])])]),e(c,{lang:"bash"})]),_:1}),e("ul",null,[e("li",null,[e("p",null,"Start Android studio (check the executable in the folder that you installed it in). Next step is to install the individual SDKs:")]),e("li",null,[e("p",null,"Open the “Configure” menu at the bottom of the window:"),e("p",null,[e("img",{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-Menu.png",alt:"",title:"SDK manager",class:"doc-img"})])]),e("li",null,[e("p",null,"Select the desired SDKs and click on “Apply” to install the SDKs."),e("p",null,[e("img",{src:"https://cdn.quasar.dev/img/Android-Studio-SDK-selection.png",alt:"",title:"SDK selection",class:"doc-img"})])])]),e("h3",{id:"ios-setup",class:"doc-heading doc-h3",onClick:r=>i(h)("ios-setup")},"iOS setup",8,["onClick"]),e("p",null,[a("You will need a macOS with "),e(m,{to:"https://developer.apple.com/xcode/"},{default:l(()=>[a("Xcode")]),_:1}),a(" installed. After you’ve installed it, open Xcode in order to get the license prompt. Accept the license, then you can close it.")]),e("h4",{id:"cocoapods",class:"doc-heading doc-h4",onClick:r=>i(h)("cocoapods")},"CocoaPods",8,["onClick"]),e("p",null,[a("If you haven’t installed "),e(m,{to:"https://cocoapods.org/"},{default:l(()=>[a("CocoaPods")]),_:1}),a(", please install it by using the command: "),e("code",{class:"doc-token"},"sudo gem install cocoapods"),a(". Otherwise, you may encounter errors during development or building, such as:")]),e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"terminal warning"),e("p",null,"[warn] Skipping pod install because CocoaPods is not installed,")]),e("div",{class:"doc-note doc-note--danger"},[e("p",{class:"doc-note__title"},"Xcode Error"),e("p",null,"/path-to/your-project/src-capacitor/ios/App/Pods/Target Support Files/Pods-App/Pods-App.debug.xcconfig:1:1 unable to open configuration settings file")]),e("h2",{id:"step-2-add-capacitor-quasar-mode",class:"doc-heading doc-h2",onClick:r=>i(h)("step-2-add-capacitor-quasar-mode")},"Step 2: Add Capacitor Quasar Mode",8,["onClick"]),e("p",null,[a("In order to develop/build a Mobile app, we need to add the Capacitor mode to our Quasar project. This will use the Capacitor CLI to generate a Capacitor project in "),e("code",{class:"doc-token"},"/src-capacitor"),a(" folder.")]),e(i(k),null,{default:l(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ quasar mode "),e("span",{class:"token function"},"add"),a(" capacitor")])]),e(c,{lang:"bash"})]),_:1}),e("h2",{id:"step-3-start-developing",class:"doc-heading doc-h2",onClick:r=>i(h)("step-3-start-developing")},"Step 3: Start Developing",8,["onClick"]),e("p",null,"To start a dev server with HMR, run the command below:"),e(i(k),null,{default:l(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ quasar dev "),e("span",{class:"token parameter variable"},"-m"),a(" capacitor "),e("span",{class:"token parameter variable"},"-T"),a(),e("span",{class:"token punctuation"},"["),a("android"),e("span",{class:"token operator"},"|"),a("ios"),e("span",{class:"token punctuation"},"]")])]),e(c,{lang:"bash"})]),_:1}),e("p",null,"Once the dev server is ready, your IDE will open (Android Studio or Xcode) and from there you can manually select the emulator (or multiple ones simultaneously!) and install the dev app on it/them. You can also run the dev app on a connected mobile/tablet device."),e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[a("In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. "),e("strong",null,"DO NOT UPGRADE GRADLE"),a(" as it will break the Capacitor project. Same goes for any other requested upgrades.")]),e("img",{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle upgrade",class:"q-my-md rounded-borders",style:{"max-width":"350px"}}),e("p",null,"If you encounter any IDE errors then click on File > Invalidate caches and restart."),e("img",{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade",class:"q-mt-md rounded-borders",style:{"max-width":"350px"}})])]}),_:1},f))}}},O=v.setup;v.setup=(D,g)=>{const $=y();return($.modules||($.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-capacitor-apps/preparation.md"),O?O(D,g):void 0};const W=x(v,[["__file","preparation.md"]]);export{W as default};
