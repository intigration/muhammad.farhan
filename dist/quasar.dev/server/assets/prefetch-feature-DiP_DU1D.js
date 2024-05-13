import{resolveComponent as P,mergeProps as M,withCtx as c,unref as l,createVNode as n,createTextVNode as a,useSSRContext as j}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as $}from"./page-utils-C-QWsEHe.js";import{D as T,a as f}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as q}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const S={__name:"prefetch-feature",__ssrInlineRender:!0,setup(b){const w=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],g=[{id:"installation",title:"2. Installation"},{id:"how-prefetch-helps-ssr-mode",title:"3. How PreFetch Helps SSR Mode"},{id:"when-prefetch-gets-activated",title:"4. When PreFetch Gets Activated"},{id:"usage",title:"5. Usage"},{id:"redirecting-example",title:"5.1. Redirecting Example",sub:!0},{id:"using-prefetch-to-initialize-pinia-or-vuex-store-s-",title:"5.2. Using preFetch to Initialize Pinia or Vuex Store(s)",sub:!0},{id:"vuex-store-code-splitting",title:"5.3. Vuex Store Code Splitting",sub:!0},{id:"usage-with-vuex-and-typescript",title:"5.4. Usage with Vuex and TypeScript",sub:!0},{id:"loading-state",title:"6. Loading State"},{id:"loadingbar",title:"6.1. LoadingBar",sub:!0},{id:"loading",title:"6.2. Loading",sub:!0}];return(N,L,R,C)=>{const x=P("q-markup-table"),y=P("q-tab-panel");L(i(T,M({title:"PreFetch Feature",desc:"(@quasar/app-webpack) How to prefetch data and initialize your Vuex store, validate the route and redirect to another page in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/prefetch-feature",toc:g,related:w},C),{default:c((V,u,h,s)=>{if(u)u(`<p${s}>The PreFetch is a feature (<strong${s}>only available when using Quasar CLI</strong>) which allows the components picked up by Vue Router (defined in <code class="doc-token"${s}>/src/router/routes.js</code>) to:</p><ul${s}><li${s}>pre-fetch data</li><li${s}>validate the route</li><li${s}>redirect to another route, when some conditions aren’t met (like user isn’t logged in)</li><li${s}>can help in initializing the Store state</li></ul><p${s}>All the above will run before the actual route component is rendered.</p><p${s}><strong${s}>It is designed to work with all Quasar modes</strong> (SPA, PWA, SSR, Cordova, Electron), but it is especially useful for SSR builds.</p><h2 id="installation" class="doc-heading doc-h2"${s}>Installation</h2>`),u(i(l(m),{title:"/quasar.config file"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>preFetch</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"preFetch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},h,s)),u(`<div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}>When you use it to pre-fetch data, you are required to use a Vuex Store, so make sure that your project folder has the <code class="doc-token"${s}>/src/store</code> folder when you create your project, otherwise generate a new project and copy the store folder contents to your current project.</p></div><h2 id="how-prefetch-helps-ssr-mode" class="doc-heading doc-h2"${s}>How PreFetch Helps SSR Mode</h2><p${s}>This feature is especially useful for the SSR mode (but not limited to it only). During SSR, we are essentially rendering a “snapshot” of our app, so if the app relies on some asynchronous data, <strong${s}>then this data needs to be pre-fetched and resolved before we start the rendering process</strong>.</p><p${s}>Another concern is that on the client, the same data needs to be available before we mount the client side app - otherwise the client app would render using a different state and the hydration would fail.</p><p${s}>To address this, the fetched data needs to live outside the view components, in a dedicated data store, or a “state container”. On the server, we can pre-fetch and fill data into the store before rendering. The client-side store will directly pick up the server state before we mount the app.</p><h2 id="when-prefetch-gets-activated" class="doc-heading doc-h2"${s}>When PreFetch Gets Activated</h2><p${s}>The <code class="doc-token"${s}>preFetch</code> hook (described in next sections) is determined by the route visited - which also determines what components are rendered. In fact, the data needed for a given route is also the data needed by the components rendered at that route. <strong${s}>So it is natural (and also required) to place the hook logic ONLY inside route components.</strong> This includes <code class="doc-token"${s}>/src/App.vue</code>, which in this case will run only once at the app bootup.</p><p${s}>Let’s take an example in order to understand when the hook is being called. Let’s say we have these routes and we’ve written <code class="doc-token"${s}>preFetch</code> hooks for all these components:</p>`),u(i(l(m),{title:"Routes"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token punctuation"${t}>[</span>
  <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;/&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> LandingPage
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
  <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;/shop&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> ShopLayout<span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>children</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
      <span class="token punctuation"${t}>{</span>
        <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;all&#39;</span><span class="token punctuation"${t}>,</span>
        <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> ShopAll
      <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
      <span class="token punctuation"${t}>{</span>
        <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;new&#39;</span><span class="token punctuation"${t}>,</span>
        <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> ShopNew
      <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
      <span class="token punctuation"${t}>{</span>
        <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;product/:name&#39;</span><span class="token punctuation"${t}>,</span>
        <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> ShopProduct<span class="token punctuation"${t}>,</span>
        <span class="token literal-property property"${t}>children</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span><span class="token punctuation"${t}>{</span>
          <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;overview&#39;</span><span class="token punctuation"${t}>,</span>
          <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> ShopProductOverview
        <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>]</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>]</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>]</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` LandingPage
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/shop'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" ShopLayout"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` ShopAll
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'new'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` ShopNew
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'product/:name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" ShopProduct"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'overview'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` ShopProductOverview
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(p)]}),_:1},h,s)),u(`<p${s}>Now, let’s see how the hooks are called when the user visits these routes in the order specified below, one after another.</p>`),u(i(x,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c((k,o,r,t)=>{if(o)o(`<thead${t}><tr${t}><th class="text-left"${t}>Route being visited</th><th class="text-left"${t}>Hooks called from</th><th class="text-left"${t}>Observations</th></tr></thead><tbody${t}><tr${t}><td${t}><code class="doc-token"${t}>/</code></td><td${t}>App.vue then LandingPage</td><td${t}>App.vue hook is called since our app boots up.</td></tr><tr${t}><td${t}><code class="doc-token"${t}>/shop/all</code></td><td${t}>ShopLayout then ShopAll</td><td${t}>-</td></tr><tr${t}><td${t}><code class="doc-token"${t}>/shop/new</code></td><td${t}>ShopNew</td><td${t}>ShopNew is a child of ShopLayout, and ShopLayout is already rendered, so ShopLayout isn’t called again.</td></tr><tr${t}><td${t}><code class="doc-token"${t}>/shop/product/pyjamas</code></td><td${t}>ShopProduct</td><td${t}>-</td></tr><tr${t}><td${t}><code class="doc-token"${t}>/shop/product/shoes</code></td><td${t}>ShopProduct</td><td${t}>Quasar notices the same component is already rendered, but the route has been updated and it has route params, so it calls the hook again.</td></tr><tr${t}><td${t}><code class="doc-token"${t}>/shop/product/shoes/overview</code></td><td${t}>ShopProduct then ShopProductOverview</td><td${t}>ShopProduct has route params so it is called even though it’s already rendered.</td></tr><tr${t}><td${t}><code class="doc-token"${t}>/</code></td><td${t}>LandingPage</td><td${t}>-</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Route being visited"),n("th",{class:"text-left"},"Hooks called from"),n("th",{class:"text-left"},"Observations")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/")]),n("td",null,"App.vue then LandingPage"),n("td",null,"App.vue hook is called since our app boots up.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/all")]),n("td",null,"ShopLayout then ShopAll"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/new")]),n("td",null,"ShopNew"),n("td",null,"ShopNew is a child of ShopLayout, and ShopLayout is already rendered, so ShopLayout isn’t called again.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/product/pyjamas")]),n("td",null,"ShopProduct"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/product/shoes")]),n("td",null,"ShopProduct"),n("td",null,"Quasar notices the same component is already rendered, but the route has been updated and it has route params, so it calls the hook again.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/product/shoes/overview")]),n("td",null,"ShopProduct then ShopProductOverview"),n("td",null,"ShopProduct has route params so it is called even though it’s already rendered.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/")]),n("td",null,"LandingPage"),n("td",null,"-")])])]}),_:1},h,s)),u(`<h2 id="usage" class="doc-heading doc-h2"${s}>Usage</h2><p${s}>The hook is defined as a custom static function called <code class="doc-token"${s}>preFetch</code> on our route components. Note that because this function will be called before the components are instantiated, it doesn’t have access to <code class="doc-token"${s}>this</code>.</p>`),u(i(l(m),{title:"Some .vue component used as route"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>div</span><span class="token punctuation"${t}>&gt;</span></span>{{ item.title }}<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useStore <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vuex&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// our hook here</span>
  <span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> store<span class="token punctuation"${t}>,</span> currentRoute<span class="token punctuation"${t}>,</span> previousRoute<span class="token punctuation"${t}>,</span> redirect<span class="token punctuation"${t}>,</span> ssrContext<span class="token punctuation"${t}>,</span> urlPath<span class="token punctuation"${t}>,</span> publicPath <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// fetch data, validate route and optionally redirect to some other route...</span>

    <span class="token comment"${t}>// ssrContext is available only server-side in SSR mode</span>

    <span class="token comment"${t}>// No access to &quot;this&quot; here</span>

    <span class="token comment"${t}>// Return a Promise if you are running an async job</span>
    <span class="token comment"${t}>// Example:</span>
    <span class="token keyword"${t}>return</span> store<span class="token punctuation"${t}>.</span><span class="token function"${t}>dispatch</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;fetchItem&#39;</span><span class="token punctuation"${t}>,</span> currentRoute<span class="token punctuation"${t}>.</span>params<span class="token punctuation"${t}>.</span>id<span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>const</span> $store <span class="token operator"${t}>=</span> <span class="token function"${t}>useStore</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>

    <span class="token comment"${t}>// display the item from store state.</span>
    <span class="token keyword"${t}>const</span> item <span class="token operator"${t}>=</span> <span class="token function"${t}>computed</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> $store<span class="token punctuation"${t}>.</span>state<span class="token punctuation"${t}>.</span>items<span class="token punctuation"${t}>[</span><span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$route<span class="token punctuation"${t}>.</span>params<span class="token punctuation"${t}>.</span>id<span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span> item <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("{{ item.title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuex'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// our hook here"),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store"),n("span",{class:"token punctuation"},","),a(" currentRoute"),n("span",{class:"token punctuation"},","),a(" previousRoute"),n("span",{class:"token punctuation"},","),a(" redirect"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},","),a(" urlPath"),n("span",{class:"token punctuation"},","),a(" publicPath "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// fetch data, validate route and optionally redirect to some other route..."),a(`

    `),n("span",{class:"token comment"},"// ssrContext is available only server-side in SSR mode"),a(`

    `),n("span",{class:"token comment"},'// No access to "this" here'),a(`

    `),n("span",{class:"token comment"},"// Return a Promise if you are running an async job"),a(`
    `),n("span",{class:"token comment"},"// Example:"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fetchItem'"),n("span",{class:"token punctuation"},","),a(" currentRoute"),n("span",{class:"token punctuation"},"."),a("params"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $store "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// display the item from store state."),a(`
    `),n("span",{class:"token keyword"},"const"),a(" item "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" $store"),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("items"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$route"),n("span",{class:"token punctuation"},"."),a("params"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" item "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]}),_:1},h,s)),u(`<p${s}>If you are using <code class="doc-token"${s}>&lt;script setup&gt;</code> (and Vue 3.3+):</p>`),u(i(l(m),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span> <span class="token attr-name"${t}>setup</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token comment"${t}>/**
 * The defineOptions is a macro.
 * The options will be hoisted to module scope and cannot access local
 * variables in &lt;script setup&gt; that are not literal constants.
 */</span>
<span class="token function"${t}>defineOptions</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;running preFetch&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},`/**
 * The defineOptions is a macro.
 * The options will be hoisted to module scope and cannot access local
 * variables in <script setup> that are not literal constants.
 */`),a(`
`),n("span",{class:"token function"},"defineOptions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'running preFetch'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]}),_:1},h,s)),u(`<div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>If you are developing a SSR app, then you can check out the `),u(i(f,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:c((k,o,r,t)=>{if(o)o("ssrContext");else return[a("ssrContext")]}),_:1},h,s)),u(" Object that gets supplied server-side.</p></div>"),u(i(l(m),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// related action for Promise example</span>
<span class="token comment"${t}>// ...</span>

<span class="token literal-property property"${t}>actions</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>fetchItem</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> commit <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span> id</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>return</span> axiosInstance<span class="token punctuation"${t}>.</span><span class="token function"${t}>get</span><span class="token punctuation"${t}>(</span>url<span class="token punctuation"${t}>,</span> id<span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> data <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token function"${t}>commit</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;mutation&#39;</span><span class="token punctuation"${t}>,</span> data<span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>

<span class="token comment"${t}>// ...</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// related action for Promise example"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`

`),n("span",{class:"token literal-property property"},"actions"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"fetchItem"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" commit "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" id")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" axiosInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token punctuation"},","),a(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" data "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'mutation'"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// ...")])]),n(p)]}),_:1},h,s)),u(`<h3 id="redirecting-example" class="doc-heading doc-h3"${s}>Redirecting Example</h3><p${s}>Below is an example of redirecting the user under some circumstances, like when they try to access a page that only an authenticated user should see.</p>`),u(i(l(m),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// We assume here we already wrote the authentication logic</span>
<span class="token comment"${t}>// in the Vuex Store, so take as a high-level example only.</span>
<span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> store<span class="token punctuation"${t}>,</span> redirect <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>if</span> <span class="token punctuation"${t}>(</span><span class="token operator"${t}>!</span>store<span class="token punctuation"${t}>.</span>state<span class="token punctuation"${t}>.</span>authenticated<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token function"${t}>redirect</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;/login&#39;</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// We assume here we already wrote the authentication logic"),a(`
`),n("span",{class:"token comment"},"// in the Vuex Store, so take as a high-level example only."),a(`
`),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store"),n("span",{class:"token punctuation"},","),a(" redirect "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("store"),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("authenticated"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"redirect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/login'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},h,s)),u(`<p${s}>By default, redirect occurs with a status response code of 302, but we can pass this status code as the second optional parameter when calling the function, like this:</p>`),u(i(l(m),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token function"${t}>redirect</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token literal-property property"${t}>path</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;/moved-permanently&#39;</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span> <span class="token number"${t}>301</span><span class="token punctuation"${t}>)</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token function"},"redirect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/moved-permanently'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"301"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},h,s)),u(`<p${s}>If <code class="doc-token"${s}>redirect(false)</code> is called (supported only on client-side!), it aborts the current route navigation. Note that if you use it like this in <code class="doc-token"${s}>src/App.vue</code> it will halt the app bootup, which is undesirable.</p><p${s}>The <code class="doc-token"${s}>redirect()</code> method requires a Vue Router location Object.</p><h3 id="using-prefetch-to-initialize-pinia-or-vuex-store-s-" class="doc-heading doc-h3"${s}>Using preFetch to Initialize Pinia or Vuex Store(s)</h3><p${s}>The <code class="doc-token"${s}>preFetch</code> hook runs only once, when the app boots up, so you can use this opportunity to initialize the Pinia store(s) or the Vuex Store here.</p>`),u(i(l(m),{tabs:["Pinia on Non SSR","Pinia on SSR"]},{default:c((k,o,r,t)=>{if(o)o(i(y,{class:"q-pa-none",name:"Pinia on Non SSR"},{default:c((A,d,v,e)=>{if(d)d(`<pre class="doc-code"${e}><code${e}><span class="token comment"${e}>// App.vue - handling Pinia stores</span>
<span class="token comment"${e}>// example with a store named &quot;myStore&quot;</span>
<span class="token comment"${e}>// placed in /src/stores/myStore.js|ts</span>

<span class="token keyword"${e}>import</span> <span class="token punctuation"${e}>{</span> useMyStore <span class="token punctuation"${e}>}</span> <span class="token keyword"${e}>from</span> <span class="token string"${e}>&#39;stores/myStore&#39;</span>

<span class="token keyword"${e}>export</span> <span class="token keyword"${e}>default</span> <span class="token punctuation"${e}>{</span>
  <span class="token comment"${e}>// ...</span>
  <span class="token function"${e}>preFetch</span> <span class="token punctuation"${e}>(</span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token keyword"${e}>const</span> myStore <span class="token operator"${e}>=</span> <span class="token function"${e}>useMyStore</span><span class="token punctuation"${e}>(</span><span class="token punctuation"${e}>)</span>
    <span class="token comment"${e}>// do something with myStore</span>
  <span class="token punctuation"${e}>}</span>
<span class="token punctuation"${e}>}</span></code></pre>`),d(i(p,null,null,v,e));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue - handling Pinia stores"),a(`
`),n("span",{class:"token comment"},'// example with a store named "myStore"'),a(`
`),n("span",{class:"token comment"},"// placed in /src/stores/myStore.js|ts"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMyStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'stores/myStore'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myStore "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useMyStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// do something with myStore"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},r,t)),o(i(y,{class:"q-pa-none",name:"Pinia on SSR"},{default:c((A,d,v,e)=>{if(d)d(`<pre class="doc-code"${e}><code${e}><span class="token comment"${e}>// App.vue - handling Pinia stores</span>
<span class="token comment"${e}>// example with a store named &quot;myStore&quot;</span>
<span class="token comment"${e}>// placed in /src/stores/myStore.js|ts</span>

<span class="token keyword"${e}>import</span> <span class="token punctuation"${e}>{</span> useMyStore <span class="token punctuation"${e}>}</span> <span class="token keyword"${e}>from</span> <span class="token string"${e}>&#39;stores/myStore&#39;</span>

<span class="token keyword"${e}>export</span> <span class="token keyword"${e}>default</span> <span class="token punctuation"${e}>{</span>
  <span class="token comment"${e}>// ...</span>
  <span class="token function"${e}>preFetch</span> <span class="token punctuation"${e}>(</span><span class="token parameter"${e}><span class="token punctuation"${e}>{</span> store <span class="token punctuation"${e}>}</span></span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token keyword"${e}>const</span> myStore <span class="token operator"${e}>=</span> <span class="token function"${e}>useMyStore</span><span class="token punctuation"${e}>(</span>store<span class="token punctuation"${e}>)</span>
    <span class="token comment"${e}>// do something with myStore</span>
  <span class="token punctuation"${e}>}</span>
<span class="token punctuation"${e}>}</span></code></pre>`),d(i(p,null,null,v,e));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue - handling Pinia stores"),a(`
`),n("span",{class:"token comment"},'// example with a store named "myStore"'),a(`
`),n("span",{class:"token comment"},"// placed in /src/stores/myStore.js|ts"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMyStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'stores/myStore'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myStore "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useMyStore"),n("span",{class:"token punctuation"},"("),a("store"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// do something with myStore"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},r,t));else return[n(y,{class:"q-pa-none",name:"Pinia on Non SSR"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue - handling Pinia stores"),a(`
`),n("span",{class:"token comment"},'// example with a store named "myStore"'),a(`
`),n("span",{class:"token comment"},"// placed in /src/stores/myStore.js|ts"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMyStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'stores/myStore'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myStore "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useMyStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// do something with myStore"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n(y,{class:"q-pa-none",name:"Pinia on SSR"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue - handling Pinia stores"),a(`
`),n("span",{class:"token comment"},'// example with a store named "myStore"'),a(`
`),n("span",{class:"token comment"},"// placed in /src/stores/myStore.js|ts"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMyStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'stores/myStore'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myStore "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useMyStore"),n("span",{class:"token punctuation"},"("),a("store"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// do something with myStore"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1})]}),_:1},h,s)),u(i(l(m),{title:"Handling Vuex store"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// App.vue</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// ...</span>
  <span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> store <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// initialize something in store here</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// initialize something in store here"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},h,s)),u(`<h3 id="vuex-store-code-splitting" class="doc-heading doc-h3"${s}>Vuex Store Code Splitting</h3><p${s}>In a large application, your Vuex store will likely be split into multiple modules. Of course, it is also possible to code-split these modules into corresponding route component chunks. Suppose we have the following store module:</p>`),u(i(l(m),{title:"src/store/foo.js"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// we&#39;ve merged everything into one file here;</span>
<span class="token comment"${t}>// an initialized Quasar project splits every component of a Vuex module</span>
<span class="token comment"${t}>// into separate files, but for the sake of the example</span>
<span class="token comment"${t}>// here in the docs, we show this module as a single file</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>namespaced</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token punctuation"${t}>,</span>
  <span class="token comment"${t}>// IMPORTANT: state must be a function so the module can be</span>
  <span class="token comment"${t}>// instantiated multiple times</span>
  <span class="token function-variable function"${t}>state</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>count</span><span class="token operator"${t}>:</span> <span class="token number"${t}>0</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>,</span>
  <span class="token literal-property property"${t}>actions</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token function-variable function"${t}>inc</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> commit <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token function"${t}>commit</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;inc&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
  <span class="token literal-property property"${t}>mutations</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token function-variable function"${t}>inc</span><span class="token operator"${t}>:</span> <span class="token parameter"${t}>state</span> <span class="token operator"${t}>=&gt;</span> state<span class="token punctuation"${t}>.</span>count<span class="token operator"${t}>++</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we've merged everything into one file here;"),a(`
`),n("span",{class:"token comment"},"// an initialized Quasar project splits every component of a Vuex module"),a(`
`),n("span",{class:"token comment"},"// into separate files, but for the sake of the example"),a(`
`),n("span",{class:"token comment"},"// here in the docs, we show this module as a single file"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"namespaced"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// IMPORTANT: state must be a function so the module can be"),a(`
  `),n("span",{class:"token comment"},"// instantiated multiple times"),a(`
  `),n("span",{class:"token function-variable function"},"state"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"count"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"actions"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"inc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" commit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'inc'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"mutations"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"inc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token parameter"},"state"),a(),n("span",{class:"token operator"},"=>"),a(" state"),n("span",{class:"token punctuation"},"."),a("count"),n("span",{class:"token operator"},"++"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},h,s)),u(`<p${s}>Now, we can use <code class="doc-token"${s}>store.registerModule()</code> to lazy-register this module in a route component’s <code class="doc-token"${s}>preFetch()</code> hook:</p>`),u(i(l(m),{title:"Inside a route component"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>div</span><span class="token punctuation"${t}>&gt;</span></span>{{ fooCount }}<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useStore <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vuex&#39;</span>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> onMounted<span class="token punctuation"${t}>,</span> onUnmounted <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vue&#39;</span>

<span class="token comment"${t}>// import the module here instead of in \`src/store/index.js\`</span>
<span class="token keyword"${t}>import</span> fooStoreModule <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;store/foo&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> store <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    store<span class="token punctuation"${t}>.</span><span class="token function"${t}>registerModule</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;foo&#39;</span><span class="token punctuation"${t}>,</span> fooStoreModule<span class="token punctuation"${t}>)</span>
    <span class="token keyword"${t}>return</span> store<span class="token punctuation"${t}>.</span><span class="token function"${t}>dispatch</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;foo/inc&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>const</span> $store <span class="token operator"${t}>=</span> <span class="token function"${t}>useStore</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>

    <span class="token function"${t}>onMounted</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// Preserve the previous state if it was injected from the server</span>
      $store<span class="token punctuation"${t}>.</span><span class="token function"${t}>registerModule</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;foo&#39;</span><span class="token punctuation"${t}>,</span> fooStoreModule<span class="token punctuation"${t}>,</span> <span class="token punctuation"${t}>{</span> <span class="token literal-property property"${t}>preserveState</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

    <span class="token function"${t}>onUnmounted</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// IMPORTANT: avoid duplicate module registration on the client</span>
      <span class="token comment"${t}>// when the route is visited multiple times.</span>
      $store<span class="token punctuation"${t}>.</span><span class="token function"${t}>unregisterModule</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;foo&#39;</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>const</span> fooCount <span class="token operator"${t}>=</span> <span class="token function"${t}>computed</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token keyword"${t}>return</span> $store<span class="token punctuation"${t}>.</span>state<span class="token punctuation"${t}>.</span>foo<span class="token punctuation"${t}>.</span>count
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
      fooCount
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("{{ fooCount }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuex'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" onUnmounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token comment"},"// import the module here instead of in `src/store/index.js`"),a(`
`),n("span",{class:"token keyword"},"import"),a(" fooStoreModule "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'store/foo'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),a(" fooStoreModule"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo/inc'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $store "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// Preserve the previous state if it was injected from the server"),a(`
      $store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),a(" fooStoreModule"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"preserveState"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onUnmounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// IMPORTANT: avoid duplicate module registration on the client"),a(`
      `),n("span",{class:"token comment"},"// when the route is visited multiple times."),a(`
      $store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unregisterModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" fooCount "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" $store"),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("foo"),n("span",{class:"token punctuation"},"."),a(`count
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      fooCount
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]}),_:1},h,s)),u(`<p${s}>Also note that because the module is now a dependency of the route component, it will be moved into the route component’s async chunk by Webpack.</p><div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}>Don’t forget to use the <code class="doc-token"${s}>preserveState: true</code> option for <code class="doc-token"${s}>registerModule</code> so we keep the state injected by the server.</p></div><h3 id="usage-with-vuex-and-typescript" class="doc-heading doc-h3"${s}>Usage with Vuex and TypeScript</h3><p${s}>You can use <code class="doc-token"${s}>preFetch</code> helper to type-hint the store parameter (which will otherwise have an <code class="doc-token"${s}>any</code> type):</p>`),u(i(l(m),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> preFetch <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar/wrappers&#39;</span>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Store <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vuex&#39;</span>

<span class="token keyword"${t}>interface</span> <span class="token class-name"${t}>StateInterface</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// ...</span>
<span class="token punctuation"${t}>}</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>preFetch</span><span class="token operator"${t}>:</span> preFetch<span class="token operator"${t}>&lt;</span>StateInterface<span class="token operator"${t}>&gt;</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> store <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// Do something with your newly-typed store parameter</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>,</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" preFetch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Store "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuex'"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"StateInterface"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"preFetch"),n("span",{class:"token operator"},":"),a(" preFetch"),n("span",{class:"token operator"},"<"),a("StateInterface"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Do something with your newly-typed store parameter"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},h,s)),u(`<div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>This is useful only to type <code class="doc-token"${s}>store</code> parameter, other parameters are automatically typed even when using the normal syntax.</p></div><h2 id="loading-state" class="doc-heading doc-h2"${s}>Loading State</h2><p${s}>A good UX includes notifying the user that something is being worked on in the background while he/she waits for the page to be ready. Quasar CLI offers two options for this out of the box.</p><h3 id="loadingbar" class="doc-heading doc-h3"${s}>LoadingBar</h3><p${s}>When you add Quasar `),u(i(f,{to:"/quasar-plugins/loading-bar"},{default:c((k,o,r,t)=>{if(o)o("LoadingBar");else return[a("LoadingBar")]}),_:1},h,s)),u(` plugin to your app, Quasar CLI will use it while it runs the preFetch hooks by default.</p><h3 id="loading" class="doc-heading doc-h3"${s}>Loading</h3><p${s}>There’s also the possibility to use Quasar `),u(i(f,{to:"/quasar-plugins/loading"},{default:c((k,o,r,t)=>{if(o)o("Loading");else return[a("Loading")]}),_:1},h,s)),u(" plugin. Here’s an example:</p>"),u(i(l(m),{title:"A route .vue component"},{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Loading <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// ...</span>
  <span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* ... */</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    Loading<span class="token punctuation"${t}>.</span><span class="token function"${t}>show</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>return</span> <span class="token keyword"${t}>new</span> <span class="token class-name"${t}>Promise</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>resolve</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// do something async here</span>
      <span class="token comment"${t}>// then call &quot;resolve()&quot;</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      Loading<span class="token punctuation"${t}>.</span><span class="token function"${t}>hide</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(i(p,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Loading "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* ... */"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// do something async here"),a(`
      `),n("span",{class:"token comment"},'// then call "resolve()"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},h,s));else return[n("p",null,[a("The PreFetch is a feature ("),n("strong",null,"only available when using Quasar CLI"),a(") which allows the components picked up by Vue Router (defined in "),n("code",{class:"doc-token"},"/src/router/routes.js"),a(") to:")]),n("ul",null,[n("li",null,"pre-fetch data"),n("li",null,"validate the route"),n("li",null,"redirect to another route, when some conditions aren’t met (like user isn’t logged in)"),n("li",null,"can help in initializing the Store state")]),n("p",null,"All the above will run before the actual route component is rendered."),n("p",null,[n("strong",null,"It is designed to work with all Quasar modes"),a(" (SPA, PWA, SSR, Cordova, Electron), but it is especially useful for SSR builds.")]),n("h2",{id:"installation",class:"doc-heading doc-h2",onClick:k=>l($)("installation")},"Installation",8,["onClick"]),n(l(m),{title:"/quasar.config file"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"preFetch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("When you use it to pre-fetch data, you are required to use a Vuex Store, so make sure that your project folder has the "),n("code",{class:"doc-token"},"/src/store"),a(" folder when you create your project, otherwise generate a new project and copy the store folder contents to your current project.")])]),n("h2",{id:"how-prefetch-helps-ssr-mode",class:"doc-heading doc-h2",onClick:k=>l($)("how-prefetch-helps-ssr-mode")},"How PreFetch Helps SSR Mode",8,["onClick"]),n("p",null,[a("This feature is especially useful for the SSR mode (but not limited to it only). During SSR, we are essentially rendering a “snapshot” of our app, so if the app relies on some asynchronous data, "),n("strong",null,"then this data needs to be pre-fetched and resolved before we start the rendering process"),a(".")]),n("p",null,"Another concern is that on the client, the same data needs to be available before we mount the client side app - otherwise the client app would render using a different state and the hydration would fail."),n("p",null,"To address this, the fetched data needs to live outside the view components, in a dedicated data store, or a “state container”. On the server, we can pre-fetch and fill data into the store before rendering. The client-side store will directly pick up the server state before we mount the app."),n("h2",{id:"when-prefetch-gets-activated",class:"doc-heading doc-h2",onClick:k=>l($)("when-prefetch-gets-activated")},"When PreFetch Gets Activated",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"preFetch"),a(" hook (described in next sections) is determined by the route visited - which also determines what components are rendered. In fact, the data needed for a given route is also the data needed by the components rendered at that route. "),n("strong",null,"So it is natural (and also required) to place the hook logic ONLY inside route components."),a(" This includes "),n("code",{class:"doc-token"},"/src/App.vue"),a(", which in this case will run only once at the app bootup.")]),n("p",null,[a("Let’s take an example in order to understand when the hook is being called. Let’s say we have these routes and we’ve written "),n("code",{class:"doc-token"},"preFetch"),a(" hooks for all these components:")]),n(l(m),{title:"Routes"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` LandingPage
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/shop'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" ShopLayout"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` ShopAll
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'new'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` ShopNew
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'product/:name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" ShopProduct"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'overview'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` ShopProductOverview
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(p)]),_:1}),n("p",null,"Now, let’s see how the hooks are called when the user visits these routes in the order specified below, one after another."),n(x,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Route being visited"),n("th",{class:"text-left"},"Hooks called from"),n("th",{class:"text-left"},"Observations")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/")]),n("td",null,"App.vue then LandingPage"),n("td",null,"App.vue hook is called since our app boots up.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/all")]),n("td",null,"ShopLayout then ShopAll"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/new")]),n("td",null,"ShopNew"),n("td",null,"ShopNew is a child of ShopLayout, and ShopLayout is already rendered, so ShopLayout isn’t called again.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/product/pyjamas")]),n("td",null,"ShopProduct"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/product/shoes")]),n("td",null,"ShopProduct"),n("td",null,"Quasar notices the same component is already rendered, but the route has been updated and it has route params, so it calls the hook again.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/shop/product/shoes/overview")]),n("td",null,"ShopProduct then ShopProductOverview"),n("td",null,"ShopProduct has route params so it is called even though it’s already rendered.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"/")]),n("td",null,"LandingPage"),n("td",null,"-")])])]),_:1}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:k=>l($)("usage")},"Usage",8,["onClick"]),n("p",null,[a("The hook is defined as a custom static function called "),n("code",{class:"doc-token"},"preFetch"),a(" on our route components. Note that because this function will be called before the components are instantiated, it doesn’t have access to "),n("code",{class:"doc-token"},"this"),a(".")]),n(l(m),{title:"Some .vue component used as route"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("{{ item.title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuex'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// our hook here"),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store"),n("span",{class:"token punctuation"},","),a(" currentRoute"),n("span",{class:"token punctuation"},","),a(" previousRoute"),n("span",{class:"token punctuation"},","),a(" redirect"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},","),a(" urlPath"),n("span",{class:"token punctuation"},","),a(" publicPath "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// fetch data, validate route and optionally redirect to some other route..."),a(`

    `),n("span",{class:"token comment"},"// ssrContext is available only server-side in SSR mode"),a(`

    `),n("span",{class:"token comment"},'// No access to "this" here'),a(`

    `),n("span",{class:"token comment"},"// Return a Promise if you are running an async job"),a(`
    `),n("span",{class:"token comment"},"// Example:"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fetchItem'"),n("span",{class:"token punctuation"},","),a(" currentRoute"),n("span",{class:"token punctuation"},"."),a("params"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $store "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// display the item from store state."),a(`
    `),n("span",{class:"token keyword"},"const"),a(" item "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" $store"),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("items"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$route"),n("span",{class:"token punctuation"},"."),a("params"),n("span",{class:"token punctuation"},"."),a("id"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" item "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]),_:1}),n("p",null,[a("If you are using "),n("code",{class:"doc-token"},"<script setup>"),a(" (and Vue 3.3+):")]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},`/**
 * The defineOptions is a macro.
 * The options will be hoisted to module scope and cannot access local
 * variables in <script setup> that are not literal constants.
 */`),a(`
`),n("span",{class:"token function"},"defineOptions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'running preFetch'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("If you are developing a SSR app, then you can check out the "),n(f,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:c(()=>[a("ssrContext")]),_:1}),a(" Object that gets supplied server-side.")])]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// related action for Promise example"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`

`),n("span",{class:"token literal-property property"},"actions"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"fetchItem"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" commit "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" id")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" axiosInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token punctuation"},","),a(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" data "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'mutation'"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// ...")])]),n(p)]),_:1}),n("h3",{id:"redirecting-example",class:"doc-heading doc-h3",onClick:k=>l($)("redirecting-example")},"Redirecting Example",8,["onClick"]),n("p",null,"Below is an example of redirecting the user under some circumstances, like when they try to access a page that only an authenticated user should see."),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// We assume here we already wrote the authentication logic"),a(`
`),n("span",{class:"token comment"},"// in the Vuex Store, so take as a high-level example only."),a(`
`),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store"),n("span",{class:"token punctuation"},","),a(" redirect "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("store"),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("authenticated"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"redirect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/login'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,"By default, redirect occurs with a status response code of 302, but we can pass this status code as the second optional parameter when calling the function, like this:"),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token function"},"redirect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/moved-permanently'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"301"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("p",null,[a("If "),n("code",{class:"doc-token"},"redirect(false)"),a(" is called (supported only on client-side!), it aborts the current route navigation. Note that if you use it like this in "),n("code",{class:"doc-token"},"src/App.vue"),a(" it will halt the app bootup, which is undesirable.")]),n("p",null,[a("The "),n("code",{class:"doc-token"},"redirect()"),a(" method requires a Vue Router location Object.")]),n("h3",{id:"using-prefetch-to-initialize-pinia-or-vuex-store-s-",class:"doc-heading doc-h3",onClick:k=>l($)("using-prefetch-to-initialize-pinia-or-vuex-store-s-")},"Using preFetch to Initialize Pinia or Vuex Store(s)",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"preFetch"),a(" hook runs only once, when the app boots up, so you can use this opportunity to initialize the Pinia store(s) or the Vuex Store here.")]),n(l(m),{tabs:["Pinia on Non SSR","Pinia on SSR"]},{default:c(()=>[n(y,{class:"q-pa-none",name:"Pinia on Non SSR"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue - handling Pinia stores"),a(`
`),n("span",{class:"token comment"},'// example with a store named "myStore"'),a(`
`),n("span",{class:"token comment"},"// placed in /src/stores/myStore.js|ts"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMyStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'stores/myStore'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myStore "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useMyStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// do something with myStore"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n(y,{class:"q-pa-none",name:"Pinia on SSR"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue - handling Pinia stores"),a(`
`),n("span",{class:"token comment"},'// example with a store named "myStore"'),a(`
`),n("span",{class:"token comment"},"// placed in /src/stores/myStore.js|ts"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMyStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'stores/myStore'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myStore "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useMyStore"),n("span",{class:"token punctuation"},"("),a("store"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// do something with myStore"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1})]),_:1}),n(l(m),{title:"Handling Vuex store"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// App.vue"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// initialize something in store here"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"vuex-store-code-splitting",class:"doc-heading doc-h3",onClick:k=>l($)("vuex-store-code-splitting")},"Vuex Store Code Splitting",8,["onClick"]),n("p",null,"In a large application, your Vuex store will likely be split into multiple modules. Of course, it is also possible to code-split these modules into corresponding route component chunks. Suppose we have the following store module:"),n(l(m),{title:"src/store/foo.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we've merged everything into one file here;"),a(`
`),n("span",{class:"token comment"},"// an initialized Quasar project splits every component of a Vuex module"),a(`
`),n("span",{class:"token comment"},"// into separate files, but for the sake of the example"),a(`
`),n("span",{class:"token comment"},"// here in the docs, we show this module as a single file"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"namespaced"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// IMPORTANT: state must be a function so the module can be"),a(`
  `),n("span",{class:"token comment"},"// instantiated multiple times"),a(`
  `),n("span",{class:"token function-variable function"},"state"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"count"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"actions"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"inc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" commit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'inc'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"mutations"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function-variable function"},"inc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token parameter"},"state"),a(),n("span",{class:"token operator"},"=>"),a(" state"),n("span",{class:"token punctuation"},"."),a("count"),n("span",{class:"token operator"},"++"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("Now, we can use "),n("code",{class:"doc-token"},"store.registerModule()"),a(" to lazy-register this module in a route component’s "),n("code",{class:"doc-token"},"preFetch()"),a(" hook:")]),n(l(m),{title:"Inside a route component"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("{{ fooCount }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useStore "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuex'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" onUnmounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token comment"},"// import the module here instead of in `src/store/index.js`"),a(`
`),n("span",{class:"token keyword"},"import"),a(" fooStoreModule "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'store/foo'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),a(" fooStoreModule"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo/inc'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $store "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// Preserve the previous state if it was injected from the server"),a(`
      $store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),a(" fooStoreModule"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"preserveState"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onUnmounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// IMPORTANT: avoid duplicate module registration on the client"),a(`
      `),n("span",{class:"token comment"},"// when the route is visited multiple times."),a(`
      $store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unregisterModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" fooCount "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" $store"),n("span",{class:"token punctuation"},"."),a("state"),n("span",{class:"token punctuation"},"."),a("foo"),n("span",{class:"token punctuation"},"."),a(`count
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      fooCount
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]),_:1}),n("p",null,"Also note that because the module is now a dependency of the route component, it will be moved into the route component’s async chunk by Webpack."),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Don’t forget to use the "),n("code",{class:"doc-token"},"preserveState: true"),a(" option for "),n("code",{class:"doc-token"},"registerModule"),a(" so we keep the state injected by the server.")])]),n("h3",{id:"usage-with-vuex-and-typescript",class:"doc-heading doc-h3",onClick:k=>l($)("usage-with-vuex-and-typescript")},"Usage with Vuex and TypeScript",8,["onClick"]),n("p",null,[a("You can use "),n("code",{class:"doc-token"},"preFetch"),a(" helper to type-hint the store parameter (which will otherwise have an "),n("code",{class:"doc-token"},"any"),a(" type):")]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" preFetch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Store "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuex'"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"StateInterface"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"preFetch"),n("span",{class:"token operator"},":"),a(" preFetch"),n("span",{class:"token operator"},"<"),a("StateInterface"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" store "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Do something with your newly-typed store parameter"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("This is useful only to type "),n("code",{class:"doc-token"},"store"),a(" parameter, other parameters are automatically typed even when using the normal syntax.")])]),n("h2",{id:"loading-state",class:"doc-heading doc-h2",onClick:k=>l($)("loading-state")},"Loading State",8,["onClick"]),n("p",null,"A good UX includes notifying the user that something is being worked on in the background while he/she waits for the page to be ready. Quasar CLI offers two options for this out of the box."),n("h3",{id:"loadingbar",class:"doc-heading doc-h3",onClick:k=>l($)("loadingbar")},"LoadingBar",8,["onClick"]),n("p",null,[a("When you add Quasar "),n(f,{to:"/quasar-plugins/loading-bar"},{default:c(()=>[a("LoadingBar")]),_:1}),a(" plugin to your app, Quasar CLI will use it while it runs the preFetch hooks by default.")]),n("h3",{id:"loading",class:"doc-heading doc-h3",onClick:k=>l($)("loading")},"Loading",8,["onClick"]),n("p",null,[a("There’s also the possibility to use Quasar "),n(f,{to:"/quasar-plugins/loading"},{default:c(()=>[a("Loading")]),_:1}),a(" plugin. Here’s an example:")]),n(l(m),{title:"A route .vue component"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Loading "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token function"},"preFetch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* ... */"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// do something async here"),a(`
      `),n("span",{class:"token comment"},'// then call "resolve()"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1})]}),_:1},R))}}},F=S.setup;S.setup=(b,w)=>{const g=j();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-cli-webpack/prefetch-feature.md"),F?F(b,w):void 0};const Z=q(S,[["__file","prefetch-feature.md"]]);export{Z as default};
