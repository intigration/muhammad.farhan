import{provide as W,mergeProps as Q,withCtx as c,createTextVNode as s,unref as i,createVNode as n,useSSRContext as N}from"vue";import{ssrRenderComponent as p}from"vue/server-renderer";import{c as y}from"./page-utils-C-QWsEHe.js";import{D as R,a as A}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocExample-BcaABDtE.js";import{D as q}from"./DocApi-Df9ryd6x.js";import{D as v}from"./DocInstallation-DgMazQjg.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as D}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"app-fullscreen",__ssrInlineRender:!0,setup(w){W("_q_ex",{name:"AppFullscreen"});const f=[{id:"appfullscreen-api",title:"2. AppFullscreen API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"usage",title:"4. Usage"},{id:"watching-for-fullscreen-changes",title:"5. Watching for fullscreen changes"}];return(g,F,b,P)=>{F(p(R,Q({title:"Fullscreen Plugin",desc:"A Quasar plugin to toggle the fullscreen state of your app through the Web Fullscreen API.",heading:"","edit-link":"quasar-plugins/app-fullscreen",toc:f},P),{default:c((C,e,l,t)=>{if(e)e(`<p${t}>There are times when you want your website or App to run in fullscreen. Quasar makes it easy by wrapping the `),e(p(A,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"},{default:c(($,o,k,a)=>{if(o)o("Web Fullscreen API");else return[s("Web Fullscreen API")]}),_:1},l,t)),e(`.</p><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Please note that the behavior is different depending on the platform the code is running on, due to the fact that there isn’t a fixed Web standard for Web Fullscreen API yet.</p></div>`),e(p(q,{file:"AppFullscreen"},null,l,t)),e(p(v,{plugins:"AppFullscreen"},null,l,t)),e(`<h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>For an exhaustive list of properties and methods, please check out the API section.</p></div>`),e(p(i(r),{title:"Outside of a Vue file"},{default:c(($,o,k,a)=>{if(o)o(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> AppFullscreen <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token comment"${a}>// Requesting fullscreen mode:</span>
AppFullscreen<span class="token punctuation"${a}>.</span><span class="token function"${a}>request</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>.</span><span class="token function"${a}>then</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// success!</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>.</span><span class="token function"${a}>catch</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>err</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// oh, no!!!</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>

<span class="token comment"${a}>// Exiting fullscreen mode:</span>
AppFullscreen<span class="token punctuation"${a}>.</span><span class="token function"${a}>exit</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>.</span><span class="token function"${a}>then</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// success!</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>.</span><span class="token function"${a}>catch</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>err</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// oh, no!!!</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),o(p(u,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" AppFullscreen "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token comment"},"// Requesting fullscreen mode:"),s(`
AppFullscreen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// success!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Exiting fullscreen mode:"),s(`
AppFullscreen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// success!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(u)]}),_:1},l,t)),e(p(i(r),{title:"Inside of a Vue file"},{default:c(($,o,k,a)=>{if(o)o(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useQuasar <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> $q <span class="token operator"${a}>=</span> <span class="token function"${a}>useQuasar</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// Requesting fullscreen mode:</span>
  $q<span class="token punctuation"${a}>.</span>fullscreen<span class="token punctuation"${a}>.</span><span class="token function"${a}>request</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>then</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// success!</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>catch</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>err</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// oh, no!!!</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// Exiting fullscreen mode:</span>
  $q<span class="token punctuation"${a}>.</span>fullscreen<span class="token punctuation"${a}>.</span><span class="token function"${a}>exit</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>then</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// success!</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>.</span><span class="token function"${a}>catch</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>err</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// oh, no!!!</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span></code></pre>`),o(p(u,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Requesting fullscreen mode:"),s(`
  $q`),n("span",{class:"token punctuation"},"."),s("fullscreen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// success!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Exiting fullscreen mode:"),s(`
  $q`),n("span",{class:"token punctuation"},"."),s("fullscreen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// success!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},l,t)),e(p(m,{title:"Basic",file:"Basic"},null,l,t)),e(p(m,{title:"On custom element",file:"Targeted"},null,l,t)),e(`<div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>On some phones this will have little effect:</p><ul${t}><li${t}>For example, on Samsung S4, when App goes into fullscreen, the top bar will slide up but still remain on screen.</li><li${t}>On Nexus phones, on the other hand, like Nexus 5, Android navigation buttons and top bar disappear completely.</li></ul><p${t}>It all depends on the Web Fullscreen API support of the platform the code is running on.</p></div><h2 id="watching-for-fullscreen-changes" class="doc-heading doc-h2"${t}>Watching for fullscreen changes</h2>`),e(p(i(r),null,{default:c(($,o,k,a)=>{if(o)o(`<pre class="doc-code"${a}><code${a}><span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;</span>template</span><span class="token punctuation"${a}>&gt;</span></span>...<span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;/</span>template</span><span class="token punctuation"${a}>&gt;</span></span>

<span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;</span>script</span><span class="token punctuation"${a}>&gt;</span></span><span class="token script"${a}><span class="token language-javascript"${a}>
<span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useQuasar <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>
<span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> watch <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>const</span> $q <span class="token operator"${a}>=</span> <span class="token function"${a}>useQuasar</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

    <span class="token function"${a}>watch</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> $q<span class="token punctuation"${a}>.</span>fullscreen<span class="token punctuation"${a}>.</span>isActive<span class="token punctuation"${a}>,</span> <span class="token parameter"${a}>val</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span>val <span class="token operator"${a}>?</span> <span class="token string"${a}>&#39;In fullscreen now&#39;</span> <span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Exited fullscreen&#39;</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>
</span></span><span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;/</span>script</span><span class="token punctuation"${a}>&gt;</span></span></code></pre>`),o(p(u,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" $q"),n("span",{class:"token punctuation"},"."),s("fullscreen"),n("span",{class:"token punctuation"},"."),s("isActive"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"val"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'In fullscreen now'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Exited fullscreen'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},l,t));else return[n("p",null,[s("There are times when you want your website or App to run in fullscreen. Quasar makes it easy by wrapping the "),n(A,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"},{default:c(()=>[s("Web Fullscreen API")]),_:1}),s(".")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"Please note that the behavior is different depending on the platform the code is running on, due to the fact that there isn’t a fixed Web standard for Web Fullscreen API yet.")]),n(q,{file:"AppFullscreen"}),n(v,{plugins:"AppFullscreen"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:$=>i(y)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"For an exhaustive list of properties and methods, please check out the API section.")]),n(i(r),{title:"Outside of a Vue file"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" AppFullscreen "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token comment"},"// Requesting fullscreen mode:"),s(`
AppFullscreen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// success!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Exiting fullscreen mode:"),s(`
AppFullscreen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// success!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(u)]),_:1}),n(i(r),{title:"Inside of a Vue file"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Requesting fullscreen mode:"),s(`
  $q`),n("span",{class:"token punctuation"},"."),s("fullscreen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// success!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Exiting fullscreen mode:"),s(`
  $q`),n("span",{class:"token punctuation"},"."),s("fullscreen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// success!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// oh, no!!!"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n(m,{title:"Basic",file:"Basic"}),n(m,{title:"On custom element",file:"Targeted"}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"On some phones this will have little effect:"),n("ul",null,[n("li",null,"For example, on Samsung S4, when App goes into fullscreen, the top bar will slide up but still remain on screen."),n("li",null,"On Nexus phones, on the other hand, like Nexus 5, Android navigation buttons and top bar disappear completely.")]),n("p",null,"It all depends on the Web Fullscreen API support of the platform the code is running on.")]),n("h2",{id:"watching-for-fullscreen-changes",class:"doc-heading doc-h2",onClick:$=>i(y)("watching-for-fullscreen-changes")},"Watching for fullscreen changes",8,["onClick"]),n(i(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" $q"),n("span",{class:"token punctuation"},"."),s("fullscreen"),n("span",{class:"token punctuation"},"."),s("isActive"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"val"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'In fullscreen now'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Exited fullscreen'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1})]}),_:1},b))}}},x=h.setup;h.setup=(w,f)=>{const g=N();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-plugins/app-fullscreen.md"),x?x(w,f):void 0};const sn=D(h,[["__file","app-fullscreen.md"]]);export{sn as default};
