import{b as h,d as f,w as t,h as n,f as a,e,i as s,k as u}from"./vendor.js";import{c as r}from"./_examples_frameless-electron-window.js";import{D as g,a as p}from"./DocPage.js";import{D as y}from"./DocTree.js";import{D as l}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as b}from"./index.js";const w=n("p",null,"This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App).",-1),_=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// should a PWA take over (default: false), or just a SPA?"),s(`

    `),n("span",{class:"token comment"},`/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
     * (Requires @quasar/app-webpack v3.5+)
     */`),s(`
    `),n("span",{class:"token literal-property property"},"manualStoreSerialization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},`/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-webpack v3.5+)
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

    `),n("span",{class:"token literal-property property"},"maxAge"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// Tell browser when a file from the server should expire from cache"),s(`
        `),n("span",{class:"token comment"},"// (the default value, in ms)"),s(`
        `),n("span",{class:"token comment"},"// Has effect only when server.static() is used"),s(`

    `),n("span",{class:"token comment"},"// List of SSR middleware files (src-ssr/middlewares/*). Order is important."),s(`
    `),n("span",{class:"token literal-property property"},"middlewares"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
      `),n("span",{class:"token string"},"'render'"),s(),n("span",{class:"token comment"},"// Should not be missing, and should be last in the list."),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// optional; add/remove/change properties"),s(`
    `),n("span",{class:"token comment"},"// of production generated package.json"),s(`
    `),n("span",{class:"token function"},"extendPackageJson"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// directly change props of pkg;"),s(`
      `),n("span",{class:"token comment"},"// no need to return anything"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// optional;"),s(`
    `),n("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),s(`
    `),n("span",{class:"token comment"},"// which includes the SSR middleware"),s(`
    `),n("span",{class:"token function"},"extendWebpackWebserver"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// directly change props of cfg;"),s(`
      `),n("span",{class:"token comment"},"// no need to return anything"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),s(`
    `),n("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),s(`
    `),n("span",{class:"token comment"},"// which includes the SSR middleware"),s(`
    `),n("span",{class:"token function"},"chainWebpackWebserver"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),s(`
      `),n("span",{class:"token comment"},"// of the Webpack configuration"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),v={class:"doc-note"},S=n("strong",null,"which is a killer combo",-1),x=n("p",null,[s("When building, "),n("code",{class:"doc-token"},"extendWebpack()"),s(" and "),n("code",{class:"doc-token"},"chainWebpack()"),s(" will receive one more parameter (Object), currently containing "),n("code",{class:"doc-token"},"isServer"),s(" or "),n("code",{class:"doc-token"},"isClient"),s(" boolean props, because there will be two Webpack builds (one for the server-side and one for the client-side).")],-1),T=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"extendWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("cfg"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" isServer"),n("span",{class:"token punctuation"},","),s(" isClient "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),q=n("code",{class:"doc-token"},"/quasar.config",-1),I=n("p",null,"By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side.",-1),W=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),s(`
