import{resolveComponent as v,mergeProps as Q,withCtx as p,createTextVNode as a,unref as u,createVNode as n,useSSRContext as D}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as d}from"./page-utils-C-QWsEHe.js";import{D as A,a as f}from"./DocPage-DKr-0pQn.js";import{D as w}from"./DocApi-Df9ryd6x.js";import{D as x}from"./DocInstallation-DgMazQjg.js";import{D as g}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"./DocCardTitle-BSnqQsiz.js";import"./utils-DKnLoYai.js";import"./DocCode-BVg0tuSc.js";import"prismjs";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"loading-bar",__ssrInlineRender:!0,setup(B){const m=[{name:"Ajax Bar",category:"Vue Components",path:"/vue-components/ajax-bar"},{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress"},{name:"Skeleton",category:"Vue Components",path:"/vue-components/skeleton"}],$=[{id:"loadingbar-api",title:"2. LoadingBar API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"usage",title:"4. Usage"},{id:"setting-up-defaults",title:"4.1. Setting Up Defaults",sub:!0},{id:"using-an-ajax-filter",title:"4.2. Using an Ajax filter",sub:!0}];return(U,q,b,j)=>{const h=v("q-badge");q(l(A,Q({title:"LoadingBar",desc:"A Quasar plugin that wraps the QAjaxBar component for the easiest way of showing such a loading indicator in an app.",heading:"","edit-link":"quasar-plugins/loading-bar",toc:$,related:m},j),{default:p((S,e,r,t)=>{if(e)e(`<p${t}>The Quasar LoadingBar plugin offers an easy way to set up your app with a `),e(l(f,{to:"/vue-components/ajax-bar"},{default:p((k,o,i,s)=>{if(o)o("QAjaxBar");else return[a("QAjaxBar")]}),_:1},r,t)),e(` in case you don’t want to handle a QAjaxBar component yourself.</p><p${t}>For a demo, please visit the QAjaxBar documentation page.</p>`),e(l(w,{file:"LoadingBar"},null,r,t)),e(l(x,{plugins:"LoadingBar",config:"loadingBar"},null,r,t)),e(`<p${t}>LoadingBar options are same as when configuring a `),e(l(f,{to:"/vue-components/ajax-bar"},{default:p((k,o,i,s)=>{if(o)o("QAjaxBar");else return[a("QAjaxBar")]}),_:1},r,t)),e(`.</p><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>When using the UMD version of Quasar, all components, directives and plugins are installed by default. This includes LoadingBar. Should you wish to disable it, specify <code class="doc-token"${t}>loadingBar: { skipHijack: true }</code> (which turns off listening to Ajax traffic).</p></div><h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><p${t}>Inside Vue components:</p>`),e(l(u(g),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  $q<span class="token punctuation"${s}>.</span>loadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>start</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  $q<span class="token punctuation"${s}>.</span>loadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>stop</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  $q<span class="token punctuation"${s}>.</span>loadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>increment</span><span class="token punctuation"${s}>(</span>value<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"increment"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},r,t)),e(`<p${t}>Outside of Vue components:</p>`),e(l(u(g),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> LoadingBar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

LoadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>start</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
LoadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>stop</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
LoadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>increment</span><span class="token punctuation"${s}>(</span>value<span class="token punctuation"${s}>)</span></code></pre>`),o(l(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" LoadingBar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"increment"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},r,t)),e(`<h3 id="setting-up-defaults" class="doc-heading doc-h3"${t}>Setting Up Defaults</h3><p${t}>Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.config file &gt; framework &gt; config &gt; loadingBar: {…} or by calling <code class="doc-token"${t}>LoadingBar.setDefaults({...})</code> or <code class="doc-token"${t}>$q.loadingBar.setDefaults({...})</code>. Supports all `),e(l(f,{to:"/vue-components/ajax-bar"},{default:p((k,o,i,s)=>{if(o)o("QAjaxBar");else return[a("QAjaxBar")]}),_:1},r,t)),e(` properties.</p><p${t}>Inside Vue components:</p>`),e(l(u(g),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  $q<span class="token punctuation"${s}>.</span>loadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>setDefaults</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>color</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;purple&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>size</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;15px&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>position</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;bottom&#39;</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefaults"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'purple'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15px'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},r,t)),e(`<p${t}>Outside of Vue components (includes boot files):</p>`),e(l(u(g),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> LoadingBar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

LoadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>setDefaults</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>color</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;purple&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>size</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;15px&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>position</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;bottom&#39;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(l(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" LoadingBar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefaults"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'purple'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15px'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},r,t)),e(`<h3 id="using-an-ajax-filter" class="doc-heading doc-h3"${t}>Using an Ajax filter `),e(l(h,{label:"v2.4.5+"},null,r,t)),e(`</h3><p${t}>Should you want to trigger LoadingBar only for some URLs, then you can use the <code class="doc-token"${t}>setDefaults()</code> method (described above) to configure the <code class="doc-token"${t}>hijackFilter</code> property:</p>`),e(l(u(g),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> LoadingBar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

LoadingBar<span class="token punctuation"${s}>.</span><span class="token function"${s}>setDefaults</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// return a Boolean which has the meaning of</span>
  <span class="token comment"${s}>// &quot;does this URL should trigger LoadingBar?&quot;</span>
  <span class="token function"${s}>hijackFilter</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>url</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// example (only https://my-service.com/* should trigger)</span>
    <span class="token keyword"${s}>return</span> <span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>^https:\\/\\/my-service\\.com</span><span class="token regex-delimiter"${s}>/</span></span><span class="token punctuation"${s}>.</span><span class="token function"${s}>test</span><span class="token punctuation"${s}>(</span>url<span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(l(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" LoadingBar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefaults"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// return a Boolean which has the meaning of"),a(`
  `),n("span",{class:"token comment"},'// "does this URL should trigger LoadingBar?"'),a(`
  `),n("span",{class:"token function"},"hijackFilter"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"url"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// example (only https://my-service.com/* should trigger)"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^https:\\/\\/my-service\\.com"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},r,t));else return[n("p",null,[a("The Quasar LoadingBar plugin offers an easy way to set up your app with a "),n(f,{to:"/vue-components/ajax-bar"},{default:p(()=>[a("QAjaxBar")]),_:1}),a(" in case you don’t want to handle a QAjaxBar component yourself.")]),n("p",null,"For a demo, please visit the QAjaxBar documentation page."),n(w,{file:"LoadingBar"}),n(x,{plugins:"LoadingBar",config:"loadingBar"}),n("p",null,[a("LoadingBar options are same as when configuring a "),n(f,{to:"/vue-components/ajax-bar"},{default:p(()=>[a("QAjaxBar")]),_:1}),a(".")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("When using the UMD version of Quasar, all components, directives and plugins are installed by default. This includes LoadingBar. Should you wish to disable it, specify "),n("code",{class:"doc-token"},"loadingBar: { skipHijack: true }"),a(" (which turns off listening to Ajax traffic).")])]),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:k=>u(d)("usage")},"Usage",8,["onClick"]),n("p",null,"Inside Vue components:"),n(u(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"increment"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Outside of Vue components:"),n(u(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" LoadingBar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"increment"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"setting-up-defaults",class:"doc-heading doc-h3",onClick:k=>u(d)("setting-up-defaults")},"Setting Up Defaults",8,["onClick"]),n("p",null,[a("Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.config file > framework > config > loadingBar: {…} or by calling "),n("code",{class:"doc-token"},"LoadingBar.setDefaults({...})"),a(" or "),n("code",{class:"doc-token"},"$q.loadingBar.setDefaults({...})"),a(". Supports all "),n(f,{to:"/vue-components/ajax-bar"},{default:p(()=>[a("QAjaxBar")]),_:1}),a(" properties.")]),n("p",null,"Inside Vue components:"),n(u(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loadingBar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefaults"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'purple'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15px'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"Outside of Vue components (includes boot files):"),n(u(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" LoadingBar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefaults"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'purple'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15px'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h3",{id:"using-an-ajax-filter",class:"doc-heading doc-h3",onClick:k=>u(d)("using-an-ajax-filter")},[a("Using an Ajax filter "),n(h,{label:"v2.4.5+"})],8,["onClick"]),n("p",null,[a("Should you want to trigger LoadingBar only for some URLs, then you can use the "),n("code",{class:"doc-token"},"setDefaults()"),a(" method (described above) to configure the "),n("code",{class:"doc-token"},"hijackFilter"),a(" property:")]),n(u(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" LoadingBar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

LoadingBar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefaults"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// return a Boolean which has the meaning of"),a(`
  `),n("span",{class:"token comment"},'// "does this URL should trigger LoadingBar?"'),a(`
  `),n("span",{class:"token function"},"hijackFilter"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"url"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// example (only https://my-service.com/* should trigger)"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^https:\\/\\/my-service\\.com"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1})]}),_:1},b))}}},L=y.setup;y.setup=(B,m)=>{const $=D();return($.modules||($.modules=new Set)).add("src/pages/quasar-plugins/loading-bar.md"),L?L(B,m):void 0};const nn=C(y,[["__file","loading-bar.md"]]);export{nn as default};
