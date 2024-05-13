import{mergeProps as D,withCtx as r,createTextVNode as o,unref as s,createVNode as e,useSSRContext as y}from"vue";import{ssrRenderComponent as u,ssrRenderStyle as q}from"vue/server-renderer";import{c as b}from"./page-utils-C-QWsEHe.js";import{D as O,a as h}from"./DocPage-DKr-0pQn.js";import{D as S}from"./DocPrerender-DPOnWPFO.js";import{C as d}from"./CopyButton-l3ndfN49.js";import{_ as $}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const m={__name:"troubleshooting-and-tips",__ssrInlineRender:!0,setup(f){const T=[{id:"q-capacitor",title:"2. $q.capacitor"},{id:"android-tips",title:"3. Android Tips"},{id:"android-remote-debugging",title:"3.1. Android remote debugging",sub:!0},{id:"accept-licenses",title:"3.2. Accept Licenses",sub:!0},{id:"android-sdk-not-found-after-installation-of-the-sdk",title:"3.3. Android SDK not found after installation of the SDK",sub:!0},{id:"android-studio",title:"3.4. Android Studio",sub:!0},{id:"setting-up-device-on-linux",title:"3.5. Setting up device on Linux",sub:!0},{id:"ios-tips",title:"4. iOS Tips"},{id:"ios-remote-debugging",title:"4.1. iOS remote debugging",sub:!0},{id:"status-bar-and-notch-safe-areas",title:"4.2. Status bar and notch safe-areas",sub:!0}];return(g,M,k,A)=>{M(u(O,D({title:"Capacitor Troubleshooting and Tips",desc:"(@quasar/app-webpack) Tips and tricks for a Quasar hybrid mobile app with Capacitor.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-capacitor-apps/troubleshooting-and-tips",toc:T},A),{default:r((v,i,p,n)=>{if(i)i(`<h2 id="q-capacitor" class="doc-heading doc-h2"${n}>$q.capacitor</h2><p${n}>While you are developing a Mobile App with Capacitor Mode, you can access <code class="doc-token"${n}>$q.capacitor</code> in your Vue files. This is an alias to the global <code class="doc-token"${n}>Capacitor</code> Object.</p><h2 id="android-tips" class="doc-heading doc-h2"${n}>Android Tips</h2><h3 id="android-remote-debugging" class="doc-heading doc-h3"${n}>Android remote debugging</h3><p${n}>If you are debugging Android Apps, you can use Google Chrome `),i(u(h,{to:"https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en"},{default:r((l,a,c,t)=>{if(a)a("Remote Debugging");else return[o("Remote Debugging")]}),_:1},p,n)),i(` through a USB cable attached to your Android phone/tablet. It can be used for emulator too.</p><p${n}>This way you have Chrome Dev Tools directly for your App running on the emulator/phone/table. Inspect elements, check console output, and so on and so forth.</p><p${n}><img src="https://cdn.quasar.dev/img/remote-debug.png" alt="" title="Android Remote Debugging" class="doc-img"${n}><img src="https://cdn.quasar.dev/img/remote-debug-2.png" alt="" title="Android Remote Debugging" class="doc-img"${n}></p><h3 id="accept-licenses" class="doc-heading doc-h3"${n}>Accept Licenses</h3><p${n}>If you are having problems getting Android builds to finish and you see a message like:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>&gt; Failed to install the following Android SDK packages as some licenses have not been accepted.</code></pre>`),a(u(d,null,null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,"> Failed to install the following Android SDK packages as some licenses have not been accepted.")]),e(d)]}),_:1},p,n)),i(`<p${n}>If this is the case you need to accept ALL the licenses. Thankfully there is a tool for this:</p><ul${n}><li${n}>Linux: <code class="doc-token"${n}>sdkmanager --licenses</code></li><li${n}>macOS: <code class="doc-token"${n}>~/Library/Android/sdk/tools/bin/sdkmanager --licenses</code></li><li${n}>Windows: <code class="doc-token"${n}>%ANDROID_SDK_ROOT%/tools/bin/sdkmanager --licenses</code></li></ul><h3 id="android-sdk-not-found-after-installation-of-the-sdk" class="doc-heading doc-h3"${n}>Android SDK not found after installation of the SDK</h3><div class="doc-note doc-note--warning"${n}><p class="doc-note__title"${n}>WARNING</p><p${n}>The environmental variable <code class="doc-token"${n}>ANDROID_HOME</code> has been deprecated and replaced with <code class="doc-token"${n}>ANDROID_SDK_ROOT</code>. Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.</p></div><p${n}>Some newer Debian-based OS (e.g. ubuntu, elementary OS) might leave you with a <code class="doc-token"${n}>Android SDK not found.</code> after you installed and (correctly) configured the environment.</p><p${n}>This could have two different reasons: Usually the paths aren’t configured correctly. The first step is to verify if your paths are set correctly. This can be done by running the following commands:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>$ <span class="token builtin class-name"${t}>echo</span> <span class="token variable"${t}>$ANDROID_HOME</span>

<span class="token comment"${t}># or</span>

$ <span class="token builtin class-name"${t}>echo</span> <span class="token variable"${t}>$ANDROID_SDK_ROOT</span></code></pre>`),a(u(d,{lang:"bash"},null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,[o("$ "),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token variable"},"$ANDROID_HOME"),o(`

`),e("span",{class:"token comment"},"# or"),o(`

$ `),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT")])]),e(d,{lang:"bash"})]}),_:1},p,n)),i(`<p${n}>The expected output should be a path similar to this <code class="doc-token"${n}>$HOME/Android/Sdk</code>. After this run:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>$ <span class="token function"${t}>ls</span> <span class="token parameter variable"${t}>-la</span> <span class="token variable"${t}>$ANDROID_HOME</span>

<span class="token comment"${t}># or</span>

$ <span class="token function"${t}>ls</span> <span class="token parameter variable"${t}>-la</span> <span class="token variable"${t}>$ANDROID_SDK_ROOT</span></code></pre>`),a(u(d,{lang:"bash"},null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,[o("$ "),e("span",{class:"token function"},"ls"),o(),e("span",{class:"token parameter variable"},"-la"),o(),e("span",{class:"token variable"},"$ANDROID_HOME"),o(`

`),e("span",{class:"token comment"},"# or"),o(`

$ `),e("span",{class:"token function"},"ls"),o(),e("span",{class:"token parameter variable"},"-la"),o(),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT")])]),e(d,{lang:"bash"})]}),_:1},p,n)),i(`<p${n}>To ensure the folder contains the SDK. The expected output should contain folders like ‘tools’, ‘sources’, ‘platform-tools’, etc.</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>$ <span class="token builtin class-name"${t}>echo</span> <span class="token environment constant"${t}>$PATH</span></code></pre>`),a(u(d,{lang:"bash"},null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,[o("$ "),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token environment constant"},"$PATH")])]),e(d,{lang:"bash"})]}),_:1},p,n)),i(`<p${n}>The output should contain each one entry for the Android SDK ‘tools’-folder and ‘platform-tools’-tools. This could look like this:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>/home/your_user/bin:/home/your_user/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/home/your_user/Android/Sdk/tools:/home/your_user/Android/Sdk/platform-tools</code></pre>`),a(u(d,{lang:"bash"},null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,"/home/your_user/bin:/home/your_user/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/home/your_user/Android/Sdk/tools:/home/your_user/Android/Sdk/platform-tools")]),e(d,{lang:"bash"})]}),_:1},p,n)),i(`<blockquote class="doc-note"${n}><p${n}>If you ensured your paths are set correctly and still get the error, you can try the following fix: `),i(u(h,{to:"https://github.com/meteor/meteor/issues/8464#issuecomment-288112504"},{default:r((l,a,c,t)=>{if(a)a("Replacing the Android Studio ‘tools’ folder manually");else return[o("Replacing the Android Studio ‘tools’ folder manually")]}),_:1},p,n)),i(`</p></blockquote><h3 id="android-studio" class="doc-heading doc-h3"${n}>Android Studio</h3><p${n}>In Android Studio (if you open it on <code class="doc-token"${n}>/src-capacitor/android</code>), you will be greeted with a message recommending to upgrade the Gradle version. <strong${n}>DO NOT UPGRADE GRADLE</strong> as it will break the Capacitor project. Same goes for any other requested upgrades.</p><img src="https://cdn.quasar.dev/img/gradle-upgrade-notice.png" alt="Gradle upgrade" class="q-mb-md rounded-borders" style="${q({"max-width":"350px"})}"${n}><p${n}>If you encounter any IDE errors then click on File &gt; Invalidate caches and restart.</p><img src="https://cdn.quasar.dev/img/gradle-invalidate-cache.png" alt="Gradle upgrade" class="rounded-borders" style="${q({"max-width":"350px"})}"${n}><h3 id="setting-up-device-on-linux" class="doc-heading doc-h3"${n}>Setting up device on Linux</h3><p${n}>You may bump into <code class="doc-token"${n}>?????? no permissions</code> problem when trying to run your App directly on an Android phone/tablet.</p><p${n}>Here’s how you fix this:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}># create the .rules file and insert the content</span>
<span class="token comment"${t}># from below this example</span>
<span class="token function"${t}>sudo</span> <span class="token function"${t}>vim</span> /etc/udev/rules.d/51-android.rules
<span class="token function"${t}>sudo</span> <span class="token function"${t}>chmod</span> <span class="token number"${t}>644</span>   /etc/udev/rules.d/51-android.rules
<span class="token function"${t}>sudo</span> <span class="token function"${t}>chown</span> root. /etc/udev/rules.d/51-android.rules
<span class="token function"${t}>sudo</span> <span class="token function"${t}>service</span> udev restart
<span class="token function"${t}>sudo</span> <span class="token function"${t}>killall</span> adb</code></pre>`),a(u(d,{lang:"bash"},null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# create the .rules file and insert the content"),o(`
`),e("span",{class:"token comment"},"# from below this example"),o(`
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"vim"),o(` /etc/udev/rules.d/51-android.rules
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"chmod"),o(),e("span",{class:"token number"},"644"),o(`   /etc/udev/rules.d/51-android.rules
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"chown"),o(` root. /etc/udev/rules.d/51-android.rules
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"service"),o(` udev restart
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"killall"),o(" adb")])]),e(d,{lang:"bash"})]}),_:1},p,n)),i(`<p${n}>The content for <code class="doc-token"${n}>51-android.rules</code>:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0bb4&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0e79&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0502&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0b05&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;413c&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0489&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;091e&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;18d1&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0bb4&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;12d1&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;24e3&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;2116&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0482&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;17ef&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;1004&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;22b8&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0409&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;2080&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0955&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;2257&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;10a9&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;1d4d&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0471&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;04da&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;05c6&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;1f53&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;04e8&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;04dd&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0fce&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;0930&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;19d2&quot;, MODE=&quot;0666&quot;
SUBSYSTEM==&quot;usb&quot;, ATTRS{idVendor}==&quot;1bbb&quot;, MODE=&quot;0666&quot;</code></pre>`),a(u(d,null,null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,`SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0e79", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0502", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0b05", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="413c", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0489", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="091e", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="18d1", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="12d1", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="24e3", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2116", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0482", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="17ef", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1004", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="22b8", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0409", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2080", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0955", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2257", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="10a9", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1d4d", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0471", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04da", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="05c6", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1f53", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04e8", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04dd", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fce", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0930", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="19d2", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1bbb", MODE="0666"`)]),e(d)]}),_:1},p,n)),i(`<p${n}>Now running <code class="doc-token"${n}>adb devices</code> should discover your device.</p><h2 id="ios-tips" class="doc-heading doc-h2"${n}>iOS Tips</h2><h3 id="ios-remote-debugging" class="doc-heading doc-h3"${n}>iOS remote debugging</h3><p${n}>If you are debugging iOS Apps, you can use the Safari developer tools to remotely debug through a USB cable attached to your iOS phone/tablet. It can be used for emulator too.</p><p${n}>This way you have Safari developer tools directly for your App running on the emulator/phone/table. Inspect elements, check console output, and so on and so forth.</p><p${n}>First enable the “developer” menu option in the Settings of Safari. Then if you navigate to the “developer” menu option you will see your emulator or connected device listed near the top. From here you can open the developer tools.</p><h3 id="status-bar-and-notch-safe-areas" class="doc-heading doc-h3"${n}>Status bar and notch safe-areas</h3><p${n}>Since mobile phones have a status bar and/or notches, your app’s styling might need some tweaking when building on Capacitor. In order to prevent parts of your app from going behind the status bar, there is a global CSS variable that can be used for creating a “safe-area”. This variable can then be applied in your app’s top and bottom padding or margin.</p><p${n}>Quasar has support for these CSS safe-areas by default in QHeader/QFooter and Notify. However it’s important to always check your Capacitor build on several models to see if all cases of your app are dealing with the safe areas correctly.</p><p${n}>In cases you need to manually tweak your CSS you can do so with:</p>`),i(u(s(S),null,{default:r((l,a,c,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}>// for your app&#39;s header
padding-top: constant(safe-area-inset-top) // for iOS 11.0
padding-top: env(safe-area-inset-top) // for iOS 11.2 +
// for your app&#39;s footer
padding-bottom: constant(safe-area-inset-bottom)
padding-bottom: env(safe-area-inset-bottom)</code></pre>`),a(u(d,null,null,c,t));else return[e("pre",{class:"doc-code"},[e("code",null,`// for your app's header
padding-top: constant(safe-area-inset-top) // for iOS 11.0
padding-top: env(safe-area-inset-top) // for iOS 11.2 +
// for your app's footer
padding-bottom: constant(safe-area-inset-bottom)
padding-bottom: env(safe-area-inset-bottom)`)]),e(d)]}),_:1},p,n)),i(`<p${n}>Of course you can also use the above example with <code class="doc-token"${n}>margin</code> instead of <code class="doc-token"${n}>padding</code> depending on your app.</p>`);else return[e("h2",{id:"q-capacitor",class:"doc-heading doc-h2",onClick:l=>s(b)("q-capacitor")},"$q.capacitor",8,["onClick"]),e("p",null,[o("While you are developing a Mobile App with Capacitor Mode, you can access "),e("code",{class:"doc-token"},"$q.capacitor"),o(" in your Vue files. This is an alias to the global "),e("code",{class:"doc-token"},"Capacitor"),o(" Object.")]),e("h2",{id:"android-tips",class:"doc-heading doc-h2",onClick:l=>s(b)("android-tips")},"Android Tips",8,["onClick"]),e("h3",{id:"android-remote-debugging",class:"doc-heading doc-h3",onClick:l=>s(b)("android-remote-debugging")},"Android remote debugging",8,["onClick"]),e("p",null,[o("If you are debugging Android Apps, you can use Google Chrome "),e(h,{to:"https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en"},{default:r(()=>[o("Remote Debugging")]),_:1}),o(" through a USB cable attached to your Android phone/tablet. It can be used for emulator too.")]),e("p",null,"This way you have Chrome Dev Tools directly for your App running on the emulator/phone/table. Inspect elements, check console output, and so on and so forth."),e("p",null,[e("img",{src:"https://cdn.quasar.dev/img/remote-debug.png",alt:"",title:"Android Remote Debugging",class:"doc-img"}),e("img",{src:"https://cdn.quasar.dev/img/remote-debug-2.png",alt:"",title:"Android Remote Debugging",class:"doc-img"})]),e("h3",{id:"accept-licenses",class:"doc-heading doc-h3",onClick:l=>s(b)("accept-licenses")},"Accept Licenses",8,["onClick"]),e("p",null,"If you are having problems getting Android builds to finish and you see a message like:"),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,"> Failed to install the following Android SDK packages as some licenses have not been accepted.")]),e(d)]),_:1}),e("p",null,"If this is the case you need to accept ALL the licenses. Thankfully there is a tool for this:"),e("ul",null,[e("li",null,[o("Linux: "),e("code",{class:"doc-token"},"sdkmanager --licenses")]),e("li",null,[o("macOS: "),e("code",{class:"doc-token"},"~/Library/Android/sdk/tools/bin/sdkmanager --licenses")]),e("li",null,[o("Windows: "),e("code",{class:"doc-token"},"%ANDROID_SDK_ROOT%/tools/bin/sdkmanager --licenses")])]),e("h3",{id:"android-sdk-not-found-after-installation-of-the-sdk",class:"doc-heading doc-h3",onClick:l=>s(b)("android-sdk-not-found-after-installation-of-the-sdk")},"Android SDK not found after installation of the SDK",8,["onClick"]),e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("The environmental variable "),e("code",{class:"doc-token"},"ANDROID_HOME"),o(" has been deprecated and replaced with "),e("code",{class:"doc-token"},"ANDROID_SDK_ROOT"),o(". Depending on your version of Android Studio you may need one or the other. It doesn’t hurt to have both set.")])]),e("p",null,[o("Some newer Debian-based OS (e.g. ubuntu, elementary OS) might leave you with a "),e("code",{class:"doc-token"},"Android SDK not found."),o(" after you installed and (correctly) configured the environment.")]),e("p",null,"This could have two different reasons: Usually the paths aren’t configured correctly. The first step is to verify if your paths are set correctly. This can be done by running the following commands:"),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,[o("$ "),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token variable"},"$ANDROID_HOME"),o(`

`),e("span",{class:"token comment"},"# or"),o(`

$ `),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT")])]),e(d,{lang:"bash"})]),_:1}),e("p",null,[o("The expected output should be a path similar to this "),e("code",{class:"doc-token"},"$HOME/Android/Sdk"),o(". After this run:")]),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,[o("$ "),e("span",{class:"token function"},"ls"),o(),e("span",{class:"token parameter variable"},"-la"),o(),e("span",{class:"token variable"},"$ANDROID_HOME"),o(`

`),e("span",{class:"token comment"},"# or"),o(`

$ `),e("span",{class:"token function"},"ls"),o(),e("span",{class:"token parameter variable"},"-la"),o(),e("span",{class:"token variable"},"$ANDROID_SDK_ROOT")])]),e(d,{lang:"bash"})]),_:1}),e("p",null,"To ensure the folder contains the SDK. The expected output should contain folders like ‘tools’, ‘sources’, ‘platform-tools’, etc."),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,[o("$ "),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token environment constant"},"$PATH")])]),e(d,{lang:"bash"})]),_:1}),e("p",null,"The output should contain each one entry for the Android SDK ‘tools’-folder and ‘platform-tools’-tools. This could look like this:"),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,"/home/your_user/bin:/home/your_user/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/home/your_user/Android/Sdk/tools:/home/your_user/Android/Sdk/platform-tools")]),e(d,{lang:"bash"})]),_:1}),e("blockquote",{class:"doc-note"},[e("p",null,[o("If you ensured your paths are set correctly and still get the error, you can try the following fix: "),e(h,{to:"https://github.com/meteor/meteor/issues/8464#issuecomment-288112504"},{default:r(()=>[o("Replacing the Android Studio ‘tools’ folder manually")]),_:1})])]),e("h3",{id:"android-studio",class:"doc-heading doc-h3",onClick:l=>s(b)("android-studio")},"Android Studio",8,["onClick"]),e("p",null,[o("In Android Studio (if you open it on "),e("code",{class:"doc-token"},"/src-capacitor/android"),o("), you will be greeted with a message recommending to upgrade the Gradle version. "),e("strong",null,"DO NOT UPGRADE GRADLE"),o(" as it will break the Capacitor project. Same goes for any other requested upgrades.")]),e("img",{src:"https://cdn.quasar.dev/img/gradle-upgrade-notice.png",alt:"Gradle upgrade",class:"q-mb-md rounded-borders",style:{"max-width":"350px"}}),e("p",null,"If you encounter any IDE errors then click on File > Invalidate caches and restart."),e("img",{src:"https://cdn.quasar.dev/img/gradle-invalidate-cache.png",alt:"Gradle upgrade",class:"rounded-borders",style:{"max-width":"350px"}}),e("h3",{id:"setting-up-device-on-linux",class:"doc-heading doc-h3",onClick:l=>s(b)("setting-up-device-on-linux")},"Setting up device on Linux",8,["onClick"]),e("p",null,[o("You may bump into "),e("code",{class:"doc-token"},"?????? no permissions"),o(" problem when trying to run your App directly on an Android phone/tablet.")]),e("p",null,"Here’s how you fix this:"),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# create the .rules file and insert the content"),o(`
`),e("span",{class:"token comment"},"# from below this example"),o(`
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"vim"),o(` /etc/udev/rules.d/51-android.rules
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"chmod"),o(),e("span",{class:"token number"},"644"),o(`   /etc/udev/rules.d/51-android.rules
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"chown"),o(` root. /etc/udev/rules.d/51-android.rules
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"service"),o(` udev restart
`),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"killall"),o(" adb")])]),e(d,{lang:"bash"})]),_:1}),e("p",null,[o("The content for "),e("code",{class:"doc-token"},"51-android.rules"),o(":")]),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,`SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0e79", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0502", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0b05", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="413c", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0489", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="091e", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="18d1", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="12d1", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="24e3", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2116", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0482", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="17ef", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1004", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="22b8", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0409", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2080", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0955", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2257", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="10a9", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1d4d", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0471", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04da", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="05c6", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1f53", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04e8", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04dd", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fce", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0930", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="19d2", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1bbb", MODE="0666"`)]),e(d)]),_:1}),e("p",null,[o("Now running "),e("code",{class:"doc-token"},"adb devices"),o(" should discover your device.")]),e("h2",{id:"ios-tips",class:"doc-heading doc-h2",onClick:l=>s(b)("ios-tips")},"iOS Tips",8,["onClick"]),e("h3",{id:"ios-remote-debugging",class:"doc-heading doc-h3",onClick:l=>s(b)("ios-remote-debugging")},"iOS remote debugging",8,["onClick"]),e("p",null,"If you are debugging iOS Apps, you can use the Safari developer tools to remotely debug through a USB cable attached to your iOS phone/tablet. It can be used for emulator too."),e("p",null,"This way you have Safari developer tools directly for your App running on the emulator/phone/table. Inspect elements, check console output, and so on and so forth."),e("p",null,"First enable the “developer” menu option in the Settings of Safari. Then if you navigate to the “developer” menu option you will see your emulator or connected device listed near the top. From here you can open the developer tools."),e("h3",{id:"status-bar-and-notch-safe-areas",class:"doc-heading doc-h3",onClick:l=>s(b)("status-bar-and-notch-safe-areas")},"Status bar and notch safe-areas",8,["onClick"]),e("p",null,"Since mobile phones have a status bar and/or notches, your app’s styling might need some tweaking when building on Capacitor. In order to prevent parts of your app from going behind the status bar, there is a global CSS variable that can be used for creating a “safe-area”. This variable can then be applied in your app’s top and bottom padding or margin."),e("p",null,"Quasar has support for these CSS safe-areas by default in QHeader/QFooter and Notify. However it’s important to always check your Capacitor build on several models to see if all cases of your app are dealing with the safe areas correctly."),e("p",null,"In cases you need to manually tweak your CSS you can do so with:"),e(s(S),null,{default:r(()=>[e("pre",{class:"doc-code"},[e("code",null,`// for your app's header
padding-top: constant(safe-area-inset-top) // for iOS 11.0
padding-top: env(safe-area-inset-top) // for iOS 11.2 +
// for your app's footer
padding-bottom: constant(safe-area-inset-bottom)
padding-bottom: env(safe-area-inset-bottom)`)]),e(d)]),_:1}),e("p",null,[o("Of course you can also use the above example with "),e("code",{class:"doc-token"},"margin"),o(" instead of "),e("code",{class:"doc-token"},"padding"),o(" depending on your app.")])]}),_:1},k))}}},E=m.setup;m.setup=(f,T)=>{const g=y();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-capacitor-apps/troubleshooting-and-tips.md"),E?E(f,T):void 0};const P=$(m,[["__file","troubleshooting-and-tips.md"]]);export{P as default};
