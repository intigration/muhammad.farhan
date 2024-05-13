import{resolveComponent as O,mergeProps as R,withCtx as p,unref as u,createVNode as n,createTextVNode as a,useSSRContext as L}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as $}from"./page-utils-C-QWsEHe.js";import{D as N,a as d}from"./DocPage-DKr-0pQn.js";import{D as T}from"./DocTree-Kz2iQlb5.js";import{D as f}from"./DocPrerender-DPOnWPFO.js";import{C as r}from"./CopyButton-l3ndfN49.js";import{_ as E}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"configuring-ssr",__ssrInlineRender:!0,setup(S){const b=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],g=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"manually-triggering-store-hydration",title:"2.1. Manually triggering store hydration",sub:!0},{id:"manually-triggering-post-hydration",title:"2.2. Manually triggering post-hydration",sub:!0},{id:"nodejs-server",title:"3. Nodejs Server"},{id:"helping-seo",title:"4. Helping SEO"},{id:"boot-files",title:"5. Boot Files"}],x={nodeJsTree:{l:"src-ssr",c:[{l:"middlewares/",e:"SSR middleware files"},{l:"directives/",e:"SSR transformations for Vue directives"},{l:"production-export.js",e:"SSR webserver production export"}]}};return(Q,q,W,P)=>{const y=O("q-tab-panel");q(l(N,R({title:"Configuring SSR",desc:"(@quasar/app-webpack) How to manage your server-side rendered apps with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-ssr/configuring-ssr",toc:g,related:b},P),{default:p((H,c,m,e)=>{if(c)c(`<h2 id="quasar-config-file" class="doc-heading doc-h2"${e}>quasar.config file</h2><p${e}>This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App).</p>`),c(l(u(f),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>ssr</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>pwa</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// should a PWA take over (default: false), or just a SPA?</span>

    <span class="token comment"${s}>/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a &lt;script&gt; tag)
     * (Requires @quasar/app-webpack v3.5+)
     */</span>
    <span class="token literal-property property"${s}>manualStoreSerialization</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-webpack v3.5+)
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

    <span class="token literal-property property"${s}>maxAge</span><span class="token operator"${s}>:</span> <span class="token number"${s}>1000</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>60</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>60</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>24</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>30</span><span class="token punctuation"${s}>,</span>
        <span class="token comment"${s}>// Tell browser when a file from the server should expire from cache</span>
        <span class="token comment"${s}>// (the default value, in ms)</span>
        <span class="token comment"${s}>// Has effect only when server.static() is used</span>

    <span class="token comment"${s}>// List of SSR middleware files (src-ssr/middlewares/*). Order is important.</span>
    <span class="token literal-property property"${s}>middlewares</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
      <span class="token comment"${s}>// ...</span>
      <span class="token string"${s}>&#39;render&#39;</span> <span class="token comment"${s}>// Should not be missing, and should be last in the list.</span>
    <span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// optional; add/remove/change properties</span>
    <span class="token comment"${s}>// of production generated package.json</span>
    <span class="token function"${s}>extendPackageJson</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>pkg</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// directly change props of pkg;</span>
      <span class="token comment"${s}>// no need to return anything</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// optional;</span>
    <span class="token comment"${s}>// handles the Webserver webpack config ONLY</span>
    <span class="token comment"${s}>// which includes the SSR middleware</span>
    <span class="token function"${s}>extendWebpackWebserver</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// directly change props of cfg;</span>
      <span class="token comment"${s}>// no need to return anything</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;</span>
    <span class="token comment"${s}>// handles the Webserver webpack config ONLY</span>
    <span class="token comment"${s}>// which includes the SSR middleware</span>
    <span class="token function"${s}>chainWebpackWebserver</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// chain is a webpack-chain instance</span>
      <span class="token comment"${s}>// of the Webpack configuration</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// should a PWA take over (default: false), or just a SPA?"),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
     * (Requires @quasar/app-webpack v3.5+)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreSerialization"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-webpack v3.5+)
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

    `),n("span",{class:"token literal-property property"},"maxAge"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"24"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token comment"},"// Tell browser when a file from the server should expire from cache"),a(`
        `),n("span",{class:"token comment"},"// (the default value, in ms)"),a(`
        `),n("span",{class:"token comment"},"// Has effect only when server.static() is used"),a(`

    `),n("span",{class:"token comment"},"// List of SSR middleware files (src-ssr/middlewares/*). Order is important."),a(`
    `),n("span",{class:"token literal-property property"},"middlewares"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
      `),n("span",{class:"token string"},"'render'"),a(),n("span",{class:"token comment"},"// Should not be missing, and should be last in the list."),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional; add/remove/change properties"),a(`
    `),n("span",{class:"token comment"},"// of production generated package.json"),a(`
    `),n("span",{class:"token function"},"extendPackageJson"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of pkg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional;"),a(`
    `),n("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),a(`
    `),n("span",{class:"token comment"},"// which includes the SSR middleware"),a(`
    `),n("span",{class:"token function"},"extendWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),a(`
    `),n("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),a(`
    `),n("span",{class:"token comment"},"// which includes the SSR middleware"),a(`
    `),n("span",{class:"token function"},"chainWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
      `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,e)),c(`<blockquote class="doc-note"${e}><p${e}>If you decide to go with a PWA client takeover (<strong${e}>which is a killer combo</strong>), the Quasar CLI PWA mode will be installed too. You may want to check out the `),c(l(d,{to:"/quasar-cli-webpack/developing-pwa/introduction"},{default:p((k,o,i,s)=>{if(o)o("Quasar PWA");else return[a("Quasar PWA")]}),_:1},m,e)),c(" guide too. But most importantly, make sure you read "),c(l(d,{to:"/quasar-cli-webpack/developing-ssr/ssr-with-pwa"},{default:p((k,o,i,s)=>{if(o)o("SSR with PWA");else return[a("SSR with PWA")]}),_:1},m,e)),c(` page.</p></blockquote><p${e}>When building, <code class="doc-token"${e}>extendWebpack()</code> and <code class="doc-token"${e}>chainWebpack()</code> will receive one more parameter (Object), currently containing <code class="doc-token"${e}>isServer</code> or <code class="doc-token"${e}>isClient</code> boolean props, because there will be two Webpack builds (one for the server-side and one for the client-side).</p>`),c(l(u(f),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>extendWebpack</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isServer<span class="token punctuation"${s}>,</span> isClient <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span> <span class="token operator"${s}>...</span> <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"extendWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isServer"),n("span",{class:"token punctuation"},","),a(" isClient "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,e)),c(`<p${e}>If you want more information, please see this page that goes into more detail about `),c(l(d,{to:"/quasar-cli-webpack/handling-webpack"},{default:p((k,o,i,s)=>{if(o)o("handling webpack");else return[a("handling webpack")]}),_:1},m,e)),c(` in the <code class="doc-token"${e}>/quasar.config</code> file.</p><h3 id="manually-triggering-store-hydration" class="doc-heading doc-h3"${e}>Manually triggering store hydration</h3><p${e}>By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side.</p><p${e}>However, should you wish to manually hydrate it yourself, you need to set quasar.config file &gt; ssr &gt; manualStoreHydration: true. One good example is doing it from `),c(l(d,{to:"/quasar-cli-webpack/boot-files"},{default:p((k,o,i,s)=>{if(o)o("a boot file");else return[a("a boot file")]}),_:1},m,e)),c(":</p>"),c(l(u(f),{title:"Some boot file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// MAKE SURE TO CONFIGURE THIS BOOT FILE</span>
<span class="token comment"${s}>// TO RUN ONLY ON CLIENT-SIDE</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> store <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// For Pinia</span>
  store<span class="token punctuation"${s}>.</span>state<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> window<span class="token punctuation"${s}>.</span>__INITIAL_STATE__

  <span class="token comment"${s}>// For Vuex</span>
  store<span class="token punctuation"${s}>.</span><span class="token function"${s}>replaceState</span><span class="token punctuation"${s}>(</span>window<span class="token punctuation"${s}>.</span>__INITIAL_STATE__<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),a(`
`),n("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// For Pinia"),a(`
  store`),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" window"),n("span",{class:"token punctuation"},"."),a(`__INITIAL_STATE__

  `),n("span",{class:"token comment"},"// For Vuex"),a(`
  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceState"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},"."),a("__INITIAL_STATE__"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,e)),c(`<h3 id="manually-triggering-post-hydration" class="doc-heading doc-h3"${e}>Manually triggering post-hydration</h3><p${e}>By default, Quasar CLI wraps your App component and calls <code class="doc-token"${e}>$q.onSSRHydrated()</code> on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.</p><p${e}>However should you wish to override the moment when this happens, you need to set quasar.config file &gt; ssr &gt; manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:</p>`),c(l(u(f),{tabs:["Composition API","Options API"]},{default:p((k,o,i,s)=>{if(o)o(l(y,{class:"q-pa-none",name:"Composition API"},{default:p((C,h,w,t)=>{if(h)h(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// App.vue</span>

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
<span class="token punctuation"${t}>}</span></code></pre>`),h(l(r,null,null,w,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},i,s)),o(l(y,{class:"q-pa-none",name:"Options API"},{default:p((C,h,w,t)=>{if(h)h(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// App.vue</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>mounted</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$q<span class="token punctuation"${t}>.</span><span class="token function"${t}>onSSRHydrated</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),h(l(r,null,null,w,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},i,s));else return[n(y,{class:"q-pa-none",name:"Composition API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n(y,{class:"q-pa-none",name:"Options API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1})]}),_:1},m,e)),c(`<h2 id="nodejs-server" class="doc-heading doc-h2"${e}>Nodejs Server</h2><p${e}>Adding SSR mode to a Quasar project means a new folder will be created: <code class="doc-token"${e}>/src-ssr</code>, which contains SSR specific files:</p>`),c(l(T,{def:x.nodeJsTree},null,m,e)),c(`<p${e}>You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu).</p><p${e}>Notice a few things:</p><ol${e}><li${e}><p${e}>If you import anything from node_modules, then make sure that the package is specified in package.json &gt; “dependencies” and NOT in “devDependencies”.</p></li><li${e}><p${e}>The <code class="doc-token"${e}>/src-ssr/middlewares</code> is built through a separate Webpack config. <strong${e}>You will see this marked as “Webserver” when Quasar App CLI builds your app.</strong> You can chain/extend the Webpack configuration of these files through the <code class="doc-token"${e}>/quasar.config</code> file:</p></li></ol>`),c(l(u(f),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>ssr</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>

    <span class="token comment"${s}>// optional; webpack config Object for</span>
    <span class="token comment"${s}>// the Webserver part ONLY (/src-ssr/)</span>
    <span class="token comment"${s}>// which is invoked for production (NOT for dev)</span>
    <span class="token function"${s}>extendWebpackWebserver</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// directly change props of cfg;</span>
      <span class="token comment"${s}>// no need to return anything</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;</span>
    <span class="token comment"${s}>// the Webserver part ONLY (/src-ssr/)</span>
    <span class="token comment"${s}>// which is invoked for production (NOT for dev)</span>
    <span class="token function"${s}>chainWebpackWebserver</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// chain is a webpack-chain instance</span>
      <span class="token comment"${s}>// of the Webpack configuration</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`

    `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
    `),n("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),a(`
    `),n("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),a(`
    `),n("span",{class:"token function"},"extendWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),a(`
    `),n("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),a(`
    `),n("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),a(`
    `),n("span",{class:"token function"},"chainWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
      `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,e)),c(`<ol start="4"${e}><li${e}>The <code class="doc-token"${e}>/src-ssr/production-export.js</code> file is detailed in `),c(l(d,{to:"/quasar-cli-webpack/developing-ssr/ssr-production-export"},{default:p((k,o,i,s)=>{if(o)o("SSR Production Export");else return[a("SSR Production Export")]}),_:1},m,e)),c(` page. Read it especially if you need to support serverless functions.</li></ol><h2 id="helping-seo" class="doc-heading doc-h2"${e}>Helping SEO</h2><p${e}>One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the `),c(l(d,{to:"/quasar-plugins/meta"},{default:p((k,o,i,s)=>{if(o)o("Quasar Meta Plugin");else return[a("Quasar Meta Plugin")]}),_:1},m,e)),c(` to manage dynamic html markup required by the search engines.</p><h2 id="boot-files" class="doc-heading doc-h2"${e}>Boot Files</h2><p${e}>When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your `),c(l(d,{to:"/quasar-cli-webpack/boot-files"},{default:p((k,o,i,s)=>{if(o)o("Boot Files");else return[a("Boot Files")]}),_:1},m,e)),c(` too.</p><p${e}>However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:</p>`),c(l(u(f),{title:"/quasar.config file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>boot</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token string"${s}>&#39;some-boot-file&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// runs on both server and client</span>
    <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;some-other&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>server</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// this boot file gets embedded only on client-side</span>
    <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;third&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>client</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token punctuation"${s}>}</span> <span class="token comment"${s}>// this boot file gets embedded only on server-side</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token string"},"'some-boot-file'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// runs on both server and client"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some-other'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'third'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"client"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,e)),c(`<p${e}>Just make sure that your app is consistent, though.</p><p${e}>When a boot file runs on the server, you will have access to one more parameter (called `),c(l(d,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:p((k,o,i,s)=>{if(o)o("ssrContext");else return[a("ssrContext")]}),_:1},m,e)),c(") on the default exported function:</p>"),c(l(u(f),{title:"Some boot file"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> app<span class="token punctuation"${s}>,</span> <span class="token operator"${s}>...</span><span class="token punctuation"${s}>,</span> ssrContext <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// You can add props to the ssrContext then use them in the src/index.template.html.</span>
  <span class="token comment"${s}>// Example - let&#39;s say we ssrContext.someProp = &#39;some value&#39;, then in index template we can reference it:</span>
  <span class="token comment"${s}>// {{ someProp }}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the src/index.template.html."),a(`
  `),n("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),a(`
  `),n("span",{class:"token comment"},"// {{ someProp }}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,e)),c(`<p${e}>When you add such references (<code class="doc-token"${e}>someProp</code> surrounded by brackets in the example above) into your /index.html or /src/index.template.html, make sure you tell Quasar it’s only valid for SSR builds:</p>`),c(l(u(f),{title:"/index.html or /src/index.template.html"},{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>&lt;% if (ctx.mode.ssr) { %&gt;{{ someProp }} &lt;% } %&gt;</code></pre>`),o(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,"<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>")]),n(r)]}),_:1},m,e));else return[n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:k=>u($)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,"This is the place where you can configure some SSR options. Like if you want the client side to takeover as a SPA (Single Page Application – the default behaviour), or as a PWA (Progressive Web App)."),n(u(f),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// should a PWA take over (default: false), or just a SPA?"),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually serialize the store state and provide it yourself
     * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
     * (Requires @quasar/app-webpack v3.5+)
     */`),a(`
    `),n("span",{class:"token literal-property property"},"manualStoreSerialization"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},`/**
     * Manually inject the store state into ssrContext.state
     * (Requires @quasar/app-webpack v3.5+)
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

    `),n("span",{class:"token literal-property property"},"maxAge"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"24"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token comment"},"// Tell browser when a file from the server should expire from cache"),a(`
        `),n("span",{class:"token comment"},"// (the default value, in ms)"),a(`
        `),n("span",{class:"token comment"},"// Has effect only when server.static() is used"),a(`

    `),n("span",{class:"token comment"},"// List of SSR middleware files (src-ssr/middlewares/*). Order is important."),a(`
    `),n("span",{class:"token literal-property property"},"middlewares"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
      `),n("span",{class:"token string"},"'render'"),a(),n("span",{class:"token comment"},"// Should not be missing, and should be last in the list."),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional; add/remove/change properties"),a(`
    `),n("span",{class:"token comment"},"// of production generated package.json"),a(`
    `),n("span",{class:"token function"},"extendPackageJson"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of pkg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional;"),a(`
    `),n("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),a(`
    `),n("span",{class:"token comment"},"// which includes the SSR middleware"),a(`
    `),n("span",{class:"token function"},"extendWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),a(`
    `),n("span",{class:"token comment"},"// handles the Webserver webpack config ONLY"),a(`
    `),n("span",{class:"token comment"},"// which includes the SSR middleware"),a(`
    `),n("span",{class:"token function"},"chainWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
      `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("blockquote",{class:"doc-note"},[n("p",null,[a("If you decide to go with a PWA client takeover ("),n("strong",null,"which is a killer combo"),a("), the Quasar CLI PWA mode will be installed too. You may want to check out the "),n(d,{to:"/quasar-cli-webpack/developing-pwa/introduction"},{default:p(()=>[a("Quasar PWA")]),_:1}),a(" guide too. But most importantly, make sure you read "),n(d,{to:"/quasar-cli-webpack/developing-ssr/ssr-with-pwa"},{default:p(()=>[a("SSR with PWA")]),_:1}),a(" page.")])]),n("p",null,[a("When building, "),n("code",{class:"doc-token"},"extendWebpack()"),a(" and "),n("code",{class:"doc-token"},"chainWebpack()"),a(" will receive one more parameter (Object), currently containing "),n("code",{class:"doc-token"},"isServer"),a(" or "),n("code",{class:"doc-token"},"isClient"),a(" boolean props, because there will be two Webpack builds (one for the server-side and one for the client-side).")]),n(u(f),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"extendWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isServer"),n("span",{class:"token punctuation"},","),a(" isClient "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,[a("If you want more information, please see this page that goes into more detail about "),n(d,{to:"/quasar-cli-webpack/handling-webpack"},{default:p(()=>[a("handling webpack")]),_:1}),a(" in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file.")]),n("h3",{id:"manually-triggering-store-hydration",class:"doc-heading doc-h3",onClick:k=>u($)("manually-triggering-store-hydration")},"Manually triggering store hydration",8,["onClick"]),n("p",null,"By default, Quasar CLI takes care of hydrating the Vuex store (if you use it) on client-side."),n("p",null,[a("However, should you wish to manually hydrate it yourself, you need to set quasar.config file > ssr > manualStoreHydration: true. One good example is doing it from "),n(d,{to:"/quasar-cli-webpack/boot-files"},{default:p(()=>[a("a boot file")]),_:1}),a(":")]),n(u(f),{title:"Some boot file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// MAKE SURE TO CONFIGURE THIS BOOT FILE"),a(`
`),n("span",{class:"token comment"},"// TO RUN ONLY ON CLIENT-SIDE"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// For Pinia"),a(`
  store`),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" window"),n("span",{class:"token punctuation"},"."),a(`__INITIAL_STATE__

  `),n("span",{class:"token comment"},"// For Vuex"),a(`
  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceState"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},"."),a("__INITIAL_STATE__"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("h3",{id:"manually-triggering-post-hydration",class:"doc-heading doc-h3",onClick:k=>u($)("manually-triggering-post-hydration")},"Manually triggering post-hydration",8,["onClick"]),n("p",null,[a("By default, Quasar CLI wraps your App component and calls "),n("code",{class:"doc-token"},"$q.onSSRHydrated()"),a(" on the client-side when this wrapper component gets mounted. This is the moment that the client-side takes over. You don’t need to configure anything for this to happen.")]),n("p",null,"However should you wish to override the moment when this happens, you need to set quasar.config file > ssr > manualPostHydrationTrigger: true. For whatever your reason is (very custom use-case), this is an example of manually triggering the post hydration:"),n(u(f),{tabs:["Composition API","Options API"]},{default:p(()=>[n(y,{class:"q-pa-none",name:"Composition API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n(y,{class:"q-pa-none",name:"Options API"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onSSRHydrated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1})]),_:1}),n("h2",{id:"nodejs-server",class:"doc-heading doc-h2",onClick:k=>u($)("nodejs-server")},"Nodejs Server",8,["onClick"]),n("p",null,[a("Adding SSR mode to a Quasar project means a new folder will be created: "),n("code",{class:"doc-token"},"/src-ssr"),a(", which contains SSR specific files:")]),n(T,{def:x.nodeJsTree},null,8,["def"]),n("p",null,"You can freely edit these files. Each of the two folders are detailed in their own doc pages (check left-side menu)."),n("p",null,"Notice a few things:"),n("ol",null,[n("li",null,[n("p",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”.")]),n("li",null,[n("p",null,[a("The "),n("code",{class:"doc-token"},"/src-ssr/middlewares"),a(" is built through a separate Webpack config. "),n("strong",null,"You will see this marked as “Webserver” when Quasar App CLI builds your app."),a(" You can chain/extend the Webpack configuration of these files through the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")])])]),n(u(f),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"ssr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`

    `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
    `),n("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),a(`
    `),n("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),a(`
    `),n("span",{class:"token function"},"extendWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
      `),n("span",{class:"token comment"},"// no need to return anything"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpack() but uses webpack-chain;"),a(`
    `),n("span",{class:"token comment"},"// the Webserver part ONLY (/src-ssr/)"),a(`
    `),n("span",{class:"token comment"},"// which is invoked for production (NOT for dev)"),a(`
    `),n("span",{class:"token function"},"chainWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
      `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("ol",{start:"4"},[n("li",null,[a("The "),n("code",{class:"doc-token"},"/src-ssr/production-export.js"),a(" file is detailed in "),n(d,{to:"/quasar-cli-webpack/developing-ssr/ssr-production-export"},{default:p(()=>[a("SSR Production Export")]),_:1}),a(" page. Read it especially if you need to support serverless functions.")])]),n("h2",{id:"helping-seo",class:"doc-heading doc-h2",onClick:k=>u($)("helping-seo")},"Helping SEO",8,["onClick"]),n("p",null,[a("One of the main reasons when you develop a SSR instead of a SPA is for taking care of the SEO. And SEO can be greatly improved by using the "),n(d,{to:"/quasar-plugins/meta"},{default:p(()=>[a("Quasar Meta Plugin")]),_:1}),a(" to manage dynamic html markup required by the search engines.")]),n("h2",{id:"boot-files",class:"doc-heading doc-h2",onClick:k=>u($)("boot-files")},"Boot Files",8,["onClick"]),n("p",null,[a("When running on SSR mode, your application code needs to be isomorphic or “universal”, which means that it must run both on a Node context and in the browser. This applies to your "),n(d,{to:"/quasar-cli-webpack/boot-files"},{default:p(()=>[a("Boot Files")]),_:1}),a(" too.")]),n("p",null,"However, there are cases where you only want some boot files to run only on the server or only on the client-side. You can achieve that by specifying:"),n(u(f),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token string"},"'some-boot-file'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// runs on both server and client"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some-other'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on client-side"),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'third'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"client"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token comment"},"// this boot file gets embedded only on server-side"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"Just make sure that your app is consistent, though."),n("p",null,[a("When a boot file runs on the server, you will have access to one more parameter (called "),n(d,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:p(()=>[a("ssrContext")]),_:1}),a(") on the default exported function:")]),n(u(f),{title:"Some boot file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// You can add props to the ssrContext then use them in the src/index.template.html."),a(`
  `),n("span",{class:"token comment"},"// Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:"),a(`
  `),n("span",{class:"token comment"},"// {{ someProp }}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,[a("When you add such references ("),n("code",{class:"doc-token"},"someProp"),a(" surrounded by brackets in the example above) into your /index.html or /src/index.template.html, make sure you tell Quasar it’s only valid for SSR builds:")]),n(u(f),{title:"/index.html or /src/index.template.html"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,"<% if (ctx.mode.ssr) { %>{{ someProp }} <% } %>")]),n(r)]),_:1})]}),_:1},W))}}},A=v.setup;v.setup=(S,b)=>{const g=L();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-ssr/configuring-ssr.md"),A?A(S,b):void 0};const _=E(v,[["__file","configuring-ssr.md"]]);export{_ as default};
