import{resolveComponent as j,mergeProps as C,withCtx as o,unref as c,createVNode as n,createTextVNode as a,useSSRContext as L}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as m}from"./page-utils-C-QWsEHe.js";import{D as A,a as v}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as l}from"./CopyButton-l3ndfN49.js";import{_ as W}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"upgrade-guide",__ssrInlineRender:!0,setup(q){const w=[{id:"quasar-app-vite-v2-beta-",title:"2. @quasar/app-vite v2 (beta)"},{id:"a-note-to-app-extensions-owners",title:"2.1. A note to App Extensions owners",sub:!0},{id:"notable-breaking-changes",title:"2.2. Notable breaking changes",sub:!0},{id:"highlights-on-whats-new",title:"2.3. Highlights on what’s new",sub:!0},{id:"beginning-of-the-upgrade-process",title:"2.4. Beginning of the upgrade process",sub:!0},{id:"linting-ts-or-js-",title:"2.5. Linting (TS or JS)",sub:!0},{id:"spa-capacitor-cordova-modes-changes",title:"2.6. SPA / Capacitor / Cordova modes changes",sub:!0},{id:"pwa-mode-changes",title:"2.7. PWA mode changes",sub:!0},{id:"electron-mode-changes",title:"2.8. Electron mode changes",sub:!0},{id:"ssr-mode-changes",title:"2.9. SSR mode changes",sub:!0},{id:"bex-mode-changes",title:"2.10. Bex mode changes",sub:!0},{id:"other-quasar-config-file-changes",title:"2.11. Other /quasar.config file changes",sub:!0},{id:"other-considerations",title:"2.12. Other considerations",sub:!0},{id:"the-env-dotfiles-support",title:"2.13. The env dotfiles support",sub:!0}];return(b,T,E,S)=>{const g=j("q-tab-panel"),P=j("q-markup-table");T(i(A,C({title:"Upgrade Guide for Quasar CLI with Vite",desc:"(@quasar/app-vite) How to upgrade Quasar CLI with Vite from older versions to the latest one.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/upgrade-guide",toc:w},S),{default:o((M,u,h,e)=>{if(u)u(`<h2 id="quasar-app-vite-v2-beta-" class="doc-heading doc-h2"${e}>@quasar/app-vite v2 (beta)</h2><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>CLI is currently in beta</p><ul${e}><li${e}>Please help test the CLI so we can get it out of the <code class="doc-token"${e}>beta</code> status. We thank you in advance for your help!</li><li${e}>Although we do not plan on adding any further breaking changes, there is still a slight change that we will be forced to do one, based on your feedback.</li></ul></div><div class="doc-note doc-note--danger"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>All other docs pages will refer to the old @quasar/app-vite version (v1) specs. Only this page mentions (for now) about how to use the v2 beta.</p></div><h3 id="a-note-to-app-extensions-owners" class="doc-heading doc-h3"${e}>A note to App Extensions owners</h3><p${e}>You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-vite. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:</p>`),u(i(c(k),null,{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>api.compatibleWith(
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> &#39;@quasar/app-vite&#39;,
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> &#39;^1.0.0&#39;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> &#39;^1.0.0 || ^2.0.0-beta.1&#39;
</span></span>)</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`api.compatibleWith(
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` '@quasar/app-vite',
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` '^1.0.0'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` '^1.0.0 || ^2.0.0-beta.1'
`)]),a(")")])]),n(l)]}),_:1},h,e)),u(`<h3 id="notable-breaking-changes" class="doc-heading doc-h3"${e}>Notable breaking changes</h3><ul${e}><li${e}>Minimum Node.js version is now 18 (mainly due to Vite 5)</li><li${e}>We have shifted towards an ESM style for the whole Quasar project folder, so many default project files now require ESM code (although using <code class="doc-token"${e}>.cjs</code> as an extension for these files is supported, but you will most likely need to rename the extension should you not wish to change anything). One example is the <code class="doc-token"${e}>/quasar.config.js</code> file which now it’s assumed to be ESM too (so change from <code class="doc-token"${e}>.js</code> to <code class="doc-token"${e}>.cjs</code> should you still want a CommonJs file).</li><li${e}>The “test” cmd was removed due to latest updates for @quasar/testing-* packages. See `),u(i(v,{to:"https://testing.quasar.dev/packages/testing/"},{default:o((f,t,r,s)=>{if(t)t("here");else return[a("here")]}),_:1},h,e)),u(`</li><li${e}>The “clean” cmd has been re-designed. Type “quasar clean -h” in your upgraded Quasar project folder for more info.</li><li${e}>Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence.</li><li${e}>feat+refactor(app-vite): ability to run multiple modes + dev/build simultaneously (huge effort!)</li><li${e}>SSR and Electron modes now build in ESM format.</li><li${e}>Dropped support for our internal linting system (quasar.config file &gt; eslint). Should use `),u(i(v,{to:"https://vite-plugin-checker.netlify.app/"},{default:o((f,t,r,s)=>{if(t)t("vite-plugin-checker");else return[a("vite-plugin-checker")]}),_:1},h,e)),u(` instead.</li><li${e}><strong${e}>We will detail more breaking changes for each of the Quasar modes below</strong>.</li></ul><h3 id="highlights-on-whats-new" class="doc-heading doc-h3"${e}>Highlights on what’s new</h3><p${e}>Some of the work below has already been backported to the old @quasar/app-vite v1, but posting here for reader’s awareness.</p><ul${e}><li${e}>feat(app-vite): upgrade to Vite 5</li><li${e}>feat(app-vite): ability to run multiple quasar dev/build commands simultaneously (example: can run “quasar dev -m capacitor” and “quasar dev -m ssr” and “quasar dev -m capacitor -T ios” simultaneously)</li><li${e}>feat(app-vite): Better TS typings overall</li><li${e}>refactor(app-vite): port CLI to ESM format (major effort! especially to support Vite 5 and SSR)</li><li${e}>feat(app-vite): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)</li><li${e}>feat(app-vite): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)</li><li${e}>feat(app-vite): reload app if one of the imports from quasar.config file changes</li><li${e}>feat(app-vite): TS detection should keep account of quasar.config file format too (quasar.config.ts)</li><li${e}>feat(app-vite): support for SSR development with HTTPS</li><li${e}>feat(app-vite): env dotfiles support #15303</li><li${e}>feat(app-vite): New quasar.config file props: build &gt; envFolder (string) and envFiles (string[])</li><li${e}>feat(app-vite): reopen browser (if configured so) when changing app url through quasar.config file</li><li${e}>feat&amp;perf(app-vite): faster &amp; more accurate algorithm for determining node package manager to use</li><li${e}>feat(app-vite): upgrade deps</li><li${e}>feat(app-vite): remove workaround for bug in Electron 6-8 in cli templates (#15845)</li><li${e}>feat(app-vite): remove bundleWebRuntime config for Capacitor v5+</li><li${e}>feat(app-vite): use workbox v7 by default</li><li${e}>feat(app-vite): quasar.config &gt; pwa &gt; injectPwaMetaTags can now also be a function: (({ pwaManifest, publicPath }) =&gt; string);</li><li${e}>feat(app-vite): quasar.config &gt; build &gt; htmlMinifyOptions</li><li${e}>feat(app-vite): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools</li><li${e}>perf(app-vite): SSR render-template in specific esm or cjs form, according to host project; interpolation by variable</li><li${e}>perf(app-vite): only verify quasar.conf server address for “dev” cmd</li><li${e}>feat(app-vite): pick new electron inspect port for each instance</li><li${e}>feat(app-vite): Electron - can now load multiple preload scripts</li><li${e}>refactor(app-vite): AE support - better and more efficient algorithms</li><li${e}>feat(app-vite): AE support for ESM format</li><li${e}>feat(app-vite): AE support for TS format (through a build step)</li><li${e}>feat(app-vite): AE API new methods -&gt; hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()</li><li${e}>feat(app-vite): AE -&gt; Prompts API (and ability for prompts default exported fn to be async)</li><li${e}>refactor(app-vite): the “clean” cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)</li><li${e}>feat(app-vite): Support for Bun as package manager #16335</li><li${e}>feat(app-vite): for default /src-ssr template -&gt; prod ssr -&gt; on error, print err stack if built with debugging enabled</li><li${e}>feat(app-vite): extend build &gt; vitePlugins form (additional { server?: boolean, client?: boolean } param</li></ul><h3 id="beginning-of-the-upgrade-process" class="doc-heading doc-h3"${e}>Beginning of the upgrade process</h3><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>Recommendation</p><p${e}>If you are unsure that you won’t skip by mistake any of the recommended changes, you can scaffold a new project folder with the @quasar/app-vite v2 beta at any time and then easily start porting your app from there. The bulk of the changes refer to the different project folder config files and mostly NOT to your /src files. <br${e}><br${e}></p>`),u(i(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o((f,t,r,s)=>{if(t)t(i(g,{class:"q-pa-none",name:"Yarn"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>yarn</span> create quasar</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(" create quasar")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"NPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>npm</span> init quasar</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(" init quasar")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"PNPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}><span class="token comment"${p}># experimental support</span>
$ <span class="token function"${p}>pnpm</span> create quasar</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ `),n("span",{class:"token function"},"pnpm"),a(" create quasar")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"Bun"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}><span class="token comment"${p}># experimental support</span>
$ bun create quasar</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),n(l,{lang:"bash"})]}),_:1},r,s));else return[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(" create quasar")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(" init quasar")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ `),n("span",{class:"token function"},"pnpm"),a(" create quasar")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),n(l,{lang:"bash"})]),_:1})]}),_:1},h,e)),u(`<br${e}> When asked to &quot;Pick Quasar App CLI variant&quot;, answer with: &quot;Quasar App CLI with Vite 5 (BETA | next major version - v2)&quot;. </div><p${e}>Preparations:</p><ul${e}><li${e}><p${e}>If using the global installation of Quasar CLI (<code class="doc-token"${e}>@quasar/cli</code>), make sure that you have the latest one. This is due to the support of quasar.config file in multiple formats.</p></li><li${e}><p${e}>Again, we highlight that the minimum supported version of Node.js is now v18 (always use the LTS versions of Node.js - the higher the version the better).</p></li><li${e}><p${e}>Edit your <code class="doc-token"${e}>/package.json</code> on the <code class="doc-token"${e}>@quasar/app-vite</code> entry and assign it <code class="doc-token"${e}>^2.0.0-beta.1</code>:</p>`),u(i(c(k),{title:"/package.json"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>&quot;devDependencies&quot;: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> &quot;@quasar/app-vite&quot;: &quot;^1.0.0&quot;,
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> &quot;@quasar/app-vite&quot;: &quot;^2.0.0-beta.1&quot;
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`"devDependencies": {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` "@quasar/app-vite": "^1.0.0",
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "@quasar/app-vite": "^2.0.0-beta.1"
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<br${e}> Then yarn/npm/pnpm/bun install. <br${e}><br${e}></li><li${e}><p${e}>Convert your <code class="doc-token"${e}>/quasar.config.js</code> file to the ESM format (which is recommended, otherwise rename the file extension to <code class="doc-token"${e}>.cjs</code> and use CommonJs format).</p>`),u(i(c(k),{title:"/quasar.config.js file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> configure <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>configure</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token comment"${s}>/* ctx */</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* ctx */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]}),_:1},h,e)),u(`<div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>Tip on Typescript</p><p${e}>You can now write this file in TS too should you wish (rename <code class="doc-token"${e}>/quasar.config.js</code> to <code class="doc-token"${e}>/quasar.config.ts</code> – notice the <code class="doc-token"${e}>.ts</code> file extension).</p></div></li><li${e}><p${e}>We <strong${e}>highly recommend</strong> setting <code class="doc-token"${e}>type</code> to <code class="doc-token"${e}>module</code> in your <code class="doc-token"${e}>/package.json</code>. Based on it, the Quasar CLI will make decisions on the distributables that it builds (example: Electron in ESM or CJS form).</p>`),u(i(c(k),{title:"/package.json"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>{
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> &quot;type&quot;: &quot;module&quot;
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`{
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "type": "module"
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<br${e}> Rename some tools config files (in the root project folder): <br${e}><br${e}>`),u(i(P,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o((f,t,r,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Old name</th><th class="text-left"${s}>New name</th></tr></thead><tbody${s}><tr${s}><td${s}>postcss.config.js</td><td${s}>postcss.config.cjs</td></tr><tr${s}><td${s}>.eslintrc.js</td><td${s}>.eslintrc.cjs</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Old name"),n("th",{class:"text-left"},"New name")])]),n("tbody",null,[n("tr",null,[n("td",null,"postcss.config.js"),n("td",null,"postcss.config.cjs")]),n("tr",null,[n("td",null,".eslintrc.js"),n("td",null,".eslintrc.cjs")])])]}),_:1},h,e)),u(`<br${e}></li><li${e}><p${e}>You might want to add the following to your <code class="doc-token"${e}>/.gitignore</code> file. The <code class="doc-token"${e}>/quasar.config.*.temporary.compiled*</code> entry refers to files that are left for inspection purposes when something fails with your <code class="doc-token"${e}>/quasar.config</code> file (and can be removed by the <code class="doc-token"${e}>quasar clean</code> command):</p>`),u(i(c(k),{title:"/.gitignore"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>.DS_Store
.thumbs.db
node_modules

<span class="token comment"${s}># Quasar core related directories</span>
.quasar
/dist
<span class="c-line c-highlight"${s}></span>/quasar.config.*.temporary.compiled*

<span class="token comment"${s}># local .env files</span>
<span class="c-line c-highlight"${s}></span>.env.local*

<span class="token comment"${s}># Cordova related directories and files</span>
/src-cordova/node_modules
/src-cordova/platforms
/src-cordova/plugins
/src-cordova/www

<span class="token comment"${s}># Capacitor related directories and files</span>
/src-capacitor/www
/src-capacitor/node_modules

<span class="token comment"${s}># Log files</span>
npm-debug.log*
yarn-debug.log*
yarn-error.log*

<span class="token comment"${s}># Editor directories and files</span>
.idea
*.suo
*.ntvs*
*.njsproj
*.sln</code></pre>`),t(i(l,{lang:"bash"},null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`.DS_Store
.thumbs.db
node_modules

`),n("span",{class:"token comment"},"# Quasar core related directories"),a(`
.quasar
/dist
`),n("span",{class:"c-line c-highlight"}),a(`/quasar.config.*.temporary.compiled*

`),n("span",{class:"token comment"},"# local .env files"),a(`
`),n("span",{class:"c-line c-highlight"}),a(`.env.local*

`),n("span",{class:"token comment"},"# Cordova related directories and files"),a(`
/src-cordova/node_modules
/src-cordova/platforms
/src-cordova/plugins
/src-cordova/www

`),n("span",{class:"token comment"},"# Capacitor related directories and files"),a(`
/src-capacitor/www
/src-capacitor/node_modules

`),n("span",{class:"token comment"},"# Log files"),a(`
npm-debug.log*
yarn-debug.log*
yarn-error.log*

`),n("span",{class:"token comment"},"# Editor directories and files"),a(`
.idea
*.suo
*.ntvs*
*.njsproj
*.sln`)])]),n(l,{lang:"bash"})]}),_:1},h,e)),u(`<br${e}></li><li${e}><p${e}>If using Typescript, then ensure that your <code class="doc-token"${e}>/tsconfig.json</code> file looks like this:</p>`),u(i(c(k),null,{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;extends&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;@quasar/app-vite/tsconfig-preset&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;compilerOptions&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token property"${s}>&quot;baseUrl&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;.&quot;</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
<span class="c-line c-highlight"${s}></span>  <span class="token property"${s}>&quot;exclude&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
<span class="c-line c-highlight"${s}></span>    <span class="token string"${s}>&quot;./dist&quot;</span><span class="token punctuation"${s}>,</span>
<span class="c-line c-highlight"${s}></span>    <span class="token string"${s}>&quot;./.quasar&quot;</span><span class="token punctuation"${s}>,</span>
<span class="c-line c-highlight"${s}></span>    <span class="token string"${s}>&quot;./node_modules&quot;</span><span class="token punctuation"${s}>,</span>
<span class="c-line c-highlight"${s}></span>    <span class="token string"${s}>&quot;./src-capacitor&quot;</span><span class="token punctuation"${s}>,</span>
<span class="c-line c-highlight"${s}></span>    <span class="token string"${s}>&quot;./src-cordova&quot;</span><span class="token punctuation"${s}>,</span>
<span class="c-line c-highlight"${s}></span>    <span class="token string"${s}>&quot;./quasar.config.*.temporary.compiled*&quot;</span>
<span class="c-line c-highlight"${s}></span>  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"@quasar/app-vite/tsconfig-preset"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"baseUrl"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"."'),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("  "),n("span",{class:"token property"},'"exclude"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./dist"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./.quasar"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./node_modules"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./src-capacitor"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./src-cordova"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./quasar.config.*.temporary.compiled*"'),a(`
`),n("span",{class:"c-line c-highlight"}),a("  "),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},h,e)),u(`</li></ul><h3 id="linting-ts-or-js-" class="doc-heading doc-h3"${e}>Linting (TS or JS)</h3><p${e}>We dropped support for our internal linting (quasar.config file &gt; eslint) in favor of the `),u(i(v,{to:"https://vite-plugin-checker.netlify.app/"},{default:o((f,t,r,s)=>{if(t)t("vite-plugin-checker");else return[a("vite-plugin-checker")]}),_:1},h,e)),u(` package. We will detail below the changes that you need to make based on if you use TS or not.</p><h4 id="typescript-projects-linting" class="doc-heading doc-h4"${e}>Typescript projects linting</h4>`),u(i(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o((f,t,r,s)=>{if(t)t(i(g,{class:"q-pa-none",name:"Yarn"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>yarn</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"NPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>npm</span> <span class="token function"${p}>install</span> --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"PNPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>pnpm</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>-D</span> vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"Bun"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ bun <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]}),_:1},r,s));else return[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1})]}),_:1},h,e)),u(`<div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Notice the <code class="doc-token"${e}>typescript</code> dependency is &lt;= 5.3. There is currently an issue with ESLint and newer TS (5.4+). This is only a temporary thing until upstream fixes it.</p></div>`),u(i(c(k),{title:"/.eslintignore"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
<span class="c-line c-highlight"${s}></span>.eslintrc.cjs
<span class="c-line c-highlight"${s}></span>/quasar.config.*.temporary.compiled*</code></pre>`),t(i(l,{lang:"bash"},null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),a(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),a("/quasar.config.*.temporary.compiled*")])]),n(l,{lang:"bash"})]}),_:1},h,e)),u(`<p${e}>Create a new file called <code class="doc-token"${e}>tsconfig.vue-tsc.json</code> in the root of your project folder:</p>`),u(i(c(k),{title:"/tsconfig.vue-tsc.json"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;extends&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;./tsconfig.json&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;compilerOptions&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token property"${s}>&quot;skipLibCheck&quot;</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"./tsconfig.json"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"skipLibCheck"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},h,e)),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> eslint: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   // ...
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> },
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> build: {
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   vitePlugins: [
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    [&#39;vite-plugin-checker&#39;, {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       vueTsc: {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>         tsconfigPath: &#39;tsconfig.vue-tsc.json&#39;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       },
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       eslint: {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>         lintCommand: &#39;eslint &quot;./**/*.{js,ts,mjs,cjs,vue}&quot;&#39;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       }
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     }, { server: false }]
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> }</span></span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` eslint: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` },
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   vitePlugins: [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    ['vite-plugin-checker', {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       vueTsc: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         tsconfigPath: 'tsconfig.vue-tsc.json'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       },
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       eslint: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     }, { server: false }]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," }")])])]),n(l)]}),_:1},h,e)),u(`<h4 id="javascript-projects-linting" class="doc-heading doc-h4"${e}>Javascript projects linting</h4>`),u(i(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o((f,t,r,s)=>{if(t)t(i(g,{class:"q-pa-none",name:"Yarn"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>yarn</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"NPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>npm</span> <span class="token function"${p}>install</span> --save-dev vite-plugin-checker</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"PNPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>pnpm</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>-D</span> vite-plugin-checker</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"Bun"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ bun <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]}),_:1},r,s));else return[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1})]}),_:1},h,e)),u(i(c(k),{title:"/.eslintignore"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
<span class="c-line c-highlight"${s}></span>.eslintrc.cjs
<span class="c-line c-highlight"${s}></span>/quasar.config.*.temporary.compiled*</code></pre>`),t(i(l,{lang:"bash"},null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),a(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),a("/quasar.config.*.temporary.compiled*")])]),n(l,{lang:"bash"})]}),_:1},h,e)),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> eslint: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   // ...
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> },
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> build: {
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   vitePlugins: [
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    [&#39;vite-plugin-checker&#39;, {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       eslint: {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>         lintCommand: &#39;eslint &quot;./**/*.{js,mjs,cjs,vue}&quot;&#39;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       }
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     }, { server: false }]
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> }</span></span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` eslint: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` },
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   vitePlugins: [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    ['vite-plugin-checker', {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       eslint: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     }, { server: false }]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," }")])])]),n(l)]}),_:1},h,e)),u(`<h3 id="spa-capacitor-cordova-modes-changes" class="doc-heading doc-h3"${e}>SPA / Capacitor / Cordova modes changes</h3><ul${e}><li${e}>No need to change anything in the <code class="doc-token"${e}>/src</code>, <code class="doc-token"${e}>/src-capacitor</code> or <code class="doc-token"${e}>/src-cordova</code> folders.</li></ul><h3 id="pwa-mode-changes" class="doc-heading doc-h3"${e}>PWA mode changes</h3><p${e}>The <code class="doc-token"${e}>register-service-worker</code> dependency is no longer supplied by the CLI. You will have to install it yourself in your project folder.</p>`),u(i(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o((f,t,r,s)=>{if(t)t(i(g,{class:"q-pa-none",name:"Yarn"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>yarn</span> <span class="token function"${p}>add</span> register-service-worker@^1.0.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"NPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>npm</span> <span class="token function"${p}>install</span> <span class="token parameter variable"${p}>--save</span> register-service-worker@^1.0.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(),n("span",{class:"token parameter variable"},"--save"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"PNPM"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>pnpm</span> <span class="token function"${p}>add</span> register-service-worker@^1.0.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]}),_:1},r,s)),t(i(g,{class:"q-pa-none",name:"Bun"},{default:o((x,d,$,p)=>{if(d)d(`<pre class="doc-code"${p}><code${p}>$ bun <span class="token function"${p}>add</span> register-service-worker@^1.0.0</code></pre>`),d(i(l,{lang:"bash"},null,$,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]}),_:1},r,s));else return[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(),n("span",{class:"token parameter variable"},"--save"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1})]}),_:1},h,e)),u(`<p${e}>Edit your <code class="doc-token"${e}>/src-pwa/custom-service-worker.js</code> file:</p>`),u(i(c(k),{title:"/src-pwa/custom-service-worker.js"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>if (process.env.MODE !== &#39;ssr&#39; || process.env.PROD) {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> registerRoute(
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   new NavigationRoute(
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>     createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>     { denylist: [/sw\\.js$/, /workbox-(.)*\\.js$/] }
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   )
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> )
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`if (process.env.MODE !== 'ssr' || process.env.PROD) {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` registerRoute(
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   new NavigationRoute(
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     { denylist: [/sw\\.js$/, /workbox-(.)*\\.js$/] }
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   )
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` )
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<p${e}>There are some subtle changes in <code class="doc-token"${e}>/quasar.config</code> file too:</p>`),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> registerServiceWorker: &#39;src-pwa/register-service-worker&#39;,
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> serviceWorker: &#39;src-pwa/custom-service-worker&#39;,
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaRegisterServiceWorker: &#39;src-pwa/register-service-worker&#39;,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaServiceWorker: &#39;src-pwa/custom-service-worker&#39;,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaManifestFile: &#39;src-pwa/manifest.json&#39;,
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>},

pwa: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> workboxMode?: &quot;generateSW&quot; | &quot;injectManifest&quot;;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> workboxMode?: &quot;GenerateSW&quot; | &quot;InjectManifest&quot;;
</span></span>
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // useFilenameHashes: false,
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // Moved to quasar.config &gt; build &gt; useFilenameHashes
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Auto inject the PWA meta tags?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * If using the function form, return HTML tags as one single string.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default true
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> injectPwaMetaTags?: boolean;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) =&gt; string);
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // see below for the InjectPwaMetaTagsParams interface
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>}

// additional types for injectPwaMetaTags
interface InjectPwaMetaTagsParams {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> pwaManifest: PwaManifestOptions;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> publicPath: string;
</span></span>}
interface PwaManifestOptions {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> id?: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> background_color?: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> categories?: string[];
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> description?: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker: 'src-pwa/custom-service-worker',
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker: 'src-pwa/custom-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile: 'src-pwa/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`},

pwa: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxMode?: "generateSW" | "injectManifest";
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` workboxMode?: "GenerateSW" | "InjectManifest";
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // useFilenameHashes: false,
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Moved to quasar.config > build > useFilenameHashes
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto inject the PWA meta tags?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * If using the function form, return HTML tags as one single string.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // see below for the InjectPwaMetaTagsParams interface
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`}

// additional types for injectPwaMetaTags
interface InjectPwaMetaTagsParams {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwaManifest: PwaManifestOptions;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` publicPath: string;
`)]),a(`}
interface PwaManifestOptions {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` id?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` background_color?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` categories?: string[];
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` description?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<h3 id="electron-mode-changes" class="doc-heading doc-h3"${e}>Electron mode changes</h3><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The distributables (your production code) will be compiled to ESM form, thus also taking advantage of Electron in ESM form.</p></div><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>You might want to upgrade the <code class="doc-token"${e}>electron</code> package to the latest so it can handle the ESM format.</p></div><p${e}>Most changes refer to editing your <code class="doc-token"${e}>/src-electron/electron-main.js</code> file:</p>`),u(i(c(k),{title:"Icon path"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>import { fileURLToPath } from &#39;node:url&#39;
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>const currentDir = fileURLToPath(new URL(&#39;.&#39;, import.meta.url))
</span></span>
function createWindow () {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> mainWindow = new BrowserWindow({
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   icon: path.resolve(__dirname, &#39;icons/icon.png&#39;), // tray icon
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>   icon: path.resolve(currentDir, &#39;icons/icon.png&#39;), // tray icon
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   // ...
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> })</span></span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`import { fileURLToPath } from 'node:url'
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`const currentDir = fileURLToPath(new URL('.', import.meta.url))
`)]),a(`
function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(l)]}),_:1},h,e)),u(i(c(k),{title:"Preload script"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>import { fileURLToPath } from &#39;node:url&#39;

const currentDir = fileURLToPath(new URL(&#39;.&#39;, import.meta.url))

function createWindow () {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> mainWindow = new BrowserWindow({
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   // ...
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   webPreferences: {
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>     preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     preload: path.resolve(
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       currentDir,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, &#39;electron-preload&#39; + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     )
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   }
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> })</span></span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`import { fileURLToPath } from 'node:url'

const currentDir = fileURLToPath(new URL('.', import.meta.url))

function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   webPreferences: {
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     preload: path.resolve(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       currentDir,
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, 'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     )
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(l)]}),_:1},h,e)),u(`<div class="doc-note doc-note--danger"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Edit <code class="doc-token"${e}>/quasar.config.js</code> to specify your preload script: <br${e}><br${e}></p>`),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> electronPreload?: string;
</span></span>},

electron: {
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> preloadScripts: [ &#39;electron-preload&#39; ],
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`)]),a(`},

electron: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts: [ 'electron-preload' ],
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<br${e}> As you can see, you can now specify multiple preload scripts should you need them. </div>`),u(i(c(k),null,{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>function createWindow () {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  // ...
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  mainWindow.loadURL(process.env.APP_URL)
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  if (process.env.DEV) {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    mainWindow.loadURL(process.env.APP_URL)
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  } else {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    mainWindow.loadFile(&#39;index.html&#39;)
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  }</span></span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  // ...
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  mainWindow.loadURL(process.env.APP_URL)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  if (process.env.DEV) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadURL(process.env.APP_URL)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  } else {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadFile('index.html')
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},"  }")])])]),n(l)]}),_:1},h,e)),u(`<p${e}>Finally, the new file should look like this:</p>`),u(i(c(k),{title:"The new /src-electron/electron-main.js"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> app<span class="token punctuation"${s}>,</span> BrowserWindow <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;electron&#39;</span>
<span class="token keyword"${s}>import</span> path <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;node:path&#39;</span>
<span class="token keyword"${s}>import</span> os <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;node:os&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> fileURLToPath <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;node:url&#39;</span>

<span class="token comment"${s}>// needed in case process is undefined under Linux</span>
<span class="token keyword"${s}>const</span> platform <span class="token operator"${s}>=</span> process<span class="token punctuation"${s}>.</span>platform <span class="token operator"${s}>||</span> os<span class="token punctuation"${s}>.</span><span class="token function"${s}>platform</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>const</span> currentDir <span class="token operator"${s}>=</span> <span class="token function"${s}>fileURLToPath</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>new</span> <span class="token class-name"${s}>URL</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;.&#39;</span><span class="token punctuation"${s}>,</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>.</span>meta<span class="token punctuation"${s}>.</span>url<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>let</span> mainWindow

<span class="token keyword"${s}>function</span> <span class="token function"${s}>createWindow</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * Initial window options
   */</span>
  mainWindow <span class="token operator"${s}>=</span> <span class="token keyword"${s}>new</span> <span class="token class-name"${s}>BrowserWindow</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>icon</span><span class="token operator"${s}>:</span> path<span class="token punctuation"${s}>.</span><span class="token function"${s}>resolve</span><span class="token punctuation"${s}>(</span>currentDir<span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;icons/icon.png&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// tray icon</span>
    <span class="token literal-property property"${s}>width</span><span class="token operator"${s}>:</span> <span class="token number"${s}>1000</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>height</span><span class="token operator"${s}>:</span> <span class="token number"${s}>600</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>useContentSize</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>webPreferences</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>contextIsolation</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
      <span class="token comment"${s}>// More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script</span>
      <span class="token literal-property property"${s}>preload</span><span class="token operator"${s}>:</span> path<span class="token punctuation"${s}>.</span><span class="token function"${s}>resolve</span><span class="token punctuation"${s}>(</span>
        currentDir<span class="token punctuation"${s}>,</span>
        path<span class="token punctuation"${s}>.</span><span class="token function"${s}>join</span><span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>QUASAR_ELECTRON_PRELOAD_FOLDER</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;electron-preload&#39;</span> <span class="token operator"${s}>+</span> process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>QUASAR_ELECTRON_PRELOAD_EXTENSION</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>DEV</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    mainWindow<span class="token punctuation"${s}>.</span><span class="token function"${s}>loadURL</span><span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>APP_URL</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span>
    mainWindow<span class="token punctuation"${s}>.</span><span class="token function"${s}>loadFile</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;index.html&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>DEBUGGING</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// if on DEV or Production with debug enabled</span>
    mainWindow<span class="token punctuation"${s}>.</span>webContents<span class="token punctuation"${s}>.</span><span class="token function"${s}>openDevTools</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// we&#39;re on production; no access to devtools pls</span>
    mainWindow<span class="token punctuation"${s}>.</span>webContents<span class="token punctuation"${s}>.</span><span class="token function"${s}>on</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;devtools-opened&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      mainWindow<span class="token punctuation"${s}>.</span>webContents<span class="token punctuation"${s}>.</span><span class="token function"${s}>closeDevTools</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  mainWindow<span class="token punctuation"${s}>.</span><span class="token function"${s}>on</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;closed&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    mainWindow <span class="token operator"${s}>=</span> <span class="token keyword"${s}>null</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>whenReady</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>.</span><span class="token function"${s}>then</span><span class="token punctuation"${s}>(</span>createWindow<span class="token punctuation"${s}>)</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>on</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;window-all-closed&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>platform <span class="token operator"${s}>!==</span> <span class="token string"${s}>&#39;darwin&#39;</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    app<span class="token punctuation"${s}>.</span><span class="token function"${s}>quit</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>on</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;activate&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>mainWindow <span class="token operator"${s}>===</span> <span class="token keyword"${s}>null</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token function"${s}>createWindow</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'electron'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" path "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'node:path'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" os "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'node:os'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" fileURLToPath "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'node:url'"),a(`

`),n("span",{class:"token comment"},"// needed in case process is undefined under Linux"),a(`
`),n("span",{class:"token keyword"},"const"),a(" platform "),n("span",{class:"token operator"},"="),a(" process"),n("span",{class:"token punctuation"},"."),a("platform "),n("span",{class:"token operator"},"||"),a(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"platform"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" currentDir "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"fileURLToPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),a("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"let"),a(` mainWindow

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"createWindow"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * Initial window options
   */`),a(`
  mainWindow `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"BrowserWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),a("currentDir"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'icons/icon.png'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// tray icon"),a(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"600"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"useContentSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"webPreferences"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"contextIsolation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script"),a(`
      `),n("span",{class:"token literal-property property"},"preload"),n("span",{class:"token operator"},":"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),a(`
        currentDir`),n("span",{class:"token punctuation"},","),a(`
        path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_FOLDER"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'electron-preload'"),a(),n("span",{class:"token operator"},"+"),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_EXTENSION"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadURL"),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"APP_URL"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEBUGGING"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// if on DEV or Production with debug enabled"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),a("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we're on production; no access to devtools pls"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),a("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'devtools-opened'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mainWindow`),n("span",{class:"token punctuation"},"."),a("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closeDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'closed'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    mainWindow `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"null"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"whenReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),a("createWindow"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'window-all-closed'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("platform "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token string"},"'darwin'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"quit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'activate'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("mainWindow "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"createWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]}),_:1},h,e)),u(`<h3 id="ssr-mode-changes" class="doc-heading doc-h3"${e}>SSR mode changes</h3><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The distributables (your production code) will be compiled to ESM form.</p></div><p${e}>Most changes refer to editing your <code class="doc-token"${e}>/src-ssr/server.js</code> file. Since you can now use HTTPS while developing your app too, you need to make the following changes to the file:</p>`),u(i(c(k),{title:"/src-ssr/server.js"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> export const listen = ssrListen(async ({ app, port, isReady }) =&gt; {
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // notice devHttpsApp param which will be a Node httpsServer (on DEV only) and if https is enabled
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> export const listen = ssrListen(async ({ app, devHttpsApp, port, isReady }) =&gt; {
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   await isReady()
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   return app.listen(port, () =&gt; {
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>   const server = devHttpsApp || app
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>   return server.listen(port, () =&gt; {
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>     if (process.env.PROD) {
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>       console.log(&#39;Server listening at port &#39; + port)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>     }
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   })
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> })</span></span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` export const listen = ssrListen(async ({ app, port, isReady }) => {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // notice devHttpsApp param which will be a Node httpsServer (on DEV only) and if https is enabled
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` export const listen = ssrListen(async ({ app, devHttpsApp, port, isReady }) => {
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   await isReady()
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   return app.listen(port, () => {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   const server = devHttpsApp || app
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   return server.listen(port, () => {
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     if (process.env.PROD) {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`       console.log('Server listening at port ' + port)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   })
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(l)]}),_:1},h,e)),u(`<p${e}>Finally, this is how it should look like now:</p>`),u(i(c(k),{title:"/src-ssr/server.js file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> listen <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrListen</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>async</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> app<span class="token punctuation"${s}>,</span> devHttpsApp<span class="token punctuation"${s}>,</span> port<span class="token punctuation"${s}>,</span> isReady <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>await</span> <span class="token function"${s}>isReady</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token keyword"${s}>const</span> server <span class="token operator"${s}>=</span> devHttpsApp <span class="token operator"${s}>||</span> app
  <span class="token keyword"${s}>return</span> server<span class="token punctuation"${s}>.</span><span class="token function"${s}>listen</span><span class="token punctuation"${s}>(</span>port<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>PROD</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Server listening at port &#39;</span> <span class="token operator"${s}>+</span> port<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" listen "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrListen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" devHttpsApp"),n("span",{class:"token punctuation"},","),a(" port"),n("span",{class:"token punctuation"},","),a(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" server "),n("span",{class:"token operator"},"="),a(" devHttpsApp "),n("span",{class:"token operator"},"||"),a(` app
  `),n("span",{class:"token keyword"},"return"),a(" server"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),a("port"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),a(),n("span",{class:"token operator"},"+"),a(" port"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]}),_:1},h,e)),u(`<p${e}>Also, the <code class="doc-token"${e}>renderPreloadTag()</code> function can now take an additional parameter (<code class="doc-token"${e}>ssrContext</code>):</p>`),u(i(c(k),{title:"/src-ssr/server.js"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> renderPreloadTag <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrRenderPreloadTag</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>file<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> ssrContext <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" renderPreloadTag "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrRenderPreloadTag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("file"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]}),_:1},h,e)),u(`<p${e}>There are some additions to the <code class="doc-token"${e}>/quasar.config</code> file too:</p>`),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>ssr: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * When using SSR+PWA, this is the name of the
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * PWA index html file that the client-side fallbacks to.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * For production only.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Do NOT use index.html as name as it will mess SSR up!
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default &#39;offline.html&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> ssrPwaHtmlFilename?: string;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaOfflineHtmlFilename?: string;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Tell browser when a file from the server should expire from cache
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * (the default value, in ms)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Has effect only when server.static() is used
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> maxAge?: number;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend/configure the Workbox GenerateSW options
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Specify Workbox options which will be applied on top of
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  \`pwa &gt; extendGenerateSWOptions()\`.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaExtendGenerateSWOptions?: (config: object) =&gt; void;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend/configure the Workbox InjectManifest options
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Specify Workbox options which will be applied on top of
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  \`pwa &gt; extendInjectManifestOptions()\`.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaExtendInjectManifestOptions?: (config: object) =&gt; void;
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When using SSR+PWA, this is the name of the
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA index html file that the client-side fallbacks to.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * For production only.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Do NOT use index.html as name as it will mess SSR up!
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'offline.html'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrPwaHtmlFilename?: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaOfflineHtmlFilename?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Tell browser when a file from the server should expire from cache
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (the default value, in ms)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Has effect only when server.static() is used
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` maxAge?: number;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox GenerateSW options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify Workbox options which will be applied on top of
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  `pwa > extendGenerateSWOptions()`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaExtendGenerateSWOptions?: (config: object) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox InjectManifest options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify Workbox options which will be applied on top of
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  `pwa > extendInjectManifestOptions()`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaExtendInjectManifestOptions?: (config: object) => void;
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<h3 id="bex-mode-changes" class="doc-heading doc-h3"${e}>Bex mode changes</h3><p${e}>No need to change anything, however we are highlighting here an addition to the <code class="doc-token"${e}>/quasar.conf</code> file:</p>`),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> bexManifestFile: &#39;src-bex/manifest.json&#39;,
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>},</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile: 'src-bex/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a("},")])]),n(l)]}),_:1},h,e)),u(`<h3 id="other-quasar-config-file-changes" class="doc-heading doc-h3"${e}>Other /quasar.config file changes</h3><p${e}>The <code class="doc-token"${e}>ctx</code> from <code class="doc-token"${e}>/quasar.config</code> file has an additional prop (<code class="doc-token"${e}>appPaths</code>):</p>`),u(i(c(k),null,{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> configure <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>configure</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ctx.appPaths is available</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ctx.appPaths is available")])]),n(l)]}),_:1},h,e)),u(`<p${e}>The definition for <code class="doc-token"${e}>ctx.appPaths</code> is defined with QuasarAppPaths TS type as below:</p>`),u(i(c(k),null,{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>export interface IResolve {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> cli: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> app: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> src: (dir: string) =&gt; string;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> public: (dir: string) =&gt; string;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> pwa: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> ssr: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> cordova: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> capacitor: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> electron: (dir: string) =&gt; string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> bex: (dir: string) =&gt; string;
</span></span>}

export interface QuasarAppPaths {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> cliDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> appDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> srcDir: string;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> publicDir: string;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> pwaDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> ssrDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> cordovaDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> capacitorDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> electronDir: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> bexDir: string;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> quasarConfigFilename: string;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> quasarConfigInputFormat: &quot;esm&quot; | &quot;cjs&quot; | &quot;ts&quot;;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> quasarConfigOutputFormat: &quot;esm&quot; | &quot;cjs&quot;;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> resolve: IResolve;
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`export interface IResolve {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cli: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` app: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` src: (dir: string) => string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` public: (dir: string) => string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwa: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ssr: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cordova: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` capacitor: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electron: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` bex: (dir: string) => string;
`)]),a(`}

export interface QuasarAppPaths {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cliDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` appDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` srcDir: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` publicDir: string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwaDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ssrDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cordovaDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` capacitorDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electronDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` bexDir: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` quasarConfigFilename: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` quasarConfigInputFormat: "esm" | "cjs" | "ts";
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` quasarConfigOutputFormat: "esm" | "cjs";
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` resolve: IResolve;
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(i(c(k),{title:"/quasar.config > eslint"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>eslint: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Enable or disable caching of the linting results.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default true
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> cache?: boolean;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Formatter to use
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default &#39;stylish&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> formatter?: ESLint.Formatter;
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`eslint: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Enable or disable caching of the linting results.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` cache?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Formatter to use
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'stylish'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` formatter?: ESLint.Formatter;
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(i(c(k),{title:"/quasar.config > sourceFiles"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> bexManifestFile?: string;
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile?: string;
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(i(c(k),{title:"/quasar.config > framework"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>framework: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Auto import - how to detect components in your vue files
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *   &quot;kebab&quot;: q-carousel q-page
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *   &quot;pascal&quot;: QCarousel QPage
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *   &quot;combined&quot;: q-carousel QPage
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default &#39;kebab&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> autoImportComponentCase?: &quot;kebab&quot; | &quot;pascal&quot; | &quot;combined&quot;;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Auto import - which file extensions should be interpreted as referring to Vue SFC?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default [ &#39;vue&#39; ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> autoImportVueExtensions?: string[];
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Auto import - which file extensions should be interpreted as referring to script files?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default [ &#39;js&#39;, &#39;jsx&#39;, &#39;ts&#39;, &#39;tsx&#39; ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> autoImportScriptExtensions?: string[];
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Treeshake Quasar&#39;s UI on dev too?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Recommended to leave this as false for performance reasons.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default false
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> devTreeshaking?: boolean;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // was previously under /quasar.conf &gt; build
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`framework: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - how to detect components in your vue files
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "kebab": q-carousel q-page
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "pascal": QCarousel QPage
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "combined": q-carousel QPage
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'kebab'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` autoImportComponentCase?: "kebab" | "pascal" | "combined";
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - which file extensions should be interpreted as referring to Vue SFC?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'vue' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` autoImportVueExtensions?: string[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - which file extensions should be interpreted as referring to script files?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'js', 'jsx', 'ts', 'tsx' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` autoImportScriptExtensions?: string[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Treeshake Quasar's UI on dev too?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Recommended to leave this as false for performance reasons.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` devTreeshaking?: boolean;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // was previously under /quasar.conf > build
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(i(c(k),{title:"/quasar.config > build"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>build: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Treeshake Quasar&#39;s UI on dev too?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Recommended to leave this as false for performance reasons.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default false
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> devTreeshaking?: boolean;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // moved under /quasar.conf &gt; framework
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Should we invalidate the Vite and ESLint cache on startup?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default false
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> rebuildCache?: boolean;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Automatically open remote Vue Devtools when running in development mode.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> vueDevtools?: boolean;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Folder where Quasar CLI should look for .env* files.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Can be an absolute path or a relative path to project root directory.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default project root directory
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> envFolder?: string;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Additional .env* files to be loaded.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Each entry can be an absolute path or a relative path to quasar.config &gt; build &gt; envFolder.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example [&#39;.env.somefile&#39;, &#39;../.env.someotherfile&#39;]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> envFiles?: string[];
</span></span>}</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`build: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Treeshake Quasar's UI on dev too?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Recommended to leave this as false for performance reasons.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` devTreeshaking?: boolean;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // moved under /quasar.conf > framework
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should we invalidate the Vite and ESLint cache on startup?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` rebuildCache?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Automatically open remote Vue Devtools when running in development mode.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueDevtools?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Folder where Quasar CLI should look for .env* files.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Can be an absolute path or a relative path to project root directory.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default project root directory
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` envFolder?: string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Additional .env* files to be loaded.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Each entry can be an absolute path or a relative path to quasar.config > build > envFolder.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example ['.env.somefile', '../.env.someotherfile']
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` envFiles?: string[];
`)]),a("}")])]),n(l)]}),_:1},h,e)),u(`<h3 id="other-considerations" class="doc-heading doc-h3"${e}>Other considerations</h3><p${e}>You might want to upgrade/switch from <code class="doc-token"${e}>@intlify/vite-plugin-vue-i18n</code> to the newer <code class="doc-token"${e}>@intlify/unplugin-vue-i18n</code>.</p><p${e}>After removing the old package and installing the new one then update your <code class="doc-token"${e}>/quasar.config</code> file as follows:</p>`),u(i(c(k),{title:"/quasar.config"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> import path from &#39;node:path&#39;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> import { fileURLToPath } from &#39;node:url&#39;
</span></span>
export default configure((ctx) =&gt; {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> return {
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   build: {
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>     vitePlugins: [
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>       [&#39;@intlify/vite-plugin-vue-i18n&#39;, {
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>       [&#39;@intlify/unplugin-vue-i18n/vite&#39;, {
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>         include: path.resolve(__dirname, &#39;./src/i18n/**&#39;)
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>         include: [ fileURLToPath(new URL(&#39;./src/i18n&#39;, import.meta.url)) ],
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>         ssr: ctx.modeName === &#39;ssr&#39;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>       }]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>     ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   }
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> }
</span></span>})</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import path from 'node:path'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { fileURLToPath } from 'node:url'
`)]),a(`
export default configure((ctx) => {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` return {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     vitePlugins: [
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`       ['@intlify/vite-plugin-vue-i18n', {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       ['@intlify/unplugin-vue-i18n/vite', {
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`         include: path.resolve(__dirname, './src/i18n/**')
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         include: [ fileURLToPath(new URL('./src/i18n', import.meta.url)) ],
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         ssr: ctx.modeName === 'ssr'
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`       }]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` }
`)]),a("})")])]),n(l)]}),_:1},h,e)),u(`<h3 id="the-env-dotfiles-support" class="doc-heading doc-h3"${e}>The env dotfiles support</h3><p${e}>Expanding a bit on the env dotfiles support. These files will be detected and used (the order matters):</p>`),u(i(c(k),null,{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git</code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,`.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git`)]),n(l)]}),_:1},h,e)),u(`<p${e}>…where “ignored by git” assumes a default project folder created after releasing this package, otherwise add <code class="doc-token"${e}>.env.local*</code> to your <code class="doc-token"${e}>/.gitignore</code> file.</p><p${e}>You can also configure the files above to be picked up from a different folder or even add more files to the list:</p>`),u(i(c(k),{title:"/quasar.config file"},{default:o((f,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>envFolder</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;./&#39;</span> <span class="token comment"${s}>// absolute or relative path to root project folder</span>
  <span class="token literal-property property"${s}>envFiles</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token comment"${s}>// Path strings to your custom files --- absolute or relative path to root project folder</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(i(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"envFolder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'./'"),a(),n("span",{class:"token comment"},"// absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token literal-property property"},"envFiles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// Path strings to your custom files --- absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},h,e));else return[n("h2",{id:"quasar-app-vite-v2-beta-",class:"doc-heading doc-h2",onClick:f=>c(m)("quasar-app-vite-v2-beta-")},"@quasar/app-vite v2 (beta)",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"CLI is currently in beta"),n("ul",null,[n("li",null,[a("Please help test the CLI so we can get it out of the "),n("code",{class:"doc-token"},"beta"),a(" status. We thank you in advance for your help!")]),n("li",null,"Although we do not plan on adding any further breaking changes, there is still a slight change that we will be forced to do one, based on your feedback.")])]),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"All other docs pages will refer to the old @quasar/app-vite version (v1) specs. Only this page mentions (for now) about how to use the v2 beta.")]),n("h3",{id:"a-note-to-app-extensions-owners",class:"doc-heading doc-h3",onClick:f=>c(m)("a-note-to-app-extensions-owners")},"A note to App Extensions owners",8,["onClick"]),n("p",null,"You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-vite. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:"),n(c(k),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`api.compatibleWith(
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` '@quasar/app-vite',
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` '^1.0.0'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` '^1.0.0 || ^2.0.0-beta.1'
`)]),a(")")])]),n(l)]),_:1}),n("h3",{id:"notable-breaking-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("notable-breaking-changes")},"Notable breaking changes",8,["onClick"]),n("ul",null,[n("li",null,"Minimum Node.js version is now 18 (mainly due to Vite 5)"),n("li",null,[a("We have shifted towards an ESM style for the whole Quasar project folder, so many default project files now require ESM code (although using "),n("code",{class:"doc-token"},".cjs"),a(" as an extension for these files is supported, but you will most likely need to rename the extension should you not wish to change anything). One example is the "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" file which now it’s assumed to be ESM too (so change from "),n("code",{class:"doc-token"},".js"),a(" to "),n("code",{class:"doc-token"},".cjs"),a(" should you still want a CommonJs file).")]),n("li",null,[a("The “test” cmd was removed due to latest updates for @quasar/testing-* packages. See "),n(v,{to:"https://testing.quasar.dev/packages/testing/"},{default:o(()=>[a("here")]),_:1})]),n("li",null,"The “clean” cmd has been re-designed. Type “quasar clean -h” in your upgraded Quasar project folder for more info."),n("li",null,"Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence."),n("li",null,"feat+refactor(app-vite): ability to run multiple modes + dev/build simultaneously (huge effort!)"),n("li",null,"SSR and Electron modes now build in ESM format."),n("li",null,[a("Dropped support for our internal linting system (quasar.config file > eslint). Should use "),n(v,{to:"https://vite-plugin-checker.netlify.app/"},{default:o(()=>[a("vite-plugin-checker")]),_:1}),a(" instead.")]),n("li",null,[n("strong",null,"We will detail more breaking changes for each of the Quasar modes below"),a(".")])]),n("h3",{id:"highlights-on-whats-new",class:"doc-heading doc-h3",onClick:f=>c(m)("highlights-on-whats-new")},"Highlights on what’s new",8,["onClick"]),n("p",null,"Some of the work below has already been backported to the old @quasar/app-vite v1, but posting here for reader’s awareness."),n("ul",null,[n("li",null,"feat(app-vite): upgrade to Vite 5"),n("li",null,"feat(app-vite): ability to run multiple quasar dev/build commands simultaneously (example: can run “quasar dev -m capacitor” and “quasar dev -m ssr” and “quasar dev -m capacitor -T ios” simultaneously)"),n("li",null,"feat(app-vite): Better TS typings overall"),n("li",null,"refactor(app-vite): port CLI to ESM format (major effort! especially to support Vite 5 and SSR)"),n("li",null,"feat(app-vite): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)"),n("li",null,"feat(app-vite): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)"),n("li",null,"feat(app-vite): reload app if one of the imports from quasar.config file changes"),n("li",null,"feat(app-vite): TS detection should keep account of quasar.config file format too (quasar.config.ts)"),n("li",null,"feat(app-vite): support for SSR development with HTTPS"),n("li",null,"feat(app-vite): env dotfiles support #15303"),n("li",null,"feat(app-vite): New quasar.config file props: build > envFolder (string) and envFiles (string[])"),n("li",null,"feat(app-vite): reopen browser (if configured so) when changing app url through quasar.config file"),n("li",null,"feat&perf(app-vite): faster & more accurate algorithm for determining node package manager to use"),n("li",null,"feat(app-vite): upgrade deps"),n("li",null,"feat(app-vite): remove workaround for bug in Electron 6-8 in cli templates (#15845)"),n("li",null,"feat(app-vite): remove bundleWebRuntime config for Capacitor v5+"),n("li",null,"feat(app-vite): use workbox v7 by default"),n("li",null,"feat(app-vite): quasar.config > pwa > injectPwaMetaTags can now also be a function: (({ pwaManifest, publicPath }) => string);"),n("li",null,"feat(app-vite): quasar.config > build > htmlMinifyOptions"),n("li",null,"feat(app-vite): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools"),n("li",null,"perf(app-vite): SSR render-template in specific esm or cjs form, according to host project; interpolation by variable"),n("li",null,"perf(app-vite): only verify quasar.conf server address for “dev” cmd"),n("li",null,"feat(app-vite): pick new electron inspect port for each instance"),n("li",null,"feat(app-vite): Electron - can now load multiple preload scripts"),n("li",null,"refactor(app-vite): AE support - better and more efficient algorithms"),n("li",null,"feat(app-vite): AE support for ESM format"),n("li",null,"feat(app-vite): AE support for TS format (through a build step)"),n("li",null,"feat(app-vite): AE API new methods -> hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()"),n("li",null,"feat(app-vite): AE -> Prompts API (and ability for prompts default exported fn to be async)"),n("li",null,"refactor(app-vite): the “clean” cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)"),n("li",null,"feat(app-vite): Support for Bun as package manager #16335"),n("li",null,"feat(app-vite): for default /src-ssr template -> prod ssr -> on error, print err stack if built with debugging enabled"),n("li",null,"feat(app-vite): extend build > vitePlugins form (additional { server?: boolean, client?: boolean } param")]),n("h3",{id:"beginning-of-the-upgrade-process",class:"doc-heading doc-h3",onClick:f=>c(m)("beginning-of-the-upgrade-process")},"Beginning of the upgrade process",8,["onClick"]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Recommendation"),n("p",null,[a("If you are unsure that you won’t skip by mistake any of the recommended changes, you can scaffold a new project folder with the @quasar/app-vite v2 beta at any time and then easily start porting your app from there. The bulk of the changes refer to the different project folder config files and mostly NOT to your /src files. "),n("br"),n("br")]),n(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o(()=>[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(" create quasar")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(" init quasar")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ `),n("span",{class:"token function"},"pnpm"),a(" create quasar")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),n(l,{lang:"bash"})]),_:1})]),_:1}),n("br"),a(' When asked to "Pick Quasar App CLI variant", answer with: "Quasar App CLI with Vite 5 (BETA | next major version - v2)". ')]),n("p",null,"Preparations:"),n("ul",null,[n("li",null,[n("p",null,[a("If using the global installation of Quasar CLI ("),n("code",{class:"doc-token"},"@quasar/cli"),a("), make sure that you have the latest one. This is due to the support of quasar.config file in multiple formats.")])]),n("li",null,[n("p",null,"Again, we highlight that the minimum supported version of Node.js is now v18 (always use the LTS versions of Node.js - the higher the version the better).")]),n("li",null,[n("p",null,[a("Edit your "),n("code",{class:"doc-token"},"/package.json"),a(" on the "),n("code",{class:"doc-token"},"@quasar/app-vite"),a(" entry and assign it "),n("code",{class:"doc-token"},"^2.0.0-beta.1"),a(":")]),n(c(k),{title:"/package.json"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`"devDependencies": {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` "@quasar/app-vite": "^1.0.0",
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "@quasar/app-vite": "^2.0.0-beta.1"
`)]),a("}")])]),n(l)]),_:1}),n("br"),a(" Then yarn/npm/pnpm/bun install. "),n("br"),n("br")]),n("li",null,[n("p",null,[a("Convert your "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" file to the ESM format (which is recommended, otherwise rename the file extension to "),n("code",{class:"doc-token"},".cjs"),a(" and use CommonJs format).")]),n(c(k),{title:"/quasar.config.js file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* ctx */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Tip on Typescript"),n("p",null,[a("You can now write this file in TS too should you wish (rename "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" to "),n("code",{class:"doc-token"},"/quasar.config.ts"),a(" – notice the "),n("code",{class:"doc-token"},".ts"),a(" file extension).")])])]),n("li",null,[n("p",null,[a("We "),n("strong",null,"highly recommend"),a(" setting "),n("code",{class:"doc-token"},"type"),a(" to "),n("code",{class:"doc-token"},"module"),a(" in your "),n("code",{class:"doc-token"},"/package.json"),a(". Based on it, the Quasar CLI will make decisions on the distributables that it builds (example: Electron in ESM or CJS form).")]),n(c(k),{title:"/package.json"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`{
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "type": "module"
`)]),a("}")])]),n(l)]),_:1}),n("br"),a(" Rename some tools config files (in the root project folder): "),n("br"),n("br"),n(P,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Old name"),n("th",{class:"text-left"},"New name")])]),n("tbody",null,[n("tr",null,[n("td",null,"postcss.config.js"),n("td",null,"postcss.config.cjs")]),n("tr",null,[n("td",null,".eslintrc.js"),n("td",null,".eslintrc.cjs")])])]),_:1}),n("br")]),n("li",null,[n("p",null,[a("You might want to add the following to your "),n("code",{class:"doc-token"},"/.gitignore"),a(" file. The "),n("code",{class:"doc-token"},"/quasar.config.*.temporary.compiled*"),a(" entry refers to files that are left for inspection purposes when something fails with your "),n("code",{class:"doc-token"},"/quasar.config"),a(" file (and can be removed by the "),n("code",{class:"doc-token"},"quasar clean"),a(" command):")]),n(c(k),{title:"/.gitignore"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`.DS_Store
.thumbs.db
node_modules

`),n("span",{class:"token comment"},"# Quasar core related directories"),a(`
.quasar
/dist
`),n("span",{class:"c-line c-highlight"}),a(`/quasar.config.*.temporary.compiled*

`),n("span",{class:"token comment"},"# local .env files"),a(`
`),n("span",{class:"c-line c-highlight"}),a(`.env.local*

`),n("span",{class:"token comment"},"# Cordova related directories and files"),a(`
/src-cordova/node_modules
/src-cordova/platforms
/src-cordova/plugins
/src-cordova/www

`),n("span",{class:"token comment"},"# Capacitor related directories and files"),a(`
/src-capacitor/www
/src-capacitor/node_modules

`),n("span",{class:"token comment"},"# Log files"),a(`
npm-debug.log*
yarn-debug.log*
yarn-error.log*

`),n("span",{class:"token comment"},"# Editor directories and files"),a(`
.idea
*.suo
*.ntvs*
*.njsproj
*.sln`)])]),n(l,{lang:"bash"})]),_:1}),n("br")]),n("li",null,[n("p",null,[a("If using Typescript, then ensure that your "),n("code",{class:"doc-token"},"/tsconfig.json"),a(" file looks like this:")]),n(c(k),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"@quasar/app-vite/tsconfig-preset"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"baseUrl"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"."'),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("  "),n("span",{class:"token property"},'"exclude"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./dist"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./.quasar"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./node_modules"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./src-capacitor"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./src-cordova"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"c-line c-highlight"}),a("    "),n("span",{class:"token string"},'"./quasar.config.*.temporary.compiled*"'),a(`
`),n("span",{class:"c-line c-highlight"}),a("  "),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1})])]),n("h3",{id:"linting-ts-or-js-",class:"doc-heading doc-h3",onClick:f=>c(m)("linting-ts-or-js-")},"Linting (TS or JS)",8,["onClick"]),n("p",null,[a("We dropped support for our internal linting (quasar.config file > eslint) in favor of the "),n(v,{to:"https://vite-plugin-checker.netlify.app/"},{default:o(()=>[a("vite-plugin-checker")]),_:1}),a(" package. We will detail below the changes that you need to make based on if you use TS or not.")]),n("h4",{id:"typescript-projects-linting",class:"doc-heading doc-h4",onClick:f=>c(m)("typescript-projects-linting")},"Typescript projects linting",8,["onClick"]),n(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o(()=>[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(l,{lang:"bash"})]),_:1})]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Notice the "),n("code",{class:"doc-token"},"typescript"),a(" dependency is <= 5.3. There is currently an issue with ESLint and newer TS (5.4+). This is only a temporary thing until upstream fixes it.")])]),n(c(k),{title:"/.eslintignore"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),a(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),a("/quasar.config.*.temporary.compiled*")])]),n(l,{lang:"bash"})]),_:1}),n("p",null,[a("Create a new file called "),n("code",{class:"doc-token"},"tsconfig.vue-tsc.json"),a(" in the root of your project folder:")]),n(c(k),{title:"/tsconfig.vue-tsc.json"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"./tsconfig.json"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"skipLibCheck"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` eslint: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` },
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   vitePlugins: [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    ['vite-plugin-checker', {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       vueTsc: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         tsconfigPath: 'tsconfig.vue-tsc.json'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       },
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       eslint: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     }, { server: false }]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," }")])])]),n(l)]),_:1}),n("h4",{id:"javascript-projects-linting",class:"doc-heading doc-h4",onClick:f=>c(m)("javascript-projects-linting")},"Javascript projects linting",8,["onClick"]),n(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o(()=>[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(l,{lang:"bash"})]),_:1})]),_:1}),n(c(k),{title:"/.eslintignore"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),a(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),a("/quasar.config.*.temporary.compiled*")])]),n(l,{lang:"bash"})]),_:1}),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` eslint: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` },
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   vitePlugins: [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    ['vite-plugin-checker', {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       eslint: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     }, { server: false }]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," }")])])]),n(l)]),_:1}),n("h3",{id:"spa-capacitor-cordova-modes-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("spa-capacitor-cordova-modes-changes")},"SPA / Capacitor / Cordova modes changes",8,["onClick"]),n("ul",null,[n("li",null,[a("No need to change anything in the "),n("code",{class:"doc-token"},"/src"),a(", "),n("code",{class:"doc-token"},"/src-capacitor"),a(" or "),n("code",{class:"doc-token"},"/src-cordova"),a(" folders.")])]),n("h3",{id:"pwa-mode-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("pwa-mode-changes")},"PWA mode changes",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"register-service-worker"),a(" dependency is no longer supplied by the CLI. You will have to install it yourself in your project folder.")]),n(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o(()=>[n(g,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(),n("span",{class:"token parameter variable"},"--save"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(l,{lang:"bash"})]),_:1})]),_:1}),n("p",null,[a("Edit your "),n("code",{class:"doc-token"},"/src-pwa/custom-service-worker.js"),a(" file:")]),n(c(k),{title:"/src-pwa/custom-service-worker.js"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`if (process.env.MODE !== 'ssr' || process.env.PROD) {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` registerRoute(
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   new NavigationRoute(
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     { denylist: [/sw\\.js$/, /workbox-(.)*\\.js$/] }
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   )
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` )
`)]),a("}")])]),n(l)]),_:1}),n("p",null,[a("There are some subtle changes in "),n("code",{class:"doc-token"},"/quasar.config"),a(" file too:")]),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker: 'src-pwa/custom-service-worker',
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker: 'src-pwa/custom-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile: 'src-pwa/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`},

pwa: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxMode?: "generateSW" | "injectManifest";
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` workboxMode?: "GenerateSW" | "InjectManifest";
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // useFilenameHashes: false,
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Moved to quasar.config > build > useFilenameHashes
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto inject the PWA meta tags?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * If using the function form, return HTML tags as one single string.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // see below for the InjectPwaMetaTagsParams interface
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`}

// additional types for injectPwaMetaTags
interface InjectPwaMetaTagsParams {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwaManifest: PwaManifestOptions;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` publicPath: string;
`)]),a(`}
interface PwaManifestOptions {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` id?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` background_color?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` categories?: string[];
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` description?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a("}")])]),n(l)]),_:1}),n("h3",{id:"electron-mode-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("electron-mode-changes")},"Electron mode changes",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The distributables (your production code) will be compiled to ESM form, thus also taking advantage of Electron in ESM form.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("You might want to upgrade the "),n("code",{class:"doc-token"},"electron"),a(" package to the latest so it can handle the ESM format.")])]),n("p",null,[a("Most changes refer to editing your "),n("code",{class:"doc-token"},"/src-electron/electron-main.js"),a(" file:")]),n(c(k),{title:"Icon path"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`import { fileURLToPath } from 'node:url'
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`const currentDir = fileURLToPath(new URL('.', import.meta.url))
`)]),a(`
function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(l)]),_:1}),n(c(k),{title:"Preload script"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`import { fileURLToPath } from 'node:url'

const currentDir = fileURLToPath(new URL('.', import.meta.url))

function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   webPreferences: {
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     preload: path.resolve(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       currentDir,
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, 'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     )
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(l)]),_:1}),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Edit "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" to specify your preload script: "),n("br"),n("br")]),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`)]),a(`},

