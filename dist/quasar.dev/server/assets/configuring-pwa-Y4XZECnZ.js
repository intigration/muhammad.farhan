import{mergeProps as P,withCtx as p,createTextVNode as a,unref as k,createVNode as n,useSSRContext as S}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as y}from"./page-utils-C-QWsEHe.js";import{D as M,a as c}from"./DocPage-DKr-0pQn.js";import{D as d}from"./DocTree-Kz2iQlb5.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as g}from"./CopyButton-l3ndfN49.js";import{_ as A}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"configuring-pwa",__ssrInlineRender:!0,setup(w){const $=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],f=[{id:"service-worker",title:"2. Service Worker"},{id:"quasar-config-file",title:"3. quasar.config file"},{id:"picking-workbox-mode",title:"4. Picking Workbox mode"},{id:"generatesw",title:"4.1. GenerateSW",sub:!0},{id:"injectmanifest",title:"4.2. InjectManifest",sub:!0},{id:"configuring-manifest-file",title:"5. Configuring Manifest File"},{id:"pwa-checklist",title:"6. PWA Checklist"},{id:"reload-and-update-automatically",title:"7. Reload & Update Automatically"}],b={tree:{l:"src-pwa",c:[{l:"register-service-worker.js",e:"(or .ts) App-code *managing* service worker"},{l:"custom-service-worker.js",e:"(or .ts) Optional custom service worker file (InjectManifest mode ONLY)"}]}};return(T,v,W,j)=>{v(l(M,P({title:"Configuring PWA",desc:"(@quasar/app-webpack) How to manage your Progressive Web Apps with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-pwa/configuring-pwa",toc:f,related:$},j),{default:p((C,o,u,t)=>{if(o)o(`<h2 id="service-worker" class="doc-heading doc-h2"${t}>Service Worker</h2><p${t}>Adding PWA mode to a Quasar project means a new folder will be created: <code class="doc-token"${t}>/src-pwa</code>, which contains PWA specific files:</p>`),o(l(d,{def:b.tree},null,u,t)),o(`<p${t}>You can freely edit these files. Notice a few things:</p><ol${t}><li${t}><code class="doc-token"${t}>register-service-worker.[js|ts]</code> is automatically imported into your app (like any other /src file). It registers the service worker (created by Workbox or your custom one, depending on workbox plugin mode – quasar.config file &gt; pwa &gt; workboxPluginMode) and you can listen for Service Worker’s events. You can use ES6 code.</li><li${t}><code class="doc-token"${t}>custom-service-worker.[js|ts]</code> will be your service worker file ONLY if workbox plugin mode is set to “InjectManifest” (quasar.config file &gt; pwa &gt; workboxPluginMode: ‘InjectManifest’). Otherwise, Workbox will create a service-worker file for you.</li><li${t}>It makes sense to run `),o(l(c,{to:"https://developers.google.com/web/tools/lighthouse/"},{default:p((r,e,i,s)=>{if(e)e("Lighthouse");else return[a("Lighthouse")]}),_:1},u,t)),o(` tests on production builds only.</li></ol><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Read more on <code class="doc-token"${t}>register-service-worker.[js|ts]</code> and how to interact with the Service Worker on `),o(l(c,{to:"/quasar-cli-webpack/developing-pwa/handling-service-worker"},{default:p((r,e,i,s)=>{if(e)e("Handling Service Worker");else return[a("Handling Service Worker")]}),_:1},u,t)),o(` documentation page.</p></div><h2 id="quasar-config-file" class="doc-heading doc-h2"${t}>quasar.config file</h2><p${t}>This is the place where you can configure Workbox behavior and also tweak your manifest.json.</p>`),o(l(k(m),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>pwa</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// workboxPluginMode: &#39;InjectManifest&#39;,</span>
  <span class="token comment"${s}>// workboxOptions: {},</span>
  <span class="token literal-property property"${s}>manifest</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// Use this OR metaVariablesFn, but not both;</span>
  <span class="token comment"${s}>// variables used to inject specific PWA</span>
  <span class="token comment"${s}>// meta tags (below are default values);</span>
  <span class="token literal-property property"${s}>metaVariables</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>appleMobileWebAppCapable</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;yes&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>appleMobileWebAppStatusBarStyle</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;default&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>appleTouchIcon120</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/apple-icon-120x120.png&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>appleTouchIcon180</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/apple-icon-180x180.png&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>appleTouchIcon152</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/apple-icon-152x152.png&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>appleTouchIcon167</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/apple-icon-167x167.png&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>appleSafariPinnedTab</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/safari-pinned-tab.svg&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>msapplicationTileImage</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/ms-icon-144x144.png&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>msapplicationTileColor</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;#000000&#39;</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// Optional, overrides metaVariables above;</span>
  <span class="token comment"${s}>// Use this OR metaVariables, but not both;</span>
  <span class="token function"${s}>metaVariablesFn</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>manifest</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>
    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>[</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// this entry will generate:</span>
        <span class="token comment"${s}>// &lt;meta name=&quot;theme-color&quot; content=&quot;ff0&quot;&gt;</span>

        <span class="token literal-property property"${s}>tagName</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;meta&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token literal-property property"${s}>attributes</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
          <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;theme-color&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>content</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;#ff0&#39;</span>
        <span class="token punctuation"${s}>}</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

      <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// this entry will generate:</span>
        <span class="token comment"${s}>// &lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180x180&quot; href=&quot;icons/icon-180.png&quot;&gt;</span>
        <span class="token comment"${s}>// references /public/icons/icon-180.png</span>

        <span class="token literal-property property"${s}>tagName</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;link&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token literal-property property"${s}>attributes</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
          <span class="token literal-property property"${s}>rel</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;apple-touch-icon&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>sizes</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;180x180&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>href</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/icon-180.png&#39;</span>
        <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
        <span class="token literal-property property"${s}>closeTag</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token comment"${s}>// this is optional;</span>
                        <span class="token comment"${s}>// specifies if tag also needs an explicit closing tag;</span>
                        <span class="token comment"${s}>// it&#39;s Boolean false by default</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>]</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// optional; webpack config Object for</span>
  <span class="token comment"${s}>// the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])</span>
  <span class="token comment"${s}>// if using workbox in InjectManifest mode</span>
  <span class="token function"${s}>extendWebpackCustomSW</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// directly change props of cfg;</span>
    <span class="token comment"${s}>// no need to return anything</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// optional; EQUIVALENT to extendWebpackCustomSW() but uses webpack-chain;</span>
  <span class="token comment"${s}>// for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])</span>
  <span class="token comment"${s}>// if using workbox in InjectManifest mode</span>
  <span class="token function"${s}>chainWebpackCustomSW</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// chain is a webpack-chain instance</span>
    <span class="token comment"${s}>// of the Webpack configuration</span>

    <span class="token comment"${s}>// example:</span>
    <span class="token comment"${s}>// chain.plugin(&#39;eslint-webpack-plugin&#39;)</span>
    <span class="token comment"${s}>//   .use(ESLintPlugin, [{ extensions: [ &#39;js&#39; ] }])</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(g,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// workboxPluginMode: 'InjectManifest',"),a(`
  `),n("span",{class:"token comment"},"// workboxOptions: {},"),a(`
  `),n("span",{class:"token literal-property property"},"manifest"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// Use this OR metaVariablesFn, but not both;"),a(`
  `),n("span",{class:"token comment"},"// variables used to inject specific PWA"),a(`
  `),n("span",{class:"token comment"},"// meta tags (below are default values);"),a(`
  `),n("span",{class:"token literal-property property"},"metaVariables"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"appleMobileWebAppCapable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yes'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleMobileWebAppStatusBarStyle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon120"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-120x120.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon180"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-180x180.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon152"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-152x152.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon167"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-167x167.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleSafariPinnedTab"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/safari-pinned-tab.svg'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"msapplicationTileImage"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/ms-icon-144x144.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"msapplicationTileColor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#000000'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// Optional, overrides metaVariables above;"),a(`
  `),n("span",{class:"token comment"},"// Use this OR metaVariables, but not both;"),a(`
  `),n("span",{class:"token function"},"metaVariablesFn"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"manifest"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// this entry will generate:"),a(`
        `),n("span",{class:"token comment"},'// <meta name="theme-color" content="ff0">'),a(`

        `),n("span",{class:"token literal-property property"},"tagName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'meta'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'theme-color'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#ff0'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// this entry will generate:"),a(`
        `),n("span",{class:"token comment"},'// <link rel="apple-touch-icon" sizes="180x180" href="icons/icon-180.png">'),a(`
        `),n("span",{class:"token comment"},"// references /public/icons/icon-180.png"),a(`

        `),n("span",{class:"token literal-property property"},"tagName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'link'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"rel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple-touch-icon'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"sizes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'180x180'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-180.png'"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"closeTag"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token comment"},"// this is optional;"),a(`
                        `),n("span",{class:"token comment"},"// specifies if tag also needs an explicit closing tag;"),a(`
                        `),n("span",{class:"token comment"},"// it's Boolean false by default"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
  `),n("span",{class:"token comment"},"// the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])"),a(`
  `),n("span",{class:"token comment"},"// if using workbox in InjectManifest mode"),a(`
  `),n("span",{class:"token function"},"extendWebpackCustomSW"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackCustomSW() but uses webpack-chain;"),a(`
  `),n("span",{class:"token comment"},"// for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])"),a(`
  `),n("span",{class:"token comment"},"// if using workbox in InjectManifest mode"),a(`
  `),n("span",{class:"token function"},"chainWebpackCustomSW"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`

    `),n("span",{class:"token comment"},"// example:"),a(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),a(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]}),_:1},u,t)),o(`<p${t}>More information: `),o(l(c,{to:"https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/"},{default:p((r,e,i,s)=>{if(e)e("Workbox Webpack Plugin");else return[a("Workbox Webpack Plugin")]}),_:1},u,t)),o(", "),o(l(c,{to:"https://developer.chrome.com/docs/workbox/"},{default:p((r,e,i,s)=>{if(e)e("Workbox");else return[a("Workbox")]}),_:1},u,t)),o(`.</p><p${t}>The <code class="doc-token"${t}>metaVariables</code> Object is used by Quasar itself only (has no meaning for Workbox) to inject specific value attributes to some PWA meta tags into the rendered HTML page. Example: <code class="doc-token"${t}>&lt;meta name=&quot;apple-mobile-web-app-status-bar-style&quot;&gt;</code> will have value attribute assigned to the content of <code class="doc-token"${t}>metaVariables.appleMobileWebAppStatusBarStyle</code>.</p><p${t}>You can use an alternative to metaVariables: <code class="doc-token"${t}>metaVariablesFn(manifest)</code> which can return an Array of Objects (see their form in the code above). Should you configure this function to not return an Array or to return an empty Array, then Quasar App CLI will understand not to add any tags – so you can manually add your custom tags directly in /index.html or /src/index.template.html.</p><h2 id="picking-workbox-mode" class="doc-heading doc-h2"${t}>Picking Workbox mode</h2><p${t}>There are two Workbox operating modes: <strong${t}>GenerateSW</strong> (default) and <strong${t}>InjectManifest</strong>. The first one generates a service worker automatically, based on quasar.config file &gt; pwa &gt; workboxOptions (if any), while the second mode allows you to write your own service worker file.</p><p${t}>Setting the mode that you want to use is done through the <code class="doc-token"${t}>/quasar.config</code> file:</p>`),o(l(k(m),{title:"/quasar.config file"},{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>pwa</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// workboxPluginMode: &#39;InjectManifest&#39;,</span>
  <span class="token comment"${s}>// workboxOptions: { ... }</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(g,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// workboxPluginMode: 'InjectManifest',"),a(`
  `),n("span",{class:"token comment"},"// workboxOptions: { ... }"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]}),_:1},u,t)),o(`<div class="doc-note doc-note--danger"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Make sure that your <code class="doc-token"${t}>workboxOptions</code> match the Workbox mode that you have picked, otherwise the workbox webpack plugin might `),o(l(c,{to:"https://github.com/quasarframework/quasar/issues/4998"},{default:p((r,e,i,s)=>{if(e)e("halt your app from compiling");else return[a("halt your app from compiling")]}),_:1},u,t)),o(`.</p></div><h3 id="generatesw" class="doc-heading doc-h3"${t}>GenerateSW</h3><p${t}>When to use GenerateSW:</p><ul${t}><li${t}>You want to precache files.</li><li${t}>You have simple runtime configuration needs (e.g. the configuration allows you to define routes and strategies).</li></ul><p${t}>When NOT to use GenerateSW:</p><ul${t}><li${t}>You want to use other Service Worker features (i.e. Web Push).</li><li${t}>You want to import additional scripts or add additional logic.</li></ul><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Please check the available workboxOptions for this mode on `),o(l(c,{to:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config"},{default:p((r,e,i,s)=>{if(e)e("Workbox website");else return[a("Workbox website")]}),_:1},u,t)),o(`.</p></div><h3 id="injectmanifest" class="doc-heading doc-h3"${t}>InjectManifest</h3><p${t}>When to use InjectManifest:</p><ul${t}><li${t}>You want more control over your service worker.</li><li${t}>You want to precache files.</li><li${t}>You have more complex needs in terms of routing.</li><li${t}>You would like to use your service worker with other APIs (e.g. Web Push).</li></ul><p${t}>When NOT to use InjectManifest:</p><ul${t}><li${t}>You want the easiest path to adding a service worker to your site.</li></ul><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIPS</p><ul${t}><li${t}>If you want to use this mode, you will have to write the service worker (<code class="doc-token"${t}>/src-pwa/custom-service-worker.[js|ts]</code>) file by yourself.</li><li${t}>Please check the available workboxOptions for this mode on `),o(l(c,{to:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config"},{default:p((r,e,i,s)=>{if(e)e("Workbox website");else return[a("Workbox website")]}),_:1},u,t)),o(`.</li></ul></div><p${t}>The following snippet is the default code for a custom service worker (<code class="doc-token"${t}>/src-pwa/custom-service-worker.[js|ts]</code>):</p>`),o(l(k(m),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> precacheAndRoute <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;workbox-precaching&#39;</span>

<span class="token comment"${s}>// Use with precache injection</span>
<span class="token function"${s}>precacheAndRoute</span><span class="token punctuation"${s}>(</span>self<span class="token punctuation"${s}>.</span>__WB_MANIFEST<span class="token punctuation"${s}>)</span></code></pre>`),e(l(g,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" precacheAndRoute "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'workbox-precaching'"),a(`

`),n("span",{class:"token comment"},"// Use with precache injection"),a(`
`),n("span",{class:"token function"},"precacheAndRoute"),n("span",{class:"token punctuation"},"("),a("self"),n("span",{class:"token punctuation"},"."),a("__WB_MANIFEST"),n("span",{class:"token punctuation"},")")])]),n(g)]}),_:1},u,t)),o(`<h2 id="configuring-manifest-file" class="doc-heading doc-h2"${t}>Configuring Manifest File</h2><p${t}>The Manifest file is generated by Quasar CLI with a default configuration for it. You can however tweak this configuration from the <code class="doc-token"${t}>/quasar.config</code> file:</p>`),o(l(k(m),{title:"/quasar.config file"},{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>pwa</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// workboxPluginMode: &#39;InjectManifest&#39;,</span>
  <span class="token comment"${s}>// workboxOptions: {},</span>
  <span class="token literal-property property"${s}>manifest</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Quasar Play&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>short_name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Quasar-Play&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>description</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Quasar Framework Showcase&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>icons</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token string-property property"${s}>&#39;src&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/icon-128x128.png&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;sizes&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;128x128&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;type&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;image/png&#39;</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token string-property property"${s}>&#39;src&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/icon-192x192.png&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;sizes&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;192x192&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;type&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;image/png&#39;</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token string-property property"${s}>&#39;src&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/icon-256x256.png&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;sizes&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;256x256&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;type&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;image/png&#39;</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token string-property property"${s}>&#39;src&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/icon-384x384.png&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;sizes&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;384x384&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;type&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;image/png&#39;</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token string-property property"${s}>&#39;src&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;icons/icon-512x512.png&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;sizes&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;512x512&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token string-property property"${s}>&#39;type&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;image/png&#39;</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>display</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;standalone&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>orientation</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;portrait&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>background_color</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;#ffffff&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>theme_color</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;#027be3&#39;</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(g,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// workboxPluginMode: 'InjectManifest',"),a(`
  `),n("span",{class:"token comment"},"// workboxOptions: {},"),a(`
  `),n("span",{class:"token literal-property property"},"manifest"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Quasar Play'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"short_name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Quasar-Play'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Quasar Framework Showcase'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"icons"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-128x128.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'128x128'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-192x192.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'192x192'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-256x256.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'256x256'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-384x384.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'384x384'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-512x512.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'512x512'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'standalone'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"orientation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'portrait'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"background_color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#ffffff'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"theme_color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#027be3'"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]}),_:1},u,t)),o(`<p${t}>Please read about the `),o(l(c,{to:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},{default:p((r,e,i,s)=>{if(e)e("manifest config");else return[a("manifest config")]}),_:1},u,t)),o(` before diving in.</p><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Note that you don’t need to edit your index.html file (generated from /index.html or /src/index.template.html) to link to the manifest file. Quasar CLI takes care of embedding the right things for you.</p></div><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>If your PWA is behind basic auth or requires an Authorization header, set quasar.config file &gt; pwa &gt; useCredentials to true to include <code class="doc-token"${t}>crossorigin=&quot;use-credentials&quot;</code> on the manifest.json meta tag.</p></div><h2 id="pwa-checklist" class="doc-heading doc-h2"${t}>PWA Checklist</h2><p${t}>More info: `),o(l(c,{to:"https://web.dev/pwa-checklist/"},{default:p((r,e,i,s)=>{if(e)e("PWA Checklist");else return[a("PWA Checklist")]}),_:1},u,t)),o(`</p><div class="doc-note doc-note--danger"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Do not run `),o(l(c,{to:"https://developers.google.com/web/tools/lighthouse/"},{default:p((r,e,i,s)=>{if(e)e("Lighthouse");else return[a("Lighthouse")]}),_:1},u,t)),o(" on your development build because at this stage the code is intentionally not optimized and contains embedded source maps (among many other things). See the "),o(l(c,{to:"/quasar-cli-webpack/testing-and-auditing"},{default:p((r,e,i,s)=>{if(e)e("Testing and Auditing");else return[a("Testing and Auditing")]}),_:1},u,t)),o(` section of these docs for more information.</p></div><h2 id="reload-and-update-automatically" class="doc-heading doc-h2"${t}>Reload &amp; Update Automatically</h2><p${t}>For those who don’t want to manually reload the page when the service worker is updated <strong${t}>and are using the default GenerateSW workbox mode</strong>, you can make it active at once. Update the workboxOptions config in the <code class="doc-token"${t}>/quasar.config</code> file as follows:</p>`),o(l(k(m),{title:"/quasar.config file"},{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>pwa</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>workboxOptions</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>skipWaiting</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>clientsClaim</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(g,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"workboxOptions"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"skipWaiting"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"clientsClaim"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]}),_:1},u,t)),o(`<p${t}>`),o(l(c,{to:"https://developers.google.com/web/tools/workbox/guides/codelabs/webpack"},{default:p((r,e,i,s)=>{if(e)e("Source");else return[a("Source")]}),_:1},u,t)),o("</p>");else return[n("h2",{id:"service-worker",class:"doc-heading doc-h2",onClick:r=>k(y)("service-worker")},"Service Worker",8,["onClick"]),n("p",null,[a("Adding PWA mode to a Quasar project means a new folder will be created: "),n("code",{class:"doc-token"},"/src-pwa"),a(", which contains PWA specific files:")]),n(d,{def:b.tree},null,8,["def"]),n("p",null,"You can freely edit these files. Notice a few things:"),n("ol",null,[n("li",null,[n("code",{class:"doc-token"},"register-service-worker.[js|ts]"),a(" is automatically imported into your app (like any other /src file). It registers the service worker (created by Workbox or your custom one, depending on workbox plugin mode – quasar.config file > pwa > workboxPluginMode) and you can listen for Service Worker’s events. You can use ES6 code.")]),n("li",null,[n("code",{class:"doc-token"},"custom-service-worker.[js|ts]"),a(" will be your service worker file ONLY if workbox plugin mode is set to “InjectManifest” (quasar.config file > pwa > workboxPluginMode: ‘InjectManifest’). Otherwise, Workbox will create a service-worker file for you.")]),n("li",null,[a("It makes sense to run "),n(c,{to:"https://developers.google.com/web/tools/lighthouse/"},{default:p(()=>[a("Lighthouse")]),_:1}),a(" tests on production builds only.")])]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Read more on "),n("code",{class:"doc-token"},"register-service-worker.[js|ts]"),a(" and how to interact with the Service Worker on "),n(c,{to:"/quasar-cli-webpack/developing-pwa/handling-service-worker"},{default:p(()=>[a("Handling Service Worker")]),_:1}),a(" documentation page.")])]),n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:r=>k(y)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,"This is the place where you can configure Workbox behavior and also tweak your manifest.json."),n(k(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// workboxPluginMode: 'InjectManifest',"),a(`
  `),n("span",{class:"token comment"},"// workboxOptions: {},"),a(`
  `),n("span",{class:"token literal-property property"},"manifest"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// Use this OR metaVariablesFn, but not both;"),a(`
  `),n("span",{class:"token comment"},"// variables used to inject specific PWA"),a(`
  `),n("span",{class:"token comment"},"// meta tags (below are default values);"),a(`
  `),n("span",{class:"token literal-property property"},"metaVariables"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"appleMobileWebAppCapable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yes'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleMobileWebAppStatusBarStyle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon120"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-120x120.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon180"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-180x180.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon152"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-152x152.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleTouchIcon167"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/apple-icon-167x167.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"appleSafariPinnedTab"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/safari-pinned-tab.svg'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"msapplicationTileImage"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/ms-icon-144x144.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"msapplicationTileColor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#000000'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// Optional, overrides metaVariables above;"),a(`
  `),n("span",{class:"token comment"},"// Use this OR metaVariables, but not both;"),a(`
  `),n("span",{class:"token function"},"metaVariablesFn"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"manifest"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// this entry will generate:"),a(`
        `),n("span",{class:"token comment"},'// <meta name="theme-color" content="ff0">'),a(`

        `),n("span",{class:"token literal-property property"},"tagName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'meta'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'theme-color'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#ff0'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// this entry will generate:"),a(`
        `),n("span",{class:"token comment"},'// <link rel="apple-touch-icon" sizes="180x180" href="icons/icon-180.png">'),a(`
        `),n("span",{class:"token comment"},"// references /public/icons/icon-180.png"),a(`

        `),n("span",{class:"token literal-property property"},"tagName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'link'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"rel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple-touch-icon'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"sizes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'180x180'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-180.png'"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"closeTag"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token comment"},"// this is optional;"),a(`
                        `),n("span",{class:"token comment"},"// specifies if tag also needs an explicit closing tag;"),a(`
                        `),n("span",{class:"token comment"},"// it's Boolean false by default"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
  `),n("span",{class:"token comment"},"// the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])"),a(`
  `),n("span",{class:"token comment"},"// if using workbox in InjectManifest mode"),a(`
  `),n("span",{class:"token function"},"extendWebpackCustomSW"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackCustomSW() but uses webpack-chain;"),a(`
  `),n("span",{class:"token comment"},"// for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])"),a(`
  `),n("span",{class:"token comment"},"// if using workbox in InjectManifest mode"),a(`
  `),n("span",{class:"token function"},"chainWebpackCustomSW"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`

    `),n("span",{class:"token comment"},"// example:"),a(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),a(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1}),n("p",null,[a("More information: "),n(c,{to:"https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/"},{default:p(()=>[a("Workbox Webpack Plugin")]),_:1}),a(", "),n(c,{to:"https://developer.chrome.com/docs/workbox/"},{default:p(()=>[a("Workbox")]),_:1}),a(".")]),n("p",null,[a("The "),n("code",{class:"doc-token"},"metaVariables"),a(" Object is used by Quasar itself only (has no meaning for Workbox) to inject specific value attributes to some PWA meta tags into the rendered HTML page. Example: "),n("code",{class:"doc-token"},'<meta name="apple-mobile-web-app-status-bar-style">'),a(" will have value attribute assigned to the content of "),n("code",{class:"doc-token"},"metaVariables.appleMobileWebAppStatusBarStyle"),a(".")]),n("p",null,[a("You can use an alternative to metaVariables: "),n("code",{class:"doc-token"},"metaVariablesFn(manifest)"),a(" which can return an Array of Objects (see their form in the code above). Should you configure this function to not return an Array or to return an empty Array, then Quasar App CLI will understand not to add any tags – so you can manually add your custom tags directly in /index.html or /src/index.template.html.")]),n("h2",{id:"picking-workbox-mode",class:"doc-heading doc-h2",onClick:r=>k(y)("picking-workbox-mode")},"Picking Workbox mode",8,["onClick"]),n("p",null,[a("There are two Workbox operating modes: "),n("strong",null,"GenerateSW"),a(" (default) and "),n("strong",null,"InjectManifest"),a(". The first one generates a service worker automatically, based on quasar.config file > pwa > workboxOptions (if any), while the second mode allows you to write your own service worker file.")]),n("p",null,[a("Setting the mode that you want to use is done through the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(k(m),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// workboxPluginMode: 'InjectManifest',"),a(`
  `),n("span",{class:"token comment"},"// workboxOptions: { ... }"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1}),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Make sure that your "),n("code",{class:"doc-token"},"workboxOptions"),a(" match the Workbox mode that you have picked, otherwise the workbox webpack plugin might "),n(c,{to:"https://github.com/quasarframework/quasar/issues/4998"},{default:p(()=>[a("halt your app from compiling")]),_:1}),a(".")])]),n("h3",{id:"generatesw",class:"doc-heading doc-h3",onClick:r=>k(y)("generatesw")},"GenerateSW",8,["onClick"]),n("p",null,"When to use GenerateSW:"),n("ul",null,[n("li",null,"You want to precache files."),n("li",null,"You have simple runtime configuration needs (e.g. the configuration allows you to define routes and strategies).")]),n("p",null,"When NOT to use GenerateSW:"),n("ul",null,[n("li",null,"You want to use other Service Worker features (i.e. Web Push)."),n("li",null,"You want to import additional scripts or add additional logic.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Please check the available workboxOptions for this mode on "),n(c,{to:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config"},{default:p(()=>[a("Workbox website")]),_:1}),a(".")])]),n("h3",{id:"injectmanifest",class:"doc-heading doc-h3",onClick:r=>k(y)("injectmanifest")},"InjectManifest",8,["onClick"]),n("p",null,"When to use InjectManifest:"),n("ul",null,[n("li",null,"You want more control over your service worker."),n("li",null,"You want to precache files."),n("li",null,"You have more complex needs in terms of routing."),n("li",null,"You would like to use your service worker with other APIs (e.g. Web Push).")]),n("p",null,"When NOT to use InjectManifest:"),n("ul",null,[n("li",null,"You want the easiest path to adding a service worker to your site.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIPS"),n("ul",null,[n("li",null,[a("If you want to use this mode, you will have to write the service worker ("),n("code",{class:"doc-token"},"/src-pwa/custom-service-worker.[js|ts]"),a(") file by yourself.")]),n("li",null,[a("Please check the available workboxOptions for this mode on "),n(c,{to:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config"},{default:p(()=>[a("Workbox website")]),_:1}),a(".")])])]),n("p",null,[a("The following snippet is the default code for a custom service worker ("),n("code",{class:"doc-token"},"/src-pwa/custom-service-worker.[js|ts]"),a("):")]),n(k(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" precacheAndRoute "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'workbox-precaching'"),a(`

`),n("span",{class:"token comment"},"// Use with precache injection"),a(`
`),n("span",{class:"token function"},"precacheAndRoute"),n("span",{class:"token punctuation"},"("),a("self"),n("span",{class:"token punctuation"},"."),a("__WB_MANIFEST"),n("span",{class:"token punctuation"},")")])]),n(g)]),_:1}),n("h2",{id:"configuring-manifest-file",class:"doc-heading doc-h2",onClick:r=>k(y)("configuring-manifest-file")},"Configuring Manifest File",8,["onClick"]),n("p",null,[a("The Manifest file is generated by Quasar CLI with a default configuration for it. You can however tweak this configuration from the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(k(m),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// workboxPluginMode: 'InjectManifest',"),a(`
  `),n("span",{class:"token comment"},"// workboxOptions: {},"),a(`
  `),n("span",{class:"token literal-property property"},"manifest"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Quasar Play'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"short_name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Quasar-Play'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Quasar Framework Showcase'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"icons"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-128x128.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'128x128'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-192x192.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'192x192'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-256x256.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'256x256'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-384x384.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'384x384'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token string-property property"},"'src'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'icons/icon-512x512.png'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'sizes'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'512x512'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'type'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'standalone'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"orientation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'portrait'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"background_color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#ffffff'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"theme_color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#027be3'"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1}),n("p",null,[a("Please read about the "),n(c,{to:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},{default:p(()=>[a("manifest config")]),_:1}),a(" before diving in.")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"Note that you don’t need to edit your index.html file (generated from /index.html or /src/index.template.html) to link to the manifest file. Quasar CLI takes care of embedding the right things for you.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("If your PWA is behind basic auth or requires an Authorization header, set quasar.config file > pwa > useCredentials to true to include "),n("code",{class:"doc-token"},'crossorigin="use-credentials"'),a(" on the manifest.json meta tag.")])]),n("h2",{id:"pwa-checklist",class:"doc-heading doc-h2",onClick:r=>k(y)("pwa-checklist")},"PWA Checklist",8,["onClick"]),n("p",null,[a("More info: "),n(c,{to:"https://web.dev/pwa-checklist/"},{default:p(()=>[a("PWA Checklist")]),_:1})]),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Do not run "),n(c,{to:"https://developers.google.com/web/tools/lighthouse/"},{default:p(()=>[a("Lighthouse")]),_:1}),a(" on your development build because at this stage the code is intentionally not optimized and contains embedded source maps (among many other things). See the "),n(c,{to:"/quasar-cli-webpack/testing-and-auditing"},{default:p(()=>[a("Testing and Auditing")]),_:1}),a(" section of these docs for more information.")])]),n("h2",{id:"reload-and-update-automatically",class:"doc-heading doc-h2",onClick:r=>k(y)("reload-and-update-automatically")},"Reload & Update Automatically",8,["onClick"]),n("p",null,[a("For those who don’t want to manually reload the page when the service worker is updated "),n("strong",null,"and are using the default GenerateSW workbox mode"),a(", you can make it active at once. Update the workboxOptions config in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file as follows:")]),n(k(m),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"pwa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"workboxOptions"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"skipWaiting"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"clientsClaim"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1}),n("p",null,[n(c,{to:"https://developers.google.com/web/tools/workbox/guides/codelabs/webpack"},{default:p(()=>[a("Source")]),_:1})])]}),_:1},W))}}},x=h.setup;h.setup=(w,$)=>{const f=S();return(f.modules||(f.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-pwa/configuring-pwa.md"),x?x(w,$):void 0};const H=A(h,[["__file","configuring-pwa.md"]]);export{H as default};
