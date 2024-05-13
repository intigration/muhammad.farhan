import{resolveComponent as P,mergeProps as j,withCtx as c,unref as o,createVNode as n,createTextVNode as s,useSSRContext as q}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as d}from"./page-utils-C-QWsEHe.js";import{D as E,a as h}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as N}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"install-api",__ssrInlineRender:!0,setup(w){const g=[{id:"api-engine",title:"1.1. api.engine",sub:!0},{id:"api-hasvite",title:"1.2. api.hasVite",sub:!0},{id:"api-haswebpack",title:"1.3. api.hasWebpack",sub:!0},{id:"api-extid",title:"1.4. api.extId",sub:!0},{id:"api-prompts",title:"1.5. api.prompts",sub:!0},{id:"api-resolve",title:"1.6. api.resolve",sub:!0},{id:"api-appdir",title:"1.7. api.appDir",sub:!0},{id:"api-hastypescript",title:"1.8. api.hasTypescript",sub:!0},{id:"api-haslint",title:"1.9. api.hasLint",sub:!0},{id:"api-getstorepackagename",title:"1.10. api.getStorePackageName",sub:!0},{id:"api-getnodepackagername",title:"1.11. api.getNodePackagerName",sub:!0},{id:"api-compatiblewith",title:"1.12. api.compatibleWith",sub:!0},{id:"api-haspackage",title:"1.13. api.hasPackage",sub:!0},{id:"api-hasextension",title:"1.14. api.hasExtension",sub:!0},{id:"api-getpackageversion",title:"1.15. api.getPackageVersion",sub:!0},{id:"api-extendpackagejson",title:"1.16. api.extendPackageJson",sub:!0},{id:"api-extendjsonfile",title:"1.17. api.extendJsonFile",sub:!0},{id:"api-render",title:"1.18. api.render",sub:!0},{id:"api-renderfile",title:"1.19. api.renderFile",sub:!0},{id:"api-getpersistentconf",title:"1.20. api.getPersistentConf",sub:!0},{id:"api-setpersistentconf",title:"1.21. api.setPersistentConf",sub:!0},{id:"api-mergepersistentconf",title:"1.22. api.mergePersistentConf",sub:!0},{id:"api-onexitlog",title:"1.23. api.onExitLog",sub:!0}];return($,y,x,C)=>{const f=P("q-badge");y(i(E,j({title:"App Extension Install API",desc:"The API for the install script of a Quasar App Extension. Initializes the app space by rendering or changing files and more.",heading:"","edit-link":"app-extensions/development-guide/install-api",toc:g},C),{default:c((A,l,m,t)=>{if(l)l(`<p${t}>This page refers to <code class="doc-token"${t}>src/install.js</code> file which is executed on the installation of the App Extension only. Not all App Extensions will need an install – this is an optional step.</p><p${t}>Example of basic structure of the file:</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// can be async</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>api</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// props and methods for &quot;api&quot; Object</span>
  <span class="token comment"${a}>// are described below</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// can be async"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},'// props and methods for "api" Object'),s(`
  `),n("span",{class:"token comment"},"// are described below"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-engine" class="doc-heading doc-h3"${t}>api.engine</h3><p${t}>Contains the Quasar CLI engine (as String) being used. Examples: <code class="doc-token"${t}>@quasar/app-vite</code> or <code class="doc-token"${t}>@quasar/app-webpack</code>.</p><h3 id="api-hasvite" class="doc-heading doc-h3"${t}>api.hasVite</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-vite</code> or not.</p><h3 id="api-haswebpack" class="doc-heading doc-h3"${t}>api.hasWebpack</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-webpack</code> or not.</p><h3 id="api-extid" class="doc-heading doc-h3"${t}>api.extId</h3><p${t}>Contains the <code class="doc-token"${t}>ext-id</code> (String) of this App Extension.</p><h3 id="api-prompts" class="doc-heading doc-h3"${t}>api.prompts</h3><p${t}>Is an Object which has the answers to the prompts when this App Extension gets installed. For more info on prompts, check out `),l(i(h,{to:"/app-extensions/development-guide/prompts-api"},{default:c((r,e,u,a)=>{if(e)e("Prompts API");else return[s("Prompts API")]}),_:1},m,t)),l(`.</p><h3 id="api-resolve" class="doc-heading doc-h3"${t}>api.resolve</h3><p${t}>Resolves paths within the app on which this App Extension is running. Eliminates the need to import <code class="doc-token"${t}>path</code> and resolve the paths yourself.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// resolves to root of app</span>
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
api<span class="token punctuation"${a}>.</span>resolve<span class="token punctuation"${a}>.</span><span class="token function"${a}>bex</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;some-file.js&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),s(`
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
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-appdir" class="doc-heading doc-h3"${t}>api.appDir</h3><p${t}>Contains the full path (String) to the root of the app on which this App Extension is running.</p><h3 id="api-hastypescript" class="doc-heading doc-h3"${t}>api.hasTypescript `),l(i(f,{label:"@quasar/app-vite 1.6+"},null,m,t)),l(" "),l(i(f,{label:"@quasar/app-webpack 3.11+"},null,m,t)),l("</h3>"),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;boolean&gt;} host project has Typescript active or not
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasTypescript</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-haslint" class="doc-heading doc-h3"${t}>api.hasLint `),l(i(f,{label:"@quasar/app-vite 1.6+"},null,m,t)),l(" "),l(i(f,{label:"@quasar/app-webpack 3.11+"},null,m,t)),l("</h3>"),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;boolean&gt;} host project has ESLint or not
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasLint</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getstorepackagename" class="doc-heading doc-h3"${t}>api.getStorePackageName `),l(i(f,{label:"@quasar/app-vite 1.6+"},null,m,t)),l(" "),l(i(f,{label:"@quasar/app-webpack 3.11+"},null,m,t)),l("</h3>"),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;string|undefined&gt;} &#39;pinia&#39; | &#39;vuex&#39; | undefined
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getStorePackageName</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getnodepackagername" class="doc-heading doc-h3"${t}>api.getNodePackagerName `),l(i(f,{label:"@quasar/app-vite 1.6+"},null,m,t)),l(" "),l(i(f,{label:"@quasar/app-webpack 3.11+"},null,m,t)),l("</h3>"),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {Promise&lt;&#39;npm&#39; | &#39;yarn&#39; | &#39;pnpm&#39; | &#39;bun&#39;&gt;}
 */</span>
<span class="token keyword"${a}>await</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getNodePackagerName</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-compatiblewith" class="doc-heading doc-h3"${t}>api.compatibleWith</h3><p${t}>Ensure the App Extension is compatible with a package installed in the host app through a semver condition.</p><p${t}>If the semver condition is not met, then Quasar CLI errors out and halts execution.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} packageName
 * @param {string} semverCondition
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>compatibleWith</span><span class="token punctuation"${a}>(</span>packageName<span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;1.x&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} semverCondition
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),s("packageName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'1.x'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(i(o(k),{title:"A more complex example:"},{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span>hasVite <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  api<span class="token punctuation"${a}>.</span><span class="token function"${a}>compatibleWith</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;@quasar/app-vite&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;^2.0.0-beta.1&#39;</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span>
<span class="token keyword"${a}>else</span> <span class="token punctuation"${a}>{</span>
  api<span class="token punctuation"${a}>.</span><span class="token function"${a}>compatbileWith</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;@quasar/app-webpack&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;^4.0.0-beta.1&#39;</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),s("hasVite "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatbileWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-haspackage" class="doc-heading doc-h3"${t}>api.hasPackage</h3><p${t}>Determine if some package is installed in the host app through a semver condition.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */</span>
<span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasPackage</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;vuelidate&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// hey, this app has it (any version of it)</span>
<span class="token punctuation"${a}>}</span>
<span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasPackage</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;quasar&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;^2.0.0&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// hey, this app has Quasar UI v2 installed</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-hasextension" class="doc-heading doc-h3"${t}>api.hasExtension</h3><p${t}>Check if another app extension is npm installed and Quasar CLI has invoked it.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed &amp; invoked
 */</span>
<span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span><span class="token function"${a}>hasExtension</span><span class="token punctuation"${a}>(</span>extId<span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// hey, we have it</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),s("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, we have it"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getpackageversion" class="doc-heading doc-h3"${t}>api.getPackageVersion</h3><p${t}>Get the version of a host app package.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} packageName
 * @return {string|undefined} version of app&#39;s package
 */</span>
console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span> api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getPackageVersion</span><span class="token punctuation"${a}>(</span>packageName<span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>)</span>
<span class="token comment"${a}>// output examples:</span>
<span class="token comment"${a}>//   1.1.3</span>
<span class="token comment"${a}>//   undefined (when package not found)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),s("packageName"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// output examples:"),s(`
`),n("span",{class:"token comment"},"//   1.1.3"),s(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-extendpackagejson" class="doc-heading doc-h3"${t}>api.extendPackageJson</h3><p${t}>Helper method to extend package.json with new props. If specifying existing props, <strong${t}>it will override</strong> them.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {object|string} extPkg - Object to extend with or relative path to a JSON file
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>extendPackageJson</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>scripts</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token string-property property"${a}>&#39;electron&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;quasar dev -m electron&#39;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object|string} extPkg - Object to extend with or relative path to a JSON file
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendPackageJson"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"scripts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'electron'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'quasar dev -m electron'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<p${t}>The above example adds an npm script to the app’s package.json, so you can then execute <code class="doc-token"${t}>yarn electron</code> (or the equivalent <code class="doc-token"${t}>npm run electron</code>).</p><h3 id="api-extendjsonfile" class="doc-heading doc-h3"${t}>api.extendJsonFile</h3><p${t}>Extend a JSON file with new props (deep merge). If specifying existing props, it will override them.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} file (relative path to app root folder)
 * @param {object} newData (Object to merge in)
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>extendJsonFile</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;src/some.json&#39;</span><span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>newProp</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;some-value&#39;</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} file (relative path to app root folder)
 * @param {object} newData (Object to merge in)
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendJsonFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/some.json'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"newProp"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'some-value'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-render" class="doc-heading doc-h3"${t}>api.render</h3><p${t}>Renders (copies) a folder from your App Extension templates (any folder you specify) into root of the app. Maintains the same folder structure that the template folder has.</p><p${t}>If some of the files already exist in the app then it will ask the user if they should be overwritten or not.</p><p${t}>Needs a relative path to the folder of the file calling render().</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * Render a folder from extension templates into devland
 * Needs a path (to a folder) relative to the path of the file where render() is called
 *
 * @param {string} templatePath (relative path to folder to render in app)
 * @param {object} scope (optional; rendering scope variables)
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>render</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;./path/to/a/template/folder&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Render a folder from extension templates into devland
 * Needs a path (to a folder) relative to the path of the file where render() is called
 *
 * @param {string} templatePath (relative path to folder to render in app)
 * @param {object} scope (optional; rendering scope variables)
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./path/to/a/template/folder'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h4 id="filename-edge-cases" class="doc-heading doc-h4"${t}>Filename edge cases</h4><p${t}>If you want to render a template file that either begins with a dot (i.e. .env) you will have to follow a specific naming convention, since dotfiles are ignored when publishing your plugin to npm:</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}># templates containing dotfiles must use an</span>
<span class="token comment"${a}># underscore instead of the dot in their names:</span>

some-folder/_env

<span class="token comment"${a}># When calling api.render(&#39;./some-folder&#39;), this will be</span>
<span class="token comment"${a}># rendered in the project folder as:</span>

/.env</code></pre>`),e(i(p,{lang:"bash"},null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# templates containing dotfiles must use an"),s(`
`),n("span",{class:"token comment"},"# underscore instead of the dot in their names:"),s(`

some-folder/_env

`),n("span",{class:"token comment"},"# When calling api.render('./some-folder'), this will be"),s(`
`),n("span",{class:"token comment"},"# rendered in the project folder as:"),s(`

/.env`)])]),n(p,{lang:"bash"})]}),_:1},m,t)),l(`<p${t}>If you want to render a file whose name actually begins with an underscore, then the filename must begin with <code class="doc-token"${t}>__</code> (two underscore characters instead of only one):</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}>some-folder/__my.css

<span class="token comment"${a}># When calling api.render(&#39;./template&#39;), this will be</span>
<span class="token comment"${a}># rendered in the project folder as:</span>

/_my.css</code></pre>`),e(i(p,{lang:"bash"},null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[s(`some-folder/__my.css

`),n("span",{class:"token comment"},"# When calling api.render('./template'), this will be"),s(`
`),n("span",{class:"token comment"},"# rendered in the project folder as:"),s(`

/_my.css`)])]),n(p,{lang:"bash"})]}),_:1},m,t)),l(`<h4 id="using-scope" class="doc-heading doc-h4"${t}>Using scope</h4><p${t}>You can also inject some decision-making code into the files to be rendered by interpolating with `),l(i(h,{to:"https://lodash.com/docs/4.17.15#template"},{default:c((r,e,u,a)=>{if(e)e("lodash/template");else return[s("lodash/template")]}),_:1},m,t)),l(` syntax.</p><p${t}>Example:</p>`),l(i(o(k),{title:"src/install.js"},{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// (my-folder is located in same folder as</span>
<span class="token comment"${a}>// the file in which following call takes place)</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>render</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;./my-folder&#39;</span><span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>prompts</span><span class="token operator"${a}>:</span> api<span class="token punctuation"${a}>.</span>prompts
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// (my-folder is located in same folder as"),s(`
`),n("span",{class:"token comment"},"// the file in which following call takes place)"),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./my-folder'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"prompts"),n("span",{class:"token operator"},":"),s(" api"),n("span",{class:"token punctuation"},"."),s(`prompts
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<p${t}>Let’s imagine we use a `),l(i(h,{to:"/app-extensions/development-guide/prompts-api"},{default:c((r,e,u,a)=>{if(e)e("Prompts API");else return[s("Prompts API")]}),_:1},m,t)),l(` file too. It asks the user if he/she wants “Feature X” and stores the answer in a variable called “featureX”.</p><p${t}>We can take some decisions on what the files that we render look like, during rendering them. This removes the need of creating two folders and deciding which to render, based on some decision.</p>`),l(i(o(k),{title:"src/my-folder/some-file.js"},{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token operator"${a}>&lt;</span><span class="token operator"${a}>%</span> <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>prompts<span class="token punctuation"${a}>.</span>featureX<span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span> <span class="token operator"${a}>%</span><span class="token operator"${a}>&gt;</span>
<span class="token keyword"${a}>const</span> message <span class="token operator"${a}>=</span> <span class="token string"${a}>&#39;This is content when &quot;Feature X&quot; exists&#39;</span>
<span class="token operator"${a}>&lt;</span><span class="token operator"${a}>%</span> <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>else</span> <span class="token punctuation"${a}>{</span> <span class="token operator"${a}>%</span><span class="token operator"${a}>&gt;</span>
<span class="token keyword"${a}>const</span> message <span class="token operator"${a}>=</span> <span class="token string"${a}>&#39;This is content when we don\\&#39;t have &quot;Feature X&quot;&#39;</span>
<span class="token operator"${a}>&lt;</span><span class="token operator"${a}>%</span> <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>%</span><span class="token operator"${a}>&gt;</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("prompts"),n("span",{class:"token punctuation"},"."),s("featureX"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" message "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},`'This is content when "Feature X" exists'`),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" message "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},`'This is content when we don\\'t have "Feature X"'`),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token operator"},">")])]),n(p)]}),_:1},m,t)),l(`<p${t}>Possibilities are limited only by your imagination.</p><h3 id="api-renderfile" class="doc-heading doc-h3"${t}>api.renderFile</h3><p${t}>Similar with api.render() with the difference that this method renders a single file.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * Render a file from extension template into devland
 * Needs a path (to a file) relative to the path of the file where renderFile() is called
 *
 * @param {string} relativeSourcePath (file path relative to the folder from which the install script is called)
 * @param {string} relativeTargetPath (file path relative to the root of the app -- including filename!)
 * @param {object} scope (optional; rendering scope variables)
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>renderFile</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;./path/to/a/template/filename&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;path/relative/to/app/root/filename&#39;</span><span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>prompts</span><span class="token operator"${a}>:</span> api<span class="token punctuation"${a}>.</span>prompts
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>

api<span class="token punctuation"${a}>.</span><span class="token function"${a}>renderFile</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;./my-file.json&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;src/my-file.json&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Render a file from extension template into devland
 * Needs a path (to a file) relative to the path of the file where renderFile() is called
 *
 * @param {string} relativeSourcePath (file path relative to the folder from which the install script is called)
 * @param {string} relativeTargetPath (file path relative to the root of the app -- including filename!)
 * @param {object} scope (optional; rendering scope variables)
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"renderFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./path/to/a/template/filename'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'path/relative/to/app/root/filename'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"prompts"),n("span",{class:"token operator"},":"),s(" api"),n("span",{class:"token punctuation"},"."),s(`prompts
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"renderFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./my-file.json'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'src/my-file.json'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getpersistentconf" class="doc-heading doc-h3"${t}>api.getPersistentConf</h3><p${t}>Get the internal persistent config of this extension. Returns empty object if it has none.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @return {object} cfg
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>getPersistentConf</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-setpersistentconf" class="doc-heading doc-h3"${t}>api.setPersistentConf</h3><p${t}>Set the internal persistent config of this extension. If it already exists, it is overwritten.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {object} cfg
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>setPersistentConf</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// ....</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-mergepersistentconf" class="doc-heading doc-h3"${t}>api.mergePersistentConf</h3><p${t}>Deep merge into the internal persistent config of this extension. If extension does not have any config already set, this is essentially equivalent to setting it for the first time.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {object} cfg
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>mergePersistentConf</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// ....</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mergePersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-onexitlog" class="doc-heading doc-h3"${t}>api.onExitLog</h3><p${t}>Adds a message to be printed after App CLI finishes up installing the App Extension and is about to exit. Can be called multiple times to register multiple exit logs.</p>`),l(i(o(k),null,{default:c((r,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * @param {string} msg
 */</span>
api<span class="token punctuation"${a}>.</span><span class="token function"${a}>onExitLog</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;Thanks for installing my awesome extension&#39;</span><span class="token punctuation"${a}>)</span></code></pre>`),e(i(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} msg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onExitLog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thanks for installing my awesome extension'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t));else return[n("p",null,[s("This page refers to "),n("code",{class:"doc-token"},"src/install.js"),s(" file which is executed on the installation of the App Extension only. Not all App Extensions will need an install – this is an optional step.")]),n("p",null,"Example of basic structure of the file:"),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// can be async"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},'// props and methods for "api" Object'),s(`
  `),n("span",{class:"token comment"},"// are described below"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-engine",class:"doc-heading doc-h3",onClick:r=>o(d)("api-engine")},"api.engine",8,["onClick"]),n("p",null,[s("Contains the Quasar CLI engine (as String) being used. Examples: "),n("code",{class:"doc-token"},"@quasar/app-vite"),s(" or "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(".")]),n("h3",{id:"api-hasvite",class:"doc-heading doc-h3",onClick:r=>o(d)("api-hasvite")},"api.hasVite",8,["onClick"]),n("p",null,[s("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-vite"),s(" or not.")]),n("h3",{id:"api-haswebpack",class:"doc-heading doc-h3",onClick:r=>o(d)("api-haswebpack")},"api.hasWebpack",8,["onClick"]),n("p",null,[s("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" or not.")]),n("h3",{id:"api-extid",class:"doc-heading doc-h3",onClick:r=>o(d)("api-extid")},"api.extId",8,["onClick"]),n("p",null,[s("Contains the "),n("code",{class:"doc-token"},"ext-id"),s(" (String) of this App Extension.")]),n("h3",{id:"api-prompts",class:"doc-heading doc-h3",onClick:r=>o(d)("api-prompts")},"api.prompts",8,["onClick"]),n("p",null,[s("Is an Object which has the answers to the prompts when this App Extension gets installed. For more info on prompts, check out "),n(h,{to:"/app-extensions/development-guide/prompts-api"},{default:c(()=>[s("Prompts API")]),_:1}),s(".")]),n("h3",{id:"api-resolve",class:"doc-heading doc-h3",onClick:r=>o(d)("api-resolve")},"api.resolve",8,["onClick"]),n("p",null,[s("Resolves paths within the app on which this App Extension is running. Eliminates the need to import "),n("code",{class:"doc-token"},"path"),s(" and resolve the paths yourself.")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),s(`
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
api`),n("span",{class:"token punctuation"},"."),s("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-appdir",class:"doc-heading doc-h3",onClick:r=>o(d)("api-appdir")},"api.appDir",8,["onClick"]),n("p",null,"Contains the full path (String) to the root of the app on which this App Extension is running."),n("h3",{id:"api-hastypescript",class:"doc-heading doc-h3",onClick:r=>o(d)("api-hastypescript")},[s("api.hasTypescript "),n(f,{label:"@quasar/app-vite 1.6+"}),s(),n(f,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-haslint",class:"doc-heading doc-h3",onClick:r=>o(d)("api-haslint")},[s("api.hasLint "),n(f,{label:"@quasar/app-vite 1.6+"}),s(),n(f,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-getstorepackagename",class:"doc-heading doc-h3",onClick:r=>o(d)("api-getstorepackagename")},[s("api.getStorePackageName "),n(f,{label:"@quasar/app-vite 1.6+"}),s(),n(f,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-getnodepackagername",class:"doc-heading doc-h3",onClick:r=>o(d)("api-getnodepackagername")},[s("api.getNodePackagerName "),n(f,{label:"@quasar/app-vite 1.6+"}),s(),n(f,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),s(`
`),n("span",{class:"token keyword"},"await"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-compatiblewith",class:"doc-heading doc-h3",onClick:r=>o(d)("api-compatiblewith")},"api.compatibleWith",8,["onClick"]),n("p",null,"Ensure the App Extension is compatible with a package installed in the host app through a semver condition."),n("p",null,"If the semver condition is not met, then Quasar CLI errors out and halts execution."),n("p",null,[s("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),s(".")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} semverCondition
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),s("packageName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'1.x'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n(o(k),{title:"A more complex example:"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),s("hasVite "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatbileWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-haspackage",class:"doc-heading doc-h3",onClick:r=>o(d)("api-haspackage")},"api.hasPackage",8,["onClick"]),n("p",null,"Determine if some package is installed in the host app through a semver condition."),n("p",null,[s("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),s(".")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-hasextension",class:"doc-heading doc-h3",onClick:r=>o(d)("api-hasextension")},"api.hasExtension",8,["onClick"]),n("p",null,"Check if another app extension is npm installed and Quasar CLI has invoked it."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */`),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),s("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// hey, we have it"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-getpackageversion",class:"doc-heading doc-h3",onClick:r=>o(d)("api-getpackageversion")},"api.getPackageVersion",8,["onClick"]),n("p",null,"Get the version of a host app package."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),s("packageName"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// output examples:"),s(`
`),n("span",{class:"token comment"},"//   1.1.3"),s(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(p)]),_:1}),n("h3",{id:"api-extendpackagejson",class:"doc-heading doc-h3",onClick:r=>o(d)("api-extendpackagejson")},"api.extendPackageJson",8,["onClick"]),n("p",null,[s("Helper method to extend package.json with new props. If specifying existing props, "),n("strong",null,"it will override"),s(" them.")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object|string} extPkg - Object to extend with or relative path to a JSON file
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendPackageJson"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"scripts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'electron'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'quasar dev -m electron'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("p",null,[s("The above example adds an npm script to the app’s package.json, so you can then execute "),n("code",{class:"doc-token"},"yarn electron"),s(" (or the equivalent "),n("code",{class:"doc-token"},"npm run electron"),s(").")]),n("h3",{id:"api-extendjsonfile",class:"doc-heading doc-h3",onClick:r=>o(d)("api-extendjsonfile")},"api.extendJsonFile",8,["onClick"]),n("p",null,"Extend a JSON file with new props (deep merge). If specifying existing props, it will override them."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} file (relative path to app root folder)
 * @param {object} newData (Object to merge in)
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendJsonFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/some.json'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"newProp"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'some-value'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-render",class:"doc-heading doc-h3",onClick:r=>o(d)("api-render")},"api.render",8,["onClick"]),n("p",null,"Renders (copies) a folder from your App Extension templates (any folder you specify) into root of the app. Maintains the same folder structure that the template folder has."),n("p",null,"If some of the files already exist in the app then it will ask the user if they should be overwritten or not."),n("p",null,"Needs a relative path to the folder of the file calling render()."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Render a folder from extension templates into devland
 * Needs a path (to a folder) relative to the path of the file where render() is called
 *
 * @param {string} templatePath (relative path to folder to render in app)
 * @param {object} scope (optional; rendering scope variables)
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./path/to/a/template/folder'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h4",{id:"filename-edge-cases",class:"doc-heading doc-h4",onClick:r=>o(d)("filename-edge-cases")},"Filename edge cases",8,["onClick"]),n("p",null,"If you want to render a template file that either begins with a dot (i.e. .env) you will have to follow a specific naming convention, since dotfiles are ignored when publishing your plugin to npm:"),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# templates containing dotfiles must use an"),s(`
`),n("span",{class:"token comment"},"# underscore instead of the dot in their names:"),s(`

some-folder/_env

`),n("span",{class:"token comment"},"# When calling api.render('./some-folder'), this will be"),s(`
`),n("span",{class:"token comment"},"# rendered in the project folder as:"),s(`

/.env`)])]),n(p,{lang:"bash"})]),_:1}),n("p",null,[s("If you want to render a file whose name actually begins with an underscore, then the filename must begin with "),n("code",{class:"doc-token"},"__"),s(" (two underscore characters instead of only one):")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[s(`some-folder/__my.css

`),n("span",{class:"token comment"},"# When calling api.render('./template'), this will be"),s(`
`),n("span",{class:"token comment"},"# rendered in the project folder as:"),s(`

/_my.css`)])]),n(p,{lang:"bash"})]),_:1}),n("h4",{id:"using-scope",class:"doc-heading doc-h4",onClick:r=>o(d)("using-scope")},"Using scope",8,["onClick"]),n("p",null,[s("You can also inject some decision-making code into the files to be rendered by interpolating with "),n(h,{to:"https://lodash.com/docs/4.17.15#template"},{default:c(()=>[s("lodash/template")]),_:1}),s(" syntax.")]),n("p",null,"Example:"),n(o(k),{title:"src/install.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// (my-folder is located in same folder as"),s(`
`),n("span",{class:"token comment"},"// the file in which following call takes place)"),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./my-folder'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"prompts"),n("span",{class:"token operator"},":"),s(" api"),n("span",{class:"token punctuation"},"."),s(`prompts
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("p",null,[s("Let’s imagine we use a "),n(h,{to:"/app-extensions/development-guide/prompts-api"},{default:c(()=>[s("Prompts API")]),_:1}),s(" file too. It asks the user if he/she wants “Feature X” and stores the answer in a variable called “featureX”.")]),n("p",null,"We can take some decisions on what the files that we render look like, during rendering them. This removes the need of creating two folders and deciding which to render, based on some decision."),n(o(k),{title:"src/my-folder/some-file.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("prompts"),n("span",{class:"token punctuation"},"."),s("featureX"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" message "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},`'This is content when "Feature X" exists'`),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" message "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},`'This is content when we don\\'t have "Feature X"'`),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"%"),n("span",{class:"token operator"},">")])]),n(p)]),_:1}),n("p",null,"Possibilities are limited only by your imagination."),n("h3",{id:"api-renderfile",class:"doc-heading doc-h3",onClick:r=>o(d)("api-renderfile")},"api.renderFile",8,["onClick"]),n("p",null,"Similar with api.render() with the difference that this method renders a single file."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Render a file from extension template into devland
 * Needs a path (to a file) relative to the path of the file where renderFile() is called
 *
 * @param {string} relativeSourcePath (file path relative to the folder from which the install script is called)
 * @param {string} relativeTargetPath (file path relative to the root of the app -- including filename!)
 * @param {object} scope (optional; rendering scope variables)
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"renderFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./path/to/a/template/filename'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'path/relative/to/app/root/filename'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"prompts"),n("span",{class:"token operator"},":"),s(" api"),n("span",{class:"token punctuation"},"."),s(`prompts
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"renderFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./my-file.json'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'src/my-file.json'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-getpersistentconf",class:"doc-heading doc-h3",onClick:r=>o(d)("api-getpersistentconf")},"api.getPersistentConf",8,["onClick"]),n("p",null,"Get the internal persistent config of this extension. Returns empty object if it has none."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-setpersistentconf",class:"doc-heading doc-h3",onClick:r=>o(d)("api-setpersistentconf")},"api.setPersistentConf",8,["onClick"]),n("p",null,"Set the internal persistent config of this extension. If it already exists, it is overwritten."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-mergepersistentconf",class:"doc-heading doc-h3",onClick:r=>o(d)("api-mergepersistentconf")},"api.mergePersistentConf",8,["onClick"]),n("p",null,"Deep merge into the internal persistent config of this extension. If extension does not have any config already set, this is essentially equivalent to setting it for the first time."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {object} cfg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mergePersistentConf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-onexitlog",class:"doc-heading doc-h3",onClick:r=>o(d)("api-onexitlog")},"api.onExitLog",8,["onClick"]),n("p",null,"Adds a message to be printed after App CLI finishes up installing the App Extension and is about to exit. Can be called multiple times to register multiple exit logs."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} msg
 */`),s(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onExitLog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thanks for installing my awesome extension'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1})]}),_:1},x))}}},b=v.setup;v.setup=(w,g)=>{const $=q();return($.modules||($.modules=new Set)).add("src/pages/app-extensions/development-guide/install-api.md"),b?b(w,g):void 0};const G=N(v,[["__file","install-api.md"]]);export{G as default};
