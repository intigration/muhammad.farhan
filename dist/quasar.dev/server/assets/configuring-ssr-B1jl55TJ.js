import{resolveComponent as E,mergeProps as O,withCtx as p,unref as u,createVNode as n,createTextVNode as a,useSSRContext as N}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as L,a as f}from"./DocPage-DKr-0pQn.js";import{D as T}from"./DocTree-Kz2iQlb5.js";import{D as d}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as H}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const S={__name:"configuring-ssr",__ssrInlineRender:!0,setup(b){const w=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],g=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"manually-triggering-store-hydration",title:"2.1. Manually triggering store hydration",sub:!0},{id:"manually-triggering-post-hydration",title:"2.2. Manually triggering post-hydration",sub:!0},{id:"nodejs-server",title:"3. Nodejs Server"},{id:"helping-seo",title:"4. Helping SEO"},{id:"boot-files",title:"5. Boot Files"}],x={nodeJsTree:{l:"src-ssr",c:[{l:"middlewares/",e:"SSR middleware files"},{l:"server.js",e:"SSR webserver"}]}};return(Q,q,A,P)=>{const $=E("q-tab-panel");q(r(L,O({title:"Configuring SSR",desc:"(@quasar/app-vite) How to manage your server-side rendered apps with Quasar CLI.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-ssr/configuring-ssr",toc:g,related:w},P),{default:p((M,l,m,e)=>{if(l)l(`<h2 id="quasar-config-file" class="doc-heading doc-h2"${e}>quasar.config file</h2><p${e}>This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App).</p>`),l(r(u(d),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>ssr</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>ssrPwaHtmlFilename</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;offline.html&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// do NOT use index.html as name!</span>
                                        <span class="token comment"${s}>// will mess up SSR</span>

    <span class="token function"${s}>extendSSRWebserverConf</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span><span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// add/remove/change properties</span>
    <span class="token comment"${s}>// of production generated package.json</span>
    <span class="token function"${s}>extendPackageJson</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>pkg</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// directly change props of pkg;</span>
      <span class="token comment"${s}>// no need to return anything</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

    <span class="token literal-property property"${s}>pwa</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a &lt;script&gt; tag)
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */</span>
    <span class="token literal-property property"${s}>manualStoreSerialization</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */</span>
    <span class="token literal-property property"${s}>manualStoreSsrContextInjection</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>/**
     * Manually handle the store hydration instead of letting Quasar CLI do it.
     * For Pinia: store.state.value = window.__INITIAL_STATE__
     * For Vuex: store.replaceState(window.__INITIAL_STATE__)
     */</span>
    <span class="token literal-property property"${s}>manualStoreHydration</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>/**
     * Manually call $q.onSSRHydrated() instead of letting Quasar CLI do it.
     * This announces that client-side code should takeover.
     */</span>
    <span class="token literal-property property"${s}>manualPostHydrationTrigger</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

    <span class="token literal-property property"${s}>prodPort</span><span class="token operator"${s}>:</span> <span class="token number"${s}>3000</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// The default port that the production server should use</span>
                    <span class="token comment"${s}>// (gets superseded if process∙env∙PORT is specified at runtime)</span>

    <span class="token literal-property property"${s}>middlewares</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
      <span class="token string"${s}>&#39;render&#39;</span> <span class="token comment"${s}>// keep this as last one</span>
    <span class="token punctuation"${s}>]</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"ssrPwaHtmlFilename"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'offline.html'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// do NOT use index.html as name!"),a(`
                                        `),n("span",{class:"token comment"},"// will mess up SSR"),a(`

    `),n("span",{class:"token function"},"extendSSRWebserverConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"esbuildConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// add/remove/change properties"),a(`
    `),n("span",{class:"token comment"},"// of production generated package.json"),a(`
    `),n("span",{class:"token function"},"extendPackageJson"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of pkg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreSerialization"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreSsrContextInjection"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually handle the store hydration instead of letting Quasar CLI do it.
     * For Pinia: store.state.value = window.__INITIAL_STATE__
     * For Vuex: store.replaceState(window.__INITIAL_STATE__)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreHydration"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually call $q.onSSRHydrated() instead of letting Quasar CLI do it.
     * This announces that client-side code should takeover.
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualPostHydrationTrigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token literal-property property"},"prodPort"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// The default port that the production server should use"),a(`
                    `),n("span",{class:"token comment"},"// (gets superseded if process∙env∙PORT is specified at runtime)"),a(`

    `),n("span",{class:"token literal-property property"},"middlewares"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'render'"),a(),n("span",{class:"token comment"},"// keep this as last one"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),l(`<blockquote class="doc-note"${e}><p${e}>If you decide to go with a PWA client takeover (<strong${e}>which is a killer combo</strong>), the Quasar CLI PWA mode will be installed too. You may want to check out the `),l(r(f,{to:"/quasar-cli-vite/developing-pwa/introduction"},{default:p((k,o,i,s)=>{if(o)o("Quasar PWA");else return[a("Quasar PWA")]}),_:1},m,e)),l(" guide too. But most importantly, make sure you read "),l(r(f,{to:"/quasar-cli-vite/developing-ssr/ssr-with-pwa"},{default:p((k,o,i,s)=>{if(o)o("SSR with PWA");else return[a("SSR with PWA")]}),_:1},m,e)),l(` page.</p></blockquote><p${e}>Should you want to tamper with the Vite config for UI in /src:</p>`),l(r(u(d),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token function"${s}>extendViteConf</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>viteConf<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
        <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>ssr<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
          <span class="token comment"${s}>// do something with ViteConf</span>
        <span class="token punctuation"${s}>}</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("viteConf"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("ssr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),l(`<h3 id="manually-triggering-store-hydration" class="doc-heading doc-h3"${e}>Manually triggering store hydration</h3><p${e}>By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side.</p><p${e}>However, should you wish to manually hydrate it yourself, you need to set quasar.config file &gt; ssr &gt; manualStoreHydration: true. One good example is doing it from `),l(r(f,{to:"/quasar-cli-vite/boot-files"},{default:p((k,o,i,s)=>{if(o)o("a boot file");else return[a("a boot file")]}),_:1},m,e)),l(":</p>"),l(r(u(d),{title:"Some boot file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// MAKE SURE TO CONFIGURE THIS BOOT FILE</span>
<span class="token comment"${s}>// TO RUN ONLY ON CLIENT-SIDE</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> store <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// For Pinia</span>
  store<span class="token punctuation"${s}>.</span>state<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> window<span class="token punctuation"${s}>.</span>__INITIAL_STATE__

  <span class="token comment"${s}>// For Vuex</span>
  store<span class="token punctuation"${s}>.</span><span class="token function"${s}>replaceState</span><span class="token punctuation"${s}>(</span>window<span class="token punctuation"${s}>.</span>__INITIAL_STATE__<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),a(`
`),n("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// For Pinia"),a(`
  store`),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" window"),n("span",{class:"token punctuation"},"."),a(`__INITIAL_STATE__

  `),n("span",{class:"token comment"},"// For Vuex"),a(`
  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceState"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},"."),a("__INITIAL_STATE__"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),l(`<h3 id="manually-triggering-post-hydration" class="doc-heading doc-h3"${e}>Manually triggering post-hydration</h3><p${e}>By default, Quasar CLI wraps your App component and calls <code class="doc-token"${e}>$q.onSSRHydrated()</code> on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.</p><p${e}>However should you wish to override the moment when this happens, you need to set quasar.config file &gt; ssr &gt; manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:</p>`),l(r(u(d),{tabs:["Composition API","Options API"]},{default:p((k,o,i,s)=>{if(o)o(r($,{class:"q-pa-none",name:"Composition API"},{default:p((R,y,v,t)=>{if(y)y(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// App.vue</span>

<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> onMounted <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vue&#39;</span>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useQuasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// ....</span>
  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// ...</span>
    <span class="token keyword"${t}>const</span> $q <span class="token operator"${t}>=</span> <span class="token function"${t}>useQuasar</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token function"${t}>onMounted</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      $q<span class="token punctuation"${t}>.</span><span class="token function"${t}>onSSRHydrated</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),y(r(c,null,null,v,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},i,s)),o(r($,{class:"q-pa-none",name:"Options API"},{default:p((R,y,v,t)=>{if(y)y(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// App.vue</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>mounted</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$q<span class="token punctuation"${t}>.</span><span class="token function"${t}>onSSRHydrated</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),y(r(c,null,null,v,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},i,s));else return[n($,{class:"q-pa-none",name:"Composition API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n($,{class:"q-pa-none",name:"Options API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]}),_:1},m,e)),l(`<h2 id="nodejs-server" class="doc-heading doc-h2"${e}>Nodejs Server</h2><p${e}>Adding SSR mode to a Quasar project means a new folder will be created: <code class="doc-token"${e}>/src-ssr</code>, which contains SSR specific files:</p>`),l(r(T,{def:x.nodeJsTree},null,m,e)),l(`<p${e}>You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu).</p><p${e}>Notice a few things:</p><ol${e}><li${e}><p${e}>If you import anything from node_modules, then make sure that the package is specified in package.json &gt; “dependencies” and NOT in “devDependencies”.</p></li><li${e}><p${e}>The <code class="doc-token"${e}>/src-ssr/middlewares</code> is built through a separate Esbuild config. You can extend the Esbuild configuration of these files through the <code class="doc-token"${e}>/quasar.config</code> file:</p></li></ol>`),l(r(u(d),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>ssr</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>
    <span class="token function"${s}>extendSSRWebserverConf</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// tamper with esbuildConf here</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token function"},"extendSSRWebserverConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"esbuildConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// tamper with esbuildConf here"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),l(`<ol start="4"${e}><li${e}>The <code class="doc-token"${e}>/src-ssr/server.js</code> file is detailed in `),l(r(f,{to:"/quasar-cli-vite/developing-ssr/ssr-webserver"},{default:p((k,o,i,s)=>{if(o)o("SSR Webserver");else return[a("SSR Webserver")]}),_:1},m,e)),l(` page. Read it especially if you need to support serverless functions.</li></ol><h2 id="helping-seo" class="doc-heading doc-h2"${e}>Helping SEO</h2><p${e}>One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the `),l(r(f,{to:"/quasar-plugins/meta"},{default:p((k,o,i,s)=>{if(o)o("Quasar Meta Plugin");else return[a("Quasar Meta Plugin")]}),_:1},m,e)),l(` to manage dynamic html markup required by the search engines.</p><h2 id="boot-files" class="doc-heading doc-h2"${e}>Boot Files</h2><p${e}>When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your `),l(r(f,{to:"/quasar-cli-vite/boot-files"},{default:p((k,o,i,s)=>{if(o)o("Boot Files");else return[a("Boot Files")]}),_:1},m,e)),l(` too.</p><p${e}>However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:</p>`),l(r(u(d),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>boot</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token string"${s}>&#39;some-boot-file&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// runs on both server and client</span>
    <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;some-other&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>server</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// this boot file gets embedded only on client-side</span>
    <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;third&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>client</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token punctuation"${s}>}</span> <span class="token comment"${s}>// this boot file gets embedded only on server-side</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token string"},"'some-boot-file'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// runs on both server and client"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some-other'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'third'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"client"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),l(`<p${e}>Just make sure that your app is consistent, though.</p><p${e}>When a boot file runs on the server, you will have access to one more parameter (called `),l(r(f,{to:"/quasar-cli-vite/developing-ssr/ssr-context"},{default:p((k,o,i,s)=>{if(o)o("ssrContext");else return[a("ssrContext")]}),_:1},m,e)),l(") on the default exported function:</p>"),l(r(u(d),{title:"Some boot file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> app<span class="token punctuation"${s}>,</span> <span class="token operator"${s}>...</span><span class="token punctuation"${s}>,</span> ssrContext <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// You can add props to the ssrContext then use them in the /index.html.</span>
  <span class="token comment"${s}>// Example - let&#39;s say we ssrContext.someProp = &#39;some value&#39;, then in index template we can reference it:</span>
  <span class="token comment"${s}>// {{ someProp }}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the /index.html."),a(`
  `),n("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),a(`
  `),n("span",{class:"token comment"},"// {{ someProp }}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),l(`<p${e}>When you add such references (<code class="doc-token"${e}>someProp</code> surrounded by brackets in the example above) into your <code class="doc-token"${e}>/index.html</code>, make sure you tell Quasar it’s only valid for SSR builds:</p>`),l(r(u(d),{title:"/index.html"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>&lt;% if (ctx.mode.ssr) { %&gt;{{ someProp }} &lt;% } %&gt;</code></pre>`),o(r(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,"<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>")]),n(c)]}),_:1},m,e));else return[n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:k=>u(h)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,"This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App)."),n(u(d),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"ssrPwaHtmlFilename"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'offline.html'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// do NOT use index.html as name!"),a(`
                                        `),n("span",{class:"token comment"},"// will mess up SSR"),a(`

    `),n("span",{class:"token function"},"extendSSRWebserverConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"esbuildConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// add/remove/change properties"),a(`
    `),n("span",{class:"token comment"},"// of production generated package.json"),a(`
    `),n("span",{class:"token function"},"extendPackageJson"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of pkg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreSerialization"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-vite v1.0.0-beta.14+)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreSsrContextInjection"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually handle the store hydration instead of letting Quasar CLI do it.
     * For Pinia: store.state.value = window.__INITIAL_STATE__
     * For Vuex: store.replaceState(window.__INITIAL_STATE__)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreHydration"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually call $q.onSSRHydrated() instead of letting Quasar CLI do it.
     * This announces that client-side code should takeover.
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualPostHydrationTrigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token literal-property property"},"prodPort"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// The default port that the production server should use"),a(`
                    `),n("span",{class:"token comment"},"// (gets superseded if process∙env∙PORT is specified at runtime)"),a(`

    `),n("span",{class:"token literal-property property"},"middlewares"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'render'"),a(),n("span",{class:"token comment"},"// keep this as last one"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("blockquote",{class:"doc-note"},[n("p",null,[a("If you decide to go with a PWA client takeover ("),n("strong",null,"which is a killer combo"),a("), the Quasar CLI PWA mode will be installed too. You may want to check out the "),n(f,{to:"/quasar-cli-vite/developing-pwa/introduction"},{default:p(()=>[a("Quasar PWA")]),_:1}),a(" guide too. But most importantly, make sure you read "),n(f,{to:"/quasar-cli-vite/developing-ssr/ssr-with-pwa"},{default:p(()=>[a("SSR with PWA")]),_:1}),a(" page.")])]),n("p",null,"Should you want to tamper with the Vite config for UI in /src:"),n(u(d),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("viteConf"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("ssr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"manually-triggering-store-hydration",class:"doc-heading doc-h3",onClick:k=>u(h)("manually-triggering-store-hydration")},"Manually triggering store hydration",8,["onClick"]),n("p",null,"By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side."),n("p",null,[a("However, should you wish to manually hydrate it yourself, you need to set quasar.config file > ssr > manualStoreHydration: true. One good example is doing it from "),n(f,{to:"/quasar-cli-vite/boot-files"},{default:p(()=>[a("a boot file")]),_:1}),a(":")]),n(u(d),{title:"Some boot file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),a(`
`),n("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// For Pinia"),a(`
  store`),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" window"),n("span",{class:"token punctuation"},"."),a(`__INITIAL_STATE__

  `),n("span",{class:"token comment"},"// For Vuex"),a(`
  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceState"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},"."),a("__INITIAL_STATE__"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"manually-triggering-post-hydration",class:"doc-heading doc-h3",onClick:k=>u(h)("manually-triggering-post-hydration")},"Manually triggering post-hydration",8,["onClick"]),n("p",null,[a("By default, Quasar CLI wraps your App component and calls "),n("code",{class:"doc-token"},"$q.onSSRHydrated()"),a(" on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.")]),n("p",null,"However should you wish to override the moment when this happens, you need to set quasar.config file > ssr > manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:"),n(u(d),{tabs:["Composition API","Options API"]},{default:p(()=>[n($,{class:"q-pa-none",name:"Composition API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n($,{class:"q-pa-none",name:"Options API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]),_:1}),n("h2",{id:"nodejs-server",class:"doc-heading doc-h2",onClick:k=>u(h)("nodejs-server")},"Nodejs Server",8,["onClick"]),n("p",null,[a("Adding SSR mode to a Quasar project means a new folder will be created: "),n("code",{class:"doc-token"},"/src-ssr"),a(", which contains SSR specific files:")]),n(T,{def:x.nodeJsTree},null,8,["def"]),n("p",null,"You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu)."),n("p",null,"Notice a few things:"),n("ol",null,[n("li",null,[n("p",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”.")]),n("li",null,[n("p",null,[a("The "),n("code",{class:"doc-token"},"/src-ssr/middlewares"),a(" is built through a separate Esbuild config. You can extend the Esbuild configuration of these files through the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")])])]),n(u(d),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token function"},"extendSSRWebserverConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"esbuildConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// tamper with esbuildConf here"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("ol",{start:"4"},[n("li",null,[a("The "),n("code",{class:"doc-token"},"/src-ssr/server.js"),a(" file is detailed in "),n(f,{to:"/quasar-cli-vite/developing-ssr/ssr-webserver"},{default:p(()=>[a("SSR Webserver")]),_:1}),a(" page. Read it especially if you need to support serverless functions.")])]),n("h2",{id:"helping-seo",class:"doc-heading doc-h2",onClick:k=>u(h)("helping-seo")},"Helping SEO",8,["onClick"]),n("p",null,[a("One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the "),n(f,{to:"/quasar-plugins/meta"},{default:p(()=>[a("Quasar Meta Plugin")]),_:1}),a(" to manage dynamic html markup required by the search engines.")]),n("h2",{id:"boot-files",class:"doc-heading doc-h2",onClick:k=>u(h)("boot-files")},"Boot Files",8,["onClick"]),n("p",null,[a("When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your "),n(f,{to:"/quasar-cli-vite/boot-files"},{default:p(()=>[a("Boot Files")]),_:1}),a(" too.")]),n("p",null,"However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:"),n(u(d),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token string"},"'some-boot-file'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// runs on both server and client"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some-other'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'third'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"client"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Just make sure that your app is consistent, though."),n("p",null,[a("When a boot file runs on the server, you will have access to one more parameter (called "),n(f,{to:"/quasar-cli-vite/developing-ssr/ssr-context"},{default:p(()=>[a("ssrContext")]),_:1}),a(") on the default exported function:")]),n(u(d),{title:"Some boot file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the /index.html."),a(`
  `),n("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),a(`
  `),n("span",{class:"token comment"},"// {{ someProp }}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,[a("When you add such references ("),n("code",{class:"doc-token"},"someProp"),a(" surrounded by brackets in the example above) into your "),n("code",{class:"doc-token"},"/index.html"),a(", make sure you tell Quasar it’s only valid for SSR builds:")]),n(u(d),{title:"/index.html"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,"<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>")]),n(c)]),_:1})]}),_:1},A))}}},C=S.setup;S.setup=(b,w)=>{const g=N();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-cli-vite/developing-ssr/configuring-ssr.md"),C?C(b,w):void 0};const _=H(S,[["__file","configuring-ssr.md"]]);export{_ as default};
