import{resolveComponent as E,mergeProps as C,withCtx as l,unref as i,createVNode as n,createTextVNode as a,useSSRContext as M}from"vue";import{ssrRenderComponent as p}from"vue/server-renderer";import{c as x}from"./page-utils-C-QWsEHe.js";import{D as O,a as W}from"./DocPage-DKr-0pQn.js";import{D as b}from"./DocTree-Kz2iQlb5.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as A}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"upgrade-guide",__ssrInlineRender:!0,setup(q){const y=[{id:"quasar-app-webpack-v4-beta-",title:"2. @quasar/app-webpack v4 (beta)"},{id:"a-note-to-app-extensions-owners",title:"2.1. A note to App Extensions owners",sub:!0},{id:"notable-breaking-changes",title:"2.2. Notable breaking changes",sub:!0},{id:"highlights-on-whats-new",title:"2.3. Highlights on what’s new",sub:!0},{id:"beginning-of-the-upgrade-process",title:"2.4. Beginning of the upgrade process",sub:!0},{id:"spa-capacitor-cordova-modes-changes",title:"2.5. SPA / Capacitor / Cordova modes changes",sub:!0},{id:"pwa-mode-changes",title:"2.6. PWA mode changes",sub:!0},{id:"electron-mode-changes",title:"2.7. Electron mode changes",sub:!0},{id:"ssr-mode-changes",title:"2.8. SSR mode changes",sub:!0},{id:"bex-mode-changes",title:"2.9. Bex mode changes",sub:!0},{id:"other-quasar-config-file-changes",title:"2.10. Other /quasar.config file changes",sub:!0},{id:"the-env-dotfiles-support",title:"2.11. The env dotfiles support",sub:!0}],m={oldBexTree:{l:"src-bex",c:[{l:"css",e:"CSS to use in the Browser Context",c:[{l:"content-css.css",e:"CSS file which is auto injected into the consuming webpage via the manifest.json"}]},{l:"icons",e:"Icons of your app for all platforms",c:[{l:"icon-16x16.png ",e:"Icon file at 16px x 16px"},{l:"icon-48x48.png",e:"Icon file at 48px x 48px"},{l:"icon-128x128.png",e:"Icon file at 128px x 128px"}]},{l:"js",e:"Javascript files used within the context of the BEX.",c:[{l:"background.js",e:"Standard background script BEX file - auto injected via manifest.json"},{l:"background-hooks.js",e:"Background script with a hook into the BEX communication layer"},{l:"content-hooks.js",e:"Content script script with a hook into the BEX communication layer"},{l:"content-script.js",e:"Standard content script BEX file - auto injected via manifest.json"},{l:"dom-hooks.js",e:"JS file which is injected into the DOM with a hook into the BEX communication layer"}]},{l:"www/",e:"Compiled BEX source - compiled from /src (Quasar app)"},{l:"manifest.json",e:"Main thread code for production"}]},newBexTree:{l:"src-bex",c:[{l:"assets",c:[{l:"content.css",e:"CSS file which is auto injected into the consuming webpage via the manifest.json"}]},{l:"background.js",e:"Standard background script BEX file (auto injected via manifest.json)"},{l:"dom.js",e:"JS file which is injected into the DOM with a hook into the BEX communication layer"},{l:"icons",e:"Icons of your app for all platforms",c:[{l:"icon-128x128.png ",e:"Icon file at 128px x 128px"},{l:"icon-16x16.png",e:"Icon file at 16px x 16px"},{l:"icon-48x48.png",e:"Icon file at 48px x 48px"}]},{l:"_locales/",e:"Optional BEX locales files that you might define in manifest"},{l:"manifest.json",e:"The browser extension manifest file"},{l:"my-content-script.js",e:"Standard content script BEX file - auto injected via manifest.json (you can have multiple scripts)"}]}};return(L,P,T,R)=>{const h=E("q-tab-panel"),S=E("q-markup-table");P(p(O,C({title:"Upgrade Guide for Quasar CLI with Vite",desc:"(@quasar/app-webpack) How to upgrade Quasar CLI with Webpack from older versions to the latest one.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/upgrade-guide",toc:y},R),{default:l((D,c,f,e)=>{if(c)c(`<h2 id="quasar-app-webpack-v4-beta-" class="doc-heading doc-h2"${e}>@quasar/app-webpack v4 (beta)</h2><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>CLI is currently in beta</p><ul${e}><li${e}>Please help test the CLI so we can get it out of the <code class="doc-token"${e}>beta</code> status. We thank you in advance for your help!</li><li${e}>Although we do not plan on adding any further breaking changes, there is still a slight change that we will be forced to do one, based on your feedback.</li></ul></div><div class="doc-note doc-note--danger"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>All other docs pages will refer to the old @quasar/app-webpack version (v3) specs. Only this page mentions (for now) about how to use the v4 beta.</p></div><h3 id="a-note-to-app-extensions-owners" class="doc-heading doc-h3"${e}>A note to App Extensions owners</h3><p${e}>You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-webpack. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>api.compatibleWith(
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> &#39;@quasar/app-webpack&#39;,
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> &#39;^3.0.0&#39;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> &#39;^3.0.0 || ^4.0.0-beta.1&#39;
</span></span>)</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`api.compatibleWith(
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` '@quasar/app-webpack',
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` '^3.0.0'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` '^3.0.0 || ^4.0.0-beta.1'
`)]),a(")")])]),n(o)]}),_:1},f,e)),c(`<h3 id="notable-breaking-changes" class="doc-heading doc-h3"${e}>Notable breaking changes</h3><ul${e}><li${e}>Minimum Node.js version is now 18.12</li><li${e}>We have shifted towards an ESM style for the whole Quasar project folder, so many default project files now require ESM code (although using <code class="doc-token"${e}>.cjs</code> as an extension for these files is supported, but you will most likely need to rename the extension should you not wish to change anything). One example is the <code class="doc-token"${e}>/quasar.config.js</code> file which now it’s assumed to be ESM too (so change from <code class="doc-token"${e}>.js</code> to <code class="doc-token"${e}>.cjs</code> should you still want a CommonJs file).</li><li${e}>Ported and adapted the superior devserver implementation from @quasar/app-vite for all Quasar modes. The benefits are huge.</li><li${e}>Ported the superior implementation of SSR, PWA, Electron &amp; BEX modes from @quasar/app-vite. We will detail each Quasar mode changes on this docs page. <ul${e}><li${e}>SSR - some of the noticeable improvements: <ul${e}><li${e}>Improved reliability: same server code runs in dev and prod</li><li${e}>More target webserver options: you can replace express() with whatever else you are using</li><li${e}>Perf: client-side code no longer re-compiles from scratch when changing code in /src-ssr</li><li${e}>Faster &amp; better compilation for files in /src-ssr (now built with Esbuild instead of Webpack)</li></ul></li><li${e}>PWA - some of the noticeable improvements: <ul${e}><li${e}>Many new configuration options (while removing a lot of the old ones)</li><li${e}>Faster &amp; better compilation for files in /src-pwa (now built with Esbuild instead of Webpack)</li></ul></li><li${e}>Electron <ul${e}><li${e}>Now compiles to ESM (thus also taking advantage of the Electron in ESM format)</li><li${e}>Faster &amp; better compilation for files in /src-electron (now built with Esbuild instead of Webpack)</li><li${e}>Support for multiple preload scripts</li></ul></li><li${e}>BEX - some of the noticeable improvements: <ul${e}><li${e}>Ported the superior implementation from @quasar/app-vite, which also means that when you spawn the mode you can choose between extension Manifest v2 and Manifest v3</li><li${e}>The manifest is now held in a file of its own (/src-pwa/manifest.json) instead of inside the /quasar.config file</li></ul></li></ul></li><li${e}>Webpack will now only compile the contents of <code class="doc-token"${e}>/src</code> folder, while the rest (/src-pwa, /src-electron, etc) are now handled by Esbuild. This translates to a superior build speed and handling of Node.js formats.</li><li${e}>The “test” cmd was removed due to latest updates for @quasar/testing-* packages. See `),c(p(W,{to:"https://testing.quasar.dev/packages/testing/"},{default:l((u,t,r,s)=>{if(t)t("here");else return[a("here")]}),_:1},f,e)),c(`</li><li${e}>The “clean” cmd has been re-designed. Type “quasar clean -h” in your upgraded Quasar project folder for more info.</li><li${e}>Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence.</li><li${e}><strong${e}>We will detail more breaking changes for each of the Quasar modes below</strong>.</li></ul><h3 id="highlights-on-whats-new" class="doc-heading doc-h3"${e}>Highlights on what’s new</h3><p${e}>Some of the work below has already been backported to the old @quasar/app-webpack v3, but posting here for reader’s awareness.</p><ul${e}><li${e}>feat(app-webpack): ability to run multiple quasar dev/build commands simultaneously (example: can run “quasar dev -m capacitor” and “quasar dev -m ssr” and “quasar dev -m capacitor -T ios” simultaneously)</li><li${e}>feat(app-webpack): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)</li><li${e}>feat(app-webpack): Better TS typings overall</li><li${e}>feat(app-webpack): upgrade to Typescript v5; drop fork-ts-checker</li><li${e}>feat(app-webpack): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)</li><li${e}>feat(app-webpack): reload app if one of the imports from quasar.config file changes</li><li${e}>feat(app-webpack): TS detection should keep account of quasar.config file format too (quasar.config.ts)</li><li${e}>feat(app-webpack): env dotfiles support #15303</li><li${e}>feat(app-webpack): New quasar.config file props: build &gt; envFolder (string) and envFiles (string[])</li><li${e}>feat(app-webpack): support for postcss config file in multiple formats: postcss.config.cjs, .postcssrc.js, postcss.config.js, postcss.config.mjs, .postcssrc.cjs, .postcssrc.mjs</li><li${e}>feat(app-webpack): support for babel config file in multiple formats: babel.config.cjs, babel.config.js, babel.config.mjs, .babelrc.js, .babelrc.cjs, .babelrc.mjs, .babelrc</li><li${e}>feat(app-webpack): reopen browser (if configured so) when changing app url through quasar.config file</li><li${e}>feat(app-webpack): port quasar.config file &gt; electron &gt; inspectPort prop from q/app-vite</li><li${e}>feat(app-webpack): port quasar.config file &gt; build &gt; rawDefine from q/app-vite</li><li${e}>feat&amp;perf(app-webpack): faster &amp; more accurate algorithm for determining node package manager to use</li><li${e}>feat(app-webpack): highly improve SSR perf + mem usage (especially for prod); major refactoring of ssr-helpers; also include renderPreloadTag() from q/app-vite</li><li${e}>feat(app-webpack): support for SSR development with HTTPS</li><li${e}>feat(app-webpack): SSR - ability to replace express() with any other connect-like webserver</li><li${e}>feat(app-webpack): SSR - no longer recompile everything when changing code in /src-ssr</li><li${e}>feat(app-webpack): upgrade deps</li><li${e}>feat(app-webpack): remove workaround for bug in Electron 6-8 in cli templates (#15845)</li><li${e}>feat(app-webpack): remove bundleWebRuntime config for Capacitor v5+</li><li${e}>feat(app-webpack): use workbox v7 by default</li><li${e}>feat(app-webpack): quasar.config &gt; build &gt; htmlMinifyOptions</li><li${e}>feat+refactor(app-webpack): ability to run multiple modes + dev/build simultaneously</li><li${e}>feat(app-webpack): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools</li><li${e}>perf(app-webpack): only verify quasar.conf server address for “dev” cmd</li><li${e}>feat(app-webpack): pick new electron inspect port for each instance</li><li${e}>refactor(app-webpack): AE support - better and more efficient algorithms</li><li${e}>feat(app-webpack): AE support for ESM format</li><li${e}>feat(app-webpack): AE support for TS format (through a build step)</li><li${e}>feat(app-webpack): AE API new methods -&gt; hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()</li><li${e}>feat(app-webpack): AE -&gt; Prompts API (and ability for prompts default exported fn to be async)</li><li${e}>feat(app-webpack): smarter app files validation</li><li${e}>refactor(app-webpack): the “clean” cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)</li><li${e}>feat(app-webpack): Support for Bun as package manager #16335</li><li${e}>feat(app-webpack): for default /src-ssr template -&gt; prod ssr -&gt; on error, print err stack if built with debugging enabled</li><li${e}>fix(app-webpack): electron preload script triggering “module not found”</li><li${e}>feat(app-webpack): upgrade to webpack-dev-server v5</li></ul><h3 id="beginning-of-the-upgrade-process" class="doc-heading doc-h3"${e}>Beginning of the upgrade process</h3><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>Recommendation</p><p${e}>If you are unsure that you won’t skip by mistake any of the recommended changes, you can scaffold a new project folder with the @quasar/app-webpack v4 beta at any time and then easily start porting your app from there. The bulk of the changes refer to the different project folder config files and mostly NOT to your /src files. <br${e}><br${e}></p>`),c(p(i(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l((u,t,r,s)=>{if(t)t(p(h,{class:"q-pa-none",name:"Yarn"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}>$ <span class="token function"${d}>yarn</span> create quasar</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(" create quasar")])]),n(o,{lang:"bash"})]}),_:1},r,s)),t(p(h,{class:"q-pa-none",name:"NPM"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}>$ <span class="token function"${d}>npm</span> init quasar</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(" init quasar")])]),n(o,{lang:"bash"})]}),_:1},r,s)),t(p(h,{class:"q-pa-none",name:"PNPM"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}><span class="token comment"${d}># experimental support</span>
$ <span class="token function"${d}>pnpm</span> create quasar</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ `),n("span",{class:"token function"},"pnpm"),a(" create quasar")])]),n(o,{lang:"bash"})]}),_:1},r,s)),t(p(h,{class:"q-pa-none",name:"Bun"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}><span class="token comment"${d}># experimental support</span>
$ bun create quasar</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),n(o,{lang:"bash"})]}),_:1},r,s));else return[n(h,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(" create quasar")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(" init quasar")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ `),n("span",{class:"token function"},"pnpm"),a(" create quasar")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),n(o,{lang:"bash"})]),_:1})]}),_:1},f,e)),c(`<br${e}> When asked to &quot;Pick Quasar App CLI variant&quot;, answer with: &quot;Quasar App CLI with Webpack (BETA | next major version - v4)&quot;. </div><p${e}>Preparations:</p><ul${e}><li${e}><p${e}>If using the global installation of Quasar CLI (<code class="doc-token"${e}>@quasar/cli</code>), make sure that you have the latest one. This is due to the support of quasar.config file in multiple formats.</p></li><li${e}><p${e}>Again, we highlight that the minimum supported version of Node.js is now v16 (always use the LTS versions of Node.js - the higher the version the better).</p></li><li${e}><p${e}>Edit your <code class="doc-token"${e}>/package.json</code> on the <code class="doc-token"${e}>@quasar/app-webpack</code> entry and assign it <code class="doc-token"${e}>^4.0.0-beta.1</code>:</p>`),c(p(i(k),{title:"/package.json"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>&quot;devDependencies&quot;: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> &quot;@quasar/app-webpack&quot;: &quot;^3.0.0&quot;,
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> &quot;@quasar/app-webpack&quot;: &quot;^4.0.0-beta.1&quot;
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`"devDependencies": {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` "@quasar/app-webpack": "^3.0.0",
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "@quasar/app-webpack": "^4.0.0-beta.1"
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<br${e}> Then yarn/npm/pnpm/bun install. <br${e}><br${e}></li><li${e}><p${e}>Convert your <code class="doc-token"${e}>/quasar.config.js</code> file to the ESM format (which is recommended, otherwise rename the file extension to <code class="doc-token"${e}>.cjs</code> and use CommonJs format).</p>`),c(p(i(k),{title:"/quasar.config.js file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> configure <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>configure</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token comment"${s}>/* ctx */</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* ctx */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]}),_:1},f,e)),c(`<div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>Tip on Typescript</p><p${e}>You can now write this file in TS too should you wish (rename <code class="doc-token"${e}>/quasar.config.js</code> to <code class="doc-token"${e}>/quasar.config.ts</code> – notice the <code class="doc-token"${e}>.ts</code> file extension).</p></div></li><li${e}><p${e}>For consistency with @quasar/app-vite (and easy switch between @quasar/app-webpack and it) move <code class="doc-token"${e}>/src/index.template.html</code> to <code class="doc-token"${e}>/index.html</code> and do the following changes:</p>`),c(p(i(k),{title:"/index.html"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-arrow deleted"${s}><span class="token prefix deleted"${s}>&lt;</span><span class="token line"${s}>body&gt;
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> &lt;!-- DO NOT touch the following DIV --&gt;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> &lt;div id=&quot;q-app&quot;&gt;&lt;/div&gt;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> &lt;!-- quasar:entry-point --&gt;
</span></span><span class="token deleted-arrow deleted"${s}><span class="token prefix deleted"${s}>&lt;</span><span class="token line"${s}>/body&gt;</span></span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-arrow deleted"},[n("span",{class:"token prefix deleted"},"<"),n("span",{class:"token line"},`body>
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` <!-- DO NOT touch the following DIV -->
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` <div id="q-app"></div>
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` <!-- quasar:entry-point -->
`)]),n("span",{class:"token deleted-arrow deleted"},[n("span",{class:"token prefix deleted"},"<"),n("span",{class:"token line"},"/body>")])])]),n(o)]}),_:1},f,e)),c(`<br${e}></li><li${e}><p${e}>(Optional, but recommended) For future-proofing some tools config files, rename the following files (in the root project folder):</p>`),c(p(S,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:l((u,t,r,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Old name</th><th class="text-left"${s}>New name</th></tr></thead><tbody${s}><tr${s}><td${s}>postcss.config.js</td><td${s}>postcss.config.cjs</td></tr><tr${s}><td${s}>.eslintrc.js</td><td${s}>.eslintrc.cjs</td></tr><tr${s}><td${s}>babel.config.js</td><td${s}>babel.config.cjs</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Old name"),n("th",{class:"text-left"},"New name")])]),n("tbody",null,[n("tr",null,[n("td",null,"postcss.config.js"),n("td",null,"postcss.config.cjs")]),n("tr",null,[n("td",null,".eslintrc.js"),n("td",null,".eslintrc.cjs")]),n("tr",null,[n("td",null,"babel.config.js"),n("td",null,"babel.config.cjs")])])]}),_:1},f,e)),c(`<br${e}></li><li${e}><p${e}>You might want to add the following to your <code class="doc-token"${e}>/.gitignore</code> file. These kind of files are left for inspection purposes when something fails with your <code class="doc-token"${e}>/quasar.config</code> file (and can be removed by the <code class="doc-token"${e}>quasar clean</code> command):</p>`),c(p(i(k),{title:"/.gitignore"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>.DS_Store
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
*.sln</code></pre>`),t(p(o,{lang:"bash"},null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`.DS_Store
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
*.sln`)])]),n(o,{lang:"bash"})]}),_:1},f,e)),c(`<br${e}></li><li${e}><p${e}>If you have linting, please review your <code class="doc-token"${e}>/.eslintignore</code> file as well:</p>`),c(p(i(k),{title:"/.eslintignore"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
<span class="c-line c-highlight"${s}></span>.eslintrc.cjs
<span class="c-line c-highlight"${s}></span>babel.config.cjs
<span class="c-line c-highlight"${s}></span>/quasar.config.*.temporary.compiled*</code></pre>`),t(p(o,{lang:"bash"},null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),a(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),a(`babel.config.cjs
`),n("span",{class:"c-line c-highlight"}),a("/quasar.config.*.temporary.compiled*")])]),n(o,{lang:"bash"})]}),_:1},f,e)),c(`<br${e}></li><li${e}><p${e}>If using Typescript, then ensure that your <code class="doc-token"${e}>/tsconfig.json</code> file looks like this:</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
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
<span class="token punctuation"${s}>}</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e)),c(`</li></ul><h3 id="spa-capacitor-cordova-modes-changes" class="doc-heading doc-h3"${e}>SPA / Capacitor / Cordova modes changes</h3><ul${e}><li${e}>No need to change anything in the <code class="doc-token"${e}>/src</code>, <code class="doc-token"${e}>/src-capacitor</code> or <code class="doc-token"${e}>/src-cordova</code> folders.</li></ul><h3 id="pwa-mode-changes" class="doc-heading doc-h3"${e}>PWA mode changes</h3><p${e}>The <code class="doc-token"${e}>register-service-worker</code> dependency is no longer supplied by the CLI. You will have to install it yourself in your project folder.</p>`),c(p(i(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l((u,t,r,s)=>{if(t)t(p(h,{class:"q-pa-none",name:"Yarn"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}>$ <span class="token function"${d}>yarn</span> <span class="token function"${d}>add</span> register-service-worker@^1.0.0</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]}),_:1},r,s)),t(p(h,{class:"q-pa-none",name:"NPM"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}>$ <span class="token function"${d}>npm</span> <span class="token function"${d}>install</span> <span class="token parameter variable"${d}>--save</span> register-service-worker@^1.0.0</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(),n("span",{class:"token parameter variable"},"--save"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]}),_:1},r,s)),t(p(h,{class:"q-pa-none",name:"PNPM"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}>$ <span class="token function"${d}>pnpm</span> <span class="token function"${d}>add</span> register-service-worker@^1.0.0</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]}),_:1},r,s)),t(p(h,{class:"q-pa-none",name:"Bun"},{default:l((w,g,$,d)=>{if(g)g(`<pre class="doc-code"${d}><code${d}>$ bun <span class="token function"${d}>add</span> register-service-worker@^1.0.0</code></pre>`),g(p(o,{lang:"bash"},null,$,d));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]}),_:1},r,s));else return[n(h,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(),n("span",{class:"token parameter variable"},"--save"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1})]}),_:1},f,e)),c(`<p${e}>Edit your <code class="doc-token"${e}>/src-pwa/custom-service-worker.js</code> file:</p>`),c(p(i(k),{title:"/src-pwa/custom-service-worker.js"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> import { precacheAndRoute } from &#39;workbox-precaching&#39;
</span></span>
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // Use with precache injection
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> precacheAndRoute(self.__WB_MANIFEST)
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> import { clientsClaim } from &#39;workbox-core&#39;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from &#39;workbox-precaching&#39;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> import { registerRoute, NavigationRoute } from &#39;workbox-routing&#39;
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> self.skipWaiting()
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> clientsClaim()
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // Use with precache injection
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> precacheAndRoute(self.__WB_MANIFEST)
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> cleanupOutdatedCaches()
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // Non-SSR fallbacks to index.html
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // Production SSR fallbacks to offline.html (except for dev)
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> if (process.env.MODE !== &#39;ssr&#39; || process.env.PROD) {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  registerRoute(
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    new NavigationRoute(
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>      { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    )
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  )
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> }</span></span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import { precacheAndRoute } from 'workbox-precaching'
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Use with precache injection
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` precacheAndRoute(self.__WB_MANIFEST)
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { clientsClaim } from 'workbox-core'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { registerRoute, NavigationRoute } from 'workbox-routing'
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` self.skipWaiting()
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` clientsClaim()
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Use with precache injection
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` precacheAndRoute(self.__WB_MANIFEST)
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` cleanupOutdatedCaches()
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Non-SSR fallbacks to index.html
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Production SSR fallbacks to offline.html (except for dev)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` if (process.env.MODE !== 'ssr' || process.env.PROD) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  registerRoute(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    new NavigationRoute(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`      { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    )
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  )
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"}," }")])])]),n(o)]}),_:1},f,e)),c(`<p${e}>Create the file <code class="doc-token"${e}>/src-pwa/manifest.json</code> and move /quasar.config file &gt; pwa &gt; manifest from there to this file. Here’s an example of how it can look like:</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;orientation&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;portrait&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;background_color&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;#ffffff&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;theme_color&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;#027be3&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;icons&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token property"${s}>&quot;src&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;icons/icon-128x128.png&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;sizes&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;128x128&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;type&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;image/png&quot;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token property"${s}>&quot;src&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;icons/icon-192x192.png&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;sizes&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;192x192&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;type&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;image/png&quot;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token property"${s}>&quot;src&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;icons/icon-256x256.png&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;sizes&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;256x256&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;type&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;image/png&quot;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token property"${s}>&quot;src&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;icons/icon-384x384.png&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;sizes&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;384x384&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;type&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;image/png&quot;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token property"${s}>&quot;src&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;icons/icon-512x512.png&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;sizes&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;512x512&quot;</span><span class="token punctuation"${s}>,</span>
      <span class="token property"${s}>&quot;type&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;image/png&quot;</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"orientation"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"portrait"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"background_color"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"#ffffff"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"theme_color"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"#027be3"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"icons"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-128x128.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"128x128"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-192x192.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"192x192"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-256x256.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"256x256"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-384x384.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"384x384"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-512x512.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"512x512"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e)),c(`<p${e}>There are some subtle changes in <code class="doc-token"${e}>/quasar.config</code> file too:</p>`),c(p(i(k),{title:"/quasar.config file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> registerServiceWorker: &#39;src-pwa/register-service-worker&#39;,
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> serviceWorker: &#39;src-pwa/custom-service-worker&#39;,
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaRegisterServiceWorker: &#39;src-pwa/register-service-worker&#39;,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaServiceWorker: &#39;src-pwa/custom-service-worker&#39;,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaManifestFile: &#39;src-pwa/manifest.json&#39;,
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>},

pwa: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> workboxPluginMode?: &quot;GenerateSW&quot; | &quot;InjectManifest&quot;;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> workboxMode?: &quot;GenerateSW&quot; | &quot;InjectManifest&quot;;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Full option list can be found
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  [here](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config).
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> workboxOptions?: object;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend/configure the Workbox GenerateSW options
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendGenerateSWOptions?: (config: GenerateSWOptions) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend/configure the Workbox InjectManifest options
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendInjectManifestOptions?: (config: InjectManifestOptions) =&gt; void;
</span></span>
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // Now the contents for this held in a new file: /src-pwa/manifest.json
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // and its replaced by extendManifestJson below:
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> manifest?: PwaManifestOptions;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Should you need some dynamic changes to the /src-pwa/manifest.json,
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * use this method to do it.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendManifestJson?: (json: PwaManifestOptions) =&gt; void;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * PWA manifest filename to use on your browser
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default manifest.json
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> manifestFilename?: string;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Does the PWA manifest tag requires crossorigin auth?
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default false
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> useCredentialsForManifestTag?: boolean;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Webpack config object for the custom service worker ONLY (\`/src-pwa/custom-service-worker\`)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  when pwa &gt; workboxPluginMode is set to InjectManifest
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> extendWebpackCustomSW?: (config: WebpackConfiguration) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Equivalent to \`extendWebpackCustomSW()\` but uses \`webpack-chain\` instead,
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  for the custom service worker ONLY (\`/src-pwa/custom-service-worker\`)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  when pwa &gt; workboxPluginMode is set to InjectManifest
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> chainWebpackCustomSW?: (chain: WebpackChain) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend the Esbuild config that is used for the custom service worker
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * (if using it through workboxMode: &#39;InjectManifest&#39;)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendPWACustomSWConf?: (config: EsbuildConfiguration) =&gt; void;
</span></span>
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> /**
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * @default
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * \`\`\`typescript
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleMobileWebAppCapable: &#39;yes&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleMobileWebAppStatusBarStyle: &#39;default&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleTouchIcon120: &#39;icons/apple-icon-120x120.png&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleTouchIcon180: &#39;icons/apple-icon-180x180.png&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleTouchIcon152: &#39;icons/apple-icon-152x152.png&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleTouchIcon167: &#39;icons/apple-icon-167x167.png&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    appleSafariPinnedTab: &#39;icons/safari-pinned-tab.svg&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    msapplicationTileImage: &#39;icons/ms-icon-144x144.png&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *    msapplicationTileColor: &#39;#000000&#39;;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * }
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   * \`\`\`
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  */
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> metaVariables?: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleMobileWebAppCapable: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleMobileWebAppStatusBarStyle: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleTouchIcon120: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleTouchIcon180: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleTouchIcon152: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleTouchIcon167: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   appleSafariPinnedTab: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   msapplicationTileImage: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   msapplicationTileColor: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> };
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> metaVariablesFn?: (manifest?: PwaManifestOptions) =&gt; PwaMetaVariablesEntry[];
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> /**
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  * Auto inject the PWA meta tags?
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  * If using the function form, return HTML tags as one single string.
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  * @default true
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  */
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) =&gt; string);
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
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker: 'src-pwa/custom-service-worker',
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker: 'src-pwa/custom-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile: 'src-pwa/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`},

pwa: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxPluginMode?: "GenerateSW" | "InjectManifest";
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` workboxMode?: "GenerateSW" | "InjectManifest";
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Full option list can be found
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  [here](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxOptions?: object;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox GenerateSW options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendGenerateSWOptions?: (config: GenerateSWOptions) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox InjectManifest options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendInjectManifestOptions?: (config: InjectManifestOptions) => void;
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Now the contents for this held in a new file: /src-pwa/manifest.json
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // and its replaced by extendManifestJson below:
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` manifest?: PwaManifestOptions;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should you need some dynamic changes to the /src-pwa/manifest.json,
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * use this method to do it.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendManifestJson?: (json: PwaManifestOptions) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA manifest filename to use on your browser
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default manifest.json
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` manifestFilename?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Does the PWA manifest tag requires crossorigin auth?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` useCredentialsForManifestTag?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Webpack config object for the custom service worker ONLY (`/src-pwa/custom-service-worker`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  when pwa > workboxPluginMode is set to InjectManifest
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackCustomSW?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackCustomSW()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the custom service worker ONLY (`/src-pwa/custom-service-worker`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  when pwa > workboxPluginMode is set to InjectManifest
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackCustomSW?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the custom service worker
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (if using it through workboxMode: 'InjectManifest')
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendPWACustomSWConf?: (config: EsbuildConfiguration) => void;
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * @default
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},"  * ```typescript\n"),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleMobileWebAppCapable: 'yes';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleMobileWebAppStatusBarStyle: 'default';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon120: 'icons/apple-icon-120x120.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon180: 'icons/apple-icon-180x180.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon152: 'icons/apple-icon-152x152.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon167: 'icons/apple-icon-167x167.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleSafariPinnedTab: 'icons/safari-pinned-tab.svg';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    msapplicationTileImage: 'icons/ms-icon-144x144.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    msapplicationTileColor: '#000000';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * }
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},"   * ```\n"),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` metaVariables?: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleMobileWebAppCapable: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleMobileWebAppStatusBarStyle: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon120: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon180: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon152: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon167: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleSafariPinnedTab: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   msapplicationTileImage: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   msapplicationTileColor: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` };
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` metaVariablesFn?: (manifest?: PwaManifestOptions) => PwaMetaVariablesEntry[];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * Auto inject the PWA meta tags?
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * If using the function form, return HTML tags as one single string.
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
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
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<h3 id="electron-mode-changes" class="doc-heading doc-h3"${e}>Electron mode changes</h3><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The distributables (your production code) will be compiled to ESM form, thus also taking advantage of Electron in ESM form.</p></div><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>You might want to upgrade the <code class="doc-token"${e}>electron</code> package to the latest so it can handle the ESM format.</p></div><p${e}>Most changes refer to editing your <code class="doc-token"${e}>/src-electron/electron-main.js</code> file:</p>`),c(p(i(k),{title:"Icon path"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>import { fileURLToPath } from &#39;node:url&#39;
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>const currentDir = fileURLToPath(new URL(&#39;.&#39;, import.meta.url))
</span></span>
function createWindow () {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> mainWindow = new BrowserWindow({
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   icon: path.resolve(__dirname, &#39;icons/icon.png&#39;), // tray icon
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>   icon: path.resolve(currentDir, &#39;icons/icon.png&#39;), // tray icon
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   // ...
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> })</span></span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`import { fileURLToPath } from 'node:url'
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`const currentDir = fileURLToPath(new URL('.', import.meta.url))
`)]),a(`
function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(o)]}),_:1},f,e)),c(p(i(k),{title:"Preload script"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>import { fileURLToPath } from &#39;node:url&#39;

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
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> })</span></span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`import { fileURLToPath } from 'node:url'

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
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(o)]}),_:1},f,e)),c(`<div class="doc-note doc-note--danger"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Edit <code class="doc-token"${e}>/quasar.config.js</code> to specify your preload script: <br${e}><br${e}></p>`),c(p(i(k),{title:"/quasar.config file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> electronPreload?: string;
</span></span>},

electron: {
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> preloadScripts: [ &#39;electron-preload&#39; ],
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`)]),a(`},

electron: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts: [ 'electron-preload' ],
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<br${e}> As you can see, you can now specify multiple preload scripts should you need them. </div>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>function createWindow () {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  // ...
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  mainWindow.loadURL(process.env.APP_URL)
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  if (process.env.DEV) {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    mainWindow.loadURL(process.env.APP_URL)
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  } else {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>    mainWindow.loadFile(&#39;index.html&#39;)
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  }</span></span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  // ...
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  mainWindow.loadURL(process.env.APP_URL)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  if (process.env.DEV) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadURL(process.env.APP_URL)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  } else {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadFile('index.html')
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},"  }")])])]),n(o)]}),_:1},f,e)),c(`<p${e}>Finally, the new file should look like this:</p>`),c(p(i(k),{title:"The new /src-electron/electron-main.js"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> app<span class="token punctuation"${s}>,</span> BrowserWindow <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;electron&#39;</span>
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
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'electron'"),a(`
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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]}),_:1},f,e)),c(`<p${e}>There are also more <code class="doc-token"${e}>/quasar.config</code> file changes:</p>`),c(p(i(k),{title:"/quasar.config file > electron"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>electron: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /** Webpack config object for the Main Process ONLY (\`/src-electron/electron-main\`) */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> extendWebpackMain?: (config: WebpackConfiguration) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Equivalent to \`extendWebpackMain()\` but uses \`webpack-chain\` instead,
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  for the Main Process ONLY (\`/src-electron/electron-main\`)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> chainWebpackMain?: (chain: WebpackChain) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend the Esbuild config that is used for the electron-main thread
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendElectronMainConf?: (config: EsbuildConfiguration) =&gt; void;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /** Webpack config object for the Preload Process ONLY (\`/src-electron/electron-preload\`) */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> extendWebpackPreload?: (config: WebpackConfiguration) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Equivalent to \`extendWebpackPreload()\` but uses \`webpack-chain\` instead,
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  for the Preload Process ONLY (\`/src-electron/electron-preload\`)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> chainWebpackPreload?: (chain: WebpackChain) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend the Esbuild config that is used for the electron-preload thread
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendElectronPreloadConf?: (config: EsbuildConfiguration) =&gt; void;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * The list of content scripts (js/ts) that you want embedded.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Each entry in the list should be a filename (WITHOUT its extension) from /src-electron/
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default [ &#39;electron-preload&#39; ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example [ &#39;my-other-preload-script&#39; ]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> preloadScripts?: string[];
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Specify the debugging port to use for the Electron app when running in development mode
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default 5858
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> inspectPort?: number;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Specify additional parameters when yarn/npm installing
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * the UnPackaged folder, right before bundling with either
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * electron packager or electron builder;
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * Example: [ &#39;--ignore-optional&#39;, &#39;--some-other-param&#39; ]
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>  * Example: [ &#39;install&#39;, &#39;--production&#39;, &#39;--ignore-optional&#39;, &#39;--some-other-param&#39; ]
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> unPackagedInstallParams?: string[];
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`electron: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Webpack config object for the Main Process ONLY (`/src-electron/electron-main`) */\n")]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackMain?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackMain()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the Main Process ONLY (`/src-electron/electron-main`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackMain?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the electron-main thread
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendElectronMainConf?: (config: EsbuildConfiguration) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Webpack config object for the Preload Process ONLY (`/src-electron/electron-preload`) */\n")]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackPreload?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackPreload()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the Preload Process ONLY (`/src-electron/electron-preload`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackPreload?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the electron-preload thread
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendElectronPreloadConf?: (config: EsbuildConfiguration) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * The list of content scripts (js/ts) that you want embedded.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Each entry in the list should be a filename (WITHOUT its extension) from /src-electron/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'electron-preload' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example [ 'my-other-preload-script' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts?: string[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify the debugging port to use for the Electron app when running in development mode
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 5858
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` inspectPort?: number;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify additional parameters when yarn/npm installing
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * the UnPackaged folder, right before bundling with either
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * electron packager or electron builder;
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * Example: [ '--ignore-optional', '--some-other-param' ]
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * Example: [ 'install', '--production', '--ignore-optional', '--some-other-param' ]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` unPackagedInstallParams?: string[];
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<h3 id="ssr-mode-changes" class="doc-heading doc-h3"${e}>SSR mode changes</h3><p${e}>The support for <code class="doc-token"${e}>/src-ssr/production-export.js</code> has been dropped (delete it). The same SSR webserver now runs for both development and production, so create a <code class="doc-token"${e}>/src-ssr/server.js</code> with the following contents:</p>`),c(p(i(k),{title:"/src-ssr/server.js"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * Make sure to yarn add / npm install (in your project root)
 * anything you import here (except for express and compression).
 */</span>
<span class="token keyword"${s}>import</span> express <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;express&#39;</span>
<span class="token keyword"${s}>import</span> compression <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;compression&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span>
  ssrClose<span class="token punctuation"${s}>,</span>
  ssrCreate<span class="token punctuation"${s}>,</span>
  ssrListen<span class="token punctuation"${s}>,</span>
  ssrServeStaticContent<span class="token punctuation"${s}>,</span>
  ssrRenderPreloadTag
<span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>

<span class="token comment"${s}>/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> create <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrCreate</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token comment"${s}>/* { ... } */</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> app <span class="token operator"${s}>=</span> <span class="token function"${s}>express</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// attackers can use this header to detect apps running Express</span>
  <span class="token comment"${s}>// and then launch specifically-targeted attacks</span>
  app<span class="token punctuation"${s}>.</span><span class="token function"${s}>disable</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;x-powered-by&#39;</span><span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// place here any middlewares that</span>
  <span class="token comment"${s}>// absolutely need to run before anything else</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>PROD</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token function"${s}>compression</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>return</span> app
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The &quot;listenResult&quot; param for the &quot;close()&quot; definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> listen <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrListen</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>async</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> app<span class="token punctuation"${s}>,</span> devHttpsApp<span class="token punctuation"${s}>,</span> port<span class="token punctuation"${s}>,</span> isReady <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>await</span> <span class="token function"${s}>isReady</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token keyword"${s}>const</span> server <span class="token operator"${s}>=</span> devHttpsApp <span class="token operator"${s}>||</span> app
  <span class="token keyword"${s}>return</span> server<span class="token punctuation"${s}>.</span><span class="token function"${s}>listen</span><span class="token punctuation"${s}>(</span>port<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>PROD</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Server listening at port &#39;</span> <span class="token operator"${s}>+</span> port<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the &quot;listen()&quot; call above,
 * you can use the &quot;listenResult&quot; param.
 *
 * Can be async.
 */</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> close <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrClose</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> listenResult <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> listenResult<span class="token punctuation"${s}>.</span><span class="token function"${s}>close</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>const</span> maxAge <span class="token operator"${s}>=</span> process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>DEV</span>
  <span class="token operator"${s}>?</span> <span class="token number"${s}>0</span>
  <span class="token operator"${s}>:</span> <span class="token number"${s}>1000</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>60</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>60</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>24</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>30</span>

<span class="token comment"${s}>/**
 * Should return middleware that serves the indicated path
 * with static content.
 */</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> serveStaticContent <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrServeStaticContent</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>path<span class="token punctuation"${s}>,</span> opts</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> express<span class="token punctuation"${s}>.</span><span class="token function"${s}>static</span><span class="token punctuation"${s}>(</span>path<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
    maxAge<span class="token punctuation"${s}>,</span>
    <span class="token operator"${s}>...</span>opts
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>const</span> jsRE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.js$</span><span class="token regex-delimiter"${s}>/</span></span>
<span class="token keyword"${s}>const</span> cssRE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.css$</span><span class="token regex-delimiter"${s}>/</span></span>
<span class="token keyword"${s}>const</span> woffRE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.woff$</span><span class="token regex-delimiter"${s}>/</span></span>
<span class="token keyword"${s}>const</span> woff2RE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.woff2$</span><span class="token regex-delimiter"${s}>/</span></span>
<span class="token keyword"${s}>const</span> gifRE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.gif$</span><span class="token regex-delimiter"${s}>/</span></span>
<span class="token keyword"${s}>const</span> jpgRE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.jpe?g$</span><span class="token regex-delimiter"${s}>/</span></span>
<span class="token keyword"${s}>const</span> pngRE <span class="token operator"${s}>=</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>\\.png$</span><span class="token regex-delimiter"${s}>/</span></span>

<span class="token comment"${s}>/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>const</span> renderPreloadTag <span class="token operator"${s}>=</span> <span class="token function"${s}>ssrRenderPreloadTag</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span>file<span class="token comment"${s}>/* , { ssrContext } */</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>jsRE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;script src=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; defer crossorigin&gt;&lt;/script&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>cssRE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;link rel=&quot;stylesheet&quot; href=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; crossorigin&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>woffRE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; as=&quot;font&quot; type=&quot;font/woff&quot; crossorigin&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>woff2RE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>gifRE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; as=&quot;image&quot; type=&quot;image/gif&quot; crossorigin&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>jpgRE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; as=&quot;image&quot; type=&quot;image/jpeg&quot; crossorigin&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>pngRE<span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>file<span class="token punctuation"${s}>)</span> <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>file<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token string"${s}>&quot; as=&quot;image&quot; type=&quot;image/png&quot; crossorigin&gt;</span><span class="token template-punctuation string"${s}>\`</span></span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>return</span> <span class="token string"${s}>&#39;&#39;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Make sure to yarn add / npm install (in your project root)
 * anything you import here (except for express and compression).
 */`),a(`
`),n("span",{class:"token keyword"},"import"),a(" express "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'express'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" compression "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'compression'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  ssrClose`),n("span",{class:"token punctuation"},","),a(`
  ssrCreate`),n("span",{class:"token punctuation"},","),a(`
  ssrListen`),n("span",{class:"token punctuation"},","),a(`
  ssrServeStaticContent`),n("span",{class:"token punctuation"},","),a(`
  ssrRenderPreloadTag
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`

`),n("span",{class:"token comment"},`/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" create "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrCreate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" app "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// attackers can use this header to detect apps running Express"),a(`
  `),n("span",{class:"token comment"},"// and then launch specifically-targeted attacks"),a(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"disable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'x-powered-by'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),a(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(` app
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},`/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The "listenResult" param for the "close()" definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" listen "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrListen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" devHttpsApp"),n("span",{class:"token punctuation"},","),a(" port"),n("span",{class:"token punctuation"},","),a(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" server "),n("span",{class:"token operator"},"="),a(" devHttpsApp "),n("span",{class:"token operator"},"||"),a(` app
  `),n("span",{class:"token keyword"},"return"),a(" server"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),a("port"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),a(),n("span",{class:"token operator"},"+"),a(" port"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},`/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the "listen()" call above,
 * you can use the "listenResult" param.
 *
 * Can be async.
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" close "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" listenResult "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" listenResult"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" maxAge "),n("span",{class:"token operator"},"="),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),a(`
  `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"0"),a(`
  `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"24"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"30"),a(`

`),n("span",{class:"token comment"},`/**
 * Should return middleware that serves the indicated path
 * with static content.
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" serveStaticContent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrServeStaticContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("path"),n("span",{class:"token punctuation"},","),a(" opts")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" express"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"static"),n("span",{class:"token punctuation"},"("),a("path"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
    maxAge`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token operator"},"..."),a(`opts
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" jsRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" cssRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" woffRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" woff2RE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff2$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" gifRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.gif$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" jpgRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.jpe?g$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" pngRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.png$"),n("span",{class:"token regex-delimiter"},"/")]),a(`

`),n("span",{class:"token comment"},`/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" renderPreloadTag "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrRenderPreloadTag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token comment"},"/* , { ssrContext } */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("jsRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<script src="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" defer crossorigin><\/script>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("cssRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="stylesheet" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("woffRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("woff2RE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff2" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("gifRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/gif" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("jpgRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/jpeg" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("pngRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/png" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token string"},"''"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]}),_:1},f,e)),c(`<p${e}>If you have <code class="doc-token"${e}>/src-ssr/middlewares/compression.js</code> file, delete it because this code is now embedded into <code class="doc-token"${e}>/src-ssr/server.js</code>. Then edit your <code class="doc-token"${e}>/quasar.config</code> file to remove the reference to the old file:</p>`),c(p(i(k),{title:"/quasar.config file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>ssr: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> middlewares: [
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   ctx.prod ? &#39;compression&#39; : &#39;&#39;,
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>   &#39;render&#39; // keep this as last one
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> ]
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` middlewares: [
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   ctx.prod ? 'compression' : '',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   'render' // keep this as last one
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ]
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<p${e}>There are some additional changes to the <code class="doc-token"${e}>/quasar.config</code> file:</p>`),c(p(i(k),{title:"/quasar.config file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>ssr: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * If a PWA should take over or just a SPA.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * When used in object form, you can specify Workbox options
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *  which will be applied on top of \`pwa &gt; workboxOptions\`.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default false
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> pwa?: boolean | object;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwa?: boolean;
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
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // now part of the /src-ssr/server.js code
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
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Webpack config object for the Webserver
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * which includes the SSR middleware
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> extendWebpackWebserver?: (config: WebpackConfiguration) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Equivalent to \`extendWebpackWebserver()\` but uses \`webpack-chain\` instead.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Handles the Webserver webpack config ONLY which includes the SSR middleware
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> chainWebpackWebserver?: (chain: WebpackChain) =&gt; void;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Extend the Esbuild config that is used for the SSR webserver
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * (which includes the SSR middlewares)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> extendSSRWebserverConf?: (config: EsbuildConfiguration) =&gt; void;
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * If a PWA should take over or just a SPA.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When used in object form, you can specify Workbox options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  which will be applied on top of `pwa > workboxOptions`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` pwa?: boolean | object;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwa?: boolean;
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
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // now part of the /src-ssr/server.js code
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
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Webpack config object for the Webserver
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * which includes the SSR middleware
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackWebserver?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackWebserver()` but uses `webpack-chain` instead.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Handles the Webserver webpack config ONLY which includes the SSR middleware
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackWebserver?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the SSR webserver
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (which includes the SSR middlewares)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendSSRWebserverConf?: (config: EsbuildConfiguration) => void;
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<h3 id="bex-mode-changes" class="doc-heading doc-h3"${e}>Bex mode changes</h3><p${e}>The implementation of the BEX mode has been ported from @quasar/app-vite, so when you spawn this Quasar mode it will now ask you what extension Manifest version you want (v2 or v3).</p><p${e}>But this also means that your <code class="doc-token"${e}>/src-bex</code> folder has suffered significant files and folders structure changes. It would be best to temporarily copy your /src-bex folder to a safe place, then remove and add back the BEX mode:</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar mode remove bex
$ quasar mode <span class="token function"${s}>add</span> bex</code></pre>`),t(p(o,{lang:"bash"},null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`$ quasar mode remove bex
$ quasar mode `),n("span",{class:"token function"},"add"),a(" bex")])]),n(o,{lang:"bash"})]}),_:1},f,e)),c(`<p${e}>And then, try to understand the new structure and port your old /src-bex to it. There is unfortunately no other way to put it.</p><p${e}>But first, there are some changes to the <code class="doc-token"${e}>/quasar.config</code> file that you should be aware of:</p>`),c(p(i(k),{title:"/quasar.config file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> bexManifestFile: &#39;src-bex/manifest.json&#39;,
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // ...
</span></span>},

bex: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> builder: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   directories: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>     input: cfg.build.distDir,
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>     output: path.join(cfg.build.packagedDistDir, &#39;Packaged&#39;)
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   }
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> }
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile: 'src-bex/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`},

bex: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` builder: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   directories: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     input: cfg.build.distDir,
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     output: path.join(cfg.build.packagedDistDir, 'Packaged')
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` }
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<p${e}>Some of the changes, like moving the background script from <code class="doc-token"${e}>/js/background.js</code> directly to the root folder, were required by external factors in order for future-proofing the extension structure.</p><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}><strong${e}>Temporarily</strong>, until this version of @quasar/app-webpack gets out of beta status, it would be a good idea to check the Quasar CLI with Vite docs on BEX since they will now mostly match.</p></div><p${e}>Click on the blocks below to expand and see the old and the new folder structure:</p><details class="doc-note doc-note--details"${e}><summary class="doc-note__title"${e}>The *OLD* folder structure</summary>`),c(p(b,{def:m.oldBexTree},null,f,e)),c(`</details><details class="doc-note doc-note--details"${e}><summary class="doc-note__title"${e}>The *NEW* folder structure</summary>`),c(p(b,{def:m.newBexTree},null,f,e)),c(`</details><h3 id="other-quasar-config-file-changes" class="doc-heading doc-h3"${e}>Other /quasar.config file changes</h3><p${e}>The <code class="doc-token"${e}>ctx</code> from <code class="doc-token"${e}>/quasar.config</code> file has some additional props (<code class="doc-token"${e}>vueDevtools</code> and <code class="doc-token"${e}>appPaths</code>):</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> configure <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>configure</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ctx.vueDevtools &amp; ctx.appPaths is available</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ctx.vueDevtools & ctx.appPaths is available")])]),n(o)]}),_:1},f,e)),c(`<p${e}>The definition for <code class="doc-token"${e}>ctx.vueDevtools</code> is:</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/** True if opening remote Vue Devtools in development mode. */</span>
<span class="token literal-property property"${s}>vueDevtools</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** True if opening remote Vue Devtools in development mode. */"),a(`
`),n("span",{class:"token literal-property property"},"vueDevtools"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";")])]),n(o)]}),_:1},f,e)),c(`<p${e}>The definition for <code class="doc-token"${e}>ctx.appPaths</code> is defined with QuasarAppPaths TS type as below:</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>export interface IResolve {
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
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`export interface IResolve {
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
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<p${e}>The Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence, so please remove the following:</p>`),c(p(i(k),{title:"/quasar.config"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> /**
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * Add support for TypeScript.
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  *
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  * @default false
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>  */
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> supportTS?: boolean | { tsLoaderConfig: object; tsCheckerConfig: object };</span></span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * Add support for TypeScript.
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"}," supportTS?: boolean | { tsLoaderConfig: object; tsCheckerConfig: object };")])])]),n(o)]}),_:1},f,e)),c(`<p${e}>The definition of <code class="doc-token"${e}>/quasar.config</code> file &gt; sourceFiles has some changes:</p>`),c(p(i(k),{title:"/quasar.config > sourceFiles"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>sourceFiles: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> rootComponent?: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> router?: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> store?: string;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> indexHtmlTemplate?: string;
</span></span>
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> registerServiceWorker?: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> serviceWorker?: string;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaRegisterServiceWorker?: string;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaServiceWorker?: string;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> pwaManifestFile?: string;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> electronMain?: string;
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> electronPreload?: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> ssrServerIndex?: string;
</span></span>
<span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> bexManifestFile?: string;
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` rootComponent?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` router?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` store?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` indexHtmlTemplate?: string;
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker?: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker?: string;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker?: string;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electronMain?: string;
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrServerIndex?: string;
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile?: string;
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<p${e}>There is a new prop for linting:</p>`),c(p(i(k),{title:"/quasar.config > eslint (New!)"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>eslint</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * Should it report warnings?
   * @default false
   */</span>
  warnings<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Should it report errors?
   * @default false
   */</span>
  errors<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Fix on save.
   * @default false
   */</span>
  fix<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Raw options to send to ESLint for Esbuild
   */</span>
  rawEsbuildEslintOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> Omit<span class="token operator"${s}>&lt;</span>
    ESLint<span class="token punctuation"${s}>.</span>Options<span class="token punctuation"${s}>,</span>
    <span class="token string"${s}>&quot;cache&quot;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&quot;cacheLocation&quot;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&quot;fix&quot;</span> <span class="token operator"${s}>|</span> <span class="token string"${s}>&quot;errorOnUnmatchedPattern&quot;</span>
  <span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Raw options to send to ESLint Webpack plugin
   */</span>
  rawWebpackEslintPluginOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> WebpackEslintOptions<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Files to include (can be in glob format; for Esbuild ESLint only)
   */</span>
  include<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   * @default [&#39;node_modules&#39;]
   */</span>
  exclude<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Enable or disable caching of the linting results.
   * @default true
   */</span>
  cache<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Formatter to use
   * @default &#39;stylish&#39;
   */</span>
  formatter<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> ESLint<span class="token punctuation"${s}>.</span>Formatter<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * Should it report warnings?
   * @default false
   */`),a(`
  warnings`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Should it report errors?
   * @default false
   */`),a(`
  errors`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Fix on save.
   * @default false
   */`),a(`
  fix`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint for Esbuild
   */`),a(`
  rawEsbuildEslintOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Omit"),n("span",{class:"token operator"},"<"),a(`
    ESLint`),n("span",{class:"token punctuation"},"."),a("Options"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token string"},'"cache"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"cacheLocation"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"fix"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"errorOnUnmatchedPattern"'),a(`
  `),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint Webpack plugin
   */`),a(`
  rawWebpackEslintPluginOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" WebpackEslintOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to include (can be in glob format; for Esbuild ESLint only)
   */`),a(`
  include`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   * @default ['node_modules']
   */`),a(`
  exclude`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Enable or disable caching of the linting results.
   * @default true
   */`),a(`
  cache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Formatter to use
   * @default 'stylish'
   */`),a(`
  formatter`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" ESLint"),n("span",{class:"token punctuation"},"."),a("Formatter"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e)),c(p(i(k),{title:"/quasar.config > build"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>build: {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Transpile JS code with Babel
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default true
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> transpile?: boolean;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> webpackTranspile?: boolean;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Add dependencies for transpiling with Babel (from node_modules, which are by default not transpiled).
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * It is ignored if &quot;transpile&quot; is not set to true.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example [ /my-dependency/, &#39;my-dep&#39;, ...]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> transpileDependencies?: (RegExp | string)[];
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> webpackTranspileDependencies?: (RegExp | string)[];
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Add support for also referencing assets for custom tags props.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example { &#39;my-img-comp&#39;: &#39;src&#39;, &#39;my-avatar&#39;: [ &#39;src&#39;, &#39;placeholder-src&#39; ]}
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> transformAssetsUrls?: Record&lt;string, string | string[]&gt;;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> // use vueLoaderOptions instead
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /** Show a progress bar while compiling. */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> showProgress?: boolean;
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> webpackShowProgress?: boolean;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Source map [strategy](https://webpack.js.org/configuration/devtool/) to use.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> devtool?: WebpackConfiguration[&quot;devtool&quot;];
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> webpackDevtool?: WebpackConfiguration[&quot;devtool&quot;];
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * History mode requires configuration on your deployment web server too.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default &#39;hash&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> vueRouterMode?: &quot;hash&quot; | &quot;history&quot;;
</span></span><span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Sets Vue Router base.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Should not need to configure this, unless absolutely needed.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> vueRouterBase?: string;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * When using SSR+PWA, this is the name of the
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * PWA index html file.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Do NOT use index.html as name as it will mess SSR up!
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default &#39;offline.html&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> ssrPwaHtmlFilename?: string;
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> // Moved to ssr &gt; pwaOfflineHtmlFilename
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /** Options to supply to \`ts-loader\` */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> tsLoaderOptions?: object;
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Esbuild is used to build contents of /src-pwa, /src-ssr, /src-electron, /src-bex
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *    {
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *      browser: [&#39;es2022&#39;, &#39;firefox115&#39;, &#39;chrome115&#39;, &#39;safari14&#39;],
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *      node: &#39;node20&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *    }
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> esbuildTarget?: EsbuildTargetOptions;
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> // please check below for the EsbuildTargetOptions interface
</span></span>
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Defines constants that get replaced in your app.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Unlike \`env\`, you will need to use JSON.stringify() on the values yourself except for booleans.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * Also, these will not be prefixed with \`process.env.\`.
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  *
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example { SOMETHING: JSON.stringify(&#39;someValue&#39;) } -&gt; console.log(SOMETHING) // console.log(&#39;someValue&#39;)
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> rawDefine?: { [index: string]: string | boolean | undefined | null };
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
</span></span>}

interface EsbuildTargetOptions {
<span class="token unchanged"${s}><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @default [&#39;es2022&#39;, &#39;firefox115&#39;, &#39;chrome115&#39;, &#39;safari14&#39;]
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> browser?: string[];
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> /**
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  * @example &#39;node20&#39;
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}>  */
</span><span class="token prefix unchanged"${s}> </span><span class="token line"${s}> node?: string;
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`build: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Transpile JS code with Babel
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transpile?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackTranspile?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Add dependencies for transpiling with Babel (from node_modules, which are by default not transpiled).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * It is ignored if "transpile" is not set to true.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example [ /my-dependency/, 'my-dep', ...]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transpileDependencies?: (RegExp | string)[];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackTranspileDependencies?: (RegExp | string)[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Add support for also referencing assets for custom tags props.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example { 'my-img-comp': 'src', 'my-avatar': [ 'src', 'placeholder-src' ]}
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transformAssetsUrls?: Record<string, string | string[]>;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // use vueLoaderOptions instead
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /** Show a progress bar while compiling. */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` showProgress?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackShowProgress?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Source map [strategy](https://webpack.js.org/configuration/devtool/) to use.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` devtool?: WebpackConfiguration["devtool"];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackDevtool?: WebpackConfiguration["devtool"];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * History mode requires configuration on your deployment web server too.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'hash'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueRouterMode?: "hash" | "history";
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Sets Vue Router base.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should not need to configure this, unless absolutely needed.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueRouterBase?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When using SSR+PWA, this is the name of the
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA index html file.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Do NOT use index.html as name as it will mess SSR up!
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'offline.html'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrPwaHtmlFilename?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Moved to ssr > pwaOfflineHtmlFilename
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Options to supply to `ts-loader` */\n")]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` tsLoaderOptions?: object;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Esbuild is used to build contents of /src-pwa, /src-ssr, /src-electron, /src-bex
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *    {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *      browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *      node: 'node20'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *    }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` esbuildTarget?: EsbuildTargetOptions;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // please check below for the EsbuildTargetOptions interface
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Defines constants that get replaced in your app.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Unlike `env`, you will need to use JSON.stringify() on the values yourself except for booleans.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Also, these will not be prefixed with `process.env.`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` rawDefine?: { [index: string]: string | boolean | undefined | null };
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
`)]),a(`}

interface EsbuildTargetOptions {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default ['es2022', 'firefox115', 'chrome115', 'safari14']
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` browser?: string[];
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example 'node20'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` node?: string;
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<p${e}>Due to the upgrade to <code class="doc-token"${e}>webpack-dev-server</code> v5 in <code class="doc-token"${e}>@quasar/app-webpack</code> v4.0.0-beta.3:</p>`),c(p(i(k),{title:"/quasar.config > devServer"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>devServer: {
<span class="token deleted-sign deleted"${s}><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> proxy: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   &quot;/api&quot;: {
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>     target: &quot;http://localhost:3000&quot;,
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>     changeOrigin: true,
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}>   },
</span><span class="token prefix deleted"${s}>-</span><span class="token line"${s}> }
</span></span><span class="token inserted-sign inserted"${s}><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> proxy: [
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>   {
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     context: [&quot;/api&quot;],
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     target: &quot;http://localhost:3000&quot;,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>     changeOrigin: true,
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}>   },
</span><span class="token prefix inserted"${s}>+</span><span class="token line"${s}> ]
</span></span>}</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`devServer: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` proxy: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   "/api": {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     target: "http://localhost:3000",
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     changeOrigin: true,
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   },
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` }
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` proxy: [
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     context: ["/api"],
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     target: "http://localhost:3000",
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     changeOrigin: true,
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   },
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` ]
`)]),a("}")])]),n(o)]}),_:1},f,e)),c(`<h3 id="the-env-dotfiles-support" class="doc-heading doc-h3"${e}>The env dotfiles support</h3><p${e}>Expanding a bit on the env dotfiles support. These files will be detected and used (the order matters):</p>`),c(p(i(k),null,{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git</code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,`.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git`)]),n(o)]}),_:1},f,e)),c(`<p${e}>…where “ignored by git” assumes a default project folder created after releasing this package, otherwise add <code class="doc-token"${e}>.env.local*</code> to your <code class="doc-token"${e}>/.gitignore</code> file.</p><p${e}>You can also configure the files above to be picked up from a different folder or even add more files to the list:</p>`),c(p(i(k),{title:"/quasar.config file"},{default:l((u,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>envFolder</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;./&#39;</span> <span class="token comment"${s}>// absolute or relative path to root project folder</span>
  <span class="token literal-property property"${s}>envFiles</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token comment"${s}>// Path strings to your custom files --- absolute or relative path to root project folder</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(p(o,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"envFolder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'./'"),a(),n("span",{class:"token comment"},"// absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token literal-property property"},"envFiles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// Path strings to your custom files --- absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e));else return[n("h2",{id:"quasar-app-webpack-v4-beta-",class:"doc-heading doc-h2",onClick:u=>i(x)("quasar-app-webpack-v4-beta-")},"@quasar/app-webpack v4 (beta)",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"CLI is currently in beta"),n("ul",null,[n("li",null,[a("Please help test the CLI so we can get it out of the "),n("code",{class:"doc-token"},"beta"),a(" status. We thank you in advance for your help!")]),n("li",null,"Although we do not plan on adding any further breaking changes, there is still a slight change that we will be forced to do one, based on your feedback.")])]),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"All other docs pages will refer to the old @quasar/app-webpack version (v3) specs. Only this page mentions (for now) about how to use the v4 beta.")]),n("h3",{id:"a-note-to-app-extensions-owners",class:"doc-heading doc-h3",onClick:u=>i(x)("a-note-to-app-extensions-owners")},"A note to App Extensions owners",8,["onClick"]),n("p",null,"You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-webpack. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:"),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`api.compatibleWith(
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` '@quasar/app-webpack',
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` '^3.0.0'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` '^3.0.0 || ^4.0.0-beta.1'
`)]),a(")")])]),n(o)]),_:1}),n("h3",{id:"notable-breaking-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("notable-breaking-changes")},"Notable breaking changes",8,["onClick"]),n("ul",null,[n("li",null,"Minimum Node.js version is now 18.12"),n("li",null,[a("We have shifted towards an ESM style for the whole Quasar project folder, so many default project files now require ESM code (although using "),n("code",{class:"doc-token"},".cjs"),a(" as an extension for these files is supported, but you will most likely need to rename the extension should you not wish to change anything). One example is the "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" file which now it’s assumed to be ESM too (so change from "),n("code",{class:"doc-token"},".js"),a(" to "),n("code",{class:"doc-token"},".cjs"),a(" should you still want a CommonJs file).")]),n("li",null,"Ported and adapted the superior devserver implementation from @quasar/app-vite for all Quasar modes. The benefits are huge."),n("li",null,[a("Ported the superior implementation of SSR, PWA, Electron & BEX modes from @quasar/app-vite. We will detail each Quasar mode changes on this docs page. "),n("ul",null,[n("li",null,[a("SSR - some of the noticeable improvements: "),n("ul",null,[n("li",null,"Improved reliability: same server code runs in dev and prod"),n("li",null,"More target webserver options: you can replace express() with whatever else you are using"),n("li",null,"Perf: client-side code no longer re-compiles from scratch when changing code in /src-ssr"),n("li",null,"Faster & better compilation for files in /src-ssr (now built with Esbuild instead of Webpack)")])]),n("li",null,[a("PWA - some of the noticeable improvements: "),n("ul",null,[n("li",null,"Many new configuration options (while removing a lot of the old ones)"),n("li",null,"Faster & better compilation for files in /src-pwa (now built with Esbuild instead of Webpack)")])]),n("li",null,[a("Electron "),n("ul",null,[n("li",null,"Now compiles to ESM (thus also taking advantage of the Electron in ESM format)"),n("li",null,"Faster & better compilation for files in /src-electron (now built with Esbuild instead of Webpack)"),n("li",null,"Support for multiple preload scripts")])]),n("li",null,[a("BEX - some of the noticeable improvements: "),n("ul",null,[n("li",null,"Ported the superior implementation from @quasar/app-vite, which also means that when you spawn the mode you can choose between extension Manifest v2 and Manifest v3"),n("li",null,"The manifest is now held in a file of its own (/src-pwa/manifest.json) instead of inside the /quasar.config file")])])])]),n("li",null,[a("Webpack will now only compile the contents of "),n("code",{class:"doc-token"},"/src"),a(" folder, while the rest (/src-pwa, /src-electron, etc) are now handled by Esbuild. This translates to a superior build speed and handling of Node.js formats.")]),n("li",null,[a("The “test” cmd was removed due to latest updates for @quasar/testing-* packages. See "),n(W,{to:"https://testing.quasar.dev/packages/testing/"},{default:l(()=>[a("here")]),_:1})]),n("li",null,"The “clean” cmd has been re-designed. Type “quasar clean -h” in your upgraded Quasar project folder for more info."),n("li",null,"Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence."),n("li",null,[n("strong",null,"We will detail more breaking changes for each of the Quasar modes below"),a(".")])]),n("h3",{id:"highlights-on-whats-new",class:"doc-heading doc-h3",onClick:u=>i(x)("highlights-on-whats-new")},"Highlights on what’s new",8,["onClick"]),n("p",null,"Some of the work below has already been backported to the old @quasar/app-webpack v3, but posting here for reader’s awareness."),n("ul",null,[n("li",null,"feat(app-webpack): ability to run multiple quasar dev/build commands simultaneously (example: can run “quasar dev -m capacitor” and “quasar dev -m ssr” and “quasar dev -m capacitor -T ios” simultaneously)"),n("li",null,"feat(app-webpack): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)"),n("li",null,"feat(app-webpack): Better TS typings overall"),n("li",null,"feat(app-webpack): upgrade to Typescript v5; drop fork-ts-checker"),n("li",null,"feat(app-webpack): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)"),n("li",null,"feat(app-webpack): reload app if one of the imports from quasar.config file changes"),n("li",null,"feat(app-webpack): TS detection should keep account of quasar.config file format too (quasar.config.ts)"),n("li",null,"feat(app-webpack): env dotfiles support #15303"),n("li",null,"feat(app-webpack): New quasar.config file props: build > envFolder (string) and envFiles (string[])"),n("li",null,"feat(app-webpack): support for postcss config file in multiple formats: postcss.config.cjs, .postcssrc.js, postcss.config.js, postcss.config.mjs, .postcssrc.cjs, .postcssrc.mjs"),n("li",null,"feat(app-webpack): support for babel config file in multiple formats: babel.config.cjs, babel.config.js, babel.config.mjs, .babelrc.js, .babelrc.cjs, .babelrc.mjs, .babelrc"),n("li",null,"feat(app-webpack): reopen browser (if configured so) when changing app url through quasar.config file"),n("li",null,"feat(app-webpack): port quasar.config file > electron > inspectPort prop from q/app-vite"),n("li",null,"feat(app-webpack): port quasar.config file > build > rawDefine from q/app-vite"),n("li",null,"feat&perf(app-webpack): faster & more accurate algorithm for determining node package manager to use"),n("li",null,"feat(app-webpack): highly improve SSR perf + mem usage (especially for prod); major refactoring of ssr-helpers; also include renderPreloadTag() from q/app-vite"),n("li",null,"feat(app-webpack): support for SSR development with HTTPS"),n("li",null,"feat(app-webpack): SSR - ability to replace express() with any other connect-like webserver"),n("li",null,"feat(app-webpack): SSR - no longer recompile everything when changing code in /src-ssr"),n("li",null,"feat(app-webpack): upgrade deps"),n("li",null,"feat(app-webpack): remove workaround for bug in Electron 6-8 in cli templates (#15845)"),n("li",null,"feat(app-webpack): remove bundleWebRuntime config for Capacitor v5+"),n("li",null,"feat(app-webpack): use workbox v7 by default"),n("li",null,"feat(app-webpack): quasar.config > build > htmlMinifyOptions"),n("li",null,"feat+refactor(app-webpack): ability to run multiple modes + dev/build simultaneously"),n("li",null,"feat(app-webpack): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools"),n("li",null,"perf(app-webpack): only verify quasar.conf server address for “dev” cmd"),n("li",null,"feat(app-webpack): pick new electron inspect port for each instance"),n("li",null,"refactor(app-webpack): AE support - better and more efficient algorithms"),n("li",null,"feat(app-webpack): AE support for ESM format"),n("li",null,"feat(app-webpack): AE support for TS format (through a build step)"),n("li",null,"feat(app-webpack): AE API new methods -> hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()"),n("li",null,"feat(app-webpack): AE -> Prompts API (and ability for prompts default exported fn to be async)"),n("li",null,"feat(app-webpack): smarter app files validation"),n("li",null,"refactor(app-webpack): the “clean” cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)"),n("li",null,"feat(app-webpack): Support for Bun as package manager #16335"),n("li",null,"feat(app-webpack): for default /src-ssr template -> prod ssr -> on error, print err stack if built with debugging enabled"),n("li",null,"fix(app-webpack): electron preload script triggering “module not found”"),n("li",null,"feat(app-webpack): upgrade to webpack-dev-server v5")]),n("h3",{id:"beginning-of-the-upgrade-process",class:"doc-heading doc-h3",onClick:u=>i(x)("beginning-of-the-upgrade-process")},"Beginning of the upgrade process",8,["onClick"]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Recommendation"),n("p",null,[a("If you are unsure that you won’t skip by mistake any of the recommended changes, you can scaffold a new project folder with the @quasar/app-webpack v4 beta at any time and then easily start porting your app from there. The bulk of the changes refer to the different project folder config files and mostly NOT to your /src files. "),n("br"),n("br")]),n(i(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(()=>[n(h,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(" create quasar")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(" init quasar")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ `),n("span",{class:"token function"},"pnpm"),a(" create quasar")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),n(o,{lang:"bash"})]),_:1})]),_:1}),n("br"),a(' When asked to "Pick Quasar App CLI variant", answer with: "Quasar App CLI with Webpack (BETA | next major version - v4)". ')]),n("p",null,"Preparations:"),n("ul",null,[n("li",null,[n("p",null,[a("If using the global installation of Quasar CLI ("),n("code",{class:"doc-token"},"@quasar/cli"),a("), make sure that you have the latest one. This is due to the support of quasar.config file in multiple formats.")])]),n("li",null,[n("p",null,"Again, we highlight that the minimum supported version of Node.js is now v16 (always use the LTS versions of Node.js - the higher the version the better).")]),n("li",null,[n("p",null,[a("Edit your "),n("code",{class:"doc-token"},"/package.json"),a(" on the "),n("code",{class:"doc-token"},"@quasar/app-webpack"),a(" entry and assign it "),n("code",{class:"doc-token"},"^4.0.0-beta.1"),a(":")]),n(i(k),{title:"/package.json"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`"devDependencies": {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` "@quasar/app-webpack": "^3.0.0",
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "@quasar/app-webpack": "^4.0.0-beta.1"
`)]),a("}")])]),n(o)]),_:1}),n("br"),a(" Then yarn/npm/pnpm/bun install. "),n("br"),n("br")]),n("li",null,[n("p",null,[a("Convert your "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" file to the ESM format (which is recommended, otherwise rename the file extension to "),n("code",{class:"doc-token"},".cjs"),a(" and use CommonJs format).")]),n(i(k),{title:"/quasar.config.js file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* ctx */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Tip on Typescript"),n("p",null,[a("You can now write this file in TS too should you wish (rename "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" to "),n("code",{class:"doc-token"},"/quasar.config.ts"),a(" – notice the "),n("code",{class:"doc-token"},".ts"),a(" file extension).")])])]),n("li",null,[n("p",null,[a("For consistency with @quasar/app-vite (and easy switch between @quasar/app-webpack and it) move "),n("code",{class:"doc-token"},"/src/index.template.html"),a(" to "),n("code",{class:"doc-token"},"/index.html"),a(" and do the following changes:")]),n(i(k),{title:"/index.html"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-arrow deleted"},[n("span",{class:"token prefix deleted"},"<"),n("span",{class:"token line"},`body>
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` <!-- DO NOT touch the following DIV -->
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` <div id="q-app"></div>
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` <!-- quasar:entry-point -->
`)]),n("span",{class:"token deleted-arrow deleted"},[n("span",{class:"token prefix deleted"},"<"),n("span",{class:"token line"},"/body>")])])]),n(o)]),_:1}),n("br")]),n("li",null,[n("p",null,"(Optional, but recommended) For future-proofing some tools config files, rename the following files (in the root project folder):"),n(S,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:l(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Old name"),n("th",{class:"text-left"},"New name")])]),n("tbody",null,[n("tr",null,[n("td",null,"postcss.config.js"),n("td",null,"postcss.config.cjs")]),n("tr",null,[n("td",null,".eslintrc.js"),n("td",null,".eslintrc.cjs")]),n("tr",null,[n("td",null,"babel.config.js"),n("td",null,"babel.config.cjs")])])]),_:1}),n("br")]),n("li",null,[n("p",null,[a("You might want to add the following to your "),n("code",{class:"doc-token"},"/.gitignore"),a(" file. These kind of files are left for inspection purposes when something fails with your "),n("code",{class:"doc-token"},"/quasar.config"),a(" file (and can be removed by the "),n("code",{class:"doc-token"},"quasar clean"),a(" command):")]),n(i(k),{title:"/.gitignore"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`.DS_Store
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
*.sln`)])]),n(o,{lang:"bash"})]),_:1}),n("br")]),n("li",null,[n("p",null,[a("If you have linting, please review your "),n("code",{class:"doc-token"},"/.eslintignore"),a(" file as well:")]),n(i(k),{title:"/.eslintignore"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),a(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),a(`babel.config.cjs
`),n("span",{class:"c-line c-highlight"}),a("/quasar.config.*.temporary.compiled*")])]),n(o,{lang:"bash"})]),_:1}),n("br")]),n("li",null,[n("p",null,[a("If using Typescript, then ensure that your "),n("code",{class:"doc-token"},"/tsconfig.json"),a(" file looks like this:")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1})])]),n("h3",{id:"spa-capacitor-cordova-modes-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("spa-capacitor-cordova-modes-changes")},"SPA / Capacitor / Cordova modes changes",8,["onClick"]),n("ul",null,[n("li",null,[a("No need to change anything in the "),n("code",{class:"doc-token"},"/src"),a(", "),n("code",{class:"doc-token"},"/src-capacitor"),a(" or "),n("code",{class:"doc-token"},"/src-cordova"),a(" folders.")])]),n("h3",{id:"pwa-mode-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("pwa-mode-changes")},"PWA mode changes",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"register-service-worker"),a(" dependency is no longer supplied by the CLI. You will have to install it yourself in your project folder.")]),n(i(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(()=>[n(h,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(),n("span",{class:"token parameter variable"},"--save"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1}),n(h,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(" register-service-worker@^1.0.0")])]),n(o,{lang:"bash"})]),_:1})]),_:1}),n("p",null,[a("Edit your "),n("code",{class:"doc-token"},"/src-pwa/custom-service-worker.js"),a(" file:")]),n(i(k),{title:"/src-pwa/custom-service-worker.js"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import { precacheAndRoute } from 'workbox-precaching'
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Use with precache injection
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` precacheAndRoute(self.__WB_MANIFEST)
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { clientsClaim } from 'workbox-core'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { registerRoute, NavigationRoute } from 'workbox-routing'
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` self.skipWaiting()
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` clientsClaim()
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Use with precache injection
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` precacheAndRoute(self.__WB_MANIFEST)
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` cleanupOutdatedCaches()
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Non-SSR fallbacks to index.html
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Production SSR fallbacks to offline.html (except for dev)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` if (process.env.MODE !== 'ssr' || process.env.PROD) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  registerRoute(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    new NavigationRoute(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`      { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    )
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  )
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"}," }")])])]),n(o)]),_:1}),n("p",null,[a("Create the file "),n("code",{class:"doc-token"},"/src-pwa/manifest.json"),a(" and move /quasar.config file > pwa > manifest from there to this file. Here’s an example of how it can look like:")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"orientation"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"portrait"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"background_color"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"#ffffff"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"theme_color"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"#027be3"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"icons"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-128x128.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"128x128"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-192x192.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"192x192"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-256x256.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"256x256"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-384x384.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"384x384"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"icons/icon-512x512.png"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"512x512"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"image/png"'),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("p",null,[a("There are some subtle changes in "),n("code",{class:"doc-token"},"/quasar.config"),a(" file too:")]),n(i(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker: 'src-pwa/custom-service-worker',
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker: 'src-pwa/custom-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile: 'src-pwa/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`},

pwa: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxPluginMode?: "GenerateSW" | "InjectManifest";
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` workboxMode?: "GenerateSW" | "InjectManifest";
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Full option list can be found
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  [here](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxOptions?: object;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox GenerateSW options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendGenerateSWOptions?: (config: GenerateSWOptions) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox InjectManifest options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendInjectManifestOptions?: (config: InjectManifestOptions) => void;
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Now the contents for this held in a new file: /src-pwa/manifest.json
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // and its replaced by extendManifestJson below:
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` manifest?: PwaManifestOptions;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should you need some dynamic changes to the /src-pwa/manifest.json,
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * use this method to do it.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendManifestJson?: (json: PwaManifestOptions) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA manifest filename to use on your browser
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default manifest.json
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` manifestFilename?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Does the PWA manifest tag requires crossorigin auth?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` useCredentialsForManifestTag?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Webpack config object for the custom service worker ONLY (`/src-pwa/custom-service-worker`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  when pwa > workboxPluginMode is set to InjectManifest
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackCustomSW?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackCustomSW()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the custom service worker ONLY (`/src-pwa/custom-service-worker`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  when pwa > workboxPluginMode is set to InjectManifest
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackCustomSW?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the custom service worker
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (if using it through workboxMode: 'InjectManifest')
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendPWACustomSWConf?: (config: EsbuildConfiguration) => void;
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * @default
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},"  * ```typescript\n"),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleMobileWebAppCapable: 'yes';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleMobileWebAppStatusBarStyle: 'default';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon120: 'icons/apple-icon-120x120.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon180: 'icons/apple-icon-180x180.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon152: 'icons/apple-icon-152x152.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon167: 'icons/apple-icon-167x167.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleSafariPinnedTab: 'icons/safari-pinned-tab.svg';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    msapplicationTileImage: 'icons/ms-icon-144x144.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    msapplicationTileColor: '#000000';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * }
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},"   * ```\n"),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` metaVariables?: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleMobileWebAppCapable: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleMobileWebAppStatusBarStyle: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon120: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon180: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon152: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon167: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleSafariPinnedTab: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   msapplicationTileImage: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   msapplicationTileColor: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` };
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` metaVariablesFn?: (manifest?: PwaManifestOptions) => PwaMetaVariablesEntry[];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * Auto inject the PWA meta tags?
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * If using the function form, return HTML tags as one single string.
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
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
`)]),a("}")])]),n(o)]),_:1}),n("h3",{id:"electron-mode-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("electron-mode-changes")},"Electron mode changes",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The distributables (your production code) will be compiled to ESM form, thus also taking advantage of Electron in ESM form.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("You might want to upgrade the "),n("code",{class:"doc-token"},"electron"),a(" package to the latest so it can handle the ESM format.")])]),n("p",null,[a("Most changes refer to editing your "),n("code",{class:"doc-token"},"/src-electron/electron-main.js"),a(" file:")]),n(i(k),{title:"Icon path"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`import { fileURLToPath } from 'node:url'
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`const currentDir = fileURLToPath(new URL('.', import.meta.url))
`)]),a(`
function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(o)]),_:1}),n(i(k),{title:"Preload script"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`import { fileURLToPath } from 'node:url'

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
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])]),n(o)]),_:1}),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Edit "),n("code",{class:"doc-token"},"/quasar.config.js"),a(" to specify your preload script: "),n("br"),n("br")]),n(i(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`)]),a(`},

