import{resolveComponent as P,mergeProps as E,withCtx as u,unref as p,createVNode as n,createTextVNode as s,useSSRContext as j}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as d}from"./page-utils-C-QWsEHe.js";import{D as q,a as b}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as N}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const $={__name:"uninstall-api",__ssrInlineRender:!0,setup(v){const g=[{id:"api-engine",title:"1.1. api.engine",sub:!0},{id:"api-hasvite",title:"1.2. api.hasVite",sub:!0},{id:"api-haswebpack",title:"1.3. api.hasWebpack",sub:!0},{id:"api-extid",title:"1.4. api.extId",sub:!0},{id:"api-prompts",title:"1.5. api.prompts",sub:!0},{id:"api-resolve",title:"1.6. api.resolve",sub:!0},{id:"api-appdir",title:"1.7. api.appDir",sub:!0},{id:"api-hastypescript",title:"1.8. api.hasTypescript",sub:!0},{id:"api-haslint",title:"1.9. api.hasLint",sub:!0},{id:"api-getstorepackagename",title:"1.10. api.getStorePackageName",sub:!0},{id:"api-getnodepackagername",title:"1.11. api.getNodePackagerName",sub:!0},{id:"api-haspackage",title:"1.12. api.hasPackage",sub:!0},{id:"api-hasextension",title:"1.13. api.hasExtension",sub:!0},{id:"api-getpackageversion",title:"1.14. api.getPackageVersion",sub:!0},{id:"api-removepath",title:"1.15. api.removePath",sub:!0},{id:"api-getpersistentconf",title:"1.16. api.getPersistentConf",sub:!0},{id:"api-onexitlog",title:"1.17. api.onExitLog",sub:!0}];return(f,w,y,C)=>{const h=P("q-badge");w(i(q,E({title:"App Extension Uninstall API",desc:"The API for the uninstall script of a Quasar App Extension.",heading:"","edit-link":"app-extensions/development-guide/uninstall-api",toc:g},C),{default:u((A,o,m,t)=>{if(o)o(`<p${t}>This page refers to <code class="doc-token"${t}>src/uninstall.js</code> file which is executed when the App Extension is uninstalled. Not all App Extensions will need an uninstall – this is an optional step.</p><p${t}>Example of basic structure of the file:</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// can be async</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>api</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// props and methods for &quot;api&quot; Object</span>
  <span class="token comment"${a}>// are described below</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// can be async"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},'// props and methods for "api" Object'),s(`
  `),n("span",{class:"token comment"},"// are described below"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-engine" class="doc-heading doc-h3"${t}>api.engine</h3><p${t}>Contains the Quasar CLI engine (as String) being used. Examples: <code class="doc-token"${t}>@quasar/app-vite</code> or <code class="doc-token"${t}>@quasar/app-webpack</code>.</p><h3 id="api-hasvite" class="doc-heading doc-h3"${t}>api.hasVite</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-vite</code> or not.</p><h3 id="api-haswebpack" class="doc-heading doc-h3"${t}>api.hasWebpack</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-webpack</code> or not.</p><h3 id="api-extid" class="doc-heading doc-h3"${t}>api.extId</h3><p${t}>Contains the <code class="doc-token"${t}>ext-id</code> (String) of this App Extension.</p><h3 id="api-prompts" class="doc-heading doc-h3"${t}>api.prompts</h3><p${t}>Is an Object which has the answers to the prompts when this App Extension gets installed. For more info on prompts, check out `),o(i(b,{to:"/app-extensions/development-guide/prompts-api"},{default:u((l,e,r,a)=>{if(e)e("Prompts API");else return[s("Prompts API")]}),_:1},m,t)),o(`.</p><h3 id="api-resolve" class="doc-heading doc-h3"${t}>api.resolve</h3><p${t}>Resolves paths within the app on which this App Extension is running. Eliminates the need to import <code class="doc-token"${t}>path</code> and resolve the paths yourself.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// resolves to root of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>app</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;src/my-file.js&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/src of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>src</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;my-file.js&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/public of app</span>
<span class="token comment"${a}>// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>public</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;my-image.png&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/src-pwa of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>pwa</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;some-file.js&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/src-ssr of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>ssr</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;some-file.js&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/src-cordova of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>cordova</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;config.xml&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/src-electron of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>electron</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;some-file.js&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// resolves to root/src-bex of app</span>
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>bex</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;some-file.js&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/my-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/public of app"),s(`
`),n("span",{class:"token comment"},"// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"public"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-image.png'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-pwa of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pwa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-ssr of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ssr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-cordova of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cordova"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'config.xml'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-bex of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-appdir" class="doc-heading doc-h3"${t}>api.appDir</h3><p${t}>Contains the full path (String) to the root of the app on which this App Extension is running.</p><h3 id="api-hastypescript" class="doc-heading doc-h3"${t}>api.hasTypescript `),o(i(h,{label:"@quasar/app-vite 1.6+"},null,m,t)),o(" "),o(i(h,{label:"@quasar/app-webpack 3.11+"},null,m,t)),o("</h3>"),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;boolean&gt;} host project has Typescript active or not
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasTypescript</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-haslint" class="doc-heading doc-h3"${t}>api.hasLint `),o(i(h,{label:"@quasar/app-vite 1.6+"},null,m,t)),o(" "),o(i(h,{label:"@quasar/app-webpack 3.11+"},null,m,t)),o("</h3>"),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;boolean&gt;} host project has ESLint or not
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasLint</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-getstorepackagename" class="doc-heading doc-h3"${t}>api.getStorePackageName `),o(i(h,{label:"@quasar/app-vite 1.6+"},null,m,t)),o(" "),o(i(h,{label:"@quasar/app-webpack 3.11+"},null,m,t)),o("</h3>"),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;string|undefined&gt;} &#39;pinia&#39; | &#39;vuex&#39; | undefined
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getStorePackageName</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-getnodepackagername" class="doc-heading doc-h3"${t}>api.getNodePackagerName `),o(i(h,{label:"@quasar/app-vite 1.6+"},null,m,t)),o(" "),o(i(h,{label:"@quasar/app-webpack 3.11+"},null,m,t)),o("</h3>"),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;&#39;npm&#39; | &#39;yarn&#39; | &#39;pnpm&#39; | &#39;bun&#39;&gt;}
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getNodePackagerName</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-haspackage" class="doc-heading doc-h3"${t}>api.hasPackage</h3><p${t}>Determine if some package is installed in the host app through a semver condition.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */</span>
<span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasPackage</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;vuelidate&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// hey, this app has it (any version of it)</span>
<span class="token punctuation"${a}>}</span>
<span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasPackage</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;quasar&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;^2.0.0&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// hey, this app has Quasar UI v2 installed</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-hasextension" class="doc-heading doc-h3"${t}>api.hasExtension</h3><p${t}>Check if another app extension is installed.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed.
 */</span>
<span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasExtension</span><span class="token punctuation"${a}>(</span>extId<span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// hey, we have it</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed.
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),s("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, we have it"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-getpackageversion" class="doc-heading doc-h3"${t}>api.getPackageVersion</h3><p${t}>Get the version of a host app package.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} packageName
 * @return {string|undefined} version of app&#39;s package
 */</span>
console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getPackageVersion</span><span class="token punctuation"${a}>(</span>packageName<span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>)</span>
<span class="token comment"${a}>// output examples:</span>
<span class="token comment"${a}>//   1.1.3</span>
<span class="token comment"${a}>//   undefined (when package not found)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),s("packageName"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// output examples:"),s(`
`),n("span",{class:"token comment"},"//   1.1.3"),s(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-removepath" class="doc-heading doc-h3"${t}>api.removePath</h3><p${t}>Removes a file or folder from the app project folder (which the App Extension has installed and is no longer needed).</p><p${t}>Be mindful about it and do not delete the files that would break developer’s app.</p><p${t}>The path to file or folder needs to be relative to project’s root folder.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
  * @param {string} __path
  */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>removePath</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;my-folder&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
  * @param {string} __path
  */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-folder'"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<p${t}>The above example deletes “my-folder” from the root of the app.</p><h3 id="api-getpersistentconf" class="doc-heading doc-h3"${t}>api.getPersistentConf</h3><p${t}>Get the internal persistent config of this extension. Returns empty object if it has none.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {object} cfg
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getPersistentConf</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t)),o(`<h3 id="api-onexitlog" class="doc-heading doc-h3"${t}>api.onExitLog</h3><p${t}>Adds a message to be printed after App CLI finishes up uninstalling the App Extension and is about to exit. Can be called multiple times to register multiple exit logs.</p>`),o(i(p(k),null,{default:u((l,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} msg
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>onExitLog</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;Thanks for having used my extension&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(c,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} msg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onExitLog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thanks for having used my extension'"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,t));else return[n("p",null,[s("This page refers to "),n("code",{class:"doc-token"},"src/uninstall.js"),s(" file which is executed when the App Extension is uninstalled. Not all App Extensions will need an uninstall – this is an optional step.")]),n("p",null,"Example of basic structure of the file:"),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// can be async"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},'// props and methods for "api" Object'),s(`
  `),n("span",{class:"token comment"},"// are described below"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-engine",class:"doc-heading doc-h3",onClick:l=>p(d)("api-engine")},"api.engine",8,["onClick"]),n("p",null,[s("Contains the Quasar CLI engine (as String) being used. Examples: "),n("code",{class:"doc-token"},"@quasar/app-vite"),s(" or "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(".")]),n("h3",{id:"api-hasvite",class:"doc-heading doc-h3",onClick:l=>p(d)("api-hasvite")},"api.hasVite",8,["onClick"]),n("p",null,[s("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-vite"),s(" or not.")]),n("h3",{id:"api-haswebpack",class:"doc-heading doc-h3",onClick:l=>p(d)("api-haswebpack")},"api.hasWebpack",8,["onClick"]),n("p",null,[s("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" or not.")]),n("h3",{id:"api-extid",class:"doc-heading doc-h3",onClick:l=>p(d)("api-extid")},"api.extId",8,["onClick"]),n("p",null,[s("Contains the "),n("code",{class:"doc-token"},"ext-id"),s(" (String) of this App Extension.")]),n("h3",{id:"api-prompts",class:"doc-heading doc-h3",onClick:l=>p(d)("api-prompts")},"api.prompts",8,["onClick"]),n("p",null,[s("Is an Object which has the answers to the prompts when this App Extension gets installed. For more info on prompts, check out "),n(b,{to:"/app-extensions/development-guide/prompts-api"},{default:u(()=>[s("Prompts API")]),_:1}),s(".")]),n("h3",{id:"api-resolve",class:"doc-heading doc-h3",onClick:l=>p(d)("api-resolve")},"api.resolve",8,["onClick"]),n("p",null,[s("Resolves paths within the app on which this App Extension is running. Eliminates the need to import "),n("code",{class:"doc-token"},"path"),s(" and resolve the paths yourself.")]),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/my-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/public of app"),s(`
`),n("span",{class:"token comment"},"// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"public"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-image.png'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-pwa of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pwa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-ssr of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ssr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-cordova of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cordova"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'config.xml'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// resolves to root/src-bex of app"),s(`
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-appdir",class:"doc-heading doc-h3",onClick:l=>p(d)("api-appdir")},"api.appDir",8,["onClick"]),n("p",null,"Contains the full path (String) to the root of the app on which this App Extension is running."),n("h3",{id:"api-hastypescript",class:"doc-heading doc-h3",onClick:l=>p(d)("api-hastypescript")},[s("api.hasTypescript "),n(h,{label:"@quasar/app-vite 1.6+"}),s(),n(h,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-haslint",class:"doc-heading doc-h3",onClick:l=>p(d)("api-haslint")},[s("api.hasLint "),n(h,{label:"@quasar/app-vite 1.6+"}),s(),n(h,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-getstorepackagename",class:"doc-heading doc-h3",onClick:l=>p(d)("api-getstorepackagename")},[s("api.getStorePackageName "),n(h,{label:"@quasar/app-vite 1.6+"}),s(),n(h,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-getnodepackagername",class:"doc-heading doc-h3",onClick:l=>p(d)("api-getnodepackagername")},[s("api.getNodePackagerName "),n(h,{label:"@quasar/app-vite 1.6+"}),s(),n(h,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-haspackage",class:"doc-heading doc-h3",onClick:l=>p(d)("api-haspackage")},"api.hasPackage",8,["onClick"]),n("p",null,"Determine if some package is installed in the host app through a semver condition."),n("p",null,[s("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),s(".")]),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-hasextension",class:"doc-heading doc-h3",onClick:l=>p(d)("api-hasextension")},"api.hasExtension",8,["onClick"]),n("p",null,"Check if another app extension is installed."),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed.
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),s("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, we have it"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h3",{id:"api-getpackageversion",class:"doc-heading doc-h3",onClick:l=>p(d)("api-getpackageversion")},"api.getPackageVersion",8,["onClick"]),n("p",null,"Get the version of a host app package."),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),s("packageName"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// output examples:"),s(`
`),n("span",{class:"token comment"},"//   1.1.3"),s(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(c)]),_:1}),n("h3",{id:"api-removepath",class:"doc-heading doc-h3",onClick:l=>p(d)("api-removepath")},"api.removePath",8,["onClick"]),n("p",null,"Removes a file or folder from the app project folder (which the App Extension has installed and is no longer needed)."),n("p",null,"Be mindful about it and do not delete the files that would break developer’s app."),n("p",null,"The path to file or folder needs to be relative to project’s root folder."),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
  * @param {string} __path
  */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removePath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-folder'"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("p",null,"The above example deletes “my-folder” from the root of the app."),n("h3",{id:"api-getpersistentconf",class:"doc-heading doc-h3",onClick:l=>p(d)("api-getpersistentconf")},"api.getPersistentConf",8,["onClick"]),n("p",null,"Get the internal persistent config of this extension. Returns empty object if it has none."),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"api-onexitlog",class:"doc-heading doc-h3",onClick:l=>p(d)("api-onexitlog")},"api.onExitLog",8,["onClick"]),n("p",null,"Adds a message to be printed after App CLI finishes up uninstalling the App Extension and is about to exit. Can be called multiple times to register multiple exit logs."),n(p(k),null,{default:u(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} msg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onExitLog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thanks for having used my extension'"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1})]}),_:1},y))}}},x=$.setup;$.setup=(v,g)=>{const f=j();return(f.modules||(f.modules=new Set)).add("src/pages/app-extensions/development-guide/uninstall-api.md"),x?x(v,g):void 0};const z=N($,[["__file","uninstall-api.md"]]);export{z as default};
