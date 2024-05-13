import{mergeProps as T,withCtx as n,createTextVNode as o,createVNode as t,unref as l,useSSRContext as j}from"vue";import{ssrRenderComponent as h}from"vue/server-renderer";import{c as p}from"./page-utils-C-QWsEHe.js";import{D as C,a as s}from"./DocPage-DKr-0pQn.js";import{_ as E}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const u={__name:"introduction",__ssrInlineRender:!0,setup(m){const d=[{id:"renderer-thread",title:"2. Renderer Thread"},{id:"main-thread",title:"3. Main Thread"},{id:"preload-script",title:"4. Preload Script"}];return(c,g,b,y)=>{g(h(C,T({title:"What is Electron",desc:"(@quasar/app-vite) Introduction about the technology behind Quasar desktop apps.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-electron-apps/introduction",toc:d},y),{default:n((I,r,f,e)=>{if(r)r(`<p${e}>`),r(h(s,{to:"https://electronjs.org/"},{default:n((i,a,k,v)=>{if(a)a("Electron");else return[o("Electron")]}),_:1},f,e)),r(` (formerly known as Atom Shell) is an open-source framework created by Cheng Zhao, and now developed by GitHub. <strong${e}>It allows for the development of desktop GUI applications</strong> using front and back end components originally developed for web applications: Node.js runtime for the backend and Chromium for the frontend. Electron is the main GUI framework behind several notable open-source projects including GitHub’s Atom and Microsoft’s Visual Studio Code source code editors, the Tidal music streaming service desktop application and the Light Table IDE, in addition to the freeware desktop client for the Discord chat service.</p><p${e}>Each Electron app has two threads: one is the main thread (dealing with the App window and bootup), and one is the renderer thread (which is basically your UI web code). There is also a preload script to bridge the two “worlds”.</p><h2 id="renderer-thread" class="doc-heading doc-h2"${e}>Renderer Thread</h2><p${e}>Electron uses Chromium for displaying web pages in a separate process called the render process. This thread deals with your UI code in <code class="doc-token"${e}>/src</code> folder. You won’t be able to use the Node.js power here, but the preload script will allow you to bridge the UI with Node.js.</p><h2 id="main-thread" class="doc-heading doc-h2"${e}>Main Thread</h2><p${e}>In Electron, the process that runs package.json’s main script is called the main process. This is the script that runs in the main process and can display a GUI by initializing the renderer thread. This thread deals with your code in <code class="doc-token"${e}>/src-electron/electron-main.[js|ts]</code>.</p><h2 id="preload-script" class="doc-heading doc-h2"${e}>Preload Script</h2><p${e}>The `),r(h(s,{to:"/quasar-cli-vite/developing-electron-apps/electron-preload-script"},{default:n((i,a,k,v)=>{if(a)a("preload script");else return[o("preload script")]}),_:1},f,e)),r(` (<code class="doc-token"${e}>/src-electron/electron-preload.[js|ts]</code>) is a way for you to inject Node.js stuff into the renderer thread by using a bridge between it and the UI. You can expose APIs that you can then call from your UI.</p>`);else return[t("p",null,[t(s,{to:"https://electronjs.org/"},{default:n(()=>[o("Electron")]),_:1}),o(" (formerly known as Atom Shell) is an open-source framework created by Cheng Zhao, and now developed by GitHub. "),t("strong",null,"It allows for the development of desktop GUI applications"),o(" using front and back end components originally developed for web applications: Node.js runtime for the backend and Chromium for the frontend. Electron is the main GUI framework behind several notable open-source projects including GitHub’s Atom and Microsoft’s Visual Studio Code source code editors, the Tidal music streaming service desktop application and the Light Table IDE, in addition to the freeware desktop client for the Discord chat service.")]),t("p",null,"Each Electron app has two threads: one is the main thread (dealing with the App window and bootup), and one is the renderer thread (which is basically your UI web code). There is also a preload script to bridge the two “worlds”."),t("h2",{id:"renderer-thread",class:"doc-heading doc-h2",onClick:i=>l(p)("renderer-thread")},"Renderer Thread",8,["onClick"]),t("p",null,[o("Electron uses Chromium for displaying web pages in a separate process called the render process. This thread deals with your UI code in "),t("code",{class:"doc-token"},"/src"),o(" folder. You won’t be able to use the Node.js power here, but the preload script will allow you to bridge the UI with Node.js.")]),t("h2",{id:"main-thread",class:"doc-heading doc-h2",onClick:i=>l(p)("main-thread")},"Main Thread",8,["onClick"]),t("p",null,[o("In Electron, the process that runs package.json’s main script is called the main process. This is the script that runs in the main process and can display a GUI by initializing the renderer thread. This thread deals with your code in "),t("code",{class:"doc-token"},"/src-electron/electron-main.[js|ts]"),o(".")]),t("h2",{id:"preload-script",class:"doc-heading doc-h2",onClick:i=>l(p)("preload-script")},"Preload Script",8,["onClick"]),t("p",null,[o("The "),t(s,{to:"/quasar-cli-vite/developing-electron-apps/electron-preload-script"},{default:n(()=>[o("preload script")]),_:1}),o(" ("),t("code",{class:"doc-token"},"/src-electron/electron-preload.[js|ts]"),o(") is a way for you to inject Node.js stuff into the renderer thread by using a bridge between it and the UI. You can expose APIs that you can then call from your UI.")])]}),_:1},b))}}},w=u.setup;u.setup=(m,d)=>{const c=j();return(c.modules||(c.modules=new Set)).add("src/pages/quasar-cli-vite/developing-electron-apps/introduction.md"),w?w(m,d):void 0};const H=E(u,[["__file","introduction.md"]]);export{H as default};
