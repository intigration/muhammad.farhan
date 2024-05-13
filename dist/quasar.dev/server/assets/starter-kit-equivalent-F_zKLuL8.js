import{mergeProps as q,withCtx as c,createTextVNode as a,unref as i,createVNode as n,useSSRContext as C}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as A,a as $}from"./DocPage-DKr-0pQn.js";import{D as b}from"./DocTree-Kz2iQlb5.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"starter-kit-equivalent",__ssrInlineRender:!0,setup(g){const d=[{id:"the-structure",title:"2. The structure"},{id:"the-install-script",title:"3. The install script"},{id:"the-index-script",title:"4. The index script"},{id:"the-uninstall-script",title:"5. The uninstall script"}],h={tree:{l:".",c:[{l:"README.md"},{l:"package.json"},{l:"src",c:[{l:"boot",c:[{l:"my-starter-kit-boot.js"}]},{l:"templates",c:[{l:"common-files",c:[{l:"README.md"},{l:"some-folder",c:[{l:"tasks.md"}]}]},{l:"serviceA",c:[{l:"src",c:[{l:"services",c:[{l:"serviceA.js"}]}]}]},{l:"serviceB",c:[{l:"src",c:[{l:"services",c:[{l:"serviceB.js"}]}]}]}]},{l:"index.js",e:"Described in Index API"},{l:"install.js",e:"Described in Install API"},{l:"prompts.js",e:"Described in Prompts API"},{l:"uninstall.js",e:"Described in Uninstall API"}]}]}};return(P,v,x,W)=>{v(l(A,q({title:"Starter kit equivalent",desc:"Tips and tricks on how to use a Quasar App Extension to create the equivalent of a starter kit.",heading:"","edit-link":"app-extensions/tips-and-tricks/starter-kit-equivalent",toc:d},W),{default:c((T,o,m,t)=>{if(o)o(`<p${t}>This guide is for when you want to create what essentially is a “starter kit” that adds stuff (/quasar.config file configuration, folders, files, CLI hooks) on top of the official starter kit. This allows you to have multiple projects sharing a common structure/logic (and only one package to manage them rather than having to change all projects individually to match your common pattern), and also allows you to share all this with the community.</p><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>In order for creating an App Extension project folder, please first read the `),o(l($,{to:"/app-extensions/development-guide/introduction"},{default:c((r,e,u,s)=>{if(e)e("Development Guide &gt; Introduction");else return[a("Development Guide > Introduction")]}),_:1},m,t)),o(`.</p></div><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>Full Example</p><p${t}>To see an example of what we will build, head over to `),o(l($,{to:"https://github.com/quasarframework/app-extension-examples/tree/v2/my-starter-kit"},{default:c((r,e,u,s)=>{if(e)e("MyStarterKit full example");else return[a("MyStarterKit full example")]}),_:1},m,t)),o(`, which is a github repo with this App Extension.</p></div><p${t}>We’ll be creating an example App Extension which does the following:</p><ul${t}><li${t}>it prompts the user what features it wants this App Extension to install</li><li${t}>renders (copies) files into the hosting folder, according to the answers he gave</li><li${t}>it extends the /quasar.config file</li><li${t}>it extends the Webpack configuration</li><li${t}>it uses an App Extension hook (onPublish)</li><li${t}>it removes the added files when the App Extension gets uninstalled</li><li${t}>it uses the prompts to define what the App Extension does</li></ul><h2 id="the-structure" class="doc-heading doc-h2"${t}>The structure</h2><p${t}>For the intents of this example, we’ll be creating the following folder structure:</p>`),o(l(b,{def:h.tree},null,m,t)),o(`<h2 id="the-install-script" class="doc-heading doc-h2"${t}>The install script</h2><p${t}>The install script below is only rendering files into the hosted app. Notice the <code class="doc-token"${t}>src/templates</code> folder above, where we decided to keep these templates.</p>`),o(l(i(k),{title:"src/install.js"},{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// (Optional!)</span>
  <span class="token comment"${s}>// Quasar compatibility check; you may need</span>
  <span class="token comment"${s}>// hard dependencies, as in a minimum version of the &quot;quasar&quot;</span>
  <span class="token comment"${s}>// package or a minimum version of Quasar App CLI</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;quasar&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0&#39;</span><span class="token punctuation"${s}>)</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-vite&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
  <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span> <span class="token comment"${s}>// api.hasWebpack === true</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-webpack&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^4.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token comment"${s}>// We render some files into the hosting project</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>prompts<span class="token punctuation"${s}>.</span>serviceA<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>render</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;./templates/serviceA&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>prompts<span class="token punctuation"${s}>.</span>serviceB<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// we supply interpolation variables</span>
    <span class="token comment"${s}>// to the template</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>render</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;./templates/serviceB&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>productName</span><span class="token operator"${s}>:</span> api<span class="token punctuation"${s}>.</span>prompts<span class="token punctuation"${s}>.</span>productName
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token comment"${s}>// we always render the following template:</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>render</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;./templates/common-files&#39;</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// (Optional!)"),a(`
  `),n("span",{class:"token comment"},"// Quasar compatibility check; you may need"),a(`
  `),n("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),a(`
  `),n("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// We render some files into the hosting project"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceA"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./templates/serviceA'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceB"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we supply interpolation variables"),a(`
    `),n("span",{class:"token comment"},"// to the template"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./templates/serviceB'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"productName"),n("span",{class:"token operator"},":"),a(" api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a(`productName
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// we always render the following template:"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./templates/common-files'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<p${t}>Notice that we use the prompts to decide what to render into the hosting project. Furthermore, if the user has selected “service B”, then we’ll also have a “productName” that we can use when we render the service B’s file.</p><h2 id="the-index-script" class="doc-heading doc-h2"${t}>The index script</h2><p${t}>We do a few things in the index script, like extending the /quasar.config file, hooking into one of the many Index API hooks (onPublish in this case), and chaining the Webpack configuration:</p>`),o(l(i(k),{title:"src/index.js"},{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// (Optional!)</span>
  <span class="token comment"${s}>// Quasar compatibility check; you may need</span>
  <span class="token comment"${s}>// hard dependencies, as in a minimum version of the &quot;quasar&quot;</span>
  <span class="token comment"${s}>// package or a minimum version of Quasar App CLI</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;quasar&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0&#39;</span><span class="token punctuation"${s}>)</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-vite&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
  <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span> <span class="token comment"${s}>// api.hasWebpack === true</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-webpack&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^4.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token comment"${s}>// Here we extend the /quasar.config file;</span>
  <span class="token comment"${s}>// (extendQuasarConf() will be defined later in this tutorial, continue reading)</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendQuasarConf</span><span class="token punctuation"${s}>(</span>extendQuasarConf<span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// Here we register the onPublish hook,</span>
  <span class="token comment"${s}>// only if user answered that he wants the publishing service</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>prompts<span class="token punctuation"${s}>.</span>publishService<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// onPublish() will be defined later in this tutorial, continue reading</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>onPublish</span><span class="token punctuation"${s}>(</span>onPublish<span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>extendViteConf</span><span class="token punctuation"${s}>(</span>extendVite<span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
  <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span> <span class="token comment"${s}>// api.hasWebpack === true</span>
    <span class="token comment"${s}>// we add/change/remove something in the Webpack configuration</span>
    <span class="token comment"${s}>// (chainWebpack() will be defined later in this tutorial, continue reading)</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>chainWebpack</span><span class="token punctuation"${s}>(</span>chainWebpack<span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token comment"${s}>// there&#39;s lots more hooks that you can use...</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// (Optional!)"),a(`
  `),n("span",{class:"token comment"},"// Quasar compatibility check; you may need"),a(`
  `),n("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),a(`
  `),n("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// Here we extend the /quasar.config file;"),a(`
  `),n("span",{class:"token comment"},"// (extendQuasarConf() will be defined later in this tutorial, continue reading)"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),n("span",{class:"token punctuation"},"("),a("extendQuasarConf"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// Here we register the onPublish hook,"),a(`
  `),n("span",{class:"token comment"},"// only if user answered that he wants the publishing service"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("publishService"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// onPublish() will be defined later in this tutorial, continue reading"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPublish"),n("span",{class:"token punctuation"},"("),a("onPublish"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendViteConf"),n("span",{class:"token punctuation"},"("),a("extendVite"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    `),n("span",{class:"token comment"},"// we add/change/remove something in the Webpack configuration"),a(`
    `),n("span",{class:"token comment"},"// (chainWebpack() will be defined later in this tutorial, continue reading)"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),a("chainWebpack"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// there's lots more hooks that you can use..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<p${t}>Here’s an example of <code class="doc-token"${t}>extendQuasarConf</code> definition:</p>`),o(l(i(k),null,{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>function</span> <span class="token function"${s}>extendQuasarConf</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>conf<span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  conf<span class="token punctuation"${s}>.</span>extras<span class="token punctuation"${s}>.</span><span class="token function"${s}>push</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;ionicons-v4&#39;</span><span class="token punctuation"${s}>)</span>
  conf<span class="token punctuation"${s}>.</span>framework<span class="token punctuation"${s}>.</span>iconSet <span class="token operator"${s}>=</span> <span class="token string"${s}>&#39;ionicons-v4&#39;</span>

  <span class="token comment"${s}>//</span>
  <span class="token comment"${s}>// We register a boot file. User does not need to tamper with it,</span>
  <span class="token comment"${s}>// so we keep it into the App Extension code:</span>
  <span class="token comment"${s}>//</span>

  <span class="token comment"${s}>// make sure my-ext boot file is registered</span>
  conf<span class="token punctuation"${s}>.</span>boot<span class="token punctuation"${s}>.</span><span class="token function"${s}>push</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;~quasar-app-extension-my-starter-kit/src/boot/my-starter-kit-boot.js&#39;</span><span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// @quasar/app-vite does not need this</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>!==</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// make sure boot file get transpiled</span>
    conf<span class="token punctuation"${s}>.</span>build<span class="token punctuation"${s}>.</span>transpileDependencies<span class="token punctuation"${s}>.</span><span class="token function"${s}>push</span><span class="token punctuation"${s}>(</span><span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>quasar-app-extension-my-starter-kit[\\\\/]src</span><span class="token regex-delimiter"${s}>/</span></span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"extendQuasarConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  conf`),n("span",{class:"token punctuation"},"."),a("extras"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ionicons-v4'"),n("span",{class:"token punctuation"},")"),a(`
  conf`),n("span",{class:"token punctuation"},"."),a("framework"),n("span",{class:"token punctuation"},"."),a("iconSet "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'ionicons-v4'"),a(`

  `),n("span",{class:"token comment"},"//"),a(`
  `),n("span",{class:"token comment"},"// We register a boot file. User does not need to tamper with it,"),a(`
  `),n("span",{class:"token comment"},"// so we keep it into the App Extension code:"),a(`
  `),n("span",{class:"token comment"},"//"),a(`

  `),n("span",{class:"token comment"},"// make sure my-ext boot file is registered"),a(`
  conf`),n("span",{class:"token punctuation"},"."),a("boot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'~quasar-app-extension-my-starter-kit/src/boot/my-starter-kit-boot.js'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// @quasar/app-vite does not need this"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// make sure boot file get transpiled"),a(`
    conf`),n("span",{class:"token punctuation"},"."),a("build"),n("span",{class:"token punctuation"},"."),a("transpileDependencies"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"quasar-app-extension-my-starter-kit[\\\\/]src"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<p${t}>The <code class="doc-token"${t}>onPublish</code> function:</p>`),o(l(i(k),null,{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>function</span> <span class="token function"${s}>onPublish</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> arg<span class="token punctuation"${s}>,</span> distDir <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// this hook is called when &quot;quasar build --publish&quot; is called</span>

  <span class="token comment"${s}>// your publish logic here...</span>
  console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;We should publish now. But maybe later? :)&#39;</span><span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// are we trying to publish a Cordova app?</span>
  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>ctx<span class="token punctuation"${s}>.</span>modeName <span class="token operator"${s}>===</span> <span class="token string"${s}>&#39;cordova&#39;</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// do something</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onPublish"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" arg"),n("span",{class:"token punctuation"},","),a(" distDir "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// this hook is called when "quasar build --publish" is called'),a(`

  `),n("span",{class:"token comment"},"// your publish logic here..."),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'We should publish now. But maybe later? :)'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// are we trying to publish a Cordova app?"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("ctx"),n("span",{class:"token punctuation"},"."),a("modeName "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'cordova'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<p${t}>The <code class="doc-token"${t}>extendVite</code> function:</p>`),o(l(i(k),null,{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>function</span> <span class="token function"${s}>extendVite</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>viteConf<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// viteConf is a Vite config object generated by Quasar CLI</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"extendVite"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("viteConf"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// viteConf is a Vite config object generated by Quasar CLI"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<p${t}>The <code class="doc-token"${t}>chainWebpack</code> function:</p>`),o(l(i(k),null,{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>function</span> <span class="token function"${s}>chainWebpack</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>cfg<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> isClient<span class="token punctuation"${s}>,</span> isServer <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// cfg is a Webpack chain Object;</span>
  <span class="token comment"${s}>// docs on how to use it: webpack-chain docs (https://github.com/neutrinojs/webpack-chain)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"chainWebpack"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// cfg is a Webpack chain Object;"),a(`
  `),n("span",{class:"token comment"},"// docs on how to use it: webpack-chain docs (https://github.com/neutrinojs/webpack-chain)"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<h2 id="the-uninstall-script" class="doc-heading doc-h2"${t}>The uninstall script</h2><p${t}>When the App Extension gets uninstall, we need to do some cleanup. But beware what you delete from the app-space! Some files might still be needed. Proceed with extreme care, if you decide to have an uninstall script.</p>`),o(l(i(k),null,{default:c((r,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// we yarn added it to our App Extension,</span>
<span class="token comment"${s}>// so we can import the following:</span>
<span class="token keyword"${s}>const</span> rimraf <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;rimraf&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// Careful when you remove folders!</span>
  <span class="token comment"${s}>// You don&#39;t want to delete files that are still needed by the Project,</span>
  <span class="token comment"${s}>// or files that are not owned by this app extension.</span>

  <span class="token comment"${s}>// Here, we could also remove the /src/services folder altogether,</span>
  <span class="token comment"${s}>// but what if the user has added other files into this folder?</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>prompts<span class="token punctuation"${s}>.</span>serviceA<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// we added it on install, so we remove it</span>
    rimraf<span class="token punctuation"${s}>.</span><span class="token function"${s}>sync</span><span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>src</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;services/serviceA.js&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>prompts<span class="token punctuation"${s}>.</span>serviceB<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// we added it on install, so we remove it</span>
    rimraf<span class="token punctuation"${s}>.</span><span class="token function"${s}>sync</span><span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>src</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;services/serviceB.js&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token comment"${s}>// we added it on install, so we remove it</span>
  rimraf<span class="token punctuation"${s}>.</span><span class="token function"${s}>sync</span><span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>app</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-folder&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
  <span class="token comment"${s}>// warning... we&#39;ve added this folder, but what if the</span>
  <span class="token comment"${s}>// developer added more files into this folder???</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(l(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we yarn added it to our App Extension,"),a(`
`),n("span",{class:"token comment"},"// so we can import the following:"),a(`
`),n("span",{class:"token keyword"},"const"),a(" rimraf "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'rimraf'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// Careful when you remove folders!"),a(`
  `),n("span",{class:"token comment"},"// You don't want to delete files that are still needed by the Project,"),a(`
  `),n("span",{class:"token comment"},"// or files that are not owned by this app extension."),a(`

  `),n("span",{class:"token comment"},"// Here, we could also remove the /src/services folder altogether,"),a(`
  `),n("span",{class:"token comment"},"// but what if the user has added other files into this folder?"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceA"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we added it on install, so we remove it"),a(`
    rimraf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'services/serviceA.js'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceB"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we added it on install, so we remove it"),a(`
    rimraf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'services/serviceB.js'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// we added it on install, so we remove it"),a(`
  rimraf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-folder'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token comment"},"// warning... we've added this folder, but what if the"),a(`
  `),n("span",{class:"token comment"},"// developer added more files into this folder???"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),o(`<p${t}>Notice that we are requesting <code class="doc-token"${t}>rimraf</code> npm package. This means that we yarn/npm added it into our App Extension project.</p>`);else return[n("p",null,"This guide is for when you want to create what essentially is a “starter kit” that adds stuff (/quasar.config file configuration, folders, files, CLI hooks) on top of the official starter kit. This allows you to have multiple projects sharing a common structure/logic (and only one package to manage them rather than having to change all projects individually to match your common pattern), and also allows you to share all this with the community."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("In order for creating an App Extension project folder, please first read the "),n($,{to:"/app-extensions/development-guide/introduction"},{default:c(()=>[a("Development Guide > Introduction")]),_:1}),a(".")])]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Full Example"),n("p",null,[a("To see an example of what we will build, head over to "),n($,{to:"https://github.com/quasarframework/app-extension-examples/tree/v2/my-starter-kit"},{default:c(()=>[a("MyStarterKit full example")]),_:1}),a(", which is a github repo with this App Extension.")])]),n("p",null,"We’ll be creating an example App Extension which does the following:"),n("ul",null,[n("li",null,"it prompts the user what features it wants this App Extension to install"),n("li",null,"renders (copies) files into the hosting folder, according to the answers he gave"),n("li",null,"it extends the /quasar.config file"),n("li",null,"it extends the Webpack configuration"),n("li",null,"it uses an App Extension hook (onPublish)"),n("li",null,"it removes the added files when the App Extension gets uninstalled"),n("li",null,"it uses the prompts to define what the App Extension does")]),n("h2",{id:"the-structure",class:"doc-heading doc-h2",onClick:r=>i(f)("the-structure")},"The structure",8,["onClick"]),n("p",null,"For the intents of this example, we’ll be creating the following folder structure:"),n(b,{def:h.tree},null,8,["def"]),n("h2",{id:"the-install-script",class:"doc-heading doc-h2",onClick:r=>i(f)("the-install-script")},"The install script",8,["onClick"]),n("p",null,[a("The install script below is only rendering files into the hosted app. Notice the "),n("code",{class:"doc-token"},"src/templates"),a(" folder above, where we decided to keep these templates.")]),n(i(k),{title:"src/install.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// (Optional!)"),a(`
  `),n("span",{class:"token comment"},"// Quasar compatibility check; you may need"),a(`
  `),n("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),a(`
  `),n("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// We render some files into the hosting project"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceA"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./templates/serviceA'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceB"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we supply interpolation variables"),a(`
    `),n("span",{class:"token comment"},"// to the template"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./templates/serviceB'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"productName"),n("span",{class:"token operator"},":"),a(" api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a(`productName
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// we always render the following template:"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./templates/common-files'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,"Notice that we use the prompts to decide what to render into the hosting project. Furthermore, if the user has selected “service B”, then we’ll also have a “productName” that we can use when we render the service B’s file."),n("h2",{id:"the-index-script",class:"doc-heading doc-h2",onClick:r=>i(f)("the-index-script")},"The index script",8,["onClick"]),n("p",null,"We do a few things in the index script, like extending the /quasar.config file, hooking into one of the many Index API hooks (onPublish in this case), and chaining the Webpack configuration:"),n(i(k),{title:"src/index.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// (Optional!)"),a(`
  `),n("span",{class:"token comment"},"// Quasar compatibility check; you may need"),a(`
  `),n("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),a(`
  `),n("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// Here we extend the /quasar.config file;"),a(`
  `),n("span",{class:"token comment"},"// (extendQuasarConf() will be defined later in this tutorial, continue reading)"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendQuasarConf"),n("span",{class:"token punctuation"},"("),a("extendQuasarConf"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// Here we register the onPublish hook,"),a(`
  `),n("span",{class:"token comment"},"// only if user answered that he wants the publishing service"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("publishService"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// onPublish() will be defined later in this tutorial, continue reading"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPublish"),n("span",{class:"token punctuation"},"("),a("onPublish"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"extendViteConf"),n("span",{class:"token punctuation"},"("),a("extendVite"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// api.hasWebpack === true"),a(`
    `),n("span",{class:"token comment"},"// we add/change/remove something in the Webpack configuration"),a(`
    `),n("span",{class:"token comment"},"// (chainWebpack() will be defined later in this tutorial, continue reading)"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),a("chainWebpack"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// there's lots more hooks that you can use..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("Here’s an example of "),n("code",{class:"doc-token"},"extendQuasarConf"),a(" definition:")]),n(i(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"extendQuasarConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("conf"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  conf`),n("span",{class:"token punctuation"},"."),a("extras"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ionicons-v4'"),n("span",{class:"token punctuation"},")"),a(`
  conf`),n("span",{class:"token punctuation"},"."),a("framework"),n("span",{class:"token punctuation"},"."),a("iconSet "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'ionicons-v4'"),a(`

  `),n("span",{class:"token comment"},"//"),a(`
  `),n("span",{class:"token comment"},"// We register a boot file. User does not need to tamper with it,"),a(`
  `),n("span",{class:"token comment"},"// so we keep it into the App Extension code:"),a(`
  `),n("span",{class:"token comment"},"//"),a(`

  `),n("span",{class:"token comment"},"// make sure my-ext boot file is registered"),a(`
  conf`),n("span",{class:"token punctuation"},"."),a("boot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'~quasar-app-extension-my-starter-kit/src/boot/my-starter-kit-boot.js'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// @quasar/app-vite does not need this"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// make sure boot file get transpiled"),a(`
    conf`),n("span",{class:"token punctuation"},"."),a("build"),n("span",{class:"token punctuation"},"."),a("transpileDependencies"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"quasar-app-extension-my-starter-kit[\\\\/]src"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("The "),n("code",{class:"doc-token"},"onPublish"),a(" function:")]),n(i(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onPublish"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("api"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" arg"),n("span",{class:"token punctuation"},","),a(" distDir "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// this hook is called when "quasar build --publish" is called'),a(`

  `),n("span",{class:"token comment"},"// your publish logic here..."),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'We should publish now. But maybe later? :)'"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// are we trying to publish a Cordova app?"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("ctx"),n("span",{class:"token punctuation"},"."),a("modeName "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'cordova'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// do something"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("The "),n("code",{class:"doc-token"},"extendVite"),a(" function:")]),n(i(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"extendVite"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("viteConf"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// viteConf is a Vite config object generated by Quasar CLI"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("The "),n("code",{class:"doc-token"},"chainWebpack"),a(" function:")]),n(i(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"chainWebpack"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("cfg"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" isClient"),n("span",{class:"token punctuation"},","),a(" isServer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" api")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// cfg is a Webpack chain Object;"),a(`
  `),n("span",{class:"token comment"},"// docs on how to use it: webpack-chain docs (https://github.com/neutrinojs/webpack-chain)"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h2",{id:"the-uninstall-script",class:"doc-heading doc-h2",onClick:r=>i(f)("the-uninstall-script")},"The uninstall script",8,["onClick"]),n("p",null,"When the App Extension gets uninstall, we need to do some cleanup. But beware what you delete from the app-space! Some files might still be needed. Proceed with extreme care, if you decide to have an uninstall script."),n(i(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we yarn added it to our App Extension,"),a(`
`),n("span",{class:"token comment"},"// so we can import the following:"),a(`
`),n("span",{class:"token keyword"},"const"),a(" rimraf "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'rimraf'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// Careful when you remove folders!"),a(`
  `),n("span",{class:"token comment"},"// You don't want to delete files that are still needed by the Project,"),a(`
  `),n("span",{class:"token comment"},"// or files that are not owned by this app extension."),a(`

  `),n("span",{class:"token comment"},"// Here, we could also remove the /src/services folder altogether,"),a(`
  `),n("span",{class:"token comment"},"// but what if the user has added other files into this folder?"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceA"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we added it on install, so we remove it"),a(`
    rimraf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'services/serviceA.js'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("prompts"),n("span",{class:"token punctuation"},"."),a("serviceB"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// we added it on install, so we remove it"),a(`
    rimraf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'services/serviceB.js'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// we added it on install, so we remove it"),a(`
  rimraf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-folder'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token comment"},"// warning... we've added this folder, but what if the"),a(`
  `),n("span",{class:"token comment"},"// developer added more files into this folder???"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("Notice that we are requesting "),n("code",{class:"doc-token"},"rimraf"),a(" npm package. This means that we yarn/npm added it into our App Extension project.")])]}),_:1},x))}}},y=w.setup;w.setup=(g,d)=>{const h=C();return(h.modules||(h.modules=new Set)).add("src/pages/app-extensions/tips-and-tricks/starter-kit-equivalent.md"),y?y(g,d):void 0};const G=j(w,[["__file","starter-kit-equivalent.md"]]);export{G as default};
