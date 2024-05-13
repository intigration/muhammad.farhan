import{mergeProps as x,withCtx as c,unref as l,createVNode as n,createTextVNode as a,useSSRContext as j}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as d}from"./page-utils-C-QWsEHe.js";import{D as L,a as u}from"./DocPage-DKr-0pQn.js";import{D as y}from"./DocPrerender-DPOnWPFO.js";import{C as h}from"./CopyButton-l3ndfN49.js";import{_ as E}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"configuring-electron",__ssrInlineRender:!0,setup(b){const k=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],i=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"packager-vs-builder",title:"3. Packager vs. Builder"},{id:"dependencies-optimization",title:"4. Dependencies optimization"}];return(W,w,P,v)=>{w(r(L,x({title:"Configuring Electron",desc:"(@quasar/app-webpack) How to manage your Electron apps with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-electron-apps/configuring-electron",toc:i,related:k},v),{default:c((q,o,m,t)=>{if(o)o(`<p${t}>We’ll be using Quasar CLI to develop and build an Electron App. The difference between building a SPA, PWA, Mobile App or an Electron App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.</p><p${t}>But first, let’s learn how we can configure the Electron build.</p><h2 id="quasar-config-file" class="doc-heading doc-h2"${t}>quasar.config file</h2><p${t}>You may notice that the <code class="doc-token"${t}>/quasar.config</code> file contains a property called <code class="doc-token"${t}>electron</code>.</p>`),o(r(l(y),null,{default:c((p,s,g,e)=>{if(s)s(`<pre class="doc-code"${e}><code${e}><span class="token comment"${e}>// should you wish to change default files</span>
<span class="token comment"${e}>// (notice no extension, so it resolves to both .js and .ts)</span>
<span class="token literal-property property"${e}>sourceFiles</span><span class="token operator"${e}>:</span> <span class="token punctuation"${e}>{</span>
  <span class="token literal-property property"${e}>electronMain</span><span class="token operator"${e}>:</span> <span class="token string"${e}>&#39;src-electron/electron-main&#39;</span><span class="token punctuation"${e}>,</span>
  <span class="token literal-property property"${e}>electronPreload</span><span class="token operator"${e}>:</span> <span class="token string"${e}>&#39;src-electron/electron-preload&#39;</span>
<span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

<span class="token comment"${e}>// electron configuration</span>
<span class="token literal-property property"${e}>electron</span><span class="token operator"${e}>:</span> <span class="token punctuation"${e}>{</span>
  <span class="token comment"${e}>// specify the debugging port to use for the Electron app when running in development mode</span>
  <span class="token literal-property property"${e}>inspectPort</span><span class="token operator"${e}>:</span> <span class="token number"${e}>5858</span><span class="token punctuation"${e}>,</span>

  <span class="token literal-property property"${e}>bundler</span><span class="token operator"${e}>:</span> <span class="token string"${e}>&#39;packager&#39;</span><span class="token punctuation"${e}>,</span> <span class="token comment"${e}>// or &#39;builder&#39;</span>

  <span class="token comment"${e}>// electron-packager options</span>
  <span class="token comment"${e}>// https://electron.github.io/electron-packager/main/</span>
  <span class="token literal-property property"${e}>packager</span><span class="token operator"${e}>:</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>//...</span>
  <span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// electron-builder options</span>
  <span class="token comment"${e}>// https://www.electron.build/configuration/configuration</span>
  <span class="token literal-property property"${e}>builder</span><span class="token operator"${e}>:</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>//...</span>
  <span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// Specify additional parameters when yarn/npm installing</span>
  <span class="token comment"${e}>// the UnPackaged folder, right before bundling with either</span>
  <span class="token comment"${e}>// electron packager or electron builder;</span>
  <span class="token comment"${e}>// Example: [ &#39;install&#39;, &#39;--production&#39;, &#39;--ignore-optional&#39;, &#39;--some-other-param&#39; ]</span>
  <span class="token literal-property property"${e}>unPackagedInstallParams</span><span class="token operator"${e}>:</span> <span class="token punctuation"${e}>[</span><span class="token punctuation"${e}>]</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// optional; add/remove/change properties</span>
  <span class="token comment"${e}>// of production generated package.json</span>
  <span class="token function"${e}>extendPackageJson</span> <span class="token punctuation"${e}>(</span><span class="token parameter"${e}>pkg</span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>// directly change props of pkg;</span>
    <span class="token comment"${e}>// no need to return anything</span>
  <span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// optional; webpack config Object for</span>
  <span class="token comment"${e}>// the Main Process ONLY (/src-electron/main-process/electron-main.js)</span>
  <span class="token function"${e}>extendWebpackMain</span> <span class="token punctuation"${e}>(</span><span class="token parameter"${e}>cfg</span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>// directly change props of cfg;</span>
    <span class="token comment"${e}>// no need to return anything</span>
  <span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// optional; EQUIVALENT to extendWebpackMain() but uses webpack-chain;</span>
  <span class="token comment"${e}>// for the Main Process ONLY (/src-electron/main-process/electron-main.js)</span>
  <span class="token function"${e}>chainWebpackMain</span> <span class="token punctuation"${e}>(</span><span class="token parameter"${e}>chain</span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>// chain is a webpack-chain instance</span>
    <span class="token comment"${e}>// of the Webpack configuration</span>

    <span class="token comment"${e}>// example:</span>
    <span class="token comment"${e}>// chain.plugin(&#39;eslint-webpack-plugin&#39;)</span>
    <span class="token comment"${e}>//   .use(ESLintPlugin, [{ extensions: [ &#39;js&#39; ] }])</span>
  <span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// optional; webpack config Object for</span>
  <span class="token comment"${e}>// the Preload Process ONLY (/src-electron/main-process/electron-preload.js)</span>
  <span class="token function"${e}>extendWebpackPreload</span> <span class="token punctuation"${e}>(</span><span class="token parameter"${e}>cfg</span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>// directly change props of cfg;</span>
    <span class="token comment"${e}>// no need to return anything</span>
  <span class="token punctuation"${e}>}</span><span class="token punctuation"${e}>,</span>

  <span class="token comment"${e}>// optional; EQUIVALENT to extendWebpackPreload() but uses webpack-chain;</span>
  <span class="token comment"${e}>// for the Preload Process ONLY (/src-electron/main-process/electron-preload.js)</span>
  <span class="token function"${e}>chainWebpackPreload</span> <span class="token punctuation"${e}>(</span><span class="token parameter"${e}>chain</span><span class="token punctuation"${e}>)</span> <span class="token punctuation"${e}>{</span>
    <span class="token comment"${e}>// chain is a webpack-chain instance</span>
    <span class="token comment"${e}>// of the Webpack configuration</span>

    <span class="token comment"${e}>// example:</span>
    <span class="token comment"${e}>// chain.plugin(&#39;eslint-webpack-plugin&#39;)</span>
    <span class="token comment"${e}>//   .use(ESLintPlugin, [{ extensions: [ &#39;js&#39; ] }])</span>
  <span class="token punctuation"${e}>}</span>
<span class="token punctuation"${e}>}</span></code></pre>`),s(r(h,null,null,g,e));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// should you wish to change default files"),a(`
`),n("span",{class:"token comment"},"// (notice no extension, so it resolves to both .js and .ts)"),a(`
`),n("span",{class:"token literal-property property"},"sourceFiles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"electronMain"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'src-electron/electron-main'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"electronPreload"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'src-electron/electron-preload'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token comment"},"// electron configuration"),a(`
`),n("span",{class:"token literal-property property"},"electron"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// specify the debugging port to use for the Electron app when running in development mode"),a(`
  `),n("span",{class:"token literal-property property"},"inspectPort"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5858"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"bundler"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'packager'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// or 'builder'"),a(`

  `),n("span",{class:"token comment"},"// electron-packager options"),a(`
  `),n("span",{class:"token comment"},"// https://electron.github.io/electron-packager/main/"),a(`
  `),n("span",{class:"token literal-property property"},"packager"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// electron-builder options"),a(`
  `),n("span",{class:"token comment"},"// https://www.electron.build/configuration/configuration"),a(`
  `),n("span",{class:"token literal-property property"},"builder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// Specify additional parameters when yarn/npm installing"),a(`
  `),n("span",{class:"token comment"},"// the UnPackaged folder, right before bundling with either"),a(`
  `),n("span",{class:"token comment"},"// electron packager or electron builder;"),a(`
  `),n("span",{class:"token comment"},"// Example: [ 'install', '--production', '--ignore-optional', '--some-other-param' ]"),a(`
  `),n("span",{class:"token literal-property property"},"unPackagedInstallParams"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; add/remove/change properties"),a(`
  `),n("span",{class:"token comment"},"// of production generated package.json"),a(`
  `),n("span",{class:"token function"},"extendPackageJson"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of pkg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
  `),n("span",{class:"token comment"},"// the Main Process ONLY (/src-electron/main-process/electron-main.js)"),a(`
  `),n("span",{class:"token function"},"extendWebpackMain"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackMain() but uses webpack-chain;"),a(`
  `),n("span",{class:"token comment"},"// for the Main Process ONLY (/src-electron/main-process/electron-main.js)"),a(`
  `),n("span",{class:"token function"},"chainWebpackMain"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`

    `),n("span",{class:"token comment"},"// example:"),a(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),a(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
  `),n("span",{class:"token comment"},"// the Preload Process ONLY (/src-electron/main-process/electron-preload.js)"),a(`
  `),n("span",{class:"token function"},"extendWebpackPreload"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackPreload() but uses webpack-chain;"),a(`
  `),n("span",{class:"token comment"},"// for the Preload Process ONLY (/src-electron/main-process/electron-preload.js)"),a(`
  `),n("span",{class:"token function"},"chainWebpackPreload"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`

    `),n("span",{class:"token comment"},"// example:"),a(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),a(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(h)]}),_:1},m,t)),o(`<p${t}>The “packager” prop refers to `),o(r(u,{to:"https://electron.github.io/electron-packager/main/"},{default:c((p,s,g,e)=>{if(s)s("electron-packager options");else return[a("electron-packager options")]}),_:1},m,t)),o(`. The <code class="doc-token"${t}>dir</code> and <code class="doc-token"${t}>out</code> properties are overwritten by Quasar CLI to ensure the best results.</p><p${t}>The “builder” prop refers to `),o(r(u,{to:"https://www.electron.build/configuration/configuration"},{default:c((p,s,g,e)=>{if(s)s("electron-builder options");else return[a("electron-builder options")]}),_:1},m,t)),o(`.</p><h2 id="packager-vs-builder" class="doc-heading doc-h2"${t}>Packager vs. Builder</h2><p${t}>You have to choose to use either packager or builder. They are both excellent open-source projects, however they serve slightly different needs. With packager you will be able to build unsigned projects for all major platforms from one machine (with restrictions). Although this is great, if you just want something quick and dirty, there is more platform granularity (and general polish) in builder. Cross-compiling your binaries from one computer doesn’t really work with builder (or we haven’t found the recipe yet…)</p><h2 id="dependencies-optimization" class="doc-heading doc-h2"${t}>Dependencies optimization</h2><p${t}>By default, all <code class="doc-token"${t}>dependencies</code> from your root <code class="doc-token"${t}>package.json</code> file get installed and embedded into the production executable.</p><p${t}>This means that it will also include your UI-only deps, which are already bundled in the UI files (so it will duplicate them). From our CLI perspective, we don’t have any generic way of telling whether a dependency is UI only or if it’s used by the main/preload scripts, so we cannot reliably auto-remove them.</p><p${t}>However, you can do this by using quasar.conf &gt; electron &gt; extendPackageJson(pkg) and overwriting or tampering with the <code class="doc-token"${t}>dependencies</code> key from your <code class="doc-token"${t}>package.json</code> file. If you leave only the main &amp; preload threads depdendencies then this will lead to a smaller production executable file.</p>`);else return[n("p",null,"We’ll be using Quasar CLI to develop and build an Electron App. The difference between building a SPA, PWA, Mobile App or an Electron App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands."),n("p",null,"But first, let’s learn how we can configure the Electron build."),n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:p=>l(d)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,[a("You may notice that the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file contains a property called "),n("code",{class:"doc-token"},"electron"),a(".")]),n(l(y),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// should you wish to change default files"),a(`
`),n("span",{class:"token comment"},"// (notice no extension, so it resolves to both .js and .ts)"),a(`
`),n("span",{class:"token literal-property property"},"sourceFiles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"electronMain"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'src-electron/electron-main'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"electronPreload"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'src-electron/electron-preload'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token comment"},"// electron configuration"),a(`
`),n("span",{class:"token literal-property property"},"electron"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// specify the debugging port to use for the Electron app when running in development mode"),a(`
  `),n("span",{class:"token literal-property property"},"inspectPort"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5858"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"bundler"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'packager'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// or 'builder'"),a(`

  `),n("span",{class:"token comment"},"// electron-packager options"),a(`
  `),n("span",{class:"token comment"},"// https://electron.github.io/electron-packager/main/"),a(`
  `),n("span",{class:"token literal-property property"},"packager"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// electron-builder options"),a(`
  `),n("span",{class:"token comment"},"// https://www.electron.build/configuration/configuration"),a(`
  `),n("span",{class:"token literal-property property"},"builder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// Specify additional parameters when yarn/npm installing"),a(`
  `),n("span",{class:"token comment"},"// the UnPackaged folder, right before bundling with either"),a(`
  `),n("span",{class:"token comment"},"// electron packager or electron builder;"),a(`
  `),n("span",{class:"token comment"},"// Example: [ 'install', '--production', '--ignore-optional', '--some-other-param' ]"),a(`
  `),n("span",{class:"token literal-property property"},"unPackagedInstallParams"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; add/remove/change properties"),a(`
  `),n("span",{class:"token comment"},"// of production generated package.json"),a(`
  `),n("span",{class:"token function"},"extendPackageJson"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of pkg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
  `),n("span",{class:"token comment"},"// the Main Process ONLY (/src-electron/main-process/electron-main.js)"),a(`
  `),n("span",{class:"token function"},"extendWebpackMain"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackMain() but uses webpack-chain;"),a(`
  `),n("span",{class:"token comment"},"// for the Main Process ONLY (/src-electron/main-process/electron-main.js)"),a(`
  `),n("span",{class:"token function"},"chainWebpackMain"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`

    `),n("span",{class:"token comment"},"// example:"),a(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),a(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),a(`
  `),n("span",{class:"token comment"},"// the Preload Process ONLY (/src-electron/main-process/electron-preload.js)"),a(`
  `),n("span",{class:"token function"},"extendWebpackPreload"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),a(`
    `),n("span",{class:"token comment"},"// no need to return anything"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackPreload() but uses webpack-chain;"),a(`
  `),n("span",{class:"token comment"},"// for the Preload Process ONLY (/src-electron/main-process/electron-preload.js)"),a(`
  `),n("span",{class:"token function"},"chainWebpackPreload"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),a(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),a(`

    `),n("span",{class:"token comment"},"// example:"),a(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),a(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(h)]),_:1}),n("p",null,[a("The “packager” prop refers to "),n(u,{to:"https://electron.github.io/electron-packager/main/"},{default:c(()=>[a("electron-packager options")]),_:1}),a(". The "),n("code",{class:"doc-token"},"dir"),a(" and "),n("code",{class:"doc-token"},"out"),a(" properties are overwritten by Quasar CLI to ensure the best results.")]),n("p",null,[a("The “builder” prop refers to "),n(u,{to:"https://www.electron.build/configuration/configuration"},{default:c(()=>[a("electron-builder options")]),_:1}),a(".")]),n("h2",{id:"packager-vs-builder",class:"doc-heading doc-h2",onClick:p=>l(d)("packager-vs-builder")},"Packager vs. Builder",8,["onClick"]),n("p",null,"You have to choose to use either packager or builder. They are both excellent open-source projects, however they serve slightly different needs. With packager you will be able to build unsigned projects for all major platforms from one machine (with restrictions). Although this is great, if you just want something quick and dirty, there is more platform granularity (and general polish) in builder. Cross-compiling your binaries from one computer doesn’t really work with builder (or we haven’t found the recipe yet…)"),n("h2",{id:"dependencies-optimization",class:"doc-heading doc-h2",onClick:p=>l(d)("dependencies-optimization")},"Dependencies optimization",8,["onClick"]),n("p",null,[a("By default, all "),n("code",{class:"doc-token"},"dependencies"),a(" from your root "),n("code",{class:"doc-token"},"package.json"),a(" file get installed and embedded into the production executable.")]),n("p",null,"This means that it will also include your UI-only deps, which are already bundled in the UI files (so it will duplicate them). From our CLI perspective, we don’t have any generic way of telling whether a dependency is UI only or if it’s used by the main/preload scripts, so we cannot reliably auto-remove them."),n("p",null,[a("However, you can do this by using quasar.conf > electron > extendPackageJson(pkg) and overwriting or tampering with the "),n("code",{class:"doc-token"},"dependencies"),a(" key from your "),n("code",{class:"doc-token"},"package.json"),a(" file. If you leave only the main & preload threads depdendencies then this will lead to a smaller production executable file.")])]}),_:1},P))}}},$=f.setup;f.setup=(b,k)=>{const i=j();return(i.modules||(i.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-electron-apps/configuring-electron.md"),$?$(b,k):void 0};const F=E(f,[["__file","configuring-electron.md"]]);export{F as default};