electron: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts: [ 'electron-preload' ],
`)]),a("}")])]),n(l)]),_:1}),n("br"),a(" As you can see, you can now specify multiple preload scripts should you need them. ")]),n(c(k),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  // ...
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  mainWindow.loadURL(process.env.APP_URL)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  if (process.env.DEV) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadURL(process.env.APP_URL)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  } else {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadFile('index.html')
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},"  }")])])]),n(l)]),_:1}),n("p",null,"Finally, the new file should look like this:"),n(c(k),{title:"The new /src-electron/electron-main.js"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'electron'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" path "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'node:path'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" os "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'node:os'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" fileURLToPath "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'node:url'"),a(`

`),n("span",{class:"token comment"},"// needed in case process is undefined under Linux"),a(`
`),n("span",{class:"token keyword"},"const"),a(" platform "),n("span",{class:"token operator"},"="),a(" process"),n("span",{class:"token punctuation"},"."),a("platform "),n("span",{class:"token operator"},"||"),a(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"platform"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" currentDir "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"fileURLToPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),a("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"let"),a(` mainWindow

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"createWindow"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * Initial window options
   */`),a(`
  mainWindow `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"BrowserWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),a("currentDir"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'icons/icon.png'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// tray icon"),a(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"600"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"useContentSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"webPreferences"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"contextIsolation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script"),a(`
      `),n("span",{class:"token literal-property property"},"preload"),n("span",{class:"token operator"},":"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),a(`
        currentDir`),n("span",{class:"token punctuation"},","),a(`
        path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_FOLDER"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'electron-preload'"),a(),n("span",{class:"token operator"},"+"),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_EXTENSION"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadURL"),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"APP_URL"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEBUGGING"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// if on DEV or Production with debug enabled"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),a("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we're on production; no access to devtools pls"),a(`
    mainWindow`),n("span",{class:"token punctuation"},"."),a("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'devtools-opened'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mainWindow`),n("span",{class:"token punctuation"},"."),a("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closeDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'closed'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    mainWindow `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"null"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"whenReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),a("createWindow"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'window-all-closed'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("platform "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token string"},"'darwin'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"quit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'activate'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("mainWindow "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"createWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]),_:1}),n("h3",{id:"ssr-mode-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("ssr-mode-changes")},"SSR mode changes",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The distributables (your production code) will be compiled to ESM form.")]),n("p",null,[a("Most changes refer to editing your "),n("code",{class:"doc-token"},"/src-ssr/server.js"),a(" file. Since you can now use HTTPS while developing your app too, you need to make the following changes to the file:")]),n(c(k),{title:"/src-ssr/server.js"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` export const listen = ssrListen(async ({ app, port, isReady }) => {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // notice devHttpsApp param which will be a Node httpsServer (on DEV only) and if https is enabled
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` export const listen = ssrListen(async ({ app, devHttpsApp, port, isReady }) => {
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   await isReady()
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   return app.listen(port, () => {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   const server = devHttpsApp || app
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   return server.listen(port, () => {
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     if (process.env.PROD) {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`       console.log('Server listening at port ' + port)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   })
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(l)]),_:1}),n("p",null,"Finally, this is how it should look like now:"),n(c(k),{title:"/src-ssr/server.js file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" listen "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrListen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" devHttpsApp"),n("span",{class:"token punctuation"},","),a(" port"),n("span",{class:"token punctuation"},","),a(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" server "),n("span",{class:"token operator"},"="),a(" devHttpsApp "),n("span",{class:"token operator"},"||"),a(` app
  `),n("span",{class:"token keyword"},"return"),a(" server"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),a("port"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),a(),n("span",{class:"token operator"},"+"),a(" port"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]),_:1}),n("p",null,[a("Also, the "),n("code",{class:"doc-token"},"renderPreloadTag()"),a(" function can now take an additional parameter ("),n("code",{class:"doc-token"},"ssrContext"),a("):")]),n(c(k),{title:"/src-ssr/server.js"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" renderPreloadTag "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrRenderPreloadTag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("file"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(l)]),_:1}),n("p",null,[a("There are some additions to the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file too:")]),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When using SSR+PWA, this is the name of the
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA index html file that the client-side fallbacks to.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * For production only.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Do NOT use index.html as name as it will mess SSR up!
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'offline.html'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrPwaHtmlFilename?: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaOfflineHtmlFilename?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Tell browser when a file from the server should expire from cache
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (the default value, in ms)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Has effect only when server.static() is used
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` maxAge?: number;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox GenerateSW options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify Workbox options which will be applied on top of
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  `pwa > extendGenerateSWOptions()`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaExtendGenerateSWOptions?: (config: object) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox InjectManifest options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify Workbox options which will be applied on top of
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  `pwa > extendInjectManifestOptions()`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaExtendInjectManifestOptions?: (config: object) => void;
`)]),a("}")])]),n(l)]),_:1}),n("h3",{id:"bex-mode-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("bex-mode-changes")},"Bex mode changes",8,["onClick"]),n("p",null,[a("No need to change anything, however we are highlighting here an addition to the "),n("code",{class:"doc-token"},"/quasar.conf"),a(" file:")]),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile: 'src-bex/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a("},")])]),n(l)]),_:1}),n("h3",{id:"other-quasar-config-file-changes",class:"doc-heading doc-h3",onClick:f=>c(m)("other-quasar-config-file-changes")},"Other /quasar.config file changes",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"ctx"),a(" from "),n("code",{class:"doc-token"},"/quasar.config"),a(" file has an additional prop ("),n("code",{class:"doc-token"},"appPaths"),a("):")]),n(c(k),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ctx.appPaths is available")])]),n(l)]),_:1}),n("p",null,[a("The definition for "),n("code",{class:"doc-token"},"ctx.appPaths"),a(" is defined with QuasarAppPaths TS type as below:")]),n(c(k),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`export interface IResolve {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cli: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` app: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` src: (dir: string) => string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` public: (dir: string) => string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwa: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ssr: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cordova: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` capacitor: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electron: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` bex: (dir: string) => string;
`)]),a(`}

export interface QuasarAppPaths {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cliDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` appDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` srcDir: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` publicDir: string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwaDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ssrDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cordovaDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` capacitorDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electronDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` bexDir: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` quasarConfigFilename: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` quasarConfigInputFormat: "esm" | "cjs" | "ts";
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` quasarConfigOutputFormat: "esm" | "cjs";
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` resolve: IResolve;
`)]),a("}")])]),n(l)]),_:1}),n(c(k),{title:"/quasar.config > eslint"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`eslint: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Enable or disable caching of the linting results.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` cache?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Formatter to use
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'stylish'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` formatter?: ESLint.Formatter;
`)]),a("}")])]),n(l)]),_:1}),n(c(k),{title:"/quasar.config > sourceFiles"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile?: string;
`)]),a("}")])]),n(l)]),_:1}),n(c(k),{title:"/quasar.config > framework"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`framework: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - how to detect components in your vue files
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "kebab": q-carousel q-page
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "pascal": QCarousel QPage
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "combined": q-carousel QPage
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'kebab'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` autoImportComponentCase?: "kebab" | "pascal" | "combined";
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - which file extensions should be interpreted as referring to Vue SFC?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'vue' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` autoImportVueExtensions?: string[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - which file extensions should be interpreted as referring to script files?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'js', 'jsx', 'ts', 'tsx' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` autoImportScriptExtensions?: string[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Treeshake Quasar's UI on dev too?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Recommended to leave this as false for performance reasons.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` devTreeshaking?: boolean;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // was previously under /quasar.conf > build
`)]),a("}")])]),n(l)]),_:1}),n(c(k),{title:"/quasar.config > build"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`build: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Treeshake Quasar's UI on dev too?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Recommended to leave this as false for performance reasons.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` devTreeshaking?: boolean;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // moved under /quasar.conf > framework
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should we invalidate the Vite and ESLint cache on startup?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` rebuildCache?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Automatically open remote Vue Devtools when running in development mode.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueDevtools?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Folder where Quasar CLI should look for .env* files.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Can be an absolute path or a relative path to project root directory.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default project root directory
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` envFolder?: string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Additional .env* files to be loaded.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Each entry can be an absolute path or a relative path to quasar.config > build > envFolder.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example ['.env.somefile', '../.env.someotherfile']
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` envFiles?: string[];
`)]),a("}")])]),n(l)]),_:1}),n("h3",{id:"other-considerations",class:"doc-heading doc-h3",onClick:f=>c(m)("other-considerations")},"Other considerations",8,["onClick"]),n("p",null,[a("You might want to upgrade/switch from "),n("code",{class:"doc-token"},"@intlify/vite-plugin-vue-i18n"),a(" to the newer "),n("code",{class:"doc-token"},"@intlify/unplugin-vue-i18n"),a(".")]),n("p",null,[a("After removing the old package and installing the new one then update your "),n("code",{class:"doc-token"},"/quasar.config"),a(" file as follows:")]),n(c(k),{title:"/quasar.config"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import path from 'node:path'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { fileURLToPath } from 'node:url'
`)]),a(`
export default configure((ctx) => {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` return {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     vitePlugins: [
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`       ['@intlify/vite-plugin-vue-i18n', {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       ['@intlify/unplugin-vue-i18n/vite', {
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`         include: path.resolve(__dirname, './src/i18n/**')
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         include: [ fileURLToPath(new URL('./src/i18n', import.meta.url)) ],
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         ssr: ctx.modeName === 'ssr'
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`       }]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` }
`)]),a("})")])]),n(l)]),_:1}),n("h3",{id:"the-env-dotfiles-support",class:"doc-heading doc-h3",onClick:f=>c(m)("the-env-dotfiles-support")},"The env dotfiles support",8,["onClick"]),n("p",null,"Expanding a bit on the env dotfiles support. These files will be detected and used (the order matters):"),n(c(k),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,`.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git`)]),n(l)]),_:1}),n("p",null,[a("…where “ignored by git” assumes a default project folder created after releasing this package, otherwise add "),n("code",{class:"doc-token"},".env.local*"),a(" to your "),n("code",{class:"doc-token"},"/.gitignore"),a(" file.")]),n("p",null,"You can also configure the files above to be picked up from a different folder or even add more files to the list:"),n(c(k),{title:"/quasar.config file"},{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"envFolder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'./'"),a(),n("span",{class:"token comment"},"// absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token literal-property property"},"envFiles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// Path strings to your custom files --- absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1})]}),_:1},E))}}},R=y.setup;y.setup=(q,w)=>{const b=L();return(b.modules||(b.modules=new Set)).add("src/pages/quasar-cli-vite/upgrade-guide.md"),R?R(q,w):void 0};const z=W(y,[["__file","upgrade-guide.md"]]);export{z as default};