`),n("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// For Pinia"),s(`
  store`),n("span",{class:"token punctuation"},"."),s("state"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s(`__INITIAL_STATE__

  `),n("span",{class:"token comment"},"// For Vuex"),s(`
  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceState"),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"."),s("__INITIAL_STATE__"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),A=n("p",null,[s("By default, Quasar CLI wraps your App component and calls "),n("code",{class:"doc-token"},"$q.onSSRHydrated()"),s(" on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.")],-1),C=n("p",null,"However should you wish to override the moment when this happens, you need to set quasar.config file > ssr > manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:",-1),P=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),s(`

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
`),n("span",{class:"token punctuation"},"}")])],-1),L=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"mounted"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),N=n("p",null,[s("Adding SSR mode to a Quasar project means a new folder will be created: "),n("code",{class:"doc-token"},"/src-ssr"),s(", which contains SSR specific files:")],-1),O=n("p",null,"You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu).",-1),R=n("p",null,"Notice a few things:",-1),E=n("ol",null,[n("li",null,[n("p",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”.")]),n("li",null,[n("p",null,[s("The "),n("code",{class:"doc-token"},"/src-ssr/middlewares"),s(" is built through a separate Webpack config. "),n("strong",null,"You will see this marked as “Webserver” when Quasar App CLI builds your app."),s(" You can chain/extend the Webpack configuration of these files through the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")])])],-1),Q=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`

    `),n("span",{class:"token comment"},"// optional; webpack config Object for"),s(`
    `),n("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),s(`
    `),n("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),s(`
    `),n("span",{class:"token function"},"extendWebpackWebserver"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// directly change props of cfg;"),s(`
      `),n("span",{class:"token comment"},"// no need to return anything"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),s(`
    `),n("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),s(`
    `),n("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),s(`
    `),n("span",{class:"token function"},"chainWebpackWebserver"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),s(`
      `),n("span",{class:"token comment"},"// of the Webpack configuration"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),H={start:"4"},j=n("code",{class:"doc-token"},"/src-ssr/production-export.js",-1),M=n("p",null,"However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:",-1),Y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},"'some-boot-file'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// runs on both server and client"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'some-other'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'third'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"client"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),B=n("p",null,"Just make sure that your app is consistent, though.",-1),$=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the src/index.template.html."),s(`
  `),n("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),s(`
  `),n("span",{class:"token comment"},"// {{ someProp }}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),F=n("p",null,[s("When you add such references ("),n("code",{class:"doc-token"},"someProp"),s(" surrounded by brackets in the example above) into your /index.html or /src/index.template.html, make sure you tell Quasar it’s only valid for SSR builds:")],-1),D=n("pre",{class:"doc-code"},[n("code",null,"<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>")],-1),V={__name:"configuring-ssr",setup(U){const d=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],k=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"manually-triggering-store-hydration",title:"2.1. Manually triggering store hydration",sub:!0},{id:"manually-triggering-post-hydration",title:"2.2. Manually triggering post-hydration",sub:!0},{id:"nodejs-server",title:"3. Nodejs Server"},{id:"helping-seo",title:"4. Helping SEO"},{id:"boot-files",title:"5. Boot Files"}],m={nodeJsTree:{l:"src-ssr",c:[{l:"middlewares/",e:"SSR middleware files"},{l:"directives/",e:"SSR transformations for Vue directives"},{l:"production-export.js",e:"SSR webserver production export"}]}};return(J,o)=>(h(),f(g,{title:"Configuring SSR",desc:"(@quasar/app-webpack) How to manage your server-side rendered apps with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-ssr/configuring-ssr",toc:k,related:d},{default:t(()=>[n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=i=>a(r)("quasar-config-file"))},"quasar.config file"),w,e(a(l),{title:"/quasar.config file"},{default:t(()=>[_,e(c)]),_:1}),n("blockquote",v,[n("p",null,[s("If you decide to go with a PWA client takeover ("),S,s("), the Quasar CLI PWA mode will be installed too. You may want to check out the "),e(p,{to:"/quasar-cli-webpack/developing-pwa/introduction"},{default:t(()=>[s("Quasar PWA")]),_:1}),s(" guide too. But most importantly, make sure you read "),e(p,{to:"/quasar-cli-webpack/developing-ssr/ssr-with-pwa"},{default:t(()=>[s("SSR with PWA")]),_:1}),s(" page.")])]),x,e(a(l),{title:"/quasar.config file"},{default:t(()=>[T,e(c)]),_:1}),n("p",null,[s("If you want more information, please see this page that goes into more detail about "),e(p,{to:"/quasar-cli-webpack/handling-webpack"},{default:t(()=>[s("handling webpack")]),_:1}),s(" in the "),q,s(" file.")]),n("h3",{id:"manually-triggering-store-hydration",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=i=>a(r)("manually-triggering-store-hydration"))},"Manually triggering store hydration"),I,n("p",null,[s("However, should you wish to manually hydrate it yourself, you need to set quasar.config file > ssr > manualStoreHydration: true. One good example is doing it from "),e(p,{to:"/quasar-cli-webpack/boot-files"},{default:t(()=>[s("a boot file")]),_:1}),s(":")]),e(a(l),{title:"Some boot file"},{default:t(()=>[W,e(c)]),_:1}),n("h3",{id:"manually-triggering-post-hydration",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=i=>a(r)("manually-triggering-post-hydration"))},"Manually triggering post-hydration"),A,C,e(a(l),{tabs:["Composition API","Options API"]},{default:t(()=>[e(u,{class:"q-pa-none",name:"Composition API"},{default:t(()=>[P,e(c)]),_:1}),e(u,{class:"q-pa-none",name:"Options API"},{default:t(()=>[L,e(c)]),_:1})]),_:1}),n("h2",{id:"nodejs-server",class:"doc-heading doc-h2",onClick:o[3]||(o[3]=i=>a(r)("nodejs-server"))},"Nodejs Server"),N,e(y,{def:m.nodeJsTree},null,8,["def"]),O,R,E,e(a(l),{title:"/quasar.config file"},{default:t(()=>[Q,e(c)]),_:1}),n("ol",H,[n("li",null,[s("The "),j,s(" file is detailed in "),e(p,{to:"/quasar-cli-webpack/developing-ssr/ssr-production-export"},{default:t(()=>[s("SSR Production Export")]),_:1}),s(" page. Read it especially if you need to support serverless functions.")])]),n("h2",{id:"helping-seo",class:"doc-heading doc-h2",onClick:o[4]||(o[4]=i=>a(r)("helping-seo"))},"Helping SEO"),n("p",null,[s("One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the "),e(p,{to:"/quasar-plugins/meta"},{default:t(()=>[s("Quasar Meta Plugin")]),_:1}),s(" to manage dynamic html markup required by the search engines.")]),n("h2",{id:"boot-files",class:"doc-heading doc-h2",onClick:o[5]||(o[5]=i=>a(r)("boot-files"))},"Boot Files"),n("p",null,[s("When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your "),e(p,{to:"/quasar-cli-webpack/boot-files"},{default:t(()=>[s("Boot Files")]),_:1}),s(" too.")]),M,e(a(l),{title:"/quasar.config file"},{default:t(()=>[Y,e(c)]),_:1}),B,n("p",null,[s("When a boot file runs on the server, you will have access to one more parameter (called "),e(p,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:t(()=>[s("ssrContext")]),_:1}),s(") on the default exported function:")]),e(a(l),{title:"Some boot file"},{default:t(()=>[$,e(c)]),_:1}),F,e(a(l),{title:"/index.html or /src/index.template.html"},{default:t(()=>[D,e(c)]),_:1})]),_:1}))}},en=b(V,[["__file","configuring-ssr.md"]]);export{en as default};
