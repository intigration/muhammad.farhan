import{b as h,d as f,w as e,h as n,f as a,e as t,i as s,k as u}from"./vendor.js";import{c as i}from"./_examples_frameless-electron-window.js";import{D as y,a as p}from"./DocPage.js";import{D as g}from"./DocTree.js";import{D as l}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_}from"./index.js";const w=n("p",null,"This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App).",-1),v=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"ssrPwaHtmlFilename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'offline.html'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// do NOT use index.html as name!"),s(`
                                        `),n("span",{class:"token comment"},"// will mess up SSR"),s(`

    `),n("span",{class:"token function"},"extendSSRWebserverConf"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"esbuildConf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// add/remove/change properties"),s(`
    `),n("span",{class:"token comment"},"// of production generated package.json"),s(`
    `),n("span",{class:"token function"},"extendPackageJson"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// directly change props of pkg;"),s(`
      `),n("span",{class:"token comment"},"// no need to return anything"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},`/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */`),s(`
    `),n("span",{class:"token literal-property property"},"manualStoreSerialization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},`/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */`),s(`
    `),n("span",{class:"token literal-property property"},"manualStoreSsrContextInjection"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},`/**
     * Manually handle the store hydration instead of letting Quasar CLI do it.
     * For Pinia: store.state.value = window.__INITIAL_STATE__
     * For Vuex: store.replaceState(window.__INITIAL_STATE__)
     */`),s(`
    `),n("span",{class:"token literal-property property"},"manualStoreHydration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},`/**
     * Manually call $q.onSSRHydrated() instead of letting Quasar CLI do it.
     * This announces that client-side code should takeover.
     */`),s(`
    `),n("span",{class:"token literal-property property"},"manualPostHydrationTrigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token literal-property property"},"prodPort"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// The default port that the production server should use"),s(`
                    `),n("span",{class:"token comment"},"// (gets superseded if process∙env∙PORT is specified at runtime)"),s(`

    `),n("span",{class:"token literal-property property"},"middlewares"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},"'render'"),s(),n("span",{class:"token comment"},"// keep this as last one"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),S={class:"doc-note"},b=n("strong",null,"which is a killer combo",-1),q=n("p",null,"Should you want to tamper with the Vite config for UI in /src:",-1),x=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"extendViteConf"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("viteConf"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" isClient"),n("span",{class:"token punctuation"},","),s(" isServer "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("mode"),n("span",{class:"token punctuation"},"."),s("ssr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),T=n("p",null,"By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side.",-1),C=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),s(`
`),n("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// For Pinia"),s(`
  store`),n("span",{class:"token punctuation"},"."),s("state"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s(`__INITIAL_STATE__

  `),n("span",{class:"token comment"},"// For Vuex"),s(`
  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceState"),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"."),s("__INITIAL_STATE__"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),I=n("p",null,[s("By default, Quasar CLI wraps your App component and calls "),n("code",{class:"doc-token"},"$q.onSSRHydrated()"),s(" on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.")],-1),A=n("p",null,"However should you wish to override the moment when this happens, you need to set quasar.config file > ssr > manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:",-1),P=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),R=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"mounted"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),E=n("p",null,[s("Adding SSR mode to a Quasar project means a new folder will be created: "),n("code",{class:"doc-token"},"/src-ssr"),s(", which contains SSR specific files:")],-1),N=n("p",null,"You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu).",-1),L=n("p",null,"Notice a few things:",-1),O=n("ol",null,[n("li",null,[n("p",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”.")]),n("li",null,[n("p",null,[s("The "),n("code",{class:"doc-token"},"/src-ssr/middlewares"),s(" is built through a separate Esbuild config. You can extend the Esbuild configuration of these files through the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")])])],-1),H=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token function"},"extendSSRWebserverConf"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"esbuildConf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// tamper with esbuildConf here"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),Q={start:"4"},j=n("code",{class:"doc-token"},"/src-ssr/server.js",-1),M=n("p",null,"However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:",-1),W=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},"'some-boot-file'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// runs on both server and client"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'some-other'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'third'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"client"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),B=n("p",null,"Just make sure that your app is consistent, though.",-1),F=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the /index.html."),s(`
  `),n("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),s(`
  `),n("span",{class:"token comment"},"// {{ someProp }}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),V=n("p",null,[s("When you add such references ("),n("code",{class:"doc-token"},"someProp"),s(" surrounded by brackets in the example above) into your "),n("code",{class:"doc-token"},"/index.html"),s(", make sure you tell Quasar it’s only valid for SSR builds:")],-1),$=n("pre",{class:"doc-code"},[n("code",null,"<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>")],-1),D={__name:"configuring-ssr",setup(Y){const d=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],k=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"manually-triggering-store-hydration",title:"2.1. Manually triggering store hydration",sub:!0},{id:"manually-triggering-post-hydration",title:"2.2. Manually triggering post-hydration",sub:!0},{id:"nodejs-server",title:"3. Nodejs Server"},{id:"helping-seo",title:"4. Helping SEO"},{id:"boot-files",title:"5. Boot Files"}],m={nodeJsTree:{l:"src-ssr",c:[{l:"middlewares/",e:"SSR middleware files"},{l:"server.js",e:"SSR webserver"}]}};return(J,o)=>(h(),f(y,{title:"Configuring SSR",desc:"(@quasar/app-vite) How to manage your server-side rendered apps with Quasar CLI.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-ssr/configuring-ssr",toc:k,related:d},{default:e(()=>[n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=r=>a(i)("quasar-config-file"))},"quasar.config file"),w,t(a(l),{title:"/quasar.config file"},{default:e(()=>[v,t(c)]),_:1}),n("blockquote",S,[n("p",null,[s("If you decide to go with a PWA client takeover ("),b,s("), the Quasar CLI PWA mode will be installed too. You may want to check out the "),t(p,{to:"/quasar-cli-vite/developing-pwa/introduction"},{default:e(()=>[s("Quasar PWA")]),_:1}),s(" guide too. But most importantly, make sure you read "),t(p,{to:"/quasar-cli-vite/developing-ssr/ssr-with-pwa"},{default:e(()=>[s("SSR with PWA")]),_:1}),s(" page.")])]),q,t(a(l),{title:"/quasar.config file"},{default:e(()=>[x,t(c)]),_:1}),n("h3",{id:"manually-triggering-store-hydration",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=r=>a(i)("manually-triggering-store-hydration"))},"Manually triggering store hydration"),T,n("p",null,[s("However, should you wish to manually hydrate it yourself, you need to set quasar.config file > ssr > manualStoreHydration: true. One good example is doing it from "),t(p,{to:"/quasar-cli-vite/boot-files"},{default:e(()=>[s("a boot file")]),_:1}),s(":")]),t(a(l),{title:"Some boot file"},{default:e(()=>[C,t(c)]),_:1}),n("h3",{id:"manually-triggering-post-hydration",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=r=>a(i)("manually-triggering-post-hydration"))},"Manually triggering post-hydration"),I,A,t(a(l),{tabs:["Composition API","Options API"]},{default:e(()=>[t(u,{class:"q-pa-none",name:"Composition API"},{default:e(()=>[P,t(c)]),_:1}),t(u,{class:"q-pa-none",name:"Options API"},{default:e(()=>[R,t(c)]),_:1})]),_:1}),n("h2",{id:"nodejs-server",class:"doc-heading doc-h2",onClick:o[3]||(o[3]=r=>a(i)("nodejs-server"))},"Nodejs Server"),E,t(g,{def:m.nodeJsTree},null,8,["def"]),N,L,O,t(a(l),{title:"/quasar.config file"},{default:e(()=>[H,t(c)]),_:1}),n("ol",Q,[n("li",null,[s("The "),j,s(" file is detailed in "),t(p,{to:"/quasar-cli-vite/developing-ssr/ssr-webserver"},{default:e(()=>[s("SSR Webserver")]),_:1}),s(" page. Read it especially if you need to support serverless functions.")])]),n("h2",{id:"helping-seo",class:"doc-heading doc-h2",onClick:o[4]||(o[4]=r=>a(i)("helping-seo"))},"Helping SEO"),n("p",null,[s("One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the "),t(p,{to:"/quasar-plugins/meta"},{default:e(()=>[s("Quasar Meta Plugin")]),_:1}),s(" to manage dynamic html markup required by the search engines.")]),n("h2",{id:"boot-files",class:"doc-heading doc-h2",onClick:o[5]||(o[5]=r=>a(i)("boot-files"))},"Boot Files"),n("p",null,[s("When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your "),t(p,{to:"/quasar-cli-vite/boot-files"},{default:e(()=>[s("Boot Files")]),_:1}),s(" too.")]),M,t(a(l),{title:"/quasar.config file"},{default:e(()=>[W,t(c)]),_:1}),B,n("p",null,[s("When a boot file runs on the server, you will have access to one more parameter (called "),t(p,{to:"/quasar-cli-vite/developing-ssr/ssr-context"},{default:e(()=>[s("ssrContext")]),_:1}),s(") on the default exported function:")]),t(a(l),{title:"Some boot file"},{default:e(()=>[F,t(c)]),_:1}),V,t(a(l),{title:"/index.html"},{default:e(()=>[$,t(c)]),_:1})]),_:1}))}},sn=_(D,[["__file","configuring-ssr.md"]]);export{sn as default};
