import{mergeProps as W,withCtx as p,createTextVNode as s,unref as $,createVNode as n,useSSRContext as q}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import"quasar";import{D as A,a as l}from"./DocPage-DKr-0pQn.js";import{D as d}from"./DocTree-Kz2iQlb5.js";import{D as f}from"./DocPrerender-DPOnWPFO.js";import{C as r}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"chain-webpack",__ssrInlineRender:!0,setup(w){const m={tree:{l:".",c:[{l:"package.json"},{l:"src",c:[{l:"index.js",e:"Described in Index API"}]}]}};return(g,x,b,v)=>{x(c(A,W({title:"Chain Webpack",desc:"Tips and tricks on how to use a Quasar App Extension to configure the host app to use a Webpack loader.",heading:"","edit-link":"app-extensions/tips-and-tricks/chain-webpack"},v),{default:p((D,e,u,t)=>{if(e)e(`<p${t}>This guide is for when you want to ensure that a `),e(c(l,{to:"https://webpack.js.org/loaders/"},{default:p((k,o,i,a)=>{if(o)o("Webpack Loader");else return[s("Webpack Loader")]}),_:1},u,t)),e(` is chained into the hosting app, because you depend on it for your own App Extension to work. We are assuming we will release this App Extension for <code class="doc-token"${t}>@quasar/app-webpack</code>, as it does not makes sense for <code class="doc-token"${t}>@quasar/app-vite</code> (which does not uses Webpack at all).</p><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>In order for creating an App Extension project folder, please first read the `),e(c(l,{to:"/app-extensions/development-guide/introduction"},{default:p((k,o,i,a)=>{if(o)o("Development Guide &gt; Introduction");else return[s("Development Guide > Introduction")]}),_:1},u,t)),e(`.</p></div><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>Full Example</p><p${t}>To see an example of what we will build, head over to `),e(c(l,{to:"https://github.com/quasarframework/app-extension-examples/tree/v2/chain-webpack"},{default:p((k,o,i,a)=>{if(o)o("full example");else return[s("full example")]}),_:1},u,t)),e(`, which is a GitHub repo with this App Extension.</p></div><p${t}>We will only need the /index.js script for this, because we can use the `),e(c(l,{to:"/app-extensions/development-guide/index-api"},{default:p((k,o,i,a)=>{if(o)o("Index API");else return[s("Index API")]}),_:1},u,t)),e(" to configure the quasar.config file from the host app to include our Webpack chaining.</p>"),e(c(d,{def:m.tree},null,u,t)),e(`<p${t}>And /index.js would look like this:</p>`),e(c($(f),{title:"File: /index.js"},{default:p((k,o,i,a)=>{if(o)o(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>api</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// (Optional!)</span>
  <span class="token comment"${a}>// Quasar compatibility check; you may need</span>
  <span class="token comment"${a}>// hard dependencies, as in a minimum version of the &quot;quasar&quot;</span>
  <span class="token comment"${a}>// package or a minimum version of Quasar App CLI</span>
  api<span class="token punctuation"${a}>.</span><span class="token function"${a}>compatibleWith</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;quasar&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;^2.0.0&#39;</span><span class="token punctuation"${a}>)</span>
  api<span class="token punctuation"${a}>.</span><span class="token function"${a}>compatibleWith</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;@quasar/app-webpack&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;^4.0.0-beta.1&#39;</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// chain webpack</span>
  api<span class="token punctuation"${a}>.</span><span class="token function"${a}>chainWebpack</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>chain</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token function"${a}>chainWebpack</span><span class="token punctuation"${a}>(</span>api<span class="token punctuation"${a}>.</span>ctx<span class="token punctuation"${a}>,</span> chain<span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span></code></pre>`),o(c(r,null,null,i,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// (Optional!)"),s(`
  `),n("span",{class:"token comment"},"// Quasar compatibility check; you may need"),s(`
  `),n("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),s(`
  `),n("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// chain webpack"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},","),s(" chain"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},u,t)),e(`<p${t}>Our “chainWebpack” method, in the same file as above:</p>`),e(c($(f),{title:"File: /index.js"},{default:p((k,o,i,a)=>{if(o)o(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>const</span> MarkdownIt <span class="token operator"${a}>=</span> <span class="token function"${a}>require</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;markdown-it&#39;</span><span class="token punctuation"${a}>)</span>
<span class="token keyword"${a}>const</span> md <span class="token operator"${a}>=</span> <span class="token keyword"${a}>new</span> <span class="token class-name"${a}>MarkdownIt</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

<span class="token keyword"${a}>const</span> <span class="token function-variable function"${a}>chainWebpack</span> <span class="token operator"${a}>=</span> <span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>ctx<span class="token punctuation"${a}>,</span> chain</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> rule <span class="token operator"${a}>=</span> chain<span class="token punctuation"${a}>.</span>module<span class="token punctuation"${a}>.</span><span class="token function"${a}>rule</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;md&#39;</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span><span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.md$</span><span class="token regex-delimiter"${a}>/</span></span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>pre</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  rule<span class="token punctuation"${a}>.</span><span class="token function"${a}>use</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;v-loader&#39;</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>loader</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;vue-loader&#39;</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>options</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>productionMode</span><span class="token operator"${a}>:</span> ctx<span class="token punctuation"${a}>.</span>prod<span class="token punctuation"${a}>,</span>
      <span class="token literal-property property"${a}>transformAssetUrls</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token literal-property property"${a}>video</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;src&#39;</span><span class="token punctuation"${a}>,</span>
        <span class="token literal-property property"${a}>source</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;src&#39;</span><span class="token punctuation"${a}>,</span>
        <span class="token literal-property property"${a}>img</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;src&#39;</span><span class="token punctuation"${a}>,</span>
        <span class="token literal-property property"${a}>image</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;xlink:href&#39;</span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>

  rule<span class="token punctuation"${a}>.</span><span class="token function"${a}>use</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;ware-loader&#39;</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>loader</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;ware-loader&#39;</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>options</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>raw</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>
      <span class="token function-variable function"${a}>middleware</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>source</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
        <span class="token comment"${a}>// use markdown-it to render the markdown file to html, then</span>
        <span class="token comment"${a}>// surround the output of that that with Vue template syntax</span>
        <span class="token comment"${a}>// so it can be processed by the &#39;vue-loader&#39;</span>
        <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;template&gt;&lt;div&gt;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>md<span class="token punctuation"${a}>.</span><span class="token function"${a}>render</span><span class="token punctuation"${a}>(</span>source<span class="token punctuation"${a}>)</span><span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&lt;/div&gt;&lt;/template&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span></code></pre>`),o(c(r,null,null,i,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'markdown-it'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" md "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"chainWebpack"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" chain")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" rule "),n("span",{class:"token operator"},"="),s(" chain"),n("span",{class:"token punctuation"},"."),s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.md$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pre"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  rule`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'v-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vue-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"options"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"productionMode"),n("span",{class:"token operator"},":"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("prod"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"transformAssetUrls"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"video"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"img"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"image"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xlink:href'"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  rule`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ware-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ware-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"options"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"raw"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"middleware"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"source"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// use markdown-it to render the markdown file to html, then"),s(`
        `),n("span",{class:"token comment"},"// surround the output of that that with Vue template syntax"),s(`
        `),n("span",{class:"token comment"},"// so it can be processed by the 'vue-loader'"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"<template><div>"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("md"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s("source"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"</div></template>"),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},u,t));else return[n("p",null,[s("This guide is for when you want to ensure that a "),n(l,{to:"https://webpack.js.org/loaders/"},{default:p(()=>[s("Webpack Loader")]),_:1}),s(" is chained into the hosting app, because you depend on it for your own App Extension to work. We are assuming we will release this App Extension for "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(", as it does not makes sense for "),n("code",{class:"doc-token"},"@quasar/app-vite"),s(" (which does not uses Webpack at all).")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("In order for creating an App Extension project folder, please first read the "),n(l,{to:"/app-extensions/development-guide/introduction"},{default:p(()=>[s("Development Guide > Introduction")]),_:1}),s(".")])]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Full Example"),n("p",null,[s("To see an example of what we will build, head over to "),n(l,{to:"https://github.com/quasarframework/app-extension-examples/tree/v2/chain-webpack"},{default:p(()=>[s("full example")]),_:1}),s(", which is a GitHub repo with this App Extension.")])]),n("p",null,[s("We will only need the /index.js script for this, because we can use the "),n(l,{to:"/app-extensions/development-guide/index-api"},{default:p(()=>[s("Index API")]),_:1}),s(" to configure the quasar.config file from the host app to include our Webpack chaining.")]),n(d,{def:m.tree},null,8,["def"]),n("p",null,"And /index.js would look like this:"),n($(f),{title:"File: /index.js"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// (Optional!)"),s(`
  `),n("span",{class:"token comment"},"// Quasar compatibility check; you may need"),s(`
  `),n("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),s(`
  `),n("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// chain webpack"),s(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"chainWebpack"),n("span",{class:"token punctuation"},"("),s("api"),n("span",{class:"token punctuation"},"."),s("ctx"),n("span",{class:"token punctuation"},","),s(" chain"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"Our “chainWebpack” method, in the same file as above:"),n($(f),{title:"File: /index.js"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'markdown-it'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" md "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"chainWebpack"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" chain")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" rule "),n("span",{class:"token operator"},"="),s(" chain"),n("span",{class:"token punctuation"},"."),s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.md$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pre"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  rule`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'v-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vue-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"options"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"productionMode"),n("span",{class:"token operator"},":"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("prod"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"transformAssetUrls"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"video"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"img"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"image"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xlink:href'"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  rule`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ware-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ware-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"options"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"raw"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"middleware"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"source"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// use markdown-it to render the markdown file to html, then"),s(`
        `),n("span",{class:"token comment"},"// surround the output of that that with Vue template syntax"),s(`
        `),n("span",{class:"token comment"},"// so it can be processed by the 'vue-loader'"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"<template><div>"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("md"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s("source"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"</div></template>"),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1})]}),_:1},b))}}},y=h.setup;h.setup=(w,m)=>{const g=q();return(g.modules||(g.modules=new Set)).add("src/pages/app-extensions/tips-and-tricks/chain-webpack.md"),y?y(w,m):void 0};const H=j(h,[["__file","chain-webpack.md"]]);export{H as default};
