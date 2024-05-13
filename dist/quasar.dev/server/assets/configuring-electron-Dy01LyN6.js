import{mergeProps as C,withCtx as p,unref as c,createVNode as n,createTextVNode as a,useSSRContext as P}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as E,a as d}from"./DocPage-DKr-0pQn.js";import{D as g}from"./DocPrerender-DPOnWPFO.js";import{C as i}from"./CopyButton-l3ndfN49.js";import{_ as q}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"configuring-electron",__ssrInlineRender:!0,setup($){const h=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],k=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"packager-vs-builder",title:"3. Packager vs. Builder"},{id:"dependencies-optimization",title:"4. Dependencies optimization"}];return(j,w,v,x)=>{w(l(E,C({title:"Configuring Electron",desc:"(@quasar/app-vite) How to manage your Electron apps with Quasar CLI.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-electron-apps/configuring-electron",toc:k,related:h},x),{default:p((T,o,m,e)=>{if(o)o(`<p${e}>We’ll be using Quasar CLI to develop and build an Electron App. The difference between building a SPA, PWA, Mobile App or an Electron App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.</p><p${e}>But first, let’s learn how we can configure the Electron build.</p><h2 id="quasar-config-file" class="doc-heading doc-h2"${e}>quasar.config file</h2><p${e}>You may notice that the <code class="doc-token"${e}>/quasar.config</code> file contains a property called <code class="doc-token"${e}>electron</code>.</p>`),o(l(c(g),null,{default:p((r,s,u,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// should you wish to change default files</span>
<span class="token comment"${t}>// (notice no extension, so it resolves to both .js and .ts)</span>
<span class="token literal-property property"${t}>sourceFiles</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>electronMain</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;src-electron/electron-main&#39;</span><span class="token punctuation"${t}>,</span>
  <span class="token literal-property property"${t}>electronPreload</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;src-electron/electron-preload&#39;</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

<span class="token comment"${t}>// electron configuration</span>
<span class="token literal-property property"${t}>electron</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// specify the debugging port to use for the Electron app when running in development mode</span>
  <span class="token literal-property property"${t}>inspectPort</span><span class="token operator"${t}>:</span> <span class="token number"${t}>5858</span><span class="token punctuation"${t}>,</span>

  <span class="token literal-property property"${t}>bundler</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;packager&#39;</span><span class="token punctuation"${t}>,</span> <span class="token comment"${t}>// or &#39;builder&#39;</span>

  <span class="token comment"${t}>// electron-packager options</span>
  <span class="token comment"${t}>// https://electron.github.io/electron-packager/main/</span>
  <span class="token literal-property property"${t}>packager</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>//...</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// electron-builder options</span>
  <span class="token comment"${t}>// https://www.electron.build/configuration/configuration</span>
  <span class="token literal-property property"${t}>builder</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>//...</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// Specify additional parameters when yarn/npm installing</span>
  <span class="token comment"${t}>// the UnPackaged folder, right before bundling with either</span>
  <span class="token comment"${t}>// electron packager or electron builder;</span>
  <span class="token comment"${t}>// Example: [ &#39;install&#39;, &#39;--production&#39;, &#39;--ignore-optional&#39;, &#39;--some-other-param&#39; ]</span>
  <span class="token literal-property property"${t}>unPackagedInstallParams</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span><span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// optional; add/remove/change properties</span>
  <span class="token comment"${t}>// of production generated package.json</span>
  <span class="token function"${t}>extendPackageJson</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>pkg</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// directly change props of pkg;</span>
    <span class="token comment"${t}>// no need to return anything</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token function"${t}>extendElectronMainConf</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>cfg</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// do something with Esbuild config</span>
    <span class="token comment"${t}>// for the Electron Main thread</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token function"${t}>extendElectronPreloadConf</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>cfg</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// do something with Esbuild config</span>
    <span class="token comment"${t}>// for the Electron Preload thread</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),s(l(i,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// should you wish to change default files"),a(`
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

  `),n("span",{class:"token function"},"extendElectronMainConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something with Esbuild config"),a(`
    `),n("span",{class:"token comment"},"// for the Electron Main thread"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"extendElectronPreloadConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something with Esbuild config"),a(`
    `),n("span",{class:"token comment"},"// for the Electron Preload thread"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},m,e)),o(`<p${e}>The “packager” prop refers to `),o(l(d,{to:"https://electron.github.io/electron-packager/main/"},{default:p((r,s,u,t)=>{if(s)s("electron-packager options");else return[a("electron-packager options")]}),_:1},m,e)),o(`. The <code class="doc-token"${e}>dir</code> and <code class="doc-token"${e}>out</code> properties are overwritten by Quasar CLI to ensure the best results.</p><p${e}>The “builder” prop refers to `),o(l(d,{to:"https://www.electron.build/configuration/configuration"},{default:p((r,s,u,t)=>{if(s)s("electron-builder options");else return[a("electron-builder options")]}),_:1},m,e)),o(`.</p><p${e}>Should you want to tamper with the “Renderer” thread (UI in /src) Vite config:</p>`),o(l(c(g),{title:"/quasar.config file"},{default:p((r,s,u,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}>module<span class="token punctuation"${t}>.</span><span class="token function-variable function"${t}>exports</span> <span class="token operator"${t}>=</span> <span class="token keyword"${t}>function</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>ctx</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>build</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
      <span class="token function"${t}>extendViteConf</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>viteConf</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
        <span class="token keyword"${t}>if</span> <span class="token punctuation"${t}>(</span>ctx<span class="token punctuation"${t}>.</span>mode<span class="token punctuation"${t}>.</span>electron<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
          <span class="token comment"${t}>// do something with ViteConf</span>
        <span class="token punctuation"${t}>}</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),s(l(i,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"viteConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("electron"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},m,e)),o(`<h2 id="packager-vs-builder" class="doc-heading doc-h2"${e}>Packager vs. Builder</h2><p${e}>You have to choose to use either packager or builder. They are both excellent open-source projects, however they serve slightly different needs. With packager you will be able to build unsigned projects for all major platforms from one machine (with restrictions). Although this is great, if you just want something quick and dirty, there is more platform granularity (and general polish) in builder. Cross-compiling your binaries from one computer doesn’t really work with builder (or we haven’t found the recipe yet…)</p><h2 id="dependencies-optimization" class="doc-heading doc-h2"${e}>Dependencies optimization</h2><p${e}>By default, all <code class="doc-token"${e}>dependencies</code> from your root <code class="doc-token"${e}>package.json</code> file get installed and embedded into the production executable.</p><p${e}>This means that it will also include your UI-only deps, which are already bundled in the UI files (so it will duplicate them). From our CLI perspective, we don’t have any generic way of telling whether a dependency is UI only or if it’s used by the main/preload scripts, so we cannot reliably auto-remove them.</p><p${e}>However, you can do this by using quasar.conf &gt; electron &gt; extendPackageJson(pkg) and overwriting or tampering with the <code class="doc-token"${e}>dependencies</code> key from your <code class="doc-token"${e}>package.json</code> file. If you leave only the main &amp; preload threads depdendencies then this will lead to a smaller production executable file.</p>`);else return[n("p",null,"We’ll be using Quasar CLI to develop and build an Electron App. The difference between building a SPA, PWA, Mobile App or an Electron App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands."),n("p",null,"But first, let’s learn how we can configure the Electron build."),n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:r=>c(f)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,[a("You may notice that the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file contains a property called "),n("code",{class:"doc-token"},"electron"),a(".")]),n(c(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// should you wish to change default files"),a(`
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

  `),n("span",{class:"token function"},"extendElectronMainConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something with Esbuild config"),a(`
    `),n("span",{class:"token comment"},"// for the Electron Main thread"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"extendElectronPreloadConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something with Esbuild config"),a(`
    `),n("span",{class:"token comment"},"// for the Electron Preload thread"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1}),n("p",null,[a("The “packager” prop refers to "),n(d,{to:"https://electron.github.io/electron-packager/main/"},{default:p(()=>[a("electron-packager options")]),_:1}),a(". The "),n("code",{class:"doc-token"},"dir"),a(" and "),n("code",{class:"doc-token"},"out"),a(" properties are overwritten by Quasar CLI to ensure the best results.")]),n("p",null,[a("The “builder” prop refers to "),n(d,{to:"https://www.electron.build/configuration/configuration"},{default:p(()=>[a("electron-builder options")]),_:1}),a(".")]),n("p",null,"Should you want to tamper with the “Renderer” thread (UI in /src) Vite config:"),n(c(g),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"viteConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("electron"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1}),n("h2",{id:"packager-vs-builder",class:"doc-heading doc-h2",onClick:r=>c(f)("packager-vs-builder")},"Packager vs. Builder",8,["onClick"]),n("p",null,"You have to choose to use either packager or builder. They are both excellent open-source projects, however they serve slightly different needs. With packager you will be able to build unsigned projects for all major platforms from one machine (with restrictions). Although this is great, if you just want something quick and dirty, there is more platform granularity (and general polish) in builder. Cross-compiling your binaries from one computer doesn’t really work with builder (or we haven’t found the recipe yet…)"),n("h2",{id:"dependencies-optimization",class:"doc-heading doc-h2",onClick:r=>c(f)("dependencies-optimization")},"Dependencies optimization",8,["onClick"]),n("p",null,[a("By default, all "),n("code",{class:"doc-token"},"dependencies"),a(" from your root "),n("code",{class:"doc-token"},"package.json"),a(" file get installed and embedded into the production executable.")]),n("p",null,"This means that it will also include your UI-only deps, which are already bundled in the UI files (so it will duplicate them). From our CLI perspective, we don’t have any generic way of telling whether a dependency is UI only or if it’s used by the main/preload scripts, so we cannot reliably auto-remove them."),n("p",null,[a("However, you can do this by using quasar.conf > electron > extendPackageJson(pkg) and overwriting or tampering with the "),n("code",{class:"doc-token"},"dependencies"),a(" key from your "),n("code",{class:"doc-token"},"package.json"),a(" file. If you leave only the main & preload threads depdendencies then this will lead to a smaller production executable file.")])]}),_:1},v))}}},b=y.setup;y.setup=($,h)=>{const k=P();return(k.modules||(k.modules=new Set)).add("src/pages/quasar-cli-vite/developing-electron-apps/configuring-electron.md"),b?b($,h):void 0};const H=q(y,[["__file","configuring-electron.md"]]);export{H as default};
