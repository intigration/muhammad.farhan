import{resolveComponent as j,mergeProps as S,withCtx as u,unref as o,createVNode as n,createTextVNode as a,useSSRContext as W}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as q,a as $}from"./DocPage-DKr-0pQn.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as P}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const g={__name:"index-api",__ssrInlineRender:!0,setup(v){const h=[{id:"api-ctx",title:"1.1. api.ctx",sub:!0},{id:"api-engine",title:"1.2. api.engine",sub:!0},{id:"api-hasvite",title:"1.3. api.hasVite",sub:!0},{id:"api-haswebpack",title:"1.4. api.hasWebpack",sub:!0},{id:"api-extid",title:"1.5. api.extId",sub:!0},{id:"api-prompts",title:"1.6. api.prompts",sub:!0},{id:"api-resolve",title:"1.7. api.resolve",sub:!0},{id:"api-appdir",title:"1.8. api.appDir",sub:!0},{id:"api-hastypescript",title:"1.9. api.hasTypescript",sub:!0},{id:"api-haslint",title:"1.10. api.hasLint",sub:!0},{id:"api-getstorepackagename",title:"1.11. api.getStorePackageName",sub:!0},{id:"api-getnodepackagername",title:"1.12. api.getNodePackagerName",sub:!0},{id:"api-compatiblewith",title:"1.13. api.compatibleWith",sub:!0},{id:"api-haspackage",title:"1.14. api.hasPackage",sub:!0},{id:"api-hasextension",title:"1.15. api.hasExtension",sub:!0},{id:"api-getpackageversion",title:"1.16. api.getPackageVersion",sub:!0},{id:"api-extendquasarconf",title:"1.17. api.extendQuasarConf",sub:!0},{id:"api-registercommand",title:"1.18. api.registerCommand",sub:!0},{id:"api-registerdescribeapi",title:"1.19. api.registerDescribeApi",sub:!0},{id:"api-getpersistentconf",title:"1.20. api.getPersistentConf",sub:!0},{id:"api-setpersistentconf",title:"1.21. api.setPersistentConf",sub:!0},{id:"api-mergepersistentconf",title:"1.22. api.mergePersistentConf",sub:!0},{id:"api-beforedev",title:"1.23. api.beforeDev",sub:!0},{id:"api-afterdev",title:"1.24. api.afterDev",sub:!0},{id:"api-beforebuild",title:"1.25. api.beforeBuild",sub:!0},{id:"api-afterbuild",title:"1.26. api.afterBuild",sub:!0},{id:"api-onpublish",title:"1.27. api.onPublish",sub:!0},{id:"quasar-app-vite-only",title:"2. @quasar/app-vite only"},{id:"api-extendviteconf",title:"2.1. api.extendViteConf",sub:!0},{id:"api-extendssrwebserverconf",title:"2.2. api.extendSSRWebserverConf",sub:!0},{id:"api-extendelectronmainconf",title:"2.3. api.extendElectronMainConf",sub:!0},{id:"api-extendelectronpreloadconf",title:"2.4. api.extendElectronPreloadConf",sub:!0},{id:"api-extendpwacustomswconf",title:"2.5. api.extendPWACustomSWConf",sub:!0},{id:"api-extendbexscriptsconf",title:"2.6. api.extendBexScriptsConf",sub:!0},{id:"quasar-app-webpack-only",title:"3. @quasar/app-webpack only"},{id:"api-chainwebpack",title:"3.1. api.chainWebpack",sub:!0},{id:"api-extendwebpack",title:"3.2. api.extendWebpack",sub:!0},{id:"api-chainwebpackmainelectronprocess",title:"3.3. api.chainWebpackMainElectronProcess",sub:!0},{id:"api-extendwebpackmainelectronprocess",title:"3.4. api.extendWebpackMainElectronProcess",sub:!0},{id:"api-chainwebpackpreloadelectronprocess",title:"3.5. api.chainWebpackPreloadElectronProcess",sub:!0},{id:"api-extendwebpackpreloadelectronprocess",title:"3.6. api.extendWebpackPreloadElectronProcess",sub:!0},{id:"api-chainwebpackwebserver",title:"3.7. api.chainWebpackWebserver",sub:!0},{id:"api-extendwebpackwebserver",title:"3.8. api.extendWebpackWebserver",sub:!0},{id:"api-chainwebpackcustomsw",title:"3.9. api.chainWebpackCustomSW",sub:!0},{id:"api-extendwebpackcustomsw",title:"3.10. api.extendWebpackCustomSW",sub:!0}];return(b,C,x,y)=>{const d=j("q-badge");C(i(q,S({title:"App Extension Index API",desc:"The API for the index script of a Quasar App Extension. Provides access to Quasar context, registers new CLI commands, extends Webpack config and more.",heading:"","edit-link":"app-extensions/development-guide/index-api",toc:h},y),{default:u((O,p,m,t)=>{if(p)p(`<p${t}>This page refers to <code class="doc-token"${t}>src/index.js</code> file, which is executed on <code class="doc-token"${t}>quasar dev</code> and <code class="doc-token"${t}>quasar build</code>. This is the main process where you can modify the build to suit the needs of your App Extension. For instance, registering a boot file, modifying the webpack process, registering CSS, registering a UI component, registering a Quasar CLI command, etc.</p><p${t}>Example of basic structure of the file:</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// can be async</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// props &amp; methods for &quot;api&quot; Object described below</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// can be async"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// props & methods for "api" Object described below'),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-ctx" class="doc-heading doc-h3"${t}>api.ctx</h3><p${t}>Same as the <code class="doc-token"${t}>ctx</code> from the <code class="doc-token"${t}>/quasar.config</code> file. Helps you make decisions based on the context in which <code class="doc-token"${t}>quasar dev</code> or <code class="doc-token"${t}>quasar build</code> runs.</p><p${t}>Example: You might want to use one of the api methods if running for electron mode only.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>ctx<span class="token punctuation"${s}>.</span>dev <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span> <span class="token operator"${s}>&amp;&amp;</span> api<span class="token punctuation"${s}>.</span>ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>electron <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>beforeDev</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// do something when running quasar dev and</span>
    <span class="token comment"${s}>// with Electron mode</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("ctx"),n("span",{class:"token punctuation"},"."),a("dev "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token operator"},"&&"),a(" api"),n("span",{class:"token punctuation"},"."),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("electron "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeDev"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something when running quasar dev and"),a(`
    `),n("span",{class:"token comment"},"// with Electron mode"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-engine" class="doc-heading doc-h3"${t}>api.engine</h3><p${t}>Contains the Quasar CLI engine (as String) being used. Examples: <code class="doc-token"${t}>@quasar/app-vite</code> or <code class="doc-token"${t}>@quasar/app-webpack</code>.</p><h3 id="api-hasvite" class="doc-heading doc-h3"${t}>api.hasVite</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-vite</code> or not.</p><h3 id="api-haswebpack" class="doc-heading doc-h3"${t}>api.hasWebpack</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-webpack</code> or not.</p><h3 id="api-extid" class="doc-heading doc-h3"${t}>api.extId</h3><p${t}>Contains the <code class="doc-token"${t}>ext-id</code> (String) of this App Extension.</p><h3 id="api-prompts" class="doc-heading doc-h3"${t}>api.prompts</h3><p${t}>Is an Object which has the answers to the prompts when this App Extension got installed. For more info on prompts, check out `),p(i($,{to:"/app-extensions/development-guide/prompts-api"},{default:u((l,e,k,s)=>{if(e)e("Prompts API");else return[a("Prompts API")]}),_:1},m,t)),p(`.</p><h3 id="api-resolve" class="doc-heading doc-h3"${t}>api.resolve</h3><p${t}>Resolves paths within the app on which this App Extension is running. Eliminates the need to import <code class="doc-token"${t}>path</code> and resolve the paths yourself.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// resolves to root of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>app</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;src/my-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>src</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;my-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/public of app</span>
<span class="token comment"${s}>// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>public</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;my-image.png&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-pwa of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>pwa</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-ssr of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>ssr</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-cordova of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>cordova</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;config.xml&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-electron of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>electron</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-electron of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>electron</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-bex of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>bex</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/public of app"),a(`
`),n("span",{class:"token comment"},"// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"public"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-image.png'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-pwa of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pwa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-ssr of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ssr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-cordova of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cordova"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'config.xml'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-bex of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-appdir" class="doc-heading doc-h3"${t}>api.appDir</h3><p${t}>Contains the full path (String) to the root of the app on which this App Extension is running.</p><h3 id="api-hastypescript" class="doc-heading doc-h3"${t}>api.hasTypescript `),p(i(d,{label:"@quasar/app-vite 1.6+"},null,m,t)),p(" "),p(i(d,{label:"@quasar/app-webpack 3.11+"},null,m,t)),p("</h3>"),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;boolean&gt;} host project has Typescript active or not
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasTypescript</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-haslint" class="doc-heading doc-h3"${t}>api.hasLint `),p(i(d,{label:"@quasar/app-vite 1.6+"},null,m,t)),p(" "),p(i(d,{label:"@quasar/app-webpack 3.11+"},null,m,t)),p("</h3>"),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;boolean&gt;} host project has ESLint or not
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasLint</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-getstorepackagename" class="doc-heading doc-h3"${t}>api.getStorePackageName `),p(i(d,{label:"@quasar/app-vite 1.6+"},null,m,t)),p(" "),p(i(d,{label:"@quasar/app-webpack 3.11+"},null,m,t)),p("</h3>"),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;string|undefined&gt;} &#39;pinia&#39; | &#39;vuex&#39; | undefined
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getStorePackageName</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-getnodepackagername" class="doc-heading doc-h3"${t}>api.getNodePackagerName `),p(i(d,{label:"@quasar/app-vite 1.6+"},null,m,t)),p(" "),p(i(d,{label:"@quasar/app-webpack 3.11+"},null,m,t)),p("</h3>"),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;&#39;npm&#39; | &#39;yarn&#39; | &#39;pnpm&#39; | &#39;bun&#39;&gt;}
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getNodePackagerName</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-compatiblewith" class="doc-heading doc-h3"${t}>api.compatibleWith</h3><p${t}>Ensure the App Extension is compatible with a package installed in the host app through a semver condition.</p><p${t}>If the semver condition is not met, then @quasar/app errors out and halts execution.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} packageName
 * @param {string} semverCondition
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;1.x&#39;</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} semverCondition
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'1.x'"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(i(o(r),{title:"A more complex example"},{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-vite&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>
<span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatbileWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-webpack&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^4.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatbileWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-haspackage" class="doc-heading doc-h3"${t}>api.hasPackage</h3><p${t}>Determine if some package is installed in the host app through a semver condition.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasPackage</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;vuelidate&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// hey, this app has it (any version of it)</span>
<span class="token punctuation"${s}>}</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasPackage</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;quasar&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// hey, this app has Quasar UI v2 installed</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-hasextension" class="doc-heading doc-h3"${t}>api.hasExtension</h3><p${t}>Check if another app extension is npm installed and Quasar CLI has invoked it.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed &amp; invoked
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasExtension</span><span class="token punctuation"${s}>(</span>extId<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// hey, we have it</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),a("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, we have it"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-getpackageversion" class="doc-heading doc-h3"${t}>api.getPackageVersion</h3><p${t}>Get the version of a host app package.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} packageName
 * @return {string|undefined} version of app&#39;s package
 */</span>
console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getPackageVersion</span><span class="token punctuation"${s}>(</span>packageName<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>)</span>
<span class="token comment"${s}>// output examples:</span>
<span class="token comment"${s}>//   1.1.3</span>
<span class="token comment"${s}>//   undefined (when package not found)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),a("packageName"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// output examples:"),a(`
`),n("span",{class:"token comment"},"//   1.1.3"),a(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendquasarconf" class="doc-heading doc-h3"${t}>api.extendQuasarConf</h3><p${t}>Extends quasar.config file</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (cfg: Object, ctx: Object) =&gt; undefined
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendQuasarConf</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>conf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something with quasar.config file:</span>
  <span class="token comment"${s}>// add, change anything</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object, ctx: Object) => undefined
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something with quasar.config file:"),a(`
  `),n("span",{class:"token comment"},"// add, change anything"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(i(o(r),{title:"A more complex example:"},{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendQuasarConf</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>conf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// do something with quasar.config file that is specific</span>
    <span class="token comment"${s}>// to @quasar/app-vite</span>
  <span class="token punctuation"${s}>}</span>
  <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span> <span class="token comment"${s}>// api.hasWebpack === true</span>
    <span class="token comment"${s}>// do something with quasar.config file that is specific</span>
    <span class="token comment"${s}>// to @quasar/app-webpack</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something with quasar.config file that is specific"),a(`
    `),n("span",{class:"token comment"},"// to @quasar/app-vite"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    `),n("span",{class:"token comment"},"// do something with quasar.config file that is specific"),a(`
    `),n("span",{class:"token comment"},"// to @quasar/app-webpack"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h4 id="registering-boot-and-css-files" class="doc-heading doc-h4"${t}>Registering boot and css files</h4>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendQuasarConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>conf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// make sure my-ext boot file is registered</span>
    conf<span class="token punctuation"${s}>.</span>boot<span class="token punctuation"${s}>.</span><span class="token function"${s}>push</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;~quasar-app-extension-my-ext/src/boot/my-ext-bootfile.js&#39;</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>!==</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// make sure boot file transpiles</span>
      conf<span class="token punctuation"${s}>.</span>build<span class="token punctuation"${s}>.</span>transpileDependencies<span class="token punctuation"${s}>.</span><span class="token function"${s}>push</span><span class="token punctuation"${s}>(</span><span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>quasar-app-extension-my-ext[\\\\/]src[\\\\/]boot</span><span class="token regex-delimiter"${s}>/</span></span><span class="token punctuation"${s}>)</span>
      <span class="token comment"${s}>// if boot file imports anything, make sure that</span>
      <span class="token comment"${s}>// the regex above matches those files too!</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token comment"${s}>// make sure my-ext css goes through webpack</span>
    conf<span class="token punctuation"${s}>.</span>css<span class="token punctuation"${s}>.</span><span class="token function"${s}>push</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;~quasar-app-extension-my-ext/src/component/my-ext.sass&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// make sure my-ext boot file is registered"),a(`
    conf`),n("span",{class:"token punctuation"},"."),a("boot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'~quasar-app-extension-my-ext/src/boot/my-ext-bootfile.js'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// make sure boot file transpiles"),a(`
      conf`),n("span",{class:"token punctuation"},"."),a("build"),n("span",{class:"token punctuation"},"."),a("transpileDependencies"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"quasar-app-extension-my-ext[\\\\/]src[\\\\/]boot"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token comment"},"// if boot file imports anything, make sure that"),a(`
      `),n("span",{class:"token comment"},"// the regex above matches those files too!"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// make sure my-ext css goes through webpack"),a(`
    conf`),n("span",{class:"token punctuation"},"."),a("css"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'~quasar-app-extension-my-ext/src/component/my-ext.sass'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Notice the tidle (<code class="doc-token"${t}>~</code>) in front of the paths. This tells Quasar CLI that the path is a dependency from node_modules instead of a relative path to App Extension index script file.</p></div><h3 id="api-registercommand" class="doc-heading doc-h3"${t}>api.registerCommand</h3><p${t}>Register a command that will become available as <code class="doc-token"${t}>quasar run &lt;ext-id&gt; &lt;cmd&gt; [args]</code> (or the short form: <code class="doc-token"${t}>quasar &lt;ext-id&gt; &lt;cmd&gt; [args]</code>).</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} commandName
 * @param {function} fn
 *   ({ args: [ string, ... ], params: {object} }) =&gt; ?Promise
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>registerCommand</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;start&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> args<span class="token punctuation"${s}>,</span> params <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something here</span>

  <span class="token comment"${s}>// this registers the &quot;start&quot; command</span>
  <span class="token comment"${s}>// and this handler is executed when running</span>
  <span class="token comment"${s}>// $ quasar run &lt;ext-id&gt; start</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} commandName
 * @param {function} fn
 *   ({ args: [ string, ... ], params: {object} }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerCommand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" args"),n("span",{class:"token punctuation"},","),a(" params "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something here"),a(`

  `),n("span",{class:"token comment"},'// this registers the "start" command'),a(`
  `),n("span",{class:"token comment"},"// and this handler is executed when running"),a(`
  `),n("span",{class:"token comment"},"// $ quasar run <ext-id> start"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-registerdescribeapi" class="doc-heading doc-h3"${t}>api.registerDescribeApi</h3><p${t}>Register an API file for <code class="doc-token"${t}>$ quasar describe</code> command.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} name
 * @param {string} relativePath
 *   (relative path starting from the file where you have this call)
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>registerDescribeApi</span><span class="token punctuation"${s}>(</span>
  <span class="token string"${s}>&#39;MyComponent&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token string"${s}>&#39;./relative/path/to/my/component/file.json&#39;</span>
<span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} name
 * @param {string} relativePath
 *   (relative path starting from the file where you have this call)
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerDescribeApi"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token string"},"'MyComponent'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'./relative/path/to/my/component/file.json'"),a(`
`),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<p${t}>The above will then respond to <code class="doc-token"${t}>$ quasar describe MyComponent</code>.</p><p${t}>For syntax of such a JSON file, look into <code class="doc-token"${t}>/node_modules/quasar/dist/api</code> (in your project folder). Be aware that your JSON must contain a <code class="doc-token"${t}>type</code> property (“component”, “directive”, “plugin”). For instance:</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;type&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;component&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;props&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  ...
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  ...
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Always test with the <code class="doc-token"${t}>quasar describe</code> command to ensure you got the syntax right and there are no errors.</p></div><h3 id="api-getpersistentconf" class="doc-heading doc-h3"${t}>api.getPersistentConf</h3><p${t}>Get the internal persistent config of this extension. Returns empty object if it has none.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {object} cfg
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getPersistentConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {object} cfg
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-setpersistentconf" class="doc-heading doc-h3"${t}>api.setPersistentConf</h3><p${t}>Set the internal persistent config of this extension. If it already exists, it is overwritten.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {object} cfg
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>setPersistentConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ....</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-mergepersistentconf" class="doc-heading doc-h3"${t}>api.mergePersistentConf</h3><p${t}>Deep merge into the internal persistent config of this extension. If extension does not have any config already set, this is essentially equivalent to setting it for the first time.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {object} cfg
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>mergePersistentConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ....</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mergePersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-beforedev" class="doc-heading doc-h3"${t}>api.beforeDev</h3><p${t}>Prepare external services before <code class="doc-token"${t}>$ quasar dev</code> command runs, like starting some backend or any other service that the app relies on.</p><p${t}>Can use async/await or directly return a Promise.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (api, { quasarConf }) =&gt; ?Promise
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>beforeDev</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> quasarConf <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeDev"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-afterdev" class="doc-heading doc-h3"${t}>api.afterDev</h3><p${t}>Run hook after Quasar dev server is started (<code class="doc-token"${t}>$ quasar build</code>). At this point, the dev server has been started and is available should you wish to do something with it.</p><p${t}>Can use async/await or directly return a Promise.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (api, { quasarConf }) =&gt; ?Promise
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>afterDev</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> quasarConf <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"afterDev"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-beforebuild" class="doc-heading doc-h3"${t}>api.beforeBuild</h3><p${t}>Run hook before Quasar builds app for production (<code class="doc-token"${t}>$ quasar build</code>). At this point, the distributables folder hasn’t been created yet.</p><p${t}>Can use async/await or directly return a Promise.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (api, { quasarConf }) =&gt; ?Promise
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>beforeBuild</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> quasarConf <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeBuild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-afterbuild" class="doc-heading doc-h3"${t}>api.afterBuild</h3><p${t}>Run hook after Quasar built app for production (<code class="doc-token"${t}>$ quasar build</code>). At this point, the distributables folder has been created and is available should you wish to do something with it.</p><p${t}>Can use async/await or directly return a Promise.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (api, { quasarConf }) =&gt; ?Promise
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>afterBuild</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> quasarConf <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"afterBuild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-onpublish" class="doc-heading doc-h3"${t}>api.onPublish</h3><p${t}>Run hook if publishing was requested (<code class="doc-token"${t}>$ quasar build -P</code>), after Quasar built app for production and the afterBuild hook (if specified) was executed.</p><p${t}>Can use async/await or directly return a Promise.</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   () =&gt; ?Promise
 * @param {object} opts
 *   * arg - argument supplied to &quot;--publish&quot;/&quot;-P&quot; parameter
 *   * distDir - folder where distributables were built
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>onPublish</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> opts</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// do something</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   () => ?Promise
 * @param {object} opts
 *   * arg - argument supplied to "--publish"/"-P" parameter
 *   * distDir - folder where distributables were built
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPublish"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(" opts")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),p(`<h2 id="quasar-app-vite-only" class="doc-heading doc-h2"${t}>@quasar/app-vite only</h2><h3 id="api-extendviteconf" class="doc-heading doc-h3"${t}>api.extendViteConf</h3>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (viteConf: Object, invoke: Object {isClient, isServer}, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendViteConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>viteConf<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change Quasar CLI generated Vite config object</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (viteConf: Object, invoke: Object {isClient, isServer}, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendViteConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("viteConf"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated Vite config object"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendssrwebserverconf" class="doc-heading doc-h3"${t}>api.extendSSRWebserverConf</h3>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (esbuildConf: Object, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendSSRWebserverConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change Quasar CLI generated esbuild config object</span>
    <span class="token comment"${s}>// that is used for the SSR webserver (includes SSR middlewares)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendSSRWebserverConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendelectronmainconf" class="doc-heading doc-h3"${t}>api.extendElectronMainConf</h3>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (esbuildConf: Object, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendElectronMainConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change Quasar CLI generated esbuild config object</span>
    <span class="token comment"${s}>// that is used for the SSR webserver (includes SSR middlewares)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendElectronMainConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendelectronpreloadconf" class="doc-heading doc-h3"${t}>api.extendElectronPreloadConf</h3>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (esbuildConf: Object, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendElectronPreloadConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change Quasar CLI generated esbuild config object</span>
    <span class="token comment"${s}>// that is used for the SSR webserver (includes SSR middlewares)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendElectronPreloadConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendpwacustomswconf" class="doc-heading doc-h3"${t}>api.extendPWACustomSWConf</h3>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (esbuildConf: Object, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendPWACustomSWConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change Quasar CLI generated esbuild config object</span>
    <span class="token comment"${s}>// that is used for the SSR webserver (includes SSR middlewares)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendPWACustomSWConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendbexscriptsconf" class="doc-heading doc-h3"${t}>api.extendBexScriptsConf</h3>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (esbuildConf: Object, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendBexScriptsConf</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>esbuildConf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change Quasar CLI generated esbuild config object</span>
    <span class="token comment"${s}>// that is used for the SSR webserver (includes SSR middlewares)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendBexScriptsConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h2 id="quasar-app-webpack-only" class="doc-heading doc-h2"${t}>@quasar/app-webpack only</h2><h3 id="api-chainwebpack" class="doc-heading doc-h3"${t}>api.chainWebpack</h3><p${t}>Chain webpack config</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (chain: ChainObject, invoke: Object {isClient, isServer}, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>chainWebpack</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change chain (Webpack chain Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject, invoke: Object {isClient, isServer}, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<p${t}>The configuration is a Webpack chain Object. The API for it is described on `),p(i($,{to:"https://github.com/neutrinojs/webpack-chain"},{default:u((l,e,k,s)=>{if(e)e("webpack-chain");else return[a("webpack-chain")]}),_:1},m,t)),p(` docs.</p><h3 id="api-extendwebpack" class="doc-heading doc-h3"${t}>api.extendWebpack</h3><p${t}>Extend webpack config</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (cfg: Object, invoke: Object {isClient, isServer}, api) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendWebpack</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change cfg (Webpack configuration Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object, invoke: Object {isClient, isServer}, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-chainwebpackmainelectronprocess" class="doc-heading doc-h3"${t}>api.chainWebpackMainElectronProcess</h3><p${t}>Chain webpack config of the main electron process</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (chain: ChainObject) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>chainWebpackMainElectronProcess</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change chain (Webpack chain Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackMainElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendwebpackmainelectronprocess" class="doc-heading doc-h3"${t}>api.extendWebpackMainElectronProcess</h3><p${t}>Extend webpack config Object of the main electron process</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (cfg: Object) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendWebpackMainElectronProcess</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change cfg (Webpack configuration Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackMainElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-chainwebpackpreloadelectronprocess" class="doc-heading doc-h3"${t}>api.chainWebpackPreloadElectronProcess</h3><p${t}>Chain webpack config of the preload electron process</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (chain: ChainObject) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>chainWebpackPreloadElectronProcess</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change chain (Webpack chain Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackPreloadElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendwebpackpreloadelectronprocess" class="doc-heading doc-h3"${t}>api.extendWebpackPreloadElectronProcess</h3><p${t}>Extend webpack config Object of the preload electron process</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (cfg: Object) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendWebpackPreloadElectronProcess</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change cfg (Webpack configuration Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackPreloadElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-chainwebpackwebserver" class="doc-heading doc-h3"${t}>api.chainWebpackWebserver</h3><p${t}>Chain webpack config of SSR webserver (includes the SSR middlewares from /src-ssr/middlewares)</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (chain: ChainObject) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>chainWebpackWebserver</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change chain (Webpack chain Object)</span>
    <span class="token comment"${s}>// isClient is always &quot;false&quot; and isServer is always &quot;true&quot;</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
    `),n("span",{class:"token comment"},'// isClient is always "false" and isServer is always "true"'),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendwebpackwebserver" class="doc-heading doc-h3"${t}>api.extendWebpackWebserver</h3><p${t}>Extend webpack config Object of SSR webserver (includes the SSR middlewares from /src-ssr/middlewares)</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (cfg: Object) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendWebpackWebserver</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change cfg (Webpack configuration Object)</span>
    <span class="token comment"${s}>// isClient is always &quot;false&quot; and isServer is always &quot;true&quot;</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackWebserver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
    `),n("span",{class:"token comment"},'// isClient is always "false" and isServer is always "true"'),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-chainwebpackcustomsw" class="doc-heading doc-h3"${t}>api.chainWebpackCustomSW</h3><p${t}>Chain webpack config for the custom service worker when using InjectManifest (content of /src-pwa/custom-service-worker.js):</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (cfg: ChainObject) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>chainWebpackCustomSW</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change cfg (Webpack chain Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackCustomSW"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),p(`<h3 id="api-extendwebpackcustomsw" class="doc-heading doc-h3"${t}>api.extendWebpackCustomSW</h3><p${t}>Extend webpack config Object for the custom service worker when using InjectManifest (content of /src-pwa/custom-service-worker.js):</p>`),p(i(o(r),null,{default:u((l,e,k,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {function} fn
 *   (chain: Object) =&gt; undefined
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasWebpack <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendWebpackCustomSW</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>chain<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// add/remove/change chain (Webpack configuration Object)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(i(c,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackCustomSW"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t));else return[n("p",null,[a("This page refers to "),n("code",{class:"doc-token"},"src/index.js"),a(" file, which is executed on "),n("code",{class:"doc-token"},"quasar dev"),a(" and "),n("code",{class:"doc-token"},"quasar build"),a(". This is the main process where you can modify the build to suit the needs of your App Extension. For instance, registering a boot file, modifying the webpack process, registering CSS, registering a UI component, registering a Quasar CLI command, etc.")]),n("p",null,"Example of basic structure of the file:"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// can be async"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// props & methods for "api" Object described below'),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-ctx",class:"doc-heading doc-h3",onClick:l=>o(f)("api-ctx")},"api.ctx",8,["onClick"]),n("p",null,[a("Same as the "),n("code",{class:"doc-token"},"ctx"),a(" from the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file. Helps you make decisions based on the context in which "),n("code",{class:"doc-token"},"quasar dev"),a(" or "),n("code",{class:"doc-token"},"quasar build"),a(" runs.")]),n("p",null,"Example: You might want to use one of the api methods if running for electron mode only."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("ctx"),n("span",{class:"token punctuation"},"."),a("dev "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token operator"},"&&"),a(" api"),n("span",{class:"token punctuation"},"."),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("electron "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeDev"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something when running quasar dev and"),a(`
    `),n("span",{class:"token comment"},"// with Electron mode"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-engine",class:"doc-heading doc-h3",onClick:l=>o(f)("api-engine")},"api.engine",8,["onClick"]),n("p",null,[a("Contains the Quasar CLI engine (as String) being used. Examples: "),n("code",{class:"doc-token"},"@quasar/app-vite"),a(" or "),n("code",{class:"doc-token"},"@quasar/app-webpack"),a(".")]),n("h3",{id:"api-hasvite",class:"doc-heading doc-h3",onClick:l=>o(f)("api-hasvite")},"api.hasVite",8,["onClick"]),n("p",null,[a("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-vite"),a(" or not.")]),n("h3",{id:"api-haswebpack",class:"doc-heading doc-h3",onClick:l=>o(f)("api-haswebpack")},"api.hasWebpack",8,["onClick"]),n("p",null,[a("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-webpack"),a(" or not.")]),n("h3",{id:"api-extid",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extid")},"api.extId",8,["onClick"]),n("p",null,[a("Contains the "),n("code",{class:"doc-token"},"ext-id"),a(" (String) of this App Extension.")]),n("h3",{id:"api-prompts",class:"doc-heading doc-h3",onClick:l=>o(f)("api-prompts")},"api.prompts",8,["onClick"]),n("p",null,[a("Is an Object which has the answers to the prompts when this App Extension got installed. For more info on prompts, check out "),n($,{to:"/app-extensions/development-guide/prompts-api"},{default:u(()=>[a("Prompts API")]),_:1}),a(".")]),n("h3",{id:"api-resolve",class:"doc-heading doc-h3",onClick:l=>o(f)("api-resolve")},"api.resolve",8,["onClick"]),n("p",null,[a("Resolves paths within the app on which this App Extension is running. Eliminates the need to import "),n("code",{class:"doc-token"},"path"),a(" and resolve the paths yourself.")]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/public of app"),a(`
`),n("span",{class:"token comment"},"// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"public"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-image.png'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-pwa of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pwa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-ssr of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ssr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-cordova of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cordova"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'config.xml'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-bex of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-appdir",class:"doc-heading doc-h3",onClick:l=>o(f)("api-appdir")},"api.appDir",8,["onClick"]),n("p",null,"Contains the full path (String) to the root of the app on which this App Extension is running."),n("h3",{id:"api-hastypescript",class:"doc-heading doc-h3",onClick:l=>o(f)("api-hastypescript")},[a("api.hasTypescript "),n(d,{label:"@quasar/app-vite 1.6+"}),a(),n(d,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-haslint",class:"doc-heading doc-h3",onClick:l=>o(f)("api-haslint")},[a("api.hasLint "),n(d,{label:"@quasar/app-vite 1.6+"}),a(),n(d,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-getstorepackagename",class:"doc-heading doc-h3",onClick:l=>o(f)("api-getstorepackagename")},[a("api.getStorePackageName "),n(d,{label:"@quasar/app-vite 1.6+"}),a(),n(d,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-getnodepackagername",class:"doc-heading doc-h3",onClick:l=>o(f)("api-getnodepackagername")},[a("api.getNodePackagerName "),n(d,{label:"@quasar/app-vite 1.6+"}),a(),n(d,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-compatiblewith",class:"doc-heading doc-h3",onClick:l=>o(f)("api-compatiblewith")},"api.compatibleWith",8,["onClick"]),n("p",null,"Ensure the App Extension is compatible with a package installed in the host app through a semver condition."),n("p",null,"If the semver condition is not met, then @quasar/app errors out and halts execution."),n("p",null,[a("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),a(".")]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} semverCondition
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'1.x'"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n(o(r),{title:"A more complex example"},{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatbileWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-haspackage",class:"doc-heading doc-h3",onClick:l=>o(f)("api-haspackage")},"api.hasPackage",8,["onClick"]),n("p",null,"Determine if some package is installed in the host app through a semver condition."),n("p",null,[a("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),a(".")]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-hasextension",class:"doc-heading doc-h3",onClick:l=>o(f)("api-hasextension")},"api.hasExtension",8,["onClick"]),n("p",null,"Check if another app extension is npm installed and Quasar CLI has invoked it."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),a("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, we have it"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-getpackageversion",class:"doc-heading doc-h3",onClick:l=>o(f)("api-getpackageversion")},"api.getPackageVersion",8,["onClick"]),n("p",null,"Get the version of a host app package."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),a("packageName"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// output examples:"),a(`
`),n("span",{class:"token comment"},"//   1.1.3"),a(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(c)]),_:1}),n("h3",{id:"api-extendquasarconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendquasarconf")},"api.extendQuasarConf",8,["onClick"]),n("p",null,"Extends quasar.config file"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object, ctx: Object) => undefined
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something with quasar.config file:"),a(`
  `),n("span",{class:"token comment"},"// add, change anything"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n(o(r),{title:"A more complex example:"},{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something with quasar.config file that is specific"),a(`
    `),n("span",{class:"token comment"},"// to @quasar/app-vite"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    `),n("span",{class:"token comment"},"// do something with quasar.config file that is specific"),a(`
    `),n("span",{class:"token comment"},"// to @quasar/app-webpack"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h4",{id:"registering-boot-and-css-files",class:"doc-heading doc-h4",onClick:l=>o(f)("registering-boot-and-css-files")},"Registering boot and css files",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// make sure my-ext boot file is registered"),a(`
    conf`),n("span",{class:"token punctuation"},"."),a("boot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'~quasar-app-extension-my-ext/src/boot/my-ext-bootfile.js'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// make sure boot file transpiles"),a(`
      conf`),n("span",{class:"token punctuation"},"."),a("build"),n("span",{class:"token punctuation"},"."),a("transpileDependencies"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"quasar-app-extension-my-ext[\\\\/]src[\\\\/]boot"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token comment"},"// if boot file imports anything, make sure that"),a(`
      `),n("span",{class:"token comment"},"// the regex above matches those files too!"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// make sure my-ext css goes through webpack"),a(`
    conf`),n("span",{class:"token punctuation"},"."),a("css"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'~quasar-app-extension-my-ext/src/component/my-ext.sass'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Notice the tidle ("),n("code",{class:"doc-token"},"~"),a(") in front of the paths. This tells Quasar CLI that the path is a dependency from node_modules instead of a relative path to App Extension index script file.")])]),n("h3",{id:"api-registercommand",class:"doc-heading doc-h3",onClick:l=>o(f)("api-registercommand")},"api.registerCommand",8,["onClick"]),n("p",null,[a("Register a command that will become available as "),n("code",{class:"doc-token"},"quasar run <ext-id> <cmd> [args]"),a(" (or the short form: "),n("code",{class:"doc-token"},"quasar <ext-id> <cmd> [args]"),a(").")]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} commandName
 * @param {function} fn
 *   ({ args: [ string, ... ], params: {object} }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerCommand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" args"),n("span",{class:"token punctuation"},","),a(" params "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something here"),a(`

  `),n("span",{class:"token comment"},'// this registers the "start" command'),a(`
  `),n("span",{class:"token comment"},"// and this handler is executed when running"),a(`
  `),n("span",{class:"token comment"},"// $ quasar run <ext-id> start"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-registerdescribeapi",class:"doc-heading doc-h3",onClick:l=>o(f)("api-registerdescribeapi")},"api.registerDescribeApi",8,["onClick"]),n("p",null,[a("Register an API file for "),n("code",{class:"doc-token"},"$ quasar describe"),a(" command.")]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} name
 * @param {string} relativePath
 *   (relative path starting from the file where you have this call)
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerDescribeApi"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token string"},"'MyComponent'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'./relative/path/to/my/component/file.json'"),a(`
`),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("p",null,[a("The above will then respond to "),n("code",{class:"doc-token"},"$ quasar describe MyComponent"),a(".")]),n("p",null,[a("For syntax of such a JSON file, look into "),n("code",{class:"doc-token"},"/node_modules/quasar/dist/api"),a(" (in your project folder). Be aware that your JSON must contain a "),n("code",{class:"doc-token"},"type"),a(" property (“component”, “directive”, “plugin”). For instance:")]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  ...
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Always test with the "),n("code",{class:"doc-token"},"quasar describe"),a(" command to ensure you got the syntax right and there are no errors.")])]),n("h3",{id:"api-getpersistentconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-getpersistentconf")},"api.getPersistentConf",8,["onClick"]),n("p",null,"Get the internal persistent config of this extension. Returns empty object if it has none."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {object} cfg
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-setpersistentconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-setpersistentconf")},"api.setPersistentConf",8,["onClick"]),n("p",null,"Set the internal persistent config of this extension. If it already exists, it is overwritten."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-mergepersistentconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-mergepersistentconf")},"api.mergePersistentConf",8,["onClick"]),n("p",null,"Deep merge into the internal persistent config of this extension. If extension does not have any config already set, this is essentially equivalent to setting it for the first time."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mergePersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-beforedev",class:"doc-heading doc-h3",onClick:l=>o(f)("api-beforedev")},"api.beforeDev",8,["onClick"]),n("p",null,[a("Prepare external services before "),n("code",{class:"doc-token"},"$ quasar dev"),a(" command runs, like starting some backend or any other service that the app relies on.")]),n("p",null,"Can use async/await or directly return a Promise."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeDev"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-afterdev",class:"doc-heading doc-h3",onClick:l=>o(f)("api-afterdev")},"api.afterDev",8,["onClick"]),n("p",null,[a("Run hook after Quasar dev server is started ("),n("code",{class:"doc-token"},"$ quasar build"),a("). At this point, the dev server has been started and is available should you wish to do something with it.")]),n("p",null,"Can use async/await or directly return a Promise."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"afterDev"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-beforebuild",class:"doc-heading doc-h3",onClick:l=>o(f)("api-beforebuild")},"api.beforeBuild",8,["onClick"]),n("p",null,[a("Run hook before Quasar builds app for production ("),n("code",{class:"doc-token"},"$ quasar build"),a("). At this point, the distributables folder hasn’t been created yet.")]),n("p",null,"Can use async/await or directly return a Promise."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeBuild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-afterbuild",class:"doc-heading doc-h3",onClick:l=>o(f)("api-afterbuild")},"api.afterBuild",8,["onClick"]),n("p",null,[a("Run hook after Quasar built app for production ("),n("code",{class:"doc-token"},"$ quasar build"),a("). At this point, the distributables folder has been created and is available should you wish to do something with it.")]),n("p",null,"Can use async/await or directly return a Promise."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (api, { quasarConf }) => ?Promise
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"afterBuild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" quasarConf "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-onpublish",class:"doc-heading doc-h3",onClick:l=>o(f)("api-onpublish")},"api.onPublish",8,["onClick"]),n("p",null,[a("Run hook if publishing was requested ("),n("code",{class:"doc-token"},"$ quasar build -P"),a("), after Quasar built app for production and the afterBuild hook (if specified) was executed.")]),n("p",null,"Can use async/await or directly return a Promise."),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   () => ?Promise
 * @param {object} opts
 *   * arg - argument supplied to "--publish"/"-P" parameter
 *   * distDir - folder where distributables were built
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPublish"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(" opts")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// do something"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h2",{id:"quasar-app-vite-only",class:"doc-heading doc-h2",onClick:l=>o(f)("quasar-app-vite-only")},"@quasar/app-vite only",8,["onClick"]),n("h3",{id:"api-extendviteconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendviteconf")},"api.extendViteConf",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (viteConf: Object, invoke: Object {isClient, isServer}, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendViteConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("viteConf"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated Vite config object"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendssrwebserverconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendssrwebserverconf")},"api.extendSSRWebserverConf",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendSSRWebserverConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendelectronmainconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendelectronmainconf")},"api.extendElectronMainConf",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendElectronMainConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendelectronpreloadconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendelectronpreloadconf")},"api.extendElectronPreloadConf",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendElectronPreloadConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendpwacustomswconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendpwacustomswconf")},"api.extendPWACustomSWConf",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendPWACustomSWConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendbexscriptsconf",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendbexscriptsconf")},"api.extendBexScriptsConf",8,["onClick"]),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (esbuildConf: Object, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendBexScriptsConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("esbuildConf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change Quasar CLI generated esbuild config object"),a(`
    `),n("span",{class:"token comment"},"// that is used for the SSR webserver (includes SSR middlewares)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h2",{id:"quasar-app-webpack-only",class:"doc-heading doc-h2",onClick:l=>o(f)("quasar-app-webpack-only")},"@quasar/app-webpack only",8,["onClick"]),n("h3",{id:"api-chainwebpack",class:"doc-heading doc-h3",onClick:l=>o(f)("api-chainwebpack")},"api.chainWebpack",8,["onClick"]),n("p",null,"Chain webpack config"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject, invoke: Object {isClient, isServer}, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,[a("The configuration is a Webpack chain Object. The API for it is described on "),n($,{to:"https://github.com/neutrinojs/webpack-chain"},{default:u(()=>[a("webpack-chain")]),_:1}),a(" docs.")]),n("h3",{id:"api-extendwebpack",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendwebpack")},"api.extendWebpack",8,["onClick"]),n("p",null,"Extend webpack config"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object, invoke: Object {isClient, isServer}, api) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-chainwebpackmainelectronprocess",class:"doc-heading doc-h3",onClick:l=>o(f)("api-chainwebpackmainelectronprocess")},"api.chainWebpackMainElectronProcess",8,["onClick"]),n("p",null,"Chain webpack config of the main electron process"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackMainElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendwebpackmainelectronprocess",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendwebpackmainelectronprocess")},"api.extendWebpackMainElectronProcess",8,["onClick"]),n("p",null,"Extend webpack config Object of the main electron process"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackMainElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-chainwebpackpreloadelectronprocess",class:"doc-heading doc-h3",onClick:l=>o(f)("api-chainwebpackpreloadelectronprocess")},"api.chainWebpackPreloadElectronProcess",8,["onClick"]),n("p",null,"Chain webpack config of the preload electron process"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackPreloadElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendwebpackpreloadelectronprocess",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendwebpackpreloadelectronprocess")},"api.extendWebpackPreloadElectronProcess",8,["onClick"]),n("p",null,"Extend webpack config Object of the preload electron process"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackPreloadElectronProcess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-chainwebpackwebserver",class:"doc-heading doc-h3",onClick:l=>o(f)("api-chainwebpackwebserver")},"api.chainWebpackWebserver",8,["onClick"]),n("p",null,"Chain webpack config of SSR webserver (includes the SSR middlewares from /src-ssr/middlewares)"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackWebserver"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack chain Object)"),a(`
    `),n("span",{class:"token comment"},'// isClient is always "false" and isServer is always "true"'),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendwebpackwebserver",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendwebpackwebserver")},"api.extendWebpackWebserver",8,["onClick"]),n("p",null,"Extend webpack config Object of SSR webserver (includes the SSR middlewares from /src-ssr/middlewares)"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackWebserver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack configuration Object)"),a(`
    `),n("span",{class:"token comment"},'// isClient is always "false" and isServer is always "true"'),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-chainwebpackcustomsw",class:"doc-heading doc-h3",onClick:l=>o(f)("api-chainwebpackcustomsw")},"api.chainWebpackCustomSW",8,["onClick"]),n("p",null,"Chain webpack config for the custom service worker when using InjectManifest (content of /src-pwa/custom-service-worker.js):"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (cfg: ChainObject) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpackCustomSW"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change cfg (Webpack chain Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-extendwebpackcustomsw",class:"doc-heading doc-h3",onClick:l=>o(f)("api-extendwebpackcustomsw")},"api.extendWebpackCustomSW",8,["onClick"]),n("p",null,"Extend webpack config Object for the custom service worker when using InjectManifest (content of /src-pwa/custom-service-worker.js):"),n(o(r),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {function} fn
 *   (chain: Object) => undefined
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasWebpack "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendWebpackCustomSW"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("chain"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// add/remove/change chain (Webpack configuration Object)"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]}),_:1},x))}}},w=g.setup;g.setup=(v,h)=>{const b=W();return(b.modules||(b.modules=new Set)).add("src/pages/app-extensions/development-guide/index-api.md"),w?w(v,h):void 0};const J=P(g,[["__file","index-api.md"]]);export{J as default};
