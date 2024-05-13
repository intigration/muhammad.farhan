import{resolveComponent as C,mergeProps as V,withCtx as o,createTextVNode as a,unref as k,createVNode as n,useSSRContext as F}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as d}from"./page-utils-C-QWsEHe.js";import{D as E,a as u}from"./DocPage-DKr-0pQn.js";import{D as f}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as R}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"quasar-config-file",__ssrInlineRender:!0,setup(x){const v=[{id:"structure",title:"2. Structure"},{id:"the-basics",title:"2.1. The basics",sub:!0},{id:"ide-autocompletion",title:"2.2. IDE autocompletion",sub:!0},{id:"options-to-configure",title:"3. Options to Configure"},{id:"css",title:"3.1. css",sub:!0},{id:"boot",title:"3.2. boot",sub:!0},{id:"prefetch",title:"3.3. preFetch",sub:!0},{id:"eslint",title:"3.4. eslint",sub:!0},{id:"extras",title:"3.5. extras",sub:!0},{id:"framework",title:"3.6. framework",sub:!0},{id:"animations",title:"3.7. animations",sub:!0},{id:"devserver",title:"3.8. devServer",sub:!0},{id:"build",title:"3.9. build",sub:!0},{id:"sourcefiles",title:"3.10. sourceFiles",sub:!0},{id:"htmlvariables",title:"3.11. htmlVariables",sub:!0},{id:"quasar-mode-specific",title:"3.12. Quasar Mode Specific",sub:!0},{id:"examples",title:"4. Examples"},{id:"setting-env-for-dev-build",title:"4.1. Setting env for dev/build",sub:!0},{id:"adding-vite-plugins",title:"4.2. Adding Vite plugins",sub:!0}];return(b,P,O,A)=>{const q=C("q-badge"),S=C("q-markup-table");P(r(E,V({title:"Configuring quasar.config file",desc:"(@quasar/app-vite) Where, how and what you can configure in a Quasar CLI with Vite app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/quasar-config-file",toc:v},A),{default:o((j,p,m,e)=>{if(p)p(`<p${e}>Notice that your scaffolded project folder contains a <code class="doc-token"${e}>/quasar.config</code> file. So what can you configure through it? Basically anything that Quasar CLI does for you.</p><ul${e}><li${e}>Quasar components, directives and plugins that you’ll be using in your website/app</li><li${e}>Default `),p(r(u,{to:"/options/quasar-language-packs"},{default:o((i,t,l,s)=>{if(t)t("Quasar Language Pack");else return[a("Quasar Language Pack")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/options/installing-icon-libraries"},{default:o((i,t,l,s)=>{if(t)t("Icon libraries");else return[a("Icon libraries")]}),_:1},m,e)),p(` that you wish to use</li><li${e}>Default `),p(r(u,{to:"/options/quasar-icon-sets"},{default:o((i,t,l,s)=>{if(t)t("Quasar Icon Set");else return[a("Quasar Icon Set")]}),_:1},m,e)),p(` for Quasar components</li><li${e}>Development server port, HTTPS mode, hostname and so on</li><li${e}>`),p(r(u,{to:"/options/animations"},{default:o((i,t,l,s)=>{if(t)t("CSS animations");else return[a("CSS animations")]}),_:1},m,e)),p(` that you wish to use</li><li${e}>`),p(r(u,{to:"/quasar-cli-vite/boot-files"},{default:o((i,t,l,s)=>{if(t)t("Boot Files");else return[a("Boot Files")]}),_:1},m,e)),p(` list (that determines order of execution too) – which are files in <code class="doc-token"${e}>/src/boot</code> that tell how your app is initialized before mounting the root Vue component</li><li${e}>Global CSS/Sass/… files to be included in the bundle</li><li${e}>SPA, PWA, Electron, Capacitor, Cordova, SSR, BEX (browser extensions) configuration</li><li${e}>Extend the under the hood tools, like the generated Vite config</li><li${e}>…and many many more that you’ll discover along the way</li></ul><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>You’ll notice that changing any of these settings does not require you to manually reload the dev server. Quasar detects and reloads the necessary processes. You won’t lose your development flow, because you can just sit back while Quasar CLI quickly reloads the changed code, even keeping the current state. This saves tons of your time!</p></div><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The <code class="doc-token"${e}>/quasar.config</code> file is run by the Quasar CLI build system, so this code runs under Node directly, not in the context of your app. This means you can require modules like ‘fs’, ‘path’, Vite plugins, and so on. Make sure the ES features that you want to use in this file are `),p(r(u,{to:"https://node.green/"},{default:o((i,t,l,s)=>{if(t)t("supported by your Node version");else return[a("supported by your Node version")]}),_:1},m,e)),p(` (which should be &gt;= 14.19.0).</p></div><h2 id="structure" class="doc-heading doc-h2"${e}>Structure</h2><h3 id="the-basics" class="doc-heading doc-h3"${e}>The basics</h3><p${e}>You’ll notice that the <code class="doc-token"${e}>/quasar.config</code> file exports a function that takes a <code class="doc-token"${e}>ctx</code> (context) parameter and returns an Object. This allows you to dynamically change your website/app config based on this context:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span> <span class="token comment"${s}>// can be async too</span>
  console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>ctx<span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// Example output on console:</span>
  <span class="token comment"${s}>/*
  {
    dev: true,
    prod: false,
    mode: { spa: true },
    modeName: &#39;spa&#39;,
    target: {},
    targetName: undefined,
    arch: {},
    archName: undefined,
    debug: undefined
  }
  */</span>

  <span class="token comment"${s}>// context gets generated based on the parameters</span>
  <span class="token comment"${s}>// with which you run &quot;quasar dev&quot; or &quot;quasar build&quot;</span>

  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ... your config</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// can be async too"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// Example output on console:"),a(`
  `),n("span",{class:"token comment"},`/*
  {
    dev: true,
    prod: false,
    mode: { spa: true },
    modeName: 'spa',
    target: {},
    targetName: undefined,
    arch: {},
    archName: undefined,
    debug: undefined
  }
  */`),a(`

  `),n("span",{class:"token comment"},"// context gets generated based on the parameters"),a(`
  `),n("span",{class:"token comment"},'// with which you run "quasar dev" or "quasar build"'),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ... your config"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>What this means is that, as an example, you can load a font when building for a certain mode (like PWA), and pick another one for the others:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>extras</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>pwa <span class="token comment"${s}>// we&#39;re adding only if working on a PWA</span>
      <span class="token operator"${s}>?</span> <span class="token string"${s}>&#39;roboto-font&#39;</span>
      <span class="token operator"${s}>:</span> <span class="token keyword"${s}>null</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"extras"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    ctx`),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("pwa "),n("span",{class:"token comment"},"// we're adding only if working on a PWA"),a(`
      `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'roboto-font'"),a(`
      `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>Or you can use a global CSS file for SPA mode and another one for Cordova mode while avoiding loading any such file for the other modes.</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>css</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>spa <span class="token operator"${s}>?</span> <span class="token string"${s}>&#39;app-spa.sass&#39;</span> <span class="token operator"${s}>:</span> <span class="token keyword"${s}>null</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// looks for /src/css/app-spa.sass</span>
    ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>cordova <span class="token operator"${s}>?</span> <span class="token string"${s}>&#39;app-cordova.sass&#39;</span> <span class="token operator"${s}>:</span> <span class="token keyword"${s}>null</span>  <span class="token comment"${s}>// looks for /src/css/app-cordova.sass</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"css"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    ctx`),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("spa "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'app-spa.sass'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// looks for /src/css/app-spa.sass"),a(`
    ctx`),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("cordova "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'app-cordova.sass'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),a("  "),n("span",{class:"token comment"},"// looks for /src/css/app-cordova.sass"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>Or you can configure the dev server to run on port 8000 for SPA mode, on port 9000 for PWA mode or on port 9090 for the other modes:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>port</span><span class="token operator"${s}>:</span> ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>spa
      <span class="token operator"${s}>?</span> <span class="token number"${s}>8000</span>
      <span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span>ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>pwa <span class="token operator"${s}>?</span> <span class="token number"${s}>9000</span> <span class="token operator"${s}>:</span> <span class="token number"${s}>9090</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"port"),n("span",{class:"token operator"},":"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a(`spa
      `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"8000"),a(`
      `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("pwa "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"9000"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"9090"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>You can also do async work before returning the quasar configuration:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>async</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> data <span class="token operator"${s}>=</span> <span class="token keyword"${s}>await</span> <span class="token function"${s}>someAsyncFunction</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ... use &quot;data&quot;</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>

<span class="token comment"${s}>// or:</span>
module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token keyword"${s}>new</span> <span class="token class-name"${s}>Promise</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>resolve</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// some async work then:</span>
    <span class="token comment"${s}>// resolve() with the quasar config</span>
    <span class="token function"${s}>resolve</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>//</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"someAsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},'// ... use "data"'),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// or:"),a(`
module`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// some async work then:"),a(`
    `),n("span",{class:"token comment"},"// resolve() with the quasar config"),a(`
    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"//"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>The possibilities are endless.</p><h3 id="ide-autocompletion" class="doc-heading doc-h3"${e}>IDE autocompletion</h3><p${e}>You can wrap the returned function with <code class="doc-token"${e}>configure()</code> helper to get a better IDE autocomplete experience (through TypeScript):</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span> configure <span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;quasar/wrappers&#39;</span><span class="token punctuation"${s}>)</span>

module<span class="token punctuation"${s}>.</span>exports <span class="token operator"${s}>=</span> <span class="token function"${s}>configure</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/* configuration options */</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar/wrappers'"),n("span",{class:"token punctuation"},")"),a(`

module`),n("span",{class:"token punctuation"},"."),a("exports "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"/* configuration options */"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,e)),p(`<h2 id="options-to-configure" class="doc-heading doc-h2"${e}>Options to Configure</h2><h3 id="css" class="doc-heading doc-h3"${e}>css</h3>`),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * Global CSS/Stylus/SCSS/SASS/... files from \`/src/css/\`,
 * except for theme files, which are included by default.
 */</span>
css<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Global CSS/Stylus/SCSS/SASS/... files from \`/src/css/\`,
 * except for theme files, which are included by default.
 */`),a(`
css`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<p${e}>Example:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>css</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token string"${s}>&#39;app.sass&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// referring to /src/css/app.sass</span>
    <span class="token string"${s}>&#39;~some-library/style.css&#39;</span> <span class="token comment"${s}>// referring to node_modules/some-library/style.css</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"css"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token string"},"'app.sass'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// referring to /src/css/app.sass"),a(`
    `),n("span",{class:"token string"},"'~some-library/style.css'"),a(),n("span",{class:"token comment"},"// referring to node_modules/some-library/style.css"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<h3 id="boot" class="doc-heading doc-h3"${e}>boot</h3><p${e}>More on `),p(r(u,{to:"/quasar-cli-vite/boot-files"},{default:o((i,t,l,s)=>{if(t)t("Boot Files");else return[a("Boot Files")]}),_:1},m,e)),p(".</p>"),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/** Boot files to load. Order is important. */</span>
boot<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarBootConfiguration<span class="token punctuation"${s}>;</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>BootConfigurationItem</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  server<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>;</span>
  client<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span>

type QuasarBootConfiguration <span class="token operator"${s}>=</span> <span class="token punctuation"${s}>(</span>string <span class="token operator"${s}>|</span> BootConfigurationItem<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Boot files to load. Order is important. */"),a(`
boot`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarBootConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"BootConfigurationItem"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  server`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
  client`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

type QuasarBootConfiguration `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("string "),n("span",{class:"token operator"},"|"),a(" BootConfigurationItem"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<h3 id="prefetch" class="doc-heading doc-h3"${e}>preFetch</h3><p${e}>More on the `),p(r(u,{to:"/quasar-cli-vite/prefetch-feature"},{default:o((i,t,l,s)=>{if(t)t("PreFetch Feature");else return[a("PreFetch Feature")]}),_:1},m,e)),p(" page.</p>"),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/** Enable the preFetch feature. */</span>
preFetch<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Enable the preFetch feature. */"),a(`
preFetch`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<h3 id="eslint" class="doc-heading doc-h3"${e}>eslint `),p(r(q,{label:"deprecated"},null,m,e)),p(`</h3><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>This property has been deprecated in favour of using vite-plugin-checker.</p></div><p${e}>More on the `),p(r(u,{to:"/quasar-cli-vite/linter"},{default:o((i,t,l,s)=>{if(t)t("Linter");else return[a("Linter")]}),_:1},m,e)),p(` page.</p><h3 id="extras" class="doc-heading doc-h3"${e}>extras</h3>`),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * What to import from [@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras) package.
 * @example [&#39;material-icons&#39;, &#39;roboto-font&#39;, &#39;ionicons-v4&#39;]
 */</span>
extras<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span>QuasarIconSets <span class="token operator"${s}>|</span> QuasarFonts<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What to import from [@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras) package.
 * @example ['material-icons', 'roboto-font', 'ionicons-v4']
 */`),a(`
extras`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("QuasarIconSets "),n("span",{class:"token operator"},"|"),a(" QuasarFonts"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<h3 id="framework" class="doc-heading doc-h3"${e}>framework</h3>`),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * What Quasar language pack to use, what Quasar icon
 * set to use for Quasar components, etc.
 */</span>
framework<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarFrameworkConfiguration<span class="token punctuation"${s}>;</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>QuasarFrameworkConfiguration</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * @see - QuasarConfOptions tab in API cards throughout the docs
   */</span>
  config<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> SerializableConfiguration<span class="token operator"${s}>&lt;</span>QuasarUIConfiguration<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * One of the Quasar IconSets
   *
   * @see https://v2.quasar.dev/options/quasar-icon-sets
   *
   * @example &#39;material-icons&#39;
   */</span>
  iconSet<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarIconSets<span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * One of the Quasar language packs
   *
   * @see https://v2.quasar.dev/options/quasar-language-packs
   *
   * @example &#39;en-US&#39;
   * @example &#39;es&#39;
   */</span>
  lang<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarLanguageCodes<span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Quasar CSS addons have breakpoint aware versions of flex and spacing classes
   *
   * @see https://quasar.dev/layout/grid/introduction-to-flexbox#flex-addons
   * @see https://quasar.dev/style/spacing#flex-addons
   */</span>
  cssAddon<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Auto import - how to detect components in your vue files
   *   &quot;kebab&quot;: q-carousel q-page
   *   &quot;pascal&quot;: QCarousel QPage
   *   &quot;combined&quot;: q-carousel QPage
   *
   * @default &#39;kebab&#39;
   */</span>
  autoImportComponentCase<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;kebab&quot;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&quot;pascal&quot;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&quot;combined&quot;</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Auto import - which file extensions should be interpreted as referring to Vue SFC?
   *
   * @default [&#39;vue&#39;]
   */</span>
  autoImportVueExtensions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Auto import - which file extensions should be interpreted as referring to script files?
   *
   * @default [&#39;js&#39;, &#39;jsx&#39;, &#39;ts&#39;, &#39;tsx&#39;]
   */</span>
  autoImportScriptExtensions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Treeshake Quasar&#39;s UI on dev too?
   * Recommended to leave this as false for performance reasons.
   *
   * @default false
   */</span>
  devTreeshaking<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Quasar will auto import components based on your usage.
   * But, in case you have a special case, you can manually specify Quasar components to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar components (e.g. q-avatar).
   *
   * Another example would be that dynamically rendering components depending on an API response or similar (e.g. in a CMS),
   * something like \`&lt;component :is=&quot;dynamicName&quot;&gt;\` where \`dynamicName\` is a string that matches a Quasar component name.
   *
   * @example [&#39;QAvatar&#39;, &#39;QChip&#39;]
   */</span>
  components<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span>keyof QuasarComponents<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Quasar will auto import directives based on your usage.
   * But, in case you have a special case, you can manually specify Quasar directives to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar directives (e.g. v-intersection).
   *
   * @example [&#39;Intersection&#39;, &#39;Mutation&#39;]
   */</span>
  directives<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span>keyof QuasarDirectives<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Quasar plugins to be installed. Specify the ones you are using in your app.
   *
   * @example [&#39;Notify&#39;, &#39;Loading&#39;, &#39;Meta&#39;, &#39;AppFullscreen&#39;]
   */</span>
  plugins<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span>keyof QuasarPlugins<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What Quasar language pack to use, what Quasar icon
 * set to use for Quasar components, etc.
 */`),a(`
framework`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarFrameworkConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarFrameworkConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * @see - QuasarConfOptions tab in API cards throughout the docs
   */`),a(`
  config`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" SerializableConfiguration"),n("span",{class:"token operator"},"<"),a("QuasarUIConfiguration"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * One of the Quasar IconSets
   *
   * @see https://v2.quasar.dev/options/quasar-icon-sets
   *
   * @example 'material-icons'
   */`),a(`
  iconSet`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarIconSets"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * One of the Quasar language packs
   *
   * @see https://v2.quasar.dev/options/quasar-language-packs
   *
   * @example 'en-US'
   * @example 'es'
   */`),a(`
  lang`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarLanguageCodes"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Quasar CSS addons have breakpoint aware versions of flex and spacing classes
   *
   * @see https://quasar.dev/layout/grid/introduction-to-flexbox#flex-addons
   * @see https://quasar.dev/style/spacing#flex-addons
   */`),a(`
  cssAddon`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Auto import - how to detect components in your vue files
   *   "kebab": q-carousel q-page
   *   "pascal": QCarousel QPage
   *   "combined": q-carousel QPage
   *
   * @default 'kebab'
   */`),a(`
  autoImportComponentCase`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"kebab"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"pascal"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"combined"'),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Auto import - which file extensions should be interpreted as referring to Vue SFC?
   *
   * @default ['vue']
   */`),a(`
  autoImportVueExtensions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Auto import - which file extensions should be interpreted as referring to script files?
   *
   * @default ['js', 'jsx', 'ts', 'tsx']
   */`),a(`
  autoImportScriptExtensions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Treeshake Quasar's UI on dev too?
   * Recommended to leave this as false for performance reasons.
   *
   * @default false
   */`),a(`
  devTreeshaking`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Quasar will auto import components based on your usage.
   * But, in case you have a special case, you can manually specify Quasar components to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar components (e.g. q-avatar).
   *
   * Another example would be that dynamically rendering components depending on an API response or similar (e.g. in a CMS),
   * something like \`<component :is="dynamicName">\` where \`dynamicName\` is a string that matches a Quasar component name.
   *
   * @example ['QAvatar', 'QChip']
   */`),a(`
  components`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("keyof QuasarComponents"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Quasar will auto import directives based on your usage.
   * But, in case you have a special case, you can manually specify Quasar directives to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar directives (e.g. v-intersection).
   *
   * @example ['Intersection', 'Mutation']
   */`),a(`
  directives`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("keyof QuasarDirectives"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Quasar plugins to be installed. Specify the ones you are using in your app.
   *
   * @example ['Notify', 'Loading', 'Meta', 'AppFullscreen']
   */`),a(`
  plugins`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("keyof QuasarPlugins"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>See these references for more info:</p><ul${e}><li${e}>`),p(r(u,{to:"/options/quasar-language-packs"},{default:o((i,t,l,s)=>{if(t)t("Quasar Language Packs");else return[a("Quasar Language Packs")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/options/quasar-icon-sets"},{default:o((i,t,l,s)=>{if(t)t("Quasar Icon Sets");else return[a("Quasar Icon Sets")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/layout/grid/introduction-to-flexbox#flex-addons"},{default:o((i,t,l,s)=>{if(t)t("Quasar CSS Addons - Flex");else return[a("Quasar CSS Addons - Flex")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/style/spacing#flex-addons"},{default:o((i,t,l,s)=>{if(t)t("Quasar CSS Addons - Spacing");else return[a("Quasar CSS Addons - Spacing")]}),_:1},m,e)),p(`</li></ul><h3 id="animations" class="doc-heading doc-h3"${e}>animations</h3><p${e}>More on `),p(r(u,{to:"/options/animations"},{default:o((i,t,l,s)=>{if(t)t("CSS animations");else return[a("CSS animations")]}),_:1},m,e)),p(".</p>"),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * What Quasar CSS animations](/options/animations) to import.
 * @example [ &#39;bounceInLeft&#39;, &#39;bounceOutRight&#39; ]
 * */</span>
animations<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarAnimationsConfiguration <span class="token operator"${s}>|</span> <span class="token string"${s}>&#39;all&#39;</span><span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What Quasar CSS animations](/options/animations) to import.
 * @example [ 'bounceInLeft', 'bounceOutRight' ]
 * */`),a(`
animations`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarAnimationsConfiguration "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<h3 id="devserver" class="doc-heading doc-h3"${e}>devServer</h3><p${e}>More info: `),p(r(u,{to:"https://vitejs.dev/config/#server-options"},{default:o((i,t,l,s)=>{if(t)t("Vite server options");else return[a("Vite server options")]}),_:1},m,e)),p("</p>"),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ServerOptions <span class="token keyword"${s}>as</span> ViteServerOptions <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&quot;vite&quot;</span><span class="token punctuation"${s}>;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Options <span class="token keyword"${s}>as</span> OpenOptions <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&quot;open&quot;</span><span class="token punctuation"${s}>;</span>
type DevServerOptions <span class="token operator"${s}>=</span> Omit<span class="token operator"${s}>&lt;</span>ViteServerOptions<span class="token punctuation"${s}>,</span> <span class="token string"${s}>&quot;open&quot;</span><span class="token operator"${s}>&gt;</span> <span class="token operator"${s}>&amp;</span> <span class="token punctuation"${s}>{</span>
  open<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> Omit<span class="token operator"${s}>&lt;</span>OpenOptions<span class="token punctuation"${s}>,</span> <span class="token string"${s}>&quot;wait&quot;</span><span class="token operator"${s}>&gt;</span> <span class="token operator"${s}>|</span> boolean<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>;</span>

<span class="token comment"${s}>/**
 * Vite &quot;server&quot; options.
 * Some properties are overwritten based on the Quasar mode you&#39;re using in order
 * to ensure a correct config.
 * Note: if you&#39;re proxying the development server (i.e. using a cloud IDE),
 * set the \`public\` setting to your public application URL.
 */</span>
devServer<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> DevServerOptions<span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ServerOptions "),n("span",{class:"token keyword"},"as"),a(" ViteServerOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Options "),n("span",{class:"token keyword"},"as"),a(" OpenOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"open"'),n("span",{class:"token punctuation"},";"),a(`
type DevServerOptions `),n("span",{class:"token operator"},"="),a(" Omit"),n("span",{class:"token operator"},"<"),a("ViteServerOptions"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"open"'),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"&"),a(),n("span",{class:"token punctuation"},"{"),a(`
  open`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Omit"),n("span",{class:"token operator"},"<"),a("OpenOptions"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"wait"'),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"|"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},`/**
 * Vite "server" options.
 * Some properties are overwritten based on the Quasar mode you're using in order
 * to ensure a correct config.
 * Note: if you're proxying the development server (i.e. using a cloud IDE),
 * set the \`public\` setting to your public application URL.
 */`),a(`
devServer`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" DevServerOptions"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<p${e}>Apart from these options, Quasar CLI tampers with some and you will experience them differently than on a Vite app:</p><p${e}>Using <code class="doc-token"${e}>open</code> prop to open with a specific browser and not with the default browser of your OS (check `),p(r(u,{to:"https://github.com/sindresorhus/open#options"},{default:o((i,t,l,s)=>{if(t)t("supported values");else return[a("supported values")]}),_:1},m,e)),p(`). The <code class="doc-token"${e}>options</code> param described in previous link is what you should configure quasar.config file &gt; devSever &gt; open with. Some examples:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// opens Google Chrome</span>
<span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>open</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>app</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;google chrome&#39;</span> <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>

<span class="token comment"${s}>// opens Firefox</span>
<span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>open</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>app</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;firefox&#39;</span> <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>

<span class="token comment"${s}>// opens Google Chrome and automatically deals with cross-platform issues:</span>
<span class="token keyword"${s}>const</span> open <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;open&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>open</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>app</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> open<span class="token punctuation"${s}>.</span>apps<span class="token punctuation"${s}>.</span>chrome <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// opens Google Chrome"),a(`
`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'google chrome'"),a(),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// opens Firefox"),a(`
`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'firefox'"),a(),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// opens Google Chrome and automatically deals with cross-platform issues:"),a(`
`),n("span",{class:"token keyword"},"const"),a(" open "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(" open"),n("span",{class:"token punctuation"},"."),a("apps"),n("span",{class:"token punctuation"},"."),a("chrome "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>You can also configure automatically opening remote Vue Devtools:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>vueDevtools</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"vueDevtools"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<h3 id="build" class="doc-heading doc-h3"${e}>build</h3>`),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/** Build configuration options. */</span>
build<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarBuildConfiguration<span class="token punctuation"${s}>;</span>

<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Plugin<span class="token punctuation"${s}>,</span> UserConfig <span class="token keyword"${s}>as</span> ViteUserConfig <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&quot;vite&quot;</span><span class="token punctuation"${s}>;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Options <span class="token keyword"${s}>as</span> VuePluginOptions <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&quot;@vitejs/plugin-vue&quot;</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>InvokeParams</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>isClient</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
  <span class="token literal-property property"${s}>isServer</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>BuildTargetOptions</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * @default [&#39;es2022&#39;, &#39;firefox115&#39;, &#39;chrome115&#39;, &#39;safari14&#39;]
   */</span>
  browser<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * @example &#39;node20&#39;
   */</span>
  <span class="token literal-property property"${s}>node</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>PluginEntryRunOptions</span> <span class="token punctuation"${s}>{</span>
  server<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
  client<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span>

<span class="token comment"${s}>/* requires @quasar/app-vite 1.8+ */</span>
type PluginEntry <span class="token operator"${s}>=</span>
  <span class="token operator"${s}>|</span> <span class="token punctuation"${s}>[</span>pluginName<span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>,</span> options<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> any<span class="token punctuation"${s}>,</span> runOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> PluginEntryRunOptions<span class="token punctuation"${s}>]</span>
  <span class="token operator"${s}>|</span> <span class="token punctuation"${s}>[</span><span class="token function-variable function"${s}>pluginFactory</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>options<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> any</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> Plugin<span class="token punctuation"${s}>,</span> options<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> any<span class="token punctuation"${s}>,</span> runOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> PluginEntryRunOptions<span class="token punctuation"${s}>]</span>
  <span class="token operator"${s}>|</span> Plugin
  <span class="token operator"${s}>|</span> <span class="token keyword"${s}>null</span>
  <span class="token operator"${s}>|</span> <span class="token keyword"${s}>undefined</span>
  <span class="token operator"${s}>|</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>;</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>QuasarStaticBuildConfiguration</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * @example
   * {
   *   browser: [&#39;es2022&#39;, &#39;firefox115&#39;, &#39;chrome115&#39;, &#39;safari14&#39;],
   *   node: &#39;node20&#39;
   * }
   */</span>
  target<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> BuildTargetOptions<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Extend Vite config generated by Quasar CLI.
   */</span>
  extendViteConf<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span>
    <span class="token parameter"${s}><span class="token literal-property property"${s}>config</span><span class="token operator"${s}>:</span> ViteUserConfig<span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>invokeParams</span><span class="token operator"${s}>:</span> InvokeParams</span>
  <span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Options to supply to @vitejs/plugin-vue
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#vite-vue-plugin-options
   */</span>
  viteVuePluginOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> VuePluginOptions<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Vite plugins
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#adding-vite-plugins
   *
   * @example
   * [
   *   [ &#39;package-name&#39;, { ..options.. } ],
   *   [ require(&#39;some-plugin&#39;), { ...options... } ]
   * ]
   */</span>
  vitePlugins<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> PluginEntry<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#folder-aliases
   *
   * @example
   * {
   *   // import { ... } from &#39;locales/...&#39;
   *   locales: path.join(__dirname, &#39;src/locales&#39;)
   * }
   */</span>
  alias<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token punctuation"${s}>[</span>key<span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>]</span><span class="token operator"${s}>:</span> string <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Public path of your app.
   * Use it when your public path is something else,
   * like _“&lt;protocol&gt;://&lt;domain&gt;/some/nested/folder”_ – in this case,
   * it means the distributables are in _“some/nested/folder”_ on your webserver.
   *
   * @default &#39;/&#39;
   */</span>
  publicPath<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
   * History mode requires configuration on your deployment web server too.
   *
   * @default &#39;hash&#39;
   */</span>
  vueRouterMode<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;hash&quot;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&quot;history&quot;</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Sets Vue Router base.
   * Should not need to configure this, unless absolutely needed.
   */</span>
  vueRouterBase<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Automatically open remote Vue Devtools when running in development mode.
   */</span>
  vueDevtools<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>/**
   * Should the Vue Options API be available? If all your components only use Composition API
   * it would make sense performance-wise to disable Vue Options API for a compile speedup.
   *
   * @default true
   */</span>
  vueOptionsAPI<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Should we invalidate the Vite and ESLint cache on startup?
   * @default false
   */</span>
  rebuildCache<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Do you want to analyze the production bundles?
   * Generates and opens an HTML report.
   *
   * @default false
   */</span>
  analyze<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Folder where Quasar CLI should generate the distributables.
   * Relative path to project root directory.
   *
   * @default &#39;dist/{ctx.modeName}&#39; For all modes except Cordova.
   * @default &#39;src-cordova/www&#39; For Cordova mode.
   */</span>
  distDir<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Add properties to \`process.env\` that you can use in your website/app JS code.
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-process-env
   *
   * @example { SOMETHING: &#39;someValue&#39; }
   */</span>
  env<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token punctuation"${s}>[</span>index<span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>]</span><span class="token operator"${s}>:</span> string <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Defines constants that get replaced in your app.
   *
   * @example { SOMETHING: JSON.stringify(&#39;someValue&#39;) } -&gt; console.log(SOMETHING) // console.log(&#39;someValue&#39;)
   */</span>
  rawDefine<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token punctuation"${s}>[</span>index<span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>]</span><span class="token operator"${s}>:</span> string <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * (requires @quasar/app-vite v1.1+)
   *
   * Build production assets with or without the hash part in filenames.
   * Example: &quot;454d87bd&quot; in &quot;assets/index.454d87bd.js&quot;
   *
   * When used, please be careful how you configure your web server cache strategy as
   * files will not change name so your client might get 304 (Not Modified) even when
   * it&#39;s not the case.
   *
   * Will not change anything if your Vite config already touches the
   * build.rollupOptions.output.entryFileNames/chunkFileNames/assetFileNames props.
   *
   * Gets applied to production builds only.
   *
   * Useful especially for (but not restricted to) PWA. If set to false then updating the
   * PWA will force to re-download all assets again, regardless if they were changed or
   * not (due to how Rollup works through Vite).
   *
   * @default true
   */</span>
  useFilenameHashes<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * whether to inject module preload polyfill.
   * @default false
   */</span>
  polyfillModulePreload<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Ignores the public folder.
   * @default false
   */</span>
  ignorePublicFolder<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Set to \`false\` to disable minification, or specify the minifier to use.
   * Available options are &#39;terser&#39; or &#39;esbuild&#39;.
   * If set to anything but boolean false then it also applies to CSS.
   * For production only.
   * @default &#39;esbuild&#39;
   */</span>
  minify<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean <span class="token operator"${s}>|</span> <span class="token string"${s}>&#39;terser&#39;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&#39;esbuild&#39;</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * (requires @quasar/app-vite v1.5.2+)
   *
   * Minification options for html-minifier.
   *
   * @see https://github.com/kangax/html-minifier#options-quick-reference for complete list of options
   *
   * @default
   *  {
   *    removeComments: true,
   *    collapseWhitespace: true,
   *    removeAttributeQuotes: true,
   *    collapseBooleanAttributes: true,
   *    removeScriptTypeAttributes: true
   *  }
   */</span>
  htmlMinifyOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> HtmlMinifierOptions<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * If \`true\`, a separate sourcemap file will be created. If &#39;inline&#39;, the
   * sourcemap will be appended to the resulting output file as data URI.
   * &#39;hidden&#39; works like \`true\` except that the corresponding sourcemap
   * comments in the bundled files are suppressed.
   * @default false
   */</span>
  sourcemap<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean <span class="token operator"${s}>|</span> <span class="token string"${s}>&#39;inline&#39;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&#39;hidden&#39;</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Prepare external services before \`$ quasar dev\` command runs
   * like starting some backend or any other service that the app relies on.
   * Can use async/await or directly return a Promise.
   */</span>
  beforeDev<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token literal-property property"${s}>params</span><span class="token operator"${s}>:</span> QuasarHookParams</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Run hook after Quasar dev server is started (\`$ quasar dev\`).
   * At this point, the dev server has been started and is available should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */</span>
  afterDev<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token literal-property property"${s}>params</span><span class="token operator"${s}>:</span> QuasarHookParams</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Run hook before Quasar builds app for production (\`$ quasar build\`).
   * At this point, the distributables folder hasn’t been created yet.
   * Can use async/await or directly return a Promise.
   */</span>
  beforeBuild<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token literal-property property"${s}>params</span><span class="token operator"${s}>:</span> QuasarHookParams</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Run hook after Quasar built app for production (\`$ quasar build\`).
   * At this point, the distributables folder has been created and is available
   *  should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */</span>
  afterBuild<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token literal-property property"${s}>params</span><span class="token operator"${s}>:</span> QuasarHookParams</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Run hook if publishing was requested (\`$ quasar build -P\`),
   *  after Quasar built app for production and the afterBuild hook (if specified) was executed.
   * Can use async/await or directly return a Promise.
   * \`opts\` is Object of form \`{arg, distDir}\`,
   * where “arg” is the argument supplied (if any) to -P parameter.
   */</span>
  onPublish<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token literal-property property"${s}>ops</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>arg</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span> distDir<span class="token operator"${s}>:</span> string <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Build configuration options. */"),a(`
build`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarBuildConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Plugin"),n("span",{class:"token punctuation"},","),a(" UserConfig "),n("span",{class:"token keyword"},"as"),a(" ViteUserConfig "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Options "),n("span",{class:"token keyword"},"as"),a(" VuePluginOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@vitejs/plugin-vue"'),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"InvokeParams"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"isClient"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token literal-property property"},"isServer"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"BuildTargetOptions"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * @default ['es2022', 'firefox115', 'chrome115', 'safari14']
   */`),a(`
  browser`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * @example 'node20'
   */`),a(`
  `),n("span",{class:"token literal-property property"},"node"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"PluginEntryRunOptions"),a(),n("span",{class:"token punctuation"},"{"),a(`
  server`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  client`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"/* requires @quasar/app-vite 1.8+ */"),a(`
type PluginEntry `),n("span",{class:"token operator"},"="),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token punctuation"},"["),a("pluginName"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},","),a(" runOptions"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" PluginEntryRunOptions"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function-variable function"},"pluginFactory"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" any")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" Plugin"),n("span",{class:"token punctuation"},","),a(" options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},","),a(" runOptions"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" PluginEntryRunOptions"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token operator"},"|"),a(` Plugin
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"null"),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"undefined"),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarStaticBuildConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * @example
   * {
   *   browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
   *   node: 'node20'
   * }
   */`),a(`
  target`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" BuildTargetOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Extend Vite config generated by Quasar CLI.
   */`),a(`
  extendViteConf`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(" ViteUserConfig"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"invokeParams"),n("span",{class:"token operator"},":"),a(" InvokeParams")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Options to supply to @vitejs/plugin-vue
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#vite-vue-plugin-options
   */`),a(`
  viteVuePluginOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" VuePluginOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Vite plugins
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#adding-vite-plugins
   *
   * @example
   * [
   *   [ 'package-name', { ..options.. } ],
   *   [ require('some-plugin'), { ...options... } ]
   * ]
   */`),a(`
  vitePlugins`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" PluginEntry"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#folder-aliases
   *
   * @example
   * {
   *   // import { ... } from 'locales/...'
   *   locales: path.join(__dirname, 'src/locales')
   * }
   */`),a(`
  alias`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"["),a("key"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Public path of your app.
   * Use it when your public path is something else,
   * like _“<protocol>://<domain>/some/nested/folder”_ – in this case,
   * it means the distributables are in _“some/nested/folder”_ on your webserver.
   *
   * @default '/'
   */`),a(`
  publicPath`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
   * History mode requires configuration on your deployment web server too.
   *
   * @default 'hash'
   */`),a(`
  vueRouterMode`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"hash"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"history"'),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Sets Vue Router base.
   * Should not need to configure this, unless absolutely needed.
   */`),a(`
  vueRouterBase`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Automatically open remote Vue Devtools when running in development mode.
   */`),a(`
  vueDevtools`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Should the Vue Options API be available? If all your components only use Composition API
   * it would make sense performance-wise to disable Vue Options API for a compile speedup.
   *
   * @default true
   */`),a(`
  vueOptionsAPI`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Should we invalidate the Vite and ESLint cache on startup?
   * @default false
   */`),a(`
  rebuildCache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Do you want to analyze the production bundles?
   * Generates and opens an HTML report.
   *
   * @default false
   */`),a(`
  analyze`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Folder where Quasar CLI should generate the distributables.
   * Relative path to project root directory.
   *
   * @default 'dist/{ctx.modeName}' For all modes except Cordova.
   * @default 'src-cordova/www' For Cordova mode.
   */`),a(`
  distDir`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Add properties to \`process.env\` that you can use in your website/app JS code.
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-process-env
   *
   * @example { SOMETHING: 'someValue' }
   */`),a(`
  env`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"["),a("index"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Defines constants that get replaced in your app.
   *
   * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
   */`),a(`
  rawDefine`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"["),a("index"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * (requires @quasar/app-vite v1.1+)
   *
   * Build production assets with or without the hash part in filenames.
   * Example: "454d87bd" in "assets/index.454d87bd.js"
   *
   * When used, please be careful how you configure your web server cache strategy as
   * files will not change name so your client might get 304 (Not Modified) even when
   * it's not the case.
   *
   * Will not change anything if your Vite config already touches the
   * build.rollupOptions.output.entryFileNames/chunkFileNames/assetFileNames props.
   *
   * Gets applied to production builds only.
   *
   * Useful especially for (but not restricted to) PWA. If set to false then updating the
   * PWA will force to re-download all assets again, regardless if they were changed or
   * not (due to how Rollup works through Vite).
   *
   * @default true
   */`),a(`
  useFilenameHashes`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * whether to inject module preload polyfill.
   * @default false
   */`),a(`
  polyfillModulePreload`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Ignores the public folder.
   * @default false
   */`),a(`
  ignorePublicFolder`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Set to \`false\` to disable minification, or specify the minifier to use.
   * Available options are 'terser' or 'esbuild'.
   * If set to anything but boolean false then it also applies to CSS.
   * For production only.
   * @default 'esbuild'
   */`),a(`
  minify`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'terser'"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'esbuild'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * (requires @quasar/app-vite v1.5.2+)
   *
   * Minification options for html-minifier.
   *
   * @see https://github.com/kangax/html-minifier#options-quick-reference for complete list of options
   *
   * @default
   *  {
   *    removeComments: true,
   *    collapseWhitespace: true,
   *    removeAttributeQuotes: true,
   *    collapseBooleanAttributes: true,
   *    removeScriptTypeAttributes: true
   *  }
   */`),a(`
  htmlMinifyOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" HtmlMinifierOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * If \`true\`, a separate sourcemap file will be created. If 'inline', the
   * sourcemap will be appended to the resulting output file as data URI.
   * 'hidden' works like \`true\` except that the corresponding sourcemap
   * comments in the bundled files are suppressed.
   * @default false
   */`),a(`
  sourcemap`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'inline'"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Prepare external services before \`$ quasar dev\` command runs
   * like starting some backend or any other service that the app relies on.
   * Can use async/await or directly return a Promise.
   */`),a(`
  beforeDev`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Run hook after Quasar dev server is started (\`$ quasar dev\`).
   * At this point, the dev server has been started and is available should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */`),a(`
  afterDev`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Run hook before Quasar builds app for production (\`$ quasar build\`).
   * At this point, the distributables folder hasn’t been created yet.
   * Can use async/await or directly return a Promise.
   */`),a(`
  beforeBuild`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Run hook after Quasar built app for production (\`$ quasar build\`).
   * At this point, the distributables folder has been created and is available
   *  should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */`),a(`
  afterBuild`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},"/**\n   * Run hook if publishing was requested (`$ quasar build -P`),\n   *  after Quasar built app for production and the afterBuild hook (if specified) was executed.\n   * Can use async/await or directly return a Promise.\n   * `opts` is Object of form `{arg, distDir}`,\n   * where “arg” is the argument supplied (if any) to -P parameter.\n   */"),a(`
  onPublish`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"ops"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"arg"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(" distDir"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>See these references for more info:</p><ul${e}><li${e}>`),p(r(u,{to:"https://vitejs.dev/config/#server-options"},{default:o((i,t,l,s)=>{if(t)t("Vite server options");else return[a("Vite server options")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/quasar-cli-vite/handling-vite#vite-vue-plugin-options"},{default:o((i,t,l,s)=>{if(t)t("Vite Vue Plugin options");else return[a("Vite Vue Plugin options")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/quasar-cli-vite/handling-vite#adding-vite-plugins"},{default:o((i,t,l,s)=>{if(t)t("Adding Vite plugins");else return[a("Adding Vite plugins")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/quasar-cli-vite/handling-vite#folder-aliases"},{default:o((i,t,l,s)=>{if(t)t("Folder Aliases");else return[a("Folder Aliases")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"/quasar-cli-vite/handling-process-env"},{default:o((i,t,l,s)=>{if(t)t("Handling Process Env");else return[a("Handling Process Env")]}),_:1},m,e)),p(`</li><li${e}>`),p(r(u,{to:"https://github.com/kangax/html-minifier#options-quick-reference"},{default:o((i,t,l,s)=>{if(t)t("html-minifier options");else return[a("html-minifier options")]}),_:1},m,e)),p(`</li></ul><h3 id="sourcefiles" class="doc-heading doc-h3"${e}>sourceFiles</h3>`),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarSourceFilesConfiguration<span class="token punctuation"${s}>;</span>

<span class="token comment"${s}>/**
 * Use this property to change the default names of some files of your website/app if you have to.
 * All paths must be relative to the root folder of your project.
 *
 * @default
 * {
 *  rootComponent: &#39;src/App.vue&#39;,
 *  router: &#39;src/router/index&#39;,
 *  store: &#39;src/stores/index&#39;, // for Pinia
 *  // store: &#39;src/store/index&#39; // for Vuex
 *  pwaRegisterServiceWorker: &#39;src-pwa/register-service-worker&#39;,
 *  pwaServiceWorker: &#39;src-pwa/custom-service-worker&#39;,
 *  pwaManifestFile: &#39;src-pwa/manifest.json&#39;,
 *  electronMain: &#39;src-electron/electron-main&#39;,
 *  electronPreload: &#39;src-electron/electron-preload&#39;
 * }
 */</span>
<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>QuasarSourceFilesConfiguration</span> <span class="token punctuation"${s}>{</span>
  rootComponent<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  router<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  store<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  pwaRegisterServiceWorker<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  pwaServiceWorker<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  pwaManifestFile<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  electronMain<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
  electronPreload<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("sourceFiles"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarSourceFilesConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},`/**
 * Use this property to change the default names of some files of your website/app if you have to.
 * All paths must be relative to the root folder of your project.
 *
 * @default
 * {
 *  rootComponent: 'src/App.vue',
 *  router: 'src/router/index',
 *  store: 'src/stores/index', // for Pinia
 *  // store: 'src/store/index' // for Vuex
 *  pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
 *  pwaServiceWorker: 'src-pwa/custom-service-worker',
 *  pwaManifestFile: 'src-pwa/manifest.json',
 *  electronMain: 'src-electron/electron-main',
 *  electronPreload: 'src-electron/electron-preload'
 * }
 */`),a(`
`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarSourceFilesConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  rootComponent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  router`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  store`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  pwaRegisterServiceWorker`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  pwaServiceWorker`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  pwaManifestFile`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  electronMain`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  electronPreload`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<h3 id="htmlvariables" class="doc-heading doc-h3"${e}>htmlVariables</h3>`),p(r(k(f),null,{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/** Add variables that you can use in /index.html. */</span>
htmlVariables<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> Record<span class="token operator"${s}>&lt;</span>string<span class="token punctuation"${s}>,</span> any<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>;</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Add variables that you can use in /index.html. */"),a(`
htmlVariables`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Record"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},","),a(" any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";")])]),n(c)]}),_:1},m,e)),p(`<p${e}>You can define and then reference variables in <code class="doc-token"${e}>/index.html</code>, like this:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>htmlVariables</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>myVar</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;some-content&#39;</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"htmlVariables"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"myVar"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some-content'"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>Then, as an example:</p>`),p(r(k(f),{title:"/index.html"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>&lt;%= myVar %&gt;
&lt;% if (myVar) { %&gt;something&lt;% } %&gt;</code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,`<%= myVar %>
<% if (myVar) { %>something<% } %>`)]),n(c)]}),_:1},m,e)),p(`<p${e}>One more example:</p>`),p(r(k(f),{title:"/quasar.config file"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>htmlVariables</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>title</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;test name&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>some</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>prop</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;my-prop&#39;</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"htmlVariables"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'test name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"some"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-prop'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,e)),p(`<p${e}>Then, as an example:</p>`),p(r(k(f),{title:"/index.html"},{default:o((i,t,l,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>&lt;%= title %&gt;
&lt;%= some.prop %&gt;
&lt;% if (some.prop) { %&gt;&lt;%= title %&gt;&lt;% } %&gt;</code></pre>`),t(r(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,`<%= title %>
<%= some.prop %>
<% if (some.prop) { %><%= title %><% } %>`)]),n(c)]}),_:1},m,e)),p(`<h3 id="quasar-mode-specific" class="doc-heading doc-h3"${e}>Quasar Mode Specific</h3>`),p(r(S,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o((i,t,l,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Property</th><th class="text-left"${s}>Type</th><th class="text-left"${s}>Description</th></tr></thead><tbody${s}><tr${s}><td${s}>cordova</td><td${s}>Object</td><td${s}>Cordova specific `),t(r(u,{to:"/quasar-cli-vite/developing-cordova-apps/configuring-cordova"},{default:o(($,g,y,h)=>{if(g)g("config");else return[a("config")]}),_:1},l,s)),t(`.</td></tr><tr${s}><td${s}>capacitor</td><td${s}>Object</td><td${s}>Quasar CLI Capacitor specific `),t(r(u,{to:"/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor"},{default:o(($,g,y,h)=>{if(g)g("config");else return[a("config")]}),_:1},l,s)),t(`.</td></tr><tr${s}><td${s}>pwa</td><td${s}>Object</td><td${s}>PWA specific `),t(r(u,{to:"/quasar-cli-vite/developing-pwa/configuring-pwa"},{default:o(($,g,y,h)=>{if(g)g("config");else return[a("config")]}),_:1},l,s)),t(`.</td></tr><tr${s}><td${s}>ssr</td><td${s}>Object</td><td${s}>SSR specific `),t(r(u,{to:"/quasar-cli-vite/developing-ssr/configuring-ssr"},{default:o(($,g,y,h)=>{if(g)g("config");else return[a("config")]}),_:1},l,s)),t(`.</td></tr><tr${s}><td${s}>electron</td><td${s}>Object</td><td${s}>Electron specific `),t(r(u,{to:"/quasar-cli-vite/developing-electron-apps/configuring-electron"},{default:o(($,g,y,h)=>{if(g)g("config");else return[a("config")]}),_:1},l,s)),t(`.</td></tr><tr${s}><td${s}>bex</td><td${s}>Object</td><td${s}>BEX specific `),t(r(u,{to:"/quasar-cli-vite/developing-browser-extensions/configuring-bex"},{default:o(($,g,y,h)=>{if(g)g("config");else return[a("config")]}),_:1},l,s)),t(".</td></tr></tbody>");else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Property"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,"cordova"),n("td",null,"Object"),n("td",null,[a("Cordova specific "),n(u,{to:"/quasar-cli-vite/developing-cordova-apps/configuring-cordova"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"capacitor"),n("td",null,"Object"),n("td",null,[a("Quasar CLI Capacitor specific "),n(u,{to:"/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"pwa"),n("td",null,"Object"),n("td",null,[a("PWA specific "),n(u,{to:"/quasar-cli-vite/developing-pwa/configuring-pwa"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"ssr"),n("td",null,"Object"),n("td",null,[a("SSR specific "),n(u,{to:"/quasar-cli-vite/developing-ssr/configuring-ssr"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"electron"),n("td",null,"Object"),n("td",null,[a("Electron specific "),n(u,{to:"/quasar-cli-vite/developing-electron-apps/configuring-electron"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"bex"),n("td",null,"Object"),n("td",null,[a("BEX specific "),n(u,{to:"/quasar-cli-vite/developing-browser-extensions/configuring-bex"},{default:o(()=>[a("config")]),_:1}),a(".")])])])]}),_:1},m,e)),p(`<h2 id="examples" class="doc-heading doc-h2"${e}>Examples</h2><h3 id="setting-env-for-dev-build" class="doc-heading doc-h3"${e}>Setting env for dev/build</h3><p${e}>Please refer to `),p(r(u,{to:"/quasar-cli-vite/handling-process-env#adding-to-process-env"},{default:o((i,t,l,s)=>{if(t)t("Adding to process.env");else return[a("Adding to process.env")]}),_:1},m,e)),p(` section in our docs.</p><h3 id="adding-vite-plugins" class="doc-heading doc-h3"${e}>Adding Vite plugins</h3><p${e}>Please refer to the `),p(r(u,{to:"/quasar-cli-vite/handling-vite#adding-vite-plugins"},{default:o((i,t,l,s)=>{if(t)t("Handling Vite");else return[a("Handling Vite")]}),_:1},m,e)),p(" page.</p>");else return[n("p",null,[a("Notice that your scaffolded project folder contains a "),n("code",{class:"doc-token"},"/quasar.config"),a(" file. So what can you configure through it? Basically anything that Quasar CLI does for you.")]),n("ul",null,[n("li",null,"Quasar components, directives and plugins that you’ll be using in your website/app"),n("li",null,[a("Default "),n(u,{to:"/options/quasar-language-packs"},{default:o(()=>[a("Quasar Language Pack")]),_:1})]),n("li",null,[n(u,{to:"/options/installing-icon-libraries"},{default:o(()=>[a("Icon libraries")]),_:1}),a(" that you wish to use")]),n("li",null,[a("Default "),n(u,{to:"/options/quasar-icon-sets"},{default:o(()=>[a("Quasar Icon Set")]),_:1}),a(" for Quasar components")]),n("li",null,"Development server port, HTTPS mode, hostname and so on"),n("li",null,[n(u,{to:"/options/animations"},{default:o(()=>[a("CSS animations")]),_:1}),a(" that you wish to use")]),n("li",null,[n(u,{to:"/quasar-cli-vite/boot-files"},{default:o(()=>[a("Boot Files")]),_:1}),a(" list (that determines order of execution too) – which are files in "),n("code",{class:"doc-token"},"/src/boot"),a(" that tell how your app is initialized before mounting the root Vue component")]),n("li",null,"Global CSS/Sass/… files to be included in the bundle"),n("li",null,"SPA, PWA, Electron, Capacitor, Cordova, SSR, BEX (browser extensions) configuration"),n("li",null,"Extend the under the hood tools, like the generated Vite config"),n("li",null,"…and many many more that you’ll discover along the way")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"You’ll notice that changing any of these settings does not require you to manually reload the dev server. Quasar detects and reloads the necessary processes. You won’t lose your development flow, because you can just sit back while Quasar CLI quickly reloads the changed code, even keeping the current state. This saves tons of your time!")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("The "),n("code",{class:"doc-token"},"/quasar.config"),a(" file is run by the Quasar CLI build system, so this code runs under Node directly, not in the context of your app. This means you can require modules like ‘fs’, ‘path’, Vite plugins, and so on. Make sure the ES features that you want to use in this file are "),n(u,{to:"https://node.green/"},{default:o(()=>[a("supported by your Node version")]),_:1}),a(" (which should be >= 14.19.0).")])]),n("h2",{id:"structure",class:"doc-heading doc-h2",onClick:i=>k(d)("structure")},"Structure",8,["onClick"]),n("h3",{id:"the-basics",class:"doc-heading doc-h3",onClick:i=>k(d)("the-basics")},"The basics",8,["onClick"]),n("p",null,[a("You’ll notice that the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file exports a function that takes a "),n("code",{class:"doc-token"},"ctx"),a(" (context) parameter and returns an Object. This allows you to dynamically change your website/app config based on this context:")]),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// can be async too"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// Example output on console:"),a(`
  `),n("span",{class:"token comment"},`/*
  {
    dev: true,
    prod: false,
    mode: { spa: true },
    modeName: 'spa',
    target: {},
    targetName: undefined,
    arch: {},
    archName: undefined,
    debug: undefined
  }
  */`),a(`

  `),n("span",{class:"token comment"},"// context gets generated based on the parameters"),a(`
  `),n("span",{class:"token comment"},'// with which you run "quasar dev" or "quasar build"'),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ... your config"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"What this means is that, as an example, you can load a font when building for a certain mode (like PWA), and pick another one for the others:"),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"extras"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    ctx`),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("pwa "),n("span",{class:"token comment"},"// we're adding only if working on a PWA"),a(`
      `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'roboto-font'"),a(`
      `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Or you can use a global CSS file for SPA mode and another one for Cordova mode while avoiding loading any such file for the other modes."),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"css"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    ctx`),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("spa "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'app-spa.sass'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// looks for /src/css/app-spa.sass"),a(`
    ctx`),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("cordova "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'app-cordova.sass'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),a("  "),n("span",{class:"token comment"},"// looks for /src/css/app-cordova.sass"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Or you can configure the dev server to run on port 8000 for SPA mode, on port 9000 for PWA mode or on port 9090 for the other modes:"),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"port"),n("span",{class:"token operator"},":"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a(`spa
      `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"8000"),a(`
      `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("pwa "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"9000"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"9090"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"You can also do async work before returning the quasar configuration:"),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"someAsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},'// ... use "data"'),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// or:"),a(`
module`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// some async work then:"),a(`
    `),n("span",{class:"token comment"},"// resolve() with the quasar config"),a(`
    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"//"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"The possibilities are endless."),n("h3",{id:"ide-autocompletion",class:"doc-heading doc-h3",onClick:i=>k(d)("ide-autocompletion")},"IDE autocompletion",8,["onClick"]),n("p",null,[a("You can wrap the returned function with "),n("code",{class:"doc-token"},"configure()"),a(" helper to get a better IDE autocomplete experience (through TypeScript):")]),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar/wrappers'"),n("span",{class:"token punctuation"},")"),a(`

module`),n("span",{class:"token punctuation"},"."),a("exports "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"/* configuration options */"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h2",{id:"options-to-configure",class:"doc-heading doc-h2",onClick:i=>k(d)("options-to-configure")},"Options to Configure",8,["onClick"]),n("h3",{id:"css",class:"doc-heading doc-h3",onClick:i=>k(d)("css")},"css",8,["onClick"]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Global CSS/Stylus/SCSS/SASS/... files from \`/src/css/\`,
 * except for theme files, which are included by default.
 */`),a(`
css`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("p",null,"Example:"),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"css"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token string"},"'app.sass'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// referring to /src/css/app.sass"),a(`
    `),n("span",{class:"token string"},"'~some-library/style.css'"),a(),n("span",{class:"token comment"},"// referring to node_modules/some-library/style.css"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"boot",class:"doc-heading doc-h3",onClick:i=>k(d)("boot")},"boot",8,["onClick"]),n("p",null,[a("More on "),n(u,{to:"/quasar-cli-vite/boot-files"},{default:o(()=>[a("Boot Files")]),_:1}),a(".")]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Boot files to load. Order is important. */"),a(`
boot`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarBootConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"BootConfigurationItem"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  server`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
  client`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

type QuasarBootConfiguration `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("string "),n("span",{class:"token operator"},"|"),a(" BootConfigurationItem"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("h3",{id:"prefetch",class:"doc-heading doc-h3",onClick:i=>k(d)("prefetch")},"preFetch",8,["onClick"]),n("p",null,[a("More on the "),n(u,{to:"/quasar-cli-vite/prefetch-feature"},{default:o(()=>[a("PreFetch Feature")]),_:1}),a(" page.")]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Enable the preFetch feature. */"),a(`
preFetch`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("h3",{id:"eslint",class:"doc-heading doc-h3",onClick:i=>k(d)("eslint")},[a("eslint "),n(q,{label:"deprecated"})],8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"This property has been deprecated in favour of using vite-plugin-checker.")]),n("p",null,[a("More on the "),n(u,{to:"/quasar-cli-vite/linter"},{default:o(()=>[a("Linter")]),_:1}),a(" page.")]),n("h3",{id:"extras",class:"doc-heading doc-h3",onClick:i=>k(d)("extras")},"extras",8,["onClick"]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What to import from [@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras) package.
 * @example ['material-icons', 'roboto-font', 'ionicons-v4']
 */`),a(`
extras`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("QuasarIconSets "),n("span",{class:"token operator"},"|"),a(" QuasarFonts"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("h3",{id:"framework",class:"doc-heading doc-h3",onClick:i=>k(d)("framework")},"framework",8,["onClick"]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What Quasar language pack to use, what Quasar icon
 * set to use for Quasar components, etc.
 */`),a(`
framework`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarFrameworkConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarFrameworkConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * @see - QuasarConfOptions tab in API cards throughout the docs
   */`),a(`
  config`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" SerializableConfiguration"),n("span",{class:"token operator"},"<"),a("QuasarUIConfiguration"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * One of the Quasar IconSets
   *
   * @see https://v2.quasar.dev/options/quasar-icon-sets
   *
   * @example 'material-icons'
   */`),a(`
  iconSet`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarIconSets"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * One of the Quasar language packs
   *
   * @see https://v2.quasar.dev/options/quasar-language-packs
   *
   * @example 'en-US'
   * @example 'es'
   */`),a(`
  lang`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarLanguageCodes"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Quasar CSS addons have breakpoint aware versions of flex and spacing classes
   *
   * @see https://quasar.dev/layout/grid/introduction-to-flexbox#flex-addons
   * @see https://quasar.dev/style/spacing#flex-addons
   */`),a(`
  cssAddon`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Auto import - how to detect components in your vue files
   *   "kebab": q-carousel q-page
   *   "pascal": QCarousel QPage
   *   "combined": q-carousel QPage
   *
   * @default 'kebab'
   */`),a(`
  autoImportComponentCase`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"kebab"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"pascal"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"combined"'),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Auto import - which file extensions should be interpreted as referring to Vue SFC?
   *
   * @default ['vue']
   */`),a(`
  autoImportVueExtensions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Auto import - which file extensions should be interpreted as referring to script files?
   *
   * @default ['js', 'jsx', 'ts', 'tsx']
   */`),a(`
  autoImportScriptExtensions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Treeshake Quasar's UI on dev too?
   * Recommended to leave this as false for performance reasons.
   *
   * @default false
   */`),a(`
  devTreeshaking`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Quasar will auto import components based on your usage.
   * But, in case you have a special case, you can manually specify Quasar components to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar components (e.g. q-avatar).
   *
   * Another example would be that dynamically rendering components depending on an API response or similar (e.g. in a CMS),
   * something like \`<component :is="dynamicName">\` where \`dynamicName\` is a string that matches a Quasar component name.
   *
   * @example ['QAvatar', 'QChip']
   */`),a(`
  components`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("keyof QuasarComponents"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Quasar will auto import directives based on your usage.
   * But, in case you have a special case, you can manually specify Quasar directives to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar directives (e.g. v-intersection).
   *
   * @example ['Intersection', 'Mutation']
   */`),a(`
  directives`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("keyof QuasarDirectives"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Quasar plugins to be installed. Specify the ones you are using in your app.
   *
   * @example ['Notify', 'Loading', 'Meta', 'AppFullscreen']
   */`),a(`
  plugins`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("keyof QuasarPlugins"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"See these references for more info:"),n("ul",null,[n("li",null,[n(u,{to:"/options/quasar-language-packs"},{default:o(()=>[a("Quasar Language Packs")]),_:1})]),n("li",null,[n(u,{to:"/options/quasar-icon-sets"},{default:o(()=>[a("Quasar Icon Sets")]),_:1})]),n("li",null,[n(u,{to:"/layout/grid/introduction-to-flexbox#flex-addons"},{default:o(()=>[a("Quasar CSS Addons - Flex")]),_:1})]),n("li",null,[n(u,{to:"/style/spacing#flex-addons"},{default:o(()=>[a("Quasar CSS Addons - Spacing")]),_:1})])]),n("h3",{id:"animations",class:"doc-heading doc-h3",onClick:i=>k(d)("animations")},"animations",8,["onClick"]),n("p",null,[a("More on "),n(u,{to:"/options/animations"},{default:o(()=>[a("CSS animations")]),_:1}),a(".")]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What Quasar CSS animations](/options/animations) to import.
 * @example [ 'bounceInLeft', 'bounceOutRight' ]
 * */`),a(`
animations`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarAnimationsConfiguration "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("h3",{id:"devserver",class:"doc-heading doc-h3",onClick:i=>k(d)("devserver")},"devServer",8,["onClick"]),n("p",null,[a("More info: "),n(u,{to:"https://vitejs.dev/config/#server-options"},{default:o(()=>[a("Vite server options")]),_:1})]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ServerOptions "),n("span",{class:"token keyword"},"as"),a(" ViteServerOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Options "),n("span",{class:"token keyword"},"as"),a(" OpenOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"open"'),n("span",{class:"token punctuation"},";"),a(`
type DevServerOptions `),n("span",{class:"token operator"},"="),a(" Omit"),n("span",{class:"token operator"},"<"),a("ViteServerOptions"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"open"'),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"&"),a(),n("span",{class:"token punctuation"},"{"),a(`
  open`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Omit"),n("span",{class:"token operator"},"<"),a("OpenOptions"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"wait"'),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"|"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},`/**
 * Vite "server" options.
 * Some properties are overwritten based on the Quasar mode you're using in order
 * to ensure a correct config.
 * Note: if you're proxying the development server (i.e. using a cloud IDE),
 * set the \`public\` setting to your public application URL.
 */`),a(`
devServer`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" DevServerOptions"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("p",null,"Apart from these options, Quasar CLI tampers with some and you will experience them differently than on a Vite app:"),n("p",null,[a("Using "),n("code",{class:"doc-token"},"open"),a(" prop to open with a specific browser and not with the default browser of your OS (check "),n(u,{to:"https://github.com/sindresorhus/open#options"},{default:o(()=>[a("supported values")]),_:1}),a("). The "),n("code",{class:"doc-token"},"options"),a(" param described in previous link is what you should configure quasar.config file > devSever > open with. Some examples:")]),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// opens Google Chrome"),a(`
`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'google chrome'"),a(),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// opens Firefox"),a(`
`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'firefox'"),a(),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// opens Google Chrome and automatically deals with cross-platform issues:"),a(`
`),n("span",{class:"token keyword"},"const"),a(" open "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(" open"),n("span",{class:"token punctuation"},"."),a("apps"),n("span",{class:"token punctuation"},"."),a("chrome "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"You can also configure automatically opening remote Vue Devtools:"),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"vueDevtools"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"build",class:"doc-heading doc-h3",onClick:i=>k(d)("build")},"build",8,["onClick"]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Build configuration options. */"),a(`
build`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarBuildConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Plugin"),n("span",{class:"token punctuation"},","),a(" UserConfig "),n("span",{class:"token keyword"},"as"),a(" ViteUserConfig "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Options "),n("span",{class:"token keyword"},"as"),a(" VuePluginOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@vitejs/plugin-vue"'),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"InvokeParams"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"isClient"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token literal-property property"},"isServer"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"BuildTargetOptions"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * @default ['es2022', 'firefox115', 'chrome115', 'safari14']
   */`),a(`
  browser`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * @example 'node20'
   */`),a(`
  `),n("span",{class:"token literal-property property"},"node"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"PluginEntryRunOptions"),a(),n("span",{class:"token punctuation"},"{"),a(`
  server`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  client`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"/* requires @quasar/app-vite 1.8+ */"),a(`
type PluginEntry `),n("span",{class:"token operator"},"="),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token punctuation"},"["),a("pluginName"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},","),a(" runOptions"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" PluginEntryRunOptions"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function-variable function"},"pluginFactory"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" any")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" Plugin"),n("span",{class:"token punctuation"},","),a(" options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},","),a(" runOptions"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" PluginEntryRunOptions"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token operator"},"|"),a(` Plugin
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"null"),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"undefined"),a(`
  `),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarStaticBuildConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * @example
   * {
   *   browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
   *   node: 'node20'
   * }
   */`),a(`
  target`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" BuildTargetOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Extend Vite config generated by Quasar CLI.
   */`),a(`
  extendViteConf`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(" ViteUserConfig"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"invokeParams"),n("span",{class:"token operator"},":"),a(" InvokeParams")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Options to supply to @vitejs/plugin-vue
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#vite-vue-plugin-options
   */`),a(`
  viteVuePluginOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" VuePluginOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Vite plugins
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#adding-vite-plugins
   *
   * @example
   * [
   *   [ 'package-name', { ..options.. } ],
   *   [ require('some-plugin'), { ...options... } ]
   * ]
   */`),a(`
  vitePlugins`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" PluginEntry"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#folder-aliases
   *
   * @example
   * {
   *   // import { ... } from 'locales/...'
   *   locales: path.join(__dirname, 'src/locales')
   * }
   */`),a(`
  alias`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"["),a("key"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Public path of your app.
   * Use it when your public path is something else,
   * like _“<protocol>://<domain>/some/nested/folder”_ – in this case,
   * it means the distributables are in _“some/nested/folder”_ on your webserver.
   *
   * @default '/'
   */`),a(`
  publicPath`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
   * History mode requires configuration on your deployment web server too.
   *
   * @default 'hash'
   */`),a(`
  vueRouterMode`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"hash"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"history"'),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Sets Vue Router base.
   * Should not need to configure this, unless absolutely needed.
   */`),a(`
  vueRouterBase`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Automatically open remote Vue Devtools when running in development mode.
   */`),a(`
  vueDevtools`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},`/**
   * Should the Vue Options API be available? If all your components only use Composition API
   * it would make sense performance-wise to disable Vue Options API for a compile speedup.
   *
   * @default true
   */`),a(`
  vueOptionsAPI`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Should we invalidate the Vite and ESLint cache on startup?
   * @default false
   */`),a(`
  rebuildCache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Do you want to analyze the production bundles?
   * Generates and opens an HTML report.
   *
   * @default false
   */`),a(`
  analyze`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Folder where Quasar CLI should generate the distributables.
   * Relative path to project root directory.
   *
   * @default 'dist/{ctx.modeName}' For all modes except Cordova.
   * @default 'src-cordova/www' For Cordova mode.
   */`),a(`
  distDir`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Add properties to \`process.env\` that you can use in your website/app JS code.
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-process-env
   *
   * @example { SOMETHING: 'someValue' }
   */`),a(`
  env`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"["),a("index"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Defines constants that get replaced in your app.
   *
   * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
   */`),a(`
  rawDefine`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"["),a("index"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * (requires @quasar/app-vite v1.1+)
   *
   * Build production assets with or without the hash part in filenames.
   * Example: "454d87bd" in "assets/index.454d87bd.js"
   *
   * When used, please be careful how you configure your web server cache strategy as
   * files will not change name so your client might get 304 (Not Modified) even when
   * it's not the case.
   *
   * Will not change anything if your Vite config already touches the
   * build.rollupOptions.output.entryFileNames/chunkFileNames/assetFileNames props.
   *
   * Gets applied to production builds only.
   *
   * Useful especially for (but not restricted to) PWA. If set to false then updating the
   * PWA will force to re-download all assets again, regardless if they were changed or
   * not (due to how Rollup works through Vite).
   *
   * @default true
   */`),a(`
  useFilenameHashes`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * whether to inject module preload polyfill.
   * @default false
   */`),a(`
  polyfillModulePreload`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Ignores the public folder.
   * @default false
   */`),a(`
  ignorePublicFolder`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Set to \`false\` to disable minification, or specify the minifier to use.
   * Available options are 'terser' or 'esbuild'.
   * If set to anything but boolean false then it also applies to CSS.
   * For production only.
   * @default 'esbuild'
   */`),a(`
  minify`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'terser'"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'esbuild'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * (requires @quasar/app-vite v1.5.2+)
   *
   * Minification options for html-minifier.
   *
   * @see https://github.com/kangax/html-minifier#options-quick-reference for complete list of options
   *
   * @default
   *  {
   *    removeComments: true,
   *    collapseWhitespace: true,
   *    removeAttributeQuotes: true,
   *    collapseBooleanAttributes: true,
   *    removeScriptTypeAttributes: true
   *  }
   */`),a(`
  htmlMinifyOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" HtmlMinifierOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * If \`true\`, a separate sourcemap file will be created. If 'inline', the
   * sourcemap will be appended to the resulting output file as data URI.
   * 'hidden' works like \`true\` except that the corresponding sourcemap
   * comments in the bundled files are suppressed.
   * @default false
   */`),a(`
  sourcemap`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'inline'"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Prepare external services before \`$ quasar dev\` command runs
   * like starting some backend or any other service that the app relies on.
   * Can use async/await or directly return a Promise.
   */`),a(`
  beforeDev`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Run hook after Quasar dev server is started (\`$ quasar dev\`).
   * At this point, the dev server has been started and is available should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */`),a(`
  afterDev`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Run hook before Quasar builds app for production (\`$ quasar build\`).
   * At this point, the distributables folder hasn’t been created yet.
   * Can use async/await or directly return a Promise.
   */`),a(`
  beforeBuild`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Run hook after Quasar built app for production (\`$ quasar build\`).
   * At this point, the distributables folder has been created and is available
   *  should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */`),a(`
  afterBuild`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),a(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},"/**\n   * Run hook if publishing was requested (`$ quasar build -P`),\n   *  after Quasar built app for production and the afterBuild hook (if specified) was executed.\n   * Can use async/await or directly return a Promise.\n   * `opts` is Object of form `{arg, distDir}`,\n   * where “arg” is the argument supplied (if any) to -P parameter.\n   */"),a(`
  onPublish`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"ops"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"arg"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(" distDir"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"See these references for more info:"),n("ul",null,[n("li",null,[n(u,{to:"https://vitejs.dev/config/#server-options"},{default:o(()=>[a("Vite server options")]),_:1})]),n("li",null,[n(u,{to:"/quasar-cli-vite/handling-vite#vite-vue-plugin-options"},{default:o(()=>[a("Vite Vue Plugin options")]),_:1})]),n("li",null,[n(u,{to:"/quasar-cli-vite/handling-vite#adding-vite-plugins"},{default:o(()=>[a("Adding Vite plugins")]),_:1})]),n("li",null,[n(u,{to:"/quasar-cli-vite/handling-vite#folder-aliases"},{default:o(()=>[a("Folder Aliases")]),_:1})]),n("li",null,[n(u,{to:"/quasar-cli-vite/handling-process-env"},{default:o(()=>[a("Handling Process Env")]),_:1})]),n("li",null,[n(u,{to:"https://github.com/kangax/html-minifier#options-quick-reference"},{default:o(()=>[a("html-minifier options")]),_:1})])]),n("h3",{id:"sourcefiles",class:"doc-heading doc-h3",onClick:i=>k(d)("sourcefiles")},"sourceFiles",8,["onClick"]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("sourceFiles"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarSourceFilesConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},`/**
 * Use this property to change the default names of some files of your website/app if you have to.
 * All paths must be relative to the root folder of your project.
 *
 * @default
 * {
 *  rootComponent: 'src/App.vue',
 *  router: 'src/router/index',
 *  store: 'src/stores/index', // for Pinia
 *  // store: 'src/store/index' // for Vuex
 *  pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
 *  pwaServiceWorker: 'src-pwa/custom-service-worker',
 *  pwaManifestFile: 'src-pwa/manifest.json',
 *  electronMain: 'src-electron/electron-main',
 *  electronPreload: 'src-electron/electron-preload'
 * }
 */`),a(`
`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarSourceFilesConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  rootComponent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  router`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  store`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  pwaRegisterServiceWorker`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  pwaServiceWorker`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  pwaManifestFile`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  electronMain`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  electronPreload`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"htmlvariables",class:"doc-heading doc-h3",onClick:i=>k(d)("htmlvariables")},"htmlVariables",8,["onClick"]),n(k(f),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Add variables that you can use in /index.html. */"),a(`
htmlVariables`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Record"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},","),a(" any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";")])]),n(c)]),_:1}),n("p",null,[a("You can define and then reference variables in "),n("code",{class:"doc-token"},"/index.html"),a(", like this:")]),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"htmlVariables"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"myVar"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some-content'"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Then, as an example:"),n(k(f),{title:"/index.html"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,`<%= myVar %>
<% if (myVar) { %>something<% } %>`)]),n(c)]),_:1}),n("p",null,"One more example:"),n(k(f),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"htmlVariables"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'test name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"some"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-prop'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Then, as an example:"),n(k(f),{title:"/index.html"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,`<%= title %>
<%= some.prop %>
<% if (some.prop) { %><%= title %><% } %>`)]),n(c)]),_:1}),n("h3",{id:"quasar-mode-specific",class:"doc-heading doc-h3",onClick:i=>k(d)("quasar-mode-specific")},"Quasar Mode Specific",8,["onClick"]),n(S,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Property"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,"cordova"),n("td",null,"Object"),n("td",null,[a("Cordova specific "),n(u,{to:"/quasar-cli-vite/developing-cordova-apps/configuring-cordova"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"capacitor"),n("td",null,"Object"),n("td",null,[a("Quasar CLI Capacitor specific "),n(u,{to:"/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"pwa"),n("td",null,"Object"),n("td",null,[a("PWA specific "),n(u,{to:"/quasar-cli-vite/developing-pwa/configuring-pwa"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"ssr"),n("td",null,"Object"),n("td",null,[a("SSR specific "),n(u,{to:"/quasar-cli-vite/developing-ssr/configuring-ssr"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"electron"),n("td",null,"Object"),n("td",null,[a("Electron specific "),n(u,{to:"/quasar-cli-vite/developing-electron-apps/configuring-electron"},{default:o(()=>[a("config")]),_:1}),a(".")])]),n("tr",null,[n("td",null,"bex"),n("td",null,"Object"),n("td",null,[a("BEX specific "),n(u,{to:"/quasar-cli-vite/developing-browser-extensions/configuring-bex"},{default:o(()=>[a("config")]),_:1}),a(".")])])])]),_:1}),n("h2",{id:"examples",class:"doc-heading doc-h2",onClick:i=>k(d)("examples")},"Examples",8,["onClick"]),n("h3",{id:"setting-env-for-dev-build",class:"doc-heading doc-h3",onClick:i=>k(d)("setting-env-for-dev-build")},"Setting env for dev/build",8,["onClick"]),n("p",null,[a("Please refer to "),n(u,{to:"/quasar-cli-vite/handling-process-env#adding-to-process-env"},{default:o(()=>[a("Adding to process.env")]),_:1}),a(" section in our docs.")]),n("h3",{id:"adding-vite-plugins",class:"doc-heading doc-h3",onClick:i=>k(d)("adding-vite-plugins")},"Adding Vite plugins",8,["onClick"]),n("p",null,[a("Please refer to the "),n(u,{to:"/quasar-cli-vite/handling-vite#adding-vite-plugins"},{default:o(()=>[a("Handling Vite")]),_:1}),a(" page.")])]}),_:1},O))}}},Q=w.setup;w.setup=(x,v)=>{const b=F();return(b.modules||(b.modules=new Set)).add("src/pages/quasar-cli-vite/quasar-config-file.md"),Q?Q(x,v):void 0};const K=R(w,[["__file","quasar-config-file.md"]]);export{K as default};