electron: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts: [ 'electron-preload' ],
`)]),a("}")])]),n(o)]),_:1}),n("br"),a(" As you can see, you can now specify multiple preload scripts should you need them. ")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  // ...
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  mainWindow.loadURL(process.env.APP_URL)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  if (process.env.DEV) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadURL(process.env.APP_URL)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  } else {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadFile('index.html')
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},"  }")])])]),n(o)]),_:1}),n("p",null,"Finally, the new file should look like this:"),n(i(k),{title:"The new /src-electron/electron-main.js"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'electron'"),a(`
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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]),_:1}),n("p",null,[a("There are also more "),n("code",{class:"doc-token"},"/quasar.config"),a(" file changes:")]),n(i(k),{title:"/quasar.config file > electron"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`electron: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Webpack config object for the Main Process ONLY (`/src-electron/electron-main`) */\n")]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackMain?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackMain()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the Main Process ONLY (`/src-electron/electron-main`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackMain?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the electron-main thread
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendElectronMainConf?: (config: EsbuildConfiguration) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Webpack config object for the Preload Process ONLY (`/src-electron/electron-preload`) */\n")]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackPreload?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackPreload()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the Preload Process ONLY (`/src-electron/electron-preload`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackPreload?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the electron-preload thread
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendElectronPreloadConf?: (config: EsbuildConfiguration) => void;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * The list of content scripts (js/ts) that you want embedded.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Each entry in the list should be a filename (WITHOUT its extension) from /src-electron/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'electron-preload' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example [ 'my-other-preload-script' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts?: string[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify the debugging port to use for the Electron app when running in development mode
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 5858
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` inspectPort?: number;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify additional parameters when yarn/npm installing
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * the UnPackaged folder, right before bundling with either
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * electron packager or electron builder;
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * Example: [ '--ignore-optional', '--some-other-param' ]
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * Example: [ 'install', '--production', '--ignore-optional', '--some-other-param' ]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` unPackagedInstallParams?: string[];
`)]),a("}")])]),n(o)]),_:1}),n("h3",{id:"ssr-mode-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("ssr-mode-changes")},"SSR mode changes",8,["onClick"]),n("p",null,[a("The support for "),n("code",{class:"doc-token"},"/src-ssr/production-export.js"),a(" has been dropped (delete it). The same SSR webserver now runs for both development and production, so create a "),n("code",{class:"doc-token"},"/src-ssr/server.js"),a(" with the following contents:")]),n(i(k),{title:"/src-ssr/server.js"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Make sure to yarn add / npm install (in your project root)
 * anything you import here (except for express and compression).
 */`),a(`
`),n("span",{class:"token keyword"},"import"),a(" express "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'express'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" compression "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'compression'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  ssrClose`),n("span",{class:"token punctuation"},","),a(`
  ssrCreate`),n("span",{class:"token punctuation"},","),a(`
  ssrListen`),n("span",{class:"token punctuation"},","),a(`
  ssrServeStaticContent`),n("span",{class:"token punctuation"},","),a(`
  ssrRenderPreloadTag
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`

`),n("span",{class:"token comment"},`/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" create "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrCreate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" app "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// attackers can use this header to detect apps running Express"),a(`
  `),n("span",{class:"token comment"},"// and then launch specifically-targeted attacks"),a(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"disable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'x-powered-by'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),a(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(` app
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},`/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The "listenResult" param for the "close()" definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" listen "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrListen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app"),n("span",{class:"token punctuation"},","),a(" devHttpsApp"),n("span",{class:"token punctuation"},","),a(" port"),n("span",{class:"token punctuation"},","),a(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" server "),n("span",{class:"token operator"},"="),a(" devHttpsApp "),n("span",{class:"token operator"},"||"),a(` app
  `),n("span",{class:"token keyword"},"return"),a(" server"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),a("port"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),a(),n("span",{class:"token operator"},"+"),a(" port"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},`/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the "listen()" call above,
 * you can use the "listenResult" param.
 *
 * Can be async.
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" close "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" listenResult "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" listenResult"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" maxAge "),n("span",{class:"token operator"},"="),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),a(`
  `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"0"),a(`
  `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"60"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"24"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"30"),a(`

`),n("span",{class:"token comment"},`/**
 * Should return middleware that serves the indicated path
 * with static content.
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" serveStaticContent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrServeStaticContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("path"),n("span",{class:"token punctuation"},","),a(" opts")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" express"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"static"),n("span",{class:"token punctuation"},"("),a("path"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
    maxAge`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token operator"},"..."),a(`opts
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" jsRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" cssRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" woffRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" woff2RE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff2$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" gifRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.gif$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" jpgRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.jpe?g$"),n("span",{class:"token regex-delimiter"},"/")]),a(`
`),n("span",{class:"token keyword"},"const"),a(" pngRE "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.png$"),n("span",{class:"token regex-delimiter"},"/")]),a(`

`),n("span",{class:"token comment"},`/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(" renderPreloadTag "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ssrRenderPreloadTag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token comment"},"/* , { ssrContext } */"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("jsRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<script src="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" defer crossorigin><\/script>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("cssRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="stylesheet" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("woffRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("woff2RE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff2" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("gifRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/gif" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("jpgRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/jpeg" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("pngRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/png" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token string"},"''"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]),_:1}),n("p",null,[a("If you have "),n("code",{class:"doc-token"},"/src-ssr/middlewares/compression.js"),a(" file, delete it because this code is now embedded into "),n("code",{class:"doc-token"},"/src-ssr/server.js"),a(". Then edit your "),n("code",{class:"doc-token"},"/quasar.config"),a(" file to remove the reference to the old file:")]),n(i(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` middlewares: [
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   ctx.prod ? 'compression' : '',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   'render' // keep this as last one
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ]
`)]),a("}")])]),n(o)]),_:1}),n("p",null,[a("There are some additional changes to the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(i(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * If a PWA should take over or just a SPA.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When used in object form, you can specify Workbox options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  which will be applied on top of `pwa > workboxOptions`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` pwa?: boolean | object;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwa?: boolean;
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
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // now part of the /src-ssr/server.js code
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
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Webpack config object for the Webserver
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * which includes the SSR middleware
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackWebserver?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackWebserver()` but uses `webpack-chain` instead.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Handles the Webserver webpack config ONLY which includes the SSR middleware
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackWebserver?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the SSR webserver
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (which includes the SSR middlewares)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendSSRWebserverConf?: (config: EsbuildConfiguration) => void;
`)]),a("}")])]),n(o)]),_:1}),n("h3",{id:"bex-mode-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("bex-mode-changes")},"Bex mode changes",8,["onClick"]),n("p",null,"The implementation of the BEX mode has been ported from @quasar/app-vite, so when you spawn this Quasar mode it will now ask you what extension Manifest version you want (v2 or v3)."),n("p",null,[a("But this also means that your "),n("code",{class:"doc-token"},"/src-bex"),a(" folder has suffered significant files and folders structure changes. It would be best to temporarily copy your /src-bex folder to a safe place, then remove and add back the BEX mode:")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`$ quasar mode remove bex
$ quasar mode `),n("span",{class:"token function"},"add"),a(" bex")])]),n(o,{lang:"bash"})]),_:1}),n("p",null,"And then, try to understand the new structure and port your old /src-bex to it. There is unfortunately no other way to put it."),n("p",null,[a("But first, there are some changes to the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file that you should be aware of:")]),n(i(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile: 'src-bex/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),a(`},

bex: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` builder: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   directories: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     input: cfg.build.distDir,
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     output: path.join(cfg.build.packagedDistDir, 'Packaged')
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` }
`)]),a("}")])]),n(o)]),_:1}),n("p",null,[a("Some of the changes, like moving the background script from "),n("code",{class:"doc-token"},"/js/background.js"),a(" directly to the root folder, were required by external factors in order for future-proofing the extension structure.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[n("strong",null,"Temporarily"),a(", until this version of @quasar/app-webpack gets out of beta status, it would be a good idea to check the Quasar CLI with Vite docs on BEX since they will now mostly match.")])]),n("p",null,"Click on the blocks below to expand and see the old and the new folder structure:"),n("details",{class:"doc-note doc-note--details"},[n("summary",{class:"doc-note__title"},"The *OLD* folder structure"),n(b,{def:m.oldBexTree},null,8,["def"])]),n("details",{class:"doc-note doc-note--details"},[n("summary",{class:"doc-note__title"},"The *NEW* folder structure"),n(b,{def:m.newBexTree},null,8,["def"])]),n("h3",{id:"other-quasar-config-file-changes",class:"doc-heading doc-h3",onClick:u=>i(x)("other-quasar-config-file-changes")},"Other /quasar.config file changes",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"ctx"),a(" from "),n("code",{class:"doc-token"},"/quasar.config"),a(" file has some additional props ("),n("code",{class:"doc-token"},"vueDevtools"),a(" and "),n("code",{class:"doc-token"},"appPaths"),a("):")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" configure "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ctx.vueDevtools & ctx.appPaths is available")])]),n(o)]),_:1}),n("p",null,[a("The definition for "),n("code",{class:"doc-token"},"ctx.vueDevtools"),a(" is:")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** True if opening remote Vue Devtools in development mode. */"),a(`
`),n("span",{class:"token literal-property property"},"vueDevtools"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";")])]),n(o)]),_:1}),n("p",null,[a("The definition for "),n("code",{class:"doc-token"},"ctx.appPaths"),a(" is defined with QuasarAppPaths TS type as below:")]),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`export interface IResolve {
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
`)]),a("}")])]),n(o)]),_:1}),n("p",null,"The Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence, so please remove the following:"),n(i(k),{title:"/quasar.config"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * Add support for TypeScript.
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"}," supportTS?: boolean | { tsLoaderConfig: object; tsCheckerConfig: object };")])])]),n(o)]),_:1}),n("p",null,[a("The definition of "),n("code",{class:"doc-token"},"/quasar.config"),a(" file > sourceFiles has some changes:")]),n(i(k),{title:"/quasar.config > sourceFiles"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`sourceFiles: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` rootComponent?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` router?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` store?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` indexHtmlTemplate?: string;
`)]),a(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker?: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker?: string;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker?: string;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electronMain?: string;
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrServerIndex?: string;
`)]),a(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile?: string;
`)]),a("}")])]),n(o)]),_:1}),n("p",null,"There is a new prop for linting:"),n(i(k),{title:"/quasar.config > eslint (New!)"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * Should it report warnings?
   * @default false
   */`),a(`
  warnings`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Should it report errors?
   * @default false
   */`),a(`
  errors`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Fix on save.
   * @default false
   */`),a(`
  fix`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint for Esbuild
   */`),a(`
  rawEsbuildEslintOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Omit"),n("span",{class:"token operator"},"<"),a(`
    ESLint`),n("span",{class:"token punctuation"},"."),a("Options"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token string"},'"cache"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"cacheLocation"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"fix"'),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},'"errorOnUnmatchedPattern"'),a(`
  `),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint Webpack plugin
   */`),a(`
  rawWebpackEslintPluginOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" WebpackEslintOptions"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to include (can be in glob format; for Esbuild ESLint only)
   */`),a(`
  include`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   * @default ['node_modules']
   */`),a(`
  exclude`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Enable or disable caching of the linting results.
   * @default true
   */`),a(`
  cache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Formatter to use
   * @default 'stylish'
   */`),a(`
  formatter`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" ESLint"),n("span",{class:"token punctuation"},"."),a("Formatter"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n(i(k),{title:"/quasar.config > build"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`build: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Transpile JS code with Babel
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transpile?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackTranspile?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Add dependencies for transpiling with Babel (from node_modules, which are by default not transpiled).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * It is ignored if "transpile" is not set to true.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example [ /my-dependency/, 'my-dep', ...]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transpileDependencies?: (RegExp | string)[];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackTranspileDependencies?: (RegExp | string)[];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Add support for also referencing assets for custom tags props.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example { 'my-img-comp': 'src', 'my-avatar': [ 'src', 'placeholder-src' ]}
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transformAssetsUrls?: Record<string, string | string[]>;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // use vueLoaderOptions instead
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /** Show a progress bar while compiling. */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` showProgress?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackShowProgress?: boolean;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Source map [strategy](https://webpack.js.org/configuration/devtool/) to use.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` devtool?: WebpackConfiguration["devtool"];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackDevtool?: WebpackConfiguration["devtool"];
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * History mode requires configuration on your deployment web server too.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'hash'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueRouterMode?: "hash" | "history";
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Sets Vue Router base.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should not need to configure this, unless absolutely needed.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueRouterBase?: string;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When using SSR+PWA, this is the name of the
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA index html file.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Do NOT use index.html as name as it will mess SSR up!
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'offline.html'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrPwaHtmlFilename?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Moved to ssr > pwaOfflineHtmlFilename
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Options to supply to `ts-loader` */\n")]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` tsLoaderOptions?: object;
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Esbuild is used to build contents of /src-pwa, /src-ssr, /src-electron, /src-bex
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *    {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *      browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *      node: 'node20'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *    }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` esbuildTarget?: EsbuildTargetOptions;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // please check below for the EsbuildTargetOptions interface
`)]),a(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Defines constants that get replaced in your app.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Unlike `env`, you will need to use JSON.stringify() on the values yourself except for booleans.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Also, these will not be prefixed with `process.env.`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` rawDefine?: { [index: string]: string | boolean | undefined | null };
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
`)]),a(`}

interface EsbuildTargetOptions {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default ['es2022', 'firefox115', 'chrome115', 'safari14']
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` browser?: string[];
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example 'node20'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` node?: string;
`)]),a("}")])]),n(o)]),_:1}),n("p",null,[a("Due to the upgrade to "),n("code",{class:"doc-token"},"webpack-dev-server"),a(" v5 in "),n("code",{class:"doc-token"},"@quasar/app-webpack"),a(" v4.0.0-beta.3:")]),n(i(k),{title:"/quasar.config > devServer"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`devServer: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` proxy: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   "/api": {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     target: "http://localhost:3000",
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     changeOrigin: true,
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   },
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` }
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` proxy: [
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     context: ["/api"],
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     target: "http://localhost:3000",
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     changeOrigin: true,
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   },
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` ]
`)]),a("}")])]),n(o)]),_:1}),n("h3",{id:"the-env-dotfiles-support",class:"doc-heading doc-h3",onClick:u=>i(x)("the-env-dotfiles-support")},"The env dotfiles support",8,["onClick"]),n("p",null,"Expanding a bit on the env dotfiles support. These files will be detected and used (the order matters):"),n(i(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,`.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git`)]),n(o)]),_:1}),n("p",null,[a("…where “ignored by git” assumes a default project folder created after releasing this package, otherwise add "),n("code",{class:"doc-token"},".env.local*"),a(" to your "),n("code",{class:"doc-token"},"/.gitignore"),a(" file.")]),n("p",null,"You can also configure the files above to be picked up from a different folder or even add more files to the list:"),n(i(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"envFolder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'./'"),a(),n("span",{class:"token comment"},"// absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token literal-property property"},"envFiles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// Path strings to your custom files --- absolute or relative path to root project folder"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1})]}),_:1},T))}}},j=v.setup;v.setup=(q,y)=>{const m=M();return(m.modules||(m.modules=new Set)).add("src/pages/quasar-cli-webpack/upgrade-guide.md"),j?j(q,y):void 0};const _=A(v,[["__file","upgrade-guide.md"]]);export{_ as default};
